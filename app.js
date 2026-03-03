/* kly.se demo app.js
 * - Uses KlySwedenSearch + sweden-places.json
 * - Fetches weather from OpenWeather (One Call 3.0, falls back gracefully)
 * - Fetches pollen from Pollenrapporten API (nearest region -> current forecast)
 *
 * IMPORTANT:
 * - Insert your OpenWeather key below (already set from your message).
 * - This file is frontend-only (GitHub Pages friendly).
 */

const OPENWEATHER_KEY = "eb45ab32159d3a2bb8369a2dfc5be8bb";

const $ = (id) => document.getElementById(id);

const state = {
  place: null,
  mode: "temp", // temp | precip
  pollenRegionId: null,
};

function nowHHMM() {
  const d = new Date();
  return d.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
}

function fmtDow(tsSec) {
  const d = new Date(tsSec * 1000);
  return d.toLocaleDateString("sv-SE", { weekday: "short" });
}

function fmtHour(tsSec) {
  const d = new Date(tsSec * 1000);
  return d.toLocaleTimeString("sv-SE", { hour: "2-digit" });
}

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

function uvLevel(uvi) {
  if (uvi == null || Number.isNaN(uvi)) return "—";
  if (uvi < 3) return "Låg";
  if (uvi < 6) return "Måttlig";
  if (uvi < 8) return "Hög";
  if (uvi < 11) return "Mycket hög";
  return "Extrem";
}

function setText(id, val) {
  const el = $(id);
  if (!el) return;
  el.textContent = (val === null || val === undefined || val === "") ? "—" : String(val);
}

function setBadge(id, text) {
  const el = $(id);
  if (!el) return;
  el.textContent = text || "—";
}

function showSearchResults(items) {
  const box = $("searchResults");
  box.innerHTML = "";
  if (!items.length) {
    box.style.display = "none";
    return;
  }
  for (const p of items) {
    const div = document.createElement("div");
    div.className = "search-item";
    div.textContent = window.KlySwedenSearch.label(p);
    div.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectPlace(p);
    });
    box.appendChild(div);
  }
  box.style.display = "block";
}

function hideSearchResults() {
  const box = $("searchResults");
  box.style.display = "none";
}

function persistPlace(place) {
  try { localStorage.setItem("kly_place", JSON.stringify(place)); } catch {}
}
function loadPersistedPlace() {
  try {
    const raw = localStorage.getItem("kly_place");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

async function selectPlace(place) {
  state.place = place;
  persistPlace(place);

  setText("placeName", place.name);
  setText("placeCounty", place.county);

  hideSearchResults();
  $("searchInput").value = place.name;

  await refreshAll();
}

async function refreshAll() {
  if (!state.place) return;
  setText("nowTime", nowHHMM());
  await Promise.allSettled([
    fetchWeather(state.place),
    fetchPollen(state.place),
  ]);
}

function iconForWeather(code, isNight=false) {
  // Minimal mapping (OpenWeather weather codes)
  // Return local svg icons.
  if (!code) return isNight ? "./icons/weather-moon.svg" : "./icons/weather-sun.svg";
  if (code >= 200 && code < 300) return "./icons/weather-storm.svg";
  if (code >= 300 && code < 600) return "./icons/weather-rain.svg";
  if (code >= 600 && code < 700) return "./icons/weather-snow.svg";
  if (code >= 700 && code < 800) return "./icons/weather-fog.svg";
  if (code === 800) return isNight ? "./icons/weather-moon.svg" : "./icons/weather-sun.svg";
  if (code > 800) return "./icons/weather-sun-cloud.svg";
  return "./icons/weather-sun-cloud.svg";
}

async function fetchWeather(place) {
  // Prefer One Call 3.0 for hourly + daily + uvi
  const lat = place.lat, lon = place.lon;
  const onecall = `https://api.openweathermap.org/data/3.0/onecall?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&units=metric&lang=sv&appid=${encodeURIComponent(OPENWEATHER_KEY)}`;

  try {
    const res = await fetch(onecall);
    if (!res.ok) throw new Error(`OneCall failed ${res.status}`);
    const data = await res.json();
    renderWeatherOneCall(data);
    return;
  } catch (e) {
    // Fallback: current weather + forecast (5 day / 3h)
    console.warn("OneCall unavailable, falling back:", e);
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&units=metric&lang=sv&appid=${encodeURIComponent(OPENWEATHER_KEY)}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&units=metric&lang=sv&appid=${encodeURIComponent(OPENWEATHER_KEY)}`;

    const [cRes, fRes] = await Promise.all([fetch(currentUrl), fetch(forecastUrl)]);
    if (!cRes.ok) throw new Error(`Current failed ${cRes.status}`);
    if (!fRes.ok) throw new Error(`Forecast failed ${fRes.status}`);
    const c = await cRes.json();
    const f = await fRes.json();
    renderWeatherFallback(c, f);
  }
}

function renderWeatherOneCall(d) {
  const cur = d.current || {};
  const daily = Array.isArray(d.daily) ? d.daily : [];
  const hourly = Array.isArray(d.hourly) ? d.hourly : [];

  const desc = (cur.weather && cur.weather[0] && cur.weather[0].description) ? cur.weather[0].description : "—";
  const code = cur.weather && cur.weather[0] ? cur.weather[0].id : null;

  setText("tempNow", Math.round(cur.temp ?? NaN));
  setText("weatherDesc", desc.charAt(0).toUpperCase() + desc.slice(1));
  setText("wind", (cur.wind_speed ?? "—"));
  setText("humidity", (cur.humidity ?? "—"));
  setText("pressure", (cur.pressure ?? "—"));

  const today = daily[0] || {};
  setText("tempHigh", Math.round(today.temp?.max ?? NaN));
  setText("tempLow", Math.round(today.temp?.min ?? NaN));

  // Precip now and chance
  const precipMm = (cur.rain && cur.rain["1h"]) ? cur.rain["1h"] : 0;
  setText("precipNow", precipMm.toFixed(1));
  const pop = today.pop != null ? Math.round(today.pop * 100) : "—";
  setText("precipChance", pop);
  setBadge("precipBadge", pop === "—" ? "—" : `${pop}%`);

  // UV
  const uviNow = cur.uvi;
  setText("uvNow", (uviNow != null ? uviNow.toFixed(1) : "—"));
  setText("uvLevel", uvLevel(uviNow));
  const uviMax = findMaxUV(hourly);
  setText("uvMax", uviMax.max != null ? uviMax.max.toFixed(1) : "—");
  setText("uvMaxTime", uviMax.time || "—");
  setBadge("uvBadge", uvLevel(uviMax.max));

  // Icons
  const isNight = !!cur.sunset && (Date.now()/1000 > cur.sunset);
  $("heroIcon").src = iconForWeather(code, isNight);

  renderHourly(hourly, d.timezone_offset || 0);
  renderDaily(daily);
}

function findMaxUV(hourly) {
  let max = null;
  let t = null;
  const now = Date.now()/1000;
  for (const h of hourly.slice(0, 24)) {
    if (h.dt < now - 3600) continue;
    if (h.uvi == null) continue;
    if (max == null || h.uvi > max) {
      max = h.uvi;
      t = h.dt;
    }
  }
  const time = t ? new Date(t*1000).toLocaleTimeString("sv-SE", {hour:"2-digit", minute:"2-digit"}) : null;
  return { max, time };
}

function renderWeatherFallback(current, forecast) {
  const desc = current.weather?.[0]?.description || "—";
  const code = current.weather?.[0]?.id || null;

  setText("tempNow", Math.round(current.main?.temp ?? NaN));
  setText("weatherDesc", desc.charAt(0).toUpperCase() + desc.slice(1));
  setText("wind", (current.wind?.speed ?? "—"));
  setText("humidity", (current.main?.humidity ?? "—"));
  setText("pressure", (current.main?.pressure ?? "—"));

  // High/Low for today from forecast list
  const todayStr = new Date().toISOString().slice(0,10);
  const todays = (forecast.list || []).filter(x => (x.dt_txt || "").startsWith(todayStr));
  const temps = todays.map(x => x.main?.temp).filter(x => typeof x === "number");
  setText("tempHigh", temps.length ? Math.round(Math.max(...temps)) : "—");
  setText("tempLow", temps.length ? Math.round(Math.min(...temps)) : "—");

  // Precip chance (pop) today - take max
  const pops = todays.map(x => x.pop).filter(x => typeof x === "number");
  const pop = pops.length ? Math.round(Math.max(...pops) * 100) : "—";
  setText("precipChance", pop);
  setBadge("precipBadge", pop === "—" ? "—" : `${pop}%`);

  // Precip now unknown
  setText("precipNow", "—");

  // UV unavailable without OneCall
  setText("uvNow", "—");
  setText("uvLevel", "—");
  setText("uvMax", "—");
  setText("uvMaxTime", "—");
  setBadge("uvBadge", "—");

  $("heroIcon").src = iconForWeather(code, false);

  // Hourly approximation from forecast (3h steps)
  const hourly = (forecast.list || []).slice(0, 16).map(x => ({
    dt: x.dt,
    temp: x.main?.temp,
    pop: x.pop,
    rain: x.rain?.["3h"] ? {"1h": x.rain["3h"]/3} : null
  }));
  renderHourly(hourly, 0);

  // Daily approximation: pick noon entries
  const byDay = {};
  for (const x of forecast.list || []) {
    const day = (x.dt_txt || "").slice(0,10);
    if (!day) continue;
    byDay[day] = byDay[day] || [];
    byDay[day].push(x);
  }
  const days = Object.keys(byDay).slice(0, 6).map(day => {
    const arr = byDay[day];
    const temps = arr.map(a => a.main?.temp).filter(n => typeof n === "number");
    const hi = temps.length ? Math.max(...temps) : null;
    const lo = temps.length ? Math.min(...temps) : null;
    const code = arr[0]?.weather?.[0]?.id || null;
    return { dt: Math.floor(new Date(day).getTime()/1000), temp: {max: hi, min: lo}, weather: [{id: code}] };
  });
  renderDaily(days);
}

function renderHourly(hourly, tzOffsetSec) {
  const box = $("hourlyStrip");
  box.innerHTML = "";

  const mode = state.mode;
  const slice = (hourly || []).slice(0, 24);

  for (const h of slice) {
    const dt = (h.dt ?? 0) * 1000;
    const d = new Date(dt);
    const time = d.toLocaleTimeString("sv-SE", { hour: "2-digit" });

    const div = document.createElement("div");
    div.className = "hour-item";
    div.setAttribute("role", "listitem");

    const val = mode === "temp"
      ? (h.temp != null ? `${Math.round(h.temp)}°` : "—")
      : (h.pop != null ? `${Math.round(h.pop*100)}%` : "—");

    const sub = mode === "temp"
      ? (h.pop != null ? `Regn: ${Math.round(h.pop*100)}%` : " ")
      : (h.temp != null ? `Temp: ${Math.round(h.temp)}°` : " ");

    div.innerHTML = `
      <div class="hour-time">${time}</div>
      <div class="hour-val">${val}</div>
      <div class="hour-sub">${sub}</div>
    `;
    box.appendChild(div);
  }
}

function renderDaily(daily) {
  const box = $("dailyStrip");
  box.innerHTML = "";
  const slice = (daily || []).slice(0, 10);

  for (let i=0;i<slice.length;i++){
    const day = slice[i];
    const dow = fmtDow(day.dt);
    const hi = day.temp?.max != null ? Math.round(day.temp.max) : "—";
    const lo = day.temp?.min != null ? Math.round(day.temp.min) : "—";
    const code = day.weather?.[0]?.id || null;

    const div = document.createElement("div");
    div.className = "day-card";
    div.setAttribute("role", "listitem");
    div.innerHTML = `
      <div class="day-dow">${dow}</div>
      <img class="day-icon" src="${iconForWeather(code,false)}" alt="" />
      <div class="day-hi">${hi}°</div>
      <div class="day-lo">${lo}°</div>
    `;
    box.appendChild(div);
  }
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (x) => x * Math.PI / 180;
  const dLat = toRad(lat2-lat1);
  const dLon = toRad(lon2-lon1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.sqrt(a));
}

async function pollenNearestRegion(lat, lon) {
  // Get regions, pick nearest by centroid
  const url = "https://api.pollenrapporten.se/v1/regions?offset=0&limit=1000";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`regions failed ${res.status}`);
  const data = await res.json();
  const items = data.items || data || [];
  let best = null;
  let bestD = Infinity;

  for (const r of items) {
    const c = r.centroid || r.center || r;
    const rlat = c.lat ?? c.latitude ?? r.lat;
    const rlon = c.lon ?? c.longitude ?? r.lon;
    if (rlat == null || rlon == null) continue;
    const dkm = haversineKm(lat, lon, rlat, rlon);
    if (dkm < bestD) { bestD = dkm; best = r; }
  }
  return best;
}

async function fetchPollen(place) {
  // Find nearest region once per place
  const lat = place.lat, lon = place.lon;
  try {
    const region = await pollenNearestRegion(lat, lon);
    const regionId = region?.id;
    if (!regionId) throw new Error("No region id");
    state.pollenRegionId = regionId;

    // current forecast
    const url = `https://api.pollenrapporten.se/v1/forecasts?offset=0&limit=200&region_id=${encodeURIComponent(regionId)}&current=true`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`forecasts failed ${res.status}`);
    const data = await res.json();
    renderPollen(data);
  } catch (e) {
    console.warn("Pollen fetch failed:", e);
    setText("pollenSummary", "—");
    setBadge("pollenBadge", "—");
    setText("pollenMain", "—");
    setText("pollenSub", "Kunde inte hämta pollen just nu.");
  }
}

function renderPollen(data) {
  // Data shapes may vary; keep it defensive.
  const items = data.items || data || [];
  if (!Array.isArray(items) || !items.length) {
    setText("pollenSummary", "—");
    setBadge("pollenBadge", "—");
    setText("pollenMain", "—");
    setText("pollenSub", "Inga data.");
    return;
  }

  // Try to find max level entry
  // item example: { pollen_type: {...name}, level: {...name, value}, ... }
  let best = null;
  let bestVal = -1;

  for (const it of items) {
    const lvl = it.level?.value ?? it.level_value ?? it.level ?? 0;
    const val = typeof lvl === "number" ? lvl : (parseInt(lvl,10) || 0);
    if (val > bestVal) { bestVal = val; best = it; }
  }

  const pollenName = best?.pollen_type?.name || best?.pollenType?.name || best?.pollen_type || "Pollen";
  const lvlName = best?.level?.name || best?.level_name || "—";

  setText("pollenSummary", `${pollenName}: ${lvlName}`);
  setBadge("pollenBadge", lvlName);
  setText("pollenMain", pollenName);
  setText("pollenSub", `Högst nivå just nu: ${lvlName}`);
}

/* UI wiring */
function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".tab-btn").forEach(btn => {
    const active = btn.dataset.mode === mode;
    btn.classList.toggle("tab-active", active);
  });
  // re-render hourly if we have last data? (simplest: refresh)
  refreshAll();
}

async function init() {
  setText("yearNow", new Date().getFullYear());

  // load places json into search engine
  await window.KlySwedenSearch.loadPlaces("./sweden-places.json");

  const input = $("searchInput");
  input.addEventListener("input", () => {
    const matches = window.KlySwedenSearch.search(input.value, { limit: 12, minChars: 2 });
    showSearchResults(matches);
  });
  input.addEventListener("blur", () => setTimeout(hideSearchResults, 120));
  input.addEventListener("keydown", (e) => { if (e.key === "Escape") hideSearchResults(); });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  $("btnRefresh").addEventListener("click", refreshAll);

  // Load last place or default to Stockholm
  const persisted = loadPersistedPlace();
  if (persisted && persisted.lat && persisted.lon) {
    await selectPlace(persisted);
    return;
  }

  // default pick: Stockholm from dataset if available
  const stockholm = window.KlySwedenSearch.getPlaces().find(p => p.name === "Stockholm") || window.KlySwedenSearch.getPlaces()[0];
  if (stockholm) await selectPlace(stockholm);

  // Try geolocation (optional) - if allowed, pick nearest from Sweden list
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude, lon = pos.coords.longitude;
      const places = window.KlySwedenSearch.getPlaces();
      let best = null, bestD = Infinity;
      for (const p of places) {
        const d = haversineKm(lat, lon, p.lat, p.lon);
        if (d < bestD) { bestD = d; best = p; }
      }
      if (best) selectPlace(best);
    }, () => {}, { enableHighAccuracy: false, timeout: 2500 });
  }
}

init();

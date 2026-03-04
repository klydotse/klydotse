// kly.se – v14-17 (API-integrated)
// - Weather + hourly + 10-day + UV: Open-Meteo
// - Pollen: Open-Meteo Air Quality (pollen variables)
// - Sweden search: /resources/kly-sweden-search.js + /resources/sweden-places.json

/* ------------------------------
   Utilities
------------------------------ */

const $ = (id) => document.getElementById(id);

function fmtTime(d){
  return d.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
}

function fmtDateShort(d){
  return d.toLocaleDateString("sv-SE", { day:"numeric", month:"short" });
}

const daysShort = ["Sön","Mån","Tis","Ons","Tor","Fre","Lör"];
function dayLabel(d, idx){
  if(idx === 0) return "Idag";
  if(idx === 1) return "Imorgon";
  return daysShort[d.getDay()];
}

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

function nearestIndex(isoTimes, targetDate){
  // isoTimes: string[] (e.g. 2026-03-04T15:00)
  const t = +targetDate;
  let best = 0;
  let bestDiff = Infinity;
  for(let i=0;i<isoTimes.length;i++){
    const diff = Math.abs(+new Date(isoTimes[i]) - t);
    if(diff < bestDiff){ bestDiff = diff; best = i; }
  }
  return best;
}

/* ------------------------------
   Weather code mapping (Open-Meteo)
   UI keeps one icon asset, but we still map text.
------------------------------ */

function weatherTextFromCode(code){
  const c = Number(code);
  if(c === 0) return "Klart";
  if(c === 1) return "Mest klart";
  if(c === 2) return "Delvis molnigt";
  if(c === 3) return "Mulet";
  if([45,48].includes(c)) return "Dimma";
  if([51,53,55].includes(c)) return "Duggregn";
  if([56,57].includes(c)) return "Underkylt duggregn";
  if([61,63,65].includes(c)) return "Regn";
  if([66,67].includes(c)) return "Underkylt regn";
  if([71,73,75].includes(c)) return "Snö";
  if(c === 77) return "Snökorn";
  if([80,81,82].includes(c)) return "Regnskurar";
  if([85,86].includes(c)) return "Snöbyar";
  if([95,96,99].includes(c)) return "Åska";
  return "Väder";
}

/* ------------------------------
   Pollen helpers (Open-Meteo Air Quality pollen)
------------------------------ */

function pollenLevelFromValue(v){
  // CAMS pollen are typically small floats; we bucket for UI.
  const n = Number(v);
  if(!Number.isFinite(n) || n <= 0) return "N";
  if(n < 10) return "L";
  if(n < 50) return "M";
  return "H";
}

function levelName(code){
  if(code === "H") return "Hög";
  if(code === "M") return "Måttlig";
  if(code === "L") return "Låg";
  return "Ingen";
}

function pill(level){
  if(level === "L") return '<span class="pollen-pill pL">L</span>';
  if(level === "M") return '<span class="pollen-pill pM">M</span>';
  if(level === "H") return '<span class="pollen-pill pH">H</span>';
  if(level === "N") return '<span class="pollen-pill pQ">–</span>';
  return '<span class="pollen-pill pQ">–</span>';
}

/* ------------------------------
   App state
------------------------------ */

const state = {
  place: {
    name: "Säfsen",
    county: "Dalarnas län",
    lat: 60.179,
    lon: 14.633,
  },
  placesLoaded: false,
};

/* ------------------------------
   Search (Sweden-first)
------------------------------ */

const searchInput = $("searchInput");
const searchResults = $("searchResults");

function hideResults(){
  if(!searchResults) return;
  searchResults.hidden = true;
  searchResults.innerHTML = "";
}

function showResults(items){
  if(!searchResults) return;
  searchResults.innerHTML = "";
  if(!items.length){
    hideResults();
    return;
  }

  for(const it of items){
    const div = document.createElement("div");
    div.className = "search-item";
    div.setAttribute("role","option");
    div.tabIndex = 0;
    div.innerHTML = `${it.name}<small>${it.county}${it.type ? ` · ${String(it.type).replace(/_/g," ")}` : ""}</small>`;
    div.addEventListener("click", () => selectPlace(it));
    div.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        selectPlace(it);
      }
    });
    searchResults.appendChild(div);
  }
  searchResults.hidden = false;
}

async function initSearch(){
  if(!globalThis.KlySwedenSearch) return;
  try{
    await globalThis.KlySwedenSearch.loadPlaces("./resources/sweden-places.json");
    state.placesLoaded = true;
  }catch(err){
    console.warn("Could not load Sweden places:", err);
  }

  if(!searchInput) return;
  searchInput.addEventListener("input", () => {
    const q = searchInput.value;
    if(!state.placesLoaded){ hideResults(); return; }
    const res = globalThis.KlySwedenSearch.search(q, { limit: 10, minChars: 2 });
    showResults(res);
  });

  searchInput.addEventListener("focus", () => {
    const q = searchInput.value;
    if(!q) return;
    const res = state.placesLoaded ? globalThis.KlySwedenSearch.search(q, { limit: 10, minChars: 2 }) : [];
    showResults(res);
  });

  document.addEventListener("click", (e) => {
    if(!searchResults || !searchInput) return;
    const wrap = searchResults.parentElement;
    if(wrap && !wrap.contains(e.target)) hideResults();
  });
}

function selectPlace(p){
  state.place = {
    name: p.name,
    county: p.county || "",
    lat: p.lat,
    lon: p.lon,
  };

  // Update header label instantly
  $("placeName").textContent = state.place.name;
  $("placeCounty").textContent = state.place.county || "";

  // Reset search UI
  if(searchInput) searchInput.value = "";
  hideResults();

  refreshAll();
}

/* ------------------------------
   API calls
------------------------------ */

async function fetchOpenMeteoForecast(lat, lon){
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("forecast_days", "10");
  url.searchParams.set("current", [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "weather_code",
    "wind_speed_10m",
    "wind_gusts_10m",
  ].join(","));
  url.searchParams.set("hourly", [
    "temperature_2m",
    "precipitation_probability",
    "weather_code",
    "uv_index",
  ].join(","));
  url.searchParams.set("daily", [
    "temperature_2m_max",
    "temperature_2m_min",
    "sunrise",
    "sunset",
    "precipitation_probability_max",
    "weather_code",
    "uv_index_max",
  ].join(","));

  const res = await fetch(url.toString());
  if(!res.ok) throw new Error(`Open-Meteo forecast failed: ${res.status}`);
  return res.json();
}

async function fetchOpenMeteoPollen(lat, lon){
  // Pollen variables live in Open-Meteo Air Quality endpoint (Europe, 4-day forecast)
  const url = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("forecast_days", "4");
  url.searchParams.set("hourly", [
    "alder_pollen",
    "birch_pollen",
    "grass_pollen",
    "mugwort_pollen",
    "ragweed_pollen",
  ].join(","));

  const res = await fetch(url.toString());
  if(!res.ok) throw new Error(`Open-Meteo air-quality failed: ${res.status}`);
  return res.json();
}

/* ------------------------------
   Rendering
------------------------------ */

function setNowTime(){
  $("nowTime").textContent = fmtTime(new Date());
}

function uvLevelName(uv){
  if(uv < 3) return "Låg";
  if(uv < 6) return "Måttlig";
  if(uv < 8) return "Hög";
  if(uv < 11) return "Mycket hög";
  return "Extrem";
}

function updateSummaryLine(parts){
  $("summaryLine").textContent = parts.filter(Boolean).join(". ") + ".";
}

function renderFromForecast(data){
  // Place
  $("placeName").textContent = state.place.name;
  $("placeCounty").textContent = state.place.county || "";

  // Current
  const cur = data.current || {};
  const tempNow = Math.round(cur.temperature_2m ?? NaN);
  const feels = Math.round(cur.apparent_temperature ?? NaN);
  const rh = Math.round(cur.relative_humidity_2m ?? NaN);
  const wind = Math.round(cur.wind_speed_10m ?? NaN);
  const gust = Math.round(cur.wind_gusts_10m ?? NaN);
  const wcode = cur.weather_code;

  if(Number.isFinite(tempNow)) $("tempNow").textContent = String(tempNow);
  if(Number.isFinite(feels)) $("feelsLike").textContent = `Känns som ${feels}°`;
  if(Number.isFinite(rh)) $("humidity").textContent = String(rh);
  if(Number.isFinite(wind)) $("wind").textContent = String(wind);
  if(Number.isFinite(gust)) $("gust").textContent = String(gust);

  $("weatherCond").textContent = weatherTextFromCode(wcode);

  // Daily (today)
  const d = data.daily || {};
  const day0Hi = d.temperature_2m_max?.[0];
  const day0Lo = d.temperature_2m_min?.[0];
  if(Number.isFinite(day0Hi)) $("tempHigh").textContent = String(Math.round(day0Hi));
  if(Number.isFinite(day0Lo)) $("tempLow").textContent = String(Math.round(day0Lo));

  const sunrise = d.sunrise?.[0] ? fmtTime(new Date(d.sunrise[0])) : null;
  const sunset = d.sunset?.[0] ? fmtTime(new Date(d.sunset[0])) : null;
  if(sunrise) $("sunrise").textContent = sunrise;
  if(sunset) $("sunset").textContent = sunset;

  const precipToday = d.precipitation_probability_max?.[0];
  if(Number.isFinite(precipToday)){
    const p = Math.round(precipToday);
    $("precipChance").textContent = String(p);
    $("precipText").textContent = p < 20 ? "Ingen idag" : (p < 50 ? "Liten risk" : "Risk för regn");
  }

  // UV now from hourly closest to current time
  const h = data.hourly || {};
  if(Array.isArray(h.time) && Array.isArray(h.uv_index)){
    const idx = nearestIndex(h.time, new Date());
    const uv = Number(h.uv_index[idx]);
    if(Number.isFinite(uv)){
      $("uvNow").textContent = uv.toFixed(1);
      $("uvLevel").textContent = uvLevelName(uv);
    }
  }

  // Hourly tiles (next 24 hours)
  renderHourly(data);
  // 10-day
  renderOutlook(data);

  // Summary line (pollen filled later)
  const summaryParts = [];
  if(Number.isFinite(tempNow)) summaryParts.push(`${weatherTextFromCode(wcode)}, ${tempNow}° (känns som ${Number.isFinite(feels) ? feels : tempNow}°)`);
  if(Number.isFinite(precipToday)) summaryParts.push($("precipText").textContent === "Ingen idag" ? "Ingen nederbörd" : `Nederbörd ${Math.round(precipToday)}%`);
  if($("uvLevel").textContent) summaryParts.push(`UV ${$("uvLevel").textContent.toLowerCase()}`);
  updateSummaryLine(summaryParts);
}

function renderHourly(data){
  const row = $("hourlyRow");
  const sub = $("hourlySub");
  if(!row) return;

  const h = data.hourly || {};
  if(!Array.isArray(h.time)) return;

  const now = new Date();
  const startIdx = nearestIndex(h.time, now);
  const endIdx = Math.min(h.time.length - 1, startIdx + 23);

  if(sub){
    const start = fmtTime(new Date(h.time[startIdx]));
    const end = fmtTime(new Date(h.time[endIdx]));
    sub.textContent = `${start}–${end}`;
  }

  row.innerHTML = "";
  for(let i=startIdx; i<=endIdx; i++){
    const t = new Date(h.time[i]);
    const temp = Array.isArray(h.temperature_2m) ? Math.round(h.temperature_2m[i]) : null;
    const pop = Array.isArray(h.precipitation_probability) ? Math.round(h.precipitation_probability[i]) : null;

    const tile = document.createElement("div");
    tile.className = "hour-tile";
    tile.innerHTML = `
      <div class="hour-t">${fmtTime(t)}</div>
      <img class="hour-i" src="./icons/weather-sun-cloud.svg" alt="" />
      <div class="hour-temp"><span class="temp-num">${temp ?? "–"}</span>°</div>
      <div class="hour-meta">${pop ?? "–"}%</div>
    `;
    row.appendChild(tile);
  }
}

function renderOutlook(data){
  const tbody = $("outlookRows");
  const sub = $("outlookSub");
  if(!tbody) return;

  const d = data.daily || {};
  if(!Array.isArray(d.time)) return;

  const start = new Date(d.time[0]);
  const end = new Date(d.time[Math.min(9, d.time.length-1)]);
  if(sub) sub.textContent = `${fmtDateShort(start)}–${fmtDateShort(end)}`;

  tbody.innerHTML = "";
  for(let i=0; i<Math.min(10, d.time.length); i++){
    const day = new Date(d.time[i]);
    const hi = Array.isArray(d.temperature_2m_max) ? Math.round(d.temperature_2m_max[i]) : null;
    const lo = Array.isArray(d.temperature_2m_min) ? Math.round(d.temperature_2m_min[i]) : null;
    const pop = Array.isArray(d.precipitation_probability_max) ? Math.round(d.precipitation_probability_max[i]) : null;
    const wx = weatherTextFromCode(Array.isArray(d.weather_code) ? d.weather_code[i] : null);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="outlook-day">${dayLabel(day, i)}</td>
      <td><span class="wx-pill"><span class="wx-dot" aria-hidden="true"></span>${wx}</span></td>
      <td class="text-end"><span class="temp-num">${lo ?? "–"}</span>°</td>
      <td class="text-end"><span class="temp-num">${hi ?? "–"}</span>°</td>
      <td class="text-end"><span class="temp-num">${pop ?? "–"}</span>%</td>
    `;
    tbody.appendChild(tr);
  }
}

function renderPollenFromAirQuality(aq){
  // Build 3-day pollen table rows in the existing UI schema.
  const tbody = $("pollenRowsInline");
  if(!tbody) return;

  const h = aq.hourly || {};
  if(!Array.isArray(h.time)) return;

  // Helper: daily max for a variable
  function dailyMax(varArr){
    const out = [0,0,0];
    for(let i=0;i<h.time.length;i++){
      const dt = new Date(h.time[i]);
      const dayOffset = Math.floor((dt.setHours(0,0,0,0) - new Date().setHours(0,0,0,0)) / 86400000);
      if(dayOffset < 0 || dayOffset > 2) continue;
      const v = Number(varArr?.[i]);
      if(Number.isFinite(v)) out[dayOffset] = Math.max(out[dayOffset], v);
    }
    return out;
  }

  const alder = dailyMax(h.alder_pollen);
  const birch = dailyMax(h.birch_pollen);
  const grass = dailyMax(h.grass_pollen);
  const mugwort = dailyMax(h.mugwort_pollen);
  const ragweed = dailyMax(h.ragweed_pollen);

  // Day headings for pollen (next 2 days)
  const d1 = new Date(); d1.setDate(d1.getDate()+1);
  const d2 = new Date(); d2.setDate(d2.getDate()+2);
  $("pDay1").textContent = daysShort[d1.getDay()];
  $("pDay2").textContent = daysShort[d2.getDay()];

  const season = {
    "Hassel": "Feb–jun",
    "Al": "Feb–maj",
    "Sälg/vide": "Apr–jul",
    "Alm": "Mar–jun",
    "Björk": "Mar–jul",
    "Bok": "Maj–jun",
    "Ek": "Maj–jul",
    "Gräs": "Maj–okt",
    "Gråbo": "Jul–okt",
    "Malörtsambrosia": "Sep–nov"
  };

  const rows = [
    { plant: "Hassel", vals: [0,0,0] },
    { plant: "Al", vals: alder },
    { plant: "Sälg/vide", vals: [0,0,0] },
    { plant: "Alm", vals: [0,0,0] },
    { plant: "Björk", vals: birch },
    { plant: "Bok", vals: [0,0,0] },
    { plant: "Ek", vals: [0,0,0] },
    { plant: "Gräs", vals: grass },
    { plant: "Gråbo", vals: mugwort },
    { plant: "Malörtsambrosia", vals: ragweed },
  ].map(r => ({
    plant: r.plant,
    d0: pollenLevelFromValue(r.vals?.[0]),
    d1: pollenLevelFromValue(r.vals?.[1]),
    d2: pollenLevelFromValue(r.vals?.[2]),
    season: season[r.plant] || "—"
  }));

  // Sort by today's severity (H>M>L>N)
  const sev = { "N":0, "L":1, "M":2, "H":3 };
  rows.sort((a,b) => {
    const da = sev[a.d0] ?? 0;
    const db = sev[b.d0] ?? 0;
    if(db !== da) return db - da;
    return a.plant.localeCompare(b.plant, "sv");
  });

  tbody.innerHTML = "";
  for(const r of rows){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.plant}</td>
      <td>${pill(r.d0)}</td>
      <td>${pill(r.d1)}</td>
      <td>${pill(r.d2)}</td>
      <td class="season-col">${r.season}</td>
    `;
    tbody.appendChild(tr);
  }

  // Top pollen pill
  const top = rows.find(x => (sev[x.d0] ?? 0) > 0) || rows[0];
  $("pollenTopLabel").textContent = levelName(top.d0);
  $("pollenTopPlant").textContent = top.plant;

  // Add pollen to summary line (keep weather parts already set)
  const currentSummary = $("summaryLine").textContent.replace(/\.$/, "");
  const pollenPart = `${top.plant} ${levelName(top.d0).toLowerCase()}`;
  const next = currentSummary.includes("Björk") || currentSummary.includes("pollen")
    ? currentSummary
    : `${currentSummary}. ${pollenPart}`;
  $("summaryLine").textContent = next + ".";
}

/* ------------------------------
   Refresh
------------------------------ */

async function refreshAll(){
  setNowTime();

  const { lat, lon } = state.place;

  try{
    const forecast = await fetchOpenMeteoForecast(lat, lon);
    renderFromForecast(forecast);
  }catch(err){
    console.error(err);
  }

  try{
    const pollen = await fetchOpenMeteoPollen(lat, lon);
    renderPollenFromAirQuality(pollen);
  }catch(err){
    console.warn("Pollen not available:", err);
    // Keep UI stable even if pollen endpoint fails
  }
}

/* ------------------------------
   Pollen expand/collapse
------------------------------ */

const pollenBox = document.querySelector(".pollen-box");
const pollenArrow = $("pollenArrow");
let pollenOpen = false;

function setPollenOpen(v){
  pollenOpen = v;
  if(pollenBox) pollenBox.classList.toggle("expanded", pollenOpen);
  if(pollenArrow){
    pollenArrow.setAttribute("aria-expanded", pollenOpen ? "true" : "false");
    const icon = pollenArrow.querySelector(".arrow-icon");
    if(icon) icon.textContent = pollenOpen ? "⌃" : "⌄";
  }
}

if(pollenArrow){
  pollenArrow.addEventListener("click", () => setPollenOpen(!pollenOpen));
}

/* ------------------------------
   Boot
------------------------------ */

$("yearNow").textContent = new Date().getFullYear();
$("btnRefresh").addEventListener("click", refreshAll);

initSearch();
refreshAll();

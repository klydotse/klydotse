const $ = (sel) => document.querySelector(sel);

function fmtHour(date){ return date.toLocaleTimeString("sv-SE", {hour:"2-digit", minute:"2-digit"}); }
function fmtDay(date){ return date.toLocaleDateString("sv-SE", {weekday:"short"}); }

function windDir(deg){
  const dirs = ["N","NÃ–","Ã–","SÃ–","S","SV","V","NV"];
  return dirs[Math.round(deg/45)%8];
}

function wcLabel(code){
  const map = new Map([
    [0,"Klart"],[1,"Mest klart"],[2,"Halvklart"],[3,"Mulet"],
    [45,"Dimma"],[48,"Dimma"],
    [51,"Duggregn"],[53,"Duggregn"],[55,"Duggregn"],
    [61,"Regn"],[63,"Regn"],[65,"Kraftigt regn"],
    [71,"SnÃ¶"],[73,"SnÃ¶"],[75,"Kraftig snÃ¶"],
    [80,"Skurar"],[81,"Skurar"],[82,"Kraftiga skurar"],
    [85,"SnÃ¶byar"],[86,"SnÃ¶byar"],
    [95,"Ã…ska"],[96,"Ã…ska"],[99,"Ã…ska"]
  ]);
  return map.get(code) ?? "VÃ¤der";
}

function badgeFor(label){
  const l = label.toLowerCase();
  if(l.includes("Ã¥ska")) return {cls:"badge-red", text:label};
  if(l.includes("kraftig")) return {cls:"badge-amber", text:label};
  if(l.includes("regn") || l.includes("skur") || l.includes("snÃ¶")) return {cls:"badge-amber", text:label};
  return {cls:"badge-neutral", text:label};
}

function uvRisk(uv){
  if(uv == null || Number.isNaN(uv)) return {label:"â€”", cls:"badge-neutral"};
  if(uv < 3) return {label:"LÃ¥g", cls:"badge-green"};
  if(uv < 6) return {label:"MÃ¥ttlig", cls:"badge-amber"};
  if(uv < 8) return {label:"HÃ¶g", cls:"badge-red"};
  return {label:"Mycket hÃ¶g", cls:"badge-red"};
}

function pollenLevel(val){
  if(val == null) return "â€”";
  if(val <= 0) return "Ingen";
  if(val < 10) return "LÃ¥g";
  if(val < 50) return "MÃ¥ttlig";
  return "HÃ¶g";
}

function iconForHour(weatherCode, precip, snow){
  const hasPrecip = (precip ?? 0) > 0.05;
  const hasSnow = (snow ?? 0) > 0.05;
  if(hasSnow && hasPrecip) return "ðŸŒ¨";
  if(hasSnow) return "â„";
  if(hasPrecip) return "ðŸŒ§";
  if([0,1].includes(weatherCode)) return "â˜€";
  if([2].includes(weatherCode)) return "â›…";
  if([3].includes(weatherCode)) return "â˜";
  if([45,48].includes(weatherCode)) return "ðŸŒ«";
  return "â˜";
}

function buildSummary(hourly, nowIdx){
  let first=null, last=null, type="regn";
  for(let i=nowIdx;i<Math.min(hourly.time.length, nowIdx+24);i++){
    const dt = new Date(hourly.time[i]);
    const h = dt.getHours();
    if(h < 12 || h > 18) continue;
    const p = hourly.precipitation?.[i] ?? 0;
    const s = hourly.snowfall?.[i] ?? 0;
    if(p > 0.05 || s > 0.05){
      if(first===null) first=i;
      last=i;
      if(s > 0.05 && p > 0.05) type="blandat";
      else if(s > 0.05) type="snÃ¶";
      else type="regn";
    }
  }
  if(first===null) return "UppehÃ¥ll i eftermiddag.";
  const a = new Date(hourly.time[first]).getHours();
  const b = new Date(hourly.time[last]).getHours()+1;
  const label = type==="snÃ¶" ? "LÃ¤tt snÃ¶" : type==="blandat" ? "Blandad nederbÃ¶rd" : "LÃ¤tt regn";
  return `${label} mellan ${String(a).padStart(2,"0")}â€“${String(b).padStart(2,"0")}`;
}

async function geocodeCity(name){
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=sv&format=json`;
  const r = await fetch(url);
  if(!r.ok) throw new Error("Geokodning misslyckades");
  const j = await r.json();
  const hit = j?.results?.[0];
  if(!hit) throw new Error("Ingen trÃ¤ff fÃ¶r staden");
  return {lat: hit.latitude, lon: hit.longitude, label: hit.name};
}

async function fetchWeather(lat, lon){
  const params = new URLSearchParams({
    latitude: lat, longitude: lon,
    timezone: "auto",
    forecast_days: "7",
    current: "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m",
    hourly: "temperature_2m,precipitation,snowfall,weather_code,uv_index",
    daily: "temperature_2m_max,temperature_2m_min,weather_code,uv_index_max"
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const r = await fetch(url);
  if(!r.ok) throw new Error("VÃ¤derdata kunde inte hÃ¤mtas");
  return r.json();
}

async function fetchPollen(lat, lon){
  const params = new URLSearchParams({
    latitude: lat, longitude: lon,
    timezone: "auto",
    forecast_days: "2",
    hourly: "alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,ragweed_pollen,olive_pollen"
  });
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?${params.toString()}`;
  const r = await fetch(url);
  if(!r.ok) throw new Error("Pollendata kunde inte hÃ¤mtas");
  return r.json();
}

function setText(id, v){ const el = document.getElementById(id); if(el) el.textContent = v; }

function renderHourlyStrip(hourly){
  const wrap = document.getElementById("hourlyStrip");
  if(!wrap) return 0;
  wrap.innerHTML = "";

  const now = new Date();
  let nowIdx = 0;
  for(let i=0;i<hourly.time.length;i++){
    const dt = new Date(hourly.time[i]);
    if(dt >= now){ nowIdx = i; break; }
  }

  for(let k=0;k<5;k++){
    const i = nowIdx + k;
    const dt = new Date(hourly.time[i]);
    const wc = hourly.weather_code?.[i] ?? 3;
    const p = hourly.precipitation?.[i] ?? 0;
    const s = hourly.snowfall?.[i] ?? 0;
    const t = hourly.temperature_2m?.[i];

    const cell = document.createElement("div");
    cell.className = "hcell";
    const ico = iconForHour(wc, p, s);
    const mm = (p > 0.05 || s > 0.05) ? `${(p>0.05?p:s).toFixed(1)}mm` : "";
    cell.innerHTML = `
      <div class="h-time">${fmtHour(dt)}</div>
      <div class="h-ico">${ico}</div>
      <div class="h-temp">${Math.round(t)}Â°</div>
      <div class="h-mm" style="${mm ? "" : "opacity:.0"}">${mm || "."}</div>
    `;
    wrap.appendChild(cell);
  }
  return nowIdx;
}

function render7Days(daily){
  const box = document.getElementById("sevenDaysBox");
  if(!box) return;
  box.innerHTML = "";
  for(let i=0;i<daily.time.length;i++){
    const dt = new Date(daily.time[i]);
    const max = Math.round(daily.temperature_2m_max[i]);
    const min = Math.round(daily.temperature_2m_min[i]);
    const wc = daily.weather_code[i];
    const ico = iconForHour(wc, 0, 0);
    const row = document.createElement("div");
    row.className = "kv";
    row.innerHTML = `<span>${fmtDay(dt)}</span><span><strong>${max}Â°</strong> / ${min}Â° ${ico}</span>`;
    box.appendChild(row);
  }
}

function renderPollen(pollen){
  const list = document.getElementById("pollenList");
  const notice = document.getElementById("pollenNotice");
  if(!list || !notice) return;

  const now = new Date();
  let idx = 0;
  for(let i=0;i<pollen.hourly.time.length;i++){
    const dt = new Date(pollen.hourly.time[i]);
    if(dt >= now){ idx = i; break; }
  }

  const mapping = [
    ["BjÃ¶rk","birch_pollen"],
    ["Al","alder_pollen"],
    ["GrÃ¤s","grass_pollen"],
    ["GrÃ¥bo","mugwort_pollen"],
    ["Ambrosia","ragweed_pollen"],
    ["Olive","olive_pollen"]
  ];

  const values = mapping.map(([sv,key]) => {
    const v = pollen.hourly[key]?.[idx] ?? 0;
    return {name: sv, value: v, level: pollenLevel(v)};
  });

  const active = values.some(v => v.value > 0);
  notice.textContent = active ? "Pollen i luften idag" : "Inga aktiva pollen idag";
  values.sort((a,b) => (b.value - a.value) || a.name.localeCompare(b.name,"sv-SE"));

  let expanded = false;
  function draw(){
    list.innerHTML = "";
    const items = expanded ? values : values.slice(0,5);
    for(const it of items){
      const row = document.createElement("div");
      row.className = "rowx";
      row.innerHTML = `<span>${it.name}</span><span class="lvl">${it.level}</span>`;
      list.appendChild(row);
    }
    const moreRow = document.createElement("div");
    moreRow.className = "rowx more";
    moreRow.setAttribute("role","button");
    moreRow.setAttribute("tabindex","0");
    moreRow.innerHTML = `<span>${expanded ? "Visa fÃ¤rre" : "Visa fler"}</span><span class="lvl">â€º</span>`;
    const toggle = () => { expanded = !expanded; draw(); };
    moreRow.addEventListener("click", toggle);
    moreRow.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); toggle(); }
    });
    list.appendChild(moreRow);
  }
  draw();
}

function renderUV(data){
  const hourly = data.hourly;
  const daily = data.daily;
  const now = new Date();
  let idx = 0;
  for(let i=0;i<hourly.time.length;i++){
    const dt = new Date(hourly.time[i]);
    if(dt >= now){ idx = i; break; }
  }
  const uvNow = hourly.uv_index?.[idx] ?? 0;
  setText("uvNow", uvNow.toFixed(1));
  const max = daily.uv_index_max?.[0] ?? 0;
  setText("uvMax", max.toFixed(1));
  setText("uvMaxTime", "12:00");
  const r = uvRisk(max);
  const badge = document.getElementById("uvBadge");
  if(badge){
    badge.className = `badge-pill ${r.cls}`;
    badge.textContent = r.label;
  }
  setText("uvRisk", r.label);
  const advice = document.getElementById("uvAdvice");
  if(advice){
    advice.textContent = r.label === "LÃ¥g"
      ? "LÃ¥g UV. SolglasÃ¶gon om det Ã¤r ljust, solskydd behÃ¶vs oftast inte."
      : r.label === "MÃ¥ttlig"
        ? "MÃ¥ttlig UV. Solskydd och skugga mitt pÃ¥ dagen."
        : "HÃ¶g UV. Skydda dig: solkrÃ¤m, skugga och tÃ¤ckande klÃ¤der.";
  }
}

function renderWeather(data){
  const c = data.current;
  const hourly = data.hourly;
  const daily = data.daily;

  setText("wxTemp", Math.round(c.temperature_2m));
  setText("wxFeels", Math.round(c.apparent_temperature));
  setText("wxHum", `${Math.round(c.relative_humidity_2m)}% luftfuktighet`);
  setText("wxWind", `${Math.round(c.wind_speed_10m)} m/s â€“ ${windDir(c.wind_direction_10m)}`);

  const cond = wcLabel(c.weather_code);
  const b = badgeFor(cond);
  const badge = document.getElementById("wxBadge");
  if(badge){
    badge.className = `badge-pill ${b.cls}`;
    badge.textContent = b.text;
  }

  const now = new Date();
  let nowIdx = 0;
  for(let i=0;i<hourly.time.length;i++){
    const dt = new Date(hourly.time[i]);
    if(dt >= now){ nowIdx = i; break; }
  }

  let sumP = 0, sumS = 0;
  for(let i=nowIdx;i<Math.min(hourly.time.length, nowIdx+6);i++){
    sumP += hourly.precipitation?.[i] ?? 0;
    sumS += hourly.snowfall?.[i] ?? 0;
  }
  let label = "regn kommande 6h";
  if(sumS > 0.2 && sumP > 0.2) label = "blandat kommande 6h";
  else if(sumS > 0.2) label = "snÃ¶ kommande 6h";
  setText("wxPrecip", `${(sumP+sumS).toFixed(1).replace(".",",")} mm ${label}`);

  setText("wxSummary", buildSummary(hourly, nowIdx));

  renderHourlyStrip(hourly);
  render7Days(daily);
}

function initTabs(){
  const btnHour = document.getElementById("btnHour");
  const btn7d = document.getElementById("btn7d");
  const hourlyStrip = document.getElementById("hourlyStrip");
  const sevenDays = document.getElementById("sevenDays");

  function setMode(mode){
    const isHour = mode === "hour";
    btnHour?.classList.toggle("active", isHour);
    btn7d?.classList.toggle("active", !isHour);
    if(hourlyStrip) hourlyStrip.style.display = isHour ? "grid" : "none";
    if(sevenDays) sevenDays.style.display = isHour ? "none" : "block";
  }
  btnHour?.addEventListener("click", () => setMode("hour"));
  btn7d?.addEventListener("click", () => setMode("7d"));
  setMode("hour");
}

function initLocationButton(){
  const btn = document.getElementById("locBtn");
  const input = document.getElementById("cityInput");
  if(!btn || !input) return;

  btn.addEventListener("click", async () => {
    if(!navigator.geolocation){
      alert("Geolokalisering stÃ¶ds inte i din webblÃ¤sare.");
      return;
    }
    btn.disabled = true;
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const {latitude, longitude} = pos.coords;
        input.value = "Min plats";
        const status = document.getElementById("statusLine");
        if(status) status.textContent = "Min plats";
        try{
          const [wx, pol] = await Promise.all([
            fetchWeather(latitude, longitude),
            fetchPollen(latitude, longitude).catch(() => null)
          ]);
          renderWeather(wx);
          renderUV(wx);
          if(pol) renderPollen(pol);
        } finally {
          btn.disabled = false;
        }
      },
      () => {
        btn.disabled = false;
        alert("Kunde inte hÃ¤mta plats. Kontrollera behÃ¶righeter.");
      }
    );
  });
}

async function loadForCity(cityName){
  const status = document.getElementById("statusLine");
  try{
    if(status) status.textContent = "HÃ¤mtar dataâ€¦";
    const geo = await geocodeCity(cityName);
    if(status) status.textContent = geo.label;

    const [wx, pol] = await Promise.all([
      fetchWeather(geo.lat, geo.lon),
      fetchPollen(geo.lat, geo.lon).catch(() => null)
    ]);

    renderWeather(wx);
    renderUV(wx);
    if(pol) renderPollen(pol);
  }catch(e){
    if(status) status.textContent = "Kunde inte hÃ¤mta data.";
    console.error(e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initLocationButton();

  const cityFromBody = document.body.getAttribute("data-city");
  const url = new URL(window.location.href);
  const cityFromQuery = url.searchParams.get("city");
  const city = cityFromBody || cityFromQuery || "Stockholm";

  const input = document.getElementById("cityInput");
  if(input) input.value = city;

  loadForCity(city);
});

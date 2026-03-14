const $ = (id) => document.getElementById(id);
const state = { place: { name: "Stockholm", county: "Stockholms län", country: "SE", lat: 59.3293, lon: 18.0686 } };

function getWeatherIcon(code, isDay = 1) {
  const c = Number(code);
  if (c === 0) return isDay ? "bi-sun-fill text-warning" : "bi-moon-stars-fill text-light";
  if ([1, 2].includes(c)) return isDay ? "bi-cloud-sun-fill text-warning" : "bi-cloud-moon-fill text-light";
  if (c === 3) return "bi-clouds-fill text-white-50"; 
  if ([61, 63, 65, 80, 81, 82].includes(c)) return "bi-cloud-rain-fill text-info";
  return "bi-cloud-fill text-white-50";
}

async function refreshAll() {
  const { lat, lon } = state.place;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day,relative_humidity_2m,cloud_cover&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset&hourly=precipitation_probability&minutely_15=precipitation&timezone=auto&forecast_days=10`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    
    // Fill Hero
    $("placeName").textContent = state.place.name;
    $("tempNow").textContent = Math.round(data.current.temperature_2m);
    $("feelsLike").textContent = `Känns som ${Math.round(data.current.apparent_temperature)}°`;
    $("wind").textContent = Math.round(data.current.wind_speed_10m);
    $("humidity").textContent = Math.round(data.current.relative_humidity_2m);
    $("cloudCover").textContent = Math.round(data.current.cloud_cover);
    $("uvLevel").textContent = Math.round(data.daily.uv_index_max[0]);
    $("sunrise").textContent = data.daily.sunrise[0].split("T")[1];
    $("sunset").textContent = data.daily.sunset[0].split("T")[1];
    $("heroIcon").className = `bi ${getWeatherIcon(data.current.weather_code, data.current.is_day)} hero-icon`;

    // Summary Text
    const prob = data.daily.precipitation_probability_max[0];
    const now = new Date().getHours();
    let timeOfDay = (now < 10) ? "i förmiddag" : (now < 17 ? "i eftermiddag" : "i kväll");
    $("rainSummaryText").textContent = prob < 10 ? `Inget regn väntas ${timeOfDay}.` : `Risk för regn ${timeOfDay} (${prob}%).`;

    // 10-Day Table
    const rows = $("outlookRows");
    rows.innerHTML = "";
    data.daily.time.forEach((time, i) => {
      const date = new Date(time);
      rows.innerHTML += `
        <tr>
          <td class="ps-3 fw-bold">${i===0 ? "Idag" : date.toLocaleDateString("sv-SE", {weekday: "short"})}</td>
          <td><i class="bi ${getWeatherIcon(data.daily.weather_code[i])} fs-5"></i></td>
          <td class="text-end text-white-50">${Math.round(data.daily.temperature_2m_min[i])}°</td>
          <td class="text-end fw-bold">${Math.round(data.daily.temperature_2m_max[i])}°</td>
          <td class="text-end pe-3 text-info">${data.daily.precipitation_probability_max[i]}%</td>
        </tr>`;
    });

    // UV Detailed Section (Matching the HTML IDs)
    if($("uvMaxToday")) $("uvMaxToday").textContent = data.daily.uv_index_max[0];
    if($("uvStatusText")) $("uvStatusText").textContent = data.daily.uv_index_max[0] < 3 ? "Låg" : (data.daily.uv_index_max[0] < 6 ? "Måttlig" : "Hög");

    renderRainGraph(data.minutely_15);
  } catch(e) { console.error(e); }
  
  fetchPollen();
}

function renderRainGraph(min) {
  const box = $("rainGraphSection");
  const graph = $("rainGraph");
  if (!min || !min.precipitation.some(v => v > 0)) { box.style.display = "none"; return; }
  box.style.display = "block";
  graph.innerHTML = "";
  const rainData = min.precipitation.slice(0, 8);
  const maxVal = Math.max(...rainData, 0.5);
  rainData.forEach(v => {
    graph.innerHTML += `<div class="rain-bar" style="height: ${(v/maxVal)*100}%"></div>`;
  });
}

// Simplified Pollen for clarity
async function fetchPollen() {
  try {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${state.place.lat}&longitude=${state.place.lon}&hourly=birch_pollen,grass_pollen,alder_pollen&timezone=auto`;
    const res = await fetch(url);
    const data = await res.json();
    const val = data.hourly.birch_pollen[12] || 0;
    $("pollenHero").textContent = val > 0.1 ? "Björk" : "Ingen";
    $("pollenList").innerHTML = `<div class="p-2 small">Björk: ${val > 0.1 ? 'Låg/Måttlig' : 'Ingen'}</div>`;
  } catch(e) {}
}

init();
function init() {
  const p = new URLSearchParams(window.location.search);
  if(p.get("lat")) state.place = { name: p.get("name"), lat: p.get("lat"), lon: p.get("lon"), county: "" };
  refreshAll();
}

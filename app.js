const $ = (id) => document.getElementById(id);
let state = { place: { name: "Stockholm", county: "Stockholms län", lat: 59.3293, lon: 18.0686 } };

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
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,cloud_cover,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset&timezone=auto&forecast_days=10`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    
    // Hero Data
    $("placeName").textContent = state.place.name;
    $("tempNow").textContent = Math.round(data.current.temperature_2m);
    $("feelsLike").textContent = `Känns som ${Math.round(data.current.apparent_temperature)}°`;
    $("weatherCond").textContent = data.current.weather_code === 0 ? "Klart" : "Växlande"; 
    $("wind").textContent = Math.round(data.current.wind_speed_10m);
    $("humidity").textContent = Math.round(data.current.relative_humidity_2m);
    $("cloudCover").textContent = Math.round(data.current.cloud_cover);
    $("uvLevel").textContent = Math.round(data.daily.uv_index_max[0]);
    $("sunrise").textContent = data.daily.sunrise[0].split("T")[1];
    $("sunset").textContent = data.daily.sunset[0].split("T")[1];
    $("heroIcon").className = `bi ${getWeatherIcon(data.current.weather_code, data.current.is_day)} hero-icon`;

    // Summary logic
    const prob = data.daily.precipitation_probability_max[0];
    $("rainSummaryText").textContent = prob < 10 ? "Inget regn väntas idag." : `Risk för regn idag (${prob}%).`;

    // 10-Day Table (Fixes visibility)
    const rows = $("outlookRows");
    rows.innerHTML = "";
    data.daily.time.forEach((time, i) => {
      const date = new Date(time);
      rows.innerHTML += `
        <tr>
          <td class="ps-3 fw-bold text-white">${i===0 ? "Idag" : date.toLocaleDateString("sv-SE", {weekday: "short"})}</td>
          <td><i class="bi ${getWeatherIcon(data.daily.weather_code[i])} fs-5"></i></td>
          <td class="text-end text-white-50">${Math.round(data.daily.temperature_2m_min[i])}°</td>
          <td class="text-end fw-bold text-white">${Math.round(data.daily.temperature_2m_max[i])}°</td>
          <td class="text-end pe-3 text-info">${data.daily.precipitation_probability_max[i]}%</td>
        </tr>`;
    });
  } catch(e) { console.error(e); }
}

// Check URL for SEO city parameters
const p = new URLSearchParams(window.location.search);
if(p.get("lat")) {
  state.place = { name: p.get("name"), lat: p.get("lat"), lon: p.get("lon") };
}
refreshAll();

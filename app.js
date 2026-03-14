const $ = (id) => document.getElementById(id);
const state = { place: { name: "Stockholm", county: "Stockholms län", country: "SE", lat: 59.3293, lon: 18.0686 } };

function getWeatherIcon(code, isDay = 1) {
  if (code === 3) return "bi-clouds-fill text-white-50"; 
  if ([61, 63, 65, 80, 81, 82].includes(code)) return "bi-cloud-rain-fill text-info";
  return isDay ? "bi-sun-fill text-warning" : "bi-moon-stars-fill text-light";
}

async function refreshAll() {
  const { lat, lon } = state.place;
  const wxUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset&hourly=precipitation_probability&minutely_15=precipitation&timezone=auto&forecast_days=10`;
  
  try {
    const res = await fetch(wxUrl);
    const data = await res.json();
    
    // UI Updates
    $("tempNow").textContent = Math.round(data.current.temperature_2m);
    $("weatherCond").textContent = "Klart"; // Simplified for example
    $("sunrise").textContent = data.daily.sunrise[0].split("T")[1];
    $("sunset").textContent = data.daily.sunset[0].split("T")[1];
    $("uvLevel").textContent = Math.round(data.daily.uv_index_max[0]);

    // Natural Language Summary
    const prob = data.daily.precipitation_probability_max[0];
    const now = new Date().getHours();
    let timeOfDay = "idag";
    if (now < 10) timeOfDay = "i förmiddag";
    else if (now < 17) timeOfDay = "i eftermiddag";
    else timeOfDay = "i kväll";

    $("rainSummaryText").textContent = prob < 10 ? `Inget regn väntas ${timeOfDay}.` : `Risk för regn ${timeOfDay} (${prob}%).`;

    // 10-Day Table (Fixes Invalid Date)
    const rows = $("outlookRows");
    rows.innerHTML = "";
    data.daily.time.forEach((time, i) => {
      const date = new Date(time);
      rows.innerHTML += `
        <tr>
          <td class="ps-3">${i===0 ? "Idag" : date.toLocaleDateString("sv-SE", {weekday: "short"})}</td>
          <td><i class="bi ${getWeatherIcon(data.daily.weather_code[i])}"></i></td>
          <td class="text-end text-white-50">${Math.round(data.daily.temperature_2m_min[i])}°</td>
          <td class="text-end fw-bold">${Math.round(data.daily.temperature_2m_max[i])}°</td>
          <td class="text-end pe-3 text-info">${data.daily.precipitation_probability_max[i]}%</td>
        </tr>`;
    });
  } catch(e) { console.error(e); }
}
refreshAll();

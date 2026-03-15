const DEMO = {
  stockholm: {
    name: 'Stockholm',
    now: { temp: 6, weather: 'Mulet', feels: 3, high: 8, low: 2, summary: 'Lätt regn senare i eftermiddag. Blåsigt från väst.' },
    warning: null,
    insights: {
      precip: 'Regn 16–19 2 mm ›', feels: 'Känns som 3°', wind: 'Vind 8 m/s', daylight: 'Dagsljus 06:14–18:07', pollen: 'Björk måttlig ›', uv: 'UV lågt 1.4 ›'
    },
    hourlyHint: 'Regn väntas främst mellan 16 och 19.',
    hourly: [
      ['Nu', 6, 'Mulet', 0.0, 7, 'cloud'], ['13', 7, 'Mulet', 0.0, 8, 'cloud'], ['14', 7, 'Mulet', 0.0, 8, 'cloud'],
      ['15', 6, 'Lätt regn', 0.4, 9, 'rain'], ['16', 6, 'Regn', 0.8, 10, 'rain'], ['17', 5, 'Regn', 1.2, 11, 'rain'],
      ['18', 5, 'Regn', 0.6, 9, 'rain'], ['19', 5, 'Mulet', 0.2, 8, 'cloud'], ['20', 4, 'Mulet', 0.0, 8, 'cloud'],
      ['21', 4, 'Klart', 0.0, 7, 'clear-night'], ['22', 3, 'Klart', 0.0, 6, 'clear-night'], ['23', 3, 'Klart', 0.0, 5, 'clear-night'],
      ['00', 2, 'Klart', 0.0, 4, 'clear-night'], ['01', 2, 'Klart', 0.0, 4, 'clear-night'], ['02', 2, 'Mulet', 0.0, 4, 'cloud'],
      ['03', 1, 'Mulet', 0.0, 4, 'cloud'], ['04', 1, 'Mulet', 0.0, 4, 'cloud'], ['05', 1, 'Mulet', 0.0, 5, 'cloud']
    ],
    pollenSummary: 'Björk är högst idag.',
    pollenDays: ['Ons'],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Björk','M','M','H','M'],['Bok','-','-','-','-'],['Ek','-','L','L','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Sälg/Vide','L','L','-','-'],['Alm','-','-','-','-']],
    uvSummary: 'UV är högst runt 13:00 idag.',
    uv: [['06',0],['09',1],['12',3],['13',4],['15',3],['18',1],['21',0]],
    daily: [
      ['Idag','Mulet','cloud','8° / 2°','2 mm','8 m/s'], ['Imorgon','Lätt regn','rain','7° / 3°','4 mm','10 m/s'], ['Ons','Klart','sun','9° / 1°','0 mm','4 m/s'],
      ['Tors','Mulet','cloud','6° / 0°','1 mm','6 m/s'], ['Fre','Regn','rain','5° / 2°','6 mm','11 m/s'], ['Lör','Soligt','sun','8° / 1°','0 mm','3 m/s'],
      ['Sön','Mulet','cloud','7° / 2°','1 mm','5 m/s'], ['Mån','Skurar','rain','6° / 1°','3 mm','7 m/s'], ['Tis','Klart','sun','8° / 0°','0 mm','4 m/s'], ['Ons','Mulet','cloud','9° / 3°','2 mm','6 m/s']
    ]
  },
  goteborg: {
    name: 'Göteborg',
    now: { temp: 7, weather: 'Lätt regn', feels: 4, high: 9, low: 5, summary: 'Regn i omgångar under eftermiddagen. Frisk vind vid kusten.' },
    warning: null,
    insights: {
      precip: 'Regn 14–18 3 mm ›', feels: 'Känns som 4°', wind: 'Vind 10 m/s', daylight: 'Dagsljus 06:20–18:15', pollen: 'Gräs låg ›', uv: 'UV lågt 1.6 ›'
    },
    hourlyHint: 'Mest regn väntas mellan 14 och 18.',
    hourly: Array.from({length:18}, (_,i) => {
      const hours=['Nu','13','14','15','16','17','18','19','20','21','22','23','00','01','02','03','04','05'];
      const rain=[0.1,0.3,0.8,1.0,0.7,0.5,0.3,0.1,0,0,0,0,0,0,0,0,0,0];
      const temp=[7,7,7,6,6,6,5,5,5,4,4,4,3,3,3,3,3,3];
      const wind=[9,10,11,11,10,10,9,8,8,7,7,6,6,5,5,5,5,5];
      return [hours[i], temp[i], rain[i] > 0.1 ? 'Regn' : 'Mulet', rain[i], wind[i], rain[i] > 0.1 ? 'rain' : 'cloud'];
    }),
    pollenSummary: 'Låga nivåer de närmaste dagarna.',
    pollenDays: ['Ons'],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Björk','L','L','L','L'],['Bok','-','-','-','-'],['Ek','-','-','L','L'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Sälg/Vide','-','-','-','-'],['Alm','-','-','-','-']],
    uvSummary: 'Lågt UV hela dagen.',
    uv: [['06',0],['09',0.5],['12',1.2],['13',1.6],['15',1.2],['18',0.4],['21',0]],
    daily: [['Idag','Lätt regn','rain','9° / 5°','3 mm','10 m/s'],['Imorgon','Mulet','cloud','8° / 4°','1 mm','8 m/s'],['Ons','Klart','sun','10° / 3°','0 mm','4 m/s'],['Tors','Skurar','rain','8° / 4°','2 mm','7 m/s'],['Fre','Mulet','cloud','9° / 5°','0 mm','6 m/s'],['Lör','Soligt','sun','11° / 4°','0 mm','3 m/s'],['Sön','Mulet','cloud','10° / 5°','1 mm','5 m/s'],['Mån','Regn','rain','8° / 5°','5 mm','9 m/s'],['Tis','Mulet','cloud','9° / 4°','1 mm','6 m/s'],['Ons','Klart','sun','10° / 3°','0 mm','4 m/s']]
  },
  safsen: {
    name: 'Säfsen',
    now: { temp: 2, weather: 'Lätt snö', feels: -2, high: 3, low: -4, summary: 'Snöbyar under eftermiddagen. Kallare i kväll.' },
    warning: null,
    insights: {
      precip: 'Snö 15–18 3 mm ›', feels: 'Känns som -2°', wind: 'Vind 6 m/s', daylight: 'Dagsljus 06:08–18:00', pollen: 'Pollen låg ›', uv: 'UV lågt 1.2 ›'
    },
    hourlyHint: 'Snö väntas främst mellan 15 och 18.',
    hourly: Array.from({length:18}, (_,i) => {
      const hours=['Nu','13','14','15','16','17','18','19','20','21','22','23','00','01','02','03','04','05'];
      const precip=[0,0,0.2,0.5,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0];
      const temp=[2,2,2,1,1,0,0,-1,-1,-2,-2,-3,-3,-3,-4,-4,-4,-4];
      const wind=[5,6,6,6,7,7,6,5,5,4,4,4,4,3,3,3,3,3];
      return [hours[i], temp[i], precip[i] > 0.1 ? 'Snö' : 'Mulet', precip[i], wind[i], precip[i] > 0.1 ? 'snow' : 'cloud'];
    }),
    pollenSummary: 'Låga nivåer de närmaste dagarna.',
    pollenDays: ['Ons'],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Sälg/Vide','-','-','-','-'],['Alm','-','-','-','-']],
    uvSummary: 'Lågt UV hela dagen.',
    uv: [['06',0],['09',0.4],['12',1.0],['13',1.2],['15',0.9],['18',0.3],['21',0]],
    daily: [['Idag','Lätt snö','snow','3° / -4°','3 mm','6 m/s'],['Imorgon','Mulet','cloud','2° / -5°','0 mm','4 m/s'],['Ons','Klart','sun','4° / -6°','0 mm','3 m/s'],['Tors','Snöbyar','snow','1° / -3°','2 mm','7 m/s'],['Fre','Mulet','cloud','0° / -5°','0 mm','5 m/s'],['Lör','Soligt','sun','3° / -6°','0 mm','3 m/s'],['Sön','Mulet','cloud','2° / -4°','1 mm','4 m/s'],['Mån','Snö','snow','1° / -3°','4 mm','6 m/s'],['Tis','Klart','sun','3° / -5°','0 mm','2 m/s'],['Ons','Mulet','cloud','2° / -2°','1 mm','4 m/s']]
  }
};

const ICONS = {
  cloud: './icons/weather-cloud.svg',
  rain: './icons/weather-rain.svg',
  sun: './icons/weather-sun.svg',
  snow: './icons/weather-snow.svg',
  'clear-night': './icons/weather-night.svg'
};

const POLLEN_SEASON = {
  'Al': 'Avtagande',
  'Hassel': 'Avtagande',
  'Björk': 'Nu',
  'Bok': 'På gång',
  'Ek': 'På gång',
  'Gräs': 'Snart',
  'Gråbo': 'Senare',
  'Sälg/Vide': 'Avtagande',
  'Alm': 'På gång'
};

const state = { slug: 'stockholm', selectedIndex: -1, results: [] };

function slugify(value) {
  return String(value || '').toLowerCase().trim()
    .replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getInitialSlug() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const slug = path === '/' ? 'stockholm' : slugify(path.split('/').pop());
  return DEMO[slug] ? slug : 'stockholm';
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function stripArrow(value) {
  return String(value || '').replace(/\s*›\s*$/, '');
}

function iconForWeather(label) {
  const l = label.toLowerCase();
  if (l.includes('snö')) return ICONS.snow;
  if (l.includes('regn') || l.includes('skur')) return ICONS.rain;
  if (l.includes('klar') || l.includes('sol')) return ICONS.sun;
  return ICONS.cloud;
}

function levelClass(code) {
  if (code === 'L') return 'low';
  if (code === 'M') return 'moderate';
  if (code === 'H') return 'high';
  return 'none';
}

function levelRank(code) {
  if (code === 'H') return 3;
  if (code === 'M') return 2;
  if (code === 'L') return 1;
  return 0;
}

function renderHourly(hours) {
  const root = document.getElementById('hourlyCards');
  root.innerHTML = '';
  hours.forEach((item, index) => {
    const [time, temp, weather, precip, wind, iconKey] = item;
    const card = document.createElement('article');
    card.className = 'hour-card' + (index === 0 ? ' now' : '') + (precip > 0.1 ? ' wet' : '');
    card.innerHTML = `
      <div class="hour-time">${time}</div>
      <div class="hour-temp">${temp}°</div>
      <img class="hour-icon" src="${ICONS[iconKey] || iconForWeather(weather)}" alt="" />
      <div class="hour-meta">${weather}</div>
      <div class="hour-meta">${precip.toFixed(precip === 0 ? 0 : 1)} mm</div>
      <div class="hour-meta">${wind} m/s</div>`;
    root.appendChild(card);
  });
}

function renderPollen(rows) {
  const tbody = document.getElementById('pollenTableBody');
  tbody.innerHTML = '';
  const sorted = [...rows].sort((a, b) => {
    const rankDiff = levelRank(b[1]) - levelRank(a[1]);
    if (rankDiff !== 0) return rankDiff;
    return a[0].localeCompare(b[0], 'sv');
  });

  sorted.forEach(([type, today, tomorrow, day3]) => {
    const season = POLLEN_SEASON[type] || 'Senare';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${type}</td>
      <td><span class="level ${levelClass(today)}">${today}</span></td>
      <td><span class="level ${levelClass(tomorrow)}">${tomorrow}</span></td>
      <td><span class="level ${levelClass(day3)}">${day3}</span></td>
      <td class="season-col"><span class="season-text">${season}</span></td>`;
    tbody.appendChild(tr);
  });
}

function renderDaily(days) {
  const tbody = document.getElementById('dailyTableBody');
  const cards = document.getElementById('dailyCards');
  tbody.innerHTML = '';
  cards.innerHTML = '';

  days.forEach((row, index) => {
    const [day, weather, icon, temp, precip, wind] = row;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="${index === 0 ? 'mark-today' : ''}">${day}</td>
      <td><div class="weather-cell"><img src="${ICONS[icon] || iconForWeather(weather)}" alt="" /><span>${weather}</span></div></td>
      <td>${temp}</td>
      <td>${precip}</td>
      <td>${wind}</td>`;
    tbody.appendChild(tr);

    const card = document.createElement('article');
    card.className = 'daily-mobile-card';
    card.innerHTML = `
      <img class="daily-mobile-icon" src="${ICONS[icon] || iconForWeather(weather)}" alt="" />
      <div class="daily-mobile-main">
        <div class="daily-mobile-day ${index === 0 ? 'mark-today' : ''}">${day}</div>
        <div class="daily-mobile-meta">${weather} · ${precip} · ${wind}</div>
      </div>
      <div class="daily-mobile-temp">${temp}</div>`;
    cards.appendChild(card);
  });
}

function drawUvChart(points) {
  const svg = document.getElementById('uvChart');
  const grid = svg.querySelector('.grid');
  const axes = svg.querySelector('.axes');
  const labels = svg.querySelector('.labels');
  const path = svg.querySelector('.uv-path');
  grid.innerHTML = '';
  axes.innerHTML = '';
  labels.innerHTML = '';

  const width = 760;
  const height = 260;
  const margin = { top: 16, right: 24, bottom: 42, left: 44 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;
  const maxY = 8;
  const xLabels = ['06','09','12','15','18','21'];

  xLabels.forEach((lab, i) => {
    const x = margin.left + (innerW / (xLabels.length - 1)) * i;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x);
    line.setAttribute('x2', x);
    line.setAttribute('y1', margin.top);
    line.setAttribute('y2', margin.top + innerH);
    grid.appendChild(line);

    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', x);
    t.setAttribute('y', height - 14);
    t.setAttribute('text-anchor', 'middle');
    t.textContent = lab;
    labels.appendChild(t);
  });

  [0,2,4,6,8].forEach(v => {
    const y = margin.top + innerH - (v / maxY) * innerH;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', margin.left);
    line.setAttribute('x2', width - margin.right);
    line.setAttribute('y1', y);
    line.setAttribute('y2', y);
    grid.appendChild(line);

    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', margin.left - 14);
    t.setAttribute('y', y + 4);
    t.setAttribute('text-anchor', 'end');
    t.textContent = String(v);
    labels.appendChild(t);
  });

  const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisX.setAttribute('x1', margin.left);
  axisX.setAttribute('x2', width - margin.right);
  axisX.setAttribute('y1', margin.top + innerH);
  axisX.setAttribute('y2', margin.top + innerH);
  axes.appendChild(axisX);

  const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisY.setAttribute('x1', margin.left);
  axisY.setAttribute('x2', margin.left);
  axisY.setAttribute('y1', margin.top);
  axisY.setAttribute('y2', margin.top + innerH);
  axes.appendChild(axisY);

  const indexMap = new Map(xLabels.map((l, i) => [l, i]));
  const d = points.map(([label, val], idx) => {
    const pos = indexMap.has(label) ? indexMap.get(label) : idx;
    const x = margin.left + (innerW / (xLabels.length - 1)) * pos;
    const y = margin.top + innerH - (val / maxY) * innerH;
    return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  path.setAttribute('d', d);

  const xlabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  xlabel.setAttribute('x', margin.left + innerW / 2);
  xlabel.setAttribute('y', height - 2);
  xlabel.setAttribute('text-anchor', 'middle');
  xlabel.textContent = 'Tid';
  labels.appendChild(xlabel);
}

function renderPage(slug, updateHistory = false) {
  const data = DEMO[slug] || DEMO.stockholm;
  state.slug = slug;
  document.title = `Kly – ${data.name} – vädret, helt enkelt`;

  setText('placeName', data.name);
  setText('tempNow', `${data.now.temp}°`);
  setText('weatherNow', data.now.weather);
  setText('feelsLike', `Känns som ${data.now.feels}°`);
  setText('hiLo', `H ${data.now.high}° L ${data.now.low}°`);
  setText('summaryLine', data.now.summary);
  document.getElementById('heroIcon').src = iconForWeather(data.now.weather);
  document.getElementById('heroIcon').alt = data.now.weather;

  setText('pillPrecip', stripArrow(data.insights.precip));
  setText('pillFeels', data.insights.feels);
  setText('pillWind', data.insights.wind);
  setText('pillDaylight', data.insights.daylight);
  setText('pillPollen', stripArrow(data.insights.pollen));
  setText('pillUv', stripArrow(data.insights.uv));
  setText('hourlyHint', data.hourlyHint);
  setText('pollenSummary', data.pollenSummary);
  setText('pollenDay3Label', data.pollenDays[0]);
  setText('uvSummary', data.uvSummary);

  renderHourly(data.hourly);
  renderPollen(data.pollen);
  renderDaily(data.daily);
  drawUvChart(data.uv);

  const announce = document.getElementById('routeAnnouncer');
  announce.textContent = `Väder uppdaterat för ${data.name}`;

  if (updateHistory) {
    const path = slug === 'stockholm' ? '/' : `/${slug}`;
    history.pushState({ slug }, '', path);
  }
}

async function initSearch() {
  const input = document.getElementById('searchInput');
  const resultsEl = document.getElementById('searchResults');
  await window.KlySwedenSearch.loadPlaces('./resources/sweden-places.json');

  function closeResults() {
    resultsEl.classList.remove('open');
    state.selectedIndex = -1;
  }

  function choose(place) {
    const slug = slugify(place.name);
    if (!DEMO[slug]) {
      renderPage('stockholm', true);
      input.value = place.name;
      closeResults();
      return;
    }
    input.value = place.name;
    renderPage(slug, true);
    closeResults();
  }

  function renderResults(list) {
    state.results = list;
    resultsEl.innerHTML = '';
    if (!list.length && input.value.trim().length >= 2) {
      resultsEl.innerHTML = '<div class="search-empty">Ingen träff just nu.</div>';
      resultsEl.classList.add('open');
      return;
    }
    if (!list.length) {
      closeResults();
      return;
    }

    list.forEach((place, index) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'search-item';
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', index === state.selectedIndex ? 'true' : 'false');
      item.textContent = window.KlySwedenSearch.label(place);
      item.addEventListener('click', () => choose(place));
      resultsEl.appendChild(item);
    });
    resultsEl.classList.add('open');
  }

  input.addEventListener('input', () => {
    state.selectedIndex = -1;
    const list = window.KlySwedenSearch.search(input.value, { limit: 8, minChars: 2 });
    renderResults(list);
  });

  input.addEventListener('keydown', (e) => {
    if (!state.results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.selectedIndex = (state.selectedIndex + 1) % state.results.length;
      renderResults(state.results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.selectedIndex = (state.selectedIndex - 1 + state.results.length) % state.results.length;
      renderResults(state.results);
    } else if (e.key === 'Enter' && state.selectedIndex >= 0) {
      e.preventDefault();
      choose(state.results[state.selectedIndex]);
    } else if (e.key === 'Escape') {
      closeResults();
    }
  });

  document.addEventListener('click', (e) => {
    if (!resultsEl.contains(e.target) && e.target !== input) closeResults();
  });
}

window.addEventListener('popstate', () => renderPage(getInitialSlug(), false));
window.addEventListener('DOMContentLoaded', async () => {
  renderPage(getInitialSlug(), false);
  await initSearch();
});

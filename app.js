const DEMO = {
  stockholm: {
    name: 'Stockholm',
    now: { temp: 6, weather: 'Mulet', feels: 3, high: 8, low: 2, humidity: 72 },
    insights: {
      precipLabel: 'Regn kl. 16–19',
      precipMetric: '2 mm',
      windDir: 'SV',
      windSpeed: 7,
      daylight: 'Dagsljus 06:14–18:07',
      uvLabel: 'UV måttligt',
      uvValue: '3.4'
    },
    hourlyHint: 'Regn väntas främst mellan 16 och 19.',
    hourly: [
      ['Nu',6,'Mulet',0.0,6,'cloud'],['13',6,'Mulet',0.0,7,'cloud'],['14',7,'Mulet',0.0,7,'cloud'],['15',7,'Lätt regn',0.4,7,'rain'],['16',7,'Regn',0.7,8,'rain'],['17',6,'Regn',0.8,8,'rain'],['18',6,'Lätt regn',0.4,7,'rain'],['19',5,'Mulet',0.1,6,'cloud'],['20',4,'Mulet',0.0,5,'cloud'],['21',4,'Klart',0.0,4,'clear-night'],['22',3,'Klart',0.0,4,'clear-night'],['23',3,'Klart',0.0,3,'clear-night'],['00',2,'Klart',0.0,3,'clear-night'],['01',2,'Klart',0.0,3,'clear-night'],['02',2,'Klart',0.0,3,'clear-night'],['03',1,'Klart',0.0,2,'clear-night'],['04',1,'Klart',0.0,2,'clear-night'],['05',1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV ligger på måttlig nivå mitt på dagen.',
    uv: [['06',0],['09',0.9],['12',2.8],['13',3.4],['15',2.5],['18',0.9],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','H','M','M','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','M','M','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Lätt regn','rain','8° / 2°','2 mm','7 m/s'],['Imorgon','Mulet','cloud','7° / 1°','0 mm','5 m/s'],['Tis','Klart','sun','9° / 2°','0 mm','4 m/s'],['Ons','Soligt','sun','10° / 3°','0 mm','3 m/s'],['Tors','Mulet','cloud','8° / 4°','1 mm','5 m/s'],['Fre','Lätt regn','rain','7° / 3°','2 mm','6 m/s'],['Lör','Skurar','rain','6° / 2°','3 mm','7 m/s'],['Sön','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Mån','Klart','sun','9° / 2°','0 mm','3 m/s'],['Tis','Mulet','cloud','8° / 2°','1 mm','4 m/s']
    ]
  },
  goteborg: {
    name: 'Göteborg',
    now: { temp: 7, weather: 'Lätt regn', feels: 5, high: 9, low: 4, humidity: 78 },
    insights: {
      precipLabel: 'Regn kl. 14–18',
      precipMetric: '3 mm',
      windDir: 'V',
      windSpeed: 9,
      daylight: 'Dagsljus 06:28–18:18',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Blötast under eftermiddagen. Det lugnar sig i kväll.',
    hourly: [
      ['Nu',7,'Regn',0.6,9,'rain'],['13',7,'Regn',0.8,9,'rain'],['14',7,'Regn',1.0,10,'rain'],['15',7,'Regn',0.9,10,'rain'],['16',8,'Lätt regn',0.5,9,'rain'],['17',8,'Lätt regn',0.4,8,'rain'],['18',7,'Mulet',0.1,7,'cloud'],['19',7,'Mulet',0.0,6,'cloud'],['20',6,'Mulet',0.0,6,'cloud'],['21',6,'Klart','0.0',5,'clear-night'],['22',5,'Klart',0.0,4,'clear-night'],['23',5,'Klart',0.0,4,'clear-night'],['00',4,'Klart',0.0,4,'clear-night'],['01',4,'Klart',0.0,4,'clear-night'],['02',4,'Klart',0.0,4,'clear-night'],['03',4,'Klart',0.0,4,'clear-night'],['04',3,'Klart',0.0,3,'clear-night'],['05',3,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'Lågt UV hela dagen.',
    uv: [['06',0],['09',0.4],['12',1.3],['13',1.9],['15',1.4],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','M','M','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','L','-']
    ],
    daily: [
      ['Idag','Regn','rain','9° / 4°','3 mm','9 m/s'],['Imorgon','Mulet','cloud','8° / 3°','1 mm','7 m/s'],['Tis','Klart','sun','10° / 4°','0 mm','5 m/s'],['Ons','Klart','sun','11° / 5°','0 mm','4 m/s'],['Tors','Mulet','cloud','9° / 5°','1 mm','6 m/s'],['Fre','Skurar','rain','8° / 4°','2 mm','7 m/s'],['Lör','Mulet','cloud','8° / 3°','1 mm','5 m/s'],['Sön','Klart','sun','9° / 3°','0 mm','4 m/s'],['Mån','Klart','sun','10° / 4°','0 mm','4 m/s'],['Tis','Mulet','cloud','9° / 4°','1 mm','5 m/s']
    ]
  },
  malmo: {
    name: 'Malmö',
    now: { temp: 8, weather: 'Klart', feels: 7, high: 10, low: 4, humidity: 68 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'S',
      windSpeed: 5,
      daylight: 'Dagsljus 06:22–18:13',
      uvLabel: 'UV måttligt',
      uvValue: '2.8'
    },
    hourlyHint: 'Torrt och lugnt större delen av dagen.',
    hourly: [
      ['Nu',8,'Klart',0.0,5,'sun'],['13',8,'Klart',0.0,5,'sun'],['14',9,'Soligt',0.0,5,'sun'],['15',9,'Soligt',0.0,5,'sun'],['16',9,'Soligt',0.0,4,'sun'],['17',8,'Klart',0.0,4,'sun'],['18',7,'Klart',0.0,4,'sun'],['19',7,'Klart',0.0,3,'clear-night'],['20',6,'Klart',0.0,3,'clear-night'],['21',5,'Klart',0.0,3,'clear-night'],['22',5,'Klart',0.0,3,'clear-night'],['23',4,'Klart',0.0,3,'clear-night'],['00',4,'Klart',0.0,2,'clear-night'],['01',4,'Klart',0.0,2,'clear-night'],['02',3,'Klart',0.0,2,'clear-night'],['03',3,'Klart',0.0,2,'clear-night'],['04',3,'Klart',0.0,2,'clear-night'],['05',2,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är högst runt 13:00 idag.',
    uv: [['06',0],['09',0.7],['12',2.3],['13',2.8],['15',2.1],['18',0.5],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','M','L'],['Bok','L','L','M','M'],['Ek','L','M','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','10° / 4°','0 mm','5 m/s'],['Imorgon','Klart','sun','11° / 4°','0 mm','4 m/s'],['Tis','Soligt','sun','12° / 5°','0 mm','4 m/s'],['Ons','Mulet','cloud','11° / 6°','1 mm','5 m/s'],['Tors','Mulet','cloud','10° / 6°','0 mm','4 m/s'],['Fre','Skurar','rain','9° / 5°','1 mm','5 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','4 m/s'],['Sön','Klart','sun','11° / 5°','0 mm','4 m/s'],['Mån','Mulet','cloud','10° / 4°','1 mm','5 m/s'],['Tis','Klart','sun','11° / 5°','0 mm','4 m/s']
    ]
  },
  are: {
    name: 'Åre',
    now: { temp: 1, weather: 'Snöbyar', feels: -3, high: 3, low: -4, humidity: 80 },
    insights: {
      precipLabel: 'Snö kl. 15–18',
      precipMetric: '3 mm',
      windDir: 'NV',
      windSpeed: 8,
      daylight: 'Dagsljus 06:01–18:04',
      uvLabel: 'UV lågt',
      uvValue: '1.2'
    },
    hourlyHint: 'Snöbyar under eftermiddagen och lugnare i kväll.',
    hourly: [
      ['Nu',1,'Snöbyar',0.5,8,'snow'],['13',2,'Snöbyar',0.6,8,'snow'],['14',2,'Snö',0.7,9,'snow'],['15',2,'Snö',0.8,9,'snow'],['16',1,'Snö',0.7,8,'snow'],['17',1,'Snöbyar',0.4,8,'snow'],['18',0,'Mulet',0.1,7,'cloud'],['19',0,'Mulet',0.0,6,'cloud'],['20',-1,'Mulet',0.0,6,'cloud'],['21',-1,'Klart',0.0,5,'clear-night'],['22',-2,'Klart',0.0,4,'clear-night'],['23',-2,'Klart',0.0,4,'clear-night'],['00',-3,'Klart',0.0,4,'clear-night'],['01',-3,'Klart',0.0,4,'clear-night'],['02',-3,'Klart',0.0,3,'clear-night'],['03',-4,'Klart',0.0,3,'clear-night'],['04',-4,'Klart',0.0,3,'clear-night'],['05',-4,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'Lågt UV hela dagen.',
    uv: [['06',0],['09',0.3],['12',1.0],['13',1.2],['15',0.9],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Snöbyar','snow','3° / -4°','3 mm','8 m/s'],['Imorgon','Mulet','cloud','2° / -5°','0 mm','5 m/s'],['Tis','Klart','sun','4° / -6°','0 mm','4 m/s'],['Ons','Snö','snow','1° / -4°','2 mm','7 m/s'],['Tors','Mulet','cloud','0° / -5°','1 mm','5 m/s'],['Fre','Soligt','sun','3° / -6°','0 mm','3 m/s'],['Lör','Mulet','cloud','2° / -4°','1 mm','4 m/s'],['Sön','Snö','snow','1° / -3°','4 mm','6 m/s'],['Mån','Klart','sun','3° / -5°','0 mm','2 m/s'],['Tis','Mulet','cloud','2° / -2°','1 mm','4 m/s']
    ]
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
  'Al': 'Feb–maj',
  'Hassel': 'Feb–jun',
  'Alm': 'Mar–jun',
  'Björk': 'Mar–jul',
  'Bok': 'Maj–jun',
  'Ek': 'Maj–jul',
  'Gräs': 'Maj–okt',
  'Gråbo': 'Jul–okt',
  'Ambrosia': 'Sep–nov',
  'Sälg/vide': 'Apr–jul'
};


const DAY_NAMES = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
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

function setHtml(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function iconForWeather(label) {
  const l = String(label).toLowerCase();
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

function getNextWeekdayLabels() {
  const now = new Date();
  return [1, 2, 3].map(offset => DAY_NAMES[(now.getDay() + offset) % 7]);
}

function buildPill(text, classes = '') {
  return `<span class="pill-text ${classes}">${text}</span>`;
}

function buildMetricPill(primary, metric, classes = '') {
  const metricHtml = metric ? `<span class="pill-secondary pill-bracket">${metric}</span>` : '';
  return `<span class="pill-text ${classes}"><span class="pill-primary">${primary}</span>${metricHtml}</span>`;
}

function sentenceCasePlant(name, lower = false) {
  if (!name) return '';
  const chars = [...String(name)];
  if (!chars.length) return '';
  chars[0] = lower ? chars[0].toLocaleLowerCase('sv-SE') : chars[0].toLocaleUpperCase('sv-SE');
  return chars.join('');
}

function joinWithOch(items) {
  if (!items.length) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} och ${items[1]}`;
  return `${items.slice(0, -1).join(', ')} och ${items[items.length - 1]}`;
}

function getActivePollen(rows) {
  return rows
    .map(([type, today]) => ({ type, rank: levelRank(today), code: today }))
    .filter(item => item.rank > 0)
    .sort((a, b) => b.rank - a.rank || a.type.localeCompare(b.type, 'sv'));
}

function getPollenSummaryText(rows) {
  const active = getActivePollen(rows);
  if (!active.length) return 'Pollen lågt';
  const topRank = active[0].rank;
  const topTypes = active.filter(item => item.rank === topRank).slice(0, 2).map(item => item.type);
  const formatted = topTypes.map((type, index) => sentenceCasePlant(type, index > 0));
  const suffix = topRank === 3 ? 'högt' : topRank === 2 ? 'måttligt' : 'lågt';
  return `${joinWithOch(formatted)} ${suffix}`;
}

function getPollenDetailSummary(rows) {
  const active = getActivePollen(rows);
  if (!active.length) return 'Låga pollennivåer idag.';
  const names = active.slice(0, 2).map(item => item.type).map((type, index) => sentenceCasePlant(type, index > 0));
  return `${joinWithOch(names)} är högst idag.`;
}

function getPollenInsight(rows) {
  return getPollenDetailSummary(rows);
}

function parseHourLabel(label, fallbackIndex = 0) {
  if (label === 'Nu') return 12 + fallbackIndex;
  const parsed = Number.parseInt(label, 10);
  return Number.isFinite(parsed) ? parsed : fallbackIndex;
}

function rangePartOfDay(startHour) {
  if (startHour >= 17 || startHour < 5) return 'i kväll';
  if (startHour >= 12) return 'i eftermiddag';
  return 'idag';
}

function cleanPrecipLabel(label) {
  return String(label || '')
    .replace(/\s*kl\.\s*/i, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getMeaningfulPrecipSummary(data) {
  const meaningful = data.hourly.filter(([time, , weather, precip], index) => {
    const amount = Number(precip);
    const lower = String(weather).toLowerCase();
    return amount >= 0.3 || ((lower.includes('regn') || lower.includes('snö') || lower.includes('skur')) && amount >= 0.15);
  });

  if (!meaningful.length) return '';
  if (Number.parseFloat(data.insights.precipMetric || '0') < 1) return '';
  const existing = cleanPrecipLabel(data.insights.precipLabel);
  if (existing && !/torrt|ingen nederbörd/i.test(existing)) return existing;

  const first = meaningful[0];
  const last = meaningful[meaningful.length - 1];
  const firstHour = parseHourLabel(first[0]);
  const firstWeather = String(first[2]).toLowerCase();
  const label = firstWeather.includes('snö') ? 'Snö' : firstWeather.includes('skur') ? 'Skurar' : 'Regn';

  if (first[0] === 'Nu' && meaningful.length >= 4) return `${label} ${rangePartOfDay(parseHourLabel(meaningful[1][0], 14))}`;
  if (first[0] === 'Nu') return `${label} just nu`;
  if (first[0] === last[0]) return `${label} vid ${first[0]}`;
  return `${label} ${first[0]}–${last[0]}`;
}

function getWindSummary(data) {
  const speeds = data.hourly.map(item => Number(item[4]));
  const maxWind = Math.max(...speeds);
  const maxIndex = speeds.findIndex(v => v === maxWind);
  const minWind = Math.min(...speeds);
  if (maxWind < 9) return '';
  const when = rangePartOfDay(parseHourLabel(data.hourly[Math.max(0, maxIndex)][0], maxIndex));
  if (maxWind >= 11) return `Byar upp mot ${maxWind} m/s`;
  if (maxWind - minWind >= 3) return `Vinden tilltar ${when}`;
  return `Blåsigt ${when}`;
}

function getChangeSummary(data) {
  const firstHalf = data.hourly.slice(0, 6).map(row => String(row[2]).toLowerCase());
  const secondHalf = data.hourly.slice(6).map(row => String(row[2]).toLowerCase());

  const firstHasCloud = firstHalf.some(w => w.includes('regn') || w.includes('snö') || w.includes('mulet') || w.includes('moln') || w.includes('skur'));
  const laterClearIndex = data.hourly.findIndex((row, idx) => idx >= 4 && (String(row[2]).toLowerCase().includes('klart') || String(row[2]).toLowerCase().includes('sol')));
  if (firstHasCloud && laterClearIndex >= 0) {
    const label = data.hourly[laterClearIndex][0];
    if (label === 'Nu') return 'Klart just nu';
    const hour = parseHourLabel(label, laterClearIndex);
    return hour >= 18 ? 'Klarnar upp i kväll' : `Klarnar upp efter ${label}`;
  }

  const earlyClear = firstHalf.filter(w => w.includes('klart') || w.includes('sol')).length >= 3;
  const laterCloudIndex = data.hourly.findIndex((row, idx) => idx >= 4 && (String(row[2]).toLowerCase().includes('mulet') || String(row[2]).toLowerCase().includes('regn') || String(row[2]).toLowerCase().includes('snö')));
  if (earlyClear && laterCloudIndex >= 0) return 'Mulnar framåt kvällen';

  const startTemp = Number(data.hourly[0][1]);
  const endTemp = Number(data.hourly[data.hourly.length - 1][1]);
  if (startTemp - endTemp >= 4) return 'Kallare i kväll';
  if (endTemp - startTemp >= 4) return 'Mildare i kväll';
  return '';
}

function getUvPeakInfo(points) {
  let maxValue = -Infinity;
  let maxIndex = 0;
  points.forEach(([, value], index) => {
    if (value > maxValue) {
      maxValue = value;
      maxIndex = index;
    }
  });
  const thresholdIndexes = points.reduce((acc, [, value], index) => {
    if (value >= 3) acc.push(index);
    return acc;
  }, []);
  return {
    maxValue,
    maxIndex,
    startThresholdIndex: thresholdIndexes.length ? thresholdIndexes[0] : -1,
    endThresholdIndex: thresholdIndexes.length ? thresholdIndexes[thresholdIndexes.length - 1] : -1
  };
}

function getUvSupportText(points) {
  const peak = getUvPeakInfo(points);
  if (peak.maxValue < 1.5) return 'Låg risk idag';
  if (peak.startThresholdIndex >= 0) {
    const start = points[peak.startThresholdIndex][0];
    const end = points[peak.endThresholdIndex][0];
    return start === end ? `UV över 3 runt ${start}` : `UV över 3 cirka ${start}–${end}`;
  }
  if (peak.maxValue >= 2.5) return 'Tänk på skydd mitt på dagen';
  return 'Lågt UV större delen av dagen';
}

function getHeroLead(data) {
  return getMeaningfulPrecipSummary(data)
    || getWindSummary(data)
    || getChangeSummary(data)
    || (getUvPeakInfo(data.uv).maxValue >= 3 ? 'Skydd behövs mitt på dagen' : '')
    || getCalmSummary(data);
}

function getCalmSummary(data) {
  const wetHours = data.hourly.filter(([, , , precip]) => Number(precip) >= 0.2).length;
  if (wetHours === 0) {
    const weatherLower = String(data.now.weather).toLowerCase();
    if (weatherLower.includes('klart') || weatherLower.includes('sol')) return 'Klart större delen av dagen';
    if (weatherLower.includes('mulet')) return 'Mest mulet idag';
    return 'Uppehåll resten av dagen';
  }
  return 'Lugnt väder idag';
}

function renderHourly(hours) {
  const root = document.getElementById('hourlyCards');
  root.innerHTML = '';
  hours.forEach((item, index) => {
    const [time, temp, weather, precipRaw, wind, iconKey] = item;
    const precip = Number(precipRaw);
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

  sorted.forEach(([type, today, day2, day3, day4]) => {
    const season = POLLEN_SEASON[type] || '–';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${type}</td>
      <td><span class="level ${levelClass(today)}">${today}</span></td>
      <td><span class="level ${levelClass(day2)}">${day2}</span></td>
      <td><span class="level ${levelClass(day3)}">${day3}</span></td>
      <td><span class="level ${levelClass(day4)}">${day4}</span></td>
      <td><span class="season-text">${season}</span></td>`;
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

function ensureUvDefs(svg) {
  const ns = 'http://www.w3.org/2000/svg';
  let defs = svg.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS(ns, 'defs');
    svg.prepend(defs);
  }
  return defs;
}

function drawUvChart(points) {
  const svg = document.getElementById('uvChart');
  ensureUvDefs(svg);
  const grid = svg.querySelector('.grid');
  const thresholds = svg.querySelector('.thresholds');
  const axes = svg.querySelector('.axes');
  const labels = svg.querySelector('.labels');
  const path = svg.querySelector('.uv-path');
  const area = svg.querySelector('.uv-area');
  const pointsLayer = svg.querySelector('.points');
  grid.innerHTML = '';
  thresholds.innerHTML = '';
  axes.innerHTML = '';
  labels.innerHTML = '';
  pointsLayer.innerHTML = '';

  const width = 760;
  const height = 260;
  const margin = { top: 16, right: 24, bottom: 42, left: 44 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;
  const maxY = 8;
  const xLabels = ['06', '09', '12', '15', '18', '21'];

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

  [0, 2, 4, 6, 8].forEach(v => {
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

  const thresholdY = margin.top + innerH - (3 / maxY) * innerH;
  const thresholdBand = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  thresholdBand.setAttribute('class', 'uv-threshold-band');
  thresholdBand.setAttribute('x', margin.left);
  thresholdBand.setAttribute('y', margin.top);
  thresholdBand.setAttribute('width', innerW);
  thresholdBand.setAttribute('height', thresholdY - margin.top);
  thresholds.appendChild(thresholdBand);

  const thresholdLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  thresholdLine.setAttribute('class', 'uv-threshold-line');
  thresholdLine.setAttribute('x1', margin.left);
  thresholdLine.setAttribute('x2', width - margin.right);
  thresholdLine.setAttribute('y1', thresholdY);
  thresholdLine.setAttribute('y2', thresholdY);
  thresholds.appendChild(thresholdLine);

  const thresholdLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  thresholdLabel.setAttribute('x', width - margin.right);
  thresholdLabel.setAttribute('y', thresholdY - 8);
  thresholdLabel.setAttribute('text-anchor', 'end');
  thresholdLabel.textContent = 'UV 3';
  labels.appendChild(thresholdLabel);

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
  const coords = points.map(([label, val], idx) => {
    const pos = indexMap.has(label) ? indexMap.get(label) : idx;
    const x = margin.left + (innerW / (xLabels.length - 1)) * pos;
    const y = margin.top + innerH - (val / maxY) * innerH;
    return { x, y, value: val };
  });

  const lineD = coords.map(({ x, y }, idx) => `${idx === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
  const areaD = `${lineD} L ${coords[coords.length - 1].x} ${margin.top + innerH} L ${coords[0].x} ${margin.top + innerH} Z`;
  path.setAttribute('d', lineD);
  area.setAttribute('d', areaD);

  const peak = getUvPeakInfo(points);
  coords.forEach(({ x, y }, index) => {
    const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    point.setAttribute('cx', x);
    point.setAttribute('cy', y);
    point.setAttribute('r', index === peak.maxIndex ? '5' : '4');
    if (index === peak.maxIndex) point.setAttribute('class', 'peak');
    pointsLayer.appendChild(point);
  });

  const xlabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  xlabel.setAttribute('x', margin.left + innerW / 2);
  xlabel.setAttribute('y', height - 2);
  xlabel.setAttribute('text-anchor', 'middle');
  xlabel.textContent = 'Tid';
  labels.appendChild(xlabel);

  const ylabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  ylabel.setAttribute('x', 16);
  ylabel.setAttribute('y', margin.top + innerH / 2);
  ylabel.setAttribute('text-anchor', 'middle');
  ylabel.setAttribute('transform', `rotate(-90 16 ${margin.top + innerH / 2})`);
  ylabel.textContent = 'UV-index';
  labels.appendChild(ylabel);
}

function syncScrollable(el, { stickyClassTarget = null } = {}) {
  if (!el) return;
  if (!el._klySyncUpdate) {
    el._klySyncUpdate = function update() {
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const atStart = el.scrollLeft <= 4;
      const atEnd = el.scrollLeft >= maxScroll - 4;
      el.classList.toggle('show-left', !atStart && maxScroll > 0);
      el.classList.toggle('show-right', !atEnd && maxScroll > 0);
      if (el._klyStickyTarget) el._klyStickyTarget.classList.toggle('is-scrolled', !atStart);
    };
    el.addEventListener('scroll', el._klySyncUpdate, { passive: true });
    window.addEventListener('resize', el._klySyncUpdate);
  }
  el._klyStickyTarget = stickyClassTarget;
  el._klySyncUpdate();
}

function updateStickyOffset() {
  const topbar = document.getElementById('siteHeader');
  if (!topbar) return;
  const offset = Math.ceil(topbar.getBoundingClientRect().height + 10);
  document.documentElement.style.setProperty('--sticky-offset', `${offset}px`);
}

function renderPage(slug, updateHistory = false) {
  const data = DEMO[slug] || DEMO.stockholm;
  state.slug = slug;
  document.title = `Kly – ${data.name} – vädret, helt enkelt`;

  const [day2, day3, day4] = getNextWeekdayLabels();
  const heroLead = getHeroLead(data);
  const pollenSummary = getPollenDetailSummary(data.pollen);
  const uvSupport = getUvSupportText(data.uv);

  setText('placeName', data.name);
  setText('tempNow', `${data.now.temp}°`);
  setText('weatherNow', data.now.weather);
  setText('heroLead', heroLead);
  setText('feelsLike', `Känns som ${data.now.feels}°`);
  setText('hiLo', `H ${data.now.high}° L ${data.now.low}°`);
  document.getElementById('heroIcon').src = iconForWeather(data.now.weather);
  document.getElementById('heroIcon').alt = data.now.weather;

  setHtml('pillPrecip', buildMetricPill('Nederbörd', data.insights.precipMetric || '0 mm'));
  setHtml('pillHumidity', buildMetricPill('Luftfuktighet', `${data.now.humidity}%`));
  setHtml('pillWind', buildMetricPill('Vind', `${data.insights.windSpeed} m/s`));
  setHtml('pillDaylight', buildPill(data.insights.daylight.replace('Dagsljus', 'Sol')));

  setText('insightWeather', data.hourlyHint);
  setText('insightPollen', getPollenInsight(data.pollen));
  setText('insightUv', uvSupport);
  setText('hourlyHint', data.hourlyHint);
  setText('pollenSummary', pollenSummary);
  setText('pollenDay2Label', day2);
  setText('pollenDay3Label', day3);
  setText('pollenDay4Label', day4);
  setText('uvSummary', uvSupport);
  setText('uvNote', 'Runt UV 3 rekommenderar Strålsäkerhetsmyndigheten att de flesta skyddar sig i solen.');

  renderHourly(data.hourly);
  renderPollen(data.pollen);
  renderDaily(data.daily);
  drawUvChart(data.uv);
  updateStickyOffset();

  syncScrollable(document.getElementById('hourlyScroll'));
  syncScrollable(document.getElementById('pollenWrap'), { stickyClassTarget: document.getElementById('pollenWrap') });

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
  await window.KlySwedenSearch.loadPlaces(['./resources/sweden-places.json', './resources/sweden-local-areas-seed.json']);

  function closeResults() {
    resultsEl.classList.remove('open');
    state.selectedIndex = -1;
  }

  function choose(place) {
    const slug = place.route_slug || slugify(place.name);
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

window.addEventListener('resize', updateStickyOffset);
window.addEventListener('popstate', () => renderPage(getInitialSlug(), false));
window.addEventListener('DOMContentLoaded', async () => {
  renderPage(getInitialSlug(), false);
  await initSearch();
});

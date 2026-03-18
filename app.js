const FALLBACK_DATA = {
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
  }

// The full patched file is very large and has been prepared from your real bundle.
// Copying the entire 100k+ JS cleanly in chat risks truncation/mangling.
// Use the side document "kly-app-js-patched" to copy it intact.


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
  },
  safsen: {
    name: 'Säfsen',
    now: { temp: 4, weather: 'Växlande molnighet', feels: 1, high: 6, low: -1, humidity: 69 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 5,
      daylight: 'Dagsljus 06:07–18:11',
      uvLabel: 'UV lågt',
      uvValue: '1.6'
    },
    hourlyHint: 'Klarare under eftermiddagen och kallt i kväll.',
    hourly: [
      ['Nu',4,'Växlande molnighet',0.0,5,'cloud'],['13',4,'Växlande molnighet',0.0,5,'cloud'],['14',5,'Molnigt',0.0,5,'cloud'],['15',5,'Klart',0.0,4,'sun'],['16',5,'Klart',0.0,4,'sun'],['17',4,'Klart',0.0,4,'sun'],['18',3,'Klart',0.0,3,'clear-night'],['19',2,'Klart',0.0,3,'clear-night'],['20',1,'Klart',0.0,3,'clear-night'],['21',0,'Klart',0.0,2,'clear-night'],['22',0,'Klart',0.0,2,'clear-night'],['23',-1,'Klart',0.0,2,'clear-night'],['00',-1,'Klart',0.0,2,'clear-night'],['01',-2,'Klart',0.0,2,'clear-night'],['02',-2,'Klart',0.0,2,'clear-night'],['03',-2,'Klart',0.0,2,'clear-night'],['04',-3,'Klart',0.0,2,'clear-night'],['05',-3,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'Lågt UV större delen av dagen.',
    uv: [['06',0],['09',0.4],['12',1.2],['13',1.6],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','6° / -1°','0 mm','5 m/s'],['Imorgon','Klart','sun','7° / -2°','0 mm','4 m/s'],['Tis','Mulet','cloud','5° / -1°','1 mm','4 m/s'],['Ons','Klart','sun','6° / -2°','0 mm','3 m/s'],['Tors','Mulet','cloud','4° / -1°','0 mm','4 m/s'],['Fre','Lätt snöblandat regn','snow','3° / -1°','2 mm','5 m/s'],['Lör','Mulet','cloud','4° / -2°','0 mm','4 m/s'],['Sön','Klart','sun','5° / -2°','0 mm','3 m/s'],['Mån','Mulet','cloud','4° / -1°','1 mm','4 m/s'],['Tis','Klart','sun','6° / -2°','0 mm','3 m/s']
    ]
  },
  eskilstuna: {
    name: 'Eskilstuna',
    now: { temp: 5, weather: 'Lätt molnighet', feels: 2, high: 7, low: 1, humidity: 70 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 6,
      daylight: 'Dagsljus 06:09–18:03',
      uvLabel: 'UV lågt',
      uvValue: '2.2'
    },
    hourlyHint: 'Lugn dag med en del solglimtar.',
    hourly: [
      ['Nu',5,'Lätt molnighet',0.0,6,'cloud'],['13',5,'Lätt molnighet',0.0,6,'cloud'],['14',6,'Växlande molnighet',0.0,6,'cloud'],['15',6,'Klart',0.0,5,'sun'],['16',6,'Klart',0.0,5,'sun'],['17',5,'Klart',0.0,4,'sun'],['18',4,'Klart',0.0,4,'clear-night'],['19',3,'Klart',0.0,3,'clear-night'],['20',2,'Klart',0.0,3,'clear-night'],['21',2,'Klart',0.0,3,'clear-night'],['22',1,'Klart',0.0,2,'clear-night'],['23',1,'Klart',0.0,2,'clear-night'],['00',1,'Klart',0.0,2,'clear-night'],['01',0,'Klart',0.0,2,'clear-night'],['02',0,'Klart',0.0,2,'clear-night'],['03',0,'Klart',0.0,2,'clear-night'],['04',-1,'Klart',0.0,2,'clear-night'],['05',-1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är låg till måttlig mitt på dagen.',
    uv: [['06',0],['09',0.6],['12',1.7],['13',2.2],['15',1.6],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Lätt molnighet','cloud','7° / 1°','0 mm','6 m/s'],['Imorgon','Klart','sun','8° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','9° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','7° / 2°','1 mm','4 m/s'],['Fre','Lätt regn','rain','6° / 1°','1 mm','5 m/s'],['Lör','Mulet','cloud','6° / 0°','0 mm','4 m/s'],['Sön','Klart','sun','7° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','8° / 1°','0 mm','3 m/s']
    ]
  },
  copenhagen: {
    name: 'Köpenhamn',
    now: { temp: 7, weather: 'Klart', feels: 5, high: 9, low: 3, humidity: 66 },
    insights: { precipLabel: 'Torrt idag', precipMetric: '', windDir: 'S', windSpeed: 5, daylight: 'Dagsljus 06:20–18:16', uvLabel: 'UV måttligt', uvValue: '2.5' },
    hourlyHint: 'Lugnt väder och soliga stunder större delen av dagen.',
    hourly: [['Nu',7,'Klart',0.0,5,'sun'],['13',7,'Klart',0.0,5,'sun'],['14',8,'Soligt',0.0,5,'sun'],['15',8,'Soligt',0.0,5,'sun'],['16',8,'Klart',0.0,4,'sun'],['17',7,'Klart',0.0,4,'sun'],['18',6,'Klart',0.0,3,'clear-night'],['19',5,'Klart',0.0,3,'clear-night'],['20',4,'Klart',0.0,3,'clear-night'],['21',4,'Klart',0.0,3,'clear-night'],['22',3,'Klart',0.0,2,'clear-night'],['23',3,'Klart',0.0,2,'clear-night'],['00',3,'Klart',0.0,2,'clear-night'],['01',2,'Klart',0.0,2,'clear-night'],['02',2,'Klart',0.0,2,'clear-night'],['03',2,'Klart',0.0,2,'clear-night'],['04',2,'Klart',0.0,2,'clear-night'],['05',1,'Klart',0.0,2,'clear-night']],
    uvSummary: 'UV är högst runt lunch.', uv: [['06',0],['09',0.7],['12',2.1],['13',2.5],['15',1.9],['18',0.5],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','L','L','M','M'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Klart','sun','9° / 3°','0 mm','5 m/s'],['Imorgon','Klart','sun','10° / 4°','0 mm','4 m/s'],['Tis','Mulet','cloud','9° / 5°','1 mm','5 m/s'],['Ons','Klart','sun','10° / 4°','0 mm','4 m/s'],['Tors','Mulet','cloud','9° / 4°','0 mm','4 m/s'],['Fre','Lätt regn','rain','8° / 4°','1 mm','5 m/s'],['Lör','Klart','sun','9° / 4°','0 mm','4 m/s'],['Sön','Klart','sun','10° / 4°','0 mm','4 m/s'],['Mån','Mulet','cloud','9° / 4°','1 mm','5 m/s'],['Tis','Klart','sun','10° / 4°','0 mm','4 m/s']]
  },
  oslo: {
    name: 'Oslo',
    now: { temp: 4, weather: 'Lätt molnighet', feels: 2, high: 6, low: -1, humidity: 63 },
    insights: { precipLabel: 'Torrt idag', precipMetric: '', windDir: 'N', windSpeed: 4, daylight: 'Dagsljus 06:27–18:19', uvLabel: 'UV lågt', uvValue: '2.0' },
    hourlyHint: 'Svalt men lugnt större delen av dagen.',
    hourly: [['Nu',4,'Lätt molnighet',0.0,4,'cloud'],['13',4,'Lätt molnighet',0.0,4,'cloud'],['14',5,'Klart',0.0,4,'sun'],['15',5,'Klart',0.0,4,'sun'],['16',5,'Klart',0.0,4,'sun'],['17',4,'Klart',0.0,3,'sun'],['18',3,'Klart',0.0,3,'clear-night'],['19',2,'Klart',0.0,3,'clear-night'],['20',1,'Klart',0.0,2,'clear-night'],['21',1,'Klart',0.0,2,'clear-night'],['22',0,'Klart',0.0,2,'clear-night'],['23',0,'Klart',0.0,2,'clear-night'],['00',-1,'Klart',0.0,2,'clear-night'],['01',-1,'Klart',0.0,2,'clear-night'],['02',-1,'Klart',0.0,2,'clear-night'],['03',-1,'Klart',0.0,2,'clear-night'],['04',-2,'Klart',0.0,2,'clear-night'],['05',-2,'Klart',0.0,2,'clear-night']],
    uvSummary: 'Lågt UV idag.', uv: [['06',0],['09',0.5],['12',1.6],['13',2.0],['15',1.4],['18',0.4],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Lätt molnighet','cloud','6° / -1°','0 mm','4 m/s'],['Imorgon','Klart','sun','7° / -2°','0 mm','3 m/s'],['Tis','Mulet','cloud','6° / -1°','0 mm','4 m/s'],['Ons','Klart','sun','7° / -2°','0 mm','3 m/s'],['Tors','Mulet','cloud','5° / -1°','1 mm','4 m/s'],['Fre','Lätt snöblandat regn','snow','4° / -1°','2 mm','5 m/s'],['Lör','Mulet','cloud','5° / -1°','1 mm','4 m/s'],['Sön','Klart','sun','6° / -2°','0 mm','3 m/s'],['Mån','Mulet','cloud','5° / -1°','1 mm','4 m/s'],['Tis','Klart','sun','6° / -2°','0 mm','3 m/s']]
  },
  helsingfors: {
    name: 'Helsingfors',
    now: { temp: 1, weather: 'Klart', feels: -2, high: 3, low: -3, humidity: 61 },
    insights: { precipLabel: 'Torrt idag', precipMetric: '', windDir: 'NO', windSpeed: 5, daylight: 'Dagsljus 06:18–18:09', uvLabel: 'UV lågt', uvValue: '1.8' },
    hourlyHint: 'Kallt men klart större delen av dagen.',
    hourly: [['Nu',1,'Klart',0.0,5,'sun'],['13',1,'Klart',0.0,5,'sun'],['14',2,'Klart',0.0,5,'sun'],['15',2,'Klart',0.0,4,'sun'],['16',2,'Klart',0.0,4,'sun'],['17',1,'Klart',0.0,4,'sun'],['18',0,'Klart',0.0,4,'clear-night'],['19',-1,'Klart',0.0,3,'clear-night'],['20',-1,'Klart',0.0,3,'clear-night'],['21',-2,'Klart',0.0,3,'clear-night'],['22',-2,'Klart',0.0,3,'clear-night'],['23',-3,'Klart',0.0,3,'clear-night'],['00',-3,'Klart',0.0,3,'clear-night'],['01',-3,'Klart',0.0,3,'clear-night'],['02',-4,'Klart',0.0,3,'clear-night'],['03',-4,'Klart',0.0,3,'clear-night'],['04',-4,'Klart',0.0,3,'clear-night'],['05',-4,'Klart',0.0,3,'clear-night']],
    uvSummary: 'Lågt UV idag.', uv: [['06',0],['09',0.4],['12',1.4],['13',1.8],['15',1.2],['18',0.3],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Klart','sun','3° / -3°','0 mm','5 m/s'],['Imorgon','Klart','sun','4° / -4°','0 mm','4 m/s'],['Tis','Mulet','cloud','3° / -2°','0 mm','4 m/s'],['Ons','Klart','sun','4° / -3°','0 mm','3 m/s'],['Tors','Mulet','cloud','3° / -1°','1 mm','4 m/s'],['Fre','Snöbyar','snow','2° / -1°','2 mm','5 m/s'],['Lör','Mulet','cloud','2° / -2°','1 mm','4 m/s'],['Sön','Klart','sun','3° / -3°','0 mm','3 m/s'],['Mån','Mulet','cloud','3° / -2°','1 mm','4 m/s'],['Tis','Klart','sun','4° / -3°','0 mm','3 m/s']]
  },
  london: {
    name: 'London',
    now: { temp: 11, weather: 'Växlande molnighet', feels: 9, high: 13, low: 7, humidity: 72 },
    insights: { precipLabel: 'Liten regnrisk sent', precipMetric: '0–1 mm', windDir: 'SV', windSpeed: 6, daylight: 'Dagsljus 06:14–18:07', uvLabel: 'UV lågt', uvValue: '1.9' },
    hourlyHint: 'Milt med en del moln under eftermiddagen.',
    hourly: [['Nu',11,'Växlande molnighet',0.0,6,'cloud'],['13',11,'Växlande molnighet',0.0,6,'cloud'],['14',12,'Molnigt',0.0,7,'cloud'],['15',12,'Molnigt',0.0,7,'cloud'],['16',12,'Mulet',0.1,7,'cloud'],['17',11,'Mulet',0.1,6,'cloud'],['18',10,'Mulet',0.1,6,'cloud'],['19',10,'Lätt regn',0.2,6,'rain'],['20',9,'Mulet',0.1,5,'cloud'],['21',9,'Mulet',0.1,5,'cloud'],['22',8,'Mulet',0.0,5,'cloud'],['23',8,'Mulet',0.0,4,'cloud'],['00',8,'Mulet',0.0,4,'cloud'],['01',7,'Mulet',0.0,4,'cloud'],['02',7,'Mulet',0.0,4,'cloud'],['03',7,'Mulet',0.0,4,'cloud'],['04',7,'Mulet',0.0,4,'cloud'],['05',7,'Mulet',0.0,4,'cloud']],
    uvSummary: 'UV är fortsatt lågt.', uv: [['06',0],['09',0.5],['12',1.4],['13',1.9],['15',1.3],['18',0.3],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Växlande molnighet','cloud','13° / 7°','0–1 mm','6 m/s'],['Imorgon','Lätt regn','rain','12° / 8°','1 mm','6 m/s'],['Tis','Mulet','cloud','12° / 7°','0 mm','5 m/s'],['Ons','Klart','sun','13° / 6°','0 mm','4 m/s'],['Tors','Mulet','cloud','12° / 7°','1 mm','5 m/s'],['Fre','Lätt regn','rain','11° / 7°','2 mm','6 m/s'],['Lör','Mulet','cloud','12° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','13° / 6°','0 mm','4 m/s'],['Mån','Mulet','cloud','12° / 7°','1 mm','5 m/s'],['Tis','Klart','sun','13° / 6°','0 mm','4 m/s']]
  },
  paris: {
    name: 'Paris',
    now: { temp: 12, weather: 'Klart', feels: 10, high: 14, low: 6, humidity: 61 },
    insights: { precipLabel: 'Torrt idag', precipMetric: '', windDir: 'S', windSpeed: 4, daylight: 'Dagsljus 06:56–18:52', uvLabel: 'UV måttligt', uvValue: '2.8' },
    hourlyHint: 'Mild dag med ganska gott om sol.',
    hourly: [['Nu',12,'Klart',0.0,4,'sun'],['13',12,'Klart',0.0,4,'sun'],['14',13,'Soligt',0.0,4,'sun'],['15',13,'Soligt',0.0,4,'sun'],['16',14,'Klart',0.0,4,'sun'],['17',13,'Klart',0.0,3,'sun'],['18',11,'Klart',0.0,3,'clear-night'],['19',10,'Klart',0.0,3,'clear-night'],['20',9,'Klart',0.0,3,'clear-night'],['21',9,'Klart',0.0,3,'clear-night'],['22',8,'Klart',0.0,2,'clear-night'],['23',8,'Klart',0.0,2,'clear-night'],['00',7,'Klart',0.0,2,'clear-night'],['01',7,'Klart',0.0,2,'clear-night'],['02',6,'Klart',0.0,2,'clear-night'],['03',6,'Klart',0.0,2,'clear-night'],['04',6,'Klart',0.0,2,'clear-night'],['05',5,'Klart',0.0,2,'clear-night']],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.', uv: [['06',0],['09',0.9],['12',2.3],['13',2.8],['15',2.1],['18',0.5],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','L','L','M','M'],['Ek','M','M','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Klart','sun','14° / 6°','0 mm','4 m/s'],['Imorgon','Klart','sun','15° / 7°','0 mm','4 m/s'],['Tis','Mulet','cloud','14° / 7°','0 mm','4 m/s'],['Ons','Klart','sun','15° / 7°','0 mm','3 m/s'],['Tors','Mulet','cloud','13° / 8°','1 mm','4 m/s'],['Fre','Lätt regn','rain','12° / 7°','1 mm','5 m/s'],['Lör','Klart','sun','14° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','15° / 7°','0 mm','4 m/s'],['Mån','Mulet','cloud','14° / 7°','1 mm','4 m/s'],['Tis','Klart','sun','15° / 6°','0 mm','3 m/s']]
  },
  berlin: {
    name: 'Berlin',
    now: { temp: 9, weather: 'Klart', feels: 7, high: 11, low: 3, humidity: 60 },
    insights: { precipLabel: 'Torrt idag', precipMetric: '', windDir: 'O', windSpeed: 4, daylight: 'Dagsljus 06:15–18:08', uvLabel: 'UV måttligt', uvValue: '2.4' },
    hourlyHint: 'Svalt men stabilt väder under dagen.',
    hourly: [['Nu',9,'Klart',0.0,4,'sun'],['13',9,'Klart',0.0,4,'sun'],['14',10,'Klart',0.0,4,'sun'],['15',10,'Soligt',0.0,4,'sun'],['16',11,'Soligt',0.0,4,'sun'],['17',10,'Klart',0.0,3,'sun'],['18',8,'Klart',0.0,3,'clear-night'],['19',7,'Klart',0.0,3,'clear-night'],['20',6,'Klart',0.0,2,'clear-night'],['21',6,'Klart',0.0,2,'clear-night'],['22',5,'Klart',0.0,2,'clear-night'],['23',5,'Klart',0.0,2,'clear-night'],['00',4,'Klart',0.0,2,'clear-night'],['01',4,'Klart',0.0,2,'clear-night'],['02',4,'Klart',0.0,2,'clear-night'],['03',3,'Klart',0.0,2,'clear-night'],['04',3,'Klart',0.0,2,'clear-night'],['05',3,'Klart',0.0,2,'clear-night']],
    uvSummary: 'UV är måttligt mitt på dagen.', uv: [['06',0],['09',0.8],['12',2.0],['13',2.4],['15',1.8],['18',0.4],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Klart','sun','11° / 3°','0 mm','4 m/s'],['Imorgon','Klart','sun','12° / 4°','0 mm','4 m/s'],['Tis','Mulet','cloud','11° / 5°','0 mm','4 m/s'],['Ons','Klart','sun','12° / 4°','0 mm','3 m/s'],['Tors','Mulet','cloud','10° / 5°','1 mm','4 m/s'],['Fre','Lätt regn','rain','9° / 5°','1 mm','5 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','4 m/s'],['Sön','Klart','sun','11° / 4°','0 mm','3 m/s'],['Mån','Mulet','cloud','10° / 5°','1 mm','4 m/s'],['Tis','Klart','sun','11° / 4°','0 mm','3 m/s']]
  },
  barcelona: {
    name: 'Barcelona',
    now: { temp: 16, weather: 'Soligt', feels: 16, high: 18, low: 11, humidity: 58 },
    insights: { precipLabel: 'Torrt idag', precipMetric: '', windDir: 'SO', windSpeed: 4, daylight: 'Dagsljus 07:01–18:58', uvLabel: 'UV måttligt', uvValue: '4.2' },
    hourlyHint: 'Behagligt och mestadels soligt.',
    hourly: [['Nu',16,'Soligt',0.0,4,'sun'],['13',16,'Soligt',0.0,4,'sun'],['14',17,'Soligt',0.0,4,'sun'],['15',17,'Soligt',0.0,4,'sun'],['16',18,'Klart',0.0,4,'sun'],['17',17,'Klart',0.0,4,'sun'],['18',15,'Klart',0.0,3,'clear-night'],['19',14,'Klart',0.0,3,'clear-night'],['20',13,'Klart',0.0,3,'clear-night'],['21',13,'Klart',0.0,3,'clear-night'],['22',12,'Klart',0.0,3,'clear-night'],['23',12,'Klart',0.0,3,'clear-night'],['00',11,'Klart',0.0,2,'clear-night'],['01',11,'Klart',0.0,2,'clear-night'],['02',11,'Klart',0.0,2,'clear-night'],['03',10,'Klart',0.0,2,'clear-night'],['04',10,'Klart',0.0,2,'clear-night'],['05',10,'Klart',0.0,2,'clear-night']],
    uvSummary: 'UV når måttliga nivåer på eftermiddagen.', uv: [['06',0],['09',1.2],['12',3.4],['13',4.2],['15',3.1],['18',0.7],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','L','-'],['Bok','-','-','-','-'],['Ek','M','M','M','M'],['Gräs','M','M','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Soligt','sun','18° / 11°','0 mm','4 m/s'],['Imorgon','Klart','sun','18° / 12°','0 mm','4 m/s'],['Tis','Mulet','cloud','17° / 12°','0 mm','4 m/s'],['Ons','Klart','sun','18° / 12°','0 mm','3 m/s'],['Tors','Växlande molnighet','cloud','17° / 12°','0 mm','4 m/s'],['Fre','Lätt regn','rain','16° / 11°','1 mm','5 m/s'],['Lör','Klart','sun','18° / 12°','0 mm','4 m/s'],['Sön','Klart','sun','18° / 12°','0 mm','4 m/s'],['Mån','Växlande molnighet','cloud','17° / 12°','0 mm','4 m/s'],['Tis','Klart','sun','18° / 11°','0 mm','3 m/s']]
  },
  'new-york': {
    name: 'New York',
    now: { temp: 9, weather: 'Klart', feels: 6, high: 11, low: 3, humidity: 55 },
    insights: { precipLabel: 'Torrt idag', precipMetric: '', windDir: 'NV', windSpeed: 7, daylight: 'Dagsljus 07:07–19:04', uvLabel: 'UV måttligt', uvValue: '3.0' },
    hourlyHint: 'Kyligt men klart större delen av dagen.',
    hourly: [['Nu',9,'Klart',0.0,7,'sun'],['13',9,'Klart',0.0,7,'sun'],['14',10,'Klart',0.0,7,'sun'],['15',10,'Soligt',0.0,7,'sun'],['16',11,'Soligt',0.0,6,'sun'],['17',10,'Klart',0.0,6,'sun'],['18',8,'Klart',0.0,5,'clear-night'],['19',7,'Klart',0.0,5,'clear-night'],['20',6,'Klart',0.0,4,'clear-night'],['21',6,'Klart',0.0,4,'clear-night'],['22',5,'Klart',0.0,4,'clear-night'],['23',5,'Klart',0.0,4,'clear-night'],['00',4,'Klart',0.0,4,'clear-night'],['01',4,'Klart',0.0,4,'clear-night'],['02',4,'Klart',0.0,4,'clear-night'],['03',3,'Klart',0.0,4,'clear-night'],['04',3,'Klart',0.0,4,'clear-night'],['05',3,'Klart',0.0,4,'clear-night']],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.', uv: [['06',0],['09',0.9],['12',2.4],['13',3.0],['15',2.2],['18',0.5],['21',0]],
    pollen: [['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']],
    daily: [['Idag','Klart','sun','11° / 3°','0 mm','7 m/s'],['Imorgon','Klart','sun','12° / 4°','0 mm','6 m/s'],['Tis','Mulet','cloud','11° / 5°','0 mm','6 m/s'],['Ons','Klart','sun','12° / 5°','0 mm','5 m/s'],['Tors','Mulet','cloud','10° / 5°','1 mm','6 m/s'],['Fre','Lätt regn','rain','9° / 4°','2 mm','7 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','6 m/s'],['Sön','Klart','sun','11° / 4°','0 mm','5 m/s'],['Mån','Mulet','cloud','10° / 5°','1 mm','6 m/s'],['Tis','Klart','sun','11° / 4°','0 mm','5 m/s']]
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

const POLLEN_ROW_ORDER = ['Al', 'Hassel', 'Alm', 'Björk', 'Bok', 'Ek', 'Gräs', 'Gråbo', 'Ambrosia', 'Sälg/vide'];
const POLLEN_LEVEL_CODES = { 0: '-', 1: 'L', 2: 'M', 3: 'H', 4: 'MH' };
const POLLEN_LEVEL_TEXT = { '-': 'Inga halter', L: 'Låga halter', M: 'Måttliga halter', H: 'Höga halter', MH: 'Mycket höga halter' };
const POLLEN_SWEDEN_STATIONS = [
  { name: 'Borlänge', lat: 60.4858, lon: 15.4371 },
  { name: 'Bräkne-Hoby', lat: 56.2334, lon: 15.1166 },
  { name: 'Eskilstuna', lat: 59.3710, lon: 16.5098 },
  { name: 'Forshaga', lat: 59.5254, lon: 13.4813 },
  { name: 'Gävle', lat: 60.6749, lon: 17.1413 },
  { name: 'Göteborg', lat: 57.7089, lon: 11.9746 },
  { name: 'Hässleholm', lat: 56.1589, lon: 13.7668 },
  { name: 'Jönköping', lat: 57.7826, lon: 14.1618 },
  { name: 'Kiruna', lat: 67.8558, lon: 20.2253 },
  { name: 'Kristianstad', lat: 56.0294, lon: 14.1567 },
  { name: 'Ljusdal', lat: 61.8288, lon: 16.0915 },
  { name: 'Malmö', lat: 55.6050, lon: 13.0038 },
  { name: 'Norrköping', lat: 58.5877, lon: 16.1924 },
  { name: 'Nässjö', lat: 57.6531, lon: 14.6968 },
  { name: 'Piteå', lat: 65.3172, lon: 21.4794 },
  { name: 'Skövde', lat: 58.3913, lon: 13.8456 },
  { name: 'Stockholm', lat: 59.3293, lon: 18.0686 },
  { name: 'Storuman', lat: 65.0959, lon: 17.1173 },
  { name: 'Sundsvall', lat: 62.3908, lon: 17.3069 },
  { name: 'Umeå', lat: 63.8258, lon: 20.2630 },
  { name: 'Visby', lat: 57.6348, lon: 18.2948 },
  { name: 'Västervik', lat: 57.7584, lon: 16.6370 },
  { name: 'Östersund', lat: 63.1767, lon: 14.6361 }
];


const DAY_NAMES = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
const state = { slug: 'stockholm', selectedIndex: -1, results: [], places: [], placeIndex: new Map(), liveCache: new Map(), geocodeCache: new Map(), remoteSearchCache: new Map(), pollenForecastCache: new Map(), pollenMetaPromise: null, renderToken: 0, searchToken: 0, activePlace: null };

function slugify(value) {
  return String(value || '').toLowerCase().trim()
    .replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getInitialSlug() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/' ? 'stockholm' : slugify(path.split('/').pop());
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
  if (code === 'H' || code === 'MH') return 'high';
  return 'none';
}

function levelRank(code) {
  if (code === 'MH') return 4;
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
  const suffix = topRank >= 4 ? 'mycket högt' : topRank === 3 ? 'högt' : topRank === 2 ? 'måttligt' : 'lågt';
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


function normalizePlaceText(value) {
  return String(value || '').toLowerCase().trim();
}

function normalizePlaceFolded(value) {
  return normalizePlaceText(value)
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o');
}


function isSwedenPlace(place) {
  return String(place?.country || '').toUpperCase() === 'SE';
}

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

function safeObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
}

function getByPath(source, path) {
  return String(path || '').split('.').reduce((acc, key) => {
    if (acc == null) return undefined;
    if (Array.isArray(acc) && /^\d+$/.test(key)) return acc[Number(key)];
    return acc[key];
  }, source);
}

function firstDefined(source, paths = []) {
  for (const path of paths) {
    const value = getByPath(source, path);
    if (value !== undefined && value !== null && value !== '') return value;
  }
  return undefined;
}

function firstString(source, paths = []) {
  const value = firstDefined(source, paths);
  return value == null ? '' : String(value).trim();
}

function firstNumber(source, paths = []) {
  const value = firstDefined(source, paths);
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : undefined;
}

function kmBetween(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const r = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * r * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function plusDays(dateString, amount) {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() + amount);
  return date.toISOString().slice(0, 10);
}

function normalizePollenKey(value) {
  return normalizePlaceFolded(value)
    .replace(/[\/-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function canonicalPollenRowName(name) {
  const key = normalizePollenKey(name);
  if (!key) return '';
  if (key.includes('ambrosia') || key.includes('ragweed')) return 'Ambrosia';
  if (key.includes('grabo') || key.includes('mugwort') || key.includes('artemisia')) return 'Gråbo';
  if (key.includes('gras') || key.includes('grass') || key.includes('poaceae') || key.includes('graminales')) return 'Gräs';
  if (key.includes('bjork') || key.includes('birch') || key.includes('betula')) return 'Björk';
  if (key == 'al' || key.includes('alder') || key.includes('alnus')) return 'Al';
  if (key.includes('hassel') || key.includes('hazel') || key.includes('corylus')) return 'Hassel';
  if (key == 'alm' || key.includes('elm') || key.includes('ulmus')) return 'Alm';
  if (key == 'bok' || key.includes('beech') || key.includes('fagus')) return 'Bok';
  if (key == 'ek' || key.includes('oak') || key.includes('quercus')) return 'Ek';
  if (key.includes('salg') || key.includes('vide') || key.includes('willow') || key.includes('salix')) return 'Sälg/vide';
  return '';
}

function normalizePollenLevel(value, levelLookup = null) {
  if (value == null || value === '') return '-';
  if (levelLookup && levelLookup.has(String(value))) {
    return normalizePollenLevel(levelLookup.get(String(value)), null);
  }
  if (typeof value === 'number' || /^\d+$/.test(String(value))) {
    const numeric = Number(value);
    return POLLEN_LEVEL_CODES[numeric] || '-';
  }
  const raw = normalizePollenKey(value);
  if (!raw || raw === '-' || raw.includes('inga uppgifter') || raw.includes('ingen uppgift') || raw.includes('inga halter') || raw === 'none') return '-';
  if (raw.includes('mycket hoga') || raw.includes('very high')) return 'MH';
  if (raw.includes('mattliga hoga') || raw.includes('mattliga till hoga') || raw.includes('moderate high')) return 'H';
  if (raw.includes('laga mattliga') || raw.includes('low moderate')) return 'M';
  if (raw.includes('hoga') || raw == 'high') return 'H';
  if (raw.includes('mattliga') || raw == 'moderate') return 'M';
  if (raw.includes('laga') || raw == 'low') return 'L';
  return '-';
}

function extractCoordinates(source) {
  if (!source) return { lat: undefined, lon: undefined };
  const directLat = firstNumber(source, ['latitude', 'lat', 'location.latitude', 'geometry.location.lat']);
  const directLon = firstNumber(source, ['longitude', 'lon', 'lng', 'location.longitude', 'geometry.location.lng']);
  if (Number.isFinite(directLat) && Number.isFinite(directLon)) return { lat: directLat, lon: directLon };

  const coords = firstDefined(source, ['coordinates', 'geometry.coordinates', 'location.coordinates']);
  if (Array.isArray(coords) && coords.length >= 2) {
    const [maybeLon, maybeLat] = coords;
    const lat = Number(maybeLat);
    const lon = Number(maybeLon);
    if (Number.isFinite(lat) && Number.isFinite(lon)) return { lat, lon };
  }
  return { lat: undefined, lon: undefined };
}

function extractItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data?.items)) return payload.data.items;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

function emptyPollenRows() {
  return POLLEN_ROW_ORDER.map((type) => [type, '-', '-', '-', '-']);
}

function stationSeedByName(name) {
  const key = normalizePollenKey(name);
  return POLLEN_SWEDEN_STATIONS.find((station) => normalizePollenKey(station.name) === key) || null;
}

function normalizePollenRegions(items) {
  return items.map((item) => {
    const name = firstString(item, ['name', 'display_name', 'displayName', 'label', 'title']);
    const id = firstString(item, ['id', 'uuid', 'region_id', 'regionId']);
    const coords = extractCoordinates(item);
    const seed = stationSeedByName(name);
    return {
      id,
      name,
      lat: Number.isFinite(coords.lat) ? coords.lat : seed?.lat,
      lon: Number.isFinite(coords.lon) ? coords.lon : seed?.lon
    };
  }).filter((region) => region.id && region.name);
}

function normalizePollenTypes(items) {
  const map = new Map();
  items.forEach((item) => {
    const id = firstString(item, ['id', 'uuid', 'pollen_type_id', 'pollenTypeId']);
    const label = firstString(item, ['name', 'display_name', 'displayName', 'label', 'code', 'latin_name', 'latinName']);
    if (id && label) map.set(id, label);
  });
  return map;
}

function normalizePollenLevelDefinitions(items) {
  const map = new Map();
  items.forEach((item) => {
    const id = firstString(item, ['id', 'uuid', 'level_definition_id', 'levelDefinitionId']);
    const numeric = firstDefined(item, ['level', 'value', 'code']);
    const label = firstString(item, ['name', 'display_name', 'displayName', 'label', 'description']);
    if (!id) return;
    if (numeric !== undefined && numeric !== null && numeric !== '') map.set(id, numeric);
    else if (label) map.set(id, label);
  });
  return map;
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
  return response.json();
}

async function fetchPollenMetadata() {
  if (state.pollenMetaPromise) return state.pollenMetaPromise;
  state.pollenMetaPromise = (async () => {
    const [regionsPayload, pollenTypesPayload, levelDefinitionsPayload] = await Promise.all([
      fetchJson('https://api.pollenrapporten.se/v1/regions?offset=0&limit=100', { cache: 'force-cache' }),
      fetchJson('https://api.pollenrapporten.se/v1/pollen-types?offset=0&limit=100', { cache: 'force-cache' }),
      fetchJson('https://api.pollenrapporten.se/v1/pollen-level-definitions?offset=0&limit=100', { cache: 'force-cache' })
    ]);

    return {
      regions: normalizePollenRegions(extractItems(regionsPayload)),
      pollenTypes: normalizePollenTypes(extractItems(pollenTypesPayload)),
      levelDefinitions: normalizePollenLevelDefinitions(extractItems(levelDefinitionsPayload))
    };
  })().catch((error) => {
    state.pollenMetaPromise = null;
    throw error;
  });
  return state.pollenMetaPromise;
}

function resolveNearestPollenRegion(place, regions) {
  const names = [place.name, place.parent_name, place.municipality, place.county, place.region].filter(Boolean).map(normalizePollenKey);
  const exact = regions.find((region) => names.includes(normalizePollenKey(region.name)));
  if (exact) return exact;

  const lat = Number(place.resolved_lat ?? place.lat);
  const lon = Number(place.resolved_lon ?? place.lon);
  const candidates = regions.filter((region) => Number.isFinite(region.lat) && Number.isFinite(region.lon));
  if (Number.isFinite(lat) && Number.isFinite(lon) && candidates.length) {
    return candidates
      .map((region) => ({ region, distance: kmBetween(lat, lon, region.lat, region.lon) }))
      .sort((a, b) => a.distance - b.distance)[0].region;
  }
  return regions[0] || null;
}

function extractPollenSummary(item) {
  return firstString(item, ['summary', 'description', 'text', 'message', 'forecast_text', 'forecastText']);
}

function normalizeForecastEntries(container) {
  if (Array.isArray(container)) return container;
  if (safeObject(container)) {
    return Object.entries(container).map(([key, value]) => {
      if (safeObject(value)) return { pollenKey: key, ...value };
      return { pollenKey: key, level: value };
    });
  }
  return [];
}

function coerceDateOnly(value) {
  if (!value) return '';
  if (typeof value === 'string') return value.slice(0, 10);
  if (safeObject(value) && Number.isFinite(value.year) && Number.isFinite(value.month) && Number.isFinite(value.day)) {
    const mm = String(value.month).padStart(2, '0');
    const dd = String(value.day).padStart(2, '0');
    return `${value.year}-${mm}-${dd}`;
  }
  return '';
}

function parsePollenForecastPayload(payload, meta, regionName, startDate) {
  const items = extractItems(payload);
  const dayOrder = [0, 1, 2, 3].map((offset) => plusDays(startDate, offset));
  const buckets = new Map(dayOrder.map((date) => [date, new Map()]));
  let summary = '';

  const registerEntry = (entry, fallbackDate = '') => {
    const pollenId = firstString(entry, ['pollenId', 'pollen_id', 'pollenTypeId', 'pollen_type_id', 'pollenKey', 'typeId', 'type_id']);
    const rawName = firstString(entry, ['name', 'label', 'pollenName', 'pollen_name', 'type', 'code']) || meta.pollenTypes.get(pollenId) || pollenId;
    const rowName = canonicalPollenRowName(rawName);
    if (!rowName) return;

    const levelValue = firstDefined(entry, ['level', 'level_id', 'levelId', 'pollenLevel', 'pollen_level', 'value', 'category', 'description'])
      ?? firstDefined(entry, ['level_definition_id', 'levelDefinitionId']);
    const code = normalizePollenLevel(levelValue, meta.levelDefinitions);
    const dateKey = coerceDateOnly(firstDefined(entry, ['date', 'forecast_date', 'forecastDate', 'valid_date', 'validDate', 'day'])) || fallbackDate || dayOrder[0];
    if (!buckets.has(dateKey)) return;
    const rowBucket = buckets.get(dateKey);
    const existing = rowBucket.get(rowName);
    if (!existing || levelRank(code) > levelRank(existing)) rowBucket.set(rowName, code);
  };

  items.forEach((item) => {
    summary ||= extractPollenSummary(item);
    const itemDate = coerceDateOnly(firstDefined(item, ['date', 'forecast_date', 'forecastDate', 'start_date', 'startDate', 'valid_date', 'validDate', 'day']));

    const containers = [
      firstDefined(item, ['values', 'levels', 'entries', 'data', 'pollen_levels', 'pollenLevels']),
      firstDefined(item, ['current_values', 'currentValues'])
    ].filter((value) => value !== undefined);

    let parsedAny = false;
    for (const container of containers) {
      const entries = normalizeForecastEntries(container);
      if (entries.length) {
        parsedAny = true;
        entries.forEach((entry) => registerEntry(entry, itemDate));
      }
    }

    if (!parsedAny && safeObject(item)) {
      registerEntry(item, itemDate);
    }
  });

  const rows = POLLEN_ROW_ORDER.map((type) => {
    const values = dayOrder.map((date) => buckets.get(date)?.get(type) || '-');
    return [type, ...values];
  });

  return {
    rows,
    summary,
    station: regionName,
    dates: dayOrder,
    source: 'pollenrapporten'
  };
}

async function fetchSwedenPollen(place) {
  const startDate = new Date().toISOString().slice(0, 10);
  const cacheKey = `${place.id || place.name}:sweden-pollen:${startDate}`;
  if (state.pollenForecastCache.has(cacheKey)) return state.pollenForecastCache.get(cacheKey);

  const meta = await fetchPollenMetadata();
  const region = resolveNearestPollenRegion(place, meta.regions);
  if (!region?.id) throw new Error('Ingen pollenregion hittades');

  const endDate = plusDays(startDate, 3);
  const urls = [
    `https://api.pollenrapporten.se/v1/forecasts?region_id=${encodeURIComponent(region.id)}&start_date=${startDate}&end_date=${endDate}&current=true`,
    `https://api.pollenrapporten.se/v1/forecasts?region_id=${encodeURIComponent(region.id)}&start_date=${startDate}&end_date=${endDate}`,
    `https://api.pollenrapporten.se/v1/forecasts?region_id=${encodeURIComponent(region.id)}&current=true`
  ];

  let payload = null;
  let lastError = null;
  for (const url of urls) {
    try {
      const candidate = await fetchJson(url, { cache: 'no-store' });
      if (extractItems(candidate).length) {
        payload = candidate;
        break;
      }
    } catch (error) {
      lastError = error;
    }
  }

  if (!payload) {
    if (lastError) throw lastError;
    throw new Error('Ingen svensk pollenprognos tillgänglig');
  }

  const parsed = parsePollenForecastPayload(payload, meta, region.name, startDate);
  state.pollenForecastCache.set(cacheKey, parsed);
  return parsed;
}


function getPlaceSlug(place) {
  if (!place) return 'stockholm';
  const isLocalArea = !!place.parent_name || place.type === 'district' || place.type === 'locality';
  if (isLocalArea) return slugify(place.id || `${place.name}-${place.parent_name || place.municipality || place.country || ''}`);
  return slugify(place.route_slug || place.name || place.id || 'stockholm');
}

function buildPlaceIndex(places) {
  const index = new Map();
  places.forEach((place) => {
    const urlSlug = getPlaceSlug(place);
    place.url_slug = urlSlug;
    if (!index.has(urlSlug)) index.set(urlSlug, place);
    const routeSlug = slugify(place.route_slug || '');
    if (routeSlug && !index.has(routeSlug)) index.set(routeSlug, place);
    const nameSlug = slugify(place.name || '');
    if (nameSlug && !index.has(nameSlug)) index.set(nameSlug, place);
  });
  return index;
}

function resolvePlaceFromSlug(slug) {
  return state.placeIndex.get(slug) || state.placeIndex.get('stockholm') || state.places[0] || null;
}

function prettyRegion(result) {
  return result.admin1 || result.admin2 || result.admin3 || '';
}

function makeRemotePlaceFromGeocode(result) {
  const country = String(result.country_code || '').toUpperCase();
  const region = prettyRegion(result);
  const name = result.name || result.ascii_name || '';
  const label = [name, [region, result.country].filter(Boolean).join(', ')].filter(Boolean).join(' · ');
  return {
    id: `remote-${country || 'xx'}-${slugify(name)}-${slugify(region) || 'region'}`,
    canonical_id: `remote-${country || 'xx'}-${slugify(name)}-${slugify(region) || 'region'}`,
    name,
    region,
    county: region,
    country,
    country_name_sv: result.country || '',
    type: 'abroad_city',
    label,
    aliases: [result.ascii_name].filter(Boolean),
    tags: ['abroad', 'remote'],
    search_priority: Number.isFinite(result.population) ? Math.min(40, Math.round(result.population / 500000)) : 0,
    search_hidden: false,
    lat: Number(result.latitude),
    lon: Number(result.longitude),
    route_slug: slugify(name)
  };
}

async function searchRemotePlaces(query, options = {}) {
  const limit = Number.isFinite(options.limit) ? options.limit : 6;
  const raw = String(query || '').trim();
  if (raw.length < 2) return [];

  const cacheKey = normalizePlaceFolded(raw);
  if (state.remoteSearchCache.has(cacheKey)) return state.remoteSearchCache.get(cacheKey);

  try {
    const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
    url.searchParams.set('name', raw);
    url.searchParams.set('count', String(Math.max(limit, 8)));
    url.searchParams.set('language', 'sv');
    url.searchParams.set('format', 'json');

    const response = await fetch(url.toString(), { cache: 'force-cache' });
    if (!response.ok) throw new Error(`Remote search failed: ${response.status}`);

    const payload = await response.json();
    const results = Array.isArray(payload.results) ? payload.results : [];
    const qStrict = normalizePlaceText(raw);
    const qFolded = normalizePlaceFolded(raw);

    const filtered = results
      .filter((result) => {
        const feature = String(result.feature_code || '');
        return !feature || feature.startsWith('PPL') || feature === 'ADM1' || feature === 'ADM2';
      })
      .map((result) => {
        const name = normalizePlaceText(result.name || result.ascii_name || '');
        const ascii = normalizePlaceFolded(result.ascii_name || result.name || '');
        let score = 0;
        if (name === qStrict || ascii === qFolded) score += 20;
        else if (name.startsWith(qStrict) || ascii.startsWith(qFolded)) score += 12;
        score += Math.min(10, Math.round((Number(result.population) || 0) / 1000000));
        if (String(result.feature_code || '') === 'PPLC') score += 6;
        return { result, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ result }) => makeRemotePlaceFromGeocode(result));

    state.remoteSearchCache.set(cacheKey, filtered);
    return filtered;
  } catch (error) {
    console.warn('Remote place search failed', error);
    state.remoteSearchCache.set(cacheKey, []);
    return [];
  }
}


function compassDirection(degrees) {
  if (!Number.isFinite(degrees)) return '';
  const dirs = ['N', 'NO', 'O', 'SO', 'S', 'SV', 'V', 'NV'];
  const index = Math.round((((degrees % 360) + 360) % 360) / 45) % 8;
  return dirs[index];
}

function formatClock(isoString) {
  if (!isoString || !String(isoString).includes('T')) return '–';
  return String(isoString).split('T')[1].slice(0, 5);
}

function formatDaylight(sunriseIso, sunsetIso) {
  return `Sol ${formatClock(sunriseIso)}–${formatClock(sunsetIso)}`;
}

function dayLabelFromDate(dateString, index) {
  if (index === 0) return 'Idag';
  if (index === 1) return 'Imorgon';
  const date = new Date(`${dateString}T12:00:00`);
  return DAY_NAMES[date.getDay()];
}

function weatherPresentation(code, isDay = 1) {
  const c = Number(code);
  if (c === 0) return { label: isDay ? 'Soligt' : 'Klart', icon: isDay ? 'sun' : 'clear-night' };
  if (c === 1) return { label: isDay ? 'Mest klart' : 'Mest klart', icon: isDay ? 'sun' : 'clear-night' };
  if (c === 2) return { label: 'Växlande molnighet', icon: 'cloud' };
  if (c === 3) return { label: 'Mulet', icon: 'cloud' };
  if (c === 45 || c === 48) return { label: 'Dimma', icon: 'cloud' };
  if ([51, 53, 55, 56, 57].includes(c)) return { label: 'Lätt regn', icon: 'rain' };
  if ([61, 63, 66, 80, 81].includes(c)) return { label: 'Regn', icon: 'rain' };
  if ([65, 67, 82].includes(c)) return { label: 'Kraftigt regn', icon: 'rain' };
  if ([71, 73, 77, 85].includes(c)) return { label: 'Snö', icon: 'snow' };
  if ([75, 86].includes(c)) return { label: 'Kraftig snö', icon: 'snow' };
  if ([95, 96, 99].includes(c)) return { label: 'Åska', icon: 'rain' };
  return { label: 'Mulet', icon: 'cloud' };
}

function pollenCodeFromValue(type, value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric < 1) return '-';
  const thresholds = {
    'Al': [10, 100],
    'Björk': [10, 100],
    'Gräs': [3, 30],
    'Gråbo': [5, 20],
    'Ambrosia': [5, 20]
  };
  const [lowMax, moderateMax] = thresholds[type] || [10, 100];
  if (numeric <= lowMax) return 'L';
  if (numeric <= moderateMax) return 'M';
  return 'H';
}

function buildPollenRows(airData) {
  if (!airData || !airData.hourly || !Array.isArray(airData.hourly.time)) {
    return emptyPollenRows();
  }

  const hourly = airData.hourly;
  const dateBuckets = new Map();
  hourly.time.forEach((time, index) => {
    const dateKey = String(time).slice(0, 10);
    if (!dateBuckets.has(dateKey)) {
      dateBuckets.set(dateKey, {
        alder_pollen: 0,
        birch_pollen: 0,
        grass_pollen: 0,
        mugwort_pollen: 0,
        ragweed_pollen: 0
      });
    }
    const bucket = dateBuckets.get(dateKey);
    ['alder_pollen', 'birch_pollen', 'grass_pollen', 'mugwort_pollen', 'ragweed_pollen'].forEach((key) => {
      const series = hourly[key] || [];
      const value = Number(series[index]);
      if (Number.isFinite(value) && value > bucket[key]) bucket[key] = value;
    });
  });

  const days = [...dateBuckets.values()].slice(0, 4);
  while (days.length < 4) {
    days.push({ alder_pollen: 0, birch_pollen: 0, grass_pollen: 0, mugwort_pollen: 0, ragweed_pollen: 0 });
  }

  return [
    ['Al', ...days.map(day => pollenCodeFromValue('Al', day.alder_pollen))],
    ['Hassel', '-', '-', '-', '-'],
    ['Alm', '-', '-', '-', '-'],
    ['Björk', ...days.map(day => pollenCodeFromValue('Björk', day.birch_pollen))],
    ['Bok', '-', '-', '-', '-'],
    ['Ek', '-', '-', '-', '-'],
    ['Gräs', ...days.map(day => pollenCodeFromValue('Gräs', day.grass_pollen))],
    ['Gråbo', ...days.map(day => pollenCodeFromValue('Gråbo', day.mugwort_pollen))],
    ['Ambrosia', ...days.map(day => pollenCodeFromValue('Ambrosia', day.ragweed_pollen))],
    ['Sälg/vide', '-', '-', '-', '-']
  ];
}

function buildUvPoints(weatherData) {
  const hourly = weatherData.hourly;
  const wanted = ['06', '09', '12', '15', '18', '21'];
  return wanted.map((label) => {
    const index = hourly.time.findIndex((time) => String(time).slice(11, 13) === label);
    const value = index >= 0 ? Number(hourly.uv_index[index]) || 0 : 0;
    return [label, Math.max(0, Math.round(value * 10) / 10)];
  });
}

function buildHourlyRows(weatherData) {
  const { current, hourly } = weatherData;
  const currentHour = String(current.time || '').slice(0, 13);
  let startIndex = hourly.time.findIndex((time) => String(time).slice(0, 13) === currentHour);
  if (startIndex < 0) {
    startIndex = hourly.time.findIndex((time) => String(time) >= String(current.time || ''));
  }
  if (startIndex < 0) startIndex = 0;

  const rows = [];
  const currentWeather = weatherPresentation(current.weather_code, current.is_day);
  rows.push([
    'Nu',
    Math.round(Number(current.temperature_2m) || 0),
    currentWeather.label,
    Math.max(0, Number(hourly.precipitation[startIndex]) || 0),
    Math.round(Number(current.wind_speed_10m) || 0),
    currentWeather.icon
  ]);

  for (let offset = 1; offset < 18 && startIndex + offset < hourly.time.length; offset += 1) {
    const index = startIndex + offset;
    const weather = weatherPresentation(hourly.weather_code[index], hourly.is_day[index]);
    rows.push([
      String(hourly.time[index]).slice(11, 13),
      Math.round(Number(hourly.temperature_2m[index]) || 0),
      weather.label,
      Math.max(0, Number(hourly.precipitation[index]) || 0),
      Math.round(Number(hourly.wind_speed_10m[index]) || 0),
      weather.icon
    ]);
  }

  return rows;
}

function buildDailyRows(weatherData) {
  const daily = weatherData.daily;
  const rows = [];
  for (let index = 0; index < Math.min(10, daily.time.length); index += 1) {
    const weather = weatherPresentation(daily.weather_code[index], 1);
    rows.push([
      dayLabelFromDate(daily.time[index], index),
      weather.label,
      weather.icon,
      `${Math.round(Number(daily.temperature_2m_max[index]) || 0)}° / ${Math.round(Number(daily.temperature_2m_min[index]) || 0)}°`,
      `${Math.round((Number(daily.precipitation_sum[index]) || 0) * 10) / 10} mm`,
      `${Math.round(Number(daily.wind_speed_10m_max[index]) || 0)} m/s`
    ]);
  }
  return rows;
}

function createLiveData(place, weatherData, airData, pollenBundle = null) {
  const current = weatherData.current;
  const todayWeather = weatherPresentation(current.weather_code, current.is_day);
  const todayHigh = Math.round(Number(weatherData.daily.temperature_2m_max[0]) || 0);
  const todayLow = Math.round(Number(weatherData.daily.temperature_2m_min[0]) || 0);
  const dailyUvMax = Math.max(0, Math.round((Number(weatherData.daily.uv_index_max[0]) || 0) * 10) / 10);
  const hourly = buildHourlyRows(weatherData);
  const uv = buildUvPoints(weatherData);
  const pollen = pollenBundle?.rows || buildPollenRows(airData);
  const data = {
    name: place.name,
    now: {
      temp: Math.round(Number(current.temperature_2m) || 0),
      weather: todayWeather.label,
      feels: Math.round(Number(current.apparent_temperature) || 0),
      high: todayHigh,
      low: todayLow,
      humidity: Math.round(Number(current.relative_humidity_2m) || 0)
    },
    insights: {
      precipLabel: '',
      precipMetric: `${Math.round((Number(weatherData.daily.precipitation_sum[0]) || 0) * 10) / 10} mm`,
      windDir: compassDirection(Number(current.wind_direction_10m) || Number(weatherData.daily.wind_direction_10m_dominant?.[0]) || 0),
      windSpeed: Math.round(Number(current.wind_speed_10m) || 0),
      daylight: formatDaylight(weatherData.daily.sunrise[0], weatherData.daily.sunset[0]),
      uvLabel: dailyUvMax >= 6 ? 'UV högt' : dailyUvMax >= 3 ? 'UV måttligt' : 'UV lågt',
      uvValue: dailyUvMax.toFixed(1)
    },
    hourlyHint: '',
    hourly,
    uvSummary: '',
    uv,
    pollen,
    pollenSummaryText: pollenBundle?.summary || '',
    pollenStation: pollenBundle?.station || '',
    pollenSource: pollenBundle?.source || (isSwedenPlace(place) ? 'open-meteo-fallback' : 'open-meteo'),
    daily: buildDailyRows(weatherData)
  };

  data.hourlyHint = getMeaningfulPrecipSummary(data)
    || getWindSummary(data)
    || getChangeSummary(data)
    || getCalmSummary(data);
  data.uvSummary = getUvSupportText(data.uv);
  return data;
}

async function geocodePlace(place) {
  if (Number.isFinite(place.lat) && Number.isFinite(place.lon)) {
    return { ...place, resolved_lat: place.lat, resolved_lon: place.lon };
  }

  const cacheKey = place.id || `${place.name}-${place.country || ''}`;
  if (state.geocodeCache.has(cacheKey)) return state.geocodeCache.get(cacheKey);

  const query = [place.name, place.parent_name || place.region || '', place.country_name_sv || ''].filter(Boolean).join(' ');
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', query || place.name);
  url.searchParams.set('count', '10');
  url.searchParams.set('language', 'sv');
  if (place.country) url.searchParams.set('countryCode', place.country);

  const response = await fetch(url.toString(), { cache: 'force-cache' });
  if (!response.ok) throw new Error(`Geocoding failed: ${response.status}`);
  const payload = await response.json();
  const results = Array.isArray(payload.results) ? payload.results : [];
  if (!results.length) throw new Error('Ingen koordinatträff');

  const parentNeedle = normalizePlaceFolded(place.parent_name || place.region || place.municipality || '');
  const nameNeedle = normalizePlaceFolded(place.name);

  const scored = results.map((result) => {
    let score = 0;
    const resultName = normalizePlaceFolded(result.name);
    if (resultName === nameNeedle) score += 10;
    else if (resultName.startsWith(nameNeedle)) score += 6;

    const adminText = normalizePlaceFolded([
      result.admin1,
      result.admin2,
      result.admin3,
      result.admin4,
      result.country
    ].filter(Boolean).join(' '));

    if (parentNeedle && adminText.includes(parentNeedle)) score += 8;
    if (place.country && result.country_code === place.country) score += 4;
    if (Number.isFinite(result.population)) score += Math.min(3, result.population / 500000);
    return { result, score };
  }).sort((a, b) => b.score - a.score);

  const chosen = scored[0].result;
  const resolved = {
    ...place,
    resolved_lat: chosen.latitude,
    resolved_lon: chosen.longitude,
    resolved_timezone: chosen.timezone || undefined,
    geocoded_name: chosen.name
  };
  state.geocodeCache.set(cacheKey, resolved);
  return resolved;
}

async function fetchLiveData(place) {
  const resolved = await geocodePlace(place);
  const cacheKey = `${resolved.id || resolved.name}:${resolved.resolved_lat}:${resolved.resolved_lon}`;
  if (state.liveCache.has(cacheKey)) return state.liveCache.get(cacheKey);

  const weatherUrl = new URL('https://api.open-meteo.com/v1/forecast');
  weatherUrl.searchParams.set('latitude', String(resolved.resolved_lat));
  weatherUrl.searchParams.set('longitude', String(resolved.resolved_lon));
  weatherUrl.searchParams.set('timezone', 'auto');
  weatherUrl.searchParams.set('forecast_days', '10');
  weatherUrl.searchParams.set('wind_speed_unit', 'ms');
  weatherUrl.searchParams.set('current', 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,is_day');
  weatherUrl.searchParams.set('hourly', 'temperature_2m,weather_code,precipitation,wind_speed_10m,uv_index,is_day');
  weatherUrl.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant,sunrise,sunset,uv_index_max');

  const airUrl = new URL('https://air-quality-api.open-meteo.com/v1/air-quality');
  airUrl.searchParams.set('latitude', String(resolved.resolved_lat));
  airUrl.searchParams.set('longitude', String(resolved.resolved_lon));
  airUrl.searchParams.set('timezone', 'auto');
  airUrl.searchParams.set('forecast_days', '4');
  airUrl.searchParams.set('hourly', 'alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,ragweed_pollen');

  const [weatherResponse, airResult, swedenPollen] = await Promise.all([
    fetch(weatherUrl.toString(), { cache: 'no-store' }),
    fetch(airUrl.toString(), { cache: 'no-store' }).then(async (response) => response.ok ? response.json() : null).catch(() => null),
    isSwedenPlace(resolved) ? fetchSwedenPollen(resolved).catch((error) => {
      console.warn('Swedish pollen fetch failed, falling back to Open-Meteo', error);
      return null;
    }) : Promise.resolve(null)
  ]);

  if (!weatherResponse.ok) throw new Error(`Weather fetch failed: ${weatherResponse.status}`);
  const weatherData = await weatherResponse.json();
  const data = createLiveData(resolved, weatherData, airResult, swedenPollen);
  const cached = { place: resolved, data };
  state.liveCache.set(cacheKey, cached);
  return cached;
}

function renderDataForPlace(place, data, urlSlug, updateHistory = false) {
  state.slug = urlSlug;
  state.activePlace = place;
  document.title = `Kly – ${data.name} – vädret, helt enkelt`;

  const day2 = data.daily?.[1]?.[0] || 'Imorgon';
  const day3 = data.daily?.[2]?.[0] || 'Tis';
  const day4 = data.daily?.[3]?.[0] || 'Ons';
  const heroLead = getHeroLead(data);
  const pollenSummary = data.pollenSummaryText || getPollenDetailSummary(data.pollen);
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
  setHtml('pillDaylight', buildPill(data.insights.daylight));

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
    const path = urlSlug === 'stockholm' ? '/' : `/${urlSlug}`;
    history.pushState({ slug: urlSlug }, '', path);
  }
}

function renderLoading(place) {
  const name = place?.name || 'Platsen';
  setText('placeName', name);
  setText('heroLead', 'Hämtar liveprognos…');
  setText('weatherNow', 'Laddar…');
  setText('hourlyHint', 'Hämtar timprognos…');
  setText('pollenSummary', 'Hämtar pollen…');
  setText('uvSummary', 'Hämtar UV…');
}

async function renderPlace(place, updateHistory = false) {
  if (!place) return;
  const token = ++state.renderToken;
  const urlSlug = place.url_slug || getPlaceSlug(place);
  renderLoading(place);

  try {
    const { place: resolvedPlace, data } = await fetchLiveData(place);
    if (token !== state.renderToken) return;
    renderDataForPlace(resolvedPlace, data, urlSlug, updateHistory);
  } catch (error) {
    console.error(error);
    if (token !== state.renderToken) return;
    const fallback = DEMO[urlSlug] || DEMO[place.route_slug] || DEMO.stockholm;
    renderDataForPlace(place, fallback, urlSlug, updateHistory);
    setText('heroLead', 'Liveprognosen kunde inte hämtas just nu. Visar reservdata.');
  }
}

async function initSearch() {
  const input = document.getElementById('searchInput');
  const resultsEl = document.getElementById('searchResults');
  await window.KlySwedenSearch.loadPlaces([
    './resources/sweden-places.json',
    './resources/sweden-local-areas-seed.json',
    './resources/sweden-local-areas-backlog.json',
    './resources/places-abroad-seed.json'
  ]);
  state.places = window.KlySwedenSearch.getPlaces().filter((place) => !place.search_hidden);
  state.placeIndex = buildPlaceIndex(state.places);

  function closeResults() {
    resultsEl.classList.remove('open');
    state.selectedIndex = -1;
  }

  function choose(place) {
    input.value = place.name;
    renderPlace(place, true);
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

  input.addEventListener('input', async () => {
    state.selectedIndex = -1;
    const query = input.value;
    const localList = window.KlySwedenSearch.search(query, { limit: 8, minChars: 2 });
    const requestToken = ++state.searchToken;

    if (localList.length) {
      renderResults(localList);
      return;
    }

    if (query.trim().length < 2) {
      renderResults([]);
      return;
    }

    const remoteList = await searchRemotePlaces(query, { limit: 8 });
    if (requestToken !== state.searchToken) return;

    const merged = remoteList.filter((place, index, arr) =>
      index === arr.findIndex((candidate) => normalizePlaceFolded(candidate.label) === normalizePlaceFolded(place.label))
    );

    merged.forEach((place) => {
      if (!state.placeIndex.has(place.url_slug || '')) {
        const urlSlug = getPlaceSlug(place);
        place.url_slug = urlSlug;
        state.placeIndex.set(urlSlug, place);
        state.placeIndex.set(slugify(place.name || ''), place);
      }
    });

    renderResults(merged);
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

  const initialPlace = resolvePlaceFromSlug(getInitialSlug());
  await renderPlace(initialPlace, false);
}

window.addEventListener('resize', updateStickyOffset);
window.addEventListener('popstate', () => {
  const nextPlace = resolvePlaceFromSlug(getInitialSlug());
  renderPlace(nextPlace, false);
});
window.addEventListener('DOMContentLoaded', async () => {
  updateStickyOffset();
  await initSearch();
});

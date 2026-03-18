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
    now: { temp: 5, weather: 'Mulet', feels: 2, high: 7, low: 0, humidity: 73 },
    insights: {
      precipLabel: 'Torrt till kvällen',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 6,
      daylight: 'Dagsljus 06:10–18:10',
      uvLabel: 'UV lågt',
      uvValue: '1.8'
    },
    hourlyHint: 'Molnigt större delen av dagen.',
    hourly: [
      ['Nu',5,'Mulet',0.0,6,'cloud'],['13',5,'Mulet',0.0,6,'cloud'],['14',6,'Mulet',0.0,6,'cloud'],['15',6,'Mulet',0.0,6,'cloud'],['16',6,'Lätt regn',0.2,6,'rain'],['17',5,'Lätt regn',0.2,6,'rain'],['18',4,'Mulet',0.1,5,'cloud'],['19',4,'Mulet',0.0,5,'cloud'],['20',3,'Mulet',0.0,4,'cloud'],['21',3,'Klart',0.0,4,'clear-night'],['22',2,'Klart',0.0,3,'clear-night'],['23',2,'Klart',0.0,3,'clear-night'],['00',1,'Klart',0.0,3,'clear-night'],['01',1,'Klart',0.0,3,'clear-night'],['02',1,'Klart',0.0,2,'clear-night'],['03',0,'Klart',0.0,2,'clear-night'],['04',0,'Klart',0.0,2,'clear-night'],['05',0,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.2],['13',1.8],['15',1.2],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','7° / 0°','0–1 mm','6 m/s'],['Imorgon','Klart','sun','8° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','9° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','8° / 2°','1 mm','5 m/s'],['Fre','Lätt regn','rain','7° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','6° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','7° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','8° / 0°','0 mm','3 m/s']
    ]
  },
  falun: {
    name: 'Falun',
    now: { temp: 3, weather: 'Klart', feels: 0, high: 5, low: -2, humidity: 67 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 4,
      daylight: 'Dagsljus 06:05–18:09',
      uvLabel: 'UV lågt',
      uvValue: '1.5'
    },
    hourlyHint: 'Klart och kyligt i kväll.',
    hourly: [
      ['Nu',3,'Klart',0.0,4,'sun'],['13',3,'Klart',0.0,4,'sun'],['14',4,'Klart',0.0,4,'sun'],['15',4,'Soligt',0.0,4,'sun'],['16',5,'Soligt',0.0,4,'sun'],['17',4,'Klart',0.0,3,'sun'],['18',2,'Klart',0.0,3,'clear-night'],['19',1,'Klart',0.0,3,'clear-night'],['20',0,'Klart',0.0,3,'clear-night'],['21',-1,'Klart',0.0,2,'clear-night'],['22',-1,'Klart',0.0,2,'clear-night'],['23',-2,'Klart',0.0,2,'clear-night'],['00',-2,'Klart',0.0,2,'clear-night'],['01',-3,'Klart',0.0,2,'clear-night'],['02',-3,'Klart',0.0,2,'clear-night'],['03',-3,'Klart',0.0,2,'clear-night'],['04',-4,'Klart',0.0,2,'clear-night'],['05',-4,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.3],['12',1.0],['13',1.5],['15',1.0],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','5° / -2°','0 mm','4 m/s'],['Imorgon','Klart','sun','6° / -3°','0 mm','3 m/s'],['Tis','Mulet','cloud','4° / -2°','0 mm','3 m/s'],['Ons','Klart','sun','6° / -3°','0 mm','2 m/s'],['Tors','Mulet','cloud','4° / -2°','0 mm','3 m/s'],['Fre','Lätt snö','snow','2° / -2°','1 mm','4 m/s'],['Lör','Mulet','cloud','3° / -3°','0 mm','3 m/s'],['Sön','Klart','sun','4° / -3°','0 mm','2 m/s'],['Mån','Mulet','cloud','3° / -2°','0 mm','3 m/s'],['Tis','Klart','sun','5° / -3°','0 mm','2 m/s']
    ]
  },
  lulea: {
    name: 'Luleå',
    now: { temp: -1, weather: 'Klart', feels: -6, high: 1, low: -8, humidity: 74 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'N',
      windSpeed: 7,
      daylight: 'Dagsljus 05:38–17:58',
      uvLabel: 'UV lågt',
      uvValue: '0.8'
    },
    hourlyHint: 'Klart och kallt i kväll.',
    hourly: [
      ['Nu',-1,'Klart',0.0,7,'sun'],['13',-1,'Klart',0.0,7,'sun'],['14',0,'Klart',0.0,7,'sun'],['15',0,'Klart',0.0,6,'sun'],['16',1,'Klart',0.0,6,'sun'],['17',0,'Klart',0.0,5,'sun'],['18',-2,'Klart',0.0,5,'clear-night'],['19',-3,'Klart',0.0,5,'clear-night'],['20',-4,'Klart',0.0,4,'clear-night'],['21',-5,'Klart',0.0,4,'clear-night'],['22',-6,'Klart',0.0,4,'clear-night'],['23',-6,'Klart',0.0,4,'clear-night'],['00',-7,'Klart',0.0,4,'clear-night'],['01',-7,'Klart',0.0,4,'clear-night'],['02',-8,'Klart',0.0,4,'clear-night'],['03',-8,'Klart',0.0,4,'clear-night'],['04',-8,'Klart',0.0,4,'clear-night'],['05',-9,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.2],['12',0.6],['13',0.8],['15',0.5],['18',0.1],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','1° / -8°','0 mm','7 m/s'],['Imorgon','Klart','sun','2° / -9°','0 mm','5 m/s'],['Tis','Mulet','cloud','0° / -8°','0 mm','4 m/s'],['Ons','Klart','sun','2° / -9°','0 mm','3 m/s'],['Tors','Snöbyar','snow','0° / -7°','1 mm','5 m/s'],['Fre','Mulet','cloud','1° / -6°','0 mm','4 m/s'],['Lör','Klart','sun','2° / -8°','0 mm','3 m/s'],['Sön','Snö','snow','0° / -5°','2 mm','6 m/s'],['Mån','Klart','sun','1° / -7°','0 mm','4 m/s'],['Tis','Mulet','cloud','0° / -6°','0 mm','4 m/s']
    ]
  },
  kiruna: {
    name: 'Kiruna',
    now: { temp: -3, weather: 'Klart', feels: -9, high: -1, low: -11, humidity: 76 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'N',
      windSpeed: 8,
      daylight: 'Dagsljus 05:17–17:45',
      uvLabel: 'UV lågt',
      uvValue: '0.5'
    },
    hourlyHint: 'Mycket kall kväll under klar himmel.',
    hourly: [
      ['Nu',-3,'Klart',0.0,8,'sun'],['13',-3,'Klart',0.0,8,'sun'],['14',-2,'Klart',0.0,8,'sun'],['15',-2,'Klart',0.0,7,'sun'],['16',-1,'Klart',0.0,7,'sun'],['17',-3,'Klart',0.0,6,'clear-night'],['18',-5,'Klart',0.0,6,'clear-night'],['19',-6,'Klart',0.0,6,'clear-night'],['20',-7,'Klart',0.0,5,'clear-night'],['21',-8,'Klart',0.0,5,'clear-night'],['22',-9,'Klart',0.0,5,'clear-night'],['23',-10,'Klart',0.0,5,'clear-night'],['00',-10,'Klart',0.0,5,'clear-night'],['01',-10,'Klart',0.0,5,'clear-night'],['02',-11,'Klart',0.0,5,'clear-night'],['03',-11,'Klart',0.0,5,'clear-night'],['04',-11,'Klart',0.0,5,'clear-night'],['05',-12,'Klart',0.0,5,'clear-night']
    ],
    uvSummary: 'UV är mycket lågt.',
    uv: [['06',0],['09',0.1],['12',0.4],['13',0.5],['15',0.3],['18',0.1],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','-1° / -11°','0 mm','8 m/s'],['Imorgon','Klart','sun','0° / -12°','0 mm','6 m/s'],['Tis','Mulet','cloud','-2° / -11°','0 mm','5 m/s'],['Ons','Klart','sun','-1° / -12°','0 mm','4 m/s'],['Tors','Snöbyar','snow','-3° / -10°','1 mm','6 m/s'],['Fre','Mulet','cloud','-2° / -9°','0 mm','5 m/s'],['Lör','Klart','sun','-1° / -11°','0 mm','4 m/s'],['Sön','Snö','snow','-3° / -8°','2 mm','7 m/s'],['Mån','Klart','sun','-2° / -10°','0 mm','5 m/s'],['Tis','Mulet','cloud','-3° / -9°','0 mm','5 m/s']
    ]
  },
  sundsvall: {
    name: 'Sundsvall',
    now: { temp: 2, weather: 'Mulet', feels: -1, high: 4, low: -3, humidity: 71 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 5,
      daylight: 'Dagsljus 05:56–18:02',
      uvLabel: 'UV lågt',
      uvValue: '1.1'
    },
    hourlyHint: 'Molnigt och kallt i kväll.',
    hourly: [
      ['Nu',2,'Mulet',0.0,5,'cloud'],['13',2,'Mulet',0.0,5,'cloud'],['14',3,'Mulet',0.0,5,'cloud'],['15',3,'Mulet',0.0,5,'cloud'],['16',4,'Mulet',0.0,5,'cloud'],['17',3,'Mulet',0.0,4,'cloud'],['18',1,'Mulet',0.0,4,'cloud'],['19',0,'Klart',0.0,4,'clear-night'],['20',-1,'Klart',0.0,3,'clear-night'],['21',-2,'Klart',0.0,3,'clear-night'],['22',-2,'Klart',0.0,3,'clear-night'],['23',-3,'Klart',0.0,3,'clear-night'],['00',-3,'Klart',0.0,3,'clear-night'],['01',-4,'Klart',0.0,3,'clear-night'],['02',-4,'Klart',0.0,3,'clear-night'],['03',-4,'Klart',0.0,3,'clear-night'],['04',-5,'Klart',0.0,3,'clear-night'],['05',-5,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.3],['12',0.8],['13',1.1],['15',0.7],['18',0.2],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','4° / -3°','0 mm','5 m/s'],['Imorgon','Klart','sun','5° / -4°','0 mm','4 m/s'],['Tis','Mulet','cloud','4° / -3°','0 mm','4 m/s'],['Ons','Klart','sun','5° / -4°','0 mm','3 m/s'],['Tors','Mulet','cloud','3° / -3°','0 mm','4 m/s'],['Fre','Lätt snö','snow','2° / -2°','1 mm','5 m/s'],['Lör','Mulet','cloud','3° / -3°','0 mm','4 m/s'],['Sön','Klart','sun','4° / -4°','0 mm','3 m/s'],['Mån','Mulet','cloud','3° / -3°','0 mm','4 m/s'],['Tis','Klart','sun','5° / -4°','0 mm','3 m/s']
    ]
  },
  uppsala: {
    name: 'Uppsala',
    now: { temp: 4, weather: 'Mulet', feels: 1, high: 6, low: 0, humidity: 71 },
    insights: {
      precipLabel: 'Torrt till kvällen',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 6,
      daylight: 'Dagsljus 06:09–18:09',
      uvLabel: 'UV lågt',
      uvValue: '1.7'
    },
    hourlyHint: 'Mulet större delen av eftermiddagen.',
    hourly: [
      ['Nu',4,'Mulet',0.0,6,'cloud'],['13',4,'Mulet',0.0,6,'cloud'],['14',5,'Mulet',0.0,6,'cloud'],['15',5,'Mulet',0.0,6,'cloud'],['16',6,'Lätt regn',0.1,6,'rain'],['17',5,'Lätt regn',0.2,6,'rain'],['18',4,'Mulet',0.1,5,'cloud'],['19',3,'Mulet',0.0,5,'cloud'],['20',3,'Mulet',0.0,4,'cloud'],['21',2,'Klart',0.0,4,'clear-night'],['22',1,'Klart',0.0,3,'clear-night'],['23',1,'Klart',0.0,3,'clear-night'],['00',0,'Klart',0.0,3,'clear-night'],['01',0,'Klart',0.0,3,'clear-night'],['02',0,'Klart',0.0,2,'clear-night'],['03',-1,'Klart',0.0,2,'clear-night'],['04',-1,'Klart',0.0,2,'clear-night'],['05',-1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.1],['13',1.7],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','6° / 0°','0–1 mm','6 m/s'],['Imorgon','Klart','sun','7° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','6° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','8° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','7° / 2°','1 mm','5 m/s'],['Fre','Lätt regn','rain','6° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','5° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','6° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','6° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','7° / 0°','0 mm','3 m/s']
    ]
  },
  visby: {
    name: 'Visby',
    now: { temp: 5, weather: 'Klart', feels: 2, high: 7, low: 2, humidity: 70 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'N',
      windSpeed: 7,
      daylight: 'Dagsljus 06:18–18:10',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Klart större delen av dagen.',
    hourly: [
      ['Nu',5,'Klart',0.0,7,'sun'],['13',5,'Klart',0.0,7,'sun'],['14',6,'Klart',0.0,7,'sun'],['15',6,'Soligt',0.0,7,'sun'],['16',7,'Soligt',0.0,6,'sun'],['17',6,'Klart',0.0,6,'sun'],['18',4,'Klart',0.0,5,'clear-night'],['19',3,'Klart',0.0,5,'clear-night'],['20',3,'Klart',0.0,4,'clear-night'],['21',2,'Klart',0.0,4,'clear-night'],['22',2,'Klart',0.0,4,'clear-night'],['23',2,'Klart',0.0,4,'clear-night'],['00',1,'Klart',0.0,4,'clear-night'],['01',1,'Klart',0.0,4,'clear-night'],['02',1,'Klart',0.0,4,'clear-night'],['03',1,'Klart',0.0,4,'clear-night'],['04',0,'Klart',0.0,4,'clear-night'],['05',0,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.5],['12',1.3],['13',1.9],['15',1.3],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','7° / 2°','0 mm','7 m/s'],['Imorgon','Klart','sun','8° / 2°','0 mm','6 m/s'],['Tis','Mulet','cloud','7° / 3°','0 mm','6 m/s'],['Ons','Klart','sun','8° / 3°','0 mm','5 m/s'],['Tors','Mulet','cloud','7° / 3°','1 mm','6 m/s'],['Fre','Lätt regn','rain','6° / 3°','1 mm','7 m/s'],['Lör','Mulet','cloud','6° / 2°','0 mm','6 m/s'],['Sön','Klart','sun','7° / 2°','0 mm','5 m/s'],['Mån','Mulet','cloud','7° / 3°','1 mm','6 m/s'],['Tis','Klart','sun','8° / 2°','0 mm','5 m/s']
    ]
  },
  helsingborg: {
    name: 'Helsingborg',
    now: { temp: 8, weather: 'Växlande molnighet', feels: 6, high: 10, low: 4, humidity: 69 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'SV',
      windSpeed: 6,
      daylight: 'Dagsljus 06:24–18:15',
      uvLabel: 'UV måttligt',
      uvValue: '2.4'
    },
    hourlyHint: 'Torrt större delen av dagen.',
    hourly: [
      ['Nu',8,'Växlande molnighet',0.0,6,'cloud'],['13',8,'Växlande molnighet',0.0,6,'cloud'],['14',9,'Molnigt',0.0,6,'cloud'],['15',9,'Klart',0.0,5,'sun'],['16',10,'Klart',0.0,5,'sun'],['17',9,'Klart',0.0,5,'sun'],['18',8,'Klart',0.0,4,'sun'],['19',7,'Klart',0.0,4,'clear-night'],['20',6,'Klart',0.0,4,'clear-night'],['21',6,'Klart',0.0,4,'clear-night'],['22',5,'Klart',0.0,3,'clear-night'],['23',5,'Klart',0.0,3,'clear-night'],['00',4,'Klart',0.0,3,'clear-night'],['01',4,'Klart',0.0,3,'clear-night'],['02',4,'Klart',0.0,3,'clear-night'],['03',3,'Klart',0.0,3,'clear-night'],['04',3,'Klart',0.0,3,'clear-night'],['05',3,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',0.7],['12',1.9],['13',2.4],['15',1.8],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','L','L','M','M'],['Ek','L','M','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','10° / 4°','0 mm','6 m/s'],['Imorgon','Klart','sun','11° / 4°','0 mm','5 m/s'],['Tis','Mulet','cloud','10° / 5°','0 mm','5 m/s'],['Ons','Klart','sun','11° / 5°','0 mm','4 m/s'],['Tors','Mulet','cloud','10° / 5°','0 mm','5 m/s'],['Fre','Lätt regn','rain','9° / 5°','1 mm','6 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','5 m/s'],['Sön','Klart','sun','11° / 5°','0 mm','4 m/s'],['Mån','Mulet','cloud','10° / 4°','1 mm','5 m/s'],['Tis','Klart','sun','11° / 5°','0 mm','4 m/s']
    ]
  },
  linkoping: {
    name: 'Linköping',
    now: { temp: 6, weather: 'Mulet', feels: 3, high: 8, low: 1, humidity: 70 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 5,
      daylight: 'Dagsljus 06:14–18:13',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Mulet men mest torrt.',
    hourly: [
      ['Nu',6,'Mulet',0.0,5,'cloud'],['13',6,'Mulet',0.0,5,'cloud'],['14',7,'Mulet',0.0,5,'cloud'],['15',7,'Mulet',0.0,5,'cloud'],['16',8,'Lätt regn',0.1,5,'rain'],['17',7,'Lätt regn',0.2,5,'rain'],['18',6,'Mulet',0.1,4,'cloud'],['19',5,'Mulet',0.0,4,'cloud'],['20',4,'Mulet',0.0,4,'cloud'],['21',3,'Klart',0.0,3,'clear-night'],['22',3,'Klart',0.0,3,'clear-night'],['23',2,'Klart',0.0,3,'clear-night'],['00',2,'Klart',0.0,3,'clear-night'],['01',1,'Klart',0.0,3,'clear-night'],['02',1,'Klart',0.0,2,'clear-night'],['03',0,'Klart',0.0,2,'clear-night'],['04',0,'Klart',0.0,2,'clear-night'],['05',0,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.3],['13',1.9],['15',1.3],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','8° / 1°','0–1 mm','5 m/s'],['Imorgon','Klart','sun','9° / 1°','0 mm','4 m/s'],['Tis','Mulet','cloud','8° / 2°','0 mm','4 m/s'],['Ons','Klart','sun','9° / 2°','0 mm','3 m/s'],['Tors','Mulet','cloud','8° / 2°','1 mm','4 m/s'],['Fre','Lätt regn','rain','7° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','8° / 1°','0 mm','3 m/s'],['Mån','Mulet','cloud','8° / 2°','1 mm','4 m/s'],['Tis','Klart','sun','9° / 1°','0 mm','3 m/s']
    ]
  },
  jonkoping: {
    name: 'Jönköping',
    now: { temp: 5, weather: 'Växlande molnighet', feels: 2, high: 7, low: 0, humidity: 69 },
    insights: {
      precipLabel: 'Torrt större delen av dagen',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 5,
      daylight: 'Dagsljus 06:16–18:14',
      uvLabel: 'UV lågt',
      uvValue: '1.8'
    },
    hourlyHint: 'Växlande molnighet och lugn kväll.',
    hourly: [
      ['Nu',5,'Växlande molnighet',0.0,5,'cloud'],['13',5,'Växlande molnighet',0.0,5,'cloud'],['14',6,'Molnigt',0.0,5,'cloud'],['15',6,'Klart',0.0,4,'sun'],['16',7,'Klart',0.0,4,'sun'],['17',6,'Klart',0.0,4,'sun'],['18',5,'Klart',0.0,4,'sun'],['19',4,'Klart',0.0,3,'clear-night'],['20',3,'Klart',0.0,3,'clear-night'],['21',2,'Klart',0.0,3,'clear-night'],['22',2,'Klart',0.0,3,'clear-night'],['23',1,'Klart',0.0,3,'clear-night'],['00',1,'Klart',0.0,2,'clear-night'],['01',0,'Klart',0.0,2,'clear-night'],['02',0,'Klart',0.0,2,'clear-night'],['03',-1,'Klart',0.0,2,'clear-night'],['04',-1,'Klart',0.0,2,'clear-night'],['05',-1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.2],['13',1.8],['15',1.2],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','7° / 0°','0 mm','5 m/s'],['Imorgon','Klart','sun','8° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','8° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Fre','Lätt regn','rain','6° / 1°','1 mm','5 m/s'],['Lör','Mulet','cloud','6° / 0°','0 mm','4 m/s'],['Sön','Klart','sun','7° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','8° / 0°','0 mm','3 m/s']
    ]
  },
  karlstad: {
    name: 'Karlstad',
    now: { temp: 5, weather: 'Klart', feels: 2, high: 7, low: -1, humidity: 68 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 4,
      daylight: 'Dagsljus 06:11–18:12',
      uvLabel: 'UV lågt',
      uvValue: '1.7'
    },
    hourlyHint: 'Klart och lugnt under dagen.',
    hourly: [
      ['Nu',5,'Klart',0.0,4,'sun'],['13',5,'Klart',0.0,4,'sun'],['14',6,'Klart',0.0,4,'sun'],['15',6,'Soligt',0.0,4,'sun'],['16',7,'Soligt',0.0,4,'sun'],['17',6,'Klart',0.0,3,'sun'],['18',4,'Klart',0.0,3,'clear-night'],['19',3,'Klart',0.0,3,'clear-night'],['20',2,'Klart',0.0,3,'clear-night'],['21',1,'Klart',0.0,2,'clear-night'],['22',0,'Klart',0.0,2,'clear-night'],['23',0,'Klart',0.0,2,'clear-night'],['00',-1,'Klart',0.0,2,'clear-night'],['01',-1,'Klart',0.0,2,'clear-night'],['02',-1,'Klart',0.0,2,'clear-night'],['03',-2,'Klart',0.0,2,'clear-night'],['04',-2,'Klart',0.0,2,'clear-night'],['05',-2,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.1],['13',1.7],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','7° / -1°','0 mm','4 m/s'],['Imorgon','Klart','sun','8° / -2°','0 mm','3 m/s'],['Tis','Mulet','cloud','6° / -1°','0 mm','3 m/s'],['Ons','Klart','sun','8° / -2°','0 mm','2 m/s'],['Tors','Mulet','cloud','6° / -1°','0 mm','3 m/s'],['Fre','Lätt regn','rain','5° / 0°','1 mm','4 m/s'],['Lör','Mulet','cloud','5° / -1°','0 mm','3 m/s'],['Sön','Klart','sun','6° / -1°','0 mm','2 m/s'],['Mån','Mulet','cloud','6° / 0°','0 mm','3 m/s'],['Tis','Klart','sun','7° / -1°','0 mm','2 m/s']
    ]
  },
  orebro: {
    name: 'Örebro',
    now: { temp: 5, weather: 'Mulet', feels: 2, high: 7, low: 0, humidity: 72 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 5,
      daylight: 'Dagsljus 06:10–18:11',
      uvLabel: 'UV lågt',
      uvValue: '1.7'
    },
    hourlyHint: 'Molnigt större delen av dagen.',
    hourly: [
      ['Nu',5,'Mulet',0.0,5,'cloud'],['13',5,'Mulet',0.0,5,'cloud'],['14',6,'Mulet',0.0,5,'cloud'],['15',6,'Mulet',0.0,5,'cloud'],['16',7,'Lätt regn',0.1,5,'rain'],['17',6,'Lätt regn',0.1,5,'rain'],['18',5,'Mulet',0.0,4,'cloud'],['19',4,'Mulet',0.0,4,'cloud'],['20',3,'Mulet',0.0,4,'cloud'],['21',2,'Klart',0.0,3,'clear-night'],['22',2,'Klart',0.0,3,'clear-night'],['23',1,'Klart',0.0,3,'clear-night'],['00',1,'Klart',0.0,3,'clear-night'],['01',0,'Klart',0.0,3,'clear-night'],['02',0,'Klart',0.0,2,'clear-night'],['03',-1,'Klart',0.0,2,'clear-night'],['04',-1,'Klart',0.0,2,'clear-night'],['05',-1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.1],['13',1.7],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','7° / 0°','0–1 mm','5 m/s'],['Imorgon','Klart','sun','8° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','8° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','7° / 2°','1 mm','4 m/s'],['Fre','Lätt regn','rain','6° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','6° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','7° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','8° / 0°','0 mm','3 m/s']
    ]
  },
  umea: {
    name: 'Umeå',
    now: { temp: 0, weather: 'Klart', feels: -4, high: 2, low: -6, humidity: 73 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 6,
      daylight: 'Dagsljus 05:45–17:59',
      uvLabel: 'UV lågt',
      uvValue: '0.9'
    },
    hourlyHint: 'Klar och kylig kväll väntar.',
    hourly: [
      ['Nu',0,'Klart',0.0,6,'sun'],['13',0,'Klart',0.0,6,'sun'],['14',1,'Klart',0.0,6,'sun'],['15',1,'Klart',0.0,6,'sun'],['16',2,'Klart',0.0,5,'sun'],['17',1,'Klart',0.0,5,'sun'],['18',-1,'Klart',0.0,4,'clear-night'],['19',-2,'Klart',0.0,4,'clear-night'],['20',-3,'Klart',0.0,4,'clear-night'],['21',-4,'Klart',0.0,4,'clear-night'],['22',-4,'Klart',0.0,4,'clear-night'],['23',-5,'Klart',0.0,4,'clear-night'],['00',-5,'Klart',0.0,4,'clear-night'],['01',-6,'Klart',0.0,4,'clear-night'],['02',-6,'Klart',0.0,4,'clear-night'],['03',-6,'Klart',0.0,4,'clear-night'],['04',-7,'Klart',0.0,4,'clear-night'],['05',-7,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.2],['12',0.6],['13',0.9],['15',0.6],['18',0.1],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','2° / -6°','0 mm','6 m/s'],['Imorgon','Klart','sun','3° / -7°','0 mm','5 m/s'],['Tis','Mulet','cloud','1° / -6°','0 mm','4 m/s'],['Ons','Klart','sun','3° / -7°','0 mm','3 m/s'],['Tors','Snöbyar','snow','1° / -5°','1 mm','5 m/s'],['Fre','Mulet','cloud','2° / -4°','0 mm','4 m/s'],['Lör','Klart','sun','3° / -6°','0 mm','3 m/s'],['Sön','Snö','snow','1° / -3°','2 mm','6 m/s'],['Mån','Klart','sun','2° / -5°','0 mm','4 m/s'],['Tis','Mulet','cloud','1° / -4°','0 mm','4 m/s']
    ]
  },
  madrid: {
    name: 'Madrid',
    now: { temp: 13, weather: 'Växlande molnighet', feels: 11, high: 15, low: 5, humidity: 48 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 5,
      daylight: 'Dagsljus 07:15–19:20',
      uvLabel: 'UV måttligt',
      uvValue: '3.1'
    },
    hourlyHint: 'Mild dag med solglimtar.',
    hourly: [
      ['Nu',13,'Växlande molnighet',0.0,5,'cloud'],['13',13,'Växlande molnighet',0.0,5,'cloud'],['14',14,'Soligt',0.0,5,'sun'],['15',14,'Soligt',0.0,5,'sun'],['16',15,'Klart',0.0,5,'sun'],['17',14,'Klart',0.0,4,'sun'],['18',12,'Klart',0.0,4,'clear-night'],['19',11,'Klart',0.0,4,'clear-night'],['20',10,'Klart',0.0,4,'clear-night'],['21',9,'Klart',0.0,4,'clear-night'],['22',8,'Klart',0.0,3,'clear-night'],['23',8,'Klart',0.0,3,'clear-night'],['00',7,'Klart',0.0,3,'clear-night'],['01',7,'Klart',0.0,3,'clear-night'],['02',6,'Klart',0.0,3,'clear-night'],['03',6,'Klart',0.0,3,'clear-night'],['04',5,'Klart',0.0,3,'clear-night'],['05',5,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',1.0],['12',2.6],['13',3.1],['15',2.3],['18',0.6],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','L','-'],['Bok','-','-','-','-'],['Ek','L','M','M','M'],['Gräs','M','M','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','15° / 5°','0 mm','5 m/s'],['Imorgon','Klart','sun','16° / 6°','0 mm','4 m/s'],['Tis','Mulet','cloud','15° / 6°','0 mm','4 m/s'],['Ons','Klart','sun','16° / 6°','0 mm','3 m/s'],['Tors','Växlande molnighet','cloud','15° / 7°','0 mm','4 m/s'],['Fre','Lätt regn','rain','14° / 6°','1 mm','5 m/s'],['Lör','Klart','sun','15° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','16° / 6°','0 mm','4 m/s'],['Mån','Mulet','cloud','15° / 7°','0 mm','4 m/s'],['Tis','Klart','sun','16° / 6°','0 mm','3 m/s']
    ]
  },
  rome: {
    name: 'Rom',
    now: { temp: 14, weather: 'Klart', feels: 13, high: 17, low: 8, humidity: 57 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'SV',
      windSpeed: 4,
      daylight: 'Dagsljus 06:12–18:17',
      uvLabel: 'UV måttligt',
      uvValue: '3.5'
    },
    hourlyHint: 'Milt med gott om sol.',
    hourly: [
      ['Nu',14,'Klart',0.0,4,'sun'],['13',14,'Klart',0.0,4,'sun'],['14',15,'Soligt',0.0,4,'sun'],['15',16,'Soligt',0.0,4,'sun'],['16',17,'Klart',0.0,4,'sun'],['17',16,'Klart',0.0,3,'sun'],['18',13,'Klart',0.0,3,'clear-night'],['19',12,'Klart',0.0,3,'clear-night'],['20',11,'Klart',0.0,3,'clear-night'],['21',10,'Klart',0.0,3,'clear-night'],['22',10,'Klart',0.0,2,'clear-night'],['23',9,'Klart',0.0,2,'clear-night'],['00',9,'Klart',0.0,2,'clear-night'],['01',8,'Klart',0.0,2,'clear-night'],['02',8,'Klart',0.0,2,'clear-night'],['03',8,'Klart',0.0,2,'clear-night'],['04',7,'Klart',0.0,2,'clear-night'],['05',7,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',1.1],['12',2.9],['13',3.5],['15',2.6],['18',0.6],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','L','-'],['Bok','-','-','-','-'],['Ek','M','M','M','M'],['Gräs','M','M','M','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','17° / 8°','0 mm','4 m/s'],['Imorgon','Klart','sun','18° / 9°','0 mm','4 m/s'],['Tis','Växlande molnighet','cloud','17° / 9°','0 mm','4 m/s'],['Ons','Klart','sun','18° / 9°','0 mm','3 m/s'],['Tors','Mulet','cloud','17° / 10°','0 mm','4 m/s'],['Fre','Lätt regn','rain','16° / 9°','1 mm','5 m/s'],['Lör','Klart','sun','17° / 9°','0 mm','4 m/s'],['Sön','Klart','sun','18° / 9°','0 mm','4 m/s'],['Mån','Växlande molnighet','cloud','17° / 10°','0 mm','4 m/s'],['Tis','Klart','sun','18° / 9°','0 mm','3 m/s']
    ]
  },
  london: {
    name: 'London',
    now: { temp: 11, weather: 'Växlande molnighet', feels: 9, high: 13, low: 7, humidity: 72 },
    insights: {
      precipLabel: 'Lätt regn i kväll',
      precipMetric: '1 mm',
      windDir: 'SV',
      windSpeed: 6,
      daylight: 'Dagsljus 06:14–18:07',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Milt med en del moln under eftermiddagen.',
    hourly: [
      ['Nu',11,'Växlande molnighet',0.0,6,'cloud'],['13',11,'Växlande molnighet',0.0,6,'cloud'],['14',12,'Molnigt',0.0,7,'cloud'],['15',12,'Molnigt',0.0,7,'cloud'],['16',12,'Mulet',0.1,7,'cloud'],['17',11,'Mulet',0.1,6,'cloud'],['18',10,'Mulet',0.1,6,'cloud'],['19',10,'Lätt regn',0.2,6,'rain'],['20',9,'Mulet',0.1,5,'cloud'],['21',9,'Mulet',0.1,5,'cloud'],['22',8,'Mulet',0.0,5,'cloud'],['23',8,'Mulet',0.0,4,'cloud'],['00',8,'Mulet',0.0,4,'cloud'],['01',7,'Mulet',0.0,4,'cloud'],['02',7,'Mulet',0.0,4,'cloud'],['03',7,'Mulet',0.0,4,'cloud'],['04',7,'Mulet',0.0,4,'cloud'],['05',7,'Mulet',0.0,4,'cloud']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.5],['12',1.4],['13',1.9],['15',1.3],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','13° / 7°','0–1 mm','6 m/s'],['Imorgon','Lätt regn','rain','12° / 8°','1 mm','6 m/s'],['Tis','Mulet','cloud','12° / 7°','0 mm','5 m/s'],['Ons','Klart','sun','13° / 6°','0 mm','4 m/s'],['Tors','Mulet','cloud','12° / 7°','1 mm','5 m/s'],['Fre','Lätt regn','rain','11° / 7°','2 mm','6 m/s'],['Lör','Mulet','cloud','12° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','13° / 6°','0 mm','4 m/s'],['Mån','Mulet','cloud','12° / 7°','1 mm','5 m/s'],['Tis','Klart','sun','13° / 6°','0 mm','4 m/s']
    ]
  },
  paris: {
    name: 'Paris',
    now: { temp: 12, weather: 'Klart', feels: 10, high: 14, low: 6, humidity: 61 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'S',
      windSpeed: 4,
      daylight: 'Dagsljus 06:56–18:52',
      uvLabel: 'UV måttligt',
      uvValue: '2.8'
    },
    hourlyHint: 'Mild dag med ganska gott om sol.',
    hourly: [
      ['Nu',12,'Klart',0.0,4,'sun'],['13',12,'Klart',0.0,4,'sun'],['14',13,'Soligt',0.0,4,'sun'],['15',13,'Soligt',0.0,4,'sun'],['16',14,'Klart',0.0,4,'sun'],['17',13,'Klart',0.0,3,'sun'],['18',11,'Klart',0.0,3,'clear-night'],['19',10,'Klart',0.0,3,'clear-night'],['20',9,'Klart',0.0,3,'clear-night'],['21',9,'Klart',0.0,3,'clear-night'],['22',8,'Klart',0.0,2,'clear-night'],['23',8,'Klart',0.0,2,'clear-night'],['00',7,'Klart',0.0,2,'clear-night'],['01',7,'Klart',0.0,2,'clear-night'],['02',6,'Klart',0.0,2,'clear-night'],['03',6,'Klart',0.0,2,'clear-night'],['04',6,'Klart',0.0,2,'clear-night'],['05',5,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',0.9],['12',2.3],['13',2.8],['15',2.1],['18',0.5],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','L','L','M','M'],['Ek','M','M','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','14° / 6°','0 mm','4 m/s'],['Imorgon','Klart','sun','15° / 7°','0 mm','4 m/s'],['Tis','Mulet','cloud','14° / 7°','0 mm','4 m/s'],['Ons','Klart','sun','15° / 7°','0 mm','3 m/s'],['Tors','Mulet','cloud','13° / 8°','1 mm','4 m/s'],['Fre','Lätt regn','rain','12° / 7°','1 mm','5 m/s'],['Lör','Klart','sun','14° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','15° / 7°','0 mm','4 m/s'],['Mån','Mulet','cloud','14° / 7°','1 mm','4 m/s'],['Tis','Klart','sun','15° / 6°','0 mm','3 m/s']
    ]
  },
  berlin: {
    name: 'Berlin',
    now: { temp: 9, weather: 'Klart', feels: 7, high: 11, low: 3, humidity: 60 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'O',
      windSpeed: 4,
      daylight: 'Dagsljus 06:15–18:08',
      uvLabel: 'UV måttligt',
      uvValue: '2.4'
    },
    hourlyHint: 'Svalt men stabilt väder under dagen.',
    hourly: [
      ['Nu',9,'Klart',0.0,4,'sun'],['13',9,'Klart',0.0,4,'sun'],['14',10,'Klart',0.0,4,'sun'],['15',10,'Soligt',0.0,4,'sun'],['16',11,'Soligt',0.0,4,'sun'],['17',10,'Klart',0.0,3,'sun'],['18',8,'Klart',0.0,3,'clear-night'],['19',7,'Klart',0.0,3,'clear-night'],['20',6,'Klart',0.0,2,'clear-night'],['21',6,'Klart',0.0,2,'clear-night'],['22',5,'Klart',0.0,2,'clear-night'],['23',5,'Klart',0.0,2,'clear-night'],['00',4,'Klart',0.0,2,'clear-night'],['01',4,'Klart',0.0,2,'clear-night'],['02',4,'Klart',0.0,2,'clear-night'],['03',3,'Klart',0.0,2,'clear-night'],['04',3,'Klart',0.0,2,'clear-night'],['05',3,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är måttligt mitt på dagen.',
    uv: [['06',0],['09',0.8],['12',2.0],['13',2.4],['15',1.8],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','11° / 3°','0 mm','4 m/s'],['Imorgon','Klart','sun','12° / 4°','0 mm','4 m/s'],['Tis','Mulet','cloud','11° / 5°','0 mm','4 m/s'],['Ons','Klart','sun','12° / 4°','0 mm','3 m/s'],['Tors','Mulet','cloud','10° / 5°','1 mm','4 m/s'],['Fre','Lätt regn','rain','9° / 5°','1 mm','5 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','4 m/s'],['Sön','Klart','sun','11° / 4°','0 mm','3 m/s'],['Mån','Mulet','cloud','10° / 5°','1 mm','4 m/s'],['Tis','Klart','sun','11° / 4°','0 mm','3 m/s']
    ]
  },
  barcelona: {
    name: 'Barcelona',
    now: { temp: 16, weather: 'Soligt', feels: 16, high: 18, low: 11, humidity: 58 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'SO',
      windSpeed: 4,
      daylight: 'Dagsljus 07:01–18:58',
      uvLabel: 'UV måttligt',
      uvValue: '4.2'
    },
    hourlyHint: 'Behagligt och mestadels soligt.',
    hourly: [
      ['Nu',16,'Soligt',0.0,4,'sun'],['13',16,'Soligt',0.0,4,'sun'],['14',17,'Soligt',0.0,4,'sun'],['15',17,'Soligt',0.0,4,'sun'],['16',18,'Klart',0.0,4,'sun'],['17',17,'Klart',0.0,4,'sun'],['18',15,'Klart',0.0,3,'clear-night'],['19',14,'Klart',0.0,3,'clear-night'],['20',13,'Klart',0.0,3,'clear-night'],['21',13,'Klart',0.0,3,'clear-night'],['22',12,'Klart',0.0,3,'clear-night'],['23',12,'Klart',0.0,3,'clear-night'],['00',11,'Klart',0.0,2,'clear-night'],['01',11,'Klart',0.0,2,'clear-night'],['02',11,'Klart',0.0,2,'clear-night'],['03',10,'Klart',0.0,2,'clear-night'],['04',10,'Klart',0.0,2,'clear-night'],['05',10,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer på eftermiddagen.',
    uv: [['06',0],['09',1.2],['12',3.4],['13',4.2],['15',3.1],['18',0.7],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','L','-'],['Bok','-','-','-','-'],['Ek','M','M','M','M'],['Gräs','M','M','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Soligt','sun','18° / 11°','0 mm','4 m/s'],['Imorgon','Klart','sun','18° / 12°','0 mm','4 m/s'],['Tis','Mulet','cloud','17° / 12°','0 mm','4 m/s'],['Ons','Klart','sun','18° / 12°','0 mm','3 m/s'],['Tors','Växlande molnighet','cloud','17° / 12°','0 mm','4 m/s'],['Fre','Lätt regn','rain','16° / 11°','1 mm','5 m/s'],['Lör','Klart','sun','18° / 12°','0 mm','4 m/s'],['Sön','Klart','sun','18° / 12°','0 mm','4 m/s'],['Mån','Växlande molnighet','cloud','17° / 12°','0 mm','4 m/s'],['Tis','Klart','sun','18° / 11°','0 mm','3 m/s']
    ]
  },
  'new-york': {
    name: 'New York',
    now: { temp: 9, weather: 'Klart', feels: 6, high: 11, low: 3, humidity: 55 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 7,
      daylight: 'Dagsljus 07:07–19:04',
      uvLabel: 'UV måttligt',
      uvValue: '3.0'
    },
    hourlyHint: 'Kyligt men klart större delen av dagen.',
    hourly: [
      ['Nu',9,'Klart',0.0,7,'sun'],['13',9,'Klart',0.0,7,'sun'],['14',10,'Klart',0.0,7,'sun'],['15',10,'Soligt',0.0,7,'sun'],['16',11,'Soligt',0.0,6,'sun'],['17',10,'Klart',0.0,6,'sun'],['18',8,'Klart',0.0,5,'clear-night'],['19',7,'Klart',0.0,5,'clear-night'],['20',6,'Klart',0.0,4,'clear-night'],['21',6,'Klart',0.0,4,'clear-night'],['22',5,'Klart',0.0,4,'clear-night'],['23',5,'Klart',0.0,4,'clear-night'],['00',4,'Klart',0.0,4,'clear-night'],['01',4,'Klart',0.0,4,'clear-night'],['02',4,'Klart',0.0,4,'clear-night'],['03',3,'Klart',0.0,4,'clear-night'],['04',3,'Klart',0.0,4,'clear-night'],['05',3,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',0.9],['12',2.4],['13',3.0],['15',2.2],['18',0.5],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','11° / 3°','0 mm','7 m/s'],['Imorgon','Klart','sun','12° / 4°','0 mm','6 m/s'],['Tis','Mulet','cloud','11° / 5°','0 mm','6 m/s'],['Ons','Klart','sun','12° / 5°','0 mm','5 m/s'],['Tors','Mulet','cloud','10° / 5°','1 mm','6 m/s'],['Fre','Lätt regn','rain','9° / 4°','2 mm','7 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','6 m/s'],['Sön','Klart','sun','11° / 4°','0 mm','5 m/s'],['Mån','Mulet','cloud','10° / 5°','1 mm','6 m/s'],['Tis','Klart','sun','11° / 4°','0 mm','5 m/s']
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

const POLLEN_ROW_ORDER = ['Al', 'Hassel', 'Alm', 'Björk', 'Bok', 'Ek', 'Gräs', 'Gråbo', 'Ambrosia', 'Sälg/vide'];
const POLLEN_FORECAST_DAYS = 3;
const POLLEN_SEASON_START_RANK = {
  'Al': 2,
  'Hassel': 2,
  'Alm': 3,
  'Björk': 3,
  'Bok': 5,
  'Ek': 5,
  'Gräs': 5,
  'Gråbo': 7,
  'Ambrosia': 9,
  'Sälg/vide': 4
};
const POLLEN_SEASON_END_RANK = {
  'Al': 5,
  'Hassel': 6,
  'Alm': 6,
  'Björk': 7,
  'Bok': 6,
  'Ek': 7,
  'Gräs': 10,
  'Gråbo': 10,
  'Ambrosia': 11,
  'Sälg/vide': 7
};

const OPEN_METEO_CODE_MAP = {
  0: { label: 'Klart', icon: 'sun' },
  1: { label: 'Mest klart', icon: 'sun' },
  2: { label: 'Växlande molnighet', icon: 'cloud' },
  3: { label: 'Mulet', icon: 'cloud' },
  45: { label: 'Dimma', icon: 'cloud' },
  48: { label: 'Dimma', icon: 'cloud' },
  51: { label: 'Lätt duggregn', icon: 'rain' },
  53: { label: 'Duggregn', icon: 'rain' },
  55: { label: 'Kraftigt duggregn', icon: 'rain' },
  56: { label: 'Underkylt duggregn', icon: 'snow' },
  57: { label: 'Underkylt duggregn', icon: 'snow' },
  61: { label: 'Lätt regn', icon: 'rain' },
  63: { label: 'Regn', icon: 'rain' },
  65: { label: 'Kraftigt regn', icon: 'rain' },
  66: { label: 'Underkylt regn', icon: 'snow' },
  67: { label: 'Underkylt regn', icon: 'snow' },
  71: { label: 'Lätt snö', icon: 'snow' },
  73: { label: 'Snö', icon: 'snow' },
  75: { label: 'Kraftig snö', icon: 'snow' },
  77: { label: 'Snökorn', icon: 'snow' },
  80: { label: 'Lätta skurar', icon: 'rain' },
  81: { label: 'Skurar', icon: 'rain' },
  82: { label: 'Kraftiga skurar', icon: 'rain' },
  85: { label: 'Lätta snöbyar', icon: 'snow' },
  86: { label: 'Snöbyar', icon: 'snow' },
  95: { label: 'Åska', icon: 'rain' },
  96: { label: 'Åska med hagel', icon: 'snow' },
  99: { label: 'Åska med hagel', icon: 'snow' }
};

const POLLEN_LEVEL_LABELS = {
  0: '-',
  1: 'L',
  2: 'M',
  3: 'H'
};

const UV_ALERT_THRESHOLD = 3;
const UV_HEADLINE_CLEAR_SKY = 'Prognosen gäller vid klart väder.';
const POLLEN_API_URL = 'https://www.pollenrapporten.se/api/forecast';
const POLLEN_STATION_API_URL = 'https://www.pollenrapporten.se/api/stations';
const POLLEN_PROXY = 'https://r.jina.ai/http://www.pollenrapporten.se/api/forecast';
const POLLEN_STATION_PROXY = 'https://r.jina.ai/http://www.pollenrapporten.se/api/stations';
const LIVE_TTL_MS = 5 * 60 * 1000;
const GEOCODE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const REMOTE_SEARCH_TTL_MS = 6 * 60 * 60 * 1000;
const DEWPOINT_COMFORT_LABELS = {
  veryDry: 'Torr luft',
  dry: 'Lite torrt',
  comfortable: 'Skön luft',
  humid: 'Fuktigt',
  muggy: 'Klibbigt',
  oppressive: 'Tung luft'
};

const AIR_COMFORT_LABELS = {
  crisp: 'Krispig luft',
  dry: 'Torr luft',
  neutral: 'Neutral luft',
  humid: 'Fuktig luft',
  muggy: 'Klibbig luft',
  oppressive: 'Tung luft'
};

const state = {
  slug: 'stockholm',
  selectedIndex: -1,
  results: [],
  places: [],
  placeIndex: new Map(),
  liveCache: new Map(),
  geocodeCache: new Map(),
  remoteSearchCache: new Map(),
  pollenForecastCache: new Map(),
  pollenMetaPromise: null,
  renderToken: 0,
  searchToken: 0,
  activePlace: null
};

const DEFAULT_PLACE = {
  id: 'stockholm',
  canonical_id: 'stockholm',
  name: 'Stockholm',
  municipality: 'Stockholm',
  county: 'Stockholms län',
  region: 'Stockholms län',
  country: 'SE',
  country_name_sv: 'Sverige',
  type: 'city',
  lat: 59.3293,
  lon: 18.0686,
  route_slug: 'stockholm',
  url_slug: 'stockholm',
  label: 'Stockholm · Stockholms län, Sverige',
  aliases: []
};

function slugify(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function capitalize(value = '') {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}

function formatTemp(value) {
  const rounded = Math.round(Number(value) || 0);
  return `${rounded > 0 ? '' : ''}${rounded}°`;
}

function formatPrecip(value) {
  const numeric = Number(value) || 0;
  if (numeric <= 0) return '0 mm';
  if (numeric < 1) return `${numeric.toFixed(1).replace('.', ',')} mm`;
  return `${Math.round(numeric * 10) / 10} mm`.replace('.', ',');
}

function formatHourLabel(hour) {
  if (hour === 'Nu') return 'Nu';
  const numeric = Number(hour);
  if (Number.isNaN(numeric)) return String(hour);
  return `${String(numeric).padStart(2, '0')}`;
}

function weatherMetaFromCode(code, isNight = false) {
  const meta = OPEN_METEO_CODE_MAP[code] || OPEN_METEO_CODE_MAP[3];
  if (isNight && meta.icon === 'sun') {
    return { ...meta, icon: 'clear-night', label: 'Klart' };
  }
  return meta;
}

function windDirectionFromDegrees(degrees) {
  if (degrees === null || Number.isNaN(Number(degrees))) return '–';
  const dirs = ['N', 'NO', 'O', 'SO', 'S', 'SV', 'V', 'NV'];
  const index = Math.round(((Number(degrees) % 360) / 45)) % 8;
  return dirs[index];
}

function formatSunTime(date = new Date()) {
  return new Intl.DateTimeFormat('sv-SE', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

function formatShortDay(date = new Date()) {
  return new Intl.DateTimeFormat('sv-SE', {
    weekday: 'short'
  }).format(date).replace('.', '');
}

function formatDayLabel(date, index) {
  if (index === 0) return 'Idag';
  if (index === 1) return 'Imorgon';
  const label = formatShortDay(date);
  return capitalize(label);
}

function normalizePlaceFolded(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

function uniqueArray(values = []) {
  return [...new Set(values.filter(Boolean))];
}

function getDisplayRegion(place = {}) {
  return place.county || place.region || place.admin1 || place.state || '';
}

function getCountryName(place = {}) {
  return place.country_name_sv || place.country_name || place.country || '';
}

function buildPlaceLabel(place = {}) {
  if (place.label) return place.label;
  const pieces = [place.name, getDisplayRegion(place), getCountryName(place)].filter(Boolean);
  return uniqueArray(pieces).join(' · ');
}

function getPlaceSlug(place = {}) {
  return place.route_slug || place.url_slug || slugify(place.name || '');
}

function buildPlaceIndex(places = []) {
  const index = new Map();
  places.forEach((place) => {
    const slug = getPlaceSlug(place);
    if (slug) index.set(slug, place);
    const nameSlug = slugify(place.name || '');
    if (nameSlug && !index.has(nameSlug)) index.set(nameSlug, place);
    (place.aliases || []).forEach((alias) => {
      const aliasSlug = slugify(alias);
      if (aliasSlug && !index.has(aliasSlug)) index.set(aliasSlug, place);
    });
  });
  return index;
}

function getInitialSlug() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/' ? 'stockholm' : slugify(path.split('/').pop());
}

function updatePageTitle(place) {
  const locationName = place?.name || 'Stockholm';
  document.title = `Kly.se – vädret i ${locationName}`;
}

function updateMetaDescription(place, current) {
  const description = document.querySelector('meta[name="description"]');
  if (!description) return;
  const temp = current ? `${Math.round(current.temperature_2m)}°` : '';
  const weather = current ? weatherMetaFromCode(current.weather_code, Boolean(current.is_day) === false).label.toLowerCase() : 'väder';
  description.setAttribute(
    'content',
    `Väder, pollen och UV för ${place?.name || 'Stockholm'} – snabbt, tydligt och utan reklam.${temp ? ` Just nu ${temp} och ${weather}.` : ''}`
  );
}

function updateCanonical(place) {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) return;
  const slug = getPlaceSlug(place) || 'stockholm';
  const url = new URL(window.location.href);
  url.pathname = slug === 'stockholm' ? '/' : `/${slug}/`;
  url.search = '';
  url.hash = '';
  canonical.setAttribute('href', url.toString());
}

function pushPlaceUrl(place, replace = false) {
  const slug = getPlaceSlug(place) || 'stockholm';
  const url = slug === 'stockholm' ? '/' : `/${slug}/`;
  if (replace) {
    window.history.replaceState({ slug }, '', url);
  } else if (window.location.pathname !== url) {
    window.history.pushState({ slug }, '', url);
  }
}

function setHeroName(name) {
  const hero = document.getElementById('placeName');
  if (hero) hero.textContent = name || 'Stockholm';
}

function setUpdatedAt(timestamp = new Date()) {
  const el = document.getElementById('updatedAt');
  if (!el) return;
  el.textContent = `Uppdaterad ${formatSunTime(new Date(timestamp))}`;
}

function setLoadingState(isLoading) {
  const root = document.documentElement;
  root.classList.toggle('is-loading', Boolean(isLoading));
}

function getDomRefs() {
  return {
    currentTemp: document.getElementById('currentTemp'),
    currentWeather: document.getElementById('currentWeather'),
    currentFeels: document.getElementById('currentFeels'),
    currentHighLow: document.getElementById('currentHighLow'),
    currentHumidity: document.getElementById('currentHumidity'),
    insightPrecipLabel: document.getElementById('insightPrecipLabel'),
    insightPrecipMetric: document.getElementById('insightPrecipMetric'),
    insightWind: document.getElementById('insightWind'),
    insightDaylight: document.getElementById('insightDaylight'),
    insightUvLabel: document.getElementById('insightUvLabel'),
    insightUvValue: document.getElementById('insightUvValue'),
    insightAirLabel: document.getElementById('insightAirLabel'),
    insightAirValue: document.getElementById('insightAirValue'),
    hourlyHint: document.getElementById('hourlyHint'),
    hourlyGrid: document.getElementById('hourlyGrid'),
    uvSummary: document.getElementById('uvSummary'),
    uvChart: document.getElementById('uvChart'),
    uvPeak: document.getElementById('uvPeak'),
    uvAlert: document.getElementById('uvAlert'),
    pollenTableBody: document.getElementById('pollenTableBody'),
    pollenMeta: document.getElementById('pollenMeta'),
    dailyTableBody: document.getElementById('dailyTableBody')
  };
}

function renderCurrentConditions(live, refs) {
  const current = live.current;
  refs.currentTemp.textContent = formatTemp(current.temperature_2m);
  refs.currentWeather.textContent = weatherMetaFromCode(current.weather_code, Boolean(current.is_day) === false).label;
  refs.currentFeels.textContent = formatTemp(current.apparent_temperature);
  refs.currentHighLow.textContent = `${formatTemp(live.dailyToday.temperature_2m_max)} / ${formatTemp(live.dailyToday.temperature_2m_min)}`;
  refs.currentHumidity.textContent = `${Math.round(current.relative_humidity_2m)} %`;
}

function buildAirComfort(current) {
  const humidity = Number(current.relative_humidity_2m);
  const temperature = Number(current.temperature_2m);
  const dewpoint = Number(current.dew_point_2m);

  if (!Number.isFinite(humidity) || !Number.isFinite(temperature)) {
    return { label: AIR_COMFORT_LABELS.neutral, value: '–' };
  }

  const apparentGap = Number.isFinite(current.apparent_temperature)
    ? Math.round(current.temperature_2m - current.apparent_temperature)
    : 0;

  if (Number.isFinite(dewpoint)) {
    if (dewpoint >= 20) return { label: AIR_COMFORT_LABELS.oppressive, value: `${Math.round(dewpoint)}° daggpunkt` };
    if (dewpoint >= 16) return { label: AIR_COMFORT_LABELS.muggy, value: `${Math.round(dewpoint)}° daggpunkt` };
    if (dewpoint >= 11) return { label: AIR_COMFORT_LABELS.humid, value: `${Math.round(dewpoint)}° daggpunkt` };
    if (dewpoint >= 4) return { label: AIR_COMFORT_LABELS.neutral, value: `${Math.round(dewpoint)}° daggpunkt` };
    if (dewpoint >= 0) return { label: AIR_COMFORT_LABELS.dry, value: `${Math.round(dewpoint)}° daggpunkt` };
    return { label: AIR_COMFORT_LABELS.crisp, value: `${Math.round(dewpoint)}° daggpunkt` };
  }

  if (humidity >= 82 && temperature >= 20) return { label: AIR_COMFORT_LABELS.oppressive, value: `${Math.round(humidity)} % luftfuktighet` };
  if (humidity >= 72 && temperature >= 16) return { label: AIR_COMFORT_LABELS.muggy, value: `${Math.round(humidity)} % luftfuktighet` };
  if (humidity >= 66 && temperature >= 10) return { label: AIR_COMFORT_LABELS.humid, value: `${Math.round(humidity)} % luftfuktighet` };
  if (humidity <= 35 && temperature <= 6) return { label: AIR_COMFORT_LABELS.crisp, value: `${Math.round(humidity)} % luftfuktighet` };
  if (humidity <= 42) return { label: AIR_COMFORT_LABELS.dry, value: `${Math.round(humidity)} % luftfuktighet` };
  if (apparentGap >= 3 && humidity <= 50) return { label: AIR_COMFORT_LABELS.dry, value: `${Math.round(humidity)} % luftfuktighet` };
  return { label: AIR_COMFORT_LABELS.neutral, value: `${Math.round(humidity)} % luftfuktighet` };
}

function renderInsights(live, refs) {
  const today = live.dailyToday;
  const current = live.current;
  const precip = Number(today.precipitation_sum) || 0;
  const daylight = `Dagsljus ${live.sunriseTime}–${live.sunsetTime}`;
  const wind = `${windDirectionFromDegrees(current.wind_direction_10m)} ${Math.round(current.wind_speed_10m)} m/s`;
  const { label: airLabel, value: airValue } = buildAirComfort(current);

  refs.insightPrecipLabel.textContent = precip > 0.1 ? 'Nederbörd idag' : 'Torrt idag';
  refs.insightPrecipMetric.textContent = precip > 0.1 ? formatPrecip(precip) : '';
  refs.insightWind.textContent = wind;
  refs.insightDaylight.textContent = daylight;
  refs.insightUvLabel.textContent = live.uvPeak.value >= UV_ALERT_THRESHOLD ? 'UV måttligt' : 'UV lågt';
  refs.insightUvValue.textContent = String(live.uvPeak.value).replace('.', ',');
  if (refs.insightAirLabel) refs.insightAirLabel.textContent = airLabel;
  if (refs.insightAirValue) refs.insightAirValue.textContent = airValue;
}

function renderHourly(live, refs) {
  refs.hourlyHint.textContent = live.hourlyHint;
  refs.hourlyGrid.innerHTML = '';
  live.hourly.forEach(([time, temp, weather, precip, wind, icon]) => {
    const card = document.createElement('article');
    card.className = 'hour-card';
    card.innerHTML = `
      <p class="hour-time">${formatHourLabel(time)}</p>
      <img class="weather-icon weather-icon--small" src="${ICONS[icon] || ICONS.cloud}" alt="" loading="lazy" />
      <p class="hour-temp">${formatTemp(temp)}</p>
      <p class="hour-meta">${weather}</p>
      <p class="hour-meta">${formatPrecip(precip)}</p>
      <p class="hour-meta">${Math.round(Number(wind) || 0)} m/s</p>
    `;
    refs.hourlyGrid.appendChild(card);
  });
}

function buildUvPoints(series = []) {
  if (!series.length) return [];
  const max = Math.max(...series.map(([, value]) => Number(value) || 0), 1);
  const width = 100;
  const height = 48;
  const step = width / Math.max(series.length - 1, 1);
  return series.map(([label, value], index) => {
    const x = index * step;
    const normalized = (Number(value) || 0) / max;
    const y = height - normalized * height;
    return { x, y, label, value: Number(value) || 0 };
  });
}

function renderUv(live, refs) {
  refs.uvSummary.textContent = live.uvSummary;
  refs.uvPeak.textContent = `Högst idag ${String(live.uvPeak.value).replace('.', ',')}, kl. ${live.uvPeak.time}`;
  refs.uvAlert.hidden = live.uvPeak.value < UV_ALERT_THRESHOLD;
  if (!live.uvPeak.clearSky) {
    refs.uvPeak.textContent += ' · uppskattat';
  }

  const points = buildUvPoints(live.uv);
  const line = points.map((point) => `${point.x},${point.y}`).join(' ');
  const circles = points.map(
    (point) => `<circle cx="${point.x}" cy="${point.y}" r="2.5"></circle>`
  ).join('');
  const labels = points.map((point) => {
    const labelY = 62;
    return `<text x="${point.x}" y="${labelY}" text-anchor="middle">${point.label}</text>`;
  }).join('');

  refs.uvChart.innerHTML = `
    <svg viewBox="-4 -4 108 72" aria-hidden="true" role="img">
      <line x1="0" y1="48" x2="100" y2="48" class="uv-axis"></line>
      <polyline points="${line}" class="uv-line"></polyline>
      ${circles}
      ${labels}
    </svg>
  `;
}

function normalizePollenSymbol(value) {
  if (value === null || value === undefined) return '-';
  const normalized = String(value).trim();
  if (!normalized) return '-';
  if (POLLEN_LEVEL_LABELS[normalized] !== undefined) return POLLEN_LEVEL_LABELS[normalized];
  if (['-', 'L', 'M', 'H'].includes(normalized)) return normalized;
  const lowered = normalized.toLowerCase();
  if (['low', 'låg', 'lag'].includes(lowered)) return 'L';
  if (['medium', 'medel', 'moderate'].includes(lowered)) return 'M';
  if (['high', 'hög', 'hog'].includes(lowered)) return 'H';
  return normalized.toUpperCase();
}

function pollenSymbolClass(symbol) {
  return {
    '-': 'pollen-dot pollen-dot--none',
    L: 'pollen-dot pollen-dot--low',
    M: 'pollen-dot pollen-dot--medium',
    H: 'pollen-dot pollen-dot--high'
  }[symbol] || 'pollen-dot pollen-dot--none';
}

function renderPollen(live, refs) {
  refs.pollenTableBody.innerHTML = '';
  const seasonRank = new Date().getMonth() + 1;
  const activeRows = live.pollen.filter(([name, today]) => {
    const symbol = normalizePollenSymbol(today);
    const start = POLLEN_SEASON_START_RANK[name] || 1;
    const end = POLLEN_SEASON_END_RANK[name] || 12;
    return symbol !== '-' || (seasonRank >= start && seasonRank <= end);
  });

  const sortWeight = { H: 3, M: 2, L: 1, '-': 0 };
  activeRows.sort((a, b) => {
    const aToday = sortWeight[normalizePollenSymbol(a[1])] || 0;
    const bToday = sortWeight[normalizePollenSymbol(b[1])] || 0;
    if (bToday !== aToday) return bToday - aToday;
    return POLLEN_ROW_ORDER.indexOf(a[0]) - POLLEN_ROW_ORDER.indexOf(b[0]);
  });

  activeRows.forEach(([name, today, tomorrow, day3, day4]) => {
    const row = document.createElement('tr');
    const symbols = [today, tomorrow, day3, day4].map(normalizePollenSymbol);
    row.innerHTML = `
      <th scope="row">${name}</th>
      ${symbols.map((symbol) => `<td><span class="${pollenSymbolClass(symbol)}">${symbol}</span></td>`).join('')}
    `;
    refs.pollenTableBody.appendChild(row);
  });

  refs.pollenMeta.textContent = live.pollenMeta;
}

function renderDaily(live, refs) {
  refs.dailyTableBody.innerHTML = '';
  live.daily.forEach(([day, weather, icon, temp, precip, wind]) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${day}</th>
      <td><img class="weather-icon weather-icon--small" src="${ICONS[icon] || ICONS.cloud}" alt="" loading="lazy" /></td>
      <td>${temp}</td>
      <td>${precip}</td>
      <td>${wind}</td>
    `;
    refs.dailyTableBody.appendChild(row);
  });
}

function renderDemo(place) {
  const key = getPlaceSlug(place);
  const live = DEMO[key] || DEMO.stockholm;
  const refs = getDomRefs();
  setHeroName(place?.name || live.name);
  updatePageTitle(place);
  updateMetaDescription(place, null);
  updateCanonical(place);
  setUpdatedAt(new Date());
  refs.currentTemp.textContent = formatTemp(live.now.temp);
  refs.currentWeather.textContent = live.now.weather;
  refs.currentFeels.textContent = formatTemp(live.now.feels);
  refs.currentHighLow.textContent = `${formatTemp(live.now.high)} / ${formatTemp(live.now.low)}`;
  refs.currentHumidity.textContent = `${live.now.humidity} %`;
  refs.insightPrecipLabel.textContent = live.insights.precipLabel;
  refs.insightPrecipMetric.textContent = live.insights.precipMetric;
  refs.insightWind.textContent = `${live.insights.windDir} ${live.insights.windSpeed} m/s`;
  refs.insightDaylight.textContent = live.insights.daylight;
  refs.insightUvLabel.textContent = live.insights.uvLabel;
  refs.insightUvValue.textContent = live.insights.uvValue;
  if (refs.insightAirLabel) refs.insightAirLabel.textContent = 'Neutral luft';
  if (refs.insightAirValue) refs.insightAirValue.textContent = `${live.now.humidity} % luftfuktighet`;
  refs.hourlyHint.textContent = live.hourlyHint;
  refs.uvSummary.textContent = live.uvSummary;
  const peak = live.uv.reduce((best, item) => Number(item[1]) > Number(best[1]) ? item : best, live.uv[0] || ['13', 0]);
  refs.uvPeak.textContent = `Högst idag ${String(peak[1]).replace('.', ',')}, kl. ${peak[0]}`;
  refs.uvAlert.hidden = Number(peak[1]) < UV_ALERT_THRESHOLD;
  renderHourly(live, refs);
  renderUv({ uv: live.uv, uvPeak: { value: Number(peak[1]) || 0, time: peak[0], clearSky: true }, uvSummary: live.uvSummary }, refs);
  renderPollen({ pollen: live.pollen, pollenMeta: 'Pollenprognos från demo.' }, refs);
  renderDaily(live, refs);
}

function updateStickyOffset() {
  const header = document.querySelector('.site-header');
  const sticky = document.querySelector('.jump-links');
  if (!header || !sticky) return;
  const offset = header.offsetHeight + 12;
  document.documentElement.style.setProperty('--sticky-offset', `${offset}px`);
}

function roundCoordinate(value) {
  return Number(Number(value).toFixed(4));
}

function makeLiveCacheKey(place) {
  return `${roundCoordinate(place.lat)}:${roundCoordinate(place.lon)}`;
}

async function fetchJsonWithFallback(urls = [], fetchOptions = {}) {
  let lastError;
  for (const url of urls) {
    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('Kunde inte hämta data');
}

function buildForecastUrl(place) {
  const params = new URLSearchParams({
    latitude: String(place.lat),
    longitude: String(place.lon),
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'precipitation',
      'weather_code',
      'is_day',
      'wind_speed_10m',
      'wind_direction_10m',
      'dew_point_2m'
    ].join(','),
    hourly: [
      'temperature_2m',
      'precipitation_probability',
      'precipitation',
      'weather_code',
      'wind_speed_10m',
      'is_day',
      'uv_index'
    ].join(','),
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'wind_speed_10m_max',
      'sunrise',
      'sunset',
      'uv_index_max'
    ].join(','),
    forecast_days: '10',
    timezone: 'auto'
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

async function fetchLiveWeather(place) {
  const cacheKey = makeLiveCacheKey(place);
  const cached = state.liveCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < LIVE_TTL_MS) return cached.data;

  const url = buildForecastUrl(place);
  const response = await fetchJsonWithFallback([url], { cache: 'no-store' });

  const hourlyData = response.hourly || {};
  const dailyData = response.daily || {};
  const current = response.current || {};
  const today = 0;

  const hourly = [];
  const now = new Date(response.current?.time || Date.now());
  const times = hourlyData.time || [];
  for (let i = 0; i < times.length && hourly.length < 18; i += 1) {
    const hourDate = new Date(times[i]);
    if (hourDate < now) continue;
    const isNight = Number(hourlyData.is_day?.[i]) === 0;
    const meta = weatherMetaFromCode(hourlyData.weather_code?.[i], isNight);
    hourly.push([
      hourly.length === 0 ? 'Nu' : String(hourDate.getHours()).padStart(2, '0'),
      hourlyData.temperature_2m?.[i],
      meta.label,
      hourlyData.precipitation?.[i],
      hourlyData.wind_speed_10m?.[i],
      meta.icon
    ]);
  }

  const uv = [];
  for (let i = 0; i < times.length; i += 1) {
    const date = new Date(times[i]);
    if (date.toDateString() !== now.toDateString()) continue;
    const hour = date.getHours();
    if ([6, 9, 12, 13, 15, 18, 21].includes(hour)) {
      uv.push([String(hour).padStart(2, '0'), Number(hourlyData.uv_index?.[i] || 0)]);
    }
  }
  if (!uv.length) {
    uv.push(['12', Number(dailyData.uv_index_max?.[0] || 0)]);
  }
  const uvPeakPoint = uv.reduce((best, point) => (point[1] > best[1] ? point : best), uv[0] || ['12', 0]);
  const uvPeak = {
    value: Math.round((Number(uvPeakPoint?.[1]) || 0) * 10) / 10,
    time: uvPeakPoint?.[0] || '12',
    clearSky: true
  };

  const daily = (dailyData.time || []).slice(0, 10).map((iso, index) => {
    const date = new Date(iso);
    const meta = weatherMetaFromCode(dailyData.weather_code?.[index], false);
    const max = dailyData.temperature_2m_max?.[index];
    const min = dailyData.temperature_2m_min?.[index];
    const precip = dailyData.precipitation_sum?.[index];
    const wind = dailyData.wind_speed_10m_max?.[index];
    return [
      formatDayLabel(date, index),
      meta.label,
      meta.icon,
      `${formatTemp(max)} / ${formatTemp(min)}`,
      formatPrecip(precip),
      `${Math.round(Number(wind) || 0)} m/s`
    ];
  });

  const data = {
    current,
    dailyToday: {
      temperature_2m_max: dailyData.temperature_2m_max?.[today],
      temperature_2m_min: dailyData.temperature_2m_min?.[today],
      precipitation_sum: dailyData.precipitation_sum?.[today]
    },
    sunriseTime: dailyData.sunrise?.[today] ? formatSunTime(new Date(dailyData.sunrise[today])) : '–',
    sunsetTime: dailyData.sunset?.[today] ? formatSunTime(new Date(dailyData.sunset[today])) : '–',
    hourly,
    hourlyHint: buildHourlyHint(hourly),
    uv,
    uvPeak,
    uvSummary: buildUvSummary(uvPeak),
    daily
  };

  state.liveCache.set(cacheKey, { timestamp: Date.now(), data });
  return data;
}

function buildHourlyHint(hourly = []) {
  const rainy = hourly.filter(([, , weather, precip]) => Number(precip) > 0.2 || /regn|snö/i.test(weather));
  if (!rainy.length) return 'Torrt större delen av dagen.';
  const start = rainy[0]?.[0];
  const end = rainy[rainy.length - 1]?.[0];
  if (start === end) return `Nederbörd väntas runt ${start}.`;
  return `Nederbörd väntas främst mellan ${start} och ${end}.`;
}

function buildUvSummary(uvPeak) {
  if (uvPeak.value >= 6) return 'UV är högt mitt på dagen.';
  if (uvPeak.value >= 3) return 'UV ligger på måttlig nivå mitt på dagen.';
  return 'UV är lågt idag.';
}

async function ensurePollenMeta() {
  if (state.pollenMetaPromise) return state.pollenMetaPromise;
  state.pollenMetaPromise = fetchJsonWithFallback([POLLEN_STATION_API_URL, POLLEN_STATION_PROXY], { cache: 'no-store' })
    .catch(() => []);
  return state.pollenMetaPromise;
}

function haversineDistance(aLat, aLon, bLat, bLon) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const lat1 = toRad(aLat);
  const lat2 = toRad(bLat);
  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const value = sinLat * sinLat + Math.cos(lat1) * Math.cos(lat2) * sinLon * sinLon;
  return 2 * R * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function normalizePollenSpeciesName(value = '') {
  const name = String(value || '').trim().toLowerCase();
  const map = {
    al: 'Al',
    hassel: 'Hassel',
    alm: 'Alm',
    bjork: 'Björk',
    björk: 'Björk',
    bok: 'Bok',
    ek: 'Ek',
    gras: 'Gräs',
    gräs: 'Gräs',
    grabo: 'Gråbo',
    gråbo: 'Gråbo',
    ambrosia: 'Ambrosia',
    salgvide: 'Sälg/vide',
    sälgvide: 'Sälg/vide',
    sälg/vide: 'Sälg/vide',
    salgvidepollen: 'Sälg/vide'
  };
  return map[name] || capitalize(name);
}

function extractPollenForecast(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.forecasts)) return payload.forecasts;
  if (Array.isArray(payload.data)) return payload.data;
  if (payload.forecast && Array.isArray(payload.forecast)) return payload.forecast;
  return [];
}

function resolveNearestPollenStation(place, stations = []) {
  if (!stations.length) return null;
  return stations.reduce((best, station) => {
    const stationLat = Number(station.latitude ?? station.lat);
    const stationLon = Number(station.longitude ?? station.lon);
    if (!Number.isFinite(stationLat) || !Number.isFinite(stationLon)) return best;
    const distance = haversineDistance(place.lat, place.lon, stationLat, stationLon);
    if (!best || distance < best.distance) {
      return { station, distance };
    }
    return best;
  }, null);
}

function buildPollenRowsFromForecast(entries = []) {
  const grouped = new Map();

  entries.forEach((entry) => {
    const species = normalizePollenSpeciesName(entry.species || entry.type || entry.name);
    if (!species || !POLLEN_ROW_ORDER.includes(species)) return;
    const date = entry.date || entry.day || entry.valid_date || entry.forecast_date;
    const rank = date ? new Date(date).getTime() : grouped.get(species)?.length || 0;
    const levelRaw = entry.level ?? entry.value ?? entry.classification ?? entry.risk;
    const level = normalizePollenSymbol(levelRaw);

    if (!grouped.has(species)) grouped.set(species, []);
    grouped.get(species).push({ rank, level });
  });

  const defaultRows = POLLEN_ROW_ORDER.map((species) => [species, '-', '-', '-', '-']);
  if (!grouped.size) return defaultRows;

  return POLLEN_ROW_ORDER.map((species) => {
    const days = (grouped.get(species) || [])
      .sort((a, b) => a.rank - b.rank)
      .slice(0, POLLEN_FORECAST_DAYS + 1)
      .map((item) => item.level);
    while (days.length < POLLEN_FORECAST_DAYS + 1) days.push('-');
    return [species, ...days];
  });
}

async function fetchPollenForecast(place) {
  const cacheKey = makeLiveCacheKey(place);
  const cached = state.pollenForecastCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < LIVE_TTL_MS) return cached.data;

  try {
    const stations = await ensurePollenMeta();
    const nearest = resolveNearestPollenStation(place, stations);
    if (!nearest?.station) throw new Error('Ingen pollenstation hittades');

    const stationId = nearest.station.id || nearest.station.station_id || nearest.station.stationId;
    const params = new URLSearchParams({ station: String(stationId) });
    const payload = await fetchJsonWithFallback(
      [`${POLLEN_API_URL}?${params.toString()}`, `${POLLEN_PROXY}?${params.toString()}`],
      { cache: 'no-store' }
    );

    const forecast = extractPollenForecast(payload);
    const pollen = buildPollenRowsFromForecast(forecast);
    const stationName = nearest.station.name || nearest.station.station_name || 'närmaste station';
    const distanceKm = Math.round(nearest.distance);
    const data = {
      pollen,
      pollenMeta: `Pollenprognos från ${stationName}${distanceKm ? ` · ca ${distanceKm} km bort` : ''}.`
    };
    state.pollenForecastCache.set(cacheKey, { timestamp: Date.now(), data });
    return data;
  } catch (error) {
    const fallback = DEMO[getPlaceSlug(place)]?.pollen || DEMO.stockholm.pollen;
    return {
      pollen: fallback,
      pollenMeta: 'Pollenprognos kunde inte hämtas just nu.'
    };
  }
}

async function geocodePlace(query) {
  const folded = normalizePlaceFolded(query);
  const cached = state.geocodeCache.get(folded);
  if (cached && Date.now() - cached.timestamp < GEOCODE_TTL_MS) return cached.data;

  const params = new URLSearchParams({
    name: query,
    count: '10',
    language: 'sv',
    format: 'json'
  });

  const payload = await fetchJsonWithFallback([
    `https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`
  ], { cache: 'force-cache' });

  const results = (payload.results || []).map((item) => ({
    id: item.id ? String(item.id) : `${slugify(item.name)}-${slugify(item.country_code || item.country || '')}`,
    canonical_id: item.id ? String(item.id) : `${slugify(item.name)}-${slugify(item.country_code || item.country || '')}`,
    name: item.name,
    municipality: item.admin2 || item.admin3 || '',
    county: item.admin1 || '',
    region: item.admin1 || '',
    admin1: item.admin1 || '',
    country: item.country_code || item.country || '',
    country_name_sv: item.country || '',
    type: item.feature_code || 'city',
    lat: item.latitude,
    lon: item.longitude,
    route_slug: slugify(item.name),
    url_slug: slugify(item.name),
    label: uniqueArray([item.name, item.admin1, item.country]).join(' · '),
    aliases: []
  }));

  state.geocodeCache.set(folded, { timestamp: Date.now(), data: results });
  return results;
}

async function searchRemotePlaces(query, { limit = 8 } = {}) {
  const folded = normalizePlaceFolded(query);
  const cached = state.remoteSearchCache.get(folded);
  if (cached && Date.now() - cached.timestamp < REMOTE_SEARCH_TTL_MS) return cached.data.slice(0, limit);

  try {
    const remote = await geocodePlace(query);
    const prepared = remote.slice(0, limit).map((place) => ({
      ...place,
      label: buildPlaceLabel(place),
      url_slug: getPlaceSlug(place)
    }));
    state.remoteSearchCache.set(folded, { timestamp: Date.now(), data: prepared });
    return prepared;
  } catch (error) {
    return [];
  }
}

function resolvePlaceFromSlug(slug = 'stockholm') {
  if (slug === 'stockholm') return state.placeIndex.get('stockholm') || DEFAULT_PLACE;
  return state.placeIndex.get(slug) || DEFAULT_PLACE;
}

async function renderPlace(place, pushState = false) {
  const token = ++state.renderToken;
  const refs = getDomRefs();
  const safePlace = place || DEFAULT_PLACE;
  state.activePlace = safePlace;
  state.slug = getPlaceSlug(safePlace) || 'stockholm';

  setHeroName(safePlace.name || 'Stockholm');
  updatePageTitle(safePlace);
  updateCanonical(safePlace);
  if (pushState) {
    pushPlaceUrl(safePlace, false);
  } else {
    pushPlaceUrl(safePlace, true);
  }

  setLoadingState(true);

  try {
    const [live, pollen] = await Promise.all([
      fetchLiveWeather(safePlace),
      fetchPollenForecast(safePlace)
    ]);

    if (token !== state.renderToken) return;

    updateMetaDescription(safePlace, live.current);
    setUpdatedAt(new Date());
    renderCurrentConditions(live, refs);
    renderInsights(live, refs);
    renderHourly(live, refs);
    renderUv(live, refs);
    renderPollen(pollen, refs);
    renderDaily(live, refs);
  } catch (error) {
    if (token !== state.renderToken) return;
    renderDemo(safePlace);
  } finally {
    if (token === state.renderToken) setLoadingState(false);
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

  const initialSlug = getInitialSlug();
  if (initialSlug !== 'stockholm') {
    const initialPlace = resolvePlaceFromSlug(initialSlug);
    await renderPlace(initialPlace, false);
  }
}

function initExpandableFooter() {
  document.querySelectorAll('[data-expand-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.closest('.footer-panel');
      if (!panel) return;
      const expanded = panel.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(expanded));
    });
  });
}

function initSaveAppPrompt() {
  const promptButton = document.getElementById('saveAppButton');
  if (!promptButton) return;

  promptButton.addEventListener('click', () => {
    const isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    const message = isIOS
      ? 'Lägg till Kly på hemskärmen via Dela-knappen i Safari.'
      : 'Lägg till Kly på hemskärmen via webbläsarens meny.';
    window.alert(message);
  });
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

window.addEventListener('resize', updateStickyOffset);
window.addEventListener('popstate', () => {
  const nextPlace = resolvePlaceFromSlug(getInitialSlug());
  renderPlace(nextPlace, false);
});
window.addEventListener('DOMContentLoaded', () => {
  updateStickyOffset();
  initExpandableFooter();
  initSaveAppPrompt();
  registerServiceWorker();

  const initialSlug = getInitialSlug();
  const initialPlace = initialSlug === 'stockholm' ? DEFAULT_PLACE : resolvePlaceFromSlug(initialSlug);
  renderPlace(initialPlace, false);
  initSearch();
});

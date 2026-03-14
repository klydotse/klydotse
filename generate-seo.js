const fs = require('fs');
const path = require('path');

// Komplett databas med 100+ platser för generering
const places = [
  // Dina specifika önskemål
  { slug: 'aspudden', name: 'Aspudden', county: 'Stockholm', lat: 59.3063, lon: 18.0010 },
  { slug: 'tarby', name: 'Tärby', county: 'Eskilstuna', lat: 59.4200, lon: 16.3900 },
  { slug: 'safsen', name: 'Säfsen', county: 'Dalarnas län', lat: 60.1790, lon: 14.6330 },
  { slug: 'brunico', name: 'Brunico', county: 'Italien', lat: 46.7976, lon: 11.9367 },
  { slug: 'palma', name: 'Palma de Mallorca', county: 'Spanien', lat: 39.5696, lon: 2.6502 },
  { slug: 'are', name: 'Åre', county: 'Jämtlands län', lat: 63.4000, lon: 13.0833 },
  { slug: 'salen', name: 'Sälen', county: 'Dalarnas län', lat: 61.1578, lon: 13.2625 },

  // Topp svenska orter/städer
  { slug: 'stockholm', name: 'Stockholm', county: 'Stockholms län', lat: 59.3293, lon: 18.0686 },
  { slug: 'goteborg', name: 'Göteborg', county: 'Västra Götalands län', lat: 57.7088, lon: 11.9745 },
  { slug: 'malmo', name: 'Malmö', county: 'Skåne län', lat: 55.6049, lon: 13.0038 },
  { slug: 'uppsala', name: 'Uppsala', county: 'Uppsala län', lat: 59.8585, lon: 17.6389 },
  { slug: 'vasteras', name: 'Västerås', county: 'Västmanlands län', lat: 59.6111, lon: 16.5448 },
  { slug: 'orebro', name: 'Örebro', county: 'Örebro län', lat: 59.2741, lon: 15.2066 },
  { slug: 'linkoping', name: 'Linköping', county: 'Östergötlands län', lat: 58.4108, lon: 15.6213 },
  { slug: 'helsingborg', name: 'Helsingborg', county: 'Skåne län', lat: 56.0464, lon: 12.6945 },
  { slug: 'jonkoping', name: 'Jönköping', county: 'Jönköpings län', lat: 57.7814, lon: 14.1561 },
  { slug: 'norrkoping', name: 'Norrköping', county: 'Östergötlands län', lat: 58.5877, lon: 16.1924 },
  { slug: 'lund', name: 'Lund', county: 'Skåne län', lat: 55.7046, lon: 13.1910 },
  { slug: 'umea', name: 'Umeå', county: 'Västerbottens län', lat: 63.8258, lon: 20.2630 },
  { slug: 'gavle', name: 'Gävle', county: 'Gävleborgs län', lat: 60.6748, lon: 17.1412 },
  { slug: 'boras', name: 'Borås', county: 'Västra Götalands län', lat: 57.7210, lon: 12.9398 },
  { slug: 'eskilstuna', name: 'Eskilstuna', county: 'Södermanlands län', lat: 59.3666, lon: 16.5076 },
  { slug: 'sodertalje', name: 'Södertälje', county: 'Stockholms län', lat: 59.1955, lon: 17.6252 },
  { slug: 'karlstad', name: 'Karlstad', county: 'Värmlands län', lat: 59.4021, lon: 13.5115 },
  { slug: 'taby', name: 'Täby', county: 'Stockholms län', lat: 59.4439, lon: 18.0687 },
  { slug: 'vaxjo', name: 'Växjö', county: 'Kronobergs län', lat: 56.8790, lon: 14.8058 },
  { slug: 'halmstad', name: 'Halmstad', county: 'Hallands län', lat: 56.6744, lon: 12.8577 },
  { slug: 'ostersund', name: 'Östersund', county: 'Jämtlands län', lat: 63.1766, lon: 14.6360 },
  { slug: 'sundsvall', name: 'Sundsvall', county: 'Västernorrlands län', lat: 62.3908, lon: 17.3069 },
  { slug: 'lulea', name: 'Luleå', county: 'Norrbottens län', lat: 65.5841, lon: 22.1567 },
  { slug: 'trollhattan', name: 'Trollhättan', county: 'Västra Götalands län', lat: 58.2836, lon: 12.2886 },
  { slug: 'skovde', name: 'Skövde', county: 'Västra Götalands län', lat: 58.3902, lon: 13.8461 },
  { slug: 'borlange', name: 'Borlänge', county: 'Dalarnas län', lat: 60.4858, lon: 15.4371 },
  { slug: 'falun', name: 'Falun', county: 'Dalarnas län', lat: 60.6065, lon: 15.6355 },
  { slug: 'kalmar', name: 'Kalmar', county: 'Kalmar län', lat: 56.6615, lon: 16.3616 },
  { slug: 'kristianstad', name: 'Kristianstad', county: 'Skåne län', lat: 56.0293, lon: 14.1566 },
  { slug: 'karlskrona', name: 'Karlskrona', county: 'Blekinge län', lat: 56.1612, lon: 15.5869 },
  { slug: 'skelleftea', name: 'Skellefteå', county: 'Västerbottens län', lat: 64.7506, lon: 20.9527 },
  { slug: 'uddevalla', name: 'Uddevalla', county: 'Västra Götalands län', lat: 58.3498, lon: 11.9392 },
  { slug: 'motala', name: 'Motala', county: 'Östergötlands län', lat: 58.5370, lon: 15.0363 },
  { slug: 'ornskoldsvik', name: 'Örnsköldsvik', county: 'Västernorrlands län', lat: 63.2900, lon: 18.7152 },
  { slug: 'nykopings', name: 'Nyköping', county: 'Södermanlands län', lat: 58.7530, lon: 17.0093 },
  { slug: 'karlskoga', name: 'Karlskoga', county: 'Örebro län', lat: 59.3256, lon: 14.5230 },
  { slug: 'varberg', name: 'Varberg', county: 'Hallands län', lat: 57.1068, lon: 12.2505 },
  { slug: 'trelleborg', name: 'Trelleborg', county: 'Skåne län', lat: 55.3751, lon: 13.1569 },
  { slug: 'falkenberg', name: 'Falkenberg', county: 'Hallands län', lat: 56.9027, lon: 12.4903 },
  { slug: 'enkoping', name: 'Enköping', county: 'Uppsala län', lat: 59.6360, lon: 17.0777 },
  { slug: 'angelholm', name: 'Ängelholm', county: 'Skåne län', lat: 56.2428, lon: 12.8621 },
  { slug: 'alingsas', name: 'Alingsås', county: 'Västra Götalands län', lat: 57.9304, lon: 12.5332 },
  { slug: 'lidkoping', name: 'Lidköping', county: 'Västra Götalands län', lat: 58.5051, lon: 13.1576 },
  { slug: 'vastervik', name: 'Västervik', county: 'Kalmar län', lat: 57.7590, lon: 16.6375 },
  { slug: 'sandviken', name: 'Sandviken', county: 'Gävleborgs län', lat: 60.6212, lon: 16.7759 },
  { slug: 'pitea', name: 'Piteå', county: 'Norrbottens län', lat: 65.3190, lon: 21.4795 },
  { slug: 'kungsor', name: 'Kungsör', county: 'Västmanlands län', lat: 59.4262, lon: 16.0963 },
  { slug: 'strangnas', name: 'Strängnäs', county: 'Södermanlands län', lat: 59.3774, lon: 17.0311 },
  { slug: 'karlshamn', name: 'Karlshamn', county: 'Blekinge län', lat: 56.1705, lon: 14.8619 },
  { slug: 'boden', name: 'Boden', county: 'Norrbottens län', lat: 65.8251, lon: 21.6886 },
  { slug: 'katrineholm', name: 'Katrineholm', county: 'Södermanlands län', lat: 58.9959, lon: 16.2055 },
  { slug: 'nynashamn', name: 'Nynäshamn', county: 'Stockholms län', lat: 58.9032, lon: 17.9479 },
  { slug: 'vanersborg', name: 'Vänersborg', county: 'Västra Götalands län', lat: 58.3797, lon: 12.3236 },
  { slug: 'harnosand', name: 'Härnösand', county: 'Västernorrlands län', lat: 62.6322, lon: 17.9379 },
  { slug: 'hudiksvall', name: 'Hudiksvall', county: 'Gävleborgs län', lat: 61.7275, lon: 17.1036 },
  { slug: 'oskarshamn', name: 'Oskarshamn', county: 'Kalmar län', lat: 57.2654, lon: 16.4485 },
  { slug: 'solleftea', name: 'Sollefteå', county: 'Västernorrlands län', lat: 63.1664, lon: 17.2674 },
  { slug: 'koping', name: 'Köping', county: 'Västmanlands län', lat: 59.5139, lon: 15.9936 },
  { slug: 'ludvika', name: 'Ludvika', county: 'Dalarnas län', lat: 60.1496, lon: 15.1878 },
  { slug: 'sala', name: 'Sala', county: 'Västmanlands län', lat: 59.9213, lon: 16.5985 },
  { slug: 'kiruna', name: 'Kiruna', county: 'Norrbottens län', lat: 67.8557, lon: 20.2251 },
  { slug: 'mariestad', name: 'Mariestad', county: 'Västra Götalands län', lat: 58.7097, lon: 13.8236 },
  { slug: 'kumla', name: 'Kumla', county: 'Örebro län', lat: 59.1278, lon: 15.1436 },
  { slug: 'tierp', name: 'Tierp', county: 'Uppsala län', lat: 60.3444, lon: 17.5133 },
  { slug: 'simrishamn', name: 'Simrishamn', county: 'Skåne län', lat: 55.5504, lon: 14.3487 },
  { slug: 'ystad', name: 'Ystad', county: 'Skåne län', lat: 55.4295, lon: 13.8200 },
  { slug: 'fagersta', name: 'Fagersta', county: 'Västmanlands län', lat: 60.0051, lon: 15.7925 },
  { slug: 'arboga', name: 'Arboga', county: 'Västmanlands län', lat: 59.3934, lon: 15.8407 },
  { slug: 'tranås', name: 'Tranås', county: 'Jönköpings län', lat: 58.0336, lon: 14.9782 },
  { slug: 'vetlanda', name: 'Vetlanda', county: 'Jönköpings län', lat: 57.4258, lon: 15.0837 },
  { slug: 'varnamo', name: 'Värnamo', county: 'Jönköpings län', lat: 57.1843, lon: 14.0416 },
  { slug: 'stromstad', name: 'Strömstad', county: 'Västra Götalands län', lat: 58.9413, lon: 11.1738 },
  { slug: 'amål', name: 'Åmål', county: 'Västra Götalands län', lat: 59.0527, lon: 12.7050 },
  { slug: 'soderhamn', name: 'Söderhamn', county: 'Gävleborgs län', lat: 61.3032, lon: 17.0592 },
  { slug: 'bollnas', name: 'Bollnäs', county: 'Gävleborgs län', lat: 61.3482, lon: 16.3946 },
  { slug: 'mora', name: 'Mora', county: 'Dalarnas län', lat: 61.0046, lon: 14.5369 },
  { slug: 'gallivare', name: 'Gällivare', county: 'Norrbottens län', lat: 67.1332, lon: 20.6588 },
  { slug: 'kramfors', name: 'Kramfors', county: 'Västernorrlands län', lat: 62.9272, lon: 17.7779 },
  { slug: 'lycksele', name: 'Lycksele', county: 'Västerbottens län', lat: 64.5954, lon: 18.6735 },
  { slug: 'kalix', name: 'Kalix', county: 'Norrbottens län', lat: 65.8550, lon: 23.1561 },
  { slug: 'arvika', name: 'Arvika', county: 'Värmlands län', lat: 59.6552, lon: 12.5851 },
  { slug: 'kristinehamn', name: 'Kristinehamn', county: 'Värmlands län', lat: 59.3097, lon: 14.1080 },
  { slug: 'nora', name: 'Nora', county: 'Örebro län', lat: 59.5195, lon: 15.0396 },
  { slug: 'lindesberg', name: 'Lindesberg', county: 'Örebro län', lat: 59.5937, lon: 15.2280 },
  { slug: 'ronneby', name: 'Ronneby', county: 'Blekinge län', lat: 56.2096, lon: 15.2757 },
  { slug: 'solvesborg', name: 'Sölvesborg', county: 'Blekinge län', lat: 56.0521, lon: 14.5802 },
  { slug: 'eksjo', name: 'Eksjö', county: 'Jönköpings län', lat: 57.6669, lon: 14.9722 },
  { slug: 'nybro', name: 'Nybro', county: 'Kalmar län', lat: 56.7446, lon: 15.9071 },
  { slug: 'vimmerby', name: 'Vimmerby', county: 'Kalmar län', lat: 57.6657, lon: 15.8551 },
  { slug: 'ljungby', name: 'Ljungby', county: 'Kronobergs län', lat: 56.8336, lon: 13.9333 },
  { slug: 'svalov', name: 'Svalöv', county: 'Skåne län', lat: 55.9142, lon: 13.1068 },
  { slug: 'bjuv', name: 'Bjuv', county: 'Skåne län', lat: 56.0827, lon: 12.9158 },
  { slug: 'storvreta', name: 'Storvreta', county: 'Uppsala län', lat: 59.9575, lon: 17.7011 },
  { slug: 'avesta', name: 'Avesta', county: 'Dalarnas län', lat: 60.1466, lon: 16.1772 },
  { slug: 'hedemora', name: 'Hedemora', county: 'Dalarnas län', lat: 60.2764, lon: 15.9868 },
  { slug: 'orsundsbro', name: 'Örsundsbro', county: 'Uppsala län', lat: 59.7345, lon: 17.3105 },
  { slug: 'kungsbacka', name: 'Kungsbacka', county: 'Hallands län', lat: 57.4876, lon: 12.0768 }
];

const template = (place) => `<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8" />
  <title>Väder i ${place.name} - kly.se</title>
  <meta name="description" content="Kolla aktuellt väder, regnprognos och pollen för ${place.name}, ${place.county}. Snabbt och reklamfritt." />
  <link rel="canonical" href="https://kly.se/${place.slug}/" />
  <meta http-equiv="refresh" content="0; url=/?lat=${place.lat}&lon=${place.lon}&name=${encodeURIComponent(place.name)}" />
</head>
<body>
  <p>Laddar vädret för <a href="/?lat=${place.lat}&lon=${place.lon}&name=${encodeURIComponent(place.name)}">${place.name}</a>...</p>
</body>
</html>`;

places.forEach(place => {
  const dir = path.join(__dirname, place.slug);
  if (!fs.existsSync(dir)){ fs.mkdirSync(dir); }
  fs.writeFileSync(path.join(dir, 'index.html'), template(place));
});
console.log(`Klart! Byggde SEO-sidor för ${places.length} orter.`);

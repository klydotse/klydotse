const KLY_CACHE = 'kly-shell-v1';
const SHELL_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './site.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon-180.png',
  './icons/kly-favicon.svg',
  './icons/search.svg',
  './icons/bookmark.svg',
  './icons/weather-cloud.svg',
  './icons/weather-night.svg',
  './icons/weather-rain.svg',
  './icons/weather-snow.svg',
  './icons/weather-sun.svg',
  './resources/kly-sweden-search.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(KLY_CACHE).then((cache) => cache.addAll(SHELL_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== KLY_CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(KLY_CACHE).then((cache) => cache.put('./index.html', copy));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    const copy = response.clone();
    caches.open(KLY_CACHE).then((cache) => cache.put(request, copy));
    return response;
  }))));
});

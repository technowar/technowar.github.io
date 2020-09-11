const assets = [
  './',
  './index.html',
  './assets/cv.pdf',
  './assets/icons/cv.svg',
  './assets/icons/email.svg',
  './assets/icons/favicon-16x16.png',
  './assets/icons/favicon-32x32.png',
  './assets/icons/favicon-96x96.png',
  './assets/icons/github.svg',
  './assets/icons/icon-114x114.png',
  './assets/icons/icon-120x120.png',
  './assets/icons/icon-144x144.png',
  './assets/icons/icon-152x152.png',
  './assets/icons/icon-180x180.png',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-256x256.png',
  './assets/icons/icon-384x384.png',
  './assets/icons/icon-512x512.png',
  './assets/icons/icon-57x57.png',
  './assets/icons/icon-60x60.png',
  './assets/icons/icon-72x72.png',
  './assets/icons/icon-76x76.png',
  './assets/icons/linkedin.svg',
  './assets/scripts/main.js',
  './assets/styles/reset.css',
  './assets/styles/styles.css',
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open('app').then(cache => cache.addAll(assets)));
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(key => key !== 'app').map(key => caches.delete(key)));
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

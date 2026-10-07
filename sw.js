const CACHE_NAME = 'presensi-v1';
const assets = ['./index.html', './manifest.json'];

// Menginstal Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Menjalankan aplikasi secara offline/online
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

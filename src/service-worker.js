// src/service-worker.js

// Define una versión del caché
const CACHE_VERSION = 'my-cache-v2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => {
        return cache.addAll([
          // Archivos HTML
          '/',
          
          // Archivos CSS y JavaScript
          '/index.css',
          '/index.js',
          
          // Agrega otros recursos que desees precachear
          // '/images/logo.png',
          // '/other-resource.png',
        ]);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_VERSION) {
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// src/service-worker.js

const CACHE_VERSION = 'my-cache-v2';

self.addEventListener('install', event => {
  /* eslint-disable no-restricted-globals */
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.css',
          '/index.js',
        ]);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
  /* eslint-enable no-restricted-globals */
});

self.addEventListener('activate', event => {
  /* eslint-disable no-restricted-globals */
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
  /* eslint-enable no-restricted-globals */
});

self.addEventListener('fetch', event => {
  /* eslint-disable no-restricted-globals */
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
  /* eslint-enable no-restricted-globals */
});

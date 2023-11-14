// src/service-worker.js

const CACHE_VERSION = 'my-cache-v2';

function onInstall(event) {
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
}

function onActivate(event) {
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
}

function onFetch(event) {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
}

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);
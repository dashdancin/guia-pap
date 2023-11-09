// src/service-worker.js

// Define una versión del caché
const CACHE_VERSION = 'my-cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => {
        return cache.addAll([
          // Archivos HTML
          '/',

          // Archivos CSS y JavaScript
          '/index.css',
          '/index.js',  // Ajusta la ruta según la estructura de tu proyecto
          
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

// ...

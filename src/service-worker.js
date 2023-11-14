// src/service-worker.js

/* eslint-disable no-restricted-globals */

// Importar el manifiesto precache generado por Workbox 

importScripts('precache-manifest.{hash}.js');

const CACHE_VERSION = 'my-cache-v2';

self.addEventListener('install', event => { event.waitUntil( caches.open(CACHE_VERSION) .then(cache => { return cache.addAll(precacheManifest); }) .then(() => { return self.skipWaiting(); }) ); });

self.addEventListener('activate', event => { event.waitUntil( caches.keys() .then(cacheNames => { return Promise.all( cacheNames.map(cacheName => { if (cacheName !== CACHE_VERSION) { return caches.delete(cacheName); } }) ); }) .then(() => self.clients.claim()) ); });

self.addEventListener('fetch', event => { event.respondWith( caches.match(event.request) .then(response => { return response || fetch(event.request); }) ); });

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

/* eslint-enable no-restricted-globals */
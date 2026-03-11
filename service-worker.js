const CACHE_NAME = "yash-cafe-cache-v1";

const urlsToCache = [
  "login.html",
  "menu.html",
  "manifest.json",
  "coffee-header.png",
  "coffee-blend.png",
  "snacks.png",
  "milktea.png"
];

// Install service worker
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch cached files
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
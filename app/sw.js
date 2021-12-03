const cacheOnInstall = [
  "./",
  "index.html",
  "icon/favicon.ico",
  "icon/icon-192.png",
];
const cacheVersion = "1.6.1";
const cacheName = "Histamin-Suche";

// pre-cache PWA on install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheOnInstall);
    })
  );
});

// listen to fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    // cache first, then network with caching
    caches.match(event.request, { ignoreSearch: true }).then((response) => {
      if (response) {
        return response;
      }
      return (
        // fetch ressource
        fetch(event.request).then((response) => {
          // cache fetched ressource clone
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        })
      );
    })
  );
});

self.addEventListener("message", function (event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

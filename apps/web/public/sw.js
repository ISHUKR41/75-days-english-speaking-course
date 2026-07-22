// ============================================================
// Service Worker - 75 Days Hard English Course (PWA & Offline)
// Provides full offline capabilities, caching static assets,
// caching course data, and syncing offline progress when online.
// ============================================================

const CACHE_NAME = "75-days-english-v1";
const DATA_CACHE_NAME = "75-days-english-data-v1";

// Static assets to pre-cache immediately upon installation
const PRECACHE_ASSETS = [
  "/",
  "/dashboard",
  "/speaking",
  "/vocabulary",
  "/writing",
  "/leaderboard",
  "/manifest.json",
  "/favicon.ico",
];

// Install event - cache core static resources
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install event triggered");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching core assets");
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn("[ServiceWorker] Pre-cache partial failure:", err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean up stale caches
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate event triggered");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - Stale-while-revalidate strategy for UI, Network-first for API
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests for standard caching
  if (request.method !== "GET") return;

  // Handle API requests (Network first with cache fallback)
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DATA_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static assets & page navigation (Cache first with network update)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch background update
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, networkResponse);
              });
            }
          })
          .catch(() => {/* Offline background fetch silent fail */});
        return cachedResponse;
      }

      // Network request fallback
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      });
    })
  );
});

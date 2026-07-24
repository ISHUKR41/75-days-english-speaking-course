// ============================================================
// Service Worker - 75 Days Hard English Course
// Enables offline functionality and PWA features
// Caches key pages and assets for offline access
// ============================================================

// Cache version — bump this when you update assets
const CACHE_VERSION = "v1.0.0";

// Cache names for different resource types
const STATIC_CACHE = `75days-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `75days-dynamic-${CACHE_VERSION}`;
const API_CACHE = `75days-api-${CACHE_VERSION}`;

// URLs to cache on install (static shell)
const STATIC_ASSETS = [
  "/",
  "/dashboard",
  "/offline",
  "/manifest.json",
];

// ── Install Event: Cache static assets ──────────────────────
self.addEventListener("install", (event) => {
  console.log("[SW] Installing Service Worker...");
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log("[SW] Caching static assets");
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn("[SW] Some static assets failed to cache:", err);
      });
    })
  );
  // Take control immediately
  self.skipWaiting();
});

// ── Activate Event: Clean up old caches ─────────────────────
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating Service Worker...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          // Delete old cache versions
          if (
            name !== STATIC_CACHE &&
            name !== DYNAMIC_CACHE &&
            name !== API_CACHE
          ) {
            console.log("[SW] Deleting old cache:", name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  // Take control of all clients
  self.clients.claim();
});

// ── Fetch Event: Network-first with cache fallback ──────────
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and chrome-extension requests
  if (request.method !== "GET") return;
  if (url.protocol === "chrome-extension:") return;

  // Handle API requests: network-first, no cache for POST
  if (url.pathname.startsWith("/api/")) {
    // Only cache GET API requests for read-only data
    event.respondWith(networkFirst(request, API_CACHE, 5000));
    return;
  }

  // Handle static Next.js assets: cache-first
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|ico|woff|woff2|css)$/)
  ) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Handle page navigation: network-first
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .catch(() => {
          // Show offline page when network fails
          return caches.match("/offline") || caches.match("/");
        })
    );
    return;
  }

  // Default: network-first with dynamic cache
  event.respondWith(networkFirst(request, DYNAMIC_CACHE, 3000));
});

// ── Cache-First Strategy ─────────────────────────────────────
// Check cache first, fall back to network
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response("Offline", { status: 503 });
  }
}

// ── Network-First Strategy ───────────────────────────────────
// Try network first, fall back to cache
async function networkFirst(request, cacheName, timeoutMs = 3000) {
  const networkPromise = fetch(request).then((response) => {
    if (response.ok) {
      caches.open(cacheName).then((cache) => cache.put(request, response.clone()));
    }
    return response;
  });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), timeoutMs)
  );

  try {
    return await Promise.race([networkPromise, timeoutPromise]);
  } catch {
    const cached = await caches.match(request);
    return cached || new Response("Offline", { status: 503 });
  }
}

// ── Background Sync: Sync progress when back online ─────────
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-progress") {
    event.waitUntil(syncProgressData());
  }
});

// Sync any queued progress data when online
async function syncProgressData() {
  try {
    const db = await openOfflineDB();
    const pendingItems = await getPendingItems(db);
    
    for (const item of pendingItems) {
      await fetch("/api/progress/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    console.log("[SW] Progress synced successfully");
  } catch (err) {
    console.error("[SW] Sync failed:", err);
  }
}

// IndexedDB helpers for offline data storage
function openOfflineDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("75days-offline", 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("pending")) {
        db.createObjectStore("pending", { keyPath: "id", autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getPendingItems(db) {
  return new Promise((resolve) => {
    const tx = db.transaction("pending", "readonly");
    const store = tx.objectStore("pending");
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => resolve([]);
  });
}

console.log("[SW] Service Worker loaded - 75 Days Hard English Course");

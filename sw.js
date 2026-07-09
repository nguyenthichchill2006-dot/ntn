// Service worker tối giản — chỉ để Chrome công nhận trang là PWA có thể cài đặt.
// Cache nhẹ các file tĩnh chính để trang mở nhanh hơn ở lần sau (và có thể mở lại khi mất mạng).

const CACHE_NAME = 'he-mat-troi-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './planet.css',
  './planet.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Chỉ can thiệp các request GET cùng gốc (bỏ qua CDN Three.js, Google Fonts...)
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

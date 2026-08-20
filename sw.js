const CACHE_NAME = "warikan-app-v2";
const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./help.html",
  "./style.css",
  "./app.js",
  "./lang.js",
  "./firebase-sync.js",
  "./manifest.json",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase等の外部通信はSWを介さない

  // ネットワーク優先: 常に最新のファイルを取得し、オフライン時のみキャッシュにフォールバック
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || (req.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});

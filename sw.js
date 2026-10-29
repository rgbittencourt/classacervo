// ClassAcervo — service worker mínimo.
// Serve o app pela rede (sempre a versão mais nova) e guarda a "casca" para abrir mesmo sem
// conexão; as chamadas ao GitHub (outro endereço) nunca passam por aqui nem são guardadas.
const VERSION = "1.2.0";
const CACHE = "classacervo-" + VERSION;
const SHELL = ["./", "./index.html", "./acervo.js", "./acervo.css", "./fonts/fonts.css", "./assets/classacervo-mark.svg", "./assets/classacervo.webmanifest", "./assets/icons/icon-192.png", "./assets/icons/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("classacervo-") && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // GitHub e qualquer outro endereço: direto da rede
  event.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(req).then((hit) => hit || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())))
  );
});

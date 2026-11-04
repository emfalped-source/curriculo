// Guarda a página e a biblioteca da IA para abrir sem internet.
// O próprio modelo é guardado pelo WebLLM no armazenamento do navegador.
const CACHE = "atividades-ia-emfal-v1";
const LOCAIS = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(LOCAIS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  const guardar = (url.origin === location.origin && url.pathname.indexOf("/curriculo/atividades/") === 0) || url.pathname === "/corretor/conta-emfal.js" || url.hostname === "cdn.jsdelivr.net" || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com");
  if (!guardar) return; // arquivos do modelo ficam por conta do WebLLM
  // Rede primeiro (para receber atualizações); sem internet, usa a cópia guardada
  e.respondWith(
    fetch(e.request).then(r => {
      const copia = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copia));
      return r;
    }).catch(() => caches.match(e.request))
  );
});

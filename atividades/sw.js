// Atividades com IA EMFAL
// 1) Guarda a página e o motor da IA para abrir sem internet.
//    O modelo em si é guardado pelo wllama no armazenamento do navegador.
// 2) Acrescenta os cabeçalhos COOP/COEP na página, o que libera o uso de
//    vários núcleos do processador (o GitHub Pages não permite configurá-los).
const CACHE = "atividades-ia-emfal-v2";
const LOCAIS = ["./", "./index.html", "./manifest.webmanifest", "./wllama/index.js", "./wllama/wllama.wasm"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(LOCAIS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.indexOf("atividades-") === 0 && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function comIsolamento(r){
  if (!r || r.status === 0) return r;
  const h = new Headers(r.headers);
  h.set("Cross-Origin-Opener-Policy", "same-origin");
  h.set("Cross-Origin-Embedder-Policy", "credentialless");
  return new Response(r.body, {status: r.status, statusText: r.statusText, headers: h});
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const daqui = url.origin === location.origin && url.pathname.indexOf(new URL("./", location.href).pathname) === 0;
  const conta = url.origin === location.origin && url.pathname.endsWith("/corretor/conta-emfal.js");
  if (!daqui && !conta) return; // modelo, planilha e demais ficam por conta do navegador

  const navegacao = req.mode === "navigate";
  // Rede primeiro (para receber atualizações); sem internet, usa a cópia guardada
  e.respondWith(
    fetch(req).then(r => {
      if (r.ok){ const copia = r.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
      return navegacao ? comIsolamento(r) : r;
    }).catch(() => caches.match(req, {ignoreSearch: navegacao}).then(r => navegacao ? comIsolamento(r) : r))
  );
});

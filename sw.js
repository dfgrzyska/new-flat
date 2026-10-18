// Network-first: zawsze najnowsza wersja strony, a z cache tylko gdy brak sieci
// albo sieć nie odpowiada w ciągu 3 s.
const CACHE = 'mieszkanie-v1';
const SHELL = ['./', 'index.html', 'styles.css', 'data.js', 'app.js', 'icon.svg', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {}));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  e.respondWith((async () => {
    // no-cache: zawsze pytamy serwer (ETag → 304), żeby nowa wersja była od razu, a nie po 10 min cache GitHub Pages.
    const network = fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    });
    const timeout = new Promise(resolve => setTimeout(resolve, 3000));
    const res = await Promise.race([network.catch(() => null), timeout]);
    if (res) return res;
    const cached = await caches.match(req, { ignoreSearch: true });
    return cached || network;
  })());
});

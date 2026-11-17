/* MISSION:CUTLIST – service worker: aplikacija se odpre tudi brez povezave.
   Ob vsaki spremembi datotek iz CORE povečaj številko v CACHE; stari predpomnilniki se ob aktivaciji izbrišejo. */
const CACHE = 'mission-cutlist-v13';
const CORE = ['./', './index.html', './css/styles.css', './js/app.js', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // stran, CSS in JS: najprej splet (vedno usklajene datoteke), ob izpadu shranjene
  if (req.mode === 'navigate' || (url.origin === location.origin && /\.(html|css|js|webmanifest)$/.test(url.pathname))) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  // knjižnice, pisave, ikone: najprej shranjeno
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(url.host)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; })));
  }
});

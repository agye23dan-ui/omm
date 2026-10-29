/* Service worker. Generated into sw.js by scripts/build.js, which fills in VERSION and FILES. */
'use strict';

var VERSION = '2a44d867327a';
var CACHE = 'omm-' + VERSION;
var FILES = [
  "css/app.css",
  "data/build.js",
  "data/cases/m01.js",
  "data/cases/m02.js",
  "data/cases/m03.js",
  "data/cases/m04.js",
  "data/cases/m05.js",
  "data/cases/m06.js",
  "data/cases/m07.js",
  "data/cases/m08.js",
  "data/cases/m09.js",
  "data/cases/m10.js",
  "data/cases/m11.js",
  "data/cases/m12.js",
  "data/cases/m13.js",
  "data/cases/m14.js",
  "data/cases/m15.js",
  "data/cases/m16.js",
  "data/cases/m17.js",
  "data/cases/m18.js",
  "data/course.js",
  "data/devices/atm.js",
  "data/devices/barcode.js",
  "data/devices/copier.js",
  "data/devices/dotmatrix.js",
  "data/devices/fax.js",
  "data/devices/finisher.js",
  "data/devices/inkjet.js",
  "data/devices/laser.js",
  "data/devices/mfp.js",
  "data/devices/monitor.js",
  "data/devices/network.js",
  "data/devices/pc.js",
  "data/devices/pos.js",
  "data/devices/receipt.js",
  "data/devices/scanner.js",
  "data/errorcodes.js",
  "data/index.js",
  "data/install/atm.js",
  "data/install/barcode.js",
  "data/install/copier.js",
  "data/install/dotmatrix.js",
  "data/install/fax.js",
  "data/install/finisher.js",
  "data/install/inkjet.js",
  "data/install/laser.js",
  "data/install/mfp.js",
  "data/install/monitor.js",
  "data/install/network.js",
  "data/install/pc.js",
  "data/install/pos.js",
  "data/install/receipt.js",
  "data/install/scanner.js",
  "data/modules/m01.js",
  "data/modules/m02.js",
  "data/modules/m03.js",
  "data/modules/m04.js",
  "data/modules/m05.js",
  "data/modules/m06.js",
  "data/modules/m07.js",
  "data/modules/m08.js",
  "data/modules/m09.js",
  "data/modules/m10.js",
  "data/modules/m11.js",
  "data/modules/m12.js",
  "data/modules/m13.js",
  "data/modules/m14.js",
  "data/modules/m15.js",
  "data/modules/m16.js",
  "data/modules/m17.js",
  "data/modules/m18.js",
  "fonts/archivo-variable.woff2",
  "fonts/atkinson-hyperlegible-latin-400-normal.woff2",
  "fonts/atkinson-hyperlegible-latin-700-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/favicon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "index.html",
  "js/app.js",
  "js/data.js",
  "js/dg-electronics.js",
  "js/dg-foundations.js",
  "js/dg-kit.js",
  "js/dg-machines.js",
  "js/dg-practice.js",
  "js/dg-real.js",
  "js/diagnose.js",
  "js/diagrams-more.js",
  "js/diagrams.js",
  "js/dom.js",
  "js/engine.js",
  "js/halftone.js",
  "js/icons.js",
  "js/lib.js",
  "js/platform.js",
  "js/render.js",
  "js/srs.js",
  "js/store.js",
  "js/ui.js",
  "js/views/cards.js",
  "js/views/devices.js",
  "js/views/diagnose.js",
  "js/views/errorcodes.js",
  "js/views/exam.js",
  "js/views/learn.js",
  "js/views/modnav.js",
  "js/views/module.js",
  "js/views/progress.js",
  "js/views/question.js",
  "js/views/quiz.js",
  "js/views/settings.js",
  "manifest.webmanifest"
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      /* Fetch each file fresh so a half-updated server cache cannot poison the new version. */
      return Promise.all(FILES.map(function (f) {
        return fetch(new Request(f, { cache: 'reload' })).then(function (res) {
          if (!res.ok) throw new Error(f + ' returned ' + res.status);
          return cache.put(f, res);
        });
      }));
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k.indexOf('omm-') === 0 && k !== CACHE;
      }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('message', function (event) {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
  if (event.data === 'GET_VERSION' && event.source) event.source.postMessage({ type: 'VERSION', version: VERSION });
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  /* Every page load gets the app shell, so any #/route works offline. */
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.match('index.html').then(function (hit) {
        return hit || fetch(req);
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});

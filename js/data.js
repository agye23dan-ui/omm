/*
 * Course data access. The index (titles, counts) is loaded with the page. Each module's full
 * content is a separate script loaded on demand; the service worker keeps them all offline.
 */
var pending = {};

export function course() { return window.OMM.course; }
export function index() { return window.OMM.index; }

export function moduleInfo(id) {
  return window.OMM.index.modules[id] || null;
}

export function areaOf(id) {
  var info = moduleInfo(id);
  if (!info) return null;
  var areas = window.OMM.course.areas;
  for (var i = 0; i < areas.length; i++) if (areas[i].id === info.area) return areas[i];
  return null;
}

export function courseModule(id) {
  var list = window.OMM.course.modules;
  for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
  return null;
}

export function loadModule(id) {
  var loaded = window.OMM.modules[id];
  if (loaded) return Promise.resolve(loaded);
  if (!moduleInfo(id)) return Promise.reject(new Error('Unknown module ' + id));
  if (pending[id]) return pending[id];
  pending[id] = new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = 'data/modules/' + id + '.js';
    s.async = true;
    s.onload = function () {
      if (window.OMM.modules[id]) resolve(window.OMM.modules[id]);
      else { delete pending[id]; reject(new Error('Module ' + id + ' did not register')); }
    };
    s.onerror = function () {
      delete pending[id];
      reject(new Error('Could not load module ' + id + '. Check your connection, or open the app once while online so it can save the lessons for offline use.'));
    };
    document.head.appendChild(s);
  });
  return pending[id];
}

var pendingDevices = {};

export function devices() { return window.OMM.index.devices || []; }

export function deviceInfo(id) {
  var list = devices();
  for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
  return null;
}

/* The faults of one device, as objects with an id such as laser-f01. */
export function loadDevice(id) {
  var info = deviceInfo(id);
  if (!info) return Promise.reject(new Error('Unknown device ' + id));
  if (window.OMM.devices && window.OMM.devices[id]) return Promise.resolve(expand(id));
  if (pendingDevices[id]) return pendingDevices[id];
  pendingDevices[id] = new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = 'data/devices/' + id + '.js';
    s.async = true;
    s.onload = function () {
      if (window.OMM.devices && window.OMM.devices[id]) resolve(expand(id));
      else { delete pendingDevices[id]; reject(new Error('Device ' + id + ' did not register')); }
    };
    s.onerror = function () {
      delete pendingDevices[id];
      reject(new Error('Could not load this device. Check your connection, or open the app once while online so it can save it for offline use.'));
    };
    document.head.appendChild(s);
  });
  return pendingDevices[id];
}

var pendingInstalls = {};

/* The installation guide of one device, from data/install/<id>.js. */
export function loadInstall(id) {
  var info = deviceInfo(id);
  if (!info) return Promise.reject(new Error('Unknown device ' + id));
  if (window.OMM.installs && window.OMM.installs[id]) return Promise.resolve(window.OMM.installs[id]);
  if (pendingInstalls[id]) return pendingInstalls[id];
  pendingInstalls[id] = new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = 'data/install/' + id + '.js';
    s.async = true;
    s.onload = function () {
      if (window.OMM.installs && window.OMM.installs[id]) resolve(window.OMM.installs[id]);
      else { delete pendingInstalls[id]; reject(new Error('Installation guide ' + id + ' did not register')); }
    };
    s.onerror = function () {
      delete pendingInstalls[id];
      reject(new Error('Could not load this guide. Check your connection, or open the app once while online so it can save it for offline use.'));
    };
    document.head.appendChild(s);
  });
  return pendingInstalls[id];
}

function expand(id) {
  var d = window.OMM.devices[id];
  if (!d.expanded) {
    d.expanded = d.faults.map(function (f, i) {
      return { id: id + '-f' + (i + 1 < 10 ? '0' : '') + (i + 1), group: f[0], symptom: f[1], cause: f[2], check: f[3], remedy: f[4], lesson: f[5], safety: f[6] || null };
    });
  }
  return { info: deviceInfo(id), groups: d.groups, faults: d.expanded };
}

var pendingCases = {};

/* Diagnosis cases for one module (data/cases/mNN.js). Resolves to an empty list if the module has none. */
export function loadCases(id) {
  var info = moduleInfo(id);
  if (!info) return Promise.reject(new Error('Unknown module ' + id));
  if (!info.cases || !info.cases.length) return Promise.resolve([]);
  if (window.OMM.cases && window.OMM.cases[id]) return Promise.resolve(window.OMM.cases[id]);
  if (pendingCases[id]) return pendingCases[id];
  pendingCases[id] = new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = 'data/cases/' + id + '.js';
    s.async = true;
    s.onload = function () {
      if (window.OMM.cases && window.OMM.cases[id]) resolve(window.OMM.cases[id]);
      else { delete pendingCases[id]; reject(new Error('Cases for ' + id + ' did not register')); }
    };
    s.onerror = function () {
      delete pendingCases[id];
      reject(new Error('Could not load the cases. Check your connection, or open the app once while online so it can save them for offline use.'));
    };
    document.head.appendChild(s);
  });
  return pendingCases[id];
}

/* Finds a loaded case by id such as m03-d2. */
export function findCase(id) {
  var list = window.OMM.cases && window.OMM.cases[id.slice(0, 3)];
  if (!list) return null;
  for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
  return null;
}

export function loadModules(ids) {
  return Promise.all(ids.map(loadModule));
}

export function loadAll() {
  return loadModules(window.OMM.index.order);
}

/* All questions for the given module ids, each tagged with its module. Modules must be loaded. */
export function questionsFor(ids) {
  var out = [];
  ids.forEach(function (id) {
    var m = window.OMM.modules[id];
    if (m) m.quiz.forEach(function (q) { out.push(q); });
  });
  return out;
}

export function cardsFor(ids) {
  var out = [];
  ids.forEach(function (id) {
    var m = window.OMM.modules[id];
    if (m) m.cards.forEach(function (c) { out.push(c); });
  });
  return out;
}

export function findQuestion(id) {
  var m = window.OMM.modules[id.slice(0, 3)];
  if (!m) return null;
  for (var i = 0; i < m.quiz.length; i++) if (m.quiz[i].id === id) return m.quiz[i];
  return null;
}

export function findCard(id) {
  var m = window.OMM.modules[id.slice(0, 3)];
  if (!m) return null;
  for (var i = 0; i < m.cards.length; i++) if (m.cards[i].id === id) return m.cards[i];
  return null;
}

export function lessonTitle(lessonIdValue) {
  var info = moduleInfo(lessonIdValue.slice(0, 3));
  if (!info) return '';
  for (var i = 0; i < info.lessons.length; i++) if (info.lessons[i].id === lessonIdValue) return info.lessons[i].title;
  return '';
}

export function lessonNumber(lessonIdValue) {
  var m = /-l(\d+)$/.exec(lessonIdValue);
  return m ? parseInt(m[1], 10) : 0;
}

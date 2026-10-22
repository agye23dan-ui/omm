import { h, clear } from './dom.js';
import { icon } from './icons.js';
import { registrationMark } from './halftone.js';
import * as store from './store.js';
import * as platform from './platform.js';
import { dueCardCount } from './srs.js';
import { setTitle, failure } from './ui.js';
import * as learn from './views/learn.js';
import * as mod from './views/module.js';
import * as quiz from './views/quiz.js';
import * as exam from './views/exam.js';
import * as cards from './views/cards.js';
import * as diagnose from './views/diagnose.js';
import * as devices from './views/devices.js';
import * as progress from './views/progress.js';
import * as settings from './views/settings.js';

var main = document.getElementById('main');
var current = null;

var ROUTES = [
  [/^$|^learn$/, 'learn', function () { return learn.render(); }],
  [/^module\/(m\d+)$/, 'learn', function (p) { return mod.overview(p); }],
  [/^module\/(m\d+)\/lesson\/(\d+)$/, 'learn', function (p) { return mod.lesson([p[0], null, p[1]]); }],
  [/^module\/(m\d+)\/practical$/, 'learn', function (p) { return mod.practical(p); }],
  [/^module\/(m\d+)\/summary$/, 'learn', function (p) { return mod.summary(p); }],
  [/^quiz$/, 'quiz', function () { return quiz.hub([]); }],
  [/^quiz\/start\/(m\d+)$/, 'quiz', function (p) { return quiz.hub(['start', p[0]]); }],
  [/^quiz\/run$/, 'quiz', function () { return quiz.run(); }],
  [/^quiz\/result$/, 'quiz', function () { return quiz.result(); }],
  [/^exam$/, 'quiz', function () { return exam.intro(); }],
  [/^exam\/run$/, 'quiz', function () { return exam.run(); }],
  [/^exam\/result$/, 'quiz', function () { return exam.result(); }],
  [/^cards$/, 'cards', function () { return cards.hub(); }],
  [/^cards\/run\/(due|m\d+)$/, 'cards', function (p) { return cards.run(p); }],
  [/^cards\/browse$/, 'cards', function () { return cards.browse(); }],
  [/^devices$/, 'learn', function () { return devices.hub(); }],
  [/^devices\/([a-z]+)$/, 'learn', function (p) { return devices.page(p); }],
  [/^devices\/([a-z]+)\/drill$/, 'learn', function (p) { return devices.drill(p); }],
  [/^devices\/([a-z]+)\/install$/, 'learn', function (p) { return devices.install(p); }],
  [/^diagnose$/, 'diagnose', function () { return diagnose.hub(); }],
  [/^diagnose\/case\/(m\d+-d\d+)$/, 'diagnose', function (p) { return diagnose.run(p); }],
  [/^progress$/, 'progress', function () { return progress.render(); }],
  [/^settings$/, 'settings', function () { return settings.render(); }],
  [/^about$/, 'settings', function () { return settings.about(); }]
];

var TABS = [['learn', 'Learn', 'learn'], ['quiz', 'Quiz', 'quiz'], ['cards', 'Cards', 'cards'], ['diagnose', 'Diagnose', 'diagnose'], ['progress', 'Progress', 'progress']];

function buildChrome() {
  var top = document.getElementById('topbar');
  clear(top);
  top.appendChild(h('a', { class: 'brand', href: '#/learn', 'aria-label': 'Office Machine Mechanic, home' }, registrationMark(30), h('span', { class: 'brand-name' }, 'Office Machine', h('br'), 'Mechanic')));
  top.appendChild(h('a', { class: 'icon-btn', href: '#/settings', 'aria-label': 'Settings' }, icon('settings', 24)));
  var tabs = document.getElementById('tabs');
  clear(tabs);
  TABS.forEach(function (t) {
    tabs.appendChild(h('a', { class: 'tab', href: '#/' + t[0], dataset: { tab: t[0] } }, icon(t[2], 24), h('span', null, t[1]), t[0] === 'cards' ? h('span', { class: 'dot', hidden: true, id: 'due-dot' }) : null));
  });
}

function markTab(tab) {
  Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (a) {
    if (a.dataset.tab === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}

function updateDue() {
  var dot = document.getElementById('due-dot');
  if (!dot) return;
  var n = dueCardCount(store.state, Date.now());
  dot.hidden = n === 0;
  dot.textContent = n > 99 ? '99+' : String(n);
  dot.setAttribute('aria-label', n + ' cards due');
}

function show() {
  var path = decodeURIComponent((window.location.hash || '').replace(/^#\/?/, '')).replace(/\/+$/, '');
  if (current && current.destroy) { try { current.destroy(); } catch (e) { /* ignore */ } }
  current = null;
  var match = null;
  for (var i = 0; i < ROUTES.length; i++) {
    var m = ROUTES[i][0].exec(path);
    if (m) { match = { tab: ROUTES[i][1], fn: ROUTES[i][2], params: m.slice(1) }; break; }
  }
  clear(main);
  document.querySelector('.dlg') && document.querySelectorAll('.dlg').forEach(function (d) { d.remove(); });
  if (!match) {
    markTab('learn');
    main.appendChild(h('div', null, h('h1', null, 'Page not found'), h('p', null, 'That address does not match anything here.'), h('a', { class: 'btn primary', href: '#/learn' }, 'Go to Learn')));
    return;
  }
  markTab(match.tab);
  main.classList.toggle('wide', match.tab === 'learn' && !match.params.length);
  var node;
  try { node = match.fn(match.params); } catch (e) { console.error(e); node = failure(e); }
  current = node;
  if (!store.status.persistent) main.appendChild(h('div', { class: 'banner warn' }, icon('warning'), h('p', null, 'Progress cannot be saved in this browser, so it will be lost when you close the app. Try a normal (not private) window.')));
  main.appendChild(node);
  updateDue();
  window.scrollTo(0, 0);
  var title = main.querySelector('h1');
  if (title) setTitle(title.textContent);
  main.focus({ preventScroll: true });
}

function start() {
  platform.applyTheme();
  platform.applySize();
  buildChrome();
  updateDue();
  store.onChange(updateDue);
  window.addEventListener('hashchange', show);
  show();
  platform.registerServiceWorker();
}

store.init().then(start, start);

/*
 * Fault library by device: every common fault with its likely cause, first check and remedy.
 * Learners can search, filter by area, mark faults as learned and drill the ones they do not know.
 */
import { h, rich } from '../dom.js';
import { icon } from '../icons.js';
import * as store from '../store.js';
import * as data from '../data.js';
import { mulberry32, newSeed, shuffle, plural } from '../lib.js';
import { crumb, pageHead, setTitle, loading, failure } from '../ui.js';
import { lessonLink } from './quiz.js';

function key(faultId) { return 'dev:' + faultId; }
function isLearned(faultId) { return !!store.get('kv', key(faultId)); }
function setLearned(faultId, yes) {
  if (yes) return store.set('kv', key(faultId), { ts: Date.now() });
  return store.remove('kv', key(faultId));
}

export function learnedCount(deviceId) {
  var n = 0;
  Object.keys(store.state.kv).forEach(function (k) { if (k.indexOf('dev:' + deviceId + '-f') === 0) n++; });
  return n;
}

export function totalLearned() {
  var n = 0;
  Object.keys(store.state.kv).forEach(function (k) { if (k.indexOf('dev:') === 0) n++; });
  return n;
}

/* ---------- Hub ---------- */

export function tiles(compact) {
  return h('div', { class: 'devgrid' + (compact ? ' compact' : '') }, data.devices().map(function (d) {
    var learned = learnedCount(d.id);
    return h('a', { class: 'devtile', href: '#/devices/' + d.id },
      h('span', { class: 't' }, d.title),
      h('span', { class: 'b' }, d.blurb),
      h('span', { class: 'm' }, plural(d.count, 'fault', 'faults') + ' · ' + learned + ' learned'),
      h('span', { class: 'bar', 'aria-hidden': 'true' }, h('i', { style: { width: Math.round(learned / d.count * 100) + '%' } })));
  }));
}

export function hub() {
  setTitle('Learn by device');
  var total = 0;
  data.devices().forEach(function (d) { total += d.count; });
  return h('div', null, crumb('#/learn', 'Learn'),
    pageHead('Learn by device', 'Pick a machine and learn its common faults, what causes each one, what to check first and how to fix it. ' + total + ' faults across ' + data.devices().length + ' devices.'),
    tiles());
}

/* ---------- One device ---------- */

function faultCard(f, onToggle) {
  var learned = isLearned(f.id);
  var det = h('details', { class: 'fault' + (learned ? ' learned' : ''), id: f.id });
  var tick = h('span', { class: 'tick', 'aria-hidden': 'true' }, learned ? icon('check', 16) : null);
  det.appendChild(h('summary', null, h('span', { class: 'sym' }, f.symptom), tick, icon('chevron', 16)));
  var body = h('div', { class: 'faultbody' },
    h('div', { class: 'blk' }, h('div', { class: 'lbl' }, 'Likely cause'), h('p', null, rich(f.cause))),
    h('div', { class: 'blk' }, h('div', { class: 'lbl' }, 'First check'), h('p', null, rich(f.check))),
    h('div', { class: 'blk fix' }, h('div', { class: 'lbl' }, icon('wrench', 16), 'Remedy'), h('p', null, rich(f.remedy))),
    f.safety ? h('div', { class: 'blk safe' }, h('div', { class: 'lbl' }, icon('warning', 16), 'Safety'), h('p', null, rich(f.safety))) : null);
  var btn = h('button', { class: 'btn small' + (learned ? '' : ' primary'), type: 'button' }, icon('check', 16), learned ? 'Learned (tap to undo)' : 'Mark as learned');
  btn.addEventListener('click', function () {
    var now = !isLearned(f.id);
    setLearned(f.id, now);
    det.classList.toggle('learned', now);
    tick.replaceChildren(now ? icon('check', 16) : '');
    btn.classList.toggle('primary', !now);
    btn.lastChild.textContent = now ? 'Learned (tap to undo)' : 'Mark as learned';
    if (onToggle) onToggle();
  });
  body.appendChild(h('div', { class: 'btn-row' }, btn, h('a', { class: 'btn small', href: lessonLink(f.lesson) }, 'Read: ' + data.lessonTitle(f.lesson))));
  det.appendChild(body);
  return det;
}

export function page(params) {
  var id = params[0];
  var info = data.deviceInfo(id);
  if (!info) return h('div', null, crumb('#/devices', 'All devices'), h('p', { class: 'empty' }, 'That device does not exist.'));
  setTitle(info.title);
  var holder = h('div', null, crumb('#/devices', 'All devices'), loading());
  data.loadDevice(id).then(function (dev) {
    var state = { q: '', group: 'All', onlyNew: false };
    var meterFill = h('i', null);
    var meterText = h('span', { class: 'muted small' });
    function progress() {
      var n = dev.faults.filter(function (f) { return isLearned(f.id); }).length;
      meterFill.style.width = Math.round(n / dev.faults.length * 100) + '%';
      meterText.textContent = n + ' of ' + dev.faults.length + ' faults learned';
    }
    var listEl = h('div', { class: 'faultlist' });
    var countEl = h('p', { class: 'muted small', role: 'status' });
    function draw() {
      var q = state.q.trim().toLowerCase();
      var shown = dev.faults.filter(function (f) {
        if (state.group !== 'All' && f.group !== state.group) return false;
        if (state.onlyNew && isLearned(f.id)) return false;
        if (!q) return true;
        return (f.symptom + ' ' + f.cause + ' ' + f.check + ' ' + f.remedy).toLowerCase().indexOf(q) >= 0;
      });
      countEl.textContent = plural(shown.length, 'fault', 'faults') + ' shown';
      var nodes = [];
      dev.groups.forEach(function (g) {
        var inGroup = shown.filter(function (f) { return f.group === g; });
        if (!inGroup.length) return;
        nodes.push(h('h2', { class: 'faultgroup' }, g, h('span', { class: 'n' }, String(inGroup.length))));
        inGroup.forEach(function (f) { nodes.push(faultCard(f, progress)); });
      });
      if (!nodes.length) nodes.push(h('p', { class: 'empty' }, 'No faults match. Clear the search or choose another area.'));
      listEl.replaceChildren.apply(listEl, nodes);
    }
    var search = h('input', { class: 'search', type: 'search', placeholder: 'Search symptoms, causes and remedies', 'aria-label': 'Search faults' });
    search.addEventListener('input', function () { state.q = search.value; draw(); });
    var chipBar = h('div', { class: 'chipbar', role: 'group', 'aria-label': 'Filter by area' });
    ['All'].concat(dev.groups).forEach(function (g) {
      var b = h('button', { type: 'button', 'aria-pressed': g === 'All' ? 'true' : 'false' }, g);
      b.addEventListener('click', function () {
        state.group = g;
        Array.prototype.forEach.call(chipBar.children, function (c) { c.setAttribute('aria-pressed', c === b ? 'true' : 'false'); });
        draw();
      });
      chipBar.appendChild(b);
    });
    var only = h('input', { type: 'checkbox', id: 'only-new' });
    only.addEventListener('change', function () { state.onlyNew = only.checked; draw(); });
    var out = h('div', null, crumb('#/devices', 'All devices'),
      h('h1', null, info.title),
      h('p', { class: 'lede muted' }, info.blurb),
      h('div', { class: 'meter', role: 'progressbar', 'aria-label': 'Faults learned' }, meterFill), meterText,
      h('div', { class: 'btn-row' }, h('a', { class: 'btn primary', href: '#/devices/' + id + '/drill' }, icon('quiz', 18), 'Drill this device'),
        h('a', { class: 'btn', href: '#/devices/' + id + '/install' }, icon('list', 18), 'Installation guide'),
        info.modules.slice(0, 3).map(function (m) { var mi = data.moduleInfo(m); return mi ? h('a', { class: 'btn small', href: '#/module/' + m }, 'Module ' + mi.number + ': ' + mi.short) : null; })),
      h('div', { class: 'devctl' }, search, chipBar,
        h('div', { class: 'check-row' }, only, h('label', { for: 'only-new' }, 'Hide faults I have learned')), countEl),
      listEl);
    progress();
    draw();
    holder.replaceWith(out);
    holder = out;
  }).catch(function (e) { holder.replaceWith(failure(e)); });
  return holder;
}

/* ---------- Drill ---------- */

export function drill(params) {
  var id = params[0];
  var info = data.deviceInfo(id);
  if (!info) return h('div', null, crumb('#/devices', 'All devices'), h('p', { class: 'empty' }, 'That device does not exist.'));
  setTitle('Drill: ' + info.title);
  var holder = h('div', null, crumb('#/devices/' + id, info.title), loading());
  data.loadDevice(id).then(function (dev) {
    var pool = dev.faults.filter(function (f) { return !isLearned(f.id); });
    var allLearned = !pool.length;
    if (allLearned) pool = dev.faults.slice();
    var queue = shuffle(pool, mulberry32(newSeed()));
    var total = queue.length, done = 0, knew = 0, retried = {};
    function show() {
      if (!queue.length) { finish(); return; }
      var f = queue[0];
      var revealed = false;
      var card = h('div', { class: 'qcard' }, h('div', { class: 'qmeta' }, f.group), h('p', { class: 'qtext' }, f.symptom),
        h('p', { class: 'muted' }, 'Say what causes it, what you would check first and how you would fix it. Then reveal the answer.'));
      var reveal = h('button', { class: 'btn primary', type: 'button' }, 'Show cause and remedy');
      var after = h('div', null);
      reveal.addEventListener('click', function () {
        if (revealed) return;
        revealed = true;
        reveal.remove();
        card.appendChild(h('div', { class: 'faultbody' },
          h('div', { class: 'blk' }, h('div', { class: 'lbl' }, 'Likely cause'), h('p', null, rich(f.cause))),
          h('div', { class: 'blk' }, h('div', { class: 'lbl' }, 'First check'), h('p', null, rich(f.check))),
          h('div', { class: 'blk fix' }, h('div', { class: 'lbl' }, icon('wrench', 16), 'Remedy'), h('p', null, rich(f.remedy))),
          f.safety ? h('div', { class: 'blk safe' }, h('div', { class: 'lbl' }, icon('warning', 16), 'Safety'), h('p', null, rich(f.safety))) : null));
        var yes = h('button', { class: 'btn good', type: 'button' }, icon('check', 16), 'I knew it');
        var no = h('button', { class: 'btn', type: 'button' }, 'Not yet');
        yes.addEventListener('click', function () { setLearned(f.id, true); store.bumpDay('cards', 1); knew++; done++; queue.shift(); show(); });
        no.addEventListener('click', function () {
          queue.shift();
          if (!retried[f.id]) { retried[f.id] = 1; queue.push(f); } else done++;
          show();
        });
        after.appendChild(h('div', { class: 'qfoot' }, h('span', { class: 'spacer' }), no, yes));
        yes.focus();
      });
      var out = h('div', { class: 'reader' }, crumb('#/devices/' + id, info.title),
        h('div', { class: 'qhead' }, h('span', { class: 'count' }, 'Fault ' + (done + 1) + ' of ' + total), h('span', { class: 'chip' }, info.title)),
        h('div', { class: 'meter', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': total, 'aria-valuenow': done }, h('i', { style: { width: (done / total * 100) + '%' } })),
        card, h('div', { class: 'qfoot' }, h('span', { class: 'spacer' }), reveal), after);
      holder.replaceChildren(out);
    }
    function finish() {
      holder.replaceChildren(h('div', { class: 'reader' }, crumb('#/devices/' + id, info.title), h('h1', null, 'Drill finished'),
        h('div', { class: 'score' }, h('span', { class: 'n' }, knew + '/' + total), h('span', { class: 'of' }, 'faults you knew first time')),
        h('p', null, allLearned ? 'You had already learned every fault here, so this was a revision round.' : 'Faults you knew are marked as learned. The others stay on your list for next time.'),
        h('div', { class: 'btn-row' }, h('a', { class: 'btn primary', href: '#/devices/' + id + '/drill' }, 'Drill again'), h('a', { class: 'btn', href: '#/devices/' + id }, 'Back to the fault list'))));
    }
    holder.replaceChildren(h('div', null));
    show();
  }).catch(function (e) { holder.replaceChildren(failure(e)); });
  return holder;
}

/* ---------- Installation guide ---------- */

var PHASES = [
  ['before', 'Before you go'],
  ['site', 'Site and power'],
  ['unpack', 'Unpack and prepare'],
  ['setup', 'Set up'],
  ['test', 'Test'],
  ['handover', 'Handover']
];

function instKey(id) { return 'inst:' + id; }

export function install(params) {
  var id = params[0];
  var info = data.deviceInfo(id);
  if (!info) return h('div', null, crumb('#/devices', 'All devices'), h('p', { class: 'empty' }, 'That device does not exist.'));
  setTitle('Installing: ' + info.title);
  var holder = h('div', null, crumb('#/devices/' + id, info.title), loading());
  data.loadInstall(id).then(function (g) {
    var saved = store.get('kv', instKey(id)) || {};
    var total = 0;
    PHASES.forEach(function (p) { total += g[p[0]].length; });
    var fill = h('i', null);
    var txt = h('span', { class: 'muted small' });
    var boxes = [];
    function progress() {
      var n = Object.keys(saved).length;
      fill.style.width = Math.round(n / total * 100) + '%';
      txt.textContent = n + ' of ' + total + ' steps ticked';
    }
    function persist() { store.set('kv', instKey(id), saved); progress(); }
    function list(items) {
      return h('div', null, items.map(function (t) { return h('div', { class: 'check-row' }, t.cb, h('label', { for: t.cb.id }, rich(t.text))); }));
    }
    var sections = PHASES.map(function (p, pi) {
      var items = g[p[0]].map(function (text, i) {
        var k = p[0] + '-' + i;
        var cb = h('input', { type: 'checkbox', id: 'i-' + k, checked: saved[k] ? true : null });
        cb.addEventListener('change', function () { if (cb.checked) saved[k] = 1; else delete saved[k]; persist(); });
        boxes.push(cb);
        return { cb: cb, text: text };
      });
      return h('section', { class: 'sheet' }, h('h2', null, (pi + 1) + '. ' + p[1]), list(items));
    });
    var reset = h('button', { class: 'btn small', type: 'button' }, 'Clear the ticks');
    reset.addEventListener('click', function () {
      saved = {};
      boxes.forEach(function (b) { b.checked = false; });
      persist();
    });
    var out = h('div', { class: 'reader' }, crumb('#/devices/' + id, info.title),
      h('h1', null, 'Installing: ' + info.title),
      h('p', { class: 'lede muted' }, rich(g.intro)),
      h('div', { class: 'meter', role: 'progressbar', 'aria-label': 'Steps ticked' }, fill), txt,
      h('section', { class: 'sheet danger' }, h('h2', null, 'Safety first'), h('ul', null, g.safety.map(function (s2) { return h('li', null, rich(s2)); }))),
      h('section', { class: 'sheet' }, h('h2', null, 'Tools and items to take'), h('ul', null, g.tools.map(function (s2) { return h('li', null, rich(s2)); }))),
      sections,
      h('div', { class: 'btn-row no-print' },
        h('button', { class: 'btn', type: 'button', onclick: function () { window.print(); } }, icon('print', 18), 'Print this checklist'),
        reset,
        h('a', { class: 'btn', href: '#/devices/' + id }, 'Faults for this device'),
        h('a', { class: 'btn', href: lessonLink(g.lesson) }, 'Read: ' + data.lessonTitle(g.lesson))));
    progress();
    holder.replaceWith(out);
    holder = out;
  }).catch(function (e) { holder.replaceWith(failure(e)); });
  return holder;
}

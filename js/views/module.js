import { h, rich } from '../dom.js';
import { icon } from '../icons.js';
import * as store from '../store.js';
import * as data from '../data.js';
import { moduleParts, moduleMastery } from '../srs.js';
import { cell, areaColor } from '../halftone.js';
import { fmtMinutes, lessonId, plural } from '../lib.js';
import { renderBlocks } from '../render.js';
import { crumb, setTitle, loading, failure } from '../ui.js';
import { lessonHref } from './learn.js';
import * as modnav from './modnav.js';

function toolLink(href, ic, title, sub) {
  return h('a', { class: 'tool-link', href: href }, icon(ic, 22), h('div', null, h('div', { class: 't' }, title), h('div', { class: 's' }, sub)), icon('chevron', 18));
}

export function overview(params) {
  var id = params[0];
  var info = data.moduleInfo(id);
  if (!info) return notFound();
  setTitle(info.short);
  var wrap = h('div', null, crumb('#/learn', 'All modules'), loading());
  data.loadModule(id).then(function (m) {
    var p = moduleParts(info, store.state);
    var v = moduleMastery(info, store.state);
    var color = areaColor(info.area);
    var out = h('div', null, crumb('#/learn', 'All modules'), modnav.strip(id),
      h('div', { class: 'mod-head' }, cell(v, color, 64),
        h('div', null, h('h1', null, info.number + '. ' + info.title), h('p', { class: 'sum' }, m.summary))),
      h('div', { class: 'stats' },
        h('div', { class: 'stat' }, h('div', { class: 'v' }, Math.round(v * 100) + '%'), h('div', { class: 'k' }, 'Mastery')),
        h('div', { class: 'stat' }, h('div', { class: 'v' }, p.lessonsDone + '/' + info.lessons.length), h('div', { class: 'k' }, 'Lessons done')),
        h('div', { class: 'stat' }, h('div', { class: 'v' }, fmtMinutes(info.minutes)), h('div', { class: 'k' }, 'Reading time'))),
      h('section', { class: 'section' }, h('h2', null, 'Lessons'),
        h('ol', { class: 'lessons' }, info.lessons.map(function (l, i) {
          var done = !!store.get('lessons', l.id);
          return h('li', null, h('a', { class: 'lesson-row', href: lessonHref(l.id) },
            h('span', { class: 'num' }, String(i + 1)), h('span', null, l.title),
            done ? h('span', { class: 'done' }, icon('check', 16), 'Done') : h('span', { class: 'mins' }, l.minutes + ' min')));
        }))),
      h('section', { class: 'section' }, h('h2', null, 'Practise'),
        h('div', { class: 'tool-links' },
          toolLink('#/module/' + id + '/practical', 'wrench', 'Practical task sheet', m.practical ? m.practical.title : ''),
          toolLink('#/module/' + id + '/summary', 'list', 'Cheat sheet', 'The key facts on one page'),
          toolLink('#/quiz/start/' + id, 'quiz', 'Quiz this module', info.quiz + ' questions with explanations'),
          toolLink('#/cards/run/' + id, 'cards', 'Flashcards', info.cards + ' cards'),
          info.cases && info.cases.length ? toolLink('#/diagnose/case/' + info.cases[0].id, 'diagnose', 'Diagnose a fault', plural(info.cases.length, 'case', 'cases') + ': find it, fix it, prove it') : null)),
      h('section', { class: 'section' }, h('h2', null, 'By the end you can'),
        h('ul', { class: 'outcomes' }, m.outcomes.map(function (o) { return h('li', null, rich(o)); }))));
    wrap.replaceWith(out);
    wrap = out;
  }).catch(function (e) { wrap.replaceWith(failure(e)); });
  return wrap;
}

export function lesson(params) {
  var id = params[0], n = parseInt(params[2], 10);
  var info = data.moduleInfo(id);
  if (!info || !info.lessons[n - 1]) return notFound();
  var lid = lessonId(id, n);
  var holder = h('div', null, crumb('#/module/' + id, info.short), loading());
  data.loadModule(id).then(function (m) {
    var l = m.lessons[n - 1];
    setTitle(l.title);
    store.set('kv', 'last:lesson', lid);
    var done = !!store.get('lessons', lid);
    var bar = h('nav', { class: 'steps-bar', 'aria-label': 'Lessons in this module' }, info.lessons.map(function (x, i) {
      var cls = store.get('lessons', x.id) ? 'done' : '';
      return h('a', { href: lessonHref(x.id), class: cls, 'aria-current': i + 1 === n ? 'step' : null, 'aria-label': 'Lesson ' + (i + 1) + ': ' + x.title });
    }));
    var doneBtn = h('button', { class: 'btn ' + (done ? '' : 'primary'), type: 'button' }, icon('check', 18), done ? 'Completed' : 'Mark as done');
    var nextHref = n < info.lessons.length ? lessonHref(lessonId(id, n + 1)) : '#/module/' + id;
    doneBtn.addEventListener('click', function () {
      if (store.get('lessons', lid)) {
        store.remove('lessons', lid);
        doneBtn.classList.add('primary');
        doneBtn.lastChild.textContent = 'Mark as done';
        bar.children[n - 1].classList.remove('done');
      } else {
        store.set('lessons', lid, { done: Date.now() });
        store.bumpDay('lessons', 1);
        store.requestPersistence();
        window.location.hash = nextHref;
      }
    });
    var out = h('article', { class: 'reader' }, crumb('#/module/' + id, 'Module ' + info.number + ': ' + info.short), modnav.strip(id),
      h('h1', null, l.title),
      h('div', { class: 'byline' }, h('span', null, 'Lesson ' + n + ' of ' + info.lessons.length), h('span', null, l.minutes + ' min read')),
      bar, renderBlocks(l.body),
      h('div', { class: 'reader-nav' },
        n > 1 ? h('a', { class: 'btn', href: lessonHref(lessonId(id, n - 1)) }, icon('back', 18), 'Previous') : null,
        doneBtn,
        h('a', { class: 'btn ' + (done ? 'primary' : ''), href: nextHref }, n < info.lessons.length ? 'Next lesson' : 'Finish module', icon('chevron', 18))),
      h('div', { class: 'btn-row' },
        h('a', { class: 'btn small', href: '#/quiz/start/' + id }, icon('quiz', 16), 'Quiz this module')));
    holder.replaceWith(out);
    holder = out;
  }).catch(function (e) { holder.replaceWith(failure(e)); });
  return holder;
}

export function practical(params) {
  var id = params[0];
  var info = data.moduleInfo(id);
  if (!info) return notFound();
  var holder = h('div', null, crumb('#/module/' + id, info.short), loading());
  data.loadModule(id).then(function (m) {
    var p = m.practical;
    if (!p) { holder.replaceWith(h('div', null, crumb('#/module/' + id, info.short), h('p', { class: 'empty' }, 'This module has no practical task sheet.'))); return; }
    setTitle('Practical: ' + info.short);
    var saved = store.get('practical', id) || { steps: {}, checks: {} };
    function persist() { store.set('practical', id, saved); }
    function list(kind, items) {
      return h('div', null, items.map(function (txt, i) {
        var cid = 'p-' + kind + '-' + i;
        var cb = h('input', { type: 'checkbox', id: cid, checked: saved[kind][i] ? true : null });
        cb.addEventListener('change', function () { if (cb.checked) saved[kind][i] = 1; else delete saved[kind][i]; persist(); });
        return h('div', { class: 'check-row' }, cb, h('label', { for: cid }, rich(txt)));
      }));
    }
    var out = h('div', { class: 'reader' }, crumb('#/module/' + id, info.short),
      h('h1', null, p.title),
      h('div', { class: 'byline' }, h('span', null, 'Practical task sheet'), h('span', null, p.time)),
      h('p', { style: { 'margin-top': '1rem' } }, rich(p.objective)),
      h('section', { class: 'sheet danger' }, h('h2', null, 'Safety first'), h('ul', null, p.safety.map(function (s) { return h('li', null, rich(s)); }))),
      h('section', { class: 'sheet' }, h('h2', null, 'Tools and materials'), h('ul', null, p.tools.map(function (s) { return h('li', null, rich(s)); }))),
      h('section', { class: 'sheet' }, h('h2', null, 'Steps'), list('steps', p.steps)),
      h('section', { class: 'sheet' }, h('h2', null, 'Check yourself'), list('checks', p.checks)),
      h('div', { class: 'btn-row no-print' },
        h('button', { class: 'btn', type: 'button', onclick: function () { window.print(); } }, icon('print', 18), 'Print this sheet'),
        h('a', { class: 'btn', href: '#/module/' + id }, 'Back to module')));
    holder.replaceWith(out);
    holder = out;
  }).catch(function (e) { holder.replaceWith(failure(e)); });
  return holder;
}

export function summary(params) {
  var id = params[0];
  var info = data.moduleInfo(id);
  if (!info) return notFound();
  var holder = h('div', null, crumb('#/module/' + id, info.short), loading());
  data.loadModule(id).then(function (m) {
    setTitle('Cheat sheet: ' + info.short);
    var out = h('div', { class: 'reader' }, crumb('#/module/' + id, info.short),
      h('h1', null, 'Cheat sheet'), h('div', { class: 'byline' }, h('span', null, info.number + '. ' + info.title)),
      h('ul', { class: 'prose', style: { 'margin-top': '1.2rem' } }, m.cheatsheet.map(function (s) { return h('li', null, rich(s)); })),
      h('div', { class: 'btn-row no-print' },
        h('button', { class: 'btn', type: 'button', onclick: function () { window.print(); } }, icon('print', 18), 'Print')));
    holder.replaceWith(out);
    holder = out;
  }).catch(function (e) { holder.replaceWith(failure(e)); });
  return holder;
}

function notFound() {
  return h('div', null, crumb('#/learn', 'All modules'), h('p', { class: 'empty' }, 'That page does not exist.'));
}

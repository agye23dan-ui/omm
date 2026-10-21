import { h, rich } from '../dom.js';
import { icon } from '../icons.js';
import * as store from '../store.js';
import * as data from '../data.js';
import { mulberry32, newSeed, plural } from '../lib.js';
import { crumb, pageHead, setTitle, loading, failure, barRow } from '../ui.js';
import { optionList, reveal, feedback } from './question.js';
import { diagram } from '../diagrams-more.js';
import { lessonLink } from './quiz.js';
import { WEIGHTS, STAGES, MIN_CHECKS, LEVEL_LABEL, PASS_MARK, newAttempt, checkById, decisionFor, nextStage, scoreCase, modelReport, mergeBest } from '../diagnose.js';

var KEY = 'session:diag';
var UNSAFE_NOTE = 'it risks injury, damage or a hidden fault.';
var STAGE_LABEL = { investigate: 'Investigate', area: 'Narrow down', fault: 'Find the fault', repair: 'Repair', verify: 'Prove it' };
var RATING = {
  competent: ['Competent', 'You found the evidence, reached the right fault and worked safely.'],
  nearly: ['Nearly there', 'Some of the route was right. Read the review below and try the case again.'],
  practice: ['More practice needed', 'Work through the review below, read the lesson and try the case again.']
};

function resultKey(id) { return 'diag:' + id; }

function levelChip(level) {
  return h('span', { class: 'chip' }, LEVEL_LABEL[level]);
}

/* ---------- Hub ---------- */

export function hub() {
  setTitle('Diagnose');
  var idx = data.index();
  var root = h('div', null, pageHead('Diagnose', 'Work a fault the way a technician does: read the report, run checks, narrow it down, name the fault, repair it and prove it is fixed.'));
  root.appendChild(diagram('diagnosis-loop'));
  var sess = store.get('kv', KEY);
  if (sess && sess.stage !== 'done' && data.moduleInfo(sess.id.slice(0, 3))) {
    var info = findInfo(sess.id);
    if (info) {
      root.appendChild(h('div', { class: 'banner' }, icon('clock'), h('p', null, 'You have a case in progress: ' + info.title + '.'),
        h('a', { class: 'btn small', href: '#/diagnose/case/' + sess.id }, 'Resume')));
    }
  }
  var total = 0, done = 0;
  idx.order.forEach(function (id) {
    idx.modules[id].cases.forEach(function (c) { total++; var r = store.get('kv', resultKey(c.id)); if (r && r.competent) done++; });
  });
  root.appendChild(h('p', { class: 'small muted' }, done + ' of ' + plural(total, 'case', 'cases') + ' completed competently. Scoring: ' + WEIGHTS.investigate + ' points for the evidence you gather, then ' + (WEIGHTS.area + WEIGHTS.fault + WEIGHTS.repair + WEIGHTS.verify) + ' for your decisions. Running an unsafe check stops a pass.'));
  idx.order.forEach(function (id) {
    var m = idx.modules[id];
    if (!m.cases.length) return;
    root.appendChild(h('section', { class: 'section' }, h('h2', null, m.number + '. ' + m.short),
      h('ul', { class: 'mlist' }, m.cases.map(function (c) {
        var r = store.get('kv', resultKey(c.id));
        return h('li', null, h('a', { class: 'mrow', href: '#/diagnose/case/' + c.id },
          h('span', { class: 'pct' + (r && r.competent ? ' ok' : '') }, r ? String(r.best) : '–'),
          h('div', null, h('div', { class: 't' }, c.title), h('div', { class: 'meta' }, h('span', null, LEVEL_LABEL[c.level]), h('span', null, r ? plural(r.attempts, 'attempt', 'attempts') : 'Not tried'))),
          icon('chevron', 18)));
      }))));
  });
  return root;
}

function findInfo(caseId) {
  var info = data.moduleInfo(caseId.slice(0, 3));
  if (!info) return null;
  for (var i = 0; i < info.cases.length; i++) if (info.cases[i].id === caseId) return info.cases[i];
  return null;
}

/* ---------- One case ---------- */

export function run(params) {
  var caseId = params[0];
  var info = data.moduleInfo(caseId.slice(0, 3));
  if (!info || !findInfo(caseId)) return h('div', null, crumb('#/diagnose', 'Diagnose'), h('p', { class: 'empty' }, 'That case does not exist.'));
  var holder = h('div', null, crumb('#/diagnose', 'All cases'), loading());
  data.loadCases(info.id).then(function () {
    var c = data.findCase(caseId);
    var attempt = store.get('kv', KEY);
    if (!attempt || attempt.id !== caseId) {
      attempt = newAttempt(c, mulberry32(newSeed()), Date.now());
      store.set('kv', KEY, attempt);
    }
    setTitle(c.title);
    function save() { return store.set('kv', KEY, attempt); }
    function go(stage) { attempt.stage = stage; save(); draw(); window.scrollTo(0, 0); }
    function restart() { attempt = newAttempt(c, mulberry32(newSeed()), Date.now()); save(); draw(); window.scrollTo(0, 0); }

    function draw() {
      holder.replaceChildren(attempt.stage === 'done' ? resultView(c, info, attempt, restart) : workView(c, info, attempt, { save: save, go: go, redraw: draw }));
      var first = holder.querySelector('h1');
      if (first) { first.setAttribute('tabindex', '-1'); }
    }
    draw();
  }).catch(function (e) { holder.replaceChildren(failure(e)); });
  return holder;
}

function header(c, info) {
  return [crumb('#/diagnose', 'All cases'),
    h('div', { class: 'qhead' }, h('span', { class: 'chip' }, info.short), levelChip(c.level)),
    h('h1', null, c.title)];
}

function stepper(stage) {
  var cur = STAGES.indexOf(stage);
  return h('ol', { class: 'dsteps', 'aria-label': 'Stages' }, STAGES.map(function (s, i) {
    return h('li', { class: i < cur ? 'done' : (i === cur ? 'now' : ''), 'aria-current': i === cur ? 'step' : null }, h('span', { class: 'n' }, String(i + 1)), h('span', { class: 'l' }, STAGE_LABEL[s]));
  }));
}

function jobCard(c) {
  return h('aside', { class: 'jobcard' }, h('div', { class: 'label' }, icon('list', 18), 'Job card'), h('p', null, rich(c.report)));
}

function findings(c, attempt) {
  if (!attempt.run.length) return null;
  return h('section', { class: 'findings', 'aria-label': 'What you have found' }, h('h2', null, 'What you have found'),
    h('ul', null, attempt.run.map(function (id) {
      var k = checkById(c, id);
      return h('li', { class: k.type === 'unsafe' ? 'warn' : '' },
        h('div', { class: 'what' }, k.type === 'unsafe' ? icon('warning', 16) : null, k.label),
        h('div', { class: 'got' }, rich(k.result)));
    })));
}

function workView(c, info, attempt, ctl) {
  var root = h('div', { class: 'reader diag' }, header(c, info), stepper(attempt.stage), jobCard(c), findings(c, attempt));
  if (attempt.stage === 'investigate') {
    var left = attempt.orders.checks.filter(function (id) { return attempt.run.indexOf(id) === -1; });
    root.appendChild(h('section', { class: 'section' }, h('h2', null, 'Choose a check'),
      h('p', { class: 'muted small' }, 'Every check takes time. Run the ones that help, and skip the ones that do not. Some actions are unsafe: running one will cost you points and stop a pass.'),
      left.length ? h('div', { class: 'checks' }, left.map(function (id) {
        var k = checkById(c, id);
        var b = h('button', { class: 'check-btn', type: 'button' }, h('span', null, k.label), icon('chevron', 16));
        b.addEventListener('click', function () { attempt.run.push(id); ctl.save(); ctl.redraw(); focusLatest(); });
        return b;
      })) : h('p', { class: 'empty' }, 'You have run every check.')));
    var enough = attempt.run.length >= MIN_CHECKS;
    var next = h('button', { class: 'btn primary', type: 'button', disabled: enough ? null : true }, 'Narrow it down', icon('chevron', 18));
    next.addEventListener('click', function () { ctl.go('area'); });
    root.appendChild(h('div', { class: 'qfoot' }, enough ? null : h('span', { class: 'muted small' }, 'Run at least ' + MIN_CHECKS + ' checks first.'), h('span', { class: 'spacer' }), next));
    return root;
  }
  var d = decisionFor(c, attempt.stage);
  var picked = attempt[d.key];
  var order = attempt.orders[d.key];
  var item = { order: order, pick: picked === null ? null : order.indexOf(picked) };
  var q = { options: d.options, answer: d.answer };
  var list = optionList(item, q, { reveal: picked !== null, onPick: choose });
  var fb = h('div', null);
  var cont = h('button', { class: 'btn primary', type: 'button' }, attempt.stage === 'verify' ? 'See my result' : 'Continue', icon('chevron', 18));
  cont.addEventListener('click', function () { ctl.go(nextStage(attempt.stage)); });
  var foot = h('div', { class: 'qfoot' }, h('span', { class: 'spacer' }));
  function choose(pos) {
    if (attempt[d.key] !== null) return;
    attempt[d.key] = order[pos];
    ctl.save();
    reveal(list, pos);
    fb.appendChild(feedback(pos === list.answerPos, { explain: d.why }));
    foot.appendChild(cont);
    cont.focus();
  }
  if (picked !== null) { fb.appendChild(feedback(item.pick === list.answerPos, { explain: d.why })); foot.appendChild(cont); }
  root.appendChild(h('div', { class: 'qcard' }, h('p', { class: 'qtext' }, d.prompt), list.el, fb));
  root.appendChild(foot);
  return root;
}

function focusLatest() {
  var li = document.querySelectorAll('.findings li');
  if (li.length) li[li.length - 1].scrollIntoView({ block: 'nearest' });
}

/* ---------- Result ---------- */

function resultView(c, info, attempt, restart) {
  var sc = scoreCase(c, attempt);
  // Save once per attempt.
  if (!attempt.saved) {
    attempt.saved = true;
    store.set('kv', KEY, attempt);
    store.set('kv', resultKey(c.id), mergeBest(store.get('kv', resultKey(c.id)), sc, Date.now()));
    store.bumpDay('q', 1);
    store.requestPersistence();
  }
  var r = RATING[sc.rating];
  var out = h('div', { class: 'reader diag' }, header(c, info),
    h('div', { class: 'score' }, h('span', { class: 'n' }, String(sc.total)), h('span', { class: 'of' }, 'out of 100 · pass mark ' + PASS_MARK)),
    h('div', { class: 'banner' + (sc.rating === 'competent' ? '' : ' warn') }, icon(sc.rating === 'competent' ? 'check' : 'flag'), h('p', null, h('strong', null, r[0] + '. '), r[1])));

  if (sc.unsafe) out.appendChild(h('div', { class: 'banner warn' }, icon('warning'), h('p', null, 'You ran ' + plural(sc.unsafe, 'unsafe action', 'unsafe actions') + '. In the workshop that could injure you or damage the machine, so it stops a pass however well you score.')));
  if (sc.guessed) out.appendChild(h('div', { class: 'banner warn' }, icon('flag'), h('p', null, 'You named the right fault, but you ran fewer than half of the key checks. Name the fault from evidence, not from a guess.')));

  out.appendChild(h('section', { class: 'section' }, h('h2', null, 'Score breakdown'), h('div', { class: 'bars' }, [
    barRow('Evidence gathered (' + sc.found + ' of ' + sc.keys + ' key checks)', sc.parts.investigate / WEIGHTS.investigate * 100, sc.parts.investigate < WEIGHTS.investigate * 0.7),
    barRow('Narrowing down', sc.parts.area / WEIGHTS.area * 100, !sc.parts.area),
    barRow('Naming the fault', sc.parts.fault / WEIGHTS.fault * 100, !sc.parts.fault),
    barRow('Choosing the repair', sc.parts.repair / WEIGHTS.repair * 100, !sc.parts.repair),
    barRow('Proving the fix', sc.parts.verify / WEIGHTS.verify * 100, !sc.parts.verify)])));

  var runChecks = attempt.run.map(function (id) { return checkById(c, id); });
  var bad = runChecks.filter(function (k) { return k.type === 'unsafe' || k.type === 'low'; });
  if (bad.length) {
    out.appendChild(h('section', { class: 'section' }, h('h2', null, 'Checks that cost you points'),
      bad.map(function (k) { return h('div', { class: 'review-item' }, h('div', { class: 'q' }, k.label), h('p', { class: 'small muted' }, rich(k.result)), h('div', { class: 'a no' }, k.type === 'unsafe' ? 'Unsafe: ' + UNSAFE_NOTE : 'Low value: it did not help find this fault.')); })));
  }
  if (sc.missed.length) {
    out.appendChild(h('section', { class: 'section' }, h('h2', null, 'Key checks you missed'),
      sc.missed.map(function (k) { return h('div', { class: 'review-item' }, h('div', { class: 'q' }, k.label), h('p', { class: 'small muted' }, rich(k.result))); })));
  }

  var decisions = ['area', 'fault', 'repair', 'verify'].map(function (key) {
    var d = decisionFor(c, key);
    var right = attempt[key] === d.answer;
    return h('div', { class: 'review-item' }, h('div', { class: 'q' }, STAGE_LABEL[key] + ': ' + d.prompt),
      right ? null : h('div', { class: 'a no' }, 'Your answer: ' + (attempt[key] === null ? 'none' : d.options[attempt[key]])),
      h('div', { class: 'a ok' }, 'Correct: ' + d.options[d.answer]), h('p', { class: 'small muted' }, rich(d.why)));
  });
  out.appendChild(h('section', { class: 'section' }, h('h2', null, 'Your decisions'), decisions));

  var rep = modelReport(c);
  out.appendChild(h('section', { class: 'section' }, h('h2', null, 'The service report for this job'),
    h('div', { class: 'jobcard report' },
      h('p', null, h('strong', null, 'Fault: '), rich(rep.fault)),
      h('p', null, h('strong', null, 'Action: '), rich(rep.action)),
      h('p', null, h('strong', null, 'Test: '), rich(rep.test)))));

  out.appendChild(h('div', { class: 'btn-row' },
    h('button', { class: 'btn primary', type: 'button', onclick: restart }, 'Try this case again'),
    h('a', { class: 'btn', href: '#/diagnose' }, 'All cases'),
    h('a', { class: 'btn', href: lessonLink(c.lesson) }, 'Read: ' + data.lessonTitle(c.lesson))));
  return out;
}

/* Run with: node --test tests/ */
'use strict';
const test = require('node:test');
const assert = require('node:assert');

async function mods() {
  return {
    lib: await import('../js/lib.js'),
    srs: await import('../js/srs.js'),
    eng: await import('../js/engine.js'),
    store: await import('../js/store.js')
  };
}

test('review moves boxes up on right and resets on wrong', async () => {
  const { srs } = await mods();
  const DAY = 86400000;
  let s = srs.reviewQuestion(null, true, 0);
  assert.strictEqual(s.box, 2);
  assert.strictEqual(s.due, 3 * DAY);
  s = srs.reviewQuestion(s, true, 0);
  assert.strictEqual(s.box, 3);
  s = srs.reviewQuestion(s, false, 0);
  assert.strictEqual(s.box, 1);
  assert.strictEqual(s.wrong, 1);
  for (let i = 0; i < 10; i++) s = srs.reviewQuestion(s, true, 0);
  assert.strictEqual(s.box, 5);
});

test('card grades', async () => {
  const { srs } = await mods();
  assert.strictEqual(srs.reviewCard(null, 'easy', 0).box, 3);
  assert.strictEqual(srs.reviewCard(null, 'good', 0).box, 2);
  assert.strictEqual(srs.reviewCard({ box: 4, reps: 3, lapses: 0 }, 'again', 0).box, 1);
  assert.strictEqual(srs.reviewCard({ box: 4, reps: 3, lapses: 0 }, 'easy', 0).box, 5);
});

test('streak counts back from today or yesterday', async () => {
  const { lib } = await mods();
  const days = { '2026-10-18': { q: 3 }, '2026-10-19': { cards: 1 } };
  assert.strictEqual(lib.streak(days, '2026-10-19'), 2);
  assert.strictEqual(lib.streak(days, '2026-10-20'), 2);
  assert.strictEqual(lib.streak(days, '2026-10-21'), 0);
  assert.strictEqual(lib.longestStreak(days), 2);
});

test('tokenize handles bold and code', async () => {
  const { lib } = await mods();
  const t = lib.tokenize('a **b** `c` d');
  assert.deepStrictEqual(t.map(x => x.t), ['text', 'b', 'text', 'code', 'text']);
});

test('exam draws evenly and never repeats a question', async () => {
  const { lib, eng } = await mods();
  const by = {};
  for (let m = 1; m <= 5; m++) by['m0' + m] = Array.from({ length: 10 }, (_, i) => ({ id: 'm0' + m + '-q' + (i + 10) }));
  const picked = eng.buildExam(by, 20, lib.mulberry32(5));
  assert.strictEqual(picked.length, 20);
  assert.strictEqual(new Set(picked.map(q => q.id)).size, 20);
  const counts = {};
  picked.forEach(q => { counts[q.id.slice(0, 3)] = (counts[q.id.slice(0, 3)] || 0) + 1; });
  Object.values(counts).forEach(c => assert.strictEqual(c, 4));
});

test('shuffled options keep track of the right answer', async () => {
  const { lib, eng } = await mods();
  const q = { options: ['a', 'b', 'c', 'd'], answer: 2 };
  for (let s = 1; s < 50; s++) {
    const r = eng.shuffleOptions(q, lib.mulberry32(s));
    assert.strictEqual(r.options[r.answerPos], 'c');
  }
});

test('score and pass mark', async () => {
  const { eng } = await mods();
  const sc = eng.scoreItems([{ id: 'm01-q01', correct: true }, { id: 'm01-q02', correct: false }, { id: 'm02-q01', correct: true }, { id: 'm02-q02', correct: true }]);
  assert.strictEqual(sc.pct, 75);
  assert.ok(eng.passed(70, 70));
  assert.ok(!eng.passed(69, 70));
});

test('backup validation rejects bad files', async () => {
  const { store } = await mods();
  assert.throws(() => store.checkBackup({}));
  assert.throws(() => store.checkBackup({ app: 'office-machine-mechanic', schema: 2, data: {} }));
  assert.throws(() => store.checkBackup({ app: 'office-machine-mechanic', schema: 1, data: { q: { x: { box: 9 } } } }));
  assert.ok(store.checkBackup({ app: 'office-machine-mechanic', schema: 1, data: { q: { x: { box: 3 } } } }));
});

/* ---------- Diagnosis cases ---------- */

const CASE = {
  id: 'm99-d1', title: 'Test case', level: 1, lesson: 'm99-l1', report: 'x',
  checks: [
    { id: 'k1', label: 'a', result: 'r', type: 'key' },
    { id: 'k2', label: 'b', result: 'r', type: 'key' },
    { id: 'k3', label: 'c', result: 'r', type: 'key' },
    { id: 'k4', label: 'd', result: 'r', type: 'key' },
    { id: 'u1', label: 'e', result: 'r', type: 'useful' },
    { id: 'l1', label: 'f', result: 'r', type: 'low' },
    { id: 'l2', label: 'g', result: 'r', type: 'low' },
    { id: 'x1', label: 'h', result: 'r', type: 'unsafe' }
  ],
  areas: ['a', 'b', 'c', 'd'], area: 0,
  faults: ['a', 'b', 'c', 'd'], fault: 1,
  repairs: ['a', 'b', 'c', 'd'], repair: 2,
  verify: ['a', 'b', 'c', 'd'], verifyAns: 3,
  explain: { area: '', fault: '', repair: '', verify: '' }
};

function attempt(run, picks) {
  return Object.assign({ run: run, area: null, fault: null, repair: null, verify: null }, picks || {});
}

test('a perfect diagnosis scores 100 and is competent', async () => {
  const { dx } = { dx: await import('../js/diagnose.js') };
  const s = dx.scoreCase(CASE, attempt(['k1', 'k2', 'k3', 'k4'], { area: 0, fault: 1, repair: 2, verify: 3 }));
  assert.strictEqual(s.total, 100);
  assert.strictEqual(s.rating, 'competent');
  assert.strictEqual(s.missed.length, 0);
});

test('an unsafe check stops a pass even with every right answer', async () => {
  const dx = await import('../js/diagnose.js');
  const s = dx.scoreCase(CASE, attempt(['k1', 'k2', 'k3', 'k4', 'x1'], { area: 0, fault: 1, repair: 2, verify: 3 }));
  assert.strictEqual(s.unsafe, 1);
  assert.strictEqual(s.parts.investigate, 28);
  assert.strictEqual(s.total, 88);
  assert.strictEqual(s.rating, 'nearly');
});

test('low-value checks cost points and missed key checks are listed', async () => {
  const dx = await import('../js/diagnose.js');
  const s = dx.scoreCase(CASE, attempt(['k1', 'k2', 'l1', 'l2'], { area: 0, fault: 1, repair: 2, verify: 3 }));
  assert.strictEqual(s.parts.investigate, 14);
  assert.deepStrictEqual(s.missed.map(function (k) { return k.id; }), ['k3', 'k4']);
});

test('naming the fault from a guess is flagged', async () => {
  const dx = await import('../js/diagnose.js');
  const s = dx.scoreCase(CASE, attempt(['k1'], { area: 0, fault: 1, repair: 2, verify: 3 }));
  assert.strictEqual(s.guessed, true);
  const careful = dx.scoreCase(CASE, attempt(['k1', 'k2', 'k3'], { area: 0, fault: 1, repair: 2, verify: 3 }));
  assert.strictEqual(careful.guessed, false);
});

test('undecided stages score zero and the investigation never goes below zero', async () => {
  const dx = await import('../js/diagnose.js');
  const s = dx.scoreCase(CASE, attempt(['x1', 'x1', 'l1', 'l2']));
  assert.strictEqual(s.parts.investigate, 0);
  assert.strictEqual(s.total, 0);
  assert.strictEqual(s.rating, 'practice');
});

test('stages run in order and finish', async () => {
  const dx = await import('../js/diagnose.js');
  assert.strictEqual(dx.nextStage('investigate'), 'area');
  assert.strictEqual(dx.nextStage('repair'), 'verify');
  assert.strictEqual(dx.nextStage('verify'), 'done');
  assert.strictEqual(dx.decisionFor(CASE, 'repair').answer, 2);
});

test('a new attempt shuffles every list without losing items', async () => {
  const dx = await import('../js/diagnose.js');
  const lib = await import('../js/lib.js');
  const a = dx.newAttempt(CASE, lib.mulberry32(7), 0);
  assert.strictEqual(a.stage, 'investigate');
  assert.deepStrictEqual(a.orders.checks.slice().sort(), CASE.checks.map(function (k) { return k.id; }).sort());
  ['area', 'fault', 'repair', 'verify'].forEach(function (k) { assert.deepStrictEqual(a.orders[k].slice().sort(), [0, 1, 2, 3]); });
});

test('best score and competence are kept across attempts', async () => {
  const dx = await import('../js/diagnose.js');
  const first = dx.mergeBest(null, { total: 80, rating: 'competent' }, 1);
  assert.deepStrictEqual([first.best, first.attempts, first.competent], [80, 1, true]);
  const second = dx.mergeBest(first, { total: 40, rating: 'practice' }, 2);
  assert.deepStrictEqual([second.best, second.last, second.attempts, second.competent], [80, 40, 2, true]);
});

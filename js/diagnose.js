/*
 * Diagnosis cases. Pure functions: pass in a case and what the learner did, get a score back.
 *
 * A case is worked in five stages: run checks, narrow down to an area, name the fault, choose
 * the repair, choose how to prove it is fixed. The route matters as well as the answer.
 */
import { shuffle } from './lib.js';

export const WEIGHTS = { investigate: 40, area: 15, fault: 20, repair: 15, verify: 10 };
export const STAGES = ['investigate', 'area', 'fault', 'repair', 'verify'];
export const MIN_CHECKS = 2;
export const LEVEL_LABEL = { 1: 'Straightforward', 2: 'Typical', 3: 'Tricky' };
export const PASS_MARK = 70;

/* Points taken off for each unsafe or low-value check that was run. */
const UNSAFE_PENALTY = 12;
const LOW_PENALTY = 3;

/* Random display order for the checks and for each set of answers, fixed for one attempt. */
export function buildOrders(c, rng) {
  return {
    checks: shuffle(c.checks.map(function (k) { return k.id; }), rng),
    area: shuffle([0, 1, 2, 3], rng),
    fault: shuffle([0, 1, 2, 3], rng),
    repair: shuffle([0, 1, 2, 3], rng),
    verify: shuffle([0, 1, 2, 3], rng)
  };
}

export function newAttempt(c, rng, now) {
  return {
    id: c.id,
    started: now,
    stage: 'investigate',
    run: [],
    area: null, fault: null, repair: null, verify: null,
    orders: buildOrders(c, rng)
  };
}

export function checkById(c, id) {
  for (var i = 0; i < c.checks.length; i++) if (c.checks[i].id === id) return c.checks[i];
  return null;
}

/* The decision stages as { key, prompt, options, answer }, for the view to render. */
export function decisionFor(c, key) {
  switch (key) {
    case 'area': return { key: key, prompt: 'Which part of the machine do your findings point to?', options: c.areas, answer: c.area, why: c.explain.area };
    case 'fault': return { key: key, prompt: 'What is the fault?', options: c.faults, answer: c.fault, why: c.explain.fault };
    case 'repair': return { key: key, prompt: 'What repair do you carry out?', options: c.repairs, answer: c.repair, why: c.explain.repair };
    case 'verify': return { key: key, prompt: 'How do you prove the job is done?', options: c.verify, answer: c.verifyAns, why: c.explain.verify };
    default: return null;
  }
}

export function nextStage(stage) {
  var i = STAGES.indexOf(stage);
  return i >= 0 && i < STAGES.length - 1 ? STAGES[i + 1] : 'done';
}

/* Scores a finished or partly finished attempt. Anything not yet decided scores zero. */
export function scoreCase(c, attempt) {
  var keys = 0;
  c.checks.forEach(function (k) { if (k.type === 'key') keys++; });
  var found = 0, unsafe = 0, low = 0, useful = 0;
  attempt.run.forEach(function (id) {
    var k = checkById(c, id);
    if (!k) return;
    if (k.type === 'key') found++;
    else if (k.type === 'unsafe') unsafe++;
    else if (k.type === 'low') low++;
    else useful++;
  });
  var invest = Math.max(0, Math.round(WEIGHTS.investigate * found / keys - UNSAFE_PENALTY * unsafe - LOW_PENALTY * low));
  var area = attempt.area === c.area ? WEIGHTS.area : 0;
  var fault = attempt.fault === c.fault ? WEIGHTS.fault : 0;
  var repair = attempt.repair === c.repair ? WEIGHTS.repair : 0;
  var verify = attempt.verify === c.verifyAns ? WEIGHTS.verify : 0;
  var total = invest + area + fault + repair + verify;
  var missed = c.checks.filter(function (k) { return k.type === 'key' && attempt.run.indexOf(k.id) === -1; });
  var rating;
  if (total >= PASS_MARK && unsafe === 0) rating = 'competent';
  else if (total >= 50) rating = 'nearly';
  else rating = 'practice';
  return {
    total: total,
    parts: { investigate: invest, area: area, fault: fault, repair: repair, verify: verify },
    keys: keys, found: found, unsafe: unsafe, low: low, useful: useful,
    missed: missed,
    guessed: attempt.fault === c.fault && found * 2 < keys,
    rating: rating
  };
}

/* The service report a technician would write for the correct route. */
export function modelReport(c) {
  return {
    fault: c.faults[c.fault],
    action: c.repairs[c.repair],
    test: c.verify[c.verifyAns]
  };
}

/* Keeps the better of two results for a case. */
export function mergeBest(prev, score, now) {
  var best = prev && prev.best > score.total ? prev.best : score.total;
  return {
    best: best,
    last: score.total,
    attempts: (prev ? prev.attempts : 0) + 1,
    competent: !!(prev && prev.competent) || score.rating === 'competent',
    ts: now
  };
}

#!/usr/bin/env node
/*
 * Checks module content against docs/COURSE-SPEC.md.
 *
 *   node tests/validate.js           check every module
 *   node tests/validate.js m03 m07   check only these
 *
 * Exits with status 1 when any error is found. Warnings never fail the run.
 */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.resolve(__dirname, '..');

var DIAGRAM_HOMES = {
  'ohm-triangle': ['m03'],
  'series-parallel': ['m03'],
  'rectifier-chain': ['m07'],
  'smps-block': ['m07'],
  'xerography-cycle': ['m13'],
  'network-topologies': ['m10'],
  'paper-path': ['m04', 'm13'],
  'hierarchy-controls': ['m01'],
  'warning-signs': ['m01'],
  'isolation-sequence': ['m01'],
  'screw-heads': ['m02'],
  'multimeter-panel': ['m02'],
  'scope-screen': ['m02'],
  'metric-prefixes': ['m02'],
  'ac-waveform': ['m03'],
  'live-neutral-earth': ['m03'],
  'diagnosis-loop': ['m03'],
  'half-split': ['m03'],
  'gear-ratio': ['m04'],
  'drive-types': ['m04'],
  'solder-joints': ['m05'],
  'diode-symbols': ['m06'],
  'transistor-switch': ['m06'],
  'rc-charging': ['m06'],
  'opamp-gain': ['m06'],
  'photo-interrupter': ['m06'],
  'power-rails-map': ['m07'],
  'binary-place-values': ['m08'],
  'logic-gates': ['m08'],
  'microcontroller-block': ['m08'],
  'os-layers': ['m09'],
  'boot-sequence': ['m09'],
  'network-layers': ['m10'],
  'rj45-t568': ['m10'],
  'fax-call-phases': ['m10'],
  'pc-architecture': ['m11'],
  'inkjet-head': ['m12'],
  'scanner-optics': ['m12', 'm13'],
  'repeating-defect': ['m12', 'm13'],
  'developer-unit': ['m13'],
  'fuser-cross-section': ['m13'],
  'mfp-structure': ['m14'],
  'scan-to-flow': ['m14'],
  'finisher-path': ['m14'],
  'receipt-printer-parts': ['m15'],
  'drawer-signal': ['m15'],
  'ean13': ['m15'],
  'support-levels': ['m16'],
  'remote-support-flow': ['m16'],
  'service-job-flow': ['m17'],
  'atm-layout': ['m18'],
  'note-dispenser-path': ['m18'],
  'atm-host-flow': ['m18']
};

var ALLOWED_KEYS = ['id', 'summary', 'outcomes', 'cheatsheet', 'lessons', 'practical', 'quiz', 'cards'];
var NOTE_KINDS = ['safety', 'tip', 'key'];
var BANNED = [
  /\bTODO\b/i, /\bTBD\b/i, /lorem ipsum/i, /placeholder/i, /\bxxx+\b/i, /as an ai\b/i,
  /\[citation/i, /\binsert (here|text|image)\b/i, /\bto be added\b/i, /\bfill in later\b/i
];

function load(ids) {
  var ctx = vm.createContext({ console: console });
  vm.runInContext('var OMM = {};', ctx);
  var courseSrc = fs.readFileSync(path.join(ROOT, 'data/course.js'), 'utf8');
  vm.runInContext(courseSrc, ctx, { filename: 'data/course.js' });
  var course = vm.runInContext('OMM.course', ctx);
  var all = course.modules.map(function (m) { return m.id; });
  ids = ids && ids.length ? ids : all;
  var loadErrors = [];
  ids.forEach(function (id) {
    var file = path.join(ROOT, 'data/modules', id + '.js');
    if (all.indexOf(id) === -1) { loadErrors.push(id + ': not a module id in data/course.js'); return; }
    if (!fs.existsSync(file)) { loadErrors.push(id + ': file data/modules/' + id + '.js is missing'); return; }
    try {
      vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: 'data/modules/' + id + '.js' });
    } catch (e) {
      loadErrors.push(id + ': could not run data/modules/' + id + '.js: ' + e.message);
    }
  });
  ids.forEach(function (id) {
    var cfile = path.join(ROOT, 'data/cases', id + '.js');
    if (!fs.existsSync(cfile)) return;
    try {
      vm.runInContext(fs.readFileSync(cfile, 'utf8'), ctx, { filename: 'data/cases/' + id + '.js' });
    } catch (e) {
      loadErrors.push(id + ': could not run data/cases/' + id + '.js: ' + e.message);
    }
  });
  // Copy out as plain JSON so later checks see ordinary objects.
  var modules = JSON.parse(vm.runInContext('JSON.stringify(OMM.modules)', ctx));
  var cases = JSON.parse(vm.runInContext('JSON.stringify(OMM.cases)', ctx));
  var devices = {};
  (course.devices || []).forEach(function (d) {
    var dfile = path.join(ROOT, 'data/devices', d.id + '.js');
    if (!fs.existsSync(dfile)) { loadErrors.push('device ' + d.id + ': file data/devices/' + d.id + '.js is missing'); return; }
    try {
      vm.runInContext(fs.readFileSync(dfile, 'utf8'), ctx, { filename: 'data/devices/' + d.id + '.js' });
    } catch (e) {
      loadErrors.push('device ' + d.id + ': could not run data/devices/' + d.id + '.js: ' + e.message);
    }
  });
  (course.devices || []).forEach(function (d) {
    var ifile = path.join(ROOT, 'data/install', d.id + '.js');
    if (!fs.existsSync(ifile)) { loadErrors.push('install ' + d.id + ': file data/install/' + d.id + '.js is missing'); return; }
    try {
      vm.runInContext(fs.readFileSync(ifile, 'utf8'), ctx, { filename: 'data/install/' + d.id + '.js' });
    } catch (e) {
      loadErrors.push('install ' + d.id + ': could not run data/install/' + d.id + '.js: ' + e.message);
    }
  });
  devices = JSON.parse(vm.runInContext('JSON.stringify(OMM.devices)', ctx));
  var installs = JSON.parse(vm.runInContext('JSON.stringify(OMM.installs)', ctx));
  var errorCodes = null;
  var efile = path.join(ROOT, 'data/errorcodes.js');
  if (fs.existsSync(efile)) {
    try {
      vm.runInContext(fs.readFileSync(efile, 'utf8'), ctx, { filename: 'data/errorcodes.js' });
      errorCodes = JSON.parse(vm.runInContext('JSON.stringify(OMM.errorCodes || null)', ctx));
    } catch (e) {
      loadErrors.push('errorcodes: could not run data/errorcodes.js: ' + e.message);
    }
  }
  return { course: course, modules: modules, cases: cases, devices: devices, installs: installs, errorCodes: errorCodes, ids: ids, loadErrors: loadErrors };
}

function words(s) {
  var t = String(s).replace(/\*\*|`/g, ' ').trim();
  return t ? t.split(/\s+/).length : 0;
}

function isStr(x) { return typeof x === 'string' && x.length > 0; }

function textProblems(s, where, err, warn) {
  if (typeof s !== 'string') { err(where + ': expected a string'); return; }
  if (s !== s.trim()) warn(where + ': has leading or trailing spaces');
  if (/<\/?[a-z][^>]*>/i.test(s)) err(where + ': contains an HTML tag');
  if ((s.match(/\*\*/g) || []).length % 2) err(where + ': unbalanced ** markup');
  if ((s.replace(/\*\*/g, '').match(/`/g) || []).length % 2) err(where + ': unbalanced ` markup');
  if (/\p{Extended_Pictographic}/u.test(s)) err(where + ': contains an emoji');
  if (/\s{2,}/.test(s.replace(/\n/g, ' '))) warn(where + ': contains a double space');
  BANNED.forEach(function (re) { if (re.test(s)) err(where + ': contains banned or unfinished wording (' + re + ')'); });
}

function validateModule(m, course, id) {
  var errors = [];
  var warnings = [];
  function err(msg) { errors.push(id + ': ' + msg); }
  function warn(msg) { warnings.push(id + ': ' + msg); }

  if (!m) { err('module did not register (call OMM.registerModule with id "' + id + '")'); return { errors: errors, warnings: warnings, stats: null }; }

  Object.keys(m).forEach(function (k) {
    if (ALLOWED_KEYS.indexOf(k) === -1) err('unexpected key "' + k + '" (title, area and syllabus come from data/course.js)');
  });
  if (m.id !== id) err('id is "' + m.id + '", expected "' + id + '"');

  // summary
  if (!isStr(m.summary)) err('summary is missing');
  else {
    textProblems(m.summary, 'summary', err, warn);
    var sw = words(m.summary);
    if (sw < 10 || sw > 50) err('summary should be 15 to 35 words, found ' + sw);
    else if (sw < 15 || sw > 35) warn('summary is ' + sw + ' words (aim for 15 to 35)');
  }

  // outcomes
  if (!Array.isArray(m.outcomes) || m.outcomes.length < 5 || m.outcomes.length > 6) err('outcomes needs 5 or 6 items');
  else m.outcomes.forEach(function (o, i) {
    textProblems(o, 'outcomes[' + i + ']', err, warn);
    if (!/^[A-Z]/.test(o)) err('outcomes[' + i + '] should start with a capital verb');
    if (words(o) > 30) warn('outcomes[' + i + '] is long');
  });

  // cheatsheet
  if (!Array.isArray(m.cheatsheet) || m.cheatsheet.length < 6 || m.cheatsheet.length > 10) err('cheatsheet needs 6 to 10 facts');
  else m.cheatsheet.forEach(function (c, i) {
    textProblems(c, 'cheatsheet[' + i + ']', err, warn);
    if (String(c).length > 150) err('cheatsheet[' + i + '] is over 140 characters');
  });

  // lessons
  var lessonIds = [];
  var totalWords = 0;
  var hasSafety = false;
  if (!Array.isArray(m.lessons) || m.lessons.length < 5 || m.lessons.length > 7) {
    err('lessons needs 5 to 7 items');
  } else {
    m.lessons.forEach(function (l, li) {
      var lid = id + '-l' + (li + 1);
      var where = 'lesson ' + (li + 1);
      if (l.id !== lid) err(where + ': id should be "' + lid + '", found "' + l.id + '"');
      lessonIds.push(l.id);
      if (!isStr(l.title) || l.title.length > 80) err(where + ': title missing or over 80 characters');
      else textProblems(l.title, where + ' title', err, warn);
      if (!(Number.isInteger(l.minutes) && l.minutes >= 5 && l.minutes <= 15)) err(where + ': minutes must be a whole number 5 to 15');
      if (!Array.isArray(l.body) || !l.body.length) { err(where + ': body is empty'); return; }
      if (l.body[0].t !== 'p') err(where + ': first block must be a paragraph that says what the lesson covers');
      var lw = 0, heads = 0, hasKeyTip = false;
      l.body.forEach(function (b, bi) {
        var bw = where + ' block ' + (bi + 1) + ' (' + b.t + ')';
        switch (b.t) {
          case 'p':
            textProblems(b.text, bw, err, warn); lw += words(b.text);
            if (words(b.text) > 120) warn(bw + ': paragraph over 120 words, consider splitting');
            break;
          case 'h':
            textProblems(b.text, bw, err, warn); lw += words(b.text); heads++;
            if (words(b.text) > 10) warn(bw + ': subheading is long');
            break;
          case 'ul': case 'ol':
            if (!Array.isArray(b.items) || b.items.length < 2) err(bw + ': needs at least 2 items');
            else b.items.forEach(function (it, ii) { textProblems(it, bw + ' item ' + (ii + 1), err, warn); lw += words(it); });
            break;
          case 'note':
            if (NOTE_KINDS.indexOf(b.kind) === -1) err(bw + ': kind must be safety, tip or key');
            textProblems(b.text, bw, err, warn); lw += words(b.text);
            if (b.kind === 'safety') hasSafety = true;
            if (b.kind === 'key' || b.kind === 'tip') hasKeyTip = true;
            break;
          case 'table':
            if (!Array.isArray(b.head) || b.head.length < 2 || b.head.length > 5) err(bw + ': head needs 2 to 5 columns');
            else {
              b.head.forEach(function (h, hi) { textProblems(h, bw + ' head ' + (hi + 1), err, warn); lw += words(h); });
              if (!Array.isArray(b.rows) || b.rows.length < 2) err(bw + ': needs at least 2 rows');
              else b.rows.forEach(function (r, ri) {
                if (!Array.isArray(r) || r.length !== b.head.length) err(bw + ' row ' + (ri + 1) + ': has ' + (r && r.length) + ' cells, head has ' + b.head.length);
                else r.forEach(function (c, ci) { textProblems(c, bw + ' row ' + (ri + 1) + ' cell ' + (ci + 1), err, warn); lw += words(c); });
              });
            }
            if (b.caption !== undefined) { textProblems(b.caption, bw + ' caption', err, warn); lw += words(b.caption); }
            break;
          case 'formula':
            textProblems(b.text, bw, err, warn); lw += words(b.text);
            if (b.caption !== undefined) { textProblems(b.caption, bw + ' caption', err, warn); lw += words(b.caption); }
            break;
          case 'example':
            textProblems(b.title, bw + ' title', err, warn); lw += words(b.title);
            if (!Array.isArray(b.steps) || b.steps.length < 2) err(bw + ': needs at least 2 steps');
            else b.steps.forEach(function (s, si) { textProblems(s, bw + ' step ' + (si + 1), err, warn); lw += words(s); });
            break;
          case 'diagram':
            if (course.diagrams.indexOf(b.name) === -1) err(bw + ': unknown diagram "' + b.name + '"');
            else if (DIAGRAM_HOMES[b.name].indexOf(id) === -1) err(bw + ': diagram "' + b.name + '" may only be used in ' + DIAGRAM_HOMES[b.name].join(', '));
            break;
          default:
            err(bw + ': unknown block type "' + b.t + '"');
        }
      });
      if (!hasKeyTip) err(where + ': needs at least one key or tip note');
      if (heads < 1 || heads > 5) warn(where + ': has ' + heads + ' subheadings (aim for 2 to 4)');
      if (lw < 300 || lw > 700) err(where + ': ' + lw + ' words, should be 320 to 650');
      else if (lw < 320 || lw > 650) warn(where + ': ' + lw + ' words (aim for 320 to 650)');
      l._words = lw;
      totalWords += lw;
    });
    if (totalWords < 1900) err('lessons total ' + totalWords + ' words, need at least 1,900');
    if (!hasSafety) err('needs at least one safety note somewhere in the lessons');
  }

  // practical
  var p = m.practical;
  if (!p || typeof p !== 'object') err('practical is missing');
  else {
    ['title', 'objective', 'time'].forEach(function (k) {
      if (!isStr(p[k])) err('practical.' + k + ' is missing'); else textProblems(p[k], 'practical.' + k, err, warn);
    });
    function listCheck(key, min, max) {
      if (!Array.isArray(p[key]) || p[key].length < min || p[key].length > max) err('practical.' + key + ' needs ' + min + (max < 99 ? ' to ' + max : ' or more') + ' items');
      else p[key].forEach(function (s, i) { textProblems(s, 'practical.' + key + '[' + i + ']', err, warn); });
    }
    listCheck('tools', 3, 99);
    listCheck('safety', 4, 99);
    listCheck('steps', 8, 14);
    listCheck('checks', 4, 6);
    Object.keys(p).forEach(function (k) {
      if (['title', 'objective', 'time', 'tools', 'safety', 'steps', 'checks'].indexOf(k) === -1) err('practical has unexpected key "' + k + '"');
    });
  }

  // quiz
  var quiz = m.quiz;
  var qStats = { n: 0 };
  if (!Array.isArray(quiz) || quiz.length < 30) {
    err('quiz needs at least 30 questions, found ' + (Array.isArray(quiz) ? quiz.length : 0));
  }
  if (Array.isArray(quiz)) {
    var seenQ = {};
    var ansCount = [0, 0, 0, 0];
    var levelCount = { 1: 0, 2: 0, 3: 0 };
    var perLesson = {};
    lessonIds.forEach(function (l) { perLesson[l] = 0; });
    var longestCorrect = 0;
    quiz.forEach(function (q, i) {
      var qid = id + '-q' + (i + 1 < 10 ? '0' : '') + (i + 1);
      var where = 'quiz ' + qid;
      if (q.id !== qid) err(where + ': id should be "' + qid + '", found "' + q.id + '"');
      Object.keys(q).forEach(function (k) {
        if (['id', 'q', 'options', 'answer', 'level', 'lesson', 'explain'].indexOf(k) === -1) err(where + ': unexpected key "' + k + '"');
      });
      if (!isStr(q.q) || q.q.length < 15 || q.q.length > 420) err(where + ': question text missing or the wrong length');
      else {
        textProblems(q.q, where + ' question', err, warn);
        if (!/[?:.]$/.test(q.q)) err(where + ': question should end with ? : or .');
        if (/\b(the (lesson|text|diagram|passage|figure) (above|below)|in the (lesson|text|diagram|passage))\b/i.test(q.q)) err(where + ': refers to the lesson or diagram; questions must stand alone');
        var key = q.q.toLowerCase().replace(/\W+/g, ' ');
        if (seenQ[key]) err(where + ': duplicate of ' + seenQ[key]); else seenQ[key] = qid;
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) err(where + ': needs exactly 4 options');
      else {
        var seenO = {};
        q.options.forEach(function (o, oi) {
          var ow = where + ' option ' + (oi + 1);
          if (!isStr(o) || o.length > 140) err(ow + ': missing or over 140 characters');
          else {
            textProblems(o, ow, err, warn);
            if (/^[A-D][\.\)]\s/.test(o)) err(ow + ': do not label options with letters');
            if (/\b(all|none) of the above\b/i.test(o) || /^both [a-d] and [a-d]$/i.test(o)) err(ow + ': "all/none of the above" style options are not allowed');
            var ok = o.toLowerCase().replace(/[\s.,;:!?'"()]+/g, ' ').trim();
            if (seenO[ok]) err(ow + ': repeats another option'); seenO[ok] = true;
          }
        });
      }
      if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3)) err(where + ': answer must be 0, 1, 2 or 3');
      else {
        ansCount[q.answer]++;
        if (Array.isArray(q.options) && q.options.length === 4) {
          var lens = q.options.map(function (o) { return String(o).length; });
          var mx = Math.max.apply(null, lens);
          if (lens[q.answer] === mx && lens.filter(function (x) { return x === mx; }).length === 1) longestCorrect++;
        }
      }
      if (!(q.level === 1 || q.level === 2 || q.level === 3)) err(where + ': level must be 1, 2 or 3'); else levelCount[q.level]++;
      if (lessonIds.indexOf(q.lesson) === -1) err(where + ': lesson "' + q.lesson + '" does not exist in this module'); else perLesson[q.lesson]++;
      if (!isStr(q.explain) || q.explain.length < 40 || q.explain.length > 650) err(where + ': explanation missing or the wrong length (40 to 650 characters)');
      else {
        textProblems(q.explain, where + ' explanation', err, warn);
        if (/\b(option|answer|choice)s?\s*\(?[a-d]\)?(\b|$)/i.test(q.explain) || /\b(option|choice)\s*[1-4]\b/i.test(q.explain)) err(where + ': explanation refers to an option by letter or number; options are shuffled in the app');
      }
    });
    var n = quiz.length;
    qStats = { n: n, ans: ansCount, levels: levelCount, perLesson: perLesson };
    if (n >= 30) {
      ansCount.forEach(function (c, i) {
        var pct = c / n;
        if (pct < 0.12 || pct > 0.38) err('correct answer is position ' + 'ABCD'[i] + ' for ' + Math.round(pct * 100) + '% of questions (keep 15% to 35%)');
        else if (pct < 0.15 || pct > 0.35) warn('correct answer is position ' + 'ABCD'[i] + ' for ' + Math.round(pct * 100) + '% of questions');
      });
      if (levelCount[1] / n < 0.2 || levelCount[1] / n > 0.4) warn('level 1 questions are ' + Math.round(levelCount[1] / n * 100) + '% (aim for about 30%)');
      if (levelCount[3] / n < 0.15 || levelCount[3] / n > 0.4) warn('level 3 questions are ' + Math.round(levelCount[3] / n * 100) + '% (aim for about 25%)');
      if (longestCorrect / n > 0.55) err('the correct option is the single longest in ' + Math.round(longestCorrect / n * 100) + '% of questions; balance option lengths');
      else if (longestCorrect / n > 0.4) warn('the correct option is the single longest in ' + Math.round(longestCorrect / n * 100) + '% of questions');
    }
    lessonIds.forEach(function (l) {
      if (perLesson[l] < 2) err('lesson ' + l + ' has only ' + perLesson[l] + ' quiz questions (need at least 3)');
      else if (perLesson[l] < 3) warn('lesson ' + l + ' has only ' + perLesson[l] + ' quiz questions');
    });
  }

  // cards
  var cards = m.cards;
  if (!Array.isArray(cards) || cards.length < 24) err('cards needs at least 24, found ' + (Array.isArray(cards) ? cards.length : 0));
  if (Array.isArray(cards)) {
    var seenF = {};
    cards.forEach(function (c, i) {
      var cid = id + '-c' + (i + 1 < 10 ? '0' : '') + (i + 1);
      var where = 'card ' + cid;
      if (c.id !== cid) err(where + ': id should be "' + cid + '", found "' + c.id + '"');
      Object.keys(c).forEach(function (k) {
        if (['id', 'front', 'back', 'lesson'].indexOf(k) === -1) err(where + ': unexpected key "' + k + '"');
      });
      if (!isStr(c.front) || c.front.length > 140) err(where + ': front missing or over 140 characters');
      else {
        textProblems(c.front, where + ' front', err, warn);
        var fk = c.front.toLowerCase().replace(/\W+/g, ' ');
        if (seenF[fk]) err(where + ': same front as ' + seenF[fk]); else seenF[fk] = cid;
      }
      if (!isStr(c.back) || c.back.length > 260) err(where + ': back missing or over 260 characters');
      else textProblems(c.back, where + ' back', err, warn);
      if (lessonIds.indexOf(c.lesson) === -1) err(where + ': lesson "' + c.lesson + '" does not exist in this module');
    });
  }

  return {
    errors: errors,
    warnings: warnings,
    stats: { lessons: lessonIds.length, words: totalWords, quiz: qStats.n, cards: Array.isArray(cards) ? cards.length : 0, qa: qStats }
  };
}

var CHECK_TYPES = ['key', 'useful', 'low', 'unsafe'];
var CASE_KEYS = ['id', 'title', 'level', 'lesson', 'report', 'checks', 'areas', 'area', 'faults', 'fault', 'repairs', 'repair', 'verify', 'verifyAns', 'explain'];

/* Diagnosis cases (data/cases/mNN.js): checks to run, then four decisions, each with one right answer. */
function validateCases(list, id, lessonIds) {
  var errors = [];
  var warnings = [];
  function err(msg) { errors.push(id + ' cases: ' + msg); }
  function warn(msg) { warnings.push(id + ' cases: ' + msg); }
  if (!Array.isArray(list) || !list.length) { err('no cases registered'); return { errors: errors, warnings: warnings, n: 0 }; }
  if (list.length < 3) warn('only ' + list.length + ' case(s); aim for 3 or more');
  list.forEach(function (c, ci) {
    var cid = id + '-d' + (ci + 1);
    var w = 'case ' + cid;
    if (c.id !== cid) err(w + ': id should be "' + cid + '", found "' + c.id + '"');
    Object.keys(c).forEach(function (k) { if (CASE_KEYS.indexOf(k) === -1) err(w + ': unexpected key "' + k + '"'); });
    if (!isStr(c.title) || c.title.length > 70) err(w + ': title missing or over 70 characters'); else textProblems(c.title, w + ' title', err, warn);
    if (!(c.level === 1 || c.level === 2 || c.level === 3)) err(w + ': level must be 1, 2 or 3');
    if (lessonIds && lessonIds.indexOf(c.lesson) === -1) err(w + ': lesson "' + c.lesson + '" does not exist in this module');
    if (!isStr(c.report)) err(w + ': report is missing');
    else {
      textProblems(c.report, w + ' report', err, warn);
      var rw = words(c.report);
      if (rw < 25 || rw > 140) err(w + ': report is ' + rw + ' words, should be 25 to 140');
    }
    var counts = { key: 0, useful: 0, low: 0, unsafe: 0 };
    if (!Array.isArray(c.checks) || c.checks.length < 8 || c.checks.length > 12) err(w + ': needs 8 to 12 checks');
    else {
      var seen = {};
      c.checks.forEach(function (k, ki) {
        var kw = w + ' check ' + (ki + 1);
        Object.keys(k).forEach(function (key) { if (['id', 'label', 'result', 'type'].indexOf(key) === -1) err(kw + ': unexpected key "' + key + '"'); });
        if (!isStr(k.id) || seen[k.id]) err(kw + ': id missing or repeated'); else seen[k.id] = true;
        if (!isStr(k.label) || k.label.length > 110) err(kw + ': label missing or over 110 characters'); else textProblems(k.label, kw + ' label', err, warn);
        if (!isStr(k.result) || k.result.length < 15 || k.result.length > 320) err(kw + ': result missing or not 15 to 320 characters'); else textProblems(k.result, kw + ' result', err, warn);
        if (CHECK_TYPES.indexOf(k.type) === -1) err(kw + ': type must be key, useful, low or unsafe'); else counts[k.type]++;
      });
      if (counts.key < 3 || counts.key > 5) err(w + ': needs 3 to 5 key checks, found ' + counts.key);
      if (counts.unsafe < 1) err(w + ': needs at least one unsafe check');
      if (counts.low < 2) err(w + ': needs at least two low-value checks');
    }
    [['areas', 'area', 80], ['faults', 'fault', 140], ['repairs', 'repair', 140], ['verify', 'verifyAns', 140]].forEach(function (g) {
      var opts = c[g[0]], ans = c[g[1]];
      if (!Array.isArray(opts) || opts.length !== 4) { err(w + ': ' + g[0] + ' needs exactly 4 options'); return; }
      var seenO = {};
      opts.forEach(function (o, oi) {
        if (!isStr(o) || o.length > g[2]) err(w + ' ' + g[0] + ' ' + (oi + 1) + ': missing or over ' + g[2] + ' characters');
        else {
          textProblems(o, w + ' ' + g[0] + ' ' + (oi + 1), err, warn);
          var ok = o.toLowerCase().replace(/[\s.,;:!?'"()]+/g, ' ').trim();
          if (seenO[ok]) err(w + ' ' + g[0] + ' ' + (oi + 1) + ': repeats another option');
          seenO[ok] = true;
        }
      });
      if (!(Number.isInteger(ans) && ans >= 0 && ans <= 3)) err(w + ': ' + g[1] + ' must be 0 to 3');
    });
    var ex = c.explain;
    if (!ex || typeof ex !== 'object') err(w + ': explain is missing');
    else {
      Object.keys(ex).forEach(function (k) { if (['area', 'fault', 'repair', 'verify'].indexOf(k) === -1) err(w + ': unexpected explain key "' + k + '"'); });
      ['area', 'fault', 'repair', 'verify'].forEach(function (k) {
        if (!isStr(ex[k]) || ex[k].length < 30 || ex[k].length > 420) err(w + ': explain.' + k + ' missing or not 30 to 420 characters');
        else {
          textProblems(ex[k], w + ' explain.' + k, err, warn);
          if (/\b(option|answer|choice)s?\s*\(?[a-d1-4]\)?(\b|$)/i.test(ex[k])) err(w + ': explain.' + k + ' refers to an option by letter or number; options are shuffled');
        }
      });
    }
  });
  var decisions = 0, longest = 0;
  list.forEach(function (c) {
    [['areas', 'area'], ['faults', 'fault'], ['repairs', 'repair'], ['verify', 'verifyAns']].forEach(function (g) {
      var o = c[g[0]];
      if (!Array.isArray(o) || o.length !== 4 || !(c[g[1]] >= 0 && c[g[1]] <= 3)) return;
      var lens = o.map(function (x) { return String(x).length; });
      var mx = Math.max.apply(null, lens);
      decisions++;
      if (lens[c[g[1]]] === mx && lens.filter(function (x) { return x === mx; }).length === 1) longest++;
    });
  });
  if (decisions >= 8) {
    if (longest / decisions > 0.75) err('the correct option is the single longest in ' + Math.round(longest / decisions * 100) + '% of decisions; balance option lengths');
    else if (longest / decisions > 0.55) warn('the correct option is the single longest in ' + Math.round(longest / decisions * 100) + '% of decisions');
  }
  return { errors: errors, warnings: warnings, n: list.length };
}

/* Fault library: data/devices/<id>.js. Each fault is [group, symptom, cause, check, remedy, lesson, safety?]. */
function validateDevice(d, id, lessonSet) {
  var errors = [];
  var warnings = [];
  function err(msg) { errors.push('device ' + id + ': ' + msg); }
  function warn(msg) { warnings.push('device ' + id + ': ' + msg); }
  if (!d) { err('did not register (call OMM.registerDevice with id "' + id + '")'); return { errors: errors, warnings: warnings, n: 0 }; }
  Object.keys(d).forEach(function (k) { if (['id', 'groups', 'faults'].indexOf(k) === -1) err('unexpected key "' + k + '" (title and blurb come from data/course.js)'); });
  if (d.id !== id) err('id is "' + d.id + '", expected "' + id + '"');
  if (!Array.isArray(d.groups) || d.groups.length < 2 || d.groups.length > 9) { err('groups needs 2 to 9 names'); return { errors: errors, warnings: warnings, n: 0 }; }
  d.groups.forEach(function (g, i) { if (!isStr(g) || g.length > 30) err('group ' + (i + 1) + ' missing or over 30 characters'); else textProblems(g, 'group ' + (i + 1), err, warn); });
  if (!Array.isArray(d.faults) || d.faults.length < 8) { err('needs at least 8 faults'); return { errors: errors, warnings: warnings, n: 0 }; }
  var seen = {};
  var perGroup = {};
  d.faults.forEach(function (f, i) {
    var w = 'fault ' + (i + 1);
    if (!Array.isArray(f) || (f.length !== 6 && f.length !== 7)) { err(w + ': needs [group, symptom, cause, check, remedy, lesson] and an optional safety note'); return; }
    if (d.groups.indexOf(f[0]) === -1) err(w + ': group "' + f[0] + '" is not in groups');
    perGroup[f[0]] = (perGroup[f[0]] || 0) + 1;
    var spec = [['symptom', 1, 90, 12], ['cause', 2, 280, 25], ['check', 3, 260, 20], ['remedy', 4, 380, 30]];
    spec.forEach(function (s) {
      var val = f[s[1]];
      if (!isStr(val) || val.length > s[2] || val.length < s[3]) err(w + ': ' + s[0] + ' missing or not ' + s[3] + ' to ' + s[2] + ' characters');
      else textProblems(val, w + ' ' + s[0], err, warn);
    });
    if (f[1] && seen[String(f[1]).toLowerCase()]) err(w + ': same symptom as fault ' + seen[String(f[1]).toLowerCase()]);
    else if (f[1]) seen[String(f[1]).toLowerCase()] = i + 1;
    if (!isStr(f[5]) || !lessonSet[f[5]]) err(w + ': lesson "' + f[5] + '" does not exist');
    if (f.length === 7) {
      if (!isStr(f[6]) || f[6].length > 260 || f[6].length < 20) err(w + ': safety note missing or not 20 to 260 characters');
      else textProblems(f[6], w + ' safety', err, warn);
    }
  });
  d.groups.forEach(function (g) { if (!perGroup[g]) err('group "' + g + '" has no faults'); });
  return { errors: errors, warnings: warnings, n: d.faults.length };
}

/* Installation guide: data/install/<id>.js. Six phases of checklist items, plus tools and safety. */
var INSTALL_PHASES = ['before', 'site', 'unpack', 'setup', 'test', 'handover'];
function validateInstall(d, id, lessonSet) {
  var errors = [];
  var warnings = [];
  function err(msg) { errors.push('install ' + id + ': ' + msg); }
  function warn(msg) { warnings.push('install ' + id + ': ' + msg); }
  if (!d) { err('did not register (call OMM.registerInstall with id "' + id + '")'); return { errors: errors, warnings: warnings, n: 0 }; }
  Object.keys(d).forEach(function (k) { if (['id', 'intro', 'tools', 'safety', 'lesson'].concat(INSTALL_PHASES).indexOf(k) === -1) err('unexpected key "' + k + '"'); });
  if (d.id !== id) err('id is "' + d.id + '", expected "' + id + '"');
  if (!isStr(d.intro) || d.intro.length < 30 || d.intro.length > 260) err('intro missing or not 30 to 260 characters'); else textProblems(d.intro, 'intro', err, warn);
  if (!isStr(d.lesson) || !lessonSet[d.lesson]) err('lesson "' + d.lesson + '" does not exist');
  var n = 0;
  [['tools', 3, 10, 90], ['safety', 3, 8, 220]].concat(INSTALL_PHASES.map(function (p) { return [p, 3, 10, 230]; })).forEach(function (spec) {
    var list = d[spec[0]];
    if (!Array.isArray(list) || list.length < spec[1] || list.length > spec[2]) { err(spec[0] + ' needs ' + spec[1] + ' to ' + spec[2] + ' items'); return; }
    list.forEach(function (it, i) {
      if (!isStr(it) || it.length > spec[3] || it.length < 8) err(spec[0] + ' item ' + (i + 1) + ': missing or not 8 to ' + spec[3] + ' characters');
      else textProblems(it, spec[0] + ' item ' + (i + 1), err, warn);
      n++;
    });
  });
  if (n && d.setup && d.setup.length < 5) warn('setup has fewer than 5 steps');
  return { errors: errors, warnings: warnings, n: n };
}

/* Manufacturer error codes: data/errorcodes.js. Rows are [brand, kind, code, appliesTo, meaning, remedy, lesson, source]. */
function validateErrorCodes(d, lessonSet) {
  var errors = [];
  var warnings = [];
  function err(msg) { errors.push('errorcodes: ' + msg); }
  function warn(msg) { warnings.push('errorcodes: ' + msg); }
  if (!d || !Array.isArray(d.codes) || !Array.isArray(d.lookups)) { err('needs codes and lookups lists'); return { errors: errors, warnings: warnings, n: 0 }; }
  var seen = {};
  d.codes.forEach(function (r, i) {
    var w = 'row ' + (i + 1);
    if (!Array.isArray(r) || r.length !== 8) { err(w + ': needs [brand, kind, code, appliesTo, meaning, remedy, lesson, source]'); return; }
    var spec = [['brand', 0, 24, 2], ['kind', 1, 24, 3], ['code', 2, 90, 1], ['appliesTo', 3, 110, 5], ['meaning', 4, 300, 10], ['remedy', 5, 400, 10]];
    spec.forEach(function (s) {
      if (!isStr(r[s[1]]) || r[s[1]].length > s[2] || r[s[1]].length < s[3]) err(w + ': ' + s[0] + ' missing or not ' + s[3] + ' to ' + s[2] + ' characters');
      else textProblems(r[s[1]], w + ' ' + s[0], err, warn);
    });
    if (!isStr(r[6]) || !lessonSet[r[6]]) err(w + ': lesson "' + r[6] + '" does not exist');
    if (!isStr(r[7]) || !/^https?:\/\/[^ ]+$/.test(r[7])) err(w + ': source must be a web address');
    var key = (r[0] + '|' + r[2] + '|' + r[3]).toLowerCase();
    if (seen[key]) err(w + ': same brand, code and family as row ' + seen[key]); else seen[key] = i + 1;
  });
  d.lookups.forEach(function (l, i) {
    var w = 'lookup ' + (i + 1);
    if (!Array.isArray(l) || l.length !== 3) { err(w + ': needs [brand, where, tip]'); return; }
    l.forEach(function (x, k) { if (!isStr(x) || x.length > 220) err(w + ': item ' + (k + 1) + ' missing or over 220 characters'); else textProblems(x, w, err, warn); });
  });
  return { errors: errors, warnings: warnings, n: d.codes.length };
}

function run(ids) {
  var loaded = load(ids);
  var errors = loaded.loadErrors.slice();
  var warnings = [];
  var summary = [];
  loaded.ids.forEach(function (id) {
    if (loaded.loadErrors.some(function (e) { return e.indexOf(id + ':') === 0; })) return;
    var r = validateModule(loaded.modules[id], loaded.course, id);
    errors = errors.concat(r.errors);
    warnings = warnings.concat(r.warnings);
    if (r.stats) summary.push({ id: id, stats: r.stats });
    if (loaded.cases[id]) {
      var mod = loaded.modules[id];
      var lids = mod && Array.isArray(mod.lessons) ? mod.lessons.map(function (l) { return l.id; }) : null;
      var cr = validateCases(loaded.cases[id], id, lids);
      errors = errors.concat(cr.errors);
      warnings = warnings.concat(cr.warnings);
      if (r.stats) r.stats.cases = cr.n;
    }
  });
  var deviceCounts = {};
  if (!ids || !ids.length) {
    var lessonSet = {};
    Object.keys(loaded.modules).forEach(function (mid) { (loaded.modules[mid].lessons || []).forEach(function (l) { lessonSet[l.id] = true; }); });
    (loaded.course.devices || []).forEach(function (d) {
      if (loaded.loadErrors.some(function (e) { return e.indexOf('device ' + d.id + ':') === 0; })) return;
      var dr = validateDevice(loaded.devices[d.id], d.id, lessonSet);
      errors = errors.concat(dr.errors);
      warnings = warnings.concat(dr.warnings);
      deviceCounts[d.id] = dr.n;
      if (loaded.loadErrors.some(function (e) { return e.indexOf('install ' + d.id + ':') === 0; })) return;
      var ir = validateInstall(loaded.installs[d.id], d.id, lessonSet);
      errors = errors.concat(ir.errors);
      warnings = warnings.concat(ir.warnings);
    });
  }
  var errorCount = 0;
  if ((!ids || !ids.length) && loaded.errorCodes) {
    var lset = {};
    Object.keys(loaded.modules).forEach(function (mid) { (loaded.modules[mid].lessons || []).forEach(function (l) { lset[l.id] = true; }); });
    var er = validateErrorCodes(loaded.errorCodes, lset);
    errors = errors.concat(er.errors);
    warnings = warnings.concat(er.warnings);
    errorCount = er.n;
  }
  return { errors: errors, warnings: warnings, summary: summary, course: loaded.course, modules: loaded.modules, cases: loaded.cases, devices: loaded.devices, installs: loaded.installs, errorCodes: loaded.errorCodes, errorCount: errorCount, deviceCounts: deviceCounts };
}

module.exports = { run: run, validateModule: validateModule, validateCases: validateCases, validateDevice: validateDevice, validateInstall: validateInstall, validateErrorCodes: validateErrorCodes, load: load };

if (require.main === module) {
  var ids = process.argv.slice(2);
  var res = run(ids);
  if (res.errorCount) console.log('error codes  rows ' + res.errorCount);
  Object.keys(res.deviceCounts || {}).forEach(function (k) { console.log('device ' + k + '  faults ' + res.deviceCounts[k]); });
  res.summary.forEach(function (s) {
    var st = s.stats;
    console.log(s.id + '  lessons ' + st.lessons + '  words ' + st.words + '  quiz ' + st.quiz + '  cards ' + st.cards + (st.cases ? '  cases ' + st.cases : ''));
  });
  if (res.warnings.length) {
    console.log('\nWarnings (' + res.warnings.length + '):');
    res.warnings.forEach(function (w) { console.log('  - ' + w); });
  }
  if (res.errors.length) {
    console.log('\nErrors (' + res.errors.length + '):');
    res.errors.forEach(function (e) { console.log('  x ' + e); });
    process.exit(1);
  }
  console.log('\nAll checked modules passed.');
}

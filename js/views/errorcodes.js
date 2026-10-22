/*
 * Manufacturer error codes inside the lessons they belong to. Each lesson that has codes ends with a searchable,
 * filterable table: code, meaning, remedy and the family it was published for, with a link to the source.
 */
import { h, rich } from '../dom.js';
import { icon } from '../icons.js';
import * as data from '../data.js';
import { plural } from '../lib.js';
import { loading, failure } from '../ui.js';

var NOTE = 'Codes are specific to a manufacturer and a model. These are plain-English summaries of each maker\'s public support pages. Always check the exact model\'s own documentation before you act.';

function codeTable(rows) {
  var body = rows.map(function (r) {
    return h('tr', { class: 'frow' },
      h('th', { scope: 'row', class: 'sym', dataset: { label: 'Code' } }, h('span', { class: 'brandtag' }, r.brand), h('span', { class: 'codetxt' }, r.code)),
      h('td', { dataset: { label: 'Meaning' } }, rich(r.meaning)),
      h('td', { class: 'fix', dataset: { label: 'Remedy' } }, rich(r.remedy)),
      h('td', { class: 'applies', dataset: { label: 'Applies to' } }, r.appliesTo, ' ', h('a', { href: r.source, target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Source for ' + r.brand + ' ' + r.code }, 'Source')));
  });
  return h('div', { class: 'tablewrap' }, h('table', { class: 'faulttable codetable' },
    h('thead', null, h('tr', null, ['Code', 'Meaning', 'Remedy', 'Applies to'].map(function (t) { return h('th', { scope: 'col' }, t); }))),
    h('tbody', null, body)));
}

function lookupTable(rows) {
  return h('div', { class: 'tablewrap' }, h('table', { class: 'faulttable codetable lookups' },
    h('thead', null, h('tr', null, ['Brand', 'Where the codes are published', 'Tip'].map(function (t) { return h('th', { scope: 'col' }, t); }))),
    h('tbody', null, rows.map(function (r) {
      return h('tr', { class: 'frow' }, h('th', { scope: 'row', class: 'sym', dataset: { label: 'Brand' } }, r[0]), h('td', { dataset: { label: 'Where to look' } }, rich(r[1])), h('td', { class: 'fix', dataset: { label: 'Tip' } }, rich(r[2])));
    }))));
}

/* Returns a node for the lesson, or null when the lesson has no error codes. */
export function panel(lessonId) {
  var info = data.index().errors;
  if (!info) return null;
  var n = info.lessons[lessonId] || 0;
  var lookup = info.lookupLesson === lessonId;
  if (!n && !lookup) return null;
  var out = h('div', null);
  data.loadErrorCodes().then(function (d) {
    var nodes = [];
    if (lookup) {
      var box = h('details', { class: 'devblock', open: n ? null : true },
        h('summary', null, h('span', null, 'Where each brand publishes its codes'), h('span', { class: 'n' }, plural(d.lookups.length, 'brand', 'brands')), icon('chevron', 16)),
        lookupTable(d.lookups));
      nodes.push(h('section', { class: 'lesson-faults' }, h('h2', null, 'Looking up a code'), h('p', { class: 'muted small' }, 'Every maker publishes its codes in a different place. Find the right document for the exact model, then look up the full code.'), box));
    }
    var mine = d.codes.filter(function (r) { return r[6] === lessonId; }).map(function (r) {
      return { brand: r[0], kind: r[1], code: r[2], appliesTo: r[3], meaning: r[4], remedy: r[5], source: r[7] };
    });
    if (mine.length) {
      var state = { q: '', brand: 'All' };
      var brands = ['All'];
      mine.forEach(function (r) { if (brands.indexOf(r.brand) === -1) brands.push(r.brand); });
      var holder = h('div', null);
      var count = h('p', { class: 'muted small', role: 'status' });
      function draw() {
        var q = state.q.trim().toLowerCase();
        var shown = mine.filter(function (r) {
          if (state.brand !== 'All' && r.brand !== state.brand) return false;
          return !q || (r.code + ' ' + r.meaning + ' ' + r.remedy + ' ' + r.kind + ' ' + r.appliesTo).toLowerCase().indexOf(q) >= 0;
        });
        count.textContent = plural(shown.length, 'code', 'codes') + ' shown';
        holder.replaceChildren(shown.length ? codeTable(shown) : h('p', { class: 'empty' }, 'No codes match. Clear the search or choose another brand.'));
      }
      var search = h('input', { class: 'search', type: 'search', placeholder: 'Search a code or a word', 'aria-label': 'Search error codes' });
      search.addEventListener('input', function () { state.q = search.value; draw(); });
      var chips = h('div', { class: 'chipbar', role: 'group', 'aria-label': 'Filter by brand' });
      brands.forEach(function (b) {
        var btn = h('button', { type: 'button', 'aria-pressed': b === 'All' ? 'true' : 'false' }, b);
        btn.addEventListener('click', function () {
          state.brand = b;
          Array.prototype.forEach.call(chips.children, function (c) { c.setAttribute('aria-pressed', c === btn ? 'true' : 'false'); });
          draw();
        });
        chips.appendChild(btn);
      });
      draw();
      var box2 = h('details', { class: 'devblock', open: true },
        h('summary', null, h('span', null, 'Error codes and messages'), h('span', { class: 'n' }, plural(mine.length, 'code', 'codes')), icon('chevron', 16)),
        h('div', { class: 'devctl' }, h('p', { class: 'muted small' }, NOTE), search, chips, count), holder);
      nodes.push(h('section', { class: 'lesson-faults' }, h('h2', null, 'Error codes by manufacturer'), box2));
    }
    out.replaceChildren.apply(out, nodes);
  }).catch(function (e) { out.replaceChildren(failure(e)); });
  out.appendChild(loading());
  return out;
}

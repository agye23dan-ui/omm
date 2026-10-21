/* Quick navigation between modules: a grid on the Learn page and a strip on module pages. */
import { h } from '../dom.js';
import * as store from '../store.js';
import * as data from '../data.js';
import { moduleMastery } from '../srs.js';
import { areaColor } from '../halftone.js';

/* Every module as a numbered tile, for the top of the Learn page. */
export function grid() {
  var idx = data.index();
  return h('nav', { class: 'modnav', 'aria-label': 'Jump to a module' },
    h('h2', null, 'Jump to a module'),
    h('div', { class: 'modgrid' }, idx.order.map(function (id) {
      var m = idx.modules[id];
      var pct = Math.round(moduleMastery(m, store.state) * 100);
      return h('a', { class: 'modtile', href: '#/module/' + id, style: { '--area': areaColor(m.area) }, 'aria-label': 'Module ' + m.number + ', ' + m.title + ', ' + pct + ' percent' },
        h('span', { class: 'n' }, String(m.number)), h('span', { class: 'nm' }, m.short));
    })));
}

/* A scrolling row of module numbers for module and lesson pages, with the current one marked. */
export function strip(currentId) {
  var idx = data.index();
  var row = h('nav', { class: 'modstrip', 'aria-label': 'Modules' }, idx.order.map(function (id) {
    var m = idx.modules[id];
    return h('a', { href: '#/module/' + id, title: m.title, style: { '--area': areaColor(m.area) }, 'aria-current': id === currentId ? 'true' : null, 'aria-label': 'Module ' + m.number + ': ' + m.title },
      String(m.number));
  }));
  window.setTimeout(function () {
    var cur = row.querySelector('[aria-current]');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, 0);
  return row;
}

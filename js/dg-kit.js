/*
 * Small helpers for drawing lesson diagrams. Every shape uses the .dg classes in css/app.css,
 * so colours follow the theme. Coordinates are in a 480 unit wide drawing.
 */
import { DIAGRAMS, wrap, t, badge, box } from './diagrams.js';

export { wrap, t, badge, box };

export function reg(name, caption, build) {
  DIAGRAMS[name] = { caption: caption, svg: build };
}

export function arrow(x1, y1, x2, y2, cls) {
  return '<path d="M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2 + '" class="' + (cls || 'k') + '" marker-end="url(#ar)"/>';
}

export function line(d, cls) {
  return '<path d="' + d + '" class="' + (cls || 'k') + '"/>';
}

/* Several lines of text, one under the other. */
export function lines(x, y, list, cls, anchor, step) {
  return list.map(function (s, i) { return t(x, y + i * (step || 16), s, cls, anchor); }).join('');
}

export function circle(cx, cy, r, cls) {
  return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="' + (cls || 'box') + '"/>';
}

export function rect(x, y, w, h, cls, rx) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx === undefined ? 3 : rx) + '" class="' + (cls || 'box') + '"/>';
}

export function poly(points, cls) {
  return '<polygon points="' + points + '" class="' + (cls || 'box') + '"/>';
}

/* A box with one or two centred lines of text. */
export function block(x, y, w, h, l1, l2, tint) {
  var s = box(x, y, w, h, tint);
  if (l2) return s + t(x + w / 2, y + h / 2 - 2, l1, 'tsm', 'middle') + t(x + w / 2, y + h / 2 + 12, l2, 'tsm', 'middle');
  return s + t(x + w / 2, y + h / 2 + 4, l1, 'tsm', 'middle');
}

/*
 * A vertical chain of numbered steps with a note beside each.
 *   items: [{ h: 'Heading', n: ['note line', ...], tint: 'tint-c-soft' }]
 *   opts.back: [from, to] draws a return arrow on the left from step `from` up to step `to` (1-based)
 */
export function steps(title, desc, items, opts) {
  opts = opts || {};
  var lineH = 16;
  var most = 1;
  items.forEach(function (it) { most = Math.max(most, (it.n || []).length); });
  var rh = Math.max(50, 24 + most * lineH);
  var gap = 22;
  var x0 = opts.back ? 40 : 10;
  var bw = 220;
  var b = '';
  items.forEach(function (it, i) {
    var y = 10 + i * (rh + gap);
    b += box(x0, y, bw, rh, it.tint || 'tint-c-soft');
    b += badge(x0 + 18, y + rh / 2, String(i + 1));
    b += t(x0 + 38, y + rh / 2 + 5, it.h, 'tb');
    var n = it.n || [];
    var top = y + rh / 2 - (n.length - 1) * lineH / 2 + 4;
    b += lines(x0 + bw + 14, top, n, 'ts', 'start', lineH);
    if (i < items.length - 1) b += '<path d="M' + (x0 + bw / 2) + ' ' + (y + rh) + 'V' + (y + rh + gap) + '" class="k" marker-end="url(#ar)"/>';
  });
  if (opts.back) {
    var f = opts.back[0] - 1, to = opts.back[1] - 1;
    var yFrom = 10 + f * (rh + gap) + rh / 2;
    var yTo = 10 + to * (rh + gap) + rh / 2;
    b += '<path d="M' + x0 + ' ' + yFrom + 'H18V' + yTo + 'H' + (x0 - 2) + '" class="k2" marker-end="url(#ar)"/>';
    if (opts.backLabel) b += '<text transform="translate(11 ' + ((yFrom + yTo) / 2 + 30) + ') rotate(-90)" class="ts">' + opts.backLabel + '</text>';
  }
  return wrap(480, 20 + items.length * rh + (items.length - 1) * gap, title, desc, b);
}

/* A stack of layers, top to bottom, each with a short note. */
export function stack(title, desc, layers) {
  var rh = 58, gap = 10, b = '';
  layers.forEach(function (l, i) {
    var y = 10 + i * (rh + gap);
    b += box(10, y, 460, rh, l.tint || 'tint-c-soft');
    b += t(26, y + 24, l.h, 'tb') + t(26, y + 44, l.n, 'ts');
  });
  return wrap(480, 20 + layers.length * rh + (layers.length - 1) * gap, title, desc, b);
}

/* Teeth around a circle: used for gears. */
export function teeth(cx, cy, r, n, rotDeg, len, wid) {
  var s = '';
  for (var i = 0; i < n; i++) {
    var a = rotDeg + i * 360 / n;
    s += '<rect x="' + (cx + r - 1) + '" y="' + (cy - wid / 2) + '" width="' + (len + 1) + '" height="' + wid + '" class="box" transform="rotate(' + a + ' ' + cx + ' ' + cy + ')"/>';
  }
  return s;
}

/*
 * Lesson diagrams, drawn as inline SVG so they stay sharp, work offline and follow the theme.
 * All drawing colours come from CSS classes (.dg ...), not from this file.
 */
import { svgFromString, h } from './dom.js';

export var DIAGRAMS = {};

export function wrap(w, hgt, title, desc, body, defs) {
  return '<svg xmlns="http://www.w3.org/2000/svg" class="dg" viewBox="0 0 ' + w + ' ' + hgt + '" role="img" ' +
    'aria-label="' + title + '"><title>' + title + '</title><desc>' + desc + '</desc>' +
    '<defs><marker id="ar" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
    '<path d="M1 1.5 9 5 1 8.5z" class="head"/></marker>' + (defs || '') + '</defs>' + body + '</svg>';
}

export function t(x, y, text, cls, anchor) {
  return '<text x="' + x + '" y="' + y + '" class="' + (cls || 't') + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + '>' + text + '</text>';
}

/* A numbered or lettered badge. */
export function badge(cx, cy, label, r) {
  var rad = r || 11;
  return '<circle cx="' + cx + '" cy="' + cy + '" r="' + rad + '" class="badge"/>' +
    '<text x="' + cx + '" y="' + (cy + 4.6) + '" class="tbadge" text-anchor="middle">' + label + '</text>';
}

export function box(x, y, w, hgt, tint) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hgt + '" rx="4" class="box' + (tint ? ' ' + tint : '') + '"/>';
}

export function resistor(cx, cy, label) {
  return '<rect x="' + (cx - 30) + '" y="' + (cy - 11) + '" width="60" height="22" rx="3" class="box"/>' +
    t(cx, cy + 5, label, 'tb', 'middle');
}

/* ---------------- Ohm's law triangle ---------------- */
DIAGRAMS['ohm-triangle'] = {
  caption: 'Cover the quantity you want to find. What is left shows the sum: V on top of I and R means V = I × R.',
  svg: function () {
    var body =
      '<polygon points="120,24 75,130 165,130" class="tint-c"/>' +
      '<polygon points="75,130 120,130 120,236 30,236" class="tint-m"/>' +
      '<polygon points="120,130 165,130 210,236 120,236" class="tint-y"/>' +
      '<polygon points="120,24 30,236 210,236" class="k"/>' +
      '<path d="M75 130H165M120 130V236" class="k"/>' +
      t(120, 104, 'V', 'tbig', 'middle') + t(75, 204, 'I', 'tbig', 'middle') + t(165, 204, 'R', 'tbig', 'middle') +
      t(250, 48, 'Cover one, read the rest', 'tb') +
      t(250, 98, 'V = I × R', 'tform') + t(250, 118, 'volts = amperes × ohms', 'ts') +
      t(250, 160, 'I = V ÷ R', 'tform') + t(250, 180, 'amperes = volts ÷ ohms', 'ts') +
      t(250, 222, 'R = V ÷ I', 'tform') + t(250, 242, 'ohms = volts ÷ amperes', 'ts');
    return wrap(480, 262, 'Ohm\'s law triangle',
      'A triangle split in three: V at the top, I at the bottom left and R at the bottom right, with the three forms of Ohm\'s law beside it.', body);
  }
};

/* ---------------- Series and parallel ---------------- */
DIAGRAMS['series-parallel'] = {
  caption: 'Series: one path, so the same current flows through every resistor. Parallel: several paths, so each branch has the same voltage.',
  svg: function () {
    var s =
      t(30, 22, 'Series: one path', 'tb') +
      '<path d="M30 50H120M180 50H210M270 50H300M360 50H450V120H30V88M30 78V50" class="k"/>' +
      '<path d="M18 78H42" class="k bold"/><path d="M24 88H36" class="k bold"/>' + t(52, 82, '+', 'ts') +
      resistor(150, 50, 'R1') + resistor(240, 50, 'R2') + resistor(330, 50, 'R3') +
      t(240, 104, 'R total = R1 + R2 + R3', 'tb', 'middle') +
      t(30, 146, 'Same current in every resistor. Voltages add up.', 'ts');
    var p =
      t(30, 188, 'Parallel: more than one path', 'tb') +
      '<path d="M100 220V290M380 220V290" class="k"/>' +
      '<path d="M100 220H160M220 220H380M100 290H160M220 290H380" class="k"/>' +
      resistor(190, 220, 'R1') + resistor(190, 290, 'R2') +
      '<path d="M100 255H68M60 255H20V322H420V255H380" class="k"/>' +
      '<path d="M60 243V267" class="k bold"/><path d="M68 248V262" class="k bold"/>' + t(74, 242, '+', 'ts') +
      t(240, 260, '1 ÷ R total = 1 ÷ R1 + 1 ÷ R2', 'tb', 'middle') +
      t(30, 346, 'Same voltage across every branch. Currents add up.', 'ts');
    return wrap(480, 358, 'Series and parallel circuits',
      'Top: a battery with three resistors in one loop. Bottom: a battery with two resistors in separate branches.', s + p);
  }
};

/* ---------------- Rectifier chain ---------------- */
function wavePath(x0, w, fn) {
  var d = '';
  for (var x = 0; x <= w; x += 2) {
    d += (x === 0 ? 'M' : 'L') + (x0 + x).toFixed(1) + ' ' + fn(x).toFixed(1);
  }
  return d;
}

DIAGRAMS['rectifier-chain'] = {
  caption: 'Each stage reshapes the waveform. The small plots show what you would see on an oscilloscope after each block. Heights are drawn to the same scale from the transformer onwards.',
  svg: function () {
    var rows = [
      ['Mains in', 'AC, for example 230 V at 50 Hz'],
      ['Transformer', 'Steps the voltage down'],
      ['Rectifier', 'AC becomes pulsating DC'],
      ['Filter capacitor', 'Smooths the pulses'],
      ['Regulator', 'Holds a steady output']
    ];
    var body = '';
    var X0 = 262, W = 208;
    rows.forEach(function (r, i) {
      var top = 10 + i * 88;
      body += box(10, top, 218, 62, i === 0 ? '' : 'tint-c-soft');
      body += t(24, top + 27, r[0], 'tb') + t(24, top + 47, r[1], 'ts');
      if (i < rows.length - 1) body += '<path d="M119 ' + (top + 62) + 'V' + (top + 88) + '" class="k" marker-end="url(#ar)"/>';
      var mid = top + 31, base = top + 52;
      var g = '';
      var P = 104; // period of the AC waveform in px
      if (i === 0) {
        g = '<path d="' + wavePath(X0, W, function (x) { return mid - 26 * Math.sin(2 * Math.PI * x / P); }) + '" class="wave c"/>';
        g += '<path d="M' + X0 + ' ' + mid + 'H' + (X0 + W) + '" class="zero"/>';
      } else if (i === 1) {
        g = '<path d="' + wavePath(X0, W, function (x) { return mid - 14 * Math.sin(2 * Math.PI * x / P); }) + '" class="wave c"/>';
        g += '<path d="M' + X0 + ' ' + mid + 'H' + (X0 + W) + '" class="zero"/>';
      } else if (i === 2) {
        g = '<path d="' + wavePath(X0, W, function (x) { return base - 14 * Math.abs(Math.sin(2 * Math.PI * x / P)); }) + '" class="wave m"/>';
        g += '<path d="M' + X0 + ' ' + base + 'H' + (X0 + W) + '" class="zero"/>';
      } else if (i === 3) {
        var humpW = P / 2;
        g = '<path d="' + wavePath(X0, W, function (x) {
          var ph = (x % humpW) / humpW;
          var drop = ph < 0.5 ? (0.5 - ph) / 0.5 * 3.5 : 0; // recharges as the hump rises to its peak
          var fall = ph >= 0.5 ? ((ph - 0.5) / 0.5) * 3.5 : 0; // then sags until the next hump
          return base - 14 + drop + fall;
        }) + '" class="wave y"/>';
        g += '<path d="M' + X0 + ' ' + base + 'H' + (X0 + W) + '" class="zero"/>';
      } else {
        g = '<path d="M' + X0 + ' ' + (base - 11) + 'H' + (X0 + W) + '" class="wave g"/>';
        g += '<path d="M' + X0 + ' ' + base + 'H' + (X0 + W) + '" class="zero"/>';
      }
      body += g;
    });
    return wrap(480, 442, 'Linear power supply stages',
      'Five blocks from top to bottom: mains input, transformer, rectifier, filter capacitor and regulator, each with a small waveform: a large sine wave, a smaller sine wave, positive humps, humps with ripple, and a flat line.', body);
  }
};

/* ---------------- Switch-mode power supply ---------------- */
DIAGRAMS['smps-block'] = {
  caption: 'The dashed line is the isolation barrier. Everything left of it can be at mains potential. The opto-coupler passes the feedback signal across as light, so no wire crosses the barrier.',
  svg: function () {
    var b = '';
    b += '<path d="M350 34V58M350 112V188M350 242V274" class="barrier"/>';
    b += t(344, 22, 'Primary side (mains)', 'ts', 'end') + t(356, 22, 'Secondary side', 'ts');
    function blk(x, y, w, hgt, l1, l2, tint) {
      var s = box(x, y, w, hgt, tint);
      if (l2) s += t(x + w / 2, y + hgt / 2 - 2, l1, 'tsm', 'middle') + t(x + w / 2, y + hgt / 2 + 13, l2, 'tsm', 'middle');
      else s += t(x + w / 2, y + hgt / 2 + 4, l1, 'tsm', 'middle');
      return s;
    }
    b += blk(8, 60, 60, 50, 'Mains', 'AC in');
    b += blk(84, 60, 88, 50, 'Rectifier +', 'bulk capacitor');
    b += blk(190, 60, 80, 50, 'Switching', 'transistor', 'tint-m-soft');
    b += blk(288, 60, 100, 50, 'Transformer', '', 'tint-y-soft');
    b += blk(408, 60, 68, 50, 'Rectifier', '+ filter');
    b += '<path d="M68 85H84M172 85H190M270 85H288M388 85H408" class="k" marker-end="url(#ar)"/>';
    b += '<path d="M442 110V128" class="k" marker-end="url(#ar)"/>' + t(442, 146, 'DC out', 'tb', 'middle');
    // feedback loop
    b += blk(190, 190, 80, 50, 'PWM', 'controller', 'tint-c-soft');
    b += blk(312, 190, 76, 50, 'Opto-', 'coupler', 'tint-c-soft');
    b += '<path d="M442 152V215H388" class="k2" marker-end="url(#ar)"/>';
    b += '<path d="M312 215H270" class="k2" marker-end="url(#ar)"/>';
    b += '<path d="M230 190V110" class="k2" marker-end="url(#ar)"/>';
    b += t(452, 196, 'voltage', 'ts', 'middle') + t(452, 210, 'sensed', 'ts', 'middle');
    b += t(235, 166, 'switch on/off', 'ts', 'end');
    b += t(100, 266, 'Controller varies the pulse width', 'ts', 'start');
    b += t(100, 282, 'to hold the output steady', 'ts', 'start');
    return wrap(480, 292, 'Switch-mode power supply block diagram',
      'Mains goes through a rectifier and bulk capacitor to a switching transistor and a transformer that straddles a dashed isolation barrier, then an output rectifier and filter. A feedback path from the output passes through an opto-coupler to a PWM controller that drives the switching transistor.', b);
  }
};

/* ---------------- Electrophotographic cycle ---------------- */
DIAGRAMS['xerography-cycle'] = {
  caption: 'Seven stages around the drum. The drum turns anticlockwise here, so its surface at the bottom moves with the paper. Many machines also have a discharge lamp before the charge stage.',
  svg: function () {
    var cx = 240, cy = 200, R = 80;
    var b = '';
    b += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" class="box tint-k-soft"/>';
    b += '<circle cx="' + cx + '" cy="' + cy + '" r="12" class="box"/>' + t(cx, cy + 34, 'Drum', 'tb', 'middle');
    b += '<path d="M212 158A50 50 0 0 0 212 242" class="k2" marker-end="url(#ar)"/>';
    // 1 charge roller (top)
    b += '<circle cx="240" cy="112" r="10" class="box tint-y"/>' + badge(240, 84, '1');
    // 2 expose: laser beam from upper left
    b += '<rect x="82" y="86" width="40" height="20" rx="3" class="box"/>' + t(102, 100, 'laser', 'tsm', 'middle');
    b += '<path d="M120 104L178 148" class="beam" marker-end="url(#ar)"/>' + badge(150, 82, '2');
    // 3 develop: developer unit left
    b += '<rect x="92" y="196" width="44" height="46" rx="4" class="box tint-m"/>' + t(114, 223, 'toner', 'tsm', 'middle');
    b += '<path d="M136 214H160" class="k2"/>' + badge(70, 220, '3');
    // 4 transfer roller (bottom)
    b += '<circle cx="240" cy="296" r="15" class="box tint-c"/>' + badge(240, 330, '4');
    // paper path
    b += '<path d="M24 280H468" class="paper" marker-end="url(#ar)"/>' + t(28, 268, 'Paper in', 'ts');
    // 5 separate
    b += badge(318, 256, '5');
    // 6 fuser pair
    b += '<circle cx="396" cy="266" r="14" class="box tint-m"/><circle cx="396" cy="294" r="14" class="box"/>' + badge(396, 236, '6');
    b += t(396, 326, 'Fuser', 'ts', 'middle');
    // 7 clean blade (right)
    b += '<rect x="318" y="190" width="16" height="20" rx="2" class="box tint-g"/>' + badge(360, 200, '7');
    // discharge lamp
    b += '<path d="M290 135L322 104" class="beam"/>' + t(326, 100, 'discharge lamp', 'ts');
    // legend
    var L = [
      ['1', 'Charge: even charge on the drum', 10, 366],
      ['2', 'Expose: light draws the latent image', 10, 390],
      ['3', 'Develop: toner sticks to the image', 10, 414],
      ['4', 'Transfer: toner moves to the paper', 10, 438],
      ['5', 'Separate: paper leaves the drum', 10, 462],
      ['6', 'Fuse: heat and pressure fix the toner', 10, 486],
      ['7', 'Clean: blade removes leftover toner', 10, 510]
    ];
    L.forEach(function (r) { b += badge(r[2] + 9, r[3] - 4, r[0], 9) + t(r[2] + 26, r[3], r[1], 'ts'); });
    return wrap(480, 526, 'Electrophotographic process around the drum',
      'A drum with seven numbered stations: charge at the top, expose at the upper left, develop at the left, transfer at the bottom where paper passes, separate, fuse in a roller pair to the right, and clean on the right.', b);
  }
};

/* ---------------- Network topologies ---------------- */
function node(x, y, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 9) + '" class="box tint-c"/>'; }

DIAGRAMS['network-topologies'] = {
  caption: 'Most office networks are a star: each copier, printer and PC has its own cable to a switch.',
  svg: function () {
    var b = '';
    // star
    var sc = { x: 120, y: 64 };
    var pts = [];
    for (var i = 0; i < 6; i++) {
      var a = -Math.PI / 2 + i * 2 * Math.PI / 6;
      pts.push({ x: sc.x + 50 * Math.cos(a) * 1.15, y: sc.y + 46 * Math.sin(a) });
    }
    pts.forEach(function (p) { b += '<path d="M' + sc.x + ' ' + sc.y + 'L' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + '" class="k"/>'; });
    b += '<rect x="94" y="54" width="52" height="20" rx="3" class="box tint-y"/>' + t(120, 68, 'switch', 'tsm', 'middle');
    pts.forEach(function (p) { b += node(p.x.toFixed(1), p.y.toFixed(1)); });
    b += t(120, 146, 'Star', 'tb', 'middle') + t(120, 164, 'Every device has its own cable', 'ts', 'middle');
    // bus
    b += '<path d="M276 64H452" class="k bold"/><path d="M276 54V74M452 54V74" class="k"/>';
    [292, 326, 360, 394, 428].forEach(function (x, k) {
      var y = k % 2 ? 94 : 34;
      b += '<path d="M' + x + ' 64V' + y + '" class="k"/>' + node(x, y);
    });
    b += t(364, 146, 'Bus', 'tb', 'middle') + t(364, 164, 'One shared cable, rare today', 'ts', 'middle');
    // ring
    var rc = { x: 120, y: 250 };
    b += '<circle cx="' + rc.x + '" cy="' + rc.y + '" r="44" class="k"/>';
    for (var j = 0; j < 6; j++) {
      var a2 = -Math.PI / 2 + j * 2 * Math.PI / 6;
      b += node((rc.x + 44 * Math.cos(a2)).toFixed(1), (rc.y + 44 * Math.sin(a2)).toFixed(1));
    }
    b += t(120, 322, 'Ring', 'tb', 'middle') + t(120, 340, 'Each device links to two neighbours', 'ts', 'middle');
    // mesh
    var mc = { x: 364, y: 250 };
    var mp = [];
    for (var m = 0; m < 5; m++) {
      var a3 = -Math.PI / 2 + m * 2 * Math.PI / 5;
      mp.push({ x: mc.x + 46 * Math.cos(a3), y: mc.y + 46 * Math.sin(a3) });
    }
    for (var p1 = 0; p1 < mp.length; p1++) for (var p2 = p1 + 1; p2 < mp.length; p2++) {
      b += '<path d="M' + mp[p1].x.toFixed(1) + ' ' + mp[p1].y.toFixed(1) + 'L' + mp[p2].x.toFixed(1) + ' ' + mp[p2].y.toFixed(1) + '" class="k2"/>';
    }
    mp.forEach(function (p) { b += node(p.x.toFixed(1), p.y.toFixed(1)); });
    b += t(364, 322, 'Mesh', 'tb', 'middle') + t(364, 340, 'Many links, more than one path', 'ts', 'middle');
    return wrap(480, 350, 'Network topologies',
      'Four small diagrams: star with a central switch, bus with one shared cable, ring where each device links to two neighbours, and mesh where devices have many links.', b);
  }
};

/* ---------------- Paper path ---------------- */
DIAGRAMS['paper-path'] = {
  caption: 'Side view of a typical paper path. Most jams happen where the paper changes direction, is gripped, or is heated. Layouts differ between machines.',
  svg: function () {
    var path = 'M150 252H220C262 252 258 175 300 175H410C440 175 430 110 455 110H474';
    var b = '';
    // tray with a stack of paper
    b += '<rect x="20" y="252" width="140" height="30" rx="3" class="box"/>';
    b += '<path d="M28 262H152M28 270H152" class="k2"/>' + t(90, 300, 'Paper tray', 'ts', 'middle');
    // paper channel
    b += '<path d="' + path + '" class="channel"/>';
    b += '<path d="' + path + '" class="paperline" marker-end="url(#ar)"/>';
    // rollers
    function roll(x, y, r, tint) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" class="box' + (tint ? ' ' + tint : '') + '"/>'; }
    b += roll(112, 238, 14, 'tint-y');
    b += roll(200, 240, 11) + roll(200, 264, 11) + t(200, 296, 'Feed rollers', 'tsm', 'middle');
    b += roll(296, 163, 11) + roll(296, 187, 11) + t(262, 140, 'Registration', 'tsm', 'middle');
    b += '<circle cx="346" cy="145" r="28" class="box tint-k-soft"/>' + t(346, 149, 'Drum', 'tsm', 'middle');
    b += roll(346, 187, 12, 'tint-c');
    b += roll(396, 160, 14, 'tint-m') + roll(396, 190, 14);
    b += t(396, 240, 'Fuser', 'tsm', 'middle');
    b += roll(455, 98, 10) + roll(455, 122, 10) + t(432, 96, 'Exit', 'tsm', 'end');
    // jam zones
    b += '<ellipse cx="132" cy="250" rx="50" ry="38" class="zone"/>' + badge(78, 212, 'A', 10);
    b += '<ellipse cx="258" cy="212" rx="50" ry="46" class="zone"/>' + badge(222, 172, 'B', 10);
    b += '<ellipse cx="346" cy="170" rx="34" ry="46" class="zone"/>' + badge(318, 108, 'C', 10);
    b += '<ellipse cx="402" cy="176" rx="26" ry="42" class="zone"/>' + badge(436, 208, 'D', 10);
    b += '<ellipse cx="456" cy="110" rx="22" ry="30" class="zone"/>' + badge(458, 70, 'E', 10);
    var L = [
      ['A', 'Pick-up and separation: misfeeds, double feeds'],
      ['B', 'Feed and registration: skew, late arrival'],
      ['C', 'Drum and transfer: image faults, paper wraps'],
      ['D', 'Fuser: wrap-around jams, creases'],
      ['E', 'Exit: curl, stacking problems']
    ];
    L.forEach(function (r, i) { b += badge(20, 336 + i * 24, r[0], 9) + t(38, 340 + i * 24, r[1], 'ts'); });
    return wrap(480, 460, 'Paper path side view',
      'Paper leaves a tray at the lower left, passes feed rollers, registration rollers, the drum and transfer roller, a fuser and exit rollers at the upper right. Five jam zones, A to E, are marked.', b);
  }
};

export function hasDiagram(name) {
  return Object.prototype.hasOwnProperty.call(DIAGRAMS, name);
}

/* Returns a <figure> with the drawing and its caption. */
export function diagram(name) {
  var d = DIAGRAMS[name];
  if (!d) return h('p', { class: 'note' }, 'Diagram not found.');
  return h('figure', { class: 'diagram' }, svgFromString(d.svg()), h('figcaption', null, d.caption));
}

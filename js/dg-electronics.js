/* Diagrams for analogue electronics, power supplies and digital electronics (modules 6 to 8). */
import { reg, wrap, t, badge, box, arrow, line, lines, circle, rect, poly, block } from './dg-kit.js';

function ground(x, y) {
  return line('M' + x + ' ' + y + 'V' + (y + 6)) + line('M' + (x - 14) + ' ' + (y + 6) + 'H' + (x + 14) + 'M' + (x - 9) + ' ' + (y + 12) + 'H' + (x + 9) + 'M' + (x - 4) + ' ' + (y + 18) + 'H' + (x + 4));
}

/* ---------------- Diode ---------------- */
reg('diode-symbols', 'A diode passes current one way: from anode to cathode, in the direction the triangle points. Reverse it and almost no current flows. This is why a diode test on a meter reads one way only.', function () {
  var b = '';
  b += line('M20 44H70') + poly('70,28 70,60 102,44') + line('M102 28V60') + line('M102 44H152');
  b += t(44, 82, 'Anode (+)', 'ts', 'middle') + t(128, 82, 'Cathode (–)', 'ts', 'middle');
  b += lines(180, 36, ['Conducts one way only.', 'Silicon forward drop:', 'about 0.6 to 0.7 V.'], 'ts', 'start', 17);
  function loop(ox, flip) {
    var s = '';
    s += line('M' + (ox + 20) + ' 250V213') + line('M' + (ox + 20) + ' 205V170');
    s += line('M' + (ox + 10) + ' 205H' + (ox + 30)) + line('M' + (ox + 15) + ' 213H' + (ox + 25), 'k bold');
    s += t(ox + 38, 200, '+', 'ts');
    s += line('M' + (ox + 20) + ' 170H' + (ox + 85));
    if (!flip) s += poly((ox + 85) + ',155 ' + (ox + 85) + ',185 ' + (ox + 117) + ',170') + line('M' + (ox + 117) + ' 155V185');
    else s += poly((ox + 117) + ',155 ' + (ox + 117) + ',185 ' + (ox + 85) + ',170') + line('M' + (ox + 85) + ' 155V185');
    s += line('M' + (ox + 117) + ' 170H' + (ox + 200) + 'V250H' + (ox + 130));
    s += rect(ox + 90, 240, 40, 20, 'box') + t(ox + 110, 255, 'R', 'tsm', 'middle');
    s += line('M' + (ox + 90) + ' 250H' + (ox + 20));
    return s;
  }
  b += loop(10, false) + loop(250, true);
  b += arrow(60, 160, 100, 160, 'k2') + t(80, 152, 'I', 'ts', 'middle');
  b += t(110, 290, 'Forward: current flows', 'tb', 'middle') + t(350, 290, 'Reverse: no current', 'tb', 'middle');
  b += lines(10, 322, ['Meter diode test: red on anode, black on cathode: about 0.5 to 0.7 V.', 'Leads swapped: OL (open). A shorted diode reads near 0 V both ways.'], 'ts', 'start', 17);
  return wrap(480, 352, 'Diode symbol and bias',
    'The diode symbol with anode and cathode marked, and two simple circuits with a battery, a diode and a resistor: one with current flowing and one with the diode reversed so no current flows.', b);
});

/* ---------------- Transistor as a switch ---------------- */
reg('transistor-switch', 'A small base current switches a larger collector current. Base high turns the transistor on and the load runs. Base low turns it off. A shorted transistor leaves the load on all the time.', function () {
  var b = '';
  b += circle(225, 170, 32, 'box');
  b += line('M212 150V190', 'k bold') + line('M212 170H154') + rect(110, 158, 44, 24, 'box') + t(132, 175, 'Rb', 'tsm', 'middle') + line('M110 170H40');
  b += line('M212 162L240 142V104');
  b += '<path d="M212 178L240 198" class="k" marker-end="url(#ar)"/>' + line('M240 198V236');
  b += rect(206, 60, 68, 44, 'box tint-y') + t(240, 80, 'Load', 'tsm', 'middle') + t(240, 95, 'solenoid', 'tsm', 'middle');
  b += line('M240 60V30H290') + t(298, 34, '+V', 'tb');
  b += ground(240, 236);
  b += t(252, 138, 'C', 'tb') + t(252, 214, 'E', 'tb') + t(184, 164, 'B', 'tb', 'end');
  b += lines(40, 136, ['Signal from', 'controller'], 'ts', 'start', 16);
  b += lines(310, 150, ['Base high: ON', 'Load energised', '', 'Base low: OFF', 'Load released'], 'ts', 'start', 17);
  return wrap(480, 290, 'Transistor as a switch',
    'An NPN transistor with its base fed through a resistor from a controller signal, its collector connected to a solenoid load and the positive supply, and its emitter to ground.', b);
});

/* ---------------- RC charging ---------------- */
reg('rc-charging', 'The capacitor charges fast at first, then more slowly. After one time constant it has reached 63% of the supply. After five it is, for practical purposes, full.', function () {
  var X0 = 60, Y0 = 200, W = 60, H = 150;
  var b = line('M' + X0 + ' 40V' + Y0 + 'H' + (X0 + 5 * W + 20), 'k2');
  b += '<path d="M' + X0 + ' ' + (Y0 - H) + 'H' + (X0 + 5 * W) + '" class="zero"/>';
  var d = '';
  for (var x = 0; x <= 5 * W; x += 3) d += (x === 0 ? 'M' : 'L') + (X0 + x) + ' ' + (Y0 - H * (1 - Math.exp(-x / W))).toFixed(1);
  b += '<path d="' + d + '" class="wave c"/>';
  [[1, '63%'], [2, '86%'], [3, '95%'], [5, '99%']].forEach(function (p) {
    var x = X0 + p[0] * W, y = Y0 - H * (1 - Math.exp(-p[0]));
    b += '<path d="M' + x + ' ' + Y0 + 'V' + y.toFixed(1) + '" class="zero"/>' + circle(x, y.toFixed(1), 4, 'box tint-m');
    b += t(x, (y - 10).toFixed(1), p[1], 'tsm', 'middle') + t(x, Y0 + 16, p[0] + 'τ', 'tsm', 'middle');
  });
  b += t(X0 - 6, Y0 - H + 4, '100%', 'ts', 'end') + t(X0 - 6, Y0 + 4, '0', 'ts', 'end');
  b += lines(10, 250, ['Time constant τ = R × C', 'Example: 10 kΩ × 100 µF = 10,000 × 0.0001 = 1 s', 'So the capacitor is about full after 5 τ = 5 s.'], 'ts', 'start', 17);
  return wrap(480, 306, 'RC charging curve',
    'A rising curve of capacitor voltage against time, with marks at one, two, three and five time constants at 63, 86, 95 and 99 percent of the supply voltage.', b);
});

/* ---------------- Op-amp amplifiers ---------------- */
reg('opamp-gain', 'Two ways to set the gain with two resistors. The inverting amplifier flips the signal. The non-inverting amplifier keeps its direction and always has a gain of at least 1.', function () {
  function amp(oy) {
    return poly('230,' + (40 + oy) + ' 230,' + (120 + oy) + ' 300,' + (80 + oy)) +
      t(238, 62 + oy, '–', 'tb') + t(238, 112 + oy, '+', 'tb') + line('M300 ' + (80 + oy) + 'H340') + t(344, 84 + oy, 'Vout', 'ts');
  }
  var b = t(10, 20, 'Inverting amplifier', 'tb');
  b += amp(0);
  b += line('M10 56H60') + rect(60, 46, 50, 20, 'box') + t(85, 60, 'Rin', 'tsm', 'middle') + line('M110 56H230');
  b += line('M150 56V30H200') + rect(200, 20, 60, 20, 'box') + t(230, 34, 'Rf', 'tsm', 'middle') + line('M260 30H320V80');
  b += circle(150, 56, 3, 'solid') + line('M230 104H200V120') + ground(200, 120);
  b += t(10, 40, 'Vin', 'ts');
  b += lines(10, 170, ['Gain = –Rf ÷ Rin', 'Rf 100 kΩ, Rin 10 kΩ: gain = –10'], 'ts', 'start', 17);
  var oy = 200;
  b += t(10, oy + 12, 'Non-inverting amplifier', 'tb');
  b += amp(oy);
  b += line('M10 ' + (104 + oy) + 'H230') + t(10, oy + 96, 'Vin', 'ts');
  b += line('M320 ' + (80 + oy) + 'V' + (140 + oy) + 'H260') + rect(200, oy + 130, 60, 20, 'box') + t(230, oy + 144, 'Rf', 'tsm', 'middle') + line('M200 ' + (140 + oy) + 'H120V' + (56 + oy) + 'H230');
  b += circle(120, oy + 140, 3, 'solid') + line('M120 ' + (140 + oy) + 'V' + (160 + oy)) + rect(108, oy + 160, 24, 36, 'box') + t(150, oy + 182, 'R1', 'tsm') + ground(120, oy + 196);
  b += lines(10, oy + 238, ['Gain = 1 + Rf ÷ R1', 'Rf 100 kΩ, R1 10 kΩ: gain = 1 + 10 = 11'], 'ts', 'start', 17);
  return wrap(480, oy + 290, 'Op-amp amplifier circuits',
    'Two op-amp circuits. The first is an inverting amplifier with an input resistor and a feedback resistor to the inverting input. The second is a non-inverting amplifier with the signal on the plus input and a feedback divider of two resistors.', b);
});

/* ---------------- Photo-interrupter ---------------- */
reg('photo-interrupter', 'A light beam crosses the slot. A flag on a moving part cuts the beam, and the output changes state. Dust or a stray paper fibre in the slot can fake a blocked beam.', function () {
  function unit(ox, blocked) {
    var s = poly((ox + 30) + ',40 ' + (ox + 80) + ',40 ' + (ox + 80) + ',90 ' + (ox + 140) + ',90 ' + (ox + 140) + ',40 ' + (ox + 190) + ',40 ' + (ox + 190) + ',110 ' + (ox + 30) + ',110', 'box tint-k-soft');
    s += rect(ox + 66, 54, 14, 24, 'box tint-y', 2) + t(ox + 73, 34, 'LED', 'tsm', 'middle');
    s += rect(ox + 140, 54, 14, 24, 'box tint-c', 2) + t(ox + 147, 34, 'sensor', 'tsm', 'middle');
    if (!blocked) s += '<path d="M' + (ox + 82) + ' 66H' + (ox + 138) + '" class="beam" marker-end="url(#ar)"/>';
    else s += '<path d="M' + (ox + 82) + ' 66H' + (ox + 100) + '" class="beam"/>' + rect(ox + 104, 30, 12, 56, 'box tint-m', 2);
    return s;
  }
  var b = unit(10, false) + unit(250, true);
  b += t(110, 140, 'Flag out', 'tb', 'middle') + t(110, 158, 'Beam reaches the sensor', 'ts', 'middle');
  b += t(350, 140, 'Flag in', 'tb', 'middle') + t(350, 158, 'Beam blocked, output changes', 'ts', 'middle');
  b += lines(10, 196, ['Used as paper sensors, home-position sensors and cover detectors.', 'Whether blocked reads high or low depends on the circuit.'], 'ts', 'start', 17);
  return wrap(480, 236, 'Photo-interrupter sensor',
    'Two views of a U-shaped sensor with an LED on one side and a light sensor on the other. In the first a beam crosses the slot. In the second a flag blocks the beam.', b);
});

/* ---------------- Power rails ---------------- */
reg('power-rails-map', 'One supply makes several rails. Each rail feeds a different group of loads. The voltages shown are common examples. Always check the machine\'s own service manual.', function () {
  var b = block(10, 100, 86, 60, 'Mains', 'AC in');
  b += block(130, 14, 100, 232, 'Power supply', 'unit', 'tint-y-soft');
  b += arrow(96, 130, 130, 130);
  var rails = [['5 V', 'Logic, controller, panel'], ['12 V', 'Sensors, fans'], ['24 V', 'Motors, solenoids, clutches'], ['Mains', 'Fuser lamp, switched'], ['HV', 'Charge, develop, transfer']];
  rails.forEach(function (r, i) {
    var y = 14 + i * 48;
    b += box(300, y, 170, 40, i === 4 ? 'tint-m-soft' : 'tint-c-soft') + t(385, y + 24, r[1], 'tsm', 'middle');
    b += arrow(230, y + 20, 300, y + 20, 'k') + t(265, y + 14, r[0], 'tsm', 'middle');
  });
  b += t(10, 270, 'HV is the high-voltage board for imaging. Standby power keeps the panel awake.', 'ts');
  return wrap(480, 284, 'Power rails in an office machine',
    'A mains input feeding a power supply unit, which gives separate outputs: 5 volts for logic, 12 volts for sensors and fans, 24 volts for motors and solenoids, switched mains for the fuser lamp, and high voltage for imaging.', b);
});

/* ---------------- Logic gates ---------------- */
reg('logic-gates', 'Truth tables list every input combination and the output. 1 is high and 0 is low. NAND and NOR are AND and OR with the output inverted, shown by the small circle.', function () {
  var G = {
    AND: '<path d="M0 0H24A22 22 0 0 1 24 44H0Z" class="box tint-c-soft"/>',
    OR: '<path d="M0 0Q22 0 46 22Q22 44 0 44Q12 22 0 0Z" class="box tint-c-soft"/>',
    NOT: '<polygon points="0,2 0,42 34,22" class="box tint-c-soft"/>'
  };
  var cells = [
    ['AND', G.AND, 2, 0, [0, 0, 0, 1], 46], ['OR', G.OR, 2, 0, [0, 1, 1, 1], 46], ['NOT', G.NOT, 1, 1, [1, 0], 34],
    ['NAND', G.AND, 2, 1, [1, 1, 1, 0], 46], ['NOR', G.OR, 2, 1, [1, 0, 0, 0], 46], ['XOR', G.OR + '<path d="M-7 0Q5 22 -7 44" class="k"/>', 2, 0, [0, 1, 1, 0], 46]
  ];
  var b = '';
  cells.forEach(function (c, i) {
    var ox = 14 + (i % 3) * 156, oy = 10 + Math.floor(i / 3) * 190;
    b += t(ox + 56, oy + 8, c[0], 'tb', 'middle');
    var g = '<g transform="translate(' + (ox + 30) + ' ' + (oy + 22) + ')">' + c[1];
    if (c[2] === 2) g += line('M-18 12H0M-18 32H0', 'k');
    else g += line('M-18 22H0', 'k');
    var w = c[5];
    if (c[3]) { g += circle(w + 4, 22, 4, 'box'); g += line('M' + (w + 8) + ' 22H' + (w + 24), 'k'); }
    else g += line('M' + w + ' 22H' + (w + 24), 'k');
    g += '</g>';
    b += g;
    var rows = c[2] === 2 ? [[0, 0], [0, 1], [1, 0], [1, 1]] : [[0], [1]];
    b += t(ox + 20, oy + 96, c[2] === 2 ? 'A  B  Q' : 'A  Q', 'tsm');
    rows.forEach(function (r, k) {
      b += t(ox + 20, oy + 114 + k * 16, r.join('  ') + '  ' + c[4][k], 'tsm');
    });
  });
  return wrap(480, 396, 'Logic gates and truth tables',
    'Six logic gate symbols with truth tables: AND, OR, NOT, NAND, NOR and XOR.', b);
});

/* ---------------- Binary place values ---------------- */
reg('binary-place-values', 'Each bit is worth double the one to its right. Add the place values where the bit is 1. Group the bits in fours to read hexadecimal.', function () {
  var vals = [128, 64, 32, 16, 8, 4, 2, 1], bits = [0, 1, 1, 0, 1, 0, 0, 1];
  var b = t(10, 20, 'Place value', 'ts');
  vals.forEach(function (v, i) {
    var x = 14 + i * 57;
    b += box(x, 30, 52, 30, 'tint-c-soft') + t(x + 26, 51, String(v), 'tb', 'middle');
    b += box(x, 66, 52, 34, bits[i] ? 'tint-y' : '') + t(x + 26, 90, String(bits[i]), 'tform', 'middle');
  });
  b += t(10, 120, 'Bit', 'ts');
  b += lines(10, 148, ['64 + 32 + 8 + 1 = 105'], 'tb', 'start');
  b += line('M14 170H228', 'k2') + line('M242 170H456', 'k2');
  b += box(14, 180, 214, 30, 'tint-y-soft') + t(121, 200, '0110  →  6', 'tb', 'middle');
  b += box(242, 180, 214, 30, 'tint-y-soft') + t(349, 200, '1001  →  9', 'tb', 'middle');
  b += t(240, 238, 'So 0110 1001 in binary is 69 in hexadecimal, which is 105 in decimal.', 'ts', 'middle');
  b += t(240, 258, 'Check: 6 × 16 + 9 = 105', 'ts', 'middle');
  return wrap(480, 270, 'Binary place values',
    'Eight bits with place values 128 down to 1 and the bits 0 1 1 0 1 0 0 1 below them, adding to 105. The bits are grouped in fours to give hexadecimal 6 and 9.', b);
});

/* ---------------- Microcontroller block ---------------- */
reg('microcontroller-block', 'The processor runs the program in firmware. It needs power, a clock and a clean reset first. Its inputs and outputs connect it to sensors, motors and the network. A battery keeps the clock and counters alive when the machine is off.', function () {
  var b = block(150, 34, 70, 26, 'Clock', '', 'tint-y-soft') + block(260, 34, 70, 26, 'Reset', '', 'tint-y-soft');
  b += arrow(185, 60, 185, 94) + arrow(295, 60, 295, 94);
  b += block(150, 94, 180, 46, 'Processor', 'runs the program', 'tint-c');
  b += line('M240 140V190') + line('M40 190H440');
  var items = [['Firmware', 'flash'], ['RAM', 'data'], ['Backup', 'battery'], ['Inputs', 'sensors'], ['Drivers', 'motors'], ['Comms', 'network']];
  items.forEach(function (it, i) {
    var x = 10 + i * 78;
    b += line('M' + (x + 36) + ' 190V214');
    b += block(x, 214, 72, 50, it[0], it[1], i < 3 ? 'tint-c-soft' : 'tint-m-soft');
  });
  b += t(10, 296, 'Check power, clock and reset first when a board will not start.', 'ts');
  return wrap(480, 310, 'Microcontroller board block diagram',
    'A processor with clock and reset inputs above it, joined by a bus to six blocks: firmware memory, working memory, battery-backed memory, inputs, drivers and communications.', b);
});

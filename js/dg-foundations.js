/* Diagrams for safety, tools, measuring, electrical basics, mechanics and repair (modules 1 to 5). */
import { reg, wrap, t, badge, box, arrow, line, lines, circle, rect, poly, block, steps, teeth } from './dg-kit.js';

/* ---------------- Hierarchy of controls ---------------- */
reg('hierarchy-controls', 'Work down from the top. The best control removes the hazard. Protective equipment is the last line of defence, because it only protects the person wearing it.', function () {
  var rows = [
    ['1  Eliminate', 'Remove the hazard completely', 'tint-g', 440],
    ['2  Substitute', 'Swap it for something safer', 'tint-c', 372],
    ['3  Engineering controls', 'Guards, interlocks, extraction', 'tint-y-soft', 304],
    ['4  Administrative', 'Procedures, training, signs', 'tint-m-soft', 236],
    ['5  PPE', 'Gloves, goggles', 'tint-m', 168]
  ];
  var b = '', y = 14, h = 52;
  rows.forEach(function (r, i) {
    var top = r[3], bot = i < rows.length - 1 ? rows[i + 1][3] : r[3] - 68;
    var cx = 240;
    b += '<polygon points="' + (cx - top / 2) + ',' + y + ' ' + (cx + top / 2) + ',' + y + ' ' + (cx + bot / 2) + ',' + (y + h) + ' ' + (cx - bot / 2) + ',' + (y + h) + '" class="box ' + r[2] + '"/>';
    b += t(cx, y + 23, r[0], 'tb', 'middle') + t(cx, y + 41, r[1], 'ts', 'middle');
    y += h;
  });
  b += t(10, 300, 'Most effective at the top', 'ts') + t(10, 318, 'Least effective at the bottom', 'ts');
  return wrap(480, 330, 'Hierarchy of controls',
    'An upside-down pyramid of five levels from top to bottom: eliminate, substitute, engineering controls, administrative controls and personal protective equipment.', b);
});

/* ---------------- Warning signs ---------------- */
reg('warning-signs', 'Hazard signs you will meet on machines and in workshops. A yellow triangle warns of a hazard. Learn them before you open a machine.', function () {
  function tri(cx, y, inner) {
    return '<polygon points="' + cx + ',' + y + ' ' + (cx - 44) + ',' + (y + 76) + ' ' + (cx + 44) + ',' + (y + 76) + '" class="box tint-y"/>' + inner;
  }
  var b = '';
  // electric shock
  b += tri(90, 16, '<polygon points="94,38 80,64 90,64 85,82 102,56 92,56" class="solid"/>');
  b += t(90, 112, 'Electric shock', 'tsm', 'middle');
  // hot surface
  b += tri(240, 16, '<path d="M222 62Q228 54 222 46M240 62Q246 54 240 46M258 62Q264 54 258 46" class="k"/><path d="M216 72H264" class="k bold"/>');
  b += t(240, 112, 'Hot surface', 'tsm', 'middle');
  // laser
  b += tri(390, 16, '<circle cx="390" cy="62" r="5" class="solid"/><path d="M390 62L372 44M390 62L408 44M390 62L390 40M390 62L376 70M390 62L404 70" class="k"/>');
  b += t(390, 112, 'Laser beam', 'tsm', 'middle');
  // moving parts
  b += tri(90, 142, '<circle cx="82" cy="204" r="9" class="box"/><circle cx="100" cy="196" r="7" class="box"/><path d="M82 195V213M73 204H91M100 189V203M93 196H107" class="k2"/>');
  b += t(90, 238, 'Moving parts, pinch', 'tsm', 'middle');
  // static
  b += tri(240, 142, '<text x="240" y="204" class="tb" text-anchor="middle">ESD</text>');
  b += t(240, 238, 'Static sensitive', 'tsm', 'middle');
  // chemical
  b += tri(390, 142, '<path d="M382 172H398L404 196H376Z" class="box"/><path d="M386 172V164H394V172" class="k2"/><path d="M380 190H400" class="k2"/>');
  b += t(390, 238, 'Chemical hazard', 'tsm', 'middle');
  return wrap(480, 252, 'Common hazard signs',
    'Six yellow warning triangles: electric shock, hot surface, laser beam, moving parts, static-sensitive devices and chemical hazard.', b);
});

/* ---------------- Safe isolation ---------------- */
reg('isolation-sequence', 'The order matters. Prove the tester works before and after you test, because a faulty tester can read dead on a live circuit.', function () {
  return steps('Safe isolation sequence', 'Five steps in order: switch off, unplug, wait and discharge, test it is dead, then work.', [
    { h: 'Switch off', n: ['Use the machine power switch'] },
    { h: 'Unplug', n: ['Pull the plug, not the cord', 'Keep the plug in sight'] },
    { h: 'Wait and discharge', n: ['Capacitors hold charge', 'Hot parts need time to cool'] },
    { h: 'Test it is dead', n: ['Prove the tester on a live source', 'Test, then prove it again'], tint: 'tint-y-soft' },
    { h: 'Work safely', n: ['Insulated tools', 'One hand where you can'], tint: 'tint-g' }
  ]);
});

/* ---------------- Multimeter ---------------- */
reg('multimeter-panel', 'Black lead in COM, always. Red lead in the voltage and resistance jack for almost every test. Move it to the current jack only when you measure current in series, and move it back afterwards.', function () {
  var b = '';
  b += rect(120, 10, 200, 300, 'box tint-k-soft', 14);
  b += rect(142, 26, 156, 52, 'box tint-g', 4) + t(290, 64, '12.47', 'tform', 'end') + t(160, 64, 'V', 'ts');
  var cx = 220, cy = 160;
  b += circle(cx, cy, 36, 'box') + '<path d="M' + cx + ' ' + cy + 'L' + cx + ' ' + (cy - 30) + '" class="k bold"/>' + circle(cx, cy, 4, 'box tint-m');
  var pos = [['OFF', 0], ['V AC', 52], ['V DC', 104], ['Ω', 156], ['cont.', 208], ['diode', 260], ['A', 312]];
  pos.forEach(function (p) {
    var a = p[1] * Math.PI / 180;
    var x = cx + 62 * Math.sin(a), y = cy - 62 * Math.cos(a);
    b += t(x.toFixed(1), (y + 4).toFixed(1), p[0], 'tsm', 'middle');
  });
  var jacks = [['COM', 160, 'solid'], ['V Ω', 220, 'box tint-m'], ['A', 280, 'box tint-y']];
  jacks.forEach(function (j) {
    b += circle(j[1], 272, 11, j[2]) + t(j[1], 300, j[0], 'tsm', 'middle');
  });
  b += t(330, 100, 'Dial: choose what to', 'ts') + t(330, 116, 'measure and the range', 'ts');
  b += '<path d="M328 108L262 140" class="k2"/>';
  b += t(330, 232, 'Black lead: COM', 'ts') + t(330, 250, 'Red lead: V Ω for', 'ts') + t(330, 266, 'volts, ohms, continuity', 'ts');
  b += t(330, 284, 'A jack: current only', 'ts');
  return wrap(480, 322, 'Digital multimeter controls',
    'A multimeter with a display at the top, a rotary dial with positions OFF, AC volts, DC volts, ohms, continuity, diode and amps, and three jacks at the bottom marked COM, V ohm and A.', b);
});

/* ---------------- Metric prefixes ---------------- */
reg('metric-prefixes', 'Each step up the ladder is a factor of 1,000. Moving up divides the number by 1,000. Moving down multiplies it by 1,000.', function () {
  var rows = [['G', 'giga', '10⁹'], ['M', 'mega', '10⁶'], ['k', 'kilo', '10³'], ['', 'base unit', '1'], ['m', 'milli', '10⁻³'], ['µ', 'micro', '10⁻⁶'], ['n', 'nano', '10⁻⁹'], ['p', 'pico', '10⁻¹²']];
  var b = '';
  rows.forEach(function (r, i) {
    var y = 12 + i * 38;
    b += box(10, y, 230, 30, i === 3 ? 'tint-y' : 'tint-c-soft');
    b += t(26, y + 21, r[0] || '–', 'tb') + t(70, y + 21, r[1], 't') + t(228, y + 21, r[2], 'ts', 'end');
  });
  b += arrow(262, 30, 262, 288, 'k2');
  b += t(272, 52, '× 1,000 for', 'ts') + t(272, 68, 'each step down', 'ts');
  b += t(272, 270, '÷ 1,000 for', 'ts') + t(272, 286, 'each step up', 'ts');
  b += t(272, 112, 'Examples', 'tb');
  b += lines(272, 134, ['4.7 kΩ = 4,700 Ω', '220 µF = 0.00022 F', '50 mA = 0.05 A', '2.2 MΩ = 2,200,000 Ω', '12 ns = 0.000000012 s'], 'ts', 'start', 20);
  return wrap(480, 314, 'Metric prefixes',
    'A ladder from giga at the top to pico at the bottom, with the base unit in the middle. Each step changes the value by a factor of one thousand.', b);
});

/* ---------------- Oscilloscope screen ---------------- */
reg('scope-screen', 'Read the screen in divisions, then multiply by the settings. Here: 3 divisions peak to peak at 2 V per division is 6 V. One cycle across 4 divisions at 5 ms per division is 20 ms, so the frequency is 50 Hz.', function () {
  var b = rect(10, 10, 280, 240, 'box', 6);
  for (var i = 1; i < 7; i++) b += '<path d="M' + (10 + i * 40) + ' 10V250" class="zero"/>';
  for (var j = 1; j < 6; j++) b += '<path d="M10 ' + (10 + j * 40) + 'H290" class="zero"/>';
  b += '<path d="M10 130H290" class="k2"/>';
  var d = '';
  for (var x = 0; x <= 280; x += 2) d += (x === 0 ? 'M' : 'L') + (10 + x) + ' ' + (130 - 60 * Math.sin(2 * Math.PI * x / 160)).toFixed(1);
  b += '<path d="' + d + '" class="wave c"/>';
  b += '<path d="M50 56H210" class="k2" marker-start="url(#ar)" marker-end="url(#ar)"/>' + t(130, 48, 'T', 'tb', 'middle');
  b += '<path d="M276 70V190" class="k2" marker-start="url(#ar)" marker-end="url(#ar)"/>';
  b += lines(306, 40, ['2 V per division', '5 ms per division'], 'tb', 'start', 20);
  b += lines(306, 110, ['Vpp = 3 div × 2 V', '= 6 V', 'Vpeak = 3 V'], 'ts', 'start', 18);
  b += lines(306, 184, ['T = 4 div × 5 ms', '= 20 ms', 'f = 1 ÷ 0.02 s', '= 50 Hz'], 'ts', 'start', 18);
  return wrap(480, 262, 'Oscilloscope screen',
    'An oscilloscope grid of eight by six divisions showing a sine wave with the period and the peak-to-peak height marked, and the sums for voltage, period and frequency beside it.', b);
});

/* ---------------- Screw heads ---------------- */
reg('screw-heads', 'Match the driver to the head. A tip that is slightly wrong slips, damages the screw and can damage the part. Pozidriv and Phillips are easy to mix up.', function () {
  function head(cx, cy, label, inner) {
    return circle(cx, cy, 34, 'box tint-k-soft') + inner + t(cx, cy + 56, label, 'tsm', 'middle');
  }
  var torx = [];
  for (var k = 0; k < 12; k++) {
    var ang = k * Math.PI / 6 - Math.PI / 2, rad = k % 2 ? 11 : 20;
    torx.push((360 + rad * Math.cos(ang)).toFixed(1) + ',' + (50 + rad * Math.sin(ang)).toFixed(1));
  }
  var hex = [];
  for (var m = 0; m < 6; m++) {
    var an = m * Math.PI / 3;
    hex.push((220 + 20 * Math.cos(an)).toFixed(1) + ',' + (160 + 20 * Math.sin(an)).toFixed(1));
  }
  var b = '';
  b += head(80, 50, 'Slotted', '<path d="M54 50H106" class="k bold"/>');
  b += head(220, 50, 'Phillips', '<path d="M220 28V72M198 50H242" class="k bold"/>');
  b += head(360, 50, 'Torx', '<polygon points="' + torx.join(' ') + '" class="box tint-y"/>');
  b += head(80, 160, 'Pozidriv', '<path d="M80 138V182M58 160H102" class="k bold"/><path d="M64 144L68 148M96 144L92 148M64 176L68 172M96 176L92 172" class="k"/>');
  b += head(220, 160, 'Hex socket', '<polygon points="' + hex.join(' ') + '" class="box tint-y"/>');
  b += head(360, 160, 'Square', '<rect x="346" y="146" width="28" height="28" class="box tint-y"/>');
  return wrap(480, 252, 'Screw head types',
    'Six screw heads seen from above: slotted, Phillips, Torx, Pozidriv, hex socket and square socket.', b);
});

/* ---------------- AC waveform ---------------- */
reg('ac-waveform', 'Mains is quoted as an RMS value. The peak is about 1.41 times higher. A 230 V supply peaks near 325 V. The RMS value does the same heating as a DC supply of that voltage.', function () {
  var b = '<path d="M50 130H410" class="k2"/><path d="M50 30V230" class="k2"/>';
  var d = '';
  for (var x = 0; x <= 340; x += 2) d += (x === 0 ? 'M' : 'L') + (60 + x) + ' ' + (130 - 80 * Math.sin(2 * Math.PI * x / 170)).toFixed(1);
  b += '<path d="' + d + '" class="wave c"/>';
  b += '<path d="M50 50H410" class="zero"/><path d="M50 210H410" class="zero"/>';
  b += '<path d="M50 73.4H410" class="beam"/>';
  b += t(416, 54, 'Vpeak', 'ts') + t(416, 77, 'Vrms', 'ts') + t(416, 214, '–Vpeak', 'ts');
  b += '<path d="M102.5 40H272.5" class="k2" marker-start="url(#ar)" marker-end="url(#ar)"/>' + t(187, 34, 'one cycle, T', 'ts', 'middle');
  b += lines(60, 252, ['Vrms = 0.707 × Vpeak', 'Vpeak = 1.414 × Vrms', 'For 230 V RMS: Vpeak ≈ 325 V, peak to peak ≈ 650 V'], 'ts', 'start', 17);
  b += t(60, 24, 'Volts', 'ts') + t(380, 148, 'time', 'ts');
  return wrap(480, 312, 'AC waveform values',
    'A sine wave over two cycles with the peak value, the RMS value as a dashed line below the peak, and one cycle marked.', b);
});

/* ---------------- Live, neutral, earth ---------------- */
reg('live-neutral-earth', 'Earth does nothing in normal use. If a fault puts live on the metal case, current flows to earth through the earth wire, the fuse or breaker opens, and nobody gets a shock.', function () {
  var b = '';
  b += circle(50, 130, 22, 'box') + t(50, 135, '~', 'tform', 'middle');
  b += t(78, 134, 'Supply', 'ts');
  b += line('M50 108V60H110M164 60H350V90');
  b += rect(110, 48, 54, 24, 'box tint-y') + t(137, 65, 'Fuse', 'tsm', 'middle');
  b += t(240, 52, 'Live (L)', 'tb', 'middle');
  b += line('M50 152V200H350V160');
  b += t(240, 222, 'Neutral (N)', 'tb', 'middle');
  b += rect(290, 90, 120, 70, 'box tint-c-soft') + t(350, 130, 'Machine', 'tb', 'middle');
  b += '<rect x="278" y="78" width="144" height="94" rx="10" class="box" style="fill:none;stroke-dasharray:6 4"/>' + t(422, 70, 'Metal case', 'ts', 'end');
  b += line('M400 172V246');
  b += line('M380 246H420M386 254H414M392 262H408');
  b += t(440, 252, 'Earth (E)', 'tb', 'start');
  b += lines(10, 300, ['Live brings the power in, through the fuse. Neutral carries it back.', 'Earth is the safety path from the case to ground.'], 'ts', 'start', 17);
  return wrap(480, 340, 'Live, neutral and earth',
    'A supply with a live wire through a fuse to a machine, a neutral wire returning, and an earth wire from the metal case to the ground symbol.', b);
});

/* ---------------- Half-split ---------------- */
reg('half-split', 'Test in the middle first. Each test removes half of the remaining stages. Here the fault is in stage 6, found in three tests instead of up to eight.', function () {
  var b = '';
  for (var i = 0; i < 8; i++) {
    var x = 8 + i * 59;
    b += box(x, 30, 48, 44, i === 5 ? 'tint-m' : 'tint-c-soft') + t(x + 24, 58, String(i + 1), 'tb', 'middle');
    if (i < 7) b += arrow(x + 48, 52, x + 59, 52);
  }
  b += t(8, 20, 'Signal path, stage by stage', 'ts');
  // test points between stages
  function tp(after, n, y) {
    var x = 8 + after * 59 - 6;
    return '<path d="M' + x + ' ' + (y) + 'V76" class="k2"/>' + badge(x, y + 10, String(n), 10);
  }
  b += tp(4, 1, 96) + tp(6, 2, 96) + tp(5, 3, 96);
  b += lines(10, 150, ['Test 1, after stage 4: signal is good. The fault is in stages 5 to 8.', 'Test 2, after stage 6: signal is bad. The fault is in stage 5 or 6.', 'Test 3, after stage 5: signal is good. The fault is in stage 6.'], 'ts', 'start', 22);
  return wrap(480, 226, 'Half-split method',
    'Eight stages in a row with stage 6 marked as faulty and three numbered test points showing how each test halves the search.', b);
});

/* ---------------- Diagnosis loop ---------------- */
reg('diagnosis-loop', 'The same loop works on every machine. If a test result does not fit your idea, go back and think again before you change anything.', function () {
  return steps('Fault diagnosis loop', 'Seven steps: gather information, form a hypothesis, test it, narrow down, fix the cause, verify, and record. An arrow leads back from testing to the hypothesis.', [
    { h: 'Gather information', n: ['Customer report, history', 'Error codes, what changed'] },
    { h: 'Form a hypothesis', n: ['What could cause this?', 'Most likely first'] },
    { h: 'Test it', n: ['One check at a time', 'Safely, with the right tool'] },
    { h: 'Narrow it down', n: ['Rule parts in or out', 'Half-split if you can'] },
    { h: 'Fix the cause', n: ['Not just the symptom'], tint: 'tint-y-soft' },
    { h: 'Verify', n: ['Prove what failed now works'], tint: 'tint-y-soft' },
    { h: 'Record the job', n: ['Service report, parts, readings'], tint: 'tint-g' }
  ], { back: [3, 2], backLabel: 'Result does not fit?' });
});

/* ---------------- Gear ratio ---------------- */
reg('gear-ratio', 'The small gear turns twice as fast as the big one, and in the opposite direction. Ratio = driven teeth ÷ driver teeth. Speed out = speed in ÷ ratio.', function () {
  var b = '';
  b += circle(150, 130, 40, 'box tint-y') + teeth(150, 130, 40, 20, 0, 9, 8) + circle(150, 130, 5, 'box');
  b += circle(270, 130, 80, 'box tint-c-soft') + teeth(270, 130, 80, 40, 4.5, 9, 8) + circle(270, 130, 5, 'box');
  b += '<path d="M120 80A52 52 0 0 1 180 80" class="k2" marker-end="url(#ar)"/>';
  b += '<path d="M222 38A92 92 0 0 0 318 38" class="k2" marker-end="url(#ar)"/>';
  b += t(150, 130 + 4, '20', 'tb', 'middle') + t(270, 130 + 4, '40', 'tb', 'middle');
  b += t(150, 206, 'Driver: 20 teeth', 'tsm', 'middle') + t(150, 222, '900 rpm', 'tsm', 'middle');
  b += t(270, 236, 'Driven: 40 teeth', 'tsm', 'middle') + t(270, 252, '450 rpm', 'tsm', 'middle');
  b += lines(366, 110, ['Ratio', '= 40 ÷ 20', '= 2 : 1'], 'tb', 'start', 20);
  b += lines(366, 190, ['Out = 900 ÷ 2', '= 450 rpm'], 'ts', 'start', 18);
  return wrap(480, 270, 'Gear ratio',
    'A small gear with 20 teeth driving a large gear with 40 teeth. The small gear turns at 900 rpm, the large gear at 450 rpm, in the opposite direction.', b);
});

/* ---------------- Drive types ---------------- */
reg('drive-types', 'Gears reverse the direction and give exact timing. Belts are quiet and simple. Timing belts have teeth so they cannot slip. Chains are strong but need lubricating.', function () {
  var b = '';
  // gears
  b += circle(50, 52, 22, 'box tint-y') + teeth(50, 52, 22, 12, 0, 6, 6) + circle(104, 52, 22, 'box tint-c-soft') + teeth(104, 52, 22, 12, 15, 6, 6);
  b += t(180, 46, 'Gears', 'tb') + t(180, 64, 'Reverse direction. Positive drive.', 'ts');
  // belt
  b += circle(46, 140, 20, 'box tint-y') + circle(116, 140, 14, 'box tint-c-soft');
  b += line('M46 120L116 126M46 160L116 154', 'k') + '<path d="M26 140A20 20 0 0 1 46 120M46 160A20 20 0 0 1 26 140M116 126A14 14 0 0 1 130 140M130 140A14 14 0 0 1 116 154" class="k"/>';
  b += t(180, 134, 'Belt or timing belt', 'tb') + t(180, 152, 'Same direction. Quiet. Teeth stop slip.', 'ts');
  // chain
  b += circle(46, 228, 20, 'box tint-y') + circle(116, 228, 14, 'box tint-c-soft');
  b += '<path d="M46 208L116 214M46 248L116 242M26 228A20 20 0 0 1 46 208M46 248A20 20 0 0 1 26 228M116 214A14 14 0 0 1 130 228M130 228A14 14 0 0 1 116 242" class="k" style="stroke-dasharray:5 3"/>';
  b += t(180, 222, 'Chain and sprockets', 'tb') + t(180, 240, 'Strong. Needs lubricant. Can stretch.', 'ts');
  return wrap(480, 280, 'Drive types',
    'Three small drawings with notes: two meshing gears, two pulleys joined by a belt, and two sprockets joined by a chain.', b);
});

/* ---------------- Solder joints ---------------- */
reg('solder-joints', 'A good joint wets both the lead and the pad, so the solder flows up the lead in a smooth concave fillet. Dull, grainy, cracked or ball-shaped solder needs reworking.', function () {
  var b = '';
  function board(cx) { return rect(cx - 70, 168, 140, 16, 'box tint-g', 2) + rect(cx - 5, 40, 10, 128, 'box tint-k-soft', 1); }
  // good
  b += board(80);
  b += '<path d="M30 168Q70 164 75 110L85 110Q90 164 130 168Z" class="box tint-k-soft"/>';
  b += t(80, 208, 'Good joint', 'tb', 'middle') + lines(80, 226, ['Smooth, shiny', 'Concave fillet'], 'ts', 'middle', 16);
  // dry
  b += board(240);
  b += '<path d="M192 168Q196 140 222 128Q240 116 258 128Q284 140 288 168Z" class="box tint-m-soft"/><path d="M236 128V168" class="beam"/>';
  b += t(240, 208, 'Dry or cold joint', 'tb', 'middle') + lines(240, 226, ['Dull, grainy, cracked', 'Gap round the lead'], 'ts', 'middle', 16);
  // too much
  b += board(400);
  b += '<ellipse cx="400" cy="140" rx="40" ry="30" class="box tint-y-soft"/>';
  b += t(400, 208, 'Too much solder', 'tb', 'middle') + lines(400, 226, ['Ball shape', 'Hides the joint'], 'ts', 'middle', 16);
  return wrap(480, 262, 'Solder joint quality',
    'Three cross-sections of a component lead through a board: a good joint with a smooth concave fillet, a dry joint with a crack and a dull surface, and a joint with too much solder in a ball.', b);
});

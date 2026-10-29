/*
 * Realistic drawings of the machine parts: rollers, drums, lamps, glass, heads and paper.
 * The shapes use real colours and a lit, shaded look. Text colour still comes from the .dg classes,
 * so labels follow the light and dark themes. Loaded after the plain drawings, so each one here replaces the older drawing of the same name.
 */
import { reg, wrap, t, badge, lines, line, arrow } from './dg-kit.js';

/* Gradients shared by every drawing here. */
var DEFS = '<linearGradient id="omMetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1f4f6"/><stop offset=".45" stop-color="#bcc3ca"/><stop offset="1" stop-color="#7c858e"/></linearGradient>' +
  '<linearGradient id="omDark" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7a828a"/><stop offset=".5" stop-color="#4a5159"/><stop offset="1" stop-color="#2a2e33"/></linearGradient>' +
  '<linearGradient id="omRollV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5b6168"/><stop offset=".3" stop-color="#d5dade"/><stop offset=".7" stop-color="#9aa2aa"/><stop offset="1" stop-color="#4b5158"/></linearGradient>' +
  '<radialGradient id="omRoll" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#e9edf0"/><stop offset=".6" stop-color="#9aa2aa"/><stop offset="1" stop-color="#4b5158"/></radialGradient>' +
  '<radialGradient id="omRubber" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#5d6268"/><stop offset=".6" stop-color="#2a2e33"/><stop offset="1" stop-color="#14161a"/></radialGradient>' +
  '<radialGradient id="omHot" cx=".4" cy=".35" r=".9"><stop offset="0" stop-color="#f4c7bf"/><stop offset=".55" stop-color="#d9786a"/><stop offset="1" stop-color="#8f2f25"/></radialGradient>' +
  '<radialGradient id="omDrum" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#cfd8e0"/><stop offset=".55" stop-color="#7f8d99"/><stop offset="1" stop-color="#3d4750"/></radialGradient>' +
  '<radialGradient id="omLamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#ffe27a"/><stop offset="1" stop-color="#ffb21f"/></radialGradient>' +
  '<linearGradient id="omGlass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f6fb"/><stop offset="1" stop-color="#9ccbe0"/></linearGradient>' +
  '<linearGradient id="omPaper" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e3e6e8"/></linearGradient>' +
  '<radialGradient id="omToner" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#555"/><stop offset="1" stop-color="#1a1a1a"/></radialGradient>' +
  '<linearGradient id="omInk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1a5fb4"/><stop offset=".5" stop-color="#5aa0f0"/><stop offset="1" stop-color="#1a5fb4"/></linearGradient>' +
  '<linearGradient id="omGold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a6a22"/><stop offset=".4" stop-color="#e6c263"/><stop offset="1" stop-color="#8a6a22"/></linearGradient>' +
  '<pattern id="omBeads" width="9" height="9" patternUnits="userSpaceOnUse"><rect width="9" height="9" fill="#5a4a66"/><circle cx="4.5" cy="4.5" r="3.6" fill="#b9a9c8" stroke="#2a2030" stroke-width=".6"/></pattern>';

function R(x, y, w, h, rx, fill, stroke, sw) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + rx + '" style="fill:' + fill + ';stroke:' + (stroke || '#3b4148') + ';stroke-width:' + (sw || 1.3) + '"/>'; }
function C(x, y, r, fill, stroke, sw) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" style="fill:' + fill + ';stroke:' + (stroke || '#3b4148') + ';stroke-width:' + (sw || 1.3) + '"/>'; }
function lab(x, y, s, anchor, sz) { return '<text x="' + x + '" y="' + y + '" class="tsm"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + (sz ? ' style="font-size:' + sz + 'px"' : '') + '>' + s + '</text>'; }
function lead(d) { return '<path d="' + d + '" class="k2"/>'; }
function S(w, h, title, desc, body) { return wrap(w, h, title, desc, body, DEFS); }

/* A rubber or steel roller seen end-on. */
function roller(x, y, r, kind) {
  var fill = kind === 'rubber' ? 'url(#omRubber)' : kind === 'hot' ? 'url(#omHot)' : 'url(#omRoll)';
  return C(x, y, r, fill) + C(x, y, Math.max(2.4, r * .22), 'url(#omMetal)', '#3b4148', 1) + '<circle cx="' + (x - r * .3) + '" cy="' + (y - r * .35) + '" r="' + (r * .18) + '" fill="#fff" opacity=".45"/>';
}
/* A toner dot. */
function toner(x, y, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 1.8) + '" fill="url(#omToner)"/>'; }
/* A sheet of paper seen edge-on, with optional toner dots on top. */
function sheet(d, withToner) {
  var s = '<path d="' + d + '" fill="none" stroke="#1d2024" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="' + d + '" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>';
  return s;
}

/* ---------------- Fuser ---------------- */
reg('fuser-cross-section', 'Heat and pressure melt the toner into the paper. The thermistor tells the controller the temperature. The thermostat or thermal fuse is the safety backstop. A worn or uneven roller gives creases, smears and jams.', function () {
  var b = '';
  b += R(16, 6, 296, 232, 10, 'none', '#8d96a0', 1.2).replace('style="', 'style="stroke-dasharray:5 4;');
  // heat roller: aluminium tube with a heater lamp inside
  b += C(180, 92, 46, 'url(#omRoll)') + C(180, 92, 38, '#2a2f35', '#14161a', 1);
  b += '<circle cx="180" cy="92" r="44" fill="none" stroke="#fff" stroke-width="2" opacity=".35"/>';
  b += R(150, 86, 60, 12, 6, 'url(#omLamp)', '#b8721a', 1.2) + '<path d="M156 92H204" stroke="#c0392b" stroke-width="1.6" stroke-dasharray="3 2"/>';
  b += C(180, 92, 3, '#2a2f35', '#14161a', 1);
  // pressure roller: steel core with a rubber sleeve
  b += C(180, 184, 50, 'url(#omRubber)') + C(180, 184, 30, 'url(#omRoll)') + C(180, 184, 8, 'url(#omMetal)', '#3b4148', 1);
  b += '<path d="M146 152A48 48 0 0 1 214 152" fill="none" stroke="#fff" stroke-width="3" opacity=".25" stroke-linecap="round"/>';
  // paper with toner, running through the nip
  b += '<path d="M16 138H340" stroke="#1d2024" stroke-width="5" stroke-linecap="round"/><path d="M16 138H340" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>';
  for (var i = 0; i < 16; i++) b += toner(26 + i * 8, 134, 2);
  b += '<path d="M150 138H210" stroke="#c0392b" stroke-width="2" opacity=".7"/>';
  // thermistor pressed on the heat roller, thermostat above, claws on the exit side
  b += R(112, 40, 24, 14, 3, '#7fc4e8', '#2a6f95', 1.2) + '<path d="M124 54V64" stroke="#59626b" stroke-width="3"/>';
  b += R(204, 36, 34, 14, 3, 'url(#omGold)', '#6b5518', 1.2) + '<path d="M221 50V58" stroke="#59626b" stroke-width="3"/>';
  b += '<path d="M222 130L252 140L236 148Z" style="fill:url(#omMetal);stroke:#3b4148;stroke-width:1.2"/>';
  b += lines(262, 34, ['Thermostat or', 'thermal fuse'], 'tsm', 'start', 14) + lead('M238 44H258');
  b += lines(10, 22, ['Thermistor', 'senses temperature'], 'tsm', 'start', 14) + lead('M60 32V47H110');
  b += lines(236, 86, ['Heat roller', 'with heater lamp'], 'tsm', 'start', 14) + lead('M222 92H232');
  b += lines(236, 200, ['Pressure roller', 'squeezes the paper'], 'tsm', 'start', 14) + lead('M230 190H234');
  b += lines(262, 150, ['Claws lift the', 'paper off the roller'], 'tsm', 'start', 14) + lead('M248 142L258 150');
  b += lines(10, 156, ['Paper with', 'unfixed toner'], 'tsm', 'start', 14);
  b += t(180, 252, 'Nip: the line where the rollers meet', 'ts', 'middle');
  return S(480, 268, 'Fuser cross-section',
    'A heat roller above a pressure roller with paper passing through the nip. A heater lamp sits inside the heat roller. A thermistor touches the heat roller, a thermostat sits nearby, and separation claws are on the exit side.', b);
});

/* ---------------- Developer unit ---------------- */
reg('developer-unit', 'In a two-component unit the toner is used up and the carrier stays. A sensor measures the toner concentration, and the supply adds toner when it falls. Too little toner gives pale copies. Too much gives background and dirt.', function () {
  var b = R(30, 78, 200, 140, 12, '#e9e2ee', '#6b5a78', 1.6);
  b += '<rect x="36" y="130" width="188" height="82" rx="8" fill="url(#omBeads)" opacity=".95"/>';
  for (var i = 0; i < 40; i++) b += toner(40 + (i * 37) % 180, 140 + (i * 53) % 66, 1.6);
  // toner bottle and the agitator screw
  b += R(60, 14, 90, 46, 8, '#f0cf4a', '#8a6a22', 1.4) + R(92, 8, 26, 10, 3, 'url(#omDark)', '#1f2327', 1.2) + R(96, 58, 18, 22, 2, 'url(#omMetal)', '#59626b', 1.2) + t(105, 40, 'Toner', 'tsm', 'middle');
  b += '<path d="M105 80V108" stroke="#8a6a22" stroke-width="3" stroke-dasharray="3 3"/><path d="M99 102l6 8l6 -8" fill="none" stroke="#8a6a22" stroke-width="2.2"/>';
  b += R(44, 176, 100, 8, 4, 'url(#omMetal)', '#59626b', 1).replace('rx="4"', 'rx="4"') + '<path d="M50 180H138" stroke="#59626b" stroke-width="2" stroke-dasharray="6 3"/>';
  // sensor in the wall
  b += R(14, 140, 20, 28, 3, '#6fd1a8', '#2a8a62', 1.3) + '<path d="M34 154H44" stroke="#2a8a62" stroke-width="2.4"/>' + lab(4, 130, 'Sensor');
  // magnetic roller: a stationary magnet core inside a rotating aluminium sleeve, with a brush of carrier beads
  b += C(274, 150, 40, 'url(#omRoll)') + C(274, 150, 30, '#2a2f35', '#14161a', 1);
  b += '<path d="M274 150m-30 0a30 30 0 0 1 30 -30L274 150Z" fill="#c0392b"/><path d="M274 150m0 -30a30 30 0 0 1 30 30L274 150Z" fill="#2a60c0"/><path d="M304 150a30 30 0 0 1 -30 30L274 150Z" fill="#c0392b"/><path d="M274 180a30 30 0 0 1 -30 -30L274 150Z" fill="#2a60c0"/>';
  b += C(274, 150, 5, 'url(#omMetal)', '#3b4148', 1);
  for (var k = 0; k < 14; k++) { var a = (k * 22 + 160) * Math.PI / 180; b += '<circle cx="' + (274 + Math.cos(a) * 45).toFixed(1) + '" cy="' + (150 + Math.sin(a) * 45).toFixed(1) + '" r="3.6" fill="#b9a9c8" stroke="#2a2030" stroke-width=".6"/>'; }
  // drum
  b += C(392, 150, 56, 'url(#omDrum)') + C(392, 150, 10, 'url(#omMetal)', '#3b4148', 1);
  b += '<path d="M352 116A52 52 0 0 1 432 116" fill="none" stroke="#fff" stroke-width="3" opacity=".3" stroke-linecap="round"/>';
  for (var j = 0; j < 9; j++) b += toner(342 + j * 2.2, 126 + j * 6.4 - (j > 4 ? (j - 4) * 5 : 0), 1.6);
  b += t(392, 154, 'Drum', 'tb', 'middle').replace('class="tb"', 'class="tb" style="fill:#fff;stroke:none"');
  // doctor blade levels the brush
  b += '<path d="M236 112L224 94" stroke="#1d2024" stroke-width="7" stroke-linecap="round"/><path d="M236 112L224 94" stroke="url(#omMetal)" stroke-width="4" stroke-linecap="round"/>' + lead('M228 96L262 66') + lab(264, 66, 'Doctor blade');
  b += lines(10, 244, ['Magnetic roller carries carrier beads and toner to the drum.', 'Toner jumps across to the image on the drum. The beads stay behind.'], 'ts', 'start', 15);
  return S(480, 270, 'Two-component developer unit',
    'A developer housing filled with carrier beads and toner, fed by a toner bottle, with a concentration sensor and a magnetic roller next to the drum and a doctor blade that levels the layer.', b);
});

/* ---------------- Xerography cycle ---------------- */
reg('xerography-cycle', 'Seven stages around the drum. The drum turns anticlockwise here, so its surface at the bottom moves with the paper. Many machines also have a discharge lamp before the charge stage.', function () {
  var cx = 240, cy = 200, b = '';
  b += C(cx, cy, 84, 'url(#omDrum)') + C(cx, cy, 14, 'url(#omMetal)', '#3b4148', 1) + '<path d="M184 150A80 80 0 0 1 296 150" fill="none" stroke="#fff" stroke-width="3" opacity=".3" stroke-linecap="round"/>';
  b += '<path d="M212 158A50 50 0 0 0 212 242" fill="none" stroke="#fff" stroke-width="2" marker-end="url(#ar)" opacity=".8"/>' + t(cx, cy + 38, 'Drum', 'tb', 'middle').replace('class="tb"', 'class="tb" style="fill:#fff;stroke:none"');
  // charge roller
  b += roller(240, 108, 11, 'rubber') + badge(240, 80, '1');
  // laser and beam
  b += R(76, 82, 52, 24, 5, 'url(#omDark)', '#1f2327', 1.2) + t(102, 98, 'laser', 'tsm', 'middle').replace('class="tsm"', 'class="tsm" style="fill:#fff;stroke:none"') + '<path d="M128 104L178 148" stroke="#e0383a" stroke-width="2.4" stroke-dasharray="4 3" marker-end="url(#ar)"/>' + badge(152, 80, '2');
  // developer
  b += R(94, 192, 48, 56, 6, '#e9e2ee', '#6b5a78', 1.3) + '<rect x="98" y="214" width="40" height="30" rx="4" fill="url(#omBeads)"/>' + R(100, 196, 36, 12, 3, '#f0cf4a', '#8a6a22', 1) + C(142, 220, 12, 'url(#omRoll)') + badge(70, 220, '3');
  // transfer roller
  b += roller(240, 296, 16, 'rubber') + badge(240, 330, '4');
  // paper path through the transfer nip, then to the fuser
  b += '<path d="M24 280H468" stroke="#1d2024" stroke-width="5" stroke-linecap="round"/><path d="M24 280H468" stroke="#fff" stroke-width="3.2" stroke-linecap="round" marker-end="url(#ar)"/>' + t(28, 268, 'Paper in', 'ts');
  b += badge(318, 256, '5') + '<path d="M300 272L316 266" stroke="#59626b" stroke-width="3"/>';
  // fuser pair
  b += roller(396, 266, 15, 'hot') + roller(396, 296, 15, 'rubber') + badge(396, 236, '6') + t(396, 326, 'Fuser', 'ts', 'middle');
  // cleaning blade and waste hopper
  b += R(318, 188, 22, 26, 3, '#d4ead9', '#3a8a5a', 1.3) + '<path d="M318 200H304" stroke="#1d2024" stroke-width="5" stroke-linecap="round"/><path d="M318 200H304" stroke="url(#omMetal)" stroke-width="3" stroke-linecap="round"/>' + badge(360, 200, '7');
  // discharge lamp
  b += R(300, 106, 22, 12, 3, 'url(#omLamp)', '#b8721a', 1.2) + '<path d="M300 124L286 140" stroke="#ffb21f" stroke-width="2" stroke-dasharray="3 3"/>' + t(326, 100, 'discharge lamp', 'ts');
  var L = [['1', 'Charge: even charge on the drum', 10, 366], ['2', 'Expose: light draws the latent image', 10, 390], ['3', 'Develop: toner sticks to the image', 10, 414], ['4', 'Transfer: toner moves to the paper', 10, 438], ['5', 'Separate: paper leaves the drum', 10, 462], ['6', 'Fuse: heat and pressure fix the toner', 10, 486], ['7', 'Clean: blade removes leftover toner', 10, 510]];
  L.forEach(function (r) { b += badge(r[2] + 9, r[3] - 4, r[0], 9) + t(r[2] + 26, r[3], r[1], 'ts'); });
  return S(480, 526, 'Electrophotographic process around the drum',
    'A drum with seven numbered stations: charge at the top, expose at the upper left, develop at the left, transfer and the paper path at the bottom, separation, the fuser and a cleaning blade on the right.', b);
});

/* ---------------- Scanner optics ---------------- */
reg('scanner-optics', 'The lamp and the first mirror move together under the glass, one line at a time. Mirrors fold a long light path into a small box, and the lens focuses each line on the sensor. Dust on the glass or mirrors shows up on every scan.', function () {
  var b = '';
  b += R(24, 20, 360, 224, 8, '#dfe4e8', '#8d96a0', 1.4).replace('fill:#dfe4e8', 'fill:#dfe4e8;fill-opacity:.55');
  b += R(34, 38, 330, 9, 2, 'url(#omGlass)', '#4a8fb3', 1.2) + t(372, 48, 'Glass platen', 'tsm');
  b += R(80, 26, 200, 6, 1, 'url(#omPaper)', '#8d96a0', 1) + '<path d="M90 29H270" stroke="#555" stroke-width="2" stroke-dasharray="14 6"/>' + t(180, 18, 'Original on the glass', 'tsm', 'middle');
  // moving carriage on its rail
  b += R(56, 150, 200, 6, 3, 'url(#omMetal)', '#59626b', 1) + '<path d="M56 154H256" stroke="#8d96a0" stroke-width="1" stroke-dasharray="2 4"/>';
  b += R(84, 56, 84, 94, 6, '#c9d0d6', '#59626b', 1.4).replace('fill:#c9d0d6', 'fill:#c9d0d6;fill-opacity:.6') + t(126, 176, 'Moving carriage', 'tsm', 'middle');
  b += R(94, 64, 60, 8, 4, 'url(#omLamp)', '#b8721a', 1.2) + t(126, 90, 'Lamp', 'tsm', 'middle');
  b += '<path d="M104 72L120 50M124 72L130 50" stroke="#ffb21f" stroke-width="1.6" stroke-dasharray="3 3"/>';
  b += '<path d="M140 50V122" fill="none" stroke="#e0383a" stroke-width="2.2" stroke-dasharray="5 3"/>';
  // mirrors drawn as thin angled glass slabs
  function mirror(x, y, rot) { return '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ')"><rect x="-17" y="-3" width="34" height="6" rx="1" style="fill:url(#omMetal);stroke:#3b4148;stroke-width:1.2"/><path d="M-15 -1H15" stroke="#fff" stroke-width="1.2"/></g>'; }
  b += mirror(140, 124, -45) + mirror(260, 124, 45) + mirror(260, 198, -45);
  b += '<path d="M140 124H260V198H340" fill="none" stroke="#e0383a" stroke-width="2.2" stroke-dasharray="5 3"/>';
  // lens barrel and sensor board
  b += R(316, 178, 28, 40, 6, 'url(#omDark)', '#1f2327', 1.3) + '<ellipse cx="330" cy="198" rx="5" ry="15" style="fill:url(#omGlass);stroke:#2a6f95;stroke-width:1.2"/>';
  b += R(358, 180, 26, 36, 3, '#2f7a4f', '#134a2a', 1.3) + R(364, 188, 14, 20, 2, '#cdd6dc', '#59626b', 1) + '<path d="M368 192H374M368 198H374M368 204H374" stroke="#59626b" stroke-width="1"/>';
  b += t(322, 236, 'Lens', 'tsm', 'middle') + t(374, 236, 'Sensor', 'tsm', 'middle');
  b += t(300, 106, 'Mirrors fold the path', 'tsm', 'middle');
  b += t(10, 268, 'Sensor is a CCD or a contact image sensor. A CIS skips the mirrors and lens.', 'ts');
  return S(480, 284, 'Flatbed scanner optics',
    'Cross-section of a scanner: a glass platen with an original on top, a moving carriage with a lamp and first mirror, two more mirrors folding the beam, a lens and a sensor.', b);
});

/* ---------------- Inkjet head ---------------- */
reg('inkjet-head', 'Both heads push a tiny drop of ink out of a nozzle. A dried-up or air-blocked nozzle leaves a gap in the print, which shows as banding or missing lines.', function () {
  function chamber(x, piezo) {
    var s = '<g transform="translate(' + x + ' 0)">';
    s += R(10, 30, 120, 110, 6, 'url(#omMetal)', '#59626b', 1.4);
    s += '<path d="M24 46H116V114H92L88 130H52L48 114H24Z" style="fill:url(#omInk);stroke:#123f78;stroke-width:1.2"/>';
    s += R(52, 130, 36, 12, 2, 'url(#omDark)', '#1f2327', 1.2) + R(66, 130, 8, 12, 1, '#08141f', '#08141f', 1);
    if (piezo) {
      s += R(24, 30, 92, 12, 3, 'url(#omGold)', '#6b5518', 1.2) + '<path d="M34 36H106" stroke="#fff" stroke-width="1.2" opacity=".5"/>' + '<path d="M70 52v14M62 60l8 8l8 -8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' + '<path d="M28 42Q70 56 112 42" fill="none" stroke="#6b5518" stroke-width="2" stroke-dasharray="3 3"/>';
    } else {
      s += R(40, 94, 60, 8, 3, 'url(#omHot)', '#8f2f25', 1.2) + '<circle cx="70" cy="86" r="9" fill="#fff" fill-opacity=".85" stroke="#8d96a0" stroke-width="1"/><circle cx="66" cy="83" r="3" fill="#fff" fill-opacity=".9"/><path d="M52 102l-6 10M70 102v10M88 102l6 10" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>';
    }
    s += '<ellipse cx="70" cy="162" rx="7" ry="10" style="fill:url(#omInk);stroke:#123f78;stroke-width:1.2"/><path d="M70 174V186" stroke="#1a5fb4" stroke-width="1.4" stroke-dasharray="2 3"/><path d="M62 196h16" stroke="#1a5fb4" stroke-width="3" stroke-linecap="round" opacity=".7"/>';
    return s + '</g>';
  }
  var b = chamber(10, false) + chamber(250, true);
  b += t(80, 22, 'Thermal head', 'tb', 'middle') + t(320, 22, 'Piezo head', 'tb', 'middle');
  b += t(80, 100, 'ink', 'tsm', 'middle').replace('class="tsm"', 'class="tsm" style="fill:#fff;stroke:none"') + t(320, 100, 'ink', 'tsm', 'middle').replace('class="tsm"', 'class="tsm" style="fill:#fff;stroke:none"');
  b += lines(10, 232, ['Thermal: heat boils a little ink and the bubble pushes a drop out.', 'Piezo: a crystal flexes and squeezes a drop out. No heat.'], 'ts', 'start', 15);
  return S(480, 270, 'Inkjet print head types',
    'Two cross-sections of an ink chamber with a nozzle at the bottom. In the thermal head a heater creates a bubble. In the piezo head a crystal flexes. In both a drop leaves the nozzle.', b);
});

/* ---------------- Receipt printer ---------------- */
reg('receipt-printer-parts', 'The print head heats the coated side of the paper against the platen. There is no ink or ribbon. The paper-end sensor warns when the roll runs out, and the cutter slices each receipt.', function () {
  var b = '';
  // paper roll with spiral layers and a core
  b += C(100, 180, 70, '#f6f1e0', '#a89060', 1.4) + C(100, 180, 54, 'none', '#d8cfae', 1.2) + C(100, 180, 40, 'none', '#d8cfae', 1.2) + C(100, 180, 26, 'none', '#d8cfae', 1.2) + C(100, 180, 12, '#b88a58', '#6b4a28', 1.2) + C(100, 180, 5, '#14171a', '#14171a', 1);
  b += '<path d="M30 180Q40 120 130 118" fill="none" stroke="#cfd4da" stroke-width="0"/>';
  b += t(100, 268, 'Paper roll', 'tsm', 'middle');
  // paper path: from the roll over the platen to the cutter and out
  var d = 'M126 128Q160 112 214 112H330';
  b += '<path d="' + d + '" fill="none" stroke="#1d2024" stroke-width="7" stroke-linecap="round"/><path d="' + d + '" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M330 112H430" stroke="#1d2024" stroke-width="7" stroke-linecap="round"/><path d="M330 112H430" stroke="#fff" stroke-width="5" stroke-linecap="round" marker-end="url(#ar)"/>';
  b += '<path d="M360 108H420M366 116H410" stroke="#555" stroke-width="1.4"/>';
  // print head on a spring and the platen roller below the paper
  b += R(196, 66, 46, 28, 4, 'url(#omDark)', '#1f2327', 1.3) + R(200, 92, 38, 8, 2, 'url(#omHot)', '#8f2f25', 1.2) + '<path d="M219 66V50l-6 -6M219 50l6 -6" fill="none" stroke="#59626b" stroke-width="2"/>';
  b += t(219, 38, 'Print head', 'tsm', 'middle');
  b += roller(219, 142, 20, 'rubber') + t(244, 190, 'Platen roller', 'tsm', 'start');
  // paper-end sensor
  b += R(150, 156, 26, 18, 3, '#6fd1a8', '#2a8a62', 1.3) + '<path d="M163 156V136" stroke="#2a8a62" stroke-width="1.6" stroke-dasharray="2 2"/>' + t(124, 216, 'Paper-end sensor', 'tsm');
  // cutter
  b += '<path d="M318 82L338 112L318 142Z" style="fill:url(#omMetal);stroke:#3b4148;stroke-width:1.3"/><path d="M322 92L334 112L322 132" fill="none" stroke="#fff" stroke-width="1.2" opacity=".6"/>' + t(330, 70, 'Cutter', 'tsm', 'middle');
  b += t(430, 138, 'Paper out', 'tsm', 'end');
  b += lines(230, 220, ['Coated side faces the head.', 'Scratch the paper: the coated', 'side marks dark.'], 'tsm', 'start', 14);
  return S(480, 290, 'Receipt printer parts',
    'A paper roll feeding a thermal print head pressed against a platen roller, with a paper-end sensor and a cutter before the paper exits.', b);
});

/* ---------------- Paper path ---------------- */
reg('paper-path', 'Side view of a typical paper path. Most jams happen where the paper changes direction, is gripped, or is heated. Layouts differ between machines.', function () {
  var path = 'M150 252H220C262 252 258 175 300 175H410C440 175 430 110 455 110H474', b = '';
  // cassette with a stack and a pick-up roller
  b += R(14, 246, 148, 34, 4, 'url(#omDark)', '#1f2327', 1.3) + R(22, 238, 132, 10, 1, 'url(#omPaper)', '#8d96a0', 1) + R(22, 228, 132, 10, 1, 'url(#omPaper)', '#8d96a0', 1) + R(22, 218, 132, 10, 1, 'url(#omPaper)', '#8d96a0', 1);
  b += t(90, 300, 'Paper tray', 'ts', 'middle');
  b += '<path d="' + path + '" fill="none" stroke="#8d96a0" stroke-width="22" stroke-linecap="round" opacity=".35"/><path d="' + path + '" fill="none" stroke="#1d2024" stroke-width="5" stroke-linecap="round"/><path d="' + path + '" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" marker-end="url(#ar)"/>';
  b += roller(112, 232, 15, 'rubber');
  b += roller(200, 240, 11, 'rubber') + roller(200, 264, 11, 'rubber') + t(200, 296, 'Feed rollers', 'tsm', 'middle');
  b += roller(296, 163, 11, 'rubber') + roller(296, 187, 11, 'rubber') + t(262, 140, 'Registration', 'tsm', 'middle');
  b += C(346, 145, 30, 'url(#omDrum)') + C(346, 145, 6, 'url(#omMetal)', '#3b4148', 1) + t(346, 150, 'Drum', 'tsm', 'middle').replace('class="tsm"', 'class="tsm" style="fill:#fff;stroke:none"') + roller(346, 187, 12, 'rubber');
  b += roller(396, 160, 14, 'hot') + roller(396, 190, 14, 'rubber') + t(396, 240, 'Fuser', 'tsm', 'middle');
  b += roller(455, 98, 10, 'rubber') + roller(455, 122, 10, 'rubber') + t(432, 96, 'Exit', 'tsm', 'end');
  b += '<ellipse cx="132" cy="250" rx="50" ry="38" class="zone"/>' + badge(78, 212, 'A', 10);
  b += '<ellipse cx="258" cy="212" rx="50" ry="46" class="zone"/>' + badge(222, 172, 'B', 10);
  b += '<ellipse cx="346" cy="170" rx="34" ry="46" class="zone"/>' + badge(318, 108, 'C', 10);
  b += '<ellipse cx="402" cy="176" rx="26" ry="42" class="zone"/>' + badge(436, 208, 'D', 10);
  b += '<ellipse cx="456" cy="110" rx="22" ry="30" class="zone"/>' + badge(458, 70, 'E', 10);
  var L = [['A', 'Pick-up and separation: misfeeds, double feeds'], ['B', 'Feed and registration: skew, late arrival'], ['C', 'Drum and transfer: image faults, paper wraps'], ['D', 'Fuser: wrap-around jams, creases'], ['E', 'Exit: curl, stacking problems']];
  L.forEach(function (r, i) { b += badge(20, 336 + i * 24, r[0], 9) + t(38, 340 + i * 24, r[1], 'ts'); });
  return S(480, 460, 'Paper path side view',
    'Paper leaves a tray at the lower left, passes feed rollers, registration rollers, the drum and transfer roller, a fuser and exit rollers at the upper right. Five jam zones, A to E, are marked.', b);
});

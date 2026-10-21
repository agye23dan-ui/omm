/* Diagrams for computing, networks and the main equipment modules (modules 9 to 15). */
import { reg, wrap, t, badge, box, arrow, line, lines, circle, rect, poly, block, steps, stack } from './dg-kit.js';

/* ---------------- Boot sequence ---------------- */
reg('boot-sequence', 'Faults show up at a particular step. Nothing on screen points at power or firmware. A logo then a stop points at the boot loader or operating system. A desktop that is slow or odd points at drivers or start-up items.', function () {
  return steps('Computer boot sequence', 'Six steps in order: power on, firmware self-test, boot loader, operating system kernel, drivers and services, then login.', [
    { h: 'Power on', n: ['Power supply rails come up', 'Reset is released'] },
    { h: 'Firmware self-test', n: ['Checks memory and devices', 'Beeps or lights if it fails'] },
    { h: 'Boot loader', n: ['Finds the system disk', 'Loads the operating system'] },
    { h: 'Operating system kernel', n: ['Takes control of the hardware'] },
    { h: 'Drivers and services', n: ['Devices start, start-up items run'], tint: 'tint-y-soft' },
    { h: 'Login and desktop', n: ['The user can work'], tint: 'tint-g' }
  ]);
});

/* ---------------- Operating system layers ---------------- */
reg('os-layers', 'Each layer only talks to the one next to it. A printer driver sits between the operating system and the printer hardware, which is why a wrong driver can stop a good printer.', function () {
  return stack('Operating system layers', 'Four layers from top to bottom: applications, operating system services and the file system, the kernel with device drivers, and the hardware.', [
    { h: 'Applications', n: 'Word processor, browser, print dialogue', tint: 'tint-c-soft' },
    { h: 'Operating system services', n: 'File system, user accounts, print spooler, network', tint: 'tint-c' },
    { h: 'Kernel and drivers', n: 'Controls memory, processes and devices through drivers', tint: 'tint-y-soft' },
    { h: 'Hardware', n: 'Processor, memory, disk, network card, printer', tint: 'tint-k-soft' }
  ]);
});

/* ---------------- RJ45 wiring ---------------- */
reg('rj45-t568', 'Use the same standard at both ends for a normal (straight-through) cable. A crossover has T568A at one end and T568B at the other. Keep each pair twisted right up to the plug.', function () {
  var C = { o: '#e8892b', g: '#34a56a', b: '#3b73d1', n: '#8b5a2b' };
  var B = [['o', 1], ['o', 0], ['g', 1], ['b', 0], ['b', 1], ['g', 0], ['n', 1], ['n', 0]];
  var A = [['g', 1], ['g', 0], ['o', 1], ['b', 0], ['b', 1], ['o', 0], ['n', 1], ['n', 0]];
  function row(label, list, y) {
    var s = t(10, y + 28, label, 'tb');
    list.forEach(function (p, i) {
      var x = 90 + i * 48;
      s += t(x + 18, y - 6, String(i + 1), 'tsm', 'middle');
      if (p[1]) s += '<rect x="' + x + '" y="' + y + '" width="36" height="46" rx="3" fill="#ffffff" stroke="currentColor" stroke-width="1.5" class="stripe"/><rect x="' + (x + 11) + '" y="' + y + '" width="14" height="46" fill="' + C[p[0]] + '"/>';
      else s += '<rect x="' + x + '" y="' + y + '" width="36" height="46" rx="3" fill="' + C[p[0]] + '" stroke="currentColor" stroke-width="1.5" class="stripe"/>';
    });
    return s;
  }
  var b = row('T568B', B, 40) + row('T568A', A, 130);
  b += lines(10, 214, ['Striped boxes are white with a coloured stripe.', 'Pins 1 to 8 run left to right, contacts facing you, cable entry down.', 'Pairs: pins 1 and 2, 3 and 6, 4 and 5, 7 and 8.'], 'ts', 'start', 17);
  return wrap(480, 276, 'RJ45 wiring standards T568A and T568B',
    'Two rows of eight coloured pin positions. T568B runs white-orange, orange, white-green, blue, white-blue, green, white-brown, brown. T568A swaps the orange and green pairs.', b);
});

/* ---------------- Network layers ---------------- */
reg('network-layers', 'Faults are found layer by layer. Start at the bottom: is there a link light and a good cable? Then the address, then the port or service, then the application settings.', function () {
  return stack('Network layers in simple terms', 'Four layers from top to bottom: application, transport, internet and link.', [
    { h: 'Application', n: 'Print job, scan to email, scan to folder', tint: 'tint-c-soft' },
    { h: 'Transport', n: 'TCP or UDP, port numbers choose the service', tint: 'tint-c' },
    { h: 'Internet', n: 'IP addresses, subnet masks, routing between networks', tint: 'tint-y-soft' },
    { h: 'Link', n: 'Cable or Wi-Fi, MAC addresses, switch ports', tint: 'tint-k-soft' }
  ]);
});

/* ---------------- Fax call ---------------- */
reg('fax-call-phases', 'If a fax fails, the phase it fails in tells you where to look. Failing during the handshake points at line quality or speed. Failing mid-page points at noise or compression on the line.', function () {
  return steps('Phases of a fax call', 'Five phases: dial and connect, handshake, send pages, confirm, and disconnect.', [
    { h: 'Dial and connect', n: ['Number dialled', 'Receiver answers with a tone'] },
    { h: 'Handshake', n: ['Machines agree speed,', 'resolution and error correction'] },
    { h: 'Send pages', n: ['Image sent as data', 'one line at a time'] },
    { h: 'Confirm', n: ['Receiver confirms each page', 'Errors trigger a resend'], tint: 'tint-y-soft' },
    { h: 'Disconnect', n: ['Line released', 'Activity report printed'], tint: 'tint-g' }
  ]);
});

/* ---------------- PC architecture ---------------- */
reg('pc-architecture', 'The processor talks to memory directly and to everything else through the chipset. The power supply feeds every part. A fault in one block often looks like a fault in another, so swap and measure.', function () {
  var b = '<rect x="10" y="10" width="360" height="270" rx="10" class="box" style="fill:none;stroke-dasharray:6 4"/>' + t(20, 28, 'Motherboard', 'ts');
  b += block(140, 40, 100, 50, 'Processor', 'CPU and cache', 'tint-c');
  b += block(20, 40, 90, 50, 'Memory', 'RAM', 'tint-c-soft');
  b += block(270, 40, 90, 50, 'Graphics', 'display output', 'tint-m-soft');
  b += block(140, 130, 100, 50, 'Chipset', 'links everything', 'tint-y-soft');
  b += block(20, 210, 100, 50, 'Storage', 'SSD or disk', 'tint-k-soft');
  b += block(260, 210, 100, 50, 'Ports', 'USB, LAN', 'tint-k-soft');
  b += arrow(110, 65, 140, 65) + arrow(140, 70, 110, 70) + arrow(240, 65, 270, 65) + arrow(190, 90, 190, 130) + arrow(190, 180, 190, 196) + line('M190 196H70V210') + line('M190 196H310V210');
  b += block(396, 40, 74, 220, 'Power', 'supply', 'tint-y');
  b += arrow(396, 120, 372, 120) + arrow(396, 220, 372, 220);
  b += t(380, 288, 'Powers every part', 'ts', 'middle');
  return wrap(480, 302, 'PC architecture block diagram',
    'A motherboard outline containing a processor connected to memory, graphics and a chipset, with the chipset linked to storage and ports. A power supply on the right feeds the whole board.', b);
});

/* ---------------- Inkjet head ---------------- */
reg('inkjet-head', 'Both heads push a tiny drop of ink out of a nozzle. A dried-up or air-blocked nozzle leaves a gap in the print, which shows as banding or missing lines.', function () {
  function chamber(ox, piezo) {
    var s = '<path d="M' + (ox + 20) + ' 40V110H' + (ox + 50) + 'V130H' + (ox + 70) + 'V110H' + (ox + 100) + 'V40Z" class="box tint-c-soft"/>';
    if (piezo) {
      s += rect(ox + 20, 28, 80, 12, 'box tint-y', 2) + '<path d="M' + (ox + 36) + ' 60V50M' + (ox + 60) + ' 60V50M' + (ox + 84) + ' 60V50" class="k2" marker-end="url(#ar)"/>';
      s += t(ox + 60, 22, 'Piezo element flexes', 'tsm', 'middle');
    } else {
      s += rect(ox + 28, 52, 64, 6, 'box tint-m', 2) + circle(ox + 60, 76, 11, 'box tint-y');
      s += t(ox + 60, 30, 'Heater makes a bubble', 'tsm', 'middle');
    }
    s += '<ellipse cx="' + (ox + 60) + '" cy="150" rx="6" ry="9" class="box tint-c"/>';
    s += '<path d="M' + (ox + 60) + ' 164V184" class="k2" marker-end="url(#ar)"/>';
    return s;
  }
  var b = chamber(10, false) + chamber(250, true);
  b += t(70, 206, 'Thermal head', 'tb', 'middle') + t(310, 206, 'Piezo head', 'tb', 'middle');
  b += t(70, 104, 'ink', 'tsm', 'middle') + t(310, 104, 'ink', 'tsm', 'middle');
  b += lines(10, 236, ['Thermal: heat boils a little ink and the bubble pushes a drop out.', 'Piezo: a crystal flexes and squeezes a drop out. No heat.'], 'ts', 'start', 17);
  return wrap(480, 270, 'Inkjet print head types',
    'Two cross-sections of an ink chamber with a nozzle at the bottom. In the thermal head a heater creates a bubble. In the piezo head a crystal flexes. In both a drop leaves the nozzle.', b);
});

/* ---------------- Scanner optics ---------------- */
reg('scanner-optics', 'The lamp and the first mirror move together under the glass, one line at a time. Mirrors fold a long light path into a small box, and the lens focuses each line on the sensor. Dust on the glass or mirrors shows up on every scan.', function () {
  var b = rect(40, 34, 310, 8, 'box tint-c-soft', 1) + t(356, 44, 'Glass platen', 'tsm');
  b += rect(80, 28, 200, 4, 'box tint-y', 1) + t(180, 20, 'Original on the glass', 'tsm', 'middle');
  b += '<rect x="86" y="52" width="76" height="84" rx="6" class="box" style="fill:none;stroke-dasharray:5 4"/>' + t(124, 152, 'Moving carriage', 'tsm', 'middle');
  b += circle(104, 66, 6, 'box tint-y') + t(104, 90, 'Lamp', 'tsm', 'middle');
  b += '<path d="M108 62L132 42" class="beam" marker-end="url(#ar)"/>';
  b += '<path d="M140 42V120H260V190H370" class="beam"/>';
  b += '<path d="M130 130L150 110" class="k bold"/><path d="M250 110L270 130" class="k bold"/><path d="M250 200L270 180" class="k bold"/>';
  b += '<ellipse cx="320" cy="190" rx="6" ry="16" class="box tint-c"/><rect x="372" y="176" width="26" height="28" rx="3" class="box tint-m"/>';
  b += t(320, 224, 'Lens', 'tsm', 'middle') + t(385, 224, 'Sensor', 'tsm', 'middle');
  b += t(256, 144, 'Mirrors fold the path', 'tsm', 'middle');
  b += t(10, 264, 'Sensor is a CCD or a contact image sensor. A CIS skips the mirrors and lens.', 'ts');
  return wrap(480, 280, 'Flatbed scanner optics',
    'Cross-section of a scanner: a glass platen with an original on top, a moving carriage with a lamp and first mirror, two more mirrors folding the beam, a lens and a sensor.', b);
});

/* ---------------- Fuser ---------------- */
reg('fuser-cross-section', 'Heat and pressure melt the toner into the paper. The thermistor tells the controller the temperature. The thermostat or thermal fuse is the safety backstop. A worn or uneven roller gives creases, smears and jams.', function () {
  var b = circle(240, 92, 44, 'box tint-m-soft') + circle(240, 92, 30, 'box') + circle(240, 92, 7, 'box tint-y');
  b += circle(240, 182, 46, 'box tint-k-soft');
  b += '<path d="M24 137H300" class="paper" marker-end="url(#ar)"/><path d="M24 137H300" class="k2" style="stroke-dasharray:2 5"/>';
  b += '<path d="M60 130H210" class="k bold" style="stroke:var(--magenta-ink);stroke-dasharray:2 4"/>';
  b += rect(186, 40, 22, 16, 'box tint-c', 2) + rect(272, 40, 30, 16, 'box tint-y', 2);
  b += '<path d="M282 130L270 142L296 142Z" class="box"/>';
  b += lines(330, 40, ['Thermostat or', 'thermal fuse'], 'tsm', 'start', 14) + line('M304 48H326', 'k2');
  b += lines(10, 36, ['Thermistor', 'senses temperature'], 'tsm', 'start', 14) + line('M104 40H184', 'k2');
  b += lines(330, 100, ['Heat roller', 'with heater lamp'], 'tsm', 'start', 14) + line('M284 92H326', 'k2');
  b += lines(330, 190, ['Pressure roller', 'squeezes the paper'], 'tsm', 'start', 14) + line('M286 182H326', 'k2');
  b += lines(330, 152, ['Claws lift the', 'paper off the roller'], 'tsm', 'start', 14) + line('M296 142H326', 'k2');
  b += lines(10, 164, ['Paper with', 'unfixed toner'], 'tsm', 'start', 14);
  b += t(240, 252, 'Nip: the line where the rollers meet', 'ts', 'middle');
  return wrap(480, 268, 'Fuser cross-section',
    'A heat roller above a pressure roller with paper passing through the nip. A heater lamp sits inside the heat roller. A thermistor touches the heat roller, a thermostat sits nearby, and separation claws are on the exit side.', b);
});

/* ---------------- Developer unit ---------------- */
reg('developer-unit', 'In a two-component unit the toner is used up and the carrier stays. A sensor measures the toner concentration, and the supply adds toner when it falls. Too little toner gives pale copies. Too much gives background and dirt.', function () {
  var b = rect(60, 80, 150, 130, 'box tint-m-soft', 6);
  for (var i = 0; i < 18; i++) b += circle(76 + (i % 6) * 24, 108 + Math.floor(i / 6) * 28, 5, 'box tint-k-soft');
  for (var j = 0; j < 14; j++) b += '<circle cx="' + (84 + (j * 37) % 120) + '" cy="' + (96 + (j * 53) % 100) + '" r="2" class="solid"/>';
  b += rect(90, 20, 70, 40, 'box tint-y', 4) + t(125, 44, 'Toner', 'tsm', 'middle') + arrow(125, 62, 125, 82);
  b += circle(268, 146, 34, 'box tint-c') + t(268, 150, 'Roller', 'tsm', 'middle');
  b += circle(350, 146, 50, 'box tint-k-soft') + t(350, 150, 'Drum', 'tb', 'middle');
  b += '<path d="M236 118L226 104" class="k bold"/>' + line('M232 110L286 86', 'k2') + t(290, 86, 'Doctor blade', 'tsm');
  b += rect(40, 140, 18, 24, 'box tint-g', 2) + t(10, 134, 'Sensor', 'tsm');
  b += lines(10, 238, ['Magnetic roller carries carrier beads and toner to the drum.', 'Toner jumps across to the image on the drum. The beads stay behind.'], 'ts', 'start', 17);
  return wrap(480, 270, 'Two-component developer unit',
    'A developer housing filled with carrier beads and toner, fed by a toner bottle, with a concentration sensor and a magnetic roller next to the drum and a doctor blade that levels the layer.', b);
});

/* ---------------- Repeating defect ---------------- */
reg('repeating-defect', 'A mark that repeats at a fixed distance comes from a rotating part. The distance between marks equals that part\'s circumference. Measure the spacing, work out each roller\'s circumference, and find the match.', function () {
  var b = circle(66, 70, 32, 'box tint-k-soft') + circle(66, 38, 4, 'solid') + t(66, 74, 'Roller', 'tsm', 'middle');
  b += '<path d="M40 44A32 32 0 0 1 92 44" class="k2" marker-end="url(#ar)"/>';
  b += lines(130, 50, ['Circumference = π × diameter', 'Drum, 30 mm: π × 30 ≈ 94 mm'], 'tb', 'start', 20);
  b += lines(10, 140, ['Charge roller 14 mm  →  44 mm', 'Developer roller 18 mm  →  57 mm', 'Fuser roller 25 mm  →  79 mm', 'Drum 30 mm  →  94 mm'], 'ts', 'start', 20);
  b += lines(10, 244, ['Spots every 94 mm on the copy', 'point at the drum.'], 'tb', 'start', 20);
  b += rect(380, 10, 80, 280, 'box', 2);
  [40, 134, 228].forEach(function (y) { b += circle(420, y, 5, 'solid'); });
  b += '<path d="M366 40V134" class="k2" marker-start="url(#ar)" marker-end="url(#ar)"/><path d="M366 134V228" class="k2" marker-start="url(#ar)" marker-end="url(#ar)"/>';
  b += t(358, 90, '94 mm', 'tsm', 'end') + t(358, 184, '94 mm', 'tsm', 'end');
  return wrap(480, 302, 'Repeating defect on a copy',
    'A roller with a mark on its surface and a sheet of paper with spots repeating every 94 millimetres. The roller circumference formula and the circumferences of four rollers are listed.', b);
});

/* ---------------- Multifunction structure ---------------- */
reg('mfp-structure', 'One controller shares the work. Print, copy, scan and fax all pass through it, so a controller or network fault can affect every function while the engine itself is fine.', function () {
  var b = block(170, 112, 140, 60, 'Controller', 'processor, memory', 'tint-c');
  b += block(14, 14, 100, 46, 'Scanner', '', 'tint-c-soft') + block(190, 14, 100, 46, 'Print engine', '', 'tint-c-soft') + block(366, 14, 100, 46, 'Fax modem', '', 'tint-c-soft');
  b += block(14, 224, 100, 46, 'Panel', 'screen and keys', 'tint-y-soft') + block(190, 224, 100, 46, 'Storage', 'disk, memory', 'tint-y-soft') + block(366, 224, 100, 46, 'Network', 'LAN, USB', 'tint-y-soft');
  b += block(14, 119, 100, 46, 'Power supply', '', 'tint-k-soft') + block(366, 119, 100, 46, 'Finisher, trays', 'options', 'tint-m-soft');
  b += line('M64 60V90H170V112') + line('M240 60V112') + line('M416 60V90H310V112') + line('M64 224V194H170V172') + line('M240 224V172') + line('M416 224V194H310V172') + arrow(114, 142, 170, 142) + arrow(366, 142, 310, 142) + arrow(310, 146, 366, 146);
  b += t(240, 292, 'Copy: scanner to engine, through the controller', 'ts', 'middle');
  return wrap(480, 306, 'Multifunction product structure',
    'A central controller connected to a scanner, print engine, fax modem, control panel, storage, network interface, power supply and optional finisher and paper trays.', b);
});

/* ---------------- Scan-to flow ---------------- */
reg('scan-to-flow', 'Scan to email goes through a mail server using SMTP. Scan to folder writes to a shared folder on a computer or server, usually over SMB. Most failures are a wrong address, a changed password, or a blocked port.', function () {
  var b = block(10, 70, 100, 70, 'Multifunction', 'product', 'tint-c');
  b += block(170, 70, 100, 70, 'Network', 'switch and router', 'tint-k-soft');
  b += block(340, 14, 130, 54, 'Mail server', 'SMTP', 'tint-y-soft');
  b += block(340, 142, 130, 54, 'File server', 'shared folder, SMB', 'tint-y-soft');
  b += arrow(110, 105, 170, 105) + arrow(270, 94, 340, 46) + arrow(270, 118, 340, 168);
  b += t(290, 62, 'email', 'tsm', 'end') + t(290, 160, 'file', 'tsm', 'end');
  b += lines(10, 232, ['Check in this order: the address-book entry, the login, the network,', 'then the server settings and any firewall.'], 'ts', 'start', 17);
  return wrap(480, 270, 'Scan to email and scan to folder',
    'A multifunction product connected through a network to a mail server using SMTP and a file server with a shared folder.', b);
});

/* ---------------- Finisher path ---------------- */
reg('finisher-path', 'Most finisher jams happen where the paper changes direction or stops: at the entrance, in the processing tray, or at the staple unit. Look for bent staples and paper dust on the sensors.', function () {
  return steps('Finisher paper path', 'Five stages: entrance, punch, processing tray, staple unit and output tray.', [
    { h: 'Entrance sensor', n: ['Sees the paper arrive', 'Starts the finisher'] },
    { h: 'Punch (option)', n: ['Makes holes before stacking'] },
    { h: 'Processing tray', n: ['Sheets drop in and are jogged', 'into a neat edge'] },
    { h: 'Staple unit', n: ['Fires staples into the stack', 'Staple cartridge refills here'], tint: 'tint-y-soft' },
    { h: 'Output tray', n: ['Stack is pushed out', 'Tray lowers as it fills'], tint: 'tint-g' }
  ]);
});

/* ---------------- Receipt printer ---------------- */
reg('receipt-printer-parts', 'The print head heats the coated side of the paper against the platen. There is no ink or ribbon. The paper-end sensor warns when the roll runs out, and the cutter slices each receipt.', function () {
  var b = circle(90, 190, 50, 'box tint-y') + circle(90, 190, 12, 'box') + t(90, 262, 'Paper roll', 'tsm', 'middle');
  b += '<path d="M126 154Q160 100 230 98H420" class="k bold" style="stroke:var(--ink-2);opacity:0.5"/>';
  b += rect(205, 66, 70, 26, 'box tint-m', 3) + t(240, 83, 'Print head', 'tsm', 'middle');
  b += circle(240, 114, 16, 'box tint-k-soft') + t(240, 150, 'Platen roller', 'tsm', 'middle');
  b += rect(150, 160, 22, 18, 'box tint-g', 2) + t(180, 172, 'Paper-end sensor', 'tsm');
  b += '<path d="M338 78L352 98L338 116Z" class="box tint-c"/><path d="M356 98H372" class="k2"/>' + t(346, 66, 'Cutter', 'tsm', 'middle');
  b += arrow(380, 98, 440, 98) + t(412, 88, 'Paper out', 'tsm', 'middle');
  b += lines(170, 214, ['Coated side faces the head.', 'Scratch the paper: the coated', 'side marks dark.'], 'ts', 'start', 16);
  return wrap(480, 276, 'Thermal receipt printer parts',
    'A paper roll feeding paper between a thermal print head and a platen roller, then past a cutter. A paper-end sensor sits near the roll.', b);
});

/* ---------------- Cash drawer signal ---------------- */
reg('drawer-signal', 'The drawer does not talk to the register directly. The register tells the printer, and the printer sends a short pulse to the drawer. A receipt that prints with a drawer that will not open points at the cable or the printer\'s drawer port.', function () {
  return steps('How the cash drawer opens', 'Three stages: the register sends an open command, the printer sends a pulse, and the drawer solenoid releases the latch.', [
    { h: 'Register', n: ['Sale completes', 'Sends the open-drawer command'] },
    { h: 'Receipt printer', n: ['Receives the command', 'Sends a short low-voltage pulse'], tint: 'tint-y-soft' },
    { h: 'Cash drawer', n: ['Solenoid pulls back the latch', 'Drawer springs open'], tint: 'tint-g' }
  ]);
});

/* ---------------- EAN-13 ---------------- */
reg('ean13', 'Barcode bars are drawn for illustration only. The last digit is a check digit worked out from the first twelve, so a scanner can reject a misread. Weights alternate 1 and 3 from the left.', function () {
  var b = '';
  var seed = 7;
  function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
  var x = 74, unit = 3.4;
  function bar(w, tall) { b += '<rect x="' + x.toFixed(1) + '" y="16" width="' + (w * unit).toFixed(1) + '" height="' + (tall ? 96 : 84) + '" class="solid"/>'; x += w * unit; }
  function gap(w) { x += w * unit; }
  bar(1, 1); gap(1); bar(1, 1);
  for (var g = 0; g < 2; g++) {
    for (var d = 0; d < 6; d++) {
      var left = 0;
      while (left < 7) { var w = 1 + Math.floor(rnd() * 3); if (left + w > 7) w = 7 - left; if (w > 0) { if (rnd() > 0.45) bar(w, 0); else gap(w); left += w; } }
    }
    if (g === 0) { gap(1); bar(1, 1); gap(1); bar(1, 1); gap(1); }
  }
  bar(1, 1); gap(1); bar(1, 1);
  b += t(60, 128, '5', 'tform', 'middle');
  b += t(155, 128, '901234', 'tform', 'middle');
  b += t(316, 128, '123457', 'tform', 'middle');
  b += t(372, 150, 'check digit', 'tsm', 'middle');
  var digits = [5, 9, 0, 1, 2, 3, 4, 1, 2, 3, 4, 5], wts = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];
  b += t(10, 186, 'Digit', 'tsm') + t(10, 208, '× weight', 'tsm') + t(10, 230, 'Result', 'tsm');
  var sum = 0;
  digits.forEach(function (dg, i) {
    var cx = 118 + i * 30;
    var r = dg * wts[i]; sum += r;
    b += t(cx, 186, String(dg), 'tsm', 'middle') + t(cx, 208, '× ' + wts[i], 'tsm', 'middle') + t(cx, 230, String(r), 'tb', 'middle');
  });
  b += t(10, 262, 'Sum = ' + sum + '.  ' + sum + ' mod 10 = ' + (sum % 10) + '.  Check digit = 10 − ' + (sum % 10) + ' = ' + (10 - sum % 10) + '.', 'tb');
  return wrap(480, 280, 'EAN-13 barcode and check digit',
    'A barcode with the digits 5 901234 123457 beneath it and a table showing each of the first twelve digits multiplied by alternating weights of 1 and 3. The sum is 83, so the check digit is 7.', b);
});

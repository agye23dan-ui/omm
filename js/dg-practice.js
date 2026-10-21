/* Diagrams for ATMs, remote support and service administration (modules 16 to 18). */
import { reg, wrap, t, badge, box, arrow, line, lines, circle, rect, poly, block, steps, stack } from './dg-kit.js';

/* ---------------- ATM layout ---------------- */
reg('atm-layout', 'Two zones. The upper cabinet holds the electronics and is the part you service. The safe holds the cash and is opened only by authorised custodians working in pairs.', function () {
  var b = rect(10, 10, 300, 172, 'box tint-c-soft', 8) + t(20, 28, 'Upper cabinet: electronics', 'ts');
  b += block(30, 40, 120, 56, 'Screen', '', 'tint-c') + rect(18, 48, 8, 12, 'box', 1) + rect(18, 70, 8, 12, 'box', 1) + rect(154, 48, 8, 12, 'box', 1) + rect(154, 70, 8, 12, 'box', 1);
  b += block(172, 40, 62, 26, 'Card', 'reader', 'tint-y') + block(172, 72, 62, 24, 'Receipt', '', 'tint-y');
  b += block(30, 108, 74, 58, 'Encrypting', 'PIN pad', 'tint-m-soft') + block(116, 108, 74, 58, 'Cash', 'outlet', 'tint-y-soft');
  b += block(246, 40, 56, 40, 'PC', 'core', 'tint-k-soft') + block(246, 90, 56, 36, 'Router', '', 'tint-k-soft') + block(246, 134, 56, 36, 'Power', '', 'tint-k-soft');
  b += rect(10, 192, 300, 156, 'box tint-m-soft', 8) + t(20, 210, 'Safe: cash', 'ts');
  b += block(26, 220, 168, 110, '', '', 'tint-y-soft') + t(110, 238, 'Dispenser', 'tsm', 'middle');
  [0, 1, 2, 3].forEach(function (i) { b += block(34 + i * 40, 248, 36, 70, 'C' + (i + 1), '', 'tint-c'); });
  b += block(206, 220, 96, 50, 'Reject bin', '', 'tint-k-soft') + block(206, 280, 96, 50, 'Retract bin', '', 'tint-k-soft');
  b += lines(324, 60, ['Zone 1', 'You service the', 'electronics here.'], 'ts', 'start', 17);
  b += lines(324, 240, ['Zone 2', 'Custodians only.', 'Dual control.', 'C1 to C4 are', 'cash cassettes.'], 'ts', 'start', 17);
  return wrap(480, 358, 'ATM layout',
    'Front view of an ATM in two zones. The upper cabinet holds the screen, card reader, receipt printer, PIN pad, cash outlet, computer core, router and power. The safe holds the dispenser with four cassettes, a reject bin and a retract bin.', b);
});

/* ---------------- Note dispenser path ---------------- */
reg('note-dispenser-path', 'The picker takes one note at a time. A thickness check sends doubles to the reject bin. Good notes are stacked and presented. Notes the customer leaves are pulled into the retract bin.', function () {
  var names = [['Cassette', 'holds notes'], ['Picker', 'one at a time'], ['Thickness', 'sensor'], ['Transport', 'belts, rollers'], ['Presenter', 'shutter']];
  var b = '';
  names.forEach(function (n, i) {
    var x = 7 + i * 96;
    b += block(x, 30, 82, 56, n[0], n[1], i === 2 ? 'tint-y' : 'tint-c-soft');
    if (i < 4) b += arrow(x + 82, 58, x + 96, 58);
  });
  b += arrow(246, 86, 246, 140) + block(204, 140, 84, 40, 'Reject bin', '', 'tint-m-soft') + t(240, 112, 'doubles, bad notes', 'tsm', 'end');
  b += arrow(437, 86, 437, 140) + block(395, 140, 84, 40, 'Retract bin', '', 'tint-m-soft') + t(430, 112, 'not taken', 'tsm', 'end');
  b += arrow(437, 30, 437, 10, 'k2') + t(430, 20, 'To the customer', 'tsm', 'end');
  b += lines(10, 216, ['Jam in the transport: look for torn, taped or folded notes.', 'Many rejects: look at sensors, worn pick rollers and damp notes.'], 'ts', 'start', 17);
  return wrap(480, 250, 'Note dispenser path',
    'Five blocks in a row: cassette, picker, thickness sensor, transport and presenter. A reject bin hangs below the thickness sensor and a retract bin below the presenter.', b);
});

/* ---------------- ATM and host ---------------- */
reg('atm-host-flow', 'Every withdrawal is a short conversation between the ATM and the bank host. If the host approves but the dispenser fails, the ATM reports it so the bank can correct the account.', function () {
  var b = block(20, 10, 110, 34, 'ATM', '', 'tint-c') + block(350, 10, 110, 34, 'Bank host', '', 'tint-y');
  b += line('M75 44V300', 'k2') + line('M405 44V300', 'k2');
  function msg(y, dir, text) {
    var s = dir > 0 ? arrow(78, y, 402, y) : arrow(402, y, 78, y);
    return s + t(240, y - 7, text, 'tsm', 'middle');
  }
  b += msg(80, 1, 'Card data, encrypted PIN, amount');
  b += msg(130, -1, 'Approve or decline');
  b += badge(110, 176, '!', 11) + t(130, 180, 'ATM dispenses the cash', 'tsm');
  b += msg(224, 1, 'Result: paid, or failed');
  b += msg(274, -1, 'Acknowledged');
  b += t(10, 326, 'No link to the host means no approvals: the ATM goes out of service.', 'ts');
  return wrap(480, 340, 'ATM and host messages',
    'Two vertical lines for the ATM and the bank host with arrows between them: the request sent to the host, the approval or decline back, the ATM paying out, the result sent to the host, and an acknowledgement.', b);
});

/* ---------------- Support levels ---------------- */
reg('support-levels', 'Solve the problem at the lowest level that can solve it. Pass it up with good notes when it cannot be fixed, so the next person does not start from the beginning.', function () {
  return stack('Levels of support', 'Three levels: first contact by phone or chat, remote technical support, and a site visit by an engineer.', [
    { h: 'Level 1: first contact', n: 'Phone or chat. Known fixes, simple settings, guided steps', tint: 'tint-c-soft' },
    { h: 'Level 2: remote technical support', n: 'Remote session, logs, configuration, firmware', tint: 'tint-y-soft' },
    { h: 'Level 3: site visit or specialist', n: 'Hands-on repair, parts, vendor or developer help', tint: 'tint-m-soft' }
  ]);
});

/* ---------------- Remote support flow ---------------- */
reg('remote-support-flow', 'Work in this order. Do not skip the first two steps. Most remote faults are found while collecting information, before you change anything.', function () {
  return steps('Remote support flow', 'Six steps: verify the caller, collect information, reproduce the fault, guide the fix, confirm it works, and record the call.', [
    { h: 'Verify who is calling', n: ['Name, account, contact', 'Permission for any access'] },
    { h: 'Collect information', n: ['Exact message or code', 'What changed, who is affected'] },
    { h: 'Reproduce and isolate', n: ['Can you see it happen?', 'One change at a time'] },
    { h: 'Guide the fix', n: ['Short numbered steps', 'Customer reads each one back'], tint: 'tint-y-soft' },
    { h: 'Confirm it works', n: ['Customer proves it'], tint: 'tint-y-soft' },
    { h: 'Record and follow up', n: ['Ticket notes, knowledge base', 'Escalate with full detail'], tint: 'tint-g' }
  ]);
});

/* ---------------- Service job flow ---------------- */
reg('service-job-flow', 'Each stage leaves a record. A job that is logged, reported and invoiced properly can be audited, repeated and defended if the customer queries it.', function () {
  return steps('Life of a service job', 'Six stages: log the call, plan the visit, do the work, write the service report, invoice, and follow up.', [
    { h: 'Log the call', n: ['Customer, machine, fault', 'Set the priority'] },
    { h: 'Plan the visit', n: ['Parts, tools, travel', 'Book the time'] },
    { h: 'Do the work', n: ['Safe isolation, diagnose, repair', 'Record readings and counters'], tint: 'tint-y-soft' },
    { h: 'Service report', n: ['Fault, cause, action, parts', 'Customer signs'], tint: 'tint-y-soft' },
    { h: 'Invoice', n: ['Labour, parts, call-out, tax'] },
    { h: 'Follow up', n: ['Check it is still working', 'Update stock and records'], tint: 'tint-g' }
  ]);
});

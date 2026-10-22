# Course content specification

This file tells whoever writes a module (`data/modules/mNN.js`) exactly what to produce.
Every module is checked by `node tests/validate.js`. A module is not finished until the validator passes with no errors.

## What the course is

A study app for students on an **Office Machine Mechanic** programme: people learning to install, maintain and repair photocopiers, printers, multifunction products, cash registers, fax machines and the computers and networks around them.

The structure follows two real international programmes (Québec 5765 and Australia UEE30107). Their topics are regrouped into 17 modules in `data/course.js`, plus an extension module (m18, ATMs) that neither programme lists. **Do not copy text from those documents.** They list competencies, not teaching text. Write original lessons from standard technical knowledge.

Readers are vocational and technical students, many studying on a phone, many with English as a second or third language. Write for them.

## Voice and style

- Plain English. Short sentences. One idea per sentence. Define every technical term the first time it appears, in bold: `**fuser**`.
- Speak to the reader as "you" when giving instructions ("Switch off and unplug the machine").
- Use SI units (V, A, Ω, W, Hz, mm, °C). Use symbols: Ω µ × ÷ ° ² ³ ≈ ≤ ≥ √ and arrows → where useful.
- Mains voltage and plugs differ by country. When it matters, say "230 V at 50 Hz in many countries, 120 V at 60 Hz in others". Never assume one region.
- Do not mention brand names or model numbers as authority. Generic examples only ("a laser printer", "a thermal receipt printer"). Do not invent part numbers, error codes, statistics or manufacturer specifications. When a figure varies between machines, say so ("typically 160 to 200 °C; check the service manual").
- Always say **check the manufacturer's service manual** when a procedure depends on the model.
- Safety content must be correct and conservative. Mains power, hot fusers, capacitors, high-voltage imaging supplies, laser beams, moving parts and ESD all appear in this trade. Never suggest bypassing an interlock, working live when it can be avoided, or testing a fuse by replacing it with a larger rating.
- No filler, no hype, no motivational padding. Every sentence should teach something or help the reader do something.
- Regional examples are welcome when they genuinely help (for example mobile money in the payments lesson), but the content must stay valid anywhere.

## Inline markup

Inside any text string you may use only:

- `**bold**` for a term being defined or a key warning word.
- `` `code` `` for commands, values typed into a machine, or formulas inline.

No HTML. No Markdown links, headings, or lists inside strings. Do not write the characters `<` or `>` as part of tags. The comparison symbols are fine when surrounded by spaces (`V > 5 V`).

## File shape

One file per module. It must register itself like this and use plain ES5-compatible JavaScript data only (no functions, no template literals needed, but they are allowed for multi-line strings; no imports):

```js
OMM.registerModule({
  id: 'm03',
  summary: 'One sentence, 15 to 35 words, saying what the learner will be able to do.',
  outcomes: [ 'Explain ...', 'Calculate ...' ],          // 5 or 6, each starts with a verb
  cheatsheet: [ 'Short fact to memorise ...' ],          // 6 to 10 facts, each under 140 characters
  lessons: [ /* 5 to 7 lessons */ ],
  practical: { /* one practical task sheet */ },
  quiz: [ /* 30 or more questions */ ],
  cards: [ /* 24 or more flashcards */ ]
});
```

Do not add `title`, `area` or `syllabus`. They come from `data/course.js`.

### Lessons

```js
{
  id: 'm03-l1',                // module id + '-l' + number, numbered from 1 with no gaps
  title: 'Voltage, current and resistance',
  minutes: 8,                  // honest reading time, 5 to 15
  body: [ /* blocks, see below */ ]
}
```

Each lesson is **320 to 650 words** of reading text (words in blocks count). A module's lessons together must be at least **1,900 words**.

Block types (the `t` field):

| Block | Fields | Use |
|---|---|---|
| paragraph | `{ t: 'p', text: '...' }` | Normal text. Keep to 1 to 4 sentences. |
| subheading | `{ t: 'h', text: '...' }` | Splits a lesson into sections. Use 2 to 4 per lesson. |
| bullet list | `{ t: 'ul', items: ['...', '...'] }` | Unordered points. Items are short. |
| numbered list | `{ t: 'ol', items: ['...', '...'] }` | Only for real sequences (procedures). |
| callout | `{ t: 'note', kind: 'safety' \| 'tip' \| 'key', text: '...' }` | `safety` for hazards and mandatory precautions, `tip` for workshop know-how, `key` for the one thing to remember. |
| table | `{ t: 'table', head: ['A', 'B'], rows: [['..', '..']], caption: '...' }` | Compare things or map symptom to cause. Every row has the same number of cells as `head`. Max 5 columns. |
| formula | `{ t: 'formula', text: 'V = I × R', caption: 'Ohm\'s law' }` | A formula or worked line shown large. `caption` optional. |
| worked example | `{ t: 'example', title: '...', steps: ['...', '...'] }` | A calculation or procedure worked step by step with real numbers. Check the arithmetic twice. |
| diagram | `{ t: 'diagram', name: 'ohm-triangle' }` | One of the prepared diagrams listed below. Only use a diagram in the lesson indicated for it. |

Every module must contain at least one `safety` note. Every lesson must contain at least one `key` or `tip` note. Every lesson must start with a `p` block that says what the lesson covers in the first sentence.

Prepared diagrams (already drawn, do not describe them as images; refer to them as "the diagram"):

- `ohm-triangle`: the V, I, R triangle. Use in m03.
- `series-parallel`: one series and one parallel resistor circuit with the total-resistance formulas. Use in m03.
- `rectifier-chain`: mains → transformer → rectifier → filter → regulator, with a waveform at each stage. Use in m07.
- `smps-block`: switch-mode power supply block diagram with the isolation barrier and opto feedback. Use in m07.
- `xerography-cycle`: the seven stages of the electrophotographic process around a drum. Use in m13.
- `network-topologies`: star, bus, ring and mesh. Use in m10.
- `paper-path`: side view of a paper path from tray to output with rollers, sensors and typical jam zones. Use in m04 and m13.

Forty-six more diagrams are drawn in `js/dg-foundations.js`, `js/dg-electronics.js`, `js/dg-machines.js` and `js/dg-practice.js`. The full list, and the modules each may be used in, is `DIAGRAM_HOMES` in `tests/validate.js`. Examples: `multimeter-panel` (m02), `ac-waveform` and `live-neutral-earth` (m03), `gear-ratio` (m04), `solder-joints` (m05), `diode-symbols` and `opamp-gain` (m06), `logic-gates` (m08), `rj45-t568` (m10), `fuser-cross-section` (m13), `ean13` (m15), `atm-layout` (m18).

To add a diagram: write it with the helpers in `js/dg-kit.js` and register it with `reg(name, caption, build)`, add its name to `diagrams` in `data/course.js` and to `DIAGRAM_HOMES`, then place `{ t: 'diagram', name: '...' }` in the lesson. Draw with the `.dg` classes only, so it follows light and dark themes. Check it renders at phone width with no clipped text.

### Practical task sheet

A hands-on exercise the learner does in the workshop. Written so a student can follow it without an instructor reading over their shoulder, and safe to do on a training unit.

```js
practical: {
  title: 'Measure and record ...',
  objective: 'One or two sentences.',
  time: '45 minutes',
  tools: [ 'Digital multimeter', ... ],        // 3 or more
  safety: [ 'Unplug the machine ...', ... ],   // 4 or more, specific to this task
  steps: [ 'Step text', ... ],                 // 8 to 14 steps, each one action
  checks: [ 'I can state ...', ... ]           // 4 to 6 self-check statements, "I can ..."
}
```

### Quiz questions

```js
{
  id: 'm03-q01',              // module id + '-q' + two digits, numbered from 01 with no gaps
  q: 'Question text, ending with a question mark or a colon.',
  options: ['A', 'B', 'C', 'D'],   // exactly 4, each under 140 characters
  answer: 2,                  // index 0 to 3 of the correct option
  level: 2,                   // 1 recall, 2 understanding, 3 apply or diagnose
  lesson: 'm03-l3',           // the lesson that teaches this
  explain: 'Why the answer is right and why the most tempting wrong answer is wrong. 1 to 3 sentences.'
}
```

Rules for good questions:

- At least 30 per module. Level mix: about 30% level 1, 45% level 2, 25% level 3.
- At least a third must be **scenario or calculation** questions: a machine with a symptom, a measurement to interpret, a short calculation, a choice of next step.
- Four plausible options. A wrong option should be something a real student might believe, not a joke. No "all of the above" or "none of the above". No options that differ only by one word unless that word is the point.
- Only one option is correct. Be careful: if two could be defended, rewrite.
- Spread the correct answer across positions. Across a module, each of A, B, C, D should be correct for 15% to 35% of the questions.
- Do not give away the answer through length. The correct option should not systematically be the longest.
- Numbers must be right. Work every calculation out and include units. Prefer clean values.
- Cover every lesson at least three times.
- No two questions may test the same fact in the same way.
- Do not refer to "the lesson", "the text" or "the diagram" in a question. Questions must stand alone.

### Flashcards

```js
{ id: 'm03-c01', front: 'Term or question', back: 'Short, exact answer', lesson: 'm03-l2' }
```

- At least 24 per module, ids numbered from 01 with no gaps.
- Front under 140 characters. Back under 260 characters. The back is the answer only; no lecture.
- Mix definitions, "what does X do", "what is the formula", "what is the typical value", and symptom → likely cause cards.
- One fact per card. Do not duplicate quiz questions word for word.

## Module outlines

Each module needs the lessons listed here (you may split or merge slightly, but cover every point, and keep 5 to 7 lessons). The practical is suggested; adapt it to be safe and realistic.

### m01 Workshop safety and professional conduct

1. Hazards in office-equipment servicing: electric shock, hot fuser, pinch points and moving parts, laser light, toner dust, lifting, sharp metal edges, solvents. Hazard vs risk. The hierarchy of controls (eliminate, substitute, engineer, administrative, PPE).
2. Working on mains-powered equipment: isolate and unplug, test before you touch, discharge stored energy, residual-current protection, insulated tools, never bypass interlocks, one hand at a time when a live check is unavoidable, tagging out, checking cords and plugs.
3. Static electricity and handling electronics: what ESD is, how people and plastics build charge, wrist strap and mat, anti-static bags, handling boards by their edges, humidity, which parts are most vulnerable.
4. Laser, toner, chemicals and waste: laser classes in plain terms and why interlocks matter, toner dust handling (do not blow it out, use a suitable vacuum), safety data sheets and hazard symbols, cleaning solvents, disposal of toner, drums, batteries and electronic waste.
5. Lifting, fire and first aid: safe lifting and team lifts, trolleys, fire types and extinguishers (electrical fires), response to electric shock (switch off first, do not touch the casualty until the supply is off), first aid kit, reporting incidents and near misses.
6. Professional conduct and customers: confidentiality (copiers store images of documents), honesty about faults and costs, respect for customer property, punctuality and appearance, listening and explaining clearly, handling a complaint, keeping skills up to date.

Practical: a workshop safety check and safe isolation of a mains-powered training machine.

### m02 Tools, measuring and technical documents

1. Hand tools and special tools: screwdriver types (slotted, Phillips, Pozidriv, Torx, hex), pliers, tweezers, snap-ring pliers, spring hooks, feeler gauges, brushes, vacuum, cleaning fluids and what each is for.
2. Using a multimeter: DC and AC voltage, resistance, continuity, diode test, current in series, measurement categories and fuses, probes, common mistakes (resistance on a live circuit, wrong range, current range left selected).
3. Other instruments: oscilloscope basics (volts per division, time per division, reading peak voltage, period and frequency), logic probe, clamp meter, LCR meter, thermometer.
4. Reading technical documentation: service manual structure, parts catalogue and exploded views, wiring and block diagrams, flow charts, service bulletins, fault-code tables, service modes, revision levels, schematic symbols.
5. Measuring and calculating: vernier calliper and micrometer reading, metric prefixes (p n µ m k M G) and conversion, tolerance and percentage, rounding and significant figures, using Ohm's law with measurements.
6. Finding and checking information: manufacturer portals, parts cross-reference, how to judge a source, recording where information came from, copyright and licence of manuals, keeping your own notes.

Practical: measure and record resistor values, a fuse, a switch and a dimension, and compare with markings.

### m03 Electrical circuits and faults

1. Charge, current, voltage and resistance: units and symbols, conductors and insulators, DC and AC, polarity.
2. Ohm's law and power: V = I × R, P = V × I, rearranging, heat, component power ratings. Use diagram `ohm-triangle`.
3. Series and parallel circuits: rules for current, voltage and resistance, voltage dividers, what an open circuit or short circuit does to each type. Use diagram `series-parallel`.
4. AC and mains: frequency, peak and RMS, single-phase supply with live, neutral and earth, fuses and breakers, why earth matters, transformer basics.
5. Electrical components in office machines: switches and interlocks, relays, solenoids, magnetic clutches, motors, thermistors, thermal fuses, capacitors and inductors in simple terms.
6. Systematic electrical fault diagnosis: gather information, form a hypothesis, test, half-split method, voltage-drop testing, open versus short, compare with a known-good machine, verify the repair and record it.

Practical: measure voltages and currents in a resistor network and find an inserted open-circuit fault.

### m04 Mechanical systems and faults

1. Mechanical principles: force, torque, speed, work, friction, levers, gear ratio and speed calculations.
2. Drive systems: gears, belts, timing belts, pulleys, chains, shafts, bearings and bushings, springs, cams, clutches including one-way clutches, brushed DC, stepper and AC motors in drives.
3. Paper feed mechanisms: pick-up and separation, friction and rubber ageing, feed and registration rollers, causes of misfeeds and multi-feeds, cleaning rollers. Use diagram `paper-path`.
4. Lubrication, wear and materials: oil versus grease, where not to lubricate, plastics and metals, wear patterns, fasteners and thread-locking compound, worn gear teeth.
5. Dismantling and reassembly: photographing and labelling, order of removal, parts trays, screw lengths, harness routing, release clips, alignment marks, never force a part.
6. Diagnosing mechanical faults: noises, jams, slipping, binding, using test modes, gauges and sheet counts, comparing with a working unit.

Practical: inspect, clean and lubricate a paper-feed assembly and measure roller wear.

### m05 Repairing and adjusting parts

1. Planning a repair: repair or replace, original versus compatible parts, wear parts and maintenance kits, part numbers, giving a cost estimate.
2. Basic workshop fabrication: marking out, cutting, filing, drilling, tapping threads, deburring, material choice, tolerances.
3. Fasteners and assembly: screw types and lengths, washers, thread-locking compound, rivets, clips and e-clips, springs, alignment, torque.
4. Soldering and desoldering: iron temperature, flux, leaded and lead-free solder, technique, good joint versus dry or cold joint, desoldering pump and braid, through-hole and surface-mount basics, ESD and fume safety.
5. Repairing housings, panels and doors: plastic types, cracks, hinges, gaskets, cosmetic repair, and why a repaired cover must keep its insulation and safety function.
6. Testing and adjusting after repair: function check, adjustment points, alignment, calibration, test prints and copies, electrical safety check before returning to service, recording what was done.

Practical: replace a through-hole component with correct desoldering and soldering, then inspect the joints.

### m06 Analogue electronics

1. Diodes and semiconductor basics: PN junction, forward voltage (about 0.6 to 0.7 V for silicon), rectifier diode, Schottky, Zener, LED, testing with a meter.
2. Transistors: bipolar NPN and PNP, switch and amplifier use, current gain, biasing, MOSFET basics, testing.
3. Capacitors, inductors and RC behaviour: time constant τ = R × C, filtering and coupling, electrolytic capacitor ageing, polarity, discharging safely.
4. Operational amplifiers: ideal rules, inverting and non-inverting gain formulas, comparators, signal conditioning for sensors.
5. Sensors in office machines: thermistors, photo-interrupters and optocouplers, reflective sensors, Hall sensors, microswitches, typical failures and how to test them.
6. Reading schematics and finding analogue faults: symbols, signal tracing, in-circuit versus out-of-circuit testing, common failures (dry joints, failed capacitors, shorted semiconductors), thermal checks.

Practical: test diodes and transistors, and measure an RC charging time.

### m07 Power supplies

1. The role of power supplies in office machines: AC input, common DC rails (for example 5 V, 12 V and 24 V), separate supplies for logic, motors and imaging, standby supplies.
2. Linear power supplies: transformer, rectifier, filter, regulator, ripple, expected output voltage and loading. Use diagram `rectifier-chain`.
3. Switch-mode power supplies: block structure, isolation barrier, PWM control, switching transistor, high-frequency transformer, optocoupler feedback. Use diagram `smps-block`.
4. Common power supply faults: blown fuse (and why it blew), failed inrush limiter, dried electrolytic capacitors, shorted rectifier or switching transistor, no output, hiccup mode, high ripple, test sequence.
5. High-voltage supplies for imaging: charge, development bias and transfer voltages, typical hazards, contacts and cleaning, ozone, discharging, safe testing.
6. Safe testing and repair: unplug and discharge, primary-side hazards, isolation transformer, current-limited test, replacing safety-rated parts (fuses, X and Y capacitors) with the same type, creepage and clearance, post-repair safety checks.

Practical: measure DC rails and ripple on a demonstration supply and complete a fault chart.

### m08 Digital electronics

1. Number systems: binary, hexadecimal, decimal conversion, bits, bytes, why machines use them.
2. Logic gates and truth tables: AND, OR, NOT, NAND, NOR, XOR.
3. Combinational and sequential logic: decoders, multiplexers, adders, latches, flip-flops, counters, registers.
4. Memory and microprocessors in office machines: ROM, flash, EEPROM, RAM, firmware, clock, reset, battery-backed settings and counters.
5. Interfacing: analogue-to-digital and digital-to-analogue conversion, driver circuits, relay and motor drivers, serial links (UART, I²C, SPI).
6. Diagnosing digital faults: logic probe and oscilloscope use, checking power, clock and reset first, stuck signals, firmware problems, self-test and error codes.

Practical: verify gate truth tables and observe a counter on a trainer board or simulator.

### m09 Operating systems and software servicing

1. What an operating system does: kernel, file system, drivers, user interface, multi-user systems.
2. Disk and file management: partitions, file systems (FAT32, exFAT, NTFS, ext4) in plain terms, file attributes, copying, compression, backup and restore.
3. Command-line basics: Windows command prompt and PowerShell, Linux shell, common commands for files and networks, permissions.
4. Drivers and software installation: what a driver is, printer drivers and page description languages in simple terms, updating and rolling back, licences.
5. Customising the working environment: user accounts, profiles, permissions, start-up items, power settings, basic security.
6. Troubleshooting software faults: boot problems, safe mode, event logs, malware basics, restore points, back up before you repair, document what you changed.

Practical: partition and format a spare drive, install a printer driver and print a test page.

### m10 Networks and communication links

1. Network fundamentals: LAN and WAN, clients and servers, IP addresses, subnet masks, MAC addresses, DHCP and static addressing, DNS, layers in simple terms.
2. Network hardware and topologies: switch, router, access point, modem, and star, bus, ring and mesh layouts. Use diagram `network-topologies`.
3. Cabling and connectors: twisted-pair categories, T568A and T568B wiring, crimping RJ45, straight and crossover cables, cable testing, fibre basics, USB and serial links.
4. Telephone lines and fax links: analogue line basics, ring and line voltages, tone dialling, PBX and VoIP effects on fax, line testing.
5. Protocols for printing and scanning: TCP/IP basics, raw port printing, IPP, SMB shares, SNMP, SMTP for scan-to-email.
6. Testing and troubleshooting links: ping, address checks, link lights, cable tester, duplicate addresses, firewalls, reading a customer's network diagram.

Practical: make and test an RJ45 patch cable and verify connectivity to a networked machine.

### m11 Microcomputer hardware service

1. PC architecture: processor, memory, motherboard, storage, power supply, expansion buses and interfaces.
2. Assembling and installing components: ESD precautions, order of assembly, memory, processor and cooler, drives, cabling, firmware setup, installing the operating system.
3. Diagnosing hardware faults: power-on self-test, beep and light codes, swap testing, memory tests, drive health, thermal faults, no-display and boot loops.
4. Storage and data protection: hard drives versus solid-state drives, RAID in simple terms, backups, secure erasing, handling customer data carefully.
5. Upgrading and updating: compatibility checks, firmware updates and their risks, driver updates, planning an upgrade.
6. Preventive maintenance and handover: cleaning, fans and heat, acceptance testing, documenting, showing the customer.

Practical: open a PC, identify components, run diagnostics and complete a health-check report.

### m12 Printers, scanners and monitors

1. Printer technologies: laser and LED, inkjet, dot matrix, thermal, and which suits which job.
2. Laser printer engine: charge, expose, develop, transfer, fuse, clean; toner cartridge, drum, fuser, transfer roller.
3. Inkjet and dot-matrix servicing: print heads, clogged nozzles, cleaning cycles, ink systems, waste ink pads, alignment, dot-matrix heads and ribbons.
4. Scanners and monitors: flatbed scanner structure, resolution, calibration, document feeders, LCD and LED-backlit monitor structure and common faults.
5. Print quality faults: streaks, ghosting, smearing, blank pages, jams, error codes; a symptom to cause table.
6. Servicing procedure and maintenance kits: preventive maintenance by page count, cleaning, consumables, test pages, counters, safe disposal.

Practical: diagnose defects from sample prints and carry out a cleaning procedure.

### m13 Photocopiers

1. Types and main assemblies: analogue and digital, monochrome and colour, speed classes, scanner, optics, drum unit, developer unit, transfer, fuser, paper feed, controller, power supplies, counters.
2. The electrophotographic process: charge, expose, develop, transfer, separate, fuse, clean (and discharge). Use diagram `xerography-cycle`.
3. Scanning, optics and image processing: exposure lamp or LED, sensor, mirrors and lens, platen cleaning, shading correction, conversion to digital, test charts.
4. Developer, toner and drum: one- and two-component developer, carrier, toner concentration, toner supply, organic photoconductor drum, drum life, cleaning blade, handling.
5. Paper path, registration and fusing: sensors, registration, heat roller and pressure roller, thermistor and thermostat, fuser lamp, temperature ranges, paper types. Use diagram `paper-path`.
6. Image quality faults and diagnosis: lines, spots, background, light and dark copies, uneven density, misregistration, and repeating defects: finding the faulty roller from the spacing, using circumference = π × diameter. Colour faults in outline.
7. Installation, maintenance and service procedure: site and power checks, set-up, preventive maintenance counters, service modes and codes, adjustment, resetting counters, records, customer demonstration.

Practical: preventive maintenance of a training copier, including measuring a repeating defect pitch.

### m14 Multifunction equipment, fax and finishers

1. What a multifunction product is: print, copy, scan and fax in one unit, controller and network structure, panels, stored data and security.
2. Fax operation and faults: how a fax transmission works in outline, speeds, error correction, line problems, transmit versus receive faults, PBX and VoIP.
3. Scan-to and network features: scan to email, folder and file server, address books, authentication, mail server settings, common failures.
4. Finishers, sorters and staplers: offset stacking, staple units, punch units, booklet makers, sensors, jams, alignment.
5. Paper handling options: document feeders, duplex units, large-capacity trays, bypass tray, paper sizes and weights, curl and humidity.
6. Peripherals, options and service: card and coin or account-control devices, installing options, configuration, error codes and logs, service report for a multifunction product.

Practical: install and configure a multifunction product on a network, set up scan-to-folder and send a test fax.

### m15 Sales registration equipment

1. Overview: cash registers and point-of-sale terminals, keyboard, display, drawer, printer, scanner, scale, payment device, stand-alone versus networked.
2. Receipt printers and cash drawers: thermal printing, print head, platen, paper sensors, cutter, impact printers, how the printer opens the drawer.
3. Barcode scanners and scales: laser and imaging scanners, EAN-13 and Code 128, check-digit calculation, load cells, calibration and legal-for-trade seals.
4. Configuration: departments and PLUs, tax rates, X and Z reports, price changes, date and time, operator codes, backups, connection to a server.
5. Payment devices and security: chip, contactless and mobile-money payment, tamper checks, why card data must never be written down, secure handling.
6. Diagnosing and servicing: symptom to cause for drawers, printers, scanners and displays, power and network faults, firmware, preventive care and reconditioning.

Practical: configure a cash register or POS terminal with departments and tax, then test the receipt printer and drawer.

### m16 Remote technical support

1. Principles: what can be solved remotely, support levels, first-contact resolution, tickets.
2. Communicating by phone and chat: etiquette, active listening, good questions, plain language, empathy, calming an upset customer.
3. Remote support tools and security: remote desktop software, consent, unattended access risks, identity checks, logging, privacy, how to avoid helping a scammer.
4. Structured remote diagnosis: collect information, reproduce the fault, error codes, configuration pages, firmware versions, network checks, one change at a time.
5. Guiding a customer through a fix: clear numbered instructions, confirming understanding, when to stop and escalate to a site visit.
6. Records and follow-up: writing ticket notes, knowledge-base entries, closing the loop, escalation rules.

Practical: role-play a remote support call and write the ticket record.

### m17 Service reports, parts and business administration

1. Receiving and planning service requests: logging calls, priority, scheduling, travel, deciding what parts and tools to take.
2. Writing service reports: what to record (fault, cause, action, parts, readings, meter counts, test result, customer sign-off), clear wording.
3. Parts stock and ordering: stock levels, minimum and maximum, part numbers, checking deliveries, classifying parts, warranty and returns.
4. Estimates, quotations and invoices: labour, parts, call-out, tax calculations, discounts, payment terms, honest pricing.
5. Time sheets, customer records and scheduling: spreadsheets and databases, calendars, privacy, how long to keep records.
6. Maintenance programmes and running a service business: preventive maintenance contracts, meter readings, health and safety duties, waste and environmental duties, small-business basics.

Practical: complete a service report, a parts requisition and an invoice for a sample repair job.

### m18 ATMs and cash-handling equipment (extension module)

Neither source programme covers ATMs. This module follows the same rules as the others. Never describe how to defeat a lock, alarm, tamper seal or any security measure, and never suggest that a technician opens a safe or handles live cash without an authorised custodian present.

1. ATM types and main assemblies: cash dispenser, cash recycler, deposit machine, through-the-wall and lobby, front-load and rear-load; fascia, encrypting PIN pad, computer core, dispenser, printer, safe, power and alarms; the two zones.
2. How the cash dispenser works: cassettes, picker, thickness sensor, transport, presenter, reject bin and retract bin, common faults.
3. Card readers, PIN pads and tamper checks: stripe, chip and contactless; dip and motorised readers; the encrypting PIN pad; skimming signs and what to report.
4. Printers, screen, computer core and the bank link: thermal receipt printer, electronic journal, host communication order, out-of-service causes.
5. Cash handling, the safe and physical security: reconciliation, dual control, safe access, alarms, ink-staining cassettes.
6. Diagnosing and servicing ATMs: fault method, symptom table, preventive maintenance, safe movement, records.

Practical: inspect and service the fascia and note path of a training ATM, with no live cash.

## Diagnosis cases

Each module with fault-finding content has a file `data/cases/mNN.js` with 3 or more cases. A case is one job the learner works from report to repair. They run checks, narrow down to an area, name the fault, choose the repair and choose how to prove it is fixed. Aim for one straightforward, one typical and one tricky case per module (`level` 1, 2, 3).

```js
OMM.registerCases('m03', [
  {
    id: 'm03-d1',                 // module id + '-d' + number, from 1 with no gaps
    title: 'Photocopier completely dead',   // 70 characters or fewer
    level: 1,                     // 1 straightforward, 2 typical, 3 tricky
    lesson: 'm03-l6',             // the lesson to read after the case
    report: 'What the customer says and what you see on arrival. 25 to 140 words.',
    checks: [                     // 8 to 12 checks
      { id: 'c1', label: 'What you do', result: 'What you find.', type: 'key' }
    ],
    areas: [ ... 4 ... ], area: 0,          // narrowing down, each under 80 characters
    faults: [ ... 4 ... ], fault: 0,
    repairs: [ ... 4 ... ], repair: 0,
    verify: [ ... 4 ... ], verifyAns: 0,    // how to prove it is fixed
    explain: { area: '...', fault: '...', repair: '...', verify: '...' }   // why the right answer is right
  }
]);
```

Check types:

- `key`: a check that finds the evidence. 3 to 5 per case. Missing them lowers the score.
- `useful`: harmless and informative, but not essential.
- `low`: a waste of time or money, such as replacing a board before testing. At least 2 per case. Costs 3 points each.
- `unsafe`: a dangerous or rule-breaking action, such as bypassing an interlock, working live, fitting a larger fuse, opening a safe alone or asking for a password. At least 1 per case. Costs 12 points and stops a pass.

Rules for good cases:

- The result of every check must be consistent with the one fault. A learner should be able to reason to the answer from the results.
- Put plausible wrong turns in the options: a fault a real student might suspect, a repair that treats the symptom, a lazy way to verify.
- Do not let the right option be the longest. The validator warns when it is the longest in more than 55% of a module's decisions. Aim for about 25%.
- The right repair fixes the cause. Verification must prove the thing that failed, not just that the machine switches on.
- Results, options and explanations follow the same voice and safety rules as lessons. Do not refer to options by letter or number, because the app shuffles them.

## Fault library by device

`data/devices/<id>.js` lists the common faults of one machine, with the remedy for each. The device list, titles and blurbs are in `devices` in `data/course.js`. Each file has this shape:

```js
OMM.registerDevice({
  id: 'laser',
  groups: ['Paper feed', 'Print quality', ...],      // 2 to 9 areas, each under 30 characters
  faults: [
    // [group, symptom, cause, check, remedy, lesson, safety (optional)]
    ['Paper feed', 'Paper jams at the pick-up from the tray',
      'A worn or glazed pick-up roller...',            // likely cause, 25 to 280 characters
      'Look at the roller surface...',                  // first check, 20 to 260
      'Clean the roller... replace...',                 // remedy, 30 to 380
      'm04-l3',                                         // the lesson that teaches it
      'Unplug the machine first.']                      // optional safety note, 20 to 260
  ]
});
```

Rules:

- At least 8 faults per device, and every group needs at least one. The symptom is what the customer or technician sees, under 90 characters, and it must be different from every other symptom on that device.
- Give the cause, then the first check that tells the causes apart, then the remedy that fixes the cause, not only the symptom. Say what to replace, with the same type and rating where it matters.
- Add a safety note whenever the fault involves mains, a hot fuser, high voltage, a laser, moving parts, cash or customer data. Never suggest bypassing an interlock or fitting a larger fuse.
- Use plain English, no brand names and no invented figures. The lesson id must exist.

## Installation guides by device

`data/install/<id>.js` is the installation checklist for one device, using the same device ids as the fault library:

```js
OMM.registerInstall({
  id: 'laser',
  intro: 'One or two sentences on what a good installation achieves.',   // 30 to 260 characters
  lesson: 'm13-l7',
  tools: [ ... ],       // 3 to 10 items, each under 90 characters
  safety: [ ... ],      // 3 to 8 items, each under 220 characters
  before: [ ... ], site: [ ... ], unpack: [ ... ],   // 3 to 10 steps each, under 230 characters
  setup: [ ... ], test: [ ... ], handover: [ ... ]
});
```

- Write each step as one action the technician can tick off. Use "Check", "Fit", "Connect", "Set", "Show" and "Record" at the start where it helps.
- Safety comes first and must be specific to the device: lifting, mains and earth, hot fuser, laser, high voltage, moving parts, cash and customer data.
- Always tell the learner to follow the manufacturer's installation procedure for the model. Do not invent figures, clearances or settings.
- Every guide should include a test that proves the main function works, and a handover step that shows the customer how to use it and records the serial number and settings.
- For an ATM, cash and safe handling stay with the bank's authorised custodians.

## Checking your work

```
node tests/validate.js m03          # one module
node tests/validate.js              # everything
```

Fix every error. Warnings are worth reading too. Before you finish, re-read your own quiz answers once more against the explanations, and re-check every calculation.

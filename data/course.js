/*
 * Course outline for the Office Machine Mechanic study app.
 *
 * The structure follows two published international programmes:
 *   - Québec "Business Equipment Technical Service" (program 5765, 21 modules)
 *   - Australia "UEE30107 Certificate III in Business Equipment"
 * Their topics are regrouped here into 17 study modules, plus one extension module (m18, ATMs). Lesson text, quiz
 * questions and flashcards are original writing for this app.
 *
 * Module content lives in data/modules/mNN.js and registers itself with
 * OMM.registerModule(). Titles, areas and syllabus links come from this file.
 */
(function (root) {
  'use strict';

  var Q = 'Québec 5765';
  var A = 'Australia UEE30107';

  var course = {
    id: 'omm',
    title: 'Office Machine Mechanic',
    subtitle: 'Study guide for the programme of study',
    version: 1,
    passMark: 70,

    areas: [
      { id: 'foundations', label: 'Foundations', blurb: 'Safe working, tools, measuring and technical documents.' },
      { id: 'diagnosis', label: 'Diagnosis and repair', blurb: 'Electrical, mechanical, analogue, power and digital faults, and how to repair them.' },
      { id: 'computing', label: 'Computing and networks', blurb: 'Operating systems, network links and microcomputer hardware.' },
      { id: 'equipment', label: 'Office equipment servicing', blurb: 'Printers, photocopiers, multifunction products and sales registration equipment.' },
      { id: 'practice', label: 'Service practice', blurb: 'Supporting customers remotely and running service work properly.' }
    ],

    modules: [
      {
        id: 'm01', number: 1, area: 'foundations',
        title: 'Workshop safety and professional conduct', short: 'Safety',
        syllabus: [
          Q + ' module 1: The trade and the training process',
          Q + ' module 12: Professional relationships',
          A + ' UEENEEE001B: Apply OHS practices in the workplace',
          A + ' UEENEEE037B: Document occupational hazards and risks in electrotechnology',
          A + ' UEENEEC013B: Participate in business equipment work and competency development activities'
        ]
      },
      {
        id: 'm02', number: 2, area: 'foundations',
        title: 'Tools, measuring and technical documents', short: 'Tools',
        syllabus: [
          Q + ' module 3: Researching information',
          A + ' UEENEEE007B: Use drawings, diagrams, schedules and manuals',
          A + ' UEENEEE005B: Fix and secure equipment'
        ]
      },
      {
        id: 'm03', number: 3, area: 'diagnosis',
        title: 'Electrical circuits and faults', short: 'Electrical',
        syllabus: [
          Q + ' module 2: Diagnosing a malfunction in electrical circuits',
          A + ' UEENEEE003B: Solve problems in extra-low voltage single path circuits',
          A + ' UEENEEE004B: Solve problems in multiple path d.c. circuits'
        ]
      },
      {
        id: 'm04', number: 4, area: 'diagnosis',
        title: 'Mechanical systems and faults', short: 'Mechanical',
        syllabus: [
          Q + ' module 6: Diagnosing a malfunction of mechanical origin',
          A + ' UEENEEE002B: Dismantle, assemble and fabricate electrotechnology components'
        ]
      },
      {
        id: 'm05', number: 5, area: 'diagnosis',
        title: 'Repairing and adjusting parts', short: 'Repair',
        syllabus: [
          Q + ' module 4: Repairing and adjusting parts',
          A + ' UEENEEH002B: Carry out basic repairs to electronic apparatus by replacement of components',
          A + ' UEENEEH003B: Carry out routine repairs to business equipment'
        ]
      },
      {
        id: 'm06', number: 6, area: 'diagnosis',
        title: 'Analogue electronics', short: 'Analogue',
        syllabus: [
          Q + ' module 8: Diagnosing a malfunction in analogue circuits',
          A + ' UEENEEH007B: Carry out repairs of predictable faults in general electronic apparatus',
          A + ' UEENEEH013B: Troubleshoot amplifiers',
          A + ' UEENEEH039B: Troubleshoot basic amplifiers',
          A + ' UEENEEH014B: Troubleshoot frequency dependent circuits'
        ]
      },
      {
        id: 'm07', number: 7, area: 'diagnosis',
        title: 'Power supplies', short: 'Power',
        syllabus: [
          Q + ' module 8: Diagnosing a malfunction in analogue circuits (linear and switched-mode power supplies)',
          A + ' UEENEEH011B: Troubleshoot d.c. power supplies with single phase input',
          A + ' UEENEEH038B: Find and repair faults in complex power supplies'
        ]
      },
      {
        id: 'm08', number: 8, area: 'diagnosis',
        title: 'Digital electronics', short: 'Digital',
        syllabus: [
          Q + ' module 10: Diagnosing a malfunction in digital circuits',
          A + ' UEENEEH012B: Troubleshoot digital subsystems'
        ]
      },
      {
        id: 'm09', number: 9, area: 'computing',
        title: 'Operating systems and software servicing', short: 'Operating systems',
        syllabus: [
          Q + ' module 9: Servicing operating systems',
          A + ' UEENEED001B: Use basic computer applications relevant to a workplace'
        ]
      },
      {
        id: 'm10', number: 10, area: 'computing',
        title: 'Networks and communication links', short: 'Networks',
        syllabus: [
          Q + ' module 7: Establishing communication links',
          Q + ' module 15: Interpretation of a network structure'
        ]
      },
      {
        id: 'm11', number: 11, area: 'computing',
        title: 'Microcomputer hardware service', short: 'PC hardware',
        syllabus: [
          Q + ' module 13: After-sales service on microcomputers'
        ]
      },
      {
        id: 'm12', number: 12, area: 'equipment',
        title: 'Printers, scanners and monitors', short: 'Printers',
        syllabus: [
          Q + ' module 18: After-sales service on microcomputer peripherals',
          A + ' UEENEEH021B: Find and repair faults in high volume office equipment'
        ]
      },
      {
        id: 'm13', number: 13, area: 'equipment',
        title: 'Photocopiers', short: 'Photocopiers',
        syllabus: [
          Q + ' module 14: After-sales service on photocopiers',
          A + ' UEENEEH021B: Find and repair faults in high volume office equipment',
          A + ' UEENEEH003B: Carry out routine repairs to business equipment'
        ]
      },
      {
        id: 'm14', number: 14, area: 'equipment',
        title: 'Multifunction equipment, fax and finishers', short: 'Multifunction',
        syllabus: [
          Q + ' module 11: After-sales service on multifunction equipment',
          Q + ' module 16: After-sales service on photocopier peripherals'
        ]
      },
      {
        id: 'm15', number: 15, area: 'equipment',
        title: 'Sales registration equipment', short: 'Cash registers',
        syllabus: [
          Q + ' module 19: After-sales service on sales registration equipment'
        ]
      },
      {
        id: 'm16', number: 16, area: 'practice',
        title: 'Remote technical support', short: 'Remote support',
        syllabus: [
          Q + ' module 20: Remote technical support',
          A + ' UEENEEC010B: Deliver a service to customers'
        ]
      },
      {
        id: 'm17', number: 17, area: 'practice',
        title: 'Service reports, parts and business administration', short: 'Admin',
        syllabus: [
          Q + ' module 17: Administrative tasks',
          A + ' UEENEEC001B: Maintain documentation',
          A + ' UEENEEC002B: Source and purchase material/parts for installation or service jobs',
          A + ' UEENEEC003B: Provide quotations for installation or service jobs',
          A + ' UEENEEE009B: Comply with scheduled and preventative maintenance program processes',
          A + ' UEENEEK042A: Participate in environmentally sustainable work practices'
        ]
      },
      {
        id: 'm18', number: 18, area: 'equipment',
        title: 'ATMs and cash-handling equipment', short: 'ATMs',
        syllabus: [
          'Extension module: automated teller machines are not listed in ' + Q + ' or ' + A + ', and were added for this app'
        ]
      }
    ],

    /* Devices for the fault library. Each has a file data/devices/<id>.js with its groups and faults. */
    devices: [
      { id: 'laser', title: 'Laser printers', blurb: 'Mono and colour laser and LED printers.', modules: ['m12', 'm07', 'm04'] },
      { id: 'inkjet', title: 'Inkjet printers', blurb: 'Printers that fire ink from a print head.', modules: ['m12'] },
      { id: 'dotmatrix', title: 'Dot-matrix printers', blurb: 'Impact printers for multipart forms and continuous paper.', modules: ['m12'] },
      { id: 'receipt', title: 'Thermal receipt printers', blurb: 'Receipt and label printers used with tills.', modules: ['m15'] },
      { id: 'copier', title: 'Photocopiers', blurb: 'Analogue and digital copiers, mono and colour.', modules: ['m13', 'm07', 'm04'] },
      { id: 'mfp', title: 'Multifunction products', blurb: 'Print, copy, scan and fax in one machine.', modules: ['m14', 'm10'] },
      { id: 'fax', title: 'Fax machines', blurb: 'Stand-alone and built-in fax.', modules: ['m14', 'm10'] },
      { id: 'scanner', title: 'Scanners', blurb: 'Flatbed scanners and document feeders.', modules: ['m12', 'm13'] },
      { id: 'finisher', title: 'Finishers and staplers', blurb: 'Sorters, staplers, punches and booklet makers.', modules: ['m14'] },
      { id: 'monitor', title: 'Monitors and displays', blurb: 'LCD and LED-backlit monitors.', modules: ['m12'] },
      { id: 'pc', title: 'Desktop computers', blurb: 'Office PCs: hardware, operating system and drivers.', modules: ['m11', 'm09'] },
      { id: 'network', title: 'Network links', blurb: 'Cables, switches, addresses and connections.', modules: ['m10'] },
      { id: 'pos', title: 'Cash registers and POS terminals', blurb: 'Tills, drawers, displays and payment devices.', modules: ['m15'] },
      { id: 'barcode', title: 'Barcode scanners and scales', blurb: 'Retail scanners and weighing scales.', modules: ['m15'] },
      { id: 'atm', title: 'ATMs', blurb: 'Cash dispensers and recyclers.', modules: ['m18'] }
    ],

    /* Diagram names that lesson blocks may reference: { t: 'diagram', name: '...' }.
       The drawings themselves are in js/diagrams.js. */
    diagrams: [
      'ohm-triangle',
      'series-parallel',
      'rectifier-chain',
      'smps-block',
      'xerography-cycle',
      'network-topologies',
      'paper-path',
      'hierarchy-controls',
      'warning-signs',
      'isolation-sequence',
      'screw-heads',
      'multimeter-panel',
      'scope-screen',
      'metric-prefixes',
      'ac-waveform',
      'live-neutral-earth',
      'diagnosis-loop',
      'half-split',
      'gear-ratio',
      'drive-types',
      'solder-joints',
      'diode-symbols',
      'transistor-switch',
      'rc-charging',
      'opamp-gain',
      'photo-interrupter',
      'power-rails-map',
      'binary-place-values',
      'logic-gates',
      'microcontroller-block',
      'os-layers',
      'boot-sequence',
      'network-layers',
      'rj45-t568',
      'fax-call-phases',
      'pc-architecture',
      'inkjet-head',
      'scanner-optics',
      'repeating-defect',
      'developer-unit',
      'fuser-cross-section',
      'mfp-structure',
      'scan-to-flow',
      'finisher-path',
      'receipt-printer-parts',
      'drawer-signal',
      'ean13',
      'support-levels',
      'remote-support-flow',
      'service-job-flow',
      'atm-layout',
      'note-dispenser-path',
      'atm-host-flow'
    ],

    sources: [
      {
        title: 'Québec: Business Equipment Technical Service, program 5765 (Diploma of Vocational Studies, 1800 hours, 21 modules)',
        url: 'https://www.inforoutefpt.org/ministere_docs/publications/archives/PE09BusEquipTechService5765-2004.pdf'
      },
      {
        title: 'Australia: UEE30107 Certificate III in Business Equipment',
        url: 'https://training.gov.au/assets/UEE07/UEE30107_R1.pdf'
      }
    ]
  };

  root.OMM = root.OMM || {};
  root.OMM.course = course;
  root.OMM.modules = root.OMM.modules || {};
  root.OMM.registerModule = function (m) {
    root.OMM.modules[m.id] = m;
  };
  /* Diagnosis cases for a module live in data/cases/mNN.js. */
  root.OMM.cases = root.OMM.cases || {};
  root.OMM.registerCases = function (moduleId, list) {
    root.OMM.cases[moduleId] = list;
  };
  /* Fault library entries live in data/devices/<id>.js. */
  root.OMM.devices = root.OMM.devices || {};
  root.OMM.registerDevice = function (d) {
    root.OMM.devices[d.id] = d;
  };
  /* Manufacturer error codes live in data/errorcodes.js. */
  root.OMM.registerErrorCodes = function (d) {
    root.OMM.errorCodes = d;
  };
  /* Installation guides live in data/install/<id>.js. */
  root.OMM.installs = root.OMM.installs || {};
  root.OMM.registerInstall = function (d) {
    root.OMM.installs[d.id] = d;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = course;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);

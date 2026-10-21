OMM.registerCases("m18", [
  {
    "id": "m18-d1",
    "title": "ATM keeps rejecting cards",
    "level": 1,
    "lesson": "m18-l3",
    "report": "Customers complain that an ATM in a shopping centre will not read their cards and says Card cannot be read. It happens with many different cards and customers say it was fine last week. The ATM is otherwise in service and the host link is up.",
    "checks": [
      { "id": "c1", "label": "Read the electronic journal for card-reader events", "result": "The journal shows many card read errors across different cards over several days.", "type": "key" },
      { "id": "c2", "label": "Run the card reader diagnostics from the service menu", "result": "The diagnostics report a read error on the chip contacts and a dirty head warning.", "type": "key" },
      { "id": "c3", "label": "Switch off and inspect the card path for dirt, fragments and damage", "result": "Dust and a small fragment of plastic from a damaged card are in the path. The chip contacts are dirty.", "type": "key" },
      { "id": "c4", "label": "Inspect the card slot and fascia for signs of tampering before opening further", "result": "The slot cover is firm and original with no glue, no loose parts and no extra devices.", "type": "key" },
      { "id": "c5", "label": "Clean the card path with the approved cleaning card and remove the fragment, then retest", "result": "The diagnostics pass and the card reads. The reader is working again.", "type": "key" },
      { "id": "c6", "label": "Replace the encrypting PIN pad", "result": "The PIN pad is not involved in reading cards. It would also need keys to be loaded.", "type": "low" },
      { "id": "c7", "label": "Reload the ATM software", "result": "Software changes only go through the bank's procedure and would not clean the card path.", "type": "low" },
      { "id": "c8", "label": "Write down the card numbers that failed so you can check them later", "result": "Unsafe: never record card numbers. You do not need them to repair a reader.", "type": "unsafe" },
      { "id": "c9", "label": "Check the host link", "result": "The link to the host is up. The fault is local to the reader.", "type": "useful" }
    ],
    "areas": [
      "The card reader path",
      "The cash dispenser",
      "The receipt printer and the paper path that feeds it",
      "The host link"
    ],
    "area": 0,
    "faults": [
      "Dirt and a card fragment in the card path",
      "A failed dispenser",
      "A broken receipt printer that has stopped the card reader from working",
      "A lost host link"
    ],
    "fault": 0,
    "repairs": [
      "Clean the card path, remove the fragment and run the reader diagnostics",
      "Replace the PIN pad",
      "Reload the software",
      "Replace the dispenser"
    ],
    "repair": 0,
    "verify": [
      "Run the diagnostics and an authorised test transaction with a test card, then record the service",
      "Wait for the next customer complaint and then decide whether any more work is needed and write nothing in the report",
      "Check the receipt printer",
      "Switch the ATM off and on"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Many different cards fail, the diagnostics name the reader and the host link is fine. The card path is where to work.",
      "fault": "Dirt on the chip contacts and a plastic fragment stop the card making contact. Cleaning and clearing the fragment restored reading.",
      "repair": "Clean the path and remove the fragment. Replacing the PIN pad or reloading software does not touch the card path.",
      "verify": "Run the diagnostics and an authorised test transaction with a test card, and write the service record. Never use real customer cards."
    }
  },
  {
    "id": "m18-d2",
    "title": "ATM out of service, devices all pass",
    "level": 2,
    "lesson": "m18-l4",
    "report": "An ATM at a petrol station shows Out of service since early morning. The bank's monitoring centre reports it lost contact with the machine. Staff say the lights are on and the machine looks normal. The ATM, dispenser and printer have all passed their start-up self-tests.",
    "checks": [
      { "id": "c1", "label": "Read the electronic journal around the time the fault started", "result": "The journal shows device checks passing and then repeated host connection failures starting at 4 am.", "type": "key" },
      { "id": "c2", "label": "Look at the router lights in the upper cabinet", "result": "The router has power but the link light is off. The cable plugs into the wall at the back.", "type": "key" },
      { "id": "c3", "label": "Check the router's power supply and cable at both ends", "result": "The router's power adapter is loose in the socket and the network cable is slightly pulled out at the router.", "type": "key" },
      { "id": "c4", "label": "Reseat the power and network cables and watch the lights", "result": "The link light comes on and the router connects. The ATM reports the host as reachable.", "type": "key" },
      { "id": "c5", "label": "Run the device diagnostics for the dispenser and the card reader", "result": "Both pass. The devices are healthy.", "type": "useful" },
      { "id": "c6", "label": "Replace the computer core", "result": "The core is working and the devices pass. It would be wasted effort and would need software loading.", "type": "low" },
      { "id": "c7", "label": "Reload the ATM software", "result": "Software is only changed through the bank's procedure and the fault is the link.", "type": "low" },
      { "id": "c8", "label": "Ask the station staff for the safe combination to look inside", "result": "Unsafe and unnecessary: a link fault does not involve the safe. Only authorised custodians open it.", "type": "unsafe" },
      { "id": "c9", "label": "Check the mains supply to the ATM", "result": "The mains supply is steady and the ATM is powered.", "type": "useful" }
    ],
    "areas": [
      "The router and link to the host",
      "The cash cassettes",
      "The card reader",
      "The receipt printer"
    ],
    "area": 0,
    "faults": [
      "Loose router power and network cables lost the link to the host",
      "A failed dispenser",
      "A broken card reader",
      "A corrupt ATM application that stops the machine reaching the host"
    ],
    "fault": 0,
    "repairs": [
      "Reseat the router power and network cables, secure them and confirm the host link",
      "Replace the computer core",
      "Reload the software",
      "Open the safe at once and check the cassettes while the station staff stand by to help"
    ],
    "repair": 0,
    "verify": [
      "Confirm the ATM is back in service with the monitoring centre and complete an authorised test transaction",
      "Check the router light only",
      "Wait to see if it drops again",
      "Close the cabinet"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The devices all pass and the journal shows host connection failures, so the link to the host is the area to check.",
      "fault": "A router with no link light and loose cables explains the lost contact. Reseating them brought the link back.",
      "repair": "Reseat and secure the cables. The core, software and safe have nothing to do with a link fault.",
      "verify": "Confirm with the monitoring centre and run an authorised test transaction. The router light alone does not show the ATM can reach the bank."
    }
  },
  {
    "id": "m18-d3",
    "title": "Short payouts and many rejects",
    "level": 3,
    "lesson": "m18-l2",
    "report": "An ATM often pays out fewer notes than requested and the journal shows frequent rejects from one cassette. It has had two cassette refills this month. A custodian, who is on site and authorised, can open the safe with you present under dual control. It is a humid week.",
    "checks": [
      { "id": "c1", "label": "Read the journal for the pattern of rejects, dispenses and the cassette involved", "result": "Most rejects come from cassette 2 and are logged as double-pick or note thickness. The other cassettes are fine.", "type": "key" },
      { "id": "c2", "label": "With the custodian present under dual control, check the notes in cassette 2", "result": "The notes look limp and slightly damp, and some are folded or taped. Several stick together.", "type": "key" },
      { "id": "c3", "label": "Switch off and inspect the pick rollers and the thickness sensor on cassette 2's pick module", "result": "The pick rollers are glazed and worn. The thickness sensor has a film of dust.", "type": "key" },
      { "id": "c4", "label": "Clean the sensor, replace the worn pick rollers and ask the custodian to replace the damaged notes", "result": "After the work and with good notes, the module picks single notes cleanly.", "type": "key" },
      { "id": "c5", "label": "Check the cassette setting for the denomination", "result": "The cassette is set correctly for the notes loaded.", "type": "useful" },
      { "id": "c6", "label": "Replace the computer core", "result": "The core is working. The rejects come from the note path.", "type": "low" },
      { "id": "c7", "label": "Increase the thickness threshold in the settings so doubles are accepted", "result": "Unsafe: accepting doubles would make the ATM overpay and the bank would lose cash.", "type": "unsafe" },
      { "id": "c8", "label": "Remove cash from the cassette on your own and put it in a bag", "result": "Unsafe and a breach of cash-handling rules. Cash is only handled under dual control by authorised people.", "type": "unsafe" },
      { "id": "c9", "label": "Replace the receipt printer", "result": "The receipt printer plays no part in picking notes.", "type": "low" }
    ],
    "areas": [
      "The pick module for cassette 2",
      "The card reader",
      "The receipt printer and the cutter that tears off each receipt",
      "The host link"
    ],
    "area": 0,
    "faults": [
      "Worn pick rollers, a dusty thickness sensor and damp, damaged notes",
      "A broken card reader",
      "A failed host link",
      "A faulty receipt printer that stops the dispenser from receiving the pay command"
    ],
    "fault": 0,
    "repairs": [
      "Clean the sensor, replace worn rollers, and have the custodian replace damaged notes",
      "Increase the thickness limit",
      "Replace the computer core",
      "Take the cash out yourself"
    ],
    "repair": 0,
    "verify": [
      "Run the dispenser diagnostics and an authorised test dispense under dual control, and check the journal for rejects over the next days",
      "Dispense one note and leave",
      "Look at the rollers",
      "Check the receipt"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The rejects come from one cassette's pick module, and the other cassettes are fine. That module is the area to work on.",
      "fault": "Worn rollers, a dusty thickness sensor and damp, stuck notes together cause doubles and rejects, especially in humid weather.",
      "repair": "Clean, replace the worn parts and let the custodian replace damaged notes. Never loosen the thickness limit or handle cash alone.",
      "verify": "Run the diagnostics and an authorised test dispense under dual control, then watch the journal for rejects over the next days."
    }
  }
]);

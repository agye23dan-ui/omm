OMM.registerCases("m01", [
  {
    "id": "m01-d1",
    "title": "Toner spilled inside a customer's printer",
    "level": 1,
    "lesson": "m01-l4",
    "report": "You arrive at an office where a toner cartridge was pulled out of a laser printer and dropped. Black powder is on the carpet, on a desk and inside the printer. A member of staff offers you the office vacuum cleaner and a can of compressed air. The printer is still plugged in.",
    "checks": [
      { "id": "c1", "label": "Switch off the printer, unplug it and keep other people away from the spill", "result": "The printer is isolated and staff move back. The powder will not be spread any further by people walking through it.", "type": "key" },
      { "id": "c2", "label": "Read the safety data sheet and the warnings on the cartridge", "result": "The sheet says toner is a fine dust. Avoid breathing it, avoid raising clouds, and clean up with a vacuum designed for toner or a damp cloth.", "type": "key" },
      { "id": "c3", "label": "Put on a dust mask, gloves and safety glasses before you start", "result": "You are protected from breathing and touching the fine powder while you work.", "type": "key" },
      { "id": "c4", "label": "Check whether the toner has reached the fuser or the mains parts inside", "result": "Powder is on the drum area and the paper path. None has reached the power supply or the heater area.", "type": "useful" },
      { "id": "c5", "label": "Check that a cold-water rinse would not be needed for skin or clothing contact", "result": "No one has contact. If toner touches skin or clothing, wash it off with cold water, because warm water can fix it.", "type": "useful" },
      { "id": "c6", "label": "Replace the printer's fuser straight away", "result": "The fuser is not affected. Replacing it wastes money and does not deal with the spill.", "type": "low" },
      { "id": "c7", "label": "Ask the owner whether they want a new printer", "result": "Premature. The machine can be cleaned and checked. Nothing suggests it is damaged.", "type": "low" },
      { "id": "c8", "label": "Blow the toner out of the machine with compressed air and sweep the carpet dry", "result": "Stop. This raises a cloud of fine dust that you and the staff would breathe, and it spreads the toner further.", "type": "unsafe" },
      { "id": "c9", "label": "Use the ordinary office vacuum cleaner on the spill", "result": "Unsafe: toner passes through ordinary filters, enters the air and can build up to a fire or dust risk in the motor.", "type": "unsafe" }
    ],
    "areas": [
      "Toner dust released into the room and the machine",
      "The mains supply to the printer",
      "The printer's firmware",
      "The paper tray"
    ],
    "area": 0,
    "faults": [
      "Spilled toner powder, a fine dust that is harmful to breathe and spreads easily",
      "A leaking ink cartridge that has stained the carpet and the desk surface",
      "A failed fuser that has scattered melted toner across the paper path",
      "A blown fuse in the printer's mains supply that is leaving the machine dead"
    ],
    "fault": 0,
    "repairs": [
      "Use a toner-rated vacuum or damp cloth, wear protection, and dispose of the waste correctly",
      "Blow it out with compressed air to clear the machine quickly",
      "Sweep the powder into a pile and leave it for the cleaners to remove at night",
      "Use the office vacuum cleaner on the carpet and the desk, then wipe the machine with a dry cloth afterwards"
    ],
    "repair": 0,
    "verify": [
      "Check no powder is left on floor, desk or machine, wash your hands, and log the clean-up",
      "Print a test page and check the print quality",
      "Tell the owner it was only a small spill, so nothing else is needed and no report is required",
      "Check the machine is plugged back in and working"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The hazard is the powder in the air and on surfaces. The mains, the firmware and the tray are not involved, so the work is about containing and removing the dust safely.",
      "fault": "Toner is a fine, easily airborne powder. It is harmful to breathe and spreads wherever it is disturbed, so the spill itself is the hazard to control.",
      "repair": "Use a toner-rated vacuum or a damp cloth, wear protection and dispose of the waste properly. Compressed air and ordinary vacuum cleaners put the dust into the air or into the vacuum's motor.",
      "verify": "Check the area and machine are really clear, wash your hands, and write the incident in your report. A good test page does not show that the dust has been removed."
    }
  },
  {
    "id": "m01-d2",
    "title": "Replacement board fails after one week",
    "level": 2,
    "lesson": "m01-l3",
    "report": "A copier's main board was replaced last week and now the machine shows random errors and sometimes freezes. The old board was carried to the van in a plastic carrier bag. The new board was taken out of its bag on the carpet in a heated office in winter, and handled by its edges and its chips.",
    "checks": [
      { "id": "c1", "label": "Ask how the new board was stored, carried and handled", "result": "It was removed from its anti-static bag on a carpet and handled by the chips and edge connectors. No wrist strap was worn.", "type": "key" },
      { "id": "c2", "label": "Read the board's handling label and the manual's ESD warning", "result": "Both say to keep the board in its anti-static bag until it is fitted, and to handle it only by its edges with a wrist strap and mat.", "type": "key" },
      { "id": "c3", "label": "Check the room conditions and the floor covering", "result": "The office is warm and very dry, and the floor is synthetic carpet. This builds static charge easily on people and plastic.", "type": "key" },
      { "id": "c4", "label": "Run the machine's self-test and read the error log", "result": "The log shows random memory and communication errors that come and go, a typical sign of partly damaged chips.", "type": "key" },
      { "id": "c5", "label": "Inspect the board for visible damage such as burns or cracks", "result": "There is nothing visible. Static damage often leaves no visible mark.", "type": "useful" },
      { "id": "c6", "label": "Reload the firmware again", "result": "The errors return. Software does not repair a chip that static has weakened.", "type": "low" },
      { "id": "c7", "label": "Replace the power supply", "result": "The supply rails are steady. A new supply makes no difference.", "type": "low" },
      { "id": "c8", "label": "Touch the chips with your fingers to see which one is hot", "result": "Unsafe for the board: your fingers carry static and skin oil. Handle by the edges, with a strap, and use a proper thermometer.", "type": "unsafe" },
      { "id": "c9", "label": "Check that the old board is stored properly in its bag", "result": "The old board was carried in a plastic bag. It may be damaged and must not be used as a known good part.", "type": "useful" }
    ],
    "areas": [
      "How the electronic board was handled",
      "The mains supply",
      "The paper path",
      "The toner cartridge"
    ],
    "area": 0,
    "faults": [
      "Static damage to the new board from handling without protection",
      "A loose ribbon cable connector that is making random contact with the main board",
      "A software fault in the firmware that was written to the new board when it was fitted",
      "A faulty mains inlet filter that is letting noise into the machine's power supply"
    ],
    "fault": 0,
    "repairs": [
      "Fit a new board with a wrist strap, mat and anti-static bag, handling it by the edges",
      "Reload the firmware and keep the board that is fitted",
      "Wrap the board in an ordinary plastic bag and refit it",
      "Wipe the board's contacts with a damp cloth, let it dry in the warm office, and then refit it"
    ],
    "repair": 0,
    "verify": [
      "Run the self-test and a long job, check the log, and record how the board was handled",
      "Switch on, see that the machine starts, and leave it running while you finish the paperwork",
      "Make one copy",
      "Leave it running for a few minutes"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The faults are intermittent and appeared after the board was handled carelessly. Handling is where the damage was most likely done, not the power or the paper path.",
      "fault": "Static can weaken chips without any visible mark, which gives random errors. The dry room, the synthetic carpet and handling without a strap all raise the risk.",
      "repair": "Fit a fresh board using a strap, mat and anti-static bag, holding it by its edges. A plastic carrier bag does not protect against static, and software cannot repair a damaged chip.",
      "verify": "Run the self-test and a long job, then check the log stays clear. Record the precautions used, so that the next technician can see how the board was handled."
    }
  },
  {
    "id": "m01-d3",
    "title": "Customer feels a tingle from a copier",
    "level": 3,
    "lesson": "m01-l2",
    "report": "A receptionist says she feels a tingling in her hand when she touches the metal side panel of the office copier, especially when her other hand is on a radiator. The machine works normally. The customer asks you to just fix it quickly, as they have a deadline. You have a meter and a socket tester.",
    "checks": [
      { "id": "c1", "label": "Stop the machine being used, switch it off and unplug it before you open anything", "result": "The machine is isolated and the staff are told not to touch it. This removes the shock risk while you investigate.", "type": "key" },
      { "id": "c2", "label": "Check the wall socket with a socket tester", "result": "The socket tester shows correct wiring, so the supply and earth at the socket are good.", "type": "key" },
      { "id": "c3", "label": "With the cord unplugged, test the earth conductor for continuity from plug to machine frame", "result": "There is no continuity. The earth conductor is broken inside the cord near the machine end, so the case is not earthed.", "type": "key" },
      { "id": "c4", "label": "Look at the mains cord and the strain relief", "result": "The cord has been trapped behind the machine. The sheath is crushed near the inlet and one conductor is damaged.", "type": "key" },
      { "id": "c5", "label": "Check the circuit breaker and the residual-current protection", "result": "Both are in place and switched on. They have not tripped.", "type": "low" },
      { "id": "c6", "label": "Ask when the tingle was first noticed", "result": "It began after the machine was moved against the wall last week.", "type": "useful" },
      { "id": "c7", "label": "Replace the machine's main board", "result": "The board has nothing to do with the earth connection. The cost and time are wasted.", "type": "low" },
      { "id": "c8", "label": "Leave the machine in use and add a note asking staff to touch it with one hand", "result": "Unsafe: a missing earth can cause a fatal shock if a second fault occurs. A missing earth must be fixed before use.", "type": "unsafe" },
      { "id": "c9", "label": "Test the case for voltage with the machine plugged in, holding the probe with your bare hand", "result": "Unsafe: you could become the path for the current. Test with insulated probes and a proper meter, and only if essential.", "type": "unsafe" }
    ],
    "areas": [
      "The earth connection between the wall and the machine case",
      "The paper path",
      "The scanner",
      "The toner supply"
    ],
    "area": 0,
    "faults": [
      "A broken earth conductor in the mains cord leaves the metal case unearthed",
      "A shorted live conductor in the mains cord that is tripping the building's circuit breaker",
      "A failed switch on the control panel that is allowing the machine to run continuously",
      "A faulty residual-current breaker that is leaking current into the machine"
    ],
    "fault": 0,
    "repairs": [
      "Take the machine out of use, fit the correct cord and run a safety test",
      "Fit a plug adaptor that removes the earth pin so the tingle stops, and then leave the machine in use",
      "Tape the damaged cord and return the machine to use",
      "Tell the customer to avoid touching the case"
    ],
    "repair": 0,
    "verify": [
      "Test earth continuity and insulation, run the safety test, record the results, then return it to service",
      "Plug it in and touch the case with the back of your hand for a few minutes, to see that the tingle has gone completely",
      "Run a test copy and check the machine works",
      "Check that the cord looks tidy and tied back"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The tingle is on the metal case, the socket is wired correctly, and the earth test fails near the machine. The earth connection to the case is the area to deal with.",
      "fault": "A broken earth conductor leaves the case without its safety path, so leakage from the machine can reach whoever touches it. A shorted live conductor would trip the breaker instead.",
      "repair": "Take the machine out of use and replace the cord with the correct type. Removing the earth pin or taping the cord leaves the danger in place.",
      "verify": "Prove the earth and insulation with a safety test and record the results before the machine goes back. Touching the case to see whether the tingle has stopped is itself unsafe."
    }
  }
]);

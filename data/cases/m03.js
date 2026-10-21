OMM.registerCases("m03", [
  {
    "id": "m03-d1",
    "title": "Photocopier completely dead",
    "level": 1,
    "lesson": "m03-l6",
    "report": "An office phones to say its photocopier is dead this morning. No lights, no display, no sound. It worked normally yesterday afternoon. They say a trolley was wheeled through the area last night and the machine was nudged back against the wall.",
    "checks": [
      { "id": "c1", "label": "Plug a known-good lamp into the same wall socket", "result": "The lamp lights. The wall socket has a good supply.", "type": "key" },
      { "id": "c2", "label": "Look along the mains cord and at both ends of it", "result": "The cord is crushed against the wall and the sheath is split close to the machine end. The insulation of the inner conductors is damaged.", "type": "key" },
      { "id": "c3", "label": "Unplug the cord and test each conductor for continuity end to end", "result": "Earth and neutral read below 1 ohm. The live conductor reads open circuit when the cord is bent near the machine end.", "type": "key" },
      { "id": "c4", "label": "Ask the customer exactly what happened before it failed", "result": "The machine was working at 5 pm. A trolley was pushed past after that. No smell, bang or smoke was noticed.", "type": "useful" },
      { "id": "c5", "label": "Check that the machine's own power switch is on", "result": "The power switch is on. It was not touched.", "type": "useful" },
      { "id": "c6", "label": "Replace the main controller board to see if the machine starts", "result": "The machine still does not start. The board was never the problem and the part is now used up.", "type": "low" },
      { "id": "c7", "label": "Clean the scanner glass and the drum", "result": "The machine is clean but still dead. Cleaning has no effect on a missing supply.", "type": "low" },
      { "id": "c8", "label": "Remove the covers and probe the mains terminals with the machine plugged in", "result": "Stop. Exposed mains terminals can kill. The fault is outside the machine, so there is no reason to work live.", "type": "unsafe" },
      { "id": "c9", "label": "Check the building circuit breaker", "result": "The breaker is on and other equipment on the same circuit is working.", "type": "useful" }
    ],
    "areas": [
      "Mains supply and cord",
      "Low-voltage power supply inside",
      "Control panel and display",
      "Main controller board"
    ],
    "area": 0,
    "faults": [
      "A broken live conductor in the mains cord",
      "A short circuit between live and neutral in the cord",
      "A failed switch-mode power supply inside the machine",
      "A faulty control panel with no display"
    ],
    "fault": 0,
    "repairs": [
      "Replace the cord with one of the same type and rating, correctly fitted",
      "Join the broken conductor with insulating tape and a twist",
      "Replace the controller board",
      "Fit a higher-rated fuse at the plug"
    ],
    "repair": 0,
    "verify": [
      "Test cord continuity and earth, run a safety test, then power up and copy",
      "Switch on and check that the lights come on",
      "Leave it with the customer and see whether it fails again during the next week",
      "Swap to another wall socket and try it again"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The socket is good and the machine shows no sign of life, so the supply is being lost between the socket and the first part inside. The damaged cord is the obvious place.",
      "fault": "A live conductor that reads open when flexed is a broken wire. A short circuit would have tripped the breaker or blown a fuse instead of leaving the machine dead.",
      "repair": "A damaged cord is replaced, not repaired. Tape over a join does not restore the insulation, the strain relief or the current rating. Use a cord of the same type and rating.",
      "verify": "After a mains repair you prove the earth path and insulation with a safety test as well as proving the machine works. Switching on alone does not show that the earth connection is good."
    }
  },
  {
    "id": "m03-d2",
    "title": "Low voltage rail reads half of normal",
    "level": 2,
    "lesson": "m03-l3",
    "report": "A training unit uses a 12 V supply to feed two identical loads in series, each meant to receive 6 V. The sensor circuit stopped working. Your instructor says one load now shows only 3 V across it and the other shows 9 V. You have the schematic and a multimeter.",
    "checks": [
      { "id": "c1", "label": "Switch off, then measure the supply voltage with the circuit connected", "result": "The supply reads 12.0 V. The source is fine.", "type": "key" },
      { "id": "c2", "label": "Measure the voltage across each series load separately", "result": "Load A reads 3.0 V and load B reads 9.0 V. The total is still 12 V, so the supply is not sagging.", "type": "key" },
      { "id": "c3", "label": "Switch off and measure the resistance of each load out of circuit", "result": "Load A reads 150 ohms. Load B reads 450 ohms. The two should match at 300 ohms each.", "type": "key" },
      { "id": "c4", "label": "Look for burn marks, discolouration or a loose lead on each load", "result": "Load B has a discoloured body and a faint burnt smell. Its leads are tight.", "type": "useful" },
      { "id": "c5", "label": "Check the fuse in the supply line", "result": "The fuse is intact and conducts normally.", "type": "useful" },
      { "id": "c6", "label": "Replace the 12 V supply with a larger one", "result": "A larger supply changes nothing. The voltage was already correct.", "type": "low" },
      { "id": "c7", "label": "Rewire both loads in parallel to see if it works", "result": "This hides the fault and changes the circuit design. The loads are still wrong.", "type": "low" },
      { "id": "c8", "label": "Measure resistance of the loads while the circuit is powered", "result": "Stop. A resistance reading on a live circuit is wrong and can damage the meter. Always switch off first.", "type": "unsafe" },
      { "id": "c9", "label": "Calculate the expected current for the two loads in series", "result": "At 12 V and 600 ohms the current should be 0.02 A. Load B's heat shows it is dissipating more than expected.", "type": "useful" }
    ],
    "areas": [
      "The 12 V supply",
      "The loads in the series circuit",
      "The fuse",
      "The wiring between the supply and the loads"
    ],
    "area": 1,
    "faults": [
      "Load B has drifted to a higher resistance than its pair",
      "Load A has a short circuit",
      "The supply voltage is too low",
      "An open circuit somewhere in the series wiring between the two loads"
    ],
    "fault": 0,
    "repairs": [
      "Replace load B with a part of the correct value and power rating",
      "Fit a larger supply",
      "Add a resistor in parallel with load A to bring the voltages back into balance",
      "Replace the fuse with a higher rating"
    ],
    "repair": 0,
    "verify": [
      "Power up and measure the voltage across each load. Both should read close to 6 V",
      "Check that the supply voltage is still 12 V and that the fuse and the loads are not warm",
      "Check that the fuse is still intact",
      "Switch off and leave the circuit unplugged"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The supply and total voltage are correct, so the problem is in how the voltage is shared between the loads. The loads are the part to examine.",
      "fault": "In a series circuit the voltage divides in proportion to resistance. 3 V and 9 V correspond to 150 ohms and 450 ohms, so one load has moved away from 300 ohms.",
      "repair": "Replace the drifted load with the right value and power rating. Adding parts elsewhere hides the fault and leaves a damaged component in the circuit.",
      "verify": "Prove the repair by measuring what failed: the voltage across each load. Both should now share the supply equally at about 6 V."
    }
  },
  {
    "id": "m03-d3",
    "title": "Motor will not run, fuse keeps blowing",
    "level": 3,
    "lesson": "m03-l6",
    "report": "A copier's paper drive motor stops and the protection fuse on the drive board blows. The previous technician replaced the fuse twice. It blew again within seconds each time. The customer says a loud clunk came from the paper path before the first failure.",
    "checks": [
      { "id": "c1", "label": "Switch off, unplug and wait for stored energy to discharge before opening", "result": "The machine is isolated. Stored energy in the supply capacitors is allowed to fall before you touch anything.", "type": "key" },
      { "id": "c2", "label": "Rotate the motor and drive train by hand with the power off", "result": "The drive is very stiff and then locks. A gear is jammed by a broken piece of plastic from the paper path.", "type": "key" },
      { "id": "c3", "label": "Measure the motor winding resistance with the meter", "result": "The winding reads 8 ohms, which matches the service manual. The winding is not shorted.", "type": "key" },
      { "id": "c4", "label": "Inspect the paper path and gear train for broken parts", "result": "A broken tooth is lodged between two gears. Plastic fragments are in the base of the gear cover.", "type": "key" },
      { "id": "c5", "label": "Check the driver board output with the motor disconnected", "result": "The driver output behaves normally with no load. It does not show a fault.", "type": "useful" },
      { "id": "c6", "label": "Replace the driver board", "result": "The new board will overload in the same way once connected to the jammed drive.", "type": "low" },
      { "id": "c7", "label": "Fit a fuse of a higher rating so it stops blowing", "result": "Unsafe: the fuse is protecting the wiring and the board from the overload. A bigger fuse lets the motor and wiring overheat.", "type": "unsafe" },
      { "id": "c8", "label": "Replace the motor", "result": "The old motor was fine. A new motor in the same jammed drive will overheat just like the old one.", "type": "low" },
      { "id": "c9", "label": "Ask the customer what the machine did before it stopped", "result": "A loud clunk, then a grinding noise, then it stopped and would not restart.", "type": "useful" }
    ],
    "areas": [
      "The paper drive gear train and path",
      "The motor windings",
      "The driver board output stage",
      "The mains inlet fuse"
    ],
    "area": 0,
    "faults": [
      "A broken gear tooth jamming the drive and overloading the motor",
      "A shorted motor winding",
      "A failed driver transistor",
      "An undersized fuse on the drive board that blows whenever the motor starts"
    ],
    "fault": 0,
    "repairs": [
      "Remove the debris, replace the damaged gear, lubricate as the manual says and fit a new fuse of the rated value",
      "Replace the motor and fit a larger fuse",
      "Replace the driver board and leave the gears as they are",
      "Shorten the motor cable"
    ],
    "repair": 0,
    "verify": [
      "Turn the drive by hand, then run it and measure the motor current against the manual",
      "Run it for a minute or two and check that the fuse and the motor are not getting warm",
      "Check that the display no longer shows an error",
      "Print one page"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The winding and the driver are healthy but the drive is locked. A mechanical fault is overloading the motor and blowing the fuse. The gear train is the area to repair.",
      "fault": "A good winding and a driver that works unloaded point to excess load. The broken tooth explains both the clunk and the repeated overload.",
      "repair": "Fix the cause: remove the debris and replace the damaged gear. A fuse of the rated value stays in place, because it protects the wiring.",
      "verify": "A fuse that stays intact is not enough proof. Turn the drive by hand, then measure the running current and compare it with the manual to show the load is normal."
    }
  }
]);

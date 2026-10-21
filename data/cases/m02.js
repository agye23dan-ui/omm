OMM.registerCases("m02", [
  {
    "id": "m02-d1",
    "title": "Meter reads zero on a live socket",
    "level": 1,
    "lesson": "m02-l2",
    "report": "A trainee measures the mains socket in the workshop with a digital multimeter and reads 0.0 V. A table lamp plugged into the same socket is lit. The trainee used the meter for a current test earlier and says nothing was changed. The dial is on the AC volts position.",
    "checks": [
      { "id": "c1", "label": "Unplug the test leads from the circuit and look at which sockets the leads are in", "result": "The red lead is in the A (current) socket, not the volts socket. The black lead is in COM.", "type": "key" },
      { "id": "c2", "label": "Check the dial position and the range", "result": "The dial is on AC volts, which is right for mains. The range is automatic.", "type": "useful" },
      { "id": "c3", "label": "Check the meter's current fuse", "result": "The fuse is blown. The red lead was in the current socket across a voltage source, which gave a short circuit.", "type": "key" },
      { "id": "c4", "label": "Test the meter on a known source such as a battery, after moving the lead to the volts socket", "result": "The meter now reads the battery voltage correctly, so the meter and its leads are working.", "type": "key" },
      { "id": "c5", "label": "Check the lamp is on the same circuit and working", "result": "The lamp works. The socket has a supply, so it was the meter reading wrongly.", "type": "useful" },
      { "id": "c6", "label": "Replace the meter with a new one", "result": "The meter works once the fuse is replaced and the lead is in the right socket. A new meter is not needed.", "type": "low" },
      { "id": "c7", "label": "Report the socket as dead and call an electrician", "result": "The socket is live. The call-out would be wasted and the real fault is the meter use.", "type": "low" },
      { "id": "c8", "label": "Keep the lead in the current socket and measure the mains again with the meter set to current", "result": "Unsafe: measuring across mains on a current range is a short circuit and can cause an arc or fire. Use the volts socket.", "type": "unsafe" },
      { "id": "c9", "label": "Replace the blown fuse with a piece of wire", "result": "Unsafe: a wire does not protect the meter or you. Use the exact fuse type and rating the maker specifies.", "type": "unsafe" }
    ],
    "areas": [
      "How the meter was set up",
      "The workshop wiring",
      "The table lamp",
      "The wall socket"
    ],
    "area": 0,
    "faults": [
      "The red lead was left in the current socket and blew the fuse",
      "The socket has no live supply",
      "The meter's battery is flat",
      "The test leads have broken inside, so no current reaches the meter"
    ],
    "fault": 0,
    "repairs": [
      "Fit the right fuse, move the red lead to the volts socket and test on a known source",
      "Replace the meter and keep the same lead",
      "Call an electrician to test the socket, because the meter shows that it has no supply",
      "Use a wire in place of the fuse"
    ],
    "repair": 0,
    "verify": [
      "Test a known source, then the socket, with the lead in the volts socket",
      "Read the socket again with the same set-up and see whether the number changes this time",
      "Plug in the lamp and look at it",
      "Put the meter away"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The lamp lights, so the socket is live. The reading was wrong, so the way the meter was set up is the place to look.",
      "fault": "A red lead in the current socket puts the meter's low-resistance current path across the supply, blowing its fuse. Voltage then reads zero.",
      "repair": "Fit the exact fuse, move the red lead to the volts socket, and prove the meter on a known source. A wire in place of the fuse removes the meter's protection.",
      "verify": "Prove the meter on a known source first, then measure the socket in the right set-up. Repeating the faulty set-up would show the same zero."
    }
  },
  {
    "id": "m02-d2",
    "title": "Resistor reads far too low in the circuit",
    "level": 2,
    "lesson": "m02-l2",
    "report": "A student measures a resistor marked 470 ohms on a printed circuit board in a powered-down copier panel. The meter, set to ohms, reads 150 ohms. The student concludes the resistor has failed and starts to reach for the soldering iron. The machine is switched off and unplugged.",
    "checks": [
      { "id": "c1", "label": "Read the colour code or marking and calculate what the resistor should read", "result": "The bands give 470 ohms with a 5% tolerance, so the reading should be between about 446 and 494 ohms.", "type": "key" },
      { "id": "c2", "label": "Look at the schematic around the resistor", "result": "Other parts, including a transistor junction and another resistor, are connected in parallel with it on the board.", "type": "key" },
      { "id": "c3", "label": "Lift one end of the resistor from the board and measure it again", "result": "On its own, the resistor reads 468 ohms, which is well within tolerance. The resistor is good.", "type": "key" },
      { "id": "c4", "label": "Refit the resistor carefully and check the joint", "result": "The resistor is refitted with a clean, shiny joint and no solder bridges.", "type": "useful" },
      { "id": "c5", "label": "Check the meter reads a known 470 ohm resistor correctly", "result": "A loose 470 ohm resistor reads 469 ohms on the meter, so the meter is working.", "type": "useful" },
      { "id": "c6", "label": "Replace the resistor with a new one", "result": "The old resistor was good. Replacing it would not change the reading in the circuit.", "type": "low" },
      { "id": "c7", "label": "Replace the whole panel board", "result": "Nothing is wrong with the board. The reading was a measuring error.", "type": "low" },
      { "id": "c8", "label": "Measure the resistor again with the panel powered on", "result": "Unsafe: a resistance reading on a live circuit is wrong and can damage the meter. Always switch off.", "type": "unsafe" },
      { "id": "c9", "label": "Hold both probes in your fingers while measuring, to keep them steady", "result": "Your body resistance adds in parallel and pulls the reading lower on high-value resistors. Hold the insulated probes only.", "type": "useful" }
    ],
    "areas": [
      "How the resistance was measured in the circuit",
      "The resistor itself",
      "The meter's battery",
      "The panel's power supply"
    ],
    "area": 0,
    "faults": [
      "Parallel paths in the circuit pulled the reading below the true value",
      "The resistor has failed and drifted to a lower value because of heat over the years",
      "The meter is out of calibration and reads low",
      "A dry joint at one end of the resistor"
    ],
    "fault": 0,
    "repairs": [
      "Lift one end, find the resistor is good, and leave it in place",
      "Replace the resistor",
      "Replace the panel board",
      "Resolder both ends of the resistor and then measure it again once the joints have cooled"
    ],
    "repair": 0,
    "verify": [
      "Check the lifted-end reading is in tolerance and the joint is good, then power up the panel",
      "Read the resistor in the circuit again and check that it now matches the value from the colour code",
      "Compare it with a new resistor",
      "Look at the colour bands again"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The calculated value and the lifted-end reading show the resistor is good, so the problem lies in how it was measured on the board.",
      "fault": "Other parts connected across the resistor give the meter a second path, so the total reads lower than the true value. Lifting one end removes them.",
      "repair": "Leave the good resistor in place. Replacing parts without isolating them first wastes money and can introduce new faults.",
      "verify": "Confirm the lifted-end reading and the joint, then power up and test the panel. A reading taken in the circuit again would show the same low value."
    }
  },
  {
    "id": "m02-d3",
    "title": "Oscilloscope shows ripple ten times too large",
    "level": 3,
    "lesson": "m02-l3",
    "report": "A technician checks the 5 V rail of a printer power supply with an oscilloscope. The ripple looks like 500 millivolts peak to peak, far above the manual's limit of 100 millivolts. The technician is about to replace the supply. The probe has a switch marked 1X and 10X. The scope channel menu shows its own probe setting.",
    "checks": [
      { "id": "c1", "label": "Look at the probe's attenuation switch and the channel's probe setting on the scope", "result": "The probe switch is on 10X, but the scope channel is set to 1X. The scope reads the signal ten times too large.", "type": "key" },
      { "id": "c2", "label": "Calculate the real ripple from the readings", "result": "500 mV shown on a 10X probe with the scope set to 1X means the true ripple is 500 ÷ 10 = 50 mV, which is inside the 100 mV limit.", "type": "key" },
      { "id": "c3", "label": "Set the scope channel to 10X and check the scale again", "result": "The ripple now reads 50 mV peak to peak, matching the calculation.", "type": "key" },
      { "id": "c4", "label": "Check the probe with the scope's own calibration signal", "result": "The calibration square wave shows the right height and shape on 10X once the channel is set to 10X. The probe is compensated.", "type": "key" },
      { "id": "c5", "label": "Check the probe's ground lead and its connection to the rail", "result": "The ground clip is on the supply's ground and the tip is on the 5 V rail. The connection is good.", "type": "useful" },
      { "id": "c6", "label": "Measure the DC level of the rail with a meter", "result": "The rail reads 5.02 V, which is correct.", "type": "useful" },
      { "id": "c7", "label": "Replace the power supply", "result": "The supply is within its ripple limit once the reading is corrected. Replacing it is a waste.", "type": "low" },
      { "id": "c8", "label": "Replace the oscilloscope probe", "result": "The probe is fine. The error was in the scope's setting.", "type": "low" },
      { "id": "c9", "label": "Clip the scope's ground lead to the mains live side to get a steadier trace", "result": "Unsafe: the scope's ground is connected to mains earth. Clipping it to the live side causes a short circuit and a serious hazard.", "type": "unsafe" }
    ],
    "areas": [
      "The scope's probe setting and scale",
      "The supply's output capacitor",
      "The mains inlet",
      "The printer's controller board"
    ],
    "area": 0,
    "faults": [
      "The scope channel was set to 1X for a 10X probe, so the reading was ten times too big",
      "A dried output capacitor in the supply that is causing high ripple on the 5 V rail under load",
      "A shorted rectifier diode in the supply",
      "A broken ground lead on the probe"
    ],
    "fault": 0,
    "repairs": [
      "Set the channel to match the probe, read 50 mV true, and leave the supply in place",
      "Replace the output capacitor",
      "Replace the power supply",
      "Replace the oscilloscope probe and the scope's ground lead, then measure the rail again"
    ],
    "repair": 0,
    "verify": [
      "Check the scope on its calibration signal, measure again with matching settings, and record the value",
      "Measure the rail's DC voltage once more with a meter, and check that it still reads close to 5 V under load",
      "Leave the probe set as it is",
      "Check the supply fuse"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "A ripple reading ten times too large and a probe switch that does not match the scope setting point at how the scope was set, not at the supply.",
      "fault": "A 10X probe divides the signal by ten, so a scope still set to 1X shows a signal ten times too large. The true ripple is 50 mV, which is within the limit.",
      "repair": "Match the channel to the probe and keep the working supply. Replacing parts without checking the measurement would cost money and fix nothing.",
      "verify": "Check the scope on its calibration signal and measure again with matching settings, then record the true value. A DC voltage reading cannot show ripple."
    }
  }
]);

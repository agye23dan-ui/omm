OMM.registerCases("m06", [
  {
    "id": "m06-d1",
    "title": "Paper-out message with paper loaded",
    "level": 1,
    "lesson": "m06-l5",
    "report": "A printer says the tray is empty although it holds a full ream. Lifting the paper and putting it back makes no difference. The tray has a flag that rises into a photo-interrupter when the paper runs out. The customer says the tray was last filled with a new brand of paper, with a lot of paper dust.",
    "checks": [
      { "id": "c1", "label": "Switch off and look at the paper-out flag. Move it by hand", "result": "The flag moves freely and drops out of the slot when the tray is full.", "type": "key" },
      { "id": "c2", "label": "Inspect the photo-interrupter slot with a torch", "result": "The slot is clogged with paper dust and a small piece of paper fibre. The beam is partly blocked.", "type": "key" },
      { "id": "c3", "label": "Power on and measure the sensor output with the flag out of the slot", "result": "The output stays at the 'blocked' level even with the flag out. It should change when the flag moves.", "type": "key" },
      { "id": "c4", "label": "Check the sensor connector and wiring", "result": "The connector is tight and the wiring is undamaged.", "type": "useful" },
      { "id": "c5", "label": "Clean the sensor slot with a soft brush and dry swab, then test again", "result": "After cleaning, the output changes level correctly when the flag moves in and out of the slot.", "type": "key" },
      { "id": "c6", "label": "Replace the controller board", "result": "The board reads the sensor correctly after cleaning. The board was not the problem.", "type": "low" },
      { "id": "c7", "label": "Disable the paper sensor in the settings", "result": "This hides the fault and removes protection against printing with no paper.", "type": "low" },
      { "id": "c8", "label": "Reach in with a brush to clean the sensor while the printer is switched on", "result": "Stop. Moving parts and live circuits are close to the sensor. Switch off and unplug before you clean anything.", "type": "unsafe" },
      { "id": "c9", "label": "Ask what changed in the last few days", "result": "Only the paper brand changed. The new paper sheds a lot of dust.", "type": "useful" }
    ],
    "areas": [
      "The paper-out sensor",
      "The pick-up roller",
      "The controller board and its input connector",
      "The tray latch"
    ],
    "area": 0,
    "faults": [
      "Paper dust blocking the photo-interrupter slot",
      "A failed controller board input that always reads the tray as empty",
      "A worn pick-up roller",
      "A cracked paper tray"
    ],
    "fault": 0,
    "repairs": [
      "Clean the sensor slot and check the flag moves freely",
      "Replace the controller board",
      "Disable the paper sensor in the menu so the printer ignores the message",
      "Replace the tray"
    ],
    "repair": 0,
    "verify": [
      "Check the sensor output changes with the flag and print a few pages from the tray",
      "Print one page",
      "Wait for the dust to return",
      "Switch the printer off and on"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The flag moves freely and the sensor signal does not change, so the sensor itself is where the signal is being lost.",
      "fault": "A dusty slot partly blocks the light beam, which keeps the output at its blocked level. Cleaning changed the output, which proves the cause.",
      "repair": "Clean the slot. Replacing the board or turning off the sensor leaves the dust in place and removes a protection.",
      "verify": "Show that the sensor output follows the flag, then print from the tray. Both parts of the system have to work."
    }
  },
  {
    "id": "m06-d2",
    "title": "Solenoid stays on all the time",
    "level": 2,
    "lesson": "m06-l2",
    "report": "A copier's registration clutch solenoid is energised continuously. The paper stops against the rollers and cannot move on, even when the machine is idle. The solenoid is driven by a small NPN transistor that the controller switches on for a short time during feeding. The solenoid and the transistor are on the same board.",
    "checks": [
      { "id": "c1", "label": "Switch off and unplug. Disconnect the solenoid from the board", "result": "The solenoid is free of the circuit and can be tested safely on its own.", "type": "key" },
      { "id": "c2", "label": "Measure the solenoid coil resistance", "result": "The coil reads close to the value in the service manual. It is not shorted or open.", "type": "useful" },
      { "id": "c3", "label": "Solenoid disconnected, power on: measure the transistor output voltage with the controller idle", "result": "The output is pulled to near 0 V all the time. The transistor is conducting even with no drive signal.", "type": "key" },
      { "id": "c4", "label": "Switch off. Test the transistor out of circuit using the meter diode test", "result": "The collector and emitter read about 0.1 V in both directions. The transistor is shorted.", "type": "key" },
      { "id": "c5", "label": "Measure the base drive signal from the controller with the transistor removed", "result": "The base signal sits at 0 V when idle and pulses correctly during a feed cycle. The controller is fine.", "type": "key" },
      { "id": "c6", "label": "Replace the solenoid", "result": "The old solenoid was healthy. A new one will be energised in just the same way.", "type": "low" },
      { "id": "c7", "label": "Replace the controller board", "result": "The controller output was correct, so the new board will not cure the fault.", "type": "low" },
      { "id": "c8", "label": "Cut the transistor out and wire the solenoid to the supply to run the machine", "result": "Unsafe: the solenoid would be on all the time, overheat and may start a fire. Never bypass a driver.", "type": "unsafe" },
      { "id": "c9", "label": "Look for burn marks on the transistor and the nearby resistors", "result": "The transistor body is discoloured and the base resistor next to it is slightly darker.", "type": "useful" }
    ],
    "areas": [
      "The solenoid driver transistor",
      "The solenoid coil",
      "The controller output",
      "The mains power supply"
    ],
    "area": 0,
    "faults": [
      "The driver transistor has failed short-circuit between collector and emitter",
      "The solenoid coil has an internal short",
      "The controller is sending a constant ON signal to the transistor even when idle",
      "The supply voltage is too high"
    ],
    "fault": 0,
    "repairs": [
      "Replace the transistor with the same type and check the base resistor",
      "Replace the solenoid only",
      "Replace the controller board",
      "Cut the solenoid out of the circuit and run the machine without the registration clutch"
    ],
    "repair": 0,
    "verify": [
      "Reconnect the solenoid, power up and confirm it switches off when idle and on during feeding, then run a test copy",
      "Check that the machine switches on",
      "Check the transistor with a finger for heat",
      "Print one page"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The coil and the controller signal test good, but the output stays low when idle. That puts the driver transistor between them in doubt.",
      "fault": "Near zero volts at the output with no drive signal, and a collector-to-emitter reading near zero both ways, is a shorted transistor.",
      "repair": "Replace the transistor with the same type and check the base resistor next to it, since a shorted part may have stressed its neighbour.",
      "verify": "Prove both states: off when idle, on during feeding. A copy made while the clutch stays on proves nothing about the idle state."
    }
  },
  {
    "id": "m06-d3",
    "title": "Heater overheats and the thermal fuse opens",
    "level": 3,
    "lesson": "m06-l6",
    "report": "A copier's fuser heats continuously. The temperature display reads cold, then the thermal fuse opens and the machine goes dead. The control board reads the fuser temperature through an NTC thermistor wired to ground, with a pull-up resistor to 5 V. A previous technician only replaced the thermal fuse. It opened again.",
    "checks": [
      { "id": "c1", "label": "Switch off, unplug and let the fuser cool fully before touching it", "result": "The fuser is cool and the machine is isolated. You can work safely.", "type": "key" },
      { "id": "c2", "label": "Measure the thermistor resistance out of circuit at room temperature", "result": "The meter shows open circuit. A working thermistor should read a finite value of a few kilohms at room temperature.", "type": "key" },
      { "id": "c3", "label": "With the thermistor connector removed, power the board and measure the sense input voltage", "result": "The input reads about 5 V. With the thermistor open the pull-up resistor holds the input high, which looks like extremely cold.", "type": "key" },
      { "id": "c4", "label": "Inspect the thermistor tip and its mounting against the heat roller", "result": "The tip is cracked and has been pushed out of its holder. The lead is also burnt where it meets the tip.", "type": "key" },
      { "id": "c5", "label": "Measure the pull-up resistor out of circuit", "result": "The pull-up reads within tolerance of its marked value. It is fine.", "type": "useful" },
      { "id": "c6", "label": "Replace the heater lamp", "result": "The lamp was heating correctly. It was simply never told to stop.", "type": "low" },
      { "id": "c7", "label": "Fit another thermal fuse and run the machine to see what happens", "result": "The new fuse will open again as the heater has no temperature feedback. This risks the fuser and a fire.", "type": "unsafe" },
      { "id": "c8", "label": "Replace the main controller board", "result": "The board reads the open input correctly. It was not at fault.", "type": "low" },
      { "id": "c9", "label": "Check the thermal fuse continuity", "result": "The thermal fuse is open, as expected after the overheat. It will have to be replaced after the root cause is fixed.", "type": "useful" }
    ],
    "areas": [
      "The fuser temperature sensing circuit",
      "The heater lamp",
      "The mains supply and the fuser lamp wiring",
      "The paper path"
    ],
    "area": 0,
    "faults": [
      "The thermistor is open circuit, so the control reads cold and keeps the heater on",
      "The pull-up resistor has gone open",
      "The heater lamp is shorted",
      "The control board has a failed relay that is stuck closed and keeps the heater lamp on"
    ],
    "fault": 0,
    "repairs": [
      "Replace the thermistor and its holder, then fit a thermal fuse of the correct rating",
      "Replace only the thermal fuse and run the machine to see whether it survives the next warm-up",
      "Replace the pull-up resistor",
      "Replace the control board"
    ],
    "repair": 0,
    "verify": [
      "Power up, watch the temperature rise and settle, and compare the display with a contact thermometer",
      "Check that the machine switches on and that the display shows a temperature of some kind at start-up",
      "Check the thermal fuse again",
      "Make a copy"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The heater heats without limit and the temperature reads cold, so the sensing circuit is the area that tells the control when to stop.",
      "fault": "An NTC thermistor wired to ground with a pull-up reads a high voltage when it is cold. When it is open the voltage is stuck near 5 V, so the control thinks the fuser is cold and never stops heating.",
      "repair": "Replace the open thermistor and fit the thermal fuse of the correct rating afterwards. Replacing the fuse alone just repeats the overheat.",
      "verify": "Compare the displayed temperature with an independent thermometer and watch it settle. A copy alone does not show the control loop works."
    }
  }
]);

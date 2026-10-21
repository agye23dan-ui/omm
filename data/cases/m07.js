OMM.registerCases("m07", [
  {
    "id": "m07-d1",
    "title": "Dead printer and a blown supply fuse",
    "level": 1,
    "lesson": "m07-l4",
    "report": "A laser printer is completely dead. The mains socket and cord are good. Inside, the power supply board has a glass fuse in its mains input and the fuse is blown. Nobody has touched the machine. The customer says there was a loud pop and a brief smell when it went off during a storm.",
    "checks": [
      { "id": "c1", "label": "Unplug, wait for the capacitors to discharge, then remove the supply board", "result": "The machine is isolated and the board is out. The large primary capacitor has been allowed to discharge.", "type": "key" },
      { "id": "c2", "label": "Look over the board for burn marks, bulges or cracks, especially around the input", "result": "The input varistor is cracked and discoloured. It sits just after the fuse across live and neutral.", "type": "key" },
      { "id": "c3", "label": "With the meter on resistance, test the bridge rectifier diodes out of circuit", "result": "Two of the diodes read very low in both directions. The bridge is shorted.", "type": "key" },
      { "id": "c4", "label": "Measure the main switching transistor between its terminals", "result": "The switching transistor also reads a short between its main terminals.", "type": "key" },
      { "id": "c5", "label": "Check the blown fuse's marked rating", "result": "The fuse is marked as the correct rating for this supply.", "type": "useful" },
      { "id": "c6", "label": "Replace only the fuse and switch on", "result": "The new fuse blows at once. The shorted parts are still in the circuit.", "type": "unsafe" },
      { "id": "c7", "label": "Fit a fuse with a higher rating to stop it blowing", "result": "Unsafe: the fuse protects the wiring and the board. A larger fuse allows a fire.", "type": "unsafe" },
      { "id": "c8", "label": "Replace the main controller board", "result": "The controller board has no power at all and is not the problem.", "type": "low" },
      { "id": "c9", "label": "Replace the toner cartridge", "result": "The toner cartridge has nothing to do with a dead supply.", "type": "low" }
    ],
    "areas": [
      "The mains input stage of the power supply",
      "The controller board and its connectors to the power supply",
      "The fuser",
      "The toner cartridge"
    ],
    "area": 0,
    "faults": [
      "A surge shorted the varistor, rectifier and switching transistor, blowing the fuse",
      "A dried output capacitor on the 5 V rail that has slowly lost its capacity over the years",
      "A broken mains cord",
      "A failed control panel"
    ],
    "fault": 0,
    "repairs": [
      "Replace the damaged parts with the same types and ratings, then fit a fuse of the rated value",
      "Fit a larger fuse and test",
      "Replace only the fuse",
      "Replace the controller board and the display panel, then switch on to see whether it starts up"
    ],
    "repair": 0,
    "verify": [
      "Check the primary for shorts, then power up through an isolation transformer and a current limiter, and measure the output rails",
      "Plug straight into the wall and see what happens",
      "Replace the cover and print",
      "Check the fuse by eye"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "A blown fuse in the mains input and a cracked input varistor place the damage at the mains input stage, before any of the loads.",
      "fault": "A surge can destroy the varistor and short the rectifier and switching transistor. The fuse blows to protect the wiring. The tests show a short in each of those parts.",
      "repair": "Find and replace every failed part with the same type and rating before fitting a fuse of the rated value. Replacing only the fuse repeats the failure.",
      "verify": "Check for remaining shorts first, then power up through an isolation transformer and current limiter. A first power-up straight from the wall could blow the new parts or start a fire."
    }
  },
  {
    "id": "m07-d2",
    "title": "Random resets on a copier",
    "level": 2,
    "lesson": "m07-l3",
    "report": "A copier resets itself several times a day, mostly when the fuser warms up or the scanner moves. The panel shows a start-up screen and loses the job. The machine is eight years old and runs in a warm room. The service manual gives a maximum ripple on the 5 V rail of 100 mV peak to peak.",
    "checks": [
      { "id": "c1", "label": "Measure the 5 V rail with a meter on DC volts while the machine is idle", "result": "The rail reads 5.02 V. The average voltage looks fine.", "type": "useful" },
      { "id": "c2", "label": "Look at the 5 V rail with an oscilloscope while the fuser heats up", "result": "There is 600 mV peak-to-peak ripple at about 100 kHz with dips during fuser switching. The limit is 100 mV.", "type": "key" },
      { "id": "c3", "label": "Inspect the electrolytic capacitors on the output side of the supply", "result": "The 5 V output capacitor has a slightly bulged top. Its neighbour looks normal.", "type": "key" },
      { "id": "c4", "label": "Measure the output capacitor with an ESR meter", "result": "The ESR is many times higher than a new part of the same type. The capacitor has dried out.", "type": "key" },
      { "id": "c5", "label": "Check the room temperature around the supply", "result": "The supply sits near a vent and runs warm. Heat will have shortened the life of the capacitor.", "type": "useful" },
      { "id": "c6", "label": "Replace the controller board", "result": "The controller board was resetting because of the rail dips. A new board resets in just the same way.", "type": "low" },
      { "id": "c7", "label": "Update the firmware", "result": "The update has no effect on rail ripple.", "type": "low" },
      { "id": "c8", "label": "Probe the primary side of the supply while it is plugged in using a grounded oscilloscope probe", "result": "Stop. This can create a short to earth through the oscilloscope and cause a dangerous fault. Primary side measurements need an isolation transformer.", "type": "unsafe" },
      { "id": "c9", "label": "Check the supply fuse", "result": "The fuse is intact and the machine does power up.", "type": "useful" }
    ],
    "areas": [
      "The output filtering of the 5 V rail",
      "The controller firmware and its stored settings",
      "The mains inlet",
      "The scanner motor"
    ],
    "area": 0,
    "faults": [
      "A dried electrolytic output capacitor causing high ripple on the 5 V rail",
      "A shorted rectifier diode on the primary side that is overloading the supply",
      "A corrupt firmware file",
      "A faulty scanner lamp"
    ],
    "fault": 0,
    "repairs": [
      "Fit a low-ESR capacitor of the same value, voltage rating and polarity, and check its neighbours",
      "Add a second capacitor of any value across the first and leave the old one in place to help until the ripple looks smaller",
      "Replace the supply fuse",
      "Fit a larger fuse"
    ],
    "repair": 0,
    "verify": [
      "Measure the 5 V ripple with the oscilloscope while the fuser warms up, then make test copies",
      "Measure the DC voltage with the meter only and check that it reads close to 5 V when idle and judge the repair by that alone",
      "Make one copy",
      "Check the capacitor's colour"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The DC level is fine but the ripple is six times the limit. The filtering on the 5 V output is where that ripple is controlled.",
      "fault": "A bulged capacitor with high ESR cannot smooth the rail. The dips during fuser switching trigger the resets.",
      "repair": "Fit a low-ESR capacitor of the same value, voltage and polarity. Adding a random capacitor across the first does not fix a failed part and may stress the supply.",
      "verify": "Measure the ripple under load with the oscilloscope. A DC meter cannot show ripple, so a voltage reading alone cannot prove the repair."
    }
  },
  {
    "id": "m07-d3",
    "title": "Supply clicks on and off (hiccup)",
    "level": 3,
    "lesson": "m07-l6",
    "report": "A multifunction product will not start. You hear a rapid ticking from the power supply, about twice a second, and the 24 V rail pulses between 0 V and a few volts. The mains fuse is intact. The machine was working yesterday until a paper jam was cleared. You have an isolation transformer and a bench meter.",
    "checks": [
      { "id": "c1", "label": "Unplug and disconnect every load from the 24 V rail", "result": "The supply is now isolated from the rest of the machine. All loads are disconnected.", "type": "key" },
      { "id": "c2", "label": "Power the supply through the isolation transformer with no load connected", "result": "The ticking stops. The 24 V rail is steady at 24.1 V. The supply itself is healthy.", "type": "key" },
      { "id": "c3", "label": "Reconnect the loads one at a time, with the machine unplugged between each", "result": "With the main drive board connected, the ticking and pulsing return. The other loads are fine.", "type": "key" },
      { "id": "c4", "label": "With the drive board disconnected, measure the resistance from the 24 V pin to ground on the board", "result": "It reads under 1 ohm. A driver transistor on the board is shorted.", "type": "key" },
      { "id": "c5", "label": "Look at the drive board for damage near the motor driver", "result": "A motor driver chip has a small crack in its package. A stray staple from the jam is lodged under it.", "type": "useful" },
      { "id": "c6", "label": "Replace the supply board", "result": "The supply works fine with no load. A new supply will go into hiccup mode with the same shorted board.", "type": "low" },
      { "id": "c7", "label": "Jumper the supply's feedback opto-coupler to force the output up", "result": "Unsafe: this removes the supply's protection and can let the output voltage rise and damage the machine or start a fire.", "type": "unsafe" },
      { "id": "c8", "label": "Replace the mains fuse with a larger one", "result": "The fuse was not blown. A larger fuse removes protection.", "type": "low" },
      { "id": "c9", "label": "Measure the 24 V rail with the loads connected using a scope", "result": "It shows the supply starting up, sensing the short and shutting down again about twice a second. This is hiccup mode.", "type": "useful" }
    ],
    "areas": [
      "A short circuit on the load side of the 24 V rail",
      "The switching transistor in the supply",
      "The mains inlet",
      "The supply's optocoupler feedback"
    ],
    "area": 0,
    "faults": [
      "A shorted motor driver on the drive board is overloading the supply and triggering hiccup mode",
      "A failed supply switching transistor",
      "A dried primary capacitor",
      "A faulty mains inlet filter"
    ],
    "fault": 0,
    "repairs": [
      "Remove the staple, replace the damaged driver or drive board, and check nearby parts",
      "Replace the power supply",
      "Add a larger fuse",
      "Replace the controller board and the supply board together to be sure of covering every cause"
    ],
    "repair": 0,
    "verify": [
      "Reconnect all loads, power up through the isolation transformer, check the 24 V rail and feed paper",
      "Plug it in directly and listen carefully for any ticking from the power supply over the next minute or so",
      "Make a test copy only",
      "Check the supply fuse"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The supply runs steadily with no load and hiccups with the drive board connected. The overload is on the load side of the 24 V rail.",
      "fault": "A near-zero resistance from 24 V to ground on the drive board shows a short. The supply senses it, shuts down and restarts, which is the ticking.",
      "repair": "Remove the cause of the short, such as the staple, and replace the damaged driver or board. Replacing a healthy supply or enlarging the fuse does not remove the short.",
      "verify": "Power up through the isolation transformer with all loads connected and check the rail is steady while the drive runs. A listen alone can miss a returning fault."
    }
  }
]);

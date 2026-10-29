OMM.registerDevice({
  "id": "shredder",
  "groups": [
    "Feeding and jams",
    "Motor and power",
    "Cutters and bin",
    "Safety devices"
  ],
  "faults": [
    [
      "Feeding and jams",
      "The shredder jams again and again",
      "Too many sheets, thick card, staples or clips, or damp paper, so the cutters cannot grip the load.",
      "Count the sheets against the rated capacity and look for clips, staples and card in the jam.",
      "Use auto-reverse, then pull the paper out by hand with the plug out. Feed fewer sheets and remove clips and wet paper first.",
      "m14-l7",
      "Unplug the shredder before you reach into the feed slot. Never pull on paper while the motor can start."
    ],
    [
      "Feeding and jams",
      "The motor does not start when paper is fed",
      "A dirty or blocked feed sensor, or a failed sensor, so the machine never sees the paper.",
      "Clean the sensor window and see whether the machine starts with the manual switch.",
      "Clean the sensor with a soft dry brush. If the manual switch works but auto-start does not, replace the sensor or its board.",
      "m14-l7"
    ],
    [
      "Feeding and jams",
      "Paper stops half way and the motor runs on",
      "Blunt or dry cutters, or a slipping gear, so the paper is not pulled all the way through.",
      "Run a few sheets and look at the cut. Listen for slipping from the gear train.",
      "Oil the cutters as the maker says. Replace a worn gear or a blunt cutter block.",
      "m14-l7"
    ],
    [
      "Feeding and jams",
      "Auto-reverse does not clear the jam",
      "The reverse switch or its board has failed, or the jam is too heavy for the motor to back out.",
      "Press the reverse button and listen. A hum with no movement means the load is too heavy.",
      "Remove the paper by hand with the plug out. Replace the reverse switch if the motor never runs backwards.",
      "m14-l7",
      "Always unplug before you clear a heavy jam. Do not use tools in the slot with the mains connected."
    ],
    [
      "Motor and power",
      "The shredder is dead with no light",
      "A blown fuse or plug, a bad mains lead, or a failed power switch or supply board.",
      "Check the socket with a known good device, then test the lead and fuse for continuity.",
      "Replace the fuse or lead. If those are good, test the switch and supply board and replace the faulty part.",
      "m14-l7",
      "Test with the plug out. Mains is present on the switch and the motor terminals when it is connected."
    ],
    [
      "Motor and power",
      "Motor hums but does not turn",
      "The start capacitor has failed, the cutters are jammed, or a motor winding is faulty.",
      "With the plug out, try to turn the gears by hand, then test the capacitor with a meter.",
      "Replace the start capacitor if it is out of tolerance. Free any jam, and replace the motor if a winding reads open or shorted.",
      "m14-l7",
      "Discharge the capacitor through a resistor before you touch it. It can hold a charge after the plug is out."
    ],
    [
      "Motor and power",
      "The shredder stops and restarts after a rest",
      "The thermal cut-out tripped because the duty cycle was exceeded or the motor is working too hard.",
      "Ask how long it was running and feel whether the motor housing is hot.",
      "Let it cool for the time in the manual and keep within the duty cycle. If it trips on short jobs, look for dry or dull cutters.",
      "m14-l7"
    ],
    [
      "Motor and power",
      "Motor runs very slowly or sounds strained",
      "Low mains voltage, a weak start capacitor, dry cutters or worn bearings.",
      "Measure the supply voltage at the socket and listen for noise from the gear train.",
      "Use a proper socket without an extension lead, replace a weak capacitor, oil the cutters and replace worn bearings.",
      "m14-l7"
    ],
    [
      "Cutters and bin",
      "Shredded pieces are long strips or uncut sheets",
      "Blunt, chipped or misaligned cutter discs, or cutter shafts that have moved apart.",
      "Look at the cut pieces and inspect the cutter discs for chips or wear.",
      "Replace the cutter block or the shafts. Oil them as the maker says to slow the wear.",
      "m14-l7"
    ],
    [
      "Cutters and bin",
      "Paper dust and chips clog the cutter head",
      "Dust from paper and card builds up on the cutters and sensors, especially in a dry office.",
      "Look under the head and inside the feed slot with a torch.",
      "Clean with a soft brush or a vacuum with the plug out. Use the cutter oil or lubricating sheets the maker names.",
      "m14-l7"
    ],
    [
      "Cutters and bin",
      "Full-bin message when the bin is not full",
      "The bin-full sensor is blocked by dust or shreds, or the bin is not seated and the switch is not made.",
      "Empty the bin, refit it properly and watch the light or message.",
      "Clean and free the sensor or switch. Straighten a bent bin guide so the bin seats fully.",
      "m14-l7"
    ],
    [
      "Cutters and bin",
      "Cutters squeal or grind",
      "Dry cutters, or a loose cutter disc rubbing on the shaft or the housing.",
      "Run the machine empty and listen. Inspect the shafts for scoring.",
      "Oil the cutters, tighten loose parts and replace any scored shaft or disc.",
      "m14-l7"
    ],
    [
      "Safety devices",
      "The shredder will not run with the head in place",
      "The head or door safety switch is not made because the head is misaligned, or the switch has failed.",
      "Lift and refit the head, listen for the click, and test the switch with a meter.",
      "Realign the head and replace a worn actuator or a failed micro-switch. Never bridge the switch.",
      "m14-l7",
      "Never bypass the safety switch. It stops the cutters when the head is lifted."
    ],
    [
      "Safety devices",
      "The shredder starts when a hand is near the slot",
      "The sensor is too sensitive, or dust is reflecting infrared light and causing false starts.",
      "Watch whether it starts with no paper and clean the sensor window.",
      "Clean the sensor, adjust the sensitivity if the maker allows it, and replace the sensor if false starts continue.",
      "m14-l7",
      "A false start near the slot is dangerous. Take the machine out of use until it is fixed."
    ]
  ]
});

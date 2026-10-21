OMM.registerCases("m13", [
  {
    "id": "m13-d1",
    "title": "Black line on copies from the document feeder",
    "level": 1,
    "lesson": "m13-l3",
    "report": "A school copier produces a thin black line running down every copy when the originals go through the automatic document feeder. Copies made from the glass platen are clean. The line sits in the same place on every copy and appears on the copy of a blank sheet.",
    "checks": [
      { "id": "c1", "label": "Make a copy of a blank sheet from the document feeder", "result": "The copy has a thin black line running in the feed direction, in the same position every time.", "type": "key" },
      { "id": "c2", "label": "Make a copy of the same blank sheet from the platen glass", "result": "The platen copy is clean. The fault only affects the feeder path.", "type": "key" },
      { "id": "c3", "label": "Switch off, then look at the narrow glass strip the feeder scans through", "result": "A thin streak of dried correction fluid is across the narrow glass strip. This is the line.", "type": "key" },
      { "id": "c4", "label": "Clean the glass strip with the approved cleaner and a lint-free cloth, then copy a blank sheet again", "result": "The line is gone from the feeder copy. The glass strip is clean.", "type": "key" },
      { "id": "c5", "label": "Check the drum for marks", "result": "The drum is clean and shows no lines. The line is not made by the drum.", "type": "useful" },
      { "id": "c6", "label": "Replace the drum unit", "result": "A new drum does not remove a mark that only appears from the feeder path.", "type": "low" },
      { "id": "c7", "label": "Replace the exposure lamp", "result": "The lamp is fine. The platen copies prove it works.", "type": "low" },
      { "id": "c8", "label": "Clean the glass strip with the power on and the scanner moving", "result": "Unsafe: the scanner moves and the lamp is bright. Switch off before you clean any glass.", "type": "unsafe" },
      { "id": "c9", "label": "Check that the feeder rollers are clean", "result": "The feeder rollers are clean and feed correctly.", "type": "useful" }
    ],
    "areas": [
      "The scanning glass in the document feeder path",
      "The drum",
      "The fuser",
      "The developer unit and the toner supply path leading to it"
    ],
    "area": 0,
    "faults": [
      "Dirt on the narrow glass strip used for feeder scanning",
      "A scratched drum",
      "A worn cleaning blade",
      "A damaged fuser roller that leaves a dark line along the length of every page"
    ],
    "fault": 0,
    "repairs": [
      "Clean the glass strip with the approved cleaner",
      "Replace the drum",
      "Replace the cleaning blade in the drum unit and clean the drum",
      "Replace the fuser"
    ],
    "repair": 0,
    "verify": [
      "Copy a blank sheet and a text page through the feeder and from the glass, and check both",
      "Copy one page",
      "Check the glass by eye",
      "Switch the copier off and on, then make one copy from the glass to see whether the line has gone"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The line appears only from the feeder, not from the platen, so the part used only in the feeder path is the area to check.",
      "fault": "A fixed line in the same place on a blank copy follows a mark on the scanned glass strip. Cleaning removed it, so dirt was the cause.",
      "repair": "Clean the strip. A new drum, lamp or fuser would not touch a mark on the scanner glass.",
      "verify": "Test both paths with a blank sheet and a text page. Checking only one path could miss the other."
    }
  },
  {
    "id": "m13-d2",
    "title": "Repeating spot down every copy",
    "level": 2,
    "lesson": "m13-l6",
    "report": "A monochrome copier has a small black spot that repeats down every copy at regular intervals. You measure the distance between spots on a copy as 94 mm. The service manual lists these rotating parts: charge roller 14 mm diameter, drum 30 mm diameter, developer roller 18 mm diameter and fuser heat roller 25 mm diameter.",
    "checks": [
      { "id": "c1", "label": "Make a copy of a blank sheet and look at the spots", "result": "A small black spot appears at the same distance along the page, repeating every 94 mm in the feed direction.", "type": "key" },
      { "id": "c2", "label": "Measure the spacing between spots with a steel rule on several copies", "result": "The spacing measures 94 mm on every copy. It does not change with paper type.", "type": "key" },
      { "id": "c3", "label": "Calculate the circumference of each roller from the listed diameters (circumference = π × diameter)", "result": "Charge roller: about 44 mm. Drum: about 94 mm. Developer roller: about 57 mm. Fuser heat roller: about 79 mm. Only the drum matches.", "type": "key" },
      { "id": "c4", "label": "Switch off, remove the drum unit and inspect the surface in good light", "result": "A small scratch and a toner-filled pit sit on the drum surface at one point on its circumference.", "type": "key" },
      { "id": "c5", "label": "Check the paper path for foreign matter", "result": "The paper path is clean.", "type": "useful" },
      { "id": "c6", "label": "Replace the fuser heat roller", "result": "The fuser roller circumference is 79 mm, which does not match the spacing. The part is not at fault.", "type": "low" },
      { "id": "c7", "label": "Replace the charge roller", "result": "The charge roller circumference is 44 mm, which does not match the spacing.", "type": "low" },
      { "id": "c8", "label": "Touch the drum surface with your fingers or a sharp tool to feel the scratch", "result": "Unsafe for the part: skin oils and tools damage the photosensitive layer. Handle the drum by its ends and keep it out of light.", "type": "unsafe" },
      { "id": "c9", "label": "Run a halftone test copy to compare the spot with the background", "result": "The spot stays in the same place on a halftone copy.", "type": "useful" }
    ],
    "areas": [
      "The drum surface",
      "The developer roller and the doctor blade beside it",
      "The fuser",
      "The charge roller"
    ],
    "area": 0,
    "faults": [
      "A scratch and pit on the drum surface repeating once per drum turn",
      "A chipped fuser roller",
      "A dirty charge roller",
      "A stained developer roller"
    ],
    "fault": 0,
    "repairs": [
      "Replace the drum unit, handling it by the ends and shielded from light",
      "Replace the fuser roller and clean the heat roller and the pressure roller",
      "Clean the charge roller",
      "Replace the developer"
    ],
    "repair": 0,
    "verify": [
      "Make blank and halftone copies, check for no repeating marks, then reset the drum counter",
      "Make one copy",
      "Look at the drum counter and confirm that it shows the number of copies expected and then close the job",
      "Switch off and on"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "A defect that repeats every 94 mm matches the circumference of the drum, which is π × 30 mm, about 94 mm. No other roller matches.",
      "fault": "The scratch and pit on the drum sit at one point on its surface, so they print once per turn. That explains the regular spacing.",
      "repair": "Replace the drum, handling it by the ends and keeping it out of light. Replacing rollers that do not match the spacing would waste time and parts.",
      "verify": "Check blank and halftone copies for any repeating mark and reset the drum counter as the manual says. One good copy could miss a faint mark."
    }
  },
  {
    "id": "m13-d3",
    "title": "Copies slowly fading with plenty of toner",
    "level": 3,
    "lesson": "m13-l4",
    "report": "A two-component developer copier produces copies that get paler over several days, with no background and no toner-empty message. The toner bottle is nearly full. A test chart shows the dark areas now at about half their normal density. The service mode shows a toner concentration reading.",
    "checks": [
      { "id": "c1", "label": "Print the density test chart and note the solid and halftone areas", "result": "Solids are pale and halftones nearly vanish. The whole image is weak, with no background and no streaks.", "type": "key" },
      { "id": "c2", "label": "Read the toner concentration in the service mode", "result": "The reading is well below the normal range. The developer holds too little toner.", "type": "key" },
      { "id": "c3", "label": "Check the toner bottle and the supply path from bottle to developer", "result": "The bottle is nearly full, but the hopper is empty. Toner is not reaching the developer unit.", "type": "key" },
      { "id": "c4", "label": "Listen to and watch the toner supply drive in a test mode", "result": "The supply motor runs but its coupling slips. A drive gear in the toner supply has stripped its teeth.", "type": "key" },
      { "id": "c5", "label": "Check the exposure lamp and optics for dirt", "result": "The optics are clean and the lamp is fine. The scan is not the cause.", "type": "useful" },
      { "id": "c6", "label": "Check the transfer settings in the service menu", "result": "The transfer settings are at their factory values.", "type": "useful" },
      { "id": "c7", "label": "Replace the developer and the drum straight away", "result": "New developer will run low again because toner is still not being supplied.", "type": "low" },
      { "id": "c8", "label": "Increase the density setting to the maximum", "result": "The copies look a little darker for a few days, then fade again. The cause is untouched.", "type": "low" },
      { "id": "c9", "label": "Reach into the machine while the toner supply drive is running to feel the gear", "result": "Unsafe: gears can trap your fingers. Switch off and unplug first.", "type": "unsafe" }
    ],
    "areas": [
      "The toner supply drive",
      "The exposure lamp and the optics that carry its light to the drum",
      "The transfer unit",
      "The fuser"
    ],
    "area": 0,
    "faults": [
      "A stripped gear in the toner supply drive, so toner does not reach the developer",
      "A failed exposure lamp that is lighting the original too weakly to give a dark enough copy",
      "A worn transfer roller",
      "A weak fuser lamp"
    ],
    "fault": 0,
    "repairs": [
      "Replace the stripped gear, run the toner supply sequence and let the concentration recover",
      "Raise the density setting",
      "Replace the drum and developer together, and then run the machine through a set of test copies",
      "Replace the exposure lamp"
    ],
    "repair": 0,
    "verify": [
      "Watch the concentration return to the normal range, then print the density chart and compare it",
      "Make one copy",
      "Check the bottle level and confirm that the machine now shows a normal amount of toner left and then leave the machine as it is",
      "Reset the counters"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The whole image is weak and the concentration is low while the bottle is full. Toner is not reaching the developer, so the supply drive is the area to examine.",
      "fault": "The hopper is empty, the motor runs and the coupling slips. A stripped gear explains why the toner stays in the bottle.",
      "repair": "Replace the gear and run the supply sequence so the concentration can recover. Raising the density setting only covers up the starving developer.",
      "verify": "Watch the concentration reading return to normal and compare the test chart with the reference. A single darker copy does not prove the toner supply works."
    }
  }
]);

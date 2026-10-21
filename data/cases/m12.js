OMM.registerCases("m12", [
  {
    "id": "m12-d1",
    "title": "Blank pages from a new toner cartridge",
    "level": 1,
    "lesson": "m12-l5",
    "report": "A school secretary fitted a brand new toner cartridge in a laser printer this morning. Since then every page comes out completely blank, although the printer sounds normal and shows no errors. The old cartridge was removed in a hurry and the new one was unpacked quickly.",
    "checks": [
      { "id": "c1", "label": "Print the printer's own self-test page", "result": "The self-test page is also blank. The fault is in the print engine, not in the computer or the driver.", "type": "key" },
      { "id": "c2", "label": "Switch off, unplug and take out the new cartridge. Inspect it", "result": "A plastic sealing strip is still across the cartridge opening. It was not pulled out when the cartridge was unpacked.", "type": "key" },
      { "id": "c3", "label": "Check the cartridge packing instructions for the seal", "result": "The instructions say to remove the transport seal and tape before fitting.", "type": "key" },
      { "id": "c4", "label": "Pull the seal out and refit the cartridge, then print the self-test page", "result": "The self-test page prints correctly with dark, even text.", "type": "key" },
      { "id": "c5", "label": "Check that the cartridge is the right model for the printer", "result": "The model number matches the printer.", "type": "useful" },
      { "id": "c6", "label": "Replace the laser scanner assembly", "result": "The scanner was working. This is an expensive part you do not need.", "type": "low" },
      { "id": "c7", "label": "Reinstall the driver on the computer", "result": "The self-test is also blank, so the driver is not the problem.", "type": "low" },
      { "id": "c8", "label": "Open the fuser and run the printer to see the pages while it is hot", "result": "Unsafe: the fuser is hot enough to burn and the machine has moving parts. Switch off before you open it.", "type": "unsafe" },
      { "id": "c9", "label": "Look at the cartridge contacts for damage", "result": "The contacts are clean and undamaged.", "type": "useful" }
    ],
    "areas": [
      "The toner cartridge installation",
      "The laser scanner",
      "The fuser",
      "The computer driver"
    ],
    "area": 0,
    "faults": [
      "The transport seal was left on the new cartridge, blocking toner flow",
      "A failed laser scanner that no longer writes the image onto the drum and so leaves the page blank",
      "A dead fuser lamp",
      "A wrong paper type"
    ],
    "fault": 0,
    "repairs": [
      "Remove the seal and refit the cartridge correctly",
      "Replace the laser scanner assembly, because a blank page can only come from the scanner",
      "Replace the fuser",
      "Reinstall the driver"
    ],
    "repair": 0,
    "verify": [
      "Print the self-test page and a normal document, then check density and the absence of marks",
      "Print one page",
      "Check the toner level display and confirm that it now shows a full cartridge in the printer",
      "Look at the cartridge"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "A blank self-test page rules out the computer. The change that day was the cartridge, so its installation is the first place to look.",
      "fault": "A transport seal left in place stops toner leaving the cartridge, so the drum carries no image and the page stays blank.",
      "repair": "Remove the seal and refit the cartridge. Replacing the scanner or fuser would waste money and fix nothing.",
      "verify": "Print the self-test and a real document, and check density and marks. One printed page could still hide a poorly seated cartridge."
    }
  },
  {
    "id": "m12-d2",
    "title": "Inkjet prints with coloured bands and gaps",
    "level": 2,
    "lesson": "m12-l3",
    "report": "An inkjet printer used in a small office prints pictures with horizontal bands and missing lines, and the magenta looks weak. It has sat unused for three weeks during a holiday. The ink levels shown on the screen are all above half.",
    "checks": [
      { "id": "c1", "label": "Print the nozzle check pattern", "result": "The magenta block has several broken lines. The other colours print complete lines.", "type": "key" },
      { "id": "c2", "label": "Run one head-cleaning cycle and print the nozzle check again", "result": "The magenta improves a little but is not complete. Some lines are still missing.", "type": "key" },
      { "id": "c3", "label": "Check how much ink the cleaning cycles have used and the waste ink level", "result": "The waste ink pad is not yet full. There is room for a further cleaning cycle.", "type": "useful" },
      { "id": "c4", "label": "Run a second cleaning cycle, wait ten minutes, then print the check pattern", "result": "The pattern prints complete lines in all four colours. The dried ink has cleared.", "type": "key" },
      { "id": "c5", "label": "Run the print head alignment routine", "result": "After alignment the vertical lines in the test pattern line up. Print quality is sharp.", "type": "key" },
      { "id": "c6", "label": "Replace the print head straight away", "result": "The head was recoverable with cleaning. A head is an expensive part.", "type": "low" },
      { "id": "c7", "label": "Run ten cleaning cycles in a row", "result": "This wastes ink, and fills the waste pad quickly. Over-cleaning can do harm.", "type": "low" },
      { "id": "c8", "label": "Pour a cleaning solvent from a hardware store on the head with the printer switched on", "result": "Unsafe: strong solvents can damage the head and the electronics, and the printer is live. Use only cleaning fluid approved by the maker, with the power off.", "type": "unsafe" },
      { "id": "c9", "label": "Ask how long the printer was left unused", "result": "Three weeks. Dried ink in the nozzles is likely.", "type": "useful" }
    ],
    "areas": [
      "The print head nozzles",
      "The paper feed",
      "The ink cartridges and the chips that report their levels",
      "The carriage belt"
    ],
    "area": 0,
    "faults": [
      "Dried ink partly blocking the magenta nozzles after a long idle period",
      "A worn carriage belt",
      "Empty ink cartridges",
      "A damaged paper feed roller that is dragging the head across the paper unevenly"
    ],
    "fault": 0,
    "repairs": [
      "Run controlled cleaning cycles with a rest between them, then align the head",
      "Replace the head at once",
      "Run as many cleaning cycles as it takes, one after the other, until the pattern is complete",
      "Replace the carriage belt"
    ],
    "repair": 0,
    "verify": [
      "Print the nozzle check and an alignment page, then a colour photo to confirm no bands",
      "Print one page of text",
      "Check the ink levels on the screen",
      "Print the nozzle check only"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Only the magenta lines are broken, so the fault lies in that colour's nozzles. The paper feed and belt would affect every colour.",
      "fault": "Three weeks idle lets ink dry in the nozzles. Improvement after one cleaning cycle shows the blockage is partial and recoverable.",
      "repair": "Use limited cleaning cycles with a rest between them, then align the head. Over-cleaning wastes ink and fills the waste pad.",
      "verify": "Print the nozzle check, an alignment page and a colour image. Text can look fine while a weak colour still shows bands in a photograph."
    }
  },
  {
    "id": "m12-d3",
    "title": "Fuser jams and creased pages at high page count",
    "level": 3,
    "lesson": "m12-l6",
    "report": "A busy office laser printer has printed about 250,000 pages. It now gives frequent fuser-area jams, creases the paper and leaves toner that rubs off. The maintenance kit has never been fitted. The page counter and the fuser warm-up time are in the service menu.",
    "checks": [
      { "id": "c1", "label": "Read the page counter and compare it with the maintenance interval in the manual", "result": "The counter is well past the fuser and roller kit interval. The kit is long overdue.", "type": "key" },
      { "id": "c2", "label": "Switch off, let the fuser cool fully and inspect the pressure roller surface", "result": "The pressure roller is worn, shiny and has a groove across the surface. The separation claws are chipped.", "type": "key" },
      { "id": "c3", "label": "Inspect the heat roller and thermistor contact", "result": "The heat roller surface is scratched. The thermistor contact is clean.", "type": "key" },
      { "id": "c4", "label": "Measure the fuser temperature against the set value", "result": "The temperature reaches the set value, so the heater and thermistor are working.", "type": "useful" },
      { "id": "c5", "label": "Check the paper type and storage", "result": "The paper is a normal grade and stored dry.", "type": "useful" },
      { "id": "c6", "label": "Look up the maintenance kit contents and interval in the service manual", "result": "The manual lists the fuser rollers, claws and a cleaning set in one kit. The kit is due every set number of pages and the counters are reset after fitting.", "type": "key" },
      { "id": "c7", "label": "Replace the toner cartridge", "result": "A new cartridge does not help. The toner is not fixing because of the worn fuser.", "type": "low" },
      { "id": "c8", "label": "Raise the fuser temperature to the maximum to cure the rub-off", "result": "This hides the wear and risks scorching paper, shortening life and creating a fire hazard.", "type": "unsafe" },
      { "id": "c9", "label": "Replace the main drive motor", "result": "The motor is not the cause. The drive is running normally.", "type": "low" }
    ],
    "areas": [
      "The fuser rollers and separation claws",
      "The toner cartridge",
      "The paper tray",
      "The main drive motor and the gears that turn the fuser rollers"
    ],
    "area": 0,
    "faults": [
      "Worn fuser rollers and claws past their service life",
      "A faulty thermistor",
      "Damp paper",
      "A failed laser scanner that has stopped drawing the image on the drum correctly"
    ],
    "fault": 0,
    "repairs": [
      "Fit the maintenance kit, reset the counters and clean the paper path",
      "Raise the fuser temperature in the service menu until the toner stops rubbing off",
      "Replace the toner cartridge",
      "Replace the motor"
    ],
    "repair": 0,
    "verify": [
      "Print different paper types, check toner adhesion by rubbing, and confirm no jams or creases",
      "Print one test page",
      "Check the temperature display and confirm that it reaches the set value during warm-up and then close the job",
      "Review the counters"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The jams, creases and rub-off all occur in the fuser, and the counter is far past the kit interval.",
      "fault": "A grooved pressure roller, scratched heat roller and chipped claws are worn out. The temperature is right, so the heater and sensor are fine.",
      "repair": "Fit the full maintenance kit and reset the counters. Raising the temperature just masks the wear and creates a hazard.",
      "verify": "Print different paper types, rub the toner to test adhesion and watch for jams. A single clean page does not prove a worn fuser has been fixed."
    }
  }
]);

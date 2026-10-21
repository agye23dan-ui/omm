OMM.registerCases("m04", [
  {
    "id": "m04-d1",
    "title": "Tray 2 will not pick paper",
    "level": 1,
    "lesson": "m04-l3",
    "report": "A copier in a busy school office often fails to pick paper from tray 2 and shows a paper-empty message even though the tray is full. Tray 1 works. The problem began slowly over the last few weeks and the machine has made about a million copies.",
    "checks": [
      { "id": "c1", "label": "Fan a few sheets from a fresh sealed pack into the tray and try again", "result": "The same sheets fail to pick even from a fresh pack. The paper is not the problem.", "type": "key" },
      { "id": "c2", "label": "Switch off and inspect the pick-up roller surface", "result": "The rubber is shiny and hard, with a smooth glazed look. A fingernail leaves almost no mark. Black dust is on the surface.", "type": "key" },
      { "id": "c3", "label": "Compare the roller diameter with the specification in the manual", "result": "The roller measures 0.8 mm under the minimum diameter in the manual. It has worn past its limit.", "type": "key" },
      { "id": "c4", "label": "Check that the tray guides and rear stop are set to the paper size", "result": "The guides are set correctly. The paper sits squarely.", "type": "useful" },
      { "id": "c5", "label": "Listen to the pick-up solenoid as the machine tries to feed", "result": "The solenoid clicks every time and the roller turns. Drive and control are working.", "type": "useful" },
      { "id": "c6", "label": "Reset the page counters and restart the machine", "result": "Nothing changes. A counter reset does not restore a worn roller.", "type": "low" },
      { "id": "c7", "label": "Replace the controller board", "result": "The new board makes no difference, because the roller is turning correctly.", "type": "low" },
      { "id": "c8", "label": "Run the feed with the tray cover interlock defeated to see the roller turn", "result": "Stop. Defeating an interlock exposes you to moving parts and is never allowed. You do not need to see it running.", "type": "unsafe" },
      { "id": "c9", "label": "Wipe the roller with a lint-free cloth and approved cleaner, then retest", "result": "The surface looks cleaner but the roller still slips on the paper after cleaning. It is worn, not just dirty.", "type": "useful" }
    ],
    "areas": [
      "The pick-up roller and feed assembly",
      "The paper tray guides and the tray lift mechanism",
      "The main drive motor",
      "The controller board"
    ],
    "area": 0,
    "faults": [
      "A worn, glazed pick-up roller that has lost its grip",
      "A seized pick-up solenoid",
      "A broken gear in the main drive train that moves the feed roller",
      "Damp paper in the tray"
    ],
    "fault": 0,
    "repairs": [
      "Replace the pick-up roller with the correct part and clean the area",
      "Spray oil on the roller to restore grip",
      "Replace the paper tray",
      "Replace the controller board"
    ],
    "repair": 0,
    "verify": [
      "Feed at least 50 sheets from tray 2 with no misfeeds, then reset the roller counter",
      "Feed one sheet and stop",
      "Wait for the next call",
      "Switch the machine off and on again and feed one sheet from tray 2 to see whether it picks"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The solenoid clicks and the roller turns, so control and drive are fine. The rubber at the paper contact is the part that decides whether a sheet is picked.",
      "fault": "A shiny, hard roller that is below its minimum diameter has lost grip. Cleaning did not restore it, so wear rather than dust is the fault.",
      "repair": "Fit the correct roller. Oil on rubber makes the slipping worse and contaminates the paper path.",
      "verify": "One good page proves little for an intermittent fault. A run of 50 sheets shows the pick is reliable, and the roller counter is reset as the manual instructs."
    }
  },
  {
    "id": "m04-d2",
    "title": "Squeal from the fuser drive",
    "level": 2,
    "lesson": "m04-l4",
    "report": "A laser printer begins squealing as soon as a print job starts. The sound rises and falls with the speed of the rollers. Print quality is still good. The machine is two years old and runs 10 hours a day in a warm print room.",
    "checks": [
      { "id": "c1", "label": "Switch off and unplug. Let the fuser cool before opening anything", "result": "The machine is isolated and the fuser is allowed to cool to a safe temperature.", "type": "key" },
      { "id": "c2", "label": "Turn each roller shaft by hand and feel for roughness or a dry drag", "result": "The heat-roller bearing end turns roughly and drags, and there is a faint squeak when it turns. The other shafts are smooth.", "type": "key" },
      { "id": "c3", "label": "Look at the bearing bushing for wear and the grease condition", "result": "The bushing is dry and dark. There is a thin ring of dried grease and fine metal dust.", "type": "key" },
      { "id": "c4", "label": "Run the machine briefly and locate the noise with a long screwdriver as a stethoscope", "result": "The squeal is loudest at the fuser drive end, not at the feed rollers.", "type": "useful" },
      { "id": "c5", "label": "Check the belt tension in the main drive", "result": "The belt is correctly tensioned and runs quietly.", "type": "useful" },
      { "id": "c6", "label": "Replace the main drive motor", "result": "The motor was not noisy. The new motor does not change the squeal.", "type": "low" },
      { "id": "c7", "label": "Spray penetrating oil onto the rubber rollers", "result": "Unsafe for the machine: oil on rubber and toner on a hot fuser creates a fire and print-quality hazard.", "type": "unsafe" },
      { "id": "c8", "label": "Replace the paper tray", "result": "The noise comes from the fuser, not from the tray.", "type": "low" },
      { "id": "c9", "label": "Check the page count against the maintenance schedule", "result": "The unit is past its fuser maintenance interval. Wear parts are due.", "type": "useful" }
    ],
    "areas": [
      "The fuser drive bearings",
      "The paper tray",
      "The controller board and its cables",
      "The toner cartridge"
    ],
    "area": 0,
    "faults": [
      "A dry, worn bushing on the heat roller shaft",
      "A cracked pressure roller",
      "A loose drive belt",
      "A failed fuser lamp"
    ],
    "fault": 0,
    "repairs": [
      "Replace the worn bushing and apply the grease the manual specifies to the bearing surface only",
      "Spray oil into the fuser while it is hot",
      "Pack the gap with paper",
      "Replace the toner cartridge"
    ],
    "repair": 0,
    "verify": [
      "Reassemble, run 20 pages and check the noise, roller temperature and print quality",
      "Print one page",
      "Ask the user to listen for any noise over the next week and to call you back if it returns",
      "Switch the machine on and off"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Hand-turning the shafts located the roughness at the fuser end. The noise follows roller speed, which points to a bearing, not to a board or a cartridge.",
      "fault": "A dry bushing with dust and a ring of dried grease is classic wear. It explains the squeal that rises with roller speed and the roughness felt by hand.",
      "repair": "Replace the worn bushing and use only the specified grease on the bearing surface. Grease or oil on the rolling surface causes smears and is a fire hazard near the heater.",
      "verify": "A short run with the cover on proves the noise is gone under real load, and checking temperature and print quality shows nothing else was disturbed."
    }
  },
  {
    "id": "m04-d3",
    "title": "Skewed copies after a service visit",
    "level": 3,
    "lesson": "m04-l5",
    "report": "Two days after a colleague serviced a copier, every page now comes out slightly skewed. The edge of the image is tilted by about 3 mm across the page. The colleague replaced the registration roller and cleaned the paper path. No jams are logged.",
    "checks": [
      { "id": "c1", "label": "Print a test pattern with a ruled grid on a clean sheet", "result": "The grid lines are parallel to each other, so the image is straight. The paper edge is what is tilted.", "type": "key" },
      { "id": "c2", "label": "Compare the paper edge to the registration roller nip position", "result": "The sheet enters the registration nip at an angle. The left side reaches the nip about 3 mm before the right.", "type": "key" },
      { "id": "c3", "label": "Inspect the registration roller drive gear against its alignment marks", "result": "The alignment marks on the gear and its mating gear are one tooth out of line. The gear was refitted a tooth out.", "type": "key" },
      { "id": "c4", "label": "Check the tray guides and paper size setting", "result": "The guides are set correctly and the paper is squarely loaded.", "type": "useful" },
      { "id": "c5", "label": "Check both ends of the registration roller for spring tension", "result": "The springs are present on both ends and give equal pressure.", "type": "useful" },
      { "id": "c6", "label": "Replace the transfer roller", "result": "The transfer roller is fine. The skew exists before the paper reaches the transfer position.", "type": "low" },
      { "id": "c7", "label": "Adjust the image shift in the service menu until it looks straight", "result": "This moves the image but leaves the paper skewed in the path. The root cause is not fixed.", "type": "low" },
      { "id": "c8", "label": "Force the gear into its mesh with a screwdriver while the machine is powered", "result": "Stop. Forcing a part into mesh while the machine is on risks injury and damage. Switch off and refit it properly.", "type": "unsafe" },
      { "id": "c9", "label": "Read the service log for the previous visit", "result": "The log says the gear train was removed to replace the roller. There is no note about the alignment marks.", "type": "key" }
    ],
    "areas": [
      "The registration roller drive train",
      "The image processing settings",
      "The paper tray",
      "The transfer unit"
    ],
    "area": 0,
    "faults": [
      "The registration drive gear was refitted one tooth out of its alignment marks",
      "The image shift setting in the service menu has been set wrongly by the customer",
      "The tray guides are too wide",
      "The transfer roller is worn"
    ],
    "fault": 0,
    "repairs": [
      "Switch off, refit the gear with the alignment marks matched, then check the mesh",
      "Adjust the image shift in the menu until the printed page looks straight on the sheet",
      "Replace the paper tray",
      "Replace the transfer roller"
    ],
    "repair": 0,
    "verify": [
      "Print a grid pattern on 10 sheets and measure the skew against the manual's tolerance",
      "Print one sheet and look at it to see whether the image now looks straight enough to use",
      "Reset the counters",
      "Wait for the customer to call"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The image is straight but the paper edge is tilted, so the skew happens before transfer. Only the registration drive train was disturbed on the last visit.",
      "fault": "The marks are one tooth out and the sheet arrives skewed at the nip. That matches a gear refitted without matching its alignment marks.",
      "repair": "Refit the gear on its marks with the power off. Changing menu settings hides the error and does not fix the mechanical timing.",
      "verify": "Measure the skew on a number of sheets against the tolerance in the manual. One quick look can miss a small, repeating error."
    }
  }
]);

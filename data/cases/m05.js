OMM.registerCases("m05", [
  {
    "id": "m05-d1",
    "title": "Panel keys work only when tapped",
    "level": 1,
    "lesson": "m05-l4",
    "report": "The operator panel on a printer works for a few minutes, then the start key and the menu key go dead. Pressing hard on the panel cover or tapping the machine brings them back for a while. The machine has been moved twice in the past year.",
    "checks": [
      { "id": "c1", "label": "Switch off, unplug, remove the panel board and inspect the solder joints under magnification", "result": "Several joints on the ribbon-cable connector are dull and grainy. One has a clear ring-shaped crack around the pin.", "type": "key" },
      { "id": "c2", "label": "With the board out, flex it gently and watch the meter for continuity on a suspect pin", "result": "Continuity drops out when the board is flexed near the connector. It returns when released.", "type": "key" },
      { "id": "c3", "label": "Check the ribbon cable ends and the socket for damage", "result": "The cable and the socket are clean and undamaged.", "type": "useful" },
      { "id": "c4", "label": "Test the key switches with the meter on continuity", "result": "All key switches close and open correctly.", "type": "key" },
      { "id": "c5", "label": "Ask whether the fault is worse after the machine is moved", "result": "The customer says it started soon after the printer was last carried upstairs.", "type": "useful" },
      { "id": "c6", "label": "Replace the whole panel board without testing it", "result": "It would probably work but at a high cost. The board is repairable and you have not shown it is faulty.", "type": "low" },
      { "id": "c7", "label": "Run a firmware update to cure the keys", "result": "The update does not change the keys. The problem is a hardware connection.", "type": "low" },
      { "id": "c8", "label": "Touch up the joints with the board still connected and the printer switched on", "result": "Stop. Soldering on a live board can damage components and burn you. Isolate the machine first.", "type": "unsafe" },
      { "id": "c9", "label": "Clean the key contacts with isopropyl alcohol", "result": "Cleaning makes no difference. The switches were already working.", "type": "low" }
    ],
    "areas": [
      "Solder joints at the panel connector",
      "The key switches",
      "The firmware",
      "The ribbon cable"
    ],
    "area": 0,
    "faults": [
      "Cracked, dry solder joints on the connector pins",
      "Worn key switch contacts",
      "A corrupt firmware file",
      "A broken wire inside the ribbon cable between the panel and the main board"
    ],
    "fault": 0,
    "repairs": [
      "Desolder and resolder the cracked joints with fresh solder and flux, then inspect them",
      "Add more solder on top of the cracked joints without reheating the old solder first, for speed",
      "Replace the key switches",
      "Reload the firmware"
    ],
    "repair": 0,
    "verify": [
      "Inspect the joints, refit the board, press every key and flex the panel to check for dropouts",
      "Test one key",
      "Leave it on for ten minutes",
      "Reset the printer to factory settings, then check that the panel responds to at least one key press"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Continuity changes when the board is flexed near the connector and the switches test good, so the fault is in the joints between the board and the connector.",
      "fault": "A ring-shaped crack around a pin is a classic dry joint. It makes and breaks contact as the board moves, which explains the intermittent keys.",
      "repair": "Reflow the joint. Adding solder on top of a cold joint without heating it leaves the crack and gives a poor joint.",
      "verify": "Check every key and flex the panel while testing. An intermittent fault can pass a quick one-key test."
    }
  },
  {
    "id": "m05-d2",
    "title": "Cracked door and the stuck interlock",
    "level": 2,
    "lesson": "m05-l5",
    "report": "A laser printer's top cover has a broken plastic tab where it meets the interlock switch. The machine shows cover open even when the cover is shut, so it will not print. The customer asks if you can tape the cover closed or hold the switch down with a spare screw so they can finish a big job today.",
    "checks": [
      { "id": "c1", "label": "Switch off and inspect the cover and its latch tab", "result": "The tab that presses the interlock switch has snapped off. The cover closes but no longer reaches the switch.", "type": "key" },
      { "id": "c2", "label": "Test the interlock switch with a meter by pressing it by hand", "result": "The switch opens and closes correctly. The switch is good; the actuator tab is missing.", "type": "key" },
      { "id": "c3", "label": "Look up the part number for the cover and for the actuator in the parts catalogue", "result": "The cover assembly is available as a spare. The tab is not sold separately.", "type": "key" },
      { "id": "c4", "label": "Check the cover hinge pins for damage", "result": "The hinge pins are intact and the cover opens and closes smoothly.", "type": "useful" },
      { "id": "c5", "label": "Ask the customer how the tab broke", "result": "A paper jam was cleared by pulling hard on the cover. They heard a snap.", "type": "useful" },
      { "id": "c6", "label": "Replace the main controller board", "result": "The board reports cover open correctly. It is not faulty.", "type": "low" },
      { "id": "c7", "label": "Reseat the cables on the interlock connector", "result": "The cables were already firm. The reading does not change.", "type": "low" },
      { "id": "c8", "label": "Tape a spare screw to hold the interlock switch down", "result": "Unsafe: the interlock protects people from moving parts and the laser. Bypassing it is not allowed, even for one job.", "type": "unsafe" },
      { "id": "c9", "label": "Glue the broken tab back with plastic cement", "result": "A glued tab will break again and may jam against the switch. The cover has a safety function.", "type": "low" }
    ],
    "areas": [
      "The cover latch tab and interlock actuator",
      "The interlock switch and the wiring that connects it to the board",
      "The controller board",
      "The cover hinges"
    ],
    "area": 0,
    "faults": [
      "A broken actuator tab on the cover that no longer presses the interlock switch",
      "A failed interlock switch",
      "A fault in the controller firmware that makes it read the cover as open all the time",
      "A bent hinge pin"
    ],
    "fault": 0,
    "repairs": [
      "Replace the cover assembly with the correct part and test the interlock",
      "Tape or screw the switch closed so that the printer believes the cover is shut",
      "Fit a new interlock switch",
      "Glue the tab and hope it holds"
    ],
    "repair": 0,
    "verify": [
      "Open and close the cover with the machine on, confirm it stops and starts, then print a test page",
      "Close the cover and look at it",
      "Print one page with the cover shut and check that the printer carries on working without any message",
      "Switch the printer off and on"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The switch tests good and the tab that presses it is missing. The cover tab and actuator are therefore the area to repair.",
      "fault": "A snapped tab explains why the cover looks shut but the switch never sees it. The switch and board are working as designed.",
      "repair": "A repaired cover must keep its safety function. Replace the cover assembly. Never bypass an interlock to finish a job.",
      "verify": "Test the interlock both ways: opening the cover must stop the machine and closing it must allow it to run. A page printed with the cover shut does not prove that."
    }
  },
  {
    "id": "m05-d3",
    "title": "Wrinkled sheets after a fuser roller change",
    "level": 3,
    "lesson": "m05-l6",
    "report": "Yesterday a technician replaced the pressure roller in a monochrome laser printer. Since then, paper emerges with a diagonal crease on the right side and the toner smears if rubbed. Nothing else has been touched. The machine passed a test page on the day of the repair.",
    "checks": [
      { "id": "c1", "label": "Switch off, let the fuser cool and open it. Inspect the pressure springs on each end", "result": "The left spring is seated correctly. The right spring sits on the wrong spigot, so the pressure there is lower than the left.", "type": "key" },
      { "id": "c2", "label": "Compare the nip width on each end of the rollers against the manual", "result": "The nip is 1.5 mm narrower on the right end than the left. The manual allows a difference of 0.5 mm at most.", "type": "key" },
      { "id": "c3", "label": "Check the new pressure roller's part number and diameter against the old", "result": "The roller is the right part and the correct diameter.", "type": "key" },
      { "id": "c4", "label": "Check the fuser temperature setting in the service menu", "result": "The temperature is at the standard setting for the paper type in use.", "type": "useful" },
      { "id": "c5", "label": "Print a test page on a different paper type", "result": "The diagonal crease appears on this paper type too, so it is not the paper.", "type": "useful" },
      { "id": "c6", "label": "Replace the heat roller as well", "result": "The heat roller is in good condition and the fault would remain after replacing it.", "type": "low" },
      { "id": "c7", "label": "Increase the fuser temperature to cure the smearing", "result": "The smear is slightly less but the crease remains and the paper now curls. The root cause is untouched.", "type": "low" },
      { "id": "c8", "label": "Press the rollers together by hand while the fuser is hot", "result": "Stop. The fuser is hot enough to burn. Switch off and let it cool before touching anything.", "type": "unsafe" },
      { "id": "c9", "label": "Read the service report for the roller change", "result": "No pressure check or nip measurement was recorded. Only a quick test page was noted.", "type": "useful" }
    ],
    "areas": [
      "The fuser pressure springs and nip",
      "The toner cartridge",
      "The paper path guides and the exit rollers",
      "The laser scanner"
    ],
    "area": 0,
    "faults": [
      "The right pressure spring was seated wrongly, giving uneven nip pressure",
      "The paper is damp",
      "The heat roller lamp is failing and is not heating the roller evenly across the whole width of the roller",
      "The toner is the wrong grade"
    ],
    "fault": 0,
    "repairs": [
      "Reseat the spring correctly, check the nip width on both ends and adjust to the manual",
      "Raise the fuser temperature in the service menu until the creases and smears disappear completely",
      "Replace the heat roller",
      "Change the paper brand"
    ],
    "repair": 0,
    "verify": [
      "Measure the nip, print several paper types and check toner adhesion and the absence of creases",
      "Print one page",
      "Check the temperature display",
      "Ask the customer to review the print quality themselves over the next week and report any problems"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The crease sits on one side only and began after the roller change, so the fuser pressure system is the area to examine.",
      "fault": "A spring on the wrong spigot and a nip 1.5 mm different from the other end give uneven pressure. That produces the crease on one side and poor fixing.",
      "repair": "Fix the cause by reseating the spring and checking the nip against the manual. Raising the temperature hides the fault and wastes energy.",
      "verify": "A test page on one paper type is not enough. Measure the nip and print different papers to show the fix works across normal use."
    }
  }
]);

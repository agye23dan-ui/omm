OMM.registerCases("m14", [
  {
    "id": "m14-d1",
    "title": "Finisher will not staple",
    "level": 1,
    "lesson": "m14-l4",
    "report": "A multifunction product with a finisher prints and sorts booklets correctly but the stapler does not fire. The panel shows a staple error. The last person to change the staple cartridge tore the cartridge cover while fitting it. Nothing else has changed.",
    "checks": [
      { "id": "c1", "label": "Read the panel message and the staple error code", "result": "The message says staple jam or no staples in the staple unit.", "type": "key" },
      { "id": "c2", "label": "Switch off and open the staple unit. Remove the cartridge and inspect it", "result": "The cartridge has a bent staple wedged at the exit and the loose cover is torn so the strip of staples is not feeding.", "type": "key" },
      { "id": "c3", "label": "Clear the jammed staple with the tool recommended in the manual", "result": "The bent staple comes out. The feed channel is now clear.", "type": "key" },
      { "id": "c4", "label": "Fit a new, undamaged staple cartridge correctly", "result": "The cartridge seats with a click. The panel clears the staple message.", "type": "key" },
      { "id": "c5", "label": "Check the staple sensor and its wiring", "result": "The sensor reads correctly when the cartridge is in and out. The wiring is intact.", "type": "useful" },
      { "id": "c6", "label": "Replace the whole finisher", "result": "A finisher is a major cost. The fault is only a jammed staple cartridge.", "type": "low" },
      { "id": "c7", "label": "Replace the controller board", "result": "The controller reported the error correctly. It is not faulty.", "type": "low" },
      { "id": "c8", "label": "Put your finger into the staple unit and press the head to fire it", "result": "Unsafe: the staple head can drive a staple through your finger. Use the test mode with covers closed.", "type": "unsafe" },
      { "id": "c9", "label": "Check the number of sheets in the job against the staple capacity", "result": "The job is within the stapler's capacity.", "type": "useful" }
    ],
    "areas": [
      "The staple unit and cartridge",
      "The paper tray",
      "The scanner",
      "The network connection and the settings that send jobs to the finisher"
    ],
    "area": 0,
    "faults": [
      "A jammed staple in a damaged cartridge",
      "A failed controller board that has stopped sending the staple command to the finisher",
      "A faulty staple sensor",
      "A stack that is too large"
    ],
    "fault": 0,
    "repairs": [
      "Clear the jam, fit a good cartridge and test staple on a small job",
      "Replace the finisher",
      "Replace the controller board",
      "Disable stapling in the settings so that jobs print without staples until the next visit"
    ],
    "repair": 0,
    "verify": [
      "Run a stapled test job, check the staples are straight and the booklet aligned, then clear the message",
      "Fit the cartridge and leave, telling the customer to report any problem with stapling later and then close the visit",
      "Print one sheet",
      "Check the panel only"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The error is a staple message and the rest of the finisher works, so the staple unit and its cartridge are the area to check.",
      "fault": "A bent staple at the exit with a torn cover stops the strip feeding. Clearing it and fitting a good cartridge solved it.",
      "repair": "Clear the jam and fit a good cartridge. Replacing the finisher or switching stapling off would not repair anything.",
      "verify": "Run a stapled test job and check the staples and alignment. A cleared panel message does not show that the stapler fires."
    }
  },
  {
    "id": "m14-d2",
    "title": "Scan to folder suddenly fails",
    "level": 2,
    "lesson": "m14-l3",
    "report": "A multifunction product has sent scans to a shared folder on the office server for months. Today every scan to the folder fails with an error. Scan to email still works. The IT person changed some passwords on the server over the weekend and wants to know what you find.",
    "checks": [
      { "id": "c1", "label": "Read the error message on the panel and in the device's job log", "result": "The log says authentication failed when connecting to the server share.", "type": "key" },
      { "id": "c2", "label": "Ping the server from the device's network test", "result": "The server answers. The network link is fine.", "type": "key" },
      { "id": "c3", "label": "Check the server name, share name and path in the address book entry", "result": "The server name, share and path match the server. Nothing in the entry has changed.", "type": "useful" },
      { "id": "c4", "label": "Ask the IT person which account the device uses and whether its password was changed", "result": "The scanning account's password was changed at the weekend and the device still holds the old one.", "type": "key" },
      { "id": "c5", "label": "Open the folder from a computer using the same account and the new password", "result": "The folder opens and a file can be created. The share and permissions are fine.", "type": "key" },
      { "id": "c6", "label": "Replace the device's network card", "result": "Scan to email works, so the card and network are fine.", "type": "low" },
      { "id": "c7", "label": "Reset the device to factory settings", "result": "This wipes the address book and all settings, and does not give the device the new password.", "type": "low" },
      { "id": "c8", "label": "Ask the IT person for the administrator password and store it on a sticky note on the device", "result": "Unsafe: passwords left on the device give anyone access. Use a dedicated account and store passwords securely.", "type": "unsafe" },
      { "id": "c9", "label": "Check the device's date and time", "result": "The date and time are correct.", "type": "useful" }
    ],
    "areas": [
      "The stored login details for the server share",
      "The network cable",
      "The scanner glass",
      "The device's email settings"
    ],
    "area": 0,
    "faults": [
      "The scan account password changed on the server but not on the device",
      "A broken network cable",
      "A faulty scanner",
      "An email server outage"
    ],
    "fault": 0,
    "repairs": [
      "Enter the new password in the folder login, test the connection and store it in the approved place",
      "Reset the device to factory settings and enter all of the network details again from scratch and hope the folder login works",
      "Replace the network card",
      "Write the password on the panel"
    ],
    "repair": 0,
    "verify": [
      "Send a test scan to the folder, open the file from a computer and check scan to email still works",
      "Send one scan to the folder and walk away to let the customer find out whether it arrived and then go on to the next call",
      "Check the address book",
      "Ping the server"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The network and server answer and scan to email works, but the log says authentication failed. The stored login for the share is the area to check.",
      "fault": "The password change at the weekend matches the time of the failure. The device kept using the old password.",
      "repair": "Update the login on the device and test it. A factory reset would delete the address book and would not give the device the new password.",
      "verify": "Send a real scan, open the file from a computer and re-test email. Both scan routes matter to the customer."
    }
  },
  {
    "id": "m14-d3",
    "title": "Jams in the duplex unit on humid days",
    "level": 3,
    "lesson": "m14-l5",
    "report": "A multifunction product jams when printing two-sided pages, mostly on wet days. The paper comes out curled and the jam is in the duplex unit. The paper is stored on an open shelf in a damp room, ream wrappers torn off. A technician already replaced the duplex rollers last month.",
    "checks": [
      { "id": "c1", "label": "Note when the jams happen and compare with the weather", "result": "The jams are far more frequent on humid days and rare on dry days.", "type": "key" },
      { "id": "c2", "label": "Look at the paper from the storage shelf, held flat on a table", "result": "The sheets curl noticeably and feel limp. The ream has been open for weeks.", "type": "key" },
      { "id": "c3", "label": "Inspect the duplex rollers and path for wear and dirt", "result": "The rollers are new and clean. The path is smooth and undamaged.", "type": "useful" },
      { "id": "c4", "label": "Load fresh paper from a sealed ream and print a two-sided test run", "result": "The test of 50 two-sided pages runs without a jam.", "type": "key" },
      { "id": "c5", "label": "Check the paper type and weight settings in the tray", "result": "The settings match the paper. They are correct.", "type": "useful" },
      { "id": "c6", "label": "Replace the duplex unit", "result": "The unit is not faulty. New rollers were already fitted.", "type": "low" },
      { "id": "c7", "label": "Increase the fuser temperature to dry the paper", "result": "This can scorch the paper and shortens the life of the fuser, and curl still comes from damp storage.", "type": "unsafe" },
      { "id": "c8", "label": "Replace the paper tray", "result": "The tray is not causing the jams.", "type": "low" },
      { "id": "c9", "label": "Check whether the tray fan or heater is working", "result": "The machine has no tray heater. Storage conditions decide how dry the paper stays.", "type": "useful" }
    ],
    "areas": [
      "The paper storage and condition",
      "The duplex unit rollers and the belts that drive them",
      "The fuser",
      "The controller"
    ],
    "area": 0,
    "faults": [
      "Damp, curled paper from poor storage jams in the duplex path",
      "Worn duplex rollers",
      "A failed duplex motor",
      "A fuser fault"
    ],
    "fault": 0,
    "repairs": [
      "Advise the customer to keep paper sealed in its wrapper in a dry place, and use fresh paper",
      "Replace the duplex rollers again",
      "Replace the duplex unit",
      "Raise the fuser temperature"
    ],
    "repair": 0,
    "verify": [
      "Run a long two-sided job on stored fresh paper, and check with the customer after the next humid spell",
      "Print one two-sided page",
      "Look at the duplex unit",
      "Check the rollers again"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The jams follow the weather and the paper curls on the shelf. The paper and its storage are the area to change.",
      "fault": "Paper absorbs moisture and curls. Curled sheets jam in the tight duplex path, even with new rollers.",
      "repair": "Fix the cause by storing paper sealed in a dry place and using fresh paper. Replacing parts that work, or raising the fuser temperature, will not stop curl.",
      "verify": "Run a long two-sided job on good paper and follow up after a humid spell, since the original fault only shows on wet days."
    }
  }
]);

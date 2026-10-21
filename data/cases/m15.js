OMM.registerCases("m15", [
  {
    "id": "m15-d1",
    "title": "Receipts come out blank",
    "level": 1,
    "lesson": "m15-l2",
    "report": "A shop assistant changed the paper roll on a thermal receipt printer at a till this morning. Since then, every receipt comes out blank, although the paper feeds and the cutter works. The till records sales normally and the printer has no error light.",
    "checks": [
      { "id": "c1", "label": "Print the printer's self-test page", "result": "The self-test page is also blank. The fault is with the paper or the print head, not the till.", "type": "key" },
      { "id": "c2", "label": "Open the paper door and look at how the roll is loaded", "result": "The roll is loaded the wrong way round. The coated side is facing away from the print head.", "type": "key" },
      { "id": "c3", "label": "Scratch a small patch of the paper with a fingernail to find the coated side", "result": "The side that marks dark is the coated side. It is currently facing the platen roller.", "type": "key" },
      { "id": "c4", "label": "Reload the roll with the coated side towards the print head and print the self-test", "result": "The self-test now prints dark text. The paper path is fine.", "type": "key" },
      { "id": "c5", "label": "Check the paper roll is the correct width and type for this printer", "result": "The roll is the right width and is thermal paper.", "type": "useful" },
      { "id": "c6", "label": "Replace the thermal print head", "result": "The head is working. This is an expensive part you do not need.", "type": "low" },
      { "id": "c7", "label": "Reset the till to factory settings", "result": "The till is not at fault and a reset would erase prices and tax settings.", "type": "low" },
      { "id": "c8", "label": "Touch the print head with your fingers after a long print run to check if it is hot", "result": "Unsafe: the head can be hot enough to burn and touching it can damage it. Let it cool and use the manual's cleaning steps.", "type": "unsafe" },
      { "id": "c9", "label": "Check the print density setting", "result": "The density setting is at its normal value.", "type": "useful" }
    ],
    "areas": [
      "How the paper roll is loaded",
      "The till software and the receipt format settings",
      "The cash drawer",
      "The power supply"
    ],
    "area": 0,
    "faults": [
      "Thermal paper loaded with the coated side facing the wrong way",
      "A burnt-out print head that has stopped heating every dot across the paper",
      "A faulty till memory",
      "A broken cutter"
    ],
    "fault": 0,
    "repairs": [
      "Reload the roll with the coated side towards the print head",
      "Replace the print head",
      "Reset the till",
      "Replace the cutter"
    ],
    "repair": 0,
    "verify": [
      "Print the self-test and a test sale receipt and check the print is dark and even",
      "Print one line",
      "Check the till display and make sure that it shows the correct total for the sale",
      "Close the paper door"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The paper was changed just before the fault and the self-test is blank too, so the paper loading is the first area to check.",
      "fault": "Thermal paper only darkens on its coated side when heated. With that side away from the head, nothing prints.",
      "repair": "Reload the roll the right way. Replacing the head or resetting the till would fix nothing and cost money.",
      "verify": "Print the self-test and a test sale receipt. A single line could hide faint print, so check the whole receipt."
    }
  },
  {
    "id": "m15-d2",
    "title": "Drawer opens by key but not on a sale",
    "level": 2,
    "lesson": "m15-l2",
    "report": "A cash drawer no longer opens when a sale is completed, but it opens fine with the manual key release and the receipt prints normally. The drawer cable plugs into the back of the receipt printer. The shop was cleaned last night and cables behind the counter were moved.",
    "checks": [
      { "id": "c1", "label": "Print the printer's self-test or use the drawer test function", "result": "The receipt prints but the drawer does not open when the test fires. The drawer pulse is not reaching it.", "type": "key" },
      { "id": "c2", "label": "Look at the cable at the back of the printer and at the drawer", "result": "The drawer cable is half pulled out of its socket at the printer end. The latch is not engaged.", "type": "key" },
      { "id": "c3", "label": "Push the cable firmly home until it clicks, then fire the drawer test", "result": "The drawer pops open on the test. The connection is the fault.", "type": "key" },
      { "id": "c4", "label": "Check the drawer solenoid resistance at the cable end", "result": "The solenoid reads a normal value. It is not open or shorted.", "type": "key" },
      { "id": "c5", "label": "Check that the drawer is not locked and the slide runs freely", "result": "The slide runs freely and the lock is released.", "type": "useful" },
      { "id": "c6", "label": "Replace the drawer", "result": "The drawer opens on the test once the cable is seated. It is not faulty.", "type": "low" },
      { "id": "c7", "label": "Reset the till program", "result": "The till sends the open command correctly. A reset changes nothing.", "type": "low" },
      { "id": "c8", "label": "Connect the drawer cable directly to a mains socket to see if it opens", "result": "Unsafe: the drawer solenoid runs on a low voltage supplied by the printer. Mains would destroy it and could cause a fire.", "type": "unsafe" },
      { "id": "c9", "label": "Check the till's drawer settings", "result": "The till is set to open the drawer after each sale. The settings are correct.", "type": "useful" }
    ],
    "areas": [
      "The cable between the printer and the drawer",
      "The drawer lock",
      "The till software and the setting that tells it to open the drawer",
      "The print head"
    ],
    "area": 0,
    "faults": [
      "The drawer cable is not fully seated in the printer socket",
      "A burnt-out drawer solenoid",
      "A wrong setting in the till",
      "A broken print head"
    ],
    "fault": 0,
    "repairs": [
      "Reseat the cable fully, secure it and route it so it cannot be pulled",
      "Replace the drawer with a new one and fit it to the same cable and printer",
      "Reset the till",
      "Change the printer"
    ],
    "repair": 0,
    "verify": [
      "Ring up a test sale, confirm the receipt prints and the drawer opens, then try a no-sale",
      "Fire the drawer test once",
      "Open the drawer with the key and check that the slide runs smoothly all the way in and out",
      "Print a receipt"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The receipt prints, the till settings are correct and the key release works, so the link between printer and drawer is where the pulse is being lost.",
      "fault": "A half-seated cable stops the printer's pulse reaching the solenoid. The solenoid itself tests normal, and seating the cable restores the action.",
      "repair": "Seat the cable firmly and route it where it cannot be tugged. The drawer and till are not at fault.",
      "verify": "Ring up a real test sale and a no-sale. The drawer test alone does not prove the till triggers it on a sale."
    }
  },
  {
    "id": "m15-d3",
    "title": "Totals too low on some items after a tax change",
    "level": 3,
    "lesson": "m15-l4",
    "report": "The tax rate rose from 7% to 10% last week. The shop owner changed it on the till, yet the Z report tax is lower than expected. A test sale of an item priced 50.00 in department 1 gives 55.00. The same 50.00 price in department 2 gives 53.50. Both departments are taxable.",
    "checks": [
      { "id": "c1", "label": "Ring up a test sale of 50.00 in department 1 and read the total", "result": "The total is 55.00, which is 50.00 plus 10% tax. Department 1 is correct.", "type": "key" },
      { "id": "c2", "label": "Ring up a test sale of 50.00 in department 2 and read the total", "result": "The total is 53.50, which is 50.00 plus 7% tax. Department 2 is still using the old rate.", "type": "key" },
      { "id": "c3", "label": "Print a programming report of the departments and their tax settings", "result": "Department 1 uses tax rate A at 10%. Department 2 uses tax rate B at 7%. Both are marked taxable.", "type": "key" },
      { "id": "c4", "label": "Work out the expected tax for the test sale (50.00 at 10%)", "result": "50.00 × 0.10 = 5.00, so the expected total is 55.00. Department 2 is short by 1.50.", "type": "key" },
      { "id": "c5", "label": "Check the date and time on the till", "result": "The date and time are correct.", "type": "useful" },
      { "id": "c6", "label": "Check the receipt printer", "result": "The receipt prints correctly. Printing is not the problem.", "type": "useful" },
      { "id": "c7", "label": "Replace the till's memory board", "result": "Memory is not at fault. The setting simply differs between departments.", "type": "low" },
      { "id": "c8", "label": "Run a Z report to see the totals", "result": "Unsafe in the middle of the trading day: a Z report resets the daily totals. Take an X report instead.", "type": "unsafe" },
      { "id": "c9", "label": "Round all prices up by 1.50 in department 2", "result": "This is a workaround, not a fix. It would break the receipts and misrepresent the tax.", "type": "low" }
    ],
    "areas": [
      "The tax rate assigned to department 2",
      "The receipt printer",
      "The cash drawer",
      "The barcode scanner"
    ],
    "area": 0,
    "faults": [
      "Department 2 is still linked to the old 7% tax rate",
      "A faulty memory board",
      "A broken scanner",
      "A wrong date on the till"
    ],
    "fault": 0,
    "repairs": [
      "Change department 2 to the 10% rate, print the programming report and run test sales",
      "Replace the memory board",
      "Change the item prices by hand in department 2 so that the totals come out as expected",
      "Reset the whole till"
    ],
    "repair": 0,
    "verify": [
      "Ring up test sales in both departments, check 55.00 on each 50.00 item, and print an X report",
      "Ring up one sale in department 1",
      "Look at the programming report only and check that both departments are marked as taxable, then stop",
      "Run a Z report"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Department 1 gives the right total and department 2 does not, so the tax rate linked to department 2 is the area to check.",
      "fault": "53.50 equals 50.00 plus 7%. Department 2 still uses the old rate while department 1 uses 10%.",
      "repair": "Link department 2 to the 10% rate and test. Changing prices by hand or resetting the till would break other settings.",
      "verify": "Test both departments and read an X report. An X report shows tax totals without resetting the day, unlike a Z report."
    }
  }
]);

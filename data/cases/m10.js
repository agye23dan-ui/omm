OMM.registerCases("m10", [
  {
    "id": "m10-d1",
    "title": "Network printer unreachable, link light off",
    "level": 1,
    "lesson": "m10-l6",
    "report": "A network printer in a small office has stopped printing for everyone. Its panel shows Ready. The cable runs along a skirting board to a wall socket and was added by the office manager last month. Nothing else has changed.",
    "checks": [
      { "id": "c1", "label": "Look at the link and activity lights next to the printer's network socket", "result": "Neither light is on. The printer does not see a network link.", "type": "key" },
      { "id": "c2", "label": "Try to ping the printer's address from a computer", "result": "The ping times out on every attempt. The printer cannot be reached.", "type": "key" },
      { "id": "c3", "label": "Swap the cable for a known-good patch cable", "result": "The link light comes on straight away and the ping replies. The old cable was the problem.", "type": "key" },
      { "id": "c4", "label": "Test the old cable with a cable tester", "result": "The tester shows pin 3 and pin 6 open. One end has a poor crimp.", "type": "key" },
      { "id": "c5", "label": "Check that the switch port light is on and the switch has power", "result": "The switch is powered and its other ports are working.", "type": "useful" },
      { "id": "c6", "label": "Replace the printer's network card", "result": "The card works with a good cable. It was not faulty.", "type": "low" },
      { "id": "c7", "label": "Change the printer's IP address", "result": "No change. The printer is not on the network at all, so the address is not the problem.", "type": "low" },
      { "id": "c8", "label": "Cut open the cable while it is plugged in to test the wires with a meter", "result": "Unsafe and pointless: always disconnect first. Power over network cables can reach other equipment.", "type": "unsafe" },
      { "id": "c9", "label": "Ask whether any change was made to the network recently", "result": "Only the new cable was installed last month.", "type": "useful" }
    ],
    "areas": [
      "The cable between the printer and the wall socket",
      "The printer's IP address and its subnet mask settings",
      "The printer driver",
      "The print server"
    ],
    "area": 0,
    "faults": [
      "A badly crimped cable with open pairs",
      "A duplicate IP address",
      "A wrong subnet mask",
      "A corrupted printer driver"
    ],
    "fault": 0,
    "repairs": [
      "Replace or re-terminate the cable following the wiring standard, then test it with a cable tester",
      "Change the IP address",
      "Replace the printer",
      "Reinstall the driver on every computer"
    ],
    "repair": 0,
    "verify": [
      "Check the link light, ping the printer and print a test page from a computer",
      "Look at the link light only",
      "Ask the manager to try printing later in the day and to ring if it fails again",
      "Print from the panel"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "No link light and no ping point to the physical link. The cable is the first part to test.",
      "fault": "The tester found two open conductors at a poor crimp. A good patch cable restored the link at once.",
      "repair": "Replace or re-terminate the cable to the wiring standard and test it. Changing addresses or drivers cannot fix a missing link.",
      "verify": "Check the link light, ping and a real print job from a computer. The panel saying Ready did not show the network was working."
    }
  },
  {
    "id": "m10-d2",
    "title": "Printing works then stops, then works",
    "level": 2,
    "lesson": "m10-l1",
    "report": "A network printer prints fine for a while and then jobs time out. Restarting the printer fixes it for a few hours. Last week a manager's new laptop was set up with a fixed address. The printer gets its address automatically from the router.",
    "checks": [
      { "id": "c1", "label": "Print the printer's configuration page and note its IP and MAC addresses", "result": "The printer shows an address ending .50 and a MAC address ending in 3E.", "type": "key" },
      { "id": "c2", "label": "Ping the printer, then check the address table for the MAC address that answers", "result": "The reply comes from a different MAC address, ending 9A, not the printer's 3E. Another device answers on the same address.", "type": "key" },
      { "id": "c3", "label": "Check the new laptop's network settings", "result": "The laptop has a fixed address .50, set by hand. It sits inside the router's automatic range.", "type": "key" },
      { "id": "c4", "label": "Check the router's range and reservations", "result": "The router hands out addresses .20 to .100. No reservation is made for the printer.", "type": "key" },
      { "id": "c5", "label": "Check the printer's link light and cable", "result": "The link light is steady and the cable is fine.", "type": "useful" },
      { "id": "c6", "label": "Replace the printer", "result": "The printer works when it has its address. It is not faulty.", "type": "low" },
      { "id": "c7", "label": "Reinstall the driver on the manager's laptop", "result": "The driver has nothing to do with two devices sharing an address.", "type": "low" },
      { "id": "c8", "label": "Reset the router to factory settings during working hours", "result": "Unsafe for the business: it would remove every network setting and take everyone offline.", "type": "unsafe" },
      { "id": "c9", "label": "Check the subnet mask on the printer", "result": "The subnet mask is correct and matches the other devices.", "type": "useful" }
    ],
    "areas": [
      "The addressing of devices on the network",
      "The printer's cable",
      "The printer's print engine",
      "The printer driver"
    ],
    "area": 0,
    "faults": [
      "A duplicate IP address on the printer and the manager's laptop",
      "A wrong subnet mask set on the printer by the last engineer to visit",
      "A failed switch port",
      "A damaged network cable"
    ],
    "fault": 0,
    "repairs": [
      "Move the laptop's address outside the router range and reserve an address for the printer",
      "Restart the printer every morning before the office opens, so that it gets a fresh address",
      "Replace the router",
      "Reinstall all drivers"
    ],
    "repair": 0,
    "verify": [
      "Check the address table shows only the printer's MAC, then print from several computers",
      "Print one page",
      "Restart the printer, ping its address once, and print one page to check that it answers correctly",
      "Ping once"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The printer works at times, and a different device answers on its address. This is an addressing problem, not a hardware one.",
      "fault": "Two MAC addresses answering to the same IP address is a duplicate. The laptop's fixed address sits inside the router's automatic range.",
      "repair": "Move the laptop's address outside the router range and reserve an address for the printer. Restarting the printer only hides the problem for a few hours.",
      "verify": "Check the address table now shows only the printer's MAC at that address, then print from several computers over time. A single page cannot prove an intermittent fault is gone."
    }
  },
  {
    "id": "m10-d3",
    "title": "Fax calls connect but pages fail on VoIP",
    "level": 3,
    "lesson": "m10-l4",
    "report": "An office moved its phone service to an internet phone adapter last month. Its fax machine now dials and connects but fails partway through longer documents with a communication error. Voice calls on the same line sound fine. The fax worked on the old analogue line.",
    "checks": [
      { "id": "c1", "label": "Read the fax activity report and note where the failure happens", "result": "Calls connect and negotiate, then fail partway through the page with a line error. Short one-page faxes sometimes succeed.", "type": "key" },
      { "id": "c2", "label": "Check how the fax is connected to the adapter and which port it uses", "result": "The fax is plugged into the correct phone port on the adapter and the cord is undamaged.", "type": "useful" },
      { "id": "c3", "label": "Ask whether the provider supports fax over its internet phone service", "result": "The provider says fax works best with a lower speed and a fax-friendly setting. They can enable it on request.", "type": "key" },
      { "id": "c4", "label": "Lower the fax transmission start speed and test a multi-page fax", "result": "A multi-page fax now completes with fewer errors, though it takes longer.", "type": "key" },
      { "id": "c5", "label": "Test the fax on a spare analogue line if one is available", "result": "On an analogue line the fax works at its normal speed. The fax machine itself is fine.", "type": "key" },
      { "id": "c6", "label": "Replace the fax machine", "result": "The machine works on an analogue line, so it is not faulty.", "type": "low" },
      { "id": "c7", "label": "Replace the phone cord", "result": "The cord tests good. Voice calls are clear.", "type": "low" },
      { "id": "c8", "label": "Open the adapter and cut wires to tap the line", "result": "Unsafe and unnecessary: you could damage equipment and break the provider's service terms.", "type": "unsafe" },
      { "id": "c9", "label": "Check the line voltage with a meter on the adapter port", "result": "The adapter port gives a normal low line voltage. The port is working.", "type": "useful" }
    ],
    "areas": [
      "How the internet phone service carries fax signals",
      "The fax machine scanner",
      "The phone cord",
      "The fax machine's paper path and the document feeder"
    ],
    "area": 0,
    "faults": [
      "Compression and timing on the internet phone service distort fax signals at speed",
      "A failed fax modem",
      "A damaged phone cord",
      "A paper jam in the fax feeder that stops the page part of the way through sending"
    ],
    "fault": 0,
    "repairs": [
      "Lower the fax speed, ask the provider for fax-friendly settings, or use an analogue line",
      "Replace the fax machine with a newer model that supports faster speeds on internet lines and more memory",
      "Replace the cord",
      "Re-wire the building"
    ],
    "repair": 0,
    "verify": [
      "Send and receive several multi-page faxes and check the activity report shows no errors",
      "Send one page",
      "Make a voice call on the same line and check that the sound is clear at both ends and tell the customer it is fixed",
      "Check the cord"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The fax works on analogue and voice calls are clear, so the difference is how the new service carries the fax signal.",
      "fault": "Internet phone services compress voice and can add timing changes. Fax signals are sensitive to this, especially at higher speeds on longer pages.",
      "repair": "Slow the fax down, ask the provider for fax-friendly settings, or keep a dedicated analogue line. Replacing the fax or cord cannot fix distortion in the service.",
      "verify": "Test several multi-page faxes in both directions and read the activity report. A one-page success does not show that longer documents will go through."
    }
  }
]);

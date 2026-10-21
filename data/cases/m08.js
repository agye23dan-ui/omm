OMM.registerCases("m08", [
  {
    "id": "m08-d1",
    "title": "Date and counters lost at every power-off",
    "level": 1,
    "lesson": "m08-l4",
    "report": "Each time a copier is unplugged or the power fails, the clock resets to a default date and the user settings return to factory values. The machine works normally while it is powered. It is nine years old and has never had its battery changed.",
    "checks": [
      { "id": "c1", "label": "Switch off, unplug and locate the backup battery on the main board", "result": "A small lithium coin cell sits in a holder on the main board. The machine keeps its clock and settings from it when unplugged.", "type": "key" },
      { "id": "c2", "label": "Measure the battery voltage with the meter on DC volts", "result": "The cell reads 1.1 V. A good lithium cell of this type reads close to 3 V.", "type": "key" },
      { "id": "c3", "label": "Look at the battery holder and contacts", "result": "The holder is clean and the cell is held firmly. There is no corrosion.", "type": "useful" },
      { "id": "c4", "label": "Check the battery type and polarity marking in the manual", "result": "The manual gives the type and shows the positive side facing up. This is the same type as the one fitted.", "type": "key" },
      { "id": "c5", "label": "Record the current settings and the counters before you remove the battery", "result": "You write down the settings and the meter reading. They may reset when the battery is out.", "type": "key" },
      { "id": "c6", "label": "Replace the main board", "result": "It would work but is not needed. A low battery is a cheap fix.", "type": "low" },
      { "id": "c7", "label": "Reload the firmware", "result": "Firmware does not change what the battery can hold. The fault returns when the machine is unplugged.", "type": "low" },
      { "id": "c8", "label": "Short the battery terminals to drain any charge, then test again", "result": "Unsafe: shorting a lithium cell can make it hot or burst. Never short a battery.", "type": "unsafe" },
      { "id": "c9", "label": "Check the date and time after a power cycle", "result": "The clock returns to the default date every time the machine is unplugged.", "type": "useful" }
    ],
    "areas": [
      "The backup battery for the memory and clock",
      "The main firmware stored on the processor board",
      "The control panel",
      "The power supply"
    ],
    "area": 0,
    "faults": [
      "The backup battery is exhausted",
      "The firmware is corrupt",
      "The memory chip has failed",
      "The clock crystal is damaged and the clock runs slowly"
    ],
    "fault": 0,
    "repairs": [
      "Replace the battery with the correct type and polarity, re-enter the settings, and recycle the old cell",
      "Replace the main board, reload the firmware and the settings from the customer's backup, then retest it",
      "Reflash the firmware",
      "Fit a larger fuse"
    ],
    "repair": 0,
    "verify": [
      "Set the date, unplug the machine for a while, power up and confirm the date and settings are kept",
      "Switch on, set the date once, and check that the clock still shows the correct time a minute or two later",
      "Print a test page",
      "Check the battery colour"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The machine works while powered and forgets everything when unplugged. The part that keeps memory alive without mains is the backup battery.",
      "fault": "A reading of 1.1 V from a cell that should read about 3 V shows the battery is exhausted. This explains the loss of settings and the clock.",
      "repair": "Fit the correct type with the right polarity, then restore the settings you recorded. Used lithium cells go to a proper battery recycling point.",
      "verify": "Prove the memory is kept by unplugging the machine and checking after a power cycle. Switching on and looking once does not test what failed."
    }
  },
  {
    "id": "m08-d2",
    "title": "Stuck at start-up after a power cut",
    "level": 2,
    "lesson": "m08-l6",
    "report": "A power cut interrupted a firmware update on a network printer. Now it shows a firmware error on the panel and never reaches the ready screen. The fans spin and the panel lights up. The customer still has the update file they downloaded from the manufacturer.",
    "checks": [
      { "id": "c1", "label": "Check that the power supply rails are correct before anything else", "result": "The 3.3 V and 5 V rails measure steady and within tolerance. Power is fine.", "type": "key" },
      { "id": "c2", "label": "Check for a reset pulse and a clock signal on the main processor", "result": "The reset line goes low then high at power-up, and the clock is running. The hardware starts.", "type": "key" },
      { "id": "c3", "label": "Read the error and any error log on the panel or via the service port", "result": "The log shows 'firmware image checksum failed'. The processor can start but cannot load the main program.", "type": "key" },
      { "id": "c4", "label": "Check the file name, version and checksum of the update file against the manufacturer's information", "result": "The file is the correct model and version. The checksum matches the published value.", "type": "key" },
      { "id": "c5", "label": "Look at the board for obvious damage after the power cut", "result": "Nothing is burnt or cracked. The fuse is intact.", "type": "useful" },
      { "id": "c6", "label": "Replace the main board", "result": "A new board would work but the fault is in the stored firmware, not the board.", "type": "low" },
      { "id": "c7", "label": "Hold the reset button for ten minutes", "result": "Nothing changes. A reset does not restore a damaged firmware image.", "type": "low" },
      { "id": "c8", "label": "Load a firmware file for a different model that looks similar", "result": "Unsafe for the machine: the wrong firmware can leave the product unusable and the repair may be hard to recover.", "type": "unsafe" },
      { "id": "c9", "label": "Ask whether the customer's settings and data need to be kept", "result": "The customer wants the network settings kept if possible. A note is made to re-enter them if needed.", "type": "useful" }
    ],
    "areas": [
      "The stored firmware image",
      "The power supply",
      "The main processor hardware and its clock circuit",
      "The control panel"
    ],
    "area": 0,
    "faults": [
      "The firmware image was corrupted when the update was interrupted",
      "The processor clock has failed",
      "The power supply output is too low",
      "The reset circuit is stuck"
    ],
    "fault": 0,
    "repairs": [
      "Reflash the correct firmware using the manufacturer's recovery method, then restore settings",
      "Replace the main board",
      "Replace the power supply",
      "Reload an older firmware for a different model"
    ],
    "repair": 0,
    "verify": [
      "Boot the printer, check the firmware version, run the self-test and print a configuration page",
      "Check that the panel lights up and that no error is shown at start-up before leaving the site and then tell the customer it is done",
      "Print a page",
      "Leave it switched on"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Power, reset and clock all pass, and the log reports a failed image check. The fault is in the stored program.",
      "fault": "The update was cut short, leaving an incomplete image. The checksum failure says the processor starts but cannot trust the program it finds.",
      "repair": "Reflash the matching file using the manufacturer's recovery method. A new board would not need to be bought for a software fault.",
      "verify": "Confirm the version, run the self-test and print the configuration page so you can check settings and network details. A lit panel alone does not prove the firmware is sound."
    }
  },
  {
    "id": "m08-d3",
    "title": "Jam reported at start, sensor looks fine",
    "level": 3,
    "lesson": "m08-l6",
    "report": "A printer reports a paper jam at the exit as soon as it is switched on, with no paper in the path. You replaced the exit sensor yesterday and the jam message returned. The sensor board connects through a ribbon cable to a logic chip that buffers the sensor line. A logic probe and a meter are available.",
    "checks": [
      { "id": "c1", "label": "Switch off and unplug. Check the ribbon cable and connector at both ends", "result": "The cable is seated and shows no damage. The connector pins look clean.", "type": "useful" },
      { "id": "c2", "label": "Power on and use the logic probe on the sensor output pin at the connector, moving the actuator by hand", "result": "The signal toggles correctly between high and low when the actuator moves. The sensor is working.", "type": "key" },
      { "id": "c3", "label": "Probe the buffer chip input pin while moving the actuator", "result": "The input stays high all the time and does not follow the sensor signal.", "type": "key" },
      { "id": "c4", "label": "Switch off. Check continuity from the connector pin to the buffer input pin", "result": "There is no continuity. The copper track between the connector and the chip is open near a via.", "type": "key" },
      { "id": "c5", "label": "Check that the power and ground pins of the buffer chip are correct", "result": "The chip has the right supply voltage and ground. Its output follows its input, so the chip is working.", "type": "key" },
      { "id": "c6", "label": "Replace the exit sensor again", "result": "The sensor was already working. A third sensor does not change the result.", "type": "low" },
      { "id": "c7", "label": "Reinstall the printer firmware", "result": "The firmware reads the same stuck input after reinstall. The fault is in the hardware signal.", "type": "low" },
      { "id": "c8", "label": "Cut the buffer chip out and force its output high with a clip lead while powered", "result": "Unsafe: shorting live logic outputs can damage the chip and the board. Isolate first and repair the track.", "type": "unsafe" },
      { "id": "c9", "label": "Check the firmware version", "result": "The firmware is the current version. It has not changed recently.", "type": "useful" }
    ],
    "areas": [
      "Signal path from sensor connector to the buffer chip",
      "The exit sensor",
      "The firmware",
      "The paper path rollers"
    ],
    "area": 0,
    "faults": [
      "An open track between connector and buffer input leaves the input floating high",
      "A faulty exit sensor that sends a constant signal even when no paper is present",
      "A corrupted firmware",
      "A jammed exit roller"
    ],
    "fault": 0,
    "repairs": [
      "Repair the track with a short insulated jumper wire soldered at each end, or replace the board",
      "Replace the sensor a third time and clean the connector pins on the sensor side and refit the board without further tests",
      "Reflash the firmware",
      "Replace the exit roller"
    ],
    "repair": 0,
    "verify": [
      "Probe the buffer input while moving the actuator, then run a full print job with the covers closed",
      "Check that the jam message has gone after start-up and that the panel shows ready at power-on and tell the customer to call if it returns",
      "Print a test page",
      "Reseat the ribbon cable"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The sensor output toggles at the connector but the chip input does not follow, so the signal is being lost between those two points.",
      "fault": "An open track between connector and chip leaves the input pulled high by its pull-up. The controller then reads the sensor as always blocked, which is the permanent jam.",
      "repair": "Bridge the open track with a short jumper wire, or replace the board. Replacing the sensor again does nothing, since the sensor was working.",
      "verify": "Check that the buffer input now follows the actuator, then print a job. The message disappearing at start-up does not prove the sensor signal reaches the controller."
    }
  }
]);

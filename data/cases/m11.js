OMM.registerCases("m11", [
  {
    "id": "m11-d1",
    "title": "PC has no picture and beeps",
    "level": 1,
    "lesson": "m11-l3",
    "report": "A desktop PC in a reception area was moved to a new desk this morning. When switched on the fans spin and the lights come on, but the monitor stays blank and the PC gives a repeating series of long beeps. It worked normally before the move.",
    "checks": [
      { "id": "c1", "label": "Look up the beep pattern in the motherboard manual", "result": "The manual says the repeating long beeps mean a memory error. The PC cannot find usable memory.", "type": "key" },
      { "id": "c2", "label": "Switch off, unplug and touch the metal case to discharge static. Open the case and look at the memory modules", "result": "One memory module is partly out of its slot and the latches are open. It was knocked during the move.", "type": "key" },
      { "id": "c3", "label": "Reseat the memory modules firmly until the latches click", "result": "The latches click shut. The PC now starts and the monitor shows the manufacturer logo.", "type": "key" },
      { "id": "c4", "label": "Check the monitor cable and power", "result": "The cable is seated and the monitor shows its own menu. The monitor is working.", "type": "useful" },
      { "id": "c5", "label": "Check the power supply fan and cable connections", "result": "All power cables are seated. The power supply fan turns.", "type": "useful" },
      { "id": "c6", "label": "Replace the graphics card", "result": "The graphics card is not the problem. The beeps already pointed at memory.", "type": "low" },
      { "id": "c7", "label": "Reinstall the operating system", "result": "The PC has not even reached the operating system yet. A reinstall would not help.", "type": "low" },
      { "id": "c8", "label": "Pull out the memory with the PC still plugged in and switched on", "result": "Unsafe: removing parts from a live PC can damage the board and expose you to mains. Switch off and unplug first.", "type": "unsafe" },
      { "id": "c9", "label": "Note the beep pattern and when it began", "result": "It began at the first start after the move. No beeps were heard before.", "type": "useful" }
    ],
    "areas": [
      "The memory modules and their slots",
      "The graphics card",
      "The hard disk",
      "The monitor"
    ],
    "area": 0,
    "faults": [
      "A memory module was dislodged and is not making contact in its slot",
      "A failed graphics card",
      "A corrupt operating system",
      "A dead power supply"
    ],
    "fault": 0,
    "repairs": [
      "Reseat the memory modules correctly, handling them with ESD care",
      "Replace the graphics card",
      "Reinstall the operating system after backing up the files, in case the install is damaged",
      "Replace the monitor"
    ],
    "repair": 0,
    "verify": [
      "Power up, confirm full memory is detected in the setup screen and let the PC boot and run for a while",
      "See the logo and stop",
      "Check the monitor menu",
      "Switch off again"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The beep code is the PC's own self-test result. It named memory, so the memory modules and slots are the place to look.",
      "fault": "A module partly out of its slot with open latches cannot make contact. The move explains how it came loose.",
      "repair": "Reseat the module until the latches click, taking care over static. A new graphics card or a reinstall would fix nothing because the PC never gets that far.",
      "verify": "Confirm the full memory amount in the setup screen and let the PC run. Seeing the logo only shows the PC starts, not that all the memory is working."
    }
  },
  {
    "id": "m11-d2",
    "title": "PC shuts down under load",
    "level": 2,
    "lesson": "m11-l6",
    "report": "A desktop PC in a print shop shuts down suddenly after about 20 minutes of heavy design work. It restarts after a pause and then runs for a few minutes before shutting down again. The case sits under a desk beside a radiator. It has not been opened for five years.",
    "checks": [
      { "id": "c1", "label": "Open the system information and watch the processor temperature while the PC runs a stress test", "result": "The temperature climbs quickly and reaches the processor's limit in about four minutes, then the PC shuts down.", "type": "key" },
      { "id": "c2", "label": "Switch off, unplug and inspect the cooler and fan", "result": "The heatsink fins are packed with dust and the fan is slow and furry.", "type": "key" },
      { "id": "c3", "label": "Remove the cooler and inspect the thermal paste", "result": "The old thermal paste is dry and cracked. It is not conducting heat well.", "type": "key" },
      { "id": "c4", "label": "Check the memory with a memory test", "result": "The memory test passes with no errors.", "type": "useful" },
      { "id": "c5", "label": "Check the voltage rails from the power supply in the setup screen", "result": "The readings are within tolerance and stay steady under load.", "type": "useful" },
      { "id": "c6", "label": "Reinstall the operating system", "result": "The temperature problem returns. Software is not the cause.", "type": "low" },
      { "id": "c7", "label": "Replace the hard disk", "result": "The disk is healthy and the shut-downs match the temperature, not disk activity.", "type": "low" },
      { "id": "c8", "label": "Blow the dust out with the PC running and the case open, using your mouth", "result": "Unsafe: moisture and static near a live board can damage it, and dust gets in your eyes. Switch off and use a proper vacuum or brush.", "type": "unsafe" },
      { "id": "c9", "label": "Check the room around the case", "result": "The case sits against a radiator with its vents covered by the wall.", "type": "useful" }
    ],
    "areas": [
      "Cooling of the processor",
      "The hard disk",
      "The memory",
      "The operating system and the background programs that run on it"
    ],
    "area": 0,
    "faults": [
      "The processor overheats because of clogged heatsink, a slow fan and dried thermal paste",
      "A failing power supply",
      "A corrupt operating system that shuts the PC down when it is under heavy load, which a reinstall would clear",
      "A failing hard disk"
    ],
    "fault": 0,
    "repairs": [
      "Clean the dust, replace the fan if needed, apply fresh paste, and move the case to a cooler place",
      "Reinstall the operating system",
      "Replace the hard disk",
      "Raise the shut-down temperature limit in setup so the PC keeps running for longer, and then close the case at once"
    ],
    "repair": 0,
    "verify": [
      "Re-run the stress test and watch the temperature stay below the limit for 30 minutes",
      "Run the PC for five minutes",
      "Check the fan speed in setup and confirm that it is turning at a reasonable speed when idle",
      "Close the case"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The temperature rises quickly and the shut-down happens at its limit, with the other tests passing. The cooling is the area to repair.",
      "fault": "A dusty heatsink, a slow fan and dry paste together stop the heat getting out. Add a hot position by a radiator and the PC overheats under load.",
      "repair": "Clean and renew the cooling parts, and move the case to a cooler position with free airflow. Raising the temperature limit would let the processor damage itself.",
      "verify": "A stress test for 30 minutes at a safe temperature shows the problem is solved under real load. Five minutes of light running would not have shown the fault anyway."
    }
  },
  {
    "id": "m11-d3",
    "title": "Slow PC with clicking disk",
    "level": 3,
    "lesson": "m11-l4",
    "report": "A shop's PC has become very slow over a week. It takes ten minutes to start, programs freeze, and the hard disk makes an occasional clicking sound. The owner uses it for stock records and says there is no recent backup. The disk health tool has not been run before.",
    "checks": [
      { "id": "c1", "label": "Stop using the PC for normal work and ask about backups before running anything heavy", "result": "The stock records exist only on this disk. There is no backup. Heavy disk use could kill the drive.", "type": "key" },
      { "id": "c2", "label": "Read the disk's health data (SMART) from a safe environment", "result": "The report shows reallocated sectors and pending sectors rising, and flags the drive as failing.", "type": "key" },
      { "id": "c3", "label": "Copy the stock records and other data to external storage first", "result": "The data copies, with a few files slow to read. A complete copy of the records is saved.", "type": "key" },
      { "id": "c4", "label": "Clone or replace the drive with a new one and restore the system", "result": "The system is restored to a new drive and starts quickly.", "type": "key" },
      { "id": "c5", "label": "Run a memory test", "result": "The memory passes. It does not cause the clicking.", "type": "useful" },
      { "id": "c6", "label": "Run a full surface scan and repair on the failing drive before copying the data", "result": "Unsafe for the data: heavy scanning of a failing disk can finish it off before the data is saved.", "type": "unsafe" },
      { "id": "c7", "label": "Reinstall the operating system on the same disk", "result": "The reinstall would write heavily to a failing disk and destroy data on the way.", "type": "low" },
      { "id": "c8", "label": "Replace the power supply", "result": "The power rails are steady. A new supply makes no difference to a clicking disk.", "type": "low" },
      { "id": "c9", "label": "Listen to where the clicking comes from", "result": "The clicking comes from the drive, not from a fan.", "type": "useful" }
    ],
    "areas": [
      "The hard disk drive",
      "The memory",
      "The power supply",
      "The processor cooler and the fan that blows air across it"
    ],
    "area": 0,
    "faults": [
      "The hard disk is failing with growing bad sectors and a mechanical fault",
      "The memory is failing",
      "The operating system needs updating because the old version has slowed down over the years",
      "The power supply is undersized"
    ],
    "fault": 0,
    "repairs": [
      "Copy the data to safe storage, then replace the drive and restore the system and data",
      "Reinstall the operating system on the old disk and see whether it runs more quickly and then carry on using the same disk",
      "Run the repair tool on the failing disk first",
      "Replace the memory"
    ],
    "repair": 0,
    "verify": [
      "Boot from the new drive, open the restored stock records, check the new drive's health data and set up a regular backup",
      "Boot the PC and look at the desktop",
      "Check the speed of start-up",
      "Switch off and leave"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The clicking comes from the drive and the health report names it. The disk is the area to deal with.",
      "fault": "Rising reallocated and pending sectors with clicking are signs of a failing drive. Slowness and freezes follow as it retries reads.",
      "repair": "Save the data first with as little stress on the disk as you can, then replace the drive. A heavy repair or reinstall on a failing disk can destroy the data.",
      "verify": "Open the restored records to prove they are intact, check the new drive's health and set up backups. Seeing the desktop does not prove the data came across."
    }
  }
]);

OMM.registerCases("m09", [
  {
    "id": "m09-d1",
    "title": "Print queue stuck on one computer",
    "level": 1,
    "lesson": "m09-l6",
    "report": "One office computer cannot print. A document has been sitting in the print queue for an hour showing Printing, and nothing else will go through. Other staff print to the same network printer without trouble. The user has tried restarting the word processor twice.",
    "checks": [
      { "id": "c1", "label": "Ask whether other people can print to the same printer", "result": "Colleagues print normally to the same printer. The printer and the network are fine.", "type": "key" },
      { "id": "c2", "label": "Open the print queue and look at the status of the first job", "result": "The first job shows Printing but its size does not change. Jobs behind it are waiting.", "type": "key" },
      { "id": "c3", "label": "Try to cancel the stuck job from the queue", "result": "The cancel command is accepted but the job stays in the list. The job cannot be removed from the queue normally.", "type": "key" },
      { "id": "c4", "label": "Stop the print spooler service, clear the spool folder and start the service again", "result": "The stuck job is gone. The service restarts normally and the queue is empty.", "type": "key" },
      { "id": "c5", "label": "Check that the printer shows as the default and is not paused", "result": "The printer is online and set as default. It is not paused.", "type": "useful" },
      { "id": "c6", "label": "Reinstall the operating system", "result": "A reinstall would remove the customer's files and settings. It is far more than the fault needs.", "type": "low" },
      { "id": "c7", "label": "Replace the network cable of the computer", "result": "The computer is on the network and reaches other services. The cable is fine.", "type": "low" },
      { "id": "c8", "label": "Delete files from the system folder at random to free space", "result": "Unsafe: deleting system files at random can stop the computer from starting. Only remove the stuck job files.", "type": "unsafe" },
      { "id": "c9", "label": "Print a test page from the printer's properties after the fix", "result": "The test page prints normally.", "type": "useful" }
    ],
    "areas": [
      "The print spooler on this computer",
      "The printer hardware",
      "The network switch",
      "The word processor"
    ],
    "area": 0,
    "faults": [
      "A corrupted job is stuck in the spooler and blocks the queue",
      "The printer is out of paper",
      "The network cable is unplugged",
      "The printer driver is the wrong version for another model that was installed by an update last week"
    ],
    "fault": 0,
    "repairs": [
      "Stop the spooler, clear the spool folder files and restart the service",
      "Reinstall the operating system",
      "Replace the printer",
      "Rewire the network cable"
    ],
    "repair": 0,
    "verify": [
      "Print a test page and then a real document, and confirm the queue empties",
      "Check the queue is empty",
      "Print nothing and watch",
      "Restart the computer"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Other computers print to the same printer, so the problem is local. The spooler on this computer holds the stuck job.",
      "fault": "A job that shows Printing but never finishes and cannot be cancelled is a corrupt spool file. It blocks everything behind it.",
      "repair": "Stop the spooler, clear its spool files and restart it. This removes only the print jobs, so no personal files are lost.",
      "verify": "Print a test page and a real document, then confirm the queue empties. A quick look at an empty queue does not prove that new jobs will pass."
    }
  },
  {
    "id": "m09-d2",
    "title": "Scanner stopped after a driver update",
    "level": 2,
    "lesson": "m09-l4",
    "report": "A multifunction device printed and scanned from a customer's laptop until yesterday. After an automatic driver update overnight, printing still works but the scan button now gives an error saying no scanner was found. The device is on the network and the panel works.",
    "checks": [
      { "id": "c1", "label": "Create a restore point or note the current driver version before changing anything", "result": "A restore point is created and the driver version is written in the notes. You can undo what you do.", "type": "key" },
      { "id": "c2", "label": "Open the device manager and look at the scanner entry", "result": "The scanner entry shows a warning. The driver date is from last night.", "type": "key" },
      { "id": "c3", "label": "Check the event log around the time of the update", "result": "The log shows the driver update installed at 2 am and a scanner service failing to start afterwards.", "type": "key" },
      { "id": "c4", "label": "Roll the scanner driver back to the previous version", "result": "After the rollback the warning goes away and the scan application finds the scanner.", "type": "key" },
      { "id": "c5", "label": "Print a test page to confirm printing is unaffected", "result": "The test page prints. Printing uses a separate driver.", "type": "useful" },
      { "id": "c6", "label": "Replace the multifunction device", "result": "The device worked until the update and is not faulty.", "type": "low" },
      { "id": "c7", "label": "Reset the laptop to factory settings", "result": "A factory reset would wipe the customer's files and is far beyond what the fault needs.", "type": "low" },
      { "id": "c8", "label": "Turn off the antivirus and download a driver from an unknown website", "result": "Unsafe: drivers from unknown sites may contain malware. Use the manufacturer's site and keep protection on.", "type": "unsafe" },
      { "id": "c9", "label": "Ping the device and open its web page", "result": "The device answers and its web page opens. The network link is fine.", "type": "useful" }
    ],
    "areas": [
      "The scanner driver on the laptop",
      "The device hardware, including its scanner lamp and motor",
      "The network",
      "The print driver"
    ],
    "area": 0,
    "faults": [
      "The overnight update installed a scanner driver that does not work with this device",
      "The scanner lamp has failed",
      "The network cable is faulty",
      "The laptop has run out of disk space, so the scanner software cannot save its files"
    ],
    "fault": 0,
    "repairs": [
      "Roll back the driver, then block automatic updating of that driver until a fix is released",
      "Replace the multifunction device",
      "Reinstall the laptop operating system",
      "Install an unverified driver from a forum post that says it fixed the same problem for others"
    ],
    "repair": 0,
    "verify": [
      "Scan a document, check the file opens, and confirm printing still works",
      "Open the scan program and look at the window to see whether a scanner is now listed",
      "Print a page",
      "Restart the laptop"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The warning on the scanner entry and the log timing tie the fault to the scanner driver changed overnight. Printing is separate and still works.",
      "fault": "The scanner worked until the update, the device answers on the network, and the log shows the service failing after the install. The new driver is the cause.",
      "repair": "Roll back to the working driver. Block automatic updating of that driver until a fixed version is released, otherwise the update will return.",
      "verify": "Scan a real document and open the file. Check that printing still works too, because the change should not have affected it."
    }
  },
  {
    "id": "m09-d3",
    "title": "PC will not boot after a power cut",
    "level": 3,
    "lesson": "m09-l6",
    "report": "A small business PC fails to start after a power cut. It shows a boot error and repeatedly offers to run a repair, then loops. The owner says the accounts files are only on this PC and the last backup was months ago. The disk makes no unusual noise.",
    "checks": [
      { "id": "c1", "label": "Ask what data is on the PC and when it was last backed up", "result": "The accounts and customer records are on this disk only. The last backup is four months old.", "type": "key" },
      { "id": "c2", "label": "Check the disk health report from a recovery environment", "result": "The disk reports healthy. There are no reallocated sectors.", "type": "key" },
      { "id": "c3", "label": "Boot from a recovery USB drive and copy the customer's data to external storage before repairing", "result": "The data copies without errors. A full copy of the data is now safe.", "type": "key" },
      { "id": "c4", "label": "Run the file system check on the system volume", "result": "The check finds and repairs file system errors in the boot area. A power cut interrupted a write.", "type": "key" },
      { "id": "c5", "label": "Look at the boot configuration", "result": "The boot entry is intact and points to the right disk.", "type": "useful" },
      { "id": "c6", "label": "Format the disk and reinstall the operating system immediately", "result": "Unsafe for the customer's data: formatting destroys the accounts, which were not backed up.", "type": "unsafe" },
      { "id": "c7", "label": "Replace the motherboard", "result": "The motherboard starts and loads the boot loader. It is not the problem.", "type": "low" },
      { "id": "c8", "label": "Replace the memory modules", "result": "The memory test passes. New memory makes no difference.", "type": "low" },
      { "id": "c9", "label": "Check event logs after the repair boots", "result": "The log shows an unclean shutdown event at the time of the power cut.", "type": "useful" }
    ],
    "areas": [
      "File system on the system disk",
      "The memory",
      "The motherboard",
      "The power supply unit"
    ],
    "area": 0,
    "faults": [
      "Corrupted file system structures from a write interrupted by the power cut",
      "A failed hard disk drive with bad sectors that has stopped the computer from starting",
      "A faulty processor",
      "A broken graphics card"
    ],
    "fault": 0,
    "repairs": [
      "Copy the data first, then repair the file system with the check tool and restart",
      "Format and reinstall at once",
      "Replace the disk without a backup",
      "Replace the motherboard"
    ],
    "repair": 0,
    "verify": [
      "Boot normally, confirm the data opens correctly, run the disk health check again and set up a regular backup",
      "Boot once and look at the desktop",
      "Check the network connection",
      "Leave it running overnight"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The disk is healthy, the board loads the boot loader and the memory passes. The damage is to the file system written during the power cut.",
      "fault": "An interrupted write corrupts file system structures. The check tool found and repaired errors, and the disk health report is clean.",
      "repair": "Always copy the customer's data to safe storage before repairing, because a repair can fail and the data is not backed up. Formatting would destroy it.",
      "verify": "Boot normally, open real files to prove the data is intact, recheck disk health and set up a backup so one power cut can no longer cost four months of work."
    }
  }
]);

OMM.registerModule({
  "id": "m11",
  "summary": "Identify PC components, assemble and test a system, diagnose common hardware faults, protect customer data, plan safe upgrades and carry out preventive maintenance and handover.",
  "outcomes": [
    "Describe the job of each main PC component and the interface it uses, including processor, memory, storage and power supply.",
    "Assemble a PC in a safe order using ESD precautions and set up the firmware before installing the operating system.",
    "Diagnose a no-power, no-display, boot-loop or overheating fault using POST signals, swap testing and simple measurements.",
    "Compare hard drives and solid-state drives, calculate usable RAID capacity and explain a sound backup plan.",
    "Check compatibility before an upgrade and explain the risks of firmware and driver updates.",
    "Carry out preventive maintenance, run an acceptance test and complete a handover record for the customer."
  ],
  "cheatsheet": [
    "RAM is volatile: it loses its contents when power is off. Drives keep data.",
    "Memory bandwidth = transfer rate (MT/s) × 8 bytes for a 64-bit channel. DDR4-3200 gives 25,600 MB/s.",
    "ATX supply tolerance is ±5%: +12 V must stay between 11.4 V and 12.6 V.",
    "Beep and light codes differ by firmware maker. Always check the board manual.",
    "Swap one part at a time. Two changes at once tell you nothing.",
    "RAID is not a backup. Use 3 copies, on 2 kinds of media, with 1 copy off site.",
    "RAID 5 usable space = (number of drives - 1) × drive size. It survives one failed drive.",
    "Drive makers use 1 TB = 1,000,000,000,000 bytes. The OS shows about 931 GiB.",
    "Never overwrite-erase an SSD and trust it. Use secure erase or cryptographic erase, then verify.",
    "Never open a power supply case. Capacitors inside can hold a dangerous charge."
  ],
  "lessons": [
    {
      "title": "PC architecture",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson names the main parts of a personal computer, explains what each one does and shows how they connect. You need this map before you can build, test or repair any PC."
        },
        {
          "t": "p",
          "text": "A **microcomputer** is a small computer built around a single **processor**. Desktop PCs, laptops and the computers inside many office machines all follow the same basic plan."
        },
        {
          "t": "h",
          "text": "The main components"
        },
        {
          "t": "ul",
          "items": [
            "The **processor** (CPU) runs program instructions. Speed is given in GHz. Most modern processors have several **cores**, which are separate processing units on one chip.",
            "**RAM** (random access memory) holds the programs and data in use right now. It is **volatile**, which means it loses its contents when power is removed.",
            "The **motherboard** is the main circuit board. It holds the processor socket, memory slots, expansion slots, drive connectors and the firmware chip.",
            "**Storage** keeps data when the power is off. It is a hard disk drive (HDD) or a solid-state drive (SSD).",
            "The **power supply unit** (PSU) changes mains AC into the low DC voltages the parts need, mainly +3.3 V, +5 V and +12 V."
          ]
        },
        {
          "t": "diagram",
          "name": "pc-architecture"
        },
        {
          "t": "p",
          "text": "The **firmware** on the motherboard, called BIOS or UEFI, starts the computer. It checks the hardware, then hands control to the operating system on the boot drive."
        },
        {
          "t": "h",
          "text": "Buses and interfaces"
        },
        {
          "t": "p",
          "text": "A **bus** is a set of connections that carry data between parts. An **interface** is the agreed connector and signal rules for one kind of link. Parts only work together when they share an interface."
        },
        {
          "t": "table",
          "head": [
            "Interface",
            "Typical use",
            "Note"
          ],
          "rows": [
            [
              "SATA",
              "HDDs and 2.5 inch SSDs",
              "SATA III runs at 6 Gbit/s, about 600 MB/s of data"
            ],
            [
              "PCIe",
              "Graphics cards, NVMe SSDs, network cards",
              "Slots come in x1, x4, x8 and x16 sizes; a smaller card fits a larger slot"
            ],
            [
              "M.2",
              "Small SSD cards, Wi-Fi cards",
              "A slot may carry SATA, PCIe or both; check the board manual"
            ],
            [
              "USB",
              "Keyboards, mice, printers, storage",
              "Hot-pluggable: connect and remove with the PC on"
            ],
            [
              "DIMM slot",
              "RAM modules",
              "DDR3, DDR4 and DDR5 have different notches and do not fit each other"
            ]
          ],
          "caption": "Common PC interfaces"
        },
        {
          "t": "h",
          "text": "How fast can memory move data?"
        },
        {
          "t": "p",
          "text": "Memory modules are labelled with a transfer rate in MT/s (million transfers per second). A standard memory channel is 64 bits wide, which is 8 bytes."
        },
        {
          "t": "formula",
          "text": "bandwidth (MB/s) = transfer rate (MT/s) × 8 bytes",
          "caption": "Peak data rate of one 64-bit memory channel"
        },
        {
          "t": "example",
          "title": "Peak bandwidth of DDR4-3200",
          "steps": [
            "The transfer rate is 3200 MT/s.",
            "One channel moves 8 bytes per transfer.",
            "3200 × 8 = 25,600 MB/s.",
            "This is the best case. Real programs reach less. This is why the module is also sold as PC4-25600."
          ]
        },
        {
          "t": "example",
          "title": "Memory size in MiB",
          "steps": [
            "A technician must enter the amount of RAM in MiB. The module is 8 GiB.",
            "1 GiB = 1024 MiB.",
            "8 × 1024 = 8192 MiB."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "RAM is fast and forgets everything at power-off. Storage is slower and remembers. Many faults come from confusing the two."
        }
      ],
      "id": "m11-l1"
    },
    {
      "title": "Assembling and installing components",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson shows a safe order for building a PC, from ESD protection to installing the operating system. A fixed routine prevents damaged parts and missed connections."
        },
        {
          "t": "h",
          "text": "Protect the parts and yourself"
        },
        {
          "t": "p",
          "text": "**ESD** (electrostatic discharge) is a sudden spark of static electricity. You can feel it only above about 3000 V, but chips can be damaged by far less. Damage is often hidden and shows up later as odd faults."
        },
        {
          "t": "ul",
          "items": [
            "Wear an anti-static wrist strap clipped to bare metal on the case, or work on a grounded anti-static mat.",
            "Keep parts in their anti-static bags until you fit them.",
            "Hold boards and memory by their edges. Do not touch gold contacts, chip legs or processor pins.",
            "Work on a clean, hard, uncluttered bench. Avoid carpet and loose synthetic clothing."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Switch off and unplug the PC before you open it. Never open a power supply case. Its capacitors can hold a dangerous charge even when unplugged. A faulty supply is replaced, not repaired by a PC technician."
        },
        {
          "t": "h",
          "text": "Order of assembly"
        },
        {
          "t": "ol",
          "items": [
            "Check that the parts are compatible: socket, memory type, case size and power.",
            "Fit the processor on the motherboard outside the case. Match the corner marker on the chip to the one on the socket. Never force it.",
            "Apply a pea-sized amount of **thermal paste** if the cooler has none. Paste fills tiny gaps between the chip and the cooler so heat can pass across. Then fit the cooler and connect its fan cable.",
            "Press the memory modules into their slots until the clips click. Use the slot pairs the manual recommends.",
            "Fit the motherboard in the case on the correct standoffs. Standoffs are small posts that keep the board off the metal.",
            "Fit the drives and the power supply.",
            "Connect the 24-pin motherboard power, the 4-pin or 8-pin processor power, drive power and data cables, the front-panel connectors and fans.",
            "Fit expansion cards and connect any extra power cables they need.",
            "Check inside for loose screws and tools, route cables clear of fans, then close the case."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Fit the processor, cooler and memory on the board before you put it in the case. You can see and reach everything, and you press down on a firm surface."
        },
        {
          "t": "h",
          "text": "Firmware setup and operating system"
        },
        {
          "t": "p",
          "text": "Switch on with a monitor, keyboard and drive connected. Enter the firmware setup screen, using the key shown on the start screen. Check that the processor and the full amount of RAM are detected."
        },
        {
          "t": "ul",
          "items": [
            "Set the correct date and time.",
            "Set the boot order so the installer media or the new drive is first.",
            "Check the drive is listed. Note that firmware setup options vary by board; check the board manual.",
            "Save and exit."
          ]
        },
        {
          "t": "p",
          "text": "Then install the operating system from the installer, partition and format the drive, and install the chipset, graphics and network drivers. Finally run all available system updates and test the machine."
        },
        {
          "t": "example",
          "title": "Checking that memory is detected",
          "steps": [
            "You fit two 8 GiB modules. Expected total: 2 × 8 = 16 GiB.",
            "Firmware setup shows 8 GiB.",
            "Half the memory is missing. Power off, unplug, and reseat both modules until the clips click.",
            "If the total is still 8 GiB, move each module to another slot in turn to find the faulty module or slot."
          ]
        }
      ],
      "id": "m11-l2"
    },
    {
      "title": "Diagnosing hardware faults",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson teaches a calm, ordered method for finding PC hardware faults, using start-up signals, swap testing and simple measurements. Random part replacement wastes time and the customer's money."
        },
        {
          "t": "h",
          "text": "Start with the power-on self-test"
        },
        {
          "t": "p",
          "text": "When you switch on, the firmware runs the **POST** (power-on self-test). It checks the processor, memory, graphics and other basics. If a fault stops the test, the board reports it with beeps, a display code or status lights."
        },
        {
          "t": "p",
          "text": "Codes differ between firmware makers and between boards. Never trust a table from memory. Look up the code in the motherboard manual."
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely causes",
            "First checks"
          ],
          "rows": [
            [
              "No lights, no fans",
              "No mains, PSU switch off, dead PSU, loose power header",
              "Mains socket, cord, PSU switch, 24-pin and processor power plugs"
            ],
            [
              "Fans spin, no display, no beeps",
              "Loose memory, bad graphics card, bad display cable",
              "Reseat memory and graphics card, try another cable or monitor"
            ],
            [
              "Repeated beeps or error light",
              "Memory, graphics or processor fault named in the manual",
              "Look up the code, then reseat or swap the named part"
            ],
            [
              "Date resets after power-off",
              "Flat CMOS battery",
              "Measure the coin cell, usually 3 V when good"
            ],
            [
              "Shuts down under load",
              "Overheating, weak PSU",
              "Cooler seating, dust, fan, temperatures, PSU rails"
            ],
            [
              "Restarts at the logo",
              "Corrupt update, failing drive, bad memory",
              "Recovery mode, drive health, memory test"
            ]
          ],
          "caption": "Symptom to cause guide"
        },
        {
          "t": "h",
          "text": "Swap testing and measuring"
        },
        {
          "t": "p",
          "text": "**Swap testing** means replacing one suspect part with a known-good part and seeing if the fault moves or disappears. Change only one thing at a time. If you change two parts, you cannot know which one mattered."
        },
        {
          "t": "p",
          "text": "A **PSU tester** is a plug-in device that shows whether the supply gives correct voltages. The standard ATX supply tolerance is ±5%."
        },
        {
          "t": "example",
          "title": "Is the +12 V rail acceptable?",
          "steps": [
            "The tolerance is 5% of 12 V = 0.05 × 12 = 0.6 V.",
            "Lower limit: 12 - 0.6 = 11.4 V. Upper limit: 12 + 0.6 = 12.6 V.",
            "A meter shows 11.2 V under load. This is below 11.4 V, so the rail is out of tolerance.",
            "Suspect the power supply. Confirm by swapping in a known-good supply."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Take live voltage readings only on the low-voltage DC side, with a PSU tester or the meter probes on the back of a connector. Never open the supply and never measure inside it."
        },
        {
          "t": "h",
          "text": "Memory, drives and heat"
        },
        {
          "t": "ul",
          "items": [
            "**Memory test:** a test program writes patterns to all of RAM and reads them back. Run at least one full pass. Any error means a faulty module or slot. Test modules one at a time to find which.",
            "**Drive health:** SMART is a self-monitoring feature in drives. A rising count of reallocated or pending sectors warns of a failing drive. Back up first, then replace it.",
            "**Heat:** check temperatures in the firmware or a monitoring tool. If a processor gets too hot it slows itself down (**throttling**) and may then shut down. Check dust, fan speed, cooler seating and thermal paste. Temperature limits differ by processor; check the maker's data."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Back up the customer's data before any repair that could touch the drive. A repair that destroys the data is not a repair."
        }
      ],
      "id": "m11-l3"
    },
    {
      "title": "Storage and data protection",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson compares storage types, explains RAID and backups, and describes how to erase drives and handle customer data with care. Data is often worth more than the computer."
        },
        {
          "t": "h",
          "text": "Hard drives and solid-state drives"
        },
        {
          "t": "table",
          "head": [
            "Feature",
            "HDD",
            "SSD"
          ],
          "rows": [
            [
              "How it stores data",
              "Spinning magnetic platters and moving heads",
              "Flash memory chips, no moving parts"
            ],
            [
              "Speed",
              "Slower, especially for many small files",
              "Much faster"
            ],
            [
              "Knocks and vibration",
              "Can be damaged, especially when running",
              "Tolerates them well"
            ],
            [
              "Cost per gigabyte",
              "Usually lower",
              "Usually higher"
            ],
            [
              "Warning signs",
              "Clicking, slow reads, bad sectors",
              "Sudden failure is possible; check SMART data"
            ]
          ],
          "caption": "HDD compared with SSD"
        },
        {
          "t": "p",
          "text": "Drive makers count in decimal: 1 TB is 1,000,000,000,000 bytes. Operating systems often count in binary: 1 GiB is 1,073,741,824 bytes. So the drive looks smaller than its label."
        },
        {
          "t": "example",
          "title": "Why a 1 TB drive shows about 931 GiB",
          "steps": [
            "Capacity in bytes: 1,000,000,000,000.",
            "Divide by 1,073,741,824 bytes per GiB.",
            "1,000,000,000,000 ÷ 1,073,741,824 ≈ 931.3 GiB.",
            "Nothing is missing. The two sides use different units."
          ]
        },
        {
          "t": "h",
          "text": "RAID in simple terms"
        },
        {
          "t": "p",
          "text": "**RAID** joins several drives so they work as one. Some levels give speed, some give protection against a drive failure."
        },
        {
          "t": "table",
          "head": [
            "Level",
            "How it works",
            "Usable space",
            "Survives"
          ],
          "rows": [
            [
              "RAID 0",
              "Data split across drives",
              "All drives added together",
              "Nothing; one failure loses all"
            ],
            [
              "RAID 1",
              "Two drives hold the same data",
              "Size of one drive",
              "One drive failing"
            ],
            [
              "RAID 5",
              "Data and parity spread over 3 or more drives",
              "(drives - 1) × drive size",
              "One drive failing"
            ]
          ],
          "caption": "Common RAID levels"
        },
        {
          "t": "example",
          "title": "Usable space in RAID 5",
          "steps": [
            "A server has four 2 TB drives in RAID 5.",
            "One drive's worth of space holds parity: usable drives = 4 - 1 = 3.",
            "Usable space = 3 × 2 TB = 6 TB."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "RAID is not a backup. It does not protect against deleted files, viruses, theft or fire. Mirrored drives copy a mistake instantly."
        },
        {
          "t": "h",
          "text": "Backups and erasing"
        },
        {
          "t": "p",
          "text": "A good rule is **3-2-1**: three copies of the data, on two different kinds of media, with one copy kept away from the site. Test a restore sometimes. A backup you have never restored is only a hope."
        },
        {
          "t": "p",
          "text": "Copy time is data size divided by speed. Copying 450 GB at 150 MB/s: 450 GB = 450,000 MB; 450,000 ÷ 150 = 3000 s; 3000 ÷ 60 = 50 minutes."
        },
        {
          "t": "p",
          "text": "Deleting files or quick formatting does not erase data. For an HDD, overwrite the whole drive with an erase tool. For an SSD, overwriting is unreliable, so use the drive's secure erase or cryptographic erase function, then verify. If that is not possible, destroy the drive physically."
        },
        {
          "t": "h",
          "text": "Customer data"
        },
        {
          "t": "ul",
          "items": [
            "Ask permission before you copy or access anything.",
            "Open only what you must to do the repair. Do not browse photos or documents.",
            "Never share, keep or talk about customer data. Return backups or delete them as agreed, and record that you did."
          ]
        }
      ],
      "id": "m11-l4"
    },
    {
      "title": "Upgrading and updating",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains how to plan an upgrade, check that new parts will work, and handle firmware and driver updates safely. Most upgrade problems are found by checking before you buy."
        },
        {
          "t": "h",
          "text": "Check compatibility first"
        },
        {
          "t": "ul",
          "items": [
            "**Memory:** the board must support the memory generation (DDR3, DDR4 or DDR5), the maximum size and the number of modules.",
            "**Processor:** it must fit the socket and be supported by the chipset and firmware version. A physically matching chip may still not work.",
            "**Storage:** check which connectors and M.2 types the board offers.",
            "**Power:** the supply must give enough total power and have the right connectors.",
            "**Space and cooling:** check case size, cooler height and airflow.",
            "**Operating system:** a 32-bit operating system can address only 2³² bytes, which is 4 GiB. Extra RAM is wasted."
          ]
        },
        {
          "t": "p",
          "text": "Use the board manual and the maker's compatibility lists. Do not guess."
        },
        {
          "t": "example",
          "title": "Is the power supply big enough?",
          "steps": [
            "Estimated peak load: processor 65 W + graphics 150 W + all other parts 50 W = 265 W.",
            "The supply is rated 500 W. Load = 265 ÷ 500 = 0.53, or 53%.",
            "A supply running at around half its rating has comfortable headroom. A rating only just above the load leaves no margin and runs hotter.",
            "Also check connectors: the graphics card may need its own 6-pin or 8-pin power plug."
          ]
        },
        {
          "t": "h",
          "text": "Firmware and driver updates"
        },
        {
          "t": "p",
          "text": "A **firmware update** rewrites the program in the firmware chip. It can add support for a new processor or fix a bug. It also has a real risk. If power fails during the update, the board may not start again."
        },
        {
          "t": "ul",
          "items": [
            "Update only when the release notes fix a fault you have, or a new part needs it. Never update just to be up to date.",
            "Read the maker's instructions and release notes first.",
            "Back up the customer's data and note the current firmware settings.",
            "Use stable power. For a desktop, a UPS (uninterruptible power supply) is wise. For a laptop, connect the charger and a charged battery.",
            "Do not switch off, restart or touch the machine until the update says it is finished."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never interrupt a firmware update. Warn the customer and anyone nearby so nobody unplugs the machine."
        },
        {
          "t": "p",
          "text": "**Driver updates** are less risky, but a bad driver can still cause crashes or a black screen. Create a restore point first and keep the old driver so you can roll back."
        },
        {
          "t": "h",
          "text": "A simple upgrade plan"
        },
        {
          "t": "ol",
          "items": [
            "Ask the customer what problem the upgrade must solve.",
            "Check the current parts and the compatibility limits.",
            "Give the customer a cost and the expected benefit, honestly.",
            "Back up the data.",
            "Fit the upgrade, update drivers, and test.",
            "Record what changed, keep the removed parts or dispose of them as agreed."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A slow computer with an old HDD often gains more from an SSD than from a faster processor. Find the real bottleneck before you quote."
        }
      ],
      "id": "m11-l5"
    },
    {
      "title": "Preventive maintenance and handover",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers cleaning, heat control, acceptance testing and handing the PC back to the customer with a clear record. Dust and poor records cause many repeat visits."
        },
        {
          "t": "h",
          "text": "Cleaning and heat"
        },
        {
          "t": "p",
          "text": "Dust acts as a blanket. It blocks fans and filters, raises temperatures and shortens the life of parts. Cleaning is the cheapest repair."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Shut down, unplug the mains cord and wait for the lights to go out before you open the case. Wear a dust mask and eye protection when cleaning. Do not blow dust around a room where others work; take the PC to a ventilated place."
        },
        {
          "t": "ul",
          "items": [
            "Hold fan blades still with a soft tool while you use compressed air. A fan spun very fast by air can be damaged.",
            "Use a soft brush and an anti-static or ESD-safe vacuum for loose dust. Do not use an ordinary household vacuum inside a PC, because it can create static.",
            "Clean dust filters, heatsink fins and the air inlets. Check fans spin freely and quietly.",
            "Never spray liquids inside the case. Use only a little approved cleaner on a cloth for outside surfaces.",
            "Check that cables are clear of fans and that all cards and cables are seated."
          ]
        },
        {
          "t": "p",
          "text": "How often to clean depends on the place. A dusty workshop, a shop with open doors or a room with pets needs cleaning more often than a clean air-conditioned office. Look at the dust and set the interval from that."
        },
        {
          "t": "h",
          "text": "Acceptance testing"
        },
        {
          "t": "p",
          "text": "An **acceptance test** proves the machine works properly before you hand it back. Do not stop at seeing the desktop."
        },
        {
          "t": "ol",
          "items": [
            "Start from cold. Watch the POST and boot time.",
            "Check that firmware shows all the memory and drives.",
            "Run a memory test and a drive health check.",
            "Run the machine under load for a while and watch temperatures.",
            "Test every port, the network connection, sound, and the display.",
            "Print a test page to the customer's printer if they use one.",
            "Check the system date, updates and anti-malware."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Record temperatures, firmware version and drive health on the day you hand over. You will have a baseline to compare with next time."
        },
        {
          "t": "h",
          "text": "Documenting and showing the customer"
        },
        {
          "t": "p",
          "text": "Write a service record: customer, date, fault reported, tests done, parts changed, readings, data backed up and returned, and the final result. Note serial numbers of parts you fitted and removed."
        },
        {
          "t": "p",
          "text": "Then show the customer the working machine. Explain in plain words what was wrong and what you did. Tell them what care it needs, such as keeping vents clear and keeping their own backup. Ask them to check their files and sign the record."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Handover is part of the repair. A fixed PC that the customer does not trust or understand will come back as a complaint."
        }
      ],
      "id": "m11-l6"
    }
  ],
  "practical": {
    "title": "Open a PC, identify components, run diagnostics and complete a health-check report",
    "objective": "Safely open a training PC, identify and record its main components, run basic diagnostics and complete a health-check report.",
    "time": "60 minutes",
    "tools": [
      "Training PC (not belonging to a customer)",
      "Anti-static wrist strap or mat",
      "Screwdriver set",
      "Digital multimeter",
      "Bootable memory and drive test tools on USB, or the operating system's own tools",
      "Blank health-check report sheet and pen"
    ],
    "safety": [
      "Use only a training PC that your instructor has approved. Do not use a customer's machine or data.",
      "Shut down, switch off at the PSU, unplug the mains cord and wait one minute before you open the case.",
      "Never open the power supply unit or touch anything inside it.",
      "Wear the anti-static strap, clipped to bare metal on the case. Hold boards and memory by their edges.",
      "Mind sharp case edges and keep heatsinks away from your face. Put screws in a tray.",
      "Do not run diagnostics that erase or write to the drive."
    ],
    "steps": [
      "Shut down the PC, switch off the PSU, unplug the mains cord and note the serial number from the label.",
      "Fit your wrist strap and remove the side panel. Photograph the inside before touching anything.",
      "Identify and write down the motherboard model, processor, cooler and fan.",
      "Count the memory modules. Read the size and type printed on the labels and write them down.",
      "Identify each drive. Write its type (HDD or SSD), interface and capacity.",
      "Find the power supply label. Write down its rated power. Do not open the supply.",
      "Check for dust on fans, filters and heatsinks. Rate it as light, medium or heavy.",
      "Check that cables and cards are firmly seated. Refit the side panel.",
      "Plug in, switch on, and enter firmware setup. Compare what it shows with what you recorded.",
      "Run the memory test for one full pass and record the result.",
      "Check the drive's SMART health data and record the status and any warnings.",
      "Run the PC under load for 10 minutes and note the processor temperature.",
      "Complete the health-check report with findings and a recommendation, then shut down and unplug."
    ],
    "checks": [
      "I can name each main component and the interface it uses.",
      "I can open and close a PC safely with ESD protection.",
      "I can say whether the firmware sees all the memory and drives.",
      "I can read a drive health report and say whether it is a warning.",
      "I can write a clear health-check report that a customer would understand."
    ]
  },
  "quiz": [
    {
      "id": "m11-q01",
      "q": "Which component loses all of its contents when the power is switched off?",
      "options": [
        "RAM",
        "A solid-state drive",
        "A hard disk drive",
        "The motherboard firmware chip"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m11-l1",
      "explain": "RAM is volatile, so it needs power to hold data. Drives and the firmware chip keep their contents without power; an SSD is the tempting wrong answer because it uses memory chips, but those chips are non-volatile flash."
    },
    {
      "id": "m11-q02",
      "q": "Why will a DDR4 module not fit into a DDR3 slot?",
      "options": [
        "The module is physically too long for the slot, so it cannot be pushed in",
        "The notch position and the electrical design are different",
        "DDR4 needs a separate power cable plugged in to the module itself",
        "Only the clock speed differs, and the board simply slows the module down to match"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m11-l1",
      "explain": "Each memory generation has its own notch position and signalling, so they are not interchangeable. Speed is not the issue: the module simply cannot be fitted."
    },
    {
      "id": "m11-q03",
      "q": "What is the peak data rate of one 64-bit memory channel running at 3200 MT/s?",
      "options": [
        "3,200 MB/s",
        "12,800 MB/s",
        "25,600 MB/s",
        "204,800 MB/s"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m11-l1",
      "explain": "A 64-bit channel moves 8 bytes per transfer: 3200 × 8 = 25,600 MB/s. Multiplying by 64 treats bits as bytes, and 3,200 forgets the bus width entirely."
    },
    {
      "id": "m11-q04",
      "q": "A module is 16 GiB. How many MiB is that?",
      "options": [
        "16,000 MiB",
        "1,638 MiB",
        "163,840 MiB",
        "16,384 MiB"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m11-l1",
      "explain": "1 GiB is 1024 MiB, so 16 × 1024 = 16,384 MiB. Using 1000 gives 16,000, which is the decimal habit that does not apply to binary units."
    },
    {
      "id": "m11-q05",
      "q": "Which interface is used by most M.2 NVMe SSDs to talk to the processor?",
      "options": [
        "Parallel IDE",
        "VGA",
        "PCIe",
        "RS-232 serial"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m11-l1",
      "explain": "NVMe drives communicate over PCIe lanes, which is why they are faster than SATA drives. IDE, VGA and RS-232 are old or unrelated interfaces."
    },
    {
      "id": "m11-q06",
      "q": "A technician has a PCIe x1 network card and only a free x16 slot. What happens?",
      "options": [
        "The card does not fit because the slot is longer",
        "The card works only at one quarter speed",
        "The card works only if the board is set to legacy mode",
        "The card fits and works, using one lane of the slot"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m11-l1",
      "explain": "PCIe cards fit larger slots and use the lanes they need. The extra length of the slot is simply unused, and no speed penalty beyond what an x1 card has by design."
    },
    {
      "id": "m11-q07",
      "q": "Which power connector mainly feeds the processor's voltage regulators?",
      "options": [
        "The 4-pin or 8-pin processor power connector",
        "The SATA data cable that runs to the drive bays",
        "The front-panel header that carries the switch and light wires",
        "The USB header that feeds the ports on the front of the case"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m11-l1",
      "explain": "The extra 4-pin or 8-pin connector gives the processor circuits +12 V directly. A SATA data cable carries no power and the front-panel header only carries switch and light signals."
    },
    {
      "id": "m11-q08",
      "q": "What is the main purpose of an anti-static wrist strap?",
      "options": [
        "To protect you from an electric shock if you touch mains wiring inside the case",
        "To keep you and the part at the same electrical potential so no spark passes",
        "To remove dust from the board and the connectors as you work",
        "To discharge the power supply capacitors before you open the case"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m11-l2",
      "explain": "The strap equalises charge between you and the equipment. It is not a shock protection device and it does not discharge a power supply."
    },
    {
      "id": "m11-q09",
      "q": "Why should you avoid touching the pins of a processor or its socket?",
      "options": [
        "They carry mains voltage that can give a shock",
        "They bend easily and skin oil or static can damage them",
        "They are still hot after the machine has been switched off, so they burn skin",
        "The thermal paste reacts with them and corrodes the contacts"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m11-l2",
      "explain": "Pins are fine and bend easily, and static can harm the chip. They carry low voltages, not mains."
    },
    {
      "id": "m11-q10",
      "q": "Why do you fit the processor, cooler and memory on the board before putting it in the case?",
      "options": [
        "Access is easier and you press on a firm surface",
        "The metal case holds a static charge that damages them as they are fitted",
        "The firmware cannot detect parts that are fitted after the board is installed",
        "The warranty only stays valid if the parts go on in that order"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m11-l2",
      "explain": "Outside the case you can see the socket and press evenly. Parts fitted later work just as well, so firmware detection is not the reason."
    },
    {
      "id": "m11-q11",
      "q": "After a build, two 8 GiB modules are fitted but firmware shows 8 GiB. What is the most likely cause?",
      "options": [
        "The operating system is not installed yet, so only half the memory is reported",
        "Firmware always reports only half of the installed memory at this stage",
        "The processor is overclocked, which disables one of the two modules",
        "One module is not fully seated or is in the wrong slot"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m11-l2",
      "explain": "Two 8 GiB modules should show 16 GiB. Half missing points to a module that is not clicked in. The operating system is not involved at firmware level."
    },
    {
      "id": "m11-q12",
      "q": "What does thermal paste do?",
      "options": [
        "It glues the cooler to the processor so the two cannot come apart",
        "It insulates the chip from the cooler to stop heat reaching the fins",
        "It fills tiny gaps so heat passes from the chip to the cooler",
        "It cools the chip directly by evaporating as the processor heats up"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m11-l2",
      "explain": "Surfaces that look flat have microscopic gaps full of air, which conducts heat badly. Paste replaces the air. It is not glue and too much can make things worse."
    },
    {
      "id": "m11-q13",
      "q": "Where is the boot order normally changed?",
      "options": [
        "In the printer driver settings",
        "In the operating system's wallpaper options",
        "On the power supply label",
        "In the firmware setup screen"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m11-l2",
      "explain": "Boot order belongs to the firmware, because it runs before any operating system. The other places have nothing to do with start-up."
    },
    {
      "id": "m11-q14",
      "q": "A PC has spinning fans, no display and a lit memory-error light on the board. What is the most sensible first step?",
      "options": [
        "Reinstall the operating system, then run a memory test from inside it",
        "Replace the processor and cooler in case the board has been damaged",
        "Power off, unplug, reseat the memory and test one module at a time",
        "Update the firmware at once and hope the error light then goes out"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m11-l3",
      "explain": "A memory error light points at memory, and reseating is free. The operating system cannot be the cause because nothing has started yet. Replacing the processor first is costly and unsupported by the evidence."
    },
    {
      "id": "m11-q15",
      "q": "What is POST in the start-up of a PC?",
      "options": [
        "A way to print test pages",
        "A self-test run by the firmware at start-up",
        "A type of backup",
        "A fan control setting"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m11-l3",
      "explain": "The power-on self-test checks the basic hardware before the operating system loads and reports faults with beeps, codes or lights."
    },
    {
      "id": "m11-q16",
      "q": "Why do beep codes need to be looked up in the motherboard manual?",
      "options": [
        "Their meaning depends on the firmware maker and board",
        "They are the same on every machine, so any list of codes will do",
        "They change with the operating system that is installed on the drive",
        "They depend on how loud the speaker on the board happens to be"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m11-l3",
      "explain": "There is no universal beep standard. A pattern for memory on one board may mean something else on another, so check the manual."
    },
    {
      "id": "m11-q17",
      "q": "The +12 V rail reads 11.2 V under load. Tolerance is ±5%. What is the correct conclusion?",
      "options": [
        "It is below the 11.4 V limit, so it is out of tolerance",
        "It is within tolerance because it is within 1 V of 12 V",
        "It is out of tolerance because it must be exactly 12.0 V",
        "It is above the upper limit of 12.6 V"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m11-l3",
      "explain": "5% of 12 V is 0.6 V, so the range is 11.4 V to 12.6 V. 11.2 V is below the lower limit. The rail does not need to be exactly 12.0 V."
    },
    {
      "id": "m11-q18",
      "q": "Why change only one part at a time during swap testing?",
      "options": [
        "To save time on screws and to avoid handling the parts too often",
        "So you know which change fixed or caused the fault",
        "Because two parts cannot be tested together in the same machine",
        "To keep the warranty valid on all of the parts in the machine"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m11-l3",
      "explain": "If two parts change at once and the fault disappears, you cannot know which part was bad. Changing one at a time keeps the evidence clear."
    },
    {
      "id": "m11-q19",
      "q": "Which SMART warning suggests a hard drive is starting to fail?",
      "options": [
        "A low drive temperature reading during normal use of the drive",
        "A short total power-on time shown in the drive's report",
        "A rising count of reallocated or pending sectors",
        "A large drive capacity compared with the older drives in the shop"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m11-l3",
      "explain": "Reallocated and pending sectors mean the drive finds areas it cannot read reliably. A rising count is a warning, so back up and replace the drive."
    },
    {
      "id": "m11-q20",
      "q": "A PC runs fine for ten minutes, then the fan roars and it shuts down. Processor temperature is very high. What should you check first?",
      "options": [
        "The keyboard connection and the cable to the monitor",
        "The size of the hard drive and how full it is",
        "The operating system licence and the date of the last update",
        "Dust, fan speed, cooler seating and thermal paste"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m11-l3",
      "explain": "High heat that rises under load points to cooling. Dust and a loose cooler are the common causes. The other options cannot cause overheating."
    },
    {
      "id": "m11-q21",
      "q": "After an update a PC restarts again and again at the logo. What is the best order of work?",
      "options": [
        "Format the drive straight away and install a fresh copy of the system",
        "Replace the memory without testing, then reinstall the updates again",
        "Boot to recovery mode, back up the data, then roll back the update",
        "Switch it on and off repeatedly until it starts up normally again"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m11-l3",
      "explain": "Protect the data first, then reverse the change. Formatting loses the customer's data and replacing parts without evidence wastes money."
    },
    {
      "id": "m11-q22",
      "q": "Why does an SSD tolerate knocks better than a hard disk drive?",
      "options": [
        "It is always physically larger, so a knock is spread over more metal",
        "It is cooled by liquid, so heat cannot warp the parts",
        "It uses a much thicker metal case around the chips",
        "It has no moving platters or heads"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m11-l4",
      "explain": "A hard drive has spinning platters and moving heads that can be damaged by shocks, especially while running. An SSD stores data in flash chips."
    },
    {
      "id": "m11-q23",
      "q": "A new drive labelled 1 TB (1,000,000,000,000 bytes) shows about 931 GiB. Why?",
      "options": [
        "The label uses decimal units and the operating system uses binary units",
        "About 7% of the capacity is always taken up by the file system on a new drive",
        "The drive is faulty and only half of its memory chips are working",
        "The operating system reserves that space for downloading future updates"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m11-l4",
      "explain": "1,000,000,000,000 ÷ 1,073,741,824 ≈ 931 GiB. The two sides use different units and nothing is missing. A file system uses only a small fraction."
    },
    {
      "id": "m11-q24",
      "q": "Four 2 TB drives are set up as RAID 5. What is the usable capacity?",
      "options": [
        "8 TB",
        "6 TB",
        "4 TB",
        "2 TB"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m11-l4",
      "explain": "RAID 5 gives one drive's space to parity: (4 - 1) × 2 TB = 6 TB. Eight is the raw total, and 4 TB would be RAID 10 or RAID 1 style."
    },
    {
      "id": "m11-q25",
      "q": "Which problem does RAID 1 NOT protect against?",
      "options": [
        "One of the two drives failing completely",
        "A user accidentally deleting a file",
        "One drive developing unreadable sectors",
        "One drive's circuit board failing"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m11-l4",
      "explain": "RAID 1 mirrors changes instantly, including mistakes. It protects against drive failure, not against deletion or viruses, which is why it is not a backup."
    },
    {
      "id": "m11-q26",
      "q": "What does the 3-2-1 backup rule mean?",
      "options": [
        "Three copies, on two kinds of media, with one copy off site",
        "Three backups a day, two weeks apart, with one year of history kept",
        "Three drives, two partitions, one folder holding each of the copies",
        "Three passwords, two accounts, one administrator to look after them"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m11-l4",
      "explain": "The rule spreads the risk. Different media protect against one type of failure and an off-site copy protects against fire or theft."
    },
    {
      "id": "m11-q27",
      "q": "How long does it take to copy 450 GB at a steady 150 MB/s?",
      "options": [
        "30 minutes",
        "75 minutes",
        "5 minutes",
        "50 minutes"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m11-l4",
      "explain": "450 GB = 450,000 MB. 450,000 ÷ 150 = 3000 s, and 3000 ÷ 60 = 50 minutes. The other numbers come from dividing by the wrong unit."
    },
    {
      "id": "m11-q28",
      "q": "A customer wants an old SSD containing business records disposed of. Which is the best method?",
      "options": [
        "Delete the files and empty the recycle bin, then check the free space",
        "Do a quick format, which removes the old records from the drive",
        "Use the drive's secure erase or cryptographic erase, then verify",
        "Overwrite it once with zeros and trust the result of that single pass"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m11-l4",
      "explain": "Deleting and quick formatting leave data recoverable. Overwriting is unreliable on flash because of wear levelling. Use the built-in erase and check, or destroy the drive."
    },
    {
      "id": "m11-q29",
      "q": "While repairing a PC you notice personal photos on the drive. What should you do?",
      "options": [
        "Open them to check that the drive reads files properly before the return",
        "Copy them to your own storage in case they are lost during the repair",
        "Tell colleagues what you saw so that they can avoid that machine",
        "Leave them unopened and access only what the repair needs"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m11-l4",
      "explain": "Customer data is private. Access it only when needed and only with permission, and never copy or discuss it. Checking the drive can be done with tools that do not open personal files."
    },
    {
      "id": "m11-q30",
      "q": "What does RAID 0 provide?",
      "options": [
        "A mirrored copy of all the data on a second drive, so one can fail",
        "Protection against viruses and accidental deletion of important files",
        "More speed and capacity but no protection against a drive failure",
        "Automatic off-site backup of all of the files to a remote server"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m11-l4",
      "explain": "RAID 0 splits data across drives, so if any one fails everything is lost. It is faster but riskier than a single drive."
    },
    {
      "id": "m11-q31",
      "q": "Before adding RAM, which compatibility check matters most?",
      "options": [
        "The size of the monitor and the resolution that it is set to display",
        "The memory type, maximum size and slot count the board supports",
        "The version of the printer driver and the date it was last installed",
        "The keyboard layout and the language chosen at first start-up of Windows"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m11-l5",
      "explain": "The board decides which memory generation, how much and how many modules it supports. The other items have no effect on memory."
    },
    {
      "id": "m11-q32",
      "q": "A system peaks at 265 W. It has a 500 W power supply. At what percentage of the rating is the supply running?",
      "options": [
        "53%",
        "47%",
        "189%",
        "26.5%"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m11-l5",
      "explain": "265 ÷ 500 = 0.53, so 53%. A figure of 47% is the spare capacity, not the load, and 189% inverts the division."
    },
    {
      "id": "m11-q33",
      "q": "What is the main risk of a firmware update?",
      "options": [
        "If power fails during the update, the board may not start again",
        "It always erases the customer's files",
        "It permanently slows the processor",
        "It switches off the operating system licence"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m11-l5",
      "explain": "The firmware chip is being rewritten, and an interruption can leave it unusable. Customer files are not normally affected, which is why the data backup is advice, not a cure."
    },
    {
      "id": "m11-q34",
      "q": "A customer's PC works well and they ask you to update the firmware just to be up to date. What is the best advice?",
      "options": [
        "Always update immediately",
        "Update only if the release notes fix a problem they have or a new part needs it",
        "Never update firmware under any circumstance",
        "Update only when running on battery power"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m11-l5",
      "explain": "An update has a small but real risk, so it needs a reason. Never updating is too strict, and battery power is a risk factor only if it fails during the update."
    },
    {
      "id": "m11-q35",
      "q": "A customer fits 8 GiB of RAM but a 32-bit operating system shows only about 3 GiB usable. Why?",
      "options": [
        "Two of the modules are faulty",
        "The firmware has a bug",
        "A 32-bit system can address only 4 GiB in total, and part is reserved",
        "The slots are the wrong type"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m11-l5",
      "explain": "2³² bytes is 4 GiB. Some of that address space is reserved for hardware, so under 4 GiB shows. A 64-bit operating system solves it."
    },
    {
      "id": "m11-q36",
      "q": "Why create a restore point before updating a driver?",
      "options": [
        "Because the driver cannot install without one",
        "To make the driver install faster",
        "To free disk space",
        "So the system can be rolled back if the new driver causes problems"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m11-l5",
      "explain": "A bad driver can cause crashes or a black screen. A restore point and the old driver let you reverse the change safely."
    },
    {
      "id": "m11-q37",
      "q": "Why hold a case fan still when you use compressed air near it?",
      "options": [
        "The air would blow the blades off",
        "Dust sticks to a stationary fan",
        "Air can spin it far too fast and damage its bearings",
        "Static builds up if it is moving"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m11-l6",
      "explain": "A fan driven by an air jet can overspeed, which damages the bearings. Holding the blades still with a soft tool prevents that."
    },
    {
      "id": "m11-q38",
      "q": "What should you do before opening a PC case to clean it?",
      "options": [
        "Remove only the front panel and leave it plugged in",
        "Switch it off at the keyboard only",
        "Wet the dust with water",
        "Shut down, unplug the mains cord and wait for the lights to go out"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m11-l6",
      "explain": "Switching off with the keyboard leaves the supply live in standby. Unplug so there is no mains inside the case."
    },
    {
      "id": "m11-q39",
      "q": "Which is the best acceptance test before handing back a repaired PC?",
      "options": [
        "Test from cold, check all memory and drives, run under load, test ports and network",
        "Switch it on and check the desktop appears",
        "Ask the customer to test it at home",
        "Check the case is clean"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m11-l6",
      "explain": "A working desktop does not prove the memory, cooling and ports are healthy. A full test finds faults before the customer does."
    },
    {
      "id": "m11-q40",
      "q": "Why record temperatures and firmware version at handover?",
      "options": [
        "Customers like long reports",
        "They give a baseline to compare with at the next visit",
        "They are required to start the warranty",
        "They stop the fans from getting dusty"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m11-l6",
      "explain": "A baseline shows what normal looked like, so you can see if heat or settings have drifted. It does not change the machine itself."
    },
    {
      "id": "m11-q41",
      "q": "A PC sits in a dusty workshop with open doors. How should its cleaning interval compare with an office PC?",
      "options": [
        "The same for all PCs",
        "Shorter, set from the dust seen at each inspection",
        "Longer, because dust protects parts",
        "Never needed with filters fitted"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m11-l6",
      "explain": "Dust builds faster in dirty air. Inspect and set the interval from what you find. Filters help but need cleaning too."
    },
    {
      "id": "m11-q42",
      "q": "Why show the customer the working PC at handover?",
      "options": [
        "To explain what was done and agree that the fault is fixed",
        "To avoid writing a service record",
        "To let them void the warranty",
        "To shorten the testing time"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m11-l6",
      "explain": "Handover builds trust and confirms the result. It supports the service record, not replaces it."
    }
  ],
  "cards": [
    {
      "id": "m11-c01",
      "front": "What does RAM do?",
      "back": "It holds the programs and data in use now. It is fast and volatile, so it loses its contents at power-off.",
      "lesson": "m11-l1"
    },
    {
      "id": "m11-c02",
      "front": "Formula: peak bandwidth of a 64-bit memory channel",
      "back": "bandwidth (MB/s) = transfer rate (MT/s) × 8 bytes. DDR4-3200 gives 25,600 MB/s.",
      "lesson": "m11-l1"
    },
    {
      "id": "m11-c03",
      "front": "What is firmware (BIOS or UEFI)?",
      "back": "The program on the motherboard that starts the computer, tests the hardware and hands over to the operating system.",
      "lesson": "m11-l1"
    },
    {
      "id": "m11-c04",
      "front": "Typical SATA III data rate",
      "back": "6 Gbit/s on the link, about 600 MB/s of data.",
      "lesson": "m11-l1"
    },
    {
      "id": "m11-c05",
      "front": "What is a PCIe x1 card in an x16 slot?",
      "back": "It fits and works. A smaller PCIe card can use a larger slot.",
      "lesson": "m11-l1"
    },
    {
      "id": "m11-c06",
      "front": "What does ESD stand for?",
      "back": "Electrostatic discharge: a sudden spark of static electricity that can silently damage chips.",
      "lesson": "m11-l2"
    },
    {
      "id": "m11-c07",
      "front": "Why use motherboard standoffs?",
      "back": "They hold the board off the metal case so its solder joints and tracks do not touch the metal.",
      "lesson": "m11-l2"
    },
    {
      "id": "m11-c08",
      "front": "How much thermal paste?",
      "back": "A thin, pea-sized amount. Too much can spill and insulate.",
      "lesson": "m11-l2"
    },
    {
      "id": "m11-c09",
      "front": "First step before opening a PC case",
      "back": "Shut down, switch off at the PSU, unplug the mains cord and wait for the lights to go out.",
      "lesson": "m11-l2"
    },
    {
      "id": "m11-c10",
      "front": "What is POST?",
      "back": "Power-on self-test. The firmware checks basic hardware at start-up and signals faults by beeps, codes or lights.",
      "lesson": "m11-l3"
    },
    {
      "id": "m11-c11",
      "front": "No lights and no fans: first checks",
      "back": "Mains socket and cord, PSU rear switch, and the 24-pin and processor power plugs.",
      "lesson": "m11-l3"
    },
    {
      "id": "m11-c12",
      "front": "Date resets after power-off: likely cause",
      "back": "A flat CMOS battery (a coin cell, about 3 V when good).",
      "lesson": "m11-l3"
    },
    {
      "id": "m11-c13",
      "front": "ATX +12 V tolerance",
      "back": "±5%, so the rail must stay between 11.4 V and 12.6 V.",
      "lesson": "m11-l3"
    },
    {
      "id": "m11-c14",
      "front": "What is swap testing?",
      "back": "Replacing one suspect part with a known-good one to see if the fault moves or disappears. Change one part at a time.",
      "lesson": "m11-l3"
    },
    {
      "id": "m11-c15",
      "front": "What is throttling?",
      "back": "A processor slowing itself down because it is too hot, to protect itself.",
      "lesson": "m11-l3"
    },
    {
      "id": "m11-c16",
      "front": "Drive warning sign in SMART data",
      "back": "A rising count of reallocated or pending sectors.",
      "lesson": "m11-l3"
    },
    {
      "id": "m11-c17",
      "front": "HDD versus SSD",
      "back": "An HDD has spinning platters and is cheaper per GB. An SSD has no moving parts and is much faster.",
      "lesson": "m11-l4"
    },
    {
      "id": "m11-c18",
      "front": "RAID 1",
      "back": "Two drives hold the same data. It survives one drive failing. Usable space equals one drive.",
      "lesson": "m11-l4"
    },
    {
      "id": "m11-c19",
      "front": "RAID 5 usable capacity",
      "back": "(number of drives - 1) × drive size. It survives one failed drive.",
      "lesson": "m11-l4"
    },
    {
      "id": "m11-c20",
      "front": "Is RAID a backup?",
      "back": "No. It does not protect against deletion, viruses, theft or fire.",
      "lesson": "m11-l4"
    },
    {
      "id": "m11-c21",
      "front": "3-2-1 backup rule",
      "back": "Three copies, on two kinds of media, with one copy off site.",
      "lesson": "m11-l4"
    },
    {
      "id": "m11-c22",
      "front": "How to erase an SSD",
      "back": "Use secure erase or cryptographic erase, then verify. Overwriting is unreliable on flash.",
      "lesson": "m11-l4"
    },
    {
      "id": "m11-c23",
      "front": "Why does 1 TB show as about 931 GiB?",
      "back": "The maker counts in decimal (10^12 bytes) and the operating system in binary (1 GiB = 1,073,741,824 bytes).",
      "lesson": "m11-l4"
    },
    {
      "id": "m11-c24",
      "front": "Largest memory a 32-bit OS can address",
      "back": "2³² bytes = 4 GiB.",
      "lesson": "m11-l5"
    },
    {
      "id": "m11-c25",
      "front": "Risk of a firmware update",
      "back": "Power loss during the update can leave the board unable to start. Never interrupt it.",
      "lesson": "m11-l5"
    },
    {
      "id": "m11-c26",
      "front": "Check before upgrading RAM",
      "back": "Memory generation, maximum size and number of slots the board supports.",
      "lesson": "m11-l5"
    },
    {
      "id": "m11-c27",
      "front": "What do you do before updating a driver?",
      "back": "Create a restore point and keep the old driver so you can roll back.",
      "lesson": "m11-l5"
    },
    {
      "id": "m11-c28",
      "front": "Safe way to blow dust from fans",
      "back": "Hold the fan blades still. Air can spin them too fast and damage the bearings.",
      "lesson": "m11-l6"
    },
    {
      "id": "m11-c29",
      "front": "What is an acceptance test?",
      "back": "A set of checks (cold start, memory, drives, load, ports, network) proving the PC works before handover.",
      "lesson": "m11-l6"
    },
    {
      "id": "m11-c30",
      "front": "What goes in a PC service record?",
      "back": "Customer, date, fault, tests, parts changed, readings, data handling and final result.",
      "lesson": "m11-l6"
    }
  ]
});

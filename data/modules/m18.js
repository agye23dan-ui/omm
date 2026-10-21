OMM.registerModule({
  "id": "m18",
  "summary": "Describe, inspect and service automated teller machines, including cash dispensers, card readers, encrypting PIN pads, receipt printers and bank links, while following cash-handling and security rules.",
  "outcomes": [
    "Describe the types of ATM and name the main assemblies and the zones a technician may open.",
    "Explain how a dispenser picks, checks and presents notes and what the reject and retract bins hold.",
    "Explain how card readers and encrypting PIN pads protect customer data and how to spot tampering.",
    "Describe how an ATM talks to the bank host and what an electronic journal records.",
    "Calculate note counts and cash values and apply dual control and safe-access rules.",
    "Diagnose common ATM faults, move equipment safely and complete a service record."
  ],
  "cheatsheet": [
    "Cash dispenser pays out only. Cash recycler accepts deposits and can pay the same notes out again.",
    "Upper cabinet holds electronics. The safe holds cash. Technicians do not hold safe access by default.",
    "Dispenser order: pick, measure thickness, check, transport, present, or retract if not taken.",
    "Double-pick detector measures thickness. Doubles go to the reject bin.",
    "The PIN is encrypted inside the PIN pad. You never see it and never record it.",
    "Loose card-slot cover, glue marks or a hidden camera: report it, do not remove it.",
    "Notes remaining = notes loaded − notes dispensed − notes rejected.",
    "Dual control: two authorised people must be present whenever cash is accessed.",
    "An ATM weighs hundreds of kilograms. Never tip it or move it without a plan and enough people."
  ],
  "lessons": [
    {
      "id": "m18-l1",
      "title": "ATM types and main assemblies",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the kinds of automated teller machine you may service, the main assemblies inside one, and which areas of the machine a technician may open."
        },
        {
          "t": "h",
          "text": "What an ATM is"
        },
        {
          "t": "p",
          "text": "An **automated teller machine** (**ATM**) lets a bank customer take out cash and do other banking tasks without a cashier. It joins a computer, a card reader, a keypad, a screen, a printer, a cash dispenser and a safe in one locked cabinet. A network links it to the bank's central computer, called the **host**."
        },
        {
          "t": "h",
          "text": "Types of ATM"
        },
        {
          "t": "ul",
          "items": [
            "**Cash dispenser**: only pays cash out. It is the simplest type.",
            "**Cash recycler**: accepts deposited notes, checks them and can pay the same notes out to a later customer. This means the machine needs refilling less often.",
            "**Deposit machine**: accepts cash or cheques but does not pay out.",
            "**Through-the-wall** machine: the fascia is fitted in an outside wall and the body sits in a secure room. A **lobby** machine stands inside a building such as a shop or a bank branch."
          ]
        },
        {
          "t": "p",
          "text": "A **front-load** machine is serviced and filled from the customer's side. A **rear-load** machine is serviced from behind, in a room the public cannot enter. Rear loading is safer for cash handling because nobody can watch."
        },
        {
          "t": "h",
          "text": "Main assemblies"
        },
        {
          "t": "table",
          "head": [
            "Assembly",
            "What it does"
          ],
          "rows": [
            [
              "Fascia",
              "The front panel with the card slot, keypad, screen, cash outlet and receipt slot."
            ],
            [
              "Encrypting PIN pad",
              "A keypad that encrypts the PIN inside tamper-resistant hardware."
            ],
            [
              "Computer core",
              "A PC-type computer that runs the operating system and the ATM software."
            ],
            [
              "Cash dispenser",
              "Picks notes from cassettes and delivers them to the customer."
            ],
            [
              "Receipt printer",
              "Prints the customer's slip. Some machines also have a journal printer."
            ],
            [
              "Safe",
              "An armoured compartment that holds the cash cassettes and the dispenser."
            ],
            [
              "Power supply",
              "Turns mains into the DC voltages the modules need, often with a battery backup."
            ],
            [
              "Router and alarms",
              "Link to the host. Door, vibration and temperature sensors raise an alarm."
            ]
          ],
          "caption": "Main assemblies of an ATM"
        },
        {
          "t": "diagram",
          "name": "atm-layout"
        },
        {
          "t": "note",
          "kind": "key",
          "text": "An ATM has two zones. The upper cabinet holds the electronics and is the area you usually service. The safe holds the cash and is opened only by people the bank has authorised."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "An ATM is heavy, often several hundred kilograms. Never tip it, push it or lift it without the right equipment and enough people. Check the manufacturer's service manual for the weight and the approved lifting points."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Learn the layout of one machine well. Open the manual diagram, find each assembly on the real machine and trace the cables between them."
        }
      ]
    },
    {
      "id": "m18-l2",
      "title": "How the cash dispenser works",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how a dispenser picks, checks and presents notes, what the cassettes and bins are for, and the common causes of dispensing faults."
        },
        {
          "t": "h",
          "text": "From cassette to customer"
        },
        {
          "t": "ol",
          "items": [
            "The host approves the request and the ATM works out how many notes of each denomination to pay.",
            "A **picker** takes notes one at a time from the cassette. Designs use a vacuum cup, a friction roller, or both.",
            "A **thickness sensor** (also called a double-pick detector) measures each note. Two notes stuck together are thicker and are sent to the reject bin.",
            "Other sensors check the length of each note. Some machines check further features.",
            "Good notes travel along the **transport**, a path of belts and rollers, and are gathered into a stack.",
            "The **presenter** pushes the stack out through the shutter for the customer to take.",
            "If the customer does not take the notes in the time allowed, the dispenser pulls them back into the **retract bin** and the machine records the event."
          ]
        },
        {
          "t": "diagram",
          "name": "note-dispenser-path"
        },
        {
          "t": "h",
          "text": "Cassettes and bins"
        },
        {
          "t": "ul",
          "items": [
            "**Cash cassette**: a lockable box that holds notes of one denomination. The ATM software is told which denomination each cassette holds.",
            "**Reject bin**: holds notes that failed a check, for example doubles, notes of the wrong length or damaged notes.",
            "**Retract bin**: holds notes that were presented but not taken."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Notes in the reject bin and the retract bin are still the bank's money. Do not remove, count or keep them yourself unless the procedure and an authorised person say so."
        },
        {
          "t": "h",
          "text": "Why dispensers fail"
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause"
          ],
          "rows": [
            [
              "Two notes picked together",
              "Worn pick roller, notes stuck by damp or static, dirty or mis-set thickness sensor"
            ],
            [
              "Nothing picked from one cassette",
              "Cassette empty or loaded wrongly, worn or dirty picker"
            ],
            [
              "Jam in the transport",
              "Torn, taped or folded notes, dirty rollers, bent guide, worn belt"
            ],
            [
              "Wrong amount paid",
              "A cassette set to the wrong denomination in the software"
            ],
            [
              "Many rejects",
              "Dirty sensors, worn notes, high humidity"
            ]
          ],
          "caption": "Dispenser symptoms and causes"
        },
        {
          "t": "p",
          "text": "Rubber rollers harden, glaze and wear with use. A worn picker slips and picks too few or too many notes. Dust from paper and notes builds up on sensors, which then read wrongly. Cleaning and replacing wear parts at the interval in the service manual prevents most faults."
        },
        {
          "t": "example",
          "title": "Choosing notes for a withdrawal",
          "steps": [
            "A customer asks for 270. The machine holds cassettes of 100, 50 and 20 units.",
            "The machine starts with the largest note: 2 × 100 = 200. That leaves 70.",
            "Next: 1 × 50 = 50. That leaves 20.",
            "Last: 1 × 20 = 20. That leaves 0.",
            "Total: 200 + 50 + 20 = 270, using 4 notes."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Belts and rollers can trap fingers. Before you reach into the note path, follow the manual: put the machine out of service and remove power where the manual says. Never defeat a safety switch on the dispenser."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Fix the cause, not only the jam. A jam that returns usually points to a worn roller, a dirty sensor or damaged notes."
        }
      ]
    },
    {
      "id": "m18-l3",
      "title": "Card readers, PIN pads and tamper checks",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how card readers and encrypting PIN pads work, how they protect customer data, and how to spot signs that someone has tampered with an ATM."
        },
        {
          "t": "h",
          "text": "Card readers"
        },
        {
          "t": "p",
          "text": "A bank card holds data in a **magnetic stripe**, in a **chip**, or both. A stripe stores fixed data that anyone with a reader can copy. A chip runs a secret calculation inside itself and does not give up its secret key, so it is much harder to copy."
        },
        {
          "t": "ul",
          "items": [
            "**Dip reader**: the customer inserts the card and takes it out again. The machine never holds the card.",
            "**Motorised reader**: rollers pull the card in and return it at the end. The reader can also keep a card the bank wants to capture.",
            "**Contactless reader**: reads a card or phone held close to it by a short-range radio link."
          ]
        },
        {
          "t": "p",
          "text": "Dirt, wear and fragments of damaged cards cause most read errors. If many different cards fail, suspect the reader. If only one card fails, suspect that card."
        },
        {
          "t": "h",
          "text": "The encrypting PIN pad"
        },
        {
          "t": "p",
          "text": "The customer's **PIN** (personal identification number) must never be readable outside the machine. An **encrypting PIN pad** (**EPP**) scrambles the PIN inside a sealed, tamper-resistant unit. Only the scrambled form leaves the pad."
        },
        {
          "t": "p",
          "text": "The pad holds secret keys that the bank or its processor loads under controlled conditions. If an EPP is replaced, the new unit needs its keys loaded by an authorised process. Follow the manual and your employer's procedure."
        },
        {
          "t": "h",
          "text": "Spotting tampering"
        },
        {
          "t": "p",
          "text": "Criminals fit devices that copy card data or record PINs. This is called **skimming**. Look for these signs when you visit a machine."
        },
        {
          "t": "ul",
          "items": [
            "A card-slot cover that is loose, bulky, a different colour or held with glue or tape.",
            "A keypad that sits higher than the fascia or moves when pressed.",
            "A small hole, a bar or a leaflet holder that could hide a camera.",
            "Extra wires or marks on the fascia.",
            "Door seals or tamper labels that are broken."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "If you suspect tampering, report it to the bank's security contact at once. Do not pull the device off and do not tell the public. It is evidence, and removing it may destroy that evidence."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never write down a card number or PIN, never photograph a screen that shows customer data, and never try to read what a PIN pad holds. You do not need that data to repair the machine."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Clean the card path with the card the manufacturer recommends. Do not use sharp tools or liquids that can leave residue on the heads or chip contacts."
        }
      ]
    },
    {
      "id": "m18-l4",
      "title": "Printers, screen, computer core and the bank link",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the receipt printer and screen, the computer core, and how an ATM talks to its bank so that a withdrawal is approved and recorded."
        },
        {
          "t": "h",
          "text": "Printers and screen"
        },
        {
          "t": "p",
          "text": "Most ATMs print the customer's slip on a thermal printer, like the one on a cash register. It has a print head, a cutter and a sensor that reports low paper. Check that the paper is the correct type and is loaded with the coated side facing the head."
        },
        {
          "t": "p",
          "text": "Older machines may also print a paper journal that records each transaction. Most modern machines keep an **electronic journal** instead. It is a file that logs each transaction and each device event. It is the first thing you read when you diagnose a fault."
        },
        {
          "t": "p",
          "text": "The screen is usually an LCD with a backlight. Customers choose options with keys beside the screen or with a touch panel. A dim or blank screen is often a failed backlight, a loose cable or a screen power fault."
        },
        {
          "t": "h",
          "text": "The computer core"
        },
        {
          "t": "p",
          "text": "The **computer core** is a PC-type computer inside the upper cabinet. It runs an operating system and the ATM application. A standard layer of software lets the application control devices made by different companies. The core checks each device when the machine starts, and it takes the ATM out of service if a needed device fails."
        },
        {
          "t": "h",
          "text": "Talking to the host"
        },
        {
          "t": "p",
          "text": "The ATM reaches the bank host over a network. This may be a leased line, a broadband link or a mobile-data modem. All traffic is encrypted. A withdrawal follows this order."
        },
        {
          "t": "diagram",
          "name": "atm-host-flow"
        },
        {
          "t": "ol",
          "items": [
            "The card is read and the customer types the PIN, which the EPP encrypts.",
            "The customer chooses an amount.",
            "The ATM sends an encrypted request to the host.",
            "The host checks the account and replies approve or decline.",
            "If approved, the ATM dispenses the cash and then confirms the result to the host."
          ]
        },
        {
          "t": "p",
          "text": "If the host approves a withdrawal but the dispenser cannot pay, the ATM reports the failure so the bank can reverse the debit. The electronic journal shows this. Without a link to the host the ATM cannot approve cash, so it goes out of service."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A screen that says out of service does not always mean a broken ATM. Check the link to the host, the power to the router and the journal before you open anything else."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Only install or change ATM software through the bank's approved procedure. An unauthorised change can open a security hole or cause incorrect payments."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Fit a protective cover over the printer paper path when you clean the machine, so no liquid or dust enters the cutter."
        }
      ]
    },
    {
      "id": "m18-l5",
      "title": "Cash handling, the safe and physical security",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how cash is loaded and reconciled, how safes and alarms protect an ATM, and the rules a technician must follow around cash."
        },
        {
          "t": "h",
          "text": "Loading and reconciling cash"
        },
        {
          "t": "p",
          "text": "Authorised cash custodians fill the cassettes. The machine counts the notes it picks and keeps totals of notes dispensed, notes rejected and notes retracted. At the end of a period the custodian reconciles these totals against the cash found in the machine. A difference must be explained."
        },
        {
          "t": "formula",
          "text": "Notes remaining = notes loaded − notes dispensed − notes rejected",
          "caption": "Expected count in a cassette"
        },
        {
          "t": "example",
          "title": "Checking a cassette count",
          "steps": [
            "A cassette is loaded with 2,000 notes of 20 units.",
            "The counter shows 1,640 notes dispensed and 12 notes rejected.",
            "Notes that should remain: 2,000 − 1,640 − 12 = 348 notes.",
            "Value dispensed: 1,640 × 20 = 32,800 units."
          ]
        },
        {
          "t": "h",
          "text": "Dual control and access"
        },
        {
          "t": "p",
          "text": "**Dual control** means two authorised people must be present whenever the safe is open or cash is touched. No single person can open the safe alone. This protects the bank and also protects you from false accusations."
        },
        {
          "t": "p",
          "text": "The safe uses a mechanical or electronic lock. The bank decides who may hold the combination, the key or the code. A technician usually does not. If you need access to a part inside the safe, arrange for the authorised custodian to be present, and let them open it."
        },
        {
          "t": "h",
          "text": "Protecting the machine"
        },
        {
          "t": "ul",
          "items": [
            "**Alarms**: sensors detect door opening, vibration, heat and gas. They signal a monitoring centre.",
            "**Ink-staining cassettes**: if the cassette is forced open, ink stains the notes and makes them worthless to a thief.",
            "**Fixing to the floor**: the cabinet is bolted down so it cannot be dragged away.",
            "**Cameras**: record the area in front of the machine."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "You are the person who opens the technical side of the machine. You are not the person who opens the cash side. Keep those roles separate."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "If the custodian is not present, do not open the safe, do not remove a cassette that holds cash, and do not accept a code or key from anyone who is not authorised. Reschedule the visit and write down why."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Note the alarm status when you arrive and again when you leave. Tell the monitoring centre before you open anything that can trigger an alarm, if your procedure says so."
        }
      ]
    },
    {
      "id": "m18-l6",
      "title": "Diagnosing and servicing ATMs",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers a method for finding ATM faults, a table of common symptoms, preventive maintenance, safe handling and the records you keep."
        },
        {
          "t": "h",
          "text": "A method that works"
        },
        {
          "t": "ol",
          "items": [
            "Read the fault report and the electronic journal. Note exactly what failed and when.",
            "Check the simple things: mains, router lights, door sensors, paper and cassette status.",
            "Run the built-in diagnostics for the suspect device, as the manual describes.",
            "Isolate one assembly at a time. Check its cable, connector and power before replacing it.",
            "Repair or replace, then run the diagnostics again.",
            "Hand over to an authorised person for a live test transaction. Record the result."
          ]
        },
        {
          "t": "h",
          "text": "Symptoms and likely causes"
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause",
            "First check"
          ],
          "rows": [
            [
              "Blank or dim screen",
              "Backlight or cable fault",
              "Screen cable and power"
            ],
            [
              "Cards not read",
              "Dirty reader or damaged card path",
              "Card path for dirt or fragments"
            ],
            [
              "Receipt not printed",
              "No paper, jam or sensor fault",
              "Paper loading and sensor"
            ],
            [
              "Out of service",
              "Host link down or a failed device",
              "Router, link light and journal"
            ],
            [
              "Notes rejected",
              "Dirty sensors or worn notes",
              "Sensors and pick rollers"
            ]
          ],
          "caption": "Common ATM faults"
        },
        {
          "t": "h",
          "text": "Preventive maintenance"
        },
        {
          "t": "ul",
          "items": [
            "Clean the card reader, the note sensors and the rollers.",
            "Inspect pick rollers and belts, and replace them at the interval in the manual.",
            "Check fans and filters, because heat shortens the life of the electronics.",
            "Test the battery backup if the machine has one.",
            "Check the fascia for signs of tampering at every visit."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Test dispensing only with test notes or test sheets, or with a custodian present who accepts the cash risk. Never use live customer cash as a test load."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Switch off and isolate the machine before you work on the power supply. Treat the dispenser as a pinch hazard. Use a trolley and a team for any move, because the cabinet is heavy and bolted down."
        },
        {
          "t": "h",
          "text": "Before you leave"
        },
        {
          "t": "p",
          "text": "Check that all doors are locked, the alarm is restored and the machine is back in service. Complete the service report with the fault, cause, action, parts used and test result. Escalate anything you could not fix."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Write down the journal entries that led you to the fault. They make a repeat visit faster for the next technician."
        }
      ]
    }
  ],
  "practical": {
    "title": "Inspect and service the fascia and note path of a training ATM",
    "objective": "Inspect the customer-facing parts of a training ATM for tampering, clean the card reader and note path, and record the results. No live cash is used.",
    "time": "60 minutes",
    "tools": [
      "Training ATM or dispenser trainer with test sheets only",
      "Manufacturer's service manual",
      "Lint-free cloths and approved cleaning card",
      "Soft brush and small vacuum",
      "Torch",
      "Service report form"
    ],
    "safety": [
      "Use only a training unit that your instructor has approved. It must not contain live cash or real card data.",
      "Switch off and unplug the machine before you reach into the dispenser or open any cover.",
      "Keep your fingers away from belts, rollers and the shutter.",
      "Never defeat a door switch or interlock.",
      "Do not tip or move the machine. Ask your instructor if it needs to be moved."
    ],
    "steps": [
      "Read the sections of the manual on the fascia, card reader and note path. Note the cleaning method it allows.",
      "Walk around the machine and look at the fascia. Write down anything loose, unfamiliar or damaged.",
      "Press gently on the card-slot cover and the keypad. Record whether anything moves or sits higher than the fascia.",
      "Check the door seals and tamper labels. Record their condition.",
      "Switch on and print the electronic journal or the self-test page. Record any events or errors.",
      "Switch off and unplug the machine.",
      "Open the permitted cover and look along the note path with a torch. Record dust, torn paper or foreign objects.",
      "Clean the sensors and rollers with the approved cloth and method. Do not use liquids that the manual forbids.",
      "Clean the card path with the approved cleaning card.",
      "Refit all covers and make sure each door is closed and secure.",
      "Plug in and switch on. Run the device diagnostics for the card reader and dispenser.",
      "Complete the service report with the checks, work done and test results."
    ],
    "checks": [
      "I can name the main assemblies and the two zones of an ATM.",
      "I can describe four signs that a card slot or keypad has been tampered with.",
      "I can explain why I never write down card data or PINs.",
      "I can describe the path a note takes from the cassette to the shutter.",
      "I can complete a service report for the work I did."
    ]
  },
  "quiz": [
    {
      "id": "m18-q01",
      "q": "What is the main difference between a cash dispenser and a cash recycler?",
      "options": [
        "A recycler is installed outdoors, while a dispenser must stand inside a building.",
        "A recycler accepts deposits and can pay them out again; a dispenser only pays out.",
        "A recycler prints longer receipts, while a dispenser prints no receipt at all.",
        "A dispenser works without a host connection, while a recycler needs a network link."
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m18-l1",
      "explain": "A recycler checks deposited notes and reuses them for later withdrawals, which reduces how often it must be refilled. A dispenser has no deposit function. Both need a link to the host to approve transactions."
    },
    {
      "id": "m18-q02",
      "q": "Which part of an ATM is built to resist attack and holds the cash cassettes?",
      "options": [
        "The fascia, because it is made of thick steel.",
        "The computer core, because it is bolted to the base.",
        "The receipt printer, because it holds the paper roll.",
        "The safe, because it is the armoured compartment."
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m18-l1",
      "explain": "The safe is the armoured compartment for cash. The fascia is the customer-facing front, and the computer core sits in the upper cabinet with the other electronics."
    },
    {
      "id": "m18-q03",
      "q": "What is the main advantage of a rear-load ATM over a front-load machine?",
      "options": [
        "Staff can service and fill it from behind, in a room the public cannot enter.",
        "It can stand on any floor without being bolted down, and it needs no alarm sensors.",
        "It needs no cash cassettes because notes are loaded as loose bundles.",
        "It never needs a technician, because rear access prevents all faults."
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m18-l1",
      "explain": "Rear loading separates the work from the customer area, so nobody can watch cash being loaded. It does not remove the need for fixing, alarms, cassettes or servicing."
    },
    {
      "id": "m18-q04",
      "q": "An ATM screen is blank, but the dispenser fans and the card reader light are working and mains power is present. Which part should you check first?",
      "options": [
        "The reject bin, because a full bin blanks the screen.",
        "The cash cassettes, because a low note count blanks the screen.",
        "The screen's power, backlight and cable.",
        "The safe lock, because a locked safe stops the display."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m18-l1",
      "explain": "Working fans and a lit card reader show the machine has power, so the screen or its cable and backlight supply are the likely fault. A full reject bin or a low note count does not blank the display."
    },
    {
      "id": "m18-q05",
      "q": "Why is the cabinet that holds the computer core kept separate from the safe?",
      "options": [
        "Because the safe shields the computer from mains noise.",
        "Because the computer would overheat inside a closed safe.",
        "So a technician can work on electronics without access to cash.",
        "So that the computer core can be locked with the same key as the safe."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m18-l1",
      "explain": "Keeping electronics and cash in separate zones lets a technician repair the machine without access to cash. The safe has its own controlled lock, and shielding or heat are not the reason."
    },
    {
      "id": "m18-q06",
      "q": "What does the double-pick detector in a note dispenser measure?",
      "options": [
        "The thickness of each note, to find two notes stuck together.",
        "The colour of each note, to find the denomination.",
        "The weight of the cassette, to find how many notes remain.",
        "The speed of the belt, to find how fast the customer takes the cash."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m18-l2",
      "explain": "Two notes stacked together are thicker than one, so the thickness sensor flags them and the dispenser sends them to the reject bin instead of paying them out."
    },
    {
      "id": "m18-q07",
      "q": "Where do picked notes go if they fail the dispenser's checks?",
      "options": [
        "Back into the same cassette, so that they can be picked again later.",
        "Straight to the customer with a note on the receipt.",
        "Into the retract bin that holds cash left at the shutter.",
        "Into the reject bin, where they are kept for the custodian."
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m18-l2",
      "explain": "Notes that fail a check go to the reject bin and are counted later by an authorised person. The retract bin is for notes that were presented but not taken."
    },
    {
      "id": "m18-q08",
      "q": "A customer does not take the notes that the presenter has pushed out. What does the ATM normally do?",
      "options": [
        "It leaves the notes at the shutter until the next customer arrives.",
        "It pulls them back into the retract bin and records the event.",
        "It puts them back into the cassette they came from.",
        "It prints their serial numbers on the receipt."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m18-l2",
      "explain": "After the time allowed, the dispenser retracts the notes into a bin and the journal records the event. Putting them back in a cassette would mix handled notes with the loaded cash and break the count."
    },
    {
      "id": "m18-q09",
      "q": "After a rainy season, one cassette gives many rejects and double picks. The notes look limp and damp. What is the most likely cause?",
      "options": [
        "Damp notes stick together or fail the thickness check.",
        "The card reader is dirty and is reading the wrong denomination.",
        "The receipt printer has run out of paper.",
        "The customer has entered the wrong PIN."
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m18-l2",
      "explain": "Damp, limp notes cling together and give thickness and length readings that fail the checks. The card reader, printer and PIN do not affect which notes are picked."
    },
    {
      "id": "m18-q10",
      "q": "Why must the software be told which denomination each cassette holds?",
      "options": [
        "So that the screen can show a picture of the right note.",
        "So that the safe can open the correct door.",
        "So that the amount paid matches the amount debited.",
        "So that the reject bin knows which notes to accept."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m18-l2",
      "explain": "The ATM pays by counting notes and multiplying by the value it has been told. A cassette set to the wrong denomination makes the machine pay the wrong amount."
    },
    {
      "id": "m18-q11",
      "q": "A customer asks for 350 units. Only a cassette of 50-unit notes is in use. How many notes should the ATM pick?",
      "options": [
        "5 notes",
        "7 notes",
        "6 notes",
        "8 notes"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m18-l2",
      "explain": "350 ÷ 50 = 7. The other counts would pay 250, 300 or 400 units."
    },
    {
      "id": "m18-q12",
      "q": "What does an encrypting PIN pad do with the PIN a customer types?",
      "options": [
        "It prints the PIN on the journal roll so that the bank can read it later.",
        "It shows the PIN on the screen for a few seconds.",
        "It stores the PIN in the computer core memory until the machine is next restarted.",
        "It encrypts the PIN inside sealed hardware, so only the scrambled form leaves."
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m18-l3",
      "explain": "The EPP encrypts the PIN inside a sealed unit. Showing, printing or storing the PIN in readable form would defeat its purpose."
    },
    {
      "id": "m18-q13",
      "q": "Why must you never write down a card number or PIN while servicing an ATM?",
      "options": [
        "Because the dispenser would reject the notes if a card number was written down nearby.",
        "Because paper can damage the card reader.",
        "Because the electronic journal already keeps a copy.",
        "Because you do not need it, and recorded data could be used for fraud."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m18-l3",
      "explain": "Card data is not needed for a repair, and any copy puts customers at risk. Rules for handling it are strict for that reason."
    },
    {
      "id": "m18-q14",
      "q": "While cleaning an ATM you find that the card-slot cover moves when pressed and has a glue mark at its edge. What is the correct action?",
      "options": [
        "Peel it off and put it in the bin so that no other customer is affected.",
        "Report it to bank security at once and leave it in place.",
        "Ignore it, because glue marks come from labels.",
        "Reset the ATM and continue with your normal work."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m18-l3",
      "explain": "A loose cover with glue may be a skimmer. Remove nothing yourself, because removal can destroy evidence and tip off the criminals. Report it and follow the bank's procedure."
    },
    {
      "id": "m18-q15",
      "q": "Why is a chip card harder to copy than a magnetic-stripe card?",
      "options": [
        "The chip is much thicker than a stripe, so it jams most skimming devices.",
        "The chip stores the PIN in readable form.",
        "The chip does a secret calculation and does not give up its key.",
        "The chip is read from further away than a stripe."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m18-l3",
      "explain": "A stripe holds fixed data that can be copied. A chip proves who it is by a calculation that never reveals its secret key."
    },
    {
      "id": "m18-q16",
      "q": "What does the customer do at a dip card reader?",
      "options": [
        "Inserts the card, then takes it back out.",
        "Hands the card to the cashier.",
        "Types the card number into the keypad.",
        "Holds the card against the screen."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m18-l3",
      "explain": "In a dip reader the customer controls the card and removes it. A motorised reader pulls the card in, which is a different design."
    },
    {
      "id": "m18-q17",
      "q": "Many different customers' cards fail to read at one ATM, but the same cards work at other machines. What is the most likely cause?",
      "options": [
        "The reject bin is full of notes.",
        "The receipt paper is loaded upside down.",
        "Dirt or wear in the card reader path.",
        "The safe door is not fully closed."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m18-l3",
      "explain": "When many good cards fail on one machine, the reader is the problem. Paper, the reject bin and the safe door are not part of the card read path."
    },
    {
      "id": "m18-q18",
      "q": "In what form does the ATM send a withdrawal request to the bank host?",
      "options": [
        "Encrypted, over the network link.",
        "Printed on the journal roll.",
        "Spoken by an operator.",
        "As plain text that the router encrypts later."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m18-l4",
      "explain": "The request is encrypted before it leaves the machine. Plain text would expose customer data to anyone on the network."
    },
    {
      "id": "m18-q19",
      "q": "The host approves a withdrawal, but the dispenser jams and pays nothing. What should the ATM do?",
      "options": [
        "Keep the debit and ask the customer to try again at another machine.",
        "Print a receipt that says the cash was paid.",
        "Switch off the host link until a technician arrives.",
        "Report the failure so the bank can reverse the debit."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m18-l4",
      "explain": "The ATM confirms the result of each transaction to the host. A reported failure lets the bank correct the account. A receipt claiming payment would be false."
    },
    {
      "id": "m18-q20",
      "q": "An ATM shows out of service. Its PC, dispenser and printer self-tests pass, but the link light on its router is off and the cable is intact. What do you check next?",
      "options": [
        "The cash cassettes, to see whether one holds the wrong denomination of notes.",
        "The router power and the connection to the network provider.",
        "The card reader for dirt.",
        "The receipt paper roll."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m18-l4",
      "explain": "Passing device tests and a dead link light point to the network connection. Without a host link, the ATM cannot approve cash and goes out of service."
    },
    {
      "id": "m18-q21",
      "q": "What is an electronic journal used for?",
      "options": [
        "Storing customers' PINs for later checks.",
        "Recording each transaction and device event for later diagnosis.",
        "Printing the receipt that the customer takes.",
        "Controlling the speed and the stopping position of the dispenser belt."
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m18-l4",
      "explain": "The journal is a log of transactions and device events. It is the first place to look when you diagnose a fault. It must never hold PINs."
    },
    {
      "id": "m18-q22",
      "q": "Why must ATM software be changed only through the bank's approved procedure?",
      "options": [
        "Because every software change deletes the cash counts held in the cassettes.",
        "Because the screen cannot show a new version.",
        "Because only the safe can store software.",
        "Because it could weaken security or cause wrong payments."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m18-l4",
      "explain": "The bank controls which versions run on its machines. An unapproved change can open a security hole or give wrong results with cash."
    },
    {
      "id": "m18-q23",
      "q": "What does dual control mean when cash is handled in an ATM?",
      "options": [
        "Two authorised people must be present whenever cash is touched.",
        "Two technicians must work together on the repair of every fault.",
        "Two different notes must be picked for each withdrawal.",
        "Two screens must show every transaction."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m18-l5",
      "explain": "Dual control means no single person has the access. It protects the bank's cash and protects the people handling it."
    },
    {
      "id": "m18-q24",
      "q": "A cassette is loaded with 2,000 notes. The counter shows 1,640 dispensed and 12 rejected. How many notes should remain in the cassette?",
      "options": [
        "360 notes",
        "352 notes",
        "348 notes",
        "388 notes"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m18-l5",
      "explain": "Notes remaining = 2,000 − 1,640 − 12 = 348. The figure 360 forgets the rejected notes, which also leave the cassette."
    },
    {
      "id": "m18-q25",
      "q": "A cassette holds notes of 100 units and the counter shows 85 notes dispensed. What value was paid out?",
      "options": [
        "850 units",
        "1,850 units",
        "8,000 units",
        "8,500 units"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m18-l5",
      "explain": "85 × 100 = 8,500 units. The other values come from shifting a decimal place or a wrong multiplication."
    },
    {
      "id": "m18-q26",
      "q": "Why does a technician usually not hold the safe combination or key?",
      "options": [
        "Because the lock is built so that it does not work with a technician's tools.",
        "Because the bank limits cash access to authorised custodians.",
        "Because the combination changes every hour.",
        "Because the safe has no lock when the power is off."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m18-l5",
      "explain": "Access to cash is limited to people the bank has authorised. A technician who does not hold access cannot be blamed for a cash loss."
    },
    {
      "id": "m18-q27",
      "q": "You must remove a cassette that holds cash to repair the dispenser, but the authorised custodian is not on site. What should you do?",
      "options": [
        "Ask any member of staff who is nearby to give you the code.",
        "Open the safe yourself, because the repair is urgent.",
        "Do not open the safe; rearrange the visit and note why.",
        "Force the cassette out and leave it on the floor."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m18-l5",
      "explain": "Only authorised custodians may open the safe under dual control. Taking a code from anyone else breaks the rules. Rescheduling is the safe choice."
    },
    {
      "id": "m18-q28",
      "q": "What is the purpose of an ink-staining cassette?",
      "options": [
        "To stain the notes if the cassette is forced open.",
        "To print the date and time on every note that is dispensed.",
        "To clean the picker rollers as notes pass.",
        "To colour the receipt paper."
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m18-l5",
      "explain": "The ink is a theft deterrent. It is released only when the cassette is attacked, and it has no part in normal dispensing."
    },
    {
      "id": "m18-q29",
      "q": "What should you do first before reaching into the note path to clear a jam?",
      "options": [
        "Follow the manual and make the machine safe.",
        "Switch the shutter to open and reach in.",
        "Disable the door switch to keep the fans running.",
        "Ask the next customer to try the card again."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m18-l6",
      "explain": "Belts and rollers can trap fingers, so make the machine safe first. Defeating a switch or leaving the machine in service invites injury."
    },
    {
      "id": "m18-q30",
      "q": "An ATM is bolted to the floor and weighs several hundred kilograms. What does this mean for moving it?",
      "options": [
        "One person can slide it on its feet if the floor is smooth and level.",
        "It can be tilted on one corner and rolled on its bottom edge by two people.",
        "It needs a plan, lifting equipment, a team, and properly released fixings.",
        "It should be emptied of cash first and then dragged across the floor to the door."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m18-l6",
      "explain": "A heavy cabinet can cause serious injury if tipped or dragged. Plan the move, use lifting equipment, use a team and release the floor fixings as the manual says."
    },
    {
      "id": "m18-q31",
      "q": "You fit a new receipt roll, loaded the correct way, but the low-paper message returns. What do you check next?",
      "options": [
        "The cassettes, to see how many notes they hold.",
        "The paper-low sensor, its cable and dirt.",
        "The key list stored inside the PIN pad.",
        "The sensor that detects the safe door."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m18-l6",
      "explain": "With the paper present and loaded correctly, a continuing warning points to the sensor or its wiring. Cassettes, the PIN pad and the safe alarm do not report paper."
    },
    {
      "id": "m18-q32",
      "q": "After a repair, what must you do before leaving the ATM?",
      "options": [
        "Remove the fascia and leave it off to show the repair was done.",
        "Leave the doors unlocked so the custodian can find it.",
        "Switch the alarm off to avoid false calls.",
        "Check that doors are locked and the alarm is restored."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m18-l6",
      "explain": "A secure machine and a complete record are part of the job. Leaving doors open or the alarm off exposes the cash."
    }
  ],
  "cards": [
    {
      "id": "m18-c01",
      "front": "What is an ATM?",
      "back": "An automated teller machine. It lets a bank customer take out cash and do other banking tasks without a cashier.",
      "lesson": "m18-l1"
    },
    {
      "id": "m18-c02",
      "front": "Cash dispenser versus cash recycler",
      "back": "A dispenser only pays out. A recycler accepts deposits and can pay the same notes out again.",
      "lesson": "m18-l1"
    },
    {
      "id": "m18-c03",
      "front": "Front-load versus rear-load",
      "back": "Front-load is serviced from the customer's side. Rear-load is serviced from behind, in a room the public cannot enter.",
      "lesson": "m18-l1"
    },
    {
      "id": "m18-c04",
      "front": "What is the host?",
      "back": "The bank's central computer, which approves or declines each ATM request.",
      "lesson": "m18-l1"
    },
    {
      "id": "m18-c05",
      "front": "What are the two zones of an ATM?",
      "back": "The upper cabinet holds the electronics. The safe holds the cash and the dispenser.",
      "lesson": "m18-l1"
    },
    {
      "id": "m18-c06",
      "front": "What does the computer core do?",
      "back": "It is a PC-type computer that runs the operating system and the ATM application.",
      "lesson": "m18-l1"
    },
    {
      "id": "m18-c07",
      "front": "What is a picker?",
      "back": "The part that takes notes one at a time from a cassette, using vacuum cups, a friction roller, or both.",
      "lesson": "m18-l2"
    },
    {
      "id": "m18-c08",
      "front": "What does the double-pick detector do?",
      "back": "It measures note thickness. Two notes together are thicker and are sent to the reject bin.",
      "lesson": "m18-l2"
    },
    {
      "id": "m18-c09",
      "front": "What is the presenter?",
      "back": "The part that pushes the stack of notes out through the shutter for the customer.",
      "lesson": "m18-l2"
    },
    {
      "id": "m18-c10",
      "front": "Reject bin versus retract bin",
      "back": "Reject bin: notes that failed a check. Retract bin: notes presented but not taken by the customer.",
      "lesson": "m18-l2"
    },
    {
      "id": "m18-c11",
      "front": "Why must each cassette's denomination be set in software?",
      "back": "The ATM pays by counting notes. A wrong setting makes the machine pay the wrong value.",
      "lesson": "m18-l2"
    },
    {
      "id": "m18-c12",
      "front": "Two notes picked together: likely causes",
      "back": "Worn pick roller, damp or static notes, or a dirty or mis-set thickness sensor.",
      "lesson": "m18-l2"
    },
    {
      "id": "m18-c13",
      "front": "Magnetic stripe versus chip",
      "back": "A stripe holds fixed data that can be copied. A chip does a secret calculation and keeps its key hidden.",
      "lesson": "m18-l3"
    },
    {
      "id": "m18-c14",
      "front": "Dip reader versus motorised reader",
      "back": "In a dip reader the customer inserts and removes the card. A motorised reader pulls the card in and returns it.",
      "lesson": "m18-l3"
    },
    {
      "id": "m18-c15",
      "front": "What is an EPP?",
      "back": "An encrypting PIN pad. It scrambles the PIN inside a sealed unit so only the encrypted form leaves it.",
      "lesson": "m18-l3"
    },
    {
      "id": "m18-c16",
      "front": "What is skimming?",
      "back": "Using a hidden device to copy card data or record a PIN.",
      "lesson": "m18-l3"
    },
    {
      "id": "m18-c17",
      "front": "Signs of tampering at a card slot",
      "back": "Loose or bulky cover, glue or tape, a keypad that sits high, hidden holes for a camera, or broken seals.",
      "lesson": "m18-l3"
    },
    {
      "id": "m18-c18",
      "front": "What do you do if you suspect tampering?",
      "back": "Report to the bank's security contact at once. Do not remove the device.",
      "lesson": "m18-l3"
    },
    {
      "id": "m18-c19",
      "front": "What is an electronic journal?",
      "back": "A log of every transaction and device event. It is the first place to look when diagnosing a fault.",
      "lesson": "m18-l4"
    },
    {
      "id": "m18-c20",
      "front": "Which printer type do most ATMs use for the receipt?",
      "back": "A thermal printer. Check the paper type and that the coated side faces the head.",
      "lesson": "m18-l4"
    },
    {
      "id": "m18-c21",
      "front": "Order of a withdrawal",
      "back": "Card read, PIN encrypted, amount chosen, request sent, host approves, cash dispensed, result confirmed.",
      "lesson": "m18-l4"
    },
    {
      "id": "m18-c22",
      "front": "Why does an ATM go out of service without a host link?",
      "back": "It cannot get approval for cash, so it stops taking transactions.",
      "lesson": "m18-l4"
    },
    {
      "id": "m18-c23",
      "front": "Blank or dim screen: first checks",
      "back": "Screen cable, screen power and backlight.",
      "lesson": "m18-l4"
    },
    {
      "id": "m18-c24",
      "front": "What does dual control mean?",
      "back": "Two authorised people must be present whenever cash is touched.",
      "lesson": "m18-l5"
    },
    {
      "id": "m18-c25",
      "front": "Formula for notes remaining in a cassette",
      "back": "Notes remaining = notes loaded − notes dispensed − notes rejected.",
      "lesson": "m18-l5"
    },
    {
      "id": "m18-c26",
      "front": "Why do ink-staining cassettes exist?",
      "back": "If forced open, they stain the notes so they are of little use to a thief.",
      "lesson": "m18-l5"
    },
    {
      "id": "m18-c27",
      "front": "Who opens the safe?",
      "back": "Only authorised custodians, working under dual control. A technician usually does not.",
      "lesson": "m18-l5"
    },
    {
      "id": "m18-c28",
      "front": "Name three ATM security features",
      "back": "Alarms, ink-staining cassettes, a floor-bolted cabinet. Cameras and tamper seals also help.",
      "lesson": "m18-l5"
    },
    {
      "id": "m18-c29",
      "front": "First steps in ATM fault diagnosis",
      "back": "Read the fault report and the electronic journal, then check mains, link lights, paper and cassette status.",
      "lesson": "m18-l6"
    },
    {
      "id": "m18-c30",
      "front": "Cards not read at an ATM: likely cause",
      "back": "A dirty reader or a damaged card path, especially if many different cards fail.",
      "lesson": "m18-l6"
    },
    {
      "id": "m18-c31",
      "front": "How should you test dispensing?",
      "back": "With test notes or test sheets, or with a custodian present who accepts the cash risk. Never use live customer cash.",
      "lesson": "m18-l6"
    },
    {
      "id": "m18-c32",
      "front": "What must you do before leaving a serviced ATM?",
      "back": "Check doors are locked, the alarm is restored and the machine is back in service, then complete the report.",
      "lesson": "m18-l6"
    }
  ]
});

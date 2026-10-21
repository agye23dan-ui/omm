OMM.registerModule({
  "id": "m15",
  "summary": "Describe, configure and service cash registers and point-of-sale equipment, including receipt printers, drawers, scanners, scales, tax settings, payment devices and common faults.",
  "outcomes": [
    "Describe the parts of a cash register or POS terminal and explain stand-alone and networked systems.",
    "Explain how a thermal receipt printer works and how the printer opens a cash drawer.",
    "Calculate an EAN-13 check digit and the price of goods sold by weight.",
    "Configure departments, tax rates, operator codes and reports, and calculate tax and expected cash.",
    "Apply tamper checks and safe handling rules to payment devices without ever recording card data.",
    "Diagnose common faults and carry out preventive care on sales registration equipment."
  ],
  "cheatsheet": [
    "Thermal paper is coated on one side. Scratch test: the coated side marks dark and faces the print head.",
    "The register tells the printer to open the drawer. The printer sends the pulse.",
    "EAN-13 check digit = (10 − (sum mod 10)) mod 10, with weights 1 and 3 from the left.",
    "Price by weight = (gross − tare weight) × price per kg.",
    "X report reads totals. Z report resets the day. Never run Z casually.",
    "Tax on top: price × rate. Tax inside: price − price ÷ (1 + rate).",
    "Never break a legal-for-trade seal on a scale.",
    "Never write down card data. Never open a payment terminal.",
    "Back up settings before a memory clear or a firmware update."
  ],
  "lessons": [
    {
      "title": "Cash registers and point-of-sale systems",
      "minutes": 7,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers what sales registration equipment is, the parts of a register or point-of-sale terminal, and the difference between stand-alone and networked set-ups."
        },
        {
          "t": "h",
          "text": "Two kinds of machine"
        },
        {
          "t": "p",
          "text": "A **cash register** is a stand-alone machine that records sales, works out tax, prints a receipt and opens a cash drawer. It keeps its own totals in its own memory."
        },
        {
          "t": "p",
          "text": "A **point-of-sale terminal** (**POS**) does the same job. It is usually a computer, a tablet or a purpose-built terminal that runs sales software. It often connects to other devices and to a server."
        },
        {
          "t": "p",
          "text": "Both exist to do three things: record each sale correctly, take payment, and keep totals that the owner can trust."
        },
        {
          "t": "h",
          "text": "The main parts"
        },
        {
          "t": "ul",
          "items": [
            "**Keyboard or touchscreen**: the cashier enters items, quantities and the payment type.",
            "**Customer display**: shows the price and total to the buyer. The cashier usually has a second display.",
            "**Cash drawer**: a locked tray for notes and coins. It opens when the machine sends a signal.",
            "**Receipt printer**: prints the customer receipt. Many machines also keep a journal copy. Most are thermal printers.",
            "**Barcode scanner**: reads the code on a product so the machine can look up the price.",
            "**Scale**: weighs goods that are sold by weight and works out the price.",
            "**Payment device**: a card or mobile-money terminal for payments that are not cash.",
            "**Power supply and backup battery**: keep the machine running and protect its memory."
          ]
        },
        {
          "t": "h",
          "text": "Stand-alone or networked"
        },
        {
          "t": "p",
          "text": "A stand-alone register keeps all its data inside itself. If it fails, the data can fail with it. The owner must therefore print reports and back up settings regularly."
        },
        {
          "t": "p",
          "text": "A **networked** system links several terminals to a **server**, which is a central computer. Prices are kept in one place, stock is updated for every sale, and the owner can see all sales together."
        },
        {
          "t": "table",
          "head": [
            "Feature",
            "Stand-alone",
            "Networked"
          ],
          "rows": [
            [
              "Where prices are stored",
              "In each machine",
              "On the server, shared"
            ],
            [
              "Making a price change",
              "Repeat on every machine",
              "Make it once; it is sent to all"
            ],
            [
              "If the network fails",
              "Keeps working",
              "May work in an offline mode or may stop; it depends on the design"
            ],
            [
              "Typical customer",
              "Market stall, small shop",
              "Supermarket, chain, restaurant"
            ]
          ],
          "caption": "Stand-alone and networked systems compared"
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A sales machine handles money and records. A wrong price, a lost sale or a wrong tax figure costs the owner or the customer real money. Treat accuracy as part of every repair."
        },
        {
          "t": "h",
          "text": "What you will service"
        },
        {
          "t": "p",
          "text": "You will work on the mechanics, the power supply, the printer, the drawer, the scanner, the scale, the display and the settings. You will also check the connection to a server and to the payment device."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Disconnect the machine from the mains before you open its case. A cash drawer has a solenoid that fires suddenly and a sharp-edged slide, so keep your fingers away from the drawer runner when you test it."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Always ask the owner when the shop is quiet. Never take a till out of service during the busiest trading hours unless the owner agrees and has another way to take payment."
        }
      ],
      "id": "m15-l1"
    },
    {
      "title": "Receipt printers and cash drawers",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how a thermal receipt printer works, its main parts, how impact printers differ, and how the printer opens the cash drawer."
        },
        {
          "t": "h",
          "text": "Thermal printing"
        },
        {
          "t": "p",
          "text": "A **thermal printer** uses paper with a heat-sensitive coating that turns dark when it is heated. It needs no ink, toner or ribbon. The **thermal print head** is a row of tiny heating elements across the width of the paper. Each element heats a dot, and many dots together make text and graphics."
        },
        {
          "t": "diagram",
          "name": "receipt-printer-parts"
        },
        {
          "t": "p",
          "text": "The **platen** is the rubber roller that presses the paper against the head and moves it forward. Common paper widths are 58 mm and 80 mm, but always fit the width the printer is made for."
        },
        {
          "t": "ul",
          "items": [
            "**Paper-end sensor**: tells the machine the roll is empty.",
            "**Cover-open switch**: stops printing while the cover is open.",
            "**Cutter**: a small blade that cuts the paper after each receipt. Some printers have a tear bar instead.",
            "**Feed motor and gears**: a stepper motor drives the platen.",
            "**Control board**: turns commands from the register into heat pulses for the head."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Thermal paper is coated on one side only. Scratch the paper lightly with your fingernail. The coated side leaves a dark mark. That side must face the print head. If the roll is fitted the wrong way round, the printer feeds paper but prints nothing."
        },
        {
          "t": "h",
          "text": "Care of the print head"
        },
        {
          "t": "p",
          "text": "Dirt, paper dust and adhesive from labels build up on the head and cause pale patches or white lines. Switch the printer off and let the head cool. Wipe it gently with a lint-free swab and isopropyl alcohol, as the manufacturer allows. Do not use metal tools, because scratches and static damage the heating elements."
        },
        {
          "t": "p",
          "text": "Thermal paper can fade with heat, light, some plastics and some skin creams. Customers who keep receipts for a long time may need a copy. Poor-quality paper also wears the head faster."
        },
        {
          "t": "h",
          "text": "Impact printers"
        },
        {
          "t": "p",
          "text": "An **impact printer** (dot matrix) fires small pins against an ink ribbon and the paper. It is slower and noisier. It is used where several copies are printed at once on multi-part paper, and in hot places such as kitchens where heat would darken thermal paper. The print head and ribbon are wear parts."
        },
        {
          "t": "h",
          "text": "How the printer opens the drawer"
        },
        {
          "t": "p",
          "text": "In most systems the register does not drive the drawer directly. It sends a command to the receipt printer. The printer has a **drawer-kick port**, and it sends a short electrical pulse through it to the drawer **solenoid**. The solenoid pulls back a latch and a spring pushes the drawer open."
        },
        {
          "t": "diagram",
          "name": "drawer-signal"
        },
        {
          "t": "p",
          "text": "The cable usually ends in a modular plug that looks like a telephone plug. It is not a telephone or network connection. Never plug it into a network or telephone socket. The solenoid voltage must also match the printer port. It is often 12 V or 24 V, but check the manual for the exact machine."
        },
        {
          "t": "example",
          "title": "Print a self-test page",
          "steps": [
            "Switch the printer off and check that the paper roll is fitted correctly.",
            "Hold down the feed button while you switch the printer on. Many printers do this, but check the service manual for the right key combination.",
            "Release the button when printing begins.",
            "Read the page. It usually shows the firmware version and the interface settings.",
            "Look for white lines or pale areas. They point to a dirty or damaged head.",
            "Press the feed button to leave the test mode, as the manual describes."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "The self-test page proves the printer itself works. If the self-test is good but the register prints nothing, the fault is in the cable, the interface settings or the register."
        }
      ],
      "id": "m15-l2"
    },
    {
      "title": "Barcode scanners and scales",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how barcode scanners work, how to calculate an EAN-13 check digit, what Code 128 is, and how scales measure and are kept legal for trade."
        },
        {
          "t": "h",
          "text": "Scanners"
        },
        {
          "t": "p",
          "text": "A **laser scanner** sweeps a thin beam of light across the code and measures the light that bounces back from the bars and spaces. An **imaging scanner** takes a small picture of the code and software decodes it. Imaging scanners can also read two-dimensional codes such as QR codes, and codes shown on a phone screen."
        },
        {
          "t": "p",
          "text": "Most scanners connect by USB or serial cable. Many act as a **keyboard wedge**. This means the register sees each scanned number as if someone had typed it and pressed Enter. You set the scanner mode by scanning setup codes printed in its manual."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Do not look into a laser scanner beam and do not point it at anyone. Scanners are low-power products, but eye protection rules still apply."
        },
        {
          "t": "h",
          "text": "EAN-13 and the check digit"
        },
        {
          "t": "p",
          "text": "**EAN-13** is the 13-digit code on most retail products. The first 12 digits identify the product. The last digit is a **check digit**. It lets the scanner reject a misread code instead of charging the wrong price."
        },
        {
          "t": "p",
          "text": "Calculate it like this. Number the first 12 digits from the left. Multiply the digits in odd positions by 1 and the digits in even positions by 3. Add the results. The check digit is the amount needed to bring the sum up to the next multiple of 10."
        },
        {
          "t": "formula",
          "text": "check digit = (10 − (sum mod 10)) mod 10",
          "caption": "sum mod 10 means the remainder after dividing the sum by 10"
        },
        {
          "t": "example",
          "title": "Find the check digit of 590123412345",
          "steps": [
            "Weights from the left are 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3.",
            "The products are 5×1 = 5, 9×3 = 27, 0×1 = 0, 1×3 = 3, 2×1 = 2, 3×3 = 9, 4×1 = 4, 1×3 = 3, 2×1 = 2, 3×3 = 9, 4×1 = 4, 5×3 = 15.",
            "Add them: 5 + 27 + 0 + 3 + 2 + 9 + 4 + 3 + 2 + 9 + 4 + 15 = 83.",
            "83 mod 10 = 3.",
            "Check digit = (10 − 3) mod 10 = 7. The full code is 5901234123457."
          ]
        },
        {
          "t": "p",
          "text": "**Code 128** is a different code. It can carry letters as well as digits, it is compact, and it has its own built-in check character. Businesses use it for shelf, stock and shipping labels."
        },
        {
          "t": "diagram",
          "name": "ean13"
        },
        {
          "t": "h",
          "text": "Scales and legal for trade"
        },
        {
          "t": "p",
          "text": "A scale uses a **load cell**. This is a metal block that bends a tiny amount under load. Strain gauges on it change their electrical resistance, and the electronics turn that change into a weight. **Tare** means the weight of the empty container is subtracted. The price is weight × price per kilogram."
        },
        {
          "t": "example",
          "title": "Price goods with a container",
          "steps": [
            "The scale shows 1.850 kg and the empty container weighs 0.350 kg.",
            "Net weight = 1.850 − 0.350 = 1.500 kg.",
            "The price is 8.00 per kg.",
            "Price = 1.500 × 8.00 = 12.00."
          ]
        },
        {
          "t": "p",
          "text": "To calibrate, first make sure the empty platter reads zero. Then place a known test weight and adjust the span so the display agrees with it. Follow the manufacturer procedure."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A scale used to sell by weight is **legal for trade**. This means a weights and measures authority has checked it and sealed its settings. Never break a seal or change sealed settings. If a seal is broken, tell the owner. The scale must be checked again by the authority before it is used for trade."
        }
      ],
      "id": "m15-l3"
    },
    {
      "title": "Configuring a register",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers departments and price look-ups, tax rates, X and Z reports, operator codes, backups and the connection to a server."
        },
        {
          "t": "h",
          "text": "Departments and PLUs"
        },
        {
          "t": "p",
          "text": "A **department** is a group of goods that share a name and usually a tax rate, such as groceries or stationery. A **PLU** (price look-up) is a stored record for one item. It holds a number, a name, a price, a department and a tax setting. When the cashier enters the number or scans the code, the machine finds the record."
        },
        {
          "t": "h",
          "text": "Tax rates"
        },
        {
          "t": "p",
          "text": "Tax rates are set by law and by the owner. Never invent them. Ask the owner or their accountant for the correct rate for each department. A machine can add tax on top of the price (**tax-exclusive**) or treat the price as already including tax (**tax-inclusive**)."
        },
        {
          "t": "example",
          "title": "Tax added on top",
          "steps": [
            "The item price is 80.00 and the tax rate is 15%.",
            "Tax = 80.00 × 0.15 = 12.00.",
            "Total = 80.00 + 12.00 = 92.00."
          ]
        },
        {
          "t": "example",
          "title": "Tax already inside the price",
          "steps": [
            "The shelf price is 115.00 and it includes 15% tax.",
            "Net price = 115.00 ÷ 1.15 = 100.00.",
            "Tax = 115.00 − 100.00 = 15.00."
          ]
        },
        {
          "t": "example",
          "title": "Mixed goods at 10% tax",
          "steps": [
            "A sale has 60.00 of taxable goods and 20.00 of goods with no tax.",
            "Tax = 60.00 × 0.10 = 6.00.",
            "Total = 60.00 + 20.00 + 6.00 = 86.00."
          ]
        },
        {
          "t": "h",
          "text": "X and Z reports"
        },
        {
          "t": "p",
          "text": "An **X report** shows the totals so far. It does not clear anything, so you can print it at any time. A **Z report** prints the end-of-day totals and then resets the daily counters to zero. Normally it is run once, at closing time. You cannot undo it."
        },
        {
          "t": "example",
          "title": "Check the cash in the drawer",
          "steps": [
            "The opening float was 50.00. Cash sales for the day were 430.00. Cash paid out was 20.00.",
            "Expected cash = 50.00 + 430.00 − 20.00 = 460.00.",
            "If the drawer holds 460.00, the day balances. If not, look for a keying error or a missed payout."
          ]
        },
        {
          "t": "h",
          "text": "Settings, codes and backups"
        },
        {
          "t": "ul",
          "items": [
            "**Date and time**: wrong values put sales on the wrong day. A clock that keeps resetting often means a flat backup battery.",
            "**Operator codes**: each cashier gets a personal code, so voids and refunds can be traced. Change default manager codes and never share them.",
            "**Backups**: save settings and PLUs to a card, a USB device or the server before you clear memory or update firmware.",
            "**Server connection**: set the terminal address in the same subnet as the server, and enter the server address and port from the manual."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Before you change anything, print the current settings and keep the copy. If the new setup fails, you can put it back."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Clearing the memory erases prices, tax settings and totals. Do it only with the owner permission, after a backup and after a Z report has been printed."
        }
      ],
      "id": "m15-l4"
    },
    {
      "title": "Payment devices and security",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers chip, contactless and mobile-money payments, how to check a payment device for tampering, and why card data must never be written down."
        },
        {
          "t": "h",
          "text": "How customers pay"
        },
        {
          "t": "ul",
          "items": [
            "**Chip payment**: the card has a chip. The terminal and the chip exchange protected messages for each payment, and the customer may enter a PIN.",
            "**Contactless payment**: a card or phone is held very close to the reader, usually within a few centimetres. It uses short-range radio.",
            "**Mobile money**: the customer approves a payment from a wallet on a phone. The shop receives a confirmation in the official app or message service."
          ]
        },
        {
          "t": "p",
          "text": "Rules for amounts and limits come from the bank or payment provider, and they differ between countries. Do not guess them."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "For mobile money, check the confirmation in the shop official app or service. A screenshot or a forwarded message shown by the customer is not proof of payment."
        },
        {
          "t": "h",
          "text": "Tamper checks"
        },
        {
          "t": "p",
          "text": "Criminals sometimes fit extra devices to payment terminals to steal data. Look at the terminal before you work near it. Signs of tampering include:"
        },
        {
          "t": "ul",
          "items": [
            "Broken, missing or re-stuck tamper seals.",
            "New holes, scratches or glue marks near screws and seams.",
            "A thin overlay on the keypad or the card slot.",
            "An extra cable, or a cable that was not there before.",
            "A device that looks different from the others or does not match the serial number in the owner records."
          ]
        },
        {
          "t": "p",
          "text": "If you suspect tampering, stop. Do not use the terminal. Tell the owner and the payment provider at once."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Do not open a payment terminal. Many have tamper protection that erases security keys when the case is opened, and an opened terminal is no longer approved. Faults inside are handled by the provider."
        },
        {
          "t": "h",
          "text": "Never write down card data"
        },
        {
          "t": "p",
          "text": "**Card data** means the card number, expiry date, security code and PIN. Anyone who sees it can use it for fraud. You never need it to repair a machine. Do not write it down, photograph it, type it into a ticket or keep it in a message."
        },
        {
          "t": "p",
          "text": "If you see card data on a screen or in a log while you work, do not copy it. Tell the owner. Do not read or collect receipts with full card numbers."
        },
        {
          "t": "h",
          "text": "Secure handling"
        },
        {
          "t": "ul",
          "items": [
            "Keep terminals where staff can see them and fix them so they cannot be swapped.",
            "Use strong operator codes and never share them.",
            "Install software and firmware only from the provider or manufacturer.",
            "Do not plug personal USB drives or phones into a till.",
            "Keep a record of the serial number of each payment device."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A tampered or damaged payment device can put the customer money at risk. Never ignore a seal that looks wrong, even when the terminal still works."
        }
      ],
      "id": "m15-l5"
    },
    {
      "title": "Diagnosing and servicing sales equipment",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to find faults in drawers, printers, scanners, displays, power and network links, and how to keep sales equipment in good condition."
        },
        {
          "t": "h",
          "text": "A simple method"
        },
        {
          "t": "ol",
          "items": [
            "Ask what happened, when it started and whether anything changed, such as a spill, a power cut or a new setting.",
            "Look for damage, loose cables, liquid, dust and crumbs.",
            "Split the system. Use the printer self-test to separate the printer from the register. Test the scanner on a different machine.",
            "Change one thing at a time and record it.",
            "Check a full test sale: price, tax, total, receipt and drawer."
          ]
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
              "Drawer does not open",
              "No kick pulse, loose or wrong cable, key lock set, latch blocked",
              "Try the key, check the cable and port, try a no-sale"
            ],
            [
              "Paper feeds but nothing prints",
              "Roll fitted the wrong way, non-thermal paper, damaged head",
              "Scratch test the paper, run the self-test"
            ],
            [
              "Pale print or a white line",
              "Dirty head, worn head, low density setting, poor paper",
              "Clean the head, check the density setting in the manual"
            ],
            [
              "Scanner beeps but the register shows nothing",
              "Interface mode or cable setting does not match the register",
              "Scan into a text program, scan the setup codes"
            ],
            [
              "Display blank",
              "Loose cable, contrast or brightness setting, power fault",
              "Check the cable and settings"
            ],
            [
              "Terminal cannot reach the server",
              "Network cable, link light off, wrong address",
              "Check the link lights and the address settings"
            ],
            [
              "Date resets after power off",
              "Flat backup battery",
              "Back up if possible and replace the battery as the manual describes"
            ]
          ],
          "caption": "Symptoms, causes and first checks"
        },
        {
          "t": "h",
          "text": "Power and network faults"
        },
        {
          "t": "p",
          "text": "Check the wall outlet, the power cord, the adaptor and any fuse first. Voltage dips and power cuts corrupt memory, so a surge protector or an uninterruptible power supply is good advice for the owner. For a network terminal, look at the link lights, check the cable, and compare the address and subnet mask with the server."
        },
        {
          "t": "h",
          "text": "Firmware"
        },
        {
          "t": "p",
          "text": "Update firmware only when the manufacturer or the fault says you must. Back up first. Use the file made for the exact model. Do not switch off during the update. Record the version before and after."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "If liquid has been spilled into a register, switch off and unplug at once. Do not press keys or use a wet cloth on a powered machine. Let it dry and check for corrosion before you power it on."
        },
        {
          "t": "h",
          "text": "Preventive care and reconditioning"
        },
        {
          "t": "ul",
          "items": [
            "Clean dust, crumbs and spills from the keyboard, drawer and runners.",
            "Clean the thermal head, the platen and the scanner window.",
            "Check cords, plugs and cables for damage.",
            "Check that the scale reads zero and that its seal is unbroken.",
            "Look at the payment terminal for signs of tampering.",
            "Test the drawer, the cutter and the backup battery, then print a test receipt."
          ]
        },
        {
          "t": "p",
          "text": "When you recondition a used machine, clean it, replace worn parts such as the platen or the drawer latch, and test every function. Clear old sales data and operator codes with the previous owner permission, then record the work."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Finish every job with a full test sale, and show the owner that the receipt, drawer and totals are correct."
        }
      ],
      "id": "m15-l6"
    }
  ],
  "practical": {
    "title": "Configure a register and test its printer and drawer",
    "objective": "Set up departments and tax on a training cash register or POS terminal, then test the receipt printer and cash drawer and record the results.",
    "time": "60 minutes",
    "tools": [
      "Training cash register or POS terminal with receipt printer and drawer",
      "Spare roll of thermal paper",
      "Lint-free swabs and isopropyl alcohol",
      "Manufacturer manual for the machine",
      "Notebook and pen",
      "Calculator"
    ],
    "safety": [
      "Use only a training unit that your instructor has approved. Do not use a machine that holds a real shop data.",
      "Check the mains cord and plug for damage before you plug in. Do not use a damaged cord.",
      "Switch off and unplug before you open any cover or clean the print head. Let the head cool first.",
      "Keep your fingers away from the drawer runner and the cutter blade.",
      "Never use or enter real card data. Practise only with the training mode or with cash."
    ],
    "steps": [
      "Read the manual sections for departments, tax and reports. Note the keys you will need.",
      "Inspect the cord, plug, cables and drawer. Write down any damage.",
      "Plug in, switch on and print an X report. Record the date and time shown.",
      "Set the date and time if they are wrong. Print another X report to confirm.",
      "Create department 1 with tax at 10% and department 2 with no tax. Write down the names you give them.",
      "Ring up one sale: 60.00 in department 1 and 20.00 in department 2. Work out the expected total first. It should be 86.00.",
      "Compare the receipt with your figure. Record tax and total.",
      "Check that the drawer opened. Close it and try a no-sale. Record both results.",
      "Run the printer self-test. Look for white lines or pale areas and record what you see.",
      "Switch off, unplug and let the head cool. Clean the print head and the platen as the manual allows, then refit the paper.",
      "Switch on and print a second receipt. Compare it with the first.",
      "Print an X report, then follow your instructor on whether a Z report is allowed on this unit.",
      "Write a short note: settings used, results of each test, and any fault found."
    ],
    "checks": [
      "I can explain the difference between a department and a PLU.",
      "I can work out tax and the total for a sale before the register prints it.",
      "I can tell the coated side of thermal paper.",
      "I can test the printer and the drawer separately.",
      "I can say why a Z report must not be run casually."
    ]
  },
  "quiz": [
    {
      "id": "m15-q01",
      "q": "What is the main difference between a stand-alone cash register and a networked POS system?",
      "options": [
        "A stand-alone register is unable to print receipts, but a networked system can print them.",
        "A stand-alone register stores its own data, while a networked system shares data through a server.",
        "A networked system cannot accept cash payments, but a stand-alone register can take cash.",
        "A stand-alone register cannot calculate tax on a sale, but a networked system can calculate it."
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m15-l1",
      "explain": "The difference is where data is kept. Both kinds print receipts, handle cash and calculate tax."
    },
    {
      "id": "m15-q02",
      "q": "A shop owner has six tills. Prices change five times a week and each change must be typed into every till. Which set-up would fix this problem?",
      "options": [
        "Six stand-alone registers, each fitted with a larger memory card so that more prices fit.",
        "Faster receipt printers fitted on each of the six tills in the shop.",
        "Larger cash drawers fitted on each of the six tills in the shop.",
        "A networked system with prices stored once on a server and sent to all tills."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m15-l1",
      "explain": "Prices must be stored in one shared place. Bigger memory, faster printers and larger drawers do not change where the price data lives, so every till would still need its own update."
    },
    {
      "id": "m15-q03",
      "q": "Which part holds the notes and coins and opens when the machine sends a signal?",
      "options": [
        "The cash drawer.",
        "The customer display.",
        "The platen.",
        "The load cell."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m15-l1",
      "explain": "The cash drawer is the locked tray for cash. The platen belongs to the printer and the load cell belongs to the scale."
    },
    {
      "id": "m15-q04",
      "q": "You have repaired a register that now prints and opens its drawer. What must you still check before handing it back?",
      "options": [
        "That the manager code has been changed to your own code.",
        "That the receipt roll is a brand new full roll.",
        "That a test sale gives the correct price, tax and total on the receipt.",
        "That the customer display is set to its brightest level."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m15-l1",
      "explain": "A machine that prints and opens the drawer can still calculate wrongly. Keeping your own code is poor practice, and roll or brightness are minor points."
    },
    {
      "id": "m15-q05",
      "q": "What does a thermal print head do?",
      "options": [
        "It sprays tiny drops of ink onto the paper.",
        "It strikes an ink ribbon with small pins.",
        "It fuses toner onto the paper with a hot roller.",
        "It heats tiny elements that darken heat-sensitive paper."
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m15-l2",
      "explain": "Thermal printing uses heat only. Spraying ink is inkjet, pins and a ribbon are impact printing, and fusing toner is a laser process."
    },
    {
      "id": "m15-q06",
      "q": "A receipt printer feeds paper normally, but every receipt comes out blank. The paper is the right width. What is the most likely cause?",
      "options": [
        "The ink ribbon has dried out.",
        "The roll is fitted with its coated side facing away from the print head.",
        "The feed motor has failed.",
        "The toner cartridge is empty."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m15-l2",
      "explain": "Paper feeds, so the motor works. Thermal printers have no ribbon or toner. A roll fitted the wrong way gives blank paper."
    },
    {
      "id": "m15-q07",
      "q": "Which type of receipt printer is used where several copies are needed on multi-part paper?",
      "options": [
        "A thermal printer.",
        "A laser scanner.",
        "An impact (dot matrix) printer.",
        "A load-cell printer."
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m15-l2",
      "explain": "Pins that strike a ribbon can press through several layers. Thermal printing cannot make copies on multi-part paper."
    },
    {
      "id": "m15-q08",
      "q": "How does a register normally open a cash drawer?",
      "options": [
        "It tells the receipt printer, which sends a short pulse to the drawer solenoid.",
        "It sends mains voltage from the power supply straight to the drawer latch coil.",
        "The drawer has its own battery and a small wireless receiver for the register signal.",
        "The barcode scanner sends the opening signal to the drawer when a sale ends."
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m15-l2",
      "explain": "The pulse comes from the printer drawer port, not from the mains. Sending mains voltage would be dangerous and is not how drawers are made to work."
    },
    {
      "id": "m15-q09",
      "q": "A technician needs to clean a thermal print head. Which method is correct?",
      "options": [
        "Scrape the head clean with a small blade while the printer is still switched on.",
        "Switch off, let the head cool, then wipe it with a lint-free swab and alcohol.",
        "Wipe the head with a dry paper towel while it is still warm from printing.",
        "Spray a water-based window cleaner directly on the head to remove residue."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m15-l2",
      "explain": "A cool head and a soft swab avoid damage. Blades scratch the elements, and a warm head cleaned with dry paper still leaves dust and can scratch."
    },
    {
      "id": "m15-q10",
      "q": "The printer prints receipts correctly, but the drawer will not open on a no-sale. What is the most sensible first check?",
      "options": [
        "Fit a drawer from another brand that has a higher-voltage solenoid than the original one.",
        "Reinstall all of the register software and then reload the whole price list.",
        "Replace the thermal print head, since the drawer is driven from the printer.",
        "Check the drawer cable is seated in the printer port and the key is not locked."
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m15-l2",
      "explain": "Printing works, so the head and software are probably fine. A loose cable or locked key is the simplest cause. A solenoid of a different voltage can damage the printer port."
    },
    {
      "id": "m15-q11",
      "q": "Why are impact printers often chosen for hot kitchens?",
      "options": [
        "Heat darkens and spoils thermal paper.",
        "Impact printers have no moving parts.",
        "Impact printers need no power supply.",
        "Thermal print heads cannot print numbers."
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m15-l2",
      "explain": "Heat from a kitchen can darken thermal paper, so pin printing on ordinary paper is safer. Impact printers do have moving parts and need power."
    },
    {
      "id": "m15-q12",
      "q": "Why should you not touch a thermal print head with metal tools or bare fingers?",
      "options": [
        "The head contains a laser that can harm your eyes.",
        "The head holds mains voltage at all times.",
        "Scratches, skin oils and static can damage the heating elements.",
        "The head must stay greasy to print properly."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m15-l2",
      "explain": "The heating elements are small and delicate. There is no laser, and the head is a low-voltage part."
    },
    {
      "id": "m15-q13",
      "q": "How many digits are in an EAN-13 code before the check digit?",
      "options": [
        "10",
        "11",
        "13",
        "12"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m15-l3",
      "explain": "EAN-13 has 13 digits in all. The last is the check digit, so 12 digits come before it."
    },
    {
      "id": "m15-q14",
      "q": "What is the check digit for the EAN-13 code that starts 400638133393?",
      "options": [
        "9",
        "1",
        "3",
        "7"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m15-l3",
      "explain": "Weights 1 and 3 give a sum of 89. 89 mod 10 = 9, and 10 − 9 = 1. The tempting answer 9 is only the remainder, not the check digit."
    },
    {
      "id": "m15-q15",
      "q": "What is the check digit for the EAN-13 code that starts 629104150021?",
      "options": [
        "7",
        "5",
        "3",
        "0"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m15-l3",
      "explain": "The weighted sum is 57. 57 mod 10 = 7, and 10 − 7 = 3. The tempting answer 7 is only the remainder."
    },
    {
      "id": "m15-q16",
      "q": "A scanner reads 5901234123458 and rejects it. The weighted sum of the first 12 digits is 83. Why is it rejected?",
      "options": [
        "The check digit should be 7 (10 − 3, as 83 mod 10 = 3), but the code shows 8.",
        "The check digit should be 3, because the remainder of 83 divided by 10 is 3.",
        "The sum 83 is too large to be used in an EAN-13 check digit calculation.",
        "The check digit should be 8, because 83 rounds up to the next ten, which is 90."
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m15-l3",
      "explain": "The check digit is 10 minus the remainder, not the remainder itself. Rounding 83 up to 90 gives a difference of 7, not 8."
    },
    {
      "id": "m15-q17",
      "q": "Which statement about Code 128 is correct?",
      "options": [
        "It encodes digits only and needs a manual check calculation.",
        "It can encode letters and digits and contains its own check character.",
        "It can be read only by laser scanners.",
        "It is used only on retail product packaging."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m15-l3",
      "explain": "Code 128 is flexible and used for internal and shipping labels. Imaging scanners also read it."
    },
    {
      "id": "m15-q18",
      "q": "What can an imaging scanner read that a simple laser line scanner usually cannot?",
      "options": [
        "Codes printed with a check digit.",
        "Codes on thermal paper only.",
        "Codes that are more than 13 digits long.",
        "Two-dimensional codes such as QR codes and codes on a phone screen."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m15-l3",
      "explain": "An imaging scanner takes a picture, so it can decode two-dimensional codes. Check digits and length are not the point."
    },
    {
      "id": "m15-q19",
      "q": "What does a load cell do in a scale?",
      "options": [
        "It flexes slightly under load and electronics convert this to a weight.",
        "It counts how many separate items are standing on the platter of the scale.",
        "It prints the weight on the receipt and stores it in the sales journal.",
        "It holds the calibration seal in place on the outside casing of the scale."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m15-l3",
      "explain": "The load cell is the sensor. Printing and sealing are separate things."
    },
    {
      "id": "m15-q20",
      "q": "A scale shows 0.750 kg of fruit priced at 12.00 per kg. What is the price?",
      "options": [
        "90.00",
        "16.00",
        "9.00",
        "12.75"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m15-l3",
      "explain": "0.750 × 12.00 = 9.00. Dividing 12.00 by 0.750 gives 16.00 and adding the numbers gives 12.75. Neither matches the rule weight × price per kg."
    },
    {
      "id": "m15-q21",
      "q": "A scale shows 1.850 kg including a 0.350 kg empty container. The price is 8.00 per kg. What is the price of the goods?",
      "options": [
        "14.80",
        "2.80",
        "17.60",
        "12.00"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m15-l3",
      "explain": "Net weight is 1.850 − 0.350 = 1.500 kg, so the price is 1.500 × 8.00 = 12.00. The tempting 14.80 charges for the container too."
    },
    {
      "id": "m15-q22",
      "q": "The legal-for-trade seal on a shop scale is found broken. What should you do?",
      "options": [
        "Re-seal it with a seal of your own and carry on using the scale as before.",
        "Stop, tell the owner, and have an authority check and re-seal it first.",
        "Recalibrate it and keep trading, because the seal is only a label on the case.",
        "Ignore it, provided the display matches a test weight when you check it."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m15-l3",
      "explain": "The seal shows that a weights and measures authority checked the scale. A matching test weight does not replace the official check."
    },
    {
      "id": "m15-q23",
      "q": "Why must a scale read zero when empty before you calibrate it with a test weight?",
      "options": [
        "So that the weight of the empty container is added to the price.",
        "So that the load cell is switched on and ready to be used.",
        "So that a test weight shows only the span error, not an offset.",
        "So that the barcode scanner can find the product code."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m15-l3",
      "explain": "An empty platter that does not read zero adds an error to every reading. Zero first, then adjust the span."
    },
    {
      "id": "m15-q24",
      "q": "What does a PLU hold on a cash register or POS terminal?",
      "options": [
        "A stored record for one item: its number, name, price and tax setting.",
        "A type of cash drawer lock that is fitted on the front of the till.",
        "A report that prints and then clears the daily sales totals.",
        "A cable that links the receipt printer to the cash drawer solenoid port."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m15-l4",
      "explain": "PLU means price look-up. The report that clears totals is the Z report."
    },
    {
      "id": "m15-q25",
      "q": "What is the difference between an X report and a Z report?",
      "options": [
        "An X report resets the daily totals, while a Z report only shows them.",
        "An X report shows totals without clearing them; a Z report prints and resets them.",
        "An X report is for one cashier only, while a Z report covers the whole shop.",
        "An X report prints on the journal roll, while a Z report prints on the receipt roll."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m15-l4",
      "explain": "The reset is what matters. An X report can be run any time because it clears nothing."
    },
    {
      "id": "m15-q26",
      "q": "An item costs 80.00 before tax and the register adds 15% tax on top. What total does the customer pay?",
      "options": [
        "12.00",
        "95.00",
        "81.50",
        "92.00"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m15-l4",
      "explain": "Tax = 80.00 × 0.15 = 12.00, so the total is 92.00. The 12.00 figure is only the tax, not the total."
    },
    {
      "id": "m15-q27",
      "q": "A shelf price of 115.00 already includes 15% tax. How much of it is tax?",
      "options": [
        "15.00",
        "17.25",
        "100.00",
        "13.50"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m15-l4",
      "explain": "Net price = 115.00 ÷ 1.15 = 100.00, so the tax is 15.00. Taking 15% of 115.00 gives 17.25, which wrongly treats 115.00 as the price before tax."
    },
    {
      "id": "m15-q28",
      "q": "The opening float is 50.00, cash sales are 430.00 and cash paid out is 20.00. How much cash should be in the drawer?",
      "options": [
        "480.00",
        "500.00",
        "460.00",
        "410.00"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m15-l4",
      "explain": "50.00 + 430.00 − 20.00 = 460.00. The payout is taken away, and the float is added. The tempting 480.00 forgets the payout."
    },
    {
      "id": "m15-q29",
      "q": "A sale has 60.00 of goods taxed at 10% and 20.00 of goods with no tax. What is the total?",
      "options": [
        "88.00",
        "80.00",
        "66.00",
        "86.00"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m15-l4",
      "explain": "Tax = 60.00 × 0.10 = 6.00, so the total is 60.00 + 20.00 + 6.00 = 86.00. The tempting 88.00 taxes all 80.00."
    },
    {
      "id": "m15-q30",
      "q": "At 2 pm during busy trading, an owner asks you to print a Z report to test the printer. What should you point out?",
      "options": [
        "It erases the entire price list together with all the stored tax settings.",
        "It resets the daily totals and ends the sales day; an X report is safer.",
        "It needs a service password, so it cannot be run by the shop owner.",
        "It prints only on the journal copy and never on the paper roll."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m15-l4",
      "explain": "A Z report resets the daily counters. It does not erase prices."
    },
    {
      "id": "m15-q31",
      "q": "Why should you back up the settings before clearing a register memory or updating its firmware?",
      "options": [
        "A backup makes the new firmware install much faster than it would otherwise.",
        "A backup stops the Z report from resetting the daily counters.",
        "Prices, tax rates and settings can be lost, and the backup restores them.",
        "A backup is needed before the cash drawer can be unlocked."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m15-l4",
      "explain": "Memory clears and failed updates can erase stored data. A backup does not change speed, reports or the drawer lock."
    },
    {
      "id": "m15-q32",
      "q": "Why does each cashier get a personal operator code?",
      "options": [
        "So voids, refunds and other actions can be traced to one person.",
        "So the machine prints receipts faster.",
        "So the scanner works with that cashier.",
        "So the tax rate is different for each cashier."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m15-l4",
      "explain": "Personal codes give accountability. They do not change speed, scanning or tax."
    },
    {
      "id": "m15-q33",
      "q": "Why must card data never be written down or photographed while you are servicing a machine?",
      "options": [
        "Card numbers change every day, so the notes would soon be out of date.",
        "Anyone who sees it could use it for fraud, and repair never needs it.",
        "It is only illegal to write down the expiry date, not the number.",
        "It slows down the payment terminal while the data is on show."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m15-l5",
      "explain": "The risk is fraud. Repair work never needs the card number, so there is no good reason to keep it."
    },
    {
      "id": "m15-q34",
      "q": "While servicing a till, you see a small unknown device between the keypad cable and the payment terminal, and a tamper seal is broken. What should you do?",
      "options": [
        "Remove the device yourself, then carry on working on the terminal.",
        "Photograph the terminal screen to keep as evidence for the owner.",
        "Reset the terminal to factory settings to see whether the unknown device goes away.",
        "Stop, do not use the terminal, and tell the owner and the payment provider."
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m15-l5",
      "explain": "An unknown device may be stealing data. Removing it or resetting yourself could destroy evidence and hide the problem. A photo of the screen could capture card data."
    },
    {
      "id": "m15-q35",
      "q": "How does contactless payment work?",
      "options": [
        "A card or phone is held near the reader and short-range radio carries the data.",
        "The card is pushed fully into the slot and held there while a chip is read.",
        "The customer reads the card number aloud to the cashier, who types it in.",
        "The terminal prints the full card number on the customer receipt to be checked."
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m15-l5",
      "explain": "Contactless uses short-range radio at a distance of a few centimetres. Inserting a card is chip payment."
    },
    {
      "id": "m15-q36",
      "q": "A customer says they paid by mobile money and shows a screenshot of a payment screen. What should the cashier do?",
      "options": [
        "Accept the screenshot, because it shows the amount.",
        "Ask for the customer PIN to check the payment.",
        "Check for the payment confirmation in the shop official app or service.",
        "Ask the customer to read out their wallet balance."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m15-l5",
      "explain": "A screenshot can be faked or old. Staff must never ask for a customer PIN."
    },
    {
      "id": "m15-q37",
      "q": "Why should you not open a payment terminal to repair it?",
      "options": [
        "The case contains a laser that can damage your eyes when opened.",
        "The terminal only works while its case is sealed at room temperature.",
        "Opening the case clears the stored printer settings and resets the receipt layout.",
        "Its tamper protection may erase the security keys, and it loses its approval."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m15-l5",
      "explain": "Payment terminals are sealed to protect keys. Repairs of the inside belong to the provider."
    },
    {
      "id": "m15-q38",
      "q": "What does the chip on a payment card do during a chip payment?",
      "options": [
        "It stores the customer PIN in plain form so that the cashier can read it back.",
        "It takes part in a protected exchange of messages with the terminal.",
        "It prints the customer receipt once the payment has been approved.",
        "It tells the cash drawer to open as soon as the card is accepted."
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m15-l5",
      "explain": "The chip is part of a security exchange. PINs are never meant to be read out by staff."
    },
    {
      "id": "m15-q39",
      "q": "A scanner beeps on every scan, but nothing appears on the register. What is the most likely cause?",
      "options": [
        "The laser has failed, because it cannot read the codes.",
        "The EAN-13 check digit is wrong on every product.",
        "The scanner interface mode or cable setting does not match the register port.",
        "The platen needs cleaning."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m15-l6",
      "explain": "A beep means the scanner decoded the code. The problem is in the data path. The platen belongs to the printer."
    },
    {
      "id": "m15-q40",
      "q": "Receipts print well, apart from a thin white line down the whole length of the paper. What is the likely cause?",
      "options": [
        "Dirt on the print head, or a failed heating element on it.",
        "A worn platen gear.",
        "A dirty paper-end sensor.",
        "A low-voltage drawer solenoid."
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m15-l6",
      "explain": "A line that follows the paper means one column of the head is not heating. Clean the head first. Gears and sensors do not leave a line."
    },
    {
      "id": "m15-q41",
      "q": "A register loses its date and settings every time it is switched off. What is the most likely cause?",
      "options": [
        "A worn cutter.",
        "A flat backup battery.",
        "A tax rate set too high.",
        "A dirty scanner window."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m15-l6",
      "explain": "A backup battery keeps the memory alive when the mains is off. The other options do not affect memory."
    },
    {
      "id": "m15-q42",
      "q": "One networked terminal cannot reach the server, while the others work. Its link light is off. What do you check first?",
      "options": [
        "The tax rate in the department settings.",
        "The thermal print head.",
        "The scanner window.",
        "The network cable and the port at the terminal and the switch."
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m15-l6",
      "explain": "The link light shows the physical connection. Tax, the print head and the scanner window have nothing to do with it."
    },
    {
      "id": "m15-q43",
      "q": "What should you do before updating the firmware of a register?",
      "options": [
        "Back up the settings and record the current firmware version.",
        "Clear the memory so the update is clean.",
        "Print a Z report on every cashier code.",
        "Switch off the machine halfway to save time."
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m15-l6",
      "explain": "A backup lets you restore settings if the update fails. Never switch off during an update."
    },
    {
      "id": "m15-q44",
      "q": "A drink has been spilled over a powered register. What is the first thing to do?",
      "options": [
        "Wipe the keys with a wet cloth.",
        "Press the keys to push the liquid out.",
        "Switch off and unplug it.",
        "Dry it with a hair dryer while it is on."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m15-l6",
      "explain": "Liquid on live parts can cause shock and short circuits. Always remove power first."
    },
    {
      "id": "m15-q45",
      "q": "You are reconditioning a used register for resale. What should you do with the stored sales data and operator codes?",
      "options": [
        "Leave them in place so that the new owner can read the whole earlier sales history.",
        "Copy them to your own phone in case the old owner asks for them.",
        "Keep the manager code the same as before so the shop can log in.",
        "Clear them, with the previous owner's permission, before the machine is resold."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m15-l6",
      "explain": "Old sales data and codes belong to the previous owner. Leaving them is a privacy and security risk."
    }
  ],
  "cards": [
    {
      "id": "m15-c01",
      "front": "What is a POS terminal?",
      "back": "A point-of-sale terminal: a computer-based sales machine that records sales, takes payment and often connects to a server.",
      "lesson": "m15-l1"
    },
    {
      "id": "m15-c02",
      "front": "Stand-alone register: where are prices stored?",
      "back": "In the machine own memory, so price changes must be made on each machine.",
      "lesson": "m15-l1"
    },
    {
      "id": "m15-c03",
      "front": "Networked POS: what is the benefit of the server?",
      "back": "Prices and totals are kept in one shared place, so a change is made once.",
      "lesson": "m15-l1"
    },
    {
      "id": "m15-c04",
      "front": "Name the main parts of a register.",
      "back": "Keyboard or touchscreen, displays, cash drawer, receipt printer, scanner, scale, payment device, power supply and backup battery.",
      "lesson": "m15-l1"
    },
    {
      "id": "m15-c05",
      "front": "What does the platen do?",
      "back": "It is the rubber roller that presses paper against the print head and feeds it forward.",
      "lesson": "m15-l2"
    },
    {
      "id": "m15-c06",
      "front": "How can you find the coated side of thermal paper?",
      "back": "Scratch it lightly with a fingernail. The coated side leaves a dark mark. It must face the print head.",
      "lesson": "m15-l2"
    },
    {
      "id": "m15-c07",
      "front": "Symptom: paper feeds but nothing prints.",
      "back": "Roll fitted the wrong way round, wrong paper, or a damaged print head.",
      "lesson": "m15-l2"
    },
    {
      "id": "m15-c08",
      "front": "How do you clean a thermal print head?",
      "back": "Printer off and head cool. Use a lint-free swab with isopropyl alcohol. No metal tools.",
      "lesson": "m15-l2"
    },
    {
      "id": "m15-c09",
      "front": "What is the drawer-kick port?",
      "back": "The printer connection that sends a short pulse to the cash drawer solenoid.",
      "lesson": "m15-l2"
    },
    {
      "id": "m15-c10",
      "front": "What must you check about a drawer solenoid?",
      "back": "Its voltage must match the printer port. It is often 12 V or 24 V, so check the manual.",
      "lesson": "m15-l2"
    },
    {
      "id": "m15-c11",
      "front": "What is an impact printer used for in sales?",
      "back": "Printing copies on multi-part paper, and in hot places where thermal paper would darken.",
      "lesson": "m15-l2"
    },
    {
      "id": "m15-c12",
      "front": "How many digits does EAN-13 have?",
      "back": "13: twelve digits that identify the product and one check digit at the end.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c13",
      "front": "EAN-13 check digit formula",
      "back": "Weights 1 and 3 from the left over 12 digits. Check digit = (10 − (sum mod 10)) mod 10.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c14",
      "front": "Check digit of 590123412345",
      "back": "Sum = 83, remainder 3, check digit = 7. Full code 5901234123457.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c15",
      "front": "What is Code 128?",
      "back": "A compact barcode that carries letters and digits and has its own check character.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c16",
      "front": "Laser versus imaging scanner",
      "back": "A laser scanner sweeps a beam across a code. An imaging scanner takes a picture and decodes it, and can read 2D codes.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c17",
      "front": "What is a keyboard wedge scanner?",
      "back": "A scanner that sends data as if it were typed on a keyboard, usually ending with Enter.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c18",
      "front": "What is tare?",
      "back": "The weight of the empty container, which is subtracted so only the goods are priced.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c19",
      "front": "What does legal for trade mean?",
      "back": "A weights and measures authority has checked the scale and sealed its settings. Never break the seal.",
      "lesson": "m15-l3"
    },
    {
      "id": "m15-c20",
      "front": "What is a department?",
      "back": "A group of goods that share a name and usually a tax rate.",
      "lesson": "m15-l4"
    },
    {
      "id": "m15-c21",
      "front": "X report",
      "back": "Shows the totals so far and clears nothing. It can be printed at any time.",
      "lesson": "m15-l4"
    },
    {
      "id": "m15-c22",
      "front": "Z report",
      "back": "Prints end-of-day totals and resets daily counters. Normally run once at closing. It cannot be undone.",
      "lesson": "m15-l4"
    },
    {
      "id": "m15-c23",
      "front": "Tax added on top: price 80.00, rate 15%",
      "back": "Tax 12.00, total 92.00.",
      "lesson": "m15-l4"
    },
    {
      "id": "m15-c24",
      "front": "Tax inside the price: shelf price 115.00, rate 15%",
      "back": "Net 115.00 ÷ 1.15 = 100.00, tax 15.00.",
      "lesson": "m15-l4"
    },
    {
      "id": "m15-c25",
      "front": "Expected cash formula",
      "back": "Opening float + cash sales − cash paid out.",
      "lesson": "m15-l4"
    },
    {
      "id": "m15-c26",
      "front": "Why does a register date keep resetting?",
      "back": "The backup battery is probably flat.",
      "lesson": "m15-l4"
    },
    {
      "id": "m15-c27",
      "front": "Name three ways customers pay without cash.",
      "back": "Chip card, contactless card or phone, and mobile money.",
      "lesson": "m15-l5"
    },
    {
      "id": "m15-c28",
      "front": "Signs of a tampered payment terminal",
      "back": "Broken seals, new scratches or holes, a thin overlay, extra cables, or a device that does not match the serial number.",
      "lesson": "m15-l5"
    },
    {
      "id": "m15-c29",
      "front": "What is card data?",
      "back": "Card number, expiry date, security code and PIN. Never write down, photograph or store it.",
      "lesson": "m15-l5"
    },
    {
      "id": "m15-c30",
      "front": "Why not open a payment terminal?",
      "back": "Tamper protection may erase its keys, and an opened terminal is no longer approved.",
      "lesson": "m15-l5"
    },
    {
      "id": "m15-c31",
      "front": "Symptom: scanner beeps but the register shows nothing.",
      "back": "The interface mode or cable setting does not match the register port.",
      "lesson": "m15-l6"
    },
    {
      "id": "m15-c32",
      "front": "Symptom: drawer does not open.",
      "back": "No kick pulse, loose or wrong cable, locked key, or a blocked latch.",
      "lesson": "m15-l6"
    },
    {
      "id": "m15-c33",
      "front": "Symptom: white line down the receipt.",
      "back": "A dirty head or a failed heating element on the print head.",
      "lesson": "m15-l6"
    },
    {
      "id": "m15-c34",
      "front": "First action after a liquid spill into a register",
      "back": "Switch off and unplug it.",
      "lesson": "m15-l6"
    }
  ]
});

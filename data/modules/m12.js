OMM.registerModule({
  "id": "m12",
  "summary": "Explain how laser, inkjet, dot-matrix and thermal printers, scanners and monitors work, find print quality faults from symptoms, and carry out routine servicing and maintenance safely.",
  "outcomes": [
    "Compare laser, inkjet, dot-matrix and thermal printers and choose one for a job.",
    "Describe the six steps of the laser printer engine and name the main parts.",
    "Service inkjet and dot-matrix printers, including nozzles, waste pads, alignment and ribbons.",
    "Explain how a flatbed scanner and an LCD monitor are built, and diagnose their common faults.",
    "Diagnose print quality faults from symptoms and repeating defect spacing.",
    "Plan and carry out preventive maintenance by page count and dispose of waste safely."
  ],
  "cheatsheet": [
    "Laser steps: charge, expose, develop, transfer, fuse, clean.",
    "Fuser is typically 160 to 200 °C. Switch off, unplug and let it cool.",
    "Never blow toner out. Use a toner-rated vacuum and a damp cloth.",
    "Pixels on a page = width in inches × dpi by height in inches × dpi.",
    "Time per page = 60 ÷ pages per minute.",
    "Inkjet: one cleaning cycle, then a nozzle check. Switch off with the power button.",
    "Repeating defect spacing = π × roller diameter.",
    "Uncompressed scan size = pixels × bytes per pixel (3 for 24-bit colour).",
    "Reset a counter only after the new part is fitted.",
    "Look up error codes in the service manual. Codes differ by model."
  ],
  "lessons": [
    {
      "id": "m12-l1",
      "title": "Printer technologies",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson compares the four main printer technologies in office work: laser and LED, inkjet, dot matrix and thermal. It also explains resolution and speed, and which technology suits which job."
        },
        {
          "t": "h",
          "text": "Laser and LED printers"
        },
        {
          "t": "p",
          "text": "A **laser printer** forms an image of the page on a light-sensitive drum, attracts a dry powder called **toner** to it, and melts the toner onto the paper. An **LED printer** works the same way but writes the image with a fixed row of LEDs instead of a moving laser beam. Both are fast and sharp, and cost little per page on plain paper. They suit busy offices."
        },
        {
          "t": "h",
          "text": "Inkjet printers"
        },
        {
          "t": "p",
          "text": "An **inkjet printer** fires tiny drops of liquid ink through nozzles in a print head. In a **thermal inkjet** head, a small heater makes a bubble that pushes out a drop. In a **piezo** head, an electric signal flexes a crystal that pushes out the drop. Inkjets handle photos and colour well. Ink costs more per page, and nozzles can dry and block if the printer is left unused."
        },
        {
          "t": "h",
          "text": "Dot-matrix and thermal printers"
        },
        {
          "t": "p",
          "text": "A **dot-matrix printer** is an **impact printer**. Small pins in the head strike an inked ribbon against the paper. Because it hits the paper, it can mark through several layers at once, so it suits carbon-copy forms. It is noisy and coarse, but it is tough."
        },
        {
          "t": "p",
          "text": "A **thermal printer** heats tiny dots. **Direct thermal** printing darkens special heat-sensitive paper, so it needs no ink or toner. It is quiet and simple, and it is common for receipts and labels. The printout can fade with heat, light or time. **Thermal transfer** printing heats a ribbon to melt ink onto ordinary label stock."
        },
        {
          "t": "table",
          "head": [
            "Type",
            "Marks the paper by",
            "Suits",
            "Main weakness"
          ],
          "rows": [
            [
              "Laser or LED",
              "Toner melted on",
              "Office documents, high volume",
              "Hot fuser, costly parts"
            ],
            [
              "Inkjet",
              "Drops of liquid ink",
              "Photos, colour, low volume",
              "Dried nozzles, ink cost"
            ],
            [
              "Dot matrix",
              "Pins striking a ribbon",
              "Multipart forms",
              "Noisy, low detail"
            ],
            [
              "Thermal",
              "Heated dots on special paper",
              "Receipts, labels",
              "Print fades with time"
            ]
          ],
          "caption": "General guide. Choose by the job and the running cost, not by habit."
        },
        {
          "t": "h",
          "text": "Resolution and speed"
        },
        {
          "t": "p",
          "text": "**Resolution** is measured in **dots per inch** (dpi). A higher dpi packs more dots into each inch, so detail is finer. The pixels on a page equal the page size in inches multiplied by the dpi, in each direction."
        },
        {
          "t": "example",
          "title": "Pixels on a US Letter page",
          "steps": [
            "The page is 8.5 × 11 inches. At 300 dpi: 8.5 × 300 = 2550 and 11 × 300 = 3300.",
            "Total = 2550 × 3300 = 8,415,000 pixels.",
            "At 600 dpi both numbers double, so the total is four times larger: 5100 × 6600 = 33,660,000 pixels.",
            "The dot spacing at 600 dpi is 25.4 mm ÷ 600 ≈ 0.042 mm."
          ]
        },
        {
          "t": "p",
          "text": "**Speed** is usually given in pages per minute (ppm). At 30 ppm one page takes 60 ÷ 30 = 2 seconds. Makers quote speed under ideal conditions, so real jobs are slower."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Ask what the customer prints, how many pages a month, and on what paper, before you recommend a technology."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Pick the technology from the job: speed and volume suggest laser, photos suggest inkjet, multipart forms suggest dot matrix, receipts suggest thermal."
        }
      ]
    },
    {
      "id": "m12-l2",
      "title": "The laser printer engine",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains the laser printer engine: the six steps that put toner on the page, and the main parts that do the work. It also covers the hazards you must respect when you open one."
        },
        {
          "t": "h",
          "text": "The six steps"
        },
        {
          "t": "ol",
          "items": [
            "**Charge.** A charge roller or corona gives the drum surface an even electrical charge.",
            "**Expose.** A laser beam, or an LED array, switches off the charge on the drum where the page will print. This leaves an invisible **latent image**.",
            "**Develop.** Toner on the developer roller is attracted to the exposed areas of the drum.",
            "**Transfer.** A transfer roller pulls the toner from the drum onto the paper.",
            "**Fuse.** The paper passes between a hot roller or film and a pressure roller. Heat and pressure melt the toner into the paper.",
            "**Clean.** A blade scrapes leftover toner off the drum, ready for the next page."
          ]
        },
        {
          "t": "p",
          "text": "Colour printers repeat the process for each toner colour: cyan, magenta, yellow and black. The details of each step vary by model, so check the manufacturer's service manual."
        },
        {
          "t": "h",
          "text": "Main parts"
        },
        {
          "t": "table",
          "head": [
            "Part",
            "What it does",
            "How it fails"
          ],
          "rows": [
            [
              "Toner cartridge",
              "Holds toner, often with the developer roller",
              "Runs empty, leaks"
            ],
            [
              "Drum",
              "Holds the latent image",
              "Scratches, wear, light damage"
            ],
            [
              "Transfer roller",
              "Moves toner to the paper",
              "Dirt, wear"
            ],
            [
              "Fuser",
              "Melts toner into the paper",
              "Worn rollers, failed heater"
            ],
            [
              "Laser unit",
              "Writes the image",
              "Dirty window, rarely fails"
            ]
          ],
          "caption": "Many cartridges combine the drum, developer and cleaner in one unit."
        },
        {
          "t": "p",
          "text": "The drum is coated with an **organic photoconductor** (OPC). It is sensitive to light and easy to scratch. Never touch its surface, and do not leave it in bright light."
        },
        {
          "t": "h",
          "text": "Hazards"
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "The **fuser** is very hot. Its temperature is typically 160 to 200 °C, but check the service manual. Switch off, unplug and wait for it to cool before you touch it."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A laser beam can damage the eyes. **Interlock** switches cut the laser or power when a cover opens. Never bypass an interlock. The laser unit is sealed, so do not open it."
        },
        {
          "t": "p",
          "text": "Toner dust is extremely fine. **Never blow it out** with compressed air or your mouth. Use a vacuum cleaner made for toner, with a suitable filter, and wipe the rest with a damp cloth. If toner gets on skin or clothes, wash with cold water, because hot water can make it stick."
        },
        {
          "t": "p",
          "text": "Static charge can damage circuit boards. Touch the metal frame, or wear an anti-static wrist strap, before you handle a board. Hold boards by their edges."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Print a test page before you open the machine. After the repair, compare the new page with the old one."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Charge, expose, develop, transfer, fuse, clean. If you know which step makes each defect, you know where to look."
        }
      ]
    },
    {
      "id": "m12-l3",
      "title": "Inkjet and dot-matrix servicing",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers servicing inkjet and dot-matrix printers: print heads, blocked nozzles, ink systems, waste ink pads, alignment, ribbons and head care."
        },
        {
          "t": "h",
          "text": "Inkjet heads and nozzles"
        },
        {
          "t": "p",
          "text": "An inkjet head has hundreds of nozzles, each thinner than a hair. If ink dries in a nozzle, a thin line is missing from the print. A **nozzle check** pattern shows which colours have gaps. Print it before and after any cleaning."
        },
        {
          "t": "diagram",
          "name": "inkjet-head"
        },
        {
          "t": "p",
          "text": "A **cleaning cycle** pumps ink through the nozzles to clear a blockage. A **capping station** seals the head when the printer is idle, so the nozzles do not dry. That is why you switch the printer off with its own button. Pulling the plug can leave the head uncapped."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Run one cleaning cycle, then print the nozzle check again. Repeated cleaning wastes ink and fills the waste pad."
        },
        {
          "t": "h",
          "text": "Ink systems and waste ink"
        },
        {
          "t": "p",
          "text": "Ink flows from cartridges or tanks through tubes to the head. Air in the system or an empty colour causes missing colour. Cleaning cycles push waste ink into a **waste ink pad**, a sponge inside the machine. When the pad is full, many printers stop with an error so that ink does not leak. The pad must be replaced or serviced, and its counter reset, as the manual describes."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Ink stains skin and clothes, and some inks irritate. Wear gloves. Do not touch the nozzle plate or the electrical contacts on a head."
        },
        {
          "t": "h",
          "text": "Alignment"
        },
        {
          "t": "p",
          "text": "After you replace a head or cartridge, run the **alignment** routine. It prints patterns so the printer can match the left-to-right and right-to-left passes. Poor alignment gives blurred text and doubled lines."
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause",
            "Action"
          ],
          "rows": [
            [
              "White lines across the print",
              "Blocked nozzles",
              "One cleaning cycle, then nozzle check"
            ],
            [
              "Doubled or blurred edges",
              "Head out of alignment",
              "Run the alignment routine"
            ],
            [
              "One colour missing",
              "Empty ink or air in the line",
              "Check the ink supply"
            ],
            [
              "Error with a full pad",
              "Waste ink pad is full",
              "Service the pad as the manual says"
            ]
          ],
          "caption": "Inkjet symptoms and first actions."
        },
        {
          "t": "h",
          "text": "Dot-matrix printers"
        },
        {
          "t": "p",
          "text": "A dot-matrix head has a column of pins, often 9 or 24. Each pin is driven by a small electromagnet. The pins strike the ribbon against the paper as the head moves along the line. A broken or stuck pin leaves a horizontal gap at the same height in every character."
        },
        {
          "t": "ul",
          "items": [
            "**Ribbon.** A worn or dry ribbon gives faint print. Replace it and check that it moves freely.",
            "**Platen gap.** This is the distance between the head and the platen. Too wide gives faint print. Too narrow smudges the paper and wears the ribbon. Set it for the thickness of the forms.",
            "**Head heat.** The head gets hot in use. Let it cool before you handle it.",
            "**Carriage rails.** Clean them, and lubricate only where the manual says."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Check the print-head nozzles or pins and the supply, whether ink or ribbon, before you replace any expensive part."
        }
      ]
    },
    {
      "id": "m12-l4",
      "title": "Scanners and monitors",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how flatbed scanners and monitors are built, how resolution and calibration affect results, and the faults you will meet most often."
        },
        {
          "t": "h",
          "text": "Flatbed scanner structure"
        },
        {
          "t": "p",
          "text": "A **flatbed scanner** has a glass plate and a moving carriage underneath. The carriage holds a light source and a line sensor. A stepper motor and belt move it along the page, and the sensor reads one line at a time. Many scanners have a **transport lock** that must be released before use."
        },
        {
          "t": "diagram",
          "name": "scanner-optics"
        },
        {
          "t": "p",
          "text": "A **document feeder** pulls sheets across a narrow glass strip while the sensor stays still. Dirt on that strip makes a line on every scan. Worn rollers cause misfeeds or several sheets at once."
        },
        {
          "t": "h",
          "text": "Resolution and file size"
        },
        {
          "t": "formula",
          "text": "File size = pixels × bytes per pixel",
          "caption": "Uncompressed image size"
        },
        {
          "t": "example",
          "title": "Size of a colour scan",
          "steps": [
            "A US Letter page at 300 dpi has 2550 × 3300 = 8,415,000 pixels.",
            "Colour at 24 bits uses 3 bytes per pixel, so 8,415,000 × 3 = 25,245,000 bytes, about 25 MB.",
            "Sent over a 100 Mbit/s link at full speed: 25 MB × 8 = 200 Mbit, and 200 ÷ 100 = 2 seconds.",
            "Real transfers are slower because of overhead. Compression makes files smaller."
          ]
        },
        {
          "t": "h",
          "text": "Calibration"
        },
        {
          "t": "p",
          "text": "Lamp brightness and sensor response vary along the scan line and change with age. The scanner reads a white reference strip and adjusts for the differences. This is called **shading correction**. Some scanners also offer calibration with a test target. A dirty reference strip or a yellowed lamp gives uneven or tinted scans."
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause",
            "Action"
          ],
          "rows": [
            [
              "Vertical line on every scan",
              "Dirt or scratch on glass or feeder strip",
              "Clean with a lint-free cloth"
            ],
            [
              "Dark or uneven scan",
              "Lamp ageing, bad calibration",
              "Run calibration, check the lamp"
            ],
            [
              "Carriage will not move",
              "Transport lock on, belt or motor fault",
              "Release the lock, check the drive"
            ],
            [
              "Several sheets feed at once",
              "Worn separation roller",
              "Clean or replace the roller"
            ]
          ],
          "caption": "Common scanner faults."
        },
        {
          "t": "h",
          "text": "Monitors"
        },
        {
          "t": "p",
          "text": "An **LCD** monitor has a liquid-crystal panel that makes no light of its own. Light from a **backlight** passes through the panel. Most modern monitors use LED backlights. Older ones use fluorescent tubes with a high-voltage inverter. A power board, a main board and a controls board complete the monitor. A 1920 × 1080 panel has 1920 × 1080 = 2,073,600 pixels."
        },
        {
          "t": "ul",
          "items": [
            "No picture and no power light: check the power supply and the cord.",
            "Dim picture that you can still see with a torch held close: the backlight or its driver has failed, not the panel.",
            "Flicker or colour noise: try another cable and another source first.",
            "Lines or dead patches that stay with different cables: the panel itself."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Unplug before you open a monitor. The power board, and the inverter in older monitors, can hold dangerous voltages after switching off. Do not press on the panel."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Swap in a known-good cable and a second source before you blame the monitor."
        }
      ]
    },
    {
      "id": "m12-l5",
      "title": "Print quality faults",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson links print defects to their likely causes. You will use a symptom table, find a faulty roller from a repeating mark, and learn how to use error codes properly."
        },
        {
          "t": "h",
          "text": "Method"
        },
        {
          "t": "p",
          "text": "Print a test page and a configuration page. Note where the defect is, whether it is on every page, and whether it repeats at an even spacing. Then use the table. Change one thing at a time, and test after each change."
        },
        {
          "t": "h",
          "text": "Symptom to cause"
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause",
            "First action"
          ],
          "rows": [
            [
              "Toner rubs off the page",
              "Fuser too cool or failed, wrong paper setting",
              "Check fuser and paper type"
            ],
            [
              "Black line on every page",
              "Damaged drum or dirty or damaged blade",
              "Inspect drum and blade"
            ],
            [
              "Light or faded print",
              "Low toner, weak voltages, dirty contacts",
              "Check toner, clean contacts"
            ],
            [
              "Blank page",
              "Seal tape left in, no voltage, no image data",
              "Check the cartridge seal"
            ],
            [
              "Grey background",
              "Worn drum or developer",
              "Replace the worn unit"
            ],
            [
              "Ghost of earlier image",
              "Drum not clearing, worn drum",
              "Replace the drum, check the cleaner"
            ],
            [
              "Paper jams in the same place",
              "Worn or dirty rollers, damaged guide",
              "Inspect that point"
            ],
            [
              "Wrinkled pages",
              "Damp paper or fuser pressure fault",
              "Try fresh dry paper, then check the fuser"
            ]
          ],
          "caption": "Laser symptoms. Confirm with the manual for your model."
        },
        {
          "t": "h",
          "text": "Repeating defects"
        },
        {
          "t": "p",
          "text": "A mark that repeats at an even spacing down the page comes from a rotating part. The spacing equals the circumference of the part that makes it."
        },
        {
          "t": "diagram",
          "name": "repeating-defect"
        },
        {
          "t": "formula",
          "text": "Circumference = π × diameter",
          "caption": "Repeat spacing of a roller"
        },
        {
          "t": "example",
          "title": "Finding the roller",
          "steps": [
            "A mark repeats every 94 mm. The candidates have diameters 20 mm, 30 mm and 45 mm.",
            "π × 20 = 62.8 mm. π × 30 = 94.2 mm. π × 45 = 141.4 mm.",
            "Only the 30 mm roller gives about 94 mm, so inspect that roller first.",
            "Check the manual for the roller sizes of your model."
          ]
        },
        {
          "t": "h",
          "text": "Error codes"
        },
        {
          "t": "p",
          "text": "An **error code** is a number or message the machine shows when it detects a fault. Codes differ between makers and models, so look every code up in the service manual. Do not guess. Write the code down together with the page counter. Clearing a code without fixing the cause only hides the fault."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Compare the fault with a known-good page from another machine of the same model if you can."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Look at the defect first: place, spacing and whether it is on every page. This usually names the part before you open the machine."
        }
      ]
    },
    {
      "id": "m12-l6",
      "title": "Servicing procedure and maintenance kits",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson sets out a routine servicing procedure: planning preventive maintenance by page count, cleaning, replacing consumables, test pages, counters and safe disposal."
        },
        {
          "t": "h",
          "text": "Preventive maintenance"
        },
        {
          "t": "p",
          "text": "**Preventive maintenance** (PM) means cleaning or replacing parts before they fail. Makers give page counts for wear parts such as the fuser and rollers, and often group them into a **maintenance kit**. Read the page count from the machine's counter, in a menu or on a status page. The figures vary by model, so use the service manual."
        },
        {
          "t": "example",
          "title": "Planning the next visit",
          "steps": [
            "Example only: the kit is due at 100,000 pages and the counter reads 87,450.",
            "Pages left = 100,000 − 87,450 = 12,550.",
            "The customer prints about 4,000 pages a month, so 12,550 ÷ 4,000 ≈ 3.1 months.",
            "Plan the visit in about 3 months, or earlier if the print quality drops."
          ]
        },
        {
          "t": "h",
          "text": "Procedure"
        },
        {
          "t": "ol",
          "items": [
            "Ask the customer about the symptoms and any recent changes.",
            "Read the counters. Print a status page and a test page, and record them.",
            "Switch off, unplug, and let the fuser cool.",
            "Open the covers. Vacuum toner dust with a toner-rated vacuum, and wipe with a lint-free cloth.",
            "Clean rollers, sensors and the paper path as the manual says. Look for wear.",
            "Replace the parts that are due. Fit them as the manual shows.",
            "Close everything and check that each cover and interlock works.",
            "Reset the counter for the parts you replaced, only after they are fitted.",
            "Print a test page and a typical customer job. Check feed, quality and noise.",
            "Record the readings and what you did, and tell the customer."
          ]
        },
        {
          "t": "h",
          "text": "Consumables and counters"
        },
        {
          "t": "p",
          "text": "Makers quote toner and ink yields at a stated coverage, so real yields differ. Always fit the correct type. A counter reset tells the machine that a new part is fitted. If you reset it without replacing the part, the next warning will come far too late."
        },
        {
          "t": "h",
          "text": "Safe disposal"
        },
        {
          "t": "ul",
          "items": [
            "Used toner cartridges and drums: return them through a maker or dealer take-back scheme, or follow local rules. Do not burn them.",
            "Waste toner and waste ink pads: seal them in a bag and dispose of them as local rules require.",
            "Batteries, circuit boards and monitors: take them to a licensed electronic-waste recycler.",
            "Stored data: some machines keep customer documents on a drive. Follow the customer's policy and erase it before the machine leaves."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Keep a simple record for each machine: date, page count, parts replaced and the test result. It makes the next visit faster."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Do the work in a fixed order, record the counter before and after, and reset a counter only for a part you have actually fitted."
        }
      ]
    }
  ],
  "practical": {
    "title": "Diagnose defects from sample prints and clean a printer",
    "objective": "Match sample print defects to likely causes with a symptom table, then carry out a safe cleaning procedure on a training laser printer and check the result with a test page.",
    "time": "60 minutes",
    "tools": [
      "Training laser printer, switched off and cool",
      "Sample prints with defects, supplied by your instructor",
      "Vacuum cleaner made for toner",
      "Lint-free cloths and a damp cloth",
      "Anti-static wrist strap",
      "Service manual for the training printer",
      "Record sheet and pen"
    ],
    "safety": [
      "Switch off, unplug and wait until the fuser has cooled before you open any cover.",
      "Do not blow toner out. Clean toner dust only with a vacuum made for toner and a damp cloth.",
      "Never defeat or hold closed a cover interlock, and do not open the sealed laser unit.",
      "Wear the anti-static wrist strap before you touch any circuit board, and hold boards by their edges.",
      "Do not touch the drum surface and keep it out of bright light.",
      "If toner gets on your skin or clothes, wash with cold water, because hot water can make it stick."
    ],
    "steps": [
      "Read the sample prints one at a time. Write down where each defect is and whether it repeats.",
      "For each print, write the likely cause using the symptom table in your notes.",
      "Measure the distance between repeating marks with a ruler, in millimetres, and record it.",
      "Calculate the circumference of each roller diameter on your list as π × diameter, and find the closest match.",
      "Switch off the training printer, unplug it, and wait for the fuser to cool.",
      "Fit the wrist strap, clip it to the printer frame, and open the covers as the manual shows.",
      "Remove the cartridge and put it in a shaded place. Do not touch the drum surface.",
      "Vacuum loose toner from the paper path with the toner-rated vacuum.",
      "Wipe the guides and rollers with a lint-free cloth as the manual shows.",
      "Check the rollers for wear, glazing or cracks, and record what you see.",
      "Refit the cartridge, close all covers, and check that each one clicks fully into place.",
      "Plug in, switch on, and print a test page. Compare it with the page you printed first.",
      "Record the page counter, what you cleaned and the result."
    ],
    "checks": [
      "I can match a print defect to a likely cause using a symptom table.",
      "I can work out which roller causes a repeating defect from its spacing.",
      "I can clean a laser printer without blowing toner into the air.",
      "I can explain why I must unplug and wait before opening the fuser area.",
      "I can record the counter and test result in a service note."
    ]
  },
  "quiz": [
    {
      "id": "m12-q01",
      "q": "Which printer technology makes marks by heating dots on special paper, with no ink or toner?",
      "options": [
        "Thermal inkjet",
        "LED printing",
        "Direct thermal",
        "Piezo inkjet"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m12-l1",
      "explain": "Direct thermal paper darkens when heated, so no ink or toner is needed. A thermal inkjet also uses heat, but only to push liquid ink out of a nozzle."
    },
    {
      "id": "m12-q02",
      "q": "Why can a dot-matrix printer make several copies at once on multipart forms?",
      "options": [
        "It strikes the paper, so the impact marks through each layer",
        "It heats every layer of the form so that the ink melts through to the copies",
        "It sprays extra ink that soaks into the layers",
        "It uses a stronger laser beam than other printers"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m12-l1",
      "explain": "A dot-matrix printer is an impact printer, and the force carries the mark through the sheets. Heat and laser light do not mark through several layers."
    },
    {
      "id": "m12-q03",
      "q": "A shop prints many short receipts every hour and wants quiet, simple, low-maintenance printing. Which technology suits it best?",
      "options": [
        "A colour laser printer",
        "An inkjet with large tanks",
        "A dot-matrix printer",
        "A thermal receipt printer"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m12-l1",
      "explain": "Thermal printers are quiet and need no ink or toner. A dot-matrix printer could work, but it is noisy, and the question asks for quiet printing."
    },
    {
      "id": "m12-q04",
      "q": "A US Letter page is 8.5 × 11 inches. How many pixels is it at 300 dpi?",
      "options": [
        "1275 × 1650 pixels",
        "2550 × 3300 pixels",
        "5100 × 6600 pixels",
        "850 × 1100 pixels"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m12-l1",
      "explain": "Multiply each side by 300: 8.5 × 300 = 2550 and 11 × 300 = 3300. The value 5100 × 6600 is the size at 600 dpi."
    },
    {
      "id": "m12-q05",
      "q": "A printer is rated at 30 pages per minute. About how long does a 120-page job take at that speed?",
      "options": [
        "2 minutes",
        "4 minutes",
        "5 minutes",
        "6 minutes"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m12-l1",
      "explain": "120 ÷ 30 = 4 minutes. Two minutes would need 60 pages per minute. Real jobs also lose time to start-up, so this is the best case."
    },
    {
      "id": "m12-q06",
      "q": "What happens to the spacing between dots when a printer's resolution rises from 300 dpi to 600 dpi?",
      "options": [
        "The spacing doubles",
        "The spacing stays the same",
        "The spacing falls to a quarter",
        "The spacing halves"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m12-l1",
      "explain": "600 dpi has twice as many dots per inch, so each dot is half as far from its neighbour. The total number of dots on the page is four times larger, which is the tempting wrong idea."
    },
    {
      "id": "m12-q07",
      "q": "What is the correct order of the laser printing steps?",
      "options": [
        "Charge, expose, develop, transfer, fuse, clean",
        "Expose, charge, develop, fuse, transfer, clean",
        "Charge, develop, expose, transfer, fuse, clean",
        "Clean, transfer, expose, charge, develop, fuse"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m12-l2",
      "explain": "The drum is charged, the image is written, toner is added, moved to the paper, melted on, and the drum is then cleaned. Toner cannot be developed before the image exists."
    },
    {
      "id": "m12-q08",
      "q": "What does the laser beam or LED array do during exposure?",
      "options": [
        "Melts the toner so that it sticks to the drum",
        "Gives the drum an even charge over its whole surface before the image is written",
        "Switches off the charge on the drum where the page will print",
        "Heats the paper before it meets the transfer roller"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m12-l2",
      "explain": "The light removes charge in the image areas, which makes the latent image. The even charge comes earlier, from the charge roller or corona."
    },
    {
      "id": "m12-q09",
      "q": "Which part melts the toner so that it bonds to the paper?",
      "options": [
        "The transfer roller",
        "The developer roller",
        "The cleaning blade",
        "The fuser"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m12-l2",
      "explain": "The fuser uses heat and pressure. The transfer roller only moves toner onto the paper, and the toner is still loose powder at that point."
    },
    {
      "id": "m12-q10",
      "q": "A laser printer has just finished a long job and shows a jam in the fuser area. What is the safest first action?",
      "options": [
        "Pull the sheet out quickly while the machine is still running",
        "Switch off, unplug, and wait for the fuser to cool before reaching in",
        "Hold the cover switch closed so that the machine keeps running and the job can finish",
        "Spray the fuser with cleaning fluid to cool it down quickly"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m12-l2",
      "explain": "The fuser can be around 160 to 200 °C. It must be unplugged and cooled first. Holding a cover switch closed defeats an interlock, which is never allowed."
    },
    {
      "id": "m12-q11",
      "q": "Toner has spilled inside a laser printer. How should you clean it up?",
      "options": [
        "Blow it out with compressed air so that the dust leaves the machine",
        "Sweep it up with a dry brush and shake the brush outside",
        "Use a vacuum made for toner, then wipe with a damp cloth",
        "Use an ordinary household vacuum cleaner at full power"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m12-l2",
      "explain": "Toner dust is extremely fine. Blowing it spreads it into the air and into the machine, and ordinary vacuums can pass it through the filter. Use a toner-rated vacuum."
    },
    {
      "id": "m12-q12",
      "q": "What is the main job of the transfer roller?",
      "options": [
        "It pulls toner from the drum onto the paper",
        "It presses toner into the paper fibres with heat",
        "It scrapes leftover toner off the drum",
        "It spreads a thin layer of toner on the developer roller"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m12-l2",
      "explain": "The transfer roller creates an electric field that attracts toner to the paper. Pressing with heat is the fuser, and scraping is the cleaning blade."
    },
    {
      "id": "m12-q13",
      "q": "Why must a laser interlock never be bypassed?",
      "options": [
        "It only stops the paper moving, so the laser is harmless when open",
        "It only counts the pages, and a bypass makes the counter wrong",
        "It cuts the laser or power when a cover is opened, which protects your eyes and skin",
        "It only saves energy when the covers are open"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m12-l2",
      "explain": "An interlock is a safety switch. A laser beam can injure the eyes, and the interlock is what stops it reaching you when a cover is open."
    },
    {
      "id": "m12-q14",
      "q": "What does a cleaning cycle on an inkjet printer do?",
      "options": [
        "It pushes ink through the nozzles to clear blockages",
        "It aligns the head for left-to-right and right-to-left passes of the carriage",
        "It dries the paper before it is printed",
        "It resets the page counter to zero"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m12-l3",
      "explain": "Cleaning forces ink through the nozzles. Alignment is a separate routine that prints patterns to match the head passes."
    },
    {
      "id": "m12-q15",
      "q": "An inkjet print has white horizontal lines. The nozzle check shows gaps in one colour. What is the sensible first action?",
      "options": [
        "Run cleaning cycles repeatedly until the ink runs out",
        "Run one cleaning cycle, then print the nozzle check again",
        "Replace the print head straight away",
        "Wipe the nozzle plate with a dry tissue while the printer is on"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m12-l3",
      "explain": "One cleaning cycle often clears the blockage. Repeating it wastes ink and fills the waste pad, and touching the nozzle plate can damage it."
    },
    {
      "id": "m12-q16",
      "q": "What does a full waste ink pad usually cause?",
      "options": [
        "The print head is no longer capped when idle",
        "The cartridges stop being recognised by the printer until they are reseated",
        "The nozzles block more often than before",
        "The printer stops with an error so that ink does not leak"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m12-l3",
      "explain": "Cleaning and purging push waste ink into the pad. When it is full, many printers stop. The pad must be serviced and the counter reset as the manual says."
    },
    {
      "id": "m12-q17",
      "q": "Why should an inkjet printer be switched off with its own power button, not by pulling the plug?",
      "options": [
        "So the ink pump can drain the cartridges",
        "So the paper tray closes and locks in place",
        "So the head returns to its capped position and the nozzles stay moist",
        "So the printer can print a final test page"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m12-l3",
      "explain": "The capping station seals the head when the printer is switched off correctly. An uncapped head dries out and the nozzles block."
    },
    {
      "id": "m12-q18",
      "q": "A dot-matrix printer leaves a gap at the same height in every character. What is the likely cause?",
      "options": [
        "A waste ink pad that is full",
        "A worn cleaning blade",
        "A very low toner level",
        "A broken or stuck pin in the print head"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m12-l3",
      "explain": "One pin that does not strike leaves the same gap in each character. A waste ink pad, cleaning blade and toner belong to other printer types."
    },
    {
      "id": "m12-q19",
      "q": "Which statement about inkjet heads is correct?",
      "options": [
        "A thermal head heats ink to form a bubble, and a piezo head flexes a crystal",
        "A thermal head flexes a crystal, and a piezo head heats ink to form a bubble",
        "Both head types use a laser beam to push out each drop",
        "Both head types need a ribbon between the head and the paper"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m12-l3",
      "explain": "Thermal heads use a small heater, and piezo heads use a crystal that changes shape. Neither uses a laser or a ribbon."
    },
    {
      "id": "m12-q20",
      "q": "What does the moving carriage in a flatbed scanner do?",
      "options": [
        "It moves the page over a fixed lens",
        "It moves under the glass, reading the page one line at a time",
        "It fires a laser across the glass",
        "It cools the glass during long scans"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m12-l4",
      "explain": "The carriage holds the light source and line sensor and moves along the page under the glass. The page stays still."
    },
    {
      "id": "m12-q21",
      "q": "A US Letter page is scanned at 300 dpi in 24-bit colour with no compression. About how large is the file?",
      "options": [
        "About 8.4 MB",
        "About 67 MB",
        "About 202 MB",
        "About 25 MB"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m12-l4",
      "explain": "The page has 2550 × 3300 = 8,415,000 pixels, and 24-bit colour uses 3 bytes each, which gives about 25.2 MB. The value 8.4 MB would be one byte per pixel."
    },
    {
      "id": "m12-q22",
      "q": "A scanned file is 25 MB. About how long does it take to send over a 100 Mbit/s link at full speed, ignoring overhead?",
      "options": [
        "About 0.25 seconds",
        "About 2 seconds",
        "About 20 seconds",
        "About 200 seconds"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m12-l4",
      "explain": "25 MB × 8 = 200 Mbit, and 200 ÷ 100 = 2 seconds. The value 0.25 seconds forgets to convert bytes to bits."
    },
    {
      "id": "m12-q23",
      "q": "Why does a scanner read a white reference strip during calibration?",
      "options": [
        "To set the page size that will be scanned",
        "To clean the glass before the scan starts",
        "To correct for uneven lamp brightness and sensor response along the line",
        "To count the pages that have been scanned"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m12-l4",
      "explain": "The reference strip shows how the lamp and sensor behave, so the scanner can correct uneven results. This is shading correction."
    },
    {
      "id": "m12-q24",
      "q": "A scanner leaves a thin vertical line in the same place on every scan, even when the page is blank. What is the likely cause?",
      "options": [
        "Dirt or a scratch on the glass or the feeder glass strip",
        "A worn pick-up roller",
        "A toner cartridge that is nearly empty",
        "The wrong paper size in the tray"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m12-l4",
      "explain": "A line in the same place on every scan points to something on the optical path. Pick-up rollers affect paper feeding, and scanners do not use toner."
    },
    {
      "id": "m12-q25",
      "q": "A monitor shows a very dim picture. With a torch held close to the screen, the image can be read. Which part has most likely failed?",
      "options": [
        "The graphics cable",
        "The backlight or its driver circuit",
        "The panel pixels",
        "The operating system"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m12-l4",
      "explain": "The picture is there but the light is not. The panel and signal are working, so the backlight or the circuit that powers it is at fault."
    },
    {
      "id": "m12-q26",
      "q": "A monitor panel is 1920 × 1080 pixels. How many pixels does it have in total?",
      "options": [
        "1,036,800",
        "3,110,400",
        "4,147,200",
        "2,073,600"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m12-l4",
      "explain": "1920 × 1080 = 2,073,600. The value 1,036,800 is half of that, and 4,147,200 is double."
    },
    {
      "id": "m12-q27",
      "q": "Toner rubs off a laser print when you touch it. What is the most likely cause?",
      "options": [
        "The fuser is not heating enough to bond the toner to the paper",
        "The drum has a scratch across its surface",
        "The scanner glass is dirty",
        "The transfer roller is fitted the wrong way round"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m12-l5",
      "explain": "Loose toner means it was not melted into the paper. A scratched drum makes a line, not smearing that rubs off."
    },
    {
      "id": "m12-q28",
      "q": "A laser print looks pale and faded all over. Which cause is plausible?",
      "options": [
        "A broken pin in the print head",
        "A blocked nozzle on the print head",
        "Low toner, or a weak transfer or development voltage",
        "A full waste ink pad"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m12-l5",
      "explain": "Pale print comes from too little toner reaching the paper. Pins, nozzles and ink pads belong to dot-matrix and inkjet printers."
    },
    {
      "id": "m12-q29",
      "q": "Marks repeat every 94 mm down a page. The candidate rollers are 20 mm, 30 mm and 45 mm in diameter. Which roller is the likely cause?",
      "options": [
        "The 20 mm roller",
        "The 45 mm roller",
        "None of them, because the marks come from the paper",
        "The 30 mm roller"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m12-l5",
      "explain": "The spacing equals the circumference, π × diameter. π × 30 = 94.2 mm, which matches. The 20 mm roller gives 62.8 mm and the 45 mm roller gives 141.4 mm."
    },
    {
      "id": "m12-q30",
      "q": "A drum is 24 mm in diameter. About how far apart will a mark on its surface repeat on the page?",
      "options": [
        "About 38 mm",
        "About 75 mm",
        "About 150 mm",
        "About 24 mm"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m12-l5",
      "explain": "Circumference = π × 24 ≈ 75.4 mm. The value 38 mm is π × 12, which uses the radius by mistake. The mark repeats once per turn, not at the diameter."
    },
    {
      "id": "m12-q31",
      "q": "A brand-new cartridge prints completely blank pages. What should you check first?",
      "options": [
        "That the protective seal or tape has been removed from the cartridge",
        "Whether the fuser temperature has been set too high",
        "Whether the page counter needs resetting",
        "Whether the paper weight setting is too low"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m12-l5",
      "explain": "New cartridges often ship with a seal that blocks the toner. It is a quick check and costs nothing. The fuser and counters do not stop toner reaching the drum."
    },
    {
      "id": "m12-q32",
      "q": "A printer jams in the same place in the paper path again and again. What do you inspect first?",
      "options": [
        "The main circuit board, because jams come from software",
        "The installed printer driver, because jams so often come from bad drivers or old print settings",
        "The rollers and guides at that point, for wear, dirt or an obstruction",
        "The toner level, because low toner causes jams"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m12-l5",
      "explain": "Repeated jams at one point nearly always have a local mechanical cause. Driver and board faults do not make paper stop at one place."
    },
    {
      "id": "m12-q33",
      "q": "Why must you look up an error code in the service manual rather than guess its meaning?",
      "options": [
        "Codes are always the same on every printer",
        "Codes differ between makers and models",
        "Codes only matter when the machine is under warranty",
        "Codes can be cleared without any other action"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m12-l5",
      "explain": "The same number can mean different things on different machines. Clearing a code does not remove the fault behind it."
    },
    {
      "id": "m12-q34",
      "q": "A maintenance kit is due at 100,000 pages as an example. The counter reads 87,450. How many pages are left?",
      "options": [
        "13,550",
        "2,550",
        "187,450",
        "12,550"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m12-l6",
      "explain": "100,000 − 87,450 = 12,550. The value 187,450 adds the numbers together instead of subtracting."
    },
    {
      "id": "m12-q35",
      "q": "A customer prints about 4,000 pages a month and has 12,550 pages left before a kit is due. About how many months is that?",
      "options": [
        "About 3 months",
        "About 8 months",
        "About 1 month",
        "About 12 months"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m12-l6",
      "explain": "12,550 ÷ 4,000 ≈ 3.1 months. The value 12 months would be about 1,000 pages a month."
    },
    {
      "id": "m12-q36",
      "q": "Why print a test page and record the counter after servicing?",
      "options": [
        "To use up the toner that you spilled",
        "To clear every error code from the machine",
        "To show the repair worked and to record the reading in the service report",
        "To reset the page counter automatically"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m12-l6",
      "explain": "A test page proves the machine works, and the counter reading goes on the report. Printing does not clear codes or reset counters."
    },
    {
      "id": "m12-q37",
      "q": "What is the correct way to deal with a used toner cartridge?",
      "options": [
        "Burn it so that the plastic is destroyed",
        "Put it in the general rubbish with the paper waste",
        "Tip the toner into a drain and keep the shell",
        "Return it through a take-back or recycling scheme, or follow local rules"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m12-l6",
      "explain": "Cartridges contain plastics and fine powder that must not be burned or tipped away. Take-back schemes or local rules show the right route."
    },
    {
      "id": "m12-q38",
      "q": "What is a maintenance kit?",
      "options": [
        "A set of cloths and brushes for cleaning the case",
        "A set of wear parts that are replaced together at a set page count",
        "A spare toner cartridge supplied with every printer",
        "A software update that resets the counters"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m12-l6",
      "explain": "A kit groups wear parts such as rollers and a fuser so they are replaced at the same page count. Cleaning cloths and toner are different consumables."
    },
    {
      "id": "m12-q39",
      "q": "When should the counter for a replaced part be reset?",
      "options": [
        "Before the old part is removed",
        "Never, because counters reset themselves",
        "After the new part has been fitted",
        "Only if the customer asks"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m12-l6",
      "explain": "The counter tells the machine that a new part is installed. Resetting it early or without fitting the part makes the next warning come too late."
    },
    {
      "id": "m12-q40",
      "q": "A machine with a built-in drive is leaving the customer's site. What should you do about the stored data?",
      "options": [
        "Follow the customer's policy and erase the stored jobs before it leaves",
        "Leave the data in place, because it cannot be read",
        "Copy the documents to your own laptop for safety",
        "Print all stored jobs and hand them to the customer"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m12-l6",
      "explain": "Machines can keep copies of documents. These belong to the customer, so they are erased, or handled as the customer requires. Copying them away breaks confidentiality."
    }
  ],
  "cards": [
    {
      "id": "m12-c01",
      "front": "What is the difference between an LED printer and a laser printer?",
      "back": "An LED printer writes the image with a fixed row of LEDs. A laser printer uses a moving laser beam.",
      "lesson": "m12-l1"
    },
    {
      "id": "m12-c02",
      "front": "How does a thermal inkjet head push out a drop?",
      "back": "A tiny heater makes a bubble that pushes the drop out of the nozzle.",
      "lesson": "m12-l1"
    },
    {
      "id": "m12-c03",
      "front": "How does a piezo inkjet head push out a drop?",
      "back": "An electric signal flexes a crystal, which pushes the drop out.",
      "lesson": "m12-l1"
    },
    {
      "id": "m12-c04",
      "front": "Why are dot-matrix printers used for multipart forms?",
      "back": "They are impact printers. The pins strike hard enough to mark through several layers.",
      "lesson": "m12-l1"
    },
    {
      "id": "m12-c05",
      "front": "What is direct thermal printing?",
      "back": "Heated dots darken special heat-sensitive paper. No ink or toner is needed.",
      "lesson": "m12-l1"
    },
    {
      "id": "m12-c06",
      "front": "Pixels on a page at a given dpi",
      "back": "Width in inches × dpi, by height in inches × dpi. A Letter page at 300 dpi is 2550 × 3300 pixels.",
      "lesson": "m12-l1"
    },
    {
      "id": "m12-c07",
      "front": "Time per page at 30 ppm",
      "back": "60 ÷ 30 = 2 seconds per page, under ideal conditions.",
      "lesson": "m12-l1"
    },
    {
      "id": "m12-c08",
      "front": "List the six laser printer steps in order.",
      "back": "Charge, expose, develop, transfer, fuse, clean.",
      "lesson": "m12-l2"
    },
    {
      "id": "m12-c09",
      "front": "What is a latent image?",
      "back": "The invisible pattern of charge left on the drum after exposure.",
      "lesson": "m12-l2"
    },
    {
      "id": "m12-c10",
      "front": "What does the fuser do?",
      "back": "Melts toner into the paper with heat and pressure.",
      "lesson": "m12-l2"
    },
    {
      "id": "m12-c11",
      "front": "Typical fuser temperature",
      "back": "About 160 to 200 °C. Check the service manual for the model.",
      "lesson": "m12-l2"
    },
    {
      "id": "m12-c12",
      "front": "How should you clean up toner dust?",
      "back": "Use a vacuum made for toner and a damp cloth. Never blow it out.",
      "lesson": "m12-l2"
    },
    {
      "id": "m12-c13",
      "front": "Why does a laser interlock matter?",
      "back": "It cuts the laser or power when a cover opens. Never bypass it.",
      "lesson": "m12-l2"
    },
    {
      "id": "m12-c14",
      "front": "What is a nozzle check?",
      "back": "A test pattern that shows which inkjet nozzles are blocked.",
      "lesson": "m12-l3"
    },
    {
      "id": "m12-c15",
      "front": "What does the capping station do?",
      "back": "Seals the inkjet head when idle so the nozzles do not dry.",
      "lesson": "m12-l3"
    },
    {
      "id": "m12-c16",
      "front": "What is a waste ink pad?",
      "back": "A sponge that collects ink from cleaning cycles. When full, the printer may stop with an error.",
      "lesson": "m12-l3"
    },
    {
      "id": "m12-c17",
      "front": "When do you run head alignment on an inkjet?",
      "back": "After replacing a head or cartridge, to remove blurred or doubled edges.",
      "lesson": "m12-l3"
    },
    {
      "id": "m12-c18",
      "front": "Dot-matrix print has a gap at the same height in every character",
      "back": "A broken or stuck pin in the print head.",
      "lesson": "m12-l3"
    },
    {
      "id": "m12-c19",
      "front": "What is the platen gap?",
      "back": "The distance between the dot-matrix head and the platen. Set it for the form thickness.",
      "lesson": "m12-l3"
    },
    {
      "id": "m12-c20",
      "front": "Formula for uncompressed image size",
      "back": "Pixels × bytes per pixel. 24-bit colour is 3 bytes per pixel.",
      "lesson": "m12-l4"
    },
    {
      "id": "m12-c21",
      "front": "What is shading correction in a scanner?",
      "back": "The scanner reads a white strip and corrects uneven lamp and sensor response.",
      "lesson": "m12-l4"
    },
    {
      "id": "m12-c22",
      "front": "Vertical line in the same place on every scan",
      "back": "Dirt or a scratch on the scanner glass or feeder strip.",
      "lesson": "m12-l4"
    },
    {
      "id": "m12-c23",
      "front": "Monitor picture is dim but visible with a torch",
      "back": "The backlight or its driver has failed. The panel is working.",
      "lesson": "m12-l4"
    },
    {
      "id": "m12-c24",
      "front": "Repeating defect: formula for the spacing",
      "back": "Circumference = π × diameter of the rotating part.",
      "lesson": "m12-l5"
    },
    {
      "id": "m12-c25",
      "front": "Toner rubs off the page",
      "back": "The fuser is not hot enough or the paper setting is wrong.",
      "lesson": "m12-l5"
    },
    {
      "id": "m12-c26",
      "front": "New cartridge prints blank pages",
      "back": "Check first that the protective seal or tape has been removed.",
      "lesson": "m12-l5"
    },
    {
      "id": "m12-c27",
      "front": "Why look up error codes in the manual?",
      "back": "Codes differ by maker and model. Never guess, and never clear a code without finding the cause.",
      "lesson": "m12-l5"
    },
    {
      "id": "m12-c28",
      "front": "What is a maintenance kit?",
      "back": "Wear parts grouped to be replaced at a set page count.",
      "lesson": "m12-l6"
    },
    {
      "id": "m12-c29",
      "front": "Pages left until a kit is due",
      "back": "Due count minus the counter reading.",
      "lesson": "m12-l6"
    },
    {
      "id": "m12-c30",
      "front": "When do you reset a part counter?",
      "back": "Only after the new part is fitted.",
      "lesson": "m12-l6"
    },
    {
      "id": "m12-c31",
      "front": "How do you dispose of used toner cartridges?",
      "back": "Through a take-back or recycling scheme, or as local rules require. Never burn them.",
      "lesson": "m12-l6"
    }
  ]
});

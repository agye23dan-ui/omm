OMM.registerModule({
  "id": "m13",
  "summary": "Identify the main assemblies of a photocopier, explain the electrophotographic process, diagnose image faults including repeating defects, and carry out safe installation and preventive maintenance.",
  "outcomes": [
    "Name the main assemblies of an analogue and a digital copier and state what each one does.",
    "Describe the stages of the electrophotographic process in the correct order.",
    "Explain how the scanner, optics and image processing turn an original into a digital image.",
    "Describe developer, toner, the drum and the cleaning blade, and handle them safely.",
    "Explain how paper is registered and fused, and why fuser safety devices must never be bypassed.",
    "Use the spacing of a repeating defect and the formula circumference = π × diameter to find the faulty roller."
  ],
  "cheatsheet": [
    "Process order: charge, expose, develop, transfer, separate, fuse, clean. Many machines also discharge.",
    "Before the fuser, toner is held on paper only by static charge. It smears if touched.",
    "Roller circumference = π × diameter. Use π ≈ 3.14 for quick work.",
    "Repeating defect spacing on the copy = circumference of the guilty roller.",
    "Toner concentration = toner weight ÷ developer weight. The target is set by the manufacturer.",
    "Never blow toner out with air. Use a vacuum cleaner made for toner.",
    "Never bypass a fuser thermostat, thermal fuse or door interlock.",
    "Copy only faults point to the scanner. Faults on copies and on printed pages point to the print engine.",
    "Reset a PM or part counter only after you have replaced that part.",
    "Check the manufacturer's service manual for every voltage, temperature and setting."
  ],
  "lessons": [
    {
      "id": "m13-l1",
      "title": "Types and main assemblies",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the types of photocopier and the main assemblies inside them, so that you can find any part you are asked to service. A **photocopier** reproduces a paper original onto new paper using light, static electricity, toner and heat."
        },
        {
          "t": "h",
          "text": "Types of copier"
        },
        {
          "t": "p",
          "text": "An **analogue copier** shines light onto the original and uses a lens and mirrors to project the reflected light directly onto the drum. A **digital copier** first scans the original into electronic data. It then writes that data onto the drum with a laser or an LED array. Digital machines can store pages, reduce and enlarge without moving lenses, and connect to a network. Most machines sold today are digital."
        },
        {
          "t": "p",
          "text": "Copiers are also **monochrome** (black toner only) or **colour** (four toners: cyan, magenta, yellow and black). A **speed class** is the rated number of copies per minute. A faster class normally has a larger drum, a stronger fuser and a more robust paper path, because every part works harder."
        },
        {
          "t": "h",
          "text": "Main assemblies"
        },
        {
          "t": "table",
          "head": [
            "Assembly",
            "Job"
          ],
          "rows": [
            [
              "Scanner and optics",
              "Lights the original and turns the reflected light into an image signal"
            ],
            [
              "Drum unit",
              "Holds the light-sensitive surface where the image is formed"
            ],
            [
              "Developer unit",
              "Carries toner to the drum"
            ],
            [
              "Transfer unit",
              "Moves toner from the drum (or belt) to the paper"
            ],
            [
              "Fuser",
              "Melts toner into the paper with heat and pressure"
            ],
            [
              "Paper feed",
              "Picks sheets from trays and moves them through the machine"
            ],
            [
              "Controller",
              "Processes images, runs the sequence and talks to the panel and network"
            ],
            [
              "Power supplies",
              "Make the low-voltage rails and the high voltages for imaging"
            ]
          ],
          "caption": "The main assemblies of a copier"
        },
        {
          "t": "p",
          "text": "A **counter** records how many copies the machine has made. The **total counter** is used for billing. Other counters track the life of parts such as the drum, developer and fuser. They tell you when maintenance is due."
        },
        {
          "t": "h",
          "text": "Safe working around assemblies"
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A copier contains several hazards. The **fuser** stays hot after switching off. The charging and transfer parts use **high voltage**. A digital machine has a **laser** unit. Gears, belts and the scanner carriage can trap fingers. Switch off and unplug before you open covers, unless the service manual tells you a live check is needed, and never defeat a door interlock."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Learn where each assembly sits in the paper path and the image path. When a fault appears, the first question is: which assembly could cause this?"
        },
        {
          "t": "ul",
          "items": [
            "Image path: original → scanner → controller → exposure → drum.",
            "Paper path: tray → feed → registration → transfer → fuser → output.",
            "Control path: panel and network → controller → motors, sensors and high-voltage supplies."
          ]
        }
      ]
    },
    {
      "id": "m13-l2",
      "title": "The electrophotographic process",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains the electrophotographic process, the series of stages that turns an image into toner on paper. It is also called **xerography**. Every copier and laser printer uses it. The diagram shows the stages around the drum."
        },
        {
          "t": "diagram",
          "name": "xerography-cycle"
        },
        {
          "t": "h",
          "text": "The stages in order"
        },
        {
          "t": "p",
          "text": "The drum is coated with a **photoconductor**. In the dark it holds electric charge like an insulator. When light hits it, it conducts and the charge leaks away to the metal drum base. The process uses this one fact."
        },
        {
          "t": "ol",
          "items": [
            "**Charge**: a charge roller or corona unit, supplied with high voltage, puts an even electric charge on the whole drum surface.",
            "**Expose**: light removes charge where the image needs it. This leaves an invisible pattern of charge called the **latent image**.",
            "**Develop**: charged toner is attracted to the latent image. The pattern becomes visible on the drum.",
            "**Transfer**: paper passes the drum. A transfer roller or corona charges the back of the paper and pulls the toner onto it.",
            "**Separate**: the paper is released from the drum. Methods include a discharge, the curve of the drum and separation claws.",
            "**Fuse**: heat and pressure melt the toner into the paper fibres.",
            "**Clean**: a blade scrapes leftover toner from the drum into a waste area."
          ]
        },
        {
          "t": "p",
          "text": "Many machines add a **discharge** step. A lamp lights the drum to remove all remaining charge so that the next cycle starts evenly."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Until the toner reaches the fuser, it is held on the paper only by static attraction. Touch the sheet and the image smears. Only the fuser makes the image permanent."
        },
        {
          "t": "h",
          "text": "Speed and the drum"
        },
        {
          "t": "p",
          "text": "The distance a point on the drum surface travels in one turn equals the drum circumference. The surface speed is the circumference multiplied by the turns per second. Paper is fed to match this speed."
        },
        {
          "t": "example",
          "title": "Drum surface speed",
          "steps": [
            "A drum has a diameter of 60 mm and turns once per second. Use π ≈ 3.14.",
            "Circumference = π × diameter = 3.14 × 60 mm = 188.4 mm.",
            "Surface speed = 188.4 mm × 1 turn per second = 188.4 mm/s.",
            "Check: in 10 seconds the surface moves 1884 mm, which is 10 turns of 188.4 mm."
          ]
        },
        {
          "t": "example",
          "title": "Copies per minute from the sheet pitch",
          "steps": [
            "A machine feeds paper at 180 mm/s. Each sheet plus the gap behind it takes up 360 mm. This length is the **sheet pitch**.",
            "Time per sheet = 360 mm ÷ 180 mm/s = 2 s.",
            "Sheets per minute = 60 s ÷ 2 s = 30.",
            "These figures are only an example. Real values are in the service manual."
          ]
        },
        {
          "t": "h",
          "text": "Hazards in the process"
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "The charge and transfer parts run on high voltage. Their contacts can shock you or leave a charge. Charging also makes a small amount of **ozone** gas, so keep the machine in a ventilated room. Do not touch charging parts while the machine is powered. Follow the manual before you test them."
        }
      ]
    },
    {
      "id": "m13-l3",
      "title": "Scanning, optics and image processing",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how a digital copier reads an original and prepares the image for printing. The scanner is the part of the machine that sees. A dirty or misadjusted scanner makes faults that look like printing faults, so you must know how it works."
        },
        {
          "t": "h",
          "text": "From paper to pixels"
        },
        {
          "t": "p",
          "text": "An **exposure lamp** or LED strip lights a narrow line of the original. The light reflected from white areas is strong and from black areas is weak. In many scanners, **mirrors** fold the light path and a **lens** focuses it onto an **image sensor**, often a CCD. Other scanners use a **contact image sensor** (CIS), which sits close to the glass and needs no lens or mirrors."
        },
        {
          "t": "diagram",
          "name": "scanner-optics"
        },
        {
          "t": "p",
          "text": "The sensor makes a small voltage for each point along the line. An **analogue-to-digital converter** (ADC) changes each voltage into a number. The scanner carriage, or the original if a feeder is used, moves so that the next line is read. Many lines build a full page."
        },
        {
          "t": "h",
          "text": "Image processing"
        },
        {
          "t": "p",
          "text": "The controller then adjusts the data. It corrects for the lamp and sensor, removes a grey background, sharpens text, and scales the image. Settings such as text mode or photo mode change these steps."
        },
        {
          "t": "ul",
          "items": [
            "**Shading correction**: the scanner reads a white reference strip and uses it to even out lamp brightness and sensor differences along the line.",
            "**Gamma and density**: set how light and dark tones are mapped.",
            "**Scaling**: reduces or enlarges the data. A 70% reduction makes a 200 mm line 140 mm long.",
            "**Resolution**: measured in **dpi** (dots per inch). At 600 dpi the scanner captures 600 pixels along each inch. One inch is 25.4 mm."
          ]
        },
        {
          "t": "example",
          "title": "Pixels along a line",
          "steps": [
            "A scan is made at 600 dpi.",
            "Pixels along 2 inches = 600 pixels per inch × 2 inches = 1200 pixels.",
            "Size of one pixel = 25.4 mm ÷ 600 ≈ 0.042 mm.",
            "Check: 1200 pixels × 0.042 mm ≈ 50.4 mm, close to the 50.8 mm of two inches. The small gap is from rounding."
          ]
        },
        {
          "t": "h",
          "text": "Cleaning and testing"
        },
        {
          "t": "p",
          "text": "Dust, fingerprints or a scratch on the platen glass or the narrow slit glass of a feeder appear as lines or spots in the copy. Clean the glass with a soft, lint-free cloth and the cleaner named in the service manual. Do not use abrasive powders or sharp tools. Clean mirrors, the lens and the white reference strip only as the manual describes."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "To find out whether a fault is in the scanner or the print engine, make a copy and then print a test page from the machine's own menu. A defect that appears only on the copy is in the scanner or image processing. A defect on both is in the print engine."
        },
        {
          "t": "p",
          "text": "A **test chart** is a sheet with known patterns such as grey steps, fine lines and a ruler. Copy it and compare with the original. Check sharpness, density steps, size accuracy and squareness. Use the chart the manual recommends."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A digital copier has a **laser scanner unit** with a spinning mirror. The beam may be invisible and can injure the eye. Never open the laser unit, never look into the laser path, and never defeat an interlock switch. If an interlock is faulty, replace it. Keep the covers closed during a live test unless the manual says otherwise."
        }
      ]
    },
    {
      "id": "m13-l4",
      "title": "Developer, toner and the drum",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the materials that make the image: developer, toner, the drum and the cleaning blade. Most image quality faults involve one of these, so knowing how they behave saves time."
        },
        {
          "t": "h",
          "text": "Toner and developer"
        },
        {
          "t": "p",
          "text": "**Toner** is a fine plastic powder that contains colour pigment and a small amount of other materials. It melts at a low temperature, so heat can fix it to paper. **Developer** is the material that carries toner to the drum."
        },
        {
          "t": "ul",
          "items": [
            "**One-component developer** is toner only. The toner is charged as it passes the developer roller.",
            "**Two-component developer** is a mix of toner and **carrier**, which are small magnetic beads. The carrier charges the toner by friction and carries it to the drum on a rotating sleeve with magnets inside."
          ]
        },
        {
          "t": "p",
          "text": "Carrier is not used up when you copy, but it ages and slowly loses its ability to charge toner. Toner is used up and must be refilled. A **toner supply** system with a bottle or hopper, an agitator and a motor adds toner when needed."
        },
        {
          "t": "h",
          "text": "Toner concentration"
        },
        {
          "t": "p",
          "text": "**Toner concentration** is the weight of toner as a share of the weight of the developer. A sensor, often magnetic, measures it. The machine adds toner when it falls below the target. The target value belongs to each machine, so read it in the service manual."
        },
        {
          "t": "diagram",
          "name": "developer-unit"
        },
        {
          "t": "example",
          "title": "Toner in a developer",
          "steps": [
            "A developer weighs 400 g and the target concentration in this example is 5%.",
            "Toner = 5% of 400 g = 0.05 × 400 g = 20 g.",
            "Carrier = 400 g − 20 g = 380 g.",
            "Too little toner gives light copies. Too much gives dark copies, grey background and toner scatter."
          ]
        },
        {
          "t": "h",
          "text": "The photoconductor drum"
        },
        {
          "t": "p",
          "text": "Most drums are **OPC** (organic photoconductor) drums: a thin light-sensitive coating on an aluminium cylinder. The coating wears with every turn. Its life is counted in copies, and the counter must be reset when you fit a new one."
        },
        {
          "t": "ul",
          "items": [
            "Never touch the surface with bare fingers. Skin oil and scratches show up as marks on every copy.",
            "Keep the drum out of bright light. Strong light tires the coating and gives uneven copies.",
            "Hold the drum by the ends or by its flanges.",
            "Do not wipe it with solvents or rough cloths unless the manual says so."
          ]
        },
        {
          "t": "p",
          "text": "The **cleaning blade** is a strip of rubber that presses on the drum and scrapes off leftover toner. A nick, wear or a trapped particle lets a line of toner pass, which prints as a thin line. Many manuals ask you to fit a new blade with the drum and to prepare the edge as described."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Toner is a fine dust. Do not breathe it and do not blow it out with compressed air or your mouth. Use a vacuum cleaner made for toner, with a filter that holds fine dust. Wash toner off skin and clothes with cold water, because heat can melt it and fix it. Dispose of toner, drums and waste bottles as the local rules and the manual require."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Fit new consumables in the order the manual gives, then reset the matching counters. Without the reset, the machine will ask for service too soon or too late."
        }
      ]
    },
    {
      "id": "m13-l5",
      "title": "Paper path, registration and fusing",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how paper moves through a copier, how it is lined up with the image, and how the fuser fixes toner. Paper path faults cause most service calls, and the fuser is the most dangerous assembly to work on. The diagram shows a typical path."
        },
        {
          "t": "diagram",
          "name": "paper-path"
        },
        {
          "t": "h",
          "text": "Sensors and registration"
        },
        {
          "t": "p",
          "text": "Along the path, **sensors** detect the leading and trailing edges of the sheet. The controller expects each sensor to switch on and off at set times. If a sheet is late or does not clear, the machine stops and reports a jam. This is how a jam is detected."
        },
        {
          "t": "p",
          "text": "**Registration** means lining the paper up with the image. The sheet runs against stopped **registration rollers**. It forms a small loop, which squares it up. The rollers then start at the right moment so that the paper meets the toner image on the drum. If the timing is wrong, the top margin of the copy is wrong."
        },
        {
          "t": "h",
          "text": "The fuser"
        },
        {
          "t": "p",
          "text": "The **fuser** has a **heat roller** and a **pressure roller**. The heat roller is hollow and heated by a lamp inside. The pressure roller is softer, and presses against it to make a **nip**, the narrow contact band the paper passes through. Heat melts the toner and pressure presses it into the fibres."
        },
        {
          "t": "diagram",
          "name": "fuser-cross-section"
        },
        {
          "t": "ul",
          "items": [
            "A **thermistor** touches the heat roller and measures its temperature. The controller switches the lamp to hold the set temperature.",
            "A **thermostat** or **thermal fuse** is a separate safety device. It cuts the lamp power if the control fails and the roller overheats.",
            "Separation claws or other strippers stop paper from wrapping around the rollers."
          ]
        },
        {
          "t": "p",
          "text": "Fusing temperatures differ between machines. Many are somewhere between about 150 °C and 200 °C. Always read the value in the service manual. Heavy paper needs more heat or a slower speed. Thin paper may curl."
        },
        {
          "t": "example",
          "title": "Time in the fuser nip",
          "steps": [
            "A nip is 6 mm wide and the paper moves at 120 mm/s. These are example figures only.",
            "Time in the nip = width ÷ speed = 6 mm ÷ 120 mm/s = 0.05 s.",
            "If the paper speed doubles to 240 mm/s, the time halves: 6 ÷ 240 = 0.025 s.",
            "Less time in the nip means the machine needs more heat or more pressure to fuse well."
          ]
        },
        {
          "t": "h",
          "text": "Fuser faults"
        },
        {
          "t": "ul",
          "items": [
            "Toner rubs off: the fuser is too cool, the pressure is weak, or the paper type setting is wrong.",
            "Toner sticks to the roller and shows up later on the page: an **offset** fault, often from a dirty or worn roller or too much heat.",
            "Paper wraps around a roller: check the strippers and the roller surface.",
            "Wrinkles: worn rollers, damp paper or poor paper guides."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "The fuser stays hot for a long time after switching off. Its lamp runs at mains voltage. Wait for it to cool, switch off and unplug before you touch it. Do not use metal tools to prise out a jammed sheet. Never bypass, jumper or replace a thermostat or thermal fuse with a different type. Safety devices are there to prevent fires."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Clear a jam by pulling the sheet in the direction of paper travel. Pull gently, in one piece, so scraps of paper do not stay behind to cause the next jam."
        }
      ]
    },
    {
      "id": "m13-l6",
      "title": "Image quality faults and diagnosis",
      "minutes": 12,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to find the cause of poor copies. A good diagnosis starts with a careful look at the fault and a simple test, not with changing parts. The most powerful clue is often how the fault repeats."
        },
        {
          "t": "h",
          "text": "Common symptoms"
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Common causes to check"
          ],
          "rows": [
            [
              "Black line, copies only",
              "Dirt or scratch on the platen or slit glass, or dust in the scanner"
            ],
            [
              "Black line, copies and prints",
              "Scratched drum, nicked cleaning blade, dirty charger"
            ],
            [
              "Grey background",
              "Toner concentration too high, worn developer, weak charging, worn drum"
            ],
            [
              "Light copies",
              "Low toner or low concentration, weak transfer, aged developer, damp paper"
            ],
            [
              "Uneven density across the page",
              "Dirty charger, uneven development, dirty transfer part, shading fault"
            ],
            [
              "Image rubs off",
              "Fuser too cool, wrong paper setting, worn pressure roller"
            ],
            [
              "Smeared or doubled image",
              "Paper slipping, worn rollers, drum or belt drive fault"
            ]
          ],
          "caption": "Symptoms and the usual suspects. The service manual lists the model-specific tests."
        },
        {
          "t": "p",
          "text": "Use the comparison test from the scanner lesson. Print a test page and make a copy. A fault only on the copy is in the scanner. A fault on both is in the engine."
        },
        {
          "t": "h",
          "text": "Repeating defects"
        },
        {
          "t": "p",
          "text": "A mark that repeats at an even distance down the page comes from a roller or drum that turns once per mark. Each turn, the same damaged spot touches the paper or drum again. The distance between repeats equals the **circumference** of that roller. The circumference is the distance around it."
        },
        {
          "t": "diagram",
          "name": "repeating-defect"
        },
        {
          "t": "formula",
          "text": "circumference = π × diameter",
          "caption": "π ≈ 3.14"
        },
        {
          "t": "formula",
          "text": "diameter = spacing ÷ π",
          "caption": "Working backwards from the measured spacing"
        },
        {
          "t": "example",
          "title": "Finding the faulty roller",
          "steps": [
            "Marks repeat every 157 mm along a copy. You measure several repeats and divide to get an average.",
            "Diameter = 157 mm ÷ 3.14 = 50 mm.",
            "Look in the manual or measure the rollers with a vernier calliper. Suppose the heat roller is 50 mm.",
            "Check the other rollers: a 60 mm drum gives 3.14 × 60 = 188.4 mm. A 25 mm transfer roller gives 3.14 × 25 = 78.5 mm. A 20 mm sleeve gives 3.14 × 20 = 62.8 mm.",
            "Only the 50 mm heat roller matches 157 mm, so inspect that roller first."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Measure the distance over several repeats and divide. Measuring one gap with a ruler gives a larger error. Rubber rollers swell and wear, so allow a small difference from the calculated value."
        },
        {
          "t": "h",
          "text": "Colour faults in outline"
        },
        {
          "t": "p",
          "text": "A colour copier builds the image from four toners. **Colour misregistration** shows coloured edges around text because the layers do not line up. A **colour cast** or missing colour means one toner is low or its development, charge or transfer has failed. Most machines have an automatic calibration and registration routine. Run it, and print the machine's own test pattern before replacing parts."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Look, test, then change one thing at a time. Record what you see: where the fault is, how often it repeats and whether it shows on prints as well as copies."
        }
      ]
    },
    {
      "id": "m13-l7",
      "title": "Installation, maintenance and service procedure",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers installing a copier, carrying out preventive maintenance, and using service modes and records correctly. Doing this well prevents most breakdowns and protects both the customer and you."
        },
        {
          "t": "h",
          "text": "Site and power checks"
        },
        {
          "t": "ul",
          "items": [
            "Check the space. The machine needs room for ventilation and for opening covers and trays.",
            "Choose a level floor away from direct sun, heaters, air-conditioning outlets, dust, and damp.",
            "Check the supply. The rating plate gives the voltage, frequency and current. It is 230 V at 50 Hz in many countries and 120 V at 60 Hz in others.",
            "Use a wall socket with an earth connection, on a circuit that can carry the load. Do not use an extension lead or a multi-way adaptor unless the manual and the local rules allow it.",
            "Keep the cord clear of walkways."
          ]
        },
        {
          "t": "h",
          "text": "Set-up"
        },
        {
          "t": "ol",
          "items": [
            "Move the machine with enough people and the right trolley. Many machines are heavy.",
            "Remove all packing tape, foam and transport locks, including those holding the scanner carriage or the drum.",
            "Fit the drum, developer and toner as the manual shows.",
            "Load paper and connect the power cord.",
            "Switch on and let the machine run its start-up sequence, including any developer set-up.",
            "Make test copies and check density, margins, size and squareness. Adjust if needed.",
            "Connect to the network and check the print and scan functions if fitted."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Do not install or leave a machine without a good earth connection. Check the cord, plug and socket for damage. Do not cut the earth pin or use an adaptor that removes the earth. Report any fault in the customer's wiring to the customer, and do not repair it unless you are qualified."
        },
        {
          "t": "h",
          "text": "Preventive maintenance and counters"
        },
        {
          "t": "p",
          "text": "**Preventive maintenance** (PM) is planned servicing done before parts fail. The machine counts copies and the manual gives a PM interval for cleaning and replacing parts. A **maintenance kit** holds the parts that wear."
        },
        {
          "t": "example",
          "title": "When is the next PM due?",
          "steps": [
            "The PM interval is 60 000 copies. The last PM was done at 240 000 copies, so the next is due at 240 000 + 60 000 = 300 000 copies.",
            "The counter now reads 288 000. Copies left = 300 000 − 288 000 = 12 000.",
            "The customer makes about 400 copies per working day.",
            "Working days left = 12 000 ÷ 400 = 30 days."
          ]
        },
        {
          "t": "h",
          "text": "Service mode and records"
        },
        {
          "t": "p",
          "text": "**Service mode** is a hidden menu that lets you read counters, run tests and change settings such as registration or density. The manual gives the key sequence for each model. Some modes can damage settings, so write down every original value before you change it. Reset a counter only after you have replaced the part it counts. Fit a part, then reset."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Finish every visit with a service report. Record the faults, work done, parts used, counter readings and test results. Show the customer a good copy, explain what you did, and tell them how to look after the machine."
        }
      ]
    }
  ],
  "practical": {
    "title": "Preventive maintenance and repeating defect measurement on a training copier",
    "objective": "Carry out a safe preventive maintenance routine on a training copier and use the spacing of a repeating defect to identify the roller that caused it.",
    "time": "90 minutes",
    "tools": [
      "Training copier and its service manual",
      "Toner vacuum cleaner",
      "Soft lint-free cloths and the cleaner named in the manual",
      "Steel rule or tape measure",
      "Vernier calliper",
      "Calculator",
      "Gloves and a dust mask",
      "Sample print with repeating marks, or a training unit set up with one"
    ],
    "safety": [
      "Switch off and unplug the copier before you open any cover. Wait at least the time the manual states for the fuser to cool. Treat the fuser as hot until you have checked it with the back of your hand held near, not touching.",
      "Do not touch charging or transfer parts. Do not defeat any interlock. Keep the laser unit closed.",
      "Wear gloves and a mask when you handle toner. Use only a toner vacuum cleaner. Never blow dust out.",
      "Do not touch the drum surface or expose the drum to bright light for long.",
      "Do not run the machine with covers open or tools inside it. Keep long hair, ties and loose sleeves away from moving parts."
    ],
    "steps": [
      "Read the safety section of the service manual and write down the model, serial number and total counter reading.",
      "Make a test copy of a plain white sheet and a copy of a test chart. Keep both to compare after maintenance.",
      "Switch off, unplug and wait for the fuser to cool. Open the covers as the manual describes.",
      "Vacuum loose toner from the machine with the toner vacuum cleaner. Work gently and do not touch the drum.",
      "Clean the platen glass and slit glass with a soft cloth and the correct cleaner. Let them dry.",
      "Inspect the paper feed rollers, registration rollers and the fuser rollers for wear, dirt and damage. Write down what you see.",
      "Measure the diameter of each accessible roller with the vernier calliper and write it down. Use the manual if a roller cannot be reached.",
      "Calculate the circumference of each roller using π × diameter with π ≈ 3.14.",
      "On the sample print, measure the spacing between repeating marks over at least four repeats. Divide the total distance by the number of gaps.",
      "Compare the measured spacing with your calculated circumferences. Name the roller that matches best and state the difference in millimetres.",
      "Close all covers, reconnect the power and make another test copy. Compare with the first copies.",
      "Record the work in a service report: what you cleaned, what you measured, the matching roller and the final counter reading. Do not reset any counter unless the tutor tells you to."
    ],
    "checks": [
      "I can switch off, isolate and wait for a hot fuser before opening a copier.",
      "I can clean toner and glass without damaging the machine or myself.",
      "I can calculate a roller circumference from its diameter.",
      "I can find which roller caused a repeating defect from the spacing of the marks.",
      "I can say whether a fault is likely to be in the scanner or in the print engine."
    ]
  },
  "quiz": [
    {
      "id": "m13-q01",
      "q": "What is the main difference between an analogue and a digital copier?",
      "options": [
        "A digital copier uses liquid ink and an analogue copier uses dry toner powder",
        "A digital copier scans the original into data before writing it to the drum",
        "An analogue copier has no drum and transfers the image straight to the paper",
        "A digital copier cannot make copies unless it has a working network connection"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m13-l1",
      "explain": "A digital copier turns the original into data, which is then written to the drum with a laser or LED. Both types use toner and a drum, so ink and no-drum answers are wrong."
    },
    {
      "id": "m13-q02",
      "q": "A technician reads the total counter as 124 500 and the drum counter as 24 500. What does this most likely show?",
      "options": [
        "The drum is exactly 24 500 copies away from needing its replacement at the next visit",
        "The machine has made 24 500 copies since its last service visit by a technician",
        "The drum counter is faulty because it is required to match the total counter",
        "The drum was probably replaced and its counter reset at about 100 000 total copies"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m13-l1",
      "explain": "The difference 124 500 − 24 500 = 100 000 is the total count when the drum counter was reset, which normally happens when a new drum is fitted. Counters for parts are separate from the total counter and do not have to match it."
    },
    {
      "id": "m13-q03",
      "q": "Which part of a digital copier changes the light reflected from the original into an electrical signal?",
      "options": [
        "The image sensor",
        "The developer unit",
        "The transfer roller",
        "The fuser thermistor"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m13-l1",
      "explain": "The image sensor (a CCD or contact image sensor) makes a voltage that depends on the brightness of each point. The thermistor measures temperature, not light."
    },
    {
      "id": "m13-q04",
      "q": "Which four toner colours does a colour copier normally use?",
      "options": [
        "Red, green, blue and black",
        "Cyan, magenta, yellow and white",
        "Cyan, magenta, yellow and black",
        "Red, yellow, blue and black"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m13-l1",
      "explain": "Colour copiers print with cyan, magenta, yellow and black toner. Red, green and blue are the light colours used by screens and scanner sensors, so they are not the toners."
    },
    {
      "id": "m13-q05",
      "q": "What is the correct order of the first three stages of the electrophotographic process?",
      "options": [
        "Expose, charge, develop",
        "Charge, develop, expose",
        "Charge, expose, develop",
        "Develop, charge, expose"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m13-l2",
      "explain": "The drum is first charged, then exposed to make the latent image, then developed with toner. Exposure needs an existing charge to remove, so charging must come first."
    },
    {
      "id": "m13-q06",
      "q": "Why must the drum be charged evenly before exposure?",
      "options": [
        "So that light removes charge only where the image needs it, giving clear contrast",
        "So that the toner is already melted onto the drum surface before it reaches the paper",
        "So that the paper is held firmly against the drum so that cleaning can follow",
        "So that the cleaning blade can scrape the drum surface more easily after transfer"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m13-l2",
      "explain": "The latent image is the difference between charged and discharged areas, so an uneven starting charge makes uneven copies. Melting toner is the job of the fuser, not the charge stage."
    },
    {
      "id": "m13-q07",
      "q": "What does light do to the photoconductor in an exposed area of the drum?",
      "options": [
        "It adds more charge to the surface",
        "It melts the coating so toner can stick",
        "It magnetises the surface to attract carrier",
        "It makes the coating conduct so the charge leaks away"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m13-l2",
      "explain": "A photoconductor is an insulator in the dark and a conductor in light. Light lets the surface charge drain to the metal base, which makes the latent image. It does not add charge."
    },
    {
      "id": "m13-q08",
      "q": "During a test, a sheet is pulled out of a copier after transfer but before the fuser. The image smears when touched. Why?",
      "options": [
        "The toner is still wet from the developer unit and has not yet had time to dry",
        "Toner is held on the paper only by static attraction until it is fused",
        "The drum has left a thin layer of oil on the paper during the transfer stage",
        "The paper has absorbed moisture from the air while waiting in the tray before use"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m13-l2",
      "explain": "Toner is a dry powder. Before the fuser melts it into the paper, only static charge holds it, so touching disturbs it. Toner is not wet, which is the tempting mistake."
    },
    {
      "id": "m13-q09",
      "q": "What is the job of the cleaning stage?",
      "options": [
        "To wash the paper with a cleaning fluid before it is fused and delivered to the tray",
        "To remove leftover toner from the drum so it does not print on the next copy",
        "To clean the scanner glass between copies so that no marks reach the next page",
        "To remove dust and loose paper fibres from the fuser rollers after every sheet"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m13-l2",
      "explain": "After transfer, some toner stays on the drum. A cleaning blade scrapes it off so the next cycle starts with a clean surface. The scanner glass is cleaned by hand, not by this stage."
    },
    {
      "id": "m13-q10",
      "q": "A drum has a diameter of 60 mm and turns once per second. What is its surface speed? Use π = 3.14.",
      "options": [
        "60 mm/s",
        "94.2 mm/s",
        "376.8 mm/s",
        "188.4 mm/s"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m13-l2",
      "explain": "Circumference = 3.14 × 60 mm = 188.4 mm, and one turn per second gives 188.4 mm/s. The value 94.2 mm/s comes from wrongly using the radius, and 376.8 mm/s from doubling."
    },
    {
      "id": "m13-q11",
      "q": "Which stage uses high voltage to pull toner from the drum onto the paper?",
      "options": [
        "Transfer",
        "Fusing",
        "Cleaning",
        "Exposure"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m13-l2",
      "explain": "The transfer roller or corona puts a charge on the back of the paper that attracts toner away from the drum. Fusing uses heat and pressure, not high voltage, to attract toner."
    },
    {
      "id": "m13-q12",
      "q": "What is shading correction in a copier scanner?",
      "options": [
        "Making the copy smaller or larger by a set percentage chosen by the operator",
        "Turning a full-colour image into a black and white image before it is printed",
        "Using a white reference to even out lamp brightness and sensor differences",
        "Removing toner and dust from the scanner glass with a cloth built into the lid"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m13-l3",
      "explain": "The scanner reads a white strip of known brightness and uses it to correct changes along the line. Making the image smaller is scaling, which is a different process."
    },
    {
      "id": "m13-q13",
      "q": "A copier makes a black line on every copy of a clean white original, but a test page printed from its own menu is clean. Where is the fault most likely to be?",
      "options": [
        "A scratch on the drum surface running around its circumference",
        "A nick in the edge of the cleaning blade that lets toner pass",
        "A worn fuser pressure roller that is not pressing evenly on the paper",
        "Dirt or a scratch on the scanner glass or in the optics"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m13-l3",
      "explain": "The test page does not use the scanner, so the print engine is working. A line that appears only on copies points to the scanner. A drum scratch would also show on the test page."
    },
    {
      "id": "m13-q14",
      "q": "A copy is made at 70% reduction. A line on the original measures 200 mm. How long is the line on the copy?",
      "options": [
        "130 mm",
        "140 mm",
        "270 mm",
        "285 mm"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m13-l3",
      "explain": "The copy length is 200 mm × 0.70 = 140 mm. The value 285 mm comes from dividing by 0.7, which would enlarge the line instead of reducing it."
    },
    {
      "id": "m13-q15",
      "q": "A scanner works at 600 dpi. How many pixels does it capture along a 2 inch length?",
      "options": [
        "300 pixels",
        "600 pixels",
        "1200 pixels",
        "2400 pixels"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m13-l3",
      "explain": "The scanner takes 600 pixels per inch, so 2 inches gives 600 × 2 = 1200 pixels. Only a single inch gives 600 pixels."
    },
    {
      "id": "m13-q16",
      "q": "What should you use to clean the scanner glass?",
      "options": [
        "A soft lint-free cloth with the cleaner named in the service manual",
        "Abrasive scouring powder rubbed on with a damp cloth to lift stubborn marks",
        "A razor blade held flat to scrape off any marks that are stuck on",
        "Any strong solvent such as paint thinner to dissolve the dirt quickly"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m13-l3",
      "explain": "Gentle cleaning with the approved cleaner avoids scratches and chemical damage. Abrasives, blades and strong solvents scratch or mark the glass, and every scratch then prints on copies."
    },
    {
      "id": "m13-q17",
      "q": "Why must the interlock on a laser scanner unit never be bypassed?",
      "options": [
        "The beam may be invisible and can injure the eye, and the interlock stops it when covers open",
        "The interlock only protects the drum from room light, and the laser is harmless if it is exposed",
        "Without the interlock the paper will not feed correctly through the registration rollers",
        "Bypassing it voids the toner warranty but is otherwise safe to do during a service"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m13-l3",
      "explain": "The interlock is a safety device that switches the laser off when the unit is opened. You may not see the beam, so you cannot judge when it is safe. The warranty is not the reason."
    },
    {
      "id": "m13-q18",
      "q": "In a two-component developer system, which material is used up as copies are made?",
      "options": [
        "The carrier beads",
        "The magnet inside the developer sleeve",
        "The toner",
        "The developer housing"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m13-l4",
      "explain": "Toner is taken from the developer and put on the paper, so it must be refilled. Carrier stays in the developer and only ages slowly over a long time."
    },
    {
      "id": "m13-q19",
      "q": "A machine holds 500 g of developer and the manual gives a target toner concentration of 6% by weight. How much toner should the developer contain?",
      "options": [
        "3 g",
        "30 g",
        "60 g",
        "300 g"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m13-l4",
      "explain": "Toner = 6% of 500 g = 0.06 × 500 g = 30 g. The value 300 g comes from dividing by 6% as if it were 60%, and 3 g from misplacing the decimal point."
    },
    {
      "id": "m13-q20",
      "q": "Copies have a grey background and look dark, and toner is scattering inside the machine. The sensor shows toner concentration well above the target. What is the most likely cause?",
      "options": [
        "Toner concentration too low",
        "A fuser that is too hot",
        "A dirty scanner platen",
        "Too much toner in the developer compared with carrier"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m13-l4",
      "explain": "Excess toner gives dark copies, background fog and scatter. Low concentration is the tempting answer, but it causes light copies. A dirty platen would give lines or spots, not an overall grey background."
    },
    {
      "id": "m13-q21",
      "q": "Why should you never touch an OPC drum surface with bare fingers?",
      "options": [
        "Your fingers will make the drum too warm and the heat will damage the coating",
        "The drum is made of thin glass and will break under the pressure of a hand",
        "Skin oil and scratches damage the coating and show as marks on copies",
        "The drum carries a lethal voltage even when the machine is switched off"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m13-l4",
      "explain": "The thin organic coating is easily marked by skin oil and scratches, and every mark prints on the copies. A drum that is unplugged is not at a dangerous voltage, so the last answer is wrong."
    },
    {
      "id": "m13-q22",
      "q": "A thin black line runs down every copy and every printed page in the paper direction. It started right after a cleaning blade was replaced, and the drum has no scratch. What is the most likely cause?",
      "options": [
        "A nick or trapped particle on the blade edge letting toner pass",
        "A dirty scanner slit glass",
        "A fuser that is too cool",
        "A low toner concentration"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m13-l4",
      "explain": "A line on both copies and prints points to the engine, and the timing points to the new blade. A dirty slit glass would show on copies only. A cool fuser makes toner rub off, not lines."
    },
    {
      "id": "m13-q23",
      "q": "How should you remove loose toner from inside a copier?",
      "options": [
        "Blow it out of the machine with a jet of compressed air from a can",
        "Brush it onto the floor and sweep it up with a normal broom",
        "Wipe it with a wet cloth while the machine is still powered",
        "Use a vacuum cleaner made for toner, with a fine filter"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m13-l4",
      "explain": "A toner vacuum captures the fine dust safely. Compressed air and sweeping put the dust into the air, where you can breathe it and where it settles on other parts."
    },
    {
      "id": "m13-q24",
      "q": "What is the purpose of the thermostat or thermal fuse in a fuser?",
      "options": [
        "To measure the roller temperature so the controller can hold it steady",
        "To cut the lamp power if the control fails and the roller overheats",
        "To keep the paper from wrapping around the heat roller",
        "To warm the paper before it reaches the registration rollers"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m13-l5",
      "explain": "The thermostat or thermal fuse is an independent safety device that removes power when the temperature is too high. The thermistor does the measuring for normal control, which is why the first answer is wrong."
    },
    {
      "id": "m13-q25",
      "q": "Which fuser part measures the heat roller temperature for normal control?",
      "options": [
        "The thermal fuse",
        "The thermistor",
        "The pressure roller",
        "The registration sensor"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m13-l5",
      "explain": "A thermistor changes its resistance with temperature and lets the controller switch the lamp on and off. A thermal fuse only opens at an overheat limit and is not used for regular control."
    },
    {
      "id": "m13-q26",
      "q": "A fuser nip is 6 mm wide and the paper moves through at 120 mm/s. How long does a point on the paper spend in the nip?",
      "options": [
        "20 s",
        "0.5 s",
        "0.005 s",
        "0.05 s"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m13-l5",
      "explain": "Time = width ÷ speed = 6 mm ÷ 120 mm/s = 0.05 s. Dividing the speed by the width gives 20, which has the wrong units and is not a time."
    },
    {
      "id": "m13-q27",
      "q": "Toner rubs off heavy paper easily. The fuser temperature is normal for plain paper. What is the best first step?",
      "options": [
        "Check that the paper type is set to heavy so the machine uses more heat or slower speed",
        "Bypass the thermostat so that the fuser can be run far hotter than its normal limit for heavy paper",
        "Fit a higher-wattage lamp from another machine so that the roller heats up more quickly",
        "Clean the drum with solvent to remove the film that stops the toner from sticking"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m13-l5",
      "explain": "Heavy paper takes more heat from the rollers, and the paper type setting changes the fuser control to suit. Bypassing a safety device or fitting a different lamp is dangerous and not a correct fix."
    },
    {
      "id": "m13-q28",
      "q": "What do the registration rollers do?",
      "options": [
        "They heat the paper just before it enters the fuser so that the toner melts faster and more evenly",
        "They separate the top sheet from the stack in the tray so that only one sheet is picked",
        "They hold the paper edge to square it, then feed it at the right moment to meet the image",
        "They clean toner from the back of the paper so that it does not mark the next sheet"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m13-l5",
      "explain": "Registration squares the sheet and times its arrival so the toner image lands in the correct place. Separating sheets in the tray is the job of the pick-up and separation rollers."
    },
    {
      "id": "m13-q29",
      "q": "A sheet is wrapped around the heat roller of a copier that was working a moment ago. What should you do first?",
      "options": [
        "Pull it out at once with pliers while the machine is on",
        "Pry it off with a screwdriver",
        "Open the covers and remove it with the machine running",
        "Switch off, unplug and let the fuser cool before removing the sheet"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m13-l5",
      "explain": "The fuser can burn you and its lamp runs at mains voltage, so power off and cooling come first. Metal tools can also damage the roller coating and cause a new fault."
    },
    {
      "id": "m13-q30",
      "q": "How does a copier detect a paper jam?",
      "options": [
        "A sensor is not reached or not cleared within the expected time",
        "The drum current falls to zero",
        "The machine weighs each sheet as it leaves the tray",
        "The cleaning blade stops moving"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m13-l5",
      "explain": "The controller expects each sensor to switch at set times as a sheet passes. A late or missing signal means the sheet is stuck or lost. The machine does not weigh sheets."
    },
    {
      "id": "m13-q31",
      "q": "Marks repeat every 78.5 mm down a copy. Roller diameters are: heat roller 50 mm, drum 60 mm, transfer roller 25 mm, developer sleeve 20 mm. Using π = 3.14, which is the most likely source?",
      "options": [
        "The heat roller",
        "The drum",
        "The transfer roller",
        "The developer sleeve"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m13-l6",
      "explain": "Circumference = 3.14 × 25 mm = 78.5 mm, which matches. The others give 157 mm (heat roller), 188.4 mm (drum) and 62.8 mm (sleeve)."
    },
    {
      "id": "m13-q32",
      "q": "Spots repeat every 188.4 mm along a copy. Which roller diameter produces that circumference? Use π = 3.14.",
      "options": [
        "30 mm",
        "60 mm",
        "90 mm",
        "120 mm"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m13-l6",
      "explain": "Diameter = 188.4 mm ÷ 3.14 = 60 mm. A 30 mm roller would repeat every 94.2 mm, and a 120 mm roller every 376.8 mm."
    },
    {
      "id": "m13-q33",
      "q": "Which formula gives the circumference of a roller?",
      "options": [
        "π × diameter",
        "π × radius",
        "π × diameter × diameter",
        "2 × diameter"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m13-l6",
      "explain": "Circumference is π times the diameter. Using the radius gives only half the true value, which is the usual slip."
    },
    {
      "id": "m13-q34",
      "q": "Why is the spacing of a repeating defect useful in diagnosis?",
      "options": [
        "It shows how many copies the machine has made since the last time the counter was reset by a technician",
        "It tells you the weight of the paper that is being used in the tray when the fault occurs",
        "It equals the circumference of the roller that causes the mark, which identifies the roller",
        "It shows which of the four toner colours is running low in the developer units"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m13-l6",
      "explain": "Each turn of a damaged roller leaves another mark, so the spacing equals its circumference. This lets you find the guilty roller without taking the machine apart. Paper weight does not set the spacing."
    },
    {
      "id": "m13-q35",
      "q": "A colour copy has coloured fringes along the edges of black text. What is the most likely cause?",
      "options": [
        "The fuser is too hot",
        "The colour layers are not lined up, which is misregistration",
        "The platen glass is dirty",
        "The paper is too heavy"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m13-l6",
      "explain": "When the colour layers do not align, coloured edges appear around text. Run the registration routine. A hot fuser can glaze or curl paper but does not make coloured fringes."
    },
    {
      "id": "m13-q36",
      "q": "Copies are light across the whole page. Toner is not low, the paper is dry and exposure is set to normal. Which check should come next?",
      "options": [
        "The scanner platen for fingerprints",
        "The paper size sensor",
        "The condition of the developer and the toner concentration reading",
        "The exit sensor"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m13-l6",
      "explain": "Light copies often come from aged developer or low concentration, so these are the best next checks. A dirty platen causes marks, not an even loss of density, and sensors affect paper timing."
    },
    {
      "id": "m13-q37",
      "q": "Which supply arrangement is correct when installing a copier?",
      "options": [
        "Any extension lead that reaches the machine, as long as it is long enough to avoid the corridor",
        "A wall socket with an earth, the right voltage and a circuit that can carry the load",
        "A two-pin adaptor to avoid the earth pin that does not fit the wall socket",
        "A socket shared with several other machines through one multi-way adaptor to save space"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m13-l7",
      "explain": "The rating plate gives voltage and current, and an earth connection is needed for safety. Adaptors that remove the earth or overload the circuit create a shock and fire risk."
    },
    {
      "id": "m13-q38",
      "q": "A PM is due every 60 000 copies. The last PM was at 240 000 copies and the counter now reads 288 000. The customer makes about 400 copies per working day. How many working days remain until the next PM?",
      "options": [
        "20 days",
        "25 days",
        "30 days",
        "45 days"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m13-l7",
      "explain": "The next PM is at 240 000 + 60 000 = 300 000. Copies left are 300 000 − 288 000 = 12 000, and 12 000 ÷ 400 = 30 days. Using the whole 60 000 interval would give 150 days."
    },
    {
      "id": "m13-q39",
      "q": "What should you do before you change a value in service mode?",
      "options": [
        "Record the original value so you can restore it",
        "Reset all counters to zero",
        "Switch off the interlocks",
        "Ask the customer to sign the report"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m13-l7",
      "explain": "Writing down the original value lets you undo a wrong change. Resetting counters hides the true history of the machine and should be done only after replacing the part."
    },
    {
      "id": "m13-q40",
      "q": "When should you reset the drum counter?",
      "options": [
        "At every service visit",
        "Whenever you clean the machine",
        "Before you start the PM",
        "Only after you have fitted a new drum"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m13-l7",
      "explain": "A part counter shows how much life the part has used, so it is reset only when the part is renewed. Resetting it at each visit would hide a worn drum."
    },
    {
      "id": "m13-q41",
      "q": "A new copier is switched on for the first time and the scanner carriage stalls with an error. What is the most likely missed step?",
      "options": [
        "Resetting the total counter",
        "Removing the transport lock or packing material that holds the carriage",
        "Fitting a higher-rated fuse",
        "Cleaning the cleaning blade"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m13-l7",
      "explain": "New machines are secured for transport with locks and packing, and a carriage held by a lock cannot move. A larger fuse would be dangerous and would not free the carriage."
    }
  ],
  "cards": [
    {
      "id": "m13-c01",
      "front": "What is an analogue copier?",
      "back": "A copier that projects light reflected from the original through a lens and mirrors directly onto the drum, without converting it to data.",
      "lesson": "m13-l1"
    },
    {
      "id": "m13-c02",
      "front": "What is a digital copier?",
      "back": "A copier that scans the original into electronic data, then writes the image to the drum with a laser or LED array.",
      "lesson": "m13-l1"
    },
    {
      "id": "m13-c03",
      "front": "What does the total counter record?",
      "back": "The total number of copies the machine has made. It is used for billing.",
      "lesson": "m13-l1"
    },
    {
      "id": "m13-c04",
      "front": "What does the fuser do?",
      "back": "It melts the toner into the paper using heat and pressure.",
      "lesson": "m13-l1"
    },
    {
      "id": "m13-c05",
      "front": "List the electrophotographic stages in order.",
      "back": "Charge, expose, develop, transfer, separate, fuse, clean. Many machines also have a discharge step.",
      "lesson": "m13-l2"
    },
    {
      "id": "m13-c06",
      "front": "What is a photoconductor?",
      "back": "A material that holds charge in the dark but conducts when lit. The drum coating is made of it.",
      "lesson": "m13-l2"
    },
    {
      "id": "m13-c07",
      "front": "What is a latent image?",
      "back": "The invisible pattern of charge left on the drum after exposure. Toner then makes it visible.",
      "lesson": "m13-l2"
    },
    {
      "id": "m13-c08",
      "front": "How is toner held on the paper before fusing?",
      "back": "Only by static attraction. It smears if touched.",
      "lesson": "m13-l2"
    },
    {
      "id": "m13-c09",
      "front": "Why is ozone a concern near copiers?",
      "back": "Charging parts make a small amount of ozone gas. Keep the room ventilated.",
      "lesson": "m13-l2"
    },
    {
      "id": "m13-c10",
      "front": "What does shading correction do?",
      "back": "It uses a white reference to even out lamp brightness and sensor differences along the scan line.",
      "lesson": "m13-l3"
    },
    {
      "id": "m13-c11",
      "front": "What does an analogue-to-digital converter do?",
      "back": "It turns each sensor voltage into a number so the controller can process the image.",
      "lesson": "m13-l3"
    },
    {
      "id": "m13-c12",
      "front": "A line appears on copies but not on a menu test page. Where is the fault?",
      "back": "In the scanner, glass or image processing. The print engine is working.",
      "lesson": "m13-l3"
    },
    {
      "id": "m13-c13",
      "front": "What does dpi mean?",
      "back": "Dots (pixels) per inch. At 600 dpi the scanner captures 600 pixels along each inch.",
      "lesson": "m13-l3"
    },
    {
      "id": "m13-c14",
      "front": "What is the danger of the laser unit?",
      "back": "The beam may be invisible and can injure the eye. Never open the unit or defeat its interlock.",
      "lesson": "m13-l3"
    },
    {
      "id": "m13-c15",
      "front": "What is carrier?",
      "back": "Small magnetic beads in two-component developer. They charge the toner by friction and carry it to the drum.",
      "lesson": "m13-l4"
    },
    {
      "id": "m13-c16",
      "front": "What is toner concentration?",
      "back": "The weight of toner as a share of the developer weight. The target is in the service manual.",
      "lesson": "m13-l4"
    },
    {
      "id": "m13-c17",
      "front": "Symptom: grey background and dark copies, and toner scatters. Likely cause?",
      "back": "Toner concentration too high, or worn developer or weak charging.",
      "lesson": "m13-l4"
    },
    {
      "id": "m13-c18",
      "front": "What does the cleaning blade do?",
      "back": "It scrapes leftover toner off the drum. A nick lets toner pass and prints a thin line.",
      "lesson": "m13-l4"
    },
    {
      "id": "m13-c19",
      "front": "How do you remove loose toner safely?",
      "back": "Use a vacuum cleaner made for toner. Never blow it out with air.",
      "lesson": "m13-l4"
    },
    {
      "id": "m13-c20",
      "front": "What is the fuser thermistor for?",
      "back": "It measures heat roller temperature so the controller can switch the lamp to hold the set value.",
      "lesson": "m13-l5"
    },
    {
      "id": "m13-c21",
      "front": "What does a thermal fuse or thermostat protect against?",
      "back": "Overheating if the normal control fails. It cuts the lamp power. Never bypass it.",
      "lesson": "m13-l5"
    },
    {
      "id": "m13-c22",
      "front": "What is the job of registration rollers?",
      "back": "To square up the paper and feed it at the right moment so it meets the toner image.",
      "lesson": "m13-l5"
    },
    {
      "id": "m13-c23",
      "front": "What is the formula for time in a fuser nip?",
      "back": "Time = nip width ÷ paper speed. For example 6 mm ÷ 120 mm/s = 0.05 s.",
      "lesson": "m13-l5"
    },
    {
      "id": "m13-c24",
      "front": "What is the circumference of a roller?",
      "back": "circumference = π × diameter, with π ≈ 3.14.",
      "lesson": "m13-l6"
    },
    {
      "id": "m13-c25",
      "front": "How do you find the diameter of the roller that caused a repeating defect?",
      "back": "Divide the measured spacing by π. For example 157 mm ÷ 3.14 = 50 mm.",
      "lesson": "m13-l6"
    },
    {
      "id": "m13-c26",
      "front": "Symptom: coloured edges on text in a colour copy. Likely cause?",
      "back": "Colour misregistration. Run the registration routine.",
      "lesson": "m13-l6"
    },
    {
      "id": "m13-c27",
      "front": "When do you reset a part counter?",
      "back": "Only after you have replaced the part that it counts.",
      "lesson": "m13-l7"
    },
    {
      "id": "m13-c28",
      "front": "What should you write down before changing a service mode value?",
      "back": "The original value, so you can restore it.",
      "lesson": "m13-l7"
    }
  ]
});

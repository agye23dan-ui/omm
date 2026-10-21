OMM.registerModule({
  "id": "m05",
  "summary": "Plan a repair, make and fit simple parts, solder and desolder safely, repair housings without losing their safety function, and test, adjust and record a repair before returning a machine to service.",
  "outcomes": [
    "Decide whether to repair or replace a part, choose the correct part and prepare a simple cost estimate.",
    "Mark out, cut, drill, tap and deburr a simple metal part to a stated tolerance.",
    "Select and fit screws, washers, clips, springs and thread-locking compound correctly.",
    "Solder and desolder through-hole components, and judge a joint as good, dry or cold.",
    "Repair a housing or panel without losing its insulation, guarding or safety function.",
    "Test, adjust and record a repair, including an electrical safety check before the machine returns to service."
  ],
  "cheatsheet": [
    "Wear parts and kits are replaced by page count or condition, not only when they fail.",
    "Safety parts (fuses, thermal fuses, barriers) must be the original or an approved equivalent.",
    "Tap drill size = thread diameter − pitch. M4 × 0.7 mm needs a 3.3 mm drill.",
    "Tolerance: 25.0 mm ± 0.2 mm means 24.8 mm to 25.2 mm is acceptable.",
    "Tin-lead (63/37) solder melts at about 183 °C. Common lead-free solders melt at about 217 °C or more.",
    "Good joint: smooth, shiny, slightly concave. Bad joint: dull, grainy, ball-shaped or cracked.",
    "Never solder a live or charged board. Unplug, discharge and check first.",
    "A repaired cover must still insulate, guard and hold its interlock and labels.",
    "Check the neighbouring functions, run a test print, do the safety test, then record everything."
  ],
  "lessons": [
    {
      "id": "m05-l1",
      "title": "Planning a repair",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to plan a repair: deciding between repair and replacement, choosing the right part, using maintenance kits and giving the customer an honest cost estimate."
        },
        {
          "t": "h",
          "text": "Repair or replace?"
        },
        {
          "t": "p",
          "text": "A good repair is safe, lasting and fair in price. Before you open the machine, think about four things."
        },
        {
          "t": "ul",
          "items": [
            "Safety. If a fault could cause fire, shock or injury, the repair must restore full protection.",
            "Cost. Compare the cost of the repair with the cost of a replacement part or machine. Many businesses have their own rule for this, so ask your employer.",
            "Availability. Can you get the part, and how long will it take?",
            "Downtime. How long can the customer manage without the machine?"
          ]
        },
        {
          "t": "p",
          "text": "Sometimes it is cheaper to replace a whole assembly, such as a complete paper-feed unit, than to repair a worn part inside it. The service manual shows which parts are sold separately."
        },
        {
          "t": "h",
          "text": "Choosing the part"
        },
        {
          "t": "p",
          "text": "An **original part** (also called an OEM part) is made or approved by the machine maker. A **compatible part** is made by another company to fit the same place. Compatible parts can be good, but quality varies. Check the size, the electrical rating and any safety approval marking."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "For safety-critical parts, use the original part or an approved equivalent of the same type and rating. This includes fuses, thermal fuses, thermostats, high-voltage parts and insulating barriers. A part that only fits may not protect anyone."
        },
        {
          "t": "p",
          "text": "Find the correct **part number** in the parts catalogue for the exact model. Parts change between production batches, and old numbers are often replaced by newer ones. Write down the model and serial number from the machine label before you order."
        },
        {
          "t": "h",
          "text": "Wear parts and maintenance kits"
        },
        {
          "t": "p",
          "text": "A **wear part** is a part that wears out with normal use. Examples are pick-up rollers, separation pads, cleaning blades, filters and fuser parts. A **maintenance kit** groups the wear parts that are replaced together at a set page count. The interval depends on the machine, so read it from the service manual."
        },
        {
          "t": "example",
          "title": "When is the next kit due?",
          "steps": [
            "The manual gives a kit interval of 100,000 pages. The kit was last fitted when the counter read 200,000.",
            "The next kit is due at 200,000 + 100,000 = 300,000 pages.",
            "The counter now reads 240,000. Pages left: 300,000 − 240,000 = 60,000.",
            "Tell the customer the kit is due after about 60,000 more pages."
          ]
        },
        {
          "t": "h",
          "text": "The cost estimate"
        },
        {
          "t": "p",
          "text": "An **estimate** tells the customer the expected cost before you start. Include parts, labour, any call-out or travel charge, and tax where it applies. Say clearly what is included, and tell the customer if you find extra faults."
        },
        {
          "t": "example",
          "title": "Building an estimate",
          "steps": [
            "Parts: one roller kit at 45.00.",
            "Labour: 1.5 hours at 30.00 per hour = 45.00.",
            "Call-out charge: 10.00.",
            "Subtotal: 45.00 + 45.00 + 10.00 = 100.00.",
            "If tax applies at an example rate of 10%, tax is 10.00 and the total is 110.00. Use the real local rate in your own work."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Photograph the fault and the part number before you start. It helps with the estimate, with ordering and with your service report."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Plan before you open the machine: safety first, then cost, then the right part, then an honest estimate."
        }
      ]
    },
    {
      "id": "m05-l2",
      "title": "Basic workshop fabrication",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers basic fabrication: marking out, cutting, filing, drilling, tapping and deburring a simple part such as a bracket or spacer when no ready-made part is available."
        },
        {
          "t": "h",
          "text": "Marking out and cutting"
        },
        {
          "t": "p",
          "text": "**Marking out** means drawing the shape and hole positions on the material before you cut. Use a steel rule, a scriber or fine marker, and an engineer's square. If an old part exists, use it as a template, but check it is not worn or bent."
        },
        {
          "t": "p",
          "text": "Cut outside the line, then file back to it. Use a hacksaw for metal bars and tubes, and tin snips or a fine-toothed saw for thin sheet. Hold the work firmly in a vice. Thin material needs fine teeth so that several teeth are always cutting."
        },
        {
          "t": "h",
          "text": "Filing and deburring"
        },
        {
          "t": "p",
          "text": "A **file** removes small amounts of metal. Push it forward on the cutting stroke and lift it on the return. A **burr** is the sharp raised edge left after cutting or drilling. Remove burrs with a file or a deburring tool. Burrs cut hands, damage wire insulation and stop parts from sitting flat."
        },
        {
          "t": "h",
          "text": "Drilling"
        },
        {
          "t": "ol",
          "items": [
            "Mark the hole centre and make a small dent with a centre punch so the drill does not wander.",
            "Clamp the work firmly. Never hold it by hand.",
            "Put on eye protection. Tie back long hair, and do not wear loose gloves or sleeves near a rotating drill.",
            "Drill a small pilot hole first for large holes, then open it to size.",
            "Remove the chuck key before you switch on.",
            "Deburr both sides of the hole."
          ]
        },
        {
          "t": "h",
          "text": "Tapping a thread"
        },
        {
          "t": "p",
          "text": "A **tap** cuts an internal thread in a drilled hole. First drill the **tap drill** size. The thread **pitch** is the distance between neighbouring threads. The rule for a metric thread is below."
        },
        {
          "t": "formula",
          "text": "Tap drill = thread diameter − pitch",
          "caption": "For standard metric threads"
        },
        {
          "t": "example",
          "title": "Choosing a tap drill",
          "steps": [
            "You want an M5 thread. The coarse pitch for M5 is 0.8 mm.",
            "Tap drill = 5.0 − 0.8 = 4.2 mm.",
            "Check an M4 thread with pitch 0.7 mm: 4.0 − 0.7 = 3.3 mm.",
            "Check the pitch in a thread chart before you drill, because fine threads use a different pitch."
          ]
        },
        {
          "t": "p",
          "text": "Use a drop of cutting oil. Turn the tap a half turn forward, then a quarter turn back to break the chip. Keep the tap square to the work."
        },
        {
          "t": "h",
          "text": "Material and tolerance"
        },
        {
          "t": "p",
          "text": "Choose the material for the job. Mild steel is strong and cheap but rusts without a coating. Stainless steel resists rust but is harder to cut. Aluminium is light and easy to work. Brass machines easily and is used for bushes and spacers."
        },
        {
          "t": "p",
          "text": "**Tolerance** is the amount a size may differ from its target. A bracket marked 25.0 mm ± 0.2 mm is acceptable from 24.8 mm to 25.2 mm. A reading of 25.3 mm is out of tolerance, even though it is only 0.3 mm from the target."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Do not cut, drill or file near an open machine. Metal chips and filings can cause short circuits on boards and damage drives. Work at a bench and clean up with a brush or vacuum."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Mark, centre-punch, clamp and wear eye protection. Deburr every cut edge and check the finished size against the tolerance."
        }
      ]
    },
    {
      "id": "m05-l3",
      "title": "Fasteners and assembly",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the fasteners used in office machines, how to choose and fit them, and how to rebuild an assembly so it stays tight and aligned."
        },
        {
          "t": "h",
          "text": "Screws and washers"
        },
        {
          "t": "p",
          "text": "A **machine screw** has a uniform thread, such as M3 or M4, and fits a tapped hole or a nut. A **self-tapping screw** forms its own thread in plastic or thin metal. Never fit a machine screw into a hole made for a self-tapping screw, or the other way round."
        },
        {
          "t": "ul",
          "items": [
            "A **flat washer** spreads the load and protects the surface.",
            "A **spring washer** keeps pressure on the screw so it resists loosening.",
            "A **toothed washer** bites into paint or coating. It is often used under earth connections to make a good metal-to-metal contact."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A screw that holds an earth wire or a cover that protects against live parts has a safety job. Refit it in the same place with the same washers."
        },
        {
          "t": "h",
          "text": "Choosing the right length"
        },
        {
          "t": "p",
          "text": "Screws must be the right length. A screw that is too short has too little thread in the part. A screw that is too long can bottom out, so the cover is never clamped, or it can push through a boss and touch a circuit board."
        },
        {
          "t": "example",
          "title": "Checking a screw length",
          "steps": [
            "A cover is 2 mm thick. The plastic boss below it is 8 mm deep.",
            "The most the screw can travel is 2 + 8 = 10 mm.",
            "A 12 mm screw is 2 mm too long. It reaches the bottom of the boss before it clamps the cover, and may split the boss.",
            "Choose a shorter screw, such as the original length from the parts list."
          ]
        },
        {
          "t": "h",
          "text": "Thread-locking compound"
        },
        {
          "t": "p",
          "text": "**Thread-locking compound** is a liquid that sets in a thread to stop it loosening from vibration. Grades differ. A medium-strength, removable grade suits small screws that you may need to undo again. A high-strength grade is for permanent joints. Use it only on metal threads, because some compounds can attack plastics."
        },
        {
          "t": "h",
          "text": "Rivets, clips and springs"
        },
        {
          "t": "p",
          "text": "A **rivet** joins parts permanently. Remove a rivet by drilling out its head, then replace it with a rivet of the same diameter and length range. An **E-clip** or snap ring sits in a groove on a shaft. Slide an E-clip on sideways and do not stretch it. Keep a few spares, because clips often bend or fly off when removed."
        },
        {
          "t": "p",
          "text": "Springs store energy. A tension spring can slip and fly across the room. Wear eye protection, use a spring hook and keep your face away from the line of the spring. Note which hole or hook each end uses before you remove it."
        },
        {
          "t": "h",
          "text": "Alignment and torque"
        },
        {
          "t": "p",
          "text": "Make a scribed line or paint mark on a part before you loosen it. Refit the part to the mark. **Torque** is the turning force applied to a screw. When the manual gives a torque value, use a torque screwdriver or wrench. When it does not, tighten until the screw is snug, then stop. Over-tightening strips threads and cracks plastic."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Put screws from each section in a labelled tray or a drawing of the cover. Different lengths look alike, and the wrong one in the wrong hole causes damage."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Right screw, right place, right tightness. Check the manual for torque and for locking compound."
        }
      ]
    },
    {
      "id": "m05-l4",
      "title": "Soldering and desoldering",
      "minutes": 11,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers soldering and desoldering by hand: the equipment, a good technique, how to judge a joint, and how to stay safe while you work."
        },
        {
          "t": "h",
          "text": "Solder, flux and temperature"
        },
        {
          "t": "p",
          "text": "**Solder** is a metal alloy that melts at a low temperature and joins electronic parts to a circuit board. **Flux** is a chemical that cleans oxide from the metal so the solder can flow and stick. Solder for electronics usually has flux in its core. Never use acid-based plumbing flux on electronics."
        },
        {
          "t": "table",
          "head": [
            "Solder type",
            "Typical melting point",
            "Typical iron tip setting"
          ],
          "rows": [
            [
              "Tin-lead, 63/37",
              "About 183 °C",
              "Often 300 to 350 °C"
            ],
            [
              "Common lead-free alloys",
              "About 217 °C or higher",
              "Often 340 to 400 °C"
            ]
          ],
          "caption": "Typical values. Follow the solder maker and the service manual."
        },
        {
          "t": "p",
          "text": "Lead-free solder needs more heat, so keep contact times short. Do not mix solder types on one joint unless the manual allows it. Machine makers choose a type to suit their boards."
        },
        {
          "t": "h",
          "text": "How to make a good joint"
        },
        {
          "t": "ol",
          "items": [
            "Clean the tip and coat it with a little fresh solder. This is called **tinning**.",
            "Touch the iron to both the pad and the component lead at the same time.",
            "After about one second, feed solder to the junction of the pad and lead, not to the iron tip.",
            "When the solder flows around the lead, remove the solder, then the iron.",
            "Hold the part still until the joint cools, usually a few seconds.",
            "Check the joint and trim the lead."
          ]
        },
        {
          "t": "diagram",
          "name": "solder-joints"
        },
        {
          "t": "p",
          "text": "A **good joint** is smooth, shiny and slightly concave like a small volcano, and the solder wets both the pad and the lead. A **cold joint** is dull, grainy or lumpy. It happens when the joint was moved while cooling or was not hot enough. A **dry joint** has a gap or crack, so the solder has not stuck to one surface. Dry joints often appear on heavy parts such as transformers and connectors, where vibration and heat cycles crack them over time."
        },
        {
          "t": "h",
          "text": "Desoldering"
        },
        {
          "t": "p",
          "text": "To remove a part, heat the joint and take away the molten solder. A **desoldering pump** sucks the solder up. **Desoldering braid** is copper braid that soaks it up. Add a little fresh solder to help the heat flow. Do not heat a pad for long or force a lead out, because a pad can lift from the board. Clean the holes before you fit the new part."
        },
        {
          "t": "h",
          "text": "Surface-mount parts"
        },
        {
          "t": "p",
          "text": "**Surface-mount** parts sit on the board surface with no lead through a hole. They are small and need a fine tip, tweezers, extra flux and light heat. Hot-air tools are common for larger chips. Replace them only with practice on a scrap board first."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "An iron tip is hot enough to cause a serious burn. Use the stand and never leave it unattended. Use fume extraction, wash your hands after handling solder, and use ESD precautions. Unplug the machine and discharge large capacitors first. Never solder a board that is connected to power."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A tip that will not take solder is oxidised. Clean it with brass wool or a damp sponge and re-tin it. Switch the iron off when you finish."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Heat the joint, not the solder. Feed solder to the joint. Hold still while it cools."
        }
      ]
    },
    {
      "id": "m05-l5",
      "title": "Repairing housings, panels and doors",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to repair covers, panels, hinges and seals, and why a repaired cover must still do its safety job."
        },
        {
          "t": "h",
          "text": "Common plastics"
        },
        {
          "t": "p",
          "text": "Most covers are moulded plastic. The type is often moulded inside the part as letters, such as ABS or PC."
        },
        {
          "t": "table",
          "head": [
            "Plastic",
            "Where found",
            "Repair notes"
          ],
          "rows": [
            [
              "ABS",
              "Housings, covers",
              "Common. Solvent cement and most adhesives can bond it."
            ],
            [
              "PC (polycarbonate)",
              "Tough covers, guards",
              "Strong. Some solvents and cleaners can cause cracking."
            ],
            [
              "PC/ABS blend",
              "Housings",
              "Check the adhesive maker for compatibility."
            ],
            [
              "HIPS",
              "Low-cost covers",
              "Brittle with age. Often easier to replace."
            ],
            [
              "PP (polypropylene)",
              "Hinged lids, ducts",
              "Waxy surface. Most glues do not hold."
            ]
          ],
          "caption": "Plastics you may meet"
        },
        {
          "t": "p",
          "text": "Test an adhesive on a hidden spot first. Choose a glue that suits the plastic and follow the maker's instructions. A very small hole drilled at the end of a crack can stop it spreading on a non-critical cover."
        },
        {
          "t": "h",
          "text": "Hinges, latches and seals"
        },
        {
          "t": "p",
          "text": "Hinges wear at the pin and the plastic lug. If a lug is broken, replace the part or the hinge set if the manual lists one. A door that sags can fail to close an interlock switch, so check alignment. Latches should click and hold firmly."
        },
        {
          "t": "p",
          "text": "A **gasket** or foam seal closes gaps against light, dust, toner or air. If it is flat, torn or missing, replace it with the correct material. Do not use any soft material you find."
        },
        {
          "t": "h",
          "text": "Cosmetic repairs"
        },
        {
          "t": "p",
          "text": "Scratches and small chips can be filled and painted for appearance only. Do not cover vents, serial labels, safety labels or marking. Replace any label that is missing, such as a hot-surface, laser or high-voltage warning, with the correct one in the same place."
        },
        {
          "t": "h",
          "text": "The safety function of a housing"
        },
        {
          "t": "p",
          "text": "A cover is often more than decoration. It may insulate you from live parts, guard moving or hot parts, block laser light, direct airflow, shield electrical noise or carry an actuator for an interlock switch. Some plastics are chosen because they resist burning."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Do not repair a cover or barrier that insulates against live parts, carries an interlock actuator or contains a flame barrier. Replace it with the correct part. Glue, tape or filler cannot be trusted to keep the insulation distances, and conductive paint or metal-filled filler can create a shock path."
        },
        {
          "t": "table",
          "head": [
            "Item",
            "Cosmetic repair OK?",
            "Better action"
          ],
          "rows": [
            [
              "Scratch on an outer panel",
              "Yes",
              "Fill and touch up if the customer wants it"
            ],
            [
              "Crack in a decorative cover",
              "Often",
              "Glue with a compatible adhesive, or replace"
            ],
            [
              "Cracked interlock actuator tab",
              "No",
              "Replace the part"
            ],
            [
              "Cracked insulating barrier",
              "No",
              "Replace the part"
            ]
          ],
          "caption": "When to repair and when to replace"
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "After any cover repair, close the cover and check that the interlock switch operates, the cover sits flat and no screw is missing."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Ask what the cover protects before you repair it. If it protects people, replace it."
        }
      ]
    },
    {
      "id": "m05-l6",
      "title": "Testing and adjusting after repair",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers what to do after the repair: function checks, adjustments, alignment, test prints, the electrical safety check and the repair record."
        },
        {
          "t": "h",
          "text": "Function check"
        },
        {
          "t": "p",
          "text": "First check the function you repaired. Then check the functions nearby. Taking a machine apart can disturb connectors, sensors, harnesses and covers. Run the machine through its normal modes, such as feeding from every tray, and listen for new noise."
        },
        {
          "t": "h",
          "text": "Adjustment and alignment"
        },
        {
          "t": "p",
          "text": "An **adjustment point** is a screw, cam, slot or software setting that changes a position or value. Only adjust if the manual says so, and only by the amount it gives. Always write down the original position first, so you can return to it. Change one thing at a time."
        },
        {
          "t": "p",
          "text": "**Alignment** means parts are in the correct position relative to each other. Examples are paper-guide position, roller parallelism and image position on the page. **Calibration** sets a sensor or value against a known reference, such as a scanner white reference or a sensor level."
        },
        {
          "t": "h",
          "text": "Test prints and copies"
        },
        {
          "t": "p",
          "text": "Use the manufacturer's test chart if one exists. Otherwise use a simple page with straight lines, a frame and text. Check margins, skew, density, streaks and registration. A copy of the test page also checks the scanner."
        },
        {
          "t": "example",
          "title": "Checking a margin against tolerance",
          "steps": [
            "Example values only: the manual target for the top margin is 5.0 mm ± 1.0 mm. The acceptable range is 4.0 mm to 6.0 mm.",
            "You measure 6.4 mm on the test print.",
            "6.4 mm is 0.4 mm above the upper limit of 6.0 mm, so it is out of tolerance.",
            "Adjust as the manual describes to bring it back towards 5.0 mm, then print again and re-measure."
          ]
        },
        {
          "t": "h",
          "text": "Electrical safety check"
        },
        {
          "t": "p",
          "text": "Before you return a mains-powered machine to service, do a safety check. Look at the cord, plug and strain relief. Check that all covers, earth connections and labels are in place. Where your local rules require it, test earth continuity and insulation with a proper tester and compare with the limits. Limits differ by country and by machine type, so use your local standard and the manual."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Do not return a machine to service if it fails an earth or insulation test, or if you are unsure about a repair that affects safety. Find the fault and repeat the test. Safety tests must be done by a competent person with a correct, calibrated tester."
        },
        {
          "t": "h",
          "text": "Record and hand over"
        },
        {
          "t": "p",
          "text": "Write a service record. Include the fault, the cause, the parts fitted, the adjustments made, the test results and the counter reading. Reset any maintenance counters only as the manual says. Show the customer the working machine and explain what you did in plain words."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Keep the old part until the customer has seen it or the job is closed. It can help to prove the diagnosis if a question arises."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A repair is finished only when it is tested, safe, recorded and explained to the customer."
        }
      ]
    }
  ],
  "practical": {
    "title": "Replace a through-hole component by desoldering and soldering",
    "objective": "Remove a through-hole resistor from a scrap practice board, fit a new one with a good solder joint, and judge the joints by inspection.",
    "time": "45 minutes",
    "tools": [
      "Temperature-controlled soldering iron with a stand and a clean tip",
      "Solder with a flux core, tin-lead or lead-free as your workshop supplies",
      "Desoldering pump or desoldering braid",
      "Side cutters and fine tweezers",
      "Scrap practice board that is not connected to power, and spare through-hole resistors",
      "Magnifier or hand lens, and safety glasses"
    ],
    "safety": [
      "Use only an unpowered scrap or training board. Never solder a board that is connected to mains or holds a charge.",
      "Wear safety glasses. Solder can spit and clipped leads can fly.",
      "Always place the hot iron in its stand. Never lay it on the bench. Treat the tip as hot even when the iron is switched off.",
      "Work with fume extraction or good ventilation, and wash your hands before you eat or drink.",
      "Use an anti-static wrist strap if the board carries static-sensitive parts.",
      "Switch the iron off when you finish and leave it to cool before you store it."
    ],
    "steps": [
      "Put on safety glasses. Check that the board is unpowered and nothing is connected to it.",
      "Set the iron to the temperature your instructor or workshop sheet gives for your solder. Let it reach temperature.",
      "Clean the tip on a damp sponge or brass wool, then tin it with fresh solder.",
      "Choose one resistor on the board. Note its value and orientation, and take a photo or draw it.",
      "Hold the iron against one joint of the resistor and the pad for about two seconds until the solder melts.",
      "Remove the molten solder with the desoldering pump or braid. Repeat for the second joint.",
      "Check both holes are clear of solder. Gently wiggle the old resistor out, with no force.",
      "Bend the leads of the new resistor to fit the hole spacing. Insert it, then bend the leads slightly outward to hold it.",
      "Solder the first lead: heat the pad and lead together, then feed in solder for about one second. Remove the solder, then the iron, and keep still while it cools.",
      "Solder the second lead in the same way.",
      "Trim the leads just above the solder with the side cutters, holding the clipped end so it does not fly.",
      "Inspect both joints with a magnifier. Check each is smooth, shiny and slightly concave.",
      "If a joint looks dull, grainy or has a gap, reheat it with a little fresh solder and inspect it again.",
      "Measure the new resistor on the board with a multimeter and check it matches the marked value. Switch off the iron and clean up."
    ],
    "checks": [
      "I can set a soldering iron to a suitable temperature and keep it safe while it is hot.",
      "I can remove a through-hole part with a pump or braid without lifting the pad.",
      "I can make a smooth, shiny, concave joint and trim the lead correctly.",
      "I can tell a good joint from a dull, grainy or cracked joint by inspection.",
      "I can explain why I must not solder a board that is powered or charged."
    ]
  },
  "quiz": [
    {
      "id": "m05-q01",
      "q": "What is a wear part in an office machine?",
      "options": [
        "A part that is fitted at the factory and can never be changed by a technician",
        "A cosmetic part such as a cover or label",
        "A part that wears with normal use and is replaced when due or worn",
        "A tool you wear while servicing the machine"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m05-l1",
      "explain": "Wear parts such as pick-up rollers, pads and blades slowly wear out, so they are replaced at a set page count or when they are worn. Covers and labels are not wear parts in this sense, because they do not wear out through normal operation."
    },
    {
      "id": "m05-q02",
      "q": "Why should a thermal fuse be replaced with an original or approved equivalent, even if another part fits the holder?",
      "options": [
        "Its opening temperature and approval protect against fire, and a part that only fits may not",
        "Original parts always cost less than compatible parts, so the repair is cheaper for the customer",
        "Compatible parts cannot be physically fitted into the machine because the holder has a different shape",
        "The machine will not switch on with any other thermal fuse, because the controller reads it"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m05-l1",
      "explain": "A thermal fuse is a last line of defence, so the opening temperature and approval must be right. A fuse that fits but opens at the wrong temperature may not stop an overheat. Price is not the reason, and many parts fit without being correct."
    },
    {
      "id": "m05-q03",
      "q": "A job needs one roller kit at 45.00, 1.5 hours of labour at 30.00 per hour and a call-out charge of 10.00. There is no tax. What is the estimate total?",
      "options": [
        "105.00",
        "90.00",
        "95.00",
        "100.00"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m05-l1",
      "explain": "Labour is 1.5 × 30.00 = 45.00. The total is 45.00 + 45.00 + 10.00 = 100.00. The value 90.00 comes from forgetting the call-out charge."
    },
    {
      "id": "m05-q04",
      "q": "A maintenance kit is due every 100,000 pages. It was last fitted when the counter read 200,000. The counter now reads 240,000. How many pages remain before the next kit is due?",
      "options": [
        "40,000",
        "60,000",
        "100,000",
        "140,000"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m05-l1",
      "explain": "The next kit is due at 300,000 pages, so 300,000 − 240,000 = 60,000 pages remain. The value 40,000 is the number of pages already printed since the last kit."
    },
    {
      "id": "m05-q05",
      "q": "You must order a replacement roller. What is the most reliable way to get the correct part?",
      "options": [
        "Choose one that looks the same size and shape as the old roller in a photograph",
        "Look it up in the parts catalogue for the exact model and check for a newer number",
        "Use the part number from a similar machine you repaired last year and check that it fits",
        "Order the cheapest roller of about the same size and test whether it fits"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m05-l1",
      "explain": "The parts catalogue for the exact model lists the right part, and numbers are often replaced by newer ones. A similar machine may use a different revision, so its number can be wrong."
    },
    {
      "id": "m05-q06",
      "q": "What is the main job of a centre punch before you drill a hole in metal?",
      "options": [
        "It hardens the metal so the drill lasts longer",
        "It measures the position of the hole",
        "It removes swarf from the hole",
        "It makes a small dent that stops the drill point wandering"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m05-l2",
      "explain": "The dent gives the drill point a place to start, so the hole stays where you marked it. A centre punch does not measure or harden the metal."
    },
    {
      "id": "m05-q07",
      "q": "You will cut an M4 thread with a coarse pitch of 0.7 mm. Which tap drill size should you use?",
      "options": [
        "3.3 mm",
        "4.0 mm",
        "3.7 mm",
        "4.7 mm"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m05-l2",
      "explain": "Tap drill = thread diameter − pitch = 4.0 − 0.7 = 3.3 mm. A 4.0 mm hole is as large as the finished thread, so the thread would have nothing to cut into."
    },
    {
      "id": "m05-q08",
      "q": "Why must you remove burrs after cutting or drilling sheet metal?",
      "options": [
        "Burrs always change the colour of the finished part",
        "Burrs make the whole sheet weaker",
        "Burrs make the part heavier than the drawing allows once several are added",
        "Burrs cut hands and wire insulation and stop parts sitting flat"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m05-l2",
      "explain": "A burr is a sharp raised edge, so it is a cut hazard and can damage cables and stop parts fitting. Its weight is tiny, and it does not weaken the sheet."
    },
    {
      "id": "m05-q09",
      "q": "A bracket should be 25.0 mm wide with a tolerance of ± 0.2 mm. You measure 25.3 mm. What is the correct decision?",
      "options": [
        "Accept it, because it is only 0.3 mm from the target",
        "Reject or rework it, because the upper limit is 25.2 mm",
        "Accept it, because tolerance only applies to holes",
        "Accept it, because it is within the lower limit of 24.8 mm"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m05-l2",
      "explain": "The acceptable range is 24.8 mm to 25.2 mm, and 25.3 mm is above the upper limit. Being close to the target does not matter if the reading is outside the stated range."
    },
    {
      "id": "m05-q10",
      "q": "Which practice is correct when drilling a metal bracket on a bench drill?",
      "options": [
        "Hold the bracket in your hand so you can feel it if it starts to move",
        "Wear loose gloves to protect your hands from the sharp swarf and chips",
        "Leave the chuck key in the chuck so it is easy to find when you need it",
        "Clamp the bracket, wear eye protection and remove the chuck key"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m05-l2",
      "explain": "A clamped part cannot spin and cut you, and eye protection guards against chips. Loose gloves can be pulled into a rotating drill, and a chuck key left in the chuck can be thrown out when the drill starts."
    },
    {
      "id": "m05-q11",
      "q": "You need a light bracket that will not rust, and you only have hand tools. Which material is the most practical?",
      "options": [
        "Cast iron",
        "Thick stainless steel plate",
        "Aluminium sheet",
        "Glass-filled nylon"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m05-l2",
      "explain": "Aluminium is light, resists rust and cuts and bends easily with hand tools. Stainless steel resists rust but is heavy and hard to cut by hand, and cast iron rusts and is brittle."
    },
    {
      "id": "m05-q12",
      "q": "What is a self-tapping screw designed to do?",
      "options": [
        "Form its own thread as it is driven into plastic or thin metal",
        "Lock itself in place with a spring washer",
        "Fit only into holes that already have a cut thread",
        "Expand like a rivet to fill the hole"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m05-l3",
      "explain": "A self-tapping screw makes its own thread in the material. A machine screw needs a thread that already exists, which is why the two types must not be swapped."
    },
    {
      "id": "m05-q13",
      "q": "Why is a toothed washer often used under an earth connection?",
      "options": [
        "Its teeth bite through paint or coating and make a good metal-to-metal contact",
        "Its teeth stop the screw from turning by gripping the plastic",
        "It makes the screw easier to remove later",
        "It raises the voltage on the earth wire"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m05-l3",
      "explain": "Paint and coatings insulate, so the teeth cut through them to reach bare metal. A washer cannot change the voltage, and it grips metal rather than plastic."
    },
    {
      "id": "m05-q14",
      "q": "A 12 mm screw is fitted through a 2 mm thick cover into a plastic boss that is 8 mm deep. What happens?",
      "options": [
        "It fits with 2 mm to spare, so it is correct",
        "The cover is clamped correctly, because longer screws grip better",
        "The cover becomes loose, because the screw is too thin",
        "It bottoms out in the boss before it clamps the cover, and may split the boss"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m05-l3",
      "explain": "The cover and boss together give only 2 + 8 = 10 mm of travel, so a 12 mm screw is 2 mm too long. A screw that is too long is not an extra margin, because it hits the bottom first."
    },
    {
      "id": "m05-q15",
      "q": "Which statement about thread-locking compound is correct?",
      "options": [
        "It should be put on plastic threads to stop them loosening",
        "A high-strength grade is best on every screw so it never comes undone",
        "A medium-strength removable grade suits small metal screws",
        "It removes the need for washers on all fasteners"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m05-l3",
      "explain": "A medium grade holds against vibration but can still be undone with normal tools. A high-strength grade can make later service very hard, and some compounds attack plastic."
    },
    {
      "id": "m05-q16",
      "q": "While you refit a tension spring, it slips and flies off. Which precaution would have reduced the risk?",
      "options": [
        "Stretch the spring well past its working length before hooking it on the post",
        "Wear eye protection and use a spring hook, keeping clear of the spring",
        "Fit the spring last, with the machine switched on",
        "Cut a coil off the spring so there is less tension"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m05-l3",
      "explain": "A spring hook gives control, and eye protection and a safe position reduce injury if the spring slips. Over-stretching damages the spring, and cutting a coil changes its force and the way the machine works."
    },
    {
      "id": "m05-q17",
      "q": "What is the job of flux in soldering?",
      "options": [
        "It makes all solder melt at a lower temperature",
        "It removes oxide from the metal so the solder can flow and stick",
        "It insulates the joint after it cools",
        "It cools the joint faster"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m05-l4",
      "explain": "Oxide on the surface stops solder from wetting the metal, and flux cleans it away so the joint can form. Flux does not insulate a joint, and acid plumbing flux must never be used on electronics."
    },
    {
      "id": "m05-q18",
      "q": "Which description fits a good solder joint?",
      "options": [
        "Smooth, shiny and slightly concave, with solder wetting pad and lead",
        "A round ball of solder that sits on top of the pad without touching the lead",
        "Dull and grainy, with a lead that moves in the solder",
        "A large blob that hides the pad and the lead"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m05-l4",
      "explain": "A good joint has solder that has flowed and bonded to both surfaces, giving a shiny, slightly concave shape. A ball sitting on the pad shows the solder has not wetted it, and extra solder can hide a poor joint."
    },
    {
      "id": "m05-q19",
      "q": "Why does a common lead-free solder usually need a hotter iron than 63/37 tin-lead solder?",
      "options": [
        "Lead-free solder has more flux that must be burned off before it flows",
        "Lead-free solder is always supplied as thicker wire",
        "Common lead-free alloys melt at a higher temperature",
        "A hotter iron removes the need for any flux"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m05-l4",
      "explain": "Tin-lead 63/37 melts at about 183 °C, while common lead-free alloys melt at about 217 °C or higher, so the joint must reach a higher temperature. Heat does not replace flux."
    },
    {
      "id": "m05-q20",
      "q": "A joint on a practice board looks dull and grainy, and the lead moves slightly in the solder. What is the correct repair?",
      "options": [
        "Add more solder on top of the dull joint without reheating the old solder",
        "Press the iron on the joint for 20 seconds",
        "Paint flux over the joint and leave it as it is",
        "Reheat it with fresh solder and keep the lead still while it cools"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m05-l4",
      "explain": "This is a cold joint, so the old solder must be melted again so it flows properly. Adding solder on top of a cold joint hides the problem, and a very long contact can lift the pad or damage the part."
    },
    {
      "id": "m05-q21",
      "q": "A power supply works when the board is pressed but fails when released. Several joints on a heavy transformer look cracked in a ring around the pins. What is the best action?",
      "options": [
        "Fit a larger fuse so that the supply copes with the extra load without tripping",
        "Reload the machine firmware",
        "Fit a bigger transformer to cope with the mains voltage",
        "Unplug and discharge it, then reheat and resolder the cracked joints"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m05-l4",
      "explain": "Ring cracks around the pins of heavy parts are typical dry joints, and they make the contact come and go. A larger fuse removes protection and cannot cure a poor joint, and firmware does not affect a power supply joint."
    },
    {
      "id": "m05-q22",
      "q": "Which is the correct safety practice when soldering?",
      "options": [
        "Use fume extraction, rest the hot iron in its stand and wash your hands afterwards",
        "Solder with the board powered so you can see if it works",
        "Flick the iron over the bench to clean it",
        "Hold your face close to the work to smell the flux"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m05-l4",
      "explain": "Fumes irritate the lungs, solder may contain lead and the iron causes burns, so extraction, a stand and clean hands matter. Soldering a powered board risks shock and damage to the board."
    },
    {
      "id": "m05-q23",
      "q": "Apart from appearance, what safety jobs can a machine cover do?",
      "options": [
        "It only reduces noise",
        "It guards against live, moving or hot parts and may carry an interlock",
        "It holds the spare toner, the service tools and the spare fuses for the engineer",
        "It is the only path for earth current"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m05-l5",
      "explain": "Covers and barriers often insulate, guard and operate interlocks. Earth current runs through the earth wiring and bonds, not through plastic."
    },
    {
      "id": "m05-q24",
      "q": "You want to glue a cracked cover. What should you find out first?",
      "options": [
        "Whether the glue is the same colour as the cover",
        "How many screws the cover uses",
        "The type of plastic, because some adhesives do not bond or can damage it",
        "Whether the machine is warm"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m05-l5",
      "explain": "Plastics differ, and polypropylene will not hold most glues while some solvents crack polycarbonate. Colour and screw count do not decide whether a bond will work."
    },
    {
      "id": "m05-q25",
      "q": "An insulating barrier over a high-voltage assembly has a crack. A bead of adhesive would hold it together. What should you do?",
      "options": [
        "Glue it, then cover the repair with insulating tape to be sure it holds up",
        "Paint over the crack with conductive paint to strengthen the barrier",
        "Leave it cracked and only mention it in the report",
        "Replace it with the correct part; a glued crack cannot be trusted"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m05-l5",
      "explain": "A barrier must keep its insulation and distances, and a glued crack can hide a gap or damaged material. Conductive paint would create a shock path, and leaving it in service is unsafe."
    },
    {
      "id": "m05-q26",
      "q": "A door has lost a warning label that marked a hot surface. What should you do?",
      "options": [
        "Fit the correct replacement label in the same place",
        "Ignore it, because labels are only decoration",
        "Write the warning on the door with a marker",
        "Remove the other labels so they all match"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m05-l5",
      "explain": "Warning labels tell the next person about a hazard they cannot see, so a missing one must be replaced with the correct one. A handwritten note is not a standard label and can be missed."
    },
    {
      "id": "m05-q27",
      "q": "What is a gasket or foam seal on a door normally for?",
      "options": [
        "It makes the door heavier so it closes firmly",
        "It holds the door open for cleaning",
        "It carries earth current from the door to the frame",
        "It closes gaps against light, dust or toner leakage"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m05-l5",
      "explain": "Seals close small gaps so dust, toner or light cannot pass. They are not electrical parts, so earth is carried by wiring or metal bonds instead."
    },
    {
      "id": "m05-q28",
      "q": "Why should you record the original position of an adjustment point before you change it?",
      "options": [
        "So the adjustment is quicker next time",
        "So you can return to the starting point if the change does not help",
        "Because adjustments are not allowed without permission",
        "So the customer can see how many turns you made"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m05-l6",
      "explain": "If the change makes things worse, you can go back to a known position instead of guessing. The record also helps you to change one thing at a time."
    },
    {
      "id": "m05-q29",
      "q": "Example values: the top margin target is 5.0 mm ± 1.0 mm. Your test print measures 6.4 mm. What is the correct conclusion?",
      "options": [
        "It is out of tolerance, because the upper limit is 6.0 mm",
        "It is within tolerance, because the upper limit is 7.0 mm",
        "It is within tolerance, because any value up to 6.5 mm is acceptable",
        "It is out of tolerance, so the machine must be replaced"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m05-l6",
      "explain": "The range is 4.0 mm to 6.0 mm, and 6.4 mm is 0.4 mm above the upper limit. A small error needs a small adjustment, not a new machine."
    },
    {
      "id": "m05-q30",
      "q": "After a repair, why do you also check the functions next to the part you fixed?",
      "options": [
        "Because a second fault always exists",
        "To use up the test paper",
        "Because taking the machine apart can disturb nearby connectors, sensors and covers",
        "Because customers prefer long tests"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m05-l6",
      "explain": "Dismantling and reassembly can leave a connector loose or a sensor out of place. A second fault is possible but not certain, so the check is about the disturbance you may have caused."
    },
    {
      "id": "m05-q31",
      "q": "After a repair on a mains-powered machine, the earth test fails. What should you do?",
      "options": [
        "Return it to service and mention the failed test to the customer at the next visit",
        "Fit a thicker fuse",
        "Skip the test in future",
        "Keep it out of service, fix the earth or insulation problem and repeat the test"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m05-l6",
      "explain": "A failed earth test means the protection may not work, so the machine is not safe to use. A thicker fuse would reduce protection further, and skipping tests hides faults."
    },
    {
      "id": "m05-q32",
      "q": "Which information is most useful to record after a repair?",
      "options": [
        "Only the customer name, address, telephone number, machine model and invoice number",
        "The fault, cause, parts fitted, adjustments, test results and counter reading",
        "Only the date",
        "Only the total cost"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m05-l6",
      "explain": "A full record lets another technician understand what happened and helps if the fault returns. A name, date or cost alone says nothing about the work."
    }
  ],
  "cards": [
    {
      "id": "m05-c01",
      "front": "What is an original (OEM) part?",
      "back": "A part made or approved by the machine maker. It matches the specification for the model.",
      "lesson": "m05-l1"
    },
    {
      "id": "m05-c02",
      "front": "What is a compatible part?",
      "back": "A part made by another company to fit the same place. Quality varies, so check size, rating and safety approval.",
      "lesson": "m05-l1"
    },
    {
      "id": "m05-c03",
      "front": "What is a maintenance kit?",
      "back": "A set of wear parts replaced together at a set page count. The interval comes from the service manual.",
      "lesson": "m05-l1"
    },
    {
      "id": "m05-c04",
      "front": "Which parts must be original or approved equivalents?",
      "back": "Safety-critical parts: fuses, thermal fuses, thermostats, high-voltage parts and insulating barriers.",
      "lesson": "m05-l1"
    },
    {
      "id": "m05-c05",
      "front": "What goes into a repair estimate?",
      "back": "Parts, labour, call-out or travel, and tax where it applies. State what is included.",
      "lesson": "m05-l1"
    },
    {
      "id": "m05-c06",
      "front": "What is a burr, and why remove it?",
      "back": "A sharp raised edge left after cutting or drilling. It cuts hands and wire insulation and stops parts fitting flat.",
      "lesson": "m05-l2"
    },
    {
      "id": "m05-c07",
      "front": "Tap drill rule for metric threads?",
      "back": "Tap drill = thread diameter − pitch. M5 × 0.8 mm needs a 4.2 mm drill.",
      "lesson": "m05-l2"
    },
    {
      "id": "m05-c08",
      "front": "What does tolerance mean? Give an example.",
      "back": "The allowed difference from the target size. 25.0 mm ± 0.2 mm is acceptable from 24.8 mm to 25.2 mm.",
      "lesson": "m05-l2"
    },
    {
      "id": "m05-c09",
      "front": "What is the purpose of centre punching?",
      "back": "It makes a small dent that stops the drill point wandering.",
      "lesson": "m05-l2"
    },
    {
      "id": "m05-c10",
      "front": "Drilling safety: three key rules?",
      "back": "Clamp the work, wear eye protection, and take the chuck key out. No loose gloves, sleeves or hair.",
      "lesson": "m05-l2"
    },
    {
      "id": "m05-c11",
      "front": "Machine screw or self-tapping screw: which makes its own thread?",
      "back": "The self-tapping screw. A machine screw needs a thread that already exists.",
      "lesson": "m05-l3"
    },
    {
      "id": "m05-c12",
      "front": "Why use a toothed washer under an earth connection?",
      "back": "Its teeth bite through paint or coating to give metal-to-metal contact.",
      "lesson": "m05-l3"
    },
    {
      "id": "m05-c13",
      "front": "Which thread-locking grade suits small screws you may remove later?",
      "back": "A removable, medium-strength grade, on metal threads only.",
      "lesson": "m05-l3"
    },
    {
      "id": "m05-c14",
      "front": "How do you fit an E-clip?",
      "back": "Slide it on sideways into the groove. Do not stretch it. Keep spares.",
      "lesson": "m05-l3"
    },
    {
      "id": "m05-c15",
      "front": "What is torque?",
      "back": "The turning force applied to a screw. Use the manual value, or tighten until snug and stop.",
      "lesson": "m05-l3"
    },
    {
      "id": "m05-c16",
      "front": "What is flux for?",
      "back": "It cleans oxide from the metal so solder can flow and bond.",
      "lesson": "m05-l4"
    },
    {
      "id": "m05-c17",
      "front": "Melting point of 63/37 tin-lead solder?",
      "back": "About 183 °C. Common lead-free alloys melt at about 217 °C or more.",
      "lesson": "m05-l4"
    },
    {
      "id": "m05-c18",
      "front": "What does a good solder joint look like?",
      "back": "Smooth, shiny and slightly concave, with solder wetting both pad and lead.",
      "lesson": "m05-l4"
    },
    {
      "id": "m05-c19",
      "front": "What does a cold joint look like, and what causes it?",
      "back": "Dull, grainy or lumpy. The joint was too cool or was moved while cooling.",
      "lesson": "m05-l4"
    },
    {
      "id": "m05-c20",
      "front": "What is a dry joint?",
      "back": "A joint with a gap or crack where solder has not stuck to one surface. It causes intermittent faults.",
      "lesson": "m05-l4"
    },
    {
      "id": "m05-c21",
      "front": "Desoldering pump or braid: how do they work?",
      "back": "The pump sucks up molten solder. The braid soaks it up by capillary action.",
      "lesson": "m05-l4"
    },
    {
      "id": "m05-c22",
      "front": "Why is ABS easier to glue than polypropylene?",
      "back": "ABS bonds with many adhesives. Polypropylene has a waxy surface that most glues do not hold.",
      "lesson": "m05-l5"
    },
    {
      "id": "m05-c23",
      "front": "Which cover damage means replace, not repair?",
      "back": "A cracked insulating barrier, interlock actuator tab or flame barrier.",
      "lesson": "m05-l5"
    },
    {
      "id": "m05-c24",
      "front": "What does a door gasket do?",
      "back": "It seals gaps against light, dust or toner leakage.",
      "lesson": "m05-l5"
    },
    {
      "id": "m05-c25",
      "front": "What is an adjustment point, and what must you do first?",
      "back": "A screw, cam or setting that changes a position or value. Record its original position first.",
      "lesson": "m05-l6"
    },
    {
      "id": "m05-c26",
      "front": "What do you check on a test print?",
      "back": "Margins, skew, density, streaks and registration against the manual targets.",
      "lesson": "m05-l6"
    },
    {
      "id": "m05-c27",
      "front": "What is in an electrical safety check before returning a machine?",
      "back": "Cord, plug and strain relief; covers, labels and earth connections; and earth and insulation tests where required.",
      "lesson": "m05-l6"
    },
    {
      "id": "m05-c28",
      "front": "What goes into the repair record?",
      "back": "Fault, cause, parts, adjustments, test results and counter reading.",
      "lesson": "m05-l6"
    }
  ]
});

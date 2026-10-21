OMM.registerModule({
  "id": "m02",
  "summary": "Choose and use hand tools, multimeters and other instruments, read technical documents, take and calculate measurements correctly, and find reliable information for a repair.",
  "outcomes": [
    "Select the correct hand tool, special tool and cleaning material for a given task.",
    "Use a digital multimeter to measure voltage, resistance, continuity, diodes and current, and avoid its common mistakes.",
    "Describe what an oscilloscope, clamp meter, logic probe, LCR meter and thermometer measure, and read period, frequency and peak voltage from a trace.",
    "Find the right information in a service manual, parts catalogue, wiring diagram, flow chart or service bulletin.",
    "Read a vernier calliper and a micrometer, convert metric prefixes, and check a value against its tolerance.",
    "Judge the quality of a source of information and keep clear records of where it came from."
  ],
  "cheatsheet": [
    "Voltage is measured across a part (parallel). Current is measured through it (series).",
    "Never measure resistance or continuity on a live circuit. Unplug first.",
    "Current leads in the current socket and the dial on a current range? Never touch a voltage source.",
    "Use a meter with a suitable CAT rating and correct fuses. Higher CAT number = more surge protection.",
    "Period T = 1 ÷ f. A cycle of 20 ms is 50 Hz. Peak voltage = half of the peak-to-peak value.",
    "Vernier resolution is often 0.02 mm. Micrometer resolution is usually 0.01 mm.",
    "Prefixes: p 10⁻¹², n 10⁻⁹, µ 10⁻⁶, m 10⁻³, k 10³, M 10⁶, G 10⁹.",
    "Tolerance range = nominal ± (nominal × percentage ÷ 100). 1 kΩ ±5% is 950 Ω to 1,050 Ω.",
    "Always use the manual for the exact model and revision. Fault codes differ between machines."
  ],
  "lessons": [
    {
      "id": "m02-l1",
      "title": "Hand tools, special tools and cleaning materials",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the hand tools, special tools and cleaning materials used on office machines, and how to choose the right one so that you do not damage screws, plastic parts or yourself."
        },
        {
          "t": "h",
          "text": "Screwdrivers and screw heads"
        },
        {
          "t": "p",
          "text": "Most damage to office machines starts with the wrong driver. A driver that does not fit the screw head slips, rounds the head and can scratch the board or frame beside it. Always match both the type and the size of the tip to the screw."
        },
        {
          "t": "diagram",
          "name": "screw-heads"
        },
        {
          "t": "table",
          "head": [
            "Type",
            "Tip shape",
            "Notes"
          ],
          "rows": [
            [
              "Slotted",
              "One straight blade",
              "Easy to slip sideways. Use a blade as wide as the slot."
            ],
            [
              "Phillips",
              "Cross with tapered arms",
              "Designed to push the driver out if you press too hard. This is called cam-out."
            ],
            [
              "Pozidriv",
              "Cross with extra small ribs between the arms",
              "Grips better than Phillips. A Phillips driver fits it loosely and damages it."
            ],
            [
              "Torx",
              "Six-point star",
              "Resists slipping. Common on newer machines. Sizes are numbered."
            ],
            [
              "Hex (Allen)",
              "Six-sided key",
              "Used for grub screws and some frames. Use a metric or imperial size that fits exactly."
            ]
          ],
          "caption": "Common screw head types"
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Push the driver firmly into the screw before you turn it. If the screw is stiff, do not force it. Check that you have the right size, then try again."
        },
        {
          "t": "h",
          "text": "Pliers, tweezers and special tools"
        },
        {
          "t": "ul",
          "items": [
            "**Long-nose pliers** reach into tight places and hold small parts. They are not for turning nuts.",
            "**Side cutters** cut wire and cable ties. Do not use them on hard steel.",
            "**Tweezers** pick up small screws, springs and paper scraps. Use plastic or anti-static tweezers near electronics.",
            "**Snap-ring pliers** (circlip pliers) open or close a ring that sits in a groove on a shaft or in a bore. Use the type that matches the ring: internal or external.",
            "**Spring hook** (spring puller) stretches and places small springs without letting them fly off.",
            "**Feeler gauge** is a set of thin steel blades of known thickness. It measures a small gap, for example between two rollers or a blade and a drum, when the manual gives a gap value.",
            "**Brushes** with soft bristles remove dust from gears and sensors."
          ]
        },
        {
          "t": "h",
          "text": "Cleaning tools and fluids"
        },
        {
          "t": "p",
          "text": "Each part needs its own cleaning method. The service manual names the fluid for each part. Follow it, because some fluids harden or swell rubber and some crack plastic."
        },
        {
          "t": "ul",
          "items": [
            "A **lint-free cloth** removes dirt without leaving fibres on rollers and glass.",
            "A **toner vacuum** with a fine filter removes loose toner and paper dust. Never blow toner out.",
            "**Isopropyl alcohol** is often used on contacts, glass and some rollers. Check the manual first, because it is not right for every rubber.",
            "**Contact cleaner** is made for electrical contacts. Use it only on unplugged equipment and let it dry.",
            "**Mild soapy water** on a damp cloth cleans outer covers. Do not let liquid run into the machine."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Unplug the machine before you use any cleaning fluid inside it. Many fluids are flammable, and a spark can start a fire. Keep fluids in labelled containers and work in a ventilated place."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "The right tool, at the right size, with the fluid named in the manual. Never use a tool as a substitute for another."
        }
      ]
    },
    {
      "id": "m02-l2",
      "title": "Using a digital multimeter",
      "minutes": 12,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains how to use a digital multimeter to measure voltage, resistance, continuity, diodes and current, how its safety rating and fuses protect you, and the mistakes that cause wrong readings or damage."
        },
        {
          "t": "h",
          "text": "What the meter measures"
        },
        {
          "t": "p",
          "text": "A **multimeter** combines several instruments. The dial selects the function. The black lead goes in the common socket (marked COM). The red lead goes in the socket for the function you choose."
        },
        {
          "t": "diagram",
          "name": "multimeter-panel"
        },
        {
          "t": "table",
          "head": [
            "Function",
            "Connect",
            "Circuit state"
          ],
          "rows": [
            [
              "DC voltage (V with a straight line)",
              "Across the part, in parallel",
              "Powered"
            ],
            [
              "AC voltage (V with a wavy line)",
              "Across the part, in parallel",
              "Powered"
            ],
            [
              "Resistance (Ω)",
              "Across the part, ideally with one end disconnected",
              "Unplugged and discharged"
            ],
            [
              "Continuity (beeper)",
              "Across the path being tested",
              "Unplugged and discharged"
            ],
            [
              "Diode test",
              "Across the diode, both ways",
              "Unplugged, diode out of circuit if possible"
            ],
            [
              "Current (A or mA)",
              "In series, so the current flows through the meter",
              "Powered, with a break in the circuit"
            ]
          ],
          "caption": "Multimeter functions"
        },
        {
          "t": "p",
          "text": "For DC voltage, red goes to the more positive point. A minus sign on the display means the leads are the other way round. It does no harm."
        },
        {
          "t": "p",
          "text": "A **continuity** test checks for a complete path. The meter beeps when the resistance is low. The beep limit differs between meters, so check what yours does. A **diode test** shows the forward voltage drop of a silicon diode, usually about 0.5 V to 0.7 V in one direction, and OL (over limit) in the other."
        },
        {
          "t": "h",
          "text": "Safety rating and fuses"
        },
        {
          "t": "p",
          "text": "The **measurement category** (CAT) tells you where in an electrical installation the meter may be used. CAT II is for equipment that plugs into a socket. CAT III is for fixed installations such as distribution boards. CAT IV is for the point where the supply enters a building. A higher number means more protection against short voltage surges. The voltage rating is a separate figure. Both must suit the job."
        },
        {
          "t": "p",
          "text": "The current inputs have **fuses** inside the meter. If a fuse blows, replace it only with the same rating and type that the maker specifies. A wrong fuse can let a fault turn the meter into a hazard."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Use only a meter with a suitable CAT rating, undamaged leads and shrouded probe tips. Never measure mains current by putting the meter in series. Use a clamp meter instead, as the next lesson shows."
        },
        {
          "t": "h",
          "text": "Common mistakes"
        },
        {
          "t": "ul",
          "items": [
            "**Resistance on a live circuit.** The meter sends its own small test current. Outside voltage gives false readings and can damage the meter.",
            "**Wrong range.** On a manual-range meter a value above the range shows OL. Start at the highest range and work down.",
            "**Current range left selected.** The meter has almost no resistance on its current range. Connecting it across a voltage source makes a short circuit that blows a fuse or worse.",
            "**Leads in the wrong sockets.** Check the red lead position every time you change function.",
            "**Reading in the circuit.** Other parts in parallel make a resistor read lower than its true value. Remove at least one end of the part.",
            "**Touching both probes with your fingers** while measuring resistance. Your body adds its own resistance in parallel."
          ]
        },
        {
          "t": "example",
          "title": "Checking a 24 V supply and a fuse",
          "steps": [
            "Set the dial to DC voltage. Put the red lead in the voltage socket and the black lead in COM.",
            "Touch the probes to the supply output. The display shows 24.3 V. This is normal for a nominal 24 V supply.",
            "Switch off and unplug the machine. Wait for the supply to discharge.",
            "Remove the fuse from its holder. Set the meter to continuity and touch the probes to each end of the fuse.",
            "The meter beeps. The element is intact. If it showed OL, the element is broken and must be replaced with a fuse of the same type and rating, after you find why it blew."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Before you rely on a reading, ask whether it makes sense. A 24 V supply that reads 2.4 V or 240 V points to a range or connection error before it points to a fault."
        }
      ]
    },
    {
      "id": "m02-l3",
      "title": "Other instruments: oscilloscope, probes and meters",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson introduces five more instruments, the oscilloscope, logic probe, clamp meter, LCR meter and thermometer, and shows how to read a basic oscilloscope trace."
        },
        {
          "t": "h",
          "text": "Oscilloscope basics"
        },
        {
          "t": "p",
          "text": "An **oscilloscope** draws a graph of voltage against time on a screen. A multimeter gives one number. An oscilloscope shows the shape of a signal, so you can see noise, missing pulses and distorted waves."
        },
        {
          "t": "diagram",
          "name": "scope-screen"
        },
        {
          "t": "p",
          "text": "The screen has a grid of squares called **divisions**. Two main controls scale the picture."
        },
        {
          "t": "ul",
          "items": [
            "**Volts per division** sets how many volts each vertical square stands for.",
            "**Time per division** sets how much time each horizontal square stands for."
          ]
        },
        {
          "t": "p",
          "text": "To read the signal, count the squares and multiply. The **period** (T) is the time of one full cycle. **Frequency** (f) is how many cycles occur each second, in hertz (Hz)."
        },
        {
          "t": "formula",
          "text": "f = 1 ÷ T      T = 1 ÷ f",
          "caption": "Frequency and period"
        },
        {
          "t": "example",
          "title": "Reading a trace",
          "steps": [
            "The time control is set to 2 ms per division. One full cycle of the wave covers 5 divisions across the screen.",
            "Period = 5 × 2 ms = 10 ms = 0.010 s.",
            "Frequency = 1 ÷ 0.010 s = 100 Hz.",
            "The volts control is set to 5 V per division. The wave runs from 1 division below the centre line to 1 division above it, so peak-to-peak is 2 divisions.",
            "Peak-to-peak = 2 × 5 V = 10 V. The peak voltage is half of that, so 5 V."
          ]
        },
        {
          "t": "p",
          "text": "A sine wave has an **RMS** value, the heating-equivalent value that a meter shows, of about 0.707 × the peak voltage. A wave with a peak of 5 V has an RMS value of about 3.5 V. Mains of 230 V RMS has a peak near 325 V."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Most scope probes are earthed through the instrument. Do not connect a scope probe earth clip to a live part of a mains-connected circuit, because it can short the circuit through the earth wire. Ask whether the circuit is isolated from the mains first, and use the manual's method for primary-side checks."
        },
        {
          "t": "h",
          "text": "Logic probe, clamp meter, LCR meter and thermometer"
        },
        {
          "t": "ul",
          "items": [
            "A **logic probe** shows whether a digital point is high, low or pulsing. It takes power from the circuit under test. It is quick, but it only tells you the logic level.",
            "A **clamp meter** measures current through one conductor by sensing its magnetic field. You close the jaws round the live or neutral wire only, never round the whole cord. In a whole cord the two currents cancel, so the reading is near zero. It lets you measure current without cutting the circuit.",
            "An **LCR meter** measures inductance (L), capacitance (C) and resistance (R) of a part. Use it on parts that are out of circuit, and discharge capacitors first.",
            "A **thermometer** checks temperature. A contact type touches the part. An infrared type reads from a distance, but shiny metal can give a false low reading."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Choose the instrument that gives the answer with the least risk. If a clamp meter can show current without opening the circuit, use it instead of a meter in series."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Scope: multiply squares by the control setting. Frequency is 1 divided by period."
        }
      ]
    },
    {
      "id": "m02-l4",
      "title": "Reading technical documentation",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains the main types of technical document used in this trade, what each one tells you, and how to find the answer you need quickly and correctly."
        },
        {
          "t": "h",
          "text": "The main documents"
        },
        {
          "t": "table",
          "head": [
            "Document",
            "What it answers"
          ],
          "rows": [
            [
              "Service manual",
              "How the machine works, how to adjust, remove, test and repair it, and how to run its service mode"
            ],
            [
              "Parts catalogue",
              "Which part has which number, shown on exploded views with numbered items"
            ],
            [
              "Wiring diagram",
              "Which connectors and wires join which units, and the wire colours"
            ],
            [
              "Block diagram",
              "How the main sections connect and what signals pass between them"
            ],
            [
              "Flow chart",
              "A step-by-step test path for one symptom, with yes and no decisions"
            ],
            [
              "Service bulletin",
              "A notice about a known problem, a change of part or a new procedure"
            ]
          ],
          "caption": "Types of technical document"
        },
        {
          "t": "p",
          "text": "A **service manual** normally has chapters for safety, specifications, installation, theory of operation, removal and replacement, adjustments, troubleshooting and maintenance. Use the contents page and the index. Do not read the whole book to find one answer."
        },
        {
          "t": "p",
          "text": "A **parts catalogue** has an **exploded view**, a drawing that shows the parts of an assembly pulled apart along their fitting lines. Each part carries an item number. The parts list beside the drawing links that number to a part number and a name."
        },
        {
          "t": "h",
          "text": "Diagrams and symbols"
        },
        {
          "t": "p",
          "text": "A **schematic diagram** uses standard symbols to show how electronic parts connect. Learn the common ones before you read a circuit."
        },
        {
          "t": "table",
          "head": [
            "Part",
            "Typical symbol"
          ],
          "rows": [
            [
              "Resistor",
              "A zigzag line or a small rectangle"
            ],
            [
              "Capacitor",
              "Two short parallel lines; an electrolytic type has a plus mark"
            ],
            [
              "Diode",
              "A triangle pointing at a bar; current flows with the triangle"
            ],
            [
              "Switch",
              "A line with a gap and a lever"
            ],
            [
              "Fuse",
              "A small rectangle with a line through it, or a wavy line"
            ],
            [
              "Earth or ground",
              "Three lines of decreasing length, or a downward arrow"
            ]
          ],
          "caption": "Common schematic symbols. Check the key in each document, because styles differ."
        },
        {
          "t": "p",
          "text": "A wiring diagram tells you where to put the probe. A block diagram tells you where to start. Use the block diagram to narrow down the unit, then use the wiring diagram to find the connector and pin."
        },
        {
          "t": "h",
          "text": "Fault codes, service modes and revisions"
        },
        {
          "t": "p",
          "text": "Many machines show a **fault code** (error code) when a sensor or circuit reports a problem. The same number means different things on different machines. Never trust a code table from another model, even from the same maker. Look up the code in the manual for your exact machine."
        },
        {
          "t": "p",
          "text": "A **service mode** is a hidden set of menus used by technicians to run tests, read counters and set adjustments. The manual explains how to enter it. Write down any setting before you change it so that you can restore it."
        },
        {
          "t": "p",
          "text": "A **revision level** shows the version of a document or of a part. Makers change designs during production. Check the revision number of the machine, board or manual before you order a part or apply a procedure."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "When you open a manual, check the cover or first page for the model name, document date and revision. A manual for a similar model is not the same manual."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Check the manufacturer's service manual for the exact model and revision. Read the bulletin list before you start."
        }
      ]
    },
    {
      "id": "m02-l5",
      "title": "Measuring and calculating",
      "minutes": 12,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers reading a vernier calliper and a micrometer, converting metric prefixes, checking tolerance and using Ohm's law with the readings you take."
        },
        {
          "t": "h",
          "text": "Vernier calliper and micrometer"
        },
        {
          "t": "p",
          "text": "A **vernier calliper** measures outside size, inside size and depth. You read the main scale to the last whole millimetre before the zero of the sliding scale. Then you look along the sliding scale for the one line that lines up exactly with a line on the main scale. That line gives the extra fraction."
        },
        {
          "t": "p",
          "text": "The smallest step it can read is its **resolution**. Many metric callipers read to 0.02 mm. You multiply the line number by the resolution."
        },
        {
          "t": "example",
          "title": "Reading a vernier calliper with a resolution of 0.02 mm",
          "steps": [
            "The zero of the sliding scale lies just past 23 mm on the main scale. The main reading is 23 mm.",
            "The 14th line on the sliding scale lines up with a main scale line.",
            "Fraction = 14 × 0.02 mm = 0.28 mm.",
            "Total = 23 mm + 0.28 mm = 23.28 mm."
          ]
        },
        {
          "t": "p",
          "text": "A metric **micrometer** has a sleeve scale with millimetre marks on one side of the line and half-millimetre marks on the other. The thimble has 50 divisions, and each division is 0.01 mm. One full turn of the thimble moves the spindle 0.5 mm."
        },
        {
          "t": "example",
          "title": "Reading a micrometer",
          "steps": [
            "The sleeve shows 5 mm, and the half-millimetre mark after it is visible. Sleeve reading = 5.5 mm.",
            "The thimble line that lines up with the sleeve line is 28.",
            "Thimble reading = 28 × 0.01 mm = 0.28 mm.",
            "Total = 5.5 mm + 0.28 mm = 5.78 mm."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Close the jaws on nothing and check for a zero error before you measure. Turn a micrometer only by the ratchet so you apply the same light force every time."
        },
        {
          "t": "h",
          "text": "Metric prefixes"
        },
        {
          "t": "table",
          "head": [
            "Prefix",
            "Symbol",
            "Multiply by"
          ],
          "rows": [
            [
              "pico",
              "p",
              "10⁻¹² (one millionth of a millionth)"
            ],
            [
              "nano",
              "n",
              "10⁻⁹ (one thousandth of a millionth)"
            ],
            [
              "micro",
              "µ",
              "10⁻⁶ (one millionth)"
            ],
            [
              "milli",
              "m",
              "10⁻³ (one thousandth)"
            ],
            [
              "kilo",
              "k",
              "10³ (one thousand)"
            ],
            [
              "mega",
              "M",
              "10⁶ (one million)"
            ],
            [
              "giga",
              "G",
              "10⁹ (one thousand million)"
            ]
          ],
          "caption": "Metric prefixes used with electrical units"
        },
        {
          "t": "diagram",
          "name": "metric-prefixes"
        },
        {
          "t": "p",
          "text": "Examples: 4.7 kΩ = 4,700 Ω. 470 nF = 0.47 µF. 350 mA = 0.35 A. 15 mV = 0.015 V. Take care with m (milli) and M (mega). A capital M is a million. A small m is a thousandth."
        },
        {
          "t": "h",
          "text": "Tolerance and Ohm's law"
        },
        {
          "t": "p",
          "text": "**Tolerance** is the allowed difference between the stated value and the true value, usually given as a percentage. A part is good if its reading falls inside the tolerance range."
        },
        {
          "t": "formula",
          "text": "Range = nominal ± (nominal × tolerance ÷ 100)",
          "caption": "Tolerance range"
        },
        {
          "t": "example",
          "title": "Checking a resistor",
          "steps": [
            "A resistor is marked 4.7 kΩ ±5%. Allowed difference = 4.7 kΩ × 5 ÷ 100 = 0.235 kΩ.",
            "Range = 4.7 kΩ − 0.235 kΩ = 4.465 kΩ up to 4.7 kΩ + 0.235 kΩ = 4.935 kΩ.",
            "The resistor measures 4.52 kΩ out of circuit. This is inside the range, so the resistor is within tolerance."
          ]
        },
        {
          "t": "p",
          "text": "Ohm's law links the readings you take: voltage V in volts, current I in amperes and resistance R in ohms. Convert units first. Power P in watts is V × I."
        },
        {
          "t": "example",
          "title": "Resistance and power from two readings",
          "steps": [
            "A part has 12 V across it. A meter in series reads 40 mA.",
            "Convert: 40 mA = 0.040 A.",
            "R = V ÷ I = 12 V ÷ 0.040 A = 300 Ω.",
            "P = V × I = 12 V × 0.040 A = 0.48 W. A 0.25 W resistor would overheat here. Choose a rating well above the power."
          ]
        },
        {
          "t": "p",
          "text": "Round your answer to the number of digits your instrument can truly show. A vernier calliper reading of 23.28 mm should not be written as 23.2800 mm. Extra digits suggest an accuracy that you do not have."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Convert units before you calculate. Mistakes in prefixes are the most common error."
        }
      ]
    },
    {
      "id": "m02-l6",
      "title": "Finding and checking information",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains where to find reliable information for a repair, how to judge a source, how to record where information came from, and the rules around copying manuals."
        },
        {
          "t": "h",
          "text": "Where to look"
        },
        {
          "t": "ul",
          "items": [
            "**Manufacturer portals**: websites where authorised service providers sign in to download manuals, bulletins, firmware and parts data. Your employer usually holds the account and its access rights.",
            "**Distributor and supplier catalogues**: show stock, prices and part numbers.",
            "**Your workshop library**: printed and saved manuals, with a note of which revision each one is.",
            "**Colleagues and technical support lines**: experienced people often know a known fault that the manual does not mention."
          ]
        },
        {
          "t": "p",
          "text": "A **parts cross-reference** lists parts from different makers or models that are the same or interchangeable. It saves time. It can also be wrong. Before you order for a customer, confirm in the parts catalogue that the part is listed for the exact model and revision. When the part arrives, compare its size, connector and markings with the old one before you fit it."
        },
        {
          "t": "h",
          "text": "Judging a source"
        },
        {
          "t": "p",
          "text": "Not all information is equally good. A wrong torque value or a wrong wire colour can damage a machine or create a hazard."
        },
        {
          "t": "ul",
          "items": [
            "Is it from the manufacturer or an approved supplier?",
            "Does it name your exact model and revision?",
            "Is it dated, and is it still current?",
            "Does the author give a reason for the advice, not only an opinion?",
            "Does a second reliable source agree?"
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never take safety-related values, such as fuse ratings, voltages or discharge procedures, from an unofficial website, a forum post or memory. Confirm them in the manufacturer's documents."
        },
        {
          "t": "h",
          "text": "Copyright and licence"
        },
        {
          "t": "p",
          "text": "Manuals and software are protected by **copyright**, which means the owner decides who may copy them. A **licence** is the permission the owner gives, with its conditions. Many service manuals are supplied only to authorised service providers. Do not pass them to customers or other companies. Do not download copies from sites that have no right to share them. They may also be altered or out of date."
        },
        {
          "t": "p",
          "text": "You may write your own notes in your own words, and you may follow a procedure for a repair. Check your licence before you copy pages."
        },
        {
          "t": "h",
          "text": "Keep your own notes"
        },
        {
          "t": "p",
          "text": "A notebook or file of your own work becomes a valuable record. For each job, note the model, serial number, fault, readings, settings before you changed them, parts fitted and the source of any figure. Write the document name, revision or date and page. Photograph connector positions before you unplug them."
        },
        {
          "t": "ul",
          "items": [
            "Record readings with units and the range used.",
            "Write the original settings before you change any.",
            "Do not store customer documents, passwords or personal data in your notes."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A note without a source is a rumour. Write where each value came from, so you can check it again and see if it is current."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Trust official documents for the exact model, and record where every figure came from."
        }
      ]
    }
  ],
  "practical": {
    "title": "Measure and record resistors, a fuse, a switch and a dimension",
    "objective": "Use a multimeter and a calliper to measure real components, record the readings in a table, and decide whether each is within its marked value or tolerance.",
    "time": "60 minutes",
    "tools": [
      "Digital multimeter with undamaged leads and a fresh battery",
      "Three loose resistors of different values, with a resistor colour-code chart",
      "One loose cartridge or glass fuse with its rating marked",
      "One loose switch or a small microswitch, not connected to any supply",
      "Vernier calliper or micrometer",
      "One loose small part to measure, such as a roller shaft, a screw or a drill bit",
      "One AA or AAA battery cell",
      "Notebook, pen and a calculator"
    ],
    "safety": [
      "Use only loose components and a single small battery. Do not connect any part of this task to the mains supply.",
      "Do not measure parts that are fitted in a plugged-in machine. If you use a machine, it must be unplugged and discharged first.",
      "Keep the meter leads out of the current socket. This task needs only the voltage and resistance sockets.",
      "Handle the calliper and any sharp edges carefully. Do not use the jaws on a hot or moving part.",
      "Hold resistors by their bodies, or place them on the bench. Touching both probe tips and the resistor leads with your fingers changes the reading.",
      "If the meter shows damage, such as a cracked case or bare lead wire, stop and ask for another meter."
    ],
    "steps": [
      "Draw a table in your notebook with these columns: item, marked value, tolerance, tolerance range, measured value, within tolerance (yes or no).",
      "Plug the black lead into COM and the red lead into the voltage and resistance socket. Check that no lead is in the current socket.",
      "Set the meter to DC voltage and touch the probes to the battery, red to the plus end. Write the reading, for example about 1.5 V for a fresh cell.",
      "Set the meter to resistance. Touch the two probes together and note the lead reading. Subtract it from any low-value readings.",
      "Read the colour bands of the first resistor and write its marked value and tolerance. Work out its tolerance range using the formula in the lessons.",
      "Measure the resistor with the probes on its two leads. Write the reading with its unit and decide if it is inside the range.",
      "Repeat steps 5 and 6 for the other two resistors.",
      "Set the meter to continuity. Touch the probes across the fuse. Record whether it beeps. A good fuse beeps.",
      "Test the switch in the on position and in the off position. Write which position gives a beep and which gives OL.",
      "Close the calliper jaws and note any zero error. Then measure your chosen part three times and write each reading in millimetres.",
      "Add the three readings, divide by three and write the average. Round it to the resolution of your instrument.",
      "Compare your average with the size printed on the part, or with a drawing from your instructor, and write the difference in millimetres.",
      "Convert each resistor reading to ohms and to kilohms in your table, to practise prefixes.",
      "Switch off the meter, remove the leads and tidy your bench. Write two sentences about the biggest source of error in your work."
    ],
    "checks": [
      "I can read a resistor colour code and state its tolerance range in ohms.",
      "I can choose the right meter socket and dial position for voltage, resistance and continuity.",
      "I can tell a good fuse or switch from a faulty one with a continuity test.",
      "I can read a calliper or micrometer and write the result with its unit.",
      "I can convert between ohms, kilohms and megohms without error."
    ]
  },
  "quiz": [
    {
      "id": "m02-q01",
      "q": "Which screwdriver tip has a six-pointed star shape?",
      "options": [
        "Phillips",
        "Torx",
        "Pozidriv",
        "Hex (Allen)"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m02-l1",
      "explain": "A Torx tip is a six-point star. A hex key is a plain six-sided shape, and Phillips and Pozidriv are both cross-shaped tips."
    },
    {
      "id": "m02-q02",
      "q": "A screw head has a cross with four small extra ribs between the arms. Which driver fits best?",
      "options": [
        "A Phillips driver, because the extra ribs are only decoration",
        "A slotted driver, because one flat blade fits across any type of head",
        "A Torx driver, because its star tip grips all cross heads",
        "A Pozidriv driver, because its tip fills the cross and the ribs"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m02-l1",
      "explain": "The ribs mark a Pozidriv head, and only a Pozidriv tip engages all of them. A Phillips driver can seem to fit, but it grips loosely and tends to round the head."
    },
    {
      "id": "m02-q03",
      "q": "What does a feeler gauge measure?",
      "options": [
        "The width of a small gap, using blades of known thickness",
        "The contact resistance of a switch when it is fully closed",
        "The surface temperature of a roller during a copy run",
        "The tension in a return spring when it is fully stretched"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m02-l1",
      "explain": "A feeler gauge is a set of thin steel blades marked with their thickness. You slide blades into a gap until one fits snugly. It has no way to measure electrical or thermal values."
    },
    {
      "id": "m02-q04",
      "q": "A steel ring with a small hole at each end sits in a groove on a roller shaft. Which tool should you use to remove it?",
      "options": [
        "Side cutters, to cut the ring and then throw it away",
        "A large slotted screwdriver, to lever it off the shaft",
        "Snap-ring pliers of the matching type, to open the ring",
        "Long-nose pliers, to pull the ring straight off"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m02-l1",
      "explain": "Snap-ring pliers fit into the holes and open the ring evenly. Levering can bend the ring or launch it, and a bent or cut ring cannot hold the part in place again."
    },
    {
      "id": "m02-q05",
      "q": "A rubber paper-feed roller is glazed with paper dust and slips. After switching off and unplugging, what is the correct way to clean it?",
      "options": [
        "Spray a strong thinner onto the roller and leave it to soak for some minutes",
        "Wipe it with a lint-free cloth dampened with the fluid the manual names",
        "Rub it with fine sandpaper until the rubber surface is smooth again",
        "Hold a damp cloth against it while the machine feeds paper through"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m02-l1",
      "explain": "The manual names the fluid that is safe for that rubber. Strong solvents can harden or swell it, and cleaning a moving roller on a powered machine traps fingers."
    },
    {
      "id": "m02-q06",
      "q": "How do you connect a multimeter to measure the DC voltage of a battery?",
      "options": [
        "Across the battery terminals, in parallel, with the dial on DC volts",
        "In series between the battery and its load, with the dial on volts",
        "Across the battery terminals with the dial on current",
        "Only after you disconnect the battery and set the dial to resistance"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m02-l2",
      "explain": "Voltage is measured across a part. Series connection is for current, and a current range across a battery is a short circuit, which is the tempting wrong choice."
    },
    {
      "id": "m02-q07",
      "q": "Why must you never measure resistance on a circuit that is switched on?",
      "options": [
        "The meter battery would run flat after only a few measurements",
        "Resistance values change with the mains frequency while the machine is running",
        "The reading would always be zero, whatever component is being tested",
        "The meter sends its own test current, so live voltage gives false readings"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m02-l2",
      "explain": "In resistance mode the meter drives a small current of its own through the part. A live circuit adds another voltage, so the result is meaningless and the meter can be harmed."
    },
    {
      "id": "m02-q08",
      "q": "A technician puts the red lead in the current socket, turns the dial to a current range and touches both probes across a 12 V supply. What is the most likely result?",
      "options": [
        "The meter shows the motor current correctly",
        "The meter shows 12 V",
        "A large current flows through the meter and blows its fuse or damages it",
        "The meter shows OL and nothing else happens"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m02-l2",
      "explain": "A meter on a current range has almost no resistance, so across a supply it makes a short circuit. A voltage reading needs the voltage socket and a volts range."
    },
    {
      "id": "m02-q09",
      "q": "You measured a current earlier. You now want to read a 24 V supply. What must you check before touching the probes to the supply?",
      "options": [
        "That the lowest current range is selected",
        "That the red lead is back in the voltage socket and the dial is on a volts range",
        "That both leads are the same colour",
        "That the display shows zero"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m02-l2",
      "explain": "A lead left in the current socket makes the meter a near short circuit across the supply. A zero on the display says nothing about where the leads are plugged in."
    },
    {
      "id": "m02-q10",
      "q": "What does the CAT rating on a multimeter tell you?",
      "options": [
        "How much voltage surge from the supply the meter can safely withstand",
        "How accurately the meter reads small voltages on its lowest range setting",
        "How many measuring ranges the meter has on its selector dial",
        "How long the battery will last when the meter is used every day"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m02-l2",
      "explain": "The category links the meter to a place in the installation and to its surge protection. Accuracy is a different specification, and a higher number is not about accuracy."
    },
    {
      "id": "m02-q11",
      "q": "A silicon rectifier diode is out of circuit. In diode test the meter reads 0.62 V one way and OL when the probes are swapped. What does this show?",
      "options": [
        "The diode is shorted, because it shows a voltage drop in one direction",
        "The diode is open, because it shows OL when the probes are swapped",
        "The diode is good, because it conducts one way and blocks the other",
        "Nothing can be known until the diode is fitted and powered in the circuit"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m02-l2",
      "explain": "A forward drop of about 0.5 V to 0.7 V and OL in reverse is the expected result for silicon. A shorted diode would read near zero both ways, and an open one OL both ways."
    },
    {
      "id": "m02-q12",
      "q": "You remove a fuse from a machine and test it with the meter on continuity. It shows OL. What does this tell you and what is the next step?",
      "options": [
        "The fuse is good, so the fault must be in the meter or in its leads",
        "The fuse is good, but the meter is on the wrong range for a continuity check",
        "The fuse has low resistance, so it can be fitted back after cleaning it",
        "The element is broken, so find why it blew and fit the same rating"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m02-l2",
      "explain": "A good fuse beeps. OL means an open element. A fuse blows for a reason, so you look for the overload or short before you fit the same rating, never a larger one."
    },
    {
      "id": "m02-q13",
      "q": "On an oscilloscope, what does the volts per division control set?",
      "options": [
        "How many cycles are shown on the screen",
        "How many volts each vertical square stands for",
        "How much time each horizontal square stands for",
        "How bright the trace appears"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m02-l3",
      "explain": "Volts per division scales the vertical axis. The time per division control scales the horizontal axis, which is the one people often mix it up with."
    },
    {
      "id": "m02-q14",
      "q": "On an oscilloscope set to 4 ms per division, one full cycle of a wave covers 5 divisions. What is the frequency?",
      "options": [
        "50 Hz",
        "20 Hz",
        "200 Hz",
        "250 Hz"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m02-l3",
      "explain": "The period is 5 × 4 ms = 20 ms = 0.020 s, so f = 1 ÷ 0.020 = 50 Hz. The number 20 is the period in milliseconds, not the frequency."
    },
    {
      "id": "m02-q15",
      "q": "A sine wave on a scope set to 2 V per division spans 6 divisions from its lowest point to its highest. What is its peak voltage?",
      "options": [
        "12 V",
        "24 V",
        "6 V",
        "8.5 V"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m02-l3",
      "explain": "Peak-to-peak = 6 × 2 V = 12 V, and the peak is half of that, 6 V. The value of 12 V is the peak-to-peak figure, not the peak."
    },
    {
      "id": "m02-q16",
      "q": "Why is a clamp meter often a better choice than a multimeter in series for measuring the current of a mains-powered machine?",
      "options": [
        "It measures resistance at the same time, so the machine can stay switched on",
        "It lets you clamp round the whole cord, so that both wires are measured together",
        "It never needs a battery, so it is always ready for a quick check on site",
        "It senses the magnetic field round one conductor, so no circuit break is needed"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m02-l3",
      "explain": "A clamp meter reads current without opening the circuit. Round a whole cord it would show about zero, because the currents in the two wires cancel, so you clamp only one conductor."
    },
    {
      "id": "m02-q17",
      "q": "A capacitor is out of circuit and has been discharged. It is marked 4.7 µF. Which instrument measures its actual capacitance?",
      "options": [
        "An LCR meter, or a multimeter with a capacitance range",
        "A logic probe",
        "A clamp meter on its current range",
        "A feeler gauge"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m02-l3",
      "explain": "An LCR meter is made to measure capacitance, inductance and resistance. A logic probe only shows a logic level, and a clamp meter measures current."
    },
    {
      "id": "m02-q18",
      "q": "What does an exploded view in a parts catalogue show?",
      "options": [
        "The wire colours between the units",
        "An assembly drawn in separate parts, each with an item number linked to a parts list",
        "The fault codes for the machine",
        "The test steps for one symptom"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m02-l4",
      "explain": "An exploded view pulls an assembly apart on paper so that each part can be identified and ordered. Wire colours belong to the wiring diagram."
    },
    {
      "id": "m02-q19",
      "q": "Why must you check the revision level before you order a replacement part for a customer's machine?",
      "options": [
        "The revision shows what the part costs",
        "A revision shows how old the customer is",
        "Revisions never change the parts",
        "Makers change designs, and a part for another revision may not fit or work"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m02-l4",
      "explain": "Parts can change during production. A catalogue entry for a different revision may have another size, connector or function, so the wrong part is ordered."
    },
    {
      "id": "m02-q20",
      "q": "A machine shows a fault code. You only have a code table for an older model from the same maker. What is the correct action?",
      "options": [
        "Use the older table, because codes mean the same on all machines",
        "Use the older table, because models from one maker always match",
        "Find the code table for that exact model and revision",
        "Reset the machine and ignore the code"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m02-l4",
      "explain": "The same number can mean different faults on different models, even from one maker. Acting on the wrong meaning can make you replace good parts."
    },
    {
      "id": "m02-q21",
      "q": "What is the main difference between a block diagram and a wiring diagram?",
      "options": [
        "A block diagram shows sections and signal flow, a wiring diagram shows connectors and wires",
        "A block diagram shows connectors and pin numbers, while a wiring diagram shows main sections",
        "A block diagram is used for mechanical parts only, never for electrical units",
        "There is no difference, because both names describe the same kind of drawing"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m02-l4",
      "explain": "Use the block diagram to find the unit that is likely at fault, then the wiring diagram to find the exact connector and pin. Reversing the two roles would send you to the wrong drawing."
    },
    {
      "id": "m02-q22",
      "q": "What is a service bulletin?",
      "options": [
        "A bill for a service visit",
        "A notice from the maker about a known problem, a changed part or a new procedure",
        "A customer's written complaint",
        "A list of the tools needed for a service"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m02-l4",
      "explain": "Service bulletins pass on new information about a model after the manual was printed. A bill and a complaint are business and customer documents."
    },
    {
      "id": "m02-q23",
      "q": "A calliper has a resolution of 0.02 mm. The main scale reads 23 mm and the 14th line on the sliding scale lines up. What is the measurement?",
      "options": [
        "23.14 mm",
        "23.70 mm",
        "23.28 mm",
        "25.80 mm"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m02-l5",
      "explain": "14 × 0.02 mm = 0.28 mm, so the total is 23.28 mm. The reading of 23.14 mm forgets the resolution, and 23.70 mm would need a resolution of 0.05 mm."
    },
    {
      "id": "m02-q24",
      "q": "A micrometer sleeve shows 6 mm and the half-millimetre mark after it is also visible. The thimble reads 17 on the line. What is the measurement?",
      "options": [
        "6.17 mm",
        "6.50 mm",
        "6.77 mm",
        "6.67 mm"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m02-l5",
      "explain": "The sleeve gives 6.5 mm and the thimble gives 17 × 0.01 mm = 0.17 mm, so the total is 6.67 mm. The value of 6.17 mm forgets the half-millimetre mark."
    },
    {
      "id": "m02-q25",
      "q": "What is 4.7 kΩ written in ohms?",
      "options": [
        "4,700 Ω",
        "470 Ω",
        "47,000 Ω",
        "4.7 Ω"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m02-l5",
      "explain": "Kilo means 1,000, so 4.7 × 1,000 = 4,700 Ω. A value of 470 Ω would be 0.47 kΩ."
    },
    {
      "id": "m02-q26",
      "q": "A resistor marked 4.7 kΩ ±5% measures 4.52 kΩ out of circuit. Is it within tolerance?",
      "options": [
        "No, because it is not exactly 4.7 kΩ",
        "No, because it is more than 5% below the marked value",
        "Yes, because the allowed range is 4.465 kΩ to 4.935 kΩ",
        "Yes, because any reading below the marked value is acceptable"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m02-l5",
      "explain": "5% of 4.7 kΩ is 0.235 kΩ, so the range is 4.465 kΩ to 4.935 kΩ. The reading is 0.18 kΩ low, about 3.8%. A reading below 4.465 kΩ would fail."
    },
    {
      "id": "m02-q27",
      "q": "A part has 12 V across it and a meter in series reads 40 mA. What is its resistance?",
      "options": [
        "0.3 Ω",
        "300 Ω",
        "480 Ω",
        "3.3 Ω"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m02-l5",
      "explain": "Convert 40 mA to 0.040 A, then R = 12 ÷ 0.040 = 300 Ω. Using 40 without converting gives 0.3 Ω, which is the tempting mistake."
    },
    {
      "id": "m02-q28",
      "q": "What is 470 nF written in microfarads?",
      "options": [
        "470 µF",
        "0.047 µF",
        "4.7 µF",
        "0.47 µF"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m02-l5",
      "explain": "Nano is one thousandth of micro, so divide by 1,000: 470 ÷ 1,000 = 0.47 µF. A value of 470 µF would be one thousand times too large."
    },
    {
      "id": "m02-q29",
      "q": "You need a torque value for a fixing on a customer's machine. Which source is the most reliable?",
      "options": [
        "A forum post that says it worked on the same model",
        "The maker's current service documents for that exact model and revision",
        "The value you remember from a similar machine",
        "A video from a repair channel"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m02-l6",
      "explain": "Official documents for the exact model and revision are the best source. A forum or video is an opinion on a similar case, and memory may belong to another model."
    },
    {
      "id": "m02-q30",
      "q": "A website offers a free copy of a maker's service manual. What is the best approach?",
      "options": [
        "Check it may be shared legally and confirm key values with an official source",
        "Use it freely, because anything that is on the internet can be copied and reused",
        "Share it with other companies so that everyone in the trade benefits from it",
        "Trust it completely, because it has the maker's logo on the cover page"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m02-l6",
      "explain": "A logo does not prove the file is genuine, current or licensed. Manuals are copyrighted and often limited to authorised service providers, so sharing them can breach the licence."
    },
    {
      "id": "m02-q31",
      "q": "Why should you write down the source of each value in your notes, such as document name, revision and page?",
      "options": [
        "So that you can charge the customer more",
        "So that nobody else can use your notes",
        "So that you can check it later and know how current and official it is",
        "So that you do not have to take readings again"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m02-l6",
      "explain": "A value with a source can be checked and updated. A value without a source is only a rumour. The reason is quality, not billing or secrecy."
    },
    {
      "id": "m02-q32",
      "q": "A parts cross-reference says a roller from another model is a match for your customer's machine. What should you do before you rely on it?",
      "options": [
        "Order it straight away, because cross-reference lists are always right and up to date",
        "Order three different rollers from other models and keep the one that fits best",
        "Fit it and see whether the machine runs, since it is the only real test",
        "Check the maker's catalogue lists it for your model, then compare it on arrival"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m02-l6",
      "explain": "Cross-references save time but can be wrong. Checking the catalogue and then the part itself avoids a wasted job. Trying a part that you have not confirmed can also damage the machine."
    }
  ],
  "cards": [
    {
      "id": "m02-c01",
      "front": "What is cam-out on a Phillips screw?",
      "back": "The driver is pushed out of the screw head when you press too hard or the fit is poor. It can round the head.",
      "lesson": "m02-l1"
    },
    {
      "id": "m02-c02",
      "front": "How do you tell a Pozidriv head from a Phillips head?",
      "back": "A Pozidriv has small extra ribs between the arms of the cross.",
      "lesson": "m02-l1"
    },
    {
      "id": "m02-c03",
      "front": "What is a Torx screw head?",
      "back": "A screw head with a six-point star recess. It resists slipping.",
      "lesson": "m02-l1"
    },
    {
      "id": "m02-c04",
      "front": "What are snap-ring pliers used for?",
      "back": "To open or close a ring that sits in a groove on a shaft or in a bore. Use the internal or external type to match the ring.",
      "lesson": "m02-l1"
    },
    {
      "id": "m02-c05",
      "front": "What is a feeler gauge used for?",
      "back": "Measuring a small gap with thin steel blades of known thickness.",
      "lesson": "m02-l1"
    },
    {
      "id": "m02-c06",
      "front": "Which cleaning fluid should you use on a given roller?",
      "back": "The one named in the service manual for that part. Some fluids harden rubber or crack plastic.",
      "lesson": "m02-l1"
    },
    {
      "id": "m02-c07",
      "front": "How do you connect a meter to measure voltage?",
      "back": "Across the part, in parallel. Black lead in COM, red lead in the voltage socket.",
      "lesson": "m02-l2"
    },
    {
      "id": "m02-c08",
      "front": "How do you connect a meter to measure current?",
      "back": "In series, so the current flows through the meter. Red lead in the current socket and the dial on a current range.",
      "lesson": "m02-l2"
    },
    {
      "id": "m02-c09",
      "front": "Why must you not measure resistance on a live circuit?",
      "back": "The meter supplies its own test current. Outside voltage gives false readings and can damage the meter.",
      "lesson": "m02-l2"
    },
    {
      "id": "m02-c10",
      "front": "What happens if you connect a meter on a current range across a voltage source?",
      "back": "It acts as a short circuit. The meter's fuse blows or the meter is damaged.",
      "lesson": "m02-l2"
    },
    {
      "id": "m02-c11",
      "front": "What does a continuity test show?",
      "back": "Whether there is a complete low-resistance path. The meter usually beeps for a good path.",
      "lesson": "m02-l2"
    },
    {
      "id": "m02-c12",
      "front": "What is the normal diode test result for a good silicon diode?",
      "back": "About 0.5 V to 0.7 V one way, and OL the other way.",
      "lesson": "m02-l2"
    },
    {
      "id": "m02-c13",
      "front": "What do CAT II, CAT III and CAT IV mean on a meter?",
      "back": "The place the meter may be used: socket-connected equipment, fixed installations, and the point of supply. A higher number means more surge protection.",
      "lesson": "m02-l2"
    },
    {
      "id": "m02-c14",
      "front": "What does a clamp meter measure and how?",
      "back": "Current in one conductor, by sensing its magnetic field. It does not need a break in the circuit.",
      "lesson": "m02-l3"
    },
    {
      "id": "m02-c15",
      "front": "What is the formula for frequency from period?",
      "back": "f = 1 ÷ T. For example, a period of 20 ms gives 50 Hz.",
      "lesson": "m02-l3"
    },
    {
      "id": "m02-c16",
      "front": "On an oscilloscope, what is time per division?",
      "back": "The control that sets how much time each horizontal square stands for.",
      "lesson": "m02-l3"
    },
    {
      "id": "m02-c17",
      "front": "How do you find peak voltage from a scope trace?",
      "back": "Count the divisions peak to peak, multiply by volts per division, then halve it for the peak.",
      "lesson": "m02-l3"
    },
    {
      "id": "m02-c18",
      "front": "What does a logic probe show?",
      "back": "Whether a digital point is high, low or pulsing.",
      "lesson": "m02-l3"
    },
    {
      "id": "m02-c19",
      "front": "What does an LCR meter measure?",
      "back": "Inductance, capacitance and resistance of a part, normally out of circuit.",
      "lesson": "m02-l3"
    },
    {
      "id": "m02-c20",
      "front": "What is a parts catalogue used for?",
      "back": "Finding part numbers from exploded views, where each item number links to a parts list.",
      "lesson": "m02-l4"
    },
    {
      "id": "m02-c21",
      "front": "What is a service bulletin?",
      "back": "A notice from the maker about a known problem, a changed part or a new procedure.",
      "lesson": "m02-l4"
    },
    {
      "id": "m02-c22",
      "front": "Why must you use the fault-code table for the exact model?",
      "back": "The same code can mean different faults on different models, even from the same maker.",
      "lesson": "m02-l4"
    },
    {
      "id": "m02-c23",
      "front": "What is a revision level?",
      "back": "The version number of a document, board or part. Check it before ordering parts or applying procedures.",
      "lesson": "m02-l4"
    },
    {
      "id": "m02-c24",
      "front": "What is the resolution of a typical metric vernier calliper?",
      "back": "Often 0.02 mm, but check your instrument. Multiply the aligned line number by the resolution.",
      "lesson": "m02-l5"
    },
    {
      "id": "m02-c25",
      "front": "How do you read a metric micrometer?",
      "back": "Sleeve reading including any half-millimetre mark, plus thimble line × 0.01 mm.",
      "lesson": "m02-l5"
    },
    {
      "id": "m02-c26",
      "front": "Convert 0.35 A to milliamperes.",
      "back": "350 mA.",
      "lesson": "m02-l5"
    },
    {
      "id": "m02-c27",
      "front": "How do you work out a tolerance range?",
      "back": "Nominal ± (nominal × percentage ÷ 100). For 1 kΩ ±5%, the range is 950 Ω to 1,050 Ω.",
      "lesson": "m02-l5"
    },
    {
      "id": "m02-c28",
      "front": "What is the difference between m and M in units?",
      "back": "A small m means milli, one thousandth. A capital M means mega, one million.",
      "lesson": "m02-l5"
    },
    {
      "id": "m02-c29",
      "front": "How do you judge whether a source of information is reliable?",
      "back": "Check who made it, whether it names your exact model and revision, its date, and whether another reliable source agrees.",
      "lesson": "m02-l6"
    },
    {
      "id": "m02-c30",
      "front": "Why keep a record of the source of each value?",
      "back": "So you can check it again and tell whether it is official and current.",
      "lesson": "m02-l6"
    }
  ]
});

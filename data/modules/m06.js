OMM.registerModule({
  "id": "m06",
  "summary": "Explain how diodes, transistors, capacitors, op-amps and sensors work in office machines, calculate with them, test them safely, and trace common analogue faults on a circuit board.",
  "outcomes": [
    "Describe how a PN junction works and choose the right diode type for a job.",
    "Explain how a transistor works as a switch and as an amplifier, and test one with a meter.",
    "Calculate an RC time constant and the charge or discharge level after a given time.",
    "Calculate the gain of inverting and non-inverting op-amp circuits and explain how a comparator works.",
    "Identify the common sensors in office machines and say how each fails and how it is checked.",
    "Use a schematic and safe test methods to trace an analogue fault to a failed part."
  ],
  "cheatsheet": [
    "Silicon diode forward drop is about 0.6 to 0.7 V. Schottky is lower, about 0.2 to 0.4 V.",
    "Zener diode: used in reverse to hold a set voltage. It needs a series resistor.",
    "Transistor current gain: Ic = β × Ib. A switch is driven fully on or fully off.",
    "RC time constant: τ = R × C. Charging reaches 63% at 1τ and about 99% at 5τ.",
    "Discharging leaves 37% at 1τ, about 5% at 3τ and under 1% at 5τ.",
    "Inverting gain = −Rf ÷ Rin. Non-inverting gain = 1 + Rf ÷ Rg.",
    "A comparator has no feedback. Its output swings high or low to show which input is larger.",
    "NTC thermistor: resistance falls as temperature rises.",
    "Discharge large capacitors with a proper tool or resistor, then check with a meter.",
    "Measure parts out of circuit when you need the true value."
  ],
  "lessons": [
    {
      "id": "m06-l1",
      "title": "Diodes and semiconductor basics",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers diodes: how a PN junction works, the main diode types found in office machines, and how to test a diode with a meter."
        },
        {
          "t": "h",
          "text": "Semiconductors and the PN junction"
        },
        {
          "t": "p",
          "text": "A **semiconductor** is a material, usually silicon, that conducts better than an insulator but worse than a metal. Makers add tiny amounts of other elements to give two kinds. **N-type** material has spare electrons. **P-type** material has gaps, called holes, that behave like positive charges."
        },
        {
          "t": "p",
          "text": "A **diode** joins P-type and N-type material. The joint is the **PN junction**. The P side is the **anode** (A). The N side is the **cathode** (K). On most parts a stripe marks the cathode end."
        },
        {
          "t": "h",
          "text": "Forward and reverse bias"
        },
        {
          "t": "p",
          "text": "When the anode is more positive than the cathode by about 0.6 to 0.7 V, a silicon diode is **forward biased** and conducts. That voltage across it is the **forward voltage drop**. When the polarity is reversed, the diode is **reverse biased** and blocks current, apart from a tiny leakage."
        },
        {
          "t": "diagram",
          "name": "diode-symbols"
        },
        {
          "t": "p",
          "text": "Every diode has a maximum reverse voltage. Above it the junction breaks down. A normal diode is usually damaged by this, so a rectifier must be rated well above the voltage it will see."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A diode is a one-way valve for current. It conducts from anode to cathode and blocks the other way."
        },
        {
          "t": "h",
          "text": "Common diode types"
        },
        {
          "t": "table",
          "head": [
            "Type",
            "Typical forward drop",
            "Used for"
          ],
          "rows": [
            [
              "Silicon rectifier",
              "about 0.7 V",
              "Changing AC to DC in power supplies"
            ],
            [
              "Schottky",
              "about 0.2 to 0.4 V",
              "Fast, low-loss rectifying on low-voltage rails"
            ],
            [
              "Zener",
              "about 0.7 V forward",
              "Holding a fixed voltage when used in reverse"
            ],
            [
              "LED",
              "about 1.8 to 3.5 V",
              "Indicators and the light source in optical sensors"
            ]
          ],
          "caption": "Typical values. They vary by part, so check the datasheet or service manual."
        },
        {
          "t": "p",
          "text": "A **Zener diode** is used in reverse. When the reverse voltage reaches its rated value, it conducts and holds about that voltage. It always needs a series resistor to limit the current. A **light-emitting diode** (LED) gives off light when current flows forward through it, and it also needs a series resistor."
        },
        {
          "t": "example",
          "title": "Series resistor for an LED",
          "steps": [
            "Supply 5 V. The LED drops 2 V. You want 10 mA.",
            "Voltage across the resistor = 5 V − 2 V = 3 V.",
            "R = V ÷ I = 3 V ÷ 0.010 A = 300 Ω.",
            "The nearest standard value is 330 Ω. Current = 3 V ÷ 330 Ω ≈ 9.1 mA, which is fine."
          ]
        },
        {
          "t": "h",
          "text": "Testing a diode with a meter"
        },
        {
          "t": "ol",
          "items": [
            "Switch off, unplug and discharge any capacitors. Take the diode out of circuit if you can.",
            "Set the meter to the diode-test symbol.",
            "Red probe on the anode and black on the cathode. A good silicon diode shows about 0.5 to 0.7 V on many meters.",
            "Reverse the probes. A good diode shows OL, which means over limit.",
            "Low readings both ways mean a short. OL both ways means an open diode."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "In circuit, other parts in parallel can give a false reading. If a diode looks bad in circuit, lift one leg and test again before you replace it."
        }
      ]
    },
    {
      "id": "m06-l2",
      "title": "Transistors",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers bipolar transistors and MOSFETs, how they work as switches and amplifiers, and how to test them."
        },
        {
          "t": "h",
          "text": "Bipolar transistors"
        },
        {
          "t": "p",
          "text": "A **transistor** is a part in which a small signal controls a larger current. A **bipolar junction transistor** (BJT) has three legs: the **base** (B), the **collector** (C) and the **emitter** (E)."
        },
        {
          "t": "p",
          "text": "An **NPN** transistor conducts from collector to emitter when the base is about 0.7 V higher than the emitter. A **PNP** transistor is the mirror image: it conducts from emitter to collector when the base is about 0.7 V lower than the emitter."
        },
        {
          "t": "formula",
          "text": "Ic = β × Ib",
          "caption": "Collector current equals current gain β times base current"
        },
        {
          "t": "p",
          "text": "The **current gain** β is often written hFE. It can be tens or hundreds and it differs between parts, so check the datasheet."
        },
        {
          "t": "h",
          "text": "Switch and amplifier use"
        },
        {
          "t": "p",
          "text": "As a **switch**, the transistor is driven fully on or fully off. When fully on it is **saturated** and only a few tenths of a volt remain across it, so it stays cool. Machines use this to drive relays, solenoids, lamps and small motors from logic outputs."
        },
        {
          "t": "diagram",
          "name": "transistor-switch"
        },
        {
          "t": "p",
          "text": "As an **amplifier**, the base is held at a steady level so the transistor sits part way between on and off. This steady setting is **biasing**. A small change at the base then gives a larger change at the collector."
        },
        {
          "t": "example",
          "title": "Base resistor for a relay driver",
          "steps": [
            "The relay coil needs 50 mA. The NPN transistor has a gain of 100.",
            "Minimum base current = 50 mA ÷ 100 = 0.5 mA.",
            "To be sure it saturates, the designer uses 1 mA, which is twice the minimum.",
            "The control output is 5 V and the base drops 0.7 V. R = (5 V − 0.7 V) ÷ 0.001 A = 4,300 Ω, about 4.3 kΩ."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A coil produces a voltage spike when its current is cut. A diode across the relay coil absorbs the spike and protects the transistor."
        },
        {
          "t": "h",
          "text": "MOSFETs"
        },
        {
          "t": "p",
          "text": "A **MOSFET** has a **gate** (G), a **drain** (D) and a **source** (S). The gate is insulated from the rest of the part. A voltage on the gate controls the current from drain to source, and the gate draws almost no steady current. An N-channel MOSFET turns on when the gate is above the source by more than its threshold voltage, typically a few volts."
        },
        {
          "t": "p",
          "text": "Power MOSFETs have a very low on-resistance. They are the switching transistors in power supplies and motor drives. The thin insulation under the gate is easily damaged by static, so follow ESD rules."
        },
        {
          "t": "h",
          "text": "Testing a transistor"
        },
        {
          "t": "p",
          "text": "Use the diode-test range with the power off and the part out of circuit. A BJT behaves like two diodes joined at the base."
        },
        {
          "t": "ul",
          "items": [
            "NPN: red probe on base, black on collector, then black on emitter. Each shows about 0.5 to 0.7 V. With the probes reversed, both show OL.",
            "PNP: the same test with the probes swapped.",
            "Collector to emitter should read OL both ways.",
            "A low reading between any pair in both directions means a shorted part."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A meter finds hard failures only. A transistor that is leaky or has lost gain may still pass. Replace it with the same type and see whether the fault clears. For a MOSFET, the gate can hold charge, so touch gate and source together briefly with the power off before testing."
        }
      ]
    },
    {
      "id": "m06-l3",
      "title": "Capacitors, inductors and RC behaviour",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers capacitors and inductors, the RC time constant, why electrolytic capacitors age, and how to discharge a capacitor safely."
        },
        {
          "t": "h",
          "text": "Capacitors"
        },
        {
          "t": "p",
          "text": "A **capacitor** stores energy as an electric field between two plates. Its size is its **capacitance**, measured in **farads** (F). Most parts are in microfarads (µF), nanofarads (nF) or picofarads (pF)."
        },
        {
          "t": "p",
          "text": "Ceramic and film capacitors have no polarity. **Electrolytic** capacitors give large values in a small body, but they are **polarised**. A reversed connection or too much voltage can make them vent or burst. Never exceed the voltage rating."
        },
        {
          "t": "h",
          "text": "The RC time constant"
        },
        {
          "t": "p",
          "text": "A capacitor charges and discharges through a resistor gradually, not at once. The **time constant** τ (tau) tells you how fast."
        },
        {
          "t": "diagram",
          "name": "rc-charging"
        },
        {
          "t": "formula",
          "text": "τ = R × C",
          "caption": "τ in seconds, R in ohms, C in farads"
        },
        {
          "t": "table",
          "head": [
            "Time",
            "Charging reaches",
            "Discharging leaves"
          ],
          "rows": [
            [
              "1 τ",
              "63%",
              "37%"
            ],
            [
              "2 τ",
              "86%",
              "14%"
            ],
            [
              "3 τ",
              "95%",
              "5%"
            ],
            [
              "4 τ",
              "98%",
              "2%"
            ],
            [
              "5 τ",
              "99%",
              "under 1%"
            ]
          ],
          "caption": "Percentages of the final or starting voltage, rounded"
        },
        {
          "t": "example",
          "title": "Charging through a resistor",
          "steps": [
            "R = 10 kΩ = 10,000 Ω. C = 220 µF = 0.00022 F. A 12 V step is applied.",
            "τ = 10,000 × 0.00022 = 2.2 s.",
            "After 2.2 s the capacitor is at 63% of 12 V ≈ 7.6 V.",
            "After 3τ = 6.6 s it is at 95% of 12 V ≈ 11.4 V."
          ]
        },
        {
          "t": "p",
          "text": "Machines use this behaviour for **filtering**, where a capacitor smooths a rail. They also use it for **coupling**, where a capacitor passes a changing signal but blocks steady DC, and for short **timing** delays."
        },
        {
          "t": "h",
          "text": "Ageing of electrolytic capacitors"
        },
        {
          "t": "p",
          "text": "Heat slowly dries the liquid inside an electrolytic capacitor. Its capacitance falls and its **ESR** (equivalent series resistance) rises. The result is more ripple on the rail, random resets and noisy operation. Look for a bulging top, leaked brown residue or a smell. A capacitor can look normal and still be weak, so an ESR meter helps."
        },
        {
          "t": "p",
          "text": "Replace it with the same capacitance, a voltage rating at least as high, the same temperature class and the correct polarity. Use a low-ESR type where the original was one."
        },
        {
          "t": "h",
          "text": "Inductors"
        },
        {
          "t": "p",
          "text": "An **inductor** is a coil that stores energy in a magnetic field. Its size is its **inductance**, measured in **henries** (H). It resists sudden changes in current. Inductors appear in filters and in switch-mode power supplies."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A large capacitor can hold a dangerous charge after the machine is unplugged. Never short it with a screwdriver. Use a proper discharge tool or a resistor of the value and power rating your service manual or workshop procedure specifies. Then check with a meter that the voltage is gone."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Five time constants take a capacitor to about 99% charged or less than 1% remaining."
        }
      ]
    },
    {
      "id": "m06-l4",
      "title": "Operational amplifiers",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the operational amplifier: the ideal rules, the gain formulas for inverting and non-inverting circuits, comparators, and how op-amps prepare sensor signals."
        },
        {
          "t": "h",
          "text": "What an op-amp is"
        },
        {
          "t": "p",
          "text": "An **operational amplifier**, or **op-amp**, is a very high-gain amplifier chip. It has a non-inverting input (+), an inverting input (−), one output and power connections. The output tries to equal a huge gain times the difference between the two inputs."
        },
        {
          "t": "p",
          "text": "With **negative feedback**, part of the output is fed back to the inverting input. Then two simple ideal rules describe the circuit:"
        },
        {
          "t": "ol",
          "items": [
            "No current flows into either input.",
            "The output moves until the two inputs are at the same voltage."
          ]
        },
        {
          "t": "h",
          "text": "Inverting and non-inverting amplifiers"
        },
        {
          "t": "p",
          "text": "In the **inverting amplifier**, the signal goes through an input resistor Rin to the − input. A feedback resistor Rf joins the output to the − input. The + input is at 0 V. The output is the input turned upside down and made larger."
        },
        {
          "t": "diagram",
          "name": "opamp-gain"
        },
        {
          "t": "formula",
          "text": "Gain = − Rf ÷ Rin",
          "caption": "Inverting amplifier"
        },
        {
          "t": "p",
          "text": "In the **non-inverting amplifier**, the signal goes to the + input. Rf joins the output to the − input and a resistor Rg joins the − input to 0 V. The output has the same sign as the input."
        },
        {
          "t": "formula",
          "text": "Gain = 1 + Rf ÷ Rg",
          "caption": "Non-inverting amplifier"
        },
        {
          "t": "example",
          "title": "Calculating two gains",
          "steps": [
            "Inverting: Rin = 10 kΩ, Rf = 100 kΩ. Gain = −100 ÷ 10 = −10.",
            "With an input of +0.2 V the output is 0.2 × (−10) = −2 V.",
            "Non-inverting: Rg = 10 kΩ, Rf = 90 kΩ. Gain = 1 + 90 ÷ 10 = 10.",
            "With an input of 0.3 V the output is 0.3 × 10 = 3 V."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A non-inverting gain can never be less than 1. An inverting gain can be below 1 when Rf is smaller than Rin."
        },
        {
          "t": "h",
          "text": "Comparators"
        },
        {
          "t": "p",
          "text": "A **comparator** is an op-amp used with no negative feedback. Its output swings to one limit if the + input is higher than the − input, and to the other limit if it is lower. A thermistor voltage compared with a fixed reference gives a simple over-temperature signal. A little positive feedback, called **hysteresis**, stops the output chattering when the input hovers near the threshold."
        },
        {
          "t": "h",
          "text": "Signal conditioning for sensors"
        },
        {
          "t": "p",
          "text": "Sensor signals are often small, noisy or at the wrong level for the controller. **Signal conditioning** means amplifying, buffering, filtering or shifting the signal so it fits the input of an analogue-to-digital converter."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "The output of an op-amp cannot go beyond its supply. On a 5 V supply, a gain of 10 with a 0.8 V input would need 8 V. The output clips near the supply instead. If a signal looks flat-topped, check the gain and the supply first."
        }
      ]
    },
    {
      "id": "m06-l5",
      "title": "Sensors in office machines",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the sensors in office machines: thermistors, photo-interrupters, optocouplers, reflective sensors, Hall sensors and microswitches, with their typical failures and how to test them."
        },
        {
          "t": "h",
          "text": "Thermistors"
        },
        {
          "t": "p",
          "text": "A **thermistor** is a resistor whose value changes strongly with temperature. An **NTC** thermistor falls in resistance as it gets hotter. A **PTC** thermistor rises. Fusers use NTC thermistors to tell the controller how hot a roller is."
        },
        {
          "t": "p",
          "text": "The controller reads the thermistor through a voltage divider. Take a 5 V supply, a 10 kΩ fixed resistor at the top and the NTC below it. When the NTC is 10 kΩ, the output is 2.5 V. When the NTC is hot and falls to 2.5 kΩ, the output is 5 × 2.5 ÷ 12.5 = 1.0 V. An open thermistor pushes the output towards 5 V, which looks like a very cold roller. A shorted one pushes it to 0 V."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Fusers have separate thermal protection, such as a thermostat or thermal fuse. Never bypass it or replace it with a different type. Resistance and temperature values vary by machine, so use the service manual."
        },
        {
          "t": "h",
          "text": "Optical sensors"
        },
        {
          "t": "p",
          "text": "A **photo-interrupter** has an LED and a phototransistor facing each other across a slot. A flag or sheet of paper in the slot blocks the light. It is used to detect paper, home positions and encoder discs."
        },
        {
          "t": "diagram",
          "name": "photo-interrupter"
        },
        {
          "t": "p",
          "text": "An **optocoupler** has an LED and a phototransistor sealed in one package. The signal crosses as light, so the two circuits are electrically isolated. Optocouplers are used for isolation in power supplies and interfaces."
        },
        {
          "t": "p",
          "text": "A **reflective sensor** has the LED and the detector side by side. It senses light bounced back from paper or a mark. Dust, dark paper and bright room light can cause false readings."
        },
        {
          "t": "h",
          "text": "Hall sensors and microswitches"
        },
        {
          "t": "p",
          "text": "A **Hall sensor** detects a magnetic field with no contact. It is used for motor position, fan speed and cover detection. It needs a supply, so a missing supply voltage looks like a dead sensor."
        },
        {
          "t": "p",
          "text": "A **microswitch** has a lever that moves contacts: common (C), normally open (NO) and normally closed (NC). Levers wear, break or go out of adjustment, and contacts get dirty."
        },
        {
          "t": "table",
          "head": [
            "Sensor",
            "Typical failure",
            "Quick check"
          ],
          "rows": [
            [
              "Thermistor",
              "Open, drifted value",
              "Measure resistance out of circuit; compare with the manual"
            ],
            [
              "Photo-interrupter",
              "Dust or a stuck flag",
              "Clean it, then use the machine sensor test"
            ],
            [
              "Reflective sensor",
              "Dirty window",
              "Clean it, then use the sensor test with a sheet"
            ],
            [
              "Hall sensor",
              "No supply, weak magnet",
              "Check supply and output as the magnet moves"
            ],
            [
              "Microswitch",
              "Worn lever, dirty contacts",
              "Continuity test with the lever pressed and free"
            ]
          ],
          "caption": "Sensor faults and first checks"
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Many machines have a sensor-test mode that shows each sensor changing on the panel. Check the manual for how to enter it. Cleaning with a dry cotton bud solves many sensor faults."
        }
      ]
    },
    {
      "id": "m06-l6",
      "title": "Reading schematics and finding analogue faults",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to read a schematic, how to trace a signal, how to test parts in circuit and out of circuit, and the faults you will meet most often on analogue boards."
        },
        {
          "t": "h",
          "text": "Reading a schematic"
        },
        {
          "t": "p",
          "text": "A **schematic** shows how parts connect, not where they sit on the board. Each part has a symbol and a **reference designator**: a letter and a number. Lines are wires. A dot where lines cross means they connect. Crossing lines with no dot do not."
        },
        {
          "t": "table",
          "head": [
            "Letter",
            "Part",
            "Letter",
            "Part"
          ],
          "rows": [
            [
              "R",
              "Resistor",
              "Q",
              "Transistor"
            ],
            [
              "C",
              "Capacitor",
              "U or IC",
              "Integrated circuit"
            ],
            [
              "D",
              "Diode",
              "L",
              "Inductor"
            ],
            [
              "F",
              "Fuse",
              "T",
              "Transformer"
            ]
          ],
          "caption": "Common reference letters. Check the legend in your manual."
        },
        {
          "t": "p",
          "text": "Signals usually flow from left to right. Rails are labelled with their voltage, for example +5 V or +24 V. The ground symbol marks the 0 V reference."
        },
        {
          "t": "h",
          "text": "Tracing a signal"
        },
        {
          "t": "ol",
          "items": [
            "Check the supply rails at the board and at the chip pins first.",
            "Find the stage where the symptom first appears on the schematic.",
            "Measure at the boundary between stages, then halve the faulty section again.",
            "Compare each reading with the level the manual gives.",
            "Change one thing at a time and note each result."
          ]
        },
        {
          "t": "h",
          "text": "In circuit and out of circuit"
        },
        {
          "t": "p",
          "text": "Other parts connected across a component add parallel paths. A resistor measured in circuit often reads lower than its marking. To get the true value, power off, discharge, then lift one leg. Diode tests on semiconductors can also mislead in circuit. Handle boards with ESD care."
        },
        {
          "t": "h",
          "text": "Common failures"
        },
        {
          "t": "ul",
          "items": [
            "**Dry joints**: cracked solder, often at connectors and heavy parts. Look with a magnifier.",
            "**Failed electrolytic capacitors**: bulging, leaking or high ESR.",
            "**Shorted semiconductors**: a diode or transistor shorted after overheating or overvoltage. Find the cause before you fit a new one.",
            "**Burnt resistors**: dark and cracked. A resistor rarely burns without a reason.",
            "**Corroded or loose connectors**: intermittent faults that change when you move a cable."
          ]
        },
        {
          "t": "h",
          "text": "Thermal checks"
        },
        {
          "t": "p",
          "text": "A part that is too hot usually carries too much current. Use a non-contact infrared thermometer or a thermal camera and compare it with a known-good board."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never touch parts on a powered board with your fingers. Many boards have circuits connected to the mains. Check the schematic for the isolation barrier and keep your hands clear while the machine is live."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Find why a part failed before you replace it. A new part in the same fault will fail again."
        }
      ]
    }
  ],
  "practical": {
    "title": "Test diodes and transistors and measure an RC charging time",
    "objective": "Check a diode and a transistor with a meter, then build a simple RC circuit and compare the measured charging voltage with the value you calculate.",
    "time": "60 minutes",
    "tools": [
      "Digital multimeter with a diode-test range",
      "Breadboard or terminal strip",
      "9 V battery with connector (or a current-limited 9 V bench supply)",
      "100 kΩ resistor and 1 kΩ resistor",
      "100 µF electrolytic capacitor rated 16 V or higher",
      "One silicon diode, one LED, one small NPN transistor",
      "Stopwatch or phone timer",
      "Notebook and pen"
    ],
    "safety": [
      "Use only the 9 V battery or a current-limited supply of 12 V or less. Do not use mains power for this task.",
      "Fit the electrolytic capacitor the right way round. The stripe marks the negative leg. A reversed capacitor can vent.",
      "Never connect a charged capacitor straight across a short. Discharge it through the 1 kΩ resistor.",
      "Wear safety glasses while you power the circuit. Disconnect the battery when you change parts.",
      "Handle the transistor by its body and touch an earthed metal surface first to reduce static."
    ],
    "steps": [
      "Set the meter to the diode-test range. Touch the two probes together and note the reading, which should be close to zero.",
      "Put the red probe on the anode of the silicon diode and the black probe on the cathode. Write down the reading.",
      "Reverse the probes and write down the reading. Decide if the diode is good.",
      "Test the LED the same way. Write both readings. Note if it glows faintly.",
      "Find the base, collector and emitter of the NPN transistor from its markings or datasheet. Test red on base with black on collector, then black on emitter. Record both.",
      "Reverse the probes for the same pairs, and test collector to emitter both ways. Record the readings and say whether the transistor is good.",
      "Calculate τ for 100 kΩ and 100 µF. Then calculate the voltage you expect after 10 s and 20 s from a 9 V supply.",
      "Build the circuit: battery positive to the 100 kΩ resistor, then to the capacitor positive leg, with the capacitor negative leg back to battery negative. Leave one battery lead off.",
      "Discharge the capacitor through the 1 kΩ resistor. Check with the meter that it reads 0 V.",
      "Set the meter to DC volts across the capacitor. Connect the battery lead and start the timer at the same moment.",
      "Read the capacitor voltage at 10 s and at 20 s. Record both values.",
      "Disconnect the battery. Discharge the capacitor through the 1 kΩ resistor again and confirm 0 V.",
      "Compare your readings with the calculated values. Write the percentage difference and one reason for it, such as capacitor tolerance."
    ],
    "checks": [
      "I can say which probe goes on which leg to test a diode, and what a good and a bad reading look like.",
      "I can show that an NPN transistor reads like two diodes with the diode test.",
      "I can calculate τ and the voltage after 1τ and 2τ for a given resistor and capacitor.",
      "I can explain why my measured voltage differed a little from my calculated voltage.",
      "I can discharge a capacitor safely and prove it is discharged."
    ]
  },
  "quiz": [
    {
      "id": "m06-q01",
      "q": "Which end of a rectifier diode does the stripe on its body usually mark?",
      "options": [
        "The anode, where current enters",
        "The side with the longer leg",
        "The cathode, where current leaves",
        "The side that faces the supply"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m06-l1",
      "explain": "The stripe marks the cathode. A forward-biased diode conducts from anode to cathode, so current leaves at the striped end. The anode is the opposite end."
    },
    {
      "id": "m06-q02",
      "q": "A silicon diode is conducting normally in a circuit. What forward voltage drop would you expect across it?",
      "options": [
        "About 0.7 V",
        "About 2.5 V",
        "About 0.1 V",
        "About 5.0 V"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m06-l1",
      "explain": "A conducting silicon junction drops about 0.6 to 0.7 V. A reading near 2 V or more suits an LED, not a plain silicon diode."
    },
    {
      "id": "m06-q03",
      "q": "An LED drops 2 V and should carry 10 mA from a 12 V supply. Which series resistor value is correct?",
      "options": [
        "200 Ω",
        "1.2 kΩ",
        "100 Ω",
        "1 kΩ"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m06-l1",
      "explain": "The resistor must drop 12 V − 2 V = 10 V at 10 mA, so R = 10 ÷ 0.010 = 1,000 Ω. The value 1.2 kΩ comes from forgetting the LED drop and dividing the full 12 V."
    },
    {
      "id": "m06-q04",
      "q": "In diode-test mode, a diode taken out of circuit reads 0.00 V with the probes either way round. What is the diagnosis?",
      "options": [
        "It is open and must be replaced",
        "It is shorted and must be replaced",
        "It is good, as a low reading is normal",
        "It is a Zener type, so it is fine"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m06-l1",
      "explain": "A good diode conducts one way only. A near-zero reading both ways means the junction is shorted. An open diode would read OL both ways."
    },
    {
      "id": "m06-q05",
      "q": "What is the normal job of a Zener diode in a power circuit?",
      "options": [
        "To hold a voltage steady at a set value",
        "To change AC into smooth DC by itself",
        "To turn a load on when light reaches it",
        "To store charge when the supply is off"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m06-l1",
      "explain": "Used in reverse with a series resistor, a Zener conducts at its rated voltage and holds about that voltage. It does not rectify on its own, because that needs a forward-conducting diode and a filter."
    },
    {
      "id": "m06-q06",
      "q": "Which three terminals does a bipolar transistor have?",
      "options": [
        "Anode, cathode and gate",
        "Gate, drain and source",
        "Input, output and ground",
        "Base, collector and emitter"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m06-l2",
      "explain": "A bipolar transistor has a base, a collector and an emitter. Gate, drain and source are the terminals of a MOSFET."
    },
    {
      "id": "m06-q07",
      "q": "A relay coil needs 60 mA. An NPN transistor has a current gain of 100. What is the smallest base current that can give 60 mA?",
      "options": [
        "6 mA",
        "0.6 mA",
        "60 mA",
        "0.06 mA"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m06-l2",
      "explain": "Ib = Ic ÷ β = 60 mA ÷ 100 = 0.6 mA. Choosing 6 mA multiplies by 10 by mistake. In practice a designer adds margin so the transistor saturates."
    },
    {
      "id": "m06-q08",
      "q": "Why is a diode fitted across a relay coil that a transistor switches?",
      "options": [
        "To raise the coil voltage for faster switching",
        "To protect the base from over-heating",
        "To absorb the spike when the coil switches off",
        "To let the coil run on AC as well as DC"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m06-l2",
      "explain": "A coil makes a voltage spike when its current is cut, which can destroy the transistor. The diode gives that current a safe path. It does not speed up the relay or protect the base."
    },
    {
      "id": "m06-q09",
      "q": "An NPN transistor is tested out of circuit. Red on base with black on collector reads 0.6 V, and red on base with black on emitter reads 0.6 V. All other combinations read OL. What does this show?",
      "options": [
        "A normal NPN transistor",
        "A normal PNP transistor",
        "A shorted transistor",
        "An open transistor"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m06-l2",
      "explain": "For an NPN part the base acts as the anode of two diodes, so the red probe on the base gives forward readings. A PNP part would give the same pattern with the probes swapped."
    },
    {
      "id": "m06-q10",
      "q": "Which statement about power MOSFETs is correct?",
      "options": [
        "The gate needs a large steady current to stay on",
        "They cannot be damaged by static electricity",
        "They are only ever used as small-signal amplifiers",
        "The insulated gate draws almost no steady current"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m06-l2",
      "explain": "The gate is insulated, so a voltage controls the part and almost no steady current flows. That thin insulation is also why static can damage a MOSFET."
    },
    {
      "id": "m06-q11",
      "q": "What is the time constant of a 47 kΩ resistor charging a 100 µF capacitor?",
      "options": [
        "0.47 s",
        "47 s",
        "4.7 s",
        "470 s"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m06-l3",
      "explain": "τ = R × C = 47,000 × 0.0001 = 4.7 s. Mistakes with the µ prefix give the other values, which are out by a factor of 10 or 100."
    },
    {
      "id": "m06-q12",
      "q": "A 10 V step is applied to an RC circuit. About what voltage is across the capacitor after one time constant of charging?",
      "options": [
        "3.7 V",
        "6.3 V",
        "9.5 V",
        "10 V"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m06-l3",
      "explain": "Charging reaches 63% after one time constant, so 6.3 V. The figure 3.7 V is the voltage still to come, or what remains when discharging."
    },
    {
      "id": "m06-q13",
      "q": "A capacitor charged to 100 V discharges through a resistor. About what voltage remains after three time constants?",
      "options": [
        "5 V",
        "37 V",
        "14 V",
        "95 V"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m06-l3",
      "explain": "After 3τ about 5% remains, so 5 V. The value 37 V is the level after one time constant and 14 V after two. The figure 95 V would be the charge level."
    },
    {
      "id": "m06-q14",
      "q": "A 25 V electrolytic capacitor on a 12 V rail has a bulging top. Which replacement is correct?",
      "options": [
        "Any capacitance, if its rating is 50 V",
        "A non-polar ceramic of the same value",
        "Same capacitance, 25 V or more, correct polarity",
        "A smaller capacitance to reduce heating"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m06-l3",
      "explain": "Keep the capacitance, use at least the original voltage rating and fit it the right way round. A smaller value would raise ripple, and a different value can upset the circuit."
    },
    {
      "id": "m06-q15",
      "q": "What happens to an electrolytic capacitor as it ages from heat?",
      "options": [
        "Its capacitance rises and ESR falls",
        "Its polarity slowly reverses",
        "Its voltage rating rises with age",
        "Its capacitance falls and ESR rises"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m06-l3",
      "explain": "The liquid inside dries out, so capacitance drops and ESR increases. That gives more ripple. Age never improves a capacitor or reverses its polarity."
    },
    {
      "id": "m06-q16",
      "q": "A large capacitor in an unplugged machine may still hold charge. What is the safest way to discharge it?",
      "options": [
        "Short its terminals with a screwdriver",
        "Use a proper discharge tool or resistor, then measure",
        "Wait one minute, then assume it is safe",
        "Connect it to earth with a bare wire"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m06-l3",
      "explain": "A controlled discharge through a suitable resistor or tool is safe, and a meter then proves the charge is gone. A screwdriver short can cause a spark, burn and damage, and waiting does not prove safety."
    },
    {
      "id": "m06-q17",
      "q": "An inverting amplifier has Rin = 20 kΩ and Rf = 100 kΩ. The input is +0.5 V. What is the output voltage?",
      "options": [
        "+2.5 V",
        "+3.0 V",
        "−2.5 V",
        "−0.1 V"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m06-l4",
      "explain": "The gain is −Rf ÷ Rin = −100 ÷ 20 = −5, so the output is 0.5 × (−5) = −2.5 V. A positive 3.0 V would come from the non-inverting formula 1 + 5 = 6."
    },
    {
      "id": "m06-q18",
      "q": "A non-inverting amplifier has Rg = 10 kΩ and Rf = 40 kΩ. What is its voltage gain?",
      "options": [
        "5",
        "4",
        "−4",
        "0.25"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m06-l4",
      "explain": "Gain = 1 + Rf ÷ Rg = 1 + 40 ÷ 10 = 5. The value 4 forgets the 1 in the formula. The negative value belongs to an inverting stage."
    },
    {
      "id": "m06-q19",
      "q": "Which pair of rules describes an ideal op-amp with negative feedback?",
      "options": [
        "The inputs take heavy current and the output equals the supply",
        "No current enters the inputs and the inputs sit at the same voltage",
        "The output is always 0 V and the inputs stay far apart",
        "The gain is exactly 1 and the inputs are tied to the supply"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m06-l4",
      "explain": "With negative feedback the op-amp draws no input current and adjusts its output until the two inputs match. The other pairs describe no real op-amp circuit."
    },
    {
      "id": "m06-q20",
      "q": "An op-amp has no feedback. Its + input is higher than its − input. What does the output do?",
      "options": [
        "It stays at exactly 0 V",
        "It rises slowly in a ramp",
        "It sits at half the supply voltage",
        "It swings to near its positive supply limit"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m06-l4",
      "explain": "Without feedback the huge gain drives the output to a limit, high when + is above −. This is how a comparator works. Half supply would need bias or feedback."
    },
    {
      "id": "m06-q21",
      "q": "An op-amp circuit on a 5 V supply is set to a gain of 10. A sensor gives 0.8 V. What will the output do?",
      "options": [
        "Clip near the supply, well below 8 V",
        "Reach a clean 8 V at the output",
        "Fall to 0.08 V",
        "Reverse to −8 V"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m06-l4",
      "explain": "The output cannot go beyond its supply rail, so it clips near 5 V or lower. The sum 0.8 × 10 = 8 V is possible only with a higher supply."
    },
    {
      "id": "m06-q22",
      "q": "Which circuit turns a thermistor voltage into a simple over-temperature on/off signal?",
      "options": [
        "A follower with a gain of 1",
        "A Zener clamp across the sensor",
        "A comparator with a reference",
        "An inverting amplifier with no input"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m06-l4",
      "explain": "A comparator compares the sensor voltage with a fixed reference and switches its output when the threshold is crossed. A follower only copies the signal and does not make a decision."
    },
    {
      "id": "m06-q23",
      "q": "What does an NTC thermistor do as it gets hotter?",
      "options": [
        "Its resistance rises",
        "Its resistance falls",
        "Its resistance stays fixed",
        "Its resistance becomes infinite"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m06-l5",
      "explain": "NTC means negative temperature coefficient: resistance falls as temperature rises. A PTC thermistor does the opposite."
    },
    {
      "id": "m06-q24",
      "q": "A 5 V divider has a 10 kΩ fixed resistor at the top and an NTC thermistor from the output to 0 V. The NTC is 2.5 kΩ when hot. What is the output voltage?",
      "options": [
        "4.0 V",
        "2.5 V",
        "0.5 V",
        "1.0 V"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m06-l5",
      "explain": "Vout = 5 × 2.5 ÷ (10 + 2.5) = 12.5 ÷ 12.5 = 1.0 V. The reading 4.0 V is what you get if the two resistors are swapped in the divider."
    },
    {
      "id": "m06-q25",
      "q": "What is the main difference between an optocoupler and a photo-interrupter?",
      "options": [
        "An optocoupler uses a magnet to switch",
        "An optocoupler has no LED inside it",
        "An optocoupler is sealed for isolation; an interrupter has a slot",
        "A photo-interrupter works only on AC supplies"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m06-l5",
      "explain": "An optocoupler seals the LED and detector in one body so a signal passes with electrical isolation. A photo-interrupter leaves a slot so an object can block the light."
    },
    {
      "id": "m06-q26",
      "q": "A paper-out sensor reads paper present with the tray empty. The sensor is a photo-interrupter. What is the most likely cause?",
      "options": [
        "A stuck flag or dust blocking the slot",
        "A faulty mains fuse in the power supply",
        "A worn paper pick-up roller",
        "High ripple on the 24 V rail"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m06-l5",
      "explain": "A blocked slot looks the same as paper present. Clean the sensor and free the flag. A worn pick-up roller causes misfeeds, not a false paper reading."
    },
    {
      "id": "m06-q27",
      "q": "Which sensor detects a magnetic field without touching it?",
      "options": [
        "Microswitch",
        "Hall sensor",
        "Thermistor",
        "Photo-interrupter"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m06-l5",
      "explain": "A Hall sensor responds to magnetic fields and needs no contact. A microswitch needs a lever to move, and a photo-interrupter senses light."
    },
    {
      "id": "m06-q28",
      "q": "The NTC thermistor in a 5 V divider is the lower resistor. Its wire breaks, leaving it open. What does the controller see at the divider output?",
      "options": [
        "Close to 0 V, as if very hot",
        "2.5 V, as if at room temperature",
        "A noisy signal that follows the heat",
        "Close to 5 V, as if very cold"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m06-l5",
      "explain": "With the lower resistor open, no current flows and the output rises to the supply. That reads as a very cold roller. A shorted thermistor would pull it to 0 V."
    },
    {
      "id": "m06-q29",
      "q": "On most schematics, which reference letter marks a transistor?",
      "options": [
        "Q",
        "T",
        "R",
        "D"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m06-l6",
      "explain": "Transistors are labelled Q. T is normally a transformer, R a resistor and D a diode."
    },
    {
      "id": "m06-q30",
      "q": "Why does a resistor measured in circuit often read lower than its marked value?",
      "options": [
        "The meter adds its own resistance",
        "The resistor changes value when cold",
        "Parts across it add parallel paths",
        "Solder adds kilohms in series"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m06-l6",
      "explain": "Other components joined across the resistor give the meter current extra paths, so the total reads lower. Lifting one leg removes them."
    },
    {
      "id": "m06-q31",
      "q": "A machine resets at random when its motor starts. The 5 V rail looks normal on a meter but dips on an oscilloscope. What is the best next check?",
      "options": [
        "Replace the main logic board at once",
        "Test the rail capacitors for ageing, for example with an ESR meter",
        "Fit a thicker mains lead",
        "Raise the 5 V adjustment above its rating"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m06-l6",
      "explain": "Short dips that a meter averages out point to weak filter capacitors or a poor connection. Replacing a board first is costly and may not cure it, and raising a rail above its rating can destroy parts."
    },
    {
      "id": "m06-q32",
      "q": "What is the safest way to find an overheating part on a board that may carry mains-connected circuits?",
      "options": [
        "Touch each part with a wet finger",
        "Press a screwdriver onto each part",
        "Hold a wire against each part",
        "Use a non-contact infrared thermometer"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m06-l6",
      "explain": "A non-contact thermometer reads temperature from a distance, so you do not touch live parts. Fingers and metal tools risk shock and shorts."
    }
  ],
  "cards": [
    {
      "id": "m06-c01",
      "front": "Silicon diode forward voltage drop",
      "back": "About 0.6 to 0.7 V when conducting.",
      "lesson": "m06-l1"
    },
    {
      "id": "m06-c02",
      "front": "Which diode end does the stripe mark?",
      "back": "The cathode.",
      "lesson": "m06-l1"
    },
    {
      "id": "m06-c03",
      "front": "What does a Zener diode do?",
      "back": "Used in reverse, it holds a fairly steady voltage at its rated value. It needs a series resistor.",
      "lesson": "m06-l1"
    },
    {
      "id": "m06-c04",
      "front": "Diode test: shorted diode reading",
      "back": "Low reading, near 0 V, with the probes either way round.",
      "lesson": "m06-l1"
    },
    {
      "id": "m06-c05",
      "front": "Why use a Schottky diode?",
      "back": "Its forward drop is low, about 0.2 to 0.4 V, and it switches fast. It wastes less power on low-voltage rails.",
      "lesson": "m06-l1"
    },
    {
      "id": "m06-c06",
      "front": "Series resistor for an LED: formula",
      "back": "R = (supply voltage − LED drop) ÷ wanted current.",
      "lesson": "m06-l1"
    },
    {
      "id": "m06-c07",
      "front": "Names of the three BJT terminals",
      "back": "Base, collector and emitter.",
      "lesson": "m06-l2"
    },
    {
      "id": "m06-c08",
      "front": "Transistor current gain formula",
      "back": "Ic = β × Ib.",
      "lesson": "m06-l2"
    },
    {
      "id": "m06-c09",
      "front": "What is saturation in a switching transistor?",
      "back": "Fully on, with only a few tenths of a volt across collector and emitter, so little heat is made.",
      "lesson": "m06-l2"
    },
    {
      "id": "m06-c10",
      "front": "Why a diode across a relay coil?",
      "back": "It absorbs the voltage spike made when the coil current is cut off.",
      "lesson": "m06-l2"
    },
    {
      "id": "m06-c11",
      "front": "MOSFET terminals",
      "back": "Gate, drain and source.",
      "lesson": "m06-l2"
    },
    {
      "id": "m06-c12",
      "front": "Why handle MOSFETs with ESD care?",
      "back": "Their gate insulation is very thin and static can punch through it.",
      "lesson": "m06-l2"
    },
    {
      "id": "m06-c13",
      "front": "RC time constant formula",
      "back": "τ = R × C, with R in ohms and C in farads giving seconds.",
      "lesson": "m06-l3"
    },
    {
      "id": "m06-c14",
      "front": "Charging level after 1τ and 5τ",
      "back": "About 63% after 1τ and about 99% after 5τ.",
      "lesson": "m06-l3"
    },
    {
      "id": "m06-c15",
      "front": "Discharging level after 1τ and 3τ",
      "back": "About 37% after 1τ and about 5% after 3τ.",
      "lesson": "m06-l3"
    },
    {
      "id": "m06-c16",
      "front": "Symptoms of an ageing electrolytic capacitor",
      "back": "Bulging top, leaked residue, high ripple, random resets or noise. Capacitance falls and ESR rises.",
      "lesson": "m06-l3"
    },
    {
      "id": "m06-c17",
      "front": "What does ESR stand for?",
      "back": "Equivalent series resistance, the internal resistance of a capacitor.",
      "lesson": "m06-l3"
    },
    {
      "id": "m06-c18",
      "front": "Inverting op-amp gain",
      "back": "Gain = −Rf ÷ Rin.",
      "lesson": "m06-l4"
    },
    {
      "id": "m06-c19",
      "front": "Non-inverting op-amp gain",
      "back": "Gain = 1 + Rf ÷ Rg. It can never be below 1.",
      "lesson": "m06-l4"
    },
    {
      "id": "m06-c20",
      "front": "Two ideal op-amp rules with negative feedback",
      "back": "No current enters the inputs, and the output adjusts so both inputs are at the same voltage.",
      "lesson": "m06-l4"
    },
    {
      "id": "m06-c21",
      "front": "What does a comparator do?",
      "back": "Its output swings high or low depending on which input is larger.",
      "lesson": "m06-l4"
    },
    {
      "id": "m06-c22",
      "front": "NTC thermistor behaviour",
      "back": "Resistance falls as temperature rises.",
      "lesson": "m06-l5"
    },
    {
      "id": "m06-c23",
      "front": "Open fuser thermistor: how it reads",
      "back": "As a very cold roller, because the divider output rises towards the supply. Most machines flag it as a fault.",
      "lesson": "m06-l5"
    },
    {
      "id": "m06-c24",
      "front": "Optocoupler purpose",
      "back": "Passes a signal as light so two circuits stay electrically isolated.",
      "lesson": "m06-l5"
    },
    {
      "id": "m06-c25",
      "front": "Photo-interrupter false paper reading: first fix",
      "back": "Clean the slot and free the flag so the light path is clear.",
      "lesson": "m06-l5"
    },
    {
      "id": "m06-c26",
      "front": "Why resistance reads low in circuit",
      "back": "Other parts across it add parallel paths. Lift one leg for the true value.",
      "lesson": "m06-l6"
    },
    {
      "id": "m06-c27",
      "front": "Reference letters: Q, U, F, T",
      "back": "Transistor, integrated circuit, fuse, transformer.",
      "lesson": "m06-l6"
    },
    {
      "id": "m06-c28",
      "front": "Safe way to find a hot part",
      "back": "Use a non-contact infrared thermometer or thermal camera. Do not touch powered boards.",
      "lesson": "m06-l6"
    }
  ]
});

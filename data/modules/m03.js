OMM.registerModule({
  "id": "m03",
  "summary": "Explain how current, voltage and resistance behave in series, parallel and mains circuits, calculate with Ohm's law, and find electrical faults in office machines step by step.",
  "outcomes": [
    "Explain the meaning, symbol and unit of charge, current, voltage and resistance.",
    "Calculate current, voltage, resistance and power with Ohm's law and the power formulas.",
    "Calculate total resistance, current and voltage in series, parallel and voltage-divider circuits.",
    "Describe a single-phase mains supply, the roles of live, neutral and earth, and how fuses, breakers and transformers work.",
    "Identify the common electrical parts in an office machine and say how each is tested.",
    "Apply a safe, step-by-step method to find an open circuit or a short circuit."
  ],
  "cheatsheet": [
    "Ohm's law: V = I × R. Power: P = V × I = I² × R = V² ÷ R.",
    "Series: same current, voltages add, resistances add.",
    "Parallel: same voltage, currents add, total resistance is lower than the smallest branch.",
    "Two resistors in parallel: R = (R1 × R2) ÷ (R1 + R2).",
    "Peak voltage = RMS voltage × 1.414. Period T = 1 ÷ f.",
    "Open circuit: no current, full voltage across the break. Short circuit: very high current.",
    "Measure resistance only with the power off and the part isolated.",
    "Never replace a fuse with a bigger rating, a wire or a bypass.",
    "Half-split: test the middle of the path, then keep halving the faulty half."
  ],
  "lessons": [
    {
      "id": "m03-l1",
      "title": "Charge, current, voltage and resistance",
      "minutes": 7,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the four basic electrical quantities you meet in every office machine: charge, current, voltage and resistance. You need them before you can read a circuit or find a fault."
        },
        {
          "t": "h",
          "text": "Charge and current"
        },
        {
          "t": "p",
          "text": "All matter contains tiny particles called **electrons**. Each electron carries a negative **charge**. In a metal wire some electrons can move freely. When they drift in the same direction, an **electric current** flows."
        },
        {
          "t": "p",
          "text": "Current is the amount of charge passing a point each second. It is measured in **amperes** (A), often called amps. The symbol is `I`. Small currents use milliamperes: 1 A = 1,000 mA."
        },
        {
          "t": "h",
          "text": "Voltage"
        },
        {
          "t": "p",
          "text": "Electrons move only if something pushes them. This push is called **voltage**. It is measured in **volts** (V) and the symbol is `V`. A battery or a power supply creates voltage. Voltage is always measured between two points, for example across a component."
        },
        {
          "t": "p",
          "text": "Think of water in a pipe. Voltage is like the water pressure. Current is like the flow of water. Pressure can exist with no flow, for example when a tap is shut. In the same way, a voltage can be present across an open switch while no current flows."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Voltage is measured across a component. Current is measured through it. Keep these two ideas apart."
        },
        {
          "t": "h",
          "text": "Resistance"
        },
        {
          "t": "p",
          "text": "**Resistance** is how strongly a material opposes current. It is measured in **ohms** (Ω) and the symbol is `R`. A long, thin wire has more resistance than a short, thick one. Resistance turns electrical energy into heat. 1 kΩ = 1,000 Ω."
        },
        {
          "t": "ul",
          "items": [
            "A **conductor** lets current flow easily. Copper, aluminium, steel and brass are conductors.",
            "An **insulator** strongly opposes current. PVC, rubber, glass, dry paper and most plastics are insulators."
          ]
        },
        {
          "t": "p",
          "text": "Machine wiring is copper covered with plastic insulation. Dust and damp can make the surface of an insulator conduct a little. This is why you keep boards and connectors clean and dry."
        },
        {
          "t": "h",
          "text": "DC and AC"
        },
        {
          "t": "p",
          "text": "In **direct current** (DC) the charge flows in one direction only. Batteries and the output of power supplies inside machines give DC. DC has **polarity**: one terminal is positive (+) and the other is negative (−). Connecting a DC part the wrong way round can damage it."
        },
        {
          "t": "p",
          "text": "In **alternating current** (AC) the direction of flow reverses many times each second. Mains electricity is AC. Lesson 4 covers it."
        },
        {
          "t": "table",
          "head": [
            "Quantity",
            "Symbol",
            "Unit",
            "How you measure it"
          ],
          "rows": [
            [
              "Voltage",
              "V",
              "volt (V)",
              "Meter across the two points"
            ],
            [
              "Current",
              "I",
              "ampere (A)",
              "Meter in series, in the path of the current"
            ],
            [
              "Resistance",
              "R",
              "ohm (Ω)",
              "Meter across the part, power off, part isolated"
            ]
          ],
          "caption": "The three quantities you measure most often"
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A reading of −24 V on a DC meter is not a fault. It means the red probe is on the more negative point. Swap the probes and the reading becomes +24 V."
        }
      ]
    },
    {
      "id": "m03-l2",
      "title": "Ohm's law and power",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains Ohm's law and the power formulas. Together they let you predict what a circuit should measure, which is the key to finding faults."
        },
        {
          "t": "h",
          "text": "Ohm's law"
        },
        {
          "t": "p",
          "text": "For most resistors and wires, the current is proportional to the voltage across them. This relationship is called **Ohm's law**."
        },
        {
          "t": "formula",
          "text": "V = I × R",
          "caption": "Ohm's law: volts = amperes × ohms"
        },
        {
          "t": "p",
          "text": "If you know two of the three values, you can find the third. Rearranged, the law gives `I = V ÷ R` and `R = V ÷ I`."
        },
        {
          "t": "diagram",
          "name": "ohm-triangle"
        },
        {
          "t": "p",
          "text": "In the diagram, cover the quantity you want. The other two show the sum. Always check units first. Use volts, amperes and ohms. If a value is in mA or kΩ, convert it before you calculate."
        },
        {
          "t": "example",
          "title": "Current in a resistor",
          "steps": [
            "A 12 V supply is connected across a 240 Ω resistor. Find the current.",
            "Choose the formula: I = V ÷ R.",
            "Calculate: I = 12 ÷ 240 = 0.05 A.",
            "Convert: 0.05 A = 50 mA."
          ]
        },
        {
          "t": "h",
          "text": "Power and heat"
        },
        {
          "t": "p",
          "text": "**Power** is the rate at which electrical energy is used or turned into heat. It is measured in **watts** (W). The symbol is `P`."
        },
        {
          "t": "formula",
          "text": "P = V × I",
          "caption": "Power: watts = volts × amperes"
        },
        {
          "t": "p",
          "text": "Combining this with Ohm's law gives two more forms. They are useful when you know the resistance but not both of the other values."
        },
        {
          "t": "formula",
          "text": "P = I² × R, or P = V² ÷ R"
        },
        {
          "t": "example",
          "title": "Heat in a resistor",
          "steps": [
            "A 100 Ω resistor carries 0.2 A. Find the power.",
            "Use P = I² × R = 0.2 × 0.2 × 100.",
            "0.04 × 100 = 4 W.",
            "Check with the other method: V = I × R = 0.2 × 100 = 20 V. Then P = V × I = 20 × 0.2 = 4 W. The answers agree."
          ]
        },
        {
          "t": "example",
          "title": "Current and resistance of a heater",
          "steps": [
            "A heating element is marked 230 V and 1,150 W. Find its current at the rated voltage.",
            "Rearrange P = V × I to I = P ÷ V = 1,150 ÷ 230 = 5 A.",
            "Find the hot resistance: R = V ÷ I = 230 ÷ 5 = 46 Ω.",
            "A cold element usually reads a lower resistance than this, so a cold meter reading will not match 46 Ω exactly."
          ]
        },
        {
          "t": "h",
          "text": "Power ratings"
        },
        {
          "t": "p",
          "text": "Every resistor and every heater part has a **power rating**. This is the most heat it can lose without damage. Choose a rating at least twice the power the part will dissipate. For the 4 W resistor above, a 10 W part is a sensible choice."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Power resistors, heater lamps and fuser parts can burn skin. Let them cool before you touch them, even after the machine is switched off."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "When you replace a resistor, match the ohm value and use the same or a higher power rating. A lower-rated part may look fine for a short time and then overheat."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Check units before you calculate. 5 mA is 0.005 A, and 2 kΩ is 2,000 Ω."
        }
      ]
    },
    {
      "id": "m03-l3",
      "title": "Series and parallel circuits",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers series and parallel circuits, the two basic ways to connect components, and what a break or a short does in each."
        },
        {
          "t": "h",
          "text": "Series circuits"
        },
        {
          "t": "p",
          "text": "In a **series circuit** the components are joined end to end. There is only one path for the current. The rules are:"
        },
        {
          "t": "ul",
          "items": [
            "The current is the same at every point.",
            "The voltages across the components add up to the supply voltage.",
            "The total resistance is the sum of the resistances."
          ]
        },
        {
          "t": "formula",
          "text": "R_total = R1 + R2 + R3",
          "caption": "Resistors in series"
        },
        {
          "t": "diagram",
          "name": "series-parallel"
        },
        {
          "t": "h",
          "text": "Parallel circuits"
        },
        {
          "t": "p",
          "text": "In a **parallel circuit** the components are connected across the same two points. The current has more than one path. The rules are:"
        },
        {
          "t": "ul",
          "items": [
            "The voltage is the same across every branch.",
            "The branch currents add up to the supply current.",
            "The total resistance is lower than the smallest branch."
          ]
        },
        {
          "t": "formula",
          "text": "1 ÷ R_total = 1 ÷ R1 + 1 ÷ R2",
          "caption": "Resistors in parallel"
        },
        {
          "t": "p",
          "text": "For two resistors there is a shortcut: `R_total = (R1 × R2) ÷ (R1 + R2)`. Two equal resistors in parallel give half the value of one."
        },
        {
          "t": "example",
          "title": "Three resistors in series",
          "steps": [
            "Resistors of 100 Ω, 220 Ω and 680 Ω are in series across 12 V.",
            "Total resistance: 100 + 220 + 680 = 1,000 Ω.",
            "Current: I = 12 ÷ 1,000 = 0.012 A = 12 mA. This current flows through all three.",
            "Voltage across each: 12 mA × 100 Ω = 1.2 V; 12 mA × 220 Ω = 2.64 V; 12 mA × 680 Ω = 8.16 V.",
            "Check: 1.2 + 2.64 + 8.16 = 12 V, the supply voltage."
          ]
        },
        {
          "t": "example",
          "title": "Two resistors in parallel",
          "steps": [
            "A 60 Ω and a 30 Ω resistor are in parallel across 12 V.",
            "Total resistance: (60 × 30) ÷ (60 + 30) = 1,800 ÷ 90 = 20 Ω.",
            "Branch currents: 12 ÷ 60 = 0.2 A and 12 ÷ 30 = 0.4 A.",
            "Check: 0.2 + 0.4 = 0.6 A, and 12 ÷ 20 = 0.6 A."
          ]
        },
        {
          "t": "h",
          "text": "Voltage dividers"
        },
        {
          "t": "p",
          "text": "Two resistors in series across a supply form a **voltage divider**. The output is taken across the lower resistor. The formula is shown below. Control boards use dividers to read sensors such as thermistors."
        },
        {
          "t": "formula",
          "text": "V_out = V_in × R2 ÷ (R1 + R2)",
          "caption": "R2 is the resistor the output is taken across"
        },
        {
          "t": "p",
          "text": "Example: 12 V across R1 = 3 kΩ and R2 = 1 kΩ. V_out = 12 × 1,000 ÷ 4,000 = 3 V."
        },
        {
          "t": "h",
          "text": "Open and short circuits"
        },
        {
          "t": "p",
          "text": "An **open circuit** is a break in the path. No current flows through the break. In a series circuit, one open stops everything, and the full supply voltage appears across the break. In a parallel circuit, an open branch stops only that branch."
        },
        {
          "t": "p",
          "text": "A **short circuit** is an unwanted path of very low resistance. The current rises sharply, wires and parts overheat, and a fuse should blow. A short across one branch of a parallel circuit shorts the whole supply."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A short circuit can melt wires and start a fire. Never replace a blown fuse with a larger one or with a wire. Find out why it blew."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Series: one path, same current. Parallel: same voltage, more paths."
        }
      ]
    },
    {
      "id": "m03-l4",
      "title": "AC and mains supply",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers alternating current, the mains supply that powers office machines, and the devices that protect people and equipment."
        },
        {
          "t": "h",
          "text": "Alternating current"
        },
        {
          "t": "p",
          "text": "In AC the voltage rises, falls, reverses and rises again in a repeating wave. One complete wave is a **cycle**. The number of cycles each second is the **frequency**, measured in **hertz** (Hz). Mains is 50 Hz in many countries and 60 Hz in others."
        },
        {
          "t": "diagram",
          "name": "ac-waveform"
        },
        {
          "t": "formula",
          "text": "T = 1 ÷ f",
          "caption": "Period in seconds = 1 ÷ frequency"
        },
        {
          "t": "p",
          "text": "At 50 Hz one cycle takes 1 ÷ 50 = 0.02 s, which is 20 ms. At 60 Hz it takes about 16.7 ms."
        },
        {
          "t": "p",
          "text": "A supply marked 230 V is not at 230 V all the time. The wave climbs higher than that. The quoted figure is the **RMS** value. It is the AC value that heats a resistor as much as the same DC voltage would. The **peak** voltage is higher."
        },
        {
          "t": "formula",
          "text": "V_peak = V_RMS × 1.414",
          "caption": "For a sine wave, 1.414 is the square root of 2"
        },
        {
          "t": "p",
          "text": "A 230 V RMS supply peaks at about 230 × 1.414 ≈ 325 V. A 120 V RMS supply peaks at about 170 V. Capacitors and insulation must handle the peak, not just the RMS value."
        },
        {
          "t": "h",
          "text": "Live, neutral and earth"
        },
        {
          "t": "p",
          "text": "A **single-phase** supply to an office machine uses three conductors."
        },
        {
          "t": "diagram",
          "name": "live-neutral-earth"
        },
        {
          "t": "ul",
          "items": [
            "**Live** carries the supply voltage. It is dangerous to touch at 230 V or 120 V.",
            "**Neutral** is the return path for the current. Treat it as dangerous too, because a fault can make it live.",
            "**Earth** is a safety connection to the metal case. It carries no current in normal use."
          ]
        },
        {
          "t": "p",
          "text": "Wire colours differ between countries and have changed over time. Do not rely on colour alone. Follow local wiring rules and test."
        },
        {
          "t": "h",
          "text": "Fuses, breakers and earth"
        },
        {
          "t": "p",
          "text": "A **fuse** contains a thin wire that melts when the current is too high. A **circuit breaker** trips for the same reason and can be reset. A residual-current device (**RCD**, also called a GFCI in some countries) compares the current in the live and neutral wires. It trips if some current leaks to earth, for example through a person."
        },
        {
          "t": "p",
          "text": "If a live wire touches a metal case, the earth wire gives the fault current an easy path. The current is large, so the fuse or breaker opens quickly and the case is made safe. Without earth, the case stays live and waits for someone to touch it."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never remove, cut or bypass the earth pin on a plug. Never use a cable or plug with a damaged earth connection. Replace it."
        },
        {
          "t": "h",
          "text": "Transformers"
        },
        {
          "t": "p",
          "text": "A **transformer** changes an AC voltage using two coils on one iron core. The ratio of turns gives the ratio of voltages. A step-down transformer with 10 turns on the primary for each turn on the secondary changes 230 V into 23 V."
        },
        {
          "t": "p",
          "text": "Power stays about the same, so the secondary current is about ten times larger. A transformer works only on AC. The two coils are not electrically joined, so the output is isolated from the mains."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A meter on an AC range shows the RMS value. The peak voltage is about 1.4 times higher."
        }
      ]
    },
    {
      "id": "m03-l5",
      "title": "Electrical components in office machines",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the electrical parts you find again and again inside copiers, printers and cash registers, what each one does, and how it usually fails."
        },
        {
          "t": "h",
          "text": "Switches and interlocks"
        },
        {
          "t": "p",
          "text": "A **switch** opens or closes a path. A **microswitch** is a small switch operated by a lever, used to detect paper, covers and positions. An **interlock** is a switch that cuts power to a hazardous part when a door or cover is opened. Interlocks protect you from moving parts, high voltage and laser light."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never bypass, tape down or jumper an interlock to make a machine run with a cover open. If you must test with a cover open, follow the service manual and keep clear of the hazards."
        },
        {
          "t": "h",
          "text": "Coils: relays, solenoids, clutches and motors"
        },
        {
          "t": "p",
          "text": "A **relay** uses a small coil current to switch contacts that can carry a larger current. A **solenoid** uses a coil to pull a plunger. It moves gates and paper stops. A **magnetic clutch** uses a coil to connect a drive to a shaft. A **motor** turns electrical energy into rotation."
        },
        {
          "t": "p",
          "text": "All of these contain coils of wire. A coil can fail open, so no current flows, or can have shorted turns, so it overheats. When current to a coil is cut, the coil produces a voltage spike. Drive circuits often include a diode across the coil to absorb it."
        },
        {
          "t": "h",
          "text": "Temperature parts"
        },
        {
          "t": "p",
          "text": "A **thermistor** is a resistor whose value changes with temperature. An **NTC** thermistor falls in resistance as it gets hotter. A **PTC** thermistor rises. Control boards read the thermistor to measure fuser temperature."
        },
        {
          "t": "p",
          "text": "A **thermostat** opens when too hot and closes again when cool. A **thermal fuse** opens once when too hot and does not reset. It is a last line of defence if the control fails."
        },
        {
          "t": "h",
          "text": "Capacitors and inductors"
        },
        {
          "t": "p",
          "text": "A **capacitor** stores electric charge. It blocks steady DC but passes changing signals. Large capacitors in power supplies can keep a dangerous charge after the machine is unplugged. An **inductor** is a coil that opposes changes in current and stores energy in a magnetic field. It is used in filters and power supplies."
        },
        {
          "t": "table",
          "head": [
            "Part",
            "Job",
            "Typical fault",
            "Test with power off"
          ],
          "rows": [
            [
              "Switch or microswitch",
              "Opens or closes a path",
              "Dirty, worn or broken contacts",
              "Continuity: near 0 Ω closed, open reading when open"
            ],
            [
              "Relay",
              "Coil switches contacts",
              "Open coil; burnt or stuck contacts",
              "Coil resistance; contacts when energised"
            ],
            [
              "Solenoid or clutch",
              "Coil pulls or connects",
              "Open coil; sticking plunger",
              "Coil resistance against a known-good part"
            ],
            [
              "Motor",
              "Turns electricity into rotation",
              "Worn brushes, open winding, seized bearing",
              "Winding resistance; turn by hand"
            ],
            [
              "Thermistor",
              "Senses temperature",
              "Open or drifting value",
              "Resistance at a known temperature"
            ],
            [
              "Thermal fuse",
              "One-shot overheat cut-out",
              "Open after overheating",
              "Continuity, then find why it opened"
            ]
          ],
          "caption": "Common parts, faults and checks"
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Coil resistance, thermistor values and motor winding values vary between machines. Compare with the service manual or a known-good part. Do not guess."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A thermal fuse that has opened means something overheated. Find the cause, then fit the same type and rating."
        }
      ]
    },
    {
      "id": "m03-l6",
      "title": "Systematic electrical fault diagnosis",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson gives a step-by-step method for finding electrical faults, so you test with a plan instead of changing parts at random."
        },
        {
          "t": "h",
          "text": "The method"
        },
        {
          "t": "ol",
          "items": [
            "Gather information. What is the symptom? When did it start? What changed? Is the fault constant or intermittent?",
            "Inspect safely. Look for burnt parts, loose connectors, damaged wires, damp and dust, with the machine unplugged.",
            "Form a hypothesis. List the likely causes, starting with the simplest and most probable.",
            "Test. Make a measurement that proves or rules out your hypothesis.",
            "Repair or replace the cause, not only the symptom.",
            "Verify. Run the machine and check the original fault is gone and no new fault appeared.",
            "Record what you found, what you changed and the readings."
          ]
        },
        {
          "t": "diagram",
          "name": "diagnosis-loop"
        },
        {
          "t": "h",
          "text": "Open or short?"
        },
        {
          "t": "table",
          "head": [
            "Sign",
            "Open circuit",
            "Short circuit"
          ],
          "rows": [
            [
              "Current",
              "None",
              "Very high"
            ],
            [
              "Fuse or breaker",
              "Does not blow",
              "Often blows or trips"
            ],
            [
              "Voltage",
              "Full supply across the break",
              "Little or no voltage across the short"
            ],
            [
              "Resistance (power off)",
              "Very high, often shown as overrange",
              "Near 0 Ω where it should be higher"
            ]
          ],
          "caption": "Telling the two basic faults apart"
        },
        {
          "t": "h",
          "text": "Half-split and voltage drop"
        },
        {
          "t": "p",
          "text": "The **half-split method** finds a fault in a long path with few measurements. Test the middle. If the signal is good there, the fault is after it. If it is missing, the fault is before it. Keep halving the faulty half."
        },
        {
          "t": "diagram",
          "name": "half-split"
        },
        {
          "t": "example",
          "title": "Half-split on a 24 V path",
          "steps": [
            "A motor is dead. The 24 V path has eight test points, P1 at the supply to P8 at the motor.",
            "Measure at P4: 24 V is present. The fault is after P4.",
            "Measure at P6: 0 V. The fault is between P4 and P6.",
            "Measure at P5: 24 V. The fault is between P5 and P6. Three measurements found the section instead of up to seven."
          ]
        },
        {
          "t": "p",
          "text": "**Voltage-drop testing** finds poor connections while the circuit works. Measure across a switch, connector or wire while current flows. A good closed part drops almost 0 V. A reading near the full supply across a switch that should be closed shows that the contacts are not conducting."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Measure resistance only with the power off, the part isolated and any capacitors discharged. Do live voltage tests only where the manual says they are needed, on low-voltage circuits where possible, with one hand and insulated probes."
        },
        {
          "t": "h",
          "text": "Comparing and verifying"
        },
        {
          "t": "p",
          "text": "A known-good machine or part is a powerful reference. Compare readings, wiring and settings. Swap a suspect part with a good one only after you have a reason to suspect it. If a new fuse blows again at once, do not fit a larger one. There is a short or overload to find."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Change one thing at a time. If you change two parts and the fault clears, you will not know which one was faulty."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Test, do not guess. Every part you replace should be backed by a measurement or a clear observation."
        }
      ]
    }
  ],
  "practical": {
    "title": "Measure a resistor network and find an open-circuit fault",
    "objective": "Predict, then measure, the voltages and current in a three-resistor series circuit, then use voltage readings to find an inserted open-circuit fault.",
    "time": "45 minutes",
    "tools": [
      "Digital multimeter with fused current range",
      "Low-voltage DC supply set to 12 V with current limit, or a battery trainer board",
      "Resistors: 100 Ω, 220 Ω and 680 Ω, each rated 0.5 W or more",
      "Breadboard or terminal block, and short insulated leads",
      "Pen and the results table (draw one with columns Predicted and Measured)"
    ],
    "safety": [
      "Work only on a low-voltage DC training circuit of 12 V or less. Do not use mains power for this task.",
      "Switch the supply off before you build or change the circuit.",
      "Set the current limit on the supply to 100 mA if it has one.",
      "Use a meter with a fused current range. After a current reading, return the leads and range to voltage immediately.",
      "Keep the work area dry and clear. Do not touch bare resistor leads while the supply is on."
    ],
    "steps": [
      "Calculate and write down the predicted values: total resistance, the current, and the voltage across each resistor for a 12 V supply.",
      "With the supply off, build the three resistors in series: 100 Ω, 220 Ω and 680 Ω.",
      "Set the meter to resistance and measure each resistor on its own, out of circuit. Record each value.",
      "Measure the total resistance of the whole series chain with the supply off. Record it.",
      "Set the supply to 12 V and switch it on. Set the meter to DC voltage and measure the supply voltage at the circuit.",
      "Measure the voltage across each resistor in turn. Record all three and add them up.",
      "Switch off. Break the circuit at one point, put the meter on its milliamp range in series, switch on and read the current. Switch off and restore the link.",
      "Set the meter back to voltage. Compare predicted and measured values and note any difference over 5%.",
      "Switch off. Ask a partner to create an open-circuit fault in the chain without telling you where. Working alone, remove one lead of any resistor and look away from your notes.",
      "Switch on. Measure the voltage across each resistor and across each joint. The open point is the one that shows nearly the full 12 V.",
      "Switch off and unplug the supply. Repair the break and check the current again.",
      "Write a short fault report: symptom, readings, cause found, repair and the result."
    ],
    "checks": [
      "I can predict the current in a series circuit from the supply voltage and total resistance.",
      "I can show that the voltages across series resistors add up to the supply voltage.",
      "I can connect a meter in series for current and return it to voltage afterwards.",
      "I can explain why an open circuit shows the full supply voltage across the break.",
      "I can find an open-circuit fault using voltage readings and write down what I did."
    ]
  },
  "quiz": [
    {
      "id": "m03-q01",
      "q": "Which unit is used to measure electric current?",
      "options": [
        "volt (V)",
        "ampere (A)",
        "ohm (Ω)",
        "watt (W)"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m03-l1",
      "explain": "Current is the rate of flow of charge, and its unit is the ampere. The volt is the unit of electrical push, which is often confused with flow."
    },
    {
      "id": "m03-q02",
      "q": "Which material is the best choice for the outer covering of a mains cable?",
      "options": [
        "Bare copper",
        "Thin aluminium foil",
        "PVC or a similar plastic",
        "Steel wire"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m03-l1",
      "explain": "The covering must be an insulator so that current stays in the wire and people cannot touch live metal. Copper is a good conductor, which makes it right for the wire inside but wrong for the covering."
    },
    {
      "id": "m03-q03",
      "q": "Which statement describes direct current (DC)?",
      "options": [
        "Charge flows in one direction only",
        "The direction of flow reverses many times each second",
        "It can only come from a battery, never from a power supply",
        "The voltage is always exactly zero"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m03-l1",
      "explain": "DC flows one way. Batteries give DC, but so do the power supplies inside machines, which change mains AC into DC. Reversing flow describes AC."
    },
    {
      "id": "m03-q04",
      "q": "A thin wire carries a large current and becomes hot. What is the main reason?",
      "options": [
        "The wire is storing charge like a capacitor",
        "Current is used up as it flows along the wire",
        "The voltage of the wire has become negative",
        "The wire's resistance changes electrical energy into heat"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m03-l1",
      "explain": "Every conductor has some resistance, and resistance turns electrical energy into heat. Current is not used up; the same current leaves the wire that enters it."
    },
    {
      "id": "m03-q05",
      "q": "You touch the red probe to the negative terminal and the black probe to the positive terminal of a 24 V DC supply. The meter shows −24 V. What does this mean?",
      "options": [
        "The supply is faulty and is producing a negative voltage instead of 24 V",
        "The meter is faulty and must be replaced before any more readings",
        "The probes are reversed against the polarity; the supply is still 24 V",
        "The supply is really AC, because the sign of the reading has changed"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m03-l1",
      "explain": "The minus sign only shows that the red probe is on the more negative point. The size of the reading, 24 V, is correct. A real AC supply would give a changing reading on a DC range, not a steady negative one."
    },
    {
      "id": "m03-q06",
      "q": "Which formula gives power when voltage and current are known?",
      "options": [
        "P = V × I (volts times amperes)",
        "P = V ÷ I (volts divided by amperes)",
        "P = I ÷ V (amperes divided by volts)",
        "P = V + I (volts added to amperes)"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m03-l2",
      "explain": "Power in watts is volts multiplied by amperes. Voltage divided by current gives resistance, which is a different quantity."
    },
    {
      "id": "m03-q07",
      "q": "A resistor has a fixed resistance. The voltage across it is doubled. What happens to the current?",
      "options": [
        "It halves",
        "It stays the same",
        "It becomes four times larger",
        "It doubles"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m03-l2",
      "explain": "With R fixed, I = V ÷ R, so current is proportional to voltage and doubles. It is the power that becomes four times larger, which is why four times is a tempting answer."
    },
    {
      "id": "m03-q08",
      "q": "A 12 V supply is connected across a 240 Ω resistor. What is the current?",
      "options": [
        "500 mA",
        "50 mA",
        "20 A",
        "2.88 A"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m03-l2",
      "explain": "I = V ÷ R = 12 ÷ 240 = 0.05 A, which is 50 mA. Multiplying 12 by 240 or dividing the other way round gives the wrong values."
    },
    {
      "id": "m03-q09",
      "q": "A heating element is marked 230 V and 1,150 W. What current does it draw at its rated voltage?",
      "options": [
        "0.2 A",
        "2.5 A",
        "5 A",
        "50 A"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m03-l2",
      "explain": "I = P ÷ V = 1,150 ÷ 230 = 5 A. The value 0.2 A comes from dividing the wrong way round, 230 ÷ 1,150."
    },
    {
      "id": "m03-q10",
      "q": "A 100 Ω resistor carries a current of 0.2 A. How much power does it dissipate?",
      "options": [
        "20 W",
        "4 W",
        "2 W",
        "0.4 W"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m03-l2",
      "explain": "P = I² × R = 0.04 × 100 = 4 W. The value 20 is the voltage across the resistor in volts, not the power."
    },
    {
      "id": "m03-q11",
      "q": "A resistor will dissipate 3 W in a repair. Which power rating is the best choice?",
      "options": [
        "A rating clearly above 3 W, such as 10 W",
        "Exactly 3 W, because that matches the load",
        "1 W, because a smaller part runs cooler",
        "Any rating, because only the ohm value matters"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m03-l2",
      "explain": "A part should have a safety margin of at least twice the expected power. A part rated exactly at the load runs very hot, and a smaller part overheats because it cannot lose the heat."
    },
    {
      "id": "m03-q12",
      "q": "In a series circuit, which quantity is the same at every component?",
      "options": [
        "Voltage",
        "Resistance",
        "Power",
        "Current"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m03-l3",
      "explain": "There is only one path, so the same current passes through every component. The voltage is shared between them in proportion to their resistances."
    },
    {
      "id": "m03-q13",
      "q": "You connect a second resistor in parallel with an existing resistor. What happens to the total resistance?",
      "options": [
        "It falls, and is lower than the smaller resistor",
        "It rises, because there is more material",
        "It stays the same",
        "It becomes the sum of the two values"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m03-l3",
      "explain": "A second path makes it easier for current to flow, so the total resistance goes down. Adding the two values is the rule for series circuits, not parallel."
    },
    {
      "id": "m03-q14",
      "q": "Resistors of 100 Ω, 220 Ω and 680 Ω are connected in series across 12 V. What is the current?",
      "options": [
        "120 mA",
        "1.2 A",
        "12 mA",
        "0.12 mA"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m03-l3",
      "explain": "The total resistance is 100 + 220 + 680 = 1,000 Ω, so I = 12 ÷ 1,000 = 0.012 A, which is 12 mA. The other values come from slips in the decimal point."
    },
    {
      "id": "m03-q15",
      "q": "A 60 Ω and a 30 Ω resistor are connected in parallel. What is the total resistance?",
      "options": [
        "90 Ω",
        "20 Ω",
        "45 Ω",
        "1,800 Ω"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m03-l3",
      "explain": "The product over the sum gives (60 × 30) ÷ (60 + 30) = 1,800 ÷ 90 = 20 Ω. The value 90 Ω is the series total, and 45 Ω is just the average, which is not correct."
    },
    {
      "id": "m03-q16",
      "q": "A voltage divider has 3 kΩ at the top and 1 kΩ at the bottom, across 12 V. What is the voltage across the 1 kΩ resistor?",
      "options": [
        "9 V",
        "4 V",
        "6 V",
        "3 V"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m03-l3",
      "explain": "The 1 kΩ resistor is one quarter of the 4 kΩ total, so it takes one quarter of 12 V, which is 3 V. The value 9 V is the voltage across the 3 kΩ resistor."
    },
    {
      "id": "m03-q17",
      "q": "Ten small lamps are wired in series. One lamp filament breaks open. What happens?",
      "options": [
        "Only that lamp goes out",
        "The other nine lamps become brighter",
        "All ten lamps go out, because the only path is broken",
        "The lamps go out one at a time over a few minutes"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m03-l3",
      "explain": "In a series circuit one open stops the current everywhere. Only in a parallel circuit would the other lamps keep working."
    },
    {
      "id": "m03-q18",
      "q": "Which conductor connects the metal case of a machine to earth so that a fault makes the fuse operate?",
      "options": [
        "Live",
        "Earth",
        "Neutral",
        "Any of the three"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m03-l4",
      "explain": "The earth conductor carries no current in normal use and gives fault current a path. Neutral carries the normal return current, so it is not a protective connection."
    },
    {
      "id": "m03-q19",
      "q": "A mains supply is rated 230 V RMS. What is its approximate peak voltage?",
      "options": [
        "325 V",
        "230 V",
        "460 V",
        "163 V"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m03-l4",
      "explain": "Peak = RMS × 1.414 = 230 × 1.414 ≈ 325 V. The value 163 V comes from dividing by 1.414 instead of multiplying."
    },
    {
      "id": "m03-q20",
      "q": "What is the time for one cycle of a 50 Hz supply?",
      "options": [
        "50 ms",
        "5 ms",
        "2 ms",
        "20 ms"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m03-l4",
      "explain": "T = 1 ÷ f = 1 ÷ 50 = 0.02 s, which is 20 ms. The value 50 ms is a common mistake that comes from reusing the frequency number."
    },
    {
      "id": "m03-q21",
      "q": "What is the main job of the earth connection in a metal-cased machine?",
      "options": [
        "It carries the normal load current back to the supply",
        "It raises the voltage so the machine runs faster",
        "It lets a fault current flow so the fuse or breaker trips quickly",
        "It makes a fuse unnecessary"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m03-l4",
      "explain": "If a live wire touches the case, the earth wire allows a large current that opens the protective device. Neutral carries the normal return current, and earth does not replace the need for a fuse."
    },
    {
      "id": "m03-q22",
      "q": "A copier is marked 1,200 W at 230 V. What is the approximate running current?",
      "options": [
        "5.2 A",
        "0.19 A",
        "276 A",
        "52 A"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m03-l4",
      "explain": "I = P ÷ V = 1,200 ÷ 230 ≈ 5.2 A. The value 0.19 A comes from dividing the wrong way round."
    },
    {
      "id": "m03-q23",
      "q": "What is the job of a safety interlock switch on a cover or door?",
      "options": [
        "To count how often the cover is opened",
        "To make the cover easier to open",
        "To cut power to hazardous parts when the cover is opened",
        "To stop the machine from being switched off"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m03-l5",
      "explain": "An interlock removes power from moving parts, high voltage or laser light when a cover opens. A switch that counts openings is a different kind of sensor."
    },
    {
      "id": "m03-q24",
      "q": "How does an NTC thermistor behave as its temperature rises?",
      "options": [
        "Its resistance rises",
        "Its resistance stays the same",
        "It generates its own voltage",
        "Its resistance falls"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m03-l5",
      "explain": "NTC means negative temperature coefficient, so resistance falls as the part gets hotter. A PTC thermistor does the opposite, which is why the two are easy to mix up."
    },
    {
      "id": "m03-q25",
      "q": "What is the difference between a relay and a solenoid?",
      "options": [
        "A relay uses a coil to move a plunger, and a solenoid uses it to switch contacts",
        "A relay uses a coil to switch contacts; a solenoid uses one to move a plunger",
        "A relay works only on AC supplies, and a solenoid works only on DC supplies",
        "They are two names for the same part, used by different manufacturers"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m03-l5",
      "explain": "Both are coils, but a relay uses the magnetic pull to close or open electrical contacts, while a solenoid uses it to give mechanical movement. The reversed statement swaps their jobs."
    },
    {
      "id": "m03-q26",
      "q": "The thermal fuse in a fuser has opened, and the heater does not warm up. What is the correct next step?",
      "options": [
        "Find out why it overheated, then fit the same type and rating of thermal fuse",
        "Fit a wire link across the thermal fuse so the fuser works again straight away",
        "Fit a thermal fuse with a higher temperature rating to avoid repeat failures",
        "Press the reset button on the fuse and test the fuser again"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m03-l5",
      "explain": "A thermal fuse opens once because something overheated, so the cause must be found. A link or a higher rating removes the protection, and a thermal fuse has no reset."
    },
    {
      "id": "m03-q27",
      "q": "With the power off and the relay isolated, a meter on resistance shows overrange across the relay coil. What does this suggest?",
      "options": [
        "The coil is healthy, because a high reading means low current",
        "The coil winding is open circuit",
        "The relay contacts are welded together",
        "The coil has shorted turns"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m03-l5",
      "explain": "A good coil has a measurable resistance, so an overrange reading means the winding is broken. Welded contacts would not change the reading across the coil, and shorted turns would give a lower value."
    },
    {
      "id": "m03-q28",
      "q": "What is the first step in systematic fault diagnosis?",
      "options": [
        "Replace the most expensive part",
        "Swap boards until the fault clears",
        "Measure every voltage in the machine",
        "Gather information about the symptom and what changed"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m03-l6",
      "explain": "Good information narrows the search before you touch anything. Swapping parts first costs time and money, and can hide the real cause."
    },
    {
      "id": "m03-q29",
      "q": "In a path with eight test points, you measure at the middle and find the signal is present there but missing at the end. Using the half-split method, what do you do next?",
      "options": [
        "Test the second half of the path",
        "Test the first half of the path",
        "Replace the first part in the path",
        "Conclude that nothing more can be learned"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m03-l6",
      "explain": "A good signal at the middle means the first half works, so the fault must be after that point. Each test halves the section you still have to search."
    },
    {
      "id": "m03-q30",
      "q": "A switch should be closed and feeds a 24 V DC load that is not working. The meter across the switch contacts reads 24 V. What is the likely cause?",
      "options": [
        "The load is short-circuited",
        "The switch is working correctly",
        "The switch is not conducting, so it is open",
        "The supply is giving double its rated voltage"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m03-l6",
      "explain": "A good closed switch drops almost 0 V across it. Seeing the full supply across it means the contacts are open and no current can reach the load. A shorted load would draw current and lower the voltage across the switch."
    },
    {
      "id": "m03-q31",
      "q": "A fuse in a 24 V supply blows every time the machine is switched on, even after you fit a new fuse of the same rating. What does this point to?",
      "options": [
        "An open circuit somewhere in the load",
        "A short circuit or overload drawing too much current",
        "A fuse rating that is too low, so a larger one should be fitted",
        "A high-resistance fault that reduces the current"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m03-l6",
      "explain": "A fuse blows when current is too high, which a short circuit or overload causes. An open circuit or high resistance lowers current and would not blow it. A larger fuse would hide the fault and risk fire."
    },
    {
      "id": "m03-q32",
      "q": "Why must you measure resistance only with the power off and the part isolated?",
      "options": [
        "The meter needs to be set to a higher voltage range to measure resistance",
        "Resistance cannot be measured on DC circuits, only on AC circuits",
        "The meter display shows only whole numbers when the power is switched on",
        "The meter sends its own test current, so live voltage gives false readings"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m03-l6",
      "explain": "A resistance range supplies a small test current and expects no other voltage. Live voltage or other parallel paths in the circuit give wrong readings and can damage the meter."
    }
  ],
  "cards": [
    {
      "id": "m03-c01",
      "front": "What is electric current, and what is its unit?",
      "back": "The flow of electric charge. It is measured in amperes (A). The symbol is I.",
      "lesson": "m03-l1"
    },
    {
      "id": "m03-c02",
      "front": "What is voltage?",
      "back": "The electrical push that makes charge flow, measured between two points in volts (V). The symbol is V.",
      "lesson": "m03-l1"
    },
    {
      "id": "m03-c03",
      "front": "What is resistance, and what is its unit?",
      "back": "How strongly a part opposes current. It is measured in ohms (Ω). The symbol is R.",
      "lesson": "m03-l1"
    },
    {
      "id": "m03-c04",
      "front": "Conductor or insulator: copper, PVC, glass, brass?",
      "back": "Copper and brass are conductors. PVC and glass are insulators.",
      "lesson": "m03-l1"
    },
    {
      "id": "m03-c05",
      "front": "How do you place a meter to measure voltage, and how to measure current?",
      "back": "Voltage: across the component, in parallel. Current: in series, so the current passes through the meter.",
      "lesson": "m03-l1"
    },
    {
      "id": "m03-c06",
      "front": "State Ohm's law and its two rearranged forms.",
      "back": "V = I × R. Rearranged: I = V ÷ R and R = V ÷ I.",
      "lesson": "m03-l2"
    },
    {
      "id": "m03-c07",
      "front": "Give three forms of the power formula.",
      "back": "P = V × I, P = I² × R and P = V² ÷ R. Power is measured in watts (W).",
      "lesson": "m03-l2"
    },
    {
      "id": "m03-c08",
      "front": "Convert 250 mA to amperes.",
      "back": "0.25 A. Divide milliamperes by 1,000.",
      "lesson": "m03-l2"
    },
    {
      "id": "m03-c09",
      "front": "What power rating should you choose for a resistor that dissipates 4 W?",
      "back": "At least twice the dissipated power, so 8 W or more. A 10 W part is a common choice.",
      "lesson": "m03-l2"
    },
    {
      "id": "m03-c10",
      "front": "How do you find total resistance in series?",
      "back": "Add the resistances: R_total = R1 + R2 + R3.",
      "lesson": "m03-l3"
    },
    {
      "id": "m03-c11",
      "front": "Shortcut for two resistors in parallel?",
      "back": "R_total = (R1 × R2) ÷ (R1 + R2). The result is lower than the smaller resistor.",
      "lesson": "m03-l3"
    },
    {
      "id": "m03-c12",
      "front": "Two equal resistors are in parallel. What is the total?",
      "back": "Half the value of one resistor. For example, two 100 Ω resistors give 50 Ω.",
      "lesson": "m03-l3"
    },
    {
      "id": "m03-c13",
      "front": "What is the voltage divider formula?",
      "back": "V_out = V_in × R2 ÷ (R1 + R2), where R2 is the resistor the output is taken across.",
      "lesson": "m03-l3"
    },
    {
      "id": "m03-c14",
      "front": "What is an open circuit?",
      "back": "A break in the path. No current flows, and the supply voltage appears across the break.",
      "lesson": "m03-l3"
    },
    {
      "id": "m03-c15",
      "front": "What is a short circuit?",
      "back": "An unwanted path of very low resistance. It causes a large current, overheating and a blown fuse.",
      "lesson": "m03-l3"
    },
    {
      "id": "m03-c16",
      "front": "What is the formula for the period of an AC wave?",
      "back": "T = 1 ÷ f. At 50 Hz the period is 20 ms. At 60 Hz it is about 16.7 ms.",
      "lesson": "m03-l4"
    },
    {
      "id": "m03-c17",
      "front": "How do RMS and peak voltage relate for a sine wave?",
      "back": "Peak = RMS × 1.414. A 230 V RMS supply peaks at about 325 V.",
      "lesson": "m03-l4"
    },
    {
      "id": "m03-c18",
      "front": "What do live, neutral and earth do in a single-phase supply?",
      "back": "Live carries the supply voltage. Neutral is the return path. Earth is a safety connection that carries no current normally.",
      "lesson": "m03-l4"
    },
    {
      "id": "m03-c19",
      "front": "What does an RCD (or GFCI) do?",
      "back": "It trips when the live and neutral currents differ, which means some current is leaking to earth.",
      "lesson": "m03-l4"
    },
    {
      "id": "m03-c20",
      "front": "A transformer has a 10:1 turns ratio. 230 V goes in. What comes out, and what happens to current?",
      "back": "About 23 V out. The secondary current is about ten times larger, because power stays about the same.",
      "lesson": "m03-l4"
    },
    {
      "id": "m03-c21",
      "front": "What does an interlock do?",
      "back": "It cuts power to hazardous parts when a cover or door is opened. Never bypass it.",
      "lesson": "m03-l5"
    },
    {
      "id": "m03-c22",
      "front": "What is the difference between a thermostat and a thermal fuse?",
      "back": "A thermostat opens when hot and recloses when cool. A thermal fuse opens once and must be replaced.",
      "lesson": "m03-l5"
    },
    {
      "id": "m03-c23",
      "front": "NTC thermistor: what happens as it gets hotter?",
      "back": "Its resistance falls. A PTC thermistor rises in resistance when hotter.",
      "lesson": "m03-l5"
    },
    {
      "id": "m03-c24",
      "front": "Why do large capacitors need care after unplugging?",
      "back": "They can hold a charge and give a shock. Discharge them safely as the manual describes.",
      "lesson": "m03-l5"
    },
    {
      "id": "m03-c25",
      "front": "What are the seven steps of the fault-finding method?",
      "back": "Gather information, inspect, hypothesise, test, repair, verify and record.",
      "lesson": "m03-l6"
    },
    {
      "id": "m03-c26",
      "front": "What is the half-split method?",
      "back": "Test the middle of the path. A good signal there puts the fault after it. A missing signal puts it before. Halve the faulty half again.",
      "lesson": "m03-l6"
    },
    {
      "id": "m03-c27",
      "front": "Fuse keeps blowing. What does it point to, and what must you not do?",
      "back": "A short circuit or overload. Do not fit a bigger fuse or a wire; find the cause.",
      "lesson": "m03-l6"
    },
    {
      "id": "m03-c28",
      "front": "What reading do you expect across a good closed switch carrying load current?",
      "back": "Almost 0 V. A reading near the full supply means the contacts are not conducting.",
      "lesson": "m03-l6"
    }
  ]
});

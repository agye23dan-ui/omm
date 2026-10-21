OMM.registerModule({
  "id": "m07",
  "summary": "Explain how linear and switch-mode power supplies work, calculate voltages and ripple, find common supply faults, and test and repair supplies and imaging high-voltage circuits safely.",
  "outcomes": [
    "Name the DC rails in an office machine and say what each one normally powers.",
    "Calculate transformer output, rectified peak voltage and ripple for a linear supply.",
    "Describe the stages of a switch-mode supply and explain how PWM and optocoupler feedback hold the output steady.",
    "Diagnose a blown fuse, a dead supply, hiccup mode and high ripple with a safe test sequence.",
    "Describe the high-voltage supplies used for imaging and the precautions needed around them.",
    "Test and repair a mains-powered supply safely, using like-for-like safety parts and finishing with the required checks."
  ],
  "cheatsheet": [
    "Rectified peak = RMS × √2 minus diode drops. A silicon bridge drops about 1.4 V (two diodes).",
    "Ripple frequency: half-wave = mains frequency. Full-wave = twice mains (100 Hz on 50 Hz, 120 Hz on 60 Hz).",
    "Ripple voltage (approx.) ΔV = I ÷ (f × C). More load or a smaller capacitor means more ripple.",
    "Linear regulator heat: P = (Vin − Vout) × I.",
    "Transformer: Vs = Vp × (Ns ÷ Np). It also isolates the secondary from the mains.",
    "Rectified 230 V mains is about 325 V DC. Rectified 120 V mains is about 170 V DC.",
    "Switch-mode supply: higher frequency means a smaller transformer. Opto feedback crosses the barrier.",
    "Find out why a fuse blew before you replace it. Same type and same rating, never higher.",
    "Primary-side bulk capacitor can stay charged after unplugging. Discharge it, then check with a meter.",
    "Replace X, Y and other safety parts only with the same safety-rated type."
  ],
  "lessons": [
    {
      "id": "m07-l1",
      "title": "The role of power supplies in office machines",
      "minutes": 7,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains what a power supply does inside an office machine, which DC voltages you will meet, and why most machines contain more than one supply."
        },
        {
          "t": "h",
          "text": "From mains to DC"
        },
        {
          "t": "p",
          "text": "The wall socket gives **AC** (alternating current): about 230 V at 50 Hz in many countries and 120 V at 60 Hz in others. The electronics inside a machine need low-voltage **DC** (direct current). A **power supply** converts one into the other and keeps the output steady when the load changes."
        },
        {
          "t": "p",
          "text": "Not every load uses DC. In most copiers and laser printers the fuser heater runs straight from the mains through a switching device. The DC supply only controls that switch."
        },
        {
          "t": "h",
          "text": "Common DC rails"
        },
        {
          "t": "p",
          "text": "A **rail** is one DC output of a supply, such as the 5 V rail. Machines use several rails because different parts need different voltages."
        },
        {
          "t": "diagram",
          "name": "power-rails-map"
        },
        {
          "t": "table",
          "head": [
            "Rail",
            "Typically powers"
          ],
          "rows": [
            [
              "3.3 V or lower",
              "Processors, memory and other logic chips"
            ],
            [
              "5 V",
              "Logic, sensors, the control panel, USB ports"
            ],
            [
              "12 V",
              "Fans, some small motors, analogue circuits"
            ],
            [
              "24 V",
              "Motors, solenoids, clutches, relays"
            ]
          ],
          "caption": "Typical uses only. Rails differ between machines, so check the manufacturer's service manual."
        },
        {
          "t": "h",
          "text": "Why there is more than one supply"
        },
        {
          "t": "ul",
          "items": [
            "Motors and solenoids draw large surge currents and create electrical noise. Logic circuits need a clean, steady supply.",
            "Imaging needs high voltages, from a separate high-voltage supply (see lesson 5).",
            "A 24 V rail is often routed through door interlock switches. Opening a door then removes power from moving parts.",
            "Separate supplies make faults easier to find. If only the 24 V rail is missing, you can look at that section first."
          ]
        },
        {
          "t": "example",
          "title": "Adding up the load on the rails",
          "steps": [
            "A machine draws 2 A at 5 V, 1 A at 12 V and 1.5 A at 24 V.",
            "Power = V × I for each rail: 5 × 2 = 10 W, 12 × 1 = 12 W, 24 × 1.5 = 36 W.",
            "Total output power = 10 + 12 + 36 = 58 W.",
            "If the supply is 80% efficient, it draws 58 ÷ 0.8 = 72.5 W from the mains. The difference is lost as heat."
          ]
        },
        {
          "t": "h",
          "text": "Standby supplies"
        },
        {
          "t": "p",
          "text": "Many machines are never fully off. A **standby supply** keeps a small control circuit powered whenever the cord is plugged in. This lets the panel, a timer or a network signal wake the machine. The standby supply is usually small and always on, even when the main supply is not running."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A machine switched off at the panel or soft button is **not isolated**. Mains voltage can still be present inside. Unplug the power cord before you remove covers."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A power supply converts, steadies and usually isolates. Work out which rail is missing before you decide which part to test."
        }
      ]
    },
    {
      "id": "m07-l2",
      "title": "Linear power supplies",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson follows a linear power supply from mains to regulated DC through four stages: transformer, rectifier, filter and regulator. You will calculate output voltage, ripple and heat."
        },
        {
          "t": "diagram",
          "name": "rectifier-chain"
        },
        {
          "t": "h",
          "text": "Transformer"
        },
        {
          "t": "p",
          "text": "A **transformer** has two coils on a shared iron core. AC in the **primary** coil makes a changing magnetic field. That induces AC in the **secondary** coil. The voltages follow the turns ratio. The coils are not connected, so the secondary is isolated from the mains."
        },
        {
          "t": "formula",
          "text": "Vs = Vp × (Ns ÷ Np)",
          "caption": "Secondary voltage from the turns ratio (RMS values)"
        },
        {
          "t": "example",
          "title": "Transformer output",
          "steps": [
            "Primary 230 V with 1000 turns. Secondary 50 turns.",
            "Vs = 230 × (50 ÷ 1000) = 230 × 0.05 = 11.5 V RMS.",
            "The ratio is 20 : 1, so the voltage falls to one twentieth."
          ]
        },
        {
          "t": "h",
          "text": "Rectifier"
        },
        {
          "t": "p",
          "text": "A **rectifier** turns AC into pulsing DC. A **half-wave** rectifier uses one diode and passes one half of each cycle. A **full-wave bridge** uses four diodes and passes both halves. In a bridge, two diodes conduct at a time, so about 1.4 V is lost in silicon diodes."
        },
        {
          "t": "p",
          "text": "A half-wave rectifier gives one pulse per cycle, so the pulses come at the mains frequency. A full-wave bridge gives two, so the pulses come at twice the mains frequency: 100 Hz on a 50 Hz supply and 120 Hz on a 60 Hz supply."
        },
        {
          "t": "formula",
          "text": "Vpeak = Vrms × √2 − diode drops",
          "caption": "Peak DC after a bridge rectifier"
        },
        {
          "t": "example",
          "title": "Bridge output",
          "steps": [
            "Secondary is 12 V RMS. Peak = 12 × 1.414 = 16.97 V, about 17.0 V.",
            "Two silicon diodes conduct, so subtract 2 × 0.7 = 1.4 V.",
            "Peak DC ≈ 17.0 − 1.4 = 15.6 V."
          ]
        },
        {
          "t": "h",
          "text": "Filter and ripple"
        },
        {
          "t": "p",
          "text": "A large **filter capacitor** stores charge at each peak and supplies the load between peaks. The small rise and fall that remains is **ripple**. More load current gives more ripple. A bigger capacitor or a higher ripple frequency gives less."
        },
        {
          "t": "formula",
          "text": "ΔV ≈ I ÷ (f × C)",
          "caption": "Approximate ripple, peak to peak. I in A, f in Hz, C in F"
        },
        {
          "t": "example",
          "title": "Ripple estimate",
          "steps": [
            "Load 1 A, capacitor 4700 µF = 0.0047 F, full-wave on 60 Hz so f = 120 Hz.",
            "f × C = 120 × 0.0047 = 0.564.",
            "ΔV ≈ 1 ÷ 0.564 ≈ 1.8 V peak to peak."
          ]
        },
        {
          "t": "h",
          "text": "Regulator"
        },
        {
          "t": "p",
          "text": "A **regulator** holds the output steady when the mains or the load changes. A linear regulator needs its input to stay above the output by a margin, called dropout. Check the part's datasheet. The extra voltage is burned as heat."
        },
        {
          "t": "formula",
          "text": "P = (Vin − Vout) × I",
          "caption": "Heat in a linear regulator"
        },
        {
          "t": "p",
          "text": "With 12 V in, 5 V out and 0.8 A, the regulator wastes (12 − 5) × 0.8 = 5.6 W. It needs a heat sink."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "An unloaded supply reads higher than a loaded one. Always measure rails with the normal load connected."
        }
      ]
    },
    {
      "id": "m07-l3",
      "title": "Switch-mode power supplies",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains how a switch-mode power supply works: its stages, the isolation barrier, PWM control and optocoupler feedback. Most modern office machines use one."
        },
        {
          "t": "diagram",
          "name": "smps-block"
        },
        {
          "t": "h",
          "text": "Why switch-mode"
        },
        {
          "t": "p",
          "text": "A **switch-mode power supply** (SMPS) rectifies the mains first. It then chops the DC into fast pulses and passes them through a small transformer. Because the pulses run at a high frequency, usually tens or hundreds of kilohertz, the transformer needs far less iron. The supply is smaller, lighter and wastes less heat than a linear supply of the same power."
        },
        {
          "t": "h",
          "text": "The stages"
        },
        {
          "t": "ol",
          "items": [
            "Fuse, input filter and inrush limiter. A thermistor stops a large current surge when the bulk capacitor first charges.",
            "Rectifier and **bulk capacitor**. The mains is rectified and smoothed to high-voltage DC.",
            "**Switching transistor**, usually a MOSFET, turns the DC on and off at high speed.",
            "**High-frequency transformer** steps the pulses down and isolates the secondary.",
            "Secondary rectifier and filter. Fast diodes and small capacitors make the output DC.",
            "Feedback. The output is compared with a reference, and the result is sent to the controller."
          ]
        },
        {
          "t": "p",
          "text": "Rectified and filtered 230 V mains gives about 230 × 1.414 = 325 V DC. Rectified 120 V mains gives about 170 V DC. Either voltage can be dangerous and can remain on the bulk capacitor after unplugging."
        },
        {
          "t": "h",
          "text": "PWM control and feedback"
        },
        {
          "t": "p",
          "text": "**Pulse-width modulation** (PWM) controls output by changing how long the transistor stays on in each cycle. The **duty cycle** is the on time as a fraction of the whole period."
        },
        {
          "t": "formula",
          "text": "Duty cycle = on time ÷ (on time + off time)",
          "caption": "Usually given as a percentage"
        },
        {
          "t": "example",
          "title": "Duty cycle",
          "steps": [
            "The supply switches at 50 kHz. One period = 1 ÷ 50 000 s = 20 µs.",
            "The transistor is on for 8 µs.",
            "Duty cycle = 8 ÷ 20 = 0.4, or 40%."
          ]
        },
        {
          "t": "p",
          "text": "If the output rises, the controller shortens the pulses and less energy reaches the secondary. If the output falls, it lengthens them. The feedback signal crosses the barrier through an **optocoupler**: an LED and a light-sensitive transistor in one package, with no electrical connection between them."
        },
        {
          "t": "h",
          "text": "The isolation barrier"
        },
        {
          "t": "p",
          "text": "The **isolation barrier** separates the mains-connected **primary side** from the **secondary side**, which the user can touch. The transformer and optocoupler are the only links, and both carry energy or signals without a direct electrical connection."
        },
        {
          "t": "example",
          "title": "Efficiency",
          "steps": [
            "Output is 24 V at 2 A, so output power = 48 W.",
            "The supply is 80% efficient, so input power = 48 ÷ 0.8 = 60 W.",
            "Heat lost = 60 − 48 = 12 W."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "The primary side of an SMPS is live relative to earth and to the secondary. Do not connect an earthed oscilloscope probe to it. Use an isolation transformer, or leave primary-side measurements to a qualified person following the manual."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Output too high or too low usually points to the feedback path. No output at all usually points to the primary side or its protection."
        }
      ]
    },
    {
      "id": "m07-l4",
      "title": "Common power supply faults",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the common faults in office-machine power supplies, what each one looks like, and a test sequence that finds the cause without taking risks."
        },
        {
          "t": "h",
          "text": "The blown fuse"
        },
        {
          "t": "p",
          "text": "A fuse is a **protective device**. It blows because something drew too much current. The fuse is a symptom, not the fault. Find out why it blew before you fit a new one."
        },
        {
          "t": "p",
          "text": "Fit only the same type, rating and voltage. A larger fuse will not protect the wiring and parts it was chosen for, and it can start a fire. Never use a wire, foil or a larger fuse as a test."
        },
        {
          "t": "h",
          "text": "Symptom to likely cause"
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
              "Fuse blows at once",
              "Shorted rectifier or switching transistor",
              "Diode test, unplugged and discharged"
            ],
            [
              "Fuse intact, no output",
              "Open inrush limiter, open start-up resistor, dead controller",
              "Voltage across bulk capacitor"
            ],
            [
              "Supply ticks on and off",
              "Hiccup mode: protection tripping on overload or fault",
              "Disconnect loads one by one"
            ],
            [
              "High ripple, bulged capacitor",
              "Dried electrolytic capacitor",
              "Look for bulging, check ESR if you can"
            ],
            [
              "Output wrong but steady",
              "Feedback fault: optocoupler or reference part",
              "Compare with the circuit diagram"
            ]
          ],
          "caption": "Typical patterns. Confirm each with measurements."
        },
        {
          "t": "p",
          "text": "In **hiccup mode** the protection circuit shuts the supply down, waits, then tries again, over and over. A short on one rail or a failed load often causes it. A fault inside the supply can cause it too."
        },
        {
          "t": "p",
          "text": "An **inrush limiter** is usually an NTC thermistor in series with the mains input. It can fail open and stop all power. A **dried electrolytic capacitor** has lost capacitance and has a higher series resistance. Look for a bulged top, leaked fluid or a hot capacitor. The result is high ripple, failure to start when cold, or random resets."
        },
        {
          "t": "h",
          "text": "Test sequence"
        },
        {
          "t": "ol",
          "items": [
            "Unplug the machine. Look for burn marks, swollen capacitors, cracked solder joints and damaged cords.",
            "Discharge the bulk capacitor, then confirm it reads near 0 V.",
            "Check the fuse for continuity out of circuit.",
            "With the supply unpowered, test the rectifier diodes and switching transistor with the diode range.",
            "Check the inrush limiter and any start-up resistors.",
            "Disconnect the loads, so the supply is tested on its own.",
            "Repower, using the safe method in lesson 6, and measure each rail."
          ]
        },
        {
          "t": "example",
          "title": "Reading a diode test",
          "steps": [
            "A good silicon diode reads about 0.5 to 0.7 V one way and shows an open circuit the other way.",
            "A shorted diode reads close to 0 V both ways.",
            "An open diode reads an open circuit both ways."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "If a replacement fuse blows again at once, **stop**. Do not fit a bigger fuse. Find the short with the supply unplugged."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "When you replace an electrolytic capacitor, match the capacitance, polarity and temperature rating. The voltage rating must be at least the original. Where the original is a low-ESR type, use a low-ESR type."
        }
      ]
    },
    {
      "id": "m07-l5",
      "title": "High-voltage supplies for imaging",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains the high-voltage supplies that make the image in a laser printer or copier, what can go wrong with them, and how to work near them safely."
        },
        {
          "t": "h",
          "text": "What the high-voltage supply does"
        },
        {
          "t": "p",
          "text": "The imaging process needs electric fields. A **high-voltage power supply** (HVPS) creates several outputs, each with its own job. Values vary by machine, from a few hundred volts to well over a thousand volts. Check the manufacturer's service manual."
        },
        {
          "t": "ul",
          "items": [
            "**Charge voltage** puts an even electrical charge on the drum surface. It is applied through a charge roller or a corona wire.",
            "**Development bias** is applied to the developer roller. It helps toner move from the roller to the exposed areas of the drum.",
            "**Transfer voltage** pulls toner from the drum onto the paper.",
            "Some machines add separation or cleaning voltages."
          ]
        },
        {
          "t": "p",
          "text": "The current is very small, but the voltage is high. A shock is painful and can make you jerk into hot or moving parts. Charged parts can hold a charge after switch-off."
        },
        {
          "t": "h",
          "text": "Contacts and cleaning"
        },
        {
          "t": "p",
          "text": "The voltages reach rollers and drums through small metal contacts and springs. Toner dust, paper dust and dirt on these contacts weaken the voltage. The result is faint, uneven or missing prints, or a defect on one side of the page."
        },
        {
          "t": "p",
          "text": "With the machine switched off and unplugged, clean contacts with a dry, lint-free cloth. Use a cleaning fluid only if the manual allows it. Never bend a spring to make it press harder. Fit parts as the manual describes."
        },
        {
          "t": "h",
          "text": "Ozone"
        },
        {
          "t": "p",
          "text": "A corona wire can produce **ozone**, an irritating gas with a sharp smell. Machines with coronas often have an ozone filter and ventilation. Replace the filter on schedule, and keep the room ventilated."
        },
        {
          "t": "h",
          "text": "Discharging and safe testing"
        },
        {
          "t": "ol",
          "items": [
            "Switch off, unplug and wait. Follow the manual's discharge instructions.",
            "Do not touch high-voltage contacts, wires or the HVPS board.",
            "Do not use an ordinary multimeter on a high-voltage output.",
            "Use the machine's own test or service mode, or a probe rated for that voltage, as the manual directs.",
            "Check each fault with swap tests and visual checks first."
          ]
        },
        {
          "t": "example",
          "title": "Faint prints after a new cartridge",
          "steps": [
            "Switch off and unplug. Remove the cartridge.",
            "Look at the contacts in the machine. Toner coats the springs.",
            "Wipe them with a dry lint-free cloth, and refit the cartridge.",
            "Plug in, print a test page, and check the result."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A high-voltage output can shock even when the current is small. Never test one by holding a screwdriver near it, and never defeat an interlock to see the process working."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "If prints are faint or uneven, check contacts and consumables before suspecting the HVPS board."
        }
      ]
    },
    {
      "id": "m07-l6",
      "title": "Safe testing and repair",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson sets out how to test and repair a mains-powered supply safely, from discharging stored energy to the checks you must finish before returning the machine to service."
        },
        {
          "t": "h",
          "text": "Before you touch anything"
        },
        {
          "t": "ol",
          "items": [
            "Switch off and unplug. Do not rely on a switch alone.",
            "Wait, then discharge the bulk capacitor through a suitable resistor. Do not short it with a screwdriver.",
            "Measure DC voltage across the capacitor. Only continue when it reads near 0 V.",
            "Work with insulated tools, dry hands and a clear bench."
          ]
        },
        {
          "t": "p",
          "text": "Large capacitors keep their charge. A discharge resistor in the supply may drain it, but it can fail. Always measure."
        },
        {
          "t": "h",
          "text": "Powering a repaired supply"
        },
        {
          "t": "p",
          "text": "An **isolation transformer** has a primary and secondary with no direct connection. It separates the equipment from the earth-referenced mains. Touching one live part and earth then does not complete a circuit through you. It does not make touching two live points safe."
        },
        {
          "t": "p",
          "text": "A **current-limited test** uses a series limiter, such as a mains lamp in series with the supply, so that a remaining fault draws a small current. If the lamp glows brightly and stays lit, a fault is still present. Switch off at once."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never remove or bypass the earth connection, a fuse or an interlock to make a test easier. Never replace a fuse with a higher rating."
        },
        {
          "t": "h",
          "text": "Safety-rated parts"
        },
        {
          "t": "p",
          "text": "Some parts carry a safety function. A fuse must be the same type, rating, voltage and speed. **X capacitors** sit across the mains lines. **Y capacitors** link mains to earth or to the secondary. When they fail, they must fail safely. Fit only the same safety-rated type from a reliable supplier."
        },
        {
          "t": "h",
          "text": "Creepage and clearance"
        },
        {
          "t": "p",
          "text": "**Creepage** is the shortest path along a surface between two conductive parts. **Clearance** is the shortest path through air. Standards set minimum values to prevent sparks and tracking. Do not cut slots, bridge gaps with solder, or remove insulating sheets and barriers."
        },
        {
          "t": "h",
          "text": "After the repair"
        },
        {
          "t": "ul",
          "items": [
            "Refit every barrier, cover, screw and cable clip.",
            "Check the cord and plug for damage.",
            "Test the earth continuity and insulation as your local rules and the manual require.",
            "Run the machine, measure the rails and look for heat.",
            "Write down what you found, what you replaced and the readings."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "If you are not sure that a repair is safe, do not return the machine. Replace the supply module as a unit."
        }
      ]
    }
  ],
  "practical": {
    "title": "Measure DC rails and ripple on a demonstration supply",
    "objective": "Measure the DC outputs and ripple of a training power supply, compare them with the rated values, and complete a fault chart for the common supply faults.",
    "time": "60 minutes",
    "tools": [
      "Demonstration or training power supply with enclosed mains section and accessible low-voltage test points",
      "Digital multimeter with DC volts and AC volts ranges",
      "Oscilloscope with a 10× probe, if available",
      "Load resistors or the demonstration load board, as set by your instructor",
      "Record sheet, pen and calculator"
    ],
    "safety": [
      "Use only a training supply that has its mains section enclosed. Do not open it or touch any internal part.",
      "Plug in only to an outlet protected by a residual-current device, and check the cord and plug first.",
      "Switch off and unplug before you connect or move any load or test lead.",
      "Set the meter to DC volts before you touch a lead to a test point. Do not use the current or resistance range on a powered supply.",
      "Connect the oscilloscope ground clip only to the 0 V common of the low-voltage side.",
      "If you see smoke, smell burning or hear loud buzzing, switch off and unplug at once and tell your instructor."
    ],
    "steps": [
      "Look over the unit. Check the cord, plug and case for damage, and do not use it if you see any.",
      "Read the label. Write down the input voltage range and the rated output voltages and currents.",
      "With the unit unplugged, connect the load as shown on the demonstration sheet.",
      "Set the meter to DC volts. Connect the black lead to the 0 V common test point.",
      "Plug in and switch on. Touch the red lead to each output test point in turn, and record each voltage.",
      "Work out the difference for each rail: measured minus rated, divided by rated, then multiplied by 100 for a percentage.",
      "Switch off, unplug, and wait for the supply to discharge as the demonstration sheet says.",
      "Set the oscilloscope to AC coupling, 20 mV per division, and a suitable time per division, and connect it to one rail.",
      "Plug in, switch on, and sketch the ripple. Record its peak-to-peak size and the time between peaks.",
      "Work out the ripple frequency as 1 ÷ the time between peaks. Say whether it looks like mains-related ripple or high-frequency switching ripple.",
      "Without a scope, set the meter to AC volts on its lowest range and note the reading as a rough ripple check.",
      "Switch off and unplug. Draw a chart with the headings Symptom, Likely cause and First check.",
      "Fill the chart for five faults: fuse blows at once, no output with fuse intact, high ripple, supply ticking on and off, and one rail low."
    ],
    "checks": [
      "I can say which rail was measured, and whether it matched its rating.",
      "I can calculate a percentage difference between measured and rated voltage.",
      "I can read ripple size and frequency from a trace or give a rough value from the meter.",
      "I can explain why I should find the cause of a blown fuse before replacing it.",
      "I can list the safe steps before touching a power supply for repair."
    ]
  },
  "quiz": [
    {
      "id": "m07-q01",
      "q": "Which DC rail is most often used to drive motors, solenoids and clutches in an office machine?",
      "options": [
        "About 24 V",
        "About 3.3 V",
        "About 1.8 V",
        "About 5 V"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m07-l1",
      "explain": "Motors, solenoids and clutches need more voltage and current than logic does, so a rail of about 24 V is common. The 5 V and 3.3 V rails are for logic and sensors. Exact values vary, so check the service manual."
    },
    {
      "id": "m07-q02",
      "q": "Why do many machines use separate rails for logic and for motors?",
      "options": [
        "Logic chips can only run from AC, while motors need steady DC",
        "Mains voltage cannot be converted to DC in one single stage",
        "Motor surges and noise could upset sensitive logic circuits",
        "A law forbids one supply from feeding more than one circuit"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m07-l1",
      "explain": "Motors draw large surge currents and create electrical noise, so logic is kept on a cleaner rail. Logic uses DC, not AC, and one stage can convert mains to DC."
    },
    {
      "id": "m07-q03",
      "q": "What is the job of a standby supply?",
      "options": [
        "To store energy so a job can finish during a power cut",
        "To keep a small control circuit powered so the machine can wake",
        "To feed the fuser heater at a lower voltage while the machine is idle",
        "To charge the imaging high-voltage circuits before printing"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m07-l1",
      "explain": "A standby supply stays on whenever the cord is plugged in, so the panel, timer or network can wake the machine. It is not a battery backup, and it does not feed the fuser."
    },
    {
      "id": "m07-q04",
      "q": "A copier has a lit panel and the 5 V rail measures correctly, but no motor turns. Which check is the most sensible next?",
      "options": [
        "Replace the controller board, because logic is working but not responding",
        "Reload the firmware, because the panel proves the software has failed",
        "Replace the panel, because it is the part the user presses",
        "Measure the 24 V rail and check the interlock switches that feed it"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m07-l1",
      "explain": "A working 5 V rail and panel show the logic supply is alive. Motors usually run from the 24 V rail, often through door interlocks, so check that first. Replacing boards without measuring is guesswork."
    },
    {
      "id": "m07-q05",
      "q": "A machine's rails supply 5 V at 2 A, 12 V at 1 A and 24 V at 1.5 A. What is the total DC output power?",
      "options": [
        "46 W",
        "58 W",
        "64 W",
        "72.5 W"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m07-l1",
      "explain": "Add V × I for each rail: 10 W + 12 W + 36 W = 58 W. The value 72.5 W is the mains input if the supply is 80% efficient, not the output. The value 46 W leaves out the 12 V rail."
    },
    {
      "id": "m07-q06",
      "q": "What is the correct order of the stages in a linear power supply?",
      "options": [
        "Transformer, rectifier, filter, regulator",
        "Rectifier, transformer, regulator, filter",
        "Filter, rectifier, transformer, regulator",
        "Transformer, filter, rectifier, regulator"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m07-l2",
      "explain": "The transformer lowers the AC voltage first. The rectifier makes pulsing DC, the filter smooths it, and the regulator holds it steady. A filter capacitor placed before the rectifier would not smooth anything."
    },
    {
      "id": "m07-q07",
      "q": "A full-wave rectifier runs from a 50 Hz mains supply. What is the main ripple frequency?",
      "options": [
        "50 Hz",
        "25 Hz",
        "150 Hz",
        "100 Hz"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m07-l2",
      "explain": "A full-wave rectifier gives two pulses per cycle, so the ripple is twice the mains frequency: 100 Hz. A half-wave rectifier would give 50 Hz, which is the tempting answer."
    },
    {
      "id": "m07-q08",
      "q": "Why is a full-wave bridge usually chosen over a half-wave rectifier in a power supply?",
      "options": [
        "It needs only one diode, so it costs less to build",
        "It lets the transformer be removed from the circuit, so the supply is lighter",
        "Its ripple is at twice the frequency, so the filter holds the output steadier",
        "It reduces the peak voltage so the capacitor can be smaller"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m07-l2",
      "explain": "A bridge uses both halves of the cycle, so the capacitor is recharged twice as often and ripple is lower. It uses four diodes, not one, and it still needs a transformer for isolation."
    },
    {
      "id": "m07-q09",
      "q": "A transformer gives 12 V RMS at its secondary and feeds a silicon bridge rectifier, with 0.7 V lost in each conducting diode. What is the approximate peak DC output with no load?",
      "options": [
        "About 10.6 V",
        "About 15.6 V",
        "About 16.3 V",
        "About 17.0 V"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m07-l2",
      "explain": "Peak = 12 × 1.414 = 16.97 V. A bridge has two diodes conducting, so subtract 1.4 V to get about 15.6 V. The value 16.3 V subtracts only one diode drop, and 17.0 V ignores the drops."
    },
    {
      "id": "m07-q10",
      "q": "A transformer has 1000 primary turns and 50 secondary turns. It is fed with 230 V AC. What is the secondary voltage?",
      "options": [
        "11.5 V",
        "4.6 V",
        "23 V",
        "46 V"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m07-l2",
      "explain": "Vs = 230 × 50 ÷ 1000 = 11.5 V. The value 23 V would need a ratio of 10 : 1, and 4.6 V would need 50 : 1. The ratio here is 20 : 1."
    },
    {
      "id": "m07-q11",
      "q": "The load current on a linear supply doubles. The filter capacitor and the ripple frequency stay the same. What happens to the ripple voltage?",
      "options": [
        "It halves, because more current means more charge",
        "It stays the same, because frequency has not changed",
        "It falls to a quarter, because power goes up with current",
        "It roughly doubles, because the capacitor empties faster"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m07-l2",
      "explain": "Ripple is about I ÷ (f × C), so doubling I doubles the ripple. A bigger load drains the capacitor more between peaks. Frequency only matters if it changes."
    },
    {
      "id": "m07-q12",
      "q": "A full-wave supply on 50 Hz mains has a 2200 µF filter capacitor and a 0.5 A load. About how large is the peak-to-peak ripple?",
      "options": [
        "About 1.1 V",
        "About 4.5 V",
        "About 2.3 V",
        "About 0.23 V"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m07-l2",
      "explain": "Ripple frequency is 100 Hz. ΔV ≈ 0.5 ÷ (100 × 0.0022) = 0.5 ÷ 0.22 ≈ 2.3 V. Using 50 Hz gives 4.5 V, which forgets that a full-wave rectifier doubles the frequency."
    },
    {
      "id": "m07-q13",
      "q": "Why can a switch-mode supply use a much smaller transformer than a linear supply of the same power?",
      "options": [
        "It carries less current, so thinner wire fits in the coils",
        "The transformer works at a high frequency and needs less iron",
        "It does not need isolation, so one of the coils is left out",
        "It sends DC through the transformer, which is stronger than AC"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m07-l3",
      "explain": "At tens or hundreds of kilohertz, a transformer needs far less core material than at 50 or 60 Hz. A transformer only works with changing current, so DC through it would not transfer power."
    },
    {
      "id": "m07-q14",
      "q": "In a switch-mode supply, what does the optocoupler do?",
      "options": [
        "Passes the output voltage signal across the barrier to the primary controller",
        "Rectifies the high-frequency pulses coming from the transformer secondary winding",
        "Switches the primary current on and off at high frequency",
        "Limits the surge current when the bulk capacitor first charges"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m07-l3",
      "explain": "An optocoupler uses light inside one package to carry feedback across the isolation barrier. The switching transistor does the switching, and a thermistor limits surge current."
    },
    {
      "id": "m07-q15",
      "q": "A machine runs from 230 V mains. About what DC voltage is on its bulk capacitor when it is rectified and filtered with no load?",
      "options": [
        "230 V",
        "163 V",
        "460 V",
        "325 V"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m07-l3",
      "explain": "The capacitor charges to the peak: 230 × 1.414 ≈ 325 V. The value 230 V is the RMS value, and 163 V comes from dividing by √2 instead of multiplying."
    },
    {
      "id": "m07-q16",
      "q": "The output of a switch-mode supply rises above its set value. What does the controller do to the switching pulses?",
      "options": [
        "Makes the pulses longer so more energy reaches the secondary",
        "Raises the switching frequency to its maximum value until the output falls",
        "Makes the pulses shorter so less energy reaches the secondary",
        "Reverses the polarity of the pulses on the primary"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m07-l3",
      "explain": "PWM reduces the on time when the output is too high, so less energy passes through the transformer. Longer pulses would push the output higher still."
    },
    {
      "id": "m07-q17",
      "q": "A supply switches at 50 kHz. The transistor is on for 8 µs in each cycle. What is the duty cycle?",
      "options": [
        "16%",
        "40%",
        "60%",
        "80%"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m07-l3",
      "explain": "The period is 1 ÷ 50 000 = 20 µs, so the duty cycle is 8 ÷ 20 = 40%. The value 60% is the off time, which is the fraction the transistor is not conducting."
    },
    {
      "id": "m07-q18",
      "q": "A switch-mode supply delivers 24 V at 2 A and is 80% efficient. How much power does it draw from the mains?",
      "options": [
        "60 W",
        "48 W",
        "38.4 W",
        "96 W"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m07-l3",
      "explain": "Output power is 24 × 2 = 48 W. Input = 48 ÷ 0.8 = 60 W. The value 38.4 W comes from multiplying by 0.8 instead of dividing, and 48 W is the output, not the input."
    },
    {
      "id": "m07-q19",
      "q": "What is the purpose of the isolation barrier in a switch-mode supply?",
      "options": [
        "To reduce ripple so the output capacitors can be smaller",
        "To raise the switching frequency above the range that people can hear",
        "To keep the mains-connected primary separate from the touchable secondary",
        "To store energy for the standby supply when the cord is removed"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m07-l3",
      "explain": "The barrier keeps mains voltage away from parts the user can touch. The transformer and optocoupler carry energy and signals across without a direct connection. It does not control ripple or frequency."
    },
    {
      "id": "m07-q20",
      "q": "A supply fuse has blown. What should you do before fitting a new fuse?",
      "options": [
        "Fit one with a higher rating so that it survives the first power-up",
        "Switch on briefly to see whether the old fuse really was faulty",
        "Fit a new fuse of the same value and note whether it holds",
        "Find out why it blew, then fit a fuse of the same type and rating"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m07-l4",
      "explain": "A fuse blows because of a fault, so the cause must be found first. A larger fuse removes the protection. Fitting the same value and trying again may be unsafe if a short is still present."
    },
    {
      "id": "m07-q21",
      "q": "A supply produces a repeated ticking sound, and its output rises and falls every second or so. What does this most likely show?",
      "options": [
        "Normal standby behaviour found in every supply",
        "Protection repeatedly shutting the supply down because of an overload or fault",
        "A transformer that has too many turns on its primary winding, which is normal",
        "A mains frequency that does not match the machine"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m07-l4",
      "explain": "This is hiccup mode: the protection trips, waits, and tries again. Disconnect loads one by one to find the cause. Normal standby does not tick on and off like this."
    },
    {
      "id": "m07-q22",
      "q": "A new fuse blows as soon as the machine is switched on. With the supply unplugged and discharged, the diode test shows close to 0 V both ways across one bridge diode. What is the best next step?",
      "options": [
        "Replace the shorted diode, then check the switching transistor and nearby parts before fitting a new fuse",
        "Fit a fuse with a higher current rating so that it can survive the short",
        "Fit another fuse of the same rating and switch on again to see if it holds",
        "Replace the bulk capacitor, because a shorted diode is caused by an ageing capacitor"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m07-l4",
      "explain": "Near 0 V both ways means the diode is shorted. A short often damages other primary-side parts, so check them too. A higher-rated fuse removes protection, and trying again repeats the fault."
    },
    {
      "id": "m07-q23",
      "q": "A supply has an intact fuse, no output, and no DC voltage across the bulk capacitor. Out of circuit, the inrush limiter thermistor reads an open circuit. What is the likely fault?",
      "options": [
        "A shorted switching transistor on the primary side",
        "Dried output capacitors on the secondary side",
        "An open inrush limiter, so mains never reaches the bulk capacitor",
        "A faulty optocoupler on the feedback path between secondary and primary"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m07-l4",
      "explain": "The limiter is in series with the mains input. When it is open, no power reaches the rectifier. A shorted transistor would normally blow the fuse, and the other faults would not stop the bulk capacitor charging."
    },
    {
      "id": "m07-q24",
      "q": "A supply has run for many years and now shows a bulged capacitor top and high ripple on its output. What is the most likely cause?",
      "options": [
        "The fuse has changed value",
        "The transformer core has become magnetised",
        "The optocoupler has stopped sending light",
        "An electrolytic capacitor has dried out"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m07-l4",
      "explain": "Electrolytic capacitors lose liquid with age and heat. Their capacitance falls and their resistance rises, so ripple increases and the top may bulge. A fuse either works or is open."
    },
    {
      "id": "m07-q25",
      "q": "You are replacing a failed electrolytic filter capacitor. Which choice is correct?",
      "options": [
        "Any capacitor of the same capacitance will do, whatever its voltage rating",
        "The same capacitance, a voltage rating at or above the original, correct polarity and a suitable temperature rating",
        "A much larger capacitance is always better, so use the biggest one that fits",
        "A lower voltage rating is fine, because the supply never reaches the full rating"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m07-l4",
      "explain": "Capacitance, voltage rating, polarity and temperature rating all matter. A lower voltage rating can lead to failure, and a much larger value can overstress the rectifier or upset the control circuit."
    },
    {
      "id": "m07-q26",
      "q": "Which imaging supply output pulls toner from the drum onto the paper?",
      "options": [
        "Transfer voltage",
        "Primary charge voltage",
        "Development bias",
        "Standby voltage"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m07-l5",
      "explain": "The transfer voltage attracts toner from the drum to the paper. The charge voltage prepares the drum, and the development bias moves toner from the developer roller to the drum."
    },
    {
      "id": "m07-q27",
      "q": "A high-voltage imaging supply delivers a very small current. Why is it still dangerous?",
      "options": [
        "The current is low, so the only danger is to the printed image",
        "Its current is always high enough to stop the heart",
        "It can only cause harm if you are standing on a wet floor",
        "A shock can be painful, make you jerk into hot or moving parts, and charge can linger"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m07-l5",
      "explain": "Even a small current at high voltage can give a painful shock and a sudden reaction near hot or moving parts. Charged parts can hold energy. The claim that the current is always lethal is wrong, and so is the idea that harm needs a wet floor."
    },
    {
      "id": "m07-q28",
      "q": "After a new cartridge is fitted, prints are faint and uneven. The high-voltage contact springs in the machine are coated with toner. What is the best action?",
      "options": [
        "Raise the development bias in service mode until the print is darker",
        "Bend the springs outward so that they press harder",
        "Switch off, unplug, and clean the contacts with a dry lint-free cloth",
        "Blow the toner off the contacts with compressed air while the machine runs"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m07-l5",
      "explain": "Dirty contacts weaken the voltage reaching the cartridge. Clean them with the machine unplugged. Changing settings hides the fault, bending springs can damage them, and blowing out toner spreads dust and is unsafe near live parts."
    },
    {
      "id": "m07-q29",
      "q": "Which statement about ozone in a printer is correct?",
      "options": [
        "It is a toner additive that is released when toner melts",
        "It is a gas formed by corona discharge and is an irritant",
        "It is a coolant gas that is carried around the machine by the fan air",
        "It is a cleaning fluid used on high-voltage contacts"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m07-l5",
      "explain": "A corona discharge makes ozone, which has a sharp smell and irritates the airways. That is why ozone filters and ventilation are used. It is not a toner additive or a cleaning fluid."
    },
    {
      "id": "m07-q30",
      "q": "How should the output of an imaging high-voltage supply be checked?",
      "options": [
        "By the method in the service manual, using a probe or tester rated for that voltage",
        "By holding an ordinary multimeter probe on the contact while the machine runs",
        "By bringing a screwdriver close to the contact and watching for a spark",
        "By measuring the resistance of the contact while the machine is switched on"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m07-l5",
      "explain": "Only the manual's method, with equipment rated for the voltage, is safe. An ordinary meter may not be rated, and sparking a screwdriver is dangerous and can damage the board. Resistance is not measured on a live circuit."
    },
    {
      "id": "m07-q31",
      "q": "How should you confirm that the primary bulk capacitor is discharged after unplugging a supply?",
      "options": [
        "Short its terminals with a screwdriver until the sparking stops",
        "Wait one minute, because all capacitors empty in that time",
        "Discharge it through a suitable resistor, then check with a meter that it reads near 0 V",
        "Touch the terminals with one finger to see whether you feel anything"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m07-l6",
      "explain": "A resistor discharges the capacitor in a controlled way, and the meter confirms it. Shorting with a screwdriver can damage parts and cause burns, and a fixed wait cannot be trusted."
    },
    {
      "id": "m07-q32",
      "q": "What does an isolation transformer do when you power a supply under repair?",
      "options": [
        "Limits the fault current so the fuse never blows",
        "Lowers the mains voltage to a safe level such as 12 V",
        "Makes it safe to touch both live conductors at once",
        "Separates the equipment from earth-referenced mains, so touching one live part and earth carries no current through you"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m07-l6",
      "explain": "The output floats relative to earth, so contact with one conductor and earth does not complete a circuit. Touching both conductors is still dangerous, so it is not a licence to work live."
    },
    {
      "id": "m07-q33",
      "q": "You have replaced a shorted switching transistor and want to power the supply for the first time. Which approach is the most cautious?",
      "options": [
        "Connect it directly to the mains and keep a hand on the plug",
        "Use an isolation transformer and a current limiter such as a series lamp, and switch off if the lamp stays bright",
        "Fit a higher-rated fuse for this first test, then fit the correct one",
        "Remove the earth connection so no fault current can flow through it"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m07-l6",
      "explain": "A limiter keeps the fault current small if another fault remains, and the isolation transformer reduces shock risk. Removing earth or using a bigger fuse removes protection."
    },
    {
      "id": "m07-q34",
      "q": "Why must an X or Y capacitor be replaced only with the same safety-rated type?",
      "options": [
        "A failure could leave mains voltage on touchable parts or start a fire",
        "Ordinary capacitors cannot block the mains frequency at all",
        "Only the safety type is made in the right colour and with the right lead length",
        "Safety capacitors always have the largest capacitance in the supply"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m07-l6",
      "explain": "Safety capacitors are built to fail safely across mains or between mains and earth. A normal capacitor may fail short and leave a shock or fire hazard. Colour and size have nothing to do with the rating."
    },
    {
      "id": "m07-q35",
      "q": "What is creepage distance?",
      "options": [
        "The shortest distance through air between two conductive parts",
        "The distance a wire can be bent before it breaks",
        "The length of the mains cable between the plug and the supply input",
        "The shortest distance along an insulating surface between two conductive parts"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m07-l6",
      "explain": "Creepage is measured along a surface, because dirt or moisture on it can carry current. The distance through air is called clearance, which is the tempting wrong answer."
    },
    {
      "id": "m07-q36",
      "q": "You have repaired a mains supply and refitted all covers. Which check is required before the machine goes back to the customer?",
      "options": [
        "A speed test of the paper feed, because the supply drives the motors",
        "A quick listen for the fan, because a running fan proves the repair is safe",
        "An earth continuity and insulation check, as your local rules and the manual require",
        "A repeat of the first power-up with the limiter removed to confirm full power"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m07-l6",
      "explain": "Earth continuity and insulation tests show the repair has not left a shock hazard. A working fan does not prove safety, and removing the limiter does not test safety."
    }
  ],
  "cards": [
    {
      "id": "m07-c01",
      "front": "What is a rail?",
      "back": "One DC output of a power supply, such as the 5 V rail or the 24 V rail.",
      "lesson": "m07-l1"
    },
    {
      "id": "m07-c02",
      "front": "What do 24 V rails usually power?",
      "back": "Motors, solenoids, clutches and relays. Check the service manual, because values vary by machine.",
      "lesson": "m07-l1"
    },
    {
      "id": "m07-c03",
      "front": "What does a standby supply do?",
      "back": "Keeps a small control circuit powered whenever the cord is plugged in, so the machine can be woken.",
      "lesson": "m07-l1"
    },
    {
      "id": "m07-c04",
      "front": "Is a machine safe to open when switched off at the panel?",
      "back": "No. Mains can still be inside. Unplug the cord first.",
      "lesson": "m07-l1"
    },
    {
      "id": "m07-c05",
      "front": "Power formula for a rail",
      "back": "P = V × I. Add the power of all rails for the total output.",
      "lesson": "m07-l1"
    },
    {
      "id": "m07-c06",
      "front": "Name the four stages of a linear supply.",
      "back": "Transformer, rectifier, filter, regulator.",
      "lesson": "m07-l2"
    },
    {
      "id": "m07-c07",
      "front": "Transformer voltage formula",
      "back": "Vs = Vp × (Ns ÷ Np). Voltages follow the turns ratio.",
      "lesson": "m07-l2"
    },
    {
      "id": "m07-c08",
      "front": "Peak DC after a bridge rectifier",
      "back": "Vrms × √2, minus about 1.4 V for the two silicon diodes that conduct.",
      "lesson": "m07-l2"
    },
    {
      "id": "m07-c09",
      "front": "Ripple frequency of a half-wave rectifier",
      "back": "The same as the mains frequency: 50 Hz or 60 Hz.",
      "lesson": "m07-l2"
    },
    {
      "id": "m07-c10",
      "front": "Ripple frequency of a full-wave rectifier",
      "back": "Twice the mains frequency: 100 Hz on 50 Hz and 120 Hz on 60 Hz.",
      "lesson": "m07-l2"
    },
    {
      "id": "m07-c11",
      "front": "Approximate ripple voltage formula",
      "back": "ΔV ≈ I ÷ (f × C), peak to peak. I in amperes, f in hertz, C in farads.",
      "lesson": "m07-l2"
    },
    {
      "id": "m07-c12",
      "front": "Heat lost in a linear regulator",
      "back": "P = (Vin − Vout) × I.",
      "lesson": "m07-l2"
    },
    {
      "id": "m07-c13",
      "front": "Why is an SMPS smaller than a linear supply?",
      "back": "It switches at a high frequency, so its transformer needs far less iron.",
      "lesson": "m07-l3"
    },
    {
      "id": "m07-c14",
      "front": "DC voltage after rectifying 230 V mains",
      "back": "About 325 V (230 × 1.414). For 120 V mains it is about 170 V.",
      "lesson": "m07-l3"
    },
    {
      "id": "m07-c15",
      "front": "What is PWM?",
      "back": "Pulse-width modulation. The controller changes how long the transistor is on in each cycle to control the output.",
      "lesson": "m07-l3"
    },
    {
      "id": "m07-c16",
      "front": "Duty cycle formula",
      "back": "On time ÷ (on time + off time), usually given as a percentage.",
      "lesson": "m07-l3"
    },
    {
      "id": "m07-c17",
      "front": "What does the optocoupler do in an SMPS?",
      "back": "Carries the feedback signal across the isolation barrier with light, so there is no electrical connection.",
      "lesson": "m07-l3"
    },
    {
      "id": "m07-c18",
      "front": "What is the isolation barrier?",
      "back": "The separation between the mains-connected primary side and the touchable secondary side.",
      "lesson": "m07-l3"
    },
    {
      "id": "m07-c19",
      "front": "Rule for replacing a blown fuse",
      "back": "Find out why it blew first. Then fit the same type and rating, never a higher one.",
      "lesson": "m07-l4"
    },
    {
      "id": "m07-c20",
      "front": "Fuse blows the moment you switch on. Likely cause?",
      "back": "A shorted rectifier diode or switching transistor. Test with the diode range, unplugged and discharged.",
      "lesson": "m07-l4"
    },
    {
      "id": "m07-c21",
      "front": "What is hiccup mode?",
      "back": "The supply shuts down by protection, waits, and restarts again and again, usually because of an overload or fault.",
      "lesson": "m07-l4"
    },
    {
      "id": "m07-c22",
      "front": "Fuse intact but no output and no voltage on the bulk capacitor",
      "back": "Suspect an open inrush limiter thermistor or another break in the mains input path.",
      "lesson": "m07-l4"
    },
    {
      "id": "m07-c23",
      "front": "Signs of a dried electrolytic capacitor",
      "back": "Bulged top, leaked fluid, high ripple, failure to start when cold, or random resets.",
      "lesson": "m07-l4"
    },
    {
      "id": "m07-c24",
      "front": "What do the charge, development and transfer voltages do?",
      "back": "Charge: evens the drum surface. Development: moves toner to the drum. Transfer: pulls toner onto the paper.",
      "lesson": "m07-l5"
    },
    {
      "id": "m07-c25",
      "front": "What is ozone, and where does it come from?",
      "back": "An irritating gas made by corona discharge. Machines use filters and ventilation to deal with it.",
      "lesson": "m07-l5"
    },
    {
      "id": "m07-c26",
      "front": "Faint or uneven prints and toner on the high-voltage contacts",
      "back": "Dirty contacts weaken the voltage. Switch off, unplug and clean them with a dry lint-free cloth.",
      "lesson": "m07-l5"
    },
    {
      "id": "m07-c27",
      "front": "How do you confirm the bulk capacitor is discharged?",
      "back": "Discharge it through a suitable resistor, then measure DC voltage across it and check for near 0 V.",
      "lesson": "m07-l6"
    },
    {
      "id": "m07-c28",
      "front": "What does an isolation transformer do?",
      "back": "Separates the equipment from earth-referenced mains. It does not make touching both conductors safe.",
      "lesson": "m07-l6"
    },
    {
      "id": "m07-c29",
      "front": "Difference between creepage and clearance",
      "back": "Creepage is the shortest path along a surface. Clearance is the shortest path through air.",
      "lesson": "m07-l6"
    },
    {
      "id": "m07-c30",
      "front": "Where are X and Y capacitors fitted?",
      "back": "X: across the mains lines. Y: from the mains to earth or to the secondary. Replace only with the same safety type.",
      "lesson": "m07-l6"
    }
  ]
});

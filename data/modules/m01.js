OMM.registerModule({
  "id": "m01",
  "summary": "Recognise the hazards of servicing office machines, isolate and test equipment safely, protect electronics and people, and behave professionally with customers.",
  "outcomes": [
    "Identify the main hazards in office-equipment servicing and rank controls using the hierarchy of controls.",
    "Isolate a mains-powered machine, prove it dead and discharge stored energy in the correct order.",
    "Apply static-control methods when handling circuit boards and other electronic parts.",
    "Handle laser units, toner, cleaning chemicals and waste in line with safety data sheets and local rules.",
    "Respond correctly to lifting tasks, fires, electric shock and incidents.",
    "Protect customer data and property and communicate honestly and clearly with customers."
  ],
  "cheatsheet": [
    "Hierarchy of controls: eliminate, substitute, engineer, administrate, then PPE. PPE comes last.",
    "Isolation means unplugged, tagged, proved dead and discharged. Switching off at the machine is not isolation.",
    "Prove your meter on a known live source before and after you test for dead.",
    "Never bypass an interlock. Never fit a fuse of a higher rating than the one specified.",
    "You feel a static spark only above about 3,000 V. Chips can be damaged by far less.",
    "Never blow toner out. Use a toner-rated vacuum. Clean spills with cold water, not hot.",
    "Electric shock: switch off the supply first, then help. Call the emergency services.",
    "Electrical fire: never use water. Raise the alarm first, then use CO2 or dry powder if it is safe.",
    "Copiers store images of documents. Never read, copy or remove customer data."
  ],
  "lessons": [
    {
      "id": "m01-l1",
      "title": "Hazards, risk and the hierarchy of controls",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the main hazards you meet when you service office machines, the difference between a hazard and a risk, and the order in which you should choose ways to control danger."
        },
        {
          "t": "h",
          "text": "The hazards in your trade"
        },
        {
          "t": "p",
          "text": "A **hazard** is anything that can cause harm. An office machine holds many hazards in one box."
        },
        {
          "t": "diagram",
          "name": "warning-signs"
        },
        {
          "t": "ul",
          "items": [
            "**Electric shock**: mains voltage in the power supply and around the fuser lamp, and high voltage in the imaging parts.",
            "**Heat**: the fuser can stay hot for a long time after the machine is switched off. Burns happen in a second.",
            "**Moving parts and pinch points**: gears, belts, rollers and carriages can trap fingers, hair, jewellery and loose clothing.",
            "**Laser light**: the laser unit in a laser printer or copier can damage your eyes.",
            "**Toner dust**: a very fine powder that you should not breathe in.",
            "**Lifting**: copiers and large printers are heavy and awkward.",
            "**Sharp edges**: cut sheet-metal frames and brackets can slice skin.",
            "**Solvents and cleaning fluids**: some are flammable and some irritate the skin or lungs."
          ]
        },
        {
          "t": "h",
          "text": "Hazard and risk"
        },
        {
          "t": "p",
          "text": "A **risk** is the chance that a hazard will harm someone, combined with how serious the harm would be. A hot fuser is always a hazard. The risk is low when you let the machine cool and keep your hands out. The risk is high when you reach into a machine that was only just switched off."
        },
        {
          "t": "p",
          "text": "You cannot remove every hazard from a machine. You can, however, lower the risk. Before you open any machine, look at it and ask what could hurt you, and what you will do about it."
        },
        {
          "t": "h",
          "text": "The hierarchy of controls"
        },
        {
          "t": "p",
          "text": "The **hierarchy of controls** is a ranked list of ways to reduce risk. Start at the top. Methods near the top are stronger because they do not depend on people remembering to behave well."
        },
        {
          "t": "diagram",
          "name": "hierarchy-controls"
        },
        {
          "t": "table",
          "head": [
            "Level",
            "Meaning",
            "Example in this trade"
          ],
          "rows": [
            [
              "1. Eliminate",
              "Remove the hazard completely",
              "Unplug the machine so there is no mains voltage to touch"
            ],
            [
              "2. Substitute",
              "Replace it with something less dangerous",
              "Use a cleaning fluid that is not flammable when it does the same job"
            ],
            [
              "3. Engineering controls",
              "Guards, interlocks, extraction",
              "A cover interlock that cuts power when the cover opens; a vacuum with a fine filter"
            ],
            [
              "4. Administrative controls",
              "Rules, training, signs, procedures",
              "Warning labels, a tag-out procedure, a rule that heavy machines are moved by two people"
            ],
            [
              "5. PPE",
              "Protective equipment worn by the person",
              "Safety glasses, gloves, a dust mask, safety shoes"
            ]
          ],
          "caption": "Controls ranked from strongest to weakest"
        },
        {
          "t": "note",
          "kind": "key",
          "text": "**PPE** (personal protective equipment) is the last line of defence, not the first. If you can remove the hazard, remove it. Unplugging a machine is the strongest control you have."
        },
        {
          "t": "example",
          "title": "Applying the controls to a hot fuser",
          "steps": [
            "Hazard: the fuser rollers are hot enough to burn skin, and they stay hot after printing stops.",
            "Eliminate: you cannot remove the heat while the machine works, but you can switch off, unplug and wait until the fuser has cooled.",
            "Engineering: the machine has covers that keep your hands away, and warning labels on hot parts.",
            "Administrative: your workshop rule says nobody opens a fuser until the cool-down time in the manual has passed.",
            "PPE: if you must handle a part that may still be warm, wear heat-resistant gloves. This is a backup, not the plan."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Treat anything near a fuser as hot until you have proved it is cool, for example by holding the back of your hand near it, not on it."
        }
      ]
    },
    {
      "id": "m01-l2",
      "title": "Working safely on mains-powered equipment",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains how to isolate a machine from the supply, prove it is dead, discharge stored energy, and what to do in the rare case where a live check cannot be avoided."
        },
        {
          "t": "h",
          "text": "Isolate first"
        },
        {
          "t": "p",
          "text": "Mains voltage is 230 V at 50 Hz in many countries and 120 V at 60 Hz in others. Both can kill. **Isolation** means disconnecting the machine from the supply so that it cannot become live while you work."
        },
        {
          "t": "diagram",
          "name": "isolation-sequence"
        },
        {
          "t": "p",
          "text": "Switching off at the machine's own switch is not isolation. A fault, a second person or a switch failure can still leave parts live. Pull the plug from the wall socket and keep it where you can see it."
        },
        {
          "t": "ol",
          "items": [
            "Tell people nearby that you are going to work on the machine.",
            "Switch the machine off at its power switch.",
            "Unplug the power cord from the wall socket. Hold the plug, never the cable.",
            "Fit a tag that says **Do not switch on**. If the socket is shared, cover it or use a lock-out device. This is called **tagging out**.",
            "Wait for stored energy and heat to fall. The manual may give a wait time.",
            "Prove the parts you will touch are dead with a meter, then discharge any capacitors."
          ]
        },
        {
          "t": "h",
          "text": "Test before you touch"
        },
        {
          "t": "p",
          "text": "Never assume a machine is dead. Measure it. A meter with a broken lead or a flat battery can show 0 V on a live circuit. So prove the meter first on a known live source, test the machine, and then prove the meter again. This is called prove, test, prove."
        },
        {
          "t": "h",
          "text": "Stored energy"
        },
        {
          "t": "p",
          "text": "A **capacitor** stores electric charge. Large capacitors in power supplies can keep a dangerous charge after the plug is pulled. Discharge them only with a proper discharge tool or a resistor of suitable rating, as the manual describes. Then measure to confirm 0 V."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never short a capacitor with a screwdriver. It can make a loud spark, melt the tip, damage the part and burn you."
        },
        {
          "t": "h",
          "text": "Protective devices and checks"
        },
        {
          "t": "p",
          "text": "A **residual-current device** (RCD) switches off the supply within a fraction of a second when current leaks to earth, for example through a person. It is also called an earth-leakage breaker or GFCI. Many countries use devices rated about 30 mA for personal protection. An RCD lowers the risk of a fatal shock. It does not make live work safe."
        },
        {
          "t": "ul",
          "items": [
            "Use **insulated tools** with undamaged handles.",
            "Check the power cord and plug before every job: cracked insulation, bare wire, bent or burnt pins, a cracked plug body, or a cable that feels warm.",
            "Do not repair a damaged cord with tape. Replace the cord or the plug.",
            "Where a plug has a fuse, it must have the rating the machine specifies."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never bypass an **interlock**. An interlock is a switch that cuts power, or laser light, when a cover opens. Do not tape it, jam it or hold it closed with a tool. Never replace a fuse with a larger rating. The fuse protects the wiring from overheating and fire."
        },
        {
          "t": "h",
          "text": "When a live check cannot be avoided"
        },
        {
          "t": "p",
          "text": "Some faults need a measurement with the power on. Do this only when the manual requires it, you are trained, and another person who can switch off the supply is close by. Use insulated probes. Keep one hand behind your back or in a pocket, so current cannot pass across your chest. Remove rings and watches. Touch only the point you must measure."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Dead before you touch: unplug, test, discharge. Treat every machine as live until you have proved it dead."
        }
      ]
    },
    {
      "id": "m01-l3",
      "title": "Static electricity and handling electronics",
      "minutes": 7,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers static electricity, why it damages electronic parts, and how you protect circuit boards while you handle them."
        },
        {
          "t": "h",
          "text": "What static does"
        },
        {
          "t": "p",
          "text": "**Static electricity** is electric charge that builds up on a surface. When two materials rub together or are pulled apart, one gains charge and the other loses it. Walking on a floor, sliding on a chair, peeling plastic film and handling plastic covers all build charge on your body."
        },
        {
          "t": "p",
          "text": "**ESD** (electrostatic discharge) is the sudden flow of that charge when it finds a path, for example from your finger into a circuit board. You feel a spark only above about 3,000 V. Many electronic parts can be damaged by far less. So you can destroy a part without feeling or seeing anything."
        },
        {
          "t": "p",
          "text": "The damage may be immediate, or it may be **latent**. A latent fault means the part still works today but fails weeks later. This is very hard to trace, and it makes the machine look unreliable."
        },
        {
          "t": "h",
          "text": "Which parts are most vulnerable"
        },
        {
          "t": "ul",
          "items": [
            "Microprocessors and memory chips.",
            "MOSFETs and other CMOS integrated circuits.",
            "Laser diodes and some sensors.",
            "Any circuit board that carries these parts. Treat every board as sensitive."
          ]
        },
        {
          "t": "p",
          "text": "Resistors, ordinary wire and heavy relays are much less sensitive. You still handle every board with care, because you cannot see what is on it that matters."
        },
        {
          "t": "h",
          "text": "Protecting the parts"
        },
        {
          "t": "ul",
          "items": [
            "Wear a **wrist strap** snug on bare skin, connected to a proper earth point or to an earthed bench mat. The strap holds a resistor, often about 1 MΩ, that limits current and lets charge drain away slowly.",
            "Work on an anti-static mat that is connected to earth.",
            "Keep spare boards in **shielding bags** (metallised, anti-static bags) until you are ready to fit them. Do not put them on the machine's plastic covers.",
            "Hold a board by its edges. Do not touch connector pins, chip legs or the gold fingers.",
            "Keep plastic cups, foam, tape and packaging away from the work area.",
            "With no strap, touch the earthed bare metal frame first, then the board. Do it again after you have moved or sat down."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never wear a wrist strap while working on mains-live or high-voltage parts. The strap protects parts from static. It does not protect you from shock. Isolate the machine first in any case."
        },
        {
          "t": "p",
          "text": "Dry air makes static worse because charge cannot leak away. Humidity that is moderate, often held between about 40% and 60%, helps. Many workshops also use anti-static flooring and clothing."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Keep the new board in its bag until you are at your anti-static bench. Open it there. Put the old board into the same bag afterward, so it is protected for the return trip."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Earth yourself first, then touch the board, and carry it by its edges."
        }
      ]
    },
    {
      "id": "m01-l4",
      "title": "Laser, toner, chemicals and waste",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers laser light, toner dust, cleaning chemicals and the correct disposal of waste from office machines."
        },
        {
          "t": "h",
          "text": "Laser safety"
        },
        {
          "t": "p",
          "text": "A **laser** gives out a narrow beam of light with a lot of energy packed into a tiny spot. The laser unit in a printer or copier writes the image onto the drum. Lasers are sorted into **classes** by how much harm they can do."
        },
        {
          "t": "p",
          "text": "In plain terms, a Class 1 product is safe in normal use. Higher classes, such as 3B and 4, can injure eyes, even from a reflection. Many machines are sold as Class 1 because a stronger laser is sealed inside a closed unit. The label describes the machine with its covers closed. It does not describe the laser inside when you open the machine."
        },
        {
          "t": "p",
          "text": "Many printer lasers are infrared. You cannot see the beam, and your blink reflex gives no protection. Eye damage can be painless and permanent."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Interlocks guard you against laser light as well as against mains voltage. Never defeat one. Never look into a laser opening. Never use a mirror or a shiny tool to check where a beam goes. Follow the manual for any laser adjustment."
        },
        {
          "t": "h",
          "text": "Toner"
        },
        {
          "t": "p",
          "text": "**Toner** is a very fine powder of plastic and pigment. Breathing a cloud of it is bad for your lungs, and it stains everything."
        },
        {
          "t": "ul",
          "items": [
            "Never blow toner out of a machine with your mouth or compressed air. It makes a cloud.",
            "Use a vacuum that is made for toner, with a fine filter. An ordinary household vacuum can pass fine powder through its filter, and its motor can spark.",
            "Wipe spills with a damp cloth and cold water. Heat melts toner and fixes it into fabric and skin.",
            "Wear gloves, and a suitable dust mask for dusty jobs. Wash your hands afterwards.",
            "Do not burn toner or cartridges."
          ]
        },
        {
          "t": "h",
          "text": "Chemicals and safety data sheets"
        },
        {
          "t": "p",
          "text": "A **safety data sheet** (SDS) comes from the maker of each chemical product. It lists the hazards, safe handling, first aid, fire-fighting and disposal. Read it before you use the product for the first time. Labels also carry **hazard pictograms**, which are symbols in a red diamond, used in many countries."
        },
        {
          "t": "table",
          "head": [
            "Pictogram",
            "Warns of"
          ],
          "rows": [
            [
              "Flame",
              "Flammable: keep away from heat, sparks and flame"
            ],
            [
              "Exclamation mark",
              "Irritant or harmful: avoid skin and eye contact"
            ],
            [
              "Corrosion",
              "Burns skin and eyes, or attacks metals"
            ],
            [
              "Skull and crossbones",
              "Toxic: dangerous even in small amounts"
            ],
            [
              "Health hazard",
              "Possible serious long-term harm to health"
            ],
            [
              "Environment",
              "Harmful to water life: never pour down a drain"
            ]
          ],
          "caption": "Common hazard pictograms"
        },
        {
          "t": "p",
          "text": "Use only the cleaning fluid that the service manual names for each part. The wrong fluid can damage rubber and plastic. Work in a ventilated area. Keep the fluid in its original labelled container, never in a drink bottle. Never mix chemicals."
        },
        {
          "t": "h",
          "text": "Waste"
        },
        {
          "t": "p",
          "text": "Used toner, cartridges, drums, batteries and electronic parts must not go into the general bin. Rules differ by country, so follow local law and the maker's return scheme. Keep used batteries in a non-metal container away from heat, because a shorted or crushed battery can start a fire. Some lamps contain hazardous material, so check the manual. Send circuit boards to an approved recycler."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Never blow toner, never burn it, and never put it in the ordinary bin."
        }
      ]
    },
    {
      "id": "m01-l5",
      "title": "Lifting, fire and first aid",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers lifting heavy machines, dealing with fire, helping someone who has had an electric shock, and reporting incidents."
        },
        {
          "t": "h",
          "text": "Lifting and moving"
        },
        {
          "t": "p",
          "text": "Copiers and large printers can weigh far more than one person should lift. Safe limits differ by country and by person, and an awkward shape makes a load harder than its weight suggests. Find the weight in the manual or on the label before you lift."
        },
        {
          "t": "ul",
          "items": [
            "Plan the route first and clear obstacles. Check the destination has space.",
            "Bend your knees, keep your back straight, hold the load close to your body and do not twist.",
            "Use a **team lift** for heavy or awkward items. Agree who gives the signals.",
            "Use a trolley, ramp or lifting aid. Remove trays and paper to reduce weight where the manual allows.",
            "Wear safety shoes. Keep fingers away from pinch points when you set the load down.",
            "Do not carry a heavy machine on stairs without the right equipment and enough people."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "If you cannot lift it comfortably, do not lift it alone. Ask for help or fetch a trolley."
        },
        {
          "t": "h",
          "text": "Fire"
        },
        {
          "t": "p",
          "text": "Fire needs fuel, heat and air. In office machines the fuel is paper, toner, plastic and solvents, and the heat comes from a fuser, a short circuit or overloaded wiring. Know where the exits, alarm points and extinguishers are before you start work."
        },
        {
          "t": "table",
          "head": [
            "Extinguisher",
            "Use on",
            "Do not use on"
          ],
          "rows": [
            [
              "Water",
              "Paper, wood, fabric",
              "Live electrical equipment, flammable liquids"
            ],
            [
              "Carbon dioxide (CO2)",
              "Electrical equipment, flammable liquids",
              "Nothing in the office, but the horn gets very cold; do not hold it"
            ],
            [
              "Dry powder",
              "Many fires, including electrical",
              "Delicate electronics if avoidable: the powder leaves a damaging residue"
            ],
            [
              "Foam",
              "Flammable liquids and solids",
              "Live electrical equipment"
            ]
          ],
          "caption": "Colour codes and class letters differ by country, so read the label on the extinguisher"
        },
        {
          "t": "ol",
          "items": [
            "Raise the alarm and call the fire service.",
            "If the fire is small, you are trained and your exit is behind you, switch off the power if it is safe to do so.",
            "Pull the pin. Aim at the base of the flames. Squeeze the handle. Sweep from side to side.",
            "If the fire grows, leave and close the door behind you."
          ]
        },
        {
          "t": "h",
          "text": "Electric shock and first aid"
        },
        {
          "t": "p",
          "text": "If someone is held by a live conductor, your safety comes first. If you touch them, you may become part of the circuit."
        },
        {
          "t": "ol",
          "items": [
            "Switch off the supply at the socket, machine or main breaker, or unplug it, if you can reach it safely.",
            "Call for help and ask someone to call the emergency services. The number differs by country.",
            "Do not touch the person until the supply is off. If you cannot switch off, a trained person may move the casualty with a dry, non-conducting object such as a wooden stick. Never use anything metal or damp.",
            "Check breathing. If the person is not breathing normally and you are trained, start CPR.",
            "Cool burns with cool running water for at least 10 minutes.",
            "Anyone who has had a shock must see a medical professional, even if they feel well. Heart problems can appear later."
          ]
        },
        {
          "t": "p",
          "text": "Know where the first aid kit is and who the trained first aider is. Check that the kit is complete and in date."
        },
        {
          "t": "h",
          "text": "Reporting"
        },
        {
          "t": "p",
          "text": "A **near miss** is an event that did not hurt anyone but could have. Report incidents and near misses to your supervisor. Write down what happened, where, when and who was there. Reports let others fix the cause before someone is hurt."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Switch off first, then help. Never become a second casualty."
        }
      ]
    },
    {
      "id": "m01-l6",
      "title": "Professional conduct and customers",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how a service technician behaves with customers: protecting their information and property, being honest, communicating clearly and handling complaints."
        },
        {
          "t": "h",
          "text": "Confidentiality"
        },
        {
          "t": "p",
          "text": "Many copiers, printers and multifunction products keep images of documents on an internal drive or in memory. They may also hold address books, scan destinations, job logs and passwords. A fax can keep received pages in memory."
        },
        {
          "t": "p",
          "text": "**Confidentiality** means you do not read, copy, take away or talk about customer information that you see while you work. Do not photograph customer documents. Use your own test chart for test copies. If a drive must be replaced, ask the customer how the old drive should be erased, destroyed or returned, and record what was agreed."
        },
        {
          "t": "h",
          "text": "Honesty and respect for property"
        },
        {
          "t": "ul",
          "items": [
            "Explain the fault in plain words, and give the cost before you start work that costs money.",
            "Do not say a part is faulty until you have proved it.",
            "Admit your own mistakes at once. Hiding one makes it worse.",
            "Protect floors and furniture. Clean up when you finish.",
            "Do not use the customer's phone, computer or network without permission.",
            "Ask before you switch off or unplug equipment. It may be in use."
          ]
        },
        {
          "t": "h",
          "text": "Presentation"
        },
        {
          "t": "p",
          "text": "Arrive on time. If you will be late, phone before the appointment. Wear clean, suitable clothes and safety shoes, and carry identification. Keep your tools tidy and your phone quiet. People judge your work partly by how you look and behave."
        },
        {
          "t": "h",
          "text": "Communication and complaints"
        },
        {
          "t": "p",
          "text": "Listen first. Let the customer describe the problem without interruption, then ask short questions. Explain in plain words and avoid jargon. Say what you will do before you do it, and confirm the result afterwards."
        },
        {
          "t": "ol",
          "items": [
            "Stay calm and listen without arguing or blaming.",
            "Thank the customer for telling you, and show you understand the problem.",
            "Repeat the problem back to confirm you have it right.",
            "Say what you will do and when.",
            "Do it. If you cannot fix it yourself, pass it to your supervisor and tell the customer who will contact them."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "An angry customer is usually angry about the problem, not about you. Listening for two minutes often saves twenty minutes of argument."
        },
        {
          "t": "h",
          "text": "Keeping skills up to date"
        },
        {
          "t": "p",
          "text": "Machines, firmware and safety methods change. Read manuals and service bulletins, take manufacturer training, keep a record of your courses, and ask experienced colleagues. Know the limit of your skill. On a safety matter, stop and ask rather than guess."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Customers trust you with their machine, their data and their premises. If you lose that trust, you lose the customer."
        }
      ]
    }
  ],
  "practical": {
    "title": "Workshop safety check and safe isolation of a training machine",
    "objective": "Check your workshop for safety equipment, then isolate a mains-powered training machine in the correct order and check its earth bond with the machine unplugged.",
    "time": "60 minutes",
    "tools": [
      "A mains-powered training machine (copier or printer) that your workshop has set aside for practice",
      "Digital multimeter with fresh battery and undamaged leads",
      "Plug-in socket tester, if your workshop has one",
      "Warning tag or label reading Do not switch on",
      "Wrist strap and anti-static mat connected to earth",
      "Pen and a copy of the checklist table you will draw in your notebook"
    ],
    "safety": [
      "Work only on the machine your workshop has set aside for training, and only with the covers the manual allows you to open.",
      "The machine must be unplugged for every step after step 5. Do not plug it in again until the final step.",
      "Do not touch the inside of the power supply, the fuser or any laser unit. You are only looking, not repairing.",
      "Do not wear the wrist strap while the machine is connected to the supply.",
      "Never bypass an interlock. If a cover does not open normally, stop and ask a qualified person.",
      "If anything looks damaged, such as a cracked plug or frayed cable, do not use the machine and report it."
    ],
    "steps": [
      "Walk around your workshop and write down where the first aid kit, the fire extinguishers, the emergency exits and the electrical isolator or main breaker are.",
      "Read the labels on each extinguisher and write down what type each is and whether it is allowed on electrical equipment.",
      "Look at the training machine's rating label. Write down the supply voltage, frequency and power or current, and compare them with your workshop supply.",
      "Inspect the power cord and plug for cracked insulation, bare wire, bent pins and a loose plug body, with the machine still unplugged. Record what you see.",
      "If a plug-in socket tester is available, use it on the wall socket and record the result. Press the test button of the RCD protecting the socket and note that it switches off, then reset it.",
      "Switch the machine off at its own switch. Hold the plug body and pull it from the wall socket.",
      "Attach the Do not switch on tag to the plug or the socket, and keep the plug in sight.",
      "Wait for the time the service manual gives for the machine to cool and for stored energy to fall. If no time is given, wait at least ten minutes.",
      "Open one cover that the manual allows you to open without tools, and write down every warning label you see inside, such as hot, laser, high voltage and pinch point.",
      "Close the cover. Locate the interlock switch for that cover and write down where it is. Do not touch or press it.",
      "Set the multimeter to continuity or the lowest resistance range. Touch the probes together and note the reading from the leads alone.",
      "Place one probe on the earth pin of the unplugged power plug and the other on a bare, unpainted metal screw on the machine frame. Record the reading, subtract the lead reading, and compare with your workshop's limit.",
      "Put on the wrist strap, clip it to the earth point and take it off again, to practise the order. Then remove the tag, plug in the machine, switch on, listen for odd noises or smells and switch off.",
      "Unplug the machine, replace the tag and write a short summary of any problems you found."
    ],
    "checks": [
      "I can state in order the steps for isolating a mains-powered machine.",
      "I can explain why switching off at the machine's own switch is not isolation.",
      "I can name the safety equipment in my workshop and say where each item is.",
      "I can read a continuity or low-resistance measurement and say what a good earth bond looks like.",
      "I can explain why I never touch an interlock or defeat it."
    ]
  },
  "quiz": [
    {
      "id": "m01-q01",
      "q": "What is a hazard in the workplace?",
      "options": [
        "The chance that someone will be harmed",
        "Anything that has the potential to cause harm",
        "A written rule that tells you how to work safely",
        "An injury that has already happened"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m01-l1",
      "explain": "A hazard is the source of possible harm, such as a hot fuser. The chance that the harm will happen is the risk, which is the tempting wrong idea here."
    },
    {
      "id": "m01-q02",
      "q": "A fuser stays hot for some time after the machine is switched off. Which statement is correct?",
      "options": [
        "The hazard disappears as soon as the machine is switched off",
        "The risk is unchanged whether the fuser is hot or cold, because the part is the same",
        "The risk is zero as long as you wear heat-resistant gloves while you work on it",
        "The hazard remains, and waiting for the part to cool lowers the risk"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m01-l1",
      "explain": "The hot part is still a hazard, but waiting lowers the chance of a burn. Gloves reduce harm but do not remove the risk, and switching off does not cool the part at once."
    },
    {
      "id": "m01-q03",
      "q": "In the hierarchy of controls, which method is at the top, because it is the strongest?",
      "options": [
        "Eliminating the hazard",
        "Wearing protective equipment",
        "Putting up warning signs",
        "Training the staff"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m01-l1",
      "explain": "Removing the hazard leaves nothing to go wrong. Protective equipment is at the bottom because it relies on the person wearing it correctly every time."
    },
    {
      "id": "m01-q04",
      "q": "Which of these is an engineering control?",
      "options": [
        "Wearing safety glasses",
        "Posting a sign about hot surfaces",
        "A cover interlock that cuts power when the cover is opened",
        "Training a new technician to work carefully"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m01-l1",
      "explain": "An engineering control is built into the equipment and works whatever the person does. Signs and training are administrative, and glasses are protective equipment."
    },
    {
      "id": "m01-q05",
      "q": "You must replace a roller. The machine is plugged in and switched off at its own power switch. Which action removes the shock hazard completely?",
      "options": [
        "Wearing insulating gloves while you work",
        "Pulling the plug out of the wall socket",
        "Sticking a warning label on the front panel",
        "Working quickly so the time at risk is short"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m01-l1",
      "explain": "Unplugging eliminates mains voltage at the machine. Gloves, labels and speed only reduce the risk, and a switch can fail while the machine stays connected."
    },
    {
      "id": "m01-q06",
      "q": "What does isolating a mains-powered machine mean?",
      "options": [
        "Disconnecting it from the supply so it cannot become live",
        "Moving it well away from the other machines in the workshop while you service it",
        "Switching it off with the power switch on its front panel and leaving it there",
        "Covering the power cord with insulating tape along its whole length"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m01-l2",
      "explain": "Isolation means a real disconnection from the supply, normally by unplugging. A front-panel switch is tempting but can fail or leave internal parts live."
    },
    {
      "id": "m01-q07",
      "q": "Why do you prove your meter on a known live source before and after testing a machine for dead?",
      "options": [
        "To warm the meter up so that the reading is accurate",
        "To make sure the supply is not too high for the meter range",
        "To show the customer that you are working carefully",
        "A faulty meter or lead can read 0 V on a live circuit"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m01-l2",
      "explain": "A zero reading is only trustworthy if the meter is known to work. Without proving it, a broken lead or flat battery could hide a live circuit."
    },
    {
      "id": "m01-q08",
      "q": "You have unplugged a copier and opened the power supply. A large capacitor may still hold charge. What is the correct next step?",
      "options": [
        "Short its terminals with a screwdriver to empty it quickly",
        "Touch it briefly with one finger to check whether it gives a tingle",
        "Discharge it with a proper tool or resistor, then measure 0 V",
        "Assume it is empty because the machine has been unplugged for a minute"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m01-l2",
      "explain": "A controlled discharge followed by a measurement proves the capacitor is safe. Shorting with a screwdriver can spark and burn, and waiting alone proves nothing."
    },
    {
      "id": "m01-q09",
      "q": "A technician tapes a cover interlock closed so the machine will run with the cover open. What is wrong with this?",
      "options": [
        "Nothing, provided the technician wears safety glasses while working",
        "It removes the protection against mains voltage and moving parts",
        "It makes the interlock switch wear out faster than normal use would",
        "It is allowed for any fault that takes less than ten minutes to find"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m01-l2",
      "explain": "The interlock is there to cut power or laser light when the cover opens. Glasses do not protect against shock or moving parts, and short jobs are no exception."
    },
    {
      "id": "m01-q10",
      "q": "A machine keeps blowing its mains fuse. A colleague says to fit a larger fuse so that it stops. What should you do?",
      "options": [
        "Refuse, because the fuse protects the wiring, and find the cause",
        "Agree, as long as the larger fuse is only slightly bigger than the old one",
        "Agree, because the old fuse is probably faulty and has weakened with age",
        "Fit two fuses in parallel so that the machine has more margin"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m01-l2",
      "explain": "A fuse that keeps blowing is reporting a fault. A larger fuse lets more current flow through wiring that was not designed for it, which can start a fire."
    },
    {
      "id": "m01-q11",
      "q": "What does a residual-current device (RCD) do?",
      "options": [
        "Keeps the mains voltage steady while the machine is running",
        "Stops the fuser from overheating",
        "Quickly disconnects the supply when current leaks to earth",
        "Prevents the plug from being pulled out by accident"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m01-l2",
      "explain": "An RCD detects current leaking to earth, for example through a person, and cuts the supply fast. It lowers the risk but does not make live work safe."
    },
    {
      "id": "m01-q12",
      "q": "A live measurement cannot be avoided and the manual requires it. Which practice is correct?",
      "options": [
        "Work alone in a quiet area so that nobody distracts you or touches the machine",
        "Hold the probes with both hands and lean on the frame to keep a steady grip",
        "Wear a metal watch and ring so that you can time the test and keep your hands free",
        "Use insulated probes, keep one hand away, and have a trained person nearby"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m01-l2",
      "explain": "Keeping one hand away stops current passing across your chest, and a trained person nearby can switch off and help. Two hands on the probes or a metal watch increase the danger."
    },
    {
      "id": "m01-q13",
      "q": "What does ESD stand for?",
      "options": [
        "Electrical safety device",
        "Electrostatic discharge",
        "Electronic signal distortion",
        "Extra-low supply direct current"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m01-l3",
      "explain": "ESD is the sudden flow of built-up static charge. It is not a device and it is not related to the supply voltage of the machine."
    },
    {
      "id": "m01-q14",
      "q": "You feel a static spark only above about 3,000 V. What does this tell you about electronic parts?",
      "options": [
        "Many parts can be damaged by static too small to feel",
        "Parts are safe unless you actually feel a spark when you touch them",
        "Static can only harm parts that are connected to the mains supply",
        "Only large parts such as motors can be damaged by static"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m01-l3",
      "explain": "Sensitive chips can fail at voltages far below the point where a person feels a spark. Feeling nothing does not mean nothing happened, and the part does not need power for the damage to occur."
    },
    {
      "id": "m01-q15",
      "q": "Why does a wrist strap have a resistor in its lead?",
      "options": [
        "To store charge so that it is available to the board",
        "To protect the wearer from mains voltage completely",
        "To limit current so that static charge drains away slowly",
        "To make the strap heavy enough to stay in place"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m01-l3",
      "explain": "The resistor lets charge leak to earth gently and limits the current. It is meant for static control, so it is not protection against mains shock."
    },
    {
      "id": "m01-q16",
      "q": "You collect a replacement controller board from your vehicle and arrive at a customer's office. What is the best way to handle it?",
      "options": [
        "Take it out of its bag at the door so it can adjust to the room temperature",
        "Carry it in an ordinary plastic carrier bag so that it stays clean and dry",
        "Place it on the machine's plastic cover while you prepare the other tools",
        "Keep it in its shielding bag until earthed, then hold it by its edges"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m01-l3",
      "explain": "The bag protects the board until you have earthed yourself. An ordinary plastic bag or a plastic cover can hold and discharge static onto the board."
    },
    {
      "id": "m01-q17",
      "q": "Which of these parts is most likely to be damaged by static electricity?",
      "options": [
        "A memory chip on a circuit board",
        "A mains power cord",
        "A steel machine frame",
        "A heavy-duty relay coil"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m01-l3",
      "explain": "Chips with fine internal structures are the most sensitive. Cords, frames and heavy coils tolerate static far better."
    },
    {
      "id": "m01-q18",
      "q": "In plain terms, what does a Class 1 laser product label mean?",
      "options": [
        "The laser is safe even if the covers are open and the interlock is defeated",
        "The laser is too weak to print anything",
        "The laser is safe in normal use, with the machine closed",
        "The beam is visible and easy to avoid"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m01-l4",
      "explain": "Class 1 describes the product in normal use. The label does not cover a stronger laser inside the machine once you open it, which is why interlocks matter."
    },
    {
      "id": "m01-q19",
      "q": "Why is an invisible infrared laser beam especially dangerous to the eyes?",
      "options": [
        "It is always hotter than visible light, so it burns the eye at once",
        "You cannot see it, so no blink reflex protects you",
        "It can only be switched off at the wall socket, not inside the machine",
        "It passes through the skin and so harms the organs beneath it"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m01-l4",
      "explain": "Without visible light the eye does not react, so injury can happen before you notice. The danger is not about heat or the skin."
    },
    {
      "id": "m01-q20",
      "q": "Toner has spilled inside a machine and a colleague offers a can of compressed air to blow it out. What is the best method?",
      "options": [
        "Blow it out quickly with compressed air, holding your breath while you do it",
        "Brush it into the corners of the machine where it will not be seen",
        "Wipe it with a cloth that has been dipped in hot water and wrung out",
        "Use a toner vacuum with a fine filter, then a cloth dampened in cold water"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m01-l4",
      "explain": "Blowing makes a cloud that you and the machine will breathe in. Hot water melts the toner so it sticks, while cold water and a proper vacuum remove it."
    },
    {
      "id": "m01-q21",
      "q": "Why should you clean toner from skin or clothes with cold water rather than hot water?",
      "options": [
        "Heat can melt the toner and fix it into the skin or fabric",
        "Cold water dissolves toner but hot water does not",
        "Hot water makes the toner dust spread in the air",
        "Cold water cancels the electric charge of the toner"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m01-l4",
      "explain": "Toner is plastic powder that is designed to melt in a fuser. Hot water softens it and makes it stick. It does not dissolve in cold water either, it simply stays loose and rinses away."
    },
    {
      "id": "m01-q22",
      "q": "A cleaning product has a flame pictogram. You must clean a rubber roller near the fuser. What is the sensible plan?",
      "options": [
        "Use it straight away, because the warm fuser helps the liquid dry faster",
        "Let it cool, unplug, ventilate and follow the safety data sheet",
        "Use it only after you have poured some into a smaller unmarked bottle",
        "Mix it with water first so that the flammable part is removed"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m01-l4",
      "explain": "A flame symbol means the product can ignite, so heat, sparks and unplugged equipment matter. Decanting into an unlabelled bottle and mixing chemicals both add new hazards."
    },
    {
      "id": "m01-q23",
      "q": "Someone is held by a live electrical conductor and cannot let go. What should you do first?",
      "options": [
        "Pull them away with your bare hands",
        "Throw water over them to cool the burn",
        "Start CPR at once",
        "Switch off the supply, if you can do so safely"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m01-l5",
      "explain": "If you touch the person while the supply is still on, current may pass through you as well. Switching off first protects you both."
    },
    {
      "id": "m01-q24",
      "q": "A small fire starts in a plugged-in copier. Water and CO2 extinguishers are on the wall. After raising the alarm, which is the right choice if you are trained and the exit is behind you?",
      "options": [
        "Water, because most of the burning material is paper",
        "Water, because it cools the fuser fastest",
        "CO2, and switch off the power first if you can do so safely",
        "Neither; open the covers and blow on the flames"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m01-l5",
      "explain": "Water can carry current to you and damage equipment, so it is not used on live electrical fires. Opening covers feeds the fire with more air."
    },
    {
      "id": "m01-q25",
      "q": "Which approach is correct for moving a heavy copier across a workshop?",
      "options": [
        "Plan the route, use a trolley or team lift, and keep the load close",
        "Lift it alone in one smooth movement, twisting your body to turn the corner",
        "Drag it across the floor by its power cord to avoid bending your back",
        "Lift it by its plastic covers so that your hands are at a good height"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m01-l5",
      "explain": "A planned route, a trolley or team lift, and a good posture reduce injury. Twisting under load causes back injuries, and covers and cords are not made to carry weight."
    },
    {
      "id": "m01-q26",
      "q": "A colleague gets an electric shock, feels fine and wants to carry on working. Why should they still seek medical advice?",
      "options": [
        "The skin will need a dressing",
        "A shock can cause heart rhythm problems that appear later",
        "The company must pay for a hospital visit",
        "The machine must be repaired first"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m01-l5",
      "explain": "Current through the body can upset the heart's rhythm, and the effect may be delayed. Feeling well straight afterwards does not rule it out."
    },
    {
      "id": "m01-q27",
      "q": "What is a near miss?",
      "options": [
        "A minor injury that did not need first aid",
        "A machine fault that was repaired before the customer saw it",
        "An event that did not injure anyone but could have",
        "An accident caused by someone else"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m01-l5",
      "explain": "A near miss is a warning without harm. Reporting it lets someone fix the cause. A minor injury is an incident, not a near miss."
    },
    {
      "id": "m01-q28",
      "q": "Why is a copier a confidentiality concern for a service technician?",
      "options": [
        "Its covers are noisy and can disturb the customer's staff",
        "It uses toner that can stain the customer's documents",
        "It must be recorded in a service log in the customer's file each time it is opened",
        "It can store images of documents and other private information"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m01-l6",
      "explain": "Stored scans, address books and job logs can hold private data. You may see them while you work, so you must not read, copy or discuss them."
    },
    {
      "id": "m01-q29",
      "q": "A multifunction product's hard drive has failed and must be replaced. What is the right way to handle the old drive?",
      "options": [
        "Take it to the workshop and keep it in case the customer asks later",
        "Ask the customer how it should be erased, destroyed or returned",
        "Throw it away together with the old packaging from the new drive",
        "Copy its files to your laptop so you can check what data was lost"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m01-l6",
      "explain": "The data belongs to the customer, so they decide how the drive is treated. Keeping, binning or copying it all put their information at risk."
    },
    {
      "id": "m01-q30",
      "q": "While refitting a cover you crack a hinge. The customer has not noticed. What should you do?",
      "options": [
        "Tell the customer and your supervisor honestly and offer to put it right",
        "Say nothing and hope the hinge lasts",
        "Blame the age of the machine if they find out",
        "Glue it quickly and mention it only if asked"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m01-l6",
      "explain": "Honesty keeps the customer's trust, and a cracked hinge may affect safety. Hiding the damage or blaming the machine is dishonest and makes the situation worse."
    },
    {
      "id": "m01-q31",
      "q": "A customer is angry that the machine broke down again. What should you do first?",
      "options": [
        "Explain that the problem is caused by the way they use the machine",
        "Offer a discount before you know what is wrong",
        "Listen without interrupting and show you understand, then say what you will do",
        "Give them the service manual so they can see the cause"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m01-l6",
      "explain": "Listening first calms the situation and gives you the facts. Arguing or offering money before you understand the problem does not solve it."
    },
    {
      "id": "m01-q32",
      "q": "Why must a service technician keep their skills up to date?",
      "options": [
        "To be allowed to charge higher prices for each service visit",
        "Because older machines are always easier to repair than new ones",
        "Because service manuals never change once they have been printed",
        "Because machines, firmware and safety methods keep changing"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m01-l6",
      "explain": "New models and updated procedures differ from older ones. Relying on old knowledge can damage equipment or put people at risk."
    },
    {
      "id": "m01-q33",
      "q": "A customer's used toner cartridge is no longer needed. What is the correct way to dispose of it?",
      "options": [
        "Follow local rules and the maker's return or recycling scheme",
        "Burn it so the toner is destroyed",
        "Empty the toner down a drain and bin the case",
        "Put it in the general bin to be collected with other rubbish"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m01-l4",
      "explain": "Cartridges are managed waste, and collection schemes exist for them. Toner dust can burn, pollute water and should not go in the general bin."
    }
  ],
  "cards": [
    {
      "id": "m01-c01",
      "front": "What is a hazard?",
      "back": "Anything that has the potential to cause harm, such as a hot fuser or mains voltage.",
      "lesson": "m01-l1"
    },
    {
      "id": "m01-c02",
      "front": "What is a risk?",
      "back": "The chance that a hazard will cause harm, combined with how serious that harm would be.",
      "lesson": "m01-l1"
    },
    {
      "id": "m01-c03",
      "front": "List the hierarchy of controls from strongest to weakest.",
      "back": "Eliminate, substitute, engineering controls, administrative controls, PPE.",
      "lesson": "m01-l1"
    },
    {
      "id": "m01-c04",
      "front": "Give an example of an engineering control.",
      "back": "A cover interlock that cuts power when the cover opens, or a vacuum with a fine filter.",
      "lesson": "m01-l1"
    },
    {
      "id": "m01-c05",
      "front": "Why is PPE last in the hierarchy of controls?",
      "back": "It leaves the hazard in place and relies on the person using it correctly every time.",
      "lesson": "m01-l1"
    },
    {
      "id": "m01-c06",
      "front": "What is isolation?",
      "back": "Disconnecting a machine from the supply so it cannot become live while you work. Unplugging is the normal method.",
      "lesson": "m01-l2"
    },
    {
      "id": "m01-c07",
      "front": "What does prove, test, prove mean?",
      "back": "Check your meter on a known live source, test the machine, then check the meter on the live source again.",
      "lesson": "m01-l2"
    },
    {
      "id": "m01-c08",
      "front": "How do you discharge a large capacitor safely?",
      "back": "Use a proper discharge tool or suitable resistor, as the manual describes, then measure to confirm 0 V.",
      "lesson": "m01-l2"
    },
    {
      "id": "m01-c09",
      "front": "What does a residual-current device (RCD) do?",
      "back": "It quickly disconnects the supply when current leaks to earth, for example through a person.",
      "lesson": "m01-l2"
    },
    {
      "id": "m01-c10",
      "front": "What is an interlock?",
      "back": "A switch that cuts power or laser light when a cover opens. Never bypass one.",
      "lesson": "m01-l2"
    },
    {
      "id": "m01-c11",
      "front": "Why must you never fit a larger fuse than specified?",
      "back": "The fuse protects the wiring. A larger fuse lets too much current flow and can cause overheating and fire.",
      "lesson": "m01-l2"
    },
    {
      "id": "m01-c12",
      "front": "What is the one-hand rule for an unavoidable live check?",
      "back": "Keep one hand behind your back or in a pocket so current cannot pass across your chest.",
      "lesson": "m01-l2"
    },
    {
      "id": "m01-c13",
      "front": "What is ESD?",
      "back": "Electrostatic discharge: the sudden flow of built-up static charge, for example from your finger into a circuit board.",
      "lesson": "m01-l3"
    },
    {
      "id": "m01-c14",
      "front": "At about what voltage can a person feel a static spark?",
      "back": "Above about 3,000 V. Many parts can be damaged by much less.",
      "lesson": "m01-l3"
    },
    {
      "id": "m01-c15",
      "front": "What is latent ESD damage?",
      "back": "Damage that lets the part work now but makes it fail later, which is hard to trace.",
      "lesson": "m01-l3"
    },
    {
      "id": "m01-c16",
      "front": "When must you not wear a wrist strap?",
      "back": "When working on mains-live or high-voltage parts. The strap gives no shock protection.",
      "lesson": "m01-l3"
    },
    {
      "id": "m01-c17",
      "front": "How should you hold a circuit board?",
      "back": "By its edges, without touching connector pins, chip legs or contact fingers.",
      "lesson": "m01-l3"
    },
    {
      "id": "m01-c18",
      "front": "What is a Class 1 laser product?",
      "back": "A product that is safe in normal use. A stronger laser may be sealed inside, so do not defeat interlocks.",
      "lesson": "m01-l4"
    },
    {
      "id": "m01-c19",
      "front": "Why is an infrared laser beam a special risk?",
      "back": "You cannot see it and your blink reflex does not protect you, so eye damage can be painless.",
      "lesson": "m01-l4"
    },
    {
      "id": "m01-c20",
      "front": "How should you remove spilled toner?",
      "back": "Use a vacuum made for toner with a fine filter, then wipe with a cloth dampened in cold water.",
      "lesson": "m01-l4"
    },
    {
      "id": "m01-c21",
      "front": "What is a safety data sheet (SDS)?",
      "back": "A document from the maker listing a product's hazards, safe handling, first aid, fire-fighting and disposal.",
      "lesson": "m01-l4"
    },
    {
      "id": "m01-c22",
      "front": "What does the flame pictogram on a label mean?",
      "back": "The product is flammable. Keep it away from heat, sparks and flame.",
      "lesson": "m01-l4"
    },
    {
      "id": "m01-c23",
      "front": "What is the first thing to do when someone is held by a live conductor?",
      "back": "Switch off the supply if you can do so safely. Do not touch the person while the supply is on.",
      "lesson": "m01-l5"
    },
    {
      "id": "m01-c24",
      "front": "Which extinguishers are suitable for electrical equipment?",
      "back": "Carbon dioxide and dry powder. Never water on live electrical equipment. Read the label.",
      "lesson": "m01-l5"
    },
    {
      "id": "m01-c25",
      "front": "What are the four steps of using an extinguisher?",
      "back": "Pull the pin, aim at the base of the flames, squeeze the handle, sweep from side to side.",
      "lesson": "m01-l5"
    },
    {
      "id": "m01-c26",
      "front": "What is a near miss?",
      "back": "An event that did not hurt anyone but could have. Report it so the cause can be fixed.",
      "lesson": "m01-l5"
    },
    {
      "id": "m01-c27",
      "front": "What does confidentiality mean for a technician?",
      "back": "Not reading, copying, taking away or discussing customer information that you see while you work.",
      "lesson": "m01-l6"
    },
    {
      "id": "m01-c28",
      "front": "How should you handle a customer complaint?",
      "back": "Stay calm, listen, show you understand, repeat the problem back, say what you will do and when, then do it.",
      "lesson": "m01-l6"
    }
  ]
});

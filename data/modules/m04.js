OMM.registerModule({
  "id": "m04",
  "summary": "Explain how gears, belts, clutches, motors and paper feed rollers work, calculate speeds and ratios, and find mechanical faults in office machines using a safe, careful method.",
  "outcomes": [
    "Explain force, torque, work, friction and levers, and say how they apply to office machine drives.",
    "Calculate gear ratio, output speed, output torque, pulley speed and roller surface speed.",
    "Describe the common drive parts in an office machine and the faults each one causes.",
    "Explain how a paper feed separates and moves sheets, and diagnose misfeeds and multi-feeds.",
    "Choose where and how to lubricate, and where lubricant must never be used.",
    "Dismantle, reassemble and diagnose a mechanical assembly in a safe and orderly way."
  ],
  "cheatsheet": [
    "Torque = force × distance from the centre. Unit: N·m.",
    "Gear ratio = driven teeth ÷ driver teeth. Output speed = input speed ÷ ratio.",
    "Output torque ≈ input torque × ratio, a little less in real gears because of friction.",
    "Roller surface speed = π × diameter × revolutions per second.",
    "A pick roller works only if its grip on paper is greater than the sheet-to-sheet friction.",
    "Never put oil or grease on rubber rollers, belts, friction pads or clutch faces.",
    "Photograph, label and keep screws in order. Never force a part; look for the hidden clip.",
    "A stepper motor has no feedback in most drives. A jam can make it lose steps without telling the controller."
  ],
  "lessons": [
    {
      "id": "m04-l1",
      "title": "Mechanical principles",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the basic mechanical ideas behind every drive and paper feed in an office machine: force, torque, work, friction, levers and gears."
        },
        {
          "t": "h",
          "text": "Force, torque and work"
        },
        {
          "t": "p",
          "text": "A **force** is a push or a pull, measured in newtons (N). A force acting away from the centre of a shaft or wheel makes it turn; this turning effect is **torque**. Torque is the force multiplied by its distance from the centre, measured at right angles."
        },
        {
          "t": "formula",
          "text": "Torque = force × distance",
          "caption": "Unit: newton-metre (N·m)"
        },
        {
          "t": "example",
          "title": "Torque on a shaft",
          "steps": [
            "A force of 20 N acts at 0.15 m from the centre of a shaft.",
            "Torque = 20 × 0.15 = 3 N·m.",
            "At 0.30 m the same torque needs only 20 × 0.15 ÷ 0.30 = 10 N."
          ]
        },
        {
          "t": "p",
          "text": "**Work** is done when a force moves something. Work = force × distance moved, in joules (J). **Power** is work done each second, in watts (W)."
        },
        {
          "t": "h",
          "text": "Friction"
        },
        {
          "t": "p",
          "text": "**Friction** is the force that resists sliding between two surfaces. It depends on the pressing force and on the **friction coefficient** (μ) of the two materials."
        },
        {
          "t": "formula",
          "text": "Friction force = μ × pressing force"
        },
        {
          "t": "p",
          "text": "Friction helps a feed roller grip paper but harms a bearing, causing heat and wear. Dust, oil and age change μ."
        },
        {
          "t": "example",
          "title": "Why a pick roller feeds one sheet",
          "steps": [
            "Illustration figures: a pick roller presses with 3 N. Rubber on paper has μ = 0.8.",
            "Maximum grip on the top sheet = 0.8 × 3 = 2.4 N.",
            "Paper on paper has μ = 0.4. The drag between the top sheet and the one below is at most 0.4 × 3 = 1.2 N.",
            "The grip (2.4 N) is bigger than the sheet-to-sheet drag (1.2 N), so the top sheet moves alone."
          ]
        },
        {
          "t": "h",
          "text": "Levers"
        },
        {
          "t": "p",
          "text": "A **lever** is a bar that turns about a fixed **pivot**. Effort × effort distance = load × load distance, both from the pivot. Levers press rollers onto paper and move sensor flags."
        },
        {
          "t": "p",
          "text": "Example: a 60 N load sits 0.1 m from the pivot. The effort acts 0.3 m away, so effort = 60 × 0.1 ÷ 0.3 = 20 N."
        },
        {
          "t": "h",
          "text": "Gears and ratio"
        },
        {
          "t": "p",
          "text": "A **gear** passes turning motion through meshing teeth. The gear that supplies the motion is the **driver**; the one that receives it is the **driven** gear. The **gear ratio** compares them."
        },
        {
          "t": "diagram",
          "name": "gear-ratio"
        },
        {
          "t": "formula",
          "text": "Ratio = driven teeth ÷ driver teeth",
          "caption": "Output speed = input speed ÷ ratio. Output torque ≈ input torque × ratio."
        },
        {
          "t": "p",
          "text": "A ratio above 1 slows the output and raises the torque; a small gear driving a large one is a reduction. Friction makes the true torque slightly lower."
        },
        {
          "t": "example",
          "title": "One gear pair",
          "steps": [
            "A 20-tooth gear on a motor drives a 60-tooth gear. The motor turns at 1,200 rpm with 0.5 N·m of torque.",
            "Ratio = 60 ÷ 20 = 3.",
            "Output speed = 1,200 ÷ 3 = 400 rpm.",
            "Output torque ≈ 0.5 × 3 = 1.5 N·m.",
            "Check: speed × torque is 600 before and after, so power is unchanged apart from losses."
          ]
        },
        {
          "t": "example",
          "title": "Two gear pairs on one train",
          "steps": [
            "First pair: 20-tooth driver, 60-tooth driven. The 60-tooth gear shares a shaft with a 15-tooth gear that drives a 45-tooth gear.",
            "Total ratio = (60 ÷ 20) × (45 ÷ 15) = 3 × 3 = 9. Input 1,800 rpm gives 1,800 ÷ 9 = 200 rpm."
          ]
        },
        {
          "t": "h",
          "text": "Surface speed of a roller"
        },
        {
          "t": "p",
          "text": "One turn of a roller moves paper by the roller circumference, π × diameter. Surface speed is that distance multiplied by turns per second."
        },
        {
          "t": "example",
          "title": "Roller surface speed",
          "steps": [
            "A roller of 20 mm diameter turns at 300 rpm.",
            "300 rpm ÷ 60 = 5 turns each second.",
            "Circumference = π × 20 ≈ 62.8 mm.",
            "Surface speed = 62.8 × 5 ≈ 314 mm/s."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Slowing a shaft with gears raises its torque by the same ratio. You cannot gain both speed and torque."
        }
      ]
    },
    {
      "id": "m04-l2",
      "title": "Drive systems",
      "minutes": 11,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the parts that carry motion from a motor to the rollers, carriages and mechanisms of an office machine, and the faults each part can develop."
        },
        {
          "t": "h",
          "text": "Transmitting motion"
        },
        {
          "t": "p",
          "text": "**Gears** give a fixed speed ratio and do not slip. **Belts** run over **pulleys**, which are grooved or flat wheels. A flat or V belt can slip, which protects the motor from overload but can cause timing errors. A **timing belt** has teeth that fit the pulley teeth, so it does not slip and keeps position exactly. A **chain** runs over toothed wheels and carries heavy loads."
        },
        {
          "t": "diagram",
          "name": "drive-types"
        },
        {
          "t": "p",
          "text": "For belts, pulley diameters play the part of gear teeth. The driven pulley turns slower if it is larger."
        },
        {
          "t": "example",
          "title": "Pulley speed",
          "steps": [
            "A motor pulley of 30 mm drives a pulley of 90 mm. The motor turns at 1,500 rpm.",
            "Ratio = 90 ÷ 30 = 3.",
            "Driven speed = 1,500 ÷ 3 = 500 rpm."
          ]
        },
        {
          "t": "p",
          "text": "A belt needs the right **tension**. Too loose, and it slips or jumps teeth. Too tight, and it wears the bearings and makes noise. Follow the tension method in the manufacturer's service manual."
        },
        {
          "t": "h",
          "text": "Shafts, bearings, springs and cams"
        },
        {
          "t": "p",
          "text": "A **shaft** is a rod that carries gears and rollers. It turns in **bearings**. A **bushing** is a plain sleeve in which the shaft slides. A ball bearing has rolling balls and has less friction. Worn supports let the shaft wobble, which causes noise, uneven feed and gear damage."
        },
        {
          "t": "p",
          "text": "A **spring** stores force. Compression springs push, extension springs pull and torsion springs twist. They press rollers onto paper and return levers. A weak spring means weak grip. A **cam** is an uneven wheel that turns rotation into a repeating push or lift. Cams lift pick rollers and move gates."
        },
        {
          "t": "h",
          "text": "Clutches"
        },
        {
          "t": "p",
          "text": "A **clutch** connects or disconnects a drive. An **electromagnetic clutch** engages when its coil is energised. It lets one motor run all the time while a roller turns only when needed. A **one-way clutch** transmits turning in one direction only and freewheels in the other. It stops a roller dragging paper back, or a mechanism running backwards. A **torque limiter** slips when the load is too high, so something weaker does not break."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A one-way clutch that slips in the driving direction, or locks in the wrong one, is a common cause of a roller that will not turn or will not freewheel. Test it by hand, power off, in both directions."
        },
        {
          "t": "h",
          "text": "Motors in drives"
        },
        {
          "t": "table",
          "head": [
            "Motor",
            "How it is controlled",
            "Typical use",
            "Typical fault"
          ],
          "rows": [
            [
              "Brushed DC",
              "Speed follows voltage. Often has a speed sensor.",
              "Main drive, paper transport",
              "Brushes and commutator wear"
            ],
            [
              "Stepper",
              "Moves in fixed steps set by pulses",
              "Carriage, scanner, small feeds",
              "Loses steps if overloaded"
            ],
            [
              "AC induction",
              "Runs at a speed set by mains frequency",
              "Cooling fans, some pumps",
              "Bearing noise, weak start"
            ]
          ],
          "caption": "Motors you will meet in drives"
        },
        {
          "t": "p",
          "text": "A stepper moves a set angle for every pulse. A common motor has 200 steps per turn, which is 1.8° per step. The controller counts pulses and assumes the motor followed them. If something jams the motor, it may skip steps and the controller does not know."
        },
        {
          "t": "example",
          "title": "Carriage movement per step",
          "steps": [
            "A stepper with 200 full steps per turn drives a pulley of 20 teeth. The timing belt pitch (tooth spacing) is 2 mm.",
            "Belt movement per turn = 20 × 2 = 40 mm.",
            "Movement per full step = 40 ÷ 200 = 0.2 mm."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Belts, gears, chains and carriages can trap fingers, hair and cuffs. Switch off and unplug before you reach into a drive. Remove loose jewellery and tie back long hair."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Gears and timing belts hold position. Plain belts and clutches can slip. Steppers can lose steps without warning."
        }
      ]
    },
    {
      "id": "m04-l3",
      "title": "Paper feed mechanisms",
      "minutes": 11,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how an office machine picks a sheet from a tray, moves it along the paper path and lines it up, and what goes wrong when rollers wear."
        },
        {
          "t": "diagram",
          "name": "paper-path"
        },
        {
          "t": "h",
          "text": "Pick-up and separation"
        },
        {
          "t": "p",
          "text": "The **pick-up roller** touches the top sheet and pushes it forward by friction. Next, a **separation** device makes sure only one sheet goes on. One type is a **separation pad**, a high-friction block that holds back extra sheets. Another is a **retard roller**, which turns against the feed direction and pulls extra sheets back. A third uses a **reverse roller** with a torque limiter."
        },
        {
          "t": "p",
          "text": "This works only when the pick roller grips paper harder than sheets grip each other. The pad must grip paper harder than paper grips paper, but less than the pick roller does."
        },
        {
          "t": "h",
          "text": "Feed and registration"
        },
        {
          "t": "p",
          "text": "**Feed rollers** carry the sheet along the path in pairs. A **registration** stage lines up the sheet and times its arrival. Paper reaches the **registration rollers** while they are stopped. It pushes into them and forms a small loop, which squares the front edge. Then the rollers start, timed to the image. **Sensors** watch for the leading edge and the controller checks that it arrives on time."
        },
        {
          "t": "h",
          "text": "Rubber ageing and friction"
        },
        {
          "t": "p",
          "text": "Rubber rollers age. They harden, crack, crumble or become shiny, which is called **glazing**. Paper dust, toner, finger grease and fuser-oil mist reduce grip. Humidity changes paper too: damp paper can curl or stick together, and very dry paper can cling by static."
        },
        {
          "t": "example",
          "title": "Effect of roller wear",
          "steps": [
            "A new feed roller measures 25.0 mm across. A worn one measures 24.2 mm.",
            "New circumference = π × 25.0 ≈ 78.5 mm per turn. Worn = π × 24.2 ≈ 76.0 mm per turn.",
            "The worn roller moves paper about 2.5 mm less per turn. Speed at the same rpm falls by 0.8 ÷ 25.0 = 3.2%.",
            "This can make the paper late at a sensor, or make two rollers pull unequally."
          ]
        },
        {
          "t": "example",
          "title": "Roller speed for a paper speed",
          "steps": [
            "The paper must move at 200 mm/s. The feed roller is 25 mm across.",
            "Circumference = π × 25 ≈ 78.5 mm.",
            "Turns each second = 200 ÷ 78.5 ≈ 2.55.",
            "Speed = 2.55 × 60 ≈ 153 rpm."
          ]
        },
        {
          "t": "h",
          "text": "Faults and causes"
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
              "Paper does not move",
              "Glazed or dirty pick roller, weak spring, clutch not engaging",
              "Roller surface, spring force, clutch action"
            ],
            [
              "Two or more sheets feed",
              "Worn separation pad, damp or stuck paper",
              "Pad surface, paper stock"
            ],
            [
              "Paper crooked",
              "Uneven roller wear, side guides wrong",
              "Compare both rollers, guide position"
            ],
            [
              "Jam near a sensor",
              "Late arrival, slip, stuck sensor flag",
              "Roller grip, flag movement"
            ]
          ],
          "caption": "Common paper feed faults"
        },
        {
          "t": "h",
          "text": "Cleaning rollers"
        },
        {
          "t": "p",
          "text": "Wipe rubber rollers with a lint-free cloth lightly dampened with the cleaner the service manual names. Turn the roller as you wipe, and let it dry before use. Do not use abrasives, and do not use solvents the manual does not allow, because some harm rubber and plastic."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Switch off and unplug before you reach into a paper path. Parts near the fuser can stay hot for a long time. Do not use sharp tools to free paper from rollers."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "If a cleaned roller still does not grip, or has a hard shiny surface, replace it. Cleaning cannot restore rubber that has aged."
        }
      ]
    },
    {
      "id": "m04-l4",
      "title": "Lubrication, wear and materials",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers what lubricants do, where to use them and where never to use them, how materials wear, and how to recognise worn gears and loose fasteners."
        },
        {
          "t": "h",
          "text": "Oil and grease"
        },
        {
          "t": "p",
          "text": "A **lubricant** puts a thin film between moving surfaces, which reduces friction, wear and heat. **Oil** is thin and flows. It suits small bearings, bushings and light mechanisms. **Grease** is oil held in a thick carrier. It stays where you put it, so it suits gears, cams and sliding guides."
        },
        {
          "t": "p",
          "text": "Use only the lubricant the service manual names for that point. Types differ, and some can swell or crack plastics or rubber. Use a small amount. Too much attracts dust and can spread to rollers and sensors."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never put oil, grease or spray lubricant on rubber rollers, belts, friction pads, clutch faces, fuser parts, sensors or electrical contacts. It causes slipping, smoke and fires, and lasting damage."
        },
        {
          "t": "h",
          "text": "Plastics and metals"
        },
        {
          "t": "p",
          "text": "Many gears, levers and frames are plastic. Plastic is light, quiet and cheap, but it can crack, warp with heat, and become brittle with age. Screws into plastic can strip the thread or crack the boss if tightened too far. Steel shafts, springs and brackets are strong but can rust or bend. Brass and sintered bronze suit bushings."
        },
        {
          "t": "h",
          "text": "Wear patterns"
        },
        {
          "t": "ul",
          "items": [
            "Polished, shiny areas show rubbing or glazing.",
            "Flat spots on a roller show it was stopped under load.",
            "Gear teeth worn thin, pointed or hooked cause noise and uneven motion.",
            "Chipped or missing teeth cause clicking once per turn.",
            "Scored shafts and oval bearing holes cause wobble and play."
          ]
        },
        {
          "t": "p",
          "text": "Worn gear teeth cannot be repaired. Replace the gear. Also check the gear that meshes with it, because a new gear on a worn partner wears out fast."
        },
        {
          "t": "example",
          "title": "Judging wear with a calliper",
          "steps": [
            "A drive roller was 30.0 mm across when new. It now measures 29.1 mm.",
            "Loss = 30.0 − 29.1 = 0.9 mm.",
            "As a share of the original: 0.9 ÷ 30.0 = 0.03, which is 3%.",
            "Compare it with the wear limit in the service manual. If the manual gives none, record it and judge the roller by how it performs."
          ]
        },
        {
          "t": "h",
          "text": "Fasteners and thread-locking"
        },
        {
          "t": "p",
          "text": "Vibration can loosen screws. **Thread-locking compound** is a liquid that cures in the thread and resists loosening. Different grades hold with different strength. Use the grade the manual names, and only where it asks. A grade that is too strong can make a small screw hard to remove later."
        },
        {
          "t": "p",
          "text": "When you reuse a screw that had compound on it, clean the old compound from screw and hole, then apply new compound of the right grade. Do not refit it dry if the original design used compound."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A bright, clean grease spot far from where it belongs shows lubricant has migrated. Find out where it came from before you wipe it away."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Lubricate where the manual says, with the lubricant it names, in small amounts. Keep it off anything that must grip."
        }
      ]
    },
    {
      "id": "m04-l5",
      "title": "Dismantling and reassembly",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to take a mechanism apart and put it back together safely, so that it works the same afterwards and nothing is damaged."
        },
        {
          "t": "h",
          "text": "Prepare"
        },
        {
          "t": "p",
          "text": "Read the service manual section for the assembly first. It shows the order of removal, special screws, and release points. Switch off, unplug and let hot parts cool. Clear a clean bench and bring parts trays, a marker pen and a camera."
        },
        {
          "t": "ol",
          "items": [
            "Photograph the assembly from several sides before you touch it.",
            "Remove parts in the order the manual gives.",
            "Put each group of screws in its own labelled tray or on a card drawn with the screw positions.",
            "Photograph again at important stages, such as before you lift out a gear train.",
            "Label connectors and harness routes."
          ]
        },
        {
          "t": "h",
          "text": "Screws and clips"
        },
        {
          "t": "p",
          "text": "Screws of different lengths often look alike. A long screw put in a short hole can push through, damage a part behind it or short a wire. Keep each length with its position. Plastic **release clips** have a small tab you must press or lift. If a cover will not lift, look for a hidden screw under a label or a clip you have not released. Do not pry harder."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Never force a part. If it will not move, something is still holding it. Stop, look at the manual and the photographs, and find it."
        },
        {
          "t": "h",
          "text": "Springs, marks and harnesses"
        },
        {
          "t": "p",
          "text": "A **spring** under tension can fly out and hit your face or be lost. Wear eye protection. Hold it with a spring hook or pliers and release it slowly. Note which hole or slot each end uses."
        },
        {
          "t": "p",
          "text": "Where gears or cams must keep a set position, make **alignment marks** with a paint pen or scribe before you remove them, or use the timing marks the manual shows. Refit with the marks in line."
        },
        {
          "t": "p",
          "text": "Note how each **harness** (bundle of wires) is routed and which clamps hold it. A wire pinched by a cover, caught in a gear or lying across a hot part will fail or cause a fire. Never pull on the wires themselves. Pull the connector body."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Do not work with an interlock switch bypassed or taped down. When a test needs the machine powered with covers open, follow the manual, keep hands clear of moving parts and fit covers again straight afterwards."
        },
        {
          "t": "h",
          "text": "Reassembly"
        },
        {
          "t": "p",
          "text": "Work backwards through your photographs. Fit each part by hand first. Tighten screws evenly and not too hard, especially in plastic. Turn the mechanism by hand, with power off, through a full cycle. Check that nothing binds, no wire is trapped and no screw is left over. Then fit covers and test."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "If a screw is left over, do not ignore it. Find where it belongs. It may be holding an earth wire or a safety cover."
        }
      ]
    },
    {
      "id": "m04-l6",
      "title": "Diagnosing mechanical faults",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers a method for finding mechanical faults, and how to use noise, jam position, test modes, sheet counts and comparison with a working machine to find the cause."
        },
        {
          "t": "h",
          "text": "Listen, look and turn by hand"
        },
        {
          "t": "p",
          "text": "Ask the user what happened and when. Look at the jammed paper itself: where it stopped, which edge is damaged, and any marks. Then use your senses. Noise often tells you which kind of part is at fault."
        },
        {
          "t": "table",
          "head": [
            "Noise or symptom",
            "Likely cause",
            "What to check"
          ],
          "rows": [
            [
              "High squeal at start-up",
              "Belt slipping, dry bearing",
              "Belt tension and surface, shaft turns freely"
            ],
            [
              "Click once each turn",
              "Chipped tooth, loose cam",
              "Gear teeth, set screws"
            ],
            [
              "Grinding or rough sound",
              "Worn gear, debris, failed bearing",
              "Gears and bearings, loose paper bits"
            ],
            [
              "Rattle",
              "Loose screw or part",
              "Fasteners, brackets"
            ],
            [
              "Motor hums but nothing moves",
              "Binding load, seized part",
              "Turn the drive by hand, power off"
            ]
          ],
          "caption": "Noises and what they suggest"
        },
        {
          "t": "h",
          "text": "Binding and slipping"
        },
        {
          "t": "p",
          "text": "**Binding** means a part is stiff or stuck. With power off and unplugged, turn the drive by hand as the manual allows. It should feel smooth. Tight spots point to dirt, a bent shaft or a bad bearing. **Slipping** means a part turns but the load does not follow. Look for glazed belts and rollers, loose pulleys and worn clutches."
        },
        {
          "t": "h",
          "text": "Test modes, counts and comparison"
        },
        {
          "t": "p",
          "text": "Most machines have a service **test mode** that runs one motor, clutch, solenoid or sensor on its own. This separates a mechanical fault from a control fault. Use it as the service manual directs, with covers fitted where possible and hands clear of moving parts."
        },
        {
          "t": "p",
          "text": "A **sheet count** tells you how much the machine has done. Record the count at every visit. If a part fails much earlier than similar parts did, look for a second cause, such as wrong paper or a misaligned guide."
        },
        {
          "t": "p",
          "text": "Use **gauges** and a calliper to measure wear and gaps. Compare with the manual's figures, or with a new part. Comparing with a working identical machine is the fastest test of all. Swapping a suspect roller or clutch from a good unit tells you at once whether it is the fault."
        },
        {
          "t": "example",
          "title": "Finding a tray fault by comparison",
          "steps": [
            "A machine jams about one sheet in ten from tray 2. Tray 1 never jams. The paper is the same.",
            "Both trays use the same type of feed assembly.",
            "Compare the tray 2 pick roller, pad and spring with those of tray 1. Measure the rollers.",
            "Swap the pick roller between trays. If the fault moves to tray 1, the roller was the cause."
          ]
        },
        {
          "t": "h",
          "text": "A routine for any mechanical fault"
        },
        {
          "t": "ol",
          "items": [
            "Gather information and see the fault happen if you can.",
            "Switch off and inspect by eye and by hand.",
            "Form one idea about the cause and test it.",
            "Change one thing at a time.",
            "Check that the repair holds with a run of test sheets.",
            "Record the cause, the work and the sheet count."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never run a machine with a guard or interlock bypassed to see a fault. Never use your fingers to push paper through a path while the drive is powered."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Change one thing at a time. If you change three things and the fault stops, you do not know which one fixed it."
        }
      ]
    }
  ],
  "practical": {
    "title": "Inspect, clean and lubricate a paper feed assembly and measure roller wear",
    "objective": "Remove a paper feed assembly from a training unit, inspect it, clean the rollers, lubricate only the points the manual names, and measure roller diameter to judge wear.",
    "time": "60 minutes",
    "tools": [
      "Screwdrivers that fit the unit's screws",
      "Vernier or digital calliper",
      "Lint-free cloths and the roller cleaner named in the service manual",
      "Lubricant named in the service manual and a small brush or applicator",
      "Parts trays or a card for screws, marker pen and a camera or phone",
      "Service manual for the training unit, notebook and pen"
    ],
    "safety": [
      "Switch the training unit off and unplug it from the mains before you open it. Keep the plug where you can see it.",
      "Wait until the fuser area is cool before you reach near it. Do not touch the fuser or its rollers.",
      "Remove rings, bracelets and loose clothing, and tie back long hair, before working near drives.",
      "Wear eye protection when you handle springs, and release a spring slowly.",
      "Do not put lubricant on rubber rollers, belts, pads, clutch faces, sensors or electrical contacts.",
      "Do not bypass any interlock. Fit all covers before you restore power."
    ],
    "steps": [
      "Read the manual section for the feed assembly. Write down the cleaner, the lubricant, the lubrication points and any roller wear limit.",
      "Switch off and unplug the unit. Remove the paper from the tray.",
      "Photograph the assembly from at least three sides.",
      "Remove the assembly in the order the manual gives. Put the screws in a labelled tray in the order you remove them.",
      "Inspect the rollers for a shiny or hard surface, cracks, flat spots and dirt. Write what you see.",
      "Turn each roller and gear by hand. Note any tight spot, play or noise, and check that the one-way clutch turns freely one way and locks the other.",
      "Measure each roller across its diameter at three places with the calliper. Record the readings and the average.",
      "Calculate circumference = π × average diameter. Compare with the new size or the manual limit, and work out the percentage lost.",
      "Clean each rubber roller with a lint-free cloth lightly dampened with the named cleaner. Turn it as you wipe, then let it dry fully.",
      "Apply a very small amount of the named lubricant to only the points the manual lists. Wipe off any excess.",
      "Refit the assembly in reverse order. Check the screw lengths, harness routing and that no wire is trapped.",
      "Turn the mechanism by hand through one full cycle to check it moves freely.",
      "Fit all covers, plug in, switch on and feed ten sheets from the tray. Watch and listen for misfeeds, skew and noise.",
      "Write your record: findings, readings, work done, result of the test and sheet count if the unit shows one."
    ],
    "checks": [
      "I can explain why I unplugged the unit and kept lubricant off the rollers.",
      "I can measure a roller diameter and calculate its circumference.",
      "I can say whether a roller is worn, using a limit or a comparison.",
      "I can name where the manual says to lubricate and which lubricant to use.",
      "I can refit an assembly with the right screws and no trapped wires."
    ]
  },
  "quiz": [
    {
      "id": "m04-q01",
      "q": "What is torque?",
      "options": [
        "The number of turns a shaft makes each minute",
        "Force multiplied by its distance from the centre of turning",
        "The amount of energy a motor uses each second",
        "The resisting force that acts when two surfaces slide against each other"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m04-l1",
      "explain": "Torque is the turning effect of a force, found by multiplying the force by its distance from the centre of turning. Turns per minute is speed, energy per second is power, and sliding resistance is friction."
    },
    {
      "id": "m04-q02",
      "q": "A 24-tooth gear on a motor drives a 72-tooth gear. The motor turns at 1,500 rpm. How fast does the 72-tooth gear turn?",
      "options": [
        "4,500 rpm",
        "1,500 rpm",
        "500 rpm",
        "750 rpm"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m04-l1",
      "explain": "The ratio is 72 ÷ 24 = 3, so the output speed is 1,500 ÷ 3 = 500 rpm. A bigger driven gear always turns slower, so multiplying to get 4,500 rpm is wrong."
    },
    {
      "id": "m04-q03",
      "q": "A 20-tooth driver gear turns an 80-tooth gear. The driver supplies 0.3 N·m. Ignoring friction losses, what torque does the 80-tooth gear deliver?",
      "options": [
        "0.075 N·m",
        "0.3 N·m",
        "4.0 N·m",
        "1.2 N·m"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m04-l1",
      "explain": "The ratio is 80 ÷ 20 = 4, and torque rises by the ratio: 0.3 × 4 = 1.2 N·m. Dividing by the ratio would give 0.075 N·m, which is wrong because a reduction gear increases torque."
    },
    {
      "id": "m04-q04",
      "q": "A gear train has two stages. Stage one is a 20-tooth driver on a 60-tooth gear. Stage two is a 15-tooth driver on a 45-tooth gear. The input turns at 1,800 rpm. What is the output speed?",
      "options": [
        "200 rpm",
        "600 rpm",
        "300 rpm",
        "900 rpm"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m04-l1",
      "explain": "The stage ratios are 3 and 3, so the total ratio is 3 × 3 = 9 and the output is 1,800 ÷ 9 = 200 rpm. A speed of 600 rpm comes from counting only the first stage."
    },
    {
      "id": "m04-q05",
      "q": "Two gears mesh. One has 18 teeth and the other has 54 teeth. Which statement is correct?",
      "options": [
        "The 18-tooth gear turns three times faster than the 54-tooth gear",
        "The 54-tooth gear turns three times faster than the 18-tooth gear",
        "Both gears turn at the same speed",
        "The 18-tooth gear turns slower but with more torque"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m04-l1",
      "explain": "The smaller gear must turn more times to move the same number of teeth past the mesh point, so it turns three times faster. The larger gear gives the higher torque, not the smaller one."
    },
    {
      "id": "m04-q06",
      "q": "A pick roller must lift one sheet off a stack. What condition lets the top sheet move while the sheet under it stays still?",
      "options": [
        "The pick roller must press as lightly as possible on the paper",
        "The paper must be as smooth and slippery as possible",
        "The roller must be harder than the paper",
        "Roller grip on paper must exceed sheet-to-sheet friction"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m04-l1",
      "explain": "The top sheet moves alone only if the roller grips it harder than the sheets grip each other. A hard roller grips less, not more, and slippery paper helps sheets slide together."
    },
    {
      "id": "m04-q07",
      "q": "A feed roller is 20 mm in diameter and turns at 300 rpm. What is its surface speed?",
      "options": [
        "About 157 mm/s",
        "About 314 mm/s",
        "About 628 mm/s",
        "About 18,850 mm/s"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m04-l1",
      "explain": "Circumference is π × 20 ≈ 62.8 mm. At 300 ÷ 60 = 5 turns per second the surface speed is 62.8 × 5 ≈ 314 mm/s. The figure of 157 mm/s comes from using the radius in place of the diameter."
    },
    {
      "id": "m04-q08",
      "q": "What does a one-way clutch do?",
      "options": [
        "It connects the drive only when a coil is switched on",
        "It slips when the load is too high to protect weak parts",
        "It carries turning in one direction and freewheels in the other",
        "It lets a belt keep exact position without slipping"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m04-l2",
      "explain": "A one-way clutch locks in one direction and freewheels in the other. Switching on a coil describes an electromagnetic clutch, and slipping under overload describes a torque limiter."
    },
    {
      "id": "m04-q09",
      "q": "A carriage must return to exactly the same position every time, with no slip between the motor and the carriage. Which belt is the best choice?",
      "options": [
        "A smooth flat belt",
        "A timing belt with teeth",
        "A V belt in a groove",
        "A rubber band on a plain pulley"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m04-l2",
      "explain": "The teeth of a timing belt fit the pulley teeth, so it cannot slip and keeps position. Flat and V belts rely on friction and can slip a little, which would change the carriage position."
    },
    {
      "id": "m04-q10",
      "q": "A motor pulley of 30 mm drives a pulley of 90 mm by a belt. The motor turns at 1,500 rpm. How fast does the large pulley turn?",
      "options": [
        "4,500 rpm",
        "1,500 rpm",
        "50 rpm",
        "500 rpm"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m04-l2",
      "explain": "The ratio is 90 ÷ 30 = 3, so the large pulley turns at 1,500 ÷ 3 = 500 rpm. A larger driven pulley gives a lower speed, so a result of 4,500 rpm is wrong."
    },
    {
      "id": "m04-q11",
      "q": "A stepper motor with 200 full steps per turn drives a 20-tooth pulley on a timing belt with a 2 mm pitch. How far does the belt move for one full step?",
      "options": [
        "0.2 mm",
        "0.4 mm",
        "2.0 mm",
        "40 mm"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m04-l2",
      "explain": "One turn moves the belt 20 × 2 = 40 mm. Dividing by 200 steps gives 0.2 mm for each step. The figure of 40 mm is the belt travel for a whole turn, not for one step."
    },
    {
      "id": "m04-q12",
      "q": "A paper scrap blocks a printer carriage driven by a stepper motor. The motor clicks and skips. After you clear the scrap and switch on, the printed text is offset from its correct place until the machine is reset. Why?",
      "options": [
        "The belt has been stretched permanently by the jam and now slips",
        "The motor has been demagnetised by the blockage",
        "The controller counts pulses and cannot detect skipped steps",
        "The power supply voltage rose while the carriage was blocked"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m04-l2",
      "explain": "A stepper without feedback is controlled by counting pulses. When steps are skipped the controller still believes the carriage is where it ordered it, so the position is wrong until it finds its home position again."
    },
    {
      "id": "m04-q13",
      "q": "Which part of a brushed DC motor wears away through rubbing during normal use?",
      "options": [
        "The permanent magnets",
        "The carbon brushes",
        "The steel shaft",
        "The wire in the fixed housing"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m04-l2",
      "explain": "Carbon brushes press on the rotating commutator and wear down. Magnets, shaft and housing wire do not rub in the same way."
    },
    {
      "id": "m04-q14",
      "q": "A machine has one motor that runs all the time. A feed roller must turn only when a sheet is wanted. Which part gives this control?",
      "options": [
        "A torque limiter",
        "A compression spring",
        "A timing belt",
        "An electromagnetic clutch"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m04-l2",
      "explain": "An electromagnetic clutch joins the roller to the drive when its coil is energised and releases it otherwise. A torque limiter only slips when the load is too high, so it cannot switch the roller on and off."
    },
    {
      "id": "m04-q15",
      "q": "A tray feeds two or three sheets at once. The paper is new, dry and well fanned. Which part should you inspect first?",
      "options": [
        "The separation pad or retard roller",
        "The fuser pressure roller",
        "The registration sensor",
        "The motor cooling fan"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m04-l3",
      "explain": "Multi-feeds are stopped by the separation device, so a worn or glazed pad or retard roller is the first suspect when the paper is not at fault. The registration sensor tells the controller about timing, but it does not separate sheets."
    },
    {
      "id": "m04-q16",
      "q": "The pick roller of a tray turns when the machine tries to feed, but the paper stays still. The roller surface is hard and shiny. What is the most likely cause?",
      "options": [
        "The paper size setting is wrong",
        "The motor is turning too fast",
        "The rubber has aged and glazed, so it no longer grips",
        "The sensor flag is stuck open"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m04-l3",
      "explain": "A roller that turns without moving paper is slipping, and a hard shiny surface is the sign of glazed rubber. A fast motor would not stop paper moving, and a stuck sensor would show as a jam message, not slipping."
    },
    {
      "id": "m04-q17",
      "q": "A feed roller measured 25.0 mm across when new. It now measures 24.2 mm. About how much less paper does it move on each turn?",
      "options": [
        "About 0.8 mm",
        "About 2.5 mm",
        "About 5.0 mm",
        "About 0.4 mm"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m04-l3",
      "explain": "The circumference falls by π × 0.8 ≈ 2.5 mm. The diameter loss of 0.8 mm is not the paper loss, because paper moves one circumference per turn."
    },
    {
      "id": "m04-q18",
      "q": "What are registration rollers for?",
      "options": [
        "To heat the toner so it sticks to the paper",
        "To separate the top sheet from the stack",
        "To count each sheet that passes for the maintenance counter",
        "To square the leading edge and time the sheet's release"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m04-l3",
      "explain": "Registration rollers hold the sheet briefly so its front edge squares up, then release it in time with the image. Separation of sheets is done by a pad or retard roller, and heating is the work of the fuser."
    },
    {
      "id": "m04-q19",
      "q": "What is the correct way to clean a rubber feed roller?",
      "options": [
        "Wipe with a lint-free cloth and the cleaner the manual names",
        "Spray it with penetrating oil, then wipe off the excess with a cloth",
        "Scrub it with fine sandpaper until the shiny surface is gone",
        "Soak it in any strong solvent for ten minutes, then rinse it"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m04-l3",
      "explain": "Use only the cleaner the manual names, with a soft cloth, and let it dry. Oil makes the roller slip, and abrasives or strong solvents can damage the rubber."
    },
    {
      "id": "m04-q20",
      "q": "A machine shows a jam when a sheet does not reach a sensor within a set time. How does the machine decide this?",
      "options": [
        "The paper makes a loud noise as it enters the path and the sensor hears it",
        "The operator presses a button on the panel when the jam happens",
        "The controller expects the leading edge at the sensor by a set time",
        "The motor stops by itself when damp paper increases the load"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m04-l3",
      "explain": "Jam detection compares when the sensor sees the paper with when the controller expects it. A late sheet is treated as a jam. This is why slipping rollers often produce jam messages, not just a missing feed."
    },
    {
      "id": "m04-q21",
      "q": "Paper must move through the path at 200 mm/s. The feed roller is 25 mm in diameter. About how fast must the roller turn?",
      "options": [
        "About 76 rpm",
        "About 306 rpm",
        "About 2.5 rpm",
        "About 153 rpm"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m04-l3",
      "explain": "The circumference is π × 25 ≈ 78.5 mm. Turns per second are 200 ÷ 78.5 ≈ 2.55, which is about 153 rpm after multiplying by 60. Using the radius by mistake gives about 306 rpm."
    },
    {
      "id": "m04-q22",
      "q": "Why is grease often chosen for gear teeth instead of thin oil?",
      "options": [
        "Grease stops all wear from ever happening",
        "Grease stays where it is put, but thin oil can run off",
        "Grease is a better conductor of electricity",
        "Grease makes plastic gears grip each other harder"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m04-l4",
      "explain": "Grease is held in a thick carrier, so it stays on the teeth. Thin oil flows away. Grease reduces wear but cannot stop it, and it is not used for electrical conduction."
    },
    {
      "id": "m04-q23",
      "q": "Which of these must never be lubricated?",
      "options": [
        "A rubber pick roller surface",
        "A metal shaft where it turns in a bushing",
        "The teeth of a drive gear that the manual says to grease",
        "A cam that slides against a lever, if the manual lists it"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m04-l4",
      "explain": "A roller must grip paper, and oil or grease on the rubber makes it slip. Shafts in bushings, gears and cams are normal lubrication points when the manual names them."
    },
    {
      "id": "m04-q24",
      "q": "You remove a motor bracket screw that has dried thread-locking compound on it. The manual says that screw uses compound. What should you do when refitting it?",
      "options": [
        "Refit it dry, because the old compound is still on the thread and will hold",
        "Use the strongest grade you have, so that it can never loosen",
        "Clean the old compound off, then apply new compound of the grade named",
        "Glue the screw head to the bracket with a fast-setting adhesive"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m04-l4",
      "explain": "The old compound has been broken and will not lock again, so clean it and apply new compound of the named grade. The strongest grade could make a small screw hard to remove or damage it later."
    },
    {
      "id": "m04-q25",
      "q": "A drive is noisy and uneven. The teeth of one plastic gear look thin and pointed, and the flanks are polished. What is the correct repair?",
      "options": [
        "Add more grease and keep the gear",
        "File the teeth back to a normal shape",
        "Tighten the shaft screw as hard as possible",
        "Replace the gear and check the gear that meshes with it"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m04-l4",
      "explain": "Worn teeth cannot be repaired, and grease will not restore their shape. The partner gear is checked because a new gear on a worn partner soon wears out."
    },
    {
      "id": "m04-q26",
      "q": "Why should you avoid over-tightening a screw into a plastic housing?",
      "options": [
        "The screw will melt the plastic from friction",
        "The thread or the screw boss can strip or crack",
        "The housing becomes magnetic",
        "The screw changes its length"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m04-l4",
      "explain": "Plastic is weaker than steel and strips or cracks if the screw is tightened too far, which leaves the part loose. Friction heat from hand tightening is far too small to melt it."
    },
    {
      "id": "m04-q27",
      "q": "You are taking apart an assembly that uses screws of several lengths. What is the best way to avoid mixing them up?",
      "options": [
        "Keep the screws of each group in a labelled tray or on a position card",
        "Put all screws in one pile and compare their lengths later",
        "Remember which screw came from where",
        "Use the longest screw in every hole"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m04-l5",
      "explain": "Keeping screws grouped by position stops wrong lengths going in. A long screw in a short hole can damage parts behind it. Memory and a single pile are not reliable."
    },
    {
      "id": "m04-q28",
      "q": "You have removed all the visible screws, but a plastic cover will not lift. What should you do?",
      "options": [
        "Pry harder at the seam with a large screwdriver until the cover gives",
        "Hit the cover with a mallet to free it",
        "Look for a hidden screw under a label, or a clip not yet released",
        "Cut the cover and glue it back afterwards"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m04-l5",
      "explain": "A cover that will not lift is still held by a hidden screw or clip. Forcing it breaks tabs and cracks plastic. Check the manual and your photographs."
    },
    {
      "id": "m04-q29",
      "q": "Why should you note how a wire harness is routed before you remove a part?",
      "options": [
        "To make the harness look tidy and professional when the customer sees it",
        "To make it easier to pull on the wires when removing parts",
        "To remember which colour the harness insulation is",
        "So you can refit it without pinching a wire or touching a hot part"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m04-l5",
      "explain": "Wrong routing lets a cover pinch a wire, a gear catch it or a hot part melt it. The routing is part of the machine design. You should never pull on the wires themselves."
    },
    {
      "id": "m04-q30",
      "q": "A gear must be refitted on a cam shaft so the cam timing stays the same. What should you do before you remove it?",
      "options": [
        "Lubricate the gear teeth well so that it slides off the shaft easily",
        "Mark the gear and shaft, or find the manual's timing marks",
        "Replace the cam with a new one",
        "Turn the shaft until it is tight"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m04-l5",
      "explain": "Marks on the gear and shaft let you refit in the same position, so the timing is kept. Lubricating the teeth or replacing the cam does nothing to preserve the position."
    },
    {
      "id": "m04-q31",
      "q": "You must remove a spring that is under tension. Which is the safest way?",
      "options": [
        "Pull it off with the machine running",
        "Cut it in the middle with side cutters, so the tension is released at once",
        "Wear eye protection and release it slowly with a hook or pliers",
        "Flick it off with a screwdriver tip"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m04-l5",
      "explain": "A tensioned spring can spring free and hit your face or be lost. Controlling it with a tool and releasing it slowly, with eye protection, is the safe method. A flicked spring is a projectile."
    },
    {
      "id": "m04-q32",
      "q": "A drive makes a click once on every turn of one gear. The gear teeth are the first thing you inspect. What are you most likely to find?",
      "options": [
        "A chipped or missing tooth",
        "A dirty paper sensor",
        "A weak mains supply",
        "A loose label on the cover"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m04-l6",
      "explain": "A noise that repeats once per turn of a part points to something on that part, such as a chipped tooth. A power supply or sensor fault would not repeat with the rotation of a single gear."
    },
    {
      "id": "m04-q33",
      "q": "You suspect a drive is binding. What is the safest first check?",
      "options": [
        "Switch the machine on and listen for the noise",
        "Hold the shaft with your fingers while the motor runs to feel the load",
        "Add oil to every bearing and run it again",
        "Switch off, unplug, then turn the drive by hand for tight spots"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m04-l6",
      "explain": "With power off you can feel the load safely, and tight spots show where the binding is. Holding a running shaft is dangerous, and adding oil without finding the cause may hide the fault or spread lubricant to the wrong places."
    },
    {
      "id": "m04-q34",
      "q": "Why is a service test mode that runs a single clutch or motor useful?",
      "options": [
        "It repairs a worn clutch automatically",
        "It lets you separate a mechanical fault from a control fault",
        "It resets the sheet counter to zero",
        "It makes a safety interlock unnecessary"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m04-l6",
      "explain": "If a part runs correctly in its test mode, the fault is likely in the controls or the way the machine calls it. If it does not, the part or its drive is the suspect. A test mode never repairs anything or replaces an interlock."
    },
    {
      "id": "m04-q35",
      "q": "A machine jams about one sheet in ten from tray 2 but never from tray 1, with the same paper. Both trays use the same type of feed assembly. What is the best next step?",
      "options": [
        "Replace the main motor",
        "Reinstall the operating software",
        "Compare the tray 2 feed parts with tray 1, and swap the pick roller between trays",
        "Use a different brand of paper for every test"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m04-l6",
      "explain": "Tray 1 is a working reference, so a comparison and a swap shows quickly whether a roller is at fault. The main motor feeds both trays, so it is an unlikely cause when only one tray fails."
    },
    {
      "id": "m04-q36",
      "q": "When a motor starts, a belt squeals and the roller it drives turns slowly or stops under load. The motor itself runs normally. What is the most likely fault?",
      "options": [
        "The belt is slipping because it is loose, worn or glazed",
        "The roller has a broken sensor flag",
        "The mains supply has the wrong frequency",
        "The cover interlock is open"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m04-l6",
      "explain": "Squeal at start-up with a slow roller is typical of a slipping belt. The motor runs normally, so power is not the problem, and an open interlock would stop the motor altogether."
    }
  ],
  "cards": [
    {
      "id": "m04-c01",
      "front": "Torque",
      "back": "The turning effect of a force: force × distance from the centre. Unit: newton-metre (N·m).",
      "lesson": "m04-l1"
    },
    {
      "id": "m04-c02",
      "front": "Gear ratio formula",
      "back": "Ratio = driven teeth ÷ driver teeth. Output speed = input speed ÷ ratio.",
      "lesson": "m04-l1"
    },
    {
      "id": "m04-c03",
      "front": "What happens to torque when a gear pair slows the output?",
      "back": "The torque rises by the ratio, a little less in a real gear because of friction.",
      "lesson": "m04-l1"
    },
    {
      "id": "m04-c04",
      "front": "Friction force formula",
      "back": "Friction force = μ × pressing force, where μ is the friction coefficient of the two surfaces.",
      "lesson": "m04-l1"
    },
    {
      "id": "m04-c05",
      "front": "Roller surface speed",
      "back": "π × diameter × turns per second.",
      "lesson": "m04-l1"
    },
    {
      "id": "m04-c06",
      "front": "Lever balance rule",
      "back": "Effort × effort distance = load × load distance, both measured from the pivot.",
      "lesson": "m04-l1"
    },
    {
      "id": "m04-c07",
      "front": "Timing belt",
      "back": "A toothed belt that fits toothed pulleys. It does not slip, so it keeps exact position.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c08",
      "front": "One-way clutch",
      "back": "Carries turning in one direction and freewheels in the other.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c09",
      "front": "Electromagnetic clutch",
      "back": "A clutch that joins the drive when its coil is energised. It lets a motor run while a roller turns only when needed.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c10",
      "front": "Torque limiter",
      "back": "A clutch that slips when the load is too high, so weaker parts are not broken.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c11",
      "front": "Bushing versus ball bearing",
      "back": "A bushing is a plain sleeve the shaft slides in. A ball bearing has rolling balls and less friction.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c12",
      "front": "What does a cam do?",
      "back": "It turns rotation into a repeating push or lift, for example to raise a pick roller.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c13",
      "front": "Brushed DC motor: what wears?",
      "back": "The carbon brushes and the commutator they rub on.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c14",
      "front": "Stepper motor: common weakness",
      "back": "It can lose steps if overloaded, and most drives do not report it. Position is wrong until the machine finds home again.",
      "lesson": "m04-l2"
    },
    {
      "id": "m04-c15",
      "front": "Pick-up roller",
      "back": "The roller that touches the top sheet in a tray and pushes it forward by friction.",
      "lesson": "m04-l3"
    },
    {
      "id": "m04-c16",
      "front": "Separation pad or retard roller",
      "back": "It holds back extra sheets so only the top sheet moves on.",
      "lesson": "m04-l3"
    },
    {
      "id": "m04-c17",
      "front": "Registration rollers",
      "back": "They stop the sheet briefly so its front edge squares up, then send it on in time with the image.",
      "lesson": "m04-l3"
    },
    {
      "id": "m04-c18",
      "front": "Glazed roller",
      "back": "A rubber roller with a hard, shiny surface that no longer grips. Replace it, because cleaning cannot restore it.",
      "lesson": "m04-l3"
    },
    {
      "id": "m04-c19",
      "front": "Several sheets feed at once: likely cause",
      "back": "Worn separation pad or retard roller, or paper stuck together by damp or static.",
      "lesson": "m04-l3"
    },
    {
      "id": "m04-c20",
      "front": "Paper does not move but the roller turns: likely cause",
      "back": "The roller is glazed or dirty, or the spring pressure is weak.",
      "lesson": "m04-l3"
    },
    {
      "id": "m04-c21",
      "front": "Oil versus grease",
      "back": "Oil is thin and flows, for small bearings. Grease is thick and stays put, for gears, cams and slides.",
      "lesson": "m04-l4"
    },
    {
      "id": "m04-c22",
      "front": "Where must lubricant never go?",
      "back": "Rubber rollers, belts, friction pads, clutch faces, fuser parts, sensors and electrical contacts.",
      "lesson": "m04-l4"
    },
    {
      "id": "m04-c23",
      "front": "Thread-locking compound",
      "back": "A liquid that cures in the thread to resist loosening. Use the grade the manual names, only where it asks.",
      "lesson": "m04-l4"
    },
    {
      "id": "m04-c24",
      "front": "Worn gear teeth: what to do",
      "back": "Replace the gear and check the gear that meshes with it. Do not try to file or grease them back to shape.",
      "lesson": "m04-l4"
    },
    {
      "id": "m04-c25",
      "front": "Before dismantling an assembly",
      "back": "Read the manual, switch off and unplug, photograph it, and prepare labelled trays for screws.",
      "lesson": "m04-l5"
    },
    {
      "id": "m04-c26",
      "front": "A cover will not lift",
      "back": "A hidden screw or clip still holds it. Check the manual and photographs. Never pry harder.",
      "lesson": "m04-l5"
    },
    {
      "id": "m04-c27",
      "front": "Alignment marks",
      "back": "Marks made with a paint pen or scribe before removal so a gear or cam can be refitted in the same position.",
      "lesson": "m04-l5"
    },
    {
      "id": "m04-c28",
      "front": "Click once per turn of a gear",
      "back": "Likely a chipped or missing tooth, or a loose part on that gear.",
      "lesson": "m04-l6"
    },
    {
      "id": "m04-c29",
      "front": "Squeal at start-up with a slow roller",
      "back": "A belt that is slipping because it is loose, worn or glazed.",
      "lesson": "m04-l6"
    },
    {
      "id": "m04-c30",
      "front": "Why use a service test mode?",
      "back": "It runs one motor, clutch or sensor on its own, which separates a mechanical fault from a control fault.",
      "lesson": "m04-l6"
    }
  ]
});

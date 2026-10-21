OMM.registerModule({
  "id": "m08",
  "summary": "Convert between binary, hexadecimal and decimal, read logic gates and counters, explain memory and interfaces in office machines, and diagnose digital faults by checking power, clock and reset first.",
  "outcomes": [
    "Convert whole numbers between binary, hexadecimal and decimal and explain why machines use them.",
    "Complete truth tables for AND, OR, NOT, NAND, NOR and XOR gates and apply them to simple machine conditions.",
    "Describe what decoders, multiplexers, adders, flip-flops, counters and registers do.",
    "Distinguish ROM, flash, EEPROM and RAM and explain firmware, clock, reset and battery-backed settings.",
    "Calculate converter step sizes, serial data rates and simple driver values for relays and motors.",
    "Diagnose a digital fault by checking power, clock and reset first, then tracing signals with a probe or oscilloscope."
  ],
  "cheatsheet": [
    "n bits hold 2ⁿ different values. 8 bits: 0 to 255. 16 bits: 0 to 65,535.",
    "Binary place values from the right: 1, 2, 4, 8, 16, 32, 64, 128.",
    "One hex digit equals 4 bits. A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.",
    "AND needs all inputs 1. OR needs any input 1. XOR needs the inputs to differ.",
    "NAND and NOR are AND and OR with the output inverted.",
    "A counter with n flip-flops counts 2ⁿ states and divides the clock by 2ⁿ.",
    "RAM forgets when power is lost. ROM, flash and EEPROM keep their data.",
    "ADC step size = reference voltage ÷ 2ⁿ for an n-bit converter.",
    "UART 8N1 sends 10 bits per byte: 1 start, 8 data, 1 stop.",
    "A dead digital board: check power, then clock, then reset, before anything else."
  ],
  "lessons": [
    {
      "id": "m08-l1",
      "title": "Number systems: binary, hexadecimal and decimal",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the binary, hexadecimal and decimal number systems and explains why digital machines use them. You will meet these numbers in service modes, memory addresses, settings registers and error codes."
        },
        {
          "t": "h",
          "text": "Bits and bytes"
        },
        {
          "t": "p",
          "text": "A **bit** is one binary digit. It can only be 0 or 1. A **byte** is a group of 8 bits. Digital circuits use two states, a low voltage and a high voltage. Two states are easy to tell apart even when there is electrical noise, so the circuit stays reliable. We write the low state as 0 and the high state as 1."
        },
        {
          "t": "p",
          "text": "With n bits you can make 2ⁿ different patterns. So 8 bits give 2⁸ = 256 patterns, which count from 0 to 255. 16 bits give 65,536 patterns, which count from 0 to 65,535."
        },
        {
          "t": "h",
          "text": "Binary to decimal"
        },
        {
          "t": "p",
          "text": "Each bit has a **place value**. The value doubles each step to the left. For an 8-bit number the place values from left to right are:"
        },
        {
          "t": "diagram",
          "name": "binary-place-values"
        },
        {
          "t": "formula",
          "text": "128 64 32 16 8 4 2 1",
          "caption": "Place values of an 8-bit number"
        },
        {
          "t": "p",
          "text": "To convert binary to decimal, add the place values where the bit is 1."
        },
        {
          "t": "example",
          "title": "Convert 10110110 to decimal",
          "steps": [
            "Write the bits under the place values: 128 is 1, 64 is 0, 32 is 1, 16 is 1, 8 is 0, 4 is 1, 2 is 1, 1 is 0.",
            "Add the place values with a 1 under them: 128 + 32 + 16 + 4 + 2.",
            "128 + 32 = 160. Then 160 + 16 = 176. Then 176 + 4 = 180. Then 180 + 2 = 182.",
            "Answer: 10110110 in binary is 182 in decimal."
          ]
        },
        {
          "t": "example",
          "title": "Convert decimal 77 to binary",
          "steps": [
            "The largest place value that fits in 77 is 64. Write 1 under 64. The remainder is 77 − 64 = 13.",
            "32 and 16 do not fit in 13, so write 0 under each. 8 fits. Write 1. The remainder is 13 − 8 = 5.",
            "4 fits. Write 1. The remainder is 1. 2 does not fit. Write 0. 1 fits. Write 1.",
            "Read the bits from 128 down to 1: 0 1 0 0 1 1 0 1. So 77 is 01001101."
          ]
        },
        {
          "t": "h",
          "text": "Hexadecimal"
        },
        {
          "t": "p",
          "text": "**Hexadecimal** (hex) uses base 16. Its digits are 0 to 9 and then A to F, where A is 10, B is 11, C is 12, D is 13, E is 14 and F is 15. One hex digit stands for exactly 4 bits, called a **nibble**. This makes hex a short way to write long binary numbers."
        },
        {
          "t": "table",
          "head": [
            "Binary",
            "Hex",
            "Decimal"
          ],
          "rows": [
            [
              "0000",
              "0",
              "0"
            ],
            [
              "1001",
              "9",
              "9"
            ],
            [
              "1010",
              "A",
              "10"
            ],
            [
              "1111",
              "F",
              "15"
            ]
          ],
          "caption": "Some 4-bit patterns"
        },
        {
          "t": "example",
          "title": "Convert 10110110 to hex and check it",
          "steps": [
            "Split into nibbles from the right: 1011 and 0110.",
            "1011 is 8 + 2 + 1 = 11, which is B. 0110 is 4 + 2 = 6, which is 6.",
            "The hex number is B6. A prefix `0x` or a suffix h is often added: `0xB6`.",
            "Check: B6 = 11 × 16 + 6 = 176 + 6 = 182. This matches the earlier result."
          ]
        },
        {
          "t": "p",
          "text": "Machines also store text as numbers. In the common ASCII code the capital letter A is 65, which is `0x41`. A byte is also the usual unit for memory. Be careful with units: 1 KiB is 1,024 bytes, but some documents use kB for 1,000 bytes. Check which one the service manual means."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Hex is only a convenient way to write binary. Inside the machine everything is bits. Convert in groups of 4 bits and you will rarely make a mistake."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Use the programmer mode of a phone or computer calculator to check your answers, but practise by hand until it is automatic. You will not always have a calculator in a service mode."
        }
      ]
    },
    {
      "id": "m08-l2",
      "title": "Logic gates and truth tables",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains the basic logic gates and how to write their truth tables. Gates are the building blocks of every digital circuit, from a simple door-closed check to a full processor."
        },
        {
          "t": "p",
          "text": "A **logic gate** is a circuit that takes one or more binary inputs and gives one binary output. A **truth table** lists every possible combination of inputs and the output for each one. With 2 inputs there are 2² = 4 rows. With 3 inputs there are 2³ = 8 rows."
        },
        {
          "t": "h",
          "text": "AND, OR and NOT"
        },
        {
          "t": "ul",
          "items": [
            "AND: the output is 1 only when all inputs are 1.",
            "OR: the output is 1 when at least one input is 1.",
            "NOT, also called an **inverter**: one input, and the output is the opposite. 0 becomes 1 and 1 becomes 0."
          ]
        },
        {
          "t": "table",
          "head": [
            "A",
            "B",
            "A AND B",
            "A OR B"
          ],
          "rows": [
            [
              "0",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "1",
              "0",
              "1"
            ],
            [
              "1",
              "0",
              "0",
              "1"
            ],
            [
              "1",
              "1",
              "1",
              "1"
            ]
          ],
          "caption": "Truth table for AND and OR"
        },
        {
          "t": "h",
          "text": "NAND, NOR and XOR"
        },
        {
          "t": "p",
          "text": "NAND is AND followed by NOT. NOR is OR followed by NOT. **XOR** (exclusive OR) gives 1 only when the two inputs are different."
        },
        {
          "t": "diagram",
          "name": "logic-gates"
        },
        {
          "t": "table",
          "head": [
            "A",
            "B",
            "NAND",
            "NOR",
            "XOR"
          ],
          "rows": [
            [
              "0",
              "0",
              "1",
              "1",
              "0"
            ],
            [
              "0",
              "1",
              "1",
              "0",
              "1"
            ],
            [
              "1",
              "0",
              "1",
              "0",
              "1"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ]
          ],
          "caption": "Truth table for NAND, NOR and XOR"
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Learn the short form. AND: all ones. OR: any one. XOR: different. NAND and NOR: the opposite of AND and OR."
        },
        {
          "t": "h",
          "text": "Active-high and active-low"
        },
        {
          "t": "p",
          "text": "A signal is **active high** when 1 means \"do it\" and **active low** when 0 means \"do it\". Schematics mark an active-low signal with a bar over the name or a slash, such as /RESET. A reset line that is active low resets the chip while the line is held at 0."
        },
        {
          "t": "h",
          "text": "Gates in machine conditions"
        },
        {
          "t": "p",
          "text": "Machines use gates to combine conditions. Suppose a fuser heater may only switch on when the thermistor reading is in range, the door is closed and the overheat signal is not set. Let OK = 1 mean the reading is in range, DOOR = 1 mean the door is closed and HOT = 1 mean overheat."
        },
        {
          "t": "formula",
          "text": "HEATER = OK AND DOOR AND NOT HOT",
          "caption": "Heater enable condition"
        },
        {
          "t": "example",
          "title": "Evaluate the heater condition",
          "steps": [
            "Case 1: OK = 1, DOOR = 1, HOT = 0. NOT HOT = 1. 1 AND 1 AND 1 = 1. The heater may switch on.",
            "Case 2: OK = 1, DOOR = 0, HOT = 0. NOT HOT = 1. 1 AND 0 AND 1 = 0. The heater stays off.",
            "Case 3: OK = 1, DOOR = 1, HOT = 1. NOT HOT = 0. 1 AND 1 AND 0 = 0. The heater stays off."
          ]
        },
        {
          "t": "p",
          "text": "Real machines also have a hardware safety path that does not depend on software. Never assume a logic condition is the only protection, and never bypass a switch or interlock to make a test easier."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "When you trace a fault, write the truth table for the gate you are looking at and compare it with what the probe shows. A gate whose output breaks its own table is faulty, or one of its inputs is not what you think."
        }
      ]
    },
    {
      "id": "m08-l3",
      "title": "Combinational and sequential logic",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the circuits made by joining gates together: decoders, multiplexers and adders, which have no memory, and latches, flip-flops, counters and registers, which do. Controllers in printers and copiers use all of them."
        },
        {
          "t": "h",
          "text": "Combinational logic"
        },
        {
          "t": "p",
          "text": "In **combinational logic** the output depends only on the inputs at this moment. There is no memory of the past."
        },
        {
          "t": "ul",
          "items": [
            "A **decoder** turns a binary code into one active output. A 3-to-8 decoder has 3 inputs and 8 outputs. Input 101 is 5 in decimal, so output number 5 becomes active. Outputs are counted from 0.",
            "A **multiplexer** (mux) chooses one of several inputs and passes it to the output. An 8-to-1 mux needs 3 select lines, because 2³ = 8.",
            "A **half adder** adds two bits. The sum is A XOR B and the carry is A AND B. For 1 + 1 the sum is 0 and the carry is 1, which is binary 10.",
            "A **full adder** also takes a carry in, so adders can be chained to add numbers of any width."
          ]
        },
        {
          "t": "h",
          "text": "Sequential logic"
        },
        {
          "t": "p",
          "text": "In **sequential logic** the output depends on the inputs and on what happened before. The circuit stores state. The basic storage cell is the **latch**, which holds one bit. A **flip-flop** is a storage cell that changes only on an edge of a clock signal. A **D flip-flop** copies its D input to its output on the active clock edge and holds that value until the next edge."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Combinational logic has no memory. Sequential logic does. A clock tells sequential circuits when to change."
        },
        {
          "t": "h",
          "text": "Counters"
        },
        {
          "t": "p",
          "text": "A **counter** is a chain of flip-flops that steps through a sequence of states each clock pulse. The number of states is its **modulus**. A counter built from n flip-flops that counts in plain binary has a modulus of 2ⁿ. A 4-bit counter counts 0000 up to 1111 (0 to 15). The next pulse makes it roll over to 0000."
        },
        {
          "t": "p",
          "text": "Each stage halves the frequency. So a counter is also a **frequency divider**. Machines use dividers to make slow timing signals from a fast crystal clock."
        },
        {
          "t": "example",
          "title": "Divide a clock with a 4-bit counter",
          "steps": [
            "The clock is 1 MHz, which is 1,000,000 pulses per second.",
            "A 4-bit counter has a modulus of 2⁴ = 16.",
            "The last output goes through one full cycle every 16 clock pulses.",
            "Output frequency = 1 MHz ÷ 16 = 62.5 kHz."
          ]
        },
        {
          "t": "example",
          "title": "How many flip-flops for a count of 0 to 11?",
          "steps": [
            "The counter needs 12 different states.",
            "3 flip-flops give only 2³ = 8 states. That is too few.",
            "4 flip-flops give 2⁴ = 16 states. That is enough.",
            "Use 4 flip-flops and add logic that resets the count after 11. This is a modulus-12 counter."
          ]
        },
        {
          "t": "h",
          "text": "Registers"
        },
        {
          "t": "p",
          "text": "A **register** is a group of flip-flops that stores a whole word, for example 8 bits. A **shift register** moves its bits one place on each clock pulse. It can turn serial data into parallel data. To fill a 24-bit shift register from empty you need 24 clock pulses. Shift registers are used to send dot patterns to print heads and to read many switches with few wires."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "If a counter or register output never changes, check its clock input first. No clock means no change, even when the chip is perfectly good."
        }
      ]
    },
    {
      "id": "m08-l4",
      "title": "Memory and microprocessors in office machines",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains the kinds of memory found in office machines and the parts that keep a processor running: firmware, clock and reset. It also covers the battery-backed settings and counters that you must protect when you replace a board."
        },
        {
          "t": "h",
          "text": "Types of memory"
        },
        {
          "t": "p",
          "text": "A **microprocessor** (or **microcontroller**) runs a program stored in memory. Memory is either **volatile**, which loses its contents when power is removed, or **non-volatile**, which keeps them."
        },
        {
          "t": "table",
          "head": [
            "Memory",
            "Keeps data without power?",
            "Typical use in a machine"
          ],
          "rows": [
            [
              "RAM",
              "No",
              "Working space, page buffers, image data"
            ],
            [
              "ROM",
              "Yes, fixed at manufacture",
              "Boot code and fixed tables"
            ],
            [
              "Flash",
              "Yes, can be rewritten in blocks",
              "Firmware and stored fonts"
            ],
            [
              "EEPROM",
              "Yes, can be rewritten byte by byte",
              "Settings, serial number, counters"
            ]
          ],
          "caption": "Common memory types"
        },
        {
          "t": "p",
          "text": "Non-volatile memory that can be rewritten wears out after many write cycles. The limit varies by part, so do not write to it more than the procedure requires."
        },
        {
          "t": "h",
          "text": "Firmware, clock and reset"
        },
        {
          "t": "p",
          "text": "**Firmware** is the program stored in non-volatile memory that makes the machine work. A firmware update rewrites that memory. If power is lost during an update the program may be incomplete and the machine may not start. Use a stable supply and follow the service manual."
        },
        {
          "t": "diagram",
          "name": "microcontroller-block"
        },
        {
          "t": "p",
          "text": "The **clock** is a steady timing signal, usually made by a **crystal** oscillator. Without it the processor cannot step through its program. The **reset** circuit holds the processor in a known state at power-on until the supply voltage and clock are stable, then releases it."
        },
        {
          "t": "h",
          "text": "Address lines and size"
        },
        {
          "t": "p",
          "text": "A memory chip is reached through **address lines** and gives data on **data lines**. With a address lines there are 2ᵃ locations. Each location holds as many bits as there are data lines."
        },
        {
          "t": "example",
          "title": "Size of a memory chip",
          "steps": [
            "A chip has 16 address lines and 8 data lines.",
            "16 address lines give 2¹⁶ = 65,536 locations.",
            "Each location holds 8 bits, which is one byte.",
            "Capacity = 65,536 bytes = 64 KiB, because 64 × 1,024 = 65,536."
          ]
        },
        {
          "t": "h",
          "text": "Settings, counters and the backup battery"
        },
        {
          "t": "p",
          "text": "Machines keep the date, time, user settings, adjustment values and page counters in non-volatile memory or in RAM kept alive by a small **backup battery**, often a lithium coin cell. Check the service manual for its type and for where counters live. A flat backup battery shows as lost date and settings every time the machine is unplugged."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Lithium cells must not be short-circuited, crushed, heated or recharged unless designed for it. Fit the correct type the right way round. Dispose of old cells at a proper battery collection point, never in general waste or a fire."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Before you replace a main board or backup battery, print or record the settings and counters. Then check whether the new part must be loaded with the old data. Counters often matter for billing and contracts."
        }
      ]
    },
    {
      "id": "m08-l5",
      "title": "Interfacing: converters, drivers and serial links",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson shows how a digital controller connects to the real world through converters, driver circuits and serial links. These are the parts that connect a small chip to sensors, relays, motors and other boards."
        },
        {
          "t": "h",
          "text": "Analogue and digital converters"
        },
        {
          "t": "p",
          "text": "An **analogue-to-digital converter** (ADC) turns a voltage into a binary number. A thermistor circuit, for example, gives a voltage that the ADC reads. A **digital-to-analogue converter** (DAC) does the reverse. An n-bit ADC has 2ⁿ steps. The size of one step is the reference voltage divided by 2ⁿ."
        },
        {
          "t": "example",
          "title": "ADC step size and reading",
          "steps": [
            "An 8-bit ADC uses a 5 V reference. It has 2⁸ = 256 steps.",
            "Step size = 5 V ÷ 256 = 0.0195 V, which is about 19.5 mV.",
            "Now take a 10-bit ADC with a 5 V reference. It has 1,024 steps.",
            "A reading of 512 means a voltage of 512 ÷ 1,024 × 5 V = 2.5 V."
          ]
        },
        {
          "t": "h",
          "text": "Driver circuits"
        },
        {
          "t": "p",
          "text": "A logic output can supply only a few milliamps. The limit depends on the chip, so read its datasheet. Relays, solenoids, clutches, lamps and motors need much more. A **driver** is a transistor or driver chip that switches the larger current while the logic pin only controls it."
        },
        {
          "t": "example",
          "title": "Drive a 24 V relay from a 5 V logic pin",
          "steps": [
            "The relay coil is 250 Ω at 24 V. Coil current = 24 V ÷ 250 Ω = 0.096 A = 96 mA. That is too much for a logic pin.",
            "Use an NPN transistor as a switch with the coil in its collector circuit.",
            "Aim for a base current of 2 mA. The base-emitter drop is about 0.7 V.",
            "Base resistor = (5 V − 0.7 V) ÷ 0.002 A = 2,150 Ω. Use the nearest standard value, 2.2 kΩ.",
            "Place a **flyback diode** across the coil. It absorbs the voltage spike made when the coil current is switched off, and protects the transistor."
          ]
        },
        {
          "t": "p",
          "text": "Motors use more elaborate drivers. An **H-bridge** uses four switches so a DC motor can run in either direction. A stepper motor needs a stepper driver that energises its coils in sequence."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Relays and drivers often switch mains or high-power supplies. Isolate and unplug the machine before you touch any wiring around them. Do not assume a low-voltage control board is safe when it sits next to mains terminals."
        },
        {
          "t": "h",
          "text": "Serial links"
        },
        {
          "t": "p",
          "text": "**Serial** links send bits one after another on few wires. Three types are common between chips and boards."
        },
        {
          "t": "ul",
          "items": [
            "**UART**: asynchronous, with no shared clock. Both ends must use the same **baud rate**. A common frame called 8N1 has 1 start bit, 8 data bits and 1 stop bit.",
            "**I²C**: two shared wires, SDA for data and SCL for clock. Each device has an address. It needs pull-up resistors.",
            "**SPI**: four wires: clock, data out, data in and a chip-select for each device. It is fast and simple."
          ]
        },
        {
          "t": "example",
          "title": "Data rate of a UART",
          "steps": [
            "The link is 9,600 baud with 8N1 framing.",
            "Each byte needs 1 + 8 + 1 = 10 bits on the wire.",
            "Bytes per second = 9,600 ÷ 10 = 960."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Never join a PC serial port to a logic UART pin directly. RS-232 voltage levels differ from logic levels and can damage the chip. Also check whether a board is 3.3 V or 5 V logic before connecting a tool."
        }
      ]
    },
    {
      "id": "m08-l6",
      "title": "Diagnosing digital faults",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson gives a safe, repeatable method for finding digital faults, using a logic probe, an oscilloscope and the machine itself. Follow the same order each time and you will find most faults quickly."
        },
        {
          "t": "h",
          "text": "Power, clock and reset first"
        },
        {
          "t": "p",
          "text": "A digital circuit needs three things before it can work. Check them in this order."
        },
        {
          "t": "ol",
          "items": [
            "**Power**: measure the supply voltage at the chip pins, not only at the supply. A low or noisy supply makes a chip behave strangely.",
            "**Clock**: check for a clock signal at the processor. A missing clock means a faulty crystal circuit or a dead chip.",
            "**Reset**: check that the reset line is in its inactive state after power-up. A reset line stuck in its active state keeps the processor stopped."
          ]
        },
        {
          "t": "h",
          "text": "Using the instruments"
        },
        {
          "t": "p",
          "text": "A **logic probe** shows whether a point is high, low or pulsing. An **oscilloscope** shows the shape of the signal. Remember that logic levels depend on the logic family and supply, so check the datasheet. To find a signal frequency from the screen, read the period and invert it."
        },
        {
          "t": "formula",
          "text": "f = 1 ÷ T",
          "caption": "Frequency from period"
        },
        {
          "t": "example",
          "title": "Frequency from a scope trace",
          "steps": [
            "The time base is set to 20 µs per division.",
            "One full cycle of the clock spans 5 divisions.",
            "Period = 5 × 20 µs = 100 µs = 0.0001 s.",
            "Frequency = 1 ÷ 0.0001 s = 10,000 Hz = 10 kHz."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Probe only low-voltage logic areas. Keep hands and probe leads away from the mains and primary side of the power supply. Use an isolated, correctly rated instrument, and keep the covers and interlocks in place wherever you can. Use ESD precautions when handling boards."
        },
        {
          "t": "h",
          "text": "Stuck signals and firmware"
        },
        {
          "t": "p",
          "text": "A **stuck signal** stays high or low when it should change. Causes include a failed output, a short to the supply or ground, a broken track or a faulty component pulling the line. Switch off and test with the supply removed to see which device holds the line."
        },
        {
          "t": "p",
          "text": "If power, clock and reset are good but the machine still fails, suspect firmware or memory. Check the firmware version, look for an interrupted update and read the service manual for recovery steps. Changing the board should come after the checks, not before."
        },
        {
          "t": "h",
          "text": "Self-test and error codes"
        },
        {
          "t": "p",
          "text": "Many machines run a **self-test** at power-on and show an **error code** when it fails. The meaning of a code varies between models and makers. Always look it up in the manufacturer's service manual for that model. Record the code, what you did and the result."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Diagnose in order: power, clock, reset, then signals, then firmware. Change one thing at a time and recheck after each change."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Compare the suspect board with a known good one of the same type. A reading that differs from the good board points you straight to the problem area."
        }
      ]
    }
  ],
  "practical": {
    "title": "Verify gate truth tables and observe a counter",
    "objective": "Wire logic gates on a trainer board or simulator, record their truth tables and compare them with theory. Then observe a binary counter and measure the divided clock frequency.",
    "time": "60 minutes",
    "tools": [
      "Digital logic trainer board with switches, LEDs and a clock, or a logic simulator",
      "AND, OR, NOT, NAND, NOR and XOR gate chips (or simulator gates)",
      "A binary counter chip or simulated counter",
      "Oscilloscope or logic probe",
      "Jumper wires and the datasheets for the chips used",
      "Worksheet for truth tables"
    ],
    "safety": [
      "Use only a low-voltage trainer supply of the voltage given in the datasheet. Never connect it to the mains side of any machine.",
      "Switch the trainer off before you add or move wires or chips.",
      "Never connect two gate outputs together. Never connect an output directly to the supply or ground.",
      "Use ESD precautions: wrist strap or touch a grounded metal surface first, and handle chips by the body.",
      "Fit chips the right way round. Check the notch against the datasheet before powering on."
    ],
    "steps": [
      "Read the datasheet for each chip and note which pins are power, ground, inputs and outputs.",
      "With the trainer off, fit one AND gate. Connect its inputs to two switches and its output to an LED.",
      "Connect the supply and power on. Set the switches to 00, 01, 10 and 11 and record the LED state for each. Write the result in a truth table.",
      "Repeat step 3 for OR, NAND, NOR and XOR gates, switching off before each rewire.",
      "Add a NOT gate. Record its output for input 0 and input 1.",
      "Compare each recorded table with the theory in this module. Mark any row that differs and recheck your wiring.",
      "Switch off. Connect a slow clock to the input of the binary counter and connect its outputs to four LEDs.",
      "Power on and watch the LEDs count in binary. Write down the pattern for the first 16 clock pulses and note what happens after 1111.",
      "Use the oscilloscope or logic probe on the clock input and on the last counter output. Measure the clock frequency and the last output frequency.",
      "Divide the clock frequency by the last-output frequency. Compare the ratio with 2 raised to the number of counter stages.",
      "Switch off, remove the wires and chips, and store them in anti-static packaging."
    ],
    "checks": [
      "I can fill in the truth table for AND, OR, NAND, NOR, XOR and NOT from my own measurements.",
      "I can explain any difference between my readings and the theory.",
      "I can read a 4-bit counter output as a binary number and convert it to decimal.",
      "I can find the frequency of a signal from its period on a scope.",
      "I can say why power, clock and reset are checked first in a digital fault."
    ]
  },
  "quiz": [
    {
      "id": "m08-q01",
      "q": "How many different values can 8 bits represent?",
      "options": [
        "128",
        "255",
        "256",
        "512"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m08-l1",
      "explain": "8 bits give 2⁸ = 256 patterns, counting from 0 to 255. The figure 255 is the highest value, not the number of values."
    },
    {
      "id": "m08-q02",
      "q": "What is the binary number 00101101 in decimal?",
      "options": [
        "41",
        "45",
        "53",
        "57"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m08-l1",
      "explain": "The bits set are 32, 8, 4 and 1, and 32 + 8 + 4 + 1 = 45. The value 41 is 00101001, which has no 4 bit set."
    },
    {
      "id": "m08-q03",
      "q": "What is the hexadecimal number 0xC9 in decimal?",
      "options": [
        "189",
        "209",
        "219",
        "201"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m08-l1",
      "explain": "C is 12, so the value is 12 × 16 + 9 = 192 + 9 = 201. Using 13 for C by mistake would give 217, and 209 is the value of 0xD1."
    },
    {
      "id": "m08-q04",
      "q": "What is decimal 100 written in hexadecimal?",
      "options": [
        "0x64",
        "0x46",
        "0x10",
        "0xA0"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m08-l1",
      "explain": "100 = 6 × 16 + 4, so the hex digits are 6 and 4, giving 0x64. The value 0x46 is 70 in decimal because its digits are the wrong way round."
    },
    {
      "id": "m08-q05",
      "q": "A service mode shows a register value of 0x3C. Which bit pattern is this?",
      "options": [
        "11000011",
        "00110011",
        "00111100",
        "11001100"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m08-l1",
      "explain": "The digit 3 is 0011 and C (12) is 1100, so 0x3C is 00111100. The pattern 11000011 is the same bits inverted, which is 0xC3."
    },
    {
      "id": "m08-q06",
      "q": "Why do digital circuits use binary numbers?",
      "options": [
        "Two voltage states are easy to tell apart reliably",
        "Binary numbers are shorter to write than decimal",
        "Decimal arithmetic is not possible in a circuit",
        "Binary needs fewer wires than any other code"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m08-l1",
      "explain": "A circuit with only a low and a high state tolerates noise well. Binary is actually longer to write than decimal, which is why hex is used for people."
    },
    {
      "id": "m08-q07",
      "q": "In most technical documents, 1 KiB is equal to:",
      "options": [
        "1,000 bits",
        "1,000 bytes",
        "1,024 bits",
        "1,024 bytes"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m08-l1",
      "explain": "The unit KiB means 2¹⁰ = 1,024 bytes. Some documents use kB for 1,000 bytes, so check which one the manual means."
    },
    {
      "id": "m08-q08",
      "q": "Which gate gives an output of 1 only when its two inputs are different?",
      "options": [
        "OR",
        "XOR",
        "NOR",
        "NAND"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m08-l2",
      "explain": "XOR is 1 for inputs 01 and 10 only. OR also gives 1 for inputs 11, which is why it is the tempting wrong choice."
    },
    {
      "id": "m08-q09",
      "q": "What does a NOT gate do?",
      "options": [
        "Gives 1 only when both inputs are 1",
        "Passes the larger of two inputs",
        "Stores the last input value",
        "Turns 0 into 1 and 1 into 0"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m08-l2",
      "explain": "A NOT gate, or inverter, has one input and gives the opposite value. Giving 1 only when both inputs are 1 describes AND, which has two inputs."
    },
    {
      "id": "m08-q10",
      "q": "Both inputs of a gate are at 1. Which of these gates gives an output of 1?",
      "options": [
        "OR",
        "NAND",
        "NOR",
        "XOR"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m08-l2",
      "explain": "OR gives 1 whenever any input is 1. NAND and NOR give 0 for inputs 11, and XOR gives 0 because the inputs are the same."
    },
    {
      "id": "m08-q11",
      "q": "A drum motor must run only when the cover switch reads 1 (closed) and the start signal is 1. Which gate combines them?",
      "options": [
        "OR",
        "XOR",
        "AND",
        "NOR"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m08-l2",
      "explain": "AND gives 1 only when both conditions are 1. OR would let the motor run with the cover open as long as the start signal is 1, which is unsafe."
    },
    {
      "id": "m08-q12",
      "q": "A chip pin is marked /RESET and is active low. When does it reset the chip?",
      "options": [
        "While the pin is held at logic 1",
        "While the pin is held at logic 0",
        "Only on a rising edge of the pin",
        "Only when the pin is disconnected"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m08-l2",
      "explain": "Active low means the action happens at logic 0. A pin at logic 1 is the inactive, normal running state."
    },
    {
      "id": "m08-q13",
      "q": "A truth table for a circuit with 3 inputs lists every input combination. How many rows does it have?",
      "options": [
        "3",
        "6",
        "8",
        "9"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m08-l2",
      "explain": "Each input has 2 states, so there are 2³ = 8 combinations. The figure 6 comes from multiplying 3 × 2, which is not how combinations grow."
    },
    {
      "id": "m08-q14",
      "q": "A heater must switch on only when the thermistor is in range (OK = 1), the door is closed (DOOR = 1) and the overheat flag is not set (HOT = 0). Which condition is correct?",
      "options": [
        "OK AND DOOR AND NOT HOT",
        "OK OR DOOR OR NOT HOT",
        "OK AND DOOR AND HOT",
        "NOT OK AND DOOR AND HOT"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m08-l2",
      "explain": "All three conditions must be true together, so use AND, and the overheat flag must be inverted. Using OR would allow heating with the door open."
    },
    {
      "id": "m08-q15",
      "q": "A half adder adds the two bits 1 and 1. What are its sum and carry outputs?",
      "options": [
        "Sum 1, carry 0",
        "Sum 0, carry 1",
        "Sum 1, carry 1",
        "Sum 0, carry 0"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m08-l3",
      "explain": "1 + 1 = 2, which is 10 in binary, so the sum bit is 0 and the carry is 1. Sum is A XOR B and carry is A AND B."
    },
    {
      "id": "m08-q16",
      "q": "A 4-bit binary counter shows 1111 and receives one more clock pulse. What does it show next?",
      "options": [
        "10000",
        "1111",
        "0000",
        "0001"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m08-l3",
      "explain": "A 4-bit counter has only four outputs, so after 1111 it rolls over to 0000. A fifth bit does not exist, so 10000 cannot appear."
    },
    {
      "id": "m08-q17",
      "q": "What is the smallest number of flip-flops that can make a counter with 12 states (0 to 11)?",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m08-l3",
      "explain": "3 flip-flops give only 2³ = 8 states, which is too few. 4 flip-flops give 16 states, so 4 is the minimum and extra logic ends the count at 11."
    },
    {
      "id": "m08-q18",
      "q": "A 1 MHz clock drives a 4-bit binary counter. What is the frequency at the last counter output?",
      "options": [
        "250 kHz",
        "125 kHz",
        "62.5 kHz",
        "16 kHz"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m08-l3",
      "explain": "The counter divides by 2⁴ = 16, and 1 MHz ÷ 16 = 62.5 kHz. The value 250 kHz would be the output of the second stage, which divides by only 4."
    },
    {
      "id": "m08-q19",
      "q": "How many select lines does an 8-to-1 multiplexer need?",
      "options": [
        "2",
        "3",
        "4",
        "8"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m08-l3",
      "explain": "Select lines must choose among 8 inputs, and 2³ = 8, so 3 lines are enough. Using 8 select lines would be one per input, which a mux does not need."
    },
    {
      "id": "m08-q20",
      "q": "The input of a 3-to-8 decoder is 101. Which output is active, counting outputs from 0?",
      "options": [
        "Output 3",
        "Output 6",
        "Output 7",
        "Output 5"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m08-l3",
      "explain": "Binary 101 is 4 + 1 = 5, so output 5 goes active. Output 6 would need the input 110."
    },
    {
      "id": "m08-q21",
      "q": "What does a D flip-flop do on the active edge of its clock?",
      "options": [
        "Copies the D input to the output and holds it",
        "Adds the D input to the stored value",
        "Inverts the output every time",
        "Clears its output to zero"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m08-l3",
      "explain": "A D flip-flop captures D at the clock edge and keeps that value until the next edge. Inverting on every clock describes a toggle flip-flop, not a D type."
    },
    {
      "id": "m08-q22",
      "q": "Which circuit has an output that depends on past inputs as well as present inputs?",
      "options": [
        "Decoder",
        "Multiplexer",
        "Flip-flop",
        "Half adder"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m08-l3",
      "explain": "A flip-flop stores state, so its output depends on history. Decoders, multiplexers and adders are combinational and have no memory."
    },
    {
      "id": "m08-q23",
      "q": "A 24-bit shift register is empty and is loaded serially, one bit per clock pulse. How many clock pulses fill it?",
      "options": [
        "8",
        "12",
        "48",
        "24"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m08-l3",
      "explain": "One bit enters on each pulse, so 24 pulses are needed for 24 bits. Counting in bytes gives 8, but the clock moves bits, not bytes."
    },
    {
      "id": "m08-q24",
      "q": "Which memory loses its contents when the power is switched off?",
      "options": [
        "Flash",
        "EEPROM",
        "ROM",
        "RAM"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m08-l4",
      "explain": "RAM is volatile and keeps data only while powered. Flash, EEPROM and ROM are non-volatile and keep their data."
    },
    {
      "id": "m08-q25",
      "q": "Which of these memories can be erased and rewritten electrically and still keeps its data without power?",
      "options": [
        "Mask ROM",
        "EEPROM",
        "Dynamic RAM",
        "Static RAM"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m08-l4",
      "explain": "EEPROM is rewritable and non-volatile. Static RAM can be rewritten too, but it loses its data when power is removed."
    },
    {
      "id": "m08-q26",
      "q": "A memory chip has 16 address lines and 8 data lines. How many bytes can it hold?",
      "options": [
        "128",
        "65,536",
        "524,288",
        "16"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m08-l4",
      "explain": "16 address lines give 2¹⁶ = 65,536 locations of 1 byte each. The value 524,288 is the number of bits, not bytes, and 128 comes from multiplying 16 by 8."
    },
    {
      "id": "m08-q27",
      "q": "What does the crystal oscillator give a processor?",
      "options": [
        "A steady timing signal",
        "A stable supply voltage",
        "The stored firmware",
        "A signal that clears memory"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m08-l4",
      "explain": "The crystal sets the clock rate that steps the processor through its program. It does not store anything and it does not supply power."
    },
    {
      "id": "m08-q28",
      "q": "What is the main job of the reset circuit at power-on?",
      "options": [
        "It erases the old page counters",
        "It holds the processor in a known state until supply and clock are stable",
        "It tests every memory location",
        "It switches the clock off to save power"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m08-l4",
      "explain": "Reset holds the processor still, then releases it when the supply and clock are good. It does not clear counters, which would be harmful."
    },
    {
      "id": "m08-q29",
      "q": "A machine loses its date, time and user settings every time it is unplugged, but works normally otherwise. What is the most likely cause?",
      "options": [
        "A faulty fuser lamp",
        "A damaged paper sensor",
        "A flat backup battery",
        "A worn drum"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m08-l4",
      "explain": "The backup battery keeps the settings memory alive when the mains is off. A fuser, paper sensor or drum fault would not erase settings."
    },
    {
      "id": "m08-q30",
      "q": "After you fit a new main board, the page counter reads 0 although the machine has printed thousands of pages. What was most likely missed?",
      "options": [
        "Resetting the clock crystal",
        "Cleaning the contacts of the new board",
        "Replacing the backup battery as well",
        "Recording and restoring the old counters and settings"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m08-l4",
      "explain": "Counters and settings are stored in memory on the board, so a new board starts with its own values. Record them before the swap and follow the manual to restore them."
    },
    {
      "id": "m08-q31",
      "q": "Mains power fails halfway through a firmware update and the machine will not start afterwards. What is the most likely reason?",
      "options": [
        "The firmware in flash memory is incomplete",
        "The reset circuit has been erased",
        "The page counters have overflowed",
        "The clock crystal has changed frequency"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m08-l4",
      "explain": "An update rewrites flash memory, and a power cut leaves the program partly written so the processor cannot run it. Follow the manual for recovery."
    },
    {
      "id": "m08-q32",
      "q": "A 10-bit ADC has a 5 V reference and gives a reading of 512. What voltage does this represent?",
      "options": [
        "1.25 V",
        "2.50 V",
        "2.56 V",
        "3.30 V"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m08-l5",
      "explain": "The converter has 1,024 steps, so 512 ÷ 1,024 × 5 V = 2.5 V. The result is half of the reference because 512 is half of 1,024."
    },
    {
      "id": "m08-q33",
      "q": "An 8-bit ADC uses a 5 V reference. What is the approximate size of one step?",
      "options": [
        "1.95 mV",
        "195 mV",
        "19.5 mV",
        "500 mV"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m08-l5",
      "explain": "There are 2⁸ = 256 steps, and 5 V ÷ 256 = 0.0195 V, which is about 19.5 mV. The value 1.95 mV is ten times too small."
    },
    {
      "id": "m08-q34",
      "q": "Why is a flyback diode fitted across a relay coil driven by a transistor?",
      "options": [
        "To make the relay switch faster",
        "To limit the coil current while it is on",
        "To absorb the voltage spike when the coil switches off",
        "To change the supply from AC to DC"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m08-l5",
      "explain": "A collapsing coil field produces a high voltage spike that could destroy the transistor, and the diode gives it a safe path. It does not limit the on-state current."
    },
    {
      "id": "m08-q35",
      "q": "A relay coil is rated 24 V and 250 Ω, and a logic pin can supply only a few milliamps. What should sit between the pin and the coil?",
      "options": [
        "A larger resistor in series",
        "A capacitor across the pin",
        "A second pin wired in parallel",
        "A transistor or driver chip"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m08-l5",
      "explain": "The coil draws 24 ÷ 250 = 0.096 A = 96 mA, far above what the pin can give. A series resistor would only reduce the current further so the relay would not pull in."
    },
    {
      "id": "m08-q36",
      "q": "A UART link runs at 9,600 baud with 8N1 framing. About how many bytes per second can it carry?",
      "options": [
        "9,600",
        "960",
        "1,200",
        "768"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m08-l5",
      "explain": "Each byte takes 10 bits on the wire because of the start and stop bits, so 9,600 ÷ 10 = 960 bytes per second. The figure 1,200 forgets the framing bits."
    },
    {
      "id": "m08-q37",
      "q": "Which serial bus uses two shared wires, SDA and SCL, and gives each device an address?",
      "options": [
        "SPI",
        "UART",
        "I²C",
        "Parallel"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m08-l5",
      "explain": "I²C has a data wire and a clock wire shared by all devices, which are told apart by address. SPI uses separate chip-select lines instead."
    },
    {
      "id": "m08-q38",
      "q": "A dead digital control board is on the bench. Which checks come first?",
      "options": [
        "Supply voltage, clock and reset",
        "Firmware language, date and time",
        "Paper size, toner and counters",
        "Fuser, drum and cleaning blade"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m08-l6",
      "explain": "A digital circuit cannot run without power, a clock and a released reset, so these come first. Checking other items first wastes time."
    },
    {
      "id": "m08-q39",
      "q": "On an oscilloscope set to 20 µs per division, one full clock cycle spans 5 divisions. What is the clock frequency?",
      "options": [
        "100 kHz",
        "1 kHz",
        "5 kHz",
        "10 kHz"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m08-l6",
      "explain": "The period is 5 × 20 µs = 100 µs, and f = 1 ÷ 100 µs = 10 kHz. The value 100 kHz mixes up the period in microseconds with the frequency."
    },
    {
      "id": "m08-q40",
      "q": "A line that should be pulsing shows a steady high on a logic probe. What is the most sensible conclusion?",
      "options": [
        "The line is stuck high, so look for a failed output or a short to the supply",
        "The line is working, because high is a normal state",
        "The probe is faulty and should be thrown away",
        "The firmware must be older than the board"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m08-l6",
      "explain": "A signal that should change but does not is stuck. Remove power and find which device or short is holding it, rather than assuming the probe is faulty."
    },
    {
      "id": "m08-q41",
      "q": "A machine shows an error code you do not recognise. What is the right first step?",
      "options": [
        "Replace the main board",
        "Look the code up in the service manual for that model",
        "Reset all the counters",
        "Use the meaning from a different model"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m08-l6",
      "explain": "Error codes differ between makers and models, so only the manual for that machine gives the true meaning. Guessing from another model can send you to the wrong part."
    },
    {
      "id": "m08-q42",
      "q": "You need to trace logic signals on a board inside a mains-powered machine. Which practice is correct?",
      "options": [
        "Clip the probe ground to any bare metal on the frame",
        "Remove the interlock so you can reach the board",
        "Probe only low-voltage logic and keep clear of mains areas",
        "Work with wet hands to improve the contact"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m08-l6",
      "explain": "Keep to the low-voltage logic side and away from the primary side of the supply. Interlocks must never be removed, and frame metal may not be at the logic reference."
    }
  ],
  "cards": [
    {
      "id": "m08-c01",
      "front": "What is a bit?",
      "back": "One binary digit. It is either 0 or 1.",
      "lesson": "m08-l1"
    },
    {
      "id": "m08-c02",
      "front": "What is a byte?",
      "back": "A group of 8 bits. It can hold 256 different values, 0 to 255.",
      "lesson": "m08-l1"
    },
    {
      "id": "m08-c03",
      "front": "Binary place values for 8 bits, left to right",
      "back": "128, 64, 32, 16, 8, 4, 2, 1.",
      "lesson": "m08-l1"
    },
    {
      "id": "m08-c04",
      "front": "How many bits does one hex digit stand for?",
      "back": "4 bits, called a nibble. A hex digit runs from 0 to F.",
      "lesson": "m08-l1"
    },
    {
      "id": "m08-c05",
      "front": "Hex digits A to F in decimal",
      "back": "A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.",
      "lesson": "m08-l1"
    },
    {
      "id": "m08-c06",
      "front": "What is 0xFF in decimal?",
      "back": "255. It is F × 16 + F = 15 × 16 + 15.",
      "lesson": "m08-l1"
    },
    {
      "id": "m08-c07",
      "front": "Gate that outputs 1 only when all inputs are 1",
      "back": "AND.",
      "lesson": "m08-l2"
    },
    {
      "id": "m08-c08",
      "front": "Gate that outputs 1 when at least one input is 1",
      "back": "OR.",
      "lesson": "m08-l2"
    },
    {
      "id": "m08-c09",
      "front": "What does XOR do?",
      "back": "Gives 1 only when its two inputs are different.",
      "lesson": "m08-l2"
    },
    {
      "id": "m08-c10",
      "front": "What do NAND and NOR do?",
      "back": "NAND is AND with the output inverted. NOR is OR with the output inverted.",
      "lesson": "m08-l2"
    },
    {
      "id": "m08-c11",
      "front": "What does active low mean?",
      "back": "The signal does its job when it is at logic 0. It is often marked with a bar or a slash.",
      "lesson": "m08-l2"
    },
    {
      "id": "m08-c12",
      "front": "How many rows in a truth table with n inputs?",
      "back": "2ⁿ rows. Three inputs give 8 rows.",
      "lesson": "m08-l2"
    },
    {
      "id": "m08-c13",
      "front": "Combinational versus sequential logic",
      "back": "Combinational output depends only on current inputs. Sequential output also depends on stored state.",
      "lesson": "m08-l3"
    },
    {
      "id": "m08-c14",
      "front": "What does a decoder do?",
      "back": "Turns a binary input code into one active output line.",
      "lesson": "m08-l3"
    },
    {
      "id": "m08-c15",
      "front": "What does a multiplexer do?",
      "back": "Selects one of several inputs and passes it to the single output.",
      "lesson": "m08-l3"
    },
    {
      "id": "m08-c16",
      "front": "Half adder sum and carry formulas",
      "back": "Sum = A XOR B. Carry = A AND B.",
      "lesson": "m08-l3"
    },
    {
      "id": "m08-c17",
      "front": "What does a D flip-flop do?",
      "back": "Copies its D input to the output on the active clock edge and holds it.",
      "lesson": "m08-l3"
    },
    {
      "id": "m08-c18",
      "front": "Modulus of a binary counter with n flip-flops",
      "back": "2ⁿ. It also divides the clock frequency by 2ⁿ.",
      "lesson": "m08-l3"
    },
    {
      "id": "m08-c19",
      "front": "Volatile versus non-volatile memory",
      "back": "Volatile memory loses data without power (RAM). Non-volatile keeps it (ROM, flash, EEPROM).",
      "lesson": "m08-l4"
    },
    {
      "id": "m08-c20",
      "front": "What is firmware?",
      "back": "The program stored in non-volatile memory that makes the machine work.",
      "lesson": "m08-l4"
    },
    {
      "id": "m08-c21",
      "front": "What does the reset circuit do?",
      "back": "Holds the processor in a known state at power-on until supply and clock are stable.",
      "lesson": "m08-l4"
    },
    {
      "id": "m08-c22",
      "front": "Symptom: date and settings lost at every power-off",
      "back": "Flat backup battery. Record settings, fit the correct type, dispose of the old cell properly.",
      "lesson": "m08-l4"
    },
    {
      "id": "m08-c23",
      "front": "Memory locations with a address lines",
      "back": "2ᵃ locations. 16 address lines give 65,536.",
      "lesson": "m08-l4"
    },
    {
      "id": "m08-c24",
      "front": "ADC step size formula",
      "back": "Step = reference voltage ÷ 2ⁿ for an n-bit converter.",
      "lesson": "m08-l5"
    },
    {
      "id": "m08-c25",
      "front": "Why does a relay coil need a flyback diode?",
      "back": "It absorbs the voltage spike created when the coil current is switched off.",
      "lesson": "m08-l5"
    },
    {
      "id": "m08-c26",
      "front": "What is an H-bridge used for?",
      "back": "Four switches that let a DC motor run in either direction.",
      "lesson": "m08-l5"
    },
    {
      "id": "m08-c27",
      "front": "UART 8N1 framing",
      "back": "1 start bit, 8 data bits, 1 stop bit. That is 10 bits per byte.",
      "lesson": "m08-l5"
    },
    {
      "id": "m08-c28",
      "front": "How many wires does SPI use?",
      "back": "Four: clock, data out, data in and a chip-select for each device.",
      "lesson": "m08-l5"
    },
    {
      "id": "m08-c29",
      "front": "First three checks on a dead digital board",
      "back": "Power at the chip, then the clock signal, then the reset line.",
      "lesson": "m08-l6"
    },
    {
      "id": "m08-c30",
      "front": "Formula for frequency from the period",
      "back": "f = 1 ÷ T. A period of 100 µs gives 10 kHz.",
      "lesson": "m08-l6"
    }
  ]
});

OMM.registerModule({
  "id": "m14",
  "summary": "Explain how a multifunction product, its fax, scan-to features, finishers and paper-handling options work, find common faults, and install and configure a machine on a network.",
  "outcomes": [
    "Describe the functions, controller, network connections and stored data of a multifunction product.",
    "Explain how a fax call works and calculate transmission time from page data and line speed.",
    "Set up and troubleshoot scan to email and scan to folder, including address books and authentication.",
    "Describe how staplers, punch units, offset stackers and booklet makers work, and clear their jams safely.",
    "Calculate paper mass and convert paper sizes, and explain how document feeders, duplex units and humidity affect paper handling.",
    "Install an option or access device, read error codes and logs, and complete a service report for a multifunction product."
  ],
  "cheatsheet": [
    "MFP = print + copy + scan + fax, run by one controller that stores jobs, images and settings.",
    "Transmission time (s) = bits ÷ line speed (bit/s). Bits = bytes × 8. Handshake time is extra.",
    "Fax modems fall back to a slower speed when the line is noisy. Slow or failed fax often means line quality.",
    "Fax over VoIP or a PBX often fails or slows. Try a lower speed or error correction, and ask for a fax-friendly line.",
    "Scan to folder needs: host name or IP, share name, user, password and write permission.",
    "Mass of one sheet (g) = area (m²) × paper weight (g/m²). A4 is 0.06237 m², so 80 g/m² gives about 5 g.",
    "A4 = 210 × 297 mm. A3 = 297 × 420 mm. A5 = 148 × 210 mm. Letter = 215.9 × 279.4 mm.",
    "Never put fingers into a staple unit, punch unit or booklet maker. Switch off and unplug first.",
    "Change default admin passwords, and erase or encrypt stored data before a machine leaves the customer.",
    "After installing an option: set it up in the menu, print a configuration page and test it."
  ],
  "lessons": [
    {
      "id": "m14-l1",
      "title": "What a multifunction product is",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains what a multifunction product is, how its controller and network connections are arranged, and why the data stored inside it matters. A **multifunction product** (MFP) combines printing, copying, scanning and often faxing in one machine. You may also hear **MFP** or **MFD** (multifunction device)."
        },
        {
          "t": "h",
          "text": "Functions and shared parts"
        },
        {
          "t": "p",
          "text": "The functions share one print engine, one paper path and one **controller**. The controller is the computer inside the machine. It has a processor, memory, a storage drive and network and USB ports. It receives print jobs, runs the copy and scan jobs, and tells the engine what to do."
        },
        {
          "t": "diagram",
          "name": "mfp-structure"
        },
        {
          "t": "ul",
          "items": [
            "**Print**: jobs arrive from computers over a network or USB cable.",
            "**Copy**: the scanner reads the original and the engine prints it.",
            "**Scan**: the scanner makes a file and the controller sends it by email, to a folder, to a USB drive or to a server.",
            "**Fax**: a fax unit with a modem sends and receives pages over a telephone line or an internet service."
          ]
        },
        {
          "t": "p",
          "text": "Because the parts are shared, a fault in one place can show up in several functions. If copies and prints both have a streak, the cause is in the print engine. If only scans have a streak, look at the scanner glass and the scanner. If the panel is dead, no function works."
        },
        {
          "t": "h",
          "text": "Panel and network structure"
        },
        {
          "t": "p",
          "text": "The **operation panel** is the screen and keys the user touches. The **network connection** is usually an Ethernet port. Many machines also have wireless, USB and a telephone line socket for fax. The machine has an **IP address**, which is its address on the network. The network lesson in module 10 covers addresses in detail."
        },
        {
          "t": "table",
          "head": [
            "Connection",
            "Used for"
          ],
          "rows": [
            [
              "Ethernet or wireless",
              "Network printing, scan to email and folder, web page for settings"
            ],
            [
              "USB device port",
              "Direct printing from one computer"
            ],
            [
              "USB host port on the panel",
              "Printing from or scanning to a memory stick"
            ],
            [
              "Telephone line socket",
              "Fax send and receive"
            ]
          ],
          "caption": "Typical connections on a multifunction product"
        },
        {
          "t": "h",
          "text": "Stored data and security"
        },
        {
          "t": "p",
          "text": "A multifunction product keeps data. Its storage drive can hold page images from copies and scans, queued and saved print jobs, fax pages, an address book, user accounts and job logs. A customer may be copying contracts, medical records or payslips. You may see this data while you work, and it must stay confidential."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Treat every multifunction product as a computer that holds private documents. Never copy, read or share customer data. Before a machine leaves the customer, erase or encrypt the drive using the method in the service manual, and tell the customer what you did."
        },
        {
          "t": "ul",
          "items": [
            "Change the default administrator password when you install a machine.",
            "Turn off network services the customer does not use.",
            "Keep the fax line and the network separate as the manufacturer designed. Do not change settings that could join them without the customer's IT contact agreeing.",
            "Keep firmware up to date as the manufacturer advises, and record the version."
          ]
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Switch off and unplug the machine before you open covers or remove the controller. Mains voltage is present inside the power supply even when the panel is off. Handle boards and drives by their edges and use ESD precautions. A drive that is removed for repair still holds customer data, so keep it with you or locked away."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "When you arrive at a machine, print its configuration or status page first. It shows the IP address, firmware version, counters and installed options in one place."
        }
      ]
    },
    {
      "id": "m14-l2",
      "title": "Fax operation and faults",
      "minutes": 11,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how a fax transmission works in outline, how to calculate how long it takes, and how to find faults on the line, the machine and the telephone system around it. A **fax** machine sends a picture of a page over a telephone connection. The sending machine scans the page and the receiving machine prints it."
        },
        {
          "t": "h",
          "text": "How a fax call works"
        },
        {
          "t": "ol",
          "items": [
            "The sender dials the number. The receiving machine answers.",
            "The two machines exchange short messages called the **handshake**. They state what each can do, such as page size, resolution and speed.",
            "A **training** signal tests the line, and the machines agree on a speed that the line can carry.",
            "The sender scans the page, compresses the image data and sends it as a series of bits.",
            "The receiver confirms each page, and the call ends after the last page."
          ]
        },
        {
          "t": "p",
          "text": "The line speed is measured in **bit/s** (bits per second). Classic fax machines work at several speeds, commonly from a few thousand bit/s up to 14,400 bit/s, and some go faster. The exact list depends on the machine. When the line is noisy, the machines **fall back** to a lower speed. Fax over a good line is quick. Fax over a poor line is slow or fails."
        },
        {
          "t": "p",
          "text": "**Error correction mode** (ECM) splits the page data into blocks. The receiver checks each block and asks for a resend if one is damaged. Both machines must support it. Without ECM, noise shows up as thin lines or smears on the received page."
        },
        {
          "t": "h",
          "text": "Calculating transmission time"
        },
        {
          "t": "formula",
          "text": "time (s) = bits ÷ line speed (bit/s)",
          "caption": "One byte = 8 bits"
        },
        {
          "t": "example",
          "title": "Time to send one page",
          "steps": [
            "A compressed page is 36,000 bytes. The line speed is 9,600 bit/s.",
            "Bits = 36,000 × 8 = 288,000 bits.",
            "Time = 288,000 ÷ 9,600 = 30 s.",
            "At 14,400 bit/s the same page takes 288,000 ÷ 14,400 = 20 s.",
            "The handshake and training add several seconds to each call. A page with more black detail makes a larger file and takes longer."
          ]
        },
        {
          "t": "h",
          "text": "Fax faults"
        },
        {
          "t": "p",
          "text": "First decide whether the fault is when sending or when receiving, and whether it affects all numbers or only some. Test the same page to another fax machine to find out."
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause"
          ],
          "rows": [
            [
              "No dial tone or cannot dial",
              "Line cord in the wrong socket, line faulty, wrong dial type or a PBX that needs an outside-line prefix"
            ],
            [
              "Sends but received page has lines",
              "Noisy line, ECM off, or a dirty scanner glass at the sender"
            ],
            [
              "Calls drop or very slow",
              "Poor line quality, fall back to low speed, or VoIP problems"
            ],
            [
              "Does not receive",
              "Receive mode wrong, memory or paper full, or an answering device taking the call"
            ],
            [
              "Works to some numbers only",
              "The other machine, its line or a different route is the problem"
            ]
          ],
          "caption": "Common fax symptoms"
        },
        {
          "t": "p",
          "text": "Many offices connect fax through a **PBX** (a private telephone exchange) or through **VoIP**, which carries voice over the internet. Both were designed for voice, and internet delays and compression can disturb the fax signals. Options that often help are a lower fax speed, switching ECM on or off as the manual advises, or asking the telephone provider for a fax-friendly line. Some systems use a method made for fax over IP; the customer's telephone provider can say what they support."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A telephone line carries a ringing voltage that can give an unpleasant shock. Do not touch bare line conductors while a call may arrive. Use a training line simulator or an approved telephone socket, and unplug the line cord before you open the machine."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Test the machine on its own: make a copy first, then connect a known-good line cord and phone socket. This separates machine faults from line faults quickly."
        }
      ]
    },
    {
      "id": "m14-l3",
      "title": "Scan-to and network features",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how a multifunction product sends scanned documents by email and to network folders, and how to set these up and find faults. These features are called **scan to** features, and they are among the most common causes of service calls on network machines."
        },
        {
          "t": "h",
          "text": "Scan to email"
        },
        {
          "t": "p",
          "text": "For **scan to email**, the machine behaves like an email program. It creates a message with the scan attached and hands it to a mail server using **SMTP** (the standard protocol for sending email). The settings you must enter are on the machine's web page or panel."
        },
        {
          "t": "diagram",
          "name": "scan-to-flow"
        },
        {
          "t": "ul",
          "items": [
            "The mail server name or IP address, and its port number. Ports vary with the type of connection security, so use what the mail provider states.",
            "The security type the server requires, such as TLS.",
            "A user name and password, if the server needs the machine to sign in.",
            "The sender address that the machine will use.",
            "A maximum attachment size. Mail servers refuse messages that are too large."
          ]
        },
        {
          "t": "h",
          "text": "Scan to folder"
        },
        {
          "t": "p",
          "text": "For **scan to folder**, the machine writes the file into a shared folder on a computer or file server. A common method is an **SMB share**, which is how Windows computers share folders. You need the host name or IP address, the share name, the folder path, and a user name and password that have permission to write there. Other methods, such as FTP, are used too."
        },
        {
          "t": "p",
          "text": "The **address book** stores email addresses and folder destinations so that users do not type them each time. It can be kept on the machine or read from the company directory. **Authentication** means the user signs in with a code, card or account before using the machine, which lets the machine know who is scanning and keeps the account data correct."
        },
        {
          "t": "h",
          "text": "File size"
        },
        {
          "t": "example",
          "title": "Why a scan to email fails",
          "steps": [
            "A colour A4 scan at 300 dpi measures about 2,480 × 3,508 pixels, which is 8,699,840 pixels.",
            "Uncompressed colour uses 3 bytes per pixel: 8,699,840 × 3 = 26,099,520 bytes, about 26 MB for one page.",
            "The machine compresses the image, so real files are much smaller, but a 20-page colour scan can still be larger than the 10 MB limit that the mail server sets as an example here.",
            "Fixes: lower the resolution, scan in black and white or grey, use higher compression, or split the job into several emails."
          ]
        },
        {
          "t": "h",
          "text": "Finding scan-to faults"
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Check"
          ],
          "rows": [
            [
              "Cannot reach the mail server",
              "Server name, port, security type, network cable, link light and DNS setting"
            ],
            [
              "Server rejects the sign-in",
              "User name, password expired or changed, or server requires a different security setting"
            ],
            [
              "Folder test fails",
              "Share name, path, user permission, password, and whether the computer is switched on"
            ],
            [
              "Works for one user only",
              "The address book entry or that user's account permission"
            ],
            [
              "Wrong date on files or logs",
              "Machine date, time and time zone setting"
            ]
          ],
          "caption": "Symptom and first check"
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Change one setting at a time and test after each change. Use the machine's own test button for a mail server or folder if it has one, then send a real scan."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Check from a computer on the same network first. If the computer can open the shared folder with the same user name and password, the problem is in the machine settings. If it cannot, the problem is on the server or the network."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never write passwords on the machine or leave them in a service report that others can read. Ask the customer's administrator to type the password, or enter it yourself and do not record it. Use a test folder with dummy files, not the customer's real documents."
        }
      ]
    },
    {
      "id": "m14-l4",
      "title": "Finishers, sorters and staplers",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers finishers: the units that sort, stack, staple, punch and fold the copies after they leave the machine, and how to find faults in them. A **finisher** is an output unit that is attached to the side of the copier. It takes the printed sheets and prepares finished sets."
        },
        {
          "t": "h",
          "text": "What finishers do"
        },
        {
          "t": "ul",
          "items": [
            "**Offset stacking**: each set is moved a few millimetres sideways from the one before it, so the sets can be separated by eye. A **shift tray** or a moving guide does the shifting.",
            "**Stapling**: a **staple unit** drives a staple through the corner or the edge of a set.",
            "**Punching**: a **punch unit** makes holes for a binder. Round paper chips fall into a waste box that must be emptied.",
            "**Booklet making**: a booklet maker staples the set along the centre fold, folds it, and sometimes trims the edge. This is called **saddle stitching**."
          ]
        },
        {
          "t": "diagram",
          "name": "finisher-path"
        },
        {
          "t": "p",
          "text": "The sheets collect on a **processing tray**. A pair of **jogger** fences tap the sheets against a stop so the edges line up before the staple fires. If the joggers are out of position, the staple lands crooked or the set is untidy."
        },
        {
          "t": "h",
          "text": "Staple units and capacity"
        },
        {
          "t": "p",
          "text": "The staple unit holds a **staple cartridge**, a plastic holder of staples glued into a strip. A motor drives the staple through the paper and a **clincher** bends the legs over on the other side. A sensor tells the machine when the cartridge is empty or missing. The maximum number of sheets is set by the manufacturer for a given paper weight. Thicker paper means fewer sheets."
        },
        {
          "t": "example",
          "title": "Will the staple unit manage the job?",
          "steps": [
            "A stapler is rated for 50 sheets of standard paper. The customer wants a 120-page document printed on both sides.",
            "Two pages fit on one sheet when printing both sides, so sheets = 120 ÷ 2 = 60.",
            "Sheets 60 is more than the 50-sheet rating. The job exceeds the stapler.",
            "Solution: split the job into two sets of 60 pages (30 sheets each), or use another binding method."
          ]
        },
        {
          "t": "example",
          "title": "Pages in a saddle-stitched booklet",
          "steps": [
            "Each sheet folded once gives 4 pages: 2 on the front and 2 on the back.",
            "A booklet of 10 sheets has 10 × 4 = 40 pages.",
            "A 36-page booklet needs 36 ÷ 4 = 9 sheets.",
            "The inner pages stick out further than the outer pages after folding, so thick booklets may be trimmed."
          ]
        },
        {
          "t": "h",
          "text": "Sensors, jams and alignment"
        },
        {
          "t": "p",
          "text": "A finisher uses sensors at the entrance, at the processing tray, at the staple and at the output tray. They detect sheets, paper stack height and open covers. Most faults are jams, dirty or misaligned sensors, worn rollers, a staple jam or a full punch waste box."
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause"
          ],
          "rows": [
            [
              "Staples bent or crooked",
              "Staple cartridge damaged, clincher worn or dirty, or too many sheets"
            ],
            [
              "Staple missing",
              "Cartridge empty, jammed strip or sensor fault"
            ],
            [
              "Sets untidy or edges uneven",
              "Joggers out of adjustment, worn paper rollers or curled paper"
            ],
            [
              "Jam at the finisher entrance",
              "Finisher not docked correctly, entrance sensor or rollers dirty"
            ],
            [
              "Holes in the wrong place",
              "Punch unit alignment or registration sensor out of adjustment"
            ]
          ],
          "caption": "Finisher symptoms"
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Staple units and punch units can injure fingers. Switch off the machine and unplug it before you reach into a finisher. Never press a staple unit manually while your hand is near it. Handle loose staples with care because they are sharp. Never defeat a cover interlock. A finisher may be heavy, so use two people to move or dock it."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Clear a staple jam as the manual describes, usually by removing the cartridge or opening a front cover. Do not pull a jammed strip out with pliers while the unit can move."
        }
      ]
    },
    {
      "id": "m14-l5",
      "title": "Paper handling options",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the paper-handling options on a multifunction product, paper sizes and weights with their calculations, and the effect of humidity on paper. Good paper handling prevents many jams and copy faults, so you must understand both the machine and the paper."
        },
        {
          "t": "h",
          "text": "Feeders, duplex units and trays"
        },
        {
          "t": "ul",
          "items": [
            "An **automatic document feeder** (ADF) takes a stack of originals and moves them one at a time across a scanning glass. It uses pick-up and separation rollers, like a tray. Dirty rollers or a dirty slit glass cause jams and lines.",
            "A **duplex unit** prints both sides of the paper. After the first side is fused, the sheet is turned over, sent back past the drum and printed again. Some machines instead scan both sides of an original in one pass.",
            "A **large-capacity tray** (LCT) holds a very large stack of one paper size. It lifts the stack as paper is used. Check the lift sensor and the paper size setting if it will not feed.",
            "The **bypass tray** (also called manual feed) takes odd sizes, envelopes, labels or thick paper. The user must set the size and type on the panel."
          ]
        },
        {
          "t": "p",
          "text": "Set the paper size and type in the machine to match what is loaded. A wrong setting makes the fuser run at the wrong temperature, or the machine think that a sheet is late and report a jam."
        },
        {
          "t": "h",
          "text": "Paper sizes and weights"
        },
        {
          "t": "p",
          "text": "**Paper weight** is mass per area, in grams per square metre (g/m² or gsm). Standard office paper is often 70 to 80 g/m². Heavy paper may be 160 g/m² or more. Check the maximum weight each tray allows in the service manual."
        },
        {
          "t": "table",
          "head": [
            "Size",
            "Millimetres",
            "Note"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "Twice the area of A4"
            ],
            [
              "A4",
              "210 × 297",
              "Common office size in many countries"
            ],
            [
              "A5",
              "148 × 210",
              "A4 cut in half across the long side"
            ],
            [
              "Letter",
              "215.9 × 279.4",
              "8.5 × 11 inches, used in some countries"
            ]
          ],
          "caption": "Common paper sizes. One inch is 25.4 mm."
        },
        {
          "t": "example",
          "title": "Mass of a sheet and a ream",
          "steps": [
            "Area of A4 = 0.210 m × 0.297 m = 0.06237 m².",
            "For 80 g/m² paper, one sheet = 0.06237 × 80 = 4.99 g, about 5 g.",
            "A ream of 500 sheets = 500 × 4.99 g ≈ 2,495 g, about 2.5 kg.",
            "Check: for 100 g/m² paper, one A4 sheet = 0.06237 × 100 = 6.2 g."
          ]
        },
        {
          "t": "h",
          "text": "Curl and humidity"
        },
        {
          "t": "p",
          "text": "Paper takes up moisture from the air and loses it again, so its size and stiffness change. Damp paper feeds badly, and several sheets can stick together. After the fuser heats it, paper dries on one side and **curls**. A curled sheet can jam in the output or the duplex path."
        },
        {
          "t": "ul",
          "items": [
            "Keep paper in its wrapper until needed and store it flat in a dry place.",
            "Load only what will be used soon, and close the wrapper on the rest.",
            "If the curl is always the same direction, try turning the ream over, as the manual allows.",
            "Fan the sheets before loading and keep the paper guides snug but not tight."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "When paper feed faults appear, check three things before you open the machine: paper type and size settings, paper condition, and whether the stack is loaded flat with guides in the right place."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Rollers and the duplex unit can pinch fingers, and the fuser area is hot. Switch off and unplug the machine and let the fuser cool before you reach into the duplex path. Reams of paper and large-capacity trays are heavy, so lift with a straight back or ask for help."
        }
      ]
    },
    {
      "id": "m14-l6",
      "title": "Peripherals, options and service",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers account-control devices, how to install and configure options, how to use error codes and logs, and how to write a service report for a multifunction product. These tasks come at the end of most service visits, and they decide whether the customer trusts your work."
        },
        {
          "t": "h",
          "text": "Account control devices"
        },
        {
          "t": "p",
          "text": "Some customers need to count or charge for each page. Devices that do this are **card readers**, **key counters**, **coin-operated units** and software account codes. A **card reader** reads a card or tag held against it. A **key counter** is a small counter that must be fitted before the machine will run. A **coin unit** accepts coins and allows a set number of copies."
        },
        {
          "t": "ul",
          "items": [
            "The device usually connects to a dedicated connector or a USB port and needs a setting turned on in the service or administrator menu.",
            "Test it by making a counted copy and checking that the device count and the machine count agree.",
            "If the machine shows that the device is missing, check the connector, the cable and the enable setting.",
            "Coin boxes hold cash. Hand them only to the customer, and record that you did."
          ]
        },
        {
          "t": "h",
          "text": "Installing an option"
        },
        {
          "t": "ol",
          "items": [
            "Read the installation guide for that option and check that it is made for this machine model.",
            "Switch off and unplug the machine, and let hot parts cool.",
            "Fit the option and secure it as the guide says. Connect any cable with the machine off.",
            "Switch on, enable the option in the menu and update firmware if the manual calls for it.",
            "Print a configuration page to confirm that the option is listed.",
            "Run a test job through the option and record the result."
          ]
        },
        {
          "t": "h",
          "text": "Codes and logs"
        },
        {
          "t": "p",
          "text": "Machines show **error codes** or messages when they find a fault. The same code can mean different things on different models, so you must look up each code in the manufacturer's service manual. A code tells you where the machine saw the problem. It does not always say which part is broken. Many machines also keep a **log** that lists recent jams, errors and the counter values at that time."
        },
        {
          "t": "p",
          "text": "Read the log before you start. A jam that always occurs at the same place and counter points to a part or an adjustment. Faults that come and go may point to a connector, heat or an environmental cause. Use the service mode to test parts one at a time, and clear the log only when the manual allows."
        },
        {
          "t": "h",
          "text": "The service report"
        },
        {
          "t": "ul",
          "items": [
            "Date, customer, machine model and serial number, and the total counter reading.",
            "The fault as the customer described it, and what you found.",
            "The cause, what you did, and parts used with their part numbers from the catalogue.",
            "Tests made after the repair, with the result, and any settings you changed.",
            "Anything the customer must do, such as the next maintenance date."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Write the report so that another technician who has never seen the machine can follow what happened. Use facts and readings, not guesses, and never record passwords or customer document content."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Before you hand the machine back, check that all covers and guards are fitted, interlocks work and no loose staples, screws or tools remain inside. Leave the machine and the area around it clean, with no cables across a walkway."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Show the customer the new option working, and print a test page, so they see the result. Note down who you showed."
        }
      ]
    },
    {
      "id": "m14-l7",
      "title": "Shredders and document destruction",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers paper shredders: the machines that destroy confidential papers, how they are rated, and how to find and repair their faults. A **shredder** feeds paper between two cutter shafts that turn towards each other and tear it into strips or small particles."
        },
        {
          "t": "h",
          "text": "Types and security levels"
        },
        {
          "t": "table",
          "head": [
            "Type",
            "Cut",
            "Typical use"
          ],
          "rows": [
            [
              "Strip-cut",
              "Long strips, about 6 mm wide",
              "General paper, low security"
            ],
            [
              "Cross-cut",
              "Small rectangles, about 4 by 40 mm",
              "Most offices, medium security"
            ],
            [
              "Micro-cut",
              "Tiny pieces, about 2 by 15 mm",
              "Confidential records, high security"
            ]
          ],
          "caption": "Sizes are typical. The maker's rating gives the exact size."
        },
        {
          "t": "p",
          "text": "The security level is set by the standard **DIN 66399**, from P-1 (coarse) to P-7 (finest). Strip-cut machines are usually P-2, cross-cut machines P-3 or P-4, and micro-cut machines P-5 or finer. A smaller particle is harder to put back together, but it needs a stronger motor and wears the cutters faster."
        },
        {
          "t": "h",
          "text": "Parts and how it works"
        },
        {
          "t": "ul",
          "items": [
            "**Feed sensor**: an optical or infrared sensor that sees paper in the slot and starts the motor.",
            "**Motor and gear train**: a single-phase motor, often with a start capacitor, drives the gears that turn both cutter shafts.",
            "**Cutter shafts**: two shafts of hardened steel discs that mesh like fingers. They pull the paper in and cut it.",
            "**Reverse and auto-reverse**: the motor runs backwards for a moment to free a jam.",
            "**Thermal cut-out**: a switch that stops the motor when it overheats and resets when it cools.",
            "**Bin and safety switches**: a bin-full sensor, and a switch that stops the machine when the head or door is open."
          ]
        },
        {
          "t": "diagram",
          "name": "shredder-cutters"
        },
        {
          "t": "p",
          "text": "Most shredders have a **duty cycle**, for example 10 minutes of shredding followed by 30 minutes of rest. Running past it trips the thermal cut-out."
        },
        {
          "t": "h",
          "text": "Faults, care and safety"
        },
        {
          "t": "p",
          "text": "Most faults come from the paper, not the machine. Paper clips, staples, thick card and damp paper jam the cutters. Paper dust builds up and fools the sensors. A machine that needs oil runs hot and slow when it is dry."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Unplug the shredder before you reach into the feed slot or lift the head. The cutters can grip a finger, a tie or loose clothing in a moment. A safety switch is never a reason to work with the mains connected."
        },
        {
          "t": "example",
          "title": "How long will a job take?",
          "steps": [
            "A shredder feeds 2.5 metres of paper a minute and takes 8 sheets at a time. An A4 sheet is 0.297 m long.",
            "Time for one pass = 0.297 ÷ 2.5 = 0.119 minutes, about 7 seconds.",
            "A job of 400 sheets needs 400 ÷ 8 = 50 passes, so 50 × 7 = 350 seconds, about 6 minutes.",
            "With a 10-minute duty cycle this job fits. Two jobs one after the other would not, so the motor must rest in between."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Oil the cutters only with the oil or lubricating sheets the maker names. General-purpose spray can clog the cutters and soften the plastic."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A shredder that trips its thermal cut-out has been overworked or is jammed. Check the paper and the duty cycle before you blame the motor."
        }
      ]
    }
  ],
  "practical": {
    "title": "Install a multifunction product on a network, set up scan to folder and send a test fax",
    "objective": "Connect a training multifunction product to a network, set up a scan-to-folder destination, send a test fax between two training machines, and record the work in a short service report.",
    "time": "90 minutes",
    "tools": [
      "Training multifunction product with fax unit, and the service manual or installation guide",
      "Ethernet patch cable and a network switch or router with a free port",
      "Computer on the same network with a shared test folder and a user account made for this exercise",
      "Second fax machine and a training telephone line simulator, or an approved telephone line your instructor provides",
      "Telephone line cord",
      "A few pages of dummy test documents with no real customer information",
      "Notebook or the printed service report form"
    ],
    "safety": [
      "Use only a training unit and dummy documents. Do not use real customer data or real email accounts.",
      "Switch off and unplug the machine before you connect any cable inside or behind a cover. Connect network and telephone cables with the machine off.",
      "Use only a telephone line simulator or an approved training line. Do not connect a training fax to a line of unknown voltage and do not touch bare line conductors.",
      "Do not open covers beyond those the installation guide names. Never defeat an interlock. The fuser may be hot after use, so let it cool.",
      "Two people must lift the machine if it is heavy. Do not leave network cables across a walkway."
    ],
    "steps": [
      "Read the installation guide. Remove packing material and tape as it shows, and check that the machine stands level.",
      "With the machine off and unplugged, connect the Ethernet cable from the machine to the switch. Connect the line cord to the fax line socket on the machine and to the simulator.",
      "Plug in and switch on. Wait for the machine to finish its warm-up and show the home screen.",
      "Print the configuration page from the menu. Write down the IP address, firmware version and installed options.",
      "On the computer, ping the machine IP address and check that replies arrive. If not, check the link lights and the cable.",
      "Open the machine's web page by typing its IP address into a browser. Change the default administrator password and note where the customer will store it.",
      "Set the date, time and time zone. Enter the fax number and the machine name for the fax header.",
      "Create an address book entry for the shared test folder with the host name or IP address, share name, user name and password.",
      "Use the test button for the folder if there is one. Then scan a dummy page to the folder and open the file on the computer to check it.",
      "Send a one-page fax to the second machine. Note the time the call took and whether the received page is clear.",
      "Send a ten-page test fax if the instructor allows and compare the time with a calculation from the page size and line speed.",
      "Print a counter report. Fill in the service report with the settings, tests and results. Do not write the password in it."
    ],
    "checks": [
      "I can find the IP address, firmware version and options on a configuration page.",
      "I can set up a scan-to-folder destination and say what details it needs.",
      "I can send and receive a test fax and judge whether the received page is good.",
      "I can estimate fax transmission time from page size and line speed.",
      "I can explain why I changed the default password and did not record it in the report.",
      "I can name the safety steps I followed when connecting the network and telephone cables."
    ]
  },
  "quiz": [
    {
      "id": "m14-q01",
      "q": "Which statement best describes a multifunction product?",
      "options": [
        "One machine that prints, copies, scans and often faxes from shared parts",
        "A copier that has simply been fitted with a larger paper tray and a stapler",
        "A network printer that can also be used from a smartphone or tablet app",
        "A fax machine that can store incoming pages in memory before it prints them"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m14-l1",
      "explain": "A multifunction product combines several functions on shared parts and one controller. Options such as trays and staplers are add-ons that many machines have, but they do not make the machine multifunction."
    },
    {
      "id": "m14-q02",
      "q": "On a multifunction product, copies and printed pages both show the same dark streak down the page. Where is the fault most likely to be?",
      "options": [
        "In the scanner glass",
        "In the fax unit",
        "In the address book settings",
        "In the print engine"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m14-l1",
      "explain": "A defect that appears on prints as well as copies must be made after the scanner, so it comes from the print engine. A dirty scanner glass would show on copies and scans but not on pages printed from a computer."
    },
    {
      "id": "m14-q03",
      "q": "A customer is returning a leased multifunction product. What must you do about the storage drive?",
      "options": [
        "Erase or encrypt it as the service manual says, and tell the customer",
        "Leave the data in place, since the files are the customer's own property",
        "Take out the drive and keep it in the workshop in case of a later fault",
        "Delete the files with the panel Delete key, which is enough for any model"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m14-l1",
      "explain": "The drive may hold page images, address books and job logs, so the data must be erased or encrypted properly before the machine leaves. Deleting files from a menu may not remove the stored images."
    },
    {
      "id": "m14-q04",
      "q": "You install a multifunction product and the default administrator password is still set. What should you do?",
      "options": [
        "Change it and give the new password only to the customer's administrator",
        "Write it on a label on the machine to help the customer remember it",
        "Leave it as it is so that any technician can log in later",
        "Turn off the web page so that nobody can reach the settings from the network"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m14-l1",
      "explain": "Default passwords are well known, so they must be changed during installation. A label on the machine lets anyone who walks past read it, and turning off the web page would stop the customer from managing the machine."
    },
    {
      "id": "m14-q05",
      "q": "Which connection on a multifunction product carries fax calls?",
      "options": [
        "The Ethernet port",
        "The telephone line socket",
        "The USB host port on the panel",
        "The power inlet"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m14-l1",
      "explain": "A fax unit uses its own telephone line socket with a modem. Ethernet carries network print and scan traffic. The USB host port is for memory sticks, so it does not carry fax calls."
    },
    {
      "id": "m14-q06",
      "q": "A page is compressed to 45,000 bytes and sent at 14,400 bit/s. Ignoring the handshake, how long does the page data take?",
      "options": [
        "25 s",
        "3.1 s",
        "50 s",
        "32 s"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m14-l2",
      "explain": "45,000 × 8 = 360,000 bits, and 360,000 ÷ 14,400 = 25 s. The value 3.1 s forgets to multiply bytes by 8 to get bits."
    },
    {
      "id": "m14-q07",
      "q": "During a fax call the line is noisy and the machines fall back from 14,400 bit/s to 7,200 bit/s. What happens to the transmission time of the same page?",
      "options": [
        "It stays the same because the page data does not change",
        "It becomes shorter because slower signals are easier to detect",
        "It increases by a small amount only",
        "It doubles because the speed is halved"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m14-l2",
      "explain": "Time = bits ÷ speed, and the bits stay the same. Halving the speed doubles the time. The page data is the same size, but each bit now takes twice as long to send."
    },
    {
      "id": "m14-q08",
      "q": "What is the purpose of error correction mode (ECM) in a fax call?",
      "options": [
        "It raises the line speed above the limit that the modems support",
        "It makes the machines skip the handshake to save time at the start",
        "It checks data in blocks and has damaged blocks sent again",
        "It compresses the page so that the data is half the size it was"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m14-l2",
      "explain": "ECM sends data in blocks and the receiver requests a resend if a block arrives damaged, so noise causes delay instead of marks on the page. It does not make the line faster."
    },
    {
      "id": "m14-q09",
      "q": "A fax received at the customer's office has thin horizontal lines across it. The same page copied on the sending machine is clean. What is the most likely cause?",
      "options": [
        "Line noise damaging the data, because ECM is off or not supported",
        "A worn drum in the print engine of the sending machine",
        "An output tray on the receiving machine that has become full",
        "A paper size setting on the sender that does not match the original"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m14-l2",
      "explain": "The clean copy shows that the sender scans well. Lines that appear only on the received fax point to data damaged in transit. A worn drum on the sender would make marks on its copy as well."
    },
    {
      "id": "m14-q10",
      "q": "A machine behind a VoIP telephone system often drops fax calls halfway through. Which action is most reasonable to try first?",
      "options": [
        "Replace the drum in the print engine of the machine",
        "Lower the fax speed and check the ECM setting",
        "Fit a longer line cord to improve the signal strength",
        "Increase the paper tray capacity of the machine to the maximum"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m14-l2",
      "explain": "VoIP was designed for voice and can disturb fax signals, so a lower speed and the right ECM setting often help. A drum or a tray has no effect on the call, and a longer cord adds nothing to a digital voice link."
    },
    {
      "id": "m14-q11",
      "q": "What does a PBX do in a fax fault investigation?",
      "options": [
        "It prints the received fax pages on the machine at the receiving end",
        "It stores the fax number of the customer in a directory of numbers",
        "It converts the bits from the page into bytes for the fax modem",
        "It is the office exchange; it may need a prefix and can disturb faxes"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m14-l2",
      "explain": "A PBX is the office telephone exchange. Fax machines behind one often need a prefix to reach an outside line, and the exchange may affect the signals. It does not print or store faxes."
    },
    {
      "id": "m14-q12",
      "q": "A ten-page document is faxed. Each page compresses to 24,000 bytes and the line speed is 9,600 bit/s. Ignoring the handshake, how long does the whole transmission take?",
      "options": [
        "20 s",
        "25 s",
        "200 s",
        "120 s"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m14-l2",
      "explain": "One page is 24,000 × 8 = 192,000 bits, and 192,000 ÷ 9,600 = 20 s. Ten pages take 200 s. The value 20 s is the time for one page only."
    },
    {
      "id": "m14-q13",
      "q": "Which step in a fax call lets the two machines agree on a speed the line can carry?",
      "options": [
        "The final confirmation after the last page",
        "The handshake and training signal at the start of the call",
        "The scanning of the page at the sender",
        "The printing of the page at the receiver"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m14-l2",
      "explain": "The machines exchange capabilities and test the line before the page data is sent, then agree on a speed. The confirmation comes after the data, so it cannot set the speed for that data."
    },
    {
      "id": "m14-q14",
      "q": "Which protocol does a multifunction product use to hand a scanned email to a mail server?",
      "options": [
        "SMTP",
        "SNMP",
        "DHCP",
        "DNS"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m14-l3",
      "explain": "SMTP is the standard protocol for sending email. DNS turns names into addresses and DHCP hands out addresses, so neither sends messages. SNMP is used for monitoring devices."
    },
    {
      "id": "m14-q15",
      "q": "Which set of details does a scan to folder destination need?",
      "options": [
        "Fax number, line speed, ECM setting and the dial prefix for the exchange",
        "Toner colour, paper size, copy ratio and the default number of copies",
        "Host name or IP address, share name, and an account with write permission",
        "Mail server name, port, sender address and the attachment size limit"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m14-l3",
      "explain": "Writing to a shared folder needs the location of the share and an account allowed to write to it. The mail server details are for scan to email, so they do not apply here."
    },
    {
      "id": "m14-q16",
      "q": "Scan to email suddenly stops working after the customer changed their email password. The machine still has the old one saved. What do you expect to see?",
      "options": [
        "The mail server cannot be found on the network",
        "Scanned images come out blank",
        "The machine's IP address changes",
        "The server rejects the sign-in from the machine"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m14-l3",
      "explain": "The machine signs in with the saved password, and the server refuses it because it has changed. The server can still be reached, so the network is working. The scan image itself is unaffected."
    },
    {
      "id": "m14-q17",
      "q": "A scan to folder test fails. A computer on the same network can open the shared folder using the same user name and password. What is the best conclusion?",
      "options": [
        "The machine's saved entry for that destination is wrong",
        "The file server is switched off or cut off from the network",
        "The user account has no rights on the shared folder at all",
        "The network cable on the working computer is faulty or loose"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m14-l3",
      "explain": "The computer shows that the server, folder and account all work, so the machine's entry for the destination is the likely fault, such as a wrong share name or path. A server problem would also stop the computer."
    },
    {
      "id": "m14-q18",
      "q": "A colour A4 scan at 300 dpi is about 2,480 × 3,508 pixels. If stored uncompressed at 3 bytes per pixel, about how large is one page?",
      "options": [
        "About 8.7 MB",
        "About 26 MB",
        "About 2.6 MB",
        "About 260 MB"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m14-l3",
      "explain": "2,480 × 3,508 is about 8.7 million pixels, and × 3 bytes gives about 26 million bytes. The figure 8.7 MB counts only one byte per pixel, which is a grey scan, not colour."
    },
    {
      "id": "m14-q19",
      "q": "A scan of 20 colour pages fails to send by email, while a 2-page scan is delivered. Which change is most likely to help?",
      "options": [
        "Replace the exposure lamp in the scanner and recalibrate it",
        "Change the machine's IP address to one in a different range",
        "Lower the resolution or send the pages in smaller batches",
        "Switch off the address book and enter the address by hand"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m14-l3",
      "explain": "The pattern suggests the message is larger than the mail server limit. Smaller files fix that. The lamp, address and address book do not change the size of the message."
    },
    {
      "id": "m14-q20",
      "q": "What is the purpose of authentication on a multifunction product?",
      "options": [
        "To make scans smaller",
        "To raise the speed of the network connection",
        "To check the paper type before a job starts",
        "To identify the user and control access and accounting"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m14-l3",
      "explain": "Authentication means the user signs in with a code, card or account so the machine knows who is using it. It has no effect on file size, network speed or paper type."
    },
    {
      "id": "m14-q21",
      "q": "What does offset stacking do?",
      "options": [
        "It folds every set in half before the sets reach the output tray",
        "It shifts each set sideways so the sets are easy to separate",
        "It punches holes along the edge of every sheet in the set",
        "It sorts the sheets into page order inside the scanner unit"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m14-l4",
      "explain": "Offset stacking shifts each set a few millimetres, so the sets are easy to separate. Folding is done by a booklet maker, and punching is done by the punch unit."
    },
    {
      "id": "m14-q22",
      "q": "A stapler is rated for 50 sheets. A customer prints a 120-page document on both sides of the paper and wants it stapled. What is the situation?",
      "options": [
        "The set is 60 sheets, which is over the rating, so it must be split",
        "The set is 120 sheets, which is far over the rating",
        "The set is 30 sheets, so it is well within the rating",
        "The set is 60 sheets, which is within the rating if stapled twice"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m14-l4",
      "explain": "Printing on both sides puts two pages on each sheet, so 120 pages is 60 sheets, which is more than 50. Stapling twice does not change the thickness the unit must pierce."
    },
    {
      "id": "m14-q23",
      "q": "How many sheets are needed for a saddle-stitched booklet of 36 pages?",
      "options": [
        "36",
        "18",
        "12",
        "9"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m14-l4",
      "explain": "Each sheet folded once gives 4 pages, so 36 ÷ 4 = 9 sheets. The value 18 would be correct only if each sheet gave just 2 pages, which is not the case for a folded sheet."
    },
    {
      "id": "m14-q24",
      "q": "Staples in finished sets are crooked and the edges of the sets are uneven. Which part should you check first?",
      "options": [
        "The fax modem and the telephone line connector",
        "The scanner lamp and the document glass above it",
        "The jogger fences that tap each set into line",
        "The punch waste box and its full-bin sensor"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m14-l4",
      "explain": "The joggers line up the edges before the staple fires, so wrong positions give uneven sets and crooked staples. A full punch waste box would cause a punch fault, not poor alignment of staples."
    },
    {
      "id": "m14-q25",
      "q": "What is a staple jam safety rule in a finisher?",
      "options": [
        "Switch off and unplug first, and never put fingers into the unit",
        "Press the staple button by hand to push the jam out of the unit",
        "Pull the jammed strip out with pliers while the machine is on",
        "Hold the interlock switch down so that you can see the jam clearly"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m14-l4",
      "explain": "A staple unit can drive a staple or move without warning, so power must be off first. Holding down an interlock defeats a safety device and is never allowed."
    },
    {
      "id": "m14-q26",
      "q": "What does the clincher in a staple unit do?",
      "options": [
        "It loads the next staple into the cartridge",
        "It counts the sheets arriving on the tray",
        "It bends the legs of the staple over on the far side of the set",
        "It cuts the paper along the fold"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m14-l4",
      "explain": "The motor drives the staple through the paper and the clincher folds its legs flat to hold the set. Sheet counting is done by sensors, and cutting along a fold is a trimmer function."
    },
    {
      "id": "m14-q27",
      "q": "What is the mass of one A4 sheet of 80 g/m² paper? An A4 sheet measures 0.210 m × 0.297 m.",
      "options": [
        "About 2.5 g",
        "About 5 g",
        "About 10 g",
        "About 80 g"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m14-l5",
      "explain": "The area is 0.06237 m², and × 80 g/m² gives about 4.99 g. The value 10 g is about the mass of an A3 sheet of the same paper, which has twice the area."
    },
    {
      "id": "m14-q28",
      "q": "What are the dimensions of A3 paper?",
      "options": [
        "210 × 297 mm",
        "148 × 210 mm",
        "215.9 × 279.4 mm",
        "297 × 420 mm"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m14-l5",
      "explain": "A3 is 297 × 420 mm, twice the area of A4. The size 210 × 297 mm is A4 and 148 × 210 mm is A5. The size 215.9 × 279.4 mm is Letter."
    },
    {
      "id": "m14-q29",
      "q": "A technician loads Letter paper in a tray set to A4. Letter is 215.9 × 279.4 mm and A4 is 210 × 297 mm. What problem is likely?",
      "options": [
        "A size mismatch or jam, because the sheet is about 18 mm shorter",
        "None, because the sheets are so close in size that it does not matter",
        "The fax function will fail to send until the tray size is reset",
        "The stapler will be disabled for every job until the tray is reset"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m14-l5",
      "explain": "The length is 297 − 279.4 = 17.6 mm shorter and the width is 5.9 mm wider, which the machine can detect as a size or timing fault. A small difference does not mean the machine ignores it."
    },
    {
      "id": "m14-q30",
      "q": "Why is paper in a damp store room a problem for a copier?",
      "options": [
        "Damp paper is heavier, so the tray always shows empty",
        "Damp paper can stick together, feed badly and curl after fusing",
        "Damp paper makes the scanner lamp brighter",
        "Damp paper cannot be used for duplex only"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m14-l5",
      "explain": "Paper takes up moisture, which changes its stiffness and makes sheets stick, and it curls after heating. The extra weight is too small to affect tray sensors, and the problem is not limited to duplex."
    },
    {
      "id": "m14-q31",
      "q": "What does a duplex unit do?",
      "options": [
        "It scans two originals at the same time on a stack",
        "It adds a second cassette for a different size",
        "It turns the sheet over so that the second side can be printed",
        "It shifts the output sets from side to side"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m14-l5",
      "explain": "After the first side is fused, the sheet is turned over and sent back for the second side. Offset shifting is a finisher job, and a second cassette is a paper tray option."
    },
    {
      "id": "m14-q32",
      "q": "After you fit a new card reader to a machine, the machine says that the device is not found. What should you check first?",
      "options": [
        "The paper size in tray 1",
        "The number of copies in the log",
        "The staple cartridge",
        "The connector, cable and the setting that enables the device"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m14-l6",
      "explain": "A newly fitted device needs a good connection and must be enabled in the menu. Paper size and staples have nothing to do with the card reader, and the log shows past events rather than fixing the device."
    },
    {
      "id": "m14-q33",
      "q": "Why must you look up an error code in the service manual for the specific machine?",
      "options": [
        "The same code can mean different things on different models",
        "All codes are secret and cannot be displayed",
        "Codes are the same on all machines, but the manual is required by law",
        "Codes only appear on machines that have no panel"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m14-l6",
      "explain": "Manufacturers set their own codes, so a number can have a different meaning on another model. The manual for the model in front of you gives the right meaning."
    },
    {
      "id": "m14-q34",
      "q": "A machine log shows a jam at the same place every 500 copies or so. What does this suggest?",
      "options": [
        "A random fault that you can ignore",
        "A part or adjustment at that place that wears or shifts with use",
        "A fault in the customer's network",
        "A problem in the telephone line"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m14-l6",
      "explain": "A fault that repeats at the same place and a steady counter interval points to a part or setting there, for example a roller wearing. A network or telephone line problem would not follow the copy count."
    },
    {
      "id": "m14-q35",
      "q": "Which item should NOT be written in a service report?",
      "options": [
        "The total counter reading",
        "The parts that were replaced",
        "The administrator password of the machine",
        "The tests done after the repair"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m14-l6",
      "explain": "Reports may be read by many people, so passwords must stay out of them. Counter readings, parts and tests are exactly the facts a report should record."
    },
    {
      "id": "m14-q36",
      "q": "What is the correct order when installing an option?",
      "options": [
        "Enable it in the menu, fit it, switch off the machine, then print a test page",
        "Switch off and unplug, fit the option, switch on, enable it, then test",
        "Fit it while the machine is on so the machine detects it, then switch off",
        "Switch on, test the machine, and only then read the installation guide"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m14-l6",
      "explain": "Fitting an option with power on is unsafe and can damage boards, so power is off first. Enabling and testing come after fitting, so any order that enables first cannot be right."
    },
    {
      "id": "m14-q37",
      "q": "What does the security level of a shredder describe?",
      "options": [
        "How fast the motor turns the cutter shafts",
        "How many sheets the machine takes in one pass",
        "How loud the machine is while it is shredding",
        "How small the pieces are that the paper is cut into"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m14-l7",
      "explain": "The security level, for example P-4 or P-5 under DIN 66399, gives the size of the pieces left after shredding. Smaller pieces are harder to put back together. Speed, capacity and noise are separate specifications."
    },
    {
      "id": "m14-q38",
      "q": "A shredder stops in the middle of a big job and starts again by itself after half an hour. What is the most likely reason?",
      "options": [
        "The feed sensor has failed and cannot see the paper",
        "The thermal cut-out tripped because the duty cycle was exceeded",
        "The bin-full switch is stuck in the open position",
        "The cutter shafts have worn out and need to be replaced"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m14-l7",
      "explain": "A thermal cut-out stops the motor when it overheats and resets when it cools. A machine that restarts itself after a rest was overworked. A failed sensor or a worn cutter would not cure itself after waiting."
    },
    {
      "id": "m14-q39",
      "q": "A shredder feeds 3 metres of paper a minute and takes 10 A4 sheets at a time. An A4 sheet is 0.297 m long. About how long will 300 sheets take?",
      "options": [
        "About 1 minute",
        "About 2 minutes",
        "About 3 minutes",
        "About 9 minutes"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m14-l7",
      "explain": "One pass takes 0.297 ÷ 3 = 0.099 minutes, about 6 seconds. 300 sheets at 10 per pass is 30 passes, so 30 × 6 = 180 seconds, about 3 minutes. Check the result against the duty cycle."
    },
    {
      "id": "m14-q40",
      "q": "Why must you unplug a shredder before you clear a jam from the feed slot?",
      "options": [
        "The sensor can start the cutters and grip your fingers",
        "The paper dust inside can ignite if it is touched",
        "The thermal cut-out is reset only by pulling the plug",
        "The motor keeps a high voltage even when it is off"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m14-l7",
      "explain": "The feed sensor starts the motor when it sees paper or a hand, and the cutters can grip a finger in a moment. Removing the plug is the only way to be sure the machine cannot start while you work."
    }
  ],
  "cards": [
    {
      "id": "m14-c01",
      "front": "Multifunction product (MFP)",
      "back": "A machine that combines printing, copying, scanning and often faxing, sharing one engine and one controller.",
      "lesson": "m14-l1"
    },
    {
      "id": "m14-c02",
      "front": "Controller in an MFP",
      "back": "The computer inside the machine: processor, memory, storage and network ports. It runs jobs and tells the engine what to do.",
      "lesson": "m14-l1"
    },
    {
      "id": "m14-c03",
      "front": "Name three kinds of data an MFP storage drive may hold.",
      "back": "Page images from copies and scans, saved print jobs, fax pages, the address book, user accounts and job logs.",
      "lesson": "m14-l1"
    },
    {
      "id": "m14-c04",
      "front": "First thing to change on a newly installed MFP",
      "back": "The default administrator password.",
      "lesson": "m14-l1"
    },
    {
      "id": "m14-c05",
      "front": "Copies and prints both show a streak. Where is the fault?",
      "back": "In the print engine, because both go through it. A scan-only streak points to the scanner.",
      "lesson": "m14-l1"
    },
    {
      "id": "m14-c06",
      "front": "Formula for fax transmission time",
      "back": "Time (s) = bits ÷ line speed (bit/s). Bits = bytes × 8.",
      "lesson": "m14-l2"
    },
    {
      "id": "m14-c07",
      "front": "Time to send 36,000 bytes at 9,600 bit/s",
      "back": "36,000 × 8 = 288,000 bits, and 288,000 ÷ 9,600 = 30 s, not counting the handshake.",
      "lesson": "m14-l2"
    },
    {
      "id": "m14-c08",
      "front": "What is the fax handshake?",
      "back": "Short messages at the start of a call in which the two machines state their abilities and agree on settings.",
      "lesson": "m14-l2"
    },
    {
      "id": "m14-c09",
      "front": "Fall back (fax)",
      "back": "The machines drop to a lower line speed when the line is noisy.",
      "lesson": "m14-l2"
    },
    {
      "id": "m14-c10",
      "front": "Error correction mode (ECM)",
      "back": "Data is sent in blocks and the receiver asks for damaged blocks to be sent again.",
      "lesson": "m14-l2"
    },
    {
      "id": "m14-c11",
      "front": "Fax works on a direct line but fails behind a VoIP system. Likely cause?",
      "back": "VoIP delay and compression disturb fax signals. Try a lower speed and ECM settings, or ask the provider for a fax-friendly line.",
      "lesson": "m14-l2"
    },
    {
      "id": "m14-c12",
      "front": "What is a PBX?",
      "back": "A private telephone exchange inside an organisation. It may need a prefix for outside lines.",
      "lesson": "m14-l2"
    },
    {
      "id": "m14-c13",
      "front": "What does SMTP do in scan to email?",
      "back": "It is the protocol the machine uses to hand the email message to the mail server.",
      "lesson": "m14-l3"
    },
    {
      "id": "m14-c14",
      "front": "Details needed for scan to folder (SMB)",
      "back": "Host name or IP address, share name, folder path, and a user name and password that can write to it.",
      "lesson": "m14-l3"
    },
    {
      "id": "m14-c15",
      "front": "Address book (MFP)",
      "back": "A stored list of email addresses and folder destinations, so users do not type them each time.",
      "lesson": "m14-l3"
    },
    {
      "id": "m14-c16",
      "front": "Authentication (MFP)",
      "back": "The user signs in with a code, card or account so the machine knows who is using it.",
      "lesson": "m14-l3"
    },
    {
      "id": "m14-c17",
      "front": "Large scan fails to email but small scans work. Likely cause?",
      "back": "The message is over the mail server size limit. Lower the resolution, use grey or black and white, or split the job.",
      "lesson": "m14-l3"
    },
    {
      "id": "m14-c18",
      "front": "Offset stacking",
      "back": "Each set is moved a few millimetres sideways from the previous set, so the sets are easy to separate.",
      "lesson": "m14-l4"
    },
    {
      "id": "m14-c19",
      "front": "What do the joggers do in a finisher?",
      "back": "They tap the sheets into line against a stop, so the edges are even before stapling.",
      "lesson": "m14-l4"
    },
    {
      "id": "m14-c20",
      "front": "Clincher",
      "back": "The part of a staple unit that bends the staple legs over on the far side of the set.",
      "lesson": "m14-l4"
    },
    {
      "id": "m14-c21",
      "front": "Pages in a saddle-stitched booklet",
      "back": "Pages = sheets × 4, because each folded sheet gives 4 pages.",
      "lesson": "m14-l4"
    },
    {
      "id": "m14-c22",
      "front": "Safety rule for any finisher jam",
      "back": "Switch off and unplug first. Keep fingers out of staple, punch and fold units. Never defeat an interlock.",
      "lesson": "m14-l4"
    },
    {
      "id": "m14-c23",
      "front": "Mass of one A4 sheet of 80 g/m² paper",
      "back": "0.06237 m² × 80 g/m² ≈ 5 g. A ream of 500 sheets is about 2.5 kg.",
      "lesson": "m14-l5"
    },
    {
      "id": "m14-c24",
      "front": "Size of A4, A3 and A5 in mm",
      "back": "A4: 210 × 297. A3: 297 × 420. A5: 148 × 210.",
      "lesson": "m14-l5"
    },
    {
      "id": "m14-c25",
      "front": "Duplex unit",
      "back": "A paper path that turns the sheet over after the first side is printed, so the second side can be printed.",
      "lesson": "m14-l5"
    },
    {
      "id": "m14-c26",
      "front": "Paper curls and sticks together. What is a likely cause?",
      "back": "Paper has taken up moisture or has been stored badly. Keep paper wrapped, flat and dry.",
      "lesson": "m14-l5"
    },
    {
      "id": "m14-c27",
      "front": "Key counter or card reader",
      "back": "An account-control device that must be fitted or used before the machine will make copies, so copies can be counted.",
      "lesson": "m14-l6"
    },
    {
      "id": "m14-c28",
      "front": "What should a service report contain?",
      "back": "Machine and counter, fault, cause, action, parts, tests and results, and anything the customer must do.",
      "lesson": "m14-l6"
    },
    {
      "id": "m14-c29",
      "front": "Shredder cutter shafts",
      "back": "Two shafts of hardened steel discs that turn towards each other, mesh like fingers and tear the paper into strips or particles.",
      "lesson": "m14-l7"
    },
    {
      "id": "m14-c30",
      "front": "Strip-cut, cross-cut and micro-cut",
      "back": "Strips about 6 mm wide, small rectangles about 4 by 40 mm, and tiny pieces about 2 by 15 mm. Each step is harder to put back together.",
      "lesson": "m14-l7"
    },
    {
      "id": "m14-c31",
      "front": "What is DIN 66399?",
      "back": "The standard that rates shredder security from P-1 (coarse) to P-7 (finest), by the size of the pieces left.",
      "lesson": "m14-l7"
    },
    {
      "id": "m14-c32",
      "front": "Shredder duty cycle",
      "back": "How long the machine may run before it must rest, for example 10 minutes on and 30 off. Going over it trips the thermal cut-out.",
      "lesson": "m14-l7"
    },
    {
      "id": "m14-c33",
      "front": "Why does a shredder auto-reverse?",
      "back": "The motor runs backwards for a moment to push paper back out of a jam, so the user can remove it without opening the machine.",
      "lesson": "m14-l7"
    }
  ]
});

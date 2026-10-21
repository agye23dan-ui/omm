OMM.registerModule({
  "id": "m10",
  "summary": "Explain how IP networks and telephone links work, wire and test cables, set up network printing, scanning and fax links, and find network faults with simple tools and a clear method.",
  "outcomes": [
    "Explain the roles of IP addresses, subnet masks, MAC addresses, DHCP and DNS on a local network.",
    "Calculate the network address, broadcast address and number of usable hosts for a simple subnet.",
    "Describe the jobs of a switch, router, access point and modem, and compare star, bus, ring and mesh layouts.",
    "Wire an RJ45 plug to the T568B or T568A standard and test a patch cable.",
    "Describe how analogue telephone lines carry fax, and explain how a PBX or VoIP system can disturb a fax call.",
    "Use ping, address checks, link lights and a cable tester to find a fault between a machine and the network."
  ],
  "cheatsheet": [
    "Usable hosts = 2 to the power of host bits, minus 2. A /24 network has 254 usable addresses.",
    "Private IPv4 ranges: 10.x.x.x, 172.16.x.x to 172.31.x.x, 192.168.x.x.",
    "An address starting 169.254 means the device asked for DHCP and got no answer.",
    "T568B: white/orange, orange, white/green, blue, white/blue, green, white/brown, brown.",
    "Twisted-pair Ethernet: 100 m maximum channel. Fast Ethernet uses pins 1, 2, 3 and 6.",
    "Full mesh links = n × (n − 1) ÷ 2. Six devices need 15 links.",
    "Common ports: 9100 raw print, 631 IPP, 445 SMB, 161 SNMP, 25 or 587 SMTP, 53 DNS.",
    "An analogue phone line is about 48 V DC when idle. Ringing is higher AC and can shock you.",
    "Test in order: link light, cable, own IP address, gateway, target by address, target by name."
  ],
  "lessons": [
    {
      "id": "m10-l1",
      "title": "Network fundamentals",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains the basic ideas of a computer network: how devices are addressed and how they get their addresses. Almost every copier, printer and multifunction product you install is a network device, so you need these ideas every working day."
        },
        {
          "t": "h",
          "text": "Networks and their size"
        },
        {
          "t": "p",
          "text": "A **LAN** (local area network) joins devices in one building or one office. A **WAN** (wide area network) joins LANs over long distances, for example through an internet provider. A printer and a PC in the same office are on the same LAN."
        },
        {
          "t": "p",
          "text": "A **client** asks for a service, such as a PC that wants to print. A **server** supplies it, such as a print server or mail server. A copier can be both: a server when users send it jobs, and a client when it sends a scan to a mail server."
        },
        {
          "t": "h",
          "text": "Addresses"
        },
        {
          "t": "p",
          "text": "An **IP address** identifies a device on a network. An IPv4 address is four numbers from 0 to 255 separated by dots, such as `192.168.1.20`. It is 32 bits long. A **MAC address** is a different number, fixed in the hardware when it is made. It has 48 bits, written as 12 hexadecimal digits, and identifies the hardware on the local network. The IP address says where the device sits in the network and can be changed."
        },
        {
          "t": "p",
          "text": "The **subnet mask** shows which part of an IP address names the network and which part names the device. Where the mask has 1 bits, the address is network. Where it has 0 bits, the address is host. The **CIDR** short form counts the 1 bits: `255.255.255.0` has 24 of them, so it is written `/24`."
        },
        {
          "t": "formula",
          "text": "usable hosts = 2^h − 2",
          "caption": "h = number of host bits (0 bits in the mask). Subtract the network and broadcast addresses."
        },
        {
          "t": "table",
          "head": [
            "CIDR",
            "Subnet mask",
            "Addresses",
            "Usable hosts"
          ],
          "rows": [
            [
              "/24",
              "255.255.255.0",
              "256",
              "254"
            ],
            [
              "/25",
              "255.255.255.128",
              "128",
              "126"
            ],
            [
              "/26",
              "255.255.255.192",
              "64",
              "62"
            ],
            [
              "/27",
              "255.255.255.224",
              "32",
              "30"
            ],
            [
              "/28",
              "255.255.255.240",
              "16",
              "14"
            ],
            [
              "/30",
              "255.255.255.252",
              "4",
              "2"
            ]
          ],
          "caption": "Common masks. Each step adds one bit to the network part and halves the size."
        },
        {
          "t": "example",
          "title": "Which devices can talk without a router?",
          "steps": [
            "A printer has the address `192.168.1.130` and the mask `255.255.255.192`.",
            "In binary, 192 is `11000000`. Two bits of the last number belong to the network, so the mask is /26.",
            "Block size = 256 − 192 = 64. The blocks start at 0, 64, 128 and 192.",
            "The number 130 falls in the block 128 to 191. Network address: `192.168.1.128`. Broadcast address: `192.168.1.191`.",
            "Usable addresses are `192.168.1.129` to `192.168.1.190`. That is 62 addresses, which matches 2^6 − 2.",
            "A PC at `192.168.1.150` is in the same block and reaches the printer directly. A PC at `192.168.1.100` is in the block 64 to 127 and needs a router."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Two devices talk directly only when their addresses are in the same subnet. A wrong mask on one device makes it look for a router it does not need, or miss one it does."
        },
        {
          "t": "h",
          "text": "Getting an address"
        },
        {
          "t": "p",
          "text": "**DHCP** (Dynamic Host Configuration Protocol) is a service, usually in the router, that gives each device an address, a mask, a gateway and a DNS server for a set time called a **lease**. A **static** address is typed in by hand. An address starting `169.254` usually means the device is connected but cannot reach a DHCP server."
        },
        {
          "t": "p",
          "text": "**DNS** (Domain Name System) turns a name such as a mail server name into an IP address. The **default gateway** is the router address a device uses to reach other networks. Private ranges are used inside offices: `10.x.x.x`, `172.16.x.x` to `172.31.x.x` and `192.168.x.x`."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Give a shared printer a static address outside the DHCP range, or a reservation in the router. If its address changes, every PC that prints to it stops working."
        },
        {
          "t": "h",
          "text": "Layers in simple terms"
        },
        {
          "t": "p",
          "text": "Network software works in layers. The link layer moves bits over cable or radio. The internet layer (IP) moves packets between networks. The transport layer (TCP or UDP) uses a **port** number to reach the right program. The application layer holds printing, mail and web services. When you test a network, work upward through these layers."
        },
        {
          "t": "diagram",
          "name": "network-layers"
        }
      ]
    },
    {
      "id": "m10-l2",
      "title": "Network hardware and topologies",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the devices that make a network work and the four common ways of laying a network out. Knowing what each box does tells you where to look when a machine cannot be reached."
        },
        {
          "t": "h",
          "text": "The main devices"
        },
        {
          "t": "ul",
          "items": [
            "A **switch** joins devices in one LAN. It learns the MAC address behind each port and sends data only to the port that needs it.",
            "A **router** joins different networks, for example the office LAN and the internet. It reads IP addresses and chooses where to send each packet.",
            "An **access point** gives wireless devices a connection to the wired LAN. Wi-Fi networks are named by an **SSID**.",
            "A **modem** converts between the signals of the provider line and the digital signals of the network. Many offices use one box that combines a modem, router, switch and access point."
          ]
        },
        {
          "t": "p",
          "text": "An old **hub** repeats every signal to every port. It is slower and less private than a switch, but you may still meet one. A **firewall** filters traffic by rule. It is often built into the router."
        },
        {
          "t": "h",
          "text": "Topologies"
        },
        {
          "t": "p",
          "text": "A **topology** is the layout of the links between devices. The diagram shows the four basic layouts."
        },
        {
          "t": "diagram",
          "name": "network-topologies"
        },
        {
          "t": "table",
          "head": [
            "Topology",
            "Layout",
            "If one cable fails",
            "Notes"
          ],
          "rows": [
            [
              "Star",
              "Every device has its own cable to a central switch",
              "Only that device is cut off",
              "The common office layout. The switch is one point of failure."
            ],
            [
              "Bus",
              "All devices share one backbone cable",
              "The backbone splits in two",
              "Old coaxial networks. Rare now."
            ],
            [
              "Ring",
              "Each device connects to two neighbours in a loop",
              "Some designs keep working the other way round",
              "Seen in some industrial and older networks."
            ],
            [
              "Mesh",
              "Devices have several links to each other",
              "Traffic uses another path",
              "Robust but needs more cable and ports."
            ]
          ],
          "caption": "The four basic topologies compared"
        },
        {
          "t": "p",
          "text": "In a **full mesh**, every device is linked to every other device. For n devices the number of links is n × (n − 1) ÷ 2. The number rises quickly."
        },
        {
          "t": "example",
          "title": "Links in a full mesh",
          "steps": [
            "Take 4 devices. Links = 4 × 3 ÷ 2 = 6.",
            "Take 6 devices. Links = 6 × 5 ÷ 2 = 15.",
            "Going from 4 to 6 devices adds 2 devices, but the links rise from 6 to 15. This is why most offices use a star layout and keep full mesh only for a few important links."
          ]
        },
        {
          "t": "h",
          "text": "Wired or wireless"
        },
        {
          "t": "p",
          "text": "Wi-Fi is convenient, but walls, metal cabinets and other networks weaken it. The 2.4 GHz band usually reaches farther at a lower speed. The 5 GHz band usually gives higher speed over a shorter range. A copier is heavy and rarely moves, so a cable is normally the better choice for it. Use Wi-Fi when a cable cannot be run, and keep the machine close to an access point."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "When a machine is unreachable, find out what it plugs into. Follow the cable to the switch and check the port light. Then check whether other devices on the same switch work. This quickly separates a machine fault from a switch fault."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Switch = connects devices inside one network. Router = connects different networks. Access point = adds wireless to a wired network. Modem = links to the provider line."
        }
      ]
    },
    {
      "id": "m10-l3",
      "title": "Cabling and connectors",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the cables and plugs you will wire and test: twisted-pair Ethernet, RJ45 connectors, fibre, USB and serial links. A cable made badly can pass a simple check and still cause slow or unreliable printing."
        },
        {
          "t": "h",
          "text": "Twisted-pair cable"
        },
        {
          "t": "p",
          "text": "**Twisted-pair** cable has four pairs of copper wires, twisted along their length. The twisting cancels interference. Cables are sold in **categories**. Cat5e supports 1 Gb/s. Cat6 also supports 1 Gb/s and is built to tighter limits. Cat6a supports 10 Gb/s over the full distance. Higher categories cost more and are stiffer. The maximum length of a copper link is 100 m, including patch cords. Check the equipment documentation for the category it needs."
        },
        {
          "t": "p",
          "text": "An **RJ45** plug has eight contacts, numbered 1 to 8. Hold the plug with the clip underneath and the contacts facing you, cable end away from you. Pin 1 is on the left. Two standards define the colour order."
        },
        {
          "t": "table",
          "head": [
            "Pin",
            "T568B",
            "T568A"
          ],
          "rows": [
            [
              "1",
              "white/orange",
              "white/green"
            ],
            [
              "2",
              "orange",
              "green"
            ],
            [
              "3",
              "white/green",
              "white/orange"
            ],
            [
              "4",
              "blue",
              "blue"
            ],
            [
              "5",
              "white/blue",
              "white/blue"
            ],
            [
              "6",
              "green",
              "orange"
            ],
            [
              "7",
              "white/brown",
              "white/brown"
            ],
            [
              "8",
              "brown",
              "brown"
            ]
          ],
          "caption": "Wire colour order for the two RJ45 standards"
        },
        {
          "t": "p",
          "text": "A **straight-through** cable has the same standard at both ends. Use it to connect a machine to a switch. A **crossover** cable has T568A at one end and T568B at the other. It joins two devices directly. Most modern ports sense this and adjust, so you rarely need a crossover cable now. Fast Ethernet (10 and 100 Mb/s) uses only pins 1, 2, 3 and 6. Gigabit uses all eight."
        },
        {
          "t": "h",
          "text": "Making a patch cable"
        },
        {
          "t": "ol",
          "items": [
            "Strip about 25 mm of the outer jacket. Do not cut into the wire insulation.",
            "Untwist the pairs only as far as needed, then arrange the wires in the colour order.",
            "Flatten them side by side and trim them square, leaving about 13 mm of bare length.",
            "Push the wires into the plug until you see every copper end at the tip. The jacket must reach inside under the strain relief.",
            "Crimp with the correct crimping tool, then test the cable."
          ]
        },
        {
          "t": "diagram",
          "name": "rj45-t568"
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Do not untwist more than about 13 mm at the plug. More untwisting raises crosstalk, which is interference between pairs. A wire map that passes can still hide a **split pair**: wires paired wrongly, such as using pins 3 and 4 as one pair. Follow the colour order exactly."
        },
        {
          "t": "h",
          "text": "Fibre, USB and serial"
        },
        {
          "t": "p",
          "text": "**Optical fibre** carries light in a glass strand. It is not affected by electrical interference and gives no electrical connection between buildings, so it suits long runs. Single-mode fibre is used for long distances and multimode for shorter ones. Do not bend it tighter than the stated minimum radius. Fibre is usually a pair, one for each direction."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never look into the end of a fibre or into a port while equipment is powered. The light is usually invisible and can damage your eyes. Fit dust caps when a fibre is not connected."
        },
        {
          "t": "p",
          "text": "**USB** connects printers and scanners directly to a PC. It has a limited cable length, about 5 m for USB 2.0, so use a good-quality cable. A **serial** link, such as RS-232, sends bits one at a time. Both ends must agree on speed (baud), data bits, parity and stop bits. A common setting is 9600 baud, 8 data bits, no parity, 1 stop bit."
        }
      ]
    },
    {
      "id": "m10-l4",
      "title": "Telephone lines and fax links",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains how an analogue telephone line works and why fax machines are sensitive to the line they use. Fax is older than most networks, but many offices still depend on it, and PBX and VoIP systems often cause the faults."
        },
        {
          "t": "h",
          "text": "Analogue line basics"
        },
        {
          "t": "p",
          "text": "A basic analogue line is one pair of wires, called **tip** and **ring**, from the telephone exchange. When the phone is on the hook (idle), the exchange puts a DC voltage on the line. A typical value is about 48 V, but it varies by country and line length. When you lift the handset, the voltage drops to a lower value and a current flows. The exchange sees this current and sends a **dial tone**."
        },
        {
          "t": "p",
          "text": "To ring your phone, the exchange sends an AC signal on top of the DC voltage. It is often tens of volts, for example 60 to 90 V AC at 20 to 25 Hz, depending on the country. You can feel this as a shock."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A telephone line can carry a ringing signal at any moment. Unplug the line from the wall before you work on a connector or the inside of a fax machine. Do not touch bare line wires. Never plug a telephone line into a network port or the reverse."
        },
        {
          "t": "h",
          "text": "Dialling"
        },
        {
          "t": "p",
          "text": "Old phones use **pulse dialling**, which breaks the line current a set number of times for each digit. Most now use **DTMF**, tone dialling. Each key sends two tones at once: one from a low group and one from a high group. For example, key 5 sends 770 Hz and 1336 Hz together. Using two tones prevents speech from copying a key by accident."
        },
        {
          "t": "p",
          "text": "A single-line phone uses the middle pair of an RJ11 plug, pins 3 and 4 in the common six-position plug. Because the plug looks like a small RJ45, take care not to mix them up."
        },
        {
          "t": "h",
          "text": "How a fax call works"
        },
        {
          "t": "p",
          "text": "A fax machine dials the number, and the two machines exchange tones to agree on a speed and settings. This is the **handshake**. They then send the page as modem signals. A typical top speed is 33.6 kb/s, and if the line is poor the machines slow down. Many machines have **error correction mode**, which resends damaged blocks of data rather than printing bad lines."
        },
        {
          "t": "diagram",
          "name": "fax-call-phases"
        },
        {
          "t": "h",
          "text": "PBX and VoIP effects"
        },
        {
          "t": "p",
          "text": "A **PBX** is an office telephone exchange. It may need a code, such as 0, to reach an outside line, so the fax must be set to dial that code. A pause character is often needed after it. **VoIP** carries voice as data packets over a network. Voice codecs compress sound and are tuned for speech, not modem tones. Delay and lost packets can break a fax. The usual fixes are:"
        },
        {
          "t": "ul",
          "items": [
            "Use a VoIP adapter that supports fax, or a dedicated analogue line.",
            "Use a codec that does little compression.",
            "Slow the fax speed and turn error correction on.",
            "Use fax over IP (called T.38) if both ends support it."
          ]
        },
        {
          "t": "h",
          "text": "Testing a line"
        },
        {
          "t": "p",
          "text": "Plug a known-good telephone into the wall socket. Listen for dial tone and make a call. If there is no dial tone, the fault is in the line or the exchange. If the phone works but the fax does not, check the fax cable, the settings, and any VoIP adapter. A **line tester** can show line voltage and polarity safely. If you need a meter, set it to DC volts and a range above 60 V."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A fax needs a clean voice-quality line. If voice calls work but faxes fail, think about compression, delay, line noise and speed settings."
        }
      ]
    },
    {
      "id": "m10-l5",
      "title": "Protocols for printing and scanning",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the protocols that carry print jobs, scans and status information across a network. A **protocol** is an agreed set of rules for exchanging data. Knowing which protocol and port a feature uses helps you set it up and find faults."
        },
        {
          "t": "h",
          "text": "TCP, UDP and ports"
        },
        {
          "t": "p",
          "text": "**TCP** makes a connection and checks that all data arrives in order. **UDP** sends without checking, which is faster for simple messages. A **port** is a number that tells the receiving device which service the data is for. An IP address plus a port, written `192.168.1.50:9100`, points to one service on one device."
        },
        {
          "t": "h",
          "text": "Printing protocols"
        },
        {
          "t": "table",
          "head": [
            "Protocol",
            "Usual port",
            "What it does"
          ],
          "rows": [
            [
              "Raw port (socket)",
              "TCP 9100",
              "Sends the print data straight to the printer. Simple and fast, with little feedback."
            ],
            [
              "IPP",
              "TCP 631",
              "Sends jobs and also reports printer and job status. Can use authentication and encryption."
            ],
            [
              "LPR / LPD",
              "TCP 515",
              "Older queue-based printing, still found on some systems."
            ],
            [
              "SMB shared printer",
              "TCP 445",
              "A PC or server shares a printer, and other PCs connect to the share."
            ]
          ],
          "caption": "Common ways to send a print job. Port numbers are usual defaults, so check the machine settings."
        },
        {
          "t": "p",
          "text": "With raw port printing, the PC drivers prepare the job. The printer only receives it. If the job stops, the PC may not tell the user why. IPP can report a printer that is out of paper or off line. Check the manufacturer's service manual for which options a machine supports."
        },
        {
          "t": "h",
          "text": "SNMP: monitoring"
        },
        {
          "t": "p",
          "text": "**SNMP** (Simple Network Management Protocol) lets a management tool read status and counters from a device, such as toner level, error state and page count. It normally uses UDP port 161. Older versions use a shared text called a **community string** as a password, and the default is often well known. Change it, and turn SNMP off if it is not needed. Service companies use it to collect meter readings."
        },
        {
          "t": "h",
          "text": "Scanning: email and folders"
        },
        {
          "t": "p",
          "text": "**SMTP** (Simple Mail Transfer Protocol) sends email. For scan-to-email, the machine acts as a mail client and sends the scan to a mail server. The server settings usually need the following:"
        },
        {
          "t": "ul",
          "items": [
            "Server name or address, and the port. Port 25 is the standard server port, 587 is common for logging in, and 465 is for encrypted connections from the start.",
            "The encryption setting that the server requires.",
            "A user name and password, if the server requires a login.",
            "A sender address that the server accepts."
          ]
        },
        {
          "t": "p",
          "text": "For scan-to-folder, the machine uses **SMB** to save the file into a shared folder. It needs the server name or address, the share name, and an account with write permission on that share."
        },
        {
          "t": "example",
          "title": "Reading a scan-to-email failure",
          "steps": [
            "Symptom: the scan screen shows that sending failed. The machine can ping the mail server.",
            "Ping works, so the cable, address and routing are fine. The fault is above that layer.",
            "The mail server log or the machine message says the login was rejected.",
            "Check the user name, password, port and encryption setting against the values the mail provider gave. A wrong port or missing encryption setting is common.",
            "Send a test again. Record what you changed."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Do not use your own account or a manager's password on a customer machine. Ask the customer to create a dedicated account, so a password change does not break the scanner without warning."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A machine that answers a ping is reachable, but that does not prove a service works. Printing, scanning and monitoring each use their own port and settings."
        }
      ]
    },
    {
      "id": "m10-l6",
      "title": "Testing and troubleshooting links",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson gives you a step-by-step method for finding a network fault between a machine and the rest of the network. The method starts at the cable and works upward. This saves time, because most network faults are simple."
        },
        {
          "t": "h",
          "text": "Start with the physical link"
        },
        {
          "t": "p",
          "text": "Check the **link light** on the machine port and on the switch port. A steady or flashing light shows that two devices have found each other. No light suggests a bad cable, a bad port, a device that is off, or the wrong cable type. Many ports also show speed, often with a different colour. Try a known-good cable and another switch port."
        },
        {
          "t": "p",
          "text": "A **cable tester** shows each wire as a lit pin from one end to the other. It finds an **open** (a break), a **short**, **crossed** wires and reversed pairs. A simple tester cannot always find a split pair or long-run faults. An advanced tester can measure length and performance."
        },
        {
          "t": "h",
          "text": "Check the address"
        },
        {
          "t": "p",
          "text": "Look at the machine network page or panel for its address, mask and gateway. On a Windows PC, `ipconfig /all` shows the PC settings. On Linux, `ip addr` does the same. Compare the machine and the PC. They must have the same network part, matching masks and different host numbers."
        },
        {
          "t": "h",
          "text": "Use ping"
        },
        {
          "t": "p",
          "text": "`ping` sends a small test message and waits for a reply. It shows if the device answers and how long the reply takes. Test in this order, and stop at the first failure:"
        },
        {
          "t": "ol",
          "items": [
            "`ping 127.0.0.1` tests the network software of your own PC.",
            "Ping your own PC address, then the default gateway.",
            "Ping the machine by its IP address.",
            "Ping the machine by name. If this fails when the address works, the fault is DNS.",
            "Test the service itself by sending a test print or test scan."
          ]
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely cause",
            "Check"
          ],
          "rows": [
            [
              "No link light",
              "Cable, port or power",
              "Swap cable and port"
            ],
            [
              "Address begins 169.254",
              "No answer from DHCP",
              "Cable, DHCP service, or use a static address"
            ],
            [
              "Ping to address fails, link ok",
              "Wrong subnet or gateway, or a firewall",
              "Compare masks and addresses"
            ],
            [
              "Ping by address works, by name fails",
              "DNS fault",
              "DNS server setting"
            ],
            [
              "Works then stops, on and off",
              "Duplicate address or poor cable",
              "Use `arp -a`, then unplug the machine and ping its address"
            ]
          ],
          "caption": "Symptom to cause for common link faults"
        },
        {
          "t": "h",
          "text": "Duplicate addresses and firewalls"
        },
        {
          "t": "p",
          "text": "A **duplicate address** happens when two devices use the same IP address. Both work badly, and the fault comes and goes. A test: unplug the machine and ping its address. If you still get a reply, another device has that address. `arp -a` lists addresses with their MAC addresses and can show the other device."
        },
        {
          "t": "p",
          "text": "A **firewall** blocks traffic by rule. It can stop a printing port while allowing ping. When ping works and printing does not, check that the port is open on the firewall, router and PC."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Some devices are set not to answer ping. A failed ping is a clue, not proof. Always confirm with a second test, such as opening the machine web page."
        },
        {
          "t": "h",
          "text": "Reading a customer network diagram"
        },
        {
          "t": "p",
          "text": "Ask for the network diagram before you install. Look for the gateway, subnet ranges, which switch the machine plugs into, and which addresses are reserved. If there is no diagram, draw a simple one and give a copy to the customer."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Change one thing at a time, test after each change, and write down what you did. Never change the settings of a customer router or firewall without permission."
        }
      ]
    }
  ],
  "practical": {
    "title": "Make and test an RJ45 patch cable and check a networked machine",
    "objective": "Wire an RJ45 patch cable to the T568B standard, test it with a cable tester, then use it to connect a machine to a network and prove the connection with ping.",
    "time": "60 minutes",
    "tools": [
      "Twisted-pair cable (a length of about 1 m)",
      "Two RJ45 plugs",
      "Crimping tool with a cable cutter",
      "Cable stripper or sharp snips",
      "Cable tester that shows each wire pair",
      "A networked training machine or printer and a switch",
      "A PC with a command prompt or terminal",
      "Safety glasses"
    ],
    "safety": [
      "Wear safety glasses when you cut or trim wire. Small pieces can fly into your eyes.",
      "Cut away from your body and keep your fingers behind the blade.",
      "Do not plug the cable into any telephone socket, which may carry a ringing voltage.",
      "Use only the training network or a network you have permission to use. Do not change any router or firewall setting.",
      "Put the cut-off wire pieces in a bin straight away, so no one steps on them."
    ],
    "steps": [
      "Cut the cable to length and strip about 25 mm of the outer jacket without cutting the wire insulation.",
      "Fan out the four pairs and untwist them only as far as needed.",
      "Arrange the wires in the T568B order: white/orange, orange, white/green, blue, white/blue, green, white/brown, brown.",
      "Hold the wires flat and parallel, and trim them square so about 13 mm remains bare.",
      "With the plug clip underneath and the contacts facing you, slide the wires in until every copper end touches the front of the plug.",
      "Check that the outer jacket reaches inside the plug under the strain relief, then crimp it.",
      "Repeat steps 2 to 6 on the other end, using the same T568B order.",
      "Plug both ends into the cable tester. Check that all eight pins light in order from 1 to 8. Cut off the plug and redo any end that fails.",
      "Use the cable to connect the machine to the switch. Check that the link lights on both ports come on.",
      "Read the machine IP address, mask and gateway from its panel or network page, and write them down.",
      "On the PC, run `ipconfig` (Windows) or `ip addr` (Linux) and confirm that it is in the same subnet as the machine.",
      "Run `ping` with the machine IP address. Record whether you get replies and the reply time.",
      "Send a test page to the machine, and confirm that it prints."
    ],
    "checks": [
      "I can write the T568B colour order from pin 1 to pin 8 without looking.",
      "I can explain what each light on the cable tester means when a wire is open or crossed.",
      "I can tell, from an address and a mask, whether two devices are on the same subnet.",
      "I can use ping to show that a machine is reachable and record the result.",
      "I can explain what I would check next if the link light stayed off."
    ]
  },
  "quiz": [
    {
      "id": "m10-q01",
      "q": "What is the job of a subnet mask?",
      "options": [
        "It shows which part of an IP address is the network and which is the device.",
        "It encrypts data so that other devices on the same network cannot read it in transit.",
        "It gives each network card its unique hardware address.",
        "It translates a server name into an IP address."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m10-l1",
      "explain": "The mask splits an address into a network part and a host part. Translating names is the job of DNS, not the mask, and the hardware address is set in the network card."
    },
    {
      "id": "m10-q02",
      "q": "A network uses the subnet mask 255.255.255.0. How many usable host addresses does it have?",
      "options": [
        "256",
        "255",
        "254",
        "253"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m10-l1",
      "explain": "The last number gives 8 host bits, so there are 256 addresses. One is the network address and one is the broadcast address, so 254 can be given to devices. The number 256 is tempting but counts the two reserved addresses."
    },
    {
      "id": "m10-q03",
      "q": "A printer has the address 192.168.1.130 and the mask 255.255.255.192. Which PC address is in the same subnet, so it can reach the printer without a router?",
      "options": [
        "192.168.1.100",
        "192.168.1.150",
        "192.168.1.200",
        "192.168.1.20"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m10-l1",
      "explain": "The mask 255.255.255.192 is /26, so blocks are 64 long: 0 to 63, 64 to 127, 128 to 191 and 192 to 255. Only 150 is in the block 128 to 191 with the printer. The address 100 looks close but is in the block 64 to 127."
    },
    {
      "id": "m10-q04",
      "q": "Which network service turns a name, such as the name of a mail server, into an IP address?",
      "options": [
        "DHCP",
        "SNMP",
        "SMTP",
        "DNS"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m10-l1",
      "explain": "DNS holds the link between names and addresses. DHCP is often confused with it because both are set up in the same place, but DHCP only hands out addresses and settings."
    },
    {
      "id": "m10-q05",
      "q": "A laptop on an office network shows the address 169.254.12.7. What does this most likely mean?",
      "options": [
        "An administrator gave the laptop a fixed address so that it could be used for printing.",
        "The laptop asked DHCP for an address, got no reply, and gave itself one.",
        "The laptop has the same MAC address as another device.",
        "The router has given the laptop a public internet address."
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m10-l1",
      "explain": "An address starting 169.254 is a self-assigned address used when no DHCP reply arrives. It can reach only devices that are directly connected with the same type of address. It is not a public address, even though it looks unusual."
    },
    {
      "id": "m10-q06",
      "q": "A shared copier uses DHCP. After each power cut, its address changes and PCs can no longer print to it. What is the best permanent fix?",
      "options": [
        "Replace the network cable with a shorter one.",
        "Change the subnet mask of every PC to 255.0.0.0 so that they all see the copier.",
        "Change the copier MAC address to match the PCs.",
        "Give the copier a static address outside the DHCP range, or a reservation."
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m10-l1",
      "explain": "The PCs have the old address saved, so the copier needs one that never changes. A cable cannot change an address, and altering masks on PCs makes the network worse."
    },
    {
      "id": "m10-q07",
      "q": "Which device learns the MAC addresses of the devices on its ports and sends data only to the port that needs it?",
      "options": [
        "Modem",
        "Router",
        "Switch",
        "Hub"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m10-l2",
      "explain": "A switch keeps a table of MAC addresses by port. A hub looks similar but repeats every signal to every port, so it does not choose."
    },
    {
      "id": "m10-q08",
      "q": "Which device joins two different IP networks, such as an office LAN and the internet?",
      "options": [
        "Router",
        "Switch",
        "Patch panel",
        "Cable tester"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m10-l2",
      "explain": "A router reads IP addresses and passes packets between networks. A switch only connects devices inside one network."
    },
    {
      "id": "m10-q09",
      "q": "How many links are needed to connect 6 devices in a full mesh, so that every device has a direct link to every other?",
      "options": [
        "6",
        "12",
        "30",
        "15"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m10-l2",
      "explain": "Links = n × (n − 1) ÷ 2 = 6 × 5 ÷ 2 = 15. The value 30 is tempting because it forgets to divide by 2, which counts each link twice."
    },
    {
      "id": "m10-q10",
      "q": "In a star network, the central switch loses power. What happens?",
      "options": [
        "Only the device plugged in nearest to the switch loses its connection to the network.",
        "Every device loses contact, because all traffic passes through the switch.",
        "The network continues at a lower speed through the cables.",
        "Only wireless devices are affected."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m10-l2",
      "explain": "Each device has a cable only to the switch, so the switch is a single point of failure. A failed cable affects one device, but a failed switch affects them all."
    },
    {
      "id": "m10-q11",
      "q": "A scanner is in a room where the Wi-Fi signal is weak. The customer wants a stronger connection without running cable to the scanner. What should you suggest?",
      "options": [
        "Add an access point near that room, connected by cable to the switch.",
        "Add a second modem in the room.",
        "Connect a crossover cable between the scanner and the router to boost the signal.",
        "Replace the scanner subnet mask with a larger one."
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m10-l2",
      "explain": "An access point adds wireless coverage to a wired network. A modem links to a provider line and does not improve signal, and a mask change does not affect radio strength."
    },
    {
      "id": "m10-q12",
      "q": "In the T568B standard, which colour is on pin 1 of an RJ45 plug?",
      "options": [
        "White/green",
        "White/orange",
        "Orange",
        "Blue"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m10-l3",
      "explain": "T568B starts with white/orange on pin 1. White/green on pin 1 is the T568A standard, which is the likely mix-up."
    },
    {
      "id": "m10-q13",
      "q": "Which pins of the RJ45 connector carry the data in Fast Ethernet (10 and 100 Mb/s)?",
      "options": [
        "Pins 1, 2, 3 and 4",
        "Pins 3, 4, 5 and 6",
        "Pins 1, 2, 3 and 6",
        "Pins 4, 5, 7 and 8"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m10-l3",
      "explain": "Fast Ethernet uses the orange and green pairs, on pins 1, 2, 3 and 6. The blue and brown pairs are only needed for gigabit speeds."
    },
    {
      "id": "m10-q14",
      "q": "A cable tester shows that pins 1 and 2 at one end connect to pins 3 and 6 at the other end, and pins 3 and 6 connect to pins 1 and 2. Pins 4, 5, 7 and 8 connect straight through. What kind of cable is this?",
      "options": [
        "A straight-through cable wired T568B at both ends",
        "A crossover cable, with T568A at one end and T568B at the other",
        "A cable with a split pair",
        "A cable with an open wire"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m10-l3",
      "explain": "Swapping the transmit and receive pairs, pins 1 and 2 with 3 and 6, is exactly what a crossover cable does. All eight wires are connected, so it is not open, and the swap is by design rather than a split pair."
    },
    {
      "id": "m10-q15",
      "q": "A printer is 120 m from the nearest switch. What is the correct way to connect it with twisted-pair copper cable?",
      "options": [
        "Use Cat6 cable, because it is rated for 120 m.",
        "Use thinner cable so that the signal travels farther.",
        "Add an intermediate switch or use fibre, because copper stops at 100 m.",
        "Run one long cable and lower the speed setting of the printer to 10 Mbit/s."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m10-l3",
      "explain": "The 100 m limit applies to all copper twisted-pair categories used for Ethernet. A better category does not extend it, and the speed setting does not remove the distance limit."
    },
    {
      "id": "m10-q16",
      "q": "Why should you untwist the pairs as little as possible when you fit an RJ45 plug?",
      "options": [
        "Untwisted wires are weaker and will break at the plug.",
        "The plug cannot grip wires that are untwisted, so the contacts do not meet them.",
        "Untwisted wires change the colour code.",
        "Twisting reduces interference, and untwisting too much adds crosstalk."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m10-l3",
      "explain": "The twists cancel interference, so a long untwisted section lets pairs interfere with each other. The wires are not weaker, and the plug still grips them."
    },
    {
      "id": "m10-q17",
      "q": "Why is fibre often chosen to connect two buildings?",
      "options": [
        "The ends are easier to fit than a copper plug and need no special tools or training.",
        "You can check a live fibre by looking into the end.",
        "It is immune to electrical noise and carries no earth voltage between buildings.",
        "It can be bent into tight corners."
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m10-l3",
      "explain": "Fibre carries light, so it is not disturbed by electrical noise and does not carry earth voltage differences between buildings. Looking into a live fibre is dangerous, and fibre has a minimum bend radius."
    },
    {
      "id": "m10-q18",
      "q": "How does DTMF tone dialling represent each key?",
      "options": [
        "By one tone, with a different frequency for each key.",
        "By two tones sent together, one from a low group and one from a high group.",
        "By a number of breaks in the line current.",
        "By a change in line voltage from 48 V to 0 V."
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m10-l4",
      "explain": "DTMF uses a pair of tones for each key. Breaking the line current a set number of times is pulse dialling, an older method."
    },
    {
      "id": "m10-q19",
      "q": "About what DC voltage is on an idle analogue telephone line (typical value, which varies by country)?",
      "options": [
        "5 V",
        "230 V",
        "48 V",
        "12 V"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m10-l4",
      "explain": "An idle line is typically around 48 V DC. The ringing signal added on top is higher AC, but the standing line voltage is not mains."
    },
    {
      "id": "m10-q20",
      "q": "A fax machine sent and received well on an analogue line. After the office changed to VoIP phones, faxes often fail or print with lines. What is the most likely reason?",
      "options": [
        "The fax paper has become damp.",
        "The telephone cord is too long.",
        "The fax number has too many digits for the new VoIP system to dial it.",
        "Voice compression, delay or lost packets distort the fax tones."
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m10-l4",
      "explain": "VoIP codecs are designed for speech, so they can damage the tones a fax uses. A change that appeared at the same moment as the VoIP system points to the line type, not the paper or cord."
    },
    {
      "id": "m10-q21",
      "q": "You need to fit a new RJ11 plug on the cable of a fax machine. The cable is connected to a live telephone wall socket. What is the safest action first?",
      "options": [
        "Unplug the cable from the wall socket, as ringing can arrive at any moment.",
        "Wear rubber gloves and work quickly in the gaps between the ringing signals.",
        "Leave it connected so that you can check for dial tone while you work on the plug.",
        "Switch off the fax machine and leave the cable connected to the wall socket."
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m10-l4",
      "explain": "The ringing signal is much higher than the idle line voltage and arrives without warning. Switching off the fax machine does not isolate the wall socket from the exchange."
    },
    {
      "id": "m10-q22",
      "q": "Which contacts does a single analogue telephone line normally use in the common six-position RJ11 plug?",
      "options": [
        "The outer pins, 1 and 6",
        "The middle pair, pins 3 and 4",
        "Pins 2 and 5",
        "All six pins"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m10-l4",
      "explain": "The first line uses the centre pair. The outer pins are normally unused on a single-line phone."
    },
    {
      "id": "m10-q23",
      "q": "Which TCP port do many printers use by default for raw port (socket) printing?",
      "options": [
        "80",
        "631",
        "9100",
        "25"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m10-l5",
      "explain": "Raw socket printing commonly uses port 9100. Port 631 is for IPP, and port 80 is for web pages, so it is a likely confusion."
    },
    {
      "id": "m10-q24",
      "q": "What is an advantage of IPP over raw port printing?",
      "options": [
        "It is always faster.",
        "It never needs a driver on the PC, because the printer sends its own driver to every PC.",
        "It works without a network cable.",
        "It can report printer status and supports authentication and encryption."
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m10-l5",
      "explain": "IPP is built for two-way communication, so a client can learn about problems and manage jobs. Raw port printing sends data one way and tells the user very little."
    },
    {
      "id": "m10-q25",
      "q": "Scan-to-email fails. The copier can ping the mail server, and the log shows that the login was rejected. What should you check first?",
      "options": [
        "The toner level of the copier",
        "The user name, password, port and encryption setting for the mail server",
        "The subnet mask of the customer PCs",
        "The fax speed setting"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m10-l5",
      "explain": "A good ping shows that the network path works, and the rejected login points to the account or the connection settings. Toner and fax settings have no part in mail login."
    },
    {
      "id": "m10-q26",
      "q": "What can a management tool do with SNMP?",
      "options": [
        "Read status and counters, such as page counts and error states.",
        "Send a scanned page to a mail server with a stored login and password.",
        "Give each device an IP address.",
        "Turn a name into an address."
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m10-l5",
      "explain": "SNMP is for monitoring and management. Sending scans uses SMTP, and handing out addresses is DHCP."
    },
    {
      "id": "m10-q27",
      "q": "Scan-to-folder fails with an access denied message. The server answers ping, and the share name was typed correctly. What is the most likely cause?",
      "options": [
        "The network cable is a crossover cable, so the folder path cannot be reached.",
        "The server name is too long for DNS.",
        "The account used by the machine lacks write permission on the shared folder.",
        "The port number of the printer is 9100."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m10-l5",
      "explain": "Access denied means the server was reached and refused the account. A network path problem would show as not found or timed out, and port 9100 is not used for folder shares."
    },
    {
      "id": "m10-q28",
      "q": "Which command checks whether another device on the network replies?",
      "options": [
        "ipconfig",
        "nslookup",
        "arp",
        "ping"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m10-l6",
      "explain": "Ping sends a test message and waits for the reply. Ipconfig only shows the settings of your own PC, which is easy to confuse with testing."
    },
    {
      "id": "m10-q29",
      "q": "A networked printer cannot be reached. Ping to your own PC works, but there is no link light on the printer port. What should you check next?",
      "options": [
        "The cable and the ports, by swapping the cable and trying another switch port.",
        "The DNS server address stored in the network settings of the printer, and its gateway.",
        "The page count of the printer.",
        "The email settings of the printer."
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m10-l6",
      "explain": "With no link light, the physical link is not working, so higher layers cannot work either. DNS and email settings only matter once the link is up."
    },
    {
      "id": "m10-q30",
      "q": "A printer works for a while and then stops. When you unplug the printer, pinging its IP address still gets replies. What does this show?",
      "options": [
        "The ping program is faulty.",
        "The printer cable is too long.",
        "Another device is using the same IP address.",
        "The printer has a wrong MAC address."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m10-l6",
      "explain": "If an address still replies with the printer disconnected, some other device owns it. This is a duplicate address. A cable fault would not produce replies from a missing device."
    },
    {
      "id": "m10-q31",
      "q": "Ping to a printer IP address works, but ping to the printer name fails. Which part of the network is most likely at fault?",
      "options": [
        "The network cable",
        "DNS, which turns names into addresses",
        "The link light of the switch",
        "The subnet mask of the printer"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m10-l6",
      "explain": "Reaching the address proves the cable, link and subnet are working. Only the step that converts the name is failing, and that is the DNS job."
    },
    {
      "id": "m10-q32",
      "q": "Ping to a printer works, but print jobs sent to port 9100 never arrive. What could explain this?",
      "options": [
        "A firewall may allow ping but block the printing port.",
        "The printer is not connected to the network.",
        "Ping is a printing protocol, so printing cannot fail.",
        "The cable has an open wire."
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m10-l6",
      "explain": "Ping and printing use different protocols and ports, so a firewall can pass one and block the other. An open wire or a disconnected printer would stop the ping too."
    }
  ],
  "cards": [
    {
      "id": "m10-c01",
      "front": "LAN",
      "back": "Local area network. Devices joined in one building or office.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c02",
      "front": "WAN",
      "back": "Wide area network. It joins LANs over long distances, often through an internet provider.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c03",
      "front": "IPv4 address: how long is it and how is it written?",
      "back": "32 bits, written as four numbers from 0 to 255 separated by dots, for example 192.168.1.20.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c04",
      "front": "MAC address",
      "back": "A 48-bit hardware address, written as 12 hexadecimal digits, set in the network hardware. It identifies the device on the local network.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c05",
      "front": "Formula for usable hosts in a subnet",
      "back": "2 to the power h, minus 2, where h is the number of host bits. The 2 removed are the network and broadcast addresses.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c06",
      "front": "What is /26 as a subnet mask?",
      "back": "255.255.255.192. Blocks of 64 addresses, 62 of them usable.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c07",
      "front": "What does DHCP do?",
      "back": "It gives a device an IP address, mask, gateway and DNS server for a set time called a lease.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c08",
      "front": "An address beginning 169.254 means what?",
      "back": "The device asked for DHCP, got no reply and gave itself an address.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c09",
      "front": "Private IPv4 ranges",
      "back": "10.x.x.x, 172.16.x.x to 172.31.x.x and 192.168.x.x. Used inside offices, not on the public internet.",
      "lesson": "m10-l1"
    },
    {
      "id": "m10-c10",
      "front": "Switch versus router",
      "back": "A switch joins devices within one network. A router joins different networks and reads IP addresses.",
      "lesson": "m10-l2"
    },
    {
      "id": "m10-c11",
      "front": "What does an access point do?",
      "back": "It adds wireless access to a wired network.",
      "lesson": "m10-l2"
    },
    {
      "id": "m10-c12",
      "front": "Star topology: what happens if one cable fails?",
      "back": "Only the device on that cable loses its connection. If the central switch fails, all lose connection.",
      "lesson": "m10-l2"
    },
    {
      "id": "m10-c13",
      "front": "Formula for links in a full mesh",
      "back": "n × (n − 1) ÷ 2, where n is the number of devices. Six devices need 15 links.",
      "lesson": "m10-l2"
    },
    {
      "id": "m10-c14",
      "front": "Bus topology fault: what happens if the backbone breaks?",
      "back": "The backbone splits in two, and the devices on opposite sides can no longer reach each other.",
      "lesson": "m10-l2"
    },
    {
      "id": "m10-c15",
      "front": "T568B colour order, pins 1 to 8",
      "back": "White/orange, orange, white/green, blue, white/blue, green, white/brown, brown.",
      "lesson": "m10-l3"
    },
    {
      "id": "m10-c16",
      "front": "How does T568A differ from T568B?",
      "back": "The orange and green pairs swap places. T568A pin 1 is white/green. T568B pin 1 is white/orange.",
      "lesson": "m10-l3"
    },
    {
      "id": "m10-c17",
      "front": "Crossover cable",
      "back": "A cable with T568A at one end and T568B at the other. It joins two like devices directly.",
      "lesson": "m10-l3"
    },
    {
      "id": "m10-c18",
      "front": "Maximum length of a twisted-pair Ethernet link",
      "back": "100 m including patch cords. Use another switch or fibre for longer runs.",
      "lesson": "m10-l3"
    },
    {
      "id": "m10-c19",
      "front": "Fibre safety rule",
      "back": "Never look into a fibre end or port while equipment is powered. The light is usually invisible and can damage your eyes.",
      "lesson": "m10-l3"
    },
    {
      "id": "m10-c20",
      "front": "Serial link settings that both ends must match",
      "back": "Baud rate, data bits, parity and stop bits. A common setting is 9600, 8, none, 1.",
      "lesson": "m10-l3"
    },
    {
      "id": "m10-c21",
      "front": "Tip and ring",
      "back": "The two wires of an analogue telephone line.",
      "lesson": "m10-l4"
    },
    {
      "id": "m10-c22",
      "front": "Typical idle voltage on an analogue line",
      "back": "About 48 V DC. This varies by country. The ringing signal on top is AC and can shock you.",
      "lesson": "m10-l4"
    },
    {
      "id": "m10-c23",
      "front": "DTMF",
      "back": "Tone dialling. Each key sends two tones at once, one from a low group and one from a high group.",
      "lesson": "m10-l4"
    },
    {
      "id": "m10-c24",
      "front": "Fax works on old line but fails on VoIP. Likely cause?",
      "back": "Voice compression, delay or lost packets distort the fax tones. Use a fax-capable adapter or fax over IP.",
      "lesson": "m10-l4"
    },
    {
      "id": "m10-c25",
      "front": "Port for raw port printing",
      "back": "TCP 9100 on many printers. Check the machine settings.",
      "lesson": "m10-l5"
    },
    {
      "id": "m10-c26",
      "front": "Port for IPP",
      "back": "TCP 631. IPP can report printer and job status.",
      "lesson": "m10-l5"
    },
    {
      "id": "m10-c27",
      "front": "What does SNMP do?",
      "back": "It lets a management tool read status and counters, such as page counts, from a device. It uses UDP port 161.",
      "lesson": "m10-l5"
    },
    {
      "id": "m10-c28",
      "front": "Scan-to-email: which settings are needed?",
      "back": "Mail server name, port, required encryption, user name and password if needed, and an accepted sender address.",
      "lesson": "m10-l5"
    },
    {
      "id": "m10-c29",
      "front": "Scan-to-folder: which protocol and permission?",
      "back": "SMB, with an account that has write permission on the shared folder.",
      "lesson": "m10-l5"
    },
    {
      "id": "m10-c30",
      "front": "Ping test order",
      "back": "Own PC (127.0.0.1), own address, gateway, target by address, target by name. Stop at the first failure.",
      "lesson": "m10-l6"
    },
    {
      "id": "m10-c31",
      "front": "Ping by address works, ping by name fails",
      "back": "A DNS fault.",
      "lesson": "m10-l6"
    },
    {
      "id": "m10-c32",
      "front": "How do you test for a duplicate IP address?",
      "back": "Unplug the machine and ping its address. If something still replies, another device has that address.",
      "lesson": "m10-l6"
    }
  ]
});

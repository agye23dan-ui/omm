OMM.registerModule({
  "id": "m09",
  "summary": "Explain what an operating system does, manage disks and files, use basic commands, install printer drivers, set up user accounts and troubleshoot software faults safely.",
  "outcomes": [
    "Describe the roles of the kernel, file system, drivers and user interface in an operating system.",
    "Choose a suitable file system for a drive and explain the difference between a partition and a format.",
    "Use basic command-line commands to list files, copy data, check network settings and read permissions.",
    "Install, update and roll back a printer driver, and explain what a page description language does.",
    "Set up user accounts with suitable permissions and explain why standard accounts are safer for daily work.",
    "Follow a safe order of work when troubleshooting a software fault: back up, change one thing, test, record."
  ],
  "cheatsheet": [
    "The kernel controls hardware and shares CPU, memory and devices between programs.",
    "A driver is software that lets the operating system talk to one device.",
    "Partition = a slice of a disk. Format = writing a file system into that slice.",
    "FAT32 cannot hold a single file of 4 GiB or more. exFAT and NTFS can.",
    "Quick format clears the file index only. The old data can often be recovered.",
    "Linux permissions: r = 4, w = 2, x = 1. So 644 means owner rw, group r, others r.",
    "Back up before you repair. Change one thing at a time. Write down what you changed.",
    "Use a standard account for daily work. Use an administrator account only when needed.",
    "ipconfig (Windows) and ip addr (Linux) show the machine's IP address."
  ],
  "lessons": [
    {
      "id": "m09-l1",
      "title": "What an operating system does",
      "minutes": 7,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains what an operating system does and why a service technician must understand it. Copiers, printers and cash registers all contain a computer, and the computers around them run an operating system that you will install, configure and repair."
        },
        {
          "t": "p",
          "text": "An **operating system** (OS) is the main software on a computer. It sits between the hardware and the programs you use. Without it, every program would need its own code to talk to the screen, the keyboard, the disk and the printer."
        },
        {
          "t": "h",
          "text": "The main parts"
        },
        {
          "t": "ul",
          "items": [
            "The **kernel** is the core. It starts programs, shares the processor and memory between them, and controls access to the hardware.",
            "The **file system** decides how data is stored on a disk and how files and folders are named and found.",
            "**Drivers** are small programs that let the kernel talk to one kind of device, such as a printer, a network card or a scanner.",
            "The **user interface** is what you see and touch. It can be graphical (windows, icons, a mouse) or text only (a command line)."
          ]
        },
        {
          "t": "diagram",
          "name": "os-layers"
        },
        {
          "t": "p",
          "text": "Many programs run at the same time. The kernel switches between them very fast, so they appear to run together. This is called **multitasking**. The kernel also keeps each program's memory separate, so one program that crashes should not bring down the others."
        },
        {
          "t": "h",
          "text": "Multi-user systems"
        },
        {
          "t": "p",
          "text": "A **multi-user** operating system lets several people have their own **accounts** on one computer. Each account has its own files and settings, and the system controls who may read, change or delete what. Recent versions of Windows, Linux and macOS are all multi-user."
        },
        {
          "t": "p",
          "text": "Some accounts have more power than others. An **administrator** (on Linux, the **root** user) can install software and change system settings. A **standard user** can run programs and use their own files, but cannot make system-wide changes. This limit protects the system from mistakes and from malware."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "The operating system manages hardware, files and users. When a device does not work, the cause is often one of three things: the hardware, the driver, or a setting in the operating system."
        },
        {
          "t": "h",
          "text": "Operating systems you will meet"
        },
        {
          "t": "table",
          "head": [
            "Type",
            "Where you find it",
            "Notes for the technician"
          ],
          "rows": [
            [
              "Windows",
              "Office PCs, print servers, many service laptops",
              "Most printer drivers and service tools are written for it."
            ],
            [
              "Linux",
              "Servers, some thin clients, many embedded systems",
              "Used inside many printers and copiers. Mostly command-line work."
            ],
            [
              "macOS",
              "Design and media offices",
              "Uses its own printing system. Drivers are installed differently."
            ],
            [
              "Embedded OS",
              "Inside copiers, printers, tills, routers",
              "You rarely install it. You update it as firmware."
            ]
          ],
          "caption": "Common operating systems and why they matter to a service technician"
        },
        {
          "t": "p",
          "text": "A **firmware** update replaces the software stored inside a machine, such as a copier controller. It is not the same as installing a program on a PC, but the ideas are alike: the software controls hardware, and a bad update can stop the machine working."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Before you touch a customer's computer, ask what the operating system is and which version it is. Instructions that are correct for one version can be wrong for another. Always check the manufacturer's documentation for the version you are working on."
        }
      ]
    },
    {
      "id": "m09-l2",
      "title": "Disk and file management",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how disks are divided, how file systems store data, and how to copy, compress, back up and restore files. You will need these skills for every drive you prepare or repair."
        },
        {
          "t": "h",
          "text": "Partitions and file systems"
        },
        {
          "t": "p",
          "text": "A new drive is one large empty space. A **partition** is a slice of that space that the operating system treats as a separate unit. A drive can have one partition or several. Making a partition is not enough to store files. You must also **format** it, which writes a **file system** into the partition."
        },
        {
          "t": "p",
          "text": "A file system is the set of rules and tables that record where each file is stored, its name, its size and its attributes. Different file systems suit different jobs."
        },
        {
          "t": "table",
          "head": [
            "File system",
            "Typical use",
            "Key points"
          ],
          "rows": [
            [
              "FAT32",
              "Small USB sticks, memory cards, older devices",
              "Very widely supported. A single file must be smaller than 4 GiB. No file permissions."
            ],
            [
              "exFAT",
              "Large USB drives and memory cards",
              "Handles very large files. Widely supported by recent systems. No file permissions."
            ],
            [
              "NTFS",
              "Windows system and data drives",
              "Has permissions, compression and a journal that helps recovery after a crash."
            ],
            [
              "ext4",
              "Linux system and data drives",
              "Has permissions and a journal. Windows cannot read it without extra software."
            ]
          ],
          "caption": "Common file systems. Check which ones the target device supports."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "A copier that scans to a USB stick may only read certain file systems. If the machine does not see a customer's stick, check the file system before you suspect the machine."
        },
        {
          "t": "h",
          "text": "Files, attributes and formatting"
        },
        {
          "t": "p",
          "text": "Each file has **attributes**, which are small flags that describe it. Common ones are read-only (the file cannot be changed), hidden (not shown in normal lists) and archive (marks a file that changed since the last backup). Windows also stores the date a file was created and last changed."
        },
        {
          "t": "p",
          "text": "A **quick format** builds a new empty file system but does not wipe the old data. Programs can often recover files after a quick format. A **full format** checks the surface and takes longer. To destroy data on purpose, you need a proper secure-erase tool."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Formatting and partitioning destroy data. Before you start, confirm the disk number and size twice. Choosing the wrong disk can erase a customer's system drive. Never format a drive you have not been told is empty or backed up."
        },
        {
          "t": "h",
          "text": "Copying, compression and backup"
        },
        {
          "t": "p",
          "text": "**Compression** makes files smaller by storing repeated patterns more efficiently. A ZIP file holds one or more compressed files. Text and documents shrink a lot. Photos and videos are usually already compressed, so they shrink little."
        },
        {
          "t": "p",
          "text": "A **backup** is a second copy of data kept somewhere else. If a drive fails or a repair goes wrong, you restore from the backup. A copy on the same drive is not a backup, because one failure destroys both. Good practice is to keep a copy on a separate device and to test that you can restore it."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A backup you have never restored from is only a hope. After you back up, open a few files from the copy to prove it works."
        },
        {
          "t": "p",
          "text": "When you copy a large folder, compare the number of files and the total size of the source and the copy. If they differ, something failed."
        }
      ]
    },
    {
      "id": "m09-l3",
      "title": "Command-line basics",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson introduces the command line, which is a text window where you type instructions instead of clicking. Technicians use it because it is fast, it works when the graphical screen does not, and it gives exact information about files and networks."
        },
        {
          "t": "p",
          "text": "A **shell** is the program that reads what you type and runs it. Windows has the **Command Prompt** and **PowerShell**. Linux and macOS have shells such as Bash. A **command** is a word you type, often followed by **options** and a path. Type the command, then press Enter."
        },
        {
          "t": "h",
          "text": "Common commands"
        },
        {
          "t": "table",
          "head": [
            "Task",
            "Windows Command Prompt",
            "Linux shell"
          ],
          "rows": [
            [
              "Show where you are",
              "cd",
              "pwd"
            ],
            [
              "List files",
              "dir",
              "ls -l"
            ],
            [
              "Change folder",
              "cd foldername",
              "cd foldername"
            ],
            [
              "Copy a file",
              "copy a.txt b.txt",
              "cp a.txt b.txt"
            ],
            [
              "Move or rename",
              "move a.txt c.txt",
              "mv a.txt c.txt"
            ],
            [
              "Delete a file",
              "del a.txt",
              "rm a.txt"
            ],
            [
              "Show IP settings",
              "ipconfig /all",
              "ip addr"
            ],
            [
              "Test a connection",
              "ping 192.168.1.1",
              "ping -c 4 192.168.1.1"
            ]
          ],
          "caption": "Equivalent commands. PowerShell also accepts many of the Command Prompt words."
        },
        {
          "t": "p",
          "text": "A **path** tells the shell where a file is. On Windows it looks like `C:\\Users\\Ama\\Documents\\report.txt`. On Linux it looks like `/home/ama/documents/report.txt`. Windows uses a backslash and drive letters. Linux uses a forward slash and one single tree that starts at `/`."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Commands such as del, rm and format act at once and may not use a recycle bin. Read the whole line before you press Enter. Check the folder you are in. Never run a command you copied from the internet if you do not understand what it does."
        },
        {
          "t": "h",
          "text": "Permissions on Linux"
        },
        {
          "t": "p",
          "text": "On Linux, every file has **permissions** for three groups: the owner, the group and everyone else. Each group can have read (`r`), write (`w`) and execute (`x`). The command `ls -l` shows them as nine characters, for example `rw-r--r--`."
        },
        {
          "t": "p",
          "text": "Permissions are also written as a number. Add read = 4, write = 2 and execute = 1 for each group. The command `chmod` changes them."
        },
        {
          "t": "example",
          "title": "Reading a permission number",
          "steps": [
            "The permission is 644.",
            "Owner digit 6 = 4 + 2, so read and write.",
            "Group digit 4, so read only.",
            "Others digit 4, so read only.",
            "The text form is rw-r--r--. The owner can change the file. Everyone else can only read it."
          ]
        },
        {
          "t": "p",
          "text": "Windows NTFS permissions use a different system with named rights such as Read, Modify and Full control. You see them in the file Properties window under the Security tab, or with the `icacls` command."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Use the Tab key to finish file names, and the up-arrow key to repeat the last command. Both save time and reduce typing mistakes. Most commands give help if you add `/?` on Windows or `--help` on Linux."
        }
      ]
    },
    {
      "id": "m09-l4",
      "title": "Drivers and software installation",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson explains what a driver is, how printer drivers and page description languages work, how to update or roll back a driver, and why licences matter. Most printing problems you will see on customer computers are driver problems."
        },
        {
          "t": "h",
          "text": "What a driver does"
        },
        {
          "t": "p",
          "text": "A **driver** is software that translates general requests from the operating system into the exact signals one device understands. When a program says \"print this page\", the printer driver turns the page into data that the printer can read. Each model, and sometimes each operating system version, needs the right driver."
        },
        {
          "t": "p",
          "text": "Operating systems include some **generic drivers** that work with many devices. They give basic function. A driver from the manufacturer usually adds all the machine's features, such as duplex, stapling, secure print and account codes."
        },
        {
          "t": "h",
          "text": "Page description languages"
        },
        {
          "t": "p",
          "text": "A **page description language** (PDL) is a language that describes what a page should look like: text, lines, pictures and fonts. The printer's controller reads the PDL and turns it into dots. Two common PDLs are **PCL** and **PostScript**. Many machines support both and also print PDF directly."
        },
        {
          "t": "p",
          "text": "Some low-cost printers are **host-based**. The computer does most of the page building, and the printer only receives the finished dots. These printers work only with the driver the maker supplies, and they may not work with some operating systems."
        },
        {
          "t": "table",
          "head": [
            "Symptom",
            "Likely driver cause"
          ],
          "rows": [
            [
              "Page prints as many pages of strange characters",
              "Wrong driver language selected, so the printer does not understand the data."
            ],
            [
              "Fonts or layout look different from the screen",
              "A different PDL or generic driver is in use."
            ],
            [
              "Duplex or finisher options missing",
              "Generic driver installed, or options not set in the driver."
            ],
            [
              "Printer worked, then stopped after a system update",
              "Driver replaced or damaged by the update."
            ]
          ],
          "caption": "Driver symptoms and likely causes"
        },
        {
          "t": "h",
          "text": "Installing, updating and rolling back"
        },
        {
          "t": "ol",
          "items": [
            "Confirm the exact printer model and the operating system version, including whether it is 32-bit or 64-bit.",
            "Download the driver from the manufacturer's official support site. Do not use unknown driver websites.",
            "Close other programs, then run the installer and follow its steps. Connect the printer only when the installer asks.",
            "Print a test page and check the options you need.",
            "Record the driver version in your notes."
          ]
        },
        {
          "t": "p",
          "text": "A **rollback** puts back the previous driver. In Windows you can do this in Device Manager from the device's Properties window. Roll back when a new driver causes a fault that the old one did not have. Keep the old installer file so you can restore it later."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Drivers run with high privileges inside the system. A driver from an untrusted source can contain malware. Download only from the manufacturer or the operating system maker, and scan the file if the customer's policy requires it."
        },
        {
          "t": "h",
          "text": "Licences"
        },
        {
          "t": "p",
          "text": "Software is protected by a **licence**, which states how you may use it. Some licences allow one computer, some a number of users, and **open-source** licences allow free use with conditions. Installing copied or cracked software is illegal and often carries malware."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Use the correct driver for the exact model and system, get it from the official source, and keep a note of the version you installed."
        }
      ]
    },
    {
      "id": "m09-l5",
      "title": "Customising the working environment",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers user accounts, profiles, permissions, start-up programs, power settings and basic security. These settings decide how a computer behaves for each person and how well it resists mistakes and attacks."
        },
        {
          "t": "h",
          "text": "Accounts and profiles"
        },
        {
          "t": "p",
          "text": "Each person should have their own account. A **user profile** is the folder of settings and files that belongs to an account: the desktop, documents, browser favourites and program settings. Because each person has a separate profile, one person's changes do not affect another's."
        },
        {
          "t": "p",
          "text": "Use the **principle of least privilege**: give each user only the rights needed for their work. Staff doing daily work should use a **standard** account. An administrator account should be used only for tasks that need it, such as installing a driver. If malware runs under a standard account, it is more limited in what it can damage."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Do daily work from a standard account. Use administrator rights only for the moment you need them."
        },
        {
          "t": "h",
          "text": "Passwords and permissions"
        },
        {
          "t": "ul",
          "items": [
            "Every account needs a password. Do not leave default passwords unchanged.",
            "Long passwords or phrases are stronger than short complicated ones.",
            "Never share one login between several people, because you cannot tell who did what.",
            "Share folders with named groups of people, not with everyone.",
            "Remove accounts when someone leaves the organisation."
          ]
        },
        {
          "t": "p",
          "text": "The same rules apply to machines you service. A copier or printer often has a default administrator password. Change it, and tell the customer where it is recorded."
        },
        {
          "t": "h",
          "text": "Start-up items and power settings"
        },
        {
          "t": "p",
          "text": "**Start-up items** are programs that run automatically when the computer starts or a user signs in. Too many slow the start-up and use memory. In recent versions of Windows you can manage them in Task Manager. Disable only items you recognise, and note what you changed."
        },
        {
          "t": "p",
          "text": "**Power settings** control when the screen turns off and when the computer sleeps. For a print server or a computer that must receive scans, set it not to sleep, because a sleeping computer cannot be reached over the network. For a laptop, balance battery life against need."
        },
        {
          "t": "h",
          "text": "Basic security"
        },
        {
          "t": "ul",
          "items": [
            "Install operating system updates, since many fix security holes.",
            "Use a firewall, which blocks unwanted network traffic.",
            "Use up-to-date anti-malware software.",
            "Lock the screen when you leave. Do not leave a technician login open on a customer's computer.",
            "Be careful with email attachments and links from unknown senders."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Before you change settings on a customer's computer, write down the original values. If the change causes a problem, you can put it back in a minute. Ask permission first, because the customer may rely on the old setting."
        }
      ]
    },
    {
      "id": "m09-l6",
      "title": "Troubleshooting software faults",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson gives a safe method for finding and fixing software faults, and covers boot problems, safe mode, event logs, malware and restore points. The method matters as much as the tools, because careless repairs can destroy a customer's data."
        },
        {
          "t": "h",
          "text": "A safe order of work"
        },
        {
          "t": "ol",
          "items": [
            "Ask questions. What happened? When did it start? What changed recently?",
            "Back up the customer's important data before you change anything.",
            "Form one idea about the cause and test it.",
            "Change one thing at a time, then test again.",
            "Record what you changed and what happened.",
            "Confirm with the customer that the fault is solved."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Back up before you repair. If you change several things at once, you cannot know which one fixed the fault or which one made it worse."
        },
        {
          "t": "h",
          "text": "Boot problems and safe mode"
        },
        {
          "t": "p",
          "text": "When a computer starts, firmware first checks the hardware, then loads the operating system from a drive. This is the **boot** process. If the computer shows no picture or no power light, think hardware first. If it shows an error such as \"operating system not found\", check the drive and the boot order. If it starts to load and then fails, the operating system or a driver is the likely cause."
        },
        {
          "t": "diagram",
          "name": "boot-sequence"
        },
        {
          "t": "p",
          "text": "**Safe mode** starts the operating system with only the basic drivers and services. If a fault disappears in safe mode, the cause is probably a driver, a start-up program or a service that safe mode did not load. If the fault remains in safe mode, suspect the hardware or core system files."
        },
        {
          "t": "h",
          "text": "Logs, restore points and malware"
        },
        {
          "t": "p",
          "text": "The operating system writes **event logs** that record errors, warnings and information with the time. When a fault happens, look in the log around that time. The error text and its source often point to the failing driver or service. Search for the exact text on the manufacturer's support site."
        },
        {
          "t": "p",
          "text": "A **restore point** is a saved copy of system settings and drivers at one moment. If a new driver or update breaks the system, you can return to an earlier restore point. It does not usually bring back deleted personal files, so it does not replace a backup."
        },
        {
          "t": "p",
          "text": "**Malware** is software made to harm or spy. Signs include a slow system, unknown programs, pop-up messages, and changed browser pages. Disconnect the computer from the network, scan with up-to-date tools, and tell the customer. If the infection is serious, a clean reinstall may be safer than cleaning."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Do not open customer files that you do not need. Their documents may be confidential. If you find illegal or private material, stop and tell your supervisor. Never copy customer data to your own devices without permission."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Keep a short log of every job: date, fault, what you checked, what you changed, driver and software versions, and the result. It helps you if the fault returns."
        }
      ]
    }
  ],
  "practical": {
    "title": "Partition and format a spare drive, install a printer driver and print a test page",
    "objective": "Prepare an empty spare drive with one partition and a file system, then install a printer driver from the official source and confirm it by printing a test page.",
    "time": "60 minutes",
    "tools": [
      "Training computer with an administrator account provided for the exercise",
      "Spare drive or USB stick that holds no needed data",
      "Training printer connected by USB or network",
      "Driver downloaded from the printer maker's official support site",
      "Notebook and pen for your record sheet"
    ],
    "safety": [
      "Use only a drive your instructor or supervisor has confirmed is empty and spare. Never use a drive that holds someone else's data.",
      "Partitioning and formatting erase data. Check the disk number, name and size before every format step.",
      "Do not touch the computer's system drive in the disk tool. It is the drive that holds the operating system.",
      "Download the driver only from the official manufacturer site. Do not run installers from unknown sources.",
      "Place the printer so cables are not a trip hazard, and keep drinks away from the equipment.",
      "If the printer shows a fault or you smell burning, switch off, unplug and tell your supervisor."
    ],
    "steps": [
      "Write down the computer's operating system and version, and the printer's model name.",
      "Connect the spare drive. Open the disk management tool provided by your operating system.",
      "Find the spare drive in the list. Write down its disk number and size, and compare the size with the label on the drive.",
      "Ask your supervisor to confirm the disk number before you continue.",
      "Delete any existing partition on the spare drive, then create one new partition that uses all the space.",
      "Format the new partition. Choose a file system that suits the drive and give it a clear label such as TRAINING.",
      "Open the drive in the file manager. Create a folder named TEST and copy one small file into it.",
      "Open the folder and check that the copied file opens. Compare its size with the original.",
      "Download the correct driver for your printer model and operating system. Note the driver version number.",
      "Run the driver installer and follow its steps. Connect or select the printer when it asks.",
      "Open the printer properties and print a test page. Check that the page is complete and readable.",
      "Open the printer driver settings and write down two features the driver offers, such as duplex or paper size.",
      "Safely eject the spare drive, then write your record sheet: drive size, file system, driver name and version, and the test result."
    ],
    "checks": [
      "I can explain the difference between a partition and a file system.",
      "I can say which file system I chose and why.",
      "I can find the disk number and size before formatting.",
      "I can install a driver from the official source and record its version.",
      "I can print a test page and decide whether it is correct.",
      "I can say how I would roll back the driver if it caused a problem."
    ]
  },
  "quiz": [
    {
      "id": "m09-q01",
      "q": "Which part of an operating system shares the processor and memory between running programs and controls access to the hardware?",
      "options": [
        "The user interface",
        "The file system",
        "The kernel",
        "The driver"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m09-l1",
      "explain": "The kernel is the core of the operating system and manages processor time, memory and devices. The file system only organises stored data, and a driver serves one device."
    },
    {
      "id": "m09-q02",
      "q": "What is a driver?",
      "options": [
        "Software that lets the system talk to one kind of device",
        "A stored copy of the whole operating system kept on a USB stick",
        "The built-in tool that is used to divide a hard drive into parts",
        "A special user account that is allowed to install new software"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m09-l1",
      "explain": "A driver translates general operating system requests into signals one device understands. It is not an account type or a disk tool, although people sometimes confuse it with the administrator who installs it."
    },
    {
      "id": "m09-q03",
      "q": "A customer says their computer works normally for them but cannot change system settings when their colleague uses it. Both people have their own accounts. What is the most likely explanation?",
      "options": [
        "The colleague's hard drive is damaged, so it cannot save any settings",
        "The operating system is out of date, so system settings are locked",
        "The kernel has stopped working for the second account only",
        "The colleague has a standard account, the customer an administrator"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m09-l1",
      "explain": "Standard accounts cannot make system-wide changes, while administrator accounts can. A damaged drive or old operating system would affect both users, not just one."
    },
    {
      "id": "m09-q04",
      "q": "Which statement about firmware is correct?",
      "options": [
        "It is software stored inside a machine such as a copier controller",
        "It is the part of Windows that draws windows and icons",
        "It is another name for a user profile",
        "It is only used in desktop computers and never in printers"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m09-l1",
      "explain": "Firmware is the software held inside a device to control its hardware, and printers and copiers use it. It is not the user interface, which is a separate layer of an operating system."
    },
    {
      "id": "m09-q05",
      "q": "Why does an operating system keep each running program's memory separate?",
      "options": [
        "To make the screen refresh faster",
        "To save disk space on the file system",
        "So that one program that fails should not damage the others",
        "Because a processor can only use one block of memory at a time"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m09-l1",
      "explain": "Separate memory gives protection, so a crash in one program does not bring down the rest. It does not affect screen speed or disk space, and processors can use many memory blocks."
    },
    {
      "id": "m09-q06",
      "q": "What is the difference between a partition and a format?",
      "options": [
        "A partition is a backup copy of data, and a format is the original",
        "A partition erases viruses, and a format divides the drive into slices",
        "Both words mean the same thing, so there is no real difference",
        "A partition is a slice of a drive. A format writes a file system"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m09-l2",
      "explain": "You first make a slice of the drive, then format it so the operating system can store files there. A backup is a separate copy and neither step is a backup."
    },
    {
      "id": "m09-q07",
      "q": "A customer wants to store one video file of 6 GiB on a USB stick formatted as FAT32. What will happen?",
      "options": [
        "It will work because FAT32 has no limit on the size of one file",
        "It will fail because FAT32 cannot hold a single file of 4 GiB or more",
        "It will work, but only if the file is first compressed into a ZIP archive on the same drive",
        "It will work, but the file will be marked read-only by the system"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m09-l2",
      "explain": "FAT32 limits a single file to just under 4 GiB, so a 6 GiB file cannot be stored. Compression rarely shrinks a video much, so the better fix is to reformat the stick as exFAT or NTFS after backing up its contents."
    },
    {
      "id": "m09-q08",
      "q": "Which file system is built for Windows system drives and offers permissions and a journal for crash recovery?",
      "options": [
        "NTFS",
        "FAT32",
        "exFAT",
        "ext4"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m09-l2",
      "explain": "NTFS has permissions and a journal and is the usual Windows choice. FAT32 and exFAT have no permissions. ext4 has them but belongs to Linux."
    },
    {
      "id": "m09-q09",
      "q": "A copier will not read a customer's USB stick, but it reads other sticks. The customer's stick is formatted with a file system the copier's manual does not list. What is the best next step?",
      "options": [
        "Replace the copier's scanner glass and then test the stick again",
        "Reinstall the printer driver on the customer's computer today",
        "Back up the stick, then reformat it with a supported file system",
        "Reset the copier's counters and restart the machine to clear it"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m09-l2",
      "explain": "The machine works with other sticks, so the unsupported file system is the likely cause. Back up first because reformatting erases data. A driver on the customer's PC has nothing to do with the copier reading a stick."
    },
    {
      "id": "m09-q10",
      "q": "After a quick format of a drive, what is true about the old data?",
      "options": [
        "It is permanently destroyed because the drive is rewritten",
        "It is moved into a hidden folder on the same partition",
        "It can often still be recovered with suitable software",
        "It is encrypted automatically so that no one can read it"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m09-l2",
      "explain": "A quick format builds a new empty file system but leaves most of the old data on the surface. To destroy data on purpose, use a proper secure-erase method."
    },
    {
      "id": "m09-q11",
      "q": "Which of these is a real backup of a customer's documents?",
      "options": [
        "A second folder on the same hard drive",
        "A copy on a separate external drive, checked by opening some files",
        "A shortcut to the folder on the desktop",
        "The recycle bin"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m09-l2",
      "explain": "A real backup is on a separate device and has been tested. A second folder on the same drive is lost together with the original if the drive fails."
    },
    {
      "id": "m09-q12",
      "q": "You copy a folder of 1,250 files from a customer's drive to a backup drive. The copy shows 1,243 files. What should you do?",
      "options": [
        "Accept the copy because a difference of seven files is small and probably unimportant",
        "Delete the original so that the two file counts match",
        "Compress the backup to make it smaller, then count again",
        "Find the missing files and copy them before you start the repair"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m09-l2",
      "explain": "Missing files mean the backup is incomplete and the repair could destroy those 7 files. Never delete the original, and compression does not fix missing files."
    },
    {
      "id": "m09-q13",
      "q": "Which command lists the files in a folder in the Windows Command Prompt?",
      "options": [
        "ls -l",
        "pwd",
        "dir",
        "cp"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m09-l3",
      "explain": "The command dir lists files on Windows. The command ls -l does the same on Linux, which is the tempting wrong choice, and pwd shows the current folder on Linux."
    },
    {
      "id": "m09-q14",
      "q": "A Linux file has the permission 644. What can people other than the owner and group do with it?",
      "options": [
        "Read it only",
        "Read and write it",
        "Read, write and run it",
        "Nothing at all"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m09-l3",
      "explain": "The last digit 4 means read only for others. A 6 would give read and write, and 7 would add execute, but the last digit here is 4."
    },
    {
      "id": "m09-q15",
      "q": "What does the Linux permission text rwxr-x--- mean?",
      "options": [
        "The owner can only read it. The group can read, write and run it.",
        "Everyone can read, write and run it, whatever their group.",
        "The owner can read, write, run it. The group can read and run it. Others have none.",
        "The owner and group can read and write it. Others can run it only."
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m09-l3",
      "explain": "Reading in groups of three: owner rwx, group r-x, others none. The numeric form is 750."
    },
    {
      "id": "m09-q16",
      "q": "Which command shows the IP address settings of a Windows computer?",
      "options": [
        "ip addr",
        "ipconfig /all",
        "ls -l",
        "chmod 644"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m09-l3",
      "explain": "On Windows, ipconfig /all lists the network adapters and their addresses. The command ip addr is the Linux equivalent, so it is tempting but not for Windows."
    },
    {
      "id": "m09-q17",
      "q": "You are about to type a delete command in a folder on a customer's computer. What is the safest habit?",
      "options": [
        "Run it quickly, because deleted files can always be restored from the recycle bin",
        "Run it from a different folder so it does not affect the current one",
        "Check the folder you are in and read the whole command before pressing Enter",
        "Add the word force so the command cannot fail"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m09-l3",
      "explain": "Command-line deletes act at once and may skip the recycle bin, so check your location and the command first. Running from another folder does not make the command safer."
    },
    {
      "id": "m09-q18",
      "q": "A technician types a path with backslashes and a drive letter such as C:\\Users\\Ama. Which system does this path style belong to?",
      "options": [
        "Linux",
        "Windows",
        "A printer's internal controller only",
        "Any system, because all paths look like this"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m09-l3",
      "explain": "Windows uses backslashes and drive letters. Linux uses forward slashes in one tree that starts at a single root."
    },
    {
      "id": "m09-q19",
      "q": "What does the command ping 192.168.1.1 do?",
      "options": [
        "It sends test messages and shows whether that address replies",
        "It deletes the device that has that address from the network and frees the address",
        "It installs a driver for the device that has that address",
        "It copies the files from that address to your computer"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m09-l3",
      "explain": "Ping tests whether another device on the network replies and how long it takes. It does not copy files or install anything."
    },
    {
      "id": "m09-q20",
      "q": "What does a page description language such as PCL or PostScript do?",
      "options": [
        "It encrypts the printed page so that no one else can read it",
        "It describes the text, lines, pictures and fonts of a page for the controller",
        "It sets the paper size by measuring the paper in the tray",
        "It controls the fuser temperature while a page is printing"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m09-l4",
      "explain": "A PDL describes the page contents and the controller turns them into the image printed. It does not control hardware temperatures or paper measurement."
    },
    {
      "id": "m09-q21",
      "q": "A customer prints one page and the printer outputs many pages of strange symbols. The printer is set up with a driver for a different language than the printer understands. What is the best fix?",
      "options": [
        "Replace the toner cartridge with a new one",
        "Clean the paper rollers with a lint-free cloth",
        "Reset the page counter and restart the printer",
        "Install the correct driver for the exact printer model"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m09-l4",
      "explain": "Pages of strange characters usually mean the printer received data it does not understand, so a matching driver is needed. Toner and rollers cause print quality or feeding faults, not wrong characters."
    },
    {
      "id": "m09-q22",
      "q": "Where should you download a printer driver from?",
      "options": [
        "Any website that offers it free of charge",
        "A file sent by an unknown person by email",
        "A friend's USB stick, since it worked on their computer",
        "The printer maker's official support site"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m09-l4",
      "explain": "Drivers run with high privileges, so unknown sources can carry malware. A driver that worked on a friend's computer may be for another model or system."
    },
    {
      "id": "m09-q23",
      "q": "After a driver update, a printer that used to work gives errors. What can you do to return quickly to the earlier state?",
      "options": [
        "Roll back to the previous driver",
        "Format the computer's drive and reinstall the operating system",
        "Replace the printer",
        "Delete the user's profile"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m09-l4",
      "explain": "Rolling back restores the earlier driver and is a small, reversible step. Formatting or deleting a profile destroys data and is far too drastic."
    },
    {
      "id": "m09-q24",
      "q": "A customer has a copy of expensive design software from a friend and asks you to install it. What is the right response?",
      "options": [
        "Explain that you cannot install unlicensed software and suggest a licence",
        "Install it, because the customer owns the computer and its contents",
        "Install it if the customer promises to buy a licence at a later date and signs a note",
        "Install it, but remove the licence check so that no one can notice"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m09-l4",
      "explain": "Installing unlicensed software is illegal and often carries malware, and the technician shares the responsibility. A promise to buy later does not make the installation legal today."
    },
    {
      "id": "m09-q25",
      "q": "A low-cost printer is described as host-based. What does that mean?",
      "options": [
        "It can only print from a server that is kept in another building",
        "The computer builds the page and sends finished image data to the printer",
        "It stores every page in its own memory before any printing starts",
        "It works without any driver because the printer does all the work"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m09-l4",
      "explain": "In a host-based printer the computer does the page processing, so it works only with the maker's driver. A generic driver is usually not enough."
    },
    {
      "id": "m09-q26",
      "q": "What is the principle of least privilege?",
      "options": [
        "Every user should share the same administrator login so that nothing is ever blocked",
        "Remove all passwords to make logging in much faster",
        "Give each user only the rights they need for their work",
        "Allow only one account on each computer"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m09-l5",
      "explain": "Least privilege limits the harm from mistakes and malware. A shared administrator login does the opposite and makes it impossible to see who did what."
    },
    {
      "id": "m09-q27",
      "q": "A shop uses one shared login named OFFICE for six staff, and money has gone missing from a stock record. Why is this arrangement a problem?",
      "options": [
        "The computer will run more slowly with a shared login",
        "Shared logins cannot have passwords",
        "You cannot tell which person made each change",
        "Windows only allows one person to use a login per day"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m09-l5",
      "explain": "Individual accounts create a record of who did what. Shared logins can have passwords, but they hide the person responsible."
    },
    {
      "id": "m09-q28",
      "q": "A computer that receives scans from a copier over the network keeps failing in the afternoon. Its power settings put it to sleep after 30 minutes. What should you change?",
      "options": [
        "Turn off the firewall so the copier is always allowed in",
        "Set the computer not to sleep while it is plugged in",
        "Delete the user profile and create a new one",
        "Install a second copy of the operating system"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m09-l5",
      "explain": "A sleeping computer cannot be reached over the network, so the copier cannot deliver the scan. Turning off the firewall is a security risk and would not stop the sleep."
    },
    {
      "id": "m09-q29",
      "q": "What is a user profile?",
      "options": [
        "The folder of files and settings that belongs to one account",
        "The photo that is shown on the login screen",
        "The list of all the programs installed on the computer",
        "A report of how fast the computer is running"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m09-l5",
      "explain": "A profile holds an account's desktop, documents and settings. Because it is separate for each account, one person's changes do not affect another."
    },
    {
      "id": "m09-q30",
      "q": "You are about to change several settings on a customer's computer. What should you do first?",
      "options": [
        "Record the original values and ask permission",
        "Change them all together, then watch what happens",
        "Reset everything on the computer to its factory state",
        "Disable the anti-malware software while you work"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m09-l5",
      "explain": "Recording the original values lets you undo a change, and the customer may depend on the old setting. Changing everything at once makes it hard to find the cause of a new problem."
    },
    {
      "id": "m09-q31",
      "q": "A computer starts to load the operating system, then shows an error before the desktop appears. Which cause is most likely?",
      "options": [
        "The operating system, a driver or a start-up program has a problem",
        "The power supply unit is missing or has failed completely",
        "The monitor is not plugged in or its cable is loose",
        "The keyboard cable is loose, so the computer will not start"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m09-l6",
      "explain": "Reaching the loading stage shows the power, monitor and firmware work. A fault after that point points to the operating system or software it loads."
    },
    {
      "id": "m09-q32",
      "q": "A fault disappears when the computer starts in safe mode. What does this suggest?",
      "options": [
        "The processor is overheating when the full system loads",
        "The hard drive has no free space left for the swap file",
        "The mains supply voltage is unstable under a full load",
        "A driver, start-up program or service that safe mode skips is the cause"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m09-l6",
      "explain": "Safe mode loads only basic drivers and services, so a fault that vanishes there points to something it left out. A hardware fault would normally remain in safe mode."
    },
    {
      "id": "m09-q33",
      "q": "What is the main purpose of an event log?",
      "options": [
        "To record errors and warnings with the time they happened",
        "To store the customer's documents in a safe place",
        "To list the files that still need to be backed up",
        "To count the pages that each user has printed"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m09-l6",
      "explain": "Event logs help you find what happened and when, so you can match an error to the time the fault started. They are not a backup or a page counter."
    },
    {
      "id": "m09-q34",
      "q": "A new driver breaks a computer's printing. The customer also asks if a restore point will bring back a document they deleted last week. What is the correct reply?",
      "options": [
        "Yes, a restore point restores every file the user ever deleted",
        "No. It returns system settings and drivers, and is not a backup of files",
        "Yes, but only if the computer has been started in safe mode",
        "No. A restore point can only be used on a brand new computer"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m09-l6",
      "explain": "Restore points save system state such as settings and drivers and do not normally protect personal documents. That is why a separate backup is essential."
    },
    {
      "id": "m09-q35",
      "q": "Which step belongs first when you start repairing a customer's computer?",
      "options": [
        "Reinstall the operating system",
        "Remove all the user accounts",
        "Back up the important data",
        "Delete the temporary files"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m09-l6",
      "explain": "Back up first so that a mistake does not cost the customer their data. Reinstalling or deleting before a backup can destroy files that cannot be recovered."
    },
    {
      "id": "m09-q36",
      "q": "A computer is slow, shows pop-up messages and has programs the customer does not recognise. What should you do first?",
      "options": [
        "Keep it on the network so that it can download updates, then ignore the pop-ups",
        "Delete every unknown file in the system folder",
        "Disconnect it from the network and scan with up-to-date tools",
        "Format the drive straight away without telling the customer"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m09-l6",
      "explain": "Disconnecting stops malware spreading or sending data out. Deleting unknown system files can break the system, and formatting without a backup or the customer's agreement is not acceptable."
    }
  ],
  "cards": [
    {
      "id": "m09-c01",
      "front": "Operating system",
      "back": "The main software of a computer. It sits between hardware and programs and manages processor, memory, devices, files and users.",
      "lesson": "m09-l1"
    },
    {
      "id": "m09-c02",
      "front": "Kernel",
      "back": "The core of the operating system. It starts programs, shares processor and memory, and controls access to hardware.",
      "lesson": "m09-l1"
    },
    {
      "id": "m09-c03",
      "front": "Multitasking",
      "back": "Running many programs at once by switching between them very fast.",
      "lesson": "m09-l1"
    },
    {
      "id": "m09-c04",
      "front": "Administrator (root) account",
      "back": "An account that can install software and change system settings. Linux calls it root.",
      "lesson": "m09-l1"
    },
    {
      "id": "m09-c05",
      "front": "Firmware",
      "back": "Software stored inside a device, such as a copier controller, that controls its hardware.",
      "lesson": "m09-l1"
    },
    {
      "id": "m09-c06",
      "front": "Partition",
      "back": "A slice of a drive that the operating system treats as a separate unit.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c07",
      "front": "Format",
      "back": "Writes a file system into a partition so that files can be stored.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c08",
      "front": "FAT32 file size limit",
      "back": "A single file must be smaller than 4 GiB. FAT32 also has no file permissions.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c09",
      "front": "exFAT: when is it used?",
      "back": "On large USB drives and memory cards. It handles very large files and is widely supported, but has no permissions.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c10",
      "front": "NTFS",
      "back": "The usual Windows file system. It has permissions, compression and a journal that helps recovery after a crash.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c11",
      "front": "Quick format vs full format",
      "back": "Quick format builds a new empty file system and leaves old data on the surface. Full format checks the surface and takes longer.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c12",
      "front": "What makes a real backup?",
      "back": "A copy on a separate device that you have tested by opening files or restoring them.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c13",
      "front": "File attribute: read-only",
      "back": "A flag meaning the file cannot be changed until the flag is removed.",
      "lesson": "m09-l2"
    },
    {
      "id": "m09-c14",
      "front": "Command: list files on Windows and Linux",
      "back": "Windows: dir. Linux: ls -l.",
      "lesson": "m09-l3"
    },
    {
      "id": "m09-c15",
      "front": "Command: show IP settings on Windows and Linux",
      "back": "Windows: ipconfig /all. Linux: ip addr.",
      "lesson": "m09-l3"
    },
    {
      "id": "m09-c16",
      "front": "Linux permission values",
      "back": "Read = 4, write = 2, execute = 1. Add them for each of owner, group and others.",
      "lesson": "m09-l3"
    },
    {
      "id": "m09-c17",
      "front": "What does the permission 755 mean?",
      "back": "Owner can read, write and execute. Group and others can read and execute.",
      "lesson": "m09-l3"
    },
    {
      "id": "m09-c18",
      "front": "Path style: Windows vs Linux",
      "back": "Windows uses backslashes and drive letters, for example C:\\Users. Linux uses forward slashes in one tree from /.",
      "lesson": "m09-l3"
    },
    {
      "id": "m09-c19",
      "front": "Page description language (PDL)",
      "back": "A language that describes the text, lines, pictures and fonts of a page. PCL and PostScript are common examples.",
      "lesson": "m09-l4"
    },
    {
      "id": "m09-c20",
      "front": "Host-based printer",
      "back": "A printer that relies on the computer to build the page. It needs the maker's driver to work.",
      "lesson": "m09-l4"
    },
    {
      "id": "m09-c21",
      "front": "Symptom: pages of strange characters from a printer",
      "back": "Likely the wrong driver or language, so the printer cannot understand the data sent to it.",
      "lesson": "m09-l4"
    },
    {
      "id": "m09-c22",
      "front": "Driver rollback",
      "back": "Restoring the previous driver after a new one causes a fault. In Windows it is done in Device Manager.",
      "lesson": "m09-l4"
    },
    {
      "id": "m09-c23",
      "front": "Principle of least privilege",
      "back": "Give each user only the rights needed for their work.",
      "lesson": "m09-l5"
    },
    {
      "id": "m09-c24",
      "front": "User profile",
      "back": "The folder of settings and files that belongs to one account.",
      "lesson": "m09-l5"
    },
    {
      "id": "m09-c25",
      "front": "Start-up items",
      "back": "Programs that run automatically when the computer starts or a user signs in. Too many slow the start-up.",
      "lesson": "m09-l5"
    },
    {
      "id": "m09-c26",
      "front": "Safe order of work for a software fault",
      "back": "Ask questions, back up, test one idea, change one thing at a time, record, confirm with the customer.",
      "lesson": "m09-l6"
    },
    {
      "id": "m09-c27",
      "front": "Safe mode",
      "back": "Starts the operating system with only basic drivers and services. Useful for finding a bad driver or start-up program.",
      "lesson": "m09-l6"
    },
    {
      "id": "m09-c28",
      "front": "Restore point",
      "back": "A saved copy of system settings and drivers. It does not normally restore personal files, so it is not a backup.",
      "lesson": "m09-l6"
    },
    {
      "id": "m09-c29",
      "front": "First action when malware is suspected",
      "back": "Disconnect the computer from the network, then scan with up-to-date tools and tell the customer.",
      "lesson": "m09-l6"
    }
  ]
});

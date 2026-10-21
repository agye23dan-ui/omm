OMM.registerCases("m16", [
  {
    "id": "m16-d1",
    "title": "Customer calls: printer will not print",
    "level": 1,
    "lesson": "m16-l4",
    "report": "A customer phones the support line: the office printer will not print anything since this morning. They sound worried because they have an important document to send. You cannot see the printer. You have the customer on the phone and a ticket open. The printer is a network laser printer used by five people.",
    "checks": [
      { "id": "c1", "label": "Ask the customer to read out exactly what the printer panel says", "result": "The panel says Ready. There is no error message and no warning light.", "type": "key" },
      { "id": "c2", "label": "Ask whether other people in the office can print to this printer", "result": "Nobody else can print either. The problem affects everyone, not one computer.", "type": "key" },
      { "id": "c3", "label": "Ask the customer to print the configuration page from the panel and read out the IP address", "result": "The page prints and shows an IP address that is different from the address the computers use.", "type": "key" },
      { "id": "c4", "label": "Ask whether the router or the switch was restarted or changed since yesterday", "result": "The router was restarted after a power cut last night. The printer was left running.", "type": "key" },
      { "id": "c5", "label": "Ask the customer to describe what they have already tried", "result": "They restarted the computer twice and checked that there is paper.", "type": "useful" },
      { "id": "c6", "label": "Tell the customer to buy a new printer", "result": "You have not found a fault in the printer. This costs the customer money for no reason.", "type": "low" },
      { "id": "c7", "label": "Ask the customer to reinstall the operating system", "result": "This is a drastic step that risks their data and the cause is probably the printer address.", "type": "low" },
      { "id": "c8", "label": "Ask the customer to read out their email password so you can check their settings", "result": "Unsafe: you never need a customer's password. Asking for it puts their account at risk and teaches bad habits.", "type": "unsafe" },
      { "id": "c9", "label": "Ask the customer to check the cable and the link lights", "result": "The link light on the printer is lit and steady. The cable is plugged in.", "type": "useful" }
    ],
    "areas": [
      "The printer's network address",
      "The printer's paper tray",
      "The toner cartridge",
      "The computers' drivers"
    ],
    "area": 0,
    "faults": [
      "The printer got a new address from the router after the restart, so jobs go to the old one",
      "The toner cartridge is empty",
      "The paper tray is jammed",
      "The printer has a broken print head that was damaged by the power cut and the later restart"
    ],
    "fault": 0,
    "repairs": [
      "Guide the customer to update the printer port to the new address, and arrange a fixed address",
      "Tell the customer to buy a new printer, because the old one has clearly stopped working and call a supplier at once",
      "Ask the customer to replace the toner",
      "Send an engineer without any checks"
    ],
    "repair": 0,
    "verify": [
      "Ask the customer to print a test page, ask a second person to do the same, and agree what to do if it fails",
      "Ask the customer to say whether it works, then end the call and close the ticket straight away and write nothing in the ticket",
      "Close the ticket immediately",
      "Tell them to call back if it breaks"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The panel says Ready, everyone is affected and the printer's address differs from the one the computers use. This points to the address.",
      "fault": "A router restart can give a printer a different address. Computers still send jobs to the old address and nothing prints.",
      "repair": "Update the port to the new address and arrange a fixed address so it cannot change again. Do not suggest a new printer without evidence of a fault.",
      "verify": "Have the customer print a test page and ask a second person to do the same, then agree what to do if it fails again. A call is not finished until the customer has seen it work."
    }
  },
  {
    "id": "m16-d2",
    "title": "Caller asks for remote access to fix scan to email",
    "level": 2,
    "lesson": "m16-l3",
    "report": "A caller says they are the office manager and that scan to email on their multifunction product stopped working this morning. They ask you to take over their computer so you can fix it. You do not recognise their number and the ticket shows a different contact name. The company's policy asks for identity checks before remote access.",
    "checks": [
      { "id": "c1", "label": "Follow the identity check: ask for the account number and the name on the service contract", "result": "The caller gives a name that does not match the contract. They say the manager is out of the office and they cannot give the account number.", "type": "key" },
      { "id": "c2", "label": "Call back on the number held in the company records for the contract holder", "result": "The real manager answers, confirms the problem is real and says the caller is a colleague. They authorise access for that colleague.", "type": "key" },
      { "id": "c3", "label": "Ask the authorised person for permission and for the session to be started by them", "result": "The authorised person agrees to a session they start and can end at any time. The session is logged.", "type": "key" },
      { "id": "c4", "label": "Ask for the device's error message from the panel before connecting", "result": "The panel says the mail server rejected the login. The cause is likely a changed password.", "type": "key" },
      { "id": "c5", "label": "Explain what you will do and what you will not touch before connecting", "result": "The customer understands and agrees. You will only touch the scan settings.", "type": "useful" },
      { "id": "c6", "label": "Start the remote session right away because the caller sounds urgent", "result": "Unsafe: urgency is a common trick. Never connect without checking identity and permission.", "type": "unsafe" },
      { "id": "c7", "label": "Install a tool that gives you permanent unattended access to the computer", "result": "Unsafe: permanent access without clear permission is a security risk. Use a one-off session the customer starts.", "type": "unsafe" },
      { "id": "c8", "label": "Tell the caller to uninstall the mail program and reinstall it", "result": "This is a drastic step that wastes time and may lose data. The panel message points to a password.", "type": "low" },
      { "id": "c9", "label": "Reset the whole device from here", "result": "This would erase the settings of the whole office and does not fix a changed password.", "type": "low" }
    ],
    "areas": [
      "Verifying identity and permission before access",
      "The scanner glass",
      "The paper path",
      "The toner supply"
    ],
    "area": 0,
    "faults": [
      "The mail server password changed, so scan to email login is rejected",
      "The scanner lamp has failed",
      "The paper feed roller is worn",
      "The network cable is unplugged from the device so that it cannot reach the mail server"
    ],
    "fault": 0,
    "repairs": [
      "With permission, update the mail login through a session the customer starts, then end it",
      "Take over the computer without asking, so the customer does not have to do anything at all",
      "Reset the device to factory settings",
      "Install permanent access software"
    ],
    "repair": 0,
    "verify": [
      "Send a test scan to email, ask the customer to confirm it arrived, end the session and write the ticket note",
      "Leave the session open for later",
      "Assume it is fixed and hang up",
      "Close the ticket without a note"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Before any technical work, the first decision is whether you may connect at all. A mismatch in the contact name and no account number is a warning.",
      "fault": "The panel message says the mail server rejected the login. A password change is the likely cause of scan to email failing.",
      "repair": "Fix the login only after identity and permission are confirmed, using a session the customer starts and can end. Do not take over a computer without permission or leave permanent access.",
      "verify": "Send a test scan, have the customer confirm it arrived, end the session and write a ticket note. A fix you cannot prove, or an open session, leaves risk."
    }
  },
  {
    "id": "m16-d3",
    "title": "Copies skewed: fixing it over the phone",
    "level": 3,
    "lesson": "m16-l5",
    "report": "A customer says their copier is giving skewed copies, with the image tilted on the page. They are not technical. You cannot see the machine. They can print a test page and read the panel. A site visit costs the customer money, so you want to try a guided fix first and escalate only if it fails.",
    "checks": [
      { "id": "c1", "label": "Ask whether the skew happens on copies, prints or both, and from which tray", "result": "Both copies and prints are skewed, but only from tray 2. Tray 1 is fine.", "type": "key" },
      { "id": "c2", "label": "Ask the customer to describe the paper in tray 2 and how they loaded it", "result": "They loaded a thin ream by hand without squaring it. The paper is a different brand from before.", "type": "key" },
      { "id": "c3", "label": "Ask the customer to look at the paper guides in tray 2 and tell you what they see", "result": "The side guides are loose and the paper has room to move. The guides do not touch the paper.", "type": "key" },
      { "id": "c4", "label": "Give one-step instructions: empty the tray, square the stack, set the guides, refit it, print a test page", "result": "The customer follows each step and reads back each one. They print a test page from tray 2.", "type": "key" },
      { "id": "c5", "label": "Ask the customer to repeat the instructions back in their own words", "result": "They repeat them correctly and say what they have done. You have confirmed understanding.", "type": "useful" },
      { "id": "c6", "label": "Tell the customer to open the machine and adjust the registration rollers", "result": "Unsafe: the customer is not trained and the inside of the machine has hot, moving and live parts.", "type": "unsafe" },
      { "id": "c7", "label": "Send an engineer to site straight away", "result": "A visit would cost money and time when a simple guided fix might work. Escalate only if the guided fix fails.", "type": "low" },
      { "id": "c8", "label": "Tell the customer to ignore the skew and keep copying", "result": "The customer will waste paper and the problem will remain. You must offer a fix or escalate.", "type": "low" },
      { "id": "c9", "label": "Ask for a photo of the test page and the tray", "result": "The photo shows the tilt and the loose guides in the tray.", "type": "useful" }
    ],
    "areas": [
      "How the paper is loaded in tray 2",
      "The fuser",
      "The drum",
      "The scanner lamp and the glass that it shines through"
    ],
    "area": 0,
    "faults": [
      "Loose tray guides and unsquared paper let the sheet enter at an angle",
      "A worn registration roller that pushes the sheet through at an angle in the paper path",
      "A damaged drum",
      "A scanner fault"
    ],
    "fault": 0,
    "repairs": [
      "Guide the customer step by step to reload and square the paper and set the guides, then test",
      "Tell the customer to open the machine and adjust the rollers by hand until the page is straight",
      "Send an engineer at once",
      "Tell the customer to ignore it"
    ],
    "repair": 0,
    "verify": [
      "Have the customer print and read back the result, agree to call back if it returns, and add the details to the ticket and knowledge base",
      "Assume it is fixed",
      "Close the call without a note",
      "Ask them to email in a week"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Only tray 2 is skewed and the paper was loaded unsquared with loose guides. The loading is the first area to correct.",
      "fault": "Loose guides and unsquared paper let the sheet enter the path at an angle. That gives a tilted image.",
      "repair": "Give clear, numbered, one-step instructions and check that the customer understands. Do not send an untrained customer inside the machine, and do not book a visit before trying a safe guided fix.",
      "verify": "Ask the customer to print and describe the result, agree what happens if it returns, and write the ticket and knowledge base entry so the next call is faster."
    }
  }
]);

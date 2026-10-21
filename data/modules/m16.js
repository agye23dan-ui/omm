OMM.registerModule({
  "id": "m16",
  "summary": "Help customers fix office machines and network faults by phone, chat and remote tools, stay secure and honest while doing it, know when to send a technician, and write clear ticket records.",
  "outcomes": [
    "Decide which faults can be solved remotely, and explain support levels, first-contact resolution and tickets.",
    "Use clear phone and chat language, listen actively and calm an upset customer.",
    "Apply identity checks, consent and privacy rules in a remote session, and recognise a support scam.",
    "Collect information, reproduce a fault and run simple network checks, changing one thing at a time.",
    "Guide a customer through a fix in clear steps and decide when to escalate to a site visit.",
    "Write ticket notes and knowledge-base entries and close a case properly."
  ],
  "cheatsheet": [
    "First-contact resolution % = cases solved at first contact ÷ total cases × 100.",
    "Smoke or burning smell: switch off at the wall, unplug if safe, keep clear, escalate at once.",
    "Never ask a customer for a password or card number. The customer types any login themselves.",
    "Remote session order: verify who is calling, explain the plan, get consent, work, end the session, log it.",
    "Scam signs: unexpected call, fear, rush, payment by gift card, remote access straight away.",
    "Same network (mask 255.255.255.0): the first three numbers of the two IP addresses match.",
    "An address starting 169.254 means no DHCP server replied.",
    "Change one thing at a time, record each change, and test after every change.",
    "Never ask a customer to open covers, touch a fuser or work near mains. Send a technician."
  ],
  "lessons": [
    {
      "id": "m16-l1",
      "title": "Principles of remote support",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers what remote technical support is, which faults you can often solve without a visit, how support levels work, what first-contact resolution means and why every contact needs a ticket."
        },
        {
          "t": "h",
          "text": "What remote support is"
        },
        {
          "t": "p",
          "text": "**Remote technical support** means helping a customer with a machine or network problem without going to the site. You use a phone, chat, email or screen-sharing software. The customer is your hands and eyes, so you must guide them well."
        },
        {
          "t": "p",
          "text": "Many faults are settings or software problems. Others are broken parts. You need to tell the two apart early, because a visit is slow and costly, but a long remote attempt on a broken part wastes the customer's time."
        },
        {
          "t": "table",
          "head": [
            "Type of fault",
            "Remote or visit",
            "Reason"
          ],
          "rows": [
            [
              "Wrong paper size set for a tray",
              "Often remote",
              "The customer changes a setting on the panel"
            ],
            [
              "Printer not found after a router change",
              "Often remote",
              "Address and driver checks need no tools"
            ],
            [
              "Scan-to-email stopped working",
              "Often remote",
              "Server settings can be checked and corrected"
            ],
            [
              "Empty toner cartridge",
              "Often remote",
              "The customer can fit a new one when guided"
            ],
            [
              "Worn pick-up roller or broken gear",
              "Needs a visit",
              "A part must be replaced with tools"
            ],
            [
              "Fuser, power supply or board fault",
              "Needs a visit",
              "Needs a trained technician and test equipment"
            ],
            [
              "Smoke, burning smell, damaged cable",
              "Stop use now, then a visit",
              "It is a safety risk"
            ]
          ],
          "caption": "Which faults can be solved remotely"
        },
        {
          "t": "h",
          "text": "Support levels"
        },
        {
          "t": "p",
          "text": "Many companies share the work in **support levels**. The names differ, but the idea is the same."
        },
        {
          "t": "diagram",
          "name": "support-levels"
        },
        {
          "t": "ul",
          "items": [
            "**Level 1** (first line): takes the call, logs it and solves common problems from checklists.",
            "**Level 2**: has deeper skills, such as network and server settings, and takes cases Level 1 cannot solve.",
            "**Level 3**: specialists, or the manufacturer's own experts, for rare or complex faults.",
            "**Field service**: a technician who visits the site and repairs hardware."
          ]
        },
        {
          "t": "p",
          "text": "Passing a case to a higher level is called **escalation**. Escalating is not failure. It is the correct step when the case is beyond your skill, time limit or safety rules."
        },
        {
          "t": "h",
          "text": "First-contact resolution"
        },
        {
          "t": "p",
          "text": "**First-contact resolution (FCR)** means the problem is solved during the first call or chat, so the customer does not have to contact you again. It is good for customers and saves visits. Do not chase it at any cost. A wrong fix that fails later is worse than an honest escalation."
        },
        {
          "t": "formula",
          "text": "FCR % = cases solved at first contact ÷ total cases × 100",
          "caption": "First-contact resolution rate"
        },
        {
          "t": "example",
          "title": "Working out an FCR rate",
          "steps": [
            "In one week the help desk handles 80 cases. Of these, 60 are solved at first contact.",
            "60 ÷ 80 = 0.75, and 0.75 × 100 = 75%.",
            "Cases that needed another contact or a visit: 80 - 60 = 20. That is 25% of the total."
          ]
        },
        {
          "t": "h",
          "text": "Tickets"
        },
        {
          "t": "p",
          "text": "A **ticket** is the record of one case. It holds the customer, the machine, the fault, what was done and the status. Typical statuses are open, in progress, waiting for customer, escalated, resolved and closed. Every contact gets a ticket, even a two-minute call. Without it, the next person has no history."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "If a customer reports smoke, sparks, a burning smell, a hot casing or a damaged mains cable, tell them to switch off at the wall socket and unplug the machine only if it is safe to reach. They must keep clear and must not open the machine. Then arrange a visit."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Decide early whether the fault looks like a setting or a broken part. Settings can be fixed remotely. Broken parts and safety risks need a technician."
        }
      ]
    },
    {
      "id": "m16-l2",
      "title": "Communicating by phone and chat",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to speak and write to customers on the phone and in chat, how to listen, which questions to ask and how to deal with an upset customer."
        },
        {
          "t": "h",
          "text": "Phone etiquette"
        },
        {
          "t": "p",
          "text": "The customer cannot see you, so your voice carries everything. Speak clearly and a little slower than normal. Smile when you speak, because it changes your tone."
        },
        {
          "t": "ul",
          "items": [
            "Greet the customer, give your company name and your own name.",
            "Ask for the customer's name and use it.",
            "Ask permission before putting a customer on hold, and say how long you will be.",
            "Do not interrupt. Let the customer finish.",
            "Say numbers and codes one digit at a time, and ask the customer to read them back.",
            "End by summarising what you did, what happens next and the ticket number."
          ]
        },
        {
          "t": "h",
          "text": "Active listening and good questions"
        },
        {
          "t": "p",
          "text": "**Active listening** means giving the customer your full attention, noting the key facts and repeating them back to check you understood. It prevents wrong guesses. Do not finish the customer's sentences."
        },
        {
          "t": "table",
          "head": [
            "Question type",
            "Example",
            "Use it to"
          ],
          "rows": [
            [
              "Open",
              "What happens when you press print?",
              "Start, and get the whole story"
            ],
            [
              "Closed",
              "Is the power light on?",
              "Check one fact quickly"
            ],
            [
              "Exact words",
              "Can you read me exactly what the display says?",
              "Get the real error message"
            ],
            [
              "Checking back",
              "So the job reaches the printer but nothing prints. Is that right?",
              "Confirm you understood"
            ]
          ],
          "caption": "Useful kinds of question"
        },
        {
          "t": "p",
          "text": "Avoid **leading questions** such as 'It is a paper jam, right?'. They put your idea into the customer's mouth, and a polite customer may just say yes."
        },
        {
          "t": "h",
          "text": "Plain language and chat"
        },
        {
          "t": "p",
          "text": "Many customers are not technical, and many speak English as a second or third language. Use short sentences and common words. Say 'press the Menu button' and not 'navigate to the menu'. Avoid slang and abbreviations unless the customer uses them first."
        },
        {
          "t": "p",
          "text": "In **chat**, the customer cannot hear your tone and may reply slowly. Send short messages with one step each. Wait for the reply before sending the next step. Do not use capital letters for whole sentences, because they read as shouting. Be polite and keep jokes out of it."
        },
        {
          "t": "h",
          "text": "Calming an upset customer"
        },
        {
          "t": "p",
          "text": "A customer without a working machine may be worried about lost work or money. Their anger is usually about the situation, not about you. Follow these steps."
        },
        {
          "t": "ol",
          "items": [
            "Let the customer speak. Do not interrupt or defend yourself.",
            "Acknowledge the feeling: 'I understand this is frustrating, especially when you have work waiting.'",
            "Apologise for the problem, without blaming a person.",
            "Say what you will do and when, and then keep that promise.",
            "If the customer becomes abusive, warn them politely once, and then pass the call to your supervisor."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Never tell an angry customer to calm down. It sounds like blame. Say what you will do next instead."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Listen first, then ask exact questions, then use short plain words. Check understanding often."
        }
      ]
    },
    {
      "id": "m16-l3",
      "title": "Remote support tools and security",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers the tools used in remote support, the rules of consent and identity, the risks of unattended access, logging and privacy, and how to avoid helping a scammer."
        },
        {
          "t": "h",
          "text": "Remote support tools"
        },
        {
          "t": "p",
          "text": "**Remote desktop software** lets you see, and sometimes control, a customer's computer screen over the internet. **Screen sharing** only lets you view it. Both are useful for driver installs, print queue problems and settings on a computer. Many machines also have a built-in web page for settings. It usually works only from inside the customer's own network, unless the customer has set up a secure link."
        },
        {
          "t": "h",
          "text": "Consent and identity rules"
        },
        {
          "t": "p",
          "text": "A remote session gives you power over a customer's computer, which may hold private data. Follow these rules every time."
        },
        {
          "t": "ol",
          "items": [
            "Verify who is calling. Ask for the ticket number, name, company and machine serial number, and compare them with your records. If you are unsure, call back on the number held on file for the account.",
            "Explain what you want to do and why, in plain words.",
            "Let the customer start the session, for example by reading you a one-time code or accepting your invitation.",
            "Get clear agreement before you connect. The customer may watch and may end the session at any time.",
            "Open only what the task needs, such as printer settings or the print queue. Do not open personal files, email or banking.",
            "End the session when the work is done and close the tool."
          ]
        },
        {
          "t": "table",
          "head": [
            "Do",
            "Do not"
          ],
          "rows": [
            [
              "Ask the customer to type any login themselves",
              "Ask for a password, or have it read out or sent in chat"
            ],
            [
              "Send payment requests through the official invoice process",
              "Ask for card details on a call or in chat"
            ],
            [
              "Tell the customer what you are doing as you do it",
              "Work silently or hide windows"
            ],
            [
              "Tell the customer if a session is recorded",
              "Record without telling them"
            ]
          ],
          "caption": "Remote session conduct"
        },
        {
          "t": "h",
          "text": "Unattended access, logging and privacy"
        },
        {
          "t": "p",
          "text": "**Unattended access** lets you connect when nobody is at the computer. It saves time, but it is risky. If your account is weak or stolen, an attacker can reach every customer who allowed it. Use it only with a written agreement from the customer, a strong unique password and two-step verification, and only for the access that is needed."
        },
        {
          "t": "p",
          "text": "**Logging** means writing down who connected, when, why and what was done. Put the start and end times in the ticket. Private data may appear on the screen, including scanned documents. Do not copy, keep or share it. Follow your country's data protection law and your employer's rules."
        },
        {
          "t": "h",
          "text": "Support scams"
        },
        {
          "t": "p",
          "text": "A **tech-support scam** is a fraud in which a caller pretends to be from a support company, says the customer's computer has a virus, asks for remote access and then asks for payment, often in gift cards or by transfer. Teach your customers to spot the signs."
        },
        {
          "t": "ul",
          "items": [
            "The call was not expected and no ticket exists.",
            "The caller creates fear or hurries the customer.",
            "The caller wants remote access or a code straight away.",
            "The caller asks for payment by gift card, cash transfer or card details over the phone."
          ]
        },
        {
          "t": "p",
          "text": "Real support only contacts a customer about an open ticket, quotes its number and welcomes a call back on the number printed on the contract or invoice. Scammers may also phone you, pretending to be a customer. Verify the caller before you reveal any information."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "A genuine support agent never asks for a customer's password or card number. If anyone does, end the call, do not give access, and check using the contact details on your own contract or invoice."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Identity first, then consent, then only the work that is needed, then end the session and log it."
        }
      ]
    },
    {
      "id": "m16-l4",
      "title": "Structured remote diagnosis",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to collect information, reproduce a fault, use configuration pages and basic network checks, and make changes in a safe order."
        },
        {
          "t": "h",
          "text": "Collect information first"
        },
        {
          "t": "p",
          "text": "Do not guess. Collect facts before you change anything."
        },
        {
          "t": "diagram",
          "name": "remote-support-flow"
        },
        {
          "t": "ul",
          "items": [
            "The machine make, model and serial number.",
            "The exact words of the error message or code.",
            "When the fault started, and what changed just before: a new router, a moved machine, a software update, a new cartridge.",
            "Who is affected: one person or everyone, one tray or all trays, one program or all programs.",
            "What the customer has already tried."
          ]
        },
        {
          "t": "p",
          "text": "Ask the customer to print the **configuration page** (also called a status or settings report) from the panel. It usually shows the IP address, the **firmware** version (the machine's built-in software), page counters and installed options. Check the manufacturer's service manual or user guide for how to print it on that model. If a customer sends a photo of the display, ask for the display only, because a wider photo may show private papers."
        },
        {
          "t": "h",
          "text": "Reproduce and isolate"
        },
        {
          "t": "p",
          "text": "Ask the customer to repeat the fault while you listen or watch. A fault you can repeat is a fault you can test. Then split the system into parts."
        },
        {
          "t": "table",
          "head": [
            "Test",
            "If it works",
            "If it fails"
          ],
          "rows": [
            [
              "Make a copy",
              "Scanner and print engine are fine; look at network, driver or settings",
              "Look for a hardware fault"
            ],
            [
              "Print the configuration page from the panel",
              "The machine can print by itself",
              "Hardware, paper or consumable problem"
            ],
            [
              "Print from another computer",
              "The first computer has a setting or driver fault",
              "The machine or network is at fault"
            ]
          ],
          "caption": "Splitting a printing fault into parts"
        },
        {
          "t": "h",
          "text": "Basic network checks"
        },
        {
          "t": "p",
          "text": "First check that the link light on the network socket is on. Then compare IP addresses. With the usual mask `255.255.255.0`, two devices are on the same network only if the first three numbers of their addresses match."
        },
        {
          "t": "example",
          "title": "Are the laptop and printer on the same network?",
          "steps": [
            "The laptop shows 192.168.1.50 with mask 255.255.255.0. The printer's configuration page shows 192.168.2.20.",
            "Compare the first three numbers: 192.168.1 for the laptop and 192.168.2 for the printer.",
            "They differ, so the devices are on different networks. The laptop cannot reach the printer directly.",
            "If the printer showed 192.168.1.20, the first three numbers would match, and the address would be fine."
          ]
        },
        {
          "t": "p",
          "text": "An address that starts with 169.254 means the device asked for an address from a **DHCP** server (the device that hands out addresses) and got no reply, so it gave itself one. Look at the cable, the switch and the DHCP server."
        },
        {
          "t": "p",
          "text": "**Ping** sends small test messages to an address and shows whether replies come back. For example, type `ping 192.168.1.20`. Count the replies. If 20 are sent and 17 return, 3 were lost. Loss is 3 ÷ 20 = 0.15, which is 15%. Any steady loss points to a bad cable, a weak wireless signal or a busy network."
        },
        {
          "t": "h",
          "text": "One change at a time"
        },
        {
          "t": "p",
          "text": "Change one thing, test, and write down the result before the next change. If you change several things, you will not know which one fixed the fault, or which one caused a new fault. Note the old value before you change a setting, so you can put it back."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Before a factory reset, warn the customer that it can erase the network address, the address book and other settings. Check they are recorded or backed up, and get agreement first."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Facts first, then isolate the fault, then one change at a time, with a test and a note after each."
        }
      ]
    },
    {
      "id": "m16-l5",
      "title": "Guiding a customer through a fix",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to give clear instructions to a customer, how to check that they understood, which tasks a customer may safely do and when to stop and escalate to a site visit."
        },
        {
          "t": "h",
          "text": "Giving clear instructions"
        },
        {
          "t": "p",
          "text": "You cannot see what the customer sees. Give one action per step and use names and places the customer can see, such as 'the green Start button below the screen'. Say what they should expect afterwards. Then ask them to tell you what they see."
        },
        {
          "t": "ul",
          "items": [
            "Number the steps and give them one at a time.",
            "Use the same word for the same thing every time.",
            "Say what the screen should show after each step.",
            "Pause and let the customer finish before you speak again.",
            "Warn the customer before any step that has a risk, such as losing settings."
          ]
        },
        {
          "t": "example",
          "title": "A sample script: restarting a printer",
          "steps": [
            "'Please press the power button on the front once. Tell me what the screen does.' Expect: the screen goes dark.",
            "'Wait about 30 seconds. Check the manufacturer's guidance for the exact time on your model.'",
            "'Now press the power button again and wait. Tell me when the screen says Ready.'",
            "'Please send one test page from your computer and tell me what happens.'"
          ]
        },
        {
          "t": "h",
          "text": "Checking understanding"
        },
        {
          "t": "p",
          "text": "'Do you understand?' nearly always gets 'yes', even when the customer is lost. Use **teach-back** instead. Ask: 'Please tell me what you are going to do next.' If the answer is wrong, the fault is in your instruction, so explain again in a different way."
        },
        {
          "t": "h",
          "text": "What a customer may safely do"
        },
        {
          "t": "p",
          "text": "Customers are not trained for the hazards inside office machines. Ask them only for safe actions."
        },
        {
          "t": "table",
          "head": [
            "Safe to ask",
            "Never ask"
          ],
          "rows": [
            [
              "Press panel buttons, read the display, print a report",
              "Remove a cover that needs a tool"
            ],
            [
              "Load paper, fit a new cartridge as the user guide shows",
              "Touch the fuser or any part that may be hot"
            ],
            [
              "Clear a paper jam that the user guide shows how to reach",
              "Work near the power supply or defeat an interlock"
            ],
            [
              "Switch off and on, check cables are firmly plugged in",
              "Work on the machine while it is connected to mains power, beyond normal use"
            ]
          ],
          "caption": "Tasks for a customer"
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "If a customer offers to open a cover and look inside the power supply, say no. Mains voltage, stored charge and a hot fuser can injure an untrained person, even when the machine is unplugged. Arrange a visit."
        },
        {
          "t": "h",
          "text": "When to stop and escalate"
        },
        {
          "t": "p",
          "text": "Stop and escalate when one of these happens."
        },
        {
          "t": "ul",
          "items": [
            "There is a safety risk: smoke, smell, heat or damage.",
            "The signs point to a broken part, such as grinding, a snapping sound or a repeated jam in one place.",
            "The next step is not safe for the customer to do.",
            "Two or three careful attempts have not worked.",
            "The fix needs a part, a tool or a skill you do not have."
          ]
        },
        {
          "t": "p",
          "text": "Tell the customer honestly what you think is wrong, what happens next and how long it should take. Do not promise a result you cannot guarantee. Pass full notes to the technician, so the customer does not have to tell the story twice."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Keep your voice steady when you escalate. The customer should hear a plan, not a defeat."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "One step, one check. Customers do safe, simple tasks only. Escalate early when safety or hardware is involved."
        }
      ]
    },
    {
      "id": "m16-l6",
      "title": "Records and follow-up",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to write ticket notes, how to build knowledge-base entries, how to close a case properly and how escalation rules work."
        },
        {
          "t": "h",
          "text": "Writing ticket notes"
        },
        {
          "t": "p",
          "text": "Write the note while the call is fresh. It should let a colleague who was not on the call carry on without asking the customer again."
        },
        {
          "t": "ul",
          "items": [
            "Customer, contact person, machine make, model and serial number.",
            "The fault in the customer's words, and any error code.",
            "Firmware version and other facts from the configuration page.",
            "What you checked, and the result of each check.",
            "What you changed, including the old and new values.",
            "The result of the final test, and the next step.",
            "Remote session consent, start time and end time, if you used one.",
            "Time spent on the case."
          ]
        },
        {
          "t": "table",
          "head": [
            "Poor note",
            "Better note"
          ],
          "rows": [
            [
              "Printer broken. Fixed.",
              "Copy works, print from laptop fails. Printer address 192.168.2.20, laptop 192.168.1.50. Set printer to automatic address. Test page printed."
            ],
            [
              "Network problem.",
              "Ping to printer: 20 sent, 17 returned. Cable replaced by customer. Ping then 20 of 20."
            ],
            [
              "Customer upset.",
              "Customer reported third failure this month. Apologised, escalated to a visit."
            ]
          ],
          "caption": "Writing useful notes"
        },
        {
          "t": "p",
          "text": "Write facts, not blame or guesses. Never put passwords or payment card numbers in a ticket."
        },
        {
          "t": "example",
          "title": "Time spent on a remote session",
          "steps": [
            "The session started at 10:05 and ended at 10:38.",
            "10:38 minus 10:05 = 33 minutes.",
            "Write '10:05 to 10:38, 33 min' in the ticket, with the customer's consent noted."
          ]
        },
        {
          "t": "h",
          "text": "Knowledge-base entries"
        },
        {
          "t": "p",
          "text": "A **knowledge-base article** is a short how-to that helps the next person solve the same problem faster. Write one when you had to search for a solution, or when a fault keeps coming back."
        },
        {
          "t": "ul",
          "items": [
            "A title in the customer's words, such as 'Printer not found after router change'.",
            "The symptom, and the cause.",
            "Numbered steps to fix it.",
            "A check that the fix worked.",
            "The models and firmware versions it covers."
          ]
        },
        {
          "t": "p",
          "text": "Remove customer names and private data. Review the article when firmware or software changes, since old advice can cause harm."
        },
        {
          "t": "h",
          "text": "Closing the loop"
        },
        {
          "t": "p",
          "text": "**Closing the loop** means making sure the customer's problem is really solved before the case ends. Ask the customer to confirm the machine works. Explain what was done and what to do if the fault returns. Give the ticket number. If the case was escalated, update the customer when the visit is booked and after it is done."
        },
        {
          "t": "h",
          "text": "Escalation rules"
        },
        {
          "t": "p",
          "text": "An **escalation rule** says when and to whom a case must be passed up. Rules often depend on priority, safety risk, repeated failure or time. For example, an agreement may require a first response within 4 hours. A case logged at 09:10 then needs a response by 13:10, because 09:10 plus 4 hours is 13:10. Know your company's rules and follow them."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "When you hand over a case, give a short summary at the top of the ticket: fault, what was tried, what is left. It saves the next person several minutes."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "A case is only closed when the customer confirms the fix, and the ticket tells the full story without private data."
        }
      ]
    }
  ],
  "practical": {
    "title": "Role-play a remote support call and write the ticket record",
    "objective": "Work in pairs. One of you is the support agent and the other is the customer. Run a full support call from greeting to closing, then write the ticket record. All names and numbers are invented.",
    "time": "60 minutes",
    "tools": [
      "A partner to play the customer (you swap roles at the end)",
      "A paper or spreadsheet ticket form with the fields: customer, contact, machine, serial number, fault, checks and results, changes, test result, next step, consent and session times, time spent",
      "A watch or phone timer",
      "A pen and the customer role card from step 1",
      "Optional: a networked printer that can print a configuration page, and a computer where you can run the `ipconfig` command"
    ],
    "safety": [
      "This is a role-play. Use only invented names, addresses and numbers. Never use real passwords, payment card numbers or private data.",
      "Do not start a real remote session on anybody's personal computer. Use only a training computer that your instructor has set up for this task, with the owner's agreement.",
      "In your role as customer, do not open any machine cover. If a real training machine is used, only press panel buttons and print reports.",
      "If the role-play involves a real machine and anything smells hot or smoky, switch off at the wall socket, unplug if safe and tell your instructor at once.",
      "Remember in real work: stop and escalate when there is a safety risk, however small it seems."
    ],
    "steps": [
      "Agree your roles and read only your own card. Customer card: Ms Efua Mensah, a stationery shop. Machine: monochrome multifunction product, serial TR-5520-Q (sample number). Fault: printing from the office laptop does nothing, although the printer shows Ready. Copying works. It started this morning, after the internet provider changed the router. The printer's configuration page shows 192.168.2.20. The laptop shows 192.168.1.50 with mask 255.255.255.0.",
      "Agent: open the call with this script: 'Good morning, Service Desk, my name is (your name). Who am I speaking to, and how can I help?' Write the customer's name and phone number on the ticket form.",
      "Agent: verify identity. Ask for the company name, the machine serial number and the ticket number if one exists. Compare them with the details on your record. Say: 'If you prefer, I can call you back on the number we hold for your account.'",
      "Agent: ask an open question first ('What happens when you press print?'). Then ask for the exact words on the display, when it started, what changed and who is affected. Write each answer on the ticket form.",
      "Agent: repeat the problem back in one or two sentences and ask 'Is that right?'. Correct your notes if the customer changes anything.",
      "Agent: ask the customer to make one copy and tell you the result. Record it, and say what it tells you: the scanner and print engine work, so the fault is probably in the network, the driver or the settings.",
      "Agent: ask the customer to print the configuration page and read out the IP address and the firmware version. Record both exactly as read.",
      "Agent: ask the customer to run `ipconfig` on the laptop and read out the IPv4 address and the subnet mask. Compare the first three numbers with the printer's address, and record that they differ.",
      "Agent: explain the finding in plain words: 'The laptop and the printer are on different networks since the router change.' Ask permission to change the printer to an automatic address, ask whether someone else manages the network, and warn that the old address will be lost. Say: 'I do not need any password from you. If a login is asked for, please type it yourself.' If you want to look at the customer's screen, use this consent script: 'May I connect to your computer to look at the printer settings? You can watch and stop me at any time.'",
      "Agent: guide the change one numbered step at a time. After each step ask 'What do you see now?'. Use teach-back at least once: 'Please tell me what you will do next.' Record the old and new values.",
      "Agent: ask the customer to send one test page from the laptop and tell you the result. Record it. If it fails, record that too, make no second change without noting it, and decide whether to escalate after two careful attempts.",
      "Agent: close the call. Summarise what was done, say what to do if the fault returns, give the ticket number and ask 'Is there anything else I can help with?'. Thank the customer.",
      "Agent: finish the ticket record within 10 minutes of the call. Write only facts. Include the checks, the changes with old and new values, the test result, the session times if any, the time spent and the next step. Do not write any password or card number.",
      "Swap roles and run the call again with a new fault chosen by your partner, for example a scan-to-email failure. At the end each of you checks the other's ticket against the checklist: clear, factual, complete, nothing private."
    ],
    "checks": [
      "I can open a call, verify the caller and create a ticket with the details a colleague needs.",
      "I can ask open, closed and exact-words questions and repeat the problem back.",
      "I can compare two IP addresses and say whether the devices are on the same network.",
      "I can give a customer one numbered step at a time and check understanding with teach-back.",
      "I can state the consent steps for a remote session and say what I must never ask for.",
      "I can write a ticket note that is factual, complete and free of passwords and card numbers."
    ]
  },
  "quiz": [
    {
      "id": "m16-q01",
      "q": "What does first-contact resolution mean?",
      "options": [
        "The first call is answered within one minute",
        "The fault is fixed during the first call or chat",
        "A technician visits on the first day",
        "The ticket is closed in the first week"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m16-l1",
      "explain": "First-contact resolution counts the cases solved without a second contact. Fast answering is a different measure, and sending a technician means the case was not solved remotely."
    },
    {
      "id": "m16-q02",
      "q": "A customer phones: the copier display is dark and there is a smell of burning plastic. What do you say first?",
      "options": [
        "Please open the side cover and tell me which part of the machine smells burnt",
        "Please switch it off and on again, then make a test copy to check it",
        "Please describe the smell and any smoke in detail so that I can log it",
        "Please switch off at the wall, unplug only if safe to reach, and keep clear"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m16-l1",
      "explain": "A burning smell is a safety risk, so power is removed and people keep away first. Opening covers or switching on again could make it worse, and details can be logged once the person is safe."
    },
    {
      "id": "m16-q03",
      "q": "A help desk handles 60 cases in a week and solves 45 of them at first contact. What is the first-contact resolution rate?",
      "options": [
        "75%",
        "45%",
        "25%",
        "15%"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m16-l1",
      "explain": "45 ÷ 60 = 0.75, which is 75%. The 25% figure is the share that was not solved at first contact (15 of 60)."
    },
    {
      "id": "m16-q04",
      "q": "Which fault is most likely to need a site visit?",
      "options": [
        "A tray set to the wrong paper size on the panel",
        "A scan-to-email server name typed with a mistake",
        "A pick-up roller whose rubber is worn and slips",
        "A printer that is missing from a computer's printer list"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m16-l1",
      "explain": "A worn roller must be replaced with a part and tools. The other faults are settings or software problems that a customer can often correct with guidance."
    },
    {
      "id": "m16-q05",
      "q": "What is escalation in a support team?",
      "options": [
        "Closing a ticket early so the team's figures look better this week",
        "Passing a case to someone with more skill, tools or authority",
        "Making the customer repeat the whole problem again to a manager",
        "Raising the priority so that the customer is charged a higher fee"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m16-l1",
      "explain": "Escalation moves a case you cannot solve to someone better placed to solve it, with notes. It is not a way to close tickets early or to increase charges."
    },
    {
      "id": "m16-q06",
      "q": "A customer says angrily: 'This is the third time this month and nobody fixes it!' What do you do first?",
      "options": [
        "Listen without interrupting, then acknowledge the problem and apologise",
        "Explain that the earlier visits were handled by other people, not you",
        "Ask for the ticket number and the machine serial number before anything else",
        "Tell the customer to calm down so that you are able to help them"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m16-l2",
      "explain": "An upset person must feel heard before they can work with you. Defending yourself or telling them to calm down sounds like blame and usually makes the anger worse."
    },
    {
      "id": "m16-q07",
      "q": "What is active listening?",
      "options": [
        "Waiting for the customer to stop talking so that you can speak next",
        "Writing every word down without giving any answer or comment",
        "Giving full attention, noting key facts and repeating them back",
        "Finishing the customer's sentences for them to save everybody time"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m16-l2",
      "explain": "Repeating the facts back catches misunderstandings early. Finishing sentences leads to wrong guesses, and silence gives no check at all."
    },
    {
      "id": "m16-q08",
      "q": "You need the exact error message from the display. Which question is best?",
      "options": [
        "You are getting a paper jam message, right?",
        "Is it showing an error?",
        "Is there a code on the screen, yes or no?",
        "Can you read me exactly what the display says?"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m16-l2",
      "explain": "Asking for the exact words gets the real message. A leading question suggests an answer to a polite customer, and yes or no questions give very little detail."
    },
    {
      "id": "m16-q09",
      "q": "Why is it better to send one short step at a time in a support chat?",
      "options": [
        "Chat tools do not allow a message to hold more than one short sentence at a time",
        "The customer can do and report each step, and short text is easier to read",
        "Long messages cost the customer extra money for every line they receive",
        "Customers do not want to read instructions and prefer to be told by phone"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m16-l2",
      "explain": "Small steps let the customer do one thing and report what happened, so mistakes show up at once. Chat tools have no such sentence limit."
    },
    {
      "id": "m16-q10",
      "q": "You told a customer, 'Navigate to the network submenu and toggle DHCP.' The customer, who speaks English as a second language, says 'I do not understand.' What do you do?",
      "options": [
        "Say it again in plain words, one step at a time, and ask what they see",
        "Repeat the same sentence again, but more slowly and a little louder",
        "Ask them to find a colleague who speaks better English and put them on the phone",
        "Send them the manual for the printer and then end the call politely"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m16-l2",
      "explain": "The problem is jargon, not speed or volume. Plain words, one step and a check on what the customer sees will work better than repeating the same sentence."
    },
    {
      "id": "m16-q11",
      "q": "A customer tells you a caller claimed to be from 'your printer support company', said the network has a virus, and asked for remote access and payment in gift cards. What advice do you give?",
      "options": [
        "Phone the caller back on the number that they left, to check that it is real",
        "Allow the remote session so you can see the virus, but refuse to pay",
        "Pay a small amount first, to see whether the caller turns out to be real",
        "Do not pay or give access, and check only via the number on the contract"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m16-l3",
      "explain": "An unexpected call with fear, hurry and gift-card payment is a classic scam. Calling the number the caller gave reaches the scammer again, and the remote session alone already gives a criminal access."
    },
    {
      "id": "m16-q12",
      "q": "A customer has phoned you about a ticket. What should you do before you start any remote session?",
      "options": [
        "Install unattended access so that you can return to the computer later on",
        "Ask for the customer's card number so that you can open an account",
        "Confirm who is calling, explain what you plan to do and get consent",
        "Start screen recording straight away without mentioning it to them"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m16-l3",
      "explain": "Identity and consent come first. Unattended access needs a separate written agreement, card numbers are never needed for support, and recording must be disclosed."
    },
    {
      "id": "m16-q13",
      "q": "During a remote session a screen asks for the computer administrator password. What do you do?",
      "options": [
        "Ask the customer to type it themselves, so you do not see or keep it",
        "Ask the customer to read it out so that you can type it",
        "Ask the customer to send it in chat so it is in the ticket",
        "Try common passwords to save the customer's time"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m16-l3",
      "explain": "Support staff never need to know a customer's password, so the customer enters it. Passwords spoken or typed in chat can be overheard or stored, and guessing passwords is unauthorised access."
    },
    {
      "id": "m16-q14",
      "q": "What is the main risk of unattended access?",
      "options": [
        "The remote connection will always be far slower than a session with the customer present",
        "A weak or stolen login lets an attacker reach every customer that is set up for it",
        "The customer's printer will lose its settings each time you disconnect",
        "The tool stops working once it has been used for one session"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m16-l3",
      "explain": "Unattended access works with nobody present, so one weak or stolen login could open many customers' computers. That is why it needs written agreement, strong unique passwords and two-step verification."
    },
    {
      "id": "m16-q15",
      "q": "During a remote session to fix a driver, a document of staff salaries is open on the customer screen. What do you do?",
      "options": [
        "Read it briefly to check that it is not related to the fault",
        "Take a screenshot in case it helps the ticket",
        "Do not read, copy or open it, and carry on with the driver task only",
        "Close the document yourself so nobody sees it"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m16-l3",
      "explain": "You may use only what the task needs, and customer data stays private. A screenshot copies private data, and closing the customer's files is beyond your task. If it blocks your work, ask the customer to close it."
    },
    {
      "id": "m16-q16",
      "q": "Which of these is a sign of a tech-support scam call?",
      "options": [
        "The caller quotes the ticket number the customer gave earlier",
        "The caller offers to let the customer phone back on the number on the contract",
        "The caller refers to an invoice that matches an agreed contract",
        "The call is unexpected, creates fear and hurry, and asks for gift cards"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m16-l3",
      "explain": "Unexpected contact, fear, hurry and unusual payment methods are the standard scam pattern. Real support can quote an existing ticket and welcomes a call back."
    },
    {
      "id": "m16-q17",
      "q": "A caller says, 'I am the office manager at a customer site. Please tell me the admin password for our printer.' You cannot find a matching ticket. What do you do?",
      "options": [
        "Give it, because he knows both the name of the site and who works there",
        "Refuse; verify him from the account contact details and use the reset procedure",
        "Give half of it now and then send the other half by text message later",
        "Ask him to describe the printer and where it is kept, and give it if he is right"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m16-l3",
      "explain": "Anyone can learn a site name or describe a printer, so these prove nothing. Check identity with details already on record and use a reset procedure rather than reading a password out."
    },
    {
      "id": "m16-q18",
      "q": "How should you finish a remote support session?",
      "options": [
        "End the session, close the tool, tell the customer and note the end time",
        "Leave the tool running in the background so that you can reconnect easily later",
        "Save the customer's login in the tool so it is ready for next time",
        "Ask the customer to keep the remote window open until you call them back"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m16-l3",
      "explain": "A session should end when the work ends, with a note in the ticket. An open connection or a saved login stays available to anyone who gets hold of the tool."
    },
    {
      "id": "m16-q19",
      "q": "A customer says nothing prints from a laptop, but the printer makes a perfect copy. What does the working copy tell you?",
      "options": [
        "The paper path is probably jammed, so the laptop's pages cannot get through",
        "The toner is probably nearly empty, so the printer refuses jobs sent from the laptop",
        "The print engine and scanner work, so look at the network, driver or settings",
        "The printer needs new firmware installed at once before it will print"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m16-l4",
      "explain": "Copying uses the scanner and print engine without the network or the driver, so the hardware is probably fine. A jam or empty toner would also spoil the copy."
    },
    {
      "id": "m16-q20",
      "q": "A laptop has address 192.168.1.50 with mask 255.255.255.0. The printer configuration page shows 192.168.2.20. What does this suggest?",
      "options": [
        "Both are on the same network, so the address is fine and the fault lies elsewhere",
        "The printer is switched off, or its network cable has been pulled out",
        "Only the subnet mask on the laptop needs to be changed to a wider range",
        "The printer is on another network, so the laptop cannot reach it directly"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m16-l4",
      "explain": "With this mask the first three numbers must match, and here 192.168.1 differs from 192.168.2. A printer that was off could not have printed its configuration page."
    },
    {
      "id": "m16-q21",
      "q": "A printer's configuration page shows an address starting 169.254. What most likely happened?",
      "options": [
        "A network administrator set a fixed address on purpose",
        "It asked for an address from a DHCP server, got no reply and gave itself one",
        "It is connected directly to the internet",
        "Its firmware is out of date"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m16-l4",
      "explain": "A 169.254 address is self-assigned when no DHCP server replies. Look at the cable, the switch and the DHCP server. The firmware version has no effect on this address range."
    },
    {
      "id": "m16-q22",
      "q": "You ping a printer 20 times and receive 17 replies. What is the packet loss?",
      "options": [
        "3%",
        "17%",
        "15%",
        "85%"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m16-l4",
      "explain": "20 - 17 = 3 were lost, and 3 ÷ 20 = 0.15, which is 15%. The figure 85% is the share that did get a reply."
    },
    {
      "id": "m16-q23",
      "q": "Why should you change only one setting at a time during diagnosis?",
      "options": [
        "You then know which change fixed or caused the result, and you can undo it",
        "Changing several settings uses more of the customer's time",
        "The machine can store only one change at a time",
        "Service manuals forbid changing more than one setting a day"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m16-l4",
      "explain": "With one change per test the cause is clear and easy to reverse. Several changes at once leave you unsure which one helped or which one caused a new fault."
    },
    {
      "id": "m16-q24",
      "q": "A customer suggests a factory reset of a network printer to clear a fault. What must you do first?",
      "options": [
        "Nothing special, because a factory reset only removes the fault and nothing else",
        "Do it at once, since a reset rules out every possible setting as the cause",
        "Ask them to unplug the printer from the wall for a full hour first",
        "Warn that it can erase settings, make sure they are recorded, and get agreement"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m16-l4",
      "explain": "A reset can wipe the network address, address book and other settings, which may leave the machine offline. The customer must know this and have a record to restore from."
    },
    {
      "id": "m16-q25",
      "q": "Which instruction is best to give a customer who cannot see you?",
      "options": [
        "Go into the menu and sort out all of the paper settings for that tray",
        "Press the Menu button on the right of the screen, and tell me what shows",
        "Reset the tray, check the paper size, print a test page and then call me back",
        "Do what you would normally do when you change the paper in the main tray"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m16-l5",
      "explain": "It gives one action, names the button by what the customer can see and asks for a report back. Several actions at once or vague words invite mistakes."
    },
    {
      "id": "m16-q26",
      "q": "What is the teach-back method?",
      "options": [
        "Asking the customer to say in their own words what they will do next",
        "Teaching the customer how each part inside the machine works and what it does",
        "Reading the relevant manual page out loud to the customer, word for word",
        "Phoning the customer on the next day to explain the steps again"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m16-l5",
      "explain": "Asking 'tell me what you will do next' shows whether the instruction was clear. 'Do you understand?' usually gets a yes even when the customer is lost."
    },
    {
      "id": "m16-q27",
      "q": "While you guide a customer, they say, 'I have a screwdriver. Shall I open the back and check the power supply?' What do you say?",
      "options": [
        "Yes, but wear gloves",
        "Yes, if you unplug it first and remember where the screws go",
        "No. Opening covers is for trained technicians, so I will arrange a visit",
        "Only if the display shows an error"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m16-l5",
      "explain": "An untrained person is at risk from mains voltage, stored charge and hot parts, even when the machine is unplugged. Gloves and unplugging do not make internal work safe for them."
    },
    {
      "id": "m16-q28",
      "q": "You guided a customer through two fixes for a paper jam. Now the machine makes a grinding noise at the start of every feed. What next?",
      "options": [
        "Ask for a third fix, this time leaving the power off for a longer time",
        "Ask them to open the covers and listen more closely to where it comes from",
        "Ask them to keep printing for a while to see if the noise goes away",
        "Stop, explain honestly that a part may be worn or broken, and book a visit"
      ],
      "answer": 3,
      "level": 3,
      "lesson": "m16-l5",
      "explain": "A grinding noise points to mechanical wear or damage, and running the machine can make it worse. Repeated failed attempts plus a hardware sign are reasons to escalate."
    },
    {
      "id": "m16-q29",
      "q": "You escalate a case to a field technician. What should you do so the customer does not have to tell the story again?",
      "options": [
        "Write full notes: symptoms, tests with results, changes made and likely parts",
        "Write only 'needs visit' on the ticket",
        "Tell the customer to describe it again when the technician arrives",
        "Send the technician a text saying 'broken'"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m16-l5",
      "explain": "Full notes let the technician arrive prepared, with the right parts and no repeated questions. A short note such as 'needs visit' forces the customer to explain everything again."
    },
    {
      "id": "m16-q30",
      "q": "Which ticket note is the most useful?",
      "options": [
        "Customer rang about a printer not working. Went to look at it and fixed it. Customer was happy with the result and thanked me.",
        "Copy worked, laptop print failed. Printer 192.168.2.20, laptop 192.168.1.50. Set printer to automatic address. Test page printed.",
        "Network problem, probably the router provider's fault, so told the customer to ring them and ask for a technician.",
        "Told customer to restart the computer, router and printer and wait; it worked again after a while."
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m16-l6",
      "explain": "A good note gives facts, values and test results so that someone else can follow what happened. Notes such as 'fixed' or guesses about blame give nothing to learn from."
    },
    {
      "id": "m16-q31",
      "q": "What belongs in a knowledge-base article?",
      "options": [
        "The full chat log of the call, including customer names and numbers",
        "Only the name of the technician who fixed the fault",
        "Symptom, cause, numbered fix steps, a check it worked and the models it covers",
        "The customer's phone number so that staff can call back"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m16-l6",
      "explain": "An article is a reusable how-to, so it holds symptom, cause, steps and scope. Customer names and numbers are private and have no place in a shared article."
    },
    {
      "id": "m16-q32",
      "q": "A ticket is logged at 09:10. The agreement requires a first response within 4 hours. By what time must you respond?",
      "options": [
        "12:10",
        "13:00",
        "14:10",
        "13:10"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m16-l6",
      "explain": "09:10 plus 4 hours is 13:10. The time 12:10 is only 3 hours later, and 13:00 ignores the 10 minutes."
    },
    {
      "id": "m16-q33",
      "q": "A customer's printing works again after your remote help. What is the best way to close the loop?",
      "options": [
        "Ask them to confirm it works, explain what you did, and say what to do if it returns",
        "Close the ticket at once, without speaking to the customer again, to keep the numbers good",
        "Wait for a month and then phone to ask whether it still works properly",
        "Tell them it was user error so that they will be more careful next time"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m16-l6",
      "explain": "A case is closed only when the customer confirms the fix and knows what to do next. Closing without checking leaves a risk of a hidden failure, and blaming the user harms trust."
    },
    {
      "id": "m16-q34",
      "q": "Which item must never be written in a ticket note?",
      "options": [
        "The firmware version",
        "A customer's password or payment card number",
        "The error code from the display",
        "The time the remote session started"
      ],
      "answer": 1,
      "level": 1,
      "lesson": "m16-l6",
      "explain": "Tickets are stored and read by many staff, so passwords and card numbers must never be recorded. The other items are normal technical facts that help the next person."
    }
  ],
  "cards": [
    {
      "id": "m16-c01",
      "front": "What is remote technical support?",
      "back": "Helping a customer with a machine or network problem without going to the site, by phone, chat, email or screen sharing.",
      "lesson": "m16-l1"
    },
    {
      "id": "m16-c02",
      "front": "Name the four support levels in order.",
      "back": "Level 1 (first line), Level 2, Level 3 (specialist or manufacturer), then field service (site visit).",
      "lesson": "m16-l1"
    },
    {
      "id": "m16-c03",
      "front": "What is escalation?",
      "back": "Passing a case you cannot solve to a higher level, with full notes.",
      "lesson": "m16-l1"
    },
    {
      "id": "m16-c04",
      "front": "Formula for first-contact resolution rate?",
      "back": "Cases solved at first contact ÷ total cases × 100.",
      "lesson": "m16-l1"
    },
    {
      "id": "m16-c05",
      "front": "Smoke or a burning smell is reported. What do you say first?",
      "back": "Switch off at the wall and unplug only if safe to reach, keep clear, do not open the machine. Then arrange a visit.",
      "lesson": "m16-l1"
    },
    {
      "id": "m16-c06",
      "front": "Which faults are usually fixed remotely?",
      "back": "Settings, driver and network address problems, scan-to-email settings, empty consumables.",
      "lesson": "m16-l1"
    },
    {
      "id": "m16-c07",
      "front": "What is active listening?",
      "back": "Full attention, noting key facts and repeating them back to check you understood.",
      "lesson": "m16-l2"
    },
    {
      "id": "m16-c08",
      "front": "What is a leading question?",
      "back": "A question that suggests the answer, such as \"It is a paper jam, right?\". Avoid it.",
      "lesson": "m16-l2"
    },
    {
      "id": "m16-c09",
      "front": "Which question gets the real error message?",
      "back": "\"Can you read me exactly what the display says?\"",
      "lesson": "m16-l2"
    },
    {
      "id": "m16-c10",
      "front": "Five steps for calming an upset customer?",
      "back": "Let them speak, acknowledge the feeling, apologise for the problem, say what you will do and when, keep the promise.",
      "lesson": "m16-l2"
    },
    {
      "id": "m16-c11",
      "front": "Why send one step at a time in chat?",
      "back": "The customer can do and report each step, and short messages are easier to read in a second language.",
      "lesson": "m16-l2"
    },
    {
      "id": "m16-c12",
      "front": "What is remote desktop software?",
      "back": "Software that lets you see, and sometimes control, a customer computer screen over the internet.",
      "lesson": "m16-l3"
    },
    {
      "id": "m16-c13",
      "front": "What must come before a remote session starts?",
      "back": "Verify who is calling, explain the plan and get the customer's clear consent. The customer starts the session.",
      "lesson": "m16-l3"
    },
    {
      "id": "m16-c14",
      "front": "What is unattended access and its main risk?",
      "back": "Connecting when nobody is at the computer. A weak or stolen login could expose every customer set up for it.",
      "lesson": "m16-l3"
    },
    {
      "id": "m16-c15",
      "front": "A login is needed during a remote session. Who types it?",
      "back": "The customer types it themselves. You never ask for it to be read out or sent in chat.",
      "lesson": "m16-l3"
    },
    {
      "id": "m16-c16",
      "front": "List four signs of a tech-support scam.",
      "back": "Unexpected call, fear, hurry, remote access straight away, payment by gift card or card details by phone.",
      "lesson": "m16-l3"
    },
    {
      "id": "m16-c17",
      "front": "How can a customer check a support caller is genuine?",
      "back": "Hang up and call the number on the contract or invoice, and ask for the ticket number.",
      "lesson": "m16-l3"
    },
    {
      "id": "m16-c18",
      "front": "What should you log for a remote session?",
      "back": "Who connected, consent given, start and end times, why, and what was done.",
      "lesson": "m16-l3"
    },
    {
      "id": "m16-c19",
      "front": "What is a configuration page?",
      "back": "A printed report from the machine showing IP address, firmware version, counters and options.",
      "lesson": "m16-l4"
    },
    {
      "id": "m16-c20",
      "front": "Copy works but print from a computer fails. Likely area?",
      "back": "Network, driver or computer settings. The scanner and print engine work.",
      "lesson": "m16-l4"
    },
    {
      "id": "m16-c21",
      "front": "Mask 255.255.255.0: when are two devices on the same network?",
      "back": "When the first three numbers of their IP addresses are the same.",
      "lesson": "m16-l4"
    },
    {
      "id": "m16-c22",
      "front": "What does an address starting 169.254 mean?",
      "back": "The device got no reply from a DHCP server and gave itself an address.",
      "lesson": "m16-l4"
    },
    {
      "id": "m16-c23",
      "front": "What does ping do?",
      "back": "Sends small test messages to an address and shows whether replies come back.",
      "lesson": "m16-l4"
    },
    {
      "id": "m16-c24",
      "front": "Packet loss formula?",
      "back": "Lost ÷ sent × 100. Example: 20 sent, 17 back: 3 ÷ 20 = 15%.",
      "lesson": "m16-l4"
    },
    {
      "id": "m16-c25",
      "front": "Why change one thing at a time?",
      "back": "So you know which change fixed or caused the result, and can undo it.",
      "lesson": "m16-l4"
    },
    {
      "id": "m16-c26",
      "front": "What is teach-back?",
      "back": "Asking the customer to say what they will do next, to check your instruction was understood.",
      "lesson": "m16-l5"
    },
    {
      "id": "m16-c27",
      "front": "What should you never ask a customer to do?",
      "back": "Remove a tool-fastened cover, touch a hot fuser, work near the power supply or defeat an interlock.",
      "lesson": "m16-l5"
    },
    {
      "id": "m16-c28",
      "front": "When should you escalate to a site visit?",
      "back": "Safety risk, signs of a broken part, unsafe next step, failed attempts, or a missing part, tool or skill.",
      "lesson": "m16-l5"
    },
    {
      "id": "m16-c29",
      "front": "What goes in a good ticket note?",
      "back": "Fault in customer words, checks and results, changes with old and new values, test result, next step, times.",
      "lesson": "m16-l6"
    },
    {
      "id": "m16-c30",
      "front": "What must a ticket never contain?",
      "back": "Passwords, payment card numbers and private contents of customer documents.",
      "lesson": "m16-l6"
    },
    {
      "id": "m16-c31",
      "front": "What is a knowledge-base article?",
      "back": "A short how-to for a recurring problem: symptom, cause, steps, check, and the models it covers.",
      "lesson": "m16-l6"
    },
    {
      "id": "m16-c32",
      "front": "What does closing the loop mean?",
      "back": "Confirming with the customer that the fix works, explaining what was done and giving the ticket number.",
      "lesson": "m16-l6"
    }
  ]
});

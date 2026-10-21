OMM.registerModule({
  "id": "m17",
  "summary": "Plan service visits, write clear service reports, manage parts stock, prepare correct estimates and invoices, keep customer records safely and run maintenance programmes in a small service business.",
  "outcomes": [
    "Log a service request, set its priority and plan the visit, including travel time, parts and tools.",
    "Write a service report that records fault, cause, action, parts, readings, meter counts, test result and sign-off.",
    "Calculate reorder levels and order quantities, and check, classify and return parts correctly.",
    "Prepare estimates, quotations and invoices with correct labour, parts, call-out, discount and tax figures.",
    "Keep time sheets and customer records accurately, protect personal data and follow retention rules.",
    "Describe how preventive maintenance contracts, safety and waste duties and basic business finance work."
  ],
  "cheatsheet": [
    "A service report records: fault, cause, action, parts, readings, meter counts, test result, sign-off.",
    "Minutes to hours: divide by 60. 1 h 45 min = 1.75 h. 2 h 30 min = 2.5 h.",
    "Reorder level = use during lead time + safety stock.",
    "Order quantity = maximum level - stock on hand - stock already on order.",
    "Invoice order: add lines, take off discount, then add tax on the discounted amount (follow local rules).",
    "Price without tax = price with tax ÷ (1 + tax rate). At 10%, divide by 1.10.",
    "Mark-up = (selling price - cost) ÷ cost. Cost 20, mark-up 50% gives a price of 30.",
    "Estimate = approximate cost. Quotation = fixed price for a stated time. Invoice = request for payment.",
    "Never write passwords or card numbers on a service report or in a ticket.",
    "Used toner, drums, batteries and boards go to authorised recyclers, never the general bin."
  ],
  "lessons": [
    {
      "id": "m17-l1",
      "title": "Receiving and planning service requests",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to log a service request, decide its priority, schedule the visit and choose the parts and tools to take with you."
        },
        {
          "t": "h",
          "text": "Logging the call"
        },
        {
          "t": "p",
          "text": "A **service request** is a customer's report that a machine needs attention. Write it down at once on a **job ticket** (a record of the job from first call to closing). Never trust your memory."
        },
        {
          "t": "diagram",
          "name": "service-job-flow"
        },
        {
          "t": "ul",
          "items": [
            "Customer name, phone number and the person to ask for on site.",
            "Site address and where in the building the machine stands.",
            "Machine type, make and **serial number** (the unique number on the label on the machine).",
            "The fault in the customer's own words, and any error code on the display.",
            "When it started, and what the customer has already tried.",
            "Contract status: under warranty, under a maintenance contract, or paid per visit.",
            "Date and time of the call, and who took it."
          ]
        },
        {
          "t": "p",
          "text": "Ask short, clear questions. 'What does the display say?' is better than 'What is wrong with it?'. Repeat the key details back to the customer to check them."
        },
        {
          "t": "h",
          "text": "Setting priority"
        },
        {
          "t": "p",
          "text": "**Priority** decides which job is done first. Your employer sets the exact scale and response times. A simple scale looks like this."
        },
        {
          "t": "table",
          "head": [
            "Priority",
            "Typical situation",
            "Example"
          ],
          "rows": [
            [
              "High",
              "Customer cannot work, or there is a safety risk",
              "The only till printer in a shop is dead; a burning smell"
            ],
            [
              "Medium",
              "Work continues but with difficulty",
              "One of four office printers is out of service"
            ],
            [
              "Low",
              "No effect on daily work",
              "Planned cleaning, a cosmetic fault, an upgrade"
            ]
          ],
          "caption": "A simple three-level priority scale"
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "If a customer reports smoke, a burning smell, sparks, a hot casing or a damaged mains cable, tell them to switch off at the wall socket and unplug the machine only if it is safe to reach. They must keep clear and must not open the machine. Treat the job as high priority."
        },
        {
          "t": "h",
          "text": "Scheduling and travel"
        },
        {
          "t": "p",
          "text": "A **service level agreement (SLA)** is a written promise of how fast you will respond. Check the customer's contract before you promise a time. Group jobs that are in the same area to save travel time."
        },
        {
          "t": "p",
          "text": "Always add a **buffer**, a short extra time for parking, finding the contact person and signing in."
        },
        {
          "t": "example",
          "title": "Working out your leaving time",
          "steps": [
            "The customer expects you at 09:30. The drive takes 40 minutes. You allow a 10-minute buffer.",
            "Total time needed before the appointment: 40 + 10 = 50 minutes.",
            "Leaving time: 09:30 minus 50 minutes = 08:40.",
            "You must leave the workshop by 08:40."
          ]
        },
        {
          "t": "h",
          "text": "Parts and tools to take"
        },
        {
          "t": "p",
          "text": "Before you leave, read the machine's history in your records. Repeat faults and recently fitted parts tell you what to expect. Take the likely wear parts for that model, cleaning materials, test paper, a multimeter, hand tools, an ESD kit and the service manual or a copy on a laptop. Check the manufacturer's service manual for the model-specific parts."
        },
        {
          "t": "p",
          "text": "Too few parts means a second visit, which costs you time and costs the customer more downtime. A van full of everything wastes money. Plan from the fault description."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Before you leave, you should know: who the customer is, where the machine is, what the fault is, which parts and tools you need, and what time you must arrive."
        }
      ]
    },
    {
      "id": "m17-l2",
      "title": "Writing service reports",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers what a service report must contain and how to word each part so that the customer, your employer and the next technician can understand it."
        },
        {
          "t": "h",
          "text": "Why the report matters"
        },
        {
          "t": "p",
          "text": "A **service report** (also called a job sheet or work order) is the written record of a visit. It is the base for the invoice. It proves what was done. It shows the next technician what has already been tried. It supports a warranty claim to a supplier. If there is a dispute, the report is the evidence."
        },
        {
          "t": "p",
          "text": "Write the report during the visit, while the facts are fresh. Details such as readings, times and part numbers are easily forgotten."
        },
        {
          "t": "h",
          "text": "What to record"
        },
        {
          "t": "table",
          "head": [
            "Part of report",
            "What to write",
            "Example wording"
          ],
          "rows": [
            [
              "Fault",
              "What the customer reported, plus what you found",
              "Tray 2 misfeeds; display shows a paper jam code"
            ],
            [
              "Cause",
              "Why it happened",
              "Pick-up roller rubber hard and glazed; no grip"
            ],
            [
              "Action",
              "What you did, in order",
              "Cleaned tray 2 path, fitted new pick-up roller and pad"
            ],
            [
              "Parts",
              "Quantity and part number of each part fitted",
              "1 pick-up roller, 1 separation pad (with numbers)"
            ],
            [
              "Readings",
              "Measured values that matter",
              "Fuser warm-up checked; rail reading as per manual"
            ],
            [
              "Meter counts",
              "Counter before and after, and test prints",
              "Before 51,300; after 51,312; 12 test prints"
            ],
            [
              "Test result",
              "Proof the fault is gone",
              "20 sheets from tray 2, no misfeeds"
            ],
            [
              "Sign-off",
              "Customer name, signature and date",
              "Signed after a demonstration"
            ]
          ],
          "caption": "The parts of a service report"
        },
        {
          "t": "p",
          "text": "Also record times: arrival, departure and any break. Time on site is the departure time minus the arrival time."
        },
        {
          "t": "example",
          "title": "Time on site and test prints",
          "steps": [
            "Arrival 14:05. Departure 15:20. Time on site: 15:20 minus 14:05 = 1 h 15 min.",
            "Convert to hours: 15 ÷ 60 = 0.25, so 1 h 15 min = 1.25 h.",
            "The meter read 51,300 on arrival and 51,312 after the test prints.",
            "Test prints made: 51,312 minus 51,300 = 12."
          ]
        },
        {
          "t": "h",
          "text": "Clear wording"
        },
        {
          "t": "ul",
          "items": [
            "Be specific. Write 'Replaced worn pick-up roller', not 'Fixed'.",
            "Write facts you saw or measured, not guesses or blame.",
            "Use short sentences and the same terms the customer used.",
            "Record work you could not finish, and work you recommended that the customer declined.",
            "Do not write passwords, payment card numbers or private document contents."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Read your report as if you were a technician who has never seen the machine. If you could not repeat the repair from your words, add detail."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Honest records protect everyone. If a recommended repair was declined, the report is your proof that the customer was told."
        }
      ]
    },
    {
      "id": "m17-l3",
      "title": "Parts stock and ordering",
      "minutes": 9,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to keep the right parts in stock, how to calculate when and how much to order, how to check deliveries, and how to handle warranty returns."
        },
        {
          "t": "h",
          "text": "Stock levels"
        },
        {
          "t": "p",
          "text": "**Stock** is the parts you hold ready for jobs. Too little stock delays repairs. Too much stock ties up money and parts go out of date. Each important part gets three numbers."
        },
        {
          "t": "ul",
          "items": [
            "**Lead time**: the days or weeks between placing an order and receiving it.",
            "**Reorder level** (minimum): the stock quantity at which you must place a new order.",
            "**Maximum level**: the most you want to hold, set by money and shelf space.",
            "**Safety stock**: a small extra amount that covers late deliveries or a busy week."
          ]
        },
        {
          "t": "formula",
          "text": "Reorder level = use during lead time + safety stock",
          "caption": "Use during lead time = average use per week × lead time in weeks"
        },
        {
          "t": "formula",
          "text": "Order quantity = maximum level - stock on hand - stock on order",
          "caption": "Order up to the maximum"
        },
        {
          "t": "example",
          "title": "Reorder level for a roller kit",
          "steps": [
            "You use 4 kits per week on average. The supplier needs 2 weeks. You want a safety stock of 3.",
            "Use during lead time: 4 × 2 = 8 kits.",
            "Reorder level: 8 + 3 = 11 kits.",
            "The maximum level is 20 kits. Stock on hand falls to 11 and nothing is on order.",
            "Order quantity: 20 - 11 - 0 = 9 kits."
          ]
        },
        {
          "t": "h",
          "text": "Part numbers, classes and storage"
        },
        {
          "t": "p",
          "text": "Always order by the exact **part number** from the parts catalogue, not by appearance. Similar-looking parts may differ in size or rating. Check the catalogue for the machine's exact model."
        },
        {
          "t": "table",
          "head": [
            "Class",
            "Meaning",
            "Examples"
          ],
          "rows": [
            [
              "Consumable",
              "Used up in normal use",
              "Toner, paper, ink, ribbons"
            ],
            [
              "Wear part",
              "Wears slowly and is replaced at intervals",
              "Rollers, pads, cleaning blades, belts"
            ],
            [
              "Repair part",
              "Replaced only when it fails",
              "Boards, motors, power supplies, sensors"
            ]
          ],
          "caption": "Classifying parts"
        },
        {
          "t": "p",
          "text": "Label every bin with part number and description. Use **FIFO** (first in, first out): use the oldest stock first, because toner and rubber parts age on the shelf. Keep boards in anti-static bags, and keep stock dry and away from sunlight."
        },
        {
          "t": "h",
          "text": "Checking deliveries"
        },
        {
          "t": "ol",
          "items": [
            "Compare the delivery note with your order: part numbers and quantities.",
            "Open the boxes and count the contents. Look for damage.",
            "Write any shortage or damage on the delivery document before you sign.",
            "Report the problem to the supplier the same day.",
            "Book the parts into stock with the correct bin location."
          ]
        },
        {
          "t": "h",
          "text": "Warranty and returns"
        },
        {
          "t": "p",
          "text": "A **warranty** is the supplier's promise to replace or repair a faulty part within a stated time. If a new part fails early, keep it and label it with the job, date and fault. Ask the supplier for a **return authorisation number**, then send the part with that number. A **credit note** is the supplier's document that reduces what you owe."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Record every part used on every job. Stock levels are only correct if the report, the stock record and the invoice all agree."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Reorder level protects you from running out. Order quantity brings you back up to the maximum."
        }
      ]
    },
    {
      "id": "m17-l4",
      "title": "Estimates, quotations and invoices",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to price a job, how to calculate labour, discounts and tax correctly, and how to stay honest with customers about cost."
        },
        {
          "t": "h",
          "text": "Three documents"
        },
        {
          "t": "ul",
          "items": [
            "**Estimate**: an approximate cost given before work. The final cost may differ.",
            "**Quotation**: a fixed price, valid for a stated period, that you must honour.",
            "**Invoice**: a request for payment after the work is done, listing what is charged."
          ]
        },
        {
          "t": "h",
          "text": "What goes in the price"
        },
        {
          "t": "ul",
          "items": [
            "**Labour**: your hourly rate multiplied by the hours worked. Turn minutes into hours by dividing by 60.",
            "**Parts**: quantity multiplied by the unit price for each part.",
            "**Call-out fee**: a fixed charge for attending the site, covering travel and set-up.",
            "**Discount**: an agreed reduction, often a percentage.",
            "**Tax**: **sales tax** or **VAT**, a percentage of the price set by your country and collected for the government."
          ]
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Tax rules differ between countries. Some require tax to be shown separately, and some set the order of discount and tax. Follow your country's rules and your employer's accounts procedure. The rates used here are examples only."
        },
        {
          "t": "example",
          "title": "A full invoice (example rates)",
          "steps": [
            "Job: call-out fee 20.00; labour 1 h 45 min at 40.00 per hour; 2 pick-up rollers at 12.50 each; 1 separation pad at 8.00. Discount 10%. Tax 10% (an example rate), charged on the amount after discount.",
            "Labour: 1 h 45 min = 1.75 h. 1.75 × 40.00 = 70.00.",
            "Parts: 2 × 12.50 = 25.00. 25.00 + 8.00 = 33.00.",
            "Subtotal: 20.00 + 70.00 + 33.00 = 123.00.",
            "Discount: 123.00 × 0.10 = 12.30. Amount after discount: 123.00 - 12.30 = 110.70.",
            "Tax: 110.70 × 0.10 = 11.07.",
            "Total to pay: 110.70 + 11.07 = 121.77."
          ]
        },
        {
          "t": "h",
          "text": "Prices that already include tax"
        },
        {
          "t": "p",
          "text": "Shop prices often include tax. To find the price without tax, divide by one plus the tax rate as a decimal."
        },
        {
          "t": "formula",
          "text": "Price without tax = price with tax ÷ (1 + rate)",
          "caption": "At an example rate of 10%, divide by 1.10"
        },
        {
          "t": "p",
          "text": "Example: 55.00 including tax ÷ 1.10 = 50.00 without tax. The tax part is 5.00. Taking 10% off 55.00 gives 49.50, which is wrong, because the tax was 10% of the smaller number."
        },
        {
          "t": "h",
          "text": "Payment terms and honest pricing"
        },
        {
          "t": "p",
          "text": "**Payment terms** say when the customer must pay, for example 'due within 30 days of the invoice date'. Write the date, the amount, your payment details and the invoice number clearly."
        },
        {
          "t": "ul",
          "items": [
            "Charge only for parts that were fitted and time that was worked.",
            "If you find extra faults, stop, tell the customer the cost and get agreement before you continue.",
            "Give a quotation or estimate in writing when the customer asks.",
            "Explain the invoice in plain words if the customer has questions."
          ]
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Work in this order: add all lines to a subtotal, take off the discount, then work out tax on the discounted amount (if your local rules say so)."
        }
      ]
    },
    {
      "id": "m17-l5",
      "title": "Time sheets, customer records and scheduling",
      "minutes": 8,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers how to record your working time, how to keep customer records in spreadsheets or databases, how to schedule with calendars, and how to protect customer privacy."
        },
        {
          "t": "h",
          "text": "Time sheets"
        },
        {
          "t": "p",
          "text": "A **time sheet** records when you started, when you finished, your breaks, travel and the job number for each block of time. It is used for pay, for checking labour on invoices and for planning how long jobs really take."
        },
        {
          "t": "example",
          "title": "Hours worked in a day",
          "steps": [
            "Start 08:30. Finish 16:45. Unpaid break 45 minutes.",
            "Time from start to finish: 16:45 minus 08:30 = 8 h 15 min.",
            "Subtract the break: 8 h 15 min minus 45 min = 7 h 30 min.",
            "As a decimal: 30 ÷ 60 = 0.5, so 7.5 h."
          ]
        },
        {
          "t": "p",
          "text": "Separate **billable time** (work charged to a customer) from **non-billable time** (travel between jobs, stock counts, training, cleaning the workshop). Both must be recorded honestly."
        },
        {
          "t": "h",
          "text": "Spreadsheets and databases"
        },
        {
          "t": "p",
          "text": "A **spreadsheet** holds data in rows and columns and calculates totals. It suits small lists, such as one technician's jobs for the month. A **database** keeps linked tables, such as customers, machines and jobs, and lets many people search and update the same data at once."
        },
        {
          "t": "table",
          "head": [
            "Record",
            "What it holds",
            "Why it helps"
          ],
          "rows": [
            [
              "Customer",
              "Name, contacts, sites, contract",
              "One place for contact and billing details"
            ],
            [
              "Machine",
              "Model, serial number, location, meter",
              "Shows which unit a fault belongs to"
            ],
            [
              "Job history",
              "Reports, parts fitted, dates",
              "Reveals repeat faults and wear patterns"
            ],
            [
              "Stock",
              "Part numbers, quantities, levels",
              "Shows what to order"
            ]
          ],
          "caption": "Common service records"
        },
        {
          "t": "p",
          "text": "Keep one record per customer. Duplicate records give different phone numbers and different histories, and then nobody knows which is right. Enter data the same way every time, for example the full serial number with no spaces."
        },
        {
          "t": "h",
          "text": "Calendars and scheduling"
        },
        {
          "t": "p",
          "text": "Use a shared calendar so the office and technicians see the same jobs. Block time for travel, not only for the job. Put the job number, customer, machine and address in each entry."
        },
        {
          "t": "h",
          "text": "Privacy and retention"
        },
        {
          "t": "p",
          "text": "Customer records are **personal data** and business data. Collect only what you need. Protect them with passwords, lock your screen, do not leave laptops or papers visible in a vehicle, and share details only with people who need them. Remember that a service report can reveal what the customer prints."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "When you copy or scan documents to test a machine, use your own test pages. Never read, copy or take away a customer's documents or stored data."
        },
        {
          "t": "p",
          "text": "A **retention period** is how long a record must be kept before it is destroyed. Laws on tax, business records and health and safety, and your employer's policy, set the periods. They differ by country, so ask your employer. When the time is up, delete or shred records securely."
        },
        {
          "t": "note",
          "kind": "key",
          "text": "Back up your records regularly. A record that is lost cannot prove a repair, support an invoice or show a warranty claim."
        }
      ]
    },
    {
      "id": "m17-l6",
      "title": "Maintenance programmes and running a service business",
      "minutes": 10,
      "body": [
        {
          "t": "p",
          "text": "This lesson covers preventive maintenance contracts, how meter readings are used, the safety and waste duties of a service business, and the basics of money in a small business."
        },
        {
          "t": "h",
          "text": "Preventive maintenance contracts"
        },
        {
          "t": "p",
          "text": "**Preventive maintenance (PM)** is regular cleaning, inspection and replacement of wear parts before they fail. A **maintenance contract** is an agreement in which the customer pays and the service company provides PM and repairs. Contracts differ."
        },
        {
          "t": "table",
          "head": [
            "Contract type",
            "What the customer pays",
            "Who carries the cost of repairs"
          ],
          "rows": [
            [
              "Full service",
              "A fixed fee or a charge per print",
              "Service company: parts and labour included"
            ],
            [
              "Labour only",
              "A fee for visits",
              "Customer pays for parts"
            ],
            [
              "Pay as you go",
              "Each visit as it happens",
              "Customer pays for parts and labour"
            ]
          ],
          "caption": "Common contract types"
        },
        {
          "t": "p",
          "text": "PM is usually due after a **meter count** (the number of prints counted by the machine) or after a time period, whichever comes first. A **click charge** is a charge for each print counted by the meter."
        },
        {
          "t": "example",
          "title": "Meter-based PM and click charges",
          "steps": [
            "PM is due every 100,000 prints. The last PM was at 250,000. The next is due at 350,000.",
            "The meter now reads 347,500. Prints remaining: 350,000 - 347,500 = 2,500.",
            "Click charge (an invented example rate): 0.02 per print. The customer made 4,500 prints this month.",
            "Charge: 4,500 × 0.02 = 90.00."
          ]
        },
        {
          "t": "h",
          "text": "Health, safety and waste duties"
        },
        {
          "t": "p",
          "text": "Employers and technicians both have safety duties under the laws of their country. You must follow safe procedures, use the right protective equipment, report hazards and near misses and never work beyond your training. Check that a repaired machine is electrically safe before returning it to service, using the tests your employer requires."
        },
        {
          "t": "note",
          "kind": "safety",
          "text": "Never skip an electrical safety check to save time. A machine that looks repaired but has a damaged earth connection can kill someone."
        },
        {
          "t": "p",
          "text": "Waste from service work includes used toner, drums, batteries, circuit boards and old machines. Many countries have special rules for electronic waste. Do not put these in the general bin, do not burn them and do not leave them with the customer. Collect them and pass them to an authorised recycler or waste carrier, and keep the paperwork that shows where they went."
        },
        {
          "t": "h",
          "text": "Small-business basics"
        },
        {
          "t": "ul",
          "items": [
            "**Profit** = income minus costs. Costs include tools, stock, vehicle, insurance, rent and your own time.",
            "**Cash flow** is money coming in and going out over time. A business can be profitable and still run out of cash if customers pay late.",
            "**Mark-up** is the extra added to a part's cost to get its selling price, shown as a percentage of cost."
          ]
        },
        {
          "t": "formula",
          "text": "Mark-up % = (selling price - cost) ÷ cost × 100",
          "caption": "Example: cost 8.00, price 12.00: (12.00 - 8.00) ÷ 8.00 = 0.5 = 50%"
        },
        {
          "t": "p",
          "text": "Parts prices and labour rates must cover more than the cost of the part and your wage. They must also pay for the van, tools, insurance, stock that is never sold and time spent on the road."
        },
        {
          "t": "note",
          "kind": "tip",
          "text": "Reputation is part of the business. A customer who is told the truth, treated fairly and billed correctly will call you again."
        }
      ]
    }
  ],
  "practical": {
    "title": "Complete a service report, a parts requisition and an invoice for a sample job",
    "objective": "Turn the details of one sample repair into three correct documents: a service report, a parts requisition and an invoice. All of the customer details below are invented.",
    "time": "60 minutes",
    "tools": [
      "Blank paper or a spreadsheet to draw the three forms (service report, parts requisition, invoice)",
      "Calculator",
      "Pen and ruler",
      "The sample job details from the steps below"
    ],
    "safety": [
      "This is a paper exercise. Do not open or work on any real machine for it.",
      "Use only the invented customer and machine details given here. Never put real customer names, passwords or card numbers on practice forms.",
      "If your instructor lets you copy details from a real training machine, switch it off and unplug it first.",
      "Check each calculation twice. A wrong invoice charges the customer incorrectly.",
      "Remember in real work: customers must never be charged for work that was not done."
    ],
    "steps": [
      "Copy these sample details onto a call log. Customer: Asante Print and Stationery, contact Ms Ama Boateng. Machine: monochrome multifunction product, serial AB-4471-X (sample number). Fault reported: 'Tray 2 does not feed paper, display shows a paper jam code'. Call logged at 08:20. Contract status: pay per visit.",
      "Set the priority as medium. Plan the visit: the appointment is 09:30, the drive is 40 minutes and your buffer is 10 minutes. Work out your leaving time (09:30 minus 50 minutes = 08:40) and write it on the call log.",
      "List the parts and tools to take: a pick-up roller (sample code P-1001), a separation pad (sample code P-1002), cleaning cloth, test paper, hand tools and the service manual for the model. Check the manufacturer's service manual for the correct part numbers.",
      "Start the service report. Fill the header: customer, address, machine, serial number, arrival time 09:20, departure time 10:50, and meter reading on arrival 84,215.",
      "Write the fault, cause and action in clear words. Cause: pick-up roller rubber hard and glazed, separation pad worn smooth. Action: cleaned tray 2 paper path, fitted a new pick-up roller and a new separation pad.",
      "Record the parts used on the report: 1 pick-up roller and 1 separation pad. Record the test: 20 sheets from tray 2 with no misfeeds. Record the meter after the tests: 84,231. Work out the test prints (84,231 minus 84,215).",
      "Calculate time on site from the report (10:50 minus 09:20) and convert it to hours for billing. Add this recommendation: 'Tray 3 pick-up roller shows early wear; replace at next PM. Customer will decide later.' Add a line for the customer's name and signature, and ask a partner to practise signing.",
      "Write the parts requisition. Stock before the job: pick-up roller 3, separation pad 5. Reorder levels: roller 3, pad 3. Maximum levels: roller 8, pad 10. Work out stock after the job and decide which part must be ordered and how many (maximum minus stock on hand).",
      "Start the invoice. Lines: call-out fee 15.00; labour at 36.00 per hour for the billed hours; 1 pick-up roller at 18.00; 1 separation pad at 9.50. The example tax rate is 10%. There is no discount. Payment terms: due within 14 days of the invoice date (example terms).",
      "Calculate the labour line, the parts total and the subtotal. Then calculate the tax and the total. Write each figure on the invoice.",
      "Check the invoice by working backwards: divide the total by 1.10. You should get back to your subtotal.",
      "Compare with these answers: test prints 16; time on site 1 h 30 min = 1.5 h; labour 54.00; parts 27.50; subtotal 96.50; tax 9.65; total 106.15; roller stock after the job 2, so order 6 (8 - 2); pad stock after the job 4, so no order. Correct any differences, and look for the cause of each mistake."
    ],
    "checks": [
      "I can write a call log entry with the details a technician needs before travelling.",
      "I can work out a leaving time from an appointment, travel time and buffer.",
      "I can write a service report with fault, cause, action, parts, meter counts and test result in clear words.",
      "I can convert hours and minutes into decimal hours and calculate labour cost.",
      "I can calculate a subtotal, tax and total on an invoice and check them.",
      "I can decide whether a part needs ordering and how many to order."
    ]
  },
  "quiz": [
    {
      "id": "m17-q01",
      "q": "What is the main purpose of a job ticket when a service call comes in?",
      "options": [
        "To record the request in writing so nothing depends on memory",
        "To tell the customer the final price of the repair",
        "To prove that the technician has finished the repair and can be paid for it",
        "To order the parts from the supplier automatically"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m17-l1",
      "explain": "The ticket records who called, which machine and what the fault is, from the start. Proof of completion is the job of the signed service report, and price comes later in an estimate or invoice."
    },
    {
      "id": "m17-q02",
      "q": "A shop phones: its only receipt printer has failed and it cannot take sales. Another customer has booked a routine cleaning of an office printer that works fine. Which job do you do first?",
      "options": [
        "The cleaning, because it was booked earlier and is quicker",
        "Whichever customer is closer to the workshop",
        "The receipt printer, because the shop cannot trade at all",
        "Neither, until both customers confirm the time again"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m17-l1",
      "explain": "Priority follows the effect on the customer. A shop that cannot take sales loses money every hour. The routine cleaning is low priority and can be moved to another time."
    },
    {
      "id": "m17-q03",
      "q": "Your appointment is at 14:00. The drive takes 40 minutes and you want a 20-minute buffer. What is the latest time you should leave?",
      "options": [
        "13:20",
        "13:00",
        "13:40",
        "12:40"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l1",
      "explain": "40 + 20 = 60 minutes, and 14:00 minus 60 minutes = 13:00. Leaving at 13:20 would only cover the drive and the buffer would be missing."
    },
    {
      "id": "m17-q04",
      "q": "A customer phones to say a copier is giving off smoke and a burning smell. What should you tell them first?",
      "options": [
        "Open the covers and look for the burning part, then call back",
        "Run one more test copy to see if it happens again",
        "Leave it until the next planned maintenance visit",
        "Switch off at the wall and unplug it if safe, keep clear, and wait for you"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m17-l1",
      "explain": "Smoke or a burning smell is a safety risk, so the first step is to remove power and keep people away. Opening covers or running more copies could make the danger worse."
    },
    {
      "id": "m17-q05",
      "q": "Which detail on the machine's label best identifies that exact machine in your records?",
      "options": [
        "The room name where it stands",
        "The colour of the casing",
        "The serial number",
        "The date of the customer's first call"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m17-l1",
      "explain": "A serial number is unique to one machine. The room name changes when a machine is moved, and many machines of one model share the same colour."
    },
    {
      "id": "m17-q06",
      "q": "Which of these cause entries is clear and useful for the next technician?",
      "options": [
        "Pick-up roller rubber hard and glazed; it could not grip the paper",
        "Fixed the paper jam",
        "Replaced parts and tested",
        "Machine was misbehaving"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m17-l2",
      "explain": "A good cause entry names the part and describes what was wrong with it. 'Fixed the paper jam' describes the symptom and gives no reason for it."
    },
    {
      "id": "m17-q07",
      "q": "The copier meter reads 78,940 on arrival and 78,964 after your test prints. How many test prints were made?",
      "options": [
        "14",
        "34",
        "124",
        "24"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m17-l2",
      "explain": "78,964 minus 78,940 = 24. Subtract the earlier reading from the later one. The other numbers come from subtraction slips."
    },
    {
      "id": "m17-q08",
      "q": "Why should you write the service report during the visit instead of later from memory?",
      "options": [
        "Customers refuse to sign reports that are written after you leave",
        "Readings, times and part numbers are easily forgotten or mixed up",
        "Reports must always be handwritten on site",
        "The manager needs to read it before you drive away"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l2",
      "explain": "Facts such as the meter count, times and part numbers fade quickly, and an inaccurate report leads to wrong invoices. A report can be typed, and the rest of the options are not real rules."
    },
    {
      "id": "m17-q09",
      "q": "You recommended replacing a worn fuser, and the customer declined because of cost. What should the report show?",
      "options": [
        "Nothing, because no work was done on the fuser",
        "Only that the machine was working when you left the customer's site",
        "The price list for fusers",
        "Your recommendation and that the customer declined it"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m17-l2",
      "explain": "Recording the recommendation protects you and shows the customer was informed. Leaving it out would give the next technician and your employer no way to know the risk was explained."
    },
    {
      "id": "m17-q10",
      "q": "You arrive on site at 14:05 and leave at 15:20. How long were you on site, in decimal hours?",
      "options": [
        "1.25 h",
        "1.15 h",
        "1.35 h",
        "1.50 h"
      ],
      "answer": 0,
      "level": 2,
      "lesson": "m17-l2",
      "explain": "15:20 minus 14:05 is 1 h 15 min. 15 min ÷ 60 = 0.25 h, so the answer is 1.25 h. Writing 1.15 mixes up minutes with a decimal."
    },
    {
      "id": "m17-q11",
      "q": "Which of these should be left off a service report?",
      "options": [
        "The error code shown on the display",
        "A network password the customer read out to you",
        "The serial number of the machine",
        "The part numbers of the parts fitted"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l2",
      "explain": "Reports are passed to the office, stored and sometimes shared, so passwords and card numbers must never be written on them. The other items are normal technical facts."
    },
    {
      "id": "m17-q12",
      "q": "What does the reorder level of a part mean?",
      "options": [
        "The most of that part you can store on the shelf at one time, by space",
        "The price at which the supplier sells the part",
        "The number of that part used on the last job",
        "The stock quantity at which you must place a new order"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m17-l3",
      "explain": "The reorder level is the trigger point. The most you can store is the maximum level, which is a different number."
    },
    {
      "id": "m17-q13",
      "q": "A roller kit is used at 4 per week. The supplier's lead time is 2 weeks. You keep a safety stock of 3. What is the reorder level?",
      "options": [
        "8",
        "9",
        "11",
        "24"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m17-l3",
      "explain": "Use during lead time = 4 × 2 = 8. Add safety stock of 3 to get 11. The figure 8 leaves no safety stock."
    },
    {
      "id": "m17-q14",
      "q": "Reorder level is 11 and maximum level is 20. Stock on hand has fallen to 11 and nothing is on order. How many should you order to reach the maximum?",
      "options": [
        "9",
        "11",
        "20",
        "22"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m17-l3",
      "explain": "Order quantity = 20 - 11 - 0 = 9. Ordering 20 would bring stock to 31, well over the maximum."
    },
    {
      "id": "m17-q15",
      "q": "The delivery note lists 10 separation pads, but the box holds 8. What should you do?",
      "options": [
        "Sign for 10 and count them later when you are less busy",
        "Note the shortage of 2 on the delivery document, then report it to the supplier",
        "Refuse the whole delivery and send the box back unopened",
        "Take 2 pads from existing stock so that the records match"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l3",
      "explain": "Record the shortage before signing and tell the supplier at once. Signing for 10 says you received 10, and adding pads from stock hides the problem."
    },
    {
      "id": "m17-q16",
      "q": "A pick-up roller wears slowly and is replaced at set intervals. How is it classed?",
      "options": [
        "Consumable",
        "Repair part",
        "Capital equipment",
        "Wear part"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m17-l3",
      "explain": "Wear parts are replaced as they wear, often in a maintenance kit. A consumable such as toner is used up in normal operation, and a repair part is only replaced after it fails."
    },
    {
      "id": "m17-q17",
      "q": "What does FIFO mean in a parts store?",
      "options": [
        "First in, first out: the oldest stock is used first",
        "Fastest in, fastest out: popular parts go at the front",
        "Fix it first, order later",
        "Fewest items first: small bins are emptied first"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m17-l3",
      "explain": "FIFO uses the oldest stock first, which matters because toner and rubber parts age on the shelf. The other options are not stock-control rules."
    },
    {
      "id": "m17-q18",
      "q": "A pick-up roller you fitted last week has already failed. What is the best way to support a warranty claim?",
      "options": [
        "Throw it away and order a new one to save time",
        "Put it in the parts bin with the unused rollers",
        "Label it with job, date and fault, keep it, and ask the supplier for a return number",
        "Send it back with no paperwork and hope for a credit"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m17-l3",
      "explain": "A labelled part with a return number lets the supplier check the fault and issue a credit. A failed part mixed with good stock might be fitted again by mistake."
    },
    {
      "id": "m17-q19",
      "q": "Which document is a fixed price, valid for a stated time, that the business must honour?",
      "options": [
        "Estimate",
        "Invoice",
        "Delivery note",
        "Quotation"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m17-l4",
      "explain": "A quotation is a fixed offer. An estimate is only an approximate cost and may change, and an invoice asks for payment after the work."
    },
    {
      "id": "m17-q20",
      "q": "A job takes 2 h 30 min and your labour rate is 36.00 per hour. What is the labour charge?",
      "options": [
        "72.00",
        "90.00",
        "108.00",
        "82.80"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l4",
      "explain": "30 minutes is 0.5 h, so 2.5 × 36.00 = 90.00. The figure 82.80 comes from wrongly writing 2 h 30 min as 2.30 h."
    },
    {
      "id": "m17-q21",
      "q": "Parts cost 80.00 and labour is 120.00. Tax is charged at an example rate of 10% on the whole subtotal, with no discount. What is the total?",
      "options": [
        "220.00",
        "208.00",
        "212.00",
        "230.00"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m17-l4",
      "explain": "Subtotal = 80.00 + 120.00 = 200.00. Tax = 20.00, so the total is 220.00. Taxing only parts or only labour gives a wrong total."
    },
    {
      "id": "m17-q22",
      "q": "An invoice subtotal is 200.00. A 10% discount applies, then tax of 10% (an example rate) is charged on the discounted amount. What is the total?",
      "options": [
        "200.00",
        "180.00",
        "198.00",
        "220.00"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m17-l4",
      "explain": "Discount: 200.00 - 20.00 = 180.00. Tax: 18.00. Total: 198.00. The figure 200.00 is wrong because it takes tax on the full 200.00 instead of 180.00."
    },
    {
      "id": "m17-q23",
      "q": "A price of 55.00 includes tax at an example rate of 10%. What is the price without tax?",
      "options": [
        "49.50",
        "50.00",
        "45.00",
        "60.50"
      ],
      "answer": 1,
      "level": 3,
      "lesson": "m17-l4",
      "explain": "Divide by 1.10: 55.00 ÷ 1.10 = 50.00. Taking 10% off 55.00 gives 49.50, which is wrong because the tax was 10% of the smaller price, not of 55.00."
    },
    {
      "id": "m17-q24",
      "q": "You quoted 150.00 for a repair. After opening the machine you find a second fault that would cost another 60.00 to fix. What is the honest next step?",
      "options": [
        "Do the work and add 60.00 to the invoice, then explain later",
        "Fix it and absorb the cost without telling anyone",
        "Stop and tell the customer about the fault and the extra cost, and get agreement first",
        "Fix it and list it on the invoice as general adjustments"
      ],
      "answer": 2,
      "level": 2,
      "lesson": "m17-l4",
      "explain": "The customer must agree before the price goes beyond what you quoted. Adding charges afterwards or hiding them under vague wording is dishonest pricing."
    },
    {
      "id": "m17-q25",
      "q": "An invoice says 'Payment terms: 30 days'. What does this mean?",
      "options": [
        "The customer must pay half within 30 days",
        "The repair is guaranteed for 30 days",
        "The customer should pay within 30 days of the invoice date",
        "The work must be finished within 30 days"
      ],
      "answer": 2,
      "level": 1,
      "lesson": "m17-l4",
      "explain": "Payment terms state when payment is due. A guarantee period is called a warranty and is shown separately."
    },
    {
      "id": "m17-q26",
      "q": "You start at 08:30 and finish at 16:45 with a 45-minute unpaid break. How many hours did you work?",
      "options": [
        "7 h 30 min (7.5 h)",
        "8 h 15 min (8.25 h)",
        "7 h 15 min (7.25 h)",
        "9 h 00 min (9.0 h)"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m17-l5",
      "explain": "Start to finish is 8 h 15 min. Subtracting the 45-minute break gives 7 h 30 min. The 8 h 15 min answer forgets the break."
    },
    {
      "id": "m17-q27",
      "q": "Why should a business keep one record per customer instead of several?",
      "options": [
        "It saves paper",
        "The law forbids duplicate records",
        "Calendars become faster",
        "Everyone sees the same current contacts, machines and history"
      ],
      "answer": 3,
      "level": 1,
      "lesson": "m17-l5",
      "explain": "Duplicates drift apart, with different phone numbers and different job histories, and then nobody knows which is correct. The other reasons are minor or untrue."
    },
    {
      "id": "m17-q28",
      "q": "When is a database clearly a better choice than a spreadsheet?",
      "options": [
        "To keep a single list of 20 parts and add up their cost",
        "When customers, machines and jobs are linked and many people search them at once",
        "To do a one-off sum for one invoice",
        "To print one technician's time sheet for a week"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l5",
      "explain": "Databases handle linked tables and many users working together. Small, single-user lists and one-off sums are fine in a spreadsheet."
    },
    {
      "id": "m17-q29",
      "q": "What is a retention period for business records?",
      "options": [
        "The time a record must or may be kept before secure deletion, set by law and company policy",
        "The time the customer has to pay an invoice",
        "The length of a parts warranty",
        "The time between two preventive maintenance visits"
      ],
      "answer": 0,
      "level": 1,
      "lesson": "m17-l5",
      "explain": "Retention is about how long records are kept. Payment time, warranty length and PM intervals are different periods. The exact retention period depends on your country, so ask your employer."
    },
    {
      "id": "m17-q30",
      "q": "PM is due every 100,000 prints. The last PM was at 250,000 and the meter now reads 347,500. How many prints remain before the next PM?",
      "options": [
        "97,500",
        "102,500",
        "2,500",
        "5,000"
      ],
      "answer": 2,
      "level": 3,
      "lesson": "m17-l6",
      "explain": "The next PM is due at 350,000, and 350,000 - 347,500 = 2,500. The figure 97,500 would apply only if the last PM had been done at 250,000 minus 2,500."
    },
    {
      "id": "m17-q31",
      "q": "A contract has a click charge of 0.02 (an example rate) per print. The customer made 4,500 prints this month. What is the charge?",
      "options": [
        "9.00",
        "90.00",
        "900.00",
        "225.00"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l6",
      "explain": "4,500 × 0.02 = 90.00. Moving the decimal point wrongly gives 9.00 or 900.00."
    },
    {
      "id": "m17-q32",
      "q": "You have a box of used toner cartridges and old batteries from customer sites. What is the correct way to dispose of them?",
      "options": [
        "Burn them behind the workshop to save space",
        "Put them in the general rubbish bin",
        "Leave them with the customer for the customer to deal with",
        "Pass them to an authorised recycler or waste carrier and keep the paperwork"
      ],
      "answer": 3,
      "level": 2,
      "lesson": "m17-l6",
      "explain": "Toner and batteries need special handling under local waste rules. Burning or binning them harms health and the environment, and leaving them with the customer only moves the problem."
    },
    {
      "id": "m17-q33",
      "q": "You buy a part for 20.00 and add a 50% mark-up on cost. What is the selling price?",
      "options": [
        "30.00",
        "25.00",
        "40.00",
        "70.00"
      ],
      "answer": 0,
      "level": 3,
      "lesson": "m17-l6",
      "explain": "50% of 20.00 is 10.00, so the price is 30.00. A price of 40.00 would be a 100% mark-up."
    },
    {
      "id": "m17-q34",
      "q": "Your work laptop holds customer records. What is the best way to protect them?",
      "options": [
        "Share the password with colleagues so anyone can use it",
        "Use a password, lock the screen when away and keep it out of sight in a vehicle",
        "Copy all the records to a memory stick and keep it in the vehicle",
        "Print every customer's details and carry the papers"
      ],
      "answer": 1,
      "level": 2,
      "lesson": "m17-l5",
      "explain": "Passwords, screen locks and keeping devices out of sight reduce the chance of data being seen or stolen. Extra copies on sticks or paper only create more things that can be lost."
    }
  ],
  "cards": [
    {
      "id": "m17-c01",
      "front": "What is a service request?",
      "back": "A customer's report that a machine needs attention. It is written on a job ticket when the call arrives.",
      "lesson": "m17-l1"
    },
    {
      "id": "m17-c02",
      "front": "What is a job ticket?",
      "back": "A record of one job from the first call to closing, holding customer, machine, fault and status.",
      "lesson": "m17-l1"
    },
    {
      "id": "m17-c03",
      "front": "What does a service level agreement (SLA) promise?",
      "back": "A written response time, for example how fast a technician will attend after a call.",
      "lesson": "m17-l1"
    },
    {
      "id": "m17-c04",
      "front": "Customer reports smoke from a copier. What do you tell them first?",
      "back": "Switch off at the wall and unplug if safe, keep clear, do not open it. Treat as high priority.",
      "lesson": "m17-l1"
    },
    {
      "id": "m17-c05",
      "front": "Why add a buffer to travel time?",
      "back": "It covers parking, finding the contact and signing in, so you arrive on time.",
      "lesson": "m17-l1"
    },
    {
      "id": "m17-c06",
      "front": "What is a service report?",
      "back": "The written record of a visit: it supports the invoice, proves the work and helps the next technician.",
      "lesson": "m17-l2"
    },
    {
      "id": "m17-c07",
      "front": "List the parts of a service report.",
      "back": "Fault, cause, action, parts, readings, meter counts, test result and customer sign-off.",
      "lesson": "m17-l2"
    },
    {
      "id": "m17-c08",
      "front": "How do you find test prints from meter readings?",
      "back": "Meter after minus meter before. Example: 51,312 - 51,300 = 12.",
      "lesson": "m17-l2"
    },
    {
      "id": "m17-c09",
      "front": "Convert 1 h 45 min to decimal hours.",
      "back": "1.75 h, because 45 ÷ 60 = 0.75.",
      "lesson": "m17-l2"
    },
    {
      "id": "m17-c10",
      "front": "What should never be written on a service report?",
      "back": "Passwords, payment card numbers and private contents of the customer's documents.",
      "lesson": "m17-l2"
    },
    {
      "id": "m17-c11",
      "front": "What is the reorder level?",
      "back": "The stock quantity at which a new order must be placed.",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c12",
      "front": "Formula for reorder level?",
      "back": "Use during lead time + safety stock. Use during lead time = use per week × lead time in weeks.",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c13",
      "front": "Formula for order quantity?",
      "back": "Maximum level - stock on hand - stock already on order.",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c14",
      "front": "What is lead time?",
      "back": "The time between placing an order and receiving the parts.",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c15",
      "front": "What is safety stock?",
      "back": "A small extra quantity that covers late deliveries or a busy period.",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c16",
      "front": "What are consumables, wear parts and repair parts?",
      "back": "Consumables are used up (toner). Wear parts wear slowly (rollers). Repair parts are replaced on failure (boards).",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c17",
      "front": "What does FIFO mean?",
      "back": "First in, first out. The oldest stock is used first.",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c18",
      "front": "What do you do if a delivery is short?",
      "back": "Write the shortage on the delivery document before signing and report it to the supplier.",
      "lesson": "m17-l3"
    },
    {
      "id": "m17-c19",
      "front": "Estimate, quotation, invoice: what is each?",
      "back": "Estimate: approximate cost. Quotation: fixed price for a stated time. Invoice: request for payment after work.",
      "lesson": "m17-l4"
    },
    {
      "id": "m17-c20",
      "front": "What is a call-out fee?",
      "back": "A fixed charge for attending the site, covering travel and set-up.",
      "lesson": "m17-l4"
    },
    {
      "id": "m17-c21",
      "front": "Order of steps on an invoice?",
      "back": "Add all lines to a subtotal, subtract the discount, then add tax on the discounted amount (if local rules say so).",
      "lesson": "m17-l4"
    },
    {
      "id": "m17-c22",
      "front": "How do you remove tax from a price that includes it?",
      "back": "Divide by (1 + rate). At 10%, divide by 1.10.",
      "lesson": "m17-l4"
    },
    {
      "id": "m17-c23",
      "front": "What are payment terms?",
      "back": "The agreed time for the customer to pay, for example within 30 days of the invoice date.",
      "lesson": "m17-l4"
    },
    {
      "id": "m17-c24",
      "front": "What should you do when you find an extra fault that raises the price?",
      "back": "Stop, tell the customer the extra cost and get agreement before continuing.",
      "lesson": "m17-l4"
    },
    {
      "id": "m17-c25",
      "front": "What is a retention period?",
      "back": "How long a record must be kept before secure deletion. Laws and company policy set it; it differs by country.",
      "lesson": "m17-l5"
    },
    {
      "id": "m17-c26",
      "front": "Billable and non-billable time?",
      "back": "Billable: work charged to a customer. Non-billable: travel between jobs, stock counts, training.",
      "lesson": "m17-l5"
    },
    {
      "id": "m17-c27",
      "front": "Spreadsheet or database for linked customers, machines and jobs?",
      "back": "A database. It links tables and lets many users search and update at the same time.",
      "lesson": "m17-l5"
    },
    {
      "id": "m17-c28",
      "front": "What is preventive maintenance (PM)?",
      "back": "Regular cleaning, inspection and replacement of wear parts before they fail.",
      "lesson": "m17-l6"
    },
    {
      "id": "m17-c29",
      "front": "What is a click charge?",
      "back": "A charge for each print counted by the machine meter.",
      "lesson": "m17-l6"
    },
    {
      "id": "m17-c30",
      "front": "Formula for mark-up percentage?",
      "back": "(Selling price - cost) ÷ cost × 100.",
      "lesson": "m17-l6"
    }
  ]
});

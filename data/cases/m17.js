OMM.registerCases("m17", [
  {
    "id": "m17-d1",
    "title": "Customer disputes the invoice total",
    "level": 1,
    "lesson": "m17-l4",
    "report": "A customer phones to say invoice 0438 is too high. The service report shows parts 120.00, labour 2 hours at 45.00 an hour, and a call-out charge of 30.00. The tax rate is 10%. The invoice total reads 290.40. The customer expected about 264.00 and wants an explanation.",
    "checks": [
      { "id": "c1", "label": "Open the service report and the invoice side by side", "result": "Both list the same parts, the same 2 hours of labour and the same call-out charge. The items match.", "type": "key" },
      { "id": "c2", "label": "Work out the correct subtotal before tax", "result": "Parts 120.00 + labour 2 × 45.00 = 90.00 + call-out 30.00 gives a subtotal of 240.00.", "type": "key" },
      { "id": "c3", "label": "Work out the correct tax and total", "result": "Tax at 10% on 240.00 is 24.00, so the total is 264.00. That is what the customer expected.", "type": "key" },
      { "id": "c4", "label": "Compare the invoice's tax line with the correct figure", "result": "The invoice shows tax of 50.40. 264.00 × 10% = 26.40, so 264.00 + 26.40 = 290.40. Tax was added twice.", "type": "key" },
      { "id": "c5", "label": "Check the invoice template's tax settings", "result": "The template adds tax to the subtotal, then adds tax again to the tax-included total. The setting is wrong.", "type": "useful" },
      { "id": "c6", "label": "Ask the customer to pay the invoice and claim a refund later", "result": "This is unfair and wastes the customer's time. A wrong invoice should be corrected first.", "type": "low" },
      { "id": "c7", "label": "Lower the labour rate to bring the total down", "result": "This hides the error and misrepresents the work. The labour figure is correct.", "type": "low" },
      { "id": "c8", "label": "Tell the customer the invoice is correct and they must pay the full 290.40", "result": "Unsafe for the business and unfair to the customer: the total is wrong, and insisting on it breaks the honesty rule.", "type": "unsafe" },
      { "id": "c9", "label": "Check the payment terms on the invoice", "result": "The terms say payment is due within 30 days. This is not the cause of the dispute.", "type": "useful" }
    ],
    "areas": [
      "The tax calculation on the invoice",
      "The labour hours",
      "The parts list",
      "The payment terms"
    ],
    "area": 0,
    "faults": [
      "Tax was added twice, once to the subtotal and once to the total with tax",
      "The labour was billed for the wrong number of hours because the timesheet was copied twice",
      "A part was billed that was never fitted",
      "The call-out fee was entered twice"
    ],
    "fault": 0,
    "repairs": [
      "Issue a credit note and a corrected 264.00 invoice, and fix the template",
      "Ask the customer to pay the 290.40 now and claim the difference back as a refund later",
      "Lower the labour rate",
      "Tell the customer the invoice is right"
    ],
    "repair": 0,
    "verify": [
      "Check the new invoice adds to 264.00, tell the customer in writing, and log it",
      "Send the corrected invoice by post and then wait for payment before doing anything else",
      "Phone the customer and say sorry",
      "Print the invoice again"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The items match the report, so the problem is how the total was calculated. The tax calculation is the place to look.",
      "fault": "290.40 is 264.00 with a further 10% added. The template taxed a total that already included tax, so the customer was overcharged by 26.40.",
      "repair": "Correct the figure with a credit note and a new invoice, and fix the template so the error is not repeated. Charging the wrong amount and refunding later is not honest pricing.",
      "verify": "Check the corrected invoice adds up to the right total and tell the customer in writing. Record the change so the correction can be traced."
    }
  },
  {
    "id": "m17-d2",
    "title": "The same part keeps running out of stock",
    "level": 2,
    "lesson": "m17-l3",
    "report": "A service firm often has no pick-up rollers in stock when a technician needs one, and has to make a second visit. It uses about 6 rollers a week. The supplier takes 2 weeks to deliver. The stock sheet shows a minimum level of 5 and a maximum of 30. Orders are placed only when stock falls to the minimum.",
    "checks": [
      { "id": "c1", "label": "Check the usage records for the part over the last three months", "result": "The firm uses about 6 pick-up rollers a week, with some weeks at 8.", "type": "key" },
      { "id": "c2", "label": "Check the supplier's delivery time", "result": "The supplier takes 2 weeks from order to delivery, and has been late once.", "type": "key" },
      { "id": "c3", "label": "Work out the stock used during the delivery wait", "result": "6 per week × 2 weeks = 12 rollers used while waiting. A minimum of 5 runs out before the delivery arrives.", "type": "key" },
      { "id": "c4", "label": "Look at the stock sheet and the dates when the part ran out", "result": "Each stock-out came about a week after an order was placed at the minimum level of 5.", "type": "key" },
      { "id": "c5", "label": "Check the maximum level and the shelf space", "result": "The maximum of 30 is fine. There is plenty of room for more.", "type": "useful" },
      { "id": "c6", "label": "Ask whether a faster supplier is available", "result": "One supplier delivers in 3 days but charges more per part. It is an option for urgent orders.", "type": "useful" },
      { "id": "c7", "label": "Raise the maximum level to 100 so the shelf is always full", "result": "This ties up money and storage, and does not fix the late reorder. The reorder point is the problem.", "type": "low" },
      { "id": "c8", "label": "Stop stocking the part and order it only when needed", "result": "Each job would then wait two weeks, which would make service worse.", "type": "low" },
      { "id": "c9", "label": "Take rollers from a customer's spare stock to cover the gap without asking", "result": "Unsafe: taking a customer's property without permission is dishonest and breaks the rules on stock and customer property.", "type": "unsafe" }
    ],
    "areas": [
      "The reorder level set for the part",
      "The shelf space",
      "The supplier's price",
      "The technicians' training"
    ],
    "area": 0,
    "faults": [
      "The minimum of 5 is below the 12 rollers used during the 2-week wait",
      "The maximum level is too low for the shelf",
      "The supplier delivers the wrong part",
      "Technicians are using too many rollers on each job, so the usage figures are inflated"
    ],
    "fault": 0,
    "repairs": [
      "Raise the reorder level to cover usage during the wait plus a safety margin",
      "Raise the maximum to 100",
      "Stop stocking the part",
      "Borrow rollers from a customer's spare stock whenever the shelf is empty, and return them later"
    ],
    "repair": 0,
    "verify": [
      "Watch stock and stock-outs for a few months and adjust the level",
      "Check the stock sheet once and file it",
      "Order a large batch and leave it",
      "Tell the technicians to be more careful with the rollers they take from the shelf"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "Stock-outs come a week after each order at the minimum, so the level that triggers the order is where the problem lies.",
      "fault": "With 6 used a week and a 2-week wait, 12 rollers are needed during delivery. A reorder level of 5 means the shelf is empty long before the order arrives.",
      "repair": "Raise the reorder level to cover usage during the wait plus a safety margin. A large maximum only ties up money, and borrowing a customer's parts is dishonest.",
      "verify": "Watch stock and stock-outs over the next few months and adjust the level. Stock levels depend on real usage and delivery times, which change."
    }
  },
  {
    "id": "m17-d3",
    "title": "Repeat visit because the report was too thin",
    "level": 3,
    "lesson": "m17-l2",
    "report": "A copier was repaired last month for jams. It now jams again, and a different technician is sent. The earlier service report says only 'Fixed jam, tested OK' with no fault, cause, parts, meter reading or customer signature. The customer is unhappy and says nobody told them what was wrong. They ask whether they are being charged twice.",
    "checks": [
      { "id": "c1", "label": "Read the old service report and note what is missing", "result": "It has no fault description, no cause, no parts used, no meter readings and no customer sign-off. It cannot show what was done.", "type": "key" },
      { "id": "c2", "label": "Check the job history and the parts records for the machine", "result": "The stock record shows a pick-up roller was used on that date, but the report does not mention it.", "type": "key" },
      { "id": "c3", "label": "Inspect the machine to find the cause of the new jam", "result": "The new jam is in the registration area. The pick-up roller replaced last month is fine, so this is a different fault.", "type": "key" },
      { "id": "c4", "label": "Talk to the earlier technician and fill in what they remember, marked as a late note", "result": "The technician confirms the roller replacement and the page count. You add the details to the record, dated and attributed.", "type": "key" },
      { "id": "c5", "label": "Check whether the first repair is under warranty or covered in the contract", "result": "The earlier work has a 30-day warranty on parts and labour, but this new fault is separate.", "type": "useful" },
      { "id": "c6", "label": "Tell the customer the first job was done well and they must pay again", "result": "Without a proper report you cannot show that. The customer's complaint is fair.", "type": "low" },
      { "id": "c7", "label": "Delete the old report and write a new one as if you did the first job", "result": "Unsafe: changing records to hide a gap is dishonest and breaks record-keeping rules. Add a dated note instead.", "type": "unsafe" },
      { "id": "c8", "label": "Replace the whole feed assembly to be safe", "result": "The cause is in the registration area. Replacing the feed assembly would cost the customer for no reason.", "type": "low" },
      { "id": "c9", "label": "Explain to the customer in plain words what each visit covered", "result": "The customer understands that the first visit fixed the pick-up and this one is a separate fault, and agrees to proceed.", "type": "useful" }
    ],
    "areas": [
      "The quality of the earlier service report",
      "The registration rollers only",
      "The customer's paper",
      "The invoice template"
    ],
    "area": 0,
    "faults": [
      "The earlier report lacked the fault, cause, parts and readings, so the work cannot be shown",
      "The first repair failed because the wrong part was fitted and the machine was never tested after it",
      "The customer is using damp paper that causes new jams",
      "The invoice was sent to the wrong address"
    ],
    "fault": 0,
    "repairs": [
      "Complete the records with dated notes, explain each visit, repair the new fault and report it",
      "Delete the old report and write a new one that covers everything the customer has asked about so far",
      "Charge the customer again and move on",
      "Replace the feed assembly"
    ],
    "repair": 0,
    "verify": [
      "Check the report lists fault, cause, action, parts, readings and result, and get the customer's signature",
      "File the report and say nothing more",
      "Phone the earlier technician to say you have read the old report, and then leave the matter there for the office to deal with",
      "Email the customer a copy only"
    ],
    "verifyAns": 0,
    "explain": {
      "area": "The jam is new, but the dispute comes from a report that cannot show what was done. The quality of the report is the area to put right.",
      "fault": "A report without fault, cause, parts, readings or sign-off cannot prove the work, so the customer cannot see what they paid for.",
      "repair": "Add dated, attributed notes rather than altering or deleting the old report, explain both visits plainly, and report the new job fully. Rewriting records is dishonest.",
      "verify": "Check the new report is complete and signed so it can be audited. A copy emailed without a sign-off still leaves the customer unsure what was done."
    }
  }
]);

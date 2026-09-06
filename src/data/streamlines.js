// The Common Streamlines catalog. One is live today; the rest are the
// prioritized build backlog, ranked by how universal the pain is (not by
// build effort). Cards on /streamlines are generated from this list.

export const streamlines = [
  {
    name: 'Appointment Bookings',
    status: 'live',
    pain: 'Every booking that goes to voicemail is a customer deciding whether to bother calling back.',
    logic: 'If a customer picks a time on your site, the slot is booked, the confirmation goes out, and the reminders are scheduled.',
    youSee: 'A booking page that shows real availability and confirms on the spot.',
    dashboardSee: 'The calendar fills itself. No phone tag, no double-booking.',
  },

  // --- Build next: the most universally recognized SMB pains ---
  {
    name: 'Missed-Call Text-Back',
    status: 'coming-soon',
    pain: 'A ringing phone nobody answers is a lead calling the next name on the list.',
    logic: 'If a call goes unanswered, the caller gets an instant text and a lead lands on the dashboard.',
    youSee: 'A text within seconds of hanging up.',
    dashboardSee: 'A new lead card tagged "missed call."',
  },
  {
    name: 'New Lead Follow-Up',
    status: 'coming-soon',
    pain: 'A contact form checked once a day loses the leads who wanted an answer today.',
    logic: "If a lead submits the site's contact form, they get an instant reply and a pipeline card opens on its own.",
    youSee: 'An immediate "we got it" email or text.',
    dashboardSee: 'A new card in the pipeline board, with no retyping.',
  },
  {
    name: 'Invoice on Job Completion',
    status: 'coming-soon',
    pain: 'Invoices that wait for someone to remember to write them get paid late, if at all.',
    logic: 'If a job is marked complete, an invoice generates from its line items and sends, with no retyping.',
    youSee: 'An invoice with a pay-now link, minutes later.',
    dashboardSee: 'Status flips from "invoiced" to "paid" on its own.',
  },
  {
    name: 'Review Requests',
    status: 'coming-soon',
    pain: 'Happy customers rarely leave reviews on their own. Unhappy ones go straight to Google.',
    logic: 'If a job or visit is marked complete, the customer is asked to rate it, and the score decides where it goes next.',
    youSee: 'A one-tap 1 to 5 rating link, a few hours later.',
    dashboardSee: '4 and 5 star ratings routed public, 1 to 3 star routed private with an alert.',
  },

  // --- Also strong: same bar, slightly narrower audience ---
  {
    name: 'Quote & Estimate Requests',
    status: 'coming-soon',
    pain: 'Ballparking a job over the phone or by email eats time that could go to paying work.',
    logic: 'If a customer submits a quote request, they get an instant range and it lands in a queue with a response clock.',
    youSee: 'A short intake form, then an instant range.',
    dashboardSee: 'A queue, oldest first, with a "respond by" timer.',
  },
  {
    name: 'Payment Reminders',
    status: 'coming-soon',
    pain: 'Chasing invoices by hand is awkward enough that it is easy to put off, so it does not happen.',
    logic: 'If an invoice goes unpaid past its due date, a reminder ladder fires on its own until it is settled.',
    youSee: 'A friendly nudge at day 3, firmer at 7 and 14.',
    dashboardSee: 'An aging report (0 to 30, 31 to 60, 60 plus), not a guess.',
  },
  {
    name: 'Cancellation Waitlist Fill',
    status: 'coming-soon',
    pain: 'A cancelled slot sits empty unless someone happens to remember who wanted it.',
    logic: 'If an appointment is cancelled, the waitlist gets texted the opening. First to claim it wins.',
    youSee: 'A text with a one-tap "claim this slot" link.',
    dashboardSee: 'The slot re-fills itself and the waitlist shrinks by one.',
  },
  {
    name: 'Intake & E-Signature',
    status: 'coming-soon',
    pain: 'Paper intake forms and mailed contracts stall a new client before the work even starts.',
    logic: 'If a new client fills out intake and signs, their file flips to "ready" with no one chasing paperwork.',
    youSee: 'One form with an embedded signature, done in a single sitting.',
    dashboardSee: 'A client record moving from "pending" to "signed" on its own.',
  },
  {
    name: 'Low-Stock Reorder Alerts',
    status: 'coming-soon',
    pain: 'Nobody notices stock is low until a customer asks for something that is not there.',
    logic: 'If a product drops below its reorder point, a purchase order drafts itself and heads for approval.',
    youSee: 'Nothing. The shelf just does not go empty.',
    dashboardSee: 'A reorder queue with drafted orders, one click to send.',
  },
  {
    name: '"We Miss You" Win-Back',
    status: 'coming-soon',
    pain: 'Customers drift away quietly, and nobody is tracking who is overdue for a visit.',
    logic: 'If a customer goes past their usual gap between visits, they get a check-in message with an offer, automatically.',
    youSee: 'A personal-feeling nudge, not a mass blast.',
    dashboardSee: 'A win-back log and a return rate, not a hunch.',
  },

  // --- Runners-up: real, but narrower or heavier to build ---
  {
    name: 'Referral Tracking & Rewards',
    status: 'coming-soon',
    pain: 'Word of mouth is the best channel and the hardest to track or reward consistently.',
    logic: "If a referred customer completes their first booking, the referrer's reward issues itself.",
    youSee: 'A personal referral link, and a reward that just shows up.',
    dashboardSee: 'Who referred whom, and which referrals converted.',
  },
  {
    name: 'Job & Work-Order Dispatch',
    status: 'coming-soon',
    pain: 'Assigning the next job by gut feel wastes drive time and leaves the closest tech idle.',
    logic: 'If a new service request comes in, it routes to the nearest available technician automatically.',
    youSee: 'A job on your phone with the address, notes, and a one-tap accept.',
    dashboardSee: 'Live status per job: en route, arrived, done.',
  },
]

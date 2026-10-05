// Product pages for /products/[slug]/.
// The 8 products already live on fielmente.com (CMS, Booking Engine, Payment Gateway, Email Marketing,
// WhatsApp Marketing, Local SEO, AI Chatbot, CRM) keep their existing pages; they're listed in
// `liveProducts` only so new pages and the hub can link to them.
//
// Lines marked  // REVIEW  describe a capability we couldn't confirm is live in Eazotel today —
// please check them before publishing (see README).

import type { IconKey } from "@/components/marketing/icons";

export type ProductMockKind = "requests" | "calls" | "channels" | "inbox";

export interface Product {
  slug: string;
  name: string;
  card: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLede: string;
  highlight: { value: string; label: string };
  image?: string;
  imageAlt: string;
  mock?: ProductMockKind;
  without: string[];
  withList: string[];
  featuresLede: string;
  features: { icon: IconKey; title: string; body: string }[];
  steps: { title: string; body: string }[];
  related: string[];
  faqs: { q: string; a: string }[];
}

export interface LiveProduct {
  slug: string;
  name: string;
  card: string;
  image: string;
}

/** Already published on fielmente.com — linked, not rebuilt. */
export const liveProducts: LiveProduct[] = [
  { slug: "hotel-cms", name: "CMS", card: "Easily manage hotel content, offers and promotions", image: "/products/cms.png" },
  { slug: "hotel-booking-engine", name: "Booking Engine", card: "Seamless booking engine designed for hotels", image: "/products/booking-engine.png" },
  { slug: "hotel-payment-gateway", name: "Payment Gateway", card: "Secure, integrated payments for smooth guest checkout", image: "/products/payment-gateway.png" },
  { slug: "hotel-email-marketing", name: "Email Marketing", card: "Automated and personalised campaigns", image: "/products/email-marketing.png" },
  { slug: "hotel-whatsapp-marketing", name: "WhatsApp Marketing", card: "Engage guests where they spend most time", image: "/products/whatsApp-marketing.png" },
  { slug: "hotel-local-seo", name: "Local SEO", card: "Rank higher on Google Maps and 'near me' searches", image: "/products/local-seo.png" },
  { slug: "hotel-ai-chatbot", name: "AI Chatbot", card: "Automate enquiries, FAQs and booking questions", image: "/products/AI-Chatbot.png" },
  { slug: "hotel-crm", name: "CRM", card: "Centralise guest data, manage loyalty", image: "/products/crm.png" },
];

const trialFaq = {
  q: "Is there a free trial?",
  a: "Yes. Fielmente products run on Eazotel, our hotel CRM and marketing platform, which comes with a 14-day free trial. Our team helps you set it up.",
};

export const products: Product[] = [
  /* ── AI Concierge ─────────────────────────────────────────── */
  {
    slug: "hotel-ai-concierge",
    name: "AI Concierge",
    card: "A 24/7 digital concierge for every in-stay question and request",
    metaTitle: "AI Concierge for Hotels | 24/7 Guest Assistance | Fielmente",
    metaDescription:
      "An AI concierge that answers guest questions, recommends experiences and takes in-stay requests 24/7 on WhatsApp and the web — trained on your hotel.",
    heroTitle: "An AI concierge that looks after guests all day and all night",
    heroLede:
      "Guests ask about breakfast timings, the spa, the nearest ATM or tomorrow's trek at any hour. The AI Concierge answers instantly from your hotel's own information, books in-house experiences and hands anything personal to your team.",
    highlight: { value: "24/7", label: "answers to guest questions, trained on your property" },
    image: "/products/AI-Concierge-Desk.png",
    imageAlt: "AI concierge answering hotel guest questions on a screen",
    without: [
      "The front desk answers the same questions dozens of times a day",
      "Late-night questions wait until morning, or go unanswered",
      "Spa, dining and activity upsells depend on who is on shift",
    ],
    withList: [
      "Instant answers from your hotel's own knowledge base",
      "Guests get help at 3 am as easily as at 3 pm",
      "Every conversation suggests the right in-house experience",
    ],
    featuresLede: "Trained on your menus, policies, rooms and neighbourhood — and set up for you by the Fielmente team.",
    features: [
      { icon: "brain", title: "Trained on your property", body: "Built from your website, menus, policies and PDFs, so answers are specific to your hotel — not generic." },
      { icon: "chats", title: "Where guests already are", body: "Works on WhatsApp and your website, and via a QR code in rooms and at reception." },
      { icon: "sparkles", title: "Experiences and upsells", body: "Recommends and books spa slots, dining, transfers and activities at the right moment in the stay." },
      { icon: "pin", title: "Local recommendations", body: "Suggests nearby sights, cafés and walks you've approved, with directions." },
      { icon: "languages", title: "Answers in the guest's language", body: "Replies in the language the guest writes in, including Hindi and English." }, // REVIEW: languages supported
      { icon: "handshake", title: "Smooth hand-off to staff", body: "Anything personal, sensitive or unusual goes straight to your team with the full conversation." },
    ],
    steps: [
      { title: "Share your hotel's information", body: "Website, menus, room details, policies and local tips — we build the knowledge base." },
      { title: "Set the tone", body: "We match your brand voice and decide what the concierge handles and what goes to staff." },
      { title: "Go live in rooms and online", body: "WhatsApp number, website widget and in-room QR codes, tested with your team." },
      { title: "Improve every week", body: "We review unanswered questions and add them, so the concierge gets smarter over time." },
    ],
    related: ["hotel-guest-request-management", "hotel-ai-chatbot", "hotel-whatsapp-marketing"],
    faqs: [
      { q: "What can guests ask the AI Concierge?", a: "Anything your team would normally answer: timings, amenities, room features, policies, local recommendations, and requests like a spa booking or an airport transfer." },
      { q: "What happens when it doesn't know an answer?", a: "It says so politely and passes the conversation to your staff, with the full context, instead of guessing." },
      { q: "Does it replace my front desk team?", a: "No. It takes the repetitive questions off their plate so they can spend more time with guests in person." },
      { q: "Can it take requests like extra towels?", a: "Yes. Requests are logged in Guest Request Management and routed to the right department." },
      trialFaq,
    ],
  },

  /* ── AI Reservation Desk ──────────────────────────────────── */
  {
    slug: "hotel-ai-reservation-desk",
    name: "AI Reservation Desk",
    card: "Turns booking enquiries into confirmed reservations, round the clock",
    metaTitle: "AI Reservation Desk for Hotels | Fielmente",
    metaDescription:
      "An AI reservation assistant that checks availability, shares room options and sends payment links on WhatsApp and your website, turning enquiries into bookings.",
    heroTitle: "A reservation desk that never lets a booking enquiry go cold",
    heroLede:
      "Most booking enquiries arrive in the evening, on weekends and on WhatsApp. The AI Reservation Desk replies in seconds with live availability and rates, shares rooms and packages, and sends a secure payment link to confirm the stay.",
    highlight: { value: "Seconds", label: "to reply to a booking enquiry, any time of day" },
    image: "/products/ai-reservation-desk.png",
    imageAlt: "AI reservation desk confirming a hotel booking in chat",
    without: [
      "Enquiries sit unanswered after hours and guests book an OTA instead",
      "Staff copy rates by hand and quotes go out inconsistent",
      "No record of which enquiries turned into bookings",
    ],
    withList: [
      "Every enquiry gets an instant reply with real availability",
      "Room options, packages and payment link in one conversation",
      "Every enquiry tracked from first message to confirmed booking",
    ],
    featuresLede: "Connected to your booking engine and rates, so every reply is accurate.",
    features: [
      { icon: "calendarCheck", title: "Live availability and rates", body: "Reads your booking engine in real time, so guests only see rooms you can actually sell." },
      { icon: "bed", title: "Room and package suggestions", body: "Recommends the right room or package for the dates, guests and budget, with photos." },
      { icon: "wallet", title: "Payment links in chat", body: "Sends a secure payment link for a full payment or deposit, and confirms once paid." },
      { icon: "chats", title: "WhatsApp, website and Instagram", body: "Handles enquiries wherever they arrive, in one consistent voice." },
      { icon: "refresh", title: "Follow-ups that recover bookings", body: "Nudges guests who went quiet with a friendly reminder or a better-fit option." }, // REVIEW: automated follow-up timing
      { icon: "bars", title: "Enquiry-to-booking reporting", body: "See how many enquiries came in, how fast they were answered and how many booked." },
    ],
    steps: [
      { title: "Connect your rooms and rates", body: "We link the desk to your booking engine, rate plans and policies." },
      { title: "Write the playbook", body: "Greetings, upsells, deposit rules and when to hand over to your reservations team." },
      { title: "Switch on your channels", body: "WhatsApp, website chat and Instagram, tested end to end." },
      { title: "Tune for conversion", body: "We review conversations monthly and adjust offers and follow-ups." },
    ],
    related: ["hotel-booking-engine", "hotel-payment-gateway", "hotel-crm"],
    faqs: [
      { q: "Does the AI Reservation Desk take payments?", a: "It sends a secure payment link through our payment gateway. The guest pays on a hosted page; the desk confirms once the payment is received." },
      { q: "Will it quote the wrong rate?", a: "It reads live rates and availability from your booking engine, so it quotes exactly what you sell on your website." },
      { q: "Can my team take over a conversation?", a: "Yes, at any point. Your team sees every conversation and can step in with one click." },
      { q: "Does it work for groups and weddings?", a: "It collects the details of group and event enquiries and passes them to your sales team as a qualified lead." },
      trialFaq,
    ],
  },

  /* ── AI Front Desk ────────────────────────────────────────── */
  {
    slug: "hotel-ai-front-desk",
    name: "AI Front Desk",
    card: "Faster check-in, check-out and arrival help — without the queue",
    metaTitle: "AI Front Desk for Hotels | Digital Check-in | Fielmente",
    metaDescription:
      "Pre-arrival check-in, digital registration, arrival messages and express check-out — an AI front desk that shortens queues and frees your team for guests.",
    heroTitle: "A front desk that works before guests even arrive",
    heroLede:
      "Collect guest details before arrival, welcome guests with everything they need, and let them check out with a tap. The AI Front Desk handles the paperwork and routine questions so your team can focus on hospitality.",
    highlight: { value: "Pre-arrival", label: "check-in, so arrivals don't wait in a queue" },
    image: "/products/ai-front-desk.png",
    imageAlt: "Self-service AI front desk screen in a hotel lobby",
    without: [
      "Guests fill the same forms at reception after a long journey",
      "Peak check-in hours mean queues and rushed welcomes",
      "Check-out means waiting for a printed bill",
    ],
    withList: [
      "Guest details collected online before arrival",
      "A calm lobby with a personal welcome, not paperwork",
      "Express check-out with the bill and payment link on WhatsApp",
    ],
    featuresLede: "Designed around the arrival and departure moments that shape reviews.",
    features: [
      { icon: "clipboard", title: "Pre-arrival check-in", body: "Guests share their details and arrival time online before they reach the hotel." }, // REVIEW
      { icon: "file", title: "Digital guest registration", body: "Guest registration details and ID collected securely, ready for your records." }, // REVIEW: ID capture & compliance scope
      { icon: "bell", title: "Arrival and welcome messages", body: "Directions, parking, Wi-Fi and breakfast timings sent automatically before and on arrival." },
      { icon: "devices", title: "Lobby screen or tablet", body: "An optional self-service screen at reception for arrivals, questions and requests." }, // REVIEW
      { icon: "wallet", title: "Express check-out", body: "Bill summary and payment link sent on WhatsApp, with a thank-you and review request." },
      { icon: "star", title: "Review requests at the right time", body: "Happy guests are invited to review you on Google as they leave." },
    ],
    steps: [
      { title: "Map your arrival flow", body: "Check-in times, required details, deposits and policies." },
      { title: "Brand the experience", body: "Messages, forms and screens in your hotel's look and voice." },
      { title: "Train your team", body: "A short session so reception knows exactly what arrives pre-filled." },
      { title: "Measure and refine", body: "Track pre-arrival completion and check-out times, then improve." },
    ],
    related: ["hotel-ai-concierge", "hotel-guest-request-management", "hotel-payment-gateway"],
    faqs: [
      { q: "Do guests need to download an app?", a: "No. Everything works through WhatsApp and a web link on the guest's phone." },
      { q: "Is guest data stored securely?", a: "Yes. Guest data is stored on Eazotel's secure cloud infrastructure and is only visible to your authorised staff." },
      { q: "Can we still check guests in the traditional way?", a: "Of course. Guests who haven't pre-checked in are welcomed as usual; the AI Front Desk simply reduces how many need to." },
      { q: "Does it work for small properties?", a: "Yes. Boutique hotels and homestays often benefit most, because there's no one at the desk all day." },
      trialFaq,
    ],
  },

  /* ── Guest Request Management ─────────────────────────────── */
  {
    slug: "hotel-guest-request-management",
    name: "Guest Request Management",
    card: "Every guest request logged, routed and closed on time",
    metaTitle: "Guest Request Management System for Hotels | Fielmente",
    metaDescription:
      "Guests raise requests by QR code or WhatsApp; your team sees them by department with timers and status updates, so nothing slips through.",
    heroTitle: "Every guest request, logged, routed and closed on time",
    heroLede:
      "Extra towels, a leaking tap, a late checkout — requests arrive by phone, WhatsApp and in person, and some get lost. Guest Request Management puts every request in one place, sends it to the right department and keeps the guest updated.",
    highlight: { value: "1 board", label: "for housekeeping, maintenance and F&B requests" },
    mock: "requests",
    imageAlt: "Guest request dashboard showing open requests by department",
    without: [
      "Requests scribbled on paper or lost in phone calls",
      "Guests chase the same request twice — and mention it in reviews",
      "No way to see which department is slow",
    ],
    withList: [
      "Every request logged the moment a guest raises it",
      "Automatic routing to housekeeping, maintenance or F&B",
      "Response times tracked, so managers can fix bottlenecks",
    ],
    featuresLede: "Simple for guests, clear for staff, measurable for managers.",
    features: [
      { icon: "chat", title: "QR code and WhatsApp requests", body: "Guests scan a QR in the room or message on WhatsApp — no app, no phone call." },
      { icon: "workflow", title: "Routing by department", body: "Requests go straight to the right team, with room number and details attached." },
      { icon: "clock", title: "Timers and escalations", body: "Each request has a target time; overdue ones escalate to a supervisor." },
      { icon: "send", title: "Guest status updates", body: "Guests are told when a request is accepted and when it's done." },
      { icon: "list", title: "Staff task view", body: "Each staff member sees their open tasks on their phone and closes them with a tap." },
      { icon: "bars", title: "Service reports", body: "Requests by type, room and department, with average response times." },
    ],
    steps: [
      { title: "Set up departments", body: "Housekeeping, maintenance, F&B, front office — with the right people in each." },
      { title: "Agree response times", body: "Target times per request type and who gets escalations." },
      { title: "Place QR codes", body: "Branded QR cards for every room and common area." },
      { title: "Review weekly", body: "Use the reports to spot slow areas and repeat issues." },
    ],
    related: ["hotel-ai-concierge", "hotel-ai-front-desk", "hotel-crm"],
    faqs: [
      { q: "How do guests raise a request?", a: "By scanning the QR code in their room or sending a WhatsApp message. The AI Concierge can also log requests for them." },
      { q: "Do staff need a separate app?", a: "Staff use a simple mobile view in the browser to see and close their tasks." }, // REVIEW
      { q: "Can we set different target times for different requests?", a: "Yes. A towel request and a maintenance issue can have different target times and escalation rules." },
      { q: "Does it help with reviews?", a: "Fast, visible service is one of the biggest drivers of good reviews, and it lets you fix problems before guests check out." },
      trialFaq,
    ],
  },

  /* ── AI Voice Agent ───────────────────────────────────────── */
  {
    slug: "hotel-ai-voice-agent",
    name: "AI Voice Agent",
    card: "Answers every call in a natural voice, day and night",
    metaTitle: "AI Voice Agent for Hotels | 24/7 Calls | Fielmente",
    metaDescription:
      "An AI voice agent that answers hotel calls in a natural voice, handles common questions, captures booking enquiries and hands callers to your team.",
    heroTitle: "Never miss a booking call again",
    heroLede:
      "Calls come in while reception is busy, at night and during peak season. The AI Voice Agent answers every call in a natural voice, handles common questions, captures booking details and transfers to your team when a caller needs a person.",
    highlight: { value: "Every call", label: "answered, even when reception is busy" },
    image: "/products/AI-Voice-Agent.png",
    imageAlt: "AI voice agent handling hotel phone calls",
    without: [
      "Calls ring out during check-in rush and after midnight",
      "Callers who can't get through book somewhere else",
      "No record of what callers asked or wanted",
    ],
    withList: [
      "Every call answered on the first ring",
      "Booking enquiries captured with dates, guests and contact details",
      "Call summaries saved to the CRM for follow-up",
    ],
    featuresLede: "Sounds natural, knows your hotel, and knows when to hand over.",
    features: [
      { icon: "mic", title: "Natural voice conversations", body: "Speaks and understands naturally, including Hindi and English." }, // REVIEW: languages
      { icon: "brain", title: "Knows your property", body: "Uses the same knowledge base as your AI Concierge and Chatbot." },
      { icon: "calendar", title: "Booking enquiries captured", body: "Takes dates, guests and preferences, then sends the caller a WhatsApp follow-up." },
      { icon: "phoneCall", title: "Transfer to your team", body: "Passes the call to reception or reservations when the caller asks for a person." },
      { icon: "file", title: "Call summaries and transcripts", body: "Every call summarised and saved to the guest's record." },
      { icon: "clock", title: "Out-of-hours cover", body: "Answers overnight and on holidays, so no call goes to voicemail." },
    ],
    steps: [
      { title: "Build the knowledge base", body: "The same hotel information that powers your chat assistants." },
      { title: "Design the call flow", body: "Greeting, common questions, booking capture and transfer rules." },
      { title: "Connect your number", body: "Forward your existing number or use a new one for campaigns." },
      { title: "Listen and improve", body: "We review call summaries and refine answers every month." },
    ],
    related: ["hotel-call-management-system", "hotel-ai-reservation-desk", "hotel-crm"],
    faqs: [
      { q: "Will callers know they're speaking to an AI?", a: "The agent introduces itself as the hotel's virtual assistant. Callers can ask for a person at any time." },
      { q: "Can it take a booking over the phone?", a: "It captures the booking details and sends the caller a WhatsApp message with room options and a payment link to confirm." },
      { q: "Do I need a new phone number?", a: "No. Calls to your existing number can be forwarded to the agent, for example when reception is busy or after hours." },
      { q: "Which languages does it speak?", a: "It handles Hindi and English conversations; talk to us about other languages for your market." }, // REVIEW
      trialFaq,
    ],
  },

  /* ── Call Management System ───────────────────────────────── */
  {
    slug: "hotel-call-management-system",
    name: "Call Management System",
    card: "Route, record and track every guest call in one place",
    metaTitle: "Hotel Call Management & Call Tracking | Fielmente",
    metaDescription:
      "Virtual numbers, smart routing, call recording, missed-call alerts and campaign call tracking, so every guest call is answered and measured.",
    heroTitle: "Every guest call answered, routed and measured",
    heroLede:
      "Phone calls are still where many bookings happen. The Call Management System gives your hotel smart numbers, routes calls to the right person, records conversations and shows which campaigns make the phone ring.",
    highlight: { value: "Every call", label: "tracked from the ad or page that drove it" },
    mock: "calls",
    imageAlt: "Call dashboard showing answered and missed calls by source",
    without: [
      "Calls bounce between reception and reservations",
      "Missed calls are never called back",
      "You can't tell which ads or pages bring in phone bookings",
    ],
    withList: [
      "Calls routed straight to reservations, front desk or sales",
      "Missed calls trigger an alert and a WhatsApp follow-up",
      "Call tracking by campaign, so phone bookings count in your marketing",
    ],
    featuresLede: "See which campaigns make the phone ring — and make sure someone always picks up.",
    features: [
      { icon: "phone", title: "Virtual numbers", body: "Local or toll-free numbers for your hotel, campaigns and website." }, // REVIEW
      { icon: "workflow", title: "IVR and smart routing", body: "Press 1 for reservations, 2 for the front desk — or route by time of day." },
      { icon: "headphones", title: "Call recording", body: "Recordings for training and quality checks, with caller consent messaging." },
      { icon: "bell", title: "Missed-call alerts", body: "Your team is alerted instantly and the caller gets a WhatsApp message." },
      { icon: "target", title: "Campaign call tracking", body: "Separate numbers per campaign show exactly which ads drive calls." },
      { icon: "bars", title: "Call analytics", body: "Answered, missed and returned calls by hour, day, source and staff member." },
    ],
    steps: [
      { title: "Plan your numbers", body: "Main line, reservations and one number per campaign or channel." },
      { title: "Design routing", body: "Who answers what, when — and what happens after hours." },
      { title: "Connect to your marketing", body: "Tracking numbers on ads, landing pages and listings." },
      { title: "Review the numbers", body: "Monthly reports on answer rates and calls by source." },
    ],
    related: ["hotel-ai-voice-agent", "hotel-crm", "hotel-whatsapp-marketing"],
    faqs: [
      { q: "Can I keep my existing hotel number?", a: "Yes. You can keep your main number and add tracking numbers for campaigns." }, // REVIEW
      { q: "How does call tracking help my marketing?", a: "Each campaign gets its own number, so you can see which ads and pages generate phone enquiries — and let Google optimise toward them." },
      { q: "What happens when a call is missed?", a: "Your team gets an alert and the caller receives a WhatsApp message offering help, so the enquiry isn't lost." },
      { q: "Can calls go to the AI Voice Agent?", a: "Yes. You can route calls to the AI Voice Agent after hours or when all lines are busy." },
      trialFaq,
    ],
  },

  /* ── Channel Manager ──────────────────────────────────────── */
  {
    slug: "hotel-channel-manager",
    name: "Channel Manager",
    card: "Rates and inventory in sync across every OTA and your website",
    metaTitle: "Hotel Channel Manager | Rates & Inventory Sync | Fielmente",
    metaDescription:
      "Keep rates and availability in sync across Booking.com, Agoda, MakeMyTrip, Goibibo, Airbnb and your booking engine — and stop overbookings for good.",
    heroTitle: "Sell on every channel without selling the same room twice",
    heroLede:
      "Update a rate or close a room once, and it changes everywhere. The Channel Manager keeps inventory and rates in sync across your OTAs and your own booking engine, so you can sell widely without overbookings.",
    highlight: { value: "One update", label: "for rates and availability across every channel" },
    mock: "channels",
    imageAlt: "Channel manager showing rates synced across OTAs",
    without: [
      "Rates updated one extranet at a time",
      "Overbookings when two channels sell the last room",
      "Your website often shows a worse rate than an OTA",
    ],
    withList: [
      "One calendar for rates and inventory across every channel",
      "Availability updates everywhere as soon as a room sells",
      "Rate rules that keep your direct rate the best one",
    ],
    featuresLede: "Built to work hand in hand with the Fielmente Booking Engine.",
    features: [
      { icon: "refresh", title: "Real-time inventory sync", body: "A booking on any channel updates availability everywhere else." }, // REVIEW: sync mode per OTA
      { icon: "layers", title: "Major OTAs connected", body: "Booking.com, Agoda, MakeMyTrip, Goibibo, Airbnb and more, plus your booking engine." }, // REVIEW: connected OTA list
      { icon: "percent", title: "Rate rules and parity", body: "Set channel-specific markups and keep your direct rate the most attractive." },
      { icon: "calendar", title: "Bulk calendar updates", body: "Change rates, restrictions and stop-sells for a date range in one go." },
      { icon: "inbox", title: "All bookings in one place", body: "OTA and direct reservations flow into one list with guest details." },
      { icon: "bars", title: "Channel performance", body: "See which channels bring bookings, revenue and commissions." },
    ],
    steps: [
      { title: "Map rooms and rate plans", body: "We match your room types and plans to each channel." },
      { title: "Connect your channels", body: "OTA extranets and your booking engine, tested with live dates." },
      { title: "Set your rules", body: "Markups, restrictions and parity rules per channel." },
      { title: "Shift share to direct", body: "Use channel reports to grow direct bookings over time." },
    ],
    related: ["hotel-booking-engine", "hotel-payment-gateway", "hotel-crm"],
    faqs: [
      { q: "Which OTAs can I connect?", a: "Major OTAs used by Indian hotels, including Booking.com, Agoda, MakeMyTrip, Goibibo and Airbnb. Talk to us about any other channel you use." }, // REVIEW
      { q: "Will it stop overbookings?", a: "It updates availability across channels when a room sells, which prevents overbookings caused by channels selling out of sync." },
      { q: "Does it work with the Fielmente Booking Engine?", a: "Yes. The booking engine and channel manager share one inventory, so your website always shows live availability." },
      { q: "Can I set different rates per channel?", a: "Yes. You can add channel-specific markups and restrictions while keeping your direct rate the best." },
      trialFaq,
    ],
  },

  /* ── Social Media Management (tool) ───────────────────────── */
  {
    slug: "hotel-social-media-management-tool",
    name: "Social Media Management",
    card: "Plan, create, schedule and measure every post from one dashboard",
    metaTitle: "Hotel Social Media Management Tool | Fielmente",
    metaDescription:
      "Plan a content calendar, write captions with AI, schedule posts to Instagram and Facebook and track what drives enquiries — built for hotels.",
    heroTitle: "Your hotel's social media, planned, posted and measured in one place",
    heroLede:
      "Keep a steady flow of posts without the scramble. Plan a month of content, draft captions with AI, get approvals, schedule to your channels and see which posts bring in enquiries.",
    highlight: { value: "1 calendar", label: "for every post, story and campaign" },
    image: "/home/social-media-management.png",
    imageAlt: "Hotel social media content calendar on screen",
    without: [
      "Posting whenever someone finds the time",
      "Captions written from scratch every time",
      "No idea which posts actually bring enquiries",
    ],
    withList: [
      "A month of content planned and scheduled ahead",
      "On-brand captions and hashtags drafted with AI",
      "Reports that link posts to profile visits and enquiries",
    ],
    featuresLede: "Use it yourself, or let the Fielmente team run it for you.",
    features: [
      { icon: "calendar", title: "Content calendar", body: "Plan posts, reels and stories around seasons, festivals and offers." },
      { icon: "sparkles", title: "AI captions and hashtags", body: "Draft captions in your brand voice, then edit and approve." },
      { icon: "send", title: "Scheduling", body: "Schedule to Instagram and Facebook in advance." }, // REVIEW: supported networks
      { icon: "badge", title: "Approval workflow", body: "Owners or managers approve posts before they go live." },
      { icon: "camera", title: "Media library", body: "Keep approved photos and videos organised by room, venue and season." },
      { icon: "bars", title: "Performance reports", body: "Reach, engagement and profile actions by post and by month." },
    ],
    steps: [
      { title: "Connect your accounts", body: "Instagram and Facebook pages, with the right team access." },
      { title: "Build your library", body: "Upload photos and videos, and set your brand voice." },
      { title: "Plan the month", body: "A calendar around your offers, seasons and events." },
      { title: "Measure and repeat", body: "Keep what works, drop what doesn't." },
    ],
    related: ["hotel-conversational-tool", "hotel-whatsapp-marketing", "hotel-crm"],
    faqs: [
      { q: "Can your team manage our social media for us?", a: "Yes. Fielmente also offers fully managed social media for hotels, restaurants, resorts and homestays, using this same tool." },
      { q: "Which platforms can I post to?", a: "Instagram and Facebook. Talk to us about other channels you use." }, // REVIEW
      { q: "Does the AI write posts automatically?", a: "It drafts captions and hashtags for you to edit and approve. Nothing is posted without approval." },
      { q: "Can several people work on it?", a: "Yes. Your team and ours can plan, draft and approve posts together." },
      trialFaq,
    ],
  },

  /* ── Conversational Tool ──────────────────────────────────── */
  {
    slug: "hotel-conversational-tool",
    name: "Conversational Tool",
    card: "One inbox for WhatsApp, Instagram, web chat and email",
    metaTitle: "Hotel Conversational Tool | One Guest Inbox | Fielmente",
    metaDescription:
      "Bring WhatsApp, Instagram DMs, Messenger, website chat and email into one shared inbox, with AI-suggested replies, team assignment and every guest's history.",
    heroTitle: "One inbox for every guest conversation",
    heroLede:
      "Guests message on WhatsApp, Instagram, your website and email — and replies get missed between phones and logins. The Conversational Tool brings every message into one shared inbox, with AI help to reply faster.",
    highlight: { value: "1 inbox", label: "for WhatsApp, Instagram, web chat and email" },
    mock: "inbox",
    imageAlt: "Shared hotel inbox with WhatsApp, Instagram and web chat messages",
    without: [
      "Messages spread across personal phones and apps",
      "Guests wait hours — or never hear back",
      "No history when a returning guest writes in",
    ],
    withList: [
      "Every channel in one shared inbox",
      "AI-suggested replies and saved answers for common questions",
      "The guest's full history beside every conversation",
    ],
    featuresLede: "The same inbox that powers our chatbot and WhatsApp marketing.",
    features: [
      { icon: "inbox", title: "Shared multichannel inbox", body: "WhatsApp, Instagram, Messenger, website chat and email in one place." },
      { icon: "sparkles", title: "AI-suggested replies", body: "Draft replies from your knowledge base, ready to send or edit." },
      { icon: "users", title: "Assignment and notes", body: "Assign conversations to reservations, sales or front office, with internal notes." },
      { icon: "zap", title: "Saved replies and templates", body: "One-click answers for rates, directions, check-in times and more." },
      { icon: "link", title: "Connected to the CRM", body: "Every conversation saved to the guest's profile and lead stage." },
      { icon: "clock", title: "Response-time tracking", body: "See how fast your team replies, by channel and by person." },
    ],
    steps: [
      { title: "Connect your channels", body: "WhatsApp Business, Instagram, Facebook, website chat and email." },
      { title: "Set up your team", body: "Departments, assignment rules and working hours." },
      { title: "Load saved replies", body: "Your most common answers, written once and reused." },
      { title: "Switch on AI help", body: "AI-suggested replies and the chatbot for after-hours cover." },
    ],
    related: ["hotel-ai-chatbot", "hotel-whatsapp-marketing", "hotel-crm"],
    faqs: [
      { q: "Which channels can I connect?", a: "WhatsApp Business, Instagram DMs, Facebook Messenger, website live chat and email." }, // REVIEW
      { q: "Can several staff reply from the same WhatsApp number?", a: "Yes. The whole team works from one shared inbox, so there's no need to pass a phone around." },
      { q: "Does it work with the AI Chatbot?", a: "Yes. The chatbot answers first, and hands over to your team inside the same inbox." },
      { q: "Is conversation history kept?", a: "Yes. Every conversation is saved to the guest's record in the CRM." },
      trialFaq,
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** Name, card text and image for any product, new or live. */
export function productLink(slug: string) {
  const p = products.find((x) => x.slug === slug);
  if (p) return { title: p.name, body: p.card, href: `/products/${p.slug}/`, image: p.image, mock: p.mock };
  const l = liveProducts.find((x) => x.slug === slug);
  if (l) return { title: l.name, body: l.card, href: `/products/${l.slug}/`, image: l.image as string | undefined, mock: undefined as ProductMockKind | undefined };
  return null;
}

export const platformStats = [
  { value: "2×", label: "faster replies to guests across every channel" },
  { value: "35%", label: "more enquiries turned into confirmed bookings" },
  { value: "40%", label: "more direct reservations, with less OTA dependency" },
  { value: "1", label: "dashboard for every guest conversation and lead" },
];

export const integrationChannels = [
  "WhatsApp",
  "Meta Lead Ads",
  "Instagram & Messenger",
  "Website live chat",
  "Website forms",
  "Email",
  "Google",
];

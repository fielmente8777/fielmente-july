// Service types used across industries. Each builder takes an industry profile and returns
// page content tailored to it (guests, booking channels, searches, peak seasons, review sites).

import type { IconKey } from "@/components/marketing/icons";
import type { IndustryProfile } from "./industries";

export type ServiceKey =
  | "social-media-management"
  | "local-seo"
  | "website-seo"
  | "ai-search-optimization"
  | "preopening-marketing"
  | "ota-management"
  | "ota-listing"
  | "revenue-management"
  | "website-development"
  | "sales-marketing-automation"
  | "content-creation"
  | "branding"
  | "performance-marketing"
  | "sales-marketing-consultation"
  | "pr-communication"
  | "influencer-marketing"
  | "social-media-ai-automation"
  | "online-reputation-management"
  | "social-media-reservation-automation";

export interface ServiceContent {
  heroTitle: string;
  heroLede: string;
  without: string[];
  withList: string[];
  featuresLede: string;
  features: { icon: IconKey; title: string; body: string }[];
  steps: { title: string; body: string }[];
  measure: string[];
  faqs: { q: string; a: string }[];
}

export interface ServiceType {
  key: ServiceKey;
  label: string;
  icon: IconKey;
  image: string;
  /** Artwork is portrait/low-res: hero shows the industry photo instead, with a service card. */
  heroPhoto?: boolean;
  card: (I: IndustryProfile) => string;
  products: string[];
  build: (I: IndustryProfile) => ServiceContent;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const q = (s: string) => `“${s}”`;

export const serviceTypes: Record<ServiceKey, ServiceType> = {
  /* ── Social Media Management ─────────────────────────────── */
  "social-media-management": {
    key: "social-media-management",
    label: "Social Media Management",
    icon: "share",
    image: "/home/social-media-management.png",
    card: (I) => `Instagram and Facebook that make ${I.guests} want to ${I.bookAction}`,
    products: ["hotel-social-media-management-tool", "hotel-conversational-tool"],
    build: (I) => ({
      heroTitle: `${I.name} social media that turns followers into ${I.guests}`,
      heroLede: `We plan, create and manage your ${I.noun}'s Instagram and Facebook — showing off your ${I.showcase} — and make it easy for people to ${I.bookAction} straight from a post or DM.`,
      without: [
        "Posting whenever someone finds the time",
        "Beautiful photos, but no reason to book now",
        `DMs from interested ${I.guests} answered late, or never`,
      ],
      withList: [
        `A monthly calendar planned around ${I.peaks}`,
        "Reels and posts with a clear next step — enquire, book, visit",
        "Every DM answered quickly and tracked as a lead",
      ],
      featuresLede: `Built for ${I.plural}, run by a team that knows hospitality.`,
      features: [
        { icon: "calendar", title: "Monthly content calendar", body: `Posts, reels and stories planned around ${I.peaks}, offers and events.` },
        { icon: "camera", title: "Reels and creatives", body: `Short videos and designs that show off your ${I.showcase}.` },
        { icon: "pen", title: "Captions in your voice", body: "On-brand captions, hashtags and calls to action for every post." },
        { icon: "chats", title: "Community and DMs", body: "Comments and messages answered, with enquiries passed to your team." },
        { icon: "megaphone", title: "Boosts for key posts", body: "Small paid boosts behind the posts most likely to drive enquiries." },
        { icon: "bars", title: "Monthly reporting", body: "Reach, engagement, profile visits and enquiries — not just likes." },
      ],
      steps: [
        { title: "Audit and strategy", body: `We review your profiles and a few competing ${I.plural}, then agree goals and tone.` },
        { title: "Content plan", body: "A monthly calendar for approval, with themes, formats and offers." },
        { title: "Create and publish", body: "We produce, schedule and post — you approve before anything goes live." },
        { title: "Engage and improve", body: "We manage comments and DMs and double down on what works." },
      ],
      measure: ["Reach and engagement per post", "Profile visits and link clicks", "DMs and enquiries from social", `${cap(I.guests)} who mention finding you on Instagram`],
      faqs: [
        { q: "Do you shoot photos and videos?", a: `Yes. We can plan and run shoots at your ${I.noun}, or work with your existing content.` },
        { q: "How many posts do we get each month?", a: "It depends on the plan. We agree a monthly number of posts, reels and stories before we start." },
        { q: "Will we approve posts before they go live?", a: "Always. You approve the calendar and the posts." },
        { q: "Can social media really bring bookings?", a: `Yes, when every post gives people a reason and a way to ${I.bookAction} — and every DM is answered quickly.` },
      ],
    }),
  },

  /* ── Local SEO ───────────────────────────────────────────── */
  "local-seo": {
    key: "local-seo",
    label: "Local SEO",
    icon: "pin",
    image: "/home/local-seo.png",
    card: (I) => `Show up on Google Maps when ${I.guests} search nearby`,
    products: ["hotel-local-seo", "hotel-call-management-system"],
    build: (I) => ({
      heroTitle: `${I.name} local SEO that puts you on the map — literally`,
      heroLede: `When ${I.guests} search ${q(I.searches[0])} or ${q(I.searches[1])}, Google Maps decides who they call. We optimise your Google Business Profile and local presence so it's you.`,
      without: [
        "An incomplete or outdated Google Business Profile",
        "Name, address and phone that differ across listings",
        `Competing ${I.plural} ranking above you in the map pack`,
      ],
      withList: [
        "A complete, active Google Business Profile",
        "Consistent details across every directory and platform",
        "More calls, direction requests and website visits from Maps",
      ],
      featuresLede: "Everything that decides whether you show up in the local results.",
      features: [
        { icon: "pin", title: "Google Business Profile optimisation", body: "Categories, services, photos, attributes and descriptions set up properly." },
        { icon: "list", title: "Citations and NAP consistency", body: "Your name, address and phone number correct everywhere they appear." },
        { icon: "star", title: "Review strategy", body: `A simple system to get more reviews on ${I.reviewSites} — and reply to them.` },
        { icon: "news", title: "Posts and offers", body: "Regular Google posts for offers, events and news." },
        { icon: "search", title: "Local keyword pages", body: `Website pages for searches like ${q(I.searches[2])}.` },
        { icon: "bars", title: "Local ranking reports", body: "Where you rank on the map for your key searches, month by month." },
      ],
      steps: [
        { title: "Local audit", body: "Your profile, listings, reviews and rankings against nearby competitors." },
        { title: "Fix the foundations", body: "Profile, categories, photos and consistent details everywhere." },
        { title: "Build signals", body: "Reviews, posts, local pages and citations, every month." },
        { title: "Track and grow", body: "Rankings, calls and direction requests reported monthly." },
      ],
      measure: ["Map-pack rankings for your key searches", "Calls and direction requests from Google", "Website clicks from your profile", "Review count and rating"],
      faqs: [
        { q: "How long does local SEO take?", a: "Profile fixes can show results within weeks; rankings for competitive searches usually build over two to four months." },
        { q: "Do you handle fake or unfair reviews?", a: "We help you respond professionally and report reviews that break Google's policies." },
        { q: "We have more than one location. Can you help?", a: "Yes. Each location gets its own optimised profile and local page." },
        { q: "Is this different from website SEO?", a: "Yes. Local SEO focuses on Google Maps and nearby searches; website SEO focuses on your site ranking in the main results." },
      ],
    }),
  },

  /* ── Website SEO ─────────────────────────────────────────── */
  "website-seo": {
    key: "website-seo",
    label: "Website SEO",
    icon: "search",
    image: "/home/website-seo.png",
    card: (I) => `Rank your website for the searches ${I.guests} actually make`,
    products: ["hotel-cms", "hotel-booking-engine"],
    build: (I) => ({
      heroTitle: `${I.name} SEO that brings ${I.guests} to your own website`,
      heroLede: `Rank for the searches that lead to bookings — like ${q(I.searches[1])} — so ${I.guests} land on your site, not on ${I.channels.split(",")[0]}.`,
      without: [
        `Aggregators and ${I.channels.split(",")[0]} outrank your own website`,
        "Slow pages and technical errors hold rankings back",
        "Content that doesn't answer what people search for",
      ],
      withList: [
        "Pages built around high-intent searches in your area",
        "A fast, technically sound site Google can crawl easily",
        "Organic traffic that turns into enquiries and bookings",
      ],
      featuresLede: "Technical, on-page and content SEO, done for hospitality.",
      features: [
        { icon: "zap", title: "Technical SEO", body: "Speed, mobile, indexing, schema markup and site structure fixed." },
        { icon: "search", title: "Keyword research", body: `The searches ${I.audience} use when planning, mapped to pages.` },
        { icon: "file", title: "On-page optimisation", body: "Titles, headings, copy and internal links for every key page." },
        { icon: "pen", title: "Content and blogs", body: "Guides and articles that rank and lead readers to book." },
        { icon: "link", title: "Authority building", body: "Relevant links from travel, local and industry sites." },
        { icon: "line", title: "Rank and traffic tracking", body: "Keyword positions, organic traffic and conversions every month." },
      ],
      steps: [
        { title: "SEO audit", body: "Technical health, content gaps and competitor rankings." },
        { title: "Strategy", body: "Target keywords mapped to pages, with priorities." },
        { title: "Fix and build", body: "Technical fixes, page optimisation and new content." },
        { title: "Grow", body: "Monthly content, links and reporting." },
      ],
      measure: ["Rankings for target keywords", "Organic traffic to key pages", "Enquiries and bookings from organic search", "Core Web Vitals and technical health"],
      faqs: [
        { q: "How long before SEO shows results?", a: "Technical fixes help quickly, but meaningful ranking gains usually take three to six months." },
        { q: "Do you write the content?", a: "Yes, with your input on what makes your property special." },
        { q: "Will you change our website?", a: "We make SEO changes to your existing site, or rebuild it if the platform is holding you back." },
        { q: "Do you guarantee #1 rankings?", a: "No honest agency can. We commit to a clear plan, the work, and transparent reporting." },
      ],
    }),
  },

  /* ── AI Search Optimization ──────────────────────────────── */
  "ai-search-optimization": {
    key: "ai-search-optimization",
    label: "AI Search Optimization",
    icon: "sparkles",
    image: "/home/ai-search-optimization.png",
    card: () => `Get recommended by ChatGPT, Gemini and Google AI Overviews`,
    products: ["hotel-cms", "hotel-local-seo"],
    build: (I) => ({
      heroTitle: `Get your ${I.noun} recommended by AI search`,
      heroLede: `More ${I.guests} now ask ChatGPT, Gemini or Google's AI Overviews where to go. We make sure your ${I.noun} is understood, trusted and recommended when they do.`,
      without: [
        "AI assistants don't mention you — or get your details wrong",
        "Website content AI tools can't easily read or quote",
        "No idea how you appear in AI answers",
      ],
      withList: [
        "Clear, structured information AI tools can use",
        "Consistent facts across your site, listings and reviews",
        "Regular checks on how AI assistants describe you",
      ],
      featuresLede: "Generative engine optimisation (GEO) for hospitality brands.",
      features: [
        { icon: "brain", title: "AI visibility audit", body: `How ChatGPT, Gemini and Perplexity answer questions like ${q(I.searches[1])}.` },
        { icon: "file", title: "Answer-ready content", body: "FAQ and guide content written the way people ask questions." },
        { icon: "layers", title: "Structured data", body: "Schema markup so machines understand your offering, location and prices." },
        { icon: "badge", title: "Entity consistency", body: `The same facts across your website, Google profile and ${I.reviewSites}.` },
        { icon: "star", title: "Reviews and mentions", body: "Signals AI tools rely on: reviews, press and trusted mentions." },
        { icon: "bars", title: "AI answer tracking", body: "Monthly checks on where and how you're recommended." },
      ],
      steps: [
        { title: "Audit AI answers", body: `We test the questions ${I.guests} ask and record who gets recommended.` },
        { title: "Fix the facts", body: "Correct and align your information everywhere it appears." },
        { title: "Publish answer content", body: "Pages and FAQs that answer real questions clearly." },
        { title: "Track and refine", body: "Re-test every month and adjust." },
      ],
      measure: ["Mentions in AI answers for key questions", "Accuracy of facts AI tools share", "Traffic from AI assistants and AI Overviews", "Growth in branded searches"],
      faqs: [
        { q: "What is AI search optimisation?", a: "Also called GEO, it's making sure AI assistants like ChatGPT and Gemini understand and recommend your business when people ask for suggestions." },
        { q: "Is it different from SEO?", a: "It builds on SEO, but focuses on clear facts, structured data and trusted mentions that AI tools use to form answers." },
        { q: "Can you guarantee ChatGPT will recommend us?", a: "No one can guarantee what an AI says, but you can make it far more likely by giving it clear, consistent, trusted information." },
        { q: "Do we still need regular SEO?", a: "Yes. Strong SEO and a good Google profile are the foundation AI search relies on." },
      ],
    }),
  },

  /* ── Preopening Marketing ────────────────────────────────── */
  "preopening-marketing": {
    key: "preopening-marketing",
    label: "Preopening Marketing",
    icon: "rocket",
    image: "/home/preopening-marketing.png",
    card: (I) => `Open your ${I.noun} with bookings already on the calendar`,
    products: ["hotel-booking-engine", "hotel-cms", "hotel-channel-manager"],
    build: (I) => ({
      heroTitle: `Preopening marketing that opens your ${I.noun} with bookings in hand`,
      heroLede: `The months before opening decide your first year. We build your brand, website, listings and launch campaigns so ${I.guests} are booking before the doors open.`,
      without: [
        "Opening day arrives with an empty calendar",
        "Website, listings and booking engine ready too late",
        "No audience built before launch",
      ],
      withList: [
        "A launch plan working back from opening day",
        "Website, booking engine and OTA listings live early",
        "A waitlist and launch offers that fill the first months",
      ],
      featuresLede: "Everything a new property needs, in the right order.",
      features: [
        { icon: "palette", title: "Brand and positioning", body: "Name, identity and a clear promise for your target guests." },
        { icon: "devices", title: "Website and booking engine", body: "Live early, taking enquiries and pre-launch bookings." },
        { icon: "layers", title: "Listings setup", body: `Google profile and ${I.channels.split(",").slice(0, 2).join(" and ")} listings ready for launch.` },
        { icon: "users", title: "Waitlist and launch offers", body: "Build an audience and reward early bookers." },
        { icon: "megaphone", title: "Launch campaigns", body: "Social, ads and PR timed to the opening." },
        { icon: "calendar", title: "Launch timeline", body: "A week-by-week plan from 120 days out to the first month open." },
      ],
      steps: [
        { title: "Positioning", body: "Who you're for, what makes you different, and your launch pricing." },
        { title: "Build the foundations", body: "Brand, website, booking engine, listings and content." },
        { title: "Build demand", body: "Social, waitlist, PR and influencer previews." },
        { title: "Launch and learn", body: "Launch campaigns, then optimise from real bookings." },
      ],
      measure: ["Waitlist sign-ups before launch", "Bookings on the books at opening", "Occupancy in the first 90 days", "Cost per booking by channel"],
      faqs: [
        { q: "When should we start preopening marketing?", a: "Ideally four to six months before opening, so there's time to build the brand, website and listings properly." },
        { q: "Can you take pre-launch bookings?", a: "Yes. The booking engine can take bookings for dates after your opening day." },
        { q: "Do you also help with rebranding an existing property?", a: "Yes. A relaunch follows much the same plan." },
        { q: "Do you handle OTA setup?", a: "Yes. We set up and optimise your listings so they're ready on day one." },
      ],
    }),
  },

  /* ── OTA Management ──────────────────────────────────────── */
  "ota-management": {
    key: "ota-management",
    label: "OTA Management",
    icon: "layers",
    image: "/home/ota-management.png",
    card: (I) => `Better rankings and conversion on ${I.channels.split(",")[0]} and other OTAs`,
    products: ["hotel-channel-manager", "hotel-booking-engine"],
    build: (I) => ({
      heroTitle: `${I.name} OTA management that ranks higher and sells smarter`,
      heroLede: `We manage your listings on ${I.channels} — content, rates, promotions and reviews — so you win more OTA bookings while building your direct share.`,
      without: [
        "Listings with weak photos and incomplete content",
        "Promotions switched on without a plan",
        "Rates and availability out of sync across extranets",
      ],
      withList: [
        "Complete, high-converting listings on every OTA",
        "Promotions and visibility programmes used deliberately",
        "Rates and inventory managed from one place",
      ],
      featuresLede: "Day-to-day extranet management by a team that does it every day.",
      features: [
        { icon: "camera", title: "Listing content", body: "Photos, descriptions, amenities and room details that convert." },
        { icon: "percent", title: "Promotions and deals", body: "The right promotions for your dates — not every discount the OTA suggests." },
        { icon: "trend", title: "Ranking and visibility", body: "Content score, reviews and programmes that lift your position." },
        { icon: "star", title: "Review responses", body: "Every OTA review answered professionally." },
        { icon: "refresh", title: "Rate and inventory updates", body: "Kept in sync through the channel manager." },
        { icon: "bars", title: "OTA performance reports", body: "Bookings, revenue, conversion and commission by channel." },
      ],
      steps: [
        { title: "Listing audit", body: "Content score, ranking, conversion and reviews on each OTA." },
        { title: "Optimise", body: "Content, photos, room mapping and policies fixed." },
        { title: "Manage weekly", body: "Rates, promotions, reviews and extranet messages." },
        { title: "Balance with direct", body: "Grow OTA revenue while shifting repeat guests to direct." },
      ],
      measure: ["OTA ranking and visibility", "Listing conversion rate", "Bookings and revenue by OTA", "Commission paid as a share of revenue"],
      faqs: [
        { q: "Which OTAs do you manage?", a: `The ones that matter for your market — typically ${I.channels}.` },
        { q: "Won't more OTA bookings hurt direct bookings?", a: "Not when it's managed well. OTAs bring discovery; we then give guests reasons to book direct next time." },
        { q: "Do we need a channel manager?", a: "It's strongly recommended so rates and availability stay in sync. We can set up ours or work with yours." },
        { q: "Who talks to the OTA market managers?", a: "We can, on your behalf, with your approval on commercial decisions." },
      ],
    }),
  },

  /* ── OTA Listing ─────────────────────────────────────────── */
  "ota-listing": {
    key: "ota-listing",
    label: "OTA Listing",
    icon: "clipboard",
    image: "/industry/Bookingman.webp",
    heroPhoto: true,
    card: () => `Get listed correctly on every major OTA`,
    products: ["hotel-channel-manager"],
    build: (I) => ({
      heroTitle: `Get your ${I.noun} listed on every OTA that matters — properly`,
      heroLede: `We set up your property on ${I.channels}, with the right room mapping, photos, policies and rates, so you're bookable everywhere from day one.`,
      without: [
        "Weeks lost to OTA paperwork and back-and-forth",
        "Rooms mapped wrongly, causing booking errors",
        "Thin listings that rank at the bottom",
      ],
      withList: [
        "Listings live quickly on the OTAs you choose",
        "Rooms, rates and policies mapped correctly",
        "Complete content that ranks and converts from the start",
      ],
      featuresLede: "A clean start on every channel.",
      features: [
        { icon: "clipboard", title: "Account setup", body: "Registration, documents and verification handled with you." },
        { icon: "bed", title: "Room and rate mapping", body: "Room types and rate plans set up consistently across channels." },
        { icon: "camera", title: "Photos and descriptions", body: "Professional content uploaded and optimised for each OTA." },
        { icon: "file", title: "Policies and taxes", body: "Cancellation, child, pet and tax settings configured correctly." },
        { icon: "link", title: "Channel manager connection", body: "Each OTA connected so inventory stays in sync." },
        { icon: "check", title: "Go-live checks", body: "Test bookings and a final review before you go live." },
      ],
      steps: [
        { title: "Choose channels", body: "Which OTAs suit your market and guests." },
        { title: "Prepare content", body: "Photos, descriptions, rooms and policies in one pack." },
        { title: "Set up and connect", body: "Listings created and connected to the channel manager." },
        { title: "Test and launch", body: "Test bookings, then live — with a handover to management." },
      ],
      measure: ["Time to go live on each OTA", "Listing content scores", "First bookings per channel", "Booking errors (target: zero)"],
      faqs: [
        { q: "How long does it take to list on an OTA?", a: "Usually one to three weeks per OTA, depending on verification." },
        { q: "What documents do we need?", a: "Typically ownership or lease proof, GST and bank details, and property photos. We'll send a checklist." },
        { q: "Can you fix our existing listings?", a: "Yes — that's our OTA management service." },
        { q: "Do you charge a commission on OTA bookings?", a: "No. OTAs charge their own commission; our fee is for the setup work." },
      ],
    }),
  },

  /* ── Revenue Management ──────────────────────────────────── */
  "revenue-management": {
    key: "revenue-management",
    label: "Revenue Management",
    icon: "line",
    image: "/images/SEO-15.webp",
    heroPhoto: true,
    card: () => `The right rate, on the right channel, every night`,
    products: ["hotel-channel-manager", "hotel-booking-engine"],
    build: (I) => ({
      heroTitle: `${I.name} revenue management that earns more from every room`,
      heroLede: `We set and adjust your rates by demand, day and channel — around ${I.peaks} — so you stop leaving money on the table on busy nights and sitting empty on quiet ones.`,
      without: [
        "The same rate all week, whatever the demand",
        "Selling out early at a low rate on peak dates",
        "Pricing decided by gut feel or by the OTA",
      ],
      withList: [
        "Rates that move with demand, events and pickup",
        "Minimum stays and restrictions used on peak dates",
        "A direct rate that's always the best-value option",
      ],
      featuresLede: "Pricing discipline, without hiring a full-time revenue manager.",
      features: [
        { icon: "line", title: "Dynamic pricing", body: "Daily rate recommendations based on demand and bookings on hand." },
        { icon: "search", title: "Competitor rate tracking", body: `Rates of comparable ${I.plural} monitored across channels.` },
        { icon: "calendar", title: "Event and season calendar", body: `Pricing plans for ${I.peaks} and local events.` },
        { icon: "layers", title: "Channel mix", body: "How much to sell through each OTA versus direct." },
        { icon: "percent", title: "Restrictions and packages", body: "Minimum stays, closed-to-arrival and packages on the right dates." },
        { icon: "bars", title: "Revenue reporting", body: "Occupancy, ADR and RevPAR against last year and your competitors." },
      ],
      steps: [
        { title: "Revenue audit", body: "Past performance, pricing, segments and channel mix." },
        { title: "Pricing strategy", body: "Rate structure, seasons, rules and targets." },
        { title: "Daily management", body: "Rates and restrictions adjusted as bookings come in." },
        { title: "Monthly review", body: "What worked, what didn't, and next month's plan." },
      ],
      measure: ["Occupancy", "Average daily rate (ADR)", "Revenue per available room (RevPAR)", "Direct share of room revenue"],
      faqs: [
        { q: "Do we need a revenue manager on staff?", a: "Not necessarily. We act as your remote revenue team, working with your front office and owners." },
        { q: "Will you change rates without asking?", a: "We agree rules and limits with you first, then make day-to-day changes within them." },
        { q: "What data do you need?", a: "Past occupancy and rates, current bookings, and access to your channel manager or extranets." },
        { q: "Does it work for small properties?", a: "Yes. Smaller properties often gain the most from simple, disciplined pricing." },
      ],
    }),
  },

  /* ── Website Development ─────────────────────────────────── */
  "website-development": {
    key: "website-development",
    label: "Website Development",
    icon: "devices",
    image: "/home/website-development.png",
    card: (I) => `A fast, beautiful website built to ${I.bookAction}`,
    products: ["hotel-cms", "hotel-booking-engine", "hotel-ai-chatbot"],
    build: (I) => ({
      heroTitle: `A ${I.noun} website built to turn visitors into ${I.guests}`,
      heroLede: `Beautiful is not enough. We build fast, mobile-first websites that show off your ${I.showcase} and make it effortless to ${I.bookAction} — with SEO and tracking built in.`,
      without: [
        "A slow website that looks dated on mobile",
        "Booking or enquiry buried three clicks deep",
        "Every small change needs a developer",
      ],
      withList: [
        "A fast, mobile-first site in your brand",
        "Clear calls to action on every page — book, WhatsApp, call",
        "An easy CMS so your team can update offers themselves",
      ],
      featuresLede: "Design, development, content and tracking — in one project.",
      features: [
        { icon: "palette", title: "Custom design", body: `A design that feels like your ${I.noun}, not a template.` },
        { icon: "devices", title: "Mobile-first and fast", body: "Built for phones, where most people browse and book." },
        { icon: "calendarCheck", title: "Booking and enquiries", body: `Booking engine, WhatsApp and enquiry forms so people can ${I.bookAction} easily.` },
        { icon: "search", title: "SEO built in", body: "Clean structure, schema markup and on-page SEO from day one." },
        { icon: "file", title: "Easy content management", body: "Update rooms, menus, offers and photos without code." },
        { icon: "target", title: "Tracking set up", body: "Analytics and conversion tracking for every enquiry and booking." },
      ],
      steps: [
        { title: "Discovery", body: `Your ${I.plural.split(" ")[0]} goals, audience and must-have pages.` },
        { title: "Design", body: "Page designs for approval on desktop and mobile." },
        { title: "Build and content", body: "Development, copy, photos and integrations." },
        { title: "Launch and train", body: "Testing, launch, redirects and a handover to your team." },
      ],
      measure: ["Page speed and Core Web Vitals", "Conversion rate from visit to enquiry or booking", "Direct bookings through the website", "Organic traffic after launch"],
      faqs: [
        { q: "How long does a website take?", a: "Most hospitality websites take four to eight weeks, depending on size and content." },
        { q: "Can we update the website ourselves?", a: "Yes. Every site comes with an easy CMS and a short training session." },
        { q: "Will we lose our Google rankings?", a: "No — we plan redirects and SEO carefully so you keep, and usually improve, your rankings." },
        { q: "Do you provide hosting and maintenance?", a: "Yes, as an optional plan." },
      ],
    }),
  },

  /* ── Sales & Marketing Automation ────────────────────────── */
  "sales-marketing-automation": {
    key: "sales-marketing-automation",
    label: "Sales & Marketing Automation",
    icon: "workflow",
    image: "/home/sales-marketing-automation.png",
    card: (I) => `Every enquiry followed up automatically, every ${I.guests.replace(/s$/, "")} remembered`,
    products: ["hotel-crm", "hotel-whatsapp-marketing", "hotel-email-marketing"],
    build: (I) => ({
      heroTitle: `${I.name} sales and marketing automation that never drops a lead`,
      heroLede: `Enquiries arrive from Google, Instagram, WhatsApp and calls. We set up the CRM and automations that reply instantly, follow up on time and bring past ${I.guests} back.`,
      without: [
        "Leads scattered across phones, inboxes and notebooks",
        "Follow-ups depend on someone remembering",
        `Past ${I.guests} never hear from you again`,
      ],
      withList: [
        "Every enquiry captured in one CRM, from every channel",
        "Instant replies and timed follow-ups on WhatsApp and email",
        "Birthday, anniversary and return-visit campaigns on autopilot",
      ],
      featuresLede: "Built on the Eazotel CRM, WhatsApp and email tools.",
      features: [
        { icon: "inbox", title: "Lead capture", body: "Website, Google Ads, Meta lead forms, WhatsApp and calls in one place." },
        { icon: "zap", title: "Instant replies", body: "An immediate WhatsApp or email reply to every new enquiry." },
        { icon: "refresh", title: "Follow-up sequences", body: "Timed nudges until the lead books or says no." },
        { icon: "users", title: "Lead stages and assignment", body: "See every lead's stage and who owns it." },
        { icon: "repeat", title: "Guest re-engagement", body: `Campaigns that bring past ${I.guests} back directly.` },
        { icon: "bars", title: "Pipeline reporting", body: "Leads, conversion and revenue by source." },
      ],
      steps: [
        { title: "Map your funnel", body: "Where leads come from and how your team handles them today." },
        { title: "Set up the CRM", body: "Sources, stages, team and templates." },
        { title: "Build automations", body: "Replies, follow-ups and re-engagement journeys." },
        { title: "Optimise", body: "Review conversion by source and improve the weakest step." },
      ],
      measure: ["Time to first reply", "Lead-to-booking conversion", "Revenue from repeat guests", "Leads lost without follow-up (target: zero)"],
      faqs: [
        { q: "Which tools do you use?", a: "The Eazotel CRM, WhatsApp marketing and email marketing — all on one dashboard." },
        { q: "Can it connect to our existing systems?", a: "Often yes. Tell us what you use and we'll confirm how leads and bookings can flow in." },
        { q: "Will automated messages feel robotic?", a: "No. We write them in your voice and keep them short, helpful and timed sensibly." },
        { q: "Is WhatsApp automation allowed?", a: "Yes, through the official WhatsApp Business API with approved templates." },
      ],
    }),
  },

  /* ── Content Creation ────────────────────────────────────── */
  "content-creation": {
    key: "content-creation",
    label: "Content Creation",
    icon: "camera",
    image: "/home/content-creation.png",
    card: (I) => `Photos, reels and copy that make people want to ${I.bookAction}`,
    products: ["hotel-social-media-management-tool", "hotel-cms"],
    build: (I) => ({
      heroTitle: `${I.name} content that makes people want to ${I.bookAction}`,
      heroLede: `Photography, reels and copy that capture your ${I.showcase} — made for Instagram, your website, ads and OTA listings.`,
      without: [
        "Old or phone-shot photos across every channel",
        "No reels, while competitors post every week",
        "Copy that sounds like every other listing",
      ],
      withList: [
        "A library of professional photos and short videos",
        "Reels planned around what your guests love",
        "Copy that sounds like you, everywhere",
      ],
      featuresLede: `Planned for how ${I.audience} discover and choose.`,
      features: [
        { icon: "camera", title: "Photography", body: `Rooms, spaces, food and people — shot to sell your ${I.showcase}.` },
        { icon: "sparkles", title: "Reels and short video", body: "Scroll-stopping short videos for Instagram and ads." },
        { icon: "pen", title: "Copywriting", body: "Website, listing, ad and social copy in your brand voice." },
        { icon: "palette", title: "Design", body: "Social creatives, offer banners and brochures." },
        { icon: "calendar", title: "Shoot planning", body: `Shot lists and schedules planned around ${I.peaks}.` },
        { icon: "layers", title: "Organised library", body: "All assets delivered, named and sized for each channel." },
      ],
      steps: [
        { title: "Creative brief", body: "What to show, for whom, and where it will be used." },
        { title: "Shoot", body: "A planned photo and video shoot at your property." },
        { title: "Edit and write", body: "Edited photos, cut reels and copy for each channel." },
        { title: "Deliver and publish", body: "A ready-to-use library, or we publish it for you." },
      ],
      measure: ["Engagement on new content", "Conversion on updated listings and pages", "Ad performance with new creatives", "Content published per month"],
      faqs: [
        { q: "Do you travel for shoots?", a: "Yes. We shoot across India; travel is planned into the quote." },
        { q: "Do we own the photos and videos?", a: "Yes, you get full usage rights for your marketing." },
        { q: "Can you use our existing photos?", a: "Yes. We'll review what you have and only shoot what's missing." },
        { q: "Do you provide models?", a: "We can arrange models or feature your real staff and guests, with consent." },
      ],
    }),
  },

  /* ── Branding ────────────────────────────────────────────── */
  branding: {
    key: "branding",
    label: "Branding",
    icon: "palette",
    image: "/images/Girlwithpen.webp",
    heroPhoto: true,
    card: (I) => `A brand ${I.guests} remember — and choose over the rest`,
    products: ["hotel-cms"],
    build: (I) => ({
      heroTitle: `${I.name} branding that makes you the obvious choice`,
      heroLede: `When every ${I.noun} in the area looks the same online, the brand decides. We shape your positioning, name, identity and voice so the right ${I.guests} choose you — and pay for it.`,
      without: [
        `Looks and sounds like every other ${I.noun} nearby`,
        "Competing on price because nothing else stands out",
        "A different look on every channel",
      ],
      withList: [
        "A clear position: who you're for and why you're different",
        "A distinctive identity used consistently everywhere",
        "A brand that supports better rates",
      ],
      featuresLede: "Strategy first, then design.",
      features: [
        { icon: "target", title: "Positioning", body: `Your ideal ${I.guests}, your promise and how you differ from competitors.` },
        { icon: "pen", title: "Naming and messaging", body: "Name, tagline and key messages that stick." },
        { icon: "palette", title: "Visual identity", body: "Logo, colours, typography and photography style." },
        { icon: "chat", title: "Brand voice", body: "How you write and speak, from Instagram to WhatsApp." },
        { icon: "file", title: "Brand guidelines", body: "A clear guide for your team and partners." },
        { icon: "layers", title: "Rollout", body: "Website, signage, stationery, menus and social templates." },
      ],
      steps: [
        { title: "Discovery", body: "Interviews, guest insights and competitor review." },
        { title: "Strategy", body: "Positioning, personality and messaging for approval." },
        { title: "Identity", body: "Logo and visual system, refined with your feedback." },
        { title: "Rollout", body: "Guidelines and assets for every touchpoint." },
      ],
      measure: ["Brand recall and direct (branded) searches", "Rate you can command against competitors", "Consistency across channels", "Guest feedback on first impressions"],
      faqs: [
        { q: "Do we need a full rebrand?", a: "Not always. Sometimes a sharper position and a refresh of the identity is enough." },
        { q: "How long does branding take?", a: "Typically four to eight weeks for strategy and identity." },
        { q: "Will you help roll it out?", a: "Yes — website, social templates, signage and print." },
        { q: "Do you work with new properties?", a: "Yes. Branding is part of our preopening service for new properties." },
      ],
    }),
  },

  /* ── Performance Marketing ───────────────────────────────── */
  "performance-marketing": {
    key: "performance-marketing",
    label: "Performance Marketing",
    icon: "target",
    image: "/images/GOOGLE-ADS-10.webp",
    card: () => `Google and Meta ads that bring enquiries at a lower cost`,
    products: ["hotel-booking-engine", "hotel-call-management-system", "hotel-crm"],
    build: (I) => ({
      heroTitle: `${I.name} performance marketing that pays for itself`,
      heroLede: `Google Ads and Meta ads built around people ready to ${I.bookAction} — with landing pages and tracking that turn clicks into enquiries. Across our hospitality accounts, cost per enquiry fell from ₹650 in 2024 to ₹192 in 2026.`,
      without: [
        "Ad spend that brings clicks, but few enquiries",
        "Calls and WhatsApp chats from ads not tracked",
        "Budgets flat all year, whatever the demand",
      ],
      withList: [
        "Search-first campaigns aimed at people ready to book",
        "Every call, WhatsApp chat and booking click tracked",
        `Budgets that follow ${I.peaks}`,
      ],
      featuresLede: "The same playbook behind our Google Ads case studies.",
      features: [
        { icon: "search", title: "Google Search and Maps ads", body: `Show up for searches like ${q(I.searches[1])} at the moment of intent.` },
        { icon: "megaphone", title: "Meta ads", body: "Facebook and Instagram campaigns for discovery, offers and retargeting." },
        { icon: "devices", title: "Landing pages", body: "One page per offer, built to be enquired from on mobile." },
        { icon: "target", title: "Conversion tracking", body: "Calls, WhatsApp, forms and booking clicks tracked separately." },
        { icon: "calendar", title: "Seasonal budgeting", body: "Spend moved into the dates when enquiries are cheapest." },
        { icon: "bars", title: "Clear reporting", body: "Enquiries, cost per enquiry and bookings — every month." },
      ],
      steps: [
        { title: "Audit the whole path", body: "Account, search terms, landing pages, tracking and booking flow." },
        { title: "Fix tracking first", body: "Every enquiry route tracked, so bidding optimises for real results." },
        { title: "Launch search-first", body: "High-intent campaigns first, then discovery and retargeting." },
        { title: "Scale with the season", body: "More budget where the cost per enquiry is lowest." },
      ],
      measure: ["Enquiries per month", "Cost per enquiry", "Click-to-enquiry rate", "Bookings and revenue from ads"],
      faqs: [
        { q: "What budget do we need?", a: "It depends on your market and goals. Many properties start small, prove the cost per enquiry, and then scale." },
        { q: "Google Ads or Meta ads?", a: "Usually Google first, because people are already searching; Meta works well for discovery, offers and retargeting." },
        { q: "Do we own the ad account?", a: "Always. It stays in your name; we manage it with access you grant." },
        { q: "Can we get a free audit?", a: "Yes. We'll review your account, landing page and tracking and send a target cost per enquiry." },
      ],
    }),
  },

  /* ── Sales & Marketing Consultation ──────────────────────── */
  "sales-marketing-consultation": {
    key: "sales-marketing-consultation",
    label: "Sales & Marketing Consultation",
    icon: "handshake",
    image: "/images/Contact.webp",
    card: (I) => `An expert plan for growing your ${I.noun}'s revenue`,
    products: ["hotel-crm"],
    build: (I) => ({
      heroTitle: `${I.name} sales and marketing consulting, from people who've run hotels`,
      heroLede: `Not sure where your marketing money should go? We audit your channels, pricing, sales process and digital presence, and give you a clear, prioritised plan to grow ${I.goal}.`,
      without: [
        "Spending on marketing without knowing what works",
        "A different agency for every channel, with no plan tying it together",
        "Sales that rely on walk-ins and OTAs",
      ],
      withList: [
        "A clear picture of what drives your revenue",
        "A prioritised 90-day plan with owners and budgets",
        "A sales process your team can run every week",
      ],
      featuresLede: "Hospitality operators and marketers on the same team.",
      features: [
        { icon: "search", title: "Revenue and channel audit", body: `Where your ${I.guests} come from and what each channel really costs.` },
        { icon: "target", title: "Positioning review", body: `How you compare to the ${I.plural} guests weigh you against.` },
        { icon: "clipboard", title: "90-day growth plan", body: "Priorities, budgets, owners and targets." },
        { icon: "users", title: "Sales process and training", body: "Enquiry handling, follow-ups and corporate and group sales." },
        { icon: "handshake", title: "Partnerships", body: "Corporate, travel-trade and local partnerships worth pursuing." },
        { icon: "bars", title: "Monthly reviews", body: "Optional ongoing reviews to keep the plan on track." },
      ],
      steps: [
        { title: "Discovery", body: "Interviews with owners and team, plus your data." },
        { title: "Audit", body: "Channels, pricing, digital presence and sales process." },
        { title: "Plan", body: "A written 90-day plan, presented and discussed." },
        { title: "Support", body: "Optional hands-on help to deliver it." },
      ],
      measure: ["Revenue and direct share against plan", "Cost of acquisition by channel", "Enquiry-to-booking conversion", "Progress on the 90-day plan"],
      faqs: [
        { q: "Who runs the consultation?", a: "Fielmente's founding team, with backgrounds in hotel operations at international chains, alongside our marketing specialists." },
        { q: "Is it a one-off or ongoing?", a: "Either. Many clients start with a one-off audit and plan, then add monthly reviews." },
        { q: "Do you also deliver the plan?", a: "We can — or your existing team and agencies can, using our plan." },
        { q: "What do you need from us?", a: "Access to recent performance data and time with the owner and key staff." },
      ],
    }),
  },

  /* ── PR & Communication ──────────────────────────────────── */
  "pr-communication": {
    key: "pr-communication",
    label: "PR & Communication",
    icon: "news",
    image: "/images/Contact2.webp",
    heroPhoto: true,
    card: (I) => `Press, features and stories that build trust in your ${I.noun}`,
    products: ["hotel-social-media-management-tool"],
    build: (I) => ({
      heroTitle: `${I.name} PR that gets you talked about for the right reasons`,
      heroLede: `Features in travel and lifestyle media, launches and events, and clear communication when things go wrong — PR that builds the trust ${I.guests} look for before they ${I.bookAction}.`,
      without: [
        "No press coverage, however good the experience",
        "Launches and events that go unnoticed",
        "No plan when a negative story or review spreads",
      ],
      withList: [
        "Stories pitched to the media your guests read",
        "Launches and events planned for coverage",
        "A ready plan for crisis communication",
      ],
      featuresLede: "Earned media that supports your marketing.",
      features: [
        { icon: "news", title: "Media relations", body: "Story ideas and pitches to travel, food and lifestyle media." },
        { icon: "pen", title: "Press releases and kits", body: "Clear, newsworthy releases and a ready media kit." },
        { icon: "rocket", title: "Launches and events", body: "Openings, new menus, retreats and festivals planned for coverage." },
        { icon: "users", title: "Media and influencer visits", body: "Hosted visits planned and managed end to end." },
        { icon: "shield", title: "Crisis communication", body: "A plan and support when something goes wrong." },
        { icon: "bars", title: "Coverage reporting", body: "Features, reach and links earned, month by month." },
      ],
      steps: [
        { title: "Story mining", body: "What makes your property newsworthy." },
        { title: "Plan", body: "A calendar of stories, launches and target media." },
        { title: "Pitch and host", body: "Outreach, media visits and follow-ups." },
        { title: "Amplify", body: "Coverage shared across your website and social." },
      ],
      measure: ["Features and mentions earned", "Estimated reach of coverage", "Links from media sites", "Branded search growth"],
      faqs: [
        { q: "Can you guarantee coverage?", a: "No one can guarantee editorial coverage, but good stories pitched well land consistently." },
        { q: "Which publications do you target?", a: "The travel, food, lifestyle and regional media your guests actually read." },
        { q: "Do you handle negative press?", a: "Yes. Crisis communication support is part of the service." },
        { q: "Does PR help SEO?", a: "Yes. Links and mentions from reputable media sites help your rankings and AI search visibility." },
      ],
    }),
  },

  /* ── Influencer Marketing ────────────────────────────────── */
  "influencer-marketing": {
    key: "influencer-marketing",
    label: "Influencer Marketing",
    icon: "users",
    image: "/images/Grilwithsocial.webp",
    heroPhoto: true,
    card: (I) => `Creators your ${I.guests} trust, showing why you're worth it`,
    products: ["hotel-social-media-management-tool"],
    build: (I) => ({
      heroTitle: `${I.name} influencer marketing that brings real ${I.guests}`,
      heroLede: `The right creators can fill dates faster than any ad. We find creators whose audience matches your ${I.guests}, manage the collaboration and measure the enquiries it brings.`,
      without: [
        "Free stays given to anyone with followers",
        "No brief, so content misses what makes you special",
        "No way to know if a collaboration brought bookings",
      ],
      withList: [
        "Creators chosen for audience fit, not follower count",
        "Clear briefs and deliverables for every collaboration",
        "Tracked links and codes to measure enquiries",
      ],
      featuresLede: `Creators who speak to ${I.audience}.`,
      features: [
        { icon: "search", title: "Creator research", body: "Audience location, age and engagement checked before any offer." },
        { icon: "file", title: "Briefs and agreements", body: "Deliverables, timelines and usage rights agreed up front." },
        { icon: "calendar", title: "Visit coordination", body: "Dates, experiences and hosting planned with your team." },
        { icon: "camera", title: "Content reuse", body: "Rights to reuse creator content on your channels and ads." },
        { icon: "link", title: "Tracked offers", body: "Unique links and codes to see what each creator drives." },
        { icon: "bars", title: "Results reporting", body: "Reach, engagement, enquiries and bookings per creator." },
      ],
      steps: [
        { title: "Goals and audience", body: "Which dates, offers and guests you want to reach." },
        { title: "Shortlist", body: "Vetted creators for your approval." },
        { title: "Collaborate", body: "Briefs, visits and content, managed end to end." },
        { title: "Measure", body: "Results per creator, and who to work with again." },
      ],
      measure: ["Reach and engagement of creator content", "Clicks and enquiries from tracked links", "Bookings using creator codes", "Content assets gained for reuse"],
      faqs: [
        { q: "Do we have to pay influencers?", a: "Sometimes. Smaller creators often work for a stay or meal; larger ones charge fees. We advise on what's worth it." },
        { q: "How do you avoid fake followers?", a: "We check audience quality, engagement and location before recommending anyone." },
        { q: "Can we reuse their content?", a: "Yes, when usage rights are agreed up front — which we always include." },
        { q: "Micro or macro influencers?", a: "Usually several well-matched micro-creators beat one big name for bookings." },
      ],
    }),
  },

  /* ── Social Media AI Automation ──────────────────────────── */
  "social-media-ai-automation": {
    key: "social-media-ai-automation",
    label: "Social Media AI Automation",
    icon: "bot",
    image: "/images/SMM-08.webp",
    heroPhoto: true,
    card: () => `AI that answers comments and DMs and captures leads 24/7`,
    products: ["hotel-conversational-tool", "hotel-ai-chatbot", "hotel-ai-reservation-desk"],
    build: (I) => ({
      heroTitle: `Social media AI automation that answers every DM, day and night`,
      heroLede: `Instagram and Facebook DMs are where many ${I.guests} ask about rates and availability. AI automation replies instantly, answers common questions, shares offers and captures the lead for your team.`,
      without: [
        "DMs answered hours later, after the guest booked elsewhere",
        "The same questions answered by hand, all day",
        "Comments asking 'price?' left unanswered",
      ],
      withList: [
        "Instant replies to DMs and comments, 24/7",
        "Answers from your hotel's own information",
        "Qualified leads passed to your team with full context",
      ],
      featuresLede: "Automation on Meta's official APIs, with your team always in control.",
      features: [
        { icon: "bot", title: "AI DM replies", body: "Instant, accurate answers to questions about rooms, rates, timings and offers." },
        { icon: "chat", title: "Comment-to-DM", body: "Comments like 'price?' trigger a helpful DM with details." },
        { icon: "zap", title: "Story and ad replies", body: "Replies to story mentions and ad comments, automatically." },
        { icon: "inbox", title: "Lead capture", body: "Dates, guests and contact details saved to the CRM." },
        { icon: "handshake", title: "Human hand-off", body: "Your team takes over any conversation at any time." },
        { icon: "bars", title: "Conversation reports", body: "Volumes, response times and leads from social." },
      ],
      steps: [
        { title: "Build the knowledge base", body: "Your rooms, rates, policies and FAQs." },
        { title: "Design the flows", body: "Greetings, keywords, offers and hand-off rules." },
        { title: "Connect Instagram and Facebook", body: "Through Meta's official business APIs." },
        { title: "Review and improve", body: "Monthly review of conversations and missed questions." },
      ],
      measure: ["Response time on DMs and comments", "Conversations handled without staff", "Leads captured from social", "Bookings from social conversations"],
      faqs: [
        { q: "Is this allowed by Instagram?", a: "Yes. It runs through Meta's official APIs for business accounts." },
        { q: "Will guests know it's automated?", a: "Replies are clearly from your property's assistant, and a person can step in at any time." },
        { q: "What if the AI doesn't know the answer?", a: "It hands the conversation to your team instead of guessing." },
        { q: "Does it work with WhatsApp too?", a: "Yes. The same assistant can answer on WhatsApp and your website." },
      ],
    }),
  },

  /* ── Online Reputation Management ────────────────────────── */
  "online-reputation-management": {
    key: "online-reputation-management",
    label: "Online Reputation Management",
    icon: "star",
    image: "/industry/cloud-kitchen-1.png",
    card: () => `More great reviews, and every review answered well`,
    products: ["hotel-local-seo", "hotel-ai-front-desk", "hotel-guest-request-management"],
    build: (I) => ({
      heroTitle: `${I.name} reputation management that turns reviews into bookings`,
      heroLede: `Guests read reviews on ${I.reviewSites} before they ${I.bookAction}. We help you earn more five-star reviews, answer every review well and fix the issues behind the bad ones.`,
      without: [
        "Happy guests leave without writing a review",
        "Negative reviews sit unanswered for weeks",
        "The same complaints repeat, month after month",
      ],
      withList: [
        "A simple system that invites happy guests to review",
        "Every review answered professionally, fast",
        "Monthly insights on what guests love and what to fix",
      ],
      featuresLede: "Reviews, responses and the operations behind them.",
      features: [
        { icon: "star", title: "Review generation", body: "Well-timed review requests by WhatsApp and email after check-out." },
        { icon: "chat", title: "Review responses", body: `Personal, on-brand replies on ${I.reviewSites}.` },
        { icon: "bell", title: "Alerts", body: "Instant alerts for new negative reviews." },
        { icon: "brain", title: "Sentiment insights", body: "Themes in what guests praise and complain about." },
        { icon: "shield", title: "Issue recovery", body: "Catch problems in-stay, before they become reviews." },
        { icon: "bars", title: "Reputation reports", body: "Ratings, volumes and response rates across platforms." },
      ],
      steps: [
        { title: "Reputation audit", body: "Ratings, reviews and responses on every platform." },
        { title: "Set up the system", body: "Review requests, alerts and response guidelines." },
        { title: "Respond and recover", body: "Replies every week, and in-stay issue recovery." },
        { title: "Improve operations", body: "Monthly insights shared with your team." },
      ],
      measure: ["Average rating on each platform", "New reviews per month", "Response rate and time", "Recurring complaint themes"],
      faqs: [
        { q: "Can you remove bad reviews?", a: "We can report reviews that break platform policies. For genuine reviews, a good response and fixing the issue works far better." },
        { q: "Do you write fake reviews?", a: "Never. We only help you invite real guests to share their experience." },
        { q: "Which platforms do you cover?", a: `${I.reviewSites}, plus any others that matter for your market.` },
        { q: "How fast do you respond to reviews?", a: "We agree a response time with you — typically within a day or two, faster for negative reviews." },
      ],
    }),
  },

  /* ── Social Media Reservation Automation (restaurants) ───── */
  "social-media-reservation-automation": {
    key: "social-media-reservation-automation",
    label: "Social Media Reservation Automation",
    icon: "calendarCheck",
    image: "/industry/online-mobile.webp",
    card: () => `Take table bookings straight from Instagram and WhatsApp`,
    products: ["hotel-conversational-tool", "hotel-whatsapp-marketing", "hotel-ai-chatbot"],
    build: (I) => ({
      heroTitle: `Table reservations straight from Instagram and WhatsApp`,
      heroLede: `People discover your ${I.noun} on Instagram and want to book there and then. Automation replies to DMs, offers slots, confirms the table and sends a reminder — without anyone picking up the phone.`,
      without: [
        "DMs asking for a table on Saturday answered too late",
        "Bookings on paper or in a staff member's phone",
        "No-shows with no reminder sent",
      ],
      withList: [
        "Instant replies with available times",
        "Reservations confirmed on WhatsApp in a few taps",
        "Reminders that reduce no-shows",
      ],
      featuresLede: "From Instagram DM to confirmed table in one conversation.",
      features: [
        { icon: "chat", title: "Instagram DM booking", body: "Replies to 'table for 4 tonight?' with available slots." },
        { icon: "calendarCheck", title: "WhatsApp confirmation", body: "Booking details confirmed on WhatsApp." },
        { icon: "bell", title: "Reminders", body: "A reminder before the booking, with directions." },
        { icon: "users", title: "Party and occasion details", body: "Guest count, occasion and preferences captured." },
        { icon: "sparkles", title: "Event and offer promotion", body: `Share events and offers for ${I.peaks} in the same chat.` },
        { icon: "bars", title: "Reservation reports", body: "Bookings from social, by day and by campaign." },
      ],
      steps: [
        { title: "Set your slots", body: "Seating times, capacity and booking rules." },
        { title: "Design the flow", body: "Greeting, booking questions, confirmation and reminder." },
        { title: "Connect channels", body: "Instagram and WhatsApp on official business APIs." },
        { title: "Promote it", body: "'Book via DM' on your profile, posts and ads." },
      ],
      measure: ["Reservations from Instagram and WhatsApp", "Response time to booking requests", "No-show rate", "Covers from social campaigns"],
      faqs: [
        { q: "Does it work with our current reservation system?", a: "Tell us which system you use and we'll confirm how bookings can be passed to it." }, // REVIEW
        { q: "Can guests change or cancel?", a: "Yes, by replying in the same WhatsApp conversation." },
        { q: "Do we need a WhatsApp Business account?", a: "Yes. We set up the official WhatsApp Business API for you." },
        { q: "Can it handle large party or event enquiries?", a: "It collects the details and passes them to your team to confirm." },
      ],
    }),
  },
};

export const serviceSlug = (I: IndustryProfile, key: ServiceKey) => `${I.slug}/${I.prefix}-${key}`;

/** Full href for an industry's service: its own page, or the existing/agency page that covers it. */
export const serviceHref = (I: IndustryProfile, key: ServiceKey) => {
  const target = I.existing?.[key] ?? serviceSlug(I, key);
  return target.startsWith("/") ? target : `/industries-we-serve/${target}/`;
};

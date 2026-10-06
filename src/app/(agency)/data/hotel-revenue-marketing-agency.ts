import type { AgencyPageData } from "@/@types/@agencyPageType";

const page: AgencyPageData = {
  slug: "hotel-revenue-marketing-agency",
  crumbs: [{ label: "Services", href: "/hospitality-marketing-services/" }],
  keyword: "Hotel Revenue Marketing Agency",
  secondaryKeywords: [
    "revenue-led hotel marketing",
    "hotel revenue management and marketing",
    "marketing to increase hotel RevPAR",
    "hotel need-date campaigns",
  ],
  group: "specialty",
  navLabel: "Revenue-led hotel marketing",
  cardLine: "Campaigns planned around need dates, rate and net revenue after commission",
  areaServed: "Worldwide",
  meta: {
    title: "Hotel Revenue Marketing Agency | Fielmente",
    description:
      "Hotel marketing driven by revenue management: campaigns for your need dates, ADR and net revenue after commission, plus OTA management and aligned pricing.",
  },
  hero: {
    eyebrow: "Hotel revenue marketing agency",
    h1: "Hotel revenue marketing that fills your need dates at the right rate",
    lede: "Most hotel marketing is judged on clicks. We judge ours on room nights sold on the dates your pickup is weak, at a rate that protects ADR, through the channel that leaves you the most after commission. Your revenue calendar sets the plan, and every campaign follows it.",
    chips: [
      "Founded by a hotelier with sales and marketing experience at Marriott and Hyatt",
      "Cost per enquiry down 70% across our hospitality ad accounts, 2024 to 2026",
      "120+ hotels use Eazotel, our sister booking and CRM platform",
    ],
  },
  form: {
    title: "Get a free revenue and marketing review",
    body: "Tell us about your property and the dates that worry you. We'll check your OTA listings, rate parity, ads and booking engine, then send a written plan for your weakest periods.",
    defaultCountryCode: "+91",
    needs: [
      "Filling low-occupancy dates",
      "Growing ADR and RevPAR",
      "OTA management and rankings",
      "Packages and length-of-stay offers",
      "Lowering commission costs",
      "Google Ads and metasearch",
      "Everything",
    ],
  },
  logos: "hotels",
  context: {
    eyebrow: "Why revenue and marketing belong together",
    title: "Demand is growing slowly, and every channel takes a cut",
    intro: [
      "International arrivals rose 4.7% in 2025 to 1.544 billion, then grew only 0.4% in the first half of 2026, and UN Tourism now expects 1–2% growth for the full year[[GL1]]. In a market that grows this slowly, a hotel adds revenue by winning share on specific dates and by keeping more of each booking it takes.",
      "Distribution is where much of that money leaks. OTA commissions can range from 15–30% of the booking value, and some properties pay effective rates approaching 30–40%[[GL11]]. Yet a high direct share is realistic: across Europe, 51.3% of hotel overnights were booked direct in 2025, against 29.9% through OTAs[[GL4]]. Revenue marketing connects these numbers to your calendar, so each campaign answers three questions. Which dates need help? What rate can they carry? Which channel returns the most after commission and costs?",
    ],
    stats: [
      { value: "15–30%", label: "typical OTA commission on the booking value", source: "GL11" },
      { value: "51.3%", label: "of European hotel overnights booked direct in 2025", source: "GL4" },
      { value: "$1.07tn", label: "of travel booked online worldwide in 2025, up 8%", source: "GL3" },
      { value: "1–2%", label: "UN Tourism's revised 2026 growth forecast for international arrivals", source: "GL1" },
    ],
    image: {
      src: "/agency/revenue-analytics.jpg",
      fallback: "/home/ota-management.png",
      alt: "Tablet showing booking charts in a hotel lobby",
    },
    points: [
      {
        title: "Your revenue calendar should write the media plan",
        body: "A revenue manager knows which weekdays in July look soft and which December Saturday will sell out on its own. A flat monthly ad budget ignores both. We read your on-the-books position and pickup each week and put spend behind the dates that are falling behind.",
      },
      {
        title: "Net revenue counts more than gross bookings",
        body: "Two bookings at the same rate are worth different amounts once commission, payment fees and acquisition cost come off. Online intermediaries still command the hotel segment[[GL3]], so we compare every channel on what it leaves you and shift budget toward the cheapest route to each guest.",
      },
      {
        title: "Accurate prices are a marketing asset",
        body: "Google ranks its free hotel booking links on signals that include the value offered, the landing page and the historical accuracy of the prices you send, and bids have no effect on that ranking[[GL12]]. Clean rate feeds and steady parity help your visibility as well as your revenue.",
      },
    ],
  },
  comparison: {
    title: "What changes when marketing follows your revenue strategy",
    without: [
      "Ad budgets spread evenly across the month, including nights that would sell out anyway",
      "Ads promote a rate or offer the booking engine doesn't show, so guests leave",
      "Success reported as clicks and enquiries, with no view of commission or net rate",
      "Blanket discounts fill gaps and teach guests to wait for the next deal",
    ],
    withList: [
      "Spend moved each week toward the need dates flagged by your pickup report",
      "Ads, metasearch, OTAs and your booking engine all showing the same offer and total price",
      "Reports on room nights, ADR, RevPAR and revenue after commission, by channel",
      "Packages and length-of-stay offers that add value while the public rate holds",
    ],
  },
  services: {
    title: "Revenue marketing services for hotels",
    lede: "Each service works from the same need-date calendar, so your OTA, ads and CRM teams pull in one direction. Open any card for the full service page.",
    items: [
      { icon: "layers", title: "OTA management", body: "Content, rates, promotions, reviews and ranking on the major OTAs, managed against your revenue goals.", href: "/industries-we-serve/hotel-marketing-agency/hotel-ota-management/" },
      { icon: "rocket", title: "OTA listing", body: "New or relaunched properties set up correctly on the OTAs that suit your guest mix.", href: "/industries-we-serve/hotel-marketing-agency/hotel-ota-listing/" },
      { icon: "search", title: "Google Ads and metasearch", body: "Search and hotel campaigns switched on for the dates that need volume, with free booking links connected.", href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/" },
      { icon: "wallet", title: "Direct booking strategy", body: "Shift share from OTAs to your own channels with member rates, parity checks and a faster booking path.", href: "/hotel-direct-booking-marketing-agency/" },
      { icon: "calendarCheck", title: "Booking engine", body: "A mobile booking engine that displays packages, length-of-stay offers and total prices clearly.", href: "/products/hotel-booking-engine/" },
      { icon: "refresh", title: "Channel manager", body: "Rates and inventory updated across every channel at once, so parity and restrictions hold.", href: "/products/hotel-channel-manager/" },
      { icon: "users", title: "Hotel CRM", body: "Past-guest data segmented by stay pattern, ready for offers on the dates you need to fill.", href: "/products/hotel-crm/" },
      { icon: "send", title: "WhatsApp marketing", body: "Need-date offers sent to opted-in guests on WhatsApp, with payment links and no commission.", href: "/products/hotel-whatsapp-marketing/" },
      { icon: "handshake", title: "Sales and marketing consultation", body: "Pricing calendars, offer rules and channel strategy for owners who don't have a revenue team.", href: "/industries-we-serve/hotel-marketing-agency/hotel-sales-marketing-consultation/" },
    ],
  },
  proof: {
    title: "Proof from the hotels we market",
    lede: "Our case studies track Google Ads enquiries and cost per enquiry for hotels and resorts in India. Hotel Green Castle shows what happens when budget follows demand: spend pushed into its peak months brought enquiries at ₹26–33 each, the lowest cost of the year.",
    caseStudies: ["hotel-green-castle-google-ads", "naturoville-google-ads", "ebc-mussoorie-google-ads"],
    testimonials: ["unnati-stayinn", "siddhi-vinayak"],
    honestNote:
      "The published figures are enquiries and cost per enquiry taken from each client's own Google Ads account. ADR and RevPAR depend on far more than marketing, so we set those targets with you from your own history.",
  },
  process: {
    title: "How a revenue marketing engagement runs",
    lede: "The first month builds a shared calendar. After that, the work follows a weekly rhythm tied to your pickup.",
    steps: [
      {
        when: "Week 1",
        title: "Revenue and channel audit",
        body: "Twelve months of occupancy, ADR and channel mix, plus your OTA rankings and content, rate parity, ad accounts and how the booking engine shows price.",
      },
      {
        when: "Week 2",
        title: "Need-date calendar",
        body: "With your revenue manager, GM or owner we mark the dates and room types that need help over the next 90 days, the rate floors to respect and the offers we may use.",
      },
      {
        when: "Weeks 3–4",
        title: "Launch by date",
        body: "Search campaigns, OTA promotions and past-guest messages go live against those dates, with tracking that ties each booking to its channel and stay date.",
      },
      {
        when: "Every week after",
        title: "Pace reviews",
        body: "Pickup is compared with last year and with target. Budget moves to the dates still behind and pulls back from dates that have filled.",
      },
    ],
  },
  blocks: [
    {
      kind: "table",
      eyebrow: "Revenue terms, explained",
      title: "The numbers we plan around, in plain words",
      lede: "Revenue terms get used loosely in marketing reports. These are the definitions we report against, and the lever marketing has on each one.",
      columns: ["Metric", "What it tells you", "How marketing moves it"],
      rows: [
        ["Occupancy", "The share of available rooms sold on a given night.", "Date-targeted search, CRM messages and OTA promotions opened only for nights that are behind pace."],
        ["ADR (average daily rate)", "Room revenue divided by the number of rooms sold.", "Packages, upgrades and stronger room-type content that give guests a reason to pay a higher rate."],
        ["RevPAR", "Room revenue divided by rooms available, which captures occupancy and rate in one figure.", "Balancing the two. A campaign that fills rooms by dropping rate can leave RevPAR flat, so we report both."],
        ["TRevPAR", "Total revenue from rooms, food, spa and events per available room.", "Offers that bring spend beyond the room: dining credits, spa time, experiences and event enquiries."],
        ["GOPPAR", "Gross operating profit per available room, after operating costs.", "A lower cost to acquire each booking and a better channel mix, so more of the revenue reaches profit."],
        ["Net revenue by channel", "What a booking is worth after commission, payment fees and marketing cost.", "Comparing OTA, direct and metasearch bookings on the same basis, then moving spend toward the cheapest source."],
      ],
      note: "Targets come from your own history and competitive set. We won't promise a RevPAR figure before we've seen your data.",
    },
    {
      kind: "cards",
      eyebrow: "Tactics",
      title: "Six ways to fill need dates without cutting rate",
      lede: "Discounting the whole calendar is the quickest way to fill rooms and the quickest way to lose ADR. These tools go after the gap itself.",
      items: [
        { icon: "calendar", title: "Date-targeted search", body: "Ads and landing pages built for specific weeks, events and long weekends, switched on when pickup lags and paused once the dates fill." },
        { icon: "layers", title: "Packages that hold rate", body: "The room plus dinner, spa time, transfers or an experience, sold as a bundle so the headline room rate stays intact on public channels." },
        { icon: "clock", title: "Length-of-stay offers", body: "A free third night on quiet weekdays, or minimum stays on peak nights, to fill the shoulder nights around busy dates." },
        { icon: "users", title: "Past-guest campaigns", body: "Email and WhatsApp offers to guests who stayed before, timed for the dates that need them and free of commission." },
        { icon: "ticket", title: "OTA promotions with an end date", body: "Mobile, member or early-booker deals opened on OTAs for the dates that need volume and closed as soon as those dates are filling." },
        { icon: "percent", title: "Advance-purchase rates", body: "Non-refundable or early-booking rates for low-season periods, so demand is locked in early with terms that suit your cash flow." },
      ],
    },
    {
      kind: "split",
      eyebrow: "Pricing alignment",
      title: "One price across ads, OTAs and your booking engine",
      paragraphs: [
        "When an ad promises one rate and the booking engine shows another, the guest usually leaves, and often books the same room on an OTA instead. We check that the rate, inclusions and taxes in every ad match what your booking engine shows on the day, and that parity holds across OTAs and metasearch.",
        "The way you show the total price matters as well. In the US, the FTC's fees rule has required hotels since 12 May 2025 to show the total price, including mandatory fees such as resort fees, more prominently than other pricing[[GL14]]. Whatever market your guests come from, showing taxes and fees clearly before the payment step avoids an unpleasant surprise at checkout.",
      ],
      bullets: [
        "Weekly parity checks across your booking engine, the OTAs and Google",
        "Ad copy and landing pages updated the same day rates or inclusions change",
        "Accurate prices sent to Google, which uses price accuracy to rank free booking links[[GL12]]",
        "Taxes and mandatory fees shown upfront wherever guests expect a total price",
      ],
      image: { src: "/industry/hotel-2.png", fallback: "/industry/hotel-2.png", alt: "Receptionist handing a key card to a guest at the front desk" },
      reverse: true,
    },
  ],
  faqs: [
    {
      q: "What is hotel revenue marketing?",
      a: "It is marketing planned from your revenue data. We use your occupancy forecast, pickup and pricing strategy to decide which dates to promote, what to offer and which channel to use, then report on room nights, ADR and revenue after commission.",
    },
    {
      q: "Do you replace our revenue manager?",
      a: "No. Your revenue manager, GM or owner sets rates and restrictions. We build demand for the dates they flag and give them channel data to price with. For hotels without a revenue team, we can also run OTA rate updates and day-to-day revenue support.",
    },
    {
      q: "How do you decide which dates to market?",
      a: "From your on-the-books report and pickup pace, compared with the same point last year. Dates behind pace, quiet weekdays and the nights either side of a sell-out are the usual candidates. We agree the list with you every week.",
    },
    {
      q: "Won't promotions pull our ADR down?",
      a: "They can if you run them across the whole calendar. We use packages, length-of-stay offers and closed-user rates for past guests on specific dates, so the public rate you've set stays visible and protected.",
    },
    {
      q: "Can you manage our OTA listings and rankings?",
      a: "Yes. We handle listing content, photos, room mapping, rates, inventory, promotions and review replies on the major OTAs. We weigh each paid visibility programme against the extra commission it adds before recommending it.",
    },
    {
      q: "How do you report results?",
      a: "Through a shared dashboard and a monthly review covering enquiries, bookings and room nights by channel, ADR, RevPAR against target, and revenue after commission and ad cost. Short weekly pace notes reach your team on WhatsApp or email.",
    },
    {
      q: "Do we need to use Eazotel to work with you?",
      a: "No. We work with the booking engine and channel manager you already have, provided bookings can be tracked. If you'd like bookings, CRM and WhatsApp on one dashboard, Eazotel is our sister platform and more than 120 hotels use it.",
    },
    {
      q: "Does this work for a small hotel without a revenue team?",
      a: "Yes, and smaller hotels often have the most to gain, because nobody has time to connect pricing with marketing. We keep it simple: a short list of need dates, two or three approved offers and one weekly check-in.",
    },
    {
      q: "How soon will we see a difference?",
      a: "Parity fixes, OTA content and date-targeted search usually show up in the next booking window. Moving your channel mix toward direct bookings and lifting ADR take longer and build over several months of steady work.",
    },
  ],
  related: [
    "hotel-direct-booking-marketing-agency",
    "hotel-performance-marketing-agency",
    "industries-we-serve/hotel-marketing-agency/hotel-google-ads",
    "boutique-hotel-marketing-agency",
    "luxury-resort-marketing-agency",
    "hotel-ai-marketing-agency",
  ],
  extraLinks: [
    { title: "Hotel marketing agency", body: "All of our hotel services, from OTA management to branding.", href: "/industries-we-serve/hotel-marketing-agency/" },
    { title: "Hotel Green Castle case study", body: "How seasonal budget scaling took a Mussoorie hotel past 1,000 enquiries a month.", href: "/case-study/hotel-green-castle-google-ads/" },
    { title: "What OTA optimisation is worth", body: "Our guide to the OTA fixes that lift visibility and revenue.", href: "/how-can-ota-optimisation-help-your-hotel-get-millions-of-benefit/" },
    { title: "Reducing OTA dependency", body: "How hotels are using ChatGPT ads to win more bookings directly.", href: "/how-hotels-can-reduce-ota-dependency-using-chatgpt-ads/" },
  ],
  cta: {
    title: "Know which dates worry you? Let's fill them.",
    body: "Get a free revenue and marketing review of your channel mix, parity, OTA listings and ads, with a plan for the need dates in your next 90 days.",
  },
  sources: [
    { id: "GL1", label: "UN Tourism, World Tourism Barometer (excerpt), Sep 2026", url: "https://pre-webunwto.s3.eu-west-1.amazonaws.com/s3fs-public/2026-09/World_Tourism%20Barometer_Sep26_Excerpt.pdf?VersionId=DMPxbDVq0xveTGY3n7j1cgdL_UTn28Pk" },
    { id: "GL11", label: "EHL Insights, Hotel OTAs and commission rates, May 2026", url: "https://insights.ehl.edu/hotel-otas" },
    { id: "GL4", label: "HOTREC, European Hotel Distribution Study 2026 (2,713 hotels)", url: "https://www.hotrec.eu/media/static/files/import/all_news_2026_2026_35/full-study_european-hotel-distribution-study-2026_hotrec.pdf" },
    { id: "GL3", label: "Phocuswright, Travel Forward: data, insights and trends for 2026", url: "https://www.phocuswright.com/Travel-Research/Research-Updates/2026/Travel-Forward-Data-Insights-and-Trends-for-2026" },
    { id: "GL12", label: "Google Hotel Center Help, Free booking links and hotel ads", url: "https://support.google.com/hotelprices/answer/10472393?hl=en" },
    { id: "GL14", label: "US Federal Trade Commission, Rule on Unfair or Deceptive Fees: FAQs", url: "https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions" },
  ],
};

export default page;

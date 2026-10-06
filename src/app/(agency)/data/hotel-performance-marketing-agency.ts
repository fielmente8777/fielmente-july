import type { AgencyPageData } from "@/@types/@agencyPageType";

const page: AgencyPageData = {
  slug: "hotel-performance-marketing-agency",
  crumbs: [{ label: "Services", href: "/hospitality-marketing-services/" }],
  keyword: "Hotel Performance Marketing Agency",
  secondaryKeywords: ["hotel paid media agency", "Meta ads for hotels", "hotel retargeting", "ChatGPT ads for hotels", "hotel ROAS"],
  group: "specialty",
  navLabel: "Hotel performance marketing",
  cardLine: "Google, Meta, metasearch and ChatGPT ads planned as one budget and judged on cost per booking",
  areaServed: "Worldwide",
  meta: {
    title: "Hotel Performance Marketing Agency | Fielmente",
    description:
      "Paid media for hotels across Google, Meta, metasearch, retargeting and ChatGPT ads, with one budget plan and reports on cost per enquiry, booking and ROAS.",
  },
  hero: {
    eyebrow: "Hotel performance marketing agency",
    h1: "Hotel performance marketing across every paid channel, judged on bookings",
    lede: "Guests now hop between search, Instagram, price comparison and AI assistants before they book. Among US travellers, trip research on search engines fell from 51% to 36% between late 2024 and the second half of 2025, while generative AI rose from 6% to 15%[[GL10]]. We plan your paid channels as one budget and judge each one on the enquiries and bookings it brings in.",
    chips: [
      "A Google Partner and Meta Business Partner team",
      "Cost per enquiry 70% lower in 2026 than in 2024 on the Google Ads we run",
      "15+ hospitality marketers on one team",
    ],
  },
  form: {
    title: "Get a free paid media plan for your hotel",
    body: "Tell us where your bookings come from today and which channels you pay for. We'll send back a channel and budget plan, with the tracking you need to judge it.",
    defaultCountryCode: "+91",
    needs: [
      "Plan budget across channels",
      "Meta (Facebook and Instagram) ads",
      "Google Ads",
      "Retargeting",
      "ChatGPT ads",
      "Landing page and booking engine conversion",
      "Everything",
    ],
  },
  logos: "hotels",
  context: {
    eyebrow: "Where hotel demand is moving",
    title: "The path to a booking now runs through more paid channels",
    intro: [
      "Online travel bookings reached an estimated $1.07 trillion in 2025, up 8%, and intermediaries still command the hotel segment[[GL3]]. OTAs buy search, social and metasearch at scale to reach the same guests you want. When a hotel buys media channel by channel, with separate agencies and separate reports, it often pays twice for the same guest and can't tell which spend worked.",
      "Discovery is spreading out too. 39% of active US travellers used AI for trip planning in the second half of 2025[[GL10]]. By August 2026, ChatGPT ads were available in more than 40 countries, with self-serve buying opening in India, Europe, the Middle East and North Africa[[GL42]]. Search still carries the most intent, yet the guest who books may first have seen you in a Reel or a chat answer.",
    ],
    stats: [
      { value: "$1.07tn", label: "online travel gross bookings worldwide in 2025, up 8%", source: "GL3" },
      { value: "51% → 36%", label: "US travellers using search engines for trip research, late 2024 to H2 2025", source: "GL10" },
      { value: "39%", label: "of active US travellers used AI to plan trips in H2 2025", source: "GL10" },
      { value: "40+", label: "countries where ChatGPT ads were available by August 2026", source: "GL42" },
    ],
    image: {
      src: "/agency/marketing-dashboard.jpg",
      fallback: "/home/sales-marketing-automation.png",
      alt: "Marketing team working through campaign dashboards",
    },
    points: [
      {
        title: "Every channel has a different job",
        body: "Search catches guests who already know where they want to go. Meta ads build the wish to go there. Metasearch wins the price comparison, and retargeting brings back the guest who looked and left. If all four are judged on last-click bookings, the channels that create demand get cut first.",
      },
      {
        title: "The OTA commission is your benchmark",
        body: "OTAs typically charge 15–30% of the booking value, and visibility programmes push the effective rate higher[[GL11]]. That gives every paid channel a simple test: does a direct booking from this channel cost less in media than the OTA would have taken?",
      },
      {
        title: "Fix conversion before adding spend",
        body: "Paid traffic converts only as well as the page and booking engine it lands on. When Naturoville's path from ad to enquiry was rebuilt, the share of clicks that became enquiries rose from 1.6% to 19.3% on almost the same budget[[FM2]]. We close those leaks before we scale.",
      },
    ],
  },
  comparison: {
    title: "What changes when one team runs all your paid media",
    without: [
      "Google, Meta and OTA ads run by different people with different reports",
      "Each platform claiming credit for the same booking",
      "Budgets split by habit, whatever the season",
      "Traffic sent to pages and booking engines that lose guests at the last step",
    ],
    withList: [
      "One plan and one budget across Google, Meta, metasearch, retargeting and ChatGPT ads",
      "Every channel measured on cost per enquiry, cost per booking and return on ad spend",
      "Spend shifted each month toward the channels and dates that convert",
      "Landing pages and booking steps tested and fixed before budgets grow",
    ],
  },
  services: {
    title: "Paid channels we plan and run for hotels",
    lede: "Use us for one channel or all of them. Each card links to the service or product behind it.",
    items: [
      { icon: "search", title: "Google Ads", body: "Search, Performance Max, Hotel Ads, Demand Gen and YouTube. The full detail sits on our hotel Google Ads page.", href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/" },
      { icon: "share", title: "Meta ads", body: "Facebook and Instagram Reels, carousels and lead forms that build demand for your dates, with audiences built from your own guests.", href: "/hospitality-marketing-services/social-media-marketing-agency/" },
      { icon: "bars", title: "Metasearch", body: "Your direct rate shown where guests compare prices, connected through your booking engine and checked against OTA rates.", href: "/products/hotel-booking-engine/" },
      { icon: "repeat", title: "Retargeting", body: "Google and Meta audiences of guests who viewed rooms or started a booking, plus win-back lists from your CRM.", href: "/products/hotel-crm/" },
      { icon: "megaphone", title: "OTA ads", body: "Sponsored placements and visibility programmes on OTAs, switched on for need dates only when the extra bookings cover the extra cost.", href: "/industries-we-serve/hotel-marketing-agency/hotel-ota-management/" },
      { icon: "bot", title: "ChatGPT ads", body: "Small, tracked tests for guests who plan trips with AI assistants, scaled only if they beat your other channels.", href: "/chatgpt-ads-vs-google-ads-for-hotels/" },
      { icon: "target", title: "Landing page and booking CRO", body: "Pages and booking steps rebuilt so more of the traffic you pay for turns into enquiries and bookings.", href: "/industries-we-serve/hotel-marketing-agency/hotel-website-development/" },
      { icon: "phoneCall", title: "Call tracking and reporting", body: "Tracked numbers for each channel, plus one report that reconciles ad platforms with your booking engine and CRM.", href: "/products/hotel-call-management-system/" },
      { icon: "chat", title: "WhatsApp follow-up", body: "Leads from every channel answered fast in a shared WhatsApp inbox, with broadcasts to past guests who opted in.", href: "/products/hotel-whatsapp-marketing/" },
    ],
  },
  proof: {
    title: "What disciplined measurement has done for our clients",
    lede: "Our published case studies are Google Ads accounts at Indian hotels and resorts, because that's where we hold three years of clean, comparable data. They show the habits we bring to every paid channel: count real enquiries, fix the page, then scale.",
    caseStudies: ["naturoville-google-ads", "naad-wellness-google-ads", "the-rudraksh-google-ads"],
    testimonials: ["atinder-bajwa", "donald-wingell"],
    honestNote:
      "We don't publish Meta, metasearch or ChatGPT ads case studies yet, so ask us for examples close to your property. We've worked with hospitality businesses in India, the UAE, Oman, the UK, the USA, Canada, Nepal, Sri Lanka and Australia.",
  },
  process: {
    title: "How we run a hotel's paid media",
    lede: "Measurement first, then a budget plan, then launch in the order that pays back fastest.",
    steps: [
      { when: "Weeks 1–2", title: "Measurement first", body: "An audit of every ad account, then call, WhatsApp, form and booking engine tracking set up so each channel reports against the same numbers." },
      { when: "Weeks 2–4", title: "Budget plan", body: "A split across channels by funnel stage and month, built from your occupancy forecast, need dates and the margin each booking leaves after media cost." },
      { when: "Weeks 4–8", title: "Launch and fix leaks", body: "Search and retargeting go live first, then Meta and metasearch. Landing page and booking engine fixes run alongside." },
      { when: "Every month", title: "Reallocate", body: "A review of cost per enquiry, cost per booking and return on ad spend by channel, with budget moved to where it earns most." },
    ],
  },
  blocks: [
    {
      kind: "table",
      eyebrow: "Budget allocation",
      title: "The role we give each paid channel",
      lede: "No fixed split suits every hotel. We start from your occupancy forecast and the margin each booking leaves, then let results decide where the next rupee goes.",
      columns: ["Channel", "Its job", "What we measure", "When it earns more budget"],
      rows: [
        ["Google Search, Performance Max and Hotel Ads", "Capture guests already searching for your destination, your kind of stay or your name.", "Cost per enquiry, cost per booking and brand impression share.", "When cost per booking sits well below OTA commission and there is search volume left to buy."],
        ["Meta (Facebook and Instagram)", "Create demand for your dates, packages and experiences before guests start searching.", "Cost per lead, cost per landing page visit, assisted bookings and frequency.", "When new creative holds cost per lead steady and those leads convert close to search leads."],
        ["Metasearch and free booking links", "Win the price comparison when guests check your rate against OTAs.", "Price accuracy, click share, bookings on your engine and cost against commission.", "When your direct rate is at least level with OTAs and your booking engine converts well on mobile."],
        ["Retargeting on Google and Meta", "Bring back guests who viewed rooms or started a booking and left.", "Return visits, completed bookings and cost per recovered booking.", "When the audience is large enough and frequency stays under control."],
        ["OTA ads and visibility programmes", "Lift your ranking on Booking.com, Agoda, MakeMyTrip and others for dates you need to fill.", "Extra bookings compared with the higher commission or ad cost.", "Only on need dates, and only while the extra bookings outweigh the extra cost."],
        ["ChatGPT ads", "Reach guests asking an AI assistant where to stay. Ads are labelled as sponsored and, OpenAI says, don't influence answers[[GL43]].", "Visits, enquiries and bookings from tagged links, and cost per booking.", "When a small test beats your blended cost per booking. OpenAI began opening self-serve buying in India at the end of August 2026[[GL42]]."],
      ],
      note: "OTA names are examples. Channel roles shift by property: a wedding venue leans on Meta and enquiry forms, a city hotel on search and metasearch.",
    },
    {
      kind: "cards",
      eyebrow: "Measurement",
      title: "The numbers we report every month",
      lede: "Ad platforms each report their own conversions, and those reports overlap. We also report from your booking engine, CRM and call logs, so one booking is counted once.",
      items: [
        { icon: "inbox", title: "Cost per enquiry", body: "Media spend divided by tracked calls, WhatsApp chats, forms and booking clicks. It's the quickest signal of whether a channel works. Across our Google Ads accounts it fell 70% between 2024 and 2026." },
        { icon: "percent", title: "Click-to-enquiry rate", body: "The share of ad clicks that become an enquiry. It tells you whether the landing page is doing its job. At Naad Wellness it rose from 2.4% to 24.5%." },
        { icon: "calendarCheck", title: "Cost per booking", body: "Spend divided by confirmed bookings from each channel, taken from your booking engine and CRM, so no platform marks its own homework." },
        { icon: "trend", title: "Return on ad spend", body: "Booking revenue divided by media cost for each channel, reported on confirmed stays with cancellations removed, so it reflects money you keep." },
        { icon: "wallet", title: "Cost against commission", body: "What a direct booking cost in media, set against what an OTA would have charged on the same stay. If media costs more, the channel needs fixing or a smaller budget." },
        { icon: "line", title: "Direct share of revenue", body: "The share of room revenue booked through your own channels, month by month. Paid media should lift it over time without starving OTAs on dates you need them." },
      ],
    },
    {
      kind: "split",
      eyebrow: "Conversion rate optimisation",
      title: "More bookings from the traffic you already pay for",
      paragraphs: [
        "The cheapest way to lower cost per booking is to convert more of the guests you already reach. Common problems are prices that appear late, a booking flow that needs too many taps on a phone, and no quick way to ask a question. Each one costs bookings on every channel at once.",
        "We fix the page and the booking path before adding budget. At Naad Wellness, moving Book Now and WhatsApp to the front of a rebuilt landing page lifted the share of clicks that became enquiries from 2.4% to 24.5%[[FM2]]. The same changes help every channel that sends traffic to that page, from Google to Instagram.",
      ],
      bullets: [
        "Price, dates and a Book Now button on the first screen of a phone",
        "WhatsApp and call buttons on every page, each tracked as its own conversion",
        "A booking engine with as few steps as possible and the total price shown before payment",
        "Separate landing pages for rooms, packages, weddings and retreats",
        "A/B tests on headlines, offers and photos once traffic allows",
      ],
      image: { src: "/images/Contact3.webp", fallback: "/images/Contact3.webp", alt: "Marketing team reviewing a hotel website on a laptop" },
      reverse: true,
    },
  ],
  faqs: [
    {
      q: "How is performance marketing different from Google Ads management?",
      a: "Google Ads is one channel. Performance marketing covers every paid channel, including Meta, metasearch, retargeting, OTA ads and ChatGPT ads, planned as one budget and measured on the same numbers. For Google-only work, see our hotel Google Ads page.",
    },
    {
      q: "How do you decide how much goes to each channel?",
      a: "We start with your occupancy forecast, need dates and the value of a typical booking. Search usually gets budget first because it captures demand that already exists. Meta, metasearch and retargeting are added and scaled when their cost per booking holds up, and the split is reviewed every month.",
    },
    {
      q: "Do Facebook and Instagram ads work for hotels?",
      a: "They work best for creating demand: weekend getaways, packages, weddings, retreats and new openings. They're weaker at catching guests who already know where they're going. We judge them on cost per lead and on assisted bookings, so they aren't cut for doing a different job from search.",
    },
    {
      q: "Should our hotel advertise on ChatGPT?",
      a: "It's worth a small, well-tracked test if your guests use AI assistants to plan trips. ChatGPT ads are labelled as sponsored and sit apart from the answers, so they don't replace work on your organic AI visibility. We run tests with tagged links and judge them on enquiries and bookings.",
    },
    {
      q: "Are OTA ads and visibility programmes worth paying for?",
      a: "Sometimes, on dates you need to fill. They raise the effective commission on every booking they touch, so we compare the extra bookings with the extra cost and switch them off when the maths stops working.",
    },
    {
      q: "Which numbers will we see in our reports?",
      a: "Spend, enquiries, cost per enquiry, bookings, cost per booking and return on ad spend for each channel, plus your direct share of revenue. Bookings and revenue come from your booking engine and CRM as well as from the ad platforms.",
    },
    {
      q: "Why do Google and Meta both claim the same booking?",
      a: "Each platform counts any booking it touched, so their totals add up to more than you actually received. We reconcile them against your booking engine and CRM and look at the role each channel played, so budget decisions rest on real bookings.",
    },
    {
      q: "Can you improve our booking engine's conversion?",
      a: "Yes. We audit the booking steps on a phone and fix what we can in your current engine. If the engine itself holds you back, we can move you to the Eazotel booking engine, which 120+ hotels already use.",
    },
    {
      q: "Do you run paid media for resorts and villas too?",
      a: "Yes. Resorts, villas and homestays follow the same approach with different guest journeys, such as longer planning windows for destination resorts. Our resort performance marketing service covers those properties in more depth.",
    },
  ],
  related: [
    "industries-we-serve/hotel-marketing-agency/hotel-google-ads",
    "hotel-direct-booking-marketing-agency",
    "hotel-revenue-marketing-agency",
    "hotel-ai-marketing-agency",
    "hospitality-marketing-services/seo-agency",
    "industries-we-serve/resort-marketing-agency",
  ],
  extraLinks: [
    { title: "Reduce OTA dependency with ChatGPT ads", body: "How hotels can use ChatGPT ads to win more bookings direct.", href: "/how-hotels-can-reduce-ota-dependency-using-chatgpt-ads/" },
    { title: "AI performance marketing for hotels", body: "A practical guide to using AI across your paid campaigns.", href: "/ai-performance-marketing-for-hotels-a-practical-guide/" },
    { title: "ChatGPT ads for boutique hotels", body: "Campaign structure and budgeting for smaller properties.", href: "/chatgpt-ads-for-boutique-hotels-campaign-structure-and-budget/" },
    { title: "Resort performance marketing", body: "Paid media built around resort seasons and longer booking windows.", href: "/industries-we-serve/resort-marketing-agency/resort-performance-marketing/" },
  ],
  cta: {
    title: "Ready to run your paid channels as one plan?",
    body: "Get a free paid media plan with a channel split, the tracking to judge it, and the conversion fixes to make first.",
  },
  sources: [
    { id: "GL10", label: "Phocuswright, Travel Forward: data, insights and trends for 2026 (US trip research)", url: "https://www.phocuswright.com/Travel-Research/Research-Updates/2026/Travel-Forward-Data-Insights-and-Trends-for-2026" },
    { id: "GL3", label: "Phocuswright, Travel Forward 2026 (global gross bookings)", url: "https://www.phocuswright.com/Travel-Research/Research-Updates/2026/Travel-Forward-Data-Insights-and-Trends-for-2026" },
    { id: "GL42", label: "OpenAI, A milestone in expanding access to AI (ChatGPT ads availability), Aug 2026", url: "https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/" },
    { id: "GL11", label: "EHL Insights, Hotel OTAs: their business model explained, May 2026", url: "https://insights.ehl.edu/hotel-otas" },
    { id: "FM2", label: "Fielmente, Google Ads case studies", url: "https://fielmente.com/case-study/" },
    { id: "GL43", label: "OpenAI Help Center, Ads in ChatGPT", url: "https://help.openai.com/en/articles/20001047-ads-in-chatgpt" },
  ],
};

export default page;

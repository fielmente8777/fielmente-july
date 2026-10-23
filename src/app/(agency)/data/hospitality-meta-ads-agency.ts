import { AgencyPageData } from "@/@types/@agencyPageType";

const page: AgencyPageData = {
  slug: "hospitality-meta-ads-agency",
  crumbs: [{ label: "Services", href: "/hospitality-marketing-services/" }],
  keyword: "Meta Ads Agency for Hotels and Restaurants",
  secondaryKeywords: ["Facebook ads for hotels", "Instagram ads for restaurants", "Meta travel ads", "Advantage+ catalog ads for hotels", "hotel retargeting ads"],
  group: "ads",
  platforms: ["meta", "facebook", "instagram"],
  navLabel: "Meta Ads (Facebook & Instagram)",
  cardLine: "Facebook and Instagram ads that create demand for your stays, tables and events, tracked to bookings",
  areaServed: "Worldwide",
  meta: {
    title: "Meta Ads Agency for Hotels & Restaurants | Fielmente",
    description:
      "Facebook and Instagram ads for hotels, resorts and restaurants: Reels, lead forms, travel catalog ads and retargeting, tracked to bookings.",
  },
  hero: {
    eyebrow: "Meta ads for hospitality",
    h1: "Facebook and Instagram ads that make people want to stay, eat and celebrate with you",
    lede: "Guests rarely search for a place they haven't heard of. Meta ads put your rooms, food and events in front of the right people before they start searching, and Meta's travel ads can show each person the rooms and dates they looked at[[MT1]]. We run them as a Meta Business Partner team, judged on enquiries and bookings, not likes.",
    chips: [
      "Google Partner and Meta Business Partner team",
      "Reels, shoots and ads planned by one hospitality team",
      "Leads answered on WhatsApp within minutes",
    ],
  },
  form: {
    title: "Get a free Meta ads plan",
    body: "Share your Instagram and Facebook pages and, if you advertise already, read-only access to Ads Manager. We'll review creative, audiences, tracking and landing pages, and send a written plan.",
    defaultCountryCode: "+91",
    needs: [
      "Start Facebook and Instagram ads",
      "Fix ads that get likes but no bookings",
      "Travel catalog ads and retargeting",
      "Lead forms for weddings and events",
      "Reels and creative for ads",
      "Pixel and Conversions API tracking",
      "Everything",
    ],
  },
  logos: "all",
  context: {
    eyebrow: "What Meta ads do for hospitality",
    title: "Search catches demand. Meta creates it.",
    intro: [
      "Search ads reach people who already know what they want. Meta ads reach people before that point: the couple who'd love a hill-station weekend but hasn't picked one, the family planning the next school holiday, the office team looking for a party venue. For hotels, resorts, restaurants and venues, that's often where the booking really starts.",
      "Meta also has ad formats built for travel. Its travel ads promote items from a hotel catalog, use cross-device intent signals and can show each person the property they viewed, with its price[[MT1]]. They depend on clean tracking: a Search event when someone checks dates, ViewContent on room pages, InitiateCheckout when booking starts and Purchase on confirmation, sent through the Pixel and the Conversions API[[MT2]].",
    ],
    stats: [
      { value: "3", label: "travel ad types Meta supports: hotels, flights and destinations", source: "MT1" },
      { value: "4", label: "booking events to track for travel ads: Search, ViewContent, InitiateCheckout and Purchase", source: "MT2" },
      { value: "15–30%", label: "typical OTA commission a direct booking from Meta can save", source: "GL11" },
      { value: "39%", label: "of active US travellers used AI to plan trips in H2 2025, so discovery is spreading across channels", source: "GL10" },
    ],
    image: {
      src: "/industry/online-mobile.webp",
      alt: "Restaurant's Instagram feed open on a phone",
    },
    points: [
      {
        title: "Creative is the targeting",
        body: "Meta's delivery decides who sees an ad largely from the ad itself. A Reel of your pool at sunset finds people who want a pool holiday. We plan shoots and edits around the reasons guests choose you, then test several versions at once.",
      },
      {
        title: "Retargeting needs a catalog",
        body: "A hotel catalog with each property or room, its price and photos lets Meta show people the exact rooms they looked at[[MT1]]. Without it, retargeting falls back to generic ads that convert far less well.",
      },
      {
        title: "Judge Meta on its own job",
        body: "Meta ads often start a booking that finishes on Google or by WhatsApp. We track leads, assisted bookings and cost per lead, so Meta isn't cut for not doing search's job.",
      },
    ],
  },
  comparison: {
    title: "What changes when we run your Meta ads",
    without: [
      "Boosted posts with no plan, judged on likes and reach",
      "No Pixel or Conversions API, so Meta optimises for clicks, not bookings",
      "Generic retargeting that shows the same ad to everyone",
      "Leads from forms and DMs left waiting for hours",
    ],
    withList: [
      "Campaigns for each goal: bookings, leads, events and launches",
      "Booking events tracked through the Pixel and Conversions API",
      "Catalog retargeting that shows people the rooms and offers they viewed",
      "Every lead answered on WhatsApp in minutes and logged in a CRM",
    ],
  },
  services: {
    title: "What we run on Facebook and Instagram",
    lede: "Ads for each part of the guest journey, with the creative and tracking behind them.",
    items: [
      { icon: "camera", title: "Reels and ad creative", body: "Shoots and edits planned for ads: rooms, food, views, events and the people who make your place.", href: "/industries-we-serve/hotel-marketing-agency/hotel-content-creation/", platform: "instagram" },
      { icon: "users", title: "Prospecting campaigns", body: "Audiences in your source cities and countries, built from your past guests and Meta's own signals.", href: "/hotel-performance-marketing-agency/", platform: "meta" },
      { icon: "repeat", title: "Travel catalog and retargeting", body: "A hotel catalog connected to your website, so returning visitors see the rooms and offers they looked at.", href: "/products/hotel-crm/", platform: "facebook" },
      { icon: "inbox", title: "Lead forms", body: "Instant forms for weddings, events, group stays and packages, sent straight to your CRM and WhatsApp.", href: "/industries-we-serve/hotel-marketing-agency/hotel-weddings-events-marketing/" },
      { icon: "utensils", title: "Restaurant ads", body: "Local ads around your outlet for new menus, weekend nights, festivals and table bookings by DM.", href: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/", platform: "instagram" },
      { icon: "target", title: "Pixel and Conversions API", body: "Booking events set up on your website and booking engine, deduplicated between browser and server.", href: "/products/hotel-insights-analytics/" },
    ],
  },
  proof: {
    title: "How we measure paid media for hospitality",
    lede: "Our published case studies are Google Ads accounts, where we hold three years of comparable data. They show the habits we bring to Meta: track real enquiries, fix the page, then scale what converts.",
    caseStudies: ["naad-wellness-google-ads", "naturoville-google-ads"],
    testimonials: ["donald-wingell", "atinder-bajwa"],
    honestNote:
      "We don't publish Meta ads case studies yet. Ask us for examples from properties and restaurants close to yours.",
  },
  process: {
    title: "How we run Meta ads",
    lede: "Tracking, creative and a clear goal for each campaign, then monthly decisions on real results.",
    steps: [
      { when: "Weeks 1–2", title: "Tracking and catalog", body: "Pixel and Conversions API with booking events, a hotel catalog where it fits, and lead routing to WhatsApp and your CRM." },
      { when: "Weeks 2–3", title: "Creative", body: "A shoot or a brief for your team, and five to ten ad versions built around the reasons guests choose you." },
      { when: "Weeks 3–4", title: "Launch", body: "Prospecting in your source markets, retargeting for recent visitors, and lead forms for events and groups." },
      { when: "Every month", title: "Review and refresh", body: "Cost per lead, cost per booking, assisted bookings and frequency, with new creative before old ads tire." },
    ],
  },
  blocks: [
    {
      kind: "table",
      eyebrow: "Campaign types",
      title: "Which Meta campaign for which goal",
      columns: ["Goal", "Campaign", "What we measure"],
      rows: [
        ["Fill rooms for specific dates", "Sales campaigns with a travel catalog and booking events[[MT1]]", "Bookings, revenue and cost per booking from your booking engine"],
        ["Win back people who looked", "Catalog retargeting of the rooms and offers they viewed", "Returning visitors, started bookings and completed bookings"],
        ["Weddings, events and groups", "Lead campaigns with instant forms and WhatsApp", "Cost per lead, site visits booked and events confirmed"],
        ["Restaurant covers", "Local awareness and message campaigns around your outlet", "Reservations by DM and WhatsApp, and cost per reservation"],
        ["New openings and launches", "Reach and video campaigns in your source cities", "Reach, video views, followers and early enquiries"],
      ],
    },
    {
      kind: "cards",
      eyebrow: "Tracking",
      title: "The events Meta needs to optimise for bookings",
      lede: "Each one fires at a meaningful step and is sent from the browser and the server, deduplicated so one booking counts once[[MT2]].",
      items: [
        { icon: "search", title: "Search", body: "When a guest checks availability with dates and guests, so Meta learns who's planning a trip." },
        { icon: "bed", title: "ViewContent", body: "On a specific room or property page, matched to the item in your catalog." },
        { icon: "clipboard", title: "InitiateCheckout", body: "When the booking process starts, not when someone simply views rooms." },
        { icon: "calendarCheck", title: "Purchase", body: "On a confirmed booking, with the real value and currency." },
        { icon: "inbox", title: "Lead", body: "For forms and WhatsApp enquiries, so wedding and event campaigns optimise toward real enquiries." },
        { icon: "shield", title: "Consent", body: "Tracking set up within the consent rules of the markets you advertise in." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do Facebook and Instagram ads work for hotels?",
      a: "They work best for creating demand: weekend getaways, packages, weddings, retreats and new openings. They're weaker at catching guests who already know where they're going, which is search's job. We judge them on leads and assisted bookings as well as last-click bookings.",
    },
    {
      q: "What are Meta travel ads?",
      a: "Catalog ads for travel. A hotel catalog lists your properties or rooms with prices and photos, and Meta shows each person relevant items, including the ones they viewed on your website, using cross-device intent signals.",
    },
    {
      q: "Do Meta ads work for restaurants?",
      a: "Yes, especially local ads around your outlet for new menus, weekend nights, live events and festivals, with reservations taken by DM or WhatsApp. We measure them on reservations, not reach.",
    },
    {
      q: "Do we need the Conversions API?",
      a: "We recommend it alongside the Pixel. Browser tracking misses some events, and server-side events help Meta see bookings and optimise toward them. We set it up within the consent rules that apply to you.",
    },
    {
      q: "How is this different from your social media management?",
      a: "Social media management covers your organic Instagram and Facebook: content, posting and community. This service is the paid side: campaigns, audiences, catalogs, tracking and budgets. Most clients use both, run by the same team.",
    },
    {
      q: "What budget do Meta ads need?",
      a: "It depends on your markets and goals. We set a monthly budget from the bookings or leads you want and the cost per booking you can afford against OTA commission, and start with enough to test several creatives properly.",
    },
  ],
  related: ["hotel-performance-marketing-agency", "chatgpt-ads-agency", "google-hotel-ads-agency", "zomato-swiggy-ads-agency"],
  extraLinks: [
    { title: "Hospitality social media", body: "Organic Instagram and Facebook for hotels and restaurants.", href: "/hospitality-marketing-services/social-media-marketing-agency/" },
    { title: "ChatGPT Ads vs Meta ads for hotels", body: "Where each channel fits in a hotel's plan.", href: "/chatgpt-ads-vs-meta-ads-for-hotels/" },
    { title: "Facebook and Instagram ads for food orders", body: "Using social ads to drive delivery and dine-in orders.", href: "/how-facebook-and-instagram-ads-can-increase-your-food-orders/" },
  ],
  cta: {
    title: "Want Meta ads judged on bookings?",
    body: "Get a free plan with campaigns, creative and the tracking to measure them on enquiries and bookings.",
  },
  sources: [
    { id: "MT1", label: "Meta for Developers, Travel ads (Advantage+ catalog ads for travel)", url: "https://developers.facebook.com/docs/marketing-api/travel-ads" },
    { id: "MT2", label: "Adchieve, Meta travel ads for hotels, Jul 2026", url: "https://www.adchieve.com/en/blog/meta-travel-ads-for-hotels" },
    { id: "GL11", label: "EHL Insights, Hotel OTAs: their business model explained, May 2026", url: "https://insights.ehl.edu/hotel-otas" },
    { id: "GL10", label: "Phocuswright, Travel Forward: data, insights and trends for 2026 (US trip research)", url: "https://www.phocuswright.com/Travel-Research/Research-Updates/2026/Travel-Forward-Data-Insights-and-Trends-for-2026" },
  ],
};

export default page;

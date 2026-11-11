import { AgencyPageData } from "@/@types/@agencyPageType";

// Uttarakhand page (Nov 2026 SEO review): replaces a 63-word blog stub at the same URL. Uttarakhand is where many
// of our clients are, so the page is built from that work: client names come from the client list on
// /our-clients/ (src/utils/client.ts) and results from the published case studies. No other page targets the keyword.

const page: AgencyPageData = {
  slug: "resort-marketing-agency-uttarakhand",
  crumbs: [{ label: "Resort marketing", href: "/industries-we-serve/resort-marketing-agency/" }],
  keyword: "Resort Marketing Agency Uttarakhand",
  secondaryKeywords: [
    "hotel marketing agency Uttarakhand",
    "resort marketing Rishikesh",
    "hotel marketing Mussoorie",
    "Jim Corbett resort marketing",
    "Nainital hotel marketing agency",
  ],
  group: "location",
  platforms: ["google-ads", "google-maps", "meta", "makemytrip", "google-hotels", "whatsapp"],
  navLabel: "Resort marketing in Uttarakhand",
  cardLine: "Direct bookings for resorts and hotels in Mussoorie, Rishikesh, Nainital, Mukteshwar and Corbett",
  areaServed: "Uttarakhand, India",
  meta: {
    title: "Resort Marketing Agency in Uttarakhand | Fielmente",
    description:
      "Marketing for resorts and hotels in Mussoorie, Rishikesh, Nainital, Mukteshwar and Corbett: Google Ads, SEO, OTAs and WhatsApp, with published client results.",
  },
  hero: {
    eyebrow: "Resort and hotel marketing · Uttarakhand",
    h1: "Resort marketing in Uttarakhand, from Mussoorie and Rishikesh to Mukteshwar and Corbett",
    lede: "Uttarakhand is where a large share of our clients are. We run Google Ads, SEO, OTA listings and WhatsApp for resorts, retreats and hotels in the hills, and we plan each one around the state's very uneven calendar: Delhi weekends, the summer rush, the monsoon lull, safari seasons and Char Dham months.",
    chips: [
      "Clients in Mussoorie, Rishikesh, Tehri, Nainital, Mukteshwar and Corbett",
      "Published Google Ads case studies from Uttarakhand properties",
      "Google Partner and Meta Business Partner",
    ],
  },
  form: {
    title: "Get a free audit for your Uttarakhand property",
    body: "Tell us about your resort or hotel. We'll review your ads, website, Google listing, OTA listings and how enquiries are answered, and send a written plan built around your season.",
    defaultCountryCode: "+91",
    needs: [
      "Google Ads",
      "SEO and Google Maps",
      "OTA listings (MakeMyTrip, Booking.com, Agoda)",
      "Social media and content",
      "Website or booking engine",
      "WhatsApp and enquiry handling",
      "Everything",
    ],
  },
  logos: "resorts",
  context: {
    eyebrow: "Why Fielmente in Uttarakhand",
    title: "We already market properties across the state",
    intro: [
      "Our Uttarakhand clients include Naturoville Wellness near Rishikesh and Dehradun, The Rudraksh in Tehri Garhwal, EBC Mussoorie, Hotel Green Castle and Tulip Inn Green Castle in Mussoorie, Riviera Resort Rishikesh, Allure Nainital, Trikone Stays in Nainital, Arkaya Mukteshwar, Essence of Nature near Ranikhet and Corbett The Grand.",
      "Most of their guests drive up from Delhi NCR, Chandigarh and the cities of Uttar Pradesh, decide late and ask questions on WhatsApp before they book. That is the journey our campaigns are built for: a search or an Instagram reel, then a fast reply with the right room, package and price.",
    ],
    stats: [
      { value: "₹177", label: "Naturoville's cost per enquiry, down from ₹1,543" },
      { value: "1,000+", label: "Google Ads enquiries a month for Hotel Green Castle, Mussoorie" },
      { value: "447", label: "enquiries a month for The Rudraksh at ₹41 each" },
      { value: "449", label: "direct enquiries a month for EBC Mussoorie, up from about 11" },
    ],
    image: {
      src: "/our-work/sites/therudrakshretreat-com.webp",
      alt: "Website of The Rudraksh, a Himalayan retreat in Tehri Garhwal marketed by Fielmente",
    },
    points: [
      {
        title: "Your calendar, not a generic one",
        body: "Budgets rise for Delhi long weekends, summer holidays and Christmas to New Year, ease off in the monsoon, and follow the safari and Char Dham seasons where they matter. Each property gets its own plan.",
      },
      {
        title: "Enquiries counted, not clicks",
        body: "Calls, WhatsApp chats, forms and booking-engine clicks are tracked back to the campaign that produced them, which is how our case-study numbers are measured.",
      },
      {
        title: "Direct bookings alongside the OTAs",
        body: "Most hill properties need MakeMyTrip and Booking.com. We keep those listings strong and use search, Google Hotel Ads and WhatsApp to move repeat and nearby guests to your own website.",
      },
    ],
  },
  comparison: {
    title: "What changes when we take over",
    without: [
      "One campaign running all year at the same budget, through monsoon and peak alike",
      "Enquiries on the owner's phone, the manager's phone and Instagram, with nobody tracking which ones booked",
      "OTAs taking most bookings, including guests who already searched for your name",
      "A website that is slow on mountain mobile networks and hides the WhatsApp button",
    ],
    withList: [
      "Campaigns and budgets that follow your season, week by week",
      "Every call, WhatsApp chat and form tracked to its source and followed up",
      "Brand searches, Google Hotel Ads and free booking links bringing guests to your own booking engine",
      "A fast mobile site with rates, packages and WhatsApp one tap away",
    ],
  },
  services: {
    title: "What we do for Uttarakhand properties",
    lede: "Start with one service or hand us the whole plan. Each service has its own page with the detail.",
    items: [
      {
        icon: "search",
        title: "Google Ads",
        body: "Search campaigns on stay intent for your town, judged on calls, WhatsApp chats and bookings.",
        href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/",
        platform: "google-ads",
      },
      {
        icon: "pin",
        title: "Local SEO and Google Maps",
        body: "A complete Google Business Profile, photos and reviews, so you show up for searches like 'resort in Mussoorie'.",
        href: "/industries-we-serve/resort-marketing-agency/resort-local-seo/",
        platform: "google-maps",
      },
      {
        icon: "hotel",
        title: "Google Hotel Ads",
        body: "Your direct rate next to the OTAs in Google's hotel results, plus free booking links.",
        href: "/google-hotel-ads-agency/",
        platform: "google-hotels",
      },
      {
        icon: "layers",
        title: "OTA management",
        body: "MakeMyTrip, Goibibo, Booking.com and Agoda listings, photos, rates and promotions.",
        href: "/hotel-ota-management/",
        platform: "makemytrip",
      },
      {
        icon: "share",
        title: "Social media and reels",
        body: "Instagram content and Meta ads for packages, long weekends and seasonal offers.",
        href: "/hospitality-meta-ads-agency/",
        platform: "meta",
      },
      {
        icon: "chat",
        title: "WhatsApp and enquiry handling",
        body: "Fast replies, follow-ups and payment links, so enquiries from your ads become bookings.",
        href: "/whatsapp-automation-for-hotels-the-complete-guide/",
        platform: "whatsapp",
      },
    ],
  },
  proof: {
    title: "Results from Uttarakhand properties",
    lede: "Three of our published case studies come from Uttarakhand. Every figure comes from the client's own Google Ads and tracking.",
    caseStudies: ["naturoville-google-ads", "hotel-green-castle-google-ads", "the-rudraksh-google-ads"],
    testimonials: ["atinder-bajwa"],
    honestNote: "These are Google Ads results for three properties in Rishikesh–Dehradun, Mussoorie and Tehri Garhwal. Your numbers depend on your location, rates and how quickly enquiries are answered.",
  },
  process: {
    title: "How we start",
    lede: "Most properties start with a free audit and a call.",
    steps: [
      {
        when: "Week 1",
        title: "Free audit",
        body: "Your ads, website, Google listing, OTA listings, reviews and how enquiries are answered, all reviewed.",
      },
      {
        when: "Week 2",
        title: "Season plan",
        body: "A written plan for the next 90 days, with budgets set around your peak, shoulder and monsoon weeks.",
      },
      {
        when: "Weeks 2–3",
        title: "Tracking and setup",
        body: "Call, WhatsApp and booking tracking set up before any ad budget is spent.",
      },
      {
        when: "Every month",
        title: "Review",
        body: "Enquiries, bookings and cost per enquiry reviewed with you, and budget moved to what works.",
      },
    ],
  },
  blocks: [
    {
      kind: "table",
      eyebrow: "Seasons",
      title: "How the year shapes marketing in Uttarakhand",
      lede: "Demand in the hills moves with school holidays, the weather and pilgrim and safari seasons. This is how we plan around it.",
      columns: ["Period", "What drives demand", "What we do"],
      rows: [
        ["Long weekends all year", "Drive-in guests from Delhi NCR, Chandigarh and Lucknow", "Campaigns that start a week or two out, with packages and WhatsApp replies ready"],
        ["April to June", "Summer holidays: Mussoorie, Nainital and the higher hills fill up", "Peak budgets, rate-led ads and fast enquiry handling, since guests compare several properties"],
        ["July to September", "Monsoon: fewer leisure trips, road closures in heavy rain", "Lower budgets, workation, wellness and long-stay offers, reviews and SEO work"],
        ["October to mid-November", "Clear weather, festivals and Char Dham pilgrims on the way to the shrines", "Festive and pilgrimage stays where they fit, wedding and group enquiries"],
        ["Mid-November to mid-June", "Corbett's Dhikala zone and most safari routes are open", "Safari-and-stay packages for Corbett properties, timed with permit openings"],
        ["December to February", "Snow weekends, Christmas and New Year", "Year-end packages pushed early, then winter offers for quieter weeks"],
      ],
      note: "Season dates vary by year and by zone; we confirm them with each property when we plan.",
    },
    {
      kind: "split",
      eyebrow: "Wellness and retreats",
      title: "Rishikesh and the wellness corridor",
      paragraphs: [
        "Retreats around Rishikesh and Dehradun sell programmes, not just rooms. Guests compare therapies, durations and what a stay includes, and many book from other cities or abroad after several conversations.",
        "For Naturoville we moved almost all spend onto high-intent wellness-retreat and therapy searches and rebuilt the path from ad to enquiry. Cost per enquiry fell from ₹1,543 to ₹177 on nearly the same budget.",
      ],
      bullets: [
        "Search campaigns for programmes and therapies, not generic 'resort' terms",
        "Landing pages that answer duration, inclusions and price before the enquiry",
        "Follow-up on WhatsApp for guests deciding over several days",
      ],
      image: {
        src: "/agency/google-ads-laptop.jpg",
        alt: "A marketing team reviewing campaign results with hotel owners",
      },
    },
  ],
  faqs: [
    {
      q: "Do you work with resorts and hotels in Uttarakhand?",
      a: "Yes. Our clients include properties in Mussoorie, Rishikesh and Dehradun, Tehri Garhwal, Nainital, Mukteshwar, near Ranikhet and in Jim Corbett. Three of our published Google Ads case studies are Uttarakhand properties.",
    },
    {
      q: "Which towns do you cover?",
      a: "Anywhere in the state. Most of our work is in Mussoorie, Rishikesh, Nainital, Mukteshwar, the Ranikhet and Almora area and Corbett, but the same approach works for homestays and retreats in the higher valleys.",
    },
    {
      q: "Should we stop ads during the monsoon?",
      a: "Usually not entirely. We lower budgets and shift to offers that suit the season, such as workations, wellness and long stays, while keeping brand searches covered. SEO, reviews and website work also fit well into quieter months.",
    },
    {
      q: "Can you reduce our dependence on MakeMyTrip and Booking.com?",
      a: "We keep your OTA listings strong, because they bring guests you would not otherwise reach, and then win more direct bookings from brand searches, Google Hotel Ads, repeat guests and WhatsApp enquiries.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on the services you need and your ad budget. After the free audit we send a written proposal with every cost listed, including ad spend, before you commit.",
    },
    {
      q: "Will we own our accounts?",
      a: "Yes. Your ad accounts, Google Business Profile, website and OTA logins stay in your name. We are added as users.",
    },
  ],
  related: [
    "luxury-resort-marketing-agency",
    "hotel-direct-booking-marketing-agency",
    "google-hotel-ads-agency",
    "hotel-performance-marketing-agency",
  ],
  extraLinks: [
    { title: "Resort marketing", body: "Our resort marketing services across India.", href: "/industries-we-serve/resort-marketing-agency/" },
    { title: "Wellness retreat marketing", body: "Marketing for retreats, Ayurveda and yoga stays.", href: "/industries-we-serve/wellness-retreat-marketing-agency/" },
    { title: "Case studies", body: "Before-and-after figures from the properties we market.", href: "/case-study/" },
    { title: "Our clients", body: "The hotels, resorts and restaurants we work with.", href: "/our-clients/" },
  ],
  cta: {
    title: "Market your Uttarakhand property with a team that knows the hills",
    body: "Book a free audit. You'll get a written plan for your season, whether you start with one service or all of them.",
  },
  sources: [],
};

export default page;

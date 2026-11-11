import { AgencyPageData } from "@/@types/@agencyPageType";

// Goa page (Nov 2026 SEO review): replaces a 433-word generic blog post at the same URL. Built from our Goa work as
// published on /our-work/ (src/app/our-work/sites.ts and services.ts): Aroha Palms (North Goa), SPARV Hospitality,
// The Acacia Resort & Spa (Morjim) and Grandeur de Sanchi (Calangute). There is no Goa case study yet, so the
// results shown are labelled as coming from resorts elsewhere in India.

const page: AgencyPageData = {
  slug: "hotel-resort-marketing-agency-goa",
  crumbs: [{ label: "Resort marketing", href: "/industries-we-serve/resort-marketing-agency/" }],
  keyword: "Hotel and Resort Marketing Agency Goa",
  secondaryKeywords: [
    "resort marketing agency Goa",
    "hotel marketing Goa",
    "villa marketing North Goa",
    "Goa resort social media marketing",
    "Goa hotel Meta ads",
  ],
  group: "location",
  platforms: ["meta", "google-ads", "google-maps", "makemytrip", "whatsapp"],
  navLabel: "Hotel and resort marketing in Goa",
  cardLine: "Websites, Instagram, Meta ads and OTAs for resorts, villas and hotels in North and South Goa",
  areaServed: "Goa, India",
  meta: {
    title: "Hotel & Resort Marketing Agency in Goa | Fielmente",
    description:
      "Marketing for resorts, villas and hotels in Goa: websites, Instagram and Meta ads, OTAs, Google Maps and WhatsApp, from the team behind Aroha Palms and SPARV.",
  },
  hero: {
    eyebrow: "Hotel, villa and resort marketing · Goa",
    h1: "Hotel and resort marketing in Goa, built for a short, crowded season",
    lede: "Goa sells on pictures, price and speed of reply. We build the websites, Instagram content, Meta and Google campaigns, OTA listings and WhatsApp follow-up that turn a guest scrolling in Mumbai, Pune or Bengaluru into a direct booking, and we plan them around a year that is busy for six months and quiet for four.",
    chips: [
      "Work for Aroha Palms, SPARV Hospitality, The Acacia at Morjim and Grandeur de Sanchi",
      "Websites, landing pages, social media and Meta ads for Goa properties",
      "Google Partner and Meta Business Partner",
    ],
  },
  form: {
    title: "Get a free audit for your Goa property",
    body: "Tell us about your resort, villa or hotel. We'll review your website, Instagram, ads, Google listing, OTA listings and how enquiries are answered, and send a written plan for the season ahead.",
    defaultCountryCode: "+91",
    needs: [
      "Instagram and content",
      "Meta ads",
      "Google Ads",
      "Website or booking engine",
      "OTA listings (MakeMyTrip, Booking.com, Agoda, Airbnb)",
      "WhatsApp and enquiry handling",
      "Everything",
    ],
  },
  logos: "resorts",
  context: {
    eyebrow: "Why Fielmente in Goa",
    title: "Goa work we have already done",
    intro: [
      "For Aroha Palms in North Goa we built the website and run social media, reels, Meta ads, OTA listings, local SEO and enquiry automation. For SPARV Hospitality we built the website and handle social media, influencer collaborations, Meta ads, OTA listings and local SEO. We built the landing page and Meta campaigns for The Acacia Resort & Spa at Morjim, and the website and SEO for Grandeur de Sanchi in Calangute.",
      "Most Goa guests find a property on Instagram or an OTA, check its Google reviews, then message on WhatsApp to ask about rates, the pool, the beach distance and whether the price includes breakfast. Campaigns only pay off when that last step is fast, so we set up the reply flow before we spend on ads.",
    ],
    stats: [
      { value: "4", label: "Goa properties we build for or market, from Morjim to Calangute" },
      { value: "3", label: "Goa websites designed and built by our team" },
      { value: "54,900+", label: "guest enquiries tracked across the 23 hotel ad accounts we manage (all regions)" },
      { value: "−70%", label: "cost per enquiry across those accounts, 2024 to 2026 (all regions)" },
    ],
    image: {
      src: "/our-work/sites/arohapalms-com.webp",
      alt: "Website of Aroha Palms in North Goa, designed and built by Fielmente",
    },
    points: [
      {
        title: "Content that sells the stay",
        body: "Pool, room, sunset and food reels shot for the property, not stock photos. In Goa the first impression is almost always visual.",
      },
      {
        title: "Enquiries counted, not likes",
        body: "Calls, WhatsApp chats, forms and booking-engine clicks are tracked back to the post or ad that produced them, so budgets go where bookings come from.",
      },
      {
        title: "Direct bookings alongside the OTAs",
        body: "MakeMyTrip, Booking.com, Agoda and Airbnb bring many Goa guests. We keep those listings strong and use Instagram, Google and WhatsApp to win repeat and returning guests directly.",
      },
    ],
  },
  comparison: {
    title: "What changes when we take over",
    without: [
      "An Instagram feed that looks like every other villa, posted when someone remembers",
      "Ads boosted from the app with no idea which ones led to a booking",
      "WhatsApp enquiries answered hours later, after the guest has booked elsewhere",
      "Peak-season rates and offers decided in December instead of planned in September",
    ],
    withList: [
      "A content plan shot around the property's rooms, pool, food and setting",
      "Meta and Google campaigns tracked to calls, chats and bookings",
      "Fast WhatsApp replies with rates, photos and a payment link ready",
      "A season plan agreed before the rush, with offers for the quiet months",
    ],
  },
  services: {
    title: "What we do for Goa properties",
    lede: "Start with one service or hand us the whole plan. Each service has its own page with the detail.",
    items: [
      {
        icon: "share",
        title: "Instagram, reels and Meta ads",
        body: "Content shoots, reels and Meta campaigns for packages, long weekends and the year-end peak.",
        href: "/hospitality-meta-ads-agency/",
        platform: "meta",
      },
      {
        icon: "search",
        title: "Google Ads",
        body: "Search campaigns on stay intent such as 'villa with pool in North Goa', judged on calls, chats and bookings.",
        href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/",
        platform: "google-ads",
      },
      {
        icon: "pin",
        title: "Local SEO and Google Maps",
        body: "A complete Google Business Profile with photos and reviews, so guests find you on the map near Baga, Anjuna or Morjim.",
        href: "/industries-we-serve/resort-marketing-agency/resort-local-seo/",
        platform: "google-maps",
      },
      {
        icon: "layers",
        title: "OTA management",
        body: "MakeMyTrip, Booking.com, Agoda and Airbnb listings, photos, rates and promotions.",
        href: "/hotel-ota-management/",
        platform: "makemytrip",
      },
      {
        icon: "globe",
        title: "Websites and booking engine",
        body: "Fast mobile websites with rates, galleries and WhatsApp one tap away, linked to your booking engine.",
        href: "/industries-we-serve/resort-marketing-agency/resort-website-development/",
      },
      {
        icon: "chat",
        title: "WhatsApp and enquiry handling",
        body: "Quick replies, follow-ups and payment links, so enquiries from Instagram and ads become bookings.",
        href: "/whatsapp-automation-for-hotels-the-complete-guide/",
        platform: "whatsapp",
      },
    ],
  },
  proof: {
    title: "Results from resorts like yours",
    lede: "Our published case studies come from resorts and retreats elsewhere in India. Every figure comes from the client's own ad accounts and tracking.",
    caseStudies: ["the-rudraksh-google-ads", "naturoville-google-ads", "wabi-sabi-resort"],
    testimonials: ["atinder-bajwa"],
    honestNote: "We do not have a published Goa case study yet; these results are from resorts in Uttarakhand and Igatpuri. Your numbers depend on your location, rates, content and how quickly enquiries are answered.",
  },
  process: {
    title: "How we start",
    lede: "Most properties start with a free audit and a call.",
    steps: [
      {
        when: "Week 1",
        title: "Free audit",
        body: "Your website, Instagram, ads, Google listing, OTA listings, reviews and how enquiries are answered, all reviewed.",
      },
      {
        when: "Week 2",
        title: "Season plan",
        body: "A written plan for the next 90 days, with content, offers and budgets set around peak, shoulder and monsoon weeks.",
      },
      {
        when: "Weeks 2–4",
        title: "Content and tracking",
        body: "A content shoot where needed, and call, WhatsApp and booking tracking set up before any ad budget is spent.",
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
      title: "How the year shapes marketing in Goa",
      lede: "Goa's demand is concentrated in the dry months and peaks at the end of the year. This is how we plan around it.",
      columns: ["Period", "What drives demand", "What we do"],
      rows: [
        ["September to October", "Bookings for the season start; travellers plan Diwali, Christmas and New Year trips", "Early-bird offers, fresh content and ads aimed at people planning ahead"],
        ["November to February", "Peak season, with Christmas to New Year the busiest weeks of the year", "Rate-led ads, fast enquiry handling and fewer discounts; focus on direct and repeat guests"],
        ["March to May", "Shoulder season: warmer weather, school holidays and family trips", "Family and long-weekend packages, pool and stay-in offers"],
        ["June to September", "Monsoon: fewer beach holidays, many beach shacks closed", "Monsoon and staycation offers, workations, reviews, SEO and website work"],
      ],
      note: "Season patterns vary by part of Goa and by property type; we confirm them with each property when we plan.",
    },
    {
      kind: "split",
      eyebrow: "Villas and boutique stays",
      title: "Selling a villa or a small resort against the big names",
      paragraphs: [
        "Private villas and boutique stays in North Goa compete with large resorts that have bigger budgets. They win on the things a guest can see and ask about: the pool, the rooms, the quiet, the host and how quickly someone replies.",
        "For properties like Aroha Palms we combine a fast website, Instagram content shot at the property, Meta campaigns aimed at travellers from the big metros and WhatsApp follow-up, with OTA listings kept up to date alongside.",
      ],
      bullets: [
        "Content that shows the whole stay, not just the pool",
        "Campaigns for groups, families and couples, each with its own offer",
        "Clear rates and availability on WhatsApp before the guest asks twice",
      ],
      image: {
        src: "/our-work/sites/theacaciahotels.webp",
        alt: "Landing page for The Acacia Resort & Spa at Morjim, Goa, built by Fielmente",
      },
    },
  ],
  faqs: [
    {
      q: "Do you work with hotels and resorts in Goa?",
      a: "Yes. We built websites for Aroha Palms in North Goa, SPARV Hospitality and Grandeur de Sanchi in Calangute, and a landing page and Meta campaigns for The Acacia Resort & Spa at Morjim, and we run ongoing marketing for several of them.",
    },
    {
      q: "Do you work with villas and homestays as well as resorts?",
      a: "Yes. Villas and small boutique stays are a large part of the Goa market, and the same approach works: strong content, tracked campaigns, well-kept OTA listings and fast replies on WhatsApp.",
    },
    {
      q: "Should we advertise during the monsoon?",
      a: "Usually with a lower budget and a different offer. Monsoon packages, staycations and long stays can fill quieter weeks, and the months before October are the right time for website, SEO and content work.",
    },
    {
      q: "Can you reduce our dependence on OTAs?",
      a: "We keep your OTA listings strong, because they bring guests you would not otherwise reach, and then win more direct bookings from Instagram, Google, repeat guests and WhatsApp enquiries.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on the services you need and your ad budget. After the free audit we send a written proposal with every cost listed, including ad spend, before you commit.",
    },
    {
      q: "Will we own our accounts?",
      a: "Yes. Your ad accounts, Instagram, Google Business Profile, website and OTA logins stay in your name. We are added as users.",
    },
  ],
  related: [
    "luxury-resort-marketing-agency",
    "boutique-hotel-marketing-agency",
    "hotel-direct-booking-marketing-agency",
    "hospitality-meta-ads-agency",
  ],
  extraLinks: [
    { title: "Resort marketing", body: "Our resort marketing services across India.", href: "/industries-we-serve/resort-marketing-agency/" },
    { title: "Homestay and villa marketing", body: "Marketing for villas, homestays and small stays.", href: "/industries-we-serve/homestay-villa-marketing-agency/" },
    { title: "Our work", body: "Websites, social media and campaigns we have built.", href: "/our-work/" },
    { title: "Case studies", body: "Before-and-after figures from the properties we market.", href: "/case-study/" },
  ],
  cta: {
    title: "Market your Goa property before the season starts",
    body: "Book a free audit. You'll get a written plan for the months ahead, whether you start with one service or all of them.",
  },
  sources: [],
};

export default page;

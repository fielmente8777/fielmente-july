import { AgencyPageData } from "@/@types/@agencyPageType";

const page: AgencyPageData = {
  slug: "google-hotel-ads-agency",
  crumbs: [{ label: "Services", href: "/hospitality-marketing-services/" }],
  keyword: "Google Hotel Ads Management",
  secondaryKeywords: ["Google Hotel Ads agency", "hotel campaigns Google Ads", "Performance Max for travel goals", "hotel metasearch Google", "Google hotel price ads"],
  group: "ads",
  navLabel: "Google Hotel Ads",
  cardLine: "Your direct rate in Google's hotel price results, bid for profit and tracked to bookings",
  areaServed: "Worldwide",
  meta: {
    title: "Google Hotel Ads Management Agency | Fielmente",
    description:
      "Google Hotel Ads for independent hotels and resorts: price feed checks, hotel campaigns, Target ROAS bidding and booking tracking.",
  },
  hero: {
    eyebrow: "Google Hotel Ads management",
    h1: "Google Hotel Ads that put your direct rate beside the OTAs",
    lede: "When a guest checks prices for your hotel on Google Search or Maps, hotel ads show who sells the room and at what price[[GH2]]. We set up and run Google Hotel Ads so your own website wins that comparison, with bids set for profit and every booking tracked from your booking engine.",
    chips: [
      "Google Partner, founded by a hotelier in 2020",
      "Hotel Center, price feed and campaigns handled by one team",
      "Enquiry tracking behind 54,900+ Google Ads leads since 2023",
    ],
  },
  form: {
    title: "Get a free Google Hotel Ads review",
    body: "Send your hotel's name and booking engine, and read-only access to Google Ads and Hotel Center if you have them. We'll check your price feed, free booking links, campaigns and tracking, and send a written plan.",
    defaultCountryCode: "+91",
    needs: [
      "Start Google Hotel Ads",
      "Fix hotel campaigns that don't pay back",
      "Hotel Center and price feed",
      "Free booking links",
      "Performance Max for travel goals",
      "Booking engine tracking",
      "Everything",
    ],
  },
  logos: "hotels",
  context: {
    eyebrow: "How Google Hotel Ads work",
    title: "The price comparison guests see before they book",
    intro: [
      "Hotel ads appear alongside hotel search results on Google Search and Maps, showing a booking site, its price for the guest's dates and a link to book[[GH2]]. To take part, a hotel sends its rooms, rates and availability to Google through a price feed, almost always via an integration partner such as its booking engine or channel manager, and needs a landing page where guests can book[[GH2]][[GH3]].",
      "The bidding has changed. Google retired commission-based bidding for hotel ads, which stopped serving on existing campaigns in late 2024, and now recommends Target ROAS, with Enhanced CPC and Performance Max for travel goals as the other options[[GH1]]. Next to the paid ads, Google shows free booking links, which cost nothing and are ranked by usefulness, including price accuracy, rather than by bids[[GL12]].",
    ],
    stats: [
      { value: "53%", label: "of travellers in 10 markets, India included, regularly use Google Search for travel", source: "GL13" },
      { value: "Free", label: "clicks on Google's free booking links, which no one can pay to rank higher in", source: "GL12" },
      { value: "Target ROAS", label: "Google's recommended bid strategy since commission bidding was retired", source: "GH1" },
      { value: "15–30%", label: "typical OTA commission on each booking's value", source: "GL11" },
    ],
    image: {
      src: "/agency/international-hotel.jpg",
      alt: "Guests arriving at a hotel lobby",
    },
    points: [
      {
        title: "Your rate has to be right, every time",
        body: "Google checks that the price in your ad matches the price on your booking page, and price accuracy also affects how free booking links rank[[GL12]]. Feed errors, taxes added late or rooms that sell out cost you clicks. We check accuracy before we touch bids.",
      },
      {
        title: "Bid for profit, not for position",
        body: "With commission bidding gone, hotel ads are bought per click and steered by value targets such as Target ROAS[[GH1]]. We set targets from your booking value and the OTA commission you'd otherwise pay, so a direct booking from Google always costs less than the OTA alternative.",
      },
      {
        title: "Booking engine tracking makes or breaks it",
        body: "Smart bidding learns from the bookings it can see. If your booking engine doesn't pass confirmed bookings and their value back to Google Ads, the campaign optimises blind. We set that up first.",
      },
    ],
  },
  comparison: {
    title: "What changes when we run your Google Hotel Ads",
    without: [
      "OTAs shown with your rooms in Google's price box while your own site is missing",
      "Price feed errors that quietly hide your rate or get it disapproved",
      "Bids left on old settings after commission bidding was retired",
      "No booking value coming back from your booking engine",
    ],
    withList: [
      "Your direct rate and free booking link live on Search and Maps",
      "Price accuracy checked and fixed with your booking engine or channel manager",
      "Target ROAS or Performance Max for travel goals, set from your margins",
      "Confirmed bookings and revenue tracked back to each campaign",
    ],
  },
  services: {
    title: "What we manage for Google Hotel Ads",
    lede: "From the feed to the report, with links to the pages that cover each part in more depth.",
    items: [
      { icon: "badge", title: "Hotel Center set-up", body: "Your Hotel Center account, property details and connection to your integration partner. Full detail on our Hotel Center page.", href: "/google-hotel-center/" },
      { icon: "refresh", title: "Price feed and accuracy", body: "Rates, taxes and availability checked against your booking page, with errors fixed at the source.", href: "/products/hotel-booking-engine/" },
      { icon: "search", title: "Hotel campaigns", body: "Hotel ads by property, length of stay, device and market, bid on Target ROAS or Enhanced CPC.", href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/" },
      { icon: "layers", title: "Performance Max for travel goals", body: "One campaign across Google's channels for hotels linked through Hotel Center, with property-level asset groups.", href: "/hotel-performance-marketing-agency/" },
      { icon: "link", title: "Free booking links", body: "Your direct rate in the free listings beside the ads, which cost nothing per click.", href: "/google-hotel-center/" },
      { icon: "target", title: "Conversion tracking", body: "Confirmed bookings and revenue from your booking engine passed back to Google Ads, deduplicated with calls and WhatsApp.", href: "/products/hotel-insights-analytics/" },
    ],
  },
  proof: {
    title: "Google Ads results for Indian hotels and resorts",
    lede: "These Google Ads accounts show how we work: track real enquiries and bookings, fix the page, then put budget behind what converts.",
    caseStudies: ["ebc-mussoorie-google-ads", "hotel-green-castle-google-ads", "naturoville-google-ads"],
    testimonials: ["atinder-bajwa", "donald-wingell"],
    honestNote:
      "Most of our published results are Search and Performance Max campaigns. Hotel Ads results depend heavily on your booking engine's price feed and rate parity, which we check before promising anything.",
  },
  process: {
    title: "How we set up and run Google Hotel Ads",
    lede: "Feed and tracking first, then campaigns, then monthly decisions on real bookings.",
    steps: [
      { when: "Week 1", title: "Feed and account check", body: "Hotel Center, your integration partner, price accuracy, landing pages and whether confirmed bookings reach Google Ads." },
      { when: "Weeks 1–3", title: "Fix and connect", body: "Price and tax errors fixed with your booking engine or channel manager, free booking links switched on, conversion value tracking set up." },
      { when: "Weeks 3–4", title: "Launch campaigns", body: "Hotel campaigns or Performance Max for travel goals, with targets set from your booking value and OTA commission." },
      { when: "Every month", title: "Report and adjust", body: "Bookings, revenue, cost per booking and return on ad spend, with bids moved by market, device and length of stay." },
    ],
  },
  blocks: [
    {
      kind: "table",
      eyebrow: "Bidding options",
      title: "How hotel ads are bought now",
      lede: "Commission bidding (pay per stay or per conversion) has gone. These are the options Google lists for hotel campaigns today.",
      columns: ["Option", "How it works", "When we use it"],
      rows: [
        ["Target ROAS", "Google sets each bid to reach the return on ad spend you choose. It's Google's recommended strategy for hotel ads[[GH1]].", "Once your booking engine passes confirmed booking values back to Google Ads."],
        ["Enhanced CPC", "You set click bids and Google adjusts them up or down for clicks likely to convert[[GH1]].", "For new accounts and properties with few bookings, while conversion data builds up."],
        ["Performance Max for travel goals", "One campaign across Google's ad inventory, linked to Hotel Center, with asset groups for each property[[GH4]].", "For hotels that also want reach beyond the price box, with strong photos and offers."],
        ["Free booking links", "Unpaid links beside the ads, ranked by usefulness and price accuracy, not by bids[[GL12]].", "Always. They need a live price feed and a working landing page, but no budget."],
      ],
      note: "Performance Max for travel goals needs a Google Ads account linked to Hotel Center and suits accounts with up to 100 hotels[[GH4]].",
    },
    {
      kind: "cards",
      eyebrow: "Requirements",
      title: "What a hotel needs before Google Hotel Ads can run",
      items: [
        { icon: "pin", title: "A complete Business Profile", body: "Your hotel appears on Search and Maps once the profile is complete. Prices and booking links come on top of it[[GH3]]." },
        { icon: "badge", title: "A Hotel Center account", body: "Applied for in your name and reviewed by Google, or managed through your connectivity partner[[GH3]]." },
        { icon: "workflow", title: "An integration partner", body: "A booking engine, channel manager, CRS or PMS connected to Google, which sends your rates and availability[[GH3]]." },
        { icon: "list", title: "A hotel list and price feed", body: "Property names, addresses and attributes, plus prices for guests' itineraries[[GH2]]." },
        { icon: "devices", title: "A bookable landing page", body: "A page where guests can book online at the price shown in the ad[[GH2]]." },
        { icon: "target", title: "Conversion tracking", body: "Booking confirmations and values passed back to Google Ads, so bidding learns from real bookings." },
      ],
    },
    {
      kind: "split",
      eyebrow: "AI Mode",
      title: "Hotel prices are moving into Google's AI answers too",
      paragraphs: [
        "Google has started letting travellers in the US compare and book hotels inside AI Mode. The launch partners are large chains and OTAs, including Marriott, Hilton, IHG, Booking.com and Expedia[[GL9]], and AI answers increasingly show prices and booking options next to the text.",
        "For an independent hotel, the practical step today is the same as for hotel ads: a reliable price feed, accurate rates, a complete Business Profile and a booking page that works on a phone. Properties that get this right are ready for each new surface Google adds.",
      ],
      bullets: [
        "Accurate rates and availability through your integration partner",
        "A complete Google Business Profile with current photos and amenities",
        "Free booking links switched on",
        "A booking engine that converts well on mobile",
      ],
      image: { src: "/agency/hotel-guest-tablet.jpg", alt: "Guest comparing hotel prices on a tablet" },
      reverse: true,
    },
  ],
  faqs: [
    {
      q: "What are Google Hotel Ads?",
      a: "Ads that show a booking site, its room price for the guest's dates and a link to book, alongside hotel results on Google Search and Maps. Hotels supply prices through a feed, usually via their booking engine or channel manager, and bid for the ad placements.",
    },
    {
      q: "How is this different from your hotel Google Ads service?",
      a: "Hotel Google Ads covers every Google campaign for a hotel, mainly Search and Performance Max for searches about your destination and your name. Google Hotel Ads is the price-comparison product that needs a price feed and Hotel Center. Most hotels benefit from both, and we run them as one account.",
    },
    {
      q: "Can we still pay per stay or per booking?",
      a: "No. Google retired the commission-based bid strategies for hotel ads, and campaigns using them stopped serving in late 2024. Hotel ads are now bought per click, usually steered by Target ROAS.",
    },
    {
      q: "Do we need a connectivity partner?",
      a: "Almost always. Google's starter guide for hotel owners says you share rates through a connectivity partner such as a booking engine, channel manager, CRS or PMS. If yours isn't connected to Google, we'll help you choose one that is.",
    },
    {
      q: "What are free booking links?",
      a: "Unpaid links that show your direct rate beside the hotel ads. Clicks cost nothing, and Google ranks them on usefulness, including price accuracy, not on bids or whether you advertise.",
    },
    {
      q: "What budget do Google Hotel Ads need?",
      a: "It depends on your room count, rates and the demand in your destination. We start from the bookings you want from Google and the cost per booking you can afford against OTA commission, then set a monthly budget that matches.",
    },
    {
      q: "Do you also manage Hotel Center?",
      a: "Yes. We set up and look after Hotel Center, including the property list, the connection to your integration partner, price accuracy and free booking links. Our Google Hotel Center page explains it step by step.",
    },
  ],
  related: [
    "google-hotel-center",
    "industries-we-serve/hotel-marketing-agency/hotel-google-ads",
    "hotel-metasearch-marketing-agency",
    "hotel-direct-booking-marketing-agency",
  ],
  extraLinks: [
    { title: "Hotel booking engine", body: "A commission-free booking engine for your own website.", href: "/products/hotel-booking-engine/" },
    { title: "ChatGPT Ads vs hotel metasearch", body: "Where each fits in a hotel's paid media plan.", href: "/chatgpt-ads-vs-hotel-metasearch-advertising/" },
  ],
  cta: {
    title: "Ready to win Google's price comparison?",
    body: "Get a free review of your price feed, free booking links, hotel campaigns and booking tracking, with a written plan.",
  },
  sources: [
    { id: "GH1", label: "Google Ads Help, Commission-based bid strategies in hotel ads to sunset", url: "https://support.google.com/google-ads/answer/14280291?hl=en" },
    { id: "GH2", label: "Google Hotel Center Help, How to get started with Hotel campaigns", url: "https://support.google.com/hotelprices/answer/9238463?hl=en" },
    { id: "GH3", label: "Google Hotel Center Help, Hotel owners: starter guide", url: "https://support.google.com/hotelprices/answer/11946931?hl=en" },
    { id: "GH4", label: "Google Ads Help, Get started with Performance Max for travel goals campaigns", url: "https://support.google.com/google-ads/answer/13189989?hl=en" },
    { id: "GL12", label: "Google Hotel Center Help, About hotel free booking links", url: "https://support.google.com/hotelprices/answer/10472393?hl=en" },
    { id: "GL13", label: "Think with Google (Ipsos for Google, 10 countries), AI and travel search trends, Jul 2025", url: "https://business.google.com/us/think/search-and-video/ai-travel-marketing-search-trends/" },
    { id: "GL11", label: "EHL Insights, Hotel OTAs: their business model explained, May 2026", url: "https://insights.ehl.edu/hotel-otas" },
    { id: "GL9", label: "Skift, Google's agentic hotel booking tool comes to AI Mode, Aug 2026", url: "https://skift.com/2026/08/27/googles-agentic-hotel-booking-tool-comes-to-ai-mode/" },
  ],
};

export default page;

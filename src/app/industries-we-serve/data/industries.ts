// Industries (Phase 3): hub, 5 industry pages and their service pages.
// Kept on the old design: the cloud-kitchen-marketing-agency hub and its Google Ads / social media pages.
// hotel-google-ads is an agency landing page. hotel-social-media, hotel-seo, restaurant-social-media and
// restaurant-google-ads use this template at their original URLs (see `paths` and `overrides`).

import type { IndustryProfile } from "@/@types/@industryTemplateType";

export const industries: IndustryProfile[] = [
  /* ── Hotels ───────────────────────────────────────────────── */
  {
    slug: "hotel-marketing-agency",
    prefix: "hotel",
    name: "Hotel",
    label: "Hotel Marketing",
    noun: "hotel",
    plural: "hotels",
    guests: "guests",
    audience: "business travellers, families and couples",
    bookAction: "book a room",
    goal: "direct bookings",
    channels: "Booking.com, MakeMyTrip, Agoda and Goibibo",
    reviewSites: "Google, TripAdvisor and the OTAs",
    searches: ["hotels near me", "hotel in Mussoorie with mountain view", "business hotel near Cyber City"],
    peaks: "long weekends, wedding season and school holidays",
    showcase: "rooms, views, dining and service",
    icon: "hotel",
    heroImage: "/industry/hotel-1.png",
    heroAlt: "Hotel manager welcoming guests",
    secondImage: "/industry/hotel-2.png",
    secondAlt: "Guest checking in at a hotel front desk",
    heroTitle: "Hotel marketing that fills rooms with direct bookings",
    heroLede:
      "From your Google listing to your booking engine, we run the marketing and technology that turn searches into direct bookings — so you depend less on OTA commissions.",
    cardLine: "More direct bookings, less OTA dependence",
    without: [
      "Most bookings arrive through OTAs, at 15–25% commission",
      "Guests find you on Google, then book somewhere else",
      "Marketing, website and booking engine run by different vendors",
    ],
    withList: [
      "A clear plan to shift share from OTAs to direct",
      "Search, social and ads that send guests to your own booking engine",
      "One team for marketing, website and hotel technology",
    ],
    caseStudies: ["hotel-green-castle-google-ads", "ebc-mussoorie-google-ads", "naturoville-google-ads"],
    products: ["hotel-booking-engine", "hotel-channel-manager", "hotel-ai-reservation-desk"],
    services: [
      "social-media-management", "local-seo", "website-seo", "ai-search-optimization", "preopening-marketing",
      "ota-management", "ota-listing", "revenue-management", "website-development", "sales-marketing-automation",
      "content-creation", "branding", "performance-marketing", "sales-marketing-consultation", "pr-communication",
      "influencer-marketing", "social-media-ai-automation", "online-reputation-management",
    ],
    // Older URLs kept for these services (they rank and are linked from elsewhere).
    paths: {
      "social-media-management": "hotel-marketing-agency/hotel-social-media",
      "website-seo": "hotel-marketing-agency/hotel-seo",
    },
    overrides: {
      "social-media-management": {
        metaTitle: "Hotel Social Media Marketing Agency | Fielmente",
        metaDescription:
          "Hotel social media marketing that drives direct bookings: Instagram and Facebook strategy, reels, shoots, ads and DMs handled by hospitality specialists.",
        heroTitle: "Hotel social media marketing that fills rooms, not just feeds",
        heroLede:
          "Instagram and Facebook run by a team that only works with hotels: a content plan built around your rooms, food and experiences, reels that get saved and shared, and DMs answered fast enough to turn into bookings.",
        intro: [
          "Guests now check a hotel's Instagram before they book, often straight after finding it on Google or an OTA. A feed that is out of date, or full of stock photos, quietly sends them back to the OTA listing where you pay commission.",
          "We plan a monthly calendar around what makes your property worth the trip: rooms and views, the restaurant, events, local experiences and seasonal offers. We shoot or brief the content, write the captions, run the ads that put it in front of travellers planning a stay, and hand every booking enquiry from DMs and comments to your reservations team the same day.",
          "Reporting covers what matters to a hotel: profile visits, website clicks, enquiries and bookings from social, not just likes.",
        ],
        faqs: [
          { q: "Which platforms do you manage for hotels?", a: "Mainly Instagram and Facebook, with YouTube Shorts and LinkedIn where they suit the property, for example business hotels and wedding venues." },
          { q: "Do you shoot photos and reels at our hotel?", a: "Yes. We plan shoots around rooms, food, the property and guest experiences, and can also work from content your team captures on phone using our shot lists." },
          { q: "How many posts and reels do we get each month?", a: "It depends on the plan. Most hotels start with a mix of 12 to 20 posts, reels and stories a month, plus ads to promote the best performers." },
          { q: "Will you reply to DMs and comments?", a: "We monitor and reply to routine questions, and pass booking enquiries to your team straight away, or into the Eazotel WhatsApp and CRM tools if you use them." },
          { q: "How do you show that social media brings bookings?", a: "We track link clicks, enquiries and booking-engine visits from social with UTM links and report them every month alongside reach and engagement." },
        ],
      },
      "website-seo": {
        metaTitle: "Hotel SEO Agency India | Hotel SEO Services | Fielmente",
        metaDescription:
          "Hotel SEO services that grow direct bookings: technical fixes, local and destination keywords, content, schema and reporting, from a hospitality-only SEO team.",
        heroTitle: "Hotel SEO that ranks your own website above the OTAs",
        heroLede:
          "Technical SEO, destination keywords and content built for hotels, so travellers searching for a stay in your area find your website and book direct.",
        intro: [
          "For most searches like \u201chotels in Nainital\u201d or \u201cboutique hotel near Jim Corbett\u201d, the first results are OTAs and travel portals. Hotel SEO is about winning the searches you can win: your destination plus the reasons people choose you, your brand name, and the questions travellers ask while planning.",
          "We start with the technical basics that hotel websites often get wrong: slow booking pages, duplicate room pages, missing hotel schema and pages Google cannot index. Then we build pages and guides around the searches that lead to bookings, and connect your Google Business Profile, reviews and website so they support each other.",
          "You get a monthly report showing rankings for your target searches, organic traffic, and the enquiries and bookings it produced.",
        ],
        faqs: [
          { q: "Can a hotel website really outrank OTAs?", a: "For broad searches like \u201chotels in Goa\u201d, rarely. For specific searches (your name, your area plus a feature, packages, local guides) and in Google Maps, a well-optimised hotel website can and does rank above OTAs." },
          { q: "How long does hotel SEO take?", a: "Technical fixes and Google Business Profile changes can show in weeks. New pages and content usually take three to six months to rank well." },
          { q: "Do you add hotel schema markup?", a: "Yes. We add Hotel or LodgingBusiness schema, room and offer details, FAQ and breadcrumb markup where it fits, and check it in Google's tools." },
          { q: "Is SEO also about AI search like ChatGPT and Google AI Overviews?", a: "Yes. Clear, factual pages, consistent business details and good reviews help your hotel get cited in AI answers too. We cover this as part of the plan." },
          { q: "Do we need a new website for SEO?", a: "Not always. We fix what we can on your current site. If the platform is too slow or limited, we can rebuild it on a fast setup with the Eazotel booking engine built in." },
        ],
      },
    },
    faqs: [
      { q: "What kind of hotels do you work with?", a: "Independent and boutique hotels, business hotels, heritage properties and small groups across India, from hill stations to city centres." },
      { q: "Can you help us reduce OTA commissions?", a: "Yes. We keep your OTA listings strong while building the search, social, ads and booking-engine setup that grows direct bookings over time." },
      { q: "Do we have to use all your services?", a: "No. Most hotels start with one or two — often Google Ads, local SEO or the booking engine — and add more once they see results." },
      { q: "How do you report results?", a: "Monthly, in plain language: enquiries, direct bookings, cost per enquiry and what we'll do next month." },
    ],
    meta: {
      title: "Best Hotel Marketing Company in India - Fielmente", // same as the current live title
      description:
        "Hotel marketing agency for Indian hotels: Google Ads, SEO, social media, OTA management, revenue management and booking engine — built to grow direct bookings.",
    },
  },

  /* ── Restaurants ──────────────────────────────────────────── */
  {
    slug: "restaurant-marketing-agency",
    prefix: "restaurant",
    name: "Restaurant",
    label: "Restaurant Marketing",
    noun: "restaurant",
    plural: "restaurants",
    guests: "diners",
    audience: "families, couples, office crowds and food lovers",
    bookAction: "reserve a table",
    goal: "full tables and direct reservations",
    channels: "Zomato, Swiggy, EazyDiner and Google",
    reviewSites: "Google, Zomato and TripAdvisor",
    searches: ["best restaurants near me", "rooftop restaurant in Gurugram", "family restaurant open now"],
    peaks: "weekends, festivals, match nights and the wedding season",
    showcase: "dishes, interiors, chefs and events",
    icon: "utensils",
    heroImage: "/industry/restaurant-1.png",
    heroAlt: "Restaurant owner in a busy dining room",
    secondImage: "/industry/restaurant-2.png",
    secondAlt: "Friends sharing a meal at a restaurant",
    heroTitle: "Restaurant marketing that fills tables every night",
    heroLede:
      "Be the restaurant people find, crave and book. We run your Google presence, social media, ads and reservations so weeknights fill up — not just Saturdays.",
    cardLine: "Fuller tables on weeknights, not just weekends",
    without: [
      "Busy weekends, empty weeknights",
      "Discovery left to Zomato and Swiggy",
      "Instagram posts that get likes but not reservations",
    ],
    withList: [
      "Campaigns planned around slow days and seasonal menus",
      "A Google and Instagram presence that sends people to book",
      "Reservations captured directly on WhatsApp and Instagram",
    ],
    caseStudies: [],
    products: ["hotel-conversational-tool", "hotel-whatsapp-marketing", "hotel-social-media-management-tool"],
    services: [
      "social-media-management", "local-seo", "ai-search-optimization", "website-development",
      "social-media-reservation-automation", "content-creation", "branding", "performance-marketing",
      "sales-marketing-consultation", "pr-communication", "influencer-marketing", "google-ads",
    ],
    // Older URLs kept for these services (they rank and are linked from elsewhere).
    paths: {
      "social-media-management": "restaurant-marketing-agency/restaurant-social-media",
      "google-ads": "restaurant-marketing-agency/restaurant-google-ads",
    },
    overrides: {
      "social-media-management": {
        metaTitle: "Restaurant Social Media Marketing Agency | Fielmente",
        metaDescription:
          "Restaurant social media marketing that fills tables: Instagram reels, food shoots, influencer collaborations, ads and DM bookings, run by a hospitality team.",
        heroTitle: "Restaurant social media marketing that turns scrolls into reservations",
        heroLede:
          "Reels people save, food shots that make them hungry, and DMs answered fast enough to book a table. Instagram and Facebook run by a team that only works with restaurants, caf\u00e9s and bars.",
        intro: [
          "For most diners, Instagram is now the menu, the reviews and the booking line in one place. They find a restaurant on reels or Google, check the grid, and send a DM to ask about a table or an event.",
          "We plan content around your menu calendar and the moments that bring people in: new dishes, chef specials, live music, match nights, festivals and weekday offers for the quiet nights. We shoot food and ambience, write captions in your voice, run local ads around your outlet, and collaborate with food creators who actually reach your neighbourhood.",
          "Every month you see reach and engagement, and also profile visits, calls, direction requests and reservations that came from social.",
        ],
        faqs: [
          { q: "Do you shoot food photos and reels?", a: "Yes. We plan shoots around your menu, interiors and events, and can work with content your team captures using our shot lists." },
          { q: "Can social media fill our weeknights?", a: "That is usually where it helps most: weekday offers, events and local ads promoted to people near your outlet when they are deciding where to eat." },
          { q: "Do you work with food influencers?", a: "Yes. We shortlist creators whose followers are in your area, agree the brief and deliverables, and track the visits and bookings their posts bring." },
          { q: "Will you handle DMs and comments?", a: "We reply to routine questions and pass reservation requests to your team straight away, or into WhatsApp automation if you use it." },
          { q: "Do you manage Zomato and Swiggy too?", a: "Our social media service covers Instagram and Facebook. Listings, offers and ads on aggregators are part of our restaurant performance marketing service." },
        ],
      },
      "google-ads": {
        metaTitle: "Restaurant Google Ads Agency | Fielmente",
        metaDescription:
          "Restaurant Google Ads that bring diners and orders: Search and Maps campaigns near your outlet, call and direction tracking, and weekly optimisation.",
        heroTitle: "Restaurant Google Ads that bring diners through the door",
        heroLede:
          "Show up on Google and Maps when people nearby search for a place to eat, then send them to call, get directions, order or book a table. Every click is tracked to a visit or an enquiry.",
        intro: [
          "Searches like \u201crestaurants near me\u201d and \u201cbest North Indian food in Gurugram\u201d happen when people are about to decide. Google Ads puts your restaurant at the top of those results and on Maps, with your rating, distance and a button to call or get directions.",
          "We build campaigns around your area, cuisine and occasions such as family dinners, parties and corporate lunches. Budgets follow your busy and quiet hours, locations are tight around your outlet, and wasted searches are blocked every week.",
          "Tracking comes first: calls, direction requests, reservation clicks and online orders are each counted, so you see exactly what the spend brought in.",
        ],
        faqs: [
          { q: "Does Google Ads work for a single restaurant?", a: "Yes, when it is tightly targeted. Local Search and Maps ads around your outlet, at the hours people decide where to eat, work well for single outlets." },
          { q: "What budget does a restaurant need?", a: "Many restaurants start with a modest daily budget for a month to learn which searches convert, then increase spend only on what brings visits and orders." },
          { q: "Can you track visits from ads?", a: "We track calls, direction requests, reservation and order clicks. Where Google has enough data, store visits can be reported too." },
          { q: "Do you also run ads for party bookings and events?", a: "Yes. Separate campaigns for private dining, parties and corporate bookings usually perform well because the enquiries are larger." },
          { q: "Who owns the Google Ads account?", a: "You do. We work inside your account and everything we build stays with you." },
        ],
      },
    },
    faqs: [
      { q: "Do you work with single-outlet restaurants?", a: "Yes. We work with single outlets, cafés, bars and multi-outlet brands." },
      { q: "Can you help us rely less on delivery apps?", a: "We keep your aggregator listings strong while building direct channels — Google, Instagram, WhatsApp and your own website." },
      { q: "Do you shoot food photos and reels?", a: "Yes. Content creation covers food photography, reels and short videos, planned around your menu and events." },
      { q: "How soon will we see results?", a: "Google profile and ads changes often show within weeks; social media and SEO build over two to three months." },
    ],
    meta: {
      title: "Restaurant Marketing Agency in India | Fielmente", // live title, typo fixed
      description:
        "Restaurant marketing agency: Google, Instagram, reels, ads, influencer marketing and reservation automation to fill tables every night of the week.",
    },
  },

  /* ── Resorts ──────────────────────────────────────────────── */
  {
    slug: "resort-marketing-agency",
    prefix: "resort",
    name: "Resort",
    label: "Resort Marketing",
    noun: "resort",
    plural: "resorts",
    guests: "guests",
    audience: "families, couples, wellness seekers and weekend travellers",
    bookAction: "book a stay",
    goal: "direct bookings all year round",
    channels: "Booking.com, MakeMyTrip, Agoda and Airbnb",
    reviewSites: "Google, TripAdvisor and the OTAs",
    searches: ["resorts near Delhi for weekend", "wellness resort in Rishikesh", "resort in Jim Corbett with pool"],
    peaks: "weekends, summer holidays, winter breaks and the wedding season",
    showcase: "villas, pools, spa, food and experiences",
    icon: "palm",
    heroImage: "/home/im7.webp",
    heroAlt: "Resort infinity pool lined with palm trees at sunset",
    secondImage: "/home/im3.webp",
    secondAlt: "Glamping dome at a nature resort",
    heroTitle: "Resort marketing that keeps you full beyond the peak season",
    heroLede:
      "Most resorts are full on long weekends and quiet in between. We build the demand, packages and direct-booking engine that keep occupancy steady all year.",
    cardLine: "Steady occupancy beyond long weekends",
    without: [
      "Full on long weekends, empty mid-week and off-season",
      "Experiences and packages buried on the website",
      "High OTA commissions on bookings you could win directly",
    ],
    withList: [
      "Campaigns built around packages, experiences and off-peak demand",
      "Search-first ads that bring enquiries at a lower cost",
      "A booking engine and WhatsApp flow that close enquiries directly",
    ],
    caseStudies: ["naturoville-google-ads", "naad-wellness-google-ads", "the-rudraksh-google-ads"],
    products: ["hotel-booking-engine", "hotel-ai-concierge", "hotel-channel-manager"],
    services: [
      "social-media-management", "local-seo", "website-seo", "ai-search-optimization", "preopening-marketing",
      "ota-management", "website-development", "sales-marketing-automation", "content-creation", "branding",
      "performance-marketing", "sales-marketing-consultation", "pr-communication", "influencer-marketing",
    ],
    faqs: [
      { q: "Do you have experience with wellness and adventure resorts?", a: "Yes. Our case studies include Ayurveda and wellness resorts near Rishikesh and Delhi, and Himalayan retreats in Uttarakhand." },
      { q: "Can you help fill mid-week and off-season dates?", a: "That's where resort marketing earns its keep: packages, retreats and campaigns aimed at people who can travel mid-week." },
      { q: "Do you handle wedding and event marketing?", a: "Yes. We build separate pages and campaigns for destination weddings and events, with enquiries routed to your sales team." },
      { q: "Do you work with resorts outside Uttarakhand?", a: "Yes. We work with resorts across India, and campaigns can target travellers from any city." }, // REVIEW: name regions you want to highlight
    ],
    meta: {
      title: "Resort Marketing Agency in India | Fielmente",
      description:
        "Resort marketing agency: Google Ads, SEO, social media, packages, OTA management and booking engine to keep your resort full beyond the peak season.",
    },
  },

  /* ── Homestays & Villas ───────────────────────────────────── */
  {
    slug: "homestay-villa-marketing-agency",
    prefix: "homestay-villa",
    name: "Homestay & Villa",
    label: "Homestay & Villa Marketing",
    noun: "homestay or villa",
    plural: "homestays and villas",
    guests: "guests",
    audience: "families, friend groups, remote workers and couples",
    bookAction: "book your stay",
    goal: "direct bookings without the platform fees",
    channels: "Airbnb, Booking.com, MakeMyTrip and Agoda",
    reviewSites: "Google, Airbnb and Booking.com",
    searches: ["homestay in Nainital", "private pool villa in Goa", "cottage in Manali for a family"],
    peaks: "long weekends, summer holidays and year-end breaks",
    showcase: "the space, the views, the host and the neighbourhood",
    icon: "house",
    heroImage: "/home/im4.webp",
    heroAlt: "Private holiday villa with a swimming pool",
    secondImage: "/home/im5.webp",
    secondAlt: "Cosy cottage homestay with a garden path",
    heroTitle: "Homestay and villa marketing that brings guests directly to you",
    heroLede:
      "Airbnb and the OTAs are a great start — but every booking costs a fee and the guest belongs to the platform. We help you build a brand guests find, trust and book directly.",
    cardLine: "Your own brand and direct bookings, not just a listing",
    without: [
      "Every booking comes through a platform, with fees on both sides",
      "No website — or one that doesn't take bookings",
      "Repeat guests book through the app again",
    ],
    withList: [
      "A website and booking engine that take direct bookings",
      "Google, Instagram and ads that build your own brand",
      "Past guests invited back directly on WhatsApp and email",
    ],
    caseStudies: ["the-rudraksh-google-ads"],
    products: ["hotel-booking-engine", "hotel-channel-manager", "hotel-whatsapp-marketing"],
    services: [
      "social-media-management", "local-seo", "website-seo", "ai-search-optimization", "preopening-marketing",
      "website-development", "sales-marketing-automation", "content-creation", "branding", "performance-marketing",
      "sales-marketing-consultation", "influencer-marketing",
    ],
    faqs: [
      { q: "Is this worth it for a single homestay or villa?", a: "Yes. Small properties often gain the most from direct bookings, because platform fees take a big share of every stay." },
      { q: "Will we have to leave Airbnb?", a: "No. Keep your listings — we help you grow direct bookings alongside them and keep calendars in sync." },
      { q: "Do you manage multiple villas?", a: "Yes. We work with owners and operators of one property up to portfolios of villas and cottages." },
      { q: "Can guests pay online?", a: "Yes. The booking engine takes secure online payments, including deposits." },
    ],
    meta: {
      title: "Homestay & Villa Marketing Agency in India | Fielmente",
      description:
        "Marketing for homestays, villas and cottages: website and booking engine, local SEO, Instagram, ads and guest automation to win bookings without platform fees.",
    },
  },

  /* ── Travel & Tourism ─────────────────────────────────────── */
  {
    slug: "travel-tourism-marketing-agency",
    prefix: "travel",
    name: "Travel & Tourism",
    label: "Travel & Tourism Marketing",
    noun: "travel business",
    plural: "tour operators and travel companies",
    guests: "travellers",
    audience: "families, pilgrims, adventure seekers and corporate groups",
    bookAction: "book a trip",
    goal: "qualified trip enquiries",
    channels: "MakeMyTrip Holidays, Thrillophilia, TripAdvisor and Google",
    reviewSites: "Google, TripAdvisor and Facebook",
    searches: ["Char Dham yatra package", "Kedarnath tour from Delhi", "Ladakh bike trip package"],
    peaks: "summer holidays, yatra season and year-end breaks",
    showcase: "itineraries, destinations, guides and happy travellers",
    icon: "plane",
    heroImage: "/industry/travel-planning.jpg",
    heroAlt: "Family arriving for a trip while a planner works on a laptop",
    secondImage: "/images/Contact.webp",
    secondAlt: "Travel team planning itineraries",
    heroTitle: "Travel marketing that turns searches into booked trips",
    heroLede:
      "Travellers compare dozens of packages before they call. We make sure they find yours, trust it and enquire — then help your team follow up fast enough to win the booking.",
    cardLine: "Qualified trip enquiries, followed up fast",
    without: [
      "Enquiries that price-shop and disappear",
      "Packages that look the same as every competitor's",
      "Leads followed up late, or not at all",
    ],
    withList: [
      "Search and social campaigns aimed at people ready to book",
      "Itinerary pages that show why your trips are different",
      "Automated WhatsApp follow-ups so no enquiry goes cold",
    ],
    caseStudies: [],
    products: ["hotel-conversational-tool", "hotel-crm", "hotel-whatsapp-marketing"],
    services: [
      "social-media-management", "local-seo", "website-seo", "ai-search-optimization", "website-development",
      "sales-marketing-automation", "performance-marketing", "sales-marketing-consultation",
    ],
    faqs: [
      { q: "Do you work with pilgrimage and yatra operators?", a: "Yes. Pilgrimage and yatra packages are a good fit for search campaigns, because travellers search for them by name and season." }, // REVIEW: add a client example if you have one
      { q: "Can you market international packages?", a: "Yes. We run campaigns for domestic and outbound packages, targeted by city and traveller type." },
      { q: "How do you handle the high volume of enquiries?", a: "Leads go into one inbox and CRM, with automated WhatsApp replies and follow-ups so your team can focus on the hottest ones." },
      { q: "Which ad platforms do you use?", a: "Mainly Google Search and Meta (Facebook and Instagram), chosen by where your travellers plan their trips." },
    ],
    meta: {
      title: "Travel & Tourism Marketing Agency in India | Fielmente",
      description:
        "Marketing for tour operators and travel companies: Google Ads, SEO, social media, websites and lead automation to turn searches into booked trips.",
    },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

/** Accommodation businesses: hotel products (booking engine, channel manager…) apply to them. */
export const lodgingIndustries = new Set(["hotel-marketing-agency", "resort-marketing-agency", "homestay-villa-marketing-agency"]);

/** Existing industry page not rebuilt, shown on the hub. */
export const legacyIndustries = [
  {
    slug: "cloud-kitchen-marketing-agency",
    name: "Cloud Kitchen",
    cardLine: "More orders on Zomato, Swiggy and your own channels",
    image: "/industry/cloud-kitchen-1.png",
  },
];

/**
 * Industries used only for individual service pages (their hub page keeps the old design).
 * Cloud Kitchen SEO was rebuilt here after its old page went missing.
 */
export const serviceOnlyIndustries: IndustryProfile[] = [
  {
    slug: "cloud-kitchen-marketing-agency",
    prefix: "cloud-kitchen",
    name: "Cloud Kitchen",
    label: "Cloud Kitchen Marketing",
    noun: "cloud kitchen",
    plural: "cloud kitchens",
    guests: "customers",
    audience: "office-goers, students and families ordering in",
    bookAction: "order",
    goal: "more orders on your own channels as well as the delivery apps",
    channels: "Zomato, Swiggy and Google",
    reviewSites: "Google, Zomato and Swiggy",
    searches: ["cloud kitchen near me", "biryani delivery near me", "healthy meal delivery in Gurugram"],
    peaks: "weekends, match nights, festivals and rainy evenings",
    showcase: "dishes, packaging and the kitchen",
    icon: "utensils",
    heroImage: "/industry/cloud-kitchen-1.png",
    heroAlt: "Cloud kitchen team preparing delivery orders",
    secondImage: "/industry/cloud-kitchen-2.png",
    secondAlt: "Delivery orders packed and ready to dispatch",
    heroTitle: "Cloud kitchen marketing that grows orders",
    heroLede: "More orders on Zomato, Swiggy and your own channels.",
    cardLine: "More orders on Zomato, Swiggy and your own channels",
    without: ["Discovery left entirely to the delivery apps", "No website or Google presence of your own", "Repeat customers you cannot reach directly"],
    withList: ["Your brands found on Google for food searches nearby", "A website and ordering link you own", "Repeat orders driven through your own channels"],
    caseStudies: [],
    products: ["hotel-whatsapp-marketing", "hotel-conversational-tool", "hotel-social-media-management-tool"],
    services: ["website-seo", "google-ads", "social-media-management"],
    paths: { "website-seo": "cloud-kitchen-marketing-agency/cloud-kitchen-seo" },
    // Sister pages that keep the old design.
    existing: {
      "google-ads": "cloud-kitchen-marketing-agency/cloud-kitchen-google-ads",
      "social-media-management": "cloud-kitchen-marketing-agency/cloud-kitchen-social-media",
    },
    overrides: {
      "website-seo": {
        metaTitle: "Cloud Kitchen SEO Services | Fielmente",
        metaDescription:
          "Cloud kitchen SEO that brings orders beyond the apps: Google Business Profile, local food searches, a fast ordering website and content for every brand you run.",
        heroTitle: "Cloud kitchen SEO that brings orders beyond Zomato and Swiggy",
        heroLede:
          "Get each of your food brands found on Google and Maps for the dishes people search nearby, and send them to an ordering link you own, not just to the delivery apps.",
        intro: [
          "Delivery apps decide who sees your brand inside the app, and charge commission on every order. On Google, people search for dishes and cuisines near them, such as \u201cbiryani near me\u201d or \u201chealthy lunch delivery\u201d, and a cloud kitchen that ranks there can win orders and customers it keeps.",
          "We set up and optimise a Google Business Profile for each brand where Google allows it, build fast menu pages around the dishes and areas you deliver to, and keep names, hours, menus and links consistent across Google, the apps and your website.",
          "Reporting covers rankings for your dish and area searches, calls and website visits from Google, and the orders that came through your own link.",
        ],
        faqs: [
          { q: "Can a cloud kitchen rank on Google Maps without a dine-in space?", a: "Yes, if Google's guidelines are followed. Delivery-only businesses can list a service area. We set this up correctly so profiles are not suspended." },
          { q: "We run several brands from one kitchen. Can each rank?", a: "Each brand can have its own website pages and menu content. Google Business Profiles for multiple brands at one address need care, and we follow Google's rules for each." },
          { q: "Do we need our own ordering website?", a: "It helps. A simple, fast ordering page you own lets you keep customer details and avoid commission on repeat orders." },
          { q: "How long does cloud kitchen SEO take?", a: "Google Business Profile changes can show in weeks. Ranking new menu and area pages usually takes two to four months." },
          { q: "Do you also run ads on Zomato and Swiggy?", a: "Yes, as part of our cloud kitchen performance marketing. SEO works alongside it to build orders you do not pay commission on." },
        ],
      },
    },
    faqs: [],
    meta: { title: "Cloud Kitchen Marketing Agency | Fielmente", description: "Cloud kitchen marketing for delivery brands." },
  },
];

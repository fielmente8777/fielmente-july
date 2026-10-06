// Industries (Phase 3): hub, 5 industry pages and their service pages.
// Existing pages kept as they are: cloud-kitchen-marketing-agency and its sub-pages, hotel-google-ads,
// restaurant-google-ads, and the three service pages reused below (hotel-social-media, hotel-seo,
// restaurant-social-media).

import type { IconKey } from "@/components/marketing/icons";
import type { ServiceKey } from "./services";

export interface IndustryProfile {
  slug: string; // industries-we-serve/<slug>/
  prefix: string; // service slug prefix
  name: string; // "Hotel"
  label: string; // "Hotel Marketing"
  noun: string; // "hotel"
  plural: string; // "hotels"
  guests: string; // "guests"
  audience: string;
  bookAction: string;
  goal: string;
  channels: string;
  reviewSites: string;
  searches: string[];
  peaks: string;
  showcase: string;
  icon: IconKey;
  heroImage: string;
  heroAlt: string;
  secondImage: string;
  secondAlt: string;
  heroTitle: string;
  heroLede: string;
  cardLine: string;
  without: string[];
  withList: string[];
  caseStudies: string[];
  products: string[];
  services: ServiceKey[];
  /** Service keys that already have a page — linked instead of rebuilt. A path under
   * /industries-we-serve/ ("hotel-marketing-agency/hotel-seo") or a full path ("/hotel-performance-marketing-agency/"). */
  existing?: Partial<Record<ServiceKey, string>>;
  faqs: { q: string; a: string }[];
  meta: { title: string; description: string };
}

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
    existing: {
      "social-media-management": "hotel-marketing-agency/hotel-social-media",
      "website-seo": "hotel-marketing-agency/hotel-seo",
      // Covered by the agency landing pages, so no separate hotel service page is generated.
      "performance-marketing": "/hotel-performance-marketing-agency/",
      "revenue-management": "/hotel-revenue-marketing-agency/",
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
      "sales-marketing-consultation", "pr-communication", "influencer-marketing",
    ],
    existing: {
      "social-media-management": "restaurant-marketing-agency/restaurant-social-media",
    },
    faqs: [
      { q: "Do you work with single-outlet restaurants?", a: "Yes. We work with single outlets, cafés, bars and multi-outlet brands." },
      { q: "Can you help us rely less on delivery apps?", a: "We keep your aggregator listings strong while building direct channels — Google, Instagram, WhatsApp and your own website." },
      { q: "Do you shoot food photos and reels?", a: "Yes. Content creation covers food photography, reels and short videos, planned around your menu and events." },
      { q: "How soon will we see results?", a: "Google profile and ads changes often show within weeks; social media and SEO build over two to three months." },
    ],
    meta: {
      title: "Restaurant Marketing Agency India | Restaurant Marketing Company", // live title, typo fixed
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

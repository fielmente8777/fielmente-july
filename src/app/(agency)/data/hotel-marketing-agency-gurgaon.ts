import { AgencyPageData } from "@/@types/@agencyPageType";

// Fielmente's home-base page: for owners based in Gurugram (Gurgaon) and anyone searching for an agency
// there. Their properties can be anywhere; the pitch is our office in Sector 65, our services and our products.
// Company facts come from src/utils/agencyData.ts (COMPANY) and products from src/lib/products.ts.
// `localOffice` links this page's structured data to the office (see AgencyPage.tsx).

const page: AgencyPageData = {
  slug: "hotel-marketing-agency-gurgaon",
  crumbs: [{ label: "Hotel marketing", href: "/industries-we-serve/hotel-marketing-agency/" }],
  keyword: "Hotel Marketing Agency Gurgaon",
  secondaryKeywords: [
    "hospitality marketing agency in Gurgaon",
    "digital marketing agency in Gurgaon for hotels and restaurants",
    "restaurant marketing agency Gurgaon",
    "hotel software company Gurgaon",
    "marketing agency Sector 65 Gurugram",
  ],
  group: "location",
  localOffice: true,
  platforms: ["google-ads", "google-maps", "meta", "whatsapp", "makemytrip", "zomato"],
  navLabel: "Hotel marketing agency in Gurgaon",
  cardLine: "Our home base: hospitality marketing and hotel software from one team in Sector 65, Gurugram",
  areaServed: "Gurugram (Gurgaon) and Delhi NCR, India",
  meta: {
    title: "Hotel Marketing Agency in Gurgaon (Gurugram) | Fielmente",
    description:
      "Hospitality marketing agency in Sector 65, Gurugram. Google Ads, SEO, social media, websites and OTAs, plus our own hotel software. Meet us at our office.",
  },
  hero: {
    eyebrow: "Hospitality marketing agency · Sector 65, Gurugram",
    h1: "Hotel marketing agency in Gurgaon, with marketing and hotel software under one roof",
    lede: "Fielmente is a hospitality marketing agency on Golf Course Extension Road, Gurugram. We market hotels, resorts, restaurants and travel companies, and build the software they run on, from booking engines and CRM to WhatsApp and AI tools. If you're in Gurgaon, meet us at our office or yours. Your property can be anywhere.",
    chips: [
      "Office in Sector 65, Golf Course Extension Road",
      "120+ hotel marketing projects since 2020",
      "Google Partner and Meta Business Partner",
    ],
  },
  form: {
    title: "Book a free audit and a meeting in Gurugram",
    body: "Tell us about your business. We'll review your ads, website, Google listing, OTA or delivery-app listings and how enquiries are handled, then walk you through a written plan at our Sector 65 office, at your office or on a call.",
    defaultCountryCode: "+91",
    needs: [
      "Google Ads and Meta ads",
      "SEO and Google Maps",
      "Social media and content",
      "Website or booking engine",
      "OTA, Zomato or Swiggy listings",
      "Software: CRM, WhatsApp, chatbot",
      "Everything",
    ],
  },
  logos: "all",
  context: {
    eyebrow: "Why Fielmente",
    title: "A Gurugram agency built for hospitality",
    intro: [
      "Fielmente was founded in 2020 by Sachin Kapoor, a hotelier with a master's in hospitality from WGSHA Manipal and sales and marketing experience at Marriott and Hyatt. Our team of 15+ hospitality marketers works from Suncity Success Tower on Golf Course Extension Road, Sector 65.",
      "We specialise in hospitality: hotels, resorts, restaurants, cafés, cloud kitchens, homestays, wellness retreats, wedding venues and travel companies. Our clients are across India and in eight other countries, and owners based in Gurgaon and Delhi NCR can meet the team in person.",
    ],
    stats: [
      { value: "2020", label: "founded by a hotelier" },
      { value: "15+", label: "hospitality marketers on the team" },
      { value: "120+", label: "hotel marketing projects" },
      { value: "21", label: "hotel software products on our Eazotel platform" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1689338039987-8a2539194e27?w=1920&q=80&fm=jpg&fit=max",
      alt: "Glass office towers and greenery in Gurugram's business district",
    },
    points: [
      {
        title: "Meet us in person",
        body: "Our office is at Suncity Success Tower, Golf Course Extension Road, Sector 65. Audits, planning sessions and monthly reviews can happen there, at your office anywhere in Delhi NCR, or on a call.",
      },
      {
        title: "Marketing and software from one team",
        body: "Most agencies run your ads and leave the website, booking engine and WhatsApp to someone else. We build and run those too, on our Eazotel platform, so every enquiry is tracked from the first ad click to the booking.",
      },
      {
        title: "Your property can be anywhere",
        body: "Being in Gurugram is about meeting you, not about where your guests are. We work with resorts in Uttarakhand, hotels in Goa and Madhya Pradesh, restaurants across India, and properties in Canada, Nepal and Sri Lanka.",
      },
    ],
  },
  comparison: {
    title: "One Gurugram team instead of five vendors",
    without: [
      "A general agency learning hospitality on your budget",
      "Separate vendors for ads, website, booking engine and WhatsApp, and nobody owns the result",
      "Reports full of clicks and likes, not enquiries and bookings",
      "An agency you only ever meet on video calls",
    ],
    withList: [
      "A team that specialises in hospitality, founded by a hotelier",
      "Marketing and the software it runs on, from one team in Sector 65",
      "Every call, WhatsApp chat, form and booking tracked to the campaign that brought it",
      "Meetings at our office or yours whenever it helps",
    ],
  },
  services: {
    title: "Our marketing services",
    lede: "Start with one service or hand us the whole plan. Each service has its own page with the detail.",
    items: [
      {
        icon: "search",
        title: "Google Ads",
        body: "Search, Maps and Performance Max campaigns, judged on calls, WhatsApp chats and bookings.",
        href: "/hospitality-marketing-services/google-ads-agency/",
        platform: "google-ads",
      },
      {
        icon: "megaphone",
        title: "Meta ads",
        body: "Facebook and Instagram ads for offers, packages, events and lead forms.",
        href: "/hospitality-meta-ads-agency/",
        platform: "meta",
      },
      {
        icon: "globe",
        title: "SEO",
        body: "Technical fixes, content and links so your website ranks for the searches your guests make.",
        href: "/hospitality-marketing-services/seo-agency/",
      },
      {
        icon: "pin",
        title: "Local SEO and Google Maps",
        body: "A complete Google Business Profile that wins 'near me' searches, calls and directions.",
        href: "/industries-we-serve/hotel-marketing-agency/hotel-local-seo/",
        platform: "google-maps",
      },
      {
        icon: "share",
        title: "Social media management",
        body: "Instagram and Facebook content, reels and community management, planned a month ahead.",
        href: "/hospitality-marketing-services/social-media-marketing-agency/",
        platform: "instagram",
      },
      {
        icon: "devices",
        title: "Website development",
        body: "Fast, mobile-first websites with the booking engine, WhatsApp and tracking built in.",
        href: "/industries-we-serve/hotel-marketing-agency/hotel-website-development/",
      },
      {
        icon: "layers",
        title: "OTA management",
        body: "MakeMyTrip, Booking.com, Agoda and Goibibo listings, photos, rates and promotions.",
        href: "/hotel-ota-management/",
        platform: "makemytrip",
      },
      {
        icon: "hotel",
        title: "Google Hotel Ads",
        body: "Your direct rate next to the OTAs in Google's hotel results, plus free booking links.",
        href: "/google-hotel-ads-agency/",
        platform: "google-hotels",
      },
      {
        icon: "star",
        title: "Reputation management",
        body: "More reviews on Google, TripAdvisor and the OTAs, with a personal reply to each one.",
        href: "/industries-we-serve/hotel-marketing-agency/hotel-online-reputation-management/",
      },
      {
        icon: "sparkles",
        title: "AI search and ChatGPT Ads",
        body: "Get recommended by ChatGPT and Google's AI answers, and advertise where travellers plan.",
        href: "/chatgpt-ads-agency/",
        platform: "chatgpt",
      },
      {
        icon: "palette",
        title: "Branding and content",
        body: "Brand identity, photo and video direction, and content for your website and social media.",
        href: "/industries-we-serve/hotel-marketing-agency/hotel-branding/",
      },
      {
        icon: "utensils",
        title: "Zomato and Swiggy ads",
        body: "Listings, menus, offers and ads that bring restaurants and cloud kitchens more orders.",
        href: "/zomato-swiggy-ads-agency/",
        platform: "zomato",
      },
    ],
  },
  proof: {
    title: "Results for owners we work with",
    lede: "A few of our published case studies, across Google Ads, SEO and social media. Every figure comes from the client's own ad, analytics or social media accounts.",
    caseStudies: ["naad-wellness-google-ads", "wabi-sabi-resort", "desi-bar-grill-social-media"],
    testimonials: ["atinder-bajwa", "tino-frangline"],
    honestNote: "These results come from clients in India and Canada. When we meet, we'll share references from businesses like yours.",
  },
  process: {
    title: "How working with us starts",
    lede: "Most owners in Gurugram start with a meeting at our office. From there:",
    steps: [
      {
        when: "Day 1",
        title: "First meeting",
        body: "At our Sector 65 office, at your office or on a call. You tell us about the business and your goals, and give us read access to your accounts.",
      },
      {
        when: "Week 1",
        title: "Free audit",
        body: "Your ads, website, Google listing, OTA or delivery-app listings, reviews, software and how enquiries are answered, all reviewed.",
      },
      {
        when: "Weeks 2–3",
        title: "Written plan and setup",
        body: "A 90-day plan with every cost listed, then tracking, software and accounts set up before any ad budget is spent.",
      },
      {
        when: "Month 2 onwards",
        title: "Monthly review",
        body: "Enquiries, bookings and cost per enquiry reviewed every month, in person or on a call, with budget moved to what works.",
      },
    ],
  },
  blocks: [
    {
      kind: "cards",
      eyebrow: "Products",
      title: "Hotel software we build and run",
      lede: "Our products run on Eazotel, our hotel CRM and marketing platform, and come with a 14-day free trial. Our team sets them up, and they work alongside the campaigns we run.",
      items: [
        {
          icon: "calendarCheck",
          title: "Booking Engine",
          body: "Direct bookings on your own website, so fewer guests go through OTAs and their commission.",
          href: "/products/hotel-booking-engine/",
        },
        {
          icon: "devices",
          title: "Website Builder",
          body: "Fast, mobile-first hotel websites with the booking engine, WhatsApp and SEO basics built in.",
          href: "/products/hotel-website-builder/",
        },
        {
          icon: "refresh",
          title: "Channel Manager",
          body: "Rates and rooms kept in sync across every OTA and your website, with one update.",
          href: "/products/hotel-channel-manager/",
        },
        {
          icon: "users",
          title: "CRM",
          body: "Every guest and enquiry in one place, with loyalty and targeted campaigns for repeat stays.",
          href: "/products/hotel-crm/",
        },
        {
          icon: "chat",
          title: "WhatsApp Marketing",
          body: "Confirmations, offers and follow-ups on WhatsApp, where your guests already reply fastest.",
          href: "/products/hotel-whatsapp-marketing/",
        },
        {
          icon: "bot",
          title: "AI Chatbot",
          body: "Answers enquiries, FAQs and booking questions on your website and WhatsApp, day and night.",
          href: "/products/hotel-ai-chatbot/",
        },
        {
          icon: "mic",
          title: "AI Voice Agent",
          body: "Answers every call in a natural voice, even at peak hours and after midnight.",
          href: "/products/hotel-ai-voice-agent/",
        },
        {
          icon: "phoneCall",
          title: "Call Management System",
          body: "Route, record and track every guest call, including which ad or listing it came from.",
          href: "/products/hotel-call-management-system/",
        },
        {
          icon: "bars",
          title: "Insights and Analytics",
          body: "Website, campaign and lead data in one dashboard, with every enquiry traced to its channel.",
          href: "/products/hotel-insights-analytics/",
        },
      ],
    },
    {
      kind: "cards",
      eyebrow: "Who we work with",
      title: "Marketing for every kind of hospitality business",
      lede: "Each business type has its own page with the services and results that fit it.",
      items: [
        {
          icon: "hotel",
          title: "Hotels",
          body: "City, business, boutique and heritage hotels: direct bookings, corporate stays and events.",
          href: "/industries-we-serve/hotel-marketing-agency/",
        },
        {
          icon: "palm",
          title: "Resorts",
          body: "Weekend getaways, hill and beach resorts: packages, long weekends and family holidays.",
          href: "/industries-we-serve/resort-marketing-agency/",
        },
        {
          icon: "utensils",
          title: "Restaurants and cafés",
          body: "More footfall and reservations from Google Maps, Instagram, Zomato and Swiggy.",
          href: "/industries-we-serve/restaurant-marketing-agency/",
        },
        {
          icon: "send",
          title: "Cloud kitchens",
          body: "Delivery-app rankings, ads and menus, plus direct orders and office lunches.",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/",
        },
        {
          icon: "house",
          title: "Homestays and villas",
          body: "Airbnb, OTA and direct bookings for whole-villa stays, workations and groups.",
          href: "/industries-we-serve/homestay-villa-marketing-agency/",
        },
        {
          icon: "sparkles",
          title: "Wellness retreats",
          body: "Programme dates, retreat packages and enquiries from guests planning a reset.",
          href: "/industries-we-serve/wellness-retreat-marketing-agency/",
        },
        {
          icon: "calendarCheck",
          title: "Wedding venues",
          body: "Wedding, reception and corporate event leads, answered fast and followed up.",
          href: "/industries-we-serve/wedding-venue-marketing-agency/",
        },
        {
          icon: "plane",
          title: "Travel companies",
          body: "Tours, fixed departures and custom trips sold through search, social and WhatsApp.",
          href: "/industries-we-serve/travel-tourism-marketing-agency/",
        },
      ],
    },
    {
      kind: "split",
      eyebrow: "Visit us",
      title: "Meet us at our Sector 65 office",
      paragraphs: [
        "Our office is at Suncity Success Tower, Golf Course Extension Road, Sector 65, Gurugram 122005, close to Golf Course Road and Sohna Road. Come in for a first meeting and we'll go through your current marketing, software and numbers with you.",
        "Prefer we come to you? We meet owners across Gurugram and Delhi NCR at their offices and properties, and work on calls and WhatsApp with everyone else.",
      ],
      bullets: [
        "A free first meeting and audit",
        "Your ads, website, Google listing, OTAs and enquiry handling reviewed",
        "A written 90-day plan that's yours to keep",
        "Marketing and software questions answered by the people who do the work",
      ],
      image: {
        src: "/agency/google-ads-laptop.jpg",
        alt: "A marketing team presenting campaign results to hotel owners in a meeting",
      },
      reverse: true,
    },
  ],
  faqs: [
    {
      q: "Where is your office in Gurgaon?",
      a: "Suncity Success Tower, Golf Course Extension Road, Sector 65, Gurugram, Haryana 122005. Call or WhatsApp us to book a time, or find directions on our contact page.",
    },
    {
      q: "Do you only work with businesses in Gurgaon?",
      a: "No. Our clients are across India and in eight other countries. Being in Gurugram means owners in Gurgaon and Delhi NCR can meet us in person; everyone else works with us on calls and WhatsApp.",
    },
    {
      q: "What kinds of businesses do you work with?",
      a: "We specialise in hospitality: hotels, resorts, restaurants and cafés, cloud kitchens, homestays and villas, wellness retreats, wedding venues and travel companies.",
    },
    {
      q: "What marketing services do you offer?",
      a: "Google Ads, Meta ads, SEO, local SEO and Google Maps, social media, website development, OTA management, Google Hotel Ads, reputation management, AI search and ChatGPT Ads, branding and content, and Zomato and Swiggy ads. You can start with one service.",
    },
    {
      q: "What software do you offer?",
      a: "21 products on our Eazotel platform, including a booking engine, website builder, channel manager, CRM, WhatsApp marketing, AI chatbot, AI voice agent, call tracking and analytics. They come with a 14-day free trial, and our team sets them up.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on the services, products and ad budget you need. After the free audit we send a written proposal with every cost listed, including ad budgets, before you commit to anything.",
    },
    {
      q: "How soon will we see results?",
      a: "Paid ads and fixes to your booking or enquiry flow usually show in your numbers within weeks. SEO, Google Maps rankings, reviews and AI search build over three to six months. We agree milestones up front so you can hold us to them.",
    },
    {
      q: "Will we own our accounts and data?",
      a: "Yes. Your ad accounts, Google Business Profile, website, OTA logins and customer data stay in your name. We're added as users and only use your data on your instructions.",
    },
  ],
  related: [
    "international-hotel-marketing-agency",
    "hotel-direct-booking-marketing-agency",
    "hotel-performance-marketing-agency",
    "hospitality-meta-ads-agency",
    "google-hotel-ads-agency",
    "zomato-swiggy-ads-agency",
  ],
  extraLinks: [
    {
      title: "Visit our Gurugram office",
      body: "Suncity Success Tower, Golf Course Extension Road, Sector 65. Directions and contact details.",
      href: "/contact-us/",
    },
    { title: "All products", body: "All 21 Eazotel products, with features and a free trial.", href: "/products/" },
    { title: "Industries we serve", body: "Every type of hospitality business we market, with a page for each.", href: "/industries-we-serve/" },
    { title: "Case studies", body: "Detailed before-and-after figures from the businesses we market.", href: "/case-study/" },
  ],
  cta: {
    title: "In Gurgaon? Come and meet us.",
    body: "Book a free audit and a first meeting at our Sector 65 office, at yours, or on a call. You'll leave with a written plan for your marketing and software.",
  },
  sources: [],
};

export default page;

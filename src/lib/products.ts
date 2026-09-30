// Content and SEO for the Fielmente product pages.
// Edit copy here; app/products/[slug]/page.tsx and app/products/page.tsx render it.

export type Product = {
  slug: string;
  name: string;
  seo: {
    title: string;
    description: string;
    focusKeyword: string;
    secondaryKeywords: string[];
  };
  h1: string;
  intro: string;
  proof: string;
  /** Short line used on the /products/ index cards and homepage cards. */
  summary: string;
  photo: { src: string; alt: string };
  screenshot: { src: string; alt: string };
  without: string[];
  withFielmente: string[];
  features: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  /** Slugs of three related products. */
  related: string[];
  faqs: { q: string; a: string }[];
};

/**
 * The pictures in public/images/products/ are original illustrations and need no credit.
 * If you replace any of them with Freepik photos, set this to true to show "Photos: Freepik"
 * at the bottom of the product pages (required by Freepik's free licence), and update the alt text.
 */
export const SHOW_PHOTO_CREDIT = false;

export const SITE_URL = "https://fielmente.com";
export const TRIAL_URL = "https://onboarding.eazotel.com/sign-in";
export const EAZOTEL_URL = "https://eazotel.com/";
export const WHATSAPP_NUMBER = "919501868775";
export const PHONE = "+919501868775";
export const PHONE_DISPLAY = "+91 95018 68775";
export const EMAIL = "sachin@fielmente.com";

export const productPath = (slug: string) => `/products/${slug}/`;
export const productUrl = (slug: string) => `${SITE_URL}${productPath(slug)}`;

export const demoLink = (productName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I want a demo of the Fielmente ${productName}`,
  )}`;

/** Added to every product's FAQ list (visible and in JSON-LD). */
export const SHARED_FAQ = {
  "q": "Is there a free trial?",
  "a": "Yes. Fielmente products run on Eazotel, our hotel CRM and marketing platform, which comes with a 14-day free trial. Our team helps you set it up."
};

export const CHANNELS: string[] = [
  "WhatsApp",
  "Meta Lead Ads",
  "Instagram & Messenger",
  "Website live chat",
  "Website forms",
  "Email",
  "Google"
];

export const PARTNERS: { src: string; alt: string }[] = [
  {
    "src": "/partners/google-partner.png",
    "alt": "Google Partner"
  },
  {
    "src": "/partners/meta-business-partner.png",
    "alt": "Meta Business Partner"
  },
  {
    "src": "/partners/zoho-corporation.png",
    "alt": "Zoho"
  },
  {
    "src": "/partners/aws.png",
    "alt": "AWS"
  },
  {
    "src": "/partners/razorpay.png",
    "alt": "Razorpay"
  },
  {
    "src": "/partners/Booking.Com.png",
    "alt": "Booking.com"
  },
  {
    "src": "/partners/agoda-logo.png",
    "alt": "Agoda"
  },
  {
    "src": "/partners/airbnb-logo.png",
    "alt": "Airbnb"
  },
  {
    "src": "/partners/makemytrip-logo.png",
    "alt": "MakeMyTrip"
  },
  {
    "src": "/partners/goibibo-logo.png",
    "alt": "Goibibo"
  },
  {
    "src": "/partners/cleartrip-logo.png",
    "alt": "Cleartrip"
  }
];

export const RESULTS: { value: string; label: string }[] = [
  {
    "value": "2×",
    "label": "faster replies to guests across every channel"
  },
  {
    "value": "35%",
    "label": "more enquiries turned into confirmed bookings"
  },
  {
    "value": "40%",
    "label": "more direct reservations, with less OTA dependency"
  },
  {
    "value": "1",
    "label": "dashboard for every guest conversation and lead"
  }
];

export const PROPERTY_TYPES: {
  title: string;
  text: string;
  image: { src: string; alt: string };
}[] = [
  {
    "title": "Hotel groups",
    "text": "Centralised leads, content and reporting across all your properties.",
    "image": {
      "src": "/images/products/who-hotel.jpg",
      "alt": "Illustration of a hotel building skyline at dusk"
    }
  },
  {
    "title": "Resorts",
    "text": "High enquiry volumes and seasonal campaigns handled without extra staff.",
    "image": {
      "src": "/images/products/who-resorts.jpg",
      "alt": "Illustration of a resort pool with palm trees and sun loungers"
    }
  },
  {
    "title": "Boutique hotels, villas and homestays",
    "text": "Personal guest experiences with simple, smart workflows.",
    "image": {
      "src": "/images/products/who-boutique.jpg",
      "alt": "Illustration of a boutique villa with a pool at sunset"
    }
  }
];

export const TESTIMONIALS: { quote: string; name: string }[] = [
  {
    "quote": "Eazotel was an excellent choice for my organisation and team. The ease of use, intuitive design and feature-rich tools are absolutely top tier.",
    "name": "Tino Frangline"
  },
  {
    "quote": "Great team to work with. Adaptive, as Ottawa is a very unique market, and they have learnt very quickly. Great initiative taken to explore and make a big impression in the market.",
    "name": "Donald Wingell, CFBE"
  }
];

export const PRODUCTS: Product[] = [
  {
    "slug": "hotel-cms",
    "name": "CMS",
    "seo": {
      "title": "Hotel CMS: Update Rooms & Offers Without Code | Fielmente",
      "description": "Hotel CMS that lets your team update rooms, rates, offers, menus and packages in seconds. No developer or IT tickets, with SEO fields built in.",
      "focusKeyword": "hotel CMS",
      "secondaryKeywords": [
        "hotel website CMS",
        "hotel content management system",
        "update hotel website without developer",
        "hotel website builder India"
      ]
    },
    "h1": "A hotel CMS that lets your team change the website in seconds",
    "intro": "A content system built around how hotels actually work: rooms, packages, offers, menus and events. Your front-office or marketing team updates the site themselves, and it's live the moment they hit publish.",
    "proof": "No IT team needed",
    "summary": "Easily manage hotel content, offers, and promotions. Update menus, rooms, and packages in seconds, with no IT team needed.",
    "photo": {
      "src": "/images/products/hotel-cms.jpg",
      "alt": "Illustration of the Fielmente hotel CMS editing a room page and publishing an offer"
    },
    "screenshot": {
      "src": "/products/cms.png",
      "alt": "Fielmente CMS dashboard for hotels"
    },
    "without": [
      "A monsoon offer waits a week for the developer to upload it",
      "Room photos and inclusions on the site don't match what guests get",
      "Every small edit costs an invoice or a favour"
    ],
    "withFielmente": [
      "Launch a festive package at 10 am and share the link by 10:05",
      "Rooms, amenities and photos stay accurate because your team owns them",
      "Unlimited edits, with version history if something goes wrong"
    ],
    "features": [
      {
        "title": "Room and suite manager",
        "text": "Photos, bed types, occupancy, inclusions and amenities in one form per room type. Changes flow to every page that shows that room."
      },
      {
        "title": "Offers and packages",
        "text": "Build honeymoon, weekend or long-stay packages with validity dates. Expired offers hide themselves."
      },
      {
        "title": "Menus and outlets",
        "text": "Update restaurant, bar and in-room dining menus without re-uploading PDFs."
      },
      {
        "title": "Pages that capture leads",
        "text": "Mobile-first landing pages for weddings, MICE or a new wing, with forms that route enquiries straight to your sales team."
      },
      {
        "title": "SEO fields built in",
        "text": "Meta titles, descriptions, alt text and schema for every page, so each update also helps you rank."
      },
      {
        "title": "Roles and approvals",
        "text": "Give the GM, sales and F&B teams their own access, with approval before anything goes live."
      }
    ],
    "steps": [
      {
        "title": "Share your current site",
        "text": "We migrate your rooms, offers, images and pages into the CMS."
      },
      {
        "title": "Get your team trained",
        "text": "One short session for the people who will update the site."
      },
      {
        "title": "Edit and publish",
        "text": "Change anything from the dashboard; it goes live instantly."
      },
      {
        "title": "Keep improving",
        "text": "We review content and SEO with you every month."
      }
    ],
    "related": [
      "hotel-booking-engine",
      "hotel-local-seo",
      "hotel-ai-chatbot"
    ],
    "faqs": [
      {
        "q": "Do I need technical knowledge to use the hotel CMS?",
        "a": "No. If your team can fill a form and upload a photo, they can run the website. We also train them during onboarding."
      },
      {
        "q": "Can you move my existing website content into the CMS?",
        "a": "Yes. We migrate rooms, offers, images and key pages from your current site as part of setup."
      },
      {
        "q": "Will editing content affect my Google rankings?",
        "a": "Each page has its own SEO fields for titles, descriptions, alt text and schema, so updates can improve rankings rather than break them."
      },
      {
        "q": "Can multiple team members use it?",
        "a": "Yes. You can create separate logins with different permissions and require approval before changes go live."
      }
    ]
  },
  {
    "slug": "hotel-booking-engine",
    "name": "Booking Engine",
    "seo": {
      "title": "Hotel Booking Engine for Direct Bookings | Fielmente",
      "description": "Mobile-first hotel booking engine that lifts direct reservations by 30%+ and cuts OTA commission. Live rates, packages and secure payments.",
      "focusKeyword": "hotel booking engine",
      "secondaryKeywords": [
        "direct booking engine for hotels",
        "commission-free hotel booking engine",
        "hotel booking engine India",
        "online booking system for hotels"
      ]
    },
    "h1": "A hotel booking engine that turns visitors into commission-free bookings",
    "intro": "A mobile-first booking engine that sits on your website and lets guests check dates, compare rooms and pay in a few taps. Every booking it takes is one you don't share with an OTA.",
    "proof": "30%+ more direct reservations",
    "summary": "Seamless booking engine designed for hotels. Boost direct reservations by 30%+ and reduce OTA commissions.",
    "photo": {
      "src": "/images/products/hotel-booking-engine.jpg",
      "alt": "Illustration of a hotel booking engine with dates, room prices and a Book direct button"
    },
    "screenshot": {
      "src": "/products/booking-engine.png",
      "alt": "Fielmente Booking Engine dashboard for hotels"
    },
    "without": [
      "Guests find you on Google, then book on an OTA and you pay 15–25%",
      "A slow, clunky booking page loses people at checkout",
      "Rates and inventory drift out of sync across channels"
    ],
    "withFielmente": [
      "Guests book on your site and the full room revenue stays with you",
      "A three-step flow designed for phones, where most hotel searches happen",
      "Live rates and availability that match what you sell everywhere else"
    ],
    "features": [
      {
        "title": "Live availability and rates",
        "text": "Real-time inventory with rate plans for room-only, breakfast, half-board and more."
      },
      {
        "title": "Packages and add-ons",
        "text": "Sell airport transfers, spa treatments, dinners and late check-out during booking."
      },
      {
        "title": "Promo codes and member rates",
        "text": "Reward returning guests and campaign traffic with codes that show a better price than OTAs."
      },
      {
        "title": "Integrated secure payments",
        "text": "Card, UPI, net banking and wallets, with full or partial prepayment rules."
      },
      {
        "title": "Confirmations and reminders",
        "text": "Branded confirmation by email and WhatsApp the moment a booking is made, plus reminders that reduce no-shows."
      },
      {
        "title": "Booking analytics",
        "text": "See where direct bookings come from, which rooms sell and where guests drop off."
      }
    ],
    "steps": [
      {
        "title": "Map your rooms and rates",
        "text": "We set up room types, rate plans, policies and taxes."
      },
      {
        "title": "Match your brand",
        "text": "The engine takes your colours, fonts and photography."
      },
      {
        "title": "Go live on your site",
        "text": "Add a Book Now button across your website and ads."
      },
      {
        "title": "Grow direct share",
        "text": "We tune offers and campaigns to shift bookings away from OTAs."
      }
    ],
    "related": [
      "hotel-payment-gateway",
      "hotel-crm",
      "hotel-whatsapp-marketing"
    ],
    "faqs": [
      {
        "q": "Is there a commission on bookings made through the engine?",
        "a": "Direct bookings through your own booking engine carry no OTA commission. Talk to us about plan pricing for your property size."
      },
      {
        "q": "Does it work on mobile?",
        "a": "Yes. The booking flow is designed mobile-first, since most hotel searches and many bookings happen on phones."
      },
      {
        "q": "Can guests pay a deposit instead of the full amount?",
        "a": "Yes. You can set full prepayment, partial deposit or pay-at-hotel rules by rate plan."
      },
      {
        "q": "Will it match my website design?",
        "a": "Yes. We style the engine with your brand colours, typography and images so it feels like part of your site."
      }
    ]
  },
  {
    "slug": "hotel-payment-gateway",
    "name": "Payment Gateway",
    "seo": {
      "title": "Hotel Payment Gateway: Secure & Multi-Currency | Fielmente",
      "description": "Secure hotel payment gateway with multi-currency and one-click checkout. Accept cards, UPI and wallets for bookings, deposits and invoices.",
      "focusKeyword": "hotel payment gateway",
      "secondaryKeywords": [
        "payment gateway for hotels India",
        "hotel payment links",
        "multi-currency hotel payments",
        "online payment for hotel bookings"
      ]
    },
    "h1": "A hotel payment gateway that gets you paid without the back-and-forth",
    "intro": "Payments built into your booking engine, WhatsApp chats and invoices. Guests pay the way they prefer, in their own currency, and your accounts team sees it all in one place.",
    "proof": "Multi-currency, one-click checkout",
    "summary": "Secure, integrated payments for smooth guest checkout, supporting multi-currency and one-click payments.",
    "photo": {
      "src": "/images/products/hotel-payment-gateway.jpg",
      "alt": "Illustration of a secure hotel payment checkout with card, UPI and multi-currency options"
    },
    "screenshot": {
      "src": "/products/payment-gateway.png",
      "alt": "Fielmente Payment Gateway dashboard for hotels"
    },
    "without": [
      "Sharing bank details on WhatsApp and waiting for screenshots",
      "International guests drop off when they can't pay in their currency",
      "Reconciling payments across three apps at month-end"
    ],
    "withFielmente": [
      "Secure payment links sent in seconds and confirmed automatically",
      "Guests see prices and pay in the currency they're comfortable with",
      "One dashboard for every payment, refund and settlement"
    ],
    "features": [
      {
        "title": "Every popular method",
        "text": "Credit and debit cards, UPI, net banking and wallets for Indian and international guests."
      },
      {
        "title": "Multi-currency pricing",
        "text": "Show and collect in the guest's currency to lift conversions from overseas travellers."
      },
      {
        "title": "Payment links",
        "text": "Send a link on WhatsApp, email or SMS for deposits, balances, events and group bookings."
      },
      {
        "title": "Deposit and refund rules",
        "text": "Automate partial payments, cancellation refunds and no-show charges by policy."
      },
      {
        "title": "Trusted processing",
        "text": "Payments run through established gateway partners such as Razorpay, with card data never stored on your site."
      },
      {
        "title": "Reconciliation reports",
        "text": "Match every payment to a booking and export settlement reports for accounts."
      }
    ],
    "steps": [
      {
        "title": "Connect your account",
        "text": "We link your gateway and bank settlement details."
      },
      {
        "title": "Set payment rules",
        "text": "Define deposits, balances and refund policies."
      },
      {
        "title": "Switch it on everywhere",
        "text": "Booking engine, WhatsApp and invoices all use the same checkout."
      },
      {
        "title": "Track settlements",
        "text": "Review payments and payouts from one dashboard."
      }
    ],
    "related": [
      "hotel-booking-engine",
      "hotel-whatsapp-marketing",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "Which payment methods can guests use?",
        "a": "Cards, UPI, net banking and wallets. Availability of specific methods depends on your gateway account."
      },
      {
        "q": "Can I accept international payments?",
        "a": "Yes. Multi-currency support lets overseas guests see and pay in a currency they recognise, subject to your gateway's international payments approval."
      },
      {
        "q": "Can I send payment links outside the booking engine?",
        "a": "Yes. Generate links for event deposits, group bookings or balances and share them on WhatsApp, email or SMS."
      },
      {
        "q": "Is guest card data stored on my website?",
        "a": "No. Card details are handled by the payment partner, not stored on your website."
      }
    ]
  },
  {
    "slug": "hotel-email-marketing",
    "name": "Email Marketing",
    "seo": {
      "title": "Hotel Email Marketing & Automation | Fielmente",
      "description": "Automated hotel email marketing with 4× higher open rates. Pre-arrival, post-stay, birthday and win-back journeys that drive repeat bookings.",
      "focusKeyword": "hotel email marketing",
      "secondaryKeywords": [
        "email marketing for hotels",
        "hotel email automation",
        "pre-arrival emails hotel",
        "hotel guest email campaigns"
      ]
    },
    "h1": "Hotel email marketing that guests open, and that brings them back",
    "intro": "Automated journeys that send the right message at the right moment: before arrival, after checkout, on birthdays and when it's been too long since their last stay.",
    "proof": "4× higher open rates",
    "summary": "Automated and personalised campaigns that deliver 4× higher open rates than traditional hotel emails.",
    "photo": {
      "src": "/images/products/hotel-email-marketing.jpg",
      "alt": "Illustration of an automated hotel email with pre-arrival, post-stay and win-back journeys"
    },
    "screenshot": {
      "src": "/products/email-marketing.png",
      "alt": "Fielmente Email Marketing dashboard for hotels"
    },
    "without": [
      "One newsletter blasted to everyone, twice a year",
      "Guest emails sitting unused in the PMS",
      "No idea which email brought in which booking"
    ],
    "withFielmente": [
      "Messages personalised by stay history, room type and interests",
      "Your guest list working for you every day, automatically",
      "Bookings tracked back to the campaign that drove them"
    ],
    "features": [
      {
        "title": "Pre-arrival journeys",
        "text": "Welcome notes, upgrade offers and local tips sent before the guest arrives."
      },
      {
        "title": "Post-stay follow-ups",
        "text": "Thank-you emails with review requests and a return-stay offer."
      },
      {
        "title": "Birthday and anniversary emails",
        "text": "Timed personal offers that turn special dates into bookings."
      },
      {
        "title": "Win-back campaigns",
        "text": "Automatic nudges to guests who haven't stayed in 6 or 12 months."
      },
      {
        "title": "Hotel-ready templates",
        "text": "Mobile-friendly designs in your brand, ready for offers, events and seasons."
      },
      {
        "title": "Revenue tracking",
        "text": "Opens, clicks and bookings per campaign, so you know what earns."
      }
    ],
    "steps": [
      {
        "title": "Import your guest list",
        "text": "We clean and segment the data you already have."
      },
      {
        "title": "Set up journeys",
        "text": "Pre-arrival, post-stay, birthday and win-back flows go live."
      },
      {
        "title": "Launch campaigns",
        "text": "Seasonal offers and events written and designed with you."
      },
      {
        "title": "Measure and refine",
        "text": "Monthly review of opens, clicks and bookings."
      }
    ],
    "related": [
      "hotel-crm",
      "hotel-whatsapp-marketing",
      "hotel-booking-engine"
    ],
    "faqs": [
      {
        "q": "Where does the guest email list come from?",
        "a": "From your PMS, booking engine, website forms and past bookings. We clean and segment it during setup."
      },
      {
        "q": "Do you write and design the emails?",
        "a": "Yes. We create hotel-specific templates and campaign copy in your brand voice."
      },
      {
        "q": "How do you avoid emails landing in spam?",
        "a": "We set up domain authentication, send to consented contacts and keep lists clean to protect deliverability."
      },
      {
        "q": "Can I see how many bookings came from email?",
        "a": "Yes. Campaigns are tracked through to bookings in your reports."
      }
    ]
  },
  {
    "slug": "hotel-whatsapp-marketing",
    "name": "WhatsApp Marketing",
    "seo": {
      "title": "WhatsApp Marketing for Hotels: API & Inbox | Fielmente",
      "description": "WhatsApp marketing for hotels on the official API. Shared team inbox, automated confirmations and reminders, and offers guests read in minutes.",
      "focusKeyword": "WhatsApp marketing for hotels",
      "secondaryKeywords": [
        "hotel WhatsApp Business API",
        "WhatsApp for hotels",
        "hotel WhatsApp automation",
        "WhatsApp booking confirmation hotel"
      ]
    },
    "h1": "WhatsApp marketing for hotels, on the app guests already reply to",
    "intro": "Official WhatsApp Business tools for hotels. Confirm bookings, answer enquiries from one shared inbox, and send offers that get read within minutes, not days.",
    "proof": "Faster replies, more repeat stays",
    "summary": "Engage guests where they spend most time. From booking confirmations to offers, drive faster responses and repeat stays.",
    "photo": {
      "src": "/images/products/hotel-whatsapp-marketing.jpg",
      "alt": "Illustration of a hotel WhatsApp chat confirming a booking beside a team inbox"
    },
    "screenshot": {
      "src": "/products/whatsApp-marketing.png",
      "alt": "Fielmente WhatsApp Marketing dashboard for hotels"
    },
    "without": [
      "Enquiries spread across staff phones, some never answered",
      "Offers sent by email go unopened",
      "No record of what was promised to which guest"
    ],
    "withFielmente": [
      "One team inbox for every WhatsApp enquiry, with nothing missed",
      "Offers and reminders read within minutes of sending",
      "Full chat history linked to each guest's profile"
    ],
    "features": [
      {
        "title": "Shared team inbox",
        "text": "Reservations, front office and sales work from one number with assigned chats and saved quick replies."
      },
      {
        "title": "Automated confirmations",
        "text": "Booking confirmations, pre-arrival details and check-out thank-yous sent automatically."
      },
      {
        "title": "Broadcast campaigns",
        "text": "Send approved offer templates to opted-in guest segments."
      },
      {
        "title": "Booking reminders",
        "text": "Timely confirmation and pre-arrival reminders that cut no-shows."
      },
      {
        "title": "Payment links in chat",
        "text": "Close an enquiry by sending a secure payment link in the same conversation."
      },
      {
        "title": "Auto follow-ups",
        "text": "Timed follow-up sequences for enquiries that went quiet, so warm leads become bookings."
      }
    ],
    "steps": [
      {
        "title": "Set up the official API",
        "text": "We register your number and business profile."
      },
      {
        "title": "Approve templates",
        "text": "Confirmation, reminder and offer templates submitted for approval."
      },
      {
        "title": "Connect your team",
        "text": "Staff get logins to the shared inbox."
      },
      {
        "title": "Run campaigns",
        "text": "Offers and journeys go out to opted-in guests."
      }
    ],
    "related": [
      "hotel-ai-chatbot",
      "hotel-crm",
      "hotel-payment-gateway"
    ],
    "faqs": [
      {
        "q": "Is this the official WhatsApp Business API?",
        "a": "Yes. We set up your hotel on the official API, which allows a shared inbox, automation and approved broadcast templates."
      },
      {
        "q": "Can multiple staff reply from one number?",
        "a": "Yes. Your team shares one inbox and chats can be assigned to the right person."
      },
      {
        "q": "Will guests receive spam?",
        "a": "No. Broadcasts only go to guests who opted in, using templates approved by WhatsApp."
      },
      {
        "q": "Can the AI chatbot answer on WhatsApp?",
        "a": "Yes. Pair it with the Fielmente AI Chatbot to answer common questions instantly, with handover to staff."
      }
    ]
  },
  {
    "slug": "hotel-local-seo",
    "name": "Local SEO",
    "seo": {
      "title": "Local SEO for Hotels: Rank on Google Maps | Fielmente",
      "description": "Local SEO for hotels that ranks you on Google Maps and 'near me' searches. Hotels we optimise see 2× more calls and direct enquiries.",
      "focusKeyword": "local SEO for hotels",
      "secondaryKeywords": [
        "hotel Google Business Profile optimisation",
        "hotel Google Maps ranking",
        "hotels near me SEO",
        "hotel review management"
      ]
    },
    "h1": "Local SEO for hotels: be the stay guests find first on Google Maps",
    "intro": "We optimise your Google Business Profile, reviews and local listings so you show up when travellers search for a stay nearby, and they call or book you directly.",
    "proof": "2× more calls and direct inquiries",
    "summary": "Rank higher on Google Maps and 'near me' searches. Hotels we optimise see 2× more calls and direct enquiries within weeks.",
    "photo": {
      "src": "/images/products/hotel-local-seo.jpg",
      "alt": "Illustration of a Google Maps style search showing a hotel listing with call and directions buttons"
    },
    "screenshot": {
      "src": "/products/local-seo.png",
      "alt": "Fielmente Local SEO dashboard for hotels"
    },
    "without": [
      "Competitors appear in the map pack, you don't",
      "Outdated photos, hours and phone numbers on Google",
      "Reviews left unanswered for months"
    ],
    "withFielmente": [
      "Visibility in the top local results for your key searches",
      "A complete, accurate profile that drives calls and directions",
      "Every review answered, and more of them coming in"
    ],
    "features": [
      {
        "title": "Google Business Profile optimisation",
        "text": "Categories, attributes, amenities, photos and booking links set up properly."
      },
      {
        "title": "Review management",
        "text": "Timely responses to every review and a system to request new ones from happy guests."
      },
      {
        "title": "Local citations",
        "text": "Consistent name, address and phone across directories and travel listings."
      },
      {
        "title": "Weekly posts and photos",
        "text": "Fresh offers, events and images that keep your profile active."
      },
      {
        "title": "Local keyword pages",
        "text": "Website pages built for searches like 'resort near Rishikesh'."
      },
      {
        "title": "Calls and organic lead tracking",
        "text": "Views, calls, direction requests and organic enquiries tracked in your dashboard and reported monthly."
      }
    ],
    "steps": [
      {
        "title": "Audit your local presence",
        "text": "We check your profile, listings, reviews and competitors."
      },
      {
        "title": "Fix the foundations",
        "text": "Profile, categories, NAP and photos corrected."
      },
      {
        "title": "Build momentum",
        "text": "Posts, reviews and citations added every week."
      },
      {
        "title": "Report results",
        "text": "Rankings, calls and inquiries reviewed monthly."
      }
    ],
    "related": [
      "hotel-cms",
      "hotel-crm",
      "hotel-ai-chatbot"
    ],
    "faqs": [
      {
        "q": "How long does local SEO take to show results?",
        "a": "Many hotels see more calls and inquiries within weeks once the profile is fixed. Competitive markets take longer to reach the top positions."
      },
      {
        "q": "Do you need access to my Google Business Profile?",
        "a": "Yes, manager access. You stay the owner of the profile."
      },
      {
        "q": "Can you remove negative reviews?",
        "a": "We can't remove genuine reviews, but we respond professionally, flag ones that break Google's policies, and help you earn more positive reviews."
      },
      {
        "q": "Is this different from website SEO?",
        "a": "Yes. Local SEO focuses on Maps and 'near me' results. It works best alongside website SEO."
      }
    ]
  },
  {
    "slug": "hotel-ai-chatbot",
    "name": "AI Chatbot",
    "seo": {
      "title": "AI Chatbot for Hotels: 24/7 Guest Replies | Fielmente",
      "description": "AI chatbot for hotels that answers enquiries, FAQs and booking questions 24/7 on your website and WhatsApp, lifting conversions by 35%+.",
      "focusKeyword": "AI chatbot for hotels",
      "secondaryKeywords": [
        "hotel chatbot",
        "hotel AI assistant",
        "WhatsApp chatbot for hotels",
        "24/7 hotel booking chatbot"
      ]
    },
    "h1": "An AI chatbot for hotels that answers every guest, even at 2 am",
    "intro": "An AI assistant trained on your hotel: rooms, rates, policies, dining and the area around you. It replies instantly on your website and WhatsApp, and hands over to your team when a person is needed.",
    "proof": "35%+ higher conversions",
    "summary": "Automate enquiries, FAQs and booking questions, saving staff time and increasing conversions by 35%+.",
    "photo": {
      "src": "/images/products/hotel-ai-chatbot.jpg",
      "alt": "Illustration of a hotel AI chatbot answering a guest's breakfast and room questions"
    },
    "screenshot": {
      "src": "/products/AI-Chatbot.png",
      "alt": "Fielmente AI Chatbot dashboard for hotels"
    },
    "without": [
      "Night-time enquiries wait until morning, and book elsewhere",
      "Staff answer the same ten questions all day",
      "Leads from chats never make it to the sales team"
    ],
    "withFielmente": [
      "Instant, accurate answers round the clock",
      "Your team freed for guests at the desk and high-value leads",
      "Every chat captured as a lead with contact details"
    ],
    "features": [
      {
        "title": "Trained on your property",
        "text": "Knowledge base built from your website, rate cards, policies and FAQs."
      },
      {
        "title": "Books, not just answers",
        "text": "Checks availability and sends guests to the booking engine with dates filled in."
      },
      {
        "title": "Website and WhatsApp",
        "text": "One assistant working on both channels."
      },
      {
        "title": "Multilingual replies",
        "text": "Answers guests in the language they write in."
      },
      {
        "title": "Human handover",
        "text": "Passes complex or high-value conversations to your team with the full context."
      },
      {
        "title": "Lead capture",
        "text": "Name, phone, dates and needs saved to the CRM automatically, with follow-ups if the guest goes quiet."
      }
    ],
    "steps": [
      {
        "title": "Build the knowledge base",
        "text": "We collect and structure your hotel's information."
      },
      {
        "title": "Test with your team",
        "text": "You review answers before anything goes live."
      },
      {
        "title": "Launch on your channels",
        "text": "Website widget and WhatsApp switched on."
      },
      {
        "title": "Improve weekly",
        "text": "Unanswered questions reviewed and added."
      }
    ],
    "related": [
      "hotel-whatsapp-marketing",
      "hotel-booking-engine",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "How does the chatbot know about my hotel?",
        "a": "We build its knowledge base from your website, rate cards, policies and FAQs, and you approve it before launch."
      },
      {
        "q": "What if the chatbot can't answer a question?",
        "a": "It hands the conversation to your team with the full chat history, so the guest doesn't repeat themselves."
      },
      {
        "q": "Can it take bookings?",
        "a": "It checks availability and sends guests to your booking engine with their dates filled in, where they complete payment."
      },
      {
        "q": "Does it work on WhatsApp?",
        "a": "Yes. The same assistant can run on your website and your WhatsApp Business number."
      }
    ]
  },
  {
    "slug": "hotel-crm",
    "name": "CRM",
    "seo": {
      "title": "Hotel CRM for Guest Data & Repeat Stays | Fielmente",
      "description": "Hotel CRM that unifies guest data, tracks every lead and runs loyalty campaigns that increase repeat stays by 40%. Built for hotels and resorts.",
      "focusKeyword": "hotel CRM",
      "secondaryKeywords": [
        "hotel CRM software India",
        "guest CRM for hotels",
        "hotel lead management",
        "hotel loyalty program software"
      ]
    },
    "h1": "A hotel CRM that knows every guest and brings them back",
    "intro": "One profile for every guest, built from bookings, chats, emails and stays. Use it to personalise service, reward loyalty and fill quiet dates with the people most likely to return.",
    "proof": "40% more repeat stays",
    "summary": "Centralise guest data, manage loyalty and run targeted campaigns that increase repeat stays by 40%.",
    "photo": {
      "src": "/images/products/hotel-crm.jpg",
      "alt": "Illustration of a hotel CRM guest profile with stay history and a lead pipeline"
    },
    "screenshot": {
      "src": "/products/crm.png",
      "alt": "Fielmente CRM dashboard for hotels"
    },
    "without": [
      "Guest details split across the PMS, OTAs, WhatsApp and spreadsheets",
      "Returning guests treated like first-timers",
      "Corporate and wedding leads tracked in someone's notebook"
    ],
    "withFielmente": [
      "A single profile with stay history, preferences and spend",
      "Staff greet regulars with what they liked last time",
      "A clear pipeline for every group, event and corporate lead"
    ],
    "features": [
      {
        "title": "Unified guest profiles",
        "text": "Stays, spend, preferences and every conversation from WhatsApp, Meta ads, Instagram, website chat and forms in one place."
      },
      {
        "title": "Smart segments",
        "text": "Group guests by source, spend, stay type or last visit for targeted offers."
      },
      {
        "title": "Loyalty and rewards",
        "text": "Member rates and perks that make booking direct the obvious choice."
      },
      {
        "title": "Lead pipeline",
        "text": "Track wedding, MICE and corporate enquiries from first message to signed contract."
      },
      {
        "title": "Lead scoring and auto follow-ups",
        "text": "Every enquiry tagged hot, warm or new, with timed follow-up sequences so no lead goes cold."
      },
      {
        "title": "Revenue insights",
        "text": "See repeat rate, lifetime value and the channels that bring your best guests."
      }
    ],
    "steps": [
      {
        "title": "Bring your data together",
        "text": "We import guests from your PMS, booking engine and past records."
      },
      {
        "title": "Set up segments",
        "text": "Groups built around how your property sells."
      },
      {
        "title": "Launch loyalty",
        "text": "Member rates and perks for returning guests."
      },
      {
        "title": "Run targeted campaigns",
        "text": "Offers timed to fill need dates."
      }
    ],
    "related": [
      "hotel-email-marketing",
      "hotel-whatsapp-marketing",
      "hotel-booking-engine"
    ],
    "faqs": [
      {
        "q": "What data does the hotel CRM store?",
        "a": "Guest contact details, stay history, preferences, spend, special dates and conversation history from connected channels."
      },
      {
        "q": "Can it import my existing guest data?",
        "a": "Yes. We import records from your PMS, booking engine, spreadsheets and past bookings during setup."
      },
      {
        "q": "Does it include a loyalty programme?",
        "a": "Yes. You can offer member rates and perks that reward guests for booking direct."
      },
      {
        "q": "Can I track sales leads for weddings and events?",
        "a": "Yes. The lead pipeline tracks group, MICE and corporate enquiries through each stage."
      },
      {
        "q": "Can I manage more than one property?",
        "a": "Yes. Hotel groups get centralised lead management across all their properties from one dashboard."
      }
    ]
  }
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

/** Merge into your existing app/sitemap.ts. */
export const productSitemapEntries = () => [
  { url: `${SITE_URL}/products/`, changeFrequency: "monthly" as const, priority: 0.8 },
  ...PRODUCTS.map((p) => ({
    url: productUrl(p.slug),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
];

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
  },
  // ── Added October 2026: nine more products, same template and fields as above ──
  {
    "slug": "hotel-ai-concierge",
    "name": "AI Concierge",
    "seo": {
      "title": "AI Concierge for Hotels | 24/7 Guest Assistance | Fielmente",
      "description": "An AI concierge that answers guest questions, recommends experiences and takes in-stay requests 24/7 on WhatsApp and the web — trained on your hotel.",
      "focusKeyword": "hotel AI concierge",
      "secondaryKeywords": [
        "AI concierge for hotels",
        "hotel guest messaging",
        "WhatsApp concierge for hotels",
        "24/7 hotel guest assistant"
      ]
    },
    "h1": "An AI concierge that looks after guests all day and all night",
    "intro": "Guests ask about breakfast timings, the spa, the nearest ATM or tomorrow's trek at any hour. The AI Concierge answers instantly from your hotel's own information, books in-house experiences and hands anything personal to your team.",
    "proof": "Answers guests 24/7",
    "summary": "A 24/7 digital concierge for every in-stay question and request",
    "photo": {
      "src": "/images/products/hotel-ai-concierge.jpg",
      "alt": "Illustration of the Fielmente AI Concierge answering a guest question and booking a spa slot"
    },
    "screenshot": {
      "src": "/products/AI-Concierge-Desk.png",
      "alt": "AI concierge answering hotel guest questions on a screen"
    },
    "without": [
      "The front desk answers the same questions dozens of times a day",
      "Late-night questions wait until morning, or go unanswered",
      "Spa, dining and activity upsells depend on who is on shift"
    ],
    "withFielmente": [
      "Instant answers from your hotel's own knowledge base",
      "Guests get help at 3 am as easily as at 3 pm",
      "Every conversation suggests the right in-house experience"
    ],
    "features": [
      {
        "title": "Trained on your property",
        "text": "Built from your website, menus, policies and PDFs, so answers are specific to your hotel — not generic."
      },
      {
        "title": "Where guests already are",
        "text": "Works on WhatsApp and your website, and via a QR code in rooms and at reception."
      },
      {
        "title": "Experiences and upsells",
        "text": "Recommends and books spa slots, dining, transfers and activities at the right moment in the stay."
      },
      {
        "title": "Local recommendations",
        "text": "Suggests nearby sights, cafés and walks you've approved, with directions."
      },
      {
        "title": "Answers in the guest's language",
        "text": "Replies in the language the guest writes in, including Hindi and English."
      },
      {
        "title": "Smooth hand-off to staff",
        "text": "Anything personal, sensitive or unusual goes straight to your team with the full conversation."
      }
    ],
    "steps": [
      {
        "title": "Share your hotel's information",
        "text": "Website, menus, room details, policies and local tips — we build the knowledge base."
      },
      {
        "title": "Set the tone",
        "text": "We match your brand voice and decide what the concierge handles and what goes to staff."
      },
      {
        "title": "Go live in rooms and online",
        "text": "WhatsApp number, website widget and in-room QR codes, tested with your team."
      },
      {
        "title": "Improve every week",
        "text": "We review unanswered questions and add them, so the concierge gets smarter over time."
      }
    ],
    "related": [
      "hotel-guest-request-management",
      "hotel-ai-chatbot",
      "hotel-whatsapp-marketing"
    ],
    "faqs": [
      {
        "q": "What can guests ask the AI Concierge?",
        "a": "Anything your team would normally answer: timings, amenities, room features, policies, local recommendations, and requests like a spa booking or an airport transfer."
      },
      {
        "q": "What happens when it doesn't know an answer?",
        "a": "It says so politely and passes the conversation to your staff, with the full context, instead of guessing."
      },
      {
        "q": "Does it replace my front desk team?",
        "a": "No. It takes the repetitive questions off their plate so they can spend more time with guests in person."
      },
      {
        "q": "Can it take requests like extra towels?",
        "a": "Yes. Requests are logged in Guest Request Management and routed to the right department."
      }
    ]
  },
  {
    "slug": "hotel-ai-reservation-desk",
    "name": "AI Reservation Desk",
    "seo": {
      "title": "AI Reservation Desk for Hotels | Fielmente",
      "description": "An AI reservation assistant that checks availability, shares room options and sends payment links on WhatsApp and your website, turning enquiries into bookings.",
      "focusKeyword": "AI reservation desk for hotels",
      "secondaryKeywords": [
        "hotel reservation chatbot",
        "WhatsApp booking assistant for hotels",
        "hotel enquiry automation",
        "AI hotel booking assistant"
      ]
    },
    "h1": "A reservation desk that never lets a booking enquiry go cold",
    "intro": "Most booking enquiries arrive in the evening, on weekends and on WhatsApp. The AI Reservation Desk replies in seconds with live availability and rates, shares rooms and packages, and sends a secure payment link to confirm the stay.",
    "proof": "Replies to booking enquiries in seconds",
    "summary": "Turns booking enquiries into confirmed reservations, round the clock",
    "photo": {
      "src": "/images/products/hotel-ai-reservation-desk.jpg",
      "alt": "Illustration of the Fielmente AI Reservation Desk sharing room rates and a payment link in chat"
    },
    "screenshot": {
      "src": "/products/ai-reservation-desk.png",
      "alt": "AI reservation desk confirming a hotel booking in chat"
    },
    "without": [
      "Enquiries sit unanswered after hours and guests book an OTA instead",
      "Staff copy rates by hand and quotes go out inconsistent",
      "No record of which enquiries turned into bookings"
    ],
    "withFielmente": [
      "Every enquiry gets an instant reply with real availability",
      "Room options, packages and payment link in one conversation",
      "Every enquiry tracked from first message to confirmed booking"
    ],
    "features": [
      {
        "title": "Live availability and rates",
        "text": "Reads your booking engine in real time, so guests only see rooms you can actually sell."
      },
      {
        "title": "Room and package suggestions",
        "text": "Recommends the right room or package for the dates, guests and budget, with photos."
      },
      {
        "title": "Payment links in chat",
        "text": "Sends a secure payment link for a full payment or deposit, and confirms once paid."
      },
      {
        "title": "WhatsApp, website and Instagram",
        "text": "Handles enquiries wherever they arrive, in one consistent voice."
      },
      {
        "title": "Follow-ups that recover bookings",
        "text": "Nudges guests who went quiet with a friendly reminder or a better-fit option."
      },
      {
        "title": "Enquiry-to-booking reporting",
        "text": "See how many enquiries came in, how fast they were answered and how many booked."
      }
    ],
    "steps": [
      {
        "title": "Connect your rooms and rates",
        "text": "We link the desk to your booking engine, rate plans and policies."
      },
      {
        "title": "Write the playbook",
        "text": "Greetings, upsells, deposit rules and when to hand over to your reservations team."
      },
      {
        "title": "Switch on your channels",
        "text": "WhatsApp, website chat and Instagram, tested end to end."
      },
      {
        "title": "Tune for conversion",
        "text": "We review conversations monthly and adjust offers and follow-ups."
      }
    ],
    "related": [
      "hotel-booking-engine",
      "hotel-payment-gateway",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "Does the AI Reservation Desk take payments?",
        "a": "It sends a secure payment link through our payment gateway. The guest pays on a hosted page; the desk confirms once the payment is received."
      },
      {
        "q": "Will it quote the wrong rate?",
        "a": "It reads live rates and availability from your booking engine, so it quotes exactly what you sell on your website."
      },
      {
        "q": "Can my team take over a conversation?",
        "a": "Yes, at any point. Your team sees every conversation and can step in with one click."
      },
      {
        "q": "Does it work for groups and weddings?",
        "a": "It collects the details of group and event enquiries and passes them to your sales team as a qualified lead."
      }
    ]
  },
  {
    "slug": "hotel-ai-front-desk",
    "name": "AI Front Desk",
    "seo": {
      "title": "AI Front Desk for Hotels | Digital Check-in | Fielmente",
      "description": "Pre-arrival check-in, digital registration, arrival messages and express check-out — an AI front desk that shortens queues and frees your team for guests.",
      "focusKeyword": "AI front desk for hotels",
      "secondaryKeywords": [
        "hotel self check-in",
        "pre-arrival check-in",
        "digital front desk for hotels",
        "contactless hotel check-in"
      ]
    },
    "h1": "A front desk that works before guests even arrive",
    "intro": "Collect guest details before arrival, welcome guests with everything they need, and let them check out with a tap. The AI Front Desk handles the paperwork and routine questions so your team can focus on hospitality.",
    "proof": "Pre-arrival check-in, no queue",
    "summary": "Faster check-in, check-out and arrival help — without the queue",
    "photo": {
      "src": "/images/products/hotel-ai-front-desk.jpg",
      "alt": "Illustration of a guest completing pre-arrival check-in with the Fielmente AI Front Desk"
    },
    "screenshot": {
      "src": "/products/ai-front-desk.png",
      "alt": "Self-service AI front desk screen in a hotel lobby"
    },
    "without": [
      "Guests fill the same forms at reception after a long journey",
      "Peak check-in hours mean queues and rushed welcomes",
      "Check-out means waiting for a printed bill"
    ],
    "withFielmente": [
      "Guest details collected online before arrival",
      "A calm lobby with a personal welcome, not paperwork",
      "Express check-out with the bill and payment link on WhatsApp"
    ],
    "features": [
      {
        "title": "Pre-arrival check-in",
        "text": "Guests share their details and arrival time online before they reach the hotel."
      },
      {
        "title": "Digital guest registration",
        "text": "Guest registration details and ID collected securely, ready for your records."
      },
      {
        "title": "Arrival and welcome messages",
        "text": "Directions, parking, Wi-Fi and breakfast timings sent automatically before and on arrival."
      },
      {
        "title": "Lobby screen or tablet",
        "text": "An optional self-service screen at reception for arrivals, questions and requests."
      },
      {
        "title": "Express check-out",
        "text": "Bill summary and payment link sent on WhatsApp, with a thank-you and review request."
      },
      {
        "title": "Review requests at the right time",
        "text": "Happy guests are invited to review you on Google as they leave."
      }
    ],
    "steps": [
      {
        "title": "Map your arrival flow",
        "text": "Check-in times, required details, deposits and policies."
      },
      {
        "title": "Brand the experience",
        "text": "Messages, forms and screens in your hotel's look and voice."
      },
      {
        "title": "Train your team",
        "text": "A short session so reception knows exactly what arrives pre-filled."
      },
      {
        "title": "Measure and refine",
        "text": "Track pre-arrival completion and check-out times, then improve."
      }
    ],
    "related": [
      "hotel-ai-concierge",
      "hotel-guest-request-management",
      "hotel-payment-gateway"
    ],
    "faqs": [
      {
        "q": "Do guests need to download an app?",
        "a": "No. Everything works through WhatsApp and a web link on the guest's phone."
      },
      {
        "q": "Is guest data stored securely?",
        "a": "Yes. Guest data is stored on Eazotel's secure cloud infrastructure and is only visible to your authorised staff."
      },
      {
        "q": "Can we still check guests in the traditional way?",
        "a": "Of course. Guests who haven't pre-checked in are welcomed as usual; the AI Front Desk simply reduces how many need to."
      },
      {
        "q": "Does it work for small properties?",
        "a": "Yes. Boutique hotels and homestays often benefit most, because there's no one at the desk all day."
      }
    ]
  },
  {
    "slug": "hotel-guest-request-management",
    "name": "Guest Request Management",
    "seo": {
      "title": "Guest Request Management System for Hotels | Fielmente",
      "description": "Guests raise requests by QR code or WhatsApp; your team sees them by department with timers and status updates, so nothing slips through.",
      "focusKeyword": "hotel guest request management",
      "secondaryKeywords": [
        "guest request software for hotels",
        "housekeeping request tracking",
        "hotel service request system",
        "in-stay guest requests"
      ]
    },
    "h1": "Every guest request, logged, routed and closed on time",
    "intro": "Extra towels, a leaking tap, a late checkout — requests arrive by phone, WhatsApp and in person, and some get lost. Guest Request Management puts every request in one place, sends it to the right department and keeps the guest updated.",
    "proof": "One board for every guest request",
    "summary": "Every guest request logged, routed and closed on time",
    "photo": {
      "src": "/images/products/hotel-guest-request-management.jpg",
      "alt": "Illustration of the Fielmente guest request board with open requests by department"
    },
    "screenshot": {
      "src": "/products/guest-requests.png",
      "alt": "Guest request dashboard showing open requests by department"
    },
    "without": [
      "Requests scribbled on paper or lost in phone calls",
      "Guests chase the same request twice — and mention it in reviews",
      "No way to see which department is slow"
    ],
    "withFielmente": [
      "Every request logged the moment a guest raises it",
      "Automatic routing to housekeeping, maintenance or F&B",
      "Response times tracked, so managers can fix bottlenecks"
    ],
    "features": [
      {
        "title": "QR code and WhatsApp requests",
        "text": "Guests scan a QR in the room or message on WhatsApp — no app, no phone call."
      },
      {
        "title": "Routing by department",
        "text": "Requests go straight to the right team, with room number and details attached."
      },
      {
        "title": "Timers and escalations",
        "text": "Each request has a target time; overdue ones escalate to a supervisor."
      },
      {
        "title": "Guest status updates",
        "text": "Guests are told when a request is accepted and when it's done."
      },
      {
        "title": "Staff task view",
        "text": "Each staff member sees their open tasks on their phone and closes them with a tap."
      },
      {
        "title": "Service reports",
        "text": "Requests by type, room and department, with average response times."
      }
    ],
    "steps": [
      {
        "title": "Set up departments",
        "text": "Housekeeping, maintenance, F&B, front office — with the right people in each."
      },
      {
        "title": "Agree response times",
        "text": "Target times per request type and who gets escalations."
      },
      {
        "title": "Place QR codes",
        "text": "Branded QR cards for every room and common area."
      },
      {
        "title": "Review weekly",
        "text": "Use the reports to spot slow areas and repeat issues."
      }
    ],
    "related": [
      "hotel-ai-concierge",
      "hotel-ai-front-desk",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "How do guests raise a request?",
        "a": "By scanning the QR code in their room or sending a WhatsApp message. The AI Concierge can also log requests for them."
      },
      {
        "q": "Do staff need a separate app?",
        "a": "Staff use a simple mobile view in the browser to see and close their tasks."
      },
      {
        "q": "Can we set different target times for different requests?",
        "a": "Yes. A towel request and a maintenance issue can have different target times and escalation rules."
      },
      {
        "q": "Does it help with reviews?",
        "a": "Fast, visible service is one of the biggest drivers of good reviews, and it lets you fix problems before guests check out."
      }
    ]
  },
  {
    "slug": "hotel-ai-voice-agent",
    "name": "AI Voice Agent",
    "seo": {
      "title": "AI Voice Agent for Hotels | 24/7 Calls | Fielmente",
      "description": "An AI voice agent that answers hotel calls in a natural voice, handles common questions, captures booking enquiries and hands callers to your team.",
      "focusKeyword": "hotel AI voice agent",
      "secondaryKeywords": [
        "AI phone answering for hotels",
        "hotel call answering service",
        "AI receptionist for hotels",
        "voice bot for hotels"
      ]
    },
    "h1": "Never miss a booking call again",
    "intro": "Calls come in while reception is busy, at night and during peak season. The AI Voice Agent answers every call in a natural voice, handles common questions, captures booking details and transfers to your team when a caller needs a person.",
    "proof": "Every call answered, even at peak hours",
    "summary": "Answers every call in a natural voice, day and night",
    "photo": {
      "src": "/images/products/hotel-ai-voice-agent.jpg",
      "alt": "Illustration of the Fielmente AI Voice Agent answering a hotel booking call"
    },
    "screenshot": {
      "src": "/products/AI-Voice-Agent.png",
      "alt": "AI voice agent handling hotel phone calls"
    },
    "without": [
      "Calls ring out during check-in rush and after midnight",
      "Callers who can't get through book somewhere else",
      "No record of what callers asked or wanted"
    ],
    "withFielmente": [
      "Every call answered on the first ring",
      "Booking enquiries captured with dates, guests and contact details",
      "Call summaries saved to the CRM for follow-up"
    ],
    "features": [
      {
        "title": "Natural voice conversations",
        "text": "Speaks and understands naturally, including Hindi and English."
      },
      {
        "title": "Knows your property",
        "text": "Uses the same knowledge base as your AI Concierge and Chatbot."
      },
      {
        "title": "Booking enquiries captured",
        "text": "Takes dates, guests and preferences, then sends the caller a WhatsApp follow-up."
      },
      {
        "title": "Transfer to your team",
        "text": "Passes the call to reception or reservations when the caller asks for a person."
      },
      {
        "title": "Call summaries and transcripts",
        "text": "Every call summarised and saved to the guest's record."
      },
      {
        "title": "Out-of-hours cover",
        "text": "Answers overnight and on holidays, so no call goes to voicemail."
      }
    ],
    "steps": [
      {
        "title": "Build the knowledge base",
        "text": "The same hotel information that powers your chat assistants."
      },
      {
        "title": "Design the call flow",
        "text": "Greeting, common questions, booking capture and transfer rules."
      },
      {
        "title": "Connect your number",
        "text": "Forward your existing number or use a new one for campaigns."
      },
      {
        "title": "Listen and improve",
        "text": "We review call summaries and refine answers every month."
      }
    ],
    "related": [
      "hotel-call-management-system",
      "hotel-ai-reservation-desk",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "Will callers know they're speaking to an AI?",
        "a": "The agent introduces itself as the hotel's virtual assistant. Callers can ask for a person at any time."
      },
      {
        "q": "Can it take a booking over the phone?",
        "a": "It captures the booking details and sends the caller a WhatsApp message with room options and a payment link to confirm."
      },
      {
        "q": "Do I need a new phone number?",
        "a": "No. Calls to your existing number can be forwarded to the agent, for example when reception is busy or after hours."
      },
      {
        "q": "Which languages does it speak?",
        "a": "It handles Hindi and English conversations; talk to us about other languages for your market."
      }
    ]
  },
  {
    "slug": "hotel-call-management-system",
    "name": "Call Management System",
    "seo": {
      "title": "Hotel Call Management & Call Tracking | Fielmente",
      "description": "Virtual numbers, smart routing, call recording, missed-call alerts and campaign call tracking, so every guest call is answered and measured.",
      "focusKeyword": "hotel call management system",
      "secondaryKeywords": [
        "hotel call tracking",
        "missed call follow-up for hotels",
        "call recording for hotels",
        "call analytics for hotels"
      ]
    },
    "h1": "Every guest call answered, routed and measured",
    "intro": "Phone calls are still where many bookings happen. The Call Management System gives your hotel smart numbers, routes calls to the right person, records conversations and shows which campaigns make the phone ring.",
    "proof": "Every call tracked to its source",
    "summary": "Route, record and track every guest call in one place",
    "photo": {
      "src": "/images/products/hotel-call-management-system.jpg",
      "alt": "Illustration of the Fielmente call dashboard showing calls by source and missed-call follow-ups"
    },
    "screenshot": {
      "src": "/products/call-management.png",
      "alt": "Call dashboard showing answered and missed calls by source"
    },
    "without": [
      "Calls bounce between reception and reservations",
      "Missed calls are never called back",
      "You can't tell which ads or pages bring in phone bookings"
    ],
    "withFielmente": [
      "Calls routed straight to reservations, front desk or sales",
      "Missed calls trigger an alert and a WhatsApp follow-up",
      "Call tracking by campaign, so phone bookings count in your marketing"
    ],
    "features": [
      {
        "title": "Virtual numbers",
        "text": "Local or toll-free numbers for your hotel, campaigns and website."
      },
      {
        "title": "IVR and smart routing",
        "text": "Press 1 for reservations, 2 for the front desk — or route by time of day."
      },
      {
        "title": "Call recording",
        "text": "Recordings for training and quality checks, with caller consent messaging."
      },
      {
        "title": "Missed-call alerts",
        "text": "Your team is alerted instantly and the caller gets a WhatsApp message."
      },
      {
        "title": "Campaign call tracking",
        "text": "Separate numbers per campaign show exactly which ads drive calls."
      },
      {
        "title": "Call analytics",
        "text": "Answered, missed and returned calls by hour, day, source and staff member."
      }
    ],
    "steps": [
      {
        "title": "Plan your numbers",
        "text": "Main line, reservations and one number per campaign or channel."
      },
      {
        "title": "Design routing",
        "text": "Who answers what, when — and what happens after hours."
      },
      {
        "title": "Connect to your marketing",
        "text": "Tracking numbers on ads, landing pages and listings."
      },
      {
        "title": "Review the numbers",
        "text": "Monthly reports on answer rates and calls by source."
      }
    ],
    "related": [
      "hotel-ai-voice-agent",
      "hotel-crm",
      "hotel-whatsapp-marketing"
    ],
    "faqs": [
      {
        "q": "Can I keep my existing hotel number?",
        "a": "Yes. You can keep your main number and add tracking numbers for campaigns."
      },
      {
        "q": "How does call tracking help my marketing?",
        "a": "Each campaign gets its own number, so you can see which ads and pages generate phone enquiries — and let Google optimise toward them."
      },
      {
        "q": "What happens when a call is missed?",
        "a": "Your team gets an alert and the caller receives a WhatsApp message offering help, so the enquiry isn't lost."
      },
      {
        "q": "Can calls go to the AI Voice Agent?",
        "a": "Yes. You can route calls to the AI Voice Agent after hours or when all lines are busy."
      }
    ]
  },
  {
    "slug": "hotel-channel-manager",
    "name": "Channel Manager",
    "seo": {
      "title": "Hotel Channel Manager | Rates & Inventory Sync | Fielmente",
      "description": "Keep rates and availability in sync across Booking.com, Agoda, MakeMyTrip, Goibibo, Airbnb and your booking engine — and stop overbookings for good.",
      "focusKeyword": "hotel channel manager",
      "secondaryKeywords": [
        "OTA channel manager",
        "rate and inventory sync",
        "channel manager for small hotels",
        "hotel channel manager India"
      ]
    },
    "h1": "Sell on every channel without selling the same room twice",
    "intro": "Update a rate or close a room once, and it changes everywhere. The Channel Manager keeps inventory and rates in sync across your OTAs and your own booking engine, so you can sell widely without overbookings.",
    "proof": "One update for every channel",
    "summary": "Rates and inventory in sync across every OTA and your website",
    "photo": {
      "src": "/images/products/hotel-channel-manager.jpg",
      "alt": "Illustration of the Fielmente channel manager with rates in sync across OTAs and the hotel website"
    },
    "screenshot": {
      "src": "/products/channel-manager.png",
      "alt": "Channel manager showing rates synced across OTAs"
    },
    "without": [
      "Rates updated one extranet at a time",
      "Overbookings when two channels sell the last room",
      "Your website often shows a worse rate than an OTA"
    ],
    "withFielmente": [
      "One calendar for rates and inventory across every channel",
      "Availability updates everywhere as soon as a room sells",
      "Rate rules that keep your direct rate the best one"
    ],
    "features": [
      {
        "title": "Real-time inventory sync",
        "text": "A booking on any channel updates availability everywhere else."
      },
      {
        "title": "Major OTAs connected",
        "text": "Booking.com, Agoda, MakeMyTrip, Goibibo, Airbnb and more, plus your booking engine."
      },
      {
        "title": "Rate rules and parity",
        "text": "Set channel-specific markups and keep your direct rate the most attractive."
      },
      {
        "title": "Bulk calendar updates",
        "text": "Change rates, restrictions and stop-sells for a date range in one go."
      },
      {
        "title": "All bookings in one place",
        "text": "OTA and direct reservations flow into one list with guest details."
      },
      {
        "title": "Channel performance",
        "text": "See which channels bring bookings, revenue and commissions."
      }
    ],
    "steps": [
      {
        "title": "Map rooms and rate plans",
        "text": "We match your room types and plans to each channel."
      },
      {
        "title": "Connect your channels",
        "text": "OTA extranets and your booking engine, tested with live dates."
      },
      {
        "title": "Set your rules",
        "text": "Markups, restrictions and parity rules per channel."
      },
      {
        "title": "Shift share to direct",
        "text": "Use channel reports to grow direct bookings over time."
      }
    ],
    "related": [
      "hotel-booking-engine",
      "hotel-payment-gateway",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "Which OTAs can I connect?",
        "a": "Major OTAs used by Indian hotels, including Booking.com, Agoda, MakeMyTrip, Goibibo and Airbnb. Talk to us about any other channel you use."
      },
      {
        "q": "Will it stop overbookings?",
        "a": "It updates availability across channels when a room sells, which prevents overbookings caused by channels selling out of sync."
      },
      {
        "q": "Does it work with the Fielmente Booking Engine?",
        "a": "Yes. The booking engine and channel manager share one inventory, so your website always shows live availability."
      },
      {
        "q": "Can I set different rates per channel?",
        "a": "Yes. You can add channel-specific markups and restrictions while keeping your direct rate the best."
      }
    ]
  },
  {
    "slug": "hotel-social-media-management-tool",
    "name": "Social Media Management",
    "seo": {
      "title": "Hotel Social Media Management Tool | Fielmente",
      "description": "Plan a content calendar, write captions with AI, schedule posts to Instagram and Facebook and track what drives enquiries — built for hotels.",
      "focusKeyword": "hotel social media management tool",
      "secondaryKeywords": [
        "social media scheduling for hotels",
        "hotel content calendar",
        "Instagram tool for hotels",
        "social media dashboard for hotels"
      ]
    },
    "h1": "Your hotel's social media, planned, posted and measured in one place",
    "intro": "Keep a steady flow of posts without the scramble. Plan a month of content, draft captions with AI, get approvals, schedule to your channels and see which posts bring in enquiries.",
    "proof": "One calendar for every post",
    "summary": "Plan, create, schedule and measure every post from one dashboard",
    "photo": {
      "src": "/images/products/hotel-social-media-management-tool.jpg",
      "alt": "Illustration of the Fielmente social media content calendar for a hotel"
    },
    "screenshot": {
      "src": "/products/social-media-tool.png",
      "alt": "Hotel social media content calendar on screen"
    },
    "without": [
      "Posting whenever someone finds the time",
      "Captions written from scratch every time",
      "No idea which posts actually bring enquiries"
    ],
    "withFielmente": [
      "A month of content planned and scheduled ahead",
      "On-brand captions and hashtags drafted with AI",
      "Reports that link posts to profile visits and enquiries"
    ],
    "features": [
      {
        "title": "Content calendar",
        "text": "Plan posts, reels and stories around seasons, festivals and offers."
      },
      {
        "title": "AI captions and hashtags",
        "text": "Draft captions in your brand voice, then edit and approve."
      },
      {
        "title": "Scheduling",
        "text": "Schedule to Instagram and Facebook in advance."
      },
      {
        "title": "Approval workflow",
        "text": "Owners or managers approve posts before they go live."
      },
      {
        "title": "Media library",
        "text": "Keep approved photos and videos organised by room, venue and season."
      },
      {
        "title": "Performance reports",
        "text": "Reach, engagement and profile actions by post and by month."
      }
    ],
    "steps": [
      {
        "title": "Connect your accounts",
        "text": "Instagram and Facebook pages, with the right team access."
      },
      {
        "title": "Build your library",
        "text": "Upload photos and videos, and set your brand voice."
      },
      {
        "title": "Plan the month",
        "text": "A calendar around your offers, seasons and events."
      },
      {
        "title": "Measure and repeat",
        "text": "Keep what works, drop what doesn't."
      }
    ],
    "related": [
      "hotel-conversational-tool",
      "hotel-whatsapp-marketing",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "Can your team manage our social media for us?",
        "a": "Yes. Fielmente also offers fully managed social media for hotels, restaurants, resorts and homestays, using this same tool."
      },
      {
        "q": "Which platforms can I post to?",
        "a": "Instagram and Facebook. Talk to us about other channels you use."
      },
      {
        "q": "Does the AI write posts automatically?",
        "a": "It drafts captions and hashtags for you to edit and approve. Nothing is posted without approval."
      },
      {
        "q": "Can several people work on it?",
        "a": "Yes. Your team and ours can plan, draft and approve posts together."
      }
    ]
  },
  {
    "slug": "hotel-conversational-tool",
    "name": "Conversational Tool",
    "seo": {
      "title": "Hotel Conversational Tool | One Guest Inbox | Fielmente",
      "description": "Bring WhatsApp, Instagram DMs, Messenger, website chat and email into one shared inbox, with AI-suggested replies, team assignment and every guest's history.",
      "focusKeyword": "hotel conversational tool",
      "secondaryKeywords": [
        "shared inbox for hotels",
        "WhatsApp inbox for hotels",
        "omnichannel guest messaging",
        "hotel team inbox"
      ]
    },
    "h1": "One inbox for every guest conversation",
    "intro": "Guests message on WhatsApp, Instagram, your website and email — and replies get missed between phones and logins. The Conversational Tool brings every message into one shared inbox, with AI help to reply faster.",
    "proof": "One inbox for every channel",
    "summary": "One inbox for WhatsApp, Instagram, web chat and email",
    "photo": {
      "src": "/images/products/hotel-conversational-tool.jpg",
      "alt": "Illustration of the Fielmente shared inbox with WhatsApp, Instagram and web chat messages"
    },
    "screenshot": {
      "src": "/products/conversational-tool.png",
      "alt": "Shared hotel inbox with WhatsApp, Instagram and web chat messages"
    },
    "without": [
      "Messages spread across personal phones and apps",
      "Guests wait hours — or never hear back",
      "No history when a returning guest writes in"
    ],
    "withFielmente": [
      "Every channel in one shared inbox",
      "AI-suggested replies and saved answers for common questions",
      "The guest's full history beside every conversation"
    ],
    "features": [
      {
        "title": "Shared multichannel inbox",
        "text": "WhatsApp, Instagram, Messenger, website chat and email in one place."
      },
      {
        "title": "AI-suggested replies",
        "text": "Draft replies from your knowledge base, ready to send or edit."
      },
      {
        "title": "Assignment and notes",
        "text": "Assign conversations to reservations, sales or front office, with internal notes."
      },
      {
        "title": "Saved replies and templates",
        "text": "One-click answers for rates, directions, check-in times and more."
      },
      {
        "title": "Connected to the CRM",
        "text": "Every conversation saved to the guest's profile and lead stage."
      },
      {
        "title": "Response-time tracking",
        "text": "See how fast your team replies, by channel and by person."
      }
    ],
    "steps": [
      {
        "title": "Connect your channels",
        "text": "WhatsApp Business, Instagram, Facebook, website chat and email."
      },
      {
        "title": "Set up your team",
        "text": "Departments, assignment rules and working hours."
      },
      {
        "title": "Load saved replies",
        "text": "Your most common answers, written once and reused."
      },
      {
        "title": "Switch on AI help",
        "text": "AI-suggested replies and the chatbot for after-hours cover."
      }
    ],
    "related": [
      "hotel-ai-chatbot",
      "hotel-whatsapp-marketing",
      "hotel-crm"
    ],
    "faqs": [
      {
        "q": "Which channels can I connect?",
        "a": "WhatsApp Business, Instagram DMs, Facebook Messenger, website live chat and email."
      },
      {
        "q": "Can several staff reply from the same WhatsApp number?",
        "a": "Yes. The whole team works from one shared inbox, so there's no need to pass a phone around."
      },
      {
        "q": "Does it work with the AI Chatbot?",
        "a": "Yes. The chatbot answers first, and hands over to your team inside the same inbox."
      },
      {
        "q": "Is conversation history kept?",
        "a": "Yes. Every conversation is saved to the guest's record in the CRM."
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

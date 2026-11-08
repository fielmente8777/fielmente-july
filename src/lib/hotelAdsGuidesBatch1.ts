export const hotelAdsGuideBatch1 = [
  {
    "slug": "google-hotel-center-setup-guide-2026",
    "title": "How to Set Up Google Hotel Center for Your Hotel in 2026",
    "description": "Set up Google Hotel Center with a hotel list, booking engine, prices, property matching and a verified booking path. Practical 2026 checklist.",
    "category": "Connectivity",
    "primary": "Google Hotel Center setup",
    "intro": [
      "Google Hotel Center is not the same as a Google Ads campaign or a Google Business Profile. It is the operational layer that connects property details, accommodation rates and booking links to Google's hotel discovery experience.",
      "For an independent hotel, the fastest reliable starting point is often a booking engine or connectivity provider that already supports Google hotel prices. Direct technical integration is also possible for eligible suppliers, but a feed requires ongoing maintenance."
    ],
    "flow": [
      "Hotel PMS / booking engine",
      "Connectivity partner or direct feed",
      "Google Hotel Center",
      "Matched hotel + accurate booking links"
    ],
    "sections": [
      {
        "heading": "Choose your integration model before opening accounts",
        "body": [
          "Ask your booking engine or channel manager whether it already sends rates to Google and whether it controls the Hotel Center account. You may not need a separate feed; duplicating an existing connection can create operational confusion.",
          "Identify the person who will own Hotel Center access and the person who will approve any Google Ads linking request. Keep those roles documented for future agency handovers."
        ],
        "checklist": [
          "Confirm who supplies the live price and availability feed.",
          "Ask whether the provider supports free booking links and paid Hotel Ads.",
          "Obtain the Hotel Center account ID and owner contact."
        ]
      },
      {
        "heading": "Prepare the property and price data",
        "body": [
          "The property list should include a consistent name, full street address, location and identifiers. Inconsistent hotel names or nearby duplicate Maps listings can prevent matching.",
          "Prices must correspond to genuine bookable inventory for specific arrival dates, lengths of stay and occupancy. Ensure taxes, mandatory fees, refundable conditions and local currency are represented consistently from Google to the final booking page."
        ],
        "checklist": [
          "Review the Google Business Profile details and map pin.",
          "Test a real booking itinerary on mobile and desktop.",
          "Compare the all-in Google rate with the final booking price."
        ]
      },
      {
        "heading": "Validate your Hotel Center participation",
        "body": [
          "Use Hotel Center's property details and Reports sections to check whether properties match, whether your booking link resolves and whether price accuracy is acceptable. An imported hotel is not automatically a participating hotel.",
          "When the property and feed are healthy, consider linking a non-manager Google Ads account through Tools → Data Manager. Google says Hotel campaign types can take up to 72 hours to appear after linking."
        ],
        "checklist": [
          "Check property match status and landing-page coverage.",
          "Review price accuracy trends and feed diagnostics.",
          "Run a controlled live search without assuming every rate must be shown."
        ]
      },
      {
        "heading": "Define a sustainable weekly operating check",
        "body": [
          "Treat hotel connectivity as an ongoing revenue operation. Rates, taxes and stay restrictions change, so a setup that was accurate at launch can drift over time.",
          "Assign ownership of feed alerts, booking-page testing and Hotel Center reporting. An audit trail of changes makes it easier to diagnose falling participation."
        ],
        "checklist": [
          "Review missing prices and failed itineraries weekly.",
          "Monitor booking-engine availability after property updates.",
          "Record the date and owner of each resolved issue."
        ]
      }
    ],
    "mistakes": [
      "Creating a new feed before checking whether an approved partner already supplies data.",
      "Treating an Ads account link as proof that bookable room prices are healthy.",
      "Sending only a room rate when the final page requires additional fees."
    ],
    "faqs": [
      {
        "q": "Can a hotel owner use an integration partner?",
        "a": "Yes. Google's hotel onboarding guidance recommends an integration partner for many properties, while eligible suppliers can investigate direct integration."
      },
      {
        "q": "Does Hotel Center replace Google Business Profile?",
        "a": "No. Business Profile supports local business details; Hotel Center manages hotel inventory, prices and booking links."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/9238463?hl=en",
      "https://support.google.com/hotelprices/answer/10472993?hl=en"
    ]
  },
  {
    "slug": "find-google-hotel-center-id-google-ads-customer-id",
    "title": "How to Find Your Google Hotel Center ID and Google Ads Customer ID",
    "description": "Understand the difference between a Hotel Center Account ID, property ID and 10-digit Google Ads customer ID before linking hotel accounts.",
    "category": "Connectivity",
    "primary": "Google Hotel Center ID",
    "intro": [
      "A hotel often has several identifiers: the Google Ads customer ID, Google Hotel Center account ID and an individual property or hotel ID. They are related to different objects, so copying the wrong number delays a link request.",
      "The correct ID depends on the direction of the connection. When Google Ads initiates the link, it asks for the Hotel Center Account ID. When Hotel Center initiates the link, the operator supplies a Google Ads customer ID."
    ],
    "flow": [
      "Hotel owner identifies accounts",
      "Confirm account-level versus property ID",
      "Send request from one platform",
      "Owner approves on the other platform"
    ],
    "sections": [
      {
        "heading": "Know which ID belongs to which platform",
        "body": [
          "A Google Ads customer ID identifies the advertiser account that manages campaigns, budgets and conversions. It normally appears as a ten-digit number formatted in three groups.",
          "The Hotel Center account ID identifies the Hotel Center account containing the travel feed. A property ID identifies a particular hotel in that feed; it is not a substitute for the account ID."
        ],
        "checklist": [
          "Write down the Google Ads customer ID and account name.",
          "Write down the Hotel Center account ID and owner name.",
          "Identify the correct hotel property IDs if linking only a subset."
        ]
      },
      {
        "heading": "Find the Google Ads customer ID",
        "body": [
          "Sign in to the intended Google Ads account and inspect the account header or account selector for the customer ID. Check that you are not looking at the manager account when the Hotel campaign will run in a client account.",
          "If a marketing agency handles several hotels, record the Ads ID next to the hotel's legal or trading name. Avoid sending screenshots that expose unrelated accounts."
        ],
        "checklist": [
          "Select the advertiser account, not the umbrella manager by mistake.",
          "Copy the ten-digit ID without altering digits.",
          "Verify you have admin permissions for the linking workflow."
        ]
      },
      {
        "heading": "Locate the Hotel Center account ID safely",
        "body": [
          "Open the relevant Hotel Center account and check its account selector or account settings for the account identifier. Ask the Hotel Center owner or booking engine partner to confirm the ID if the interface does not expose it clearly.",
          "A hotel can have a connectivity provider managing Hotel Center on its behalf. In that case, document the provider and approval contact rather than requesting passwords."
        ],
        "checklist": [
          "Confirm the identifier is the Hotel Center Account ID.",
          "Verify the property is actually listed in that account.",
          "Request permission-based approval instead of shared credentials."
        ]
      },
      {
        "heading": "Use the ID in the right linking direction",
        "body": [
          "From Google Ads, open Tools → Data Manager → Google Hotel Center and enter the Hotel Center Account ID. An owner will then review the request inside Hotel Center.",
          "From Hotel Center, open Account settings, initiate an account link using the Google Ads customer ID, choose properties and send. The Google Ads administrator approves the incoming request in Data Manager."
        ],
        "checklist": [
          "Document which account sent the request.",
          "Confirm the recipient sees the request.",
          "Check for Linked or Manage link status after approval."
        ]
      }
    ],
    "mistakes": [
      "Confusing a single property's hotel ID with the Hotel Center account ID.",
      "Linking a manager account when the hotel campaign needs a non-manager advertising account.",
      "Sharing login passwords instead of using Google's approval flow."
    ],
    "faqs": [
      {
        "q": "Is a Google Ads customer ID the same as a Hotel Center Account ID?",
        "a": "No. They identify different Google products and are entered in different directions of the linking process."
      },
      {
        "q": "Can the Hotel Center owner approve a request without using the agency's Google Ads login?",
        "a": "Yes. The Google Ads user sends the request and the Hotel Center owner reviews it in their own Hotel Center account."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/7663773?hl=en"
    ]
  },
  {
    "slug": "connect-hotel-booking-engine-google-hotel-center",
    "title": "How to Connect a Hotel Booking Engine to Google Hotel Center",
    "description": "Learn how a hotel booking engine supplies prices and availability to Google Hotel Center, with a feed validation and direct-booking checklist.",
    "category": "Connectivity",
    "primary": "hotel booking engine Google Hotel Center",
    "intro": [
      "A booking engine is where your hotel accepts a reservation. Google Hotel Center is where the rates, availability and booking link data are prepared for eligible hotel surfaces. They need a maintained data connection; putting a booking button on a website is not enough.",
      "Since Google stopped supporting Google-sourced third-party hotel rates for Hotel Ads after 30 September 2026, hotels relying on those ads need a valid direct price feed through an integration partner or an appropriate Hotel Center connection."
    ],
    "flow": [
      "PMS inventory and restrictions",
      "Booking engine / connectivity partner",
      "Hotel Center price & landing-page data",
      "Google hotel booking links"
    ],
    "sections": [
      {
        "heading": "Check what the booking engine can actually supply",
        "body": [
          "Ask whether the provider supports Hotel Center hotel lists, price updates, tax and fee information, occupancy-based pricing and landing-page templates. Confirm support for real-time or frequent refreshes when rates change.",
          "A provider may offer Google free booking links but not campaign management, or campaign management without direct control of the price feed. Separate these responsibilities in the service agreement."
        ],
        "checklist": [
          "Confirm Google hotel rates integration is supported.",
          "Confirm which party owns Hotel Center access.",
          "Ask how frequently prices and availability refresh."
        ]
      },
      {
        "heading": "Map the hotel, inventory and URLs",
        "body": [
          "Use the correct property identifier and consistent hotel address, then map room inventory and booking rules from the reservation system. The feed and actual checkout path must agree about dates, occupancy, minimum stays and currency.",
          "A well-formed landing-page URL carries the itinerary into the booking engine so the traveller reaches a relevant bookable result rather than an empty home page."
        ],
        "checklist": [
          "Map hotel IDs and occupancy types.",
          "Check cancellation terms and mandatory fees.",
          "Verify that date and guest inputs survive the click."
        ]
      },
      {
        "heading": "Test the full booking journey",
        "body": [
          "Choose at least three real itineraries: an ordinary weekday, a high-demand weekend and a longer stay. Compare the total price exposed to Google with the final reservable price.",
          "Check both sold-out scenarios and available inventory. Showing an unavailable offer may trigger poor user experience and feed accuracy problems."
        ],
        "checklist": [
          "Test prices on both mobile and desktop.",
          "Complete a non-payment test booking if your booking system supports it.",
          "Inspect currency, taxes and any resort charges."
        ]
      },
      {
        "heading": "Connect advertising only after the feed is stable",
        "body": [
          "Once the Hotel Center property and prices are healthy, link the correct Google Ads account through Data Manager. Paid campaigns require their own bidding strategy, conversion measurement and budget.",
          "Do not interpret a live price feed as guaranteed paid placement. Hotel ad auctions and free booking link ranking remain separate."
        ],
        "checklist": [
          "Verify Hotel Center participation and price accuracy.",
          "Link the actual advertiser account, not the wrong manager account.",
          "Track reservations and booking value end to end."
        ]
      }
    ],
    "mistakes": [
      "Assuming a Google Ads tag can replace the price feed.",
      "Sending a static rack rate instead of itinerary-specific prices.",
      "Redirecting every hotel ad click to an unfiltered booking-engine homepage."
    ],
    "faqs": [
      {
        "q": "Can every booking engine connect directly?",
        "a": "No. Ask the vendor about Google Hotel Center support and whether a separate compatible connectivity partner is needed."
      },
      {
        "q": "Does the booking engine need to provide taxes and fees?",
        "a": "Yes, the traveller's final payable price must be consistent with the price and mandatory charges shown through Google."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/9238463?hl=en",
      "https://support.google.com/hotelprices/answer/14310302?hl=en",
      "https://support.google.com/hotelprices/answer/6064419?hl=en"
    ]
  },
  {
    "slug": "enable-google-hotels-free-booking-links",
    "title": "How to Enable Free Booking Links on Google Hotels",
    "description": "A practical guide to Google free hotel booking links, eligibility, accurate hotel rates and direct booking performance without paid clicks.",
    "category": "Connectivity",
    "primary": "Google free booking links hotels",
    "intro": [
      "Free booking links allow eligible hotel booking sites to appear in Google's hotel booking experiences without paying Google for the click. They are not the same as sponsored Hotel Ads and cannot be ranked higher simply by increasing an ad budget.",
      "To participate, hotels need an eligible property with accurate rates and a relevant landing page. Many hotel owners already have a connection through their booking engine or reservation-system provider."
    ],
    "flow": [
      "Eligible hotel on Google Maps",
      "Validated price and availability feed",
      "Bookable landing page",
      "Free booking link opportunity"
    ],
    "sections": [
      {
        "heading": "First, find out whether your hotel is already connected",
        "body": [
          "Ask your booking engine whether the property participates in Google's free booking links through its Hotel Center integration. If so, avoid creating an unnecessary second integration.",
          "Review your hotel in Google Search and Maps using plausible dates and occupancy, while remembering that Google does not guarantee a free booking link for every query."
        ],
        "checklist": [
          "Contact the current connectivity provider.",
          "Confirm Hotel Center property matching.",
          "Locate the booking link or property preview."
        ]
      },
      {
        "heading": "Meet the listing and landing-page requirements",
        "body": [
          "The hotel should have correct identity details, a working price feed and a booking page matching the requested itinerary. Taxes, mandatory charges and cancellation details must be disclosed appropriately.",
          "Google's free booking link ranking considers user value, landing-page experience and historical price accuracy. Paying for separate Hotel Ads does not improve the ranking of free booking links."
        ],
        "checklist": [
          "Verify the hotel location and property details.",
          "Confirm rates, guests, dates and inventory are consistent.",
          "Test the final booking page and payment step."
        ]
      },
      {
        "heading": "Enable eligible participation through your provider",
        "body": [
          "For a property using a reservation system, the provider can often set up the booking links. Direct suppliers should follow Google's current hotel onboarding process and eligibility guidance.",
          "Once pricing is active, check property participation and any missing landing-page warnings. Rates may be filtered if they violate accuracy rules."
        ],
        "checklist": [
          "Ask the provider to enable free booking link distribution.",
          "Review Hotel Center property detail diagnostics.",
          "Correct any price mismatch samples."
        ]
      },
      {
        "heading": "Measure results separately from paid hotel ads",
        "body": [
          "In Hotel Center, use Reports → Performance to review free versus paid booking-link activity by hotel, device and user country. For a fuller business view, align referral and booking-completion analytics with your booking engine.",
          "Free booking links still require operational care: they can drive high-intent travellers, but direct reservations depend on availability, rates, booking UX and brand trust."
        ],
        "checklist": [
          "Review the free-link clicks trend weekly.",
          "Compare direct booking revenue with booking-engine records.",
          "Improve the landing-page experience before adding ad spend."
        ]
      }
    ],
    "mistakes": [
      "Believing that a free booking link is guaranteed to appear for every search.",
      "Mistaking a sponsored hotel ad for an unpaid booking link.",
      "Ignoring final checkout fees that differ from the feed."
    ],
    "faqs": [
      {
        "q": "Does Google charge for free booking link clicks?",
        "a": "No. Google's Hotel Center documentation says there is no click fee for free booking links."
      },
      {
        "q": "Can a hotel use both free booking links and paid Hotel Ads?",
        "a": "Yes. They use separate ranking processes and can both be eligible for the same booking module."
      }
    ],
    "sources": [
      "https://support.google.com/hotelprices/answer/10472393?hl=en",
      "https://support.google.com/hotelprices/answer/10472993?hl=en"
    ]
  },
  {
    "slug": "connect-channel-manager-to-google-hotel-center",
    "title": "How to Connect a Channel Manager to Google Hotel Center",
    "description": "Understand PMS to channel manager to Google Hotel Center connectivity, with inventory mapping, rate accuracy tests and troubleshooting.",
    "category": "Connectivity",
    "primary": "channel manager Google Hotel Center integration",
    "intro": [
      "A channel manager synchronizes hotel rates, restrictions and availability across distribution channels. To supply Google Hotel Center, it must either support Google's hotel pricing integration or work through another provider that does.",
      "The important question is not whether your channel manager advertises 'Google integration', but whether your hotel has a verifiable Hotel Center price feed with a bookable direct link."
    ],
    "flow": [
      "PMS / CRS inventory",
      "Channel manager mappings",
      "Google-compatible price connector",
      "Hotel Center and booking links"
    ],
    "sections": [
      {
        "heading": "Identify the actual path from PMS to Google",
        "body": [
          "Some hotels have an on-property PMS, a channel manager, a separate booking engine and an additional Google connectivity partner. Map each system and its responsibility before changing settings.",
          "The booking engine determines the final purchase path, while the channel manager may be responsible for inventory updates. A delay between systems can cause mismatched availability."
        ],
        "checklist": [
          "List the PMS, channel manager, booking engine and Google partner.",
          "Confirm the system of record for available rooms.",
          "Name the person who can troubleshoot rate feed failures."
        ]
      },
      {
        "heading": "Map rate plans and property identifiers",
        "body": [
          "Confirm the Hotel Center property ID maps to the correct hotel and that each public rate plan can produce valid pricing for requested dates, occupancy and stay length.",
          "Check room-only versus breakfast-included offers, minimum-stay restrictions and taxes carefully. A low base rate with mandatory fees added later is not an acceptable substitute for an accurate final total."
        ],
        "checklist": [
          "Validate hotel and rate-plan mapping.",
          "Review stop-sell and minimum-stay behavior.",
          "Include mandatory taxes and fees in the appropriate fields."
        ]
      },
      {
        "heading": "Run controlled inventory and price tests",
        "body": [
          "Change a safe test date or rate plan in the system of record and ask the integration partner to confirm the update is reflected downstream. Do not change live sellable prices without the property's permission.",
          "Compare Hotel Center price samples to the actual booking website, including at least one multi-night stay and one occupancy variation."
        ],
        "checklist": [
          "Measure propagation delay on a controlled itinerary.",
          "Compare feed price and booking-engine checkout total.",
          "Check sold-out behavior and currency conversion."
        ]
      },
      {
        "heading": "Set up alerts and operational ownership",
        "body": [
          "Rate accuracy can deteriorate after tax changes, new packages or inventory migrations. Review Hotel Center reports, price validation examples and errors regularly.",
          "Keep connectivity operations separate from Google Ads optimization: a bidding change cannot fix missing hotel inventory."
        ],
        "checklist": [
          "Review feed and price-accuracy warnings each week.",
          "Maintain an incident contact at each system provider.",
          "Test critical booking paths after promotions or seasonal rate updates."
        ]
      }
    ],
    "mistakes": [
      "Assuming OTA connectivity automatically means Google direct booking connectivity.",
      "Mapping one hotel's rooms to another property's identifier.",
      "Using ad spend to compensate for missing or outdated rate data."
    ],
    "faqs": [
      {
        "q": "Is a channel manager always required?",
        "a": "No. Google allows eligible direct connections and integrations via other approved booking or pricing providers."
      },
      {
        "q": "Why is the Google rate different from my booking page?",
        "a": "Look for stale inventory, mismatched taxes, currency, occupancy, rate plan or booking-engine URL parameters."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/9238463?hl=en",
      "https://support.google.com/hotelprices/answer/6064419?hl=en"
    ]
  }
];

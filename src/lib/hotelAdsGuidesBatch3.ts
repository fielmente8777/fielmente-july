export const hotelAdsGuideBatch3 = [
  {
    "slug": "google-hotel-ads-vs-google-search-ads",
    "title": "Google Hotel Ads vs Google Search Ads: Which Drives More Direct Bookings?",
    "description": "Compare Google Hotel Ads with Search campaigns for hotels by intent, price feeds, targeting, attribution and direct-booking goals.",
    "category": "Campaigns",
    "primary": "Google Hotel Ads vs Google Search Ads",
    "intro": [
      "Hotel Ads and traditional Google Search Ads reach travellers in different moments. Hotel Ads can show bookable prices for matched properties in hotel travel experiences; Search Ads compete for query-based placements with text and optional extensions.",
      "A hotel with strong brand search but low room-rate participation may need different fixes from a hotel that has a reliable Hotel Center feed but no brand-keyword strategy. The best channel mix depends on demand and profitability, not a generic winner."
    ],
    "flow": [
      "Traveller searches",
      "Hotel price comparison or keyword results",
      "Relevant booking landing page",
      "Measured direct reservation"
    ],
    "sections": [
      {
        "heading": "Understand the user intent",
        "body": [
          "Hotel Ads are closely connected to an itinerary and property-specific rate comparison. They depend on hotel feed eligibility, matching, availability and a bookable direct link.",
          "Search Ads are built around eligible search queries and creative assets. They can promote branded searches, destination needs, weddings, experiences or business travel when a text ad and landing page match the traveller's intent."
        ],
        "checklist": [
          "Separate hotel-name and destination-intent searches.",
          "Review direct booking opportunity on price comparison surfaces.",
          "Map each intent to the correct landing page."
        ]
      },
      {
        "heading": "Compare operational requirements",
        "body": [
          "Google Hotel Ads depend on Hotel Center data and a price feed with accurate rates and landing pages. Search campaigns do not generally require a Hotel Center price feed to run text ads, though travel feeds can enhance supported Search formats.",
          "Hotel Ads issues such as unmatched properties, missing prices or inaccurate fees cannot be solved by adjusting Search keywords. They require feed and booking-system fixes."
        ],
        "checklist": [
          "Audit Hotel Center participation for Hotel Ads.",
          "Audit keywords and search terms for Search Ads.",
          "Check conversion tracking in both formats."
        ]
      },
      {
        "heading": "Choose a measurement model that reflects hotel margins",
        "body": [
          "Compare booked revenue, cancellation-adjusted booking value, cost per confirmed booking and return on ad spend. A cheaper click is not automatically the better click if it rarely results in a reservation.",
          "Use the same definition of a completed booking where technically possible. Do not compare one channel's leads to another channel's paid reservation revenue."
        ],
        "checklist": [
          "Align purchase conversion definitions.",
          "Report booked revenue and advertising cost.",
          "Separate brand-protection campaigns from incremental demand."
        ]
      },
      {
        "heading": "Build a complementary campaign plan",
        "body": [
          "Use Hotel Ads where price coverage and feed health are strong, then Search Ads for brand visibility, destination searches and packages that make sense for the property.",
          "Start with modest budgets and review overlap using available campaign reports. Avoid assuming that every impression on Google's hotel module is incremental."
        ],
        "checklist": [
          "Prioritize properties with reliable rates.",
          "Create dedicated booking pages for Search intents.",
          "Review performance by property and booking window."
        ]
      }
    ],
    "mistakes": [
      "Treating Hotel Ads and Search Ads as the same auction or format.",
      "Comparing CPC alone instead of booked profit.",
      "Ignoring that Hotel Ads need a valid direct price feed."
    ],
    "faqs": [
      {
        "q": "Can a hotel run Search Ads without Hotel Center?",
        "a": "Yes. Traditional text-based Search Ads have a different setup from feed-driven Hotel campaigns."
      },
      {
        "q": "Does one channel always deliver cheaper bookings?",
        "a": "No. Results depend on hotel demand, feed quality, conversion rates, competition, margins and campaign execution."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/9238463?hl=en",
      "https://support.google.com/google-ads/answer/7663773?hl=en"
    ]
  },
  {
    "slug": "track-hotel-direct-bookings-google-ads-ga4",
    "title": "How to Track Direct Hotel Bookings in Google Ads and GA4",
    "description": "Measure completed hotel reservations with GA4 and Google Ads using booking IDs, revenue values, currencies and conversion validation.",
    "category": "Campaigns",
    "primary": "hotel booking conversion tracking GA4",
    "intro": [
      "Clicks and WhatsApp enquiries may indicate interest, but a hotel campaign needs a reliable view of completed paid reservations. When your website sends guests to a separate booking engine domain, conversion tracking can become fragmented.",
      "Set measurement rules before increasing spend. The objective is one trustworthy booking event, the right value and a way to reconcile advertising reports with your reservation system."
    ],
    "flow": [
      "Ad click with attribution",
      "Hotel site and booking engine",
      "Booking confirmation event",
      "GA4 and Google Ads reporting"
    ],
    "sections": [
      {
        "heading": "Define one authoritative purchase event",
        "body": [
          "A completed reservation should generate a stable transaction ID from the booking system. Fire a purchase event when confirmation is genuinely reached, not on every visit to the booking widget or payment page.",
          "If bookings can fail after payment initiation, ask the engine provider for the proper server-side or confirmation-based event. Avoid counting retries or page refreshes as new bookings."
        ],
        "checklist": [
          "Specify the booking-confirmation trigger.",
          "Include transaction ID, currency and total booking value.",
          "Test that the same booking fires only once."
        ]
      },
      {
        "heading": "Configure GA4 and Google Ads intentionally",
        "body": [
          "Use Google Tag Manager or the booking engine's supported tracking integration to send the transaction information. In GA4, check DebugView and purchase reports; in Google Ads, verify the purchase conversion action and the attribution source.",
          "Depending on your chosen implementation, conversions may be tracked with a Google Ads tag or imported from GA4. Avoid importing duplicates as separate primary conversions for one reservation."
        ],
        "checklist": [
          "Use a consistent purchase event name.",
          "Check conversion value and currency.",
          "Designate primary and secondary goals appropriately."
        ]
      },
      {
        "heading": "Handle payment and booking-engine redirects",
        "body": [
          "When a hotel website and booking engine use different registrable domains, configure supported cross-domain measurement where permitted. Maintain source attribution through booking completion and exclude inappropriate payment referral sources.",
          "Test the actual path from an ad-tagged landing URL to a final confirmation. A booking confirmed on another domain may otherwise appear as direct traffic or a new referral."
        ],
        "checklist": [
          "List all booking domains and payment redirects.",
          "Test GA4 session continuity.",
          "Inspect Google Ads click attribution where available."
        ]
      },
      {
        "heading": "Reconcile measurement with hotel operations",
        "body": [
          "Create a weekly report that compares GA4 purchases, Google Ads conversions and actual reservation exports. Time zones, attribution windows, cancellations and cross-device behavior can cause legitimate differences.",
          "Use the reconciliation to identify broken tags and duplicated revenue, rather than forcing every platform to show exactly the same conversion count."
        ],
        "checklist": [
          "Compare booking IDs where privacy rules permit.",
          "Track cancellations separately.",
          "Document discrepancies and the correction owner."
        ]
      }
    ],
    "mistakes": [
      "Tracking click-to-booking-button as a completed sale.",
      "Omitting transaction IDs and purchase values.",
      "Counting a Google Ads tag and imported GA4 purchase twice."
    ],
    "faqs": [
      {
        "q": "Should hotels track enquiries as well as bookings?",
        "a": "Yes, but distinguish lead events from completed reservations and avoid treating both as the same purchase."
      },
      {
        "q": "Why are Ads and GA4 booking counts different?",
        "a": "They can differ because of attribution, consent, time zones, conversion windows and implementation issues. Reconcile against confirmed booking records."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/14280094?hl=en",
      "https://support.google.com/google-ads/answer/9238463?hl=en"
    ]
  },
  {
    "slug": "hotel-booking-engine-cross-domain-ga4-tracking",
    "title": "How to Configure Cross-Domain Tracking for Hotel Booking Engines",
    "description": "Set up GA4 cross-domain measurement when hotel reservations move from your website to an external booking engine or checkout domain.",
    "category": "Campaigns",
    "primary": "hotel booking engine cross domain tracking",
    "intro": [
      "A common hotel booking journey starts on hotelname.com and ends on a hosted booking engine such as bookings.provider.com. Without a measurement strategy, the booking conversion may lose the original marketing source.",
      "Cross-domain tracking is not a magic link between databases. It requires compatible Google tags, a deliberate domain list and testing of real navigation through the booking flow."
    ],
    "flow": [
      "Marketing landing page",
      "Booking engine domain",
      "Checkout and confirmation",
      "One attributable booking journey"
    ],
    "sections": [
      {
        "heading": "Map every domain in the booking journey",
        "body": [
          "Record the hotel website, booking-engine domain, payment provider and final confirmation destination. Identify which of them you can tag and where the transaction event actually occurs.",
          "If the provider prevents you from installing tags on the booking page, ask for its supported Google Analytics and Google Ads integration before adding fragile custom scripts."
        ],
        "checklist": [
          "List website and engine hostnames.",
          "Identify whether confirmation is on the same or a different domain.",
          "Confirm tag implementation rights and privacy requirements."
        ]
      },
      {
        "heading": "Configure supported GA4 cross-domain measurement",
        "body": [
          "For compatible pages using the same Google tag or GA4 setup, configure the domains intended to participate in cross-domain measurement. Google can pass linker parameters between the domains to help maintain identity across navigation.",
          "Do not add unrelated payment providers or every third-party referral indiscriminately. Only configure supported domains relevant to your measurement design."
        ],
        "checklist": [
          "Add the hotel and compatible booking domain.",
          "Verify navigation retains appropriate linker parameters.",
          "Document redirects that strip query strings."
        ]
      },
      {
        "heading": "Test a full reservation end to end",
        "body": [
          "Use a controlled test link with recognizable campaign parameters, navigate to the booking engine and complete a test reservation if available. Validate session continuity and the purchase event in debugging tools.",
          "Check whether the purchase event includes the same transaction identifier and booking value used by the reservation system. Watch for duplicate events when a guest reloads confirmation."
        ],
        "checklist": [
          "Test mobile and desktop browsers.",
          "Validate source / medium across the journey.",
          "Verify a unique purchase transaction ID."
        ]
      },
      {
        "heading": "Keep attribution and privacy trustworthy",
        "body": [
          "Consent settings and browser restrictions may legitimately affect tracking. Design a privacy-compliant implementation with your booking engine vendor, and avoid fabricating purchase signals to make campaigns look stronger.",
          "Keep a clear distinction between session continuity and final booking ownership: analytics may be partial even when the reservation is confirmed."
        ],
        "checklist": [
          "Review consent requirements for each domain.",
          "Reconcile conversions with booking records.",
          "Retest after booking-engine releases or domain changes."
        ]
      }
    ],
    "mistakes": [
      "Treating payment-gateway redirects as an automatic second hotel campaign.",
      "Assuming cross-domain tracking works if the booking engine cannot run compatible tags.",
      "Losing attribution when redirects strip identifiers."
    ],
    "faqs": [
      {
        "q": "Does GA4 automatically track all third-party booking engines?",
        "a": "No. It depends on implementation access and compatible tag support from the booking engine."
      },
      {
        "q": "Should the payment gateway be added as a cross-domain measurement domain?",
        "a": "Not automatically. Evaluate its role and Google's domain configuration guidance; many gateways only require appropriate referral handling."
      }
    ],
    "sources": [
      "https://support.google.com/analytics/answer/10071811?hl=en",
      "https://support.google.com/google-ads/answer/9238463?hl=en"
    ]
  },
  {
    "slug": "calculate-google-hotel-ads-roas-cost-per-booking",
    "title": "How to Measure ROAS and Cost per Booking in Google Hotel Ads",
    "description": "Calculate hotel advertising ROAS, booking CPA and cancellation-adjusted revenue, with reporting formulas for Google Hotel Ads campaigns.",
    "category": "Campaigns",
    "primary": "Google Hotel Ads ROAS",
    "intro": [
      "A hotel ad with a low cost per click may still be unprofitable. What matters is the revenue and contribution margin associated with confirmed, stay-eligible bookings after advertising costs.",
      "Start with simple consistent measures: cost per confirmed booking, booked return on ad spend, cancellation-adjusted return and—where possible—contribution after variable costs."
    ],
    "flow": [
      "Google Ads campaign spend",
      "Tracked confirmed bookings",
      "Booking revenue and cancellations",
      "ROAS and cost-per-booking decisions"
    ],
    "sections": [
      {
        "heading": "Calculate the core metrics correctly",
        "body": [
          "Booked ROAS equals attributed booking revenue divided by ad spend. If a hotel records ₹3,00,000 in tracked booking value on ₹50,000 spend, the booked ROAS is 6.0×, or 600%. Cost per booking equals ad spend divided by completed attributable bookings.",
          "If there were 20 confirmed attributed bookings in that example, cost per booking is ₹2,500. These figures are illustrations, not average performance promises."
        ],
        "checklist": [
          "Record spend for the same reporting window.",
          "Record validated completed booking value.",
          "Calculate ROAS = attributed value ÷ spend; CPA = spend ÷ bookings."
        ]
      },
      {
        "heading": "Separate booked and realised revenue",
        "body": [
          "Booked revenue can overstate realised revenue if a large share of reservations cancel or are modified. Reconcile campaign reports with property-management or booking-engine records after the relevant stay period.",
          "A no-show, refund or change in stay value may not be reflected immediately in ad-platform conversion reports. Maintain a separate cancellation-adjusted view when possible."
        ],
        "checklist": [
          "Track cancellations and refunds.",
          "Review stay dates and booking windows.",
          "Report both original booked value and adjusted revenue."
        ]
      },
      {
        "heading": "Look beyond revenue to contribution margin",
        "body": [
          "Two hotels with the same ROAS can have very different profitability because of food inclusions, occupancy, housekeeping and distribution fees. Compare ad acquisition cost with the contribution available from each booking.",
          "If your campaigns fill low-season nights that otherwise would be empty, their incremental value can differ from campaigns that merely shift existing organic demand to paid."
        ],
        "checklist": [
          "Estimate variable cost per occupied room.",
          "Compare paid direct-booking cost with OTA distribution cost.",
          "Separate incremental demand from branded return visits."
        ]
      },
      {
        "heading": "Use reports to decide what to change",
        "body": [
          "Review returns by hotel, market and campaign where data volume supports it. Low ROAS can stem from poor bidding, weak landing pages, inaccurate conversion values or a broken hotel feed.",
          "Before changing bid targets, verify data freshness and conversion accuracy. A bidding system can only optimize against the conversion values you feed it."
        ],
        "checklist": [
          "Validate conversion values and currency.",
          "Investigate missing hotel participation.",
          "Adjust campaigns only after identifying the likely cause."
        ]
      }
    ],
    "mistakes": [
      "Using clicks or leads as the denominator for cost per completed booking.",
      "Ignoring cancellations when quoting realised returns.",
      "Comparing gross revenue to a net-margin profitability target without explanation."
    ],
    "faqs": [
      {
        "q": "What is the formula for hotel ad ROAS?",
        "a": "Attributed booking conversion value divided by advertising spend, presented as a ratio or percentage."
      },
      {
        "q": "Does a high ROAS always mean a profitable booking?",
        "a": "No. Consider cancellations, variable costs, taxes and incremental demand when evaluating profitability."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/14280094?hl=en",
      "https://support.google.com/google-ads/answer/9243945?hl=en"
    ]
  },
  {
    "slug": "google-hotel-ads-not-showing-troubleshooting",
    "title": "Google Hotel Ads Not Showing? A Troubleshooting Checklist",
    "description": "Find why Google Hotel Ads are not showing by checking Hotel Center linking, property matching, pricing, landing pages, bidding and policy status.",
    "category": "Campaigns",
    "primary": "Google Hotel Ads not showing",
    "intro": [
      "When a hotel ad does not appear, changing budget is only one possible answer—and often not the correct one. Google evaluates property eligibility, availability, matching, landing pages, price accuracy and campaign status before an ad can compete.",
      "A structured diagnostic helps distinguish feed problems from auction or account problems. Use Hotel Center Reports for missed participation reasons and Google Ads for campaign eligibility."
    ],
    "flow": [
      "Verify Hotel Center link",
      "Check property and rate participation",
      "Check campaign and bid eligibility",
      "Preview and measure serving"
    ],
    "sections": [
      {
        "heading": "Confirm account linking and campaign status",
        "body": [
          "In Google Ads, open Tools → Data Manager → Connected products → Google Hotel Center → Manage & link. Check that the intended Hotel Center account is linked, and that the hotel property is in the shared set.",
          "Then review campaign status, budget, approvals, target locations and bidding. If the Hotel campaign type is missing just after linking, Google says it may take up to 72 hours to appear."
        ],
        "checklist": [
          "Check account permissions and link status.",
          "Check campaign is enabled and not policy-limited.",
          "Confirm the correct advertiser account is being used."
        ]
      },
      {
        "heading": "Review Hotel Center participation reasons",
        "body": [
          "Hotel Center's Reports section can identify missed opportunities from missing prices, unavailable rates, landing pages and price problems. Find the affected property and date range rather than inspecting random searches.",
          "If a hotel is unmatched, use the Properties Data Issues manual match process. If a price is missing, escalate to the integration provider or system of record."
        ],
        "checklist": [
          "Inspect missed participation categories.",
          "Check property matching and 'Live on Google' status.",
          "Check prices and landing-page coverage for test itineraries."
        ]
      },
      {
        "heading": "Validate one complete itinerary",
        "body": [
          "Select realistic arrival and departure dates and occupancy. Use Hotel Center property preview to see whether the feed is ready, what price source is involved and which landing page matches.",
          "Follow the booking link to the final reservation page. Check taxes, fees, currency, date preselection and room availability."
        ],
        "checklist": [
          "Preview property details for a specific itinerary.",
          "Compare feed and checkout prices.",
          "Record any redirect or unavailable-room errors."
        ]
      },
      {
        "heading": "Investigate auction performance only after eligibility",
        "body": [
          "If the feed is healthy and the campaign is eligible but visibility remains weak, review bid strategy, budget constraints, market demand and actual campaign reporting.",
          "Remember that manual searches are not a complete serving test. Ads vary by context and auction conditions, and hotel visibility is not guaranteed for every user."
        ],
        "checklist": [
          "Check impressions, eligibility and bid targets.",
          "Review booking conversion health.",
          "Escalate only the unresolved layer to the right provider."
        ]
      }
    ],
    "mistakes": [
      "Repeatedly creating link requests when one is merely pending.",
      "Changing bids before checking missing prices or landing pages.",
      "Treating a personal Google search as definitive evidence an ad never serves."
    ],
    "faqs": [
      {
        "q": "What does 'price missing' mean in Hotel Center?",
        "a": "Hotel Center could not use a valid price for the itinerary. The integration partner may need to investigate the feed or live pricing response."
      },
      {
        "q": "Can an unmatched hotel run Hotel Ads normally?",
        "a": "No. Google documents matching as a prerequisite to meaningful booking-link participation."
      }
    ],
    "sources": [
      "https://support.google.com/hotelprices/answer/9580318?hl=en",
      "https://support.google.com/hotelprices/answer/9144476?hl=en",
      "https://support.google.com/google-ads/answer/7663773?hl=en"
    ]
  }
];

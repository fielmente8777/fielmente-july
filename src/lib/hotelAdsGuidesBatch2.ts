export const hotelAdsGuideBatch2 = [
  {
    "slug": "fix-google-hotel-center-price-mismatch-errors",
    "title": "How to Fix Google Hotel Center Price Mismatch Errors",
    "description": "Diagnose Google Hotel Center price accuracy warnings caused by taxes, stale rates, currency, occupancy or booking-page discrepancies.",
    "category": "Connectivity",
    "primary": "Google Hotel Center price mismatch",
    "intro": [
      "Price mismatch is not simply a cosmetic reporting issue. Google's hotel booking policies compare prices shown through Google with the total payable price after clicking to the booking site.",
      "A hotel can have an approved Hotel Center account and still lose booking-link eligibility if repeated inaccuracies make rates unreliable. The fastest resolution begins with one specific failed itinerary—not with changing the Google Ads bidding strategy."
    ],
    "flow": [
      "Google price validation sample",
      "Replicate dates and guests",
      "Find feed-to-checkout difference",
      "Correct and retest"
    ],
    "sections": [
      {
        "heading": "Find the actual inaccurate itinerary",
        "body": [
          "Open Hotel Center's Pricing area and review price accuracy reports, recent validations and the examples Google provides. Note the property ID, check-in date, number of nights, occupancy, reported currency, feed price and retrieved landing-page price.",
          "A single displayed rate can be made up of a base rate, taxes, mandatory fees and stay-specific restrictions. Comparing only the nightly base price often misses the real problem."
        ],
        "checklist": [
          "Export or record an actual validation sample.",
          "Write down check-in, nights, guest count and device or region if available.",
          "Compare the all-in feed total and the final bookable total."
        ]
      },
      {
        "heading": "Check the most common causes in order",
        "body": [
          "Investigate stale rate caches, delayed channel-manager updates, currency conversion, occupancy surcharges, included meal plans and applicable taxes. Also check whether the booking link preserves arrival, departure and guest details.",
          "Do not hide mandatory property fees until the last checkout step. Google's price accuracy and taxes-and-fees policies require that guests see a consistent and properly disclosed total."
        ],
        "checklist": [
          "Check taxes and mandatory fees.",
          "Check room plan, breakfast and occupancy.",
          "Check stale feed updates and URL parameters."
        ]
      },
      {
        "heading": "Correct the system of record, not the symptom",
        "body": [
          "If the PMS or booking engine is authoritative, fix the source there, then confirm the connectivity provider sends refreshed data. If a landing-page template is dropping itinerary parameters, correct the template rather than modifying prices randomly.",
          "Test the same itinerary in a private browser session. Keep a before-and-after record so your team can tell whether the repair survived the next feed sync."
        ],
        "checklist": [
          "Fix the original rate plan or tax rule.",
          "Trigger the provider's supported data refresh process.",
          "Retest the exact failed itinerary."
        ]
      },
      {
        "heading": "Monitor whether participation recovers",
        "body": [
          "Google may continue to validate prices over time, so a single successful manual test does not guarantee immediate restoration. Review the accuracy trend and the participation report for price-related losses.",
          "Prioritize errors affecting high-demand properties and common booking windows, but do not ignore repeated edge cases such as longer stays."
        ],
        "checklist": [
          "Review price accuracy status after subsequent validations.",
          "Monitor suppressed or missed booking opportunities.",
          "Escalate persistent differences to the pricing integration partner."
        ]
      }
    ],
    "mistakes": [
      "Comparing a nightly base rate with a tax-inclusive total.",
      "Changing ad bids to solve a feed accuracy problem.",
      "Assuming one successful checkout means the error is permanently resolved."
    ],
    "faqs": [
      {
        "q": "Can Google stop showing links for inaccurate hotel rates?",
        "a": "Yes. Google states that poor or failed price accuracy can restrict or turn off hotel ads and free booking links."
      },
      {
        "q": "Where can I see mismatch examples?",
        "a": "Inspect Hotel Center's price accuracy reports and recent validations for affected itineraries and the comparison between feed and retrieved prices."
      }
    ],
    "sources": [
      "https://support.google.com/hotelprices/answer/6064419?hl=en",
      "https://support.google.com/hotelprices/answer/6318506?hl=en"
    ]
  },
  {
    "slug": "fix-google-hotel-center-property-matching-issues",
    "title": "How to Fix Hotel Matching and Missing Property Issues in Google Hotel Center",
    "description": "Fix Google Hotel Center unmatched hotels by checking property identities, Maps URLs, hotel IDs and the manual matching tool.",
    "category": "Connectivity",
    "primary": "Google Hotel Center property matching",
    "intro": [
      "Hotel Center must identify the correct property on Google Maps before its travel feed can reliably participate. If the submitted hotel record is not matched, simply increasing Google Ads spend cannot make the data eligible.",
      "A naming variation, outdated address or duplicate listing can result in no match or the wrong match. Google provides a manual property matching workflow for hotels that cannot be resolved automatically."
    ],
    "flow": [
      "Hotel Center Properties",
      "Data Issues / unmatched hotel",
      "Manual match with correct Maps URL",
      "Recheck property eligibility"
    ],
    "sections": [
      {
        "heading": "Check the property status first",
        "body": [
          "In Hotel Center, open Properties and inspect the Data Issues tab for hotels marked Not matched or with critical matching issues. Record the hotel ID, hotel name and address exactly as shown in the submitted list.",
          "Use a single-property Google Maps URL when manually matching; a generic city search result is not a property-level identifier."
        ],
        "checklist": [
          "Find the affected property ID.",
          "Check the actual Maps listing and map pin.",
          "Identify duplicate or renamed hotel listings."
        ]
      },
      {
        "heading": "Use Google's manual match tool",
        "body": [
          "For a property that is not matched, use the Match action in the relevant property row. Paste the Google Maps link for the correct hotel, confirm the name and address, then submit the match request.",
          "If the original listing is absent from Maps, address the property's Google presence and mapping details first. Do not attempt to match a property to a neighboring hotel merely to clear an error."
        ],
        "checklist": [
          "Open Properties → Data Issues.",
          "Click Match for the unmapped hotel.",
          "Paste the exact individual hotel Maps URL and submit."
        ]
      },
      {
        "heading": "Keep your hotel list and Business Profile consistent",
        "body": [
          "The hotel data feed and Google Business Profile should describe the same real property. Pay attention to trading names, street addresses, phone numbers and distinct buildings in multi-property complexes.",
          "For resorts with villas or multiple wings, confirm whether Google treats the accommodation as one property or separate properties before assigning identifiers."
        ],
        "checklist": [
          "Align the trading name and full address.",
          "Verify the property pin location.",
          "Avoid duplicate IDs for distinct hotels."
        ]
      },
      {
        "heading": "Recheck feed readiness after matching",
        "body": [
          "A successful property match only solves the identity issue. You still need valid rates, availability and a working booking landing page.",
          "Use Hotel Center property preview and Reports to distinguish matching failures from missing prices or landing-page failures. Record the specific type before contacting support."
        ],
        "checklist": [
          "Confirm the property is matched.",
          "Preview a live booking itinerary.",
          "Inspect landing-page and price participation diagnostics."
        ]
      }
    ],
    "mistakes": [
      "Pasting a general Maps search instead of the hotel's own URL.",
      "Matching the property to a neighboring listing.",
      "Ignoring rate and landing-page issues after matching succeeds."
    ],
    "faqs": [
      {
        "q": "Where is the property matching tool?",
        "a": "Google's documented path is Hotel Center → Properties → Data Issues → Match for the affected hotel."
      },
      {
        "q": "Will linking Google Ads fix an unmatched hotel?",
        "a": "No. Account linking and property matching are separate requirements."
      }
    ],
    "sources": [
      "https://support.google.com/hotelprices/answer/6329692?hl=en",
      "https://support.google.com/hotelprices/answer/9144476?hl=en"
    ]
  },
  {
    "slug": "google-hotel-center-vs-google-business-profile",
    "title": "Google Hotel Center vs Google Business Profile: What's the Difference?",
    "description": "Compare Google Hotel Center and Google Business Profile for hotels: property details, rates, maps visibility, booking links and account ownership.",
    "category": "Connectivity",
    "primary": "Google Hotel Center vs Google Business Profile",
    "intro": [
      "Google Business Profile and Google Hotel Center both matter to hotel visibility, but they solve different problems. One helps keep a real-world property's local listing accurate; the other supports hotel rates, inventory and booking-link distribution.",
      "Confusing the two can lead hotel owners to believe that adding a website or booking URL to Business Profile automatically creates a Google Hotel Ads price feed. It does not."
    ],
    "flow": [
      "Business Profile: identity & local presence",
      "Hotel Center: rates & hotel feed",
      "Google Ads: optional paid campaigns",
      "Traveller: compare and book"
    ],
    "sections": [
      {
        "heading": "What each platform controls",
        "body": [
          "Google Business Profile supports business name, address, phone number, photos, local presence and other listing information. Hotel Center handles property matching, hotel data feeds, pricing, availability, booking landing pages and booking-link performance.",
          "Google Ads is an additional platform used for paid campaigns. Linking it to Hotel Center is about advertising access to hotel feed data, not replacing your Business Profile."
        ],
        "checklist": [
          "Manage the verified local hotel information in Business Profile.",
          "Manage booking-rate data through Hotel Center or its provider.",
          "Manage paid budget and conversion goals in Google Ads."
        ]
      },
      {
        "heading": "Why hotel identity consistency matters",
        "body": [
          "Hotel Center may rely on a matching relationship to the correct Maps property. Inconsistent addresses or duplicate hotel profiles can cause matching issues even if the booking engine sends accurate rates.",
          "If you change the hotel's trading name or property address, notify both the Business Profile team and the person managing the hotel's Google feed."
        ],
        "checklist": [
          "Match the hotel name and postal address.",
          "Check the map pin and published phone number.",
          "Track changes during rebrands or new openings."
        ]
      },
      {
        "heading": "What a direct booking setup still requires",
        "body": [
          "A verified Business Profile does not by itself create a live hotel price feed. For free booking links or eligible hotel ad formats, there must be rates, availability and an appropriately matched bookable landing page.",
          "Similarly, Hotel Center participation does not guarantee placement in local search packs; Google's local listing systems and hotel booking systems evaluate different signals."
        ],
        "checklist": [
          "Validate feed and booking URL separately from the local listing.",
          "Test the hotel across multiple dates.",
          "Review Google Hotel Center price accuracy."
        ]
      },
      {
        "heading": "Recommended ownership for hotel teams",
        "body": [
          "Give the front-office or marketing contact responsibility for Business Profile accuracy, and the revenue or distribution team responsibility for price feed quality. An agency can coordinate the relationship and handle paid advertising.",
          "Maintain one shared access register listing the Google Ads customer ID, Hotel Center account owner and Google Business Profile primary owner without sharing passwords."
        ],
        "checklist": [
          "Set named owners for all three products.",
          "Document a change-control process.",
          "Audit access when an agency or booking engine changes."
        ]
      }
    ],
    "mistakes": [
      "Assuming a verified Business Profile automatically enables Hotel Ads.",
      "Trying to update room inventory in Google Business Profile.",
      "Treating Hotel Center as a replacement for local SEO."
    ],
    "faqs": [
      {
        "q": "Can a hotel have a Google Business Profile without Hotel Center?",
        "a": "Yes. A local property listing does not require a Hotel Center account."
      },
      {
        "q": "Can both products influence a traveller's hotel decision?",
        "a": "Yes. Accurate local information builds confidence; accurate hotel rates and booking links help travellers compare and reserve."
      }
    ],
    "sources": [
      "https://support.google.com/hotelprices/answer/10472993?hl=en",
      "https://support.google.com/hotelprices/answer/6329692?hl=en"
    ]
  },
  {
    "slug": "create-first-google-hotel-ads-campaign",
    "title": "How to Create Your First Google Hotel Ads Campaign After Linking Hotel Center",
    "description": "Create a Google Hotel Ads campaign after connecting Hotel Center: validate rates, select hotels, configure budget and bids, and test booking conversions.",
    "category": "Campaigns",
    "primary": "Google Hotel Ads campaign setup",
    "intro": [
      "A successful Hotel Center to Google Ads link is a prerequisite for feed-driven Hotel campaigns, not an instruction to spend money. The advertiser still needs a valid property feed, a measurable checkout and a deliberate bidding strategy.",
      "If the Hotel campaign option is not immediately visible, Google advises that it may take up to 72 hours after linking. Before launching, inspect eligibility rather than repeatedly submitting new links."
    ],
    "flow": [
      "Hotel Center account linked",
      "Rates + booking links verified",
      "Hotel campaign & bidding configured",
      "Paid booking links measured"
    ],
    "sections": [
      {
        "heading": "Complete a pre-launch eligibility check",
        "body": [
          "Check that the correct non-manager Google Ads account is linked to the right Hotel Center account, and that the intended properties are included in the approved set.",
          "Hotel Center must have valid, current prices and bookable landing pages. Third-party Google-sourced rates for hotel ads ceased after 30 September 2026, so confirm a usable direct feed."
        ],
        "checklist": [
          "Verify the linked account in Data Manager.",
          "Review price accuracy and matching diagnostics.",
          "Confirm the hotel's reservation URL works for real itineraries."
        ]
      },
      {
        "heading": "Create the Hotel campaign and select properties",
        "body": [
          "Within the Google Ads campaign creation workflow, choose an eligible Hotel campaign where offered. Configure the hotel group or property selection, campaign locations and other available settings based on business objectives.",
          "Do not start by advertising every property and market if booking margins, availability or feed quality differ widely. A small controlled launch gives cleaner operational feedback."
        ],
        "checklist": [
          "Select intended hotel properties or hotel groups.",
          "Set realistic targeting and a controlled daily budget.",
          "Exclude properties not ready for conversion tracking."
        ]
      },
      {
        "heading": "Choose a bidding approach based on measurement",
        "body": [
          "Hotel bidding options vary by account and campaign type. If using value-based bidding, make sure completed bookings send a reliable purchase amount and currency; Google requires booking values for its Hotel Ads Smart Bidding strategies.",
          "Start with a conservative budget grounded in hotel margins and cancellation risk. Treat bid targets as optimization controls, not guarantees of cost or booked revenue."
        ],
        "checklist": [
          "Define the primary purchase conversion.",
          "Send booking value and currency.",
          "Review available bids and choose a strategy supported by data."
        ]
      },
      {
        "heading": "Monitor more than clicks after launch",
        "body": [
          "Look at booking conversion rate, revenue per booking, cost per booking and return on ad spend alongside property participation. Unexplained drops may come from rate or landing-page problems rather than media settings.",
          "Use Hotel Center Reports for missed eligibility and Google Ads for campaign performance; reconcile both with the booking engine's actual confirmed reservations."
        ],
        "checklist": [
          "Compare Ads bookings to reservation records.",
          "Inspect price and landing-page losses weekly.",
          "Change bids only after validating measurement and feed health."
        ]
      }
    ],
    "mistakes": [
      "Launching before confirming the hotel price feed.",
      "Optimizing for website page views instead of completed reservations.",
      "Treating Hotel Center link approval as evidence that ads are serving."
    ],
    "faqs": [
      {
        "q": "How long does it take for a Hotel campaign option to appear?",
        "a": "Google says the Hotel campaign type can take up to 72 hours after linking Hotel Center and Google Ads."
      },
      {
        "q": "Do Hotel Ads launch when accounts are linked?",
        "a": "No. Campaign creation, budget, bidding, eligibility and tracking remain separate steps."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/7663773?hl=en",
      "https://support.google.com/google-ads/answer/9238463?hl=en",
      "https://support.google.com/google-ads/answer/14280094?hl=en"
    ]
  },
  {
    "slug": "performance-max-travel-goals-hotels-guide",
    "title": "How to Set Up Performance Max for Travel Goals for Hotels",
    "description": "Set up Performance Max for travel goals with linked Hotel Center feeds, hotel asset groups, conversion values and direct-booking goals.",
    "category": "Campaigns",
    "primary": "Performance Max travel goals hotels",
    "intro": [
      "Performance Max for travel goals is a Google Ads campaign designed around hotel properties and travel bookings. It can use hotel feed data to help create property-specific asset groups, and it can serve across multiple Google advertising channels.",
      "For hotel ads inventory in 2026, it is important not to rely on discontinued Google-sourced third-party hotel rates. Google says those rates became unavailable after September 30, 2026; a direct price feed is required to continue eligible Hotel Ads placement."
    ],
    "flow": [
      "Hotel Center feed or hotel properties feed",
      "Property-specific asset groups",
      "Conversion goal and bidding",
      "Multi-channel booking campaigns"
    ],
    "sections": [
      {
        "heading": "Start with the right hotel feed",
        "body": [
          "Google supports connecting a Google Ads account to Hotel Center or creating a hotel properties feed in Google Ads for Performance Max travel goals setup. For Hotel Ads inventory, verify that the pricing path is an eligible direct feed.",
          "A property feed can help populate hotel names, images, features and asset groups; it does not substitute for an accurate, bookable checkout or reservation conversion."
        ],
        "checklist": [
          "Verify feed sources and property access.",
          "Check image rights and brand accuracy.",
          "Confirm hotel price availability for target itineraries."
        ]
      },
      {
        "heading": "Build property-specific asset groups",
        "body": [
          "Use distinct groups for properties with different positioning, imagery or accommodation offers. Google allows adding further hotel asset groups through the linked feed or Google Ads depending on campaign setup.",
          "Select real photos, factual amenities and relevant booking pages. Avoid claiming benefits that do not exist at the property."
        ],
        "checklist": [
          "Assign the correct hotel to each asset group.",
          "Check that every booking URL resolves to the intended property.",
          "Use high-quality exterior, room and experience photos."
        ]
      },
      {
        "heading": "Set conversion and value-based goals",
        "body": [
          "A completed paid reservation is generally a stronger primary goal than a mere website session or WhatsApp click. Configure conversion events and values so bidding can learn from purchases that matter to the hotel.",
          "Where calls or enquiries are part of the sales process, measure them separately and avoid counting a lead and its final booking as two identical purchase conversions."
        ],
        "checklist": [
          "Use completed booking as the main purchase event.",
          "Pass purchase value and currency consistently.",
          "Document conversion windows and attribution limitations."
        ]
      },
      {
        "heading": "Review asset and channel performance thoughtfully",
        "body": [
          "Performance Max is not a hotel-only placement: results can reflect Search, Display, YouTube and other Google surfaces. Interpret campaign reports accordingly.",
          "Review each property's bookings and costs, feed readiness and actual reservations rather than declaring success from impressions alone. Retain a change log before modifying a target return on ad spend."
        ],
        "checklist": [
          "Review asset groups and conversion quality.",
          "Cross-check Hotel Center and Ads reporting.",
          "Allow for a sufficient observation period before major changes."
        ]
      }
    ],
    "mistakes": [
      "Assuming a hotel properties feed is automatically a complete price feed for Hotel Ads inventory.",
      "Combining unrelated hotels without inspecting property-level results.",
      "Using a page-load event as the sole success metric."
    ],
    "faqs": [
      {
        "q": "Can Performance Max for travel goals use Hotel Center?",
        "a": "Yes. Google documents linking Hotel Center to populate hotel property lists and assets."
      },
      {
        "q": "Did Google's third-party hotel rates continue after September 2026?",
        "a": "No. Google said the third-party hotel rates feature for Hotel Ads inventory ended after September 30, 2026."
      }
    ],
    "sources": [
      "https://support.google.com/google-ads/answer/13189989?hl=en",
      "https://support.google.com/google-ads/answer/13189380?hl=en",
      "https://support.google.com/hotelprices/answer/14310302?hl=en"
    ]
  }
];

import type { MonthlyPoint } from "./CaseStudyChart";

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  img: string;
  hotelImg?: string;
  imgBg?: string;
  className?: string;
  metaData?: { title: string; description: string };
  data?: { title: string; description?: string[]; lists?: string[] }[];
  /** Standalone campaign metrics for studies without a before-and-after comparison. */
  metrics?: { label: string; value: string; note?: string }[];
  metricsNote?: string;
  cta?: { eyebrow?: string; title: string; description: string; label: string };
  /** Monthly tracked enquiries from the client's Google Ads account, for the results chart. */
  monthly?: MonthlyPoint[];
  monthlyHighlightFrom?: string;
  monthlyNote?: string;
}

export const casStudiesData: CaseStudy[] = [
  {
    slug: "syah-udaipur-tripadvisor-ads",
    metaData: {
      title: "TripAdvisor Ads Case Study: Syah Udaipur | Fielmente",
      description:
        "How Fielmente and Eazotel launched TripAdvisor ads for Syah Udaipur, with a reservation landing page, analytics and central lead management.",
    },
    // TODO(Fielmente): replace these temporary placeholders with Syah's logo and restaurant photography.
    img: "/fielmente_logo.png",
    hotelImg: "/hotel.png",
    title: "TripAdvisor Ads Case Study: Syah Udaipur",
    description:
      "How Fielmente and Eazotel helped a six-seat fine-dining restaurant launch TripAdvisor advertising and connect sponsored discovery with a dedicated reservation page, analytics and centralized lead management.",
    metrics: [
      {
        label: "TripAdvisor impressions",
        value: "1,156",
        note: "Opening campaign snapshot",
      },
      { label: "Ad clicks", value: "5", note: "Initial engagement recorded" },
      {
        label: "Click-through rate",
        value: "0.43%",
        note: "258% above reported benchmark",
      },
    ],
    metricsNote:
      "Early signal: Sponsored visibility and clicks confirmed. These metrics do not represent verified enquiries or confirmed reservations.",
    data: [
      {
        title: "From restaurant discovery to a direct reservation journey",
        description: [
          "Syah Udaipur is a premium, intimate restaurant designed around a limited six-seat dining experience. For a business with this level of exclusivity, the objective is not maximum footfall — it is reaching travellers who are actively looking for a distinctive dining experience and making it easy for them to take the next step.",
        ],
        lists: [
          "<b>Brand:</b> Syah Udaipur",
          "<b>Location:</b> Udaipur, Rajasthan, India",
          "<b>Category:</b> Premium fine dining · Six-seat experience",
          "<b>Service:</b> TripAdvisor Ads, landing page, analytics, lead tracking and SEO infrastructure",
          "<b>Launch:</b> 13 October 2026",
          "<b>Initial results captured:</b> 16 October 2026",
          "<b>Technology:</b> TripAdvisor · Eazotel · Google Analytics · Google Search Console",
        ],
      },
      {
        title: "Make a highly exclusive restaurant visible to the right guests",
        description: [
          "Syah wanted to advertise on TripAdvisor — a platform where visitors to Udaipur compare restaurants and decide where to dine. The challenge was to secure relevant visibility while connecting that discovery to a branded website and an organised lead-handling process.",
        ],
        lists: [
          "<b>Key principle:</b> For a six-seat dining experience, quality of interest matters more than raw traffic volume.",
        ],
      },
      {
        title: "One connected advertising and measurement setup",
        description: [
          "Rather than running an isolated media placement, the team linked campaign discovery, on-site engagement and lead management.",
        ],
        lists: [
          "<b>1. Launched TripAdvisor advertising -</b> Activated a TripAdvisor advertising campaign for Syah beginning 13 October 2026. The supplied screenshot shows a prominent sponsored Syah placement displayed above another restaurant's listing.",
          "<b>2. Built a branded landing page -</b> Created <a class=\"text-primary2 underline\" href=\"https://reserve.syahudaipur.com/\">reserve.syahudaipur.com</a> as a focused destination for visitors arriving from marketing activity and looking to explore the dining experience or enquire.",
          "<b>3. Connected Eazotel lead management -</b> Integrated the landing-page enquiry journey with the Eazotel dashboard to bring incoming guest enquiries and follow-up workflows into a central system.",
          "<b>4. Set up Google Analytics and Search Console -</b> Connected analytics and search tools to monitor website traffic, user activity, organic search discovery and future conversion optimisation. The tools alone do not establish an organic ranking position.",
        ],
      },
      {
        title: "How the connected funnel works",
        description: [
          "A direct route from sponsored restaurant discovery to a team-managed enquiry, with measurable checkpoints at each stage.",
        ],
        lists: [
          "<b>TripAdvisor Ad:</b> Relevant diners encounter Syah in a sponsored placement.",
          "<b>Reservation Page:</b> Interested guests reach Syah's branded landing experience.",
          "<b>Enquiry Action:</b> Guests can take a reservation or enquiry action.",
          "<b>Eazotel Dashboard:</b> Enquiry records can be organised for tracking and follow-up.",
          "<b>Note:</b> Process illustration only. End-to-end conversion attribution and booking outcomes require matching campaign, analytics and CRM records.",
        ],
      },
      {
        title: "Real screenshots from the launch",
        description: [
          "The campaign was shown live on TripAdvisor, and the advertising dashboard recorded early reach and click-through performance.",
        ],
        lists: [
          "<b>Sponsored placement on TripAdvisor:</b> Syah's sponsored placement shown above another restaurant's listing. This illustrates paid advertising visibility, not organic #1 ranking.",
          "<b>Initial advertising performance:</b> 1,156 impressions, 5 clicks and 0.43% CTR. Dashboard note: 258% higher CTR than benchmark.",
          "<b>Screenshot source:</b> Supplied by the campaign team on 16 October 2026 and cropped for readability.",
        ],
      },
      {
        title: "Early traction, with the foundation to measure bookings",
        description: [
          "The launch confirms delivery of paid visibility and visitor clicks. The larger business opportunity lies in linking these clicks to qualified enquiries and eventually confirmed reservations.",
        ],
        lists: [
          "<b>Sponsored presence established:</b> Syah's paid placement appeared during TripAdvisor restaurant browsing.",
          "<b>1,156 impressions delivered:</b> Initial campaign visibility recorded in the dashboard.",
          "<b>5 clicks generated:</b> Early platform engagement; clicks are not leads or bookings.",
          "<b>Connected operational setup:</b> Landing page, Eazotel, GA and Search Console in place for measurement and follow-up.",
          "<b>What happens next:</b> As the campaign runs, evaluate landing-page engagement, verified enquiries, qualified leads, cost per enquiry, confirmed reservations and booking revenue. Add those metrics only when cross-checked against Eazotel and reservation records.",
        ],
      },
      {
        title: "Clear attribution matters",
        description: [
          "<b>Advertising metrics:</b> Impressions, clicks and CTR are taken from the supplied TripAdvisor advertising dashboard screenshot dated 16 October 2026. <b>Platform comparison:</b> The dashboard itself describes the CTR as 258% above its benchmark; its benchmark methodology was not independently verified. <b>Website/CRM:</b> Google Analytics, Search Console and the Eazotel dashboard are included in the implementation, but conversion totals and direct booking revenue were not included in the supplied evidence. <b>Ranking:</b> The placement screenshot is paid promotion, not proof of organic SEO ranking.",
        ],
        lists: [
          "<b>Publishing checklist — complete when data is available:</b> Add the actual campaign spend, outbound clicks verified in Analytics, enquiry totals verified in Eazotel, confirmed reservations, revenue and screenshots of the reservation page/dashboard. Use these to update the case study's results section over time.",
        ],
      },
    ],
    cta: {
      eyebrow: "Turn Visibility Into Measurable Demand",
      title: "Want results like these for your hotel or restaurant?",
      description:
        "Connect restaurant advertising, high-converting landing pages, analytics and guest enquiry management with Fielmente and Eazotel.",
      label: "Get a Free Consultation",
    },
  },
  {
    slug: "anand-vardhan-resort",
    metaData: {
      title: "Hotel SEO Case Study: Anand Vardhan Resorts | Fielmente",
      description:
        "See the keyword strategy and SEO improvements behind Anand Vardhan Resorts' visibility gains, including methodology and search outcomes.",
    },
    className: "object-contain",
    img: "/avr-logo.png",
    hotelImg: "/abt2.webp",
    title: "SEO Success Story for Anand Vardhan Resorts",
    // Short summary for the banner and case-study cards; the full objective is in the "Objective" section.
    description:
      "How Fielmente's SEO took Anand Vardhan Resorts to the first page of Google for vegetarian and wellness resort searches in Naggar and Manali within two months.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Anand Vardhan Resorts",
          "<b>Location:</b> Manali, Himachal Pradesh, India",
          "<b>USP:</b> Pure vegetarian dining, wellness-focused hospitality, and a tranquil resort experience in the scenic Himalayan region.",
        ],
      },
      {
        title: "Objective",
        description: [
          "Anand Vardhan Resorts aimed to improve its organic visibility for niche, high-intent keywords related to vegetarian resorts in Naggar and Manali, wellness resorts in Himachal Pradesh, and pure vegetarian resort options. The goal was to attract targeted traffic from travelers searching for vegetarian-friendly and wellness-oriented stays in the region.",
        ],
      },
      {
        title: "Challenges",
        lists: [
          "• Low visibility for target keywords",
          "• Strong competition from established hospitality brands",
        ],
      },
      {
        title: "Our SEO Approach",
        lists: [
          "<b>1. Keyword Strategy & Mapping -</b> Identified high-volume, intent-based terms and mapped them to relevant pages.",
          "<b>2. On-Page Optimization -</b> Enhanced meta tags, headings, and descriptions to target high-priority keywords.",
          "<b>3. Content Optimization -</b> Created and refined landing page and blog content to capture both short-tail and long-tail keyword traffic.",
          "<b>4. Local SEO Enhancements -</b> Optimized Google Business Profile and encouraged guest reviews highlighting ‘vegetarian’ and ‘wellness’ features.",
          "<b>5. Technical SEO Fixes -</b> Improved site speed, mobile responsiveness, and URL structure for better indexing.",
        ],
      },
      {
        title: "Results in Just 2 Months",
        lists: [
          "• #1 for “veg resort in Naggar Himachal”",
          "• #1 for “pure veg resort in Naggar”",
          "• #2 for “veg resort in Naggar”",
          "• #2 for “veg resort in Himachal Naggar”",
          "• #3 for “Manali wellness resort”",
          "• #4 for “wellness resorts Manali Himachal Pradesh”",
          "• #5 for “wellness resort in Manali”",
        ],
      },
      {
        title: "Impact",
        lists: [
          "• Increased organic traffic from highly targeted audiences",
          "• Enhanced booking inquiries from organic search.",
          "• Stronger brand presence in competitive search categories.",
        ],
      },
      {
        title: "Conclusion",
        description: [
          "Fielmente’s targeted SEO strategy helped Anand Vardhan Resorts achieve significant visibility gains in just two months, positioning them as a leading choice for vegetarian and wellness travelers in Himachal Pradesh.",
        ],
      },
      {
        title: "Next Steps",
        lists: [
          "• Expand content for ‘near me’ and seasonal travel keywords.",
          "• Continue building authority with backlinks.",
          "• Leverage ranking success in paid campaigns to boost bookings.",
        ],
      },
    ],
  },
  {
    slug: "naturoville-google-ads",
    metaData: {
      title: "Google Ads Case Study: Naturoville Wellness Resort",
      description: "How Fielmente grew Naturoville Wellness Resort's Google Ads enquiries 9.5× on nearly the same budget and cut cost per enquiry by 89%.",
    },
    className: "object-contain",
    img: "/clientsLogo/naturoville.png",
    // TODO(Fielmente): replace with a photo of the property
    hotelImg: "/banner.jpg",
    title: "Google Ads Case Study: Naturoville Wellness Resort",
    monthly: [
      { month: "2024-10", enquiries: 157, cpe: 1451 },
      { month: "2024-11", enquiries: 126, cpe: 1809 },
      { month: "2024-12", enquiries: 93, cpe: 2430 },
      { month: "2025-01", enquiries: 189, cpe: 1206 },
      { month: "2025-02", enquiries: 428, cpe: 533 },
      { month: "2025-03", enquiries: 543, cpe: 420 },
      { month: "2025-04", enquiries: 500, cpe: 455 },
      { month: "2025-05", enquiries: 496, cpe: 466 },
      { month: "2025-06", enquiries: 443, cpe: 461 },
      { month: "2025-07", enquiries: 2, cpe: 13415 },
      { month: "2025-08", enquiries: 956, cpe: 208 },
      { month: "2025-09", enquiries: 1349, cpe: 209 },
      { month: "2025-10", enquiries: 989, cpe: 232 },
      { month: "2025-11", enquiries: 832, cpe: 257 },
      { month: "2025-12", enquiries: 719, cpe: 338 },
      { month: "2026-01", enquiries: 899, cpe: 386 },
      { month: "2026-02", enquiries: 707, cpe: 357 },
      { month: "2026-03", enquiries: 913, cpe: 361 },
      { month: "2026-04", enquiries: 1768, cpe: 174 },
      { month: "2026-05", enquiries: 1012, cpe: 240 },
      { month: "2026-06", enquiries: 1208, cpe: 219 },
      { month: "2026-07", enquiries: 882, cpe: 282 },
      { month: "2026-08", enquiries: 929, cpe: 287 },
      { month: "2026-09", enquiries: 2678, cpe: 77 },
    ],
    monthlyHighlightFrom: "2026-04",
    monthlyNote: "Source: Naturoville Google Ads account, Oct 2024 to Sep 2026. July 2025 shows almost no tracked enquiries. Highlighted months are the period compared in this case study (Apr–Sep 2026).",
    description: "Naturoville was already spending over ₹2 lakh a month on Google Ads, but each enquiry cost more than ₹1,500 and fewer than 2 in 100 clicks became a conversation.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Naturoville Wellness Resort",
          "<b>Location:</b> Rishikesh–Dehradun, Uttarakhand, India",
          "<b>Service:</b> Google Ads management, landing pages and conversion tracking",
          "<b>Period compared:</b> Jul–Dec 2024 vs Apr–Sep 2026 (six months each)",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "Naturoville is our largest Google Ads account and was already spending over ₹2 lakh a month in 2024 — but enquiries were thin. In the second half of 2024 each enquiry cost more than ₹1,500 and fewer than 2 in 100 clicks turned into a conversation. The spend was reaching people; the path from ad to enquiry was leaking.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Search-first structure -</b> 99% of spend in the last 12 months on high-intent wellness-retreat and therapy searches.",
          "<b>2. Dedicated landing pages -</b> One page per offer: therapies, programmes, resort stays, the pool cabana and destination weddings.",
          "<b>3. Three enquiry routes on every page -</b> WhatsApp, call and Book Now, each tracked as its own conversion.",
          "<b>4. Conversion tracking -</b> Set up so bidding optimises toward real enquiries, not page views.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Enquiries per month: 149 → 1,416 (9.5×)",
          "• Cost per enquiry: ₹1,543 → ₹177 (−89%)",
          "• Click-to-enquiry rate: 1.6% → 19.3%",
          "• Monthly budget: +9% — essentially flat",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "All figures come from the client's Google Ads account and are monthly averages over each period. An enquiry is a tracked call, WhatsApp chat, form submission or Book Now click into the booking engine; map-direction taps and page views are not counted. Enquiries are not confirmed bookings.",
        ],
      },
    ],
  },
  {
    slug: "hotel-green-castle-google-ads",
    metaData: {
      title: "Google Ads Case Study: Hotel Green Castle, Mussoorie",
      description: "How Fielmente took Hotel Green Castle from about 100 to over 1,000 Google Ads enquiries a month while cutting cost per enquiry 35%.",
    },
    className: "object-contain",
    img: "/clientsLogo/Hotel-Green-Castle.jpg",
    // TODO(Fielmente): replace with a photo of the property
    hotelImg: "/banner.jpg",
    title: "Google Ads Case Study: Hotel Green Castle, Mussoorie",
    description: "Scaling Google Ads in Mussoorie's crowded hotel market without the cost per enquiry blowing out.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Hotel Green Castle",
          "<b>Location:</b> Mussoorie, Uttarakhand, India",
          "<b>Service:</b> Google Ads management, landing pages and conversion tracking",
          "<b>Period compared:</b> Oct 2024 – Mar 2025 (first six months) vs Apr – Sep 2026",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "Mussoorie is one of the most crowded hotel markets in North India, and search demand swings hard between summer, long weekends and the off-season. The goal was to scale budget into peak demand without the cost per enquiry blowing out — the usual failure mode when a hotel simply raises its daily budget.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Search campaigns -</b> About 90% of spend on Mussoorie stay intent, with Performance Max added for reach at low cost.",
          "<b>2. Dedicated landing page -</b> Book Now, WhatsApp and a click-to-call number, each tracked.",
          "<b>3. Call tracking -</b> On ads and the page, so phone bookings count toward optimisation.",
          "<b>4. Seasonal scaling -</b> Budget pushed into peak months (Mar–Apr, Aug), which delivered the lowest cost per enquiry, ₹26–33.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Enquiries per month: 106 → 1,005 (9.5×)",
          "• Cost per enquiry: ₹75 → ₹49 (−35%)",
          "• Clicks over six months: 4,218 → 36,450",
          "• Click-to-enquiry rate held at 15–16.5% while scaling",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "All figures come from the client's Google Ads account and are monthly averages over each period. An enquiry is a tracked call, WhatsApp chat, form submission or Book Now click into the booking engine; map-direction taps and page views are not counted. Enquiries are not confirmed bookings.",
        ],
      },
    ],
  },
  {
    slug: "naad-wellness-google-ads",
    metaData: {
      title: "Naad Wellness Google Ads Case Study | Fielmente",
      description: "Discover the Google Ads tracking, landing-page and campaign changes Fielmente used for Naad Wellness, with documented results.",
    },
    className: "object-contain",
    img: "/clientsLogo/naad-wellness.png",
    imgBg: "#110D3C",
    // TODO(Fielmente): replace with a photo of the property
    hotelImg: "/banner.jpg",
    title: "Google Ads Case Study: Naad Wellness",
    monthly: [
      { month: "2024-11", enquiries: 14, cpe: 781 },
      { month: "2024-12", enquiries: 38, cpe: 716 },
      { month: "2025-01", enquiries: 59, cpe: 748 },
      { month: "2025-02", enquiries: 30, cpe: 1140 },
      { month: "2025-03", enquiries: 16, cpe: 2134 },
      { month: "2025-04", enquiries: 8, cpe: 1187 },
      { month: "2025-05", enquiries: 36, cpe: 681 },
      { month: "2025-07", enquiries: 14, cpe: 1511 },
      { month: "2025-08", enquiries: 27, cpe: 467 },
      { month: "2025-09", enquiries: 6, cpe: 1367 },
      { month: "2025-10", enquiries: 21, cpe: 572 },
      { month: "2025-11", enquiries: 22, cpe: 677 },
      { month: "2025-12", enquiries: 12, cpe: 1338 },
      { month: "2026-01", enquiries: 16, cpe: 1221 },
      { month: "2026-02", enquiries: 85, cpe: 513 },
      { month: "2026-03", enquiries: 691, cpe: 166 },
      { month: "2026-04", enquiries: 760, cpe: 184 },
      { month: "2026-05", enquiries: 486, cpe: 104 },
      { month: "2026-06", enquiries: 284, cpe: 113 },
      { month: "2026-07", enquiries: 445, cpe: 184 },
      { month: "2026-08", enquiries: 892, cpe: 153 },
      { month: "2026-09", enquiries: 332, cpe: 153 },
    ],
    monthlyHighlightFrom: "2026-03",
    monthlyNote: "Source: Naad Wellness Google Ads account, Nov 2024 to Sep 2026. No data for Jun 2025. Highlighted months are the period compared in this case study (Mar–Sep 2026).",
    description: "Steady ad traffic but very few enquiries — often under 30 a month at ₹700–2,000 each.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Naad Wellness",
          "<b>Location:</b> Kundli, Delhi NCR, India",
          "<b>Service:</b> Google Ads management, landing pages and conversion tracking",
          "<b>Period compared:</b> Nov 2024 – Jan 2026 (14 months) vs Mar – Sep 2026 (7 months)",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "For over a year Naad's ads brought steady traffic but very few enquiries — often under 30 a month at ₹700–2,000 each. A retreat close to Delhi should win on convenience, but the landing experience wasn't turning interest into conversations.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Landing page audit and rebuild -</b> Book Now and WhatsApp put front and centre.",
          "<b>2. Ad group review -</b> Budget concentrated where enquiries were actually coming from.",
          "<b>3. Lead capture in the Eazotel dashboard -</b> Cross-checked against the resort's guest records to measure lead-to-stay conversion.",
          "<b>4. Budget scaled from March 2026 -</b> With the click-to-enquiry rate holding above 20% every month since.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Enquiries per month: 23 → 556 (24×)",
          "• Cost per enquiry: ₹906 → ₹156 (−83%)",
          "• Click-to-enquiry rate: 2.4% → 24.5%",
          "• 100% of spend on Search",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "All figures come from the client's Google Ads account and are monthly averages over each period. An enquiry is a tracked call, WhatsApp chat, form submission or Book Now click into the booking engine; map-direction taps and page views are not counted. Enquiries are not confirmed bookings.",
        ],
      },
    ],
  },
  {
    slug: "the-rudraksh-google-ads",
    metaData: {
      title: "Google Ads Case Study: The Rudraksh Himalayan Retreat",
      description: "How Fielmente took The Rudraksh from almost no tracked enquiries to 447 a month at ₹41 per enquiry with Google Ads.",
    },
    className: "object-contain",
    img: "/clientsLogo/rudraksh.png",
    // TODO(Fielmente): replace with a photo of the property
    hotelImg: "/banner.jpg",
    title: "Google Ads Case Study: The Rudraksh, A Himalayan Retreat",
    monthly: [
      { month: "2024-12", enquiries: 2, cpe: 4241 },
      { month: "2025-01", enquiries: 6, cpe: 1265 },
      { month: "2025-03", enquiries: 4, cpe: 692 },
      { month: "2025-04", enquiries: 164, cpe: 48 },
      { month: "2025-05", enquiries: 253, cpe: 59 },
      { month: "2025-06", enquiries: 285, cpe: 28 },
      { month: "2025-07", enquiries: 564, cpe: 31 },
      { month: "2025-08", enquiries: 279, cpe: 41 },
      { month: "2025-09", enquiries: 262, cpe: 51 },
      { month: "2025-10", enquiries: 541, cpe: 54 },
      { month: "2025-11", enquiries: 635, cpe: 39 },
      { month: "2025-12", enquiries: 741, cpe: 38 },
      { month: "2026-01", enquiries: 743, cpe: 35 },
    ],
    monthlyHighlightFrom: "2025-04",
    monthlyNote: "Source: The Rudraksh Google Ads account, Dec 2024 to Jan 2026 (the period this case study covers). No data for Feb 2025.",
    description: "Plenty of cheap clicks but almost no measurable enquiries — nothing for Google's bidding to learn from.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> The Rudraksh, A Himalayan Retreat",
          "<b>Location:</b> Tehri Garhwal, Uttarakhand, India",
          "<b>Service:</b> Google Ads management, landing pages and conversion tracking",
          "<b>Period compared:</b> Dec 2024 – Mar 2025 (launch) vs Apr 2025 – Jan 2026 (10 months)",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "A remote, family-run retreat with no big-brand recognition and a modest budget. In the first months, ads generated plenty of cheap clicks but almost no measurable enquiries — so there was nothing for Google's bidding to learn from.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Clean conversion tracking -</b> Book Now, Book Your Stay, calls and WhatsApp.",
          "<b>2. Search-led structure -</b> Over 99% of spend focused on high-intent stay searches.",
          "<b>3. Beyond the ads -</b> OTA listing audits, retreat brochures and in-room guest collateral.",
          "<b>4. Retreat programmes -</b> Since 2026, budget has shifted toward themed retreats — a higher-value, lower-volume enquiry.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Enquiries per month: 4 → 447",
          "• Cost per enquiry: ₹1,570 → ₹41 (−97%)",
          "• Click-to-enquiry rate: 0.2% → 10.5%",
          "• 4,467 enquiries in 10 months",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "All figures come from the client's Google Ads account and are monthly averages over each period. An enquiry is a tracked call, WhatsApp chat, form submission or Book Now click into the booking engine; map-direction taps and page views are not counted. Enquiries are not confirmed bookings.",
        ],
      },
    ],
  },
  {
    slug: "ebc-mussoorie-google-ads",
    metaData: {
      title: "Google Ads Case Study: EBC Mussoorie | Fielmente",
      description: "How Fielmente grew EBC Mussoorie from about 11 to 449 direct Google Ads enquiries a month and cut cost per enquiry by 44%.",
    },
    className: "object-contain",
    img: "/clientsLogo/ebc.jpg",
    // TODO(Fielmente): replace with a photo of the property
    hotelImg: "/banner.jpg",
    title: "Google Ads Case Study: EBC Mussoorie",
    description: "Most of what Google counted as conversions were map taps — visibility, but few direct booking conversations.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> EBC Mussoorie",
          "<b>Location:</b> Mussoorie, Uttarakhand, India",
          "<b>Service:</b> Google Ads management, landing pages and conversion tracking",
          "<b>Period compared:</b> Sep 2023 – Dec 2024 vs Oct 2025 – Apr 2026 (peak season)",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "In EBC's early campaigns, most of what Google counted as conversions were Google Maps direction taps — useful visibility, but few direct booking conversations. The resort wanted enquiries it could close, not just visibility.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Structured Search campaigns -</b> 98% of spend in the last 12 months.",
          "<b>2. Dedicated landing page -</b> Book Your Stay / Book Your Mountain Escape, call and WhatsApp CTAs.",
          "<b>3. Seasonal scaling -</b> Budget scaled into the Oct–Apr season, when enquiries peaked at 736 a month (Dec 2025).",
          "<b>4. Occupancy-led budgets -</b> Spend eased back from May 2026 in line with the resort's occupancy.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Direct enquiries per month: 11 → 449 (39×)",
          "• Cost per enquiry: ₹396 → ₹223 (−44%)",
          "• Click-to-enquiry rate: 1.5% → 15.6%",
          "• A three-year relationship, since Sep 2023",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "All figures come from the client's Google Ads account and are monthly averages over each period. An enquiry is a tracked call, WhatsApp chat, form submission or Book Now click into the booking engine; map-direction taps and page views are not counted. Enquiries are not confirmed bookings.",
        ],
      },
    ],
  },
  // {
  //   slug: "north-wind-57",
  //   // img: "/home/client.png",
  //   img: "/north-wind.png",
  //   title: "North Wind 57",
  //   description:
  //     "North Wind 57 aimed to rank at the top for competitive hotel and resort keywords related to Bir and Bir Billing, increase organic visibility in Google Hotel Pack results, and attract more direct bookings from",
  // },
  {
    slug: "wabi-sabi-resort",
    img: "/clientsLogo/wabi-sabi.png",
    title: "Wabi Sabi Resort",
    metaData: {
      title: "Wabi Sabi Resort Case Study | Hotel Marketing & SEO Results",
      description:
        "Explore how Fielmente helped Wabi Sabi Resort improve visibility, increase bookings, and grow revenue using SEO and hotel marketing strategies.",
    },
    description:
      "Wabi Sabi Resort is a luxurious retreat nestled amidst the serene landscapes of Igatpuri. The resort boasts stunning vistas, an infinity pool, and a harmonious blend of modern amenities and nature's embrace. With its 45",
  },
];

import type { MonthlyPoint } from "./CaseStudyChart";

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  img: string;
  hotelImg?: string;
  /** Describe what the banner photo shows. Required when it is a stock photo of the place, not the client's property. */
  hotelImgAlt?: string;
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

/** A free Unsplash photo (unsplash.com/license) for a banner, served through next/image. */
const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=1920&q=80&fm=jpg&fit=max`;

const FNB_CTA = {
  eyebrow: "Restaurants and cloud kitchens",
  title: "Want results like these for your restaurant?",
  description: "Talk to Fielmente about social media, Google listings, Swiggy and Zomato, and ads that bring diners in.",
  label: "Get a Free Consultation",
};

export const casStudiesData: CaseStudy[] = [
  {
    slug: "syah-udaipur-tripadvisor-ads",
    metaData: {
      title: "TripAdvisor Ads Case Study: Syah Udaipur | Fielmente",
      description:
        "How Fielmente and Eazotel launched TripAdvisor ads for Syah Udaipur, with a reservation landing page, analytics and central lead management.",
    },
    // Syah's logo and its reservation site (built by us). Swap the second for restaurant photography when available.
    img: "/clientsLogo/syah-udaipur.png",
    hotelImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&fit=crop",
    hotelImgAlt: "Atmospheric fine-dining restaurant interior, illustrative photograph",
    title: "TripAdvisor Ads Case Study: Syah Udaipur",
    description:
      "How Fielmente and Eazotel helped a six-seat fine-dining restaurant launch TripAdvisor advertising and connect sponsored discovery with a dedicated reservation page, analytics and centralized lead management.",
    metrics: [
      {
        label: "TripAdvisor impressions",
        value: "4,567",
        note: "Latest supplied campaign snapshot",
      },
      { label: "Ad clicks", value: "31", note: "Latest supplied dashboard" },
      {
        label: "Click-through rate",
        value: "0.68%",
        note: "31 clicks from 4,567 delivered impressions",
      },
    ],
    metricsNote:
      "Campaign dashboard snapshot: 42,252 booked impressions, 4,567 delivered impressions, 31 clicks and 0.68% CTR. Delivery indicator: Awaiting Data. These metrics do not represent verified enquiries or confirmed reservations.",
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
          "<b>Latest dashboard snapshot:</b> October 2026",
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
          "<b>TripAdvisor Ad:</b> Relevant diners encounter Syah in a sponsored placement above the Udaipur restaurant results or while browsing other restaurant pages.",
          "<b>Reservation Page:</b> Interested guests reach Syah's branded landing experience.",
          "<b>Website experience:</b> Guests explore the tasting menu, culinary imagery, guest reviews and restaurant information.",
          "<b>Eazotel assistant:</b> Guests can open a chatbot conversation or use WhatsApp and telephone contact options.",
          "<b>Reservation request:</b> The form asks for name, WhatsApp number, date, party size, arrival time and menu preference; the restaurant confirms availability separately.",
          "<b>Eazotel Dashboard:</b> Enquiry records can be organised for tracking and follow-up.",
          "<b>Note:</b> Process illustration only. End-to-end conversion attribution and booking outcomes require matching campaign, analytics and CRM records.",
        ],
      },
      {
        title: "Real screenshots from the launch",
        description: [
          "The screenshots show Syah in a sponsored placement above the Udaipur restaurant listings and while a traveller browses another restaurant page. The advertising dashboard records delivery and clicks; these are not confirmed reservations.",
        ],
        lists: [
          "<b>Sponsored placement on TripAdvisor:</b> Syah's sponsored placement shown above another restaurant's listing. This illustrates paid advertising visibility, not organic #1 ranking.",
          "<b>Initial advertising performance:</b> 4,567 delivered impressions, 31 clicks and 0.68% CTR, from 42,252 booked impressions. Delivery indicator: Awaiting Data.",
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
          "<b>4,567 impressions delivered:</b> Initial campaign visibility recorded in the dashboard.",
          "<b>31 clicks generated:</b> Early platform engagement; clicks are not leads or bookings.",
          "<b>Connected operational setup:</b> Landing page, Eazotel, GA and Search Console in place for measurement and follow-up.",
          "<b>What happens next:</b> As the campaign runs, evaluate landing-page engagement, verified enquiries, qualified leads, cost per enquiry, confirmed reservations and booking revenue. Add those metrics only when cross-checked against Eazotel and reservation records.",
        ],
      },
      {
        title: "Clear attribution matters",
        description: [
          "<b>Advertising metrics:</b> Impressions, clicks and CTR are taken from the supplied TripAdvisor advertising dashboard screenshot shared in October 2026. <b>Delivery:</b> The screenshot shows 42,252 booked impressions, of which 4,567 were delivered at the time captured. <b>Website/CRM:</b> Google Analytics, Search Console and the Eazotel dashboard are included in the implementation, but conversion totals and direct booking revenue were not included in the supplied evidence. <b>Ranking:</b> The placement screenshot is paid promotion, not proof of organic SEO ranking.",
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
    // The client's website, built by us (from /our-work/). Swap for a property photo when available.
    hotelImg: "/our-work/sites/naturovillewellnessresort-com.webp",
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
    // The client's website, built by us (from /our-work/). Swap for a property photo when available.
    hotelImg: "/our-work/sites/naadwellness-in.webp",
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
    // The client's website, built by us (from /our-work/). Swap for a property photo when available.
    hotelImg: "/our-work/sites/therudrakshretreat-com.webp",
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
    // The client's website, built by us (from /our-work/). Swap for a property photo when available.
    hotelImg: "/our-work/sites/ebcmussoorie-com.webp",
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
  {
    slug: "mahabir-palace-social-media",
    metaData: {
      title: "Mahabir Palace Social Media Case Study, Kathmandu | Fielmente",
      description: "How Fielmente's Meta ads and a Nepali travel creator took Kathmandu hotel Mahabir Palace from about 50 to 44,600 accounts reached in two weeks.",
    },
    className: "object-contain",
    img: "/clientsLogo/mahabir-palace.png",
    hotelImg: unsplash("photo-1605640840605-14ac1855827b"),
    hotelImgAlt: "Boudhanath Stupa and the rooftops of Kathmandu",
    title: "Social Media Case Study: Mahabir Palace, Kathmandu",
    description: "A Kathmandu hotel that Instagram showed to about 50 people a fortnight, until the ads and a creator partnership went live.",
    metrics: [
      { label: "Accounts reached in two weeks", value: "44,600", note: "18–31 July 2022, up from about 50" },
      { label: "Accounts engaged", value: "224", note: "Same fortnight, up from 1" },
      { label: "Followers in July 2022", value: "+36%", note: "To 116 followers" },
      { label: "Meta ads running", value: "6", note: "With 25 stories and 5 posts" },
    ],
    metricsNote: "Source: Mahabir Palace Instagram Insights for 18–31 July 2022, compared with 4–17 July. Reach counts unique accounts that saw the content, not bookings.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Mahabir Palace",
          "<b>Location:</b> Kathmandu, Nepal",
          "<b>Category:</b> Hotel with a restaurant and bar, conference hall and health club",
          "<b>Service:</b> Instagram and Facebook management, Meta ads, influencer marketing",
          "<b>Started:</b> July 2022",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "Mahabir Palace has rooms, a restaurant and bar, a conference hall, a health club and a jacuzzi, but on social media it was close to invisible. In early July 2022 Instagram showed the hotel to about 50 accounts a fortnight, and almost nobody engaged. The budget was small, so every rupee had to reach people planning a stay in Kathmandu.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Meta ads -</b> Six ads running at once on Instagram and Facebook, aimed at travellers planning a Kathmandu trip.",
          "<b>2. A creator partnership -</b> A collaboration with the Nepal travel page Roaming Around Nepal, which publishes on TikTok, YouTube and Instagram.",
          "<b>3. Daily stories -</b> 25 stories and 5 posts in the launch fortnight, showing the rooms, food and facilities.",
          "<b>4. One look and voice -</b> Every post and ad in the same style, so the hotel is recognisable from one scroll to the next.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Accounts reached in a fortnight: about 50 → 44,600",
          "• Accounts engaged: 1 → 224",
          "• Followers up 36% across July 2022",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "All figures come from the hotel's Instagram Insights for 4–31 July 2022, saved in our records at the time. Reach counts unique accounts that saw the content; it measures awareness, not bookings. We do not have booking figures from this period to publish.",
        ],
      },
    ],
  },
  {
    slug: "hotel-platinum-shravasti-social-media",
    metaData: {
      title: "Hotel Platinum Shravasti Social Media Case Study | Fielmente",
      description: "How Fielmente took Hotel Platinum Shravasti's Instagram from about 60 to 56,100 accounts reached in 90 days, and tripled its followers.",
    },
    className: "object-contain",
    img: "/clientsLogo/hotel-platinum-shravasti.png",
    hotelImg: unsplash("photo-1667883643074-31b942669d08"),
    hotelImgAlt: "Buddha statue at a Buddhist pilgrimage site",
    title: "Social Media Case Study: Hotel Platinum, Shravasti",
    description: "A hotel in a Buddhist pilgrimage town whose Instagram reached about 60 people in three months.",
    metrics: [
      { label: "Accounts reached in 90 days", value: "56,100", note: "May–July 2022, up from about 60" },
      { label: "Accounts engaged", value: "939", note: "Up from 2 in the previous 90 days" },
      { label: "Followers", value: "226", note: "+222% in 90 days" },
      { label: "Content published", value: "103", note: "39 posts, 52 stories, 12 reels" },
    ],
    metricsNote: "Source: Hotel Platinum Shravasti Instagram Insights for 3 May – 31 July 2022, compared with 2 February – 2 May. Reach counts unique accounts, not bookings.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Hotel Platinum Shravasti",
          "<b>Location:</b> Shravasti, Uttar Pradesh, India",
          "<b>Category:</b> Hotel with a restaurant, in a Buddhist pilgrimage town",
          "<b>Service:</b> Instagram management and content",
          "<b>Period:</b> May – July 2022",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "Shravasti draws Buddhist pilgrims and tour groups from across Asia, but Hotel Platinum's Instagram was dormant. Between February and early May 2022 it reached about 60 accounts and had around 70 followers, so the hotel was missing from the place many travellers now check before they book.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Profile and content plan -</b> A clear profile and a calendar built around the rooms, the restaurant and the town's pilgrimage sites.",
          "<b>2. A steady rhythm -</b> 39 posts, 52 stories and 12 reels in 90 days.",
          "<b>3. Reels first -</b> Short videos to reach people who did not follow the account yet.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Accounts reached in 90 days: about 60 → 56,100",
          "• Accounts engaged: 2 → 939",
          "• Followers: about 70 → 226 (+222%)",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "All figures come from the hotel's Instagram Insights for 3 May – 31 July 2022, compared with the 90 days before, saved in our records at the time. Reach peaked in May and June; July alone reached 3,612 accounts. Reach measures awareness, not bookings.",
        ],
      },
    ],
  },
  {
    slug: "zar-e-biryani-social-media",
    metaData: {
      title: "Zar-e-Biryani Social Media Case Study, Gandhinagar | Fielmente",
      description: "How Fielmente's content, offers and festive campaigns reached 119,000 accounts in 90 days for Gandhinagar biryani house Zar-e-Biryani.",
    },
    className: "object-contain",
    img: "/clientsLogo/zar-e-biryani.png",
    imgBg: "#000000",
    hotelImg: unsplash("photo-1697155406055-2db32d47ca07"),
    hotelImgAlt: "A pot of biryani",
    title: "Social Media Case Study: Zar-e-Biryani, Gandhinagar",
    description: "A biryani house up against every other biryani on Swiggy and Zomato, needing people to order it by name.",
    metrics: [
      { label: "Accounts reached in 90 days", value: "119,000", note: "May–July 2022" },
      { label: "Accounts engaged", value: "931", note: "Same 90 days" },
      { label: "New followers", value: "+120", note: "More than the 90 days before" },
      { label: "Content published", value: "88", note: "53 posts, 29 stories, 6 reels" },
    ],
    metricsNote: "Source: Zar-e-Biryani Instagram Insights for 3 May – 31 July 2022. Two paid ads ran in the period. Reach is awareness, not orders.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Zar-e-Biryani",
          "<b>Location:</b> Gandhinagar, Gujarat, India",
          "<b>Category:</b> Lucknowi and Hyderabadi biryani: dine-in, takeaway, and delivery on Swiggy and Zomato",
          "<b>Service:</b> Social media, ads, festive campaigns, menu design",
          "<b>Working together:</b> 2022 – 2025",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "On Swiggy and Zomato, every biryani looks alike in a list. Zar-e-Biryani needed people in Gandhinagar and Ahmedabad to know its Lucknowi and Hyderabadi biryanis by name, then order them or come to the outlet.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. A content plan -</b> Biryani-first posts and reels, every caption pointing to Swiggy, Zomato or a direct phone order.",
          "<b>2. Offers people could act on -</b> 15% off dine-in and takeaway, and gift vouchers at the Gandhinagar outlet.",
          "<b>3. Festive campaigns -</b> Diwali, Gujarati New Year and Christmas creatives.",
          "<b>4. Menu design -</b> A redesigned menu in 2025.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• 119,000 accounts reached in 90 days",
          "• 931 accounts engaged",
          "• 120 more new followers than the 90 days before",
          "• A three-year working relationship, 2022 to 2025",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "Reach, engagement and follower figures come from the restaurant's Instagram Insights for 3 May – 31 July 2022, saved in our records at the time. Reach measures awareness, not orders; Swiggy and Zomato order data was not part of this report.",
        ],
      },
    ],
    cta: FNB_CTA,
  },
  {
    slug: "desi-bar-grill-social-media",
    metaData: {
      title: "Desi Bar & Grill Case Study, Mississauga | Fielmente",
      description: "How Fielmente rebuilt Desi Bar & Grill's social media and Google listing in Mississauga: reach up 258% to about 158,000 accounts.",
    },
    className: "object-contain",
    img: "/clientsLogo/desi-bar-grill.png",
    hotelImg: unsplash("photo-1785369608209-caeed2ba78bb"),
    hotelImgAlt: "The Mississauga skyline",
    title: "Social Media & Local SEO Case Study: Desi Bar & Grill, Mississauga",
    description: "An Indian restaurant in one of Canada's most crowded Indian-food markets, with low footfall and almost no online presence.",
    metrics: [
      { label: "Account reach", value: "158K", note: "+258% on the period before" },
      { label: "Impressions", value: "+190%" },
      { label: "Profile visits", value: "+110%" },
      { label: "Followers", value: "+30%" },
    ],
    metricsNote: "Source: Instagram insights in our results report to Desi Bar & Grill, compared with the period before Fielmente started. Reach counts accounts, not covers or orders.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Desi Bar & Grill",
          "<b>Location:</b> Mississauga, Ontario, Canada",
          "<b>Category:</b> North Indian restaurant and bar",
          "<b>Service:</b> Social media, Google listing, local SEO, review management",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "Mississauga, next to Toronto, has dozens of Indian restaurants. Desi Bar & Grill's food was good, but footfall was low and it had almost no online presence: no social pages, no photos on Google, few reviews and none of them answered.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Social pages from scratch -</b> New profiles and monthly campaigns, planned from market research to reach the Indian community and non-Indian diners.",
          "<b>2. Google listing rebuild -</b> Photos, details and review replies, and the listing checked on Canadian delivery apps.",
          "<b>3. Local SEO -</b> Link building and listing work to rank for Indian food searches nearby.",
          "<b>4. A Punjabi identity -</b> Bollywood and Punjabi music and visual cues in the content and the dining room, to match the North Indian menu.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• Account reach up 258%, to about 158,000",
          "• Impressions up 190%",
          "• Profile visits up 110%",
          "• Followers up 30%",
          "• The restaurant has since opened a second branch",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "Figures come from the Instagram insights in our results report to the restaurant, comparing the campaign period with the period before we started. Reach and impressions measure awareness, not covers or revenue; we do not hold the restaurant's sales data.",
        ],
      },
    ],
    cta: FNB_CTA,
  },
  {
    slug: "doner-gyros-chandkheda-branding",
    metaData: {
      title: "Döner & Gyros Chandkheda Case Study | Fielmente",
      description: "Menu design, Google Business Profile, influencers and a reels campaign that reached 497,000 accounts for Döner & Gyros in Chandkheda, Ahmedabad.",
    },
    className: "object-contain",
    img: "/clientsLogo/D&G-logo-03-1.png",
    hotelImg: unsplash("photo-1633321702518-7feccafb94d5"),
    hotelImgAlt: "A doner wrap",
    title: "Branding & Social Media Case Study: Döner & Gyros, Chandkheda",
    description: "A franchise outlet in a crowded fast-food market, building local awareness from the menu board up.",
    metrics: [
      { label: "Reach of one reels campaign", value: "497K", note: "Targeted Instagram reels, early 2023" },
    ],
    metricsNote: "Source: Instagram ad results for the reels campaign. Reach is awareness, not orders.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Döner & Gyros (franchise outlet)",
          "<b>Location:</b> Chandkheda, Ahmedabad, Gujarat, India",
          "<b>Category:</b> Quick-service doner and gyros",
          "<b>Service:</b> Menu design, Google Business Profile, social media, influencer marketing, paid reels",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "Chandkheda has no shortage of fast food. The outlet needed local people to know it was there, recognise the brand and choose it, with an online presence to match.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Display menu -</b> A menu board designed around the brand's position: quality ingredients, freshly prepared.",
          "<b>2. Google Business Profile -</b> Profile optimisation and local listings, so the outlet shows up in nearby searches.",
          "<b>3. Content and influencers -</b> A content plan and collaborations with local creators.",
          "<b>4. Paid reels -</b> A targeted reels campaign for the area around the outlet.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• One reels campaign reached 497,000 targeted accounts",
          "• Followers and engagement grew with the content and influencer work",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "Reach comes from the Instagram ad results for the reels campaign in early 2023. It measures how many accounts saw the reels, not orders; we do not hold the outlet's sales data.",
        ],
      },
    ],
    cta: FNB_CTA,
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
    metaData: {
      title: "Wabi Sabi Resort Case Study: Branding & SEO | Fielmente",
      description: "How Fielmente built Wabi Sabi Resort's brand identity in Igatpuri and grew its website from 38 to 1,500+ backlinks, with 19 of 21 target keywords ranking.",
    },
    className: "object-contain",
    img: "/clientsLogo/wabi-sabi.png",
    hotelImg: unsplash("photo-1593202233212-6d7e5398bc69"),
    hotelImgAlt: "Green hills of Igatpuri in the monsoon",
    title: "Branding & SEO Case Study: Wabi Sabi Resort, Igatpuri",
    description: "A new nature resort in Igatpuri that needed a brand guests remember and a website Google could find.",
    metrics: [
      { label: "Target keywords ranking", value: "19 of 21", note: "July 2024" },
      { label: "Organic visits a month", value: "1,000", note: "Up from 750 the month before" },
      { label: "Domain authority", value: "11", note: "From 1 at the start" },
      { label: "Backlinks", value: "1,500+", note: "From 38 at the start" },
    ],
    metricsNote: "Source: Fielmente's SEO report for Wabi Sabi Resort, 26 July 2024. Organic visits are website sessions from Google, not bookings.",
    data: [
      {
        title: "Overview",
        lists: [
          "<b>Brand:</b> Wabi Sabi Resort",
          "<b>Location:</b> Igatpuri, Maharashtra, India",
          "<b>Category:</b> Nature resort in the Western Ghats",
          "<b>Service:</b> Brand identity, on-property collateral, SEO, social media content, menu design",
          "<b>Working together:</b> since 2024",
        ],
      },
      {
        title: "The Challenge",
        description: [
          "Wabi Sabi is named after the Japanese idea of finding beauty in simplicity and imperfection. The resort sits among hills with more than 500 species of plants and trees, but it had no visual identity to carry that idea, and its new website had almost no search presence: a domain authority of 1 and 38 backlinks.",
        ],
      },
      {
        title: "What We Did",
        lists: [
          "<b>1. Brand identity -</b> Logo, a deep teal and sand palette, typefaces and a brand pattern, set out in brand guidelines.",
          "<b>2. On-property collateral -</b> Room-number signs, key cards, water bottles, toiletries, the menu and a guest feedback form, all in the same system.",
          "<b>3. SEO -</b> Keyword research for Igatpuri stays, on-page fixes, site speed and backlink building, reported every month.",
          "<b>4. Social content -</b> Seasonal reels, from monsoon getaways to corporate retreats.",
        ],
      },
      {
        title: "Results",
        lists: [
          "• 19 of 21 target keywords ranking on Google",
          "• Organic visits a month: 750 → 1,000",
          "• Domain authority: 1 → 11; page authority: 10 → 27",
          "• Backlinks: 38 → 1,500+",
          "• SEO score 100 and a mobile speed score of 78",
          "• All organic traffic from non-brand searches, now including the Igatpuri region",
        ],
      },
      {
        title: "How We Measured",
        description: [
          "Figures come from Fielmente's SEO report dated 26 July 2024, which tracks keyword rankings, Google Analytics traffic and backlinks from the start of the project. Domain and page authority are third-party scores, not Google's. Organic visits are not bookings.",
        ],
      },
    ],
  },
];

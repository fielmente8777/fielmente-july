// Rich case studies for /case-study/ and /case-study/[story]/.
// All figures come from each client's Google Ads account (Sep 2023 – Sep 2026),
// averaged per month over the stated periods. "Enquiries" = tracked calls, WhatsApp chats,
// form submissions and Book Now clicks; map-direction taps and page views are excluded.
// Photos in /public/case-studies/ are representative images from the site's own library,
// not the properties. Replace each file (same name) with real property photos when available.

export type MonthPoint = [month: string, enquiries: number, costPerEnquiry: number | null];

export interface CaseStudy {
  slug: string;
  client: string;
  shortName: string;
  logo: string;
  /** Background behind the logo — for white or dark-square logos. Default white. */
  logoBg?: string;
  location: string;
  propertyType: string;
  service: string;
  heroImage: string;
  heroAlt: string;
  detailImage?: string;
  detailAlt?: string;
  headline: string;
  summary: string;
  cardStat: { value: string; label: string };
  keyStat: { value: string; label: string };
  periods: { before: string; after: string };
  stats: { value: string; label: string }[];
  before: string[];
  after: string[];
  challenge: string;
  approach: { title: string; body: string }[];
  channelMix: { label: string; share: number }[];
  monthly: MonthPoint[];
  chartFrom: string;
  servicesUsed: { name: string; note: string; href: string }[];
  meta: { title: string; description: string };
}

const googleAds = {
  name: "Google Ads management",
  note: "Search-first campaigns built around stay intent",
  href: "/services/google-ads-agency/",
};
const landingPages = {
  name: "Landing pages & tracking",
  note: "Pages built to be enquired from, every action tracked",
  href: "/google-ads-for-hotels/",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "naturoville-google-ads",
    client: "Naturoville Wellness Resort",
    shortName: "Naturoville",
    logo: "/clientsLogo/naturoville.png",
    location: "Rishikesh–Dehradun, Uttarakhand",
    propertyType: "Ayurveda & naturopathy resort",
    service: "Google Ads",
    heroImage: "/case-studies/naturoville-hero.jpg",
    heroAlt: "Guests relaxing at a wellness retreat beside a lotus pond (representative image)",
    detailImage: "/case-studies/wellness-herbal.jpg",
    detailAlt: "Calm guest room with morning tea (representative image)",
    headline: "Nearly the same budget. 9.5× the enquiries.",
    summary:
      "Naturoville was already investing over ₹2 lakh a month in Google Ads, but each enquiry cost more than ₹1,500. We rebuilt the path from search to enquiry — and the same budget now brings in over 1,400 enquiries a month.",
    cardStat: { value: "−89%", label: "cost per enquiry" },
    keyStat: { value: "9.5×", label: "more enquiries a month on a near-flat budget" },
    periods: { before: "Jul – Dec 2024", after: "Apr – Sep 2026" },
    stats: [
      { value: "149 → 1,416", label: "enquiries per month" },
      { value: "₹1,543 → ₹177", label: "cost per enquiry" },
      { value: "1.6% → 19.3%", label: "clicks that became an enquiry" },
      { value: "+9%", label: "change in monthly budget" },
    ],
    before: [
      "Fewer than 2 in 100 ad clicks turned into a conversation",
      "Every enquiry cost more than ₹1,500",
      "Clicks were arriving; conversations weren't",
    ],
    after: [
      "Nearly 1 in 5 clicks becomes a call, WhatsApp chat or booking click",
      "Enquiries cost ₹177 on average — 89% less",
      "A dedicated page for every therapy, programme and stay",
    ],
    challenge:
      "Naturoville is our largest Google Ads account and was already spending over ₹2 lakh a month in 2024 — but enquiries were thin. In the second half of 2024 each enquiry cost more than ₹1,500 and fewer than 2 in 100 clicks turned into a conversation. The spend was reaching the right people; the path from ad to enquiry was leaking.",
    approach: [
      {
        title: "Search-first structure",
        body: "99% of spend in the last 12 months went to Search, focused on high-intent wellness-retreat and therapy searches.",
      },
      {
        title: "A landing page per offer",
        body: "Separate pages for therapies, programmes, resort stays, the pool cabana and destination weddings — so every ad lands on the right answer.",
      },
      {
        title: "Three ways to enquire, everywhere",
        body: "WhatsApp, call and Book Now on every page, each tracked as its own conversion.",
      },
      {
        title: "Bidding on real enquiries",
        body: "Conversion tracking set up so Google optimises toward conversations, not page views.",
      },
    ],
    channelMix: [
      { label: "Search", share: 99.2 },
      { label: "Performance Max & Smart", share: 0.8 },
    ],
    chartFrom: "Jan 2024",
    monthly: [
      ["2024-01", 547, 361],
      ["2024-02", 287, 572],
      ["2024-03", 524, 319],
      ["2024-04", 364, 601],
      ["2024-05", 231, 985],
      ["2024-06", 315, 712],
      ["2024-07", 259, 891],
      ["2024-08", 111, 2162],
      ["2024-09", 148, 1530],
      ["2024-10", 157, 1451],
      ["2024-11", 126, 1809],
      ["2024-12", 93, 2430],
      ["2025-01", 189, 1206],
      ["2025-02", 428, 533],
      ["2025-03", 543, 420],
      ["2025-04", 500, 455],
      ["2025-05", 496, 466],
      ["2025-06", 443, 461],
      ["2025-07", 2, null],
      ["2025-08", 852, 233],
      ["2025-09", 1124, 251],
      ["2025-10", 784, 292],
      ["2025-11", 703, 304],
      ["2025-12", 685, 354],
      ["2026-01", 899, 386],
      ["2026-02", 625, 404],
      ["2026-03", 913, 361],
      ["2026-04", 1768, 174],
      ["2026-05", 1012, 240],
      ["2026-06", 1208, 219],
      ["2026-07", 882, 282],
      ["2026-08", 929, 287],
      ["2026-09", 2695, 65],
    ],
    servicesUsed: [googleAds, landingPages],
    meta: {
      title: "Google Ads Case Study: Naturoville Wellness | Fielmente",
      description:
        "How Fielmente grew Naturoville Wellness Resort's Google Ads enquiries 9.5× on nearly the same budget and cut cost per enquiry by 89%.",
    },
  },
  {
    slug: "hotel-green-castle-google-ads",
    client: "Hotel Green Castle",
    shortName: "Green Castle",
    logo: "/clientsLogo/Hotel-Green-Castle.jpg",
    location: "Mussoorie, Uttarakhand",
    propertyType: "Leisure hotel",
    service: "Google Ads",
    heroImage: "/case-studies/mussoorie-valley.jpg",
    heroAlt: "Hotel building lit up at dusk (representative image)",
    headline: "From 100 enquiries a month to over 1,000.",
    summary:
      "In one of North India's most crowded hill-station markets, we scaled Hotel Green Castle's Google Ads into peak season — and the cost of each enquiry went down, not up.",
    cardStat: { value: "9.5×", label: "enquiries per month" },
    keyStat: { value: "₹49", label: "average cost per enquiry, down from ₹75" },
    periods: { before: "Oct 2024 – Mar 2025", after: "Apr – Sep 2026" },
    stats: [
      { value: "106 → 1,005", label: "enquiries per month" },
      { value: "₹75 → ₹49", label: "cost per enquiry" },
      { value: "4.2k → 36.5k", label: "clicks over six months" },
      { value: "₹26–33", label: "cost per enquiry in peak months" },
    ],
    before: [
      "Around 100 enquiries a month",
      "Small budgets in the first months",
      "Phone bookings invisible to Google's bidding",
    ],
    after: [
      "Over 1,000 enquiries a month",
      "Budget pushed into peak months, when enquiries are cheapest",
      "Calls tracked from ads and the page, so they count",
    ],
    challenge:
      "Mussoorie is one of the most crowded hotel markets in North India, and search demand swings hard between summer, long weekends and the off-season. The goal was to scale budget into peak demand without the cost per enquiry blowing out — the usual failure mode when a hotel simply raises its daily budget.",
    approach: [
      {
        title: "Search plus Performance Max",
        body: "About 90% of spend on Mussoorie stay searches, with Performance Max added for extra reach at low cost.",
      },
      {
        title: "A dedicated Mussoorie landing page",
        body: "Book Now, WhatsApp and a click-to-call number on one fast page, each tracked.",
      },
      {
        title: "Call tracking",
        body: "On the ads and on the page, so phone bookings count toward optimisation.",
      },
      {
        title: "Seasonal scaling",
        body: "Budget pushed into March–April and August, which delivered the lowest cost per enquiry, ₹26–33.",
      },
    ],
    channelMix: [
      { label: "Search", share: 89.8 },
      { label: "Performance Max", share: 8.4 },
      { label: "Smart", share: 1.8 },
    ],
    chartFrom: "Oct 2024",
    monthly: [
      ["2024-10", 4, null],
      ["2024-11", 15, 239],
      ["2024-12", 43, 116],
      ["2025-01", 58, 147],
      ["2025-02", 147, 89],
      ["2025-03", 366, 36],
      ["2025-04", 241, 57],
      ["2025-05", 45, 140],
      ["2025-06", 117, 112],
      ["2025-07", 131, 180],
      ["2025-08", 194, 124],
      ["2025-09", 131, 166],
      ["2025-10", 149, 180],
      ["2025-11", 184, 174],
      ["2025-12", 245, 161],
      ["2026-01", 264, 152],
      ["2026-02", 302, 119],
      ["2026-03", 1223, 33],
      ["2026-04", 1303, 32],
      ["2026-05", 546, 84],
      ["2026-06", 847, 65],
      ["2026-07", 720, 76],
      ["2026-08", 2034, 26],
      ["2026-09", 579, 79],
    ],
    servicesUsed: [googleAds, landingPages],
    meta: {
      title: "Google Ads Case Study: Hotel Green Castle | Fielmente",
      description:
        "How Fielmente took Hotel Green Castle from about 100 to over 1,000 Google Ads enquiries a month while cutting cost per enquiry 35%.",
    },
  },
  {
    slug: "naad-wellness-google-ads",
    client: "Naad Wellness",
    shortName: "Naad",
    logo: "/clientsLogo/naad-wellness.png",
    logoBg: "#110D3C",
    location: "Kundli, Delhi NCR",
    propertyType: "Ayurveda & wellness retreat",
    service: "Google Ads + CRM",
    heroImage: "/case-studies/naad-ayurveda.jpg",
    heroAlt: "Resort pool lined with palm trees at sunset (representative image)",
    detailImage: "/case-studies/wellness-compress.jpg",
    detailAlt: "Calm hotel lobby with a reception desk (representative image)",
    headline: "1 in 4 clicks now becomes an enquiry.",
    summary:
      "For over a year Naad's ads brought steady traffic but very few enquiries. A rebuilt landing page and a tighter account turned it into one of our best-converting accounts.",
    cardStat: { value: "24×", label: "enquiries per month" },
    keyStat: { value: "24.5%", label: "of ad clicks now become an enquiry, up from 2.4%" },
    periods: { before: "Nov 2024 – Jan 2026", after: "Mar – Sep 2026" },
    stats: [
      { value: "23 → 556", label: "enquiries per month" },
      { value: "₹906 → ₹156", label: "cost per enquiry" },
      { value: "2.4% → 24.5%", label: "clicks that became an enquiry" },
      { value: "100%", label: "of spend on Search" },
    ],
    before: [
      "Often under 30 enquiries a month",
      "₹700–2,000 per enquiry",
      "A landing page that didn't turn interest into conversations",
    ],
    after: [
      "More than 500 enquiries a month",
      "₹156 per enquiry on average",
      "Every lead captured in the Eazotel dashboard and matched to stays",
    ],
    challenge:
      "For over a year Naad's ads brought steady traffic but very few enquiries — often under 30 a month at ₹700–2,000 each. A retreat this close to Delhi should win on convenience, but the landing experience wasn't turning interest into conversations.",
    approach: [
      {
        title: "Landing page audit and rebuild",
        body: "Book Now and WhatsApp moved front and centre, with the page reshaped around what guests search for.",
      },
      {
        title: "Ad group review",
        body: "Budget concentrated on the ad groups where enquiries were actually coming from.",
      },
      {
        title: "Leads into the Eazotel dashboard",
        body: "Every enquiry captured in one place and cross-checked against the resort's guest records to measure lead-to-stay conversion.",
      },
      {
        title: "Scale once it converts",
        body: "Budget scaled up from March 2026, with the click-to-enquiry rate holding above 20% every month since.",
      },
    ],
    channelMix: [{ label: "Search", share: 100 }],
    chartFrom: "Nov 2024",
    monthly: [
      ["2024-11", 14, 781],
      ["2024-12", 38, 716],
      ["2025-01", 59, 748],
      ["2025-02", 30, 1140],
      ["2025-03", 16, 2134],
      ["2025-04", 8, 1187],
      ["2025-05", 36, 681],
      ["2025-07", 14, 1511],
      ["2025-08", 27, 467],
      ["2025-09", 6, 1367],
      ["2025-10", 21, 572],
      ["2025-11", 22, 677],
      ["2025-12", 12, 1338],
      ["2026-01", 16, 1221],
      ["2026-02", 85, 513],
      ["2026-03", 691, 166],
      ["2026-04", 760, 184],
      ["2026-05", 486, 104],
      ["2026-06", 284, 113],
      ["2026-07", 445, 184],
      ["2026-08", 892, 153],
      ["2026-09", 332, 153],
    ],
    servicesUsed: [
      googleAds,
      landingPages,
      { name: "Hotel CRM", note: "Every lead in one dashboard, matched to stays", href: "/products/hotel-crm/" },
    ],
    meta: {
      title: "Google Ads Case Study: Naad Wellness | Fielmente",
      description:
        "How Fielmente grew Naad Wellness's Google Ads enquiries 24× and cut cost per enquiry by 83% — 1 in 4 clicks now becomes an enquiry.",
    },
  },
  {
    slug: "the-rudraksh-google-ads",
    client: "The Rudraksh, A Himalayan Retreat",
    shortName: "The Rudraksh",
    logo: "/clientsLogo/rudraksh.png",
    location: "Tehri Garhwal, Uttarakhand",
    propertyType: "Boutique retreat at 1,800 m",
    service: "Google Ads",
    heroImage: "/case-studies/garhwal-himalaya.jpg",
    heroAlt: "Hill cottage with a garden path (representative image)",
    headline: "A small retreat, a modest budget — and enquiries at ₹41 each.",
    summary:
      "A remote, family-run retreat with no big-brand recognition. Clean tracking and a Search-led account took it from a handful of measurable enquiries to more than 400 a month.",
    cardStat: { value: "₹41", label: "per enquiry over 10 months" },
    keyStat: { value: "4,467", label: "enquiries in 10 months at ₹41 each" },
    periods: { before: "Dec 2024 – Mar 2025", after: "Apr 2025 – Jan 2026" },
    stats: [
      { value: "4 → 447", label: "enquiries per month" },
      { value: "₹1,570 → ₹41", label: "cost per enquiry" },
      { value: "0.2% → 10.5%", label: "clicks that became an enquiry" },
      { value: "4,467", label: "enquiries in 10 months" },
    ],
    before: [
      "Plenty of cheap clicks, almost no measurable enquiries",
      "Nothing for Google's bidding to learn from",
      "OTA listings inconsistent (e.g. a star-rating mismatch)",
    ],
    after: [
      "More than 400 enquiries a month",
      "Every Book Now, call and WhatsApp tracked",
      "Consistent story across OTAs, brochures and in-room guides",
    ],
    challenge:
      "A remote, family-run retreat with no big-brand recognition and a modest budget. In the first months, ads generated plenty of cheap clicks but almost no measurable enquiries — so there was nothing for Google's bidding to learn from.",
    approach: [
      {
        title: "Clean conversion tracking",
        body: "Book Now, Book Your Stay, calls and WhatsApp all tracked as separate conversions.",
      },
      {
        title: "Search-led structure",
        body: "Over 99% of spend focused on high-intent stay searches.",
      },
      {
        title: "Beyond the ads",
        body: "OTA listing audits, retreat brochures and in-room guest collateral, so the story guests see is consistent.",
      },
      {
        title: "Retreat programmes",
        body: "Since 2026, budget has shifted toward themed retreats — a higher-value, lower-volume enquiry.",
      },
    ],
    channelMix: [{ label: "Search", share: 99.9 }, { label: "Performance Max", share: 0.1 }],
    chartFrom: "Dec 2024",
    monthly: [
      ["2024-12", 2, null],
      ["2025-01", 6, 1265],
      ["2025-03", 4, null],
      ["2025-04", 164, 48],
      ["2025-05", 253, 59],
      ["2025-06", 285, 28],
      ["2025-07", 564, 31],
      ["2025-08", 279, 41],
      ["2025-09", 262, 51],
      ["2025-10", 541, 54],
      ["2025-11", 635, 39],
      ["2025-12", 741, 38],
      ["2026-01", 743, 35],
      ["2026-02", 234, 57],
      ["2026-03", 41, 324],
      ["2026-04", 58, 552],
      ["2026-05", 196, 173],
      ["2026-06", 421, 249],
      ["2026-07", 217, 387],
      ["2026-08", 93, 338],
      ["2026-09", 141, 331],
    ],
    servicesUsed: [
      googleAds,
      landingPages,
      { name: "Hotel Local SEO", note: "Listings and profiles guests see before they book", href: "/products/hotel-local-seo/" },
    ],
    meta: {
      title: "Google Ads Case Study: The Rudraksh Retreat | Fielmente",
      description:
        "How Fielmente took The Rudraksh from almost no tracked enquiries to 447 a month at ₹41 per enquiry with Google Ads.",
    },
  },
  {
    slug: "ebc-mussoorie-google-ads",
    client: "EBC Mussoorie",
    shortName: "EBC",
    logo: "/clientsLogo/ebc.jpg",
    logoBg: "#1F1F1F",
    location: "Mussoorie, Uttarakhand",
    propertyType: "Mountain resort & experiences",
    service: "Google Ads",
    heroImage: "/case-studies/mussoorie-hills.jpg",
    heroAlt: "Glamping dome in a hillside meadow (representative image)",
    headline: "From about 11 direct enquiries a month to around 450.",
    summary:
      "EBC's early campaigns mostly bought Google Maps visibility. We rebuilt them around direct booking enquiries — the kind a resort can actually close.",
    cardStat: { value: "39×", label: "direct enquiries per month" },
    keyStat: { value: "449", label: "direct enquiries a month in peak season, up from 11" },
    periods: { before: "Sep 2023 – Dec 2024", after: "Oct 2025 – Apr 2026" },
    stats: [
      { value: "11 → 449", label: "direct enquiries per month" },
      { value: "₹396 → ₹223", label: "cost per enquiry" },
      { value: "1.5% → 15.6%", label: "clicks that became an enquiry" },
      { value: "736", label: "enquiries in the best month (Dec 2025)" },
    ],
    before: [
      "Most 'conversions' were map-direction taps",
      "Few direct booking conversations",
      "Small monthly budgets",
    ],
    after: [
      "Around 450 direct enquiries a month in season",
      "Calls, WhatsApp and Book Your Stay clicks tracked",
      "Budget follows the Oct–Apr season and occupancy",
    ],
    challenge:
      "In EBC's early campaigns, most of what Google counted as conversions were Google Maps direction taps — useful visibility, but few direct booking conversations. The resort wanted enquiries it could close, not just visibility.",
    approach: [
      {
        title: "Structured Search campaigns",
        body: "98% of spend in the last 12 months on structured Search campaigns.",
      },
      {
        title: "A dedicated landing page",
        body: "Book Your Stay and Book Your Mountain Escape, with call and WhatsApp buttons.",
      },
      {
        title: "Seasonal scaling",
        body: "Budget scaled into the October–April season, when enquiries peaked at 736 a month.",
      },
      {
        title: "Occupancy-led budgets",
        body: "Spend eased back from May 2026 in line with the resort's occupancy.",
      },
    ],
    channelMix: [{ label: "Search", share: 97.8 }, { label: "Smart", share: 2.2 }],
    chartFrom: "Sep 2024",
    monthly: [
      ["2024-09", 11, 377],
      ["2024-10", 26, 285],
      ["2024-11", 23, 235],
      ["2024-12", 0, null],
      ["2025-03", 39, 357],
      ["2025-04", 33, 660],
      ["2025-05", 610, 44],
      ["2025-06", 13, 428],
      ["2025-10", 101, 305],
      ["2025-11", 332, 275],
      ["2025-12", 736, 238],
      ["2026-01", 596, 234],
      ["2026-02", 412, 256],
      ["2026-03", 440, 213],
      ["2026-04", 525, 121],
      ["2026-05", 217, 265],
      ["2026-06", 116, 250],
      ["2026-07", 110, 198],
      ["2026-08", 66, 282],
      ["2026-09", 60, 256],
    ],
    servicesUsed: [googleAds, landingPages],
    meta: {
      title: "Google Ads Case Study: EBC Mussoorie | Fielmente",
      description:
        "How Fielmente grew EBC Mussoorie from about 11 to 449 direct Google Ads enquiries a month and cut cost per enquiry by 44%.",
    },
  },
];

export const portfolioStats = [
  { value: "₹1.43 Cr", label: "Google Ads spend managed" },
  { value: "54,900+", label: "tracked guest enquiries" },
  { value: "−70%", label: "cost per enquiry, 2024 → 2026" },
  { value: "23", label: "hospitality accounts" },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

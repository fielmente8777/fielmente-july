// Paid-ads results shown on /our-work/. Client figures come from the published case studies
// (app/case-study/[story]/components/caseData.tsx) and the Fielmente Company Profile 2026 deck,
// both taken from each client's own ads accounts.
import { casStudiesData } from "../case-study/[story]/components/caseData";

export interface AdsResult {
  slug: string;
  client: string;
  location: string;
  period: string;
  headline: string;
  /** Channel badge shown on the card. */
  channel?: string;
  /** Enquiries per month, before and after. Left out for launches with no "before". */
  enquiries?: [number, number];
  /** True when /case-study/<slug>/ exists. */
  caseStudy?: boolean;
  metrics: { label: string; before: string; after: string; change?: string }[];
  note?: string;
  /** Monthly enquiries; `compared` marks the months the case study compares against the "before" period. */
  monthly?: { month: string; enquiries: number; compared: boolean }[];
}

/** Totals across every Google Ads account Fielmente manages (Company Profile 2026, "Google Ads results"). */
export const ADS_TOTALS = {
  period: "Sep 2023 – Sep 2026",
  accounts: 23,
  stats: [
    { value: "₹1.43 Cr", label: "Google Ads spend managed across 23 hospitality accounts" },
    { value: "10.7 lakh", label: "Paid clicks to client websites and landing pages" },
    { value: "54,916", label: "Tracked guest enquiries: calls, WhatsApp, forms and Book Now" },
    { value: "−70%", label: "Cost per enquiry, 2024 to 2026" },
  ],
  years: [
    { year: "2024", spend: "₹34.5 L", enquiries: "5,318", cpe: "₹650", rate: "1.9%" },
    { year: "2025", spend: "₹41.4 L", enquiries: "16,565", cpe: "₹250", rate: "3.9%" },
    { year: "2026 (Jan–Sep)", spend: "₹59.6 L", enquiries: "30,967", cpe: "₹192", rate: "9.3%" },
  ],
  source: "Fielmente clients' Google Ads accounts. Map-direction taps and other soft conversions are excluded.",
};

const monthlyFor = (slug: string) => {
  const c = casStudiesData.find((x) => x.slug === slug);
  const from = c?.monthlyHighlightFrom ?? "";
  return c?.monthly?.map((m) => ({ month: m.month, enquiries: m.enquiries, compared: m.month >= from }));
};

export const ADS_RESULTS: AdsResult[] = [
  {
    slug: "naturoville-google-ads",
    caseStudy: true,
    client: "Naturoville Wellness Resort",
    location: "Rishikesh–Dehradun, Uttarakhand",
    period: "Jul–Dec 2024 vs Apr–Sep 2026",
    headline: "9.5× more enquiries on almost the same budget",
    enquiries: [149, 1416],
    metrics: [
      { label: "Cost per enquiry", before: "₹1,543", after: "₹177", change: "−89%" },
      { label: "Click-to-enquiry rate", before: "1.6%", after: "19.3%" },
    ],
    note: "Monthly budget up only 9%",
    monthly: monthlyFor("naturoville-google-ads"),
  },
  {
    slug: "naad-wellness-google-ads",
    caseStudy: true,
    client: "NAAD Wellness",
    location: "Kundli, Delhi NCR",
    period: "Nov 2024 – Jan 2026 vs Mar – Sep 2026",
    headline: "24× more enquiries a month",
    enquiries: [23, 556],
    metrics: [
      { label: "Cost per enquiry", before: "₹906", after: "₹156", change: "−83%" },
      { label: "Click-to-enquiry rate", before: "2.4%", after: "24.5%" },
    ],
    note: "100% of spend on Search",
    monthly: monthlyFor("naad-wellness-google-ads"),
  },
  {
    slug: "the-rudraksh-google-ads",
    caseStudy: true,
    client: "The Rudraksh, A Himalayan Retreat",
    location: "Tehri Garhwal, Uttarakhand",
    period: "Dec 2024 – Mar 2025 vs Apr 2025 – Jan 2026",
    headline: "From 4 to 447 enquiries a month at ₹41 each",
    enquiries: [4, 447],
    metrics: [
      { label: "Cost per enquiry", before: "₹1,570", after: "₹41", change: "−97%" },
      { label: "Click-to-enquiry rate", before: "0.2%", after: "10.5%" },
    ],
    note: "4,467 enquiries in 10 months",
    monthly: monthlyFor("the-rudraksh-google-ads"),
  },
  {
    slug: "hotel-green-castle-google-ads",
    caseStudy: true,
    client: "Hotel Green Castle",
    location: "Mussoorie, Uttarakhand",
    period: "Oct 2024 – Mar 2025 vs Apr – Sep 2026",
    headline: "Over 1,000 enquiries a month, 35% cheaper each",
    enquiries: [106, 1005],
    metrics: [
      { label: "Cost per enquiry", before: "₹75", after: "₹49", change: "−35%" },
      { label: "Clicks over six months", before: "4,218", after: "36,450" },
    ],
    note: "Click-to-enquiry rate held at 15–16.5% while scaling",
  },
  {
    slug: "ebc-mussoorie-google-ads",
    caseStudy: true,
    client: "EBC Mussoorie",
    location: "Mussoorie, Uttarakhand",
    period: "Sep 2023 – Dec 2024 vs Oct 2025 – Apr 2026",
    headline: "39× more direct enquiries a month",
    enquiries: [11, 449],
    metrics: [
      { label: "Cost per enquiry", before: "₹396", after: "₹223", change: "−44%" },
      { label: "Click-to-enquiry rate", before: "1.5%", after: "15.6%" },
    ],
    note: "A three-year relationship, since Sep 2023",
  },
  {
    slug: "saraaya-glamps-google-ads",
    client: "Saraaya Glamps",
    location: "Dharamshala, Himachal Pradesh",
    period: "Launched 21 May 2026 · May – Jul 2026",
    headline: "349 conversions from ₹83,280 in the first ten weeks",
    metrics: [
      { label: "Cost per conversion, launch → month two", before: "₹473", after: "₹202", change: "−57%" },
      { label: "Conversion rate, launch → month two", before: "11.0%", after: "16.2%" },
    ],
    note: "One tightly themed Search campaign, optimised daily. Click-through rate 4.87%.",
  },
  {
    slug: "surya-bagh-umaid-palace",
    channel: "Performance marketing",
    client: "Surya Bagh & Umaid Palace",
    location: "Heritage properties, Rajasthan",
    period: "From Sep 2025 · results within 3 months",
    headline: "Intent over volume: leads at ₹50 at Umaid Palace",
    metrics: [
      { label: "Cost per lead, Surya Bagh", before: "₹1,200", after: "₹500", change: "−58%" },
      { label: "Conversion rate", before: "5–7%", after: "15–20%" },
    ],
    note: "We took over their performance marketing and moved from volume campaigns to intent-led lead generation.",
  },
];

// SEO, PR and earlier client work shown on /our-work/.
// Sources: the Fielmente Company Profile 2026 deck and the Fielmente Client Portfolio deck (Google Drive).

export interface SeoResult {
  client: string;
  location: string;
  headline: string;
  summary: string;
  /** Short milestones, oldest first. */
  timeline?: { date: string; text: string }[];
  /** Google searches and the rank reached. */
  rankings?: { query: string; rank: number }[];
  caseStudy?: string;
}

export const SEO_RESULTS: SeoResult[] = [
  {
    client: "Era Camps",
    location: "Kumbh Mela camps, Prayagraj",
    headline: "From 8th to No. 1 on Google in under three months",
    summary: "Tented camps for the Kumbh Mela at Prayagraj, up against established camp operators on the same searches.",
    timeline: [
      { date: "16 Aug 2024", text: "Onboarded at 8th position" },
      { date: "16 Sep 2024", text: "Fell to the bottom of the page" },
      { date: "18 Oct 2024", text: "Climbed to 2nd" },
      { date: "1 Nov 2024", text: "Ranked No. 1, with 3,000 organic visitors in 28 days" },
    ],
  },
  {
    client: "Anand Vardhan Resorts",
    location: "Naggar, Manali",
    headline: "Page one for vegetarian and wellness resort searches in two months",
    summary: "A pure-vegetarian wellness resort up against bigger brands. We did keyword mapping, on-page and content work, Google Business Profile and technical fixes.",
    rankings: [
      { query: "veg resort in Naggar Himachal", rank: 1 },
      { query: "pure veg resort in Naggar", rank: 1 },
      { query: "veg resort in Naggar", rank: 2 },
      { query: "Manali wellness resort", rank: 3 },
      { query: "wellness resorts Manali Himachal Pradesh", rank: 4 },
      { query: "wellness resort in Manali", rank: 5 },
    ],
    caseStudy: "/case-study/anand-vardhan-resort/",
  },
];

/** PR campaign for Tents N' Trails, a lakeside campsite in Khopoli, Maharashtra. */
export const PR_COVERAGE = {
  client: "Tents N' Trails",
  location: "Khopoli, Maharashtra",
  outlets: [
    { name: "Economic Times Travel World", text: "Eco-friendly practices, curated outdoor experiences and the Khopoli location" },
    { name: "BW Hotelier", text: "Eco-friendly initiatives, outdoor experiences and the stays" },
    { name: "Hotelier's Web", text: "Feature on the web and LinkedIn on nature-led, sustainable tourism" },
    { name: "Success Insights India", text: "The campsite's offering and its commitment to sustainable tourism" },
    { name: "Media Bulletins", text: "From camping retreats and live music to a sports screening fiesta" },
    { name: "Biz News Desk · Online Media Cafe", text: "Syndicated coverage of the camp's experiences" },
    { name: "Smart Business News", text: "An escape from the everyday for nature lovers" },
    { name: "LinkedIn", text: "Hotelier's Web's post was picked up and shared by industry professionals" },
  ],
};

/** Brands from the Fielmente Client Portfolio deck, with the work we did for each. */
export const EARLIER_BRANDS: { name: string; place?: string; work: string }[] = [
  { name: "DoubleTree by Hilton", place: "Canada", work: "Social media" },
  { name: "Mahabir Palace", place: "Kathmandu, Nepal", work: "Website and marketing campaigns" },
  { name: "Desi Bar & Grill", place: "Mississauga & Brampton, Canada", work: "Menu design, social media, Google Business Profile and the Brampton launch" },
  { name: "Dhruvees", place: "Ottawa, Canada", work: "Social media and website" },
  { name: "Peace at Peak", place: "Kanatal, Uttarakhand", work: "Social media, OTA optimisation and local listings" },
  { name: "Hotel Platinum Shravasti", place: "Uttar Pradesh", work: "Website, social media and Google Maps" },
  { name: "Tents N' Trails", place: "Khopoli, Maharashtra", work: "Website, food delivery listings and PR" },
  { name: "Fossetta Gourmet Catering", place: "Delhi NCR", work: "Social media and Google Ads" },
  { name: "The Hakka Club", work: "Menu design, social media and Google Business Profile" },
  { name: "Doner & Gyros", place: "Gujarat", work: "Menu and TV-screen menu design, food delivery listings" },
  { name: "Burkey", place: "Gurugram", work: "Brand identity and logo" },
  { name: "Zar-e-Biryani", work: "Logo and menu design" },
  { name: "Chinese Wala", place: "Gurugram", work: "Brand identity and logo" },
  { name: "CreamKa", work: "Website design, social media and Google Business Profile" },
  { name: "Burff & Berries", place: "Ahmedabad", work: "Social media and website strategy" },
];

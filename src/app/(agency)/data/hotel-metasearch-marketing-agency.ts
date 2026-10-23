import { AgencyPageData } from "@/@types/@agencyPageType";

const page: AgencyPageData = {
  slug: "hotel-metasearch-marketing-agency",
  crumbs: [{ label: "Services", href: "/hospitality-marketing-services/" }],
  keyword: "Hotel Metasearch Marketing Agency",
  secondaryKeywords: ["hotel metasearch management", "trivago ads for hotels", "Kayak hotel ads", "Tripadvisor metasearch", "hotel price comparison advertising"],
  group: "ads",
  navLabel: "Hotel metasearch",
  cardLine: "Your direct rate on Google, Tripadvisor, trivago and Kayak, run as one plan and judged against OTA commission",
  areaServed: "Worldwide",
  meta: {
    title: "Hotel Metasearch Marketing Agency | Fielmente",
    description:
      "Hotel metasearch on Google, Tripadvisor, trivago and Kayak: price feeds, rate parity, CPC and CPA bidding, and cost per booking reports.",
  },
  hero: {
    eyebrow: "Hotel metasearch marketing",
    h1: "Win the price comparison on Google, Tripadvisor, trivago and Kayak",
    lede: "Before they book, many guests check your price on a comparison site. Metasearch puts your own website in that list next to the OTAs, so the guest who was going to book anyway can book with you. We run Google Hotel Ads, Tripadvisor, trivago and Kayak as one plan, with one rule: a direct booking must cost less than the OTA commission it replaces.",
    chips: [
      "Google, Tripadvisor, trivago and Kayak in one plan",
      "Rate parity checked before any spend",
      "Booking engine tracking on every channel",
    ],
  },
  form: {
    title: "Get a free metasearch review",
    body: "Tell us your booking engine, your main source markets and which comparison sites you're on today. We'll check your rates, parity and tracking, and send a written plan.",
    defaultCountryCode: "+91",
    needs: [
      "Google Hotel Ads and free booking links",
      "Tripadvisor",
      "trivago",
      "Kayak and other metasearch",
      "Rate parity problems",
      "Booking engine and tracking",
      "Everything",
    ],
  },
  logos: "international",
  context: {
    eyebrow: "How metasearch has changed",
    title: "Fewer bidding models, higher stakes on price accuracy",
    intro: [
      "Metasearch pricing has shifted in the last two years. Google retired commission-based bidding for hotel ads, so hotel ads are now bought per click and steered by value targets such as Target ROAS[[GH1]]. trivago went the other way: from 1 September 2025 it phased out cost-per-click bidding and runs only on cost per acquisition, with a global minimum net CPA of 10% and commission charged only on completed stays[[MS1]].",
      "What hasn't changed is that metasearch rewards the right price. Google's free booking links rank partly on historical price accuracy[[GL12]], and a direct rate that's higher than an OTA's, or wrong, wastes every click. Before any budget, we check your rate parity and the feed from your booking engine.",
    ],
    stats: [
      { value: "1 Sep 2025", label: "trivago switched to CPA-only bidding, with a 10% minimum net CPA", source: "MS1" },
      { value: "Target ROAS", label: "Google's recommended bid strategy since hotel commission bidding was retired", source: "GH1" },
      { value: "Free", label: "Google free booking links, ranked on usefulness and price accuracy", source: "GL12" },
      { value: "15–30%", label: "typical OTA commission a metasearch booking has to beat", source: "GL11" },
    ],
    image: {
      src: "/industry/travel-planning.jpg",
      alt: "Traveller comparing hotel prices on a laptop",
    },
    points: [
      {
        title: "Parity comes first",
        body: "If an OTA shows a lower price than your own website on the same comparison screen, metasearch spend sends guests to the OTA. We check parity across your markets and fix leaks at the source before bidding.",
      },
      {
        title: "Each site, its own model",
        body: "Google is bought per click with value targets[[GH1]], trivago on commission per completed stay[[MS1]], and Tripadvisor and Kayak per click[[MS2]]. We set bids in each model from the same number: the most a direct booking can cost and still beat the OTA.",
      },
      {
        title: "One report, not four",
        body: "Each site reports its own bookings. We reconcile them against your booking engine, so a booking counted by two sites isn't paid for, or celebrated, twice.",
      },
    ],
  },
  comparison: {
    title: "What changes when we run your metasearch",
    without: [
      "OTAs shown on comparison sites with your rooms, your own website missing",
      "A direct rate higher than the OTAs on the same screen",
      "Each site's bids set separately, on different logic",
      "Four reports that claim more bookings than you actually received",
    ],
    withList: [
      "Your direct rate live on Google, Tripadvisor, trivago and Kayak",
      "Parity checked and fixed by market before spend",
      "Bids on every site set from the cost of an OTA booking",
      "One report reconciled with your booking engine",
    ],
  },
  services: {
    title: "The metasearch channels we manage",
    lede: "Each has its own page where it needs one. All run from the same plan and the same booking engine data.",
    items: [
      { icon: "search", title: "Google Hotel Ads", body: "Hotel campaigns and Performance Max for travel goals, bid on Target ROAS.", href: "/google-hotel-ads-agency/" },
      { icon: "link", title: "Google Hotel Center and free booking links", body: "Your direct rate in Google's free listings, at no cost per click.", href: "/google-hotel-center/" },
      { icon: "globe", title: "Tripadvisor", body: "Sponsored Placements and price comparison for travellers who decide on reviews.", href: "/tripadvisor-ads-agency/" },
      { icon: "percent", title: "trivago", body: "CPA campaigns at a commission level that beats your OTA cost, charged only on completed stays.", href: "/hotel-direct-booking-marketing-agency/" },
      { icon: "plane", title: "Kayak and Skyscanner", body: "Per-click campaigns for the source markets where these sites are used.", href: "/international-hotel-marketing-agency/" },
      { icon: "refresh", title: "Rate parity and feeds", body: "Your booking engine and channel manager sending accurate rates to every comparison site.", href: "/products/hotel-channel-manager/" },
    ],
  },
  proof: {
    title: "Google results for Indian hotels and resorts",
    lede: "Our published case studies are Google Ads accounts. They show how we work on any paid channel: track real bookings, fix the page, then scale.",
    caseStudies: ["ebc-mussoorie-google-ads", "hotel-green-castle-google-ads"],
    testimonials: ["unnati-stayinn", "donald-wingell"],
    honestNote:
      "Metasearch results depend on your rates, parity and booking engine more than on bids. We'll tell you if those need fixing before spend can pay back.",
  },
  process: {
    title: "How we run hotel metasearch",
    lede: "Rates and tracking first, then channels in the order that pays back fastest.",
    steps: [
      { when: "Week 1", title: "Rates, parity and feeds", body: "Your direct rate against OTAs by market and device, your booking engine's connections, and how bookings are tracked." },
      { when: "Weeks 1–3", title: "Free first", body: "Google free booking links live and accurate, and parity issues fixed with your channel manager and OTAs." },
      { when: "Weeks 3–6", title: "Paid channels", body: "Google Hotel Ads first, then Tripadvisor, trivago and Kayak where your markets use them." },
      { when: "Every month", title: "Reconcile and adjust", body: "Bookings by site reconciled with your booking engine, cost per booking against OTA commission, and bids adjusted." },
    ],
  },
  blocks: [
    {
      kind: "table",
      eyebrow: "Pricing models",
      title: "How each metasearch site charges hotels",
      lede: "Models change often. These are the current ones, with what we watch on each.",
      columns: ["Site", "How you pay", "What we watch"],
      rows: [
        ["Google Hotel Ads", "Per click, with Target ROAS recommended; commission bidding was retired[[GH1]]", "Price accuracy, booking value tracking and cost per booking"],
        ["Google free booking links", "Free, ranked on usefulness and price accuracy[[GL12]]", "That your direct rate shows and stays accurate"],
        ["trivago", "CPA only since 1 September 2025, minimum net CPA 10%, charged on completed stays[[MS1]]", "The CPA level against your OTA commission"],
        ["Tripadvisor", "Per click for price comparison and Sponsored Placements[[MS2]][[TA2]]", "Cost per click by market and bookings on your engine"],
        ["Kayak", "Per click[[MS2]]", "Whether your source markets use it enough to justify a campaign"],
      ],
      note: "Third-party summaries of metasearch pricing vary. We confirm terms in each platform's own account before setting budgets.",
    },
    {
      kind: "cards",
      eyebrow: "Requirements",
      title: "What a hotel needs for metasearch",
      items: [
        { icon: "workflow", title: "A connected booking engine", body: "Your booking engine or channel manager sending live rates and availability to each site." },
        { icon: "refresh", title: "Rate parity", body: "A direct rate at least equal to the OTAs on the same dates, rooms and conditions." },
        { icon: "devices", title: "A fast booking page", body: "A mobile booking flow that shows the same price as the comparison site, taxes included." },
        { icon: "target", title: "Booking tracking", body: "Confirmed bookings and values passed back to each site, and reconciled in one report." },
        { icon: "pin", title: "Complete profiles", body: "Google Business Profile and Tripadvisor listing with current photos, amenities and details." },
        { icon: "wallet", title: "A cost ceiling", body: "The most a direct booking can cost and still beat OTA commission. Every bid follows from it." },
      ],
    },
  ],
  faqs: [
    {
      q: "What is hotel metasearch?",
      a: "Price comparison sites such as Google Hotels, Tripadvisor, trivago and Kayak, which show a hotel's room prices from OTAs and the hotel's own website side by side. Metasearch marketing gets your direct rate into that comparison and pays for better visibility where it makes sense.",
    },
    {
      q: "Is metasearch worth it for an independent hotel?",
      a: "When your direct rate is at least level with the OTAs and your booking engine converts well, yes: it lets guests who were going to book anyway book with you instead of an OTA. If parity or the booking engine is the problem, we fix that first.",
    },
    {
      q: "Does trivago still offer cost per click?",
      a: "No. trivago phased out CPC bidding on 1 September 2025 and now runs on cost per acquisition, with a global minimum net CPA of 10% and commission charged only on completed stays.",
    },
    {
      q: "Can we pay Google per stay?",
      a: "No. Google retired commission-based bidding for hotel ads. Hotel ads are bought per click and usually steered by Target ROAS. Free booking links remain free.",
    },
    {
      q: "Which metasearch sites should we start with?",
      a: "Usually Google free booking links, then Google Hotel Ads, because that's where most guests compare. Tripadvisor, trivago and Kayak follow if your source markets use them.",
    },
    {
      q: "Does our booking engine need to support metasearch?",
      a: "Yes. It, or your channel manager, has to send live rates and availability to each site. If yours can't, we'll help you choose one that can.",
    },
  ],
  related: ["google-hotel-ads-agency", "google-hotel-center", "tripadvisor-ads-agency", "ota-ads-management"],
  extraLinks: [
    { title: "ChatGPT Ads vs hotel metasearch", body: "Where each fits in a hotel's paid media plan.", href: "/chatgpt-ads-vs-hotel-metasearch-advertising/" },
    { title: "Hotel booking engine", body: "A commission-free booking engine for your own website.", href: "/products/hotel-booking-engine/" },
  ],
  cta: {
    title: "Ready to win the price comparison?",
    body: "Get a free review of your rates, parity, booking engine and metasearch channels, with a written plan.",
  },
  sources: [
    { id: "GH1", label: "Google Ads Help, Commission-based bid strategies in hotel ads to sunset", url: "https://support.google.com/google-ads/answer/14280291?hl=en" },
    { id: "MS1", label: "Paraty Tech, trivago says goodbye to CPC: CPA takes over, 2025", url: "https://www.paratytech.com/en/news/trivago-says-goodbye-to-cpc-cpa-takes-over.html" },
    { id: "MS2", label: "Prostay, Hotel metasearch bidding 2026: the independent's guide, May 2026", url: "https://www.prostay.com/blog/hotel-metasearch-bidding-2026/" },
    { id: "GL12", label: "Google Hotel Center Help, About hotel free booking links", url: "https://support.google.com/hotelprices/answer/10472393?hl=en" },
    { id: "TA2", label: "Tripadvisor for Business, How to use the ads manager with Sponsored Placements", url: "https://www.tripadvisor.com/business/insights/new-and-improved-how-to-use-the-ads-manager-with-sponsored-placements" },
    { id: "GL11", label: "EHL Insights, Hotel OTAs: their business model explained, May 2026", url: "https://insights.ehl.edu/hotel-otas" },
  ],
};

export default page;

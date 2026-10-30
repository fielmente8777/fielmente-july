import type { AgencyPageData } from "@/@types/@agencyPageType";

type LocalMarket = {
  slug: string;
  name: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  context: string;
  segments: { title: string; body: string }[];
  campaigns: string[][];
  priority: string;
  question: string;
  answer: string;
  cases: string[];
  related: string[];
  source: { label: string; url: string };
};

export const LOCAL_MARKETS: LocalMarket[] = [
  {
    slug: "hotel-marketing-agency-gurgaon", name: "Gurgaon (Gurugram)", keyword: "Hotel Marketing Agency in Gurgaon",
    title: "Hotel Marketing Agency in Gurgaon | Fielmente",
    description: "Hotel and restaurant marketing in Gurgaon and Gurugram. Explore local SEO, Google Ads, corporate enquiry funnels and direct booking support with Fielmente.",
    intro: "A corporate room night, a restaurant reservation and a weekend celebration need different campaigns. We help Gurgaon hotels and restaurants connect local search, relevant offers and a clear enquiry process.",
    context: "Gurugram combines business districts with dining, leisure and resort experiences[[IN1]]. A property near Cyber City should explain a different stay from a retreat around Manesar. We use your actual location, facilities and guest mix to decide which searches and audiences to prioritise.",
    segments: [
      { title: "Corporate stays and meeting enquiries", body: "Explain the business locations you genuinely serve, your workspaces, meeting capacity and billing process. Separate individual room enquiries from negotiated corporate and group requests so your team can follow up appropriately." },
      { title: "Restaurants and neighbourhood discovery", body: "Build accurate Google Business Profile information, current menus and reservation links. Content for Golf Course Road, Cyber City or your own neighbourhood should describe the actual venue and access, rather than promise that every guest is nearby." },
      { title: "Weekend and celebration demand", body: "Create distinct enquiry journeys for staycations, private dining and events. Qualify dates, party size and requirements before sending a proposal, and compare booked business with the cost of generating it." },
    ],
    campaigns: [["Weekday rooms", "Corporate location, room facilities and stay requirements", "Qualified room and corporate enquiries"], ["Dining", "Menu, neighbourhood and reservation availability", "Reservations and calls answered"], ["Events", "Capacity, dates and package inclusions", "Qualified site visits and event enquiries"]],
    priority: "Start by separating corporate, room, restaurant and event enquiries. A single conversion count can hide which business line is paying for the campaigns.",
    question: "Are you based in Gurgaon?", answer: "Fielmente lists its Gurugram office at Suncity Success Tower, Golf Course Extension Road, Sector 65. Contact the team to arrange a meeting. Campaign delivery can also be managed remotely with your hotel or restaurant team.",
    cases: ["hotel-green-castle-google-ads", "mahabir-palace-social-media"], related: ["hotel-marketing-agency-hyderabad", "hotel-marketing-agency-bengaluru"],
    source: { label: "Haryana Tourism: Gurgaon destination guide", url: "https://haryanatourism.gov.in/destinations/gurgaon/" },
  },
  {
    slug: "hotel-marketing-agency-hyderabad", name: "Hyderabad", keyword: "Hotel Marketing Agency in Hyderabad",
    title: "Hotel Marketing Agency in Hyderabad | Fielmente",
    description: "Hospitality marketing for Hyderabad hotels and restaurants. Build local search visibility, corporate enquiries and direct booking campaigns with Fielmente.",
    intro: "Help the right guest find your Hyderabad property, understand the stay and take the next step. We plan SEO, paid campaigns, restaurant discovery and enquiry follow-up around your actual business.",
    context: "Hyderabad brings heritage, food and modern city experiences together, with accommodation serving different budgets and travel purposes[[IN1]]. We distinguish a business stay around the technology districts from a leisure itinerary or a restaurant visit, then give each a relevant landing page and enquiry route.",
    segments: [
      { title: "Business and extended stays", body: "For properties serving HITEC City, Gachibowli or other business areas, show the real location, work facilities and longer-stay terms. Campaigns should qualify travel dates and stay duration rather than optimise for undifferentiated traffic." },
      { title: "Heritage and leisure trips", body: "Use your own photography, room details and practical arrival information to help guests compare a stay. Connect relevant destination content to available room types and the booking engine, without presenting an unrelated attraction as a hotel facility." },
      { title: "Dining, meetings and celebrations", body: "Give restaurant reservations and venue enquiries their own menus, capacity details and contact paths. A banquet lead with a date and guest count should reach the sales team separately from a room enquiry." },
    ],
    campaigns: [["Business stays", "Location, workspace and length of stay", "Qualified room enquiries"], ["Meetings and events", "Capacity, setup and requested date", "Sales-qualified venue enquiries"], ["Restaurants", "Cuisine, menu and reservation process", "Reservations and useful calls"]],
    priority: "Match each ad group to the correct property or venue page. Then review which enquiries become bookings before expanding into broader city keywords.",
    question: "Can one campaign cover rooms, restaurants and banquets?", answer: "They can share a reporting plan, but their audiences, landing pages and qualification questions should differ. We recommend separate conversion definitions so a dining call is not counted as a confirmed room booking.",
    cases: ["hotel-green-castle-google-ads", "zar-e-biryani-social-media"], related: ["hotel-marketing-agency-bengaluru", "hotel-marketing-agency-gurgaon"],
    source: { label: "Telangana Tourism: Hyderabad", url: "https://www.tourism.telangana.gov.in/destinations/hyderabad" },
  },
  {
    slug: "resort-marketing-agency-uttarakhand", name: "Uttarakhand", keyword: "Resort Marketing Agency in Uttarakhand",
    title: "Resort Marketing Agency in Uttarakhand | Fielmente",
    description: "From Mussoorie to Rishikesh to Nainital, Uttarakhand is a hub for destination travel and luxury stays. How resorts there can fill rooms directly.",
    intro: "A hill-station weekend, a wellness retreat and a family holiday ask different things of a resort. We help Uttarakhand properties explain their experience and convert destination interest into qualified enquiries.",
    context: "Uttarakhand spans hill destinations, nature stays and spiritual and wellness travel. Rishikesh is both a tourism and pilgrimage hub beside the Ganga[[IN1]]. Our state-wide approach groups properties by the stay they offer; a focused Rishikesh page handles that city's specific service needs.",
    segments: [
      { title: "Hill-station and family stays", body: "For Mussoorie and Nainital properties, make room configurations, access, parking and family facilities clear. Build campaigns around the dates you need to fill and answer practical questions before a guest contacts your team." },
      { title: "Nature and activity-led resorts", body: "Show what is included, what is arranged separately and how guests reach the property. Present current activity information with appropriate sources, rather than advertising guaranteed wildlife sightings or experiences outside your control." },
      { title: "Wellness and retreat enquiries", body: "Explain accommodation, programme length, meals and the qualification process for a retreat. Separate a simple room enquiry from a group programme request, and avoid unsupported medical outcomes in marketing copy." },
    ],
    campaigns: [["Family breaks", "Room setup, inclusions and travel dates", "Qualified family-stay enquiries"], ["Retreat groups", "Programme, duration and group requirements", "Suitable retreat enquiries"], ["Destination discovery", "Useful travel content linked to the property", "Booking-engine visits and enquiries"]],
    priority: "Use your reservation history to identify need dates, then align ads, packages and follow-up. Keep access and seasonal information current before promoting a stay.",
    question: "How is this different from your Rishikesh marketing page?", answer: "This page covers the state-wide resort strategy across different destinations. The Rishikesh page focuses on city-specific retreat, yoga, riverside-stay and enquiry requirements, so each page has a separate purpose.",
    cases: ["hotel-green-castle-google-ads", "naturoville-google-ads"], related: ["hotel-resort-marketing-agency-rishikesh", "resort-marketing-agency-himachal"],
    source: { label: "Uttarakhand Tourism: Rishikesh", url: "https://uttarakhandtourism.gov.in/destination/rishikesh/" },
  },
  {
    slug: "resort-marketing-agency-himachal", name: "Himachal Pradesh", keyword: "Resort Marketing Agency in Himachal Pradesh",
    title: "Resort Marketing Agency in Himachal Pradesh | Fielmente",
    description: "Himachal Pradesh is one of India’s top travel destinations, with heavy competition among hotels and resorts. How to stand out and win direct bookings.",
    intro: "Turn interest in a mountain holiday into enquiries your reservations team can convert. We connect search, property content, paid campaigns and follow-up for hotels and resorts across Himachal Pradesh.",
    context: "Himachal's destinations offer different experiences: a Manali holiday is not the same purchase as a retreat near Dharamshala or a stay in Shimla. Official tourism information highlights Manali's mix of nature, adventure and hospitality[[IN1]]. Your marketing needs the same specificity about the experience and the journey.",
    segments: [
      { title: "Show the stay beyond the view", body: "Use original room and property content to explain heating, meals, parking, accessibility and the activities actually available. Distinctive details help guests compare your resort without relying on generic mountain imagery." },
      { title: "Respond to seasonal demand responsibly", body: "Use booking pace and your property's history to choose campaign timing. Review travel and access information before promotions, and update offers when conditions or operating arrangements change." },
      { title: "Qualify groups and longer holidays", body: "Capture stay dates, party size, room needs and trip purpose. Separate an individual weekend request from a wedding, retreat or group enquiry so your team sends a useful response instead of a generic brochure." },
    ],
    campaigns: [["Leisure stays", "Destination, room type and practical stay details", "Qualified room enquiries"], ["Group travel", "Room inventory and group requirements", "Suitable group proposals"], ["Need dates", "Property-led offers and booking pace", "Direct bookings for selected dates"]],
    priority: "Publish practical answers before increasing ad spend. A campaign performs better operationally when the guest already understands the property, its access and the booking terms.",
    question: "Can you promote a resort outside the main hill stations?", answer: "Yes. We start with the actual destination and the experience your property offers. Useful local content, clear access information and suitable source-market campaigns can support discovery without pretending the property is in a better-known town.",
    cases: ["anand-vardhan-resort", "the-rudraksh-google-ads"], related: ["resort-marketing-agency-uttarakhand", "hotel-resort-marketing-agency-sikkim"],
    source: { label: "Himachal Tourism: Manali destination guide", url: "https://himachaltourism.gov.in/destination/manali/" },
  },
  {
    slug: "hotel-marketing-agency-tamil-nadu", name: "Tamil Nadu", keyword: "Hotel Marketing Agency in Tamil Nadu",
    title: "Hotel Marketing Agency in Tamil Nadu | Fielmente",
    description: "Hotel and resort marketing across Tamil Nadu. Plan destination-specific SEO, Google Ads, property content and direct booking journeys with Fielmente.",
    intro: "Market the reason a guest is travelling, not just the room. We help Tamil Nadu hotels and resorts build clear journeys for business stays, cultural travel and leisure breaks.",
    context: "A Chennai business hotel, a heritage-oriented stay in Madurai and a hill property need different content and campaigns. We structure the work around your actual destination, room mix and guests, rather than use one state-wide message for every property.",
    segments: [
      { title: "City and business hotels", body: "Show the business areas you genuinely serve, meeting facilities, room amenities and corporate contact process. Measure room enquiries separately from banquet and meeting requests so budget decisions reflect the right business." },
      { title: "Cultural and itinerary-based stays", body: "Connect helpful destination information to your property and practical arrival details. Explain the accommodation, dining and group arrangements without implying that a hotel provides religious services or access it does not control." },
      { title: "Coastal and hill leisure properties", body: "Make the setting, accommodation, activities and package inclusions specific. Build a mobile booking journey that answers common questions before the guest moves from a social post or search result to WhatsApp." },
    ],
    campaigns: [["Business travel", "Location, work facilities and stay duration", "Room and corporate enquiries"], ["Group itineraries", "Room setup, meals and itinerary fit", "Qualified group enquiries"], ["Leisure breaks", "Property experience and package inclusions", "Direct enquiries and booking-engine use"]],
    priority: "Choose the destinations and property types you can serve well, then create useful pages for those audiences. Add Tamil or other language content only when it can be maintained accurately through the enquiry journey.",
    question: "Should a Tamil Nadu hotel advertise in more than one language?", answer: "It depends on the guests you serve. We can plan language-specific content and campaigns, but the landing page, enquiry response and offer should support the language used in the advertisement.",
    cases: ["hotel-green-castle-google-ads", "mahabir-palace-social-media"], related: ["hotel-resort-marketing-agency-kerala", "hotel-marketing-agency-bengaluru"],
    source: { label: "Incredible India: Tamil Nadu destination information", url: "https://www.incredibleindia.gov.in/en/tamil-nadu" },
  },
  {
    slug: "hotel-resort-marketing-agency-kerala", name: "Kerala", keyword: "Hotel and Resort Marketing Agency in Kerala",
    title: "Hotel & Resort Marketing Agency in Kerala | Fielmente",
    description: "Marketing for Kerala hotels, resorts and retreats. Connect destination content, SEO, paid campaigns and enquiry follow-up to support direct bookings.",
    intro: "Help a guest understand the experience before asking for the booking. We market Kerala hotels, resorts and retreats with clear property stories, useful search content and a practical enquiry journey.",
    context: "Kerala Tourism distinguishes backwater, coastal, hill and other destination experiences[[IN1]]. A Kumarakom stay, a Kochi city break and a Munnar holiday need different explanations. We connect your property's actual experience to the audience most likely to value it.",
    segments: [
      { title: "Backwater and coastal stays", body: "Make the room or accommodation type, setting, meal plan and transfer arrangements easy to compare. Show the experience with your own images and answer what is included before a guest asks for a package price." },
      { title: "Wellness and longer-stay enquiries", body: "Present the programme, accommodation, duration and consultation process clearly. Avoid medical promises in promotional copy and separate a wellness-programme enquiry from a standard leisure reservation." },
      { title: "International and domestic discovery", body: "Build content around the guests you actually serve, with appropriate language, currencies and response expectations. Keep marketing claims and travel information consistent across the website, ads and enquiry team." },
    ],
    campaigns: [["Leisure resorts", "Setting, room choice and inclusions", "Qualified direct-stay enquiries"], ["Retreat programmes", "Duration, programme and suitability questions", "Appropriate programme enquiries"], ["Longer holidays", "Itinerary fit, transfers and booking terms", "Useful enquiries and confirmed business"]],
    priority: "Improve package clarity and lead qualification before expanding audiences. Record whether a lead wants a room, an itinerary or a programme so follow-up matches the request.",
    question: "Can you support international enquiries for Kerala properties?", answer: "Yes. We can plan source-market content, paid campaigns and follow-up around the audiences your property serves. Language support, offer details and response arrangements are agreed with your team rather than assumed.",
    cases: ["naturoville-google-ads", "naad-wellness-google-ads"], related: ["hotel-marketing-agency-tamil-nadu", "hotel-resort-marketing-agency-goa"],
    source: { label: "Kerala Tourism: destination experiences", url: "https://www.keralatourism.org/faq/top-destinations-to-be-included-in-a-kerala-tour-package" },
  },
  {
    slug: "hotel-marketing-agency-bengaluru", name: "Bengaluru", keyword: "Hotel Marketing Agency in Bengaluru",
    title: "Hotel Marketing Agency in Bengaluru | Fielmente",
    description: "Bengaluru’s hospitality market is driven by corporate travel, tech professionals and long-stay guests. How hotels there can win more direct bookings.",
    intro: "Connect the right Bengaluru guest with the right stay. We help hotels and hospitality venues organise search visibility, corporate enquiries, paid campaigns and direct booking follow-up.",
    context: "Bengaluru combines technology and business activity with heritage, dining and city experiences[[IN1]]. Your hotel's location and guest purpose matter more than a broad claim to serve the whole city. We build the message around the areas and stay requirements your property genuinely suits.",
    segments: [
      { title: "Business-district relevance", body: "For a property serving Whitefield, Electronic City, the Outer Ring Road or another business area, explain the actual address, facilities and access. Avoid unsupported commute times and keep location information consistent with the map listing." },
      { title: "Extended stays and corporate enquiries", body: "Show work facilities, longer-stay arrangements, room categories and the corporate enquiry process. Capture dates, length of stay and billing needs so the sales team can send a relevant proposal." },
      { title: "Weekends, dining and events", body: "Build separate offers for leisure weekends, restaurant visits and venue enquiries. Give each a relevant page and conversion definition, rather than judging every campaign by a single form-submission total." },
    ],
    campaigns: [["Corporate stays", "Business location, facilities and stay duration", "Qualified corporate and room enquiries"], ["Long stays", "Room setup and agreed longer-stay terms", "Suitable extended-stay requests"], ["Dining and events", "Menu or venue details and availability", "Reservations and sales-qualified event leads"]],
    priority: "Make location and stay suitability explicit, then connect advertising to the appropriate room or corporate enquiry page. Review lead quality with the property team before scaling.",
    question: "Do you target Bangalore and Bengaluru searches separately?", answer: "We can account for both common names in useful copy and search research. We keep one preferred page for this service intent instead of creating two nearly identical pages that compete with each other.",
    cases: ["hotel-green-castle-google-ads", "mahabir-palace-social-media"], related: ["hotel-marketing-agency-hyderabad", "hotel-marketing-agency-gurgaon"],
    source: { label: "Karnataka Tourism: Bengaluru", url: "https://karnatakatourism.org/en/destinations/bengaluru/" },
  },
  {
    slug: "hotel-resort-marketing-agency-goa", name: "Goa", keyword: "Hotel and Resort Marketing Agency in Goa",
    title: "Hotel & Resort Marketing Agency in Goa | Fielmente",
    description: "Boost bookings for your hotel or resort in Goa with Fielmente. Experts in SEO, ads, and luxury hospitality marketing.",
    intro: "Give guests a clear reason to choose your Goa property and a straightforward way to book. We connect destination content, search, social campaigns and enquiry follow-up for hotels, resorts and villas.",
    context: "Goa properties sell different experiences: a lively neighbourhood stay, a quiet resort break, a villa gathering or a celebration. Seasonality also changes what can be promoted; Goa Tourism describes a distinct monsoon period[[IN1]]. Your campaign calendar should reflect your property's real experience and operating arrangements.",
    segments: [
      { title: "Explain the location and experience", body: "Show the actual property setting, room layout, access and nearby experiences. Avoid implying beach access, a private pool or other facilities that a particular room or property does not provide." },
      { title: "Make wedding and group enquiries useful", body: "Capture event dates, accommodation needs, guest count and venue requirements separately from individual room requests. Link content and campaigns to a clear enquiry path that the sales team can follow up." },
      { title: "Plan beyond one peak season", body: "Use your booking pace and historical demand to select need dates and suitable offers. Review seasonal activities and package inclusions before publishing, rather than carry a peak-season promise into every month." },
    ],
    campaigns: [["Independent stays", "Location, room details and direct-booking value", "Qualified room enquiries"], ["Weddings and groups", "Dates, guest numbers and venue requirements", "Suitable group and event proposals"], ["Need-date offers", "Operating inclusions and property-led packages", "Confirmed business for selected periods"]],
    priority: "Separate room, villa and event journeys. Use authentic property content and transparent terms to help guests compare the offer before they contact reservations.",
    question: "Can you help with both Indian and international guests?", answer: "Yes. We can plan campaigns and content for the source markets relevant to your property. We agree language support, booking terms and follow-up with your team and measure useful enquiries separately from confirmed bookings.",
    cases: ["wabi-sabi-resort", "the-rudraksh-google-ads"], related: ["hotel-resort-marketing-agency-kerala", "hotel-marketing-agency-mumbai"],
    source: { label: "Goa Tourism: weather and seasonality", url: "https://goatourism.gov.in/weather/" },
  },
  {
    slug: "hotel-resort-marketing-agency-assam", name: "Assam", keyword: "Hotel and Resort Marketing Agency in Assam",
    title: "Hotel & Resort Marketing Agency in Assam | Fielmente",
    description: "Hospitality marketing for Assam hotels, lodges and resorts. Build destination-specific search content, campaigns and direct enquiry journeys with Fielmente.",
    intro: "Help travellers understand where your property fits into their Assam journey. We connect destination discovery with useful property information and a direct enquiry process for hotels, lodges and resorts.",
    context: "Assam Tourism presents different travel circuits, including routes connecting Guwahati, Kaziranga and other destinations[[IN1]]. A state-wide hospitality plan should explain how a property fits an itinerary, rather than treat a city hotel, wildlife lodge and tea-country stay as the same purchase.",
    segments: [
      { title: "Destination and itinerary relevance", body: "Show the actual location, accommodation and arrival arrangements. Link helpful destination content to suitable room and stay information, while clearly distinguishing services provided by the property from those arranged by third parties." },
      { title: "Nature-led accommodation", body: "Use original property content and accurate activity information. Avoid promises about wildlife sightings, access or operating dates that your team cannot control; link to current authoritative information when it affects a booking decision." },
      { title: "Tea-country and longer journeys", body: "Explain the setting, stay duration, meals and experience inclusions. Qualify independent travellers and group requests differently so the enquiry team can respond with a relevant itinerary or accommodation proposal." },
    ],
    campaigns: [["Destination stays", "Itinerary fit, room choice and arrival details", "Qualified accommodation enquiries"], ["Experience-led breaks", "Actual inclusions and current activity information", "Suitable stay and experience requests"], ["Groups", "Room inventory, dates and travel requirements", "Useful group proposals"]],
    priority: "Group content by destination and guest purpose. The Assam page explains the broader state strategy, while the Guwahati page focuses on the city's room, meeting and transit needs.",
    question: "Will this page compete with your Guwahati page?", answer: "They have different purposes. This page covers hotels, lodges and resorts across Assam and their destination-led journeys. The Guwahati page focuses on city-specific hospitality marketing and links back to this wider state coverage.",
    cases: ["the-rudraksh-google-ads", "anand-vardhan-resort"], related: ["hotel-marketing-agency-guwahati", "hotel-resort-marketing-agency-sikkim"],
    source: { label: "Assam Tourism: Guwahati–Kaziranga travel circuit", url: "https://tourism.assam.gov.in/portlet-sub-innerpage/circuit1" },
  },
  {
    slug: "hotel-resort-marketing-agency-sikkim", name: "Sikkim", keyword: "Hotel and Resort Marketing Agency in Sikkim",
    title: "Hotel & Resort Marketing Agency in Sikkim | Fielmente",
    description: "Marketing for Sikkim hotels, resorts and homestays. Connect useful destination content, search visibility and qualified direct enquiries with Fielmente.",
    intro: "Turn destination research into a clear decision about your Sikkim property. We help hotels, resorts and homestays explain the stay, answer practical questions and follow up on direct enquiries.",
    context: "Sikkim Tourism describes Gangtok as an administrative and business centre alongside the state's varied destination experiences[[IN1]]. Marketing should make the actual property location and itinerary fit clear, rather than suggest that every Sikkim stay offers the same access or experience.",
    segments: [
      { title: "City and destination stays", body: "Explain whether the property suits a city base, a quiet retreat or a longer itinerary. Show real room categories, views, meal arrangements and arrival details so guests can compare the stay accurately." },
      { title: "Practical travel questions", body: "Keep travel and access information current. Where a guest needs official guidance, link to the relevant authority instead of turning a changing permit or road condition into a permanent marketing promise." },
      { title: "Small properties and group requests", body: "Qualify party size, room requirements and travel dates before proposing a stay. For homestays and smaller hotels, a consistent response process can be more useful than generating a volume of enquiries the team cannot handle." },
    ],
    campaigns: [["City stays", "Location, room amenities and arrival information", "Qualified room enquiries"], ["Retreats and homestays", "Setting, hosting and actual inclusions", "Suitable direct-stay requests"], ["Group itineraries", "Dates, room inventory and travel requirements", "Useful group enquiries"]],
    priority: "Build trust with current practical details and original property content. Match campaign timing to your own availability and booking history, then track which enquiries become suitable stays.",
    question: "Can you market a small homestay as well as a resort?", answer: "Yes. The campaign scope should fit your available rooms, budget and ability to respond. We first establish the property's distinct experience and enquiry process, then select the channels that are practical for the team.",
    cases: ["the-rudraksh-google-ads", "anand-vardhan-resort"], related: ["hotel-resort-marketing-agency-assam", "resort-marketing-agency-himachal"],
    source: { label: "Sikkim Tourism: destination and district information", url: "https://www.sikkimtourism.gov.in/about/sikkim" },
  },
  {
    slug: "hotel-marketing-agency-guwahati", name: "Guwahati", keyword: "Hotel Marketing Agency in Guwahati",
    title: "Hotel Marketing Agency in Guwahati | Fielmente",
    description: "Hotel and restaurant marketing in Guwahati. Improve local discovery, useful room and event enquiries, and direct booking follow-up with Fielmente.",
    intro: "Help a business traveller, an event planner or a guest starting an Assam trip find the right reason to choose your Guwahati property. We connect local search, relevant content and enquiry follow-up.",
    context: "Guwahati features in Assam Tourism's city and wider travel circuits, including journeys onward to other destinations[[IN1]]. A city-focused campaign needs clear location and stay information, while a separate Assam page covers the broader destination and resort strategy.",
    segments: [
      { title: "City stays and onward journeys", body: "Show the hotel's actual location, check-in arrangements, room facilities and any transfers it genuinely provides. Answer practical questions without promising a fixed journey time through city traffic." },
      { title: "Meetings and event enquiries", body: "Provide venue capacities, layouts, accommodation options and a date-led enquiry form. Route an event request to the sales team separately from an individual room enquiry so follow-up starts with useful information." },
      { title: "Restaurants and local discovery", body: "Keep menus, opening hours, contact details and reservation links accurate. Create content for the venue's real neighbourhood and offer instead of using generic city keywords that do not help a diner choose." },
    ],
    campaigns: [["City rooms", "Location, stay purpose and room facilities", "Qualified room enquiries"], ["Meetings", "Capacity, dates and event requirements", "Sales-qualified venue requests"], ["Dining", "Menu, neighbourhood and reservations", "Useful calls and reservations"]],
    priority: "Start with accurate local listings and separate room, dining and event conversion tracking. Use wider destination content only where it helps guests understand the hotel's role in their journey.",
    question: "Do you cover destinations beyond Guwahati?", answer: "Yes. Our Assam page explains the wider hotel, lodge and resort strategy. This page stays focused on city-specific marketing so the two resources serve different needs rather than repeat the same content.",
    cases: ["hotel-green-castle-google-ads", "mahabir-palace-social-media"], related: ["hotel-resort-marketing-agency-assam", "hotel-resort-marketing-agency-sikkim"],
    source: { label: "Assam Tourism: regional travel circuits", url: "https://tourism.assam.gov.in/portlet-sub-innerpage/circuit1" },
  },
  {
    slug: "hotel-resort-marketing-agency-rishikesh", name: "Rishikesh", keyword: "Hotel and Resort Marketing Agency in Rishikesh",
    title: "Hotel & Resort Marketing Agency in Rishikesh | Fielmente",
    description: "Hospitality marketing for Rishikesh hotels, resorts and retreats. Build useful search content, relevant campaigns and qualified direct enquiries with Fielmente.",
    intro: "A retreat organiser and a family booking a weekend room need different answers. We help Rishikesh properties communicate the stay clearly and connect each enquiry with the right team.",
    context: "Uttarakhand Tourism describes Rishikesh as a tourism and pilgrimage hub beside the Ganga[[IN1]]. We use that destination context to distinguish a city stay, a retreat programme and an experience-led holiday, while keeping claims specific to what the property actually offers.",
    segments: [
      { title: "Retreat and yoga-group enquiries", body: "Explain the venue, room inventory, meal arrangements, programme spaces and responsibilities of the organiser. Collect dates, group size and requirements before sending a proposal, and avoid unsupported health or treatment claims." },
      { title: "Riverside and leisure stays", body: "Show the actual location, room outlook, access and facilities. A river view, access to the river and a riverside setting are different claims; the copy and photography should make the offer clear." },
      { title: "Experience and activity questions", body: "Distinguish property-operated activities from third-party arrangements. Keep current operating information available through the appropriate provider or authority and avoid promising availability before it is confirmed." },
    ],
    campaigns: [["Retreat groups", "Dates, room mix and programme needs", "Qualified organiser enquiries"], ["Leisure stays", "Location, room details and booking terms", "Suitable room enquiries"], ["Experience-led trips", "Actual inclusions and provider arrangements", "Useful enquiries with clear expectations"]],
    priority: "Separate retreat proposals from individual room enquiries. Build a mobile journey that answers stay and programme questions before guests move to WhatsApp or the booking engine.",
    question: "How do you market a retreat without making medical claims?", answer: "We describe accommodation, facilities, programme structure and the experience actually offered. Any clinical or treatment claims require appropriate evidence and review from the responsible qualified provider before they appear in marketing.",
    cases: ["naturoville-google-ads", "naad-wellness-google-ads"], related: ["resort-marketing-agency-uttarakhand", "hotel-resort-marketing-agency-kerala"],
    source: { label: "Uttarakhand Tourism: Rishikesh", url: "https://uttarakhandtourism.gov.in/destination/rishikesh/" },
  },
  {
    slug: "hotel-marketing-agency-mumbai", name: "Mumbai", keyword: "Hotel Marketing Agency in Mumbai",
    title: "Hotel Marketing Agency in Mumbai | Boost Bookings",
    description: "Fielmente is a hotel marketing agency in Mumbai helping luxury hotels and boutique stays build visibility, reputation and premium positioning online.",
    intro: "Help travellers and local guests see why your Mumbai property fits their plans. We connect search visibility, property content, paid campaigns and useful follow-up for hotels and hospitality venues.",
    context: "Mumbai brings business, culture, entertainment and coastal city experiences together[[IN1]]. A hotel serving BKC, an Andheri property and a South Mumbai stay should not make the same location promise. We start with the property's actual setting, facilities and guest mix.",
    segments: [
      { title: "Business and longer-stay demand", body: "Explain the business areas your property genuinely serves, its workspace and meeting facilities, and longer-stay arrangements. Qualify dates and stay needs before sending a corporate proposal." },
      { title: "Premium and independent positioning", body: "Use original content to explain the rooms, service and neighbourhood experience. Clear positioning helps a guest compare the property on more than an OTA price, without relying on unsupported claims to be the city's best." },
      { title: "Dining and event journeys", body: "Give restaurant reservations, private events and room bookings distinct pages and contact routes. Measure each business line separately and connect enquiries with confirmed business where your systems support it." },
    ],
    campaigns: [["Business travel", "Location, work facilities and stay needs", "Qualified corporate and room enquiries"], ["Independent stays", "Property story, room details and neighbourhood", "Direct-stay enquiries"], ["Dining and events", "Menus, capacity, dates and availability", "Reservations and suitable event requests"]],
    priority: "Make the property and location claims precise, then connect the campaign to the appropriate room or venue page. Review lead quality and booking outcomes before increasing spend.",
    question: "Can you market both a hotel and its restaurants?", answer: "Yes. We can coordinate the brand and reporting while keeping room, restaurant and event journeys distinct. This lets the hotel team see which campaigns generate the business each outlet needs.",
    cases: ["hotel-green-castle-google-ads", "desi-bar-grill-social-media"], related: ["hotel-resort-marketing-agency-goa", "hotel-marketing-agency-bengaluru"],
    source: { label: "Maharashtra Tourism: Mumbai City", url: "https://maharashtratourism.gov.in/districts/mumbai-city/" },
  },
];

function toAgencyPage(m: LocalMarket): AgencyPageData {
  return {
    slug: m.slug, keyword: m.keyword, secondaryKeywords: [], group: "location",
    crumbs: [{ label: "India locations", href: "/hospitality-marketing-locations/" }],
    platforms: ["google-ads", "google-maps", "instagram", "whatsapp"],
    navLabel: m.name, cardLine: m.intro, areaServed: `${m.name}, India`,
    meta: { title: m.title, description: m.description },
    hero: { eyebrow: `Hospitality marketing · ${m.name}`, h1: m.keyword, lede: m.intro,
      chips: ["Property-specific SEO and campaigns", "Clear enquiry and booking measurement", "A written plan based on your property"] },
    form: { title: `Discuss your ${m.name} property`, body: "Share your website and the business you want to grow. We will review the current journey and suggest priorities.", defaultCountryCode: "+91", needs: ["Local SEO and Google visibility", "Google Ads and direct bookings", "Restaurant marketing", "Group and event enquiries", "Website and booking engine", "Enquiry follow-up"] },
    logos: "all",
    context: { eyebrow: `Marketing in ${m.name}`, title: "Start with the guest and the stay", intro: [m.context], stats: [],
      image: { src: "/agency/boutique-hotel.jpg", alt: "Hotel room with morning tea, illustrating a hospitality stay" }, points: m.segments },
    comparison: { title: "Give every enquiry a useful next step", without: ["One broad message for every guest and business line", "Property details that leave common questions unanswered", "Calls, forms and messages reported as if they were bookings"], withList: ["Relevant content for each stay or venue requirement", "Clear room, location, facility and offer information", "Enquiry quality and confirmed business measured separately"] },
    services: { title: `Hospitality marketing services for ${m.name}`, lede: "Select the work your property needs. Each link explains the service in detail.", items: [
      { icon: "search", title: "Hotel SEO and local discovery", body: "Useful property content, technical SEO and accurate local information.", href: "/industries-we-serve/hotel-marketing-agency/hotel-seo/" },
      { icon: "trend", title: "Google Ads", body: "Relevant search campaigns with clear enquiry and booking measurement.", href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/" },
      { icon: "globe", title: "Website and booking journey", body: "A clear mobile website connected to an appropriate booking or enquiry route.", href: "/industries-we-serve/hotel-marketing-agency/hotel-website-development/" },
      { icon: "share", title: "Social media and property content", body: "Original stories and practical content that help guests evaluate the stay.", href: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/" },
      { icon: "chat", title: "WhatsApp enquiry follow-up", body: "Organise conversations and follow up on suitable enquiries with your team.", href: "/products/hotel-whatsapp-marketing/" },
      { icon: "star", title: "Restaurant marketing", body: "Local discovery, venue content and clear reservation journeys.", href: "/industries-we-serve/restaurant-marketing-agency/" },
    ] },
    proof: { title: "See how the work is measured", lede: "These published studies show the channel, client context and measurement limits. Their results are examples, not a forecast for your property.", caseStudies: m.cases, testimonials: [], honestNote: "The linked studies identify where the clients operate. They are not presented as results from every location we serve." },
    blocks: [
      { kind: "table", eyebrow: "A practical campaign plan", title: `Match the campaign to the ${m.name} guest`, columns: ["Business goal", "What the page should explain", "What to measure"], rows: m.campaigns },
      { kind: "cards", eyebrow: "First priority", title: "Make the next improvement measurable", lede: m.priority, items: [
        { icon: "search", title: "Find the discovery gap", body: "Review the queries, pages and local information that matter to your property. Keep established pages where they already serve the right search intent." },
        { icon: "chat", title: "Check the enquiry journey", body: "Follow a guest from the page to the call, form, message or booking engine. Agree who responds and what makes an enquiry useful." },
        { icon: "trend", title: "Review the business outcome", body: "Compare qualified enquiries and confirmed business with spend. Use those results to choose the next content or campaign change." },
      ] },
    ],
    process: { title: "From property review to ongoing improvement", lede: "The scope follows your property, its current systems and the work agreed with your team.", steps: [
      { when: "Review", title: "Establish the baseline", body: "Review the website, local listing, campaigns, room or venue offer and enquiry process." },
      { when: "Plan", title: "Agree the priorities", body: "Choose the guest segments, pages, campaigns and measurements that address the clearest gaps." },
      { when: "Improve", title: "Publish and measure", body: "Implement the agreed work, check the guest journey and review enquiry quality and business outcomes." },
    ] },
    faqs: [
      { q: m.question, a: m.answer },
      { q: m.slug.endsWith("gurgaon") ? "Do you work with restaurants as well as hotels?" : `Do you have an office in ${m.name}?`, a: m.slug.endsWith("gurgaon") ? "Yes. We can plan local discovery, venue content and reservation campaigns for restaurants alongside hotel room, meeting and event marketing. Each business line has its own enquiry and measurement requirements." : "Fielmente serves properties in this area through its hospitality marketing team. This service-area page does not claim a local branch office. Contact us to agree the delivery and meeting arrangements for your property." },
      { q: "How do you measure results?", a: "We agree the measurement before campaigns launch. Depending on your systems, reporting can distinguish calls, forms and messages, qualified enquiries, booking-engine activity and confirmed bookings. A form submission is not automatically reported as a booking." },
      { q: "What does the first discussion cover?", a: "Your property, guest mix, location, room or venue offer, website, current marketing and the business you want to grow. We then suggest a scope and priorities rather than a generic package for every hotel." },
    ],
    related: m.related,
    extraLinks: [{ title: "Explore all India locations", body: "Find the service area and hospitality context relevant to your property.", href: "/hospitality-marketing-locations/" }, { title: "Hotel booking engine", body: "Understand the direct-reservation experience your campaigns lead to.", href: "/products/hotel-booking-engine/" }],
    cta: { title: `Plan the next step for your ${m.name} property`, body: "Share your current website and goals. We will discuss the most useful improvements for your hotel, resort or restaurant." },
    sources: [{ id: "IN1", label: m.source.label, url: m.source.url }],
  };
}

export const LOCAL_AGENCY_PAGES = LOCAL_MARKETS.map(toAgencyPage);
export const LOCAL_PAGE_SLUGS = new Set(LOCAL_MARKETS.map((m) => m.slug));

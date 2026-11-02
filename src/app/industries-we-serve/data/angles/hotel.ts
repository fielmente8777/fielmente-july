import type { AngleSet } from "./types";

// Hotels: city, business, boutique and heritage hotels; mixed leisure, corporate and OTA demand.
export const hotelAngles: AngleSet = {
  "ai-search-optimization": {
    intro: [
      "Business travellers and families now ask AI tools questions like “a quiet hotel near the airport in Bengaluru with early check-in” or “a heritage hotel in Jaipur within walking distance of the old city”. The answer draws on hotel websites, Google listings, reviews and travel articles.",
      "For a hotel, the facts that matter are precise: distance to the airport, station or business district, check-in times, parking, meeting rooms, breakfast, and what reviews say about service. We make those facts clear and consistent everywhere and track which questions your hotel is recommended for.",
    ],
    faqs: [
      { q: "Do corporate travellers use AI tools to choose hotels?", a: "Increasingly, especially for unfamiliar cities. Clear information about location, workspaces, Wi-Fi and transport helps your hotel appear in those answers." },
      { q: "Can AI answers show outdated rates or facilities?", a: "Yes, if old information is still online. We find and correct outdated listings and pages so AI tools pick up current details." },
      { q: "Which hotel facts matter most?", a: "Exact location and distances, room types, check-in and check-out times, breakfast, parking, pet and child policies, and review themes." },
    ],
  },
  branding: {
    intro: [
      "Independent hotels compete with chains that have instantly recognisable brands. Without a clear identity, an independent hotel looks like a generic choice on an OTA list and wins on price alone.",
      "We define what your hotel stands for — its location, history, service style or design — and build the name, identity, voice and guest touchpoints around it: signage, key cards, stationery, menus, amenities and the website.",
    ],
    faqs: [
      { q: "Should an independent hotel look like a chain?", a: "No. Independent hotels win on character. We aim for a polished, consistent identity that feels personal rather than corporate." },
      { q: "Can you rebrand a hotel that's already operating?", a: "Yes. We plan the change in phases so signage, listings, the website and guest materials switch over without confusing returning guests." },
      { q: "Do you design for heritage properties?", a: "Yes. Heritage hotels need a brand that respects the building's history while still feeling current to today's guests." },
    ],
  },
  "chatgpt-ads": {
    intro: [
      "Hotel searches in ChatGPT tend to be specific — a location, a purpose, a budget, a facility. Sponsored placements let your hotel appear when those details match what you offer.",
      "We write campaigns for the reasons people choose your hotel — near the airport, the convention centre or the old city; corporate rates; family rooms; parking — and land each click on a page that confirms the detail they asked about and offers your direct rate.",
    ],
    faqs: [
      { q: "Should a city hotel and a leisure hotel use ChatGPT ads differently?", a: "Yes. City hotels promote location, corporate rates and long stays; leisure hotels promote packages and experiences. Each needs its own landing page." },
      { q: "Do business travellers see ChatGPT ads?", a: "Business travellers increasingly use AI assistants to compare hotels near meetings, venues and airports. Campaigns can promote location, workspaces and corporate or long-stay rates." },
      { q: "Will ChatGPT ads take bookings away from our OTAs?", a: "The aim is to win guests directly while they're still choosing. Bookings that come straight to your website save commission compared with the same guest booking through an OTA." },
    ],
  },
  "content-creation": {
    intro: [
      "Hotel content often stops at rooms and lobby. Guests also want to see breakfast, the meeting rooms, the view from the corridor, the neighbourhood and what a stay feels like at different times of day.",
      "We shoot rooms, public spaces, food and beverage, events and the area around the hotel in one planned visit, and deliver photos and short videos sized for your website, OTAs, Google, social media and corporate sales decks.",
    ],
    faqs: [
      { q: "Can you create content for our corporate sales team?", a: "Yes. Meeting rooms, business-centre facilities and room types for corporate presentations and RFP responses." },
      { q: "Do you photograph our restaurant and bar too?", a: "Yes. Food and beverage content helps both hotel bookings and outside diners." },
      { q: "How often should a hotel refresh its photos?", a: "After any renovation, and every year or two otherwise. Old photos lead to disappointed guests and weaker reviews." },
    ],
  },
  "influencer-marketing": {
    intro: [
      "Influencer marketing for hotels works best when the creator's audience matches your guest — a staycation crowd from the same city, couples planning anniversaries, business travellers, food lovers for your restaurant.",
      "We shortlist creators by audience location and quality, host them on soft dates, agree content in advance, and track bookings and restaurant reservations from their links or codes.",
    ],
    faqs: [
      { q: "Do influencers work for city hotels?", a: "Yes, particularly for staycations, restaurants, brunches and events. Local creators reach people who can book at short notice." },
      { q: "Can creators promote our restaurant rather than rooms?", a: "Yes. Food creators can drive restaurant footfall, which also raises your hotel's profile." },
      { q: "How do you check a creator's audience?", a: "We review their audience location, engagement, comment quality and past brand work before recommending them." },
    ],
  },
  "local-seo": {
    intro: [
      "Hotel Map searches are highly competitive: “hotels near the airport”, “hotels near AIIMS”, “hotel in Connaught Place”. Google shows a map with prices and reviews before any website, and a hotel with a weak profile loses the click to a nearby competitor or an OTA.",
      "We optimise your Google Business Profile for the searches near you — landmarks, business districts, hospitals, stations — keep photos, amenities and hotel details complete, link prices to your own booking engine where possible, and keep reviews coming from every stay.",
    ],
    faqs: [
      { q: "Can our hotel show its own rates in Google Maps?", a: "Yes, through Google's hotel price feeds via a connected booking engine. Showing your direct rate next to OTA prices helps you win direct bookings." },
      { q: "We're near a hospital or business park. Can we rank for that?", a: "Yes. We mention nearby landmarks on your profile and website, and build pages that answer travellers' questions about staying close to them." },
      { q: "How important are hotel reviews on Google?", a: "Very. The number, recency and rating of reviews strongly influence which hotels appear first in local results." },
    ],
  },
  "online-reputation-management": {
    intro: [
      "Hotel reviews arrive from many places at once — Google, Booking.com, MakeMyTrip, Agoda, Tripadvisor, Expedia — and each affects your ranking on that platform. Busy front-office teams often reply to some and miss others.",
      "We monitor every platform, reply consistently in your hotel's voice, escalate service problems to the right department, and report the themes guests mention most, so management can see what's improving and what needs attention.",
    ],
    faqs: [
      { q: "Should a hotel reply to every review?", a: "Yes, ideally. Replies show future guests you listen. Positive reviews get a short thank-you; negative ones get a considered response." },
      { q: "Can you report review trends by department?", a: "Yes. We tag reviews by topic — front office, housekeeping, food and beverage, maintenance — so each team sees its own feedback." },
      { q: "How do we increase the number of reviews?", a: "Ask at check-out, follow up with a message and link, and train staff to invite feedback naturally." },
    ],
  },
  "ota-listing": {
    intro: [
      "Hotels listing on OTAs for the first time — or after a renovation — need accurate room mapping, rate plans, policies, tax settings and content on every platform. Mistakes cause overbookings, rate disparity and guest complaints.",
      "We set up listings on Booking.com, MakeMyTrip, Goibibo, Agoda and Expedia with correct room types, rate plans (room only, breakfast, corporate), policies and photos, and connect them to your channel manager so availability and rates update together.",
    ],
    faqs: [
      { q: "How should hotel rate plans be set up on OTAs?", a: "Usually a flexible rate, a non-refundable rate and meal-plan options, with corporate or long-stay rates where they make sense. Too many similar plans confuse guests." },
      { q: "Can you connect OTAs to our PMS or channel manager?", a: "Yes. We map rooms and rates in your channel manager so changes flow to every OTA." },
      { q: "What causes rate disparity on OTAs?", a: "Usually different taxes, promotions or room mappings between channels. We check and correct these when setting up." },
    ],
  },
  "pr-communication": {
    intro: [
      "Hotel PR covers more than travel features: openings, renovations, new restaurants, chef appointments, events, awards and leadership news all reach different audiences, from travellers to corporate buyers and the hospitality trade.",
      "We prepare press releases and media kits, pitch to travel, lifestyle, business and hospitality trade media, organise media visits and track the coverage and links each story earns.",
    ],
    faqs: [
      { q: "Can PR help win corporate business?", a: "Yes. Coverage in business and trade media builds credibility with travel managers and event planners." },
      { q: "What hotel news is worth a press release?", a: "Openings, renovations, new restaurants or chefs, significant events, awards and senior appointments." },
      { q: "Do you handle hotel crisis communication?", a: "We can help prepare statements and responses. For serious incidents, we work alongside your legal and management teams." },
    ],
  },
  "preopening-marketing": {
    intro: [
      "A new hotel has to build demand in three directions at once: leisure guests, corporate accounts and the OTAs. Leaving any of them until opening week means a slow first quarter.",
      "We plan the pre-opening calendar: brand and website live early, OTA content ready to activate, corporate sales materials, Google Business Profile, launch offers, a soft-opening plan and press. Each step is timed to your handover date.",
    ],
    faqs: [
      { q: "When should a new hotel start corporate sales?", a: "Several months before opening, with a sales kit, rate sheet and site-visit plan, so accounts can be signed for the first months of operation." },
      { q: "Can we take bookings before opening?", a: "Yes, once your opening date is reliable. We set up the booking engine and OTAs with opening offers and flexible cancellation." },
      { q: "Do you help with opening events?", a: "Yes. We plan launch events and invite media, local businesses and creators to help spread the word." },
    ],
  },
  "revenue-management": {
    intro: [
      "City and business hotels see demand rise and fall by weekday, events, conferences and corporate travel patterns. Fixed rates leave money on the table on busy nights and lose bookings on quiet ones.",
      "We track your pick-up and competitor rates, price by day and segment, manage corporate and OTA rates in parity, and use length-of-stay and early-booking rules where they help. Every change is shared with you before it goes live.",
    ],
    faqs: [
      { q: "How do events and conferences affect hotel pricing?", a: "Strongly. We keep a calendar of local events, exhibitions and holidays and adjust rates ahead of demand." },
      { q: "Should corporate rates be fixed or dynamic?", a: "Both exist. Many hotels use fixed negotiated rates for key accounts and dynamic discounts off the best available rate for others." },
      { q: "Can you work with our existing PMS?", a: "Usually yes. We need reports on bookings, pick-up and rates, which most PMS systems provide." },
    ],
  },
  "sales-marketing-automation": {
    intro: [
      "Hotels receive enquiries for rooms, groups, corporate stays, banquets and the restaurant — by phone, email, WhatsApp and forms. Each goes to a different person, and many are never followed up.",
      "We set up a single CRM with clear stages for each enquiry type, instant replies, automatic assignment to the right team, follow-up reminders and reports by source. Past guests and corporate contacts receive timely offers that bring them back.",
    ],
    faqs: [
      { q: "Can banquet and room enquiries be handled in one system?", a: "Yes, with separate pipelines and owners so each team sees only its own leads." },
      { q: "Can we track corporate accounts?", a: "Yes. Companies, contacts, enquiries and stays can be recorded, so your sales team sees each account's history." },
      { q: "How quickly should a hotel reply to an enquiry?", a: "Within minutes for the first response. Automated acknowledgements buy time for your team to prepare a proper quote." },
    ],
  },
  "sales-marketing-consultation": {
    intro: [
      "Hotels juggle several revenue streams — rooms, food and beverage, banquets, corporate accounts — and often several agencies. The consultation looks at how all of it works together.",
      "We review channel mix, direct-booking share, OTA costs, rate strategy, corporate business, enquiry handling and marketing spend, then set priorities and measures for the next quarter.",
    ],
    faqs: [
      { q: "Do you review our sales team's processes?", a: "Yes. We look at how leads are tracked, followed up and converted, and suggest practical improvements." },
      { q: "Can you help with a hotel's annual marketing plan?", a: "Yes. We build a plan with budget, channels, campaigns and monthly measures." },
      { q: "Is this useful for hotel owners who don't run operations?", a: "Very. Owners get a clear, independent view of how marketing and sales are performing." },
    ],
  },
  "tripadvisor-ads": {
    intro: [
      "International travellers and long-distance domestic travellers often compare hotels on Tripadvisor before booking. For hotels in tourist cities, sponsored placements can put you in front of them at that moment.",
      "For hotels in tourist cities, we refresh the listing first — photos, amenities, location details and replies to recent reviews — then run sponsored placements for the countries and travel dates your guests come from, with direct links to your booking engine where Tripadvisor allows.",
    ],
    faqs: [
      { q: "Is Tripadvisor useful for business hotels?", a: "Less than for leisure hotels in tourist destinations. We check where your guests research before recommending spend." },
      { q: "Does Tripadvisor matter for heritage and boutique hotels?", a: "Often, yes. International visitors in particular use it to compare character hotels in cities like Jaipur, Udaipur, Varanasi and Kochi." },
      { q: "How do we know if Tripadvisor ads are working?", a: "We track clicks to your website and direct bookings from Tripadvisor, alongside the impressions and cost-per-click Tripadvisor reports." },
    ],
  },
  "website-development": {
    intro: [
      "A hotel website needs to serve very different visitors: a business traveller who wants the rate and location in seconds, a family comparing rooms, a planner looking for banquet capacities, and a guest coming back to book directly.",
      "We build fast, mobile-first hotel websites with the booking engine built in, clear room pages, location and transport information, meeting and banquet pages, offers, and tracking for every enquiry and booking.",
    ],
    faqs: [
      { q: "Should a hotel website show rates on the home page?", a: "A booking widget near the top that shows live availability and rates is usually best. Guests should never have to hunt for prices." },
      { q: "Can corporate clients book special rates on our website?", a: "Yes, with promo codes or private rate plans set up in the booking engine." },
      { q: "Do you build pages for our restaurant and banquets?", a: "Yes. Restaurants, bars, banquets and meeting rooms each get their own page with menus, capacities and enquiry forms." },
    ],
  },
  "weddings-events-marketing": {
    intro: [
      "Hotel banquets and lawns can be as valuable as rooms, but wedding and event enquiries need their own approach: capacities, catering, décor rules, packages and fast replies to families and planners.",
      "We build wedding and event pages with real photos, capacity charts and package details, run campaigns for weddings, social events and corporate meetings in your city, and route every enquiry to your banquet team with the details needed to quote.",
    ],
    faqs: [
      { q: "Can a city hotel compete for weddings?", a: "Yes, especially for smaller weddings, receptions and pre-wedding functions, where location, rooms for guests and catering quality matter most." },
      { q: "Should we list on wedding portals?", a: "Usually yes. Portals like WedMeGood and WeddingWire reach couples early in their planning. We help you choose and manage them." },
      { q: "Can you market corporate meetings too?", a: "Yes. We target companies and event planners with meeting packages, capacities and technology details." },
    ],
  },
};

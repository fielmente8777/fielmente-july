// Every website and landing page Fielmente has built and hosts on Vercel, shown on /our-work/.
// Generated from the Vercel project list; screenshots are public/our-work/sites/<slug>.webp (desktop)
// and <slug>-m.webp (phone).

export type SiteType = "Website" | "Landing page";

export const INDUSTRIES = ["Hotels & Resorts", "Restaurants & Food", "Travel & Experiences", "Other Businesses"] as const;
export type Industry = (typeof INDUSTRIES)[number];

export interface SiteItem {
  slug: string;
  name: string;
  url: string;
  type: SiteType;
  industry: Industry;
  location?: string;
  /** A phone screenshot exists. */
  mobile?: boolean;
}

export const SITES: SiteItem[] = [
  {"slug": "amaltasvilla-com", "name": "Amaltas Villa by Jungle Diaries", "url": "https://amaltasvilla.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Jim Corbett, Uttarakhand", "mobile": true},
  {"slug": "ivararesorts-com", "name": "Ivara Resorts", "url": "https://www.ivararesorts.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Khajuraho, Madhya Pradesh", "mobile": true},
  {"slug": "thejunglediaries-com", "name": "Jungle Diaries", "url": "https://thejunglediaries.com/", "type": "Website", "industry": "Travel & Experiences", "location": "Jim Corbett, Uttarakhand", "mobile": true},
  {"slug": "oneoffhotels-com", "name": "One Off Hotels", "url": "https://oneoffhotels.com/", "type": "Website", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "corbettthegrand-com", "name": "Corbett The Grand", "url": "https://corbettthegrand.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Ramnagar, Uttarakhand", "mobile": true},
  {"slug": "arkayamukteshwar-com", "name": "Arkaya Mukteshwar", "url": "https://www.arkayamukteshwar.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Mukteshwar, Uttarakhand", "mobile": true},
  {"slug": "saraayaglamps-com", "name": "Saraaya Glamps", "url": "https://saraayaglamps.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Dharamshala, Himachal Pradesh", "mobile": true},
  {"slug": "therudrakshretreat-com", "name": "The Rudraksh Retreat", "url": "https://therudrakshretreat.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Tehri Garhwal, Uttarakhand", "mobile": true},
  {"slug": "whiteridgehotels-com", "name": "White Ridge Hotel", "url": "https://www.whiteridgehotels.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Dharamshala, Himachal Pradesh", "mobile": true},
  {"slug": "ebcmussoorie-com", "name": "EBC Mussoorie", "url": "https://www.ebcmussoorie.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Mussoorie, Uttarakhand", "mobile": true},
  {"slug": "oralakeview-nu", "name": "ORA Lakeview Hotel", "url": "https://oralakeview-nu.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Brienz, Switzerland", "mobile": true},
  {"slug": "reserve-syahudaipur-com", "name": "Syah Udaipur", "url": "https://reserve.syahudaipur.com/", "type": "Landing page", "industry": "Restaurants & Food", "location": "Udaipur, Rajasthan", "mobile": true},
  {"slug": "amhotels-in", "name": "AM Hospitality", "url": "https://amhotels.in/", "type": "Website", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "arohapalms-com", "name": "Aroha Palms", "url": "https://arohapalms.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "North Goa", "mobile": true},
  {"slug": "destindhellaretreat-com", "name": "Destinn Dhela", "url": "https://destindhellaretreat.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Jim Corbett, Uttarakhand", "mobile": true},
  {"slug": "grandursanchi-9j4w", "name": "Grandeur de Sanchi", "url": "https://grandursanchi-9j4w.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Calangute, North Goa", "mobile": true},
  {"slug": "soniarenahotel-com", "name": "Hotel Soni Arena", "url": "https://www.soniarenahotel.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Una, Himachal Pradesh", "mobile": true},
  {"slug": "jaiaanjaney", "name": "Jai Aanjaney", "url": "https://jaiaanjaney.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "kamalfarms-gamma", "name": "Kamal Farms", "url": "https://kamalfarms-gamma.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Karjat, Maharashtra", "mobile": true},
  {"slug": "manratan-olive", "name": "Manratan Resort", "url": "https://manratan-olive.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "minimalisthotel", "name": "Minimalist Hotels", "url": "https://minimalisthotel.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Delhi, Panjim & Varanasi"},
  {"slug": "naadwellness-in", "name": "NAAD Wellness", "url": "https://www.naadwellness.in/", "type": "Website", "industry": "Hotels & Resorts", "location": "Delhi NCR", "mobile": true},
  {"slug": "nature-on-the-rocks", "name": "Nature on the Rocks", "url": "https://nature-on-the-rocks.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "oakclimbing", "name": "Oak Climbing Resort", "url": "https://oakclimbing.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Mukteshwar, Uttarakhand", "mobile": true},
  {"slug": "riviera-resort-client", "name": "Riviera Resort", "url": "https://riviera-resort-client.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Rishikesh, Uttarakhand"},
  {"slug": "soul-stories-website", "name": "Soul Storries", "url": "https://soul-stories-website.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Mussoorie, Uttarakhand", "mobile": true},
  {"slug": "sparvhospitality-com", "name": "SPARV Hospitality", "url": "https://sparv-omega.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Goa", "mobile": true},
  {"slug": "swansuites-com", "name": "Swan Suites", "url": "https://swansuites.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Gachibowli, Hyderabad", "mobile": true},
  {"slug": "thebluelake-in", "name": "The Blue Lake", "url": "https://thebluelake.in/", "type": "Website", "industry": "Hotels & Resorts", "location": "Igatpuri, Maharashtra", "mobile": true},
  {"slug": "thebunkerhouse-in", "name": "The Bunker House", "url": "https://www.thebunkerhouse.in/", "type": "Website", "industry": "Hotels & Resorts", "location": "Chopta, Uttarakhand"},
  {"slug": "the-jamun-tree", "name": "The Jamun Tree", "url": "https://the-jamun-tree.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Siddharthanagar, Nepal", "mobile": true},
  {"slug": "kumaon-bliss", "name": "The Kumaon Bliss", "url": "https://kumaon-bliss.vercel.app/", "type": "Website", "industry": "Hotels & Resorts"},
  {"slug": "lumi-new", "name": "The Lumi Hotels", "url": "https://lumi-new.vercel.app/", "type": "Website", "industry": "Hotels & Resorts", "location": "Bir, Himachal Pradesh", "mobile": true},
  {"slug": "wabisabiresorts-com", "name": "Wabi Sabi Resorts", "url": "https://www.wabisabiresorts.com/", "type": "Website", "industry": "Hotels & Resorts", "location": "Igatpuri, Maharashtra", "mobile": true},
  {"slug": "landing-alphawellnessresort-com", "name": "Alpha Wellness Resort", "url": "https://landing.alphawellnessresort.com/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Mysore, Karnataka", "mobile": true},
  {"slug": "altin-stays", "name": "Altin Stays", "url": "https://altin-stays.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Coimbatore, Tamil Nadu", "mobile": true},
  {"slug": "lp-hotelanantharaa-com", "name": "Anantharaa", "url": "https://lp.hotelanantharaa.com/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Thiruvannamalai, Tamil Nadu", "mobile": true},
  {"slug": "aspaapartments-com", "name": "ASPA Apartments", "url": "https://aspaapartments.com/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Ulwe, Navi Mumbai", "mobile": true},
  {"slug": "colonel-resort", "name": "Colonel Resort", "url": "https://colonel-resort.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "landing-corbettthegrand-com", "name": "Corbett The Grand", "url": "https://landing.corbettthegrand.com/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Ramnagar, Uttarakhand", "mobile": true},
  {"slug": "landing-ebcmussoorie-com", "name": "EBC Mussoorie", "url": "https://landing.ebcmussoorie.com/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Mussoorie, Uttarakhand", "mobile": true},
  {"slug": "aqua-dunhinda", "name": "Hotel Aqua Dunhinda", "url": "https://aqua-dunhinda.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Ethgala", "mobile": true},
  {"slug": "lamount-laddakh", "name": "Hotel La Mount Ladakh", "url": "https://lamount-laddakh.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Ladakh", "mobile": true},
  {"slug": "infinity-hotels-sky6", "name": "Infinity Hotels & Resorts", "url": "https://infinity-hotels-sky6.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Alwar, Rajasthan", "mobile": true},
  {"slug": "luxury-vibe-stay", "name": "Luxury Vibe Stays", "url": "https://luxury-vibe-stay.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "manali-se", "name": "Manali Se", "url": "https://manali-se.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Manali, Himachal Pradesh", "mobile": true},
  {"slug": "landing-mangogrovehotel-com", "name": "Mango Grove Hotel", "url": "https://mongo-grove.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "muktkeshii", "name": "Muktkeshii Boutique Resort", "url": "https://muktkeshii.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Mukteshwar, Uttarakhand", "mobile": true},
  {"slug": "naturovillewellnessresort-com", "name": "Naturoville Wellness Resort", "url": "https://www.naturovillewellnessresort.com/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Rishikesh, Uttarakhand", "mobile": true},
  {"slug": "northwind-wine", "name": "Northwind 57", "url": "https://northwind-wine.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Bir Billing, Himachal Pradesh", "mobile": true},
  {"slug": "one-earth-lp", "name": "One Earth", "url": "https://one-earth-lp.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "opera-house-one", "name": "Opera House Lonavala", "url": "https://opera-house-one.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Lonavala, Maharashtra", "mobile": true},
  {"slug": "royalistiq-five", "name": "Royalistiq", "url": "https://royalistiq-five.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "suryabagh", "name": "Surya Bagh", "url": "https://suryabagh.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Alwar, Rajasthan"},
  {"slug": "theacaciahotels", "name": "The Acacia Resort & Spa", "url": "https://theacaciahotels.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Morjim, Goa", "mobile": true},
  {"slug": "landing-thebunkerhouse-in", "name": "The Bunker House", "url": "https://landing.thebunkerhouse.in/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Chopta, Uttarakhand", "mobile": true},
  {"slug": "zion-seven-theta", "name": "The Zion", "url": "https://zion-seven-theta.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Shimla, Himachal Pradesh", "mobile": true},
  {"slug": "lp-trikonestays-com", "name": "Trikone Stays", "url": "https://lp.trikonestays.com/", "type": "Landing page", "industry": "Hotels & Resorts", "location": "Nainital, Uttarakhand", "mobile": true},
  {"slug": "waterfrontestatebymoets", "name": "Waterfront Estate by Moets", "url": "https://waterfrontestatebymoets.vercel.app/", "type": "Landing page", "industry": "Hotels & Resorts", "mobile": true},
  {"slug": "chef-kenzo", "name": "Chef Kenzo", "url": "https://chef-kenzo.vercel.app/", "type": "Website", "industry": "Restaurants & Food", "location": "Delhi NCR", "mobile": true},
  {"slug": "shreeiyengarfoods-com", "name": "Shree Iyengar Foods", "url": "https://www.shreeiyengarfoods.com/", "type": "Website", "industry": "Restaurants & Food", "mobile": true},
  {"slug": "spice-haven-website-zeta", "name": "Spice Haven", "url": "https://spice-haven-website-zeta.vercel.app/", "type": "Website", "industry": "Restaurants & Food", "mobile": true},
  {"slug": "zeneventsandcatering-com", "name": "Zen Events & Catering", "url": "https://zeneventsandcatering.com/", "type": "Website", "industry": "Restaurants & Food", "location": "London", "mobile": true},
  {"slug": "petals-and-paniyaram", "name": "A Petal and Paniyaram", "url": "https://petals-and-paniyaram.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food", "mobile": true},
  {"slug": "aaoji-iota", "name": "Aaoji", "url": "https://aaoji-iota.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food", "mobile": true},
  {"slug": "alt-syahudaipur-com", "name": "Alt by Syah", "url": "https://altbysyah.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food", "location": "Udaipur, Rajasthan", "mobile": true},
  {"slug": "aravat-lp", "name": "Aravat Pure Vegetarian Dhaba", "url": "https://aravat-lp.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food", "location": "Murthal, Haryana", "mobile": true},
  {"slug": "burger-gully", "name": "Burger Gully", "url": "https://burger-gully.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food"},
  {"slug": "moets", "name": "Moets", "url": "https://moets.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food", "mobile": true},
  {"slug": "norther-nawab", "name": "Northern Nawab", "url": "https://norther-nawab.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food", "location": "Mumbai", "mobile": true},
  {"slug": "yakumi-psi", "name": "Yakumi", "url": "https://yakumi-psi.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food"},
  {"slug": "yuzi-sushi", "name": "Yuzi Sushi", "url": "https://yuzi-sushi.vercel.app/", "type": "Landing page", "industry": "Restaurants & Food", "location": "London", "mobile": true},
  {"slug": "humrahitravels-com", "name": "Humrahi Travels", "url": "https://www.humrahitravels.com/", "type": "Website", "industry": "Travel & Experiences", "mobile": true},
  {"slug": "eracamps", "name": "ERA Camps", "url": "https://eracamps.vercel.app/", "type": "Landing page", "industry": "Travel & Experiences", "location": "Prayagraj", "mobile": true},
  {"slug": "stay-in-kumbh", "name": "Stay in Kumbh", "url": "https://stay-in-kumbh.vercel.app/", "type": "Landing page", "industry": "Travel & Experiences", "location": "Prayagraj", "mobile": true},
  {"slug": "al-hathaifa-com", "name": "Al-Hathaifa", "url": "https://www.al-hathaifa.com/", "type": "Website", "industry": "Other Businesses", "location": "Muscat, Oman", "mobile": true},
  {"slug": "baliyacotournew", "name": "Baliye Couture", "url": "https://baliyacotournew.vercel.app/", "type": "Website", "industry": "Other Businesses", "mobile": true},
  {"slug": "bijliwala-ca", "name": "Bijliwala Contracting", "url": "https://bijliwala-ca.vercel.app/", "type": "Website", "industry": "Other Businesses", "location": "Canada", "mobile": true},
  {"slug": "dlmsfurnishings-com", "name": "DLMS Furnishings", "url": "https://www.dlmsfurnishings.com/", "type": "Website", "industry": "Other Businesses", "mobile": true},
  {"slug": "eazotel-com", "name": "Eazotel", "url": "https://eazotel.com/", "type": "Website", "industry": "Other Businesses", "mobile": true},
  {"slug": "hotelads-io", "name": "HotelAds", "url": "https://hotelads.vercel.app/", "type": "Website", "industry": "Other Businesses", "mobile": true},
  {"slug": "jahezoman-com", "name": "Jahez Oman", "url": "https://www.jahezoman.com/", "type": "Website", "industry": "Other Businesses", "location": "Oman", "mobile": true},
  {"slug": "maklandimmigration-ca", "name": "Makland Immigration", "url": "https://maklandimmigration.ca/", "type": "Website", "industry": "Other Businesses", "location": "Canada", "mobile": true},
  {"slug": "oneshotmarketing-ca", "name": "One Shot Marketing", "url": "https://oneshotmarketing.ca/", "type": "Website", "industry": "Other Businesses", "location": "Ontario, Canada", "mobile": true},
  {"slug": "stuccodecor-com", "name": "Stucco Decor", "url": "https://stuccodecor.com/", "type": "Website", "industry": "Other Businesses", "location": "Mississauga, Ontario", "mobile": true},
  {"slug": "tncimmigration-com", "name": "TNC Immigration", "url": "https://tncimmigration.com/", "type": "Website", "industry": "Other Businesses", "location": "Canada", "mobile": true},
  {"slug": "house-connect-psi", "name": "Aaradhya Avaan by MICL", "url": "https://house-connect-psi.vercel.app/", "type": "Landing page", "industry": "Other Businesses", "location": "Mumbai", "mobile": true},
  {"slug": "alhathaifalp", "name": "L&T Realty Island Cove", "url": "https://alhathaifalp.vercel.app/", "type": "Landing page", "industry": "Other Businesses", "mobile": true},
];

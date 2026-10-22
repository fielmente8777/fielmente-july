// Branding, menus and print work shown on /our-work/. Images are design mockups and pages from the
// client branding folders in Fielmente's Google Drive, saved as public/our-work/branding/<key>-<n>.webp.

export interface BrandImage {
  src: string;
  w: number;
  h: number;
  alt: string;
}

export interface BrandProject {
  key: string;
  name: string;
  place: string;
  /** What we designed. */
  work: string;
  images: BrandImage[];
}

const img = (key: string, n: number, w: number, h: number, alt: string): BrandImage => ({
  src: `/our-work/branding/${key}-${n}.webp`,
  w,
  h,
  alt,
});

export const BRAND_PROJECTS: BrandProject[] = [
  {
    key: "arkaya",
    name: "Arkaya Mukteshwar",
    place: "Boutique Himalayan retreat, Mukteshwar",
    work: "Logo and tagline, brand book and every guest touchpoint: lobby signage, stationery, key cards, door hangers, coasters, tent cards, amenities, menus and brochures.",
    images: [
      img("arkaya", 1, 1400, 788, "Arkaya logo on the reception wall"),
      img("arkaya", 2, 934, 1400, "Arkaya coasters"),
      img("arkaya", 3, 1400, 1064, "Arkaya welcome tent card"),
      img("arkaya", 4, 1400, 933, "Arkaya branded tissue box"),
      img("arkaya", 5, 1400, 1048, "Arkaya washroom signage"),
      img("arkaya", 6, 1400, 933, "Arkaya writing pad"),
      img("arkaya", 7, 1400, 933, "Arkaya stationery set: letterhead, envelopes, cards and folder"),
    ],
  },
  {
    key: "saraaya",
    name: "Saraaya Glamps",
    place: "Glamping retreat, Dharamshala",
    work: "Logo, wordmark and brand story, with on-site signage, vehicle branding, door hangers, billboards, menus and brochures.",
    images: [
      img("saraaya", 1, 1200, 896, "Saraaya Glamping poster with a mountain camp"),
      img("saraaya", 2, 928, 1152, "Saraaya sign board at the camp entrance"),
      img("saraaya", 3, 933, 1400, "Saraaya door hanger"),
      img("saraaya", 4, 1200, 896, "Saraaya branded pickup truck"),
      img("saraaya", 5, 1184, 864, "Saraaya highway billboard"),
    ],
  },
  {
    key: "swarnavilas",
    name: "Aveera Swarnavilas Palace",
    place: "Heritage palace hotel, Chhattisgarh",
    work: "Crest logo, wayfinding, key tags, robes, bathroom amenities and guest stationery for a property still being built.",
    images: [
      img("swarnavilas", 1, 1400, 939, "Swarnavilas Palace directional signage"),
      img("swarnavilas", 2, 928, 1152, "Swarnavilas room key tag"),
      img("swarnavilas", 3, 1024, 1024, "Swarnavilas monogrammed bathrobe"),
      img("swarnavilas", 4, 1128, 1400, "Swarnavilas bathroom amenities"),
      img("swarnavilas", 5, 1128, 1400, "Swarnavilas guest card"),
    ],
  },
  {
    key: "wabi-sabi",
    name: "Wabi Sabi Resort",
    place: "Destination resort, Igatpuri",
    work: "Logo, brand guidelines, stationery, room numbers, event gifts, wedding flyers and brochures.",
    images: [
      img("wabi-sabi", 1, 1053, 745, "Wabi Sabi branded mug"),
      img("wabi-sabi", 2, 1053, 745, "Wabi Sabi branded pen"),
      img("wabi-sabi", 3, 1053, 745, "Wabi Sabi notebook"),
      img("wabi-sabi", 4, 1053, 745, "Wabi Sabi tote bag"),
      img("wabi-sabi", 5, 855, 405, "Wabi Sabi envelope design"),
    ],
  },
  {
    key: "jai-aanjaney",
    name: "Jai Aanjaney Resort",
    place: "Resort, opening 2026",
    work: "Pre-opening identity: logo, menus, key cards and guest cards.",
    images: [
      img("jai-aanjaney", 1, 928, 1152, "Jai Aanjaney menu cover"),
      img("jai-aanjaney", 2, 1128, 1400, "Jai Aanjaney guest card"),
    ],
  },
  {
    key: "aveeraa",
    name: "Aveeraa",
    place: "Hotels, resorts & palaces group",
    work: "Group identity with stationery, storefront and amenity designs.",
    images: [
      img("aveeraa", 1, 928, 1152, "Aveeraa business card"),
      img("aveeraa", 2, 1045, 1400, "Aveeraa logo on a shop window"),
    ],
  },
  {
    key: "zen",
    name: "Zen Events & Catering",
    place: "Events & catering, London",
    work: "Brand mark with food-cart, uniform, stationery and packaging designs.",
    images: [
      img("zen", 1, 1128, 1400, "Zen branded food cart"),
      img("zen", 2, 1128, 1400, "Zen branded apron"),
    ],
  },
  {
    key: "spice-haven",
    name: "Spice Haven",
    place: "Restaurant, Dubai",
    work: "Brand guidelines, logo suite, colour and type system, QR and thank-you cards, festive menus and packaging.",
    images: [
      img("spice-haven", 1, 1053, 745, "Spice Haven brand guidelines cover"),
      img("spice-haven", 2, 1053, 745, "Spice Haven logo on dark and gold"),
      img("spice-haven", 3, 1053, 745, "Spice Haven colour palette"),
      img("spice-haven", 4, 1053, 745, "Spice Haven menu and napkin mockups"),
    ],
  },
];

/** Logos we designed for restaurants and hotels (Client Portfolio deck). */
export const LOGO_DESIGNS: { name: string; src: string; bg: string }[] = [
  { name: "Zar-e-Biryani", src: "/our-work/branding/logo-zar-e-biryani-1.webp", bg: "#050407" },
  { name: "Burkey", src: "/clientsLogo/BURKEY-BLACK-LOGO-01.png", bg: "#FFFFFF" },
  { name: "Chinese Wala", src: "/clientsLogo/chinese-wala.png", bg: "#FFFFFF" },
  { name: "Dhruvees", src: "/clientsLogo/dhruvees.png", bg: "#000000" },
  { name: "Desi Bar & Grill", src: "/clientsLogo/desi-bar-grill.png", bg: "#FFFFFF" },
  { name: "Mahabir Palace", src: "/clientsLogo/mahabir-palace.png", bg: "#FFFFFF" },
  { name: "Tents N' Trails", src: "/clientsLogo/tents&trails.png", bg: "#FFFFFF" },
  { name: "Hotel Platinum Shravasti", src: "/clientsLogo/hotel-platinum-shravasti.png", bg: "#FFFFFF" },
];

/** Menus and print. */
export const MENUS: { name: string; place: string; pages: BrandImage[] }[] = [
  {
    name: "Naturoville bar menu",
    place: "Wellness resort, Rishikesh",
    pages: Array.from({ length: 7 }, (_, i) => img("menu-naturoville-bar", i + 1, 650, 1131, `Naturoville bar menu, page ${i + 1}`)),
  },
  {
    name: "Naturoville food menu",
    place: "Wellness resort, Rishikesh",
    pages: [1, 2].map((n) => img("menu-naturoville-food", n, 910, 1286, `Naturoville food menu, page ${n}`)),
  },
  {
    name: "Doner & Gyros TV-screen menu",
    place: "Restaurant, Gujarat",
    pages: [img("menu-doner-gyros", 1, 790, 1400, "Doner & Gyros digital menu board")],
  },
];

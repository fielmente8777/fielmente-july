// Social media grids shown on /our-work/, taken from the client Grid folders in Fielmente's Google Drive.
// Each post is public/our-work/social/<slug>-<n>.webp (540×675, 4:5 like Instagram's grid).

export interface SocialBrand {
  slug: string;
  name: string;
  category: string;
  posts: number;
}

export const SOCIAL_BRANDS: SocialBrand[] = [
  { slug: "naad-wellness", name: "NAAD Wellness", category: "Wellness retreat", posts: 9 },
  { slug: "vanyara", name: "Vanyara by Anantum", category: "Luxury resort launch", posts: 9 },
  { slug: "aroha-palms", name: "Aroha Palms", category: "Villas, North Goa", posts: 9 },
  { slug: "ivara-resorts", name: "Ivara Resorts", category: "Heritage resort, Khajuraho", posts: 9 },
  { slug: "zen-events", name: "Zen Events & Catering", category: "Events & catering, London", posts: 6 },
  { slug: "zaan-travels", name: "Zaan Travels", category: "Kashmir travel", posts: 6 },
];

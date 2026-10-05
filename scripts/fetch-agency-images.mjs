// Downloads the Freepik stock photos used on the 15 agency landing pages into public/agency/.
// Until a photo is downloaded, each page uses its local fallback image automatically.
//
// Usage (from the project root):
//   FREEPIK_API_KEY=your_key node scripts/fetch-agency-images.mjs
//
// Needs Node 18+. Uses GET https://api.freepik.com/v1/resources/{id}/download (header: x-freepik-api-key).
// All IDs below are free-licence, non-AI photos. Check the licence terms on Freepik before publishing.

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const IMAGES = [
  // file in public/agency/            Freepik ID    used on
  { file: "dubai-hotel.jpg",           id: 10585621,  note: "Dubai hotel page: skyscrapers and palm trees" },
  { file: "dubai-marina.jpg",          id: 10824128,  note: "Hospitality Dubai: Dubai Marina promenade" },
  { file: "abu-dhabi.jpg",             id: 9990465,   note: "UAE page: Abu Dhabi seascape with towers" },
  { file: "new-york.jpg",              id: 28895637,  note: "USA page: New York cabs" },
  { file: "london.jpg",                id: 25272120,  note: "UK page: London streets" },
  { file: "international-hotel.jpg",   id: 73897891,  note: "International page: guests checking in" },
  { file: "luxury-resort.jpg",         id: 10176400,  note: "Luxury resort page: private pool at sunset" },
  { file: "google-ads-laptop.jpg",     id: 143489084, note: "Hotel Google Ads page: laptop with growth chart" },
  { file: "marketing-dashboard.jpg",   id: 413435364, note: "Performance page: laptop with analytics" },
  { file: "revenue-analytics.jpg",     id: 868128,    note: "Revenue page: laptop with annual chart" },
  { file: "boutique-hotel.jpg",        id: 31904148,  note: "Boutique page: bedroom with deck view" },
  { file: "hotel-booking-phone.jpg",   id: 38794943,  note: "Direct booking page: booking on laptop and phone" },
  { file: "hotel-guest-tablet.jpg",    id: 162124148, note: "AI page: hotel guest using a tablet" },
];

const key = process.env.FREEPIK_API_KEY;
if (!key) {
  console.error("Set FREEPIK_API_KEY first, e.g. FREEPIK_API_KEY=xxxx node scripts/fetch-agency-images.mjs");
  process.exit(1);
}

const outDir = path.join(process.cwd(), "public", "agency");
await mkdir(outDir, { recursive: true });

for (const img of IMAGES) {
  const res = await fetch(`https://api.freepik.com/v1/resources/${img.id}/download`, {
    headers: { "x-freepik-api-key": key, Accept: "application/json" },
  });
  if (!res.ok) {
    console.error(`✗ ${img.file} (${img.id}): ${res.status} ${await res.text()}`);
    continue;
  }
  const { data } = await res.json();
  const file = await fetch(data.url);
  if (!file.ok) {
    console.error(`✗ ${img.file}: download failed ${file.status}`);
    continue;
  }
  await writeFile(path.join(outDir, img.file), Buffer.from(await file.arrayBuffer()));
  console.log(`✓ ${img.file} — ${img.note}`);
}

console.log("\nDone. Rebuild the site so pages switch from fallbacks to these photos. Resize to ~2000px wide before committing.");

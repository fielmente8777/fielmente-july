// Downloads the licensed Freepik stock photos used on the case study pages
// into public/case-studies/.
//
// Usage (from the project root):
//   FREEPIK_API_KEY=your_key node scripts/fetch-case-study-images.mjs
//
// Needs Node 18+ (built-in fetch). Uses the Freepik API download endpoint:
//   GET https://api.freepik.com/v1/resources/{id}/download   (header: x-freepik-api-key)

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const IMAGES = [
  // file name in public/case-studies/          Freepik ID   what it shows
  { file: "index-hero.jpg",        id: 20472902,  note: "Couple in a mountain-view resort pool, India" },
  { file: "naturoville-hero.jpg",  id: 7478196,   note: "Ayurvedic shirodhara treatment in India" },
  { file: "wellness-herbal.jpg",   id: 11407838,  note: "Herbal spa treatment equipment on wooden floor" },
  { file: "mussoorie-valley.jpg",  id: 17058662,  note: "Valley view from Mussoorie" },
  { file: "mussoorie-hills.jpg",   id: 17058681,  note: "Valley view from Mussoorie (second angle)" },
  { file: "naad-ayurveda.jpg",     id: 26626308,  note: "Traditional Ayurveda treatment" },
  { file: "wellness-compress.jpg", id: 11407549,  note: "Herbal compress on dark floor" },
  { file: "garhwal-himalaya.jpg",  id: 414905118, note: "Tungnath–Chopta range, Garhwal Himalaya" },
];

const key = process.env.FREEPIK_API_KEY;
if (!key) {
  console.error("Set FREEPIK_API_KEY first, e.g. FREEPIK_API_KEY=xxxx node scripts/fetch-case-study-images.mjs");
  process.exit(1);
}

const outDir = path.join(process.cwd(), "public", "case-studies");
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

console.log("\nDone. Tip: resize to ~2000px wide before committing to keep the repo light.");

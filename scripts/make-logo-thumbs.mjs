// Makes small WebP copies of the client and partner logos (public/clientsLogo, public/partners)
// and writes src/utils/logoThumbs.json, which maps each original file to its copy.
// Runs before every build (npm "prebuild"), so new logos get a copy automatically.
// The logo strips use these files directly: no image-optimiser URLs and srcsets in the HTML
// (100+ logos per page made those a large part of the page size).
import fs from "node:fs";
import path from "node:path";

const root = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const FOLDERS = ["clientsLogo", "partners"];
const MAX_W = 480; // 2x the largest tile the logo is shown in
const MAX_H = 320;
const manifestPath = path.join(root, "src/utils/logoThumbs.json");

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("[logo-thumbs] sharp is not installed: keeping the existing thumbnails and manifest.");
  process.exit(0);
}

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const manifest = {};
let made = 0;

for (const folder of FOLDERS) {
  const dir = path.join(root, "public", folder);
  if (!fs.existsSync(dir)) continue;
  const outDir = path.join(dir, "thumbs");
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of fs.readdirSync(dir).sort()) {
    if (!/\.(png|jpe?g|webp|avif)$/i.test(file)) continue;
    const src = path.join(dir, file);
    if (!fs.statSync(src).isFile()) continue;
    // Extension kept in the name: some logos exist as both .png and .jpg.
    const name = `${slug(file)}.webp`;
    const out = path.join(outDir, name);
    if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs) {
      try {
        await sharp(src).resize({ width: MAX_W, height: MAX_H, fit: "inside", withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
        made++;
      } catch (e) {
        console.warn(`[logo-thumbs] could not convert ${folder}/${file}: ${e.message}`);
        continue;
      }
    }
    manifest[`/${folder}/${file}`] = `/${folder}/thumbs/${name}`;
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 0) + "\n");
console.log(`[logo-thumbs] ${Object.keys(manifest).length} logos (${made} new or updated)`);

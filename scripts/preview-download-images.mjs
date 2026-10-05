// PREVIEW BRANCH ONLY.
// Downloads the Freepik photos for the new landing pages and case studies into /public
// before `next build`, using the signed links in preview-images.json. The links expire
// quickly, so later builds skip anything they can't fetch instead of failing.
// For the live site, run scripts/fetch-agency-images.mjs and
// scripts/fetch-case-study-images.mjs once and commit the files instead.
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const list = JSON.parse(await readFile(path.join(root, "scripts/preview-images.json"), "utf8"));

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.log("sharp not available; saving photos at original size");
}

let ok = 0;
for (const img of list) {
  const out = path.join(root, "public", img.file);
  if (existsSync(out)) {
    ok++;
    continue;
  }
  try {
    const res = await fetch(img.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let buf = Buffer.from(await res.arrayBuffer());
    if (sharp) {
      buf = await sharp(buf).rotate().resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    }
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, buf);
    ok++;
    console.log(`✓ ${img.file} (${Math.round(buf.length / 1024)} KB)`);
  } catch (err) {
    console.log(`✗ ${img.file}: ${err.message}`);
  }
}
console.log(`Preview photos ready: ${ok}/${list.length}`);

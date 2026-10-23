// Renders the 1600x900 blog banners in public/images/blog/banners/ from template.html + data.json.
//
// Usage (from the repo root):
//   npm i --no-save playwright && npx playwright install chromium   # once
//   node tools/blog-banners/render.cjs                    # every banner in data.json
//   node tools/blog-banners/render.cjs slug-one,slug-two  # only these slugs
//
// Writes WebP files straight into public/images/blog/banners/<slug>.webp (PNG into tools/blog-banners/out/
// if sharp is not installed). Point the post's `url` in src/utils/blogdata.ts at "/images/blog/banners/<slug>.webp".
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const repo = path.resolve(dir, "..", "..");
const data = JSON.parse(fs.readFileSync(path.join(dir, "data.json"), "utf8"));
const only = process.argv[2] ? process.argv[2].split(",") : null;

let sharp = null;
try {
  sharp = require("sharp");
} catch {
  /* fall back to PNG */
}
const outDir = process.env.BANNER_OUT || (sharp ? path.join(repo, "public", "images", "blog", "banners") : path.join(dir, "out"));
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
  await page.goto("file://" + path.join(dir, "template.html"));
  await page.evaluate(() => document.fonts.ready);
  for (const d of data) {
    if (only && !only.includes(d.slug)) continue;
    if (!d.heading) {
      console.log("NO HEADING", d.slug);
      continue;
    }
    // `photo` is a repo-relative image path (e.g. "public/home/im2.webp") used by the photo layout.
    if (d.photo) d.photoUrl = "file://" + path.join(repo, d.photo);
    await page.evaluate(([d, t]) => window.render(d, t), [d, d.heading]);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((i) => (i.complete ? 0 : new Promise((r) => (i.onload = i.onerror = r)))));
    });
    const overflow = await page.evaluate(() => {
      const h = document.getElementById("title");
      const c = document.querySelector(".left");
      return h.getBoundingClientRect().bottom > c.getBoundingClientRect().bottom - 60;
    });
    if (overflow) console.log("TITLE TOO LONG (shorten `heading`):", d.slug);
    const png = await page.screenshot();
    if (sharp) await sharp(png).webp({ quality: 82 }).toFile(path.join(outDir, d.slug + ".webp"));
    else fs.writeFileSync(path.join(outDir, d.slug + ".png"), png);
    console.log("ok", d.slug);
  }
  await browser.close();
})();

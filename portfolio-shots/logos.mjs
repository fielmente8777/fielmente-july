// Saves each client site's own logo file (the image in its header) for the client logo strips.
// Run by .github/workflows/portfolio-shots.yml; output goes to portfolio-shots/out/logos/.
import { chromium } from "playwright";
import sharp from "sharp";
import fs from "node:fs/promises";

const sites = JSON.parse(await fs.readFile("urls.json", "utf8"));
await fs.mkdir("out/logos", { recursive: true });
const browser = await chromium.launch();
const results = [];

/** Find the most likely logo in the page's top bar: an <img> or inline <svg> near the top-left, preferably named "logo". */
async function findLogo(page) {
  return page.evaluate(() => {
    const score = (el) => {
      const b = el.getBoundingClientRect();
      if (b.width < 24 || b.height < 12 || b.top > 260 || b.bottom < 0 || b.width > 700) return -1;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) === 0) return -1;
      const text = [el.getAttribute("src"), el.getAttribute("alt"), el.className?.baseVal ?? el.className, el.id, el.closest("a")?.className, el.parentElement?.className]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      let s = 0;
      if (text.includes("logo")) s += 5;
      if (el.closest("header, nav, [class*=header i], [class*=navbar i]")) s += 3;
      const a = el.closest("a");
      if (a && /^(\/|#|https?:\/\/[^/]+\/?)$/.test(a.getAttribute("href") || "")) s += 2;
      if (b.left < innerWidth / 2) s += 1;
      if (b.top < 140) s += 1;
      return s;
    };
    const cands = [...document.querySelectorAll("img, svg")]
      .map((el) => ({ el, s: score(el) }))
      .filter((c) => c.s >= 3)
      .sort((x, y) => y.s - x.s || x.el.getBoundingClientRect().top - y.el.getBoundingClientRect().top);
    if (!cands.length) return null;
    const el = cands[0].el;
    el.setAttribute("data-logo-pick", "1");
    // Background behind the logo: first ancestor with a solid colour.
    let bg = null;
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      const c = getComputedStyle(n).backgroundColor;
      if (c && c !== "transparent" && !/rgba\(.*,\s*0\)$/.test(c)) { bg = c; break; }
    }
    const b = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(),
      src: el.tagName === "IMG" ? el.currentSrc || el.src : null,
      alt: el.getAttribute("alt") || "",
      w: Math.round(b.width),
      h: Math.round(b.height),
      bg,
    };
  });
}

async function run(site) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const r = { slug: site.slug, url: site.url, ok: false };
  try {
    await page.goto(site.url, { waitUntil: "load", timeout: 45000 });
    await page.waitForTimeout(3500);
    const logo = await findLogo(page);
    if (!logo) throw new Error("no logo found");
    Object.assign(r, logo);
    let buf = null;
    if (logo.src && !logo.src.startsWith("data:")) {
      const res = await page.request.get(logo.src, { timeout: 20000 }).catch(() => null);
      if (res && res.ok()) buf = await res.body();
    } else if (logo.src?.startsWith("data:")) {
      buf = Buffer.from(logo.src.split(",")[1], "base64");
    }
    let png = null;
    if (buf) png = await sharp(buf, { density: 300 }).png().toBuffer().catch(() => null);
    if (!png) {
      // Inline SVG or an image we can't decode: screenshot the element itself, without the page background.
      png = await page.locator("[data-logo-pick]").first().screenshot({ omitBackground: true });
      r.method = "screenshot";
    } else r.method = "file";
    const img = sharp(png).trim({ threshold: 5 }).resize({ height: 240, width: 720, fit: "inside", withoutEnlargement: true });
    const out = await img.png().toBuffer();
    await fs.writeFile(`out/logos/${site.slug}.png`, out);
    // Is the logo light (needs a dark tile) or dark? Average luminance of the opaque pixels.
    const { data, info } = await sharp(out).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let sum = 0, n = 0, transparent = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 128) { transparent++; continue; }
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      n++;
    }
    r.luma = n ? Math.round(sum / n) : null;
    r.transparentShare = Math.round((transparent / (info.width * info.height)) * 100) / 100;
    r.size = [info.width, info.height];
    r.ok = true;
  } catch (e) {
    r.error = String(e.message || e).slice(0, 200);
  }
  await page.close();
  return r;
}

const queue = [...sites];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const s = queue.shift();
      const r = await run(s);
      results.push(r);
      console.log(r.ok ? "ok  " : "FAIL", s.slug, r.method || r.error || "");
    }
  })
);
await fs.writeFile("out/logos.json", JSON.stringify(results.sort((a, b) => a.slug.localeCompare(b.slug)), null, 1));
await browser.close();

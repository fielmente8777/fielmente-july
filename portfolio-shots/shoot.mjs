// Takes a desktop screenshot (first screen) of every site in urls.json and records basic page details.
// Run by .github/workflows/portfolio-shots.yml; output goes to portfolio-shots/out/.
import { chromium } from "playwright";
import sharp from "sharp";
import fs from "node:fs/promises";

const sites = JSON.parse(await fs.readFile("urls.json", "utf8"));
await fs.mkdir("out", { recursive: true });
const browser = await chromium.launch();
const results = [];

async function shoot(site) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: true });
  const page = await ctx.newPage();
  const r = { ...site };
  try {
    const res = await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    r.status = res ? res.status() : null;
    await page.waitForLoadState("load", { timeout: 20000 }).catch(() => {});
    await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(3500);
    // Hide pop-ups, cookie bars and full-screen loaders so the screenshot shows the page itself.
    await page.evaluate(() => {
      const vw = innerWidth, vh = innerHeight;
      for (const el of document.querySelectorAll("body *")) {
        const cs = getComputedStyle(el);
        if (cs.position !== "fixed" && cs.position !== "sticky") continue;
        const b = el.getBoundingClientRect();
        const area = Math.max(0, Math.min(b.right, vw) - Math.max(b.left, 0)) * Math.max(0, Math.min(b.bottom, vh) - Math.max(b.top, 0));
        if (cs.position === "fixed" && area > vw * vh * 0.3) el.style.setProperty("display", "none", "important");
      }
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    });
    await page.waitForTimeout(500);
    r.finalUrl = page.url();
    Object.assign(r, await page.evaluate(() => {
      const m = (s) => document.querySelector(s)?.getAttribute("content") || "";
      const host = location.host;
      const paths = new Set();
      for (const a of document.querySelectorAll("a[href]")) {
        try { const u = new URL(a.href); if (u.host === host && u.pathname !== location.pathname) paths.add(u.pathname.replace(/\/$/, "")); } catch {}
      }
      return {
        title: document.title,
        description: m('meta[name="description"]'),
        ogImage: m('meta[property="og:image"]'),
        h1: (document.querySelector("h1")?.innerText || "").trim().slice(0, 140),
        internalPages: paths.size,
        forms: document.querySelectorAll("form").length,
        words: (document.body?.innerText || "").split(/\s+/).length,
        height: document.documentElement.scrollHeight,
      };
    }));
    const png = await page.screenshot({ type: "png" });
    await sharp(png).resize(1200, 750).webp({ quality: 72 }).toFile(`out/${site.slug}.webp`);
    r.ok = true;
  } catch (e) {
    r.ok = false;
    r.error = String(e).slice(0, 300);
  }
  await ctx.close();
  results.push(r);
  console.log(r.ok ? "ok " : "ERR", site.slug, r.status ?? "", r.title ?? r.error ?? "");
}

const queue = [...sites];
await Promise.all(Array.from({ length: 4 }, async () => { while (queue.length) await shoot(queue.shift()); }));
await browser.close();
results.sort((a, b) => a.slug.localeCompare(b.slug));
await fs.writeFile("out/meta.json", JSON.stringify(results, null, 1));

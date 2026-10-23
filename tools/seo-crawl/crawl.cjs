// Technical SEO crawl of a local production build. Usage: node crawl.cjs http://localhost:PORT out.json
const { parse } = require("node-html-parser");
const fs = require("fs");
const BASE = process.argv[2];
const OUT = process.argv[3] || "crawl.json";
const SITE = "https://fielmente.com";

const toLocal = (u) => u.replace(SITE, BASE);

async function get(url, opts = {}) {
  const r = await fetch(url, { redirect: "manual", ...opts });
  const body = opts.method === "HEAD" ? "" : await r.text();
  return { status: r.status, location: r.headers.get("location"), body, headers: r.headers };
}

(async () => {
  const sm = await get(BASE + "/sitemap.xml");
  const urls = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const pages = [];
  const linkTargets = new Map(); // internal href -> [pages]
  const queue = [...urls];
  const conc = 8;
  async function work() {
    while (queue.length) {
      const u = queue.shift();
      const local = toLocal(u);
      let res;
      try { res = await get(local); } catch (e) { pages.push({ url: u, error: String(e) }); continue; }
      const p = { url: u, status: res.status, location: res.location, bytes: Buffer.byteLength(res.body) };
      const xr = res.headers.get("x-robots-tag");
      if (xr) p.xrobots = xr;
      if (res.status === 200) {
        const root = parse(res.body, { blockTextElements: { script: true, style: true } });
        const head = root.querySelector("head");
        p.title = root.querySelector("title")?.text?.trim() ?? "";
        p.desc = root.querySelector('meta[name="description"]')?.getAttribute("content") ?? null;
        p.canonical = root.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null;
        p.robots = root.querySelector('meta[name="robots"]')?.getAttribute("content") ?? null;
        p.ogImage = root.querySelector('meta[property="og:image"]')?.getAttribute("content") ?? null;
        p.lang = root.querySelector("html")?.getAttribute("lang") ?? null;
        const hs = root.querySelectorAll("h1,h2,h3,h4");
        p.h1 = root.querySelectorAll("h1").map((h) => h.text.replace(/\s+/g, " ").trim());
        const htexts = hs.map((h) => h.tagName + ":" + h.text.replace(/\s+/g, " ").trim().toLowerCase());
        p.headings = hs.length;
        p.dupHeadings = [...new Set(htexts.filter((t, i) => htexts.indexOf(t) !== i))];
        const imgs = root.querySelectorAll("img");
        p.imgs = imgs.length;
        p.imgNoAlt = imgs.filter((i) => i.getAttribute("alt") === undefined).length;
        p.imgBadAlt = imgs
          .map((i) => i.getAttribute("alt"))
          .filter((a) => a !== undefined && a !== "" && /^(client\d+|hero|image|img|logo|icon|banner|photo|\d+)$/i.test(a.trim())).length;
        p.jsonld = root.querySelectorAll('script[type="application/ld+json"]').map((s) => {
          try { const j = JSON.parse(s.text); const arr = Array.isArray(j) ? j : j["@graph"] ?? [j]; return arr.map((x) => x["@type"]).flat().join("+"); } catch { return "INVALID"; }
        });
        // RSC payload size (inline flight data)
        p.rscBytes = root.querySelectorAll("script").filter((s) => s.text.includes("self.__next_f")).reduce((a, s) => a + s.text.length, 0);
        // text duplicates: paragraphs (>60 chars) appearing more than once
        const paras = root.querySelectorAll("p,li").map((x) => x.text.replace(/\s+/g, " ").trim()).filter((t) => t.length > 60);
        p.dupText = new Set(paras.filter((t, i) => paras.indexOf(t) !== i)).size;
        // internal links
        const links = root.querySelectorAll("a[href]").map((a) => a.getAttribute("href"));
        for (let h of links) {
          if (!h) continue;
          if (h.startsWith(SITE)) h = h.slice(SITE.length) || "/";
          if (!h.startsWith("/") || h.startsWith("//")) continue;
          h = h.split("#")[0].split("?")[0];
          if (!h) continue;
          if (!linkTargets.has(h)) linkTargets.set(h, new Set());
          linkTargets.get(h).add(u);
        }
        p.words = root.querySelector("body")?.text.replace(/\s+/g, " ").split(" ").length ?? 0;
      }
      pages.push(p);
    }
  }
  await Promise.all(Array.from({ length: conc }, work));

  // check every internal link target
  const linkResults = {};
  const targets = [...linkTargets.keys()];
  const q2 = [...targets];
  async function work2() {
    while (q2.length) {
      const h = q2.shift();
      try {
        const r = await get(BASE + h);
        linkResults[h] = { status: r.status, location: r.location };
      } catch (e) { linkResults[h] = { status: "ERR" }; }
    }
  }
  await Promise.all(Array.from({ length: conc }, work2));
  const badLinks = Object.entries(linkResults)
    .filter(([, r]) => r.status !== 200)
    .map(([h, r]) => ({ href: h, ...r, from: [...linkTargets.get(h)].slice(0, 3), count: linkTargets.get(h).size }));
  fs.writeFileSync(OUT, JSON.stringify({ pages, badLinks }, null, 1));
  console.log("pages", pages.length, "internal targets", targets.length, "non-200 targets", badLinks.length);
})();

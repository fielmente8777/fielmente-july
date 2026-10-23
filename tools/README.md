# Tools

Helper scripts used to build and check fielmente.com. They are not part of the site build. Next.js ignores this folder.

## blog-banners

This tool generates the 1600×900 banners in `public/images/blog/banners/`, one per blog post. Each banner uses the same design: the post title on the left and a small illustration on the right, such as a WhatsApp chat, a Google search result, an AI answer, a comparison table or a photo.

```bash
npm i --no-save playwright && npx playwright install chromium   # once
node tools/blog-banners/render.cjs                    # all banners
node tools/blog-banners/render.cjs my-new-post-slug   # one or more slugs, comma-separated
```

To add a banner for a new post:

1. Copy an entry in `tools/blog-banners/data.json` that has the layout you want (`type`: `chat`, `ai`, `search`, `ad`, `vs`, `rows`, `nodes`, `card` or `photo`).
2. Change `slug`, `heading` (the title shown on the banner) and the illustration text.
3. Run the script for that slug. It writes `public/images/blog/banners/<slug>.webp`.
4. In `src/utils/blogdata.ts`, set the post's `url` to `"/images/blog/banners/<slug>.webp"`.

The design lives in `template.html`, which uses the Plus Jakarta Sans font and the Fielmente logo next to it. If the script prints `TITLE TOO LONG`, shorten `heading`.

## seo-crawl

This tool runs a technical SEO crawl of a local production build. It covers every URL in the sitemap and checks the following:

- title, meta description, canonical, robots tag and H1
- duplicate headings, missing or placeholder alt text and JSON-LD types
- HTML and RSC payload size, repeated text blocks and word count
- the status of every internal link (it flags 404s and links that go through redirects)

```bash
npm i --no-save node-html-parser
npm run build && npx next start -p 3300
node tools/seo-crawl/crawl.cjs http://localhost:3300 crawl.json
```

The script writes `{ pages, badLinks }` to `crawl.json`. Search engines usually cut off titles above about 580 px (about 60 characters) and descriptions above about 1,000 px (about 150 characters).

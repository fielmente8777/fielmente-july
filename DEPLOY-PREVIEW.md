# Fielmente preview: deploy to Vercel

This is a slim copy of the merged site, built for a preview deployment only. It is not the developer handoff.

Deploy it:

    npm i -g vercel
    vercel deploy --prod

Accept the defaults when asked; Vercel detects Next.js. The build has been tested and passes.

## What's different from the real site

- **Images:** `/public` isn't included. Any file missing from this build (images, favicons, the live `/products/` pages and blog posts) is served from fielmente.com through a fallback rewrite in `next.config.ts`.
- **Search engines:** every page sends `X-Robots-Tag: noindex`, and `robots.txt` disallows all, so Google won't index the preview.
- **Thank-you page artwork:** it's a compressed WebP instead of the inline SVG.

Don't merge any of this into the real site. Use `fielmente-website-handoff.zip` for that.

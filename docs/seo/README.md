# fielmente.com SEO visibility: why it swings and how we keep it stable

Written Nov 2026, after a Semrush Position Tracking report showed fielmente.com at 4.81% visibility
(down 45.19 points) while hospitalityminds.com, hotkhana.com and blazonion.com held steady at 50%.

## 1. What the report actually showed

Add each domain's change back to its current visibility and every domain, fielmente.com included,
was at exactly **50.00%** the period before. Six different sites at an identical score only happens
when the project tracks one or two keywords. Semrush visibility is a click-weighted average over the
tracked keywords (100% = position 1 for all of them), so with that few keywords one ranking that moves
a few places swings the score by 40+ points. The competitors at 50% didn't do anything better. Their one
ranking just didn't move that week.

**Fix for the measurement:** track the 45 keywords in `keyword-map.csv` (section 4). The score then
reflects how the site actually ranks.

## 2. Why our rankings themselves were unstable: our own sites were competing with each other

Several Fielmente URLs were indexed for the same searches. When that happens Google keeps switching
which one it shows, and each switch reads as a drop. Fixed in two passes in Nov 2026:

**Already live on `pre-prod` (SEO review, 10–11 Nov):**
- The 51-entry hreflang set is gone from the home page, so country subdomains no longer stand in for fielmente.com.
- usa.fielmente.com and every country/region one-pager (uk., uae., spain., …) are noindex with no sitemap.
- 119 templated or overlapping blog posts 301 to one page per topic. This includes the posts that
  competed with service pages ("Hotel Marketing Agency | Increase Direct Bookings by 300%",
  "Hotel SEO Services | Complete Guide", "Hotel AI Marketing Services").
- /google-ads-for-hotels/ (audit landing page) is noindex. City stubs for Delhi, Mumbai and Bengaluru redirect.

**Open PRs (this pass):**

| Search | Competing Fielmente URLs | Change |
|---|---|---|
| hotel marketing agency in India | fielmente.com vs **ota.fielmente.com** (titled "Hotel Marketing Agency in India") | ota. set to noindex |
| hotel / resort / hospitality marketing | fielmente.com service pages vs **lp.fielmente.com** ad pages | lp. set to noindex |
| restaurant marketing company/agency India | /industries-we-serve/restaurant-marketing-agency/ vs /food-and-beverage-marketing-solutions/ (same title) | F&B page retargeted to "food and beverage marketing agency" |

Also: the restaurant WordPress plugins post carried the hotel post's title (fixed), and the International
menu no longer links the noindexed usa.fielmente.com.

**noindex, follow** keeps a page live for visitors and ads. Google Ads ignores noindex, so campaigns are
unaffected. Only organic search stops showing that URL, which leaves the fielmente.com page to collect
the rankings. Titles and copy on the ota. and lp. landing pages were left as they were.

| Repo | Branch | Base | What |
|---|---|---|---|
| fielmente-july (fielmente.com) | `seo/visibility-stability` | `pre-prod` | F&B page, WordPress post title, menu link, this folder |
| ota-fielmente-lp (ota.fielmente.com) | `seo/noindex-ota-landing` | `pre-prod` | noindex |
| fielmente-landing-pages (lp.fielmente.com) | `seo/noindex-ad-landing-pages` | `main` | noindex |

The three PRs are independent and can merge in any order.

### What to expect after merging

- Google drops the noindexed URLs as it recrawls them, usually within 1–4 weeks.
- Semrush may dip for a week or two first: if ota. or lp. currently holds a ranking, that ranking goes
  before the fielmente.com page picks it up. After that, rankings should stop swapping.
- Optional, to speed it up: Search Console → Removals → temporarily remove `https://ota.fielmente.com/`
  and the `https://lp.fielmente.com/` prefix (the domain property `sc-domain:fielmente.com` covers subdomains).

## 3. House rules that keep visibility stable

1. **One page per search.** Before publishing, search `site:fielmente.com "<keyword>"`. If a page already
   targets it, improve that page instead of adding a new one.
2. **Ad landing pages are always noindex, follow.** On fielmente.com, add the path to `NOINDEX_PATHS` in
   `src/lib/noindex.ts` and set `robots: NOINDEX_ROBOTS` on the page. New landing-page subdomains get
   noindex from day one.
3. **Blog titles answer a question; service pages sell.** Don't start a blog title with a commercial phrase
   ("Hotel Marketing Agency", "Hotel SEO Services"). Use "How to…", "Guide", "Explained", and link to the
   service page from the post.
4. **Location and country pages live on fielmente.com.** A subdomain copy of a fielmente.com page must be noindex.
5. **Never change a ranking URL without a 301** (add it to `redirects()` in `next.config.ts`).

## 4. Semrush setup (Position Tracking)

1. Open the fielmente.com project → Settings → Target: **root domain `fielmente.com`** (includes subdomains,
   so during the transition you still see when ota. or lp. holds a ranking).
2. Location **India**, device **Mobile** (add a second campaign for Desktop if you want both), language English.
3. Keywords → Add keywords → import `semrush-import-india.txt` (41 keywords).
4. Competitors: hospitalityminds.com, hotkhana.com, blazonion.com, marketmyhotel.in, internetmoguls.com.
5. Create small separate campaigns for UAE (`semrush-import-uae.txt`), United Kingdom (`-uk.txt`) and
   United States (`-usa.txt`). Those keywords don't belong in the India campaign.
6. Tag keywords by the `group` column in `keyword-map.csv` (Brand, Core, Service, Segment, City, International).
7. Every week, open the **Cannibalization** and **Pages** reports in Position Tracking. Each keyword should
   land on its `target_url`. If a different URL shows up, or two URLs share a keyword, fix it with the
   house rules above.

## 5. Link building (what moves rankings once the site is clean)

The site has depth already (300+ pages, case studies, 25 Google Hotel Ads guides). What it
lacks against the competitors in the report is links from other sites.

**Agency and software listings (one-time, quick):** Clutch, GoodFirms, DesignRush and Sortlist agency
profiles; Google Business Profile for the Gurgaon office; complete the Eazotel product listings on Hotel
Tech Report, Capterra and G2. Keep name, address and phone identical everywhere.

**Partner pages:** if Fielmente holds Google Partner or Meta Business Partner status, use the directory
listing and badge. Ask booking-engine, channel-manager and OTA partners to list Fielmente on their
agency or partner pages.

**Industry press (monthly):** pitch articles and comment to ET HospitalityWorld, BW Hotelier, Hotelier
India, HospitalityBizIndia, Travel Trends Today and Hospitality Net. The strongest hook is original data,
such as an anonymised "direct vs OTA booking share for Indian hotels" benchmark from Eazotel data, or
results from our case studies.

**Client sites:** a "Website by Fielmente" credit is fine as a **brand mention with `rel="nofollow"`**,
and only with the client's OK. Google treats keyword-rich or widely repeated footer links across many
sites as a link scheme, so don't rely on footer links for ranking. Better: ask clients to quote or link
our case study about them from their own news or press page.

**Guides as linkable assets:** offer the Google Hotel Ads / Hotel Center guides to hotel-tech blogs and
associations (FHRAI, HAI, state hotel associations) as a resource for their members.

## 6. Monthly checklist

- [ ] Semrush: each keyword's landing page matches `keyword-map.csv`
- [ ] Search Console → Pages: no new "Duplicate, Google chose different canonical" entries
- [ ] Search Console → Performance: filter a core keyword and check only one Fielmente URL gets impressions
- [ ] New landing pages / subdomains this month are noindex
- [ ] 2+ new referring domains (listings, press, partners)

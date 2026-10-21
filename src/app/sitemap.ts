// XML sitemap, built from the site's own data on every deploy so it never goes stale.
// Only indexable, self-canonical pages belong here: no redirects, noindex ad landing pages or /thank-you/.
// Blog list pages 2+ live at /blogs/?page=N (each self-canonical), so they are listed too.
import type { MetadataRoute } from "next";
import { AGENCY_PAGES } from "./(agency)/data";
import { casStudiesData } from "./case-study/[story]/components/caseData";
import { industries } from "./industries-we-serve/data/industries";
import { newServicePages } from "./industries-we-serve/data/pages";
import { subPageData } from "./industries-we-serve/[...industry]/components/subPageData";
import { industriesData } from "./industries-we-serve/[...industry]/pageData";
import { PRODUCTS, productPath } from "@/lib/products";
import { blogData } from "@/utils/blogdata";
import { BLOGS_PER_PAGE } from "./blogs/components/pageData";

const SITE = "https://fielmente.com";

const STATIC_PAGES = [
  "/",
  "/about-fielmente-best-hospitality-marketing-agency/",
  "/contact-us/",
  "/blogs/",
  "/case-study/",
  "/our-work/",
  "/our-clients/",
  "/our-partners/",
  "/testimonials/",
  "/products/",
  "/industries-we-serve/",
  "/hospitality-marketing-services/",
  "/hospitality-marketing-services/google-ads-agency/",
  "/hospitality-marketing-services/seo-agency/",
  "/hospitality-marketing-services/social-media-marketing-agency/",
  "/hotel-ota-management/",
  "/food-and-beverage-marketing-solutions/",
  "/google-ads-for-hotels/",
  "/privacy-policy/",
  "/terms-and-conditions/",
];

const isoDate = (d?: string) => {
  if (!d) return undefined;
  const t = new Date(d);
  return Number.isNaN(t.getTime()) ? undefined : t;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Map<string, Date | undefined>();
  const add = (p: string, lastModified?: Date) => paths.set(p.endsWith("/") ? p : `${p}/`, lastModified);

  STATIC_PAGES.forEach((p) => add(p));
  AGENCY_PAGES.forEach((a) => add(`/${a.slug}/`));
  industries.forEach((i) => add(`/industries-we-serve/${i.slug}/`));
  newServicePages.forEach((s) => add(`/industries-we-serve/${s.path}/`));
  // Industry pages still on the old design (e.g. cloud kitchen and its sub-pages).
  [...industriesData, ...subPageData].forEach((p) => add(`/industries-we-serve/${p.slug}/`));
  PRODUCTS.forEach((p) => add(productPath(p.slug)));
  casStudiesData.filter((c) => c.data?.length).forEach((c) => add(`/case-study/${c.slug}/`));
  blogData.forEach((b) => add(`/${b.slug}/`, isoDate(b.date)));

  const blogListPages = Array.from({ length: Math.ceil(blogData.length / BLOGS_PER_PAGE) - 1 }, (_, i) => ({
    url: `${SITE}/blogs/?page=${i + 2}`,
  }));

  return [
    ...[...paths].map(([p, lastModified]) => ({
      url: `${SITE}${p}`,
      ...(lastModified ? { lastModified } : {}),
    })),
    ...blogListPages,
  ];
}

// Route helpers for the new industry and service pages, used by [...industry]/page.tsx.
import type { Metadata } from "next";
import { getIndustry, industries, type IndustryProfile } from "./industries";
import { serviceSlug, serviceTypes, type ServiceKey } from "./services";

const SITE = "https://fielmente.com";

export interface ServicePageRef {
  path: string; // "hotel-marketing-agency/hotel-local-seo"
  I: IndustryProfile;
  key: ServiceKey;
}

/** Every new service page. Services that already have a page (I.existing) are skipped. */
export const newServicePages: ServicePageRef[] = industries.flatMap((I) =>
  I.services.filter((key) => !I.existing?.[key]).map((key) => ({ path: serviceSlug(I, key), I, key }))
);

/**
 * Industry slugs that should keep the old page design. The new template replaces the old
 * hotel and restaurant pages at the same URLs; add a slug here to switch one back.
 */
export const keepLegacyIndustryPages: string[] = [];

export const findIndustry = (slug: string) => (keepLegacyIndustryPages.includes(slug) ? undefined : getIndustry(slug));
export const findServicePage = (path: string) => newServicePages.find((p) => p.path === path);

/** Paths for generateStaticParams, as "a/b" strings. */
export const newPaths = [...industries.filter((I) => findIndustry(I.slug)).map((I) => I.slug), ...newServicePages.map((p) => p.path)];

const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

function meta(title: string, description: string, path: string, image: string): Metadata {
  const url = `${SITE}/industries-we-serve/${path}/`;
  return {
    title,
    description,
    alternates: { canonical: url, languages: { "en-US": url } },
    openGraph: {
      title,
      description,
      url,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export function industryMetadata(I: IndustryProfile): Metadata {
  return meta(I.meta.title, I.meta.description, I.slug, I.heroImage);
}

export function serviceMetadata({ I, key, path }: ServicePageRef): Metadata {
  const st = serviceTypes[key];
  const long = `${I.name} ${st.label} Services | Fielmente`;
  const title = long.length > 60 ? `${I.name} ${st.label} | Fielmente` : long;
  const base = `${st.label} for ${I.plural}: ${lowerFirst(st.card(I))}.`;
  const withCta = `${base} Hospitality specialists — free consultation.`;
  const description = withCta.length <= 158 ? withCta : base;
  return meta(title, description, path, st.heroPhoto ? I.heroImage : st.image);
}

import type { Metadata } from "next";
import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import PortfolioGrid from "./PortfolioGrid";
import { PORTFOLIO } from "./data";

const SITE = "https://fielmente.com";
const TITLE = "Hotel Website & Landing Page Portfolio | Fielmente";
const websites = PORTFOLIO.filter((p) => p.type === "Website").length;
const landingPages = PORTFOLIO.length - websites;
const DESCRIPTION = `See ${websites} websites and ${landingPages} landing pages Fielmente has designed and built for hotels, resorts, restaurants and travel brands.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/portfolio/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/portfolio/`,
    type: "website",
    siteName: "Fielmente",
    images: [{ url: `${SITE}/fielmente_logo.png`, width: 1200, height: 630, alt: "Fielmente" }],
  },
};

/** The list of projects, for search engines. */
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  url: `${SITE}/portfolio/`,
  description: DESCRIPTION,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: PORTFOLIO.length,
    itemListElement: PORTFOLIO.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "WebSite", name: p.name, url: p.url },
    })),
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <TextBanner
        title="Our Work"
        subTitle="Websites & Landing Pages We've Built"
        description={`${websites} websites and ${landingPages} landing pages for hotels, resorts, restaurants and travel brands, each built to turn visitors into direct bookings and enquiries.`}
      />
      <PortfolioGrid items={PORTFOLIO} />
      <CtaSection
        title="Want a Website Like These?"
        description="Tell us about your property and we'll show you how a faster, booking-focused website can grow your direct bookings."
        cta={{ label: "Book a Free Consultation", href: "" }}
      />
    </main>
  );
}

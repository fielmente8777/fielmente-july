// Template for the agency landing pages, e.g. /hotel-marketing-agency-dubai/.
// Content lives in ../data/<slug>.ts; shared facts, results and logos in src/utils/agencyData.ts.
import type { AgencyPageData } from "@/@types/@agencyPageType";
import { BreadcrumbItem } from "@/components/banners/Breadcrumbs";
import WhatsAppChatButton from "@/components/buttons/WhatsAppChatButton";
import IconLinkCard from "@/components/cards/IconLinkCard";
import ClientLogosSection from "@/components/commonSections/ClientLogosSection";
import ComparisonSection from "@/components/commonSections/ComparisonSection";
import CtaBandSection from "@/components/commonSections/CtaBandSection";
import FaqListSection from "@/components/commonSections/FaqListSection";
import StepsSection from "@/components/commonSections/StepsSection";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { COMPANY } from "@/utils/agencyData";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import { contacts } from "../../../../contact";
import { AGENCY_PAGES } from "../data";
import AgencyHero from "./AgencyHero";
import DeepDiveBlock from "./DeepDiveBlock";
import EngagementSection from "./EngagementSection";
import MarketContextSection from "./MarketContextSection";
import ProofSection from "./ProofSection";
import RelatedLinksSection from "./RelatedLinksSection";
import SourcesSection from "./SourcesSection";

const SITE = "https://fielmente.com";

export function agencyMetadata(d: AgencyPageData): Metadata {
  const url = `${SITE}/${d.slug}/`;
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: { canonical: url, languages: { "en-US": url } },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [{ url: d.context.image.src, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

/** Breadcrumb trail between Home and the page: the page's own `crumbs`, or its hub. */
function trail(d: AgencyPageData): { label: string; href: string }[] {
  if (d.crumbs) return d.crumbs;
  if (d.slug === "international-hotel-marketing-agency") return [];
  return d.group === "location"
    ? [{ label: "International hotel marketing", href: "/international-hotel-marketing-agency/" }]
    : [{ label: "Services", href: "/hospitality-marketing-services/" }];
}

interface AgencyPageProps {
  data: AgencyPageData;
  /** Extra section after the services list (e.g. every service page for an industry). */
  afterServices?: ReactNode;
}

const AgencyPage: React.FC<AgencyPageProps> = ({ data: d, afterServices }) => {
  const url = `${SITE}/${d.slug}/`;
  const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...trail(d), { label: d.navLabel }];
  const related = d.related
    .map((slug) => AGENCY_PAGES.find((p) => p.slug === slug))
    .filter((p): p is AgencyPageData => Boolean(p))
    .map((p) => ({ title: p.navLabel, body: p.cardLine, href: `/${p.slug}/` }));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: d.keyword,
    serviceType: d.keyword,
    description: d.meta.description,
    areaServed: d.areaServed,
    url,
    provider: {
      "@type": "Organization",
      name: "Fielmente",
      url: `${SITE}/`,
      foundingDate: COMPANY.founded,
      telephone: contacts.phone_1,
      email: contacts.email_1,
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `${SITE}${c.href}` : url,
    })),
  };

  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <AgencyHero data={d} crumbs={crumbs} />

      <ClientLogosSection set={d.logos} />

      <MarketContextSection data={d} />

      <ComparisonSection title={d.comparison.title} without={d.comparison.without} withList={d.comparison.withList} />

      {/* Services */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <SectionHead eyebrow="What we do" title={d.services.title} lede={d.services.lede} />
          <ul className={`grid sm:grid-cols-2 ${d.services.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-3 md:gap-4`}>
            {d.services.items.map((s) => (
              <li key={s.title}>
                <IconLinkCard icon={s.icon} title={s.title} body={s.body} href={s.href} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {afterServices}

      <ProofSection data={d} />

      {d.blocks.map((b, i) => (
        <DeepDiveBlock key={b.title} block={b} data={d} index={i} />
      ))}

      <StepsSection eyebrow="How it works" title={d.process.title} lede={d.process.lede} steps={d.process.steps} />

      <EngagementSection />

      <FaqListSection title={`${d.keyword}: FAQs`} faqs={d.faqs} />

      <RelatedLinksSection links={[...related, ...d.extraLinks]} />

      <CtaBandSection
        title={d.cta.title}
        body={d.cta.body}
        note={
          <>
            Or call{" "}
            <a href={`tel:${contacts.phone_1.replace(/\s/g, "")}`} className="font-semibold text-white">
              {contacts.phone_1}
            </a>{" "}
            · <a href={`mailto:${contacts.email_1}`} className="font-semibold text-white">{contacts.email_1}</a>
          </>
        }
        actions={
          <>
            <a
              href="#plan"
              className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-orange-primary text-white font-semibold hover:bg-glaucous-3 transition-colors"
            >
              Get a free growth plan <LuArrowRight aria-hidden="true" />
            </a>
            <WhatsAppChatButton />
          </>
        }
      />

      <SourcesSection sources={d.sources} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </main>
  );
};

export default AgencyPage;

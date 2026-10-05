// Service page: /industries-we-serve/<industry>-marketing-agency/<prefix>-<service>/
import CaseStudyCardRich from "@/app/case-study/components/rich/CaseStudyCardRich";
import { getCaseStudy, type CaseStudy } from "@/app/case-study/data/caseStudies";
import { productCards } from "@/app/products/components/ProductThumb";
import ClientLogos from "@/components/marketing/ClientLogos";
import ConsultButton from "@/components/marketing/ConsultButton";
import LeadFormSection from "@/components/marketing/LeadFormSection";
import { Icon } from "@/components/marketing/icons";
import {
  Comparison,
  CtaBand,
  FaqLead,
  FaqSection,
  FeatureGrid,
  LinkCards,
  PageHero,
  SectionHead,
  Split,
  StepsBand,
  WhatsAppButton,
} from "@/components/marketing/Sections";
import { Container } from "@/components/sectionComponants";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { lodgingIndustries, type IndustryProfile } from "../../data/industries";
import { logoSet, needsFor } from "./IndustryTemplate";
import { serviceHref, serviceTypes, type ServiceKey } from "../../data/services";

export default function ServiceTemplate({ I, serviceKey }: { I: IndustryProfile; serviceKey: ServiceKey }) {
  const st = serviceTypes[serviceKey];
  const c = st.build(I);
  const industryHref = `/industries-we-serve/${I.slug}/`;
  const pageUrl = `https://fielmente.com${serviceHref(I, serviceKey)}`;

  const studies = I.caseStudies.map(getCaseStudy).filter((x): x is CaseStudy => Boolean(x)).slice(0, 3);
  // Hotel-specific products (booking engine, CMS…) are only suggested to accommodation businesses.
  const productSlugs = lodgingIndustries.has(I.slug) ? [...new Set([...st.products, ...I.products])] : I.products;
  const products = productCards(productSlugs).slice(0, 3);

  // Three more services from the same industry, starting after this one.
  const idx = I.services.indexOf(serviceKey);
  const more = [1, 2, 3]
    .map((n) => I.services[(idx + n) % I.services.length])
    .filter((k) => k !== serviceKey)
    .map((k) => ({
      title: serviceTypes[k].label,
      body: serviceTypes[k].card(I),
      href: serviceHref(I, k),
      icon: serviceTypes[k].icon,
    }));

  const measureImage = I.secondImage === st.image ? I.heroImage : I.secondImage;
  const measureAlt = I.secondImage === st.image ? I.heroAlt : I.secondAlt;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${I.name} ${st.label}`,
    serviceType: st.label,
    description: c.heroLede,
    areaServed: "IN",
    url: pageUrl,
    provider: { "@type": "Organization", name: "Fielmente", url: "https://fielmente.com/" },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fielmente.com/" },
      { "@type": "ListItem", position: 2, name: "Industries we serve", item: "https://fielmente.com/industries-we-serve/" },
      { "@type": "ListItem", position: 3, name: I.label, item: `https://fielmente.com${industryHref}` },
      { "@type": "ListItem", position: 4, name: st.label, item: pageUrl },
    ],
  };

  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries-we-serve/" },
          { label: I.label, href: industryHref },
          { label: st.label },
        ]}
        eyebrow={`${I.label} · ${st.label}`}
        title={c.heroTitle}
        lede={c.heroLede}
        actions={
          <>
            <ConsultButton />
            <WhatsAppButton label="Chat on WhatsApp" />
          </>
        }
        image={st.heroPhoto ? I.heroImage : st.image}
        imageAlt={st.heroPhoto ? I.heroAlt : `${st.label} for ${I.plural}`}
        imageMode={st.heroPhoto ? "photo" : "illustration"}
        floating={
          st.heroPhoto ? (
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                <Icon name={st.icon} />
              </span>
              <span className="text-[13px]/snug text-[#55536E]">
                <span className="block text-base font-bold text-primary2">{st.label}</span>
                {st.card(I)}
              </span>
            </div>
          ) : undefined
        }
      />

      <ClientLogos set={logoSet(I.slug)} />

      <Comparison title={`What changes when Fielmente handles your ${st.label}`} without={c.without} withList={c.withList} />

      <FeatureGrid eyebrow="What's included" title={`${st.label} for ${I.plural}`} lede={c.featuresLede} items={c.features} />

      <StepsBand eyebrow="How it works" title="How we work" steps={c.steps} />

      <Split
        eyebrow="What we measure"
        title="Results you can see every month"
        body={
          <p>
            You get a monthly report in plain language, focused on {I.goal} — what moved, why, and what we&apos;ll do next.
          </p>
        }
        bullets={c.measure}
        image={measureImage}
        imageAlt={measureAlt}
        reverse
      />

      {studies.length > 0 && (
        <section className="bg-[#F5F5F9] py-14 md:py-22">
          <Container>
            <SectionHead
              eyebrow="Proof"
              title={`Recent results for ${I.plural}`}
              lede="Google Ads accounts we manage for properties like yours, with numbers taken straight from the ad platforms."
            />
            <div className={`grid gap-5 ${studies.length === 1 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
              {studies.map((cs) => (
                <CaseStudyCardRich key={cs.slug} cs={cs} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {products.length > 0 && (
        <LinkCards
          eyebrow="Technology"
          title="Tools that power this service"
          lede="Fielmente products on the Eazotel platform, set up and connected by our team."
          items={products}
        />
      )}

      <FaqSection title={`${st.label} FAQs`} faqs={c.faqs} lead={<FaqLead />} />

      <LinkCards eyebrow={I.label} title={`More ${I.label.toLowerCase()} services`} items={more} />
      <div className="-mt-8 md:-mt-14 pb-6">
        <Container>
          <Link href={industryHref} className="inline-flex items-center gap-2 text-sm font-semibold text-sapphireBlue hover:underline">
            See all {I.services.length} {I.label.toLowerCase()} services <LuArrowRight aria-hidden="true" />
          </Link>
        </Container>
      </div>

      <LeadFormSection
        pageKeyword={`${I.name} ${st.label} (service page)`}
        title={`Get a free ${st.label} plan for your ${I.noun}`}
        body={`Tell us where you are today. We'll review what you have and send a written plan with priorities and what to measure.`}
        points={[
          `What's working and what isn't in your ${st.label.toLowerCase()} today`,
          "The first three things we'd fix, and why",
          "No cost and no obligation",
        ]}
        needs={[st.label, ...needsFor(I.slug).filter((n) => n !== st.label)]}
      />

      <CtaBand
        title={`Talk to us about ${st.label} for your ${I.noun}`}
        body="A free consultation with no obligation. We'll review what you have today and show you what to fix first."
        actions={
          <>
            <ConsultButton />
            <WhatsAppButton label="Chat on WhatsApp" />
          </>
        }
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </main>
  );
}

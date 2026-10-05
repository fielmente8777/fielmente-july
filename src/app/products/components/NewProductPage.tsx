import {
  Chips,
  Comparison,
  CtaBand,
  FaqLead,
  FaqSection,
  FeatureGrid,
  LinkCards,
  PageHero,
  PartnerStrip,
  PrimaryButton,
  SectionHead,
  StatsBand,
  StepsBand,
  Testimonials,
  TRIAL_URL,
  WhatsAppButton,
} from "@/components/marketing/Sections";
import { Container } from "@/components/sectionComponants";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductMock from "./ProductMock";
import { ProductThumb, productCards } from "./ProductThumb";
import { getProduct, integrationChannels, platformStats, productLink, products } from "../data/products";

// The 9 newer products (data/products.ts). The 8 original products keep their own page in
// app/products/[slug]/page.tsx, which hands these slugs to this component.
export const newProductSlugs = products.map((p) => p.slug);

export function newProductMetadata(slug: string): Metadata {
  const p = getProduct(slug);
  if (!p) return {};
  const url = `https://fielmente.com/products/${p.slug}/`;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: url, languages: { "en-US": url } },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [{ url: p.image ?? "/fielmente_logo.png", width: 1200, height: 630 }],
    },
  };
}

const propertyTypes = [
  {
    title: "Hotel groups",
    body: "Centralised leads, content and reporting across all your properties.",
    image: "/industry/hotel-2.png",
  },
  {
    title: "Resorts",
    body: "High enquiry volumes and seasonal campaigns handled without extra staff.",
    image: "/home/resort-marketing.png",
  },
  {
    title: "Boutique hotels, villas and homestays",
    body: "Personal guest experiences with simple, smart workflows.",
    image: "/industry/rich-luxury-modern-residential.webp",
  },
];

export default function NewProductPage({ slug }: { slug: string }) {
  const p = getProduct(slug);
  if (!p) notFound();

  const related = p.related.map(productLink).filter((x): x is NonNullable<typeof x> => Boolean(x));

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Fielmente ${p.name}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: p.metaDescription,
    url: `https://fielmente.com/products/${p.slug}/`,
    publisher: { "@type": "Organization", name: "Fielmente", url: "https://fielmente.com/" },
  };

  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products/" }, { label: p.name }]}
        eyebrow={`Fielmente ${p.name}`}
        title={p.heroTitle}
        lede={p.heroLede}
        highlight={p.highlight}
        actions={
          <>
            <PrimaryButton href={TRIAL_URL} external>
              Start 14-day free trial
            </PrimaryButton>
            <WhatsAppButton />
          </>
        }
        note={
          <>
            Runs on Eazotel, our hotel CRM and marketing platform. Already a customer?{" "}
            <a href={TRIAL_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Log in to your dashboard
            </a>
          </>
        }
        image={p.image}
        imageAlt={p.imageAlt}
        imageMode="illustration"
        visual={p.mock ? <ProductMock kind={p.mock} /> : undefined}
      />

      <PartnerStrip />

      <Comparison
        title={`What changes when your hotel switches to Fielmente ${p.name}`}
        without={p.without}
        withList={p.withList}
      />

      <StatsBand eyebrow="Results" title="What hotels see on the platform" stats={platformStats} />

      <FeatureGrid eyebrow="Features" title={`${p.name} features built for hotels`} lede={p.featuresLede} items={p.features} />

      <StepsBand eyebrow="Onboarding" title="Live in days, with our team doing the setup" steps={p.steps} />

      {/* Works better together */}
      <section className="py-14 md:py-22">
        <Container>
          <SectionHead
            eyebrow="Integrations"
            title="Works even better together"
            lede="Every Fielmente product shares one guest record and one dashboard, so data from one tool powers the next."
          />
          <div className="mb-8">
            <Chips items={integrationChannels} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {related.map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="group flex items-center gap-4 rounded-2xl border border-[#E4E3EC] p-4 hover:border-primary2/40 transition-colors"
              >
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-[#F5F5F9]">
                  <ProductThumb image={r.image} mock={r.mock} sizes="96px" scale={0.2} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-primary2">{r.title}</span>
                  <span className="text-sm/snug text-[#55536E]">{r.body}</span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Property types */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <SectionHead eyebrow="Who it's for" title="Built for every kind of property" />
          <div className="grid md:grid-cols-3 gap-5">
            {propertyTypes.map((t) => (
              <div key={t.title} className="overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={t.image} alt={t.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm/relaxed text-[#55536E]">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      <FaqSection title={`Fielmente ${p.name} FAQs`} faqs={p.faqs} lead={<FaqLead />} />

      <LinkCards
        eyebrow="Explore"
        title="More Fielmente products"
        items={productCards(
          products
            .filter((x) => x.slug !== p.slug && !p.related.includes(x.slug))
            .slice(0, 3)
            .map((x) => x.slug)
        )}
      />

      <CtaBand
        title={`See Fielmente ${p.name} working on your property`}
        body="Try it free for 14 days, or book a walkthrough set up with your own rooms and rates."
        actions={
          <>
            <PrimaryButton href={TRIAL_URL} external>
              Start 14-day free trial
            </PrimaryButton>
            <WhatsAppButton label="Book a demo" />
          </>
        }
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
    </main>
  );
}

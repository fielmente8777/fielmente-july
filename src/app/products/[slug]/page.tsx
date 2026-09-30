import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CHANNELS,
  EAZOTEL_URL,
  EMAIL,
  PARTNERS,
  PHONE,
  PHONE_DISPLAY,
  PRODUCTS,
  PROPERTY_TYPES,
  SHARED_FAQ,
  SITE_URL,
  TESTIMONIALS,
  TRIAL_URL,
  demoLink,
  getProduct,
  productPath,
  productUrl,
} from "@/lib/products";
import {
  Breadcrumbs,
  FinalCta,
  JsonLd,
  ProductSwitcher,
  ResultsBand,
} from "../_components/shared";
import s from "../products.module.css";

type Props = { params: Promise<{ slug: string }> };

// Build all 8 pages at build time; any other /products/<slug>/ returns 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const url = productUrl(p.slug);
  const image = `${SITE_URL}${p.screenshot.src}`;
  return {
    // `absolute` skips any title template in your root layout; titles already end in "| Fielmente".
    title: { absolute: p.seo.title },
    description: p.seo.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: "Fielmente",
      locale: "en_IN",
      title: p.seo.title,
      description: p.seo.description,
      images: [{ url: image, alt: `Fielmente ${p.name} for hotels` }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.seo.title,
      description: p.seo.description,
      images: [image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const url = productUrl(p.slug);
  const demo = demoLink(p.name);
  const faqs = [...p.faqs, SHARED_FAQ];
  const related = p.related
    .map((r) => getProduct(r))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `Fielmente ${p.name}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: p.seo.description,
      url,
      image: `${SITE_URL}${p.screenshot.src}`,
      provider: { "@type": "Organization", name: "Fielmente", url: `${SITE_URL}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products/` },
        { "@type": "ListItem", position: 3, name: p.name, item: url },
      ],
    },
  ];

  return (
    <div className={s.page}>
      <JsonLd data={schema} />
      <ProductSwitcher activeSlug={p.slug} />

      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <Breadcrumbs current={p.name} />
            <h1>{p.h1}</h1>
            <p className={s.intro}>{p.intro}</p>
            <div className={s.proof}>{p.proof}</div>
            <div className={s.ctaRow}>
              <a
                className={`${s.btn} ${s.btnPrimary}`}
                href={TRIAL_URL}
                data-cta="start-trial"
                data-product={p.slug}
              >
                Start 14-day free trial
              </a>
              <a
                className={`${s.btn} ${s.btnGhost}`}
                href={demo}
                target="_blank"
                rel="noopener"
                data-cta="book-demo"
                data-product={p.slug}
              >
                Book a demo on WhatsApp
              </a>
            </div>
            <p className={s.powered}>
              Runs on <a href={EAZOTEL_URL}>Eazotel</a>, our hotel CRM and marketing platform.
              Already a customer? <a href={TRIAL_URL}>Log in to your dashboard</a>
            </p>
          </div>
          <div className={s.visual}>
            <Image
              className={s.photo}
              src={p.photo.src}
              alt={p.photo.alt}
              width={1200}
              height={900}
              sizes="(max-width: 980px) 100vw, 560px"
              priority
            />
            <div className={s.shot}>
              <Image
                src={p.screenshot.src}
                alt={p.screenshot.alt}
                width={600}
                height={375}
                sizes="(max-width: 980px) 50vw, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={s.partners} aria-label="Partners and integrations">
        <div className={`${s.wrap} ${s.partnersInner}`}>
          <p className={s.partnersLabel}>Official partners and integrations</p>
          <div className={s.logos}>
            {PARTNERS.map((logo) => (
              <Image key={logo.src} src={logo.src} alt={logo.alt} width={120} height={40} />
            ))}
          </div>
        </div>
      </section>

      <section className={s.shift}>
        <div className={s.wrap}>
          <h2>What changes when your hotel switches to Fielmente {p.name}</h2>
          <div className={s.shiftGrid}>
            <div className={`${s.col} ${s.colOld}`}>
              <h3>Without it</h3>
              <ul>
                {p.without.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className={`${s.col} ${s.colNew}`}>
              <h3>With Fielmente</h3>
              <ul>
                {p.withFielmente.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ResultsBand />

      <section className={s.feat}>
        <div className={s.wrap}>
          <div className={s.featHead}>
            <h2>{p.name} features built for hotels</h2>
            <p>Built for hotels, resorts, villas and homestays, and set up for you by the Fielmente team.</p>
          </div>
          <div className={s.featGrid}>
            {p.features.map((f) => (
              <div key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.steps}>
        <div className={s.wrap}>
          <h2>Live in days, with our team doing the setup</h2>
          <ol>
            {p.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={s.rel}>
        <div className={s.wrap}>
          <div className={s.relBox}>
            <div>
              <h2>Works even better together</h2>
              <p>
                Every Fielmente product shares one guest record and one dashboard, so data from one
                tool powers the next.
              </p>
              <p className={s.chanLabel}>Every enquiry lands in the same inbox, from:</p>
              <ul className={s.chans}>
                {CHANNELS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className={s.relLinks}>
              {related.map((r) => (
                <Link key={r.slug} href={productPath(r.slug)}>
                  <strong>{r.name}</strong>
                  <span>{r.proof}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={s.who}>
        <div className={s.wrap}>
          <h2>Built for every kind of property</h2>
          <div className={s.whoGrid}>
            {PROPERTY_TYPES.map((w) => (
              <div key={w.title}>
                <Image
                  src={w.image.src}
                  alt={w.image.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <div className={s.quotes}>
            {TESTIMONIALS.map((t) => (
              <figure key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <figcaption>{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={s.faq}>
        <div className={`${s.wrap} ${s.faqGrid}`}>
          <div className={s.faqSide}>
            <h2>Fielmente {p.name} FAQs</h2>
            <p>
              Something else on your mind? Call <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a> or{" "}
              <a href={`mailto:${EMAIL}`}>email us</a>.
            </p>
          </div>
          <div className={s.faqList}>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        heading={`See Fielmente ${p.name} working on your property`}
        text="Try it free for 14 days, or book a walkthrough set up with your own rooms and rates."
        demoHref={demo}
        ctaSource={p.slug}
      />
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, SITE_URL, TRIAL_URL, WHATSAPP_NUMBER, productPath, productUrl } from "@/lib/products";
import { Breadcrumbs, FinalCta, JsonLd, ProductSwitcher, ResultsBand } from "./_components/shared";
import s from "./products.module.css";

const TITLE = "Hotel Software & Marketing Tools | Fielmente";
const DESCRIPTION =
  "Fielmente's hotel tools in one place: booking engine, CRM, WhatsApp and email marketing, AI chatbot, payments, CMS and local SEO for hotels.";
const URL = `${SITE_URL}/products/`;
const DEMO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I want a demo of Fielmente's hotel products",
)}`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: URL,
    siteName: "Fielmente",
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}/fielmente_logo.png`, width: 1200, height: 630, alt: "Fielmente" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/fielmente_logo.png`],
  },
};

export default function ProductsIndexPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: TITLE,
      description: DESCRIPTION,
      url: URL,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: PRODUCTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Fielmente ${p.name}`,
          url: productUrl(p.slug),
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Products", item: URL },
      ],
    },
  ];

  return (
    <div className={s.page}>
      <JsonLd data={schema} />
      <ProductSwitcher />

      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroSingle}`}>
          <Breadcrumbs />
          <h1>Hotel software that grows direct bookings</h1>
          <p className={s.intro}>
            Eight tools that work from one dashboard and one guest record: take bookings and
            payments, answer every enquiry, and bring guests back without paying OTA commission.
          </p>
          <div className={s.ctaRow}>
            <a
              className={`${s.btn} ${s.btnPrimary}`}
              href={TRIAL_URL}
              data-cta="start-trial"
              data-product="products-index"
            >
              Start 14-day free trial
            </a>
            <a
              className={`${s.btn} ${s.btnGhost}`}
              href={DEMO}
              target="_blank"
              rel="noopener"
              data-cta="book-demo"
              data-product="products-index"
            >
              Book a demo on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className={s.catalogue}>
        <div className={s.wrap}>
          <h2>Choose where to start</h2>
          <div className={s.cardGrid}>
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={productPath(p.slug)} className={s.card}>
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 280px"
                />
                <div className={s.cardBody}>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <p className={s.cardProof}>{p.proof}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ResultsBand />

      <FinalCta
        heading="See Fielmente working on your property"
        text="Try every product free for 14 days, or book a walkthrough with your own rooms and rates."
        demoHref={DEMO}
        ctaSource="products-index"
      />
    </div>
  );
}

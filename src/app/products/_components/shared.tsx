import Link from "next/link";
import {
  PRODUCTS,
  RESULTS,
  SHOW_PHOTO_CREDIT,
  TRIAL_URL,
  productPath,
} from "@/lib/products";
import s from "../products.module.css";

/** Renders a JSON-LD block. `<` is escaped so the JSON can't close the script tag. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function Breadcrumbs({ current }: { current?: string }) {
  return (
    <nav className={s.crumbs} aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {current ? (
          <>
            <li>
              <Link href="/products/">Products</Link>
            </li>
            <li aria-current="page">{current}</li>
          </>
        ) : (
          <li aria-current="page">Products</li>
        )}
      </ol>
    </nav>
  );
}

export function ProductSwitcher({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav className={s.switcher} aria-label="Products">
      <div className={s.wrap}>
        <ul>
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={productPath(p.slug)}
                aria-current={p.slug === activeSlug ? "page" : undefined}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function ResultsBand() {
  return (
    <section className={s.results}>
      <div className={s.wrap}>
        <h2>What hotels see on the platform</h2>
        <dl>
          {RESULTS.map((r) => (
            <div key={r.value}>
              <dt>{r.value}</dt>
              <dd>{r.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function FinalCta({
  heading,
  text,
  demoHref,
  ctaSource,
}: {
  heading: string;
  text: string;
  demoHref: string;
  /** Sent to GTM as data-product so trial clicks can be attributed. */
  ctaSource: string;
}) {
  return (
    <>
      <section className={s.final}>
        <div className={`${s.wrap} ${s.finalInner}`}>
          <div>
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
          <div className={s.ctaRow}>
            <a
              className={`${s.btn} ${s.btnDark}`}
              href={TRIAL_URL}
              data-cta="start-trial"
              data-product={ctaSource}
            >
              Start 14-day free trial
            </a>
            <a
              className={`${s.btn} ${s.btnOutlineDark}`}
              href={demoHref}
              target="_blank"
              rel="noopener"
              data-cta="book-demo"
              data-product={ctaSource}
            >
              Book a demo
            </a>
          </div>
        </div>
      </section>
      {SHOW_PHOTO_CREDIT && (
        <div className={s.wrap}>
          <p className={s.credit}>
            Photos: <a href="https://www.freepik.com/">Freepik</a>
          </p>
        </div>
      )}
    </>
  );
}

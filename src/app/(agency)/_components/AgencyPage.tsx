// Template for the agency landing pages, e.g. /hotel-marketing-agency-dubai/.
// Content lives in ../_data/pages/<slug>.ts; shared proof and logos in ../_lib/shared.ts.
import CaseStudyCardRich from "@/app/case-study/components/rich/CaseStudyCardRich";
import { getCaseStudy, type CaseStudy } from "@/app/case-study/data/caseStudies";
import ClientLogos from "@/components/marketing/ClientLogos";
import { Icon } from "@/components/marketing/icons";
import { Breadcrumbs, Comparison, Eyebrow, FaqLead, FaqSection, SectionHead, Title, WhatsAppButton } from "@/components/marketing/Sections";
import { Container } from "@/components/sectionComponants";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { contacts } from "../../../../contact";
import { AGENCY_PAGES } from "../_data/pages";
import { COMPANY, ENGAGEMENTS, pickImage, PORTFOLIO, TESTIMONIALS } from "../_lib/shared";
import type { AgencyPageData, Block } from "../_lib/types";
import AgencyLeadForm from "./AgencyLeadForm";
import RichText, { citeNumber } from "./RichText";

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
      images: [{ url: pickImage(d.context.image), width: 1200, height: 630 }],
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

/* ── Deep-dive blocks ────────────────────────────────────────────────── */
function BlockView({ b, d, i }: { b: Block; d: AgencyPageData; i: number }) {
  const tint = i % 2 === 0;
  if (b.kind === "split") {
    return (
      <section className={`py-14 md:py-20 ${tint ? "bg-[#F5F5F9]" : ""}`}>
        <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`flex flex-col gap-4 ${b.reverse ? "lg:order-2" : ""}`}>
            {b.eyebrow && <Eyebrow>{b.eyebrow}</Eyebrow>}
            <Title>{b.title}</Title>
            {b.paragraphs.map((p, k) => (
              <p key={k} className="text-base/relaxed md:text-[17px]/relaxed text-[#3D3A57]">
                <RichText text={p} sources={d.sources} />
              </p>
            ))}
            {b.bullets && (
              <ul className="mt-1 flex flex-col gap-3">
                {b.bullets.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px]/relaxed">
                    <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                    <span>
                      <RichText text={t} sources={d.sources} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#F5F5F9]">
            <Image src={pickImage(b.image)} alt={b.image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Container>
      </section>
    );
  }
  if (b.kind === "table") {
    return (
      <section className={`py-14 md:py-20 ${tint ? "bg-[#F5F5F9]" : ""}`}>
        <Container>
          <SectionHead eyebrow={b.eyebrow} title={b.title} lede={b.lede ? <RichText text={b.lede} sources={d.sources} /> : undefined} />
          <div className="overflow-x-auto rounded-2xl border border-[#E4E3EC] bg-white">
            <table className="w-full min-w-160 border-collapse text-left text-sm md:text-[15px]">
              <thead>
                <tr className="bg-primary2 text-white">
                  {b.columns.map((c) => (
                    <th key={c} scope="col" className="px-4 py-3.5 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, r) => (
                  <tr key={r} className={r % 2 ? "bg-[#FAFAFC]" : "bg-white"}>
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th key={c} scope="row" className="px-4 py-3.5 align-top font-semibold text-primary2">
                          <RichText text={cell} sources={d.sources} />
                        </th>
                      ) : (
                        <td key={c} className="px-4 py-3.5 align-top text-[#3D3A57]">
                          <RichText text={cell} sources={d.sources} />
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note && (
            <p className="mt-3 text-xs text-[#6B6886]">
              <RichText text={b.note} sources={d.sources} />
            </p>
          )}
        </Container>
      </section>
    );
  }
  return (
    <section className={`py-14 md:py-20 ${tint ? "bg-[#F5F5F9]" : ""}`}>
      <Container>
        <SectionHead eyebrow={b.eyebrow} title={b.title} lede={b.lede ? <RichText text={b.lede} sources={d.sources} /> : undefined} />
        <div className={`grid sm:grid-cols-2 ${b.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-4 md:gap-5`}>
          {b.items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-[#E4E3EC] bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                <Icon name={it.icon} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-primary2">{it.title}</h3>
              <p className="mt-2 text-sm/relaxed md:text-[15px]/relaxed text-[#55536E]">
                <RichText text={it.body} sources={d.sources} />
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default function AgencyPage({ data: d, afterServices }: { data: AgencyPageData; afterServices?: ReactNode }) {
  const url = `${SITE}/${d.slug}/`;
  const crumbs: { label: string; href?: string }[] = [{ label: "Home", href: "/" }, ...trail(d), { label: d.navLabel }];
  const studies = d.proof.caseStudies.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));
  const related = d.related
    .map((slug) => AGENCY_PAGES.find((p) => p.slug === slug))
    .filter((p): p is AgencyPageData => Boolean(p));
  const contextImage = pickImage(d.context.image);

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
      {/* Hero with the lead form */}
      <section className="relative overflow-hidden bg-primary2 pt-24 pb-14 md:pt-32 md:pb-20">
        <Image
          src="/landing-pages/google-ads/fielmente-symbol-white.png"
          alt=""
          aria-hidden="true"
          width={390}
          height={820}
          className="pointer-events-none absolute -left-24 top-10 h-130 w-auto opacity-[0.04]"
        />
        <Container className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-5 md:gap-6 lg:pt-4">
            <Breadcrumbs items={crumbs} />
            <Eyebrow>{d.hero.eyebrow}</Eyebrow>
            <h1 className="text-[34px]/[1.08] md:text-[50px]/[1.05] font-bold tracking-tight text-white">{d.hero.h1}</h1>
            <p className="text-base/relaxed md:text-lg/relaxed text-[#C9C7DD] max-w-150">
              <RichText text={d.hero.lede} sources={d.sources} />
            </p>
            <ul className="flex flex-col gap-2.5">
              {d.hero.chips.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[15px] text-white">
                  <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-1 lg:hidden">
              <a href="#plan" className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-orange-primary text-white font-semibold">
                Get a free growth plan <LuArrowRight aria-hidden="true" />
              </a>
              <WhatsAppButton label="Chat on WhatsApp" />
            </div>
            <div className="hidden lg:flex flex-wrap items-center gap-3 pt-1">
              <WhatsAppButton label="Prefer WhatsApp? Chat with us" />
            </div>
          </div>
          <div id="plan" className="scroll-mt-28 rounded-3xl bg-white p-5 md:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <AgencyLeadForm pageKeyword={d.keyword} title={d.form.title} body={d.form.body} defaultCountryCode={d.form.defaultCountryCode} needs={d.form.needs} />
          </div>
        </Container>
      </section>

      <ClientLogos set={d.logos} />

      {/* Market context */}
      <section className="py-14 md:py-22">
        <Container>
          <div className="flex flex-col gap-3 max-w-190 mb-8 md:mb-10">
            <Eyebrow>{d.context.eyebrow}</Eyebrow>
            <Title>{d.context.title}</Title>
            {d.context.intro.map((p, i) => (
              <p key={i} className="text-[15px]/relaxed md:text-base/relaxed text-[#55536E]">
                <RichText text={p} sources={d.sources} />
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {d.context.stats.map((s, i) => (
              <div key={s.label} className={`rounded-2xl p-5 md:p-6 flex flex-col gap-2 ${i === 0 ? "bg-primary2" : "bg-[#F5F5F9]"}`}>
                <span className={`text-[26px]/tight md:text-[34px]/tight font-bold ${i === 0 ? "text-orange-primary" : "text-primary2"}`}>{s.value}</span>
                <span className={`text-[13px]/snug md:text-sm/snug ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>
                  {s.label}
                  {s.source && citeNumber(d.sources, s.source) && (
                    <sup className="ml-0.5 text-[0.75em] font-semibold">
                      <a href={`#src-${s.source}`} className={i === 0 ? "text-white/80" : "text-sapphireBlue"}>
                        [{citeNumber(d.sources, s.source)}]
                      </a>
                    </sup>
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#F5F5F9]">
              <Image src={contextImage} alt={d.context.image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-6">
              {d.context.points.map((pt) => (
                <div key={pt.title} className="flex flex-col gap-1.5">
                  <h3 className="text-lg md:text-xl font-bold">{pt.title}</h3>
                  <p className="text-[15px]/relaxed md:text-base/relaxed text-[#55536E]">
                    <RichText text={pt.body} sources={d.sources} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Comparison title={d.comparison.title} without={d.comparison.without} withList={d.comparison.withList} />

      {/* Services */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <SectionHead eyebrow="What we do" title={d.services.title} lede={d.services.lede} />
          <ul className={`grid sm:grid-cols-2 ${d.services.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-3 md:gap-4`}>
            {d.services.items.map((s) => (
              <li key={s.title}>
                <Link
                  href={s.href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-transparent bg-white p-5 md:p-6 hover:border-primary2/30 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)] transition-all"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="flex flex-1 flex-col gap-1.5">
                    <span className="text-[17px] font-bold text-primary2">{s.title}</span>
                    <span className="text-sm/relaxed text-[#55536E]">{s.body}</span>
                  </span>
                  <LuArrowRight className="mt-1 shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {afterServices}

      {/* Proof */}
      <section className="py-14 md:py-22">
        <Container>
          <SectionHead eyebrow="Proof" title={d.proof.title} lede={d.proof.lede} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {PORTFOLIO.stats.map((s, i) => (
              <div key={s.label} className={`rounded-2xl p-5 md:p-6 flex flex-col gap-2 ${i === 0 ? "bg-primary2" : "bg-[#F5F5F9]"}`}>
                <span className={`text-[26px]/tight md:text-[34px]/tight font-bold ${i === 0 ? "text-orange-primary" : "text-primary2"}`}>{s.value}</span>
                <span className={`text-[13px] md:text-sm ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#6B6886]">{PORTFOLIO.note}</p>
          {studies.length > 0 && (
            <div className={`mt-8 md:mt-10 grid gap-5 ${studies.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
              {studies.map((cs) => (
                <CaseStudyCardRich key={cs.slug} cs={cs} />
              ))}
            </div>
          )}
          {d.proof.testimonials.length > 0 && (
            <div className={`mt-8 grid gap-5 ${d.proof.testimonials.length > 1 ? "md:grid-cols-2" : ""}`}>
              {d.proof.testimonials.map((k) => {
                const t = TESTIMONIALS[k];
                return (
                  <figure key={k} className="rounded-2xl bg-[#F5F5F9] p-6 md:p-8 flex flex-col gap-4">
                    <span className="text-5xl leading-none text-orange-primary" aria-hidden="true">
                      “
                    </span>
                    <blockquote className="-mt-4 text-base/relaxed md:text-lg/relaxed text-primary2">{t.quote}</blockquote>
                    <figcaption className="text-sm text-[#55536E]">
                      <span className="font-semibold text-primary2">{t.name}</span> · {t.context}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          )}
          <p className="mt-6 max-w-190 text-sm/relaxed text-[#55536E]">{d.proof.honestNote}</p>
        </Container>
      </section>

      {d.blocks.map((b, i) => (
        <BlockView key={b.title} b={b} d={d} i={i} />
      ))}

      {/* Process */}
      <section className="bg-primary2 py-14 md:py-22">
        <Container>
          <SectionHead eyebrow="How it works" title={d.process.title} lede={d.process.lede} light />
          <ol className={`grid sm:grid-cols-2 ${d.process.steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
            {d.process.steps.map((s) => (
              <li key={s.title} className="flex flex-col gap-3 pt-5 border-t-2 border-orange-primary">
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-primary">{s.when}</span>
                <h3 className="text-lg md:text-xl font-bold text-white">{s.title}</h3>
                <p className="text-sm/relaxed md:text-[15px]/relaxed text-[#C9C7DD]">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Ways to work together */}
      <section className="py-14 md:py-22">
        <Container>
          <SectionHead eyebrow="Working together" title="Three ways to start" lede={COMPANY.founderLine} />
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {ENGAGEMENTS.map((e, i) => (
              <div key={e.title} className={`flex flex-col gap-3 rounded-2xl p-6 md:p-7 ${i === 0 ? "bg-primary2 text-white" : "border border-[#E4E3EC]"}`}>
                <h3 className="text-lg font-bold">{e.title}</h3>
                <p className={`text-sm/relaxed md:text-[15px]/relaxed ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{e.body}</p>
                {i === 0 && (
                  <a href="#plan" className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-orange-primary">
                    Request your plan <LuArrowRight aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection title={`${d.keyword}: FAQs`} faqs={d.faqs} lead={<FaqLead />} />

      {/* Related pages */}
      <section className="py-14 md:py-22">
        <Container>
          <SectionHead eyebrow="Explore" title="Related services and markets" />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              ...related.map((p) => ({ title: p.navLabel, body: p.cardLine, href: `/${p.slug}/` })),
              ...d.extraLinks,
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group flex h-full flex-col gap-1.5 rounded-2xl border border-[#E4E3EC] p-5 hover:border-primary2/40 transition-colors">
                  <span className="flex items-center justify-between gap-2 font-bold text-primary2">
                    {l.title}
                    <LuArrowRight className="shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  <span className="text-sm/relaxed text-[#55536E]">{l.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-14 md:pb-22">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-primary2 px-6 py-12 md:px-14 md:py-16">
            <Image
              src="/landing-pages/google-ads/fielmente-symbol-white.png"
              alt=""
              aria-hidden="true"
              width={390}
              height={820}
              className="pointer-events-none absolute -right-10 -top-10 h-[130%] w-auto opacity-[0.06]"
            />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex flex-col gap-3 max-w-150">
                <h2 className="text-[28px]/[1.15] md:text-[40px]/[1.1] font-bold text-white">{d.cta.title}</h2>
                <p className="text-base/relaxed text-[#C9C7DD]">{d.cta.body}</p>
                <p className="text-sm text-[#9A97B8]">
                  Or call{" "}
                  <a href={`tel:${contacts.phone_1.replace(/\s/g, "")}`} className="font-semibold text-white">
                    {contacts.phone_1}
                  </a>{" "}
                  · <a href={`mailto:${contacts.email_1}`} className="font-semibold text-white">{contacts.email_1}</a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href="#plan" className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-orange-primary text-white font-semibold hover:bg-glaucous-3 transition-colors">
                  Get a free growth plan <LuArrowRight aria-hidden="true" />
                </a>
                <WhatsAppButton label="Chat on WhatsApp" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sources */}
      {d.sources.length > 0 && (
        <section aria-labelledby="sources-title" className="border-t border-[#E4E3EC] py-10">
          <Container>
            <h2 id="sources-title" className="text-sm font-bold uppercase tracking-[0.12em] text-[#6B6886]">
              Sources
            </h2>
            <ol className="mt-4 grid md:grid-cols-2 gap-x-10 gap-y-2 text-[13px]/relaxed text-[#55536E]">
              {d.sources.map((s, i) => (
                <li key={s.id} id={`src-${s.id}`} className="scroll-mt-28">
                  <span className="font-semibold text-primary2">[{i + 1}]</span>{" "}
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline decoration-[#C9C7DD] hover:text-primary2">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </main>
  );
}

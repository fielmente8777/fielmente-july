// Shared page sections for product, industry and service pages.
// Brand: Russian Violet #110D3C (primary2), Orange Red #F26633 (orange-primary),
// Sky Blue, Sapphire Blue, Glaucous — all from the site's Tailwind theme.
import { Container } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuArrowRight, LuCircleCheck, LuCircleX } from "react-icons/lu";
import { contacts } from "../../../contact";
import { Icon, type IconKey } from "./icons";

export const TRIAL_URL = "https://onboarding.eazotel.com/sign-in";
export const AUDIT_URL = "/google-ads-for-hotels/#audit";

/* ── Type & small pieces ───────────────────────────────────── */

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs md:text-[13px] font-semibold uppercase tracking-[0.16em] ${light ? "text-orange-primary" : "text-orange-primary"}`}>
      {children}
    </p>
  );
}

export function Title({
  children,
  as: Tag = "h2",
  light = false,
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  className?: string;
}) {
  return (
    <Tag
      className={`text-[28px]/[1.15] md:text-[40px]/[1.12] font-bold tracking-tight ${light ? "text-white" : "text-primary2"} ${className}`}
    >
      {children}
      <span className="text-orange-primary">.</span>
    </Tag>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-3 max-w-190 mb-8 md:mb-12 ${center ? "mx-auto text-center items-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Title light={light}>{title}</Title>
      {lede && (
        <p className={`text-[15px]/relaxed md:text-base/relaxed ${light ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{lede}</p>
      )}
    </div>
  );
}

export function PrimaryButton({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const cls =
    "inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-orange-primary text-white font-semibold hover:bg-glaucous-3 transition-colors";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children} <LuArrowRight aria-hidden="true" />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children} <LuArrowRight aria-hidden="true" />
    </Link>
  );
}

export function WhatsAppButton({ label = "Book a demo on WhatsApp", onDark = true }: { label?: string; onDark?: boolean }) {
  return (
    <a
      href={contacts.WhatsAppCta}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full border font-semibold transition-colors ${
        onDark ? "border-white/30 text-white hover:bg-white/10" : "border-primary2/25 text-primary2 hover:bg-primary2/5"
      }`}
    >
      <FaWhatsapp aria-hidden="true" /> {label}
    </a>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-[#B9B6D3]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-white">
                {it.label}
              </Link>
            ) : (
              <span className="text-white" aria-current="page">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── Hero ──────────────────────────────────────────────────── */

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  highlight,
  actions,
  note,
  image,
  imageAlt,
  imageMode = "photo",
  floating,
  visual,
}: {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  lede: string;
  highlight?: { value: string; label: string };
  actions: ReactNode;
  note?: ReactNode;
  image?: string;
  imageAlt: string;
  /** "photo" fills a rounded frame; "illustration" sits on a white card. */
  imageMode?: "photo" | "illustration";
  floating?: ReactNode;
  /** Custom visual (e.g. a code-built product mock) instead of an image. */
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary2 pt-24 pb-14 md:pt-32 md:pb-22">
      <Image
        src="/landing-pages/google-ads/fielmente-symbol-white.png"
        alt=""
        aria-hidden="true"
        width={390}
        height={820}
        className="pointer-events-none absolute -left-24 top-10 h-130 w-auto opacity-[0.04]"
      />
      <Container className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
        <div className="flex flex-col gap-5 md:gap-6">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[34px]/[1.08] md:text-[50px]/[1.05] font-bold tracking-tight text-white">{title}</h1>
          <p className="text-base/relaxed md:text-lg/relaxed text-[#C9C7DD] max-w-150">{lede}</p>
          {highlight && (
            <div className="self-start rounded-2xl bg-white/6 border border-white/10 px-5 py-4">
              <span className="block text-[28px] md:text-[34px] font-bold leading-none text-orange-primary">{highlight.value}</span>
              <span className="mt-1.5 block text-sm text-[#C9C7DD] max-w-72">{highlight.label}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-3 pt-1">{actions}</div>
          {note && <p className="text-[13px] text-[#9A97B8]">{note}</p>}
        </div>
        <div className="relative">
          {visual ? (
            visual
          ) : !image ? null : imageMode === "illustration" ? (
            <div className="rounded-3xl bg-white p-3 md:p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[615/394] w-full overflow-hidden rounded-2xl">
                <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-3xl">
              <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
          )}
          {floating && (
            <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-auto md:w-80 rounded-2xl bg-white p-4 md:p-5 shadow-[0_18px_50px_-20px_rgba(17,13,60,0.45)]">
              {floating}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/* ── Partners ──────────────────────────────────────────────── */

const partners = [
  ["google-partner.png", "Google Partner"],
  ["meta-business-partner.png", "Meta Business Partner"],
  ["zoho-corporation.png", "Zoho"],
  ["aws.png", "AWS"],
  ["razorpay.png", "Razorpay"],
  ["Booking.Com.png", "Booking.com"],
  ["agoda-logo.png", "Agoda"],
  ["airbnb-logo.png", "Airbnb"],
  ["makemytrip-logo.png", "MakeMyTrip"],
  ["goibibo-logo.png", "Goibibo"],
  ["cleartrip-logo.png", "Cleartrip"],
];

export function PartnerStrip({ title = "Official partners and integrations" }: { title?: string }) {
  return (
    <section aria-label={title} className="border-b border-[#E4E3EC] py-8 md:py-10">
      <Container>
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6886]">{title}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
          {partners.map(([file, name]) => (
            <li key={file} className="relative h-8 w-24 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition">
              <Image src={`/partners/${file}`} alt={name} fill sizes="96px" className="object-contain" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ── Comparison ────────────────────────────────────────────── */

export function Comparison({
  title,
  withoutLabel = "Without it",
  withLabel = "With Fielmente",
  without,
  withList,
}: {
  title: string;
  withoutLabel?: string;
  withLabel?: string;
  without: string[];
  withList: string[];
}) {
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead title={title} />
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="rounded-2xl border border-[#E4E3EC] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6B6886] mb-5">{withoutLabel}</p>
            <ul className="flex flex-col gap-4">
              {without.map((b) => (
                <li key={b} className="flex gap-3 text-[15px]/relaxed md:text-base/relaxed">
                  <LuCircleX className="mt-0.5 h-5 w-5 shrink-0 text-[#A5A2BF]" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary2 p-6 md:p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-primary mb-5">{withLabel}</p>
            <ul className="flex flex-col gap-4">
              {withList.map((a) => (
                <li key={a} className="flex gap-3 text-[15px]/relaxed md:text-base/relaxed">
                  <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Stats ─────────────────────────────────────────────────── */

export function StatsBand({
  title,
  eyebrow,
  stats,
  note,
}: {
  title: string;
  eyebrow?: string;
  stats: { value: string; label: string }[];
  note?: ReactNode;
}) {
  return (
    <section className="bg-[#F5F5F9] py-14 md:py-20">
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <div key={s.label} className={`rounded-2xl p-5 md:p-7 flex flex-col gap-2 ${i === 0 ? "bg-primary2" : "bg-white"}`}>
              <span className={`text-[28px]/tight md:text-[40px]/tight font-bold ${i === 0 ? "text-orange-primary" : "text-primary2"}`}>
                {s.value}
              </span>
              <span className={`text-[13px] md:text-sm ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{s.label}</span>
            </div>
          ))}
        </div>
        {note && <p className="mt-4 text-xs text-[#6B6886]">{note}</p>}
      </Container>
    </section>
  );
}

/* ── Features ──────────────────────────────────────────────── */

export function FeatureGrid({
  eyebrow,
  title,
  lede,
  items,
  columns = 3,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  items: { icon: IconKey; title: string; body: string }[];
  columns?: 2 | 3;
}) {
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <div className={`grid sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} gap-4 md:gap-5`}>
          {items.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-[#E4E3EC] p-6 md:p-7 hover:border-primary2/30 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.4)] transition-all">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-primary2">{f.title}</h3>
              <p className="mt-2 text-sm/relaxed md:text-[15px]/relaxed text-[#55536E]">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Steps ─────────────────────────────────────────────────── */

export function StepsBand({
  eyebrow,
  title,
  lede,
  steps,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <section className="bg-primary2 py-14 md:py-22">
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} light />
        <ol className={`grid sm:grid-cols-2 ${steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3 pt-5 border-t-2 border-orange-primary">
              <span className="text-lg font-bold text-orange-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg md:text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm/relaxed md:text-[15px]/relaxed text-[#C9C7DD]">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ── Split: image + text ───────────────────────────────────── */

export function Split({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
  tint = false,
}: {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  bullets?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tint?: boolean;
}) {
  return (
    <section className={`py-14 md:py-22 ${tint ? "bg-[#F5F5F9]" : ""}`}>
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={`flex flex-col gap-4 ${reverse ? "lg:order-2" : ""}`}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Title>{title}</Title>
          <div className="text-base/relaxed md:text-[17px]/relaxed text-[#3D3A57] flex flex-col gap-3">{body}</div>
          {bullets && (
            <ul className="mt-1 flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px]/relaxed">
                  <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#F5F5F9]">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
}

/* ── Link cards (related products / services) ──────────────── */

export function LinkCards({
  eyebrow,
  title,
  lede,
  items,
  tint = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  items: { title: string; body: string; href: string; icon?: IconKey; image?: string; visual?: ReactNode }[];
  tint?: boolean;
}) {
  return (
    <section className={`py-14 md:py-22 ${tint ? "bg-[#F5F5F9]" : ""}`}>
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E3EC] bg-white hover:border-primary2/40 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)] transition-all"
            >
              {(it.image || it.visual) && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F5F9]">
                  {it.image ? (
                    <Image src={it.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  ) : (
                    it.visual
                  )}
                </div>
              )}
              <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
                {it.icon && !it.image && !it.visual && (
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                    <Icon name={it.icon} size={20} />
                  </span>
                )}
                <span className="text-lg font-bold text-primary2">{it.title}</span>
                <span className="text-sm/relaxed text-[#55536E]">{it.body}</span>
                <span className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-sapphireBlue">
                  Learn more <LuArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Testimonials (as published on the live product pages) ─── */

export function Testimonials() {
  const quotes = [
    {
      quote:
        "Eazotel was an excellent choice for my organisation and team. The ease of use, intuitive design and feature-rich tools are absolutely top tier.",
      name: "Tino Frangline",
    },
    {
      quote:
        "Great team to work with. Adaptive, as Ottawa is a very unique market, and they have learnt very quickly. Great initiative taken to explore and make a big impression in the market.",
      name: "Donald Wingell, CFBE",
    },
  ];
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead eyebrow="What our clients say" title="Trusted by hoteliers" />
        <div className="grid md:grid-cols-2 gap-5">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl bg-[#F5F5F9] p-6 md:p-8 flex flex-col gap-5">
              <span className="text-5xl leading-none text-orange-primary" aria-hidden="true">“</span>
              <blockquote className="-mt-4 text-base/relaxed md:text-lg/relaxed text-primary2">{q.quote}</blockquote>
              <figcaption className="text-sm font-semibold text-[#55536E]">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── FAQ (with FAQPage structured data) ────────────────────── */

export function FaqSection({ title, faqs, lead }: { title: string; faqs: { q: string; a: string }[]; lead?: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="bg-[#F5F5F9] py-14 md:py-22">
      <Container className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16">
        <div className="flex flex-col gap-3">
          <Eyebrow>Questions</Eyebrow>
          <Title>{title}</Title>
          {lead && <p className="text-sm/relaxed text-[#55536E]">{lead}</p>}
        </div>
        <div className="flex flex-col">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-[#D9D8E4] last:border-b-0 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] md:text-lg font-bold text-primary2 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="mt-1 text-orange-primary transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-[15px]/relaxed text-[#55536E]">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

export function FaqLead() {
  return (
    <>
      Something else on your mind? Call{" "}
      <a href={`tel:${contacts.phone_1.replace(/\s/g, "")}`} className="font-semibold text-sapphireBlue">
        {contacts.phone_1}
      </a>{" "}
      or{" "}
      <a href={`mailto:${contacts.email_1}`} className="font-semibold text-sapphireBlue">
        email us
      </a>
      .
    </>
  );
}

/* ── Closing CTA ───────────────────────────────────────────── */

export function CtaBand({ title, body, actions }: { title: string; body: string; actions: ReactNode }) {
  return (
    <section className="py-14 md:py-22">
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
              <h2 className="text-[28px]/[1.15] md:text-[40px]/[1.1] font-bold text-white">{title}</h2>
              <p className="text-base/relaxed text-[#C9C7DD]">{body}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">{actions}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Chips ─────────────────────────────────────────────────── */

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((c) => (
        <li key={c} className="rounded-full border border-[#E4E3EC] bg-white px-3.5 py-1.5 text-sm text-primary2">
          {c}
        </li>
      ))}
    </ul>
  );
}

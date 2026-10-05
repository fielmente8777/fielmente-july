import { Container } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaTimes, FaWhatsapp } from "react-icons/fa";
import { contacts } from "../../../../../contact";
import { caseStudies, type CaseStudy } from "../../data/caseStudies";
import CaseStudyCardRich from "./CaseStudyCardRich";
import ResultsChart from "./ResultsChart";

const eyebrow = "text-xs md:text-[13px] font-semibold uppercase tracking-[0.16em] text-orange-primary";
const h2 = "text-[28px]/[1.15] md:text-[40px]/[1.12] font-bold tracking-tight text-primary2";
const dot = <span className="text-orange-primary">.</span>;

const pct = (n: number) => (n < 1 ? "<1%" : `${Math.round(n)}%`);

export default function CaseStudyDetail({ cs }: { cs: CaseStudy }) {
  const more = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);

  return (
    <main className="overflow-x-clip bg-white text-primary2">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-primary2 pt-24 pb-14 md:pt-32 md:pb-24">
        <Container className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div className="flex flex-col gap-5 md:gap-6">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[#B9B6D3]">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/case-study/" className="hover:text-white">Case Studies</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">{cs.shortName}</li>
              </ol>
            </nav>
            <p className={eyebrow}>
              {cs.service} · {cs.propertyType} · {cs.location.split(",")[0]}
            </p>
            <h1 className="text-[34px]/[1.08] md:text-[52px]/[1.05] font-bold tracking-tight text-white">
              {cs.headline}
            </h1>
            <p className="text-base/relaxed md:text-lg/relaxed text-[#C9C7DD] max-w-150">{cs.summary}</p>

            <div className="flex items-stretch gap-4 mt-1">
              <div className="rounded-2xl bg-white/6 border border-white/10 px-5 py-4 md:px-6 md:py-5 flex flex-col justify-center">
                <span className="text-[34px] md:text-[44px] font-bold leading-none text-orange-primary">
                  {cs.keyStat.value}
                </span>
                <span className="mt-2 text-sm text-[#C9C7DD] max-w-60">{cs.keyStat.label}</span>
              </div>
              <div
                className="hidden sm:flex items-center justify-center rounded-2xl px-5 w-40"
                style={{ backgroundColor: cs.logoBg ?? "#FFFFFF" }}
              >
                <div className="relative h-16 w-full">
                  <Image src={cs.logo} alt={`${cs.client} logo`} fill sizes="160px" className="object-contain" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/google-ads-for-hotels/#audit"
                className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-orange-primary text-white font-semibold hover:bg-glaucous-3 transition-colors"
              >
                Get a free audit <FaArrowRight aria-hidden="true" />
              </Link>
              <a
                href={contacts.WhatsAppCta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10"
              >
                <FaWhatsapp aria-hidden="true" /> Talk to us on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-3xl">
              <Image
                src={cs.heroImage}
                alt={cs.heroAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-auto md:w-80 rounded-2xl bg-white p-4 md:p-5 shadow-[0_18px_50px_-20px_rgba(17,13,60,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sapphireBlue">Compared</p>
              <dl className="mt-2 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-[#6B6886]">Before</dt>
                  <dd className="font-semibold">{cs.periods.before}</dd>
                </div>
                <div>
                  <dt className="text-[#6B6886]">After</dt>
                  <dd className="font-semibold">{cs.periods.after}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── At a glance ──────────────────────────────────── */}
      <section aria-label="At a glance" className="border-b border-[#E4E3EC] pt-14 pb-8 md:pt-16 md:pb-10">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["Client", cs.client],
              ["Location", cs.location],
              ["Property", cs.propertyType],
              ["Service", cs.service],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6B6886]">{k}</dt>
                <dd className="text-[15px] md:text-base font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Results ──────────────────────────────────────── */}
      <section className="py-14 md:py-22">
        <Container>
          <div className="flex flex-col gap-3 mb-8 md:mb-12 max-w-180">
            <p className={eyebrow}>The results</p>
            <h2 className={h2}>What changed for {cs.shortName}{dot}</h2>
            <p className="text-[15px]/relaxed text-[#55536E]">
              Monthly averages, {cs.periods.before} compared with {cs.periods.after}.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {cs.stats.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-2xl p-5 md:p-7 flex flex-col gap-2 ${i === 0 ? "bg-primary2 text-white" : "bg-[#F5F5F9]"}`}
              >
                <span className={`text-[22px]/tight md:text-[30px]/tight font-bold ${i === 0 ? "text-white" : "text-primary2"}`}>
                  {s.value}
                </span>
                <span className={`text-[13px] md:text-sm ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Before / after ───────────────────────────────── */}
      <section className="pb-14 md:pb-22">
        <Container>
          <h2 className={`${h2} mb-8 md:mb-10 max-w-180`}>Before and after Fielmente{dot}</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div className="rounded-2xl border border-[#E4E3EC] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6B6886] mb-5">
                Before · {cs.periods.before}
              </p>
              <ul className="flex flex-col gap-4">
                {cs.before.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px]/relaxed md:text-base/relaxed">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F1F0F6] text-[#8F8CB0]">
                      <FaTimes size={10} aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary2 p-6 md:p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-primary mb-5">
                With Fielmente · {cs.periods.after}
              </p>
              <ul className="flex flex-col gap-4">
                {cs.after.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px]/relaxed md:text-base/relaxed">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-primary text-white">
                      <FaCheck size={10} aria-hidden="true" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Chart ────────────────────────────────────────── */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <div className="flex flex-col gap-3 max-w-180">
              <p className={eyebrow}>Month by month</p>
              <h2 className={h2}>Enquiries and cost per enquiry since {cs.chartFrom}{dot}</h2>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 md:p-8">
            <ResultsChart data={cs.monthly} title={`${cs.client} monthly enquiries`} />
          </div>
        </Container>
      </section>

      {/* ── Challenge ────────────────────────────────────── */}
      <section className="py-14 md:py-22">
        <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <p className={eyebrow}>The challenge</p>
            <h2 className={h2}>Where it started{dot}</h2>
            <p className="text-base/relaxed md:text-lg/relaxed text-[#3D3A57]">{cs.challenge}</p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#F5F5F9]">
            <Image
              src={cs.detailImage ?? cs.heroImage}
              alt={cs.detailAlt ?? cs.heroAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover ${cs.detailImage ? "" : "scale-125 object-[70%_40%]"}`}
            />
          </div>
        </Container>
      </section>

      {/* ── What we did ──────────────────────────────────── */}
      <section className="bg-primary2 py-14 md:py-22">
        <Container>
          <div className="flex flex-col gap-3 max-w-180 mb-10 md:mb-14">
            <p className={eyebrow}>What we did</p>
            <h2 className={`${h2} text-white!`}>The approach{dot}</h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cs.approach.map((a, i) => (
              <li key={a.title} className="flex flex-col gap-3 pt-5 border-t-2 border-orange-primary">
                <span className="text-lg font-bold text-orange-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg md:text-xl font-bold text-white">{a.title}</h3>
                <p className="text-sm/relaxed md:text-[15px]/relaxed text-[#C9C7DD]">{a.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 md:mt-16 rounded-2xl bg-white/6 border border-white/10 p-5 md:p-7">
            <p className="text-sm font-semibold text-white mb-4">Where the budget went (last 12 months)</p>
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
              {cs.channelMix.map((c, i) => (
                <span
                  key={c.label}
                  style={{ width: `${Math.max(c.share, 0.6)}%` }}
                  className={i === 0 ? "bg-orange-primary" : i === 1 ? "bg-skyBlue" : "bg-glaucous"}
                />
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#C9C7DD]">
              {cs.channelMix.map((c, i) => (
                <li key={c.label} className="inline-flex items-center gap-2">
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-orange-primary" : i === 1 ? "bg-skyBlue" : "bg-glaucous"}`}
                    aria-hidden="true"
                  />
                  {c.label} <span className="font-semibold text-white">{pct(c.share)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Services used ────────────────────────────────── */}
      <section className="py-14 md:py-22">
        <Container>
          <div className="flex flex-col gap-3 max-w-180 mb-8 md:mb-10">
            <p className={eyebrow}>Services used</p>
            <h2 className={h2}>What powered these results{dot}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {cs.servicesUsed.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group flex flex-col gap-2 rounded-2xl border border-[#E4E3EC] p-6 hover:border-primary2 transition-colors"
              >
                <span className="text-lg font-bold">{s.name}</span>
                <span className="text-sm/relaxed text-[#55536E]">{s.note}</span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sapphireBlue">
                  Learn more <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <details className="mt-10 rounded-2xl bg-[#F5F5F9] p-5 md:p-6 text-sm/relaxed text-[#55536E]">
            <summary className="cursor-pointer font-semibold text-primary2">How we measured these results</summary>
            <p className="mt-3">
              All figures come from {cs.client}&apos;s Google Ads account and are monthly averages over each period. An
              enquiry is a tracked call, WhatsApp chat, form submission or Book Now click into the booking engine;
              map-direction taps and page views are not counted. Enquiries are not confirmed bookings. Photos are
              representative images, not of the property.
            </p>
          </details>
        </Container>
      </section>

      {/* ── More case studies ────────────────────────────── */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
            <h2 className={h2}>More results from our clients{dot}</h2>
            <Link href="/case-study/" className="hidden md:inline-flex items-center gap-2 font-semibold text-sapphireBlue">
              All case studies <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((c) => (
              <CaseStudyCardRich key={c.slug} cs={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
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
                <h2 className="text-[28px]/[1.15] md:text-[40px]/[1.1] font-bold text-white">
                  Want results like {cs.shortName}&apos;s?
                </h2>
                <p className="text-base/relaxed text-[#C9C7DD]">
                  Get a free audit of your Google Ads, landing page and tracking, with a target cost per enquiry for
                  your property.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/google-ads-for-hotels/#audit"
                  className="inline-flex items-center justify-center gap-2 min-h-13 px-7 rounded-full bg-orange-primary text-white font-semibold hover:bg-glaucous-3"
                >
                  Get my free audit <FaArrowRight aria-hidden="true" />
                </Link>
                <a
                  href={contacts.WhatsAppCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-13 px-7 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10"
                >
                  <FaWhatsapp aria-hidden="true" /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

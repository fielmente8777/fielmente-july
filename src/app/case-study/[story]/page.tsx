import {
  Container,
  SectionWithContainer,
} from "@/components/sectionComponants";
import Image from "next/image";
import { casStudiesData } from "./components/caseData";
import CtaSection from "@/components/commonSections/CtaSection";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyChart from "./components/CaseStudyChart";
import CaseStudyKpis, { kpisFromResults } from "./components/CaseStudyKpis";

interface Params {
  params: Promise<{ story: string }>;
}

export async function generateStaticParams() {
  const path = casStudiesData;

  return path.map((post) => ({
    story: post.slug,
  }));
}

const SITE = "https://fielmente.com";
/** Site paths get the domain; full URLs (e.g. Unsplash photos) are used as they are. */
const abs = (src: string) => (/^https?:\/\//.test(src) ? src : `${SITE}${src}`);
/** Social preview size for Unsplash photos; other images as they are. */
const ogSrc = (src: string) =>
  src.startsWith("https://images.unsplash.com/") ? `${src.split("?")[0]}?w=1200&h=630&fit=crop&q=80&fm=jpg` : src;

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const data = casStudiesData.find((item) => item.slug === params.story);
  if (!data) return { title: "Case study not found", robots: { index: false, follow: false } };
  const title = data.metaData?.title || `${data.title} | Fielmente`;
  const description = data.metaData?.description || data.description;
  const url = `${SITE}/case-study/${data.slug}/`;
  const image = data.hotelImg && data.hotelImg !== "/banner.jpg" ? data.hotelImg : "/fielmente_logo.png";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Fielmente", locale: "en_IN", type: "article", images: [{ url: ogSrc(image), width: 1200, height: 630, alt: data.title }] },
    // A case study with no write-up yet stays out of Google until it has one.
    robots: data.data?.length ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function Page(props: Params) {
  const params = await props.params;
  const data = casStudiesData.find((item) => item.slug === params.story);

  if (!data) {
    notFound();
  }

  const url = `${SITE}/case-study/${data.slug}/`;
  const results = data.data?.find((d) => /^results/i.test(d.title));
  const kpis = kpisFromResults(results?.lists);
  const hasKpis = kpis.length > 0 || (data.metrics?.length ?? 0) > 0;
  const others = casStudiesData.filter((c) => c.slug !== data.slug && c.data?.length).slice(0, 3);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.metaData?.description || data.description,
    url,
    mainEntityOfPage: url,
    image: abs(data.hotelImg && data.hotelImg !== "/banner.jpg" ? data.hotelImg : data.img),
    author: { "@type": "Organization", name: "Fielmente", url: `${SITE}/` },
    publisher: { "@type": "Organization", name: "Fielmente", logo: { "@type": "ImageObject", url: `${SITE}/fielmente_logo.png` } },
    about: { "@type": "Organization", name: data.title.replace(/^.*?:\s*/, "") },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Case studies", item: `${SITE}/case-study/` },
      { "@type": "ListItem", position: 3, name: data.title, item: url },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {data.slug === "syah-udaipur-tripadvisor-ads" ? (
        <section className="relative overflow-hidden bg-[#102b25] text-white">
          <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#d7bd88]/25" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-80 w-80 rounded-full border border-[#d7bd88]/15" />
          <Container className="relative grid min-h-[540px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="max-w-2xl">
              <Link href="/case-study/" className="text-sm text-[#d7bd88] underline-offset-4 hover:underline">← All case studies</Link>
              <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-[#d7bd88]">Fielmente × Eazotel · Restaurant growth story</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">From Tripadvisor discovery to Syah Udaipur</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">How a six-seat fine-dining restaurant connected sponsored discovery with its own reservation experience, analytics and guest engagement.</p>
              <div className="mt-9 flex flex-wrap gap-3 text-sm"><span className="rounded-full border border-white/30 px-4 py-2">Tripadvisor Ads</span><span className="rounded-full border border-white/30 px-4 py-2">Direct Enquiries</span><span className="rounded-full border border-white/30 px-4 py-2">Eazotel</span></div>
            </div>
            <figure className="relative">
              <div className="absolute -inset-3 rotate-2 rounded-3xl border border-[#d7bd88]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#f4f0e7] p-3 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  <Image src="/our-work/sites/reserve-syahudaipur-com.webp" alt="Real Syah Udaipur reservation website" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-top" />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-xs tracking-wide text-white/65">Actual Syah Udaipur reservation website</figcaption>
            </figure>
          </Container>
        </section>
      ) : (
        <div className="w-full mx-auto relative lg:aspect-[4/1.8] md:aspect-4/2 aspect-4/3.5">
          <Image src={data?.hotelImg || data.img} alt={data.hotelImgAlt ?? data.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#111609]/30 flex items-center justify-center">
            <Container className="md:space-y-16 space-y-5">
              <nav aria-label="Breadcrumb" className="text-sm text-white/80"><Link href="/case-study/" className="underline-offset-2 hover:underline">Case studies</Link></nav>
              <h1 className="lg:text-[2.5rem]/[3.5rem] lg:max-w-2xl text-white font-semibold text-[1.5rem]/[2.2rem]">{data?.title}</h1>
              {data.description && <p className="max-w-2xl text-white/90 text-base md:text-lg">{data.description}</p>}
            </Container>
          </div>
        </div>
      )}

      {hasKpis && (
        <SectionWithContainer sectionClassName="">
          <h2 className="mb-5 text-[1.75rem]/[2.5rem] text-primary2 font-semibold">Results at a glance</h2>
          <CaseStudyKpis kpis={kpis} metrics={data.metrics} />
          {data.metricsNote && (
            <p className="mt-4 text-sm/relaxed text-[#55536E]">{data.metricsNote}</p>
          )}
          {data.monthly && data.monthly.length > 0 && (
            <div className="mt-8">
              <CaseStudyChart
                title={`${data.title.replace(/^.*?:\s*/, "")}: enquiries per month`}
                data={data.monthly}
                highlightFrom={data.monthlyHighlightFrom}
                note={data.monthlyNote}
              />
            </div>
          )}
        </SectionWithContainer>
      )}

      {data.slug === "syah-udaipur-tripadvisor-ads" && (
        <SectionWithContainer sectionClassName="">
          <article className="mx-auto max-w-6xl space-y-16">
            <header className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-primary">The complete guest journey</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary2 md:text-5xl">How a traveller discovers Syah Udaipur — and takes the next step toward a table</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#55536E]">From Tripadvisor sponsored visibility to the restaurant's own digital experience, Fielmente and Eazotel connect discovery, consideration and direct guest enquiries.</p>
            </header>
            <div className="grid overflow-hidden rounded-3xl border border-[#e8e2d6] bg-[#fbf8f1] lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="text-sm font-bold tracking-[0.2em] text-orange-primary">01 / DISCOVER</span>
                <h3 className="mt-4 text-3xl font-semibold text-primary2">Visibility at the moment diners are choosing</h3>
                <p className="mt-5 text-lg leading-8 text-[#55536E]">Syah's Tripadvisor advertising places the restaurant in sponsored positions as travellers browse Udaipur dining options, including restaurant listing pages. This is paid prominence, not a claim of organic first position.</p>
                <div className="mt-8 rounded-2xl border border-[#e8e2d6] bg-white p-5">
                  <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold text-primary2">Tripadvisor sponsored discovery</span><span className="rounded bg-[#e7f2e9] px-3 py-1 text-xs font-semibold text-[#235a37]">AD</span></div>
                  <div className="mt-4 flex items-center gap-4"><Image src="/clientsLogo/syah-udaipur.png" alt="Syah Udaipur logo" width={84} height={84} className="h-20 w-20 object-contain"/><div><p className="text-xl font-semibold text-primary2">Syah Udaipur</p><p className="mt-1 text-sm text-[#55536E]">Intimate tasting-menu dining · Udaipur</p><p className="mt-2 text-sm font-medium text-[#317b57]">Sponsored restaurant discovery →</p></div></div>
                  <p className="mt-4 text-xs text-[#777]">Illustration of the ad journey, not a reproduction of Tripadvisor's interface.</p>
                </div>
              </div>
              <div className="relative min-h-[340px] bg-[#e7e1d4]"><Image src="/our-work/sites/reserve-syahudaipur-com.webp" alt="Screenshot of Syah Udaipur's actual reservation website" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top"/></div>
            </div>
            <div className="space-y-7">
              <div className="max-w-3xl"><span className="text-sm font-bold tracking-[0.2em] text-orange-primary">02 / EXPERIENCE</span><h3 className="mt-3 text-3xl font-semibold text-primary2 md:text-4xl">A branded landing page, not another crowded listing</h3><p className="mt-4 text-lg leading-8 text-[#55536E]">Once guests arrive at the reservation website, Syah can tell its own story with culinary imagery, tasting-menu details and clear reservation calls to action.</p></div>
              <div className="overflow-hidden rounded-3xl border border-[#e8e2d6] bg-[#f6f2eb] p-4 md:p-8"><div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#dcd6cb] bg-white shadow-xl"><div className="flex items-center gap-2 border-b bg-[#fafafa] px-4 py-3"><span className="h-3 w-3 rounded-full bg-[#edb6ac]"/><span className="h-3 w-3 rounded-full bg-[#f3dc9c]"/><span className="h-3 w-3 rounded-full bg-[#b8d8b9]"/><span className="ml-3 truncate text-xs text-[#777]">reserve.syahudaipur.com</span></div><div className="relative aspect-[16/9]"><Image src="/our-work/sites/reserve-syahudaipur-com.webp" alt="Syah Udaipur reservation website shown in browser frame" fill sizes="(max-width: 1024px) 100vw, 850px" className="object-cover object-top"/></div></div></div>
            </div>
            <div className="rounded-3xl bg-[#12352e] p-8 text-white md:p-12">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e3c997]">03 / CONNECT AND ENQUIRE</span>
              <h3 className="mt-4 max-w-3xl text-3xl font-semibold md:text-4xl">From interest to a direct guest conversation</h3>
              <div className="mt-9 grid gap-4 md:grid-cols-3">
                {[{n:"01",title:"Eazotel chatbot",body:"Guests can start an on-site conversation and share their enquiry."},{n:"02",title:"Reservation form",body:"Guests choose date, party size, arrival time and menu preference."},{n:"03",title:"Restaurant follow-up",body:"The team can confirm availability and continue the conversation via WhatsApp."}].map(item=><div key={item.n} className="rounded-2xl border border-white/20 bg-white/10 p-6"><span className="text-sm font-semibold text-[#e3c997]">{item.n}</span><h4 className="mt-5 text-xl font-semibold">{item.title}</h4><p className="mt-3 text-sm leading-7 text-white/80">{item.body}</p></div>)}
              </div>
              <p className="mt-6 text-sm text-white/70">A reservation request is not a confirmed booking; confirmation remains with the restaurant.</p>
            </div>
            <div className="space-y-7">
              <div className="max-w-3xl"><span className="text-sm font-bold tracking-[0.2em] text-orange-primary">04 / MEASURE</span><h3 className="mt-3 text-3xl font-semibold text-primary2 md:text-4xl">What the Tripadvisor dashboard actually shows</h3><p className="mt-4 text-lg leading-8 text-[#55536E]">These figures come from the campaign screenshot supplied by the team. They demonstrate visibility and clicks, not verified bookings or revenue.</p></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{label:"Booked impressions",value:"42,252"},{label:"Delivered impressions",value:"4,567"},{label:"Ad clicks",value:"31"},{label:"Click-through rate",value:"0.68%"}].map(m=><div key={m.label} className="rounded-2xl border border-[#e8e2d6] bg-[#fbf8f1] p-7"><p className="text-4xl font-bold text-primary2">{m.value}</p><p className="mt-3 text-sm text-[#55536E]">{m.label}</p></div>)}</div>
              <div className="rounded-2xl border border-[#e8e2d6] p-6"><div className="mb-3 flex justify-between gap-3 text-sm font-medium text-primary2"><span>Impression delivery</span><span>4,567 of 42,252</span></div><div className="h-4 overflow-hidden rounded-full bg-[#e8e2d6]"><div className="h-full rounded-full bg-[#257a59]" style={{width:"10.81%"}}/></div><p className="mt-3 text-sm text-[#55536E]">10.8% of booked impressions delivered at the time of the screenshot. Delivery status: Awaiting Data.</p></div>
            </div>
          </article>
        </SectionWithContainer>
      )}

      <SectionWithContainer sectionClassName="">
        <div className="flex flex-col gap-10 w-full max-w-4xl">
          {data?.data?.map((item, index) => (
            <section className="flex flex-col gap-4" key={index}>
              <h2 className="text-[1.75rem]/[2.5rem] text-orange-primary">
                {item.title}
              </h2>
              {item?.description?.map((subItem, subIndex) => (
                <p className="text-[1.25rem]/[1.75rem]" key={subIndex}>
                  <span dangerouslySetInnerHTML={{ __html: subItem }} />
                </p>
              ))}
              {item?.lists && (
                <ul className="flex flex-col gap-2">
                  {item?.lists?.map((subItem, subIndex) => (
                    <li
                      className="text-[1.125rem]/[1.6rem]"
                      key={subIndex}
                      dangerouslySetInnerHTML={{ __html: subItem }}
                    />
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </SectionWithContainer>

      {others.length > 0 && (
        <SectionWithContainer sectionClassName="">
          <h2 className="mb-5 text-[1.75rem]/[2.5rem] text-primary2 font-semibold">More case studies</h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug}>
                <Link href={`/case-study/${c.slug}/`} className="flex h-full flex-col gap-2 rounded-2xl border border-[#E4E3EC] p-5 hover:border-primary2/40 transition-colors">
                  <span className="font-bold text-primary2">{c.title}</span>
                  <span className="text-sm/relaxed text-[#55536E]">{c.metaData?.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </SectionWithContainer>
      )}

      <CtaSection
        eyebrow={data.cta?.eyebrow}
        title={data.cta?.title ?? "Want results like these for your property?"}
        description={
          data.cta?.description ??
          "Talk to Fielmente about Google Ads, SEO and direct bookings for your hotel, resort or restaurant."
        }
        cta={{ label: data.cta?.label ?? "Get a Free Consultation", href: "" }}
      />
    </main>
  );
}

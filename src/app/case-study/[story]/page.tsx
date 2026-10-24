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
        <section className="bg-white">
          <Container className="py-14 md:py-20">
            <Link href="/case-study/" className="text-sm font-medium text-orange-primary hover:underline">← Case studies</Link>
            <div className="mt-8 max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-primary">Restaurant marketing case study · Fielmente × Eazotel</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-primary2 md:text-6xl">Syah Udaipur: Turning Tripadvisor discovery into direct guest enquiries</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#55536E]">How Fielmente combined Tripadvisor sponsored advertising, a dedicated reservation website and Eazotel guest engagement for an intimate six-seat restaurant in Udaipur.</p>
              <div className="mt-8 flex flex-wrap gap-3">{["Tripadvisor Advertising","Landing Page","Eazotel"].map(t=><span key={t} className="rounded-full border border-[#E4E3EC] bg-[#f8f8fb] px-4 py-2 text-sm font-medium text-primary2">{t}</span>)}</div>
            </div>
          </Container>
        </section>
      ) : (
        <div className="w-full mx-auto relative lg:aspect-[4/1.8] md:aspect-4/2 aspect-4/3.5">
          <Image src={data?.hotelImg || data.img} alt={data.hotelImgAlt ?? data.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#111609]/30 flex items-center justify-center"><Container className="md:space-y-16 space-y-5"><Link href="/case-study/" className="text-sm text-white/80">Case studies</Link><h1 className="lg:text-[2.5rem]/[3.5rem] lg:max-w-2xl text-white font-semibold text-[1.5rem]/[2.2rem]">{data?.title}</h1>{data.description && <p className="max-w-2xl text-white/90 text-base md:text-lg">{data.description}</p>}</Container></div>
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
            <div className="grid gap-7 rounded-2xl border border-[#E4E3EC] bg-white p-7 md:grid-cols-2 md:p-10">
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-orange-primary">01 / DISCOVER</span>
                <h3 className="mt-4 text-3xl font-semibold text-primary2">Visibility while diners choose where to eat</h3>
                <p className="mt-5 text-lg leading-8 text-[#55536E]">Tripadvisor sponsored placements help Syah reach travellers researching Udaipur restaurants. The campaign drives discovery; it does not imply an organic number-one ranking.</p>
              </div>
              <div className="flex items-center">
                <div className="w-full rounded-2xl border border-[#E4E3EC] bg-[#f8f8fb] p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-primary">Campaign journey infographic</p>
                  <div className="mt-6 space-y-3">{[{n:"01",t:"Tripadvisor sponsored placement"},{n:"02",t:"Visitor clicks to Syah website"},{n:"03",t:"Guest explores dining experience"},{n:"04",t:"Direct reservation enquiry"}].map(x=><div key={x.n} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"><span className="text-lg font-bold text-orange-primary">{x.n}</span><span className="font-semibold text-primary2">{x.t}</span></div>)}</div>
                  <p className="mt-5 text-xs text-[#55536E]">Illustrative guest journey; not confirmed booking attribution.</p>
                </div>
              </div>
            </div>
            <div className="space-y-7">
              <div className="max-w-3xl"><span className="text-sm font-bold tracking-[0.2em] text-orange-primary">02 / EXPERIENCE</span><h3 className="mt-3 text-3xl font-semibold text-primary2 md:text-4xl">A branded landing page, not another crowded listing</h3><p className="mt-4 text-lg leading-8 text-[#55536E]">Once guests arrive at the reservation website, Syah can tell its own story with culinary imagery, tasting-menu details and clear reservation calls to action.</p></div>
              <div className="overflow-hidden rounded-3xl border border-[#E4E3EC] bg-[#f6f2eb] p-4 md:p-8"><div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#dcd6cb] bg-white shadow-xl"><div className="flex items-center gap-2 border-b bg-[#fafafa] px-4 py-3"><span className="h-3 w-3 rounded-full bg-[#edb6ac]"/><span className="h-3 w-3 rounded-full bg-[#f3dc9c]"/><span className="h-3 w-3 rounded-full bg-[#b8d8b9]"/><span className="ml-3 truncate text-xs text-[#777]">reserve.syahudaipur.com</span></div><div className="relative"><Image src="/our-work/sites/reserve-syahudaipur-com.webp" alt="Full Syah Udaipur reservation website screenshot" width={1440} height={2400} sizes="(max-width: 1024px) 100vw, 850px" className="block h-auto w-full object-contain"/></div></div></div>
            </div>
            <div className="rounded-2xl bg-primary2 p-8 text-white md:p-12">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">03 / CONNECT AND ENQUIRE</span>
              <h3 className="mt-4 max-w-3xl text-3xl font-semibold md:text-4xl">From interest to a direct guest conversation</h3>
              <div className="mt-9 grid gap-4 md:grid-cols-3">
                {[{n:"01",title:"Eazotel chatbot",body:"Guests can start an on-site conversation and share their enquiry."},{n:"02",title:"Reservation form",body:"Guests choose date, party size, arrival time and menu preference."},{n:"03",title:"Restaurant follow-up",body:"The team can confirm availability and continue the conversation via WhatsApp."}].map(item=><div key={item.n} className="rounded-2xl border border-white/20 bg-white/10 p-6"><span className="text-sm font-semibold text-white/80">{item.n}</span><h4 className="mt-5 text-xl font-semibold">{item.title}</h4><p className="mt-3 text-sm leading-7 text-white/80">{item.body}</p></div>)}
              </div>
              <p className="mt-6 text-sm text-white/70">A reservation request is not a confirmed booking; confirmation remains with the restaurant.</p>
            </div>
            <div className="space-y-7">
              <div className="max-w-3xl"><span className="text-sm font-bold tracking-[0.2em] text-orange-primary">04 / MEASURE</span><h3 className="mt-3 text-3xl font-semibold text-primary2 md:text-4xl">What the Tripadvisor dashboard actually shows</h3><p className="mt-4 text-lg leading-8 text-[#55536E]">These figures come from the campaign screenshot supplied by the team. They demonstrate visibility and clicks, not verified bookings or revenue.</p></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{label:"Booked impressions",value:"42,252"},{label:"Delivered impressions",value:"4,567"},{label:"Ad clicks",value:"31"},{label:"Click-through rate",value:"0.68%"}].map(m=><div key={m.label} className="rounded-2xl border border-[#E4E3EC] bg-[#f8f8fb] p-7"><p className="text-4xl font-bold text-primary2">{m.value}</p><p className="mt-3 text-sm text-[#55536E]">{m.label}</p></div>)}</div>
              <div className="rounded-2xl border border-[#E4E3EC] p-6"><div className="mb-3 flex justify-between gap-3 text-sm font-medium text-primary2"><span>Impression delivery</span><span>4,567 of 42,252</span></div><div className="h-4 overflow-hidden rounded-full bg-[#e8e2d6]"><div className="h-full rounded-full bg-[#257a59]" style={{width:"10.81%"}}/></div><p className="mt-3 text-sm text-[#55536E]">10.8% of booked impressions delivered at the time of the screenshot. Delivery status: Awaiting Data.</p></div>
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

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
      <div className="w-full mx-auto relative lg:aspect-[4/1.8] md:aspect-4/2 aspect-4/3.5">
        <Image
          src={data?.hotelImg || data.img}
          alt={data.hotelImgAlt ?? data.title}
          fill
          priority
          sizes="100vw"
          className={`object-cover`}
        />
        <div className="absolute inset-0 bg-[#111609]/30 flex items-center justify-center">
          <Container className="md:space-y-16 space-y-5">
            <nav aria-label="Breadcrumb" className="text-sm text-white/80">
              <Link href="/case-study/" className="underline-offset-2 hover:underline">
                Case studies
              </Link>
            </nav>
            <h1 className="lg:text-[2.5rem]/[3.5rem] lg:max-w-2xl text-white font-semibold text-[1.5rem]/[2.2rem]">
              {data?.title}
            </h1>
            {data.description && (
              <p className="max-w-2xl text-white/90 text-base md:text-lg">{data.description}</p>
            )}
          </Container>
        </div>
      </div>

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
          <div className="mx-auto max-w-6xl space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-primary">Campaign visual story</p>
              <h2 className="mt-2 text-3xl font-semibold text-primary2">From Tripadvisor discovery to a direct reservation request</h2>
              <p className="mt-3 max-w-3xl text-[#55536E]">A connected guest journey designed for Syah Udaipur. This is a process infographic, not a report of confirmed reservations.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {[
                { step: "01", title: "Tripadvisor sponsored ad", body: "Diners discover Syah while comparing Udaipur restaurants.", icon: "↗" },
                { step: "02", title: "Syah reservation website", body: "The branded page introduces the tasting-menu experience.", icon: "⌂" },
                { step: "03", title: "Eazotel guest engagement", body: "Chatbot and WhatsApp help guests start a conversation.", icon: "◉" },
                { step: "04", title: "Reservation request", body: "Guests submit preferences; the restaurant confirms availability.", icon: "✓" },
              ].map((item) => (
                <div key={item.step} className="relative rounded-2xl border border-[#e8e2d6] bg-[#fcfaf6] p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between"><span className="text-sm font-semibold tracking-widest text-orange-primary">{item.step}</span><span className="text-3xl text-primary2" aria-hidden="true">{item.icon}</span></div>
                  <h3 className="text-xl font-semibold text-primary2">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#55536E]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-[#e8e2d6] bg-white shadow-sm">
                <div className="relative aspect-[16/10]"><Image src="/our-work/sites/reserve-syahudaipur-com.webp" alt="Actual Syah Udaipur reservation website screenshot" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
                <figcaption className="p-5 text-sm text-[#55536E]"><strong className="text-primary2">Syah's real reservation website</strong> — the branded destination used to explain the dining experience and invite reservation enquiries.</figcaption>
              </figure>
              <div className="rounded-2xl bg-[#12352e] p-7 text-white shadow-sm">
                <p className="text-sm uppercase tracking-widest text-[#d7c49a]">Tripadvisor campaign snapshot</p>
                <h3 className="mt-2 text-2xl font-semibold">Paid discovery, measured</h3>
                <div className="mt-7 grid grid-cols-2 gap-4">
                  {[{label:"Booked impressions",value:"42,252"},{label:"Delivered impressions",value:"4,567"},{label:"Ad clicks",value:"31"},{label:"Click-through rate",value:"0.68%"}].map((metric)=><div key={metric.label} className="rounded-xl border border-white/20 bg-white/10 p-4"><div className="text-3xl font-bold">{metric.value}</div><div className="mt-2 text-sm text-white/80">{metric.label}</div></div>)}
                </div>
                <p className="mt-6 text-sm leading-6 text-white/75">Figures from the supplied advertising dashboard. Clicks do not represent verified enquiries or confirmed bookings.</p>
              </div>
            </div>
          </div>
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

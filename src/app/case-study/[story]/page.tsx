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
    openGraph: { title, description, url, siteName: "Fielmente", locale: "en_IN", type: "article", images: [{ url: image, width: 1200, height: 630, alt: data.title }] },
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
  const others = casStudiesData.filter((c) => c.slug !== data.slug && c.data?.length).slice(0, 3);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.metaData?.description || data.description,
    url,
    mainEntityOfPage: url,
    image: `${SITE}${data.hotelImg && data.hotelImg !== "/banner.jpg" ? data.hotelImg : data.img}`,
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
          alt=""
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

      {kpis.length > 0 && (
        <SectionWithContainer sectionClassName="">
          <h2 className="mb-5 text-[1.75rem]/[2.5rem] text-primary2 font-semibold">Results at a glance</h2>
          <CaseStudyKpis kpis={kpis} />
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

      <SectionWithContainer sectionClassName="">
        <div className="flex flex-col gap-10 w-full max-w-4xl">
          {data?.data?.map((item, index) => (
            <section className="flex flex-col gap-4" key={index}>
              <h2 className="text-[1.75rem]/[2.5rem] text-orange-primary">
                {item.title}
              </h2>
              {item?.description?.map((subItem, subIndex) => (
                <p className="text-[1.25rem]/[1.75rem]" key={subIndex}>
                  {subItem}
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
        title="Want results like these for your property?"
        description="Talk to Fielmente about Google Ads, SEO and direct bookings for your hotel, resort or restaurant."
        cta={{ label: "Get a Free Consultation", href: "" }}
      />
    </main>
  );
}

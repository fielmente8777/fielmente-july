import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import { hotelAdsGuides, hotelAdsGuideBySlug, HOTEL_ADS_GUIDE_HUB } from "@/lib/hotelAdsGuides";

const SITE = "https://fielmente.com";
type Props = { params: Promise<{ slug: string }> };
const published = "2026-11-08";

export function generateStaticParams() {
  return hotelAdsGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = hotelAdsGuideBySlug.get(slug);
  if (!guide) return { title: "Guide not found" };
  const url = HOTEL_ADS_GUIDE_HUB + guide.slug + "/";
  const image = SITE + "/images/blog/hotel-ads-series/" + guide.slug + ".svg";
  return {
    title: guide.title + " | Fielmente",
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, url, type: "article",
      siteName: "Fielmente", locale: "en_IN", publishedTime: published,
      images: [{ url: image, width: 1200, height: 675, alt: guide.title }] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [image] },
    robots: { index: true, follow: true },
  };
}

export default async function HotelAdsGuide({ params }: Props) {
  const { slug } = await params;
  const guide = hotelAdsGuideBySlug.get(slug);
  if (!guide) notFound();
  const url = HOTEL_ADS_GUIDE_HUB + guide.slug + "/";
  const image = "/images/blog/hotel-ads-series/" + guide.slug + ".svg";
  const at = hotelAdsGuides.findIndex((x) => x.slug === slug);
  const prev = at > 0 ? hotelAdsGuides[at - 1] : undefined;
  const next = at < hotelAdsGuides.length - 1 ? hotelAdsGuides[at + 1] : undefined;
  const related = hotelAdsGuides.filter((x) => x.category === guide.category && x.slug !== guide.slug).slice(0, 3);
  const count = guide.intro.join(" ").split(/\s+/).length +
    guide.sections.reduce((n, x) => n + x.body.join(" ").split(/\s+/).length + x.checklist.join(" ").split(/\s+/).length, 0) +
    guide.mistakes.join(" ").split(/\s+/).length + guide.faqs.reduce((n, x) => n + x.a.split(/\s+/).length, 0);
  const readMinutes = Math.max(4, Math.ceil(count / 200));
  const articleLd = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: guide.title, description: guide.description, mainEntityOfPage: url, url,
    image: SITE + image, datePublished: published, dateModified: published, inLanguage: "en-IN",
    author: { "@type": "Organization", name: "Fielmente", url: SITE },
    publisher: { "@type": "Organization", name: "Fielmente", url: SITE,
      logo: { "@type": "ImageObject", url: SITE + "/fielmente_logo.png" } },
    articleSection: guide.category, keywords: guide.primary,
  };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({ "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: SITE + "/blogs/" },
      { "@type": "ListItem", position: 3, name: "Hotel Ads Guides", item: HOTEL_ADS_GUIDE_HUB },
      { "@type": "ListItem", position: 4, name: guide.title, item: url },
    ] };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <header className="relative overflow-hidden bg-primary2 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(740px_460px_at_90%_-5%,rgba(242,102,51,0.25),transparent_65%),radial-gradient(620px_450px_at_-10%_115%,rgba(13,84,235,0.27),transparent_65%)]" />
      <Container className="relative pb-16 pt-32 md:pb-24 md:pt-40">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60">
          <Link href="/" className="hover:text-white">Home</Link><span>/</span>
          <Link href="/blogs/" className="hover:text-white">Blogs</Link><span>/</span>
          <Link href="/google-hotel-ads-guides/" className="hover:text-white">Hotel Ads Guides</Link>
        </nav>
        <p className="mt-6 inline-flex rounded-full border border-[#F26633]/50 bg-[#F26633]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#FFC0A8]">{guide.category} · Step-by-step 2026 guide</p>
        <h1 className="mt-5 max-w-5xl text-3xl font-bold leading-[1.13] tracking-tight md:text-5xl">{guide.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{guide.description}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70"><span>Fielmente Team</span><span>8 November 2026</span><span>{readMinutes} min read</span></div>
      </Container>
    </header>

    <Container className="pb-20">
      <figure className="mt-8 overflow-hidden rounded-3xl border border-[#E6E4EF] bg-primary2 shadow-[0_20px_70px_-35px_rgba(17,13,60,0.35)]">
        <Image src={image} width={1200} height={675} priority alt={"Visual flow diagram: " + guide.flow.join(" to ")} className="h-auto w-full" />
        <figcaption className="border-t border-[#E6E4EF] bg-white px-5 py-3 text-sm text-[#566073]">Fielmente infographic: {guide.flow.join(" → ")}</figcaption>
      </figure>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          <div className="space-y-5 text-[17px] leading-8 text-[#3E4658]">
            {guide.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <section className="mt-11 rounded-3xl border border-[#E7E6F0] bg-[#F9F9FD] p-5 md:p-7">
            <h2 className="text-2xl font-bold text-primary2">The process at a glance</h2>
            <p className="mt-2 text-sm leading-7 text-[#556071]">Use this visual workflow to identify which platform, owner or reporting layer comes next.</p>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {guide.flow.map((stage, i) => <li key={stage} className="flex items-start gap-3 rounded-2xl border border-[#DFE5F3] bg-white p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0D54EB] text-sm font-bold text-white">{i + 1}</span>
                <span className="pt-1 font-semibold leading-6 text-primary2">{stage}</span>
              </li>)}
            </ol>
          </section>

          <div className="mt-12 space-y-14">
            {guide.sections.map((section, i) => <section id={"step-" + (i + 1)} key={section.heading} className="scroll-mt-28">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E7] font-bold text-[#B5461A]">{i + 1}</span>
                <h2 className="text-2xl font-bold leading-tight text-primary2 md:text-[28px]">{section.heading}</h2>
              </div>
              <div className="mt-5 space-y-4 text-[16px] leading-8 text-[#3F4759]">
                {section.body.map((para, p) => <p key={p}>{para}</p>)}
              </div>
              <div className="mt-6 rounded-2xl border border-[#DCE6F8] bg-[#F5F8FF] p-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-[#0D54EB]">Practical checklist</h3>
                <ul className="mt-3 space-y-3">
                  {section.checklist.map((line) => <li key={line} className="flex items-start gap-3 text-[15px] leading-7 text-[#404B61]">
                    <span aria-hidden="true" className="mt-0.5 font-bold text-[#1B8A4D]">✓</span><span>{line}</span>
                  </li>)}
                </ul>
              </div>
            </section>)}
          </div>

          <section className="mt-14 scroll-mt-28" id="mistakes">
            <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Common mistakes to avoid</h2>
            <ul className="mt-6 space-y-3">
              {guide.mistakes.map((m) => <li key={m} className="flex items-start gap-3 rounded-2xl border border-[#F5D6C2] bg-[#FFF9F5] px-4 py-4 text-[16px] leading-7 text-[#4B4B55]"><span aria-hidden="true" className="font-bold text-[#B5461A]">!</span><span>{m}</span></li>)}
            </ul>
          </section>

          <section className="mt-14 scroll-mt-28" id="faqs">
            <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-[#E6E4EF] overflow-hidden rounded-2xl border border-[#E6E4EF]">
              {guide.faqs.map((f) => <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary2">{f.q}<span aria-hidden="true" className="text-xl text-[#F26633]">+</span></summary>
                <p className="mt-3 text-[15px] leading-7 text-[#535D6E]">{f.a}</p>
              </details>)}
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-[#E6E4EF] bg-[#FAFAFD] p-5" id="references">
            <h2 className="text-lg font-bold text-primary2">Official Google resources</h2>
            <p className="mt-2 text-sm leading-6 text-[#596476]">This guide uses Google&apos;s product documentation. Interface labels and eligibility can change; verify them in the connected account.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
              {guide.sources.map((url, i) => <li key={url}><a className="font-medium text-[#0D54EB] underline" href={url} target="_blank" rel="noopener noreferrer">Google help reference {i + 1}</a></li>)}
            </ul>
          </section>

          <div className="mt-10 rounded-2xl border border-[#E6E4EF] p-6">
            <h2 className="text-xl font-bold text-primary2">Continue learning</h2>
            <p className="mt-2 text-sm leading-7 text-[#556071]">The complete series links connectivity, campaigns and the commercial direct-booking journey.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {prev && <Link className="rounded-full border border-[#D7DDE8] px-4 py-2 text-sm font-semibold text-[#0D54EB]" href={"/google-hotel-ads-guides/" + prev.slug + "/"}>← Previous guide</Link>}
              <Link className="rounded-full border border-[#D7DDE8] px-4 py-2 text-sm font-semibold text-[#0D54EB]" href="/google-hotel-ads-guides/">All 25 guides</Link>
              {next && <Link className="rounded-full border border-[#D7DDE8] px-4 py-2 text-sm font-semibold text-[#0D54EB]" href={"/google-hotel-ads-guides/" + next.slug + "/"}>Next guide →</Link>}
            </div>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <nav className="rounded-2xl border border-[#E6E4EF] bg-[#FAFAFD] p-5" aria-label="Article sections">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6C7482]">In this guide</p>
              {guide.sections.map((s, i) => <a key={s.heading} href={"#step-" + (i + 1)} className="block rounded-lg px-2 py-2 text-sm leading-6 text-[#4A5368] hover:bg-white hover:text-[#0D54EB]">{i + 1}. {s.heading}</a>)}
              <a href="#mistakes" className="block rounded-lg px-2 py-2 text-sm text-[#4A5368] hover:bg-white hover:text-[#0D54EB]">Common mistakes</a>
              <a href="#faqs" className="block rounded-lg px-2 py-2 text-sm text-[#4A5368] hover:bg-white hover:text-[#0D54EB]">FAQs</a>
            </nav>
            <div className="rounded-2xl bg-primary2 p-6 text-white">
              <h2 className="text-lg font-bold">Need help with your hotel&apos;s Google setup?</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">Fielmente supports Google Hotel Ads, Hotel Center setup, campaign tracking and direct booking strategy.</p>
              <div className="mt-5"><CtaBtn label="Request a Consultation" type="button" className="rounded-full border-none bg-orange-primary text-white" /></div>
            </div>
            <div className="rounded-2xl border border-[#E6E4EF] p-5">
              <h2 className="font-bold text-primary2">Related guides</h2>
              <ul className="mt-3 space-y-3">{related.map((g) => <li key={g.slug}><Link className="text-sm font-medium leading-6 text-[#0D54EB] hover:underline" href={"/google-hotel-ads-guides/" + g.slug + "/"}>{g.title}</Link></li>)}</ul>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-16 rounded-3xl bg-primary2 p-8 text-white md:flex md:items-center md:justify-between md:gap-10 md:p-12">
        <div><h2 className="text-2xl font-bold md:text-3xl">Turn technical hotel setup into measurable direct bookings.</h2><p className="mt-3 max-w-2xl leading-7 text-white/75">Explore Fielmente&apos;s Google Hotel Center and Hotel Ads services for your hotel or portfolio.</p></div>
        <div className="mt-6 shrink-0 md:mt-0"><Link href="/google-hotel-ads-agency/" className="inline-flex rounded-full bg-orange-primary px-6 py-3 font-semibold text-white hover:bg-[#D95124]">View Hotel Ads Services</Link></div>
      </div>
    </Container>
  </main>;
}

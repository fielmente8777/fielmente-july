import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components";
import { hotelAdsGuides, HOTEL_ADS_GUIDE_HUB } from "@/lib/hotelAdsGuides";

const SITE = "https://fielmente.com";
export const metadata: Metadata = {
  title: "Google Hotel Ads & Hotel Center Guides: 25 Tutorials | Fielmente",
  description: "Explore 25 practical Google Hotel Center, Hotel Ads, booking engine and hotel direct booking guides with diagrams, setup steps and troubleshooting tips.",
  alternates: { canonical: HOTEL_ADS_GUIDE_HUB },
  openGraph: { title: "Google Hotel Ads & Hotel Center Knowledge Hub | Fielmente",
    description: "25 practical hotel tech and performance marketing guides for owners and revenue managers.",
    url: HOTEL_ADS_GUIDE_HUB, siteName: "Fielmente", type: "website", locale: "en_IN",
    images: [{ url: "/images/blog/hotel-ads-series/google-hotel-center-setup-guide-2026.svg", width: 1200, height: 675 }] },
  robots: { index: true, follow: true },
};

const categories = [
  { name: "Connectivity", summary: "Hotel Center setup, hotel prices, feeds, property matching and channel integrations." },
  { name: "Campaigns", summary: "Google Hotel Ads campaigns, Performance Max travel goals, tracking, bidding and troubleshooting." },
  { name: "Direct Bookings", summary: "Hotel revenue, OTAs, landing pages, free links, WhatsApp and CRM workflows." },
] as const;

export default function HotelAdsGuidesHub() {
  const itemList = { "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Google Hotel Ads & Hotel Center Knowledge Hub", description: metadata.description,
    url: HOTEL_ADS_GUIDE_HUB, isPartOf: { "@type": "WebSite", name: "Fielmente", url: SITE },
    mainEntity: { "@type": "ItemList", itemListElement: hotelAdsGuides.map((guide, i) => ({
      "@type": "ListItem", position: i + 1, name: guide.title,
      url: HOTEL_ADS_GUIDE_HUB + guide.slug + "/",
    })) } };
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: SITE + "/blogs/" },
      { "@type": "ListItem", position: 3, name: "Google Hotel Ads Guides", item: HOTEL_ADS_GUIDE_HUB },
    ] };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    <header className="relative overflow-hidden bg-primary2 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_450px_at_88%_-10%,rgba(242,102,51,0.32),transparent_66%),radial-gradient(700px_550px_at_-5%_105%,rgba(13,84,235,0.3),transparent_70%)]" />
      <Container className="relative pb-16 pt-32 md:pb-24 md:pt-40">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/65">
          <Link href="/" className="hover:text-white">Home</Link><span>/</span>
          <Link href="/blogs/" className="hover:text-white">Blog</Link><span>/</span>
          <span className="text-white">Google Hotel Ads Guides</span>
        </nav>
        <span className="mt-7 inline-flex rounded-full border border-orange-primary/60 bg-orange-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#FFC6AC]">Fielmente Hotel Technology Knowledge Hub</span>
        <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">Google Hotel Center &amp; Hotel Ads: 25 Practical Guides</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
          From booking engine connectivity and free hotel booking links to advertising, analytics and direct-booking revenue. Every guide includes actionable steps, a visual workflow and official Google documentation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a href="#all-guides" className="rounded-full bg-orange-primary px-6 py-3 font-bold text-white hover:bg-[#D95124]">Explore all 25 guides</a>
          <Link href="/google-hotel-center-google-ads-data-manager-guide/" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">Start with Data Manager linking</Link>
        </div>
      </Container>
    </header>

    <Container className="py-14 md:py-20">
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((cat) => {
          const count = hotelAdsGuides.filter((guide) => guide.category === cat.name).length;
          return <a key={cat.name} href={"#section-" + cat.name.toLowerCase().replace(/[^a-z]+/g, "-")}
            className="rounded-2xl border border-[#E4E3ED] bg-[#FAF9FD] p-6 transition hover:border-[#F26633] hover:shadow-md">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#B5461A]">{count} tutorials</p>
            <h2 className="mt-2 text-xl font-bold text-primary2">{cat.name}</h2>
            <p className="mt-3 text-sm leading-7 text-[#556071]">{cat.summary}</p>
            <span className="mt-3 inline-flex font-semibold text-[#0D54EB]">Explore guides →</span>
          </a>;
        })}
      </div>

      <section className="mt-14 rounded-2xl border border-[#F5D4BF] bg-[#FFF6EF] p-6 md:p-8">
        <h2 className="text-xl font-bold text-primary2">An important 2026 change for hotel advertisers</h2>
        <p className="mt-3 text-[16px] leading-8 text-[#51596A]">
          Google&apos;s third-party hotel rates feature for Hotel Ads inventory ended after 30 September 2026. Hotels seeking eligible Hotel Ads placement now need an appropriate direct rate feed through Hotel Center and/or an integration partner. Check pricing and landing-page eligibility before making campaign promises.
        </p>
        <a href="https://support.google.com/hotelprices/answer/14310302?hl=en" className="mt-3 inline-flex font-semibold text-[#0D54EB] underline" rel="noopener noreferrer" target="_blank">Read Google&apos;s policy notice</a>
      </section>

      <div id="all-guides" className="mt-16 space-y-16">
        {categories.map((cat) => <section id={"section-" + cat.name.toLowerCase().replace(/[^a-z]+/g, "-")} key={cat.name}>
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#E4E3ED] pb-5">
            <div><h2 className="text-3xl font-bold text-primary2">{cat.name}</h2><p className="mt-2 max-w-3xl text-[#5C6577]">{cat.summary}</p></div>
            <span className="text-sm font-semibold text-[#6E7483]">{hotelAdsGuides.filter((x) => x.category === cat.name).length} articles</span>
          </div>
          <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {hotelAdsGuides.filter((x) => x.category === cat.name).map((guide) =>
              <article key={guide.slug} className="group relative flex h-full flex-col">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#E8E7F0] bg-primary2">
                  <Image src={"/images/blog/hotel-ads-series/" + guide.slug + ".svg"} alt={"Infographic: " + guide.title} width={1200} height={675}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#B5461A]">{guide.category}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-primary2">
                  <Link href={"/google-hotel-ads-guides/" + guide.slug + "/"} className="after:absolute after:inset-0 hover:text-[#0D54EB]">{guide.title}</Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-7 text-[#566071]">{guide.description}</p>
                <p className="mt-auto pt-3 text-sm font-semibold text-[#0D54EB]">Read guide →</p>
              </article>)}
          </div>
        </section>)}
      </div>

      <section className="mt-20 rounded-3xl bg-primary2 p-8 text-white md:p-12">
        <h2 className="text-3xl font-bold">Need help making hotel connectivity and ads work together?</h2>
        <p className="mt-4 max-w-3xl leading-8 text-white/80">Fielmente works across hotel advertising, feed readiness, measurement and direct booking strategy. Read our service pages or discuss an audit for your property.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-orange-primary px-5 py-3 font-semibold text-white" href="/google-hotel-ads-agency/">Google Hotel Ads services</Link>
          <Link className="rounded-full border border-white/40 px-5 py-3 font-semibold text-white" href="/google-hotel-center/">Hotel Center services</Link>
        </div>
      </section>
    </Container>
  </main>;
}

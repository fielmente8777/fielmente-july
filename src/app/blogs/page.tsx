import { Container } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import { BLOG_TOPICS } from "@/utils/blogMeta";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "./components/BlogCard";
import { blogCards, blogPageCount, blogPageSlice, blogPageStart } from "./components/pageData";

const SITE = "https://fielmente.com";
const BLOG_TITLE = "Hotel & Restaurant Marketing Blog | Fielmente";
const BLOG_DESCRIPTION =
  "Hospitality marketing guides for hotels, resorts and restaurants, covering SEO, Google Ads, social media, WhatsApp and AI search. Read the Fielmente blog.";

type BlogsSearchParams = Promise<{ page?: string; topic?: string }>;

/** /blogs/, /blogs/?page=N, /blogs/?topic=x and /blogs/?topic=x&page=N; each page is canonical to itself. */
function listUrl(page: number, topic?: string, absolute = false) {
  const q = new URLSearchParams();
  if (topic) q.set("topic", topic);
  if (page > 1) q.set("page", String(page));
  const qs = q.toString();
  const path = `/blogs/${qs ? `?${qs}` : ""}`;
  return absolute ? `${SITE}${path}` : path;
}

function resolve(params: { page?: string; topic?: string }) {
  const topic = BLOG_TOPICS.find((t) => t.slug === params.topic);
  const cards = topic ? blogCards.filter((c) => c.topic === topic.slug) : blogCards;
  const page = Math.max(1, Number(params.page) || 1);
  const totalPages = blogPageCount(cards.length);
  const valid =
    (params.topic === undefined || !!topic) &&
    (params.page === undefined || /^\d+$/.test(params.page)) &&
    page <= totalPages;
  return { topic, cards, page, totalPages, valid };
}

export async function generateMetadata({ searchParams }: { searchParams: BlogsSearchParams }): Promise<Metadata> {
  const { topic, page } = resolve(await searchParams);
  const base = topic ? `${topic.label} Articles` : "Hospitality Marketing Blog";
  const title = topic || page > 1 ? `${base}${page > 1 ? `, Page ${page}` : ""} | Fielmente` : BLOG_TITLE;
  const description = topic
    ? `Fielmente guides on ${topic.label.toLowerCase()} for hotels, resorts and restaurants.${page > 1 ? ` Page ${page}.` : ""}`
    : page > 1
      ? `${BLOG_DESCRIPTION.replace(" Read the Fielmente blog.", "")} Page ${page}.`
      : BLOG_DESCRIPTION;
  const url = listUrl(page, topic?.slug, true);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [{ url: "/images/blog/bnr.png", width: 1200, height: 630 }],
    },
  };
}

/** A truncated page list like [1, "...", 4, 5, 6, "...", 9]. */
function getPaginationRange(current: number, total: number): (number | "...")[] {
  const range: (number | "...")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) range.push("...");
  for (let i = start; i <= end; i++) range.push(i);
  if (end < total - 1) range.push("...");
  if (total > 1) range.push(total);
  return range;
}

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
);

export default async function Blogs({ searchParams }: { searchParams: BlogsSearchParams }) {
  const { topic, cards, page, totalPages, valid } = resolve(await searchParams);
  // An unknown topic or a page number past the last page is a real 404, not a copy of another page.
  if (!valid) notFound();

  const visible = blogPageSlice(cards, page);
  const startIndex = blogPageStart(page);
  const [featured, ...rest] = page === 1 ? visible : [undefined, ...visible];
  const paginationRange = getPaginationRange(page, totalPages);
  const heading = topic ? topic.label : "Hospitality Marketing Blog";

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page > 1 ? `${heading}, Page ${page}` : heading,
    url: listUrl(page, topic?.slug, true),
    description: BLOG_DESCRIPTION,
    isPartOf: {
      "@type": "Blog",
      name: "Fielmente Blog",
      url: listUrl(1, undefined, true),
      publisher: { "@type": "Organization", name: "Fielmente", url: `${SITE}/` },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: visible.map((card, i) => ({
        "@type": "ListItem",
        position: startIndex + i + 1,
        url: `${SITE}/${card.slug}/`,
        name: card.title,
      })),
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: listUrl(1, undefined, true) },
      ...(topic ? [{ "@type": "ListItem", position: 3, name: topic.label, item: listUrl(1, topic.slug, true) }] : []),
      ...(page > 1
        ? [{ "@type": "ListItem", position: topic ? 4 : 3, name: `Page ${page}`, item: listUrl(page, topic?.slug, true) }]
        : []),
    ],
  };

  const chips = [
    { slug: undefined, label: "All articles", count: blogCards.length },
    ...BLOG_TOPICS.map((t) => ({ slug: t.slug, label: t.label, count: blogCards.filter((c) => c.topic === t.slug).length })),
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero: dark brand band under the transparent header */}
      <section className="relative overflow-hidden bg-primary2 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(700px_420px_at_88%_-10%,rgba(242,102,51,0.28),transparent_65%),radial-gradient(800px_520px_at_-5%_110%,rgba(13,84,235,0.35),transparent_62%)]"
        />
        <Container className="relative pb-12 pt-32 md:pb-16 md:pt-40">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blogs/" className={topic ? "hover:text-white" : "text-white"}>Blog</Link>
            {topic && (
              <>
                <span aria-hidden="true">/</span>
                <span className="text-white">{topic.label}</span>
              </>
            )}
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            {heading}
            {page > 1 && <span className="text-white/50">: Page {page}</span>}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Practical guides on SEO, Google and Meta ads, ChatGPT ads, WhatsApp and AI sales for hotels, resorts and
            restaurants, from the team behind 500+ hospitality brands.
          </p>
          <nav aria-label="Blog topics" className="-mx-5 mt-10 overflow-x-auto px-5 md:mx-0 md:px-0">
            <ul className="flex w-max gap-2 md:w-auto md:flex-wrap">
              {chips.map((c) => {
                const active = c.slug === topic?.slug;
                return (
                  <li key={c.label}>
                    <Link
                      href={listUrl(1, c.slug)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                        active
                          ? "border-white bg-white text-primary2"
                          : "border-white/20 text-white/85 hover:border-white/50 hover:bg-white/10"
                      }`}
                    >
                      {c.label}
                      <span className={active ? "text-primary2/60" : "text-white/50"}>{c.count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        {featured && (
          <div className="mb-14">
            <BlogCard {...featured} featured />
          </div>
        )}

        <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#E6E4EF] pb-4">
          <h2 className="text-2xl font-bold text-primary2 md:text-3xl">
            {page === 1 ? (topic ? `More on ${topic.label}` : "Latest articles") : `Articles, page ${page}`}
          </h2>
          <p className="shrink-0 text-sm text-[#5F6776]">
            {cards.length} articles · page {page} of {totalPages}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((card) => card && <BlogCard key={card.slug} {...card} as="h3" />)}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Blog pages" className="mt-16 flex flex-wrap items-center justify-center gap-2">
            <Link
              href={page > 1 ? listUrl(page - 1, topic?.slug) : "#"}
              aria-disabled={page === 1}
              rel="prev"
              className={`flex h-11 items-center gap-1 rounded-full border border-main-border px-4 text-sm font-medium transition ${
                page === 1 ? "pointer-events-none opacity-40" : "hover:border-primary2 hover:bg-primary2 hover:text-white"
              }`}
            >
              <Chevron dir="left" /> Previous
            </Link>
            {paginationRange.map((item, idx) =>
              item === "..." ? (
                <span key={`dots-${idx}`} className="flex h-11 w-8 select-none items-center justify-center text-[#9AA0AC]">
                  …
                </span>
              ) : (
                <Link
                  key={item}
                  href={listUrl(item, topic?.slug)}
                  aria-current={page === item ? "page" : undefined}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    page === item
                      ? "border-primary2 bg-primary2 text-white"
                      : "border-main-border hover:border-primary2 hover:bg-primary2 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              )
            )}
            <Link
              href={page < totalPages ? listUrl(page + 1, topic?.slug) : "#"}
              aria-disabled={page === totalPages}
              rel="next"
              className={`flex h-11 items-center gap-1 rounded-full border border-main-border px-4 text-sm font-medium transition ${
                page === totalPages ? "pointer-events-none opacity-40" : "hover:border-primary2 hover:bg-primary2 hover:text-white"
              }`}
            >
              Next <Chevron dir="right" />
            </Link>
          </nav>
        )}
      </Container>

      {/* Closing call to action */}
      <Container className="pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary2 px-6 py-10 text-white md:px-12 md:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(520px_320px_at_100%_0%,rgba(242,102,51,0.35),transparent_65%)]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold md:text-3xl">Want these ideas working for your property?</h2>
              <p className="mt-3 text-white/75 md:text-lg">
                Get a free marketing audit of your website, Google profile and ads from the Fielmente team.
              </p>
            </div>
            <CtaBtn
              type="button"
              label="Get My Free Audit"
              className="rounded-full border-none bg-orange-primary text-white md:text-lg"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

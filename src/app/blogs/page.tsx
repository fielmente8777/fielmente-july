import { Section, SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import { blogPageData, BLOGS_PER_PAGE } from "./components/pageData";
import BlogCard from "./components/BlogCard";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_TITLE = "Hotel & Restaurant Marketing Blog | Fielmente";
const BLOG_DESCRIPTION =
  "Hospitality marketing guides for hotels, resorts and restaurants, covering SEO, Google Ads, social media, WhatsApp and AI search. Read the Fielmente blog.";

type BlogsSearchParams = Promise<{ page?: string }>;

/** Page 1 lives at /blogs/; later pages at /blogs/?page=N, each canonical to itself. */
function pageUrl(page: number) {
  return page <= 1 ? "https://fielmente.com/blogs/" : `https://fielmente.com/blogs/?page=${page}`;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: BlogsSearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const title = page > 1 ? `Hospitality Marketing Blog, Page ${page} | Fielmente` : BLOG_TITLE;
  const description = page > 1 ? `${BLOG_DESCRIPTION.replace(" Read the Fielmente blog.", "")} Page ${page}.` : BLOG_DESCRIPTION;
  return {
    title,
    description,
    alternates: { canonical: pageUrl(page) },
    openGraph: {
      title,
      description,
      url: pageUrl(page),
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [{ url: "/images/blog/bnr.png", width: 1200, height: 630 }],
    },
  };
}

// Builds a truncated page list like [1, "...", 4, 5, 6, "...", 9]
function getPaginationRange(
  current: number,
  total: number
): (number | "...")[] {
  const delta = 1; // pages shown immediately around current
  const range: (number | "...")[] = [];

  const start = Math.max(2, current - delta);
  const end = Math.min(total - 1, current + delta);

  range.push(1);

  if (start > 2) range.push("...");

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  if (end < total - 1) range.push("...");

  if (total > 1) range.push(total);

  return range;
}

export default async function Blogs({
  searchParams,
}: {
  searchParams: BlogsSearchParams;
}) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);

  const totalBlogs = blogPageData.blogs.cards.length;

  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);

  // A page number past the last page is a real 404, not a copy of the last page.
  if (currentPage > totalPages || (params.page !== undefined && !/^\d+$/.test(params.page))) {
    notFound();
  }
  const page = currentPage;

  const startIndex = (page - 1) * BLOGS_PER_PAGE;

  const visibleBlogs = blogPageData.blogs.cards.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const paginationRange = getPaginationRange(page, totalPages);

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page > 1 ? `Hospitality Marketing Blog, Page ${page}` : "Hospitality Marketing Blog",
    url: pageUrl(page),
    description: BLOG_DESCRIPTION,
    isPartOf: { "@type": "Blog", name: "Fielmente Blog", url: pageUrl(1), publisher: { "@type": "Organization", name: "Fielmente", url: "https://fielmente.com/" } },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: visibleBlogs.map((card, i) => ({
        "@type": "ListItem",
        position: startIndex + i + 1,
        url: `https://fielmente.com/${card.slug}/`,
        name: card.title,
      })),
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fielmente.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl(1) },
      ...(page > 1 ? [{ "@type": "ListItem", position: 3, name: `Page ${page}`, item: pageUrl(page) }] : []),
    ],
  };

  return (
    <main className="md:mt-22 mt-23">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Section
        defaultPadding={false}
        className="w-full relative xl:aspect-[4/.935] lg:aspect-[4/.89] md:aspect-4/1.5 aspect-4/1.75 border"
      >
        <Image
          src="/images/blog/bnr.png"
          alt="Laptop showing a hotel website next to a coffee cup"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-30% from-black/40 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <SectionHeading
            // The H1 names the page (and its page number), instead of "EXPLORE OUR BLOGS" on all 21 pages.
            title={page > 1 ? `Hospitality Marketing Blog: Page ${page}` : "Hospitality Marketing Blog"}
            subTitle={blogPageData.bannerData.subTitle}
            titleColor="white"
            subTitleColor="white"
            subTitleClassName="span-color-2"
            level={1}
            textCenter
            wrapperClassName="gap-4 max-w-md"
            icon={false}
          />
        </div>
      </Section>
      <SectionWithContainer>
        <SectionHeading
          title={blogPageData.blogs.title}
          subTitle={blogPageData.blogs.subTitle}
          subTitleClassName="span-color-2"
        />

        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
          {visibleBlogs.map((card, index) => (
            <BlogCard key={index} {...card} />
          ))}
        </div>

        {/* Pagination — bottom right */}
        {totalPages > 1 && (
          <div className="flex justify-end items-center gap-2 mt-12">
            {/* Previous */}
            <Link
              href={page > 2 ? `/blogs/?page=${page - 1}` : page === 2 ? "/blogs/" : "#"}
              aria-disabled={page === 1}
              aria-label="Previous page of blog posts"
              rel="prev"
              className={`w-10 h-10 rounded-full border border-main-border flex items-center justify-center transition ${
                page === 1
                  ? "opacity-40 pointer-events-none"
                  : "hover:bg-color4 hover:text-white"
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>

            {/* Page Numbers with ellipsis */}
            {paginationRange.map((item, idx) =>
              item === "..." ? (
                <span
                  key={`dots-${idx}`}
                  className="w-10 h-10 flex items-center justify-center text-main-border select-none"
                >
                  ...
                </span>
              ) : (
                <Link
                  key={item}
                  href={item === 1 ? "/blogs/" : `/blogs/?page=${item}`}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                    page === item
                      ? "bg-secondary text-white border-main-border"
                      : "border-main-border hover:bg-color4 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              )
            )}

            {/* Next */}
            <Link
              href={page < totalPages ? `/blogs/?page=${page + 1}` : "#"}
              aria-disabled={page === totalPages}
              aria-label="Next page of blog posts"
              rel="next"
              className={`w-10 h-10 rounded-full border border-main-border flex items-center justify-center transition ${
                page === totalPages
                  ? "opacity-40 pointer-events-none"
                  : "hover:bg-color4 hover:text-white"
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        )}
      </SectionWithContainer>
    </main>
  );
}

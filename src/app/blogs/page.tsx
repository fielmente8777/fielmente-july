import { Section, SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import { blogPageData } from "./components/pageData";
import BlogCard from "./components/BlogCard";
import { Metadata } from "next";
import Link from "next/dist/client/link";

export const metadata: Metadata = {
  title: "Blogs - Fielmente",
  description:
    "Another milestone in Fielmente’s journey 8 Marketing Strategies for Food &amp; Beverage Industry to Plan in 2022 How SEO helps to boost restaurant business Top 3 Food &amp; Beverage Business Pitches on Shark Tank India Restaurant Marketing in the MetaVerse – Web 3.0 Facebook Twitter LinkedIn Blogs Fielmente",
  alternates: {
    canonical: "https://fielmente.com/blogs/",
    languages: {
      "en-US": "https://fielmente.com/blogs/",
    },
  },
  openGraph: {
    title: "Blogs - Fielmente",
    description:
      "Another milestone in Fielmente’s journey 8 Marketing Strategies for Food &amp; Beverage Industry to Plan in 2022 How SEO helps to boost restaurant business Top 3 Food &amp; Beverage Business Pitches on Shark Tank India Restaurant Marketing in the MetaVerse – Web 3.0 Facebook Twitter LinkedIn Blogs Fielmente",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const BLOGS_PER_PAGE = 9;

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
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);

  const totalBlogs = blogPageData.blogs.cards.length;

  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);

  const page = Math.min(currentPage, totalPages);

  const startIndex = (page - 1) * BLOGS_PER_PAGE;

  const visibleBlogs = blogPageData.blogs.cards.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const paginationRange = getPaginationRange(page, totalPages);

  const blogTitles = [...blogPageData.blogs.cards.map((card) => card.title)];

  console.log("blogTitles", blogTitles);

  return (
    <main className="md:mt-22 mt-23">
      <Section
        defaultPadding={false}
        className="w-full relative xl:aspect-[4/.935] lg:aspect-[4/.89] md:aspect-4/1.5 aspect-4/1.75 border"
      >
        <Image
          src="/images/blog/bnr.png"
          alt="blogs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-30% from-black/40 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <SectionHeading
            title={blogPageData.bannerData.title}
            subTitle={blogPageData.bannerData.subTitle}
            titleColor="white"
            subTitleColor="white"
            subTitleClassName="span-color-2"
            textCenter
            wrapperClassName="gap-4 max-w-md"
            icon={false}
          />
          <p className="text-black">{blogPageData.blogs.cards.length}</p>
        
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
              href={page > 1 ? `/blogs/?page=${page - 1}` : "#"}
              aria-disabled={page === 1}
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

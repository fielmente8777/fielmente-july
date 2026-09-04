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
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {/* Previous */}
            {page > 1 && (
              <Link
                href={`/blogs/?page=${page - 1}`}
                className="px-4 py-2 rounded-full border border-main-border hover:bg-color4 hover:text-white"
              >
                Previous
              </Link>
            )}
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <Link
                  key={pageNumber}
                  href={
                    pageNumber === 1 ? "/blogs/" : `/blogs/?page=${pageNumber}`
                  }
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition hover:text-white $
                       { page === pageNumber 
                        ? "bg-secondary text-secondary border-main-border : hover:bg-color4 hover:text-white" 
                        
                        }`}
                >
                  {pageNumber}
                </Link>
              )
            )}

            {/* Next */}
            {page < totalPages && (
              <Link
                href={`/blogs/?page=${page + 1}`}
                className="px-4 py-2 rounded-full border border-main-border hover:bg-color4 hover:text-white"
              >
                {" "}
                Next
              </Link>
            )}
          </div>
        )}
      </SectionWithContainer>
    </main>
  );
}

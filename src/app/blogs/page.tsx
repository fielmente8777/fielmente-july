import { Section, SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import { blogPageData } from "./components/pageData";
import BlogCard from "./components/BlogCard";
import { Metadata } from "next";

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
      description:"Another milestone in Fielmente’s journey 8 Marketing Strategies for Food &amp; Beverage Industry to Plan in 2022 How SEO helps to boost restaurant business Top 3 Food &amp; Beverage Business Pitches on Shark Tank India Restaurant Marketing in the MetaVerse – Web 3.0 Facebook Twitter LinkedIn Blogs Fielmente",
    }
};

export default function Blogs() {
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
        </div>
      </Section>
      <SectionWithContainer>
        <SectionHeading
          title={blogPageData.blogs.title}
          subTitle={blogPageData.blogs.subTitle}
          subTitleClassName="span-color-2"
        />
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
          {blogPageData.blogs.cards.map((card, index) => (
            <BlogCard key={index} {...card} />
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}

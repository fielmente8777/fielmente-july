import { Section, SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import { blogPageData } from "./components/pageData";
import BlogCard from "./components/BlogCard";

export default function Blogs() {
  return (
    <main className="mt-22">
      <Section
        defaultPadding={false}
        className="w-full relative aspect-[4/.935]"
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

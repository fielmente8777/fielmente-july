// import BlogCard from "@/app/blogs/components/BlogCard";
// import { SectionWithContainer } from "@/components";
// import { CtaBtn } from "@/components/buttons/CtaBtn";
// import SectionHeading from "@/components/typography/SectionHeadingDesc";
// import { StaticImageData } from "next/image";

// interface ExploreMoreBLogsProps {
//   title: string;
//   cta: {
//     title: string;
//     url: string;
//   };
//   cards: {
//     src: string | StaticImageData | undefined;
//     title: string;
//     read: string;
//     slug: string;
//     description: string;
//   }[];
// }

// const ExploreMoreBLogs: React.FC<ExploreMoreBLogsProps> = ({
//   title,
//   cta,
//   cards,
// }) => {
//   return (
//     <SectionWithContainer containerClassName="space-y-8">
//       <div className="flex  gap-3.5 md:items-center justify-between">
//         <SectionHeading subTitle={title} subLevel={2} />
//         <CtaBtn
//           type="link"
//           label={cta.title}
//           href={cta.url}
//           icon="arrow"
//           iconClass="text-color4 max-md:hidden"
//           className="w-fit! rounded-full max-md:px-4 max-md:py-1! bg-color4 text-white font-medium"
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {cards.map((card, index) => (
//           <BlogCard key={index} {...card} />
//         ))}
//       </div>
//     </SectionWithContainer>
//   );
// };

// export default ExploreMoreBLogs;

"use client";
import Card from "@/app/blogs/components/NewCard";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface ExploreMoreBLogsProps {
  title: string;
  cta: {
    title: string;
    url: string;
  };
  cards: {
    src: string | StaticImageData | undefined;
    title: string;
    read: string;
    slug: string;
    description: string;
  }[];
}

/**
 * Related posts. One list for every screen size: a sidebar box from lg up, a grid below the article on
 * smaller screens. It used to be rendered twice (a phone copy and a desktop copy), so every blog post
 * repeated each related post's title and link, which SEO checkers flag as duplicate text and links.
 */
const ExploreMoreBLogs: React.FC<ExploreMoreBLogsProps> = ({ title, cta, cards }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleCards = cards.slice(0, visibleCount);
  const hasMore = visibleCount < cards.length;

  return (
    <section className="w-full max-lg:pt-4 lg:rounded-[20px] lg:border lg:border-[#E1E4E8] lg:bg-[#F9FAFB] lg:p-5">
      <div className="flex items-center justify-between gap-3.5">
        <h2 className="text-[28px] font-medium text-[#202838]">{title}</h2>
        <Link
          href={cta.url.endsWith("/") ? cta.url : `${cta.url}/`}
          className="shrink-0 rounded-full bg-color4 px-4 py-1.5 text-sm font-medium text-white lg:hidden"
        >
          {cta.title}
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 lg:gap-3">
        {visibleCards.map((card, index) => (
          <Card key={`${card.slug}-${index}`} {...card} />
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setVisibleCount((prev) => prev + 29)}
          className="mt-5 w-full rounded-full border border-[#202838] py-2.5 text-sm font-medium text-[#202838] transition hover:bg-[#202838] hover:text-white"
        >
          Show More
        </button>
      )}
    </section>
  );
};

export default ExploreMoreBLogs;

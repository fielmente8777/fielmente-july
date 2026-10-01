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
import BlogCard from "@/app/blogs/components/BlogCard";
import Card from "@/app/blogs/components/NewCard";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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

const ExploreMoreBLogs: React.FC<ExploreMoreBLogsProps> = ({
  title,
  cta,
  cards,
}) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleCards = cards.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 29);
  };

  const hasMore = visibleCount < cards.length;
  return (
    <>
      <div className="lg:hidden">
        <SectionWithContainer containerClassName="space-y-8">
          <div className="flex justify-between gap-3.5 md:items-center">
            <SectionHeading subTitle={title} subLevel={2} />

            <CtaBtn
              type="link"
              label={cta.title}
              href={cta.url}
              icon="arrow"
              iconClass="text-color4 max-md:hidden"
              className="w-fit! rounded-full max-md:px-4 max-md:py-1! bg-color4 text-white font-medium"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {visibleCards.map((card, index) => (
              <Card key={`${card.slug}-${index}`} {...card} />
            ))}
          </div>
          {hasMore && (
            <button
              type="button"
              onClick={handleShowMore}
              className="mt-5 w-full rounded-full border border-[#202838] py-2.5 text-sm font-medium text-[#202838] transition hover:bg-[#202838] hover:text-white"
            >
              Show More
            </button>
          )}
        </SectionWithContainer>
      </div>

      <div className="hidden lg:block">
        <div className="w-full rounded-[20px] border border-[#E1E4E8] bg-[#F9FAFB] p-4 md:p-5">
          <h2 className="text-[28px] font-medium text-[#202838]">
            More from Fielmente
          </h2>

          <div className="mt-4 flex flex-col gap-3">
            {visibleCards.map((card, index) => (
              <Card key={`${card.slug}-${index}`} {...card} />
            ))}
          </div>

          {hasMore && (
            <button
              type="button"
              onClick={handleShowMore}
              className="mt-5 w-full rounded-full border border-[#202838] py-2.5 text-sm font-medium text-[#202838] transition hover:bg-[#202838] hover:text-white"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreMoreBLogs;

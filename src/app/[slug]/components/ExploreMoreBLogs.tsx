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

import BlogCard from "@/app/blogs/components/BlogCard";
import Card from "@/app/blogs/components/NewCard";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
            {cards.map((card, index) => (
              <BlogCard key={index} {...card} />
            ))}
          </div>
        </SectionWithContainer>
      </div>


      <div className="hidden lg:block">
        <div className="w-full rounded-[20px] border border-[#E1E4E8] bg-[#F9FAFB] p-4 md:p-5">
      
          <h2 className="text-[28px] font-medium text-[#202838]">
            More from Fielmente
          </h2>

         
          <div className="mt-4 flex flex-col gap-3">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMoreBLogs;

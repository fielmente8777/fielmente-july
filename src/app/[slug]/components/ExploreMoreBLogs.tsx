import BlogCard from "@/app/blogs/components/BlogCard";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { StaticImageData } from "next/image";

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
    <SectionWithContainer containerClassName="space-y-8">
      <div className="flex  gap-3.5 md:items-center justify-between">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <BlogCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ExploreMoreBLogs;

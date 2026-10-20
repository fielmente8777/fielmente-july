"use client";
// Client component: the page data then carries only this section's content, not a second copy of its
// markup (Next.js inlines that data in the HTML, which made the home page HTML very large).
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

interface Props {
  title: string;
  description: string[];
}

const WorkWithIndiasHotel: React.FC<Props> = ({ title, description }) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute md:after:inset-x-4 after:inset-x-1 md:after:inset-y-0 after:inset-y-2 md:after:rounded-2xl after:rounded-xl after:bg-black after:z-[-1]"
    containerClassName="space-y-7"
    >
      <SectionHeading subTitle={title} subLevel={2} subTitleColor="white" wrapperClassName="max-w-2xl" asText />
      <div className="space-y-6 inter-link-2">
        {description.map((item, index) => (
          <p
            key={index}
            className="text-[#E6E8EB] text-xl"
            dangerouslySetInnerHTML={{ __html: item || "" }}
          ></p>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default WorkWithIndiasHotel;

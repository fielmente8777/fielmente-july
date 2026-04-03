import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const ChooseFielmente: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <SectionWithContainer
      sectionClassName=" relative after:absolute after:inset-0 after:bg-[#F9FAFB] after:z-[-2]"
      containerClassName="relative after:absolute md:after:-inset-4 max-md:after:inset-x-2 after:-inset-y-6 after:rounded-2xl after:bg-white after:z-[-1]"
    >
      <div className="max-w-5xl mx-auto space-y-5 ">
        <SectionHeading title={title} />
        <p
          className="text-primary span-color-2 md:text-2xl/snug font-semibold"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />
      </div>
    </SectionWithContainer>
  );
};

export default ChooseFielmente;

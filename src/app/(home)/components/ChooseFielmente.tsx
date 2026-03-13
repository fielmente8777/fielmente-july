import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const ChooseFielmente: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-[#F9FAFB]"
      containerClassName="bg-white py-6 rounded-[20px]"
    >
      <div className="max-w-5xl mx-auto space-y-5 ">
        <SectionHeading title={title} />
        <p
          className="text-primary text-2xl/snug font-semibold"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </SectionWithContainer>
  );
};

export default ChooseFielmente;

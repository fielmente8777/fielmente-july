import Image from "next/image";
import FormOption from "../forms/FormOption";
import { SectionWithContainer } from "../sectionComponants";

interface ContactOldSectionProps {
  bgColor?: string;
}
const ContactOldSection: React.FC<ContactOldSectionProps> = ({
  bgColor = "black",
}) => {
  return (
    <SectionWithContainer sectionClassName={`bg-${bgColor}`}>
      <div className="grid lg:grid-cols-[2fr_1.2fr] grid-cols-1 gap-10">
        <div className="w-full relative aspect-4/3">
        <Image
            src="/wordmap.webp"
            alt="contact"
            fill
            className="object-contain"
          />
        </div>
        <div className="">
          <FormOption />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactOldSection;

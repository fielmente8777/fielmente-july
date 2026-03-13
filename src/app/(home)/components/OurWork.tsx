import { OurWorkDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import LinkButton from "@/components/buttons/LinkButton";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

const OurWork: React.FC<OurWorkDataTypes> = ({
  title,
  subTitle,
  description,
  link,
  src,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FAFB]">
      <div className="bg-white p-6 rounded-[20px] grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-6">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            wrapperClassName="gap-4"
          />
          <p className="text-secondary">{description}</p>
          <LinkButton
            href={link.href}
            label={link.label}
            className="w-fit rounded-full bg-[#1B1B1B] text-white font-medium"
          />
        </div>
        <div className="relative w-full aspect-4/2.5">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover border-[10.23px] border-[#7E7E7E1A]  rounded-[18.62px]"
            sizes="100vw"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurWork;

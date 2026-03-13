import { MaximizeGrowthDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import LinkButton from "@/components/buttons/LinkButton";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

const OtaCostsWithFielmente: React.FC<MaximizeGrowthDataTypes> = ({
  title,
  subTitle,
  cards,
  link,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-black"
      containerClassName="space-y-16"
    >
      <SectionHeading
        title={title}
        subTitle={subTitle}
        textCenter
        titleClassName="bg-[#2C2C2C] w-fit mx-auto py-2.5 px-5 rounded-full"
        titleColor="white"
        subTitleColor="white"
        icon={false}
        wrapperClassName="gap-3"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {cards.map((card, index) => (
          <OtaCostsCard key={index} {...card} />
        ))}
      </div>
      <LinkButton
        href={link.href}
        label={link.label}
        className="w-fit text-black font-medium bg-white mx-auto rounded-full"
      />
    </SectionWithContainer>
  );
};

export default OtaCostsWithFielmente;

export const OtaCostsCard: React.FC<MaximizeGrowthDataTypes["cards"][0]> = ({
  title,
  description,
  src,
}) => {
  return (
    <div className="flex items-center justify-center gap-8 overflow-hidden border bg-black border-[#414141] rounded-2xl">
      <div className="w-56 aspect-4/6 relative ">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
      <div className="py-9 pr-4.5">
        <h3 className="text-[1.375rem] font-bold text-white">{title}</h3>
        <p className="text-[#C6C9CE]">{description}</p>
      </div>
    </div>
  );
};

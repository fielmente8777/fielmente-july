import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface CountriesWeWorkedDataTypes {
  title: string;
  subTitle: string;
  src: string;
}

const CountriesWeWorked: React.FC<CountriesWeWorkedDataTypes> = ({
  title,
  subTitle,
  src,
}) => {
  return (
    <SectionWithContainer
      containerClassName="space-y-14"
      sectionClassName="bg-background-black1"
    >
      <SectionHeading
        title={title}
        subTitle={subTitle}
        textCenter
        titleColor="white"
        subTitleColor="white"
        subTitleClassName="span-color"
        wrapperClassName="max-w-4xl mx-auto gap-4"
      />
      <div className="w-full aspect-4/1.5 relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </SectionWithContainer>
  );
};

export default CountriesWeWorked;

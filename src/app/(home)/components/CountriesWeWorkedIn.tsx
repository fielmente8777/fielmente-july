import { CountriesWeWorkedInPropsType } from "@/@types/@types";
import { Section, SectionHeadingDesc } from "@/components";
import Image from "next/image";

const CountriesWeWorkedIn: React.FC<CountriesWeWorkedInPropsType> = ({
  title,
  subTitle,
  imagesSrc,
}) => {
    const img = imagesSrc[0];
  return (
    <Section>
      <div className="md:space-y-12 space-y-8">
        <SectionHeadingDesc
          title={title}
          subTitle={subTitle}
          textcenter
          wrapperClassName="max-w-5xl mx-auto text-color"
        />
        <div className="relative h-full max-h-[800px] aspect-[4/2]">
          <Image
            src={img}
            alt="img"
            fill
            className="w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default CountriesWeWorkedIn;

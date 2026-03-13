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
    <SectionWithContainer containerClassName="space-y-14">
      <SectionHeading title={title} subTitle={subTitle} textCenter />
      <div className="w-full aspect-[4/2.1] relative">
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

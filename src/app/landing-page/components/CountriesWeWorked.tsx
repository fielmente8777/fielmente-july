"use client";
// Client component: the page data then carries only this section's content, not a second copy of its
// markup (Next.js inlines that data in the HTML, which made the home page HTML very large).
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
          alt="World map of the countries where Fielmente has worked with hospitality brands"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw" 
        />
      </div>
    </SectionWithContainer>
  );
};

export default CountriesWeWorked;

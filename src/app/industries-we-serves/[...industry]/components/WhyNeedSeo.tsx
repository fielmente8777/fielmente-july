import { WhyNeedSeoProps } from "@/@types/@industryPageType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import WhyNeedSeoCard from "./cards/WhyNeedSeoCard";

const WhyNeedSeo: React.FC<WhyNeedSeoProps> = ({
  title,
  description,
  cards,
  cta,
  image,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-[2fr_1.2fr] grid-cols-1 items-center gap-10">
        <div className="space-y-4">
          <SectionHeading
            subTitle={title}
            subLevel={2}
            subTitleClassName="span-color-4"
            subTitleColor="primary2"
            smTextCenter
          />
          <div className="w-full lg:hidden relative aspect-4/5 rounded-md overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <p className="text-secondary text-lg">{description}</p>
          <div className="grid md:grid-cols-2 grid-cols-1 max-md:gap-6 md:gap-y-8 md:gap-x-7">
            {cards.map((card, index) => (
              <WhyNeedSeoCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="w-full lg:block hidden relative aspect-4/5 rounded-md overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WhyNeedSeo;

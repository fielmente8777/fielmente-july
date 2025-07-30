import { MarketingPartnersPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import Image from "next/image";

const MarketingPartners: React.FC<MarketingPartnersPropsType> = ({ cards }) => {
  return (
    <SectionWithContainer sectionClassName="box-shadow py-[3rem]" defaultPadding={false}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-28">
        {cards.map((card, index) => (
          <div key={index} className="relative aspect-[3/1.04] w-full">
            <Image
              src={card.imgSrc}
              fill
              className="object-contain"
              alt="img"
            />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default MarketingPartners;

import Image from "next/image";
import { CtaBtn } from "../buttons/CtaBtn";
import { SectionWithContainer } from "../sectionComponants";
import ClientCard from "@/app/our-clients/components/ClientCard";

type CardType = {
  imgSrc: string;
  title: string;
  className?: string;
  show?: boolean;
  clientType?: string;
};

interface CommonTowColGridLayoutSectionProps {
  title: string;
  description: string;
  cards: CardType[];
  cta: {
    label: string;
    href: string;
  };
}

const CommonTowColGridLayoutSection: React.FC<
  CommonTowColGridLayoutSectionProps
> = ({ title, description, cards, cta }) => {
  return (
    <SectionWithContainer>
      <div className="grid xl:grid-cols-[1.2fr_2fr] grid-cols-2 gap-6 xl:gap-16">
        <div className="flex flex-col gap-5">
          <h2
            className="md:text-4xl text-lg span-color-3 font-semibold"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p className="text-lg text-secondary">{description}</p>
          <CtaBtn
            type="button"
            label={cta.label}
            icon="arrow2"
            iconClass="max-lg:w-6 text-white bg-transparent!"
            className="justify-between! max-w-60 rounded-lg max-lg:text-xs! max-lg:px-2! max-lg:py-2 bg-color4 text-white"
          />
        </div>
        <div className={`grid grid-cols-2 gap-4 ${cards[0].className ? "lg:grid-cols-4 lg:gap-8" : "lg:grid-cols-3 md:gap-6"}`}>
          {cards.map((card, index) =>
            card.className ? (
              <ClientCard
                key={index}
                src={card.imgSrc}
                title={card.title}
                className={card.className}
              />
            ) : (
              <div
                className="w-full relative aspect-4/.75 overflow-hidden"
                key={index}
              >
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  fill
                  className="object-contain"
                  priority
                  loading="eager"
                  sizes="100vw"
                />
              </div>
            )
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CommonTowColGridLayoutSection;

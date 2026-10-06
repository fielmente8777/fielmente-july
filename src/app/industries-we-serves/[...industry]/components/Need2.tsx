import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Need2Card from "./cards/Need2Card";
import { Need2Props } from "@/@types/@landingPageType";


const Need2: React.FC<Need2Props> = ({ title, description, cards }) => {
  return (
    <SectionWithContainer>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          subTitle={title}
          subLevel={2}
          subTitleClassName="span-color-4"
          subTitleColor="primary2"
          textCenter
        />
        <p className="text-center text-lg text-gray-600 mt-4">{description}</p>
      </div>
      <div className="mt-12 grid max-md:gap-8 md:gap-y-10 md:gap-x-12 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {cards.map((card, index) => (
            <Need2Card key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Need2;

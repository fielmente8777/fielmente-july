import { ChooseUsPropsType } from "@/@types/@types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import { ChooseUsCard } from "@/components/cards";

const ChooseUs: React.FC<ChooseUsPropsType> = ({ title, subTitle, cards }) => {
  return (
    <SectionWithContainer>
      <div className="md:space-y-14 space-y-8">
        <SectionHeadingDesc title={title} subTitle={subTitle} textcenter wrapperClassName="max-w-3xl mx-auto " />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <ChooseUsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ChooseUs;

import { ChooseUsPropsType } from "@/@types/@types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import { ChooseUsCard } from "@/components/cards";

const ChooseUs: React.FC<ChooseUsPropsType> = ({ title, subTitle, cards }) => {
  return (
    <SectionWithContainer sectionClassName="md:relative md:before:content-[''] before:-right-2 overflow-hidden before:bottom-4 md:before:bg-[url('/home/waves.png')] before:bg-contain before:bg-no-repeat before:w-[153px] before:h-[30px] before:z-[-1] before:absolute">
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

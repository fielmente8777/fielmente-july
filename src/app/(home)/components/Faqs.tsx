import { FaqsPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { Accordion } from "@/components/cards";
import { Form1 } from "@/components/forms";

const Faqs: React.FC<FaqsPropsType> = ({ title, cards }) => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 md:space-y-14 space-y-8">
          <h2 className="text-primary lg_font_s font-medium">{title}</h2>
          <div className="divide-y divide-light border-y border-light">
            {cards.map((card, index) => (
              <Accordion key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <Form1 />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Faqs;

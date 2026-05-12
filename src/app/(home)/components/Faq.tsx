import { FaqsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import LinkButton from "@/components/buttons/LinkButton";
import { Accordion } from "@/components/cards";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

const Faq: React.FC<FaqsDataTypes> = ({ title, subTitle, faqs, card }) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-[1.4fr_2fr] grid-cols-1 gap-2.5">
        <div className="w-fit lg:w-100 space-y-8">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            subTitleClassName="span-color"
          />
          <div className="py-5 px-6 border border-[#E3E5E8] rounded-2xl flex flex-col gap-6 shadow-md">
            <div>
              <Image
                src={card.src}
                alt={card.title}
                width={64}
                height={64}
                className="object-contain rounded-full border"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-primary">
                {card.title}
              </p>
              <p className="text-sm text-secondary">{card.description}</p>
            </div>
            <CtaBtn
              type="button"
              icon="arrow"
              href={card.links.href}
              label={card.links.label}
              className="text-white bg-[#1B1B1B] rounded-full text-sm font-medium"
            />
          </div>
        </div>
        <div className=" inter-link">
          {faqs.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Faq;

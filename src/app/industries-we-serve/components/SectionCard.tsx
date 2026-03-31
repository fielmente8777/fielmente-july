import { SectionCardType } from "@/@types/@industryPageType";
import { SectionWithContainer } from "@/components";
import { Accordion } from "@/components/cards";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

const SectionCard: React.FC<SectionCardType & { index: number }> = ({
  title,
  image,
  description,
  faq,
  index,
}) => {
  return (
    <SectionWithContainer containerClassName="md:max-w-5xl! space-y-8">
      <SectionHeading subTitle={title} subLevel={2} textCenter />

      <div className="grid md:grid-cols-6 grid-cols-1 gap-4">
        <div className={`md:col-span-2 col-span-1 relative aspect-[4/3] ${index % 2 !== 0 ? "md:order-2" : ""}`}>
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="md:col-span-4 col-span-1 flex flex-col">
          <p className="md:text-lg text-secondary mb-6">{description}</p>
          {faq.map((item, index) => (
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

export default SectionCard;

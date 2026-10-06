import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface ConnectSectionProps {
  title: string;
  description?: string;
  cards: {
    title: string;
    subtitle?: string;
    src?: string;
    list?: string[];
    cta?: {
      label: string;
      type: "button";
    };
  }[];
}
const ConnectSection: React.FC<ConnectSectionProps> = ({
  title,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="max-w-4xl mx-auto">
        {title && (
          <SectionHeading
            subTitle={title}
            subLevel={2}
            textCenter
            subTitleClassName="span-color-4"
            subTitleColor="primary2"
          />
        )}
        {description && (
          <p className="text-secondary text-center md:text-lg mt-4">
            {description}
          </p>
        )}
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-16 items-center">
        {cards.slice(0, 2).map((card, index) => (
          <ConnectCard key={index} {...card} />
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {cards.slice(2).map((card, index) => (
          <ConnectCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ConnectSection;

export const ConnectCard: React.FC<ConnectSectionProps["cards"][0]> = ({
  title,
  subtitle,
  src,
  list,
  cta,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 md:gap-6 box-shadow rounded-2xl overflow-hidden ${!subtitle && !list ? "bg-[#2cbca5] md:p-10" : "p-4 md:p-7"}`}
    >
      {src && (
        <div className=" rounded-full w-[65px] relative aspect-square">
          <Image src={src} alt={title} fill className="object-contain" />
        </div>
      )}
      <p className={`font-semibold ${!subtitle ? "md:text-4xl" : "text-2xl"}`}>
        {title}
      </p>
      {subtitle && <p className="text-secondary md:text-lg">{subtitle}</p>}
      {list && (
        <ul className="list-disc list-inside text-secondary">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {cta && (
        <CtaBtn
          label={cta.label}
          type={cta.type}
          className="border-none bg-[#262C2E] text-white rounded-md mt-4 w-fit! "
          icon="none"
        />
      )}
    </div>
  );
};

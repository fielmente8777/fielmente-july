import { WhyChooseUsDataTypes } from "@/@types/@homeType";
import { Container, SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

const WhyChooseUs: React.FC<WhyChooseUsDataTypes> = ({
  title,
  subTitle,
  description,
  cardsData,
}) => {
  return (
    <>
      <SectionWithContainer containerClassName="space-y-8">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <div className="space-y-6 max-w-6xl mx-auto">
          {description.map((item, index) => (
            <p
              key={index}
              className="text-secondary text-lg text-center"
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))}
        </div>
      </SectionWithContainer>
      {cardsData.slice(0, 4).map((card, index) => (
        <ChooseCard1 key={index} {...card} index={index - 1} />
      ))}
      <Container className="grid lg:grid-cols-3 gap-6 mb-18">
        {cardsData.slice(4).map((card, index) => (
          <ChooseCard2 key={index} {...card} index={index} />
        ))}
      </Container>
    </>
  );
};

export default WhyChooseUs;

export const ChooseCard1: React.FC<
  WhyChooseUsDataTypes["cardsData"][0] & { index: number }
> = ({ index, heading, description, body, src, points }) => {
  return (
    <SectionWithContainer
      sectionClassName={`${index % 2 !== 0 ? "bg-[#F5F6F8]" : ""}
    `}
      containerClassName="grid lg:grid-cols-9 grid-cols-1 gap-6 md:gap-16"
    >
      <div
        className={`md:col-span-6 space-y-5 ${index % 2 === 0 ? "md:order-2" : ""}`}
      >
        <SectionHeading
          subTitle={heading}
          subLevel={2}
          subTitleClassName="lg:text-[36px]"
        />
        <p
          className="text-secondary text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <ul className="space-y-4">
          {points?.map((item, index) => (
            <li
              key={index}
              className="text-secondary text-lg flex items-center gap-2.5"
            >
              <span>
                <TickIcon />
              </span>{" "}
              {item}
            </li>
          ))}
        </ul>
        {description && (
          <p
            className="text-secondary text-lg inter-link"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      <div
        className={`relative w-full aspect-auto h-auto rounded-2xl overflow-hidden border-4 border-[#F7F7F7] md:col-span-3`}
      >
        <Image src={src} alt={heading} fill className="object-cover" />
      </div>
    </SectionWithContainer>
  );
};

export const ChooseCard2: React.FC<
  WhyChooseUsDataTypes["cardsData"][0] & { index: number }
> = ({ heading, description, src }) => {
  return (
    <div className="p-6 space-y-8 rounded-2xl border border-[#E3E5E8]">
      <div className="relative w-full aspect-4/2 rounded-2xl overflow-hidden border-4 border-[#F7F7F7]">
        <Image src={src} alt={heading} fill className="object-cover" />
      </div>
      <div className="space-y-4.5">
        <h3 className="text-xl font-semibold">{heading}</h3>

        {description && <p className="text-secondary">{description}</p>}
      </div>
    </div>
  );
};

export const TickIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.77645 16.0383C10.5857 11.3786 18.1391 5.98979 22.3111 3.03392C22.5438 2.86907 22.8527 2.86496 23.0904 3.02237C23.4744 3.27656 23.5071 3.82806 23.1553 4.1252C18.1501 8.3531 12.1943 13.4112 10.3956 18.983C10.3304 19.1851 10.1801 19.3458 9.98231 19.4228C9.06973 19.7781 7.6775 20.4938 6.85384 20.9919C6.5077 21.2012 6.06013 21.0728 5.87665 20.7123C4.60064 18.2052 2.54924 15.1117 0.847399 13.7104C0.533626 13.452 0.51546 12.9714 0.809247 12.6905C4.20987 9.43925 6.71795 13.8917 7.77611 16.0381L7.77645 16.0383Z"
      fill="#0D54EB"
    />
  </svg>
);

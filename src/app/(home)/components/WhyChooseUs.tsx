import { WhyChooseUsDataTypes } from "@/@types/@homeType";
import { Container, SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { ChooseCard1 } from "./cards/ChooseCard1";
import { ChooseCard2 } from "./cards/ChooseCard2";

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
              dangerouslySetInnerHTML={{ __html: item || "" }}
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

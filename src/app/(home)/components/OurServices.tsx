import { ServicesDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const OurServices: React.FC<ServicesDataTypes> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2">
        <div className="">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            subTitleClassName="lg:text-[30px]"
            wrapperClassName="pr-16"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurServices;

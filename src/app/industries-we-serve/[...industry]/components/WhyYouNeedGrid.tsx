import { CtaBtnPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import Image from "next/image";

interface WhyYouNeedGridProps {
  title: string;
  description: string;
  image: string;
  cta: CtaBtnPropsType;
  index?: number;
}
const WhyYouNeedGrid: React.FC<WhyYouNeedGridProps> = ({
  title: subTitle,
  description,
  image,
  cta,
  index,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
        <div
          className={`flex flex-col md:justify-between gap-4 ${index && index % 2 !== 0 ? "md:order-2" : ""}`}
        >
          <div className="space-y-4">
            <h2
              className="text-primary-2 font-medium md:text-[3.25rem]/[3.5rem] text-3xl span-color-4"
              dangerouslySetInnerHTML={{ __html: subTitle ?? "" }}
            ></h2>

            <p className="md:text-lg text-[#737373]">{description}</p>
          </div>

          {cta && (
            <CtaBtn
              label={cta.label}
              type={cta.type}
              className="bg-tertiary w-fit text-white mt-6 md:text-lg rounded-lg"
            />
          )}
        </div>
        <div className="relative w-full aspect-[4/2.5] rounded-md overflow-hidden">
          <Image src={image} alt={subTitle} fill className="object-contain" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WhyYouNeedGrid;

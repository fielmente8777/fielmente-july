import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  src: string;
  ctaS: {
    label: string;
    type: string;
  }[];
}
const ReadyToGrow: React.FC<Props> = ({
  title,
  subTitle,
  description,
  src,
  ctaS,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-black">
      <div className="w-full relative md:aspect-4/1.75 aspect-4/4.75 max-w-3xl mx-auto overflow-hidden rounded-3xl">
        <Image src={src} alt={title} fill className="object-cover object-top" />
        <div className="flex flex-col gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md items-center justify-center">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            textCenter
            titleColor="white "
            subTitleColor="white"
            wrapperClassName="max-w-xl mx-auto gap-4"
            icon2
          />
          <p className="text-white text-center max-md:px-4">{description}</p>
          <div className="flex max-md:flex-col gap-4 justify-center">
            {ctaS.map((cta,index) => (
              <CtaBtn
                key={cta.label}
                label={cta.label}
                type="button"
                className={`rounded-full w-fit border-none ${index === 1 ? "bg-white text-color4" : "glassy-card text-white"}` }
                icon={index === 1 ? "arrow2" : "none"}
                iconClass={index === 1 ? "text-color4" : "text-white"}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ReadyToGrow;

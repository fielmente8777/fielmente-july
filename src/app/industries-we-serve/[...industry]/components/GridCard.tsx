import { CtaBtnPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import Image from "next/image";

interface GridCardProps {
  title?: string;
  subTitle?: string;
  image: string;
  description: string[];
  cta?: CtaBtnPropsType;
  index?: number;
}
const GridCard: React.FC<GridCardProps> = ({
  title,
  subTitle,
  image,
  description,
  cta,
  index,
}) => {
  return (
    <SectionWithContainer defaultPadding={index ? false : true} sectionClassName={` ${index && index % 2 !== 0 ? "pb-14" : ""}`}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
        <div
          className={`flex flex-col md:justify-between gap-4 ${index && index % 2 !== 0 ? "md:order-2" : ""}`}
        >
          <div className="space-y-4">
            {title && !index ? (
              <h1 className="text-xl text-[#737373] pl-2 border-l-4 font-medium border-tertiary uppercase">
                {title}
              </h1>
            ) : (
              <h2 className="text-xl text-[#737373] pl-2 border-l-4 font-medium border-tertiary uppercase">
                {title}
              </h2>
            )}
            {subTitle && !index ? (
              <h2
                className="text-primary-2 font-medium md:text-[3.25rem]/[3.5rem] text-3xl span-color-4"
                dangerouslySetInnerHTML={{ __html: subTitle ?? "" }}
              ></h2>
            ) : (
              <h3
                className="text-primary-2 font-medium md:text-5xl text-3xl span-color-4"
                dangerouslySetInnerHTML={{ __html: subTitle ?? "" }}
              ></h3>
            )}
            <div className="mt-4 space-y-2">
              {description.map((item, idx) => (
                <p key={idx} className="md:text-lg text-[#737373]">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {cta && (
            <CtaBtn
              label={cta.label}
              href={cta.href}
              type={cta.type}
              target={cta.target}
              className="bg-primary w-fit text-white mt-8 md:mt-12 md:text-lg rounded-lg"
            />
          )}
        </div>
        <div className="relative w-full aspect-[4/2.75] rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title || subTitle || "Image"}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GridCard;

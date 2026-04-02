import { CtaBtnPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import Image from "next/image";

interface Banner2Props {
  title: string;
  image: string;
  description: string[];
  cta: CtaBtnPropsType;
}
const Banner2: React.FC<Banner2Props> = ({
  title,
  image,
  description,
  cta,
}) => {
  return (
    <SectionWithContainer sectionClassName="text-white bg-primary2">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center py-10">
        <div className="flex flex-col gap-6">
          <h1
            className="md:text-5xl text-2xl span-color-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="w-full aspect-4/2.5 relative lg:hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>
          {description.map((desc, index) => (
            <p key={index} className="mt-4  md:text-lg">
              {desc}
            </p>
          ))}
          <CtaBtn
            label={cta.label}
            type={cta.type}
            className="bg-tertiary rounded-md border-none w-fit text-white md:text-lg"
          />
        </div>
        <div className="w-full aspect-4/2.5 relative lg:block hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner2;

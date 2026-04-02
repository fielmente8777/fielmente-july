import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface GetStartedProps {
  title: string;
  subTitle: string;
  description: string[];
  src: string;
  action: {
    label: string;
    href: string;
  };
}

const GetStarted: React.FC<GetStartedProps> = ({
  title,
  subTitle,
  description,
  src,
  action,
}) => {
  return (
    <SectionWithContainer containerClassName="max-w-3xl! md:px-6! space-y-7">
      <SectionHeading
        title={title}
        subTitle={subTitle}
        textCenter
        icon
        wrapperClassName="gap-4"
      />
      <p className="text-secondary text-center">{description}</p>
      <div className="w-full relative aspect-[4/1.9998]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
      <CtaBtn type="button" icon="arrow" href={action.href} label={action.label} className="mx-auto w-fit rounded-full bg-[#1B1B1B] text-white" />
    </SectionWithContainer>
  );
};

export default GetStarted;

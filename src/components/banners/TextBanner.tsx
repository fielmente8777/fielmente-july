import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import SectionHeading from "../typography/SectionHeadingDesc";
import { CtaBtn } from "../buttons/CtaBtn";
import { title } from 'process';

interface TextBannerProps {
  title?: string;
  subTitle?: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  }[];
}
const TextBanner: React.FC<TextBannerProps> = ({
  title,
  subTitle,
  description,
  cta,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="w-full relative xl:aspect-[4/1.12] lg:aspect-[4/1.4] md:aspect-4/1.5 aspect-4/4"
    >
      <Image
        src="/Hero.png"
        alt="hero"
        fill
        className="object-cover bg-background-black1"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Container className="flex flex-col md:gap-4">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            titleColor="white"
            subTitleColor="white"
            level={1}
            textCenter
            wrapperClassName="gap-3"
            subTitleClassName="md:text-5xl!"
            titleClassName="max-md:text-xs"
            titleWrapperClassName="rounded-full px-4 py-2 bg-white/5 backdrop-blur-xs shadow-inner shadow-white/5 border-[0.2px] border-white/70"
          />
          <p className="text-center text-white mt-4 md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
          {cta && (
            <div className="grid grid-cols-2 max-w-sm mx-auto gap-4 justify-center mt-4">
              {cta.map((cta, index) => (
                <CtaBtn
                  key={cta.label}
                  label={cta.label}
                  type={"button"}
                  className={`rounded-lg border-none ${index === 0 ? "bg-white text-color4" : "glassy-card text-white"}`}
                  icon={index === 1 ? "arrow2" : "none"}
                  iconClass={index === 1 ? "text-white bg-transparent!" : ""}
                />
              ))}
            </div>
          )}
        </Container>
      </div>
    </Section>
  );
};

export default TextBanner;

import Image from "next/image";
import { SectionWithContainer } from "../sectionComponants";
import SectionHeading from "../typography/SectionHeadingDesc";
import { CtaBtn } from "../buttons/CtaBtn";

interface Props {
  title: string;
  description: string;
  ctas: {
    label: string;
    href: string;
  }[];
}

const GridCtaSection: React.FC<Props> = ({ title, description, ctas }) => {
  return (
    <SectionWithContainer>
      <div className="w-full relative xl:aspect-[4/.85] md:aspect-4/1.75 aspect-square bg-background-black1 rounded-3xl overflow-hidden">
        <Image src="/content.png" alt="hero" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.8fr] gap-24 max-w-308 w-full max-xl:px-4">
            <div className="space-y-8">
              <SectionHeading
                subTitle={title}
                subTitleColor="white"
                subLevel={2}
              />
              <p className="text-white font-medium  xl:hidden ">{description}</p>
              {ctas && (
                <div className="grid grid-cols-2 gap-2 justify-center">
                  {ctas.map((cta, index) => (
                    <CtaBtn
                      key={cta.label}
                      label={cta.label}
                      type={"button"}
                      className={`rounded-lg border-none gap-1! ${index === 0 ? "bg-white text-color4" : "glassy-card text-white"}`}
                      icon={index === 1 ? "arrow2" : "none"}
                      iconClass={
                        index === 1 ? "text-white bg-transparent!" : ""
                      }
                    />
                  ))}
                </div>
              )}
            </div>
            <p className="text-white font-medium text-[1.75rem]/[2.25rem] xl:block hidden">{description}</p>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GridCtaSection;

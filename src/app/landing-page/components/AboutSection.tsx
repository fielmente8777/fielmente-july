import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
  description: string[];
  points: {
    list: string[];
    src: string;
  }[];
  stats: {
    no: string;
    list: string[];
    growthPercentage: {
      value: string;
      label: string;
      progress: number;
    }[];
  };
  cta: {
    label: string;
    type: string;
  };
}

const AboutSection: React.FC<Props> = ({
  title,
  subTitle,
  description,
  points,
  stats,
  cta,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4 items-center">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          subTitleClassName="span-color"
        />
        <p
          className="text-secondary text-xl"
          dangerouslySetInnerHTML={{ __html: description[0] }}
        ></p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-10">
        {points.map((point, index) => (
          <div
            key={index}
            className="relative w-full md:aspect-square aspect-4/4.75 overflow-hidden rounded-2xl"
          >
            <Image src={point.src} alt="about" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-black/10" />
            <p
              className={`text-white  absolute  z-10  ${index === 0 ? "text-xl md:text-[23px] inset-x-0 top-0 px-6 py-9" : "md:text-[23px] text-xl text-center backdrop-blur-xs bg-[#0A0C2D]/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-1.5 rounded-full"} `}
              dangerouslySetInnerHTML={{ __html: point.list[0] }}
            ></p>
            <div
              className={`flex items-center gap-2 ${index === 0 ? "justify-between" : "justify-center"} absolute inset-x-0 bottom-0 z-10 px-6 py-9`}
            >
              {index === 0 && (
                <div className="p-2 w-17.25 md:aspect-4/1.5  rounded-[100px] bg-linear-to-r from-50% from-[#0B57F8] to-100% to-[#3B92E3] flex items-center justify-end">
                  <span className="bg-white md:w-4 w-2.5 aspect-square rounded-full"></span>
                </div>
              )}
              <p
                className={`text-white ${index === 0 ? "md:text-xl text-[0.95rem]" : "text-center"}`}
                dangerouslySetInnerHTML={{ __html: point.list[1] }}
              ></p>
            </div>
          </div>
        ))}
        <div className="px-6 py-9.5 bg-[#E7F1FF] rounded-2xl flex flex-col items-center justify-between">
          <div className="flex flex-col gap-2 lg:gap-3.5">
            <h3 className="text-[2.5rem] font-bold text-primary">{stats.no}</h3>
            <h4 className="text-2xl text-primary">{stats.list[0]}</h4>
            <p
              className="text-secondary text-lg"
              dangerouslySetInnerHTML={{ __html: stats.list[1] }}
            ></p>
          </div>
          <div className="space-y-4 w-full max-xl:mt-6">
            {stats.growthPercentage.map((growth, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2"
              >
                <p
                  className="text-secondary font-medium text-[15px]"
                  dangerouslySetInnerHTML={{ __html: growth.label }}
                ></p>
                <div className="flex items-center gap-2">
                  <div className="space-x-1">
                    {Array.from({ length: growth.progress }).map(
                      (_, progressIndex) => (
                        <span
                          key={index}
                          className={`inline-block h-3.5 w-1.75  rounded-[100px] ${
                            index === 1
                              ? progressIndex === growth.progress - 1
                                ? "bg-[#87A8EE]"
                                : "bg-color4"
                              : index === 2
                                ? progressIndex === growth.progress - 1
                                  ? "bg-[#7FCC9F]"
                                  : "bg-[#16A34A]"
                                : "bg-color4"
                          }`}
                        ></span>
                      )
                    )}
                  </div>
                  <p
                    className="text-primary font-semibold"
                    dangerouslySetInnerHTML={{ __html: growth.value }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center max-md:flex-col justify-between gap-4 mt-14 w-full">
        <p
          className="span-color text-[2.2rem] font-semibold text-primary"
          dangerouslySetInnerHTML={{ __html: description[1] }}
        ></p>
        <CtaBtn
          type="button"
          label={cta.label}
          className="bg-color4 text-white md:w-fit rounded-full justify-between!"
          icon="arrow"
        />
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;

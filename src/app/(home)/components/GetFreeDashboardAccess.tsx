import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { JSX } from "react";

export interface GetFreeDashboardAccessProps {
  title: string;
  subTitle: string;
  description: string;
  cards: {
    icon: JSX.Element;
    color: string;
    title: string;
    description: string;
  }[];
  list: string[];
  cta: {
    label: string;
    href: string;
  };
}

const GetFreeDashboardAccess: React.FC<GetFreeDashboardAccessProps> = ({
  title,
  subTitle,
  description,
  cards,
  list,
  cta,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-black"
      containerClassName="space-y-14"
    >
      <div className="space-y-3">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          textCenter
          titleClassName="bg-[#2C2C2C] w-fit mx-auto py-2.25 px-5 rounded-full"
          titleColor="white"
          subTitleColor="white"
          icon={false}
          wrapperClassName="gap-3 max-w-4xl mx-auto"
        />
        <p className="text-[#C6C9CE] text-2xl text-center max-sm:text-sm">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {cards.map((card, index) => (
          <GetFreeDashboardAccessCard key={index} {...card} />
        ))}
      </div>
      <ul className="flex items-center justify-center flex-wrap gap-4">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2.5 text-white text-xl"
          >
            <span className="w-2 h-2 rounded-full bg-white"></span>
            {item}
          </li>
        ))}
      </ul>
      <CtaBtn
        type="button"
        label={cta.label}
        className="w-fit text-black font-medium bg-white mx-auto rounded-full"
      />
    </SectionWithContainer>
  );
};

export default GetFreeDashboardAccess;


export const GetFreeDashboardAccessCard: React.FC<
  GetFreeDashboardAccessProps["cards"][0]
> = ({ icon, color, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/70 backdrop-blur-xl p-7">
      {/* Glow */}
      <div
        className={`absolute -top-14 -right-14  w-35 aspect-square rounded-full blur-3xl opacity-60 ${color}`}
      />

      {/* Content */}
      <div className="flex flex-col gap-6">
        {/* Icon */}
        <div className="mb-2">
          {icon }
        </div>

        {/* Title */}
        <h3 className="text-2xl leading-none font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className=" text-[#B8B8B8]">
          {description}
        </p>
      </div>
    </div>
  );
};

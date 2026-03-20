import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { ServiceCard } from "./cards/ServiceCard";
import ServiceSlider from "./sliders/ServiceSlider";

interface ServicesSectionProps {
  title: string;
  subTitle: string;
  points: string[];
  services: {
    label?: string;
    src: string;
    title: string;
    description: string;
    result?: string;
    cta: {
      label: string;
      type: string;
    };
  }[];
  ctaCard: {
    title: string;
    description: string;
    cta: {
      label: string;
      type: string;
    };
  };
}
const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  subTitle,
  points,
  services,
  ctaCard,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-2 after:rounded-2xl before:bg-background-black1 before:content-[''] before:inset-0 before:absolute after:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <SectionHeading
        title={title}
        subTitle={subTitle}
        subTitleClassName="span-color-3"
        textCenter
        icon
        wrapperClassName="max-w-lg mx-auto gap-4"
      />
      <div className="flex flex-wrap md:max-w-[49.9rem] md:items-center justify-center w-full md:mt-8 mt-4 mx-auto md:gap-4 gap-2">
        {points.map((point, index) => (
          <PointsCards
            key={index}
            point={point}
            icon={index === 0 ? true : false}
          />
        ))}
      </div>
      <div className="lg:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7.5 gap-x-7  mt-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <ServiceSlider services={services} />
      <div className="border border-main-border bg-linear-to-r from-30% from-[#Eff4ff] to-70% to-[#f7f7f7] md:py-7.5 py-5 md:px-13.5 px-3 rounded-2xl md:mt-14 mt-6 flex max-md:flex-col items-center gap-5 justify-between">
        <div className="space-y-4">
          <SectionHeading
            subTitle={ctaCard.title}
            subLevel={2}
            subTitleClassName="md:text-[1.875rem] text-2xl! max-md:text-center"
          />
          <p className="max-md:text-center">{ctaCard.description}</p>
        </div>
        <CtaBtn
          label={ctaCard.cta.label}
          type="button"
          icon="arrow2"
          className="bg-color4 rounded-full text-white border-none"
          iconClass="bg-transparent!"
        />
      </div>
    </SectionWithContainer>
  );
};

export default ServicesSection;

export const PointsCards = ({
  point,
  icon,
}: {
  point: string;
  icon?: boolean;
}) => {
  return (
    <div className="w-fit flex items-center gap-4 border border-main-border rounded-full lg:px-5 px-4 lg:py-3 py-2">
      {icon && <Foo />}
      <p
        className="text-secondary lg:text-lg md:text-sm text-[9px]"
        dangerouslySetInnerHTML={{ __html: point }}
      />
    </div>
  );
};

export const Foo = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x={1}
      y={1}
      width={10}
      height={10}
      rx={5}
      fill="url(#paint0_radial_270_12519)"
      stroke="#C9F3BB"
      strokeWidth={2}
    />
    <defs>
      <radialGradient
        id="paint0_radial_270_12519"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6 6) rotate(90) scale(4)"
      >
        <stop stopColor="#B2F5BA" />
        <stop offset={1} stopColor="#46CB42" />
      </radialGradient>
    </defs>
  </svg>
);

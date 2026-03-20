import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

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
      <div className="flex flex-wrap max-w-[49.9rem]  mt-8 mx-auto gap-4">
        {points.map((point, index) => (
          <PointsCards
            key={index}
            point={point}
            icon={index === 0 ? true : false}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7.5 gap-x-7  mt-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="border border-main-border bg-linear-to-r from-30% from-[#Eff4ff] to-70% to-[#f7f7f7] py-7.5 px-13.5 rounded-2xl mt-14 flex items-center gap-5 justify-between">
        <div className="space-y-4">
          <SectionHeading
            subTitle={ctaCard.title}
            subLevel={2}
            subTitleClassName="md:text-[1.875rem]"
          />
          <p className="">{ctaCard.description}</p>
        </div>
        <CtaBtn label={ctaCard.cta.label} type="button" icon="arrow2" className="bg-color4 rounded-full text-white border-none" />
      </div>
    </SectionWithContainer>
  );
};

export default ServicesSection;

export const ServiceCard: React.FC<ServicesSectionProps["services"][0]> = ({
  title,
  description,
  src,
  result,
  cta,
  label,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-blur p-2 border border-main-border flex flex-col gap-3">
      <div className="w-full relative aspect-4/2 rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {label && (
          <>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-linear-to-b from-20% from-black/70 to-100% to-transparent" />
            <span className="px-3 py-2 rounded-full glassy-card text-white bg-white/10 absolute z-20 top-4 right-4 text-xs font-medium uppercase border-l">
              {label}
            </span>
          </>
        )}
      </div>
      <div className="px-1.5 py-2 flex flex-col gap-4 min-h-75">
        <h3 className="text-[27px] text-primary font-semibold">{title}</h3>
        <p className="text-lg text-secondary">{description}</p>
        {result && (
          <div className="text-[#16a34a] rounded-md w-fit font-semibold py-1.5 bg-[#ECFDF3] px-3 flex items-center gap-2">
            <span>
              <ResultIcon />
            </span>
            <p> {result}</p>
          </div>
        )}
        <CtaBtn
          label={cta.label}
          type="button"
          className="bg-background-black1 mt-auto text-white w-full rounded-full justify-between!"
          icon="arrow"
        />
      </div>
    </div>
  );
};

export const PointsCards = ({
  point,
  icon,
}: {
  point: string;
  icon?: boolean;
}) => {
  return (
    <div className="w-fit flex items-center gap-4 border border-main-border rounded-full px-5 py-3">
      {icon && <Foo />}
      <p
        className="text-secondary text-lg"
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

export const ResultIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.52245 14.383C2.39315 14.2539 2.33197 14.1054 2.33891 13.9376C2.34585 13.7698 2.40703 13.6283 2.52245 13.513L6.72599 9.25489C7.01335 8.96211 7.36912 8.81573 7.79328 8.81573C8.21731 8.81573 8.57572 8.96211 8.86849 9.25489L10.9502 11.3495C10.9984 11.3975 11.0572 11.4216 11.1266 11.4216C11.1961 11.4216 11.2575 11.3975 11.3108 11.3495L15.8045 6.90552H13.9583C13.7809 6.90552 13.6325 6.84572 13.5129 6.72614C13.3931 6.60642 13.3333 6.45788 13.3333 6.28052C13.3333 6.10316 13.3931 5.95468 13.5129 5.8351C13.6325 5.71538 13.7809 5.65552 13.9583 5.65552H17.1633C17.3781 5.65552 17.5574 5.72739 17.701 5.87114C17.8447 6.01489 17.9166 6.19413 17.9166 6.40885V9.61385C17.9166 9.79121 17.8568 9.93975 17.737 10.0595C17.6175 10.1791 17.469 10.2389 17.2916 10.2389C17.1143 10.2389 16.9658 10.1804 16.8462 10.0634C16.7265 9.94649 16.6666 9.79934 16.6666 9.62198V7.78364L12.1939 12.2566C11.9064 12.5439 11.5506 12.6876 11.1266 12.6876C10.7025 12.6876 10.3467 12.5439 10.0593 12.2566L7.97745 10.1747C7.9294 10.1266 7.86801 10.1026 7.79328 10.1026C7.71842 10.1026 7.65697 10.1266 7.60891 10.1747L3.40058 14.383C3.27988 14.5039 3.13349 14.5643 2.96141 14.5643C2.78947 14.5643 2.64315 14.5039 2.52245 14.383Z"
      fill="#16A34A"
    />
  </svg>
);

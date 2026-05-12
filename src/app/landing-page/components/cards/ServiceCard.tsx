import { ServicesSectionProps } from "@/@types/@landingPageType";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import Image from "next/image";

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
      <div className="w-full relative md:aspect-4/2 aspect-4/2.25 rounded-2xl overflow-hidden">
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
            <span className="px-3 md:py-2 py-1.5 rounded-full glassy-card text-white bg-white/10 absolute z-20 top-4 right-4 md:text-xs text-[10px] font-medium uppercase border-l">
              {label}
            </span>
          </>
        )}
      </div>
      <div className="px-1.5 py-2 flex flex-col gap-4 md:min-h-[11rem] min-h-[11.25rem]">
        <p className="md:text-[27px] text-xl text-primary font-semibold">{title}</p>
        <p className="md:text-lg text-sm text-secondary">{description}</p>
        {result && (
          <div className="text-[#16a34a] max-md:text-xs rounded-md w-fit font-semibold py-1.5 bg-[#ECFDF3] px-3 flex items-center gap-2">
            <span>
              <ResultIcon />
            </span>
            <p> {result}</p>
          </div>
        )}
        {/* <CtaBtn
          label={cta.label}
          type={cta.type}
          href={cta.href}
          target={cta.target}
          className="bg-background-black1 mt-auto text-white w-full rounded-full justify-between!"
          icon="arrow"
        /> */}
      </div>
    </div>
  );
};



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
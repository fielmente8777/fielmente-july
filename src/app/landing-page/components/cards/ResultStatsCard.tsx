import { ResultsSectionProps } from "@/@types/@landingPageType";

export const ResultStatsCard: React.FC<
  ResultsSectionProps["stats"][0] & { index: number }
> = ({ label, value, description, index }) => {
  return (
    <div className="flex flex-col max-md:aspect-4/4.5 justify-between gap-2.5  px-5.75 py-7.5 text-white relative after:absolute after:inset-0 after:bg-[#191E31] after:z-[-2] overflow-hidden">
      <span
        className="text-[3.25rem] font-semibold"
        dangerouslySetInnerHTML={{ __html: value }}
      ></span>
      <span
        className={`absolute z-[-1] -top-9 span-color-5 ${index === 0 ? "-right-2" : index === 1 ? "-right-7" : "-right-22"} text-[90px] text-[#1B2A42]! w-fit font-semibold`}
        dangerouslySetInnerHTML={{ __html: value }}
      ></span>
      <div className="space-y-1">
        <h3 className="text-base font-semibold">{label}</h3>
        <p className="text-sm text-[#CECECE] pr-6">{description}</p>
      </div>
    </div>
  );
};
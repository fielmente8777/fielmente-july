import { MarketingExpertiseDataTypes } from "@/@types/@homeType";

export const MarketingCard: React.FC<
  MarketingExpertiseDataTypes["cards"][0]
> = ({ title, subtitle, icon }) => {
  return (
    <div className="md:px-10 px-6 md:py-11 py-8 space-y-4 border border-[#C6C9CE] rounded-2xl">
      <div>{icon}</div>
      <h3 className="text-[1.375rem] font-bold text-primary mt-4">{title}</h3>
      <p className="text-[#6B7280]">{subtitle}</p>
    </div>
  );
};
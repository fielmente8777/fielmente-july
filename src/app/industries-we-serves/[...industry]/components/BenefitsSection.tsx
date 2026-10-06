import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
interface BenefitsSectionProps {
  image: string;
  title: string;
  description: string;
  cta: {
    label: string;
    type: "button";
  };
  stats: {
    value: string;
    label: string;
  }[];
}
const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  image,
  title,
  description,
  cta,
  stats,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-[1.2fr_2fr] grid-cols-1 items-center gap-5">
        <div className="w-full relative aspect-4/3.5">
          <Image fill src={image} alt={title} className="object-contain" />{" "}
        </div>
        <div className="flex flex-col gap-6">
          <SectionHeading subTitle={title} subLevel={2} />
          <p className="text-secondary md:text-lg">{description}</p>
          <CtaBtn
            label={cta.label}
            type={cta.type}
            className="border-b border-0 px-0! py-2! hover:shadow-none border-[#6664E4] w-fit! "
            icon="arrow2"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default BenefitsSection;

export const StatsCard: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => {
  return (
    <div className="flex flex-col items-center gap-3 xl:max-w-[400px] md:max-w-[250px] w-full">
      <p className="text-2xl md:text-4xl font-semibold">{value}</p>
      <p className="text-secondary md:text-xl">{label}</p>
    </div>
  );
};

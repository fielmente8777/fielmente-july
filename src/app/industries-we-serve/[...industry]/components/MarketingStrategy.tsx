import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

interface MarketingStrategyProps {
  title: string;
  description?: string;
}

const MarketingStrategy: React.FC<MarketingStrategyProps> = ({
  title,
  description,
}) => {
  return (
    <SectionWithContainer containerClassName="md:max-w-5xl! space-y-6">
      <SectionHeading
        subTitle={title}
        textCenter
        subLevel={2}
        subTitleColor="primary2"
        subTitleClassName="span-color-4"
      />
      {description && (
        <p className="md:text-lg text-gray-600 text-center">{description}</p>
      )}
    </SectionWithContainer>
  );
};

export default MarketingStrategy;

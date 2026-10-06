import { WhyNeedSeoProps } from "@/@types/@industryPageType";
import Image from "next/image";

const WhyNeedSeoCard: React.FC<WhyNeedSeoProps["cards"][0]> = ({
  title,
  src,
  subtitle,
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
      <div className="w-15 aspect-square relative">
        <Image src={src} alt={title} fill className="object-contain" />
      </div>
      <div className="space-y-1">
        <p className="font-semibold lg:text-xl text-lg text-primary2">{title}</p>
        <p className="text-secondary lg:text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default WhyNeedSeoCard;

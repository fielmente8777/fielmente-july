import { WhyNeedProps } from "@/@types/@industryPageType";
import Image from "next/image";

const WhyNeedCard: React.FC<WhyNeedProps["cards"][0]> = ({ title, src }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-primary2 rounded-full w-[120px] aspect-square flex items-center justify-center">
        <div className="w-22 relative aspect-4/3">
          <Image src={src} alt={title} fill className="object-contain" />
        </div>
      </div>
      <p className="text-center text-[1.375rem] text-[#222121] font-semibold px-7">{title}</p>
    </div>
  );
};

export default WhyNeedCard;

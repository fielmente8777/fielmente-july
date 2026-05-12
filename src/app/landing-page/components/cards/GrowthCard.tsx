import { GrowthSectionProps } from "@/@types/@landingPageType";
import Image from "next/image";

export const GrowthCard = ({
  title,
  description,
  src,
}: GrowthSectionProps["points"][0]) => {
  return (
    <div className="grid grid-rows-[auto_0.4fr_1fr] gap-3 p-8 bg-white rounded-2xl">
      <p className="text-lg font-semibold">{title}</p>
      <p>{description}</p>
      <div className="w-48 aspect-4/4 relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

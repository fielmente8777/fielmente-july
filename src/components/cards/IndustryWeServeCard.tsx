import { IndustryWeServeDataTypes } from "@/@types/@homeType";
import Image from "next/image";

const IndustryWeServeCard: React.FC<
  IndustryWeServeDataTypes["cards"][0] & { index: number; activeSlide: number }
> = ({ title, imgSrc, desc, index, activeSlide }) => {
  return (
    <div
      className={`w-full  relative overflow-hidden rounded-2xl transition-all duration-300 ${index === activeSlide ? "aspect-4/4.75" : "aspect-4/4.5 mt-3"}`}
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col font-medium justify-between p-6 text-white">
        <h3 className="text-base md:text-[27.64px] ">{title}</h3>
        <p className="md:text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default IndustryWeServeCard;

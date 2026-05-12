"use client";
import { WhyChooseUsDataTypes } from "@/@types/@homeType";
import Image from "next/image";

export const ChooseCard2: React.FC<
  WhyChooseUsDataTypes["cardsData"][0] & { index: number }
> = ({ heading, description, src }) => {
  return (
    <div className="p-6 space-y-8 rounded-2xl border border-main-border">
      <div className="relative w-full aspect-4/2 rounded-2xl overflow-hidden border-4 border-[#F7F7F7]">
        <Image src={src} alt={heading} fill className="object-cover" />
      </div>
      <div className="space-y-4.5">
        <p className="text-xl font-semibold">{heading}</p>

        {description && <p className="text-secondary">{description}</p>}
      </div>
    </div>
  );
};
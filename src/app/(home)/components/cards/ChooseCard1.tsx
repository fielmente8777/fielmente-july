"use client";
import Image from "next/image";
import { TickIcon } from "../WhyChooseUs";
import { SectionWithContainer } from "@/components";
import { WhyChooseUsDataTypes } from "@/@types/@homeType";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

export const ChooseCard1: React.FC<
  WhyChooseUsDataTypes["cardsData"][0] & { index: number }
> = ({ index, heading, description, body, src, points }) => {
  return (
    <SectionWithContainer
      sectionClassName={`${index % 2 !== 0 ? "bg-[#F5F6F8]" : ""}
    `}
      containerClassName="grid xl:grid-cols-9 grid-cols-1 gap-6 xl:gap-16"
    >
      <div
        className={`relative w-full xl:hidden aspect-4/3  rounded-2xl overflow-hidden border-4 border-[#F7F7F7]`}
      >
        <Image src={src} alt={heading} fill className="object-cover" />
      </div>
      <div
        className={`xl:col-span-6 space-y-5 ${index % 2 === 0 ? "md:order-2" : ""}`}
      >
        <SectionHeading
          subTitle={heading}
          subLevel={2}
          subTitleClassName="lg:text-[36px]"
        />
        <p
          className="text-secondary text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <ul className="space-y-4">
          {points?.map((item, index) => (
            <li
              key={index}
              className="text-secondary text-lg flex items-center gap-2.5"
            >
              <span>
                <TickIcon />
              </span>{" "}
              {item}
            </li>
          ))}
        </ul>
        {description && (
          <p
            className="text-secondary text-lg inter-link"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      <div
        className={`relative w-full xl:block hidden aspect-auto h-auto rounded-2xl overflow-hidden border-4 border-[#F7F7F7] xl:col-span-3`}
      >
        <Image src={src} alt="hero" fill className="object-cover" />
      </div>
    </SectionWithContainer>
  );
};
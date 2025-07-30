"use client";
import { AddsCardsPropsType } from "@/@types/@types";
import { SectionWithContainer } from "../sectionComponants";
import OnlyButton from "../buttons/OnlyButton";
import { useContext } from "react";
import { AppContext } from "@/contextApi/AppContext";

const AddsCard: React.FC<AddsCardsPropsType> = ({
  title,
  description,
  links,
}) => {
  const { setIsOpenPopupForm } = useContext(AppContext);
  return (
    <SectionWithContainer
      sectionClassName="relative before:content-[''] before:inset-0 before:absolute before:bg-[#f5f5f5] before:z-[-1] md:py-[140px] py-10"
      defaultPadding={false}
    >
      <div
        className="rounded-4xl px-14 py-12 after:content-['']
      after:rounded-4xl relative after:absolute after:inset-0 after:bg-[url('/CTA.png')] after:bg-cover after:bg-no-repeat after:bg-center after:w-full after:z-[-1]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl md:gap-28 items-center mx-auto">
          <div className="">
            <h2
              className="text-white lg_font_s"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>
          <div className="md:col-span-2 max-w-lg ml-auto">
            <p className="text-white text-xl" dangerouslySetInnerHTML={{ __html: description }}></p>
            {links.map((link, index) => (
              <OnlyButton
                onclick={() => setIsOpenPopupForm(true)}
                key={index}
                label={link.label}
                className="mt-6 text-secondary bg-white rounded-lg font-medium border-secondary"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AddsCard;

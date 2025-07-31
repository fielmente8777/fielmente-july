"use client";
import { AboutCompanyPropsType } from "@/@types/@types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import { AppContext } from "@/contextApi/AppContext";
import { RightTickIcon } from "@/utils/icons";
import Image from "next/image";
import { useContext } from "react";

const AboutCompany: React.FC<AboutCompanyPropsType> = ({
  title,
  subTitle,
  description,
  listData,
  linksData,
  imgSrc,
}) => {
    const { setIsOpenPopupForm } = useContext(AppContext);
  
  return (
    <SectionWithContainer sectionClassName="about-class">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3 flex flex-col gap-8 max-w-2xl">
          <SectionHeadingDesc
            title={title}
            subTitle={subTitle}
          />
          <p className="text-light text-xl">
            {description[0]}
          </p>
          <ul className="flex flex-col gap-4">
            {listData.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-light">
               <span className=""><RightTickIcon /></span> {item}
              </li>
            ))}
          </ul>
          <p className="text-light font-semibold text-xl">
            {description[1]}
          </p>
          <div className="flex gap-4">
            {linksData.map((item, index) => (
              <button onClick={() => setIsOpenPopupForm(true)} key={index} className="text-secondary bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2">
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="relative w-full  aspect-square">
            <Image
              src={imgSrc[0]}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutCompany;

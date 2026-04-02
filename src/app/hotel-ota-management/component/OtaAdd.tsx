"use client";
import { OtaAddType } from "@/@types/@landingPageType";
import { SectionWithContainer } from "@/components/sectionComponants";
import { useAppContext } from "@/contextApi/AppContext";

const OtaAdd: React.FC<OtaAddType> = ({ title, subTitle, links }) => {
  const { setIsOpenPopupForm } = useAppContext();
  return (
    <SectionWithContainer sectionClassName="bg-[#F5F5F5]">
      <div className="w-full max-w-lg mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-[40px]/[48px] font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-[#f26633]">
          {title}
        </h2>
        <p className="text-lg text-[#6F6F6F]">{subTitle}</p>
        <div className="flex w-full items-center justify-center gap-4 relative after:absolute md:after:w-[55px] after:w-[40px] md:after:h-[72px] after:h-[60px] after:bg-[url('/bg.png')] after:bg-contain after:bg-no-repeat  md:after:top-[-55%] after:top-[-65%] md:after:left-[13.5%] after:-left-1">
          {links.map((item, index) => (
            <button
              onClick={() => setIsOpenPopupForm(true)}
              key={index}
              className="flex items-center gap-2 bg-[#f26633] text-white text-lg md:py-4 py-3 px-6 rounded-lg w-fit hover:bg-white hover:text-[#f26633] border border-[#f26633] hover:scale-x-95 transition-all duration-300 ease-in-out active:scale-100"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OtaAdd;

"use client";
import { ProductsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { useState } from "react";

const OurProducts: React.FC<ProductsDataTypes> = ({
  title,
  subTitle,
  description,
  cards,
}) => {
  const [showMore, setShowMore] = useState(false);
  // login Page Open
  const login = () => {
    window.open("https://dashboard.eazotel.com/login", "_blank");
  };
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <SectionHeading title={title} subTitle={subTitle} />
        <p
          className="text-secondary text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {cards.slice(0, showMore ? cards.length : 8).map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={login}
          className="text-sm text-white bg-[#1B1B1B] font-semibold border border-[#1B1B1B] rounded-full px-6 py-3"
        >
          Login/SignUp <span></span>
        </button>
        {cards.length > 8 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-primary font-semibold border border-[#1B1B1B] rounded-full px-6 py-3"
          >
            {showMore ? "Show less" : "See More Products"}
          </button>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default OurProducts;

const ProductCard: React.FC<ProductsDataTypes["cards"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-[#FAFAFA] border border-[#E3E3E3] rounded-2xl p-6 space-y-4 group hover:bg-[#2b59ff] transition-colors duration-300 ease-in-out">
      <div className="group-hover:bg-white group-hover:text-[#2b59ff] group-hover:border-none flex items-center justify-center  w-14 aspect-square rounded-full border border-[#E3E3E3]">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-primary group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] group-hover:text-[#DDDDDD]">
          {description}
        </p>
      </div>
    </div>
  );
};

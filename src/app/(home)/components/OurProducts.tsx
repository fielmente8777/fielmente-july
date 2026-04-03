"use client";
import { ProductsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import ProductCard from "@/components/cards/ProductCard";
import ProductSlider from "@/components/slider/ProductSlider";
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
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"> */}
      <div className="md:flex hidden flex-wrap justify-center gap-5.5 mt-10">
        {cards.slice(0, showMore ? cards.length : 8).map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
      <ProductSlider cards={cards} />

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

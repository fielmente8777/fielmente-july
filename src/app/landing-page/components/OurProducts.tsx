"use client";
import { ProductsDataTypes } from "@/@types/@homeType";
import { Container, Section } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import ProductCard from "@/components/cards/ProductCard";
import ProductSlider from "@/components/slider/ProductSlider";

const OurProducts: React.FC<ProductsDataTypes> = ({
  title,
  subTitle,
  description,
  cards,
  cta,
}) => {
  return (
    <Section className="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <SectionHeading title={title} subTitle={subTitle} />
          <p
            className="text-secondary text-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        {/* <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"> */}
        <div className="md:flex hidden flex-wrap justify-center gap-5.5 mt-10">
          {cards.map((card, index) => (
            <ProductCard key={index} {...card} />
          ))}
        </div>
      </Container>
      <ProductSlider cards={cards} />
      {cta && (
        <Container>
          <div className="md:mt-12 mt-4 flex justify-center gap-4">
            <CtaBtn
              label={cta.label}
              type={cta.type}
              href={cta.href}
              target={cta.target}
              className="bg-background-black1 text-white md:w-54 rounded-full justify-between!"
              icon="arrow"
            />
          </div>
        </Container>
      )}
    </Section>
  );
};

export default OurProducts;

"use client";
// A client component so the page data carries this section's text once, not its full markup again
// (Next.js puts that data in the HTML; it was a large part of the home page size).
import { ProductsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import ProductCardNew from "@/components/cards/ProductCardNew";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const OurProducts: React.FC<ProductsDataTypes> = ({
  title,
  subTitle,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <SectionHeading title={title} subTitle={subTitle} />
        <p
          className="text-secondary text-lg"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></p>
      </div>
      {/* One set of cards for every screen: a wrapped grid on tablets and desktops, a swipeable row on
          phones (snap-row in globals.css). Phones used to get a second copy in a slider, which search
          engines and SEO checkers see as duplicate text. */}
      <div className="snap-row md:flex flex-wrap justify-center gap-8.5 mt-10">
        {cards.map((card, index) => (
          <ProductCardNew key={index} {...card} />
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4 max-sm:hidden">
        <a
          href="https://dashboard.eazotel.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white bg-[#1B1B1B] font-semibold border border-[#1B1B1B] rounded-full px-6 py-3"
        >
          Login/SignUp
        </a>
      </div>
    </SectionWithContainer>
  );
};

export default OurProducts;

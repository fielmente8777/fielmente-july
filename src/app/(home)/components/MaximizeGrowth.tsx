"use client";
import { MaximizeGrowthPropsType } from "@/@types/@types";
import { Section, SectionHeadingDesc } from "@/components";
import { MaximizeGrowthCard } from "@/components/cards";
import SwiperCarousel from "@/components/SwiperCarousel";
import { Autoplay, Pagination } from "swiper/modules";

const MaximizeGrowth: React.FC<MaximizeGrowthPropsType> = ({
  title,
  subTitle,
  cards,
  links,
}) => {
  return (
    <Section className="bg-primary px-4">
      <div className="flex flex-col gap-8 md:gap-14 w-full">
        <SectionHeadingDesc
          title={title}
          subTitle={subTitle}
          textcenter
          subTitleColor="white"
          wrapperClassName="max-w-5xl mx-auto text-color"
        />
        <div className="">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            renderSlide={(item, index) => (
              <MaximizeGrowthCard key={index} {...item} />
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default MaximizeGrowth;

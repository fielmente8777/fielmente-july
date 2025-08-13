"use client";
import { MarketingPartnersPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const MarketingPartners: React.FC<MarketingPartnersPropsType> = ({ cards }) => {
  return (
    <SectionWithContainer
      sectionClassName="box-shadow md:py-[3rem] py-8"
      defaultPadding={false}
    >
      <div className="md:grid hidden grid-cols-5 gap-28">
        {cards.map((card, index) => (
          <div key={index} className="relative aspect-[3/1.04] w-full">
            <Image
              src={card.imgSrc}
              fill
              className="object-contain"
              alt="img"
            />
          </div>
        ))}
      </div>
      <div className="w-full md:hidden">
        <SwiperCarousel
          data={cards}
          slidesPerView={2}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          renderSlide={(item, index) => (
            <div key={index} className="relative aspect-[3/.6] w-full">
              <Image
                src={item.imgSrc}
                fill
                className="object-contain"
                alt="img"
              />
            </div>
          )}
        />
      </div>
    </SectionWithContainer>
  );
};

export default MarketingPartners;

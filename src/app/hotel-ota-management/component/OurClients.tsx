"use client";
import { Container, Section } from "@/components";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";

interface OurClientProps {
  title?: string;
  subTitle?: string;
  items?: {
    src: string | StaticImageData;
    alt: string;
    className?: string;
    show?: boolean;
  }[];
}

const OurClients = ({ items, subTitle, title }: OurClientProps) => {
  const pathName = usePathname();

  

  if (pathName === "/landing-page/") {
    items = items?.filter((item) => item.show !== false);
  }

  return (
    <Section className="">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        {pathName !== "/landing-page/" && <h2 className="bg-[#FFE7DE] text-primary2 text-sm rounded-full px-4 w-fit mx-auto py-2 poppins">
          {title}
        </h2>}

        <h3 className="md:text-5xl text-3xl font-medium text-primary2 poppins">
          {subTitle}
        </h3>
      </div>

      <div className="mt-10 space-y-4 bg-white">
        {/* upper line gradient */}
        <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full" />

        <Container>
          {/* slider demo*/}
          <div className="demo">
            <SwiperCarousel
              data={items || []}
              speed={5000}
              loop={true}
              modules={[Autoplay, FreeMode]}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              slidesPerView={2}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 6,
                  spaceBetween: 24,
                },
              }}
              renderSlide={(item, index) => (
                <div key={index} className="w-full relative aspect-[4/2.5]">
                  <Image
                    src={item?.src}
                    alt={item?.alt}
                    className="object-contain p-2 rounded-lg"
                    sizes="100%"
                    style={{ backgroundColor: item?.className }}
                    fill
                  />
                  {/* <div className="absolute top-0 left-0 z-50 text-black bg-white w-full  text-xl font-bold flex items-center justify-center ">
                    {item?.alt}
                  </div> */}
                </div>
              )}
            />
          </div>
        </Container>

        {/* lower line gradient */}
        <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full" />
      </div>
    </Section>
  );
};

export default OurClients;

"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Autoplay } from "swiper/modules";

import { Container, Section } from "@/components";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Riview = () => {
  const pathName = usePathname();
  return (
    <Section
      id={
        pathName === "/landing-page/" ||
        pathName === "/resort/" ||
        pathName === "/hospitality/"
          ? "reviews"
          : ""
      }
    >
      <Container>
        <h2 className="lg:text-4xl text-2xl font-normal helv text-primary2 text-center mb-10">
          Our <b className="text-orange-primary">Reviews</b>
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {OtaImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full lg:aspect-[4/2.5] aspect-[4/4]  rounded-xl flex justify-center items-center">
                <Image
                  src={item.src}
                  alt="review"
                  // width={100}
                  // height={100}
                  fill
                  priority={true}
                  className="object-resize w-full h-full rounded-md p-3 bg-white"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Riview;

const OtaImages = [
  {
    src: "/Review/Screenshot 2024-11-14 142706.png",
    alt: "make my trip",
  },
  {
    src: "/Review/Screenshot 2024-11-14 211359.png",
    alt: "clear trip",
  },
  {
    src: "/Review/Screenshot 2024-11-14 211453.png",
    alt: "clear trip",
  },
  {
    src: "/Review/Screenshot 2024-11-14 211544.png",
    alt: "clear trip",
  },
  {
    src: "/Review/Screenshot 2024-11-14 211627.png",
    alt: "clear trip",
  },
];

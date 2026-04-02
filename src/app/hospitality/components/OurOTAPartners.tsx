"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Autoplay } from "swiper/modules";

import { Container, Section } from "@/components";
import SectionHeading from "./SectionHeading";

const OurOTAPartners = () => {
  const SectionHeadingDetails = {
    title: "Our ",
    span: "Partners",
    Color: true,
  };
  return (
    <Section className="lg:py-16 bg-white">
      <Container>
        <SectionHeading {...SectionHeadingDetails} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={2}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="mySwiper mt-12 max-md:mt-8"
        >
          {OtaImages.map((item, index) => (
            <SwiperSlide key={index} className="p-2">
              <div
                // href={"/"}
                className="relative w-full lg:aspect-[3/1.5] aspect-[4/4] h-[7rem] rounded-xl flex justify-center items-center hover:shadow-lg shadow-slate-300 transition "
              >
                <Image
                  src={item.src}
                  alt={`${item.alt}`}
                  // width={100}
                  // height={100}
                  fill
                  priority={true}
                  className="object-contain w-full h-full rounded-md p-3 bg-white"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default OurOTAPartners;

const OtaImages = [
  {
    src: "/partners/makemytrip-logo.png",
    alt: "make my trip",
  },
  {
    src: "/partners/cleartrip-logo.png",
    alt: "clear trip",
  },
  {
    src: "/partners/airbnb-logo.png",
    alt: "airbnb",
  },
  {
    src: "/partners/goibibo-logo.png",
    alt: "goibibo",
  },
  {
    src: "/partners/agoda-logo.png",
    alt: "agoda",
  },
  {
    src: "/partners/razorpay.png",
    alt: "razorpay",
  },
  {
    src: "/partners/makemytrip-logo.png",
    alt: "make my trip",
  },
  {
    src: "/partners/cleartrip-logo.png",
    alt: "clear trip",
  },
  {
    src: "/partners/airbnb-logo.png",
    alt: "airbnb",
  },
  {
    src: "/partners/goibibo-logo.png",
    alt: "goibibo",
  },
  {
    src: "/partners/agoda-logo.png",
    alt: "agoda",
  },
  {
    src: "/partners/razorpay.png",
    alt: "razorpay",
  },
];

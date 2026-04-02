"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import Link from "next/link";
import { Autoplay, FreeMode } from "swiper/modules";

import { Container } from "@/components/sectionComponants";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const OurOTAPartners = () => {
  const SectionHeadingDetails = {
    title: "OTA Partners",
  };
  return (
    <Section className="bg-white">
      <Container className="demo">
        <SectionHeading {...SectionHeadingDetails} />
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={5}
          slidesPerView={2}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
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
              <Link
                href={"/"}
                className="w-full block relative aspect-[4/2.5] shadow-xl shadow-primary/20 rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={`${item.alt}`}
                  fill
                  sizes="100%"
                  className="object-contain p-2 rounded-lg"
                />
              </Link>
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

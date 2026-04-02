"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import FeatureCard from "./FeatureCard";
// import Divider from './Divider';
// import Pagination from './Pagination';

interface Feature {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1a4a8d22ab904d74f2e3f3e281c2669ef4f05d870ab68c410514bf78008825be?apiKey=c81aa461ed88497c9715fa37b92c8996&",
    title: "SAVE YOUR TIME",
    subtitle: "Best Services",
    description:
      "We are committed to provide quality services. We make sure that each and every detail is paid attention to and only the best is presented to you. We plan and work as a team so that no area is left untouched. We bring ideas to life and serve you the incomparable!",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/48f2050121f24aeb7119b260ff816827384d8dc056c8e33688000471c06f23dc?apiKey=c81aa461ed88497c9715fa37b92c8996&",
    title: "ALL YOU NEED",
    subtitle: "Professional",
    description:
      "We're a team of qualified & experienced individuals who work together through thick & thin. We have worked with various clients and our greatest ethical responsibility has always been to constantly strive for excellence in everything we do. We assure you professionalism by all means & ensure things are done in the right way.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e91f983e17b0fcebf9ebd313d25568597062b1a92db889be072ad3dca2a71894?apiKey=c81aa461ed88497c9715fa37b92c8996&",
    title: "DEDICATED SUPPORTS",
    subtitle: "Support",
    description:
      "We are here to help you get through all your concerns. We are always available in sorting out your issues throughout your journey. We would love to hear from you no matter what, in order to deliver the best. We understand the importance of your business and are therefore more than happy to be your support system.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1a4a8d22ab904d74f2e3f3e281c2669ef4f05d870ab68c410514bf78008825be?apiKey=c81aa461ed88497c9715fa37b92c8996&",
    title: "SAVE YOUR TIME",
    subtitle: "Best Services",
    description:
      "We are committed to provide quality services. We make sure that each and every detail is paid attention to and only the best is presented to you. We plan and work as a team so that no area is left untouched. We bring ideas to life and serve you the incomparable!",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/48f2050121f24aeb7119b260ff816827384d8dc056c8e33688000471c06f23dc?apiKey=c81aa461ed88497c9715fa37b92c8996&",
    title: "ALL YOU NEED",
    subtitle: "Professional",
    description:
      "We're a team of qualified & experienced individuals who work together through thick & thin. We have worked with various clients and our greatest ethical responsibility has always been to constantly strive for excellence in everything we do. We assure you professionalism by all means & ensure things are done in the right way.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e91f983e17b0fcebf9ebd313d25568597062b1a92db889be072ad3dca2a71894?apiKey=c81aa461ed88497c9715fa37b92c8996&",
    title: "DEDICATED SUPPORTS",
    subtitle: "Support",
    description:
      "We are here to help you get through all your concerns. We are always available in sorting out your issues throughout your journey. We would love to hear from you no matter what, in order to deliver the best. We understand the importance of your business and are therefore more than happy to be your support system.",
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="flex flex-col">
      <h2 className="w-full text-4xl font-bold leading-10 text-center max-md:max-w-full">
        <span className="text-[#110D3C]">Why</span>{" "}
        <span className="text-[#F26633]">Us?</span>
      </h2>
      <div className="mt-14">
        {/* {features.map((feature, index) => (
                    <div key={index} className='flex gap-5'>

                        {index > 0 && <div className="hidden lg:block my-auto w-px bg-[#F26633] h-[270px]" />}

                        <FeatureCard {...feature} />
                    </div>
                ))} */}

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          loop={true}
          slidesPerView={1}
          speed={2000}
          pagination={{
            type: "bullets",
            clickable: true,
            el: ".bullets-Portfolio",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="py-5">
              <div className="flex items-center justify-center">
                {/* {index > 0 && ( */}
                <div className="hidden lg:block  w-px bg-[#F26633] h-[270px] -ms-2 me-16" />
                {/* )} */}
                <FeatureCard {...feature} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center bullets-Portfolio items-center gap-0 press"></div>
      </div>

      {/* <Pagination /> */}
    </section>
  );
};

export default WhyUs;

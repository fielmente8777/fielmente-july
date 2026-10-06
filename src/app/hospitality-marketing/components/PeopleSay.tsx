"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const PeopleSay = () => {
  return (
    <div className="md:py-20 py-10">
      <div className="max_width">
        <div className="max-w-[610px] mx-auto flex flex-col gap-4">
          <h2 className="text-center text-black lg:text-4xl text-2xl font-bold">
            What People Say About Us
          </h2>
        </div>

        <div className="mt-16">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            speed={2000}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PeopleSay;

const Card = ({
  src,
  alt,
  title,
  subtitle,
}: {
  src: string | StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="border border-gray-300 rounded-3xl  min-h-[19rem]">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-center justify-between px-10 py-4">
          <div className="flex gap-4 items-center">
            <Image
              src={src}
              alt={alt}
              width={70}
              height={70}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="text-black font-bold text-xl">{title}</p>
              <span className="text-lg">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <Image src="/SVG.webp" alt={alt} width={70} height={70} />
        </div>
        <div className="flex gap-4 items-center border-t py-5 px-10 border-gray-300">
          <p className="text-black text-lg">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

interface cradData_type {
  src: string | StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  Icon: string | StaticImageData;
}

const data: cradData_type[] = [
  {
    src: "/images/user3.png",
    alt: "antinder bajwa",
    title: "Antinder Bajwa",
    subtitle: `"I have used Fielmente for our Restaurant’s marketing. They are thoroughly professional and have helped us right from the start. Be the SEO or general day to day marketing."`,
    Icon: "/images/SVG.png",
  },
  {
    src: "/images/user1.png",
    alt: "Food Flatters",
    title: "Food Flatters",
    subtitle: `"Fielmente is highly personalized. Surveyed our outlets, checked and monitored our service area. They have provided dedicated support in every situation and strategy building."`,
    Icon: "/images/SVG.png",
  },
  {
    src: "/images/user2.png",
    alt: "naveen sanga",
    title: "Naveen Sanga",
    subtitle: `"They implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion. I was very happy thus for.".`,
    Icon: "/images/SVG.png",
  },
  {
    src: "/images/user3.png",
    alt: "antinder bajwa",
    title: "Antinder Bajwa",
    subtitle: `"I have used Fielmente for our Restaurant’s marketing. They are thoroughly professional and have helped us right from the start. Be the SEO or general day to day marketing."`,
    Icon: "/images/SVG.png",
  },
  {
    src: "/images/user1.png",
    alt: "Food Flatters",
    title: "Food Flatters",
    subtitle: `"Fielmente is highly personalized. Surveyed our outlets, checked and monitored our service area. They have provided dedicated support in every situation and strategy building."`,
    Icon: "/images/SVG.png",
  },
  {
    src: "/images/user3.png",
    alt: "naveen sanga",
    title: "Naveen Sanga",
    subtitle: `"They implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion. I was very happy thus for."`,
    Icon: "/images/SVG.png",
  },
];

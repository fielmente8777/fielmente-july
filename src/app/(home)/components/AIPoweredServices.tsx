"use client";
import { ServicesPropsType } from "@/@types/@types";
import { Section, SectionHeadingDesc } from "@/components";
import { AIPoweredServicesCard } from "@/components/cards";
import SwiperCarousel from "@/components/SwiperCarousel";
import { ArrowBtn2 } from "@/utils/icons";
import Link from "next/link";

const AIPoweredServices: React.FC<ServicesPropsType> = ({
  cards,
  title,
  links,
}) => {
  return (
    <Section className="px-4 relative before:content-[''] before:left-0 before:bottom-4 before:bg-[url('/home/waves.png')] before:bg-contain before:bg-no-repeat before:w-[153px] before:h-[30px] before:z-[-1] before:absolute">
      <div className="w-full bg-primary rounded-3xl py-20 flex flex-col md:gap-14 gap-8">
        <SectionHeadingDesc
          wrapperClassName="max-w-3xl mx-auto"
          subTitle={title}
          textcenter
          subTitleColor="white"
        />
        <div className="px-4">
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
            renderSlide={(item, index) => (
              <AIPoweredServicesCard key={index} {...item} />
            )}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link
              href={link.href}
              className="text-white font-medium underline underline-offset-1 flex items-center gap-2"
              key={index}
            >
              {link.label}
              <span>
                <ArrowBtn2 />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AIPoweredServices;

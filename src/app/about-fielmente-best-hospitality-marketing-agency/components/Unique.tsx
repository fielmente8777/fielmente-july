"use client";
import { UniqueSectionTypes } from "@/@types/@homeType";
import { Container, Section } from "@/components";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Unique: React.FC<UniqueSectionTypes> = ({
  title,
  description,
  images,
}) => {
  images = images.length > 5 ? images : [...images, ...images];

  return (
    <Section>
      <Container className="space-y-6">
        <SectionHeading subTitle={title} textCenter icon />
        <p className="text-secondary text-center md:max-w-176 mx-auto">
          {description}
        </p>
      </Container>
      <div className="mt-10">
        <div className="mt-16">
          <SwiperCarousel
            data={images}
            slidesPerView={1.9}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0, // no tilt (clean look like your design)
              stretch: -10, // keep spacing natural
              depth: 120, // pushes side slides back
              modifier: 2, // 🔥 THIS makes center BIG
              slideShadows: false,
            }}
            breakpoints={{
                768:{
                    coverflowEffect: {
                        stretch: -50,
                    },
                }
            }}
            renderSlide={(src) => {
              return (
                <div
                //   className={`transition-all duration-500 ${
                //     isActive ? "scale-100" : "scale-90"
                //   }`}
                >
                  <div className="relative w-full aspect-4/2.5 rounded-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Unique"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default Unique;

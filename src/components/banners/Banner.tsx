"use client";
// Client component: the page data then carries only this section's content, not a second copy of its
// markup (Next.js inlines that data in the HTML, which made the home page HTML very large).
import { BannerPropsType } from "@/@types/@types";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import Form from "../forms/Form";
import { Container, SectionWithContainer } from "../sectionComponants";
import AnimatedWord from "./ui/AnimatedWord";

const BANNER_ALT = "Hotel courtyard with a pool at night, lit by wall lanterns";

const Banner: React.FC<BannerPropsType> = ({ title, description, imgSrc }) => {
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ src: imgSrc, alt: BANNER_ALT, fill: true, sizes: "100vw", priority: true });
  const { props: mobileImg } = getImageProps({ src: "/home/bnr-sm.webp", alt: BANNER_ALT, fill: true, sizes: "100vw", priority: true });
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="py-7"
      containerClassName=""
    >
      <div className="relative overflow-hidden w-full md:aspect-[4/1.9255] aspect-[4/6.2]">
        {/* One <picture> instead of two <Image>s: phones get the tall crop, larger screens the wide one.
            Before, both images were in the page (and both preloaded on every device). */}
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
          {/* eslint-disable-next-line @next/next/no-img-element -- art direction needs a plain <img> inside <picture> (Next.js docs pattern) */}
          <img {...mobileImg} alt={BANNER_ALT} className="object-cover md:object-contain" />
        </picture>

        <div className="absolute inset-0  z-20">
          <Container className="xl:mt-20 mt-4">
            <div className="flex flex-col lg:gap-7 gap-3.5">
              {/* <div className="flex justify-center items-center gap-2 px-2.5 py-1.5 bg-white/10 backdrop-blur-xs text-white shadow-2xl shadow-white/15 rounded-full w-fit mx-auto"> */}
              <div className="flex justify-center items-center gap-2 px-2.5 py-1.5 text-white rounded-full w-fit mx-auto glassy-card">
                <Image
                  src="/home/Frame-3.png"
                  alt="Hotels and resorts that work with Fielmente"
                  width={40}
                  height={20}
                />
                <p className="max-md:text-[10px] text-[10px]">{title}</p>
              </div>
              <h1 className="text-white text-center lg:text-[2.5rem]/tight md:text-2xl text-[1.4rem] max-sm:h-[99px]  font-semibold pointer-events-auto">
                Fielmente - Global <br />
                <Link className="inter-link" href="/">
                  <span>
                    <AnimatedWord /> Marketing{" "}
                  </span>
                  <i> Agency</i>
                </Link>
              </h1>

              <p className="text-white text-center lg:text-lg max-sm:text-[10px] max-w-5xl mx-auto">
                {description}
              </p>
              <div className="max-w-5xl w-full mx-auto">
                <Form />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;

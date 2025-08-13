"use client"
import { BannerPropsType } from "@/@types/@types";
import { Container, Section } from "../sectionComponants";
import Image from "next/image";
import { Headings } from "../typography";
import Form from "../forms/Form";
import { ArrowBtn } from "@/utils/icons";
import { useContext } from "react";
import { AppContext } from "@/contextApi/AppContext";

const Banner: React.FC<BannerPropsType> = ({
  title,
  subTitle,
  description,
  imgSrc,
}) => {
  const { setIsOpenPopupForm } = useContext(AppContext);
  return (
    <Section
      defaultPadding={false}
      className="relative overflow-hidden w-full md:aspect-[16/8] aspect-[4/4.5] bg1"
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover md:object-top"
        priority
        loading="eager"
        sizes="100vw"
      />
      <Image
        src={"/home/Vector3.png"}
        alt={title}
        width={525}
        height={276.87}
        className="object-cover md:block  hidden absolute top-28 left-[42%] -translate-x-[42%] -translate-y-1/2 z-50"
        priority
        loading="eager"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/90 flex items-center justify-center">
        <Container className="bg2">
          <div className="flex flex-col gap-8 bg3 pointer-events-none">
            <Headings
              level={1}
              className="text-white text-center x_lg_font_s leading-2"
              heading={title}
            />

            <Headings
              level={2}
              className="text-white text-center xx_lg_font_s heading"
              heading={subTitle}
            />
            <div className="max-w-5xl mx-auto md:block hidden pointer-events-auto">
              <Form />
            </div>
            <p className="text-white text-center md:text-xl max-w-5xl mx-auto">
              {description}
            </p>

            <button
              onClick={() => setIsOpenPopupForm(true)}
              className="w-fit pointer-events-auto mx-auto py-3 text-center bg-secondary text-white justify-center border-orange-primary text-md px-8 h-full   font-semibold hover:bg-white hover:text-secondary duration-300 rounded-full border-white hover:scale-105 border"
            >
              <span className="flex items-center justify-center gap-2">
                Get a FREE Quote!
                <span>
                  <ArrowBtn />
                </span>
              </span>
            </button>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Banner;

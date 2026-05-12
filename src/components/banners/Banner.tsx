import { BannerPropsType } from "@/@types/@types";
import Image from "next/image";
import Link from "next/link";
import Form from "../forms/Form";
import { Container, SectionWithContainer } from "../sectionComponants";
import AnimatedWord from "./ui/AnimatedWord";

const Banner: React.FC<BannerPropsType> = ({ title, description, imgSrc }) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="py-7"
      containerClassName=""
    >
      <div className="relative overflow-hidden w-full md:aspect-[4/1.9255] aspect-[4/6.2]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain md:block hidden"
          quality={75}
          sizes="(max-width: 768px) 100vw, 100vw"
        />

        <Image
          src="/home/bnr-sm.webp"
          alt={title}
          fill
          className="object-cover md:hidden block"
          quality={75}
          sizes="(max-width: 768px) 100vw, 100vw"
        />

        <div className="absolute inset-0  z-20">
          <Container className="xl:mt-20 mt-4">
            <div className="flex flex-col lg:gap-7 gap-3.5">
              {/* <div className="flex justify-center items-center gap-2 px-2.5 py-1.5 bg-white/10 backdrop-blur-xs text-white shadow-2xl shadow-white/15 rounded-full w-fit mx-auto"> */}
              <div className="flex justify-center items-center gap-2 px-2.5 py-1.5 text-white rounded-full w-fit mx-auto glassy-card">
                <Image
                  src="/home/Frame-3.png"
                  alt="hotels"
                  width={40}
                  height={20}
                />
                <p className="max-md:text-[10px] text-[10px]">{title}</p>
              </div>
              <h1 className="text-white text-center lg:text-[2.5rem]/tight md:text-2xl text-[1.4rem] max-sm:h-[99px]  font-semibold pointer-events-auto">
                Fielmente - India’s Leading <br />
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

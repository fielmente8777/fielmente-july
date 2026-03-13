import { BannerPropsType } from "@/@types/@types";
import Image from "next/image";
import Form from "../forms/Form";
import { Container, SectionWithContainer } from "../sectionComponants";
import { Headings } from "../typography";
import Link from "next/link";
import AnimatedWord from "./ui/AnimatedWord";

const Banner: React.FC<BannerPropsType> = ({
  title,
  subTitle,
  description,
  imgSrc,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="py-7"
      containerClassName=""
    >
      <div className="relative overflow-hidden w-full lg:aspect-[4/1.9255] ">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain"
          priority
          loading="eager"
          sizes="100vw"
        />

        <div className="absolute inset-0  z-20">
          <Container className="mt-20">
            <div className="flex flex-col gap-7">
              {/* <div className="flex justify-center items-center gap-2 px-2.5 py-1.5 bg-white/10 backdrop-blur-xs text-white shadow-2xl shadow-white/15 rounded-full w-fit mx-auto"> */}
              <div className="flex justify-center items-center gap-2 px-2.5 py-1.5 text-white rounded-full w-fit mx-auto glassy-card">
                <Image src="/home/Frame-3.png" alt="hotels" width={40} height={20} />
                <p>{title}</p>
              </div>
              <h1 className="text-white text-center md:text-[2.5rem]/tight font-semibold pointer-events-auto">
                Fielmente - India’s Leading <br />
                <Link className="inter-link" href="/">
                  <span>
                    <AnimatedWord /> Marketing{" "}
                  </span>
                  <i> Agency</i>
                </Link>
              </h1>

              <p className="text-white text-center md:text-lg max-w-5xl mx-auto">
                {description}
              </p>
              <div className="max-w-5xl mx-auto">
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

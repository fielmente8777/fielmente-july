import { BannerPropsType } from "@/@types/@types";
import { Container, Section } from "../sectionComponants";
import Image from "next/image";
import { Headings } from "../typography";
import Form from "../forms/Form";

const Banner: React.FC<BannerPropsType> = ({
  title,
  subTitle,
  description,
  imgSrc,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative overflow-hidden w-full md:aspect-[16/8] aspect-[3/1] bg1  "
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover object-top"
        priority
        loading="eager"
        sizes="100vw"
      />
      <Image
        src={"/home/Vector3.png"}
        alt={title}
        width={525}
        height={276.87}
        className="object-cover absolute top-28 left-[42%] -translate-x-[42%] -translate-y-1/2 z-50"
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
            <div className="max-w-5xl mx-auto pointer-events-auto">
              <Form />
            </div>
            <p className="text-white text-center text-xl max-w-5xl mx-auto">{description}</p>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Banner;

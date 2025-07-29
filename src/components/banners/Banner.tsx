import { BannerPropsType } from "@/@types/@types";
import { Container, Section } from "../sectionComponants";
import Image from "next/image";
import { Headings } from "../typography";

const Banner: React.FC<BannerPropsType> = ({
  title,
  subTitle,
  description,
  imgSrc,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full md:aspect-[16/8] aspect-[3/1]"
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
      <div className="absolute inset-0 bg-primary/90 flex items-center justify-center">
        <Container>
          <div className="">
            <Headings
              level={1}
              className="text-white text-center x_lg_font_s"
              heading={title}
            />

            <Headings
              level={2}
              className="text-white text-center xx_lg_font_s heading"
              heading={subTitle}
            />

            <p className="text-white text-center text-xl">{description}</p>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Banner;

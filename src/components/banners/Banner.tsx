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
          <div className="flex flex-col gap-8">
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
            <div className="max-w-5xl mx-auto">
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

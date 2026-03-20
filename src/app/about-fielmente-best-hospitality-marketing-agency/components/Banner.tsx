import { Container, Section } from "@/components";
import Image from "next/image";

interface Props {
  title: string;
  description: string[];
  images: string[];
}

const Banner: React.FC<Props> = ({ title, description, images }) => {
  return (
    <Section defaultPadding={false}>
      <div className="relative overflow-hidden w-full xl:aspect-[4/.89] md:aspect-4/1.5 aspect-4/5">
        <Image src={images[0]} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 z-10 bg-black/70" />
        <div className="absolute inset-x-0 bottom-8 z-20 ">
          <Container className="text-center">
            <h1 className="text-3xl font-semibold text-white">{title}</h1>
            <p className="text-white mt-4 max-w-3xl text-lg mx-auto">
              {description[0]}
            </p>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Banner;

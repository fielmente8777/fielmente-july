import { Container, Section } from "@/components";
import Image from "next/image";

interface ImageSectionProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {
  return (
    <Section className="border-t border-b border-gray-200">
      <Container>
        <div className="grid lg:grid-cols-3 gap-4 items-center">
          {images.map((item, index) => (
            <div key={index} className="relative aspect-[4/1] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ImageSection;

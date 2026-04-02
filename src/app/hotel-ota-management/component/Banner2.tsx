import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import { CheckIcon } from "./icons";
import OtaForm from "@/components/forms/OtaForm";

interface bannerType {
  title: string;
  list: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

const Banner2: React.FC<bannerType> = ({ title, list, images }) => {
  return (
    <Section className="!p-0 overflow-hidden relative after:absolute after:inset-0 after:bg-white after:z-[-2]">
      <div className="bg-primary2 w-full lg:py-14 max-md:pt-10 flex items-center justify-center">
        <Container>
          <div className="grid lg:grid-cols-12  gap-8 text-white items-center poppins">
            <div className="lg:col-span-7 col-span-1 space-y-8 max-w-2xl">
              <h1
                className="md:text-[3.5rem]/tight text-color text-[2.5rem]/tight max-md:w-[90%] w-full"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <ul className="flex flex-col gap-4">
                {list.map((item, index) => (
                  <li key={index} className="flex  gap-2">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[linear-gradient(to_right,_#110D3C,_#FFFFFF,_#110D3C)] h-[1px] w-full" />
              <div className="flex items-center justify-between gap-4 mt-4">
                {images.map((item, index) => (
                  <div key={index} className="h-7 relative aspect-[4/1.12] md:aspect-[4/.8]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <OtaForm />
            </div>
          </div>
        </Container>
      </div>

      {/* rounded shape  */}
      <div className="md:h-20 h-16 lg:mt-0 -mt-4 overflow-hidden relative rotate-180 -z-[1]">
        <div className="w-[7800px] h-[7800px] rounded-full bg-bg absolute top-0 left-1/2 -translate-x-1/2 bg-primary2" />
      </div>
    </Section>
  );
};

export default Banner2;

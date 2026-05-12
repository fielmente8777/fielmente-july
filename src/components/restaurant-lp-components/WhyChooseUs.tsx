import { Container, Section } from "@/components";
import { Tick } from "@/utils/OldFormIcons";
import Image from "next/image";

interface WhyChooseUsProps {
  src: string;
  title: string;
  mainTitle: string;
  description: string;
  items: { title: string; description: string }[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  src,
  title,
  mainTitle,
  description,
  items,
}) => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="relative w-full aspect-[4/2.8] flex items-center justify-center">
            <Image src={src} alt={title} fill className="object-contain" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-orange-primary helv">{title}</p>
            <h2 className="text-2xl lg:text-4xl/tight font-semibold text-primary2 helv">
              {mainTitle}
            </h2>
            <p className="text-[#3B3B3B]">{description}</p>
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 px-4 py-6 ${index === 1 && "bg-[#E8F1F2] rounded-2xl"}`}
              >
                <span>
                  <Tick />
                </span>
                <div className="flex flex-col gap-2">
                  <p className="lg:text-lg  font-semibold text-primary2 helv">
                    {item.title}
                  </p>
                  <p className="text-[#3B3B3B] lg:text-base text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;

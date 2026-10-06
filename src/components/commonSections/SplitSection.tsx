import Container from "@/components/sectionComponants/Container";
import Eyebrow from "@/components/typography/Eyebrow";
import SectionTitle from "@/components/typography/SectionTitle";
import Image from "next/image";
import { ReactNode } from "react";
import { LuCircleCheck } from "react-icons/lu";

interface SplitSectionProps {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  bullets?: ReactNode[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tint?: boolean;
}

// Image on one side, text and ticked bullets on the other.
const SplitSection: React.FC<SplitSectionProps> = ({ eyebrow, title, body, bullets, image, imageAlt, reverse = false, tint = false }) => {
  return (
    <section className={`py-14 md:py-22 ${tint ? "bg-[#F5F5F9]" : ""}`}>
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={`flex flex-col gap-4 ${reverse ? "lg:order-2" : ""}`}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <SectionTitle>{title}</SectionTitle>
          <div className="text-base/relaxed md:text-[17px]/relaxed text-[#3D3A57] flex flex-col gap-3">{body}</div>
          {bullets && (
            <ul className="mt-1 flex flex-col gap-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[15px]/relaxed">
                  <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#F5F5F9]">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
};

export default SplitSection;

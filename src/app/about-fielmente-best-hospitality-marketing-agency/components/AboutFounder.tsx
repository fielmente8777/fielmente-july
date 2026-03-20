import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

interface AboutFounderProps {
  title: string;
  subTitle: string;
  description: string[];
  images: string[];
  links: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
}
const AboutFounder: React.FC<AboutFounderProps> = ({
  title,
  subTitle,
  description,
  images,
  links,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative after:absolute xl:after:inset-y-[36px] after:inset-y-[10px] xl:after:inset-x-[39px] after:inset-x-[8px] after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#191919] before:z-[-2] after:z-[-1]"
      containerClassName="grid lg:grid-cols-2 gap-16 max-w-7xl! py-6"
    >
      <div className="space-y-8">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          icon
          subTitleClassName="md:text-3xl!"
        />
        <div className="w-full relative aspect-4/2.5 rounded-2xl overflow-hidden border-2 border-[#F7F7F7]">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between xl:gap-6 gap-4">
        {description.map((item, index) => (
          <p
            key={index}
            className="text-secondary xl:text-lg"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
        <ul className="grid md:grid-cols-2 md:w-fit md:gap-6 gap-3.5 items-center">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center justify-center gap-2.5 duration-300 ease-in-out hover:scale-x-105 active:scale-95 ${index === 0 ? "text-white bg-[#0076b2] border-[#0076b2]" : "bg-white text-[#010101] border-[#010101]"} border  rounded-[9px] px-6 py-3`}
              >
                <span
                  className={
                    index === 0
                      ? "text-[#0076b2] bg-white p-1 aspect-square rounded-sm flex items-center justify-center"
                      : "text-[#010101]"
                  }
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default AboutFounder;

import { AboutCompanyDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { TickIcon } from "./WhyChooseUs";
import LinkButton from "@/components/buttons/LinkButton";
import Image from "next/image";

const HomeAbout: React.FC<AboutCompanyDataTypes> = ({
  title,
  description,
  listData,
  stats,
  cta,
  subTitle,
  src,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-4 after:rounded-[24px] after:bg-[#F9FAFB] after:z-[-1]">
      <div className="grid lg:grid-cols-[1.7fr_1.5fr] gap-10 items-center">
        <div className="space-y-6">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            subTitleClassName="md:pr-16 span-color"
          />
          <p className="text-secondary text-xl">{description}</p>
          <ul className="space-y-4">
            {listData.map((item, index) => (
              <li
                key={index}
                className="text-secondary text-xl flex items-center gap-2.5"
              >
                <span>
                  <TickIcon />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
          <LinkButton
            href={cta.href}
            label={cta.label}
            className="w-fit rounded-full bg-[#1B1B1B] text-white font-medium"
          />
        </div>
        <div className="w-full relative aspect-4/3">
         <Image src={src} alt={title} fill className="object-contain" />
         </div>
      </div>
      <div className="grid lg:grid-cols-4 items-center gap-2.5 p-2.5 rounded-[15px] mt-14 bg-[#F5F6F8]">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center bg-white p-4 rounded-[10px] space-y-3"
          >
            <h3 className="text-primary text-3xl font-bold">{item.number}</h3>
            <p className="text-[#6B7280]">{item.label}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;

import { SectionWithContainer } from "@/components";
import LandingPgForm from "@/components/forms/LandingPgForm";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import Link from "next/link";
import { JSX, ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  listOfLinks: {
    title?: string;
    links: {
      label: string;
      href: string;
      icon: JSX.Element | ReactNode;
      title?: string;
    }[];
  }[];
  images: string[];
}

const ContactSection: React.FC<Props> = ({
  images,
  title,
  subTitle,
  description,
  listOfLinks,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-black">
      <div className="grid md:grid-cols-8 gap-20">
        <div className="md:col-span-5">
          <div className="w-full relative aspect-4/3.5 overflow-hidden rounded-2xl">
            <Image
              src={images[0]}
              alt="bg-img"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 z-10 px-10 flex flex-col justify-center">
              <div className="w-full max-w-xl items-center grid  md:grid-cols-[.6fr_1fr] gap-3">
                <SectionHeading
                  title={title}
                  subTitle={subTitle}
                  titleColor="white"
                  subTitleColor="white"
                  subTitleClassName="md:text-[2rem]!"
                />
                <p className="text-white text-sm">{description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mt-6 w-full max-w-md">
                {listOfLinks.slice(0, 3).map((item, index) =>
                  item.links.map((link, linkIndex) => (
                    <div
                      className={`px-5 rounded-2xl shadow-inner bg-white/5 text-white flex flex-col  ${index === 2 ? "col-span-2 flex-row items-center gap-4 py-6" : "py-2.5 gap-2.5 "}`}
                      key={linkIndex}
                    >
                      <div>
                        <span className="flex items-center justify-center w-12 aspect-square rounded-full bg-color4 gap-2">
                          {link.icon}
                          <span className="sr-only">{link.label}</span>
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="">{link.title}</h3>
                        <Link href={link.href}>{link.label}</Link>
                      </div>
                    </div>
                  ))
                )}
                {listOfLinks.slice(3).map((item, index) => (
                  <div className="space-y-4" key={index}>
                    {item.title && <h3 className="text-white text-sm font-medium">{item.title}</h3>}
                    <ul className="flex items-center gap-4">
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href} className="w-10 aspect-square shadow-inner rounded-full bg-white/5 border-x border-[#333F50] flex items-center justify-center text-white">
                            {link.icon}
                            <span className="sr-only">{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#333F50] rounded-2xl md:col-span-3">
          <LandingPgForm btnBgColor="bg-color4" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactSection;

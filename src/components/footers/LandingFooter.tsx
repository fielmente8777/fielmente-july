import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { landingFooterData } from "./footerData";

const LandingFooter = () => {
  return (
    <footer className="max_screen_width bg-[#0A0A0C] md:py-30 py-10">
      <Container className="relative after:absolute md:after:inset-0 max-md:after:top-6 max-md:after:left-4 max-md:after:w-[90%] after:bg-[url('/map.png')] after:bg-contain after:bg-no-repeat after:opacity-8 md:after:bg-center after:w-full after:h-full after:z-[-1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          <div className="flex flex-col gap-6">
            <div className="relative w-full max-w-45.75  aspect-[4/1.46]">
              <Image
                src={landingFooterData.logo}
                alt="fielment logo"
                fill
                className="object-cover"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 100vw" 
              />
            </div>
            <p className="text-white">{landingFooterData.description}</p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-10 gap-6 ">
            {landingFooterData.linksData.map((item, index) => (
              <div className="flex flex-col  gap-4" key={index}>
                <p className="text-white text-lg font-medium flex items-center gap-2">
                  {item.icon && <span className="">{item.icon}</span>}
                  {item.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.listOfLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFFFFFB2] max-md:text-sm hover:text-secondary transition-all duration-300 ease-in-out"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default LandingFooter;

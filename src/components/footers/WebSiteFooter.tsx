import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { footerData } from "./footerData";

const WebSiteFooter = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <footer className="max_screen_width bg-[#0A0A0C] md:py-18 max-md:pt-10 max-md:pb-30">
      <Container className="relative after:absolute md:after:inset-0 max-md:after:top-6 max-md:after:left-4 max-md:after:w-[90%] after:bg-[url('/map.png')] after:bg-contain after:bg-no-repeat after:opacity-8 md:after:bg-center after:w-full after:h-full after:z-[-1]">
        <div className="grid lg:grid-cols-[1.2fr_2fr] md:grid-cols-[1.1fr_2fr] gap-8 md:gap-14">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="relative w-full max-w-[179px]  aspect-[4/1.46]"
            >
              <Image
                src={footerData.logo}
                alt="fielment logo"
                fill
                className="object-cover"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 100vw" 
              />
            </Link>
            <p className="text-white">{footerData.description}</p>
            <div className="space-y-4 md:block hidden">
              {footerData.linksData.slice(0, 1).map((item, index) => (
                <div className="flex flex-col gap-4 md:mt-4" key={index}>
                  <p className="text-white font-medium">{item.title}</p>
                  <ul className="flex items-center gap-7">
                    {item.listOfLinks.map((link, index) => (
                      <li key={index} className="flex items-center">
                        <Link
                          href={link.href}
                          target="_blank"
                          className="flex items-center justify-center text-white bg-[#0A0A0C] shadow-xl shadow-white/20 rounded-full w-10 h-10 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                        >
                          <span className="sr-only">{link.label}</span>
                          {link.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:grid hidden grid-cols-3 gap-4">
            {footerData.linksData.slice(1, 4).map((item, index) => (
              <div className="flex flex-col md:gap-6 gap-4" key={index}>
                <p className="text-white text-lg font-medium">{item.title}</p>
                <ul className="flex flex-col md:gap-5 gap-4">
                  {item.listOfLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-[#FFFFFFB2] hover:text-secondary transition-all duration-300 ease-in-out"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {index === 2 && (
                  <div className="space-y-10">
                    {footerData.linksData.slice(4).map((item, index) => (
                      <div className="flex flex-col gap-4" key={index}>
                        <p className="text-white text-lg font-medium">
                          {item.title}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {item.listOfLinks.map((link, index) => (
                            <li key={index}>
                              <Link
                                href={link.href}
                                className="text-[#FFFFFFB2] hover:text-secondary flex gap-2 transition-all duration-300 ease-in-out"
                              >
                                {link.icon && (
                                  <span className="mt-1">{link.icon}</span>
                                )}
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:hidden grid grid-cols-2 gap-12">
            {footerData.linksData.slice(1).map((item, index) => (
              <div className="flex flex-col gap-3" key={index}>
                <p className="text-white text-lg font-medium">{item.title}</p>
                <ul className="flex flex-col gap-1.5">
                  {item.listOfLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-[#FFFFFFB2]  text-xs"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
           <div className="space-y-4 md:hidden">
              {footerData.linksData.slice(0, 1).map((item, index) => (
                <div className="flex flex-col gap-4 md:mt-4" key={index}>
                  <p className="text-white font-medium">{item.title}</p>
                  <ul className="flex items-center gap-7">
                    {item.listOfLinks.map((link, index) => (
                      <li key={index} className="flex items-center">
                        <Link
                          href={link.href}
                          target="_blank"
                          className="flex items-center justify-center text-white bg-[#0A0A0C] shadow-xl shadow-white/20 rounded-full w-10 h-10 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                        >
                          <span className="sr-only">{link.label}</span>
                          {link.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      </Container>
      {/* <div className="border-t border-white max-md:pb-6">
        <Container>
          <div className="flex max-md:flex-col items-center justify-between">
            <p className="text-white text-center py-4">
              © {currentYear} Fielmente Hospitality Marketing Agency
            </p>
            <ul className="flex items-center gap-6">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-secondary flex gap-2 transition-all duration-300 ease-in-out  md:text-xl"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div> */}
    </footer>
  );
};

export default WebSiteFooter;

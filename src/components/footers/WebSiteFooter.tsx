import Link from "next/link";
import { Container } from "../sectionComponants";
import { footerData, policyLinks } from "./footerData";
import Image from "next/image";

const WebSiteFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max_screen_width relative after:bg-primary after:bg-cover after:bg-no-repeat after:bg-center after:w-full after:h-full after:absolute after:inset-0 after:z-[-2]">
      <Container className="md:py-[7.5rem] py-8 relative after:absolute md:after:inset-0 max-md:after:top-6 max-md:after:left-4 max-md:after:w-[90%] after:bg-[url('/map.png')] after:bg-contain after:bg-no-repeat after:opacity-8 md:after:bg-center after:w-full after:h-full after:z-[-1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">
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
                sizes="100vw"
              />
            </Link>
            <p className="text-white md:text-xl">{footerData.description}</p>
            {footerData.linksData.slice(0, 1).map((item, index) => (
              <div className="flex flex-col gap-2 md:mt-4" key={index}>
                <h3 className="text-secondary sm_font_s font-medium">
                  {item.title}
                </h3>
                <ul className="flex items-center gap-7">
                  {item.listOfLinks.map((link, index) => (
                    <li key={index} className="flex items-center">
                      <Link
                        href={link.href}
                        target="_blank"
                        className="flex items-center justify-center hover:bg-secondary text-secondary hover:text-white bg-white rounded-lg w-10 h-10 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-4d"
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
          {footerData.linksData.slice(1, 3).map((item, index) => (
            <div className="flex flex-col md:gap-6 gap-4" key={index}>
              <h3 className="text-secondary sm_font_s font-medium">
                {item.title}
              </h3>
              <ul className="flex flex-col md:gap-5 gap-4">
                {item.listOfLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-secondary transition-all duration-300 ease-in-out  md:text-xl"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-10">
            {footerData.linksData.slice(3).map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h3 className="text-secondary sm_font_s font-medium">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-6">
                  {item.listOfLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-secondary flex gap-2 transition-all duration-300 ease-in-out md:text-xl"
                      >
                        {link.icon && <span className="mt-1">{link.icon}</span>}
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
      <div className="border-t border-white max-md:pb-6">
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
      </div>
    </footer>
  );
};

export default WebSiteFooter;

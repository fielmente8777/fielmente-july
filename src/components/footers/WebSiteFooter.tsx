import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { footerData } from "./footerData";

// Every link is rendered once and the layout changes with CSS. The footer used to contain a desktop
// copy and a phone copy of all its links, so each page repeated ~35 links (and the office address),
// which SEO checkers report as duplicate link text and duplicate content on every page.
const WebSiteFooter = () => {
  const [social, ...groups] = footerData.linksData;
  const mainGroups = groups.slice(0, 2); // Company, Top Services
  const stackedGroups = groups.slice(2); // Offices, Contact: stacked in the third column on large screens

  const renderGroup = (item: (typeof groups)[number], compact = false) => (
    <div className="flex flex-col max-lg:gap-3 lg:gap-6" key={item.title}>
      <p className="text-white text-lg font-medium">{item.title}</p>
      <ul className={`flex flex-col max-lg:gap-1.5 ${compact ? "lg:gap-2" : "lg:gap-5"}`}>
        {item.listOfLinks.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-[#FFFFFFB2] max-lg:text-xs hover:text-secondary flex gap-2 transition-all duration-300 ease-in-out"
            >
              {link.icon && <span className="mt-1 max-lg:hidden">{link.icon}</span>}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="max_screen_width bg-[#0A0A0C] md:py-18 max-md:pt-10 max-md:pb-30">
      <Container className="relative after:absolute md:after:inset-0 max-md:after:top-6 max-md:after:left-4 max-md:after:w-[90%] after:bg-[url('/map.png')] after:bg-contain after:bg-no-repeat after:opacity-8 md:after:bg-center after:w-full after:h-full after:z-[-1]">
        {/* Phones: logo, links, social icons (one column). From md: logo + social on the left, links on the right. */}
        <div className="grid lg:grid-cols-[1.2fr_2fr] md:grid-cols-[1.1fr_2fr] md:grid-rows-[auto_1fr] gap-8 md:gap-x-14 md:gap-y-10">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="relative w-full max-w-[179px]  aspect-[4/1.46]"
            >
              <Image
                src={footerData.logo}
                alt="Fielmente Hospitality Marketing Agency"
                fill
                className="object-cover"
                sizes="179px"
              />
            </Link>
            <p className="text-white">{footerData.description}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 max-lg:gap-12 lg:gap-4 md:col-start-2 md:row-start-1 md:row-span-2">
            {mainGroups.map((item) => renderGroup(item))}
            {/* Below lg these groups are separate grid cells (contents); on lg they share the third column. */}
            <div className="contents lg:flex lg:flex-col lg:gap-10">
              {stackedGroups.map((item) => renderGroup(item, true))}
            </div>
          </div>

          {social && (
            <div className="flex flex-col gap-4 md:col-start-1 md:row-start-2 md:self-start">
              <p className="text-white font-medium">{social.title}</p>
              <ul className="flex items-center gap-7">
                {social.listOfLinks.map((link) => (
                  <li key={link.href} className="flex items-center">
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-white bg-[#0A0A0C] shadow-xl shadow-white/20 rounded-full w-10 h-10 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      <span className="sr-only">{link.label}</span>
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default WebSiteFooter;

"use client";
import { AppContext } from "@/contextApi/AppContext";
import { OutlineDrpopdown } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Container } from "../sectionComponants";
import { navLinks } from "./navLinks";
const Header = () => {
  const {
    setIsOpenPopupForm,
    setIsMobileNavOpen,
  } = useContext(AppContext);

  const pathName = usePathname();

  return (
    <div>
      <header className="max_screen">
        <Container>
          <nav className="flex items-center justify-between py-3">
            <div className="">
              <Link
                href={"/"}
                className="flex relative md:h-[3.5rem] h-[2.5rem]  md:aspect-[4/1.8] aspect-[3/1]"
              >
                <Image src="/Logo.png" alt="fielment logo" fill />
              </Link>
            </div>
            <ul className="lg:flex hidden item-center gap-10">
              {navLinks.map((link, index) => {
                // const id = index + 1;
                return (
                  <li key={index} className="relative nav">
                    <Link
                      href={link.href ? link.href : "#"}
                      className="relative text-nowrap py-2 capitalize flex items-center gap-1 text-dark"
                    >
                      {link.label}
                      <span className="span-border"></span>
                      {link.subLinks && (
                        <span className="icon duration-300 transition-all ease-in-out">
                          <OutlineDrpopdown />
                        </span>
                      )}
                    </Link>
                    {link.subLinks && (
                      <span className="nav-1">
                        {link.subLinks.map((subLink, index) => {
                          return (
                            <>
                              <span
                                className="relative group nav-2"
                                key={index + 1}
                              >
                                <Link
                                  href={subLink.href ? subLink.href : "#"}
                                  className={`w-full text-nowrap py-2 px-4 flex items-center gap-1 group capitalize text-dark ${pathName === subLink.href ? "bg-primary !text-white" : ""}`}
                                >
                                  {subLink.label}
                                  {subLink.subLinks && (
                                    <span className="group-hover:rotate-90 -rotate-90 duration-300 transition-all ease-in-out">
                                      <OutlineDrpopdown />
                                    </span>
                                  )}
                                </Link>
                                {subLink.subLinks && (
                                  <span className="nav-link">
                                    {subLink.subLinks?.map(
                                      (nestedSubLink, nestedIndex) => {
                                        return (
                                          <span
                                            className=""
                                            key={nestedIndex + 2}
                                          >
                                            <Link
                                              href={
                                                nestedSubLink.href
                                                  ? nestedSubLink.href
                                                  : "#"
                                              }
                                              className={`w-full text-nowrap py-2 px-4 flex items-center text-light gap-1 group capitalize hover:bg-gray-200 ${pathName === nestedSubLink.href ? "bg-primary !text-white" : ""}`}
                                            >
                                              {nestedSubLink.label}
                                            </Link>
                                          </span>
                                        );
                                      }
                                    )}
                                  </span>
                                )}
                              </span>
                            </>
                          );
                        })}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="max-lg:block hidden">
              <button
                className="lg:hidden"
                onClick={() => setIsMobileNavOpen(true)}
              >
                <MenuIcon />
              </button>
              {/* <MobileNav
                  mobileMenu={mobileMenu}
                  setMobileMenu={setMobileMenu}
                /> */}
            </div>
            <button
              onClick={() => setIsOpenPopupForm(true)}
              className="inline-flex max-md:hidden items-center justify-center px-8 py-4 tracking-wide text-secondary border border-secondary rounded-lg hover:text-white hover:bg-secondary duration-300 ease-in-out active:scale-95"
            >
              Schedule Call
            </button>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;

export const MenuIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.4287 7.99979C27.4287 7.3686 26.917 6.85693 26.2859 6.85693H4.57157C3.94037 6.85693 3.42871 7.3686 3.42871 7.99979C3.42871 8.63098 3.94037 9.14265 4.57157 9.14265H26.2859C26.917 9.14265 27.4287 8.63098 27.4287 7.99979Z"
      fill="#F26633"
    />
    <path
      d="M27.0283 15.9999C27.0283 15.3687 26.5166 14.8569 25.8855 14.8569L13.314 14.8573C12.6828 14.8573 12.1712 15.3689 12.1712 16.0001C12.1712 16.6313 12.6828 17.143 13.314 17.143L25.8855 17.1428C26.5166 17.1428 27.0283 16.631 27.0283 15.9999Z"
      fill="#F26633"
    />
    <path
      d="M26.2859 22.8569C26.917 22.8569 27.4287 23.3686 27.4287 23.9998C27.4287 24.6309 26.917 25.1425 26.2859 25.1425H6.85728C6.22608 25.1425 5.71443 24.6309 5.71443 23.9998C5.71443 23.3686 6.22608 22.8569 6.85728 22.8569H26.2859Z"
      fill="#F26633"
    />
  </svg>
);

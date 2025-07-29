"use client";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { OutlineDrpopdown } from "@/utils/icons";
import { AppContext } from "@/contextApi/AppContext";
import { navLinks } from "./navLinks";
import { Container } from "../sectionComponants";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
const Header = () => {
  const {
    isOpenPopupForm,
    setIsOpenPopupForm,
    isMobileNavOpen,
    setIsMobileNavOpen,
  } = useContext(AppContext);

  const pathName = usePathname();

  return (
    <div>
      <header className="max_screen">
        <Container>
          <nav className="flex items-center justify-between py-3">
            <div className="max-lg:block hidden">
              <button
                className="lg:hidden"
                onClick={() => setIsMobileNavOpen(true)}
              >
                <AiOutlineMenu size={25} color="#183f62" />
              </button>
              {/* <MobileNav
                  mobileMenu={mobileMenu}
                  setMobileMenu={setMobileMenu}
                /> */}
            </div>
            <div className="">
              <Link
                href={"/"}
                className="flex relative md:h-[3.5rem] h-[2.5rem]  md:aspect-[4/1.8] aspect-[3/1.5]"
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
                      className="relative text-nowrap py-2 capitalize flex items-center gap-1 text-light"
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
                                  className={`w-full text-nowrap py-2 px-4 flex items-center gap-1 group capitalize text-light ${pathName === subLink.href ? "bg-primary !text-white" : ""}`}
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
            <button
              onClick={() => setIsOpenPopupForm(true)}
              className="inline-flex items-center justify-center px-8 py-4 tracking-wide text-secondary border border-secondary rounded-lg hover:text-white hover:bg-secondary duration-300 ease-in-out active:scale-95"
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

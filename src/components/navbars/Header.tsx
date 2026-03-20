"use client";
import { AppContext } from "@/contextApi/AppContext";
import { OutlineDrpopdown } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useContext } from "react";
import { Container } from "../sectionComponants";
import { navLinks } from "./navLinks";
const Header = () => {
  const { setIsOpenPopupForm, setIsMobileNavOpen } = useContext(AppContext);

  const pathName = usePathname();

  return (
    <div className="fixed flex inset-x-0 items-center justify-center top-0 z-50 bg-white/60 backdrop-blur-sm">
      <header className="max_screen w-full">
        <Container>
          <nav className="flex items-center justify-between py-3">
            <div className="">
              <Link href={"/"} className="flex relative w-36 aspect-[4/1.8]">
                <Image src="/Logo.png" alt="fielment logo" fill />
              </Link>
            </div>
            <ul className="lg:flex hidden item-center gap-10">
              {navLinks.map((link, index) => {
                return (
                  <li key={index} className="relative nav">
                    <Link
                      href={link.href ? link.href : "#"}
                      className="relative text-nowrap py-2 font-semibold capitalize flex items-center gap-1 text-dark"
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
                            <Fragment key={index + 1}>
                              <span className="relative group nav-2">
                                <Link
                                  href={subLink.href ? subLink.href : "#"}
                                  className={`w-full text-nowrap py-2 px-4 flex items-center gap-1 group capitalize text-dark ${pathName === subLink.href ? "bg-primary text-white!" : ""}`}
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
                            </Fragment>
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
              className="inline-flex max-md:hidden items-center text-lg justify-center gap-2 px-8 py-3 tracking-wide text-white bg-[#1B1B1B] hover:text-white rounded-full duration-300 ease-in-out active:scale-95"
            >
              Contact Us
              <span className="w-6 aspect-square flex items-center justify-center bg-white rounded-full text-primary">
                <ICon />
              </span>
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

export const ICon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4535 6.50313L5.67624 14.2725C5.56083 14.3878 5.41583 14.4441 5.24124 14.4415C5.06652 14.4388 4.92145 14.3798 4.80603 14.2644C4.69076 14.149 4.63312 14.0053 4.63312 13.8333C4.63312 13.6614 4.69076 13.5177 4.80603 13.4023L12.5754 5.625H5.7452C5.56812 5.625 5.41965 5.56507 5.29978 5.44521C5.18006 5.32535 5.1202 5.17687 5.1202 4.99979C5.1202 4.82257 5.18006 4.67417 5.29978 4.55458C5.41965 4.43486 5.56812 4.375 5.7452 4.375H13.9502C14.1637 4.375 14.3426 4.44715 14.4869 4.59146C14.6313 4.7359 14.7035 4.91479 14.7035 5.12813V13.3333C14.7035 13.5104 14.6436 13.6588 14.5237 13.7785C14.4039 13.8984 14.2554 13.9583 14.0783 13.9583C13.9011 13.9583 13.7526 13.8984 13.6329 13.7785C13.5133 13.6588 13.4535 13.5104 13.4535 13.3333V6.50313Z"
      fill="currentColor"
    />
  </svg>
);

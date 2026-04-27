"use client";

import { useAppContext } from "@/contextApi/AppContext";
import { IoClose } from "react-icons/io5";
import { navLinks } from "./navLinks";
import Link from "next/link";
import { OutlineDrpopdown } from "@/utils/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useAppContext();
  const pathName = usePathname();

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  // ✅ external navigation handler
  const handleNave = (href: string) => {
    if (href) {
      window.open(href, "_blank");
      setIsMobileNavOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 h-dvh bg-white/80 backdrop-blur-md w-80 z-50 ${
        isMobileNavOpen ? "right-0" : "-right-full"
      } transition-all duration-300`}
    >
      <div className="px-6 py-8">
        <button
          className="float-right"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <span className="sr-only">Close mobile navigation</span>
          <IoClose size={24} />
        </button>

        <nav className="flex flex-col gap-4 mt-10">
          {navLinks.map((link, index) => {
            const isActive = openDropdown === index;

            return (
              <div key={index} className="text-lg">
                <div className="flex items-center justify-between">
                  
                  {/* ✅ Conditional link/button */}
                  {link.type === "button" ? (
                    <button
                      onClick={() => handleNave(link.href)}
                      className="text-nowrap font-semibold capitalize text-primary"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      onClick={() => setIsMobileNavOpen(false)}
                      className="text-nowrap font-semibold capitalize text-primary"
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.subLinks && (
                    <button
                      onClick={() => handleDropdown(index)}
                      className="duration-300 transition-all ease-in-out"
                    >
                      <span className="sr-only">Open dropdown</span>
                      <OutlineDrpopdown
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* ✅ SubLinks */}
                {isActive && link.subLinks && (
                  <ul className="flex flex-col gap-4 mt-4">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        {subLink.type === "button" ? (
                          <button
                            onClick={() => handleNave(subLink.href)}
                            className="text-nowrap font-semibold capitalize text-primary"
                          >
                            {subLink.label}
                          </button>
                        ) : (
                          <Link
                            href={subLink.href || "#"}
                            className={`text-nowrap font-semibold capitalize ${
                              pathName === subLink.href
                                ? "text-secondary"
                                : "text-primary"
                            }`}
                            onClick={() => setIsMobileNavOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
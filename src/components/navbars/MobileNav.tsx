"use client";

import { useAppContext } from "@/contextApi/AppContext";
import { IoClose } from "react-icons/io5";
import { navLinks } from "./navLinks";
import Link from "next/link";
import { OutlineDrpopdown } from "@/utils/icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { MenuGroup, MenuSection, SiteMenu } from "./menuData";

/** A small disclosure button for one level of the menu. */
function Toggle({ open, onClick, label }: { open: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} aria-expanded={open} className="p-1 duration-300 transition-all ease-in-out">
      <span className="sr-only">{open ? `Close ${label}` : `Open ${label}`}</span>
      <OutlineDrpopdown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

function GroupList({ groups, pathName, close }: { groups: MenuGroup[]; pathName: string; close: () => void }) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((g) => (
        <div key={g.title}>
          <p className="mb-1.5 text-[13px] font-semibold text-[#8A88A3]">{g.title}</p>
          <ul className="flex flex-col gap-1.5">
            {g.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  aria-current={pathName === l.href ? "page" : undefined}
                  className={`text-[15px] ${l.icon ? "inline-flex items-center gap-2" : ""} ${pathName === l.href ? "font-semibold text-secondary" : "text-primary"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- small static logo file */}
                  {l.icon && <img src={l.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />}
                  {l.context && <span className="sr-only">{l.context} </span>}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function IndustryList({ sections, pathName, close }: { sections: MenuSection[]; pathName: string; close: () => void }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul className="mt-3 flex flex-col gap-3 border-l border-[#E4E3EC] pl-4">
      {sections.map((s, i) => (
        <li key={s.label}>
          <div className="flex items-center justify-between gap-2">
            <Link
              href={s.href ?? "#"}
              onClick={close}
              className={`text-base font-semibold ${pathName === s.href ? "text-secondary" : "text-primary"}`}
            >
              {s.label}
            </Link>
            <Toggle open={open === i} onClick={() => setOpen((p) => (p === i ? null : i))} label={`${s.label} services`} />
          </div>
          {open === i && (
            <div className="mt-3 mb-1">
              <GroupList groups={s.groups} pathName={pathName} close={close} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

const MobileNav = ({ menu }: { menu?: SiteMenu }) => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useAppContext();
  const pathName = usePathname();
  const close = () => setIsMobileNavOpen(false);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // The menu links are only put in the page once the menu has been opened. The desktop header
  // already has every link, so a second hidden copy here repeated each menu link in the HTML.
  const [hasOpened, setHasOpened] = useState(false);
  useEffect(() => {
    if (isMobileNavOpen) setHasOpened(true);
  }, [isMobileNavOpen]);
  const showMenu = hasOpened || isMobileNavOpen;

  const handleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  // External navigation handler
  const handleNave = (href: string) => {
    if (href) {
      window.open(href, "_blank");
      close();
    }
  };

  return (
    <div
      aria-hidden={!isMobileNavOpen}
      className={`fixed top-0 h-dvh overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-md w-80 max-w-[90vw] z-50 ${
        isMobileNavOpen ? "right-0" : "-right-full"
      } transition-all duration-300`}
    >
      <div className="px-6 py-8">
        <button className="float-right" onClick={close}>
          <span className="sr-only">Close mobile navigation</span>
          <IoClose size={24} />
        </button>

        {showMenu && (
        <nav className="flex flex-col gap-4 mt-10 pb-10">
          {navLinks.map((link, index) => {
            const isActive = openDropdown === index;
            const hasChildren = Boolean((link.mega && menu) || link.subLinks);

            return (
              <div key={index} className="text-lg">
                <div className="flex items-center justify-between">
                  {link.type === "button" ? (
                    <button onClick={() => handleNave(link.href)} className="text-nowrap font-semibold capitalize text-primary">
                      {link.label}
                    </button>
                  ) : (
                    <Link href={link.href || "#"} onClick={close} className="text-nowrap font-semibold capitalize text-primary">
                      {link.label}
                    </Link>
                  )}

                  {hasChildren && <Toggle open={isActive} onClick={() => handleDropdown(index)} label={link.label} />}
                </div>

                {isActive && link.mega === "industries" && menu && (
                  <IndustryList sections={menu.industries} pathName={pathName} close={close} />
                )}

                {isActive && link.mega === "products" && menu && (
                  <div className="mt-3 border-l border-[#E4E3EC] pl-4">
                    <GroupList groups={menu.products} pathName={pathName} close={close} />
                  </div>
                )}

                {isActive && !link.mega && link.subLinks && (
                  <ul className="flex flex-col gap-4 mt-4">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        {subLink.type === "button" ? (
                          <button onClick={() => handleNave(subLink.href)} className="text-nowrap font-semibold capitalize text-primary">
                            {subLink.label}
                          </button>
                        ) : (
                          <Link
                            href={subLink.href || "#"}
                            className={`text-nowrap font-semibold capitalize ${pathName === subLink.href ? "text-secondary" : "text-primary"}`}
                            onClick={close}
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
        )}
      </div>
    </div>
  );
};

export default MobileNav;

import { NavLinksProps } from "@/@types/@types";

// Top-level menu. "Industry we serve" and "Our Products" open mega menus whose links come from
// menuData.ts (built from the industry, service and product data), so new pages appear automatically.
export const navLinks: NavLinksProps[] = [
  {
    label: "About Us",
    href: "/about-fielmente-best-hospitality-marketing-agency/",
  },
  {
    label: "Industry we serve",
    href: "/industries-we-serve/",
    mega: "industries",
  },
  {
    label: "our Products",
    href: "/products/",
    mega: "products",
  },
  {
    label: "contact us",
    href: "/contact-us/",
  },
];

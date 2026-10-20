"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import LandingNav from "./LandingNav";
import LandingHeader from "./landingHeader";
import type { SiteMenu } from "./menuData";

interface NavBarProps {
  /** Mega menu content, built on the server (menuData.ts). */
  menu?: SiteMenu;
}

const NavBar = ({ menu }: NavBarProps) => {
  const pathName = usePathname();
  const RenderNavBar = Header;

  const paths = [
    "/resort/",
    "/hospitality/",
    "/dubai-restaurant/",
    "/restaurant/",
    "/UK/",
    "/USA/",
  ];
  // Pages that render their own header (e.g. Google Ads landing pages)
  const noNavPaths = ["/thank-you/", "/google-ads-for-hotels/"];
  if (noNavPaths.includes(pathName)) {
    return null;
  }
  if (paths.includes(pathName)) {
    return <LandingHeader />;
  } else if (pathName === "/landing-page/") {
    return <LandingNav />;
  } else {
    return <Header menu={menu} />;
  }
};

export default NavBar;

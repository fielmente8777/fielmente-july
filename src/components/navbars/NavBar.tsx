"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import LandingNav from "./LandingNav";
import LandingHeader from "./landingHeader";
import type { SiteMenu } from "./menuData";

interface NavBarProps {
  /** Blog post slugs, passed from the server layout so the client bundle never loads the blog content. */
  blogSlugs?: string[];
  /** Mega menu content, built on the server (menuData.ts). */
  menu?: SiteMenu;
}

const NavBar = ({ blogSlugs = [], menu }: NavBarProps) => {
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
    return <Header blogSlugs={blogSlugs} menu={menu} />;
  }
};

export default NavBar;

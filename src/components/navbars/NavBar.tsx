"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";



const NavBar = () => {
  const pathName = usePathname();
  const RenderNavBar = Header;
  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <>
      <RenderNavBar />
    </>
  );
};

export default NavBar;

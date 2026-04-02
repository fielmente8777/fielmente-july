"use client";
import { usePathname } from "next/navigation";
import FormOld from "./FormOld";
import FormNew from "./FormNew";
const FormOption = () => {
    const pathName = usePathname();
   const paths = [
    "/landing-page/",
    "/resort/",
    "/hospitality/",
    "/dubai-restaurant/",
    "/restaurant/",
    "/UK/",
    "/USA/",
  ];
  const shouldRender = paths.includes(pathName);
  return !shouldRender ? <FormNew /> : <FormOld />;
}

export default FormOption;
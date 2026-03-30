"use client";

import { useAppContext } from "@/contextApi/AppContext";

const Contactbtn2 = () => {
    const { setIsOpenPopupForm } = useAppContext();
  
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-[#2CBCA5] px-10 py-3 border  text-xl rounded-xl hover:bg-transparent hover:text-black"
    >
      Contact us
    </button>
  );
};

export default Contactbtn2;

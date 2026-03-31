"use client";

import { useAppContext } from "@/contextApi/AppContext";

const Contactbtn1 = () => {
    const { setIsOpenPopupForm } = useAppContext();
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-black px-10 py-3 border text-white border-black text-xl rounded-xl hover:bg-transparent hover:text-black"
    >
      Contact us
    </button>
  );
};

export default Contactbtn1;

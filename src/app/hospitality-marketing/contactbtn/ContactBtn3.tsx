"use client";

import { useAppContext } from "@/contextApi/AppContext";

const ContactBtn3 = ({text}:{text:string}) => {
  const { setIsOpenPopupForm } = useAppContext();
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-white px-12 font-medium py-3 shadow-2xl shadow-gray-500 rounded-full text-black lg:text-xl text-lg
                  hover:bg-black hover:text-white transition-all duration-300"
    >
      {text}
    </button>
  );
};

export default ContactBtn3;

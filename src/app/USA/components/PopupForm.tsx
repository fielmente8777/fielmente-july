"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
const PopupForm = ({
  setShowModal,
  showModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}) => {
  

  // useRef to store intervalId
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 30000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setShowModal]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setShowModal]);


  


  return (
    <>
      {showModal && (
        <section className="fixed z-50 w-full h-screen bg-black bg-opacity-70 top-0 left-0">
          <article className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-3 max-w-[400px] w-full shadow-2xl p-4 relative rounded-md">
              <button
                onClick={closeModal}
                className="absolute top-[22px] lg:top-0 right-[3px] w-8 h-8 flex justify-center items-center text-lg rounded-full bg-orange-primary hover:bg-red-600 text-white"
              >
                <IoCloseOutline size={30} />
              </button>
              
            </div>
          </article>
        </section>
      )}
      
    </>
  );
};

export default PopupForm;

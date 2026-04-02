"use client";
import { Container, Section } from "@/components";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { usePathname } from "next/navigation";

const ContactUsCard = () => {
  const [showModal, setShowModal] = useState(false);
  const pathName = usePathname();
  return (
    <Section className="bg-white lg:py-10">
      <Container>
        <div className=" text-white bg-primary2 px-20 max-md:px-7 lg:py-16 py-10 grid md:grid-cols-5 gap-8 items-center rounded-3xl lg:mx-28">
          <div className="md:col-span-4 lg:text-start text-center">
            <h2 className="md:text-4xl/[3rem] text-[1.79rem]">
              Looking for the India’s Best{" "}
              {pathName === "/resort/"
                ? "Resort"
                : pathName === "/hospitality/"
                ? "Hospitality"
                : "Hotel"}{" "}
              Marketing <span className="text-orange-primary">Agency?</span>
            </h2>
          </div>
          <div className="md:col-span-1 w-full">
            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-primary w-full py-3 flex items-center justify-center font-bold rounded-md text-lg border border-orange-primary hover:bg-transparent duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </Container>
      {showModal && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </Section>
  );
};

export default ContactUsCard;

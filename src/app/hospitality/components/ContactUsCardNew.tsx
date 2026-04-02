"use client";
import { Container, Section } from "@/components";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ContactUsCardNew = () => {
  const [showModal, setShowModal] = useState(false);
  const pathName = usePathname();
  return (
    <Section className="bg-white lg:py-10">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center py-10">
          <div className="flex items-center">
            <div className="w-full max-w-[350px] relative aspect-[4/2.5] lg:aspect-[4/4] rotate-45">
              <Image
                src="/icon/ContactUsCard.gif"
                alt="alt"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="lg:text-start text-center flex flex-col max-md:items-center gap-4">
            <h2 className="lg:text-4xl text-2xl text-[#110D3C]">
              Ready to kick off your growth journey with {pathName === "/resort/" || pathName === "/hospitality/" || pathName === "/landing-page/" ? "" : "India’s"} Best <br />{" "}
              <b className="text-orange-primary">
                {pathName === "/resort/"
                  ? "Resort"
                  : pathName === "/hospitality/"
                    ? "Hospitality"
                    : pathName === "/landing-page/"
                      ? "Hotel"
                      : "Hospitality"} Marketing Agency {pathName === "/resort/" || pathName === "/hospitality/" || pathName === "/landing-page/" ? "in India" : "?"}
              </b>
            </h2>

            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-primary w-fit poppins text-white hover:text-orange-primary px-6 py-3 flex items-center justify-center font-bold rounded-md text-lg border border-orange-primary hover:bg-transparent duration-300"
            >
              Get a free consultation now!
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

export default ContactUsCardNew;

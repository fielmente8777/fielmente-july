import Image from "next/image";
import { CtaBtn } from "../buttons/CtaBtn";
import { ICon } from './Header';

const LandingNav = () => {
  return (
    <header className="max_screen_width border border-main-border">
      <nav className="max_width py-3.75 flex items-center justify-between">
        <div className="w-35 aspect-[4/1.59] relative">
          <Image
            src="/Logo.png"
            alt="fielment logo"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <CtaBtn
          label="Get a Free Consulation"
          type="button"
          icon="arrow"
          startIcon="whatsapp"
          className="w-fit rounded-full bg-[#1B1B1B] text-white"
        />
      </nav>
    </header>
  );
};

export default LandingNav;

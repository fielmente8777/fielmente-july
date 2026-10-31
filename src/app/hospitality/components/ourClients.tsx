// "Our Clients" logo strip on the hospitality, restaurant, UK, USA and Dubai landing pages.
// Shows every client logo (src/utils/client.ts) as a scrolling strip; restaurant pages list restaurants first.
import React from "react";
import type { LogoSet } from "@/@types/@agencyPageType";
import LogoMarquee from "@/components/slider/LogoMarquee";
import { allClientLogos } from "@/utils/agencyData";
import SectionHeading from "./SectionHeading";

const SectionHeadingDetails = {
  title: "Our ",
  span: "Clients",
};

function OurClients({
  SHeading,
  heading,
  title,
  bold,
  set = "hotels",
}: {
  SHeading?: boolean;
  heading?: string;
  /** Plain and highlighted parts of the heading, e.g. "Trusted by" + "Leading Restaurants". */
  title?: string;
  bold?: string;
  set?: LogoSet;
}) {
  const restaurantFirst = /restaurant|cloud kitchen|caf/i.test(`${title ?? ""} ${bold ?? ""} ${heading ?? ""}`);
  const logos = allClientLogos(restaurantFirst ? "restaurants" : set).map((l) => ({
    src: l.src,
    alt: l.name,
    background: l.bg ?? "#FFFFFF",
  }));
  const half = Math.ceil(logos.length / 2);
  const perView = { base: 2.5, md: 4, lg: 7, xl: 8 };
  return (
    <div>
      {SHeading ? (
        <SectionHeading {...SectionHeadingDetails} />
      ) : (
        <h2 className="text-[#14113D] text-center md:text-4xl text-3xl font-bold">
          {heading ?? (
            <>
              {title} {bold && <span className="text-orange-primary">{bold}</span>}
            </>
          )}
        </h2>
      )}
      <div className="mt-12 space-y-3">
        <LogoMarquee items={logos.slice(0, half)} perView={perView} itemClassName="border border-[#EDECF3]" eagerCount={0} />
        <LogoMarquee items={logos.slice(half)} perView={perView} itemClassName="border border-[#EDECF3]" wrapperClassName="logo-marquee-reverse" eagerCount={0} />
      </div>
    </div>
  );
}

export default OurClients;

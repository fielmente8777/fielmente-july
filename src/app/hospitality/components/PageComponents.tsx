import Testimonials from "@/app/industries-we-serve/[...industry]/components/Testimonials";
import { industriesData } from "@/app/industries-we-serve/[...industry]/pageData";
import { Section } from "@/components";
import ChooseUs from "./chooseUsOld";
import ContactUsCard from "./ContactUsCard";
import HotelPerformacne from "./hotelPerformacne";
import MarketingAgency from "./marketingAgency";
import MileStones from "./mileStones";
import OurClient from "./OurClient";
import OurOTAPartners from "./OurOTAPartners";
import OurServices from "./ourServices";
import WhyUs from "./WhyUs";

const PageComponents = () => {
  return (
    <main className="">
      {/* Market Agency***** */}
      <div className="bg-primary2 py-10">
        <div className="max-width">
          <MarketingAgency />
        </div>
      </div>

      {/* MileStones ****** */}
      {/* <MIleStonesNew /> */}

      <div className="max-w-[900px] mx-auto lg:py-20 py-10">
        <MileStones />
      </div>

      {/* Services***** */}
      <div className="bg-primary2 text-white lg:py-20 py-10" id="services">
        <div className="max-width">
          <OurServices />
        </div>
      </div>

      {/* Choose Us****** */}
      <Section className="bg-white lg:py-10">
        <div className="max-width">
          <ChooseUs />
        </div>
      </Section>

      {/* Hotel Performance***** */}
      <Section>
        <div className="max-width">
          <HotelPerformacne />
        </div>
      </Section>

      {/* Our Clients**** */}
      <div className=" lg:py-20 py-10">
        <OurClient />
      </div>
      <OurOTAPartners />
      {/* <CountryFlags /> */}
      <div className="bg-gray-secondary lg:py-20 py-10">
        <div className="lg:max-w-7xl max-w-full mx-auto px-6">
          <WhyUs />
        </div>
      </div>

      {/* <ContactUsCardNew /> */}

      <ContactUsCard />

      {industriesData[0]?.testimonials && (
        <Testimonials {...industriesData[0]?.testimonials} />
      )}
    </main>
  );
};

export default PageComponents;

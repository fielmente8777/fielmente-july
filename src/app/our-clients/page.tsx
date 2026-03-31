import { SectionWithContainer } from "@/components/sectionComponants";
import { ClientImages } from "@/utils/client";
import Image from "next/image";
import ClientCard from "./components/ClientCard";
import ClientsShorting from "./components/ClientsShorting";

export default function OurClientsPage() {
  return (
    <main>
      <SectionWithContainer sectionClassName="bg-primary">
        <h1 className="text-4xl font-bold text-center text-white mt-10">
          Our Clients
        </h1>
        <div className="h-[0.5px] bg-secondary w-28 mx-auto mt-4" />
        <p className="text-center mt-4 text-lg text-white max-w-4xl mx-auto">
          We have had the privilege of working with a diverse range of clients
          in the hospitality industry, including hotels, resorts, restaurants,
          and cloud kitchens. Our clients trust us to deliver exceptional
          marketing solutions that drive growth and success.
        </p>
      </SectionWithContainer>
      {/* <SectionWithContainer>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
          {ClientImages.map(
            (client, index) => (
              <ClientCard key={index} {...client} />
            )
          )}
        </div>
      </SectionWithContainer> */}
      <ClientsShorting />
    </main>
  );
}

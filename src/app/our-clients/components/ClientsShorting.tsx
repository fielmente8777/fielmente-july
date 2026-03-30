"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import { ClientImages } from "@/utils/client";
import { useCallback, useMemo, useState } from "react";
import ClientCard from "./ClientCard";

type ClientType = (typeof ClientImages)[number]["clientType"];
const ClientsShorting = () => {
  // derive unique client types once
  const clientTypes = useMemo(
    () => Array.from(new Set(ClientImages.map((c) => c.clientType))),
    []
  );

  const [selectedType, setSelectedType] = useState<ClientType>(clientTypes[0]);

  const handleFilter = useCallback((type: ClientType) => {
    setSelectedType(type);
  }, []);

  const filteredClients = useMemo(() => {
    const type = selectedType.toLowerCase();
    return ClientImages.filter(
      (client) => client.clientType.toLowerCase() === type
    );
  }, [selectedType]);

  return (
    <SectionWithContainer sectionClassName="">
      <div className="grid grid-cols-2 items-center justify-center gap-4 mb-8 w-fit mx-auto">
        {clientTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleFilter(type)}
            className={`py-2 border px-4 font-semibold text-lg rounded-lg capitalize transition-colors duration-300 ease-in-out
              ${
                selectedType === type
                  ? " bg-white text-[#1c1c1c] border-[#1c1c1c]"
                  : "bg-secondary/60 text-white hover:bg-primary hover:text-white"
              }`}
          >
            {type} Clients
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {filteredClients.map((client, index) => (
          <ClientCard key={index} {...client} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ClientsShorting;

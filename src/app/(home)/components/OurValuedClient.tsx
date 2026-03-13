import { ClientsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import ClientsSlider from "@/components/slider/ClientsSlider";

const OurValuedClient: React.FC<ClientsDataTypes> = ({ title, clients }) => {
  return (
    <SectionWithContainer containerClassName="grid lg:grid-cols-5 items-center gap-10">
      <h2
        className="md:text-2xl text-xl font-semibold text-primary lg:col-span-1 span-color-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <ClientsSlider cards={clients} wrapperClassName="lg:col-span-4" />
    </SectionWithContainer>
  );
};

export default OurValuedClient;

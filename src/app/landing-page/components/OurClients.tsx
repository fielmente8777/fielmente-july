import { ClientsDataTypes } from "@/@types/@homeType";
import { Container, Section } from "@/components";
import ClientsSlider from "@/components/slider/ClientsSlider";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const OurClients: React.FC<ClientsDataTypes> = ({ title, clients }) => {
  return (
    <Section className="space-y-10">
      <Container>
        <SectionHeading
          subTitle={title}
          textCenter
          subLevel={2}
          subTitleClassName="span-color-2"
        />
      </Container>
      <ClientsSlider cards={clients} lgSlidePerView={8} />
    </Section>
  );
};

export default OurClients;

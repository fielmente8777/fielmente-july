import { ClientsProps } from "@/@types/@landingPageType";
import { Container, Section } from "@/components";
import ClientsSlider from "@/components/slider/ClientsSlider";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const Clients: React.FC<ClientsProps> = ({ title, clients }) => {
  return (
    <Section defaultPadding={false} className="py-10">
      <SectionHeading
        subTitle={title}
        subLevel={2}
        subTitleClassName="span-color-4"
        subTitleColor="primary2"
        textCenter
      />
      <div className="bg-primary2 py-14 mt-8">
        <Container>
          <ClientsSlider
            cards={clients}
            lgSlidePerView={6}
            wrapperClassName="bg-transparent"
          />
        </Container>
      </div>
    </Section>
  );
};

export default Clients;

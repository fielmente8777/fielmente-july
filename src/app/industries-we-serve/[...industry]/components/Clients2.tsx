import { ClientsProps } from "@/@types/@landingPageType";
import { Container, Section } from "@/components";
import ClientsSlider from "@/components/slider/ClientsSlider";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const Clients2: React.FC<ClientsProps & {description?: string}> = ({ title, description, clients }) => {
  return (
    <Section defaultPadding={false} className="py-10">
      <SectionHeading
        subTitle={title}
        subLevel={2}
        subTitleClassName="span-color-4"
        subTitleColor="primary2"
        textCenter
      />
        {description && (
            <p className="text-center mt-4 text-secondary max-w-2xl mx-auto">
                {description}
            </p>
        )}
      <div className=" py-14 mt-8">
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

export default Clients2;

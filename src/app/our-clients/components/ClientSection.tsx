import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { ClientData } from "@/utils/client";
import ClientSliderGrid from "./ClientSliderGrid";

interface Props {
  title: string;
  description: string;
  client: ClientData[];
}
const ClientSection: React.FC<Props> = ({ title, description, client }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#101010]" sectionId="All-clients">
      <div className="space-y-4">
        <SectionHeading
          subTitle={title}
          subLevel={2}
          textCenter
          subTitleColor="white"
        />
        <p className="text-white text-center max-w-lg mx-auto">{description}</p>
        <ClientSliderGrid clients={client} />
      </div>
    </SectionWithContainer>
  );
};

export default ClientSection;

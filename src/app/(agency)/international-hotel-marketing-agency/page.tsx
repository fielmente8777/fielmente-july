import AgencyPage, { agencyMetadata } from "../components/AgencyPage";
import data from "../data/international-hotel-marketing-agency";
import InternationalDirectory from "@/components/international/InternationalDirectory";
import InternationalExperiencePreview from "@/components/international/InternationalExperiencePreview";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} afterServices={<><InternationalExperiencePreview /><InternationalDirectory compact /></>} />;
}

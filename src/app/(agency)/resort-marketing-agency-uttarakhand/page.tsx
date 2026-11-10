import AgencyPage, { agencyMetadata } from "../components/AgencyPage";
import data from "../data/resort-marketing-agency-uttarakhand";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

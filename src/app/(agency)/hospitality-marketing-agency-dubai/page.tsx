import AgencyPage, { agencyMetadata } from "../components/AgencyPage";
import data from "../data/hospitality-marketing-agency-dubai";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

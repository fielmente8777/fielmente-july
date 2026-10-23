import AgencyPage, { agencyMetadata } from "../components/AgencyPage";
import data from "../data/ota-ads-management";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

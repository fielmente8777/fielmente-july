import AgencyPage, { agencyMetadata } from "../components/AgencyPage";
import data from "../data/boutique-hotel-marketing-agency";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

import AgencyPage, { agencyMetadata } from "../_components/AgencyPage";
import data from "../_data/pages/luxury-resort-marketing-agency";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

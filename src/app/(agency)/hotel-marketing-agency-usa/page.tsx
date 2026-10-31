import AgencyPage, { agencyMetadata } from "../components/AgencyPage";
import data from "../data/hotel-marketing-agency-usa";
import USLocationsPreview from "@/components/us/USLocationsPreview";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} afterServices={<USLocationsPreview />} />;
}

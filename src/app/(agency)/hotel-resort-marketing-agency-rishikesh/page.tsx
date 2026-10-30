import AgencyPage, { agencyMetadata } from "../components/AgencyPage";
import { LOCAL_AGENCY_PAGES } from "../data/india-locations";

const data = LOCAL_AGENCY_PAGES.find((page) => page.slug === "hotel-resort-marketing-agency-rishikesh")!;
export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

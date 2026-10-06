import AgencyPage, { agencyMetadata } from "@/app/(agency)/components/AgencyPage";
import data from "@/app/(agency)/data/resort-marketing-agency";
import IndustryServicesGrid from "../components/templates/IndustryServicesGrid";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} afterServices={<IndustryServicesGrid slug="resort-marketing-agency" />} />;
}

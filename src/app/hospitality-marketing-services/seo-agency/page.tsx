// Hospitality SEO Agency: rebuilt on the agency landing template at the same URL, keeping its rankings.
// Content: src/app/(agency)/_data/pages/hospitality-seo-agency.ts
import AgencyPage, { agencyMetadata } from "@/app/(agency)/_components/AgencyPage";
import data from "@/app/(agency)/_data/pages/hospitality-seo-agency";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

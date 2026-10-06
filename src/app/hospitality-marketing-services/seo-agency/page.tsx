// Hospitality SEO Agency: rebuilt on the agency landing template at the same URL, keeping its rankings.
// Content: src/app/(agency)/data/hospitality-seo-agency.ts
import AgencyPage, { agencyMetadata } from "@/app/(agency)/components/AgencyPage";
import data from "@/app/(agency)/data/hospitality-seo-agency";

export const metadata = agencyMetadata(data);

export default function Page() {
  return <AgencyPage data={data} />;
}

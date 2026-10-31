import type { Metadata } from "next";
import { notFound } from "next/navigation";
import USLocationDirectory, { US_DIRECTORY_DESCRIPTION, US_DIRECTORY_TITLE } from "@/components/us/USLocationDirectory";
import USMarketPage from "@/components/us/USMarketPage";
import { US_DIRECTORY, US_MARKETS, findUSMarket, usPath, usSegments, usTitle } from "@/lib/usMarkets";

type Props = { params: Promise<{ market?: string[] }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ market: [] }, ...US_MARKETS.map((m) => ({ market: usSegments(m) }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const segments = (await params).market ?? [];
  const market = segments.length ? findUSMarket(segments) : undefined;
  if (segments.length && !market) notFound();
  const title = market ? usTitle(market) : US_DIRECTORY_TITLE;
  const description = market?.description ?? US_DIRECTORY_DESCRIPTION;
  const url = `https://fielmente.com${market ? usPath(market) : US_DIRECTORY}`;
  return {
    title, description, alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description, url, siteName: "Fielmente", locale: "en_US", type: "website", images: [{ url: "https://fielmente.com/fielmente_logo.png", alt: "Fielmente hospitality marketing" }] },
    twitter: { card: "summary", title, description, images: ["https://fielmente.com/fielmente_logo.png"] },
  };
}

export default async function Page({ params }: Props) {
  const segments = (await params).market ?? [];
  if (!segments.length) return <USLocationDirectory />;
  const market = findUSMarket(segments);
  if (!market) notFound();
  return <USMarketPage market={market} />;
}

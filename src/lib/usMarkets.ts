import rawMarkets from "@/data/us-markets.json";

export type USMarket = {
  name: string;
  slug: string;
  kind: "state" | "city";
  state: string | null;
  region: string;
  description: string;
  intro: string;
  context: string;
  restaurant: string;
  actions: { title: string; body: string }[];
  faq: { question: string; answer: string };
  source: { label: string; url: string };
};

export const US_HUB = "/hotel-marketing-agency-usa/";
export const US_DIRECTORY = `${US_HUB}locations/`;
export const US_MARKETS = rawMarkets as USMarket[];
export const US_STATES = US_MARKETS.filter((m) => m.kind === "state");
export const US_CITIES = US_MARKETS.filter((m) => m.kind === "city");
export const US_REGIONS = ["Northeast", "South", "Midwest", "West"];
export const US_PRIORITY_CITIES = ["New York City", "Miami", "Orlando", "Los Angeles", "Las Vegas", "Dallas", "Chicago", "Washington, DC"];

export function usParent(m: USMarket) {
  return m.kind === "city" ? US_STATES.find((s) => s.name === m.state) : undefined;
}

export function usSegments(m: USMarket): string[] {
  const parent = usParent(m);
  return parent ? [parent.slug, m.slug] : [m.slug];
}

export function usPath(m: USMarket) {
  return `${US_DIRECTORY}${usSegments(m).join("/")}/`;
}

export function findUSMarket(segments: string[]) {
  return US_MARKETS.find((m) => usSegments(m).join("/") === segments.join("/"));
}

export function usCitiesFor(m: USMarket) {
  return US_CITIES.filter((c) => c.state === (m.kind === "state" ? m.name : m.state));
}

export function usTitle(m: USMarket) {
  return `Hotel Marketing Agency in ${m.name} | Fielmente`;
}

export function usRelated(m: USMarket) {
  const cities = usCitiesFor(m).filter((c) => c.slug !== m.slug);
  const states = US_STATES.filter((s) => s.region === m.region && s.name !== m.name && s.name !== m.state);
  return [...cities, ...states].slice(0, 5);
}

import raw from "@/data/international-service-pages.json";
import countryData from "@/data/international-coverage.json";

export const INTERNATIONAL_HUB = "/international-hotel-marketing-agency/";
export const INTERNATIONAL_DIRECTORY = `${INTERNATIONAL_HUB}locations/`;
export const INTERNATIONAL_EXPERIENCE = "/international-hospitality-marketing-experience/";
export type InternationalMarket = {
  name: string; country: string; region: string; code: string; kind: string; path: string;
  description: string; intro: string; context: string; actions: {title:string;body:string}[];
  faq: {question:string;answer:string}; parentHref: string | null;
  sector: "hospitality" | "hotel" | "restaurant"; source: {label:string;url:string};
};
export const INTERNATIONAL_PAGES = raw as InternationalMarket[];
export const EXISTING_COUNTRY_PAGES = countryData;
export const internationalPath = (m: InternationalMarket) => `${INTERNATIONAL_DIRECTORY}${m.path}/`;
export const internationalLabel = (m: InternationalMarket) => m.sector === "hospitality" ? m.name : `${m.name} · ${m.sector === "hotel" ? "Hotel" : "Restaurant"} marketing`;
export const internationalTitle = (m: InternationalMarket) => `${m.sector === "restaurant" ? "Restaurant" : "Hotel"} Marketing Agency in ${m.name}${m.name === "Paris" ? ", France" : ""} | Fielmente`;
export function internationalParent(m: InternationalMarket) {
  if(!m.parentHref)return undefined;
  const sibling=INTERNATIONAL_PAGES.find(p=>internationalPath(p)===m.parentHref);
  if(sibling)return {name:internationalLabel(sibling),href:internationalPath(sibling)};
  const existing=EXISTING_COUNTRY_PAGES.find(p=>p.href===m.parentHref||p.countryHref===m.parentHref);
  return {name:existing?.name??m.country,href:m.parentHref};
}
export function internationalRelated(m: InternationalMarket) {
  const same=INTERNATIONAL_PAGES.filter(p=>p.country===m.country&&p.path!==m.path);
  const regional=EXISTING_COUNTRY_PAGES.filter(p=>({europe:"Europe",asia:"Asia",africa:"Africa & Indian Ocean",americas:"The Americas",oceania:"Australia & New Zealand","middle-east":"Middle East & North Africa"}[p.region]===m.region)&&p.name!==m.country);
  return [...same.map(p=>({name:internationalLabel(p),href:internationalPath(p)})),...regional.map(p=>({name:p.name,href:p.href}))].slice(0,5);
}
export const INTERNATIONAL_REFERENCES = [
  {country:"Australia",name:"Toast Maker",location:"Sydney",source:"https://australia.fielmente.com/",detail:"Named on our existing Australia country page as an international client reference."},
  {country:"Spain",name:"Hotel & Thalasso Villa Antilla",location:"Basque Country",source:"https://spain.fielmente.com/",detail:"Named on our existing country pages as a hospitality client reference in Spain."},
  {country:"Canada",name:"Sternwheeler Hotel & Conference Centre",location:"Canada",source:"/our-clients/",detail:"Included in our published international client selection."},
  {country:"France",name:"Miramar Beach Hotel & Spa",location:"Côte d’Azur",source:"/our-clients/",detail:"Included in our published international client selection."},
  {country:"Nepal",name:"Bhairahawa Garden Resort",location:"Nepal",source:"/our-clients/",detail:"Included in our published international client selection."},
  {country:"Sri Lanka",name:"Aqua Dunhinda",location:"Sri Lanka",source:"/our-clients/",detail:"Included in our published international client selection."},
];

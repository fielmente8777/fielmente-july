import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternationalDirectory, { INTERNATIONAL_DIRECTORY_TITLE, INTERNATIONAL_DIRECTORY_DESCRIPTION } from "@/components/international/InternationalDirectory";
import InternationalMarketPage from "@/components/international/InternationalMarketPage";
import { INTERNATIONAL_DIRECTORY, INTERNATIONAL_PAGES, internationalPath, internationalTitle } from "@/lib/internationalMarkets";
type Props={params:Promise<{market?:string[]}>};
export const dynamicParams=false;
export function generateStaticParams(){return [{market:[]},...INTERNATIONAL_PAGES.map(m=>({market:m.path.split("/")}))];}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const segments=(await params).market??[];const m=INTERNATIONAL_PAGES.find(m=>m.path===segments.join("/"));
 if(segments.length&&!m)notFound();
 const title=m?internationalTitle(m):INTERNATIONAL_DIRECTORY_TITLE;
 const description=m?.description??INTERNATIONAL_DIRECTORY_DESCRIPTION;
 const url=`https://fielmente.com${m?internationalPath(m):INTERNATIONAL_DIRECTORY}`;
 return {title,description,alternates:{canonical:url},robots:{index:true,follow:true},openGraph:{title,description,url,siteName:"Fielmente",locale:m?.country==="Australia"?"en_AU":m?.country==="Canada"?"en_CA":"en_GB",type:"website",images:[{url:"https://fielmente.com/fielmente_logo.png",alt:"Fielmente international hospitality marketing"}]},twitter:{card:"summary",title,description,images:["https://fielmente.com/fielmente_logo.png"]}};
}
export default async function Page({params}:Props){const segments=(await params).market??[];if(!segments.length)return <InternationalDirectory/>;const m=INTERNATIONAL_PAGES.find(m=>m.path===segments.join("/"));if(!m)notFound();return <InternationalMarketPage market={m}/>;}

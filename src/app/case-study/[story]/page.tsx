import {
  Container,
  SectionWithContainer,
} from "@/components/sectionComponants";
import Image from "next/image";
import { casStudiesData } from "./components/caseData";
import CtaSection from "@/components/commonSections/CtaSection";

interface Params {
  params: Promise<{ story: string }>;
}

export async function generateStaticParams() {
  const path = casStudiesData;

  return path.map((post) => ({
    story: post.slug,
  }));
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const data = casStudiesData.find((item) => item.slug === params.story);
  return {
    title: data?.metaData?.title || `Case Study - Fielmente`,
    description: data?.metaData?.description || `Case Study - Fielmente`,
    alternates: {
      canonical: `https://fielmente.com/case-study/${data?.slug}/`,
      languages: {
        "en-US": `https://fielmente.com/case-study/${data?.slug}/`,
      },
    },
    openGraph: {
      title: data?.metaData?.title || `Case Study - Fielmente`,
      description: data?.metaData?.description || `Case Study - Fielmente`,
      images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    },
  };
}

export default async function Page(props: Params) {
  const params = await props.params;
  const data = casStudiesData.find((item) => item.slug === params.story);

  if (!data) {
    return <div>Blog not found</div>;
  }
  return (
    <main>
      <div className="w-full mx-auto relative lg:aspect-[4/1.8] md:aspect-4/2 aspect-4/3.5">
        <Image
          src={data?.hotelImg || data.img}
          alt={data?.title || "case study"}
          fill
          className={`object-cover`}
        />
        <div className="absolute inset-0 bg-[#111609]/30 flex items-center justify-center">
          <Container className="md:space-y-16 space-y-5">
            <p className="px-4 py-1.5 bg-[#111609]/40 backdrop-blur-md shadow-inner shadow-white border-[0.1px] border-white/30 rounded-full w-fit">
              <span className="text-white">Case Study</span>
            </p>
            <h1 className="lg:text-[2.5rem]/[3.5rem] lg:max-w-lg text-white font-semibold text-[1.5rem]/[2.2rem]">
              {data?.title}
            </h1>
          </Container>
        </div>
      </div>
      <SectionWithContainer sectionClassName="">
        <div className="flex flex-col gap-4 w-full">
          {/* <div className="max-w-[350px] w-full mx-auto relative aspect-[4/2]">
            <Image
              src={data?.img && data.img !== "" ? data.img : "/fallback.png"}
              alt={data?.title || "case study"}
              fill
              className={`${data.className ? data.className : "object-cover"} rounded-2xl`}
            />
          </div> */}

          {data?.data?.map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h3 className="text-[1.75rem]/[2.5rem] text-orange-primary">
                {item.title}
              </h3>
              {item?.description?.map((subItem, subIndex) => (
                <p className="text-[1.25rem]/[1.5rem]" key={subIndex}>
                  {subItem}
                </p>
              ))}
              {item?.lists && (
                <ul className="flex flex-col gap-2">
                  {item?.lists?.map((subItem, subIndex) => (
                    <li
                      className="text-[1.125rem]/[1.5rem]"
                      key={subIndex}
                      dangerouslySetInnerHTML={{ __html: subItem }}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </SectionWithContainer>
      <CtaSection
        title="Want Similar Results?"
        description="Book a demo and see how Eazotel can transform your property."
        cta={{ label: "Book a Demo", href: "" }}
      />
    </main>
  );
}

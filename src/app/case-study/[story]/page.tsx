import { SectionWithContainer } from "@/components/sectionComponants";
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
    title: `Case Study - Fielmente`,
    description: `Case Study - Fielmente`,
    alternates: {
      canonical: `https://fielmente.com/case-study/${data?.slug}/`,
      languages: {
        "en-US": `https://fielmente.com/case-study/${data?.slug}/`,
      },
    },
    openGraph: {
      title: `Case Study - Fielmente`,
      description: `Case Study - Fielmente`,
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
      <div className="w-full mx-auto relative aspect-[4/1.8]">
        <Image
          src={data?.img && data.img !== "" ? data.img : "/fallback.png"}
          alt={data?.title || "case study"}
          fill
          className={`object-cover`}
        />
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
          <h1 className="lg:text-[2.5rem]/[3.5rem] text-[1.5rem]/[2.5rem]">
            {data?.title}
          </h1>

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

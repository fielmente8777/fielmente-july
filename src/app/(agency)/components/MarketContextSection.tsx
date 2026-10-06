
import Container from "@/components/sectionComponants/Container";
import Eyebrow from "@/components/typography/Eyebrow";
import SectionTitle from "@/components/typography/SectionTitle";
import Image from "next/image";
import RichText, { citeNumber } from "./RichText";
import { AgencyPageData } from "@/@types/@agencyPageType";

interface MarketContextSectionProps {
  data: AgencyPageData;
}

// Market or segment context: intro, four cited numbers, a photo and key points.
const MarketContextSection: React.FC<MarketContextSectionProps> = ({ data: d }) => {
  const { context, sources } = d;
  return (
    <section className="py-14 md:py-22">
      <Container>
        <div className="flex flex-col gap-3 max-w-190 mb-8 md:mb-10">
          <Eyebrow>{context.eyebrow}</Eyebrow>
          <SectionTitle>{context.title}</SectionTitle>
          {context.intro.map((p, i) => (
            <p key={i} className="text-[15px]/relaxed md:text-base/relaxed text-[#55536E]">
              <RichText text={p} sources={sources} />
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {context.stats.map((s, i) => {
            const n = s.source ? citeNumber(sources, s.source) : null;
            return (
              <div key={s.label} className={`rounded-2xl p-5 md:p-6 flex flex-col gap-2 ${i === 0 ? "bg-primary2" : "bg-[#F5F5F9]"}`}>
                <span className={`text-[26px]/tight md:text-[34px]/tight font-bold ${i === 0 ? "text-orange-primary" : "text-primary2"}`}>{s.value}</span>
                <span className={`text-[13px]/snug md:text-sm/snug ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>
                  {s.label}
                  {n && (
                    <sup className="ml-0.5 text-[0.75em] font-semibold">
                      <a href={`#src-${s.source}`} className={i === 0 ? "text-white/80" : "text-sapphireBlue"}>
                        [{n}]
                      </a>
                    </sup>
                  )}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#F5F5F9]">
            <Image src={context.image.src} alt={context.image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            {context.points.map((pt) => (
              <div key={pt.title} className="flex flex-col gap-1.5">
                <h3 className="text-lg md:text-xl font-bold">{pt.title}</h3>
                <p className="text-[15px]/relaxed md:text-base/relaxed text-[#55536E]">
                  <RichText text={pt.body} sources={sources} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketContextSection;

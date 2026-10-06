import type { AgencyPageData } from "@/@types/@agencyPageType";
import HowHotelScaling from "@/app/case-study/components/HowHotelScaling";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { PORTFOLIO, TESTIMONIALS } from "@/utils/agencyData";
import { caseStudyCards } from "@/utils/caseStudyCards";

interface ProofSectionProps {
  data: AgencyPageData;
}

// Portfolio numbers, matching case studies (same cards as /case-study/) and client testimonials.
const ProofSection: React.FC<ProofSectionProps> = ({ data: d }) => {
  const cards = caseStudyCards(d.proof.caseStudies);
  return (
    <>
      <section className="pt-14 md:pt-22">
        <Container>
          <SectionHead eyebrow="Proof" title={d.proof.title} lede={d.proof.lede} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {PORTFOLIO.stats.map((s, i) => (
              <div key={s.label} className={`rounded-2xl p-5 md:p-6 flex flex-col gap-2 ${i === 0 ? "bg-primary2" : "bg-[#F5F5F9]"}`}>
                <span className={`text-[26px]/tight md:text-[34px]/tight font-bold ${i === 0 ? "text-orange-primary" : "text-primary2"}`}>{s.value}</span>
                <span className={`text-[13px] md:text-sm ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#6B6886]">{PORTFOLIO.note}</p>
        </Container>
      </section>

      {cards.length > 0 && <HowHotelScaling title="Case studies" cards={cards} />}

      <section className="pb-14 md:pb-22">
        <Container>
          {d.proof.testimonials.length > 0 && (
            <div className={`grid gap-5 ${d.proof.testimonials.length > 1 ? "md:grid-cols-2" : ""}`}>
              {d.proof.testimonials.map((k) => {
                const t = TESTIMONIALS[k];
                return (
                  <figure key={k} className="rounded-2xl bg-[#F5F5F9] p-6 md:p-8 flex flex-col gap-4">
                    <span className="text-5xl leading-none text-orange-primary" aria-hidden="true">
                      “
                    </span>
                    <blockquote className="-mt-4 text-base/relaxed md:text-lg/relaxed text-primary2">{t.quote}</blockquote>
                    <figcaption className="text-sm text-[#55536E]">
                      <span className="font-semibold text-primary2">{t.name}</span> · {t.context}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          )}
          <p className="mt-6 max-w-190 text-sm/relaxed text-[#55536E]">{d.proof.honestNote}</p>
        </Container>
      </section>
    </>
  );
};

export default ProofSection;

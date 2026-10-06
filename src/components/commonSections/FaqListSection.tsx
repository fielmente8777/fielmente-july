import Container from "@/components/sectionComponants/Container";
import Eyebrow from "@/components/typography/Eyebrow";
import SectionTitle from "@/components/typography/SectionTitle";
import FaqContactLine from "./FaqContactLine";

interface FaqListSectionProps {
  title: string;
  faqs: { q: string; a: string }[];
  /** Line under the title. Defaults to the phone / email line. */
  showContactLine?: boolean;
}

// FAQ list with FAQPage structured data. The first answer is open; the rest expand on click.
const FaqListSection: React.FC<FaqListSectionProps> = ({ title, faqs, showContactLine = true }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="bg-[#F5F5F9] py-14 md:py-22">
      <Container className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16">
        <div className="flex flex-col gap-3">
          <Eyebrow>Questions</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
          {showContactLine && (
            <p className="text-sm/relaxed text-[#55536E]">
              <FaqContactLine />
            </p>
          )}
        </div>
        <div className="flex flex-col">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-[#D9D8E4] last:border-b-0 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] md:text-lg font-bold text-primary2 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="mt-1 text-orange-primary transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px]/relaxed text-[#55536E]">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
};

export default FaqListSection;

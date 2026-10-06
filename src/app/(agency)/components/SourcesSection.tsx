import type { SourceRef } from "@/@types/@agencyPageType";
import Container from "@/components/sectionComponants/Container";

interface SourcesSectionProps {
  sources: SourceRef[];
}

// Numbered source list. Each [[ID]] citation in the page links here (#src-ID).
const SourcesSection: React.FC<SourcesSectionProps> = ({ sources }) => {
  if (sources.length === 0) return null;
  return (
    <section aria-labelledby="sources-title" className="border-t border-[#E4E3EC] py-10">
      <Container>
        <h2 id="sources-title" className="text-sm font-bold uppercase tracking-[0.12em] text-[#6B6886]">
          Sources
        </h2>
        <ol className="mt-4 grid md:grid-cols-2 gap-x-10 gap-y-2 text-[13px]/relaxed text-[#55536E]">
          {sources.map((s, i) => (
            <li key={s.id} id={`src-${s.id}`} className="scroll-mt-28">
              <span className="font-semibold text-primary2">[{i + 1}]</span>{" "}
              <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline decoration-[#C9C7DD] hover:text-primary2">
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default SourcesSection;

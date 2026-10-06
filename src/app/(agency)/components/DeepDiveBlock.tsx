
import IconCard from "@/components/cards/IconCard";
import SplitSection from "@/components/commonSections/SplitSection";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import RichText from "./RichText";
import { AgencyPageData, Block } from "@/@types/@agencyPageType";

interface DeepDiveBlockProps {
  block: Block;
  data: AgencyPageData;
  /** Even blocks get a grey background, so consecutive blocks alternate. */
  index: number;
}

// One of the 2–3 page-specific sections: image + text, a table, or a grid of cards.
const DeepDiveBlock: React.FC<DeepDiveBlockProps> = ({ block: b, data: d, index }) => {
  const tint = index % 2 === 0;

  if (b.kind === "split") {
    return (
      <SplitSection
        eyebrow={b.eyebrow}
        title={b.title}
        body={b.paragraphs.map((p, k) => (
          <p key={k}>
            <RichText text={p} sources={d.sources} />
          </p>
        ))}
        bullets={b.bullets?.map((t) => <RichText key={t} text={t} sources={d.sources} />)}
        image={b.image.src}
        imageAlt={b.image.alt}
        reverse={b.reverse}
        tint={tint}
      />
    );
  }

  if (b.kind === "table") {
    return (
      <section className={`py-14 md:py-20 ${tint ? "bg-[#F5F5F9]" : ""}`}>
        <Container>
          <SectionHead eyebrow={b.eyebrow} title={b.title} lede={b.lede ? <RichText text={b.lede} sources={d.sources} /> : undefined} />
          <div className="overflow-x-auto rounded-2xl border border-[#E4E3EC] bg-white">
            <table className="w-full min-w-160 border-collapse text-left text-sm md:text-[15px]">
              <thead>
                <tr className="bg-primary2 text-white">
                  {b.columns.map((c) => (
                    <th key={c} scope="col" className="px-4 py-3.5 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, r) => (
                  <tr key={r} className={r % 2 ? "bg-[#FAFAFC]" : "bg-white"}>
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th key={c} scope="row" className="px-4 py-3.5 align-top font-semibold text-primary2">
                          <RichText text={cell} sources={d.sources} />
                        </th>
                      ) : (
                        <td key={c} className="px-4 py-3.5 align-top text-[#3D3A57]">
                          <RichText text={cell} sources={d.sources} />
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note && (
            <p className="mt-3 text-xs text-[#6B6886]">
              <RichText text={b.note} sources={d.sources} />
            </p>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className={`py-14 md:py-20 ${tint ? "bg-[#F5F5F9]" : ""}`}>
      <Container>
        <SectionHead eyebrow={b.eyebrow} title={b.title} lede={b.lede ? <RichText text={b.lede} sources={d.sources} /> : undefined} />
        <div className={`grid sm:grid-cols-2 ${b.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-4 md:gap-5`}>
          {b.items.map((it) => (
            <IconCard key={it.title} icon={it.icon} title={it.title} body={<RichText text={it.body} sources={d.sources} />} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DeepDiveBlock;

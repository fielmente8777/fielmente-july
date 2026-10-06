// Renders text with source citations. Write [[AE1]] in content to cite the source with id "AE1";
// it becomes a numbered superscript linking to the Sources list at the bottom of the page.
import { SourceRef } from "@/@types/@agencyPageType";
import { Fragment } from "react";


export function citeNumber(sources: SourceRef[], id: string) {
  const i = sources.findIndex((s) => s.id === id);
  return i === -1 ? null : i + 1;
}

export default function RichText({ text, sources }: { text: string; sources: SourceRef[] }) {
  const parts = text.split(/(\[\[[A-Z]{2}\d+\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[\[([A-Z]{2}\d+)\]\]$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const n = citeNumber(sources, m[1]);
        if (!n) return null;
        return (
          <sup key={i} className="ml-0.5 text-[0.7em] font-semibold">
            <a href={`#src-${m[1]}`} className="text-sapphireBlue no-underline hover:underline" aria-label={`Source ${n}`}>
              [{n}]
            </a>
          </sup>
        );
      })}
    </>
  );
}

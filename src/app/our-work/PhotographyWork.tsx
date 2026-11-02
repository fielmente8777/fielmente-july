import Image from "next/image";
import { SHOOTS, type Span } from "./photography";

// Tile sizes in the gallery grid (2 columns on phones, 4 from md up).
const SPAN: Record<Span, string> = {
  feature: "col-span-2 row-span-2",
  wide: "col-span-2",
  tall: "row-span-2",
};

const SIZES: Record<Span | "base", string> = {
  feature: "(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw",
  wide: "(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw",
  tall: "(min-width: 1280px) 310px, (min-width: 768px) 25vw, 50vw",
  base: "(min-width: 1280px) 310px, (min-width: 768px) 25vw, 50vw",
};

/** Hotel and resort shoots, one gallery per property. */
export default function PhotographyWork() {
  return (
    <div className="space-y-16">
      {SHOOTS.map((s) => (
        <article key={s.key} aria-labelledby={`shoot-${s.key}`} className="space-y-6">
          <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-end md:gap-10">
            <div>
              <h3 id={`shoot-${s.key}`} className="text-2xl font-semibold text-white md:text-3xl">
                {s.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#FFB596]">{s.place}</p>
            </div>
            <p className="text-[#C9C7DD] md:text-lg">{s.work}</p>
          </div>
          <ul className="grid grid-flow-dense auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[200px] md:grid-cols-4 md:gap-3 xl:auto-rows-[230px]">
            {s.photos.map((ph) => (
              <li
                key={ph.src}
                className={`group relative overflow-hidden rounded-xl bg-white/5 ${ph.span ? SPAN[ph.span] : ""}`}
              >
                <Image
                  src={ph.src}
                  alt={ph.alt}
                  fill
                  sizes={SIZES[ph.span ?? "base"]}
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

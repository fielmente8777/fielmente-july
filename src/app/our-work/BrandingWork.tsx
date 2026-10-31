import Image from "next/image";
import { BRAND_PROJECTS, LOGO_DESIGNS, MENUS, type BrandImage } from "./branding";

const STRIP_H = 260; // px height of each image in a gallery strip on desktop

/** A row of images at one height that scrolls sideways when it doesn't fit. */
function Strip({
  images,
  height = STRIP_H,
  heightClass = "h-[200px] md:h-[260px]",
  priorityFirst = false,
}: {
  images: BrandImage[];
  height?: number;
  heightClass?: string;
  priorityFirst?: boolean;
}) {
  return (
    <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:thin] md:mx-0 md:scroll-px-0 md:px-0">
      {images.map((im, i) => {
        const w = Math.round((height * im.w) / im.h);
        return (
          <li key={im.src} className="shrink-0 snap-start">
            <Image
              src={im.src}
              alt={im.alt}
              width={w}
              height={height}
              loading={priorityFirst && i === 0 ? "eager" : "lazy"}
              className={`${heightClass} w-auto max-w-none rounded-xl border border-main-border bg-white object-cover`}
            />
          </li>
        );
      })}
    </ul>
  );
}

/** Brand identities we designed, each with photos of the finished pieces. */
export function BrandProjects() {
  return (
    <div className="space-y-14">
      {BRAND_PROJECTS.map((b) => (
        <article key={b.key} className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-10">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary md:text-2xl">{b.name}</h3>
            <p className="text-sm font-medium text-orange-ink">{b.place}</p>
            <p className="text-secondary">{b.work}</p>
          </div>
          <Strip images={b.images} />
        </article>
      ))}
    </div>
  );
}

/** Logos we designed for restaurants and hotels. */
export function LogoDesigns() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary md:text-2xl">Logo design</h3>
      <p className="mt-2 max-w-2xl text-secondary">Marks for restaurants, cloud kitchens, hotels and a campsite, in India, Canada and Nepal.</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {LOGO_DESIGNS.map((l) => (
          <li key={l.name} className="overflow-hidden rounded-xl border border-main-border">
            <div className="relative aspect-[4/3]" style={{ background: l.bg }}>
              <Image src={l.src} alt={`${l.name} logo designed by Fielmente`} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-contain p-6" />
            </div>
            <p className="border-t border-main-border bg-white px-3 py-2 text-sm font-medium text-primary">{l.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Menus and other print. */
export function MenuDesigns() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary md:text-2xl">Menus & print</h3>
      <p className="mt-2 max-w-2xl text-secondary">Bar, food and digital-screen menus, laid out to sell the dishes that matter most.</p>
      <div className="mt-6 space-y-8">
        {MENUS.map((m) => (
          <div key={m.name} className="space-y-3">
            <p className="font-semibold text-primary">
              {m.name} <span className="font-normal text-secondary">· {m.place}</span>
            </p>
            <Strip images={m.pages} height={320} heightClass="h-[260px] md:h-[320px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

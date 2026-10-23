// "Platforms we run" grid: official logo, name and one line for each ad and listing platform,
// each linking to the page about it. Used on the home page, the hubs and the paid media pages.
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { PLATFORMS, PLATFORM_STRIP, type PlatformKey } from "@/utils/platforms";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

interface PlatformStripSectionProps {
  title?: string;
  lede?: string;
  keys?: PlatformKey[];
  /** Page-specific links, e.g. an industry's own service page for each platform. */
  hrefs?: Partial<Record<PlatformKey, string>>;
  tint?: boolean;
}

const PlatformStripSection: React.FC<PlatformStripSectionProps> = ({
  title = "The platforms we run for hotels and restaurants",
  lede = "Certified Google Partner and Meta Business Partner. One team plans, runs and reports on every platform below.",
  keys = PLATFORM_STRIP,
  hrefs = {},
  tint = false,
}) => {
  const items = keys.map((k) => ({ key: k, ...PLATFORMS[k], href: hrefs[k] ?? PLATFORMS[k].href }));
  return (
    <section className={`py-14 md:py-20 ${tint ? "bg-[#F5F5F9]" : ""}`} aria-labelledby="platforms-title">
      <Container>
        <SectionHead eyebrow="Platforms" title={<span id="platforms-title">{title}</span>} lede={lede} />
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
          {items.map((p) => {
            const inner = (
              <>
                <span className="flex h-12 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element -- small static logo file */}
                  <img src={p.logo} alt={`${p.name} logo`} width={p.wordmark ? 110 : 40} height={40} className={p.wordmark ? "h-8 w-auto max-w-28 object-contain" : "h-10 w-10 object-contain"} />
                </span>
                <span className="mt-3 flex items-center gap-1 text-[15px] font-bold text-primary2">
                  {p.service ?? p.name}
                  {p.href && <LuArrowUpRight className="h-4 w-4 text-[#9C9AB5] transition-colors group-hover:text-orange-primary" aria-hidden="true" />}
                </span>
                {p.line && <span className="mt-1 text-[13px]/snug text-[#55536E]">{p.line}</span>}
              </>
            );
            const cls = "group flex h-full flex-col rounded-2xl border border-[#E4E3EC] bg-white p-4 md:p-5 transition-all hover:border-primary2/30 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)]";
            return (
              <li key={p.key}>
                {p.href ? (
                  <Link href={p.href} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default PlatformStripSection;

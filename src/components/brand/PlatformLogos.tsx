// Row of official platform logos ("Google Ads", "Tripadvisor Ads", "ChatGPT Ads"...), used in page heroes
// to show which platforms a service runs on. Plain <img> tags: the files are tiny SVGs and PNG wordmarks.
import Link from "next/link";
import { PLATFORMS, type PlatformKey } from "@/utils/platforms";

interface PlatformLogosProps {
  keys: PlatformKey[];
  /** "dark" for the navy heroes (white chips), "light" for white sections. */
  tone?: "dark" | "light";
  /** Visible label before the logos, e.g. "Runs on". */
  label?: string;
  /** Link each logo to our page about that platform. */
  link?: boolean;
}

const PlatformLogos: React.FC<PlatformLogosProps> = ({ keys, tone = "dark", label, link = false }) => {
  const items = [...new Set(keys)].map((k) => ({ key: k, ...PLATFORMS[k] })).filter((p) => p.logo);
  if (items.length === 0) return null;
  const chip =
    tone === "dark"
      ? "bg-white text-primary2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
      : "bg-white text-primary2 border border-[#E4E3EC]";
  return (
    <div className="flex flex-wrap items-center gap-2">
      {label && <span className={`mr-1 text-xs font-semibold uppercase tracking-[0.12em] ${tone === "dark" ? "text-[#C9C7DD]" : "text-[#6B6886]"}`}>{label}</span>}
      <ul className="flex flex-wrap items-center gap-2.5">
        {items.map((p) => {
          const body = (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element -- small static logo file */}
              <img src={p.logo} alt={`${p.name} logo`} width={p.wordmark ? 84 : 28} height={28} className={p.wordmark ? "h-6 w-auto" : "h-7 w-7 object-contain"} />
              {!p.wordmark && <span>{p.name}</span>}
              {p.wordmark && <span className="sr-only">{p.name}</span>}
            </>
          );
          const cls = `inline-flex min-h-11 items-center gap-2.5 rounded-full px-4 py-2 text-[15px] font-bold ${chip}`;
          return (
            <li key={p.key}>
              {link && p.href ? (
                <Link href={p.href} className={`${cls} transition-transform hover:-translate-y-0.5`}>
                  {body}
                </Link>
              ) : (
                <span className={cls}>{body}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlatformLogos;

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { CaseStudy } from "../../data/caseStudies";

export default function CaseStudyCardRich({ cs, large = false }: { cs: CaseStudy; large?: boolean }) {
  return (
    <Link
      href={`/case-study/${cs.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-[#E4E3EC] hover:border-primary2/40 hover:shadow-[0_24px_60px_-30px_rgba(17,13,60,0.45)] transition-all"
    >
      <div className={`relative w-full overflow-hidden ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image
          src={cs.heroImage}
          alt={cs.heroAlt}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary2/85 via-primary2/20 to-transparent" />
        <div
          className="absolute left-4 top-4 flex h-12 w-24 items-center justify-center rounded-xl px-2"
          style={{ backgroundColor: cs.logoBg ?? "#FFFFFF" }}
        >
          <div className="relative h-9 w-full">
            <Image src={cs.logo} alt={`${cs.client} logo`} fill sizes="96px" className="object-contain" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
          <div>
            <span className={`block font-bold leading-none ${large ? "text-[44px]" : "text-[34px]"}`}>{cs.cardStat.value}</span>
            <span className="mt-1 block text-sm text-white/85">{cs.cardStat.label}</span>
          </div>
          <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold">{cs.service}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sapphireBlue">
          {cs.propertyType} · {cs.location.split(",")[0]}
        </p>
        <h3 className={`font-bold text-primary2 ${large ? "text-2xl md:text-[28px]/tight" : "text-xl/snug"}`}>{cs.client}</h3>
        <p className="text-[15px]/relaxed text-[#55536E]">{cs.headline}</p>
        <span className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-primary">
          Read the case study <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

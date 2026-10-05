// Client logo strip, used on agency, industry and service pages. The logo sets and the
// company facts under them live in src/app/(agency)/_lib/shared.ts.
import { COMPANY, logosFor } from "@/app/(agency)/_lib/shared";
import type { LogoSet } from "@/app/(agency)/_lib/types";
import { Container } from "@/components/sectionComponants";
import Image from "next/image";

export default function ClientLogos({ set = "hotels", count = 16 }: { set?: LogoSet; count?: number }) {
  const logos = logosFor(set, count);
  return (
    <section aria-labelledby="client-logos-title" className="border-b border-[#E4E3EC] py-10 md:py-12">
      <Container>
        <p id="client-logos-title" className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6886]">
          Hospitality brands we&apos;ve worked with
        </p>
        <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
          {logos.map((l) => (
            <li
              key={l.src}
              className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-xl border border-[#EDECF3] p-2"
              style={{ backgroundColor: l.bg ?? "#FFFFFF" }}
            >
              <Image src={l.src} alt={l.name} fill sizes="(max-width: 640px) 25vw, 12vw" className="object-contain p-2" />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-[#55536E]">
          {COMPANY.partners.join(" · ")} · Clients in {COMPANY.countries.slice(0, -1).join(", ")} and {COMPANY.countries.at(-1)}
        </p>
      </Container>
    </section>
  );
}

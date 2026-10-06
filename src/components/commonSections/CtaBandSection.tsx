import Container from "@/components/sectionComponants/Container";
import Image from "next/image";
import { ReactNode } from "react";

interface CtaBandSectionProps {
  title: string;
  body: string;
  /** Extra line under the body, e.g. phone and email. */
  note?: ReactNode;
  actions: ReactNode;
}

// Closing call to action: dark rounded panel with buttons.
const CtaBandSection: React.FC<CtaBandSectionProps> = ({ title, body, note, actions }) => {
  return (
    <section className="py-14 md:py-22">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary2 px-6 py-12 md:px-14 md:py-16">
          <Image
            src="/landing-pages/google-ads/fielmente-symbol-white.png"
            alt=""
            aria-hidden="true"
            width={390}
            height={820}
            className="pointer-events-none absolute -right-10 -top-10 h-[130%] w-auto opacity-[0.06]"
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-150">
              <h2 className="text-[28px]/[1.15] md:text-[40px]/[1.1] font-bold text-white">{title}</h2>
              <p className="text-base/relaxed text-[#C9C7DD]">{body}</p>
              {note && <p className="text-sm text-[#9A97B8]">{note}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">{actions}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaBandSection;

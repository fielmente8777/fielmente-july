import type { AgencyPageData } from "@/@types/@agencyPageType";
import Breadcrumbs, { BreadcrumbItem } from "@/components/banners/Breadcrumbs";
import WhatsAppChatButton from "@/components/buttons/WhatsAppChatButton";
import LeadForm from "@/components/forms/LeadForm";
import Container from "@/components/sectionComponants/Container";
import Eyebrow from "@/components/typography/Eyebrow";
import Image from "next/image";
import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import RichText from "./RichText";

interface AgencyHeroProps {
  data: AgencyPageData;
  crumbs: BreadcrumbItem[];
}

// Dark hero with the H1, three proof points and the lead form (anchor: #plan).
const AgencyHero: React.FC<AgencyHeroProps> = ({ data: d, crumbs }) => {
  return (
    <section className="relative overflow-hidden bg-primary2 pt-24 pb-14 md:pt-32 md:pb-20">
      <Image
        src="/landing-pages/google-ads/fielmente-symbol-white.png"
        alt=""
        aria-hidden="true"
        width={390}
        height={820}
        className="pointer-events-none absolute -left-24 top-10 h-130 w-auto opacity-[0.04]"
      />
      <Container className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
        <div className="flex flex-col gap-5 md:gap-6 lg:pt-4">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>{d.hero.eyebrow}</Eyebrow>
          <h1 className="text-[34px]/[1.08] md:text-[50px]/[1.05] font-bold tracking-tight text-white">{d.hero.h1}</h1>
          <p className="text-base/relaxed md:text-lg/relaxed text-[#C9C7DD] max-w-150">
            <RichText text={d.hero.lede} sources={d.sources} />
          </p>
          <ul className="flex flex-col gap-2.5">
            {d.hero.chips.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-[15px] text-white">
                <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-1 lg:hidden">
            <a href="#plan" className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-orange-primary text-white font-semibold">
              Get a free growth plan <LuArrowRight aria-hidden="true" />
            </a>
            <WhatsAppChatButton />
          </div>
          <div className="hidden lg:flex flex-wrap items-center gap-3 pt-1">
            <WhatsAppChatButton label="Prefer WhatsApp? Chat with us" />
          </div>
        </div>
        <div id="plan" className="scroll-mt-28 rounded-3xl bg-white p-5 md:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
          <LeadForm
            pageKeyword={d.keyword}
            title={d.form.title}
            body={d.form.body}
            defaultCountryCode={d.form.defaultCountryCode}
            needs={d.form.needs}
          />
        </div>
      </Container>
    </section>
  );
};

export default AgencyHero;

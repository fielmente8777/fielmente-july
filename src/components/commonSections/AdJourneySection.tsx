// Infographic: how a paid click becomes a booking, starting from the platform's official logo.
// Four connected steps with what we track at each one. Used on the advertising platform pages.
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { PLATFORMS, type PlatformKey } from "@/utils/platforms";
import { LuArrowRight, LuCalendarCheck, LuMessageCircle, LuMonitorSmartphone } from "react-icons/lu";

interface AdJourneySectionProps {
  platforms: PlatformKey[];
  /** What the business sells: "booking", "order", "reservation". */
  outcome?: string;
}

const AdJourneySection: React.FC<AdJourneySectionProps> = ({ platforms, outcome = "booking" }) => {
  const logos = platforms.slice(0, 3).map((k) => PLATFORMS[k]);
  const names = logos.map((p) => p.name).join(" / ");
  const steps = [
    { title: `Ad on ${names}`, body: "The right offer in front of people already planning.", track: "Impressions, clicks, cost per click" },
    { title: "Landing page", body: "The answer, the price and one clear next step.", track: "Click-to-enquiry rate", Icon: LuMonitorSmartphone },
    { title: "WhatsApp, call or form", body: "Every enquiry answered in minutes and logged in a CRM.", track: "Enquiries, cost per enquiry", Icon: LuMessageCircle },
    { title: `Confirmed ${outcome}`, body: `Matched back to the ad that started it.`, track: `${outcome[0].toUpperCase()}${outcome.slice(1)}s, revenue, return on ad spend`, Icon: LuCalendarCheck },
  ];
  return (
    <section className="bg-primary2 py-14 md:py-20" aria-labelledby="journey-title">
      <Container>
        <SectionHead light eyebrow="How it works" title={<span id="journey-title">From ad click to confirmed {outcome}</span>} />
        <ol className="grid gap-4 md:grid-cols-4 md:gap-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex md:block">
              <div className="flex h-full w-full flex-col gap-3 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  {i === 0 ? (
                    <span className="flex h-12 items-center gap-1.5 rounded-xl bg-white px-2.5">
                      {logos.map((p) => (
                        // eslint-disable-next-line @next/next/no-img-element -- small static logo file
                        <img key={p.logo + p.name} src={p.logo} alt={`${p.name} logo`} width={28} height={28} className={p.wordmark ? "h-6 w-auto" : "h-7 w-7 object-contain"} />
                      ))}
                    </span>
                  ) : (
                    s.Icon && (
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-primary text-white">
                        <s.Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    )
                  )}
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9C9AB5]">Step {i + 1}</span>
                </div>
                <p className="text-lg font-bold text-white">{s.title}</p>
                <p className="text-sm/relaxed text-[#C9C7DD]">{s.body}</p>
                <p className="mt-auto rounded-lg bg-white/[0.06] px-3 py-2 text-[13px] text-white/90">
                  <span className="font-semibold text-orange-primary">We track: </span>
                  {s.track}
                </p>
              </div>
              {i < steps.length - 1 && (
                <LuArrowRight
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-orange-primary p-1 text-white md:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default AdJourneySection;

// Inline "Get a free growth plan" section, used on industry and service pages.
// The form is the shared LeadForm (useConsultationForm hook), like the agency page heroes.
import LeadForm from "@/components/forms/LeadForm";
import Container from "@/components/sectionComponants/Container";
import Eyebrow from "@/components/typography/Eyebrow";
import SectionTitle from "@/components/typography/SectionTitle";
import { LuCircleCheck } from "react-icons/lu";
import { contacts } from "../../../contact";

export default function LeadFormSection({
  pageKeyword,
  title,
  body,
  points,
  needs,
  defaultCountryCode = "+91",
}: {
  /** Sent with the lead so the team knows which page it came from. */
  pageKeyword: string;
  title: string;
  body: string;
  points: string[];
  needs: string[];
  defaultCountryCode?: string;
}) {
  return (
    <section id="plan" className="scroll-mt-28 bg-[#F5F5F9] py-14 md:py-22">
      <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
        <div className="flex flex-col gap-4">
          <Eyebrow>Free growth plan</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
          <p className="text-base/relaxed text-[#55536E]">{body}</p>
          <ul className="mt-1 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px]/relaxed">
                <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#55536E]">
            Prefer to talk? Call{" "}
            <a href={`tel:${contacts.phone_1.replace(/\s/g, "")}`} className="font-semibold text-sapphireBlue">
              {contacts.phone_1}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${contacts.email_1}`} className="font-semibold text-sapphireBlue">
              {contacts.email_1}
            </a>
            .
          </p>
        </div>
        <div className="rounded-3xl bg-white p-5 md:p-7 shadow-[0_30px_80px_-40px_rgba(17,13,60,0.45)]">
          <LeadForm
            pageKeyword={pageKeyword}
            title="Tell us about your property"
            body="We'll review your website, Google presence, ads and OTA listings and reply with a written plan."
            defaultCountryCode={defaultCountryCode}
            needs={needs}
            idPrefix="plan"
          />
        </div>
      </Container>
    </section>
  );
}

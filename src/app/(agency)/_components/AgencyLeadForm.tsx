"use client";
// Lead form for the agency landing pages. Submits through the site's useConsultationForm hook
// (same endpoint, validation, conversion event and /thank-you/ page as the other forms).
// Page context, property details and ad-click parameters are sent inside the lead's message.
import useConsultationForm from "@/hooks/useConsultationForm";
import { countries } from "@/utils/countryCode";
import { useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";

const TRACKING_PARAMS = ["gclid", "gbraid", "wbraid", "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

const PROPERTY_TYPES = [
  "Hotel",
  "Resort",
  "Boutique hotel",
  "Luxury hotel or resort",
  "Serviced apartments",
  "Villa or homestay",
  "Restaurant, café or bar",
  "Hotel group (several properties)",
  "Travel company",
  "Opening soon",
];

const input =
  "w-full h-12 rounded-lg border border-[#CFCDDC] bg-white px-3.5 text-[15px] text-primary2 outline-none focus:border-sapphireBlue focus:ring-2 focus:ring-sapphireBlue/30";
const label = "flex flex-col gap-1.5 text-[13px] font-medium text-primary2";
const err = "text-xs text-glaucous-3";

export default function AgencyLeadForm({
  pageKeyword,
  title,
  body,
  defaultCountryCode,
  needs,
  idPrefix = "lead",
}: {
  pageKeyword: string;
  title: string;
  body: string;
  defaultCountryCode: string;
  needs: string[];
  idPrefix?: string;
}) {
  const { formData, isSubmitting, handleSubmit, handleChange, errors, setFieldValue } = useConsultationForm({
    includeMessage: true,
    onSubmitSuccess: () => {
      setExtra({ property: "", type: PROPERTY_TYPES[0], location: "", need: needs[0] ?? "", website: "" });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "lead_form_submit", form: "agency_landing", page: pageKeyword });
    },
  });

  const [extra, setExtra] = useState({ property: "", type: PROPERTY_TYPES[0], location: "", need: needs[0] ?? "", website: "" });
  const [tracking, setTracking] = useState<string[]>([]);
  // Several countries share a dial code (+1 is Canada and the USA), so the select tracks the
  // country as well as the code. Default to the main market for each code.
  const PREFERRED: Record<string, string> = { "+1": "USA", "+44": "GBR", "+971": "ARE", "+91": "IND" };
  const [country, setCountry] = useState(`${PREFERRED[defaultCountryCode] ?? ""}|${defaultCountryCode}`);

  // Default the phone country code for this market, and read ad-click parameters once.
  useEffect(() => {
    setFieldValue("countryCode", defaultCountryCode);
    const params = new URLSearchParams(window.location.search);
    setTracking(TRACKING_PARAMS.filter((k) => params.get(k)).map((k) => `${k}: ${params.get(k)}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the hook's message in sync with the extra fields so handleSubmit sends them.
  useEffect(() => {
    setFieldValue(
      "message",
      [
        `Landing page: ${pageKeyword}`,
        `Property: ${extra.property.trim() || "-"}`,
        `Type: ${extra.type}`,
        `City / country: ${extra.location.trim() || "-"}`,
        `Needs help with: ${extra.need || "-"}`,
        `Website: ${extra.website.trim() || "-"}`,
        ...tracking,
      ].join("\n")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extra, tracking]);

  const onExtra = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setExtra((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "");
    if (v.length <= 15) setFieldValue("phone", v);
  };

  const id = (s: string) => `${idPrefix}-${s}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[22px]/[1.2] md:text-2xl/[1.2] font-bold text-primary2">
          {title}
          <span className="text-orange-primary">.</span>
        </h2>
        <p className="text-sm/[1.55] text-[#55536E]">{body}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3.5">
        <div className={label}>
          <label htmlFor={id("name")}>Your name</label>
          <input id={id("name")} className={input} type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <span className={err}>{errors.name}</span>}
        </div>
        <div className={label}>
          <label htmlFor={id("email")}>Work email</label>
          <input id={id("email")} className={input} type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <span className={err}>{errors.email}</span>}
        </div>
      </div>

      <div className={label}>
        <label htmlFor={id("phone")}>Phone / WhatsApp</label>
        <div className="flex gap-2">
          <select
            aria-label="Country code"
            name="countryCode"
            value={countries.some((c) => `${c.name}|${c.code}` === country) ? country : `${countries.find((c) => c.code === formData.countryCode)?.name}|${formData.countryCode}`}
            onChange={(e) => {
              setCountry(e.target.value);
              setFieldValue("countryCode", e.target.value.split("|")[1]);
            }}
            className={`${input} w-28! shrink-0`}
          >
            {countries.map((c, i) => (
              <option key={i} value={`${c.name}|${c.code}`}>
                {c.name} {c.code}
              </option>
            ))}
          </select>
          <input
            id={id("phone")}
            className={input}
            type="tel"
            name="phone"
            autoComplete="tel-national"
            inputMode="numeric"
            value={formData.phone}
            onChange={onPhone}
            required
          />
        </div>
        {errors.phone && <span className={err}>{errors.phone}</span>}
      </div>

      <div className="grid sm:grid-cols-2 gap-3.5">
        <div className={label}>
          <label htmlFor={id("property")}>Property or company</label>
          <input id={id("property")} className={input} type="text" name="property" value={extra.property} onChange={onExtra} />
        </div>
        <div className={label}>
          <label htmlFor={id("type")}>Type</label>
          <select id={id("type")} className={input} name="type" value={extra.type} onChange={onExtra}>
            {PROPERTY_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3.5">
        <div className={label}>
          <label htmlFor={id("location")}>City and country</label>
          <input id={id("location")} className={input} type="text" name="location" value={extra.location} onChange={onExtra} />
        </div>
        <div className={label}>
          <label htmlFor={id("need")}>What do you need help with?</label>
          <select id={id("need")} className={input} name="need" value={extra.need} onChange={onExtra}>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={label}>
        <label htmlFor={id("website")}>Website (optional)</label>
        <input id={id("website")} className={input} type="url" name="website" inputMode="url" placeholder="https://" value={extra.website} onChange={onExtra} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex items-center justify-center gap-2 min-h-12 rounded-full bg-orange-primary px-6 font-semibold text-white hover:bg-glaucous-3 disabled:opacity-60 transition-colors cursor-pointer"
      >
        {isSubmitting ? "Sending…" : "Get my free growth plan"} <LuArrowRight aria-hidden="true" />
      </button>
      <p className="text-xs text-[#6B6886]">Free and no obligation.</p>
    </form>
  );
}

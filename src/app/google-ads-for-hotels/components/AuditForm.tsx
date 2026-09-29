"use client";

import useConsultationForm from "@/hooks/useConsultationForm";
import { countries } from "@/utils/countryCode";
import { useEffect, useState } from "react";
import { contacts } from "../../../../contact";
import { budgetOptions } from "./pageData";

// Submits through the same useConsultationForm hook as the site's other working forms
// (same Eazotel endpoint, validation, OpenAI lead event and /thank-you/ page).
// The audit-specific fields are sent inside the lead's message.

// Click IDs and UTM tags from the ad click are saved with the lead,
// so every enquiry can be traced back to its campaign.
const TRACKING_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const inputClass =
  "w-full h-12 rounded-lg border border-[#CFCDDC] bg-white px-3.5 text-base text-primary2 outline-none focus:border-sapphireBlue focus:ring-2 focus:ring-sapphireBlue/30";
const labelClass = "flex flex-col gap-1.5 text-[13px] font-medium text-primary2";
const errorClass = "text-xs text-glaucous-3";

export default function AuditForm() {
  const { formData, isSubmitting, handleSubmit, handleChange, errors, setFieldValue } =
    useConsultationForm({
      includeMessage: true,
      onSubmitSuccess: () => {
        setExtra({ property: "", city: "", budget: budgetOptions[0], website: "" });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "lead_form_submit", form: "google_ads_audit" });
      },
    });

  const [extra, setExtra] = useState({
    property: "",
    city: "",
    budget: budgetOptions[0],
    website: "",
  });
  const [tracking, setTracking] = useState<string[]>([]);

  // Read ad click details once, on the client.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTracking(
      TRACKING_PARAMS.filter((k) => params.get(k)).map((k) => `${k}: ${params.get(k)}`)
    );
  }, []);

  // Keep the hook's message in sync with the audit fields, so handleSubmit sends them.
  useEffect(() => {
    const message = [
      "Free Google Ads audit",
      `Property: ${extra.property.trim() || "-"}`,
      `City / destination: ${extra.city.trim() || "-"}`,
      `Monthly Google Ads budget: ${extra.budget || "-"}`,
      `Website: ${extra.website.trim() || "-"}`,
      ...tracking,
    ].join("\n");
    setFieldValue("message", message);
    // setFieldValue is recreated each render by the hook; syncing on field changes is enough.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extra, tracking]);

  const onExtraChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExtra((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Digits only, max 15 — same idea as the site's other forms.
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 15) setFieldValue("phone", value);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4.5">
      <div className="flex flex-col gap-2">
        <h2 className="text-[26px]/[1.2] md:text-[28px]/[1.2] font-bold text-primary2">
          Get a free Google Ads audit<span className="text-orange-primary">.</span>
        </h2>
        <p className="text-sm/[1.55] text-[#55536E]">
          We&apos;ll review your account, landing page and tracking, and send back a target cost per
          enquiry for your property — within 3 working days.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className={labelClass}>
          <label htmlFor="audit-name">Your name</label>
          <input
            id="audit-name"
            className={inputClass}
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className={errorClass}>{errors.name}</span>}
        </div>
        <div className={labelClass}>
          <label htmlFor="audit-email">Email</label>
          <input
            id="audit-email"
            className={inputClass}
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className={errorClass}>{errors.email}</span>}
        </div>
      </div>

      <div className={labelClass}>
        <label htmlFor="audit-phone">Phone / WhatsApp</label>
        <div className="flex gap-2">
          <select
            aria-label="Country code"
            name="countryCode"
            value={formData.countryCode}
            onChange={(e) => setFieldValue("countryCode", e.target.value)}
            className={`${inputClass} w-28! shrink-0`}
          >
            {countries.map((c, i) => (
              <option key={i} value={c.code}>
                {c.name} {c.code}
              </option>
            ))}
          </select>
          <input
            id="audit-phone"
            className={inputClass}
            type="tel"
            name="phone"
            autoComplete="tel-national"
            inputMode="numeric"
            placeholder="10-digit number"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        {errors.phone && <span className={errorClass}>{errors.phone}</span>}
      </div>

      <div className={labelClass}>
        <label htmlFor="audit-property">Property name</label>
        <input
          id="audit-property"
          className={inputClass}
          type="text"
          name="property"
          value={extra.property}
          onChange={onExtraChange}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className={labelClass}>
          <label htmlFor="audit-city">City / destination</label>
          <input
            id="audit-city"
            className={inputClass}
            type="text"
            name="city"
            value={extra.city}
            onChange={onExtraChange}
          />
        </div>
        <div className={labelClass}>
          <label htmlFor="audit-budget">Monthly Google Ads budget</label>
          <select
            id="audit-budget"
            className={inputClass}
            name="budget"
            value={extra.budget}
            onChange={onExtraChange}
          >
            {budgetOptions.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={labelClass}>
        <label htmlFor="audit-website">Website</label>
        <input
          id="audit-website"
          className={inputClass}
          type="url"
          name="website"
          placeholder="https://"
          value={extra.website}
          onChange={onExtraChange}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-14 rounded-[10px] bg-orange-primary text-white text-[17px] font-semibold transition-colors hover:bg-glaucous-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Get my free audit"}
      </button>

      <p className="text-center text-[13px] text-[#55536E]">
        Prefer to talk?{" "}
        <a
          href={contacts.WhatsAppCta}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sapphireBlue"
        >
          WhatsApp us
        </a>{" "}
        or{" "}
        <a href={`tel:${contacts.phone_1.replace(/\s/g, "")}`} className="font-semibold text-sapphireBlue">
          call {contacts.phone_1}
        </a>
      </p>
    </form>
  );
}

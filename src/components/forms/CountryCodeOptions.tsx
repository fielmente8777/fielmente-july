"use client";

import { countries } from "@/utils/countryCode";
import { useEffect, useRef, useState } from "react";

interface Props {
  /** The currently selected value. */
  value: string;
  /** "code" → value "+91", label "+91". "name|code" → value "IND|+91", label "IND +91". */
  format?: "code" | "name|code";
  /** Option text: the code alone ("+91") or with the country ("IND +91"). Defaults to match `format`. */
  label?: "code" | "name code";
  optionClassName?: string;
}

/**
 * Options for a country-code <select>. The page's HTML only carries the selected option; the full
 * list of ~195 countries is added in the browser straight after load. Two forms on the home page
 * each used to add ~12 kB of <option> tags to the HTML.
 */
export default function CountryCodeOptions({ value, format = "code", label, optionClassName }: Props) {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => setShowAll(true), []);

  const toValue = (c: { name: string; code: string }) => (format === "code" ? c.code : `${c.name}|${c.code}`);
  const withName = label ? label === "name code" : format !== "code";
  const toLabel = (c: { name: string; code: string }) => (withName ? `${c.name} ${c.code}` : c.code);

  // When the full list replaces the single option, the browser selects the first country (+93).
  // Put the select back on the chosen value; React does not re-apply it when only the options change.
  const selectedRef = useRef<HTMLOptionElement>(null);
  useEffect(() => {
    const select = selectedRef.current?.parentElement;
    if (select instanceof HTMLSelectElement && select.value !== value) select.value = value;
  }, [showAll, value]);

  const list = showAll ? countries : countries.filter((c) => toValue(c) === value).slice(0, 1);
  if (!list.length) return <option value={value}>{value.split("|").pop()}</option>;

  return (
    <>
      {list.map((c, i) => (
        <option
          key={`${c.name}-${i}`}
          ref={toValue(c) === value ? selectedRef : undefined}
          value={toValue(c)}
          className={optionClassName}
        >
          {toLabel(c)}
        </option>
      ))}
    </>
  );
}

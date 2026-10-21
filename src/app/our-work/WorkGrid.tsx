"use client";

import { useMemo, useState } from "react";
import DeviceMockup from "./DeviceMockup";
import { INDUSTRIES, SiteItem, SiteType } from "./sites";

const TYPES: ("All" | SiteType)[] = ["All", "Website", "Landing page"];
const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

/** Filterable grid of every website and landing page. All cards are in the page's HTML; filters only hide them. */
export default function WorkGrid({ items }: { items: SiteItem[] }) {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [industry, setIndustry] = useState<string>("All");

  const count = (t: (typeof TYPES)[number]) => (t === "All" ? items.length : items.filter((i) => i.type === t).length);
  const visible = useMemo(
    () => new Set(items.filter((i) => (type === "All" || i.type === type) && (industry === "All" || i.industry === industry)).map((i) => i.slug)),
    [items, type, industry]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Show" className="flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={type === t}
              onClick={() => setType(t)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                type === t ? "border-color4 bg-color4 text-white" : "border-main-border bg-white text-primary hover:border-color4"
              }`}
            >
              {t === "All" ? "All work" : `${t}s`} <span className="opacity-70">({count(t)})</span>
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-secondary">
          Industry
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="rounded-lg border border-main-border bg-white px-3 py-2 text-primary focus:border-color4 focus:outline-none"
          >
            <option value="All">All industries</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-sm text-secondary" aria-live="polite">
        Showing {visible.size} of {items.length} projects
      </p>

      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.slug} hidden={!visible.has(item.slug)}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener"
              className="group flex h-full flex-col gap-4 rounded-2xl p-2 transition-colors hover:bg-[#F5F7FB] focus-visible:outline-2 focus-visible:outline-color4"
            >
              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <DeviceMockup slug={item.slug} name={item.name} url={item.url} mobile={item.mobile} priority={i < 3} />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 px-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span
                    className={`rounded-full px-2.5 py-1 ${
                      item.type === "Website" ? "bg-[#E9F0FE] text-color4" : "bg-[#FFF0EA] text-orange-primary"
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="rounded-full bg-[#F3F4F6] px-2.5 py-1 text-secondary">{item.industry}</span>
                </div>
                {/* Plain text, not a heading: 88 card headings would swamp the page outline. */}
                <p className="text-lg font-semibold text-primary">{item.name}</p>
                {item.location && <p className="text-sm text-secondary">{item.location}</p>}
                <p className="mt-auto flex items-center justify-between gap-2 pt-1 text-sm font-medium text-color4">
                  <span className="truncate">Visit {hostOf(item.url)}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components";
import { INDUSTRIES, PortfolioItem, PortfolioType } from "./data";

const TYPES: ("All" | PortfolioType)[] = ["All", "Website", "Landing page"];

const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

/** Filterable grid of every website and landing page. All cards are in the page's HTML; filters only hide them. */
export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [industry, setIndustry] = useState<string>("All");

  const count = (t: (typeof TYPES)[number]) => (t === "All" ? items.length : items.filter((i) => i.type === t).length);
  const shown = useMemo(
    () => items.filter((i) => (type === "All" || i.type === type) && (industry === "All" || i.industry === industry)),
    [items, type, industry]
  );

  return (
    <section className="py-12 md:py-18">
      <Container className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label="Type of project" className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={type === t}
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
          Showing {shown.length} of {items.length} projects
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const visible = shown.includes(item);
            return (
              <li key={item.slug} hidden={!visible}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-main-border bg-white transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-color4"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-main-border bg-[#F3F4F6]">
                    <Image
                      src={item.img}
                      alt={`${item.name} ${item.type.toLowerCase()} home page`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
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
                    {/* Plain text, not a heading: 100+ card headings would swamp the page outline. */}
                    <p className="text-lg font-semibold text-primary">{item.name}</p>
                    {item.location && <p className="text-sm text-secondary">{item.location}</p>}
                    <p className="mt-auto flex items-center justify-between gap-2 pt-2 text-sm font-medium text-color4">
                      <span className="truncate">{hostOf(item.url)}</span>
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

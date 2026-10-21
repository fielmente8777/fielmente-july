import Link from "next/link";
import { ADS_TOTALS, AdsResult } from "./ads";

const fmt = (n: number) => n.toLocaleString("en-IN");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthLabel = (m: string) => {
  const [y, mo] = m.split("-").map(Number);
  return `${MONTHS[mo - 1]} ${String(y).slice(-2)}`;
};

/** Monthly tracked enquiries as small bars (plain divs, so there are no SVG <title> elements in the page). */
function MonthlyBars({ data }: { data: NonNullable<AdsResult["monthly"]> }) {
  const max = Math.max(...data.map((d) => d.enquiries));
  const first = monthLabel(data[0].month);
  const last = monthLabel(data[data.length - 1].month);
  return (
    <figure className="space-y-2">
      <p className="text-sm font-medium text-secondary">Enquiries per month, from the ad account</p>
      <div
        role="img"
        aria-label={`Monthly Google Ads enquiries from ${first} to ${last}, peaking at ${fmt(max)} a month`}
        className="flex h-24 items-end gap-[3px] border-b border-main-border"
      >
        {data.map((d) => (
          <div
            key={d.month}
            title={`${monthLabel(d.month)}: ${fmt(d.enquiries)} enquiries`}
            className={`flex-1 rounded-t-[3px] ${d.compared ? "bg-color4" : "bg-[#C9D1E0]"}`}
            style={{ height: `${Math.max(2, (d.enquiries / max) * 100)}%` }}
          />
        ))}
      </div>
      <figcaption className="flex justify-between text-[11px] text-secondary">
        <span>{first}</span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-color4" /> Period compared
        </span>
        <span>{last}</span>
      </figcaption>
    </figure>
  );
}

/** One card per Google Ads client: the before/after numbers, a monthly chart where we have it, and the case study link. */
export default function AdsResults({ results }: { results: AdsResult[] }) {
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {results.map((r, idx) => {
        return (
          <li
            key={r.slug}
            className={`flex flex-col gap-5 rounded-3xl border border-main-border bg-white p-6 md:p-8 ${idx === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-primary">{r.client}</h3>
                <p className="text-sm text-secondary">
                  {r.location} · {r.period}
                </p>
              </div>
              <span className="rounded-full bg-[#E9F7EF] px-3 py-1 text-xs font-semibold text-[#14804A]">{r.channel ?? "Google Ads"}</span>
            </div>

            <p className="text-2xl font-semibold leading-snug text-primary2 md:text-3xl">{r.headline}</p>

            <div className={`grid gap-6 ${idx === 0 && r.monthly ? "md:grid-cols-[1.1fr_1fr]" : ""}`}>
              <div className="space-y-4">
                {/* Enquiries per month, before vs after, as two bars on the same scale. */}
                {r.enquiries && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-secondary">Enquiries per month</p>
                  {[
                    { label: "Before", value: r.enquiries[0], cls: "bg-[#C9D1E0]" },
                    { label: "With Fielmente", value: r.enquiries[1], cls: "bg-color4" },
                  ].map((b, _i, bars) => (
                    <div key={b.label} className="flex items-center gap-3">
                      <span className="w-28 shrink-0 text-xs text-secondary">{b.label}</span>
                      <span className="h-3 rounded-full" style={{ width: `${Math.max(2, (b.value / bars[1].value) * 100)}%` }}>
                        <span className={`block h-full rounded-full ${b.cls}`} />
                      </span>
                      <span className="text-sm font-semibold text-primary">{fmt(b.value)}</span>
                    </div>
                  ))}
                </div>
                )}
                <dl className="grid grid-cols-2 gap-3">
                  {r.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-[#F5F7FB] p-4">
                      <dt className="text-xs text-secondary">{m.label}</dt>
                      <dd className="mt-1 text-sm text-primary">
                        <span className="text-secondary line-through decoration-1">{m.before}</span>{" "}
                        <span aria-hidden="true">→</span> <span className="text-lg font-semibold">{m.after}</span>
                        {m.change && <span className="ml-1 text-xs font-semibold text-[#14804A]">{m.change}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
                {r.note && <p className="text-sm text-secondary">{r.note}</p>}
              </div>
              {r.monthly && r.monthly.length > 3 && <MonthlyBars data={r.monthly} />}
            </div>

            {r.caseStudy && (
              <Link
                href={`/case-study/${r.slug}/`}
                className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-color4 hover:underline"
              >
                How we did it: {r.client} case study <span aria-hidden="true">→</span>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Totals across every Google Ads account we manage, with the year-by-year trend. */
export function AdsTotals() {
  return (
    <div className="overflow-hidden rounded-3xl bg-primary2 text-white">
      <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {ADS_TOTALS.stats.map((s) => (
          <div key={s.value} className="bg-primary2 p-6 md:p-8">
            <p className="text-3xl font-bold text-orange-primary md:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-8 border-t border-white/10 p-6 md:p-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <table className="w-full text-left text-xs sm:text-sm">
            <caption className="sr-only">Google Ads results by year across all Fielmente client accounts</caption>
            <thead>
              <tr className="text-white/60">
                <th scope="col" className="pb-3 font-medium">Year</th>
                <th scope="col" className="pb-3 text-right font-medium">Ad spend</th>
                <th scope="col" className="pb-3 text-right font-medium">Enquiries</th>
                <th scope="col" className="pb-3 text-right font-medium">Cost / enquiry</th>
                <th scope="col" className="pb-3 text-right font-medium">Click → enquiry</th>
              </tr>
            </thead>
            <tbody>
              {ADS_TOTALS.years.map((y, i) => (
                <tr key={y.year} className={`border-t border-white/10 ${i === ADS_TOTALS.years.length - 1 ? "font-semibold text-orange-primary" : ""}`}>
                  <th scope="row" className="py-3 font-medium">{y.year}</th>
                  <td className="py-3 text-right">{y.spend}</td>
                  <td className="py-3 text-right">{y.enquiries}</td>
                  <td className="py-3 text-right">{y.cpe}</td>
                  <td className="py-3 text-right">{y.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-primary">What changed</p>
          <p className="text-lg leading-relaxed">
            In 2024, 2 of every 100 clicks became an enquiry. In 2026 it is more than 9, because we rebuilt the landing pages and tracking, not just the ads.
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 px-6 py-4 text-xs text-white/55 md:px-8">
        {ADS_TOTALS.period}. Source: {ADS_TOTALS.source}
      </p>
    </div>
  );
}

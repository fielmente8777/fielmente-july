import Image from "next/image";
import Link from "next/link";
import { EARLIER_BRANDS, PR_COVERAGE, SEO_RESULTS } from "./more";

/** Two SEO results: a ranking timeline and a table of searches with the rank reached. */
export function SeoResults() {
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {SEO_RESULTS.map((r) => (
        <li key={r.client} className="flex flex-col gap-5 rounded-3xl border border-main-border bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-primary">{r.client}</h3>
              <p className="text-sm text-secondary">{r.location}</p>
            </div>
            <span className="rounded-full bg-[#E9F0FE] px-3 py-1 text-xs font-semibold text-color4">SEO</span>
          </div>
          <p className="text-2xl font-semibold leading-snug text-primary2">{r.headline}</p>
          <p className="text-secondary">{r.summary}</p>

          {r.timeline && (
            <ol className="relative space-y-4 border-l-2 border-main-border pl-6">
              {r.timeline.map((t, i) => {
                const last = i === r.timeline!.length - 1;
                return (
                  <li key={t.date} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white ${last ? "bg-orange-primary" : "bg-[#C9D1E0]"}`}
                    />
                    <p className={`text-sm font-semibold ${last ? "text-orange-primary" : "text-primary"}`}>{t.date}</p>
                    <p className="text-sm text-secondary">{t.text}</p>
                  </li>
                );
              })}
            </ol>
          )}

          {r.rankings && (
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{`Google rankings for ${r.client}`}</caption>
              <thead>
                <tr className="text-secondary">
                  <th scope="col" className="pb-2 font-medium">Google search</th>
                  <th scope="col" className="pb-2 text-right font-medium">Rank</th>
                </tr>
              </thead>
              <tbody>
                {r.rankings.map((k) => (
                  <tr key={k.query} className="border-t border-main-border">
                    <td className="py-2.5 text-primary">{k.query}</td>
                    <td className="py-2.5 text-right">
                      <span
                        className={`inline-block min-w-9 rounded-full px-2 py-0.5 text-center text-xs font-bold ${
                          k.rank === 1 ? "bg-orange-primary text-white" : "bg-[#F3F4F6] text-primary"
                        }`}
                      >
                        #{k.rank}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {r.caseStudy && (
            <Link href={r.caseStudy} className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-color4 hover:underline">
              Read the {r.client} case study <span aria-hidden="true">→</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Wedding lead generation on Meta for Wabi Sabi Resort, with the ad and the feed it ran beside. */
export function MetaAdsFeature() {
  return (
    <div className="grid items-center gap-8 rounded-3xl bg-[#F5F7FB] p-6 md:p-10 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-4">
        <span className="inline-block rounded-full bg-[#FFF0EA] px-3 py-1 text-xs font-semibold text-orange-primary">Meta ads · Weddings</span>
        <h3 className="text-2xl font-semibold text-primary md:text-3xl">Wabi Sabi Resort, Igatpuri</h3>
        <p className="text-secondary">
          A destination resort known for weddings and leisure stays. The goal was more qualified wedding enquiries and a stronger brand presence on Instagram.
        </p>
        <dl className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-4">
            <dt className="text-sm font-semibold text-primary">Lead generation</dt>
            <dd className="mt-1 text-sm text-secondary">Meta Lead Ads aimed at couples planning weddings, with reel creatives and short lead forms.</dd>
          </div>
          <div className="rounded-2xl bg-white p-4">
            <dt className="text-sm font-semibold text-primary">Engagement</dt>
            <dd className="mt-1 text-sm text-secondary">Profile-visit and message ads to grow awareness between campaigns.</dd>
          </div>
        </dl>
      </div>
      <div className="flex items-end justify-center gap-4">
        <div className="w-[38%] overflow-hidden rounded-[22px] border-[5px] border-[#16151D] bg-[#16151D] shadow-[0_20px_40px_-18px_rgba(17,13,60,0.55)]">
          <Image
            src="/our-work/meta/wabi-sabi-ad.webp"
            alt="Wabi Sabi Resort sponsored Instagram post for wedding enquiries with a Get quote button"
            width={443}
            height={800}
            sizes="(max-width: 1024px) 36vw, 200px"
            className="h-auto w-full rounded-[17px]"
          />
        </div>
        <div className="w-[56%] overflow-hidden rounded-2xl border border-main-border bg-white shadow-[0_20px_40px_-18px_rgba(17,13,60,0.35)]">
          <Image
            src="/our-work/meta/wabi-sabi-feed.webp"
            alt="Two Wabi Sabi Resort wedding reel ads in the Instagram feed"
            width={640}
            height={611}
            sizes="(max-width: 1024px) 52vw, 300px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}

/** Press coverage we secured for one client. */
export function PrCoverage() {
  return (
    <div className="space-y-6">
      <p className="text-secondary">
        <span className="font-semibold text-primary">{PR_COVERAGE.client}</span>, {PR_COVERAGE.location}: a campsite on Adoshi Lake, two hours from Mumbai and
        Pune. Our PR campaign placed it in national travel, hospitality and business media.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PR_COVERAGE.outlets.map((o) => (
          <li key={o.name} className="rounded-2xl border border-main-border bg-white p-5">
            <p className="font-semibold text-primary">{o.name}</p>
            <p className="mt-1 text-sm text-secondary">{o.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Brands from earlier years that don't have a hosted site in the grid above. */
export function EarlierBrands() {
  return (
    <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
      {EARLIER_BRANDS.map((b) => (
        <li key={b.name} className="border-t border-main-border pt-4">
          <p className="font-semibold text-primary">
            {b.name}
            {b.place && <span className="font-normal text-secondary"> · {b.place}</span>}
          </p>
          <p className="mt-1 text-sm text-secondary">{b.work}</p>
        </li>
      ))}
    </ul>
  );
}

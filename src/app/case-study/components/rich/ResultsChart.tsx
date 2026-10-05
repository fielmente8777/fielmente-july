import type { MonthPoint } from "../../data/caseStudies";

// Monthly enquiries (bars, left axis) and cost per enquiry (line, right axis).
// Pure SVG, rendered on the server — no chart library needed.

const W = 1000;
const H = 380;
const PAD = { top: 24, right: 72, bottom: 48, left: 64 };

const VIOLET = "#110D3C";
const ORANGE = "#F26633";
const GRID = "#ECEBF3";
const MUTED = "#6B6886";

function niceMax(v: number) {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return step * pow;
}

function label(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
  return `${mon} ’${String(y).slice(2)}`;
}

const fmt = (n: number) => n.toLocaleString("en-IN");

export default function ResultsChart({ data, title }: { data: MonthPoint[]; title: string }) {
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const maxEnq = niceMax(Math.max(...data.map((d) => d[1])));
  // Cap the cost axis so one launch-month outlier doesn't flatten the line.
  const cpls = data.map((d) => d[2]).filter((v): v is number => v !== null).sort((a, b) => a - b);
  const p90 = cpls[Math.floor(cpls.length * 0.9)] ?? cpls[cpls.length - 1] ?? 1;
  const maxCpl = niceMax(p90 * 1.1);

  const slot = innerW / data.length;
  const barW = Math.min(28, slot * 0.62);
  const x = (i: number) => PAD.left + slot * i + slot / 2;
  const yEnq = (v: number) => PAD.top + innerH - (v / maxEnq) * innerH;
  const yCpl = (v: number) => PAD.top + innerH - (Math.min(v, maxCpl) / maxCpl) * innerH;

  const ticks = [0, 0.25, 0.5, 0.75, 1];
  const every = data.length > 24 ? 4 : data.length > 14 ? 3 : 2;

  // Line segments break where a month has too few enquiries to price reliably.
  const segments: string[] = [];
  let current: string[] = [];
  data.forEach((d, i) => {
    if (d[2] === null) {
      if (current.length > 1) segments.push(current.join(" "));
      current = [];
    } else {
      current.push(`${current.length ? "L" : "M"}${x(i).toFixed(1)},${yCpl(d[2]).toFixed(1)}`);
    }
  });
  if (current.length > 1) segments.push(current.join(" "));

  const totalEnq = data.reduce((s, d) => s + d[1], 0);

  return (
    <figure className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#55536E]">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-primary2" aria-hidden="true" />
          Enquiries per month
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-0.5 w-5 rounded bg-orange-primary" aria-hidden="true" />
          Cost per enquiry (₹)
        </span>
      </div>
      <p className="md:hidden text-xs text-[#6B6886]">Swipe sideways to see every month →</p>
      <div className="overflow-x-auto -mx-1 px-1">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`${title}: ${fmt(totalEnq)} tracked enquiries across ${data.length} months, from ${label(data[0][0])} to ${label(data[data.length - 1][0])}.`}
          className="w-full min-w-160 h-auto"
        >
          {ticks.map((t) => {
            const yy = PAD.top + innerH - t * innerH;
            return (
              <g key={t}>
                <line x1={PAD.left} x2={W - PAD.right} y1={yy} y2={yy} stroke={GRID} strokeWidth={1} />
                <text x={PAD.left - 10} y={yy + 4} textAnchor="end" fontSize={13} fill={MUTED}>
                  {fmt(Math.round(maxEnq * t))}
                </text>
                <text x={W - PAD.right + 10} y={yy + 4} textAnchor="start" fontSize={13} fill={ORANGE}>
                  ₹{fmt(Math.round(maxCpl * t))}
                </text>
              </g>
            );
          })}

          {data.map((d, i) => (
            <rect
              key={d[0]}
              x={x(i) - barW / 2}
              y={yEnq(d[1])}
              width={barW}
              height={Math.max(0, PAD.top + innerH - yEnq(d[1]))}
              rx={3}
              fill={VIOLET}
            >
              <title>{`${label(d[0])}: ${fmt(d[1])} enquiries${d[2] !== null ? `, ₹${fmt(d[2])} each` : ""}`}</title>
            </rect>
          ))}

          {segments.map((path, i) => (
            <path key={i} d={path} fill="none" stroke={ORANGE} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
          ))}
          {data.map((d, i) =>
            d[2] !== null ? (
              <circle key={`c-${d[0]}`} cx={x(i)} cy={yCpl(d[2])} r={4} fill="#fff" stroke={ORANGE} strokeWidth={2.5} />
            ) : null
          )}

          {data.map((d, i) =>
            i % every === 0 || i === data.length - 1 ? (
              <text key={`l-${d[0]}`} x={x(i)} y={H - PAD.bottom + 24} textAnchor="middle" fontSize={13} fill={MUTED}>
                {label(d[0])}
              </text>
            ) : null
          )}
        </svg>
      </div>
      <figcaption className="text-xs text-[#6B6886]">
        Monthly figures from the client&apos;s Google Ads account. Months with fewer than five enquiries have no
        cost-per-enquiry point. Cost axis capped at ₹{fmt(maxCpl)}; hover a bar for exact values.
      </figcaption>
    </figure>
  );
}

// Monthly enquiries as a bar chart, drawn as plain SVG on the server (no chart library, no JS).
// Data: `monthly` on a case study in caseData.tsx, taken from the client's Google Ads account.

export interface MonthlyPoint {
  month: string; // "2025-04"
  enquiries: number;
  /** Cost per enquiry in ₹, when tracked. */
  cpe?: number | null;
}

interface CaseStudyChartProps {
  title: string;
  data: MonthlyPoint[];
  /** Months (YYYY-MM) from which the "after" period starts; bars from here are highlighted. */
  highlightFrom?: string;
  note?: string;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const label = (m: string) => {
  const [y, mm] = m.split("-");
  return `${MONTHS[Number(mm) - 1]} ’${y.slice(2)}`;
};
const fmt = (n: number) => n.toLocaleString("en-IN");

const CaseStudyChart: React.FC<CaseStudyChartProps> = ({ title, data, highlightFrom, note }) => {
  if (!data.length) return null;
  const W = 760;
  const H = 300;
  const pad = { top: 28, right: 12, bottom: 44, left: 44 };
  const innerW = W - pad.left - pad.right;
  const innerH = H - pad.top - pad.bottom;
  const max = Math.max(...data.map((d) => d.enquiries));
  const niceMax = Math.ceil(max / 10 ** Math.floor(Math.log10(max || 1))) * 10 ** Math.floor(Math.log10(max || 1));
  const step = innerW / data.length;
  const barW = Math.max(6, step * 0.62);
  const y = (v: number) => pad.top + innerH - (v / (niceMax || 1)) * innerH;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(niceMax * t));
  const labelEvery = data.length > 12 ? 3 : data.length > 6 ? 2 : 1;
  const peak = data.reduce((a, b) => (b.enquiries > a.enquiries ? b : a), data[0]);

  return (
    <figure className="rounded-2xl border border-[#E4E3EC] bg-white p-4 md:p-6">
      <figcaption className="mb-3">
        <span className="block text-lg font-bold text-primary2">{title}</span>
        <span className="text-sm text-[#55536E]">
          Tracked enquiries per month from Google Ads (calls, WhatsApp chats, forms and booking clicks).
        </span>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${title}. Peak: ${fmt(peak.enquiries)} enquiries in ${label(peak.month)}.`} className="w-full h-auto">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.left} x2={W - pad.right} y1={y(t)} y2={y(t)} stroke="#ECEBF2" />
            <text x={pad.left - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#6B6886">
              {fmt(t)}
            </text>
          </g>
        ))}
        {data.map((d, i) => {
          const x = pad.left + i * step + (step - barW) / 2;
          const after = highlightFrom ? d.month >= highlightFrom : false;
          return (
            <g key={d.month}>
              <rect
                x={x}
                y={y(d.enquiries)}
                width={barW}
                height={Math.max(1, pad.top + innerH - y(d.enquiries))}
                rx={3}
                fill={after ? "#FF7445" : "#C9C7DD"}
              >
                <title>{`${label(d.month)}: ${fmt(d.enquiries)} enquiries${d.cpe ? `, ₹${fmt(d.cpe)} each` : ""}`}</title>
              </rect>
              {i % labelEvery === 0 && (
                <text x={x + barW / 2} y={H - pad.bottom + 18} textAnchor="middle" fontSize="11" fill="#6B6886">
                  {label(d.month)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {highlightFrom && (
        <div className="mt-2 flex flex-wrap gap-4 text-xs text-[#55536E]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#C9C7DD]" /> Before
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-orange-primary" /> With Fielmente&apos;s current setup
          </span>
        </div>
      )}
      {note && <p className="mt-3 text-xs text-[#6B6886]">{note}</p>}
    </figure>
  );
};

export default CaseStudyChart;

// "Before → after" result cards, read from a case study's Results list
// (lines like "• Cost per enquiry: ₹906 → ₹156 (−83%)").

export interface Kpi {
  label: string;
  before: string;
  after: string;
  change?: string;
}

/** Pull before/after figures out of result lines; lines without an arrow are skipped. */
export function kpisFromResults(lines: string[] = []): Kpi[] {
  return lines
    .map((raw) => raw.replace(/<[^>]+>/g, "").replace(/^[•\s]+/, "").trim())
    .map((line) => line.match(/^(.+?):\s*(.+?)\s*→\s*(.+?)(?:\s*\(([^)]+)\))?$/))
    .filter((m): m is RegExpMatchArray => Boolean(m))
    .map((m) => ({ label: m[1], before: m[2], after: m[3], change: m[4] }));
}

const CaseStudyKpis: React.FC<{ kpis: Kpi[] }> = ({ kpis }) => {
  if (kpis.length === 0) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k) => (
        <li key={k.label} className="flex flex-col gap-2 rounded-2xl bg-primary2 p-5 text-white">
          <span className="text-sm text-[#C9C7DD]">{k.label}</span>
          <span className="text-3xl font-bold leading-none text-orange-primary">{k.after}</span>
          <span className="text-sm text-[#C9C7DD]">
            from {k.before}
            {k.change && <span className="ml-1 font-semibold text-white">({k.change})</span>}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CaseStudyKpis;

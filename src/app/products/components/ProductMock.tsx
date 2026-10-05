// Code-built product visuals (no image files) for products without an illustration.
// Sample data only — illustrative, not real guest records.
import { FaWhatsapp, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { LuGlobe, LuMail, LuPhoneIncoming, LuPhoneMissed, LuPhoneOutgoing, LuRefreshCw } from "react-icons/lu";
import type { ProductMockKind } from "../data/products";

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white p-3 md:p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="rounded-2xl border border-[#ECEBF3] bg-[#FAFAFC] overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#ECEBF3] bg-white px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F26633]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F2B203]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7DD2EE]" />
          </div>
          <span className="text-xs font-semibold text-primary2">{title}</span>
          <span className="text-[11px] text-[#8F8CB0]">Eazotel</span>
        </div>
        <div className="p-3 md:p-4">{children}</div>
      </div>
    </div>
  );
}

const pill: Record<string, string> = {
  New: "bg-[#FDE8DF] text-[#A63F17]",
  "In progress": "bg-[#E4F3FA] text-[#1E6A98]",
  Done: "bg-[#E7F5EC] text-[#1C6B3F]",
  Overdue: "bg-[#C74129] text-white",
};

function Requests() {
  const rows = [
    ["204", "Extra towels", "Housekeeping", "4 min", "New"],
    ["311", "AC not cooling", "Maintenance", "12 min", "In progress"],
    ["118", "Late checkout 1 pm", "Front office", "2 min", "Done"],
    ["407", "Room-service menu", "F&B", "21 min", "Overdue"],
    ["215", "Baby cot", "Housekeeping", "7 min", "In progress"],
  ];
  return (
    <Frame title="Guest requests · Today">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[["Open", "9"], ["Avg. response", "6 min"], ["Closed today", "42"]].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white border border-[#ECEBF3] p-2.5">
            <p className="text-[10px] text-[#8F8CB0]">{k}</p>
            <p className="text-base font-bold text-primary2">{v}</p>
          </div>
        ))}
      </div>
      <ul className="flex flex-col gap-2">
        {rows.map(([room, req, dept, t, status]) => (
          <li key={room} className="flex items-center gap-3 rounded-xl bg-white border border-[#ECEBF3] px-3 py-2.5">
            <span className="flex h-8 w-10 shrink-0 items-center justify-center rounded-lg bg-primary2 text-xs font-bold text-white">{room}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-primary2">{req}</p>
              <p className="text-[11px] text-[#8F8CB0]">{dept} · {t}</p>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${pill[status]}`}>{status}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function Calls() {
  const rows = [
    { icon: LuPhoneIncoming, who: "+91 98••• ••210", src: "Google Ads · Search", t: "2:14", st: "Answered", c: "text-[#1C6B3F]" },
    { icon: LuPhoneMissed, who: "+91 97••• ••882", src: "Google Business Profile", t: "—", st: "Missed · WhatsApp sent", c: "text-[#C74129]" },
    { icon: LuPhoneOutgoing, who: "+91 97••• ••882", src: "Call-back", t: "3:40", st: "Returned", c: "text-[#1E6A98]" },
    { icon: LuPhoneIncoming, who: "+91 99••• ••031", src: "Website · Book Now page", t: "4:05", st: "Answered", c: "text-[#1C6B3F]" },
  ];
  return (
    <Frame title="Calls · Last 7 days">
      <div className="mb-3 rounded-xl bg-white border border-[#ECEBF3] p-3">
        <p className="text-[10px] text-[#8F8CB0] mb-2">Calls by source</p>
        {[["Google Ads", 64], ["Google Business Profile", 41], ["Website", 28], ["Instagram", 12]].map(([k, v]) => (
          <div key={k} className="flex items-center gap-2 mb-1.5 last:mb-0">
            <span className="w-32 shrink-0 truncate text-[11px] text-primary2">{k}</span>
            <span className="h-2 rounded-full bg-orange-primary" style={{ width: `${Number(v) * 1.2}%` }} />
            <span className="text-[11px] text-[#8F8CB0]">{v}</span>
          </div>
        ))}
      </div>
      <ul className="flex flex-col gap-2">
        {rows.map((r, i) => (
          <li key={i} className="flex items-center gap-3 rounded-xl bg-white border border-[#ECEBF3] px-3 py-2.5">
            <r.icon className={`h-5 w-5 shrink-0 ${r.c}`} aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-primary2">{r.who}</p>
              <p className="truncate text-[11px] text-[#8F8CB0]">{r.src}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-semibold text-primary2">{r.t}</p>
              <p className={`text-[10px] ${r.c}`}>{r.st}</p>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function Channels() {
  const rows = [
    ["Your website", "₹6,200", "4"],
    ["Booking.com", "₹6,900", "4"],
    ["Agoda", "₹6,900", "4"],
    ["MakeMyTrip", "₹6,850", "4"],
    ["Goibibo", "₹6,850", "4"],
    ["Airbnb", "₹7,100", "4"],
  ];
  return (
    <Frame title="Deluxe Room · Sat 14 Nov">
      <div className="mb-3 flex items-center justify-between rounded-xl bg-primary2 px-3 py-2.5 text-white">
        <span className="text-[12px]">Base rate ₹6,200 · 4 rooms left</span>
        <span className="flex items-center gap-1 text-[11px] text-skyBlue">
          <LuRefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> In sync
        </span>
      </div>
      <table className="w-full text-left text-[12px]">
        <thead>
          <tr className="text-[10px] uppercase tracking-wide text-[#8F8CB0]">
            <th className="px-2 py-1.5 font-semibold">Channel</th>
            <th className="px-2 py-1.5 font-semibold">Rate</th>
            <th className="px-2 py-1.5 font-semibold">Rooms</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([ch, rate, rooms], i) => (
            <tr key={ch} className={`border-t border-[#ECEBF3] ${i === 0 ? "bg-[#FDE8DF]/60" : "bg-white"}`}>
              <td className="px-2 py-2 font-semibold text-primary2">{ch}{i === 0 && <span className="ml-1.5 rounded-full bg-orange-primary px-1.5 py-0.5 text-[9px] text-white">Best rate</span>}</td>
              <td className="px-2 py-2 text-primary2">{rate}</td>
              <td className="px-2 py-2 text-primary2">{rooms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Frame>
  );
}

function Inbox() {
  const threads = [
    { icon: FaWhatsapp, c: "text-[#25D366]", who: "Priya S.", msg: "Is breakfast included for 2 adults + 1 child?", t: "now", unread: true },
    { icon: FaInstagram, c: "text-[#E1306C]", who: "@weekend.wanderer", msg: "Do you have a pool-view room this Friday?", t: "3m", unread: true },
    { icon: LuGlobe, c: "text-[#1E6A98]", who: "Website visitor", msg: "Can we check in at 10 am?", t: "12m", unread: false },
    { icon: FaFacebookMessenger, c: "text-[#0084FF]", who: "Rahul M.", msg: "Wedding enquiry for 120 guests in Feb", t: "25m", unread: false },
    { icon: LuMail, c: "text-[#6F82AF]", who: "corporate@…", msg: "Rate for 6 rooms, 3 nights", t: "1h", unread: false },
  ];
  return (
    <Frame title="Inbox · All channels">
      <ul className="flex flex-col gap-2">
        {threads.map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-white border border-[#ECEBF3] px-3 py-2.5">
            <t.icon className={`mt-0.5 h-5 w-5 shrink-0 ${t.c}`} aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-semibold text-primary2">{t.who}</p>
                <span className="text-[10px] text-[#8F8CB0]">{t.t}</span>
              </div>
              <p className="truncate text-[12px] text-[#55536E]">{t.msg}</p>
            </div>
            {t.unread && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-primary" aria-label="Unread" />}
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-xl border border-dashed border-orange-primary/50 bg-[#FFF8F4] px-3 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-orange-primary">AI suggested reply</p>
        <p className="text-[12px] text-primary2">Yes! Breakfast is included for 2 adults, and children under 6 eat free. Shall I share room options?</p>
      </div>
    </Frame>
  );
}

export default function ProductMock({ kind }: { kind: ProductMockKind }) {
  switch (kind) {
    case "requests":
      return <Requests />;
    case "calls":
      return <Calls />;
    case "channels":
      return <Channels />;
    case "inbox":
      return <Inbox />;
  }
}

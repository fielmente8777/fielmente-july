import { Container } from "@/components";
import { FiArrowUpRight, FiCheckCircle, FiMessageSquare, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { SiGoogleplay } from "react-icons/si";

const PLAY_STORE_URL = "https://play.google.com/store/search?q=eazotel&c=apps&hl=en_IN";

const benefits = [
  { icon: FiMessageSquare, text: "Stay on top of guest enquiries" },
  { icon: FiCheckCircle, text: "Keep track of follow-ups" },
  { icon: FiTrendingUp, text: "Stay connected to hospitality enquiries" },
];

export default function EazotelAppDownload() {
  return (
    <section
      id="download-eazotel-app"
      aria-labelledby="eazotel-app-title"
      className="relative isolate overflow-hidden bg-[#101330] py-16 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 48% 75% at 85% 40%, rgba(64,101,224,.26), transparent 75%), radial-gradient(ellipse 32% 64% at 0% 96%, rgba(242,102,51,.15), transparent 80%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[570px] w-[570px] -translate-y-1/2 rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-14 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-white/10" />

      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAD0BB]">
            <FiSmartphone aria-hidden="true" size={16} />
            Fielmente · Part of Eazotel
          </div>

          <h2 id="eazotel-app-title" className="max-w-2xl text-3xl font-extrabold leading-[1.13] tracking-tight sm:text-4xl md:text-5xl">
            Your guests. Your enquiries. <span className="text-[#FF9B69]">Right in your pocket.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Download the Eazotel app to stay connected with guest and customer enquiries, conversations and follow-ups across your hospitality business—whether you are on-site or on the move.
          </p>

          <ul className="mt-7 grid gap-4 text-sm text-white/90 sm:text-base">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FFA579]">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find the Eazotel app on Google Play, opens in a new tab"
              className="group inline-flex min-h-16 items-center gap-3 rounded-2xl border border-white/35 bg-[#080B1B] px-5 py-3 shadow-[0_16px_36px_-20px_rgba(0,0,0,.9)] transition duration-200 hover:-translate-y-0.5 hover:border-[#FFA579] hover:bg-[#191E3C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <SiGoogleplay className="shrink-0 text-[31px] text-white" aria-hidden="true" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/75">Get it on</span>
                <span className="block text-xl font-semibold tracking-tight text-white">Google Play</span>
              </span>
              <FiArrowUpRight className="ml-2 text-xl text-white/75 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <span className="text-sm text-white/60">Available for Android</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-2 md:py-8">
          <div className="absolute h-72 w-72 rounded-full bg-[#527DFF]/20 blur-[80px]" aria-hidden="true" />
          <div className="relative w-[265px] max-w-full rotate-[3deg] rounded-[40px] border-[8px] border-[#33395E] bg-[#10162B] p-2 shadow-[0_34px_80px_-24px_rgba(0,0,0,.7)] sm:w-[290px]">
            <div className="relative min-h-[475px] overflow-hidden rounded-[30px] bg-[#F8FAFF] text-[#202B4C] sm:min-h-[515px]">
              <div aria-hidden="true" className="absolute left-1/2 top-2 h-[18px] w-24 -translate-x-1/2 rounded-full bg-[#10162B]" />
              <div className="bg-[#1A275A] px-5 pb-9 pt-11 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFB28C]">EAZOTEL</p>
                <p className="mt-2 text-xl font-bold">Hospitality CRM</p>
                <p className="mt-1 text-xs text-white/70">Connected wherever you go</p>
              </div>
              <div className="-mt-5 space-y-3 px-4 pb-8">
                <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_-15px_rgba(20,34,88,.28)]">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF0FF] text-[#345DE7]"><FiMessageSquare size={18} aria-hidden="true" /></span>
                    <div>
                      <p className="text-sm font-bold">Guest and customer enquiries</p>
                      <p className="text-xs text-[#6A7690]">Stay in the conversation</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2" aria-hidden="true">
                    <div className="h-2 w-full rounded-full bg-[#E7EAF3]" />
                    <div className="h-2 w-3/4 rounded-full bg-[#E7EAF3]" />
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_-15px_rgba(20,34,88,.28)]">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF0E7] text-[#E97A3F]"><FiCheckCircle size={18} aria-hidden="true" /></span>
                    <div>
                      <p className="text-sm font-bold">Lead follow-ups</p>
                      <p className="text-xs text-[#6A7690]">Keep every lead in view</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2" aria-hidden="true">
                    <div className="h-2 w-4/5 rounded-full bg-[#E7EAF3]" />
                    <div className="h-2 w-2/3 rounded-full bg-[#E7EAF3]" />
                  </div>
                </div>
                <div className="rounded-2xl border border-[#D9E3FF] bg-[#EEF3FF] p-3">
                  <p className="text-center text-xs font-semibold text-[#3158B1]">Your hospitality workspace, on the go</p>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute -bottom-4 right-0 hidden rounded-full border border-white/20 bg-[#22294C] px-4 py-2 text-xs text-white/80 shadow-lg sm:block">Illustrative app preview</span>
        </div>
      </Container>
    </section>
  );
}

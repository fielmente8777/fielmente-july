import { OTA_PLATFORMS, OTA_PROPERTIES, SERVICE_GROUPS } from "./services";

const SHOWN = 10; // client names shown before "+N more"

function Chips({ names }: { names: string[] }) {
  return (
    <>
      {names.map((n) => (
        <li key={n} className="rounded-full bg-[#F1F0F7] px-2.5 py-1 text-xs text-primary">
          {n}
        </li>
      ))}
    </>
  );
}

/** Every service we offer, with the clients we have delivered it for. */
export function ServicesWork() {
  return (
    <div className="space-y-12">
      {SERVICE_GROUPS.map((g) => (
        <div key={g.title}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-secondary">{g.title}</p>
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {g.services.map((s) => {
              const rest = s.clients.length - SHOWN;
              return (
                <li key={s.id} className="flex flex-col rounded-2xl border border-main-border bg-white p-5">
                  <p className="text-lg font-semibold text-primary">{s.name}</p>
                  <p className="mt-1 text-sm text-secondary">{s.summary}</p>
                  {s.stat && <p className="mt-3 text-sm font-semibold text-primary2">{s.stat}</p>}
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${s.name} clients`}>
                    <Chips names={s.clients.slice(0, SHOWN)} />
                  </ul>
                  {rest > 0 && (
                    <details className="group mt-1.5">
                      <summary className="cursor-pointer list-none text-xs font-semibold text-color4 group-open:hidden">+{rest} more clients</summary>
                      <ul className="flex flex-wrap gap-1.5">
                        <Chips names={s.clients.slice(SHOWN)} />
                      </ul>
                    </details>
                  )}
                  {s.anchor && (
                    <a href={`#${s.anchor}`} className="mt-auto pt-4 text-sm font-semibold text-orange-ink hover:underline">
                      See the work →
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** OTA platforms and the properties our team lists and manages on them. */
export function OtaWork() {
  return (
    <div className="space-y-8">
      <ul className="flex flex-wrap gap-2" aria-label="OTA platforms">
        {OTA_PLATFORMS.map((p) => (
          <li key={p} className="rounded-lg border border-main-border bg-white px-4 py-2 text-sm font-semibold text-primary">
            {p}
          </li>
        ))}
      </ul>
      <div>
        <p className="font-semibold text-primary">{OTA_PROPERTIES.length} properties listed and managed by our OTA team</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          <Chips names={OTA_PROPERTIES} />
        </ul>
      </div>
    </div>
  );
}

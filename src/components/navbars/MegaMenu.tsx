"use client";
// Desktop mega menus for "Industry we serve" and "Our Products". Content comes from menuData.ts (server).
import Link from "next/link";
import { useState } from "react";
import type { MenuGroup, MenuSection } from "./menuData";

function Groups({ groups, pathName }: { groups: MenuGroup[]; pathName: string }) {
  const cols = groups.length >= 4 ? "grid-cols-4" : groups.length === 3 ? "grid-cols-3" : groups.length === 2 ? "grid-cols-2" : "grid-cols-1";
  return (
    <div className={`grid ${cols} gap-x-8 gap-y-6`}>
      {groups.map((g) => (
        <div key={g.title}>
          <p className="mb-2 text-[13px] font-semibold text-[#8A88A3]">{g.title}</p>
          <ul className="flex flex-col">
            {g.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="mega-link" aria-current={pathName === l.href ? "page" : undefined}>
                  {l.context && <span className="sr-only">{l.context} </span>}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Industries on the left; hovering or focusing one shows its service pages on the right. */
export function IndustriesPanel({ sections, pathName }: { sections: MenuSection[]; pathName: string }) {
  const current = sections.findIndex(
    (s) => (s.href && s.href !== "/industries-we-serve/" && pathName.startsWith(s.href)) || s.groups.some((g) => g.links.some((l) => l.href === pathName))
  );
  const [active, setActive] = useState(current >= 0 ? current : 0);

  return (
    <div className="grid grid-cols-[280px_1fr]">
      <ul className="flex flex-col gap-0.5 rounded-l-2xl bg-[#F6F6FA] p-3">
        {sections.map((sec, i) => (
          <li key={sec.label}>
            <Link
              href={sec.href ?? "#"}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-current={pathName === sec.href ? "page" : undefined}
              className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors ${
                i === active ? "bg-white text-primary shadow-[0_1px_3px_rgba(17,13,60,0.12)]" : "text-[#4B4A63] hover:text-primary"
              }`}
            >
              <span>
                {sec.label}
                {i === current && <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-orange-primary align-middle" aria-hidden="true" />}
              </span>
              <span aria-hidden="true" className={`text-lg leading-none ${i === active ? "text-orange-primary" : "text-transparent"}`}>
                ›
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Every industry's links are in the HTML (so search engines can follow them); only the active one is shown. */}
      {sections.map((s, i) => (
        <div key={s.label} hidden={i !== active} className="p-6 pl-8">
          <div className="mb-5 flex items-end justify-between gap-6 border-b border-[#ECEBF2] pb-4">
            <div>
              <p className="text-lg font-bold text-primary">{s.label}</p>
              {s.cardLine && <p className="text-sm text-[#55536E]">{s.cardLine}</p>}
            </div>
            {s.href && (
              <Link href={s.href} className="shrink-0 text-sm font-semibold text-sapphireBlue hover:underline">
                {s.href === "/industries-we-serve/" ? "All industries" : `${s.label} overview`}
              </Link>
            )}
          </div>
          <Groups groups={s.groups} pathName={pathName} />
        </div>
      ))}
    </div>
  );
}

export function ProductsPanel({ groups, pathName }: { groups: MenuGroup[]; pathName: string }) {
  return (
    <div className="p-6">
      <div className="mb-5 flex items-end justify-between gap-6 border-b border-[#ECEBF2] pb-4">
        <div>
          <p className="text-lg font-bold text-primary">Eazotel hotel technology</p>
          <p className="text-sm text-[#55536E]">Software we set up and run alongside your marketing</p>
        </div>
        <Link href="/products/" className="shrink-0 text-sm font-semibold text-sapphireBlue hover:underline">
          All products
        </Link>
      </div>
      <Groups groups={groups} pathName={pathName} />
    </div>
  );
}

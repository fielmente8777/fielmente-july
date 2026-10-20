"use client";

import { useEffect, useState } from "react";

export default function SlidingTitle({ titles = [] }: { titles?: string[] }) {
  // The scrolling strip needs the list twice to loop without a gap. The second copy is added in the
  // browser, so the page's HTML has each title once (repeated text is flagged by SEO checkers).
  const [looped, setLooped] = useState(false);
  useEffect(() => setLooped(true), []);
  const items = looped ? [...titles, ...titles] : titles;

  return (
    <div className={`relative overflow-hidden py-3 max_screen_width bg-[#1D1D1D]`}>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((t, i) => (
            <span
              key={i}
              aria-hidden={i >= titles.length || undefined}
              className="marquee-item text-white font-semibold text-lg"
            >
              <span>{t}</span>
              <span className="separator w-2 aspect-square bg-tertiary"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
// Pauses moving parts of the page while they are off screen: Swiper sliders with autoplay and the CSS
// logo/title strips. Swiper's autoplay runs a requestAnimationFrame loop for as long as it plays, even when
// the slider is far below the fold, and that loop forced the browser to recompute the page's styles every
// frame for the scrolling logo strips too. On the home page this kept a phone's main thread busy almost
// all the time (Lighthouse mobile: 13 s of blocking time). Mounted once in the root layout.
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type SwiperHost = HTMLElement & {
  swiper?: {
    destroyed?: boolean;
    params?: { autoplay?: boolean | { enabled?: boolean } };
    autoplay?: { running: boolean; start: () => void; stop: () => void };
  };
};

const SELECTOR = ".swiper, .logo-marquee, .marquee-wrapper";

export default function OffscreenMotionPause() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const onScreen = new WeakMap<Element, boolean>();
    const stoppedHere = new WeakSet<Element>();

    const apply = (el: Element) => {
      const visible = onScreen.get(el) ?? true;
      if (!el.classList.contains("swiper")) {
        el.classList.toggle("motion-offscreen", !visible);
        return;
      }
      const s = (el as SwiperHost).swiper;
      const ap = s?.autoplay;
      const setting = s?.params?.autoplay;
      const enabled = Boolean(s && !s.destroyed && ap && (typeof setting === "object" ? setting.enabled : setting));
      if (!enabled || !ap) return;
      if (!visible && ap.running) {
        ap.stop();
        stoppedHere.add(el);
      } else if (visible && !ap.running && stoppedHere.has(el)) {
        // Only restart sliders this component stopped (not ones a visitor stopped by swiping).
        stoppedHere.delete(el);
        ap.start();
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          onScreen.set(e.target, e.isIntersecting);
          apply(e.target);
        }
      },
      { rootMargin: "200px 0px" }
    );

    const observed = new Set<Element>();
    const scan = () =>
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (observed.has(el)) return apply(el);
        observed.add(el);
        io.observe(el);
      });
    scan();
    // Sliders start their autoplay after hydration; check again once they exist.
    const timers = [500, 1500, 4000].map((ms) => window.setTimeout(scan, ms));
    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
}

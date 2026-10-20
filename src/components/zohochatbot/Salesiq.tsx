"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $zoho: {
      salesiq?: {
        ready?: () => void;
      };
    };
  }
}

const WIDGET_SRC =
  "https://salesiq.zohopublic.in/widget?wc=siq3e552165893c13042e1d199f6774a60161bf7e2d236cee20afeec12690605bbe60e273bf1bbc69d76802e696c96db5df";

// Load the widget on the visitor's first scroll, tap, click or key press, or after this delay,
// whichever comes first. Waiting keeps the chat script from slowing down the first page load.
const FALLBACK_DELAY_MS = 5000;
const INTERACTIONS = ["scroll", "pointerdown", "keydown", "touchstart"] as const;

/**
 * Zoho SalesIQ chat ("Eazotel Bot"), on every page of the site, including the ad landing pages.
 * It is mounted once in the root layout, so it stays open while visitors move between pages.
 */
const Salesiq = () => {
  useEffect(() => {
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      cleanup();

      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

      if (document.getElementById("zsiqscript")) return;
      const script = document.createElement("script");
      script.id = "zsiqscript";
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    };

    const timer = window.setTimeout(load, FALLBACK_DELAY_MS);
    const cleanup = () => {
      window.clearTimeout(timer);
      INTERACTIONS.forEach((e) => window.removeEventListener(e, load));
    };
    INTERACTIONS.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));

    return cleanup;
  }, []);

  return <link rel="preconnect" href="https://salesiq.zohopublic.in" />;
};

export default Salesiq;

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

// Load the widget 8 seconds after the page opens. Keep this delay: Zoho PageSense (also on the site)
// uses the same window.$zoho object, and loading the chat earlier (e.g. on the first scroll) can race
// it, which left the chat button not opening (Oct 2026).
const LOAD_DELAY_MS = 8000;

/**
 * Zoho SalesIQ chat ("Eazotel Bot"), on every page of the site, including the ad landing pages.
 * It is mounted once in the root layout, so it stays loaded while visitors move between pages.
 */
const Salesiq = () => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

      if (document.getElementById("zsiqscript")) return;
      const script = document.createElement("script");
      script.id = "zsiqscript";
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }, LOAD_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return <link rel="preconnect" href="https://salesiq.zohopublic.in" />;
};

export default Salesiq;

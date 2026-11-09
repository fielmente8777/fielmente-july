"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isLandingPage } from "@/utils/landingPages";

declare global {
  interface Window {
    $zoho: {
      salesiq?: {
        ready?: () => void;
        floatbutton?: { visible: (state: "show" | "hide") => void };
        floatwindow?: { visible: (state: "show" | "hide") => void };
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
 * Zoho SalesIQ chat ("Eazotel Bot") on every page of the website except the ad landing pages
 * (src/utils/landingPages.ts), which keep only the call and WhatsApp buttons.
 * It is mounted once in the root layout, so it stays loaded while visitors move between pages;
 * if a visitor moves on to a landing page, the chat button is hidden there and comes back afterwards.
 */
const Salesiq = () => {
  const pathname = usePathname();
  const landing = isLandingPage(pathname);

  // Load the widget, but only once a website page has been opened.
  useEffect(() => {
    if (landing) return;
    const timer = window.setTimeout(() => {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        // The visitor may have moved on to a landing page while the widget was loading.
        ready: function () {
          if (isLandingPage(window.location.pathname)) window.$zoho.salesiq?.floatbutton?.visible("hide");
        },
      };

      if (document.getElementById("zsiqscript")) return;
      const script = document.createElement("script");
      script.id = "zsiqscript";
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }, LOAD_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [landing]);

  // Already loaded and now on a landing page: hide the chat; show it again on website pages.
  useEffect(() => {
    const siq = window.$zoho?.salesiq;
    if (!siq?.floatbutton) return;
    if (landing) {
      siq.floatwindow?.visible("hide");
      siq.floatbutton.visible("hide");
    } else {
      siq.floatbutton.visible("show");
    }
  }, [landing]);

  return landing ? null : <link rel="preconnect" href="https://salesiq.zohopublic.in" />;
};

export default Salesiq;

"use client";

import { HONEYPOT_FIELD } from "@/lib/leadGuard";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
    __turnstileLoading?: Promise<void>;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (!window.__turnstileLoading) {
    window.__turnstileLoading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Turnstile failed to load"));
      document.head.appendChild(s);
    });
  }
  return window.__turnstileLoading;
}

/**
 * Put inside every website <form>. Adds:
 * - a hidden "company website" field that people never see (bots fill it in and are dropped), and
 * - Cloudflare Turnstile, only when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set. It is invisible for most
 *   visitors and only asks for a click when the visitor looks automated.
 * The values are read by submitLead() and checked again by /api/lead.
 */
export default function FormShield() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!SITE_KEY || !box.current) return;
    const el = box.current;
    const form = el.closest("form");
    let widgetId: string | undefined;
    let cancelled = false;

    // Load Cloudflare's script only once someone starts filling in a form.
    const start = () => {
      loadTurnstile()
        .then(() => {
          if (cancelled || !window.turnstile || widgetId) return;
          widgetId = window.turnstile.render(el, { sitekey: SITE_KEY, appearance: "interaction-only", size: "flexible" });
        })
        .catch(() => {});
    };
    form?.addEventListener("focusin", start, { once: true });
    return () => {
      cancelled = true;
      form?.removeEventListener("focusin", start);
      if (widgetId) window.turnstile?.remove(widgetId);
    };
  }, []);

  return (
    <>
      {/* Off-screen, not display:none (some bots skip hidden fields), and out of the tab order. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Company website
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      {SITE_KEY && <div ref={box} className="empty:hidden" />}
    </>
  );
}

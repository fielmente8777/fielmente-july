"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GTMTracker() {
  const pathname = usePathname();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: pathname,
    });
  }, [pathname]);

  return null;
}
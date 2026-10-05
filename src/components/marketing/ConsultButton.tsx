"use client";
// Opens the site's existing consultation popup (PopupForm in the root layout),
// so leads from industry and service pages go through the same form as the rest of the site.
import { useAppContext } from "@/contextApi/AppContext";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";

export default function ConsultButton({ children = "Get a free consultation" }: { children?: ReactNode }) {
  const { setIsOpenPopupForm } = useAppContext();
  return (
    <button
      type="button"
      onClick={() => setIsOpenPopupForm(true)}
      className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-orange-primary text-white font-semibold hover:bg-glaucous-3 transition-colors cursor-pointer"
    >
      {children} <LuArrowRight aria-hidden="true" />
    </button>
  );
}

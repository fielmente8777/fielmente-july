"use client";
import { useCallback, useContext } from "react";
import { AppContext } from "@/contextApi/AppContext";
import AuditCapture from "@/components/AuditCapture";
export default function PopupForm() {
  const { isOpenPopupForm, setIsOpenPopupForm } = useContext(AppContext);
  const close = useCallback(() => setIsOpenPopupForm(false), [setIsOpenPopupForm]);
  return <AuditCapture externalOpen={isOpenPopupForm} onExternalClose={close} />;
}

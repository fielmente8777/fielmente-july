"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useContext } from "react";
import { usePathname } from "next/navigation";
import { AppContext } from "@/contextApi/AppContext";
import LeadDialog from "@/components/LeadDialog";
import useLeadPrompt from "@/hooks/useLeadPrompt";
import { isLeadThankYouPage } from "@/lib/leadPrompt";

const PopUpForm = dynamic(() => import("../forms/PopUpForm"));

export default function PopupForm() {
  const { isOpenPopupForm, setIsOpenPopupForm } = useContext(AppContext);
  const pathname = usePathname();
  const open = useCallback(() => setIsOpenPopupForm(true), [setIsOpenPopupForm]);
  const close = useCallback(() => setIsOpenPopupForm(false), [setIsOpenPopupForm]);
  useLeadPrompt(open);

  return (
    <LeadDialog open={isOpenPopupForm && !isLeadThankYouPage(pathname)} onClose={close}>
      <div className="grid md:grid-cols-2">
        <div className="relative hidden md:block">
          <Image src="/popup2.jpg" alt="Hospitality Marketing" fill className="object-cover" sizes="384px" />
        </div>
        <PopUpForm />
      </div>
    </LeadDialog>
  );
}

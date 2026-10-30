import { submitLead } from "./submitLead";
import { auditDescription, type AuditSubmission } from "./auditOffer";
export async function submitAudit(data: AuditSubmission): Promise<{ ok: boolean; message?: string }> {
  // Allow contact autofill without tripping the existing three-second bot filter.
  const remaining = 3000 - (Date.now() - data.startedAt);
  if (remaining > 0) await new Promise(resolve => setTimeout(resolve, remaining));
  return submitLead({ ...data, formPurpose: "audit", description: auditDescription(data) });
}

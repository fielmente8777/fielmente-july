import { submitLead } from "./submitLead";
import { auditDescription, type AuditSubmission } from "./auditOffer";
export async function submitAudit(data: AuditSubmission): Promise<{ ok: boolean; message?: string }> {
  return submitLead({ ...data, formPurpose: "audit", description: auditDescription(data) });
}

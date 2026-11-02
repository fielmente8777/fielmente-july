// Page-specific copy for the industry service pages (/industries-we-serve/<industry>/<prefix>-<service>/).
// The template text in services.ts is shared by every industry; on its own it made the service pages of
// different industries 60–85% identical (Oct 2026 audit). Each entry adds an opening written for that
// industry and service, and FAQs a guest-facing business in that industry actually asks.
// No figures or client results here: claims that need proof belong in case studies.
import type { ServiceKey } from "@/@types/@industryTemplateType";

export interface ServiceAngle {
  /** Opening paragraphs shown under the hero (before any template intro). */
  intro: string[];
  /** Industry-specific FAQs, shown before the template's first two. */
  faqs: { q: string; a: string }[];
}

export type AngleSet = Partial<Record<ServiceKey, ServiceAngle>>;

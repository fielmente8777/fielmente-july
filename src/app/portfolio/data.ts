// Every website and landing page Fielmente has built and hosts on Vercel, shown on /portfolio/.
// Screenshots live in public/portfolio/<slug>.webp.

export type PortfolioType = "Website" | "Landing page";

export const INDUSTRIES = ["Hotels & Resorts", "Restaurants & Cafés", "Travel & Experiences", "Other Businesses"] as const;
export type Industry = (typeof INDUSTRIES)[number];

export interface PortfolioItem {
  slug: string;
  name: string;
  url: string;
  type: PortfolioType;
  industry: Industry;
  location?: string;
  img: string;
}

export const PORTFOLIO: PortfolioItem[] = [];

import { Poppins } from "next/font/google";

// Brand heading font: Sofia Pro, with Poppins as the web fallback (per brand guidelines).
// If your root layout already loads Poppins with next/font, reuse that and delete this.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <div className={poppins.variable}>{children}</div>;
}

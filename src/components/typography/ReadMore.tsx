// "Read more" for long copy: the opening line stays visible, the rest folds away. Built on <details>,
// so it works without JavaScript and the full text stays in the page for search engines.
import type { ReactNode } from "react";
import { LuChevronDown } from "react-icons/lu";

interface ReadMoreProps {
  children: ReactNode;
  /** Text colour of the toggle on dark backgrounds. */
  light?: boolean;
  className?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, light = false, className = "" }) => (
  <details className={`group ${className}`}>
    <summary
      className={`inline-flex cursor-pointer list-none items-center gap-1 text-sm font-semibold [&::-webkit-details-marker]:hidden ${
        light ? "text-white/90 hover:text-white" : "text-sapphireBlue hover:underline"
      }`}
    >
      <span className="group-open:hidden">Read more</span>
      <span className="hidden group-open:inline">Show less</span>
      <LuChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
    </summary>
    <div className="mt-3 space-y-3">{children}</div>
  </details>
);

export default ReadMore;

/**
 * Splits copy into its first sentence and the rest, keeping citation markers like [[GL13]] with the
 * sentence they belong to. Returns [text, ""] when there is only one sentence.
 */
export function splitLead(text: string): [string, string] {
  const m = text.match(/^(.+?[.!?](?:["”’)])?(?:\[\[[A-Za-z0-9]+\]\])*)\s+(?=[A-Z0-9"“(])([\s\S]+)$/);
  if (!m) return [text, ""];
  return [m[1], m[2]];
}

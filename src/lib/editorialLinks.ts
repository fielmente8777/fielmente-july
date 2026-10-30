import linkData from "@/data/editorial-links.json";

export type EditorialLink = { href: string; phrases: string[] };
const linksByPage = linkData as Record<string, EditorialLink[]>;
const escapePattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const safeHref = (href: string) => /^\/(?!\/)[a-z0-9\-/]+\/$/.test(href);
const SKIP = new Set(["a", "script", "style", "h1", "h2", "h3", "h4", "h5", "h6", "code", "pre"]);

/** Add reviewed contextual destinations to existing text without changing its wording.
 * Each destination is linked at most once across the supplied page fragments.
 * HTML tags, attributes, headings and existing anchors are preserved.
 */
export function createEditorialLinker(page: string, overrides?: EditorialLink[]) {
  const links = (overrides ?? linksByPage[page] ?? []).filter((link) => safeHref(link.href));
  const used = new Set<string>();
  return (html: string) => {
    if (!links.length) return html;
    for (const match of html.matchAll(/<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1/gi)) {
      const href = match[2].replace(/^https:\/\/fielmente\.com(?=\/)/, "");
      if (links.some((link) => link.href === href)) used.add(href);
    }
    const blocked: string[] = [];
    return html.split(/(<!--[\s\S]*?-->|<[^>]*>)/g).map((part) => {
      if (!part || part.startsWith("<!--")) return part;
      if (part.startsWith("<")) {
        const closing = /^<\s*\//.test(part);
        const tag = part.match(/^<\s*\/?\s*([a-z0-9]+)/i)?.[1]?.toLowerCase();
        if (tag && SKIP.has(tag)) {
          if (closing) { const i = blocked.lastIndexOf(tag); if (i >= 0) blocked.splice(i, 1); }
          else if (!/\/\s*>$/.test(part)) blocked.push(tag);
        }
        return part;
      }
      if (blocked.length) return part;
      // Splitting the text again after each insertion prevents nested anchors.
      let chunks = [part];
      for (const link of links) {
        if (used.has(link.href)) continue;
        for (const phrase of link.phrases) {
          if (!phrase.trim()) continue;
          const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${escapePattern(phrase)})(?=$|[^\\p{L}\\p{N}])`, "iu");
          let inserted = false;
          chunks = chunks.map((chunk) => {
            if (inserted || chunk.startsWith("<a ")) return chunk;
            const match = pattern.exec(chunk);
            if (!match) return chunk;
            const start = match.index + match[1].length;
            const end = start + match[2].length;
            inserted = true;
            return [chunk.slice(0, start), `<a href="${link.href}" class="font-semibold underline underline-offset-4">${chunk.slice(start, end)}</a>`, chunk.slice(end)].join("\u0000");
          }).flatMap((chunk) => chunk.split("\u0000"));
          if (inserted) { used.add(link.href); break; }
        }
      }
      return chunks.join("");
    }).join("");
  };
}

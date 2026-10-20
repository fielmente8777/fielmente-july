// BreadcrumbList structured data for pages that have no other schema (SEO audit, Oct 2026).
// Names must match what the page shows; paths are site-relative with a trailing slash.
const SITE = "https://fielmente.com";

export interface Crumb {
  name: string;
  path: string;
}

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

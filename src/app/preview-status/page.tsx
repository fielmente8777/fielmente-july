// PREVIEW BRANCH ONLY: shows which build-time photos made it into /public.
import fs from "node:fs";
import path from "node:path";
import list from "../../../scripts/preview-images.json";

export const dynamic = "force-static";
export const metadata = { title: "Preview status", robots: { index: false, follow: false } };

export default function PreviewStatus() {
  const rows = (list as { file: string }[]).map((img) => {
    const p = path.join(process.cwd(), "public", img.file);
    const size = fs.existsSync(p) ? fs.statSync(p).size : 0;
    return { file: img.file, size };
  });
  const ok = rows.filter((r) => r.size > 0).length;
  return (
    <main style={{ padding: 40, fontFamily: "monospace" }}>
      <h1>
        Preview photos: {ok}/{rows.length}
      </h1>
      <ul>
        {rows.map((r) => (
          <li key={r.file}>
            {r.size > 0 ? "OK" : "MISSING"} {r.file} {r.size > 0 ? `${Math.round(r.size / 1024)} KB` : ""}
          </li>
        ))}
      </ul>
    </main>
  );
}

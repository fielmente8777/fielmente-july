import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Editorial illustrations, rather than photographs presented as a particular destination.
const covers = [
  ["goa", "Goa", "Direct booking marketing", ["Need dates", "Clear packages", "Booking value"]],
  ["gurgaon", "Gurgaon", "Corporate booking pipeline", ["Business stays", "Account enquiries", "Room nights"]],
  ["delhi", "Delhi", "Local search to booking", ["Property facts", "Useful pages", "Booking routes"]],
  ["uttarakhand", "Uttarakhand", "Short breaks and retreat groups", ["Stay packages", "Retreat spaces", "Clear inclusions"]],
  ["himachal", "Himachal Pradesh", "Seasonal hotel marketing", ["Booking pace", "Stay details", "Seasonal offers"]],
  ["rajasthan", "Rajasthan", "Wedding enquiry marketing", ["Venue facts", "Qualified leads", "Site visits"]],
  ["maharashtra", "Maharashtra", "City stays and weekend breaks", ["Guest intent", "Matching offers", "Net returns"]],
  ["kerala", "Kerala", "Experience-led resort content", ["Real experiences", "Local partners", "Package pages"]],
  ["hyderabad", "Hyderabad", "Meetings and group enquiries", ["Meeting facts", "Group requests", "Sales proposals"]],
];

const output = fileURLToPath(new URL("../public/images/blog/india-guides/", import.meta.url));
await mkdir(output, { recursive: true });
const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const [slug, market, topic, steps] of covers) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#0c1230"/>
    <circle cx="1130" cy="60" r="235" fill="#1b2551"/>
    <circle cx="1190" cy="620" r="260" fill="#151e43"/>
    <path d="M 950 0 L 1200 250" stroke="#384274" stroke-width="2"/>
    <path d="M 1020 0 L 1200 180" stroke="#384274" stroke-width="2"/>
    <g font-family="DejaVu Sans, sans-serif">
      <text x="76" y="88" fill="#ffffff" font-size="28" font-weight="700" letter-spacing="3">FIELMENTE</text>
      <text x="76" y="164" fill="#ff956d" font-size="20" font-weight="600" letter-spacing="2">HOTEL MARKETING GUIDE</text>
      <text x="70" y="274" fill="#ffffff" font-size="78" font-weight="700">${escape(market)}</text>
      <text x="76" y="342" fill="#dae0f5" font-size="35">${escape(topic)}</text>
      ${steps.map((step, index) => `<g transform="translate(${76 + index * 350} 425)"><rect width="332" height="112" rx="18" fill="#202b52" stroke="#39456d"/><text x="22" y="36" fill="#ff956d" font-size="16" font-weight="700">0${index + 1}</text><text x="22" y="77" fill="#ffffff" font-size="24" font-weight="600">${escape(step)}</text></g>`).join("")}
    </g>
  </svg>`;
  await writeFile(`${output}${slug}.webp`, await sharp(Buffer.from(svg)).webp({ quality: 90 }).toBuffer());
}

console.log(`Created ${covers.length} 1200×630 editorial covers.`);

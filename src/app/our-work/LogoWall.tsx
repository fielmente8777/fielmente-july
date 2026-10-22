import Image from "next/image";
import logoThumbs from "@/utils/logoThumbs.json";
import { allClientLogos } from "@/utils/agencyData";

const thumbs = logoThumbs as Record<string, string>;

export const CLIENT_LOGOS = allClientLogos("all");

/** Every client logo, as a grid. */
export default function LogoWall() {
  return (
    <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {CLIENT_LOGOS.map((l) => (
        <li key={l.src} className="logo-tile border border-[#EDECF3]" style={{ background: l.bg ?? "#FFFFFF" }} title={l.name}>
          {thumbs[l.src] ? (
            // eslint-disable-next-line @next/next/no-img-element -- pre-sized static file, no optimiser needed
            <img src={thumbs[l.src]} width={240} height={160} loading="lazy" decoding="async" className="logo-tile-img !px-3" alt={l.name} />
          ) : (
            <Image src={l.src} width={240} height={160} loading="lazy" className="logo-tile-img !px-3" alt={l.name} />
          )}
        </li>
      ))}
    </ul>
  );
}

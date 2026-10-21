import Image from "next/image";
import { SocialBrand } from "./social";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

/** Each brand's Instagram grid shown on a phone, as it appears on a profile page. */
export default function SocialGrids({ brands }: { brands: SocialBrand[] }) {
  return (
    <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {brands.map((b) => (
        <li key={b.slug} className="flex flex-col items-center gap-4">
          <div className="w-full max-w-[300px] rounded-[38px] border-[8px] border-[#16151D] bg-[#16151D] shadow-[0_24px_50px_-20px_rgba(17,13,60,0.55)]">
            <div className="overflow-hidden rounded-[30px] bg-white">
              {/* Profile header */}
              <div className="flex items-center gap-3 px-4 pb-3 pt-5" aria-hidden="true">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] p-[2px]">
                  <span className="grid h-full w-full place-items-center rounded-full bg-white text-xs font-bold text-primary2">
                    {initials(b.name)}
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-primary">{b.name}</span>
                  <span className="block truncate text-xs text-secondary">{b.category}</span>
                </span>
              </div>
              <div className="flex border-y border-[#EFEFEF] text-[11px] font-semibold text-primary" aria-hidden="true">
                <span className="flex-1 border-b-2 border-primary py-1.5 text-center">Posts</span>
                <span className="flex-1 py-1.5 text-center text-secondary">Reels</span>
                <span className="flex-1 py-1.5 text-center text-secondary">Tagged</span>
              </div>
              {/* 3-column grid, 4:5 tiles like Instagram's profile grid */}
              <div className="grid grid-cols-3 gap-[2px]">
                {Array.from({ length: b.posts }, (_, i) => (
                  <div key={i} className="relative aspect-[4/5] bg-[#F3F4F6]">
                    <Image
                      src={`/our-work/social/${b.slug}-${i + 1}.webp`}
                      alt={`${b.name} Instagram post ${i + 1}`}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-primary">{b.name}</p>
            <p className="text-sm text-secondary">{b.category}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

import Image from "next/image";

const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

/**
 * A site shown as a desktop browser window, with the phone view overlapping its lower-right corner.
 * Drawn in CSS so it stays sharp at any size; only the two screenshots are images.
 */
export default function DeviceMockup({
  slug,
  name,
  url,
  mobile,
  priority = false,
}: {
  slug: string;
  name: string;
  url: string;
  mobile?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${mobile ? "pr-[9%] pb-[7%]" : ""}`}>
      <div className="overflow-hidden rounded-xl border border-[#D9DCE3] bg-white shadow-[0_18px_40px_-18px_rgba(17,13,60,0.45)]">
        <div className="flex h-6 items-center gap-1.5 border-b border-[#E3E5E8] bg-[#F3F4F6] px-2.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded bg-white px-2 py-0.5 text-[9px] leading-none text-secondary">
            {hostOf(url)}
          </span>
        </div>
        <div className="relative aspect-[16/10] bg-[#F3F4F6]">
          <Image
            src={`/our-work/sites/${slug}.webp`}
            alt={`${name} website, desktop view`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 380px"
            className="object-cover object-top"
          />
        </div>
      </div>
      {mobile && (
        <div className="absolute bottom-0 right-0 w-[24%] overflow-hidden rounded-[12px] border-[3px] border-[#16151D] bg-[#16151D] shadow-[0_14px_30px_-10px_rgba(17,13,60,0.6)]">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[9px] bg-white">
            <Image
              src={`/our-work/sites/${slug}-m.webp`}
              alt={`${name} website, phone view`}
              fill
              priority={priority}
              sizes="(max-width: 640px) 24vw, 110px"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}
    </div>
  );
}

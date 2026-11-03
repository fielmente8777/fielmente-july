import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface BlogCardProps {
  src: string | StaticImageData | undefined;
  title: string;
  read: string;
  slug: string;
  description: string;
  label?: string;
  /** Large two-column card for the newest post at the top of the listing. */
  featured?: boolean;
  /** Heading level of the title (h2 on the listing, h3 under another h2). */
  as?: "h2" | "h3";
}

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** A blog post card: banner, category, title, summary and reading time. The whole card links to the post. */
export const BlogCard: React.FC<BlogCardProps> = ({ src, title, description, read, slug, label, featured = false, as: Title = "h2" }) => {
  const href = `/${slug}/`;
  if (featured) {
    return (
      <article className="group relative grid items-center gap-6 rounded-3xl border border-[#E6E4EF] bg-white p-3 shadow-[0_20px_60px_-40px_rgba(17,13,60,0.45)] md:grid-cols-12 md:gap-10 md:p-4">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#EEEDF5] md:col-span-7">
          {src && (
            <Image
              src={src}
              alt=""
              fill
              preload
              sizes="(min-width: 1280px) 700px, (min-width: 768px) 58vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          )}
        </div>
        <div className="flex flex-col gap-4 px-2 pb-4 md:col-span-5 md:px-0 md:pb-0 md:pr-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="rounded-full bg-[#FFF1EA] px-3 py-1 text-orange-ink">Latest</span>
            {label && <span className="text-[#5F6776]">{label}</span>}
          </div>
          <Title className="text-2xl font-bold leading-tight text-primary2 md:text-[2rem]">
            <Link href={href} className="after:absolute after:inset-0 group-hover:text-color4">
              {title}
            </Link>
          </Title>
          <p className="line-clamp-3 text-base leading-relaxed text-[#4B5263]">{description}</p>
          <div className="mt-2 flex items-center gap-4 text-sm text-[#5F6776]">
            <span className="flex items-center gap-1.5">
              <ClockIcon />
              {read}
            </span>
            <span className="ml-auto flex items-center gap-2 font-semibold text-color4">
              Read article <ArrowIcon />
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#EEEDF5] ring-1 ring-black/5">
        {src && (
          <Image
            src={src}
            alt=""
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        {label && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-ink">{label}</p>}
        <Title className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-primary2">
          <Link href={href} className="after:absolute after:inset-0 group-hover:text-color4">
            {title}
          </Link>
        </Title>
        <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-[#5F6776]">{description}</p>
        <div className="mt-auto flex items-center gap-4 pt-4 text-sm text-[#5F6776]">
          <span className="flex items-center gap-1.5">
            <ClockIcon />
            {read}
          </span>
          <span className="ml-auto flex items-center gap-1.5 font-semibold text-color4 transition group-hover:gap-2.5">
            Read <ArrowIcon />
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

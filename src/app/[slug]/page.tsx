// import { blogData } from "@/utils/blogdata";
// import Link from "next/link";
// import Image from "next/image";
// import { SectionWithContainer } from "@/components";
// import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
// import { homePageData } from "../(home)/homePageData";
// import ExploreMoreBLogs from "./components/ExploreMoreBLogs";
// import { notFound } from "next/navigation";
// import { Metadata } from "next";

// interface Params {
//   params: {
//     slug: string;
//   };
//   searchParams: {
//     [key: string]: string | string[] | undefined;
//   };
// }

// // get random blogs

// function getRandomBlog(currentSlug: string, count = 3) {
//   return blogData
//     .filter((post) => post.slug !== currentSlug)
//     .sort(() => Math.random() - 0.5)
//     .slice(0, count);
// }

// export async function generateStaticParams() {
//   const blogPosts = await blogData;

//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: Params): Promise<Metadata> {
//   const path = await params;
//   const post = blogData.find((post) => post.slug === path.slug);

//   if (!post) {
//     return {
//       title: "page not found",
//     };
//   }

//    const title =
//     post?.meta?.title ||
//     `${post.title} | Hotel Marketing Blog by Fielmente`;

//   const description =
//     post?.meta?.description ||
//     `${post.title} - Learn how hotels and restaurants grow using SEO, social media, and performance marketing strategies by Fielmente.`;

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: `https://fielmente.com/${post.slug}/`,
//     },
//     openGraph: {
//       title,
//       description,
//       url: `https://fielmente.com/${post.slug}/`,
//       siteName: "Fielmente",
//       locale: "en_IN",
//       type: "article",
//       images: [
//         {
//           url: "/fielmente_logo.png",
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//     robots: {
//       index: true,
//       follow: true,
//       nocache: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         noimageindex: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//   };
// }

// export default async function LandingPage({ params }: Params) {
//   const path = await params;
//   const data = blogData.find((post) => post.slug === path.slug);

//   const randomBLogs = getRandomBlog(path.slug);

//   const randomData = {
//     title: "Explore More Blogs",
//     cta: {
//       title: "View all Blogs",
//       url: "/blogs",
//     },
//     cards: [
//       ...randomBLogs.map((item) => ({
//         src: item.url,
//         title: item.title,
//         read: "5 min read",
//         slug: item.slug,
//         description: item.description?.slice(0, 80) + "...",
//       })),
//     ],
//   };

//   if (!data) {
//     notFound();
//   }

//   return (
//     <main className="mt-24">
//       <SectionWithContainer>
//         <article className="md:max-w-6xl w-full mx-auto md:space-y-8 space-y-3">
//           <div className="flex flex-col gap-2">
//             <p className="text-[#6B7280] flex items-center gap-1">
//               <Link href="/blogs">Blogs</Link>{" "}
//               <span>
//                 <NextIcon />
//               </span>{" "}
//               <span className="text-color4">Blog Details</span>
//             </p>
//             <h1 className="font-semibold text-primary md:text-[2.625rem] text-xl">
//               {data.title}
//             </h1>
//           </div>

//           {/* divider */}
//           <div className="w-full h-px bg-main-border" />

//           <div className="md:space-y-6 space-y-4">
//             <div className="flex items-center gap-4 divide-x divide-main-border">
//               <p className="text-[#6B7280] md:text-lg pr-4">
//                 Date:{" "}
//                 <span className="text-secondary">
//                   {data.date ?? "May 26, 2026"}
//                 </span>
//               </p>
//               <p className="md:text-lg flex items-center gap-1">
//                 <span>
//                   <ClockIcon />
//                 </span>
//                 <span className="text-secondary">5 min read</span>
//               </p>
//             </div>
//             {data.url && (
//               <div className="w-full relative aspect-4/3 md:aspect-[4/1.9] overflow-hidden rounded-2xl">
//                 <Image
//                   src={data.url}
//                   alt={data.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             )}
//           </div>

//           <div
//             className="blog-content"
//             dangerouslySetInnerHTML={{ __html: data.data }}
//           ></div>
//         </article>
//       </SectionWithContainer>
//       <ExploreMoreBLogs {...randomData} />
//       <ContactUsSection {...homePageData.contactUsSection} />
//     </main>
//   );
// }

// export const NextIcon = () => (
//   <svg
//     width={20}
//     height={20}
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M10.7883 10L7.39393 6.60584C7.27865 6.49042 7.21963 6.34535 7.21685 6.17063C7.21421 5.99605 7.27324 5.84834 7.39393 5.7275C7.51477 5.60681 7.66115 5.54646 7.8331 5.54646C8.00504 5.54646 8.15143 5.60681 8.27227 5.7275L12.0175 9.47271C12.0954 9.55077 12.1504 9.63306 12.1825 9.71959C12.2146 9.80612 12.2306 9.89959 12.2306 10C12.2306 10.1004 12.2146 10.1939 12.1825 10.2804C12.1504 10.367 12.0954 10.4492 12.0175 10.5273L8.27227 14.2725C8.15685 14.3878 8.01178 14.4468 7.83706 14.4496C7.66247 14.4522 7.51477 14.3932 7.39393 14.2725C7.27324 14.1517 7.21289 14.0053 7.21289 13.8333C7.21289 13.6614 7.27324 13.515 7.39393 13.3942L10.7883 10Z"
//       fill="#6A7691"
//     />
//   </svg>
// );

// export const ClockIcon = () => (
//   <svg
//     width={24}
//     height={24}
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M12.75 11.6962V7.75C12.75 7.5375 12.6781 7.35933 12.5343 7.2155C12.3904 7.07183 12.2122 7 11.9998 7C11.7871 7 11.609 7.07183 11.4655 7.2155C11.3218 7.35933 11.25 7.5375 11.25 7.75V11.927C11.25 12.0447 11.2718 12.1587 11.3155 12.269C11.359 12.3793 11.4276 12.4813 11.5213 12.575L14.9462 16C15.0846 16.1385 15.2586 16.2093 15.4682 16.2125C15.6779 16.2157 15.8552 16.1448 16 16C16.1448 15.8552 16.2172 15.6795 16.2172 15.473C16.2172 15.2667 16.1448 15.0911 16 14.9462L12.75 11.6962ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z"
//       fill="#9EA3AB"
//     />
//   </svg>
// );

import { Container } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import LandingPgForm from "@/components/forms/LandingPgForm";
import { blogData, retiredBlogData, retiredBlogSlugs } from "@/utils/blogdata";
import { BLOG_TOPICS, blogCategory, excerpt, readMinutes } from "@/utils/blogMeta";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard, { ArrowIcon } from "../blogs/components/BlogCard";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

const SITE = "https://fielmente.com";
const ABOUT = "/about-fielmente-best-hospitality-marketing-agency/";

/** Live posts plus retired ones (stale or off-topic): retired posts still load for old links, with noindex. */
const findPost = (slug: string) => blogData.find((p) => p.slug === slug) ?? retiredBlogData.find((p) => p.slug === slug);

/** Image src as a string, whether the post image is a URL or an imported StaticImageData. */
function imageSrc(img: unknown): string | undefined {
  if (!img) return undefined;
  if (typeof img === "string") return img;
  return (img as { src?: string }).src;
}

/** Absolute URL for an image path. */
function absolute(src?: string) {
  if (!src) return undefined;
  return src.startsWith("http") ? src : `${SITE}${src.startsWith("/") ? "" : "/"}${src}`;
}

/** A post's own date, as ISO (YYYY-MM-DD), when it has a real one. Posts without a date get none. */
function isoDate(date?: string) {
  if (!date) return undefined;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return undefined;
  // Local date parts, not toISOString(): "11 November 2026" parses as local midnight, which is the
  // previous day in UTC when the build machine runs ahead of UTC.
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const ENTITIES: Record<string, string> = { amp: "&", nbsp: " ", quot: '"', "#39": "'", rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”", ndash: "–", mdash: "—" };
const decode = (s: string) => s.replace(/&(#39|[a-z]+);/g, (m, e) => ENTITIES[e] ?? m);

/**
 * Prepares the post HTML: images load lazily, wide tables scroll inside their own box on phones,
 * and every h2 gets an id so the "On this page" list can link to it.
 */
function prepareContent(html: string) {
  const toc: { id: string; text: string }[] = [];
  const used = new Set<string>();
  let out = html
    .replace(/<img\b(?![^>]*\bloading=)/gi, '<img loading="lazy" decoding="async"')
    .replace(/<table\b/gi, '<div class="table-wrap"><table')
    .replace(/<\/table>/gi, "</table></div>");
  out = out.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (whole, attrs: string, inner: string) => {
    const text = decode(inner.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
    if (!text) return whole;
    const existing = /\bid="([^"]+)"/.exec(attrs)?.[1];
    let id = existing || text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
    if (!existing) {
      const base = id;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    }
    used.add(id);
    toc.push({ id, text });
    return existing ? whole : `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

/** Up to `count` posts most related to the current one: same topic first, then shared title words. */
function relatedPosts(current: { slug: string; title: string }, count = 12) {
  const stop = new Set(["the", "a", "an", "for", "and", "of", "to", "in", "on", "how", "your", "with", "what", "why", "is", "are", "can", "hotel", "hotels", "guide", "complete"]);
  const words = (t: string) => new Set(t.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !stop.has(w)));
  const mine = words(current.title);
  const topic = blogCategory(current.slug)?.topic;
  return blogData
    .filter((post) => post.slug !== current.slug)
    .map((post) => ({
      post,
      score: [...words(post.title)].filter((w) => mine.has(w)).length + (topic && blogCategory(post.slug)?.topic === topic ? 1.5 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.post);
}

export async function generateStaticParams() {
  return [...blogData, ...retiredBlogData].map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = await params;

  const post = findPost(path.slug);

  if (!post) {
    return {
      title: "page not found",
    };
  }
  const retired = retiredBlogSlugs.has(post.slug);

  const title = post?.meta?.title || `${post.title} | Hotel Marketing Blog by Fielmente`;

  const description =
    post?.meta?.description ||
    `${post.title} - Learn how hotels and restaurants grow using SEO, social media, and performance marketing strategies by Fielmente.`;

  const image = imageSrc(post.url) || "/fielmente_logo.png";

  return {
    title,
    description,

    alternates: {
      canonical: `https://fielmente.com/${post.slug}/`,
    },

    openGraph: {
      title,
      description,
      url: `https://fielmente.com/${post.slug}/`,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "article",

      ...(isoDate(post.date) ? { publishedTime: isoDate(post.date) } : {}),
      ...(isoDate(post.updated) ? { modifiedTime: isoDate(post.updated) } : {}),
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: !retired,
      follow: true,
      googleBot: {
        index: !retired,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LandingPage({ params }: Params) {
  const path = await params;

  const data = findPost(path.slug);

  if (!data) {
    notFound();
  }

  const tags =
    typeof data.meta?.keywords === "string"
      ? data.meta.keywords.split(",").map((tag: string) => tag.trim())
      : data.meta?.keywords || [];

  const cat = blogCategory(data.slug);
  const topic = BLOG_TOPICS.find((t) => t.slug === cat?.topic);
  const { html, toc } = prepareContent(data.data);
  const minutes = readMinutes(data.data);
  const summary = data.description || data.meta?.description || excerpt(data.data, 200);

  // 12 related posts: six as cards, six as links (every post keeps at least a dozen links in).
  const related = relatedPosts(data);
  const relatedCards = related.slice(0, 6);
  const relatedLinks = related.slice(6, 12);
  // Neighbouring posts in the blog's own order: every post links to the one before and after it, so no
  // post depends on the related-posts box alone for a link (60 posts had only one link in).
  const at = blogData.findIndex((p) => p.slug === data.slug);
  const prevPost = at > 0 ? blogData[at - 1] : undefined;
  const nextPost = at >= 0 && at < blogData.length - 1 ? blogData[at + 1] : undefined;
  const postUrl = `${SITE}/${data.slug}/`;
  const published = isoDate(data.date);
  // Set when a post is substantially rewritten (not for small fixes), so the date says something true.
  const modified = isoDate(data.updated) ?? published;
  const heroImage = absolute(imageSrc(data.url));
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.meta?.description || data.description,
    mainEntityOfPage: postUrl,
    url: postUrl,
    ...(heroImage ? { image: heroImage } : {}),
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    ...(cat ? { articleSection: cat.label } : {}),
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: "Fielmente", url: `${SITE}${ABOUT}` },
    publisher: {
      "@type": "Organization",
      name: "Fielmente",
      url: `${SITE}/`,
      logo: { "@type": "ImageObject", url: `${SITE}/fielmente_logo.png` },
    },
    ...(tags.length ? { keywords: tags.join(", ") } : {}),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs/` },
      { "@type": "ListItem", position: 3, name: data.title, item: postUrl },
    ],
  };

  const card = (post: (typeof blogData)[number]) => ({
    src: imageSrc(post.url),
    title: post.title,
    slug: post.slug,
    description: post.description || post.meta?.description || excerpt(post.data),
    read: `${readMinutes(post.data)} min read`,
    label: blogCategory(post.slug)?.label ?? post.category,
  });

  const tocList = (
    <ol className="space-y-1 text-[15px]">
      {toc.map((h, i) => (
        <li key={h.id}>
          <a href={`#${h.id}`} className="flex gap-3 rounded-lg px-2 py-1.5 text-[#3A4152] hover:bg-[#F5F4FA] hover:text-color4">
            <span className="w-5 shrink-0 text-right font-semibold text-[#9AA0AC]">{i + 1}</span>
            <span>{h.text}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero: dark brand band under the transparent header */}
      <section className="relative overflow-hidden bg-primary2 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(700px_420px_at_92%_-10%,rgba(242,102,51,0.28),transparent_65%),radial-gradient(800px_520px_at_-5%_110%,rgba(13,84,235,0.35),transparent_62%)]"
        />
        <Container className="relative pb-36 pt-32 md:pb-44 md:pt-40">
          <div className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <Link href="/blogs/" className="hover:text-white">Blog</Link>
              {topic && (
                <>
                  <NextIcon />
                  <Link href={`/blogs/?topic=${topic.slug}`} className="hover:text-white">{topic.label}</Link>
                </>
              )}
            </nav>
            {cat && (
              <p className="mt-5 inline-flex rounded-full border border-[#F26633]/50 bg-[#F26633]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF9C74]">
                {cat.label}
              </p>
            )}
            <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl md:leading-[1.1]">{data.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">{summary}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <span className="relative block h-8 w-8 overflow-hidden rounded-full bg-white">
                  <Image src="/fielmente_logo.png" alt="" fill sizes="32px" className="object-contain p-1" />
                </span>
                <Link href={ABOUT} className="font-medium text-white hover:underline">Fielmente Team</Link>
              </span>
              {data.date && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={published}>{data.date}</time>
                </>
              )}
              {data.updated && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated <time dateTime={modified}>{data.updated}</time>
                  </span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{minutes} min read</span>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 items-start gap-10 pb-16 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,780px)_360px] xl:justify-between">
          <article className="min-w-0">
            {data.url && (
              <div className="relative -mt-28 aspect-video w-full overflow-hidden rounded-2xl bg-[#EEEDF5] shadow-[0_30px_80px_-30px_rgba(17,13,60,0.55)] ring-1 ring-black/5 md:-mt-36 md:rounded-3xl">
                <Image src={data.url} alt={data.title} fill priority className="object-cover" sizes="(min-width: 1280px) 780px, (min-width: 1024px) 64vw, 100vw" />
              </div>
            )}

            {toc.length >= 3 && (
              <details className="group mt-8 rounded-2xl border border-[#E6E4EF] bg-[#FAFAFD] p-4 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-primary2">
                  On this page
                  <span className="text-[#9AA0AC] transition group-open:rotate-180" aria-hidden="true">▾</span>
                </summary>
                <div className="mt-3">{tocList}</div>
              </details>
            )}

            <div className="blog-content mt-10 break-words" dangerouslySetInnerHTML={{ __html: html }} />

            {/* Who is behind the article (Google's guidance on people-first content asks "who created it?"). */}
            <aside aria-label="About the author" className="mt-12 flex gap-4 rounded-2xl border border-[#E6E4EF] bg-[#FAFAFD] p-5 md:p-6">
              <span className="relative mt-1 block h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-[#E6E4EF]">
                <Image src="/fielmente_logo.png" alt="" fill sizes="48px" className="object-contain p-1.5" />
              </span>
              <div className="text-[15px] leading-relaxed text-[#3A4152]">
                <p className="font-semibold text-primary2">Written by the Fielmente team</p>
                <p className="mt-1">
                  Fielmente is a hospitality marketing agency in Gurugram, founded in 2020 by Sachin Kapoor, a hotelier with a
                  master&apos;s in hospitality from WGSHA Manipal and sales and marketing experience at Marriott and Hyatt. The team
                  runs Google Ads, SEO, social media and hotel software for hotels, resorts and restaurants.{" "}
                  <Link href={ABOUT} className="font-semibold text-color4 hover:underline">
                    About us
                  </Link>{" "}
                  ·{" "}
                  <Link href="/case-study/" className="font-semibold text-color4 hover:underline">
                    Client results
                  </Link>
                </p>
              </div>
            </aside>

            <div className="mt-12 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-primary2 px-6 py-7 text-white md:flex-row md:items-center md:px-8">
              <div>
                <p className="text-xl font-semibold md:text-2xl">Want this working for your property?</p>
                <p className="mt-2 text-white/70">Get a free 15-minute marketing audit from the Fielmente team.</p>
              </div>
              <CtaBtn
                label="Get My Free Consultation"
                type="button"
                className="rounded-full border-none bg-orange-primary text-white md:text-lg"
              />
            </div>

            {tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#F1F0F7] px-3.5 py-1.5 text-sm text-[#3A4152]">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {(prevPost || nextPost) && (
              <nav aria-label="More articles" className="mt-10 grid gap-4 border-t border-[#E6E4EF] pt-8 sm:grid-cols-2">
                {[prevPost, nextPost].map((p, i) =>
                  p ? (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}/`}
                      className={`group flex items-center gap-4 rounded-2xl border border-[#E6E4EF] p-3 transition hover:border-color4 ${i === 1 ? "sm:col-start-2 sm:flex-row-reverse sm:text-right" : ""}`}
                    >
                      {imageSrc(p.url) && (
                        <span className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-[#EEEDF5]">
                          <Image src={imageSrc(p.url)!} alt="" fill sizes="112px" className="object-cover" />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#5F6776]">
                          {i === 0 ? "Previous article" : "Next article"}
                        </span>
                        <span className="mt-1 line-clamp-2 block font-semibold text-primary2 group-hover:text-color4">{p.title}</span>
                      </span>
                    </Link>
                  ) : null
                )}
              </nav>
            )}
          </article>

          <aside className="flex w-full flex-col gap-6 lg:sticky lg:top-24 lg:mt-10">
            {toc.length >= 3 && (
              <div className="hidden rounded-2xl border border-[#E6E4EF] bg-white p-4 lg:block">
                <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5F6776]">On this page</p>
                <div className="max-h-[38vh] overflow-y-auto pr-1">{tocList}</div>
              </div>
            )}
            <LandingPgForm />
          </aside>
        </div>
      </Container>

      {/* Related reading */}
      <section className="border-t border-[#E6E4EF] bg-[#F7F7FB] py-14 md:py-20">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Keep reading</h2>
            <Link
              href={topic ? `/blogs/?topic=${topic.slug}` : "/blogs/"}
              className="flex items-center gap-2 rounded-full border border-primary2/20 px-5 py-2.5 text-sm font-semibold text-primary2 transition hover:bg-primary2 hover:text-white"
            >
              {topic ? `All ${topic.label} articles` : "All articles"} <ArrowIcon />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {relatedCards.map((p) => (
              <BlogCard key={p.slug} {...card(p)} as="h3" />
            ))}
          </div>
          {relatedLinks.length > 0 && (
            <div className="mt-14 rounded-2xl border border-[#E6E4EF] bg-white p-6 md:p-8">
              <h2 className="text-lg font-bold text-primary2">More from Fielmente</h2>
              <ul className="mt-4 grid gap-x-10 gap-y-3 md:grid-cols-2">
                {relatedLinks.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}/`} className="flex gap-2 text-[#3A4152] hover:text-color4">
                      <span className="mt-0.5 text-orange-primary" aria-hidden="true">→</span>
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}

export const NextIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

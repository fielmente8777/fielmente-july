import { blogData } from "@/utils/blogdata";
import { blogCategory, excerpt, readMinutes, type BlogTopic } from "@/utils/blogMeta";

export const BLOGS_PER_PAGE = 9;
/** Page 1 shows one featured post above a full grid, so it holds one more post than later pages. */
const FIRST_PAGE = BLOGS_PER_PAGE + 1;

export type BlogListCard = {
  src: string | undefined;
  title: string;
  slug: string;
  description: string;
  read: string;
  label?: string;
  topic?: BlogTopic;
};

/** One card per post, newest first (posts are added to the end of blogData). */
export const blogCards: BlogListCard[] = [...blogData].reverse().map((item) => {
  const cat = blogCategory(item.slug);
  return {
    src: typeof item.url === "string" ? item.url : item.url?.src,
    title: item.title,
    slug: item.slug,
    description: item.description || item.meta?.description || excerpt(item.data),
    read: `${readMinutes(item.data)} min read`,
    label: cat?.label ?? item.category,
    topic: cat?.topic,
  };
});

/** Number of listing pages for `count` posts. */
export function blogPageCount(count: number) {
  return count <= FIRST_PAGE ? 1 : 1 + Math.ceil((count - FIRST_PAGE) / BLOGS_PER_PAGE);
}

/** The posts on listing page `page` (1-based). */
export function blogPageSlice<T>(list: T[], page: number) {
  if (page <= 1) return list.slice(0, FIRST_PAGE);
  const start = FIRST_PAGE + (page - 2) * BLOGS_PER_PAGE;
  return list.slice(start, start + BLOGS_PER_PAGE);
}

/** Position of the first post on page `page` within the list (0-based). */
export function blogPageStart(page: number) {
  return page <= 1 ? 0 : FIRST_PAGE + (page - 2) * BLOGS_PER_PAGE;
}

// Kept for older imports.
export const blogPageData = {
  bannerData: {
    title: "EXPLORE OUR BLOGS",
    subTitle: "Tailored Expert Advice from <span>Fielmente</span>",
  },
  blogs: {
    title: "BLOGS",
    subTitle: "Popular <span>Blogs</span>",
    cards: blogCards,
  },
};

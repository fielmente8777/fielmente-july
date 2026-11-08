import { blogData } from "@/utils/blogdata";
import { hotelAdsGuides } from "@/lib/hotelAdsGuides";
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
const newHotelCenterGuide: BlogListCard = {
  src: "/images/blog/google-hotel-center-ads-connection.svg",
  title: "How to Connect Google Hotel Center to Google Ads Using Data Manager (2026)",
  slug: "google-hotel-center-google-ads-data-manager-guide",
  description: "Follow the exact Tools → Data Manager setup, Hotel Center ID request and approval flow—with infographics for hotel owners.",
  read: "8 min read",
  label: "Google & Meta Ads",
  topic: "hotel-marketing",
};

const hotelAdsSeriesCards: BlogListCard[] = [...hotelAdsGuides].reverse().map((guide) => ({
  src: "/images/blog/hotel-ads-series/" + guide.slug + ".svg",
  title: guide.title,
  slug: "google-hotel-ads-guides/" + guide.slug,
  description: guide.description,
  read: "6 min read",
  label: guide.category === "Connectivity" ? "Hotel Technology" : "Google & Meta Ads",
  topic: "hotel-marketing",
}));

export const blogCards: BlogListCard[] = [...hotelAdsSeriesCards, newHotelCenterGuide, ...[...blogData].reverse().map((item) => {
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
})];

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

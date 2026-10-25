import { blogData } from "@/utils/blogdata";

export const BLOGS_PER_PAGE = 9;

export const blogPageData = {
  bannerData: {
    title: "EXPLORE OUR BLOGS",
    subTitle: "Tailored Expert Advice from <span>Fielmente</span>",
  },
  blogs: {
    title: "BLOGS",
    subTitle: "Popular <span>Blogs</span>",
    cards: [
      {
        src: "/images/blog/bnr.png",
        title: "Why Website Speed Matters for Hotels",
        read: "10 min read",
        slug: "why-website-speed-matters-for-hotels",
        description: "How faster hotel websites support direct bookings and better guest experiences...",
      },
      ...blogData.map((item) => ({
        src: item.url,
        title: item.title,
        read: "5 min read",
        slug: item.slug,
        description: item.description?.slice(0, 80) + "...",
      })),
    ],
  },
};

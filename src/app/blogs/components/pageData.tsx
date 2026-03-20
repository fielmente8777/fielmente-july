import { blogData } from "@/utils/blogdata";

export const blogPageData = {
  bannerData: {
    title: "EXPLORE OUR BLOGS",
    subTitle: "Tailored Expert Advice from <span>Fielmente</span>",
  },
  blogs: {
    title: "BLOGS",
    subTitle: "Popular <span>Blogs</span>",
    cards: [
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

import { blogData } from "@/utils/blogdata";
import Link from "next/link";
import Image from "next/image";
import { SectionWithContainer } from "@/components";
import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import { homePageData } from "../(home)/homePageData";
import ExploreMoreBLogs from "./components/ExploreMoreBLogs";

interface Params {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// get random blogs

function getRandomBlog(currentSlug: string, count = 3) {
  return blogData
    .filter((post) => post.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export async function generateStaticParams() {
  const blogPosts = await blogData;

  return blogPosts.map((post) => ({
    slug: post.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const path = await params;
  const post = blogData.find((post) => post.slug === path.slug);

  return {
    title: post?.title,
    description: post?.description,
    alternate: {
      canonical: `https://fielmente.com/${post?.slug}/`,
    },
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `https://fielmente.com/${post?.slug}/`,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `https://fielmente.com/${post?.slug}-og.png`,
          width: 1200,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LandingPage({ params }: Params) {
  const path = await params;
  const data = blogData.find((post) => post.slug === path.slug);

  const randomBLogs = getRandomBlog(path.slug);

  const randomData = {
    title: "Explore More Blogs",
    cta: {
      title: "View all Blogs",
      url: "/blogs",
    },
    cards: [
      ...randomBLogs.map((item) => ({
        src: item.url,
        title: item.title,
        read: "5 min read",
        slug: item.slug,
        description: item.description?.slice(0, 80) + "...",
      })),
    ],
  };

  if (!data) {
    return (
      <main>
        <h1>404</h1>
      </main>
    );
  }

  return (
    <main className="mt-24">
      <SectionWithContainer>
        <article className="md:max-w-6xl w-full mx-auto md:space-y-8 space-y-3">
          <div className="flex flex-col gap-2">
            <p className="text-[#6B7280] flex items-center gap-1">
              <Link href="/blogs">Blogs</Link>{" "}
              <span>
                <NextIcon />
              </span>{" "}
              <span className="text-color4">Blog Details</span>
            </p>
            <h1 className="font-semibold text-primary md:text-[2.625rem] text-xl">
              {data.title}
            </h1>
          </div>

          {/* divider */}
          <div className="w-full h-px bg-main-border" />


          <div className="md:space-y-6 space-y-4">
            <div className="flex items-center gap-4 divide-x divide-main-border">
              <p className="text-[#6B7280] md:text-lg pr-4">
                Date:{" "}
                <span className="text-secondary">
                  {data.date ?? "May 26, 2026"}
                </span>
              </p>
              <p className="md:text-lg flex items-center gap-1">
                <span>
                  <ClockIcon />
                </span>
                <span className="text-secondary">5 min read</span>
              </p>
            </div>
            {data.url && (
              <div className="w-full relative aspect-4/3 md:aspect-[4/1.7] overflow-hidden rounded-2xl">
                <Image
                  src={data.url}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: data.data }}
          ></div>
        </article>
      </SectionWithContainer>
      <ExploreMoreBLogs {...randomData} />
      <ContactUsSection {...homePageData.contactUsSection} />
    </main>
  );
}

export const NextIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7883 10L7.39393 6.60584C7.27865 6.49042 7.21963 6.34535 7.21685 6.17063C7.21421 5.99605 7.27324 5.84834 7.39393 5.7275C7.51477 5.60681 7.66115 5.54646 7.8331 5.54646C8.00504 5.54646 8.15143 5.60681 8.27227 5.7275L12.0175 9.47271C12.0954 9.55077 12.1504 9.63306 12.1825 9.71959C12.2146 9.80612 12.2306 9.89959 12.2306 10C12.2306 10.1004 12.2146 10.1939 12.1825 10.2804C12.1504 10.367 12.0954 10.4492 12.0175 10.5273L8.27227 14.2725C8.15685 14.3878 8.01178 14.4468 7.83706 14.4496C7.66247 14.4522 7.51477 14.3932 7.39393 14.2725C7.27324 14.1517 7.21289 14.0053 7.21289 13.8333C7.21289 13.6614 7.27324 13.515 7.39393 13.3942L10.7883 10Z"
      fill="#6A7691"
    />
  </svg>
);

export const ClockIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.75 11.6962V7.75C12.75 7.5375 12.6781 7.35933 12.5343 7.2155C12.3904 7.07183 12.2122 7 11.9998 7C11.7871 7 11.609 7.07183 11.4655 7.2155C11.3218 7.35933 11.25 7.5375 11.25 7.75V11.927C11.25 12.0447 11.2718 12.1587 11.3155 12.269C11.359 12.3793 11.4276 12.4813 11.5213 12.575L14.9462 16C15.0846 16.1385 15.2586 16.2093 15.4682 16.2125C15.6779 16.2157 15.8552 16.1448 16 16C16.1448 15.8552 16.2172 15.6795 16.2172 15.473C16.2172 15.2667 16.1448 15.0911 16 14.9462L12.75 11.6962ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z"
      fill="#9EA3AB"
    />
  </svg>
);

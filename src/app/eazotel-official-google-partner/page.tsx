import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components";

const SITE = "https://fielmente.com";
const SLUG = "eazotel-official-google-partner";
const URL = SITE + "/" + SLUG + "/";
const TITLE = "Six Years Ago, It Was Just a Dream. Today, Eazotel Is a Google Partner!";
const DESCRIPTION = "A six-year dream comes true. Eazotel celebrates becoming an official Google Partner on 13 November 2026 and thanks the team and clients behind the journey.";
const IMAGE = "/images/blog/eazotel-google-partner-milestone.svg";
const DATE = "2026-11-13";

export const metadata: Metadata = {
  title: "Eazotel Becomes an Official Google Partner | A Six-Year Journey",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Fielmente",
    locale: "en_IN",
    type: "article",
    publishedTime: DATE,
    images: [{ url: IMAGE, width: 1600, height: 900, alt: "Eazotel Google Partner announcement: six years ago, it was just a dream" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
  robots: { index: true, follow: true },
};

const benefits = [
  "An official Google Partner badge to display in eligible marketing materials.",
  "Advanced Google Ads product training and industry insights.",
  "Access to customised campaign help and performance recommendations.",
  "Eligibility for promotional offers for qualifying new clients.",
  "Visibility in the Google Partners directory.",
];

export default function EazotelPartnerMilestone() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    url: URL,
    mainEntityOfPage: URL,
    image: SITE + IMAGE,
    datePublished: DATE,
    dateModified: DATE,
    inLanguage: "en-IN",
    articleSection: "Fielmente News",
    keywords: "Eazotel Google Partner, Eazotel official Google Partner, Google Partners 2026, hospitality marketing, Eazotel milestone",
    author: { "@type": "Organization", name: "Eazotel", url: "https://eazotel.com/" },
    publisher: { "@type": "Organization", name: "Fielmente", url: SITE, logo: { "@type": "ImageObject", url: SITE + "/fielmente_logo.png" } },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: SITE + "/blogs/" },
      { "@type": "ListItem", position: 3, name: TITLE, item: URL },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <section className="relative overflow-hidden bg-primary2 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(800px_500px_at_90%_0%,rgba(242,102,51,0.24),transparent_70%),radial-gradient(600px_500px_at_0%_100%,rgba(13,84,235,0.28),transparent_70%)]" />
        <Container className="relative pb-14 pt-32 md:pb-20 md:pt-40">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-white/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blogs/" className="hover:text-white">Blogs</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Company milestone</span>
          </nav>
          <p className="inline-flex rounded-full border border-[#F26633]/60 bg-[#F26633]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD4C4]">
            A dream realised · A team celebrated
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-[1.16] tracking-tight md:text-6xl">{TITLE}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            Some emails are more than notifications. Some mark the moment a dream, six years in the making, finally comes true.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/65">
            <span>13 November 2026</span><span aria-hidden="true">•</span><span>By Team Eazotel</span><span aria-hidden="true">•</span><span>Company News</span>
          </div>
        </Container>
      </section>

      <Container className="pb-20 pt-8 md:pt-12">
        <figure className="overflow-hidden rounded-3xl border border-[#E6E4EF] shadow-[0_20px_55px_-30px_rgba(17,13,60,0.25)]">
          <Image src={IMAGE} alt="Six years ago, it was just a dream. Today, Eazotel is a Google Partner." width={1600} height={900} priority className="h-auto w-full" />
          <figcaption className="bg-[#F7F8FC] px-5 py-3 text-sm text-[#596375]">A proud milestone for Eazotel, shared with the hospitality community by Fielmente.</figcaption>
        </figure>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border-l-4 border-[#F26633] bg-[#FFF4EE] px-6 py-6 text-lg font-semibold leading-8 text-primary2">
            At 10:12 PM on 13 November 2026, an email from Google Partners arrived with the subject: “Congratulations on earning Partner status.” A few words, and a moment we will never forget.
          </div>
          <article className="text-[17px] leading-8 text-[#384153] [&_h2]:mb-5 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-primary2 md:[&_h2]:text-3xl [&_p]:mb-5">
            <p className="mt-8">Some emails are just notifications. Some bring good news. And then there are emails that remind you why you started, why you kept going, and why you never gave up.</p>
            <p>Today, we received one of those emails.</p>
            <p>Behind those words are years of ambition, countless hours of work, challenges, sacrifices, lessons, and an unwavering belief in what we were building.</p>
            <p><strong>Today, Eazotel is officially a Google Partner.</strong> And the happiness we feel is difficult to put into words.</p>

            <h2 id="six-years-ago">Six Years Ago, This Was Just a Dream</h2>
            <p>Six years ago, receiving an email like this was something I could only dream about. There was a vision, a lot of determination, and a belief that we could build something meaningful.</p>
            <p>The journey was never about earning a badge alone. It was about creating a company that could make a difference, helping businesses grow through technology, innovation, and performance-driven marketing.</p>
            <p>There were difficult days. There were setbacks, long working hours, unexpected challenges, and moments when progress seemed slower than our ambitions.</p>
            <p>But one thing never changed. <strong>We kept believing. We kept learning. And we kept moving forward.</strong></p>
            <p>Today, when I look at that Google Partners email, I do not just see recognition. I see the journey. I see the effort. I see the people who helped make it possible. And most importantly, I see a dream that has become a reality.</p>

            <h2 id="our-team">A Moment of Pride for the Entire Eazotel Family</h2>
            <p>This achievement belongs to every person who has contributed to Eazotel&apos;s journey: the teammates who worked tirelessly behind the scenes; those who spent countless hours planning campaigns, analysing performance, understanding clients, developing solutions, and solving problems; and everyone who believed in the vision even when results were not immediate.</p>
            <p><strong>Congratulations to each and every one of you. This is your achievement as much as it is mine.</strong></p>
            <p>A company does not grow because of one individual. It grows because people come together with shared ambitions and a commitment to doing better every day. Today, I feel incredibly proud of the people who are part of this journey.</p>

            <h2 id="what-it-means">What Becoming a Google Partner Means for Eazotel</h2>
            <p>Earning Google Partner status is an important professional milestone. The programme recognises participating companies that meet Google&apos;s requirements across performance, advertising spend, and certifications.</p>
            <p>According to the official Google Partners welcome email, the programme provides eligible partners with benefits such as:</p>
            <ul className="mb-6 list-disc space-y-2 pl-7">
              {benefits.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>For us, the real value goes beyond those benefits. It represents another step towards building a stronger, more capable, and more trustworthy technology and digital marketing organisation.</p>
            <p>For more information about eligibility and programme benefits, visit <a className="font-semibold text-[#0D54EB] underline underline-offset-4" href="https://business.google.com/in/support/become-a-partner/" target="_blank" rel="noopener noreferrer">Google&apos;s official Partners programme overview</a>.</p>

            <h2 id="bigger-vision">Our Vision Has Always Been Bigger</h2>
            <p>At Eazotel, our ambition is to transform the hospitality industry through artificial intelligence, technology, automation, and digital innovation.</p>
            <p>From helping hotels and resorts strengthen their digital presence to developing AI-powered hospitality solutions, we believe technology should create real business opportunities.</p>
            <p>Our journey has always been driven by one question: <strong>How can we make technology work harder and smarter for the hospitality industry?</strong></p>
            <p>Becoming a Google Partner strengthens our determination to deliver measurable performance, adopt new innovations, and continue improving the solutions we provide to our clients.</p>
            <p>There is still so much more to build, so much more to achieve, and so much more to learn.</p>

            <h2 id="thank-you-clients">A Heartfelt Thank You to Our Clients</h2>
            <p>No milestone like this would be complete without thanking the clients who have trusted us. Every hotel, resort, restaurant, and hospitality brand that has chosen to work with us has contributed to our growth.</p>
            <p>Your trust gives us the opportunity to challenge ourselves, develop better strategies, embrace new technologies, and continually improve. We are grateful for that confidence, and we remain committed to earning it every day.</p>

            <h2 id="dream-bigger">Tonight, We Celebrate. Tomorrow, We Dream Bigger.</h2>
            <p>There is something special about seeing a dream turn into reality. Six years ago, this moment existed only in my imagination. Today, it is sitting in our inbox as an official email from Google.</p>
            <p><strong>And I cannot stop smiling.</strong></p>
            <p>I am happy. I am grateful. I am proud.</p>
            <p>Not simply because we achieved Google Partner status, but because this moment reminds me that patience, determination, teamwork, and consistency can take you further than you once imagined.</p>
            <p>To the entire Eazotel family: <strong>Thank you for believing. Thank you for your hard work. Thank you for being part of this journey.</strong></p>
            <p>Tonight, we celebrate this milestone together. And tomorrow, we return to work with even bigger ambitions.</p>
            <p>Because if a dream from six years ago can become today&apos;s reality, imagine what we can achieve in the next six years.</p>
            <p><strong>Here&apos;s to the dreams we dared to dream, the people who made them possible, and the extraordinary journey still ahead.</strong></p>
            <p className="font-semibold text-primary2">With immense happiness and gratitude,<br />Team Eazotel</p>
            <p className="italic">Empowering Hospitality with AI.</p>
          </article>

          <aside className="mt-12 rounded-3xl bg-primary2 p-7 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFC0A7]">Celebrating this moment together</p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">Six years of belief. A new chapter ahead.</h2>
            <p className="mt-3 text-base leading-7 text-white/75">Fielmente is proud to share this milestone from Eazotel, our sister hospitality technology platform. Discover how we help hospitality businesses grow through technology and marketing.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/blogs/" className="rounded-full bg-[#F26633] px-5 py-3 text-sm font-semibold text-white hover:bg-[#E65B2C]">Explore more articles</Link>
              <Link href="/contact-us/" className="rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Connect with Fielmente</Link>
            </div>
          </aside>
          <p className="mt-6 text-sm leading-6 text-[#6C7381]">Note: This announcement refers to the Google Partner status confirmed in an email to Eazotel on 13 November 2026. Google Partner is a programme tier distinct from Premier Partner.</p>
        </div>
      </Container>
    </main>
  );
}

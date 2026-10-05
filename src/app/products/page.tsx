// OPTIONAL: replaces the live /products/ hub with one that lists all 17 products.
// If your repo already has app/products/page.tsx you're happy with, skip this file and just
// add the 9 new products (see data/products.ts) to your existing hub.
import {
  CtaBand,
  PageHero,
  PartnerStrip,
  PrimaryButton,
  SectionHead,
  StatsBand,
  TRIAL_URL,
  WhatsAppButton,
} from "@/components/marketing/Sections";
import { Container } from "@/components/sectionComponants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import ProductMock from "./components/ProductMock";
import { liveProducts, platformStats, products } from "./data/products";

export const metadata: Metadata = {
  title: "Hotel Software for Direct Bookings | Fielmente Products",
  description:
    "Booking engine, channel manager, AI concierge, AI voice agent, CRM, WhatsApp and email marketing — Fielmente's hotel products on one Eazotel dashboard.",
  alternates: { canonical: "https://fielmente.com/products/" },
};

const groups: { title: string; lede: string; slugs: string[] }[] = [
  {
    title: "Win the booking",
    lede: "Turn searches, enquiries and calls into direct reservations.",
    slugs: ["hotel-booking-engine", "hotel-channel-manager", "hotel-payment-gateway", "hotel-ai-reservation-desk", "hotel-cms", "hotel-local-seo"],
  },
  {
    title: "AI that works every shift",
    lede: "Answer guests instantly, on chat and on the phone.",
    slugs: ["hotel-ai-chatbot", "hotel-ai-concierge", "hotel-ai-front-desk", "hotel-ai-voice-agent"],
  },
  {
    title: "Every conversation in one place",
    lede: "Messages, calls and requests — handled, tracked and followed up.",
    slugs: ["hotel-conversational-tool", "hotel-call-management-system", "hotel-guest-request-management", "hotel-crm"],
  },
  {
    title: "Bring guests back",
    lede: "Campaigns and content that keep your hotel top of mind.",
    slugs: ["hotel-whatsapp-marketing", "hotel-email-marketing", "hotel-social-media-management-tool"],
  },
];

function card(slug: string) {
  const p = products.find((x) => x.slug === slug);
  if (p) return { slug, name: p.name, body: p.card, image: p.image, mock: p.mock, isNew: true };
  const l = liveProducts.find((x) => x.slug === slug)!;
  return { slug, name: l.name, body: l.card, image: l.image, mock: undefined, isNew: false };
}

export default function ProductsHub() {
  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        eyebrow="Fielmente products · runs on Eazotel"
        title="Hotel software that grows direct bookings"
        lede="Seventeen tools on one dashboard for bookings, payments, guest conversations, calls and campaigns — without OTA commissions eating your margin."
        actions={
          <>
            <PrimaryButton href={TRIAL_URL} external>
              Start 14-day free trial
            </PrimaryButton>
            <WhatsAppButton />
          </>
        }
        image="/products/booking-engine.png"
        imageAlt="Fielmente booking engine dashboard"
        imageMode="illustration"
      />

      <PartnerStrip />

      {groups.map((g, gi) => (
        <section key={g.title} className={`py-14 md:py-20 ${gi % 2 === 1 ? "bg-[#F5F5F9]" : ""}`}>
          <Container>
            <SectionHead eyebrow={`0${gi + 1}`} title={g.title} lede={g.lede} />
            <div className={`grid sm:grid-cols-2 ${g.slugs.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4 md:gap-5`}>
              {g.slugs.map(card).map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E3EC] bg-white hover:border-primary2/40 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)] transition-all"
                >
                  <div className="relative aspect-[615/394] w-full overflow-hidden bg-[#F5F5F9]">
                    {c.image ? (
                      <Image src={c.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    ) : c.mock ? (
                      <div className="absolute inset-0 origin-top scale-[0.62] p-2 [&>div]:shadow-none">
                        <ProductMock kind={c.mock} />
                      </div>
                    ) : null}
                    {c.isNew && (
                      <span className="absolute right-3 top-3 rounded-full bg-orange-primary px-2.5 py-1 text-[11px] font-semibold text-white">New</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="text-lg font-bold">{c.name}</h3>
                    <p className="text-sm/relaxed text-[#55536E]">{c.body}</p>
                    <span className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-sapphireBlue">
                      Explore {c.name} <LuArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <StatsBand eyebrow="Results" title="What hotels see on the platform" stats={platformStats} />

      <CtaBand
        title="See Fielmente working on your property"
        body="Try it free for 14 days, or book a walkthrough set up with your own rooms and rates."
        actions={
          <>
            <PrimaryButton href={TRIAL_URL} external>
              Start 14-day free trial
            </PrimaryButton>
            <WhatsAppButton label="Book a demo" />
          </>
        }
      />
    </main>
  );
}

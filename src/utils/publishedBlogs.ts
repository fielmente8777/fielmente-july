import { blogData as sourceBlogs, type blogtype } from "./blogdata";
export type { blogtype } from "./blogdata";

const messagingUpdate: Partial<blogtype> = {
  title: "Google Business Profile Messaging for Hotels: What Changed",
  description: "Understand the end of Google's original Business Profile chat and the contact options hotels can review today.",
  date: "2026-10-31",
  meta: {
    title: "Google Business Profile Messaging for Hotels | Fielmente",
    description: "Google’s original Business Profile chat ended in 2024. Learn how hotels can review current messaging options and keep their direct enquiry channels useful.",
    keywords: ["Google Business Profile messaging", "hotel WhatsApp enquiries", "hotel local SEO"],
  },
  data: `
    <p>Google’s original Business Profile chat and call-history features ended on 31 July 2024. Instructions for automating that retired chat service no longer describe a working hotel enquiry channel. This guide has been updated to distinguish the retired product from the messaging options Google now makes available to some profiles.</p>
    <h2>What changed in Google Business Profile?</h2>
    <p>Google’s <a href="https://support.google.com/business/answer/14919056" rel="noopener">official notice about chat and call history</a> confirms the retirement date. Guests can still discover a hotel through Search and Maps and use the contact information and links shown on its profile. Ending the old chat service did not remove the hotel’s website or ordinary phone contact.</p>
    <h2>Check the messaging options available to your hotel</h2>
    <p>Google’s current <a href="https://support.google.com/business/answer/15013580" rel="noopener">Business Profile messaging guidance</a> says claimed and verified businesses may add a WhatsApp or text-message option in supported regions. Availability varies and the option may not appear for your profile. These contact links should not be confused with the retired Google Business Messages service.</p>
    <p>Review your profile’s contact settings and use the options actually offered to your business. Keep the destination number or WhatsApp link current, and test the journey from a guest’s phone. If an option is unavailable, keep the website and phone routes clear rather than promising an integration that your profile does not support.</p>
    <h2>Make the hotel enquiry journey useful</h2>
    <p>A contact button is only the start of the journey. Decide who answers, what information the team needs and how a suitable enquiry reaches reservations. Dates, party size, room requirements and the guest’s question should stay attached to the conversation.</p>
    <p>For a supported WhatsApp journey, explore the <a href="/products/hotel-whatsapp-marketing/">hotel WhatsApp marketing and enquiry tools</a> that fit your team’s process. Use automation for appropriate routing and repetitive questions, with a clear way for a guest to reach a person. Keep room availability, prices and booking confirmation tied to the systems your property actually uses.</p>
    <h2>Keep local information and the booking route consistent</h2>
    <p>The profile, website and reservations team should agree on the property’s name, address, phone number, facilities and booking terms. Useful room and location pages help guests decide whether to enquire. Our <a href="/industries-we-serve/hotel-marketing-agency/hotel-local-seo/">hotel local SEO service</a> explains how this information fits the wider discovery journey.</p>
    <h2>Measure an enquiry separately from a booking</h2>
    <p>Review contact activity alongside enquiry quality, response handling and confirmed business where your systems support that measurement. A message, phone tap or form submission is not automatically a confirmed room reservation. Agree the definition with marketing and reservations before judging a campaign by its conversion total.</p>
    <p>Reviewed on 31 October 2026 against the Google help pages linked above. Recheck the current profile settings and official guidance before implementing a messaging change.</p>
  `,
};

/** Keep the established URL while correcting instructions for a retired platform feature. */
export const blogData: blogtype[] = sourceBlogs.map((post) => {
  if (post.slug === "guide-to-setup-automation-of-your-hotel-google-my-business-messages") return { ...post, ...messagingUpdate };
  if (post.slug === "how-to-make-a-hotel-website-ai-search-friendly") return {
    ...post,
    meta: {
      ...post.meta,
      title: "AI Search-Friendly Hotel Website Guide | Fielmente",
      description: "Make your hotel website clear and useful for AI search. Review crawlability, property facts, structured content and the journey to a direct booking.",
    },
  };
  return post;
});

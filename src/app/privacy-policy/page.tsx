import { Section, Container } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Fielmente: Your trusted hospitality SEO agency, providing targeted marketing services for hotels, restaurants, cloud kitchens, and resorts.",
  alternates: {
    canonical: "https://fielmente.com/privacy-policy",
    languages: {
      "en-US": "https://fielmente.com/privacy-policy",
    },
  },
  openGraph: {
    title: "Privacy Policy - Fielmente",
    description:
      "Fielmente: Thriving hospitality marketing services, elevating your brand with expert digital strategies. Get your success today!",
    images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
const page = () => {
  return (
    <main className="page_date">
      <Section>
        <Container>
          <h1>Privacy Policy</h1>
          <p>
            Fielmente Business Advisors LLP (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website [
            <Link target="_blank" href="https://www.fielmente.com">
              www.fielmente.com
            </Link>
            ], or engage with our services.
          </p>
          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <b>Personal Information</b> : We collect personal data such as
              name, email address, phone number, company details, and any other
              information you provide to us directly.
            </li>
            <li>
              <b>Non-Personal Information</b> : We may collect non-personally
              identifiable information such as IP addresses, browser type,
              referring pages, and other analytical data to improve your
              experience.
            </li>
          </ul>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>
              <b>To Provide Services</b> : We use the information collected to
              provide, maintain, and improve our consulting and advisory
              services.
            </li>
            <li>
              <b>Marketing</b> : With your consent, we may send you promotional
              emails or newsletters.
            </li>
            <li>
              <b>Legal Compliance</b> : We may use your information as required
              by law or regulation.
            </li>
          </ul>
          <h2>3. Data Security</h2>
          <ul>
            <li>
              We use administrative, technical, and physical security measures
              to protect your personal data. However, please note that no method
              of transmission over the internet or electronic storage is 100%
              secure.
            </li>
          </ul>
          <h2>4. Sharing Your Information</h2>
          <ul>
            <li>
              We do not sell, rent, or trade your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating the website and conducting business.
            </li>
          </ul>
          <h2>5. Your Rights</h2>
          <ul>
            <li>
              <b>Access &amp; Correction</b> : You can access and update your
              personal information by contacting us.
            </li>
            <li>
              <b>Opt-Out</b> : You may unsubscribe from our marketing
              communications by following the opt-out instructions in our
              emails.
            </li>
          </ul>
          <h2>6. Cookies</h2>
          <ul>
            <li>
              We use cookies to enhance your experience on our website. You may
              choose to disable cookies via your browser settings.
            </li>
          </ul>
          <h2>7. Changes to this Policy</h2>
          <ul>
            <li>
              We reserve the right to make changes to this Privacy Policy. Any
              changes will be reflected on this page with an updated date.
            </li>
          </ul>
          <p>
            <span />
          </p>
        </Container>
      </Section>
    </main>
  );
};

export default page;

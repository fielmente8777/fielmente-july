import { Footer, NavBar } from "@/components";
import { AppProvider } from "@/contextApi/AppContext";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import PopupForm from "@/components/pop-ups/PopupForm";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Fielmente - India's Leading Hospitality Marketing Agency",
  description:
    "We're the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon/icon.svg",
    },
    {
      rel: "manifest",
      url: "/favicon/site.webmanifest",
    },
    {
      rel: "mask-icon",
      color: "#5bbad5",
      url: "/favicon/icon.svg",
    },
    {
      rel: "shortcut icon",
      url: "/favicon/favicon.ico",
    },
  ],

  keywords:
    "Fielmente, Hotel Marketing Agency, Cloud Kitchen Marketing Agency, Resort Marketing Agency",
  alternates: {
    canonical: "https://fielmente.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Fielmente", url: "https://fielmente.com/" }],
  openGraph: {
    title: "Fielmente - India's Leading Hospitality Marketing Agency",
    description:
      "We're the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years.",
    url: "https://fielmente.com/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://fielmente.com/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AppProvider>
          <NavBar />
          {children}
          <Footer />
          <PopupForm />
        </AppProvider>
      </body>
    </html>
  );
}

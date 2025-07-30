import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import { AppProvider } from "@/contextApi/AppContext";
import { Footer, NavBar } from "@/components";
import PopupForm from "@/components/pop-ups/PopupForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${poppins.className} antialiased`}
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

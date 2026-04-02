import { Footer, NavBar } from "@/components";
import { AppProvider } from "@/contextApi/AppContext";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import PopupForm from "@/components/pop-ups/PopupForm";
import MobileNav from "@/components/navbars/MobileNav";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import Script from "next/script";
import Salesiq from "@/components/zohochatbot/Salesiq";

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
      <head>
        <meta
          name="google-site-verification"
          content="vKQyk75wG0kfB4x60GCRAmVeErtPS9rgcM9-YNRAvLw"
        />

        {/* <!-- Clarity tracking code for Fielmente new 06 09 2024--> */}
        <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/" + i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "o0h0ldtiip");`,
          }}
        />

        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PVZG7NGGMG');`,
          }}
        />

        {/* <Script
          id="google-conversion-tracking"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {'send_to': 'AW-10860806708/6GvFCPKGytgZELSE67oo'});`,
          }}
        /> */}

        <Script
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-5H2JL2ZPTS"
        ></Script>
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5H2JL2ZPTS');`,
          }}
        />

        {/* LeadBooster Configuration Script */}
        <Script
          id=""
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.pipedriveLeadboosterConfig = {
                base: 'leadbooster-chat.pipedrive.com',
                companyId: 13896258,
                playbookUuid: 'b2bcf4e2-ea94-4382-857f-5ccde99a8618',
                version: 2
              };
              (function () {
                var w = window;
                if (w.LeadBooster) {
                  console.warn('LeadBooster already exists');
                } else {
                  w.LeadBooster = {
                    q: [],
                    on: function (n, h) {
                      this.q.push({ t: 'o', n: n, h: h });
                    },
                    trigger: function (n) {
                      this.q.push({ t: 't', n: n });
                    },
                  };
                }
              })();
            `,
          }}
        />
        {/* LeadBooster Loader Script */}
        {/* <script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          async
        ></cript> */}
        <Salesiq />

        
        <Script src="https://cdn-in.pagesense.io/js/60034673689/951315c77e9d4021b7f24a6ebc690257.js" />

        {/* <Script src="https://cdn-in.pagesense.io/js/60034673689/951315c77e9d4021b7f24a6ebc690257.js" /> */}

        <Script
          id=""
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce(‘https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js’); })(document,‘script’); })(‘bElvO73o52V7ZMqj’);
            `,
          }}
        />
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WQ5LPRNM');
            `,
          }}
        />
      </head>
      <body
        className={`${jakarta.variable} antialiased`}
        suppressHydrationWarning={true}
      >
         <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQ5LPRNM"></iframe>
        </noscript>
        <AppProvider>
          <NavBar />
          <MobileNav />

          {children}
          <Footer />
          <PopupForm />
          <Whatsapp />
        </AppProvider>
      </body>
    </html>
  );
}

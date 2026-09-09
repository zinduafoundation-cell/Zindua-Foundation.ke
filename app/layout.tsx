import type { Metadata } from "next";
import "./globals.css";
import FloatingDonationButton from "./components/FloatingDonationButton";
import PageTransition from "./components/PageTransition";
import SiteNav from "./components/SiteNav";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "zindua Foundation",
  description:
    "Unlocking potential, creating opportunity, and shaping the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg-base)] text-[var(--text-main)]">
        {/* Meta (Facebook) Pixel - enabled if NEXT_PUBLIC_META_PIXEL_ID is set */}
        {PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');`}
            </Script>
            <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />` }} />
          </>
        )}

        <SiteNav />
        <main className="pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <FloatingDonationButton />
      </body>
    </html>
  );
}
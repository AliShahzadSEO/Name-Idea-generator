

import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // ...
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="IW3ie0bKpLn8jz5a03YsvJRQy6X2TWYnzvprqsR7cms" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

// Create a new Client Component that wraps RootLayout
export function ClientRootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    }
  }, []);

  return <RootLayout>{children}</RootLayout>;
}
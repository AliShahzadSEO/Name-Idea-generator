import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {GoogleAnalytics, } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Name Idea Generator | AI-Powered Business, Brand & Fantasy Name Generator",
  description:
    "Find the perfect name for your business, brand, or project with our AI-powered Name Idea Generator. Get unique, creative, and SEO-friendly name suggestions for businesses, domains, fantasy worlds, and more in seconds.",
  robots: { index: true, follow: true },

  alternates: {
    canonical: "https://www.nameideagenerator.com",
  },

  openGraph: {
    title:
      "Name Idea Generator | AI-Powered Business, Brand & Fantasy Name Generator",
    description:
      "Find the perfect name for your business, brand, or project with our AI-powered Name Idea Generator. Get unique, creative, and SEO-friendly name suggestions for businesses, domains, fantasy worlds, and more in seconds.",
    url: "https://www.nameideagenerator.com",
    images: [
      {
        url: "bg2.jpg",
        width: 800,
        height: 600,
        alt: "Name Idea Generator | AI-Powered Business, Brand & Fantasy Name Generator ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Name Idea Generator | AI-Powered Business, Brand & Fantasy Name Generator",
    description:
      "Find the perfect name for your business, brand, or project with our AI-powered Name Idea Generator. Get unique, creative, and SEO-friendly name suggestions for businesses, domains, fantasy worlds, and more in seconds.",
    images: ["bg2.jpg"],
  },
  keywords: ['name generator', 'Name Idea Generator', 'Idea name generator ', ' name maker',
    'Special name generator', 'fantasy name generator ', ' name generator fantasy', 'name crafter', 'common name generator',
     ' name generators', ' Fantasy name generator ', ' dnd name generator',
    'Sci-Fi name generator', 'Fictional name generator ', ' Historical name generator', 'Cultural name generator', 'Mythical name generator'],
};

export default function RootLayout({ children }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Name Idea Generator",
    "url": "https://www.nameideagenerator.com",
    "description":
      "Find the perfect name for your business, brand, or project with our AI-powered Name Idea Generator. Get unique, creative, and SEO-friendly name suggestions for businesses, domains, fantasy worlds, and more in seconds.",
    "keywords": [
      "name generator",
      "Name Idea Generator",
      "Idea name generator",
      "name maker",
      "Special name generator",
      "fantasy name generator",
      "name generator fantasy",
      "name crafter",
      "common name generator",
      "name generators",
      "Fantasy name generator",
      "dnd name generator",
      "Sci-Fi name generator",
      "Fictional name generator",
      "Historical name generator",
      "Cultural name generator",
      "Mythical name generator"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Name Idea Generator",
      "url": "https://www.nameideagenerator.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nameideagenerator.com/Logo.png"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="IW3ie0bKpLn8jz5a03YsvJRQy6X2TWYnzvprqsR7cms"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797994018929842"
          crossOrigin="anonymous"
        />
        {/* Inject homepage schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      </head>
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-CR7P6GW9K1" />
      </body>
    </html>
  );
}
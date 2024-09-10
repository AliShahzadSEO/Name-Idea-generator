import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Name Idea Generator | Generate Unique Name Ideas For Your Character",
  description:
    "Find the perfect name for your character with our Name Idea Generator. Whether it's for a fantasy world or a story, generate unique and creative names effortlessly!",
  robots: { index: true, follow: true },

  alternates: {
    canonical: "https://www.nameideagenerator.com",
  },

  openGraph: {
    title:
      "Name Idea Generator | Generate Unique Name Ideas For Your Character",
    description:
      "Find the perfect name for your character with our Name Idea Generator. Whether it's for a fantasy world or a story, generate unique and creative names effortlessly!!",
    url: "https://www.nameideagenerator.com",
    images: [
      {
        url: "bg2.jpg",
        width: 800,
        height: 600,
        alt: "Dragonborn Name Generator | Create Unique Demon Names | Name Idea Generator ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Name Idea Generator | Generate Unique Name Ideas For Your Character",
    description:
      "Find the perfect name for your character with our Name Idea Generator. Whether it's for a fantasy world or a story, generate unique and creative names effortlessly!",
    images: ["bg2.jpg"],
  },
  keywords: ['name generator', 'Name Idea Generator', 'Idea name generator ', ' name maker',
    'Special name generator', 'fantasy name generator ', ' name generator fantasy', 'name crafter', 'common name generator'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <body className={inter.className}>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
        <GoogleAnalytics gaId="G-CR7P6GW9K1"/>
    </html>
  );
}

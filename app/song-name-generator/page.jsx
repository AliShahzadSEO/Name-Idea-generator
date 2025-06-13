import SongNameGenerator from "@/components/song-name-generator/Song-Name-Generator";
import Head from "next/head";

export const metadata = {
  title: 'Song Name Generator | Random Song Name Generator With Meaning',
  description: "Generate unique and catchy song names with meanings using our Song Name Generator. Ideal for songwriters, musicians, and creative projects looking for inspiration!",
  
  openGraph: {
    title: 'Song Name Generator | Random Song Name Generator With Meaning',
    description: "Generate unique and catchy song names with meanings using our Song Name Generator. Ideal for songwriters, musicians, and creative projects looking for inspiration!",
    url: 'https://www.nameideagenerator.com/song-name-generator',
    images: [
      {
        url: 'pop.jpg',
        width: 800,
        height: 600,
        alt: 'Song Name Generator | Random Song Name Generator With Meaning',
        type: 'image/jpg'
      },
    ],
    locale: 'en_US',
    type: 'website',
    site_name: 'Name Idea Generator',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Song Name Generator | Random Song Name Generator With Meaning',
    description: "Generate unique and catchy song names with meanings using our Song Name Generator. Ideal for songwriters, musicians, and creative projects looking for inspiration!",
    images: ['pop.jpg'],
    type: 'image/jpg'
  },

  keywords: [
    'Song Name Generator', 'random song name generator', 'rap song name generator', 'ai song name generator',
    'song name generator ai', 'song name generator with keywords', 'rock song name generator',
    'lofi song name generator', 'metal song name generator'
  ],
  
  alternates: {
    canonical: "https://www.nameideagenerator.com/song-name-generator"
  },
  robots: { index: true, follow: true },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Song Name Generator",
  "url": "https://www.nameideagenerator.com/song-name-generator",
  "description": "Generate unique and catchy song names with meanings using our Song Name Generator. Ideal for songwriters, musicians, and creative projects looking for inspiration!",
  "image": "https://www.nameideagenerator.com/pop.jpg",
  "keywords": [
    "Song Name Generator",
    "random song name generator",
    "rap song name generator",
    "ai song name generator",
    "song name generator ai",
    "song name generator with keywords",
    "rock song name generator",
    "lofi song name generator",
    "metal song name generator"
  ],
  "author": {
    "@type": "Organization",
    "name": "Name Idea Generator",
    "url": "https://www.nameideagenerator.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Name Idea Generator",
    "url": "https://www.nameideagenerator.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nameideagenerator.com/Logo.png"
    }
  },
  "brand": {
    "@type": "Brand",
    "name": "Name Idea Generator",
    "logo": "https://www.nameideagenerator.com/Logo.png"
  }
};

const page = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <SongNameGenerator />
    </>
  );
};

export default page;

import AlienNameGenerator from "@/components/alien-name-generator/Alien-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Alien Name Generator – Create Unique Sci-Fi Alien Names Now',
  description: "Use our AI Alien Name Generator to craft unique male and female alien names with deep meanings. Perfect for sci-fi, games, and stories. Generate the perfect extraterrestrial name instantly—try it now for free!",
  
  openGraph: {
    title: 'AI Alien Name Generator – Create Unique Sci-Fi Alien Names Now',
    description: "Use our AI Alien Name Generator to craft unique male and female alien names with deep meanings. Perfect for sci-fi, games, and stories. Generate the perfect extraterrestrial name instantly—try it now for free!",
    url: 'https://www.nameideagenerator.com/alien-name-generator',
    images: [
      {
        url: 'alien.webp',
        width: 800,
        height: 600,
        alt: 'Alien Name Generator | Create Random Alien Name Generator Male & Female',
        type: 'image/webp',  // Added og:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'AI Alien Name Generator – Create Unique Sci-Fi Alien Names Now',
    description: "Use our AI Alien Name Generator to craft unique male and female alien names with deep meanings. Perfect for sci-fi, games, and stories. Generate the perfect extraterrestrial name instantly—try it now for free!",
    images: [
      {
        url: 'alien.webp',
        type: 'image/webp'  // Added twitter:image:type
      }
    ],
  },
  
  robots:{index:true, follow: true},

  keywords: ['alien name generator', 'random alien name generator', 'alien name generator male', 'alien name generator female', 'alien name generator girl', 'alien name generator fantasy'],
  canonical: 'https://www.nameideagenerator.com/alien-name-generator',
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/alien-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Alien Name Generator",
    "url": "https://www.nameideagenerator.com/alien-name-generator",
    "title": "AI Alien Name Generator – Create Unique Sci-Fi Alien Names Now",
    "description":
      "Use our AI Alien Name Generator to craft unique male and female alien names with deep meanings. Perfect for sci-fi, games, and stories. Generate the perfect extraterrestrial name instantly—try it now for free!",
    "image": "https://www.nameideagenerator.com/alien.webp",
    "keywords": [
      "alien name generator",
      "random alien name generator",
      "alien name generator male",
      "alien name generator female",
      "alien name generator girl",
      "alien name generator fantasy",
      "dnd alien name generator",
      "female alien name generator",
      "alien name generator pathfinder",
      "bg3 alien name generator",
      "dnd alien name generator",
      "fantasy alien name generator",
      "alien names generator",
      "alien names",
    ],
    "author": {
      "@type": "Organization",
      "name": "Name Idea Generator",
      "url": "https://www.nameideagenerator.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Name Idea Generator",
      "url": "https://www.nameideagenerator.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nameideagenerator.com/Logo.png",
      },
    },
    "brand": {
      "@type": "Brand",
      "name": "Name Idea Generator",
      "logo": "https://www.nameideagenerator.com/Logo.png",
    },
  };

  return (
    <div>
      {/* Inject Optimized Schema Markup */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <AlienNameGenerator />
    </div>
  );
};
  
  export default page
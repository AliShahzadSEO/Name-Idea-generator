import TabaxiNameGenerator from "@/components/tabaxi-name-generator/Tabaxi-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Tabaxi Name Generator – Create Unique DnD Tabaxi Names Now',
  description: "Use our AI Tabaxi Name Generator to craft unique, lore-rich names with deep meanings. Perfect for DnD, RPGs, and fantasy writing. Generate the perfect Tabaxi name instantly—try it now for free!",
  
  openGraph: {
    title: 'AI Tabaxi Name Generator – Create Unique DnD Tabaxi Names Now',
    description: "Use our AI Tabaxi Name Generator to craft unique, lore-rich names with deep meanings. Perfect for DnD, RPGs, and fantasy writing. Generate the perfect Tabaxi name instantly—try it now for free!",
    url: 'https://www.nameideagenerator.com/tabaxi-name-generator',
    images: [
      {
        url: 'tabaxi.jpeg',
        width: 800,
        height: 600,
        alt: 'AI Tabaxi Name Generator – Create Unique DnD Tabaxi Names Now',
        type: 'image/jpeg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Tabaxi Name Generator – Create Unique DnD Tabaxi Names Now',
    description: "Use our AI Tabaxi Name Generator to craft unique, lore-rich names with deep meanings. Perfect for DnD, RPGs, and fantasy writing. Generate the perfect Tabaxi name instantly—try it now for free!",
    images: ['tabaxi.jpeg'],
    type: 'image/jpeg'  // Added twitter:image:type
  },

  keywords: ['tabaxi name generator', ' dnd tabaxi name generator', 'tabaxi name generator 5e', 'random tabaxi name generator',
     'dnd 5e tabaxi name generator', 'tabaxi name generator dnd', 'd&d tabaxi name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/tabaxi-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tabaxi Name Generator",
    "url": "https://www.nameideagenerator.com/tabaxi-name-generator",
    "title": "AI Tabaxi Name Generator – Create Unique DnD Tabaxi Names Now",
    "description":
      "Use our AI Tabaxi Name Generator to craft unique, lore-rich names with deep meanings. Perfect for DnD, RPGs, and fantasy writing. Generate the perfect Tabaxi name instantly—try it now for free!",
    "image": "https://www.nameideagenerator.com/tabaxi.jpeg",
    "keywords": [
      "tabaxi name generator",
      "dnd tabaxi name generator",
      "tabaxi name generator 5e",
      "random tabaxi name generator",
      "dnd 5e tabaxi name generator",
      "tabaxi name generator dnd",
      "d&d tabaxi name generator",
      "tabaxi name generator pathfinder",
      "bg3 tabaxi name generator",
      "random tabaxi name generator",
      "tabaxi names generator",
      "tabaxi names",
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
      <TabaxiNameGenerator />
    </div>
  );
};
  
  export default page
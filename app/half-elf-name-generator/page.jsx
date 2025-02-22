import HalfElfNameGenerator from "@/components/half-elf-name-generator/Half-Elf-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Half-Elf Name Generator – Find the Perfect DnD Half-Elf Name Now',
  description: "Use our AI Half-Elf Name Generator to create unique, fantasy-inspired names with deep meanings. Perfect for DnD, RPGs, and creative writing. Generate the ideal Half-Elf name instantly—try it now for free!",
  
  openGraph: {
    title: 'AI Half-Elf Name Generator – Find the Perfect DnD Half-Elf Name Now',
    description: "Use our AI Half-Elf Name Generator to create unique, fantasy-inspired names with deep meanings. Perfect for DnD, RPGs, and creative writing. Generate the ideal Half-Elf name instantly—try it now for free!",
    url: 'https://www.nameideagenerator.com/half-elf-name-generator',
    images: [
      {
        url: 'half-demon.webp',
        width: 800,
        height: 600,
        alt: 'AI Half-Elf Name Generator – Find the Perfect DnD Half-Elf Name Now',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Half-Elf Name Generator – Find the Perfect DnD Half-Elf Name Now',
    description: "Use our AI Half-Elf Name Generator to create unique, fantasy-inspired names with deep meanings. Perfect for DnD, RPGs, and creative writing. Generate the ideal Half-Elf name instantly—try it now for free!",
    images: ['half-demon.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['half elf name generator', 'dnd half elf name generator', 'high half elf name generator', 'wood half elf name generator',
     'half elf name generator dnd', 'random half elf name generator', 'drow half elf name generator', 'half elf name generator pathfinder', 'bg3 half elf name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/half-elf-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Half-Elf Name Generator",
    "url": "https://www.nameideagenerator.com/half-elf-name-generator",
    "title": "AI Half-Elf Name Generator – Find the Perfect DnD Half-Elf Name Now",
    "description":
      "Use our AI Half-Elf Name Generator to create unique, fantasy-inspired names with deep meanings. Perfect for DnD, RPGs, and creative writing. Generate the ideal Half-Elf name instantly—try it now for free!",
    "image": "https://www.nameideagenerator.com/half-demon.webp",
    "keywords": [
      "half elf name generator ",
      "dnd half elf name generator",
      "high half elf name generator",
      "wood half elf name generator",
      "half elf name generator dnd",
      "random half elf name generator",
      "drow half elf name generator",
      "half elf name generator pathfinder",
      "bg3 half elf name generator",
      "random half elf name generator",
      "dnd half elf name generator",
      "half elf names generator",
      "half elf names",
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
      <HalfElfNameGenerator />
    </div>
  );
};
  
  export default page
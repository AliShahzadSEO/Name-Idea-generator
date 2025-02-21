import DragonbornNameGenerator from "@/components/dragonborn-name-generator/DragonbornNameGenerator"
import Script from "next/script";
export const metadata = {
  title: 'AI Dragonborn Name Generator – Create Epic DnD Dragonborn Names Now',
  description: "Use our AI Dragonborn Name Generator to forge powerful names with deep meanings. Perfect for DnD and fantasy characters. Generate unique Dragonborn names instantly—try it now!",
  
  openGraph: {
    title: 'AI Dragonborn Name Generator – Create Epic DnD Dragonborn Names Now',
    description: "Use our AI Dragonborn Name Generator to forge powerful names with deep meanings. Perfect for DnD and fantasy characters. Generate unique Dragonborn names instantly—try it now!",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: 'bg-dragonborn.webp',
        width: 800,
        height: 600,
        alt: 'AI Dragonborn Name Generator – Create Epic DnD Dragonborn Names Now',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Dragonborn Name Generator – Create Epic DnD Dragonborn Names Now',
    description: "Use our AI Dragonborn Name Generator to forge powerful names with deep meanings. Perfect for DnD and fantasy characters. Generate unique Dragonborn names instantly—try it now!",
    images: ['bg-dragonborn.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['demon name generator', 'dnd dragonborn name generator', 'dragonborn name generator dnd', 'random dragonborn name generator', 'bg3 dragonborn name generator', 'female dragonborn name generator', 'dragonborn name generator bg3', 'dragonborn name generator 5e', '5e dragonborn name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/dragonborn-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Demon Name Generator",
    "url": "https://www.nameideagenerator.com/dragonborn-name-generator",
    "description":
      "Use our AI Dragonborn Name Generator to forge powerful names with deep meanings. Perfect for DnD and fantasy characters. Generate unique Dragonborn names instantly—try it now!",
    "image": "https://www.nameideagenerator.com/bg-dragonborn.webp",
    "keywords": [
      "demon name generator ",
      "fantasy names",
      "RPG names",
      "dnd dragonborn name generator",
      "dragonborn name generator dnd",
      "random dragonborn name generator",
      "bg3 dragonborn name generator",
      "female dragonborn name generator",
      "dragonborn name generator bg3",
      "dragonborn name generator 5e",
      "dnd name generator",
      "5e dragonborn name generator",
      "dragonborn names",
      "dragonborn names generator",
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
      <DragonbornNameGenerator />
    </div>
  );
};

export default page

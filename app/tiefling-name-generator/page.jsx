import TieflingNameGenerator from "@/components/tiefling-name-generator/TieflingNameGenerator"
import Script from "next/script";

export const metadata = {
  title: 'AI Tiefling Name Generator – Create Fiery & Mysterious Names Now',
  description: "Generate unique, AI-powered Tiefling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Try it now and summon the perfect name instantly!",
  
  openGraph: {
    title: 'AI Tiefling Name Generator – Create Fiery & Mysterious Names Now',
    description: "Generate unique, AI-powered Tiefling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Try it now and summon the perfect name instantly!",
    url: 'https://www.nameideagenerator.com/tiefling-name-generator',
    images: [
      {
        url: 'female.jpg',
        width: 800,
        height: 600,
        alt: 'AI Tiefling Name Generator – Create Fiery & Mysterious Names Now',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Tiefling Name Generator – Create Fiery & Mysterious Names Now',
    description: "Generate unique, AI-powered Tiefling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Try it now and summon the perfect name instantly!",
    images: ['female.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Tiefling name generator', 'tiefling name generator 5e', 'tiefling name generator dnd', 'dnd tiefling name generator',
     'female tiefling name generator', 'tiefling name generator pathfinder', 'bg3 tiefling name generator'],
     robots:{index:true, follow: true},
     alternates:{
       canonical:"https://www.nameideagenerator.com/tiefling-name-generator"
     },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tiefling Name Generator",
    "url": "https://www.nameideagenerator.com/tiefling-name-generator",
    "title": "AI Tiefling Name Generator – Create Fiery & Mysterious Names Now",
    "description":
      "Generate unique, AI-powered Tiefling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Try it now and summon the perfect name instantly!",
    "image": "https://www.nameideagenerator.com/female.jpg",
    "keywords": [
      "Tiefling name generator",
      "fantasy names",
      "RPG names",
      "tiefling name generator 5e",
      "unique demon names",
      "tiefling name generator dnd",
      "dnd tiefling name generator",
      "female tiefling name generator",
      "tiefling name generator pathfinder",
      "bg3 tiefling name generator",
      "dnd tiefling name generator",
      "fantasy tiefling name generator",
      "biblical tiefling name generator",
      "frost tiefling name generator",
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
      <TieflingNameGenerator />
    </div>
  );
};

export default page

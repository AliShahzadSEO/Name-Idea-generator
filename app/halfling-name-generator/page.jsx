import HalflingNameGenerator from "@/components/halfling-name-generator/Halfling-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Halfling Name Generator – Create Charming DnD Halfling Names Now',
  description: "Use our AI Halfling Name Generator to create unique Halfling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect name instantly—try it now!",
  
  openGraph: {
    title: 'AI Halfling Name Generator – Create Charming DnD Halfling Names Now',
    description: "Use our AI Halfling Name Generator to create unique Halfling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect name instantly—try it now!",
    url: 'https://www.nameideagenerator.com/halfling-name-generator',
    images: [
      {
        url: 'halfling.webp',
        width: 800,
        height: 600,
        alt: 'AI Halfling Name Generator – Create Charming DnD Halfling Names Now',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Halfling Name Generator – Create Charming DnD Halfling Names Now',
    description: "Use our AI Halfling Name Generator to create unique Halfling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect name instantly—try it now!",
    images: ['halfling.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['Halfling name generator', 'dnd halfling name generator', 'halfling name generator 5e', 'random halfling name generator',
     'female halfling name generator', 'lightfoot halfling name generator ', 'halfling name generator dnd', 'fantasy halfling name generator', 'dnd 5e halfling name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/halfling-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Demon Name Generator",
    "url": "https://www.nameideagenerator.com/halfling-name-generator",
    "description":
      "Use our AI Halfling Name Generator to create unique Halfling names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect name instantly—try it now!",
    "image": "https://www.nameideagenerator.com/halfling.webp",
    "keywords": [
      "Halfling name generator ",
      "fantasy names",
      "RPG names",
      "dnd halfling name generator",
      "halfling name generator 5e",
      "random halfling name generator",
      "female halfling name generator",
      "lightfoot halfling name generator",
      "halfling name generator dnd",
      "fantasy halfling name generator",
      "dnd 5e halfling name generator",
      "halfling names generator",
      "halfling names",
      "fucking halfling names generator",
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
      <HalflingNameGenerator />
    </div>
  );
};
  
  export default page
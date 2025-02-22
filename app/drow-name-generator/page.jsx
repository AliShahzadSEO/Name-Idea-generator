import DrowNameGenerator from "@/components/drow-name-generator/DrowNameGenerator"
import Script from "next/script";

export const metadata = {
  title: 'AI Drow Name Generator – Create Mysterious DnD Drow Names Now',
  description: "Use our AI Drow Name Generator to discover unique Drow names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect name instantly—try it now for free!",
  
  openGraph: {
    title: 'AI Drow Name Generator – Create Mysterious DnD Drow Names Now',
    description: "Use our AI Drow Name Generator to discover unique Drow names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect name instantly—try it now for free!",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: '/drowname.webp',
        width: 800,
        height: 600,
        alt: 'AI Drow Name Generator – Create Mysterious DnD Drow Names Now',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Drow Name Generator – Create Mysterious DnD Drow Names Now',
    description: "Use our AI Drow Name Generator to discover unique Drow names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect name instantly—try it now for free!",
    images: ['/drowname.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['drow name generator', 'drow names', 'female drow names', 'drow elf names', 'drow names 5e', 'drow female names', 'drow male names', 'male drow names', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/drow-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kobold Name Generator",
    "url": "https://www.nameideagenerator.com/drow-name-generator",
    "title": "AI Drow Name Generator – Create Mysterious DnD Drow Names Now",
    "description":
      "Use our AI Kobold Name Generator to create random Kobold names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate the perfect name instantly—try it now for free!",
    "image": "https://www.nameideagenerator.com/drowname.webp",
    "keywords": [
      "drow name generator",
      "dnd drow name generator",
      "drow elf names",
      "random drow name generator",
      "drow names 5e",
      "drow female names ",
      "drow male names",
      "male drow names",
      "DnD names",
      "random drow names generator",
      "female drow names",
      "drow names",
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
      <DrowNameGenerator />
    </div>
  );
};

export default page

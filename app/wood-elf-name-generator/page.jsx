import WoodElfNameGenerator from "@/components/wood-elf-name-generator/Wood-Elf-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Wood Elf Name Generator – Create Enchanting Wood Elf Names Now',
  description: "Use our AI Wood Elf Name Generator to craft mystical names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect Wood Elf name instantly—try it now!",
  
  openGraph: {
    title: 'AI Wood Elf Name Generator – Create Enchanting Wood Elf Names Now',
    description: "Use our AI Wood Elf Name Generator to craft mystical names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect Wood Elf name instantly—try it now!",
    url: 'https://www.nameideagenerator.com/wood-elf-name-generator',
    images: [
      {
        url: 'Wood_Elf.webp',
        width: 800,
        height: 600,
        alt: 'AI Wood Elf Name Generator – Create Enchanting Wood Elf Names Now',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Wood Elf Name Generator – Create Enchanting Wood Elf Names Now',
    description: "Use our AI Wood Elf Name Generator to craft mystical names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect Wood Elf name instantly—try it now!",
    images: ['Wood_Elf.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['wood elf name generator', 'wood elf name generator dnd', 'female wood elf name generator', 'dnd wood elf name generator',
     'wood elf name generator skyrim', 'skyrim wood elf name generator', 'half wood elf name generator', 'random wood elf name generator'],
     alternates:{
      canonical:"https://www.nameideagenerator.com/wood-elf-name-generator"
    },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Wood Elf Name Generator",
    "url": "https://www.nameideagenerator.com/wood-elf-name-generator",
    "title": "AI Wood Elf Name Generator – Create Enchanting Wood Elf Names Now",
    "description":
      "Use our AI Wood Elf Name Generator to craft mystical names with deep meanings. Perfect for DnD, RPGs, and fantasy stories. Generate the perfect Wood Elf name instantly—try it now!",
    "image": "https://www.nameideagenerator.com/Wood_Elf.webp",
    "keywords": [
      "wood elf name generator ",
      "fantasy names",
      "RPG names",
      "wood elf name generator dnd",
      "female wood elf name generator",
      "dnd wood elf name generator",
      "wood elf name generator skyrim",
      "skyrim wood elf name generator",
      "half wood elf name generator",
      "random wood elf name generator",
      "dnd wood elf name generator",
      "wood elf names generator",
      "wood elf names",
      "fucking wood elf names generator",
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
      <WoodElfNameGenerator />
    </div>
  );
};
  
  export default page
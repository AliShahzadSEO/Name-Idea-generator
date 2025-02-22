import KoboldNameGenerator from "@/components/kobold-name-generator/Kobold-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Kobold Name Generator – Create Unique & Mischievous Kobold Names Now',
  description: "Use our AI Kobold Name Generator to create random Kobold names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate the perfect name instantly—try it now for free!",
  
  openGraph: {
    title: 'AI Kobold Name Generator – Create Unique & Mischievous Kobold Names Now',
    description: "Use our AI Kobold Name Generator to create random Kobold names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate the perfect name instantly—try it now for free!",
    url: 'https://www.nameideagenerator.com/kobold-name-generator',
    images: [
      {
        url: 'kobold.jpg',
        width: 800,
        height: 600,
        alt: 'AI Kobold Name Generator – Create Unique & Mischievous Kobold Names Now',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Kobold Name Generator – Create Unique & Mischievous Kobold Names Now',
    description: "Use our AI Kobold Name Generator to create random Kobold names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate the perfect name instantly—try it now for free!",
    images: ['kobold.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Kobold Name Generator', 'kobold name generator pathfinder', 'dnd kobold name generator ', 'random kobold name generator',
     'female kobold name generator', 'd&d 3.5 kobold name generator ', 'kobold name generator 5e', 'dungeons and dragons kobold name generator', 'pathfinder kobold name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/kobold-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kobold Name Generator",
    "url": "https://www.nameideagenerator.com/kobold-name-generator",
    "title": "AI Kobold Name Generator – Create Unique & Mischievous Kobold Names Now",
    "description":
      "Use our AI Kobold Name Generator to create random Kobold names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate the perfect name instantly—try it now for free!",
    "image": "https://www.nameideagenerator.com/kobold.jpg",
    "keywords": [
      "Kobold Name Generator",
      "dnd Kobold name generator",
      "kobold name generator pathfinder",
      "random kobold name generator",
      "female kobold name generator",
      "d&d 3.5 kobold name generator ",
      "kobold name generator 5e",
      "dungeons and dragons kobold name generator",
      "pathfinder kobold name generator",
      "random kobold name generator",
      "kobold names generator",
      "kobold names",
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
      <KoboldNameGenerator />
    </div>
  );
};
  
  export default page
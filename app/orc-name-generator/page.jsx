import ORCNameGenerator from "@/components/orc-name-generator/OrcNameGenerator"
import Script from "next/script";

export const metadata = {
  title: 'AI Orc Name Generator – Create Fierce & Powerful Orc Names Now',
  description: "Use our AI Orc Name Generator to forge warrior-worthy names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate unique orc names instantly—try it now!",
  
  openGraph: {
    title: 'AI Orc Name Generator – Create Fierce & Powerful Orc Names Now',
    description: "Use our AI Orc Name Generator to forge warrior-worthy names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate unique orc names instantly—try it now!",
    url: 'https://www.nameideagenerator.com/orc-name-generator',
    images: [
      {
        url: 'orc-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'AI Orc Name Generator – Create Fierce & Powerful Orc Names Now',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Orc Name Generator – Create Fierce & Powerful Orc Names Now',
    description: "Use our AI Orc Name Generator to forge warrior-worthy names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate unique orc names instantly—try it now!",
    images: ['orc-name-generator.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Orc Name Generator', 'half orc name generator ', 'orc name generator skyrim', 'half-orc name generator',
     'skyrim orc name generator', 'wow orc name generator', 'dnd orc name generator', 'orc name generator wow', 'orc name generator dnd'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/orc-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Orc Name Generator",
    "url": "https://www.nameideagenerator.com/orc-name-generator",
    "description":
      "Use our AI Orc Name Generator to forge warrior-worthy names with deep meanings. Perfect for DnD, RPGs, and fantasy worlds. Generate unique orc names instantly—try it now!",
    "image": "https://www.nameideagenerator.com/orc-name-generator.jpg",
    "keywords": [
      "Orc Name Generator ",
      "fantasy names",
      "RPG names",
      "half orc name generator",
      "orc name generator skyrim",
      "half-orc name generator",
      "skyrim orc name generator",
      "wow orc name generator",
      "dnd orc name generator",
      "orc name generator wow",
      "orc name generator dnd",
      "orc names generator",
      "orc names",
      "fucking orc names generator",
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
      <ORCNameGenerator />
    </div>
  );
};

export default page

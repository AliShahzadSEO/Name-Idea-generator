import IslandNameGenerator from "@/components/island-name-generator/Island-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Island Name Generator – Create Unique Island Names With Meaning',
  description: "Use our AI Island Name Generator to discover island names with meaning that evoke mystery and adventure. Perfect for stories, maps, and world-building. Generate the perfect island name instantly—try it now for free!",
  
  openGraph: {
    title: 'AI Island Name Generator – Create Unique Island Names With Meaning',
    description: "Use our AI Island Name Generator to discover island names with meaning that evoke mystery and adventure. Perfect for stories, maps, and world-building. Generate the perfect island name instantly—try it now for free!",
    url: 'https://www.nameideagenerator.com/island-name-generator',
    images: [
      {
        url: 'island1.jpg',
        width: 800,
        height: 600,
        alt: 'AI Island Name Generator – Create Unique Island Names With Meaning',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Island Name Generator – Create Unique Island Names With Meaning',
    description: "Use our AI Island Name Generator to discover island names with meaning that evoke mystery and adventure. Perfect for stories, maps, and world-building. Generate the perfect island name instantly—try it now for free!",
    images: ['island1.jpg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['island name generator', 'fantasy island names', 'acnh island name generator ', 'random island name generator',
     'island name generator animal crossing', 'fantasy island name generator ', 'island name generator fantasy', 'one piece island name generator', 'island name generator acnh'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/island-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Island Name Generator",
    "url": "https://www.nameideagenerator.com/island-name-generator",
    "title": "AI Island Name Generator – Create Unique Island Names With Meaning",
    "description":
      "Use our AI Island Name Generator to discover island names with meaning that evoke mystery and adventure. Perfect for stories, maps, and world-building. Generate the perfect island name instantly—try it now for free!",
    "image": "https://www.nameideagenerator.com/island1.jpg",
    "keywords": [
      "island name generator",
      "fantasy island names",
      "acnh island name generator",
      "random island name generator",
      "island name generator animal crossing",
      "fantasy island name generator",
      "island name generator fantasy",
      "one piece island name generator",
      "island name generator acnh",
      "island names generator",
      "island names",
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
      <IslandNameGenerator />
    </div>
  );
};
  
  export default page
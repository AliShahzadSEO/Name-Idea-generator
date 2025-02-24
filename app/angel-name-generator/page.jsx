import AngelNameGenerator from "@/components/angel-name-generator/Angel-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Angel Name Generator – Create Divine & Fallen Angel Names With Meaning',
  description: "Use our AI Angel Name Generator to craft unique names with meaning, including fallen and dark angel names. Perfect for stories, RPGs, and fantasy worlds. Generate the perfect angelic name now—try it for free!",
  
  openGraph: {
    title: 'AI Angel Name Generator – Create Divine & Fallen Angel Names With Meaning',
    description: "Use our AI Angel Name Generator to craft unique names with meaning, including fallen and dark angel names. Perfect for stories, RPGs, and fantasy worlds. Generate the perfect angelic name now—try it for free!",
    url: 'https://www.nameideagenerator.com/angel-name-generator',
    images: [
      {
        url: 'angel.jpg',
        width: 800,
        height: 600,
        alt: 'AI Angel Name Generator – Create Divine & Fallen Angel Names With Meaning',
        type: 'image/jpg',
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Angel Name Generator – Create Divine & Fallen Angel Names With Meaning',
    description: "Use our Angel Name Generator to create unique and meaningful names, including options for fallen angels and dark angels. Perfect for finding the ideal blood angel name!",
    images: ['angel.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },
  robots:{index:true, follow: true},

  keywords: ['angel name generator', 'fallen angel name generator', 'dark angel name generator', 'blood angel name generator', 'angel name generator dnd', 'random angel name generator', 'angel name generator with meaning', 'female fallen angel name generator', 'fantasy angel name generator', 'female angel name generator'],
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/angel-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Island Name Generator",
    "url": "https://www.nameideagenerator.com/angel-name-generator",
    "title": "AI Angel Name Generator – Create Divine & Fallen Angel Names With Meaning",
    "description":
      "Use our AI Angel Name Generator to craft unique names with meaning, including fallen and dark angel names. Perfect for stories, RPGs, and fantasy worlds. Generate the perfect angelic name now—try it for free!",
    "image": "https://www.nameideagenerator.com/angel.jpg",
    "keywords": [
      "angel name generator",
      "fallen angel name generator",
      "dark angel name generator",
      "blood angel name generator",
      "angel name generator dnd",
      "random angel name generator",
      "angel name generator with meaning",
      "female fallen angel name generator",
      "fantasy angel name generator",
      "female angel name generator",
      "angel names",
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
      <AngelNameGenerator />
    </div>
  );
};
  
  export default page
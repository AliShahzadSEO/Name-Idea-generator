import RussianNameGenerator from "@/components/russian-name-generator/Russian-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Russian Name Generator – Create Authentic Russian Names Instantly',
  description: "Use our AI Russian Name Generator to create random Russian names with deep meanings. Perfect for characters, stories, and creative projects. Generate the perfect name now—try it for free!",
  
  openGraph: {
    title: 'Robot Name Generator | Random Robot Name Generator With Meaning',
    description: "Use our AI Russian Name Generator to create random Russian names with deep meanings. Perfect for characters, stories, and creative projects. Generate the perfect name now—try it for free!",
    url: 'https://www.nameideagenerator.com/russian-name-generator',
    images: [
      {
        url: 'Russian.webp',
        width: 800,
        height: 600,
        alt: 'AI Russian Name Generator – Create Authentic Russian Names Instantly',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Russian Name Generator – Create Authentic Russian Names Instantly',
    description: "Use our AI Russian Name Generator to create random Russian names with deep meanings. Perfect for characters, stories, and creative projects. Generate the perfect name now—try it for free!",
    images: ['Russian.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['russian Name Generator', ' russian name generator male ', 'russian name generator fantasy', 'random russian name generator',
     'russian name generator female', 'russian name generator with meaning', 'english to russian name generator', 'female russian name generator', 'old russian name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/russian-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "russian Name Generator",
    "url": "https://www.nameideagenerator.com/russian-name-generator",
    "title": "AI Russian Name Generator – Create Authentic Russian Names Instantly",
    "description":
      "Use our AI Russian Name Generator to create random Russian names with deep meanings. Perfect for characters, stories, and creative projects. Generate the perfect name now—try it for free!",
    "image": "https://www.nameideagenerator.com/Russian.webp",
    "keywords": [
      "russian Name Generator",
      "russian name generator male",
      "russian name generator fantasy",
      "random russian name generator",
      "russian name generator female",
      "russian name generator with meaning",
      "english to russian name generator",
      "female tiefling name generator",
      "female russian name generator",
      "old russian name generator",
      "dnd russian name generator",
      "fantasy russian name generator",
      "biblical russian name generator",
      "frost russian name generator",
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
      <RussianNameGenerator />
    </div>
  );
};
  
  export default page
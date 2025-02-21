import GoblinNameGenerator from "@/components/goblin-name-generator/Goblin-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Goblin Name Generator – Create Mischievous & Unique Names Now',
  description: "Use our AI Goblin Name Generator to create random goblin names with deep meanings. Perfect for DnD, RPGs, and creative projects. Try it now and bring your goblin character to life!",
  
  openGraph: {
    title: 'Goblin Name Generator | Random DnD Goblin Name With Meaning',
    description: "Use our AI Goblin Name Generator to create random goblin names with deep meanings. Perfect for DnD, RPGs, and creative projects. Try it now and bring your goblin character to life!",
    url: 'https://www.nameideagenerator.com/goblin-name-generator',
    images: [
      {
        url: 'Goblin.jpg',
        width: 800,
        height: 600,
        alt: 'Goblin Name Generator | Random DnD Goblin Name With Meaning',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Goblin Name Generator | Random DnD Goblin Name With Meaning',
    description: "Use our AI Goblin Name Generator to create random goblin names with deep meanings. Perfect for DnD, RPGs, and creative projects. Try it now and bring your goblin character to life!",
    images: ['Goblin.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Goblin name generator', 'dnd goblin name generator', 'goblin name generator dnd', 'goblin name generator wow',
     'wow goblin name generator', 'random goblin name generator', 'goblin name generator 5e', 'female goblin name generator', 'harry potter goblin name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/goblin-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Demon Name Generator",
    "url": "https://www.nameideagenerator.com/demon-name-generator",
    "description":
      "Use our AI Goblin Name Generator to create random goblin names with deep meanings. Perfect for DnD, RPGs, and creative projects. Try it now and bring your goblin character to life!",
    "image": "https://www.nameideagenerator.com/demonpic.jpg",
    "keywords": [
      "Goblin name generator ",
      "fantasy names",
      "RPG names",
      "dnd goblin name generator",
      "goblin name generator wow",
      "wow goblin name generator",
      "random goblin name generator",
      "goblin name generator 5e",
      "female goblin name generator",
      "harry potter goblin name generator",
      "dnd name generator",
      "fantasy goblin name generator",
      "goblin names",
      "goblin names generator",
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
      <GoblinNameGenerator />
    </div>
  );
};
  
  export default page
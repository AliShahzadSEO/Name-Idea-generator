import DemonNameGenerator from "@/components/demon-name-generator/Demon-name-generator";
import Script from "next/script";

export const metadata = {
  title: 'AI Demon Name Generator – Create Dark & Powerful Names Instantly',
  description: "Generate eerie, AI-powered demon names with deep meanings. Perfect for stories, games, and more. Try our advanced AI name generator now and summon the perfect name! What will your demon be called?",
  
  openGraph: {
    title: 'AI Demon Name Generator – Create Dark & Powerful Names Instantly',
    description: "Generate eerie, AI-powered demon names with deep meanings. Perfect for stories, games, and more. Try our advanced AI name generator now and summon the perfect name! What will your demon be called?",
    url: 'https://www.nameideagenerator.com/demon-name-generator',
    images: [
      {
        url: 'demonpic.jpg',
        width: 800,
        height: 600,
        alt: 'AI Demon Name Generator – Create Dark & Powerful Names Instantly',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Demon Name Generator – Create Dark & Powerful Names Instantly',
    description: "Generate eerie, AI-powered demon names with deep meanings. Perfect for stories, games, and more. Try our advanced AI name generator now and summon the perfect name! What will your demon be called?",
    images: ['demonpic.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['demon name generator', 'fantasy names', 'RPG names', 'demon names', 'unique demon names', 'female demon name generator', 
    'demon name generator male', 'random demon name generator', 'demon name generator female', 'hazbin hotel demon name generator', 'dnd demon name generator', 
    'fantasy demon name generator', 'biblical demon name generator', 'frost demon name generator'],
  
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/demon-name-generator"
  },
  
  robots:{index:true, follow: true},
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Demon Name Generator",
    "url": "https://www.nameideagenerator.com/demon-name-generator",
    "title": "AI Demon Name Generator – Create Dark & Powerful Names Instantly",
    "description":
      "Generate eerie, AI-powered demon names with deep meanings. Perfect for stories, games, and more. Try our advanced AI name generator now and summon the perfect name! What will your demon be called?",
    "image": "https://www.nameideagenerator.com/demonpic.jpg",
    "keywords": [
      "demon name generator ",
      "fantasy names",
      "RPG names",
      "demon names",
      "unique demon names",
      "female demon name generator",
      "demon name generator male",
      "random demon name generator",
      "demon name generator female",
      "hazbin hotel demon name generator",
      "dnd demon name generator",
      "fantasy demon name generator",
      "biblical demon name generator",
      "frost demon name generator",
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
      <DemonNameGenerator />
    </div>
  );
};

export default page
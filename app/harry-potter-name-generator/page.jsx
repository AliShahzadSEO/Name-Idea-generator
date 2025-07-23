import HarryPotterNameGenerator from "@/components/harry-potter-name-generator/Harry-Potter-Name-Generator"
import Script from "next/script";

export const metadata = {
  title: 'AI Harry Potter Name Generator – Create Your Wizard Identity',
  description: "Unleash your magical persona with our AI Harry Potter Name Generator! Instantly get unique wizard, witch, or magical creature names inspired by the Harry Potter universe.",
  
  openGraph: {
    title: 'AI Harry Potter Name Generator – Create Your Wizard Identity',
    description: "Unleash your magical persona with our AI Harry Potter Name Generator! Instantly get unique wizard, witch, or magical creature names inspired by the Harry Potter universe.",
    url: 'https://www.nameideagenerator.com/harry-potter-name-generator',
    images: [
      {
        url: 'harry.png',
        width: 800,
        height: 600,
        alt: 'AI Harry Potter Name Generator – Create Your Wizard Identity',
        type: 'image/png'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Harry Potter Name Generator – Create Your Wizard Identity',
    description: "Unleash your magical persona with our AI Harry Potter Name Generator! Instantly get unique wizard, witch, or magical creature names inspired by the Harry Potter universe.",
    images: ['harry.png'],
    type: 'image/png'  // Added twitter:image:type
  },

  keywords: ['Harry Potter name generator', 'wizard name generator', 'witch name generator', 'AI Harry Potter names', 'magical name generator', 
    'fantasy name generator', 'Harry Potter character name creator', 'Hogwarts name generator', 'spell name generator', 'Harry Potter inspired names', 
    'create Harry Potter identity', 'magical persona generator', 'AI wizard name generator', 'witchcraft name generator', 'Harry Potter universe names'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/harry-potter-name-generator"
  },
}

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Halfling Name Generator",
    "url": "https://www.nameideagenerator.com/harry-potter-name-generator",
    "title": "AI Harry Potter Name Generator – Create Your Wizard Identity",
    "description":
      "Unleash your magical persona with our AI Harry Potter Name Generator! Instantly get unique wizard, witch, or magical creature names inspired by the Harry Potter universe.",
    "image": "https://www.nameideagenerator.com/halfling.webp",
    "keywords": [
      "Harry Potter name generator", "wizard name generator", 
      "witch name generator", "AI Harry Potter names", 
      "magical name generator", "fantasy name generator", 
      "Harry Potter character name creator", "Hogwarts name generator", 
      "spell name generator", "Harry Potter inspired names", 
      "create Harry Potter identity", "magical persona generator", "AI wizard name generator", 
      "witchcraft name generator", "Harry Potter universe names"
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
      <HarryPotterNameGenerator />
    </div>
  );
};
  
  export default page
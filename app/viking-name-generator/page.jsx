import VikingNameGenerator from "@/components/viking-name-generator/Viking-Name-Generator";
import Script from "next/script";

export const metadata = {
  title: "Viking Name Generator | (Old Norse) Name Generator With Meaning",
  description:
    "Generate unique Viking names with meanings using our Old Norse Name Generator. Ideal for characters, stories, and Viking-themed projects!",
  
  openGraph: {
    title: "Viking Name Generator | (Old Norse) Name Generator With Meaning",
    description:
      "Generate unique Viking names with meanings using our Old Norse Name Generator. Ideal for characters, stories, and Viking-themed projects!",
    url: "https://www.nameideagenerator.com/viking-name-generator",
    images: [
      {
        url: "https://www.nameideagenerator.com/vikings.jpg",
        width: 800,
        height: 600,
        alt: "Viking Name Generator | (Old Norse) Name Generator With Meaning",
        type: "image/jpg",
      },
    ],
    locale: "en_US",
    type: "website",
    site_name: "Name Idea Generator",
  },

  twitter: {
    card: "summary_large_image",
    title: "Viking Name Generator | (Old Norse) Name Generator With Meaning",
    description:
      "Generate unique Viking names with meanings using our Old Norse Name Generator. Ideal for characters, stories, and Viking-themed projects!",
    images: ["https://www.nameideagenerator.com/vikings.jpg"],
  },

  keywords: [
    "Viking name generator",
    "viking name generator male",
    "viking name generator female",
    "random viking name generator",
    "viking name generator with meaning",
    "female viking name generator",
    "httyd viking name generator",
    "viking name generator from your name",
    "badass viking name generator",
  ],
  alternates: {
    canonical: "https://www.nameideagenerator.com/viking-name-generator",
  },
};

const page = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Viking Name Generator",
    "url": "https://www.nameideagenerator.com/viking-name-generator",
    "description":
      "Generate unique Viking names with meanings using our Old Norse Name Generator. Ideal for characters, stories, and Viking-themed projects!",
    "image": "https://www.nameideagenerator.com/vikings.jpg",
    "keywords": [
      "Viking name generator",
      "Viking character names",
      "Old Norse name meanings",
      "Fantasy Viking names",
      "Norse mythology names",
      "Viking warrior names",
      "Viking name ideas"
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
      <VikingNameGenerator />
    </div>
  );
};

export default page;
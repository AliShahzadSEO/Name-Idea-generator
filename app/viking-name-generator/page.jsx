import VikingNameGenerator from "@/components/viking-name-generator/Viking-Name-Generator"

export const metadata = {
  title: 'Viking Name Generator | (Old Norse) Name Generator With Meaning',
  description: "Generate unique Viking names with meanings using our Old Norse Name Generator. Ideal for characters, stories, and Viking-themed projects!",
  
  openGraph: {
    title: 'Viking Name Generator | (Old Norse) Name Generator With Meaning',
    description: "Generate unique Viking names with meanings using our Old Norse Name Generator. Ideal for characters, stories, and Viking-themed projects!",
    url: 'https://www.nameideagenerator.com/viking-name-generator',
    images: [
      {
        url: 'vikings.jpg',
        width: 800,
        height: 600,
        alt: 'Viking Name Generator | (Old Norse) Name Generator With Meaning',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Viking Name Generator | (Old Norse) Name Generator With Meaning',
    description: "Generate unique Viking names with meanings using our Old Norse Name Generator. Ideal for characters, stories, and Viking-themed projects!",
    images: ['vikings.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Viking name generator', 'viking name generator male','viking name generator female' , 'random viking name generator', 'viking name generator with meaning',
     'female viking name generator', 'httyd viking name generator', 'viking name generator from your name', 'badass viking name generator'],
     alternates:{
      canonical:"https://www.nameideagenerator.com/viking-name-generator"
    },
  
}

const page = () => {
    return (
      <div>
         <VikingNameGenerator />
      </div>
    )
  }
  
  export default page
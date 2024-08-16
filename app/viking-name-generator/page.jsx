import VikingNameGenerator from "@/components/viking-name-generator/Viking-Name-Generator"

export const metadata = {
  title: 'Viking Name Generator | (Old Norse) Name Generator | Name Idea Generator ',
  description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
  
  openGraph: {
    title: 'Viking Name Generator | (Old Norse) Name Generator | Name Idea Generator',
    description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
    url: 'https://yourwebsite.com/alien-name-generator',
    images: [
      {
        url: 'vikings.jpg',
        width: 800,
        height: 600,
        alt: 'Viking Name Generator | (Old Norse) Name Generator | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Viking Name Generator | (Old Norse) Name Generator | Name Idea Generator',
    description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
    images: ['vikings.jpg'],
  },

  keywords: ['Viking name generator', 'viking name generator male', 'random viking name generator', 'viking name generator with meaning',
     'female viking name generator', 'httyd viking name generator', 'viking name generator from your name', 'badass viking name generator'],
  canonical: 'https://yourwebsite.com/alien-name-generator',
  
}

const page = () => {
    return (
      <div>
         <VikingNameGenerator />
      </div>
    )
  }
  
  export default page
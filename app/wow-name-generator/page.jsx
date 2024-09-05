import WOWNameGenerator from "@/components/wow-name-generator/WoW-Name-Generator"

export const metadata = {
  title: 'WoW Name Generator | Random Wow Name Generator | Name Idea Generator ',
  description: "Generate random World of Warcraft names with our WoW Name Generator. Perfect for creating unique character names and adding depth to your WoW adventures and gaming experience!",
  
  openGraph: {
    title: 'WoW Name Generator | Random Wow Name Generator | Name Idea Generator',
    description: "Generate random World of Warcraft names with our WoW Name Generator. Perfect for creating unique character names and adding depth to your WoW adventures and gaming experience!",
    url: 'https://www.nameideagenerator.com/wow-name-generator',
    images: [
      {
        url: 'wow.jpg',
        width: 800,
        height: 600,
        alt: 'WoW Name Generator | Random Wow Name Generator | Name Idea Generator ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'WoW Name Generator | Random Wow Name Generator | Name Idea Generator',
    description: "Generate random World of Warcraft names with our WoW Name Generator. Perfect for creating unique character names and adding depth to your WoW adventures and gaming experience!",
    images: ['wow.jpg'],
  },

  keywords: ['wow name generator', 'wow name generator blood elf', 'wow name generator human', 'random wow name generator',
     'wow name generator troll', 'orc wow name generator', 'funny wow name generator', 'wow name generator orc', 'human wow name generator', 'wow name generator night elf'],
  
     alternates:{
      canonical:"https://www.nameideagenerator.com/wow-name-generator"
    },
}

const page = () => {
  return (
    <div>
      <WOWNameGenerator />
    </div>
  )
}

export default page
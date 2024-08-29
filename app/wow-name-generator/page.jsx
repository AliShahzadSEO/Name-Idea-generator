import WOWNameGenerator from "@/components/wow-name-generator/WoW-Name-Generator"

export const metadata = {
  title: 'WoW Name Generator | Random Wow Name Generator | Name Idea Generator ',
  description: "Bring your Wood Elf characters to life with our Wood Elf Name Generator! Generate random names that reflect their enchanting nature and connection to the forest. Find the perfect name idea for your Wood Elf in no time.",
  
  openGraph: {
    title: 'WoW Name Generator | Random Wow Name Generator | Name Idea Generator',
    description: "Bring your Wood Elf characters to life with our Wood Elf Name Generator! Generate random names that reflect their enchanting nature and connection to the forest. Find the perfect name idea for your Wood Elf in no time.",
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
    description: "Bring your Wood Elf characters to life with our Wood Elf Name Generator! Generate random names that reflect their enchanting nature and connection to the forest. Find the perfect name idea for your Wood Elf in no time.",
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
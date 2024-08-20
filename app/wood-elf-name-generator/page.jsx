import WoodElfNameGenerator from "@/components/wood-elf-name-generator/Wood-Elf-Name-Generator"

export const metadata = {
  title: 'Wood Elf Name Generator | Random Wood Elf Name Generator | Name Idea Generator ',
  description: "Bring your Wood Elf characters to life with our Wood Elf Name Generator! Generate random names that reflect their enchanting nature and connection to the forest. Find the perfect name idea for your Wood Elf in no time.",
  
  openGraph: {
    title: 'Wood Elf Name Generator | Random Wood Elf Name Generator | Name Idea Generator ',
    description: "Bring your Wood Elf characters to life with our Wood Elf Name Generator! Generate random names that reflect their enchanting nature and connection to the forest. Find the perfect name idea for your Wood Elf in no time.",
    url: 'http://nameideagenerator.com/wood-elf-name-generator',
    images: [
      {
        url: 'Wood_Elf.webp',
        width: 800,
        height: 600,
        alt: 'Wood Elf Name Generator | Random Wood Elf Name Generator | Name Idea Generator ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Wood Elf Name Generator | Random Wood Elf Name Generator | Name Idea Generator',
    description: "Bring your Wood Elf characters to life with our Wood Elf Name Generator! Generate random names that reflect their enchanting nature and connection to the forest. Find the perfect name idea for your Wood Elf in no time.",
    images: ['Wood_Elf.webp'],
  },

  keywords: ['wood elf name generator', 'wood elf name generator dnd', 'female wood elf name generator', 'dnd wood elf name generator',
     'wood elf name generator skyrim', 'skyrim wood elf name generator', 'half wood elf name generator', 'random wood elf name generator'],
  canonical: 'http://nameideagenerator.com/wood-elf-name-generator',
  
}

const page = () => {
    return (
      <div>
        <WoodElfNameGenerator />
      </div>
    )
  }
  
  export default page
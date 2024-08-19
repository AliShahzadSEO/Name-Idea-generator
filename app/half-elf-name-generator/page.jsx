
import HalfElfNameGenerator from "@/components/half-elf-name-generator/Half-Elf-Name-Generator"

export const metadata = {
  title: 'Half Elf Name Generator | DnD Half Elf Name Generator With Meaning | Name Idea Generator ',
  description: "Generate unique and meaningful half-elf names with our DnD Half-Elf Name Generator at Name Idea Generator. Perfect for finding the ideal name for your character!",
  
  openGraph: {
    title: 'Half Elf Name Generator | DnD half elf name generator With Meaning | Name Idea Generator',
    description: "Generate unique and meaningful half-elf names with our DnD Half-Elf Name Generator at Name Idea Generator. Perfect for finding the ideal name for your character!",
    url: 'https://www.nameideagenerator.com/half-elf-name-generator',
    images: [
      {
        url: 'half-demon.webp',
        width: 800,
        height: 600,
        alt: 'Half Elf Name Generator | DnD half elf name generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Half Elf Name Generator | DnD half elf name generator With Meaning | Name Idea Generator',
    description: "Generate unique and meaningful half-elf names with our DnD Half-Elf Name Generator at Name Idea Generator. Perfect for finding the ideal name for your character!",
    images: ['half-demon.webp'],
  },

  keywords: ['half elf name generator', 'dnd half elf name generator', 'high half elf name generator', 'wood half elf name generator',
     'half elf name generator dnd', 'random half elf name generator', 'drow half elf name generator', 'half elf name generator pathfinder', 'bg3 half elf name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/half-elf-name-generator"
  },
}

const page = () => {
    return (
      <div>
        <HalfElfNameGenerator/>
      </div>
    )
  }
  
  export default page
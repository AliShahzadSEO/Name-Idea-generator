import HalflingNameGenerator from "@/components/halfling-name-generator/Halfling-Name-Generator"

export const metadata = {
  title: 'Halfling Name Generator | Random Halfling Name Generator With Meaning | Name Idea Generator ',
  description: "Find unique and meaningful halfling names with our Random Halfling Name Generator at Name Idea Generator. Perfect for creating the ideal name for your character!",
  
  openGraph: {
    title: 'Halfling Name Generator | DnD half elf name generator With Meaning | Name Idea Generator',
    description: "Find unique and meaningful halfling names with our Random Halfling Name Generator at Name Idea Generator. Perfect for creating the ideal name for your character!",
    url: 'https://www.nameideagenerator.com/halfling-name-generator',
    images: [
      {
        url: 'halfling.webp',
        width: 800,
        height: 600,
        alt: 'Half Elf Name Generator | DnD half elf name generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Half Elf Name Generator | DnD half elf name generator With Meaning | Name Idea Generator',
    description: "Find unique and meaningful halfling names with our Random Halfling Name Generator at Name Idea Generator. Perfect for creating the ideal name for your character!",
    images: ['halfling.webp'],
  },

  keywords: ['Halfling name generator', 'dnd halfling name generator', 'halfling name generator 5e', 'random halfling name generator',
     'female halfling name generator', 'lightfoot halfling name generator ', 'halfling name generator dnd', 'fantasy halfling name generator', 'dnd 5e halfling name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/halfling-name-generator"
  },
}

const page = () => {
    return (
      <div>
        <HalflingNameGenerator/>
      </div>
    )
  }
  
  export default page
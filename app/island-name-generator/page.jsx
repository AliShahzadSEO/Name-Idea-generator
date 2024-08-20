import IslandNameGenerator from "@/components/island-name-generator/Island-Name-Generator"

export const metadata = {
  title: 'Island Name Generator | Random Island Name Generator With Meaning | Name Idea Generator ',
  description: "Create the perfect name for your island with our Island Name Generator! Explore random island names with meanings that evoke mystery and adventure. Find the ideal name idea for your island in just a few clicks.",
  
  openGraph: {
    title: 'Island Name Generator | Random Island Name Generator With Meaning | Name Idea Generator',
    description: "Create the perfect name for your island with our Island Name Generator! Explore random island names with meanings that evoke mystery and adventure. Find the ideal name idea for your island in just a few clicks.",
    url: 'https://www.nameideagenerator.com/island-name-generator',
    images: [
      {
        url: 'horse.webp',
        width: 800,
        height: 600,
        alt: 'Island Name Generator | Random Island Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Island Name Generator | Random Island Name Generator With Meaning | Name Idea Generator',
    description: "Create the perfect name for your island with our Island Name Generator! Explore random island names with meanings that evoke mystery and adventure. Find the ideal name idea for your island in just a few clicks.",
    images: ['horse.webp'],
  },

  keywords: ['Horse name generator', 'animal crossing island name generator', 'acnh island name generator ', 'random island name generator',
     'island name generator animal crossing', 'fantasy island name generator ', 'island name generator fantasy', 'one piece island name generator', 'island name generator acnh'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/island-name-generator"
  },
}

const page = () => {
    return (
      <div>
          <IslandNameGenerator />
      </div>
    )
  }
  
  export default page
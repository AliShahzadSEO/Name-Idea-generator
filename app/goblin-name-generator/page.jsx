import GoblinNameGenerator from "@/components/goblin-name-generator/Goblin-Name-Generator"


export const metadata = {
  title: 'Goblin Name Generator | Random DnD Goblin Name With Meaning',
  description: "Generate random goblin names with meanings using our Goblin Name Generator. Perfect for DnD, games, and creative projects!",
  
  openGraph: {
    title: 'Goblin Name Generator | Random DnD Goblin Name With Meaning',
    description: "Generate random goblin names with meanings using our Goblin Name Generator. Perfect for DnD, games, and creative projects!",
    url: 'https://www.nameideagenerator.com/goblin-name-generator',
    images: [
      {
        url: 'Goblin.jpg',
        width: 800,
        height: 600,
        alt: 'Goblin Name Generator | Random DnD Goblin Name With Meaning',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Goblin Name Generator | Random DnD Goblin Name With Meaning',
    description: "Generate random goblin names with meanings using our Goblin Name Generator. Perfect for DnD, games, and creative projects!",
    images: ['Goblin.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Goblin name generator', 'dnd goblin name generator', 'goblin name generator dnd', 'goblin name generator wow',
     'wow goblin name generator', 'random goblin name generator', 'goblin name generator 5e', 'female goblin name generator', 'harry potter goblin name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/goblin-name-generator"
  },
}


const page = () => {
    return (
      <div>
        <GoblinNameGenerator />
      </div>
    )
  }
  
  export default page
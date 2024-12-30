import PaladinNameGenerator from "@/components/paladin-name-generator/PaladinNameGenerator"

export const metadata = {
  title: 'Paladin Name Generator with Meaning | Name Idea Generator',
  description: "Create powerful Paladin names with meaning using our Paladin Name Generator. Discover unique and lore-friendly names for your Dungeons & Dragons characters, perfect for your campaigns and storytelling.",
  
  openGraph: {
    title: 'Paladin Name Generator with Meaning | Name Idea Generator',
    description: "Create powerful Paladin names with meaning using our Paladin Name Generator. Discover unique and lore-friendly names for your Dungeons & Dragons characters, perfect for your campaigns and storytelling.",
    url: 'https://www.nameideagenerator.com/warrior-cat-name-generator',
    images: [
      {
        url: '/paladin-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Paladin Name Generator with Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Paladin Name Generator with Meaning | Name Idea Generator',
    description: "Create powerful Paladin names with meaning using our Paladin Name Generator. Discover unique and lore-friendly names for your Dungeons & Dragons characters, perfect for your campaigns and storytelling.",
    images: ['/paladin-name-generator.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Paladin name generator', 'paladin names', 'paladin names generator', 'd&d paladin names', 'paladin names male', 'male paladin name generator', 'female paladin name generator', 'unisex paladin name generator', 'human paladin name generator', 'dnd paladin name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/paladin-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <PaladinNameGenerator/>
    </div>
  )
}

export default page

import ContinentNameGenerator from "@/components/continent-name-generator/ContinentNameGenerator"

export const metadata = {
  title: 'Continent Name Generator With Meaning | Unique Names With Your Imaginary Continents',
  description: "Continent Name Generator: Generate unique continent names with meaning for your fantasy, realistic, or mythical worlds. Perfect for writers, gamers, and creators!",
  
  openGraph: {
    title: 'Continent Name Generator With Meaning | Unique Names With Your Imaginary Continents',
    description: "Continent Name Generator: Generate unique continent names with meaning for your fantasy, realistic, or mythical worlds. Perfect for writers, gamers, and creators!",
    url: 'https://www.nameideagenerator.com/drow-name-generator',
    images: [
      {
        url: '/continent-name-generator.webp',
        width: 800,
        height: 600,
        alt: 'Continent Name Generator With Meaning | Unique Names With Your Imaginary Continents',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Continent Name Generator With Meaning | Unique Names With Your Imaginary Continents',
    description: "Continent Name Generator: Generate unique continent names with meaning for your fantasy, realistic, or mythical worlds. Perfect for writers, gamers, and creators!",
    images: ['/continent-name-generator.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['continent name generator', 'githyanki names', 'gith name generator', 'githyanki names and meanings', 'female githyanki names', 'drow githyanki names', 'drow githyanki names', 'male githyanki names', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/continent-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <ContinentNameGenerator/>
    </div>
  )
}

export default page

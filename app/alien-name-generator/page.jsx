import AlienNameGenerator from "@/components/alien-name-generator/Alien-Name-Generator"

export const metadata = {
  title: 'Alien Name Generator | Create Random Alien Name Generator Male & Female',
  description: "Generate unique alien names for male and female characters with meanings. Perfect for sci-fi, games, and alien name generator needs!",
  
  openGraph: {
    title: 'Alien Name Generator | Create Random Alien Name Generator Male & Female',
    description: "Generate unique alien names for male and female characters with meanings. Perfect for sci-fi, games, and alien name generator needs!",
    url: 'https://www.nameideagenerator.com/alien-name-generator',
    images: [
      {
        url: 'alien.webp',
        width: 800,
        height: 600,
        alt: 'Alien Name Generator | Create Random Alien Name Generator Male & Female',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alien Name Generator | Create Random Alien Name Generator Male & Female',
    description: "Generate unique alien names for male and female characters with meanings. Perfect for sci-fi, games, and alien name generator needs!",
    images: ['alien.webp'],
  },
  robots:{index:true, follow: true},

  keywords: ['alien name generator', 'random alien name generator', 'alien name generator male', 'alien name generator female', 'alien name generator girl', 'alien name generator fantasy'],
  canonical: 'https://www.nameideagenerator.com/alien-name-generator',
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/alien-name-generator"
  },
}

const page = () => {
    return (
      <div>
          <AlienNameGenerator />
      </div>
    )
  }
  
  export default page
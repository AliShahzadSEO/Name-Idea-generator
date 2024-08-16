import AlienNameGenerator from "@/components/alien-name-generator/Alien-Name-Generator"

export const metadata = {
  title: 'Alien Name Generator | Create Random Alien Name | Name Idea Generator ',
  description: "Explore the cosmos with our Alien Name Generator! Instantly create random and unique alien names for your stories, games, or characters. Find the perfect name that captures the otherworldly essence you need.",
  
  openGraph: {
    title: 'Alien Name Generator | Create Random Alien Name | Name Idea Generator',
    description: "Explore the cosmos with our Alien Name Generator! Instantly create random and unique alien names for your stories, games, or characters. Find the perfect name that captures the otherworldly essence you need.",
    url: 'https://yourwebsite.com/alien-name-generator',
    images: [
      {
        url: 'alien.webp',
        width: 800,
        height: 600,
        alt: 'Alien Name Generator | Create Random Alien Name | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alien Name Generator | Create Random Alien Name | Name Idea Generator',
    description: "Explore the cosmos with our Alien Name Generator! Instantly create random and unique alien names for your stories, games, or characters. Find the perfect name that captures the otherworldly essence you need.",
    images: ['alien.webp'],
  },

  keywords: ['alien name generator', 'random alien name generator', 'alien name generator male', 'alien name generator female', 'alien name generator girl', 'alien name generator fantasy'],
  canonical: 'https://yourwebsite.com/alien-name-generator',
  
}

const page = () => {
    return (
      <div>
          <AlienNameGenerator />
      </div>
    )
  }
  
  export default page
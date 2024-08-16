import TieflingNameGenerator from "@/components/tiefling-name-generator/TieflingNameGenerator"

export const metadata = {
  title: 'Tiefling Name Generator | Get Random Tiefling Name | Name Idea Generator ',
  description: "Explore the cosmos with our Alien Name Generator! Instantly create random and unique alien names for your stories, games, or characters. Find the perfect name that captures the otherworldly essence you need.",
  
  openGraph: {
    title: 'Tiefling Name Generator | Get Random Tiefling Name | Name Idea Generator',
    description: "Explore the cosmos with our Alien Name Generator! Instantly create random and unique alien names for your stories, games, or characters. Find the perfect name that captures the otherworldly essence you need.",
    url: 'https://yourwebsite.com/alien-name-generator',
    images: [
      {
        url: 'female.jpg',
        width: 800,
        height: 600,
        alt: 'Tiefling Name Generator | Get Random Tiefling Name | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tiefling Name Generator | Get Random Tiefling Name | Name Idea Generator',
    description: "Explore the cosmos with our Alien Name Generator! Instantly create random and unique alien names for your stories, games, or characters. Find the perfect name that captures the otherworldly essence you need.",
    images: ['female.jpg'],
  },

  keywords: ['Tiefling name generator', 'tiefling name generator 5e', 'tiefling name generator dnd', 'dnd tiefling name generator',
     'female tiefling name generator', 'tiefling name generator pathfinder', 'bg3 tiefling name generator'],
  canonical: 'https://yourwebsite.com/alien-name-generator',
  
}

const page = () => {
  return (
    <div>
        <TieflingNameGenerator />
    </div>
  )
}

export default page

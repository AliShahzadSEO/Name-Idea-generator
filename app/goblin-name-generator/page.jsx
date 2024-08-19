import GoblinNameGenerator from "@/components/goblin-name-generator/Goblin-Name-Generator"


export const metadata = {
  title: 'Goblin Name Generator | Get Random Goblin Name | Name Idea Generator ',
  description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
  
  openGraph: {
    title: 'Goblin Name Generator | Get Random Goblin Name | Name Idea Generator',
    description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
    url: 'https://www.nameideagenerator.com/goblin-name-generator',
    images: [
      {
        url: 'Goblin.jpg',
        width: 800,
        height: 600,
        alt: 'Goblin Name Generator | Get Random Goblin Name | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Goblin Name Generator | Get Random Goblin Name | Name Idea Generator',
    description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
    images: ['Goblin.jpg'],
  },

  keywords: ['Goblin name generator', 'dnd goblin name generator', 'goblin name generator dnd', 'goblin name generator wow',
     'wow goblin name generator', 'random goblin name generator', 'goblin name generator 5e', 'female goblin name generator', 'harry potter goblin name generator'],
  canonical: 'https://www.nameideagenerator.com/goblin-name-generator',
  
}


const page = () => {
    return (
      <div>
        <GoblinNameGenerator />
      </div>
    )
  }
  
  export default page
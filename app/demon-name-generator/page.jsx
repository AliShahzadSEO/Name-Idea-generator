import DemonNameGenerator from "@/components/demon-name-generator/Demon-name-generator"

export const metadata = {
  title: 'Demon Name Generator | Create Unique Demon Names | Name Idea Generator ',
  description: "Unleash your creativity with our Demon Name Generator! Craft unique, powerful demon names for your stories, games, or characters in seconds. Discover the perfect name that captures the dark essence you're looking for.",
  
  openGraph: {
    title: 'Demon Name Generator | Create Unique Demon Names | Name Idea Generator ',
    description: "Unleash your creativity with our Demon Name Generator! Craft unique, powerful demon names for your stories, games, or characters in seconds. Discover the perfect name that captures the dark essence you're looking for.",
    url: 'https://www.nameideagenerator.com/demon-name-generator',
    images: [
      {
        url: 'demonpic.jpg',
        width: 800,
        height: 600,
        alt: 'Demon Name Generator | Create Unique Demon Names | Name Idea Generator ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Demon Name Generator | Create Unique Demon Names | Name Idea Generator',
    description: "Unleash your creativity with our Demon Name Generator! Craft unique, powerful demon names for your stories, games, or characters in seconds. Discover the perfect name that captures the dark essence you're looking for.",
    images: ['demonpic.jpg'],
  },

  keywords: ['demon name generator', 'fantasy names', 'RPG names', 'demon names', 'unique demon names'],
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/demon-name-generator"
  },
  
  robots:{index:true, follow: true},
}

const page = () => {
  return (
    <div>
     <DemonNameGenerator />
    </div>
  )
}

export default page
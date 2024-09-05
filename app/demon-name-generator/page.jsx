import DemonNameGenerator from "@/components/demon-name-generator/Demon-name-generator"

export const metadata = {
  title: 'Demon Name Generator | Create Unique Demon Names With Meaning | Name Idea Generator',
  description: "Create unique demon names with meanings using our demon name generator. Ideal for stories, games, and creative projects!",
  
  openGraph: {
    title: 'Demon Name Generator | Create Unique Demon Names With Meaning | Name Idea Generator',
    description: "Create unique demon names with meanings using our demon name generator. Ideal for stories, games, and creative projects!",
    url: 'https://www.nameideagenerator.com/demon-name-generator',
    images: [
      {
        url: 'demonpic.jpg',
        width: 800,
        height: 600,
        alt: 'Demon Name Generator | Create Unique Demon Names With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Demon Name Generator | Create Unique Demon Names With Meaning | Name Idea Generator',
    description: "Create unique demon names with meanings using our demon name generator. Ideal for stories, games, and creative projects!",
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
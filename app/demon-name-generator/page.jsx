import DemonNameGenerator from "@/components/demon-name-generator/Demon-name-generator"

export const metadata = {
  title: 'Demon Name Generator With Meaning | Devil Name Generator',
  description: "Create unique demon names with meanings using our demon name generator. Ideal for stories, games, and creative projects!",
  
  openGraph: {
    title: 'Demon Name Generator With Meaning | Devil Name Generator',
    description: "Create unique demon names with meanings using our demon name generator. Ideal for stories, games, and creative projects!",
    url: 'https://www.nameideagenerator.com/demon-name-generator',
    images: [
      {
        url: 'demonpic.jpg',
        width: 800,
        height: 600,
        alt: 'Demon Name Generator With Meaning | Devil Name Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Demon Name Generator With Meaning | Devil Name Generator',
    description: "Create unique demon names with meanings using our demon name generator. Ideal for stories, games, and creative projects!",
    images: ['demonpic.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['demon name generator', 'fantasy names', 'RPG names', 'demon names', 'unique demon names', 'female demon name generator', 'demon name generator male', 'random demon name generator', 'demon name generator female', 'hazbin hotel demon name generator', 'dnd demon name generator', 'fantasy demon name generator', 'biblical demon name generator', 'frost demon name generator'],
  
  
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
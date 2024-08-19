import AngelNameGenerator from "@/components/angel-name-generator/Angel-Name-Generator"

export const metadata = {
  title: 'Angel Name Generator | Random Alien Name With Meaning | Name Idea Generator ',
  description: "Use our Angel Name Generator to create unique and meaningful names, including options for fallen angels and dark angels. Perfect for finding the ideal blood angel name!",
  
  openGraph: {
    title: 'Angel Name Generator | Create Random Alien Name | Name Idea Generator',
    description: "Use our Angel Name Generator to create unique and meaningful names, including options for fallen angels and dark angels. Perfect for finding the ideal blood angel name!",
    url: 'https://www.nameideagenerator.com/alien-name-generator',
    images: [
      {
        url: 'angel.jpg',
        width: 800,
        height: 600,
        alt: 'Angel Name Generator | Create Random Alien Name | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alien Name Generator | Create Random Alien Name | Name Idea Generator',
    description: "Use our Angel Name Generator to create unique and meaningful names, including options for fallen angels and dark angels. Perfect for finding the ideal blood angel name!",
    images: ['angel.jpg'],
  },
  robots:{index:true, follow: true},

  keywords: ['angel name generator', 'fallen angel name generator', 'dark angel name generator', 'blood angel name generator', 'angel name generator dnd', 'random angel name generator', 'angel name generator with meaning', 'female fallen angel name generator', 'fantasy angel name generator', 'female angel name generator'],
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/angel-name-generator"
  },
}

const page = () => {
    return (
      <div>
      <AngelNameGenerator />
      </div>
    )
  }
  
  export default page
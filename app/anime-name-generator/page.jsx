import AnimeNameGenerator from "@/components/anime-name-generator/AnimeNameGenerator"

export const metadata = {
  title: 'Anime Name Generator with Meaning | Unique Anime Names for Characters',
  description: "Discover unique and meaningful anime names for your characters with our Anime Name Generator. Customize by gender and category to find the perfect name for your anime-inspired projects.",
  
  openGraph: {
    title: 'Anime Name Generator with Meaning | Unique Anime Names for Characters',
    description: "Discover unique and meaningful anime names for your characters with our Anime Name Generator. Customize by gender and category to find the perfect name for your anime-inspired projects.",
    url: 'https://www.nameideagenerator.com/angel-name-generator',
    images: [
      {
        url: 'anime-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Anime Name Generator with Meaning | Unique Anime Names for Characters',
        type: 'image/jpg',
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Anime Name Generator with Meaning | Unique Anime Names for Characters',
    description: "Discover unique and meaningful anime names for your characters with our Anime Name Generator. Customize by gender and category to find the perfect name for your anime-inspired projects.",
    images: ['anime-name-generator.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },
  robots:{index:true, follow: true},

  keywords: ['anime name generator', 'jjk name generator', 'anime names', 'anime girl name generator', 'anime girl names', 'random anime name generator', 'anime name generator with meaning', 'female anime name generator', 'fantasy anime name generator', 'anime female name generator'],
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/anime-name-generator"
  },
}

const page = () => {
    return (
      <div>
      <AnimeNameGenerator/>
      </div>
    )
  }
  
  export default page
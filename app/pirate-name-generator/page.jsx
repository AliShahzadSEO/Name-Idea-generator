import PirateNameGenerator from "@/components/pirate-name-generator/PirateNameGenerator"

export const metadata = {
  title: 'Pirate Name Generator with Meaning | Name Idea Generator',
  description: "Generate unique pirate names with meanings using the Pirate Name Generator at Name Idea Generator. Perfect for adding adventure and flair to your characters and stories!",
  
  openGraph: {
    title: 'Pirate Name Generator with Meaning | Name Idea Generator',
    description: "Generate unique pirate names with meanings using the Pirate Name Generator at Name Idea Generator. Perfect for adding adventure and flair to your characters and stories!",
    url: 'https://www.nameideagenerator.com/warrior-cat-name-generator',
    images: [
      {
        url: '/pirate-name-generator.avif',
        width: 800,
        height: 600,
        alt: 'Pirate Name Generator with Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pirate Name Generator with Meaning | Name Idea Generator',
    description: "Generate unique pirate names with meanings using the Pirate Name Generator at Name Idea Generator. Perfect for adding adventure and flair to your characters and stories!",
    images: ['/pirate-name-generator.avif'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Pirate name generator', 'pirate names', 'pirate name generator for adults', 'female pirate names', 'pirate names generator', 'male pirate name generator', 'female pirate name generator', 'unisex pirate name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/pirate-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <PirateNameGenerator/>
    </div>
  )
}

export default page

import VampireNameGenerator from "@/components/vampire-name-generator/VampireNameGenerator"

export const metadata = {
  title: 'Vampire Name Generator Tool With Meaning | D&D Name Generator',
  description: "Generate intriguing vampire names with meanings using the Vampire Name Generator Tool at Name Idea Generator. Ideal for adding dark mystery to your D&D characters and stories.",
  
  openGraph: {
    title: 'Vampire Name Generator Tool With Meaning | D&D Name Generator',
    description: "Generate intriguing vampire names with meanings using the Vampire Name Generator Tool at Name Idea Generator. Ideal for adding dark mystery to your D&D characters and stories.",
    url: 'https://www.nameideagenerator.com/drow-name-generator',
    images: [
      {
        url: '/vampire-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Vampire Name Generator Tool With Meaning | D&D Name Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vampire Name Generator Tool With Meaning | D&D Name Generator',
    description: "Generate intriguing vampire names with meanings using the Vampire Name Generator Tool at Name Idea Generator. Ideal for adding dark mystery to your D&D characters and stories.",
    images: ['/vampire-name-generator.jpg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['Vampire name generator', 'vampire names', 'female Vampire name generator', 'vampire names generator', 'vampire name generator dnd', 'vampire name', 'male vampire name generator', 'male vampire name', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/vampire-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <VampireNameGenerator/>
    </div>
  )
}

export default page

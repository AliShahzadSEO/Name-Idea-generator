import MedievalNameGenerator from "@/components/medieval-name-generator/MedievalNameGenerator"

export const metadata = {
  title: 'Medieval Name Generator with Meaning | Name Idea Generator',
  description: "Generate authentic medieval name generator with meanings using the Medieval Name Generator at Name Idea Generator. Explore Old English, Norse, Celtic, and Roman names for historical fiction, fantasy, and RPGs.",
  
  openGraph: {
    title: 'Medieval Name Generator with Meaning | Name Idea Generator',
    description: "Generate authentic medieval name generator with meanings using the Medieval Name Generator at Name Idea Generator. Explore Old English, Norse, Celtic, and Roman names for historical fiction, fantasy, and RPGs.",
    url: 'https://www.nameideagenerator.com/warrior-cat-name-generator',
    images: [
      {
        url: '/dark-fantasy-character-Medieval-Names.avif',
        width: 800,
        height: 600,
        alt: 'Medieval Name Generator with Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Medieval Name Generator with Meaning | Name Idea Generator',
    description: "Generate authentic medieval name generator with meanings using the Medieval Name Generator at Name Idea Generator. Explore Old English, Norse, Celtic, and Roman names for historical fiction, fantasy, and RPGs.",
    images: ['/dark-fantasy-character-Medieval-Names.avif'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['medieval name generator', 'medieval names generator', 'medieval fantasy names', 'medieval last name generator', 'random medieval name generator', 'male medieval name generator', 'female medieval name generator', 'unisex medieval name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/medieval-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <MedievalNameGenerator/>
    </div>
  )
}

export default page

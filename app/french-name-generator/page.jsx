import FrenchNameGenerator from "@/components/french-name-generator/FrenchNameGenerator"

export const metadata = {
  title: 'French Name Generator With Meaning | Name Idea Generator',
  description: "Generate authentic French names with meanings using the French Name Generator at Name Idea Generator. Explore traditional French names for your characters in creative projects.",
  
  openGraph: {
    title: 'French Name Generator With Meaning | Name Idea Generator',
    description: "Generate authentic French names with meanings using the French Name Generator at Name Idea Generator. Explore traditional French names for your characters in creative projects.",
    url: 'https://www.nameideagenerator.com/warrior-cat-name-generator',
    images: [
      {
        url: '/french-name-generator.avif',
        width: 800,
        height: 600,
        alt: 'French Name Generator With Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'French Name Generator With Meaning | Name Idea Generator',
    description: "Generate authentic French names with meanings using the French Name Generator at Name Idea Generator. Explore traditional French names for your characters in creative projects.",
    images: ['/french-name-generator.avif'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['french name generator', 'french names', 'french name generator male', 'random french name generator', 'french last name generator', 'male french name generator', 'female french name generator', 'unisex french name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/french-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <FrenchNameGenerator/>
    </div>
  )
}

export default page

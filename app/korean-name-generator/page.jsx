import KoreanNameGenerator from "@/components/korean-name-generator/KoreanNameGenerator"

export const metadata = {
  title: 'Korean Name Generator with Meaning | Name Idea Generator',
  description: "Generate authentic Korean names with meanings using the Korean Name Generator at Name Idea Generator. Explore traditional names for your characters in various creative projects.",
  
  openGraph: {
    title: 'Korean Name Generator with Meaning | Name Idea Generator',
    description: "Generate authentic Korean names with meanings using the Korean Name Generator at Name Idea Generator. Explore traditional names for your characters in various creative projects.",
    url: 'https://www.nameideagenerator.com/warrior-cat-name-generator',
    images: [
      {
        url: '/korean.webp',
        width: 800,
        height: 600,
        alt: 'Korean Name Generator with Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Korean Name Generator with Meaning | Name Idea Generator',
    description: "Generate authentic Korean names with meanings using the Korean Name Generator at Name Idea Generator. Explore traditional names for your characters in various creative projects.",
    images: ['/korean.webp'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['korean name generator', 'random korean name generator', 'korean name generator male', 'korean names generator', 'korean name generator female', 'male korean name generator', 'female korean name generator', 'unisex korean name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/korean-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <KoreanNameGenerator/>
    </div>
  )
}

export default page

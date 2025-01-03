import EgyptianNameGenerator from "@/components/egyptian-name-generator/EgyptianNameGenerator"

export const metadata = {
  title: 'Egyptian Name Generator with Meaning | Name Idea Generator',
  description: "Explore the Egyptian Name Generator at Name Idea Generator. Create authentic Egyptian names inspired by history, culture, and mythology.",
  
  openGraph: {
    title: 'Egyptian Name Generator with Meaning | Name Idea Generator',
    description: "Explore the Egyptian Name Generator at Name Idea Generator. Create authentic Egyptian names inspired by history, culture, and mythology.",
    url: 'https://www.nameideagenerator.com/egyptian-name-generator',
    images: [
      {
        url: '/egyptian-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Egyptian Name Generator with Meaning | Name Idea Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Egyptian Name Generator with Meaning | Name Idea Generator',
    description: "Explore the Egyptian Name Generator at Name Idea Generator. Create authentic Egyptian names inspired by history, culture, and mythology.",
    images: ['/egyptian-name-generator.jpg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['Egyptian Name Generator', 'ancient egyptian name generator', 'egyptian names', 'ancient egyptian names', 'egyptian boy names', 'pharaoh name generator', 'ancient egypt names', 'ancient egypt name generator', 'victorian last name generator', 'Male Egyptian name generator', 'Egyptian name', 'female Egyptian name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/egyptian-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <EgyptianNameGenerator/>
    </div>
  )
}

export default page

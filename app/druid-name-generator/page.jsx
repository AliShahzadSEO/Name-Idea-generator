import DruidNameGenerator from "@/components/druid-name-generator/DruidNameGenerator"

export const metadata = {
  title: 'Druid Name Generator with Meaning | D&D Name Generator',
  description: "Generate unique and meaningful druid names with our tool. Perfect for writers, gamers, and creators looking for authentic, nature-inspired names with rich backstories.",
  
  openGraph: {
    title: 'Druid Name Generator with Meaning | D&D Name Generator',
    description: "Generate unique and meaningful druid names with our tool. Perfect for writers, gamers, and creators looking for authentic, nature-inspired names with rich backstories.",
    url: 'https://www.nameideagenerator.com/drow-name-generator',
    images: [
      {
        url: '/druid-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Druid Name Generator with Meaning | D&D Name Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Druid Name Generator with Meaning | D&D Name Generator',
    description: "Generate unique and meaningful druid names with our tool. Perfect for writers, gamers, and creators looking for authentic, nature-inspired names with rich backstories.",
    images: ['/druid-name-generator.jpg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['druid names', 'druid name generator', 'good druid names', 'cool druid names', 'female druid names', 'druid name', 'male druid name generator', 'male druid name', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/druid-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <DruidNameGenerator/>
    </div>
  )
}

export default page

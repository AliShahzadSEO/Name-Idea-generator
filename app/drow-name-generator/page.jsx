import DrowNameGenerator from "@/components/drow-name-generator/DrowNameGenerator"

export const metadata = {
  title: 'Drow Name Generator With Meaning | Dungeons & Dragons Name Generator',
  description: "Discover unique Drow names with meanings using our Drow Name Generator. Perfect for your next campaign! Visit Name Idea Generator for inspiration.",
  
  openGraph: {
    title: 'Drow Name Generator With Meaning | Dungeons & Dragons Name Generator',
    description: "Discover unique Drow names with meanings using our Drow Name Generator. Perfect for your next campaign! Visit Name Idea Generator for inspiration.",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: '/drowname.webp',
        width: 800,
        height: 600,
        alt: 'Drow Name Generator With Meaning | Dungeons & Dragons Name Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Drow Name Generator With Meaning | Dungeons & Dragons Name Generator',
    description: "Discover unique Drow names with meanings using our Drow Name Generator. Perfect for your next campaign! Visit Name Idea Generator for inspiration.",
    images: ['/drowname.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['drow name generator', 'drow names', 'female drow names', 'drow elf names', 'drow names 5e', 'drow female names', 'drow male names', 'male drow names', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/drow-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <DrowNameGenerator/>
    </div>
  )
}

export default page

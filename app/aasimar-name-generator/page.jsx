import AasimarNameGenerator from "@/components/aasimar-name-generator/AasimarNameGenerator"

export const metadata = {
  title: 'Aasimar Name Generator With Meaning Tool | Unique DnD Names',
  description: "Generate unique and meaningful Aasimar names with our easy-to-use Aasimar Name Generator tool. Perfect for DnD characters, featuring celestial-inspired names with divine significance.",
  
  openGraph: {
    title: 'Aasimar Name Generator With Meaning Tool | Unique DnD Names',
    description: "Generate unique and meaningful Aasimar names with our easy-to-use Aasimar Name Generator tool. Perfect for DnD characters, featuring celestial-inspired names with divine significance.",
    url: 'https://www.nameideagenerator.com/aasimar-name-generator',
    images: [
      {
        url: '/aasimar-name-generator.webp',
        width: 800,
        height: 600,
        alt: 'Aasimar Name Generator With Meaning Tool | Unique DnD Names',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Aasimar Name Generator With Meaning Tool | Unique DnD Names',
    description: "Generate unique and meaningful Aasimar names with our easy-to-use Aasimar Name Generator tool. Perfect for DnD characters, featuring celestial-inspired names with divine significance.",
    images: ['/aasimar-name-generator.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['Aasimar Name Generator', 'aasimar names', 'dnd aasimar names', 'celestial names dnd', 'dnd celestial names', 'dnd aasimar name generator', 'male aasimar names', 'female aasimar names', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/aasimar-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <AasimarNameGenerator/>
    </div>
  )
}

export default page

import HalflingNameGenerator from "@/components/halfling-name-generator/Halfling-Name-Generator"

export const metadata = {
  title: 'Halfling Name Generator | DnD Halfling Name Generator With Meaning',
  description: "Generate unique Halfling names with meanings using our DnD Halfling Name Generator. Ideal for your fantasy stories and games!",
  
  openGraph: {
    title: 'Halfling Name Generator | DnD half elf name generator With Meaning | Name Idea Generator',
    description: "Generate unique Halfling names with meanings using our DnD Halfling Name Generator. Ideal for your fantasy stories and games!",
    url: 'https://www.nameideagenerator.com/halfling-name-generator',
    images: [
      {
        url: 'halfling.webp',
        width: 800,
        height: 600,
        alt: 'Halfling Name Generator | Random Halfling Name Generator With Meaning | Name Idea Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Halfling Name Generator | Random Halfling Name Generator With Meaning | Name Idea Generator',
    description: "Generate unique Halfling names with meanings using our DnD Halfling Name Generator. Ideal for your fantasy stories and games!",
    images: ['halfling.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['Halfling name generator', 'dnd halfling name generator', 'halfling name generator 5e', 'random halfling name generator',
     'female halfling name generator', 'lightfoot halfling name generator ', 'halfling name generator dnd', 'fantasy halfling name generator', 'dnd 5e halfling name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/halfling-name-generator"
  },
}

const page = () => {
    return (
      <div>
        <HalflingNameGenerator/>
      </div>
    )
  }
  
  export default page
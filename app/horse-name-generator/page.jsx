import HorseNameGenerator from "@/components/horse-name-generator/Horse-Name-Generator"

export const metadata = {
  title: 'Horse Name Generator | Race Horse Name Generator With Meaning',
  description: "Create unique race horse names with meanings using our Horse Name Generator. Perfect for naming racehorses, pets, and more!",
  
  openGraph: {
    title: 'Horse Name Generator | Race Horse Name Generator With Meaning',
    description: "Create unique race horse names with meanings using our Horse Name Generator. Perfect for naming racehorses, pets, and more!",
    url: 'https://www.nameideagenerator.com/horse-name-generator',
    images: [
      {
        url: 'horse.webp',
        width: 800,
        height: 600,
        alt: 'Horse Name Generator | Race Horse Name Generator With Meaning',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Horse Name Generator | Race Horse Name Generator With Meaning',
    description: "Create unique race horse names with meanings using our Horse Name Generator. Perfect for naming racehorses, pets, and more!",
    images: ['horse.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['Horse name generator', 'race horse name generator', 'random horse name generator ', 'horse name generator rdr2',
     'registered horse name generator', 'derby horse name generator ', 'rdr2 horse name generator', 'kentucky derby horse name generator', 'horse name generator using parents names'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/horse-name-generator"
  },
}

const page = () => {
    return (
      <div>
        <HorseNameGenerator />
      </div>
    )
  }
  
  export default page
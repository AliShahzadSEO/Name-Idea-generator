import TabaxiNameGenerator from "@/components/tabaxi-name-generator/Tabaxi-Name-Generator"

export const metadata = {
  title: 'Tabaxi Name Generator | DnD Tabaxi Name Generator With Meaning',
  description: "Create unique Tabaxi names with detailed meanings using our DnD Tabaxi Name Generator. Perfect for adding depth to your fantasy characters and enriching your campaigns!",
  
  openGraph: {
    title: 'Tabaxi Name Generator | DnD Tabaxi Name Generator With Meaning',
    description: "Create unique Tabaxi names with detailed meanings using our DnD Tabaxi Name Generator. Perfect for adding depth to your fantasy characters and enriching your campaigns!",
    url: 'https://www.nameideagenerator.com/tabaxi-name-generator',
    images: [
      {
        url: 'tabaxi.jpeg',
        width: 800,
        height: 600,
        alt: 'Tabaxi Name Generator | DnD Tabaxi Name Generator With Meaning',
        type: 'image/jpeg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tabaxi Name Generator | DnD Tabaxi Name Generator With Meaning',
    description: "Create unique Tabaxi names with detailed meanings using our DnD Tabaxi Name Generator. Perfect for adding depth to your fantasy characters and enriching your campaigns!",
    images: ['tabaxi.jpeg'],
    type: 'image/jpeg'  // Added twitter:image:type
  },

  keywords: ['tabaxi name generator', ' dnd tabaxi name generator', 'tabaxi name generator 5e', 'random tabaxi name generator',
     'dnd 5e tabaxi name generator', 'tabaxi name generator dnd', 'd&d tabaxi name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/tabaxi-name-generator"
  },
}


const page = () => {
    return (
      <div>
      <TabaxiNameGenerator />
      </div>
    )
  }
  
  export default page
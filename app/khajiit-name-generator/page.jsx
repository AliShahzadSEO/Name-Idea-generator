import KhajiitNameGenerator from "@/components/khajiit-name-generator/KhajiitNameGenerator"

export const metadata = {
  title: 'Khajiit Name Generator | Unique Khajiit Names for Characters',
  description: "Generate unique and meaningful Khajiit names for your characters with the Khajiit Name Generator from Name Idea Generator. Customize by gender and name type to create the perfect name for your RPG or storytelling adventures.",
  
  openGraph: {
    title: 'Khajiit Name Generator | Unique Khajiit Names for Characters',
    description: "Generate unique and meaningful Khajiit names for your characters with the Khajiit Name Generator from Name Idea Generator. Customize by gender and name type to create the perfect name for your RPG or storytelling adventures.",
    url: 'https://www.nameideagenerator.com/khajiit-name-generator',
    images: [
      {
        url: 'Khajiit-name-genrator.jpg',
        width: 800,
        height: 600,
        alt: 'Khajiit Name Generator | Unique Khajiit Names for Characters',
        type: 'image/jpg',
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Khajiit Name Generator | Unique Khajiit Names for Characters',
    description: "Generate unique and meaningful Khajiit names for your characters with the Khajiit Name Generator from Name Idea Generator. Customize by gender and name type to create the perfect name for your RPG or storytelling adventures.",
    images: ['Khajiit-name-genrator.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },
  robots:{index:true, follow: true},

  keywords: ['khajiit name generator', 'khajiit names', 'khajiit names generator', 'skyrim khajiit names', 'khajit names', 'random khajiit name generator', 'khajiit name generator with meaning', 'female khajiit name generator', 'fantasy khajiit name generator', 'anime khajiit name generator'],
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/khajiit-name-generator"
  },
}

const page = () => {
    return (
      <div>
      <KhajiitNameGenerator/>
      </div>
    )
  }
  
  export default page
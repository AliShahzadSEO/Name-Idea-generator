import DragonbornNameGenerator from "@/components/dragonborn-name-generator/DragonbornNameGenerator"

export const metadata = {
  title: 'Dragonborn Name Generator | DND Dragonborn Names With Meaning',
  description: "Create powerful and meaningful names with our Dragonborn Name Generator. Perfect for generating random Dragonborn names with deep meanings for your characters!",
  
  openGraph: {
    title: 'Dragonborn Name Generator | DND Dragonborn Names With Meaning',
    description: "Create powerful and meaningful names with our Dragonborn Name Generator. Perfect for generating random Dragonborn names with deep meanings for your characters!",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: 'bg-dragonborn.webp',
        width: 800,
        height: 600,
        alt: 'Dragonborn Name Generator | DND Dragonborn Names With Meaning',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dragonborn Name Generator | DND Dragonborn Names With Meaning',
    description: "Create powerful and meaningful names with our Dragonborn Name Generator. Perfect for generating random Dragonborn names with deep meanings for your characters!",
    images: ['bg-dragonborn.webp'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['demon name generator', 'dnd dragonborn name generator', 'dragonborn name generator dnd', 'random dragonborn name generator', 'bg3 dragonborn name generator', 'female dragonborn name generator', 'dragonborn name generator bg3', 'dragonborn name generator 5e', '5e dragonborn name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/dragonborn-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <DragonbornNameGenerator/>
    </div>
  )
}

export default page

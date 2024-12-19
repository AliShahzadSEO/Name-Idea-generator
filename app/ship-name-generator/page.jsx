import ShipNameGenerator from "@/components/ship-name-generator/ShipNameGenerator"

export const metadata = {
  title: 'Free Ship Name Generator with Meaning | Name Idea Generator',
  description: "Discover unique and meaningful ship names with our Ship Name Generator. Get creative suggestions for your ship's name along with their meanings, perfect for any adventure. Try it now at Name Idea Generator!",
  
  openGraph: {
    title: 'Free Ship Name Generator with Meaning | Name Idea Generator',
    description: "Discover unique and meaningful ship names with our Ship Name Generator. Get creative suggestions for your ship's name along with their meanings, perfect for any adventure. Try it now at Name Idea Generator!",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: '/An-ornate-ship-with-mystical-symbols.jpg',
        width: 800,
        height: 600,
        alt: 'Free Ship Name Generator with Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Free Ship Name Generator with Meaning | Name Idea Generator',
    description: "Discover unique and meaningful ship names with our Ship Name Generator. Get creative suggestions for your ship's name along with their meanings, perfect for any adventure. Try it now at Name Idea Generator!",
    images: ['/An-ornate-ship-with-mystical-symbols.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['ship name generator', 'ship name', 'ship name maker', 'ship generator', 'ship names generator', 'Classic ship name', 'Mythical ship name', 'Futuristic ship name', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/ship-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <ShipNameGenerator/>
    </div>
  )
}

export default page

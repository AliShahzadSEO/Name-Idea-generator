import KingdomNameGenerator from "@/components/kingdom-name-generator/KingdomNameGenerator"

export const metadata = {
  title: 'Kingdom Name Generator With Meaning | Create the Ideal Realm Name!',
  description: "Use our Kingdom Name Generator to create unique names with meanings. Find your perfect realm name at Name Idea Generator!",
  
  openGraph: {
    title: 'Kingdom Name Generator With Meaning | Create the Ideal Realm Name!',
    description: "Use our Kingdom Name Generator to create unique names with meanings. Find your perfect realm name at Name Idea Generator!",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: '/kingdom-name-generator.jpeg',
        width: 800,
        height: 600,
        alt: 'Kingdom Name Generator With Meaning | Create the Ideal Realm Name!',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kingdom Name Generator With Meaning | Create the Ideal Realm Name!',
    description: "Use our Kingdom Name Generator to create unique names with meanings. Find your perfect realm name at Name Idea Generator!",
    images: ['/kingdom-name-generator.jpeg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['kingdom name generator', 'kingdom names', 'fantasy kingdom name generator', 'fantasy kingdom names', 'kingdom names generator', 'Kingdom Name Generator With Meaning', 'Elegant Kingdom Names', 'Power Kingdom Name', 'Mythical Kingdom Names', 'good kingdom names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/kingdom-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <KingdomNameGenerator/>
    </div>
  )
}

export default page

import WarriorCatNameGenerator from "@/components/warrior-cat-name-generator/WarriorCatNameGenerator"

export const metadata = {
  title: 'Free Warrior Cat Name Generator with Meaning | Name Idea Generator',
  description: "Generate unique and meaningful Warrior Cat names instantly with our free name generator. Perfect for writers, gamers, and fans of the Warrior Cats universe!",
  
  openGraph: {
    title: 'Free Warrior Cat Name Generator with Meaning | Name Idea Generator',
    description: "Generate unique and meaningful Warrior Cat names instantly with our free name generator. Perfect for writers, gamers, and fans of the Warrior Cats universe!",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: '/An-ornate-ship-with-mystical-symbols.jpg',
        width: 800,
        height: 600,
        alt: 'Free Warrior Cat Name Generator with Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Free Warrior Cat Name Generator with Meaning | Name Idea Generator',
    description: "Generate unique and meaningful Warrior Cat names instantly with our free name generator. Perfect for writers, gamers, and fans of the Warrior Cats universe!",
    images: ['/An-ornate-ship-with-mystical-symbols.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['warrior cat name generator', 'warrior cats name generator', 'wcue name generator', 'random warrior cat name generator', 'warrior cat names generator', 'male cat names generator', 'female cat names generator', 'leader cat names generator', 'mythical cat names generator', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/ship-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <WarriorCatNameGenerator/>
    </div>
  )
}

export default page

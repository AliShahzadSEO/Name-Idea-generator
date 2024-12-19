import GuildNameGenerator from "@/components/guild-name-generator/GuildNameGenerator"

export const metadata = {
  title: 'Guild Name Generator with Meaning | Name Idea Generator ',
  description: "Generate unique and meaningful guild names for your team, clan, or faction with our Guild Name Generator. Customize by gender, category, and theme to create the perfect name for your group.",
  
  openGraph: {
    title: 'Guild Name Generator with Meaning | Name Idea Generator',
    description: "Generate unique and meaningful guild names for your team, clan, or faction with our Guild Name Generator. Customize by gender, category, and theme to create the perfect name for your group.",
    url: 'https://www.nameideagenerator.com/drow-name-generator',
    images: [
      {
        url: '/guild-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Guild Name Generator with Meaning | Name Idea Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Guild Name Generator with Meaning | Name Idea Generator',
    description: "Generate unique and meaningful guild names for your team, clan, or faction with our Guild Name Generator. Customize by gender, category, and theme to create the perfect name for your group.",
    images: ['/guild-name-generator.jpg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['ff guild name', 'guild name style', 'guild name generator', 'faction name generator', 'guild names generator', 'guild names', 'guild male names', 'male guild names', 'female guild names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/guild-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <GuildNameGenerator/>
    </div>
  )
}

export default page

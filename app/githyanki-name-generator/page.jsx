import GithyankiNameGenerator from "@/components/githyanki-name-generator/GithyankiNameGenerator"

export const metadata = {
  title: 'Githyanki Name Generator With Meaning | Dungeons & Dragons Name Generator',
  description: "Generate unique Githyanki names with meaning for your Dungeons & Dragons characters. Our tool offers authentic, lore-friendly names for male, female, and unisex Githyanki, perfect for enhancing your campaigns and character development.",
  
  openGraph: {
    title: 'Githyanki Name Generator With Meaning | Dungeons & Dragons Name Generator',
    description: "Generate unique Githyanki names with meaning for your Dungeons & Dragons characters. Our tool offers authentic, lore-friendly names for male, female, and unisex Githyanki, perfect for enhancing your campaigns and character development.",
    url: 'https://www.nameideagenerator.com/drow-name-generator',
    images: [
      {
        url: '/githyanki-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Githyanki Name Generator With Meaning | Dungeons & Dragons Name Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Githyanki Name Generator With Meaning | Dungeons & Dragons Name Generator',
    description: "Generate unique Githyanki names with meaning for your Dungeons & Dragons characters. Our tool offers authentic, lore-friendly names for male, female, and unisex Githyanki, perfect for enhancing your campaigns and character development.",
    images: ['/githyanki-name-generator.jpg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['githyanki name generator', 'githyanki names', 'gith name generator', 'githyanki names and meanings', 'female githyanki names', 'drow githyanki names', 'drow githyanki names', 'male githyanki names', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/githyanki-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <GithyankiNameGenerator/>
    </div>
  )
}

export default page

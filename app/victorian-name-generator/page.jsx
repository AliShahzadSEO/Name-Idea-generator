import VictorianNameGenerator from "@/components/victorian-name-generator/VictorianNameGenerator"

export const metadata = {
  title: 'Victorian Name Generator with Meaning | Name Idea Generator',
  description: "Create elegant Victorian names effortlessly with our Victorian Name Generator. Choose male or female names from categories like Traditional, Old English, or Old-Fashioned. Add meaning and historical depth to your characters or creative projects instantly.",
  
  openGraph: {
    title: 'Victorian Name Generator with Meaning | Name Idea Generator',
    description: "Create elegant Victorian names effortlessly with our Victorian Name Generator. Choose male or female names from categories like Traditional, Old English, or Old-Fashioned. Add meaning and historical depth to your characters or creative projects instantly.",
    url: 'https://www.nameideagenerator.com/victorian-name-generator',
    images: [
      {
        url: '/victorian-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Victorian Name Generator with Meaning | Name Idea Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Victorian Name Generator with Meaning | Name Idea Generator',
    description: "Create elegant Victorian names effortlessly with our Victorian Name Generator. Choose male or female names from categories like Traditional, Old English, or Old-Fashioned. Add meaning and historical depth to your characters or creative projects instantly.",
    images: ['/victorian-name-generator.jpg'],
    type: 'image/webp'  // Added twitter:image:type
  },

  keywords: ['Victorian Name Generator', 'victorian names', 'bloodborne name generator', '1800s name generator', 'old person name generator', 'victorian names generator', 'victorian era name generator', 'victorian male names generator', 'victorian last name generator', 'victorian era name generator', 'Male victorian name generator', 'female victorian name generator'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/victorian-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <VictorianNameGenerator/>
    </div>
  )
}

export default page

import ChineseNameGenerator from "@/components/chinese-name-generator/ChineseNameGenerator"

export const metadata = {
  title: 'Chinese Name Generator Tool | Generate Names with Meaning',
  description: "Generate unique Chinese names with meanings using our Chinese Name Generator. Find the perfect name quickly at Name Idea Generator!",
  
  openGraph: {
    title: 'Chinese Name Generator Tool | Generate Names with Meaning',
    description: "Generate unique Chinese names with meanings using our Chinese Name Generator. Find the perfect name quickly at Name Idea Generator!",
    url: 'https://www.nameideagenerator.com/chinese-name-generator',
    images: [
      {
        url: '/wizards-wizard-name-ideas.webp',
        width: 800,
        height: 600,
        alt: 'Chinese Name Generator Tool | Generate Names with Meaning',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Chinese Name Generator Tool | Generate Names with Meaning',
    description: "Generate unique Chinese names with meanings using our Chinese Name Generator. Find the perfect name quickly at Name Idea Generator!",
    images: ['/wizards-wizard-name-ideas.webp'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Chinese Name Generator', 'chinese names generator', 'chinese male names', 'asian name generator', 'random chinese name generator', 'what is my chinese name', 'chinese name generator male', 'chinese name generator with meaning', 'chinese name generator from english'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/chinese-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <ChineseNameGenerator/>
    </div>
  )
}

export default page

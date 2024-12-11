import WizardNameGenerator from "@/components/wizard-name-generator/WizardNameGenerator"

export const metadata = {
  title: 'Wizard Name Generator Tool | Generate Names with Meaning',
  description: "Generate magical wizard names with our Wizard Name Generator. Personalize by choosing a kingdom, selecting a style, and uncovering the meaning behind each name.",
  
  openGraph: {
    title: 'Wizard Name Generator Tool | Generate Names with Meaning',
    description: "Generate magical wizard names with our Wizard Name Generator. Personalize by choosing a kingdom, selecting a style, and uncovering the meaning behind each name.",
    url: 'https://www.nameideagenerator.com/dragonborn-name-generator',
    images: [
      {
        url: '/wizards-wizard-name-ideas.webp',
        width: 800,
        height: 600,
        alt: 'Wizard Name Generator Tool | Generate Names with Meaning',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Wizard Name Generator Tool | Generate Names with Meaning',
    description: "Generate magical wizard names with our Wizard Name Generator. Personalize by choosing a kingdom, selecting a style, and uncovering the meaning behind each name.",
    images: ['/wizards-wizard-name-ideas.webp'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['name a wizard', 'best wizard names', 'human wizard name generator', 'dnd wizard name generator', 'wizard name generator based on your name', 'wizard names generator', 'female wizard names generator', 'water wizard names generator', 'fire wizard names generator', 'DnD names'],
  
  robots:{index:true, follow: true},
  
  alternates:{
    canonical:"https://www.nameideagenerator.com/wizard-name-generator"
  },
}

const page = () => {
  return (
    <div>
        <WizardNameGenerator/>
    </div>
  )
}

export default page

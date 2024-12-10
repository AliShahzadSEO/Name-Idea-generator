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

  keywords: ['warrior cat name generator', 'warrior cats name generator', 'wcue name generator', 'random warrior cat name generator', 'warrior cat names generator', 'male cat names generator', 'female cat names generator', 'leader cat names generator', 'mythical cat names generator', 'DnD names'],
  
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

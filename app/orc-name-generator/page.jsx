import ORCNameGenerator from "@/components/orc-name-generator/OrcNameGenerator"

export const metadata = {
  title: 'Orc Name Generator | Random Orc Name Generator With Meaning',
  description: "Forge fierce identities with our Orc Name Generator! Generate random orc names with meanings that reflect their strength and warrior spirit. Find the perfect name idea for your orc character quickly and easily.",
  
  openGraph: {
    title: 'Orc Name Generator | Random Orc Name Generator With Meaning',
    description: "Forge fierce identities with our Orc Name Generator! Generate random orc names with meanings that reflect their strength and warrior spirit. Find the perfect name idea for your orc character quickly and easily.",
    url: 'https://www.nameideagenerator.com/orc-name-generator',
    images: [
      {
        url: 'orc-name-generator.jpg',
        width: 800,
        height: 600,
        alt: 'Orc Name Generator | Random Orc Name Generator With Meaning',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Orc Name Generator | Random Orc Name Generator With Meaning',
    description: "Forge fierce identities with our Orc Name Generator! Generate random orc names with meanings that reflect their strength and warrior spirit. Find the perfect name idea for your orc character quickly and easily.",
    images: ['orc-name-generator.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['Orc Name Generator', 'half orc name generator ', 'orc name generator skyrim', 'half-orc name generator',
     'skyrim orc name generator', 'wow orc name generator', 'dnd orc name generator', 'orc name generator wow', 'orc name generator dnd'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/orc-name-generator"
  },
}


const page = () => {
  return (
    <div>
        <ORCNameGenerator />
    </div>
  )
}

export default page

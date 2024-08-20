import TabaxiNameGenerator from "@/components/tabaxi-name-generator/Tabaxi-Name-Generator"

export const metadata = {
  title: 'Tabaxi Name Generator | Random Tabaxi Name Generator With Meaning | Name Idea Generator',
  description: "Unleash your creativity with our Tabaxi Name Generator! Generate random Tabaxi names with meanings that reflect their feline grace and mystique. Find the perfect name idea for your Tabaxi character quickly and easily.",
  
  openGraph: {
    title: 'Tabaxi Name Generator | Random Tabaxi Name Generator With Meaning | Name Idea Generator',
    description: "Unleash your creativity with our Tabaxi Name Generator! Generate random Tabaxi names with meanings that reflect their feline grace and mystique. Find the perfect name idea for your Tabaxi character quickly and easily.",
    url: 'https://www.nameideagenerator.com/tabaxi-name-generator',
    images: [
      {
        url: 'tabaxi.jpeg',
        width: 800,
        height: 600,
        alt: 'Tabaxi Name Generator | Random Tabaxi Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tabaxi Name Generator | Random Tabaxi Name Generator With Meaning | Name Idea Generator',
    description: "Unleash your creativity with our Tabaxi Name Generator! Generate random Tabaxi names with meanings that reflect their feline grace and mystique. Find the perfect name idea for your Tabaxi character quickly and easily.",
    images: ['tabaxi.jpeg'],
  },

  keywords: ['tabaxi name generator', ' dnd tabaxi name generator', 'tabaxi name generator 5e', 'random tabaxi name generator',
     'dnd 5e tabaxi name generator', 'tabaxi name generator dnd', 'd&d tabaxi name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/tabaxi-name-generator"
  },
}


const page = () => {
    return (
      <div>
      <TabaxiNameGenerator />
      </div>
    )
  }
  
  export default page
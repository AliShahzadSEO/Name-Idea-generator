import KoboldNameGenerator from "@/components/kobold-name-generator/Kobold-Name-Generator"

export const metadata = {
  title: 'Kobold Name Generator | Random Kobold Name Generator With Meaning | Name Idea Generator ',
  description: "Unleash creativity with our Kobold Name Generator! Generate random kobold names with meanings that reflect their cunning and charm. Find the perfect name idea for your kobold character effortlessly.",
  
  openGraph: {
    title: 'Kobold Name Generator | Random Kobold Name Generator With Meaning | Name Idea Generator',
    description: "Unleash creativity with our Kobold Name Generator! Generate random kobold names with meanings that reflect their cunning and charm. Find the perfect name idea for your kobold character effortlessly.",
    url: 'https://www.nameideagenerator.com/kobold-name-generator',
    images: [
      {
        url: 'kobold.jpg',
        width: 800,
        height: 600,
        alt: 'Kobold Name Generator | Random Kobold Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kobold Name Generator | Random Kobold Name Generator With Meaning | Name Idea Generator',
    description: "Unleash creativity with our Kobold Name Generator! Generate random kobold names with meanings that reflect their cunning and charm. Find the perfect name idea for your kobold character effortlessly.",
    images: ['kobold.jpg'],
  },

  keywords: ['Kobold Name Generator', 'kobold name generator pathfinder', 'dnd kobold name generator ', 'random kobold name generator',
     'female kobold name generator', 'd&d 3.5 kobold name generator ', 'kobold name generator 5e', 'dungeons and dragons kobold name generator', 'pathfinder kobold name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/kobold-name-generator"
  },
}


const page = () => {
    return (
      <div>
      <KoboldNameGenerator />
      </div>
    )
  }
  
  export default page
import TieflingNameGenerator from "@/components/tiefling-name-generator/TieflingNameGenerator"

export const metadata = {
  title: 'Tiefling Name Generator | Get Random Tiefling Name With Meaning',
  description: "Summon a unique name for your Tiefling character with our Tiefling Name Generator! Get random names that capture the mystique and fiery essence of Tieflings. Find the perfect name idea effortlessly!",
  
  openGraph: {
    title: 'Tiefling Name Generator | Get Random Tiefling Name With Meaning',
    description: "Summon a unique name for your Tiefling character with our Tiefling Name Generator! Get random names that capture the mystique and fiery essence of Tieflings. Find the perfect name idea effortlessly!",
    url: 'http://nameideagenerator.com/tiefling-name-generator',
    images: [
      {
        url: 'female.jpg',
        width: 800,
        height: 600,
        alt: 'Tiefling Name Generator | Get Random Tiefling Name With Meaning',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tiefling Name Generator | Get Random Tiefling Name With Meaning',
    description: "Summon a unique name for your Tiefling character with our Tiefling Name Generator! Get random names that capture the mystique and fiery essence of Tieflings. Find the perfect name idea effortlessly!",
    images: ['female.jpg'],
  },

  keywords: ['Tiefling name generator', 'tiefling name generator 5e', 'tiefling name generator dnd', 'dnd tiefling name generator',
     'female tiefling name generator', 'tiefling name generator pathfinder', 'bg3 tiefling name generator'],
     robots:{index:true, follow: true},
     alternates:{
       canonical:"https://www.nameideagenerator.com/tiefling-name-generator"
     },
}

const page = () => {
  return (
    <div>
        <TieflingNameGenerator />
    </div>
  )
}

export default page

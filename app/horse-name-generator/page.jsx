import HorseNameGenerator from "@/components/horse-name-generator/Horse-Name-Generator"

export const metadata = {
  title: 'Horse Name Generator | Race Horse Name Generator With Meaning | Name Idea Generator ',
  description: "Discover the perfect name for your horse with our Horse Name Generator! Find unique race horse names with meanings that capture your horse's spirit and strength. Get creative and choose the best name ideas effortlessly.",
  
  openGraph: {
    title: 'Horse Name Generator | Race Horse Name Generator With Meaning | Name Idea Generator',
    description: "Discover the perfect name for your horse with our Horse Name Generator! Find unique race horse names with meanings that capture your horse's spirit and strength. Get creative and choose the best name ideas effortlessly.",
    url: 'https://www.nameideagenerator.com/horse-name-generator',
    images: [
      {
        url: 'horse.webp',
        width: 800,
        height: 600,
        alt: 'Horse Name Generator | Race Horse Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Horse Name Generator | Race Horse Name Generator With Meaning | Name Idea Generator',
    description: "Discover the perfect name for your horse with our Horse Name Generator! Find unique race horse names with meanings that capture your horse's spirit and strength. Get creative and choose the best name ideas effortlessly.",
    images: ['horse.webp'],
  },

  keywords: ['Horse name generator', 'race horse name generator', 'random horse name generator ', 'horse name generator rdr2',
     'registered horse name generator', 'derby horse name generator ', 'rdr2 horse name generator', 'kentucky derby horse name generator', 'horse name generator using parents names'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/horse-name-generator"
  },
}

const page = () => {
    return (
      <div>
        <HorseNameGenerator />
      </div>
    )
  }
  
  export default page
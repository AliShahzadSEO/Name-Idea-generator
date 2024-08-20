import VikingNameGenerator from "@/components/viking-name-generator/Viking-Name-Generator"

export const metadata = {
  title: 'Viking Name Generator | (Old Norse) Name Generator With Meaning | Name Idea Generator ',
  description: "Embark on a journey through Norse mythology with our Viking Name Generator! Generate Old Norse names with meanings that evoke the strength and legacy of Viking warriors. Discover the perfect name idea for your Viking character in moments.",
  
  openGraph: {
    title: 'Viking Name Generator | (Old Norse) Name Generator With Meaning | Name Idea Generator',
    description: "Embark on a journey through Norse mythology with our Viking Name Generator! Generate Old Norse names with meanings that evoke the strength and legacy of Viking warriors. Discover the perfect name idea for your Viking character in moments.",
    url: 'http://nameideagenerator.com/viking-name-generator',
    images: [
      {
        url: 'vikings.jpg',
        width: 800,
        height: 600,
        alt: 'Viking Name Generator | (Old Norse) Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Viking Name Generator | (Old Norse) Name Generator With Meaning | Name Idea Generator',
    description: "Embark on a journey through Norse mythology with our Viking Name Generator! Generate Old Norse names with meanings that evoke the strength and legacy of Viking warriors. Discover the perfect name idea for your Viking character in moments.",
    images: ['vikings.jpg'],
  },

  keywords: ['Viking name generator', 'viking name generator male', 'random viking name generator', 'viking name generator with meaning',
     'female viking name generator', 'httyd viking name generator', 'viking name generator from your name', 'badass viking name generator'],
  canonical: 'http://nameideagenerator.com/viking-name-generator',
  
}

const page = () => {
    return (
      <div>
         <VikingNameGenerator />
      </div>
    )
  }
  
  export default page
import GreekNameGenerator from "@/components/greek-name-generator/Greek-Name-Generator"

export const metadata = {
  title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator ',
  description: "Discover meaningful and authentic Greek names with our Greek Name Generator at Name Idea Generator. Perfect for finding unique and random Greek names for your characters!",
  
  openGraph: {
    title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator',
    description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
    url: 'https://www.nameideagenerator.com/goblin-name-generator',
    images: [
      {
        url: 'greek.webp',
        width: 800,
        height: 600,
        alt: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator',
    description: "Discover mischievous and quirky names with our Goblin Name Generator! Instantly create random goblin names for your stories, games, or characters. Find the perfect name that brings your goblin to life.",
    images: ['greek.webp'],
  },

  keywords: ['greek name generator', 'ancient greek name generator', 'random greek name generator', 'greek name generator with meaning',
     'greek name generator ancient', 'random ancient greek name generator', 'modern greek name generator', 'old greek name generator', 'fantasy greek name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/goblin-name-generator"
  },
}


const page = () => {
    return (
      <div>
      <GreekNameGenerator />
      </div>
    )
  }
  
  export default page
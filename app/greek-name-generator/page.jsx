import GreekNameGenerator from "@/components/greek-name-generator/Greek-Name-Generator"

export const metadata = {
  title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator ',
  description: "Discover random ancient, modern, and old Greek names with meanings using our Greek Name Generator. Perfect for stories, games, and more!",
  
  openGraph: {
    title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator',
    description: "Discover random ancient, modern, and old Greek names with meanings using our Greek Name Generator. Perfect for stories, games, and more!",
    url: 'https://www.nameideagenerator.com/greek-name-generator',
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
    description: "Discover random ancient, modern, and old Greek names with meanings using our Greek Name Generator. Perfect for stories, games, and more!",
    images: ['greek.webp'],
  },

  keywords: ['greek name generator', 'ancient greek name generator', 'random greek name generator', 'greek name generator with meaning',
     'greek name generator ancient', 'random ancient greek name generator', 'modern greek name generator', 'old greek name generator', 'fantasy greek name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/greek-name-generator"
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
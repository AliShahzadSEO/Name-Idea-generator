import GreekNameGenerator from "@/components/greek-name-generator/Greek-Name-Generator"

export const metadata = {
  title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator ',
  description: "Generate authentic Greek names with meanings using our Greek Name Generator. Perfect for characters, stories, or any creative project—find the ideal Greek name in seconds!",
  
  openGraph: {
    title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator',
    description: "Generate authentic Greek names with meanings using our Greek Name Generator. Perfect for characters, stories, or any creative project—find the ideal Greek name in seconds!",
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
    description: "Generate authentic Greek names with meanings using our Greek Name Generator. Perfect for characters, stories, or any creative project—find the ideal Greek name in seconds!",
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
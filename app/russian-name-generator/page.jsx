import RussianNameGenerator from "@/components/russian-name-generator/Russian-Name-Generator"

export const metadata = {
  title: 'Russian Name Generator | Random Russian Name Generator With Meaning | Name Idea Generator ',
  description: "Discover authentic Russian names with our Russian Name Generator! Generate random names with meanings that reflect cultural heritage and history. Find the ideal name idea for your character effortlessly.",
  
  openGraph: {
    title: 'Robot Name Generator | Random Robot Name Generator With Meaning | Name Idea Generator',
    description: "Discover authentic Russian names with our Russian Name Generator! Generate random names with meanings that reflect cultural heritage and history. Find the ideal name idea for your character effortlessly.",
    url: 'https://www.nameideagenerator.com/russian-name-generator',
    images: [
      {
        url: 'Russian.webp',
        width: 800,
        height: 600,
        alt: 'Russian Name Generator | Random Russian Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Russian Name Generator | Random Russian Name Generator With Meaning | Name Idea Generator',
    description: "Discover authentic Russian names with our Russian Name Generator! Generate random names with meanings that reflect cultural heritage and history. Find the ideal name idea for your character effortlessly.",
    images: ['Russian.webp'],
  },

  keywords: ['russian Name Generator', ' russian name generator male ', 'russian name generator fantasy', 'random russian name generator',
     'russian name generator female', 'russian name generator with meaning', 'english to russian name generator', 'female russian name generator', 'old russian name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/russian-name-generator"
  },
}

const page = () => {
    return (
      <div>
        <RussianNameGenerator />
      </div>
    )
  }
  
  export default page
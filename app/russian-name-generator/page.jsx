import RussianNameGenerator from "@/components/russian-name-generator/Russian-Name-Generator"

export const metadata = {
  title: 'Russian Name Generator | Random Russian Name Generator With Meaning | Name Idea Generator ',
  description: "Create random Russian names with meanings using our Russian Name Generator. Ideal for characters, stories, and creative projects!",
  
  openGraph: {
    title: 'Robot Name Generator | Random Robot Name Generator With Meaning | Name Idea Generator',
    description: "Create random Russian names with meanings using our Russian Name Generator. Ideal for characters, stories, and creative projects!",
    url: 'https://www.nameideagenerator.com/russian-name-generator',
    images: [
      {
        url: 'Russian.webp',
        width: 800,
        height: 600,
        alt: 'Russian Name Generator | Random Russian Name Generator With Meaning | Name Idea Generator',
        type: 'image/webp'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Russian Name Generator | Random Russian Name Generator With Meaning | Name Idea Generator',
    description: "Create random Russian names with meanings using our Russian Name Generator. Ideal for characters, stories, and creative projects!",
    images: ['Russian.webp'],
    type: 'image/webp'  // Added twitter:image:type
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
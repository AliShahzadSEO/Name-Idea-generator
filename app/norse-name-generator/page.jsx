import NorseNameGenerator from "@/components/norse-name-generator/Norse-Name-Generator"

export const metadata = {
  title: 'Norse Name Generator | Random Old Norse Name Generator With Meaning',
  description: "Explore the rich heritage of the Norse with our Norse Name Generator! Generate random Norse names with powerful meanings that embody strength and tradition. Discover the perfect name idea for your Viking character in seconds.",
  
  openGraph: {
    title: 'Norse Name Generator | Random Old Norse Name Generator With Meaning',
    description: "Explore the rich heritage of the Norse with our Norse Name Generator! Generate random Norse names with powerful meanings that embody strength and tradition. Discover the perfect name idea for your Viking character in seconds.",
    url: 'https://www.nameideagenerator.com/norse-name-generator',
    images: [
      {
        url: 'Norse.jpg',
        width: 800,
        height: 600,
        alt: 'Norse Name Generator | Random Old Norse Name Generator With Meaning',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Norse Name Generator | Random Old Norse Name Generator With Meaning',
    description: "Explore the rich heritage of the Norse with our Norse Name Generator! Generate random Norse names with powerful meanings that embody strength and tradition. Discover the perfect name idea for your Viking character in seconds.",
    images: ['Norse.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['norse name generator', 'old norse name generator', 'random norse name generator ', 'norse name generator fantasy',
     'female norse name generator', 'fantasy norse name generator', 'ancient norse name generator', 'male norse name generator', 'norse name generator female'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/norse-name-generator"
  },
}

const page = () => {
    return (
      <div>
      <NorseNameGenerator />
      </div>
    )
  }
  
  export default page
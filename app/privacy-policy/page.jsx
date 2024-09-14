import PrivacyPolicy from "@/components/privacy-policy/Privacy-Policy"
import GreekNameGenerator from "@/components/privacy-policy/Privacy-Policy"

export const metadata = {
  title: 'Privacy Policy | Name Idea Generator ',
  description: "Discover random ancient, modern, and old Greek names with meanings using our Greek Name Generator. Perfect for stories, games, and more!",
  
  openGraph: {
    title: 'Greek Name Generator | Random Greek Name Generator With Meaning | Name Idea Generator',
    description: "Discover random ancient, modern, and old Greek names with meanings using our Greek Name Generator. Perfect for stories, games, and more!",
    url: 'https://www.nameideagenerator.com/privacy-policy',
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

  
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/privacy-policy"
  },
}


const page = () => {
    return (
      <div>
      <PrivacyPolicy />
      </div>
    )
  }
  
  export default page
import AboutUs from "@/components/about-us/About-Us"

export const metadata = {

  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/about-us"
  },

  title: 'About Us | Name Idea Generator',
  description: "Discover unique and creative names with Name Idea Generator. Perfect for writers, gamers, and creators looking for fantasy, cultural, or historical name ideas. Free, easy, and secure!",
  
  openGraph: {
    title: 'About Us | Name Idea Generator',
    description: "Discover unique and creative names with Name Idea Generator. Perfect for writers, gamers, and creators looking for fantasy, cultural, or historical name ideas. Free, easy, and secure!",
    url: 'https://www.nameideagenerator.com/about-us',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Name Idea Generator',
    description: "Discover unique and creative names with Name Idea Generator. Perfect for writers, gamers, and creators looking for fantasy, cultural, or historical name ideas. Free, easy, and secure!",
  
  },
}


const page = () => {
    return (
      <div>
      <AboutUs />
      </div>
    )
  }
  
  export default page
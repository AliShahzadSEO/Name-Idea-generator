import ContactUs from "@/components/contact-us/ContactUs"

export const metadata = {

  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/contact-us"
  },

  title: 'About Us | Name Idea Generator',
  description: "Discover unique and creative names with Name Idea Generator. Perfect for writers, gamers, and creators looking for fantasy, cultural, or historical name ideas. Free, easy, and secure!",
  
  openGraph: {
    title: 'About Us | Name Idea Generator',
    description: "Discover unique and creative names with Name Idea Generator. Perfect for writers, gamers, and creators looking for fantasy, cultural, or historical name ideas. Free, easy, and secure!",
    url: 'https://www.nameideagenerator.com/contact-us',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Name Idea Generator',
    description: "Discover unique and creative names with Name Idea Generator. Perfect for writers, gamers, and creators looking for fantasy, cultural, or historical name ideas. Free, easy, and secure!",
  
  },
  locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
}


const page = () => {
    return (
      <div>
      <ContactUs />
      </div>
    )
  }
  
  export default page
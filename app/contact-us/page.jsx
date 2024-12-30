import ContactUs from "@/components/contact-us/ContactUs"

export const metadata = {

  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/contact-us"
  },

  title: 'Contact Us | Name Idea Generator',
  description: "Get in touch with Name Idea Generator for any inquiries, feedback, or support. We're here to help with all your name-generating needs. Contact us today!",
  
  openGraph: {
    title: 'Contact Us | Name Idea Generator',
    description: "Get in touch with Name Idea Generator for any inquiries, feedback, or support. We're here to help with all your name-generating needs. Contact us today!",
    url: 'https://www.nameideagenerator.com/contact-us',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Name Idea Generator',
    description: "Get in touch with Name Idea Generator for any inquiries, feedback, or support. We're here to help with all your name-generating needs. Contact us today!",
  
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
import PrivacyPolicy from "@/components/privacy-policy/Privacy-Policy"

export const metadata = {

  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/privacy-policy"
  },

  title: 'Privacy Policy | Name Idea Generator',
  description: "Learn how we collect, use, and protect your data at Name Idea Generator. Our privacy policy ensures your information is secure and used responsibly. Simple, clear, and transparent",
  
  openGraph: {
    title: 'Privacy Policy | Name Idea Generator',
    description: "Learn how we collect, use, and protect your data at Name Idea Generator. Our privacy policy ensures your information is secure and used responsibly. Simple, clear, and transparent",
    url: 'https://www.nameideagenerator.com/privacy-policy',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Name Idea Generator',
    description: "Learn how we collect, use, and protect your data at Name Idea Generator. Our privacy policy ensures your information is secure and used responsibly. Simple, clear, and transparent",
  
  },
  locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
}


const page = () => {
    return (
      <div>
      <PrivacyPolicy />
      </div>
    )
  }
  
  export default page
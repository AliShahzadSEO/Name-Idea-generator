import ContactUs from "@/components/contact-us/Contact-Us"
import Script from "next/script";

export const metadata = {

  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/contact-us"
  },

  title: 'Contact Us | Name Idea Generator',
  description: "Get in touch with Name Idea Generator. Whether you need support, have a question, or want to collaborate, we're here to help! Contact us today.",
  
  openGraph: {
    title: 'Contact Us | Name Idea Generator',
    description: "Get in touch with Name Idea Generator. Whether you need support, have a question, or want to collaborate, we're here to help! Contact us today.",
    url: 'https://www.nameideagenerator.com/contact-us',
    images: [
        {
          url: 'NIG-contact-us.jpg',
          width: 800,
          height: 600,
          alt: 'Contact Us | Name Idea Generator',
          type: 'image/jpg',
        },
      ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Name Idea Generator',
    description: "Get in touch with Name Idea Generator. Whether you need support, have a question, or want to collaborate, we're here to help! Contact us today.",
    images: ['NIG-contact-us.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },
  locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name

    robots:{index:true, follow: true},

  keywords: ['contact Name Idea Generator', 'name generator support', 'get in touch', 'name ideas help', 'contact form'],
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/contact-us"
  },
}

const page = () => {
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Contact Us | Name Idea Generator",
      "url": "https://www.nameideagenerator.com/contact-us",
      "title": "Contact Us | Name Idea Generator",
      "description":
        "Get in touch with Name Idea Generator. Whether you need support, have a question, or want to collaborate, we're here to help! Contact us today.",
      "image": "https://www.nameideagenerator.com/NIG-contact-us.jpg",
      "keywords": [
        "contact Name Idea Generator",
        "name generator support",
        "get in touch",
        "name ideas help",
        "contact form",
      ],
      "author": {
        "@type": "Organization",
        "name": "Name Idea Generator",
        "url": "https://www.nameideagenerator.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Name Idea Generator",
        "url": "https://www.nameideagenerator.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nameideagenerator.com/Logo.png",
        },
      },
      "brand": {
        "@type": "Brand",
        "name": "Name Idea Generator",
        "logo": "https://www.nameideagenerator.com/Logo.png",
      },
    };
  
    return (
      <div>
        {/* Inject Optimized Schema Markup */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <ContactUs />
      </div>
    );
  };
  
  export default page
import FictionalAndSciFi from '@/components/FictionalAndSciFi/FictionalAndSciFi'
import React from 'react'


export const metadata = {
  title: 'Create All Types Of Fictional And Scifi Name Generator | Name Idea Generator ',
  description: "Generate unique and creative names for all types of fictional and sci-fi characters with our Name Generator. Perfect for bringing your imaginative worlds to life!",
  
  openGraph: {
    title: 'Create All Types Of Fictional And Scifi Creatures Name Generator | Name Idea Generator',
    description: "Generate unique and creative names for all types of fictional and sci-fi characters with our Name Generator. Perfect for bringing your imaginative worlds to life!",
    url: 'https://www.nameideagenerator.com/categories/fictional-and-scifi',
   
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Create All Types Of Fictional And Scifi Creatures Name Generator | Name Idea Generator',
    description: "Generate unique and creative names for all types of fictional and sci-fi characters with our Name Generator. Perfect for bringing your imaginative worlds to life!",
 
  },
  
  robots:{index:true, follow: true},

  alternates:{
    canonical:"https://www.nameideagenerator.com/categories/fictional-and-scifi"
  },
}
const page = () => {
  return (
    <div>
      <FictionalAndSciFi />
    </div>
  )
}

export default page

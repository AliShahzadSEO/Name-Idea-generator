import Category1 from '@/components/Fantasy-and-Mythical-Creatures/Category1'
import React from 'react'

export const metadata = {
  title: 'Create All Types Of Fantasy And Mythical Creatures Name Generator | Name Idea Generator ',
  description: "Generate unique names for all types of fantasy and mythical creatures with our Name Generator. Perfect for creating imaginative and meaningful names for your characters!",
  
  openGraph: {
    title: 'Create All Types Of Fantasy And Mythical Creatures Name Generator | Name Idea Generator',
    description: "Generate unique names for all types of fantasy and mythical creatures with our Name Generator. Perfect for creating imaginative and meaningful names for your characters!",
    url: 'https://www.nameideagenerator.com/categories/cultural-and-historical',
   
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Create All Types Of Fantasy And Mythical Creatures Name Generator | Name Idea Generator',
    description: "Generate unique names for all types of fantasy and mythical creatures with our Name Generator. Perfect for creating imaginative and meaningful names for your characters!",
    images: ['bg-dragonborn.webp'],
  },
  
  robots:{index:true, follow: true},

  alternates:{
    canonical:"https://www.nameideagenerator.com/categories/fantasy-and-mythicalceatures"
  },
}

const page = () => {
  return (
    <div>
      <Category1 />
    </div>
  )
}

export default page


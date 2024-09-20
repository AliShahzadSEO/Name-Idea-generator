import Category1 from '@/components/Fantasy-and-Mythical-Creatures/Category1'
import React from 'react'

export const metadata = {
  title: 'Fantasy and Mythical Creatures Name Ideas Generator',
  description: "Explore a range of name generators for fantasy and mythical creatures, including dragons, elves, and other legendary beings.",
  url: 'https://www.nameideagenerator.com/categories/fantasy-and-mythical-creatures',

  robots: { index: true, follow: true },

  keywords: ['Fantasy and Mythical Creatures Name Ideas Generator', 'Fantasy Name Ideas Generator', 'Mythical Creatures Name Generator', 'Fantasy Creature Names', 'Mythical Names'],

  alternates: {
    canonical: 'https://www.nameideagenerator.com/categories/fantasy-and-mythical-creatures'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fantasy and Mythical Creatures Name Ideas Generator',
    description: "Explore a range of name generators for fantasy and mythical creatures, including dragons, elves, and other legendary beings.",
    images: ['category3bg.png'],
    type: 'image/png'  // Added twitter:image:type
  },
  openGraph: {
    title: 'Fantasy and Mythical Creatures Name Ideas Generator',
    description: "Explore a range of name generators for fantasy and mythical creatures, including dragons, elves, and other legendary beings.",
    url: 'https://www.nameideagenerator.com/categories/fantasy-and-mythical-creatures',
    images: [
      {
        url: 'category1bg.jpg',
        width: 800,
        height: 600,
        alt: 'Fictional and Sci-Fi Name Ideas Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
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


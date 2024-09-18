import Category1 from '@/components/Fantasy-and-Mythical-Creatures/Category1'
import React from 'react'
import Head from "next/head";

export const metadata = {
  title: 'Fantasy and Mythical Creatures Name Ideas Generator',
  description: "Explore a range of name generators for fantasy and mythical creatures, including dragons, elves, and other legendary beings.",
  url: 'https://www.nameideagenerator.com/categories/fantasy-and-mythical-creatures',

  robots: { index: true, follow: true },

  keywords: ['Fantasy and Mythical Creatures Name Ideas Generator', 'Fantasy Name Ideas Generator', 'Mythical Creatures Name Generator', 'Fantasy Creature Names', 'Mythical Names'],

  alternates: {
    canonical: 'https://www.nameideagenerator.com/categories/fantasy-and-mythical-creatures'
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


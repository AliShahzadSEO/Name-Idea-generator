import FictionalAndSciFi from '@/components/FictionalAndSciFi/FictionalAndSciFi'
import React from 'react'
import Head from "next/head";


export const metadata = {
  title: 'Fictional and Sci-Fi Name Ideas Generator',
  description: "Discover an array of name generators inspired by fictional and science fiction themes, including alien, fantasy, and futuristic names.",
  url: 'https://www.nameideagenerator.com/categories/fictional-and-scifi',

  robots: { index: true, follow: true },

  keywords: ['Fictional and Sci-Fi Name Ideas Generator', 'Fictional Name Ideas Generator', 'Sci-Fi Name Ideas Generator', 'Fictional Name Generator', 'Sci-Fi Name Generator'],

  alternates: {
    canonical: 'https://www.nameideagenerator.com/categories/fictional-and-scifi'
  },
  openGraph: {
    title: 'Fictional and Sci-Fi Name Ideas Generator',
    description: "Discover an array of name generators inspired by fictional and science fiction themes, including alien, fantasy, and futuristic names.",
    url: 'https://www.nameideagenerator.com/categories/cultural-and-historical',
    images: [
      {
        url: 'category3bg.png',
        width: 800,
        height: 600,
        alt: 'Fictional and Sci-Fi Name Ideas Generator',
      },
    ],
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

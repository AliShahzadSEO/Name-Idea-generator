
import Category2 from "@/components/CulturalandHistorical/Category2";
import Head from "next/head";
import React from "react";



export const metadata={
  title: 'Cultural and Historical Name Ideas Generator',
  description: "Explore a variety of name generators based on different cultural and historical themes, including Viking, Greek, Roman, and more.",
  url: 'https://www.nameideagenerator.com/categories/cultural-and-historical',

  robots:{index:true, follow: true},

  keywords: ['Cultural and Historical Name Ideas Generator', 'Cultural Name Ideas Generator', 'Historical Name Ideas Generator', 'Cultural Name Generator', 'Historical Name Generator'],
 
  alternates:{
    canonical:"https://www.nameideagenerator.com/categories/cultural-and-historical"
  },
  openGraph: {
    title: 'Cultural and Historical Name Ideas Generator',
    description: "Explore a variety of name generators based on different cultural and historical themes, including Viking, Greek, Roman, and more.",
    url: 'https://www.nameideagenerator.com/categories/cultural-and-historical',
    images: [
      {
        url: 'category2bg.jpg',
        width: 800,
        height: 600,
        alt: 'Cultural and Historical Name Ideas Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cultural and Historical Name Ideas Generator',
    description: "Explore a variety of name generators based on different cultural and historical themes, including Viking, Greek, Roman, and more.",
    images: ['category2bg.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },
}

const Page = () => { 
  return (
    <>
      <Head>
        <title>Cultural and Historical</title>
      </Head>
      <div>
        <Category2 />
      </div>
    </>
  );
};

export default Page;

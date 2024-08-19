"use client";
import Category2 from "@/components/CulturalandHistorical/Category2";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: 'Create All Types Of Cultural and Historical Name Generator | Name Idea Generator ',
  description: "Generate authentic names with our Cultural and Historical Name Generator. Explore diverse and meaningful names from various cultures and historical eras for your characters!",
  
  openGraph: {
    title: 'Create All Types Of Cultural and Historical Name Generator | Name Idea Generator',
    description: "Generate authentic names with our Cultural and Historical Name Generator. Explore diverse and meaningful names from various cultures and historical eras for your characters!",
    url: 'https://www.nameideagenerator.com/categories/cultural-and-historical',
   
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Create All Types Of Cultural and Historical Name Generator | Name Idea Generator',
    description: "Generate authentic names with our Cultural and Historical Name Generator. Explore diverse and meaningful names from various cultures and historical eras for your characters!",
    images: ['bg-dragonborn.webp'],
  },
  
  robots:{index:true, follow: true},

  alternates:{
    canonical:"https://www.nameideagenerator.com/categories/cultural-and-historical"
  },
}

const page = () => {
  return (
    <>
      <Head>
        <title>Cultutral and Historical</title>
      </Head>
      <div>
        <Category2 />
      </div>
    </>
  );
};

export default page;

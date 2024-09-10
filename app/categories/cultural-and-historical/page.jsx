
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
}

const Page = () => {  // Renamed 'page' to 'Page'
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

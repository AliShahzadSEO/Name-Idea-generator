"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Head from "next/head"; // Import Head from next/head
const Data = [
  {
    name: "Viking Name Generator",
    pic: "/vikings.jpg",
    link: "/viking-name-generator",
  },
  {
    name: "Russian Name Generator",
    pic: "/Russian.webp",
    link: "/russian-name-generator",
  },
  {
    name: "Greek Name Generator",
    pic: "/greek.webp",
    link: "/greek-name-generator",
  },
  {
    name: "Norse Name Generator",
    pic: "/Norse.jpg",
    link: "/norse-name-generator",
  },
  {
    name: "Chinese Name Generator",
    pic: "/chinese-name-generator.jpg",
    link: "/chinese-name-generator",
  },
  {
    name: "Medieval Name Generator",
    pic: "/dark-fantasy-character-Medieval-Names.avif",
    link: "/medieval-name-generator",
  },
  {
    name: "korean Name Generator",
    pic: "/korean.webp",
    link: "/korean-name-generator",
  },
  {
    name: "French Name Generator",
    pic: "/french-name-generator.avif",
    link: "/french-name-generator",
  },
  {
    name: "Continent Name Generator",
    pic: "/continent-name-generator.webp",
    link: "/continent-name-generator",
  },
  {
    name: "Victorian Name Generator",
    pic: "/victorian-name-generator.jpg",
    link: "/victorian-name-generator",
  },
  {
    name: "Egyptian Name Generator",
    pic: "/egyptian-name-generator.jpg",
    link: "/egyptian-name-generator",
  },
  {
    name: "Egyptian Elf Name Generator",
    pic: "/coming-soon-background-illustration-template-design-free-vector.jpg",
    link: "",
  },
  {
    name: "Japanese Elf Name Generator",
    pic: "/coming-soon-background-illustration-template-design-free-vector.jpg",
    link: "",
  },
  {
    name: "Native American Name Generator",
    pic: "/coming-soon-background-illustration-template-design-free-vector.jpg",
    link: "",
  },
  
  {
    name: "African Name Generator",
    pic: "/coming-soon-background-illustration-template-design-free-vector.jpg",
    link: "",
  },
  {
    name: "Chinese Name Generator",
    pic: "/coming-soon-background-illustration-template-design-free-vector.jpg",
    link: "",
  },
  {
    name: "Aztec Name Generator",
    pic: "/coming-soon-background-illustration-template-design-free-vector.jpg",
    link: "",
  },
  {
    name: "Mayan Name Generator",
    pic: "/coming-soon-background-illustration-template-design-free-vector.jpg",
    link: "",
  },
  
];

const Category2 = () => {
  
const context="Cultural and Historical"
const bgImage = "/category2bg.jpg"
  return (
    <motion.div
      initial={{ opacity: 0, x: 1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#f8f9fa] w-[100%]"
    >
      <Head>
      <title>Cultural and Historical Name Generator</title>
      </Head>
      <HeroSection bgImage={bgImage} context={context}/>
      <div className="w-[90%] mx-auto">
        <div className="py-[16px]">
          <h2 className="text-center sm:text-[36px] text-[24px] font-semibold">
            Cultural and Historical Name Generator
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1  gap-4 pt-[20px] pb-[60px]">
          {Data.map((item, index) => (
            <Link key={index} href={item.link}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index*0.07 }}
                className="border rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={item.pic}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Category2;

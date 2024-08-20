"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";

const Data = [
  {
    name: "Demon Name Generator",
    pic: "/demonpic.jpg",
    link: "/demon-name-generator",
  },
  {
    name: "Tiefling Name Generator",
    pic: "/female.jpg",
    link: "/tiefling-name-generator",
  },
  {
    name: "Dragonborn Name Generator",
    pic: "/bg-dragonborn.webp",
    link: "/dragonborn-name-generator",
  },
  {
    name: "ORC Name Generator",
    pic: "/orc-name-generator.jpg",
    link: "/orc-name-generator",
  },
  {
    name: "Halfling Name Generator",
    pic: "/halfling.webp",
    link: "/halfling-name-generator",
  },
  {
    name: "Goblin Name Generator",
    pic: "/Goblin.jpg",
    link: "/goblin-name-generator",
  },
  {
    name: "Wood Elf Name Generator",
    pic: "/Wood_Elf.webp",
    link: "/wood-name-generator",
  },
  {
    name: "Half Elf Name Generator",
    pic: "/half-demon.webp",
    link: "/half-name-generator",
  },
  {
    name: "Tabaxi Name Generator",
    pic: "/tabaxi.jpeg",
    link: "/tabaxi-name-generator",
  },
  {
    name: "Kobold Name Generator",
    pic: "/kobold.jpg",
    link: "/kobold-name-generator",
  },
  {
    name: "Fairy Name Generator",
    pic: "/demonpic.jpg",
    link: "#",
  },
  {
    name: "Vampire Name Generator",
    pic: "/demonpic.jpg",
    link: "#",
  },
  {
    name: "Werewolf Name Generator",
    pic: "/demonpic.jpg",
    link: "#",
  },
  {
    name: "Merfolk Name Generator",
    pic: "/demonpic.jpg",
    link: "#",
  },
];

const Category1 = () => {
  
  const bgImage="/category1bg.jpg"
  const context= "Fanstasy and Mythical Creatures"
  return (
    <motion.div
      initial={{ opacity: 0, x: 1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#f8f9fa]"
    >
      <HeroSection bgImage={bgImage} context={context}/>
      <div className="w-[90%] mx-auto">
        <div className="py-[16px]">
          <h1 className="text-center sm:text-[36px] text-[24px] font-semibold">
            FANTASY AND MYTHICAL CREATURES
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1  gap-4 pt-[20px] py-[60px]">
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
                className="border rounded-lg shadow-lg overflow-hidden cursor-pointer bg-white"
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

export default Category1;

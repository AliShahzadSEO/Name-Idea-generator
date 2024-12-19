"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Category1 = [
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
    name: "Goblin Name Generator",
    pic: "/Goblin.jpg",
    link: "/goblin-name-generator",
  },
  {
    name: "ORC Name Generator",
    pic: "/orc-name-generator.jpg",
    link: "/orc-name-generator",
  },
];
const Category2 = [
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
];
const Category3 = [
  {
    name: "Island Name Generator",
    pic: "/island1.jpg",
    link: "/island-name-generator",
  },
  {
    name: "Song Name Generator",
    pic: "/pop.jpg",
    link: "/song-name-generator",
  },
  {
    name: "Angel Name Generator",
    pic: "/angel.jpg",
    link: "/angel-name-generator",
  },
  {
    name: "Horse Name Generator",
    pic: "/horse.webp",
    link: "/horse-name-generator",
  },
];
const CatergorySection = () => {
  return (
    <div className="w-[100%] bg-[#edeeef]">
      <div className="w-[90%] mx-auto">
        <div>
          <p className="text-center py-[20px] text-[36px] font-semibold" >
            Categories
          </p>
        </div>
        {/* Category 1 */}
        <div>
          <h2 className="text-[28px] py-[20px]">Fantasy and Mythical</h2>
          <div className="grid sm:grid-cols-4 grid-cols-1  sm:gap-2 gap-4">
            {Category1.map((item, index) => (
              <Link key={index} href={item.link}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.25 }}
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
          <div className="flex justify-end py-[20px] border-b border-solid">
            <Link href={"/categories/fantasy-and-mythical-creatures"}>
              <p className="text-[#007bff] font-semibold">View all</p>
            </Link>
          </div>
        </div>
        {/* Category 2 */}
        <div>
          <h2 className="text-[28px] py-[20px]">Cultural and Historical</h2>
          <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-2 gap-4">
            {Category2.map((item, index) => (
              <Link key={index} href={item.link}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.25 }}
                  className="border rounded-lg bg-white shadow-lg overflow-hidden cursor-pointer"
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
          <div className="flex justify-end py-[20px] border-b border-solid">
            <Link href={"/categories/cultural-and-historical"}>
              <p className="text-[#007bff] font-semibold">View all</p>
            </Link>
          </div>
        </div>
        {/* Category 3 */}
        <div>
          <h2 className="text-[28px] py-[20px]">Fictional and Sci-Fi</h2>
          <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-2 gap-4">
            {Category3.map((item, index) => (
              <Link key={index} href={item.link}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.25 }}
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
          <div className="flex justify-end py-[20px] border-b border-solid">
            <Link href={"/categories/fictional-and-scifi"}>
              <p className="text-[#007bff] font-semibold">View all</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatergorySection;

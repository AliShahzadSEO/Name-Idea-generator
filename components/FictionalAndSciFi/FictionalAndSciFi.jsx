"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";


const Data = [
  {
    name: "Alien Name Generator",
    pic: "/alien.webp",
    link: "/alien-name-generator",
  },
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
    name: "WoW (World of Warcraft) Name Generator",
    pic: "/wow.jpg",
    link: "/wow-name-generator",
  },
  {
    name: "Horse Name Generator",
    pic: "/horse.webp",
    link: "/horse-name-generator",
  },
  {
    name: "Saiyan Name Generator",
    pic: "/saiyan3.jpg",
    link: "/saiyan-name-generator",
  },
  {
    name: "Robot Name Generator",
    pic: "/robot.jpg",
    link: "/robot-name-generator",
  },
  {
    name: "Pirate Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Cowbody Elf Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Royalty Elf Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Adventurer American Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Fastasy Tavern Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Fantasy City Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Pet Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Ship Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Clan Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
];

const FictionalAndSciFi = () => {
  

  
  const bgImage="/category3bg.png"
  const context = "Fictional and Sci-Fi"
  return (
    <motion.div
      initial={{ opacity: 0, x: 1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#f8f9fa] w-[100%]"
    >
      <HeroSection bgImage={bgImage} context={context}/>
      <div className="w-[90%] mx-auto">
        <div className="py-[16px]">
          <h2 className="text-center sm:text-[36px] text-[24px] font-semibold">
            Fictional and Sci-Fi
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 pt-[20px] pb-[60px]">
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

export default FictionalAndSciFi;

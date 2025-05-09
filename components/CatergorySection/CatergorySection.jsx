"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../FAQSection/FAQSection";
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
const Q1 = "What type of demon names can I generate?"
const A1 = "You can generate names for various demon types, such as demon lords, imps, fallen angels, and more."
const Q2 = "Can I customize the gender of the demon name?"
const A2 = "Yes, you can select the gender to get names tailored to your character."
const Q3 = "How accurate are the meanings of the demon names?"
const A3 = "The meanings come from historical, cultural, and mythological sources. Hover over the names to reveal their origins."
const Q4 = "Can I use the names for my game or story?"
const A4 = "Yes! The generated names are perfect for video games, novels, and other creative projects."
const Q5 = "Can a demon name generator inspire character development?"
const A5 = "Yes, our Demon Name Generator can spark inspiration for character development. It helps set the foundation for creating detailed and intriguing characters by providing names that align with your story or game's setting and themes."
const CatergorySection = () => {
  return (
    <div className="w-[100%] bg-[#edeeef]">
      <div className="w-[80%] mx-auto">
      <div className="w-4/5 mx-auto text-center py-[20px]">
  <h2 className="sm:text-[28px] text-[24px] font-semibold mb-2">
  Explore NiG Tools By Category
  </h2>
  </div>
  <p className="sm:text-[18px] text-center text-[16px] leading-relaxed">
    Pick your world and choose your path. Each category gives you a set of name idea generator tools built for specific vibes—fantasy, history, sci-fi, or the weird in between. No filler, just names that work for your books, projects, and games.
  </p>

        {/* Category 1 */}
        <div>
          <h2 className="text-[24px] py-[20px]">Fantasy and Mythical</h2>
          <p className="sm:text-[18px] text-[16px] leading-relaxed pb-[20px]">
          Generate names that carry magic, danger, or mystery. Find goblins, demons, orcs, and more. 
          Every name sounds like it belongs in a book story or gaming zone—not just a list.
          </p>
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
          <h2 className="text-[24px] py-[20px]">Cultural and Historical</h2>
          <p className="sm:text-[18px] text-[16px] leading-relaxed pb-[20px]">
          Viking, Norse, Russian, Greek—we keep the soul intact in every name. 
          Just a few clicks, and you get a range of unique names that honor the past and shape strong characters.
          </p>
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
          <h2 className="text-[24px] py-[20px]">Fictional and Sci-Fi</h2>
          <p className="sm:text-[18px] text-[16px] leading-relaxed pb-[20px]">
          Your setting needs more than lasers and stars. It needs names that fit. 
          Angels to islands, songs to horses—we give you names that shape the tone and set the mood. 
          </p>
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


        <div className="w-4/5 mx-auto py-12 text-center">
  <h2 className="sm:text-[28px] text-[24px] font-semibold mb-6">How NiG Tools Work?</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">🗂️ Pick Your Category</h3>
      <p className="text-gray-600">
        Choose from Fantasy and Mythical, Cultural and Historical, Fictional and Sci-Fi, or Miscellaneous Themes.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">⚙️ Set Your Filters</h3>
      <p className="text-gray-600">
        Choose gender, type, or leave it on random. Every name idea generator works differently, but the flow stays simple.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">🎯 Hit Generate Button</h3>
      <p className="text-gray-600">
        One click gives you a personalized list of multiple names from the selected category. Keep hitting generate to get more names.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">🧠 Hover for Meaning</h3>
      <p className="text-gray-600">
        Hover your mouse on the name to get the backstory behind it. So, you know whether it is fit for the role, setting, pace or not.
      </p>
    </div>

  </div>
</div>


<div className="w-4/5 mx-auto py-12">
  <h2 className="sm:text-[28px] text-[24px] font-semibold text-center mb-10">But Why Use NiG Tools?</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">📖 When Writing Fantasy Stories</h3>
      <p className="text-gray-600">
        Stuck naming a cursed villain or ancient race? Use the Demon or Orc Name Generator. You get names like <strong>Gravmor</strong> or <strong>Skuldar</strong>—raw, dark, and story-ready.
      </p>
    </div>

    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">🎮 When Designing Game Worlds</h3>
      <p className="text-gray-600">
        Need a region name, clan, or monster species? Use tools like the Island or Horse Name Generator. You’ll get names that sound like they belong.
      </p>
    </div>

    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">🎲 When Building Tabletop Characters</h3>
      <p className="text-gray-600">
        Grab a name for your Tiefling, Goblin, or Angel in seconds. Our name generator tools save time and keep your world consistent.
      </p>
    </div>

    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">🌍 When Exploring Cultures in Writing</h3>
      <p className="text-gray-600">
        Writing historical fiction or mythology-inspired stories? Try the Viking, Russian, Greek, or Norse generators. You get names grounded in heritage.
      </p>
    </div>

    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-sm hover:shadow-md transition md:col-span-2">
      <h3 className="sm:text-[24px] text-[18px] font-semibold mb-2">⚡ When You Need Fast, Usable Results</h3>
      <p className="text-gray-600">
        You don’t want a long list of weak names. You want names that <strong>click</strong>. NiG tools give you focused, theme-matched names with meaning—no filler.
      </p>
    </div>

  </div>
</div>

<FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>



      </div>
      <div className="w-full bg-[#f1f5f9] py-10 mt-12">
  <div className="w-4/5 mx-auto text-center">
    <h2 className="sm:text-[28px] text-[24px] font-semibold mb-3">Still Need Help?</h2>
    <p className="text-gray-700 text-base">
      Email us at <a href="mailto:nameideag@gmail.com" className="text-blue-600 ">nameideag@gmail.com</a> or reach out via our 
      <a href="/contact-us" className="text-blue-600 ">Contact Us</a> form. We’ll get back to you.
    </p>
  </div>
</div>

    </div>
  );
};

export default CatergorySection;

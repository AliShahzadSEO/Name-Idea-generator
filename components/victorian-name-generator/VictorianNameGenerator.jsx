"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Alistair", detail: "A noble name with roots in ancient tradition, symbolizing strength and honor.", status: false, gender: "Male", type: "Victorian" },
  { name: "Edmund", detail: "A name of royal lineage, reflecting wisdom and a strong sense of justice.", status: false, gender: "Male", type: "Victorian" },
  { name: "Percival", detail: "A name of chivalric nature, symbolizing courage, honor, and nobility.", status: false, gender: "Male", type: "Victorian" },
  { name: "Theodore", detail: "A classic name that conveys dignity, strength, and wisdom.", status: false, gender: "Male", type: "Victorian" },
  { name: "Montgomery", detail: "A sophisticated name with a sense of grandeur and refined heritage.", status: false, gender: "Male", type: "Victorian" },
  { name: "Arthur", detail: "A legendary name, associated with kingship and noble qualities.", status: false, gender: "Male", type: "Victorian" },
  { name: "Clarence", detail: "A dignified name, often associated with nobility and leadership.", status: false, gender: "Male", type: "Victorian" },
  { name: "Lawrence", detail: "A name of distinguished strength and elegance, often connected to scholarly pursuits.", status: false, gender: "Male", type: "Victorian" },
  { name: "Reginald", detail: "A regal name of strength and dignity, often associated with leadership.", status: false, gender: "Male", type: "Victorian" },
  { name: "William", detail: "A timeless name, symbolizing determination and power, often worn by kings and leaders.", status: false, gender: "Male", type: "Victorian" },
  { name: "George", detail: "A name with a long history of royal association, conveying leadership and respect.", status: false, gender: "Male", type: "Victorian" },
  { name: "Victor", detail: "A name that embodies triumph, success, and resilience in the face of adversity.", status: false, gender: "Male", type: "Victorian" },
  { name: "Samuel", detail: "A traditional name that carries a sense of wisdom and faith, respected across generations.", status: false, gender: "Male", type: "Victorian" },
  { name: "Henry", detail: "A classic name of kings, signifying strength, leadership, and a sense of duty.", status: false, gender: "Male", type: "Victorian" },
  { name: "Horace", detail: "A name with literary associations, representing intellect and creativity.", status: false, gender: "Male", type: "Victorian" },
  { name: "Albert", detail: "A name symbolizing noble roots, often associated with intelligence and dignity.", status: false, gender: "Male", type: "Victorian" },
  { name: "James", detail: "A timeless name that denotes authority, leadership, and respect.", status: false, gender: "Male", type: "Victorian" },
  { name: "Basil", detail: "A refined name, often linked to wisdom, heritage, and the arts.", status: false, gender: "Male", type: "Victorian" },
  { name: "Charles", detail: "A distinguished name, associated with nobility, intellect, and responsibility.", status: false, gender: "Male", type: "Victorian" },
  { name: "Leonard", detail: "A name symbolizing brilliance, intellect, and noble character.", status: false, gender: "Male", type: "Victorian" },
  { name: "Gilbert", detail: "A name of noble origin, representing knowledge, wisdom, and strength.", status: false, gender: "Male", type: "Victorian" },
  { name: "Winston", detail: "A name symbolizing strength, leadership, and resilience, often linked to powerful leaders.", status: false, gender: "Male", type: "Victorian" },
  { name: "Harrison", detail: "A name associated with dignity and a legacy of leadership and respect.", status: false, gender: "Male", type: "Victorian" },
  { name: "Felix", detail: "A name full of charm and grace, symbolizing luck and positive fortune.", status: false, gender: "Male", type: "Victorian" },
  { name: "Evelyn", detail: "A classic and elegant name, symbolizing beauty and grace.", status: false, gender: "Female", type: "Victorian" },
  { name: "Amelia", detail: "A timeless name associated with strength, compassion, and dignity.", status: false, gender: "Female", type: "Victorian" },
  { name: "Florence", detail: "A name that evokes images of blooming flowers and grace.", status: false, gender: "Female", type: "Victorian" },
  { name: "Gertrude", detail: "A name of noble lineage, associated with wisdom and nobility.", status: false, gender: "Female", type: "Victorian" },
  { name: "Beatrice", detail: "A name symbolizing happiness, purity, and elegance.", status: false, gender: "Female", type: "Victorian" },
  { name: "Isabella", detail: "A royal name that conveys beauty, sophistication, and power.", status: false, gender: "Female", type: "Victorian" },
  { name: "Matilda", detail: "A name that evokes intelligence, strength, and independence.", status: false, gender: "Female", type: "Victorian" },
  { name: "Victoria", detail: "A name fit for royalty, signifying victory, grace, and nobility.", status: false, gender: "Female", type: "Victorian" },
  { name: "Rose", detail: "A delicate and timeless name, symbolizing love, beauty, and elegance.", status: false, gender: "Female", type: "Victorian" },
  { name: "Clara", detail: "A name of clarity and purity, associated with kindness and wisdom.", status: false, gender: "Female", type: "Victorian" },
  { name: "Edith", detail: "A name of strength and intelligence, often associated with powerful women.", status: false, gender: "Female", type: "Victorian" },
  { name: "Eliza", detail: "A charming name, symbolizing grace, independence, and wisdom.", status: false, gender: "Female", type: "Victorian" },
  { name: "Margaret", detail: "A name that denotes strength, beauty, and a deep sense of purpose.", status: false, gender: "Female", type: "Victorian" },
  { name: "Alice", detail: "A name that represents curiosity, adventure, and discovery.", status: false, gender: "Female", type: "Victorian" },
  { name: "Lillian", detail: "A name symbolizing purity, beauty, and elegance.", status: false, gender: "Female", type: "Victorian" },
  { name: "Harriet", detail: "A name of strength and independence, often associated with pioneering women.", status: false, gender: "Female", type: "Victorian" },
  { name: "Violet", detail: "A name symbolizing beauty, grace, and the delicate nature of flowers.", status: false, gender: "Female", type: "Victorian" },
  { name: "Winifred", detail: "A name that conveys peace, grace, and elegance.", status: false, gender: "Female", type: "Victorian" },
  { name: "Mabel", detail: "A name representing gentleness, kindness, and a heart full of warmth.", status: false, gender: "Female", type: "Victorian" },
  { name: "Agnes", detail: "A classic name symbolizing purity, wisdom, and grace.", status: false, gender: "Female", type: "Victorian" },
  { name: "Dorothy", detail: "A name signifying strength, kindness, and a sense of adventure.", status: false, gender: "Female", type: "Victorian" },
  { name: "Lilian", detail: "A name symbolizing purity, beauty, and elegance.", status: false, gender: "Female", type: "Victorian" },
  { name: "Florence", detail: "A name that evokes images of blooming flowers and grace.", status: false, gender: "Female", type: "Victorian" },
  { name: "Eleanor", detail: "A regal name that signifies wisdom, strength, and grace.", status: false, gender: "Female", type: "Victorian" },
  { name: "Josephine", detail: "A name symbolizing elegance, sophistication, and independence.", status: false, gender: "Female", type: "Victorian" },
  { name: "Aethelred", detail: "A noble name, signifying a ruler of noble blood and strength.", status: false, gender: "Male", type: "Old English" },
  { name: "Beorn", detail: "A name meaning 'warrior' or 'bear', symbolizing strength and valor.", status: false, gender: "Male", type: "Old English" },
  { name: "Eadric", detail: "A name meaning 'rich' or 'powerful ruler', representing leadership and authority.", status: false, gender: "Male", type: "Old English" },
  { name: "Oswald", detail: "A name meaning 'God's power', signifying spiritual strength and protection.", status: false, gender: "Male", type: "Old English" },
  { name: "Edgar", detail: "A name meaning 'wealthy spear', symbolizing strength and prosperity.", status: false, gender: "Male", type: "Old English" },
  { name: "Hrothgar", detail: "A name signifying 'famous spear', often associated with noble warriors.", status: false, gender: "Male", type: "Old English" },
  { name: "Wulfric", detail: "A name meaning 'wolf power', representing fierceness and determination.", status: false, gender: "Male", type: "Old English" },
  { name: "Cedric", detail: "A name meaning 'bounty' or 'generosity', symbolizing wealth and kindness.", status: false, gender: "Male", type: "Old English" },
  { name: "Elric", detail: "A name meaning 'noble ruler', signifying wisdom and nobility.", status: false, gender: "Male", type: "Old English" },
  { name: "Aelfric", detail: "A name meaning 'elf ruler', often associated with magical strength and leadership.", status: false, gender: "Male", type: "Old English" },
  { name: "Edmund", detail: "A name meaning 'wealthy protector', symbolizing a protector of riches and the people.", status: false, gender: "Male", type: "Old English" },
  { name: "Leofric", detail: "A name meaning 'dear ruler', signifying love and leadership.", status: false, gender: "Male", type: "Old English" },
  { name: "Alaric", detail: "A name meaning 'ruler of all', symbolizing a powerful and wise leader.", status: false, gender: "Male", type: "Old English" },
  { name: "Godwin", detail: "A name meaning 'God's friend', signifying righteousness and friendship.", status: false, gender: "Male", type: "Old English" },
  { name: "Ealdred", detail: "A name meaning 'old counsel', representing wisdom and experience.", status: false, gender: "Male", type: "Old English" },
  { name: "Oswin", detail: "A name meaning 'God's friend', signifying piety and loyalty.", status: false, gender: "Male", type: "Old English" },
  { name: "Bertram", detail: "A name meaning 'bright raven', symbolizing strength and wisdom.", status: false, gender: "Male", type: "Old English" },
  { name: "Osric", detail: "A name meaning 'God's ruler', symbolizing divine strength and leadership.", status: false, gender: "Male", type: "Old English" },
  { name: "Alistair", detail: "A name meaning 'defender of the people', representing courage and leadership.", status: false, gender: "Male", type: "Old English" },
  { name: "Theobald", detail: "A name meaning 'boldest God', symbolizing bravery and divine protection.", status: false, gender: "Male", type: "Old English" },
  { name: "Athelstan", detail: "A name meaning 'noble stone', signifying steadfastness and strength.", status: false, gender: "Male", type: "Old English" },
  { name: "Alwyn", detail: "A name meaning 'fair', representing beauty, fairness, and wisdom.", status: false, gender: "Male", type: "Old English" },
  { name: "Roderic", detail: "A name meaning 'famous ruler', symbolizing strength and leadership.", status: false, gender: "Male", type: "Old English" },
  { name: "Wystan", detail: "A name meaning 'battle stone', symbolizing strength in war and honor.", status: false, gender: "Male", type: "Old English" },
  { name: "Reginald", detail: "A name meaning 'king's advisor', representing leadership, counsel, and nobility.", status: false, gender: "Male", type: "Old English" },
  { name: "Aethelwynn", detail: "A name meaning 'noble joy', symbolizing a joyful and noble spirit.", status: false, gender: "Female", type: "Old English" },
  { name: "Edith", detail: "A name meaning 'prosperous in war', symbolizing strength and victory.", status: false, gender: "Female", type: "Old English" },
  { name: "Ethelburga", detail: "A name meaning 'noble fortress', representing strength and protection.", status: false, gender: "Female", type: "Old English" },
  { name: "Winifred", detail: "A name meaning 'holy peace', symbolizing purity and tranquility.", status: false, gender: "Female", type: "Old English" },
  { name: "Mildred", detail: "A name meaning 'gentle strength', signifying kindness and fortitude.", status: false, gender: "Female", type: "Old English" },
  { name: "Freya", detail: "A name of Norse origin meaning 'lady', symbolizing beauty and strength.", status: false, gender: "Female", type: "Old English" },
  { name: "Beatrix", detail: "A name meaning 'bringer of joy', symbolizing happiness and grace.", status: false, gender: "Female", type: "Old English" },
  { name: "Adelina", detail: "A name meaning 'noble', symbolizing grace and aristocracy.", status: false, gender: "Female", type: "Old English" },
  { name: "Elswyth", detail: "A name meaning 'noble strength', symbolizing wisdom and courage.", status: false, gender: "Female", type: "Old English" },
  { name: "Gytha", detail: "A name meaning 'battle', symbolizing strength and resilience.", status: false, gender: "Female", type: "Old English" },
  { name: "Hildegarde", detail: "A name meaning 'battle protector', symbolizing bravery and strength.", status: false, gender: "Female", type: "Old English" },
  { name: "Wynne", detail: "A name meaning 'joy', symbolizing happiness and contentment.", status: false, gender: "Female", type: "Old English" },
  { name: "Ælfrida", detail: "A name meaning 'elf strength', symbolizing ethereal strength and nobility.", status: false, gender: "Female", type: "Old English" },
  { name: "Maud", detail: "A name meaning 'battle mighty', symbolizing bravery and valor.", status: false, gender: "Female", type: "Old English" },
  { name: "Isolde", detail: "A name meaning 'ice ruler', symbolizing power and clarity.", status: false, gender: "Female", type: "Old English" },
  { name: "Cecily", detail: "A name meaning 'blind', signifying wisdom beyond sight and clarity of mind.", status: false, gender: "Female", type: "Old English" },
  { name: "Rosalind", detail: "A name meaning 'pretty rose', symbolizing beauty and grace.", status: false, gender: "Female", type: "Old English" },
  { name: "Matilda", detail: "A name meaning 'battle-mighty', symbolizing strength and courage.", status: false, gender: "Female", type: "Old English" },
  { name: "Aethelreda", detail: "A name meaning 'noble counsel', representing wisdom and nobility.", status: false, gender: "Female", type: "Old English" },
  { name: "Godiva", detail: "A name meaning 'God's gift', symbolizing divine beauty and generosity.", status: false, gender: "Female", type: "Old English" },
  { name: "Edwina", detail: "A name meaning 'wealthy friend', symbolizing richness in character and friendship.", status: false, gender: "Female", type: "Old English" },
  { name: "Gwendolyn", detail: "A name meaning 'white ring', symbolizing purity and protection.", status: false, gender: "Female", type: "Old English" },
  { name: "Winifred", detail: "A name meaning 'holy peace', symbolizing serenity and holiness.", status: false, gender: "Female", type: "Old English" },
  { name: "Etheldreda", detail: "A name meaning 'noble strength', representing grace and leadership.", status: false, gender: "Female", type: "Old English" },
  { name: "Alianor", detail: "A name meaning 'light', symbolizing hope and wisdom.", status: false, gender: "Female", type: "Old English" },
  { name: "Sylvester", detail: "A name meaning 'wooded', symbolizing strength and nature.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Randolph", detail: "A name meaning 'shield wolf', symbolizing protection and strength.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Irving", detail: "A name meaning 'green river', symbolizing tranquility and nature.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Felix", detail: "A name meaning 'happy', symbolizing joy and prosperity.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Wilfred", detail: "A name meaning 'will peace', symbolizing determination and calm.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Lawrence", detail: "A name meaning 'from Laurentum', symbolizing wisdom and nobility.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Cyril", detail: "A name meaning 'lordly', symbolizing strength and leadership.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Stanley", detail: "A name meaning 'stony meadow', symbolizing resilience and growth.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Walter", detail: "A name meaning 'ruler of the army', symbolizing leadership and power.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Bertram", detail: "A name meaning 'bright raven', symbolizing intelligence and power.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Reginald", detail: "A name meaning 'king's advisor', symbolizing wisdom and royalty.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Percival", detail: "A name meaning 'pierce the valley', symbolizing strength and adventure.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Leonard", detail: "A name meaning 'brave lion', symbolizing courage and power.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Maurice", detail: "A name meaning 'dark-skinned', symbolizing mystery and elegance.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Edgar", detail: "A name meaning 'happy spear', symbolizing strength and happiness.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Arnold", detail: "A name meaning 'eagle ruler', symbolizing strength and leadership.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Cedric", detail: "A name meaning 'bounty', symbolizing wealth and generosity.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Albert", detail: "A name meaning 'noble bright', symbolizing wisdom and enlightenment.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Edmund", detail: "A name meaning 'fortunate protector', symbolizing fortune and safety.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Archibald", detail: "A name meaning 'genuine bold', symbolizing authenticity and bravery.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Tobias", detail: "A name meaning 'God is good', symbolizing faith and devotion.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Wallace", detail: "A name meaning 'foreigner', symbolizing adventure and exploration.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Vernon", detail: "A name meaning 'alder tree', symbolizing strength and nature.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Norman", detail: "A name meaning 'man from the north', symbolizing courage and resilience.", status: false, gender: "Male", type: "Old-Fashioned" },
  { name: "Roscoe", detail: "A name meaning 'deer forest', symbolizing peace and serenity.", status: false, gender: "Male", type: "Old-Fashioned" }
];

function getRandomDemon(gender, type, demonNames) {
    const filteredDemons = demonNames.filter((demon) => {
      if (gender && demon.gender !== gender) return false;
      if (type && demon.type !== type) return false;
      return true;
    });
  
    if (filteredDemons.length === 0) {
      const randomIndex = Math.floor(Math.random() * demonNames.length);
      return demonNames[randomIndex];
    }
  
    const randomIndex = Math.floor(Math.random() * filteredDemons.length);
    return filteredDemons[randomIndex];
  }
  const Category1 = [
    {
      name: "Medieval Name Generator",
      pic: "/dark-fantasy-character-Medieval-Names.avif",
      link: "https://www.nameideagenerator.com/medieval-name-generator",
  },
  {
      name: "Norse Name Generator",
      pic: "/Norse.jpg",
      link: "https://www.nameideagenerator.com/norse-name-generator",
  },
  {
      name: "Russian Name Generator",
      pic: "/Russian.webp",
      link: "https://www.nameideagenerator.com/russian-name-generator",
  },
  {
      name: "Viking Name Generator",
      pic: "/vikings.jpg",
      link: "https://www.nameideagenerator.com/viking-name-generator",
  },
  ];
  
  const VictorianNameGenerator = () => {
    const [lockedDemonList, setLockedDemonList] = useState([
      null,
      null,
      null,
      null,
    ]);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [generatedDemonList, setGeneratedDemonList] = useState([]);
    const [Description, setDescription] = useState("");
    const [ShowDescription, setShowDescription] = useState(false);
  
    useEffect(() => {
      generateDemonList();
    }, []);
  
    const generateDemonList = () => {
      const newDemonList = [];
  
      for (let i = 0; i < 4; i++) {
        if (lockedDemonList[i]) {
          newDemonList.push(lockedDemonList[i]);
        } else {
          let randomDemon;
          do {
            randomDemon = getRandomDemon(
              selectedGender,
              selectedType,
              demonNames
            );
          } while (newDemonList.includes(randomDemon));
          newDemonList.push(randomDemon);
        }
      }
  
      setGeneratedDemonList(newDemonList);
    };
  
    const handleGenderChange = (e) => {
      setSelectedGender(e.target.value);
    };
  
    const handleDemonTypeChange = (e) => {
      setSelectedType(e.target.value);
    };
  
    const handleLockChange = (index, demon, isChecked) => {
      const newLockedList = [...lockedDemonList];
      newLockedList[index] = isChecked ? demon : null;
      setLockedDemonList(newLockedList);
    };
  
const bgImage = "/victorian-name-generator.jpg"
const context = "Victorian Name Generator with Meaning Tool"
const Q1 = "What is the Victorian Name Generator?"
const A1 = "The Victorian Name Generator is a tool designed to help you create authentic and meaningful names inspired by the elegance of the Victorian era. It generates names for both male and female characters, with options to choose from various categories like traditional, old English, and old-fashioned names, along with their meanings."

const Q2 = "How do I use the Victorian Name Generator?"
const A2 = "To use the generator, simply select the gender (male or female) and the name category (traditional, old English, or old-fashioned). Click on 'Generate,' and the tool will provide you with a list of names along with their meanings. You can explore the names and select the one that fits your creative needs. "

const Q3 = "Can I customize the names generated by the tool?"
const A3 = "The Victorian Name Generator provides pre-defined categories and meanings, but you can use the generated names as inspiration for further customization. If you want to tweak the names, feel free to modify them to better suit your project."

const Q4 = "Are the names truly Victorian-inspired?"
const A4 = "Yes, all names generated by the tool are inspired by the Victorian era, drawing from historical, cultural, and linguistic sources. They reflect the elegance, charm, and sophistication associated with the period, and many names are historically accurate or commonly used during that time."

const Q5 = "Can I use the names for my creative projects?"
const A5 = "Absolutely! The Victorian names generated by the tool are ideal for use in creative projects such as writing, role-playing games, historical fiction, or character development. Each name comes with a meaning, allowing you to add depth and authenticity to your characters."
  return (
    <motion.div
      initial={{ opacity: 0, x: 1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#f8f9fa] "
    >
      <HeroSection bgImage={bgImage} context={context}/>
      <div className="w-[90%] my-[50px] bg-white mx-auto rounded-[10px] border border-solid shadow-lg">
        <div className="w-[95%] mx-auto py-[50px]">
          <div>
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
  <ol className="list-none p-0 inline-flex flex-wrap">
    <li className="flex items-center">
      <a href="/" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Home</a>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 19l7-7-7-7"></path>
      </svg>
    </li>
    <li className="flex items-center">
      <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Cultural and Historical Names</a>
    </li>
    <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 19l7-7-7-7"></path>
    </svg>
    <li className="flex items-center">
      <a href="/victorian-name-generator" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Victorian Name Generator</a>
    </li>
  </ol>
</nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Victorian Name Generator with Meaning Tool
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Victorian Gender</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Type of Victorian Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Victorian">Victorian</option>
              <option value="Old English">Old English</option>
              <option value="Old-Fashioned">Old-Fashioned</option>
            </select>
          </div>
          <div className="flex justify-center items-center py-[30px]">
            <button
              className="text-white p-[10px] bg-[#17A2B8] transition-colors duration-300 hover:bg-[#56baca] rounded-[5px] text-[22px]"
              onClick={generateDemonList}
            >
              Generate Names
            </button>
          </div>
          <div className="flex justify-between sm:flex-row flex-col gap-4">
            {generatedDemonList.map((demon, index) => (
              <div
                key={index}
                className="border border-solid shadow-lg hover:text-white transition-colors duration-300 hover:bg-[#17A2B8] py-[20px] gap-2 sm:w-[25%] w-[50%] mx-auto rounded-[5px] flex justify-center items-center "
                onMouseEnter={() => {
                  setShowDescription(true);
                  setDescription(demon.detail);
                }}
                onMouseLeave={() => {
                  setShowDescription(false);
                  setDescription("");
                }}
                set
              >
                <input
                  type="checkbox"
                  checked={!!lockedDemonList[index]}
                  onChange={(e) =>
                    handleLockChange(index, demon, e.target.checked)
                  }
                />
                <p className="font-medium">{demon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%] text-center mx-auto py-[20px] mb-[16px] mt-[30px] border border-solid shadow-lg text-[20px] font-semibold">
        {Description}
      </div>
      <div
        className="w-[100%] bg-white"
        // style={{ backgroundColor: "rgb(23 ,162 ,184, 0.6)" }}
      >
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
          <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
          What is the Victorian Name Generator?
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        This tool creates names influenced by the Victorian period. These names reflect elegance, charm, and historical depth. 
                        You can use them to add authenticity to your characters or stories.
                        It also provides meanings for each name. This helps you understand the significance of the names you choose. A name with meaning can leave a lasting impression.
                        </p>
            <h2 className="text-center text-[36px] font-medium text-[#343a40] py-[30px]">
            Why Use Our Victorian Name Generator?
            </h2>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Authenticity at Your Fingertips
              </h3>
              <p>
              Our Victorian Name Generator is designed to deliver names that resonate with the elegance and charm of the Victorian era. 
              Each name is thoughtfully crafted to ensure historical authenticity, making it ideal for characters, stories, or any creative project.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Save Time and Effort  
              </h3>
              <p>
              No more spending hours researching names manually! This tool offers a quick and efficient way to find the perfect name. 
              With just a few clicks, you’ll have access to a wide variety of names tailored to your needs.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Tailored Options for Every Need
              </h3>
              <p>
              The generator allows you to filter names by gender and type. 
              Whether you need male or female names or prefer Victorian, Old English, or Old-Fashioned styles, this tool ensures the results match your vision.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Meaningful Names that Leave an Impact
              </h3>
              <p>
              Each name comes with a brief meaning, adding depth and significance to your selection. 
              A name with meaning can create a lasting impression, making it perfect for building characters or setting the tone for a story.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Versatile for Any Project
              </h3>
              <p>
              Whether you’re writing a historical novel, creating a character for a role-playing game, or just exploring names for fun, this tool adapts to any creative purpose. 
              It provides names rich in culture and history, ensuring your project stands out.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Instant Results, Anytime
              </h3>
              <p>
              With this tool, you don’t have to wait. Names are generated instantly, allowing you to focus on your creative process without delays. 
              It’s simple, fast, and highly effective.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Victorian Name Generator Tool
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Using the Victorian Name Generator is quick and straightforward. In just a few steps, you can create the perfect name for your celestial character. Here's how:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Choose Victorian <b>Gender</b> (Male, Female)
              </h3>
              <p  className="text-left text-[#343a40]">
              Start by choosing the gender of the name you need. Select either male or female to narrow down the options based on the character or project you are working on.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Victorian <b>Type</b> (Victorian, Old English, Old-Fashioned)
              </h3>
              <p>
              Next, select the type of Victorian name that fits your theme. You can choose from:
              <ul>
                <li><b>Victorian:</b> names, representing the classic elegance of the era.</li>
                <li><b>Old English:</b> names, reflecting historical and cultural roots.</li>
                <li><b>Old-Fashioned:</b> names, offering a timeless, vintage charm.</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b>Generate</b> 
              </h3>
              <p>
              Once you have made your selections, click the <b>Generate</b> button. The tool will instantly provide you with a list of unique names based on your chosen criteria.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Review the Names and Their Meanings
              </h3>
              <p>
              Browse through the generated names and read their meanings. Each name is paired with a brief definition that can help you understand its significance and relevance to your project.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="male-victorian-name-generator.jpg"
              alt="Victorian Name Generator with Meaning"
              className="w-[300px] my-[20px] h-[360px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="female-victorian-name-generator.jpeg"
              alt="Victorian Name Generator with Meaning"
              className="w-[300px] h-[360px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/victorian-name.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Victorian Name Generator
        </p>
        <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
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
      </div>

      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Features You’ll Get with Our Victorian Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b>Tailored Name Selection by Gender</b>
            </h3>
            <p className="text-[#343a40]">
            By using our name generator, you can easily refine your search based on gender. 
            Choose between male or female names to get results that match your specific needs perfectly.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
          <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b>Explore a Variety of Name Types</b>
            </h3>
            <p className="text-[#343a40]">
            Our generator offers three unique categories of Victorian-inspired names:
            <br /><br />
            <ul>
            <li><b>Victorian Names: </b>Reflecting timeless charm and elegance</li>
            <li><b>Old English Names: </b>Rich in historical and cultural significance.</li>
            <li><b>Old-Fashioned Names: </b>Nostalgic and classic, ideal for vintage-inspired themes.
            This variety allows you to find the perfect name for any creative project.</li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
          <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b>Meaningful Names with Historical Depth</b>
            </h3>
            <p className="text-[#343a40]">
            Each name comes with a brief meaning, helping you understand its significance. 
            By using our tool, you’ll gain access to names that carry cultural or historical relevance, adding depth to your selection.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
           <b>Instant Name Generation</b>
            </h3>
            <p className="text-[#343a40]">
            No need to wait! Our generator delivers results instantly, allowing you to focus on your creative process without interruptions. 
            You’ll have unique and elegant names ready in seconds.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            <b>Simple and User-Friendly Interface</b>
            </h3>
            <p className="text-[#343a40]">
            With our tool, finding the perfect name is quick and easy. 
            The intuitive design ensures a seamless experience, guiding you step by step to get the results you need without hassle.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            <b>Versatility for All Creative Projects</b>
            </h3>
            <p className="text-[#343a40]">
            Whether you’re naming a character, writing a historical novel, or creating a unique identity for a game, our name generator adapts to your needs. 
            The wide range of options makes it suitable for any creative endeavor.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
           <b>Enhance Authenticity and Storytelling</b>
            </h3>
            <p className="text-[#343a40]">
            Using our generator ensures your characters and stories feel authentic to the Victorian era. 
            The names reflect the grace and sophistication of the time, helping you build immersive narratives.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
           <b> Inspiration for Your Creative Vision</b>
            </h3>
            <p className="text-[#343a40]">
            Sometimes, the perfect name can spark an idea for an entire story or character. With our generator, you’ll have access to a wealth of inspiring names to fuel your creativity.
            </p>
            <p className="text-[#343a40]">
            By using our Victorian Name Generator, you gain access to these incredible features, making it an invaluable tool for any writer, gamer, or creative enthusiast!
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[100%] bg-white"
        // style={{ backgroundColor: "rgb(23 ,162 ,184, 0.6)" }}
      >
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Victorian Name Categories and Ideas
            </h2>           
            <br />
            <h3 className="text-left text-[28px] font-medium text-[#343a40] pb-[]">
            Victorian Name By Gender:
            </h3>
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Male Victorian Names: </b>
           Strong, timeless, and dignified, these names embody the sophistication and elegance of the Victorian era. 
           Perfect for creating male characters with depth, authority, or charm, these names evoke the spirit of a bygone time.
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Female Victorian Names: </b>
           Graceful and classic, these names capture the beauty and refinement of the Victorian period. 
           Ideal for female characters or projects that require an air of elegance and tradition, these names exude a sense of grace that will resonate with any creative vision.
            </p>
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Victorian Name By Type
            </h3>
            <br />  
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Old English Names: </b>
           Rooted in history and culture, these names carry a distinct charm that reflects the ancient traditions of England. 
           Ideal for stories, games, or projects with historical depth, Old English names bring authenticity and uniqueness.
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Old-Fashioned Names: </b>
           Nostalgic and sophisticated, these names transport you to an era where elegance and manners were prized. 
           Perfect for vintage-themed projects, these names evoke a sense of timeless style, ideal for characters with a connection to the past or themes of tradition.
            </p> 
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
           List of Victorian Name Categories by Gender With Meaning
            </h2>           
            <br />
            <h3 className="text-left text-[28px] font-medium text-[#343a40] pb-[]">
            Victorian Male Names
            </h3>
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Traditional: </b>
           <ul>
            <li>- <b>Edward: </b>Meaning "wealthy guardian," symbolizing leadership and strength, perfect for aristocratic or noble characters</li>
            <li>- <b>Alistair: </b>Derived from the Greek name "Alexandros," meaning "defender of the people," reflecting wisdom and courage</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Old English: </b>
           <ul>
            <li>- <b>Winston: </b>Meaning "joyful stone," evoking reliability and resilience, a name with historical depth and significance</li>
            <li>- <b>Graham: </b>Meaning "gravelly homestead," symbolizing strength, tradition, and steadfastness in the face of adversity</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Old-Fashioned: </b>
           <ul>
            <li>- <b>Montgomery: </b>Meaning "from the mountain of the ruler," symbolizing nobility and aristocracy, a name fit for a gentleman of high status</li>
            <li>- <b>Harrison: </b>Meaning "son of Harry," reflecting both tradition and dignity, ideal for characters of refined lineage</li>
           </ul>
            </p> 
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Victorian Female Names
            </h3>
            <br />  
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Traditional: </b>
           <ul>
            <li>- <b>Isabella: </b>Meaning "devoted to God," symbolizing grace, beauty, and devotion, perfect for an elegant and virtuous Victorian lady</li>
            <li>- <b>Arabella: </b>Meaning "yielding to prayer," representing spirituality and nobility, a refined and aristocratic choice</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Old English: </b>
           <ul>
            <li>- <b>Eleanor: </b>Meaning "shining light," symbolizing wisdom, beauty, and strength, ideal for a character with both grace and intelligence</li>
            <li>- <b>Beatrice: </b>Meaning "bringer of happiness," reflecting kindness, warmth, and a nurturing personality, perfect for a well-loved Victorian woman</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Old-Fashioned: </b>
           <ul>
            <li>- <b>Vivienne: </b>Meaning "alive," symbolizing vitality and elegance, a name reflecting the timeless charm of the Victorian period</li>
            <li>- <b>Florence: </b>Meaning "flourishing" or "prosperous," evoking growth, prosperity, and a sense of refinement, often associated with historical figures of influence</li>
           </ul>
            </p> 
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[32px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Why Victorian Names Matter</b>
          </h2>
          <p className="text-[#343a40]">
          Victorian names hold significant importance in shaping the first impressions of your characters or projects. 
          The names you choose can deeply influence how others perceive your work, adding layers of meaning, sophistication, and historical authenticity. Here's why Victorian names matter:
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b> Establish Authenticity:</b>
            </h3>
            <p>
            Victorian names are steeped in history, culture, and social significance. By using these names, 
            you not only reflect the era’s traditions but also create an authentic atmosphere for your project, be it a historical novel, a role-playing game, or any creative endeavor.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b>Enhance Character Depth:</b>
            </h3>
            <p>
            A well-chosen Victorian name adds complexity to your characters. The meanings behind these names help enrich their personalities, 
            motivations, and story arcs. For example, a name like "Edward" 
            (meaning "wealthy guardian") can suggest a character with a noble and protective nature, while "Isabella" (meaning "devoted to God") 
            might indicate a virtuous and graceful figure.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b>Set the Tone for Your Story:</b>
            </h3>
            <p>
            The name you give your character sets the mood and atmosphere of your entire narrative. 
            Victorian names convey a sense of elegance and formality, instantly immersing your audience in the time period and theme you're aiming to portray. 
            It helps establish a strong, memorable identity for your characters.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b>Create Memorable Impressions:</b>
            </h3>
            <p>
            Names often leave lasting impressions, and a Victorian name, with its distinctive charm, can make your characters unforgettable. 
            A unique and meaningful name can become a defining aspect of your character’s identity, making them stand out in your audience's mind.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b>Reflect the Era's Elegance:</b>
            </h3>
            <p>
            Victorian names carry an air of sophistication, refinement, and high society. 
            They reflect the values, structure, and customs of the Victorian era, adding depth and credibility to any project that seeks to capture this period.
            </p>
          </div>
          <p>
          By using the Victorian Name Generator, you can discover names that not only suit your creative needs but also enhance the authenticity and impact of your work. 
          Don’t underestimate the power of a well-chosen name—let it elevate your project and make your characters truly unforgettable.
            </p>
        </div>
      </div>
      <div
        className="w-[100%] flex justify-center items-center bg-overlay py-[250px]"
        style={{
          backgroundImage: 'url("/generatorbg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay:  0.25 }}
          className="flex items-center flex-col gap-6 px-4"
        >
          <div>
            <p className="text-[36px] font-semibold text-white">
              Do you have a request
            </p>
          </div>
          <div>
            <p className="text-white">
              Commissions are available! Visit my contact page and send an
              inquiry with the details of your request.
            </p>
          </div>
          <div>
          <a href="https://www.nameideagenerator.com/contact-us">
  <button className="bg-white text-black text-[20px] px-[20px] py-[16px] rounded-[10px] font-semibold">
    Request
  </button>
</a>
          </div>
        </motion.div>
      </div>
      <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
      <Footer />
    </motion.div>
  );
};

export default VictorianNameGenerator;

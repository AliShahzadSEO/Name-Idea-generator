"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Script from 'next/script';
const demonNames = [
  {
    name: "Azaroth",
    detail: "The keeper of the lost flames.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Belzakar",
    detail: "The whisperer of forgotten secrets.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Cthuloris",
    detail: "The guardian of the abyssal echoes.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Eldrikor",
    detail: "The lord of the enchanted abyss.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Furyon",
    detail: "The avenger of broken oaths.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Gorgath",
    detail: "The terror of the night skies.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Helzara",
    detail: "The mistress of cursed dreams.",
    status: false,
    gender: "female",
    type: "Shadow"
  },
  {
    name: "Ignarok",
    detail: "The flame that consumes the living.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Jaburath",
    detail: "The weaver of tormenting illusions.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Khargron",
    detail: "The butcher of hopeless souls.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Letharis",
    detail: "The shadow that haunts the light.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Morvash",
    detail: "The specter of eternal sorrow.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Nefarix",
    detail: "The betrayer of sacred trusts.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ophirion",
    detail: "The deceiver of mortal minds.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Pyrionis",
    detail: "The blaze that blinds the righteous.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Quarath",
    detail: "The silent hunter of the night.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ragnorak",
    detail: "The end-bringer of all realms.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Sathariel",
    detail: "The phantom of forgotten pain.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Tyranak",
    detail: "The destroyer of celestial harmony.",
    status: false,
    gender: "male",
    type: "Celestial"
  },
  {
    name: "Umbrios",
    detail: "The warden of shadowy prisons.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Varkoris",
    detail: "The scourge of broken dreams.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Wraithor",
    detail: "The ghost of silent screams.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Xenathor",
    detail: "The harbinger of twisted fate.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Yggorath",
    detail: "The serpent of eternal dusk.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Zarothis",
    detail: "The whisper in the dark void.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Abaddonis",
    detail: "The destroyer of desolate realms.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Baalgrim",
    detail: "The conqueror of doomed fortresses.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Chthonis",
    detail: "The lurker beneath the earth.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Daemonox",
    detail: "The shadow that consumes the soul.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Eldritchion",
    detail: "The embodiment of ancient horrors.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Fenrithor",
    detail: "The beast of the darkened woods.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Gorgonoth",
    detail: "The petrifier of the brave.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Hadeskar",
    detail: "The ruler of the underworld.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Infernak",
    detail: "The fire that never dies.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Jezebor",
    detail: "The tempter of the weak-hearted.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Krakenor",
    detail: "The terror of the deep seas.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Lilithor",
    detail: "The seductress of forbidden desires.",
    status: false,
    gender: "female",
    type: "Fiend"
  },
  {
    name: "Molochor",
    detail: "The devourer of sacrificial souls.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Nefarion",
    detail: "The prince of the damned.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Oblivionis",
    detail: "The void that swallows all.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Pandorath",
    detail: "The opener of cursed boxes.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Quorathis",
    detail: "The silent storm of night.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ravenor",
    detail: "The harbinger of dark omens.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Sanguinor",
    detail: "The drinker of bloodied chalices.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Thanatos",
    detail: "The angel of death's embrace.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Umbriath",
    detail: "The wraith of eternal night.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Vampyros",
    detail: "The lord of crimson night.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Wendigor",
    detail: "The devourer of lost souls.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Xathrion",
    detail: "The shadow of despair.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ymirak",
    detail: "The giant of eternal frost.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Zarathor",
    detail: "The reaper of twisted fates.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Abyssion",
    detail: "The abyss incarnate.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
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
    name: "Tabaxi Name Generator",
    pic: "/tabaxi.jpeg",
    link: "https://www.nameideagenerator.com/tabaxi-name-generator",
},
{
    name: "Angel Name Generator",
    pic: "/angel.jpg",
    link: "https://www.nameideagenerator.com/angel-name-generator",
},
{
    name: "WoW (World of Warcraft) Name Generator",
    pic: "/wow.jpg",
    link: "https://www.nameideagenerator.com/wow-name-generator",
},
{
    name: "Horse Name Generator",
    pic: "horse.webp",
    link: "https://www.nameideagenerator.com/horse-name-generator",
},
];

const TieflingNameGenerator = () => {
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
  
const bgImage = "/female.jpg"
const context = "Tiefling Name Generator"
const Q1 = "Can I use the Tiefling Name Generator for non-D&D characters?"
const A1 = "Yes! The names work great for any fantasy setting, not just Dungeons & Dragons. Use them for games, stories, or roleplay. Anywhere you need a strong character name."
const Q2 = "Are the names based on real lore or made-up?"
const A2 = "The names are inspired by infernal language, fantasy naming conventions, and tiefling lore. Each one is crafted to fit the style and feel of a tiefling character."
const Q3 = "Can I pick the gender for name results?"
const A3 = "Yes! You can select male, female, or unisex options to get names that match your character’s tone and personality."
const Q4 = "Do the names come with meanings?"
const A4 = "They do! Just hover over any name to see its meaning or background. This helps you pick a name that carries the right message or vibe."
const Q5 = "How many names can I generate?"
const A5 = "As many as you want! There’s no limit. Keep clicking until you find the perfect name that feels just right for your tiefling."
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
    <ol className="list-none p-0 inline-flex">
      <li className="flex items-center">
        <a href="/" className="hover:underline text-[#343a40]">Home</a>
        <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      </li>
      <li className="flex items-center">
        <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fantasy and Mythical Creatures Name</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/tiefling-name-generator" className="hover:underline text-[#343a40]">Tiefling Name Generator</a>
      </li>
    </ol>
  </nav>
            <p className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
             Random Tiefling Name Generator
            </p>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Tiefling Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Inferno">Inferno</option>
              <option value="Abyss">Abyss</option>
              <option value="Fiend">Fiend</option>
              <option value="Celestial">Celestial</option>
              <option value="Shadow">Shadow</option>
            </select>
          </div>

<div>
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797994018929842"
     crossorigin="anonymous"></Script>

<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-1797994018929842"
  data-ad-slot="5439217831"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
<Script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</Script>
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
          <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
            No More Guesswork in Naming Your Tiefling
            </h2>
            <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
            It can get quite tricky to find the right name for your tiefling. You want something that sounds powerful, fits their backstory, and carries that infernal edge. 
            That’s a lot of pressure. And scrolling through endless name lists doesn’t always help.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            Our Tiefling Name Generator makes it easy. Choose a few simple options, and the tool delivers names that feel like they belong. 
            Be it noble or cursed, cunning or chaotic. You’ll get names that match your tiefling’s vibe without the guesswork.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
        <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
          How Our Tiefling Name Tool Works?
          </h2>
          <p className="sm:text-[20px] text-[20px] my-[10px] text-center">
          Our Tiefling Name Generator is built to make naming your character simple, fast, and accurate. 
          No need to overthink it. We give you powerful names that match the tiefling’s origin, vibe, and backstory. Here’s how it works:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[28px] text-[20px] font-semibold">
              Step 1: Choose a Name Style
              </h3>
              <p>
              Pick the type of name you want. Classic infernal, dark fantasy, or something more modern and unique.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[28px] text-[20px] font-semibold">
              Step 2: Select Gender
              </h3>
              <p>
              Choose the gender of your tiefling. This helps the tool generate names with the right tone and structure.
               </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[28px] text-[20px] font-semibold ">
              Step 3 - Click ‘Generate’
              </h3>
              <p>
              Hit the <b> "Generate"</b> button to get a list of names instantly. Every batch gives you a new set of fresh options.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[28px] text-[20px] font-semibold ">
              Step 4 - Hover to View Meanings
              </h3>
              <p>
              Sway your cursor over each name to reveal its meaning or language influence. Some names carry infernal roots, others hint at deeper lore.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[28px] text-[20px] font-semibold ">
              Step 5 - Adjust and Try Again
              </h3>
              <p>
              Still looking? Change the style or gender and click again. You’ll keep getting new names until one clicks.
              </p>
            </div>
            <p>
            It doesn’t have to take hours. Our tool helps you skip the scroll and find the right name super fast.
              </p>
          </div>
          <div className="sm:w-[45%] relative ">
            <img
              src="tiffling.webp"
              alt="Tiefling Name Generator | Get Random Tiefling Name With Meaning"
              className="w-[350px] my-[10px] h-[350px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="tiffing.webp"
              alt="Tiefling Name Generator | Get Random Tiefling Name With Meaning"
              className="w-[350px] my-[10px] h-[350px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/generatorbg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Tiefling Name Generator
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

      <div class="w-[80%] mx-auto text-[#343a40] my-[30px]">
        <div class="text-center mb-[10px]">
        <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
            What Makes Our Tiefling Name Generator Worth Using?
            </h2>
            <p class="sm:text-[16px] text-[22px] font-semibold">
            Our Tiefling Name Generator is the best choice due to its unique features. 
            Try it now to take advantage of its exclusive advantages. 
            Let us tell you what advanced benefits are present in our tool:
            </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
   
    <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#343a40] mb-4">Fast and Effortless</h3>
      <p class="text-[#343a40]">
        Get tiefling names in seconds. No delays, no guesswork. Just click and go.
      </p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#343a40] mb-4">Tailored for Tiefling Lore</h3>
      <p class="text-[#343a40]">
        The tool is designed to reflect tiefling origins, backgrounds, and infernal roots.
      </p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#343a40] mb-4">Smart Custom Options</h3>
      <p class="text-[#343a40]">
        Choose the name style and gender to match your character’s personality.
      </p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <p class="sm:text-[24px] text-[20px] font-semibold text-[#343a40] mb-4">Meanings at a Glance</p>
      <p class="text-[#343a40]">
        Hover over each name to see its meaning and origin instantly.
      </p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#343a40] mb-4">Endless Name Ideas</h3>
      <p class="text-[#343a40]">
        Generate as many names as you like until one fits just right.
      </p>
    </div>

    
    <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#343a40] mb-4">Great for Any Fantasy Project</h3>
      <p class="text-[#343a40]">
        Perfect for roleplaying, character creation, storytelling, and worldbuilding.
      </p>
    </div>
  </div>
</div>

    </div>


<div class="w-[100%] bg-[#f1f1f1]">
  <div class="flex justify-between w-full">
    <div class="w-[15%] bg-[#f1f1f1] h-[100vh] hidden sm:block">
    <div className="w-[15%] bg-[#f1f1f1] h-[100vh] hidden sm:block rounded-l-lg">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797994018929842" crossOrigin="anonymous"></script>

      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1797994018929842"
        data-ad-slot="3517655713"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
    </div>

    <div class="w-[70%] mx-auto pb-[40px]">
      <div class="py-[60px]">
        <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
          Who Are the Tieflings?
        </h2>
        <hr class="border-t-2 border-[#343a40] w-1/4 mx-auto mb-[30px]" />

        <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[30px] leading-relaxed">
          Tieflings are one of the most fascinating races in Dungeons & Dragons. Born from a human pact with fiendish beings from the Lower Planes—like demons or devils—they carry the marks of their infernal ancestry. Horns, tails, and striking eye colors are just a few of the features that make them stand out, but there's so much more to their story than their appearance.
        </p>

        <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[30px] leading-relaxed">
          Sadly, their origins come with a heavy social stigma. Many tieflings are feared or distrusted simply because of their lineage, often judged by their horns or unusual looks rather than their actions. Despite this, tieflings are known for their resilience. Many work hard to show that their heritage doesn’t control their fate and that they can be heroes in their own right.
        </p>
      </div>

      <div class="mt-[40px]">
        <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
          What Do Tieflings Look Like?
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <h3 class="text-[24px] font-semibold text-[#343a40] mb-4">Physical Traits</h3>
            <p class="text-[#343a40]">
              Tieflings have horns and tails. The horns vary. Some are curled, like a ram's. Others are straight or spiral. Their tails are long and thick. They are often prehensile. Tieflings also have sharp canine teeth and eyes that lack sclera.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <h3 class="text-[24px] font-semibold text-[#343a40] mb-4">Skin and Hair Colors</h3>
            <p class="text-[#343a40]">
              Tieflings’ skin ranges from human tones to red, purple, and blue. Their hair is mostly dark, like black, brown, or dark red. Some Tieflings have unusual hair colors, like blue or purple. The hair grows behind their horns.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <h3 class="text-[24px] font-semibold text-[#343a40] mb-4">Easily Recognizable</h3>
            <p class="text-[#343a40]">
              Tieflings are not always easy to recognize. Some look human, with small horns or odd eyes. Most, though, have strong infernal traits that make them stand out.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-[40px]">
        <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
          Do you want to be judged by your appearance?
        </h2>

        <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[30px] leading-relaxed">
          Tieflings often don’t have a choice. Their looks remind the world of their fiendish ancestry. Unfortunately, society judges them based on their features rather than their deeds. How would you feel if your entire life was shaped by how you look, and not who you are?
        </p>
      </div>
    </div>

    <div class="w-[15%] bg-[#f1f1f1] h-[100vh] hidden sm:block">
    <div className="w-[15%] bg-[#f1f1f1] h-[100vh] hidden sm:block rounded-l-lg">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797994018929842" crossOrigin="anonymous"></script>

      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1797994018929842"
        data-ad-slot="3517655713"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>    
    </div>
  </div>
</div>


<div class="w-[90%] sm:w-[80%] mx-auto pb-[40px]">
  <div class="py-[60px]">
  <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
      Why Tiefling Names Are a Big Deal in Fantasy and RPGs?
    </h2>
    <hr class="border-t-2 border-[#343a40] w-1/4 mx-auto mb-[30px]" />

    <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[30px] leading-relaxed">
      Tieflings aren’t your average characters. They come with a backstory full of infernal bloodlines, mysterious powers, and inner conflict. Their name should reflect all of that. A good tiefling name sets the tone right away. It can hint at their lineage, their past, or the path they’re about to take in your story or campaign.
    </p>

    <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[30px] leading-relaxed">
      In RPGs like Dungeons & Dragons, names help define who a character is before they say a single word. A name like “Zarion” or “Vexira” already tells you this tiefling has some fire in them. It’s a small detail that carries a lot of weight, which makes the character feel real, memorable, and fully formed from the start.
    </p>
  </div>

  <div class="mt-[40px]">
  <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
    What Tiefling Names Say About Your Character?
  </h2>
  <hr class="border-t-2 border-[#343a40] w-1/4 mx-auto mb-[30px]" />

  <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[40px] leading-relaxed">
    A tiefling’s name does more than just sound cool. It carries meaning. It can reflect where they come from, what they’ve inherited, or how they see themselves in a world that doesn’t always welcome them. The right name helps build your tiefling’s identity and adds personality before they even speak.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="bg-white p-8 rounded-2xl shadow-2xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <h3 class="text-[20px] font-semibold text-[#343a40] mb-4">Infernal Bloodlines and Ancestral Echoes</h3>
      <p class="text-[#343a40] text-lg">
        Many tieflings draw names from their infernal ancestry. These names often sound ancient, sharp, or otherworldly. They’re like reminders of a bloodline that traces back to devils, fiends, or something far older. Some names carry pride and some reflect a burden or a past the tiefling is trying to outrun.
      </p>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-2xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <h3 class="text-[20px] font-semibold text-[#343a40] mb-4">Masculine, Feminine, and Unisex Naming Patterns</h3>
      <p class="text-[#343a40] text-lg">
        Tiefling names can take many forms. Some bold and commanding, others smooth and mysterious. Masculine names might carry weight and grit, while feminine names often lean into elegance or danger. Unisex names are also common, which give tieflings freedom to choose a name that reflects how they see themselves, not just how they were born.
      </p>
    </div>
  </div>
</div>

</div>



<div class="w-[90%] sm:w-[80%] mx-auto pb-[40px]">
  <div class="py-[60px]">
  <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
      How Tiefling Names Are Used in D&D and Fantasy Worlds?
    </h2>
    <hr class="border-t-2 border-[#343a40] w-1/4 mx-auto mb-[30px]" />

    <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[40px] leading-relaxed">
      In Dungeons & Dragons, tiefling names often hint at the character’s connection to the infernal planes. Some players stick to traditional names rooted in ancient languages or infernal dialects, while others use virtue names like “Hope,” “Torment,” or “Reckon” to reflect the tiefling’s beliefs or inner conflict.
    </p>

    <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[40px] leading-relaxed">
      Outside of D&D, tieflings appear in countless fantasy games, novels, and campaigns, each with their own twist on naming traditions. No matter the setting, a well-chosen tiefling name adds depth, flavor, and meaning to the character’s role in the world. It sets the mood before a single line of dialogue is spoken.
    </p>
  </div>

  <div class="mt-[40px]">
  <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
      The Origins of Tiefling Names in Fantasy Lore
    </h2>
    <hr class="border-t-2 border-[#343a40] w-1/4 mx-auto mb-[30px]" />

    <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[40px] leading-relaxed">
      Tiefling names often trace back to infernal roots, ancient tongues, and old-world traditions. Many names are inspired by languages that sound harsh, melodic, or otherworldly which mirror the tiefling’s connection to mysterious and powerful ancestors.
    </p>

    <p class="text-center text-lg sm:text-[18px] text-[#343a40] mb-[40px] leading-relaxed">
      Some names are passed down through generations as a mark of pride or defiance, while others are chosen as a break from the past. In many stories and homebrew worlds, tiefling names also carry symbolic meanings. Words tied to fate, emotion, or rebellion. Over time, these naming styles became a staple in fantasy, which give tieflings a distinct identity across different settings.
    </p>
  </div>

  <div class="mt-[40px]">
  <h2 class="text-center text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#343a40] mb-6">
      Who Are Some Famous Tieflings in Lore?
    </h2>
    <hr class="border-t-2 border-[#343a40] w-1/4 mx-auto mb-[30px]" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <h4 class="text-[24px] font-semibold text-[#343a40] mb-4">Farideh</h4>
        <p class="text-[#343a40]">
          A Tiefling warlock from the Forgotten Realms. She made a pact with a cambion and became a hero in her own right. Her story is one of struggle and self-discovery.
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <h4 class="text-[24px] font-semibold text-[#343a40] mb-4">Zevlor</h4>
        <p class="text-[#343a40]">
          A Tiefling mercenary leader in the Baldur’s Gate series. Zevlor leads a group of Tiefling refugees and is known for his loyalty and leadership.
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <h4 class="text-[24px] font-semibold text-[#343a40] mb-4">Jander Sunstar</h4>
        <p class="text-[#343a40]">
          A Tiefling vampire, known for his tragic story. Jander’s journey mixes themes of damnation and redemption.
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <h4 class="text-[24px] font-semibold text-[#343a40] mb-4">Balthazar</h4>
        <p class="text-[#343a40]">
          A Tiefling wizard who made appearances in Planescape. Balthazar is an eccentric and intelligent character, constantly seeking knowledge from the Lower Planes.
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <h4 class="text-[24px] font-semibold text-[#343a40] mb-4">Tiax</h4>
        <p class="text-[#343a40]">
          A Tiefling cleric in the Baldur’s Gate series. Tiax is known for his chaotic nature and strong belief in the power of the gods.
        </p>
      </div>
    </div>
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
          className="flex items-center flex-col gap-6"
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
            <button className="bg-white text-black text-[20px] px-[20px] py-[16px] rounded-[10px] font-semibold">
              Request
            </button>
          </div>
        </motion.div>
      </div>
      <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
      <Footer />
    </motion.div>
  );
};

export default TieflingNameGenerator;

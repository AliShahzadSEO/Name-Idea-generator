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
    type: "fire",
  },
  {
    name: "Belzakar",
    detail: "The whisperer of forgotten secrets.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Cthuloris",
    detail: "The guardian of the abyssal echoes.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Eldrikor",
    detail: "The lord of the enchanted abyss.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Furyon",
    detail: "The avenger of broken oaths.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Gorgath",
    detail: "The terror of the night skies.",
    status: false,
    gender: "male",
    type: "air",
  },
  {
    name: "Helzara",
    detail: "The mistress of cursed dreams.",
    status: false,
    gender: "female",
    type: "dark",
  },
  {
    name: "Ignarok",
    detail: "The flame that consumes the living.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Jaburath",
    detail: "The weaver of tormenting illusions.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Khargron",
    detail: "The butcher of hopeless souls.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Letharis",
    detail: "The shadow that haunts the light.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Morvash",
    detail: "The specter of eternal sorrow.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Nefarix",
    detail: "The betrayer of sacred trusts.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Ophirion",
    detail: "The deceiver of mortal minds.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Pyrionis",
    detail: "The blaze that blinds the righteous.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Quarath",
    detail: "The silent hunter of the night.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Ragnorak",
    detail: "The end-bringer of all realms.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Sathariel",
    detail: "The phantom of forgotten pain.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Tyranak",
    detail: "The destroyer of celestial harmony.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Umbrios",
    detail: "The warden of shadowy prisons.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Varkoris",
    detail: "The scourge of broken dreams.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Wraithor",
    detail: "The ghost of silent screams.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Xenathor",
    detail: "The harbinger of twisted fate.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Yggorath",
    detail: "The serpent of eternal dusk.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Zarothis",
    detail: "The whisper in the dark void.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Abaddonis",
    detail: "The destroyer of desolate realms.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Baalgrim",
    detail: "The conqueror of doomed fortresses.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Chthonis",
    detail: "The lurker beneath the earth.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Daemonox",
    detail: "The shadow that consumes the soul.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Eldritchion",
    detail: "The embodiment of ancient horrors.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Fenrithor",
    detail: "The beast of the darkened woods.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Gorgonoth",
    detail: "The petrifier of the brave.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Hadeskar",
    detail: "The ruler of the underworld.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Infernak",
    detail: "The fire that never dies.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Jezebor",
    detail: "The tempter of the weak-hearted.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Krakenor",
    detail: "The terror of the deep seas.",
    status: false,
    gender: "male",
    type: "water",
  },
  {
    name: "Lilithor",
    detail: "The seductress of forbidden desires.",
    status: false,
    gender: "female",
    type: "dark",
  },
  {
    name: "Molochor",
    detail: "The devourer of sacrificial souls.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Nefarion",
    detail: "The prince of the damned.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Oblivionis",
    detail: "The void that swallows all.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Pandorath",
    detail: "The opener of cursed boxes.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Quorathis",
    detail: "The silent storm of night.",
    status: false,
    gender: "male",
    type: "air",
  },
  {
    name: "Ravenor",
    detail: "The harbinger of dark omens.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Sanguinor",
    detail: "The drinker of bloodied chalices.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Tartarusis",
    detail: "The jailer of eternal punishments.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Ursuron",
    detail: "The bear of night terrors.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Vortexis",
    detail: "The whirlwind of chaos.",
    status: false,
    gender: "male",
    type: "air",
  },
  {
    name: "Wyrmathor",
    detail: "The dragon of nightmarish flames.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Xerathis",
    detail: "The enigma of the dark riddles.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Yggdrasilis",
    detail: "The protector of the twisted roots.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Zephiron",
    detail: "The wind that whispers doom.",
    status: false,
    gender: "male",
    type: "air",
  },
  {
    name: "Abyssion",
    detail: "The depth that consumes all light.",
    status: false,
    gender: "male",
    type: "water",
  },
  {
    name: "Bansheara",
    detail: "The wail that brings death.",
    status: false,
    gender: "female",
    type: "dark",
  },
  {
    name: "Cthonaris",
    detail: "The keeper of ancient curses.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Draconis",
    detail: "The dragon of eternal wrath.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Enigmor",
    detail: "The mystery that drives men mad.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Fomorath",
    detail: "The giant of the undersea realms.",
    status: false,
    gender: "male",
    type: "water",
  },
  {
    name: "Gargothis",
    detail: "The watcher of the cursed towers.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Hellionis",
    detail: "The spirit of unending fire.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Incubor",
    detail: "The nightmare that visits in sleep.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Jotunnis",
    detail: "The frost giant of the dark north.",
    status: false,
    gender: "male",
    type: "water",
  },
  {
    name: "Kalioth",
    detail: "The dancer of destruction.",
    status: false,
    gender: "female",
    type: "dark",
  },
  {
    name: "Leviathor",
    detail: "The beast beneath the waves.",
    status: false,
    gender: "male",
    type: "water",
  },
  {
    name: "Myrkoth",
    detail: "The shadow of the forgotten past.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Nyxaris",
    detail: "The night that never ends.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Ophidion",
    detail: "The serpent of hidden venom.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Phantomor",
    detail: "The ghost that haunts the guilty.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Quetzaroth",
    detail: "The feathered serpent of doom.",
    status: false,
    gender: "male",
    type: "air",
  },
  {
    name: "Ragnarokis",
    detail: "The end of all things.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Shaitanis",
    detail: "The adversary of light.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Thanathor",
    detail: "The death that stalks in silence.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Urkathis",
    detail: "The beast of the endless hunt.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Vampiron",
    detail: "The blood drinker of the night.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Wendigar",
    detail: "The cannibal of the frozen wastes.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Xarathis",
    detail: "The keeper of forbidden knowledge.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Yokaioth",
    detail: "The spirit of the haunted forest.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Zorgonoth",
    detail: "The devourer of lost souls.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Astarion",
    detail: "The fallen star of despair.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Behemothis",
    detail: "The beast of unending hunger.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Chimeraon",
    detail: "The hybrid horror of night.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Doomrath",
    detail: "The end that walks among us.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Eclipsion",
    detail: "The darkness that covers the sun.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Fenrisar",
    detail: "The wolf that swallows the moon.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Grimmor",
    detail: "The harvester of twisted tales.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Hydrathis",
    detail: "The many-headed serpent.",
    status: false,
    gender: "male",
    type: "water",
  },
  {
    name: "Infernis",
    detail: "The firestorm of endless rage.",
    status: false,
    gender: "male",
    type: "fire",
  },
  {
    name: "Juggernautis",
    detail: "The unstoppable force.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Krakenis",
    detail: "The terror of the briny deep.",
    status: false,
    gender: "male",
    type: "water",
  },
  {
    name: "Licharis",
    detail: "The undead sorcerer.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Maledictis",
    detail: "The curse that never ends.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Necrosis",
    detail: "The rot that consumes all.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Omenor",
    detail: "The bringer of ill tidings.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Pandemonius",
    detail: "The chaos that engulfs all.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Quagmiris",
    detail: "The bog that swallows travelers.",
    status: false,
    gender: "male",
    type: "earth",
  },
  {
    name: "Ravenous",
    detail: "The hunger that never sleeps.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Sabbathor",
    detail: "The lord of dark rites.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Toxaroth",
    detail: "The poisoner of all purity.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Umbroth",
    detail: "The shadow that engulfs the soul.",
    status: false,
    gender: "male",
    type: "dark",
  },
  {
    name: "Vortexor",
    detail: "The whirlpool of despair.",
    status: false,
    gender: "male",
    type: "water",
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
    name: "Alien Name Generator",
    pic: "/alien.webp",
    link: "https://www.nameideagenerator.com/alien-name-generator",
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

const DemonNameGenerator = () => {
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
  
const bgImage = "/demonpic.jpg"
const context = "Demon Name Generator"
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
        <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fantasy and Mythical Creatures Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/demon-name-generator" className="hover:underline text-[#343a40]">Demon Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
              Badass Demon Name Generator With Meaning
            </h2>
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
            <p className="text-center text-[#343a40]">Types of Demons Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="air">Air</option>
              <option value="earth">Earth</option>
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
      <div className="w-[100%] bg-white rounded-lg">
  <div className="flex justify-between w-full">
    {/* Left Ad Section */}
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

    <div className="w-[80%] mx-auto pb-[20px] rounded-lg">
      <div className="py-[50px]">
        <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
          Generate Demon Names In a Click
        </h2>
        <hr />
        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
          It doesn’t really need to be a struggle to find the right name for your demon character. 
          Our Demon Name Generator offers a fast, efficient solution to your naming needs. 
          Choose from different demon types like demon lords, imps, or fallen angels, and select a gender to customize your results. 
          In just one click, you’ll get a fresh list of names that fit your character’s role and personality. 
          Need something fierce and commanding or subtle and devious? Our tool provides names that bring your demon to life.
        </p>
        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
          The best part? You don’t need to sift through endless lists of names or overthink the process. 
          Simply hit <b> "Generate,"</b> and instantly get powerful names with deep, infernal meanings. 
          The tool even allows you to hover over each name for its meaning, which gives you insight into its dark origins. 
          It’s quick, it’s easy, and you’ll have your demon’s perfect name ready in no time.
        </p>
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
    </div>

    {/* Right Ad Section */}
    <div className="w-[15%] bg-[#f1f1f1] h-[100vh] hidden sm:block rounded-r-lg">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797994018929842" crossOrigin="anonymous"></script>

      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1797994018929842"
        data-ad-slot="5680784626"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  </div>
</div>



      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use Our Demon Name Generator?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Let’s show you how to use our online devil name generator to follow some simple steps.
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
             Step 1: Select a Type and Gender
              </h3>
              <p>
              Start by selecting the demon type you want to name. Choose between demon lords, imps, or fallen angels. Then, pick a gender to narrow down your options.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Step 2: Click "Generate"
              </h3>
              <p>
              Click the "Generate" button to instantly get a list of demon names. Each name is generated based on your selection, which ensures it fits your needs.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
              Step 3: Hover for Meaning
              </h3>
              <p>
              Hover over any name to view its meaning. This feature reveals the origin and significance of the name. 
              This helps you make an informed choice.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Example Name
              </h3>
              <p>
              If you choose a male demon name, you might generate Azazel. 
              Hover over it to see that Azazel is often known as a fallen angel in mythology, which adds depth to your character.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="motherdragon.jpg"
              alt="Demon Name Generator With Meaning | Devil Name Generator"
              className="w-[300px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="dragon.png"
              alt="Demon Name Generator With Meaning | Devil Name Generator"
              className="w-[300px] h-[300px] my-[10px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
          Related to Demon Name Generator
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
  <div className="text-center">
    <h2 className="sm:text-[36px] text-[24px] font-semibold mb-4">
      Why Use Our Online Demon Name Generator?
    </h2>
    <p className="sm:text-[16px] text-[14px] mb-6">
      Generate unique names efficiently with our Demon Name Generator. Begin crafting distinctive names for your projects now. Below, we detail the benefits of our tool that enhance its value for your needs.
    </p>
  </div>
  <hr className="border-t-[2px] border-[#e0e0e0] my-6" />
  
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-md">
      <h3 className="text-[20px] font-semibold mb-2">Saves Time</h3>
      <ul className="text-[14px] list-inside">
        <li>Quickly generate a wide variety of names.</li>
        <li>Avoid spending hours coming up with names.</li>
      </ul>
    </div>

    <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-md">
      <h3 className="text-[20px] font-semibold mb-2">Endless Options</h3>
      <ul className="text-[14px] list-inside">
        <li>Choose from different demon types and genders to find the perfect name.</li>
        <li>Each click generates a unique name.</li>
      </ul>
    </div>

    <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-md">
      <h3 className="text-[20px] font-semibold mb-2">Meaningful Names</h3>
      <ul className="text-[14px] list-inside">
        <li>Each name carries a rich meaning or backstory.</li>
        <li>This helps you select names with depth and purpose.</li>
      </ul>
    </div>

    <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-md">
      <h3 className="text-[20px] font-semibold mb-2">Customizable Results</h3>
      <ul className="text-[14px] list-inside">
        <li>Personalize your results by selecting specific traits.</li>
        <li>The more specific you are, the more accurate the names will be.</li>
      </ul>
    </div>

    <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-md">
      <h3 className="text-[20px] font-semibold mb-2">Instant Inspiration</h3>
      <ul className="text-[14px] list-inside">
        <li>Get name ideas instantly without sifting through long lists.</li>
        <li>The generator sparks creativity with every click.</li>
      </ul>
    </div>

    <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-md">
      <h3 className="text-[20px] font-semibold mb-2">Perfect for Any Project</h3>
      <ul className="text-[14px] list-inside">
        <li>Ideal for character creation in stories, roleplaying, and games.</li>
        <li>The tool helps you find fitting names for any demon, big or small.</li>
      </ul>
    </div>
  </div>
</div>

<div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
  {/* Title and Introduction */}
  <div className="text-center mb-6">
    <h2 className="sm:text-[36px] text-[24px] font-semibold mb-4">
      What is a Demon?
    </h2>
    <p className="sm:text-[16px] text-[14px] mb-6">
    A demon is a supernatural entity typically linked to negative or harmful influences. In different cultures and beliefs, demons are thought to affect or control humans in both spiritual and physical ways.    </p>
  </div>
  
  {/* Demon Description Section */}
  <div className="py-[20px]">
    <div className="py-[10px] flex flex-col gap-4">
      <h3 className="sm:text-[24px] text-[20px] sm:font-normal font-semibold">
        The Nature of Demons
      </h3>
      <p className="text-[16px]">
        Demons come in all shapes and sizes, with unique powers and purposes. Some excel in dark magic, others in mind control or destruction. The more powerful demons, like demon lords, rule entire realms, while smaller demons, such as imps, cause trouble in subtle ways. Whether towering monsters or tiny tricksters, demons make their mark on the world with their unique abilities and dark agendas.
      </p>
    </div>
  </div>
  
  {/* History of Demonology Section */}
  <div className="py-[20px]">
    <div className="py-[10px] flex flex-col gap-4">
      <h3 className="sm:text-[24px] text-[20px] sm:font-normal font-semibold">
        The History of Demonology
      </h3>
      <p className="text-[16px]">
        The study of demons, or demonology, traces its roots back to ancient civilizations. The term comes from the Greek words "daimon" (spirit) and "logos" (study). Ancient cultures like the Egyptians and Mesopotamians had their own demonologies. In medieval times, Christian demonology flourished, and texts like the "Malleus Maleficarum" (1487) helped fuel witch hunts and demon identification. Over time, demonology evolved and became central to various religious and cultural practices, leading to stories of possession, chaos, and evil in popular media.
      </p>
    </div>
  </div>

  {/* Types of Demons Across Cultures Section */}
  <div className="py-[20px]">
    <div className="py-[10px] flex flex-col gap-4">
    <h2 className="sm:text-[36px] text-[24px] text-center font-semibold mb-4">
    Types of Demons Across Cultures
    </h2>
      <p className="text-[16px]">
        Different cultures have their own interpretations of demons, each contributing unique traits and characteristics to the mythos. Here are some examples:
      </p>
      
      {/* Demon Types List */}
      <div className="mt-4">
        <ul className="list-disc pl-5 text-[16px]">
          <li><strong>Greek & Roman:</strong> Keres – Spirits of death, causing disaster and destruction.</li>
          <li><strong>Hinduism:</strong> Asuras – Rivals to the gods, focused on chaos and conflict.</li>
          <li><strong>Japan:</strong> Oni – Large, horned demons, causing trouble or sometimes just enjoying mischief.</li>
          <li><strong>Christianity:</strong> Fallen Angels – Servants of Satan, spreading evil and rebellion.</li>
          <li><strong>Islamic:</strong> Jinn – Spirits that can be good, bad, or mischievous, often misunderstood.</li>
          <li><strong>Mexican Folklore:</strong> La Llorona – The Weeping Woman, a tragic spirit searching for her lost children.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
  {/* What is a Demon Section */}
  <div className="text-center mb-6">
    <h2 className="sm:text-[36px] text-[24px] font-semibold mb-4">
      How Demons Are Named?
    </h2>
    <p className="sm:text-[16px] text-[14px] mb-6">
      Naming a demon isn’t just about picking something sinister. It’s about capturing their essence—personality, powers, and origins. Here's a deeper dive into how demons get their names across different cultures and stories.
    </p>
  </div>

  {/* Naming Methods */}
  <div className="py-[20px]">
    <div className="flex flex-col gap-6">
      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Infernal Roots</h3>
        <p className="text-[16px]">
          Many demon names come from ancient languages, often tied to hellish realms or evil forces. These names tend to sound harsh or otherworldly, like Beelzebub or Lucifer, reflecting their dark nature.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Symbolic Meanings</h3>
        <p className="text-[16px]">
          Some demons are named based on their roles or powers. For example, Asmodeus is derived from the Hebrew word for "wrath," reflecting his fiery nature and destructive traits.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Mythological Influence</h3>
        <p className="text-[16px]">
          Many demon names are influenced by mythology. For example, Greek, Roman, or Norse mythologies often provide the names and stories of these dark beings, adding historical depth to their character.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Descriptive Names</h3>
        <p className="text-[16px]">
          Sometimes demons are named for their actions. Astaroth, for example, is tied to seduction and trickery, reflecting his manipulative nature.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Cultural Twist</h3>
        <p className="text-[16px]">
          Depending on the region or culture, demons may be named according to local folklore. For instance, Jinn in Arabic culture means "hidden spirit" and embodies a different kind of supernatural force.
        </p>
      </div>
    </div>
  </div>

  {/* Famous Demon Names Section */}
  <div className="py-[20px]">
    <div className="text-center mb-6">
      <h2 className="sm:text-[36px] text-[24px] font-semibold mb-4">
        List of Famous Demon Names
      </h2>
      <p className="sm:text-[16px] text-[14px]">
        Let's take a look at some of the most well-known demon names across mythology, pop culture, and literature.
      </p>
    </div>

    {/* Demon Names in Mythology */}
    <div className="flex flex-wrap gap-6 justify-center">
  <div className="bg-[#e9ecef] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#d4d9df] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Lucifer</h3>
    <p className="text-[16px]">
      The fallen angel, Lucifer symbolizes rebellion and pride. Once a high-ranking angel, he defied God and became the ruler of Hell in many religious traditions.
    </p>
  </div>

  <div className="bg-[#e9ecef] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#d4d9df] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Beelzebub</h3>
    <p className="text-[16px]">
      Known as the “Lord of the Flies,” Beelzebub is a powerful demon in Christian and Jewish demonology, associated with gluttony, corruption, and the prince of Hell.
    </p>
  </div>

  <div className="bg-[#e9ecef] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#d4d9df] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Asmodeus</h3>
    <p className="text-[16px]">
      The demon of lust, greed, and wrath, Asmodeus is a significant figure in Jewish lore, often depicted as a corrupting force on human desires.
    </p>
  </div>
</div>



    {/* Demon Names in Pop Culture */}
    <div className="py-[40px]">
  <h2 className="text-[28px]  font-semibold mb-6 text-center">
    Demon Names in Pop Culture
  </h2>
  <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
    <p className="text-[16px] mb-4">
      From movies to TV shows, demons have been reimagined countless times in pop culture. Here are some of the most famous representations:
    </p>
    <ul className="list-disc pl-6 text-[16px] space-y-2">
      <li><strong>Pazuzu</strong> in The Exorcist: The demon that possesses Regan MacNeil, representing chaos and sickness.</li>
      <li><strong>Azazel</strong> in Supernatural: A cunning demon with a complex backstory and a central antagonist.</li>
      <li><strong>Valak</strong> in The Conjuring Universe: The terrifying demon featured in The Nun and other films.</li>
    </ul>
  </div>
</div>

  </div>

  {/* Psychological Impact of Demon Names */}
  <div className="py-[30px]">
  {/* Section Title and Description */}
  <div className="text-center mb-8">
    <h2 className="sm:text-[32px] text-[26px] font-bold text-[#343a40] mb-4">
      Psychological Impact of Demon Names
    </h2>
    <p className="sm:text-[18px] text-[16px] text-[#6c757d] leading-relaxed">
      Demon names aren't just labels—they carry weight. A strong name conveys authority, fear, and power, shaping the perception of the demon. Whether it’s a name like Lucifer or something more unique like Azazel, names are a crucial part of building a demon’s character and its impact in stories.
    </p>
  </div>

  {/* Main Content Card */}
  <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e9ecef]">
    <p className="text-[16px] text-[#495057]">
      Names like Lucifer evoke authority and fear, making demons feel larger than life. On the other hand, unique names like Azazel or Vexira stand out, adding curiosity and originality. A name tied to mythological or cultural meanings can deepen a demon's character and make their role in the narrative more significant.
    </p>
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

export default DemonNameGenerator;

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
    name: "Tiefling Name Generator",
    pic: "/female.jpg",
    link: "https://www.nameideagenerator.com/tiefling-name-generator",
},
{
    name: "Orc Name Generator",
    pic: "/orc-name-generator.jpg",
    link: "https://www.nameideagenerator.com/orc-name-generator",
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
             Step 1: Select a Gender
              </h3>
              <p>
                Start by picking a gender to customize your results. You can choose between a male and female. 
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Step 2: Choose a Type 
              </h3>
              <p>
              Select the type of demon you want to name. You can choose from Fire, Water, Air, or Earth demons. Each type reflects unique traits and elemental powers.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
              Step 3: Click "Generate"
              </h3>
              <p>
              Click the "Generate" button to instantly get a list of demon names. Each name is generated based on your selection, which ensures it fits your needs.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Hover for Meaning
              </h3>
              <p>
              Hover over any name to view its meaning. This feature reveals the origin and significance of the name. This helps you make an informed choice.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Example of Names
              </h3>
              <p>
              If you choose a male demon name, you might generate Azazel. Hover over it to see that Azazel is often known as a fallen angel in mythology, which adds depth to your character.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="motherdragon.jpg"
              alt="Demon Name Generator With Meaning | Devil Name Generator"
              className="w-[300px] my-[10px] h-[350px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="dragon.png"
              alt="Demon Name Generator With Meaning | Devil Name Generator"
              className="w-[300px] h-[350px] my-[10px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
  {[
    {
      title: "⏱️ Saves Time",
      points: [
        "✅ Quickly generate a wide variety of names.",
        "✅ Avoid spending hours coming up with names.",
      ],
    },
    {
      title: "♾️ Endless Options",
      points: [
        "🎯 Choose from different demon types and genders.",
        "🌀 Each click generates a unique name.",
      ],
    },
    {
      title: "📖 Meaningful Names",
      points: [
        "💡 Each name carries a rich meaning or backstory.",
        "🔍 Select names with depth and purpose.",
      ],
    },
    {
      title: "🎛️ Customizable Results",
      points: [
        "🎨 Personalize results by choosing traits.",
        "🔧 More specific inputs = better names.",
      ],
    },
    {
      title: "⚡ Instant Inspiration",
      points: [
        "🚀 Get ideas instantly without long searches.",
        "✨ Creativity sparked with every click.",
      ],
    },
    {
      title: "🎮 Perfect for Any Project",
      points: [
        "📝 Great for stories, roleplaying, and games.",
        "👹 Find names that suit every demon type.",
      ],
    },
  ].map(({ title, points }) => (
    <div key={title} className="bg-[#f8f9fa] p-4 rounded-lg shadow-md">
      <h3 className="text-[20px] font-semibold mb-2">{title}</h3>
      <ul className="text-[14px] list-inside space-y-1">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

</div>
<div className="w-full bg-white text-[#343a40]">

  <div className="w-[90%] max-w-[1000px] mx-auto py-[50px]">
    
    {/* Title and Introduction */}
    <div className="text-center mb-10">
      <h2 className="sm:text-[36px] text-[28px] font-bold mb-4">
        What is a Demon?
      </h2>
    </div>

    {/* Demon Description Section */}
    <div className="mb-10">
      <p className="text-[16px] leading-relaxed">
        Demons are basically the original bad guys, straight from the dark corners of the universe.
        They’re usually tied to hellish realms or underworlds, representing chaos, destruction, and all things that go bump in the night.
        Think of them as the ultimate troublemakers—always stirring up fear, tempting humans, and shaking up the natural order.
        Depending on which culture you ask, these guys might be fallen angels, ancient spirits, or just plain evil beings who love to ruin everything.
        They live outside normal human life, which is what makes them so intriguing and terrifying at the same time.
      </p>
      <p className="text-[16px] mt-4 leading-relaxed">
       Now, demons come in all shapes and sizes, and their powers are just as varied. Some have a knack for dark magic, 
       while others are better at mind control or plain old destruction. The bigger demons, like demon lords, have enough power to rule entire realms, 
       while the smaller ones, like imps, are more into causing chaos in subtle ways (think pranks with a side of evil). 
       Whether they’re towering monsters or tiny tricksters, 
       each demon brings something unique to the table, and you can bet they’re leaving their mark on the world—one dark spell or evil scheme at a time.
      </p>
    </div>

    {/* History of Demonology Section */}
    <div className="mb-10">
      <h3 className="text-[22px] sm:text-[26px] font-semibold mb-3">
        The History of Demonology
      </h3>
      <p className="text-[16px] leading-relaxed">
        So, demonology – the study of demons, right? It sounds a little spooky, but it’s actually really fascinating. 
        The word itself comes from the Greek daimon (spirit) and logos (study), which means it’s basically the science of bad spirits. 
        Ancient civilizations like the Egyptians and Mesopotamians had their own versions of demons, often seeing them as powerful 
        and usually not-so-friendly beings who could mess with your fate.
      </p>
      <p className="text-[16px] mt-4 leading-relaxed">
        Fast forward to medieval times when things got really dramatic. In the good old days of Christianity, demons were all about causing 
        chaos, possession, and turning people away from the light. The Malleus Maleficarum—a bestseller in 1487—was pretty much a guide to identifying 
        witches and demons, which led to some intense times. And of course, every culture had its own demon stories: the fallen angels in the Bible, 
        the creepy creatures we now see in movies. Demonology has been stirring the pot for centuries, and it’s not going anywhere anytime soon!
      </p>
    </div>

    {/* Types of Demons Across Cultures Section */}
    <div className="mb-10">
      <h2 className="text-center text-[28px] sm:text-[32px] font-bold mb-4">
        Types of Demons Across Cultures
      </h2>
      <p className="text-[16px] leading-relaxed mb-4">
        Different cultures have their own interpretations of demons, each contributing unique traits and characteristics to the mythos. Here are some examples:
      </p>

      <ul className="pl-6 text-[16px] space-y-3 list-none">
  <li>
    <span className="inline-block mr-2">⚔️</span>
    <strong>Greek & Roman:</strong> <span className="text-[#6c757d]">Keres – Spirits of violent death, drawn to disaster and battlefield chaos.</span>
  </li>
  <li>
    <span className="inline-block mr-2">🔥</span>
    <strong>Hinduism:</strong> <span className="text-[#6c757d]">Asuras – Powerful beings who clash with gods, representing turmoil and ambition.</span>
  </li>
  <li>
    <span className="inline-block mr-2">👹</span>
    <strong>Japan:</strong> <span className="text-[#6c757d]">Oni – Fierce, horned demons known for mischief, wrath, and supernatural strength.</span>
  </li>
  <li>
    <span className="inline-block mr-2">😈</span>
    <strong>Christianity:</strong> <span className="text-[#6c757d]">Fallen Angels – Banished beings allied with Satan, spreading corruption and sin.</span>
  </li>
  <li>
    <span className="inline-block mr-2">🌪️</span>
    <strong>Islamic:</strong> <span className="text-[#6c757d]">Jinn – Shapeshifting spirits of smokeless fire, capable of good, evil, or mischief.</span>
  </li>
  <li>
    <span className="inline-block mr-2">👻</span>
    <strong>Mexican Folklore:</strong> <span className="text-[#6c757d]">La Llorona – The weeping ghost of a mother, forever searching for her lost children.</span>
  </li>
</ul>

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
      When it comes to naming a demon, you need to pick something cool-sounding. 
      Something that reflects their personality, powers, and origins. Here’s how different cultures and stories usually go about it:
    </p>
  </div>

  {/* Naming Methods */}
  <div className="py-[20px]">
    <div className="flex flex-col gap-6">
      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Infernal Roots</h3>
        <p className="text-[16px]">
         Many demon names come from ancient languages, often linked to hellish realms or evil forces. These names can sound harsh, sharp, or otherworldly, like Beelzebub or Lucifer.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Symbolic Meanings</h3>
        <p className="text-[16px]">
         Some demons are named based on their roles or powers. For example, Asmodeus comes from the Hebrew word for "wrath" or "anger," which reflects his fiery nature.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Mythological Influence</h3>
        <p className="text-[16px]">
         Many names are inspired by mythologies. The names of demons in Greek, Roman, or Norse legends often have roots in ancient tales that give them meaning.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Descriptive Names</h3>
        <p className="text-[16px]">
         Sometimes demons are named after what they do. Think of Astaroth, which is often associated with seduction and trickery.
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#e0e0e0]">
        <h3 className="text-[20px] font-semibold mb-2">Cultural Twist</h3>
        <p className="text-[16px]">
         Depends on the region or culture. Demons may be given names that reflect local folklore, like Jinn in Arabic culture, which means "hidden spirit."
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
  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#ebeaea] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Lucifer</h3>
    <p className="text-[16px]">
     Perhaps the most famous fallen angel, Lucifer symbolizes rebellion and pride. Once a high-ranking angel, he defied God and was cast out of Heaven, 
     becoming the ruler of Hell in many religious traditions. His name has come to represent ultimate evil, temptation, and defiance.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#ebeaea] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Beelzebub</h3>
    <p className="text-[16px]">
     Often referred to as the “Lord of the Flies,” Beelzebub is another powerful demon from Christian and Jewish demonology. 
     He is sometimes seen as one of the princes of Hell, associated with gluttony and corruption. In some traditions, he is a high-ranking servant of Satan.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#ebeaea] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Asmodeus</h3>
    <p className="text-[16px]">
     In Jewish lore, Asmodeus is the demon of lust, greed, and wrath. He’s often depicted as a powerful demon who corrupts people’s desires and passions. 
     He also plays a significant role in the Book of Tobit, where he is responsible for the death of seven husbands.
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#ebeaea] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Lilith</h3>
    <p className="text-[16px]">
     Known as Adam’s first wife in Jewish and later Christian folklore, Lilith is often portrayed as a demon who rejected Adam and sought power for herself. 
     Cast out of Eden, she is associated with night creatures and is often seen as a symbol of feminine rebellion and independence.
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#ebeaea] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Astaroth</h3>
    <p className="text-[16px]">
     A grand duke of Hell in Christian demonology, Astaroth is known for his intelligence and manipulative abilities. 
     He is often depicted as a demon who tempts individuals to forsake their faith and indulge in evil acts. His name has ties to ancient gods, including the Phoenician goddess Ashtoreth.
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#ebeaea] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Mammon</h3>
    <p className="text-[16px]">
     The demon of greed and material wealth, Mammon is frequently mentioned in Christian theology and literature as a symbol of avarice. 
     His name is often used to represent the worship of money and possessions over spiritual well-being.
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-[#ebeaea] w-full sm:w-[48%] md:w-[30%]">
    <h3 className="text-[20px] font-semibold mb-2">Baphomet</h3>
    <p className="text-[16px]">
     A symbol often associated with the occult and Satanism, Baphomet is depicted as a goat-headed figure with both male and female traits. 
     Historically, Baphomet’s name has been linked to both the Templars and later modern occult practices.
    </p>
  </div>
</div>



    {/* Demon Names in Pop Culture */}
   <div className="py-[40px] text-[#343a40]">
  <h2 className="text-[28px] font-semibold text-center">
    Demon Names in Pop Culture
  </h2>

  <div className="space-y-6">

    {/* Entry 1 */}
    <div className="bg-[#f8f9fa] hover:bg-[#e9ecef] transition-all duration-300 ease-in-out p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02]">
      <h3 className="text-[20px] font-bold mb-2">😈 Pazuzu – <span className="italic">The Exorcist (1973)</span></h3>
      <p className="text-[16px] leading-relaxed">
        One of the most iconic demons in cinema, <strong>Pazuzu</strong> possesses Regan MacNeil in <em>The Exorcist</em>.
        Originating from Mesopotamian mythology, Pazuzu brings chaos, sickness, and sheer terror—becoming the face of demonic possession on screen.
      </p>
    </div>

    {/* Entry 2 */}
    <div className="bg-[#f8f9fa] hover:bg-[#e9ecef] transition-all duration-300 ease-in-out p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02]">
      <h3 className="text-[20px] font-bold mb-2">🔥 Azazel – <span className="italic">Supernatural (2005–2020)</span></h3>
      <p className="text-[16px] leading-relaxed">
        A powerful, manipulative demon with yellow eyes and a haunting backstory. <strong>Azazel</strong> drives much of the plot in <em>Supernatural</em>,
        crafting demonic armies and altering human destiny—an unforgettable antagonist.
      </p>
    </div>

    {/* Entry 3 */}
    <div className="bg-[#f8f9fa] hover:bg-[#e9ecef] transition-all duration-300 ease-in-out p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02]">
      <h3 className="text-[20px] font-bold mb-2">👁️ Valak – <span className="italic">The Conjuring Universe (2013)</span></h3>
      <p className="text-[16px] leading-relaxed">
        Dressed as a haunting nun, <strong>Valak</strong> brings nightmares to life in <em>The Conjuring</em> films.
        With its eerie smile and sinister presence, Valak is now one of horror’s most recognized demon designs.
      </p>
    </div>

    {/* Entry 4 */}
    <div className="bg-[#f8f9fa] hover:bg-[#e9ecef] transition-all duration-300 ease-in-out p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02]">
      <h3 className="text-[20px] font-bold mb-2">💀 Cyberdemon – <span className="italic">Doom (1993)</span></h3>
      <p className="text-[16px] leading-relaxed">
        Straight from hell with rocket launchers for arms, the <strong>Cyberdemon</strong> is a symbol of pure evil in the <em>Doom</em> universe.
        A test of skill and fear in FPS history—this demon is brutality incarnate.
      </p>
    </div>

    {/* Entry 5 */}
    <div className="bg-[#f8f9fa] hover:bg-[#e9ecef] transition-all duration-300 ease-in-out p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02]">
      <h3 className="text-[20px] font-bold mb-2">👹 Hellboy – <span className="italic">Hellboy Comics & Films</span></h3>
      <p className="text-[16px] leading-relaxed">
        A demon raised to be good? <strong>Hellboy</strong> flips the narrative. With his stone hand, red skin, and dry wit,
        he battles evil instead of causing it—giving demons a whole new dimension in pop storytelling.
      </p>
    </div>

    {/* Entry 6 */}
    <div className="bg-[#f8f9fa] hover:bg-[#e9ecef] transition-all duration-300 ease-in-out p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02]">
      <h3 className="text-[20px] font-bold mb-2">🧜‍♂️ The Demon – <span className="italic">Constantine (2005)</span></h3>
      <p className="text-[16px] leading-relaxed">
        In <em>Constantine</em>, demons don’t always look the part. One appears as a hybrid of fish and man,
        reminding us that demons in pop culture can be disturbing in fresh, unexpected forms.
      </p>
    </div>

  </div>
</div>
  </div>

<div className="w-full py-[50px]">
  <div className="w-[90%] max-w-[1200px] mx-auto text-[#343a40]">
    <h2 className="text-[28px] font-semibold mb-10 text-center">
      Demon Names in Literature
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Card 1: Satan */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#f1f3f5]">
        <h3 className="text-[20px] font-bold mb-2">😈 Satan</h3>
        <p className="text-[14px] italic mb-1">
          From <strong>Paradise Lost</strong> by John Milton
        </p>
        <p className="text-[16px]">
          A tragic yet rebellious figure, Satan challenges divine authority and explores themes of pride, free will, and justice. Milton’s Satan is as philosophical as he is powerful.
        </p>
      </div>

      {/* Card 2: Lucifer */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#f1f3f5]">
        <h3 className="text-[20px] font-bold mb-2">🧊 Lucifer</h3>
        <p className="text-[14px] italic mb-1">
          From <strong>The Divine Comedy</strong> by Dante Alighieri
        </p>
        <p className="text-[16px]">
          Frozen at Hell’s core, Dante’s Lucifer represents betrayal and despair. His silent suffering is one of literature’s most chilling symbols of evil and eternal punishment.
        </p>
      </div>

      {/* Card 3: Screwtape */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#f1f3f5]">
        <h3 className="text-[20px] font-bold mb-2">✉️ Screwtape</h3>
        <p className="text-[14px] italic mb-1">
          From <strong>The Screwtape Letters</strong> by C.S. Lewis
        </p>
        <p className="text-[16px]">
          A witty, bureaucratic demon giving advice on corruption. Screwtape exposes the subtlety of temptation through satire, making readers think deeply about morality.
        </p>
      </div>

      {/* Card 4: Symbolic Demon */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#f1f3f5]">
        <h3 className="text-[20px] font-bold mb-2">🧠 The Demon (Symbolic)</h3>
        <p className="text-[14px] italic mb-1">
          From <strong>The Brothers Karamazov</strong> by Fyodor Dostoevsky
        </p>
        <p className="text-[16px]">
          More metaphor than monster, Dostoevsky’s demon sparks philosophical crises, haunting the characters with doubt, guilt, and the burden of human conscience.
        </p>
      </div>

      {/* Card 5: Mephistopheles */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#f1f3f5]">
        <h3 className="text-[20px] font-bold mb-2">📜 Mephistopheles</h3>
        <p className="text-[14px] italic mb-1">
          From <strong>Faust</strong> by Johann Wolfgang von Goethe
        </p>
        <p className="text-[16px]">
          A master of temptation, Mephistopheles offers Faust knowledge for his soul. This demon embodies the tension between enlightenment, desire, and damnation.
        </p>
      </div>

      {/* Card 6: The Monk Demon */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#f1f3f5]">
        <h3 className="text-[20px] font-bold mb-2">🕯️ The Demon</h3>
        <p className="text-[14px] italic mb-1">
          From <strong>The Monk</strong> by Matthew Lewis
        </p>
        <p className="text-[16px]">
          Seductive and dark, this demon leads a pious monk down a path of lust, violence, and doom. A classic Gothic warning against unchecked desires and moral weakness.
        </p>
      </div>

    </div>
  </div>
</div>
</div>

<div className="w-full bg-white py-[50px] text-[#343a40]">
  <div className="w-[90%] max-w-[1100px] mx-auto">
    <h2 className="text-[28px] font-semibold text-center mb-10">
      Psychological Impact of Demon Names
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* LEFT BLOCK: Powerful Names */}
      <div className="bg-[#f8f9fa] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-[20px] font-bold mb-2">😈 Names That Command Power</h3>
        <p className="text-[16px] leading-relaxed">
          Demon names like <strong>Lucifer</strong> or <strong>Beelzebub</strong> evoke immediate authority and fear. They make demons feel larger than life—imposing, unforgettable, and emotionally charged. Such names don’t just identify the character—they brand them as forces that dominate the narrative and the audience’s mind.
        </p>
      </div>

      {/* RIGHT BLOCK: Unique + Fresh */}
      <div className="bg-[#f8f9fa] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-[20px] font-bold mb-2">🧠 Original Names Spark Curiosity</h3>
        <p className="text-[16px] leading-relaxed">
          Unique names like <strong>Azazel</strong> or <strong>Vexira</strong> leave a lasting impression. They feel fresh, mysterious, and creative. A distinctive name helps your demon stand out from cliché villains—making them more engaging, complex, and memorable in any story or game.
        </p>
      </div>

      {/* LEFT BLOCK: Names With Lore */}
      <div className="bg-[#f8f9fa] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-[20px] font-bold mb-2">📚 Rooted in Lore and Myth</h3>
        <p className="text-[16px] leading-relaxed">
          Names like <strong>Asmodeus</strong> or <strong>Lilith</strong> carry weight from mythology, religion, and ancient legends. This depth adds richness to the demon’s backstory, making them feel more integrated into the world’s lore. A name with meaning builds narrative strength.
        </p>
      </div>

      {/* RIGHT BLOCK: Psychological Branding */}
      <div className="bg-[#f8f9fa] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-[20px] font-bold mb-2">🧩 Identity Beyond the Name</h3>
        <p className="text-[16px] leading-relaxed">
          A well-chosen demon name isn't just memorable—it shapes how we perceive the character’s purpose and emotion. Whether invoking dread, seduction, or rebellion, the name becomes a psychological tool to influence how readers or players connect with your character.
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
           <Link href="/contact-us">
  <button className="bg-white text-black text-[20px] px-[20px] py-[16px] rounded-[10px] font-semibold">
    Request
  </button>
</Link>
          </div>
        </motion.div>
      </div>
      <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
      <Footer />
    </motion.div>
  );
};

export default DemonNameGenerator;

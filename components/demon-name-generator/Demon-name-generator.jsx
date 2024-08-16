"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
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
    name: "Tabaxi Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Tiefling Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Goblin Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "ORC Name Generator",
    pic: "/demonpic.jpg",
    link: "",
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
const Q1 = "What is a demon name generator?"
const A1 = "Our Demon Name Generator is an online tool designed to create unique and creative names inspired by mythological characters and fantasy elements. It serves as a valuable resource for creative writing, role-playing games, and other imaginative projects."
const Q2 = "How does a demon name generator work?"
const A2 = "Our tool uses advanced algorithms to combine various linguistic elements, prefixes, and suffixes to produce names with a demonic or otherworldly feel. It can also incorporate user inputs, such as themes and specific characteristics, to tailor the names to your needs."
const Q3 = "Does the demon name generator produce unique names?"
const A3 = "Yes, our generator is designed to create unique and original names. It utilizes a comprehensive database and sophisticated algorithms to ensure the names are distinct and fitting for your creative projects."
const Q4 = "Why would I use this online demon name generator?"
const A4 = "Our tool is ideal for writers needing distinctive character names, game developers creating unique NPC names, and tabletop gamers designing new characters. It is also perfect for anyone interested in generating captivating names for various creative purposes."
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
            <p className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
              Badass Demon Name Generator
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
            <p className="text-center text-[#343a40]">Types of Demons</p>
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
            <p className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
              About Us
            </p>
            <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
            Our Demon Name Generator offers a simple solution for finding powerful names for your creative projects. 
            If you’re crafting a fantasy story or searching for a unique gaming username, this tool helps you find the perfect fit. 
            It is specially designed to provide names that resonate with your vision and set the right tone for your work.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            The tool generates a variety of names that inspire imagination. 
            You can easily explore a list of options that align with your creative needs. 
            The process is straightforward and requires only a few details to produce names that capture the essence of your desired alter ego.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            This generator is intuitive, free, and accessible to all users. 
            You can start creating names that elevate your projects without any hassle. 
            Unlock the power of names today and see how they can enhance your creative journey.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
            How to use Demone Name Generator?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Let’s show you how to use our online demon name generator to follow some simple steps.
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <p className="sm:text-[28px] text-[20px] font-semibold">
              Step 1 - Access the Generator
              </p>
              <p>
              Visit the official website of this tool where the demon name generator is found. Access the tool from there.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p className="sm:text-[28px] text-[20px] font-semibold">
              Step 2 - Generate Names
              </p>
              <p>
              Once on the tool's page, look for the input fields or options to customize your search. 
              Some tools allow you to specify preferences like gender.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <p className="sm:text-[28px] text-[20px] font-semibold ">
              Step 3 - Get Your Names
              </p>
              <p>
              Click on the <b> "Generate"</b> button or similar action to see the generated demon names. 
              Browse through the list until you find a name that fits your needs or preferences.
              </p>
              <p className="">
                <b>Remember</b>, these tools are often used for creative
                writing, gaming, or entertainment purposes where unique and
                fictional names are desired..
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="motherdragon.jpg"
              alt=""
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="dragon.png"
              alt=""
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
          Related to Demon-Name-Generator
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
          Why Use Our Online Demon Name Generator?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Generate unique names efficiently with our Demon Name Generator. 
          Begin crafting distinctive names for your projects now. 
          Below, we detail the benefits of our tool that enhance its value for your needs.          
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Enhanced Functionality
            </p>
            <p>
            Our Demon Name Generator is engineered to deliver top-notch results for your creative needs. 
            Whether you're writing a story or designing a game, the tool provides unique and evocative names that add depth to your characters. 
            It reliably produces names that capture the dark and mysterious essence you desire, making your projects stand out.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Intuitive Interface
            </p>
            <p>
            The tool features a user-friendly interface that simplifies the name-generation process. 
            You only need to enter your desired characteristics or name style, and the generator produces a list of names that match your preferences. 
            The straightforward design ensures a smooth experience, allowing you to focus on creativity without getting bogged down by complexity.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Reliable Results
            </p>
            <p>
            You can trust our tool to consistently deliver names that align with your creative vision. 
            The generator is designed to offer dependable outcomes, ensuring that each name is both unique and fitting for your needs. 
            This reliability makes it an essential resource for anyone seeking to create memorable characters or enhance their storytelling.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Free Access
            </p>
            <p>
            Our Demon Name Generator is available to everyone at no cost. Now, you can easily access the tool anytime, making it an easily accessible resource for your creative projects. 
            The free access ensures that you can explore endless name possibilities without any financial commitment.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Customization Options
            </p>
            <p>
            We offer extensive customization features to help you craft the perfect name. 
            You can adjust the category, difficulty level, and other characteristics to fit your specific needs. 
            This flexibility allows you to generate names that are not only unique but also perfectly suited to your creative requirements.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Secure and Private
            </p>
            <p>
            Your privacy is our priority. Our tool is equipped with robust security measures to protect your data. 
            You can use this online Demon Name Generator with confidence, knowing that your information is secure and confidential. 
            This focus on security ensures a safe and trustworthy experience.
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

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Black Wraith", detail: "A feared pirate ship, shrouded in darkness.", status: false, type: "Classic", theme: "Pirate" },
    { name: "Scarlet Corsair", detail: "A red-sailed vessel known for its swift raids.", status: false, type: "Classic", theme: "Pirate" },
    { name: "The Raven’s Fang", detail: "A grim ship with a raven-shaped figurehead.", status: false, type: "Classic", theme: "Pirate" },
    { name: "Iron Tide", detail: "A sturdy ship with ironclad defenses.", status: false, type: "Classic", theme: "Pirate" },
    { name: "Stormbreaker", detail: "A mighty ship that can cut through the fiercest storms.", status: false, type: "Classic", theme: "Pirate" },
    { name: "The Bloody Sabre", detail: "A notorious pirate ship feared across the seas.", status: false, type: "Classic", theme: "Pirate" },
    { name: "Sea Reaver", detail: "A fast, deadly pirate ship that strikes quickly.", status: false, type: "Classic", theme: "Pirate" },
    { name: "The Crimson Plunder", detail: "A blood-red ship known for its ruthless plundering.", status: false, type: "Classic", theme: "Pirate" },
    { name: "The Black Marlin", detail: "A stealthy vessel that slips through the water unnoticed.", status: false, type: "Classic", theme: "Pirate" },
    { name: "Ghost of the Sea", detail: "An eerie ship that haunts the waters, rumored to be cursed.", status: false, type: "Classic", theme: "Pirate" }, 
    { name: "Kraken's Wrath", detail: "A monstrous ship, said to be powered by the Kraken.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "The Leviathan’s Grasp", detail: "A massive ship with claws said to be from the Leviathan.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "Serpent’s Shadow", detail: "A stealthy ship that moves through the water like a serpent.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "The Siren’s Lament", detail: "A ship that lures sailors to their doom with eerie song.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "Poseidon’s Curse", detail: "A cursed ship believed to be blessed by the sea god himself.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "The Phantom Tide", detail: "A ghostly ship, forever lost in the tides of time.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "The Abyssal Reaver", detail: "A feared ship that emerges from the depths of the abyss.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "Trident’s Bane", detail: "A ship said to have defeated Poseidon’s trident in battle.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "Doom of the Deep", detail: "A ship that roams the ocean, bringing doom to all it encounters.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "Maelstrom’s Fury", detail: "A ship capable of controlling the fury of the ocean’s storms.", status: false, type: "Mythical", theme: "Pirate" },
    { name: "Cyber Corsair", detail: "A high-tech pirate vessel with cybernetic enhancements.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "The Iron Horizon", detail: "A futuristic pirate ship with advanced iron plating.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "Neon Buccaneer", detail: "A pirate ship that glows with neon lights, striking fear into its enemies.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "The Digital Plunder", detail: "A technologically advanced pirate ship that hacks its enemies.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "Storm Pulse", detail: "A high-speed pirate ship designed to outrun any storm.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "Quantum Raider", detail: "A ship capable of raiding across multiple dimensions.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "The Crimson Byte", detail: "A deadly ship that uses digital weaponry to cripple its foes.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "Plasma Predator", detail: "A high-tech predator ship equipped with plasma weaponry.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "Echo of the Expanse", detail: "A ship that travels the vast expanses of space, raiding on the fringes of civilization.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "The Steel Specter", detail: "A ship made of steel and shadow, appearing and disappearing at will.", status: false, type: "Futuristic", theme: "Pirate" },
    { name: "Stellar Voyager", detail: "A classic spacecraft designed for interstellar exploration.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "Celestial Spear", detail: "A spacecraft with a sharp design, built for fast travel through the stars.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "The Astral Drift", detail: "A vessel that drifts silently through the vastness of space.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "Nova Seeker", detail: "A spacecraft designed to seek out novas and cosmic anomalies.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "Starwind", detail: "A sleek craft that harnesses the power of stellar winds for propulsion.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "Eclipse Chaser", detail: "A ship that follows the path of solar eclipses across the galaxy.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "The Cosmic Serpent", detail: "A long, winding spacecraft that coils its way through the cosmos.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "Void Runner", detail: "A ship designed to race through the void of space at unimaginable speeds.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "The Solar Whisper", detail: "A quiet ship that moves across the solar system with ease.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "The Andromeda’s Light", detail: "A ship that shines brightly, representing hope for those traveling to Andromeda.", status: false, type: "Classic", theme: "Spacecraft" },
      { name: "Nebula’s Wrath", detail: "A mythical spacecraft known for its connection to the nebulas of space.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "The Galactic Phoenix", detail: "A mythical ship reborn from the ashes of a dying star.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "Chrono Serpent", detail: "A vessel that can bend time and space with ease.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "Aether’s Embrace", detail: "A ship that exists between dimensions, held by the power of Aether.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "Lunar Tempest", detail: "A ship that rides the storms on the moon, unpredictable and dangerous.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "The Celestial Leviathan", detail: "A massive ship said to be born from the very fabric of space.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "Starborn Wyrm", detail: "A mythical, serpent-like ship born from the stars themselves.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "Aurora’s Sentinel", detail: "A ship that watches over the Aurora Borealis, a guardian of light.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "The Comet’s Fang", detail: "A spacecraft that leaves a trail of light, like a comet’s fiery tail.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "Omen of the Void", detail: "A ship that is said to portend the arrival of dark cosmic forces.", status: false, type: "Mythical", theme: "Spacecraft" },
      { name: "Neo Horizon", detail: "A futuristic spacecraft designed to explore new horizons in space.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Quantum Wraith", detail: "A ship capable of using quantum mechanics to phase through solid objects.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Photon Lance", detail: "A high-tech spacecraft equipped with a photon-based weapon system.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "The Nexus Reaver", detail: "A ship that raids across the nexus of multiple galaxies.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Plasma Phantom", detail: "A spacecraft that uses plasma energy to phase in and out of reality.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Hypernova Storm", detail: "A ship that rides the chaos of a hypernova, harnessing its energy.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Echo of Eternity", detail: "A ship that has existed for millennia, its legacy echoing across time.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "The Vortex Harbinger", detail: "A futuristic spacecraft capable of creating wormholes to traverse space.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Void Pulse", detail: "A spacecraft that manipulates void energy to travel instantaneously.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Darkstar Echelon", detail: "A vessel designed to fight in the dark reaches of the universe.", status: false, type: "Futuristic", theme: "Spacecraft" },
      { name: "Silverwind", detail: "A majestic ship that sails through both sky and sea.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "Moonlit Gale", detail: "A vessel powered by the winds under the moon's glow.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "The Crystal Maiden", detail: "A beautiful ship made entirely of enchanted crystal.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "Emerald Tide", detail: "A ship that flows through water like the sea itself, with a green glow.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "The Sapphire Whisper", detail: "A ship that sails silently, its hull shimmering in sapphire hues.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "Sea of Starlight", detail: "A ship that sails across the seas under the light of distant stars.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "Dragon’s Breath", detail: "A fiery ship, said to be powered by a dragon’s breath.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "The Whispering Wood", detail: "A ship built from the enchanted woods of ancient forests.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "The Golden Arrow", detail: "A swift ship with a golden glow, sharp as an arrow.", status: false, type: "Classic", theme: "Fantasy" },
      { name: "The Glimmering Dawn", detail: "A ship that rises with the dawn, its sails glowing with the first light.", status: false, type: "Classic", theme: "Fantasy" }, 
      { name: "Wyvern’s Wrath", detail: "A ship said to be imbued with the power of a wyvern’s rage.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "The Arcane Voyager", detail: "A vessel that traverses the magical currents of the world.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "The Fey Queen’s Grace", detail: "A ship blessed by the Fey Queen herself, known for its elegance.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "Griffon’s Fury", detail: "A powerful ship said to be imbued with the griffon’s fierce spirit.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "The Enchanted Tempest", detail: "A ship that can summon storms and navigate through them.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "Elara’s Flame", detail: "A ship that burns with an eternal flame, guided by Elara’s magic.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "The Dreamweaver", detail: "A vessel that can traverse the dream realms and awaken forgotten memories.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "The Mystic Leviathan", detail: "A massive ship that roams the seas, commanded by ancient magic.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "Phoenix’s Wing", detail: "A ship reborn from the ashes of a phoenix, with wings that light the sky.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "The Serpent’s Song", detail: "A ship whose haunting song can summon the sea serpents of legend.", status: false, type: "Mythical", theme: "Fantasy" },
      { name: "Techno Wizard", detail: "A ship powered by advanced technology and magical algorithms.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "Runic Voyager", detail: "A ship adorned with runes that enhance its power and speed.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "Chrono Gale", detail: "A ship capable of manipulating time itself, riding the gales of the future.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "The Arcane Nexus", detail: "A ship that acts as a conduit between different planes of existence.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "Astral Sorceress", detail: "A ship that harnesses the power of the stars for magical and technological advancements.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "Warped Whisper", detail: "A ship that whispers through the fabric of space and time, warping reality as it travels.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "Mythic Circuit", detail: "A ship designed with a mix of mythical energy and cutting-edge circuits.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "The Neon Enchantress", detail: "A ship that glows with neon lights and is driven by enchantment.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "Cyber Mage", detail: "A vessel where magic and advanced technology combine seamlessly.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "The Etherborn Edge", detail: "A ship that cuts through the ether with speed and precision, from a distant future.", status: false, type: "Futuristic", theme: "Fantasy" },
      { name: "Ocean Breeze", detail: "A serene ship that glides gracefully across the ocean.", status: false, type: "Classic", theme: "Modern" },
      { name: "Titan’s Pride", detail: "A mighty ship built to conquer any storm, symbolizing strength and power.", status: false, type: "Classic", theme: "Modern" },
      { name: "The Atlantic Sovereign", detail: "A grand ship that rules the vast Atlantic waters.", status: false, type: "Classic", theme: "Modern" },
      { name: "Harbor Queen", detail: "A majestic vessel known for its elegance, dominating every harbor.", status: false, type: "Classic", theme: "Modern" },
      { name: "Pacific Dawn", detail: "A ship that ushers in the first light over the Pacific, symbolizing hope.", status: false, type: "Classic", theme: "Modern" },
      { name: "The Regal Tide", detail: "A ship of royalty, sailing through waves with grace and pride.", status: false, type: "Classic", theme: "Modern" },
      { name: "Stormwatcher", detail: "A ship that can withstand any storm and navigate through chaos.", status: false, type: "Classic", theme: "Modern" },
      { name: "Seafarer’s Glory", detail: "A ship that celebrates the bravery of seafarers and their endless voyages.", status: false, type: "Classic", theme: "Modern" },
      { name: "The Blue Monarch", detail: "A regal ship that reigns supreme on the open seas.", status: false, type: "Classic", theme: "Modern" },
      { name: "The Horizon's Edge", detail: "A ship that ventures to the ends of the world, beyond the horizon.", status: false, type: "Classic", theme: "Modern" },
      { name: "Poseidon’s Whisper", detail: "A ship blessed by the god of the sea, said to be guided by his whispers.", status: false, type: "Mythical", theme: "Modern" },
      { name: "The Leviathan’s Grace", detail: "A ship that rides the waves with the grace of the mythical leviathan.", status: false, type: "Mythical", theme: "Modern" },
      { name: "The Trident’s Herald", detail: "A ship that carries the symbol of Poseidon's trident, heralding the power of the sea.", status: false, type: "Mythical", theme: "Modern" },
      { name: "Sea Serpent’s Wrath", detail: "A ship powered by the fury of ancient sea serpents.", status: false, type: "Mythical", theme: "Modern" },
      { name: "The Ocean’s Sentinel", detail: "A ship that watches over the ocean, protecting it from invaders.", status: false, type: "Mythical", theme: "Modern" },
      { name: "Nereid’s Kiss", detail: "A gentle vessel kissed by the Nereids, the sea nymphs, carrying an aura of calm.", status: false, type: "Mythical", theme: "Modern" },
      { name: "The Kraken’s Jewel", detail: "A ship that carries the power of the Kraken, one of the ocean’s fiercest creatures.", status: false, type: "Mythical", theme: "Modern" },
      { name: "Abysswalker", detail: "A ship that traverses the deepest depths of the sea, fearless of the abyss.", status: false, type: "Mythical", theme: "Modern" },
      { name: "The Tidebreaker", detail: "A powerful ship known for its ability to control the tides of the sea.", status: false, type: "Mythical", theme: "Modern" },
      { name: "Mermaid’s Promise", detail: "A ship that is said to be blessed by the mermaids, guiding sailors safely home.", status: false, type: "Mythical", theme: "Modern" },
      { name: "Aqua Horizon", detail: "A ship that navigates both land and sea, bridging the gap between oceans and horizons.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "The Cyber Current", detail: "A ship that rides the digital waves, combining technology with the sea.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "Neptune’s Voyager", detail: "A futuristic ship designed to explore Neptune's mysterious waters and beyond.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "Hydro Pulse", detail: "A high-tech ship that moves at lightning speeds with hydro-powered energy.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "The Aqua Phantom", detail: "A stealth ship that glides through the water, almost invisible to the eye.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "Tide Reaver", detail: "A ship designed for speed and agility, capable of cutting through the strongest tides.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "Plasma Seafarer", detail: "A ship powered by plasma technology, revolutionizing ocean travel.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "Waveform Runner", detail: "A ship that rides on the crest of waves, using advanced technology to harness ocean currents.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "Solar Tidebreaker", detail: "A solar-powered ship capable of breaking through the toughest ocean tides.", status: false, type: "Futuristic", theme: "Modern" },
      { name: "Oceanic Nexus", detail: "A ship that connects the oceans of the world through advanced technologies.", status: false, type: "Futuristic", theme: "Modern" } 
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
      name: "Tiefling Name Generator",
      pic: "/female.jpg",
      link: "https://www.nameideagenerator.com/tiefling-name-generator",
  },
  {
      name: "Dragonborn Name Generator",
      pic: "/bg-dragonborn.webp",
      link: "https://www.nameideagenerator.com/dragonborn-name-generator",
  },
  {
      name: "Half Elf Name Generator",
      pic: "/half-demon.webp",
      link: "https://www.nameideagenerator.com/half-elf-name-generator",
  },
  {
      name: "Wood Elf Name Generator",
      pic: "/Wood_Elf.webp",
      link: "https://www.nameideagenerator.com/wood-elf-name-generator",
  },
  ];
  
  const ShipNameGenerator = () => {
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
  
const bgImage = "/An-ornate-ship-with-mystical-symbols.jpg"
const context = "Ship Name Generator with Meaning – Find the Perfect Name"
const Q1 = "What Makes a Ship Name Unique?"
const A1 = "A unique ship name blends creativity, meaning, and relevance to the vessel’s purpose or mission. It should stand out while evoking emotion and intrigue."
const Q2 = "Can the Generator Be Used for Spaceships or Fantasy Vessels?"
const A2 = "Yes! Our Ship Name Generator is versatile, providing names for pirate ships, modern vessels, spaceships, and even mystical fantasy ships."
const Q3 = "How Does the Name Generator Ensure Originality?"
const A3 = "Our generator uses advanced algorithms to create names that are unique and meaningful, ensuring originality with every click."
const Q4 = "Can I Customize the Names to Fit Specific Themes?"
const A4 = "Absolutely! Our generator allows you to choose from a variety of themes and ship types, giving you the flexibility to generate names that perfectly suit your project. From majestic royal ships to dark, ominous war vessels, you can customize the name generation to match your story or game’s tone."
const Q5 = "How Fast is the Ship Name Generator?"
const A5 = "The Ship Name Generator is designed to deliver results instantly. With just a click, you’ll have access to a variety of unique and meaningful names in seconds, saving you time and allowing you to focus on other aspects of your project."
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
        <a href="/ship-name-generator" className="hover:underline text-[#343a40]">Ship Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
              Ship Name Generator With Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Ship Category</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Classic">Classic Ships</option>
              <option value="Mythical">Mythical Ships</option>
              <option value="Futuristic">Futuristic Ships</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Ship Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Pirate">Pirate Ships</option>
              <option value="Spacecraft">Spacecraft Ships</option>
              <option value="Mythical">Mythical Ships</option>
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
            What Is a Ship Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            A Ship Name Generator is a tool designed to create imaginative, unique, and meaningful names for ships of all types. 
            It’s perfect for gamers, writers, and anyone looking for creative inspiration. 
            Ship names often reflect the character or mission of the vessel, making them crucial in storytelling, gaming, or even for naming real-life hobby ships.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            The Importance of Ship Names in Storytelling and Gaming
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Ship names add depth to narratives, offering more than just a title for the vessel. 
            A great ship name can evoke mystery, power, or adventure, enhancing the overall experience for readers or players.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            How Ship Names Reflect Personality and Purpose
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            The right ship name captures the essence of its journey. Is it a pirate ship meant to instill fear? A space cruiser exploring uncharted galaxies? 
            Or a noble flagship embodying honor and courage? Each name carries meaning, shaping the identity of the vessel.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Ship Name Generator
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Our Ship Name Generator is user-friendly and efficient, generating unique names in just a few clicks. Here’s how to get started:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose <b> Ship Type </b>(Pirate, Spacecraft, Fantasy, or Modern)
              </h3>
              <p>
              Decide what kind of ship you want to name. Is it a legendary pirate ship, a sleek space cruiser, or a modern yacht?
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select <b> Theme </b>(Classic, Mythical, or Futuristic)
              </h3>
              <p>
              Pick a theme that matches the ship’s style or purpose. Do you want a name steeped in history, inspired by mythology, or one that suggests a futuristic adventure?
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b>to Get a Unique Name
              </h3>
              <p>
              Click the <b> “Generate”</b> button and instantly receive a list of creative ship names. Each name comes with a meaning that aligns with your chosen theme.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Explore the Name’s Meaning and History
              </h3>
              <p>
              Review the names and their meanings to find the perfect match. Each name tells a story, adding depth to your creation.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="Classic-Tall-Ship.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="MythicalShip.webp"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/the-flying-ship.webp")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Ship Name Generator
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
          <b> Features of Our Ship Name Generator </b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Customizable Name Options for Various Themes
            </h3>
            <p>
            Choose from different ship types and themes to generate names that suit any scenario, whether it’s for fantasy, sci-fi, historical, or real-world applications. 
            Tailor the generator to your specific needs, whether you're building a spaceship, a pirate vessel, or a majestic royal ship.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Perfect for Gaming, Writing, or Creative Projects
            </h3>
            <p>
            Whether you’re crafting a novel, developing a game, designing a tabletop RPG, or simply need a unique name for a personal project, our generator offers endless inspiration. 
            With the ability to generate names that fit various genres, it’s perfect for authors, game developers, and hobbyists alike.           
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Name Generation with Deep Meanings
            </h3>
            <p>
            With a single click, generate names that come with detailed meanings, enhancing the richness of your storytelling or gameplay. 
            The generated names are designed to match the world you’re creating, adding depth and immersion.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Endless Combinations for Unique Results
            </h3>
            <p>
            Our generator offers a vast range of name combinations, ensuring you get a truly unique name every time. 
            Whether you want a regal, heroic name or a dark and mysterious one, our tool helps you find the perfect fit
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            User-Friendly Interface for Quick Results
            </h3>
            <p>
            Easily navigate the tool and get the results you need in seconds. 
            No need to spend hours brainstorming; our ship name generator helps you generate the perfect name effortlessly.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Inspiration for Ship Naming Conventions
            </h3>
            <p>
            Along with random name generation, our tool also offers insights into popular naming conventions for ships in different genres, cultures, and eras. 
            Use these suggestions to inspire your own creative twists!
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
            Types of Ship Names You Can Generate
            </h2>
            <hr />
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Pirate Ship Names – Bold and Fearsome Examples
            </h3>
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Names like <b> <i> Black Tempest</i></b> or <b> <i> Crimson Dagger </i></b> conjure images of high-seas adventure and danger.
            </p>
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Spacecraft Names – Futuristic and Adventurous Options
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Names such as <b> <i>Starbreaker</i></b> or <b> <i>Nebula Voyager </i></b>evoke exploration of the cosmos and futuristic innovation.
            </p>
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Fantasy Ship Names – Mystical and Enchanting Names
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Choose names like<b> <i> Ethereal Tide</i></b> or <b> <i>Shadowmist</i></b> for magical and mythical adventures.
            </p>
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Modern Ship Names – Sleek and Powerful Designs
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Names such as <b> <i>Oceanic Majesty </i></b>or <b> <i>Titan’s Grace </i></b>reflect modern elegance and strength.
            </p>
            <hr />
            <br />
            <br />
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Where Can You Use the Ship Name Generator?
            </h2>
            <hr />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            You can use our Ship Name Generator for:
            <ul><br />
              <li><b>- Role-Playing Games (RPGs): </b>Create unique names for ships in your game worlds.</li><br />
              <li><b>- Novels and Stories:</b> Find the perfect name for vessels in your fiction.</li><br />
              <li><b>- Game Design and World-Building:</b> Use the generator for naming ships in your video games. </li><br />
              <li><b>- Personal Projects: </b>Name hobby vessels, model ships, or even fantasy cruise lines.</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[80vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Ship Names in History and Fiction
          </h2><br />
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Legendary Real-Life Ship Names
              </h3>
              <p>
              <ul>
              <li><b>- HMS Victory  </b>(Commanded by Admiral Nelson in the Battle of Trafalgar)</li><br />
              <li><b>- USS Enterprise </b> (A symbol of American naval power and history)</li><br />
              <li><b>- Black Pearl </b> (The infamous pirate ship from the <b><i>Pirates of the Caribbean </i></b>series)</li><br />
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Iconic Fictional Ship Names
              </h3>
              <p>
              <ul>
              <li><b>- Millennium Falcon </b>(The beloved spaceship from <b><i> Star Wars</i></b>)</li><br />
              <li><b>- Flying Dutchman </b> (A ghostly vessel from maritime legend)</li><br />
              <li><b>- Serenity </b> (The transport ship from <b><i>Firefly</i></b>, representing freedom and adventure)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="ship-name-generator.png"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[360px] my-[20px] h-[460px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <br />
          <hr />
          <br /><br />
          <h2 className="sm:text-[32px] text-[22px] text-center sm:font-normal font-semibold">
          <b> Why Use Our Ship Name Generator?</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Get Inspired for Writing, Gaming, and Role-Playing
            </h3>
            <p>
            Whether you're crafting a novel, developing a game, or diving into a role-playing adventure, 
            our Ship Name Generator helps you find the perfect name that brings your world to life. 
            From epic spaceships to mysterious pirate vessels, the possibilities are endless.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Instantly Generate Unique, Meaningful Names
            </h3>
            <p>
            Tired of endless brainstorming sessions? With just a click, our tool generates unique, powerful names in seconds. 
            Each name comes with its own meaning, adding layers to your story, character, or game. 
            It’s the perfect way to add depth and intrigue with minimal effort.          
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Free, Easy, and Secure Name Generation
            </h3>
            <p>
            Our tool is completely free to use, with no hidden fees or sign-ups required. 
            It’s user-friendly, so you can start generating names right away. 
            Plus, we value your privacy, ensuring that all your data remains safe and secure.
            </p>
          </div>

          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Perfect for Every Project
            </h3>
            <p>
            Whether you're designing a spaceship in a sci-fi universe, naming a majestic naval ship for a historical novel, 
            or creating a pirate vessel for your tabletop game, our Ship Name Generator is versatile enough for all kinds of projects.
            </p>
          </div>
          
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Explore Countless Options with Customizable Themes
            </h3>
            <p>
            Want your ship’s name to reflect its purpose or culture? You can choose from various themes and ship types to generate names that fit your specific needs. 
            From ancient warships to futuristic space cruisers, there’s a name waiting for you!
            </p>
          </div>

          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Effortless Inspiration at Your Fingertips
            </h3>
            <p>
            No more struggling for the right name—our generator is here to spark inspiration whenever you need it. 
            With countless combinations, you’re sure to find a name that fits your vision perfectly.
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

export default ShipNameGenerator;

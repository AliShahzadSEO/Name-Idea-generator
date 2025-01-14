"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
  { name: "Zal'korrin Vaezt", detail: "A cunning strategist known for his sharp mind.", status: false, gender: "male", type: "drow" },
  { name: "Driz’thal Xunvir", detail: "A fierce warrior skilled in dual-wielding blades.", status: false, gender: "male", type: "drow" },
  { name: "Velkryn Zorath", detail: "A dark sorcerer adept in necromantic arts.", status: false, gender: "male", type: "drow" },
  { name: "Malrik Xun'dar", detail: "A steadfast guardian of ancient Drow relics.", status: false, gender: "male", type: "drow" },
  { name: "Vorlin Tlu'in", detail: "A master of stealth, moving unseen in the shadows.", status: false, gender: "male", type: "drow" },
  { name: "Zarvok Kryn’zaer", detail: "A renowned tactician and war commander.", status: false, gender: "male", type: "drow" },
  { name: "Ilthar Xil’aen", detail: "A tracker with unparalleled skills in the wilderness.", status: false, gender: "male", type: "drow" },
  { name: "Ryldar Vloriss", detail: "An expert archer known for his deadly aim.", status: false, gender: "male", type: "drow" },
  { name: "Xar'zen Vel’tor", detail: "A mage who specializes in elemental magic.", status: false, gender: "male", type: "drow" },
  { name: "Jhael’vin Orlarth", detail: "A silver-tongued diplomat among the Drow.", status: false, gender: "male", type: "drow" },
  { name: "Zak'nir Duskbane", detail: "A hunter of beasts from the depths of the Underdark.", status: false, gender: "male", type: "drow" },
  { name: "Quar'ith Zar'vrae", detail: "A poet and historian, chronicler of Drow history.", status: false, gender: "male", type: "drow" },
  { name: "Draz'zul T'lyss", detail: "A fierce duelist known for his agility and speed.", status: false, gender: "male", type: "drow" },
  { name: "Ryldar Zaer'zir", detail: "A master blacksmith forging enchanted weapons.", status: false, gender: "male", type: "drow" },
  { name: "Vornil Duskweaver", detail: "A weaver of illusions, cloaking allies in shadows.", status: false, gender: "male", type: "drow" },
  { name: "Ilzryn Kha’ven", detail: "A scholar of ancient Drow magic and lore.", status: false, gender: "male", type: "drow" },
  { name: "Mal'zar Vrae’lor", detail: "A commander of the Drow military forces.", status: false, gender: "male", type: "drow" },
  { name: "Thal'keth Dus’kar", detail: "A merciless assassin with a flawless record.", status: false, gender: "male", type: "drow" },
  { name: "Zor'val Thal’tis", detail: "A noble with mastery over political intrigue.", status: false, gender: "male", type: "drow" },
  { name: "Jarlith Zaer’korn", detail: "A fierce gladiator in the Drow fighting pits.", status: false, gender: "male", type: "drow" },
  { name: "Nym'lor T’luth", detail: "A necromancer commanding legions of the dead.", status: false, gender: "male", type: "drow" },
  { name: "Zekrin Xil'vrae", detail: "An inventor of deadly traps and mechanisms.", status: false, gender: "male", type: "drow" },
  { name: "Thraen Korr’zal", detail: "A brutal enforcer of Drow law and order.", status: false, gender: "male", type: "drow" },
  { name: "Kez'var Dus'vain", detail: "A cunning thief known for high-profile heists.", status: false, gender: "male", type: "drow" },
  { name: "Zhal'kar Vornis", detail: "A seer gifted with glimpses of the future.", status: false, gender: "male", type: "drow" },
  { name: "Vae'lynn Zaer'drin", detail: "A priestess wielding divine power with precision.", status: false, gender: "female", type: "drow" },
      { name: "Drizz’a Xun’ra", detail: "An agile and lethal assassin of the Underdark.", status: false, gender: "female", type: "drow" },
      { name: "Lilthra Vel’toriss", detail: "An enchantress who weaves potent illusions.", status: false, gender: "female", type: "drow" },
      { name: "Zalyra Duskryn", detail: "A rogue known for her mastery of silent infiltration.", status: false, gender: "female", type: "drow" },
      { name: "Ilhara Zar’kryn", detail: "A warrior adept in both sword and sorcery.", status: false, gender: "female", type: "drow" },
      { name: "Quen'lynn Xil’rae", detail: "A dark healer who manipulates life forces.", status: false, gender: "female", type: "drow" },
      { name: "Xyrith Vrae'lin", detail: "A seer renowned for prophetic visions.", status: false, gender: "female", type: "drow" },
      { name: "Zaira Kha’tor", detail: "A fierce combatant with unmatched dexterity.", status: false, gender: "female", type: "drow" },
      { name: "Shael'ra Vornlyn", detail: "A skilled alchemist crafting dangerous potions.", status: false, gender: "female", type: "drow" },
      { name: "Nymara Tlu’ar", detail: "A Drow noble famous for her tactical mind.", status: false, gender: "female", type: "drow" },
      { name: "Zaelyn Orliss", detail: "A diplomat known for brokering vital alliances.", status: false, gender: "female", type: "drow" },
      { name: "Vel'kira T'luthrin", detail: "A formidable mage specializing in shadow magic.", status: false, gender: "female", type: "drow" },
      { name: "Zhalia Dus’zar", detail: "A reclusive mystic with vast magical knowledge.", status: false, gender: "female", type: "drow" },
      { name: "Xulvrae Jhaera", detail: "An enigmatic wanderer seeking ancient secrets.", status: false, gender: "female", type: "drow" },
      { name: "Rilthra Xun’tharn", detail: "A knight of honor in the service of the Matron.", status: false, gender: "female", type: "drow" },
      { name: "Ilvrae Zor’draen", detail: "A scholarly sage versed in arcane lore.", status: false, gender: "female", type: "drow" },
      { name: "Kez'vrae Lil'zar", detail: "An artisan who crafts enchanted jewelry.", status: false, gender: "female", type: "drow" },
      { name: "Zynlith Korr’aen", detail: "A spy who gathers critical intelligence.", status: false, gender: "female", type: "drow" },
      { name: "Nymara Duskflame", detail: "A sorceress wielding both fire and shadow.", status: false, gender: "female", type: "drow" },
      { name: "Shael’lyn Velthra", detail: "A renowned singer whose voice enchants listeners.", status: false, gender: "female", type: "drow" },
      { name: "Zerik Duskstorm", detail: "A swift warrior with control over dark lightning.", status: false, gender: "male", type: "modern" },
      { name: "Malrik Shadowbane", detail: "A fierce fighter who hunts rogue sorcerers.", status: false, gender: "male", type: "modern" },
      { name: "Kaelen Nightflare", detail: "A mage specializing in shadow flames.", status: false, gender: "male", type: "modern" },
      { name: "Zyrex Velthorn", detail: "A skilled assassin with venomous precision.", status: false, gender: "male", type: "modern" },
      { name: "Drayven Zhal’ar", detail: "A master swordsman known for his agility.", status: false, gender: "male", type: "modern" },
      { name: "Korvax Duskrun", detail: "A ruthless mercenary who never misses a target.", status: false, gender: "male", type: "modern" },
      { name: "Thalric Moonshade", detail: "A nocturnal hunter with supernatural senses.", status: false, gender: "male", type: "modern" },
      { name: "Zorik Ravenflare", detail: "An archer with an affinity for dark energy.", status: false, gender: "male", type: "modern" },
      { name: "Rynax Starvenom", detail: "A poison master with deadly accuracy.", status: false, gender: "male", type: "modern" },
      { name: "Voryn Shadowstrike", detail: "A duelist who strikes from the shadows.", status: false, gender: "male", type: "modern" },
      { name: "Kaeric Dusksoul", detail: "A necromancer with control over restless spirits.", status: false, gender: "male", type: "modern" },
      { name: "Joren Shadowveil", detail: "A spy who gathers secrets under cover of night.", status: false, gender: "male", type: "modern" },
      { name: "Maldrik Venomshade", detail: "A cunning alchemist and venom expert.", status: false, gender: "male", type: "modern" },
      { name: "Zephyr Duskwind", detail: "A swift messenger known for his speed.", status: false, gender: "male", type: "modern" },
      { name: "Korin Nightrend", detail: "A soldier with a reputation for unwavering loyalty.", status: false, gender: "male", type: "modern" },
      { name: "Vornax Ashdusk", detail: "A battle mage with control over shadow fire.", status: false, gender: "male", type: "modern" },
      { name: "Talin Nightscar", detail: "A scarred warrior seeking vengeance.", status: false, gender: "male", type: "modern" },
      { name: "Ryvar Duskshade", detail: "A ranger with unmatched tracking skills.", status: false, gender: "male", type: "modern" },
      { name: "Khalor Duskwrath", detail: "A wrathful sorcerer harnessing dark energy.", status: false, gender: "male", type: "modern" },
      { name: "Xenrik Voidflare", detail: "A mysterious mage from the void.", status: false, gender: "male", type: "modern" },
      { name: "Draven Darkthorn", detail: "A cunning leader of a rogue faction.", status: false, gender: "male", type: "modern" },
      { name: "Zerion Frostshade", detail: "A cold and calculating tactician.", status: false, gender: "male", type: "modern" },
      { name: "Thalrik Voidclaw", detail: "A warrior with claws infused with void energy.", status: false, gender: "male", type: "modern" },
      { name: "Zorven Duskrain", detail: "A stoic guardian of ancient artifacts.", status: false, gender: "male", type: "modern" },
      { name: "Vornath Shadowflame", detail: "A mage wielding both shadow and fire magic.", status: false, gender: "male", type: "modern" }, 
      { name: "Vasha Nightthorn", detail: "A priestess with command over dark rituals.", status: false, gender: "female", type: "modern" },
      { name: "Nyssa Duskwraith", detail: "A ghostly assassin who leaves no trace.", status: false, gender: "female", type: "modern" },
      { name: "Zaira Starshadow", detail: "A celestial sorceress with ties to the stars.", status: false, gender: "female", type: "modern" },
      { name: "Kaelith Moonflare", detail: "A night-born mage with radiant power.", status: false, gender: "female", type: "modern" },
      { name: "Shaedra Duskveil", detail: "A healer cloaked in mystery and shadows.", status: false, gender: "female", type: "modern" },
      { name: "Lilith Shadowbane", detail: "A formidable warrior feared by her enemies.", status: false, gender: "female", type: "modern" },
      { name: "Zynra Frostnight", detail: "A cold-hearted sorceress from the north.", status: false, gender: "female", type: "modern" },
      { name: "Valora Duskrun", detail: "A swift and deadly scout.", status: false, gender: "female", type: "modern" },
      { name: "Morrigan Nightwhisper", detail: "A whisperer of secrets and ancient knowledge.", status: false, gender: "female", type: "modern" },
      { name: "Xara Voidflame", detail: "A mage harnessing the fire of the void.", status: false, gender: "female", type: "modern" },
      { name: "Zylra Duskbloom", detail: "A potion master known for rare concoctions.", status: false, gender: "female", type: "modern" },
      { name: "Nira Darkflare", detail: "A pyromancer who wields dark flames.", status: false, gender: "female", type: "modern" },
      { name: "Elvara Venomveil", detail: "An expert in poisons and antidotes.", status: false, gender: "female", type: "modern" },
      { name: "Khalira Duskmire", detail: "A swamp witch feared for her hexes.", status: false, gender: "female", type: "modern" },
      { name: "Zynith Starflare", detail: "A star-born enchantress.", status: false, gender: "female", type: "modern" },
      { name: "Aria Frostveil", detail: "A frost mage with unparalleled power.", status: false, gender: "female", type: "modern" },
      { name: "Thalryn Shadowbloom", detail: "A druid connected to the dark forests.", status: false, gender: "female", type: "modern" },
      { name: "Lilvyn Duskwind", detail: "A swift and elusive dancer in the shadows.", status: false, gender: "female", type: "modern" },
      { name: "Vorelia Nightrain", detail: "A bard with a haunting voice.", status: false, gender: "female", type: "modern" },
      { name: "Zorina Duskfire", detail: "A fiery warrior known for her courage.", status: false, gender: "female", type: "modern" },
      { name: "Saria Shadowrose", detail: "A florist whose blooms conceal poisons.", status: false, gender: "female", type: "modern" },
      { name: "Nyxen Voidthorn", detail: "A rogue with void-infused weaponry.", status: false, gender: "female", type: "modern" },
      { name: "Velora Nightveil", detail: "A mage cloaked in shadows and mystery.", status: false, gender: "female", type: "modern" },
      { name: "Kethra Ashthorn", detail: "A blacksmith forging cursed weapons.", status: false, gender: "female", type: "modern" },
      { name: "Shaelra Moonshadow", detail: "A priestess who communes with the moon.", status: false, gender: "female", type: "modern" }, 
      { name: "Xal'thar Voidspire", detail: "A dark sorcerer with control over void energies.", status: false, gender: "male", type: "Mythical" },
      { name: "Draekar Nightshard", detail: "A ruthless warrior with a heart as cold as the night.", status: false, gender: "male", type: "Mythical" },
      { name: "Velthar Darkmoon", detail: "A shadow mage who thrives under the moon's light.", status: false, gender: "male", type: "Mythical" },
      { name: "Zaeroth Shadowspire", detail: "A commander known for his strategic use of shadows.", status: false, gender: "male", type: "Mythical" },
      { name: "Zar’kelth Moonbane", detail: "A guardian who battles dark forces with moonlight power.", status: false, gender: "male", type: "Mythical" },
      { name: "Korthan Duskwrath", detail: "A vengeful knight who brings wrath with the darkness.", status: false, gender: "male", type: "Mythical" },
      { name: "Vylthorn Starbringer", detail: "A celestial mage who brings the stars to the battlefield.", status: false, gender: "male", type: "Mythical" },
      { name: "Ryn'kar Duskborn", detail: "A warrior born from the dusk, feared in battle.", status: false, gender: "male", type: "Mythical" },
      { name: "Jhoran Voidstrike", detail: "A deadly assassin who strikes from the void.", status: false, gender: "male", type: "Mythical" },
      { name: "Thalrik Abyssveil", detail: "A sorcerer who draws power from the abyss.", status: false, gender: "male", type: "Mythical" },
      { name: "Zyrex Shadowpyre", detail: "A pyromancer who bends shadows into deadly flames.", status: false, gender: "male", type: "Mythical" },
      { name: "Vorath Starchain", detail: "A celestial warrior bound by chains of stars.", status: false, gender: "male", type: "Mythical" },
      { name: "Malakar Dusksorrow", detail: "A sorrowful mage who channels the grief of the dusk.", status: false, gender: "male", type: "Mythical" },
      { name: "Xal'kor Darkflame", detail: "A dark flame wielder, known for his destructive power.", status: false, gender: "male", type: "Mythical" },
      { name: "Zarven Moonrend", detail: "A warrior who rips through his enemies with moon-forged weapons.", status: false, gender: "male", type: "Mythical" },
      { name: "Kaerith Nightvenom", detail: "A rogue who poisons his enemies with deadly shadows.", status: false, gender: "male", type: "Mythical" },
      { name: "Drakor Voidbane", detail: "A battle-hardened warrior who wields the power of the void.", status: false, gender: "male", type: "Mythical" },
      { name: "Vornath Nightflame", detail: "A fire mage who controls both night and flame.", status: false, gender: "male", type: "Mythical" },
      { name: "Ryn'zar Duskspire", detail: "A master of shadow magic and stealth.", status: false, gender: "male", type: "Mythical" },
      { name: "Korvak Abyssflare", detail: "A warrior with the strength of the abyss and fire combined.", status: false, gender: "male", type: "Mythical" },
      { name: "Thalor Voidfang", detail: "A creature of the void who wields fang-like weapons.", status: false, gender: "male", type: "Mythical" },
      { name: "Zoroth Starchaser", detail: "A celestial hunter who tracks the stars.", status: false, gender: "male", type: "Mythical" },
      { name: "Khalvor Nightgrip", detail: "A merciless warrior who grips the night like a vice.", status: false, gender: "male", type: "Mythical" },
      { name: "Ryvar Abysswhisper", detail: "A shadowy figure whose whispers drive foes mad.", status: false, gender: "male", type: "Mythical" },
      { name: "Zar'tharn Moonshadow", detail: "A stealthy warrior who hides in the shadows of the moon.", status: false, gender: "male", type: "Mythical" },
      { name: "Xyrith Shadowmire", detail: "A sorceress who commands the dark swamps.", status: false, gender: "female", type: "Mythical" },
      { name: "Vae'kira Moonshade", detail: "A shadowcaster who manipulates the light of the moon.", status: false, gender: "female", type: "Mythical" },
      { name: "Zalvrae Abyssfire", detail: "A dark mage who wields the fire from the abyss.", status: false, gender: "female", type: "Mythical" },
      { name: "Ilthara Voidwhisper", detail: "A whisperer who speaks in the language of the void.", status: false, gender: "female", type: "Mythical" },
      { name: "Shael'nira Darkpyre", detail: "A fire mage who creates destructive dark flames.", status: false, gender: "female", type: "Mythical" },
      { name: "Nymira Starwrath", detail: "A star mage who channels the wrath of celestial powers.", status: false, gender: "female", type: "Mythical" },
      { name: "Lilithra Moonthorn", detail: "A healer who draws power from moonlight and nature.", status: false, gender: "female", type: "Mythical" },
      { name: "Quen’zaer Shadowspike", detail: "A stealthy assassin who strikes from the shadows.", status: false, gender: "female", type: "Mythical" },
      { name: "Thalria Abyssborn", detail: "A sorceress born from the abyss itself.", status: false, gender: "female", type: "Mythical" },
      { name: "Velithra Darkspire", detail: "A dark mage who manipulates the spires of the void.", status: false, gender: "female", type: "Mythical" },
      { name: "Nyzara Nightveil", detail: "A warrior who wears the night as her cloak.", status: false, gender: "female", type: "Mythical" },
      { name: "Kezara Voidflare", detail: "A pyromancer who commands the flare of the void.", status: false, gender: "female", type: "Mythical" },
      { name: "Shael'vryn Starvenom", detail: "A dark enchantress who poisons her enemies with star magic.", status: false, gender: "female", type: "Mythical" },
      { name: "Xynith Moonspike", detail: "A warrior who fights with a weapon forged from moonlight.", status: false, gender: "female", type: "Mythical" },
      { name: "Morrin Nightpyre", detail: "A fiery sorceress whose magic burns in the night.", status: false, gender: "female", type: "Mythical" },
      { name: "Zaeryn Darkweave", detail: "A mystic who weaves the darkness into powerful spells.", status: false, gender: "female", type: "Mythical" },
      { name: "Zilvrae Moonborn", detail: "A mystical being born under the full moon's glow.", status: false, gender: "female", type: "Mythical" },
      { name: "Valnira Abyssfang", detail: "A warrior who wields the fangs of the abyss.", status: false, gender: "female", type: "Mythical" },
      { name: "Nira'vael Starshard", detail: "A celestial warrior who shatters her enemies with star magic.", status: false, gender: "female", type: "Mythical" },
      { name: "Lythra Shadowgrace", detail: "A graceful assassin who moves like a shadow.", status: false, gender: "female", type: "Mythical" },
      { name: "Khalira Voidthorn", detail: "A dark sorceress who wields the void itself.", status: false, gender: "female", type: "Mythical" },
      { name: "Voryn Starbane", detail: "A celestial knight whose presence strikes down darkness.", status: false, gender: "female", type: "Mythical" },
      { name: "Zelvyn Abyssrose", detail: "A mysterious mage whose beauty is matched only by her power.", status: false, gender: "female", type: "Mythical" },
      { name: "Thalria Dusksworn", detail: "A dark priestess sworn to the service of the dusk.", status: false, gender: "female", type: "Mythical" },
      { name: "Vaelryn Darkchain", detail: "A warlock whose chains are forged from darkness.", status: false, gender: "female", type: "Mythical" },
]

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

const DrowNameGenerator = () => {
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
  
const bgImage = "/drowname.webp"
const context = "Drow Name Generator – Create Unique and Mysterious Names"
const Q1 = "What Makes a Drow Name Unique?"
const A1 = "Drow names are distinct due to their blend of harsh consonants and flowing vowels, which evoke mystery and power, fitting their dark elven heritage."
const Q2 = "Can the Generator Be Used for Other Fantasy Characters?"
const A2 = "Yes! While it’s designed for Drow, many names can be adapted for other fantasy characters like dark sorcerers, elves, or villains."
const Q3 = "How Does the Name Generator Ensure Originality?"
const A3 = "Our tool uses advanced algorithms that combine unique prefixes, suffixes, and linguistic elements to create fresh and original names every time."
const Q4 = "What Are Some Common Prefixes and Suffixes in Drow Names?"
const A4 = "Drow names often feature distinctive prefixes like “Driz,” “Vorn,” and “Faer,” and suffixes such as “-thil,” “-zan,” or “-rae.” These elements help create a strong connection to the Drow culture, conveying their dark and mysterious nature."
const Q5 = "Can I Use the Drow Name Generator for Non-Fantasy Purposes?"
const A5 = "While primarily designed for fantasy characters, the generator can also be used to create names for other creative projects. You could use it for character names in novels, games, or even unique aliases for online personas. The versatility of the tool makes it useful for any project that requires a strong, memorable name."
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
        <a href="/drow-name-generator" className="hover:underline text-[#343a40]">Drow Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
              Drow Name Generator With Meaning
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
            <p className="text-center text-[#343a40]">Types of Drow Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="drow">Traditional Drow Names</option>
              <option value="modern">Modern Drow Names</option>
              <option value="Mythical">Mythical Drow Names</option>
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
            What Is a Drow?
            </h2>
            <hr />
            <br />
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Origins of Drow in Fantasy Lore
            </h3>
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Drow, also known as dark elves, are a fascinating subrace of elves featured in many fantasy settings, particularly <b>Dungeons & Dragons (D&D) </b>. 
            Their origins lie in rich mythologies where they are depicted as inhabitants of the Underdark—an underground realm filled with intrigue and danger. 
            Known for their matriarchal society and devotion to the dark goddess <b> Lolth</b>, Drow has captivated fans of fantasy literature and games for decades.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Characteristics of Drow Elves
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Drow elves are easily recognized by their dark skin, ranging from deep blue to black, and their striking white or silver hair. 
            Their eyes often shimmer in shades of pale silver, red, or lavender, giving them an otherworldly aura. Renowned for their mastery of magic, 
            stealth, and combat, Drow are formidable adversaries and compelling characters in any fantasy narrative.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Drow Name Generator
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Let’s show you how to use our online Drow name generator to follow some simple steps.
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose <b> Gender </b>(Male or Female)
              </h3>
              <p>
              Select the gender of the Drow name you want to generate. This allows the tool to tailor names to the unique characteristics associated with male or female Drow.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select Name <b> Type</b> (Traditional, Modern, or Mythical)
              </h3>
              <p>
              Choose the style of the name—whether you want a traditional name rooted in Drow lore, a modern twist, or a mythical, ancient-sounding name.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b> for Unique Names
              </h3>
              <p>
              Hit the <b> "Generate" </b>button, and watch as a list of unique Drow names appears instantly. 
              Each name is crafted to reflect the dark elegance of Drow culture.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Review Names and Their Meanings
              </h3>
              <p>
              The names will be displayed on your screen. Hover over each name to get more details like its meaning, origin, and the mythology behind it, aiding in your selection process.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="8fc19000c601f2ddae22e0498d353107.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="Drow.avif"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
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
          Related to Drow Name Generator
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
          <b> Features of Our Drow Name Generator </b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Customizable Name Options
            </h3>
            <p>
            Our Kingdom Name Generator offers a variety of customizable options to suit your needs. 
            You can select gender, name style, and even cultural or historical influences. 
            This flexibility ensures that the name you generate fits perfectly within the context of your world, 
            whether you're designing a medieval fantasy setting or a more futuristic kingdom. 
            You can fine-tune the name's attributes to make it uniquely yours.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Generate Names for Various Settings (Games, Stories, and More)
            </h3>
            <p>
            No matter the project, our tool is versatile enough to generate names for a wide range of settings. 
            Whether you're creating a rich kingdom for a high fantasy novel, a fictional empire in a strategy game, or a mysterious land 
            for your Dungeons & Dragons campaign, our generator has you covered. You can even use the tool to name kingdoms in video games, 
            tabletop adventures, or role-playing scenarios, ensuring that every part of your world-building is authentic and cohesive.            
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Name Generation with Meanings
            </h3>
            <p>
            Get creative inspiration in seconds! Our generator instantly produces kingdom names and provides meaningful explanations for each one. 
            Every name comes with a brief description, detailing its significance or thematic relevance to your story or game. 
            Whether you're looking for a regal-sounding name or something more exotic, 
            the generator delivers options quickly, so you can keep your creative process flowing without interruption.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Free Access
            </h3>
            <p>
            Our Drow Name Generator is available to everyone at no cost. Now, you can easily access the tool anytime, making it an easily accessible 
            resource for your creative projects. 
            The free access ensures that you can explore endless name possibilities without any financial commitment.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Customization Options
            </h3>
            <p>
            We offer extensive customization features to help you craft the perfect name. 
            You can adjust the category, difficulty level, and other characteristics to fit your specific needs. 
            This flexibility allows you to generate names that are not only unique but also perfectly suited to your creative requirements.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Secure and Private
            </h3>
            <p>
            Your privacy is our priority. Our tool is equipped with robust security measures to protect your data. 
            You can use this online Drow Name Generator with confidence, knowing that your information is secure and confidential. 
            This focus on security ensures a safe and trustworthy experience.
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
            Types of Drow Names
            </h2>
            <hr />
            <br />
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Male Drow Names – Short and Edgy Examples
            </h3>
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Male Drow names are often sharp and concise. Examples include <b> Zin, Xal,</b> and <b> Ilm</b>—names  that reflect strength and cunning.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Female Drow Names – Elegant and Complex Examples
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Female Drow names are typically longer and more intricate. 
            Examples include <b> Liraelistra, Xyndraesha,</b> <b> and Vaelistrae,</b> showcasing elegance and mystery.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Common Prefixes and Suffixes in Drow Names
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Common prefixes like <b>"Zin," "Xal," "Il,"</b> and suffixes such as <b>"stra," "ael,"</b> add depth and cultural context to Drow names.
            </p>
            <hr />
            <br />
            <br />
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
           Where Can You Use the Drow Name Generator?
            </h2>
            <hr />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            You can use our Drow Name Generator for:
            <ul>
              <li><b>- Fantasy novels </b>to create intriguing characters.</li>
              <li><b>- Role-playing games (RPGs)</b> like Dungeons & Dragons.</li>
              <li><b>- Video game avatars</b> for immersive online experiences. </li>
              <li><b>- Creative writing projects </b>that require unique fantasy names.</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[60vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Male and Female Drow Names
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Male Drow Names
              </h3>
              <p>
              <ul>
              <li><b>- Drizzt  </b>(Legendary ranger from D&D lore)</li>
              <li><b>- Zaknafein </b> (Renowned warrior and father of Drizzt)</li>
              <li><b>- Jarlaxle </b> (Charismatic rogue and mercenary leader)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Female Drow Names
              </h3>
              <p>
              <ul>
              <li><b>- Lolth </b>(The infamous Spider Queen and goddess)</li>
              <li><b>- Vierna </b> (Priestess devoted to Lolth)</li>
              <li><b>- Quenthel </b> (High Priestess with immense power)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="8fc19000c601f2ddae22e0498d353107.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[320px] my-[20px] h-[350px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
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
          <b> Why Use Our Drow Name Generator?</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Inspiration for Writers, Gamers, and Role-Players
            </h3>
            <p>
            Our tool sparks creativity by generating names that inspire captivating backstories, making it ideal for storytellers, gamers, and content creators.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Unique and Original Names with Meaning
            </h3>
            <p>
            Each name produced is carefully crafted to ensure originality and authenticity, helping your characters stand out in any narrative.          
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Free and Secure Name Generation Tool
            </h3>
            <p>
            Our generator is entirely free and prioritizes your privacy. Use it as often as you like without worrying about data security.
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

export default DrowNameGenerator;

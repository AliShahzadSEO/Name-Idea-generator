"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Zarkon", detail: "The cosmic leader.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Nexar", detail: "The stellar voyager.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Vortex", detail: "The galaxy spinner.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Krylon", detail: "The nebula guardian.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zorgon", detail: "The black hole survivor.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xarok", detail: "The star slayer.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Varnok", detail: "The planetary conqueror.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Quarx", detail: "The quantum warrior.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zylor", detail: "The cosmic sentinel.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Drakon", detail: "The celestial dragon.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Theron", detail: "The starborn.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xylar", detail: "The interstellar nomad.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Volkar", detail: "The sun chaser.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zarnok", detail: "The cosmic warlord.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Klyntar", detail: "The void walker.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Vorax", detail: "The planet eater.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zaltor", detail: "The universe explorer.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xyros", detail: "The dark matter manipulator.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Drakor", detail: "The space beast.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zynthar", detail: "The galactic storm.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Raxon", detail: "The cosmic blaster.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zorak", detail: "The starbreaker.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Kryxar", detail: "The nebula striker.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Nexor", detail: "The stellar overlord.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Vornak", detail: "The universe guardian.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Quiron", detail: "The quantum seer.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xyton", detail: "The intergalactic warrior.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zoltar", detail: "The cosmic prophet.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Drathor", detail: "The space conqueror.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Krygor", detail: "The galactic defender.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zynar", detail: "The stellar architect.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xyrok", detail: "The dark star.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Voron", detail: "The space predator.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zyrak", detail: "The black hole traveler.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Dravon", detail: "The cosmic hunter.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xantar", detail: "The starforged.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Krylor", detail: "The nebula lord.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zornak", detail: "The void emperor.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xarax", detail: "The galaxy crusher.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Vornix", detail: "The cosmic invader.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zantor", detail: "The starborn king.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xyrax", detail: "The interstellar tyrant.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Drakonis", detail: "The cosmic dragon.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Kryton", detail: "The dark nebula.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zyndar", detail: "The universe ruler.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Nexorak", detail: "The stellar annihilator.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Vortexor", detail: "The galaxy reaper.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xarokar", detail: "The star hunter.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zyntharion", detail: "The galactic warlord.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Xylorian", detail: "The cosmic sage.", status: false, gender: "male", type: "zarkonian alien" },
    { name: "Zarkara", detail: "The cosmic queen.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Nexara", detail: "The stellar empress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Vortessa", detail: "The galaxy enchantress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Kryla", detail: "The nebula mistress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zorgara", detail: "The void sorceress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xarika", detail: "The star huntress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Varnaka", detail: "The planetary empress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Quara", detail: "The quantum oracle.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zylara", detail: "The cosmic seer.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Drakara", detail: "The celestial dragoness.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Thera", detail: "The starborne maiden.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xyla", detail: "The interstellar wanderer.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Volkara", detail: "The sun chaser.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zarnoka", detail: "The cosmic matron.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Klyntara", detail: "The void walker.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Voraxa", detail: "The planet devourer.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zaltora", detail: "The universe traveler.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xyrosa", detail: "The dark matter mistress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Drakara", detail: "The space beast.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zynthara", detail: "The galactic storm.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Raxara", detail: "The cosmic blaster.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zoraka", detail: "The starbreaker.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Kryxara", detail: "The nebula striker.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Nexora", detail: "The stellar overlord.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Vornaka", detail: "The universe guardian.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Quirona", detail: "The quantum seer.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xytona", detail: "The intergalactic warrior.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zoltara", detail: "The cosmic prophetess.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Drathora", detail: "The space conqueress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Krygora", detail: "The galactic defender.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zynara", detail: "The stellar architect.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xyroka", detail: "The dark star.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Vorona", detail: "The space predator.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zyraka", detail: "The black hole traveler.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Dravona", detail: "The cosmic huntress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xantara", detail: "The starforged.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Krylara", detail: "The nebula lady.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zornaka", detail: "The void empress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xaraxa", detail: "The galaxy crusher.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Vornixa", detail: "The cosmic invader.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zantora", detail: "The starborn queen.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xyraxa", detail: "The interstellar tyrant.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Drakonisa", detail: "The cosmic dragoness.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Krytona", detail: "The dark nebula.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zyndara", detail: "The universe ruler.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Nexoraka", detail: "The stellar annihilator.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Vortessa", detail: "The galaxy reaper.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xaroka", detail: "The star huntress.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Zynthariona", detail: "The galactic warlord.", status: false, gender: "female", type: "zarkonian alien" },
    { name: "Xyloria", detail: "The cosmic sage.", status: false, gender: "female", type: "zarkonian alien" }, 
    { name: "Aeon", detail: "The timeless one.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Cyron", detail: "The light bearer.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Lumin", detail: "The radiant star.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Orith", detail: "The celestial sage.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zypher", detail: "The ethereal wind.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Nexor", detail: "The astral traveler.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Thalor", detail: "The cosmic guardian.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Kronix", detail: "The time keeper.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Solar", detail: "The sun child.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Elion", detail: "The dawn bringer.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Lycron", detail: "The lunar knight.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Phyron", detail: "The flame lord.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Azar", detail: "The blazing star.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Tyrion", detail: "The silver warrior.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zephyr", detail: "The wind walker.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Rylon", detail: "The stellar knight.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Celor", detail: "The cosmic light.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Myron", detail: "The etheric sage.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Xenor", detail: "The galactic guardian.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Thalon", detail: "The celestial knight.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Orion", detail: "The star hunter.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Lyron", detail: "The lunar prince.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zelor", detail: "The light bearer.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Syran", detail: "The astral sage.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Noxar", detail: "The night bringer.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Phaeton", detail: "The chariot of light.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Exion", detail: "The celestial warrior.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zyon", detail: "The divine protector.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Cyrion", detail: "The stellar sage.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Taron", detail: "The sky conqueror.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Mylar", detail: "The etheric knight.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zephyros", detail: "The wind master.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Kronar", detail: "The time warrior.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Xenon", detail: "The cosmic traveler.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zoron", detail: "The celestial storm.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Lythar", detail: "The star guardian.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Phylar", detail: "The flame warrior.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zyron", detail: "The wind slayer.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Tarlon", detail: "The sky defender.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Celar", detail: "The cosmic prince.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Myronis", detail: "The etheric mage.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Exor", detail: "The celestial knight.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Azon", detail: "The blazing one.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Tharion", detail: "The stellar prince.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Rylonis", detail: "The cosmic sage.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Lykron", detail: "The lunar guardian.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Zephion", detail: "The wind prince.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Phaetonis", detail: "The chariot of fire.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Aethon", detail: "The light bringer.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Xarion", detail: "The star warrior.", status: false, gender: "male", type: "aetherian alien" },
    { name: "Aeona", detail: "The timeless maiden.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Cyra", detail: "The light bearer.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Lumina", detail: "The radiant star.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Oritha", detail: "The celestial sage.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zyphera", detail: "The ethereal wind.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Nexora", detail: "The astral traveler.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Thalora", detail: "The cosmic guardian.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Krona", detail: "The time keeper.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Solara", detail: "The sun child.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Eliona", detail: "The dawn bringer.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Lyra", detail: "The lunar knightess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Phyra", detail: "The flame lady.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Azara", detail: "The blazing star.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Tyria", detail: "The silver warrior.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zephyra", detail: "The wind walker.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Ryla", detail: "The stellar knightess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Celora", detail: "The cosmic light.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Myra", detail: "The etheric sage.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Xena", detail: "The galactic guardian.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Thalona", detail: "The celestial knightess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Oria", detail: "The star huntress.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Lyraxa", detail: "The lunar princess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zelora", detail: "The light bringer.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Syrana", detail: "The astral sage.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Noxa", detail: "The night bringer.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Phaeta", detail: "The chariot of light.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Exiona", detail: "The celestial warrior.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zyona", detail: "The divine protector.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Cyriona", detail: "The stellar sage.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Tarona", detail: "The sky conqueror.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Mylara", detail: "The etheric knightess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zephyraxa", detail: "The wind master.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Kronara", detail: "The time warrior.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Xena", detail: "The cosmic traveler.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zorona", detail: "The celestial storm.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Lythara", detail: "The star guardian.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Phyla", detail: "The flame warrior.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zyrona", detail: "The wind slayer.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Tarlona", detail: "The sky defender.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Celara", detail: "The cosmic princess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Myronia", detail: "The etheric mage.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Exora", detail: "The celestial knightess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Azona", detail: "The blazing lady.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Thariona", detail: "The stellar princess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Rylona", detail: "The cosmic sage.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Lykrona", detail: "The lunar guardian.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Zephiona", detail: "The wind princess.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Phaetona", detail: "The chariot of fire.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Aethona", detail: "The light bringer.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Xariona", detail: "The star warrior.", status: false, gender: "female", type: "aetherian alien" },
    { name: "Kryllon", detail: "The power of the Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zyrak", detail: "The fierce hunter.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Vorak", detail: "The storm bringer.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xylar", detail: "The shadowed warrior.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Drakar", detail: "The dragon lord.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Nexon", detail: "The next in line.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Thryll", detail: "The thrill seeker.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Quiron", detail: "The wise sage.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zornak", detail: "The fierce defender.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krythar", detail: "The blade of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Vornar", detail: "The dark conqueror.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xyros", detail: "The silent assassin.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Drathar", detail: "The drake knight.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zyntar", detail: "The lightning flash.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krygor", detail: "The iron hand.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xarok", detail: "The shadowed one.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Voron", detail: "The storm chaser.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zylor", detail: "The ethereal light.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Drathos", detail: "The dragon heart.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krylonis", detail: "The son of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zynar", detail: "The quick striker.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xyton", detail: "The iron wall.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Vornak", detail: "The shadow's edge.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Kryzor", detail: "The blade of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Thryllon", detail: "The thrill master.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Drakarion", detail: "The dragon prince.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zornor", detail: "The fierce protector.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krythos", detail: "The warrior of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xarath", detail: "The shadow knight.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Vornik", detail: "The dark avenger.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zynthor", detail: "The lightning warrior.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xyloris", detail: "The light's edge.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Kryton", detail: "The heart of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Vorath", detail: "The storm rider.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Drakorion", detail: "The dragon king.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zyntor", detail: "The lightning's edge.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krylar", detail: "The sentinel of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xarax", detail: "The shadow ruler.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Vortos", detail: "The storm's fury.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zarnor", detail: "The lightning bringer.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krython", detail: "The defender of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Drakoris", detail: "The dragon's fire.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Thrylar", detail: "The thrill lord.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zyntaris", detail: "The lightning master.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Vorlar", detail: "The storm's edge.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Xylox", detail: "The shadow's light.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krylox", detail: "The light of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Drathion", detail: "The dragon warrior.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Zorak", detail: "The shadow's bane.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Kryvar", detail: "The warrior of Kryll.", status: false, gender: "male", type: "kryllian alien" },
    { name: "Krylla", detail: "The power of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zyraka", detail: "The fierce huntress.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Voraka", detail: "The storm bringer.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xylara", detail: "The shadowed warrior.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Drakara", detail: "The dragon lady.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Nexona", detail: "The next in line.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Thrylla", detail: "The thrill seeker.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Quirona", detail: "The wise sage.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zornaka", detail: "The fierce defender.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Krythara", detail: "The blade of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Vornara", detail: "The dark conqueror.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xyrosa", detail: "The silent assassin.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Drathara", detail: "The drake knightess.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zyntara", detail: "The lightning flash.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Krygora", detail: "The iron hand.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xaroka", detail: "The shadowed one.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Vorona", detail: "The storm chaser.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zylora", detail: "The ethereal light.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Drathosa", detail: "The dragon heart.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Krylonia", detail: "The daughter of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zynara", detail: "The quick striker.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xytona", detail: "The iron wall.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Vornaka", detail: "The shadow's edge.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Kryzora", detail: "The blade of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Thryllara", detail: "The thrill master.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Drakara", detail: "The dragon princess.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zornora", detail: "The fierce protector.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Krythosa", detail: "The warrior of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xaratha", detail: "The shadow knightess.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Vornika", detail: "The dark avenger.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zynthora", detail: "The lightning warrior.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xyloria", detail: "The light's edge.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Krylona", detail: "The heart of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Voratha", detail: "The storm rider.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Drakoria", detail: "The dragon queen.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zyntora", detail: "The lightning's edge.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Krylara", detail: "The sentinel of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xaraxa", detail: "The shadow ruler.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Vortosa", detail: "The storm's fury.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zarnora", detail: "The lightning bringer.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Krythona", detail: "The defender of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Drakoria", detail: "The dragon's fire.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Thrylara", detail: "The thrill lord.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zyntaria", detail: "The lightning master.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Vorlara", detail: "The storm's edge.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Xyloxa", detail: "The shadow's light.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Kryloxa", detail: "The light of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Drathia", detail: "The dragon warrior.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Zoraka", detail: "The shadow's bane.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Kryvara", detail: "The warrior of Kryll.", status: false, gender: "female", type: "kryllian alien" },
    { name: "Nexor", detail: "The leader of the Nexorians.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zarnor", detail: "The fierce warrior.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Vexar", detail: "The cunning strategist.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Kyron", detail: "The powerful force.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Lorak", detail: "The stalwart defender.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Thryx", detail: "The swift hunter.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Xarion", detail: "The shadowed one.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Dranor", detail: "The dragon's fire.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Rylon", detail: "The hidden blade.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zorath", detail: "The dark sorcerer.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Krylar", detail: "The guardian of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Voron", detail: "The storm bringer.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Naxor", detail: "The fierce conqueror.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Xenon", detail: "The eternal light.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Thoran", detail: "The thunder lord.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zylar", detail: "The shining star.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Lornak", detail: "The fierce protector.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Kryzor", detail: "The blade of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Xarok", detail: "The shadow's edge.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Thyrion", detail: "The storm rider.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Vaxor", detail: "The lightning's edge.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zarnok", detail: "The dark avenger.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Krython", detail: "The warrior of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Lorion", detail: "The eternal flame.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Thryon", detail: "The thrill seeker.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Xaron", detail: "The shadow king.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Nexaron", detail: "The leader of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Vornor", detail: "The storm's fury.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zyron", detail: "The lightning bringer.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Krythar", detail: "The blade of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Xarax", detail: "The shadow's fury.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zornak", detail: "The fierce defender.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Thryxar", detail: "The thrill master.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Vexon", detail: "The cunning master.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zyrion", detail: "The dark guardian.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Lorthon", detail: "The shadow's edge.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Kryton", detail: "The heart of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Vorak", detail: "The storm rider.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Nexorion", detail: "The king of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Thoryx", detail: "The thunder lord.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Xarokar", detail: "The shadow king.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Krylon", detail: "The eternal flame.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Loron", detail: "The hidden blade.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zarnak", detail: "The fierce protector.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Vexor", detail: "The lightning edge.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Thrykon", detail: "The storm master.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Krythos", detail: "The warrior of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Zarnoris", detail: "The dark guardian.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Lorakos", detail: "The fierce conqueror.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Kryvan", detail: "The protector of Nexor.", status: false, gender: "male", type: "nexorian alien" },
    { name: "Nexora", detail: "The leader of the Nexorians.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zarnora", detail: "The fierce warrior.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Vexara", detail: "The cunning strategist.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Kyra", detail: "The powerful force.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Loraka", detail: "The stalwart defender.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Thryxa", detail: "The swift hunter.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Xaria", detail: "The shadowed one.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Dranora", detail: "The dragon's fire.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Rylona", detail: "The hidden blade.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zoratha", detail: "The dark sorceress.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Krylara", detail: "The guardian of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Vorona", detail: "The storm bringer.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Naxora", detail: "The fierce conqueror.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Xenona", detail: "The eternal light.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Thorana", detail: "The thunder lord.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zylara", detail: "The shining star.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Lornaka", detail: "The fierce protector.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Kryzora", detail: "The blade of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Xaroka", detail: "The shadow's edge.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Thyra", detail: "The storm rider.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Vaxora", detail: "The lightning's edge.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zarnoka", detail: "The dark avenger.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Krythona", detail: "The warrior of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Loriana", detail: "The eternal flame.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Thryona", detail: "The thrill seeker.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Xarina", detail: "The shadow queen.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Nexara", detail: "The leader of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Vornora", detail: "The storm's fury.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zyrina", detail: "The lightning bringer.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Krythara", detail: "The blade of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Xara", detail: "The shadowed one.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zorna", detail: "The fierce protector.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Thryxara", detail: "The thrill master.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Vexona", detail: "The cunning master.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zyrina", detail: "The dark guardian.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Lorthona", detail: "The shadow's edge.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Krytona", detail: "The heart of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Voraka", detail: "The storm rider.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Nexorina", detail: "The queen of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Thoryxa", detail: "The thunder lord.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Xaroka", detail: "The shadow queen.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Krylona", detail: "The eternal flame.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Lorona", detail: "The hidden blade.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zarnara", detail: "The fierce protector.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Vexoria", detail: "The lightning master.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Thrykona", detail: "The storm's edge.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Krythosa", detail: "The warrior of Nexora.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Zarnoria", detail: "The dark guardian.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Loraka", detail: "The fierce conqueror.", status: false, gender: "female", type: "nexorian alien" },
    { name: "Kryvara", detail: "The protector of Nexora.", status: false, gender: "female", type: "nexorian alien" },
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
        name: "Goblin Name Generator",
        pic: "/Goblin.jpg",
        link: "https://www.nameideagenerator.com/goblin-name-generator",
    },
    {
        name: "Half Elf Name Generator",
        pic: "/half-demon.webp",
        link: "https://www.nameideagenerator.com/half-elf-name-generator",
    },
    {
        name: "Halfing Name Generator",
        pic: "/halfling.webp",
        link: "https://www.nameideagenerator.com/halfling-name-generator",
    },
    {
        name: "Horse Name Generator",
        pic: "horse.webp",
        link: "https://www.nameideagenerator.com/horse-name-generator",
    },
    ];

const IslandNameGenerator = () => {
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

    const bgImage = "/island1.jpg"
    const context = "Island Name Generator"
    const Q1 = "How many names can I generate?"
const A1 = "You can generate an unlimited number of names with our tool. However, at a time, you will get only four names list. But you can generate again and again to get more names."
const Q2 = "Can I save my favorite names?"
const A2 = "Yes, click the saved option icon to add names to your saved list. You can see the saved names whenever you use the tool."
const Q3 = "Is the tool free to use?"
const A3 = "Yes, the Island Name Generator is completely free to use. So, use it without worry of paying a single penny."
const Q4 = "Do I need an account to use the generator?"
const A4 = "No account is necessary to generate names. You can use it without any creation of an account. Try unlimited times without any hassle."
const Q5 = "Can I use the generated names for commercial projects?"
const A5 = "Yes, you can use the names generated by our tool for commercial projects. Whether it's for games, books, or any other creative venture, our names are designed to enhance your work."

    return (
        <motion.div
            initial={{ opacity: 0, x: 1200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#f8f9fa] "
        >
            <HeroSection bgImage={bgImage} context={context} />
            <div className="w-[90%] my-[50px] bg-white mx-auto rounded-[10px] border border-solid shadow-lg">
                <div className="w-[95%] mx-auto py-[50px]">
                    <div>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Island Name Generator
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
                        <p className="text-center text-[#343a40]">Types of Demons</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="Zarkonian Aliens">Zarkonian Aliens</option>
                            <option value="Aetherian Aliens">Aetherian Aliens</option>
                            <option value="Kryllian Aliens">Kryllian Aliens</option>
                            <option value="Nexorian Aliens">Nexorian Aliens</option>

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
                            About Us
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        Our Island Name Generator is designed to help you create unique and captivating island names. 
                        It is an invaluable tool for authors developing fantasy worlds, gamers crafting adventures, and creative enthusiasts seeking inspiration. 
                        Use this tool to enhance your storytelling and add depth to your creative projects.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Generate names with a single click to spark creativity and support your projects. 
                        Access over 100 of thousands names in our extensive database. 
                        Each name is crafted to suit various storytelling needs, offering options that range from mysterious to whimsical.                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        The generator integrates seamlessly into your projects. It is ideal for crafting tales of pirates, explorers, or other adventures. 
                        Find the perfect name for your island quickly and efficiently. 
                        Writers, gamers, and creative individuals will benefit from the vast array of options provided by this tool.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use Our Island Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    The use of our Island Name Generator is simple and straightforward. Here is how you can efficiently use our tool:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1 - Open the Tool
                            </h3>
                            <p>
                            Visit our <b> Idea Name Generator</b> and easily locate the Island Name Generator. Open the tool to start creating your unique island names.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                                Step 2 - Generate Names
                            </h3>
                            <p>
                            Click the <b> "Generate Names"</b> button to instantly produce a new island name. 
                            Each click gives you a fresh, random name to consider.                           
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Choose a Perfect Name
                            </p>
                            <p>
                            Review the list of generated names and pick the one that stands out. 
                            You can save your selected names directly on the website for easy access later.                           
                            </p>                       
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="Island1.webp"
                            alt=""
                            className="w-[270px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="Island2.webp"
                            alt=""
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                    Related to DragonBorn-Name-Generator
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
                    <h2 class="sm:text-[36px] text-[22px] font-semibold mb-4">
                    Why Do You Need an Island Name Generator? 
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our Island Name Generator streamlines the process of finding the perfect name for your creative projects. 
                    Here are the reasons why should you choose our tool:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Vast Name Collection
                                </h3>
                                <p>
                                Our tool offers access to an extensive database of over 10,000 island names. 
                                Each name is designed to provide a diverse array of choices. 
                                Find the perfect name that suits the unique characteristics of your island.
                           
                                 </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Effortless Name Generation
                                </h3>
                                <p>
                                Generate island names quickly with our user-friendly interface. A single click brings up a fresh name, simplifying the naming process. 
                                Experience a fast and efficient way to find the right name for your project.
                              
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Save and Organize
                                </h3>
                                <p>
                                Save your favorite names using the built-in favorites feature. Easily revisit and manage your selections at any time. 
                                Streamline your creative workflow with organized name options. Simply by using our exclusive quality online tool.                         
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Seamless Integration
                                </h3>
                                <p>
                                Integrate the names into your projects effortlessly. 
                                Whether you're working on stories, games, or other creative projects, the tool ensures smooth incorporation. 
                                Enhance your narrative with names that fit seamlessly.                          
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Creative Inspiration
                                </h3>
                                <p>
                                Leverage the tool to spark new ideas and inspiration. 
                                The diverse range of names helps stimulate creativity for world-building or storytelling. 
                                Enrich your projects with imaginative and fitting island names.                         
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Refined Search Options
                                </h3>
                                <p>
                                Customize your search by adjusting parameters such as themes and name length. 
                                Tailor the results to fit the specific needs of your project. 
                                Enhance your creative process with names that match your vision.                          
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="Island3.webp"
                            alt="Tiefling Image 1"
                            class="w-[350px] my-[60px] h-[370px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Island3.jpg"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[370px] my-[20px] sm:absolute sm:bottom-10 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div>

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
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex items-center flex-col gap-6">
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

export default IslandNameGenerator;

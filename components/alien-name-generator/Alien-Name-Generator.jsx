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
        name: "Island Name Generator",
        pic: "/island1.jpg",
        link: "https://www.nameideagenerator.com/island-name-generator",
    },
    {
        name: "Song Name Generator",
        pic: "/pop.jpg",
        link: "https://www.nameideagenerator.com/song-name-generator",
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

const AlienNameGenerator = () => {
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

    const bgImage = "/alien.webp"
    const context = "Alien Name Generator"
    const Q1 = "Can I customize the generated alien names?"
    const A1 = "ThYes! You can choose different alien species, and the tool will generate names based on that. You can also pick the style of name you prefer. It could be futuristic, mysterious, or powerful."
    const Q2 = "Are the names truly unique?"
    const A2 = "Each name generated is designed to be unique and fitting for an alien character. You won’t find the same name twice!"
    const Q3 = "Can I use these names in my stories or games?"
    const A3 = "Absolutely! Writing a sci-fi novel, creating characters for a game, or just having fun? You can use the names generated in any project."
    const Q4 = "How many names can I generate at once?"
    const A4 = "You can generate as many names as you like! The tool will provide a fresh set of names each time you click, so you can keep exploring until you find the perfect one."
    const Q5 = "What if I want a funny or unusual name?"
    const A5 = "You should! Fantasy doesn’t have to be serious all the time. Feel free to get creative. Our generator can still help with fun ideas."
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
                <div className="container mx-auto py-4">
  {/* Breadcrumbs */}
  <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
    <ol className="list-none p-0 inline-flex">
      <li className="flex items-center">
        <a href="/" className="hover:underline text-[#343a40]">Home</a>
        <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      </li>
      <li className="flex items-center">
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/alien-name-generator" className="hover:underline text-[#343a40]">Alien Name Generator</a>
      </li>
    </ol>
  </nav>

  {/* Title */}
  <div>
    <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
      Random Alien Name Generator With Meaning
    </h2>
  </div>
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
                        <p className="text-center text-[#343a40]">Types of Alien Names</p>
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
                          Generate Your Perfect Alien Name
                        </h2>
                        <hr />
                      Ready to give your alien a name that’s truly out of this world? Our Alien Name Generator makes it easy! 
                      Just click and watch as it spits out a list of unique names that could belong to the most mysterious extraterrestrial beings in the galaxy. 
                      You’ll have a perfect name in no time, no space travel required.
                        <p className="text-center py-[10px] text-[#343a40]">
                          No more stressing over names that sound too Earth-like—this tool gives you names that are as cosmic as they come. From futuristic to downright weird, 
                          you’ll find the perfect name for your alien character in seconds. So, go ahead, hit that button and get ready to meet your new favorite alien!
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[32px] text-[24px] text-center">
                     How Does Our Tool Work?
                    </h2>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                                Step 1 - Choose Your Alien Gender
                            </h3>
                            <p>
                           Start by selecting the gender of the alien you want to name. 
                           Do you want a name for female or male alie. We have got names for both. Or neutralise the way you wish 
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                                Step 2 - Choose Your Alien Species
                            </h3>
                            <p>
                            Do you need a futuristic space traveler? A mysterious alien from a distant galaxy? The tool lets you pick a species that suits your character’s vibe. 
                            From high-tech beings to ancient and powerful aliens, the choice is yours!
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[24px] text-[20px] font-semibold ">
                                Step 3 - Click to Generate Your Name
                            </p>
                            <p>
                           Once you've chosen your species, simply click the <b>“Generate”</b> button. 
                           The tool will instantly create a list of unique and fitting alien names based on your selection. 
                           You don’t need to do anything else—just sit back and let the magic happen!
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[24px] text-[20px] font-semibold ">
                                Step 4: Select the Name You Like
                            </p>
                            <p>
                            After the names pop up, browse through the options and choose the one that feels right for your alien. 
                            Each name is crafted to sound authentic, so you’ll find something that fits perfectly. 
                            Once you’ve selected your favorite, you’re ready to go—your alien now has the perfect name for their next adventure!
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="alien_name.avif"
                            alt="Alien Name Generator | Random Alien Name Generator With Meaning"
                            className="w-[280px]  h-[300px] sm:absolute sm:top-0 sm:left-10 rounded-[16px]"
                        />
                        <img
                            src="alien_name_generator.jpg"
                            alt="Alien Name Generator | Random Alien Name Generator With Meaning"
                            className="w-[280px] h-[320px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                <h3 className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Alien Name Generator
                </h3>
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
                       Why Use Our Alien Name Generator Tool?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                        Unlock the full potential of your creativity with our Alien Name Generator.
                        Here’s why you need this tool to enjoy the following features.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="lg:w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold">
                                 Quick and Easy
                                </h3>
                                <p>
                                  No more hours spent trying to come up with a unique alien name. Just a few clicks and you’ve got a list of options ready to go!
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                  Unique and Intriguing Names
                                </h3>
                                <p>
                                  Our tool generates names that sound truly alien—no more generic names that could belong to anyone from Earth
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                 Customizable for Your Needs
                                </h3>
                                <p>
                                 You can select different species or categories, making sure you get the perfect name for your character’s vibe
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                 Perfect for Games and Stories
                                </h3>
                                <p>
                                 Writing a sci-fi novel or creating a character for your next RPG session? Our generator gives you names that fit perfectly into any universe.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                  Endless Inspiration
                                </h3>
                                <p>
                                 Can’t decide? Our generator gives you a variety of names to spark your imagination, so you can pick the one that stands out
                                </p>
                            </div>
                             <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                  Fun and Free  
                                </h3>
                                <p>
                                 It’s a fun tool to use, and best of all, it’s completely free! You can generate as many names as you need without spending a dime
                                </p>
                            </div>
                            <p>
                              Why waste time thinking of names when you can let the tool do the work for you? Try it out and meet your new favorite alien!
                            </p>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="alien3.jpeg"
                            alt="alien name generator"
                            class="w-[350px] my-[60px] h-[350px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="alien4.jpeg"
                            alt="alien name generator"
                            class="w-[350px] h-[350px] my-[20px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>


<section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto w-4/5  text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">The Mystery Behind Alien Life Forms</h2>
        <p class="text-lg text-gray-700 mb-6">
            Aliens have been a mystery for ages, right? From ancient myths about beings from the stars to modern sci-fi flicks, we’ve been obsessed with the idea that we might not be alone in the universe.
       
            Scientists are still on the hunt for extraterrestrial life, and while they haven’t found anything concrete yet, the possibilities are endless. Imagine a world where creatures exist that are nothing like us—maybe they don’t have legs, or maybe they communicate through colors!
        </p>
        <p class="text-lg text-gray-700 mb-6">
            The mystery isn’t just about finding life, but discovering what form it takes. It’s kind of exciting to think about, right? What would an alien look like, and how would they behave? We’ve got a lot of theories, but no answers yet. And that’s where the fun begins! The unknown makes the idea of alien life all the more fascinating.
        </p>
    </div>
</section>

<section class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto w-4/5 text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">What Makes an Alien Name Truly Out of This World?</h2>
        <p class="text-lg text-gray-700 mb-6">
            Now, when it comes to alien names, the sky's the limit—literally! A name should feel like it belongs to someone or something from a completely different galaxy. What makes an alien name stand out is its uniqueness and ability to sound completely unfamiliar, yet still carry some kind of meaning. It should sound otherworldly, with strange syllables, exotic sounds, and sometimes, even a bit of mystery. After all, if you're naming an alien, it should have that "I’ve never heard anything like this before" vibe.
        </p>
        <p class="text-lg text-gray-700">
            An alien name doesn’t have to follow the rules of Earthly languages. It can break from traditional naming patterns and get creative with pronunciation and structure. Maybe it uses unexpected combinations of letters, or perhaps it reflects the alien’s culture, traits, or even the environment they come from. The goal is to make the name feel authentic to the alien world it represents—something you wouldn’t hear in your local coffee shop!
        </p>
    </div>
</section>

<section class="bg-white pt-10 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto w-4/5 text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Tips for Creating Memorable Alien Names</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Embrace Uniqueness</h3>
                <p class="text-gray-700">
                    Alien names should sound strange and unfamiliar, with unique syllables that stand out from the norm.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Play with Sounds</h3>
                <p class="text-gray-700">
                    Use combinations of letters and sounds that you wouldn’t typically hear on Earth—think unusual consonants and vowel pairings.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Reflect the Alien’s Culture</h3>
                <p class="text-gray-700">
                    Consider what the alien’s environment or species might be like. Is the name harsh and sharp or soft and melodic?
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Keep It Simple, but Distinct</h3>
                <p class="text-gray-700">
                    Avoid overly long names. Keep them short and catchy, but make sure they’re different enough to be memorable.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Add Meaning</h3>
                <p class="text-gray-700">
                    Even if the name sounds odd, try to give it a subtle connection to the alien’s traits or background. This could help make it feel more authentic.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Use Random Combinations</h3>
                <p class="text-gray-700">
                    Don’t be afraid to mix up letters in new ways. Sometimes the most interesting names come from completely random pairings!
                </p>
            </div>
        </div>
    </div>
</section>

<section class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto w-4/5 text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Types of Alien Names</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Futuristic and High-Tech</h3>
                <p class="text-gray-700">
                    These names are for aliens that come from super advanced, tech-driven civilizations. Think sleek, sharp, and sophisticated names like Xaltron or Vyrex. They evoke a sense of innovation and cutting-edge technology—perfect for aliens who are masters of science, intergalactic travel, or even AI. These names have that "futuristic" vibe that makes you feel like you're dealing with beings from the next century.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Mysterious and Otherworldly</h3>
                <p class="text-gray-700">
                    Now, some aliens come from places so strange, you can't help but wonder if they’re from a galaxy far, far away—or just from a whole different plane of existence! Names like Zha'ran or Qirael sound like they hold secrets, like they’re shrouded in mystery and untold power. If you’re imagining an alien race with ancient knowledge or hidden abilities, these names are the way to go.
                </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Mythical and Powerful</h3>
                <p class="text-gray-700">
                    For those aliens who feel like they’ve been around forever—gods, legends, or just extremely powerful beings—you need names that scream authority. Thalorak or Esharoth have that bold, commanding energy, perfect for alien species with immense power, wisdom, or even a touch of divine influence. These names are perfect for the mighty rulers or the ancient species in your story.
                </p>
            </div>
        </div>
        <div class="mt-8">
            <p class="text-lg text-gray-700">
                Need even more cool names? Check out our <a href="/categories/fantasy-and-mythical-creatures"> <b> Fictional and Sci-Fi Name Generator</b></a> to find more out-of-this-world ideas for your alien characters!
            </p>
        </div>
    </div>
</section>

<section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto w-4/5 text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Examples of Alien Names</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Zaltron</h3>
                <p class="text-gray-700">Zaltron is a futuristic name often associated with advanced technology and cybernetic enhancements. It’s the perfect name for an alien from a high-tech civilization, symbolizing innovation and evolution.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Qyrex</h3>
                <p class="text-gray-700">Qyrex evokes a sense of mystery and strength. The name fits an alien from a powerful race, known for their resilience and adaptability in hostile environments.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Vra'kaa</h3>
                <p class="text-gray-700">Vra'kaa carries a deep, otherworldly sound. This name could belong to an ancient species with profound knowledge of the universe, perhaps even holding forgotten secrets of the cosmos.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Esharoth</h3>
                <p class="text-gray-700">Esharoth suggests a sense of power and wisdom. An alien with this name could be a revered leader, holding vast knowledge and influence over their people.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Thalorak</h3>
                <p class="text-gray-700">Thalorak sounds bold and commanding. This name is ideal for an alien species with immense authority, perhaps even divine influence, in their world.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Zha'ran</h3>
                <p class="text-gray-700">Zha'ran has a mysterious ring to it, perfect for an alien species shrouded in secrecy. Their culture could be based around hidden knowledge or ancient power.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Rylox</h3>
                <p class="text-gray-700">Rylox is a short but striking name, ideal for a quick-witted alien species known for their cunning and agility. It could symbolize a species that thrives on strategic thinking and swift action.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Oorvath</h3>
                <p class="text-gray-700">Oorvath is a name with a sense of grounding and ancient power. It could belong to a species deeply connected to nature, possibly even with the ability to manipulate the elements.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Xyren</h3>
                <p class="text-gray-700">Xyren sounds futuristic and sleek, suitable for a technologically advanced alien species. Their culture may revolve around progress, artificial intelligence, and exploration.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Kivor</h3>
                <p class="text-gray-700">Kivor is a strong, commanding name. It could fit a warrior race or an alien species known for their courage and resilience in battle.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Drak’thar</h3>
                <p class="text-gray-700">Drak'thar sounds both formidable and ancient. This name could be suited for a species with a deep, almost mythical connection to their world’s history and battles of the past.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Vaelix</h3>
                <p class="text-gray-700">Vaelix suggests grace and elegance. This name might belong to an alien species known for their beauty, agility, or even their ethereal qualities.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Cyy’rah</h3>
                <p class="text-gray-700">Cyy'rah evokes a sense of mystery and depth. It could belong to an alien culture focused on spiritualism, with names passed down through generations of seers and sages.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Korath</h3>
                <p class="text-gray-700">Korath sounds like a leader’s name, perfect for a powerful alien race with deep respect for hierarchy and order. This name could symbolize both strength and diplomacy.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Xalax</h3>
                <p class="text-gray-700">Xalax has an aggressive yet sophisticated tone, fitting for an alien species that is both feared and respected. This could be the name of a fierce warrior race.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Vylor</h3>
                <p class="text-gray-700">Vylor is sharp and dynamic, suggesting a fast-moving species known for their speed and intellect. It might also belong to a highly competitive alien race.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Mylix</h3>
                <p class="text-gray-700">Mylix is a smooth, gentle name that could be associated with a species that values diplomacy and peaceful coexistence. It’s perfect for an alien known for their wisdom and calm demeanor.</p>
            </div>
        </div>
    </div>
</section>



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
          <a href="https://www.nameideagenerator.com/contact-us" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black text-[20px] px-[40px] py-[8px] rounded-[10px] font-semibold">
                Request
            </button>
           </a>
        </div>
                </motion.div>
            </div>
            <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5} />
            <Footer />
        </motion.div>
    );
};

export default AlienNameGenerator;

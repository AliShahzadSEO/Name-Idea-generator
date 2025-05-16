"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Faelan", detail: "Strong and agile.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Caelum", detail: "Sky and heavens.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Theron", detail: "Hunter and warrior.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Elion", detail: "Star and brightness.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Valandil", detail: "Valiant and noble.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Aethor", detail: "Air and wisdom.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Eryndor", detail: "Forest and protection.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Zyreth", detail: "Mystical and powerful.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Maelor", detail: "Ancient and wise.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Sildar", detail: "Shield and guardian.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Lorien", detail: "Dream and fantasy.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Caelith", detail: "Heavenly and pure.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Darion", detail: "Gift and blessing.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Rhysar", detail: "Leader and king.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Eltharion", detail: "Noble and strong.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Thalion", detail: "Strong and enduring.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Maelior", detail: "Mighty and just.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Faerion", detail: "Magical and ethereal.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Zephyrin", detail: "Wind and freedom.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Riven", detail: "Broken and reforged.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Kaelen", detail: "Mighty warrior.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Sylvaris", detail: "Forest protector.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Erynion", detail: "Noble elf warrior.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Faelith", detail: "Magic and wisdom.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Aerion", detail: "Air and grace.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Valys", detail: "Valiant and just.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Caeldor", detail: "Heavenly light.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Therandir", detail: "Hunter and protector.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Ilrandir", detail: "Seeker of truth.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Faelor", detail: "Magical being.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Arion", detail: "Noble steed.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Myrrh", detail: "Gift of the wise.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Zephar", detail: "Wind and spirit.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Aelarion", detail: "Noble and swift.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Thalor", detail: "Strong oak.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Sylas", detail: "Forest guardian.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Vaelion", detail: "Mystical and wise.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Rhylandor", detail: "Noble leader.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Eldarion", detail: "Son of the stars.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Lorendar", detail: "Keeper of the forest.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Faerith", detail: "Ethereal beauty.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Caelumir", detail: "Sky and water.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Maelion", detail: "Mighty leader.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Aerith", detail: "Grace and air.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Zephyrion", detail: "Wind spirit.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Darionis", detail: "Gift of the gods.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Eltharionis", detail: "Noble and strong.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Therion", detail: "Hunter and tracker.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Caelorn", detail: "Heavenly oak.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Faelanor", detail: "Magical forest dweller.", status: false, gender: "male", type: "mystic_half_elf" },
    { name: "Elara", detail: "Bright star.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Sylphira", detail: "Spirit of the wind.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Faelina", detail: "Magic and grace.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Caelia", detail: "Heavenly and pure.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Thalindra", detail: "Forest and wisdom.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Zephyra", detail: "Wind and freedom.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Elyndra", detail: "Noble and graceful.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Myrrhiel", detail: "Gift of the wise.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Aeliana", detail: "Noble and swift.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Lirael", detail: "Song of the stars.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Thaloria", detail: "Forest protector.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Elysira", detail: "Heavenly beauty.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Caelithra", detail: "Heavenly flower.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Aerithiel", detail: "Graceful and pure.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Zyndra", detail: "Mystical and powerful.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Maelis", detail: "Strong and wise.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Faelira", detail: "Magical and graceful.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Elindra", detail: "Noble and strong.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Sylvana", detail: "Forest spirit.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Zephyra", detail: "Wind spirit.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Valaria", detail: "Valiant and pure.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Illyria", detail: "Ethereal beauty.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Thalindra", detail: "Forest wisdom.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Aelith", detail: "Noble and graceful.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Caelara", detail: "Heavenly light.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Eryndra", detail: "Forest guardian.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Faeloria", detail: "Magic and wisdom.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Sylendra", detail: "Forest protector.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Myrrhyn", detail: "Gift of the wise.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Ellysia", detail: "Ethereal beauty.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Zephyrina", detail: "Wind and grace.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Thaliel", detail: "Forest spirit.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Aerilyth", detail: "Grace and beauty.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Caelindra", detail: "Heavenly and pure.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Elyndra", detail: "Noble and wise.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Faelindra", detail: "Magic and grace.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Sylphara", detail: "Forest and air.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Myrrhiel", detail: "Gift of the wise.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Zephylra", detail: "Wind and spirit.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Aerindra", detail: "Graceful leader.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Elyndria", detail: "Noble and pure.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Caelindra", detail: "Heavenly and strong.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Elathra", detail: "Ethereal beauty.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Sylvaris", detail: "Forest protector.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Thaliria", detail: "Forest and wisdom.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Aeliana", detail: "Noble and swift.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Faelara", detail: "Magic and grace.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Myrrhynna", detail: "Gift of the wise.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Zyndra", detail: "Mystical and powerful.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Elythra", detail: "Heavenly flower.", status: false, gender: "female", type: "mystic_half_elf" },
    { name: "Aelrith", detail: "Noble and swift.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Valorian", detail: "Strong and valiant.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Thalion", detail: "Courageous leader.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Caedmon", detail: "Wise protector.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Elionis", detail: "Radiant and noble.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Faelorin", detail: "Magical and graceful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Eldric", detail: "Noble and wise.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Galathor", detail: "Mighty warrior.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Therinor", detail: "Wise and powerful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Lorcan", detail: "Fierce and strong.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Caelumir", detail: "Heavenly protector.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Aerandir", detail: "Graceful and swift.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Faelorn", detail: "Magical and noble.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Thalor", detail: "Courageous leader.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Zephyros", detail: "Wind and spirit.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Maeloris", detail: "Strong and wise.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Valandil", detail: "Valiant and noble.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Caelin", detail: "Heavenly light.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Elthar", detail: "Radiant and powerful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Rhylindor", detail: "Noble and wise.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Arionis", detail: "Radiant and strong.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Sildarion", detail: "Strong and graceful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Lorienis", detail: "Ethereal and noble.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Maelindor", detail: "Wise and powerful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Caedryn", detail: "Noble protector.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Aeltharion", detail: "Noble and swift.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Thalionis", detail: "Courageous and radiant.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Faelionis", detail: "Magical and radiant.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Zyrethrin", detail: "Mystical and powerful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Eldarionis", detail: "Noble and strong.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Galadorn", detail: "Mighty protector.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Vaelith", detail: "Valiant and swift.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Sylvarin", detail: "Forest and spirit.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Caelumir", detail: "Heavenly protector.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Valis", detail: "Valiant and strong.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Thalindor", detail: "Courageous and wise.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Aerionis", detail: "Graceful and strong.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Rhysarion", detail: "Noble and swift.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Lorionis", detail: "Ethereal and strong.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Ariondor", detail: "Radiant and powerful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Maelorin", detail: "Strong and graceful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Thalorian", detail: "Courageous and noble.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Sylvas", detail: "Forest and strength.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Aelarin", detail: "Noble and swift.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Faelorin", detail: "Magical and noble.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Zephyron", detail: "Wind and power.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Caelorn", detail: "Heavenly and strong.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Eldorin", detail: "Noble and wise.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Galathrin", detail: "Mighty and wise.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Rhylorin", detail: "Noble and graceful.", status: false, gender: "male", type: "noble_half_elf" },
    { name: "Aeliana", detail: "Noble and swift.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Faelira", detail: "Magical and graceful.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elyndra", detail: "Noble and wise.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Sylphara", detail: "Forest and air.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Thalira", detail: "Courageous leader.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elenara", detail: "Radiant and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Myrrhith", detail: "Mystical and wise.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Caelira", detail: "Heavenly and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Aerithra", detail: "Graceful and swift.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Valindra", detail: "Valiant and wise.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Zephira", detail: "Wind and spirit.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elyria", detail: "Noble and radiant.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Faelithra", detail: "Magical and strong.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Sylvaria", detail: "Forest and spirit.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Lirael", detail: "Ethereal and graceful.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Thalindra", detail: "Courageous and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Caelindra", detail: "Heavenly and strong.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Aelithra", detail: "Noble and swift.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Myrrhina", detail: "Mystical and graceful.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Valoria", detail: "Valiant and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Zephyris", detail: "Wind and strength.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elyndria", detail: "Noble and radiant.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Faelindra", detail: "Magical and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Sylphira", detail: "Forest and air.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Thalindra", detail: "Courageous and wise.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Caelia", detail: "Heavenly and graceful.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elara", detail: "Radiant and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Myrrhiel", detail: "Mystical and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Aelira", detail: "Noble and swift.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Zephylra", detail: "Wind and spirit.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Faeloria", detail: "Magical and strong.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elyndria", detail: "Noble and wise.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Caelithra", detail: "Heavenly and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Aerilyth", detail: "Graceful and swift.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Sylvara", detail: "Forest and grace.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Valyria", detail: "Valiant and radiant.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Zephyra", detail: "Wind and power.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Myrrhyn", detail: "Mystical and strong.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Aelara", detail: "Noble and swift.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Thalira", detail: "Courageous and graceful.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elyndra", detail: "Noble and wise.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Faelina", detail: "Magical and radiant.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Sylphara", detail: "Forest and air.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Caelindra", detail: "Heavenly and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Myrrhiel", detail: "Mystical and graceful.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Aelindra", detail: "Noble and swift.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Elythra", detail: "Noble and radiant.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Faelara", detail: "Magical and wise.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Zephyrina", detail: "Wind and grace.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Thalithra", detail: "Courageous and noble.", status: false, gender: "female", type: "noble_half_elf" },
      { name: "Thorn", detail: "Strong and resilient.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Briar", detail: "Prickly and tough.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Wolfgar", detail: "Fierce and loyal.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Flint", detail: "Hard and sharp.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Hawkthorn", detail: "Sharp-eyed and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Alderis", detail: "Strong like the alder tree.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Stormblade", detail: "Swift and deadly.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Rowan", detail: "Resilient and enduring.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Oakheart", detail: "Sturdy and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Wildthorn", detail: "Untamed and sharp.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Bramble", detail: "Thorny and wild.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Thorne", detail: "Hard and tough.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Ashen", detail: "Gray and mysterious.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Wyrmwood", detail: "Ancient and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Stormrider", detail: "Rider of storms.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Talon", detail: "Sharp and fierce.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Grimbark", detail: "Dark and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Wolfsbane", detail: "Deadly and protective.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Fernleaf", detail: "Delicate but strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Bramblethorn", detail: "Thorny and resilient.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Stormwolf", detail: "Fierce and wild.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Hawkshadow", detail: "Silent and swift.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Wildwind", detail: "Free and untamed.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Thunderleaf", detail: "Loud and powerful.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Oakshield", detail: "Strong and protective.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Alderwind", detail: "Swift and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Ironroot", detail: "Strong and unyielding.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Briarwood", detail: "Thorny and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Shadowthorn", detail: "Dark and sharp.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Hawkwing", detail: "Swift and fierce.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Thunderstorm", detail: "Loud and powerful.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Wildheart", detail: "Free and untamed.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Oakthorn", detail: "Strong and sharp.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Bramblebark", detail: "Thorny and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Fernshadow", detail: "Delicate but fierce.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Grimleaf", detail: "Dark and resilient.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Stormleaf", detail: "Strong and fast.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Bramblewind", detail: "Thorny and wild.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Talonwood", detail: "Sharp and strong.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Ironbark", detail: "Strong and unyielding.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Ashthorn", detail: "Sharp and resilient.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Wildbriar", detail: "Thorny and untamed.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Fernstorm", detail: "Strong and swift.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Oakshield", detail: "Strong and protective.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Thunderthorn", detail: "Loud and sharp.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Stormbriar", detail: "Thorny and powerful.", status: false, gender: "male", type: "wild_half_elf" },
      { name: "Briar", detail: "Prickly and tough.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Fern", detail: "Delicate but strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Thornwild", detail: "Sharp and untamed.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Oakleaf", detail: "Sturdy and enduring.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Rowan", detail: "Resilient and graceful.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Ashira", detail: "Mystical and strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wyndrith", detail: "Graceful and swift.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Stormwind", detail: "Powerful and free.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Briarrose", detail: "Beautiful and thorny.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Hawkfeather", detail: "Sharp and swift.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wildrose", detail: "Untamed and beautiful.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Willow", detail: "Graceful and flexible.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Thistle", detail: "Sharp and resilient.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Grimbark", detail: "Dark and tough.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Fernleaf", detail: "Delicate but strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Oaklyn", detail: "Sturdy and graceful.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wildbriar", detail: "Thorny and untamed.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Thornshadow", detail: "Sharp and mysterious.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Briarthorn", detail: "Thorny and tough.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Stormfeather", detail: "Powerful and swift.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wildthorn", detail: "Untamed and sharp.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Ashenleaf", detail: "Gray and resilient.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Alderis", detail: "Strong and enduring.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Stormrose", detail: "Powerful and beautiful.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wyndthorn", detail: "Graceful and tough.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Bramblethorn", detail: "Thorny and strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Oakbriar", detail: "Sturdy and thorny.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Willowis", detail: "Graceful and flexible.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Brambleleaf", detail: "Thorny and resilient.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wildfeather", detail: "Free and swift.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Fernshadow", detail: "Delicate but strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Thunderleaf", detail: "Powerful and loud.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Hawkshadow", detail: "Swift and mysterious.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Stormthorn", detail: "Powerful and sharp.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Thornbriar", detail: "Thorny and tough.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wildleaf", detail: "Free and delicate.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Oakfeather", detail: "Sturdy and sharp.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Grimbriar", detail: "Dark and thorny.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Wildwood", detail: "Untamed and strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Willowfeather", detail: "Graceful and strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Thunderthorn", detail: "Loud and powerful.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Hawklyn", detail: "Swift and fierce.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Fernstorm", detail: "Delicate and strong.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Ashbriar", detail: "Gray and resilient.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Bramblewood", detail: "Thorny and tough.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Thornlyn", detail: "Sharp and tough.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Stormbriar", detail: "Powerful and thorny.", status: false, gender: "female", type: "wild_half_elf" },
      { name: "Eldric", detail: "Wise and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Sorin", detail: "Mysterious and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Altharion", detail: "Ancient and wise.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Valamir", detail: "Noble and magical.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zael", detail: "Quick and clever.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Therion", detail: "Powerful and enigmatic.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zephyros", detail: "Swift and airy.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Eryndor", detail: "Ancient and mysterious.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Malcor", detail: "Dark and intense.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Thalion", detail: "Noble and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Galadorn", detail: "Wise and noble.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zyndor", detail: "Mystical and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Faelion", detail: "Magical and graceful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Aelion", detail: "Ancient and wise.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Thalor", detail: "Noble and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Eldorion", detail: "Wise and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Valandor", detail: "Noble and magical.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Sorion", detail: "Mysterious and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Maelor", detail: "Ancient and wise.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zepharion", detail: "Swift and magical.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Caelumor", detail: "Celestial and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Eltharion", detail: "Ancient and wise.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Arionis", detail: "Graceful and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Galathor", detail: "Noble and magical.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zyrethrin", detail: "Mystical and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Faelorin", detail: "Magical and graceful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Valorian", detail: "Noble and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Caelithor", detail: "Celestial and wise.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Aerindor", detail: "Graceful and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Eldarion", detail: "Wise and ancient.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Sorindor", detail: "Mysterious and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zyreth", detail: "Mystical and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Maelion", detail: "Ancient and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Thalorian", detail: "Noble and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Galadornis", detail: "Wise and noble.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Ariondor", detail: "Graceful and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zephyrion", detail: "Swift and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Valarion", detail: "Noble and magical.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Eryndorion", detail: "Ancient and wise.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Eldarionis", detail: "Wise and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Malcorion", detail: "Dark and intense.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Therionis", detail: "Powerful and enigmatic.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Sorindorion", detail: "Mysterious and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Galadornir", detail: "Wise and noble.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Aeltharion", detail: "Ancient and wise.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Valamirion", detail: "Noble and magical.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Zyndorion", detail: "Mystical and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Caelumirion", detail: "Celestial and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Sorionis", detail: "Mysterious and strong.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Eldarionis", detail: "Wise and powerful.", status: false, gender: "male", type: "arcane_half_elf" },
      { name: "Elara", detail: "Graceful and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Sylphira", detail: "Ethereal and magical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Faelithra", detail: "Magical and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Caelithra", detail: "Celestial and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Zephyra", detail: "Swift and airy.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Valindra", detail: "Noble and magical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Elyndra", detail: "Graceful and mysterious.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Myrrhiel", detail: "Elegant and mystical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Aeliana", detail: "Ancient and wise.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Thaloria", detail: "Noble and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Elysira", detail: "Ethereal and magical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Zyndra", detail: "Mystical and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Maelis", detail: "Graceful and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Faelira", detail: "Magical and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Elindra", detail: "Ethereal and powerful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Sylvana", detail: "Graceful and wise.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Zephyris", detail: "Swift and airy.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Valaria", detail: "Noble and powerful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Illyria", detail: "Mystical and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Thalindra", detail: "Graceful and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Aelith", detail: "Ancient and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Caelara", detail: "Celestial and powerful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Eryndra", detail: "Mystical and wise.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Faeloria", detail: "Magical and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Sylendra", detail: "Graceful and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Myrrhyn", detail: "Ethereal and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Ellysia", detail: "Graceful and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Zephyrina", detail: "Swift and magical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Thaliel", detail: "Noble and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Aerilyth", detail: "Graceful and powerful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Caelindra", detail: "Celestial and wise.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Elyndra", detail: "Graceful and mysterious.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Faelindra", detail: "Magical and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Sylphara", detail: "Ethereal and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Myrrhiel", detail: "Elegant and mystical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Zephylra", detail: "Swift and magical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Aerindra", detail: "Graceful and powerful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Elyndria", detail: "Ethereal and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Caelindra", detail: "Celestial and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Elathra", detail: "Ethereal and magical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Sylvaris", detail: "Graceful and wise.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Thaliria", detail: "Noble and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Aeliana", detail: "Ancient and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Faelara", detail: "Magical and strong.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Myrrhynna", detail: "Elegant and mystical.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Zyndra", detail: "Mystical and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Elythra", detail: "Ethereal and powerful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Sylphara", detail: "Ethereal and graceful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Valiria", detail: "Noble and powerful.", status: false, gender: "female", type: "arcane_half_elf" },
      { name: "Thalithra", detail: "Graceful and strong.", status: false, gender: "female", type: "arcane_half_elf" },
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
        name: "Greek Name Generator",
        pic: "/greek.webp",
        link: "https://www.nameideagenerator.com/greek-name-generator",
    },
    {
        name: "Demon Name Generator",
        pic: "/demonpic.jpg",
        link: "https://www.nameideagenerator.com/demon-name-generator",
    },
    {
        name: "DragonBorn Name Generator",
        pic: "bg-dragonborn.webp",
        link: "https://www.nameideagenerator.com/dragonborn-name-generator",
    },
    ];

const HalfElfNameGenerator = () => {
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

    const bgImage = "/half-demon.webp"
    const context = " Half Elf Name Generator"
    const Q1 = "Do Half-Elf names have to sound Elvish?"
    const A1 = "Not always. Some lean more toward human names. Others sound more Elvish. You can go either way. Or pick something that blends both."
    const Q2 = "How do I find a name that fits my character’s story?"
    const A2 = "You should think about your character’s background. Did they grow up in an elven city? Were they raised by humans? The generator helps you test different styles until something clicks."
    const Q3 = "Why do some names sound similar in fantasy games?"
    const A3 = "Many names follow similar fantasy naming rules. That’s why you’ll find repeating sounds or endings. But our generator mixes things up to help you stand out."
    const Q4 = "Do Half-Elf names follow real-world language rules?"
    const A4 = "Not exactly. Some names take inspiration from real languages, but most are built to sound magical, unique, or fitting for fantasy worlds."
    const Q5 = "Can I save names I like from the generator?"
    const A5 = "Yes! Just jot them down or copy them while you try others. There’s no limit, so keep building your list till one stands out."


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
        <a href="/half-elf-name-generator" className="hover:underline text-[#343a40]">Half Elf Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                          Random Half Elf Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Half Elf Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="mystic_half_elf">Mystic Half-Elf</option>
                            <option value="noble_half_elf">Noble Half-Elf</option>
                            <option value="wild_half_elf">Wild Half-Elf</option>
                            <option value="arcane_half_elf">Arcane Half-Elf</option>

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
                         Find the Perfect Name for Your Half-Elf Character
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                            You can’t just toss a random name on a half-elf and hope it sticks. It needs to sound like it belongs. Part elven grace, part human grit. 
                            A good name tells a story. It hints at magic, mystery, or maybe just a bit of family drama. You don’t want a name that feels flat. 
                            You want something that sounds like it could echo through ancient forests or echo off the walls of a thieves’ guild.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                            It’s important to get the name right from the start. That one detail shapes how your character feels at the table. 
                            You’re building a half-elf who straddles two worlds, so the name needs to carry that weight. 
                            That’s where a Half Elf Name Generator saves time and stress. 
                            It gives you names that feel real, rich, and ready to drop into your campaign without sounding forced or generic.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[32px] text-[24px] text-center">
                      How Does Our Half Elf Name Generator Work
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                       You don’t need to stress over name choices. Just follow these simple steps and let the tool do the magic. It’s quick, easy, and actually fun.
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                            Step 1: Choose a Gender
                            </h3>
                            <p>
                            Start by selecting male or female. That way, the generator gives you names that match your character’s vibe right from the start.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                            Step 2: Choose a Type
                            </h3>
                            <p>
                            Pick how elven or human you want the name to sound. You get full control over the balance, so it fits your world perfectly.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                            Step 3: Hit Generate
                            </h3>
                            <p>
                            Click the button once and get fresh names instantly. No delays, no boring loading screens.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                            Step 4: Hover to See Meaning
                            </h3>
                            <p>
                            Want to add a bit of story behind the name? Just hover over it to see where it comes from or what it means.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                             Keep Tweaking
                            </h3>
                            <p>
                            Didn’t find “the one”? No problem. Adjust your settings and click again. The right name is just a few clicks away.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="half1.jpeg"
                            alt="Half Elf Name Generator | DnD Half Elf Name Generator With Meaning"
                            className="w-[300px] my-[10px] h-[350px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="half2.jpg"
                            alt="Half Elf Name Generator | DnD Half Elf Name Generator With Meaning"
                            className="w-[300px] h-[350px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/half elf name generator bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Half Elf Name Generator
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
                    Why Use Our Half Elf Name Generator?
                    </h2>
                    <p class="sm:text-[22px] text-[16px] font-semibold">
                    Stop wasting time searching for names. Our tool gives you exactly what you need in just a few clicks. Here’s why it’s the perfect choice:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[80%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold">
                                Generate Unique Names Instantly
                                </h3>
                                <p>
                                 No more scrolling through long lists. Get unique, creative names right away with just a click.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold ">
                                Customize Based on Gender and Elf-Human Mix
                                </h3>
                                <p>
                                Choose the perfect blend of elven and human influences to match your character's background.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold ">
                                Great for D&D, Fantasy Games, and Stories
                                </h3>
                                <p>
                                Ideal for Dungeons & Dragons, novels, and RPGs. Create memorable characters with ease.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold ">
                               Hover to See Meaning and Origins
                                </h3>
                                <p>
                                 Quickly learn about each name’s meaning or inspiration to add depth to your character’s backstory.                             
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold ">
                                Fresh Results Every Time
                                </h3>
                                <p>
                                 Say goodbye to repetition. Every click gives you a new, unique name to choose from.                            
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold ">
                                Save Time and Focus on Storytelling
                                </h3>
                                <p>
                                Spend less time searching for names and more time developing your character’s story and world.                          
                                 </p>
                            </div>
                             <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold ">
                                Names with Real Significance
                                </h3>
                                <p>
                                 Get names that feel right for your character, with meanings that reflect their identity and role.                          
                                 </p>
                            </div>
                             <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[22px] text-[18px] sm:font-normal font-semibold ">
                                 Perfect for Immersive Worldbuilding
                                </h3>
                                <p>
                                  A great name sets the tone for your character and helps create a richer, more engaging world.                       
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[50%] relative">
                        <img
                            src="Half-Elf.webp"
                            alt="Half-Elf"
                            class="w-[350px] my-[40px] h-[380px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Half-Elf.jpg"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[380px] my-[-30px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>

            <section class="bg-white py-12 px-4 md:px-8 lg:px-16">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Half-Elves in Fantasy: What Makes Them Unique?</h2>
                <p class="text-gray-700 text-lg mb-4">
                Half-elves are a unique mix of human and elven traits. They inherit the longevity, agility, and magic of elves,
                combined with the versatility and creativity of humans. This blend gives them a fascinating position, often
                leaving them feeling caught between two worlds.
                </p>
                <p class="text-gray-700 text-lg">
                In many fantasy settings, half-elves play important roles as adventurers, diplomats, or outcasts. Their dual
                heritage makes them highly adaptable, excelling in both physical combat and magic. This flexibility allows them to
                fit into a wide range of stories, often seeking to define their identity while bridging cultures.
                </p>
            </div>
            </section>
            <section class="text-center py-12 px-4 md:px-8 lg:px-16">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Popular Half-Elf Names and What They Mean</h2>
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    
                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Aerendyl</h3>
                        <p class="text-gray-700 text-base">A mix of "Aeren" (spirit or air) and "dyl," representing the ethereal and the grounded.</p>
                    </div>

                    <div class="bg-gray-200 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Eldrin</h3>
                        <p class="text-gray-700 text-base">Combines "Eld" (fire) with "rin" (one who is), symbolizing a fiery spirit.</p>
                    </div>

                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Lyanna</h3>
                        <p class="text-gray-700 text-base">Blends "Lyan" with the elven suffix "-na," suggesting beauty and strength.</p>
                    </div>

                    <div class="bg-gray-200 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Caelum</h3>
                        <p class="text-gray-700 text-base">Derived from Latin for "sky," it reflects a sense of freedom and longing.</p>
                    </div>

                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Thalion</h3>
                        <p class="text-gray-700 text-base">From "Thal" (strength) and "ion" (son of), used for a resilient and noble character.</p>
                    </div>

                    <div class="bg-gray-200 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Sirius</h3>
                        <p class="text-gray-700 text-base">A celestial name, evoking a bright star — ideal for a mysterious half-elf.</p>
                    </div>

                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Mirel</h3>
                        <p class="text-gray-700 text-base">An elven-rooted name suggesting one who is "worthy" or "noble."</p>
                    </div>

                    </div>
                </div>
                </section>
                <section class="bg-white py-12 px-4 md:px-8 lg:px-16">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Half-Elf Lore in Dungeons &amp; Dragons</h2>
                    <p class="text-gray-700 text-lg mb-4">
                    You’ll spot half-elves in almost every D&amp;D campaign. They bridge two worlds. Human ambition and elven grace.
                    That mix makes them charming, adaptable, and often misunderstood.
                    </p>
                    <p class="text-gray-700 text-lg mb-4">
                    In gameplay, half-elves get bonuses to Charisma and two other abilities of your choice, making them perfect for bards,
                    sorcerers, or even clever rogues.
                    </p>
                    <p class="text-gray-700 text-lg mb-4">
                    Unlike full elves, they aren’t tied to ancient traditions. Unlike humans, they don’t fully belong in fast-paced cities.
                    That makes them natural adventurers. Restless and curious.
                    </p>
                    <p class="text-gray-700 text-lg">
                    Just like tieflings, who walk their own tightrope between planes. If you're working on a whole party of unique characters,
                    check out our <a href="/tiefling-name-generator" class="text-indigo-450 font-medium">Tiefling Name Generator </a>
                     too. It pairs nicely with your half-elf hero for a dynamic duo full of flair.
                    </p>
                </div>
                </section>
                <section class=" py-12 px-4 md:px-8 lg:px-16">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Fun Facts About Half-Elves</h2>
                    <ul class="list-disc list-inside text-gray-700 text-lg space-y-3">
                    <li>Often seen as natural diplomats thanks to their balanced heritage</li>
                    <li>Blend elven grace with human adaptability in both looks and mindset</li>
                    <li>Age slower than humans but don’t quite match elven longevity</li>
                    <li>Known for high charisma and social skills in most D&amp;D campaigns</li>
                    <li>Commonly face identity struggles. Belong to both worlds, yet fully accepted by neither</li>
                    </ul>
                </div>
                </section>
                <section class="bg-white py-12 px-4 md:px-8 lg:px-16">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">How Do Half-Elf Names Reflect Their Dual Heritage?</h2>
                    
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">

                    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Elven Sounds in the Mix</h3>
                        <p class="text-gray-700 text-base">
                        You’ll often notice soft sounds, flowing syllables, and melodic tones in Half-Elf names.
                        Many draw from traditional Elvish language—like Aerendyl or Thaloril—which echo the lyrical style of full elves.
                        But Half-Elves add their own twist with human influence.
                        </p>
                    </div>

                    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Shorter Names from Humans</h3>
                        <p class="text-gray-700 text-base">
                        Half-Elves might favor names like Kael or Rina—short, punchy, and rooted in practicality.
                        These names reflect their human side: grounded, direct, and easy to remember.
                        </p>
                    </div>

                    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Names from Two Worlds</h3>
                        <p class="text-gray-700 text-base">
                        A Half-Elf born in a human city might carry a human first name and elvish surname—or vice versa.
                        Their name reveals who raised them, where they belong, and how their identity blends two distinct legacies.
                        </p>
                    </div>

                    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Each Name Has a Meaning</h3>
                        <p class="text-gray-700 text-base">
                        Half-Elf names often carry hidden symbolism. Sylvarin might mean “child of the forest.”
                        Doran could suggest strength or wisdom. Their names merge elvish poetry with human values.
                        </p>
                    </div>

                    </div>
                </div>
                </section>
                <section class=" py-12 px-4 md:px-8 lg:px-16">
                <div class="max-w-5xl pb-10 mx-auto">
                    <h2 class="text-3xl text-center font-bold text-gray-800 mb-8">Half-Elf Name Trends in Fantasy</h2>
                    
                    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    
                    <div class="bg-gray-200 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Balanced Between Two Worlds</h3>
                        <p class="text-gray-700 text-base">
                        Most Half-Elf names strike a balance—part elven elegance, part human simplicity. 
                        In fantasy games like <span class="italic">Baldur’s Gate</span> or <span class="italic">Elder Scrolls</span>, 
                        names such as Elandor or Lirael reflect this hybrid identity. The flow of the name mirrors their blended roots.
                        </p>
                    </div>

                    <div class="bg-gray-200 border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Mystery & Nature Themes</h3>
                        <p class="text-gray-700 text-base">
                        Writers often lean toward names that hint at nature or carry an air of mystery—like Rowan, Faelar, or Isil. 
                        These names emphasize the Half-Elf’s unique place in the world. Neither fully human nor fully elven, their name tells that tale.
                        </p>
                    </div>

                    </div>
                </div>
                    <hr />
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
          <a href="https://www.nameideagenerator.com/contact-us" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black text-[20px] px-[40px] py-[8px] rounded-[10px] font-semibold">
                Request
            </button>
           </a>
        </div>
                </motion.div>
            </div>
            <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
            <Footer  />
        </motion.div>
    );
};

export default HalfElfNameGenerator;

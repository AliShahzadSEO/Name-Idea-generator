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
    const Q1 = "How does the Half Elf Name Generator work?"
    const A1 = "The Half-Elf Name Generator uses a database of carefully curated names inspired by both human and elven cultures. It combines elements from both to create unique and fitting names for half-elves."
    const Q2 = "Are the generated names suitable for a fantasy world?"
    const A2 = "Yes, names are tailor-made to fit seamlessly within the realms of fantasy, especially when half-elves become part of the lore. Whether it is literature, gaming, or just plain creative writing, the names will evoke the right atmosphere."
    const Q3 = "Can I use the generated names for commercial purposes?"
    const A3 = "These generated names are completely free. It's always good to look through the terms of use that the generator provided with the result in case some limitations apply mainly to commercial projects."
    const Q4 = "How accurate and authentic are the names generated by the Half-Elf Name Generator?"
    const A4 = "The generator aims for authenticity drawn from established naming conventions found in fantasy literature and gaming cultures. The names are fictional. They are tailored to align with the attributes that are normally associated with half-elves."
    const Q5 = "Can I suggest names or provide feedback to improve the Half-Elf Name Generator?"
    const A5 = "Feedback is always welcome! Many generators rely on user input to refine their algorithms and expand their databases. Look for feedback options or contact information provided by the generator to share your thoughts."


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
                            About Us
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        This Half-Elf Name Generator is a specialized tool designed to help you effortlessly create unique and culturally rich names for Half-Elf characters. Whether you're working on a game, story, 
                        or any other creative project, our elven name generator tool simplifies the process by generating imaginative names based on your preferences.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        By inputting your desired criteria, such as cultural influences or stylistic preferences, the generator provides a tailored list of names that are both accurate and meaningful. 
                        Our elven name generator with meaning tool ensures that you can find the perfect name for your character with ease, saving you time and effort.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Additionally, our elf name generator dnd tool is built with robust security features, including encryption technology, to protect your data and ensure the privacy of your saved lists and personal information.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Half Elf Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Follow these steps to generate unique Half-Elf names:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1: Specify Gender
                            </h3>
                            <p>
                            Select the gender for the half-elf name, which helps in generating names that fit gender-specific naming conventions in elven cultures. 
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2: Select the Type
                            </h3>
                            <p>
                            Choose the type of half-elf name you desire, such as mystical, traditional, or modern, to refine the style of names generated.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3: Click on Generate
                            </h3>
                            <p>
                            Hit the "Generate" button to create a list of half-elf names based on your preferences.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4: Review Names and Their Meanings
                            </h3>
                            <p>
                            Names will appear on your screen. Hover over each to see details like meaning, origin, and the lore behind the name.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="half1.jpeg"
                            alt="Half Elf Name Generator | DnD Half Elf Name Generator With Meaning"
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="half2.jpg"
                            alt="Half Elf Name Generator | DnD Half Elf Name Generator With Meaning"
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                    Why Should You Opt For Our DnD Half Elf Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Your convenience is our top priority, and nothing matters more to us. That’s why we’ve meticulously designed our tool to be the ideal choice for all our users.  
                    <br /> <br />
                    While it offers many impressive features, the following stand out as the key reasons you should give it a try. These features make our tool unique and essential for your creative needs.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Vast Name Database
                                </h3>
                                <p>
                                Our High Half Elf Name Generator taps into an extensive database filled with thousands of unique and culturally rich names. 
                                Each name is designed to resonate with the mystical essence of Half-Elves, ensuring your characters have names that stand out in any narrative or game.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                User-Friendly Interface
                                </h3>
                                <p>
                                Navigating our tool is a breeze, thanks to its intuitive design. You can generate names with just a few clicks, 
                                making it easy for anyone to find the perfect name quickly and efficiently without getting bogged down by complex settings.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                High-Quality Name Suggestions
                                </h3>
                                <p>
                                Our Half-Elf Name Generator tool doesn’t just generate random names; it provides well-crafted suggestions that embody the elegant and mysterious nature of Half-Elves. 
                                These names are carefully curated to maintain a balance between fantasy and believability, perfect for enriching your storytelling.                               
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Consistent Updates
                                </h3>
                                <p>
                                We regularly update our name database to include fresh and inspired options. This means you’ll always have access to new, 
                                creative names that reflect the evolving trends in fantasy literature and gaming, keeping your characters relevant and intriguing.                               
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Accessible Anytime, Anywhere
                                </h3>
                                <p>
                                Whether you’re brainstorming at home or on the go, our Half-Elf Name Generator is accessible on any device with an internet connection. 
                                This convenience ensures you can create and save names whenever inspiration strikes.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                No Registration Required
                                </h3>
                                <p>
                                We respect your time and privacy. You can use our tool immediately without the hassle of signing up or providing personal information. 
                                Generate and save names effortlessly, keeping your creative process smooth and uninterrupted.                           
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="Half-Elf.webp"
                            alt="Half-Elf"
                            class="w-[350px] my-[30px] h-[430px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Half-Elf.jpg"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className=" py-[30px]  mx-auto">
                    <section class="w-[80%] mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">What are the Applications of the Half-Elf Name Generator?</h2>
                        <p class="text-gray-600 mb-4">
                        The Half-Elf Name Generator adds convenience and accuracy to the process of finding the perfect name. There are various uses for the generator, some of which are highlighted as follows:
                        </p>
                        <div class="py-[10px] flex flex-col gap-2">
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Character’s Name
                            </h3>
                            <p class="text-gray-600 mb-4">
                            It helps you find unique Half-Elf names for characters in stories, games, or other creative projects. This can be used to add cultural depth and accuracy to your work.
                            </p>
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Username Creation
                            </h3>
                            <p class="text-gray-600 mb-4">
                            It makes creating unique and imaginative usernames easier. This can help you stand out online with a name that reflects your interests.
                            </p>
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Personal Use
                            </h3>
                            <p class="text-gray-600 mb-4">
                            It enables you to find a Half-Elf name for personal projects, such as creating a pseudonym or exploring fantasy themes. This can bring a personal touch to your work or online presence.
                            </p>
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Research and Learning
                            </h3>
                            <p class="text-gray-600 mb-4">
                            It facilitates researchers and students in finding accurate Half-Elf names for their projects or studies. This can help ensure the authenticity and creativity of their work.
<br /><br />
Try our Half-Elf Name Generator today to explore its advanced features and find the perfect name for your needs.
</p>
                        </div>
                    </section>
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
            <Footer  />
        </motion.div>
    );
};

export default HalfElfNameGenerator;

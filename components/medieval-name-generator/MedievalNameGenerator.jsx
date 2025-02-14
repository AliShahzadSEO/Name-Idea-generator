"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Eadric", detail: "A strong, ancient name meaning prosperous ruler, typically from noble lineage.", status: false, gender: "Male", type: "Old English" },
    { name: "Alaric", detail: "A powerful king name, meaning ruler of all, often associated with leadership and bravery.", status: false, gender: "Male", type: "Old English" },
    { name: "Oswin", detail: "A noble warrior name, meaning God’s friend, commonly used by Saxon leaders.", status: false, gender: "Male", type: "Old English" },
    { name: "Beorn", detail: "A name meaning warrior or bear, strong and fierce, often used by fighters and soldiers.", status: false, gender: "Male", type: "Old English" },
    { name: "Wulfric", detail: "A name meaning wolf ruler, associated with strength and leadership.", status: false, gender: "Male", type: "Old English" },
    { name: "Aethelred", detail: "A name meaning noble counsel, historically used by Anglo-Saxon kings.", status: false, gender: "Male", type: "Old English" },
    { name: "Edmund", detail: "A name meaning fortunate protector, widely used in English history.", status: false, gender: "Male", type: "Old English" },
    { name: "Godric", detail: "Meaning God's ruler, often given to those with strong faith and noble roots.", status: false, gender: "Male", type: "Old English" },
    { name: "Hereward", detail: "A legendary warrior name, meaning army guardian.", status: false, gender: "Male", type: "Old English" },
    { name: "Leofric", detail: "A name meaning dear ruler, commonly associated with ancient English nobility.", status: false, gender: "Male", type: "Old English" },
    { name: "Oswald", detail: "A name meaning God's power, often associated with leadership and courage.", status: false, gender: "Male", type: "Old English" },
    { name: "Edric", detail: "A name meaning rich ruler, typically used for someone of high status.", status: false, gender: "Male", type: "Old English" },
    { name: "Tostig", detail: "An old warrior name, symbolizing strength and honor in battle.", status: false, gender: "Male", type: "Old English" },
    { name: "Ethelbert", detail: "Meaning noble, bright, often used for those in positions of leadership.", status: false, gender: "Male", type: "Old English" },
    { name: "Thurstan", detail: "A name meaning Thor’s stone, often associated with bravery and strength.", status: false, gender: "Male", type: "Old English" },
    { name: "Hrothgar", detail: "A royal name meaning famous spear, associated with heroic deeds.", status: false, gender: "Male", type: "Old English" },
    { name: "Wulfstan", detail: "A strong name meaning wolf stone, symbolizing fierceness and resilience.", status: false, gender: "Male", type: "Old English" },
    { name: "Alfric", detail: "A name meaning elf ruler, typically used for those with noble bloodlines.", status: false, gender: "Male", type: "Old English" },
    { name: "Edgar", detail: "A name meaning prosperous spear, widely used among English royalty.", status: false, gender: "Male", type: "Old English" },
    { name: "Cedric", detail: "A name meaning kindly, loved, often associated with a noble and wise character.", status: false, gender: "Male", type: "Old English" },
    { name: "Aelfric", detail: "A name meaning elf ruler, used for someone noble with wisdom and power.", status: false, gender: "Male", type: "Old English" },
    { name: "Godwin", detail: "Meaning friend of God, often associated with peace and divine protection.", status: false, gender: "Male", type: "Old English" },
    { name: "Edwyn", detail: "A name meaning wealthy friend, symbolizing prosperity and support.", status: false, gender: "Male", type: "Old English" },
    { name: "Balthric", detail: "A rare name meaning bold ruler, often used in the early medieval period.", status: false, gender: "Male", type: "Old English" },
    { name: "Ethelwulf", detail: "A name meaning noble wolf, often associated with royalty and leadership.", status: false, gender: "Male", type: "Old English" },
    { name: "Aethelwynn", detail: "A name meaning noble friend, often given to daughters of high rank.", status: false, gender: "Female", type: "Old English" },
    { name: "Wulfrun", detail: "A name meaning wolf’s secret, symbolizing strength and secrecy.", status: false, gender: "Female", type: "Old English" },
    { name: "Leofrun", detail: "A name meaning dear secret, often associated with wisdom and grace.", status: false, gender: "Female", type: "Old English" },
    { name: "Eadgyth", detail: "A name meaning prosperous war, symbolizing both wealth and strength.", status: false, gender: "Female", type: "Old English" },
    { name: "Ethelind", detail: "A name meaning noble, bright, often given to girls of noble heritage.", status: false, gender: "Female", type: "Old English" },
    { name: "Althea", detail: "A name meaning healer, symbolizing compassion and care.", status: false, gender: "Female", type: "Old English" },
    { name: "Oswynn", detail: "A name meaning God’s joy, symbolizing divine happiness and grace.", status: false, gender: "Female", type: "Old English" },
    { name: "Edwina", detail: "A name meaning wealthy friend, symbolizing prosperity and companionship.", status: false, gender: "Female", type: "Old English" },
    { name: "Godgifu", detail: "A name meaning God’s gift, often associated with grace and blessings.", status: false, gender: "Female", type: "Old English" },
    { name: "Beatrice", detail: "A name meaning she who brings happiness, symbolizing joy and love.", status: false, gender: "Female", type: "Old English" },
    { name: "Aelfwynn", detail: "A name meaning elf friend, often given to girls of noble lineage.", status: false, gender: "Female", type: "Old English" },
    { name: "Edith", detail: "A name meaning prosperous in war, symbolizing strength and success.", status: false, gender: "Female", type: "Old English" },
    { name: "Wulfritha", detail: "A name meaning wolf strength, often associated with power and resilience.", status: false, gender: "Female", type: "Old English" },
    { name: "Gytha", detail: "A name meaning war, often given to girls with a strong and brave spirit.", status: false, gender: "Female", type: "Old English" },
    { name: "Hilda", detail: "A name meaning battle woman, symbolizing strength and valor.", status: false, gender: "Female", type: "Old English" },
    { name: "Aethelburh", detail: "A name meaning noble protection, given to girls of noble birth.", status: false, gender: "Female", type: "Old English" },
    { name: "Winfleda", detail: "A name meaning joy and peace, symbolizing serenity and happiness.", status: false, gender: "Female", type: "Old English" },
    { name: "Elswyth", detail: "A name meaning divine strength, often given to girls with a noble and powerful spirit.", status: false, gender: "Female", type: "Old English" },
    { name: "Mildred", detail: "A name meaning gentle strength, often used for girls with a kind heart.", status: false, gender: "Female", type: "Old English" },
    { name: "Griselda", detail: "A name meaning grey battle maid, often associated with wisdom and strength.", status: false, gender: "Female", type: "Old English" },
    { name: "Wynflaed", detail: "A name meaning joy of battle, symbolizing strength and happiness.", status: false, gender: "Female", type: "Old English" },
    { name: "Maerwynn", detail: "A name meaning famous joy, often used for girls with radiant personalities.", status: false, gender: "Female", type: "Old English" },
    { name: "Ositha", detail: "A name meaning God’s protection, symbolizing divine favor and care.", status: false, gender: "Female", type: "Old English" },
    { name: "Winfleda", detail: "A name meaning joy and peace, symbolizing serenity and happiness.", status: false, gender: "Female", type: "Old English" },
    { name: "Eadric", detail: "A strong, ancient name meaning prosperous ruler, typically from noble lineage.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Oswin", detail: "A noble warrior name, meaning God’s friend, commonly used by Saxon leaders.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Wulf", detail: "A name meaning wolf, symbolizing strength and independence.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Aelfric", detail: "A name meaning elf ruler, typically used for someone noble with wisdom and power.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Alaric", detail: "A powerful king name, meaning ruler of all, often associated with leadership and bravery.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Oswald", detail: "A name meaning God's power, often associated with leadership and courage.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Beorn", detail: "A name meaning warrior or bear, strong and fierce, often used by fighters and soldiers.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Wulfric", detail: "A name meaning wolf ruler, associated with strength and leadership.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Ethel", detail: "A name meaning noble, often used as a short form for names meaning noble or bright.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Edric", detail: "A name meaning rich ruler, typically used for someone of high status.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Godwin", detail: "Meaning friend of God, often associated with peace and divine protection.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Edith", detail: "A name meaning prosperous in war, symbolizing strength and success.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Cedric", detail: "A name meaning kindly, loved, often associated with a noble and wise character.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Tostig", detail: "An old warrior name, symbolizing strength and honor in battle.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Alden", detail: "A name meaning old friend, symbolizing wisdom and companionship.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Gwyneth", detail: "A name meaning blessed or fair, often given to those with a graceful presence.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Ethelwulf", detail: "A name meaning noble wolf, often associated with royalty and leadership.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Hilda", detail: "A name meaning battle woman, symbolizing strength and valor.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Aethelred", detail: "A name meaning noble counsel, historically used by Anglo-Saxon kings.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Edgar", detail: "A name meaning prosperous spear, widely used among English royalty.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Wynflaed", detail: "A name meaning joy of battle, symbolizing strength and happiness.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Wulfrun", detail: "A name meaning wolf’s secret, symbolizing strength and secrecy.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Leofric", detail: "A name meaning dear ruler, commonly associated with ancient English nobility.", status: false, gender: "Unisex", type: "Old English" },
    { name: "Ragnar", detail: "A warrior's name, symbolizing power and might.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Bjorn", detail: "Meaning bear, symbolizing strength and bravery.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Thorvald", detail: "A name meaning Thor’s ruler, often associated with strength and leadership.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Olaf", detail: "Meaning ancestor’s relic, symbolizing a strong heritage and legacy.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Gunnar", detail: "Meaning battle strong, symbolizing valor and courage.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Sigurd", detail: "A legendary hero’s name, meaning victory guard.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Erik", detail: "Meaning eternal ruler, symbolizing authority and wisdom.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Leif", detail: "A name meaning descendant or heir, symbolizing legacy and adventure.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Harald", detail: "A name meaning ruler of the army, symbolizing strength and leadership.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Eirik", detail: "Meaning eternal king, symbolizing long-lasting power and dominance.", status: false, gender: "Male", type: "Old Norse" },
{ name: "Freya", detail: "Goddess of love and beauty, symbolizing femininity and grace.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Astrid", detail: "Meaning divine strength, symbolizing wisdom and resilience.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Ingrid", detail: "Meaning beautiful or fair, symbolizing elegance and charm.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Sigrun", detail: "A name meaning victory rune, symbolizing triumph and protection.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Helga", detail: "Meaning blessed or holy, symbolizing purity and grace.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Thora", detail: "Meaning thunder, symbolizing strength and resilience.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Gunhild", detail: "A name meaning battle maiden, symbolizing valor and courage.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Solveig", detail: "A name meaning sun strength, symbolizing warmth and energy.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Yrsa", detail: "Meaning wild she-bear, symbolizing power and freedom.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Alva", detail: "Meaning elf, symbolizing elegance and mysticism.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Brynhild", detail: "Meaning armored battle woman, symbolizing protection and might.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Signy", detail: "Meaning victory, symbolizing strength and success.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Gudrun", detail: "A name meaning god’s secret, symbolizing wisdom and mystery.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Kari", detail: "Meaning pure or chaste, symbolizing innocence and beauty.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Ragna", detail: "Meaning advice, symbolizing wisdom and guidance.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Thyra", detail: "A name meaning thunder, symbolizing strength and power.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Hilda", detail: "Meaning battle woman, symbolizing courage and tenacity.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Freydis", detail: "Meaning noblewoman, symbolizing royalty and grace.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Eir", detail: "Meaning mercy, symbolizing healing and care.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Gudbjorg", detail: "Meaning god’s help, symbolizing protection and wisdom.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Runa", detail: "Meaning secret, symbolizing mystery and intrigue.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Skadi", detail: "A name meaning goddess of winter, symbolizing strength and independence.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Bjork", detail: "Meaning birch tree, symbolizing life and renewal.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Olina", detail: "Meaning light, symbolizing clarity and brilliance.", status: false, gender: "Female", type: "Old Norse" },
{ name: "Bjorn", detail: "Meaning bear, symbolizing strength and bravery.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Astrid", detail: "Meaning divine strength, symbolizing wisdom and resilience.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Leif", detail: "Meaning descendant or heir, symbolizing legacy and adventure.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Thor", detail: "God of thunder, symbolizing power and strength.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Freya", detail: "Goddess of love and beauty, symbolizing femininity and grace.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Harald", detail: "A name meaning ruler of the army, symbolizing strength and leadership.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Yngvar", detail: "Meaning ancestor’s warrior, symbolizing heritage and valor.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Sigrid", detail: "Meaning beautiful victory, symbolizing beauty and success.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Thorvald", detail: "Meaning Thor’s ruler, symbolizing strength and leadership.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Solveig", detail: "Meaning sun strength, symbolizing warmth and energy.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Sigrun", detail: "Meaning victory rune, symbolizing triumph and protection.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Eirik", detail: "Meaning eternal ruler, symbolizing authority and wisdom.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Hakon", detail: "Meaning high son, symbolizing nobility and leadership.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Runa", detail: "Meaning secret, symbolizing mystery and intrigue.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Magnus", detail: "Meaning great, symbolizing greatness and power.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Gudrun", detail: "Meaning god’s secret, symbolizing wisdom and mystery.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Olaf", detail: "Meaning ancestor’s relic, symbolizing a strong heritage and legacy.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Erik", detail: "Meaning eternal king, symbolizing long-lasting power and dominance.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Ingrid", detail: "Meaning beautiful or fair, symbolizing elegance and charm.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Brynjar", detail: "Meaning warrior’s son, symbolizing strength and legacy.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Gudbjorg", detail: "Meaning god’s help, symbolizing protection and wisdom.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Kari", detail: "Meaning pure or chaste, symbolizing innocence and beauty.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Astrid", detail: "Meaning divine strength, symbolizing wisdom and resilience.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Rurik", detail: "Meaning famous ruler, symbolizing legacy and leadership.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Vidar", detail: "Meaning forest god, symbolizing nature and strength.", status: false, gender: "Unisex", type: "Old Norse" },
{ name: "Augustus", detail: "The revered emperor, symbolizing leadership and power.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Julius", detail: "A name of prominent Roman leaders, symbolizing strength and authority.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Maximus", detail: "Meaning greatest, symbolizing power and honor.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Cassius", detail: "Meaning hollow, symbolizing intelligence and strategy.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Tiberius", detail: "A name of Roman emperors, symbolizing greatness and history.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Antonius", detail: "A prominent Roman family name, symbolizing power and wealth.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Gaius", detail: "Meaning joyous, symbolizing vitality and leadership.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Decimus", detail: "Meaning tenth, symbolizing honor and victory.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Lucius", detail: "Meaning light, symbolizing clarity and brightness.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Marcus", detail: "A name of great Roman emperors, symbolizing authority and power.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Septimus", detail: "Meaning seventh, symbolizing balance and tradition.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Octavian", detail: "The first Roman emperor, symbolizing greatness and strength.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Flavius", detail: "A prominent Roman family name, symbolizing nobility and heritage.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Aurelian", detail: "Meaning golden, symbolizing power and brilliance.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Cornelius", detail: "Meaning horn, symbolizing strength and leadership.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Valerius", detail: "Meaning strength, symbolizing resilience and courage.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Claudius", detail: "A name of emperors, symbolizing authority and governance.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Quintus", detail: "Meaning fifth, symbolizing balance and strategy.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Vibius", detail: "A name of Roman origin, symbolizing nobility and class.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Pompeius", detail: "A name of powerful Roman generals, symbolizing victory and conquest.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Proculus", detail: "A rare Roman name, symbolizing nobility and heritage.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Severus", detail: "Meaning strict, symbolizing discipline and strength.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Appius", detail: "Meaning an ancient Roman family name, symbolizing wisdom and nobility.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Fabius", detail: "Meaning bean grower, symbolizing growth and prosperity.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Vespasian", detail: "A name of an emperor, symbolizing power and history.", status: false, gender: "Male", type: "Old Roman" },
{ name: "Livia", detail: "A name of Roman nobility, symbolizing elegance and grace.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Julia", detail: "A prominent Roman name, symbolizing beauty and nobility.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Cornelia", detail: "Meaning horn, symbolizing strength and honor.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Octavia", detail: "A Roman family name, symbolizing nobility and leadership.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Tullia", detail: "A Roman name, symbolizing nobility and grace.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Aurelia", detail: "Meaning golden, symbolizing wealth and beauty.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Antonia", detail: "A Roman name, symbolizing strength and authority.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Marcia", detail: "Meaning martial, symbolizing strength and valor.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Claudia", detail: "A name of Roman origin, symbolizing nobility and leadership.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Flavia", detail: "Meaning golden-haired, symbolizing beauty and nobility.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Liviana", detail: "A name meaning full of life, symbolizing vitality and grace.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Agrippina", detail: "Meaning belonging to the family of Agrippa, symbolizing power and strength.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Valeria", detail: "Meaning strength, symbolizing courage and resilience.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Fabia", detail: "Meaning bean grower, symbolizing growth and prosperity.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Severina", detail: "A name meaning strict, symbolizing discipline and strength.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Aemilia", detail: "Meaning rival, symbolizing competitiveness and strength.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Faustina", detail: "Meaning fortunate, symbolizing luck and success.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Domitia", detail: "A Roman name, symbolizing nobility and grace.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Vibia", detail: "Meaning lively, symbolizing joy and energy.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Sempronia", detail: "A Roman family name, symbolizing strength and honor.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Galeria", detail: "Meaning young woman, symbolizing beauty and grace.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Hortensia", detail: "Meaning garden flower, symbolizing beauty and serenity.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Calpurnia", detail: "Meaning chalice, symbolizing elegance and grace.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Sabina", detail: "Meaning of the Sabine people, symbolizing strength and heritage.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Portia", detail: "A name meaning pig, symbolizing tenacity and determination.", status: false, gender: "Female", type: "Old Roman" },
{ name: "Julius", detail: "A name of prominent Roman leaders, symbolizing strength and authority.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Aurelius", detail: "Meaning golden, symbolizing wealth and power.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Tiberius", detail: "A name of Roman emperors, symbolizing greatness and history.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Flavius", detail: "A prominent Roman family name, symbolizing nobility and heritage.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Marcius", detail: "A name of Roman origin, symbolizing strength and leadership.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Livia", detail: "A name of Roman nobility, symbolizing elegance and grace.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Maximus", detail: "Meaning greatest, symbolizing power and honor.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Claudia", detail: "A name of Roman origin, symbolizing nobility and leadership.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Octavius", detail: "A name meaning eighth, symbolizing distinction and leadership.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Valeria", detail: "Meaning strength, symbolizing courage and resilience.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Cornelius", detail: "Meaning horn, symbolizing strength and leadership.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Agrippa", detail: "Meaning born by the water, symbolizing strength and wisdom.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Domitian", detail: "A name of emperors, symbolizing power and authority.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Severus", detail: "Meaning strict, symbolizing discipline and strength.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Aurelian", detail: "Meaning golden, symbolizing power and brilliance.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Vibius", detail: "A name of Roman origin, symbolizing nobility and class.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Antonia", detail: "A Roman name, symbolizing strength and authority.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Antonius", detail: "A prominent Roman family name, symbolizing power and wealth.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Tullius", detail: "A Roman family name, symbolizing honor and distinction.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Fabius", detail: "Meaning bean grower, symbolizing growth and prosperity.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Livia", detail: "A name of Roman nobility, symbolizing elegance and grace.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Proculus", detail: "A rare Roman name, symbolizing nobility and heritage.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Sextus", detail: "Meaning sixth, symbolizing balance and harmony.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Juliana", detail: "Meaning youthful, symbolizing vitality and joy.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Aemilius", detail: "Meaning rival, symbolizing competitiveness and strength.", status: false, gender: "Unisex", type: "Old Roman" },
{ name: "Bran", detail: "Meaning raven, symbolizing intelligence and mystery.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Ciaran", detail: "Meaning little dark one, symbolizing mystery and depth.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Finian", detail: "Meaning fair, symbolizing brightness and purity.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Caelan", detail: "Meaning powerful warrior, symbolizing strength and bravery.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Alistair", detail: "Meaning defender of the people, symbolizing protection and courage.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Eamon", detail: "Meaning wealthy protector, symbolizing strength and prosperity.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Darragh", detail: "Meaning oak tree, symbolizing stability and endurance.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Aedan", detail: "Meaning little fire, symbolizing passion and vitality.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Fergus", detail: "Meaning strong man, symbolizing power and leadership.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Lachlan", detail: "Meaning from the fjord-land, symbolizing adventure and exploration.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Emory", detail: "Meaning brave, symbolizing courage and resilience.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Padrig", detail: "Meaning noble, symbolizing honor and integrity.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Ruaridh", detail: "Meaning red-haired king, symbolizing strength and leadership.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Torin", detail: "Meaning chief, symbolizing authority and leadership.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Donal", detail: "Meaning world ruler, symbolizing power and authority.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Conall", detail: "Meaning strong wolf, symbolizing courage and resilience.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Niall", detail: "Meaning champion, symbolizing victory and strength.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Tadhg", detail: "Meaning poet, symbolizing wisdom and creativity.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Bleddyn", detail: "Meaning wolf, symbolizing strength and protection.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Malachy", detail: "Meaning follower of God, symbolizing spirituality and devotion.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Iain", detail: "Meaning God is gracious, symbolizing divine favor and kindness.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Riordan", detail: "Meaning royal poet, symbolizing wisdom and creativity.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Dermot", detail: "Meaning free from envy, symbolizing kindness and contentment.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Keiran", detail: "Meaning little dark one, symbolizing mystery and intrigue.", status: false, gender: "Male", type: "Old Celtic" },
{ name: "Odhran", detail: "Meaning little green one, symbolizing life and renewal.", status: false, gender: "Male", type: "Old Celtic" },

{ name: "Aislinn", detail: "Meaning dream or vision, symbolizing imagination and insight.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Eilis", detail: "Meaning God is my oath, symbolizing faith and devotion.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Rhiannon", detail: "Meaning great queen, symbolizing power and grace.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Niamh", detail: "Meaning bright, symbolizing beauty and light.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Fionnuala", detail: "Meaning white shoulder, symbolizing purity and beauty.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Aoife", detail: "Meaning radiant, symbolizing beauty and brightness.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Brigid", detail: "Meaning strength or power, symbolizing resilience and grace.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Caoimhe", detail: "Meaning gentle, symbolizing kindness and grace.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Siobhan", detail: "Meaning God is gracious, symbolizing divine favor and kindness.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Carys", detail: "Meaning love, symbolizing affection and passion.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Nessa", detail: "Meaning miracle, symbolizing wonder and grace.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Alannah", detail: "Meaning dear child, symbolizing love and affection.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Mairead", detail: "Meaning pearl, symbolizing purity and beauty.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Aine", detail: "Meaning brightness, symbolizing radiance and joy.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Eimear", detail: "Meaning swift, symbolizing agility and grace.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Sorcha", detail: "Meaning radiant, symbolizing light and brilliance.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Meabh", detail: "Meaning she who intoxicates, symbolizing allure and strength.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Clodagh", detail: "Meaning river, symbolizing flow and tranquility.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Orla", detail: "Meaning golden princess, symbolizing royalty and beauty.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Dervla", detail: "Meaning true, symbolizing honesty and integrity.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Ciara", detail: "Meaning dark-haired, symbolizing mystery and beauty.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Maeve", detail: "Meaning she who intoxicates, symbolizing power and allure.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Enya", detail: "Meaning little bird, symbolizing freedom and lightness.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Isolt", detail: "Meaning ice ruler, symbolizing power and clarity.", status: false, gender: "Female", type: "Old Celtic" },
{ name: "Caitriona", detail: "Meaning pure, symbolizing innocence and grace.", status: false, gender: "Female", type: "Old Celtic" },

{ name: "Aidan", detail: "Meaning little fire, symbolizing passion and warmth.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Rian", detail: "Meaning king, symbolizing leadership and power.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Eamon", detail: "Meaning wealthy protector, symbolizing strength and prosperity.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Finn", detail: "Meaning fair, symbolizing brightness and purity.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Ciaran", detail: "Meaning little dark one, symbolizing mystery and depth.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Rowan", detail: "Meaning little redhead, symbolizing passion and strength.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Taran", detail: "Meaning thunder, symbolizing power and energy.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Larkin", detail: "Meaning fierce, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Kieran", detail: "Meaning little dark one, symbolizing mystery and intrigue.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Eilis", detail: "Meaning God is my oath, symbolizing faith and devotion.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Celyn", detail: "Meaning holly, symbolizing protection and resilience.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Fallon", detail: "Meaning leader, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Aisling", detail: "Meaning dream or vision, symbolizing imagination and insight.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Morgan", detail: "Meaning sea-born, symbolizing freedom and adaptability.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Sloane", detail: "Meaning raider, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Lugh", detail: "Meaning light, symbolizing brightness and strength.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Rhiannon", detail: "Meaning great queen, symbolizing power and grace.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Briar", detail: "Meaning thorny bush, symbolizing resilience and beauty.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Soren", detail: "Meaning thunder, symbolizing strength and power.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Kelsey", detail: "Meaning brave, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Tadhg", detail: "Meaning poet, symbolizing wisdom and creativity.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Darian", detail: "Meaning rich, symbolizing prosperity and success.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Cormac", detail: "Meaning charioteer, symbolizing strength and leadership.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Fionn", detail: "Meaning fair, symbolizing purity and brightness.", status: false, gender: "Unisex", type: "Old Celtic" },
{ name: "Alva", detail: "Meaning white, symbolizing purity and clarity.", status: false, gender: "Unisex", type: "Old Celtic" }

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
      name: "Kingdom Name Generator",
      pic: "/kingdom-name-generator.jpeg",
      link: "https://www.nameideagenerator.com/kingdom-name-generator",
  },
  {
      name: "Greek Name Generator",
      pic: "/greek.webp",
      link: "https://www.nameideagenerator.com/greek-name-generator",
  },
  {
      name: "Norse Name Generator",
      pic: "/Norse.jpg",
      link: "https://www.nameideagenerator.com/norse-name-generator",
  },
  {
      name: "Viking Name Generator",
      pic: "/vikings.jpg",
      link: "https://www.nameideagenerator.com/viking-name-generator",
  },
  ];
  
  const MedievalNameGenerator = () => {
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
  
const bgImage = "/dark-fantasy-character-Medieval-Names.avif"
const context = "Medieval Name Generator with Meaning"
const Q1 = "Are These Names Historically Accurate?"
const A1 = "Yes! Our Medieval Name Generator draws from authentic historical and linguistic research, ensuring the names provided are rooted in real-world traditions and cultures. Each name is carefully selected to reflect its historical and cultural origin, ensuring that it is not only meaningful but also true to its medieval roots."

const Q2 = "Can I Use These Names in My Projects?"
const A2 = "Absolutely! Whether you're writing a fantasy novel, designing characters for an RPG, or creating immersive worlds in video games, the names generated by our tool are perfect for all types of creative projects. They add authenticity and depth to any story or character, enhancing the overall experience for your audience."

const Q3 = "Can I Generate Names for Both Male and Female Characters?"
const A3 = "Yes, our generator offers names for both male and female characters. You can choose the gender option that best suits your project and get customized results that reflect the cultural and historical context of the name. This feature ensures that you have a wide variety of options for every character in your story or game."

const Q4 = "Are These Names Suitable for Fantasy and Historical Fiction?"
const A4 = "Our Medieval Name Generator is ideal for both fantasy and historical fiction projects. Whether you're creating characters for a high-fantasy epic or writing a medieval-inspired historical novel, our tool provides names that fit the tone and style of your story. From epic warriors to legendary monarchs, you'll find names that enhance the authenticity and depth of your characters."

const Q5 = "How Many Names Can I Generate at Once?"
const A5 = "You can generate multiple names at once with our tool. Once you select your desired categories and preferences, you can instantly create a list of names to choose from. Whether you need just one unique name or a list of options, our generator provides the flexibility to suit your needs."
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
        <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40]">Cultural and Historical Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/medieval-name-generator" className="hover:underline text-[#343a40]">Medieval Name Generator with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Medieval Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender of Medieval Name</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="UniSex">UniSex</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Category of Medieval Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Old English">Old English </option>
              <option value="Old Norse">Old Norse </option>
              <option value="Old Roman">Old Roman </option>
              <option value="Old Celtic">Old Celtic </option>
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
            What Is a Medieval Name?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            A medieval name reflects the heritage and traditions of the Middle Ages. These names often hold deep meanings, making them ideal for characters in historical fiction, 
            fantasy novels, and RPGs. Examples include Aldric (Old English for “wise ruler”) and Brynhild (Old Norse for “armored maiden”).
            </p>
            <h3 className="sm:text-[20px] text-[16px] font-semibold">
            The Importance of Medieval Names in Fantasy World-Building:
              </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Medieval names add richness and believability to your stories. 
            They create a bridge to the past, providing context and enhancing the immersive experience for readers and players alike.
            </p>
            
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Choose a Medieval Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Medieval names evoke a sense of history, culture, and storytelling, perfect for enhancing your creative projects. By choosing names based on Old English, Old Norse, 
            Old Roman, or Old Celtic traditions, you ensure your characters resonate with historical authenticity.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Medieval Name Generator
          </h2>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose the Gender <b> (Male, Female,UniSex)</b>:
              </h3>
              <p>
              Start by selecting the gender—male, female, or unisex—to narrow down your options.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Category<b> (Old English, Old Norse, Old Roman, Old Celtic)</b>:
              </h3>
              <p>
              Choose from Old English, Old Norse, Old Roman, or Old Celtic categories based on your character's cultural background.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: <b> Generate </b>Names Instantly
              </h3>
              <p>
              Click <b> "Generate"</b> to receive a list of names tailored to your preferences, complete with their meanings and origins.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Explore Name Meanings
              </h3>
              <p>
              Dive into the meanings and significance behind each name to ensure it aligns with your story or game setting.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="Medieval-Name-generator.jpg"
              alt="Chinese Name Generator Tool"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="Medieval-greeek-Name-generator.jpg"
              alt="Chinese Name Generator Tool"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/carl-nilsson-beautyshot06.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Medieval Name Generator
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
          <b> Unique Features of Our Medieval Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Diverse Historical Options
            </h3>
            <p>
            Our Medieval Name Generator offers a rich selection of names drawn from four unique historical and cultural backgrounds: Old English, Old Norse, Old Roman, and Old Celtic. 
            Whether you're looking for a traditional Anglo-Saxon name like Edwin or a powerful Norse name like Freydis, 
            you can easily explore and select names that perfectly align with your character’s heritage and role
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Meaningful Results
            </h3>
            <p>
            Every name generated by our tool is accompanied by its authentic meaning and cultural origin. 
            These meaningful insights help you understand the deeper significance behind each name, whether it represents strength, wisdom, nobility, or nature. 
            For instance, Aldric (Old English) means "wise ruler," while Ragnar (Old Norse) means "warrior of judgment," providing the perfect narrative foundation for your character.        
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Name Generation
            </h3>
            <p>
            With just a click, you can instantly generate a list of medieval names that match your chosen gender, category, and style preferences. 
            Whether you need a name for a heroic knight, a mystical sorceress, or a powerful ruler, our generator provides instant results, saving you time while ensuring the perfect name for your project. 
            Plus, you’ll receive several options to choose from, allowing you to explore multiple possibilities.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Perfect for Writers and Gamers
            </h3>
            <p>
            Our generator is not just for writers creating historical fiction or fantasy worlds; it's also an invaluable tool for gamers designing characters in RPGs, video games, 
            or tabletop role-playing scenarios. Whether you're naming a character for a game or crafting a protagonist in your next novel, 
            the Medieval Name Generator offers rich, evocative names that fit seamlessly into any immersive story, game world, or creative project.
            </p>
            <br />
            <h2 className="sm:text-[26px] text-[28px]">
            Role of Medieval Names in Storytelling and World-Building
          </h2>
          <p>
          Medieval names are an essential element of storytelling, providing depth and authenticity to your fantasy or historical world. 
          A name like Ragnar or Adelaide helps set the tone, establishing your characters’ roles and origins. This adds immersive detail to your narrative, captivating your audience.
          </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Categories of Medieval Names You Can Generate
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Old English Medieval Names
              </h3>
              <p>
              Names like <b>Edwin</b> (meaning "wealthy friend") and <b> Godiva </b>(meaning "gift of God") reflect the Anglo-Saxon heritage. 
              These names are perfect for characters who embody strength and nobility.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Old Norse Medieval Names
              </h3>
              <p>
              Inspired by Viking culture, names like <b> Ragnar</b> (meaning "warrior of judgment") and <b>Freydis</b> (meaning "noblewoman") bring a sense of adventure and mythology to your characters.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Old Roman Medieval Names  
              </h3>
              <p>
              Classic Roman names such as <b> Marcus </b>(meaning "dedicated to Mars") and <b> Claudia</b> (meaning "strong despite adversity") are timeless, adding a regal touch to your creations.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Old Celtic Medieval Names
              </h3>
              <p>
              Celtic names like <b> Cian</b> (meaning "ancient") and <b>Eithne</b> (meaning "kernels or seeds") carry a mystical and magical quality, perfect for characters rooted in folklore.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Types of Names by Gender
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Male Medieval Names
              </h3>
              <p>
              Powerful male names such as <b>William</b> and <b>Alaric</b> are ideal for kings, warriors, and knights. These names evoke leadership and strength, making them perfect for heroic figures.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Female Medieval Names
              </h3>
              <p>
              Elegant female names like <b>Matilda</b> (meaning "battle strength") and <b>Isolde</b> (meaning "ice ruler") offer a blend of grace and power, suitable for queens and heroines.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Unisex Medieval Names
              </h3>
              <p>
              Versatile unisex names such as <b>Morgan</b> and <b>Robin</b> can fit any character, adding flexibility to your storytelling. These names often symbolize adaptability and resilience.
              </p>
            </div>
            <p>
            Our <b> Chinese Name Generator</b> makes exploring these categories effortless. You can quickly generate names with meanings that match your preferences. 
            The tool saves time and ensures you find culturally appropriate and creative names in just a few clicks.
              </p>
              <br />
            <h2 className="sm:text-[26px] text-[28px]">
            Characteristics of Memorable Medieval Names
          </h2>
          <p>
          Memorable medieval names stand out because of their cultural significance and historical depth. 
          They often symbolize traits like bravery (<b>Leif</b>, meaning "heir"), beauty (<b>Eleanor</b>, meaning "bright light"), 
          or mysticism (<b>Merlin</b>, meaning "sea fortress"). These characteristics make them timeless and impactful.
          </p>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[85%] mx-auto text-[#343a40] my-[50px] h-[120vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Medieval Names from History and Lore
          </h2>
        <hr />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Legendary Names from History
              </h3>
              <p>
              Names from history have left a lasting impact due to their association with strength, leadership, and valor. 
              These historical figures continue to inspire and influence modern storytelling. Here are a few iconic names:
              <br /><br />
              <ul>
                <li>- <b>Eleanor of Aquitaine</b> – Queen consort of France and England, known for her political influence and strength.</li>
                <li>- <b>Richard the Lionheart</b> – English king celebrated for his leadership and bravery during the Crusades.</li>
                <li>- <b>Charlemagne </b> – King of the Franks and Emperor of the Holy Roman Empire, symbolizing power and unification.</li>
                <li>- <b>William the Conqueror</b> – First Norman King of England, famous for his victory at the Battle of Hastings.</li>
                <li>- <b>Joan of Arc</b> – A French heroine and military leader, known for her courage and unwavering faith.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Fantasy-Inspired Medieval Names
              </h3>
              <p>
              Fantasy literature has birthed countless memorable names that evoke a sense of adventure, nobility, and magic. 
              These names have become symbolic of larger-than-life characters. Here are some iconic fantasy-inspired names:
              <br /><br />
              <ul>
                <li>- <b>Aragorn (The Lord of the Rings) </b> – A ranger and king who embodies honor, leadership, and courage.</li>
                <li>- <b>Guinevere (Arthurian Legends)</b>– The beautiful and tragic queen, known for her connection to King Arthu</li>
                <li>- <b>Merlin (Arthurian Legends)</b> – A wise and powerful wizard, representing magic, wisdom, and mysticism.</li>
                <li>- <b>Lancelot (Arthurian Legends)</b> – A legendary knight, famous for his loyalty and love for Queen Guinevere.</li>
                <li>- <b>Gandalf (The Lord of the Rings)</b> – The wizard who brings wisdom, guidance, and hope to the people of Middle-earth.</li>
              </ul>
              </p>
            </div>
            
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="warrior-medieval-war-character-panorama-background_974629-198205.jpg"
              alt="Chinese Name Generator Tool"
              className="w-[380px] my-[20px] h-[360px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
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

export default MedievalNameGenerator;

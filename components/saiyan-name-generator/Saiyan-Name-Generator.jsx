

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Kakarot Vortan", detail: "Name meaning 'powerful warrior,' symbolizing strength and dominance.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Vegeta Toran", detail: "Name associated with 'pride,' symbolizing noble and fierce nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Raditz Kalzar", detail: "Name meaning 'powerful destroyer,' symbolizing strength and destruction.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Nappa Dranax", detail: "Name associated with 'strength,' symbolizing robust and formidable presence.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goku Zarion", detail: "Name meaning 'heroic warrior,' symbolizing bravery and heroism.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Gohan Voran", detail: "Name associated with 'compassion,' symbolizing caring and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Trunks Kryton", detail: "Name meaning 'brave fighter,' symbolizing courage and resilience.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Bardock Kylor", detail: "Name associated with 'ancient power,' symbolizing ancestral strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Broly Xantra", detail: "Name meaning 'legendary warrior,' symbolizing immense power and fame.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Radditz Toran", detail: "Name associated with 'fierce warrior,' symbolizing aggressive strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goten Krossan", detail: "Name meaning 'young hero,' symbolizing youth and potential.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Tarble Zeon", detail: "Name associated with 'quiet strength,' symbolizing calm but powerful nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Cabba Drakon", detail: "Name meaning 'dragon warrior,' symbolizing fierceness and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Kale Zorak", detail: "Name associated with 'warrior spirit,' symbolizing a fierce and determined nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Caulifla Rynor", detail: "Name meaning 'brave fighter,' symbolizing courage and resilience.", status: false, gender: "male", type: "saiyan_name" },
    { name: "King Vegeta Zarnak", detail: "Name associated with 'royal power,' symbolizing regal and dominant nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Nappa Xandar", detail: "Name meaning 'unstoppable force,' symbolizing immense power and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Kakar Zorak", detail: "Name associated with 'heroic warrior,' symbolizing bravery and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Bardock Vortan", detail: "Name meaning 'ancient strength,' symbolizing a powerful lineage.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goku Xeron", detail: "Name associated with 'legendary hero,' symbolizing great valor and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Vegeta Krytor", detail: "Name meaning 'proud warrior,' symbolizing noble and powerful nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Radditz Kaldor", detail: "Name associated with 'fierce warrior,' symbolizing intense strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Broly Varron", detail: "Name meaning 'legendary fighter,' symbolizing great strength and fame.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Tarble Zarek", detail: "Name associated with 'quiet strength,' symbolizing calm but powerful nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goten Krydon", detail: "Name meaning 'young warrior,' symbolizing potential and bravery.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Cabba Toron", detail: "Name associated with 'dragon strength,' symbolizing fierce and powerful nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Kale Vondar", detail: "Name meaning 'warrior spirit,' symbolizing fierce determination and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Caulifla Drakar", detail: "Name associated with 'brave fighter,' symbolizing courage and resilience.", status: false, gender: "male", type: "saiyan_name" },
    { name: "King Bardock Zaran", detail: "Name meaning 'royal power,' symbolizing regal and commanding nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Nappa Rynon", detail: "Name associated with 'unstoppable force,' symbolizing immense power.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goku Thorian", detail: "Name meaning 'heroic might,' symbolizing great bravery and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Vegeta Xorak", detail: "Name associated with 'proud warrior,' symbolizing noble and fierce nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Radditz Vorkin", detail: "Name meaning 'fierce strength,' symbolizing intense and powerful presence.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Broly Zalor", detail: "Name associated with 'legendary power,' symbolizing immense strength and renown.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Tarble Vynor", detail: "Name meaning 'quiet strength,' symbolizing calm but potent presence.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goten Zorax", detail: "Name associated with 'young hero,' symbolizing bravery and potential.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Cabba Drakos", detail: "Name meaning 'dragon warrior,' symbolizing fierce and powerful nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Kale Vortan", detail: "Name associated with 'warrior spirit,' symbolizing intense and determined nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Caulifla Zoran", detail: "Name meaning 'brave fighter,' symbolizing courage and resilience.", status: false, gender: "male", type: "saiyan_name" },
    { name: "King Vegeta Kalon", detail: "Name associated with 'royal might,' symbolizing regal and commanding power.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Nappa Dracon", detail: "Name meaning 'unmatched force,' symbolizing immense power and strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Kakarot Zethor", detail: "Name associated with 'powerful warrior,' symbolizing great strength and bravery.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Vegeta Rynor", detail: "Name meaning 'proud leader,' symbolizing noble and powerful nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Raditz Xaron", detail: "Name associated with 'fierce destroyer,' symbolizing aggressive strength.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Bardock Toran", detail: "Name meaning 'ancient warrior,' symbolizing a powerful and storied lineage.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goku Zaloran", detail: "Name associated with 'heroic force,' symbolizing great bravery and might.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Broly Kryndor", detail: "Name meaning 'legendary fighter,' symbolizing immense power and reputation.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Tarble Vornak", detail: "Name associated with 'quiet strength,' symbolizing calm and formidable presence.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Goten Zalon", detail: "Name meaning 'young hero,' symbolizing potential and bravery.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Cabba Rykor", detail: "Name associated with 'dragon warrior,' symbolizing fierce and powerful nature.", status: false, gender: "male", type: "saiyan_name" },
    { name: "Bulma Xara", detail: "Name meaning 'bright star,' symbolizing beauty and intelligence.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Chi-Chi Liora", detail: "Name associated with 'light,' symbolizing purity and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Videl Zira", detail: "Name meaning 'courageous,' symbolizing bravery and determination.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Pan Mira", detail: "Name associated with 'hope,' symbolizing optimism and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Bra Zana", detail: "Name meaning 'young warrior,' symbolizing potential and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Kale Rynna", detail: "Name associated with 'strong spirit,' symbolizing resilience and bravery.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Caulifla Tiora", detail: "Name meaning 'brave leader,' symbolizing courage and leadership.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Kakarina Xella", detail: "Name associated with 'powerful presence,' symbolizing strength and impact.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Gina Xylor", detail: "Name meaning 'gentle strength,' symbolizing grace and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Nina Taria", detail: "Name associated with 'noble spirit,' symbolizing dignity and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Toma Zira", detail: "Name meaning 'brave heart,' symbolizing courage and determination.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Sana Kyra", detail: "Name associated with 'pure soul,' symbolizing purity and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Mira Kandra", detail: "Name meaning 'warrior queen,' symbolizing strength and leadership.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Lina Zara", detail: "Name associated with 'beautiful strength,' symbolizing grace and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Rita Xara", detail: "Name meaning 'radiant light,' symbolizing beauty and inner strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Nia Vella", detail: "Name associated with 'bright spirit,' symbolizing positivity and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Jina Voris", detail: "Name meaning 'brave warrior,' symbolizing courage and resilience.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Vara Zorn", detail: "Name associated with 'strong will,' symbolizing determination and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Kira Rynna", detail: "Name meaning 'brave soul,' symbolizing courage and resilience.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Fina Liora", detail: "Name associated with 'light spirit,' symbolizing purity and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Lara Kylor", detail: "Name meaning 'noble warrior,' symbolizing bravery and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Mara Zaran", detail: "Name associated with 'strong heart,' symbolizing courage and resilience.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Nora Xyra", detail: "Name meaning 'bright warrior,' symbolizing light and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Tara Drenna", detail: "Name associated with 'brave heart,' symbolizing courage and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Zira Kaldra", detail: "Name meaning 'radiant warrior,' symbolizing strength and light.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Vera Rynor", detail: "Name associated with 'brave spirit,' symbolizing courage and determination.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Kara Zyria", detail: "Name meaning 'strong queen,' symbolizing leadership and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Mira Xara", detail: "Name associated with 'radiant strength,' symbolizing beauty and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Lina Vora", detail: "Name meaning 'beautiful warrior,' symbolizing grace and courage.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Rina Talar", detail: "Name associated with 'brave heart,' symbolizing courage and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Veda Xana", detail: "Name meaning 'noble warrior,' symbolizing dignity and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Lora Daria", detail: "Name associated with 'bright spirit,' symbolizing positivity and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Sina Ryla", detail: "Name meaning 'brave soul,' symbolizing resilience and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Nyla Voria", detail: "Name associated with 'strong heart,' symbolizing courage and resilience.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Rita Liora", detail: "Name meaning 'radiant strength,' symbolizing light and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Nina Zara", detail: "Name associated with 'beautiful strength,' symbolizing grace and courage.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Kira Thalia", detail: "Name meaning 'brave spirit,' symbolizing courage and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Mara Zalen", detail: "Name associated with 'strong leader,' symbolizing power and resilience.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Vara Xena", detail: "Name meaning 'warrior queen,' symbolizing leadership and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Zara Mira", detail: "Name associated with 'radiant light,' symbolizing beauty and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Kira Zandra", detail: "Name meaning 'brave warrior,' symbolizing courage and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Lara Vella", detail: "Name associated with 'noble spirit,' symbolizing dignity and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Nora Kira", detail: "Name meaning 'bright soul,' symbolizing inner strength and courage.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Mara Zara", detail: "Name associated with 'beautiful strength,' symbolizing grace and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Fina Xyra", detail: "Name meaning 'pure strength,' symbolizing clarity and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Jina Vella", detail: "Name associated with 'brave heart,' symbolizing courage and resilience.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Vera Kora", detail: "Name meaning 'strong leader,' symbolizing leadership and strength.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Zira Taria", detail: "Name associated with 'radiant courage,' symbolizing bravery and light.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Lina Mira", detail: "Name meaning 'bright warrior,' symbolizing strength and clarity.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Sana Zara", detail: "Name associated with 'beautiful strength,' symbolizing grace and power.", status: false, gender: "female", type: "saiyan_name" },
    { name: "Rex Taran", detail: "Name associated with 'king of the storm,' symbolizing leadership and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Kian Voran", detail: "Name meaning 'brave warrior,' symbolizing courage and valor.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jorik Xaran", detail: "Name associated with 'dark strength,' symbolizing resilience and power.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Dane Rykor", detail: "Name meaning 'noble warrior,' symbolizing honor and might.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Leo Thoran", detail: "Name associated with 'lion's strength,' symbolizing bravery and leadership.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Marek Zorin", detail: "Name meaning 'powerful guardian,' symbolizing protection and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Ryker Vantor", detail: "Name associated with 'dark fury,' symbolizing intense power and determination.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jax Drakor", detail: "Name meaning 'dragon's might,' symbolizing formidable strength and courage.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Talon Kryos", detail: "Name associated with 'sharp edge,' symbolizing precision and agility.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Vince Kael", detail: "Name meaning 'victorious warrior,' symbolizing triumph and power.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Zane Rynor", detail: "Name associated with 'mighty storm,' symbolizing strength and intensity.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Kade Thrax", detail: "Name meaning 'warrior's might,' symbolizing strength and resolve.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Milo Zarek", detail: "Name associated with 'powerful shield,' symbolizing protection and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jace Vornar", detail: "Name meaning 'valiant fighter,' symbolizing courage and determination.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Rion Xelar", detail: "Name associated with 'storm's wrath,' symbolizing fierce power and intensity.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Derek Lyan", detail: "Name meaning 'dark shield,' symbolizing protection and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Aric Vortan", detail: "Name associated with 'strong leader,' symbolizing authority and power.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Kendric Zalon", detail: "Name meaning 'brave protector,' symbolizing courage and defense.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Voss Kryden", detail: "Name associated with 'mighty warrior,' symbolizing strength and valor.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Rael Taran", detail: "Name meaning 'storm's fury,' symbolizing intense power and rage.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Rex Xylar", detail: "Name associated with 'king of the storm,' symbolizing dominance and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Kian Zorak", detail: "Name meaning 'brave protector,' symbolizing courage and defense.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jorik Drakon", detail: "Name associated with 'dragon's strength,' symbolizing fierce power and courage.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Dane Krytor", detail: "Name meaning 'noble warrior,' symbolizing honor and might.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Leo Varik", detail: "Name associated with 'lion's might,' symbolizing bravery and leadership.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Marek Rynor", detail: "Name meaning 'powerful guardian,' symbolizing protection and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Ryker Xander", detail: "Name associated with 'dark fury,' symbolizing intense power and determination.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jax Vornak", detail: "Name meaning 'dragon's might,' symbolizing formidable strength and courage.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Talon Zorin", detail: "Name associated with 'sharp edge,' symbolizing precision and agility.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Vince Kryden", detail: "Name meaning 'victorious warrior,' symbolizing triumph and power.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Zane Thorne", detail: "Name associated with 'mighty storm,' symbolizing strength and intensity.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Kade Drakar", detail: "Name meaning 'warrior's might,' symbolizing strength and resolve.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Milo Xaran", detail: "Name associated with 'powerful shield,' symbolizing protection and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jace Zorak", detail: "Name meaning 'valiant fighter,' symbolizing courage and determination.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Rion Vartor", detail: "Name associated with 'storm's wrath,' symbolizing fierce power and intensity.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Derek Kael", detail: "Name meaning 'dark shield,' symbolizing protection and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Aric Rykor", detail: "Name associated with 'strong leader,' symbolizing authority and power.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Kendric Taran", detail: "Name meaning 'brave protector,' symbolizing courage and defense.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Voss Drakon", detail: "Name associated with 'mighty warrior,' symbolizing strength and valor.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Rael Vorn", detail: "Name meaning 'storm's fury,' symbolizing intense power and rage.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Rex Lian", detail: "Name associated with 'king of the storm,' symbolizing dominance and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Kian Varik", detail: "Name meaning 'brave protector,' symbolizing courage and defense.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jorik Kryos", detail: "Name associated with 'dragon's strength,' symbolizing fierce power and courage.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Dane Zorak", detail: "Name meaning 'noble warrior,' symbolizing honor and might.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Leo Xelar", detail: "Name associated with 'lion's might,' symbolizing bravery and leadership.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Marek Thrax", detail: "Name meaning 'powerful guardian,' symbolizing protection and strength.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Ryker Vintor", detail: "Name associated with 'dark fury,' symbolizing intense power and determination.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Jax Kryden", detail: "Name meaning 'dragon's might,' symbolizing formidable strength and courage.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Talon Zane", detail: "Name associated with 'sharp edge,' symbolizing precision and agility.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Vince Rion", detail: "Name meaning 'victorious warrior,' symbolizing triumph and power.", status: false, gender: "male", type: "half_saiyan_name" },
    { name: "Ava Liora", detail: "Name associated with 'radiant light,' symbolizing beauty and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Mara Zeira", detail: "Name meaning 'noble spirit,' symbolizing dignity and courage.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Tara Nyra", detail: "Name associated with 'brave heart,' symbolizing courage and resilience.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Lia Zara", detail: "Name meaning 'bright soul,' symbolizing inner strength and clarity.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Juno Rynna", detail: "Name associated with 'radiant courage,' symbolizing bravery and light.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Fina Vella", detail: "Name meaning 'pure strength,' symbolizing clarity and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Nia Thalia", detail: "Name associated with 'beautiful strength,' symbolizing grace and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Kira Zyla", detail: "Name meaning 'brave warrior,' symbolizing courage and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Rina Kyra", detail: "Name associated with 'radiant heart,' symbolizing bravery and beauty.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Luna Mira", detail: "Name meaning 'moonlight soul,' symbolizing tranquility and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Zara Vella", detail: "Name associated with 'bright strength,' symbolizing light and resilience.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Nina Ria", detail: "Name meaning 'radiant soul,' symbolizing beauty and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Mira Kendra", detail: "Name associated with 'bright leader,' symbolizing strength and leadership.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Lina Zara", detail: "Name meaning 'bright strength,' symbolizing clarity and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Ria Dalia", detail: "Name associated with 'beautiful light,' symbolizing grace and radiance.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Tara Nyra", detail: "Name meaning 'brave heart,' symbolizing courage and resilience.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Vera Siana", detail: "Name associated with 'noble strength,' symbolizing dignity and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Jina Lyra", detail: "Name meaning 'bright soul,' symbolizing beauty and courage.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Kira Rynna", detail: "Name associated with 'radiant heart,' symbolizing bravery and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Lia Zara", detail: "Name meaning 'bright strength,' symbolizing clarity and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Mara Juna", detail: "Name associated with 'noble spirit,' symbolizing dignity and courage.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Fina Zara", detail: "Name meaning 'pure strength,' symbolizing clarity and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Nia Kyra", detail: "Name associated with 'beautiful strength,' symbolizing grace and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Rina Luna", detail: "Name meaning 'radiant moon,' symbolizing tranquility and light.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Luna Vella", detail: "Name associated with 'moonlight soul,' symbolizing beauty and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Zara Mira", detail: "Name meaning 'bright strength,' symbolizing radiance and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Nina Talia", detail: "Name associated with 'radiant beauty,' symbolizing elegance and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Mira Vella", detail: "Name meaning 'bright strength,' symbolizing clarity and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Lina Nyra", detail: "Name associated with 'bright heart,' symbolizing courage and resilience.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Ria Kyra", detail: "Name meaning 'radiant strength,' symbolizing beauty and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Tara Siana", detail: "Name associated with 'brave light,' symbolizing courage and radiance.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Vera Rynna", detail: "Name meaning 'noble spirit,' symbolizing strength and grace.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Jina Zara", detail: "Name associated with 'bright soul,' symbolizing beauty and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Kira Fina", detail: "Name meaning 'brave spirit,' symbolizing courage and clarity.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Lia Juna", detail: "Name associated with 'bright spirit,' symbolizing beauty and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Mara Kyra", detail: "Name meaning 'noble strength,' symbolizing courage and resilience.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Fina Mira", detail: "Name associated with 'pure light,' symbolizing beauty and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Nia Vella", detail: "Name meaning 'radiant soul,' symbolizing beauty and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Rina Lyra", detail: "Name associated with 'radiant courage,' symbolizing bravery and light.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Luna Zara", detail: "Name meaning 'moonlight strength,' symbolizing beauty and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Zara Nyra", detail: "Name associated with 'bright beauty,' symbolizing elegance and radiance.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Nina Mira", detail: "Name meaning 'radiant moon,' symbolizing light and clarity.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Mira Talia", detail: "Name associated with 'bright strength,' symbolizing beauty and power.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Lina Siana", detail: "Name meaning 'bright light,' symbolizing courage and grace.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Ria Zara", detail: "Name associated with 'radiant beauty,' symbolizing strength and elegance.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Tara Lyra", detail: "Name meaning 'brave soul,' symbolizing courage and resilience.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Vera Luna", detail: "Name associated with 'noble light,' symbolizing beauty and strength.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Jina Vella", detail: "Name meaning 'bright beauty,' symbolizing grace and radiance.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Kira Ria", detail: "Name associated with 'radiant spirit,' symbolizing bravery and light.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Lia Kyra", detail: "Name meaning 'bright soul,' symbolizing strength and courage.", status: false, gender: "female", type: "half_saiyan_name" },
    { name: "Orion Varn", detail: "Name associated with 'stellar strength,' symbolizing cosmic power and leadership.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Ryder Zarek", detail: "Name meaning 'warrior's edge,' symbolizing bravery and sharpness.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Axel Thorne", detail: "Name associated with 'thorn's might,' symbolizing resilience and toughness.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Jaxon Kryden", detail: "Name meaning 'dragon's might,' symbolizing strength and courage.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kaden Rynor", detail: "Name associated with 'storm's fury,' symbolizing power and intensity.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Rylan Vostan", detail: "Name meaning 'warrior's strength,' symbolizing valor and resilience.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Dorian Xelorn", detail: "Name associated with 'mighty spirit,' symbolizing courage and leadership.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Gage Taran", detail: "Name meaning 'brave heart,' symbolizing valor and tenacity.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kian Vornak", detail: "Name associated with 'sharp edge,' symbolizing precision and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Jett Rynor", detail: "Name meaning 'swift warrior,' symbolizing speed and agility.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Zane Krytor", detail: "Name associated with 'dark force,' symbolizing power and determination.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Ryker Zorak", detail: "Name meaning 'fierce guardian,' symbolizing strength and protection.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Vance Drakon", detail: "Name associated with 'dragon's fury,' symbolizing intense power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kael Vortan", detail: "Name meaning 'warrior's strength,' symbolizing bravery and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Mason Xylar", detail: "Name associated with 'strong defender,' symbolizing protection and resilience.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Rhett Varnor", detail: "Name meaning 'brave spirit,' symbolizing courage and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Gideon Zorin", detail: "Name associated with 'mighty warrior,' symbolizing valor and leadership.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Bran Kryden", detail: "Name meaning 'strong guardian,' symbolizing protection and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Nash Thrax", detail: "Name associated with 'powerful edge,' symbolizing intensity and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Cade Zarek", detail: "Name meaning 'brave protector,' symbolizing courage and defense.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Rory Vorn", detail: "Name associated with 'mighty strength,' symbolizing power and resilience.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kane Zalon", detail: "Name meaning 'sharp blade,' symbolizing precision and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Luca Vorta", detail: "Name associated with 'strong force,' symbolizing power and determination.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Rex Drakor", detail: "Name meaning 'dragon king,' symbolizing supreme power and authority.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kian Rynor", detail: "Name associated with 'warrior's strength,' symbolizing valor and endurance.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Jace Thorne", detail: "Name meaning 'thorn's might,' symbolizing resilience and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Vaughn Xaran", detail: "Name associated with 'mighty defender,' symbolizing protection and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Ryker Vortan", detail: "Name meaning 'dark warrior,' symbolizing strength and determination.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Gage Zorin", detail: "Name associated with 'brave protector,' symbolizing valor and resilience.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Orion Krytor", detail: "Name meaning 'stellar force,' symbolizing cosmic strength and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Ryder Xelar", detail: "Name associated with 'sharp warrior,' symbolizing precision and bravery.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Axel Zarek", detail: "Name meaning 'dragon's edge,' symbolizing power and resilience.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Jaxon Varn", detail: "Name associated with 'strong warrior,' symbolizing courage and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kaden Drakon", detail: "Name meaning 'dragon's might,' symbolizing power and bravery.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Rylan Kryden", detail: "Name associated with 'dark strength,' symbolizing resilience and determination.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Dorian Vostan", detail: "Name meaning 'mighty warrior,' symbolizing power and leadership.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Gage Vorn", detail: "Name associated with 'brave strength,' symbolizing courage and protection.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kian Rynor", detail: "Name meaning 'warrior's resilience,' symbolizing strength and endurance.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Jett Thorne", detail: "Name associated with 'sharp edge,' symbolizing precision and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Zane Xylar", detail: "Name meaning 'strong defender,' symbolizing protection and bravery.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Ryker Zorin", detail: "Name associated with 'fierce warrior,' symbolizing strength and courage.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Vance Krytor", detail: "Name meaning 'dark guardian,' symbolizing power and resilience.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Kael Xaran", detail: "Name associated with 'mighty force,' symbolizing strength and leadership.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Mason Zarek", detail: "Name meaning 'brave protector,' symbolizing courage and defense.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Rhett Vorn", detail: "Name associated with 'strong heart,' symbolizing resilience and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Gideon Rynor", detail: "Name meaning 'warrior's strength,' symbolizing bravery and endurance.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Bran Vostan", detail: "Name associated with 'mighty guardian,' symbolizing protection and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Nash Vorn", detail: "Name meaning 'brave defender,' symbolizing courage and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Cade Kryden", detail: "Name associated with 'dark edge,' symbolizing intensity and power.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Rory Xelar", detail: "Name meaning 'mighty warrior,' symbolizing valor and strength.", status: false, gender: "male", type: "saiyan_hybrid_name" },
    { name: "Aurora Zera", detail: "Name meaning 'dawn's light,' symbolizing hope and renewal.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Tessa Liora", detail: "Name associated with 'light of truth,' symbolizing clarity and wisdom.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Maya Thalia", detail: "Name meaning 'blooming strength,' symbolizing beauty and power.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Lila Zara", detail: "Name associated with 'radiant beauty,' symbolizing grace and elegance.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Ivy Mira", detail: "Name meaning 'eternal light,' symbolizing illumination and grace.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Nora Zeira", detail: "Name associated with 'bright moon,' symbolizing serenity and strength.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Eira Rynna", detail: "Name meaning 'moonlit beauty,' symbolizing calmness and allure.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Luna Kyra", detail: "Name associated with 'moonlight strength,' symbolizing beauty and power.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Faye Zara", detail: "Name meaning 'fair beauty,' symbolizing grace and charm.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Sienna Mira", detail: "Name associated with 'radiant grace,' symbolizing elegance and beauty.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Zara Liora", detail: "Name meaning 'bright light,' symbolizing clarity and strength.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Tessa Vella", detail: "Name associated with 'truthful grace,' symbolizing clarity and elegance.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Nina Rynna", detail: "Name meaning 'radiant spirit,' symbolizing light and warmth.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Kira Sienna", detail: "Name associated with 'bright bloom,' symbolizing beauty and vitality.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Mara Faye", detail: "Name meaning 'joyful beauty,' symbolizing happiness and charm.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Eira Luna", detail: "Name associated with 'moonlit grace,' symbolizing elegance and serenity.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Ivy Kyra", detail: "Name meaning 'eternal strength,' symbolizing endurance and beauty.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Lila Vella", detail: "Name associated with 'radiant charm,' symbolizing grace and allure.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Faye Zara", detail: "Name meaning 'fair beauty,' symbolizing charm and elegance.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Aurora Mira", detail: "Name associated with 'dawn's light,' symbolizing renewal and illumination.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Tessa Rynna", detail: "Name meaning 'truthful spirit,' symbolizing clarity and warmth.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Maya Zeira", detail: "Name associated with 'blooming moon,' symbolizing beauty and strength.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Lila Kyra", detail: "Name meaning 'radiant strength,' symbolizing beauty and resilience.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Nora Sienna", detail: "Name associated with 'bright grace,' symbolizing elegance and clarity.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Eira Zara", detail: "Name meaning 'moonlit light,' symbolizing serenity and strength.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Faye Liora", detail: "Name associated with 'fair light,' symbolizing clarity and charm.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Ivy Vella", detail: "Name meaning 'eternal grace,' symbolizing beauty and elegance.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Luna Rynna", detail: "Name associated with 'moonlight spirit,' symbolizing serenity and vitality.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Kira Mira", detail: "Name meaning 'bright spirit,' symbolizing strength and beauty.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Aurora Kyra", detail: "Name associated with 'dawn's strength,' symbolizing power and renewal.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Tessa Lila", detail: "Name meaning 'truthful charm,' symbolizing elegance and grace.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Maya Rynna", detail: "Name associated with 'blooming spirit,' symbolizing vitality and beauty.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Nina Faye", detail: "Name meaning 'radiant charm,' symbolizing elegance and warmth.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Eira Mira", detail: "Name associated with 'moonlit beauty,' symbolizing serenity and grace.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Lila Sienna", detail: "Name meaning 'radiant grace,' symbolizing beauty and charm.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Faye Zeira", detail: "Name associated with 'fair moon,' symbolizing elegance and strength.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Ivy Liora", detail: "Name meaning 'eternal light,' symbolizing illumination and wisdom.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Aurora Vella", detail: "Name associated with 'dawn's charm,' symbolizing grace and renewal.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Tessa Zara", detail: "Name meaning 'truthful beauty,' symbolizing clarity and elegance.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Maya Liora", detail: "Name associated with 'blooming light,' symbolizing beauty and wisdom.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Nora Kyra", detail: "Name meaning 'bright strength,' symbolizing resilience and grace.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Eira Mira", detail: "Name associated with 'moonlit grace,' symbolizing serenity and elegance.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Luna Zeira", detail: "Name meaning 'moonlight beauty,' symbolizing grace and charm.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Kira Faye", detail: "Name associated with 'bright charm,' symbolizing warmth and beauty.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Faye Rynna", detail: "Name meaning 'fair spirit,' symbolizing grace and vitality.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Aurora Sienna", detail: "Name associated with 'dawn's grace,' symbolizing beauty and renewal.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Tessa Mira", detail: "Name meaning 'truthful spirit,' symbolizing clarity and charm.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Maya Vella", detail: "Name associated with 'blooming charm,' symbolizing beauty and grace.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Nina Zara", detail: "Name meaning 'radiant beauty,' symbolizing charm and elegance.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Eira Liora", detail: "Name associated with 'moonlit light,' symbolizing serenity and wisdom.", status: false, gender: "female", type: "saiyan_hybrid_name" },
    { name: "Aiden Vorn", detail: "Name meaning 'fiery warrior,' symbolizing intense strength and courage.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Kairos Zarek", detail: "Name associated with 'time's edge,' symbolizing power and precision.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Zane Krylor", detail: "Name meaning 'brave heart,' symbolizing resilience and valor.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Rex Keldor", detail: "Name associated with 'king's strength,' symbolizing leadership and power.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Ryder Varnor", detail: "Name meaning 'fierce protector,' symbolizing courage and defense.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Orion Drakon", detail: "Name associated with 'celestial dragon,' symbolizing majesty and might.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Jax Zoron", detail: "Name meaning 'strong and proud,' symbolizing strength and honor.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Vance Kryden", detail: "Name associated with 'dark edge,' symbolizing intensity and power.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Kane Xalor", detail: "Name meaning 'mighty guardian,' symbolizing protection and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Jett Voran", detail: "Name associated with 'swift warrior,' symbolizing speed and agility.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Axel Vortan", detail: "Name meaning 'powerful force,' symbolizing dominance and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Rylan Zareth", detail: "Name associated with 'valiant strength,' symbolizing courage and might.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Dorian Thrax", detail: "Name meaning 'warrior's might,' symbolizing bravery and endurance.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Kaden Rynor", detail: "Name associated with 'strong spirit,' symbolizing resilience and power.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Gideon Vornak", detail: "Name meaning 'mighty protector,' symbolizing strength and defense.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Bran Zorin", detail: "Name associated with 'brave heart,' symbolizing courage and fortitude.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Mason Xylon", detail: "Name meaning 'steadfast warrior,' symbolizing reliability and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Gage Krytor", detail: "Name associated with 'powerful edge,' symbolizing intensity and resilience.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Nash Voris", detail: "Name meaning 'fierce defender,' symbolizing strength and protection.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Cade Xaran", detail: "Name associated with 'mighty force,' symbolizing power and authority.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Rory Vortan", detail: "Name meaning 'valiant protector,' symbolizing courage and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Luca Kryden", detail: "Name associated with 'brave warrior,' symbolizing valor and might.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Rex Varn", detail: "Name meaning 'powerful king,' symbolizing dominance and leadership.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Kian Dracon", detail: "Name associated with 'dragon's strength,' symbolizing majesty and power.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Jaxon Xelar", detail: "Name meaning 'mighty warrior,' symbolizing valor and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Vaughn Zarek", detail: "Name associated with 'brave protector,' symbolizing courage and defense.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Ryker Vostan", detail: "Name meaning 'valiant strength,' symbolizing bravery and endurance.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Gage Thorne", detail: "Name associated with 'powerful edge,' symbolizing intensity and resilience.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Orion Zalon", detail: "Name meaning 'celestial strength,' symbolizing majesty and power.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Ryder Xorak", detail: "Name associated with 'fierce warrior,' symbolizing strength and agility.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Axel Kryden", detail: "Name meaning 'powerful force,' symbolizing dominance and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Jax Vella", detail: "Name associated with 'swift edge,' symbolizing speed and precision.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Kaden Thorne", detail: "Name meaning 'strong edge,' symbolizing resilience and power.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Rylan Drakon", detail: "Name associated with 'valiant dragon,' symbolizing bravery and might.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Dorian Krytor", detail: "Name meaning 'mighty edge,' symbolizing strength and resilience.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Gideon Zalon", detail: "Name associated with 'strong guardian,' symbolizing protection and might.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Bran Xylon", detail: "Name meaning 'brave strength,' symbolizing courage and endurance.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Mason Voran", detail: "Name associated with 'steadfast protector,' symbolizing reliability and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Gage Vorn", detail: "Name meaning 'powerful edge,' symbolizing intensity and might.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Nash Rynor", detail: "Name associated with 'fierce spirit,' symbolizing courage and resilience.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Cade Kryden", detail: "Name meaning 'dark edge,' symbolizing power and intensity.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Rory Xylar", detail: "Name associated with 'valiant strength,' symbolizing bravery and might.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Luca Zareth", detail: "Name meaning 'brave strength,' symbolizing courage and fortitude.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Rex Vostan", detail: "Name associated with 'mighty king,' symbolizing leadership and power.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Kian Krylor", detail: "Name meaning 'strong guardian,' symbolizing protection and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Jaxon Zarek", detail: "Name associated with 'powerful warrior,' symbolizing might and courage.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Vaughn Thorne", detail: "Name meaning 'brave edge,' symbolizing strength and resilience.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Ryker Vella", detail: "Name associated with 'powerful strength,' symbolizing might and endurance.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Gage Xalon", detail: "Name meaning 'fierce power,' symbolizing intensity and dominance.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Orion Vornak", detail: "Name associated with 'celestial might,' symbolizing majesty and strength.", status: false, gender: "male", type: "super_saiyan_name" },
    { name: "Liora Zara", detail: "Name meaning 'light of beauty,' symbolizing elegance and radiance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Aurora Vella", detail: "Name associated with 'dawn's grace,' symbolizing beauty and renewal.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Maya Kyra", detail: "Name meaning 'blooming strength,' symbolizing beauty and resilience.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Nora Mira", detail: "Name associated with 'bright reflection,' symbolizing clarity and grace.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Kira Thalia", detail: "Name meaning 'bright strength,' symbolizing elegance and power.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Ivy Liora", detail: "Name associated with 'verdant light,' symbolizing growth and beauty.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Eira Rynna", detail: "Name meaning 'moonlit grace,' symbolizing serenity and elegance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Tessa Zara", detail: "Name associated with 'truthful beauty,' symbolizing clarity and elegance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Faye Mira", detail: "Name meaning 'fair reflection,' symbolizing charm and grace.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Zara Kyra", detail: "Name associated with 'radiant strength,' symbolizing beauty and power.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Luna Vella", detail: "Name meaning 'moonlit grace,' symbolizing beauty and serenity.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Nina Zeira", detail: "Name associated with 'radiant charm,' symbolizing elegance and warmth.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Eira Sienna", detail: "Name meaning 'moonlit beauty,' symbolizing grace and warmth.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Aurora Kyra", detail: "Name associated with 'dawn's strength,' symbolizing renewal and power.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Kira Liora", detail: "Name meaning 'bright light,' symbolizing beauty and clarity.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Mara Rynna", detail: "Name associated with 'radiant grace,' symbolizing elegance and charm.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Nora Faye", detail: "Name meaning 'bright charm,' symbolizing warmth and grace.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Lila Mira", detail: "Name associated with 'gentle reflection,' symbolizing serenity and beauty.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Faye Kyra", detail: "Name meaning 'fair strength,' symbolizing beauty and resilience.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Ivy Sienna", detail: "Name associated with 'verdant grace,' symbolizing growth and beauty.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Tessa Liora", detail: "Name meaning 'truthful light,' symbolizing clarity and elegance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Maya Vella", detail: "Name associated with 'blooming charm,' symbolizing beauty and grace.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Zara Mira", detail: "Name meaning 'radiant reflection,' symbolizing elegance and warmth.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Luna Rynna", detail: "Name associated with 'moonlit grace,' symbolizing serenity and charm.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Nina Zara", detail: "Name meaning 'radiant beauty,' symbolizing charm and elegance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Eira Faye", detail: "Name associated with 'moonlit charm,' symbolizing grace and warmth.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Aurora Mira", detail: "Name meaning 'dawn's reflection,' symbolizing beauty and clarity.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Kira Zeira", detail: "Name associated with 'bright charm,' symbolizing warmth and elegance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Mara Sienna", detail: "Name meaning 'radiant beauty,' symbolizing grace and elegance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Nora Liora", detail: "Name associated with 'bright light,' symbolizing clarity and warmth.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Faye Vella", detail: "Name meaning 'fair charm,' symbolizing beauty and grace.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Ivy Mira", detail: "Name associated with 'verdant reflection,' symbolizing growth and beauty.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Lila Zeira", detail: "Name meaning 'gentle charm,' symbolizing warmth and elegance.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Tessa Kyra", detail: "Name associated with 'truthful strength,' symbolizing clarity and power.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Zara Faye", detail: "Name meaning 'radiant charm,' symbolizing beauty and warmth.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Luna Sienna", detail: "Name associated with 'moonlit beauty,' symbolizing elegance and grace.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Maya Rynna", detail: "Name meaning 'blooming grace,' symbolizing beauty and serenity.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Nina Liora", detail: "Name associated with 'radiant light,' symbolizing warmth and clarity.", status: false, gender: "female", type: "super_saiyan_name" },
    { name: "Eira Zara", detail: "Name meaning 'moonlit beauty,' symbolizing elegance and charm.", status: false, gender: "female", type: "super_saiyan_name" }
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
const FictionalAndSciFi = [
    {
        name: "Alien Name Generator",
        pic: "/alien.webp",
        link: "https://www.nameideagenerator.com/alien-name-generator",
      },
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
        name: "Angel Name Generator",
        pic: "/angel.jpg",
        link: "https://www.nameideagenerator.com/angel-name-generator",
      },
];

const SaiyanNameGenerator = () => {
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

    const bgImage = "/saiyan3.jpg"
    const context = " Saiyan Name Generator"

    const Q1 = "What is a Saiyan Name Generator?"

    const A1 = 'Our Saiyan Name Generator is an online tool designed to generate names inspired by the Saiyan characters in the DragonBall series. It helps users find unique and fitting names for their Saiyan characters.'
    
    const Q2 = "Can I use the names generated for commercial purposes?"
    
    const A2 = 'Yes, you can use the names generated by our Saiyan Name Generator for any commercial purposes, including books, games, and other creative projects.'
    
    const Q3 = "Is my data secure?"
    
    const A3 = "Yes, we prioritize your privacy and data protection with robust security measures. Therefore you need not worry about your data. It will be secured in our tool."
    
    const Q4 = "Do I need to create an account to use the generator?"
    
    const A4 = "You can use the basic features of the generator without creating an account. However, to save and revisit your favorite names, an account is required."
    
    const Q5 = "Are the names unique?"
    
    const A5 = "Yes, our generator aims to provide unique names that capture the essence of Saiyan culture and heritage. So leveraging our tool helps you to creatively fulfill your project."

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
                            Random Saiyan Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Saiyan</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="saiyan_name">Saiyan</option>
                            <option value="half_saiyan_name">Half Saiyan</option>
                            <option value="saiyan_hybrid_name">Saiyan Hybrid</option>
                            <option value="super_saiyan_name">Super Saiyan</option>

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
                        This tool is designed to immerse users in the Dragon Ball universe. It provides a streamlined process for generating names that capture the essence of these powerful characters. 
                        Ideal for fans of Akira Toriyama's series, the generator caters to those creating names for fan fiction, games, or role-playing scenarios.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Our Saiyan Name Generator produces names that reflect the extraordinary strength and combat skills characteristic of Saiyan warriors. 
                        Originating from the planet Vegeta, Saiyans are known for their ability to transform into more powerful forms, such as Super Saiyan, driven by intense emotions. 
                        The tool ensures that each generated name aligns with the warrior heritage and nature of Saiyans.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        By using this generator, you gain access to a diverse range of names that enhance character development and storytelling. 
                        Whether you are crafting new characters or enriching existing ones, the names provided will integrate seamlessly into the Dragon Ball.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Saiyan Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Our Saiyan Name Generator is simple and straightforward. Follow these steps to generate the perfect name for your Saiyan character:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1- Access the Tool
                            </h3>
                            <p>
                            Navigate to the Saiyan Name Generator on our website. Ensure you have a stable internet connection for optimal performance.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2 - Run the Tool
                            </h3>
                            <p>
                            Click the <b> “Generate Names” </b>button to create a list of names. The tool will quickly provide options based on the Saiyan you need.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Find the Name That Suits Your Needs
                            </p>
                            <p>
                            Review the generated names to select the one that best fits your requirements. Choose a name that aligns with your character or project.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="saiyan1.webp"
                            alt=""
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="saiyan2.webp"
                            alt=""
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/saiyan3.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Saiyan-Name-Generator
                </p>
                <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
                    {FictionalAndSciFi.map((item, index) => (
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
                    Why Use Our Saiyan Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our Saiyan name generator will unlock the power of Saiyan names for your next project with its working. 
                    Start now to find the perfect name that brings your Dragon Ball characters to life!
                    </p>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Before starting let us tell you the exclusive features of our tool:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Authentic Saiyan Names
                                </h3>
                                <p>
                                Our tool generates names that are true to the Saiyan heritage found in the Dragon Ball universe. Each name reflects the powerful and dynamic nature of Saiyan characters. 
                                By integrating elements from the lore and culture of Saiyans, the names ensure authenticity and relevance.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Quick and Efficient Generation
                                </h3>
                                <p>
                                The tool delivers names quickly and efficiently with a simple click. Users receive a list of generated names almost instantly, saving time and streamlining the creative process. 
                                This efficiency supports rapid progress in projects. Whether it is for your fan fiction, games, or role-playing. 
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Diverse Name Options
                                </h3>
                                <p>
                                Our generator provides a wide range of name options to suit different needs. 
                                It draws from various aspects of the Saiyan universe to offer names that match different character concepts. 
                                This diversity ensures that you can find a name that fits your specific project or character role. 
                                The variety of names caters to both common and unique preferences.                     
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Seamless Integration
                                </h3>
                                <p>
                                The names generated by the tool are designed to integrate seamlessly into your Dragon Ball-themed projects. 
                                They align with the established naming conventions of the Saiyan race, ensuring consistency with the universe. 
                                This feature helps maintain the authenticity of your characters and their connection to the Dragon Ball lore.                           
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                User-Friendly Interface
                                </h3>
                                <p>
                                The tool features a user-friendly interface that makes generating names straightforward. 
                                Navigate easily through the tool with intuitive controls and clear instructions. 
                                This design ensures that even users with minimal experience can access and use the generator. 
                                A user-friendly approach enhances the overall experience and facilitates quick name generation.                            
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                High-Quality Name Generation
                                </h3>
                                <p>
                                Our generator ensures that all names produced are of high quality and relevant to the Dragon Ball universe. Each name is crafted to reflect the Saiyan race’s characteristics and heritage. 
                                This quality control guarantees that names are not only distinctive but also suitable for enhancing your creative projects.       
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="saiyan.jpg"
                            alt=""
                            class="w-[320px] my-[30px] h-[450px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="saiyan4.jpg"
                            alt=""
                            class="w-[320px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
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

export default SaiyanNameGenerator;

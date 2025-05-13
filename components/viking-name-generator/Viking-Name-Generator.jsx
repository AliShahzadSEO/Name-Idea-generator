"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Ragnar", detail: "Fierce and legendary warrior.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Bjorn", detail: "Strong and resilient.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Thorvald", detail: "Brave and mighty.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Erik", detail: "Noble and courageous.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Leif", detail: "Explorer and leader.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Aric", detail: "Strong and skilled.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Soren", detail: "Wise and steadfast.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Hakon", detail: "Fierce and commanding.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Gunnar", detail: "Bold and fierce.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Einar", detail: "Strong and formidable.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Sigurd", detail: "Legendary and heroic.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Ulf", detail: "Savage and relentless.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Magnus", detail: "Mighty and powerful.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Knut", detail: "Strong and brave.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Harald", detail: "Noble and courageous.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Olaf", detail: "Steadfast and strong.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Rolf", detail: "Fierce and loyal.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Vidar", detail: "Vigorous and brave.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Nils", detail: "Reliable and strong.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Bjarne", detail: "Tough and determined.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Arvid", detail: "Strong and resolute.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Trygve", detail: "Loyal and fierce.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Thorin", detail: "Bold and courageous.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Frey", detail: "Mighty and valiant.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Halvard", detail: "Brave and honorable.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Ingmar", detail: "Wise and strong.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Stig", detail: "Brave and bold.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Haldor", detail: "Fierce and steadfast.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Finn", detail: "Adventurous and daring.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Axel", detail: "Strong and courageous.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Jarl", detail: "Noble and powerful.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Skald", detail: "Wise and poetic.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Eirik", detail: "Brave and determined.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Egil", detail: "Strong and skilled.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Asmund", detail: "Noble and fierce.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Hjorr", detail: "Brave and loyal.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Grim", detail: "Fierce and relentless.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Borin", detail: "Strong and dependable.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Torsten", detail: "Bold and brave.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Sigrid", detail: "Noble and honorable.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Ragnor", detail: "Legendary and valiant.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Vidar", detail: "Brave and resilient.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Gudmund", detail: "Wise and strong.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Fritjof", detail: "Bold and courageous.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Rurik", detail: "Strong and brave.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Runar", detail: "Brave and resilient.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Aksel", detail: "Fierce and courageous.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Jormund", detail: "Strong and mighty.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Thrain", detail: "Bold and enduring.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Torvald", detail: "Powerful and valiant.", status: false, gender: "male", type: "norse_warrior" },
      { name: "Freya", detail: "Goddess of love and beauty.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Ingrid", detail: "Noble and graceful.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Astrid", detail: "Divine strength and wisdom.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Brynhild", detail: "Warrior maiden and shieldmaiden.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Helga", detail: "Holy and strong.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Ragnhild", detail: "Fierce and valiant.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Sigrid", detail: "Victory and wisdom.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Liv", detail: "Life and vitality.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Thora", detail: "Thunder and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Solveig", detail: "Sun and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Eira", detail: "Mercy and protection.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Gudrun", detail: "Divine wisdom and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Alva", detail: "Noble and radiant.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Hilda", detail: "Battle and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Idun", detail: "Youth and renewal.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Lagertha", detail: "Shieldmaiden and protector.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Gunnhild", detail: "Warrior woman and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Signe", detail: "Victory and wisdom.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Vala", detail: "Seeress and wise woman.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Gerd", detail: "Earth and fertility.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Asta", detail: "Love and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Elin", detail: "Bright and radiant.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Runa", detail: "Mystery and wisdom.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Eydis", detail: "Goddess of storms and war.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Brynja", detail: "Armor and protection.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Svala", detail: "Swan and purity.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Hjordis", detail: "Heart and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Inga", detail: "Strong and pure.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Jorunn", detail: "Brave and loyal.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Kari", detail: "Love and valor.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Solveig", detail: "Sun and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Selma", detail: "Divine and serene.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Ylva", detail: "Wolf and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Dagmar", detail: "Day and glory.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Ulfhild", detail: "Wolf and battle.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Thurid", detail: "Thor's strength and power.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Gudveig", detail: "Divine strength and wisdom.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Frida", detail: "Peace and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Vilda", detail: "Wild and untamed.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Sigrun", detail: "Victory and wisdom.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Ragnhild", detail: "Fierce and noble.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Borghild", detail: "Fortress and protection.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Gerda", detail: "Earth and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Yrsa", detail: "Bear and battle.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Unna", detail: "Peaceful and strong.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Ylva", detail: "Wolf and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Ragnild", detail: "Fierce and powerful.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Tora", detail: "Thunder and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Hildur", detail: "Battle and strength.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Eydis", detail: "Storm and battle.", status: false, gender: "female", type: "norse_warrior" },
      { name: "Olaf", detail: "Fierce and seasoned raider.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Ragnar", detail: "Legendary and bold.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Gunnar", detail: "Strong and formidable.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Erik", detail: "Noble and valiant.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Thorstein", detail: "Mighty and fearless.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Sigrid", detail: "Courageous and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Bjorn", detail: "Powerful and skilled.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Haldor", detail: "Steadfast and brave.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Knut", detail: "Bold and resilient.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Sigmund", detail: "Strong and daring.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Arvid", detail: "Brave and loyal.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Einar", detail: "Fierce and determined.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Ulf", detail: "Savage and relentless.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Bjarke", detail: "Bold and fearless.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Leif", detail: "Explorer and leader.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Hakon", detail: "Strong and commanding.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Vidar", detail: "Vigorous and brave.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Sten", detail: "Steady and reliable.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Rolf", detail: "Fierce and loyal.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Jarl", detail: "Noble and powerful.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Finn", detail: "Adventurous and daring.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Magnus", detail: "Mighty and powerful.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Frey", detail: "Valiant and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Rurik", detail: "Strong and brave.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Egil", detail: "Skilled and fierce.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Thorvald", detail: "Mighty and courageous.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Bjarne", detail: "Tough and determined.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Aric", detail: "Brave and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Thorin", detail: "Bold and heroic.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Halvard", detail: "Noble and brave.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Axel", detail: "Strong and courageous.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Borr", detail: "Mighty and fierce.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Grim", detail: "Relentless and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Skald", detail: "Wise and poetic.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Jormund", detail: "Brave and resilient.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Asmund", detail: "Noble and courageous.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Thrain", detail: "Bold and enduring.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Soren", detail: "Wise and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Runar", detail: "Brave and steadfast.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Ivar", detail: "Fierce and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Jorund", detail: "Bold and fearless.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Thorleif", detail: "Mighty and valiant.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Eirik", detail: "Brave and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Torsten", detail: "Powerful and brave.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Alf", detail: "Noble and fierce.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Harald", detail: "Noble and commanding.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Ragnor", detail: "Legendary and strong.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Tord", detail: "Bold and fearless.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Rolfson", detail: "Strong and valiant.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Helge", detail: "Powerful and noble.", status: false, gender: "male", type: "coastal_raider" },
      { name: "Hilda", detail: "Strong and resilient.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Freya", detail: "Goddess of love and beauty.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Ingrid", detail: "Noble and graceful.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Solveig", detail: "Sun and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Astrid", detail: "Divine strength and wisdom.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Ragnhild", detail: "Fierce and valiant.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Brynhild", detail: "Warrior maiden and shieldmaiden.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Gunnhild", detail: "Warrior woman and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Eira", detail: "Mercy and protection.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Sigrid", detail: "Victory and wisdom.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Gerd", detail: "Earth and fertility.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Liv", detail: "Life and vitality.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Signe", detail: "Victory and wisdom.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Hjordis", detail: "Heart and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Selma", detail: "Divine and serene.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Idun", detail: "Youth and renewal.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Vala", detail: "Seeress and wise woman.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Thora", detail: "Thunder and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Brynja", detail: "Armor and protection.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Runa", detail: "Mystery and wisdom.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Alva", detail: "Noble and radiant.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Eydis", detail: "Goddess of storms and war.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Ingrid", detail: "Noble and graceful.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Ulfhild", detail: "Wolf and battle.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Dagmar", detail: "Day and glory.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Vilda", detail: "Wild and untamed.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Elin", detail: "Bright and radiant.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Eir", detail: "Mercy and healing.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Unna", detail: "Peaceful and strong.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Yrsa", detail: "Bear and battle.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Thurid", detail: "Thor's strength and power.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Ylva", detail: "Wolf and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Hildur", detail: "Battle and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Svala", detail: "Swan and purity.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Kari", detail: "Love and valor.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Frida", detail: "Peace and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Jorunn", detail: "Brave and loyal.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Brynja", detail: "Armor and protection.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Alfhild", detail: "Noble and strong.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Selma", detail: "Divine and serene.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Liva", detail: "Life and vitality.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Gerd", detail: "Earth and fertility.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Dagmar", detail: "Day and glory.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Ylva", detail: "Wolf and strength.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Lillith", detail: "Mysterious and powerful.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Yngvild", detail: "Ancient and strong.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Berit", detail: "Bright and noble.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Yvonne", detail: "Youthful and graceful.", status: false, gender: "female", type: "coastal_raider" },
      { name: "Thorin", detail: "Heroic and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Baldr", detail: "Shining and noble.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Arvid", detail: "Brave and loyal.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Eirik", detail: "Bold and powerful.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Rolf", detail: "Strong and fierce.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Bjarne", detail: "Tough and determined.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Stig", detail: "Resolute and brave.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Halvard", detail: "Noble and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Gudmund", detail: "Mighty and wise.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Taran", detail: "Powerful and courageous.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Hakon", detail: "Bold and fearless.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Knut", detail: "Strong and resilient.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Jarl", detail: "Noble and commanding.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Sigurd", detail: "Heroic and wise.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Magnus", detail: "Mighty and enduring.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Ulf", detail: "Savage and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Finn", detail: "Adventurous and brave.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Torsten", detail: "Powerful and courageous.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Gunnar", detail: "Strong and valiant.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Bragi", detail: "Wise and poetic.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Thorvald", detail: "Mighty and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Ragnor", detail: "Legendary and brave.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Vidar", detail: "Vigorous and fearless.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Einar", detail: "Strong and heroic.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Leif", detail: "Explorer and leader.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Haldor", detail: "Brave and steadfast.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Grim", detail: "Relentless and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Soren", detail: "Wise and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Fritjof", detail: "Bold and enduring.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Rurik", detail: "Mighty and fierce.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Skald", detail: "Wise and poetic.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Aric", detail: "Strong and brave.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Tord", detail: "Bold and fearless.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Jormund", detail: "Brave and resilient.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Thrain", detail: "Bold and enduring.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Borin", detail: "Strong and tough.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Alaric", detail: "Noble and brave.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Lothar", detail: "Strong and fierce.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Viggo", detail: "Mighty and brave.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Hjorr", detail: "Strong and reliable.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Sigmund", detail: "Heroic and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Eldon", detail: "Wise and enduring.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Svarte", detail: "Dark and mysterious.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Olav", detail: "Noble and strong.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Trond", detail: "Fierce and brave.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Bjarke", detail: "Bold and fearless.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Jorund", detail: "Brave and loyal.", status: false, gender: "male", type: "mountain_clan" },
      { name: "Leif", detail: "Explorer and leader.", status: false, gender: "male", type: "mountain_clan" },
      
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
const Category2 = [
    {
        name: "Viking Name Generator",
        pic: "/vikings.jpg",
        link: "https://www.nameideagenerator.com/viking-name-generator",
    },
    {
        name: "Russian Name Generator",
        pic: "/Russian.webp",
        link: "https://www.nameideagenerator.com/russian-name-generator",
    },
    {
        name: "Norse Name Generator",
        pic: "/Norse.jpg",
        link: "https://www.nameideagenerator.com/norse-name-generator",
    },
    {
        name: "Greek Name Generator",
        pic: "greek.webp",
        link: "https://www.nameideagenerator.com/greek-name-generator",
    },
    ];

const VikingNameGenerator = () => {
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

    const bgImage = "/vikings.jpg"
    const context = "Viking Name Generator"
    const Q1 = "Are the viking names really authentic?"
const A1 = "Yes, the viking names are inspired by Norse mythology, Viking history, and traditions. They’re designed to feel authentic and true to Viking culture."
const Q2 = "Do I need to create an account to use the Name Generator tool?"
const A2 = "No account needed! Just click to generate names, and you can use them right away. It’s completely free and simple."
const Q3 = "How many names can I generate?"
const A3 = "You can generate as many names as you want. Each click will provide a new set of names to explore."
const Q4 = "Can I share my Viking name?"
const A4 = "Yes, feel free to share your Viking name with others or use it in your own projects. It’s all yours."
const Q5 = "Can I mix two names to create something new?"
const A5 = "Yes, you can combine parts of names you like. Many players do that to make their Vikings name more personal or to match a specific backstory."
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
        <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40]">Cultural and Historical Name </a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/viking-name-generator" className="hover:underline text-[#343a40]">Viking Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Viking Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Viking Names </p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="norse_warriors">Norse Warriors</option>
                            <option value="coastal_raiders">Coastal Raiders</option>
                            <option value="mountain_clans">Mountain Clans</option>
                            <option value="seafaring_explorers">Seafaring Explorers</option>

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
                <div className="w-[80%] mx-auto text-center pb-[20px]">
                    <div className="py-[50px]">
                        <h2 className="text-[36px] text-center font-medium text-[#343a40] pb-[]">
                        Generate Your Perfect Viking Name
                        </h2>
                        <hr />
                        <p className="mt-[30px] py-[10px] text-[#343a40]">
                        Ready to step into the boots of a fearless Viking warrior? Our Viking Name Generator is here to help you find the 
                        perfect name that’s as bold and powerful as the legends themselves. Go ahead and create a character for a game, 
                        write a story, or just have fun. Our tool will give you unique and authentic Viking names in just a few clicks.
                        </p>
                        <p className="py-[10px] text-[#343a40]">
                       All you have to do is hit the button and watch as the generator creates a list of names inspired by Norse mythology, Viking history, and the warrior spirit. 
                       Fierce warriors, mighty chieftains. 
                       You’ll find a name that feels like it belongs to your Viking hero. Let the adventure begin!
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How Does Our Viking Name Generator Tool Work?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Follow these easy steps and you will generate the most unforgettable names for your characters in our Viking name generator.  
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                            STEP 1 - Select Your Viking’s Gender
                            </h3>
                            <p>
                            First, you’ll choose what kind of Viking name you need. You can choose between Male, female or random. 
                            The names generated sre gender specific or you’ll just get them at random. You decide!
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                                STEP 2 - Select Your Viking Type
                            </h3>
                            <p>
                                Then, you’ll choose what kind of Viking name you need. Are you looking for a fierce warrior name, a legendary Norse god name, 
                                or a clan-based name? You can easily specify what fits your character’s background or story.                            
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                            STEP 3 - Click to Generate Your Name
                            </h3>
                            <p>
                                Once you've made your selection, simply click the "Generate" button. Our tool will quickly create a list of Viking names 
                                that match your chosen type. Each name will reflect the strength, power, and boldness typical of Vikings.                            
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                                STEP 4: Choose Your Favorite Name
                            </h3>
                            <p>
                              After the list of Viking names appears, go through the options and pick the one that feels right for your character. 
                              You’ll have a name that’s perfect for your story or game.                            
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="Viking1.jpg"
                            alt="Viking Name Generator | (Old Norse) Name Generator With Meaning"
                            className="w-[300px] my-[10px] h-[340px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="viking2.webp"
                            alt="Viking Name Generator | (Old Norse) Name Generator With Meaning"
                            className="w-[300px] h-[340px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/viking name generator bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Viking Names Generator
                </p>
                <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
                    {Category2.map((item, index) => (
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


<section className="bg-white text-[#343a40] py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Why Use Our Viking Name Generator?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">⚡ Quick and Easy</h3>
        <p>
          Need a name fast? Our Viking Name Generator gives you a list of strong, bold names in seconds.
        </p>
      </div>

      <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">🛡️ Authentic Viking Names</h3>
        <p>
          Get names rooted in Norse mythology and Viking tradition for an authentic feel in your character design.
        </p>
      </div>

      <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">⚔️ Endless Customization</h3>
        <p>
          Choose from warriors, gods, or heroes. Customize the type of name based on your character’s role.
        </p>
      </div>

      <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">🎮 Perfect for Games and Stories</h3>
        <p>
          Whether it’s a fantasy novel or role-playing game, our names blend seamlessly into Viking-themed worlds.
        </p>
      </div>

      <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">💡 Inspire Creativity</h3>
        <p>
          Stuck naming a character? Let the generator inspire backstory ideas and creative sparks.
        </p>
      </div>

      <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">🎉 Fun and Free</h3>
        <p>
          Use the tool as much as you want — completely free and unlimited. No sign-ups or hidden fees.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-white text-[#343a40] py-16 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Are Vikings?</h2>
    
    <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-md">
      <p className="text-lg leading-relaxed mb-6">
        Vikings were seafaring warriors, traders, and explorers from Scandinavia, what we now call Norway, Denmark, and Sweden. They lived during the Viking Age, which lasted from the late 8th century to the early 11th century. While they’re often remembered for their brutal raids on villages and monasteries, there’s so much more to their story. Vikings attacked, explored, traded, and even settled in places as far as Iceland, Greenland, and North America.
      </p>

      <p className="text-lg leading-relaxed">
        Viking society wasn’t just about war. They were skilled craftsmen, farmers, and merchants, too. They built advanced ships that could sail across oceans and navigate rivers, which made them expert travelers. Their culture was deeply tied to the Norse gods, and their myths and legends were passed down in sagas. Vikings were also big on honor, bravery, and family. They lived in tight-knit communities, and their social structure was based on loyalty and respect. So, while they definitely had a fierce reputation, they were also a complex and influential group that shaped history in many ways.
      </p>
    </div>
  </div>
</section>

<section className="text-[#343a40] py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Viking Names: History, Structure, and Meaning
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* History Card */}
      <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">History</h3>
        <p className="text-lg leading-relaxed">
          Viking names were pretty straightforward. You’d get a given name, and then a patronymic (for guys) or matronymic (for gals) to show who your parents were. The suffixes “-son” (son of) and “-dottir” (daughter of) were used to link you to your dad or mom.
          <br /><br />
          For example, <strong>Bjorn Ironside</strong> means the son of Bjorn, and <strong>Astrid Bjornsdottir</strong> would be the daughter of Bjorn. Simple, but it kept things personal and tied to family!
        </p>
      </div>

      {/* Meaning Card */}
      <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Meaning</h3>
        <p className="text-lg leading-relaxed">
          Viking names were full of meaning, often linked to nature, gods, or traits that Vikings valued. Many names came from Old Norse words tied to animals (<strong>Ulf</strong>, meaning “wolf”), gods (<strong>Thorvald</strong>, meaning “Thor’s ruler”), or elements of nature (<strong>Skadi</strong>, named after the goddess of winter).
         
          These names described a person. They connected them to their family, their heritage, and even the gods. Names like <strong>Astrid</strong> (meaning “divine strength”) reflected qualities like power, resilience, and divine favor.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="text-[#343a40] py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Types of Viking Names
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Norse Gods and Legends */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-2xl font-semibold mb-3">Norse Gods and Legends</h3>
        <p className="text-base leading-relaxed">
          These names are inspired by mighty gods and heroes from Norse mythology. Think of figures like <strong>Thor</strong> or <strong>Odin</strong>. Create unique blends like <strong>Odrik</strong> or <strong>Thorsen</strong>. These names radiate power and mystery.
        </p>
      </div>

      {/* Warrior and Fighter Names */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-2xl font-semibold mb-3">Warrior and Fighter Names</h3>
        <p className="text-base leading-relaxed">
          Names like <strong>Bjorn</strong> (bear), <strong>Ragnar</strong> (warrior), or <strong>Ulf</strong> (wolf) showcase Viking strength and battle spirit—ideal for fierce characters ready for war.
        </p>
      </div>

      {/* Viking Clan and Place Names */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-2xl font-semibold mb-3">Viking Clan and Place Names</h3>
        <p className="text-base leading-relaxed">
          Deeply tied to their roots, Vikings used names like <strong>Hrafnson</strong>, <strong>Skjold</strong>, or <strong>Helsing</strong> to reflect clan ties and geography—great for characters proud of their legacy.
        </p>
      </div>
    </div>

    {/* Example Names Section */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center">Examples of Viking Names</h3>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg font-medium list-disc list-inside">
        <li>Bjorn Ironside</li>
        <li>Ragnar Lothbrok</li>
        <li>Freya Stormborn</li>
        <li>Thorvald the Bold</li>
        <li>Astrid Bjornsdottir</li>
        <li>Erik the Red</li>
        <li>Sigrid Firehair</li>
        <li>Leif the Lucky</li>
        <li>Ulf Wolfson</li>
        <li>Hilda Ravenshield</li>
        <li>Olaf the Mighty</li>
        <li>Helga Thorsdottir</li>
        <li>Gunnar Frostbeard</li>
        <li>Kara Wolfdaughter</li>
        <li>Vidar the Valiant</li>
      </ul>
    </div>
  </div>
</section>


<section className="bg-white text-[#343a40] py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Tips for Creating Memorable Viking Names
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Tip 1 */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Use Strong, Bold Syllables</h3>
        <p>
          Viking names should sound fierce. Choose hard consonants and strong vowels to create a powerful, warrior-like vibe.
        </p>
      </div>

      {/* Tip 2 */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Incorporate Norse Mythology</h3>
        <p>
          Get inspired by gods and heroes like Thor, Odin, or Freya. Combine elements of their names to form something unique yet authentic.
        </p>
      </div>

      {/* Tip 3 */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Keep it Short and Punchy</h3>
        <p>
          Names like Ragnar or Bjorn are easy to remember. Short, sharp names make a lasting impression on readers and players.
        </p>
      </div>

      {/* Tip 4 */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Include Elements of Nature</h3>
        <p>
          Use words like Wolf, Stone, or Thunder to reflect the Viking’s deep connection with nature and untamed power.
        </p>
      </div>

      {/* Tip 5 */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Use Patronymic Naming</h3>
        <p>
          Add “-son” or “-dottir” to a parent’s name for tradition and heritage—like Ericson or Gudrun Dottir.
        </p>
      </div>

      {/* Tip 6 */}
      <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Mix Old and New</h3>
        <p>
          Blend traditional roots with creative twists. A name like Thorin Frost combines classic Viking with modern style.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="text-[#343a40] py-16 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      What Role Did Surnames Play in Viking Culture?
    </h2>

    <div className="space-y-8 text-base md:text-lg leading-relaxed">

      {/* Section 1 */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Patronymic Naming</h3>
        <p>
          For Vikings, surnames were all about who your father was. If your dad was Erik, you’d proudly carry the surname <strong>Eriksson</strong> (son of Erik). And if you were a daughter? You’d be an <strong>Eriksdottir</strong> (daughter of Erik). It was the easiest way to show family ties—your name was a walking family tree!
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Your Legacy in Your Name</h3>
        <p>
          The surname wasn’t just a formality—it was your Viking legacy! It linked you to your father’s reputation, achievements, and status. So if your dad was a respected warrior, your name shouted, “I’m tough and ready for battle.”
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h3 className="text-xl font-semibold mb-2">No Inherited Surnames</h3>
        <p>
          Viking surnames weren’t passed down forever. Your kids wouldn’t get your last name—they’d get a new one based on <em>your</em> first name. So Eriksson ended with Erik’s children. It kept surnames fresh, meaningful, and directly tied to your family tree.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h3 className="text-xl font-semibold mb-2">A Marker of Identity</h3>
        <p>
          Your surname was more than a name—it was your Viking ID. It told people where you came from, who your father was, and gave you a sense of belonging and pride in your heritage.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <p>
          So, Viking surnames were a way to honor family, show respect for your roots, and proudly claim your place in Norse society. Not bad for just a few extra syllables!
        </p>
      </div>
      
    </div>
  </div>
</section>
<section className="bg-white text-[#343a40] py-16 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      How Can Viking Names Reflect Personal Traits or Characteristics?
    </h2>

    <div className="grid gap-8 text-base md:text-lg leading-relaxed">

      <div>
        <p>
          Viking names weren’t just picked for fun—they acted like a personal billboard, proudly announcing your traits, strengths, or even your destiny! If you were a fierce warrior, you might be called <strong>Bjorn</strong> (meaning “bear”), a symbol of raw power and toughness.
        </p>
      </div>

      <div>
        <p>
          A sharp mind or leadership potential? You might carry a name like <strong>Eirik</strong>, which means “eternal ruler,” pointing to your cleverness or kingly destiny. Parents often named children with traits they admired or hoped their kids would grow into.
        </p>
      </div>

      <div>
        <p>
          Even the gods influenced naming. A name like <strong>Thorvald</strong> (Thor’s ruler) linked you to the might of Thor himself—implying that you were strong, courageous, and maybe even unstoppable.
        </p>
      </div>

      <div>
        <p>
          Viking names weren’t random. They were meaningful choices that told a story about your character. Whether you were destined to fight, lead, or charm—your name let the world know what kind of Viking you were meant to be.
        </p>
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

export default VikingNameGenerator;

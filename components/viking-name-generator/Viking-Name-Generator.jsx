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
    const Q1 = "How does the Viking Name Generator work?"
const A1 = "It uses a database of Viking-inspired names. Simply input your preferences, and it will generate fitting names instantly."
const Q2 = "Is the Viking Name Generator safe?"
const A2 = "Yes, it's completely safe. It doesn't require personal information, and your data remains secure in your browser."
const Q3 = "How can I share suggestions for the Viking Name Generator?"
const A3 = "We appreciate your input and encourage you to share any suggestions or feedback. Please use the contact form on our website to submit your ideas or report any issues. Your feedback helps us improve the tool and enhance the experience for all users."
const Q4 = "Is the Viking Name Generator free?"
const A4 = "Yes, it's free to use. Just access it through your web browser, enter your preferences, and generate names."
const Q5 = "Can I use the Viking Name Generator for commercial purposes?"
const A5 = "Yes, the generated names can be used for commercial projects, but check for any licensing requirements."
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
                <div className="w-[80%] mx-auto pb-[20px]">
                    <div className="py-[50px]">
                        <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
                            About Us
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        Our Viking Names Generator is an efficient tool designed to produce distinct and original names for Viking characters. 
                        The user-friendly interface allows for quick and seamless name generation, 
                        ensuring that each name is both strong and historically resonant.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Whether you're crafting characters for stories, games, or campaigns, this generator simplifies the naming process. 
                        With a single click, our viking clan names generator delivers names that evoke the essence of Viking culture, fitting perfectly into any creative project.            
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        The Viking Name Generator is tailored to meet your specific needs, ensuring you consistently receive a suitable name for your character. 
                        Our norse name generator tool offers a reliable solution for creating powerful, authentic Viking names every time. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Viking Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Follow these easy steps and you will generate the most unforgettable names for your characters in our Viking name generator.  
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            STEP 1 - Input Your Preferences
                            </h3>
                            <p>
                            Choose the type of Viking names you want, specifying gender or letting the tool decide randomly. 
                            Indicate how many names you want generated at once, up to four.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            STEP 2 - Generate Names
                            </h3>
                            <p>
                            Click the "Generate Names" button to produce a list based on your preferences. 
                            The tool instantly provides a selection of names.                            
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            STEP 3 - Select and Save
                            </p>
                            <p>
                            Pick the names that suit your needs best. You can generate more names if needed until you find the perfect fit.                            
                            </p> 
                            <p>
                         <b>   Remember,</b> these tools are often used for creative writing, gaming, or entertainment purposes where unique and fictional names are desired..</p>                      
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="Viking1.jpg"
                            alt=""
                            className="w-[270px] my-[10px] h-[320px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="viking2.webp"
                            alt=""
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                    Related to Viking-Name-Generator
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

            <div class="w-[80%] mx-auto text-[#343a40] my-[30px]">
                <div class="text-center mb-[10px]">
                    <h2 class="sm:text-[36px] text-[22px] font-semibold mb-4">
                    Why Do You Need an Island Name Generator? 
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our viking last name generator makes it easy to find cool and authentic Viking names. 
                    Perfect for writers and gamers, it helps you create strong, memorable names for your characters quickly and effortlessly.
                    </p> <br /> <br />
                    <p class="sm:text-[16px] text-left text-[22px] font-semibold">
                    There are many more advantages of this tool that are explained as below:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="lg:w-1/2">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Extensive Name Database
                                </h3>
                                <p>
                                Our Viking Name Generator offers access to a comprehensive collection of historically accurate names. 
                                With thousands of options at your disposal, you can find the ideal name that captures the spirit of the Viking era. 
                                Each name in our database has been carefully selected to reflect the strength and authenticity of Viking culture.
                                 </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                User-Centric Interface
                                </h3>
                                <p>
                                Experience seamless name generation with our user-friendly interface. 
                                Designed with simplicity in mind, our tool allows you to create names quickly and efficiently. 
                                The intuitive layout ensures that even those new to name generators can easily navigate and generate the perfect Viking names.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Quick and Efficient Generation
                                </h3>
                                <p>
                                Save time with our fast and reliable online name-generation tool. 
                                With only one click on the generate option, our tool generates a list of unique and authentic Viking names, ready for use in your projects. 
                                This quick process allows you to focus more on your creative work and less on name brainstorming.                          
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Secure and Private
                                </h3>
                                <p>
                                Your data security is one of our priorities. The Viking Name Generator operates entirely within your browser, 
                                ensuring that your personal information and preferences remain confidential. 
                                We use robust encryption to protect your data, providing you with a secure name-generation experience.                        
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Versatile Applications
                                </h3>
                                <p>
                                Our Viking Name Generator adapts to various creative projects. Whether you are crafting a novel, 
                                designing a game, or setting up a role-playing campaign, the tool provides names that fit a wide range of scenarios. 
                                Its flexibility ensures that you have the right names for any creative endeavor.                        
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Authentic Name Crafting
                                </h3>
                                <p>
                                Our online Viking name generation tool specializes in generating names that reflect genuine Viking heritage. 
                                Each name is designed to capture the essence and historical accuracy of Viking culture. 
                                This focus on authenticity ensures that your characters are imbued with the true spirit of the Viking age.                     
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[50%] relative">
                        <img
                            src="viking2.jpg"
                            alt="Tiefling Image 1"
                            class="w-[350px] my-[60px] h-[450px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="viking3.jpeg"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[450px] my-[-60px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className=" py-[30px]  mx-auto">
                    <section class="w-[80%] mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">When to Use the Viking Name Generator?</h2>
                        <p class="text-gray-600 mb-4">
                        Our Viking Name Generator is a fun and efficient way to create unique names for your characters. 
                        Whenever you need a name you capture the essence of Viking warriors and their rich culture.
                        </p>
                        <ul class="text-gray-600 mb-4">
                            <li>- Creating a new character for a historical or fantasy story</li>
                            <li>- Designing a video game or tabletop RPG character</li>
                            <li>- Naming a character in a role-playing game</li>
                            <li>- Developing a Viking culture or clan for world-building</li>
                        </ul> 
                        <p class="text-gray-600 mb-4">
                        You can use our tool in a wide range of sequences from casual gaming to professional writing. 
                        Try our tool today and explore its advanced features to create the perfect Viking names with ease!
                        </p>
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
            <Footer />
        </motion.div>
    );
};

export default VikingNameGenerator;

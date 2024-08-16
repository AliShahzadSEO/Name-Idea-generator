"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Thalgar", detail: "The wise shaman.", status: false, gender: "male", type: "shaman" },
    { name: "Korath", detail: "The stormcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Gromm", detail: "The ancient one.", status: false, gender: "male", type: "shaman" },
    { name: "Zorak", detail: "The spirit guide.", status: false, gender: "male", type: "shaman" },
    { name: "Varkoth", detail: "The shadowcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Dragan", detail: "The mystic.", status: false, gender: "male", type: "shaman" },
    { name: "Orgar", detail: "The stormbringer.", status: false, gender: "male", type: "shaman" },
    { name: "Thraknar", detail: "The earthkeeper.", status: false, gender: "male", type: "shaman" },
    { name: "Grimrok", detail: "The warshaman.", status: false, gender: "male", type: "shaman" },
    { name: "Kralgor", detail: "The ancient guardian.", status: false, gender: "male", type: "shaman" },
    { name: "Murgar", detail: "The spiritwhisperer.", status: false, gender: "male", type: "shaman" },
    { name: "Rokgar", detail: "The earthshaker.", status: false, gender: "male", type: "shaman" },
    { name: "Brathok", detail: "The mystical one.", status: false, gender: "male", type: "shaman" },
    { name: "Hragor", detail: "The stormseer.", status: false, gender: "male", type: "shaman" },
    { name: "Morgor", detail: "The dark seer.", status: false, gender: "male", type: "shaman" },
    { name: "Targoth", detail: "The spiritcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Rukthar", detail: "The stormshaman.", status: false, gender: "male", type: "shaman" },
    { name: "Varnok", detail: "The earthbringer.", status: false, gender: "male", type: "shaman" },
    { name: "Drogor", detail: "The dark mystic.", status: false, gender: "male", type: "shaman" },
    { name: "Tharnor", detail: "The spiritkeeper.", status: false, gender: "male", type: "shaman" },
    { name: "Gorath", detail: "The stormcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Krukthar", detail: "The ancient seer.", status: false, gender: "male", type: "shaman" },
    { name: "Shorak", detail: "The earthshaker.", status: false, gender: "male", type: "shaman" },
    { name: "Vrogath", detail: "The stormbringer.", status: false, gender: "male", type: "shaman" },
    { name: "Brangar", detail: "The mystical guardian.", status: false, gender: "male", type: "shaman" },
    { name: "Thorgath", detail: "The ancient one.", status: false, gender: "male", type: "shaman" },
    { name: "Rokoth", detail: "The spiritshaman.", status: false, gender: "male", type: "shaman" },
    { name: "Drakar", detail: "The stormkeeper.", status: false, gender: "male", type: "shaman" },
    { name: "Gorrak", detail: "The mystic.", status: false, gender: "male", type: "shaman" },
    { name: "Thrunar", detail: "The stormseer.", status: false, gender: "male", type: "shaman" },
    { name: "Grumor", detail: "The ancient guide.", status: false, gender: "male", type: "shaman" },
    { name: "Zarkor", detail: "The shadowseer.", status: false, gender: "male", type: "shaman" },
    { name: "Brukgar", detail: "The stormbringer.", status: false, gender: "male", type: "shaman" },
    { name: "Grimor", detail: "The dark seer.", status: false, gender: "male", type: "shaman" },
    { name: "Kralgar", detail: "The ancient one.", status: false, gender: "male", type: "shaman" },
    { name: "Drakor", detail: "The mystic guardian.", status: false, gender: "male", type: "shaman" },
    { name: "Thrakor", detail: "The stormkeeper.", status: false, gender: "male", type: "shaman" },
    { name: "Vorgar", detail: "The ancient shaman.", status: false, gender: "male", type: "shaman" },
    { name: "Rukhon", detail: "The earthcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Shogar", detail: "The mystical guide.", status: false, gender: "male", type: "shaman" },
    { name: "Vrakor", detail: "The stormshaman.", status: false, gender: "male", type: "shaman" },
    { name: "Thogor", detail: "The dark mystic.", status: false, gender: "male", type: "shaman" },
    { name: "Gorathar", detail: "The spiritseer.", status: false, gender: "male", type: "shaman" },
    { name: "Korran", detail: "The ancient guide.", status: false, gender: "male", type: "shaman" },
    { name: "Brakar", detail: "The stormbringer.", status: false, gender: "male", type: "shaman" },
    { name: "Shargara", detail: "The wise shaman.", status: false, gender: "female", type: "shaman" },
    { name: "Grogara", detail: "The mystical one.", status: false, gender: "female", type: "shaman" },
    { name: "Throka", detail: "The spiritcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Bruktha", detail: "The earthshaker.", status: false, gender: "female", type: "shaman" },
    { name: "Drogara", detail: "The dark seer.", status: false, gender: "female", type: "shaman" },
    { name: "Kormara", detail: "The stormcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Gromma", detail: "The ancient one.", status: false, gender: "female", type: "shaman" },
    { name: "Zoraka", detail: "The spirit guide.", status: false, gender: "female", type: "shaman" },
    { name: "Varkotha", detail: "The shadowcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Dragara", detail: "The mystic.", status: false, gender: "female", type: "shaman" },
    { name: "Orga", detail: "The stormbringer.", status: false, gender: "female", type: "shaman" },
    { name: "Thrakna", detail: "The earthkeeper.", status: false, gender: "female", type: "shaman" },
    { name: "Grimra", detail: "The warshaman.", status: false, gender: "female", type: "shaman" },
    { name: "Kralga", detail: "The ancient guardian.", status: false, gender: "female", type: "shaman" },
    { name: "Murgara", detail: "The spiritwhisperer.", status: false, gender: "female", type: "shaman" },
    { name: "Rokara", detail: "The earthshaker.", status: false, gender: "female", type: "shaman" },
    { name: "Brathka", detail: "The mystical one.", status: false, gender: "female", type: "shaman" },
    { name: "Hragora", detail: "The stormseer.", status: false, gender: "female", type: "shaman" },
    { name: "Morgara", detail: "The dark seer.", status: false, gender: "female", type: "shaman" },
    { name: "Targara", detail: "The spiritcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Ruktha", detail: "The stormshaman.", status: false, gender: "female", type: "shaman" },
    { name: "Varnara", detail: "The earthbringer.", status: false, gender: "female", type: "shaman" },
    { name: "Drogara", detail: "The dark mystic.", status: false, gender: "female", type: "shaman" },
    { name: "Tharnara", detail: "The spiritkeeper.", status: false, gender: "female", type: "shaman" },
    { name: "Goratha", detail: "The stormcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Kruktha", detail: "The ancient seer.", status: false, gender: "female", type: "shaman" },
    { name: "Shoraka", detail: "The earthshaker.", status: false, gender: "female", type: "shaman" },
    { name: "Vrogara", detail: "The stormbringer.", status: false, gender: "female", type: "shaman" },
    { name: "Brangara", detail: "The mystical guardian.", status: false, gender: "female", type: "shaman" },
    { name: "Thorgara", detail: "The ancient one.", status: false, gender: "female", type: "shaman" },
    { name: "Rukotha", detail: "The spiritshaman.", status: false, gender: "female", type: "shaman" },
    { name: "Drakara", detail: "The stormkeeper.", status: false, gender: "female", type: "shaman" },
    { name: "Gorratha", detail: "The mystic.", status: false, gender: "female", type: "shaman" },
    { name: "Thrunara", detail: "The stormseer.", status: false, gender: "female", type: "shaman" },
    { name: "Grumara", detail: "The ancient guide.", status: false, gender: "female", type: "shaman" },
    { name: "Zarkara", detail: "The shadowseer.", status: false, gender: "female", type: "shaman" },
    { name: "Brukara", detail: "The stormbringer.", status: false, gender: "female", type: "shaman" },
    { name: "Grimara", detail: "The dark seer.", status: false, gender: "female", type: "shaman" },
    { name: "Kralara", detail: "The ancient one.", status: false, gender: "female", type: "shaman" },
    { name: "Drakara", detail: "The mystical guardian.", status: false, gender: "female", type: "shaman" },
    { name: "Thrakara", detail: "The stormkeeper.", status: false, gender: "female", type: "shaman" },
    { name: "Vorgara", detail: "The ancient shaman.", status: false, gender: "female", type: "shaman" },
    { name: "Rukhona", detail: "The earthcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Shogara", detail: "The mystical guide.", status: false, gender: "female", type: "shaman" },
    { name: "Vrakara", detail: "The stormshaman.", status: false, gender: "female", type: "shaman" },
    { name: "Thogara", detail: "The dark mystic.", status: false, gender: "female", type: "shaman" },
    { name: "Gorathara", detail: "The spiritseer.", status: false, gender: "female", type: "shaman" },
    { name: "Korrana", detail: "The ancient guide.", status: false, gender: "female", type: "shaman" },
    { name: "Brakara", detail: "The stormbringer.", status: false, gender: "female", type: "shaman" },
    { name: "Gormak", detail: "The relentless.", status: false, gender: "male", type: "berserker" },
    { name: "Brakgor", detail: "The fierce.", status: false, gender: "male", type: "berserker" },
    { name: "Orgarak", detail: "The mighty.", status: false, gender: "male", type: "berserker" },
    { name: "Thundor", detail: "The stormbringer.", status: false, gender: "male", type: "berserker" },
    { name: "Krugor", detail: "The fierce warrior.", status: false, gender: "male", type: "berserker" },
    { name: "Brakthar", detail: "The bloodthirsty.", status: false, gender: "male", type: "berserker" },
    { name: "Grimrak", detail: "The wild warrior.", status: false, gender: "male", type: "berserker" },
    { name: "Varkoth", detail: "The relentless.", status: false, gender: "male", type: "berserker" },
    { name: "Drogorak", detail: "The fierce.", status: false, gender: "male", type: "berserker" },
    { name: "Throngar", detail: "The mighty.", status: false, gender: "male", type: "berserker" },
    { name: "Kargor", detail: "The fierce fighter.", status: false, gender: "male", type: "berserker" },
    { name: "Brakar", detail: "The stormcaller.", status: false, gender: "male", type: "berserker" },
    { name: "Gorthak", detail: "The bloodthirsty.", status: false, gender: "male", type: "berserker" },
    { name: "Orkoth", detail: "The berserker.", status: false, gender: "male", type: "berserker" },
    { name: "Thraknar", detail: "The wild warrior.", status: false, gender: "male", type: "berserker" },
    { name: "Grimrakor", detail: "The mighty.", status: false, gender: "male", type: "berserker" },
    { name: "Varnak", detail: "The fierce.", status: false, gender: "male", type: "berserker" },
    { name: "Korrak", detail: "The stormbringer.", status: false, gender: "male", type: "berserker" },
    { name: "Drakgar", detail: "The relentless.", status: false, gender: "male", type: "berserker" },
    { name: "Ragnor", detail: "The savage.", status: false, gender: "male", type: "berserker" },
    { name: "Thrakak", detail: "The fierce warrior.", status: false, gender: "male", type: "berserker" },
    { name: "Gragor", detail: "The stormcaller.", status: false, gender: "male", type: "berserker" },
    { name: "Rokthar", detail: "The bloodthirsty.", status: false, gender: "male", type: "berserker" },
    { name: "Grimra", detail: "The stormcaller.", status: false, gender: "female", type: "berserker" },
    { name: "Korgara", detail: "The wild warrior.", status: false, gender: "female", type: "berserker" },
    { name: "Thrakra", detail: "The fierce.", status: false, gender: "female", type: "berserker" },
    { name: "Drukra", detail: "The relentless.", status: false, gender: "female", type: "berserker" },
    { name: "Borika", detail: "The fierce fighter.", status: false, gender: "female", type: "berserker" },
    { name: "Raxara", detail: "The stormbringer.", status: false, gender: "female", type: "berserker" },
    { name: "Gorrara", detail: "The savage.", status: false, gender: "female", type: "berserker" },
    { name: "Brutaka", detail: "The mighty.", status: false, gender: "female", type: "berserker" },
    { name: "Thorgara", detail: "The berserk.", status: false, gender: "female", type: "berserker" },
    { name: "Orga", detail: "The fierce.", status: false, gender: "female", type: "berserker" },
    { name: "Drogara", detail: "The dark berserker.", status: false, gender: "female", type: "berserker" },
    { name: "Rukara", detail: "The stormcaller.", status: false, gender: "female", type: "berserker" },
    { name: "Grimraka", detail: "The fierce fighter.", status: false, gender: "female", type: "berserker" },
    { name: "Korgara", detail: "The savage.", status: false, gender: "female", type: "berserker" },
    { name: "Thragora", detail: "The bloodthirsty.", status: false, gender: "female", type: "berserker" },
    { name: "Roktara", detail: "The relentless.", status: false, gender: "female", type: "berserker" },
    { name: "Brakkara", detail: "The mighty.", status: false, gender: "female", type: "berserker" },
    { name: "Hrogra", detail: "The fierce.", status: false, gender: "female", type: "berserker" },
    { name: "Varkara", detail: "The wild warrior.", status: false, gender: "female", type: "berserker" },
    { name: "Kragara", detail: "The dark berserker.", status: false, gender: "female", type: "berserker" },
    { name: "Grumara", detail: "The fierce fighter.", status: false, gender: "female", type: "berserker" },
    { name: "Tharnara", detail: "The bloodthirsty.", status: false, gender: "female", type: "berserker" },
    { name: "Drogara", detail: "The stormbringer.", status: false, gender: "female", type: "berserker" },
    { name: "Borika", detail: "The savage.", status: false, gender: "female", type: "berserker" },
    { name: "Ragnara", detail: "The fierce.", status: false, gender: "female", type: "berserker" },
    { name: "Thrakara", detail: "The wild warrior.", status: false, gender: "female", type: "berserker" },
    { name: "Grimraka", detail: "The fierce fighter.", status: false, gender: "female", type: "berserker" },
    { name: "Gormara", detail: "The bloodthirsty.", status: false, gender: "female", type: "berserker" },
    { name: "Brakara", detail: "The stormcaller.", status: false, gender: "female", type: "berserker" },
    { name: "Orgara", detail: "The relentless.", status: false, gender: "female", type: "berserker" },
    { name: "Thundara", detail: "The fierce.", status: false, gender: "female", type: "berserker" },
    { name: "Kragara", detail: "The mighty.", status: false, gender: "female", type: "berserker" },
    { name: "Brakara", detail: "The wild warrior.", status: false, gender: "female", type: "berserker" },
    { name: "Grimrakia", detail: "The savage.", status: false, gender: "female", type: "berserker" },
    { name: "Varnara", detail: "The fierce.", status: false, gender: "female", type: "berserker" },
    { name: "Korrara", detail: "The stormbringer.", status: false, gender: "female", type: "berserker" },
    { name: "Drakara", detail: "The bloodthirsty.", status: false, gender: "female", type: "berserker" },
    { name: "Ragnara", detail: "The fierce.", status: false, gender: "female", type: "berserker" },
    { name: "Thorin", detail: "The spiritcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Grothar", detail: "The earthseeker.", status: false, gender: "male", type: "shaman" },
    { name: "Ragnar", detail: "The stormbearer.", status: false, gender: "male", type: "shaman" },
    { name: "Bromar", detail: "The firekeeper.", status: false, gender: "male", type: "shaman" },
    { name: "Kragor", detail: "The windspeaker.", status: false, gender: "male", type: "shaman" },
    { name: "Thrain", detail: "The spiritbinder.", status: false, gender: "male", type: "shaman" },
    { name: "Durak", detail: "The earthshaker.", status: false, gender: "male", type: "shaman" },
    { name: "Gorrim", detail: "The stormcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Brakthar", detail: "The fireweaver.", status: false, gender: "male", type: "shaman" },
    { name: "Korim", detail: "The spiritseeker.", status: false, gender: "male", type: "shaman" },
    { name: "Thorak", detail: "The earthspeaker.", status: false, gender: "male", type: "shaman" },
    { name: "Brukor", detail: "The stormbearer.", status: false, gender: "male", type: "shaman" },
    { name: "Gromar", detail: "The firecaller.", status: false, gender: "male", type: "shaman" },
    { name: "Rurik", detail: "The windsinger.", status: false, gender: "male", type: "shaman" },
    { name: "Drogor", detail: "The spiritcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Gorath", detail: "The earthcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Tharkor", detail: "The stormweaver.", status: false, gender: "male", type: "shaman" },
    { name: "Brakim", detail: "The firekeeper.", status: false, gender: "male", type: "shaman" },
    { name: "Krogar", detail: "The windspeaker.", status: false, gender: "male", type: "shaman" },
    { name: "Thrainor", detail: "The spiritbinder.", status: false, gender: "male", type: "shaman" },
    { name: "Durakthar", detail: "The earthshaker.", status: false, gender: "male", type: "shaman" },
    { name: "Gorrath", detail: "The stormcaller.", status: false, gender: "male", type: "shaman" },
    { name: "Ragnak", detail: "The fireweaver.", status: false, gender: "male", type: "shaman" },
    { name: "Thorinor", detail: "The spiritseeker.", status: false, gender: "male", type: "shaman" },
    { name: "Astrid", detail: "The stormbringer.", status: false, gender: "female", type: "shaman" },
    { name: "Freya", detail: "The firecaller.", status: false, gender: "female", type: "shaman" },
    { name: "Runa", detail: "The earthweaver.", status: false, gender: "female", type: "shaman" },
    { name: "Kara", detail: "The windsinger.", status: false, gender: "female", type: "shaman" },
    { name: "Hilda", detail: "The spiritbinder.", status: false, gender: "female", type: "shaman" },
    { name: "Eira", detail: "The stormcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Thyra", detail: "The earthspeaker.", status: false, gender: "female", type: "shaman" },
    { name: "Ida", detail: "The fireweaver.", status: false, gender: "female", type: "shaman" },
    { name: "Gerd", detail: "The spiritcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Sigrid", detail: "The windspeaker.", status: false, gender: "female", type: "shaman" },
    { name: "Yrsa", detail: "The stormbearer.", status: false, gender: "female", type: "shaman" },
    { name: "Liv", detail: "The earthshaker.", status: false, gender: "female", type: "shaman" },
    { name: "Helga", detail: "The spiritseeker.", status: false, gender: "female", type: "shaman" },
    { name: "Astria", detail: "The firecaller.", status: false, gender: "female", type: "shaman" },
    { name: "Hulda", detail: "The stormbringer.", status: false, gender: "female", type: "shaman" },
    { name: "Eydis", detail: "The earthcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Ragnild", detail: "The fireweaver.", status: false, gender: "female", type: "shaman" },
    { name: "Sigruna", detail: "The windsinger.", status: false, gender: "female", type: "shaman" },
    { name: "Thora", detail: "The spiritcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Ingrid", detail: "The earthshaker.", status: false, gender: "female", type: "shaman" },
    { name: "Hedda", detail: "The stormbearer.", status: false, gender: "female", type: "shaman" },
    { name: "Frida", detail: "The spiritbinder.", status: false, gender: "female", type: "shaman" },
    { name: "Runa", detail: "The firecaller.", status: false, gender: "female", type: "shaman" },
    { name: "Gunnvor", detail: "The windspeaker.", status: false, gender: "female", type: "shaman" },
    { name: "Birna", detail: "The stormcaller.", status: false, gender: "female", type: "shaman" },
    { name: "Livna", detail: "The earthspeaker.", status: false, gender: "female", type: "shaman" },
    { name: "Eira", detail: "The spiritseeker.", status: false, gender: "female", type: "shaman" },
    { name: "Throk", detail: "The stone-hearted.", status: false, gender: "male", type: "mountain" },
    { name: "Krog", detail: "The stalwart.", status: false, gender: "male", type: "mountain" },
    { name: "Drogar", detail: "The rock-splitter.", status: false, gender: "male", type: "mountain" },
    { name: "Bruk", detail: "The mountain warrior.", status: false, gender: "male", type: "mountain" },
    { name: "Grom", detail: "The earth-shaker.", status: false, gender: "male", type: "mountain" },
    { name: "Thorak", detail: "The mountain's wrath.", status: false, gender: "male", type: "mountain" },
    { name: "Gruk", detail: "The boulder-bearer.", status: false, gender: "male", type: "mountain" },
    { name: "Urgoth", detail: "The rock-thrower.", status: false, gender: "male", type: "mountain" },
    { name: "Grogar", detail: "The stalwart.", status: false, gender: "male", type: "mountain" },
    { name: "Brakar", detail: "The mountain's might.", status: false, gender: "male", type: "mountain" },
    { name: "Rugnar", detail: "The stone-breaker.", status: false, gender: "male", type: "mountain" },
    { name: "Thurgar", detail: "The granite-hearted.", status: false, gender: "male", type: "mountain" },
    { name: "Gorthak", detail: "The earth-shaker.", status: false, gender: "male", type: "mountain" },
    { name: "Brimor", detail: "The mountain's strength.", status: false, gender: "male", type: "mountain" },
    { name: "Drakgar", detail: "The boulder-bearer.", status: false, gender: "male", type: "mountain" },
    { name: "Korak", detail: "The rock-rumbler.", status: false, gender: "male", type: "mountain" },
    { name: "Thornak", detail: "The granite-skin.", status: false, gender: "male", type: "mountain" },
    { name: "Grogar", detail: "The stonebreaker.", status: false, gender: "male", type: "mountain" },
    { name: "Bromak", detail: "The mountain guardian.", status: false, gender: "male", type: "mountain" },
    { name: "Drukgar", detail: "The earthshaker.", status: false, gender: "male", type: "mountain" },
    { name: "Kragor", detail: "The rock-bearer.", status: false, gender: "male", type: "mountain" },
    { name: "Thora", detail: "The stone-hearted.", status: false, gender: "female", type: "mountain" },
    { name: "Groa", detail: "The stalwart.", status: false, gender: "female", type: "mountain" },
    { name: "Bruni", detail: "The rock-splitter.", status: false, gender: "female", type: "mountain" },
    { name: "Hilda", detail: "The mountain warrior.", status: false, gender: "female", type: "mountain" },
    { name: "Ida", detail: "The earth-shaker.", status: false, gender: "female", type: "mountain" },
    { name: "Eira", detail: "The mountain's wrath.", status: false, gender: "female", type: "mountain" },
    { name: "Yrsa", detail: "The boulder-bearer.", status: false, gender: "female", type: "mountain" },
    { name: "Kara", detail: "The rock-thrower.", status: false, gender: "female", type: "mountain" },
    { name: "Gerd", detail: "The stalwart.", status: false, gender: "female", type: "mountain" },
    { name: "Helga", detail: "The mountain's might.", status: false, gender: "female", type: "mountain" },
    { name: "Ingrid", detail: "The stone-breaker.", status: false, gender: "female", type: "mountain" },
    { name: "Ragna", detail: "The granite-hearted.", status: false, gender: "female", type: "mountain" },
    { name: "Sigrid", detail: "The mountain's strength.", status: false, gender: "female", type: "mountain" },
    { name: "Hulda", detail: "The boulder-bearer.", status: false, gender: "female", type: "mountain" },
    { name: "Eydis", detail: "The rock-rumbler.", status: false, gender: "female", type: "mountain" },
    { name: "Astrid", detail: "The granite-skin.", status: false, gender: "female", type: "mountain" },
    { name: "Freya", detail: "The mountain guardian.", status: false, gender: "female", type: "mountain" },
    { name: "Karin", detail: "The earthshaker.", status: false, gender: "female", type: "mountain" },
    { name: "Hilda", detail: "The rock-bearer.", status: false, gender: "female", type: "mountain" },
    { name: "Sif", detail: "The stonebreaker.", status: false, gender: "female", type: "mountain" },
    { name: "Birna", detail: "The mountain's wrath.", status: false, gender: "female", type: "mountain" },
    { name: "Frida", detail: "The granite-skin.", status: false, gender: "female", type: "mountain" },
    { name: "Gormla", detail: "The earth-shaker.", status: false, gender: "female", type: "mountain" },
    { name: "Sunniva", detail: "The stone-hearted.", status: false, gender: "female", type: "mountain" },
    { name: "Runa", detail: "The mountain warrior.", status: false, gender: "female", type: "mountain" },
    { name: "Eira", detail: "The rock-splitter.", status: false, gender: "female", type: "mountain" },
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
    name: "Tabaxi Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Tiefling Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Goblin Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "ORC Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
];

const ORCNameGenerator = () => {
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
  
const bgImage = "/orc-name-generator.jpg"
const context = "Orc Name Generator"
const Q1 = "Is the Orc Name Generator free to use?"
const A1 = "Yes, our Orc Name Generator is available for free. You can generate names without any cost. For enhanced features, we are also working on some premium options but right now they are not available."
const Q2 = "Can I save the names I generate?"
const A2 = "Yes, you can save the generated names for future reference on this website. Our tool allows you to view the list of your saved names."
const Q3 = "How unique are the names produced?"
const A3 = "Our Orc Name Generator uses advanced algorithms to ensure each name is unique and fitting for Orcish characters. You can trust that each name is distinct."
const Q4 = "Is my personal data secure when using the generator?"
const A4 = "Absolutely. We employ encryption technology to safeguard your data and ensure your privacy. Your information remains confidential throughout the process."
const Q5 = "Can the tool generate names for other fantasy characters?"
const A5 = "Currently, the Orc Name Generator specializes in orc names. We are working on expanding its capabilities to include names for other fantasy races in the future."
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
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                Half Orc Name Generator
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
            <p className="text-center text-[#343a40]">Types of Orc</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="warlord">Warlord</option>
              <option value="shaman">Shaman</option>
              <option value="berserker">Berserker</option>
              <option value="mountain">Mountain</option>

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
            Our Orc Name Generator provides a quick and efficient solution for creating distinctive orc names. 
            Designed with simplicity in mind, this tool allows you to generate names instantly with just a click. 
            Enter your preferences, and let our tool handle the rest, delivering names that fit your exact needs.            
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            The generator utilizes advanced algorithms to ensure each name is unique and fitting for orc characters. 
            Use it to enhance the authenticity and depth of your orc characters for games, stories, or any creative project.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            Experience the ease of crafting the perfect orc name without hassle. 
            Our Orc Name Generator is user-friendly and requires no complex inputs. 
            Try it now and effortlessly bring your orc characters to life.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Orc Name Generator?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Our Orc Name Generator is a valuable tool for anyone who wants to create realistic and engage Orc names effortlessly. 
          Explore its capabilities today and bring your Orc characters to life with names that resonate with authenticity and creativity.
          <br /> <br />
          <b>You can follow these easy and quick steps to create your perfect Orc name for your project. </b>
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[28px] text-[20px] font-semibold">
              Step 1- Enter the Parameters
              </h3>
              <p>
              Specify your desired characteristics for the Orc names, such as , complexity, and thematic elements.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[28px] text-[20px] font-semibold">
              Step 2 - Generate Names
              </h3>
              <p>
              Click the <b>generate</b> button to produce a list of names that match your criteria
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <p className="sm:text-[28px] text-[20px] font-semibold ">
              Step 3 - Select and Customize 
              </p>
              <p>
              Select the ones generated names that best suit your needs. You can further customize the names to enhance their uniqueness.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h2 className="sm:text-[28px] text-[20px] font-semibold">
              Security and Privacy
              </h2>
              <p>
              We have robust security features in the Orc Name Generator to protect user data. 
Our tool incorporates a state of encryption technology to ensure security of any sensitive data and secures the privacy of user inputs. 
<br /> <br />
Our responsibility to confidentiality is at the core of what we do and ensures that every user has a secure environment.

              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="orc-demon.jpg"
              alt=""
              className="w-[280px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-10 rounded-[16px]"
            />
            <img
              src="orc2.jpg"
              alt=""
              className="w-[280px] h-[320px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
            Explore the Key Benefits of Our Orc Name Generator
            </h2>
            <p class="sm:text-[16px] text-[22px] font-semibold">
            Scroll down to discover the exclusive benefits you can access with our Orc Name Generator.
            </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
            <div>
                <hr class="my-4" />
                <div class="py-[10px]">
                    <div class="py-[5px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                        Genuine Orcish Essence
                        </h3>
                        <p>
                        Our Orc Name Generator creates names that authentically reflect orcish culture and lore. 
                        Each name embodies the unique characteristics and attributes of orcish traditions. 
                        Trust our tool to deliver names that enhance your characters' depth and authenticity.
                        </p>
                    </div>
                    <div class="py-[5px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                        Effortless Operation
                        </h3>
                        <p>
                        Our user-friendly interface allows for quick and straightforward name generation. 
                        Input your preferences and generate names with just a few clicks. 
                        Enjoy a hassle-free experience as you receive names that meet your exact needs.
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                        Broad Application
                        </h3>
                        <p>
                        Ideal for writers, gamers, and creative professionals, our tool adapts to various uses. 
                        Whether you're developing a character for a game, writing a novel, or working on any orc-themed project, 
                        our generator provides versatile and fitting names.
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                        Robust Privacy Protection
                        </h3>
                        <p>
                        We prioritize your privacy and data security. Our tool employs advanced encryption to protect your inputs and generated names. 
                        Feel assured that your information remains confidential and secure while using our generator.
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                        Instant Name Creation
                        </h3>
                        <p>
                        Generate names quickly and efficiently without the need for extensive brainstorming. 
                        Our tool produces a list of names in moments, allowing you to find the perfect orc name without delay. 
                        Save time and effort with our rapid online name-generation process.
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                        Tailored Name Results  
                        </h3>
                        <p>
                        Our tool delivers customized results by filtering names according to your specific preferences. 
                        Adjust parameters repeatedly to refine the output until it aligns perfectly with your vision. 
                        This ensures each name you receive is tailored to your exact needs and requirements.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
      <div>
            <div className=" py-[30px]  mx-auto"> 
            <section class="w-[80%] mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Who Can Benefit from This Tool?</h2>
        <p class="text-gray-600 mb-4">
        Our Orc Name Generator tool is undeniably unique for anyone seeking to create distinctive Orc names. 
        However, the following audiences will find it particularly valuable:
        </p>
        <div class="flex flex-col lg:flex-row gap-8">
    <div class="lg:w-1/2">
        <ul class="list-disc pl-5 space-y-4 text-left">
            <li class="text-gray-600 ">
                <span class=" mb-4 font-semibold">Game Developers</span><br />
                Enhance game characters with authentic Orc names for deeper engagement and realism.
            </li>
            <li class="text-gray-600 ">
                <span class="mb-4 font-semibold ">Writers</span> <br />
                Create believable Orc characters and settings for novels, stories, and screenplays.
            </li>
            <li class=" text-gray-600 ">
                <span class="mb-4 font-semibold">Role-Players</span><br />
                Assign unique and fitting names to Orc characters for a richer RPG experience.
            </li>
            <li class="text-gray-600  ">
                <span class="mb-4 font-semibold">World Builders</span><br />
                Integrate realistic Orc names into your fictional worlds and histories.
            </li>
            <li class="text-gray-600  ">
                <span class="mb-4 font-semibold">Creative Enthusiasts</span><br />
                Use the tool for any project requiring unique Orc names to boost creativity and impact.
            </li>
        </ul>
    </div>
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

export default ORCNameGenerator;

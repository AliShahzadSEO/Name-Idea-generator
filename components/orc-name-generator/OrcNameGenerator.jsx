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
    name: "Kobold Name Generator",
    pic: "/kobold.jpg",
    link: "https://www.nameideagenerator.com/kobold-name-generator",
},
{
    name: "Norse Name Generator",
    pic: "/Norse.jpg",
    link: "https://www.nameideagenerator.com/norse-name-generator",
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
const Q1 = "Can I use these names for other settings, like video games?"
const A1 = "Yes, absolutely! These names are great for any game, whether it’s D&D, MMORPGs, or fantasy video games."
const Q2 = "Are the names truly unique?"
const A2 = "Yes, every time you generate a new batch, the names are randomly created to ensure uniqueness. No repeats unless you want them."
const Q3 = "Can I generate names for orc tribes or clans?"
const A3 = "Of course! Many of these names are perfect for individual orcs or entire groups. Just pick a few and mash them together to create a tribe name."
const Q4 = "What do the meanings of the names tell me?"
const A4 = "Each name has a meaning that ties into the orc’s role. A trait like 'strength, a clan name,' or a title like 'war chief.' Hover over the name to reveal its meaning or cultural significance."
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
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
    <ol className="list-none p-0 inline-flex">
      <li className="flex items-center">
        <a href="/" className="hover:underline text-[#343a40]">Home</a>
        <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      </li>
      <li className="flex items-center">
        <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fantasy and Mythical Creatures Name</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/orc-name-generator" className="hover:underline text-[#343a40]">Orc Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                Random Orc Name Generator With Meaning
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
            <p className="text-center text-[#343a40]">Types of Orc Names</p>
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
            Forget the Perfect Name for Your Orc Warrior
            </h2>
            <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
            Orc names are all about power, strength, and intimidation. They should make you think of wild battles, 
            unbreakable warriors, and maybe a little bit of grunting and roaring. Finding the right name can be a challenge, but you don’t have to spend hours searching.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            Our Orc Name Generator is here to do the heavy lifting. Whether you want something primal and brutal or something with a hint of strategy and cunning, 
            you’ll get names that fit the bill. Hit the button, and you’re ready to roll with a name that sounds like it’s made for battle.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How Our Orc Name Generator Works?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Our Orc Name Generator is a valuable tool for anyone who wants to create realistic and engage Orc names effortlessly. 
          Explore its capabilities today and bring your Orc characters to life with names that resonate with authenticity and creativity.
          <br />
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[22px] text-[18px] font-semibold">
              Step 1- Pick a Gender
              </h3>
              <p>
              Decide whether your orc is male, female, or neutral. Gender influences the flow and tone of the name, 
              making it more personalized to fit the character’s vibe.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[22px] text-[18px] font-semibold">
              Step 2 - Select Your Orc’s Role
              </h3>
              <p>
                What kind of orc are you naming? Choose from options like warlord, shaman, berserker or mountain. 
                Each choice will guide the generator to pull names that suit the role you’ve got in mind.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[22px] text-[18px] font-semibold ">
              Step 3 - Hit <b>‘Generate’</b>
              </h3>
              <p>
                Click the button, and boom. Instantly get a list of orc names that match your selected role and gender. No waiting. No hassle.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[22px] text-[18px] font-semibold ">
              Step 4 - Hover for Meanings
              </h3>
              <p>
              Want to know what your orc’s name really means? Just hover your mouse over any name, and the meaning pops up. 
              You might find out it’s a name of power, war, or even a clever nod to orcish culture.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[22px] text-[18px] font-semibold ">
              Step 5: Refine or Retry
              </h3>
              <p>
                Not feeling the first round of names? No worries! Change your selections and hit ‘Generate’ again. 
                You can repeat this process until you find the perfect name that feels just right.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="orc-demon.jpg"
              alt="Orc Name Generator | Random Orc Name Generator With Meaning"
              className="w-[320px] my-[20px] h-[320px] sm:absolute sm:top-0 sm:left-10 rounded-[16px]"
            />
            <img
              src="orc2.jpg"
              alt="Orc Name Generator | Random Orc Name Generator With Meaning"
              className="w-[320px] h-[320px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/orc name generator bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Orc Name Generator
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
            Why Use Our Orc Name Generator?
            </h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Fast and Easy</h3>
        <p>No forms, no delays. Click and get a list of strong orc names in seconds.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Tailored for Orcs</h3>
        <p>Names that reflect the savage power, cunning, or leadership of your orc character.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Real Customization</h3>
        <p>Choose the orc type and gender to generate names that feel personalized and fitting.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Instant Meaning</h3>
        <p>Hover over any name to instantly see its meaning or cultural origin.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Endless Options</h3>
        <p>Generate as many names as you need. Perfect for naming whole orc clans or just one powerful warrior.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Perfect for Any Fantasy World</h3>
        <p>Ideal for D&D, video games, and storytelling—works for any setting, from savage hordes to strategic masterminds.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Unique Names</h3>
        <p>No more generic, forgettable orcs. Each name is crafted to stand out and make an impact.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Great for Character Depth</h3>
        <p>The names add instant backstory and flavor, enriching your character’s role in the game or story.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">No Repeats, Only Fresh Ideas</h3>
        <p>Each name generation is unique, so you won’t end up with the same name twice unless you want it.</p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-[22px] font-semibold mb-2">Built for Creators</h3>
        <p>Perfect for game developers, writers, and RPG players who need authentic orc names quickly.</p>
    </div>
</div>
    </div>
    <div class="my-12 px-6 sm:px-12">
    <div class="mb-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">What are Orcs?</h2>
        <div class="bg-white p-6 shadow-lg rounded-lg">
            <p class="text-lg text-gray-700 leading-relaxed">
                Orcs are like the tough guys of the fantasy world. Picture a big, bulky creature, with muscles for days 
                and a battle-ready attitude that screams, "I don't back down." You’ll find them stomping around in Lord of the Rings, 
                Dungeons & Dragons, and World of Warcraft, often looking for a good fight (and probably a lot of spoils). 
                They're all about strength, honor, and clan loyalty, with an unshakable focus on survival. 
                Orcs aren’t the kind to sit around sipping tea—they’d rather be wielding a massive weapon and charging into battle.
               <br /> <br />
                Now, sure, they’re usually the bad guys in most stories, but not always. Some versions show orcs as warriors fighting for their homes, 
                fighting for their people. Their names? Oh, they’ve got some serious bite—literally and figuratively. 
                Think heavy, growly names that match their warrior spirit. Orcs don’t do "subtle"—they do "powerful," and it’s all reflected in their names, 
                their actions, and their attitude.
                <br /> <br />
                If you’re fascinated by orcs and looking for more <a href="https://www.nameideagenerator.com/categories/fantasy-and-mythical-creatures"> fantasy and mythical creature names</a>, our Fantasy and Mythical Creatures category has you covered. 
                Explore a wide range of names that bring your entire universe to life—whether it’s a fearsome dragon or a sly elf, 
                you'll find the perfect names to match your mythical beings.
            </p>
        </div>
    </div>

    <div>
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">The History and Lore Behind Orc Names</h2>
        <div class="bg-white p-6 shadow-lg rounded-lg">
            <p class="text-lg text-gray-700 leading-relaxed">
                Orc names are like badges of honor in the fantasy world. They’re tough, gritty, and meant to strike fear in the hearts of enemies. 
                Most orc names come with a heavy dose of strength and history—think Azog or Grommash, names that scream power. 
                These names aren’t random; they’re tied to their battles, their tribes, or their achievements. 
                So, when you pick an orc name, you’re not just picking a cool-sounding word—you’re embracing the wild, warrior spirit behind it.
            </p>
        </div>
    </div>
</div>


<div class="my-12 px-6 sm:px-12">

    <div>
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Orc Names Across Fantasy Worlds</h2>

        <div class="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Orc Names in Tolkien’s Universe</h3>
            <p class="text-lg text-gray-700 leading-relaxed">
                In Tolkien's world, orc names are dark and menacing, drawing heavily from his Black Speech. Names like Azog and Uglúk are designed to evoke 
                fear and power, reflecting their ruthless, evil nature. These names are steeped in the lore of Middle-earth and are meant to sound as terrifying 
                as the orcs themselves.
            </p>
        </div>

        <div class="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Orc Names in World of Warcraft</h3>
            <p class="text-lg text-gray-700 leading-relaxed">
                In World of Warcraft, orc names carry deep ties to clan history and personal titles. 
                Characters like Thrall and Gul'dan aren’t just warriors—they’re leaders, with names that reflect their role in the orc society. 
                These names carry legacies, often tied to the individual’s rise to power, their title (like Warchief or Dark Sorcerer), and the clan they represent.
            </p>
        </div>

        <div class="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Orc Names in Dungeons & Dragons</h3>
            <p class="text-lg text-gray-700 leading-relaxed">
                In Dungeons & Dragons, orc names are a little more flexible. While they still carry a sense of toughness, they often reflect a character’s 
                personality and role within their tribe. Names like Sharn or Gorak are strong but can range from ferocious warriors to cunning leaders. 
                The focus is less on intimidation and more on fitting the orc’s specific character traits or backstory.
            </p>
        </div>

        <p class="text-lg text-gray-700 leading-relaxed">
            So, depending on where your orc comes from, their name will tell a very different tale—whether it’s all about the dark menace of Tolkien’s 
            orcs, the rich heritage of World of Warcraft, or the adaptable personalities found in Dungeons & Dragons.
        </p>
    </div>
</div>


<div class="my-12 px-6 sm:px-12">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">How to Create a Good Orc Name?</h2>

    <div class="bg-white p-6 shadow-lg rounded-lg mb-8">
        <div class="flex items-center gap-4">
            <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <h3 class="text-2xl font-semibold text-gray-800">Use Harsh Sounds and Strong Syllables</h3>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed mt-4">
            Orc names need to sound as tough as they are. Stick to hard, sharp sounds like K, G, and R. You want your orc’s name to make people flinch when they hear it. Keep it rough, keep it strong. The more guttural, the better!
        </p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg mb-8">
        <div class="flex items-center gap-4">
            <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <h3 class="text-2xl font-semibold text-gray-800">Think About the Orc's Role or Backstory</h3>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed mt-4">
            A good orc name should tell a story. What’s your orc’s role? Are they a fierce warrior, a wise shaman, or a battle-hardened chieftain? Pick a name that suits your orc’s character and backstory—after all, they’re not just a name; they’re a living legend in the making.
        </p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg mb-8">
        <div class="flex items-center gap-4">
            <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <h3 class="text-2xl font-semibold text-gray-800">Add Clan Names, Titles, or Achievements</h3>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed mt-4">
            An orc’s name is their legacy. Add a little extra punch with clan names, titles, or past victories. Think Rukgar Bonecrusher or Sharn of the Bloodsworn. Titles like Warchief or Champion give the name an epic vibe.
        </p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg mb-8">
        <div class="flex items-center gap-4">
            <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <h3 class="text-2xl font-semibold text-gray-800">Avoid Soft or Overused Fantasy Names</h3>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed mt-4">
            No one’s scared of an orc named Fluffykins. Orcs need names that pack a punch, not ones that sound like a kitten. Avoid the usual soft or overused names and go for something that feels original and fierce.
        </p>
    </div>

    <div class="bg-white p-6 shadow-lg rounded-lg mb-8">
        <div class="flex items-center gap-4">
            <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <h3 class="text-2xl font-semibold text-gray-800">Try the Orc Name Generator for Instant Inspiration</h3>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed mt-4">
            Stuck on naming your orc? Don’t sweat it—use our Orc Name Generator to instantly discover fierce, battle-ready names. It’s fast, fun, and brutally effective.
        </p>
    </div>
</div>


<div class="my-12 px-6 sm:px-12">
<div class="my-12 px-6 sm:px-12">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Examples of Orc Names</h2>

    <div class="flip-card mb-8">
        <div class="flip-card-inner">
            <div class="flip-card-front bg-white p-6 shadow-lg rounded-lg">
                <div class="flex items-center gap-4">
                    <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h3 class="text-2xl font-semibold text-gray-800">Male Orc Name Ideas</h3>
                </div>
            </div>
            <div class="flip-card-back p-6 bg-gray-200 rounded-lg">
                <p class="text-lg text-gray-700 leading-relaxed mt-4">
                    Need a name that sounds like it could crush a mountain? Try Gorak Steelcrusher, Throk Grimblade, or Karnak the Unyielding. These names don’t mess around. They scream strength, power, and the kind of orc who leads a battle charge without thinking twice.
                </p>
            </div>
        </div>
    </div>

    <div class="flip-card mb-8">
        <div class="flip-card-inner">
            <div class="flip-card-front bg-white p-6 shadow-lg rounded-lg">
                <div class="flex items-center gap-4">
                    <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h3 class="text-2xl font-semibold text-gray-800">Female Orc Name Ideas</h3>
                </div>
            </div>
            <div class="flip-card-back p-6 bg-gray-200 rounded-lg">
                <p class="text-lg text-gray-700 leading-relaxed mt-4">
                    Who says orc women can’t rule the battlefield? Try names like Zara Ironclaw, Morak the Fierce, or Urzul the Bloodbane. These names are bold, powerful, and perfect for an orc who’s ready to make a name for herself... literally.
                </p>
            </div>
        </div>
    </div>

    <div class="flip-card mb-8">
        <div class="flip-card-inner">
            <div class="flip-card-front bg-white p-6 shadow-lg rounded-lg">
                <div class="flex items-center gap-4">
                    <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h3 class="text-2xl font-semibold text-gray-800">Funny, Fierce, and Tribal Examples</h3>
                </div>
            </div>
            <div class="flip-card-back p-6 bg-gray-200 rounded-lg">
                <p class="text-lg text-gray-700 leading-relaxed mt-4">
                    Sometimes you just want a name that makes people laugh and shudder at the same time. Try Thudgar Bigfoot, Brog the Lummox, or Grunk the Stomp. These names are full of personality and perfect for that orc with a sense of humor who still knows how to kick butt.
                </p>
            </div>
        </div>
    </div>

    <div class="flip-card mb-8">
        <div class="flip-card-inner">
            <div class="flip-card-front bg-white p-6 shadow-lg rounded-lg">
                <div class="flex items-center gap-4">
                    <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h3 class="text-2xl font-semibold text-gray-800">Names Inspired by Popular Fantasy Universes</h3>
                </div>
            </div>
            <div class="flip-card-back p-6 bg-gray-200 rounded-lg">
                <p class="text-lg text-gray-700 leading-relaxed mt-4">
                    Take a page from the legends! Thrall (World of Warcraft), Azog (Lord of the Rings), and Grishnákh (Lord of the Rings) are some big-name orcs who’ve made their mark in fantasy history. You can use these as inspiration, or remix them for your own unique orc character who’s ready to take over the world.
                </p>
            </div>
        </div>
    </div>
</div>


<div class="my-12 px-6 sm:px-12">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Where to Use Your Orc Name</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Tabletop RPGs (D&D, Pathfinder)</h3>
            <div class="flex items-center gap-4 mb-4">
                <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                <h4 class="text-lg font-medium text-gray-800">Your orc name is perfect for tabletop RPGs like Dungeons & Dragons or Pathfinder. Whether you're charging into battle as a fierce warrior or using your orcish charm to intimidate foes, your character's name will add that extra layer of authenticity.</h4>
            </div>
        </div>

        <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Online Games and Avatars (MMORPGs)</h3>
            <div class="flex items-center gap-4 mb-4">
                <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                <h4 class="text-lg font-medium text-gray-800">Need a name that’ll make your orc stand out in the world of World of Warcraft or any MMORPG? Your orc name can bring your online avatar to life and set the tone for your character.</h4>
            </div>
        </div>

        <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Fantasy Novels, Comics, or Scripts</h3>
            <div class="flex items-center gap-4 mb-4">
                <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                <h4 class="text-lg font-medium text-gray-800">Got an epic fantasy novel or comic in the works? An orc name can add depth to your characters, making them feel more rooted in their world.</h4>
            </div>
        </div>

        <div class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Worldbuilding and Lore Projects</h3>
            <div class="flex items-center gap-4 mb-4">
                <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                <h4 class="text-lg font-medium text-gray-800">Creating your own fantasy universe? An orc name is a great way to flesh out your worldbuilding and bring new tribes to life.</h4>
            </div>
        </div>
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
          <a href="https://www.nameideagenerator.com/contact-us" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black text-[20px] px-[40px] py-[8px] rounded-[10px] font-semibold">
                Request
            </button>
           </a>
        </div>
        </motion.div>
      </div>
      <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
      <Footer />
    </motion.div>
  );
};

export default ORCNameGenerator;

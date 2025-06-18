"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Aelion Moonshadow", detail: "Name associated with the moon and shadows, symbolizing mystical qualities.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Baelorn Starweaver", detail: "Name meaning 'weaver of stars,' symbolizing cosmic connection.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Ciroth Nightbreeze", detail: "Name associated with the night and gentle breezes, symbolizing tranquility.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Draven Moonstrike", detail: "Name meaning 'strike of the moon,' symbolizing powerful moonlight.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Elion Stormbranch", detail: "Name associated with storms and branches, symbolizing strength and resilience.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Faelan Dreamcaller", detail: "Name meaning 'caller of dreams,' symbolizing the ethereal and mystical.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Galen Shadowlore", detail: "Name associated with shadows and ancient lore, symbolizing wisdom and mystery.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Haldir Twilightthorn", detail: "Name meaning 'thorn of twilight,' symbolizing the transition between light and darkness.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Ithil Windrider", detail: "Name associated with the moon and wind, symbolizing freedom and grace.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Jorath Moonfire", detail: "Name meaning 'fire of the moon,' symbolizing fiery passion and celestial power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Kaelith Starblade", detail: "Name associated with stars and blades, symbolizing precision and celestial might.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Lorien Nightshade", detail: "Name meaning 'shade of the night,' symbolizing mystery and allure.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Mael Stormrider", detail: "Name associated with storms and riding the tempest, symbolizing adventure and power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Nerion Moonwhisper", detail: "Name meaning 'whisper of the moon,' symbolizing subtlety and magic.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Orian Shadowdancer", detail: "Name associated with dancing in the shadows, symbolizing agility and mystery.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Phaelan Nightwind", detail: "Name meaning 'wind of the night,' symbolizing change and freedom.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Quorath Stormshadow", detail: "Name associated with storms and shadows, symbolizing duality and power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Rynor Moonlight", detail: "Name meaning 'light of the moon,' symbolizing clarity and grace.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Sylion Starstorm", detail: "Name associated with stars and storms, symbolizing celestial fury and beauty.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Taranis Nightflare", detail: "Name meaning 'flare of the night,' symbolizing brilliance and intensity.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Ulrich Moonleaf", detail: "Name associated with the moon and leaves, symbolizing nature and serenity.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Varek Starfire", detail: "Name meaning 'fire of the stars,' symbolizing energy and celestial power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Wyndor Nightfall", detail: "Name associated with the fall of night, symbolizing transition and peace.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Xalren Mooncrest", detail: "Name meaning 'crest of the moon,' symbolizing honor and prestige.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Yorath Shadowflame", detail: "Name associated with shadows and flames, symbolizing mystery and strength.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Aelrond Starwhisper", detail: "Name meaning 'whisper of the stars,' symbolizing subtle cosmic influence.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Balthar Moonstone", detail: "Name associated with the moon and stones, symbolizing stability and wisdom.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Caelion Stormwind", detail: "Name meaning 'wind of the storm,' symbolizing power and change.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Darian Nightveil", detail: "Name associated with the veil of night, symbolizing secrecy and depth.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Elirion Starcrest", detail: "Name meaning 'crest of the stars,' symbolizing celestial prominence.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Fenor Shadowveil", detail: "Name associated with shadows and veils, symbolizing concealment and mystery.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Gorath Moonstorm", detail: "Name meaning 'storm of the moon,' symbolizing turbulent power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Haldon Nightwatch", detail: "Name associated with watching over the night, symbolizing vigilance and protection.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Ithar Moonshadow", detail: "Name meaning 'shadow of the moon,' symbolizing mysticism and depth.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Jareth Starforge", detail: "Name associated with forging stars, symbolizing creation and brilliance.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Kaelin Dreamstorm", detail: "Name meaning 'storm of dreams,' symbolizing turbulent visions.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Lorian Nightbreeze", detail: "Name associated with the breeze of night, symbolizing calm and serenity.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Myrion Moonshadow", detail: "Name meaning 'shadow of the moon,' symbolizing mystery and depth.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Nerith Starstorm", detail: "Name associated with storms of stars, symbolizing celestial turbulence.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Odrin Shadowflare", detail: "Name meaning 'flare of shadows,' symbolizing intense mystery and power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Phaelon Stormveil", detail: "Name associated with storm veils, symbolizing hidden power and energy.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Quorin Moonblade", detail: "Name meaning 'blade of the moon,' symbolizing sharpness and lunar power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Rydan Starweaver", detail: "Name associated with weaving stars, symbolizing cosmic craft and creativity.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Sylas Moonshadow", detail: "Name meaning 'shadow of the moon,' symbolizing deep mystery.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Thalion Nightflame", detail: "Name associated with the flame of night, symbolizing intensity and passion.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Uldrin Shadowforge", detail: "Name meaning 'forge of shadows,' symbolizing strength and mystique.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Vynor Moonweaver", detail: "Name associated with weaving the moon, symbolizing artistic and mystical qualities.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Wynath Starleaf", detail: "Name meaning 'leaf of the stars,' symbolizing harmony with the cosmos.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Xylion Nightstorm", detail: "Name associated with storms of the night, symbolizing fierce and unyielding power.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Yarion Mooncrest", detail: "Name meaning 'crest of the moon,' symbolizing honor and lunar grace.", status: false, gender: "male", type: "night_elf_name" },
    { name: "Aelira Moonlight", detail: "Name associated with the light of the moon, symbolizing purity and clarity.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Bryndis Starwhisper", detail: "Name meaning 'whisper of the stars,' symbolizing subtle celestial influence.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Celestia Nightbreeze", detail: "Name associated with the breeze of the night and celestial qualities.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Dara Moonshadow", detail: "Name meaning 'shadow of the moon,' symbolizing mystery and depth.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Elara Starleaf", detail: "Name associated with stars and leaves, symbolizing beauty and growth.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Faelana Nightshade", detail: "Name meaning 'shade of the night,' symbolizing allure and mystique.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Gwyneira Moonstone", detail: "Name associated with moonstone, symbolizing purity and tranquility.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Heliara Starbloom", detail: "Name meaning 'bloom of the stars,' symbolizing beauty and celestial grace.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Ilyana Moonflare", detail: "Name associated with the flare of the moon, symbolizing brilliance and warmth.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Jalara Nightwind", detail: "Name meaning 'wind of the night,' symbolizing freedom and subtlety.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Kaela Moonstorm", detail: "Name associated with the storm of the moon, symbolizing power and mystery.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Liora Starfire", detail: "Name meaning 'fire of the stars,' symbolizing energy and brilliance.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Myria Nightshade", detail: "Name associated with the shade of night, symbolizing beauty and enigma.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Nyssa Mooncrest", detail: "Name meaning 'crest of the moon,' symbolizing honor and lunar grace.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Orithia Starweaver", detail: "Name associated with weaving stars, symbolizing cosmic artistry.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Phaela Moonwhisper", detail: "Name meaning 'whisper of the moon,' symbolizing subtlety and magic.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Quinara Nightfall", detail: "Name associated with the fall of night, symbolizing transition and tranquility.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Rynna Starcrest", detail: "Name meaning 'crest of the stars,' symbolizing prominence and celestial grace.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Sylva Moonshadow", detail: "Name associated with the shadow of the moon, symbolizing mystery and depth.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Thalira Nightflare", detail: "Name meaning 'flare of the night,' symbolizing brilliance and intensity.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Uthria Starbloom", detail: "Name associated with the bloom of stars, symbolizing celestial beauty.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Vespera Moonshadow", detail: "Name meaning 'shadow of the moon,' symbolizing tranquility and mystery.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Wynna Starstorm", detail: "Name associated with storms of the stars, symbolizing celestial power.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Xylara Nightshade", detail: "Name meaning 'shade of the night,' symbolizing beauty and mystique.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Ysera Moonlight", detail: "Name associated with the light of the moon, symbolizing purity and clarity.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Aeloria Starblade", detail: "Name meaning 'blade of the stars,' symbolizing strength and celestial prowess.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Bryndia Moonflare", detail: "Name associated with the flare of the moon, symbolizing brilliance and warmth.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Caelara Nightstorm", detail: "Name meaning 'storm of the night,' symbolizing fierce and unyielding power.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Darae Starcrest", detail: "Name associated with the crest of stars, symbolizing honor and cosmic prominence.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Elira Moonweaver", detail: "Name meaning 'weaver of the moon,' symbolizing creativity and lunar influence.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Fenara Starbreeze", detail: "Name associated with the breeze of stars, symbolizing gentle celestial energy.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Gwyndis Moonstone", detail: "Name meaning 'moonstone,' symbolizing purity and tranquility.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Helia Nightbreeze", detail: "Name associated with the breeze of night, symbolizing calm and serenity.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Ila Moonshadow", detail: "Name meaning 'shadow of the moon,' symbolizing mystery and depth.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Jelara Starfire", detail: "Name associated with the fire of stars, symbolizing energy and brilliance.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Kaela Nightshade", detail: "Name meaning 'shade of the night,' symbolizing beauty and enigma.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Liora Moonshadow", detail: "Name associated with the shadow of the moon, symbolizing depth and mystery.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Myria Starwhisper", detail: "Name meaning 'whisper of the stars,' symbolizing subtle cosmic influence.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Nyssa Moonstorm", detail: "Name associated with the storm of the moon, symbolizing power and transformation.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Orion Starbloom", detail: "Name meaning 'bloom of the stars,' symbolizing celestial beauty and growth.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Phaela Nightshade", detail: "Name associated with the shade of night, symbolizing beauty and allure.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Quinla Moonleaf", detail: "Name meaning 'leaf of the moon,' symbolizing harmony with nature and lunar influence.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Rynara Starweaver", detail: "Name associated with weaving stars, symbolizing cosmic creativity and artistry.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Sylara Moonwhisper", detail: "Name meaning 'whisper of the moon,' symbolizing subtlety and ethereal charm.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Thalira Starblade", detail: "Name associated with the blade of stars, symbolizing strength and celestial precision.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Uthara Nightstorm", detail: "Name meaning 'storm of the night,' symbolizing fierce and unyielding power.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Vespera Mooncrest", detail: "Name associated with the crest of the moon, symbolizing honor and lunar grace.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Wynna Starstorm", detail: "Name meaning 'storm of the stars,' symbolizing celestial power and turbulence.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Xylara Moonblade", detail: "Name associated with the blade of the moon, symbolizing sharpness and lunar influence.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Ysera Starweaver", detail: "Name meaning 'weaver of the stars,' symbolizing cosmic artistry and creativity.", status: false, gender: "female", type: "night_elf_name" },
    { name: "Borin Stoneforge", detail: "Name associated with forging stone, symbolizing strength and craftsmanship.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Dorin Ironbrow", detail: "Name meaning 'iron brow,' symbolizing resilience and toughness.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Thorin Oakenshield", detail: "Name associated with oak and shield, symbolizing protection and endurance.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Gimli Stonehammer", detail: "Name meaning 'stone hammer,' symbolizing power and skill in smithing.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Rurik Ironfist", detail: "Name associated with an iron fist, symbolizing strength and determination.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Baldor Firebeard", detail: "Name meaning 'fire beard,' symbolizing fiery spirit and passion.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Korin Stoneheart", detail: "Name associated with a heart of stone, symbolizing steadfastness and loyalty.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Haldur Frostaxe", detail: "Name meaning 'frost axe,' symbolizing cold strength and precision.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Orin Ironfoot", detail: "Name associated with iron feet, symbolizing stability and endurance.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Bruni Emberforge", detail: "Name meaning 'ember forge,' symbolizing fiery creativity and craftsmanship.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Durin Stormaxe", detail: "Name associated with a storm axe, symbolizing powerful force and resolve.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Gorim Froststone", detail: "Name meaning 'frost stone,' symbolizing unyielding strength and cold resilience.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Krag Ironclad", detail: "Name associated with ironclad armor, symbolizing impenetrable defense and protection.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Torin Stonehelm", detail: "Name meaning 'stone helm,' symbolizing steadfastness and reliability in battle.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Varek Firebrand", detail: "Name associated with a firebrand, symbolizing fiery spirit and leadership.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Rurik Thunderforge", detail: "Name meaning 'thunder forge,' symbolizing powerful crafting and explosive strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Hrogar Ironshield", detail: "Name associated with an iron shield, symbolizing protection and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Bran Stonebreaker", detail: "Name meaning 'stone breaker,' symbolizing force and resilience.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Magnar Frostbeard", detail: "Name associated with a frost beard, symbolizing cold wisdom and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Doran Thunderfist", detail: "Name meaning 'thunder fist,' symbolizing raw power and impact.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Haldor Emberclaw", detail: "Name associated with an ember claw, symbolizing fiery ferocity and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Krom Ironstorm", detail: "Name meaning 'iron storm,' symbolizing relentless strength and fury.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Orik Stonebeard", detail: "Name associated with a stone beard, symbolizing enduring strength and resilience.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Gorin Frostbrand", detail: "Name meaning 'frost brand,' symbolizing icy power and sharpness.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Bruni Thunderheart", detail: "Name associated with a thunder heart, symbolizing fiery courage and passion.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Borin Ironstone", detail: "Name meaning 'iron stone,' symbolizing durability and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Durgan Stonehand", detail: "Name associated with a stone hand, symbolizing craftsmanship and solid strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Thrain Frostaxe", detail: "Name meaning 'frost axe,' symbolizing cold precision and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Hargul Ironforge", detail: "Name associated with an iron forge, symbolizing skilled craftsmanship and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Korrin Thunderbrow", detail: "Name meaning 'thunder brow,' symbolizing fierce determination and power.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Ragnar Firestone", detail: "Name associated with a firestone, symbolizing fiery resilience and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Grom Ironfang", detail: "Name meaning 'iron fang,' symbolizing fierce strength and aggression.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Borak Stoneclad", detail: "Name associated with stoneclad armor, symbolizing impenetrable defense and durability.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Thorin Frostfire", detail: "Name meaning 'frostfire,' symbolizing a combination of cold and fiery strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Derek Emberstone", detail: "Name associated with an ember stone, symbolizing fiery resilience and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Bren Stonehelm", detail: "Name meaning 'stone helm,' symbolizing protection and steadfastness.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Galdor Ironclaw", detail: "Name associated with an iron claw, symbolizing strength and tenacity.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Haldric Thunderforge", detail: "Name meaning 'thunder forge,' symbolizing powerful craftsmanship and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Orin Ironbeard", detail: "Name associated with an iron beard, symbolizing endurance and resilience.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Korin Stoneaxe", detail: "Name meaning 'stone axe,' symbolizing strength and precision in battle.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Rurik Firebeard", detail: "Name associated with a fiery beard, symbolizing intense spirit and passion.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Gorik Thunderfist", detail: "Name meaning 'thunder fist,' symbolizing raw power and impact.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Dorn Stoneforge", detail: "Name associated with stone forging, symbolizing craftsmanship and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Branor Frosthammer", detail: "Name meaning 'frost hammer,' symbolizing cold strength and power.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Thrain Ironstorm", detail: "Name associated with an iron storm, symbolizing relentless strength and fury.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Brom Fireforge", detail: "Name meaning 'fire forge,' symbolizing fiery creativity and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Hrogar Stonehelm", detail: "Name associated with a stone helm, symbolizing steadfastness and reliability.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Rurik Emberstone", detail: "Name meaning 'ember stone,' symbolizing fiery resilience and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Thorin Frostclaw", detail: "Name associated with a frost claw, symbolizing cold precision and strength.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Krag Ironaxe", detail: "Name meaning 'iron axe,' symbolizing strength and skill in battle.", status: false, gender: "male", type: "dwarf_name" },
    { name: "Astrid Stoneheart", detail: "Name associated with a heart of stone, symbolizing strength and loyalty.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Bera Ironfist", detail: "Name meaning 'iron fist,' symbolizing strength and determination.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Disa Firebeard", detail: "Name associated with a fiery beard, symbolizing fiery spirit and passion.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Eira Frostbeard", detail: "Name meaning 'frost beard,' symbolizing cold wisdom and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Frida Stoneforge", detail: "Name associated with stone forging, symbolizing strength and craftsmanship.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Hilda Ironbrow", detail: "Name meaning 'iron brow,' symbolizing resilience and toughness.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Kara Frostaxe", detail: "Name associated with a frost axe, symbolizing cold strength and precision.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Gilda Ironclad", detail: "Name meaning 'ironclad,' symbolizing impenetrable defense and protection.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Runa Emberclaw", detail: "Name associated with an ember claw, symbolizing fiery ferocity and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Brynna Stonehelm", detail: "Name meaning 'stone helm,' symbolizing steadfastness and reliability.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Hilda Ironclaw", detail: "Name associated with an iron claw, symbolizing strength and tenacity.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Kendra Firestorm", detail: "Name meaning 'firestorm,' symbolizing intense spirit and fiery passion.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Dagna Stonebreaker", detail: "Name associated with breaking stone, symbolizing force and resilience.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Bruni Ironstorm", detail: "Name meaning 'iron storm,' symbolizing relentless strength and fury.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Hilda Stonehand", detail: "Name associated with a stone hand, symbolizing craftsmanship and solid strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Mira Frostfire", detail: "Name meaning 'frostfire,' symbolizing a combination of cold and fiery strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Sigrid Ironforge", detail: "Name associated with an iron forge, symbolizing skilled craftsmanship and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Freya Thunderbrow", detail: "Name meaning 'thunder brow,' symbolizing fierce determination and power.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Gina Stoneaxe", detail: "Name associated with a stone axe, symbolizing strength and precision in battle.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Runa Ironheart", detail: "Name meaning 'iron heart,' symbolizing enduring strength and resilience.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Astrid Emberstone", detail: "Name associated with an ember stone, symbolizing fiery resilience and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Bera Frostaxe", detail: "Name meaning 'frost axe,' symbolizing cold strength and precision.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Eira Stoneclad", detail: "Name associated with stoneclad armor, symbolizing durability and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Frida Ironhand", detail: "Name meaning 'iron hand,' symbolizing strength and tenacity.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Hilda Emberforge", detail: "Name associated with an ember forge, symbolizing fiery creativity and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Kara Ironstorm", detail: "Name meaning 'iron storm,' symbolizing relentless strength and fury.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Runa Firebeard", detail: "Name associated with a fiery beard, symbolizing intense spirit and passion.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Dagna Frostbeard", detail: "Name meaning 'frost beard,' symbolizing cold wisdom and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Gilda Stonebreaker", detail: "Name associated with breaking stone, symbolizing force and resilience.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Sigrid Ironfist", detail: "Name meaning 'iron fist,' symbolizing strength and determination.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Mira Stoneforge", detail: "Name associated with stone forging, symbolizing strength and craftsmanship.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Freya Frosthammer", detail: "Name meaning 'frost hammer,' symbolizing cold strength and power.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Kendra Emberclaw", detail: "Name associated with an ember claw, symbolizing fiery ferocity and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Astrid Stonebrand", detail: "Name meaning 'stone brand,' symbolizing strength and enduring presence.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Bera Ironclaw", detail: "Name associated with an iron claw, symbolizing strength and tenacity.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Frida Firebrand", detail: "Name meaning 'fire brand,' symbolizing fiery spirit and leadership.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Eira Stonehelm", detail: "Name associated with a stone helm, symbolizing protection and steadfastness.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Hilda Frostclaw", detail: "Name meaning 'frost claw,' symbolizing cold precision and strength.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Kara Ironbeard", detail: "Name associated with an iron beard, symbolizing endurance and resilience.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Runa Emberstorm", detail: "Name meaning 'ember storm,' symbolizing fiery strength and intensity.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Dagna Stoneaxe", detail: "Name associated with a stone axe, symbolizing strength and precision in battle.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Bruni Ironbeard", detail: "Name meaning 'iron beard,' symbolizing endurance and resilience.", status: false, gender: "female", type: "dwarf_name" },
    { name: "Aric Stormrider", detail: "Name associated with storm riding, symbolizing adventurous and resilient spirit.", status: false, gender: "male", type: "human_name" },
    { name: "Baldric Ironfist", detail: "Name meaning 'iron fist,' symbolizing strength and determination.", status: false, gender: "male", type: "human_name" },
    { name: "Cedric Lightbringer", detail: "Name associated with bringing light, symbolizing guidance and clarity.", status: false, gender: "male", type: "human_name" },
    { name: "Derek Ravenshade", detail: "Name meaning 'raven shade,' symbolizing mystery and protection.", status: false, gender: "male", type: "human_name" },
    { name: "Eldric Dawnblade", detail: "Name associated with dawn and blade, symbolizing renewal and strength.", status: false, gender: "male", type: "human_name" },
    { name: "Gareth Shadowstrike", detail: "Name meaning 'shadow strike,' symbolizing stealth and precision.", status: false, gender: "male", type: "human_name" },
    { name: "Harrison Blackwood", detail: "Name associated with a dark forest, symbolizing resilience and mystery.", status: false, gender: "male", type: "human_name" },
    { name: "Ivor Brightshield", detail: "Name meaning 'bright shield,' symbolizing protection and clarity.", status: false, gender: "male", type: "human_name" },
    { name: "Jasper Goldenheart", detail: "Name associated with a golden heart, symbolizing warmth and compassion.", status: false, gender: "male", type: "human_name" },
    { name: "Kieran Windwalker", detail: "Name meaning 'wind walker,' symbolizing freedom and agility.", status: false, gender: "male", type: "human_name" },
    { name: "Landon Stormguard", detail: "Name associated with guarding during storms, symbolizing vigilance and strength.", status: false, gender: "male", type: "human_name" },
    { name: "Merrick Thornfield", detail: "Name meaning 'thorn field,' symbolizing resilience and defense.", status: false, gender: "male", type: "human_name" },
    { name: "Nathaniel Frostfire", detail: "Name associated with a combination of frost and fire, symbolizing balance of opposing forces.", status: false, gender: "male", type: "human_name" },
    { name: "Orin Ironclad", detail: "Name meaning 'ironclad,' symbolizing unwavering strength and protection.", status: false, gender: "male", type: "human_name" },
    { name: "Percival Emberstone", detail: "Name associated with embers and stone, symbolizing enduring spirit and stability.", status: false, gender: "male", type: "human_name" },
    { name: "Quentin Thunderstrike", detail: "Name meaning 'thunder strike,' symbolizing powerful impact and energy.", status: false, gender: "male", type: "human_name" },
    { name: "Roland Stormforge", detail: "Name associated with forging through storms, symbolizing resilience and craftsmanship.", status: false, gender: "male", type: "human_name" },
    { name: "Silas Ironheart", detail: "Name meaning 'iron heart,' symbolizing steadfastness and courage.", status: false, gender: "male", type: "human_name" },
    { name: "Tristan Frostblade", detail: "Name associated with a frost blade, symbolizing precision and cold strength.", status: false, gender: "male", type: "human_name" },
    { name: "Ulysses Darkbane", detail: "Name meaning 'dark bane,' symbolizing a formidable opponent against darkness.", status: false, gender: "male", type: "human_name" },
    { name: "Victor Ironshard", detail: "Name associated with iron shards, symbolizing resilience and toughness.", status: false, gender: "male", type: "human_name" },
    { name: "William Stormhammer", detail: "Name meaning 'storm hammer,' symbolizing immense power and impact.", status: false, gender: "male", type: "human_name" },
    { name: "Xander Goldenshield", detail: "Name associated with a golden shield, symbolizing protection and value.", status: false, gender: "male", type: "human_name" },
    { name: "Yorick Windrider", detail: "Name meaning 'wind rider,' symbolizing freedom and adventure.", status: false, gender: "male", type: "human_name" },
    { name: "Zane Firestorm", detail: "Name associated with a firestorm, symbolizing intense energy and transformation.", status: false, gender: "male", type: "human_name" },
    { name: "Alistair Blackthorn", detail: "Name meaning 'black thorn,' symbolizing strength and protection.", status: false, gender: "male", type: "human_name" },
    { name: "Bartholomew Stormweaver", detail: "Name associated with weaving through storms, symbolizing adaptability and skill.", status: false, gender: "male", type: "human_name" },
    { name: "Cyrus Dawnseeker", detail: "Name meaning 'dawn seeker,' symbolizing a quest for new beginnings.", status: false, gender: "male", type: "human_name" },
    { name: "Dorian Nightshade", detail: "Name associated with nightshade, symbolizing mystery and allure.", status: false, gender: "male", type: "human_name" },
    { name: "Evan Shadowfury", detail: "Name meaning 'shadow fury,' symbolizing intense power and secrecy.", status: false, gender: "male", type: "human_name" },
    { name: "Felix Stonebreaker", detail: "Name associated with breaking stones, symbolizing strength and resilience.", status: false, gender: "male", type: "human_name" },
    { name: "Gideon Emberforge", detail: "Name meaning 'ember forge,' symbolizing creation and endurance.", status: false, gender: "male", type: "human_name" },
    { name: "Hugo Ironwind", detail: "Name associated with iron and wind, symbolizing strength and freedom.", status: false, gender: "male", type: "human_name" },
    { name: "Isidore Frostwind", detail: "Name meaning 'frost wind,' symbolizing cool strength and clarity.", status: false, gender: "male", type: "human_name" },
    { name: "Jared Thunderblade", detail: "Name associated with thunder and blade, symbolizing powerful impact and precision.", status: false, gender: "male", type: "human_name" },
    { name: "Kenric Darkforge", detail: "Name meaning 'dark forge,' symbolizing formidable strength and craftsmanship.", status: false, gender: "male", type: "human_name" },
    { name: "Leif Stormsong", detail: "Name associated with storm and song, symbolizing harmony and power.", status: false, gender: "male", type: "human_name" },
    { name: "Magnus Brightshield", detail: "Name meaning 'bright shield,' symbolizing protection and clarity.", status: false, gender: "male", type: "human_name" },
    { name: "Nolan Grimshadow", detail: "Name associated with grim shadows, symbolizing depth and mystery.", status: false, gender: "male", type: "human_name" },
    { name: "Oren Skyblade", detail: "Name meaning 'sky blade,' symbolizing freedom and sharpness.", status: false, gender: "male", type: "human_name" },
    { name: "Percy Ashenwood", detail: "Name associated with ashen wood, symbolizing resilience and endurance.", status: false, gender: "male", type: "human_name" },
    { name: "Quinton Stormrider", detail: "Name meaning 'storm rider,' symbolizing bravery and adventure.", status: false, gender: "male", type: "human_name" },
    { name: "Roland Flameheart", detail: "Name associated with a heart of flame, symbolizing passion and courage.", status: false, gender: "male", type: "human_name" },
    { name: "Sage Stormcaller", detail: "Name meaning 'storm caller,' symbolizing wisdom and command over chaos.", status: false, gender: "male", type: "human_name" },
    { name: "Thorne Darkweaver", detail: "Name associated with weaving darkness, symbolizing complexity and mystery.", status: false, gender: "male", type: "human_name" },
    { name: "Ulysses Emberstorm", detail: "Name meaning 'ember storm,' symbolizing intense energy and transformation.", status: false, gender: "male", type: "human_name" },
    { name: "Vaughn Goldrider", detail: "Name associated with riding gold, symbolizing prosperity and strength.", status: false, gender: "male", type: "human_name" },
    { name: "Wesley Thunderclap", detail: "Name meaning 'thunder clap,' symbolizing sudden impact and power.", status: false, gender: "male", type: "human_name" },
    { name: "Xander Ashenforge", detail: "Name associated with ashen forge, symbolizing resilience and craftsmanship.", status: false, gender: "male", type: "human_name" },
    { name: "Yuri Frostfang", detail: "Name meaning 'frost fang,' symbolizing cold strength and fierceness.", status: false, gender: "male", type: "human_name" },
    { name: "Adelaide Frostwhisper", detail: "Name associated with a whisper in the frost, symbolizing delicate strength and grace.", status: false, gender: "female", type: "human_name" },
    { name: "Briony Lightfoot", detail: "Name meaning 'light foot,' symbolizing agility and brightness.", status: false, gender: "female", type: "human_name" },
    { name: "Celeste Dawnbringer", detail: "Name associated with bringing dawn, symbolizing renewal and hope.", status: false, gender: "female", type: "human_name" },
    { name: "Diana Nightshade", detail: "Name meaning 'nightshade,' symbolizing mystery and elegance.", status: false, gender: "female", type: "human_name" },
    { name: "Elysia Stormwind", detail: "Name associated with storm wind, symbolizing strength and freedom.", status: false, gender: "female", type: "human_name" },
    { name: "Fiona Emberglow", detail: "Name meaning 'ember glow,' symbolizing warmth and light.", status: false, gender: "female", type: "human_name" },
    { name: "Gwyneth Silverleaf", detail: "Name associated with silver leaves, symbolizing purity and grace.", status: false, gender: "female", type: "human_name" },
    { name: "Helena Brightstar", detail: "Name meaning 'bright star,' symbolizing guidance and clarity.", status: false, gender: "female", type: "human_name" },
    { name: "Isolde Frostflower", detail: "Name associated with frost flowers, symbolizing delicate beauty and resilience.", status: false, gender: "female", type: "human_name" },
    { name: "Jasmine Shadowdancer", detail: "Name meaning 'shadow dancer,' symbolizing grace and mystery.", status: false, gender: "female", type: "human_name" },
    { name: "Kara Fireheart", detail: "Name associated with a heart of fire, symbolizing passion and courage.", status: false, gender: "female", type: "human_name" },
    { name: "Liora Darkmoon", detail: "Name meaning 'dark moon,' symbolizing depth and mystery.", status: false, gender: "female", type: "human_name" },
    { name: "Morgana Silverstorm", detail: "Name associated with a silver storm, symbolizing power and elegance.", status: false, gender: "female", type: "human_name" },
    { name: "Nadia Windrider", detail: "Name meaning 'wind rider,' symbolizing freedom and adventure.", status: false, gender: "female", type: "human_name" },
    { name: "Ophelia Stormsong", detail: "Name associated with storm and song, symbolizing harmony and strength.", status: false, gender: "female", type: "human_name" },
    { name: "Penelope Flameweaver", detail: "Name meaning 'flame weaver,' symbolizing creativity and passion.", status: false, gender: "female", type: "human_name" },
    { name: "Quinn Brightblade", detail: "Name associated with a bright blade, symbolizing clarity and strength.", status: false, gender: "female", type: "human_name" },
    { name: "Rosalind Embermoon", detail: "Name meaning 'ember moon,' symbolizing warmth and calmness.", status: false, gender: "female", type: "human_name" },
    { name: "Selena Goldenshield", detail: "Name associated with a golden shield, symbolizing protection and value.", status: false, gender: "female", type: "human_name" },
    { name: "Thalia Frostwind", detail: "Name meaning 'frost wind,' symbolizing cool strength and clarity.", status: false, gender: "female", type: "human_name" },
    { name: "Ursula Darkmist", detail: "Name associated with dark mist, symbolizing mystery and depth.", status: false, gender: "female", type: "human_name" },
    { name: "Violet Nightshade", detail: "Name meaning 'nightshade,' symbolizing elegance and mystery.", status: false, gender: "female", type: "human_name" },
    { name: "Willow Firebrand", detail: "Name associated with a firebrand, symbolizing passion and strength.", status: false, gender: "female", type: "human_name" },
    { name: "Xanthe Stormrider", detail: "Name meaning 'storm rider,' symbolizing bravery and adventure.", status: false, gender: "female", type: "human_name" },
    { name: "Yara Shadowflare", detail: "Name associated with a shadow flare, symbolizing mystery and intensity.", status: false, gender: "female", type: "human_name" },
    { name: "Aurora Emberleaf", detail: "Name meaning 'ember leaf,' symbolizing warmth and growth.", status: false, gender: "female", type: "human_name" },
    { name: "Beatrix Ironheart", detail: "Name associated with an iron heart, symbolizing steadfastness and courage.", status: false, gender: "female", type: "human_name" },
    { name: "Clara Brightsong", detail: "Name meaning 'bright song,' symbolizing clarity and joy.", status: false, gender: "female", type: "human_name" },
    { name: "Daphne Darkwind", detail: "Name associated with dark wind, symbolizing mystery and strength.", status: false, gender: "female", type: "human_name" },
    { name: "Elara Frostshadow", detail: "Name meaning 'frost shadow,' symbolizing cool elegance and depth.", status: false, gender: "female", type: "human_name" },
    { name: "Flora Lightweaver", detail: "Name associated with light weaving, symbolizing creativity and brightness.", status: false, gender: "female", type: "human_name" },
    { name: "Giselle Stormcaller", detail: "Name meaning 'storm caller,' symbolizing command and power.", status: false, gender: "female", type: "human_name" },
    { name: "Helena Frostblade", detail: "Name associated with a frost blade, symbolizing precision and cold strength.", status: false, gender: "female", type: "human_name" },
    { name: "Imogen Nightflame", detail: "Name meaning 'night flame,' symbolizing fiery mystery and passion.", status: false, gender: "female", type: "human_name" },
    { name: "Jade Emberstorm", detail: "Name associated with an ember storm, symbolizing intense energy and transformation.", status: false, gender: "female", type: "human_name" },
    { name: "Kaida Brightstorm", detail: "Name meaning 'bright storm,' symbolizing clarity and power.", status: false, gender: "female", type: "human_name" },
    { name: "Luna Darkrider", detail: "Name associated with dark riding, symbolizing depth and adventure.", status: false, gender: "female", type: "human_name" },
    { name: "Melisande Windwhisper", detail: "Name meaning 'wind whisper,' symbolizing grace and subtlety.", status: false, gender: "female", type: "human_name" },
    { name: "Nerys Flameheart", detail: "Name associated with a heart of flame, symbolizing passion and courage.", status: false, gender: "female", type: "human_name" },
    { name: "Opal Emberstone", detail: "Name meaning 'ember stone,' symbolizing warmth and stability.", status: false, gender: "female", type: "human_name" },
    { name: "Priscilla Frostwind", detail: "Name associated with frost wind, symbolizing cold strength and clarity.", status: false, gender: "female", type: "human_name" },
    { name: "Quinn Darkflare", detail: "Name meaning 'dark flare,' symbolizing mystery and intensity.", status: false, gender: "female", type: "human_name" },
    { name: "Rhiannon Lightforge", detail: "Name associated with forging light, symbolizing creativity and enlightenment.", status: false, gender: "female", type: "human_name" },
    { name: "Sabrina Stormblade", detail: "Name meaning 'storm blade,' symbolizing power and precision.", status: false, gender: "female", type: "human_name" },
    { name: "Talia Emberlight", detail: "Name associated with ember light, symbolizing warmth and guidance.", status: false, gender: "female", type: "human_name" },
    { name: "Ursa Frostforge", detail: "Name meaning 'frost forge,' symbolizing cold strength and craftsmanship.", status: false, gender: "female", type: "human_name" },
    { name: "Vera Darkmist", detail: "Name associated with dark mist, symbolizing mystery and depth.", status: false, gender: "female", type: "human_name" },
    { name: "Wren Stormweaver", detail: "Name meaning 'storm weaver,' symbolizing adaptability and power.", status: false, gender: "female", type: "human_name" },
    { name: "Xena Brightflame", detail: "Name associated with a bright flame, symbolizing warmth and energy.", status: false, gender: "female", type: "human_name" },
    { name: "Yasmine Frostheart", detail: "Name meaning 'frost heart,' symbolizing cold strength and compassion.", status: false, gender: "female", type: "human_name" },
    { name: "Zara Emberstorm", detail: "Name associated with an ember storm, symbolizing intense energy and transformation.", status: false, gender: "female", type: "human_name" },
    { name: "Zar’khan Bloodfang", detail: "Name associated with blood and fang, symbolizing ferocity and power.", status: false, gender: "male", type: "troll_name" },
    { name: "Gor’gath Shadowstrike", detail: "Name meaning 'shadow strike,' symbolizing stealth and precision.", status: false, gender: "male", type: "troll_name" },
    { name: "Rok’kar Thunderfist", detail: "Name associated with thunder and fist, symbolizing strength and impact.", status: false, gender: "male", type: "troll_name" },
    { name: "Taz’rosh Stormclaw", detail: "Name meaning 'storm claw,' symbolizing fierce and unyielding nature.", status: false, gender: "male", type: "troll_name" },
    { name: "Kro’gar Bloodbane", detail: "Name associated with blood and bane, symbolizing a destroyer of foes.", status: false, gender: "male", type: "troll_name" },
    { name: "Zar’rok Stonebreaker", detail: "Name meaning 'stone breaker,' symbolizing immense strength and resilience.", status: false, gender: "male", type: "troll_name" },
    { name: "Jir’zul Darkblight", detail: "Name associated with darkness and blight, symbolizing corruption and mystery.", status: false, gender: "male", type: "troll_name" },
    { name: "Vol’kan Bloodstorm", detail: "Name meaning 'blood storm,' symbolizing chaos and power.", status: false, gender: "male", type: "troll_name" },
    { name: "Nok’gar Frostbite", detail: "Name associated with frost and bite, symbolizing cold and harshness.", status: false, gender: "male", type: "troll_name" },
    { name: "Ruk’thar Thunderstrike", detail: "Name meaning 'thunder strike,' symbolizing sudden and powerful impact.", status: false, gender: "male", type: "troll_name" },
    { name: "Gor’rok Nightshade", detail: "Name associated with nightshade, symbolizing stealth and danger.", status: false, gender: "male", type: "troll_name" },
    { name: "Zar’kor Firestorm", detail: "Name meaning 'fire storm,' symbolizing destructive and fierce nature.", status: false, gender: "male", type: "troll_name" },
    { name: "Taz’gul Shadowfang", detail: "Name associated with shadow and fang, symbolizing stealth and aggression.", status: false, gender: "male", type: "troll_name" },
    { name: "Krul’gar Ironbark", detail: "Name meaning 'iron bark,' symbolizing toughness and endurance.", status: false, gender: "male", type: "troll_name" },
    { name: "Jor’thar Stormblade", detail: "Name associated with storm and blade, symbolizing fierce and sharp nature.", status: false, gender: "male", type: "troll_name" },
    { name: "Gul’rok Bloodshard", detail: "Name meaning 'blood shard,' symbolizing shards of violence and power.", status: false, gender: "male", type: "troll_name" },
    { name: "Vok’ran Darkstorm", detail: "Name associated with dark storm, symbolizing turmoil and strength.", status: false, gender: "male", type: "troll_name" },
    { name: "Rok’zan Frostclaw", detail: "Name meaning 'frost claw,' symbolizing icy ferocity and power.", status: false, gender: "male", type: "troll_name" },
    { name: "Zar’gar Thunderclap", detail: "Name associated with thunder and clap, symbolizing powerful impact and resonance.", status: false, gender: "male", type: "troll_name" },
    { name: "Nok’ron Bloodstorm", detail: "Name meaning 'blood storm,' symbolizing chaotic and powerful nature.", status: false, gender: "male", type: "troll_name" },
    { name: "Taz’kor Stoneclaw", detail: "Name associated with stone and claw, symbolizing unyielding strength.", status: false, gender: "male", type: "troll_name" },
    { name: "Kro’rok Nightblade", detail: "Name meaning 'night blade,' symbolizing stealth and sharpness.", status: false, gender: "male", type: "troll_name" },
    { name: "Gul’gar Froststorm", detail: "Name associated with frost and storm, symbolizing icy tempest and might.", status: false, gender: "male", type: "troll_name" },
    { name: "Jir’ran Bloodstrike", detail: "Name meaning 'blood strike,' symbolizing powerful and decisive force.", status: false, gender: "male", type: "troll_name" },
    { name: "Ruk’ran Stormfury", detail: "Name associated with storm and fury, symbolizing uncontrollable rage and power.", status: false, gender: "male", type: "troll_name" },
    { name: "Vol’gor Shadowclaw", detail: "Name meaning 'shadow claw,' symbolizing stealth and ferocity.", status: false, gender: "male", type: "troll_name" },
    { name: "Zar’thar Nightstorm", detail: "Name associated with nightstorm, symbolizing dark and tempestuous power.", status: false, gender: "male", type: "troll_name" },
    { name: "Gor’zan Bloodforge", detail: "Name meaning 'blood forge,' symbolizing creation through conflict.", status: false, gender: "male", type: "troll_name" },
    { name: "Rok’gar Thunderblade", detail: "Name associated with thunder and blade, symbolizing powerful strikes.", status: false, gender: "male", type: "troll_name" },
    { name: "Taz’gar Darkclaw", detail: "Name meaning 'dark claw,' symbolizing shadowy aggression.", status: false, gender: "male", type: "troll_name" },
    { name: "Krul’thar Bloodbloom", detail: "Name associated with blood and bloom, symbolizing growth through conflict.", status: false, gender: "male", type: "troll_name" },
    { name: "Jor’rok Stonefury", detail: "Name meaning 'stone fury,' symbolizing unrelenting anger and strength.", status: false, gender: "male", type: "troll_name" },
    { name: "Nok’rok Frostfang", detail: "Name associated with frost and fang, symbolizing cold ferocity.", status: false, gender: "male", type: "troll_name" },
    { name: "Zar’zul Thunderstorm", detail: "Name meaning 'thunderstorm,' symbolizing immense power and chaos.", status: false, gender: "male", type: "troll_name" },
    { name: "Gor’thar Bloodclaw", detail: "Name associated with blood and claw, symbolizing raw power and aggression.", status: false, gender: "male", type: "troll_name" },
    { name: "Ruk’gar Fireclaw", detail: "Name meaning 'fire claw,' symbolizing fiery ferocity.", status: false, gender: "male", type: "troll_name" },
    { name: "Taz’rok Stormheart", detail: "Name associated with storm and heart, symbolizing passionate strength.", status: false, gender: "male", type: "troll_name" },
    { name: "Kro’thar Darkblade", detail: "Name meaning 'dark blade,' symbolizing sharpness and darkness.", status: false, gender: "male", type: "troll_name" },
    { name: "Jir’gor Shadowstorm", detail: "Name associated with shadowstorm, symbolizing dark and turbulent power.", status: false, gender: "male", type: "troll_name" },
    { name: "Vol’zan Frostfire", detail: "Name meaning 'frostfire,' symbolizing a mix of cold and heat.", status: false, gender: "male", type: "troll_name" },
    { name: "Zar’gar Bloodstrike", detail: "Name associated with blood and strike, symbolizing violent impact.", status: false, gender: "male", type: "troll_name" },
    { name: "Gul’rok Stormclaw", detail: "Name meaning 'storm claw,' symbolizing powerful and unyielding nature.", status: false, gender: "male", type: "troll_name" },
    { name: "Nok’gar Thunderclaw", detail: "Name associated with thunder and claw, symbolizing fierce power.", status: false, gender: "male", type: "troll_name" },
    { name: "Ruk’thar Nightbloom", detail: "Name meaning 'night bloom,' symbolizing beauty in darkness.", status: false, gender: "male", type: "troll_name" },
    { name: "Taz’gor Bloodstorm", detail: "Name associated with bloodstorm, symbolizing chaotic and destructive power.", status: false, gender: "male", type: "troll_name" },
    { name: "Krul’rok Froststrike", detail: "Name meaning 'frost strike,' symbolizing cold and decisive attacks.", status: false, gender: "male", type: "troll_name" },
    { name: "Jor’gar Darkclaw", detail: "Name associated with dark claw, symbolizing fierce and shadowy aggression.", status: false, gender: "male", type: "troll_name" },
    { name: "Gor’zan Thunderforge", detail: "Name meaning 'thunder forge,' symbolizing strength created through chaos.", status: false, gender: "male", type: "troll_name" },
    { name: "Zar’ron Bloodfury", detail: "Name associated with blood and fury, symbolizing intense rage.", status: false, gender: "male", type: "troll_name" },
    { name: "Ruk’zan Shadowstrike", detail: "Name meaning 'shadow strike,' symbolizing stealth and precision.", status: false, gender: "male", type: "troll_name" },
    { name: "Zara’na Moonfang", detail: "Name associated with moon and fang, symbolizing mystical and fierce qualities.", status: false, gender: "female", type: "troll_name" },
      { name: "Gora’ka Stormbloom", detail: "Name meaning 'storm bloom,' symbolizing beauty and strength in adversity.", status: false, gender: "female", type: "troll_name" },
      { name: "Rina’ra Darkclaw", detail: "Name associated with darkness and claw, symbolizing shadowy aggression.", status: false, gender: "female", type: "troll_name" },
      { name: "Tara’na Bloodshade", detail: "Name meaning 'blood shade,' symbolizing dark and powerful nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Kara’zil Shadowstorm", detail: "Name associated with shadow and storm, symbolizing dark and tempestuous power.", status: false, gender: "female", type: "troll_name" },
      { name: "Nara’ga Frostfang", detail: "Name meaning 'frost fang,' symbolizing icy aggression and strength.", status: false, gender: "female", type: "troll_name" },
      { name: "Jara’na Nightshade", detail: "Name associated with nightshade, symbolizing darkness and mystery.", status: false, gender: "female", type: "troll_name" },
      { name: "Zara’na Thunderbloom", detail: "Name meaning 'thunder bloom,' symbolizing powerful and vibrant nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Gora’ra Bloodstrike", detail: "Name associated with blood and strike, symbolizing fierce and decisive nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Rina’ka Stormshadow", detail: "Name meaning 'storm shadow,' symbolizing mysterious and powerful presence.", status: false, gender: "female", type: "troll_name" },
      { name: "Tara’ra Darkstorm", detail: "Name associated with dark storm, symbolizing chaotic and powerful forces.", status: false, gender: "female", type: "troll_name" },
      { name: "Kara’na Frostbloom", detail: "Name meaning 'frost bloom,' symbolizing icy beauty and strength.", status: false, gender: "female", type: "troll_name" },
      { name: "Nara’ra Shadowflare", detail: "Name associated with shadow and flare, symbolizing dynamic and dark energy.", status: false, gender: "female", type: "troll_name" },
      { name: "Jara’na Thunderstrike", detail: "Name meaning 'thunder strike,' symbolizing powerful and impactful presence.", status: false, gender: "female", type: "troll_name" },
      { name: "Zara’ka Nightstorm", detail: "Name associated with nightstorm, symbolizing dark and tempestuous power.", status: false, gender: "female", type: "troll_name" },
      { name: "Gora’na Bloodclaw", detail: "Name meaning 'blood claw,' symbolizing fierce and aggressive nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Rina’ra Stormstrike", detail: "Name associated with storm and strike, symbolizing powerful and decisive attacks.", status: false, gender: "female", type: "troll_name" },
      { name: "Tara’na Shadowfang", detail: "Name meaning 'shadow fang,' symbolizing dark and fierce aggression.", status: false, gender: "female", type: "troll_name" },
      { name: "Kara’ra Froststorm", detail: "Name associated with froststorm, symbolizing icy and powerful tempest.", status: false, gender: "female", type: "troll_name" },
      { name: "Nara’zil Thunderstorm", detail: "Name meaning 'thunderstorm,' symbolizing intense and chaotic power.", status: false, gender: "female", type: "troll_name" },
      { name: "Jara’ra Darkclaw", detail: "Name associated with dark and claw, symbolizing shadowy and fierce nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Zara’ra Bloodbloom", detail: "Name meaning 'blood bloom,' symbolizing growth through conflict and aggression.", status: false, gender: "female", type: "troll_name" },
      { name: "Gora’na Frostfang", detail: "Name associated with frost and fang, symbolizing cold and fierce nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Rina’ka Thunderclap", detail: "Name meaning 'thunder clap,' symbolizing powerful and resonant impact.", status: false, gender: "female", type: "troll_name" },
      { name: "Tara’zil Nightflare", detail: "Name associated with night and flare, symbolizing dark and vibrant energy.", status: false, gender: "female", type: "troll_name" },
      { name: "Kara’ra Bloodstorm", detail: "Name meaning 'blood storm,' symbolizing chaotic and fierce nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Nara’na Shadowstrike", detail: "Name associated with shadow and strike, symbolizing stealth and precision.", status: false, gender: "female", type: "troll_name" },
      { name: "Jara’ka Stormclaw", detail: "Name meaning 'storm claw,' symbolizing powerful and aggressive nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Zara’na Darkstorm", detail: "Name associated with darkstorm, symbolizing intense and chaotic darkness.", status: false, gender: "female", type: "troll_name" },
      { name: "Gora’zil Frostclaw", detail: "Name meaning 'frost claw,' symbolizing cold and aggressive nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Rina’ra Thunderstorm", detail: "Name associated with thunderstorm, symbolizing powerful and chaotic force.", status: false, gender: "female", type: "troll_name" },
      { name: "Tara’na Bloodfang", detail: "Name meaning 'blood fang,' symbolizing fierce and predatory nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Kara’na Nightshade", detail: "Name associated with nightshade, symbolizing darkness and mystery.", status: false, gender: "female", type: "troll_name" },
      { name: "Nara’ra Shadowbloom", detail: "Name meaning 'shadow bloom,' symbolizing dark and hidden beauty.", status: false, gender: "female", type: "troll_name" },
      { name: "Jara’zil Thunderstrike", detail: "Name associated with thunderstrike, symbolizing powerful and impactful force.", status: false, gender: "female", type: "troll_name" },
      { name: "Zara’ka Darkflare", detail: "Name meaning 'dark flare,' symbolizing intense and mysterious energy.", status: false, gender: "female", type: "troll_name" },
      { name: "Gora’na Nightbloom", detail: "Name associated with nightbloom, symbolizing dark and subtle beauty.", status: false, gender: "female", type: "troll_name" },
      { name: "Rina’ka Stormblade", detail: "Name meaning 'storm blade,' symbolizing sharp and tempestuous nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Tara’ra Froststrike", detail: "Name associated with frost and strike, symbolizing icy and impactful attacks.", status: false, gender: "female", type: "troll_name" },
      { name: "Kara’na Bloodshade", detail: "Name meaning 'blood shade,' symbolizing dark and powerful nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Nara’na Thunderclaw", detail: "Name associated with thunder and claw, symbolizing fierce power and aggression.", status: false, gender: "female", type: "troll_name" },
      { name: "Jara’ra Darkfang", detail: "Name meaning 'dark fang,' symbolizing shadowy aggression and power.", status: false, gender: "female", type: "troll_name" },
      { name: "Zara’ra Shadowstorm", detail: "Name associated with shadowstorm, symbolizing dark and tempestuous forces.", status: false, gender: "female", type: "troll_name" },
      { name: "Gora’ka Frostshadow", detail: "Name meaning 'frost shadow,' symbolizing cold and elusive presence.", status: false, gender: "female", type: "troll_name" },
      { name: "Rina’na Bloodflare", detail: "Name associated with blood and flare, symbolizing intense and fierce energy.", status: false, gender: "female", type: "troll_name" },
      { name: "Tara’na Nightstorm", detail: "Name meaning 'night storm,' symbolizing dark and tempestuous nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Kara’ra Shadowstrike", detail: "Name associated with shadow and strike, symbolizing stealth and precision.", status: false, gender: "female", type: "troll_name" },
      { name: "Nara’zil Thunderbloom", detail: "Name meaning 'thunder bloom,' symbolizing powerful and vibrant presence.", status: false, gender: "female", type: "troll_name" },
      { name: "Jara’ka Bloodstorm", detail: "Name associated with bloodstorm, symbolizing fierce and chaotic nature.", status: false, gender: "female", type: "troll_name" },
      { name: "Zara’na Stormshadow", detail: "Name meaning 'storm shadow,' symbolizing powerful and elusive presence.", status: false, gender: "female", type: "troll_name" }
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
        name: "Demon Name Generator",
        pic: "/demonpic.jpg",
        link: "https://www.nameideagenerator.com/demon-name-generator",
    },
    {
        name: "Song Name Generator",
        pic: "/pop.jpg",
        link: "https://www.nameideagenerator.com/song-name-generator",
    },
    {
        name: "WoW Name Generator",
        pic: "/wow.jpg",
        link: "https://www.nameideagenerator.com/wow-name-generator",
    },
    {
        name: "Horse Name Generator",
        pic: "horse.webp",
        link: "https://www.nameideagenerator.com/horse-name-generator",
    },
];

const WOWNameGenerator = () => {
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

    const bgImage = "/wow.jpg"
    const context = " World of Warcraft WoW Name Generator"

    const Q1 = "What does the WoW name generator do?"

    const A1 = ' It creates names that match the style, lore, and class of World of Warcraft characters. They’re unique, role-ready, and full of character.'
    
    const Q2 = "Can I use these names in the actual game?"
    
    const A2 = 'Yes. Most names are original enough to be accepted in-game. If one is taken, just click again for more options.'
    
    const Q3 = "Is the WoW name generator free?"
    
    const A3 = "Yes. You can use it as many times as you want, no cost or sign-up needed."
    
    const Q4 = "Does it work for all races and classes?"
    
    const A4 = "Yes. The name generator gives results that fit every character type—from troll shamans to gnome rogues."
    
    const Q5 = "Can I use the names in my own stories or comics?"
    
    const A5 = "Absolutely. They’re free to use in any personal or commercial project."

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
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/wow-name-generator" className="hover:underline text-[#343a40]">WoW Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                          Random WoW Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of World Of Warcraft Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="night_elf_name">Night Elf</option>
                            <option value="dwarf_name">Dwarf</option>
                            <option value="human_name">Human</option>
                            <option value="troll_name">Troll</option>

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
                         Forge Your Battle Identity with Just One Click
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        You don’t need a sword to make a mark in Azeroth. You just need the right name. 
                        Our World of Warcraft WoW name generator helps you find bold, powerful, and immersive names that sound like they belong in the WoW universe.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        You should try it if you want something original, lore-friendly, or just plain epic. 
                        The names match the energy of every class—from noble paladins to fierce orc warlords. 
                        Some carry honor. Some carry fear. All of them fit into World of Warcraft’s rich setting.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                      How to Use Our WoW Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                      You don’t need a quest scroll to figure this out. Just follow three simple steps:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                           Step 1- Visit the Tool
                            </h3>
                            <p>
                             Go to the WoW name generator on our site. You’ll find it under the fantasy names section.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                           Step 2- Set Your Preferences
                            </h3>
                            <p>
                             Choose a vibe that suits your race or class. Looking for a blood elf mage? 
                             A troll hunter? Or a draenei priest? Set your tone and let the generator adjust.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                          Step 3- Generate and Choose
                            </h3>
                            <p>
                             Click the button and start scrolling. You’ll get a list of names that sound ready for raids, dungeons, or tavern brawls.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 4- Review Names and Their Lore
                            </h3>
                            <p>
                            The generated names will be displayed. Hover over each name to uncover details about its meaning, race, and the lore behind it in the World of Warcraft universe
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="wow1.jpg"
                            alt="WoW Name Generator | Random Wow Name Generator | Name Idea Generator"
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="wow2.jpg"
                            alt="WoW Name Generator | Random Wow Name Generator | Name Idea Generator"
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
                    Related to Wow Name Generator
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
                    <h2 class="sm:text-[34px] text-[22px] font-semibold mb-4">
                     Why You Should Use Our WoW Name Generator Online?
                    </h2>
                    <p class="sm:text-[18px] text-[16px] font-semibold">
                    You might wonder why you need a name tool for WoW. Here’s why it actually helps.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold">
                                Names That Fit Your Role
                                </h3>
                                <p>
                                 You should know that our generator pulls from fantasy sounds and WoW lore tones. 
                                 So, names like “Drok’tan” or “Elunaria” feel like they belong in-game. They’re built to match races, roles, and classes.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Easy to Use
                                </h3>
                                <p>
                                This tool provides you with a straightforward user experience. Just click the <b> "Generate Names"</b> button to receive a list of random names. 
                                If the results do not meet your needs, clicking the button again generates a new set. This simplicity of our tool streamlines the name-generation process.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Fast Results, Big Ideas
                                </h3>
                                <p>
                                It’s no secret that naming takes time. According to a 2024 MMO player poll, 
                                over 55% of players said character names are harder to pick than appearances. Our tool solves that with one click.                    
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                User-Friendly and Quick
                                </h3>
                                <p>
                                You won’t need a WoW-level manual to use this. The tool works for beginners, veterans, writers, and gamers who just want a good name fast. 
                                There’s no lag. No complicated setup. Just instant ideas.              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Consistent Output
                                </h3>
                                <p>
                                The tool upholds consistent naming conventions that match WoW's theme. Each generated name follows the expected style and format. 
                                This consistency ensures reliable results for users needing names that fit the Warcraft universe. 
                                Users can trust the tool to produce names that align with the game’s established norms.         
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="wow1.webp"
                            alt="WoW Name Generator | Random Wow Name Generator | Name Idea Generator"
                            class="w-[300px] my-[30px] h-[320px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="wow3.jpg"
                            alt="WoW Name Generator | Random Wow Name Generator | Name Idea Generator"
                            class="w-[300px] h-[320px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>

<section class="bg-white py-10 px-4">
  <div class="w-[80%] mx-auto text-[#343a40] my-[30px] text-center">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">What Makes WoW Names So Unique?</h2>
    <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
      It’s important to know that WoW names often reflect your character’s race, background, or class. 
      Names for orcs sound brutal and raw. Elven names feel graceful and ancient. 
      Troll names might carry rhythm or power.
    </p>
    <p class="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
      Using the right name sets the tone before your character even attacks. It gives personality, culture, and depth all in one go.
    </p>
  </div>
</section>

<section class=" py-12 px-6">
  <div class="w-[80%] mx-auto text-[#343a40] my-[30px]">
    <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">🧙‍♂️ How to Pick the Right Name?</h2>
    <p class="text-gray-700 text-lg sm:text-xl text-center mb-6">
      You might want something that sounds <span class="italic">wise</span>, <span class="italic">wild</span>, or <span class="italic">wicked</span>. Start by choosing your character’s race and class—because that defines the tone.
      <br class="hidden sm:block" />
      Names like <strong>“Kalthira”</strong> suit a Night Elf Druid. <strong>“Mok’gor”</strong> feels perfect for an Orc Warrior. It’s all about matching sound to story.
    </p>
    
    <div class="bg-white shadow-md rounded-xl p-6 sm:p-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-4 text-center">🔧 You can use this WoW name generator for:</h3>
      <ul class="space-y-3 text-gray-700 text-base sm:text-lg list-none">
        <li class="flex items-start gap-2">
          <span class="text-green-600 text-xl">✔️</span>
          Naming characters in roleplay servers
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 text-xl">🖋️</span>
          Creating avatars for fanfiction or web comics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-yellow-500 text-xl">📜</span>
          Building your guild’s lore or character history
        </li>
        <li class="flex items-start gap-2">
          <span class="text-purple-600 text-xl">🎮</span>
          Finding WoW-style names for other fantasy games
        </li>
        <li class="flex items-start gap-2">
          <span class="text-pink-500 text-xl">🐾</span>
          Naming pets, companions, or original NPCs
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="bg-white py-12 px-6">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">🧝‍♂️ List of Unique WoW Names by Class Style</h2>

    <div class="mb-12">
      <h3 class="text-2xl font-semibold text-purple-700 mb-6">✨ Mage and Spellcaster Names</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Thalvion</h4>
          <p class="text-sm text-gray-600 italic">“Master of Frozen Sight”</p>
          <p class="mt-2 text-gray-700">A cold and calculating name for a frost mage with deep magical roots.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Myrrenil</h4>
          <p class="text-sm text-gray-600 italic">“Whispers of Arcane Wind”</p>
          <p class="mt-2 text-gray-700">Perfect for a night elf arcane user or draenei sorcerer.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Zok’vahr</h4>
          <p class="text-sm text-gray-600 italic">“Shadow of the Depths”</p>
          <p class="mt-2 text-gray-700">Ideal for a troll warlock with cursed powers.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Valestra</h4>
          <p class="text-sm text-gray-600 italic">“Keeper of Mystic Flame”</p>
          <p class="mt-2 text-gray-700">A fitting name for a fiery battlemage or blood elf spellweaver.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Orridan</h4>
          <p class="text-sm text-gray-600 italic">“Runes of the Void”</p>
          <p class="mt-2 text-gray-700">A dark, eerie tone for a warlock or void-infused caster.</p>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold text-red-700 mb-6">🛡️ Warrior and Tank Names</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Drok’tan</h4>
          <p class="text-sm text-gray-600 italic">“Hammer of the Wastes”</p>
          <p class="mt-2 text-gray-700">A strong name for an orc or tauren warrior.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Kaelgrim</h4>
          <p class="text-sm text-gray-600 italic">“Iron Spirit”</p>
          <p class="mt-2 text-gray-700">Sounds like a dwarf who’s seen centuries of battle.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Vornak</h4>
          <p class="text-sm text-gray-600 italic">“The Thunderblade”</p>
          <p class="mt-2 text-gray-700">Carries a mighty tone for a troll or draenei fighter.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Bryndra</h4>
          <p class="text-sm text-gray-600 italic">“Warden of the Blade”</p>
          <p class="mt-2 text-gray-700">A noble name, great for a human paladin or night elf tank.</p>
        </div>
        <div class="bg-gray-50 rounded-xl shadow-md p-5">
          <h4 class="font-bold text-lg text-gray-800">Garrusk</h4>
          <p class="text-sm text-gray-600 italic">“The Shielded Flame”</p>
          <p class="mt-2 text-gray-700">Perfect for a tank who leads with strength and fury.</p>
        </div>
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
                        <p className="text-[36px] px-4 font-semibold text-white">
                            Do you have a request
                        </p>
                    </div>
                    <div>
                        <p className="text-white px-4">
                            Commissions are available! Visit my contact page and send an
                            inquiry with the details of your request.
                        </p>
                    </div>
                    <div>
                       <a href="https://www.nameideagenerator.com/contact-us" target="_blank" rel="noopener noreferrer">
  <button className="bg-white text-black text-[20px] px-[30px] py-[12px] rounded-[10px] font-semibold">
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

export default WOWNameGenerator;

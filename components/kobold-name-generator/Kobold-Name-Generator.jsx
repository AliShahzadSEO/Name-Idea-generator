"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Drakthar Ironclaw", detail: "A male warrior kobold with formidable iron claws, known for his fierce combat skills.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Kragor Stonefang", detail: "A male warrior kobold with stone-like fangs, renowned for his strength and resilience.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Thornak Bloodscale", detail: "A male warrior kobold with blood-red scales, feared for his brutal attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Gorath Firetooth", detail: "A male warrior kobold with fiery teeth, known for his fiery rage in battle.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Bramor Ironjaw", detail: "A male warrior kobold with an iron jaw, respected for his unbreakable will.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Varkor Steelhide", detail: "A male warrior kobold with a steel hide, celebrated for his defensive capabilities.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Rukthar Ashblade", detail: "A male warrior kobold with an ash-colored blade, known for his skillful strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Morkin Ironfang", detail: "A male warrior kobold with iron fangs, renowned for his fierce bites in combat.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Branik Stormclaw", detail: "A male warrior kobold with storm-like claws, feared for his lightning-fast attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Zarok Flameheart", detail: "A male warrior kobold with a heart of flame, known for his fiery temperament.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Rogar Darkscale", detail: "A male warrior kobold with dark scales, notorious for his shadowy combat style.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Korrin Stormfang", detail: "A male warrior kobold with storm-like fangs, respected for his stormy fury in battle.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Haldor Grimblade", detail: "A male warrior kobold with a grim blade, feared for his grim demeanor and powerful strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Gorvok Emberclaw", detail: "A male warrior kobold with ember-like claws, known for his fiery attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Thornar Ironspike", detail: "A male warrior kobold with iron spikes, revered for his spiked weaponry and combat skills.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Marlok Flamefang", detail: "A male warrior kobold with flame-like fangs, celebrated for his scorching bites.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Drokthar Steelbiter", detail: "A male warrior kobold with steel-like bite, known for his powerful and unyielding attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Rurik Shadowclaw", detail: "A male warrior kobold with shadowy claws, respected for his stealth and combat prowess.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Brutok Thunderjaw", detail: "A male warrior kobold with a thunderous jaw, feared for his thunderous roars and strength.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Korath Bloodfang", detail: "A male warrior kobold with blood-red fangs, known for his ferocious bites in battle.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Vornak Ironclaw", detail: "A male warrior kobold with iron claws, renowned for his strength and durability.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Thrakor Emberjaw", detail: "A male warrior kobold with ember-like jaw, celebrated for his fiery jaw strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Gorath Stormspike", detail: "A male warrior kobold with stormy spikes, feared for his electrifying attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Barek Darkfang", detail: "A male warrior kobold with dark fangs, known for his shadowy and aggressive combat style.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Drakmar Fireclaw", detail: "A male warrior kobold with fiery claws, renowned for his blazing combat abilities.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Zarath Grimscale", detail: "A male warrior kobold with grim scales, feared for his dark and formidable presence.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Korgar Stormblade", detail: "A male warrior kobold with a stormy blade, known for his tempestuous and powerful strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Ragnar Bloodclaw", detail: "A male warrior kobold with blood-red claws, feared for his savage combat style.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Morthar Ironstorm", detail: "A male warrior kobold with an iron storm, celebrated for his tempestuous attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Garrik Flameblade", detail: "A male warrior kobold with a flame-infused blade, known for his fiery and cutting-edge attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Brakor Thunderclaw", detail: "A male warrior kobold with thunderous claws, respected for his powerful and thunderous strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Drakkor Emberfist", detail: "A male warrior kobold with ember-like fists, feared for his fiery and crushing blows.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Haldar Steelheart", detail: "A male warrior kobold with a steel heart, known for his unbreakable resolve and strength.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Rukgar Ironfang", detail: "A male warrior kobold with iron fangs, renowned for his fierce and unyielding attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Thornok Flamegrip", detail: "A male warrior kobold with flame-like grips, celebrated for his fiery and tight hold in combat.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Morgath Stormscale", detail: "A male warrior kobold with stormy scales, feared for his tempestuous and resilient nature.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Gorath Bloodtooth", detail: "A male warrior kobold with blood-red teeth, known for his savage and powerful bites.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Rogar Emberclaw", detail: "A male warrior kobold with ember-like claws, celebrated for his fiery and devastating strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Varkor Grimfang", detail: "A male warrior kobold with grim fangs, feared for his dark and aggressive combat style.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Branok Ironspike", detail: "A male warrior kobold with iron spikes, known for his formidable and spiked attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Korrak Flameheart", detail: "A male warrior kobold with a heart of flame, respected for his fiery and passionate combat.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Zarok Steelclaw", detail: "A male warrior kobold with steel claws, renowned for his sharp and enduring strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Thrakor Thunderfang", detail: "A male warrior kobold with thunderous fangs, known for his electrifying and powerful attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Gorvok Bloodblade", detail: "A male warrior kobold with a blood-red blade, feared for his savage and lethal strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Drakthar Stormheart", detail: "A male warrior kobold with a stormy heart, celebrated for his tempestuous and resilient nature.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Rurik Ironfist", detail: "A male warrior kobold with an iron fist, known for his powerful and unyielding punches.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Marlok Emberclaw", detail: "A male warrior kobold with ember-like claws, feared for his fiery and devastating strikes.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Bramar Flamefang", detail: "A male warrior kobold with flame-like fangs, known for his scorching and aggressive bites.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Vornak Thunderjaw", detail: "A male warrior kobold with a thunderous jaw, celebrated for his powerful and reverberating attacks.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Kragor Darktooth", detail: "A male warrior kobold with dark teeth, feared for his shadowy and aggressive combat style.", status: false, gender: "male", type: "warrior_kobold" },
    { name: "Rynna Flameclaw", detail: "A female warrior kobold with fiery claws, known for her fierce and scorching strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Thalra Ironspike", detail: "A female warrior kobold with iron spikes, respected for her formidable and spiked attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Grynda Bloodscale", detail: "A female warrior kobold with blood-red scales, celebrated for her brutal and fierce nature.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Morrana Emberfang", detail: "A female warrior kobold with ember-like fangs, feared for her fiery and aggressive bites.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Drina Stormclaw", detail: "A female warrior kobold with storm-like claws, known for her stormy and quick attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Kara Ironjaw", detail: "A female warrior kobold with an iron jaw, revered for her powerful and unyielding bites.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Zara Firetooth", detail: "A female warrior kobold with fiery teeth, known for her scorching and aggressive combat style.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Nara Darkscale", detail: "A female warrior kobold with dark scales, feared for her shadowy and stealthy attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Kara Thornblade", detail: "A female warrior kobold with thorn-like blades, celebrated for her sharp and precise strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Lyrna Bloodfang", detail: "A female warrior kobold with blood-red fangs, respected for her fierce and powerful bites.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Rilka Grimclaw", detail: "A female warrior kobold with grim claws, known for her dark and formidable attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Vera Emberclaw", detail: "A female warrior kobold with ember-like claws, feared for her fiery and devastating strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Mira Ironfang", detail: "A female warrior kobold with iron fangs, celebrated for her unyielding and powerful bites.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Brina Flameheart", detail: "A female warrior kobold with a heart of flame, known for her passionate and fiery combat style.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Thora Steelhide", detail: "A female warrior kobold with a steel hide, revered for her defensive and resilient nature.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Nyssa Stormfang", detail: "A female warrior kobold with storm-like fangs, known for her stormy and quick attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Grynn Ironclaw", detail: "A female warrior kobold with iron claws, respected for her strength and combat skills.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Hara Darkfang", detail: "A female warrior kobold with dark fangs, feared for her shadowy and aggressive combat style.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Lina Emberblade", detail: "A female warrior kobold with ember-like blade, celebrated for her fiery and cutting-edge strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Korra Thunderjaw", detail: "A female warrior kobold with a thunderous jaw, known for her powerful and resonant strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Mina Flamegrip", detail: "A female warrior kobold with flame-like grip, feared for her fiery and tight hold in combat.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Vyna Ironstorm", detail: "A female warrior kobold with an iron storm, celebrated for her tempestuous and strong attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Rona Bloodfang", detail: "A female warrior kobold with blood-red fangs, known for her fierce and powerful bites.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Rina Stormblade", detail: "A female warrior kobold with storm-like blade, respected for her swift and stormy strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Zara Grimblade", detail: "A female warrior kobold with a grim blade, feared for her dark and formidable strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Nira Fireclaw", detail: "A female warrior kobold with fiery claws, celebrated for her scorching and aggressive attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Rilka Stormscale", detail: "A female warrior kobold with stormy scales, known for her tempestuous and resilient nature.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Vera Bloodfang", detail: "A female warrior kobold with blood-red fangs, respected for her fierce and powerful bites.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Lina Emberfist", detail: "A female warrior kobold with ember-like fists, known for her fiery and crushing blows.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Kira Thornblade", detail: "A female warrior kobold with thorn-like blades, celebrated for her sharp and precise strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Hara Grimfang", detail: "A female warrior kobold with grim fangs, feared for her dark and formidable attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Brina Stormspike", detail: "A female warrior kobold with storm-like spikes, known for her tempestuous and sharp attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Grynn Ironfist", detail: "A female warrior kobold with an iron fist, respected for her powerful and unyielding punches.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Nyssa Emberclaw", detail: "A female warrior kobold with ember-like claws, feared for her fiery and devastating strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Rona Flameheart", detail: "A female warrior kobold with a heart of flame, known for her passionate and fiery combat style.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Mira Thunderclaw", detail: "A female warrior kobold with thunderous claws, known for her powerful and resonant strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Zara Ironclaw", detail: "A female warrior kobold with iron claws, respected for her strength and combat skills.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Lina Grimscale", detail: "A female warrior kobold with grim scales, feared for her dark and formidable attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Nara Firefang", detail: "A female warrior kobold with fiery fangs, known for her scorching and aggressive combat style.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Kara Stormclaw", detail: "A female warrior kobold with storm-like claws, celebrated for her stormy and quick attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Thora Emberblade", detail: "A female warrior kobold with an ember-like blade, known for her fiery and cutting-edge strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Rina Ironjaw", detail: "A female warrior kobold with an iron jaw, revered for her powerful and unyielding bites.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Vera Thornblade", detail: "A female warrior kobold with thorn-like blades, known for her sharp and precise strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Mina Fireclaw", detail: "A female warrior kobold with fiery claws, known for her scorching and aggressive attacks.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Brina Darkfang", detail: "A female warrior kobold with dark fangs, feared for her shadowy and aggressive combat style.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Grynn Thunderjaw", detail: "A female warrior kobold with a thunderous jaw, celebrated for her powerful and resonant strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Nyssa Flamefang", detail: "A female warrior kobold with flame-like fangs, known for her scorching and aggressive combat style.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Hara Ironfang", detail: "A female warrior kobold with iron fangs, respected for her strength and unyielding nature.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Zara Emberclaw", detail: "A female warrior kobold with ember-like claws, feared for her fiery and devastating strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Lina Grimblade", detail: "A female warrior kobold with a grim blade, known for her dark and formidable strikes.", status: false, gender: "female", type: "warrior_kobold" },
    { name: "Rynik Shadowclaw", detail: "A male rogue kobold with shadowy claws, known for his stealthy and elusive strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Thornak Sneakblade", detail: "A male rogue kobold with a blade designed for sneaky attacks, feared for his deceptive and precise strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Drekor Quickfoot", detail: "A male rogue kobold with quick and nimble feet, known for his swift and agile movements.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Korrik Shadowfang", detail: "A male rogue kobold with shadowy fangs, feared for his stealthy and dangerous bites.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Gorvan Nightstrike", detail: "A male rogue kobold with a penchant for night attacks, known for his stealthy and precise strikes under cover of darkness.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Zarvik Creepblade", detail: "A male rogue kobold with a blade designed for creeping attacks, celebrated for his stealth and precision.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Branok Swiftshadow", detail: "A male rogue kobold with swift movements and shadowy skills, skilled in quick and silent attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Lynar Darkfoot", detail: "A male rogue kobold with dark and stealthy footwork, known for his ability to move silently and strike swiftly.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Malthar Stealthclaw", detail: "A male rogue kobold with claws designed for stealth, renowned for his ability to remain hidden while attacking.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Varek Nightfang", detail: "A male rogue kobold with night-themed fangs, known for his deadly and elusive nighttime attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Gorik Swiftblade", detail: "A male rogue kobold with a swift blade, skilled in rapid and precise attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Rynar Shadowstrike", detail: "A male rogue kobold with shadowy strikes, known for his ability to strike from the shadows.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Korvok Silentfang", detail: "A male rogue kobold with silent fangs, feared for his quiet but deadly attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Thorin Nightblade", detail: "A male rogue kobold with a nightblade, adept at attacking from the darkness with precision.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Mikro Shadowcloak", detail: "A male rogue kobold with a shadowy cloak, known for his ability to blend into the shadows.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Drokir Quickblade", detail: "A male rogue kobold with a quick blade, skilled in fast and efficient combat.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Zarok Darkshadow", detail: "A male rogue kobold with dark shadows, feared for his ability to strike from the darkness.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Rurik Nightclaw", detail: "A male rogue kobold with night-themed claws, known for his stealthy and powerful attacks in the dark.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Varrik Stealthblade", detail: "A male rogue kobold with a blade designed for stealth, proficient in silent and precise strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Gorvan Quickshadow", detail: "A male rogue kobold with quick and shadowy skills, renowned for his rapid and elusive movements.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Korath Shadowgrip", detail: "A male rogue kobold with a shadowy grip, skilled in holding and attacking with precision.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Thorin Nightfoot", detail: "A male rogue kobold with night-themed footwork, known for his silent and stealthy movements.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Drakik Stealthfang", detail: "A male rogue kobold with stealthy fangs, feared for his ability to attack from the shadows silently.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Mavik Shadowstrike", detail: "A male rogue kobold with shadowy strikes, known for his deadly and swift attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Rynik Creepblade", detail: "A male rogue kobold with a creeping blade, skilled in sneaky and precise attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Zarik Darkcloak", detail: "A male rogue kobold with a dark cloak, adept at blending into shadows for surprise attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Gorin Nightshade", detail: "A male rogue kobold with night-themed abilities, known for his stealthy and dangerous strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Thronar Quickfoot", detail: "A male rogue kobold with quick and agile feet, known for his rapid and stealthy movements.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Malthor Shadowclaw", detail: "A male rogue kobold with shadowy claws, feared for his silent and precise attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Varek Darkfang", detail: "A male rogue kobold with dark fangs, skilled in stealthy and lethal attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Korik Stealthgrip", detail: "A male rogue kobold with a stealthy grip, known for his precise and quiet attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Rynar Nightcloak", detail: "A male rogue kobold with night-themed cloak, adept at hiding and striking from the darkness.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Gorik Shadowblade", detail: "A male rogue kobold with shadowy blade, skilled in quick and silent attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Drokthar Quickblade", detail: "A male rogue kobold with a quick blade, known for his rapid and stealthy strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Thorin Nightgrip", detail: "A male rogue kobold with night-themed grip, known for his powerful and stealthy attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Mavik Silentfang", detail: "A male rogue kobold with silent fangs, known for his quiet but deadly attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Rurik Darkblade", detail: "A male rogue kobold with a dark blade, feared for his stealthy and lethal strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Zarok Stealthclaw", detail: "A male rogue kobold with stealthy claws, known for his silent and precise attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Branok Shadowfang", detail: "A male rogue kobold with shadowy fangs, skilled in stealthy and dangerous attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Gorin Quickshadow", detail: "A male rogue kobold with quick shadowy skills, adept at swift and stealthy attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Thornik Darkshadow", detail: "A male rogue kobold with dark shadows, known for his ability to strike from the darkness.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Korvok Stealthblade", detail: "A male rogue kobold with a stealthy blade, skilled in silent and precise attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Malthar Shadowstrike", detail: "A male rogue kobold with shadowy strikes, known for his swift and silent attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Rynik Nightclaw", detail: "A male rogue kobold with night-themed claws, skilled in stealthy and precise attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Zarvik Silentblade", detail: "A male rogue kobold with a silent blade, known for his quiet but deadly strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Gorik Quickfoot", detail: "A male rogue kobold with quick and nimble feet, adept at swift and silent movements.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Drakik Shadowcloak", detail: "A male rogue kobold with a shadowy cloak, known for his ability to blend into the darkness.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Varek Nightshade", detail: "A male rogue kobold with night-themed abilities, skilled in stealthy and dangerous attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Mavik Darkfang", detail: "A male rogue kobold with dark fangs, known for his lethal and stealthy attacks.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Thorin Stealthblade", detail: "A male rogue kobold with a stealthy blade, renowned for his silent and precise strikes.", status: false, gender: "male", type: "rogue_kobold" },
    { name: "Nira Shadowclaw", detail: "A female rogue kobold with shadowy claws, skilled in stealthy and elusive strikes.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Lyra Quickblade", detail: "A female rogue kobold with a quick blade, known for her fast and agile combat skills.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Drina Nightfang", detail: "A female rogue kobold with night-themed fangs, adept at stealthy and powerful nighttime attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Kara Silentfoot", detail: "A female rogue kobold with silent footwork, known for her ability to move undetected.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Rina Shadowstrike", detail: "A female rogue kobold with shadowy strikes, skilled in striking from the shadows with precision.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Vera Darkcloak", detail: "A female rogue kobold with a dark cloak, known for her stealth and ability to blend into the darkness.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Thora Quickshadow", detail: "A female rogue kobold with quick and shadowy skills, adept at fast and stealthy movements.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Mina Nightshade", detail: "A female rogue kobold with night-themed abilities, known for her stealthy and dangerous strikes.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Lina Shadowfang", detail: "A female rogue kobold with shadowy fangs, skilled in silent and precise attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Hara Swiftblade", detail: "A female rogue kobold with swift blade skills, known for her fast and agile attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Vina Darkshadow", detail: "A female rogue kobold with dark shadows, adept at stealthy and lethal attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Nyssa Creepblade", detail: "A female rogue kobold with a creeping blade, skilled in stealthy and precise attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Rynna Shadowblade", detail: "A female rogue kobold with shadowy blade, known for her ability to strike from the shadows.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Brina Nightgrip", detail: "A female rogue kobold with night-themed grip, skilled in stealthy and powerful attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Mara Silentfang", detail: "A female rogue kobold with silent fangs, known for her quiet but deadly attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Kira Shadowcloak", detail: "A female rogue kobold with a shadowy cloak, adept at blending into the shadows.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Lyra Quickfoot", detail: "A female rogue kobold with quick and nimble feet, known for her swift and silent movements.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Grynn Nightblade", detail: "A female rogue kobold with night-themed blade, skilled in stealthy and precise attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Nara Darkfang", detail: "A female rogue kobold with dark fangs, known for her stealthy and dangerous strikes.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Rina Swiftshadow", detail: "A female rogue kobold with swift shadowy skills, known for her fast and stealthy movements.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Vera Silentblade", detail: "A female rogue kobold with a silent blade, skilled in quiet but lethal strikes.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Mina Nightclaw", detail: "A female rogue kobold with night-themed claws, known for her stealthy and powerful attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Lara Darkshadow", detail: "A female rogue kobold with dark shadows, known for her ability to blend into the darkness.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Hara Creepblade", detail: "A female rogue kobold with a creeping blade, known for her stealthy and precise attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Nira Quickblade", detail: "A female rogue kobold with a quick blade, skilled in fast and agile combat.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Lyra Nightstrike", detail: "A female rogue kobold with night-themed strikes, adept at stealthy and powerful nighttime attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Rina Silentfoot", detail: "A female rogue kobold with silent footwork, skilled in moving undetected and striking quietly.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Brina Shadowgrip", detail: "A female rogue kobold with shadowy grip, known for her precise and stealthy attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Kara Quickshadow", detail: "A female rogue kobold with quick and shadowy skills, known for her fast and stealthy attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Mara Darkblade", detail: "A female rogue kobold with a dark blade, skilled in stealthy and lethal attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Nira Nightfang", detail: "A female rogue kobold with night-themed fangs, known for her stealthy and deadly attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Vera Shadowstrike", detail: "A female rogue kobold with shadowy strikes, skilled in attacking from the shadows with precision.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Hara Silentfang", detail: "A female rogue kobold with silent fangs, known for her quiet but deadly attacks.", status: false, gender: "female", type: "rogue_kobold" },
      { name: "Thalrik Flameheart", detail: "A male mage kobold with fiery heart and powerful flame magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Zorik Mystshade", detail: "A male mage kobold with mystic powers and shadowy spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Malthor Arcaneclaw", detail: "A male mage kobold with arcane claws, skilled in magical attacks.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorvan Firefist", detail: "A male mage kobold with fire-themed spells and powerful attacks.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Varek Spellstone", detail: "A male mage kobold with spell-infused stone, adept at casting potent spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Drakon Lightflare", detail: "A male mage kobold with light-based magic, known for his radiant spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Korath Frostfang", detail: "A male mage kobold with frost-themed magic, skilled in cold spells and attacks.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Rurik Shadowflare", detail: "A male mage kobold with shadowy flares, known for his dark and elusive spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Drokir Arcanegrip", detail: "A male mage kobold with an arcane grip, adept at controlling magical energies.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorin Thunderbolt", detail: "A male mage kobold with thunder-based magic, skilled in storm spells and attacks.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Korrik Firebolt", detail: "A male mage kobold with fire-themed bolts, known for his quick and destructive fire magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Zarok Spellweaver", detail: "A male mage kobold with the ability to weave powerful spells with ease.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Vornak Lightstrike", detail: "A male mage kobold with light-based strikes, known for his blinding spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorik Frostflare", detail: "A male mage kobold with frost and flame magic, skilled in combining cold and fire spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Rynik Arcaneblade", detail: "A male mage kobold with a blade infused with arcane energy, adept at magical combat.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Borin Flameweaver", detail: "A male mage kobold with a mastery of flame magic, known for his fiery spellcasting.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Thorin Stormclaw", detail: "A male mage kobold with storm-themed magic, skilled in unleashing lightning and thunder.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Mavik Spellgrip", detail: "A male mage kobold with a firm grip on his spells, adept at controlling magical forces.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Korvok Arcaneheart", detail: "A male mage kobold with a heart of arcane magic, skilled in powerful and mystical spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Zarik Thunderfist", detail: "A male mage kobold with thunder-themed fists, known for his electrifying combat skills.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Drakthar Lightflare", detail: "A male mage kobold with light-based magic, renowned for his radiant and blinding spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorin Frostclaw", detail: "A male mage kobold with frost-themed claws, skilled in cold and icy magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Rynor Spellfist", detail: "A male mage kobold with spell-infused fists, adept at combining magic with physical strikes.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Thalor Firestrike", detail: "A male mage kobold with fire-themed strikes, known for his powerful and destructive fire magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Varek Arcaneflare", detail: "A male mage kobold with arcane flares, skilled in casting potent and explosive spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Malthar Lightfang", detail: "A male mage kobold with light-infused fangs, adept at blinding and radiant magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorik Stormfist", detail: "A male mage kobold with storm-themed magic, skilled in combining lightning and thunder spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Rurik Spellstone", detail: "A male mage kobold with spell-infused stone, known for his powerful magical abilities.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Korrin Thunderclaw", detail: "A male mage kobold with thunder-themed claws, skilled in lightning and storm magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Zarok Flameblade", detail: "A male mage kobold with a blade of flame, adept at fiery and destructive magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Drokir Arcaneweaver", detail: "A male mage kobold with the ability to weave complex arcane spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Thorin Frostblade", detail: "A male mage kobold with a frost-infused blade, skilled in icy and cold magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Mavik Lightclaw", detail: "A male mage kobold with light-themed claws, known for his radiant and blinding spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Korath Thunderstrike", detail: "A male mage kobold with thunder-based magic, skilled in powerful storm spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorin Spellflare", detail: "A male mage kobold with spell-infused flares, adept at casting potent and explosive spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Rynik Arcanewood", detail: "A male mage kobold with arcane wood magic, skilled in using nature-based spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Vornak Fireclaw", detail: "A male mage kobold with fire-themed claws, known for his destructive fire magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Zarik Lightstone", detail: "A male mage kobold with light-infused stone, adept at casting radiant and powerful spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorik Arcanegrip", detail: "A male mage kobold with a firm grip on arcane magic, skilled in controlling mystical energies.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Drakthar Stormstone", detail: "A male mage kobold with storm-infused stone, known for his powerful and destructive storm magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Korrik Frostfire", detail: "A male mage kobold with a blend of frost and fire magic, adept at combining cold and heat spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Rurik Flameblade", detail: "A male mage kobold with a blade of flame, skilled in fiery magic and combat.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Malthor Arcanelight", detail: "A male mage kobold with arcane light magic, known for his radiant and mystical spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Thorin Spellweaver", detail: "A male mage kobold with the ability to weave powerful spells with precision.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Zarok Thunderstrike", detail: "A male mage kobold with thunder-themed magic, skilled in powerful lightning spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorin Lightflare", detail: "A male mage kobold with light-based magic, adept at casting radiant and blinding spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Rynor Arcaneheart", detail: "A male mage kobold with a heart of arcane magic, skilled in powerful and mystical spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Varek Frostclaw", detail: "A male mage kobold with frost-themed claws, adept at icy and cold magic.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Gorik Fireweaver", detail: "A male mage kobold with fire-infused magic, skilled in weaving destructive fire spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Thalor Spellstone", detail: "A male mage kobold with spell-infused stone, adept at casting powerful spells.", status: false, gender: "male", type: "mage_kobold" },
      { name: "Lyra Flameweaver", detail: "A female mage kobold with mastery over flame magic, known for her fiery spellcasting.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Thalia Mystblade", detail: "A female mage kobold with mystical blades, skilled in casting powerful and elusive spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nira Frostflame", detail: "A female mage kobold with a combination of frost and flame magic, adept at blending cold and heat spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Grynn Arcaneheart", detail: "A female mage kobold with a deep connection to arcane magic, skilled in powerful spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Rina Lightflare", detail: "A female mage kobold with light-themed magic, known for her radiant and blinding spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Vera Spellclaw", detail: "A female mage kobold with spell-infused claws, adept at casting magical attacks.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Hara Thunderstrike", detail: "A female mage kobold with thunder-based magic, skilled in unleashing lightning and storm spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Mara Arcaneweaver", detail: "A female mage kobold with the ability to weave complex arcane spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Lara Frostfang", detail: "A female mage kobold with frost-themed fangs, adept at cold and icy magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nara Flameblade", detail: "A female mage kobold with a blade of flame, skilled in fiery and destructive magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Kara Lightstone", detail: "A female mage kobold with light-infused stone, adept at casting radiant spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Brina Mystshadow", detail: "A female mage kobold with mystic shadows, skilled in elusive and dark spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nyssa Fireclaw", detail: "A female mage kobold with fire-themed claws, adept at fiery and destructive magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Vina Spellweaver", detail: "A female mage kobold with the ability to weave powerful spells with precision.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Rynna Arcaneclaw", detail: "A female mage kobold with arcane claws, skilled in casting potent and mystical spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Mira Thunderfist", detail: "A female mage kobold with thunder-themed fists, known for her electrifying magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Hara Fireflare", detail: "A female mage kobold with a blend of fire and flare magic, adept at combining destructive spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Grynn Lightheart", detail: "A female mage kobold with light-themed heart, skilled in casting radiant magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Lina Froststrike", detail: "A female mage kobold with frost-themed strikes, adept at icy and cold magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nira Spellgrip", detail: "A female mage kobold with spell-infused grip, skilled in casting powerful magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Kara Arcaneflare", detail: "A female mage kobold with arcane flares, adept at casting potent and mystical spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Vera Frostblade", detail: "A female mage kobold with frost-themed blade, skilled in icy and cold magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Mara Lightfang", detail: "A female mage kobold with light-infused fangs, known for her radiant and blinding spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Lara Thunderclaw", detail: "A female mage kobold with thunder-themed claws, adept at casting powerful lightning spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nina Mystheart", detail: "A female mage kobold with a mystic heart, skilled in casting powerful and elusive magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Hara Flameweaver", detail: "A female mage kobold with mastery over flame magic, known for her fiery spellcasting.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Brina Spellstone", detail: "A female mage kobold with spell-infused stone, adept at powerful spellcasting.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Grynn Lightflare", detail: "A female mage kobold with light-based magic, known for her radiant and blinding spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Vina Arcanelight", detail: "A female mage kobold with arcane light magic, skilled in casting radiant and mystical spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Rina Thunderstrike", detail: "A female mage kobold with thunder-themed magic, known for her powerful lightning spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Mira Firefang", detail: "A female mage kobold with fire-themed fangs, adept at casting destructive fire spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Lina Frostclaw", detail: "A female mage kobold with frost-themed claws, skilled in icy magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nara Arcaneweaver", detail: "A female mage kobold with the ability to weave complex arcane spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Lyra Lightblade", detail: "A female mage kobold with light-infused blades, skilled in radiant magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Kara Spellflare", detail: "A female mage kobold with spell-infused flares, adept at casting powerful spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Brina Frostfire", detail: "A female mage kobold with a blend of frost and fire magic, adept at combining cold and heat spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Vera Thunderfist", detail: "A female mage kobold with thunder-themed fists, skilled in lightning magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Hara Lightclaw", detail: "A female mage kobold with light-infused claws, adept at casting radiant and blinding spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nina Flameheart", detail: "A female mage kobold with a heart of flame, known for her fiery spellcasting.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Mara Spellgrip", detail: "A female mage kobold with spell-infused grip, skilled in casting powerful magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Lara Arcanelight", detail: "A female mage kobold with arcane light magic, known for her radiant spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Nina Fireblade", detail: "A female mage kobold with a blade of fire, skilled in casting destructive spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Brina Thunderclaw", detail: "A female mage kobold with thunder-themed claws, skilled in casting lightning spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Vera Arcaneheart", detail: "A female mage kobold with a deep connection to arcane magic, skilled in powerful spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Grynn Lightflare", detail: "A female mage kobold with light-based magic, known for her radiant spells.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Lyra Frostfang", detail: "A female mage kobold with frost-themed fangs, adept at cold magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Kara Spellstone", detail: "A female mage kobold with spell-infused stone, skilled in powerful magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Hara Mystshadow", detail: "A female mage kobold with mystic shadows, adept at elusive and dark magic.", status: false, gender: "female", type: "mage_kobold" },
      { name: "Mara Lightflare", detail: "A female mage kobold with light-based magic, skilled in casting radiant spells.", status: false, gender: "female", type: "mage_kobold" },
       { name: "Zorik Trickshadow", detail: "A male trickster kobold with shadowy tricks and stealth skills.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Drokthar Sneakfang", detail: "A male trickster kobold known for his sneaky tactics and fang-like attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Korik Creepclaw", detail: "A male trickster kobold with the ability to creep and strike with deadly claws.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorin Jesterblade", detail: "A male trickster kobold wielding a blade with jester-like tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Varek Shadowfist", detail: "A male trickster kobold who uses shadowy fists in his trickery.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Rynik Quickfoot", detail: "A male trickster kobold known for his quick and nimble movements.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Brakoth Trickblade", detail: "A male trickster kobold skilled with a blade and trickery.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Korrik Sneakfoot", detail: "A male trickster kobold who excels in sneaking with swift feet.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Drakmar Shadowclaw", detail: "A male trickster kobold with shadow-infused claws for stealthy attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Thornik Jesterfang", detail: "A male trickster kobold with jester-like fangs for tricky combat.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Malthor Trickshadow", detail: "A male trickster kobold adept at using shadows in his tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorik Quickblade", detail: "A male trickster kobold known for his quick and precise blade strikes.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Vornak Shadowgrip", detail: "A male trickster kobold with a strong grip and shadowy magic.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Rynar Creepfang", detail: "A male trickster kobold with creeping skills and fang-like attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Korath Trickclaw", detail: "A male trickster kobold with claw-based trickery.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Zarok Sneakblade", detail: "A male trickster kobold with a sneaky blade and stealth skills.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Mavik Jesterclaw", detail: "A male trickster kobold with jester-themed claws for tricky combat.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Thorin Shadowfoot", detail: "A male trickster kobold with shadow-based stealth and quick movements.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorin Quickshadow", detail: "A male trickster kobold adept at quick and shadowy tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Rynik Trickfist", detail: "A male trickster kobold who uses trickery with his fists.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Drakthar Sneakgrip", detail: "A male trickster kobold with a grip of sneaky tactics.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Thornar Jesterblade", detail: "A male trickster kobold skilled in jester-themed blade combat.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Korrik Shadowfang", detail: "A male trickster kobold with shadowy fangs and stealth abilities.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Varek Trickfoot", detail: "A male trickster kobold known for his tricky footwork.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorin Creepblade", detail: "A male trickster kobold who combines creeping and blade skills.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Rynor Sneakfist", detail: "A male trickster kobold skilled in sneaky fist-based attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Malthor Jesterclaw", detail: "A male trickster kobold with jester-themed claws and tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Korath Quickfoot", detail: "A male trickster kobold known for his quick and nimble movements.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Zarath Shadowgrip", detail: "A male trickster kobold with a shadowy grip and stealth skills.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorik Trickshadow", detail: "A male trickster kobold skilled in shadowy tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Drakmar Creepclaw", detail: "A male trickster kobold with creeping claws and stealth skills.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Thornik Sneakblade", detail: "A male trickster kobold who excels in sneaky blade attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Mavik Jestergrip", detail: "A male trickster kobold with jester-themed grip skills.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Rynik Quickfang", detail: "A male trickster kobold known for his quick and fang-like attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Korik Shadowclaw", detail: "A male trickster kobold skilled in shadowy claw attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorin Trickfang", detail: "A male trickster kobold with trick-based fang attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Thorin Sneakfoot", detail: "A male trickster kobold with sneaky footwork and stealth.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Zarok Jesterblade", detail: "A male trickster kobold who uses a jester-themed blade in his tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Varek Shadowfist", detail: "A male trickster kobold with shadow-based fist attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Rynar Trickshadow", detail: "A male trickster kobold known for his shadowy tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Malthor Quickblade", detail: "A male trickster kobold with quick blade skills and trickery.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Korath Creepfoot", detail: "A male trickster kobold skilled in creeping footwork and stealth.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorin Sneakfist", detail: "A male trickster kobold with sneaky fist attacks and tactics.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Thornik Trickclaw", detail: "A male trickster kobold with tricky claw attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Vornak Jestergrip", detail: "A male trickster kobold with jester-themed grip and tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Drakthar Quickshadow", detail: "A male trickster kobold with quick and shadowy skills.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Zarath Sneakfang", detail: "A male trickster kobold with sneaky fang attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Mavik Trickfang", detail: "A male trickster kobold with tricky fang attacks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Rynik Jesterfoot", detail: "A male trickster kobold with jester-themed foot tricks.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Gorin Trickblade", detail: "A male trickster kobold with a trick-based blade.", status: false, gender: "male", type: "trickster_kobold" },
    { name: "Lyra Trickshadow", detail: "A female trickster kobold with shadowy tricks and stealth skills.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nira Sneakblade", detail: "A female trickster kobold known for her sneaky blade and stealth skills.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Hara Creepclaw", detail: "A female trickster kobold with creeping claws for stealthy attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Brina Jesterfang", detail: "A female trickster kobold with jester-themed fangs for tricky combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Vera Shadowgrip", detail: "A female trickster kobold with a strong grip and shadowy magic.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Mara Quickfoot", detail: "A female trickster kobold known for her quick and nimble movements.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Rina Trickclaw", detail: "A female trickster kobold skilled with tricky claws.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lina Sneakfist", detail: "A female trickster kobold with sneaky fist-based attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Kara Jesterblade", detail: "A female trickster kobold with jester-themed blades for combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nara Shadowfang", detail: "A female trickster kobold with shadowy fangs for stealthy attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lyra Quickshadow", detail: "A female trickster kobold skilled in quick and shadowy tricks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Hara Trickfoot", detail: "A female trickster kobold with tricky footwork.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Grynn Creepblade", detail: "A female trickster kobold with creeping blade attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nina Shadowclaw", detail: "A female trickster kobold with shadowy claws for combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Brina Sneakfang", detail: "A female trickster kobold with sneaky fangs for stealthy attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Vera Trickblade", detail: "A female trickster kobold with a trick-based blade.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Mina Jestergrip", detail: "A female trickster kobold with jester-themed grip skills.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lara Quickfang", detail: "A female trickster kobold known for her quick and fang-like attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nara Sneakfoot", detail: "A female trickster kobold with sneaky footwork.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Kara Trickshadow", detail: "A female trickster kobold skilled in shadowy tricks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Mara Shadowfist", detail: "A female trickster kobold with shadow-based fist attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Vera Jesterclaw", detail: "A female trickster kobold with jester-themed claws for combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Rina Quickblade", detail: "A female trickster kobold with a quick and tricky blade.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Grynn Sneakblade", detail: "A female trickster kobold with sneaky blade skills.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Hara Trickclaw", detail: "A female trickster kobold skilled in tricky claw attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lina Creepfoot", detail: "A female trickster kobold with creeping footwork and stealth skills.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lyra Jesterfang", detail: "A female trickster kobold with jester-themed fangs for tricky combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nina Shadowgrip", detail: "A female trickster kobold with a shadowy grip for stealth and trickery.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Mara Sneakfist", detail: "A female trickster kobold with sneaky fist-based attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Vera Trickfang", detail: "A female trickster kobold skilled in trick-based fang attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lara Jesterblade", detail: "A female trickster kobold with jester-themed blades for combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Brina Quickfoot", detail: "A female trickster kobold known for her quick and nimble footwork.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Hara Shadowfang", detail: "A female trickster kobold with shadowy fangs for stealthy attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Grynn Trickfoot", detail: "A female trickster kobold with tricky footwork and stealth.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nara Creepblade", detail: "A female trickster kobold with creeping blade attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Mina Sneakblade", detail: "A female trickster kobold with sneaky blade skills.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Rina Jestergrip", detail: "A female trickster kobold with jester-themed grip skills.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lina Trickfist", detail: "A female trickster kobold with tricky fist attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Vera Shadowclaw", detail: "A female trickster kobold with shadowy claws for stealthy combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Brina Quickfang", detail: "A female trickster kobold with quick fang-based attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lyra Sneakfang", detail: "A female trickster kobold with sneaky fang attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Mara Creepblade", detail: "A female trickster kobold skilled with creeping blade attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Kara Trickblade", detail: "A female trickster kobold with a tricky blade.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Grynn Jesterclaw", detail: "A female trickster kobold with jester-themed claws for tricky combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nina Quickfoot", detail: "A female trickster kobold with quick and nimble footwork.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Lara Sneakfoot", detail: "A female trickster kobold with sneaky footwork.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Nara Trickclaw", detail: "A female trickster kobold skilled in tricky claw attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Vera Jesterfang", detail: "A female trickster kobold with jester-themed fangs for tricky combat.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Hara Quickblade", detail: "A female trickster kobold with quick and tricky blade attacks.", status: false, gender: "female", type: "trickster_kobold" },
    { name: "Mina Shadowfang", detail: "A female trickster kobold with shadowy fangs for stealthy attacks.", status: false, gender: "female", type: "trickster_kobold" },
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

const KoboldNameGenerator = () => {
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

    const bgImage = "/kobold.jpg"
    const context = " Kobold Name Generator"

    const Q1 = "What is a Kobold Name Generator?"

    const A1 = 'An online tool designed to generate random names for Kobold characters based on established cultural and linguistic patterns.'
    
    const Q2 = "How does it work?"
    
    const A2 = 'Our generator utilizes algorithms to combine syllables and sounds typical of Kobold names, ensuring uniqueness and authenticity.'
    
    const Q3 = "Can I use the names for commercial purposes?"
    
    const A3 = "Yes, you are free to use the names generated by our tool for any commercial projects, including books, games, and other media."
    
    const Q4 = "Is my data secure?"
    
    const A4 = "We prioritize the security and privacy of your data. Our platform employs robust measures to protect your information."
    
    const Q5 = "Do I need to create an account to use the generator?"
    
    const A5 = "Basic features of the generator can be accessed without creating an account. However, creating an account allows you to save and revisit your favorite names conveniently."

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
                            Random Kobold Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Kobold</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="warrior_kobold">Warrior Kobolds</option>
                            <option value="rogue_kobold">Rogue Kobolds</option>
                            <option value="mage_kobold">Mage Kobolds</option>
                            <option value="trickster_kobold">Trickster Kobolds</option>

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
                        Our Kobold Name Generator is a versatile tool designed to help you discover authentic names for Kobold characters in your creative projects. 
                        Whether you're writing a fantasy novel, developing a game, or exploring Kobold culture, this free tool provides a convenient way to generate fitting names.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Kobolds are small, reptilian humanoid creatures frequently depicted in fantasy literature and games. 
                        Known for their cunning nature, affinity for traps and ambushes, and skills in mining and crafting, Kobolds offer a range of intriguing characteristics for your projects.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        While Kobolds may vary in appearance and abilities across different fictional settings, 
                        they typically share these core traits. Our generator offers a diverse selection of names to enhance your creative process and bring your Kobold characters to life. 
                        Explore how our tool can assist you in crafting the perfect names for your Kobold characters.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Kobold Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Our Kobold Name Generator is straightforward and enjoyable. Follow these simple steps to generate names that resonate with Kobold culture and characteristics.
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1: Access the Tool
                            </h3>
                            <p>
                            Open our Kobold Name Generator by visiting our Name Generator website. This is where you will begin the process of finding the perfect name for your Kobold characters.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2: Run the Tool
                            </h3>
                            <p>
                            Click on the <b> "Generate Names"</b> button to initiate the name generation process. The tool will provide you with a list of names inspired by Kobold culture and characteristics.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3: Choose Your Name
                            </p>
                            <p>
                            Review the generated names and select the one that best fits your creative needs. Use the chosen name to enhance your project.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="kobold1.jpg"
                            alt=""
                            className="w-[250px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="kobold2.jpg"
                            alt=""
                            className="w-[280px] h-[300px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/Kobold name generator.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Kobold-Name-Generator
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
                    Why Use Our Kobold Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Explore these features and use our Kobold Name Generator to create compelling and immersive characters. 
                    Discover how our tool meets your expectations and supports your creative projects. 
                    </p>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Explore the features to see how our generator can enhance your creative process.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Boost Your Creativity
                                </h3>
                                <p>
                                Our Kobold Name Generator helps you craft authentic names that reflect the rich cultural background and unique traits of Kobold characters. 
                                With a broad range of names you can easily create names that enhance the depth and believability. This way,our tool will spark your imagination and support your creative vision.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Save Time and Effort
                                </h3>
                                <p>
                                Generating names can be a time-consuming task. Our Kobold Name Generator simplifies this process, providing you with instant results. 
                                With just a click of a button, you receive a list of random names, allowing you to focus on other critical aspects of your project. 
                                This efficiency saves you valuable time and streamlines your creative workflow.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Ensure Consistency
                                </h3>
                                <p>
                                Maintaining consistency in name conventions is crucial for a cohesive narrative. 
                                Our Kobold Name Generator ensures that every name generated adheres to thematic and cultural appropriateness. 
                                This consistency contributes to a unified world-building experience, enhancing the overall quality of your storytelling.                   
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Versatile Applications
                                </h3>
                                <p>
                                Our generator is designed for a wide range of creative applications. 
                                Whether you're crafting a fantasy novel, developing a game, or exploring Kobold culture, our tool provides names that are suitable for various projects. 
                                The versatility of our generator makes it an essential asset for any creative endeavor involving Kobold characters.                       
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Inspiration for World-Building
                                </h3>
                                <p>
                                Names play a critical role in world-building, reflecting the history, traditions, and societal norms of fictional species. O
                                ur Kobold Name Generator provides names that evoke the imagery and themes specific to Kobold culture, aiding in the creation of detailed and immersive worlds. 
                                Use our tool to inspire rich world-building and develop characters.                        
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Professional Quality
                                </h3>
                                <p>
                                Whether you're a novice writer or an experienced game developer, our Kobold Name Generator delivers names of professional quality. 
                                The names generated enhance the richness and authenticity of your projects, helping to captivate readers and players. 
                                Our tool showcases your commitment to high-quality craftsmanship. 
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="kobold3.avif"
                            alt=""
                            class="w-[320px] my-[30px] h-[450px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="kobold4.jpeg"
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

export default KoboldNameGenerator;

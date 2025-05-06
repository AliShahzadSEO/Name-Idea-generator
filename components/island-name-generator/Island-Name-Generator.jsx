"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Coralion", detail: "A male tropical isle inhabitant with deep ties to the coral reefs.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Tropica", detail: "A male tropical isle inhabitant, named after the lush environment.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Mariluna", detail: "A male tropical isle inhabitant with a connection to the moonlit sea.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Ceresca", detail: "A male tropical isle inhabitant with a strong bond to natural elements.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Oceandor", detail: "A male tropical isle inhabitant who governs the seas and shores.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Sunoria", detail: "A male tropical isle inhabitant radiating warmth and light.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Zephyros", detail: "A male tropical isle inhabitant connected to the winds and breezes.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Lumina", detail: "A male tropical isle inhabitant glowing with natural luminescence.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Kairose", detail: "A male tropical isle inhabitant with the ability to control the tides.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Reefon", detail: "A male tropical isle inhabitant, guardian of the coral reefs.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Palmaris", detail: "A male tropical isle inhabitant named after the island's palm trees.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Solaro", detail: "A male tropical isle inhabitant imbued with the energy of the sun.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Aqualon", detail: "A male tropical isle inhabitant with mastery over water and waves.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Solstara", detail: "A male tropical isle inhabitant empowered by the stars and the sun.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Seaford", detail: "A male tropical isle inhabitant who dwells near the ocean.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Nereon", detail: "A male tropical isle inhabitant with an affinity for underwater life.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Zephyrus", detail: "A male tropical isle inhabitant connected to gentle sea breezes.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Oceania", detail: "A male tropical isle inhabitant with dominion over vast oceans.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Solaris", detail: "A male tropical isle inhabitant with powers from the sun.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Aquara", detail: "A male tropical isle inhabitant who controls aquatic life.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Arion", detail: "A male tropical isle inhabitant known for his speed on water.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Coralonis", detail: "A male tropical isle inhabitant deeply connected to coral formations.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Tropalon", detail: "A male tropical isle inhabitant representing the essence of tropical nature.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Marisol", detail: "A male tropical isle inhabitant tied to the sea and sun.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Thalor", detail: "A male tropical isle inhabitant known for his mastery of the sea.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Valtoro", detail: "A male tropical isle inhabitant with strength derived from the land.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Edenis", detail: "A male tropical isle inhabitant embodying paradise and peace.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Aurona", detail: "A male tropical isle inhabitant glowing with the light of dawn.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Cascada", detail: "A male tropical isle inhabitant linked to cascading waterfalls.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Lumor", detail: "A male tropical isle inhabitant shining brightly like the sun.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Kairon", detail: "A male tropical isle inhabitant who commands the tides.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Coralith", detail: "A male tropical isle inhabitant who protects coral reefs.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Solisca", detail: "A male tropical isle inhabitant bathed in solar energy.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Elandor", detail: "A male tropical isle inhabitant named after the island’s majestic forests.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Trionis", detail: "A male tropical isle inhabitant connected to three key elements: sun, sea, and land.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Pelagos", detail: "A male tropical isle inhabitant of the deep sea.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Helios", detail: "A male tropical isle inhabitant empowered by the sun’s rays.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Mareon", detail: "A male tropical isle inhabitant of the vast ocean.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Velor", detail: "A male tropical isle inhabitant known for his agility and speed.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Auron", detail: "A male tropical isle inhabitant who glows with golden light.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Luminara", detail: "A male tropical isle inhabitant filled with radiant energy.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Maraxis", detail: "A male tropical isle inhabitant with dominion over the sea.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Zephyria", detail: "A male tropical isle inhabitant with mastery over the winds.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Pyrion", detail: "A male tropical isle inhabitant who controls fire and heat.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Nereon", detail: "A male tropical isle inhabitant connected to deep ocean life.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Tropion", detail: "A male tropical isle inhabitant representing tropical fauna.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Maron", detail: "A male tropical isle inhabitant, a protector of the island.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Aqualis", detail: "A male tropical isle inhabitant with command over water.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Solon", detail: "A male tropical isle inhabitant filled with the sun’s power.", status: false, gender: "male", type: "tropical_isle" },
    { name: "Reefora", detail: "A male tropical isle inhabitant guardian of coral reefs.", status: false, gender: "male", type: "tropical_isle" },

    { name: "Coralina", detail: "A female tropical isle inhabitant deeply tied to coral reefs.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Tropica", detail: "A female tropical isle inhabitant, named after the lush environment.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Mariluna", detail: "A female tropical isle inhabitant with a connection to the moonlit sea.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Ceresca", detail: "A female tropical isle inhabitant with a strong bond to natural elements.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Oceana", detail: "A female tropical isle inhabitant who rules over the seas.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Sunara", detail: "A female tropical isle inhabitant radiating warmth and light.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Zephyra", detail: "A female tropical isle inhabitant connected to the winds.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Lumina", detail: "A female tropical isle inhabitant glowing with natural luminescence.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Kaira", detail: "A female tropical isle inhabitant who controls the tides.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Reefa", detail: "A female tropical isle inhabitant who protects the coral reefs.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Palmara", detail: "A female tropical isle inhabitant named after the island's palm trees.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Solara", detail: "A female tropical isle inhabitant imbued with the energy of the sun.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Aquara", detail: "A female tropical isle inhabitant who controls aquatic life.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Solara", detail: "A female tropical isle inhabitant filled with solar energy.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Seafara", detail: "A female tropical isle inhabitant who sails the ocean waves.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Nerea", detail: "A female tropical isle inhabitant connected to the sea nymphs.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Zephyra", detail: "A female tropical isle inhabitant connected to gentle sea breezes.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Oceanis", detail: "A female tropical isle inhabitant ruling over the vast oceans.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Solaris", detail: "A female tropical isle inhabitant with powers from the sun.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Aqualia", detail: "A female tropical isle inhabitant who controls water.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Ariona", detail: "A female tropical isle inhabitant known for her grace on water.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Coralith", detail: "A female tropical isle inhabitant connected to the coral reefs.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Tropina", detail: "A female tropical isle inhabitant embodying tropical nature.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Maris", detail: "A female tropical isle inhabitant with ties to the ocean.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Thalia", detail: "A female tropical isle inhabitant known for her connection to the sea breeze.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Valtara", detail: "A female tropical isle inhabitant, embodying strength and wisdom.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Edena", detail: "A female tropical isle inhabitant, embodying paradise and peace.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Aurona", detail: "A female tropical isle inhabitant glowing with the light of dawn.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Cascadia", detail: "A female tropical isle inhabitant connected to the cascading waterfalls.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Lumara", detail: "A female tropical isle inhabitant radiating with natural light.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Kairia", detail: "A female tropical isle inhabitant who commands the tides.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Corala", detail: "A female tropical isle inhabitant protector of coral reefs.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Solisca", detail: "A female tropical isle inhabitant bathed in solar energy.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Elaria", detail: "A female tropical isle inhabitant connected to the island’s forest.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Triona", detail: "A female tropical isle inhabitant connected to sun, sea, and land.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Pelagia", detail: "A female tropical isle inhabitant of the deep sea.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Helia", detail: "A female tropical isle inhabitant empowered by the sun.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Mareia", detail: "A female tropical isle inhabitant of the vast ocean.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Velora", detail: "A female tropical isle inhabitant known for her agility.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Aurona", detail: "A female tropical isle inhabitant glowing with golden light.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Luminara", detail: "A female tropical isle inhabitant filled with radiant energy.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Marisca", detail: "A female tropical isle inhabitant with ties to the sea.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Zephyra", detail: "A female tropical isle inhabitant who commands the winds.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Pyrora", detail: "A female tropical isle inhabitant with control over fire.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Nerea", detail: "A female tropical isle inhabitant connected to the ocean's depths.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Tropia", detail: "A female tropical isle inhabitant representing tropical fauna.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Maronara", detail: "A female tropical isle inhabitant, protector of the island.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Aqualina", detail: "A female tropical isle inhabitant with the power of water.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Solara", detail: "A female tropical isle inhabitant glowing with solar energy.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Reefia", detail: "A female tropical isle inhabitant protector of coral reefs.", status: false, gender: "female", type: "tropical_isle" },
    { name: "Glacius", detail: "A male arctic isle inhabitant with command over glaciers.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Frostor", detail: "A male arctic isle inhabitant known for his icy demeanor.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Aurion", detail: "A male arctic isle inhabitant with power from the northern lights.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Icelon", detail: "A male arctic isle inhabitant with the ability to freeze anything.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Borealis", detail: "A male arctic isle inhabitant tied to the Aurora Borealis.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Frostan", detail: "A male arctic isle inhabitant embodying frost and snow.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Cryonis", detail: "A male arctic isle inhabitant with cryogenic powers.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Snowor", detail: "A male arctic isle inhabitant who commands snowstorms.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Thalor", detail: "A male arctic isle inhabitant representing frozen waters.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Shiveron", detail: "A male arctic isle inhabitant who brings chills wherever he goes.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacoron", detail: "A male arctic isle inhabitant made of ancient ice.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Iceford", detail: "A male arctic isle inhabitant guarding the frozen rivers.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Arcton", detail: "A male arctic isle inhabitant ruling the coldest regions.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Vortexar", detail: "A male arctic isle inhabitant controlling icy vortices.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Frostmar", detail: "A male arctic isle inhabitant embodying the power of frost.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Hailor", detail: "A male arctic isle inhabitant who can summon hailstorms.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Cryonix", detail: "A male arctic isle inhabitant with advanced cryokinesis.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Polarion", detail: "A male arctic isle inhabitant tied to the polar regions.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacor", detail: "A male arctic isle inhabitant made entirely of ice.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Frigor", detail: "A male arctic isle inhabitant who controls freezing temperatures.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Nivon", detail: "A male arctic isle inhabitant tied to snowy peaks.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Boreon", detail: "A male arctic isle inhabitant who harnesses the power of the cold north.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Snowal", detail: "A male arctic isle inhabitant who controls snow drifts.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Thalor", detail: "A male arctic isle inhabitant ruling frozen seas.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Hailon", detail: "A male arctic isle inhabitant capable of summoning powerful hail.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Crylon", detail: "A male arctic isle inhabitant with mastery over icy structures.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Arctonix", detail: "A male arctic isle inhabitant imbued with arctic strength.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacius", detail: "A male arctic isle inhabitant with command over glacial landscapes.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Froston", detail: "A male arctic isle inhabitant embodying frost energy.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Icelonix", detail: "A male arctic isle inhabitant capable of creating ice storms.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Boreos", detail: "A male arctic isle inhabitant who can summon cold winds.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Hailor", detail: "A male arctic isle inhabitant summoning icy hail.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Cryona", detail: "A male arctic isle inhabitant with powers of cryokinesis.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Snowis", detail: "A male arctic isle inhabitant with control over snow and ice.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Arctos", detail: "A male arctic isle inhabitant commanding the arctic cold.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacion", detail: "A male arctic isle inhabitant who can freeze his surroundings.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Frostis", detail: "A male arctic isle inhabitant who can harness frost.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Nivor", detail: "A male arctic isle inhabitant with power over icy mountain peaks.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacona", detail: "A male arctic isle inhabitant who controls ancient glaciers.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Arctos", detail: "A male arctic isle inhabitant tied to arctic wilderness.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Polarix", detail: "A male arctic isle inhabitant who rules over polar regions.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Boreonix", detail: "A male arctic isle inhabitant mastering the icy winds.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Cryoran", detail: "A male arctic isle inhabitant harnessing cold energy.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Thalor", detail: "A male arctic isle inhabitant with ties to the frozen oceans.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacis", detail: "A male arctic isle inhabitant who can manipulate glacial forms.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Iceor", detail: "A male arctic isle inhabitant capable of summoning icy gales.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Snowar", detail: "A male arctic isle inhabitant with powers over snowstorms.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Frigorn", detail: "A male arctic isle inhabitant capable of freezing any surface.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacor", detail: "A male arctic isle inhabitant with mastery over frozen rivers.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Arctonix", detail: "A male arctic isle inhabitant with immense strength in the cold.", status: false, gender: "male", type: "arctic_isle" },
    { name: "Glacia", detail: "A female arctic isle inhabitant with power over icy landscapes.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Frostia", detail: "A female arctic isle inhabitant with the ability to control frost.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Auria", detail: "A female arctic isle inhabitant empowered by the northern lights.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Icelia", detail: "A female arctic isle inhabitant with freezing touch.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Borealina", detail: "A female arctic isle inhabitant tied to the cold winds of the north.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Frosta", detail: "A female arctic isle inhabitant who can summon frosty air.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Cryona", detail: "A female arctic isle inhabitant with cryogenic abilities.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Snowra", detail: "A female arctic isle inhabitant controlling heavy snowfalls.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Thalia", detail: "A female arctic isle inhabitant representing the essence of cold oceans.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Shivera", detail: "A female arctic isle inhabitant who brings chills and frost.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Glacora", detail: "A female arctic isle inhabitant made from ancient ice.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Icea", detail: "A female arctic isle inhabitant who can freeze anything with a glance.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Arctica", detail: "A female arctic isle inhabitant reigning over the frozen tundras.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Vortexa", detail: "A female arctic isle inhabitant commanding arctic vortices.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Frostara", detail: "A female arctic isle inhabitant with control over frost and ice.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Hailara", detail: "A female arctic isle inhabitant summoning hailstorms.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Cryonixa", detail: "A female arctic isle inhabitant with mastery over cryogenic forces.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Polarina", detail: "A female arctic isle inhabitant tied to the polar regions.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Glacia", detail: "A female arctic isle inhabitant commanding vast glaciers.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Frigora", detail: "A female arctic isle inhabitant controlling freezing temperatures.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Nivia", detail: "A female arctic isle inhabitant representing snowy mountain peaks.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Boreala", detail: "A female arctic isle inhabitant with ties to the northern winds.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Snowia", detail: "A female arctic isle inhabitant with the power to control snowstorms.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Thalora", detail: "A female arctic isle inhabitant ruling over frozen seas.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Hailia", detail: "A female arctic isle inhabitant with the ability to call down hail.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Cryona", detail: "A female arctic isle inhabitant who commands icy winds.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Arctona", detail: "A female arctic isle inhabitant tied to the arctic wilderness.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Glacia", detail: "A female arctic isle inhabitant embodying the power of glaciers.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Frostina", detail: "A female arctic isle inhabitant representing frost and ice.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Icelonia", detail: "A female arctic isle inhabitant commanding ice storms.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Boreosa", detail: "A female arctic isle inhabitant tied to the icy north.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Hailora", detail: "A female arctic isle inhabitant summoning powerful hail.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Cryara", detail: "A female arctic isle inhabitant with cryokinetic abilities.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Snowia", detail: "A female arctic isle inhabitant with control over the snow.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Arctonara", detail: "A female arctic isle inhabitant reigning over the frozen north.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Glacia", detail: "A female arctic isle inhabitant with immense glacial power.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Frostina", detail: "A female arctic isle inhabitant embodying the essence of frost.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Nivia", detail: "A female arctic isle inhabitant tied to snowy landscapes.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Glacina", detail: "A female arctic isle inhabitant who can manipulate glaciers.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Arcticia", detail: "A female arctic isle inhabitant reigning over the arctic tundras.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Polarixia", detail: "A female arctic isle inhabitant controlling polar energy.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Boreana", detail: "A female arctic isle inhabitant tied to the boreal north.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Cryonna", detail: "A female arctic isle inhabitant with advanced cryokinesis.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Thalina", detail: "A female arctic isle inhabitant representing cold oceans.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Glacora", detail: "A female arctic isle inhabitant who commands frozen landscapes.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Iceona", detail: "A female arctic isle inhabitant capable of creating icy storms.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Snowella", detail: "A female arctic isle inhabitant commanding powerful snowstorms.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Frigora", detail: "A female arctic isle inhabitant with control over icy surfaces.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Glacia", detail: "A female arctic isle inhabitant born from ancient glaciers.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Arctinia", detail: "A female arctic isle inhabitant with command over frozen seas.", status: false, gender: "female", type: "arctic_isle" },
    { name: "Pyronis", detail: "A male volcanic isle inhabitant with control over fire.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Magmar", detail: "A male volcanic isle inhabitant with lava manipulation abilities.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Vulcanor", detail: "A male volcanic isle inhabitant tied to the power of volcanoes.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Ignis", detail: "A male volcanic isle inhabitant embodying pure flame energy.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Emberon", detail: "A male volcanic isle inhabitant representing glowing embers.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Crateris", detail: "A male volcanic isle inhabitant with command over volcanic craters.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Lavion", detail: "A male volcanic isle inhabitant with the ability to control lava flows.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Voltor", detail: "A male volcanic isle inhabitant representing volcanic storms.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Ashar", detail: "A male volcanic isle inhabitant with mastery over volcanic ash.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Scoria", detail: "A male volcanic isle inhabitant formed from volcanic rock.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Pyros", detail: "A male volcanic isle inhabitant who wields intense fire.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Magmaris", detail: "A male volcanic isle inhabitant with control over molten magma.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Vortor", detail: "A male volcanic isle inhabitant who summons volcanic vortices.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Flamar", detail: "A male volcanic isle inhabitant tied to the power of flames.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Cinderon", detail: "A male volcanic isle inhabitant controlling cinders and flames.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Vulcanix", detail: "A male volcanic isle inhabitant with mastery over volcanic eruptions.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Inferno", detail: "A male volcanic isle inhabitant representing fierce infernos.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Blazeor", detail: "A male volcanic isle inhabitant with blazing fire manipulation abilities.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Volcas", detail: "A male volcanic isle inhabitant tied to the heart of volcanoes.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Emberis", detail: "A male volcanic isle inhabitant controlling embers and fire.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Lavaar", detail: "A male volcanic isle inhabitant with the ability to summon lava.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Ignor", detail: "A male volcanic isle inhabitant embodying the raw power of fire.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Tharnor", detail: "A male volcanic isle inhabitant with ties to ancient volcanic forces.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Scorian", detail: "A male volcanic isle inhabitant made from cooled volcanic rock.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Pyronor", detail: "A male volcanic isle inhabitant who summons intense firestorms.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Magmus", detail: "A male volcanic isle inhabitant tied to magma and volcanic activity.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Vulkon", detail: "A male volcanic isle inhabitant commanding volcanic power.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Flareon", detail: "A male volcanic isle inhabitant controlling fiery flares.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Crateron", detail: "A male volcanic isle inhabitant ruling over volcanic craters.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Lavionix", detail: "A male volcanic isle inhabitant with lava manipulation abilities.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Emberonix", detail: "A male volcanic isle inhabitant who controls glowing embers.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Ignithor", detail: "A male volcanic isle inhabitant with the power of intense heat.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Volcanor", detail: "A male volcanic isle inhabitant tied to erupting volcanoes.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Ashor", detail: "A male volcanic isle inhabitant with control over volcanic ash clouds.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Vulkor", detail: "A male volcanic isle inhabitant commanding volcanic eruptions.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Blazon", detail: "A male volcanic isle inhabitant wielding fiery blaze abilities.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Scorix", detail: "A male volcanic isle inhabitant formed from molten rock.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Magmos", detail: "A male volcanic isle inhabitant representing the force of magma.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Pyrax", detail: "A male volcanic isle inhabitant tied to fire and heat.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Voltoron", detail: "A male volcanic isle inhabitant who can control volcanic lightning.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Cindar", detail: "A male volcanic isle inhabitant with command over cinders.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Vulkoron", detail: "A male volcanic isle inhabitant ruling volcanic regions.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Infernar", detail: "A male volcanic isle inhabitant who commands infernal flames.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Flurion", detail: "A male volcanic isle inhabitant tied to fiery winds.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Emberon", detail: "A male volcanic isle inhabitant who controls glowing embers.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Lavionix", detail: "A male volcanic isle inhabitant tied to lava and heat.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Vortexor", detail: "A male volcanic isle inhabitant with the power to summon fiery vortexes.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Pyroxis", detail: "A male volcanic isle inhabitant representing fire and ash.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Magmore", detail: "A male volcanic isle inhabitant tied to deep magma layers.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Scorion", detail: "A male volcanic isle inhabitant with control over molten stone.", status: false, gender: "male", type: "volcanic_isle" },
    { name: "Pyra", detail: "A female volcanic isle inhabitant with the spirit of fire.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Magmara", detail: "A female volcanic isle inhabitant with mastery over magma.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Vulcana", detail: "A female volcanic isle inhabitant with power over volcanoes.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Ignia", detail: "A female volcanic isle inhabitant representing intense flame.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Emberia", detail: "A female volcanic isle inhabitant controlling glowing embers.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Cratera", detail: "A female volcanic isle inhabitant with the ability to command craters.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Lavara", detail: "A female volcanic isle inhabitant with control over lava flows.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Volca", detail: "A female volcanic isle inhabitant with mastery over volcanic eruptions.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Ashara", detail: "A female volcanic isle inhabitant controlling volcanic ash.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Scoria", detail: "A female volcanic isle inhabitant formed from volcanic rock.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Pyraxis", detail: "A female volcanic isle inhabitant wielding fiery power.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Magmara", detail: "A female volcanic isle inhabitant representing pure magma.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Vortha", detail: "A female volcanic isle inhabitant with control over volcanic vortexes.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Flamara", detail: "A female volcanic isle inhabitant tied to the power of flames.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Cindara", detail: "A female volcanic isle inhabitant controlling cinders and fire.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Vulcania", detail: "A female volcanic isle inhabitant with power over volcanic landscapes.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Inferna", detail: "A female volcanic isle inhabitant representing intense heat.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Blazia", detail: "A female volcanic isle inhabitant with control over blazes.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Volcana", detail: "A female volcanic isle inhabitant tied to volcanic eruptions.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Emberara", detail: "A female volcanic isle inhabitant representing glowing embers.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Lavara", detail: "A female volcanic isle inhabitant tied to lava flows.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Ignara", detail: "A female volcanic isle inhabitant representing the force of fire.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Thara", detail: "A female volcanic isle inhabitant with ties to ancient fire rituals.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Scoriana", detail: "A female volcanic isle inhabitant formed from volcanic rock.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Pyraena", detail: "A female volcanic isle inhabitant with fiery spirit.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Magmora", detail: "A female volcanic isle inhabitant controlling molten magma.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Vulkria", detail: "A female volcanic isle inhabitant commanding volcanic energy.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Flara", detail: "A female volcanic isle inhabitant with control over fiery flares.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Cratera", detail: "A female volcanic isle inhabitant controlling volcanic craters.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Emberina", detail: "A female volcanic isle inhabitant with the power to control embers.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Ignara", detail: "A female volcanic isle inhabitant tied to fiery energy.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Volcania", detail: "A female volcanic isle inhabitant representing volcanic landscapes.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Ashara", detail: "A female volcanic isle inhabitant with control over volcanic ash clouds.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Vulcaria", detail: "A female volcanic isle inhabitant tied to volcanic eruptions.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Blazara", detail: "A female volcanic isle inhabitant wielding fiery blaze abilities.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Scoria", detail: "A female volcanic isle inhabitant formed from cooled volcanic rock.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Pyraena", detail: "A female volcanic isle inhabitant tied to intense fire.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Flara", detail: "A female volcanic isle inhabitant with mastery over flames.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Lavina", detail: "A female volcanic isle inhabitant controlling lava.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Volka", detail: "A female volcanic isle inhabitant with command over volcanic power.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Cindara", detail: "A female volcanic isle inhabitant with control over cinders.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Magmara", detail: "A female volcanic isle inhabitant tied to molten magma.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Infera", detail: "A female volcanic isle inhabitant who embodies fiery energy.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Vortha", detail: "A female volcanic isle inhabitant with the ability to summon fiery vortexes.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Blazina", detail: "A female volcanic isle inhabitant with control over blazes and flames.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Embera", detail: "A female volcanic isle inhabitant who can control embers and glowing flames.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Lavara", detail: "A female volcanic isle inhabitant tied to lava flows.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Vulcora", detail: "A female volcanic isle inhabitant controlling volcanic energy.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Pyra", detail: "A female volcanic isle inhabitant who embodies fiery spirit.", status: false, gender: "female", type: "volcanic_isle" },
    { name: "Scorina", detail: "A female volcanic isle inhabitant formed from volcanic rock.", status: false, gender: "female", type: "volcanic_isle" }
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
        name: "Half Elf Name Generator",
        pic: "/half-demon.webp",
        link: "https://www.nameideagenerator.com/half-elf-name-generator",
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

const IslandNameGenerator = () => {
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

    const bgImage = "/island1.jpg"
    const context = "Island Name Generator"
    const Q1 = "How many names can I generate?"
const A1 = "You can generate an unlimited number of names with our tool. However, at a time, you will get only four names list. But you can generate again and again to get more names."
const Q2 = "Can I save my favorite names?"
const A2 = "Yes, click the saved option icon to add names to your saved list. You can see the saved names whenever you use the tool."
const Q3 = "Is the tool free to use?"
const A3 = "Yes, the Island Name Generator is completely free to use. So, use it without worry of paying a single penny."
const Q4 = "Do I need an account to use the generator?"
const A4 = "No account is necessary to generate names. You can use it without any creation of an account. Try unlimited times without any hassle."
const Q5 = "Can I use the generated names for commercial projects?"
const A5 = "Yes, you can use the names generated by our tool for commercial projects. Whether it's for games, books, or any other creative venture, our names are designed to enhance your work."

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
        <a href="/island-name-generator" className="hover:underline text-[#343a40]">Island Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Island Name Generator
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
                        <p className="text-center text-[#343a40]">Types of Island Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="tropical_isle">Tropical Isles</option>
                            <option value="arctic_isles">Arctic Isles</option>
                            <option value="volcanic_isles">Volcanic Isles</option>
                            <option value="forest_isles">Forest Isles</option>

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
                        Our Island Name Generator is designed to help you create unique and captivating island names. 
                        It is an invaluable tool for authors developing fantasy worlds, gamers crafting adventures, and creative enthusiasts seeking inspiration. 
                        Use this tool to enhance your storytelling and add depth to your creative projects.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Generate names with a single click to spark creativity and support your projects. 
                        Access over 100 of thousands names in our extensive database. 
                        Each name is crafted to suit various storytelling needs, offering options that range from mysterious to whimsical.                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        The generator integrates seamlessly into your projects. It is ideal for crafting tales of pirates, explorers, or other adventures. 
                        Find the perfect name for your island quickly and efficiently. 
                        Writers, gamers, and creative individuals will benefit from the vast array of options provided by this tool.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use Our Island Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    The use of our Island Name Generator is simple and straightforward. Here is how you can efficiently use our tool:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1 - Specify Theme
                            </h3>
                            <p>
                            Choose a theme for the island name, such as tropical, mythical, or remote, to influence the style of names generated.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                                Step 2 - Select the Type
                            </h3>
                            <p>
                            Decide on the type of island name you desire, like deserted, inhabited, or legendary.                           
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Click on Generate
                            </h3>
                            <p>
                            Press the <b> "Generate"</b> button to create a list of island names based on your selections.                           
                            </p>                       
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4: Review Names and Their Descriptions
                            </h3>
                            <p>
                            The names will be displayed on your screen. Hover over each name to get more details about the potential geography or lore associated with the name.                           
                            </p>                       
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="Island1.webp"
                            alt="Island Name Generator | Random Island Name Generator With Meaning"
                            className="w-[270px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="Island2.webp"
                            alt="Island Name Generator | Random Island Name Generator With Meaning"
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
                    Related to Island Name Generator
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
                    Why Do You Need an Island Name Generator? 
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our Island Name Generator streamlines the process of finding the perfect name for your creative projects. 
                    Here are the reasons why should you choose our tool:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Vast Name Collection
                                </h3>
                                <p>
                                Our tool offers access to an extensive database of over 10,000 island names. 
                                Each name is designed to provide a diverse array of choices. 
                                Find the perfect name that suits the unique characteristics of your island.
                           
                                 </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Effortless Name Generation
                                </h3>
                                <p>
                                Generate island names quickly with our user-friendly interface. A single click brings up a fresh name, simplifying the naming process. 
                                Experience a fast and efficient way to find the right name for your project.
                              
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Save and Organize
                                </h3>
                                <p>
                                Save your favorite names using the built-in favorites feature. Easily revisit and manage your selections at any time. 
                                Streamline your creative workflow with organized name options. Simply by using our exclusive quality online tool.                         
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Seamless Integration
                                </h3>
                                <p>
                                Integrate the names into your projects effortlessly. 
                                Whether you're working on stories, games, or other creative projects, the tool ensures smooth incorporation. 
                                Enhance your narrative with names that fit seamlessly.                          
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Creative Inspiration
                                </h3>
                                <p>
                                Leverage the tool to spark new ideas and inspiration. 
                                The diverse range of names helps stimulate creativity for world-building or storytelling. 
                                Enrich your projects with imaginative and fitting island names.                         
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Refined Search Options
                                </h3>
                                <p>
                                Customize your search by adjusting parameters such as themes and name length. 
                                Tailor the results to fit the specific needs of your project. 
                                Enhance your creative process with names that match your vision.                          
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="Island3.webp"
                            alt="Tiefling Image 1"
                            class="w-[350px] my-[60px] h-[370px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Island3.jpg"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[370px] my-[20px] sm:absolute sm:bottom-10 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div>

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

export default IslandNameGenerator;

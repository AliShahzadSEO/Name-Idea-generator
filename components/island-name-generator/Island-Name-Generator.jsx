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

    const Q1 = "What makes a good island name?"
const A1 = "A good island name matches the island’s setting, tone, and purpose. It should be simple, memorable, and suggest something about the island’s nature or story."
const Q2 = "Can I use these names for real-world projects?"
const A2 = "Yes! The names you generate can be used in stories, games, tabletop RPGs, school projects, or any creative work."
const Q3 = "Can I generate names for an entire island chain?"
const A3 = "Absolutely. Keep clicking “Generate” to build out a full archipelago with names that feel like they belong together."
const Q4 = "Do the names have meanings?"
const A4 = "Yes. Hover over a name to see its meaning or inspiration. Some are based on language roots, others on island traits or story themes."
const Q5 = "Can I generate multiple names?"
const A5 = "Yes! You absolutely can. No limits and no repetition. Get new and unique names everytime you hit generate."

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
                            Random Island Name Generator With Meaning
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
                        <h2 className="text-center text-[26px] font-medium text-[#343a40] pb-[]">
                        Find the Perfect Name for Your Island
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        Island names are crucial in building a world that feels alive. Whether you’re crafting a tropical paradise, a mysterious forgotten isle, 
                        or a rugged volcanic rock, the right name sets the mood. It gives your island character and identity, making it unforgettable. 
                        Our Island Name Generator takes the hassle out of naming. Simply choose a few options, click once, and get names 
                        that are perfect for any kind of island—tropical, haunted, mythical, or otherwise. No need to scroll through endless lists of overused names. 
                        You’ll get a unique name every time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[26px] text-center">
                    How Our Island Name Generator Works?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    The use of our Island Name Generator is simple and straightforward. Here is how you can efficiently use our tool:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                            Step 1 - Choose Your Gender
                            </h3>
                            <p>
                            Is the name bold and masculine, soft and feminine, or neutral and versatile? 
                            Select the gender style you prefer, and the generator will suggest island names that match the tone you're going for.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                                Step 2 - Select a Culture or Theme
                            </h3>
                            <p>
                            Do you want a name inspired by ancient civilizations, fantasy cultures, or something more modern? This option will shape the tone and style of the name.                           
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                            Step 3 - Click <b> ‘Generate’</b>
                            </h3>
                            <p>
                            Hit the button, and boom! Instantly get a fresh list of island names that match your selections. No waiting around for the perfect name.                          
                            </p>                       
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                            Step 4: Hover for Meaning
                            </h3>
                            <p>
                            Want to know more about the name? Hover over it, and you’ll instantly see its meaning, 
                            origin, or inspiration—whether it’s based on ancient languages or natural features.                           
                            </p>                       
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                           Refine and Repeat
                            </h3>
                            <p>
                            Not quite right? Adjust the settings and generate again. 
                            You can keep refining until you land on the perfect name that feels just right.                          
                            </p>                       
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="Island1.webp"
                            alt="Island Name Generator | Random Island Name Generator With Meaning"
                            className="w-[320px] my-[40px] h-[320px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="Island2.webp"
                            alt="Island Name Generator | Random Island Name Generator With Meaning"
                            className="w-[320px] h-[320px] my-[-20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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

            <div class="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="sm:text-[36px] text-[26px] font-extrabold text-gray-800">Why Use Our Island Name Generator?</h2>
      <p class="mt-4 text-gray-600 text-lg">Discover names that spark imagination and perfectly fit your fantasy or real-world islands.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div class="relative">
        <div class="relative w-full h-[500px]">
        <img src="Island3.webp" alt="Island View 1"
  class="absolute top-0 left-0 w-[260px] h-[350px] rounded-2xl object-cover shadow-lg border-4 border-white" />

<img src="Island3.jpg" alt="Island View 2"
  class="absolute bottom-0 right-0 w-[260px] h-[350px] rounded-2xl object-cover shadow-lg border-4 border-white" />

        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <div class="text-3xl mb-2 text-blue-600">⚡</div>
          <h3 class="text-lg font-semibold text-gray-800">Fast and Easy</h3>
          <p class="text-sm text-gray-600">No complex steps or forms. Just click and get a list of island names in seconds.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <div class="text-3xl mb-2 text-green-500">🎨</div>
          <h3 class="text-lg font-semibold text-gray-800">Customizable for Your Needs</h3>
          <p class="text-sm text-gray-600">Choose the type and theme of your island for names that fit your exact vision.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <div class="text-3xl mb-2 text-yellow-500">🌍</div>
          <h3 class="text-lg font-semibold text-gray-800">Instant Inspiration</h3>
          <p class="text-sm text-gray-600">Get ready-to-use names for your world-building, storytelling, or game creation.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <div class="text-3xl mb-2 text-pink-500">💡</div>
          <h3 class="text-lg font-semibold text-gray-800">Unique and Memorable</h3>
          <p class="text-sm text-gray-600">Each name is unique, ensuring your island doesn’t blend into the crowd of generic places.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <div class="text-3xl mb-2 text-yellow-500">⭐</div>
          <h3 class="text-lg font-semibold text-gray-800">Endless Combinations</h3>
          <p class="text-sm text-gray-600">Generate as many names as you need. Perfect for naming multiple islands or creating a whole archipelago.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <div class="text-3xl mb-2 text-pink-500">🧠</div>
          <h3 class="text-lg font-semibold text-gray-800">Perfect for Any Setting</h3>
          <p class="text-sm text-gray-600">Whether it’s a fantasy, historical, or modern island, this tool helps you find names that work for any genre.</p>
        </div>

      </div>
    </div>
  </div>
</div>


<section class="bg-gray-50 py-16 px-6 sm:px-12">
  <div class="max-w-7xl mx-auto">
    <h2 class="sm:text-[36px] text-[26px] font-bold text-center text-gray-800 mb-6">Famous Islands and Their Unique Features</h2>
    <p class="text-lg text-gray-600 mb-12">Islands are scattered across the globe, each with its own distinctive characteristics that make it stand out. 
        From volcanic landscapes to coral reefs, islands are home to rich histories, unique ecosystems, and cultural significance. 
        Here are some of the most famous islands and what makes them so remarkable:</p>

    <div class="grid gap-8 md:grid-cols-2">
      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 class="text-2xl font-semibold text-indigo-700 mb-2">Hawaiian Islands</h3>
        <p class="text-sm text-indigo-500 mb-3 font-semibold">🌋 Unique Feature: Volcanic origins and lush landscapes</p>
        <p class="text-gray-700">The Hawaiian Islands are a volcanic archipelago located in the Pacific Ocean. 
            Known for their stunning beaches, tropical climates, and rich native culture, these islands are a paradise for travelers and ecologists alike. 
            Volcanoes such as Mauna Loa and Kīlauea are still active, shaping the landscape and providing fertile soil for diverse plant and animal species. 
            Hawaii is also home to endemic species like the Hawaiian monk seal and the state bird, the Hawaiian goose.
            </p>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 class="text-2xl font-semibold text-teal-700 mb-2">Maldives</h3>
        <p class="text-sm text-teal-500 mb-3 font-semibold">🏝️ Unique Feature: Coral islands and luxury resorts</p>
        <p class="text-gray-700">Comprising over 1,000 small islands, the Maldives is known for its crystal-clear waters, vibrant coral reefs, and luxury over-water bungalows.
             The archipelago is located in the Indian Ocean and is one of the world’s most sought-after tropical destinations. 
             The Maldives is home to an incredibly rich marine ecosystem, offering an underwater paradise for divers. 
            However, rising sea levels pose a serious threat to these low-lying islands, making them a focal point in discussions about climate change.</p>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 class="text-2xl font-semibold text-green-700 mb-2">Galápagos Islands</h3>
        <p class="text-sm text-green-500 mb-3 font-semibold">🦎 Unique Feature: Exceptional biodiversity and evolution</p>
        <p class="text-gray-700">Located in the Pacific Ocean, the Galápagos Islands are famous for their role in Charles Darwin’s theory of natural selection. 
            These islands host species that can’t be found anywhere else on Earth, including the giant Galápagos tortoises and marine iguanas. 
            The unique biodiversity and relatively untouched ecosystems have made the islands a UNESCO World Heritage site. 
            It’s one of the best places in the world to study evolutionary biology and observe creatures in their natural habitats.</p>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 class="text-2xl font-semibold text-blue-700 mb-2 ">Iceland</h3>
        <p class="text-sm text-blue-500 mb-3 font-semibold">🔥 Unique Feature: Geothermal activity and rugged landscapes</p>
        <p class="text-gray-700">Iceland is a volcanic island in the North Atlantic with breathtaking landscapes that include glaciers, 
            hot springs, geysers, and active volcanoes. The country’s geothermal energy is used for heating and electricity, making it one of the most sustainable 
            places in the world. Iceland’s isolation has also led to a unique cultural history, with rich Norse traditions and folklore. 
            Its stunning natural beauty, including the Northern Lights and waterfalls like Gullfoss, draws millions of visitors each year.</p>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition md:col-span-2">
        <h3 class="text-2xl font-semibold text-rose-700 mb-2">Sicily (Italy)</h3>
        <p class="text-sm text-rose-500 mb-3 font-semibold">🏛️ Unique Feature: Rich history and archaeological sites</p>
        <p class="text-gray-700">Sicily, the largest island in the Mediterranean, is known for its diverse history and mix of cultures, 
            having been influenced by the Greeks, Romans, Arabs, and Normans. The island is dotted with ancient ruins, including the Valley of the Temples, 
            the ancient city of Selinunte, and Mount Etna, one of the world’s most active volcanoes. If the legacy of ancient civilizations like Greece fascinates you, 
            our Greek Name Generator lets you explore names inspired by Greek mythology and classical culture—ideal for capturing that timeless essence. 
            Sicily’s own rich history and strategic position make it a true cultural crossroads, home to archaeological wonders and stunning coastlines.</p>
      </div>
    </div>
  </div>
</section>


<section class="mt-12 p-6">
  <div class="w-4/5 mx-auto">
    <h2 class="sm:text-[36px] text-[26px] font-bold text-gray-800 mb-6 flex items-center gap-2">
      🧠🌟 Fun Facts About Islands
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div class="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500">
        <h3 class="text-xl font-semibold mb-2">🌍 The Smallest Island in the World</h3>
        <p class="text-gray-700">
          Bishop Rock in the United Kingdom is the smallest inhabited island, measuring just 46 feet (14 meters) across, and is home to only a lighthouse!
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold mb-2">📏 The Largest Island That Isn’t a Continent</h3>
        <p class="text-gray-700">
          Greenland is the largest island on Earth that isn't considered a continent, covering around 836,000 square miles (2.16 million square kilometers).
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-xl p-6 border-l-4 border-pink-500">
        <h3 class="text-xl font-semibold mb-2">🪸 An Island Made of Coral</h3>
        <p class="text-gray-700">
          The Maldives consists of over 1,000 small islands and is known for its stunning coral reefs and clear waters, 
          making it a top destination for divers and tourists.
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-xl p-6 border-l-4 border-yellow-500">
        <h3 class="text-xl font-semibold mb-2">🚤 The Only Floating Islands</h3>
        <p class="text-gray-700">
          Lake Titicaca in South America has floating islands made by the Uros people using reeds. These islands are constantly rebuilt as the reeds naturally decay!
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-500 md:col-span-2">
        <h3 class="text-xl font-semibold mb-2">🧭 The Most Remote Inhabited Island</h3>
        <p class="text-gray-700">
          Tristan da Cunha, part of the British Overseas Territories, is known as the most remote inhabited island, located in the South Atlantic Ocean, 
          with no airport or easy access.
        </p>
      </div>

    </div>
  </div>
</section>


<section class="mt-16">
  <div class="w-4/5 mx-auto space-y-12">

    <div>
      <h2 class="sm:text-[36px] text-[26px] font-bold text-gray-800 mb-4">📜 The History and Culture of Island Names</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Island names often come from explorers, native languages, or geographical features. Many reflect the first people to discover or inhabit them. 
        For example, Polynesian island names are rich in meaning and often describe natural elements like winds, stars, or ancestors. 
        European colonizers renamed many islands during exploration, sometimes erasing original names in the process. 
        In other cases, names evolved over centuries due to trade, migration, or myths. 
        Whether sacred or strategic, island names hold cultural weight and historical context that lasts through generations.
      </p>
      <p class="text-gray-700 leading-relaxed">
        If you're fascinated by how different civilizations named their lands—or you're looking to explore historically rich naming styles—you can dive 
        deeper using this 
        <a href="https://www.nameideagenerator.com/categories/cultural-and-historical" class="hover:text-blue-800"> Cultural and Historical Name Generator</a>. 
        It offers an extensive collection of culturally inspired name tools based on Viking, Celtic, Japanese, Native American, 
        and other traditions—making it a valuable resource for writers, game designers, and creatives interested in the history and culture of names.
      </p>
    </div>

    <div>
      <h2 class="sm:text-[36px] text-[26px] font-bold text-gray-800 mb-4">📚 Popular Island Naming Trends in Literature and Media</h2>
      <p class="text-gray-700 leading-relaxed">
        Island names in literature and media often reflect the tone of the story. In adventure and pirate tales, names like <strong>Skull Island</strong> or 
        <strong>Treasure Cay</strong> evoke danger, mystery, or hidden treasure. In fantasy, islands might be named after mythical creatures or ancient powers, 
        such as <strong>Dragon’s Keep</strong> or <strong>Isle of Wyrms</strong>, adding depth and intrigue to the world.
      </p>
      <p class="text-gray-700 leading-relaxed mt-2">
        In contrast, light-hearted or whimsical stories often use playful names like <strong>Jellybean Island</strong> or <strong>Paradise Cove</strong>, 
        which suggest fun or adventure. Dystopian or sci-fi settings tend to feature more futuristic names, like <strong>Epsilon-9</strong> or 
        <strong>Neon Reef</strong>, fitting the high-tech or isolated atmosphere. These naming trends help set expectations and enhance the island's 
        role in the narrative.
      </p>
    </div>

    <div>
      <h2 class="sm:text-[36px] text-[26px] font-bold text-gray-800 mb-4">🌋 How Islands Are Formed</h2>
      <p class="text-gray-700 leading-relaxed pb-6">
        Islands form in several natural ways. Volcanic islands rise from the sea when underwater volcanoes erupt and build up land—Hawaii is a perfect example. 
        Continental islands break off from larger landmasses due to shifting tectonic plates or rising seas. Coral islands form from coral reefs growing around 
        sunken volcanoes, creating low-lying atolls like those in the Maldives. River and lake islands are created by erosion or sediment buildup. 
        Each type of formation shapes the island’s terrain, ecosystem, and often its role in real-world geography or fiction.
      </p>
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

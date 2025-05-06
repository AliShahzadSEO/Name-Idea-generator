"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    {
        name: "Blazeros",
        detail: "The fiery warrior.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Ignar",
        detail: "The ignited flame.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Pyros",
        detail: "The burning spirit.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Emberon",
        detail: "The ember heart.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Flareth",
        detail: "The blazing flame.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Scorchis",
        detail: "The scorching inferno.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Vulcann",
        detail: "The volcanic warrior.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Flamek",
        detail: "The flaming sword.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Ashan",
        detail: "The ashen one.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Fyras",
        detail: "The firestorm.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Burnak",
        detail: "The burner of worlds.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Incendo",
        detail: "The incendiary force.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Cindarus",
        detail: "The cinder knight.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Smolderok",
        detail: "The smoldering fury.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Torchion",
        detail: "The torchbearer.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Infernas",
        detail: "The infernal dragon.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Heaton",
        detail: "The heated warrior.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Blazen",
        detail: "The blazing knight.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Fyrik",
        detail: "The fiery defender.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Flamin",
        detail: "The flaming spirit.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Searon",
        detail: "The searing flame.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Pyriak",
        detail: "The pyre master.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Emberis",
        detail: "The ember guardian.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Scaldon",
        detail: "The scalding breath.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Brimstorr",
        detail: "The brimstone beast.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Lavax",
        detail: "The lava lord.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Flameth",
        detail: "The flame warden.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Pyrotor",
        detail: "The pyro warrior.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Blazeon",
        detail: "The blazing force.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Ignion",
        detail: "The ignition master.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Scaldir",
        detail: "The scalding fury.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Emburn",
        detail: "The ember knight.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Vulcron",
        detail: "The volcanic force.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Infernot",
        detail: "The inferno dragon.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Sparkeron",
        detail: "The spark master.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Ashkor",
        detail: "The ash bringer.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Flamor",
        detail: "The flame warrior.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Searis",
        detail: "The searing spirit.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Cindor",
        detail: "The cinder dragon.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Blazeir",
        detail: "The blazing knight.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Pyroth",
        detail: "The pyro force.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Ignarion",
        detail: "The ignition warrior.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Flarex",
        detail: "The flare master.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Torchus",
        detail: "The torchbearer.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Smolderak",
        detail: "The smoldering force.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Heaten",
        detail: "The heated dragon.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Scorchar",
        detail: "The scorching force.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Burnas",
        detail: "The burning knight.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Emberok",
        detail: "The ember guardian.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Fyrion",
        detail: "The fire lord.",
        status: false,
        gender: "male",
        type: "fire"
    },
    {
        name: "Emberia",
        detail: "The ember queen.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Ignara",
        detail: "The ignited flame.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Pyriana",
        detail: "The burning spirit.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Flaria",
        detail: "The blazing flame.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Scorchia",
        detail: "The scorching inferno.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Vulcana",
        detail: "The volcanic warrior.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Flamea",
        detail: "The flaming sword.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Ashala",
        detail: "The ashen one.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Fyra",
        detail: "The firestorm.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Burnina",
        detail: "The burner of worlds.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Incendia",
        detail: "The incendiary force.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Cindara",
        detail: "The cinder knight.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Smoldera",
        detail: "The smoldering fury.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Torchia",
        detail: "The torchbearer.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Inferna",
        detail: "The infernal dragon.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Heata",
        detail: "The heated warrior.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Blazea",
        detail: "The blazing knight.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Fyria",
        detail: "The fiery defender.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Flamina",
        detail: "The flaming spirit.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Searia",
        detail: "The searing flame.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Pyra",
        detail: "The pyre master.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Emberona",
        detail: "The ember guardian.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Scalda",
        detail: "The scalding breath.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Brimstara",
        detail: "The brimstone beast.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Lavara",
        detail: "The lava lord.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Flama",
        detail: "The flame warden.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Pyrotia",
        detail: "The pyro warrior.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Blazeona",
        detail: "The blazing force.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Ignia",
        detail: "The ignition master.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Scaldira",
        detail: "The scalding fury.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Emburnia",
        detail: "The ember knight.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Vulcrina",
        detail: "The volcanic force.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Infernotia",
        detail: "The inferno dragon.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Sparkeria",
        detail: "The spark master.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Ashkora",
        detail: "The ash bringer.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Flamora",
        detail: "The flame warrior.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Searina",
        detail: "The searing spirit.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Cindoria",
        detail: "The cinder dragon.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Blazeira",
        detail: "The blazing knight.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Pyrotha",
        detail: "The pyro force.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Ignariana",
        detail: "The ignition warrior.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Flarexa",
        detail: "The flare master.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Torcha",
        detail: "The torchbearer.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Smolderaka",
        detail: "The smoldering force.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Heata",
        detail: "The heated dragon.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Scorcha",
        detail: "The scorching force.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Burnia",
        detail: "The burning knight.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Emberoka",
        detail: "The ember guardian.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Fyrona",
        detail: "The fire lord.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Ignalina",
        detail: "The ignited spirit.",
        status: false,
        gender: "female",
        type: "fire"
    },
    {
        name: "Froston",
        detail: "The frozen warrior.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Glaciar",
        detail: "The glacial force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Icicar",
        detail: "The icy breath.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Snowak",
        detail: "The snowy guardian.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Chillon",
        detail: "The chilling presence.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Crystallor",
        detail: "The crystal dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Freezor",
        detail: "The freezing spirit.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Gelidar",
        detail: "The gelid warrior.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Winteron",
        detail: "The winter guardian.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Frigidon",
        detail: "The frigid dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Frostyr",
        detail: "The frosty knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Glacius",
        detail: "The glacial master.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Iceon",
        detail: "The ice lord.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Snowdrift",
        detail: "The snow drifter.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Chillar",
        detail: "The chilling warrior.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Cryonar",
        detail: "The cryo master.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Gelaton",
        detail: "The gelid knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Winteric",
        detail: "The winter dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Frostyn",
        detail: "The frosty guardian.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Glacir",
        detail: "The glacial force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Icelon",
        detail: "The icy dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Snowfall",
        detail: "The snowy knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Chillax",
        detail: "The chilling force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Cryos",
        detail: "The cryo warrior.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Gelak",
        detail: "The gelid master.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Wintron",
        detail: "The winter knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Frostir",
        detail: "The frosty force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Glacon",
        detail: "The glacial guardian.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Icenar",
        detail: "The icy force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Snowon",
        detail: "The snowy dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Chillan",
        detail: "The chilling dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Cryonak",
        detail: "The cryo knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Gelion",
        detail: "The gelid dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Winteris",
        detail: "The winter force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Frostok",
        detail: "The frosty dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Glaciaris",
        detail: "The glacial knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Icek",
        detail: "The icy force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Snowtor",
        detail: "The snowy guardian.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Chilloth",
        detail: "The chilling knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Cryothor",
        detail: "The cryo force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Gelarion",
        detail: "The gelid guardian.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Winterion",
        detail: "The winter dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Frostion",
        detail: "The frosty force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Glacel",
        detail: "The glacial warrior.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Icarion",
        detail: "The icy master.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Snowk",
        detail: "The snowy dragon.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Chillanox",
        detail: "The chilling master.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Cryol",
        detail: "The cryo knight.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Gelakos",
        detail: "The gelid force.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Winteros",
        detail: "The winter warrior.",
        status: false,
        gender: "male",
        type: "ice"
    },
    {
        name: "Frostia",
        detail: "The frosty warrior.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Glacia",
        detail: "The glacial guardian.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Icina",
        detail: "The icy breath.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Snowa",
        detail: "The snowy force.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Chilla",
        detail: "The chilling presence.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Crystalla",
        detail: "The crystal dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Freezia",
        detail: "The freezing warrior.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Gelida",
        detail: "The gelid knight.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Wintera",
        detail: "The winter guardian.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Frigida",
        detail: "The frigid dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Frostya",
        detail: "The frosty spirit.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Glacina",
        detail: "The glacial force.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Ica",
        detail: "The icy master.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Snowria",
        detail: "The snowy warrior.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Chillea",
        detail: "The chilling knight.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Cryona",
        detail: "The cryo guardian.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Gelana",
        detail: "The gelid dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Winteria",
        detail: "The winter force.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Frostina",
        detail: "The frosty dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Glaciara",
        detail: "The glacial master.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Icilia",
        detail: "The icy knight.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Snowora",
        detail: "The snowy dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Chilliana",
        detail: "The chilling force.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Cryonia",
        detail: "The cryo master.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Gelina",
        detail: "The gelid warrior.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Winterosa",
        detail: "The winter spirit.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Frostara",
        detail: "The frosty knight.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Glacirya",
        detail: "The glacial dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Icina",
        detail: "The icy force.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Snowthia",
        detail: "The snowy force.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Chillora",
        detail: "The chilling dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Cryoniara",
        detail: "The cryo knight.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Gelaria",
        detail: "The gelid master.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Winteronia",
        detail: "The winter warrior.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Frostlia",
        detail: "The frosty force.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Glacaria",
        detail: "The glacial guardian.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Iciala",
        detail: "The icy dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Snowlina",
        detail: "The snowy knight.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Chillona",
        detail: "The chilling spirit.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Cryonara",
        detail: "The cryo dragon.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Gelinara",
        detail: "The gelid knight.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Winterona",
        detail: "The winter guardian.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Frostalina",
        detail: "The frosty spirit.",
        status: false,
        gender: "female",
        type: "ice"
    },
    {
        name: "Glaciria",
        detail: "The glacial master.",
        status: false,
        gender: "female",
        type: "ice"
    },
    { name: "Terron", detail: "The earth protector.", status: false, gender: "male", type: "earth" },
    { name: "Stonar", detail: "The stone guardian.", status: false, gender: "male", type: "earth" },
    { name: "Boulderok", detail: "The boulder master.", status: false, gender: "male", type: "earth" },
    { name: "Rockon", detail: "The rock protector.", status: false, gender: "male", type: "earth" },
    { name: "Earthak", detail: "The earth knight.", status: false, gender: "male", type: "earth" },
    { name: "Terrak", detail: "The earth master.", status: false, gender: "male", type: "earth" },
    { name: "Stonir", detail: "The stone guardian.", status: false, gender: "male", type: "earth" },
    { name: "Bouldor", detail: "The boulder warrior.", status: false, gender: "male", type: "earth" },
    { name: "Rockyron", detail: "The rock guardian.", status: false, gender: "male", type: "earth" },
    { name: "Earthon", detail: "The earth warrior.", status: false, gender: "male", type: "earth" },
    { name: "Terrus", detail: "The earth protector.", status: false, gender: "male", type: "earth" },
    { name: "Stonak", detail: "The stone knight.", status: false, gender: "male", type: "earth" },
    { name: "Boulderik", detail: "The boulder guardian.", status: false, gender: "male", type: "earth" },
    { name: "Rockak", detail: "The rock protector.", status: false, gender: "male", type: "earth" },
    { name: "Earthor", detail: "The earth knight.", status: false, gender: "male", type: "earth" },
    { name: "Terronir", detail: "The earth knight.", status: false, gender: "male", type: "earth" },
    { name: "Stonaris", detail: "The stone lord.", status: false, gender: "male", type: "earth" },
    { name: "Bouldis", detail: "The boulder guardian.", status: false, gender: "male", type: "earth" },
    { name: "Rockyros", detail: "The rocky guardian.", status: false, gender: "male", type: "earth" },
    { name: "Earthron", detail: "The earth warrior.", status: false, gender: "male", type: "earth" },
    { name: "Terranok", detail: "The earth master.", status: false, gender: "male", type: "earth" },
    { name: "Stonion", detail: "The stone knight.", status: false, gender: "male", type: "earth" },
    { name: "Boulderith", detail: "The boulder lord.", status: false, gender: "male", type: "earth" },
    { name: "Rocker", detail: "The rock protector.", status: false, gender: "male", type: "earth" },
    { name: "Earthin", detail: "The earth knight.", status: false, gender: "male", type: "earth" },
    { name: "Terrakos", detail: "The earth guardian.", status: false, gender: "male", type: "earth" },
    { name: "Stonios", detail: "The stone protector.", status: false, gender: "male", type: "earth" },
    { name: "Bouldarion", detail: "The boulder master.", status: false, gender: "male", type: "earth" },
    { name: "Rockinos", detail: "The rock lord.", status: false, gender: "male", type: "earth" },
    { name: "Eartharis", detail: "The earth master.", status: false, gender: "male", type: "earth" },
    { name: "Terrarik", detail: "The earth protector.", status: false, gender: "male", type: "earth" },
    { name: "Stonos", detail: "The stone warrior.", status: false, gender: "male", type: "earth" },
    { name: "Boulderon", detail: "The boulder guardian.", status: false, gender: "male", type: "earth" },
    { name: "Rockiron", detail: "The rock master.", status: false, gender: "male", type: "earth" },
    { name: "Earthok", detail: "The earth warrior.", status: false, gender: "male", type: "earth" },
    { name: "Terronos", detail: "The earth master.", status: false, gender: "male", type: "earth" },
    { name: "Stonark", detail: "The stone guardian.", status: false, gender: "male", type: "earth" },
    { name: "Boulderus", detail: "The boulder protector.", status: false, gender: "male", type: "earth" },
    { name: "Rockorus", detail: "The rock warrior.", status: false, gender: "male", type: "earth" },
    { name: "Earthik", detail: "The earth protector.", status: false, gender: "male", type: "earth" },
    { name: "Terranith", detail: "The earth guardian.", status: false, gender: "male", type: "earth" },
    { name: "Stonoros", detail: "The stone master.", status: false, gender: "male", type: "earth" },
    { name: "Boulderir", detail: "The boulder warrior.", status: false, gender: "male", type: "earth" },
    { name: "Rockoris", detail: "The rock guardian.", status: false, gender: "male", type: "earth" },
    { name: "Earthonir", detail: "The earth warrior.", status: false, gender: "male", type: "earth" },
    { name: "Terronak", detail: "The earth protector.", status: false, gender: "male", type: "earth" },
    { name: "Stonarion", detail: "The stone guardian.", status: false, gender: "male", type: "earth" },
    { name: "Boulderok", detail: "The boulder warrior.", status: false, gender: "male", type: "earth" },
    { name: "Rockir", detail: "The rock protector.", status: false, gender: "male", type: "earth" },
    { name: "Earthakos", detail: "The earth master.", status: false, gender: "male", type: "earth" },
    { name: "Terra", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Stonia", detail: "The stone mistress.", status: false, gender: "female", type: "earth" },
    { name: "Boulderia", detail: "The boulder queen.", status: false, gender: "female", type: "earth" },
    { name: "Rockina", detail: "The rock mistress.", status: false, gender: "female", type: "earth" },
    { name: "Earthara", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Terria", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Stonira", detail: "The stone queen.", status: false, gender: "female", type: "earth" },
    { name: "Bouldera", detail: "The boulder guardian.", status: false, gender: "female", type: "earth" },
    { name: "Rockyra", detail: "The rocky mistress.", status: false, gender: "female", type: "earth" },
    { name: "Earthina", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Terrona", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Stonaka", detail: "The stone mistress.", status: false, gender: "female", type: "earth" },
    { name: "Boulderika", detail: "The boulder queen.", status: false, gender: "female", type: "earth" },
    { name: "Rockara", detail: "The rock guardian.", status: false, gender: "female", type: "earth" },
    { name: "Earthora", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Terronia", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Stonaria", detail: "The stone queen.", status: false, gender: "female", type: "earth" },
    { name: "Bouldina", detail: "The boulder queen.", status: false, gender: "female", type: "earth" },
    { name: "Rockyra", detail: "The rock guardian.", status: false, gender: "female", type: "earth" },
    { name: "Earthra", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Terrona", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Stonia", detail: "The stone guardian.", status: false, gender: "female", type: "earth" },
    { name: "Boulderithia", detail: "The boulder queen.", status: false, gender: "female", type: "earth" },
    { name: "Rockia", detail: "The rock guardian.", status: false, gender: "female", type: "earth" },
    { name: "Earthinia", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Terria", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Stoniosa", detail: "The stone mistress.", status: false, gender: "female", type: "earth" },
    { name: "Boulderika", detail: "The boulder guardian.", status: false, gender: "female", type: "earth" },
    { name: "Rockinia", detail: "The rock queen.", status: false, gender: "female", type: "earth" },
    { name: "Eartharina", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Terrakia", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Stonosa", detail: "The stone queen.", status: false, gender: "female", type: "earth" },
    { name: "Boulderona", detail: "The boulder guardian.", status: false, gender: "female", type: "earth" },
    { name: "Rockina", detail: "The rock queen.", status: false, gender: "female", type: "earth" },
    { name: "Earthonia", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Terrona", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Stonara", detail: "The stone guardian.", status: false, gender: "female", type: "earth" },
    { name: "Boulderisa", detail: "The boulder queen.", status: false, gender: "female", type: "earth" },
    { name: "Rockarisa", detail: "The rock guardian.", status: false, gender: "female", type: "earth" },
    { name: "Earthina", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Terrakina", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Stonora", detail: "The stone queen.", status: false, gender: "female", type: "earth" },
    { name: "Boulderira", detail: "The boulder queen.", status: false, gender: "female", type: "earth" },
    { name: "Rockira", detail: "The rock guardian.", status: false, gender: "female", type: "earth" },
    { name: "Earthaka", detail: "The earth queen.", status: false, gender: "female", type: "earth" },
    { name: "Terrania", detail: "The earth guardian.", status: false, gender: "female", type: "earth" },
    { name: "Stonarisa", detail: "The stone guardian.", status: false, gender: "female", type: "earth" },
    { name: "Boulderona", detail: "The boulder queen.", status: false, gender: "female", type: "earth" },
    { name: "Rockira", detail: "The rock guardian.", status: false, gender: "female", type: "earth" },
    { name: "Eartharina", detail: "The earth queen.", status: false, gender: "female", type: "earth" }, 
    { name: "Darkon", detail: "The dark knight.", status: false, gender: "male", type: "shadow" },
    { name: "Shadark", detail: "The shadow warrior.", status: false, gender: "male", type: "shadow" },
    { name: "Nocturn", detail: "The night lord.", status: false, gender: "male", type: "shadow" },
    { name: "Umbrion", detail: "The shadow protector.", status: false, gender: "male", type: "shadow" },
    { name: "Shadowon", detail: "The shadow guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Duskos", detail: "The dusk warrior.", status: false, gender: "male", type: "shadow" },
    { name: "Nighton", detail: "The night protector.", status: false, gender: "male", type: "shadow" },
    { name: "Obsidion", detail: "The obsidian knight.", status: false, gender: "male", type: "shadow" },
    { name: "Gloomon", detail: "The gloom guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Shadok", detail: "The shadow master.", status: false, gender: "male", type: "shadow" },
    { name: "Darkir", detail: "The dark protector.", status: false, gender: "male", type: "shadow" },
    { name: "Shadar", detail: "The shadow knight.", status: false, gender: "male", type: "shadow" },
    { name: "Noctur", detail: "The nocturnal lord.", status: false, gender: "male", type: "shadow" },
    { name: "Umbron", detail: "The shadow knight.", status: false, gender: "male", type: "shadow" },
    { name: "Shadowin", detail: "The shadow master.", status: false, gender: "male", type: "shadow" },
    { name: "Duskir", detail: "The dusk guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Nightar", detail: "The night guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Obsidor", detail: "The obsidian master.", status: false, gender: "male", type: "shadow" },
    { name: "Gloomar", detail: "The gloom protector.", status: false, gender: "male", type: "shadow" },
    { name: "Shadon", detail: "The shadow protector.", status: false, gender: "male", type: "shadow" },
    { name: "Darkaron", detail: "The dark master.", status: false, gender: "male", type: "shadow" },
    { name: "Shadak", detail: "The shadow warrior.", status: false, gender: "male", type: "shadow" },
    { name: "Nocturios", detail: "The nocturnal master.", status: false, gender: "male", type: "shadow" },
    { name: "Umbrarion", detail: "The shadow lord.", status: false, gender: "male", type: "shadow" },
    { name: "Shadowok", detail: "The shadow master.", status: false, gender: "male", type: "shadow" },
    { name: "Duskin", detail: "The dusk knight.", status: false, gender: "male", type: "shadow" },
    { name: "Nightonir", detail: "The night master.", status: false, gender: "male", type: "shadow" },
    { name: "Obsidak", detail: "The obsidian protector.", status: false, gender: "male", type: "shadow" },
    { name: "Gloomor", detail: "The gloom warrior.", status: false, gender: "male", type: "shadow" },
    { name: "Shadakos", detail: "The shadow guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Darkor", detail: "The dark protector.", status: false, gender: "male", type: "shadow" },
    { name: "Shadus", detail: "The shadow lord.", status: false, gender: "male", type: "shadow" },
    { name: "Noctus", detail: "The nocturnal guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Umbrus", detail: "The shadow protector.", status: false, gender: "male", type: "shadow" },
    { name: "Shadowar", detail: "The shadow knight.", status: false, gender: "male", type: "shadow" },
    { name: "Duskosir", detail: "The dusk master.", status: false, gender: "male", type: "shadow" },
    { name: "Nightis", detail: "The night master.", status: false, gender: "male", type: "shadow" },
    { name: "Obsidior", detail: "The obsidian warrior.", status: false, gender: "male", type: "shadow" },
    { name: "Gloomir", detail: "The gloom protector.", status: false, gender: "male", type: "shadow" },
    { name: "Shadonir", detail: "The shadow master.", status: false, gender: "male", type: "shadow" },
    { name: "Darkior", detail: "The dark guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Shadokor", detail: "The shadow protector.", status: false, gender: "male", type: "shadow" },
    { name: "Nocturnir", detail: "The nocturnal knight.", status: false, gender: "male", type: "shadow" },
    { name: "Umbros", detail: "The shadow master.", status: false, gender: "male", type: "shadow" },
    { name: "Shadowan", detail: "The shadow guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Duskon", detail: "The dusk protector.", status: false, gender: "male", type: "shadow" },
    { name: "Nightur", detail: "The night warrior.", status: false, gender: "male", type: "shadow" },
    { name: "Obsidok", detail: "The obsidian guardian.", status: false, gender: "male", type: "shadow" },
    { name: "Gloomar", detail: "The gloom master.", status: false, gender: "male", type: "shadow" }, 
    { name: "Shadira", detail: "The shadow queen.", status: false, gender: "female", type: "shadow" },
    { name: "Noctara", detail: "The nocturnal queen.", status: false, gender: "female", type: "shadow" },
    { name: "Umbra", detail: "The shadow guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Duskara", detail: "The dusk queen.", status: false, gender: "female", type: "shadow" },
    { name: "Glooma", detail: "The gloom mistress.", status: false, gender: "female", type: "shadow" },
    { name: "Shadia", detail: "The shadow guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Noctura", detail: "The nocturnal queen.", status: false, gender: "female", type: "shadow" },
    { name: "Umbri", detail: "The shadow queen.", status: false, gender: "female", type: "shadow" },
    { name: "Duska", detail: "The dusk guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Gloomara", detail: "The gloom queen.", status: false, gender: "female", type: "shadow" },
    { name: "Shadira", detail: "The shadow queen.", status: false, gender: "female", type: "shadow" },
    { name: "Noctara", detail: "The nocturnal mistress.", status: false, gender: "female", type: "shadow" },
    { name: "Umbrosia", detail: "The shadow mistress.", status: false, gender: "female", type: "shadow" },
    { name: "Duskar", detail: "The dusk guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Gloomina", detail: "The gloom mistress.", status: false, gender: "female", type: "shadow" },
    { name: "Shadira", detail: "The shadow guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Noctura", detail: "The nocturnal guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Umbra", detail: "The shadow queen.", status: false, gender: "female", type: "shadow" },
    { name: "Duskin", detail: "The dusk queen.", status: false, gender: "female", type: "shadow" },
    { name: "Glooma", detail: "The gloom mistress.", status: false, gender: "female", type: "shadow" },
    { name: "Shadira", detail: "The shadow queen.", status: false, gender: "female", type: "shadow" },
    { name: "Noctara", detail: "The nocturnal guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Umbri", detail: "The shadow mistress.", status: false, gender: "female", type: "shadow" },
    { name: "Duska", detail: "The dusk queen.", status: false, gender: "female", type: "shadow" },
    { name: "Gloomora", detail: "The gloom queen.", status: false, gender: "female", type: "shadow" },
    { name: "Shadia", detail: "The shadow guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Noctara", detail: "The nocturnal queen.", status: false, gender: "female", type: "shadow" },
    { name: "Umbra", detail: "The shadow mistress.", status: false, gender: "female", type: "shadow" },
    { name: "Duskaris", detail: "The dusk queen.", status: false, gender: "female", type: "shadow" },
    { name: "Glooma", detail: "The gloom guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Shadira", detail: "The shadow queen.", status: false, gender: "female", type: "shadow" },
    { name: "Noctura", detail: "The nocturnal guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Umbros", detail: "The shadow queen.", status: false, gender: "female", type: "shadow" },
    { name: "Duskar", detail: "The dusk guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Gloomara", detail: "The gloom queen.", status: false, gender: "female", type: "shadow" },
    { name: "Shadira", detail: "The shadow guardian.", status: false, gender: "female", type: "shadow" },
    { name: "Noctura", detail: "The nocturnal queen.", status: false, gender: "female", type: "shadow" },
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
        name: "Alien Name Generator",
        pic: "/alien.webp",
        link: "https://www.nameideagenerator.com/alien-name-generator",
    },
    {
        name: "Angel Name Generator",
        pic: "/angel.jpg",
        link: "https://www.nameideagenerator.com/angel-name-generator",
    },
    {
        name: "Demon Name Generator",
        pic: "/demonpic.jpg",
        link: "https://www.nameideagenerator.com/demon-name-generator",
    },
    {
        name: "Horse Name Generator",
        pic: "horse.webp",
        link: "https://www.nameideagenerator.com/horse-name-generator",
    },
    ];

const DragonbornNameGenerator = () => {
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
  
const bgImage = "/bg-dragonborn.webp"
const context = "Dragonborn Name Generator"
const Q1 = "Can I use the Dragonborn Name Generator for other fantasy races?"
const A1 = "Yes! While it's made for dragonborn, the names also work well for other strong, honor-bound fantasy characters."
const Q2 = "Do the names follow official D&D naming rules?"
const A2 = "The names are inspired by D&D naming conventions, which include clan-based traditions and draconic sounds, but they’re flexible for any setting."
const Q3 = "Can I choose between male, female, or neutral names?"
const A3 = "Absolutely! You can select the gender that fits your character, and our name generator will provide names with that tone and style."
const Q4 = "Are there meanings behind the names?"
const A4 = "Yes! Hover over any name to view its meaning or linguistic inspiration. Many are tied to legacy, strength, or ancient language roots."
const Q5 = "Is there a limit to how many names I can generate?"
const A5 = "Not at all. You can generate names as many times as you like until you find the perfect one."
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
        <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fictional and Sci-Fi Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/demon-name-generator" className="hover:underline text-[#343a40]">Demon Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                Random DnD Dragonborn Name Generator With Meaning
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
            <p className="text-center text-[#343a40]">Types of Dragonborn</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="fire">Fire</option>
              <option value="ice">Ice</option>
              <option value="earth">Earth</option>
              <option value="shadow">Shadow</option>

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
            Say Goodbye to Naming Struggles
            </h2>
            <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
            A dragonborn name should carry weight. It should reflect strength, honor, 
            and the ancient roots of your character’s bloodline. But let’s be honest—finding that kind of name isn’t always easy. 
            Scrolling through endless name lists? Exhausting. And half of them sound like budget brand cereals.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            That’s why we built the Dragonborn Name Generator—a tool forged in the fires of creativity (and maybe a little caffeine). You just pick a few traits—clan type, 
            personality, alignment—and click once. Boom. A list of names that actually sound like a dragonborn would wear them with pride.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            Looking for something noble? Brutal? Maybe even a little mysterious? Our DnD Names Generator has you covered—no fluff, just names that belong in legends.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How Our Dragonborn Name Generator Works?
          </h2>
          <p className="sm:text-[20px] text-[28px] text-center">
          Our <a href="https://www.nameideagenerator.com/"> Name Generator</a> helps you find bold, meaningful names. 
          Each name is built to match the rich culture and pride of dragonborn characters. Here's how you can use the tool step by step:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Step 1 - Choose a Name Type
              </h3>
              <p>
              Pick the kind of name you want your dragonborn to have. You can go for traditional names, clan names, or something more fantasy-driven. 
              Each style creates a different tone for your character’s background and role.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Step 2 - Select a Gender
              </h3>
              <p>
              Decide if your dragonborn is male, female, or neutral. This option helps shape the structure and sound of the name to better match your character’s identity.</p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                Step 3 - Click <b>‘Generate’</b>
              </h3>
              <p>
              Hit the Generate button to get a new batch of names. The tool instantly pulls up a list based on your selected style and gender. No delays, no filler.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                Step 4 - Hover to See Meanings
              </h3>
              <p>
              Move your cursor over any name to reveal its meaning or linguistic influence. Some are inspired by ancient languages, others by draconic culture or fantasy lore.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
              Refine and Repeat
              </h3>
              <p>
              Still not satisfied? You can go back, adjust your choices, and generate again. The tool lets you explore unlimited combinations until you find a name that feels perfect.
              </p>
              <p>
              No need to overthink it. Our tool does the work so you can focus on building the rest of your dragonborn’s story.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="dragonborn.jpg"
              alt="Dragonborn Name Generator | DND Dragonborn Names With Meaning"
              className="w-[320px] h-[320px] sm:absolute sm:top-0 sm:left-10 rounded-[16px]"
            />
            <img
              src="dragonborn1.jpg"
              alt="Dragonborn Name Generator | DND Dragonborn Names With Meaning"
              className="w-[320px] h-[320px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
          Related to DnD DragonBorn Name Generator
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
      What Makes Our Dragonborn Name Generator Worth Using?
    </h2>
    <p class="sm:text-[16px] text-[16px] font-semibold">
      The Dragonborn Name Generator is ideal for various creative needs. 
      Scroll down to see how it can enhance your projects and bring your characters to life.
    </p>
  </div>

  <div class="flex flex-col lg:flex-row gap-10 mt-10">
    <div class="lg:w-[100%] w-full grid sm:grid-cols-2 gap-6">
      <div class="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Quick and Easy to Use</h3>
        <p>Get powerful names in seconds without forms or delays.</p>
      </div>

      <div class="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Built for Dragonborn Lore</h3>
        <p>Every name reflects strength, pride, and cultural depth.</p>
      </div>

      <div class="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Custom Options That Matter</h3>
        <p>Select style and gender for names that truly fit.</p>
      </div>

      <div class="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Meanings with Every Name</h3>
        <p>Hover over names to see meanings and origins instantly.</p>
      </div>

      <div class="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Endless Name Combinations</h3>
        <p>Generate as many names as you like with no limits.</p>
      </div>

      <div class="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Fits Any Fantasy Setting</h3>
        <p>Perfect for D&D, storytelling, or fantasy gaming.</p>
      </div>
    </div>

  
  </div>

  <hr class="mt-10" />
</div>




<div class="w-[90%] mx-auto text-[#343a40] my-[40px]">
  <div class="mb-[40px]">
    <h2 class="text-[28px] sm:text-[36px] font-bold mb-4 text-center">
      What Makes Dragonborn Names Stand Out in Fantasy Worlds?
    </h2>
    <div class="bg-white rounded-xl shadow-md p-6 sm:p-8 text-lg leading-relaxed">
      <p class="mb-4">
        Dragonborn names hold weight. They are chosen at random but they’re also tied to a long tradition of strength, discipline, and ancestral pride. A single name can reflect a character’s connection to their clan, their values, or even the legacy they’re trying to live up to. That’s why dragonborn names often sound bold, ancient, and powerful.
      </p>
      <p>
        In fantasy settings, names do more than identify. They help shape the way others see your character. A name like <strong>“Rhogar”</strong> or <strong>“Tazmyra”</strong> immediately feels tied to draconic heritage. It tells the world this character walks with purpose. That depth makes dragonborn names stand out because they don’t just sound strong, they mean something strong.
      </p>
    </div>
  </div>

  <div>
    <h2 class="text-[28px] sm:text-[36px] font-bold mb-4 text-center">
      Dragonborn Name Inspiration
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-xl font-semibold mb-2">Draconic Sound & Strength</h3>
        <p>
          Dragonborn names draw from many sources. You can find inspiration in mythology, dragons, and even different cultures. A good name reflects the character’s background and role in the story. You look at dragon-related words for ideas. Names like <strong>Drakos</strong> or <strong>Kavarrath</strong> evoke strength and power. These names have sharp, strong sounds that reflect the fierce nature of Dragonborn.
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-xl font-semibold mb-2">Myths, Legends & Cultural Roots</h3>
        <p>
          Mythology also offers great inspiration. Many Dragonborn names sound ancient and legendary. <strong>Sahrak</strong> and <strong>Valthrun</strong> could work well for characters with a deep, ancient history. Have you considered linking your Dragonborn’s name to a specific myth or legend? You can also take cues from different cultures. Does your Dragonborn have ties to a specific culture or clan? Their name can reflect that connection.
        </p>
      </div>
    </div>
  </div>
</div>


<div class="w-[90%] mx-auto my-[40px] text-[#343a40]">
  <h2 class="text-[28px] sm:text-[36px] font-bold mb-6 text-center">List of Unique Dragonborn Names</h2>

  <div class="overflow-x-auto">
    <table class="min-w-full table-auto border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-md">
      <thead class="bg-gray-100">
        <tr>
          <th class="text-left p-4 text-[18px] font-semibold border-b border-gray-200">Name</th>
          <th class="text-left p-4 text-[18px] font-semibold border-b border-gray-200">Meaning & Traits</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Drakos</td>
          <td class="p-4">Derived from "drake" meaning dragon, evokes power and strength</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Vyzara</td>
          <td class="p-4">Mysterious, suggesting elegance and intelligence</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Kavarrath</td>
          <td class="p-4">Ancient and strong, reflects a connection to ancient dragon bloodlines</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Zorvok</td>
          <td class="p-4">Fierce, warrior-like, indicates battle readiness</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Tazrah</td>
          <td class="p-4">Bold, symbolizing courage and resilience</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Sahrak</td>
          <td class="p-4">Evokes a sense of wisdom and ancient knowledge</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Tharok</td>
          <td class="p-4">Sturdy, reflecting a solid, unwavering character</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Raezar</td>
          <td class="p-4">Mystical, with a connection to the arcane or unknown</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Xalnoth</td>
          <td class="p-4">Powerful, indicating a dominant force or leader</td>
        </tr>
        <tr class="hover:bg-gray-50 transition">
          <td class="p-4 font-semibold">Valthrun</td>
          <td class="p-4">Noble, representing a regal or high-born character</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="mt-6 text-lg">
    These names carry unique qualities. Want your Dragonborn to stand out? Pick one of these names for a powerful, distinct identity.
  </p>
</div>


<div class="w-[90%] mx-auto my-[40px] text-[#343a40]">
  <h2 class="text-[28px] sm:text-[36px] font-bold text-center mb-8">Common Themes and Inspirations for Dragonborn Names</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white rounded-xl shadow-md p-6">
      <h3 class="text-xl font-semibold mb-2">Dragon-Related Themes</h3>
      <p>Names like <strong>Drakos</strong> or <strong>Kavarrath</strong> echo power and mystique. These names reflect strength, majesty, and a deep connection to dragons.</p>
    </div>

    <div class="bg-white rounded-xl shadow-md p-6">
      <h3 class="text-xl font-semibold mb-2">Mythological Influences</h3>
      <p>Names like <strong>Valthrun</strong> or <strong>Sahrak</strong> give your character an ancient or divine aura, inspired by myth and timeless legends.</p>
    </div>

    <div class="bg-white rounded-xl shadow-md p-6">
      <h3 class="text-xl font-semibold mb-2">Cultural Influences</h3>
      <p>Names such as <strong>Raazgar</strong> or <strong>Vyzara</strong> may come from different Dragonborn clans or traditions—warrior, scholarly, or spiritual in nature.</p>
    </div>

    <div class="bg-white rounded-xl shadow-md p-6">
      <h3 class="text-xl font-semibold mb-2">Elemental Themes</h3>
      <p>Inspired by fire, ice, or lightning—names like <strong>Tharok</strong> or <strong>Mornak</strong> carry the elemental essence of your Dragonborn's power.</p>
    </div>
  </div>
</div>

<div class="w-[90%] mx-auto my-[60px] text-[#343a40]">
  <h2 class="text-[28px] sm:text-[36px] font-bold text-center mb-8">How Dragonborn Names Reflect Clan, Honor, and Legacy</h2>

  <div class="flex flex-col lg:flex-row gap-10 items-start">
    <div class="lg:w-[60%] w-full bg-white rounded-xl p-6 shadow-md">
      <p class="mb-4">Dragonborn names aren’t just personal—they’re historical. A name reflects your bloodline, your clan’s pride, and your cultural identity. It tells the story of where you come from and what you represent.</p>

      <h3 class="text-xl font-semibold mb-2">Clan Names and Ancient Lineages</h3>
      <p class="mb-4">Names like <strong>Kepeshkmolik</strong> or <strong>Myastan</strong> come first in dragonborn culture. They’re more than titles—they’re heritage markers, showing loyalty and honor.</p>

      <h3 class="text-xl font-semibold mb-2">Masculine, Feminine, and Neutral Styles</h3>
      <p>From strong and commanding like <strong>Balasar</strong> to graceful and noble like <strong>Akra</strong>, every name style offers personality. Gender-neutral options help reflect individual identity in any world.</p>
    </div>

    <div class="lg:w-[40%] w-full flex justify-center">
    <img src="Dragonborn_2.jpg" alt="Dragonborn Clan Legacy" className="rounded-xl shadow-md max-w-[350px] w-full" />
    </div>
  </div>
</div>

<div class="w-[90%] mx-auto my-[60px] text-[#343a40]">
  <h2 class="text-[28px] sm:text-[36px] font-bold text-center mb-6">The Roots of Dragonborn Names in Fantasy Lore</h2>

  <div class="bg-white rounded-xl shadow-md p-6 sm:p-8 leading-relaxed text-[16px]">
    <p class="mb-4">Dragonborn names trace back to ancient draconic languages and cultural traditions. They’re built on legacy, pride, and strength—often sounding ceremonial or regal. It’s what sets dragonborn apart from humans, elves, or dwarves.</p>

    <p class="mb-4">In Dungeons & Dragons, a Dragonborn typically carries both a personal name and a clan name. The result? A character who feels deeply rooted in a world with real history and honor.</p>

    <p>Outside of D&D, dragonborn-style names appear in novels, fantasy games, and MMOs. Writers use them to give characters an instant sense of heritage and weight. The name is not just a label—it’s a mark of legacy, ready to be carried into the next great tale.</p>
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
         <div className="pl-8">
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

export default DragonbornNameGenerator;

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
const Q1 = "Is the Dragonborn Name Generator free to use?"
const A1 = "Yes, our tool has a basic version which is free to use. You can access all essential features without any cost. Use it unlimitedly without any fear of its cost."
const Q2 = "Can I save the names generated?"
const A2 = "Yes, you can save the generated names on this site. This feature allows you to keep track of your favorite names for future use."
const Q3 = "How unique are the names generated?"
const A3 = "Our tool uses advanced algorithms to produce names that are unique and well-suited for Dragonborn characters. Each name is designed to stand out."
const Q4 = "Is my data safe when using the generator?"
const A4 = "Yes, we use robust encryption technology to protect your data. Your inputs and preferences remain secure and confidential."
const Q5 = "Can I generate names for other fantasy races?"
const A5 = "Currently, the tool specializes in Dragonborn names. We are exploring options to include names for other fantasy races in the future."
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
                Random Dragonborn Name Generator With Meaning
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
              About Us
            </h2>
            <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
            Our Dragonborn Name Generator is an essential tool for Dungeons and Dragons or D&D players and Dungeon masters. 
            It generates unconventional names for Dragonborn characters that are compatible with the lore to improve your playing experience. 
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            Tailored to Dungeons and Dragons (D&D)’s opulent, fantasy world—it offers you some options to generate 
            names that match the desired gender, length, and specific traits. 
            This not only saves your time but also adds depth and authenticity to your characters. 
            It ensures an immersive adventure in the D&D universe.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            We have designed and developed it with robust security features to keep user data safe and secure. 
            It uses encryption technology to protect sensitive information such as user names and preferences. 
            Everything will remain safe for you.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Dragonborn Name Generator?
          </h2>
          <p className="sm:text-[20px] text-[28px] text-center">
          Follow these simple steps to use our Dragonborn Name Generator and create unique names effortlessly:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[28px] text-[20px] font-semibold">
              Step 1 - Specify Gender
              </h3>
              <p>
              Select the gender to generate a dragonborn name, aligning with traditional dragonborn naming conventions in fantasy lore.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[28px] text-[20px] font-semibold">
              Step 2 - Select the Type
              </h3>
              <p>
              Pick the type of dragonborn name you are interested in, such as heroic, mystical, or ancient, to refine the style of names generated.</p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                Step 3 - Click on Generate
              </h3>
              <p>
              Press the <b> "Generate"</b> button to start the creation of dragonborn names based on your inputs.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                Step 4 - Review Names and Their Meanings
              </h3>
              <p>
              The generated names will be displayed. Hover over each name to uncover detailed information like its meaning, background, and the mythology it's associated with.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="dragonborn.jpg"
              alt="Dragonborn Name Generator | DND Dragonborn Names With Meaning"
              className="w-[300px] h-[320px] sm:absolute sm:top-0 sm:left-10 rounded-[16px]"
            />
            <img
              src="dragonborn1.jpg"
              alt="Dragonborn Name Generator | DND Dragonborn Names With Meaning"
              className="w-[300px] h-[320px]  sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
    <div class="w-[80%] mx-auto text-[#343a40] my-[30px] ">
        <div class="text-center mb-[10px]">
            <h2 class="sm:text-[36px] text-[22px] font-semibold mb-4">
            Who Can Benefit from the Dragonborn Name Generator?
            </h2>
            <p class="sm:text-[16px] text-[22px] font-semibold">
            The Dragonborn Name Generator is ideal for various creative needs. 
            Scroll down to see how it can enhance your projects and bring your characters to life.
            </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
     
    <div class="w-[80%]">
        <hr class="my-4" />
        <div class="py-[10px]">
            <div class="py-[5px] flex flex-col gap-2">
                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                Writers
                </h3>
                <p>
                Our Dragonborn Name Generator helps writers create unique and compelling names for their characters. 
                So, if you are also a writer then use it to add depth and authenticity to your fantasy stories and novels.
                </p>
            </div>
            <div class="py-[5px] flex flex-col gap-2">
                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                Game Developers 
                </h3>
                <p>
                Game developers can utilize our tool to generate diverse and imaginative names for Dragonborn characters in video games and tabletop RPGs. 
                Enhance your game’s world-building with distinctive names.</p>
            </div>
            <div class="py-[10px] flex flex-col gap-2">
                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                Creative Enthusiasts
                </h3>
                <p>
                Anyone involved in creative projects, from role-playing games to art, can use the generator to find fitting names. 
                Bring your Dragonborn characters to life with names that capture their essence.
                </p>
            </div>
            <div class="py-[10px] flex flex-col gap-2">
                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                Role-Playing Gamers 
                </h3>
                <p>
                Role-playing gamers can benefit from our tool. 
                Yes – if you are also a gamer then use our free tool to create memorable names for their Dragonborn avatars. 
                Enhance your gaming experience with unique names that stand out.
                </p>
            </div>
        </div>
    </div>
</div>
<hr />
    </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          Why Opt for the Dragonborn Name Generator?
          </h2>
          <p className="sm:text-[16px] text-[22px] text-center sm:font-normal font-semibold">
          Experience a seamless naming process with our tool’s advanced features and high-quality results. 
          Here are the features that make our tool an exclusive online Dragonborn name generator:
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Streamlined Name Generation
            </h3>
            <p>
            Our tool quickly generates names based on your input. Simplify your process with immediate results tailored to your specifications. 
            Enjoy a fast and effective way to create names for your Dragonborn characters.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Exceptional Name Quality
            </h3>
            <p>
            Utilize our advanced algorithms to produce names that are both unique and imaginative. Each name is crafted to suit Dragonborn characters and enhance their attributes. 
            Depends on our tool for high-quality and relevant name results.           
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Data Security and Privacy
            </h3>
            <p>
            We implement strong encryption protocols to ensure the safety of your data. All user inputs and preferences are kept secure and confidential. 
            Trust our system to maintain the privacy of your information.            
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Broad Usability
            </p>
            <p>
            Our tool supports a variety of creative projects, including gaming and writing. 
            Adapt the generated names to fit different scenarios and requirements. 
            Enhance your creative work with a versatile naming solution.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Swift and Effective
            </p>
            <p>
            Generate distinctive names instantly using our efficient tool. Reduce time spent on manual brainstorming and achieve results rapidly. 
            Experience a fast and dependable solution for all your naming needs.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Reliable Performance 
            </p>
            <p>
            Our tool consistently delivers accurate and fitting names. Rely on it for dependable results every time you need a Dragonborn name. 
            Experience a robust tool designed to meet your naming requirements with precision.
            </p>
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

export default DragonbornNameGenerator;

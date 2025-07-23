"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    {
        "name": "Kaelrael",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Galorith",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Alarion",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvanthorn",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Ithordris",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Alarthas",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvanthas",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Kaelsor",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Hadricrael",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Dorianwyn",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Alarwyn",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Alarwyn",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Ithordris",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvanion",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Falkthas",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Galordris",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Hadricrael",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Eldorthorn",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Kaeldris",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Hadricsor",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Hadricmere",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Ithorwyn",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Galordris",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Hadricsor",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Dorianwyn",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Fayendris",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Eliradris",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Isolderael",
        "detail": "the Starbinder",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Heliavane",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Jasraion",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Celestrael",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Heliawyn",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Delphrael",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Kaelasor",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Delphith",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Isoldemere",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Jasraith",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Kaelasor",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Celestmere",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Kaeladris",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Heliaith",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Galinawyn",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Celestmere",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Isoldeion",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Celestion",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Celestvane",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Elirathas",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Isoldewyn",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Ariawyn",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Isoldethorn",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Gryffindor"
    },
    {
        "name": "Kaeldris",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Falkvane",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Cedrrael",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Cedrdris",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Dorianvane",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Kaelith",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Dorianvane",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Alarsor",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Alardris",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Kaelmere",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Eldorthas",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Cedrwyn",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Falkdris",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Galorion",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Kaelthorn",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Cedrrael",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Eldorwyn",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Eldorthas",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Eldorrael",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Hadricmere",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Kaelion",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Alarith",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Ithorthas",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Cedrvane",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Jorvandris",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Ariadris",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Jasrathorn",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Jasrawyn",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Fayenith",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Ariawyn",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Delphthorn",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Fayenion",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Kaeladris",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Elirasor",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Isoldevane",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Isoldethas",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Galinasor",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Isoldeith",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Heliaion",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Fayendris",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Eliradris",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Delphdris",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Elirathas",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Celestrael",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Jasrathas",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Delphion",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Heliamere",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Celestvane",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Galinaith",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Heliadris",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Slytherin"
    },
    {
        "name": "Hadricdris",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricdris",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricthorn",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarthas",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Galorion",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricthorn",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Dorianion",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Cedrdris",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarwyn",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Galorrael",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Eldorwyn",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Galorsor",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Ithorrael",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricdris",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarthas",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Falkrael",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Falkvane",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Kaelrael",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarith",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Falkvane",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Doriandris",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Eldorion",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarthas",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Falkthorn",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Doriandris",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Kaelaion",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Ariawyn",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Heliamere",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Jasrathorn",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Celestdris",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Heliadris",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Kaelarael",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Celestrael",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Celestthas",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Celestmere",
        "detail": "the Starbinder",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Fayenvane",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Heliawyn",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Fayenvane",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Fayenith",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Galinasor",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Celestwyn",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Ariawyn",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Isoldewyn",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Delphmere",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Ariavane",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Jasramere",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Galinamere",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Celestdris",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Jasramere",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Delphrael",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Ravenclaw"
    },
    {
        "name": "Eldordris",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Ithorthorn",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelvane",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarwyn",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Ithorvane",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Ithormere",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Dorianrael",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Falkvane",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Falkith",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarrael",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Falkdris",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Galorthas",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelith",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Falkion",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarrael",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Falkdris",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Cedrrael",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Eldorith",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Galordris",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarvane",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Hadricvane",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Falkith",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarwyn",
        "detail": "the Spellwright",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Cedrthas",
        "detail": "the Starbinder",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Galordris",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Heliathas",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelawyn",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Eliraith",
        "detail": "the Shadow Weaver",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Heliamere",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Ariasor",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Galinawyn",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Delphith",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Celestrael",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelathas",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelavane",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Isoldethas",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelamere",
        "detail": "the Starbinder",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Isoldeith",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Isoldeith",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Fayenwyn",
        "detail": "the Eldritch Scholar",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Delphmere",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Delphthorn",
        "detail": "the Rune Caster",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelamere",
        "detail": "the Crystal Caller",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Ariasor",
        "detail": "the Spellwright",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Jasraith",
        "detail": "the Flame Sage",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelaith",
        "detail": "the Mystic Seer",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Heliadris",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Fayenthas",
        "detail": "the Arcane Guardian",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelawyn",
        "detail": "the Enigma Master",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Elirawyn",
        "detail": "the Starbinder",
        "status": false,
        "gender": "female",
        "type": "wizard",
        "house": "Hufflepuff"
    },
    {
        "name": "Ithorion",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Falksor",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Galormere",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Kaelvane",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvanmere",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Galorion",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvandris",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Ithorith",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Falkmere",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Eldormere",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvanthorn",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvansor",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Alardris",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Alarith",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Cedrmere",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvanmere",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Kaelthas",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Galorvane",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Eldorthas",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Hadricmere",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Galorsor",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Jorvanrael",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Eldorrael",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Hadricthorn",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Galorrael",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Zelra",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Velra",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Morgadora",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Oriara",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Selelle",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Lilithlira",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Morgaelle",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Ysravana",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Selsira",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Oriathys",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Morgaelle",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Ravthys",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Morgathys",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Selmira",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Vellira",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Ysranys",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Nyssasira",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Ysranys",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Velmira",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Orianys",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Sellira",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Ravvana",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Morgaelle",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Lilithnys",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Zellira",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Gryffindor"
    },
    {
        "name": "Kaelthas",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Doriandris",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Kaelith",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ithorthorn",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Eldormere",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Falkmere",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Alarthorn",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ithorthas",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Hadricthorn",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Cedrthas",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Dorianthas",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ithorsor",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Cedrdris",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Falkvane",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Galorthas",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Eldorthorn",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Alarmere",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Cedrmere",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Alarsor",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Dorianmere",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Falkrael",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Falkwyn",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ithorthorn",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Dorianvane",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Dorianmere",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Morganys",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Morgavana",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Oriamira",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Thaliara",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Nyssaelle",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Velelle",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Thaliasira",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Selmira",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Selsha",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Velsha",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ysralira",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Selmira",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Zeldora",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ysrasira",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Morgara",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Thaliathys",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Orialira",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Zelelle",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Zelra",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Velsha",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Thaliavana",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ravlira",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Nyssavana",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Ravnys",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Nyssamira",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Slytherin"
    },
    {
        "name": "Hadricrael",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Doriansor",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricmere",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarvane",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Dorianvane",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarmere",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Cedrthas",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ithorwyn",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ithorsor",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ithordris",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Alarthas",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ithorvane",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Jorvanvane",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Cedrthorn",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ithorthas",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Falkdris",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Falkvane",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Jorvanthas",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Kaelwyn",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricwyn",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Cedrwyn",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Jorvanion",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricmere",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Falkrael",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Eldormere",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Thaliara",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ysrara",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Liliththys",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Lilithelle",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Selnys",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Velsira",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Thaliara",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Morgadora",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Morgaelle",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Morgathys",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ravra",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ysraelle",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Velelle",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Selmira",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Selelle",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ravthys",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Morgaelle",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ravdora",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Nyssaelle",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Oriaelle",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Morgalira",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Selra",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Ysrathys",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Thalianys",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Oriamira",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw"
    },
    {
        "name": "Hadricvane",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Eldordris",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Hadricrael",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Ithorion",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarmere",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Galorsor",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Cedrrael",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelthorn",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Galorthas",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Galormere",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Cedrrael",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Cedrdris",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelthorn",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Eldorthorn",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelion",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Jorvanthorn",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Jorvanwyn",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Eldormere",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Ithorthorn",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarvane",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelvane",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarmere",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Alarthorn",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelion",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Kaelion",
        "detail": "the Star Seer",
        "status": false,
        "gender": "male",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Ravsha",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Nyssasha",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Oriavana",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Thaliaelle",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Zellira",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Lilithsira",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Velthys",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Velelle",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Thaliaelle",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Morgasira",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Selthys",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Nyssasha",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Velsira",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Selvana",
        "detail": "the Star Seer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Oriara",
        "detail": "the Rune Mistress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Ysravana",
        "detail": "the Flame Weaver",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Selsha",
        "detail": "the Mystic Oracle",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Selsira",
        "detail": "the Potion Maker",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Thaliara",
        "detail": "the Shadow Witch",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Ravmira",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Thaliadora",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Liliththys",
        "detail": "the Charm Caster",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Nyssara",
        "detail": "the Moon Enchantress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Morgalira",
        "detail": "the Eldritch Sorceress",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Morgamira",
        "detail": "the Veil Whisperer",
        "status": false,
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenkin",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxhowl",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Zornserpent",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxbeast",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Ornscale",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Xenspawn",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Ornclaw",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Zornserpent",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxhowl",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Morwyrm",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Krathspawn",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Ornclaw",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Vulfang",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Gralspawn",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Ornclaw",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxmorph",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Drakbeast",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Xenspawn",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Fenbeast",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Ornfang",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Zornmorph",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Xenwyrm",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Gralhowl",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Vulserpent",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Drakclaw",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Morkin",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Vulscale",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxwyrm",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Morbeast",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Fenwyrm",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Xenscale",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Krathspawn",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Zornbeast",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxclaw",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxscale",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Fenclaw",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Ornscale",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Zornserpent",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Xenspawn",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Xenkin",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Threxbeast",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Fenserpent",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Vulmorph",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Gralwyrm",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Zornhowl",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Zornfang",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Morserpent",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Gralscale",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Drakscale",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Fenserpent",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Gryffindor"
    },
    {
        "name": "Vulclaw",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Zornserpent",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Vulspawn",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxserpent",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Drakfang",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Drakkin",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxclaw",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Xenspawn",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Ornbeast",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Xenkin",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Xenscale",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Fenspawn",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Xenmorph",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Zornbeast",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Ornclaw",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxfang",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Gralclaw",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Vulclaw",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Ornkin",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Morbeast",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Vulbeast",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Ornmorph",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Gralkin",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Drakspawn",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxhowl",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Ornhowl",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Gralfang",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Vulhowl",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Krathmorph",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Morhowl",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Vulmorph",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Xenfang",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Gralwyrm",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Zornbeast",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxkin",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Xenhowl",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Xenkin",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Gralfang",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxmorph",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Mormorph",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Gralserpent",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Fenkin",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Fenfang",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxserpent",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Ornclaw",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Zornscale",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Zornmorph",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Fenkin",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Krathclaw",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Ornfang",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Slytherin"
    },
    {
        "name": "Threxserpent",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Fenfang",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Morfang",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Drakbeast",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Vulbeast",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Fenfang",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Threxspawn",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Ornscale",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Morfang",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Gralhowl",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Gralspawn",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Xenmorph",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Zornspawn",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Fenmorph",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Threxbeast",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Krathscale",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Threxhowl",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Vulclaw",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Drakbeast",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Morhowl",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Krathscale",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Gralmorph",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Drakmorph",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Xenclaw",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Zornhowl",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Gralkin",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Ornhowl",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Ornhowl",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Vulscale",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Drakhowl",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Krathbeast",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Vulclaw",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Ornbeast",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Ornwyrm",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Morbeast",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Ornserpent",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Xenmorph",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Morscale",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Morscale",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Threxserpent",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Krathwyrm",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Krathscale",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Threxclaw",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Vulclaw",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Drakmorph",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Zornspawn",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Fenmorph",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Krathhowl",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Ornserpent",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Drakscale",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Ravenclaw"
    },
    {
        "name": "Gralscale",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Krathhowl",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxbeast",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Drakscale",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Xenhowl",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Morclaw",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxclaw",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Vulfang",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenfang",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Zornclaw",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenwyrm",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Morfang",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Vulclaw",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenkin",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Xenbeast",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Krathkin",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxfang",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Vulspawn",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Ornscale",
        "detail": "Mystic Beast of the Hollow",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Gralfang",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Krathwyrm",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Gralspawn",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxwyrm",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Morfang",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Vulbeast",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "male",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxhowl",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenspawn",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Xenfang",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxfang",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenserpent",
        "detail": "Keeper of Ancient Ruins",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Zornscale",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Xenscale",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxwyrm",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Ornkin",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Krathhowl",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Vulhowl",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxhowl",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Drakkin",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Gralkin",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Drakhowl",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenspawn",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Drakwyrm",
        "detail": "Watcher of the Astral Gates",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Threxhowl",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Morspawn",
        "detail": "Protector of the Crystal Caverns",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenbeast",
        "detail": "Guardian of the Forbidden Forest",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Xenmorph",
        "detail": "Specter of the Night Skies",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Fenserpent",
        "detail": "Shadow of the Deep Woods",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Ornmorph",
        "detail": "Terror of the Northern Peaks",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Xenwyrm",
        "detail": "Beast of the Black Lake",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Zornkin",
        "detail": "Phantom of the Dark Marshes",
        "status": false,
        "gender": "female",
        "type": "creature",
        "house": "Hufflepuff"
    },
    {
        "name": "Pyroix",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Pyroendo",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ignesis",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terros",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraique",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrium",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraatus",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ignesis",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Lumora",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Pyroium",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Lumora",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrium",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraatus",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Lumix",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ignium",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Electroique",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Arcaora",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraify",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Lumora",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Cryoesis",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Arcaique",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Lumium",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ignaro",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrium",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ventos",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ventatus",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrify",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Arcaique",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraique",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Cryoos",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrique",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Aquaium",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Electroaro",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Aquaendo",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ignatus",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ignify",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Electroendo",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Lumaro",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Pyroique",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ventatus",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrium",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terratus",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ignos",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraique",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrora",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Terrora",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Ventique",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Electroify",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraora",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Umbraesis",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Gryffindor"
    },
    {
        "name": "Aquaique",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Aquaora",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Umbraium",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Umbraendo",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Ignique",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Terrium",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Aquaatus",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Aquaix",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Arcaium",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoix",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Umbraify",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Arcaesis",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Electroix",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Umbraora",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Electroique",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Terrix",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Aquaatus",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Pyroesis",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Electroatus",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Aquaesis",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Arcaium",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Terrora",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Ignium",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoatus",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Ignendo",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Arcaique",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Pyroos",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Lumesis",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Terrium",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoify",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Lumendo",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Terraro",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Lumify",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Arcaesis",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoaro",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Terraro",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Ventesis",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Terrify",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Umbraesis",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Lumix",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Umbraaro",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Arcaendo",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Electroesis",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoendo",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Aquaium",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoos",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Ventatus",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Pyroos",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Aquaora",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoos",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Slytherin"
    },
    {
        "name": "Cryoatus",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Electroique",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventendo",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Electroaro",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Arcaify",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ignaro",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Electroatus",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Electroix",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventium",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Arcaix",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Lumendo",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Lumaro",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Terrique",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaaro",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ignique",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Electroendo",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Umbraos",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Cryoium",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaesis",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventium",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaaro",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Pyroendo",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventesis",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Cryoium",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Pyroendo",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaos",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Terrium",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ignos",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaatus",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Pyroify",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ignos",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaix",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaora",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Arcaique",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Electroix",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventify",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Arcaify",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaaro",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Pyroaro",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventora",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Terrora",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventos",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Arcaos",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaendo",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaaro",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Pyroium",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Umbraique",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Ventix",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Aquaaro",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Pyroendo",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Ravenclaw"
    },
    {
        "name": "Lumix",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Cryoify",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignora",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Pyroora",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Aquaos",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Cryoaro",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Pyroora",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignos",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignix",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignify",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Lumaro",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ventora",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignendo",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Umbraesis",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignatus",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terros",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignos",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Lumify",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Arcaaro",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terros",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Cryoora",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ventify",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignaro",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Electroatus",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Umbraique",
        "detail": "Manipulates water flow",
        "status": false,
        "gender": "male",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignatus",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terrendo",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Pyroaro",
        "detail": "Freezes the air instantly",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignora",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ventendo",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terrique",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terrora",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Ignify",
        "detail": "Controls the earth beneath",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Aquaify",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Cryoos",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Electroatus",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Cryoium",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Aquaatus",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terraro",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terrify",
        "detail": "Unleashes a gust of wind",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Aquaora",
        "detail": "Unlocks ancient arcane seals",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Aquaesis",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Lumique",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terrique",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Cryoatus",
        "detail": "Casts a shadow veil",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Electroix",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Lumatus",
        "detail": "Channels electric shock",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Terratus",
        "detail": "Creates a burst of flames",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Electroix",
        "detail": "Summons a blinding light",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Pyroos",
        "detail": "Ignites a spectral fire",
        "status": false,
        "gender": "female",
        "type": "spell",
        "house": "Hufflepuff"
    },
    {
        "name": "Vitavine",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Elixdra",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumosis",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Philtvine",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumium",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Philtflux",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Elixium",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Philtbloom",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Necrovine",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Draugshade",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Necrobloom",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Ambroflux",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Necrodra",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Draugmire",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Necrodra",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Tonicora",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Philtvine",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Vitadra",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Necroora",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Draugosis",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Draugora",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumium",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Vitaium",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Draugflux",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Ambrodra",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Tonicmire",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Tonicbloom",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Chronovine",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Necromire",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Elixshade",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumosis",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Elixdra",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumium",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serummire",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Elixosis",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Draugflux",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumdra",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Philtshade",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Necroelle",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Tonicdra",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Ambrobloom",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumora",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Tonicbloom",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serummire",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Ambrobloom",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Serumdra",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Tonicium",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Chronomire",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Tonicvine",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Vitaium",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Gryffindor"
    },
    {
        "name": "Philtbloom",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambroosis",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Necroshade",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Mystibloom",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Mystiflux",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambrovine",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Vitashade",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Tonicelle",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Vitamire",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixflux",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumelle",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Philtmire",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixelle",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Mystiium",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Vitaelle",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Philtflux",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumflux",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambromire",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Chronoflux",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Mystiflux",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixium",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambrobloom",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Necrovine",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Draugium",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Vitadra",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Draugmire",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumdra",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumosis",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumelle",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Philtvine",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixosis",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixflux",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Chronovine",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Draugvine",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambromire",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumium",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumdra",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Mystimire",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambroosis",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Tonicvine",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixora",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Serumshade",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambromire",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Draugdra",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Philtelle",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixelle",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Chronoflux",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Tonicflux",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Necroelle",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Ambrobloom",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Slytherin"
    },
    {
        "name": "Elixora",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Necrobloom",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Necrovine",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicdra",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumflux",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Ambroosis",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Necroosis",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumflux",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronomire",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Vitaora",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Ambroflux",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicelle",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Elixosis",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumflux",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumosis",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicosis",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicbloom",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Draugosis",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Draugvine",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronoshade",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Philtdra",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Ambroelle",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronoshade",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Mystiosis",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Vitaelle",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumdra",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronoora",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronoelle",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicdra",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronoshade",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumdra",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumvine",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronoelle",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Philtvine",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicium",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Vitaium",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Draugmire",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Draugosis",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Draugdra",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Serumelle",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Mystiosis",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicvine",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Ambrodra",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Ambrodra",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronoium",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Elixium",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Elixdra",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Chronovine",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Vitaflux",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Tonicium",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Ravenclaw"
    },
    {
        "name": "Philtshade",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Tonicshade",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Philtium",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Draugium",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Vitaelle",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Philtosis",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Draugvine",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necromire",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Elixbloom",
        "detail": "Poisons silently",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Serumium",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Philtdra",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necroora",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Ambrovine",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Philtshade",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necroelle",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Vitabloom",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Ambroelle",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Philtdra",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Vitaium",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Chronoosis",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Mystielle",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Ambroshade",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Elixelle",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Tonicshade",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Ambroora",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "male",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Draugbloom",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Tonicium",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Chronoium",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Serumshade",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Serumosis",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Tonicshade",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Elixelle",
        "detail": "Heals minor wounds",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Ambroflux",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Philtmire",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Vitaora",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Chronomire",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necromire",
        "detail": "Poisons silently",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Tonicmire",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necromire",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Serumbloom",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necrobloom",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Serummire",
        "detail": "Enhances memory retention",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Mystibloom",
        "detail": "Grants temporary invisibility",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Chronodra",
        "detail": "Reveals hidden truths",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Ambroosis",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Serumshade",
        "detail": "Strengthens physical form",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Chronoora",
        "detail": "Cures rare magical diseases",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Elixelle",
        "detail": "Restores magical energy",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necrobloom",
        "detail": "Summons calming aura",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
    {
        "name": "Necrobloom",
        "detail": "Slows down time briefly",
        "status": false,
        "gender": "female",
        "type": "potion",
        "house": "Hufflepuff"
    },
     {
        "name": "Amulet of Wisdom",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Shield of Wisdom",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Amulet of Dawn",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Orb of Dawn",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Flames",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Eternity",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Flames",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Orb of Illusions",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Crown of Dawn",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Ring of Flames",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Storms",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Amulet of Binding",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Staff of Storms",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Blade of Echoes",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Staff of Secrets",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Eternity",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Dawn",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Shield of Flames",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Secrets",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Shadows",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Binding",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Ring of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Binding",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Orb of Storms",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Amulet of Binding",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Storms",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Shield of Eternity",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Shield of Echoes",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Shadows",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Ring of Flames",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Gem of Secrets",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Shield of Secrets",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Secrets",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Crown of Storms",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Amulet of Binding",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Gem of Dawn",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Amulet of Storms",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Tome of Binding",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Crown of Shadows",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Chalice of Echoes",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Staff of Binding",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Amulet of Wisdom",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Ring of Wisdom",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Ring of Illusions",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Ring of Secrets",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Staff of Illusions",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Orb of Dawn",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Shield of Wisdom",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Gryffindor"
    },
    {
        "name": "Staff of Flames",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Shadows",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Staff of Wisdom",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Wisdom",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Orb of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Tome of Wisdom",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Binding",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Staff of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Flames",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Illusions",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Eternity",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Storms",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Blade of Secrets",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Eternity",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Chalice of Dawn",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Secrets",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Amulet of Eternity",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Orb of Dawn",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Tome of Eternity",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Wisdom",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Dawn",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Blade of Echoes",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Illusions",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Secrets",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Shadows",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Binding",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Binding",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Storms",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Dawn",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Staff of Binding",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Illusions",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Amulet of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Binding",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Gem of Dawn",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Secrets",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Shield of Flames",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Amulet of Wisdom",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Blade of Flames",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Orb of Binding",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Orb of Flames",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Amulet of Illusions",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Amulet of Eternity",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Orb of Eternity",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Amulet of Binding",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Orb of Binding",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Wisdom",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Orb of Illusions",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Blade of Eternity",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Shield of Echoes",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Crown of Eternity",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Slytherin"
    },
    {
        "name": "Ring of Binding",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Eternity",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Crown of Wisdom",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Shield of Secrets",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Staff of Binding",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Amulet of Storms",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Secrets",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Crown of Eternity",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Binding",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Crown of Flames",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Crown of Eternity",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Crown of Flames",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Staff of Flames",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Chalice of Storms",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Chalice of Storms",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Amulet of Binding",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Illusions",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Staff of Dawn",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Tome of Flames",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Blade of Secrets",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Orb of Shadows",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Ring of Secrets",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Orb of Shadows",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Orb of Flames",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Staff of Eternity",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Tome of Flames",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Amulet of Storms",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Staff of Eternity",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Amulet of Storms",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Chalice of Echoes",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Orb of Flames",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Echoes",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Chalice of Eternity",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Orb of Illusions",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Amulet of Wisdom",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Orb of Binding",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Blade of Wisdom",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Echoes",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Flames",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Amulet of Storms",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Chalice of Illusions",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Chalice of Echoes",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Crown of Binding",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Tome of Dawn",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Orb of Flames",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Crown of Illusions",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Gem of Echoes",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Staff of Wisdom",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Blade of Secrets",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Ring of Flames",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Ravenclaw"
    },
    {
        "name": "Staff of Dawn",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Shield of Secrets",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Shield of Echoes",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Gem of Eternity",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Orb of Echoes",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Staff of Shadows",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Staff of Wisdom",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Blade of Storms",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Echoes",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Shield of Eternity",
        "detail": "Protects against dark arts",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Eternity",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Blade of Binding",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Ring of Illusions",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Flames",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Illusions",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Eternity",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Gem of Flames",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Echoes",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Illusions",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Chalice of Flames",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Binding",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Blade of Dawn",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Staff of Flames",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Chalice of Illusions",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "male",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Staff of Echoes",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Gem of Eternity",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Dawn",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Staff of Eternity",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Staff of Dawn",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Storms",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Shadows",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Shadows",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Amulet of Shadows",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Staff of Echoes",
        "detail": "Said to contain forbidden magic",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Ring of Illusions",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Shadows",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Amulet of Illusions",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Blade of Dawn",
        "detail": "Reflects true intentions",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Amulet of Secrets",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Illusions",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Echoes",
        "detail": "An ancient relic of power",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Blade of Storms",
        "detail": "Grants visions of the future",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Shadows",
        "detail": "Hidden in the depths of the castle",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Ring of Flames",
        "detail": "Unlocks sealed doorways",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Tome of Flames",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Blade of Dawn",
        "detail": "Forged by the first wizards",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Chalice of Illusions",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Crown of Shadows",
        "detail": "Empowers the bearer with strength",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Amulet of Binding",
        "detail": "Channels elemental forces",
        "status": false,
        "gender": "female",
        "type": "object",
        "house": "Hufflepuff"
    },
    {
        "name": "Moon Crypt",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Star Hollow",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Ice Hollow",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Ice Citadel",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Elder Hollow",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Shadow Spire",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Storm Crypt",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Crystal Grove",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Storm Hollow",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Ice Marsh",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Star Crypt",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Shadow Cavern",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Elder Citadel",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Silver Sanctum",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Shadow Grove",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Spire",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Elder Crypt",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Fire Keep",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Storm Keep",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Storm Spire",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Shadow Marsh",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Spire",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Ice Marsh",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Star Cavern",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Silver Grove",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Crystal Keep",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Shadow Sanctum",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Grove",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Elder Citadel",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Crystal Citadel",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Shadow Vale",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Spire",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Cavern",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Fire Keep",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Star Vale",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Crypt",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Fire Keep",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Fire Citadel",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Storm Hollow",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Star Hollow",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Crystal Cavern",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Silver Sanctum",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Night Citadel",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Silver Keep",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Crystal Hollow",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Elder Hollow",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Ice Spire",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Hollow",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Silver Keep",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Moon Keep",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Gryffindor"
    },
    {
        "name": "Ice Crypt",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Night Keep",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Citadel",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Marsh",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Star Keep",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Citadel",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Storm Grove",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Ice Hollow",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Elder Keep",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Cavern",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Star Hollow",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Vale",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Keep",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Vale",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Cavern",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Marsh",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Ice Spire",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Crystal Keep",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Night Cavern",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Ice Keep",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Citadel",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Silver Crypt",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Night Sanctum",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Crypt",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Hollow",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Crypt",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Hollow",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Storm Vale",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Crystal Cavern",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Fire Marsh",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Spire",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Moon Sanctum",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Elder Spire",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Star Crypt",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Night Vale",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Elder Sanctum",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Crystal Keep",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Silver Sanctum",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Elder Spire",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Shadow Crypt",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Elder Cavern",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Silver Hollow",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Silver Grove",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Storm Keep",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Star Marsh",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Ice Citadel",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Storm Cavern",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Ice Sanctum",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Elder Vale",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Star Keep",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Slytherin"
    },
    {
        "name": "Night Crypt",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Night Crypt",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Elder Hollow",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Silver Hollow",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Elder Keep",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Keep",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Night Vale",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Crypt",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Night Marsh",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Crystal Citadel",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Night Cavern",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Night Vale",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Storm Marsh",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Crystal Vale",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Star Sanctum",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Citadel",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Moon Keep",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Moon Grove",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Silver Citadel",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Silver Sanctum",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Crystal Keep",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Keep",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Moon Cavern",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Night Keep",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Fire Citadel",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Storm Citadel",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Shadow Keep",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Cavern",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Storm Sanctum",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Keep",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Fire Crypt",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Silver Sanctum",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Shadow Sanctum",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Moon Vale",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Crypt",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Silver Keep",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Star Spire",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Crystal Marsh",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Star Grove",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Star Cavern",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Shadow Spire",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Moon Spire",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Shadow Grove",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Silver Keep",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Sanctum",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Moon Keep",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Elder Crypt",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Ice Cavern",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Moon Crypt",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Fire Hollow",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Ravenclaw"
    },
    {
        "name": "Crystal Marsh",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Star Spire",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Star Grove",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Crypt",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Storm Spire",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Grove",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Marsh",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Marsh",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Elder Cavern",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Storm Spire",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Silver Spire",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Star Citadel",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Fire Citadel",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Star Grove",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Fire Sanctum",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Night Keep",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Night Marsh",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Marsh",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Vale",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Vale",
        "detail": "Ancient ruins with magical remnants",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Silver Grove",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Vale",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Crystal Grove",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Hollow",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Storm Cavern",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "male",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Crypt",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Night Spire",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Storm Cavern",
        "detail": "A haunted ground with untold stories",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Cavern",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Star Citadel",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Vale",
        "detail": "A secret training ground for spellcasters",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Star Hollow",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Sanctum",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Moon Marsh",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Vale",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Citadel",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Fire Vale",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Sanctum",
        "detail": "A hidden sanctuary for wizards",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Keep",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Crystal Marsh",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Crystal Sanctum",
        "detail": "A nexus of ley lines",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Elder Crypt",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Fire Cavern",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Marsh",
        "detail": "A place where magical beasts dwell",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Shadow Cavern",
        "detail": "The resting place of powerful artifacts",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Storm Keep",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Keep",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Grove",
        "detail": "A location cloaked in perpetual mist",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Ice Grove",
        "detail": "A forbidden area protected by spells",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
    {
        "name": "Elder Grove",
        "detail": "A place where time flows differently",
        "status": false,
        "gender": "female",
        "type": "place",
        "house": "Hufflepuff"
    },
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
        name: "Island Name Generator",
        pic: "/island1.jpg",
        link: "https://www.nameideagenerator.com/island-name-generator",
    },
    {
        name: "Halfling Name Generator",
        pic: "/halfling.webp",
        link: "https://www.nameideagenerator.com/halfling-name-generator",
    },
    {
        name: "Drow Name Generator",
        pic: "/drowname.webp",
        link: "https://www.nameideagenerator.com/drow-name-generator",
    },
    {
        name: "Tiefling Name Generator",
        pic: "female.jpg",
        link: "https://www.nameideagenerator.com/tiefling-name-generator",
    },
];

const HarryPotterNameGenerator = () => {
    const [lockedDemonList, setLockedDemonList] = useState([
        null,
        null,
        null,
        null,
    ]);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedHouse, setSelectedHouse] = useState("");
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
    const handleHouseChange = (e) => {
    setSelectedHouse(e.target.value);
};

    const bgImage = "/harry.png"
    const context = "Harry Potter Name Generator"
    const Q1 = "Can I use names from the Harry Potter Name Generator in my stories or games?"
    const A1 = "Yes. You can use all generated Harry Potter character names for fan fiction, roleplay, tabletop games, or online avatars."

    const Q2 = "Are the names from the books and movies?"
    const A2 = " Some names are directly from J.K. Rowling’s books and films. Others are new wizarding world names inspired by the same magical style."
    
    const Q3 = "Is this the official Harry Potter Name Generator?"
    const A3 = " No. This is a fan-made Harry Potter Name Generator, not affiliated with J.K. Rowling, Warner Bros., or the official Wizarding World."

    const Q4 = "Can I create magical creature names, spells, and objects too?"
    const A4 = "Yes. The Harry Potter Name Generator lets you create names for creatures, spells, potions, magical objects, places, and usernames."

    const Q5 = "Does the generator work for both heroes and villains?"
    const A5 = "Yes. You can create names for brave Gryffindor heroes, cunning Slytherin villains, or any other magical role."

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
                <div className="container mx-auto py-4">
  {/* Breadcrumbs */}
  <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
    <ol className="list-none p-0 inline-flex">
      <li className="flex items-center">
        <a href="/" className="hover:underline text-[#343a40]">Home</a>
        <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      </li>
      <li className="flex items-center">
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/alien-name-generator" className="hover:underline text-[#343a40]">Alien Name Generator</a>
      </li>
    </ol>
  </nav>

  {/* Title */}
  <div>
    <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
      Random Alien Name Generator With Meaning
    </h2>
  </div>
</div>                    
                    <div className="py-[10px] flex flex-col gap-2">
                        <p className="text-center text-[#343a40]">Types of Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="wizard">Wizard</option>
                            <option value="witch">Witch</option>
                            <option value="creature">Creature</option>
                            <option value="spell">Spell</option>
                            <option value="potion">Potion</option>
                            <option value="object">Object</option>

                        </select>
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
    <p className="text-center text-[#343a40]">Hogwarts House</p>
    <select
        className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
        id="house"
        value={selectedHouse}
        onChange={handleHouseChange}
    >
        <option value="">Random</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
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
                         Name Your Magical Characters or Objects Like a True Potterhead
                        </h2>
                        <hr />
                        <p className="text-center py-[10px] text-[#343a40]">
                          The Harry Potter Name Generator is built by a Potterhead like you. It gives you instant access to thousands of wizarding world names. 
                          You’ll find names for witches, wizards, creatures, spells, potions, magical objects, places, and usernames right here in one place.
                          </p>
                          <p className="text-center py-[10px] text-[#343a40]">
                          Use it to create magical names inspired by Hogwarts students, Aurors, shopkeepers, villains, or founders of secret wizarding societies. 
                          You can pick by type, choose a Hogwarts house for style, and filter by gender when naming characters. 
                          </p>
                          <p className="text-center py-[10px] text-[#343a40]">
                          It’s fast, accurate, and made for fans who want names that feel like they came straight out of the books.
                          </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[32px] text-[24px] text-center">
                     How to Use the Harry Potter Character Name Generator?
                    </h2>
                    <p>
                     The tool loads up with preset Harry Potter-style names already displayed. 
                     You’ll find a mix of first names and surnames inspired by HP books, films, and new magical ideas. 
                    </p>
                    <p>
                     But if you want specific results—like a dark Slytherin wizard or a quirky Hufflepuff creature—you can configure the options as follows: 
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                                Step 1 - Select the name type you want
                            </h3>
                            <p>
                              Choose from different character types like Witch, Wizard, Magical Creature, or even Dark Wizard. 
                              Each option filters names to match tone, purpose, and lore.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                                Step 2 - Pick a gender for your character
                            </h3>
                            <p>
                             Choose between Male, Female, or Neutral. This sets the style and rhythm of the names—just 
                             like how Luna, Bellatrix, Severus, or Newt each carry their own sound.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[24px] text-[20px] font-semibold ">
                                Step 3 - Choose a Hogwarts house 
                            </p>
                            <p>
                             Select Gryffindor, Slytherin, Hufflepuff, or Ravenclaw. 
                             House choice influences the personality and mood of the name, 
                             whether you're crafting a brave Auror or a cunning potion master.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[24px] text-[20px] font-semibold ">
                             Step 4: Click the “Generate” button
                            </p>
                            <p>
                             Get a new list of names instantly. Click again for more. Each result is unique and built around your selected filters.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[24px] text-[20px] font-semibold ">
                             Step 5: Hover to reveal its meaning
                            </p>
                            <p>
                             Each name includes a hidden meaning, reference, or magical element. Hover to uncover the backstory behind the name.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="harry_potter_name_generator.png"
                            alt="Harry Potter name generator"
                            className="w-[280px]  h-[300px] sm:absolute sm:top-0 sm:left-10 rounded-[16px]"
                        />
                        <img
                            src="harry_potter_name_generator_scroll.png"
                            alt="Harry Potter name generator"
                            className="w-[280px] h-[320px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/harry_potter_castel.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <h3 className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Harry Potter Name Generator
                </h3>
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

           <div class="w-[90%] max-w-[1200px] mx-auto text-[#343a40] my-[50px]">
    <div class="text-center mb-8">
        <h2 class="sm:text-[36px] text-[26px] font-bold mb-4 leading-tight">
          Why Use a Harry Potter Character Name Generator?
        </h2>
        <p class="sm:text-[18px] text-[20px] font-medium text-[#555]">
            The right name brings the wizarding world to life. This tool helps you create names that match the lore, fit the magic, and make your stories unforgettable.
        </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-10 items-start">
        <div class="lg:w-[60%] space-y-6">
            <hr class="border-gray-300 mb-4" />
            <div class="flex flex-col gap-4 hover:translate-x-1 transition-all duration-300">
                <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#222]">
                    ✨ Craft Original Characters for Stories & Fan Fiction
                </h3>
                <p class="text-[#555] leading-relaxed">
                    Harry Potter, Luna Lovegood, Minerva McGonagall—all have names that reflect their magic and personality. Use this generator to create your own students, professors, villains, or secret society members. 
                    <span class="font-medium">Example:</span> Cassius Redthorn (Gryffindor), Selwyn Arclight (dark wizard rival).
                </p>
            </div>

            <div class="flex flex-col gap-4 hover:translate-x-1 transition-all duration-300">
                <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#222]">
                    🎮 Build Game Characters for Hogwarts Legacy or D&D
                </h3>
                <p class="text-[#555] leading-relaxed">
                    Your wizard needs a name that feels authentic. Create house-specific names like <span class="font-medium">Ivy Wrenmoor</span> (Ravenclaw) or <span class="font-medium">Lucian Blackvale</span> (Slytherin). Perfect for roleplay and tabletop games too!
                </p>
            </div>

            <div class="flex flex-col gap-4 hover:translate-x-1 transition-all duration-300">
                <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#222]">
                    🐉 Name Magical Creatures
                </h3>
                <p class="text-[#555] leading-relaxed">
                    Create original creatures like the <span class="font-medium">Emberclaw Drake</span> or the <span class="font-medium">Mossfang Serpent</span>. Perfect for Fantastic Beasts fans and storytellers.
                </p>
            </div>

            <div class="flex flex-col gap-4 hover:translate-x-1 transition-all duration-300">
                <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#222]">
                    🪄 Invent Spells, Potions & Objects
                </h3>
                <p class="text-[#555] leading-relaxed">
                    Use the generator to craft names like <span class="font-medium">Vox Obscura</span> (silencing spell) or <span class="font-medium">Basilisk Fang Elixir</span> (rare potion). Add magical depth to your world.
                </p>
            </div>

            <div class="flex flex-col gap-4 hover:translate-x-1 transition-all duration-300">
                <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#222]">
                    🏪 Create Wizarding Businesses
                </h3>
                <p class="text-[#555] leading-relaxed">
                    Need a shop name? Try <span class="font-medium">The Howling Cloak</span> for robes or <span class="font-medium">Moonstone Brews</span> for a magical café.
                </p>
            </div>

            <div class="flex flex-col gap-4 hover:translate-x-1 transition-all duration-300">
                <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#222]">
                    🗺️ Name Magical Locations
                </h3>
                <p class="text-[#555] leading-relaxed">
                    Set the scene with places like <span class="font-medium">Shadowglass Crossing</span> (hidden market) or <span class="font-medium">Wraithpine Hollow</span> (forbidden forest).
                </p>
            </div>

            <div class="flex flex-col gap-4 hover:translate-x-1 transition-all duration-300">
                <h3 class="sm:text-[24px] text-[20px] font-semibold text-[#222]">
                    🐾 Pick Names for Magical Pets
                </h3>
                <p class="text-[#555] leading-relaxed">
                    Name your owl, toad, or Kneazle. Try <span class="font-medium">Whiskeroot</span>, <span class="font-medium">Cobweb</span>, or <span class="font-medium">Glintpaw</span>.
                </p>
            </div>
        </div>

        <div class="lg:w-[40%] relative flex flex-col items-center gap-6">
            <img src="hermione_granger.png" alt="Hermione Granger" class="w-[320px] h-[320px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" />
            <img src="harry_potter_group.png" alt="Harry Potter Group" class="w-[320px] h-[320px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" />
        </div>
    </div>
</div>

<section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto w-4/5">
        <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 leading-tight">
            What Makes Our Harry Potter Name Generator the Best?
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 border border-gray-100">
                <h3 class="text-xl font-semibold text-[#222] mb-3">Vast Database</h3>
                <p class="text-[#555] leading-relaxed">
                    You get names penned by J.K. Rowling in the books and films, plus new names inspired by the same magical world.
                </p>
            </div>

            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 border border-gray-100">
                <h3 class="text-xl font-semibold text-[#222] mb-3">Always Accurate</h3>
                <p class="text-[#555] leading-relaxed">
                    Each name is designed to match the tone of the wizarding world, with no random or out-of-place outputs.
                </p>
            </div>

            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 border border-gray-100">
                <h3 class="text-xl font-semibold text-[#222] mb-3">Instant Results</h3>
                <p class="text-[#555] leading-relaxed">
                    Get your names instantly with every click—no delays, no limits, and no waiting between generations.
                </p>
            </div>

            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 border border-gray-100">
                <h3 class="text-xl font-semibold text-[#222] mb-3">Private and Secure</h3>
                <p class="text-[#555] leading-relaxed">
                    Use the Harry Potter name tool without sharing personal data. No logins, no sign-ups, and no tracking involved.
                </p>
            </div>

            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 border border-gray-100">
                <h3 class="text-xl font-semibold text-[#222] mb-3">Free Access</h3>
                <p class="text-[#555] leading-relaxed">
                    The HP name generator is completely free. No subscriptions, no paywalls, and no hidden fees at any point.
                </p>
            </div>
        </div>
    </div>
</section>
<section class="bg-[#fdfcfb] py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 leading-tight">
      How to Choose the Right Harry Potter Name for Your Character
    </h2>

    <p class="text-lg text-[#555] leading-relaxed text-center max-w-3xl mx-auto mb-12">
      A good name shapes a character’s role, sets the tone, and hints at their story. The Harry Potter universe follows unique naming rules. Once you spot the patterns, crafting names that feel magical becomes easy.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
        <h3 class="text-xl font-semibold text-[#222] mb-3">Start with the Character’s Role</h3>
        <p class="text-[#555] leading-relaxed mb-3">
          Names reflect purpose. Witches and wizards often blend classic British first names with magical or symbolic surnames.
        </p>
        <ul class="list-disc pl-5 text-[#555] space-y-1">
          <li><strong>Hermione Granger</strong> – Literary + common surname</li>
          <li><strong>Percival Dumbledore</strong> – Arthurian + whimsical</li>
          <li><strong>Gellert Grindelwald</strong> – Grand and sharp</li>
          <li><strong>Pomona Sprout</strong> – Tied to nature and her subject</li>
        </ul>
      </div>

      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
        <h3 class="text-xl font-semibold text-[#222] mb-3">Choose Names That Match the House</h3>
        <p class="text-[#555] leading-relaxed mb-3">
          Each Hogwarts house has personality—and names reflect it.
        </p>
        <ul class="list-disc pl-5 text-[#555] space-y-1">
          <li><strong>Gryffindor</strong> – Bold and heroic (e.g. Harry Potter)</li>
          <li><strong>Slytherin</strong> – Elegant, sharp (e.g. Draco Malfoy)</li>
          <li><strong>Ravenclaw</strong> – Mystical, intellectual (e.g. Luna Lovegood)</li>
          <li><strong>Hufflepuff</strong> – Friendly and earthy (e.g. Cedric Diggory)</li>
        </ul>
      </div>

      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
        <h3 class="text-xl font-semibold text-[#222] mb-3">Think About the Meaning</h3>
        <p class="text-[#555] leading-relaxed mb-3">
          Rowling used mythology and roots to give names depth. Use meanings to add story layers.
        </p>
        <ul class="list-disc pl-5 text-[#555] space-y-1">
          <li><strong>Remus Lupin</strong> – Roman legend + Latin for wolf</li>
          <li><strong>Sirius Black</strong> – Named after the Dog Star</li>
          <li><strong>Credence Barebone</strong> – Suggests belief + hardship</li>
        </ul>
      </div>

      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
        <h3 class="text-xl font-semibold text-[#222] mb-3">Mix the Ordinary with the Magical</h3>
        <p class="text-[#555] leading-relaxed mb-3">
          Believability matters. Most names combine grounded first names with enchanting surnames.
        </p>
        <ul class="list-disc pl-5 text-[#555] space-y-1">
          <li><strong>Lily Evans</strong> – Completely normal</li>
          <li><strong>Newton Scamander</strong> – Real + magical</li>
          <li><strong>Artemis Goldhawk</strong>, <strong>Callum Nightroot</strong> – Perfect balance</li>
        </ul>
      </div>
    </div>

    <div class="text-center mt-12">
      <h3 class="text-xl font-semibold text-[#222] mb-3">Say It Out Loud</h3>
      <p class="text-[#555] leading-relaxed max-w-3xl mx-auto">
        When you find a name, speak it. If it sounds like it belongs at Hogwarts, in Diagon Alley, or at the Ministry of Magic—you’ve found the right one.
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
            <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5} />
            <Footer />
        </motion.div>
    );
};

export default HarryPotterNameGenerator;

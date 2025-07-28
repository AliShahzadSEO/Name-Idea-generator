"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    {
    "name": "Harry Potter",
    "detail": "The Boy Who Lived",
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Ron Weasley",
    "detail": "Harry\u2019s loyal friend",
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Neville Longbottom",
    "detail": "Herbology expert, killed Nagini",
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "James Potter",
    "detail": "Harry\u2019s father, Marauder",
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Sirius Black",
    "detail": "Harry\u2019s godfather, Animagus",
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Remus Lupin",
    "detail": "Werewolf and Defense Against the Dark Arts professor",
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Percy Weasley",
    "detail": "Ministry official and Ron\u2019s brother",
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Hermione Granger",
    "detail": "Brightest witch of her age",
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Ginny Weasley",
    "detail": "Ron's sister, strong duelist",
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Lily Potter",
    "detail": "Harry\u2019s mother, sacrificed herself",
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Minerva McGonagall",
    "detail": "Head of Gryffindor House",
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Angelina Johnson",
    "detail": "Quidditch captain",
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Alicia Spinnet",
    "detail": "Quidditch chaser",
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Crookshanks",
    "detail": "Hermione\u2019s magical cat",
    "gender": "neutral",
    "type": "creature",
    "house": "Gryffindor"
  },
  {
    "name": "Buckbeak",
    "detail": "Hippogriff saved by Harry and Hermione",
    "gender": "neutral",
    "type": "creature",
    "house": "Gryffindor"
  },
  {
    "name": "Fawkes",
    "detail": "Dumbledore\u2019s phoenix",
    "gender": "neutral",
    "type": "creature",
    "house": "Gryffindor"
  },
  {
    "name": "Expelliarmus",
    "detail": "Disarming spell often used by Harry",
    "gender": "neutral",
    "type": "spell",
    "house": "Gryffindor"
  },
  {
    "name": "Expecto Patronum",
    "detail": "Used by Harry to repel Dementors",
    "gender": "neutral",
    "type": "spell",
    "house": "Gryffindor"
  },
  {
    "name": "Petrificus Totalus",
    "detail": "Body-Bind curse Hermione used",
    "gender": "neutral",
    "type": "spell",
    "house": "Gryffindor"
  },
  {
    "name": "Polyjuice Potion",
    "detail": "Used by trio multiple times",
    "gender": "neutral",
    "type": "potion",
    "house": "Gryffindor"
  },
  {
    "name": "Felix Felicis",
    "detail": "Liquid Luck consumed by Harry",
    "gender": "neutral",
    "type": "potion",
    "house": "Gryffindor"
  },
  {
    "name": "Amortentia",
    "detail": "Love potion studied by Gryffindors",
    "gender": "neutral",
    "type": "potion",
    "house": "Gryffindor"
  },
  {
    "name": "The Sword of Gryffindor",
    "detail": "Magical goblin-made sword",
    "gender": "neutral",
    "type": "object",
    "house": "Gryffindor"
  },
  {
    "name": "Marauder\u2019s Map",
    "detail": "Created by Gryffindor Marauders",
    "gender": "neutral",
    "type": "object",
    "house": "Gryffindor"
  },
  {
    "name": "Time-Turner",
    "detail": "Hermione used to attend extra classes",
    "gender": "neutral",
    "type": "object",
    "house": "Gryffindor"
  },
  {
    "name": "Colin Creevey",
    "detail": "A Muggle-born Gryffindor student known for his admiration of Harry Potter.",
    "status": false,
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Dennis Creevey",
    "detail": "Colin's younger brother who also joined Gryffindor.",
    "status": false,
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Cormac McLaggen",
    "detail": "A brash and self-confident Gryffindor student and Quidditch player.",
    "status": false,
    "gender": "male",
    "type": "wizard",
    "house": "Gryffindor"
  },
  {
    "name": "Katie Bell",
    "detail": "A chaser on the Gryffindor Quidditch team.",
    "status": false,
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Angelina Johnson",
    "detail": "A skilled Quidditch player and later team captain.",
    "status": false,
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Alicia Spinnet",
    "detail": "One of the chasers on the Gryffindor Quidditch team.",
    "status": false,
    "gender": "female",
    "type": "witch",
    "house": "Gryffindor"
  },
  {
    "name": "Buckbeak",
    "detail": "A hippogriff saved by Harry and Hermione.",
    "status": false,
    "gender": "neutral",
    "type": "creature",
    "house": "Gryffindor"
  },
  {
    "name": "Fawkes",
    "detail": "Dumbledore\u2019s loyal phoenix, symbolic of bravery.",
    "status": false,
    "gender": "neutral",
    "type": "creature",
    "house": "Gryffindor"
  },
  {
    "name": "Expelliarmus",
    "detail": "The Disarming Charm often used by Harry Potter.",
    "status": false,
    "gender": "neutral",
    "type": "spell",
    "house": "Gryffindor"
  },
  {
    "name": "Expecto Patronum",
    "detail": "A defensive charm against Dementors.",
    "status": false,
    "gender": "neutral",
    "type": "spell",
    "house": "Gryffindor"
  },
  {
    "name": "Polyjuice Potion",
    "detail": "Used by Harry, Ron, and Hermione to transform into others.",
    "status": false,
    "gender": "neutral",
    "type": "potion",
    "house": "Gryffindor"
  },
  {
    "name": "Felix Felicis",
    "detail": "Liquid Luck, used by Harry to improve chances.",
    "status": false,
    "gender": "neutral",
    "type": "potion",
    "house": "Gryffindor"
  },
  {
    "name": "Gryffindor Sword",
    "detail": "The goblin-made sword that appears to worthy Gryffindors.",
    "status": false,
    "gender": "neutral",
    "type": "object",
    "house": "Gryffindor"
  },
  {
    "name": "The Marauder's Map",
    "detail": "A magical map created by four Gryffindors, showing everyone at Hogwarts.",
    "status": false,
    "gender": "neutral",
    "type": "object",
    "house": "Gryffindor"
  },
  {
        "name": "Severus Snape",
        "detail": "Potions Master and Head of Slytherin House",
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Tom Riddle",
        "detail": "Bright Slytherin student who became Lord Voldemort",
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Draco Malfoy",
        "detail": "Pure-blood wizard and Harry's school rival",
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Horace Slughorn",
        "detail": "Charismatic Potions Master of Slytherin",
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Bellatrix Lestrange",
        "detail": "Fierce Death Eater loyal to Voldemort",
        "gender": "female",
        "type": "witch",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Narcissa Malfoy",
        "detail": "Protective mother and supporter of pure-blood values",
        "gender": "female",
        "type": "witch",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Andromeda Black",
        "detail": "Originally a Slytherin, later aligned with the Order",
        "gender": "female",
        "type": "witch",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Regulus Black",
        "detail": "Death Eater who turned against Voldemort",
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Salazar Slytherin",
        "detail": "Founder of Slytherin House",
        "gender": "male",
        "type": "wizard",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "The Basilisk",
        "detail": "Giant serpent hidden in the Chamber of Secrets",
        "gender": "neutral",
        "type": "creature",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Nagini",
        "detail": "Voldemort\u2019s snake and a Maledictus",
        "gender": "female",
        "type": "creature",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Serpensortia",
        "detail": "Conjures a snake to attack",
        "gender": "neutral",
        "type": "spell",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Sectumsempra",
        "detail": "Dark curse invented by Snape",
        "gender": "neutral",
        "type": "spell",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Avada Kedavra",
        "detail": "The Killing Curse, used by Dark Wizards",
        "gender": "neutral",
        "type": "spell",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Polyjuice Potion",
        "detail": "Allows user to take the form of another",
        "gender": "neutral",
        "type": "potion",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Veritaserum",
        "detail": "Truth serum used to extract information",
        "gender": "neutral",
        "type": "potion",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Amortentia",
        "detail": "Powerful love potion with a distinctive smell",
        "gender": "neutral",
        "type": "potion",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Locket of Slytherin",
        "detail": "Dark magical object and Horcrux",
        "gender": "neutral",
        "type": "object",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Vanishing Cabinet",
        "detail": "Teleportation device used in the Battle of Hogwarts",
        "gender": "neutral",
        "type": "object",
        "house": "Slytherin",
        "status": false
    },
    {
        "name": "Diadem of Ravenclaw",
        "detail": "Horcrux hidden by Voldemort",
        "gender": "neutral",
        "type": "object",
        "house": "Slytherin",
        "status": false
    },
        {
        "name": "Luna Lovegood",
        "detail": "Eccentric and insightful student known for her belief in magical creatures.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Cho Chang",
        "detail": "Seeker for the Ravenclaw Quidditch team and Harry\u2019s brief love interest.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Filius Flitwick",
        "detail": "Charms Master and Head of Ravenclaw House at Hogwarts.",
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Garrick Ollivander",
        "detail": "Renowned wandmaker known for his deep understanding of wandlore.",
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Moaning Myrtle",
        "detail": "Ghost of a former Ravenclaw student who haunts the girls\u2019 bathroom.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "The Grey Lady",
        "detail": "Ghost of Helena Ravenclaw, daughter of house founder Rowena Ravenclaw.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Rowena Ravenclaw",
        "detail": "Founder of Ravenclaw House, known for her wisdom and learning.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Ravenclaw Diadem",
        "detail": "A magical object that enhances wisdom, later turned into a Horcrux.",
        "gender": "neutral",
        "type": "object",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Eagle Patronus",
        "detail": "The house mascot symbolising intelligence and sharp vision.",
        "gender": "neutral",
        "type": "creature",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Wit-Sharpening Potion",
        "detail": "Potion used to improve mental acuity and concentration.",
        "gender": "neutral",
        "type": "potion",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Spectrespecs",
        "detail": "Colorful magical glasses that reveal Wrackspurts, worn by Luna Lovegood.",
        "gender": "neutral",
        "type": "object",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Wrackspurt",
        "detail": "Invisible creatures that cause one's thoughts to go fuzzy, according to Luna.",
        "gender": "neutral",
        "type": "creature",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Rictusempra",
        "detail": "The tickling spell used in dueling to disarm an opponent with laughter.",
        "gender": "neutral",
        "type": "spell",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Arithmancy Scroll",
        "detail": "Magical object containing powerful number-based magic equations.",
        "gender": "neutral",
        "type": "object",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Pandora Lovegood",
        "detail": "Luna Lovegood\u2019s mother, a skilled experimental witch with a curious mind.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Millicent Bagnold",
        "detail": "Former Minister for Magic known for upholding wizard rights during Voldemort\u2019s fall.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Ignatia Wildsmith",
        "detail": "Inventor of Floo Powder and celebrated Ravenclaw alumna.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Perpetua Fancourt",
        "detail": "Magical inventor known for creating the lunascope.",
        "gender": "female",
        "type": "witch",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Lorcan Scamander",
        "detail": "Son of Luna Lovegood, named after a Celtic hero.",
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Lysander Scamander",
        "detail": "Twin brother of Lorcan and future magizoologist.",
        "gender": "male",
        "type": "wizard",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Troll\u2019s Wit Tonic",
        "detail": "Rare potion believed to boost short-term intelligence drastically.",
        "gender": "neutral",
        "type": "potion",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Featherlight Scroll Case",
        "detail": "A magical scroll container that floats and self-organizes its contents.",
        "gender": "neutral",
        "type": "object",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Keenfang Owl",
        "detail": "Rare magical owl species used by Ravenclaw scholars to deliver encrypted scrolls.",
        "gender": "neutral",
        "type": "creature",
        "house": "Ravenclaw",
        "status": false
    },
    {
        "name": "Mentis Lucida",
        "detail": "A complex memory-enhancement charm used during difficult exams.",
        "gender": "neutral",
        "type": "spell",
        "house": "Ravenclaw",
        "status": false
    },
        {
        "name": "Cedric Diggory",
        "detail": "Champion of Hufflepuff and Triwizard Tournament competitor",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Nymphadora Tonks",
        "detail": "Metamorphmagus and member of the Order of the Phoenix",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Pomona Sprout",
        "detail": "Head of Hufflepuff House and Herbology professor",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Helga Hufflepuff",
        "detail": "Founder of Hufflepuff House, known for her inclusive nature",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Fat Friar",
        "detail": "House ghost of Hufflepuff, known for his kindness",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Mandrake",
        "detail": "A magical plant used in restorative potions, taught in Herbology",
        "gender": "neutral",
        "type": "creature",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Herbology Kit",
        "detail": "Set of tools used by Hufflepuff students in Herbology class",
        "gender": "neutral",
        "type": "object",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Cup of Hufflepuff",
        "detail": "A magical artifact once owned by Helga Hufflepuff, later a Horcrux",
        "gender": "neutral",
        "type": "object",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Wiggentree Bark Elixir",
        "detail": "Potion used for skin healing, favoured in Herbology studies",
        "gender": "neutral",
        "type": "potion",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Puffapod Explosion",
        "detail": "Spell or action causing Puffapod plants to bloom instantly",
        "gender": "neutral",
        "type": "spell",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Zacharias Smith",
        "detail": "Hufflepuff student and member of Dumbledore's Army",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Hannah Abbott",
        "detail": "Hufflepuff student who later became landlady of the Leaky Cauldron",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Ernie Macmillan",
        "detail": "Proud Hufflepuff and member of Dumbledore\u2019s Army",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Susan Bones",
        "detail": "Niece of Amelia Bones and member of Dumbledore\u2019s Army",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Leanne",
        "detail": "Friend of Katie Bell, attended Hogwarts in Hufflepuff",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Beatrix Dunn",
        "detail": "Fictional Hufflepuff used in Hogwarts fan lore",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Sprout's Rootbinder",
        "detail": "Special enchanted tool for tending magical plants in greenhouses",
        "gender": "neutral",
        "type": "object",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Flora Herbana",
        "detail": "Potion of resilience derived from Hufflepuff botanical magic",
        "gender": "neutral",
        "type": "potion",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Verdimoss Charm",
        "detail": "A charm causing plants to grow rapidly under warm light",
        "gender": "neutral",
        "type": "spell",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Niffler",
        "detail": "Magical creature known for seeking shiny treasures",
        "gender": "neutral",
        "type": "creature",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Teddy Lupin",
        "detail": "Metamorphmagus and honorary Hufflepuff, raised by Andromeda Tonks",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Megan Jones",
        "detail": "Hufflepuff student and participant in DA meetings",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Eleanor Branstone",
        "detail": "Hufflepuff student at Hogwarts in Harry\u2019s era",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Justin Finch-Fletchley",
        "detail": "Muggle-born Hufflepuff petrified during the Chamber of Secrets incident",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Wayne Hopkins",
        "detail": "Hufflepuff student sorted in Harry Potter's year",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Cadwallader",
        "detail": "Played Quidditch for Hufflepuff house team",
        "gender": "male",
        "type": "wizard",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Jade Farrow",
        "detail": "Magical plant expert known for cultivating Whispering Vines",
        "gender": "female",
        "type": "witch",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Herbliss Infusion",
        "detail": "A calming potion using rare Hufflepuff-grown herbs",
        "gender": "neutral",
        "type": "potion",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Rootkindle Wand",
        "detail": "A wand designed specifically for herbological enchantments",
        "gender": "neutral",
        "type": "object",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Badgerclaw Tonic",
        "detail": "Potion known for boosting resilience in duels",
        "gender": "neutral",
        "type": "potion",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Sunbloom Spell",
        "detail": "Spell used to accelerate plant flowering under sunlight",
        "gender": "neutral",
        "type": "spell",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Burrow Bane",
        "detail": "Hufflepuff charm used to ward off gnomes from gardens",
        "gender": "neutral",
        "type": "spell",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Amberlight Amulet",
        "detail": "Magical charm believed to enhance concentration and calmness",
        "gender": "neutral",
        "type": "object",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Tofflesnout",
        "detail": "Small magical creature that forages in underground herb fields",
        "gender": "neutral",
        "type": "creature",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Patchwort",
        "detail": "Hufflepuff-grown healing herb used in minor salves",
        "gender": "neutral",
        "type": "object",
        "house": "Hufflepuff",
        "status": false
    },
    {
        "name": "Bramblegeist",
        "detail": "Magical creature that guards sacred garden beds in Hufflepuff lore",
        "gender": "neutral",
        "type": "creature",
        "house": "Hufflepuff",
        "status": false
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
        <a href="/harry-potter-name-generator" className="hover:underline text-[#343a40]">Harry Potter Name Generator</a>
      </li>
    </ol>
  </nav>

  {/* Title */}
  <div>
    <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
      Random Harry Potter Name Generator With Meaning
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
                            <option value="neutral">Neutral</option>
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
        <option value="Gryffindor">Gryffindor House</option>
        <option value="Slytherin">Slytherin House</option>
        <option value="Ravenclaw">Ravenclaw House</option>
        <option value="Hufflepuff">Hufflepuff House</option>
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

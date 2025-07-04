"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Azazel", detail: "Fallen angel often associated with the wilderness.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Arcturus", detail: "Name associated with a bright star and celestial themes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Balthazar", detail: "One of the Magi who visited Jesus after his birth.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Gabrielus", detail: "Variant of Gabriel, an archangel known for delivering messages.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Dionysus", detail: "Greek god of wine and revelry, sometimes associated with mythological figures.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Luciferus", detail: "Variant of Lucifer, known as the fallen angel.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Orpheus", detail: "Mythological figure known for his musical talents and descent to the underworld.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Zenon", detail: "Name associated with philosophical and celestial themes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Asterion", detail: "Name associated with stars and celestial beings.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Phosphorus", detail: "Name associated with the morning star and light.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Valerian", detail: "Name associated with strength and ancient medicinal themes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Achilles", detail: "Hero of Greek mythology known for his role in the Trojan War.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Timon", detail: "Character from Greek mythology and plays, known for his bitterness.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Maximus", detail: "Name meaning 'greatest,' often associated with strength and power.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Helios", detail: "Greek god of the sun, associated with light and celestial themes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Aetherius", detail: "Name related to the ethereal and celestial realms.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Zorion", detail: "Name associated with happiness and celestial themes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Hyacinthus", detail: "Mythological figure associated with flowers and beauty.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Jupiter", detail: "Roman god associated with the sky and thunder.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Caspar", detail: "One of the Magi who visited Jesus after his birth.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Oberon", detail: "King of the fairies in Shakespeare's 'A Midsummer Night's Dream.'", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Vortigern", detail: "Historical figure known for his role in early British history.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Eris", detail: "Goddess of discord and strife in Greek mythology.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Radagast", detail: "Wizard character from Tolkien's Middle-earth.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Jareth", detail: "Character from the film 'Labyrinth,' associated with fantasy themes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Thorne", detail: "Name associated with strength and protection.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Endymion", detail: "Mythological figure loved by the moon goddess Selene.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Nero", detail: "Roman Emperor known for his controversial reign.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Alaric", detail: "Name associated with historical figures and leadership.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Griffin", detail: "Mythical creature with the body of a lion and the head of an eagle.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Daemon", detail: "Name associated with spirits and supernatural beings.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Bacchus", detail: "Roman god of wine and revelry.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Lynx", detail: "Name associated with the mystical and enigmatic lynx creature.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Zephyrion", detail: "Name related to the west wind and gentle breezes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Astron", detail: "Name associated with stars and celestial bodies.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Eldric", detail: "Name associated with wisdom and leadership.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Mithras", detail: "Name associated with the ancient deity of light and truth.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Nimrod", detail: "Biblical figure known for his role as a mighty hunter.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Nereus", detail: "Ancient Greek sea god known for his prophetic abilities.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Phoenix", detail: "Mythical bird that regenerates or is otherwise born again.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Cassius", detail: "Historical figure and Roman general known for his role in the assassination of Julius Caesar.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Lysander", detail: "Spartan general known for his role in the Peloponnesian War.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Ragnar", detail: "Legendary Norse hero and king known for his exploits.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Perseus", detail: "Hero in Greek mythology known for slaying Medusa.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Azurael", detail: "Name associated with celestial and angelic themes.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Gaius", detail: "Roman name associated with various historical figures.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Orionis", detail: "Name associated with the constellation Orion.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Titus", detail: "Roman emperor known for his role in the Flavian dynasty.", status: false, gender: "male", type: "mythical_angel_name" },
    { name: "Seraphia", detail: "Name associated with the seraphim, the highest order of angels.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Eudora", detail: "Name meaning 'good gift,' often associated with divine favor.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Iris", detail: "Goddess of the rainbow and messenger of the gods in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Lysandra", detail: "Name associated with light and divine themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Celestia", detail: "Name meaning 'heavenly,' associated with celestial beings.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Selene", detail: "Goddess of the moon in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Antheia", detail: "Name associated with flowers and the goddess of blossoms.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Hespera", detail: "Name associated with the evening star and celestial themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Callista", detail: "Name meaning 'most beautiful,' associated with divine beauty.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Cassandra", detail: "Mythological figure known for her gift of prophecy.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Psyche", detail: "Name associated with the soul and divine love in mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Aurora", detail: "Goddess of the dawn in Roman mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Meliora", detail: "Name meaning 'better,' associated with improvement and virtue.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Artemisia", detail: "Name associated with the goddess Artemis and divine themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Hecate", detail: "Goddess of magic and witchcraft in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Elaria", detail: "Name associated with light and celestial themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Nerissa", detail: "Name associated with sea nymphs and mystical themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Galadriel", detail: "Elven queen from Tolkien's Middle-earth, associated with beauty and power.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Ariadne", detail: "Mythological figure associated with the labyrinth and divine aid.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Clio", detail: "Muse of history in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Eos", detail: "Goddess of the dawn in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Cybele", detail: "Ancient goddess associated with fertility and nature.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Asteria", detail: "Name meaning 'starry,' associated with celestial themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Zenobia", detail: "Historical queen known for her reign in Palmyra.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Lyra", detail: "Name associated with the lyre and musical themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Elara", detail: "Name associated with one of Jupiter's moons and celestial themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Nyx", detail: "Goddess of the night in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Elowen", detail: "Name associated with the elven and nature themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Thalassa", detail: "Name meaning 'sea,' associated with marine and celestial themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Elysia", detail: "Name associated with Elysium, the afterlife paradise.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Amara", detail: "Name meaning 'eternal,' associated with divine qualities.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Persephone", detail: "Goddess of the underworld and spring in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Nyssa", detail: "Name meaning 'beginning' or 'new,' associated with new beginnings.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Eudora", detail: "Name meaning 'good gift,' often associated with divine favor.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Daphne", detail: "Nymph associated with trees and the transformation into laurel.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Melisande", detail: "Name associated with mythical and medieval themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Calista", detail: "Name meaning 'most beautiful,' associated with divine beauty.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Hera", detail: "Queen of the gods in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Sabrina", detail: "Name associated with mythological and historical figures.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Dione", detail: "Titaness associated with the goddess Aphrodite.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Cassiopeia", detail: "Name associated with the queen in Greek mythology and a constellation.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Aurelia", detail: "Name meaning 'golden,' associated with divine and celestial themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Celestine", detail: "Name meaning 'heavenly,' associated with celestial beings.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Iphigenia", detail: "Name associated with Greek mythology and the sacrifice of Iphigenia.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Theodora", detail: "Name meaning 'gift of God,' associated with historical saints and figures.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Pandora", detail: "Name associated with the myth of Pandora's box.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Ianthe", detail: "Name meaning 'purple flower,' associated with beauty and nature.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Selena", detail: "Variant of Selene, goddess of the moon in Greek mythology.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Amaris", detail: "Name meaning 'child of the moon,' associated with celestial themes.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Seraphie", detail: "Variant of Seraphia, related to the highest order of angels.", status: false, gender: "female", type: "mythical_angel_name" },
    { name: "Gabriel", detail: "Archangel known as the messenger of God.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Michael", detail: "Archangel and leader of the heavenly armies.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Raphael", detail: "Archangel associated with healing.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Uriel", detail: "Archangel of wisdom and enlightenment.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Azrael", detail: "Angel of death and transition.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Jophiel", detail: "Angel of beauty and wisdom.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Zadkiel", detail: "Angel of mercy and compassion.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Chamuel", detail: "Angel of love and relationships.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Raguel", detail: "Angel of justice and harmony.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Remiel", detail: "Angel of hope and divine visions.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Metatron", detail: "Angel of life and record keeper.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Cassiel", detail: "Angel of solitude and tears.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Selaphiel", detail: "Angel of prayer and worship.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Barachiel", detail: "Angel of blessings and abundance.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Jehoel", detail: "Angel of presence and sanctification.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Samael", detail: "Angel of severity and divine justice.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Ariel", detail: "Angel of nature and animals.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Haniel", detail: "Angel of joy and grace.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Nathanael", detail: "Angel of fire and divine gifts.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Phanuel", detail: "Angel of penance and repentance.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Ezekiel", detail: "Prophet and visionary in the Bible.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Kamael", detail: "Angel of strength and courage.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Sandalphon", detail: "Angel of music and prayers.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Balthazar", detail: "One of the Magi, traditionally considered to be a king.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Jehovah", detail: "A name for God in Hebrew traditions.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Azazel", detail: "Fallen angel associated with rebellion.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Ithuriel", detail: "Angel known for discovering evil.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Camael", detail: "Angel of divine love and justice.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Jezebeth", detail: "Demoness of falsehoods and lies.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Aniel", detail: "Angel of virtue and courage.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Zophiel", detail: "Angel of knowledge and wisdom.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Raziel", detail: "Angel of mysteries and secrets.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Uzziel", detail: "Angel of faith and prayer.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Barakiel", detail: "Angel of blessings and prosperity.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Jabriel", detail: "Variant of Gabriel, meaning 'God is my strength.'", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Abaddon", detail: "Angel of destruction and the abyss.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Gadiel", detail: "Angel of wealth and good fortune.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Neri", detail: "Angel of light and brightness.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Hagiel", detail: "Angel of Venus and divine love.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Ramiel", detail: "Angel of thunder and divine visions.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Hariel", detail: "Angel of science and knowledge.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Zachariah", detail: "Prophet and father of John the Baptist.", status: false, gender: "male", type: "traditional_angel_name" },
    { name: "Seraphina", detail: "Female name derived from the seraphim, highest order of angels.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Gabrielle", detail: "Female variant of Gabriel, meaning 'God is my strength.'", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Michaela", detail: "Female variant of Michael, meaning 'Who is like God?'", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Raphaela", detail: "Female variant of Raphael, associated with healing.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Uriela", detail: "Female variant of Uriel, meaning 'God is my light.'", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Azraela", detail: "Female variant of Azrael, associated with death and transition.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Jophiela", detail: "Female variant of Jophiel, associated with beauty and wisdom.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Zadkiela", detail: "Female variant of Zadkiel, associated with mercy and compassion.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Chamuel", detail: "Female name for the angel of love and relationships.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Raguela", detail: "Female variant of Raguel, associated with justice and harmony.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Remiela", detail: "Female variant of Remiel, associated with hope and visions.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Metatrona", detail: "Female variant of Metatron, the scribe of heaven.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Cassiela", detail: "Female variant of Cassiel, associated with solitude.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Selaphiela", detail: "Female variant of Selaphiel, associated with prayer.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Barachiela", detail: "Female variant of Barachiel, associated with blessings.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Jehoela", detail: "Female variant of Jehoel, associated with sanctification.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Samaela", detail: "Female variant of Samael, associated with severity.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Ariela", detail: "Female variant of Ariel, associated with nature.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Haniela", detail: "Female variant of Haniel, associated with joy.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Nathanaela", detail: "Female variant of Nathanael, associated with divine gifts.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Phanuela", detail: "Female variant of Phanuel, associated with penance.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Ezekiela", detail: "Female variant of Ezekiel, meaning 'God strengthens.'", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Kamaela", detail: "Female variant of Kamael, associated with strength.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Sandalphona", detail: "Female variant of Sandalphon, associated with music.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Balthazara", detail: "Female variant of Balthazar, associated with the Magi.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Lucia", detail: "Female name meaning 'light,' associated with divine radiance.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Azazela", detail: "Female variant of Azazel, associated with rebellion.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Ithuriela", detail: "Female variant of Ithuriel, known for discovering evil.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Camila", detail: "Female name meaning 'attendant' or 'helper.'", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Jezebeth", detail: "Female name associated with falsehoods and lies.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Aniela", detail: "Female name meaning 'angel' in Polish.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Zophiela", detail: "Female variant of Zophiel, associated with wisdom.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Raziela", detail: "Female variant of Raziel, associated with mysteries.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Uzziela", detail: "Female variant of Uzziel, associated with faith.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Barakiela", detail: "Female variant of Barakiel, associated with prosperity.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Jabriella", detail: "Female variant of Jabriel, meaning 'God is my strength.'", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Abaddona", detail: "Female variant of Abaddon, associated with destruction.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Gadiela", detail: "Female variant of Gadiel, associated with wealth.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Nerissa", detail: "Female name meaning 'sea nymph,' associated with purity.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Hagiela", detail: "Female variant of Hagiel, associated with love.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Ramiela", detail: "Female variant of Ramiel, associated with divine visions.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Metatrona", detail: "Female variant of Metatron, associated with divine records.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Zacharia", detail: "Female variant of Zachariah, associated with prophecy.", status: false, gender: "female", type: "traditional_angel_name" },
    { name: "Celestian", detail: "Name associated with celestial realms.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Seraphim", detail: "Name related to the highest order of angels.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Solon", detail: "Name meaning 'wise,' associated with divine wisdom.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Ephraim", detail: "Name meaning 'fruitful,' often associated with divine favor.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Azurael", detail: "Name associated with celestial blue light.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Orion", detail: "Name inspired by the constellation, symbolizing strength.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Luminor", detail: "Name meaning 'light,' associated with celestial brightness.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Solomon", detail: "Name meaning 'peaceful,' often associated with wisdom.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Elion", detail: "Name meaning 'most high,' associated with divine elevation.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Astrion", detail: "Name related to celestial bodies and stars.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Radiant", detail: "Name meaning 'shining brightly,' symbolizing divine light.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Vesper", detail: "Name meaning 'evening star,' associated with twilight and serenity.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Auriel", detail: "Name meaning 'golden,' symbolizing divine light and purity.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Liora", detail: "Name meaning 'light,' symbolizing illumination and clarity.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Zenon", detail: "Name meaning 'divine,' associated with celestial strength.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Celestiel", detail: "Name meaning 'heavenly,' related to celestial realms.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Zephyr", detail: "Name meaning 'west wind,' associated with gentle breezes and peace.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Galaxion", detail: "Name related to galaxies, symbolizing cosmic vastness.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Neriel", detail: "Name meaning 'light of God,' associated with divine illumination.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Seraphel", detail: "Name related to seraphim, symbolizing divine fire and purity.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Dorian", detail: "Name meaning 'gift,' associated with divine blessings.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Luxor", detail: "Name meaning 'light,' symbolizing divine radiance.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Aether", detail: "Name associated with the pure essence of the celestial realms.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Radiantus", detail: "Name meaning 'bright and shining,' symbolizing celestial glory.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Elyon", detail: "Name meaning 'most high,' associated with supreme divinity.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Adriel", detail: "Name meaning 'follower of God,' symbolizing divine protection.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Seren", detail: "Name meaning 'star,' associated with celestial beauty.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Celestus", detail: "Name meaning 'heavenly,' related to celestial realms.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Helios", detail: "Name associated with the sun, symbolizing light and energy.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Taranis", detail: "Name meaning 'thunder,' associated with divine power.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Cygnus", detail: "Name related to the constellation Cygnus, symbolizing grace.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Icarus", detail: "Name inspired by Greek mythology, symbolizing ambition.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Altair", detail: "Name associated with the star Altair, symbolizing light.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Oriel", detail: "Name meaning 'golden light,' symbolizing celestial brilliance.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Arion", detail: "Name meaning 'musical,' associated with divine harmony.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Castor", detail: "Name related to the constellation Castor, symbolizing duality.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Vesperus", detail: "Name meaning 'evening star,' symbolizing calm and peace.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Orionis", detail: "Name related to the constellation Orion, symbolizing strength.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Xerxes", detail: "Name meaning 'ruler,' associated with divine authority.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Thane", detail: "Name meaning 'warrior,' associated with celestial protection.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Zarek", detail: "Name meaning 'God protects,' associated with divine guardianship.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Rhydian", detail: "Name meaning 'raging,' associated with divine power.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Aurelian", detail: "Name meaning 'golden,' symbolizing divine glory.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Elor", detail: "Name meaning 'light,' associated with celestial illumination.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Sirius", detail: "Name associated with the star Sirius, symbolizing brightness.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Valerian", detail: "Name meaning 'strength,' associated with celestial fortitude.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Eldric", detail: "Name meaning 'old ruler,' symbolizing wisdom and authority.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Vortan", detail: "Name meaning 'powerful,' associated with divine strength.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Zalvian", detail: "Name meaning 'celestial,' associated with divine realms.", status: false, gender: "male", type: "celestial_angel_name" },
      { name: "Zephyros", detail: "Name meaning 'west wind,' symbolizing gentle breezes and peace.", status: false, gender: "male", type: "celestial_angel_name" },
       { name: "Celestia", detail: "Name meaning 'heavenly,' related to celestial realms.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Seraphina", detail: "Name associated with the seraphim, symbolizing divine fire and purity.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Aurora", detail: "Name meaning 'dawn,' symbolizing new beginnings and light.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Evelina", detail: "Name meaning 'desired,' associated with divine favor.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Azura", detail: "Name meaning 'sky blue,' related to celestial beauty.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Luna", detail: "Name meaning 'moon,' symbolizing calm and tranquility.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Isabella", detail: "Name meaning 'pledged to God,' associated with divine protection.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Aria", detail: "Name meaning 'air,' symbolizing lightness and freedom.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Selene", detail: "Name meaning 'moon,' associated with celestial cycles and beauty.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Astria", detail: "Name related to stars, symbolizing celestial radiance.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Radiance", detail: "Name meaning 'shining brightly,' symbolizing divine light.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Serenity", detail: "Name meaning 'calm,' associated with peace and tranquility.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Elara", detail: "Name associated with one of Jupiter's moons, symbolizing divine presence.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Lyra", detail: "Name related to the constellation Lyra, symbolizing harmony.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Zenith", detail: "Name meaning 'highest point,' symbolizing divine peak.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Celestielle", detail: "Name meaning 'heavenly,' related to celestial realms.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Vespera", detail: "Name meaning 'evening star,' symbolizing serenity and calm.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Galaxia", detail: "Name related to galaxies, symbolizing cosmic beauty.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Nerina", detail: "Name meaning 'sea nymph,' symbolizing purity and grace.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Seraphine", detail: "Name associated with the seraphim, symbolizing divine purity.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Diana", detail: "Name associated with the moon and hunting, symbolizing strength and beauty.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Liora", detail: "Name meaning 'light,' symbolizing divine illumination.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Elysia", detail: "Name meaning 'blissful,' symbolizing divine happiness.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Aurielle", detail: "Name meaning 'golden,' associated with divine brilliance.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Eldora", detail: "Name meaning 'golden,' symbolizing divine wealth and purity.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Mira", detail: "Name meaning 'wonderful,' associated with divine beauty.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Evangeline", detail: "Name meaning 'bringer of good news,' symbolizing divine messages.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Celestine", detail: "Name meaning 'heavenly,' related to celestial realms.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Helia", detail: "Name meaning 'sun,' symbolizing divine light and energy.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Rhiannon", detail: "Name meaning 'great queen,' associated with divine royalty.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Zara", detail: "Name meaning 'princess,' symbolizing celestial nobility.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Nyssa", detail: "Name meaning 'goal,' associated with divine purpose.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Eliana", detail: "Name meaning 'God has answered,' symbolizing divine response.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Althea", detail: "Name meaning 'healer,' associated with divine healing.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Selene", detail: "Name meaning 'moon,' symbolizing lunar beauty and cycles.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Valeria", detail: "Name meaning 'strength,' symbolizing divine fortitude.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Thalassa", detail: "Name meaning 'sea,' symbolizing celestial expansiveness.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Amara", detail: "Name meaning 'eternal,' symbolizing divine eternity.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Astraea", detail: "Name meaning 'star-maiden,' associated with divine justice.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Yara", detail: "Name meaning 'water lady,' associated with divine fluidity.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Seraphie", detail: "Name related to seraphim, symbolizing divine purity and light.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Aurelia", detail: "Name meaning 'golden,' symbolizing divine splendor.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Dione", detail: "Name associated with the goddess of the moon, symbolizing divine beauty.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Celeste", detail: "Name meaning 'heavenly,' related to celestial realms.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Lyris", detail: "Name meaning 'lyre,' symbolizing celestial harmony.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Hera", detail: "Name associated with the goddess of marriage and family, symbolizing divine authority.", status: false, gender: "female", type: "celestial_angel_name" },
      { name: "Calista", detail: "Name meaning 'most beautiful,' symbolizing divine beauty.", status: false, gender: "female", type: "celestial_angel_name" },
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

const AngleNameGenerator = () => {
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

    const bgImage = "/angel.jpg"
    const context = " Angel Name Generator"

    const Q1 = "What does the angel name generator do?"

    const A1 = 'It gives you powerful, graceful, and meaningful names that fit fantasy or divine themes.'
    
    const Q2 = "Can I use these names in my stories or games?"
    
    const A2 = 'Yes, all generated names are free to use in personal and commercial projects.'
    
    const Q3 = "Are the names biblically accurate?"
    
    const A3 = "Some take inspiration from traditional texts, but most are fantasy-styled and unique."
    
    const Q4 = "Is this tool just for writers?"
    
    const A4 = "No. Gamers, parents, artists, and worldbuilders all use it."
    
    const Q5 = "Can I generate as many names as I want?"
    
    const A5 = "Yes. Keep clicking until you find your perfect divine match."

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
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/angel-name-generator" className="hover:underline text-[#343a40]">Angel Name Generator</a>
      </li>
    </ol>
  </nav>

                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                          Random Angel Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Angel Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="mythical_angel_name">Mythical</option>
                            <option value="traditional_angel_name">Traditional</option>
                            <option value="celestial_angel_name">Celestial</option>
                            <option value="historical_greek_name">Historical</option>

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
                          Tap Into Your Divine Side with Just One Click
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        You don’t need wings to sound divine. You just need the right name. Our angel name generator online 
                        helps you find names that shine with grace, power, 
                        In case you’re naming a fantasy character, writing a divine warrior into your story, 
                        or searching for a heavenly baby name idea, our tool has you covered.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        You should try it if you want something that sounds unique, biblical, or mythical. 
                        The names feel like they came from a choir of stars. Some glow with purity. Some carry strength. Each one fits right into a celestial setting.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                      How to Use Our Angel Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    You don’t need a divine revelation to use this. Just follow three simple steps:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 1: Visit the Tool
                            </h3>
                            <p>
                             Go to the angel name generator section on our site. It’s easy to find in our fantasy names category.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 2: Set Your Preferences
                            </h3>
                            <p>
                              Pick your preferred gender or name vibe. Want a gentle-sounding healer? Or a fierce avenging angel? It adjusts based on what you need.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 3: Generate and Choose
                            </h3>
                            <p>
                             Click the generate button. Scroll through the results and select the name that speaks to your soul.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 4: Review Names and Their Meanings
                            </h3>
                            <p>
                             Names will be displayed on your screen. Hover over each to see details like meaning, origin, 
                             and the spiritual significance associated with the name.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="angel1.jpg"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            className="w-[300px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="angel2.avif"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            className="w-[300px] h-[300px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                    Related to Angel Name Generator
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
                    Why You Should Use Our Angel Name Creator Tool?
                    </h2>
                    <p class="sm:text-[16px] text-[18px] font-semibold">
                    You might be wondering why this tool matters. The answer is simple.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold">
                                 Fast, Free, and Full of Ideas
                                </h3>
                                <p>
                                You don’t need hours to brainstorm. You get a divine list of angelic name ideas for fantasy characters instantly. 
                                According to a 2025 content creator survey, over 60% of writers said they waste too much time trying to name characters. We can solve that.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                 Names That Fit Your World
                                </h3>
                                <p>
                                You should know that our generator creates names that match fantasy lore, spiritual texts, and modern writing needs. 
                                Names like "Seraphiel" or "Ariettael" sound fitting for both heavenly stories and roleplay games.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Smooth Interface
                                </h3>
                                <p>
                                You won’t face any tech struggle. It works for writers, gamers, parents, or anyone just curious about celestial names. 
                                Tired of lags, slow downs, and just slow processors? Our tool guarantees instant results.                     
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Professional Quality
                                </h3>
                                <p>
                                Deliver names of high quality that add authenticity and allure to your work. Whether for literature, gaming, or film, 
                                our Angel Name Generator ensures that the names you create resonate with your audience. 
                                Achieve a professional standard that elevates your character and projects.              
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="jejus.webp"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            class="w-[300px] my-[30px] h-[300px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="angel4.webp"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            class="w-[300px] h-[300px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>



<section class="bg-white py-8 px-4">
  <div class="w-[80%] mx-auto my-[30px]">
    <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">What Makes Angelic Names So Special?</h2>
    <p class="text-gray-700 mb-3">
      It’s important to know that most angel names carry deep meaning. Many come from Hebrew or Latin. You often see endings like <span class="italic">-el</span>, which means “of God.”
    </p>
    <p class="text-gray-700 mb-3">
      Names like <span class="font-medium">Raphael</span> (meaning “God heals”) or <span class="font-medium">Zadkiel</span> (“God is my righteousness”) offer instant identity to characters.
    </p>
    <p class="text-gray-700">
      Writers use these names to bring symbolism into their fantasy worlds. A strong name can define a character’s entire purpose.
    </p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="w-[80%] mx-auto my-[30px]">
    <h2 class="text-3xl font-bold text-gray-700 mb-4 text-center">How to Choose the Right Name?</h2>
    <p class="text-gray-700 text-base mb-4 text-center max-w-2xl mx-auto">
      You might want a name that fits a noble archangel or a soft guardian spirit. That’s where the style matters.
    </p>
    <p class="text-gray-700 text-base mb-4 text-center max-w-2xl mx-auto">
      Some names feel light and airy. Others feel ancient and mighty. Consider the tone of your story or role—the right name gives emotional weight before your character even speaks.
    </p>

    <div class="mt-6 bg-white rounded-xl shadow-md p-6">
      <h3 class="text-xl font-semibold text-gray-700 mb-4">You can use this angel name generator for:</h3>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Naming divine warriors in fantasy games
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Creating celestial beings in DnD
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Finding spiritual character names for novels
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Picking heavenly names for stories or worldbuilding
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Building a character name list for baby name ideas
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="bg-white py-10 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">List of Some Unique Angel Names with Meaning</h2>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold text-pink-600 mb-4">👼 Female Angel Names</h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Seraphinael</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Flame of God’s Grace”</p>
          <p class="text-sm text-gray-700">Inspired by the Seraphim, the highest order of angels, blended with elegance.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Lumireth</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Bearer of Divine Light”</p>
          <p class="text-sm text-gray-700">Symbolizes an angel who spreads hope and radiance across realms.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Caeliena</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Heaven’s Song”</p>
          <p class="text-sm text-gray-700">A melodic name for an angel associated with harmony and beauty.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Ezriella</h4>
          <p class="italic text-sm text-pink-700 mb-1">“God’s Helper in Healing”</p>
          <p class="text-sm text-gray-700">Represents a nurturing and protective guardian angel.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Tzaphirael</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Messenger of Hidden Wisdom”</p>
          <p class="text-sm text-gray-700">Ideal for a mystical or secretive angel who guides through dreams.</p>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">😇 Male Angel Names</h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Thaliel</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Shield of God”</p>
          <p class="text-sm text-gray-700">Perfect for a warrior angel who protects the divine realm.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Oraniel</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Light of Judgment”</p>
          <p class="text-sm text-gray-700">Represents clarity, truth, and divine justice.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Zephurion</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Winds of Heaven”</p>
          <p class="text-sm text-gray-700">Inspired by heavenly movement and swiftness—ideal for a fast, agile angel.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Malachor</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Angel of the Burning Word”</p>
          <p class="text-sm text-gray-700">A powerful name for a messenger who delivers truth with force.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Aurevian</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Golden Spirit”</p>
          <p class="text-sm text-gray-700">Carries the essence of purity, glory, and immortality.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-gradient-to-r from-red-50 to-pink-100 py-20 px-4">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-2xl sm:text-3xl font-bold text-red-700 mb-4">👿 Pair a Demon with Your Angel</h2>
    <p class="text-gray-800 text-base sm:text-lg mb-6">
      You might want a name that leans into the other side. For that, try our <span class="font-semibold text-red-600">Demon Name Generator</span>. 
      It’s perfect if you’re building a good-vs-evil fantasy world.
    </p>
    <a href="https://www.nameideagenerator.com/demon-name-generator" class="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-full transition-all duration-300">
     Demon Name Generator
    </a>
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
            <Footer  />
        </motion.div>
    );
};

export default AngleNameGenerator;

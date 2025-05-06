"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Vladislav 'The Impaler' Dracul", detail: "A fearsome vampire known for his brutal reign, feared for his merciless power.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Lucian Ravenscroft", detail: "A vampire of noble descent, feared for his dark elegance and command over the night.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Alistair Nightshade", detail: "A vampire whose name strikes terror, feared for his shadowy influence and cold demeanor.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Dorian Blackwood", detail: "A vampire who controls the woods and the darkness within, feared for his stealth and cunning.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Armand Devereux", detail: "A vampire with an ancient lineage, feared for his dark heritage and unyielding will.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Victor Crosse", detail: "A vampire whose cold gaze freezes souls, feared for his mysterious ways and icy demeanor.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Desmond Von Schatten", detail: "A vampire born in the shadows, feared for his mastery over dark magic and the unknown.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Henrik Kincaid", detail: "A vampire known for his sharp mind and deadly precision, feared for his intelligence and ruthlessness.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Edmund Darkwell", detail: "A vampire with a dark soul, feared for his ability to bend others to his will.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Thaddeus Grimwood", detail: "A vampire whose name evokes dread, feared for his strength and mastery of the night.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Marius DeLacroix", detail: "A vampire of old blood, feared for his timeless power and unbreakable resolve.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Gabriel Nightfall", detail: "A vampire who controls the night, feared for his mysterious presence and unsettling calm.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Maximillian Vane", detail: "A vampire whose ambitions are as deep as the night, feared for his commanding presence.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Julian Blackthorn", detail: "A vampire whose power and cunning make him a force to be reckoned with, feared for his dangerous mind.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Nicholas Fane", detail: "A vampire whose name is whispered in fear, feared for his mastery of both the blood and the mind.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Elias Ravenshade", detail: "A vampire whose shadowed soul casts fear, feared for his enigmatic nature and lethal instincts.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Edmund Grim", detail: "A vampire whose cold heart has earned him many enemies, feared for his merciless ways.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Solomon Thorn", detail: "A vampire whose name is synonymous with pain and suffering, feared for his ability to cause harm.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Vincent Moreau", detail: "A vampire of charm and danger, feared for his manipulative ways and insatiable thirst for power.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Lucien Shadowbrook", detail: "A vampire who hides in the shadows, feared for his ability to strike from the dark.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Samuel Dusk", detail: "A vampire born in the twilight hours, feared for his ability to move unseen and strike swiftly.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Bertrand Nightshade", detail: "A vampire whose very presence brings dread, feared for his mastery over the forces of the dark.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Raphael Montclair", detail: "A vampire with a long history, feared for his control over both the living and the dead.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Gideon Carver", detail: "A vampire whose strength is matched only by his cruelty, feared for his brutal ways.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Constantine Darkmoor", detail: "A vampire of legend, feared for his ancient powers and unrelenting dominance.", status: false, gender: "Male", type: "Traditional Vampire" },
    { name: "Lilith Ravenscroft", detail: "A vampire with a dark and enigmatic presence, feared for her powerful beauty and command over the shadows.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Isolde Nightshade", detail: "A vampire who thrives in the darkness, feared for her icy demeanor and deadly precision.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Elena Vespera", detail: "A vampire whose presence brings fear and seduction, feared for her ability to bend others to her will.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Morgana Graves", detail: "A vampire with a mysterious past, feared for her ability to manipulate both the living and the dead.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Cassandra Blackthorn", detail: "A vampire whose name is whispered in fear, feared for her dark magic and ruthless nature.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Seraphina Duskwood", detail: "A vampire with an aura of melancholy and power, feared for her supernatural strength and cunning mind.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Celeste Devereux", detail: "A vampire with an air of nobility, feared for her refined manners and deadly abilities.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Evelina Darkrose", detail: "A vampire known for her beauty and ruthless heart, feared for her unrelenting desire for power.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Amandine Blackwell", detail: "A vampire who controls the night, feared for her ruthless pursuit of domination.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Verena Shadowbrook", detail: "A vampire whose name is synonymous with the darkness, feared for her deadly elegance and the darkness she commands.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Gabrielle Ravenshade", detail: "A vampire with an unholy beauty, feared for her ability to manipulate the elements of darkness.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Odette Moreau", detail: "A vampire with a cruel charm, feared for her mastery over both magic and fear.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Victoria Vane", detail: "A vampire whose name strikes terror, feared for her iron will and unmatched strength.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Isabelle Nightfall", detail: "A vampire born in the shadows, feared for her ability to control the night and all its creatures.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Arabella Thornfield", detail: "A vampire known for her strength and seductive powers, feared for her ruthlessness in achieving her goals.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Liliana Bloodworth", detail: "A vampire of ancient blood, feared for her ability to manipulate time and death itself.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Rosalie Grimwood", detail: "A vampire who revels in chaos, feared for her ability to break the will of anyone who dares oppose her.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Madeline Duval", detail: "A vampire whose presence is haunting, feared for her ability to control minds and bend them to her desires.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Esmeralda Ravenshade", detail: "A vampire with a reputation for manipulation, feared for her seductive power and dark influence.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Selene Montclair", detail: "A vampire whose power is felt like a cold wind, feared for her unyielding nature and sharp intellect.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Elara Blackmist", detail: "A vampire who moves with deadly grace, feared for her ability to vanish into the shadows and reappear when least expected.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Adelaide Dusk", detail: "A vampire who commands the dusk, feared for her ability to summon the darkness and bend it to her will.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Vivienne Vespera", detail: "A vampire who thrives under the moonlight, feared for her ability to manipulate emotions and thoughts.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Eugenie Blackwood", detail: "A vampire whose name brings terror, feared for her ability to conjure storms and cast curses.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Emilie Larkspur", detail: "A vampire whose beauty hides a cruel heart, feared for her ability to deceive and destroy.", status: false, gender: "Female", type: "Traditional Vampire" },
  { name: "Morgan Blackthorn", detail: "A vampire whose name strikes fear, feared for their ability to manipulate shadows and minds.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Avery Nightshade", detail: "A vampire whose power over darkness makes them a feared figure, able to bend night to their will.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Raven Devereux", detail: "A vampire known for their mysterious aura and the deadly beauty they exude, feared for their control over the night.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Taylor Fane", detail: "A vampire whose presence is both terrifying and captivating, feared for their cunning and ruthless nature.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Phoenix Duskwood", detail: "A vampire who symbolizes rebirth and destruction, feared for their destructive power and resilience.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Blair Shadowbrook", detail: "A vampire who can disappear into the shadows, feared for their stealth and ability to strike unnoticed.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Quinn Grim", detail: "A vampire whose grim reputation precedes them, feared for their mastery over dark magic and death.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Cameron Darkstone", detail: "A vampire whose stoic and cold demeanor hides their terrifying abilities, feared for their ability to control death itself.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Riley Ravenshade", detail: "A vampire born from darkness, feared for their ability to summon the night and command shadows.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Remy Carver", detail: "A vampire known for their ferocity and relentless drive, feared for their ability to carve through any obstacle.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Adrian Blackwell", detail: "A vampire with a regal and menacing presence, feared for their control over both the living and the dead.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Rowan Nightfall", detail: "A vampire whose name is synonymous with the arrival of darkness, feared for their ability to dominate the night.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Skyler Thorn", detail: "A vampire whose presence feels like a cold wind, feared for their ability to turn the environment to their advantage.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Jordan Vane", detail: "A vampire who commands respect, feared for their ability to control the will of others and instill fear.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Elliot Grimwood", detail: "A vampire whose name brings unease, feared for their relentless pursuit of power and dark magic.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Emerson Darkmoon", detail: "A vampire who dwells in the shadows, feared for their ability to manipulate both light and darkness.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Ellis Dusk", detail: "A vampire whose aura is both haunting and powerful, feared for their ability to control the twilight hours.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Rowan Larkspur", detail: "A vampire with an unyielding power, feared for their ability to manipulate both the physical and spiritual realms.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Casey Bloodstone", detail: "A vampire whose name is tied to the legend of their unrelenting thirst for power, feared for their bloodline’s dark history.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Finley DeLacroix", detail: "A vampire of noble descent, feared for their control over both dark magic and the hearts of others.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Darian Blackrose", detail: "A vampire whose beauty hides a cruel heart, feared for their ability to manipulate and control.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Sawyer Moreau", detail: "A vampire known for their ability to move with the wind, feared for their unpredictable nature and unmatched strength.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Morgan Graves", detail: "A vampire with an aura of mystery and death, feared for their ability to control life and death.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Jesse Nightblood", detail: "A vampire whose bloodline is cursed, feared for their unrelenting thirst for power and revenge.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Alex Thornfield", detail: "A vampire whose cunning and charm make them a force to be reckoned with, feared for their ability to deceive and destroy.", status: false, gender: "Unisex", type: "Traditional Vampire" },
  { name: "Severus Blackthorn", detail: "A gothic vampire known for his cold demeanor and mastery over the dark arts, feared for his ability to manipulate shadows.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Gideon Darkheart", detail: "A vampire whose heart is as dark as the night, feared for his ruthless nature and control over death.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Mortimer Graves", detail: "A vampire with a chilling presence, known for his control over graveyards and the souls that haunt them.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Lucian Ashcroft", detail: "A vampire of noble descent, feared for his cold, calculating mind and ability to summon the spirits of the dead.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Tobias Nightshade", detail: "A vampire who thrives in the darkness, feared for his ability to turn the tide of battles with his dark magic.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Xavier Bloodmourne", detail: "A vampire whose bloodline is cursed, known for his terrifying power and thirst for vengeance.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Leandro Ravenscroft", detail: "A vampire whose name is tied to the ancient, raven-winged shadows of the night, feared for his ability to manipulate fate.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Benedict Duskwood", detail: "A vampire whose power grows with the setting sun, feared for his command over the dark forests and creatures within.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Alaric Vane", detail: "A vampire of mysterious origin, known for his haunting gaze and ability to control the minds of others.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Nikolai Deathshadow", detail: "A vampire who can cloak himself in shadows, feared for his ability to bend time and reality to his will.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Tristan Thornfield", detail: "A vampire whose presence chills the air, feared for his unyielding thirst for knowledge and dark power.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Valerian Blackwell", detail: "A vampire whose black magic is as strong as his lineage, feared for his ability to summon the darkest creatures.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Augustus Crowe", detail: "A vampire with a tragic past, known for his ability to control the night and bend it to his dark will.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Ezekiel Ravencroft", detail: "A vampire whose name strikes terror in the hearts of those who hear it, feared for his control over death and the afterlife.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Damian Shadowborn", detail: "A vampire born from the darkest shadows, feared for his ability to manipulate the living and the dead alike.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Thorne Ravenshade", detail: "A vampire whose connection to the shadows is unparalleled, feared for his ability to command dark forces.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Emory Darkwell", detail: "A vampire whose name is whispered in fear, known for his powerful control over both the living and the dead.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Remus Lichthorn", detail: "A vampire who has transcended death, feared for his unholy powers and mastery over necromancy.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Isidore Nightshade", detail: "A vampire whose aura is as cold as the midnight sky, feared for his influence over the darkest elements of magic.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Vesper Thorn", detail: "A vampire whose presence is as haunting as a thousand dark nights, feared for his ability to manipulate the very fabric of reality.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Caius Devereux", detail: "A vampire of ancient lineage, known for his ability to control shadows and bend the minds of mortals to his will.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Valen Blackrose", detail: "A vampire whose black roses are the symbols of death and destruction, feared for his ruthless pursuit of power.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Ambrose Draken", detail: "A vampire with the heart of a dragon, feared for his fiery rage and dominance over both mortal and supernatural realms.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Calix Nox", detail: "A vampire who embodies the essence of night, feared for his ability to manipulate darkness and control the minds of others.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Ezekiel Shadowbane", detail: "A vampire whose name is synonymous with destruction, feared for his mastery over shadows and his ability to bring about the fall of empires.", status: false, gender: "Male", type: "Gothic Vampire" },
  { name: "Morgana Nightshade", detail: "A vampire with a heart full of vengeance, feared for her mastery over shadows and dark magic.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Evangeline Dusk", detail: "A vampire who thrives in the twilight hours, feared for her ability to control the ebb and flow of life and death.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Lilith Darkmoon", detail: "A vampire with a dark, mysterious past, known for her chilling beauty and her control over the darkest aspects of magic.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Seraphina Vane", detail: "A vampire with an ethereal presence, feared for her ability to control the winds of fate and time.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Elara Blackthorn", detail: "A vampire whose name is whispered in fear, known for her dangerous beauty and connection to the shadowy realms.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Isabella Graves", detail: "A vampire with a cold, calculating nature, feared for her manipulation of life and death.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Liliana Deathrose", detail: "A vampire whose roses are as deadly as her presence, feared for her ability to bring ruin to anyone who crosses her.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Catarina Ashcroft", detail: "A vampire with an unyielding thirst for knowledge, feared for her ability to resurrect the dead and control spirits.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Isolde Nightblood", detail: "A vampire whose bloodline is tied to the darkest of magic, feared for her ability to bend death itself to her will.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Selene Bloodthorn", detail: "A vampire who commands both the night and the blood within her veins, feared for her deadly precision and deadly temper.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Drusilla Shadowbrook", detail: "A vampire whose command of shadows makes her almost untouchable, feared for her eerie calm and swift strikes.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Rosaline Vespera", detail: "A vampire who thrives in the dusk, feared for her ability to manipulate the very essence of time and death.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Althea Ravenshade", detail: "A vampire known for her ability to weave dark spells and control the minds of those around her.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Velia Thorn", detail: "A vampire with an unshakable grip on the forces of darkness, feared for her cursed lineage and deadly powers.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Anastasia Blackwell", detail: "A vampire who controls the power of both darkness and light, feared for her intelligence and cruelty.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Thalia Devereux", detail: "A vampire whose dark powers are known to bind others to her will, feared for her merciless nature.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Selene Darkrose", detail: "A vampire known for her beauty and control over death, feared for her dangerous presence and unyielding will.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Octavia Nightfall", detail: "A vampire who controls the night, feared for her ability to manipulate darkness and silence.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Fiona Grimwood", detail: "A vampire with a chilling aura, feared for her power over the dead and her unmatched control over shadowy forces.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Isadora Nox", detail: "A vampire whose presence is as dark as the night, feared for her ability to summon storms and control the elements.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Amara Ravenscroft", detail: "A vampire who commands the souls of the lost, feared for her ability to control both life and death.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Eliza Crowe", detail: "A vampire whose ability to manipulate the shadows makes her a powerful figure in the underworld, feared for her control over the dead.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Ophelia Darkstone", detail: "A vampire with a cold, calculating nature, feared for her abilities in necromancy and her power over the darkness.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Delilah Nightshade", detail: "A vampire whose dark beauty is only rivaled by her fearsome power over shadows and death.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Seraphine Thornfield", detail: "A vampire with the power to control the elements, feared for her cruelty and her unyielding thirst for blood.", status: false, gender: "Female", type: "Gothic Vampire" },
  { name: "Ashlyn Blackthorn", detail: "A vampire with a dark soul, feared for their ability to manipulate shadows and weave dark magic.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Raven Thornfield", detail: "A vampire with a haunting presence, known for their control over death and the souls of the lost.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Dakota Nightshade", detail: "A vampire who thrives in the darkness, feared for their ability to command the shadows and bring ruin.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Morgan Darkrose", detail: "A vampire whose power comes from the shadows and roses, feared for their ability to manipulate life and death.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Phoenix Devereux", detail: "A vampire who rises from the ashes of their past, feared for their control over both life and death.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Jaden Nightblood", detail: "A vampire with a bloodline rooted in darkness, feared for their ability to summon dark spirits.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "River Ravenscroft", detail: "A vampire with a cold, calculating nature, known for their ability to control the currents of life and death.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Avery Bloodthorn", detail: "A vampire with an unyielding thirst for power, feared for their manipulation of blood and shadows.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Quinn Vane", detail: "A vampire whose name is synonymous with darkness, feared for their control over the elements and the dead.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Rowan Shadowbrook", detail: "A vampire known for their deep connection to the shadows, feared for their power over the undead and the living.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Eliot Blackstone", detail: "A vampire with a dark past, feared for their mastery over dark magic and their ability to control time itself.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Skylar Duskwood", detail: "A vampire whose presence is as chilling as the dusk, feared for their power over the dead and dark realms.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Cameron Blackwell", detail: "A vampire whose name is feared across the land, known for their control over shadows and necromancy.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Finley Darkstone", detail: "A vampire with an insatiable thirst for darkness, feared for their ability to bind souls to their will.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Angel Thorn", detail: "A vampire with a tragic and mysterious past, known for their ability to control both light and dark forces.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Alex Darkmoon", detail: "A vampire whose connection to the moon allows them to manipulate darkness and summon creatures of the night.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Jordan Ravencroft", detail: "A vampire whose eerie presence controls the shadows, feared for their mastery over the undead.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Emery Bloodrose", detail: "A vampire who commands both the rose and the blood within, feared for their deadly grace and control over life and death.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Drew Vespera", detail: "A vampire with an air of mystery, known for their control over the twilight hours and dark magic.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Dakota Grimwood", detail: "A vampire whose name is tied to the shadows of the forest, feared for their connection to the realm of the dead.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Taylor Nightfall", detail: "A vampire whose power grows with the setting sun, feared for their ability to manipulate the veil between life and death.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Drew Blackheart", detail: "A vampire with a heart filled with darkness, feared for their control over necromancy and their ability to summon the dead.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Emerson Ashcroft", detail: "A vampire with a tragic past, known for their ability to control both fire and darkness, feared for their ruthlessness.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Blake Ravenshade", detail: "A vampire whose ability to cloak themselves in shadows makes them a feared figure in the underworld.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Morgan Nightshade", detail: "A vampire whose mastery of shadow magic is unparalleled, feared for their unyielding pursuit of power.", status: false, gender: "Unisex", type: "Gothic Vampire" },
  { name: "Azriel Nightfire", detail: "A vampire known for their control over fire and shadows, feared for their ability to manipulate both elements.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Lucius Shadowstrike", detail: "A vampire who strikes from the shadows, known for their ability to blend into darkness and strike with deadly precision.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Daemon Stormborne", detail: "A vampire with the power to summon storms, feared for their control over the forces of nature.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Valtor Darkwing", detail: "A vampire with the ability to fly and summon dark wings, feared for their silent and deadly attacks.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Kael Frostfang", detail: "A vampire whose icy breath and cold demeanor freeze the heart, feared for their mastery over ice and frost.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Zephyr Nightclaw", detail: "A vampire with the ability to control winds and shadows, known for their swift and silent attacks.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Alistair Blackthorn", detail: "A vampire with a dark past, known for their manipulation of blood magic and shadow arts.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Dorian Shadowflame", detail: "A vampire who combines shadow magic with fire, feared for their ability to unleash both in devastating combinations.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Galen Bloodreaver", detail: "A vampire who is known for their ability to drain blood with a single touch, feared for their ruthless nature.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Cedric Soulshard", detail: "A vampire whose power is linked to the souls of the dead, feared for their ability to steal life force.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Rhys Darkfang", detail: "A vampire with fangs that are as dark as their soul, feared for their savage nature and mastery of darkness.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Orion Nightbane", detail: "A vampire who is known to banish darkness itself, feared for their control over both light and shadow.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Silas Bloodstorm", detail: "A vampire whose presence is as violent as a storm, feared for their blood magic and fury.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Kaelen Nightfall", detail: "A vampire whose power peaks at dusk, feared for their connection to the night and mastery of shadow magic.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Darian Drakenhart", detail: "A vampire who commands dragons and fire, feared for their fiery temper and power over the elements.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Lucian Blackshadow", detail: "A vampire whose very name is feared, known for their ability to control shadows and strike from the darkness.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Thorne Ravenshade", detail: "A vampire whose connection to ravens allows them to see into the dark recesses of the world, feared for their cunning.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Xander Grimblade", detail: "A vampire known for their skill with a blade and their ability to summon darkness to aid them in battle.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Riven Darklight", detail: "A vampire who can wield both light and dark forces, feared for their ability to balance both extremes.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Caspian Firestorm", detail: "A vampire who brings forth the fury of firestorms, feared for their devastating power over flame.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Kaelen Shadowstrike", detail: "A vampire whose stealth and speed are unmatched, feared for their ability to strike from the shadows without warning.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Balthazar Frostmourne", detail: "A vampire who controls ice and frost, known for their cold, calculating demeanor and mastery over the frozen elements.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Roderic Soulreaver", detail: "A vampire who collects souls, feared for their ability to extract a soul with a single touch.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Jareth Darkwhisper", detail: "A vampire who communicates through whispers, feared for their ability to manipulate others with subtlety.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Vesperian Bloodmoon", detail: "A vampire who rises with the blood moon, feared for their power during lunar eclipses and their mastery over blood magic.", status: false, gender: "Male", type: "Fantasy Vampire" },
  { name: "Seraphina Stormborn", detail: "A vampire with the power to summon storms, feared for her ability to manipulate the weather and the forces of nature.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Elara Blackthorn", detail: "A vampire known for her dark powers and mastery over shadows, feared for her ability to blend into darkness.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Selene Darkstar", detail: "A vampire who commands the night, feared for her ability to harness the power of the stars and darkness.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Lyra Nightshade", detail: "A vampire whose connection to the night allows her to control shadows and strike with deadly precision.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Ravenna Shadowflame", detail: "A vampire who combines the power of shadow and fire, feared for her deadly combination of darkness and flame.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Isolde Bloodstorm", detail: "A vampire who can summon storms and manipulate blood, feared for her violent temper and destructive power.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Morrigan Darkwing", detail: "A vampire who commands dark wings and the powers of the night, feared for her flight and attack from above.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Evelina Soulshade", detail: "A vampire who manipulates the souls of the dead, feared for her ability to control and extract souls.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Evangeline Nightfire", detail: "A vampire whose powers are linked to the night and fire, feared for her fiery and destructive attacks in the dark.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Morgana Moonshadow", detail: "A vampire with powers tied to the moon and shadows, feared for her ability to control the tides and the darkness.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Lilith Shadowwhisper", detail: "A vampire who whispers in the shadows and manipulates others with her subtle dark powers.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Aradia Blackrose", detail: "A vampire who uses dark roses to poison and control, feared for her subtle manipulation and deadly touch.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Cassandra Deathshadow", detail: "A vampire known for her ability to summon shadows that can kill, feared for her power to instill death and darkness.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Vespera Stormwraith", detail: "A vampire who rides the storms and controls wraiths, feared for her connection to the supernatural and the winds.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Amara Darklight", detail: "A vampire who wields both light and darkness, feared for her dual nature and her mastery of both elements.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Althea Frostmourne", detail: "A vampire with the ability to control ice and frost, feared for her cold heart and power over the frozen elements.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Selena Nightfall", detail: "A vampire whose powers are strongest during the night, feared for her ability to control the darkness and hunt in the shadows.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Isadora Moonfire", detail: "A vampire who harnesses the power of the moon and fire, feared for her destructive and radiant powers.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Marcelline Blackthorn", detail: "A vampire who controls shadows and darkness, feared for her ability to manipulate the elements of the night.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Freya Bloodrose", detail: "A vampire who is known for her deadly rose-like abilities, feared for her ability to drain life with a single touch.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Evangeline Darkthorn", detail: "A vampire whose powers are linked to the thorned darkness, feared for her ability to poison and control her enemies.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Morwenna Bloodveil", detail: "A vampire whose blood is imbued with dark power, feared for her ability to summon veils of blood and death.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Amara Nightfrost", detail: "A vampire who controls both night and frost, feared for her ability to freeze and darken the world around her.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Calista Darkflame", detail: "A vampire who combines dark fire with shadow, feared for her ability to manipulate both elements in battle.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Talia Soulreaver", detail: "A vampire who can drain souls with a touch, feared for her ability to take life force and leave only darkness behind.", status: false, gender: "Female", type: "Fantasy Vampire" },
  { name: "Rowan Darkstar", detail: "A vampire known for their mastery of shadows and the stars, feared for their ability to navigate through darkness and command the night.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Phoenix Blackmoon", detail: "A vampire who rises from the ashes of the past, feared for their ability to control both the flame and the moon's power.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Morgan Soulshade", detail: "A vampire with the power to manipulate souls and shadows, feared for their ability to control the essence of life and death.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Eden Darkfire", detail: "A vampire who commands both the fiery forces of destruction and the darkness of the night, feared for their dangerous combination of powers.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Aiden Bloodstone", detail: "A vampire whose blood runs with the power of stone, feared for their ability to withstand great pain and their affinity for blood.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Jordan Shadowthorn", detail: "A vampire who controls both the shadows and the thorns of darkness, feared for their ability to trap their prey with deadly precision.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Riley Nightshade", detail: "A vampire with the ability to blend into the night, feared for their talent in manipulating poisonous plants and dark magic.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Quinn Grimshadow", detail: "A vampire whose presence brings forth shadows of death, feared for their ability to instill fear and death with a single glance.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Elliot Nightbloom", detail: "A vampire who harnesses the power of the night and blooming darkness, feared for their ability to create death from the shadows.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Riley Darkflame", detail: "A vampire whose dark flames can consume anything in their path, feared for their power to manipulate fire and shadow alike.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Cameron Frostfire", detail: "A vampire with the ability to control both ice and fire, feared for their ability to freeze and burn their enemies in an instant.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Skylar Bloodthorn", detail: "A vampire whose power is rooted in both blood and thorn, feared for their ability to manipulate life forces with a single touch.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Ash Stormreaver", detail: "A vampire who commands the forces of storm and ash, feared for their ability to wreak havoc with elemental power.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Avery Nightfang", detail: "A vampire whose fangs are sharpened by the night, feared for their ability to strike swiftly and silently under the cover of darkness.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Taylor Blackfire", detail: "A vampire who manipulates both darkness and flame, feared for their ability to wield destructive forces with ease.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Finley Darkwhisper", detail: "A vampire whose whispers bring forth shadows and nightmares, feared for their ability to manipulate minds and control the dark.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Cassidy Nightshade", detail: "A vampire who blends into the night, feared for their affinity with poisonous plants and shadow magic.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Rowan Bloodmoon", detail: "A vampire whose powers are strongest during a blood moon, feared for their ability to harness lunar energy for dark purposes.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Samara Stormshadow", detail: "A vampire who controls both storms and shadows, feared for their deadly combination of elemental and shadow powers.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Quinn Blackthorn", detail: "A vampire with a deep connection to darkness and thorns, feared for their power to strike down foes from the shadows.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Emerson Darkwing", detail: "A vampire with wings that blend into the darkness, feared for their ability to strike swiftly and silently from above.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Drew Shadowflame", detail: "A vampire who controls both shadow and flame, feared for their ability to manipulate both elements with deadly precision.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Jaden Soulblight", detail: "A vampire whose presence brings death and despair, feared for their ability to curse others with soul-damaging powers.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "River Moonshadow", detail: "A vampire who harnesses the power of both the river and the moon, feared for their ability to control water and shadow.", status: false, gender: "Unisex", type: "Fantasy Vampire" },
  { name: "Ashford Darkveil", detail: "A vampire whose cloak of darkness veils them from detection, feared for their ability to move unseen and strike without warning.", status: false, gender: "Unisex", type: "Fantasy Vampire" }
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
      name: "Tiefling Name Generator",
      pic: "/female.jpg",
      link: "https://www.nameideagenerator.com/tiefling-name-generator",
  },
  {
      name: "Dragonborn Name Generator",
      pic: "/bg-dragonborn.webp",
      link: "https://www.nameideagenerator.com/dragonborn-name-generator",
  },
  {
      name: "Orc Name Generator",
      pic: "/orc-name-generator.jpg",
      link: "https://www.nameideagenerator.com/orc-name-generator",
  },
  ];
  
  const VampireNameGenerator = () => {
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
  
const context = "Vampire Name Generator With Meaning"
const Q1 = "What makes a good vampire name?"
const A1 = "A good vampire name reflects mystery, power, and elegance. It often connects to folklore, gothic themes, or historical references to create an intriguing presence."

const Q2 = "How can I use the Vampire Name Generator?"
const A2 = "Choose a gender and category, such as Traditional, Gothic, or Fantasy. Then generate names instantly and explore their meanings for deeper inspiration."

const Q3 = "Are the generated vampire names unique?"
const A3 = "Yes, the tool generates fresh and creative names each time. You’ll find names that stand out while staying true to the vampire theme."

const Q4 = "Can I find vampire names for both genders?"
const A4 = "Absolutely! The generator offers male, female, and unisex names. This makes it easy to find the right name for any character."

const Q5 = "Why are vampire names important in storytelling and games?"
const A5 = "Names set the tone for your character. A strong vampire name adds depth, evokes emotions, and helps build a lasting impression in stories, games, or role-playing adventures."
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
        <a href="/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fanstasy and Mythical Creatures Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/vampire-name-generator" className="hover:underline text-[#343a40]">Vampire Name Generator with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Vampire Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender of Vampire Name</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="UniSex">UniSex</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Category of Vampire Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Traditional Vampire">Traditional </option>
              <option value="Gothic Vampire">Gothic </option>
              <option value="Fantasy Vampire">Fantasy</option>
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
            What Is a Vampire Name?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            A vampire name reflects mystery, elegance, and power. It often has roots in mythology, history, and folklore. 
            Depending on the style, these names evoke fear, allure, or intrigue. Choosing the right name can add life to your characters and stories.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            The Origins of Vampire Names
              </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Vampire names come from various cultures and legends. Eastern European folklore gave rise to many well-known vampire tales. 
            Ancient stories described vampires as mysterious beings with dark, powerful names. Literature and films later shaped these names into the iconic ones we know today.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Why Vampire Names Are Important in Fiction and Gaming
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Names hold power in storytelling and gaming. A good vampire name sets the tone for your character. 
            It signals strength, danger, or elegance to readers and players. 
            Whether you write a novel or play a game, the right name helps build the perfect atmosphere.
            </p>
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Choose Our Vampire Name Generator?
            </h2>
            <hr />
            <br />
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Instant and Easy to Use
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Our Vampire Name Generator works quickly and efficiently. 
            Simply select your desired gender and category, then generate names in seconds. It's designed for ease, saving you time when creating your characters.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Unique and Creative Names
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            The generator offers a wide range of names, from traditional to gothic and fantasy-inspired. 
            Every name is carefully crafted to provide fresh, creative options that stand out. You'll never run out of interesting ideas
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Meaningful Name Results
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Each generated name comes with a rich meaning that connects to vampire lore, mythology, or cultural history. 
            This adds depth to your characters, giving them an extra layer of storytelling power
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Perfect for Writers, Gamers, and Creators
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Whether you’re crafting a story, designing a game, or creating a character for a role-playing adventure, our tool is made to inspire. 
            It's ideal for anyone looking to bring a vampire to life with a powerful name
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Customizable Options for Every Need
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            The generator lets you choose from different categories and gender options, ensuring you get a name that fits your specific needs. 
            Whether you want a dark, classic vampire or something more unique, our tool has you covered
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Vampire Name Generator
          </h2>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose a Gender <b>(Male, Female, Unisex)</b>:
              </h3>
              <p>
              Start by selecting the gender for the name. Choose from male, female, or unisex options. This ensures you get a name tailored to your needs.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Type<b> (Traditional, Gothic, Fantasy)</b>:
              </h3>
              <p>
              Select the type of name that fits your character. Traditional names feel historical and authentic. 
              Gothic names carry dark and poetic tones. Fantasy names offer creativity and a magical edge.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: <b>Generate</b> Names Instantly
              </h3>
              <p>
              Click the <b>Generate</b> button to discover unique vampire names. The tool works instantly and provides four results each time.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Explore the Meanings of Vampire Names
              </h3>
              <p>
              Each generated name includes a meaning. Learn what makes the name special and how it connects to vampire lore. Understanding meanings adds depth to your choices.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="female-vampire-name-generator1.webp"
              alt="Vampire Name Generator Tool"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="male-vampire-name-generator.jpg"
              alt="Vampire Name Generator Tool"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/39759eda-9160-428c-99ea-faaa2d77db68.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Vampire Name Generator
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

      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Unique Features of Our Vampire Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Meaningful Results
            </h3>
            <p>
            Every name generated includes a unique meaning. This helps you understand the significance behind each name. Adding this detail makes characters more memorable and impactful
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Name Generation
            </h3>
            <p>
            The tool provides vampire names in seconds. A single click delivers results without any delays. It’s fast, efficient, and easy to use.        
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Creative and Diverse Options
            </h3>
            <p>
            You can explore names from multiple categories like Traditional, Gothic, and Fantasy. 
            Each category offers a unique style to suit different characters. This variety ensures you always find the perfect fit.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Perfect for Writers and Gamers
            </h3>
            <p>
            Writers, gamers, and role-players will find this tool invaluable. It helps create captivating names for stories, games, or creative projects. 
            It’s the perfect resource to spark imagination and bring ideas to life.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Vampire Names
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Male Vampire Names
              </h3>
              <p>
              <ul>
                <li>- <b>Vlad </b> – Inspired by Vlad the Impaler, a ruthless historical figure linked to the Dracula legend. Represents power and fear.</li>
                <li>- <b>Dracula </b> – From Bram Stoker’s Dracula. Symbolizes immortality, dominance, and darkness.</li>
                <li>- <b>Lestat </b> – A charming, rebellious vampire from Interview with the Vampire. Known for wit and elegance.</li>
                <li>- <b>Alucard </b> – A reverse persona of Dracula from Hellsing. Embodies overwhelming power and destruction.</li>
                <li>- <b>Blade </b> – A half-vampire warrior from Blade. Represents justice, strength, and relentless determination.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Female Vampire Names
              </h3>
              <p>
              <ul>
                <li>- <b>Lilith</b> – An ancient mythological figure often described as the first vampire. Symbolizes darkness, rebellion, and mystery.</li>
                <li>- <b>Carmilla </b> – The seductive and dangerous vampire from Gothic literature. Represents allure and hidden danger.</li>
                <li>- <b>Selene </b> – A powerful warrior vampire from Underworld. Symbolizes strength, vengeance, and loyalty.</li>
                <li>- <b>Akasha </b> – The queen of vampires from The Queen of the Damned. Embodies beauty, cruelty, and ultimate power.</li>
                <li>- <b>Miriam </b> – From The Hunger, a vampire who symbolizes immortality, sophistication, and desire.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Unisex Vampire Names 
              </h3>
              <p>
              <ul>
                <li>- <b>Nosferatu</b> – A legendary vampire term meaning “undead” or “plague-bringer.” Fits any dark and powerful vampire character.</li>
                <li>- <b>Strigoi </b> – From Romanian folklore, representing shape-shifting and blood-drinking spirits. Suits both genders.</li>
                <li>- <b>Erebus </b> – A name rooted in Greek mythology meaning “darkness.” A versatile name for any mysterious vampire.</li>
                <li>- <b>Sable </b> – A name symbolizing black, darkness, and elegance. Works well for both male and female vampires.</li>
                <li>- <b>Nyx</b> – Derived from the Greek goddess of night. Evokes power, mystery, and eternal darkness.</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[85%] mx-auto text-[#343a40] my-[50px] h-[80vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Vampire Name Inspiration
          </h2>
        <hr />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Famous Vampire Names from Mythology and Folklore
              </h3>
              <p>
              Ancient myths tell tales of legendary vampires. Names like “Strigoi” or “Nosferatu” originated from European folklore. 
              These names still inspire vampire stories today.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Iconic Vampires in Literature, Movies, and TV Shows
              </h3>
              <p>
              Classic works introduced iconic vampire names. Dracula remains the most famous name, thanks to Bram Stoker’s novel. 
              Modern films and shows, like Twilight or The Vampire Diaries, gave us names like Edward, Lestat, and Selene.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Tips for Creating Unique Vampire Names
              </h3>
              <p>
              Think about your character’s personality and story. A strong and dark character might suit a sharp-sounding name. 
              Softer names work well for alluring and mysterious vampires. Mix mythological references with unique spellings to create standout names.
              </p>
            </div>
            
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="namegenerator.jpg"
              alt="Vampire Name Generator Tool"
              className="w-[380px] my-[20px] h-[360px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
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

export default VampireNameGenerator;

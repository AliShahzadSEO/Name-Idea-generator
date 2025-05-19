"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Snagglenob", detail: "Mischievous and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Grizzle", detail: "Gruff and cunning.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Thumpkin", detail: "Strong and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Skulk", detail: "Stealthy and elusive.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Raspik", detail: "Sharp and crafty.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Glint", detail: "Bright and tricky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Snipe", detail: "Quick and stealthy.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Grumble", detail: "Grumpy and devious.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Ziktraz", detail: "Sharp and cunning.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Nibble", detail: "Small and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Skulkor", detail: "Shadowy and elusive.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Murg", detail: "Rough and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Dreg", detail: "Cunning and sly.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Fizzle", detail: "Sparky and tricky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Nark", detail: "Irascible and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Krag", detail: "Strong and stealthy.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Vexor", detail: "Annoying and crafty.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Snipegrim", detail: "Elusive and dark.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Glimmer", detail: "Bright and tricky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Rax", detail: "Sharp and stealthy.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Sneek", detail: "Stealthy and sly.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Jinx", detail: "Mischievous and devious.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Sprocket", detail: "Mechanical and tricky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Zark", detail: "Rough and cunning.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Wizzle", detail: "Bright and tricky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Blag", detail: "Bold and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Krix", detail: "Sharp and devious.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Skratch", detail: "Scrappy and stealthy.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Fizzleclaw", detail: "Tricky and fierce.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Brim", detail: "Bold and sly.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Zix", detail: "Sharp and devious.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Krikk", detail: "Gruff and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Mork", detail: "Rough and sly.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Blink", detail: "Quick and elusive.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Wizzlegrin", detail: "Bright and mischievous.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Skulkrax", detail: "Shadowy and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Razzik", detail: "Mischievous and sharp.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Nix", detail: "Quick and elusive.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Krum", detail: "Gruff and tricky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Skrit", detail: "Scrappy and sly.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Fizzik", detail: "Sparky and devious.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Grinno", detail: "Grumpy and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Klink", detail: "Mechanical and crafty.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Thrax", detail: "Strong and devious.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Sniv", detail: "Sly and quick.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Drek", detail: "Gruff and crafty.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Glitch", detail: "Erratic and sneaky.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Zink", detail: "Sharp and devious.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Snik", detail: "Sly and elusive.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Quirk", detail: "Mischievous and unique.", status: false, gender: "male", type: "sneaky_goblin" },
    { name: "Snikka", detail: "Sly and cunning.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Brizz", detail: "Quick and tricky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Nara", detail: "Cunning and stealthy.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Skelly", detail: "Mischievous and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Zogna", detail: "Tricky and devious.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Vexia", detail: "Sharp and cunning.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Fizzle", detail: "Tricky and mischievous.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Trixie", detail: "Sly and playful.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Raxia", detail: "Cunning and elusive.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Glinta", detail: "Bright and sneaky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Grizzle", detail: "Gruff and crafty.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Dregna", detail: "Rough and tricky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Brukka", detail: "Strong and devious.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Jinxie", detail: "Playful and mischievous.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Krika", detail: "Cunning and tricky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Zilla", detail: "Strong and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Snazz", detail: "Quick and devious.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Brinka", detail: "Crafty and elusive.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Flix", detail: "Playful and sneaky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Krixa", detail: "Sharp and cunning.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Nixie", detail: "Quick and tricky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Snikta", detail: "Sly and devious.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Wizzle", detail: "Bright and mischievous.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Blix", detail: "Quick and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Marn", detail: "Rough and tricky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Glimmera", detail: "Bright and sneaky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Skritta", detail: "Scrappy and cunning.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Klorna", detail: "Strong and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Draga", detail: "Fierce and devious.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Zinna", detail: "Quick and elusive.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Fizzlema", detail: "Tricky and bright.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Briska", detail: "Mischievous and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Trixa", detail: "Playful and cunning.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Grimma", detail: "Gruff and sneaky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Snickra", detail: "Sly and tricky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Quilla", detail: "Quick and cunning.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Blinka", detail: "Elusive and quick.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Thraxa", detail: "Strong and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Snikra", detail: "Cunning and tricky.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Glitta", detail: "Bright and mischievous.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Zixie", detail: "Sharp and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Fizzla", detail: "Tricky and playful.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Razzka", detail: "Quick and devious.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Skella", detail: "Sly and crafty.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Brikka", detail: "Mischievous and quick.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Mixa", detail: "Crafty and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Jix", detail: "Tricky and devious.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Krixa", detail: "Sharp and cunning.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Vexna", detail: "Cunning and sly.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Nixla", detail: "Quick and elusive.", status: false, gender: "female", type: "sneaky_goblin" },
      { name: "Grunt", detail: "Strong and resilient.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Ruk", detail: "Tough and battle-hardened.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Throg", detail: "Mighty and fierce.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Gorruk", detail: "Powerful and rugged.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Brak", detail: "Strong and aggressive.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Grom", detail: "Mighty and enduring.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Krug", detail: "Rough and strong.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Drak", detail: "Fierce and battle-ready.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Smash", detail: "Powerful and blunt.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Grok", detail: "Rugged and intimidating.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Raxor", detail: "Sharp and strong.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Vark", detail: "Gruff and tough.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Mulg", detail: "Sturdy and reliable.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Drog", detail: "Powerful and enduring.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Bragor", detail: "Strong and assertive.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Kragor", detail: "Rough and battle-ready.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Thrak", detail: "Intense and strong.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Drok", detail: "Solid and fierce.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Skar", detail: "Tough and battle-worn.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Rukor", detail: "Tough and rugged.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Blorg", detail: "Strong and intimidating.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Brakk", detail: "Powerful and durable.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Gorrik", detail: "Gruff and resilient.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Thrakor", detail: "Fierce and enduring.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Kragok", detail: "Strong and battle-ready.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Drek", detail: "Solid and reliable.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Vargor", detail: "Rugged and fierce.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Bront", detail: "Sturdy and tough.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Gulak", detail: "Strong and enduring.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Krok", detail: "Rough and battle-ready.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Drakk", detail: "Powerful and intense.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Grum", detail: "Tough and reliable.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Vorg", detail: "Strong and fierce.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Thorg", detail: "Intense and battle-hardened.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Gromak", detail: "Strong and sturdy.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Rukthor", detail: "Tough and battle-ready.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Skrok", detail: "Rough and durable.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Brakgor", detail: "Powerful and rugged.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Vrag", detail: "Fierce and strong.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Gornak", detail: "Solid and battle-hardened.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Kront", detail: "Tough and enduring.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Drogor", detail: "Powerful and fierce.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Blarg", detail: "Gruff and strong.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Rukgar", detail: "Sturdy and battle-ready.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Krogath", detail: "Rugged and powerful.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Grimak", detail: "Tough and grim.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Brakkor", detail: "Strong and durable.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Skarn", detail: "Rough and resilient.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Drakgor", detail: "Fierce and enduring.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Krorg", detail: "Strong and rugged.", status: false, gender: "male", type: "tough_goblin" },
      { name: "Krina", detail: "Strong and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Bruga", detail: "Rugged and tough.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Groma", detail: "Sturdy and battle-hardened.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Thragga", detail: "Mighty and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Vorga", detail: "Strong and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Rukka", detail: "Powerful and rugged.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Drega", detail: "Tough and battle-ready.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Grunka", detail: "Rugged and solid.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Borga", detail: "Strong and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Skara", detail: "Tough and battle-hardened.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Thraxa", detail: "Sturdy and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Morgra", detail: "Strong and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Bruka", detail: "Rugged and battle-ready.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Varnak", detail: "Sturdy and powerful.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Gorra", detail: "Strong and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Druka", detail: "Rugged and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Rukina", detail: "Tough and battle-hardened.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Korga", detail: "Powerful and rugged.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Briska", detail: "Strong and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Skargra", detail: "Tough and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Morga", detail: "Strong and battle-hardened.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Krukra", detail: "Rugged and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Vragga", detail: "Sturdy and powerful.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Blorga", detail: "Strong and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Kriya", detail: "Tough and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Drina", detail: "Sturdy and battle-ready.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Groga", detail: "Strong and rugged.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Sarka", detail: "Resilient and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Braggra", detail: "Strong and tough.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Dregga", detail: "Rugged and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Varka", detail: "Sturdy and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Brina", detail: "Strong and battle-ready.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Vrogna", detail: "Fierce and rugged.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Thorria", detail: "Tough and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Rukra", detail: "Strong and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Skarga", detail: "Rugged and battle-hardened.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Mornak", detail: "Strong and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Vargra", detail: "Sturdy and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Korgra", detail: "Rugged and tough.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Druga", detail: "Strong and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Brikka", detail: "Tough and battle-ready.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Throgga", detail: "Fierce and resilient.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Grimra", detail: "Strong and rugged.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Korria", detail: "Tough and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Forga", detail: "Strong and battle-hardened.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Vexa", detail: "Resilient and fierce.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Thrigra", detail: "Tough and rugged.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Borga", detail: "Strong and battle-ready.", status: false, gender: "female", type: "tough_goblin" },
      { name: "Zizzik", detail: "Clever and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Fizzle", detail: "Ingenious and quick.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Wizzle", detail: "Creative and sharp-witted.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Gizmo", detail: "Resourceful and crafty.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Tinker", detail: "Skilled and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Razzle", detail: "Bright and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Sprocket", detail: "Mechanically inclined.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Fizzlewix", detail: "Ingenious and eccentric.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Tinkor", detail: "Clever and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Boggle", detail: "Quick-witted and crafty.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Zizzle", detail: "Creative and sharp-minded.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Click", detail: "Clever and perceptive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Nix", detail: "Quick and crafty.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Dabble", detail: "Resourceful and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Whiz", detail: "Bright and ingenious.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Jinx", detail: "Clever and unpredictable.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Sparky", detail: "Inventive and energetic.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Quibble", detail: "Resourceful and sharp-witted.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Blink", detail: "Quick and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Zork", detail: "Inventive and bright.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Skrit", detail: "Creative and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Zipper", detail: "Quick and resourceful.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Blix", detail: "Sharp-witted and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Gizmo", detail: "Clever and crafty.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Wizzlewix", detail: "Creative and eccentric.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Flick", detail: "Quick and sharp-minded.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Zibber", detail: "Bright and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Wizzleton", detail: "Inventive and sharp-witted.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Fizzor", detail: "Resourceful and quick.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Sprock", detail: "Clever and mechanical.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Nibble", detail: "Inventive and sharp-minded.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Jolt", detail: "Energetic and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Blixor", detail: "Quick and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Tinkster", detail: "Creative and skilled.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Gibbler", detail: "Resourceful and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Zinn", detail: "Sharp and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Klix", detail: "Clever and quick.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Dabbleton", detail: "Resourceful and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Sparkr", detail: "Energetic and sharp-witted.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Skritz", detail: "Quick and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Vizzik", detail: "Bright and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Jix", detail: "Creative and quick-minded.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Snizzle", detail: "Sharp and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Wizzor", detail: "Clever and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Blixor", detail: "Quick and sharp-minded.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Flicker", detail: "Energetic and inventive.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Quix", detail: "Bright and clever.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Zazz", detail: "Creative and quick-witted.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Jinxor", detail: "Clever and unpredictable.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Tinkix", detail: "Inventive and sharp-minded.", status: false, gender: "male", type: "crafty_goblin" },
      { name: "Trixie", detail: "Clever and charming.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Whizzla", detail: "Bright and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Sparka", detail: "Energetic and sharp-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Gizma", detail: "Creative and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Zinnia", detail: "Quick and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Blinka", detail: "Sharp-witted and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Fizzla", detail: "Bright and crafty.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Wizzlea", detail: "Clever and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Dabbla", detail: "Resourceful and quick-minded.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Zazzla", detail: "Bright and sharp-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Tinkra", detail: "Inventive and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Jixie", detail: "Quick and creative.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Klixa", detail: "Bright and sharp-minded.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Nixie", detail: "Creative and quick-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Flickra", detail: "Inventive and energetic.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Zix", detail: "Sharp-witted and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Quibba", detail: "Resourceful and quick.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Jixla", detail: "Creative and sharp-minded.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Blixia", detail: "Bright and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Wizzla", detail: "Clever and quick-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Fizzlea", detail: "Inventive and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Trixia", detail: "Bright and quick-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Gizma", detail: "Creative and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Zinna", detail: "Sharp-witted and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Sparka", detail: "Energetic and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Klixie", detail: "Quick and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Jinxla", detail: "Bright and sharp-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Wizzix", detail: "Clever and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Blinka", detail: "Quick and sharp-minded.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Nixla", detail: "Creative and bright.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Sparxie", detail: "Energetic and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Tinkra", detail: "Inventive and quick-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Quibbla", detail: "Sharp-minded and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Flickla", detail: "Creative and energetic.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Fizzora", detail: "Bright and quick-witted.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Zixla", detail: "Clever and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Gizzy", detail: "Resourceful and quick.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Whizzix", detail: "Inventive and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Zazzla", detail: "Bright and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Blixy", detail: "Quick-witted and sharp-minded.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Klixor", detail: "Clever and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Jixora", detail: "Creative and quick.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Wizzla", detail: "Bright and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Trixia", detail: "Quick-witted and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Quixie", detail: "Clever and energetic.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Gizma", detail: "Inventive and bright.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Nixra", detail: "Creative and clever.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Flickora", detail: "Energetic and quick.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Dabbla", detail: "Bright and inventive.", status: false, gender: "female", type: "crafty_goblin" },
      { name: "Fizzira", detail: "Clever and sharp-witted.", status: false, gender: "female", type: "crafty_goblin" },

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
        name: "Alien Name Generator" ,
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
        name: "DragonBorn Name Generator",
        pic: "bg-dragonborn.webp",
        link: "https://www.nameideagenerator.com/dragonborn-name-generator",
    },
    ];

const GoblinNameGenerator = () => {
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

    const bgImage = "/Goblin.jpg"
    const context = " Goblin Name Generator"
    const Q1 = "What makes a goblin name sound right?"
    const A1 = "TGoblins often have short, harsh names with lots of consonants. Think “Snark,” “Blig,” or “Zruk.” Weird spellings and rough edges are part of the charm."
    const Q2 = "Can I use this for D&D or Pathfinder?"
    const A2 = "Absolutely. The names are great for tabletop RPGs. Need a goblin villain, sidekick, or entire clan? this tool works."
    const Q3 = "Are the names unique every time?"
    const A3 = "Yes. Each name batch is randomly generated and designed to sound fresh. You can keep generating until you find one that fits."
    const Q4 = "Can I use the names for goblin clans or tribes?"
    const A4 = "Yes you can. Many names work as individual names or tribal identifiers. You can even mash two together to form your own goblin gang name."
    const Q5 = "What makes a goblin name memorable?"
    const A5 = "Names that tell a story or match your character’s traits tend to stick. Pick a name with meaning, rhythm, or emotional weight. It helps in roleplay too."


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
        <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fantasy and Mythical Creatures Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/goblin-name-generator" className="hover:underline text-[#343a40]">Goblin Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Goblin Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Goblin Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="sneaky_goblin">Sneaky Goblin</option>
                            <option value="crafty_goblin">Crafty Goblin</option>
                            <option value="cunning_goblin">Cunning Goblin</option>
                            <option value="tough_goblin">Tough Goblin</option>

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
                        <h2 className="text-center sm:text-[42px] text-[24px] font-medium text-[#343a40] pb-[]">
                         Find the Right Name for Your Goblin Trouble-Maker
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        Goblin names are short, sharp, and full of mischief. They hint at chaos, greed, grime—or genius. 
                        Finding the right one takes time, unless you’ve got a tool that does the dirty work for you.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        The Goblin Name Generator gives you instant names that sound like they came straight out of a goblin warren. 
                        Sneaky rogues, mad inventors, tribal warlords—we’ve got names for every type of goblin brain. Just click and get names that bite.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className=" sm:text-[42px] text-[24px] text-center">
                    How Our Goblin Name Generator Works
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                      Each name is built for the goblin lifestyle: loud, strange, and memorable. Here’s how to use the tool:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 1: Choose a Type
                            </h3>
                            <p>
                            Pick what kind of goblin you're naming. 
                            Options include classic fantasy goblins, steampunk goblins, or post-apocalyptic mutants. Each type has its own flavor and naming style.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 2: Select a Gender
                            </h3>
                            <p>
                            Choose male, female, or neutral. The generator adapts the sound and rhythm of the names based on your choice.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 3: Click ‘Generate’
                            </h3>
                            <p>
                            Hit the button and get a list of fresh names. Each one matches your selected type and gender.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 4: Hover to See Meanings
                            </h3>
                            <p>
                            Mouse over any name to learn what it means—or what kind of personality it fits. 
                            Some hint at traits like cowardice or cleverness. Others sound like they were spat out mid-scam.
                            </p>
                        </div>
                         <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Customize and Repeat
                            </h3>
                            <p>
                            Not quite there yet? Switch up the type or gender and try again. 
                            You can generate names endlessly until one sticks (or stinks—in a good way).
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="gobline1.jpg"
                            alt="Goblin Name Generator | Random DnD Goblin Name With Meaning"
                            className="w-[300px]  h-[340px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="gobline2.jpg"
                            alt="Goblin Name Generator | Random DnD Goblin Name With Meaning"
                            className="w-[300px] h-[340px]  sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/goblin name generator bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Goblin Name Generator
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

           <section class="bg-white text-[#343a40] py-12 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-[42px] text-[24px] font-bold mb-4">Why Use Our Goblin Name Generator?</h2>
      <p class="text-lg sm:text-xl font-medium">It’s fast. It’s fun. It’s packed with goblin mischief. See why creators love it:</p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="flex items-start gap-4">
        <span class="text-2xl">⚡</span>
        <div>
          <h3 class="text-xl font-semibold">Fast and Fun</h3>
          <p>No sign-ups. No delays. Just weird goblin names, instantly.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">👹</span>
        <div>
          <h3 class="text-xl font-semibold">Built for Goblin Chaos</h3>
          <p>Every name captures that messy, sneaky goblin vibe.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">🛠️</span>
        <div>
          <h3 class="text-xl font-semibold">Real Custom Options</h3>
          <p>Choose type and gender for results that actually fit your character.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">🔍</span>
        <div>
          <h3 class="text-xl font-semibold">Name Meanings on Hover</h3>
          <p>Learn what the name suggests—greedy, twitchy, brainy, or just plain gross.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">♾️</span>
        <div>
          <h3 class="text-xl font-semibold">Endless Mischief</h3>
          <p>Generate unlimited names. Make a whole goblin clan or army.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">🌍</span>
        <div>
          <h3 class="text-xl font-semibold">Fits Any Fantasy World</h3>
          <p>Perfect for D&D, TTRPGs, fantasy novels, or video games.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">🎧</span>
        <div>
          <h3 class="text-xl font-semibold">More Than Just Noise</h3>
          <p>Names are handcrafted to sound authentic—not just random syllables.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">🎮</span>
        <div>
          <h3 class="text-xl font-semibold">Perfect for Creators</h3>
          <p>Ideal for game devs, authors, storytellers, and roleplayers.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">📱</span>
        <div>
          <h3 class="text-xl font-semibold">Mobile-Friendly Tool</h3>
          <p>Works smoothly on any device, no app needed.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="text-2xl">💡</span>
        <div>
          <h3 class="text-xl font-semibold">Instant Inspiration</h3>
          <p>Great for kicking off character ideas or worldbuilding details.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class=" text-[#343a40] py-12 px-6">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-3xl sm:text-[42px] text-[24px] font-bold mb-4">Why Do You Need Unique Goblin Names?</h2>
      <p class="text-lg sm:text-xl font-medium">Because names aren’t just words—they’re identity, tone, and storytelling power.</p>
    </div>

    <div class="space-y-6 text-base sm:text-lg leading-relaxed">
      <p>
        You need unique goblin names to create a real connection between the character and its role. A distinct name gives identity, depth, and personality. It avoids the clichés that kill immersion. 
        Generic names feel forgettable and weaken the rhythm of your story or game. A well-crafted goblin name sticks in the reader’s mind. It builds emotional weight and helps the character stand out in a crowd.
      </p>
      <p>
        You also shape tone and worldbuilding through naming. A funny goblin name sets a comic tone. A harsh one fits horror or dark fantasy. Tribal names add culture and structure. 
        Unique names suggest language, myth, and history. In RPGs or video games, strong names make goblin NPCs, enemies, or allies feel alive. You avoid confusing overlaps with other characters, keeping your world clear, sharp, and immersive.
      </p>
    </div>
  </div>
</section>

<section class="bg-white text-[#343a40] py-16 px-6">
  <div class="max-w-4xl mx-auto text-center mb-12">
    <h2 class="text-3xl sm:text-[42px] text-[24px] font-bold mb-4">What Makes a Goblin Name Sound Authentic?</h2>
    <p class="text-lg sm:text-xl font-medium">
      Goblin names aren’t just noise—they’re rooted in sound, culture, and chaos.
    </p>
  </div>

  <div class="max-w-4xl mx-auto space-y-6">
    <div class="text-base sm:text-lg leading-relaxed text-center mb-6">
      <p class="mb-4">
        You need names that reflect goblin nature—raw, tribal, and chaotic. Authenticity comes from sound, structure, and cultural cues. It’s about more than randomness. It’s about evoking a world.
      </p>
      <p>
        The right goblin name feels gritty, twisted, and alive—something that snarls off the tongue and hints at a violent, quirky history. Whether you’re writing fantasy or designing a game, real-sounding names add immersion and believability.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-6">
      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Hard, guttural consonants</h3>
        <p>Use G, K, Z, R, and Sn to create a rough, savage tone.</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Short, broken syllables</h3>
        <p>Stick to one or two syllables like Grak, Snib, or Zog.</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Unusual or twisted spelling</h3>
        <p>Misspell intentionally—names like Krubz, Drekk, or Gibbitz.</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Tribal or cultural tags</h3>
        <p>Add suffixes like -nob, -gash, or -snag to suggest goblin clans.</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Sound-based symbolism</h3>
        <p>Harsh = warriors (Thrak, Drugg). Squeaky = tricksters (Nibby, Fizzle).</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Titles and role-based names</h3>
        <p>Use names like the Rotten, Bone-Snapper, or Muckborn to show status.</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Real-world language roots</h3>
        <p>Blend Slavic, Norse, or Germanic sounds to deepen worldbuilding.</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-1">Tone-matching structure</h3>
        <p>Funny names sound squeaky. Dark names feel sharp and aggressive.</p>
      </div>
    </div>
  </div>
</section>

<section class=" text-[#343a40] py-16 px-6">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">List of Famous Goblin Names</h2>
      <p class="text-lg sm:text-xl font-medium">
        You need names that fit tone, role, and style. Here’s a categorized list covering every goblin type—dark, funny, tribal, and more.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-3 border-b pb-1">Savage and Brutal Goblin Names</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Grak</li>
          <li>Throgg</li>
          <li>Ruknash</li>
          <li>Drogz</li>
          <li>Kravak</li>
          <li>Zurn</li>
          <li>Mugruk</li>
          <li>Skarn</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-3 border-b pb-1">Funny and Comedic Goblin Names</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Nibby Snotfang</li>
          <li>Boogerblitz</li>
          <li>Wobblegut</li>
          <li>Splatchee</li>
          <li>Fizzlenog</li>
          <li>Squeak the Tiny</li>
          <li>Gobbo Gigglecrack</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-3 border-b pb-1">Magical and Shamanic Goblin Names</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Varnuk the Whisper</li>
          <li>Dribblehex</li>
          <li>Zibbit Runejaw</li>
          <li>Hexnob</li>
          <li>Mork the Smoke-Eye</li>
          <li>Snazzlecrank</li>
          <li>Wugwort</li>
          <li>Dregmaw</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-3 border-b pb-1">Tribal and Clan-Based Goblin Names</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Grubsnag</li>
          <li>Kruk of Bonecleaver</li>
          <li>Skig Tribehowl</li>
          <li>Bagnob Sharpfang</li>
          <li>Thruk Gutpiercer</li>
          <li>Zaggot Mudblood</li>
          <li>Nargash the Ironbelly</li>
          <li>Snogbash of Redfang</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-3 border-b pb-1">Dark and Creepy Goblin Names</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Blightmaw</li>
          <li>Dreadsnarl</li>
          <li>Skulk</li>
          <li>Murktooth</li>
          <li>Grimshank</li>
          <li>Rotgut</li>
          <li>Karg the Hollow</li>
          <li>Slithak</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-white text-[#343a40] py-16 px-6">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">
        How Can You Create Goblin Names That Match Your Story or Game?
      </h2>
      <p class="text-lg sm:text-xl font-medium">
        Goblin names work best when they match the world around them—its tone, terrain, and tribal chaos.
      </p>
    </div>

    <div class="space-y-8 text-base sm:text-lg leading-relaxed">
      <div>
        <h3 class="text-xl font-semibold mb-2">Start with Tone and Role</h3>
        <p>
          Match the name to your world—dark, silly, tribal, or magical. Define the goblin’s role. 
          <strong>Warrior names</strong> sound harsh. <strong>Shaman names</strong> feel mystical. 
          <strong>Leader names</strong> sound commanding.
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Build from the Goblin’s Environment</h3>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Forest goblins</strong> use nature: Twig, Moss, Grub</li>
          <li><strong>Mountain goblins</strong> use stone/metal sounds: Crag, Throk, Grav</li>
          <li><strong>Swamp goblins</strong> sound slimy: Muck, Slob, Dreg</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Choose Fitting Sounds</h3>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Harsh consonants</strong> for savagery (K, G, R)</li>
          <li><strong>Squeaky syllables</strong> for comedy (Z, B, S)</li>
          <li><strong>Mixed tones</strong> for complexity (Thragblit, Snibzul)</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Use Modifiers to Expand Identity</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Add <strong>titles</strong>: the Bone-Crusher, of Redfang, Swamp-Walker</li>
          <li>Combine <strong>traits/actions</strong>: Snagglebite, Wretchspit, Fizzlespark</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Reflect Culture and Lore</h3>
        <p>
          Invent tribal naming systems. Use repeating prefixes or suffixes across clans. Mix languages for uniqueness. 
          Always <strong>say names aloud</strong>—they should feel natural in dialogue. Avoid overused patterns. Change one letter. Twist endings.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-white text-[#343a40] py-16 px-6">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">Which Fantasy Worlds Have the Best Goblin Name Examples?</h2>
      <p class="text-lg sm:text-xl font-medium">
        Explore how top fantasy worlds give goblins unique voice, tone, and naming traditions.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Tolkien’s Middle-earth</h3>
        <p class="mb-2 text-sm">Brutal and tribal names rooted in ancient Orcish sound.</p>
        <p class="text-sm"><strong>Examples:</strong> Bolg, Golfimbul, Grishnákh</p>
      </div>

      <div class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Dungeons & Dragons (D&D)</h3>
        <p class="mb-2 text-sm">Flexible naming across races, clans, and campaigns.</p>
        <p class="text-sm"><strong>Examples:</strong> Yegg, Krusk, Drakthar <br />
        <strong>Clans:</strong> Redfang, Broken Tusk</p>
      </div>

      <div class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Warcraft Universe</h3>
        <p class="mb-2 text-sm">Comic-tech names with greed, gadgets, and grit.</p>
        <p class="text-sm"><strong>Examples:</strong> Gallywix, Gazlowe, Snizzleblast</p>
      </div>

      <div class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Pathfinder</h3>
        <p class="mb-2 text-sm">Chaotic and eccentric names full of tribal rhythm.</p>
        <p class="text-sm"><strong>Examples:</strong> Zarf, Reta Bigbad, Poog of Zarongel</p>
      </div>

      <div class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Elder Scrolls (Cyrodiil Tribes)</h3>
        <p class="mb-2 text-sm">Minimal and role-based titles with behavioral focus.</p>
        <p class="text-sm"><strong>Examples:</strong> Chief Goblin, Shaman Goblin</p>
      </div>

      <div class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">The Witcher Universe</h3>
        <p class="mb-2 text-sm">Slavic-inspired dark names for goblin-like entities.</p>
        <p class="text-sm italic">Not goblin-heavy, but similar naming energy.</p>
      </div>

      <div class="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
        <h3 class="text-xl font-semibold mb-2">Magic: The Gathering</h3>
        <p class="mb-2 text-sm">Quirky, tribal goblins with puns and battle slang.</p>
        <p class="text-sm"><strong>Examples:</strong> Skirk Prospector, Mogg Fanatic, Krenko Mob Boss</p>
      </div>
    </div>
  </div>
</section>

<section class=" text-[#343a40] py-16 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">How to Make Goblin Names Memorable and Meaningful?</h2>
      <p class="text-lg sm:text-xl font-medium">
        A great goblin name sticks. It growls, it pops, and it belongs to the world you’ve built.
      </p>
    </div>

    <div class="space-y-8 text-base sm:text-lg leading-relaxed">
      <div>
        <h3 class="text-xl font-semibold mb-2">Start with Bold, Guttural Sounds</h3>
        <p>Use raw sounds like <strong>Gr</strong>, <strong>Sn</strong>, or <strong>Kr</strong>. These create a savage tone right from the start.</p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Keep It Short and Punchy</h3>
        <p>One or two syllables hit hardest—names like <strong>Grak</strong> or <strong>Snib</strong> feel immediate and memorable.</p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Match the Name to the Goblin’s Role</h3>
        <p><strong>Warriors</strong> need sharp tones. <strong>Shamans</strong> need eerie, drawn-out sounds. <strong>Tinkerers</strong> sound twitchy and clever.</p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Add Traits or Titles for Meaning</h3>
        <p>Layer identity with titles like <strong>the Rotgut</strong> or <strong>of Redfang</strong>. These tell a story in a single line.</p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Reflect Goblin Culture</h3>
        <p>Use common roots like <strong>Grub-</strong>, <strong>-fang</strong>, or <strong>-nob</strong> to build a sense of tribal tradition.</p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Test the Rhythm Out Loud</h3>
        <p>Say the name aloud. It should sound wild, bounce off your tongue, and feel like it belongs in chaos.</p>
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

export default GoblinNameGenerator;

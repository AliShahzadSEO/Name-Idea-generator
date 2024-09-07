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
    const Q1 = "What is the Goblin Name Generator?"
    const A1 = "The Goblin Name Generator is a tool designed to create unique and whimsical names for goblin characters. It is ideal for use in fantasy stories, games, and other creative projects, providing names that capture the mischievous and quirky essence of goblins."
    const Q2 = "Why Should I Use the Goblin Name Generator?"
    const A2 = "This tool simplifies the naming process, providing diverse, fitting options that capture the playful essence of goblins. Enhance your projects with unique, character-rich names effortlessly."
    const Q3 = "What Are the Benefits of Using This Tool?"
    const A3 = "The Goblin Name Generator provides unique names with ease, thanks to its user-friendly and customizable interface. It ensures data security and privacy with advanced protection measures."
    const Q4 = "How I Can Enhance My Creativity With This Globin Name Generator?"
    const A4 = "The Goblin Name Generator fuels your creativity. It offers its users unique names that help craft memorable characters and enhance their stories, games, and projects with a distinctive touch. Try it now to boost your level of creativity!"
    const Q5 = "Is the Goblin Name Generator Free to Use?"
    const A5 = "Yes, the Goblin Name Generator is available for free. You can access and use the tool without any cost, allowing you to generate as many names as you need for your creative projects."


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
                        <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
                            About Us
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        The Goblin Name Generator is designed to provide a streamlined solution for creating unique and humorous names for your goblin characters. 
                        Whether you're crafting a fantasy story or developing a game, our tool enhances your creativity with names that capture the essence of goblin mischief and greed.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        This goblin names generator produces names with a distinct, guttural quality, featuring sharp consonants that evoke the mischievous and magical nature of goblins. 
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        With our funny goblin name generator tool, you can quickly and easily generate names that add depth and personality to your projects, ensuring your goblin characters truly stand out in any fictional universe.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Goblin Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Just follow these easy steps to use our Goblin Name Generator and find the perfect name for your characters. 
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1: Access the Generator
                            </h3>
                            <p>
                            Navigate to the website hosting the Goblin Name Generator tool using your preferred web browser.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2: Input Your Requirements
                            </h3>
                            <p>
                            Enter the required criteria into the tool’s input fields. This may include preferences for gender or any particular characteristics the tool demands.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3: Generate Goblin Names
                            </p>
                            <p>
                            Click the <b> "Generate"</b> button to initiate the name-generation. The tool will display a list of goblin names based on your input. Review the list and select the name that best meets your needs.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="gobline1.jpg"
                            alt=""
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="gobline2.jpg"
                            alt=""
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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

            <div class="w-[80%] mx-auto text-[#343a40] my-[30px]">
                <div class="text-center mb-[10px]">
                    <h2 class="sm:text-[36px] text-[22px] font-semibold mb-4">
                    Why Choose Our Goblin Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Here is a list of advantages that you can enjoy right after leveraging our online tool. Let’s see what all these benefits are:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Extensive Database of Names
                                </h3>
                                <p>
                                Our generator leverages a vast and diverse database of goblin names, ensuring that every name produced is unique and aligns with your creative needs. With a broad selection, 
                                you’re guaranteed to find a name that perfectly fits the quirky and mischievous nature of your goblin characters, no matter how specific your requirements are.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                User-Friendly Interface
                                </h3>
                                <p>
                                The Goblin Name Generator is designed with simplicity in mind. Its intuitive interface allows users to easily input their preferences without navigating complex menus or settings. 
                                Just enter the desired name style or characteristics, and the tool quickly generates a list of names, making the process smooth and straightforward.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Secure and Reliable
                                </h3>
                                <p>
                                We are committed to maintaining the highest standards of privacy and data security. Our Goblin Name Generator incorporates advanced security measures to safeguard your personal information. 
                                You can confidently use our tool knowing that your data is protected from unauthorized access and breaches.                            
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Versatile Applications
                                </h3>
                                <p>
                                Our Goblin Name Generator tool is designed for a wide range of applications, making it a valuable asset for various creative projects. 
                                Whether you are working on character creation, storytelling, or game development, the names generated are versatile and suitable for enhancing your creative endeavors.                                
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Instant Name Generation
                                </h3>
                                <p>
                                Our Goblin Name Generator provides instant results with just a single click. No need to wait or refresh endlessly—simply enter your preferences, and receive a list of goblin names in seconds. 
                                This speed and efficiency ensure you stay focused on your creative process without interruptions.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Regularly Updated Name Database
                                </h3>
                                <p>
                                Our Goblin Name Generator is continually enhanced with new and diverse names, ensuring you always have fresh options to choose from. 
                                The regularly updated database guarantees that the names you generate remain relevant and creative. All this provides your characters a unique edge in any story or game.                          
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="gobline3.jpg"
                            alt="Half-Elf"
                            class="w-[350px] my-[30px] h-[430px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="goblin4.jpg"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
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

export default GoblinNameGenerator;

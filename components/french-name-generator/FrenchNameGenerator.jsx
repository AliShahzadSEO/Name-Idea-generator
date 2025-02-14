"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Pierre", detail: "Meaning stone, symbolizing strength and stability.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Jacques", detail: "Meaning supplanter, symbolizing resilience and determination.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Louis", detail: "Meaning famous warrior, symbolizing leadership and courage.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Henri", detail: "Meaning ruler of the home, symbolizing strength and leadership.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Michel", detail: "Meaning who is like God, symbolizing wisdom and purity.", status: false, gender: "Male", type: "Traditional French" },
    { name: "François", detail: "Meaning Frenchman, symbolizing national pride and loyalty.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Jean", detail: "Meaning God is gracious, symbolizing spirituality and kindness.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Charles", detail: "Meaning free man, symbolizing independence and strength.", status: false, gender: "Male", type: "Traditional French" },
    { name: "René", detail: "Meaning reborn, symbolizing new beginnings and resilience.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Gérard", detail: "Meaning rule of the spear, symbolizing leadership and strength.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Bernard", detail: "Meaning brave as a bear, symbolizing courage and protection.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Étienne", detail: "Meaning crown, symbolizing honor and royalty.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Luc", detail: "Meaning light, symbolizing clarity and wisdom.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Robert", detail: "Meaning bright fame, symbolizing recognition and success.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Alain", detail: "Meaning rock or harmony, symbolizing steadfastness and peace.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Claude", detail: "Meaning lame, symbolizing resilience despite challenges.", status: false, gender: "Male", type: "Traditional French" },
    { name: "André", detail: "Meaning manly, symbolizing strength and courage.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Marcel", detail: "Meaning little warrior, symbolizing determination and protection.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Georges", detail: "Meaning farmer, symbolizing growth and sustenance.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Pierre-Louis", detail: "A combination of Pierre and Louis, symbolizing both strength and royalty.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Thierry", detail: "Meaning ruler of the people, symbolizing leadership and responsibility.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Olivier", detail: "Meaning olive tree, symbolizing peace and endurance.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Dominique", detail: "Meaning belonging to the Lord, symbolizing spirituality and grace.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Gérard", detail: "Meaning rule of the spear, symbolizing leadership and strength.", status: false, gender: "Male", type: "Traditional French" },
    { name: "Marie", detail: "Meaning bitter, symbolizing purity and grace.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Jeanne", detail: "Meaning God is gracious, symbolizing spirituality and kindness.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Claire", detail: "Meaning bright or clear, symbolizing clarity and light.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Sophie", detail: "Meaning wisdom, symbolizing intelligence and enlightenment.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Madeleine", detail: "Meaning high tower, symbolizing strength and resilience.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Isabelle", detail: "Meaning God is my oath, symbolizing spirituality and commitment.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Anne", detail: "Meaning gracious, symbolizing kindness and favor.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Catherine", detail: "Meaning pure, symbolizing innocence and clarity.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Lucie", detail: "Meaning light, symbolizing clarity and wisdom.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Margaux", detail: "Meaning pearl, symbolizing purity and beauty.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Nathalie", detail: "Meaning birthday of the Lord, symbolizing joy and celebration.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Monique", detail: "Meaning advisor, symbolizing wisdom and guidance.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Hélène", detail: "Meaning torch, symbolizing light and warmth.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Simone", detail: "Meaning listener, symbolizing attentiveness and understanding.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Françoise", detail: "Meaning free one, symbolizing independence and strength.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Jacqueline", detail: "Meaning supplanted, symbolizing resilience and grace.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Élise", detail: "Meaning consecrated to God, symbolizing spirituality and purity.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Amélie", detail: "Meaning hardworking, symbolizing dedication and perseverance.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Véronique", detail: "Meaning true image, symbolizing authenticity and truth.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Chantal", detail: "Meaning stone, symbolizing strength and resilience.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Louise", detail: "Meaning famous warrior, symbolizing strength and courage.", status: false, gender: "Female", type: "Traditional French" },
    { name: "Camille", detail: "Meaning young ceremonial attendant, symbolizing grace and service.", status: false, gender: "Female", type: "Traditional French" },
    { name: "René", detail: "Meaning reborn, symbolizing renewal and strength.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "André", detail: "Meaning manly, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Claude", detail: "Meaning lame, symbolizing resilience despite challenges.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Dominique", detail: "Meaning belonging to the Lord, symbolizing spirituality and grace.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Camille", detail: "Meaning young ceremonial attendant, symbolizing grace and service.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Charley", detail: "Meaning free man, symbolizing independence and strength.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Luc", detail: "Meaning light, symbolizing clarity and wisdom.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Stéphane", detail: "Meaning crown, symbolizing honor and royalty.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Alix", detail: "Meaning noble, symbolizing high status and virtue.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Maxime", detail: "Meaning greatest, symbolizing ambition and excellence.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Gabriel", detail: "Meaning God is my strength, symbolizing faith and resilience.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Morgan", detail: "Meaning sea circle, symbolizing calm and tranquility.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Alexis", detail: "Meaning protector, symbolizing safety and guardianship.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Noël", detail: "Meaning Christmas, symbolizing joy and celebration.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Cécile", detail: "Meaning blind, symbolizing deep perception and insight.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Jordan", detail: "Meaning to flow down, symbolizing tranquility and peace.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Charlie", detail: "Meaning free man, symbolizing independence and freedom.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Michaël", detail: "Meaning who is like God, symbolizing strength and wisdom.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Perrin", detail: "Meaning rock, symbolizing steadiness and resilience.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Max", detail: "Meaning greatest, symbolizing ambition and excellence.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Olivier", detail: "Meaning olive tree, symbolizing peace and endurance.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Jean-Claude", detail: "Combination of Jean and Claude, symbolizing light and resilience.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Frédéric", detail: "Meaning peaceful ruler, symbolizing leadership and peace.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Jérôme", detail: "Meaning sacred name, symbolizing holiness and strength.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Serge", detail: "Meaning servant, symbolizing humility and dedication.", status: false, gender: "Unisex", type: "Traditional French" },
  { name: "Lucas", detail: "Meaning light, symbolizing clarity and knowledge.", status: false, gender: "Male", type: "Modern French" },
  { name: "Gabriel", detail: "Meaning God is my strength, symbolizing faith and resilience.", status: false, gender: "Male", type: "Modern French" },
  { name: "Hugo", detail: "Meaning mind, intellect, symbolizing intelligence and power.", status: false, gender: "Male", type: "Modern French" },
  { name: "Léo", detail: "Meaning lion, symbolizing bravery and strength.", status: false, gender: "Male", type: "Modern French" },
  { name: "Nathan", detail: "Meaning gift from God, symbolizing divine favor and blessings.", status: false, gender: "Male", type: "Modern French" },
  { name: "Arthur", detail: "Meaning noble and courageous, symbolizing strength and honor.", status: false, gender: "Male", type: "Modern French" },
  { name: "Ethan", detail: "Meaning strong, symbolizing resilience and endurance.", status: false, gender: "Male", type: "Modern French" },
  { name: "Thomas", detail: "Meaning twin, symbolizing duality and balance.", status: false, gender: "Male", type: "Modern French" },
  { name: "Enzo", detail: "Meaning ruler of the household, symbolizing leadership and protection.", status: false, gender: "Male", type: "Modern French" },
  { name: "Louis", detail: "Meaning famous warrior, symbolizing bravery and honor.", status: false, gender: "Male", type: "Modern French" },
  { name: "Maxime", detail: "Meaning greatest, symbolizing ambition and excellence.", status: false, gender: "Male", type: "Modern French" },
  { name: "Sacha", detail: "Meaning defender of the people, symbolizing protection and strength.", status: false, gender: "Male", type: "Modern French" },
  { name: "Valentin", detail: "Meaning strong, symbolizing power and vitality.", status: false, gender: "Male", type: "Modern French" },
  { name: "Julien", detail: "Meaning youthful, symbolizing vitality and growth.", status: false, gender: "Male", type: "Modern French" },
  { name: "Adrien", detail: "Meaning dark one, symbolizing mystery and depth.", status: false, gender: "Male", type: "Modern French" },
  { name: "Victor", detail: "Meaning conqueror, symbolizing victory and strength.", status: false, gender: "Male", type: "Modern French" },
  { name: "Pierre", detail: "Meaning rock, symbolizing steadiness and reliability.", status: false, gender: "Male", type: "Modern French" },
  { name: "Romain", detail: "Meaning Roman, symbolizing strength and unity.", status: false, gender: "Male", type: "Modern French" },
  { name: "Samuel", detail: "Meaning heard by God, symbolizing divine guidance and protection.", status: false, gender: "Male", type: "Modern French" },
  { name: "Florian", detail: "Meaning flowering, symbolizing beauty and growth.", status: false, gender: "Male", type: "Modern French" },
  { name: "Clément", detail: "Meaning merciful, symbolizing kindness and compassion.", status: false, gender: "Male", type: "Modern French" },
  { name: "Alexandre", detail: "Meaning defender of the people, symbolizing leadership and protection.", status: false, gender: "Male", type: "Modern French" },
  { name: "Baptiste", detail: "Meaning one who baptizes, symbolizing purity and renewal.", status: false, gender: "Male", type: "Modern French" },
  { name: "Paul", detail: "Meaning small, symbolizing humility and simplicity.", status: false, gender: "Male", type: "Modern French" },
  { name: "Martin", detail: "Meaning of Mars, symbolizing strength and determination.", status: false, gender: "Male", type: "Modern French" },
  { name: "Léa", detail: "Meaning weary, symbolizing resilience and perseverance.", status: false, gender: "Female", type: "Modern French" },
  { name: "Chloé", detail: "Meaning green shoot, symbolizing growth and new beginnings.", status: false, gender: "Female", type: "Modern French" },
  { name: "Emma", detail: "Meaning whole or universal, symbolizing completeness and harmony.", status: false, gender: "Female", type: "Modern French" },
  { name: "Jade", detail: "Meaning precious stone, symbolizing beauty and grace.", status: false, gender: "Female", type: "Modern French" },
  { name: "Lola", detail: "Meaning strong woman, symbolizing power and independence.", status: false, gender: "Female", type: "Modern French" },
  { name: "Camille", detail: "Meaning servant of the temple, symbolizing spirituality and devotion.", status: false, gender: "Female", type: "Modern French" },
  { name: "Manon", detail: "Meaning little woman, symbolizing delicacy and charm.", status: false, gender: "Female", type: "Modern French" },
  { name: "Alice", detail: "Meaning noble or exalted, symbolizing grace and elegance.", status: false, gender: "Female", type: "Modern French" },
  { name: "Louise", detail: "Meaning famous warrior, symbolizing bravery and strength.", status: false, gender: "Female", type: "Modern French" },
  { name: "Clara", detail: "Meaning bright or clear, symbolizing clarity and intelligence.", status: false, gender: "Female", type: "Modern French" },
  { name: "Zoé", detail: "Meaning life, symbolizing vitality and energy.", status: false, gender: "Female", type: "Modern French" },
  { name: "Inès", detail: "Meaning pure, symbolizing innocence and beauty.", status: false, gender: "Female", type: "Modern French" },
  { name: "Lucie", detail: "Meaning light, symbolizing illumination and guidance.", status: false, gender: "Female", type: "Modern French" },
  { name: "Juliette", detail: "Meaning youthful, symbolizing joy and vitality.", status: false, gender: "Female", type: "Modern French" },
  { name: "Mila", detail: "Meaning gracious or dear, symbolizing kindness and affection.", status: false, gender: "Female", type: "Modern French" },
  { name: "Eva", detail: "Meaning life, symbolizing vitality and renewal.", status: false, gender: "Female", type: "Modern French" },
  { name: "Sarah", detail: "Meaning princess, symbolizing beauty and royalty.", status: false, gender: "Female", type: "Modern French" },
  { name: "Agathe", detail: "Meaning good, symbolizing kindness and purity.", status: false, gender: "Female", type: "Modern French" },
  { name: "Léonie", detail: "Meaning lioness, symbolizing strength and courage.", status: false, gender: "Female", type: "Modern French" },
  { name: "Elsa", detail: "Meaning pledged to God, symbolizing faith and devotion.", status: false, gender: "Female", type: "Modern French" },
  { name: "Anaïs", detail: "Meaning graceful, symbolizing beauty and elegance.", status: false, gender: "Female", type: "Modern French" },
  { name: "Pauline", detail: "Meaning small, symbolizing humility and simplicity.", status: false, gender: "Female", type: "Modern French" },
  { name: "Rose", detail: "Meaning flower, symbolizing beauty and love.", status: false, gender: "Female", type: "Modern French" },
  { name: "Margaux", detail: "Meaning pearl, symbolizing rarity and elegance.", status: false, gender: "Female", type: "Modern French" },
  { name: "Audrey", detail: "Meaning noble strength, symbolizing power and resilience.", status: false, gender: "Female", type: "Modern French" },
  { name: "Camille", detail: "Meaning servant of the temple, symbolizing spirituality and devotion.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Maxime", detail: "Meaning greatest, symbolizing strength and excellence.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Sacha", detail: "Meaning defender of mankind, symbolizing protection and courage.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Alexis", detail: "Meaning helper, symbolizing kindness and support.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Jordan", detail: "Meaning to flow down, symbolizing peace and tranquility.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Charlie", detail: "Meaning free man, symbolizing independence and strength.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Morgan", detail: "Meaning sea-born, symbolizing nature and freedom.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Lou", detail: "Meaning light, symbolizing clarity and guidance.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Noah", detail: "Meaning rest, symbolizing peace and serenity.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Roméo", detail: "Meaning pilgrim to Rome, symbolizing devotion and passion.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Eden", detail: "Meaning paradise, symbolizing beauty and serenity.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Gaël", detail: "Meaning joyful, symbolizing happiness and positivity.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Léo", detail: "Meaning lion, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Evan", detail: "Meaning young warrior, symbolizing bravery and determination.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Léandro", detail: "Meaning lion-man, symbolizing power and leadership.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Amory", detail: "Meaning brave, symbolizing courage and strength.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Louane", detail: "Meaning light, symbolizing warmth and enlightenment.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Salomé", detail: "Meaning peace, symbolizing tranquility and harmony.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Milan", detail: "Meaning gracious, symbolizing kindness and generosity.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Violette", detail: "Meaning violet flower, symbolizing beauty and elegance.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Lucien", detail: "Meaning light, symbolizing enlightenment and clarity.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Léandro", detail: "Meaning lion-man, symbolizing power and leadership.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Mathis", detail: "Meaning gift of God, symbolizing blessing and grace.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Maëlys", detail: "Meaning prince, symbolizing strength and nobility.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Alex", detail: "Meaning defender of the people, symbolizing protection and courage.", status: false, gender: "Unisex", type: "Modern French" },
  { name: "Théo", detail: "Meaning gift of God, symbolizing a blessing and divine protection.", status: false, gender: "Male", type: "Unique French" },
  { name: "Ilyas", detail: "Meaning the Lord is my God, symbolizing faith and strength.", status: false, gender: "Male", type: "Unique French" },
  { name: "Aymeric", detail: "Meaning home ruler, symbolizing leadership and authority.", status: false, gender: "Male", type: "Unique French" },
  { name: "Alaric", detail: "Meaning ruler of all, symbolizing power and sovereignty.", status: false, gender: "Male", type: "Unique French" },
  { name: "Léonard", detail: "Meaning brave lion, symbolizing courage and leadership.", status: false, gender: "Male", type: "Unique French" },
  { name: "Séraphin", detail: "Meaning burning one, symbolizing purity and divine light.", status: false, gender: "Male", type: "Unique French" },
  { name: "Augustin", detail: "Meaning sacred and venerable, symbolizing honor and wisdom.", status: false, gender: "Male", type: "Unique French" },
  { name: "Timothée", detail: "Meaning honoring God, symbolizing reverence and devotion.", status: false, gender: "Male", type: "Unique French" },
  { name: "Marceau", detail: "Meaning little warrior, symbolizing strength and protection.", status: false, gender: "Male", type: "Unique French" },
  { name: "Côme", detail: "Meaning noble, symbolizing dignity and high rank.", status: false, gender: "Male", type: "Unique French" },
  { name: "Gaspard", detail: "Meaning treasurer, symbolizing wealth and generosity.", status: false, gender: "Male", type: "Unique French" },
  { name: "Firmin", detail: "Meaning steadfast, symbolizing strength and resilience.", status: false, gender: "Male", type: "Unique French" },
  { name: "Tanguy", detail: "Meaning fire of God, symbolizing passion and divine energy.", status: false, gender: "Male", type: "Unique French" },
  { name: "Josselin", detail: "Meaning little Gothic, symbolizing elegance and heritage.", status: false, gender: "Male", type: "Unique French" },
  { name: "Florent", detail: "Meaning flowering, symbolizing beauty and growth.", status: false, gender: "Male", type: "Unique French" },
  { name: "Silvain", detail: "Meaning forest, symbolizing nature and tranquility.", status: false, gender: "Male", type: "Unique French" },
  { name: "Axel", detail: "Meaning father of peace, symbolizing harmony and serenity.", status: false, gender: "Male", type: "Unique French" },
  { name: "Romain", detail: "Meaning from Rome, symbolizing history and strength.", status: false, gender: "Male", type: "Unique French" },
  { name: "Gildas", detail: "Meaning servant of God, symbolizing faith and service.", status: false, gender: "Male", type: "Unique French" },
  { name: "Ézéchiel", detail: "Meaning God will strengthen, symbolizing resilience and divine protection.", status: false, gender: "Male", type: "Unique French" },
  { name: "Ludovic", detail: "Meaning famous warrior, symbolizing courage and strength.", status: false, gender: "Male", type: "Unique French" },
  { name: "Yvan", detail: "Meaning God is gracious, symbolizing divine favor and grace.", status: false, gender: "Male", type: "Unique French" },
  { name: "Achille", detail: "Meaning pain and strength, symbolizing endurance and victory.", status: false, gender: "Male", type: "Unique French" },
  { name: "Noé", detail: "Meaning rest, symbolizing peace and renewal.", status: false, gender: "Male", type: "Unique French" },
  { name: "Barthélemy", detail: "Meaning son of the furrows, symbolizing growth and harvest.", status: false, gender: "Male", type: "Unique French" },
  { name: "Amélie", detail: "Meaning hardworking, symbolizing diligence and perseverance.", status: false, gender: "Female", type: "Unique French" },
  { name: "Aurore", detail: "Meaning dawn, symbolizing new beginnings and hope.", status: false, gender: "Female", type: "Unique French" },
  { name: "Ninon", detail: "Meaning grace, symbolizing elegance and charm.", status: false, gender: "Female", type: "Unique French" },
  { name: "Léonie", detail: "Meaning lioness, symbolizing strength and courage.", status: false, gender: "Female", type: "Unique French" },
  { name: "Elvire", detail: "Meaning truth, symbolizing honesty and clarity.", status: false, gender: "Female", type: "Unique French" },
  { name: "Apolline", detail: "Meaning of Apollo, symbolizing beauty and light.", status: false, gender: "Female", type: "Unique French" },
  { name: "Solène", detail: "Meaning solemn, symbolizing seriousness and respect.", status: false, gender: "Female", type: "Unique French" },
  { name: "Violette", detail: "Meaning purple, symbolizing elegance and delicacy.", status: false, gender: "Female", type: "Unique French" },
  { name: "Sidonie", detail: "Meaning from Sidon, symbolizing heritage and culture.", status: false, gender: "Female", type: "Unique French" },
  { name: "Isabeau", detail: "Meaning pledged to God, symbolizing devotion and faith.", status: false, gender: "Female", type: "Unique French" },
  { name: "Céleste", detail: "Meaning heavenly, symbolizing purity and divinity.", status: false, gender: "Female", type: "Unique French" },
  { name: "Olympe", detail: "Meaning from Mount Olympus, symbolizing greatness and power.", status: false, gender: "Female", type: "Unique French" },
  { name: "Laurette", detail: "Meaning laurel, symbolizing victory and honor.", status: false, gender: "Female", type: "Unique French" },
  { name: "Albane", detail: "Meaning white, symbolizing purity and clarity.", status: false, gender: "Female", type: "Unique French" },
  { name: "Philomène", detail: "Meaning lover of strength, symbolizing courage and passion.", status: false, gender: "Female", type: "Unique French" },
  { name: "Adélaïde", detail: "Meaning noble, symbolizing dignity and high rank.", status: false, gender: "Female", type: "Unique French" },
  { name: "Adeline", detail: "Meaning noble, symbolizing grace and strength.", status: false, gender: "Female", type: "Unique French" },
  { name: "Mélisande", detail: "Meaning strong in work, symbolizing determination and resilience.", status: false, gender: "Female", type: "Unique French" },
  { name: "Éléonore", detail: "Meaning shining light, symbolizing wisdom and enlightenment.", status: false, gender: "Female", type: "Unique French" },
  { name: "Camille", detail: "Meaning young ceremonial attendant, symbolizing devotion and service.", status: false, gender: "Female", type: "Unique French" },
  { name: "Cinthia", detail: "Meaning moon goddess, symbolizing femininity and grace.", status: false, gender: "Female", type: "Unique French" },
  { name: "Anneliese", detail: "Meaning grace, symbolizing beauty and charm.", status: false, gender: "Female", type: "Unique French" },
  { name: "Maëva", detail: "Meaning welcome, symbolizing kindness and warmth.", status: false, gender: "Female", type: "Unique French" },
  { name: "Ysolde", detail: "Meaning ice ruler, symbolizing strength and resilience.", status: false, gender: "Female", type: "Unique French" },
  { name: "Clémence", detail: "Meaning mercy, symbolizing compassion and kindness.", status: false, gender: "Female", type: "Unique French" },
  { name: "Jules", detail: "Meaning youthful, symbolizing energy and freshness.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Andréa", detail: "Meaning manly, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Léo", detail: "Meaning lion, symbolizing bravery and leadership.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Célestin", detail: "Meaning heavenly, symbolizing purity and grace.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Octave", detail: "Meaning eighth, symbolizing balance and harmony.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Morgan", detail: "Meaning sea-born, symbolizing adaptability and fluidity.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Valentin", detail: "Meaning strong, symbolizing love and devotion.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Maël", detail: "Meaning chief, symbolizing leadership and wisdom.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Ange", detail: "Meaning angel, symbolizing purity and guidance.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Elie", detail: "Meaning my God, symbolizing faith and strength.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Romain", detail: "Meaning from Rome, symbolizing power and civilization.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Sacha", detail: "Meaning defender, symbolizing protection and strength.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Samy", detail: "Meaning elevated, symbolizing respect and admiration.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Clovis", detail: "Meaning famous battle, symbolizing courage and leadership.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Matisse", detail: "Meaning gift of God, symbolizing grace and creativity.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Louison", detail: "Meaning renowned warrior, symbolizing valor and honor.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Evann", detail: "Meaning youth, symbolizing vitality and vigor.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Eden", detail: "Meaning paradise, symbolizing beauty and tranquility.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Eulalie", detail: "Meaning well-spoken, symbolizing eloquence and grace.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Azur", detail: "Meaning blue sky, symbolizing clarity and peace.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Léandre", detail: "Meaning lion-man, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Théophile", detail: "Meaning lover of God, symbolizing devotion and spirituality.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Roméo", detail: "Meaning pilgrim to Rome, symbolizing passion and devotion.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Gaspard", detail: "Meaning treasure bearer, symbolizing wealth and strength.", status: false, gender: "Unisex", type: "Unique French" },
  { name: "Violette", detail: "Meaning purple, symbolizing elegance and delicacy.", status: false, gender: "Unisex", type: "Unique French" }
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
      name: "Kingdom Name Generator",
      pic: "/kingdom-name-generator.jpeg",
      link: "https://www.nameideagenerator.com/kingdom-name-generator",
  },
  {
      name: "Greek Name Generator",
      pic: "/greek.webp",
      link: "https://www.nameideagenerator.com/greek-name-generator",
  },
  {
      name: "Chinese Name Generator",
      pic: "/chinese-name-generator.jpg",
      link: "https://www.nameideagenerator.com/chinese-name-generator",
  },
  {
      name: "Medieval Name Generator",
      pic: "/dark-fantasy-character-Medieval-Names.avif",
      link: "https://www.nameideagenerator.com/medieval-name-generator",
  },
  ];
  
  const FrenchNameGenerator = () => {
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
  
const bgImage = "/french-name-generator.avif"
const context = "French Name Generator with Meaning"
const Q1 = "How accurate are the meanings provided by the French Name Generator?"
const A1 = "Our tool ensures that each name is paired with an authentic and culturally relevant meaning, based on reliable sources. Whether you're looking for traditional or modern French names, you can trust the historical and cultural significance of the meanings provided."

const Q2 = "Can I generate both male and female French names?"
const A2 = "Yes, our tool allows you to filter results based on gender. You can easily select male, female, or unisex names, depending on your preference. Additionally, we offer a variety of names across different categories like traditional, modern, and unique."

const Q3 = "Can I generate multiple French names at once?"
const A3 = "Absolutely! With a single click, you can generate multiple French names, complete with their meanings, and explore various options quickly. This makes it easier to find the perfect name, whether for a baby, character, or creative project."

const Q4 = "Are the French names generated by the tool suitable for different purposes?"
const A4 = "Yes! Our French Name Generator is versatile. Whether you're looking for names for baby naming, character creation, or even a brand identity, our tool provides options that cater to all needs. You can choose from traditional, modern, or unique names to match your specific requirements."

const Q5 = "Can I explore famous French names using this tool?"
const A5 = "Yes! Our generator includes an option to explore names inspired by famous French historical figures and modern cultural icons, like Napoleon, Joan of Arc, and Marion Cotillard. You can get inspiration from these iconic names for your own projects or personal use."
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
        <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40]">Cultural and Historical Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/french-name-generator" className="hover:underline text-[#343a40]">French Name Generator with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            French Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender of French Name</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">UniSex</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Category of French Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Traditional French">Traditional</option>
              <option value="Modern French">Modern </option>
              <option value="Unique French">Unique </option>
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
            What Is a French Name?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            French names are timeless and sophisticated, reflecting the country’s rich history, language, and traditions. 
            They often carry meanings that reflect values, virtues, or connections to nature, religion, or mythology.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            What is French Name Generator?
              </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            A French Name Generator is an online tool that helps you quickly generate authentic French names, complete with their meanings. It allows you to choose names based on gender, 
            style, and cultural significance, making it perfect for baby naming, character creation, or any project requiring French-inspired names.
            <br />
            Our French Name Generator is designed to provide you with authentic and meaningful French names for personal or creative use. 
            From traditional to modern names, each suggestion comes with its gender and a brief description of its cultural significance.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            The Cultural Significance of French Names   
              </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            French names hold a deep cultural significance and are influenced by history, literature, and religion. 
            Many French names have biblical origins, while others come from Roman or Greek influences. 
            Choosing a French name is a way to embrace this cultural heritage, whether for personal use, storytelling, or character creation.
            </p>
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Choose a French Name Generator?
            </h2>
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Finding the perfect French name can be overwhelming. Our Name Idea Generator simplifies the process, 
            offering diverse features to ensure you discover a name that is meaningful, culturally authentic, and perfectly suited to your needs.
            </p>
            <hr />
            <br />
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[18px] text-[14px] font-semibold">
              Get a Wide Range of French Names in One Click
              </h3>
              <p>
              Our tool generates multiple <b>French names instantly</b>, saving you time and effort. 
              Whether you’re searching for names for a baby, a story character, or a creative project, our tool provides a variety of options in seconds.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[18px] text-[14px] font-semibold">
              Explore French Names by Gender and Category
              </h3>
              <p>
              Easily filter names based on: <br /><br />
              <ul>
                <li>- <b>Gender</b> – Male, Female, and Unisex options.</li>
                <li>- <b>Categories</b> – Traditional names with rich cultural roots, modern names for a trendy feel, or unique names to stand out.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[18px] text-[14px] font-semibold">
              Instant Name Generation with Authentic Meanings
              </h3>
              <p>
              Each name generated by our tool comes with its <b>authentic meaning</b>, ensuring relevance and connection to <b>French culture</b>. 
              Whether you’re drawn to biblical, historical, or nature-inspired names, our generator provides the context behind every suggestion.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[18px] text-[14px] font-semibold">
              Simplified Name Selection Process
              </h3>
              <p>
              Why spend hours searching for the right name? With just one click, you can access a curated list of French names, tailored to your preferences. 
              The Name Idea Generator takes the guesswork out of choosing a name and provides results in seconds.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[18px] text-[14px] font-semibold">
              Perfect for Various Uses
              </h3>
              <p>
              Our French Name Generator isn’t just for baby names; it’s ideal for: <br /><br />
              <ul>
                <li>- Naming fictional characters in books, movies, or games.</li>
                <li>- Rebranding or creating a new identity.</li>
                <li>- Exploring cultural heritage and meaningful names.</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the French Name Generator
          </h2>
          <p>
          Finding the perfect French name is easy with Name Idea Generator! Follow these easy steps to find the perfect name with meaningful insights:
          </p>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose the Gender <b> (Male, Female, UniSex)</b>:
              </h3>
              <p>
              Start by selecting the gender of the name you’re looking for. This helps the tool focus on names that fit your specific need. 
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Category<b> (Traditional, Modern, Unique)</b>:
              </h3>
              <p>
              Narrow down your search by choosing a specific category based on your preference.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: <b> Generate </b>Names Instantly
              </h3>
              <p>
              Click the <b> Generate </b>button and receive a list of beautifully crafted French names.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Explore Name Meanings
              </h3>
              <p>
              Delve into the meanings of the names. Learn what each syllable represents and how it contributes to the overall essence. 
              Whether it symbolizes strength, beauty, or intelligence, this step helps you connect with the names on a deeper level.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="french-name-generator.jpg"
              alt="french Name Generator Tool"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="fantasy-women-mythical-.avif"
              alt="french Name Generator Tool"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/fantasy-mythical-.avif")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to French Name Generator
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
          <b> Unique Features of Our French Name Generator</b>
          </h2>
          <p>
          This French Name Generator tool is crafted to offer more than just names. It blends cultural authenticity with modern flexibility, ensuring each result is meaningful and versatile.
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Cultural Authenticity: Names Rooted in Tradition
            </h3>
            <p>
            Our French Name Generator offers names that are deeply connected to French culture and heritage. 
            Each name is carefully curated to ensure it carries authentic meanings and reflects the elegance and history of France.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Name Generation: Quick and Easy 
            </h3>
            <p>
            Save time with our instant name generator that provides suggestions with just one click. 
            Whether you’re brainstorming for a baby name or a creative project, our tool delivers results instantly without any hassle.  
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Tailored Options for Every Need
            </h3>
            <p>
            Whether you’re looking for a traditional French name, something modern, or a name that’s uniquely creative, our tool has you covered. 
            Simply select your preferences, and the generator will provide personalized suggestions.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Perfect for Multiple Purposes
            </h3>
            <p>
            Our French names are versatile and suitable for various purposes. 
            Use them for baby naming, crafting characters for stories, or adding a French flair to any project. Whatever your need, our tool makes name selection simple and fun.
            </p>
            <br />
            <br />
            <h2 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
           <b> The Role of French Names in Personal and Professional Identity</b>
            </h2>
            <p>
            French names are more than just labels; they reflect identity, culture, and values. 
            Whether you’re naming a child, creating a fictional character, or rebranding yourself, a French name adds a touch of elegance and sophistication.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Categories of French Names You Can Generate
          </h2>
          <p>
          Our French Name Generator organizes names into easy-to-navigate categories, helping you find the perfect name for any occasion:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Traditional French Names: Rooted in Culture
              </h3>
              <p>
              Explore classic French names with deep historical and cultural significance. These timeless names reflect France’s rich heritage and are perfect for those seeking authenticity.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Modern French Names: Trendy and Contemporary
              </h3>
              <p>
              Discover trendy French names that resonate with today’s generation. These names combine elegance and modernity, making them ideal for a fresh and unique touch.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Unique French Names: Stand Out from the Crowd
              </h3>
              <p>
              If you’re looking for something extraordinary, our tool offers rare and creative French names that truly stand out. Perfect for those who want a name with a unique flair.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Types of Names by Gender
          </h2>
          <p>
          Our tool also caters to your preferences by offering names filtered by gender and versatility:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Male French Names: Strong and Timeless    
              </h3>
              <p>
              Choose from a variety of masculine French names that exude strength and tradition. Whether for a baby boy or a male character, these names are bold and impactful.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Female French Names: Elegant and Charming
              </h3>
              <p>
              Discover feminine French names that are both elegant and enchanting. These names are perfect for baby girls or female characters with a touch of grace.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Unisex French Names: Versatile and Modern
              </h3>
              <p>
              For a gender-neutral option, explore our collection of unisex French names. These versatile names suit any gender and add a modern twist to name selection.
              </p>
            </div>
              <br />
          </div>
        </div>
      </div>
      </div>
      <div className="w-[85%] mx-auto text-[#343a40] my-[50px] h-[110vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous French Names in History and Culture
          </h2>
          <p>
          Here are some iconic French names that have left a lasting impact on history and modern culture:
          </p>
        <hr />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Historical Figures
              </h3>
              <p>
              Discover timeless French names inspired by influential historical figures:
                <ul>
                <li>- <b>Napoleon  </b> – A legendary military leader and emperor.</li>
                <li>- <b>Joan of Arc (Jeanne d'Arc)</b> – A heroic figure and saint in French history.</li>
                <li>- <b>Victor Hugo </b> – Renowned author of Les Misérables and The Hunchback of Notre-Dame.</li>
                <li>- <b>Marie Curie</b> – Pioneering physicist and chemist who made groundbreaking discoveries.</li>
                <li>- <b>Louis XIV</b> – Known as the "Sun King," a prominent French monarch.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Modern Cultural Icons
              </h3>
              <p>
              Get inspired by French names associated with modern cultural icons:
              <ul>
                <li>- <b>Marion Cotillard: </b> – Academy Award-winning actress known for her role in La Vie en Rose.</li>
                <li>- <b>Omar Sy:</b>– Popular actor from Lupin and The Intouchables</li>
                <li>- <b>Audrey Tautou:</b> – Beloved actress famous for Amélie.</li>
                <li>- <b>Zinedine Zidane:</b> – Legendary footballer and coach.</li>
                <li>- <b>Vanessa Paradis:</b> – Iconic singer, model, and actress.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Unique French Names
              </h3>
              <p>
              For those looking for names that stand out, explore rare and unique French names that offer individuality and creativity:
              <ul>
                <li>- <b>Amélie:</b> –  A whimsical and charming name, popularized by the film Amélie.</li>
                <li>- <b>Éloise:</b>– A refined, yet uncommon name with a touch of classic elegance</li>
                <li>- <b>Gaspard:</b> – A unique and distinguished French name, often associated with historical figures.</li>
                <li>- <b>Solène:</b> – A rare name, evoking grace and sophistication.</li>
                <li>- <b>Blaise:</b> – A unique and bold name with historical roots, meaning "lisping" or "stammering" in French.</li>
              </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="how-did-napoleon-bonaparte-became-a-hero-in-france-1.png"
              alt="french Name Generator Tool"
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

export default FrenchNameGenerator;

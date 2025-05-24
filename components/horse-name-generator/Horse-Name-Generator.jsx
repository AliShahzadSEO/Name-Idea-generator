"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Sir Gallant", detail: "Noble and chivalrous.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Sterling", detail: "Refined and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Baron Blaze", detail: "Elegant and fiery.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Prince Orion", detail: "Regal and majestic.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lord Ember", detail: "Graceful with a warm presence.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Admiral Frost", detail: "Sleek and cool.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Count Valor", detail: "Brave and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Earl Charcoal", detail: "Sophisticated and dignified.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Thunder", detail: "Commanding and powerful.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Baron Eclipse", detail: "Mysterious and elegant.", status: false, gender: "male", type: "elegant_horse" },
    { name: "King Sterling", detail: "Royal and refined.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Sir Orion", detail: "Noble and majestic.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lord Radiance", detail: "Shining and illustrious.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Crest", detail: "Noble and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Prince Nightfall", detail: "Elegant with a touch of mystery.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Baron Regal", detail: "Dignified and commanding.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Earl Thunderbolt", detail: "Dynamic and striking.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Admiral Twilight", detail: "Majestic and serene.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Count Phoenix", detail: "Resilient and noble.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lord Vortex", detail: "Powerful and captivating.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Sir Ascent", detail: "Elevated and refined.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Dusk", detail: "Elegant with a twilight touch.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Baron Harmony", detail: "Balanced and sophisticated.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Prince Valor", detail: "Brave and dignified.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Count Horizon", detail: "Expansive and noble.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Earl Blaze", detail: "Fiery and elegant.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lord Zephyr", detail: "Gentle and graceful.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Eclipse", detail: "Elegant and mysterious.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Sir Crest", detail: "Noble and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Baron Radiance", detail: "Illustrious and refined.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Admiral Valor", detail: "Brave and commanding.", status: false, gender: "male", type: "elegant_horse" },
    { name: "King Vortex", detail: "Majestic and captivating.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Prince Frost", detail: "Cool and regal.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lord Zenith", detail: "Pinnacle of elegance.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Nimbus", detail: "Light and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Baron Ascent", detail: "Elevated and noble.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Earl Ember", detail: "Warm and sophisticated.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Count Thunder", detail: "Dynamic and refined.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Admiral Harmony", detail: "Balanced and graceful.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Sir Phoenix", detail: "Resilient and noble.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Radiance", detail: "Shining and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lord Twilight", detail: "Elegant with a serene touch.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Prince Horizon", detail: "Expansive and noble.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Baron Zenith", detail: "Pinnacle of grace.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Earl Crest", detail: "Noble and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Count Frost", detail: "Cool and regal.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Duke Valor", detail: "Brave and distinguished.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lord Nimbus", detail: "Light and noble.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Sir Eclipse", detail: "Elegant and mysterious.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Admiral Nightfall", detail: "Majestic with a touch of night.", status: false, gender: "male", type: "elegant_horse" },
    { name: "Lady Aurora", detail: "Elegant and radiant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Belle", detail: "Graceful and beautiful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Star", detail: "Bright and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Ember", detail: "Warm and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Celeste", detail: "Elegant and celestial.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Luna", detail: "Regal and serene.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Baroness Grace", detail: "Sophisticated and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Radiance", detail: "Shining and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Sapphire", detail: "Elegant and precious.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Eclipse", detail: "Mysterious and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Twilight", detail: "Majestic with a touch of twilight.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Aurora", detail: "Radiant and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Serene", detail: "Calm and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Harmony", detail: "Balanced and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Star", detail: "Bright and elegant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Celeste", detail: "Celestial and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Blaze", detail: "Fiery and majestic.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Twilight", detail: "Elegant with a twilight touch.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Baroness Luna", detail: "Serene and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Radiance", detail: "Shining and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Zephyr", detail: "Gentle and elegant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Belle", detail: "Beautiful and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Phoenix", detail: "Resilient and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Grace", detail: "Sophisticated and elegant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Frost", detail: "Cool and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Aurora", detail: "Radiant and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Harmony", detail: "Balanced and elegant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Baroness Star", detail: "Bright and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Celeste", detail: "Celestial and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Zephyr", detail: "Gentle and elegant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Blaze", detail: "Fiery and sophisticated.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Vortex", detail: "Captivating and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Ember", detail: "Warm and majestic.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Twilight", detail: "Elegant with a twilight touch.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Sapphire", detail: "Precious and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Radiance", detail: "Shining and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Harmony", detail: "Balanced and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Serenity", detail: "Calm and elegant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Star", detail: "Bright and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Vortex", detail: "Captivating and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Ember", detail: "Warm and majestic.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Celeste", detail: "Celestial and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Belle", detail: "Beautiful and distinguished.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Radiance", detail: "Shining and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Luna", detail: "Serene and elegant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Duchess Zephyr", detail: "Gentle and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Queen Star", detail: "Bright and majestic.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Princess Grace", detail: "Sophisticated and refined.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Lady Aurora", detail: "Elegant and radiant.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Countess Phoenix", detail: "Resilient and graceful.", status: false, gender: "female", type: "elegant_horse" },
    { name: "Storm Chaser", detail: "Adventurous and daring.", status: false, gender: "male", type: "wild_horse" },
      { name: "Thunderbolt", detail: "Powerful and electrifying.", status: false, gender: "male", type: "wild_horse" },
      { name: "Canyon Runner", detail: "Fast and rugged.", status: false, gender: "male", type: "wild_horse" },
      { name: "Maverick Blaze", detail: "Independent and fiery.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rocky Ridge", detail: "Sturdy and dependable.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rebel Spirit", detail: "Bold and untamed.", status: false, gender: "male", type: "wild_horse" },
      { name: "Wildfire", detail: "Intense and unstoppable.", status: false, gender: "male", type: "wild_horse" },
      { name: "Mustang Storm", detail: "Wild and powerful.", status: false, gender: "male", type: "wild_horse" },
      { name: "Blaze Fury", detail: "Fiery and fierce.", status: false, gender: "male", type: "wild_horse" },
      { name: "Storm Rider", detail: "Adventurous and strong.", status: false, gender: "male", type: "wild_horse" },
      { name: "Thunder Clash", detail: "Powerful and impactful.", status: false, gender: "male", type: "wild_horse" },
      { name: "Canyon Blaze", detail: "Intense and rugged.", status: false, gender: "male", type: "wild_horse" },
      { name: "Maverick Thunder", detail: "Bold and powerful.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rocky Thunder", detail: "Strong and commanding.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rebel Blaze", detail: "Fiery and independent.", status: false, gender: "male", type: "wild_horse" },
      { name: "Wild Spirit", detail: "Untamed and free-spirited.", status: false, gender: "male", type: "wild_horse" },
      { name: "Mustang Fury", detail: "Powerful and fierce.", status: false, gender: "male", type: "wild_horse" },
      { name: "Blaze Chaser", detail: "Fiery and determined.", status: false, gender: "male", type: "wild_horse" },
      { name: "Storm Fury", detail: "Intense and powerful.", status: false, gender: "male", type: "wild_horse" },
      { name: "Thunder Trail", detail: "Dynamic and adventurous.", status: false, gender: "male", type: "wild_horse" },
      { name: "Canyon Maverick", detail: "Bold and rugged.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rebel Storm", detail: "Bold and powerful.", status: false, gender: "male", type: "wild_horse" },
      { name: "Wild Blaze", detail: "Fiery and untamed.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rocky Storm", detail: "Strong and fierce.", status: false, gender: "male", type: "wild_horse" },
      { name: "Mustang Runner", detail: "Fast and rugged.", status: false, gender: "male", type: "wild_horse" },
      { name: "Blaze Rider", detail: "Fiery and adventurous.", status: false, gender: "male", type: "wild_horse" },
      { name: "Thunder Fury", detail: "Powerful and fierce.", status: false, gender: "male", type: "wild_horse" },
      { name: "Storm Maverick", detail: "Bold and adventurous.", status: false, gender: "male", type: "wild_horse" },
      { name: "Canyon Rider", detail: "Rugged and strong.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rebel Ridge", detail: "Bold and unyielding.", status: false, gender: "male", type: "wild_horse" },
      { name: "Wild Thunder", detail: "Powerful and untamed.", status: false, gender: "male", type: "wild_horse" },
      { name: "Mustang Chaser", detail: "Adventurous and determined.", status: false, gender: "male", type: "wild_horse" },
      { name: "Blaze Rider", detail: "Fiery and strong.", status: false, gender: "male", type: "wild_horse" },
      { name: "Thunder Spirit", detail: "Powerful and free-spirited.", status: false, gender: "male", type: "wild_horse" },
      { name: "Canyon Fury", detail: "Rugged and fierce.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rebel Runner", detail: "Bold and swift.", status: false, gender: "male", type: "wild_horse" },
      { name: "Wildfire Fury", detail: "Intense and unstoppable.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rocky Runner", detail: "Sturdy and fast.", status: false, gender: "male", type: "wild_horse" },
      { name: "Maverick Storm", detail: "Bold and powerful.", status: false, gender: "male", type: "wild_horse" },
      { name: "Blaze Trail", detail: "Fiery and adventurous.", status: false, gender: "male", type: "wild_horse" },
      { name: "Thunder Chaser", detail: "Dynamic and determined.", status: false, gender: "male", type: "wild_horse" },
      { name: "Canyon Spirit", detail: "Rugged and free-spirited.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rebel Blaze", detail: "Fiery and bold.", status: false, gender: "male", type: "wild_horse" },
      { name: "Wild Trail", detail: "Adventurous and untamed.", status: false, gender: "male", type: "wild_horse" },
      { name: "Mustang Blaze", detail: "Fiery and powerful.", status: false, gender: "male", type: "wild_horse" },
      { name: "Storm Ridge", detail: "Strong and adventurous.", status: false, gender: "male", type: "wild_horse" },
      { name: "Blaze Thunder", detail: "Fiery and electrifying.", status: false, gender: "male", type: "wild_horse" },
      { name: "Rocky Fury", detail: "Strong and fierce.", status: false, gender: "male", type: "wild_horse" },
      { name: "Thunder Rider", detail: "Powerful and adventurous.", status: false, gender: "male", type: "wild_horse" },
      { name: "Canyon Blaze", detail: "Intense and rugged.", status: false, gender: "male", type: "wild_horse" },
      { name: "Wildflower", detail: "Delicate and beautiful.", status: false, gender: "female", type: "wild_horse" },
      { name: "Stormy Sky", detail: "Wild and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Phoenix Ember", detail: "Resilient and fiery.", status: false, gender: "female", type: "wild_horse" },
      { name: "Canyon Breeze", detail: "Gentle and free-spirited.", status: false, gender: "female", type: "wild_horse" },
      { name: "Rebel Dawn", detail: "Bold and new beginnings.", status: false, gender: "female", type: "wild_horse" },
      { name: "Misty Moon", detail: "Mysterious and serene.", status: false, gender: "female", type: "wild_horse" },
      { name: "Thunderstorm", detail: "Powerful and wild.", status: false, gender: "female", type: "wild_horse" },
      { name: "Blaze Whisper", detail: "Fiery and subtle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Wildwind", detail: "Free and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Meadow Storm", detail: "Strong and natural.", status: false, gender: "female", type: "wild_horse" },
      { name: "Phoenix Dawn", detail: "New beginnings and resilience.", status: false, gender: "female", type: "wild_horse" },
      { name: "Stormy Blaze", detail: "Fiery and adventurous.", status: false, gender: "female", type: "wild_horse" },
      { name: "Rebel Moon", detail: "Bold and serene.", status: false, gender: "female", type: "wild_horse" },
      { name: "Canyon Whisper", detail: "Gentle and mysterious.", status: false, gender: "female", type: "wild_horse" },
      { name: "Misty Thunder", detail: "Mysterious and powerful.", status: false, gender: "female", type: "wild_horse" },
      { name: "Wild Dawn", detail: "Fresh and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Blaze Moon", detail: "Fiery and serene.", status: false, gender: "female", type: "wild_horse" },
      { name: "Thunder Breeze", detail: "Powerful and gentle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Phoenix Sky", detail: "Resilient and expansive.", status: false, gender: "female", type: "wild_horse" },
      { name: "Storm Whisper", detail: "Powerful and subtle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Rebel Breeze", detail: "Bold and gentle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Canyon Dawn", detail: "Fresh and rugged.", status: false, gender: "female", type: "wild_horse" },
      { name: "Meadow Blaze", detail: "Natural and fiery.", status: false, gender: "female", type: "wild_horse" },
      { name: "Wildstorm", detail: "Powerful and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Misty Breeze", detail: "Mysterious and gentle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Thunderwild", detail: "Powerful and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Blaze Sky", detail: "Fiery and expansive.", status: false, gender: "female", type: "wild_horse" },
      { name: "Rebel Whisper", detail: "Bold and subtle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Canyon Ember", detail: "Rugged and fiery.", status: false, gender: "female", type: "wild_horse" },
      { name: "Phoenix Storm", detail: "Resilient and powerful.", status: false, gender: "female", type: "wild_horse" },
      { name: "Stormy Ember", detail: "Fiery and intense.", status: false, gender: "female", type: "wild_horse" },
      { name: "Wildmoon", detail: "Serene and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Meadow Thunder", detail: "Natural and powerful.", status: false, gender: "female", type: "wild_horse" },
      { name: "Blaze Dawn", detail: "Fiery and fresh.", status: false, gender: "female", type: "wild_horse" },
      { name: "Thunder Whisper", detail: "Powerful and subtle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Rebel Sky", detail: "Bold and expansive.", status: false, gender: "female", type: "wild_horse" },
      { name: "Canyon Mist", detail: "Mysterious and rugged.", status: false, gender: "female", type: "wild_horse" },
      { name: "Phoenix Breeze", detail: "Resilient and gentle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Stormy Dawn", detail: "Fresh and powerful.", status: false, gender: "female", type: "wild_horse" },
      { name: "Wild Blaze", detail: "Fiery and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Meadow Whisper", detail: "Gentle and natural.", status: false, gender: "female", type: "wild_horse" },
      { name: "Thundermoon", detail: "Powerful and serene.", status: false, gender: "female", type: "wild_horse" },
      { name: "Phoenix Breeze", detail: "Resilient and gentle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Canyon Storm", detail: "Rugged and powerful.", status: false, gender: "female", type: "wild_horse" },
      { name: "Rebel Ember", detail: "Bold and fiery.", status: false, gender: "female", type: "wild_horse" },
      { name: "Misty Dawn", detail: "Serene and fresh.", status: false, gender: "female", type: "wild_horse" },
      { name: "Wild Sky", detail: "Expansive and untamed.", status: false, gender: "female", type: "wild_horse" },
      { name: "Storm Whisper", detail: "Powerful and subtle.", status: false, gender: "female", type: "wild_horse" },
      { name: "Blaze Ember", detail: "Fiery and intense.", status: false, gender: "female", type: "wild_horse" },
      { name: "Phoenix Dawn", detail: "Resilient and fresh.", status: false, gender: "female", type: "wild_horse" },
      { name: "Orion Star", detail: "Celestial and majestic.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Zephyr Blaze", detail: "Swift and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Apollo Thunder", detail: "Powerful and divine.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Draco Storm", detail: "Intense and mythical.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Titan Nightfall", detail: "Majestic and enduring.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Phoenix Flame", detail: "Resilient and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Griffin Frost", detail: "Powerful and chilling.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Thorin Blaze", detail: "Fiery and noble.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Ares Thunder", detail: "Bold and commanding.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Orion Eclipse", detail: "Celestial and mysterious.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Draco Nightfall", detail: "Dark and powerful.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Titan Star", detail: "Enduring and radiant.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Apollo Frost", detail: "Divine and cool.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Griffin Storm", detail: "Majestic and tempestuous.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Zephyr Nightfall", detail: "Swift and enigmatic.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Phoenix Thunder", detail: "Fiery and powerful.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Thorin Eclipse", detail: "Noble and mysterious.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Ares Flame", detail: "Bold and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Orion Blaze", detail: "Celestial and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Draco Flame", detail: "Powerful and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Titan Thunder", detail: "Majestic and commanding.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Apollo Eclipse", detail: "Divine and mysterious.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Griffin Nightfall", detail: "Majestic and dark.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Thorin Frost", detail: "Noble and cool.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Phoenix Star", detail: "Resilient and radiant.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Ares Storm", detail: "Bold and tempestuous.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Zephyr Flame", detail: "Swift and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Orion Frost", detail: "Celestial and cool.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Draco Star", detail: "Powerful and radiant.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Titan Nightfall", detail: "Majestic and enduring.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Apollo Nightfall", detail: "Divine and dark.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Griffin Blaze", detail: "Majestic and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Thorin Thunder", detail: "Noble and commanding.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Phoenix Eclipse", detail: "Resilient and mysterious.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Ares Nightfall", detail: "Bold and dark.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Zephyr Star", detail: "Swift and radiant.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Orion Flame", detail: "Celestial and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Draco Eclipse", detail: "Powerful and mysterious.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Titan Storm", detail: "Majestic and tempestuous.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Apollo Star", detail: "Divine and radiant.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Griffin Eclipse", detail: "Majestic and mysterious.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Thorin Nightfall", detail: "Noble and dark.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Phoenix Frost", detail: "Resilient and cool.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Ares Blaze", detail: "Bold and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Zephyr Thunder", detail: "Swift and commanding.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Orion Storm", detail: "Celestial and tempestuous.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Draco Frost", detail: "Powerful and cool.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Titan Blaze", detail: "Majestic and fiery.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Apollo Nightfall", detail: "Divine and dark.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Griffin Star", detail: "Majestic and radiant.", status: false, gender: "male", type: "mythical_horse" },
      { name: "Celestia Moon", detail: "Celestial and serene.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Aurora Blaze", detail: "Radiant and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Seraphina Dawn", detail: "Angel-like and fresh.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Luna Star", detail: "Mystical and radiant.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Nyx Frost", detail: "Mysterious and cool.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Elara Twilight", detail: "Elegant and mysterious.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Freya Storm", detail: "Powerful and dynamic.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Lyra Ember", detail: "Melodic and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Selene Nightfall", detail: "Mystical and serene.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Astra Flame", detail: "Radiant and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Celestia Blaze", detail: "Celestial and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Aurora Moon", detail: "Radiant and serene.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Seraphina Star", detail: "Angel-like and radiant.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Luna Dawn", detail: "Mystical and fresh.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Nyx Eclipse", detail: "Mysterious and enigmatic.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Elara Flame", detail: "Elegant and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Freya Nightfall", detail: "Dynamic and serene.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Lyra Dawn", detail: "Melodic and fresh.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Selene Blaze", detail: "Mystical and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Astra Frost", detail: "Radiant and cool.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Celestia Star", detail: "Celestial and radiant.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Aurora Twilight", detail: "Radiant and mysterious.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Seraphina Moon", detail: "Angel-like and serene.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Luna Eclipse", detail: "Mystical and enigmatic.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Nyx Flame", detail: "Mysterious and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Elara Frost", detail: "Elegant and cool.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Freya Blaze", detail: "Dynamic and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Lyra Twilight", detail: "Melodic and mysterious.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Selene Ember", detail: "Mystical and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Astra Moon", detail: "Radiant and serene.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Celestia Eclipse", detail: "Celestial and mysterious.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Aurora Dawn", detail: "Radiant and fresh.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Seraphina Frost", detail: "Angel-like and cool.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Luna Blaze", detail: "Mystical and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Nyx Star", detail: "Mysterious and radiant.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Elara Eclipse", detail: "Elegant and mysterious.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Freya Flame", detail: "Dynamic and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Lyra Nightfall", detail: "Melodic and dark.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Selene Twilight", detail: "Mystical and enigmatic.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Astra Blaze", detail: "Radiant and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Celestia Dawn", detail: "Celestial and fresh.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Aurora Ember", detail: "Radiant and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Seraphina Twilight", detail: "Angel-like and mysterious.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Luna Ember", detail: "Mystical and fiery.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Nyx Twilight", detail: "Mysterious and enigmatic.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Elara Nightfall", detail: "Elegant and dark.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Freya Star", detail: "Dynamic and radiant.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Lyra Eclipse", detail: "Melodic and mysterious.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Selene Moon", detail: "Mystical and serene.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Astra Star", detail: "Radiant and majestic.", status: false, gender: "female", type: "mythical_horse" },
      { name: "Thunderbolt", detail: "Powerful and electrifying.", status: false, gender: "male", type: "famous_horse" },
      { name: "Champion Spirit", detail: "Victorious and spirited.", status: false, gender: "male", type: "famous_horse" },
      { name: "Maverick", detail: "Bold and adventurous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Storm Chaser", detail: "Dynamic and fierce.", status: false, gender: "male", type: "famous_horse" },
      { name: "Duke Titan", detail: "Noble and mighty.", status: false, gender: "male", type: "famous_horse" },
      { name: "Heroic Blaze", detail: "Brave and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Legend Storm", detail: "Epic and tempestuous.", status: false, gender: "male", type: "famous_horse" },
      { name: "King Thunder", detail: "Regal and powerful.", status: false, gender: "male", type: "famous_horse" },
      { name: "Valor Titan", detail: "Brave and enduring.", status: false, gender: "male", type: "famous_horse" },
      { name: "Bravado Blaze", detail: "Confident and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Chief Thunder", detail: "Leader and powerful.", status: false, gender: "male", type: "famous_horse" },
      { name: "Lucky Storm", detail: "Fortunate and dynamic.", status: false, gender: "male", type: "famous_horse" },
      { name: "Valiant Heart", detail: "Courageous and noble.", status: false, gender: "male", type: "famous_horse" },
      { name: "Spirit Champion", detail: "Resilient and victorious.", status: false, gender: "male", type: "famous_horse" },
      { name: "Victory Blaze", detail: "Triumphant and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Braveheart", detail: "Courageous and steadfast.", status: false, gender: "male", type: "famous_horse" },
      { name: "Duke Valor", detail: "Noble and brave.", status: false, gender: "male", type: "famous_horse" },
      { name: "Hero Blaze", detail: "Brave and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Thunder Spirit", detail: "Powerful and spirited.", status: false, gender: "male", type: "famous_horse" },
      { name: "King Valor", detail: "Regal and courageous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Champion Thunder", detail: "Victorious and powerful.", status: false, gender: "male", type: "famous_horse" },
      { name: "Legend Blaze", detail: "Epic and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Spirit Titan", detail: "Resilient and mighty.", status: false, gender: "male", type: "famous_horse" },
      { name: "Valiant Storm", detail: "Courageous and tempestuous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Bravado Thunder", detail: "Confident and powerful.", status: false, gender: "male", type: "famous_horse" },
      { name: "Duke Heart", detail: "Noble and courageous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Valor Blaze", detail: "Brave and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Brave Storm", detail: "Courageous and dynamic.", status: false, gender: "male", type: "famous_horse" },
      { name: "Heroic Thunder", detail: "Brave and powerful.", status: false, gender: "male", type: "famous_horse" },
      { name: "King Blaze", detail: "Regal and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Thunder Champion", detail: "Powerful and victorious.", status: false, gender: "male", type: "famous_horse" },
      { name: "Spirit Valor", detail: "Resilient and brave.", status: false, gender: "male", type: "famous_horse" },
      { name: "Legend Heart", detail: "Epic and courageous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Champion King", detail: "Victorious and regal.", status: false, gender: "male", type: "famous_horse" },
      { name: "Valor Storm", detail: "Brave and tempestuous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Bravado Spirit", detail: "Confident and resilient.", status: false, gender: "male", type: "famous_horse" },
      { name: "Valiant Blaze", detail: "Courageous and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Duke Thunder", detail: "Noble and powerful.", status: false, gender: "male", type: "famous_horse" },
      { name: "Heroic Heart", detail: "Brave and courageous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Thunder Hero", detail: "Powerful and heroic.", status: false, gender: "male", type: "famous_horse" },
      { name: "King Spirit", detail: "Regal and spirited.", status: false, gender: "male", type: "famous_horse" },
      { name: "Legend Valor", detail: "Epic and brave.", status: false, gender: "male", type: "famous_horse" },
      { name: "Champion Bravado", detail: "Victorious and confident.", status: false, gender: "male", type: "famous_horse" },
      { name: "Spirit Blaze", detail: "Resilient and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Valiant King", detail: "Courageous and regal.", status: false, gender: "male", type: "famous_horse" },
      { name: "Thunder Victory", detail: "Powerful and triumphant.", status: false, gender: "male", type: "famous_horse" },
      { name: "Duke Blaze", detail: "Noble and fiery.", status: false, gender: "male", type: "famous_horse" },
      { name: "Hero Legend", detail: "Brave and epic.", status: false, gender: "male", type: "famous_horse" },
      { name: "King Valor", detail: "Regal and courageous.", status: false, gender: "male", type: "famous_horse" },
      { name: "Bravado King", detail: "Confident and regal.", status: false, gender: "male", type: "famous_horse" },
      { name: "Bella Star", detail: "Elegant and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Graceful Belle", detail: "Elegant and charming.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Victory", detail: "Noble and triumphant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Princess Sparkle", detail: "Regal and sparkling.", status: false, gender: "female", type: "famous_horse" },
      { name: "Queen Dream", detail: "Majestic and dreamy.", status: false, gender: "female", type: "famous_horse" },
      { name: "Angel Harmony", detail: "Serene and harmonious.", status: false, gender: "female", type: "famous_horse" },
      { name: "Diva Joy", detail: "Bold and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Stardust", detail: "Elegant and celestial.", status: false, gender: "female", type: "famous_horse" },
      { name: "Miss Radiance", detail: "Charming and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Bella Harmony", detail: "Elegant and serene.", status: false, gender: "female", type: "famous_horse" },
      { name: "Grace Stardust", detail: "Elegant and celestial.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Dream", detail: "Noble and dreamy.", status: false, gender: "female", type: "famous_horse" },
      { name: "Queen Bliss", detail: "Majestic and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Princess Radiance", detail: "Regal and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Angel Belle", detail: "Serene and charming.", status: false, gender: "female", type: "famous_horse" },
      { name: "Diva Stardust", detail: "Bold and celestial.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Radiance", detail: "Elegant and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Miss Sparkle", detail: "Charming and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Bella Joy", detail: "Elegant and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Grace Dream", detail: "Elegant and dreamy.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Bliss", detail: "Noble and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Queen Harmony", detail: "Majestic and serene.", status: false, gender: "female", type: "famous_horse" },
      { name: "Princess Stardust", detail: "Regal and celestial.", status: false, gender: "female", type: "famous_horse" },
      { name: "Angel Radiance", detail: "Serene and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Diva Bliss", detail: "Bold and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Miss Dream", detail: "Charming and dreamy.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Joy", detail: "Elegant and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Bella Sparkle", detail: "Elegant and sparkling.", status: false, gender: "female", type: "famous_horse" },
      { name: "Grace Radiance", detail: "Elegant and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Queen Stardust", detail: "Majestic and celestial.", status: false, gender: "female", type: "famous_horse" },
      { name: "Princess Joy", detail: "Regal and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Angel Stardust", detail: "Serene and celestial.", status: false, gender: "female", type: "famous_horse" },
      { name: "Diva Radiance", detail: "Bold and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Sparkle", detail: "Elegant and sparkling.", status: false, gender: "female", type: "famous_horse" },
      { name: "Miss Harmony", detail: "Charming and serene.", status: false, gender: "female", type: "famous_horse" },
      { name: "Bella Bliss", detail: "Elegant and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Grace Joy", detail: "Elegant and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Dream", detail: "Noble and dreamy.", status: false, gender: "female", type: "famous_horse" },
      { name: "Queen Radiance", detail: "Majestic and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Princess Harmony", detail: "Regal and serene.", status: false, gender: "female", type: "famous_horse" },
      { name: "Angel Bliss", detail: "Serene and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Diva Dream", detail: "Bold and dreamy.", status: false, gender: "female", type: "famous_horse" },
      { name: "Miss Stardust", detail: "Charming and celestial.", status: false, gender: "female", type: "famous_horse" },
      { name: "Bella Radiance", detail: "Elegant and radiant.", status: false, gender: "female", type: "famous_horse" },
      { name: "Grace Sparkle", detail: "Elegant and sparkling.", status: false, gender: "female", type: "famous_horse" },
      { name: "Lady Harmony", detail: "Elegant and serene.", status: false, gender: "female", type: "famous_horse" },
      { name: "Queen Joy", detail: "Majestic and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Princess Bliss", detail: "Regal and joyful.", status: false, gender: "female", type: "famous_horse" },
      { name: "Angel Dream", detail: "Serene and dreamy.", status: false, gender: "female", type: "famous_horse" },
      { name: "Diva Sparkle", detail: "Bold and sparkling.", status: false, gender: "female", type: "famous_horse" },
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
        name: "DragonBorn Name Generator",
        pic: "bg-dragonborn.webp",
        link: "https://www.nameideagenerator.com/dragonborn-name-generator",
    },
    ];

const HorseNameGenerator = () => {
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

    const bgImage = "/horse.webp"
    const context = " Horse Name Generator"

    const Q1 = "What makes a good horse name?"

    const A1 = "A good horse name reflects their personality, appearance, or background. It should be memorable, easy to say, and ideally not too long."
    
    const Q2 = "Do horse names have to be unique?"
    
    const A2 = "It’s best to have a unique name, especially for racing or show horses, to avoid confusion. Some organizations require names to be distinct."
    
    const Q3 = "Can a horse’s name influence their behavior?"
    
    const A3 = "While there’s no scientific proof, some people believe that a horse's name can reflect their temperament and possibly affect how they behave."
    
    const Q4 = "How do I choose a name for my horse?"
    
    const A4 = "Think about your horse’s personality, physical features, or even their breed. Consider names that highlight their unique traits or something meaningful to you."
    
    const Q5 = "How long can a horse’s name be?"
    
    const A5 = "Names typically have a character limit, usually between 18-20 characters, depending on the registry. Short and snappy names are often preferred."

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
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/horse-name-generator" className="hover:underline text-[#343a40]">Horse Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Horse Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Horse Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="elegant_horse">Elegant Horse</option>
                            <option value="wild_horse">Wild Horse</option>
                            <option value="mythical_horse">Mythical Horse</option>
                            <option value="famous_horse">Famous Horse</option>

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
                         Generate the Best Name for Your Horse
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                       A horse’s name carries great importance. It reflects its personality, history, and the bond you share. 
                       You need a name that fits perfectly and feels just right for your horse. 
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Our Horse Name Generator simplifies the search for that perfect name. 
                        Choose the type of horse you’re naming, click generate, and discover unique names that match your vision. 
                        Skip the endless lists and find the right name in no time!
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How Does Our Horse Name Generator Work?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Using our Horse Race Name Generator is easy and fun. Follow these simple steps to create the perfect name for your horse. 
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1 - Select the Gender
                            </h3>
                            <p>
                            Start by choosing your horse's gender—male or female. This helps tailor the name to suit its character.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2 - Choose the Type of Horse
                            </h3>
                            <p>
                            Next, decide what type of horse you're naming. Is it a thoroughbred, a draft horse, or maybe a pony? 
                            This will guide the generator to suggest the most fitting names.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Click ‘Generate’
                            </p>
                            <p>
                            Hit the button and get a list of fresh, unique names right away. No more sifting through endless lists of common names.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4: Hover to Discover the Meaning
                            </p>
                            <p>
                            Curious about a name? Hover over it to learn its meaning, origin, or inspiration behind it.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Refine and Repeat
                            </p>
                            <p>
                            If the name doesn't quite fit, tweak your choices and hit ‘Generate’ again. 
                            You can refine your search until you find the perfect name that matches your horse’s spirit!
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="horse1.webp"
                            alt="Horse Name Generator | Race Horse Name Generator With Meaning"
                            className="w-[300px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="horse2.webp "
                            alt="Horse Name Generator | Race Horse Name Generator With Meaning"
                            className="w-[300px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/horse name generator bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Horse Name Generator
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

<div class="w-[90%] max-w-[1200px] mx-auto text-[#343a40] my-[50px]">
  <div class="text-center mb-[40px]">
    <h2 class="sm:text-[36px] text-[24px] font-bold mb-2">
      Why Use Our Horse Name Generator?
    </h2>
    <p class="sm:text-[18px] text-[16px] font-medium text-[#555]">
      Here’s why thousands of users love it:
    </p>
  </div>

  <div class="flex flex-col lg:flex-row gap-10 items-start">
    <div class="lg:w-[60%] w-full flex flex-col gap-6">

      <div class="bg-white p-6 rounded-[12px] shadow-sm">
        <h3 class="text-[22px] font-semibold mb-1">Quick and Easy</h3>
        <p>Now this has never been simpler. With just a few clicks, you’ll get a list of unique, fitting names in seconds.</p>
      </div>

      <div class="bg-white p-6 rounded-[12px] shadow-sm">
        <h3 class="text-[22px] font-semibold mb-1">Customizable to Your Horse</h3>
        <p>Choose the gender and type of your horse to get names that match its breed, personality, and appearance.</p>
      </div>

      <div class="bg-white p-6 rounded-[12px] shadow-sm">
        <h3 class="text-[22px] font-semibold mb-1">Instant Inspiration</h3>
        <p>You’ll never run out of ideas. Generate a fresh list of names every time, ensuring you always find something new and exciting.</p>
      </div>

      <div class="bg-white p-6 rounded-[12px] shadow-sm">
        <h3 class="text-[22px] font-semibold mb-1">Unique Names Every Time</h3>
        <p>Say goodbye to overused, generic horse names. Our generator ensures every name is special, just like your horse.</p>
      </div>

      <div class="bg-white p-6 rounded-[12px] shadow-sm">
        <h3 class="text-[22px] font-semibold mb-1">Perfect for All Horse Types</h3>
        <p>Are you naming a show jumper, racehorse, or a beloved pony? Our tool has names that work for all types of horses.</p>
      </div>

      <div class="bg-white p-6 rounded-[12px] shadow-sm">
        <h3 class="text-[22px] font-semibold mb-1">Easy to Use</h3>
        <p>Simple, intuitive, and designed to help you find the perfect name quickly, without the stress.</p>
      </div>
    </div>

    <div class="lg:w-[40%] w-full flex flex-col gap-6 relative">
      <img
        src="horse3.png"
        alt="Horse Generator Feature Image 1"
        class="w-full max-w-[350px] h-auto rounded-[16px] mx-auto"
      />
      <img
        src="horse5.jpg"
        alt="Horse Generator Feature Image 2"
        class="w-full max-w-[350px] h-auto rounded-[16px] mx-auto"
      />
    </div>
  </div>
</div>

<div class="w-[90%] max-w-[1200px] mx-auto my-[50px] text-[#343a40] ">
  <div class="text-center mb-12">
    <h2 class="text-[32px] sm:text-[40px] font-bold mb-2">
      Types of Horse Names You Can Create
    </h2>
    <p class="text-[16px] sm:text-[18px] text-[#555]">
      From epic to elegant—choose the style that fits your horse best.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
    <div class="bg-white shadow-lg p-6 rounded-[16px] hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 class="text-[22px] font-semibold mb-2">Fantasy Horse Names</h3>
      <p>Names like <strong>Stormrider</strong>, <strong>Mystic Hoof</strong>, or <strong>Shadowmane</strong> evoke mystery and magic—ideal for majestic, mythic horses.</p>
    </div>

    <div class="bg-white shadow-lg p-6 rounded-[16px] hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 class="text-[22px] font-semibold mb-2">Racing Horse Names</h3>
      <p><strong>Quickstep</strong>, <strong>Lightning Bolt</strong>, and <strong>Fastlane Fury</strong> are fast, bold, and ready for the track.</p>
    </div>

    <div class="bg-white shadow-lg p-6 rounded-[16px] hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 class="text-[22px] font-semibold mb-2">Show Horse Names</h3>
      <p><strong>Golden Serenade</strong>, <strong>Majestic Charm</strong>, and <strong>Royal Elegance</strong> radiate grace and beauty—perfect for show stoppers.</p>
    </div>

    <div class="bg-white shadow-lg p-6 rounded-[16px] hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 class="text-[22px] font-semibold mb-2">Western Horse Names</h3>
      <p>Channel the Wild West with names like <strong>Dusty Trail</strong>, <strong>Bronco King</strong>, or <strong>Midnight Rider</strong>.</p>
    </div>

    <div class="bg-white shadow-lg p-6 rounded-[16px] hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 class="text-[22px] font-semibold mb-2">Cute & Playful Names</h3>
      <p>Fun and sweet names like <strong>Sugarplum</strong>, <strong>Bubbles</strong>, and <strong>Peanut</strong> suit horses full of charm.</p>
    </div>

    <div class="bg-white shadow-lg p-6 rounded-[16px] hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 class="text-[22px] font-semibold mb-2">Traditional Horse Names</h3>
      <p>Timeless names like <strong>Thunderbolt</strong>, <strong>Silver Star</strong>, and <strong>Lady Grace</strong> carry honor and heritage.</p>
    </div>
  </div>

  <div class="text-center mt-12">
    <a href="/horse-name-generator" class="inline-block bg-[#343a40] text-white text-[16px] sm:text-[18px] px-8 py-3 rounded-full hover:bg-[#222] transition-all duration-300">
      Try the Horse Name Generator Now
    </a>
  </div>
</div>
<div class="w-[90%] max-w-[1000px] mx-auto my-[50px] text-[#343a40]">
  <div class="text-center mb-10">
    <h2 class="text-[32px] sm:text-[40px] font-bold">
      Famous Horse Names in Pop Culture
    </h2>
    <p class="text-[16px] sm:text-[18px] text-[#555]">
      From fiction to reality, these iconic horses have left a lasting legacy.
    </p>
  </div>

  <div class="space-y-8 text-[16px] sm:text-[18px] leading-[1.7]">
    
    <div>
      <h3 class="text-[22px] font-semibold mb-2">In Literature and Movies</h3>
      <p><strong>Black Beauty</strong>, from Anna Sewell’s novel, symbolizes kindness and resilience.</p>
      <p><strong>Shadowfax</strong>, Gandalf’s horse in *The Lord of the Rings*, is known for supernatural speed and grace.</p>
      <p><strong>Silver</strong>, the Lone Ranger’s steed, represents loyalty and bravery.</p>
    </div>

    <div>
      <h3 class="text-[22px] font-semibold mb-2">In Sports</h3>
      <p><strong>Secretariat</strong> earned fame by winning the Triple Crown in 1973 with record-breaking speed.</p>
      <p><strong>Seabiscuit</strong> became a symbol of hope during the Great Depression, overcoming all odds to achieve greatness.</p>
    </div>

    <div>
      <h3 class="text-[22px] font-semibold mb-2">In TV Shows</h3>
      <p><strong>Mr. Ed</strong>, the talking horse from the sitcom, became a cultural icon with a humorous twist.</p>
      <p><strong>Trigger</strong>, Roy Rogers’ loyal companion, was beloved for his intelligence and showmanship.</p>
    </div>

    <div class="pt-4">
      <p class="text-[#555]">
        These famous names remind us that horses often stand for strength, loyalty, and adventure—
        inspiring name choices with deeper meaning for your own horse.
      </p>
    </div>

  </div>
</div>
<div class="w-[90%] max-w-[1100px] mx-auto my-[60px] text-[#343a40]">
  <div class="text-center mb-10">
    <h2 class="text-[32px] sm:text-[40px] font-bold">
      Horse Naming Tips That Actually Help
    </h2>
    <p class="text-[16px] sm:text-[18px] text-[#555] mt-2">
      Practical advice for finding a name your horse will love—and respond to.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div class="bg-white p-5 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-300">
      <h3 class="text-[20px] font-semibold mb-2">Keep it Short</h3>
      <p>Horses respond better to names with just 1–2 syllables. Simple names make commands clearer.</p>
    </div>

    <div class="bg-white p-5 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-300">
      <h3 class="text-[20px] font-semibold mb-2">Avoid Confusing Sounds</h3>
      <p>Stay away from names that sound like commands—like “No” or “Whoa”—to prevent miscommunication.</p>
    </div>

    <div class="bg-white p-5 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-300">
      <h3 class="text-[20px] font-semibold mb-2">Match the Breed</h3>
      <p>Names inspired by your horse’s breed (like Mustang or Andalusian) can highlight their heritage.</p>
    </div>

    <div class="bg-white p-5 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-300">
      <h3 class="text-[20px] font-semibold mb-2">Think About Personality</h3>
      <p>Pick a name that suits your horse’s traits. “Blaze” fits a bold horse. “Whisper” fits a gentle one.</p>
    </div>

    <div class="bg-white p-5 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-300">
      <h3 class="text-[20px] font-semibold mb-2">Add a Unique Twist</h3>
      <p>Blend words or use foreign terms. Try “Luz del Fuego” or “Stormshadow” for distinctiveness.</p>
    </div>

    <div class="bg-white p-5 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-300">
      <h3 class="text-[20px] font-semibold mb-2">Test It Out Loud</h3>
      <p>Say the name out loud several times. Make sure it rolls off your tongue and gets your horse’s attention.</p>
    </div>

  </div>
</div>
<div class="w-[90%] max-w-[900px] mx-auto my-[60px] text-[#343a40]">
  <div class="text-center mb-12">
    <h2 class="text-[32px] sm:text-[40px] font-bold">
      Fun Facts About Horses and Their Names
    </h2>
    <p class="text-[16px] sm:text-[18px] text-[#555] mt-2">
      Ever wondered how horses get their names? Here are some surprising and fun insights!
    </p>
  </div>

  <div class="relative border-l-4 border-[#d4d4d4] pl-6 space-y-10">

    <div class="relative">
      <div class="absolute -left-[14px] top-[6px] w-[12px] h-[12px] bg-[#343a40] rounded-full"></div>
      <p><strong>Horses have been named after famous figures</strong> like "Alexander" and "Victoria" throughout history.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-[14px] top-[6px] w-[12px] h-[12px] bg-[#343a40] rounded-full"></div>
      <p><strong>Some horses are named for their personality</strong>, such as "Speedster" for the energetic or "Gentle Heart" for calm souls.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-[14px] top-[6px] w-[12px] h-[12px] bg-[#343a40] rounded-full"></div>
      <p><strong>Racehorses can change names</strong> based on their performance or training stage—it’s not always set in stone.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-[14px] top-[6px] w-[12px] h-[12px] bg-[#343a40] rounded-full"></div>
      <p><strong>Horses like "Seabiscuit" and "Secretariat"</strong> became household names through legendary racing careers.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-[14px] top-[6px] w-[12px] h-[12px] bg-[#343a40] rounded-full"></div>
      <p><strong>Nature inspires horse names</strong> too—"Thunder" for bold ones and "Willow" for graceful movers.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-[14px] top-[6px] w-[12px] h-[12px] bg-[#343a40] rounded-full"></div>
      <p><strong>Some believe a name can influence racing luck</strong>—"Lucky Charm" is more than just a cute idea for many owners!</p>
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

export default HorseNameGenerator;

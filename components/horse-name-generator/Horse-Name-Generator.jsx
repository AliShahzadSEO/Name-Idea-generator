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

    const Q1 = "What is the Horse Name Generator used for?"

    const A1 = "The Horse Name Generator is used to create unique and fitting names for horses, whether for real-life horses, fictional characters in books, or horses in games. It helps users generate names that match the horse's characteristics and the context of use."
    
    const Q2 = "Is my data secure when using this tool?"
    
    const A2 = "Yes, the tool is designed with advanced security features to ensure that your data remains private and secure. All inputs are processed securely, and your preferences are not stored beyond your session unless you choose to save them."
    
    const Q3 = "Is the tool free to use?"
    
    const A3 = "Yes, the Horse Name Generator is free to use, with no hidden fees or subscriptions required. You can generate as many names as you need without any cost."
    
    const Q4 = "How accurate are the names generated for my project?"
    
    const A4 = "The Horse Name Generator produces names from a carefully curated database, ensuring they are suitable for a variety of projects, whether you're naming a real horse, writing a novel, or creating characters for a game. Each name is crafted to be relevant and meaningful, helping you find the perfect fit for your specific needs."
    
    const Q5 = "Can I customize the generated names?"
    
    const A5 = "The Horse Name Generator does not offer customization options. Instead, it provides a wide variety of names from its database, allowing you to browse through and select the one that best fits your needs."

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
                            About Us
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        The Race Horse Name Generator is a specialized tool designed to help you create unique and fitting names for horses in various contexts. Whether you’re an equestrian enthusiast, a writer crafting a novel, 
                        a game developer, or someone who needs an interesting name for a fictional horse, this tool offers an extensive range of options tailored to your specific needs. 
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        This Horse Names Generator is more than just a random name generator; it considers the characteristics, breed, and personality of the horse to deliver names that are both meaningful and memorable.  
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Now, users can generate a name that perfectly aligns with the horse's identity, making our race horse name generator tool an essential tool for anyone involved in equine-related projects.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Horse Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Using our Horse Race Name Generator is easy and fun. Follow these simple steps to create the perfect name for your horse. 
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
                            Choose a gender for the horse name, if relevant, to help generate names that might be typically used for male or female horses.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2 - Select the Type
                            </h3>
                            <p>
                            Decide on the type of horse name you want, such as classic, racehorse, or mythical, to guide the name generation. 
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Click on Generate
                            </p>
                            <p>
                            Click the <b> "Generate"</b> button to produce a list of horse names that match your criteria.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4: Review Names and Their Descriptions
                            </p>
                            <p>
                            Names will appear on your screen. Hover over each to see details like meaning, any known associations in history or literature, and its potential characteristics.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="horse1.webp"
                            alt=""
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="horse2.webp "
                            alt=""
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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

            <div class="w-[80%] mx-auto text-[#343a40] my-[30px]">
                <div class="text-center mb-[10px]">
                    <h2 class="sm:text-[36px] text-[22px] font-semibold mb-4">
                    Why Use Our Horse Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our race horse names generator offers a seamless and enjoyable experience with plenty of options to find the perfect name. 
                    This Horse Name Generator is an invaluable tool for anyone looking to name a horse, whether for personal, professional, or creative purposes. 
                    </p>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Here are some reasons why you should consider using it:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Efficiency
                                </h3>
                                <p>
                                Naming a horse can be a time-consuming process, especially when you want a name that stands out and is meaningful. 
                                The name generator for horses tool streamlines this process by providing a list of well-considered names in just a few clicks.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Customization
                                </h3>
                                <p>
                                Unlike generic name generators, this name generator horse tool allows you to customize the generated names based on specific criteria such as breed, color, and temperament. 
                                This ensures that the name is not just random but aligns with the horse’s characteristics and the context in which it will be used.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Versatility
                                </h3>
                                <p>
                                Whether you’re naming a real horse, a fictional character in a novel, or a horse in a game, the tool offers versatile naming options. 
                                Our horse name gen tool caters to various styles, from classic and elegant names to fun and imaginative ones, making it suitable for different projects.                            
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                User-Friendly Interface
                                </h3>
                                <p>
                                The interface is designed to be intuitive and easy to use. Even if you’re not tech-savvy, 
                                you can quickly generate a list of potential names without needing to navigate complicated menus or settings.                                
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Reliable Results
                                </h3>
                                <p>
                                The names generated by our racing horse names generator tool are not only creative but also reliable. They are derived from a vast database of equine names and cultural references, 
                                ensuring that each name is unique, culturally appropriate, and fitting for the intended use.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Quick Generation
                                </h3>
                                <p>
                                Our Horse Name Generator provides fast results that allow you to generate a list of distinctive names in seconds. 
                                This efficiency saves you time and helps you quickly find the perfect name for your horse. Whether it is for a story, game, or real-life use.                         
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="horse3.png"
                            alt="Half-Elf"
                            class="w-[350px] my-[30px] h-[430px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="horse5.jpg"
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

export default HorseNameGenerator;

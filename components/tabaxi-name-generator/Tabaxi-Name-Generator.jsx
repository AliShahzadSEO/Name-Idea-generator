"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Kalan Shadowstripe", detail: "Stealthy and elusive.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Raxar Nightclaw", detail: "Fierce and relentless.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Jarek Greenpaws", detail: "Quick and agile.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Talar Swiftleap", detail: "Graceful and nimble.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Draven Moonfang", detail: "Mysterious and strong.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Zorak Thornbreeze", detail: "Sharp and resilient.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kael Stormwhisker", detail: "Bold and daring.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Narek Leafblade", detail: "Skilled and precise.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Varek Darkpelt", detail: "Stealthy and cautious.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Xalir Sunshadow", detail: "Bright and clever.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kalan Nightclaw", detail: "Fierce and relentless.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Raxar Thornbreeze", detail: "Sharp and resilient.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Jarek Moonfang", detail: "Mysterious and strong.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Talar Shadowstripe", detail: "Stealthy and elusive.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Draven Swiftleap", detail: "Graceful and nimble.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Zorak Leafblade", detail: "Skilled and precise.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kael Darkpelt", detail: "Stealthy and cautious.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Narek Sunshadow", detail: "Bright and clever.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Varek Stormwhisker", detail: "Bold and daring.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Xalir Greenpaws", detail: "Quick and agile.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kalan Thornbreeze", detail: "Sharp and resilient.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Raxar Swiftleap", detail: "Graceful and nimble.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Jarek Darkpelt", detail: "Stealthy and cautious.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Talar Sunshadow", detail: "Bright and clever.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Draven Greenpaws", detail: "Quick and agile.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Zorak Shadowstripe", detail: "Stealthy and elusive.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kael Moonfang", detail: "Mysterious and strong.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Narek Stormwhisker", detail: "Bold and daring.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Varek Nightclaw", detail: "Fierce and relentless.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Xalir Leafblade", detail: "Skilled and precise.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kalan Moonfang", detail: "Mysterious and strong.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Raxar Greenpaws", detail: "Quick and agile.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Jarek Stormwhisker", detail: "Bold and daring.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Talar Darkpelt", detail: "Stealthy and cautious.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Draven Leafblade", detail: "Skilled and precise.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Zorak Nightclaw", detail: "Fierce and relentless.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kael Shadowstripe", detail: "Stealthy and elusive.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Narek Swiftleap", detail: "Graceful and nimble.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Varek Sunshadow", detail: "Bright and clever.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Xalir Thornbreeze", detail: "Sharp and resilient.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kalan Greenpaws", detail: "Quick and agile.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Raxar Nightclaw", detail: "Fierce and relentless.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Jarek Thornbreeze", detail: "Sharp and resilient.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Talar Stormwhisker", detail: "Bold and daring.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Draven Shadowstripe", detail: "Stealthy and elusive.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Zorak Moonfang", detail: "Mysterious and strong.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Kael Sunshadow", detail: "Bright and clever.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Narek Darkpelt", detail: "Stealthy and cautious.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Varek Swiftleap", detail: "Graceful and nimble.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Xalir Leafblade", detail: "Skilled and precise.", status: false, gender: "male", type: "jungle_hunter" },
    { name: "Lyra Moonshadow", detail: "Mystical and graceful.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Ziva Nightstripe", detail: "Elegant and swift.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Saria Thornpaws", detail: "Cunning and agile.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Nara Swiftclaw", detail: "Quick and stealthy.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Elara Greenwhisker", detail: "Wise and perceptive.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Mira Stormbreeze", detail: "Dynamic and strong.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Aria Darkleaf", detail: "Mysterious and quiet.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Kira Sunpelt", detail: "Bright and energetic.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Liora Shadowfang", detail: "Stealthy and fierce.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Thalia Leafshade", detail: "Calm and observant.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Lyra Nightstripe", detail: "Elegant and swift.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Ziva Moonshadow", detail: "Mystical and graceful.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Saria Swiftclaw", detail: "Quick and stealthy.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Nara Thornpaws", detail: "Cunning and agile.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Elara Stormbreeze", detail: "Dynamic and strong.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Mira Darkleaf", detail: "Mysterious and quiet.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Aria Greenwhisker", detail: "Wise and perceptive.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Kira Shadowfang", detail: "Stealthy and fierce.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Liora Sunpelt", detail: "Bright and energetic.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Thalia Nightstripe", detail: "Elegant and swift.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Lyra Thornpaws", detail: "Cunning and agile.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Ziva Swiftclaw", detail: "Quick and stealthy.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Saria Darkleaf", detail: "Mysterious and quiet.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Nara Greenwhisker", detail: "Wise and perceptive.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Elara Shadowfang", detail: "Stealthy and fierce.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Mira Leafshade", detail: "Calm and observant.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Aria Sunpelt", detail: "Bright and energetic.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Kira Stormbreeze", detail: "Dynamic and strong.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Liora Nightstripe", detail: "Elegant and swift.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Thalia Thornpaws", detail: "Cunning and agile.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Lyra Greenwhisker", detail: "Wise and perceptive.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Ziva Darkleaf", detail: "Mysterious and quiet.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Saria Shadowfang", detail: "Stealthy and fierce.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Nara Moonshadow", detail: "Mystical and graceful.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Elara Nightstripe", detail: "Elegant and swift.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Mira Thornpaws", detail: "Cunning and agile.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Aria Swiftclaw", detail: "Quick and stealthy.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Kira Leafshade", detail: "Calm and observant.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Liora Darkleaf", detail: "Mysterious and quiet.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Thalia Sunpelt", detail: "Bright and energetic.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Lyra Stormbreeze", detail: "Dynamic and strong.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Ziva Moonshadow", detail: "Mystical and graceful.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Saria Greenwhisker", detail: "Wise and perceptive.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Nara Shadowfang", detail: "Stealthy and fierce.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Elara Thornpaws", detail: "Cunning and agile.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Mira Nightstripe", detail: "Elegant and swift.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Aria Sunpelt", detail: "Bright and energetic.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Kira Darkleaf", detail: "Mysterious and quiet.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Liora Swiftclaw", detail: "Quick and stealthy.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Thalia Greenwhisker", detail: "Wise and perceptive.", status: false, gender: "female", type: "jungle_hunter" },
      { name: "Tariq Sunclaw", detail: "Bold and fierce.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Malik Dustwhisker", detail: "Stealthy and resilient.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Azir Sandstrider", detail: "Adapted to desert travel.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Kairo Dunehunter", detail: "Skilled in desert hunting.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Jamil Stonefang", detail: "Strong and enduring.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rami Miragepaws", detail: "Mysterious and elusive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Idris Heatpelt", detail: "Resilient to the heat.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Zahir Sandshadow", detail: "Quiet and observant.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Faris Blazeclaw", detail: "Fiery and aggressive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rashid Driftblade", detail: "Skilled with weapons.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Tariq Dunehunter", detail: "Skilled in desert hunting.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Malik Miragepaws", detail: "Mysterious and elusive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Azir Stonefang", detail: "Strong and enduring.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Kairo Sandshadow", detail: "Quiet and observant.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Jamil Heatpelt", detail: "Resilient to the heat.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rami Blazeclaw", detail: "Fiery and aggressive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Idris Driftblade", detail: "Skilled with weapons.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Zahir Sunclaw", detail: "Bold and fierce.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Faris Dustwhisker", detail: "Stealthy and resilient.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rashid Sandstrider", detail: "Adapted to desert travel.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Tariq Heatpelt", detail: "Resilient to the heat.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Malik Blazeclaw", detail: "Fiery and aggressive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Azir Driftblade", detail: "Skilled with weapons.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Kairo Sandstrider", detail: "Adapted to desert travel.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Jamil Miragepaws", detail: "Mysterious and elusive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rami Sunclaw", detail: "Bold and fierce.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Idris Sandshadow", detail: "Quiet and observant.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Zahir Stonefang", detail: "Strong and enduring.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Faris Dustwhisker", detail: "Stealthy and resilient.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rashid Heatpelt", detail: "Resilient to the heat.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Tariq Miragepaws", detail: "Mysterious and elusive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Malik Sunclaw", detail: "Bold and fierce.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Azir Dustwhisker", detail: "Stealthy and resilient.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Kairo Blazeclaw", detail: "Fiery and aggressive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Jamil Sandshadow", detail: "Quiet and observant.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rami Driftblade", detail: "Skilled with weapons.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Idris Dunehunter", detail: "Skilled in desert hunting.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Zahir Heatpelt", detail: "Resilient to the heat.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Faris Miragepaws", detail: "Mysterious and elusive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rashid Sandstrider", detail: "Adapted to desert travel.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Tariq Sandstrider", detail: "Adapted to desert travel.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Malik Driftblade", detail: "Skilled with weapons.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Azir Sandshadow", detail: "Quiet and observant.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Kairo Dustwhisker", detail: "Stealthy and resilient.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Jamil Heatpelt", detail: "Resilient to the heat.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rami Sunclaw", detail: "Bold and fierce.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Idris Blazeclaw", detail: "Fiery and aggressive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Zahir Miragepaws", detail: "Mysterious and elusive.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Faris Dunehunter", detail: "Skilled in desert hunting.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Rashid Sandstrider", detail: "Adapted to desert travel.", status: false, gender: "male", type: "desert_nomad" },
      { name: "Samira Sunwhisper", detail: "Graceful and serene.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Layla Mirageleaf", detail: "Elegant and elusive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Yasmin Duneclaw", detail: "Strong and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Amina Sandshadow", detail: "Quiet and perceptive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Zara Heatpaws", detail: "Adapted to the heat.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Nadia Blazeveil", detail: "Fiery and passionate.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Leila Driftleaf", detail: "Calm and observant.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Farah Stonewhisker", detail: "Strong and enduring.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Aisha Dustbloom", detail: "Soft and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Noor Sunclaw", detail: "Bold and fierce.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Samira Mirageleaf", detail: "Elegant and elusive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Layla Heatpaws", detail: "Adapted to the heat.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Yasmin Sandshadow", detail: "Quiet and perceptive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Amina Duneclaw", detail: "Strong and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Zara Blazeveil", detail: "Fiery and passionate.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Nadia Driftleaf", detail: "Calm and observant.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Leila Sunwhisper", detail: "Graceful and serene.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Farah Dustbloom", detail: "Soft and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Aisha Stonewhisker", detail: "Strong and enduring.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Noor Heatpaws", detail: "Adapted to the heat.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Samira Duneclaw", detail: "Strong and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Layla Sunclaw", detail: "Bold and fierce.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Yasmin Blazeveil", detail: "Fiery and passionate.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Amina Driftleaf", detail: "Calm and observant.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Zara Stonewhisker", detail: "Strong and enduring.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Nadia Sandshadow", detail: "Quiet and perceptive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Leila Mirageleaf", detail: "Elegant and elusive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Farah Heatpaws", detail: "Adapted to the heat.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Aisha Sunwhisper", detail: "Graceful and serene.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Noor Dustbloom", detail: "Soft and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Samira Sandshadow", detail: "Quiet and perceptive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Layla Blazeveil", detail: "Fiery and passionate.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Yasmin Sunclaw", detail: "Bold and fierce.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Amina Stonewhisker", detail: "Strong and enduring.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Zara Mirageleaf", detail: "Elegant and elusive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Nadia Dustbloom", detail: "Soft and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Leila Heatpaws", detail: "Adapted to the heat.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Farah Duneclaw", detail: "Strong and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Aisha Sunclaw", detail: "Bold and fierce.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Noor Mirageleaf", detail: "Elegant and elusive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Samira Heatpaws", detail: "Adapted to the heat.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Layla Stonewhisker", detail: "Strong and enduring.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Yasmin Driftleaf", detail: "Calm and observant.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Amina Dustbloom", detail: "Soft and resilient.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Zara Sunwhisper", detail: "Graceful and serene.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Nadia Mirageleaf", detail: "Elegant and elusive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Leila Sandshadow", detail: "Quiet and perceptive.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Farah Blazeveil", detail: "Fiery and passionate.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Aisha Heatpaws", detail: "Adapted to the heat.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Noor Driftleaf", detail: "Calm and observant.", status: false, gender: "female", type: "desert_nomad" },
      { name: "Grigor Stonepaws", detail: "Strong and steadfast.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Thorne Ironclaw", detail: "Resilient and tough.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Korrin Peakwalker", detail: "Skilled at high altitudes.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Ragnar Cliffstride", detail: "Steady on cliffs.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Boran Snowfang", detail: "Adapted to snowy environments.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Halric Mountainshade", detail: "Calm and enduring.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Varek Iceclaw", detail: "Tough in icy conditions.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Doran Boulderheart", detail: "Strong and resilient.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Lorian Frostwhisker", detail: "Adapted to the cold.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Aric Summitblade", detail: "Sharp and precise.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Grigor Ironclaw", detail: "Resilient and tough.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Thorne Peakwalker", detail: "Skilled at high altitudes.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Korrin Snowfang", detail: "Adapted to snowy environments.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Ragnar Boulderheart", detail: "Strong and resilient.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Boran Mountainshade", detail: "Calm and enduring.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Halric Cliffstride", detail: "Steady on cliffs.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Varek Summitblade", detail: "Sharp and precise.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Doran Frostwhisker", detail: "Adapted to the cold.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Lorian Stonepaws", detail: "Strong and steadfast.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Aric Iceclaw", detail: "Tough in icy conditions.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Grigor Peakwalker", detail: "Skilled at high altitudes.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Thorne Snowfang", detail: "Adapted to snowy environments.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Korrin Cliffstride", detail: "Steady on cliffs.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Ragnar Ironclaw", detail: "Resilient and tough.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Boran Summitblade", detail: "Sharp and precise.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Halric Stonepaws", detail: "Strong and steadfast.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Varek Frostwhisker", detail: "Adapted to the cold.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Doran Mountainshade", detail: "Calm and enduring.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Lorian Boulderheart", detail: "Strong and resilient.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Aric Iceclaw", detail: "Tough in icy conditions.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Grigor Boulderheart", detail: "Strong and resilient.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Thorne Frostwhisker", detail: "Adapted to the cold.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Korrin Mountainshade", detail: "Calm and enduring.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Ragnar Summitblade", detail: "Sharp and precise.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Boran Cliffstride", detail: "Steady on cliffs.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Halric Peakwalker", detail: "Skilled at high altitudes.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Varek Stonepaws", detail: "Strong and steadfast.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Doran Ironclaw", detail: "Resilient and tough.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Lorian Snowfang", detail: "Adapted to snowy environments.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Aric Boulderheart", detail: "Strong and resilient.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Grigor Summitblade", detail: "Sharp and precise.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Thorne Stonepaws", detail: "Strong and steadfast.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Korrin Frostwhisker", detail: "Adapted to the cold.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Ragnar Iceclaw", detail: "Tough in icy conditions.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Boran Peakwalker", detail: "Skilled at high altitudes.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Halric Snowfang", detail: "Adapted to snowy environments.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Varek Cliffstride", detail: "Steady on cliffs.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Doran Stonepaws", detail: "Strong and steadfast.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Lorian Ironclaw", detail: "Resilient and tough.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Aric Mountainshade", detail: "Calm and enduring.", status: false, gender: "male", type: "mountain_climber" },
      { name: "Elara Frostpaws", detail: "Graceful and resilient in the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Kaela Cliffwhisper", detail: "Quiet and observant on cliffs.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Yara Stoneleaf", detail: "Strong and grounded.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Lyra Snowshade", detail: "Adapted to snowy environments.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Saria Mountainblossom", detail: "Flourishes in mountain conditions.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Thalia Icewhisker", detail: "Adapted to the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Mira Peakshadow", detail: "Mysterious and skilled at high altitudes.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Anya Boulderpetal", detail: "Resilient and steadfast.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Liora Summitclaw", detail: "Sharp and perceptive.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Freya Ironveil", detail: "Strong and protective.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Elara Cliffwhisper", detail: "Quiet and observant on cliffs.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Kaela Snowshade", detail: "Adapted to snowy environments.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Yara Icewhisker", detail: "Adapted to the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Lyra Stoneleaf", detail: "Strong and grounded.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Saria Summitclaw", detail: "Sharp and perceptive.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Thalia Boulderpetal", detail: "Resilient and steadfast.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Mira Mountainblossom", detail: "Flourishes in mountain conditions.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Anya Peakshadow", detail: "Mysterious and skilled at high altitudes.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Liora Frostpaws", detail: "Graceful and resilient in the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Freya Stoneleaf", detail: "Strong and grounded.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Elara Summitclaw", detail: "Sharp and perceptive.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Kaela Boulderpetal", detail: "Resilient and steadfast.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Yara Mountainblossom", detail: "Flourishes in mountain conditions.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Lyra Frostpaws", detail: "Graceful and resilient in the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Saria Cliffwhisper", detail: "Quiet and observant on cliffs.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Thalia Peakshadow", detail: "Mysterious and skilled at high altitudes.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Mira Stoneleaf", detail: "Strong and grounded.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Anya Icewhisker", detail: "Adapted to the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Liora Snowshade", detail: "Adapted to snowy environments.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Freya Summitclaw", detail: "Sharp and perceptive.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Elara Boulderpetal", detail: "Resilient and steadfast.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Kaela Frostpaws", detail: "Graceful and resilient in the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Yara Summitclaw", detail: "Sharp and perceptive.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Lyra Peakshadow", detail: "Mysterious and skilled at high altitudes.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Saria Stoneleaf", detail: "Strong and grounded.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Thalia Mountainblossom", detail: "Flourishes in mountain conditions.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Mira Snowshade", detail: "Adapted to snowy environments.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Anya Cliffwhisper", detail: "Quiet and observant on cliffs.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Liora Icewhisker", detail: "Adapted to the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Freya Boulderpetal", detail: "Resilient and steadfast.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Elara Snowshade", detail: "Adapted to snowy environments.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Kaela Peakshadow", detail: "Mysterious and skilled at high altitudes.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Yara Cliffwhisper", detail: "Quiet and observant on cliffs.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Lyra Mountainblossom", detail: "Flourishes in mountain conditions.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Saria Icewhisker", detail: "Adapted to the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Thalia Stoneleaf", detail: "Strong and grounded.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Mira Summitclaw", detail: "Sharp and perceptive.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Anya Frostpaws", detail: "Graceful and resilient in the cold.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Liora Boulderpetal", detail: "Resilient and steadfast.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Freya Stoneleaf", detail: "Strong and grounded.", status: false, gender: "female", type: "mountain_climber" },
      { name: "Orion Starclaw", detail: "Bold and adventurous.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Caelum Moonshadow", detail: "Mysterious and elusive.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Vega Nightwhisker", detail: "Quiet and observant.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Altair Lightpaws", detail: "Bright and energetic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Leo Starshadow", detail: "Steady and reliable.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Auron Dawnpelt", detail: "Fresh and optimistic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Lyric Celestus", detail: "Musical and serene.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Thorne Nebulapaw", detail: "Deep and contemplative.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Zarek Starlight", detail: "Radiant and inspiring.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Draven Astrafang", detail: "Fierce and determined.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Orion Nightwhisker", detail: "Quiet and observant.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Caelum Moonshadow", detail: "Mysterious and elusive.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Vega Starclaw", detail: "Bold and adventurous.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Altair Celestus", detail: "Musical and serene.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Leo Nebulapaw", detail: "Deep and contemplative.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Auron Lightpaws", detail: "Bright and energetic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Lyric Starlight", detail: "Radiant and inspiring.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Thorne Astrafang", detail: "Fierce and determined.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Zarek Dawnpelt", detail: "Fresh and optimistic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Draven Starshadow", detail: "Steady and reliable.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Orion Celestus", detail: "Musical and serene.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Caelum Nebulapaw", detail: "Deep and contemplative.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Vega Starlight", detail: "Radiant and inspiring.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Altair Astrafang", detail: "Fierce and determined.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Leo Nightwhisker", detail: "Quiet and observant.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Auron Moonshadow", detail: "Mysterious and elusive.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Lyric Dawnpelt", detail: "Fresh and optimistic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Thorne Lightpaws", detail: "Bright and energetic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Zarek Starshadow", detail: "Steady and reliable.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Draven Nebulapaw", detail: "Deep and contemplative.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Orion Lightpaws", detail: "Bright and energetic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Caelum Starlight", detail: "Radiant and inspiring.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Vega Celestus", detail: "Musical and serene.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Altair Starclaw", detail: "Bold and adventurous.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Leo Nebulapaw", detail: "Deep and contemplative.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Auron Nightwhisker", detail: "Quiet and observant.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Lyric Moonshadow", detail: "Mysterious and elusive.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Thorne Starshadow", detail: "Steady and reliable.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Zarek Dawnpelt", detail: "Fresh and optimistic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Draven Celestus", detail: "Musical and serene.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Orion Nebulapaw", detail: "Deep and contemplative.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Caelum Starlight", detail: "Radiant and inspiring.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Vega Moonshadow", detail: "Mysterious and elusive.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Altair Lightpaws", detail: "Bright and energetic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Leo Astrafang", detail: "Fierce and determined.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Auron Starclaw", detail: "Bold and adventurous.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Lyric Dawnpelt", detail: "Fresh and optimistic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Thorne Starlight", detail: "Radiant and inspiring.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Zarek Nightwhisker", detail: "Quiet and observant.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Draven Lightpaws", detail: "Bright and energetic.", status: false, gender: "male", type: "celestial_wanderer" },
      { name: "Lyra Starwhisper", detail: "Gentle and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selene Moonpetal", detail: "Delicate and graceful.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Astra Nova", detail: "Bright and new.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Elara Celestial", detail: "Majestic and ethereal.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Vega Nightshade", detail: "Mysterious and alluring.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Nova Lightbloom", detail: "Radiant and blossoming.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Aria Dawnveil", detail: "Melodic and promising.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selina Starlight", detail: "Shining and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Iris Nebulapaw", detail: "Mystical and intriguing.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Mira Starshadow", detail: "Elegant and observant.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Lyra Moonpetal", detail: "Delicate and graceful.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selene Nova", detail: "Bright and new.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Astra Celestial", detail: "Majestic and ethereal.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Elara Nightshade", detail: "Mysterious and alluring.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Vega Lightbloom", detail: "Radiant and blossoming.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Nova Dawnveil", detail: "Melodic and promising.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Aria Starwhisper", detail: "Gentle and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selina Nebulapaw", detail: "Mystical and intriguing.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Iris Starlight", detail: "Shining and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Mira Moonshadow", detail: "Elegant and observant.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Lyra Celestial", detail: "Majestic and ethereal.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selene Starlight", detail: "Shining and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Astra Nightshade", detail: "Mysterious and alluring.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Elara Starshadow", detail: "Elegant and observant.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Vega Moonpetal", detail: "Delicate and graceful.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Nova Starwhisper", detail: "Gentle and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Aria Lightbloom", detail: "Radiant and blossoming.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selina Dawnveil", detail: "Melodic and promising.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Iris Nova", detail: "Bright and new.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Mira Celestial", detail: "Majestic and ethereal.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Lyra Starlight", detail: "Shining and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selene Moonshadow", detail: "Delicate and graceful.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Astra Lightbloom", detail: "Radiant and blossoming.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Elara Starwhisper", detail: "Gentle and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Vega Dawnveil", detail: "Melodic and promising.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Nova Moonpetal", detail: "Delicate and graceful.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Aria Nightshade", detail: "Mysterious and alluring.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selina Starshadow", detail: "Elegant and observant.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Iris Lightbloom", detail: "Radiant and blossoming.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Mira Nova", detail: "Bright and new.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Lyra Dawnveil", detail: "Melodic and promising.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selene Celestial", detail: "Majestic and ethereal.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Astra Moonshadow", detail: "Delicate and graceful.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Elara Lightbloom", detail: "Radiant and blossoming.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Vega Starwhisper", detail: "Gentle and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Nova Nightshade", detail: "Mysterious and alluring.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Aria Moonpetal", detail: "Delicate and graceful.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Selina Celestial", detail: "Majestic and ethereal.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Iris Starlight", detail: "Shining and enchanting.", status: false, gender: "female", type: "celestial_wanderer" },
      { name: "Mira Dawnveil", detail: "Melodic and promising.", status: false, gender: "female", type: "celestial_wanderer" }
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
        name: "WoW (World of Warcraft) Name Generator",
        pic: "/wow.jpg",
        link: "https://www.nameideagenerator.com/wow-name-generator",
    },
    {
        name: "Horse Name Generator",
        pic: "horse.webp",
        link: "https://www.nameideagenerator.com/horse-name-generator",
    },
];

const TabaxiNameGenerator = () => {
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

    const bgImage = "/tabaxi.jpeg"
    const context = " Tabaxi Name Generator"

    const Q1 = "What is a Tabaxi Name Generator?"

    const A1 = 'It’s an online tool designed to create unique names for Tabaxi characters. Generate Tabaxi names online with a tool that would be useful for writing projects, games, and more.'
    
    const Q2 = "How does Tabaxi Name Generator work?"
    
    const A2 = 'The generator uses algorithms to combine different linguistic elements. It works by creating names that are both unique and suitable for Tabaxi characters.'
    
    const Q3 = "Are the names unique?"
    
    const A3 = "Yes, the generator aims to provide original names using an extensive database. So it is highly sure that you will get unique names."
    
    const Q4 = "Can I use the names for commercial purposes?"
    
    const A4 = "Yes, the names generated can be used for commercial purposes such as books, games, and other creative projects."
    
    const Q5 = "Do I need to create an account to use the generator?"
    
    const A5 = "No account is needed to use the basic features. However, creating an account allows you to save and revisit your favorite names."

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
        <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fantasy and Mythical Creatures Name </a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/tabaxi-name-generator" className="hover:underline text-[#343a40]">tabaxi Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Tabaxi Name Generator
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
                        <p className="text-center text-[#343a40]">Types of Tabaxi Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="jungle_hunter">Jungle Hunter</option>
                            <option value="desert_nomad">Desert Nomad</option>
                            <option value="mountain_climber">Mountain Climber</option>
                            <option value="celestial_wanderer">Celestial Wanderer</option>

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
                        Our Tabaxi Name Generator provides a streamlined solution for creating unique names tailored to your Tabaxi characters. The tool features a simple, intuitive interface that allows users to generate names with a single click. 
                        Designed for ease of use, it delivers a range of names that align with the mystical qualities of Tabaxi characters.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        The generator draws from an extensive database, ensuring a diverse selection of names to match various creative needs. 
                        Each name reflects the rich lore and nature-inspired attributes associated with Tabaxi, offering options that are both distinctive and fitting. 
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        All of its exclusive features make our tool an Ideal choice for fantasy writing, role-playing games, and other creative projects. 
                        Our tool simplifies the naming process, ensuring efficiency and relevance in every name generated.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Tabaxi Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Using our Tabaxi Name Generator is straightforward and enjoyable. Follow these simple steps to get started:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1 - Specify Traits
                            </h3>
                            <p>
                            Choose specific traits for the Tabaxi name, like adventurous, mysterious, or playful, to reflect the characteristics of the Tabaxi culture in fantasy settings.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2 - Select the Type
                            </h3>
                            <p>
                            Decide on the type of Tabaxi name you want, such as lyrical, descriptive, or influenced by their nomadic lifestyle.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Click on Generate
                            </h3>
                            <p>
                            Hit the "Generate" button to create a list of Tabaxi names based on your preferences.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4 - Review Names and Their Descriptions
                            </h3>
                            <p>
                            Names will appear on your screen. Hover over each to see details about the name's meaning, cultural background, and the role it might play in Tabaxi lore.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="tabaxi1.jpeg"
                            alt="Tabaxi Name Generator | DnD Tabaxi Name Generator With Meaning"
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="tabaxi2.jpeg"
                            alt="Tabaxi Name Generator | DnD Tabaxi Name Generator With Meaning"
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/tabaxi.jpeg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Tabaxi-Name-Generator
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
                    Why Use Our Tabaxi Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our Tabaxi Name Generator is designed to enhance your creative process with its practical features that are explained below:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Unlock Your Creativity
                                </h3>
                                <p>
                                Generate unique and captivating names for your Tabaxi characters. Our tool provides a steady stream of inspiration, 
                                enabling you to craft rich narratives and memorable characters for all your creative projects. 
                                Explore endless possibilities and find names that bring your fantasy world to life.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Save Time and Effort
                                </h3>
                                <p>
                                Naming your fiction Tabaxi characters can be a time-consuming task for you. 
                                Don’t worry now! Our generator streamlines this process by delivering a diverse set of names with a single click, 
                                freeing up valuable time and effort. Quickly get the names you need without the hassle of brainstorming for hours.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Ensure Consistency
                                </h3>
                                <p>
                                Maintain consistent naming across your projects effortlessly. 
                                The generator produces names that align with the thematic elements of your fantasy world, ensuring quality and coherence. 
                                Enhance the overall impact of your work by keeping character names in line with your creative vision.                          
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Professional Quality
                                </h3>
                                <p>
                                Achieve names of professional quality with our tool.
                                 It provides names that reflect the same level of effort and creativity you invest in your projects, whether for novels, games, movies, or any other purpose you want. 
                                Ensure your characters' names are as polished and engaging as the rest of your work.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Versatile Use Cases
                                </h3>
                                <p>
                                Our generator is versatile and caters to various needs such as fantasy writing, role-playing games, and character development. 
                                It produces such types of names that would be suitable for different contexts. All this makes it a valuable tool for any creative endeavor involving Tabaxi characters.                             
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                User-Friendly Experience
                                </h3>
                                <p>
                                Experience a smooth and intuitive naming process with our easy-to-use interface-containing tool. 
                                Even if you’re new to this tool, still you can generate names effortlessly without navigating complex settings. 
                                Enjoy a straightforward and hassle-free way to create perfect names for your Tabaxi characters.                       
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="tabaxi3.jpeg"
                            alt="Half-Elf"
                            class="w-[350px] my-[30px] h-[430px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="tabaxi4.webp"
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

export default TabaxiNameGenerator;

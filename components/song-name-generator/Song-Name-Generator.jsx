"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Electric Dreams", detail: "Futuristic and vibrant.", status: false, gender: "male", type: "pop_song" },
    { name: "Midnight Echo", detail: "Mysterious and evocative.", status: false, gender: "male", type: "pop_song" },
    { name: "Neon Nights", detail: "Bright and energetic.", status: false, gender: "male", type: "pop_song" },
    { name: "Radiant Glow", detail: "Shining and lively.", status: false, gender: "male", type: "pop_song" },
    { name: "Pulse of the City", detail: "Urban and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Luminous Love", detail: "Bright and romantic.", status: false, gender: "male", type: "pop_song" },
    { name: "Vibrant Skies", detail: "Colorful and uplifting.", status: false, gender: "male", type: "pop_song" },
    { name: "Echoes of Tomorrow", detail: "Future-oriented and reflective.", status: false, gender: "male", type: "pop_song" },
    { name: "Glittering Heart", detail: "Shiny and heartfelt.", status: false, gender: "male", type: "pop_song" },
    { name: "Twilight Symphony", detail: "Soft and harmonious.", status: false, gender: "male", type: "pop_song" },
    { name: "Dynamic Pulse", detail: "Energetic and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Shimmering Moments", detail: "Glistening and memorable.", status: false, gender: "male", type: "pop_song" },
    { name: "Urban Fantasy", detail: "City-inspired and imaginative.", status: false, gender: "male", type: "pop_song" },
    { name: "Sunset Groove", detail: "Relaxed and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Joyful Beats", detail: "Upbeat and happy.", status: false, gender: "male", type: "pop_song" },
    { name: "Cosmic Rhythm", detail: "Space-themed and pulsating.", status: false, gender: "male", type: "pop_song" },
    { name: "Radiant Echo", detail: "Bright and resonant.", status: false, gender: "male", type: "pop_song" },
    { name: "Enchanted Vibes", detail: "Magical and appealing.", status: false, gender: "male", type: "pop_song" },
    { name: "Daydream Drift", detail: "Relaxed and dreamy.", status: false, gender: "male", type: "pop_song" },
    { name: "Serene Melody", detail: "Calm and soothing.", status: false, gender: "male", type: "pop_song" },
    { name: "Glittering Echoes", detail: "Shiny and resonant.", status: false, gender: "male", type: "pop_song" },
    { name: "Starry Adventure", detail: "Cosmic and adventurous.", status: false, gender: "male", type: "pop_song" },
    { name: "Electric Pulse", detail: "Energetic and vibrant.", status: false, gender: "male", type: "pop_song" },
    { name: "Captivating Lights", detail: "Mesmerizing and bright.", status: false, gender: "male", type: "pop_song" },
    { name: "Melody Mirage", detail: "Illusive and melodic.", status: false, gender: "male", type: "pop_song" },
    { name: "Celestial Beats", detail: "Space-themed and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Bright Horizons", detail: "Optimistic and uplifting.", status: false, gender: "male", type: "pop_song" },
    { name: "Dreamscape Dance", detail: "Imaginative and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Sparkling Waves", detail: "Shiny and fluid.", status: false, gender: "male", type: "pop_song" },
    { name: "Harmonic Glow", detail: "Melodic and radiant.", status: false, gender: "male", type: "pop_song" },
    { name: "Neon Fantasy", detail: "Bright and imaginative.", status: false, gender: "male", type: "pop_song" },
    { name: "Radiant Reflections", detail: "Bright and reflective.", status: false, gender: "male", type: "pop_song" },
    { name: "Blissful Nights", detail: "Peaceful and enjoyable.", status: false, gender: "male", type: "pop_song" },
    { name: "Energetic Dawn", detail: "Vibrant and fresh.", status: false, gender: "male", type: "pop_song" },
    { name: "Euphoric Tunes", detail: "Joyful and uplifting.", status: false, gender: "male", type: "pop_song" },
    { name: "Urban Serenade", detail: "City-inspired and melodic.", status: false, gender: "male", type: "pop_song" },
    { name: "Midnight Mirage", detail: "Mysterious and dreamy.", status: false, gender: "male", type: "pop_song" },
    { name: "Enchanted Groove", detail: "Magical and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Stellar Pulse", detail: "Cosmic and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Joyful Journey", detail: "Happy and adventurous.", status: false, gender: "male", type: "pop_song" },
    { name: "Electric Love", detail: "Energetic and romantic.", status: false, gender: "male", type: "pop_song" },
    { name: "Shining Horizon", detail: "Bright and hopeful.", status: false, gender: "male", type: "pop_song" },
    { name: "Twilight Dreams", detail: "Mellow and imaginative.", status: false, gender: "male", type: "pop_song" },
    { name: "Radiant Adventure", detail: "Bright and exploratory.", status: false, gender: "male", type: "pop_song" },
    { name: "Echoing Light", detail: "Resonant and bright.", status: false, gender: "male", type: "pop_song" },
    { name: "Vivid Horizon", detail: "Bright and optimistic.", status: false, gender: "male", type: "pop_song" },
    { name: "Daydream Echo", detail: "Dreamy and reflective.", status: false, gender: "male", type: "pop_song" },
    { name: "Luminous Glow", detail: "Radiant and bright.", status: false, gender: "male", type: "pop_song" },
    { name: "Stardust Journey", detail: "Cosmic and adventurous.", status: false, gender: "male", type: "pop_song" },
    { name: "Brilliant Beats", detail: "Shiny and rhythmic.", status: false, gender: "male", type: "pop_song" },
    { name: "Summer Breeze", detail: "Light and refreshing.", status: false, gender: "female", type: "pop_song" },
    { name: "Sweetest Desire", detail: "Romantic and passionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Endless Romance", detail: "Timeless and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Secret Whisper", detail: "Intimate and mysterious.", status: false, gender: "female", type: "pop_song" },
    { name: "Tender Moments", detail: "Gentle and affectionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Moonlight Magic", detail: "Enchanting and serene.", status: false, gender: "female", type: "pop_song" },
    { name: "Dreamy Affection", detail: "Soft and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Embracing Hearts", detail: "Warm and connected.", status: false, gender: "female", type: "pop_song" },
    { name: "Romantic Drift", detail: "Gentle and dreamy.", status: false, gender: "female", type: "pop_song" },
    { name: "Soulmate Serenade", detail: "Deep and heartfelt.", status: false, gender: "female", type: "pop_song" },
    { name: "Tender Heartbeat", detail: "Soft and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Love's Horizon", detail: "Romantic and hopeful.", status: false, gender: "female", type: "pop_song" },
    { name: "Sweet Reverie", detail: "Dreamy and romantic.", status: false, gender: "female", type: "pop_song" },
    { name: "Heartfelt Whispers", detail: "Intimate and sincere.", status: false, gender: "female", type: "pop_song" },
    { name: "Infinite Passion", detail: "Endless and intense.", status: false, gender: "female", type: "pop_song" },
    { name: "Enchanted Moments", detail: "Magical and memorable.", status: false, gender: "female", type: "pop_song" },
    { name: "Timeless Affection", detail: "Enduring and warm.", status: false, gender: "female", type: "pop_song" },
    { name: "Secret Heartbeat", detail: "Hidden and tender.", status: false, gender: "female", type: "pop_song" },
    { name: "Passionate Whispers", detail: "Intimate and intense.", status: false, gender: "female", type: "pop_song" },
    { name: "Loving Horizon", detail: "Romantic and hopeful.", status: false, gender: "female", type: "pop_song" },
    { name: "Dreamy Caress", detail: "Soft and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Endless Affection", detail: "Timeless and caring.", status: false, gender: "female", type: "pop_song" },
    { name: "Sweet Romance", detail: "Tender and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Eternal Serenade", detail: "Timeless and melodic.", status: false, gender: "female", type: "pop_song" },
    { name: "Tender Dream", detail: "Gentle and affectionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Enchanted Kiss", detail: "Magical and romantic.", status: false, gender: "female", type: "pop_song" },
    { name: "Soulful Embrace", detail: "Deep and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Heartfelt Desire", detail: "Sincere and passionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Romantic Whisper", detail: "Gentle and intimate.", status: false, gender: "female", type: "pop_song" },
    { name: "Sweet Love's Echo", detail: "Tender and memorable.", status: false, gender: "female", type: "pop_song" },
    { name: "Gentle Serenade", detail: "Soft and melodic.", status: false, gender: "female", type: "pop_song" },
    { name: "Infinite Devotion", detail: "Endless and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Loving Caress", detail: "Tender and affectionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Eternal Whispers", detail: "Timeless and intimate.", status: false, gender: "female", type: "pop_song" },
    { name: "Tender Moments", detail: "Gentle and affectionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Enchanted Heart", detail: "Magical and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Secret Passion", detail: "Hidden and intense.", status: false, gender: "female", type: "pop_song" },
    { name: "Dreamy Embrace", detail: "Soft and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Endless Desire", detail: "Timeless and passionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Radiant Love", detail: "Bright and romantic.", status: false, gender: "female", type: "pop_song" },
    { name: "Warm Embrace", detail: "Gentle and comforting.", status: false, gender: "female", type: "pop_song" },
    { name: "Melodic Kiss", detail: "Soft and harmonious.", status: false, gender: "female", type: "pop_song" },
    { name: "Heartfelt Serenade", detail: "Sincere and melodic.", status: false, gender: "female", type: "pop_song" },
    { name: "Loving Whisper", detail: "Tender and intimate.", status: false, gender: "female", type: "pop_song" },
    { name: "Gentle Affection", detail: "Soft and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Eternal Caress", detail: "Timeless and tender.", status: false, gender: "female", type: "pop_song" },
    { name: "Dreamy Affection", detail: "Soft and loving.", status: false, gender: "female", type: "pop_song" },
    { name: "Enchanted Desire", detail: "Magical and passionate.", status: false, gender: "female", type: "pop_song" },
    { name: "Romantic Glow", detail: "Tender and glowing.", status: false, gender: "female", type: "pop_song" },
    { name: "Soft Embrace", detail: "Gentle and warm.", status: false, gender: "female", type: "pop_song" },
    { name: "Thunder Strikes", detail: "Powerful and intense.", status: false, gender: "male", type: "rock_song" },
      { name: "Rebel Heart", detail: "Defiant and passionate.", status: false, gender: "male", type: "rock_song" },
      { name: "Iron Fury", detail: "Strong and fierce.", status: false, gender: "male", type: "rock_song" },
      { name: "Raging Storm", detail: "Violent and tumultuous.", status: false, gender: "male", type: "rock_song" },
      { name: "Shadow Drive", detail: "Dark and forceful.", status: false, gender: "male", type: "rock_song" },
      { name: "Electric Inferno", detail: "Fiery and electrifying.", status: false, gender: "male", type: "rock_song" },
      { name: "Steel Horizon", detail: "Strong and unyielding.", status: false, gender: "male", type: "rock_song" },
      { name: "Midnight Rebellion", detail: "Late-night and rebellious.", status: false, gender: "male", type: "rock_song" },
      { name: "Vortex of Fire", detail: "Intense and swirling.", status: false, gender: "male", type: "rock_song" },
      { name: "Broken Chains", detail: "Liberating and powerful.", status: false, gender: "male", type: "rock_song" },
      { name: "Fury Road", detail: "Aggressive and relentless.", status: false, gender: "male", type: "rock_song" },
      { name: "Iron Echo", detail: "Resonant and strong.", status: false, gender: "male", type: "rock_song" },
      { name: "Raging Thunder", detail: "Loud and dynamic.", status: false, gender: "male", type: "rock_song" },
      { name: "Shadow Riff", detail: "Dark and melodic.", status: false, gender: "male", type: "rock_song" },
      { name: "Electric Tide", detail: "Powerful and flowing.", status: false, gender: "male", type: "rock_song" },
      { name: "Roaring Blaze", detail: "Intense and fiery.", status: false, gender: "male", type: "rock_song" },
      { name: "Dark Anthem", detail: "Mysterious and commanding.", status: false, gender: "male", type: "rock_song" },
      { name: "Stormbreaker", detail: "Forceful and dominant.", status: false, gender: "male", type: "rock_song" },
      { name: "Venomous Heart", detail: "Dangerous and passionate.", status: false, gender: "male", type: "rock_song" },
      { name: "Rebel Riff", detail: "Defiant and musical.", status: false, gender: "male", type: "rock_song" },
      { name: "Shattered Silence", detail: "Broken and loud.", status: false, gender: "male", type: "rock_song" },
      { name: "Steel Storm", detail: "Powerful and intense.", status: false, gender: "male", type: "rock_song" },
      { name: "Inferno Rise", detail: "Fiery and uplifting.", status: false, gender: "male", type: "rock_song" },
      { name: "Midnight Fury", detail: "Intense and late-night.", status: false, gender: "male", type: "rock_song" },
      { name: "Roaring Thunder", detail: "Loud and dynamic.", status: false, gender: "male", type: "rock_song" },
      { name: "Shadow Rage", detail: "Dark and furious.", status: false, gender: "male", type: "rock_song" },
      { name: "Electric Assault", detail: "Intense and striking.", status: false, gender: "male", type: "rock_song" },
      { name: "Iron Veins", detail: "Strong and resilient.", status: false, gender: "male", type: "rock_song" },
      { name: "Rebel Edge", detail: "Sharp and defiant.", status: false, gender: "male", type: "rock_song" },
      { name: "Vortex Clash", detail: "Dynamic and chaotic.", status: false, gender: "male", type: "rock_song" },
      { name: "Dark Thunder", detail: "Loud and mysterious.", status: false, gender: "male", type: "rock_song" },
      { name: "Raging Inferno", detail: "Fiery and fierce.", status: false, gender: "male", type: "rock_song" },
      { name: "Steel Rebellion", detail: "Strong and defiant.", status: false, gender: "male", type: "rock_song" },
      { name: "Midnight Clash", detail: "Late-night and intense.", status: false, gender: "male", type: "rock_song" },
      { name: "Roaring Echo", detail: "Loud and resonant.", status: false, gender: "male", type: "rock_song" },
      { name: "Shadow Surge", detail: "Dark and powerful.", status: false, gender: "male", type: "rock_song" },
      { name: "Electric Veins", detail: "Intense and energetic.", status: false, gender: "male", type: "rock_song" },
      { name: "Thunderbolt Anthem", detail: "Powerful and commanding.", status: false, gender: "male", type: "rock_song" },
      { name: "Iron Legacy", detail: "Strong and enduring.", status: false, gender: "male", type: "rock_song" },
      { name: "Rebel Roar", detail: "Defiant and loud.", status: false, gender: "male", type: "rock_song" },
      { name: "Vortex of Shadows", detail: "Mysterious and swirling.", status: false, gender: "male", type: "rock_song" },
      { name: "Dark Storm", detail: "Intense and turbulent.", status: false, gender: "male", type: "rock_song" },
      { name: "Midnight Riff", detail: "Late-night and melodic.", status: false, gender: "male", type: "rock_song" },
      { name: "Roaring Pulse", detail: "Dynamic and intense.", status: false, gender: "male", type: "rock_song" },
      { name: "Shadow Blaze", detail: "Dark and fiery.", status: false, gender: "male", type: "rock_song" },
      { name: "Electric Fury", detail: "Powerful and intense.", status: false, gender: "male", type: "rock_song" },
      { name: "Iron Charge", detail: "Strong and assertive.", status: false, gender: "male", type: "rock_song" },
      { name: "Rebel Rise", detail: "Defiant and uplifting.", status: false, gender: "male", type: "rock_song" },
      { name: "Vortex of Fire", detail: "Intense and swirling.", status: false, gender: "male", type: "rock_song" },
      { name: "Dark Echo", detail: "Mysterious and resonant.", status: false, gender: "male", type: "rock_song" },
      { name: "Storm Queen", detail: "Powerful and regal.", status: false, gender: "female", type: "rock_song" },
      { name: "Rebel Fire", detail: "Defiant and fiery.", status: false, gender: "female", type: "rock_song" },
      { name: "Iron Angel", detail: "Strong and divine.", status: false, gender: "female", type: "rock_song" },
      { name: "Thunder Fury", detail: "Intense and powerful.", status: false, gender: "female", type: "rock_song" },
      { name: "Midnight Vixen", detail: "Late-night and edgy.", status: false, gender: "female", type: "rock_song" },
      { name: "Dark Riff", detail: "Mysterious and melodic.", status: false, gender: "female", type: "rock_song" },
      { name: "Blaze Heart", detail: "Fiery and passionate.", status: false, gender: "female", type: "rock_song" },
      { name: "Shattered Silence", detail: "Broken and loud.", status: false, gender: "female", type: "rock_song" },
      { name: "Electric Valkyrie", detail: "Powerful and mythical.", status: false, gender: "female", type: "rock_song" },
      { name: "Roaring Tempest", detail: "Intense and turbulent.", status: false, gender: "female", type: "rock_song" },
      { name: "Fury Maiden", detail: "Aggressive and strong.", status: false, gender: "female", type: "rock_song" },
      { name: "Shadow Blaze", detail: "Dark and fiery.", status: false, gender: "female", type: "rock_song" },
      { name: "Raging Diva", detail: "Powerful and fierce.", status: false, gender: "female", type: "rock_song" },
      { name: "Steel Empress", detail: "Strong and commanding.", status: false, gender: "female", type: "rock_song" },
      { name: "Iron Storm", detail: "Powerful and relentless.", status: false, gender: "female", type: "rock_song" },
      { name: "Dark Whisper", detail: "Mysterious and subtle.", status: false, gender: "female", type: "rock_song" },
      { name: "Venomous Vibe", detail: "Dangerous and edgy.", status: false, gender: "female", type: "rock_song" },
      { name: "Rebel Queen", detail: "Defiant and regal.", status: false, gender: "female", type: "rock_song" },
      { name: "Midnight Blaze", detail: "Fiery and late-night.", status: false, gender: "female", type: "rock_song" },
      { name: "Thunderstorm", detail: "Intense and turbulent.", status: false, gender: "female", type: "rock_song" },
      { name: "Steel Dreamer", detail: "Strong and visionary.", status: false, gender: "female", type: "rock_song" },
      { name: "Vortex Maiden", detail: "Dynamic and mysterious.", status: false, gender: "female", type: "rock_song" },
      { name: "Shadow Tempest", detail: "Dark and tumultuous.", status: false, gender: "female", type: "rock_song" },
      { name: "Iron Siren", detail: "Strong and alluring.", status: false, gender: "female", type: "rock_song" },
      { name: "Electric Fury", detail: "Powerful and intense.", status: false, gender: "female", type: "rock_song" },
      { name: "Roaring Siren", detail: "Loud and captivating.", status: false, gender: "female", type: "rock_song" },
      { name: "Raging Empress", detail: "Powerful and commanding.", status: false, gender: "female", type: "rock_song" },
      { name: "Storm Maiden", detail: "Powerful and ethereal.", status: false, gender: "female", type: "rock_song" },
      { name: "Dark Angel", detail: "Mysterious and divine.", status: false, gender: "female", type: "rock_song" },
      { name: "Blaze Diva", detail: "Fiery and fierce.", status: false, gender: "female", type: "rock_song" },
      { name: "Rebel Tempest", detail: "Defiant and turbulent.", status: false, gender: "female", type: "rock_song" },
      { name: "Midnight Riff", detail: "Late-night and melodic.", status: false, gender: "female", type: "rock_song" },
      { name: "Thunder Vixen", detail: "Powerful and edgy.", status: false, gender: "female", type: "rock_song" },
      { name: "Iron Valkyrie", detail: "Strong and mythical.", status: false, gender: "female", type: "rock_song" },
      { name: "Shadow Heart", detail: "Dark and passionate.", status: false, gender: "female", type: "rock_song" },
      { name: "Steel Fury", detail: "Strong and intense.", status: false, gender: "female", type: "rock_song" },
      { name: "Electric Empress", detail: "Powerful and commanding.", status: false, gender: "female", type: "rock_song" },
      { name: "Raging Siren", detail: "Intense and captivating.", status: false, gender: "female", type: "rock_song" },
      { name: "Roaring Queen", detail: "Loud and regal.", status: false, gender: "female", type: "rock_song" },
      { name: "Dark Valkyrie", detail: "Mysterious and strong.", status: false, gender: "female", type: "rock_song" },
      { name: "Thunder Blaze", detail: "Fiery and powerful.", status: false, gender: "female", type: "rock_song" },
      { name: "Rebel Blaze", detail: "Defiant and fiery.", status: false, gender: "female", type: "rock_song" },
      { name: "Iron Tempest", detail: "Strong and turbulent.", status: false, gender: "female", type: "rock_song" },
      { name: "Midnight Whisper", detail: "Late-night and subtle.", status: false, gender: "female", type: "rock_song" },
      { name: "Vortex Fury", detail: "Dynamic and intense.", status: false, gender: "female", type: "rock_song" },
      { name: "Storm Siren", detail: "Powerful and captivating.", status: false, gender: "female", type: "rock_song" },
      { name: "Raging Queen", detail: "Intense and regal.", status: false, gender: "female", type: "rock_song" },
      { name: "Electric Diva", detail: "Powerful and fierce.", status: false, gender: "female", type: "rock_song" },
      { name: "Shadow Fury", detail: "Dark and intense.", status: false, gender: "female", type: "rock_song" },
      { name: "Steel Blaze", detail: "Strong and fiery.", status: false, gender: "female", type: "rock_song" },
      { name: "Endless Embrace", detail: "Eternal and intimate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Whispering Love", detail: "Soft and tender.", status: false, gender: "male", type: "romantic_song" },
      { name: "Heartfelt Serenade", detail: "Sincere and melodic.", status: false, gender: "male", type: "romantic_song" },
      { name: "Moonlit Kiss", detail: "Romantic and dreamy.", status: false, gender: "male", type: "romantic_song" },
      { name: "Eternal Flame", detail: "Enduring and passionate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Tender Moments", detail: "Gentle and intimate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Sweetest Desire", detail: "Deep and longing.", status: false, gender: "male", type: "romantic_song" },
      { name: "Endless Romance", detail: "Never-ending and loving.", status: false, gender: "male", type: "romantic_song" },
      { name: "Secret Whisper", detail: "Mysterious and intimate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Loving Echo", detail: "Warm and resonant.", status: false, gender: "male", type: "romantic_song" },
      { name: "Heartstrings Play", detail: "Emotional and touching.", status: false, gender: "male", type: "romantic_song" },
      { name: "Passionate Glow", detail: "Intense and warm.", status: false, gender: "male", type: "romantic_song" },
      { name: "Timeless Devotion", detail: "Enduring and committed.", status: false, gender: "male", type: "romantic_song" },
      { name: "Gentle Caress", detail: "Soft and affectionate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Enchanted Love", detail: "Magical and captivating.", status: false, gender: "male", type: "romantic_song" },
      { name: "Dreamy Affection", detail: "Soft and romantic.", status: false, gender: "male", type: "romantic_song" },
      { name: "Embracing Hearts", detail: "Unified and loving.", status: false, gender: "male", type: "romantic_song" },
      { name: "Eternal Embrace", detail: "Enduring and warm.", status: false, gender: "male", type: "romantic_song" },
      { name: "Romantic Drift", detail: "Gentle and flowing.", status: false, gender: "male", type: "romantic_song" },
      { name: "Soulmate Serenade", detail: "Deep and meaningful.", status: false, gender: "male", type: "romantic_song" },
      { name: "Tender Heartbeat", detail: "Soft and rhythmic.", status: false, gender: "male", type: "romantic_song" },
      { name: "Love's Horizon", detail: "Endless and hopeful.", status: false, gender: "male", type: "romantic_song" },
      { name: "Sweet Reverie", detail: "Dreamy and tender.", status: false, gender: "male", type: "romantic_song" },
      { name: "Heartfelt Whispers", detail: "Sincere and soft.", status: false, gender: "male", type: "romantic_song" },
      { name: "Infinite Passion", detail: "Boundless and intense.", status: false, gender: "male", type: "romantic_song" },
      { name: "Gentle Love", detail: "Tender and soft.", status: false, gender: "male", type: "romantic_song" },
      { name: "Enchanted Moments", detail: "Magical and special.", status: false, gender: "male", type: "romantic_song" },
      { name: "Timeless Affection", detail: "Enduring and warm.", status: false, gender: "male", type: "romantic_song" },
      { name: "Secret Heartbeat", detail: "Mysterious and rhythmic.", status: false, gender: "male", type: "romantic_song" },
      { name: "Passionate Whispers", detail: "Intimate and fiery.", status: false, gender: "male", type: "romantic_song" },
      { name: "Loving Horizon", detail: "Endless and loving.", status: false, gender: "male", type: "romantic_song" },
      { name: "Dreamy Caress", detail: "Soft and tender.", status: false, gender: "male", type: "romantic_song" },
      { name: "Endless Affection", detail: "Never-ending and warm.", status: false, gender: "male", type: "romantic_song" },
      { name: "Sweet Romance", detail: "Tender and loving.", status: false, gender: "male", type: "romantic_song" },
      { name: "Eternal Serenade", detail: "Enduring and melodious.", status: false, gender: "male", type: "romantic_song" },
      { name: "Tender Dream", detail: "Gentle and dreamy.", status: false, gender: "male", type: "romantic_song" },
      { name: "Enchanted Kiss", detail: "Magical and tender.", status: false, gender: "male", type: "romantic_song" },
      { name: "Soulful Embrace", detail: "Deep and affectionate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Heartfelt Desire", detail: "Sincere and longing.", status: false, gender: "male", type: "romantic_song" },
      { name: "Romantic Whisper", detail: "Soft and loving.", status: false, gender: "male", type: "romantic_song" },
      { name: "Sweet Love's Echo", detail: "Tender and resonant.", status: false, gender: "male", type: "romantic_song" },
      { name: "Gentle Serenade", detail: "Soft and melodic.", status: false, gender: "male", type: "romantic_song" },
      { name: "Infinite Devotion", detail: "Boundless and committed.", status: false, gender: "male", type: "romantic_song" },
      { name: "Loving Caress", detail: "Tender and affectionate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Eternal Whispers", detail: "Enduring and soft.", status: false, gender: "male", type: "romantic_song" },
      { name: "Tender Moments", detail: "Gentle and loving.", status: false, gender: "male", type: "romantic_song" },
      { name: "Enchanted Heart", detail: "Magical and warm.", status: false, gender: "male", type: "romantic_song" },
      { name: "Secret Passion", detail: "Hidden and intense.", status: false, gender: "male", type: "romantic_song" },
      { name: "Dreamy Embrace", detail: "Tender and dreamy.", status: false, gender: "male", type: "romantic_song" },
      { name: "Endless Desire", detail: "Never-ending and passionate.", status: false, gender: "male", type: "romantic_song" },
      { name: "Heartfelt Melody", detail: "Sincere and melodious.", status: false, gender: "female", type: "romantic_song" },
      { name: "Sweet Embrace", detail: "Tender and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Tender Kiss", detail: "Soft and affectionate.", status: false, gender: "female", type: "romantic_song" },
      { name: "Eternal Love", detail: "Enduring and deep.", status: false, gender: "female", type: "romantic_song" },
      { name: "Whispered Affection", detail: "Soft and intimate.", status: false, gender: "female", type: "romantic_song" },
      { name: "Moonlight Romance", detail: "Dreamy and enchanting.", status: false, gender: "female", type: "romantic_song" },
      { name: "Endless Devotion", detail: "Never-ending and committed.", status: false, gender: "female", type: "romantic_song" },
      { name: "Passionate Heart", detail: "Intense and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Dreamy Whisper", detail: "Soft and dreamy.", status: false, gender: "female", type: "romantic_song" },
      { name: "Enchanted Love", detail: "Magical and captivating.", status: false, gender: "female", type: "romantic_song" },
      { name: "Sweet Serenity", detail: "Calm and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Timeless Tenderness", detail: "Enduring and soft.", status: false, gender: "female", type: "romantic_song" },
      { name: "Gentle Heart", detail: "Tender and warm.", status: false, gender: "female", type: "romantic_song" },
      { name: "Eternal Flame", detail: "Passionate and enduring.", status: false, gender: "female", type: "romantic_song" },
      { name: "Loving Embrace", detail: "Warm and affectionate.", status: false, gender: "female", type: "romantic_song" },
      { name: "Romantic Whisper", detail: "Soft and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Soft Serenade", detail: "Gentle and melodious.", status: false, gender: "female", type: "romantic_song" },
      { name: "Infinite Romance", detail: "Boundless and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Secret Desire", detail: "Hidden and intense.", status: false, gender: "female", type: "romantic_song" },
      { name: "Embracing Affection", detail: "Warm and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Tender Moonlight", detail: "Soft and enchanting.", status: false, gender: "female", type: "romantic_song" },
      { name: "Heartfelt Dreams", detail: "Sincere and dreamy.", status: false, gender: "female", type: "romantic_song" },
      { name: "Enchanted Embrace", detail: "Magical and tender.", status: false, gender: "female", type: "romantic_song" },
      { name: "Sweet Passion", detail: "Tender and intense.", status: false, gender: "female", type: "romantic_song" },
      { name: "Loving Melody", detail: "Warm and melodious.", status: false, gender: "female", type: "romantic_song" },
      { name: "Timeless Heart", detail: "Enduring and deep.", status: false, gender: "female", type: "romantic_song" },
      { name: "Dreamy Affection", detail: "Soft and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Endless Whisper", detail: "Never-ending and soft.", status: false, gender: "female", type: "romantic_song" },
      { name: "Passionate Serenade", detail: "Intense and melodic.", status: false, gender: "female", type: "romantic_song" },
      { name: "Eternal Desire", detail: "Enduring and passionate.", status: false, gender: "female", type: "romantic_song" },
      { name: "Tender Love", detail: "Soft and affectionate.", status: false, gender: "female", type: "romantic_song" },
      { name: "Romantic Bliss", detail: "Happy and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Whispered Dream", detail: "Soft and dreamy.", status: false, gender: "female", type: "romantic_song" },
      { name: "Sweet Eternity", detail: "Enduring and tender.", status: false, gender: "female", type: "romantic_song" },
      { name: "Loving Whisper", detail: "Tender and soft.", status: false, gender: "female", type: "romantic_song" },
      { name: "Enchanted Caress", detail: "Magical and tender.", status: false, gender: "female", type: "romantic_song" },
      { name: "Infinite Tenderness", detail: "Boundless and soft.", status: false, gender: "female", type: "romantic_song" },
      { name: "Heartfelt Serenade", detail: "Sincere and melodic.", status: false, gender: "female", type: "romantic_song" },
      { name: "Dreamy Embrace", detail: "Tender and dreamy.", status: false, gender: "female", type: "romantic_song" },
      { name: "Timeless Romance", detail: "Enduring and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Soft Desire", detail: "Gentle and yearning.", status: false, gender: "female", type: "romantic_song" },
      { name: "Eternal Kiss", detail: "Enduring and tender.", status: false, gender: "female", type: "romantic_song" },
      { name: "Sweet Whisper", detail: "Tender and soft.", status: false, gender: "female", type: "romantic_song" },
      { name: "Loving Harmony", detail: "Warm and melodic.", status: false, gender: "female", type: "romantic_song" },
      { name: "Tender Devotion", detail: "Soft and committed.", status: false, gender: "female", type: "romantic_song" },
      { name: "Romantic Heart", detail: "Loving and deep.", status: false, gender: "female", type: "romantic_song" },
      { name: "Enchanted Whisper", detail: "Magical and soft.", status: false, gender: "female", type: "romantic_song" },
      { name: "Dreamy Serenade", detail: "Soft and melodious.", status: false, gender: "female", type: "romantic_song" },
      { name: "Heartfelt Desire", detail: "Sincere and longing.", status: false, gender: "female", type: "romantic_song" },
      { name: "Endless Affection", detail: "Never-ending and loving.", status: false, gender: "female", type: "romantic_song" },
      { name: "Neon Pulse", detail: "Bright and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Digital Dreams", detail: "Futuristic and imaginative.", status: false, gender: "male", type: "electronic_song" },
      { name: "Synthwave Odyssey", detail: "Retro and adventurous.", status: false, gender: "male", type: "electronic_song" },
      { name: "Electric Mirage", detail: "Illusory and vibrant.", status: false, gender: "male", type: "electronic_song" },
      { name: "Cyber Glow", detail: "High-tech and bright.", status: false, gender: "male", type: "electronic_song" },
      { name: "Pixelated Beats", detail: "Retro and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Virtual Vibes", detail: "Digital and smooth.", status: false, gender: "male", type: "electronic_song" },
      { name: "Quantum Pulse", detail: "Cutting-edge and dynamic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Neon Rhythm", detail: "Bright and steady.", status: false, gender: "male", type: "electronic_song" },
      { name: "Digital Echo", detail: "Reverberating and modern.", status: false, gender: "male", type: "electronic_song" },
      { name: "Futuristic Groove", detail: "Innovative and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Electra Dream", detail: "Electric and surreal.", status: false, gender: "male", type: "electronic_song" },
      { name: "Cosmic Beat", detail: "Space-themed and driving.", status: false, gender: "male", type: "electronic_song" },
      { name: "Digital Harmony", detail: "Balanced and electronic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Neon Waves", detail: "Bright and flowing.", status: false, gender: "male", type: "electronic_song" },
      { name: "Techno Pulse", detail: "Driving and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Virtual Symphony", detail: "Digital and orchestral.", status: false, gender: "male", type: "electronic_song" },
      { name: "Synth Odyssey", detail: "Adventurous and electronic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Quantum Echo", detail: "Innovative and reverberating.", status: false, gender: "male", type: "electronic_song" },
      { name: "Electric Stream", detail: "Constant and electrifying.", status: false, gender: "male", type: "electronic_song" },
      { name: "Pixel Pulse", detail: "Retro and pulsating.", status: false, gender: "male", type: "electronic_song" },
      { name: "Cyber Waves", detail: "High-tech and flowing.", status: false, gender: "male", type: "electronic_song" },
      { name: "Digital Drift", detail: "Electronic and smooth.", status: false, gender: "male", type: "electronic_song" },
      { name: "Neon Vortex", detail: "Bright and swirling.", status: false, gender: "male", type: "electronic_song" },
      { name: "Futuristic Rhythm", detail: "Innovative and steady.", status: false, gender: "male", type: "electronic_song" },
      { name: "Electra Pulse", detail: "Dynamic and electric.", status: false, gender: "male", type: "electronic_song" },
      { name: "Cosmic Glow", detail: "Space-themed and radiant.", status: false, gender: "male", type: "electronic_song" },
      { name: "Virtual Harmony", detail: "Digital and balanced.", status: false, gender: "male", type: "electronic_song" },
      { name: "Techno Mirage", detail: "Illusory and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Digital Waves", detail: "Electronic and flowing.", status: false, gender: "male", type: "electronic_song" },
      { name: "Synth Stream", detail: "Electronic and smooth.", status: false, gender: "male", type: "electronic_song" },
      { name: "Quantum Beat", detail: "Innovative and driving.", status: false, gender: "male", type: "electronic_song" },
      { name: "Electric Odyssey", detail: "Adventurous and electrifying.", status: false, gender: "male", type: "electronic_song" },
      { name: "Pixel Groove", detail: "Retro and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Cyber Pulse", detail: "High-tech and pulsating.", status: false, gender: "male", type: "electronic_song" },
      { name: "Neon Symphony", detail: "Bright and orchestral.", status: false, gender: "male", type: "electronic_song" },
      { name: "Digital Rhythm", detail: "Electronic and steady.", status: false, gender: "male", type: "electronic_song" },
      { name: "Virtual Vortex", detail: "Digital and swirling.", status: false, gender: "male", type: "electronic_song" },
      { name: "Electra Echo", detail: "Electric and reverberating.", status: false, gender: "male", type: "electronic_song" },
      { name: "Futuristic Beats", detail: "Innovative and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Cosmic Drift", detail: "Space-themed and smooth.", status: false, gender: "male", type: "electronic_song" },
      { name: "Synthwave Pulse", detail: "Retro and dynamic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Electric Harmony", detail: "Balanced and electrifying.", status: false, gender: "male", type: "electronic_song" },
      { name: "Quantum Waves", detail: "Innovative and flowing.", status: false, gender: "male", type: "electronic_song" },
      { name: "Pixel Vibes", detail: "Retro and smooth.", status: false, gender: "male", type: "electronic_song" },
      { name: "Cyber Groove", detail: "High-tech and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Digital Mirage", detail: "Illusory and electronic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Neon Stream", detail: "Bright and continuous.", status: false, gender: "male", type: "electronic_song" },
      { name: "Virtual Beat", detail: "Digital and rhythmic.", status: false, gender: "male", type: "electronic_song" },
      { name: "Techno Echo", detail: "Rhythmic and reverberating.", status: false, gender: "male", type: "electronic_song" },
      { name: "Neon Dream", detail: "Bright and imaginative.", status: false, gender: "female", type: "electronic_song" },
      { name: "Cosmic Glow", detail: "Space-themed and radiant.", status: false, gender: "female", type: "electronic_song" },
      { name: "Digital Vibes", detail: "Electronic and smooth.", status: false, gender: "female", type: "electronic_song" },
      { name: "Synth Mirage", detail: "Illusory and melodic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electric Pulse", detail: "Dynamic and rhythmic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Quantum Waves", detail: "Innovative and flowing.", status: false, gender: "female", type: "electronic_song" },
      { name: "Pixel Harmony", detail: "Retro and balanced.", status: false, gender: "female", type: "electronic_song" },
      { name: "Futuristic Echo", detail: "Modern and reverberating.", status: false, gender: "female", type: "electronic_song" },
      { name: "Neon Symphony", detail: "Bright and orchestral.", status: false, gender: "female", type: "electronic_song" },
      { name: "Digital Drift", detail: "Electronic and smooth.", status: false, gender: "female", type: "electronic_song" },
      { name: "Virtual Vortex", detail: "Digital and swirling.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electra Beat", detail: "Electric and rhythmic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Cosmic Pulse", detail: "Space-themed and dynamic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Neon Rhythm", detail: "Bright and steady.", status: false, gender: "female", type: "electronic_song" },
      { name: "Synthwave Flow", detail: "Retro and smooth.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electric Stream", detail: "Continuous and electrifying.", status: false, gender: "female", type: "electronic_song" },
      { name: "Quantum Dream", detail: "Innovative and surreal.", status: false, gender: "female", type: "electronic_song" },
      { name: "Pixel Glow", detail: "Retro and radiant.", status: false, gender: "female", type: "electronic_song" },
      { name: "Virtual Waves", detail: "Digital and flowing.", status: false, gender: "female", type: "electronic_song" },
      { name: "Techno Serenade", detail: "Rhythmic and melodic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Cosmic Harmony", detail: "Space-themed and balanced.", status: false, gender: "female", type: "electronic_song" },
      { name: "Neon Echoes", detail: "Bright and reverberating.", status: false, gender: "female", type: "electronic_song" },
      { name: "Digital Pulse", detail: "Electronic and rhythmic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electra Symphony", detail: "Electric and orchestral.", status: false, gender: "female", type: "electronic_song" },
      { name: "Futuristic Beat", detail: "Modern and rhythmic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Synth Rhythm", detail: "Electronic and steady.", status: false, gender: "female", type: "electronic_song" },
      { name: "Quantum Glow", detail: "Innovative and radiant.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electric Vibes", detail: "Dynamic and smooth.", status: false, gender: "female", type: "electronic_song" },
      { name: "Pixel Serenade", detail: "Retro and melodious.", status: false, gender: "female", type: "electronic_song" },
      { name: "Virtual Pulse", detail: "Digital and rhythmic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Cosmic Drift", detail: "Space-themed and smooth.", status: false, gender: "female", type: "electronic_song" },
      { name: "Neon Vibes", detail: "Bright and smooth.", status: false, gender: "female", type: "electronic_song" },
      { name: "Digital Stream", detail: "Electronic and continuous.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electra Glow", detail: "Electric and radiant.", status: false, gender: "female", type: "electronic_song" },
      { name: "Futuristic Echoes", detail: "Modern and reverberating.", status: false, gender: "female", type: "electronic_song" },
      { name: "Synthwave Beats", detail: "Retro and rhythmic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Quantum Serenade", detail: "Innovative and melodic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electric Harmony", detail: "Balanced and electrifying.", status: false, gender: "female", type: "electronic_song" },
      { name: "Pixel Dream", detail: "Retro and imaginative.", status: false, gender: "female", type: "electronic_song" },
      { name: "Neon Waves", detail: "Bright and flowing.", status: false, gender: "female", type: "electronic_song" },
      { name: "Cosmic Pulse", detail: "Space-themed and dynamic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Digital Rhythm", detail: "Electronic and steady.", status: false, gender: "female", type: "electronic_song" },
      { name: "Synth Serenade", detail: "Electronic and melodic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Virtual Echo", detail: "Digital and reverberating.", status: false, gender: "female", type: "electronic_song" },
      { name: "Electra Waves", detail: "Electric and flowing.", status: false, gender: "female", type: "electronic_song" },
      { name: "Quantum Harmony", detail: "Innovative and balanced.", status: false, gender: "female", type: "electronic_song" },
      { name: "Neon Drift", detail: "Bright and smooth.", status: false, gender: "female", type: "electronic_song" },
      { name: "Digital Beats", detail: "Electronic and rhythmic.", status: false, gender: "female", type: "electronic_song" },
      { name: "Pixel Rhythm", detail: "Retro and steady.", status: false, gender: "female", type: "electronic_song" },
      { name: "Cosmic Stream", detail: "Space-themed and flowing.", status: false, gender: "female", type: "electronic_song" }
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
const Category2 = [
    {
        name: "Viking Name Generator",
        pic: "/vikings.jpg",
        link: "https://www.nameideagenerator.com/viking-name-generator",
    },
    {
        name: "Russian Name Generator",
        pic: "/Russian.webp",
        link: "https://www.nameideagenerator.com/russian-name-generator",
    },
    {
        name: "Norse Name Generator",
        pic: "/Norse.jpg",
        link: "https://www.nameideagenerator.com/norse-name-generator",
    },
    {
        name: "Greek Name Generator",
        pic: "greek.webp",
        link: "https://www.nameideagenerator.com/greek-name-generator",
    },
    ];

const SongNameGenerator = () => {
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

    const bgImage = "/pop.jpg"
    const context = " Song Name Generator"

    const Q1 = "How does the Song Name Generator work?"

    const A1 = 'The generator uses a comprehensive database and algorithms to combine various linguistic elements, resulting in diverse and fitting song titles.'
    
    const Q2 = "Are the names generated by the tool unique?"
    
    const A2 = 'Yes, the tool generates unique names by drawing from an extensive database, ensuring that each title stands out and fits your musical style.'
    
    const Q3 = "Is there a cost to use the Song Name Generator?"
    
    const A3 = "No, the Song Name Generator is completely free to use. Enjoy unlimited access without any charges."
    
    const Q4 = "Can I use the generated names commercially?"
    
    const A4 = "Yes, you can use the names for any commercial purposes, including in your songs, albums, or other music-related projects."
    
    const Q5 = "How secure is my data when using the Song Name Generator?"
    
    const A5 = "Your data is protected with advanced security measures, ensuring your privacy and the safe use of the tool."

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
                            Random Song Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Songs Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="pop_song">Pop</option>
                            <option value="rock_song">Rock</option>
                            <option value="romantic_song">Romantic</option>
                            <option value="electronic_song">Electronic</option>

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
                        Our Song Name Generator is designed to help you find the perfect songs for your next musical project. 
                        Whether you're a songwriter, music producer, or simply seeking inspiration, this tool is tailored to spark your creativity and deliver captivating song titles effortlessly.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        With a user-friendly interface and an extensive database, generating unique songs is straightforward and fast. 
                        Simply input keywords or let the generator surprise you, and watch as it provides names that resonate with the essence of your music. 
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Our tool allows you to specify genres, themes, or moods, ensuring that the titles align with your artistic vision. 
                        By tapping into a vast array of words and expressions, the Song Name Generator offers endless possibilities, helping you craft titles that stand out.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Song Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Our Song Name Generator is designed to be simple and enjoyable. Follow these steps to generate the ideal title for your song.
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1 - Specify Genre
                            </h3>
                            <p>
                            Choose a music genre for the song name, which helps in generating names that are genre-specific like rock, pop, Romantic, or electronic.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2 - Select the Mood
                            </h3>
                            <p>
                            Pick a mood for the song, such as happy, sad, energetic, or relaxing, to guide the emotional tone of the names generated.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Click on Generate
                            </h3>
                            <p>
                            Press the <b> "Generate"</b> button to start the creation of song names based on your inputs.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4: Review Names and Their Potential Themes
                            </h3>
                            <p>
                            The generated song names will be displayed. Hover over each name to uncover possible themes or the emotions they might evoke.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="pop.avif"
                            alt="song name generator"
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="pop1.avif"
                            alt="song name generator"
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/song name generator.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Song-Name-Generator
                </p>
                <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
                    {Category2.map((item, index) => (
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
                    Why Use Our Song Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our Song Name Generator is specially designed to provide endless inspiration, ensuring you find creative and fitting titles for all your music projects.
                    </p>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Scroll down to see what benefits our song name generator online provides its users.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Extensive Database
                                </h3>
                                <p>
                                Our generator draws from an expansive range of types of genres to produce a diverse array of song titles. 
                                This ensures you receive a wide selection of options, each carefully curated to match the unique feel and style of your music. 
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                User-Friendly Interface
                                </h3>
                                <p>
                                The tool is designed with simplicity in mind, offering an intuitive and easy-to-navigate interface. Quickly generate and save your favorite song titles without any hassle. 
                                The streamlined design ensures a smooth user experience, allowing you to focus on your music creation.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Instant Suggestions
                                </h3>
                                <p>
                                Receive immediate song title suggestions with just a few clicks. 
                                The tool processes your input quickly and delivers a variety of creative titles, enabling you to choose the best fit for your music without delay.                         
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Free to Use
                                </h3>
                                <p>
                                Access all features of the Song Name Generator completely free of charge. 
                                Generate and explore an unlimited number of songs without any financial commitment. Enjoy unrestricted use of the tool as often as needed for your creative projects.                            
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Diverse Song Collection
                                </h3>
                                <p>
                                Explore a wide range of song themes and ideas tailored to various genres and moods. 
                                Our generator provides diverse options, helping you craft songs that fit different styles and emotional tones.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Broad Application
                                </h3>
                                <p>
                                Whether you’re working on a single track, an album, or a playlist, our tool is versatile enough to meet your needs. 
                                It provides valuable title options for various musical projects, ensuring you always have the right name to complement your work.                
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="pop1.jpg"
                            alt="song name generator"
                            class="w-[350px] my-[30px] h-[430px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="pop3.jpg"
                            alt="song name generator"
                            class="w-[350px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className=" py-[30px]  mx-auto">
                    <section class="w-[80%] mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Benefits of Our Song Name Generator</h2>
                        <p class="text-gray-600 mb-4">
                        Our Song Name Generator provides an effortless and enjoyable way to discover the songs for your music projects. 
                        It combines simplicity with powerful features to enhance your creative process
                        <br /><br />
                        Here are the exclusive benefits that you can enjoy in our tool:
                        </p>
                        <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[20px] text-[16px] sm:font-normal font-semibold ">
                                Ignite Your Creativity
                                </h3>
                                <p>
                                Generate unique and captivating song titles effortlessly. Our tool provides a continuous flow of fresh ideas to inspire your music creation.                
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[20px] text-[16px] sm:font-normal font-semibold ">
                                Save Time and Effort
                                </h3>
                                <p>
                                Quickly find suitable titles with just a click. Our Song Name Generator streamlines the process, saving you from extensive brainstorming sessions.       
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[20px] text-[16px] sm:font-normal font-semibold ">
                                Explore Versatility
                                </h3>
                                <p>
                                Our tool caters to various music styles and genres. This versatility allows you to generate titles that fit different musical contexts, expanding your creative possibilities.                
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[20px] text-[16px] sm:font-normal font-semibold ">
                                Access Unlimited Ideas
                                </h3>
                                <p>
                                Enjoy a constant stream of new song options. With no restrictions on song ideas you can generate, you’ll always have fresh ideas at your fingertips.                
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[20px] text-[16px] sm:font-normal font-semibold ">
                                User-Friendly Experience
                                </h3>
                                <p>
                                Benefit from a straightforward and easy-to-use interface. Navigate through the tool seamlessly and generate song titles without any hassle.                
                                 </p>
                            </div>
                    </section>
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

export default SongNameGenerator;

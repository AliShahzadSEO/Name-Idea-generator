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

    const Q1 = "Can I use the Song Name Generator for any genre?"

    const A1 = ' Yes! The tool works for pop, rap, R&B, EDM, rock, lo-fi, and more.'
    
    const Q2 = "Are these names original or based on existing songs?"
    
    const A2 = 'Every name is generated based on theme and style. They’re unique and built to inspire, not copied.'
    
    const Q3 = "Can I choose the tone or emotion of the name?"
    
    const A3 = " Yes! Just select a mood or theme that fits your track, and the names will reflect that vibe."
    
    const Q4 = "Do I get ideas for lyrics too?"
    
    const A4 = "Some name results include subtle lyrical cues or ideas you can build your track around."
    
    const Q5 = "How many names can I generate?"
    
    const A5 = "There’s no limit. Generate as many as you want until you find the one that feels right."

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
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/song-name-generator" className="hover:underline text-[#343a40]">Song Name Generator</a>
      </li>
    </ol>
  </nav>
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
                         No More Struggling to Name Your Song
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                       Naming a song is harder than it sounds. You want it to fit the emotion, genre, and vibe—but finding something original and catchy can take forever. 
                       Scrolling random lists or using vague ideas won’t get you far. 
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        That’s where the Song Name Generator comes in. Choose your style, mood, and genre, and let the tool do the work. 
                        Whether you need something poetic, punchy, or edgy, you’ll get names that sound ready for a Spotify debut.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How Does the Song Name Generator Work?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                   This tool is made to help artists, writers, and music lovers find the perfect title fast. 
                   Here’s how it works:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 1 - Pick Your Genre
                            </h3>
                            <p>
                            Choose the style of your track. Pop, rap, rock, R&B, or lo-fi? Each genre shapes the tone and vibe of the name.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 2 - Select a Mood or Theme
                            </h3>
                            <p>
                            Want something emotional, romantic, dark, or rebellious? Select a mood that fits your song’s story.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 3 - Click “Generate”
                            </h3>
                            <p>
                            Hit the button and get a list of fresh, unique titles instantly. New ideas come with every click.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 4: Hover to See Suggestions
                            </h3>
                            <p>
                            Glide your cursor over any song name to see extra info or inspiration—like lyrical ideas or usage tips.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 5: Customize and Try Again
                            </h3>
                            <p>
                            Not quite right? Adjust the mood or genre and click again. Keep generating until one hits the right note.
                            </p>
                            <p>
                                It’s fast, creative, and gives your music the identity it deserves.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="pop.avif"
                            alt="Song Name Generator | Random Song Name Generator With Meaning"
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="pop1.avif"
                            alt="Song Name Generator | Random Song Name Generator With Meaning"
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
                    What Makes This Song Name Generator Worth Using?
                    </h2>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                              Lightning Fast Ideas
                                </h3>
                                <p>
                                 Get dozens of song title ideas in seconds. No delay, no guessing. 
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Genre-Specific Results
                                </h3>
                                <p>
                                 Whether you're writing a ballad or a trap beat, the generator adapts to your genre.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Mood-Based Naming
                                </h3>
                                <p>
                                 Choose the mood and get song names that match your vibe and lyrics.                         
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Unlimited Clicks
                                </h3>
                                <p>
                                 Generate as many names as you like—perfect for exploring different creative directions.                            
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Helpful Hover Tips
                                </h3>
                                <p>
                                 View subtle suggestions and naming tips with a simple hover, helping you find your perfect fit.                             
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                               Ideal for Creators of All Kinds
                                </h3>
                                <p>
                                 Whether you’re a musician, songwriter, content creator, or storyteller—this tool makes naming easier.               
                                 </p>
                            </div>
                        </div>
                    </div>
                     

                    <div class="sm:w-[40%] relative">
                        <img
                            src="pop1.jpg"
                            alt="Song Name Generator | Random Song Name Generator With Meaning"
                            class="w-[280px] my-[30px] h-[280px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="pop3.jpg"
                            alt="Song Name Generator | Random Song Name Generator With Meaning"
                            class="w-[280px] h-[280px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
<section class="bg-white mx-auto px-2 py-10">
    <div  class="w-[80%] mx-auto text-[#343a40] my-[10px]">
<h2 class="sm:text-[28px] text-center text-[18px] sm:font-normal py-6 font-semibold">
      Why Song Names Matter in Music and Creativity
    </h2>
    <p class="mb-4 text-base sm:text-lg">
      A song’s name is often the first thing people notice. Before they hear a single note, they see the title.
    </p>
    <p class="mb-4 text-base sm:text-lg">
      A good title makes people curious. It gives a glimpse into the story, tone, or emotion behind the music. 
      A weak or forgettable name can make even the best track invisible.
    </p>
    <p class="text-base sm:text-lg">
      Whether it’s a love song, a diss track, or an instrumental, your title can set the tone before a word is sung.
    </p>
    </div>
    
  </section>

                    <section class="max-w-6xl text-[#343a40] mx-auto px-4 py-10">
  <h2 class="text-2xl text-center sm:text-3xl font-bold mb-8">
    What Do Song Names Say About the Artist?
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    
    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Artist Identity</h3>
      <p class="text-base sm:text-lg">
        The right song name can tell listeners a lot. It reflects your style, message, and identity.
        It could be mysterious like <em>"Shadows in the Silence"</em>, raw like <em>"No More Lies"</em>, or playful like <em>"Candy Skies"</em>.
        Whatever you choose, that name becomes part of your story as an artist.
      </p>
    </div>

    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Emotional Titles</h3>
      <p class="text-base sm:text-lg">
        Emotional songs often carry powerful names. Think <em>"Broken Again"</em> or <em>"Still Yours"</em>.
        These titles draw listeners in with vulnerability.
      </p>
    </div>

    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Concept-Based Titles</h3>
      <p class="text-base sm:text-lg">
        Some songs focus on abstract or story-based names like <em>"The 5th Hour"</em> or <em>"Echoes of the Void"</em>.
        These titles fuel imagination and create intrigue.
      </p>
    </div>

    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Single-Word Hooks</h3>
      <p class="text-base sm:text-lg">
        Pop and EDM songs often go simple—<em>"Fire,"</em> <em>"Escape,"</em> <em>"Midnight."</em>
        One-word names can be bold, catchy, and easy to remember.
      </p>
    </div>

  </div>
</section>

<section class="bg-white mx-auto px-2 py-10">
    <div  class="w-[80%] mx-auto text-[#343a40] my-[10px]">

  <h2 class="text-2xl sm:text-3xl font-bold mb-8">
    How Song Names Are Used Across Genres
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Hip-Hop & Rap</h3>
      <p class="text-base sm:text-lg">
        Often lean into personal themes, slang, or punchy phrases that make an impact.
      </p>
    </div>

    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Pop & R&B</h3>
      <p class="text-base sm:text-lg">
        Titles are usually emotional or catchy—meant to stick in your head and evoke feeling.
      </p>
    </div>

    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Rock & Metal</h3>
      <p class="text-base sm:text-lg">
        Dramatic, symbolic, or gritty names often dominate, reflecting deeper or intense themes.
      </p>
    </div>

    <div class="bg-gray-50 rounded-2xl shadow p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Indie & Lo-Fi</h3>
      <p class="text-base sm:text-lg">
        Titles tend to be poetic or introspective, offering raw and honest emotion.
      </p>
    </div>
  </div>

  <div class="mt-10 bg-blue-50 border border-blue-200 rounded-2xl shadow p-6 text-center transition duration-300 transform hover:scale-[1.02] hover:shadow-lg">
    <p class="text-lg sm:text-xl font-medium mb-2">
      Whatever your genre, the Song Name Generator adjusts to match it.
    </p>
    <p class="text-base sm:text-lg">
      Looking to explore more fantasy-themed generators? Try the <a href="https://www.nameideagenerator.com/dragonborn-name-generator" class=" font-semibold hover:underline">Dragonborn Name Generator</a> for your next character-based track or concept project.
    </p>
  </div>
   </div>
</section>
<section class="max-w-8xl mx-auto px-4 py-10 w-[80%] text-[#343a40] ">
  <h2 class="text-2xl text-center sm:text-3xl font-bold mb-6">
    The Roots of Song Naming in Music Culture
  </h2>

  <p class="text-base sm:text-lg mb-4">
    Throughout music history, iconic song names have defined entire eras.
    Titles like <strong>"Imagine"</strong>, <strong>"Smells Like Teen Spirit"</strong>, and <strong>"Halo"</strong> are more than words.
    They hold emotion, movement, and identity. The right name can shape how a track is remembered for years to come.
  </p>

  <p class="text-base sm:text-lg mb-6">
    Whether you’re dropping your first single or building an entire album, your titles matter.
  </p>

  <h3 class="text-xl sm:text-2xl font-semibold mb-4">
    Some Famous Song Names That Stuck
  </h3>

  <ul class="list-disc list-inside space-y-2 text-base sm:text-lg">
    <li>
      <strong>"Blinding Lights"</strong> – The Weeknd’s title is simple yet evocative, matching the retro-futuristic sound of the track.
    </li>
    <li>
      <strong>"Bohemian Rhapsody"</strong> – Queen’s legendary title defied conventions and stuck with listeners for decades.
    </li>
    <li>
      <strong>"Someone Like You"</strong> – Adele’s emotional hit carried a name that set the mood from the start.
    </li>
    <li>
      <strong>"Lose Yourself"</strong> – Eminem’s title captured intensity and ambition in just two words.
    </li>
  </ul>

  <p class="text-base sm:text-lg mt-6">
    All of these names helped define the song’s story before the first note even played.
  </p>
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

export default SongNameGenerator;

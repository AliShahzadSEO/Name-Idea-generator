"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Pippin", detail: "Cheerful and adventurous.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Bramble", detail: "A clever trickster.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Thornwood", detail: "Strong and resilient.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Merrin", detail: "A joyful spirit.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Fenton", detail: "Resourceful and wise.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Clover", detail: "Lucky and charming.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Thistle", detail: "Tough and determined.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Eldon", detail: "Honest and hardworking.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Frodo", detail: "Brave and selfless.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Sorrel", detail: "Gentle and kind-hearted.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Harrow", detail: "Steadfast and reliable.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Tumble", detail: "Playful and carefree.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Oakleaf", detail: "Strong and dependable.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Wilber", detail: "Gentle and wise.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Fernan", detail: "Quiet and introspective.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Bracken", detail: "Adventurous and brave.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Milo", detail: "Cheerful and friendly.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Finch", detail: "Lively and inquisitive.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Hobson", detail: "Loyal and hardworking.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Cedric", detail: "Noble and kind.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Rorik", detail: "Strong and courageous.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Barrow", detail: "Mysterious and wise.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Heath", detail: "Calm and peaceful.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Linden", detail: "Graceful and kind-hearted.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Quill", detail: "Creative and intelligent.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Merrick", detail: "Brave and adventurous.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Harlan", detail: "Wise and thoughtful.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Rowan", detail: "Noble and kind.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Eldrick", detail: "Strong and reliable.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Pippal", detail: "Cheerful and lively.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Thatch", detail: "Resilient and hardworking.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Wicklow", detail: "Mysterious and wise.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Moss", detail: "Calm and introspective.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Jory", detail: "Friendly and kind.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Brambleton", detail: "Clever and quick-witted.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Bilbo", detail: "Curious and adventurous.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Hawthorn", detail: "Strong and resilient.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Gulliver", detail: "Bold and daring.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Fenwick", detail: "Resourceful and cunning.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Rolf", detail: "Loyal and dependable.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Willard", detail: "Gentle and kind-hearted.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Tannen", detail: "Strong and determined.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Ferrin", detail: "Adventurous and brave.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Hayward", detail: "Calm and collected.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Walden", detail: "Quiet and introspective.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Hobart", detail: "Loyal and hardworking.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Otis", detail: "Cheerful and friendly.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Barlow", detail: "Mysterious and wise.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Talan", detail: "Adventurous and daring.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Merton", detail: "Resilient and strong.", status: false, gender: "male", type: "meadow halfling" },
    { name: "Primrose", detail: "Sweet and delicate.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Daisy", detail: "Cheerful and bright.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Briony", detail: "Strong and resilient.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Elora", detail: "Gentle and wise.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Fern", detail: "Quiet and introspective.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Clover", detail: "Lucky and charming.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Marigold", detail: "Warm and nurturing.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Tansy", detail: "Bright and cheerful.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Willow", detail: "Graceful and strong.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Hazel", detail: "Gentle and kind-hearted.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Larkspur", detail: "Playful and carefree.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Wren", detail: "Lively and spirited.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Elowen", detail: "Elegant and wise.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Ivy", detail: "Resilient and determined.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Poppy", detail: "Bright and joyful.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Petunia", detail: "Gentle and nurturing.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Aster", detail: "Strong and independent.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Briar", detail: "Tough and resilient.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Holly", detail: "Loyal and kind-hearted.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Sorrel", detail: "Quiet and introspective.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Rosie", detail: "Sweet and charming.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Juniper", detail: "Bright and lively.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Myrtle", detail: "Gentle and kind.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Laurel", detail: "Strong and determined.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Blossom", detail: "Bright and cheerful.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Fawn", detail: "Graceful and gentle.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Pansy", detail: "Delicate and sweet.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Bramble", detail: "Tough and resilient.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Hazel", detail: "Gentle and nurturing.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Dandelion", detail: "Cheerful and bright.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Posy", detail: "Sweet and delicate.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Meadow", detail: "Free-spirited and lively.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Violet", detail: "Gentle and kind-hearted.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Thyme", detail: "Quiet and introspective.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Linden", detail: "Graceful and strong.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Calla", detail: "Elegant and wise.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Brielle", detail: "Bright and lively.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Saffron", detail: "Warm and nurturing.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Thistle", detail: "Tough and resilient.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Eldra", detail: "Wise and gentle.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Willa", detail: "Strong and independent.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Liana", detail: "Graceful and kind-hearted.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Tessa", detail: "Cheerful and friendly.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Flora", detail: "Gentle and nurturing.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Ember", detail: "Fiery and passionate.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Hyacinth", detail: "Elegant and wise.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Olive", detail: "Gentle and peaceful.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Quince", detail: "Bright and cheerful.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Sybil", detail: "Mysterious and wise.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Yarrow", detail: "Tough and resilient.", status: false, gender: "female", type: "meadow halfling" },
    { name: "Brook", detail: "Gentle and thoughtful.", status: false, gender: "male", type: "river_halfling" },
      { name: "Reed", detail: "Steady and resilient.", status: false, gender: "male", type: "river_halfling" },
      { name: "Alton", detail: "Noble and steadfast.", status: false, gender: "male", type: "river_halfling" },
      { name: "Ripley", detail: "Resourceful and quick-witted.", status: false, gender: "male", type: "river_halfling" },
      { name: "Finnian", detail: "Adventurous and brave.", status: false, gender: "male", type: "river_halfling" },
      { name: "Wade", detail: "Calm and deliberate.", status: false, gender: "male", type: "river_halfling" },
      { name: "Otter", detail: "Playful and curious.", status: false, gender: "male", type: "river_halfling" },
      { name: "Merrick", detail: "Strong and determined.", status: false, gender: "male", type: "river_halfling" },
      { name: "Stone", detail: "Solid and reliable.", status: false, gender: "male", type: "river_halfling" },
      { name: "Darcy", detail: "Charming and witty.", status: false, gender: "male", type: "river_halfling" },
      { name: "Quay", detail: "Steady and loyal.", status: false, gender: "male", type: "river_halfling" },
      { name: "Perry", detail: "Kind-hearted and friendly.", status: false, gender: "male", type: "river_halfling" },
      { name: "Calder", detail: "Resolute and brave.", status: false, gender: "male", type: "river_halfling" },
      { name: "Eldon", detail: "Wise and gentle.", status: false, gender: "male", type: "river_halfling" },
      { name: "Rill", detail: "Quick and agile.", status: false, gender: "male", type: "river_halfling" },
      { name: "Hurley", detail: "Cheerful and optimistic.", status: false, gender: "male", type: "river_halfling" },
      { name: "Oswin", detail: "Clever and resourceful.", status: false, gender: "male", type: "river_halfling" },
      { name: "Twain", detail: "Unique and creative.", status: false, gender: "male", type: "river_halfling" },
      { name: "Marlin", detail: "Bold and adventurous.", status: false, gender: "male", type: "river_halfling" },
      { name: "Roderick", detail: "Strong and commanding.", status: false, gender: "male", type: "river_halfling" },
      { name: "Flint", detail: "Tough and resilient.", status: false, gender: "male", type: "river_halfling" },
      { name: "Ebner", detail: "Loyal and dedicated.", status: false, gender: "male", type: "river_halfling" },
      { name: "Rown", detail: "Quiet and introspective.", status: false, gender: "male", type: "river_halfling" },
      { name: "Corwin", detail: "Gentle and kind.", status: false, gender: "male", type: "river_halfling" },
      { name: "Arden", detail: "Courageous and steadfast.", status: false, gender: "male", type: "river_halfling" },
      { name: "Rush", detail: "Energetic and fast-moving.", status: false, gender: "male", type: "river_halfling" },
      { name: "Clift", detail: "Bold and strong-willed.", status: false, gender: "male", type: "river_halfling" },
      { name: "Orrin", detail: "Steady and reliable.", status: false, gender: "male", type: "river_halfling" },
      { name: "Fisher", detail: "Practical and resourceful.", status: false, gender: "male", type: "river_halfling" },
      { name: "Tarin", detail: "Gentle and compassionate.", status: false, gender: "male", type: "river_halfling" },
      { name: "Brookson", detail: "Kind and thoughtful.", status: false, gender: "male", type: "river_halfling" },
      { name: "Wells", detail: "Deep and mysterious.", status: false, gender: "male", type: "river_halfling" },
      { name: "Delmar", detail: "Calm and soothing.", status: false, gender: "male", type: "river_halfling" },
      { name: "Hartley", detail: "Brave and kind-hearted.", status: false, gender: "male", type: "river_halfling" },
      { name: "Vance", detail: "Charming and persuasive.", status: false, gender: "male", type: "river_halfling" },
      { name: "Fallon", detail: "Strong and independent.", status: false, gender: "male", type: "river_halfling" },
      { name: "Drayton", detail: "Determined and hardworking.", status: false, gender: "male", type: "river_halfling" },
      { name: "Larkin", detail: "Quick-witted and lively.", status: false, gender: "male", type: "river_halfling" },
      { name: "Waverly", detail: "Graceful and calm.", status: false, gender: "male", type: "river_halfling" },
      { name: "Sheldon", detail: "Wise and practical.", status: false, gender: "male", type: "river_halfling" },
      { name: "Garland", detail: "Loyal and dedicated.", status: false, gender: "male", type: "river_halfling" },
      { name: "Landry", detail: "Strong and protective.", status: false, gender: "male", type: "river_halfling" },
      { name: "Quillan", detail: "Creative and artistic.", status: false, gender: "male", type: "river_halfling" },
      { name: "Thorne", detail: "Tough and resilient.", status: false, gender: "male", type: "river_halfling" },
      { name: "Tide", detail: "Steady and reliable.", status: false, gender: "male", type: "river_halfling" },
      { name: "Wynn", detail: "Bright and cheerful.", status: false, gender: "male", type: "river_halfling" },
      { name: "Corbin", detail: "Mysterious and wise.", status: false, gender: "male", type: "river_halfling" },
      { name: "Fleet", detail: "Quick and agile.", status: false, gender: "male", type: "river_halfling" },
      { name: "Torrin", detail: "Strong and determined.", status: false, gender: "male", type: "river_halfling" },
      { name: "Brook", detail: "Gentle and thoughtful.", status: false, gender: "female", type: "river_halfling" },
      { name: "Delta", detail: "Resilient and adaptable.", status: false, gender: "female", type: "river_halfling" },
      { name: "Rilla", detail: "Quick and clever.", status: false, gender: "female", type: "river_halfling" },
      { name: "Marina", detail: "Graceful and serene.", status: false, gender: "female", type: "river_halfling" },
      { name: "Isla", detail: "Independent and free-spirited.", status: false, gender: "female", type: "river_halfling" },
      { name: "Mira", detail: "Bright and lively.", status: false, gender: "female", type: "river_halfling" },
      { name: "River", detail: "Strong and determined.", status: false, gender: "female", type: "river_halfling" },
      { name: "Wren", detail: "Graceful and calm.", status: false, gender: "female", type: "river_halfling" },
      { name: "Darby", detail: "Loyal and dependable.", status: false, gender: "female", type: "river_halfling" },
      { name: "Merryn", detail: "Kind-hearted and cheerful.", status: false, gender: "female", type: "river_halfling" },
      { name: "Cleo", detail: "Bold and confident.", status: false, gender: "female", type: "river_halfling" },
      { name: "Althea", detail: "Wise and gentle.", status: false, gender: "female", type: "river_halfling" },
      { name: "Cascade", detail: "Energetic and lively.", status: false, gender: "female", type: "river_halfling" },
      { name: "Delia", detail: "Charming and graceful.", status: false, gender: "female", type: "river_halfling" },
      { name: "Thea", detail: "Strong and determined.", status: false, gender: "female", type: "river_halfling" },
      { name: "Ripley", detail: "Adventurous and bold.", status: false, gender: "female", type: "river_halfling" },
      { name: "Fallon", detail: "Independent and spirited.", status: false, gender: "female", type: "river_halfling" },
      { name: "Linnea", detail: "Graceful and kind.", status: false, gender: "female", type: "river_halfling" },
      { name: "Mora", detail: "Quiet and introspective.", status: false, gender: "female", type: "river_halfling" },
      { name: "Estelle", detail: "Elegant and wise.", status: false, gender: "female", type: "river_halfling" },
      { name: "Elva", detail: "Gentle and nurturing.", status: false, gender: "female", type: "river_halfling" },
      { name: "Serin", detail: "Bright and cheerful.", status: false, gender: "female", type: "river_halfling" },
      { name: "Arden", detail: "Courageous and steadfast.", status: false, gender: "female", type: "river_halfling" },
      { name: "Brynn", detail: "Strong and independent.", status: false, gender: "female", type: "river_halfling" },
      { name: "Selina", detail: "Charming and kind-hearted.", status: false, gender: "female", type: "river_halfling" },
      { name: "Reed", detail: "Resilient and adaptable.", status: false, gender: "female", type: "river_halfling" },
      { name: "Elara", detail: "Wise and gentle.", status: false, gender: "female", type: "river_halfling" },
      { name: "Isla", detail: "Independent and free-spirited.", status: false, gender: "female", type: "river_halfling" },
      { name: "Pearl", detail: "Elegant and refined.", status: false, gender: "female", type: "river_halfling" },
      { name: "Veda", detail: "Knowledgeable and wise.", status: false, gender: "female", type: "river_halfling" },
      { name: "Cora", detail: "Kind-hearted and friendly.", status: false, gender: "female", type: "river_halfling" },
      { name: "Thalassa", detail: "Strong and commanding.", status: false, gender: "female", type: "river_halfling" },
      { name: "Runa", detail: "Mysterious and intriguing.", status: false, gender: "female", type: "river_halfling" },
      { name: "Leona", detail: "Brave and spirited.", status: false, gender: "female", type: "river_halfling" },
      { name: "Cordelia", detail: "Elegant and graceful.", status: false, gender: "female", type: "river_halfling" },
      { name: "Talia", detail: "Strong and determined.", status: false, gender: "female", type: "river_halfling" },
      { name: "Seraphine", detail: "Gentle and angelic.", status: false, gender: "female", type: "river_halfling" },
      { name: "Livia", detail: "Bright and lively.", status: false, gender: "female", type: "river_halfling" },
      { name: "Nerina", detail: "Mysterious and alluring.", status: false, gender: "female", type: "river_halfling" },
      { name: "Fauna", detail: "Gentle and nurturing.", status: false, gender: "female", type: "river_halfling" },
      { name: "Ivy", detail: "Resilient and strong.", status: false, gender: "female", type: "river_halfling" },
      { name: "Opal", detail: "Unique and radiant.", status: false, gender: "female", type: "river_halfling" },
      { name: "Tressa", detail: "Bold and adventurous.", status: false, gender: "female", type: "river_halfling" },
      { name: "Maris", detail: "Serene and graceful.", status: false, gender: "female", type: "river_halfling" },
      { name: "Meriel", detail: "Gentle and kind-hearted.", status: false, gender: "female", type: "river_halfling" },
      { name: "Elowen", detail: "Elegant and wise.", status: false, gender: "female", type: "river_halfling" },
      { name: "Ember", detail: "Fiery and passionate.", status: false, gender: "female", type: "river_halfling" },
      { name: "Evander", detail: "Strong and courageous.", status: false, gender: "female", type: "river_halfling" },
      { name: "Sabine", detail: "Graceful and poised.", status: false, gender: "female", type: "river_halfling" },
      { name: "Una", detail: "Unique and independent.", status: false, gender: "female", type: "river_halfling" },
      { name: "Harlan", detail: "Strong and reliable.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Darrow", detail: "Resilient and brave.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Hobson", detail: "Loyal and steadfast.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Merrick", detail: "Determined and courageous.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Brant", detail: "Bold and adventurous.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Quinn", detail: "Sharp and perceptive.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Beldon", detail: "Wise and calm.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Otis", detail: "Friendly and approachable.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Merrin", detail: "Creative and thoughtful.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Wilbur", detail: "Gentle and kind-hearted.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Garrick", detail: "Strong and dependable.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Brand", detail: "Determined and energetic.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Eldon", detail: "Wise and nurturing.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Tolan", detail: "Steady and reliable.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Barrow", detail: "Strong and enduring.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Heath", detail: "Calm and collected.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Finch", detail: "Quick and agile.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Garren", detail: "Brave and fearless.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Fenton", detail: "Friendly and sociable.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Orwin", detail: "Resourceful and clever.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Eldrick", detail: "Wise and insightful.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Rolf", detail: "Strong and brave.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Hobart", detail: "Loyal and steadfast.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Wicklow", detail: "Gentle and patient.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Milo", detail: "Bright and cheerful.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Rowan", detail: "Calm and collected.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Gulliver", detail: "Adventurous and bold.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Alaric", detail: "Noble and strong.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Fergus", detail: "Brave and resilient.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Kendrick", detail: "Determined and strong-willed.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Lyndon", detail: "Quiet and thoughtful.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Vernon", detail: "Reliable and steadfast.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Warrick", detail: "Strong and protective.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Silas", detail: "Wise and perceptive.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Trenton", detail: "Energetic and determined.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Cedric", detail: "Noble and dependable.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Corwin", detail: "Clever and resourceful.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Doran", detail: "Bold and fearless.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Finian", detail: "Brave and adventurous.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Merrick", detail: "Strong and reliable.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Quillan", detail: "Creative and insightful.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Barden", detail: "Friendly and loyal.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Orrin", detail: "Steady and practical.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Thorne", detail: "Tough and enduring.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Jory", detail: "Quick-witted and agile.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Larkin", detail: "Resourceful and bright.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Rorik", detail: "Strong and commanding.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Vance", detail: "Brave and loyal.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Taran", detail: "Steadfast and determined.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Sheldon", detail: "Gentle and wise.", status: false, gender: "male", type: "hill_halfling" },
      { name: "Elora", detail: "Graceful and elegant.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Primrose", detail: "Bright and cheerful.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Hazel", detail: "Gentle and wise.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Laurel", detail: "Strong and resilient.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Briony", detail: "Delicate and kind-hearted.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Fern", detail: "Quiet and nurturing.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Ivy", detail: "Resilient and determined.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Elowen", detail: "Wise and serene.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Thistle", detail: "Strong and protective.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Briar", detail: "Bold and daring.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Willa", detail: "Gentle and nurturing.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Marigold", detail: "Bright and vibrant.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Juniper", detail: "Creative and lively.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Poppy", detail: "Cheerful and energetic.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Clover", detail: "Lucky and optimistic.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Elara", detail: "Graceful and enchanting.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Petunia", detail: "Gentle and loving.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Rosie", detail: "Sweet and caring.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Larkspur", detail: "Unique and artistic.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Tansy", detail: "Bright and spirited.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Sorrel", detail: "Clever and perceptive.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Holly", detail: "Joyful and lively.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Yarrow", detail: "Strong and resilient.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Della", detail: "Gentle and charming.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Thalia", detail: "Elegant and wise.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Myrtle", detail: "Calm and nurturing.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Blossom", detail: "Cheerful and bright.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Vesta", detail: "Loyal and steadfast.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Daisy", detail: "Sweet and bright.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Flora", detail: "Nature-loving and kind.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Tessa", detail: "Bright and bubbly.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Bramble", detail: "Strong and resilient.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Fawn", detail: "Gentle and shy.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Posy", detail: "Cheerful and lively.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Aria", detail: "Graceful and elegant.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Brielle", detail: "Charming and bright.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Wren", detail: "Swift and agile.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Calla", detail: "Elegant and graceful.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Sybil", detail: "Wise and insightful.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Liana", detail: "Delicate and thoughtful.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Ember", detail: "Fiery and passionate.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Saffron", detail: "Bright and vibrant.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Olive", detail: "Calm and collected.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Hyacinth", detail: "Unique and delicate.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Quince", detail: "Sweet and charming.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Quilla", detail: "Bright and lively.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Aster", detail: "Elegant and gentle.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Elaina", detail: "Gentle and serene.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Eldra", detail: "Wise and nurturing.", status: false, gender: "female", type: "hill_halfling" },
      { name: "Finnian", detail: "Adventurous and daring.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Merrick", detail: "Brave and resilient.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Coral", detail: "Calm and soothing.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Bayron", detail: "Strong and dependable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Wade", detail: "Gentle and easygoing.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Marlin", detail: "Bold and adventurous.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Anchor", detail: "Reliable and steadfast.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Quay", detail: "Observant and thoughtful.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Drift", detail: "Free-spirited and carefree.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Eldon", detail: "Wise and calming.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Seaton", detail: "Strong and sturdy.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Brine", detail: "Salt-of-the-earth and practical.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Hartley", detail: "Friendly and approachable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Clift", detail: "Determined and steadfast.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Roderick", detail: "Noble and brave.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Perry", detail: "Charming and sociable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Calder", detail: "Calm and collected.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Larkin", detail: "Resourceful and clever.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Oswin", detail: "Wise and dependable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Tide", detail: "Adaptable and fluid.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Garland", detail: "Creative and bright.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Corbin", detail: "Strong and loyal.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Flint", detail: "Tough and resilient.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Orrin", detail: "Steady and reliable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Vance", detail: "Brave and adventurous.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Ripley", detail: "Quick-witted and agile.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Brookson", detail: "Gentle and kind-hearted.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Delmar", detail: "Resilient and enduring.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Fisher", detail: "Skilled and observant.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Tarin", detail: "Steadfast and loyal.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Fallon", detail: "Bright and spirited.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Drayton", detail: "Determined and strong.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Wells", detail: "Reliable and practical.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Sheldon", detail: "Wise and gentle.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Quillan", detail: "Creative and perceptive.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Thorne", detail: "Tough and enduring.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Tideon", detail: "Fluid and adaptable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Merrion", detail: "Bright and cheerful.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Fleet", detail: "Quick and agile.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Waverly", detail: "Calm and serene.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Wynn", detail: "Optimistic and bright.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Torrin", detail: "Strong and reliable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Merryn", detail: "Gentle and caring.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Darcy", detail: "Resourceful and clever.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Rowen", detail: "Calm and collected.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Fleeton", detail: "Swift and agile.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Eldrick", detail: "Wise and perceptive.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Brine", detail: "Practical and grounded.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Quinn", detail: "Bright and insightful.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Hartley", detail: "Friendly and dependable.", status: false, gender: "male", type: "coastal_halfling" },
      { name: "Coral", detail: "Calm and soothing.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Mira", detail: "Gentle and serene.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Maris", detail: "Bright and cheerful.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Isla", detail: "Elegant and graceful.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Wren", detail: "Swift and agile.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Cora", detail: "Sweet and caring.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Pearl", detail: "Delicate and refined.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Talia", detail: "Elegant and charming.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Marina", detail: "Lively and vibrant.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Runa", detail: "Mysterious and enchanting.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Delia", detail: "Bright and cheerful.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Thea", detail: "Graceful and poised.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Leona", detail: "Strong and determined.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Livia", detail: "Gentle and serene.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Selina", detail: "Elegant and charming.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Serin", detail: "Gentle and perceptive.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Brynn", detail: "Bright and creative.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Seraphine", detail: "Elegant and graceful.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Elara", detail: "Enchanting and serene.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Linnea", detail: "Fresh and vibrant.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Fallon", detail: "Cheerful and lively.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Ember", detail: "Fiery and passionate.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Sabine", detail: "Strong and noble.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Cleo", detail: "Bright and charming.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Thalassa", detail: "Majestic and graceful.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Elva", detail: "Gentle and kind-hearted.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Rilla", detail: "Soft and gentle.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Aria", detail: "Graceful and melodious.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Opal", detail: "Delicate and unique.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Cordelia", detail: "Elegant and sophisticated.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Ember", detail: "Fiery and passionate.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Tressa", detail: "Bright and lively.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Fauna", detail: "Nature-loving and gentle.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Ivy", detail: "Graceful and adaptable.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Veda", detail: "Wise and introspective.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Elowen", detail: "Elegant and enchanting.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Una", detail: "Mysterious and captivating.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Evander", detail: "Noble and strong.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Nerina", detail: "Serene and graceful.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Mira", detail: "Gentle and serene.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Delta", detail: "Bold and daring.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Runa", detail: "Mysterious and enchanting.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Arden", detail: "Strong and reliable.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Marisca", detail: "Elegant and vibrant.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Eira", detail: "Gentle and serene.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Seren", detail: "Peaceful and graceful.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Liana", detail: "Delicate and charming.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Althea", detail: "Wise and kind-hearted.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Flora", detail: "Nature-loving and vibrant.", status: false, gender: "female", type: "coastal_halfling" },
      { name: "Saffron", detail: "Bright and cheerful.", status: false, gender: "female", type: "coastal_halfling" },
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

const HalflingNameGenerator = () => {
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

    const bgImage = "/halfling.webp"
    const context = "Halfling Name Generator"
    const Q1 = "Can I customize the names generated?"
const A1 = "Yes! You can choose certain traits, like gender or style, to personalize the names. You could go for something nature-inspired or more adventurous, we’ve got you covered."
const Q2 = "Do I need to create an account to use the tool?"
const A2 = "Nope! Our tool is free to use and doesn’t require an account. Just click, generate, and find the perfect Halfling name."
const Q3 = "Can I share my favorite Halfling name?"
const A3 = "Yes! Once you’ve found the name you love, you can easily share it with friends or use it in your own writing or game."
const Q4 = "How many names can I generate?"
const A4 = "You can generate as many names as you need! Each click brings up a fresh set of options, so feel free to explore until you find the perfect fit."
const Q5 = "Can I save names I like from the generator?"
const A5 = "Yes! Just jot them down or copy them while you try others. There’s no limit, so keep building your list till one stands out."
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
        <a href="/halfling-name-generator" className="hover:underline text-[#343a40]">Halfing Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Halfling Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Halfling Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="meadow_halflings">Meadow Halflings</option>
                            <option value="river_halflings">River Halflings</option>
                            <option value="hill_halflings">Hill Halflings</option>
                            <option value="nexorian_aliens">Nexorian Aliens</option>

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
                           Generate Your Perfect Halfling Name
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                       Are you looking for the perfect Halfling name? You’ve come to the right place! 
                       Our Halfling Name Generator takes the guesswork out of finding a name that suits your character. 
                       Are you crafting an RPG hero or writing your next fantasy novel? This tool makes it quick and easy to generate names that feel just right. 
                       All you have to do is click the link and let the generator do its thing. You’ll get a name that’s simple, charming, and ready for any adventure.                      
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                    You don’t need to be a naming expert to get started. The Halfling Name Generator offers a variety of names 
                    inspired by nature, family, and the Halfling way of life. Take Greenfoot or Bramblebrush, it’s all about names that reflect a down-to-earth, nature-loving spirit. 
                    Just click, and within seconds, you’ll have a name that’s perfect for your little adventurer.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                   How Does Our Halfling Name Tool Work?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                      Our Halfling Name Generator makes naming your character quick and easy. 
                      No need to spend hours brainstorming names or getting lost in the details. Here’s how it works:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                            Step 1 - Choose the Gender
                            </h3>
                            <p>
                            Start by selecting any preferences, such as gender. Pick between a male, a female, or get a name with a random gender tone.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold">
                            Step 2 - Pick a Style/Type
                            </h3>
                            <p>
                            Get specific name traits that suit your Halfling. We’ve got options like meadow halflings, river halflings, or hill halflings.                         
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                            Step 3 - Click to Generate
                            </h3>
                            <p>
                              Hit that magic button, and our tool will instantly generate a list of Halfling names for you. 
                              It’s like having a name-creating wizard at your fingertips!                         
                            </p>                       
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                            Step 4: Pick Your Favorite
                            </h3>
                            <p>
                            Browse through the list and choose the name that feels just right. 
                            It could be simple, whimsical, or quirky, you’ll find a perfect fit in no time.                            
                            </p>                       
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="Halfling.png"
                            alt="Halfling Name Generator | DnD Halfling Name Generator With Meaning"
                            className="w-[270px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="Halfling_name_generator.webp"
                            alt="Halfling Name Generator | DnD Halfling Name Generator With Meaning"
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                    Related to Halfing Name Generator
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
                   Why Use Our Halfling Name Generator?
                    </h2>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="lg:w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold">
                               Quick and Easy
                                </h3>
                                <p>
                                Forget hours of name brainstorming. Just click a button and let the generator do the hard work. 
                                You’ll have a list of names in seconds, ready for you to choose from.
                                 </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                Customizable Options
                                </h3>
                                <p>
                                Do you want a traditional, nature-inspired name or something a bit more adventurous?  
                                Our <a href="https://nameideagenerator.com/"> <b> Name Genrerator</b></a> tool has a variety of options to suit your needs. 
                                You can personalize the names based on what fits your character best.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                Creative and Fun
                                </h3>
                                <p>
                               It’s a tool designed to spark creativity. Each name reflects the spirit of a Halfling. 
                               Charming, cozy, and full of character. This way you’ll know it’s the perfect choice.                           
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                Perfect for Any Project
                                </h3>
                                <p>
                                Are you playing an RPG, writing a story, or just having some fun? 
                                Our Halfling Name Generator makes sure your character's name stands out.                          
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                               A Name that Fits Your Character
                                </h3>
                                <p>
                                Halfling names are all about simplicity, nature, and adventure. 
                                Our Halfling names generator will give you names that reflect those key traits, 
                                so you can be sure your character’s name will be a perfect fit for their personality.                       
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                Endless Inspiration
                                </h3>
                                <p>
                                Even if you can’t decide on one name right away, the generator provides enough options to inspire you. 
                                It’s like having a personal naming assistant to give you ideas you might not have thought of.                          
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[20px] sm:font-normal font-semibold ">
                                No More Writer's Block
                                </h3>
                                <p>
                                Stuck on finding the right name for your Halfling? Don’t stress! Our tool takes the pressure off, 
                                helping you focus on the fun parts of your project.                          
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="Halfling1.jpg"
                            alt="Tiefling Image 1"
                            class="w-[320px] my-[60px] h-[400px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Halfling2.jpg"
                            alt="Tiefling Image 2"
                            class="w-[320px] h-[400px] my-[20px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>



<section className="w-full bg-white py-16 px-4 text-[#343a40]">
  <div className="max-w-4xl mx-auto space-y-10">
    <h2 className="text-3xl md:text-4xl font-bold text-center ">
      What is a Halfling?
    </h2>

    <div className="space-y-6  text-[17px] leading-relaxed">
      <div>
        <h3 className="text-xl font-semibold ">
          Friendly Adventurers with Big Hearts
        </h3>
        <p>
          Halflings are those small, lovable folks you’ll find in just about every fantasy world.
          They’re like the neighbor you wish you had. Always friendly, always down for a good meal,
          and somehow always ending up in the middle of an adventure, even if they didn’t sign up for it.
          They may not be the tallest folks in the room, but they’ve got heart, courage, and a knack for
          getting things done, even if they’re a little short on height. Think of them as the underdogs
          who end up stealing the show.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold ">Origin of Halflings</h3>
        <p>
          Halflings have been around for ages, always popping up in myths, stories, and every fantasy world
          worth its salt. They’re usually thought to be a kind of smaller, more down-to-earth version of humans,
          and prefer peaceful, rural lives in cozy homes tucked away from the chaos of the world. Tolkien’s Shire
          is the most famous example—these folks love their gardens, food, and quiet life. But no matter where they
          come from, one thing’s for sure: Halflings are all about community, comfort, and, of course,
          an occasional adventure.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold ">
          Physical Appearance of Halflings
        </h3>
        <p>
          Halflings aren’t known for towering over anyone. They’re small and stocky, usually standing at about 3 to 4 feet tall.
          What they lack in height, they make up for in charm. Their faces are round and friendly, with big eyes that make
          you feel like they’re always up to something. Their hair’s curly, and they’ve got big, sturdy feet that are just perfect
          for running around barefoot. They dress simply in practical tunics, comfy pants, and boots ready for any journey.
          A Halfling’s look says, “I’m here to enjoy life, and maybe steal a bite of your pie while I’m at it.”
        </p>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-16 px-4 text-[#343a40]">
  <div className="max-w-4xl mx-auto space-y-10 ">
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Halfling Culture: Traditions, Values, and Everyday Life
    </h2>

    <div className="space-y-6 text-[17px] leading-relaxed">
      <p>
        Halfling culture is all about enjoying the simple things. Good food, good company, and a peaceful life.
        They love tending their gardens, sharing meals with friends, and celebrating their close-knit communities.
        Halflings value hard work, loyalty, and always lending a hand when needed.
      </p>
      <p>
        Traditions are important to them too, from harvest festivals to cozy nights of storytelling.
        Their lives are rooted in family and tradition, which make sure there's always time for fun, food,
        and a little bit of adventure along the way.
      </p>
    </div>

    <h3 className="text-2xl font-semibold ">
      Mysterious Past of Halflings
    </h3>

    <div className="space-y-6 text-[17px] leading-relaxed">
      <p>
        Halflings have a past that’s as mysterious as a hidden treasure chest. Some legends say they were created
        by ancient gods, while others suggest they’re descended from a forgotten race. Whatever the truth, one thing’s
        for sure: Halflings have always had a special bond with the land, and that connection runs deep in their stories and myths.
      </p>
      <p>
        Over the years, Halflings have popped up in countless legends, often as the humble heroes who don’t seek the spotlight
        but somehow end up saving the day. They might not be looking for adventure, but they always find themselves right in the middle of it.
        Whether guarding enchanted forests or stumbling upon long-lost treasures, the lore of Halflings is filled with unexpected bravery
        and quiet wisdom that makes them unforgettable.
      </p>
    </div>
  </div>
</section>

<section className="w-full bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto text-[#343a40]">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Halfling's Role in Your Fantasy World
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-md border text-[#343a40]">
        <h3 className="text-xl font-semibold mb-2">🗡️ The Unlikely Hero</h3>
        <p>
          Halflings might not start out seeking adventure, but when the call comes, they step up with unexpected bravery and heart.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border text-[#343a40]">
        <h3 className="text-xl font-semibold mb-2">🧠 Charming and Clever</h3>
        <p>
          Charming others or outsmarting foes? Halflings excel in wit and resourcefulness, making them essential to any quest.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border text-[#343a40]">
        <h3 className="text-xl font-semibold mb-2">🤝 The Loyal Companion</h3>
        <p>
          They’re the ones you can count on. Steady, dependable, and always there for their friends when the going gets tough.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border text-[#343a40]">
        <h3 className="text-xl font-semibold mb-2">🕵️ Sneaky and Quick</h3>
        <p>
          Small and nimble, Halflings are perfect for sneaking into places, gathering information, or getting out of sticky situations without being noticed.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border text-[#343a40] md:col-span-2">
        <h3 className="text-xl font-semibold mb-2">❤️ Heart of the Story</h3>
        <p>
          Halflings often add warmth and humor to the tale, grounding the adventure and making it relatable with their down-to-earth nature.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="w-full  py-16 px-4">
  <div className="max-w-6xl mx-auto text-[#343a40]">
    <h2 className="text-3xl md:text-4xl font-bold  mb-10">
     List of Famous Halfling Names
    </h2>

    <ul className="space-y-4 list-disc list-inside text-lg">
      <li><strong>Frodo Baggins</strong> – <span className="italic">The Lord of the Rings</span></li>
      <li><strong>Samwise Gamgee</strong> – <span className="italic">The Lord of the Rings</span></li>
      <li><strong>Meriadoc "Merry" Brandybuck</strong> – <span className="italic">The Lord of the Rings</span></li>
      <li><strong>Peregrin "Pippin" Took</strong> – <span className="italic">The Lord of the Rings</span></li>
      <li><strong>Bilbo Baggins</strong> – <span className="italic">The Hobbit</span></li>
      <li><strong>Rosie Cotton</strong> – <span className="italic">The Lord of the Rings</span></li>
      <li><strong>Lily Goodchime</strong> – <span className="italic">Dungeons & Dragons</span></li>
      <li><strong>Pippin Greenbottle</strong> – <span className="italic">Dungeons & Dragons</span></li>
      <li><strong>Tansy Brightleaf</strong> – <span className="italic">Dungeons & Dragons</span></li>
    </ul>
  </div>
</section>

<section className="w-full bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto text-[#343a40]">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Tips for Creating Unique Halfling Names
    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {/* Card 1 */}
      <div className="bg-[#f8f9fa] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">🌿 Draw Inspiration from Nature</h3>
        <p>
          Halflings are connected to the earth, so names like <strong>Willowbrook</strong>, <strong>Bramblefoot</strong>, or <strong>Greenbottle</strong> are perfect.
          Think plants, animals, and natural features.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#f8f9fa] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">✨ Keep It Simple</h3>
        <p>
          Halfling names should be short and approachable, like <strong>Samwise</strong>, <strong>Pippin</strong>, or <strong>Frodo</strong>.
          Simple yet charming.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#f8f9fa] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">🎭 Reflect Personality</h3>
        <p>
          An adventurous Halfling might be named <strong>Tansy Quickfoot</strong>, while a quieter one could be <strong>Theo Greenbottle</strong>.
          Match the name with traits.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#f8f9fa] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">💛 Add a Nickname</h3>
        <p>
          Halflings love endearing nicknames like <strong>Sunny</strong> or <strong>Bram</strong> to show their friendly, warm nature.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="w-full bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto text-[#343a40]">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Gendered and Surnamed Halfling Names
    </h2>

    <div className="grid gap-8 md:grid-cols-2">
      {/* Gender-Specific Names Card */}
      <div className="bg-[#f8f9fa] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-4">🎀 Gender-Specific Halfling Names</h3>
        <p className="mb-2">
          Halfling names don’t always need to be gendered, but traditional ones can add familiarity to your character.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Male Names:</strong> Finnian, Milo, Samwise</li>
          <li><strong>Female Names:</strong> Lily, Poppy, Rosie</li>
          <li><strong>Gender-Neutral:</strong> Morgan, Sunny, Bram</li>
        </ul>
        <p className="mt-2">Mix and match styles to suit your Halfling's personality and role in the story.</p>
      </div>

      {/* Halfling Surnames Card */}
      <div className="bg-[#f8f9fa] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-4">🏡 Halfling Surnames</h3>
        <p className="mb-2">
          Surnames tell a deeper story—of heritage, lifestyle, or a quirky trait.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Place-based:</strong> Underhill, Baggins</li>
          <li><strong>Nature-inspired:</strong> Brandybuck, Tumblebrook</li>
          <li><strong>Personality-based:</strong> Quickfoot, Goodbarrel</li>
        </ul>
        <p className="mt-2">Think about your Halfling’s roots and quirks when crafting their surname.</p>
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
            <Footer />
        </motion.div>
    );
};

export default HalflingNameGenerator;

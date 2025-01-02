"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Aelion", detail: "Aelion, a name blessed by celestial winds, evoking a sense of divine power and eternal grace.", status: false, gender: "Male", type: "Ancient" },
    { name: "Kaelith", detail: "Kaelith, a name known among the heavens, where light and shadows converge in its powerful sound.", status: false, gender: "Male", type: "Ancient" },
    { name: "Thalor", detail: "Thalor, a name forged in the ancient stars, its roots stretching back to celestial realms beyond mortal sight.", status: false, gender: "Male", type: "Ancient" },
    { name: "Saranor", detail: "Saranor, a name wrapped in divine mystery, with echoes of celestial battles that span the ages.", status: false, gender: "Male", type: "Ancient" },
    { name: "Veylan", detail: "Veylan, a name that carries the essence of celestial energy, a sign of purity and unmatched strength.", status: false, gender: "Male", type: "Ancient" },
    { name: "Althar", detail: "Althar, a name of noble heritage, originating from the highest celestial courts and their divine rulers.", status: false, gender: "Male", type: "Ancient" },
    { name: "Zephriel", detail: "Zephriel, a name that speaks of the winds of heaven, light as air but powerful in its resolve.", status: false, gender: "Male", type: "Ancient" },
    { name: "Ilian", detail: "Ilian, a celestial name that hums with the energy of the stars, its meaning as eternal as the sky.", status: false, gender: "Male", type: "Ancient" },
    { name: "Jorath", detail: "Jorath, a name forged in the celestial forge, filled with the divine power of ancient spirits.", status: false, gender: "Male", type: "Ancient" },
    { name: "Talhan", detail: "Talhan, a name that invokes the power of the gods, reflecting strength, wisdom, and celestial purity.", status: false, gender: "Male", type: "Ancient" },
    { name: "Elyndor", detail: "Elyndor, a name whispered by the wind, carrying with it the essence of divine realms and astral light.", status: false, gender: "Male", type: "Ancient" },
    { name: "Merek", detail: "Merek, a name that resounds with ancient knowledge, a keeper of celestial secrets passed down through the ages.", status: false, gender: "Male", type: "Ancient" },
    { name: "Valtor", detail: "Valtor, a name associated with celestial power, bravery, and the eternal fight for balance in the realms.", status: false, gender: "Male", type: "Ancient" },
    { name: "Rithar", detail: "Rithar, a divine name of strength and endurance, standing tall in the face of celestial challenges.", status: false, gender: "Male", type: "Ancient" },
    { name: "Auron", detail: "Auron, a name sung by celestial choirs, symbolizing the eternal light and the purity of the heavens.", status: false, gender: "Male", type: "Ancient" },
    { name: "Dorian", detail: "Dorian, a name that flows with divine power, echoing with the harmony of celestial realms.", status: false, gender: "Male", type: "Ancient" },
    { name: "Eryx", detail: "Eryx, a name that speaks of an ancient lineage, imbued with celestial energies and divine purpose.", status: false, gender: "Male", type: "Ancient" },
    { name: "Korian", detail: "Korian, a celestial name of significance, standing as a symbol of divine grace and protection.", status: false, gender: "Male", type: "Ancient" },
    { name: "Faelan", detail: "Faelan, a name that carries the touch of the gods, where light and dark meet in divine harmony.", status: false, gender: "Male", type: "Ancient" },
    { name: "Aeden", detail: "Aeden, a name that resonates with celestial purity, evoking visions of divine light and eternal peace.", status: false, gender: "Male", type: "Ancient" },
    { name: "Elorath", detail: "Elorath, a name derived from the heart of the stars, its light guiding those who walk the path of righteousness.", status: false, gender: "Male", type: "Ancient" },
    { name: "Lysander", detail: "Lysander, a celestial name that commands the skies, known for its divine wisdom and strength in the face of adversity.", status: false, gender: "Male", type: "Ancient" },
    { name: "Veldrin", detail: "Veldrin, a name that echoes with the power of the divine, its sound invoking both serenity and strength.", status: false, gender: "Male", type: "Ancient" },
    { name: "Orlian", detail: "Orlian, a name of celestial heritage, linked with the great celestial courts and their timeless, divine will.", status: false, gender: "Male", type: "Ancient" },
    { name: "Liorin", detail: "Liorin, a name that glows with celestial radiance, symbolizing hope and eternal purity in the face of darkness.", status: false, gender: "Male", type: "Ancient" },
    { name: "Seraphine", detail: "Seraphine, a name that echoes the divine light of the heavens, a beacon of hope and purity.", status: false, gender: "Female", type: "Ancient" },
  { name: "Elira", detail: "Elira, a name that resonates with celestial beauty, its meaning as timeless as the stars themselves.", status: false, gender: "Female", type: "Ancient" },
  { name: "Thalira", detail: "Thalira, a name of divine origin, carrying the strength and wisdom of the celestial courts.", status: false, gender: "Female", type: "Ancient" },
  { name: "Selene", detail: "Selene, a celestial name that radiates serenity, as peaceful and eternal as the moon's glow.", status: false, gender: "Female", type: "Ancient" },
  { name: "Liora", detail: "Liora, a name that speaks of divine light, illuminating the path for those who seek righteousness.", status: false, gender: "Female", type: "Ancient" },
  { name: "Aeliana", detail: "Aeliana, a name blessed by the celestial winds, filled with grace and divine protection.", status: false, gender: "Female", type: "Ancient" },
  { name: "Amara", detail: "Amara, a name imbued with the power of the gods, symbolizing eternal grace and wisdom.", status: false, gender: "Female", type: "Ancient" },
  { name: "Isolde", detail: "Isolde, a name that echoes with divine melody, calling forth peace and purity in the face of darkness.", status: false, gender: "Female", type: "Ancient" },
  { name: "Elowen", detail: "Elowen, a name of celestial origin, wrapped in the light of the stars and the mystery of the heavens.", status: false, gender: "Female", type: "Ancient" },
  { name: "Irina", detail: "Irina, a name that glows with divine energy, representing strength and purity on a celestial scale.", status: false, gender: "Female", type: "Ancient" },
  { name: "Althea", detail: "Althea, a name of celestial beauty, shining brightly with wisdom and divine compassion.", status: false, gender: "Female", type: "Ancient" },
  { name: "Astrid", detail: "Astrid, a name that shines with the power of the stars, embodying both divine strength and grace.", status: false, gender: "Female", type: "Ancient" },
  { name: "Seraphia", detail: "Seraphia, a name known in the celestial realms, a pure and sacred name filled with divine light.", status: false, gender: "Female", type: "Ancient" },
  { name: "Lirael", detail: "Lirael, a name that hums with celestial power, invoking the forces of light and divine protection.", status: false, gender: "Female", type: "Ancient" },
  { name: "Aurelia", detail: "Aurelia, a name that shines with the brilliance of the sun, representing the radiant grace of the gods.", status: false, gender: "Female", type: "Ancient" },
  { name: "Calista", detail: "Calista, a name that glows with divine purity, known for its strength and beauty among celestial beings.", status: false, gender: "Female", type: "Ancient" },
  { name: "Sylvana", detail: "Sylvana, a name that echoes with the divine rhythm of nature, its roots as ancient as the celestial world.", status: false, gender: "Female", type: "Ancient" },
  { name: "Zephira", detail: "Zephira, a name that speaks of the winds of the heavens, divine in its grace and power.", status: false, gender: "Female", type: "Ancient" },
  { name: "Elysia", detail: "Elysia, a name known for its celestial beauty, its meaning eternally linked to divine paradise.", status: false, gender: "Female", type: "Ancient" },
  { name: "Morwen", detail: "Morwen, a name that carries the strength of the divine, filled with both wisdom and grace from the celestial realms.", status: false, gender: "Female", type: "Ancient" },
  { name: "Rhiannon", detail: "Rhiannon, a name with celestial roots, full of power, mystery, and a divine connection to the stars.", status: false, gender: "Female", type: "Ancient" },
  { name: "Lysandra", detail: "Lysandra, a name known for its divine radiance, an embodiment of both celestial power and compassion.", status: false, gender: "Female", type: "Ancient" },
  { name: "Alina", detail: "Alina, a name that speaks of purity and divine strength, known in the heavens for its sacredness.", status: false, gender: "Female", type: "Ancient" },
  { name: "Theodora", detail: "Theodora, a name that hums with divine wisdom, known for its connection to the celestial light of justice and truth.", status: false, gender: "Female", type: "Ancient" },
  { name: "Galatea", detail: "Galatea, a name blessed by the gods, shining with celestial grace and eternal beauty.", status: false, gender: "Female", type: "Ancient" },
  { name: "Arion", detail: "Arion, a name of celestial origin, a beacon of hope and strength that shines through the darkest of times.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Zephyros", detail: "Zephyros, a name that whispers with the winds of the heavens, carrying the divine energy of the stars.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Valen", detail: "Valen, a name that embodies the strength of celestial forces, standing firm like a pillar of divine light.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Nyx", detail: "Nyx, a name that echoes the celestial night, filled with mystery and divine protection.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Elysian", detail: "Elysian, a name that carries the essence of the divine paradise, radiating peace and eternal grace.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Talon", detail: "Talon, a name that speaks of the strength and precision of the heavens, sharp as the divine talons of celestial guardians.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Cyrius", detail: "Cyrius, a name that shines with celestial light, a force of divine will and purpose.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Darian", detail: "Darian, a name that radiates divine light, bringing forth strength, hope, and celestial will.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Vael", detail: "Vael, a name of divine origin, carrying the power of the heavens and the wisdom of the stars.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Solene", detail: "Solene, a name that shines with the power of the sun, radiant and filled with celestial grace.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Rowan", detail: "Rowan, a name that brings with it the power of the divine winds, carrying strength and grace across the heavens.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Ashriel", detail: "Ashriel, a name blessed by celestial beings, embodying both wisdom and divine purity.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Thalion", detail: "Thalion, a name that rings with the power of the stars, a protector and guardian of divine will.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Kiran", detail: "Kiran, a name filled with the divine energy of the sun, bringing light and hope to the world.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Caelum", detail: "Caelum, a name that speaks of the celestial heavens, filled with divine light and protection.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Tyrian", detail: "Tyrian, a name that carries the weight of divine authority, with the strength and grace of celestial beings.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Selwin", detail: "Selwin, a name that brings forth divine light, guiding those who follow the path of righteousness.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Evander", detail: "Evander, a name that embodies divine courage, bringing forth a legacy of strength and righteousness.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Alistair", detail: "Alistair, a name that shines with divine clarity, representing truth and light on the celestial plane.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Soren", detail: "Soren, a name that hums with the strength of celestial guardians, bringing both peace and power.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Caelin", detail: "Caelin, a name that carries with it the serenity and beauty of the divine heavens.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Zephyr", detail: "Zephyr, a name that whispers with the winds of the divine, carrying messages from the celestial realms.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Lorian", detail: "Lorian, a name known in the celestial halls, a beacon of divine wisdom and celestial power.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Solis", detail: "Solis, a name that glows with the light of the sun, a radiant symbol of celestial grace and power.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Arlen", detail: "Arlen, a name blessed by the celestial spirits, carrying with it divine strength and heavenly purpose.", status: false, gender: "Unisex", type: "Ancient" },
  { name: "Aerith", detail: "Aerith, a name that speaks of the winds of divinity, a soul destined to soar among the stars.", status: false, gender: "Male", type: "Mythical" },
  { name: "Galen", detail: "Galen, a name imbued with celestial power, representing both wisdom and strength of the divine.", status: false, gender: "Male", type: "Mythical" },
  { name: "Thorian", detail: "Thorian, a name that carries the weight of ancient divine wisdom, with strength that echoes through time.", status: false, gender: "Male", type: "Mythical" },
  { name: "Elyndros", detail: "Elyndros, a name that reflects the radiant light of the celestial realms, guiding all who seek its warmth.", status: false, gender: "Male", type: "Mythical" },
  { name: "Kaelros", detail: "Kaelros, a name that resonates with celestial strength, embodying the divine forces that shape the world.", status: false, gender: "Male", type: "Mythical" },
  { name: "Myridan", detail: "Myridan, a name that carries the essence of the stars, reflecting purity and celestial power.", status: false, gender: "Male", type: "Mythical" },
  { name: "Orvar", detail: "Orvar, a name that speaks of divine protection, standing strong as a guardian of the celestial realm.", status: false, gender: "Male", type: "Mythical" },
  { name: "Zandros", detail: "Zandros, a name filled with celestial fire, burning brightly as a beacon for all who seek the truth.", status: false, gender: "Male", type: "Mythical" },
  { name: "Veylor", detail: "Veylor, a name that whispers through the celestial winds, imbued with divine grace and power.", status: false, gender: "Male", type: "Mythical" },
  { name: "Valdrin", detail: "Valdrin, a name that speaks of the ancient divine forces, channeling both strength and wisdom from the heavens.", status: false, gender: "Male", type: "Mythical" },
  { name: "Ilyas", detail: "Ilyas, a name that echoes with divine energy, a protector of the celestial order.", status: false, gender: "Male", type: "Mythical" },
  { name: "Sylvenar", detail: "Sylvenar, a name of celestial origins, imbued with the power of nature and the light of the divine.", status: false, gender: "Male", type: "Mythical" },
  { name: "Theron", detail: "Theron, a name that resonates with divine protection, strong and unyielding like a celestial shield.", status: false, gender: "Male", type: "Mythical" },
  { name: "Sylas", detail: "Sylas, a name known in celestial realms, a being of power and grace, destined for greatness.", status: false, gender: "Male", type: "Mythical" },
  { name: "Jaxiel", detail: "Jaxiel, a name that glows with divine purpose, a being who walks in the footsteps of celestial beings.", status: false, gender: "Male", type: "Mythical" },
  { name: "Nyros", detail: "Nyros, a name that emanates celestial light, its bearer destined for great deeds.", status: false, gender: "Male", type: "Mythical" },
  { name: "Aranthir", detail: "Aranthir, a name that speaks of divine will, its bearer carrying the weight of celestial might.", status: false, gender: "Male", type: "Mythical" },
  { name: "Vaelen", detail: "Vaelen, a name blessed with divine strength, a celestial force destined to protect the weak and lead the righteous.", status: false, gender: "Male", type: "Mythical" },
  { name: "Eryndor", detail: "Eryndor, a name that hums with divine energy, a guardian of celestial realms with the heart of a warrior.", status: false, gender: "Male", type: "Mythical" },
  { name: "Drakion", detail: "Drakion, a name that reverberates with celestial fire, burning brightly with divine power.", status: false, gender: "Male", type: "Mythical" },
  { name: "Viriel", detail: "Viriel, a name that resonates with celestial harmony, a protector of light and peace.", status: false, gender: "Male", type: "Mythical" },
  { name: "Caeron", detail: "Caeron, a name of divine purpose, a celestial soul destined to bring light to the darkness.", status: false, gender: "Male", type: "Mythical" },
  { name: "Althor", detail: "Althor, a name that embodies celestial strength, a guardian destined to stand against the forces of darkness.", status: false, gender: "Male", type: "Mythical" },
  { name: "Lorien", detail: "Lorien, a name that carries the wisdom of the stars, guiding its bearer toward divine fulfillment.", status: false, gender: "Male", type: "Mythical" },
  { name: "Ferron", detail: "Ferron, a name imbued with celestial light, a soul forged in the divine fire of the heavens.", status: false, gender: "Male", type: "Mythical" },
  { name: "Seraphira", detail: "Seraphira, a name that echoes through the celestial heavens, a being of divine grace and power.", status: false, gender: "Female", type: "Mythical" },
  { name: "Liora", detail: "Liora, a name that radiates light, a celestial soul destined to bring peace and hope.", status: false, gender: "Female", type: "Mythical" },
  { name: "Vaelith", detail: "Vaelith, a name that resonates with divine strength, a protector destined to guard the realm of light.", status: false, gender: "Female", type: "Mythical" },
  { name: "Isolyn", detail: "Isolyn, a name imbued with divine power, embodying both wisdom and celestial grace.", status: false, gender: "Female", type: "Mythical" },
  { name: "Aria", detail: "Aria, a name that flows like a celestial melody, a divine song destined to bring harmony and peace.", status: false, gender: "Female", type: "Mythical" },
  { name: "Selene", detail: "Selene, a name that carries the beauty of the moon, guiding souls toward divine light.", status: false, gender: "Female", type: "Mythical" },
  { name: "Anora", detail: "Anora, a name full of celestial grace, radiating a pure and unwavering light.", status: false, gender: "Female", type: "Mythical" },
  { name: "Elathiel", detail: "Elathiel, a name that carries the power of the stars, guiding all towards their divine fate.", status: false, gender: "Female", type: "Mythical" },
  { name: "Aeris", detail: "Aeris, a name of celestial winds, carrying messages of peace and divine will across the realms.", status: false, gender: "Female", type: "Mythical" },
  { name: "Marith", detail: "Marith, a name imbued with divine purity, radiating strength and light from within.", status: false, gender: "Female", type: "Mythical" },
  { name: "Elandra", detail: "Elandra, a name that whispers with the divine winds, a celestial force destined for greatness.", status: false, gender: "Female", type: "Mythical" },
  { name: "Alathra", detail: "Alathra, a name that carries the weight of divine wisdom, a soul destined to guide others to enlightenment.", status: false, gender: "Female", type: "Mythical" },
  { name: "Amarin", detail: "Amarin, a name that sparkles like a divine star, leading others toward the path of righteousness.", status: false, gender: "Female", type: "Mythical" },
  { name: "Vaeris", detail: "Vaeris, a name that resonates with celestial power, filled with the light of divine purpose.", status: false, gender: "Female", type: "Mythical" },
  { name: "Serenia", detail: "Serenia, a name that embodies the divine calm, guiding the weary toward peace and serenity.", status: false, gender: "Female", type: "Mythical" },
  { name: "Selira", detail: "Selira, a name that glows with divine purity, lighting the way for those lost in darkness.", status: false, gender: "Female", type: "Mythical" },
  { name: "Isolde", detail: "Isolde, a name of celestial grace, bringing light to those in need of guidance and hope.", status: false, gender: "Female", type: "Mythical" },
  { name: "Zephyra", detail: "Zephyra, a name that flows like the winds, a celestial being of grace and swift action.", status: false, gender: "Female", type: "Mythical" },
  { name: "Liliana", detail: "Liliana, a name that embodies the divine light, guiding others toward love and understanding.", status: false, gender: "Female", type: "Mythical" },
  { name: "Elysandra", detail: "Elysandra, a name that calls upon the celestial realms, filled with the power of divine beauty and strength.", status: false, gender: "Female", type: "Mythical" },
  { name: "Nyssa", detail: "Nyssa, a name that echoes with the divine harmony of the stars, guiding those who seek the truth.", status: false, gender: "Female", type: "Mythical" },
  { name: "Thelira", detail: "Thelira, a name that resonates with divine magic, bringing light to the darkest corners of the world.", status: false, gender: "Female", type: "Mythical" },
  { name: "Calista", detail: "Calista, a name that shines with celestial light, offering hope and guidance to those in need.", status: false, gender: "Female", type: "Mythical" },
  { name: "Thalira", detail: "Thalira, a name full of celestial grace, a being of divine origin and purpose.", status: false, gender: "Female", type: "Mythical" },
  { name: "Aerin", detail: "Aerin, a name that carries the breath of the divine, destined to guide and protect with celestial strength.", status: false, gender: "Female", type: "Mythical" },
  { name: "Lyren", detail: "Lyren, a name that resonates with the harmony of celestial forces, balancing light and shadow.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Aurelon", detail: "Aurelon, a name that embodies the radiant glow of the stars, guiding souls toward their divine destiny.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Zephyros", detail: "Zephyros, a name that carries the swift winds of change, a being destined to alter the course of fate.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Caelin", detail: "Caelin, a name imbued with the power of the stars, a celestial force that commands respect and wisdom.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Raelen", detail: "Raelen, a name that flows like a divine river, offering guidance and strength to those who seek it.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Elyndra", detail: "Elyndra, a name that shines like the first rays of dawn, bringing light to those who walk in darkness.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Thalion", detail: "Thalion, a name that carries the weight of destiny, a being destined to shape the future with divine strength.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Aelus", detail: "Aelus, a name that whispers through the winds of time, a soul destined to guide with wisdom and grace.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Kaelon", detail: "Kaelon, a name full of celestial power, destined to protect the light and guide others toward enlightenment.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Vaeris", detail: "Vaeris, a name imbued with the forces of light, bringing clarity and direction to all who encounter it.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Cyron", detail: "Cyron, a name that echoes through the heavens, a celestial being of strength and resilience.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Eryndra", detail: "Eryndra, a name that speaks of divine wisdom, guiding others toward truth and peace.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Zorath", detail: "Zorath, a name filled with celestial fire, bringing warmth and light to those in need.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Selwyn", detail: "Selwyn, a name that carries the serenity of the stars, bringing calm and peace to turbulent hearts.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Kalyth", detail: "Kalyth, a name that resonates with the heartbeat of the cosmos, a divine presence in both light and shadow.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Miran", detail: "Miran, a name that calls upon the divine, bringing clarity and purpose to the soul.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Aether", detail: "Aether, a name that speaks of the heavens above, a soul connected to the divine realms.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Varian", detail: "Varian, a name that embodies the divine harmony of the universe, a guiding force for those in need.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Lirion", detail: "Lirion, a name that carries the wisdom of the stars, a celestial guide to those seeking enlightenment.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Sylven", detail: "Sylven, a name that flows like the rivers of the divine, a being destined to bring balance to the world.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Aris", detail: "Aris, a name that shines like the moon, guiding those lost in darkness toward their divine purpose.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Taryn", detail: "Taryn, a name filled with celestial grace, offering peace and wisdom to all who encounter it.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Lyros", detail: "Lyros, a name that carries the music of the stars, a divine melody that inspires all who listen.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Solon", detail: "Solon, a name that shines with divine clarity, guiding the lost toward their destined path.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Aran", detail: "Aran, a name that echoes through the celestial realms, bringing strength and purpose to all who bear it.", status: false, gender: "Unisex", type: "Mythical" },
  { name: "Zayden", detail: "Zayden, a name that shines with radiant energy, carrying the spirit of hope and resilience.", status: false, gender: "Male", type: "Modern" },
  { name: "Orion", detail: "Orion, a name inspired by the stars, a being destined to lead and guide with divine clarity.", status: false, gender: "Male", type: "Modern" },
  { name: "Caelan", detail: "Caelan, a name that echoes with celestial wisdom, bringing peace and guidance to all who hear it.", status: false, gender: "Male", type: "Modern" },
  { name: "Lysander", detail: "Lysander, a name full of divine light, a soul destined to illuminate the path for others.", status: false, gender: "Male", type: "Modern" },
  { name: "Quinn", detail: "Quinn, a name that exudes serenity and strength, a protector of light and justice.", status: false, gender: "Male", type: "Modern" },
  { name: "Elian", detail: "Elian, a name that radiates divine warmth, a being of compassion and wisdom.", status: false, gender: "Male", type: "Modern" },
  { name: "Kairo", detail: "Kairo, a name that embodies both peace and power, a celestial guide destined to change the world.", status: false, gender: "Male", type: "Modern" },
  { name: "Aiden", detail: "Aiden, a name filled with the light of hope, destined to lead others toward salvation.", status: false, gender: "Male", type: "Modern" },
  { name: "Noah", detail: "Noah, a name that signifies a beacon of hope in times of darkness, a divine soul of protection.", status: false, gender: "Male", type: "Modern" },
  { name: "Maxen", detail: "Maxen, a name that carries the power of divinity, a force for good and strength for others.", status: false, gender: "Male", type: "Modern" },
  { name: "Jaxon", detail: "Jaxon, a name that resonates with celestial energy, a being of light who brings clarity and direction.", status: false, gender: "Male", type: "Modern" },
  { name: "Kian", detail: "Kian, a name that carries the divine fire, a soul of resilience and purpose, destined to lead.", status: false, gender: "Male", type: "Modern" },
  { name: "Malek", detail: "Malek, a name that stands strong like the celestial pillars, guiding with wisdom and power.", status: false, gender: "Male", type: "Modern" },
  { name: "Julian", detail: "Julian, a name that shines with the light of compassion, a protector of the weak and a guide for the lost.", status: false, gender: "Male", type: "Modern" },
  { name: "Levi", detail: "Levi, a name imbued with divine power, a being destined to walk a path of light and righteousness.", status: false, gender: "Male", type: "Modern" },
  { name: "Gabriel", detail: "Gabriel, a name that echoes with the heavenly voices, a messenger of divine truth and justice.", status: false, gender: "Male", type: "Modern" },
  { name: "Thorne", detail: "Thorne, a name that carries the weight of divine protection, a soul forged to guard and protect.", status: false, gender: "Male", type: "Modern" },
  { name: "Dorian", detail: "Dorian, a name filled with celestial grace, a being destined to guide others toward the light.", status: false, gender: "Male", type: "Modern" },
  { name: "Ezra", detail: "Ezra, a name that speaks of divine clarity, a guide who leads with wisdom and humility.", status: false, gender: "Male", type: "Modern" },
  { name: "Elias", detail: "Elias, a name that shines like a beacon, illuminating the way for others with its divine radiance.", status: false, gender: "Male", type: "Modern" },
  { name: "Jett", detail: "Jett, a name that signifies swiftness and purpose, a divine soul destined to change the course of history.", status: false, gender: "Male", type: "Modern" },
  { name: "Raphael", detail: "Raphael, a name filled with celestial healing power, bringing light and restoration to those in need.", status: false, gender: "Male", type: "Modern" },
  { name: "Callum", detail: "Callum, a name that carries the sound of divine voices, calling forth a destiny of peace and guidance.", status: false, gender: "Male", type: "Modern" },
  { name: "Darian", detail: "Darian, a name that shines with a celestial fire, guiding others with strength, wisdom, and compassion.", status: false, gender: "Male", type: "Modern" },
  { name: "Aiyana", detail: "Aiyana, a name that embodies the light of the stars, bringing peace and serenity to all.", status: false, gender: "Female", type: "Modern" },
  { name: "Liora", detail: "Liora, a name that shines with radiant warmth, guiding others through the darkness with grace.", status: false, gender: "Female", type: "Modern" },
  { name: "Amara", detail: "Amara, a name full of divine love, bringing healing and strength to those in need.", status: false, gender: "Female", type: "Modern" },
  { name: "Zoey", detail: "Zoey, a name full of vitality and brightness, a soul destined to bring light to the world.", status: false, gender: "Female", type: "Modern" },
  { name: "Lyra", detail: "Lyra, a name inspired by the heavens, guiding others with wisdom and compassion.", status: false, gender: "Female", type: "Modern" },
  { name: "Nova", detail: "Nova, a name that radiates with celestial power, a being destined to light up the world with brilliance.", status: false, gender: "Female", type: "Modern" },
  { name: "Alina", detail: "Alina, a name that glows with purity, destined to bring peace and clarity to all who seek it.", status: false, gender: "Female", type: "Modern" },
  { name: "Aria", detail: "Aria, a name that sings with divine melody, a soul whose voice brings comfort and hope to others.", status: false, gender: "Female", type: "Modern" },
  { name: "Isabella", detail: "Isabella, a name filled with grace and strength, a divine soul with a heart full of compassion.", status: false, gender: "Female", type: "Modern" },
  { name: "Freya", detail: "Freya, a name that embodies divine beauty, guiding others with light and love.", status: false, gender: "Female", type: "Modern" },
  { name: "Selene", detail: "Selene, a name that shines with the light of the moon, bringing clarity and guidance in times of darkness.", status: false, gender: "Female", type: "Modern" },
  { name: "Iris", detail: "Iris, a name that reflects the beauty of the rainbow, bringing hope and joy to those around her.", status: false, gender: "Female", type: "Modern" },
  { name: "Maia", detail: "Maia, a name that carries the beauty of the earth, filled with divine strength and nurturing energy.", status: false, gender: "Female", type: "Modern" },
  { name: "Ava", detail: "Ava, a name that embodies grace and purity, destined to lead others toward a brighter future.", status: false, gender: "Female", type: "Modern" },
  { name: "Seraphina", detail: "Seraphina, a name that shines with celestial fire, guiding others with divine wisdom and light.", status: false, gender: "Female", type: "Modern" },
  { name: "Mila", detail: "Mila, a name filled with divine love, destined to bring warmth and peace to all who encounter it.", status: false, gender: "Female", type: "Modern" },
  { name: "Willow", detail: "Willow, a name that sways with the winds of destiny, a soul full of divine harmony and balance.", status: false, gender: "Female", type: "Modern" },
  { name: "Elara", detail: "Elara, a name that carries the light of the stars, a soul that guides others with wisdom and grace.", status: false, gender: "Female", type: "Modern" },
  { name: "Rhea", detail: "Rhea, a name that signifies divine strength and compassion, a protector destined to bring peace.", status: false, gender: "Female", type: "Modern" },
  { name: "Ophelia", detail: "Ophelia, a name that shines with divine elegance, bringing peace and clarity to all who encounter her.", status: false, gender: "Female", type: "Modern" },
  { name: "Ember", detail: "Ember, a name filled with celestial fire, a being whose presence brings warmth and transformation.", status: false, gender: "Female", type: "Modern" },
  { name: "Aurora", detail: "Aurora, a name that shines like the dawn, a divine soul who brings new beginnings and hope to all.", status: false, gender: "Female", type: "Modern" },
  { name: "Luna", detail: "Luna, a name that glows like the moon, guiding others through the darkness with her soft light.", status: false, gender: "Female", type: "Modern" },
  { name: "Elise", detail: "Elise, a name that resonates with divine grace, a soul filled with compassion and light.", status: false, gender: "Female", type: "Modern" },
  { name: "Lena", detail: "Lena, a name full of divine beauty, destined to lead with strength, grace, and purity.", status: false, gender: "Female", type: "Modern" },
  { name: "Phoenix", detail: "Phoenix, a name that symbolizes rebirth and eternal strength, rising from the ashes with divine power.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Riley", detail: "Riley, a name filled with light and hope, a soul destined to bring balance and harmony to the world.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Dakota", detail: "Dakota, a name that carries the strength and resilience of the earth, guiding others with wisdom and clarity.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Ash", detail: "Ash, a name that represents transformation and renewal, burning bright with divine light.", status: false, gender: "Unisex", type: "Modern" },
  { name: "River", detail: "River, a name that flows with divine energy, bringing calm and peace to those around them.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Skyler", detail: "Skyler, a name that reaches toward the heavens, a soul filled with boundless potential and divine purpose.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Jordan", detail: "Jordan, a name that bridges the gap between earth and sky, bringing balance and harmony to all.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Rowan", detail: "Rowan, a name that stands strong like a tree in the wind, guided by divine wisdom and strength.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Soren", detail: "Soren, a name that carries a sense of divine tranquility, bringing peace to those in need.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Morgan", detail: "Morgan, a name full of mystery and power, destined to guide others with divine knowledge and insight.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Quinn", detail: "Quinn, a name filled with divine joy, bringing light and hope to all who encounter it.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Blake", detail: "Blake, a name that burns with inner fire, a soul who brings divine inspiration and strength.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Eden", detail: "Eden, a name that represents divine beauty and peace, a soul destined to heal and bring harmony to all.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Zephyr", detail: "Zephyr, a name that carries the winds of change, bringing divine energy and movement to the world.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Sage", detail: "Sage, a name that embodies wisdom and grace, guiding others with divine knowledge and understanding.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Reese", detail: "Reese, a name that embodies divine harmony and balance, bringing peace and clarity to the world.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Lennon", detail: "Lennon, a name that echoes with divine purpose, guiding others toward their true destiny.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Emery", detail: "Emery, a name that shines with inner strength and compassion, a soul destined to help others find peace.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Avery", detail: "Avery, a name that embodies grace and light, a soul destined to lead others with divine compassion.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Jaden", detail: "Jaden, a name filled with divine energy, bringing courage and strength to all who meet them.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Cameron", detail: "Cameron, a name that brings balance and clarity, a soul who guides others with wisdom and compassion.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Kyren", detail: "Kyren, a name that glows with divine power, bringing light and hope to those around them.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Zion", detail: "Zion, a name that represents divine strength and peace, guiding others to find their own inner power.", status: false, gender: "Unisex", type: "Modern" },
  { name: "Tatum", detail: "Tatum, a name that shines with hope and possibility, a divine soul destined to create change.", status: false, gender: "Unisex", type: "Modern" }
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
  
  const AasimarNameGenerator = () => {
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
  
const bgImage = "/aasimar-name-generator.webp"
const context = "Aasimar Name Generator With Meaning Tool "
const Q1 = "What is the Aasimar Name Generator?"
const A1 = "The Aasimar Name Generator is a tool designed to help you generate unique and meaningful names for your Aasimar characters. It offers a variety of options, including gender, name styles, and categories, to create names that reflect the celestial and divine nature of Aasimar beings in Dungeons & Dragons."

const Q2 = "How do I use the Aasimar Name Generator?"
const A2 = "To use the tool, simply select the gender (male, female, or unisex) and choose a name style (ancient, mythical, or modern) that fits your character’s backstory. Once you click generate, you’ll instantly receive a list of unique, meaningful names, each with a celestial significance. Review the results to find the perfect name that aligns with your character's divine heritage and purpose. "

const Q3 = "Can I customize the names generated?"
const A3 = "Yes, the Aasimar Name Generator allows for some customization. You can select specific themes such as celestial heritage, divine light, or other divine elements. Additionally, you can choose from different name styles to suit your campaign’s setting and your character's backstory."

const Q4 = "Are the names generated suitable for Dungeons & Dragons campaigns?"
const A4 = "Absolutely! The names are specifically crafted to fit the lore and themes of Aasimar characters in Dungeons & Dragons. They reflect celestial power, divine heritage, and light-based attributes, making them perfect for your campaigns and role-playing sessions."

const Q5 = "What is the significance of Aasimar names?"
const A5 = "Aasimar names are meaningful and tied to celestial origins, divine power, and otherworldly grace. They reflect the character’s divine purpose, whether as a protector, guide, or champion of good. A strong Aasimar name adds depth to your character’s backstory and plays a vital role in storytelling within your D&D campaign."
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
  <ol className="list-none p-0 inline-flex flex-wrap">
    <li className="flex items-center">
      <a href="/" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Home</a>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 19l7-7-7-7"></path>
      </svg>
    </li>
    <li className="flex items-center">
      <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Fantasy and Mythical Creatures Names</a>
    </li>
    <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 19l7-7-7-7"></path>
    </svg>
    <li className="flex items-center">
      <a href="/aasimar-name-generator" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Aasimar Name Generator</a>
    </li>
  </ol>
</nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Aasimar Name Generator With Meaning Tool
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Aasimar Gender</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Style of Aasimar Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Ancient">Ancient</option>
              <option value="Mystic">Mythical</option>
              <option value="Warrior">Modern</option>
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
          What is the Aasimar Name Generator?
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        The Aasimar Name Generator is an advanced tool designed to help players, Dungeon Masters, 
                        and creators craft authentic and creative names for Aasimar characters. 
                        These names embody the celestial heritage and divine nature that define Aasimar in Dungeons & Dragons.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        With this tool, you can instantly generate names that blend celestial origins with deep meaning, ensuring your characters stand out. 
                        Whether you're building a hero's backstory, planning a campaign, or simply brainstorming, 
                        this generator is here to provide reliable and inspiring results.
                        </p>
            <h2 className="text-center text-[36px] font-medium text-[#343a40] py-[30px]">
            Why Use Our Aasimar Name Generator?
            </h2>
            <p className="text-left text-[#343a40]">
            Creating the perfect Aasimar name can be challenging, 
            but this generator makes it easy by offering a seamless and efficient experience. Here’s why it’s the ultimate tool for your D&D campaigns:
            </p>
            <hr />  
            <br />
            <p className="text-left text-[#343a40]">
            <ul>
                <li><b>Save Time and Effort:</b> Skip the brainstorming and let the generator do the heavy lifting. It delivers high-quality names instantly.</li>
                <li><b>Diverse Options:</b> Choose from ancient, mythical, or modern styles to align with your campaign’s theme.</li>
                <li><b>Reliable and Inspiring:</b> Generate unique, meaningful names without compromising creativity.</li>
                <li><b>Perfect for All Roles:</b> Whether you're a player creating a character, a Dungeon Master designing NPCs, or a writer building a story, this tool fits your needs.</li>
                <li><b>Explore Categories:</b> Discover names grouped by celestial themes, divine symbols, or ancient lore to add depth and authenticity.</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Aasimar Name Generator Tool
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Using the Aasimar Name Generator is quick and straightforward. In just a few steps, you can create the perfect name for your celestial character. Here's how:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Choose <b>Gender</b> (Male, Female, Unisex)
              </h3>
              <p  className="text-left text-[#343a40]">
              Start by selecting the gender for your character:
              <ul>
                <li><b>Male:</b> Names that signify strength, leadership, and celestial power.</li>
                <li><b>Female:</b> Names that reflect grace, divinity, and light.</li>
                <li><b>Unisex:</b> Versatile names suitable for any character, blending celestial and neutral tones.</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a <b>Style</b> (Ancient, Mythical, Modern)
              </h3>
              <p>
              Decide on the style that matches your character's background or campaign setting:
              <ul>
                <li><b>Ancient:</b> Names inspired by timeless celestial lore, evoking a sense of history and wisdom.</li>
                <li><b>Mythical:</b> Mystical names with divine and otherworldly qualities, perfect for a fantasy setting.</li>
                <li><b>Modern:</b> Contemporary celestial-inspired names that blend tradition with modern creativity.</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b>Generate</b> 
              </h3>
              <p>
              With a single click, instantly generate a list of unique and meaningful names tailored to your preferences. 
              Each name is carefully crafted to match the celestial heritage of Aasimar characters.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Review the Results
              </h3>
              <p>
              Browse through the generated names and find the perfect fit for your character. Each name comes with its meaning or inspiration, adding depth to your storytelling.
              <ul>
                <li>Use the meaning to enhance your character's backstory</li>
                <li>Save your favorites for easy reference.</li>
            </ul>
            Each step is simple and quick. You can create the perfect name for your character in just seconds.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="male-aasimar-name-generator.jpg"
              alt="male Aasimar Name Generator With Meaning"
              className="w-[300px] my-[20px] h-[360px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="female-aasimar-name-generator.jpg"
              alt="female Aasimar Name Generator With Meaning"
              className="w-[300px] h-[360px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/scourge-aasimar-7b8f57dc_0_l.webp")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Aasimar Name Generator
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
          <b>Features of the Aasimar Name Generator</b>
          </h2>
          <p className="text-[#343a40]">
          The Aasimar Name Generator is designed to help you create unique and meaningful names that perfectly fit your celestial characters. 
          Below are the key features of the tool that will enhance your experience:
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b> Customizable Name Selection</b>
            </h3>
            <p className="text-[#343a40]">
            You can easily tailor the name generation process to your character’s needs. Choose from various gender options (male, female, or unisex) and 
            select a style that suits the tone of your campaign—whether ancient, mythical, or modern. 
            This flexibility ensures that your generated name perfectly aligns with your character's background and personality.
            <br /><br />
            <ul>
                <li><b>Gender Options: </b>Use the meaning to enhance your character's backstory</li>
                <li><b>Name Style: </b>Options to match your campaign’s setting, from ancient celestial roots to modern divine inspirations.</li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
          <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b> Instant and Accurate Results</b>
            </h3>
            <p className="text-[#343a40]">
            The tool provides fast results with minimal input. After selecting your preferences, 
            you can instantly generate a list of names that reflect your character’s celestial origins and divine nature. 
            Each name is carefully crafted to include meanings and backstory, 
            making it easier for you to connect with your character's role in the campaign.
            <br /><br />
            <ul>
            <li><b>Quick Name Generation: </b>Get results in seconds to save time on your character creation</li>
            <li><b>Meaningful Names: </b>Each name comes with its own significance, often reflecting celestial powers, light, or purity.</li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
          <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b> Diverse Name Styles</b>
            </h3>
            <p className="text-[#343a40]">
            The tool allows you to choose a name style that fits the thematic elements of your character. Whether you’re looking for something timeless and ancient, 
            mystical and otherworldly, or modern and contemporary, the generator has options that cater to a wide range of styles and settings.
            <br /><br />
            <ul>
            <li><b>Ancient: </b>Names that evoke the sense of divine power and timelessness</li>
            <li><b>Mythical: </b>Names inspired by celestial legends and mythical beings</li>
            <li><b>Modern: </b>Contemporary names with divine inspiration and a fresh, creative twist</li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
           <b> Meaningful Character Backstories</b>
            </h3>
            <p className="text-[#343a40]">
            Every name generated comes with a backstory that reflects the Aasimar’s role in the world. 
            This feature enhances the narrative, helping you connect the name to the character’s celestial mission or divine origins. 
            Whether your character is a protector, a guide, or a champion of good, their name can help define their purpose.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            <b>Creative Flexibility</b>
            </h3>
            <p className="text-[#343a40]">
            Every name generated comes with a backstory that reflects the Aasimar’s role in the world. 
            This feature enhances the narrative, helping you connect the name to the character’s celestial mission or divine origins. 
            Whether your character is a protector, a guide, or a champion of good, their name can help define their purpose.
            <br /><br />
            <ul>
            <li><b>Role-Specific Names: </b>Names that align with the character's divine purpose, like a protector of light or a seeker of wisdom</li>
            <li><b>Lore Integration: </b>Names that tie into the rich lore of the Aasimar and their celestial heritage</li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            <b>Enhanced Customization</b>
            </h3>
            <p className="text-[#343a40]">
            If you prefer more control over the name generation process, the tool allows for additional customization. 
            You can select specific themes or keywords related to celestial power, divine grace, or other attributes that fit your character’s backstory. 
            This provides an even deeper connection to the name you choose for your character.
            <br /><br />
            <ul>
            <li><b>Theme-Based Customization: </b>Focus on specific aspects like divine light, celestial power, or purity</li>
            <li><b>Advanced Options: </b>Adjust settings to reflect your character’s individual traits, ensuring a unique and fitting name</li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
           <b> Perfect for Campaigns and Storytelling</b>
            </h3>
            <p className="text-[#343a40]">
            The Aasimar Name Generator is an essential tool for players, Dungeon Masters, and creators who are crafting unique and memorable characters. 
            The meaningful names you generate will add depth and richness to your campaign, making your characters feel more integrated with the world and the story.
            <br /><br />
            <ul>
            <li><b>For Players: </b>Create characters with names that reflect their celestial origins and divine purpose</li>
            <li><b>For Dungeon Masters: </b>Generate unique Aasimar NPCs with compelling names and backstories to enhance your campaign’s narrative</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[100%] bg-white"
        // style={{ backgroundColor: "rgb(23 ,162 ,184, 0.6)" }}
      >
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Aasimar Name Categories by Gender
            </h2>           
            <br />
            <h3 className="text-left text-[28px] font-medium text-[#343a40] pb-[]">
            Aasimar Male Names
            </h3>
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Ancient: </b>
           <ul>
            <li>- <b>Solarius: </b>Meaning "Sunlight" or "Divine Light", representing the celestial power of the sun</li>
            <li>- <b>Aetherion: </b>Derived from "Aether," the celestial substance that fills the upper regions of space, symbolizing ethereal power</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Mythical: </b>
           <ul>
            <li>- <b>Luminar: </b>Meaning "Radiant One," symbolizing purity and guidance</li>
            <li>- <b>Caelus: </b>From Latin, meaning "Heaven" or "Sky," representing divine rulership over the heavens</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Modern: </b>
           <ul>
            <li>- <b>Zariel: </b>A modern celestial name meaning "Light of the Divine"</li>
            <li>- <b>Theron: </b>Meaning "Hunter," representing strength, determination, and divine protection</li>
           </ul>
            </p> 
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Aasimar Female Names
            </h3>
            <br />  
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Ancient: </b>
           <ul>
            <li>- <b>Seraphina: </b>Derived from the word "Seraphim," the highest order of angels, symbolizing grace and divine protection</li>
            <li>- <b>Althea: </b>Meaning "Healing" or "Wholesome," representing purity and restorative power</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Mythical: </b>
           <ul>
            <li>- <b>Elysia: </b>Meaning "Blissful" or "Heavenly," a name tied to the divine realm of Elysium</li>
            <li>- <b>Lyriel: </b>Meaning "Moonlight," symbolizing celestial beauty and divine influence</li>
           </ul>
            </p> 
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Modern: </b>
           <ul>
            <li>- <b>Aria: </b>Meaning "Air" or "Song," symbolizing a celestial being with power over light and sound</li>
            <li>- <b>Zarael: </b>A modern take on divine names, meaning "Star of Divinity"</li>
           </ul>
            </p> 
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          <b>Aasimar Names in Dungeons & Dragons</b>
          </h2><br />
        </div>
        <p className="text-[#343a40]">
        Aasimar names hold a special place in the world of Dungeons & Dragons, blending celestial origins with divine grace to create a sense of otherworldly beauty and meaning. 
        These names are not just labels—they are reflections of an Aasimar's purpose, heritage, and role in the game.
        </p>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              What Makes Aasimar Names Unique?
              </h3>
              <p>
              <ul>
              <li><b>- Celestial Inspiration: </b>(Aasimar names often draw from celestial beings, holy symbols, and divine elements)</li><br />
              <li><b>- Deep Meanings: </b> (Many names are linked to themes of light, purity, and guidance, embodying the noble qualities of Aasimar)</li><br />
              <li><b>- Storytelling Depth: </b> (A well-chosen name adds richness to your character’s backstory, making them unforgettable in any campaign)</li><br />
            </ul>
            <b>
            Examples of Aasimar Naming Conventions:
            </b>
            <li>Names inspired by ancient languages or religious texts</li>
            <li>First names that signify hope, protection, or celestial beauty</li>
            <li>Combinations of light-based words and divine titles to signify their purpose</li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <br />
          <hr />
          <br /><br />
          <h2 className="sm:text-[32px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Why Aasimar Names Matter</b>
          </h2>
          <p className="text-[#343a40]">
          Aasimar names are more than just labels—they are powerful tools that shape a character’s identity, backstory, and role within the world. 
          A thoughtfully chosen name can provide insight into your character’s divine origins, celestial power, and purpose in the world of Dungeons & Dragons. 
          Here’s why Aasimar names are so important:
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b> They Establish a Strong Identity</b>
            </h3>
            <p>
            A name is one of the first things players and Dungeon Masters notice about a character. 
            For Aasimar, a name can immediately communicate celestial grace, divine strength, and the character’s connection to the divine. 
            A unique and meaningful name helps the character stand out and leaves a lasting impression.
            <br /><br />    
            <ul>
                <li>
                <b>- Divine Identity: </b>(Reflecting your character's celestial heritage through their name)
                </li>
                <li>
                <b>- Memorable Impact: </b>(A powerful name makes your character unforgettable in the minds of others)
                </li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b> They Reflect the Character’s Story</b>
            </h3>
            <p>
            The name you choose for your Aasimar can give a glimpse into their past, their mission, and their role in the campaign. 
            Whether they are a champion of good, a protector of light, or a guide for lost souls, their name will help tell their story. 
            The deeper the connection between the name and the character’s backstory, the more immersed players will feel in your campaign. 
            <br /><br />       
            <ul>
                <li>
                <b>- Backstory Connection: </b>(A meaningful name ties directly to your character’s motivations and journey)
                </li>
                <li>
                <b>- Character Depth: </b>(A name that reflects their celestial role adds layers to their identity and story)
                </li>
            </ul> 
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b> They Add Depth to the Campaign</b>
            </h3>
            <p>
            Aasimar names don’t just affect one character—they impact the entire narrative. 
            A celestial name brings a sense of divine purpose and higher power to the game world, influencing how others perceive and interact with the character. 
            The significance of their name can tie into larger themes of light vs. darkness, good vs. evil, or divine intervention, creating a richer and more dynamic campaign.
            <br /><br />       
            <ul>
                <li>
                <b>- Campaign Integration: </b>(Aasimar names tie into broader story themes, influencing the world around them)
                </li>
                <li>
                <b>- Storytelling Impact: </b>(The divine nature of their name can spark intrigue, tension, and plot development)
                </li>
            </ul> 
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b> They Create Connection and Immersion</b>
            </h3>
            <p>
            A well-chosen name can foster an emotional connection between players and their characters. 
            By choosing a name that resonates with your character’s journey or divine calling, you strengthen the bond between player and character. 
            This connection can enhance the overall role-playing experience, making the game more immersive and enjoyable.
            <br /><br />       
            <ul>
                <li>
                <b>- Player Engagement: </b>(A strong, meaningful name encourages players to invest in their character's journey)
                </li>
                <li>
                <b>- Immersive Role-Playing: </b>(A name that reflects divine attributes encourages deeper role-playing interactions)
                </li>
            </ul> 
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
           <b> They Shape How Others Perceive the Character</b>
            </h3>
            <p>
            In a world where names hold significant weight, the way NPCs, allies, and enemies perceive an Aasimar can be influenced by their name. 
            A celestial name often invokes reverence, fear, or respect—each interaction shaped by the name’s divine connotations. 
            This can help inform how your character is treated or how they navigate social dynamics in the game world.
            <br /><br />       
            <ul>
                <li>
                <b>- Perception and Influence: </b>(A celestial name can carry with it an aura of authority or mysticism)
                </li>
                <li>
                <b>- Social Interactions: </b>(Characters with powerful names may receive special treatment or be feared by others, shaping their path)
                </li>
            </ul> 
            </p>
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
          className="flex items-center flex-col gap-6 px-4"
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
          <a href="https://www.nameideagenerator.com/contact-us">
  <button className="bg-white text-black text-[20px] px-[20px] py-[16px] rounded-[10px] font-semibold">
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

export default AasimarNameGenerator;

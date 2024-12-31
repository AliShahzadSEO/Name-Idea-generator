"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
        { name: "Arkelith", detail: "Arkelith, a land of forgotten kingdoms, where ancient civilizations once flourished.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Zephros", detail: "Zephros, a realm swept by the winds of time, its mountains standing as silent witnesses to history.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Ravron", detail: "Ravron, an enduring land where ruins tell tales of lost empires.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Veylor", detail: "Veylor, a continent where the earth bears scars from ages past.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Durath", detail: "Durath, a once mighty empire now reduced to ruins, but its history still echoes through the lands.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Eskalor", detail: "Eskalor, an ancient land where the wind whispers the secrets of its ancient rulers.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Myrdon", detail: "Myrdon, a continent with deep roots in forgotten legends and untold histories.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Keldar", detail: "Keldar, a land steeped in ancient power, where every stone holds a story of past glory.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Thalanor", detail: "Thalanor, a once great kingdom, now a land of mystery and untold riches beneath its sands.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Kaeroth", detail: "Kaeroth, a continent where time itself seems to stand still, preserving its ancient secrets.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Lythan", detail: "Lythan, a land of ancient forests where the trees have seen centuries pass by.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Zandros", detail: "Zandros, a continent where the ruins of once-great cities now stand as monuments to an ancient past.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Varnath", detail: "Varnath, a land known for its ancient stone structures and the mysteries buried within its vast deserts.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Emros", detail: "Emros, a forgotten land where the ancient people left behind powerful artifacts and magical relics.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Oranor", detail: "Oranor, an ancient continent where the land itself speaks of lost civilizations and untold power.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Ylatha", detail: "Ylatha, a place where time stands still, with vast forgotten cities waiting to be rediscovered.", status: false, gender: "Realistic", type: "Ancient Clan" },
        { name: "Lothar", detail: "Lothar, a realm marked by ancient battlefields where heroes of old once stood.", status: false, gender: "Realistic", type: "Ancient Clan" },
   { name: "Mistran", detail: "Mistran, a land of mist and mystery, where ruins of long-forgotten empires lie buried.", status: false, gender: "Realistic", type: "Ancient Clan" },
   { name: "Thorva", detail: "Thorva, a continent with a rich history of warriors and kings, where their legacies live on in the land.", status: false, gender: "Realistic", type: "Ancient Clan" },
   { name: "Sarendel", detail: "Sarendel, a land where ancient ruins tell the story of a once-powerful civilization lost to time.", status: false, gender: "Realistic", type: "Ancient Clan" },
   { name: "Valtoria", detail: "Valtoria, a land of ancient mysticism, where secrets of old are hidden in the whispers of the wind.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Selenor", detail: "Selenor, a continent bathed in eternal twilight, where mystical energies pulse beneath the surface.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Ilthas", detail: "Ilthas, a realm where magic flows freely, and the very land breathes with untapped power.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Wyleris", detail: "Wyleris, a continent known for its ancient shrines and the mystic forces that protect its lands.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Elindor", detail: "Elindor, a realm shrouded in magical fog, where every step takes you deeper into the unknown.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Atheron", detail: "Atheron, a land where powerful sorcerers once ruled, and their magic lingers like an eternal storm.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Merothar", detail: "Merothar, a mystical continent where the natural world and magic are in perfect harmony.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Azraelon", detail: "Azraelon, a continent where the line between the living and the dead is thin, and the mystical forces are strong.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Falore", detail: "Falore, a realm of great spiritual energy, where ancient rituals still shape the world around it.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Dalros", detail: "Dalros, a land of shadowed forests and enchanted glades, where ancient powers stir in the stillness.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Eldoria", detail: "Eldoria, a continent steeped in magical history, where the flow of time seems to bend under the weight of its legacy.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Zhenoth", detail: "Zhenoth, a realm where the elements themselves are controlled by mystical beings of great power.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Orlith", detail: "Orlith, a land known for its ethereal beauty, where magic weaves through the very fabric of the world.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Naryan", detail: "Naryan, a mystical place where the seas are as deep as the secrets it holds beneath the waves.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Lirael", detail: "Lirael, a place where ancient ruins and mystical creatures abound, and the forces of magic are never far from reach.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Elwris", detail: "Elwris, a land of endless night, where the power of the stars fuels the magic of the realm.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Thalion", detail: "Thalion, a mystical continent where the echoes of forgotten gods still influence the world.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Aelon", detail: "Aelon, a realm where the old gods slumber beneath the earth, waiting to awaken and reclaim their domain.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Verandor", detail: "Verandor, a mystical continent where the boundaries between the physical and magical worlds blur.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Drakim", detail: "Drakim, a realm of shifting magic and ancient beasts, where secrets lie beneath the surface, waiting to be uncovered.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Galathor", detail: "Galathor, a place where ancient magic and lost knowledge are waiting to be rediscovered.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Dylorn", detail: "Dylorn, a continent of endless deserts, where ancient ruins hold powerful, forgotten magics.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Nalindor", detail: "Nalindor, a mystical realm of grand forests and magical rivers, where the flow of time is unpredictable.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Olaron", detail: "Olaron, a land where the veil between reality and magic is thin, and the unknown lies just beneath the surface.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Virdon", detail: "Virdon, a realm where magical creatures roam free, and the power of nature is at the command of its people.", status: false, gender: "Realistic", type: "Mystic Clan" },
   { name: "Kaldoria", detail: "Kaldoria, a land of endless battlefields, where strength is the key to survival and honor is forged in blood.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Grimthal", detail: "Grimthal, a realm where the might of warriors is revered, and only the strongest prevail in the face of adversity.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Thorvakar", detail: "Thorvakar, a land of unyielding warriors, where combat is a way of life and every victory is a testament to one's power.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Vashakar", detail: "Vashakar, a kingdom forged by the blood of its people, where warriors hone their skills in the heat of relentless conflict.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Galaran", detail: "Galaran, a realm of honor and strength, where the fiercest of warriors carve their names into history through battle.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Dakmor", detail: "Dakmor, a land where the clash of steel rings out in every corner, and only the strongest hold sway.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Fyrondor", detail: "Fyrondor, a land of fire and fury, where warriors are forged in the flames of conflict and the blood of their enemies.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Karvath", detail: "Karvath, a continent where the sword reigns supreme and warriors live and die by the blade.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Helgoroth", detail: "Helgoroth, a realm ruled by warlords, where strength is the ultimate currency and power is gained through conquest.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Drakmar", detail: "Drakmar, a land of dragons and warriors, where battle is constant and only the most powerful survive.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Tarvok", detail: "Tarvok, a realm of savage warriors, where only the fiercest and most cunning emerge victorious.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Kendoth", detail: "Kendoth, a place where the clash of steel defines every day, and warriors are trained from birth to never yield.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Arundar", detail: "Arundar, a continent shaped by blood and war, where only the strongest warriors are remembered.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Fyranor", detail: "Fyranor, a land scorched by the heat of battle, where warriors fight not just for survival, but for legacy.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Grothon", detail: "Grothon, a realm where strength defines every aspect of life, and only the brave dare face the harsh trials of combat.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Krothar", detail: "Krothar, a land where the greatest warriors challenge fate itself, and where only the mightiest stand tall.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Helmor", detail: "Helmor, a continent where bloodshed and glory are inseparable, and the mightiest warriors rule the land.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Valtor", detail: "Valtor, a realm where warriors' strength is tested in constant battle, and power is the only law that matters.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Kaernar", detail: "Kaernar, a place where the strongest rule and the weak are left to fade into the shadows.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Relgar", detail: "Relgar, a realm where power is gained through conquest, and where only the fiercest warriors are respected.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Beroth", detail: "Beroth, a kingdom of battle-hardened warriors, where the strongest fight for dominance and glory.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Irgon", detail: "Irgon, a land where the sound of clashing swords echoes through the hills, and the fiercest warriors rise to power.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Tarkon", detail: "Tarkon, a continent where strength and battle prowess are the only things that matter, and glory is earned in the field of war.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Vorok", detail: "Vorok, a land where battle is the only truth, and the greatest warriors carve their names into the annals of history.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Sharnak", detail: "Sharnak, a kingdom where only the most skilled warriors survive, and the rest are lost to the endless cycle of war.", status: false, gender: "Realistic", type: "Warrior Clan" },
  { name: "Drakalis", detail: "Drakalis, a realm steeped in ancient power, where dragons once soared through the skies and magic still lingers in the air.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Caeloria", detail: "Caeloria, a land where the winds carry whispers of long-forgotten gods, and ancient cities rise from the dust of time.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Valthor", detail: "Valthor, a realm where the echoes of a once-great civilization can still be heard through the ruins and towering monuments.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Zandhar", detail: "Zandhar, a land shrouded in mystery, where powerful sorcery once shaped the world, leaving behind magical scars in the land.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Elaros", detail: "Elaros, a forgotten kingdom where the sun never fully sets, and the skies are illuminated by the last vestiges of ancient magic.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Verithan", detail: "Verithan, a continent where the mountains pulse with arcane energy, and the ruins of old empires whisper forgotten secrets.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Kaldar", detail: "Kaldar, a land of great power and ancient bloodlines, where the very earth hums with the remnants of magical wars.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Lythar", detail: "Lythar, a realm where the trees grow taller than mountains, and the rivers flow with ancient magic that has not been seen for millennia.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Arkonis", detail: "Arkonis, a continent where the ruins of ancient fortresses guard secrets lost to time, and the wind carries the forgotten names of old kings.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Naldor", detail: "Naldor, a land where time itself seems to stand still, and the remnants of a powerful empire can be found in the corners of the earth.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Raelith", detail: "Raelith, a forgotten continent where the skies are forever clouded by the remains of a cataclysmic event that shattered an ancient civilization.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Vaelron", detail: "Vaelron, a land where the ruins of ancient cities rest beneath the shadow of great mountains, and magic flows like a forgotten river.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Kiranth", detail: "Kiranth, a realm once home to the greatest minds of magic, now a haunted place where only the bravest venture in search of forgotten knowledge.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Thalora", detail: "Thalora, a realm where ancient spirits dwell in the forest and the bones of old gods rest beneath the earth, waiting for their time to rise again.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Zuranth", detail: "Zuranth, a land cursed by ancient sorcery, where the land itself cries out with the pain of a forgotten battle that altered the world forever.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Elyssar", detail: "Elyssar, a mystical place where the stars themselves hold secrets to the ancient power that once ruled the land.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Ilyssan", detail: "Ilyssan, a continent filled with towering ancient structures and artifacts from a time when the world was shaped by unimaginable power.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Zhanar", detail: "Zhanar, a land where the boundaries between worlds blur, and the ancient power that once shaped reality still lingers, waiting to be unlocked.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Terrath", detail: "Terrath, a forgotten place where the echoes of ancient creatures reverberate through the mountains and the trees whisper the stories of an old age.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Elvaron", detail: "Elvaron, a land of lost civilizations, where the ruins of a once-powerful empire now stand silent, waiting for those who would dare to discover its secrets.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Malthor", detail: "Malthor, a place where the winds carry the whispers of ancient gods, and magic flows through the earth like an untamed river.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Kryphos", detail: "Kryphos, a realm where time itself was altered by an ancient force, and the land is forever marked by the remnants of old gods and forgotten sorcery.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Orlanth", detail: "Orlanth, a place where the old gods once walked the earth, and their influence still lingers in the air and in the hearts of those who remain.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Valmor", detail: "Valmor, a continent where the last vestiges of an ancient empire still stand, waiting for a new ruler to rise and claim their lost power.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Velthor", detail: "Velthor, a place where ancient forces of magic still fight for control over the land, and only the strong can survive the shifting tides of power.", status: false, gender: "Fantasy", type: "Ancient Clan" },
  { name: "Solarae", detail: "Solarae, a land bathed in ethereal light, where the veils between the worlds are thin and the winds carry whispers from ancient realms.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Galadore", detail: "Galadore, a mysterious continent where hidden forces shape the land, and only the most enlightened can comprehend the secrets that lie beneath.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Liraeth", detail: "Liraeth, a place of dreamlike beauty where the forest pulses with ancient magic, and the skies are painted with the colors of long-forgotten stars.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Veneris", detail: "Veneris, a continent where time flows differently, and the land is alive with the wisdom of the ancients, shrouded in mists of forgotten knowledge.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Alathar", detail: "Alathar, a realm of great power where the earth hums with ancient energies, and the air crackles with the promise of untold revelations.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Myrithor", detail: "Myrithor, a place where the oceans sing to the land, and the skies reflect the deep secrets of an ancient, magical world.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Selwinor", detail: "Selwinor, a land of mystic winds and shimmering lakes, where the forces of nature are balanced by unseen forces that govern the very soul of the world.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Elyndor", detail: "Elyndor, a land of shifting magic, where the stars illuminate the path to forgotten realms and powerful entities watch over the world with ancient eyes.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Elarion", detail: "Elarion, a realm where the land and sky are alive with ancient powers, and the spirits of long-gone rulers still guide the world’s destiny.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Eldaroth", detail: "Eldaroth, a place of wonder and peril, where the landscape is shaped by forces both light and dark, and ancient prophecies guide those who seek the truth.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Naltheron", detail: "Naltheron, a land where hidden wisdom flows through the earth like a river, and the air hums with the power of knowledge lost to time.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Aelthor", detail: "Aelthor, a mystical continent where great temples rise from the earth, and the secrets of the ancient magi are hidden beneath layers of history.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Therondar", detail: "Therondar, a place where the forces of nature bend and twist under the influence of ancient, unseen beings who rule from the shadows.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Talamir", detail: "Talamir, a realm where magical storms dance across the skies, and the land is a testament to the power of forgotten sorceries.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Veirian", detail: "Veirian, a land of shifting magic, where ancient forces collide in a constant battle, and the air vibrates with unseen power.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Elvendar", detail: "Elvendar, a mystical place where the rivers run with liquid light, and the stars shine brighter than anywhere else in the known world.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Thalira", detail: "Thalira, a land where forgotten spirits roam free, and the knowledge of the ancients lies just beneath the surface, waiting to be unearthed.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Islian", detail: "Islian, a place where the moonlight is stronger than the sun, and the world is woven together by threads of magic older than time itself.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Tyralth", detail: "Tyralth, a realm where the spirits of the land come alive, and the ancient forces that shaped the world continue to influence the lives of its inhabitants.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Zephora", detail: "Zephora, a land where the wind carries the voices of the long-gone, and the earth is dotted with forgotten cities that hold the power of old.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Valeraeth", detail: "Valeraeth, a realm where the boundaries between reality and dreams blur, and the land shifts in response to the will of powerful forces.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Arelian", detail: "Arelian, a land of whispers and shadows, where the air is thick with magic and ancient powers that rule the world from the unseen.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Indros", detail: "Indros, a forgotten realm where the ancient sky and earth meet in a delicate balance, and the knowledge of the old world still waits to be uncovered.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Drakiel", detail: "Drakiel, a mystical place where dragons once roamed freely, and their ancient powers still linger in the air, waiting to be unleashed.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Ilvrion", detail: "Ilvrion, a land where ancient magic flows like a river, and the mountains hold the secrets to unlocking the world’s deepest mysteries.", status: false, gender: "Fantasy", type: "Mystic Clan" },
  { name: "Kormath", detail: "Kormath, a rugged land of iron and stone, where the mountains echo with the sounds of battle and the rivers run red with the blood of warriors.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Verathor", detail: "Verathor, a place of honor and strength, where warriors are forged in the fires of conflict and only the strongest survive.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Grivor", detail: "Grivor, a land where honor is earned through battle and the earth itself seems to tremble in response to the warriors’ might.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Tharok", detail: "Tharok, a continent where the sky burns with the fury of warriors, and the land is shaped by the power of countless battles.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Durnoth", detail: "Durnoth, a land of fierce warriors and untold power, where every battle brings them one step closer to eternal glory.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Kaldros", detail: "Kaldros, a realm where war is not just a way of life, but a sacred duty, and the blood of its warriors stains the very earth they walk upon.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Helgorn", detail: "Helgorn, a land where strength and valor define one's place in the world, and the mountains themselves are carved by the clash of weapons.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Torlanth", detail: "Torlanth, a place where warriors sharpen their skills in preparation for the day they meet their ultimate foe.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Azgorath", detail: "Azgorath, a land of eternal conflict, where the only law is the will of the strongest, and the cry of war is never far from the horizon.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Thalron", detail: "Thalron, a continent where warriors clash in endless skirmishes and the spirit of battle burns as fiercely as the sun.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Varmath", detail: "Varmath, a realm of savage warriors and untamed lands, where only the fiercest rise to power and the weak are left behind.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Grolak", detail: "Grolak, a place where the soil is rich with the memories of battle, and the roar of warriors echoes across the land.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Durnar", detail: "Durnar, a land where every warrior is a legend in the making, and only those who have proven their strength are allowed to rule.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Tarokh", detail: "Tarokh, a continent of warriors and kings, where the strongest lead and the weak are left to fend for themselves.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Varnoth", detail: "Varnoth, a realm steeped in the art of war, where each battle brings warriors closer to their destiny, and the land itself is shaped by the will of its fighters.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Drakgor", detail: "Drakgor, a land where dragons and warriors alike fight for dominance, and the fierce winds carry the scent of blood and fire.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Vethor", detail: "Vethor, a continent where battle is a way of life, and every warrior's strength is tested in the fires of war.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Arakoth", detail: "Arakoth, a place where warriors rise and fall by their sword, and the might of battle determines the fate of the land.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Felgor", detail: "Felgor, a land where the warriors’ strength is tested by both the land and the fiercest beasts, and only the bravest survive.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Naroth", detail: "Naroth, a continent of savage beauty, where only the strong can call the land their own and claim the spoils of victory.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Galdor", detail: "Galdor, a land where warriors fight for honor and glory, and the very ground trembles beneath their feet as they battle for supremacy.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Dorath", detail: "Dorath, a continent that has been shaped by countless battles, where every warrior's fate is bound to the might of their sword.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Lorkan", detail: "Lorkan, a land where strength and survival are the only measures of worth, and warriors fight for their place in a brutal world.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Krethar", detail: "Krethar, a realm where only the fiercest warriors can claim victory, and the winds carry the echoes of past battles.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Zorthan", detail: "Zorthan, a place where battles are fought for both survival and glory, and only the strongest warriors rise to claim their legacy.", status: false, gender: "Fantasy", type: "Warrior Clan" },
  { name: "Eldrath", detail: "Eldrath, an ancient land where the winds whisper of forgotten deities and the mountains hold the secrets of time.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Drakarith", detail: "Drakarith, a realm where ancient dragons once soared and their legacy still shapes the land.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Virelor", detail: "Virelor, a forgotten continent where the trees are said to be alive with the power of gods and myths.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Mitharoth", detail: "Mitharoth, a land of legendary creatures and forgotten magic, where the rivers run with the power of the ancients.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Azrondar", detail: "Azrondar, a continent shaped by the ancient forces of magic and the eternal conflict between gods and mortals.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Velathos", detail: "Velathos, a mystical land where the boundaries between the living and the dead blur, and ancient spirits roam the earth.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Keronith", detail: "Keronith, a forgotten continent where the mountains touch the heavens and the seas are filled with secrets of old.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Tharondar", detail: "Tharondar, a place where mythical beasts roam and the winds carry the ancient stories of gods and kings.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Aldronis", detail: "Aldronis, a land where the ancient ruins hold the keys to unlocking forgotten power and the earth echoes with ancient magic.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Morathar", detail: "Morathar, a continent where the sun never sets, and the remnants of an ancient civilization still whisper their secrets.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Selvion", detail: "Selvion, a land bathed in eternal twilight, where the legends of the ancients are written in the stars.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Khelaros", detail: "Khelaros, a forgotten realm where the ancient powers once ruled, and the echoes of their reign still haunt the land.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Lorenth", detail: "Lorenth, a continent veiled in mystery, where only those with the blood of the ancients may uncover its secrets.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Zarynth", detail: "Zarynth, a realm of boundless magic and forgotten kings, where the very land pulses with the power of the ancients.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Celthar", detail: "Celthar, a place where the stars shine brighter and the secrets of the universe are hidden beneath ancient ruins.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Orlirion", detail: "Orlirion, a land that is both ancient and timeless, where the past and future collide in a clash of mystical powers.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Ralythar", detail: "Ralythar, a mythical land where time itself is said to move differently, and ancient prophecies shape the destiny of all who enter.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Thalirith", detail: "Thalirith, a place where the oceans carry the tales of old, and the ruins of long-lost civilizations lie beneath its waves.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Kaelith", detail: "Kaelith, a continent surrounded by an unyielding fog, where only the bravest dare uncover its ancient mysteries.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Imrisar", detail: "Imrisar, a realm where gods walked among mortals and their footprints remain imprinted in the very soil.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Adanor", detail: "Adanor, a mythical land where the forces of nature once battled for control, and the scars of their conflict remain.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Herodias", detail: "Herodias, a forgotten land where time itself has frozen, and the ancient empires are trapped in eternal slumber.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Lanoroth", detail: "Lanoroth, a mystical realm where the gods once ruled, and their legacy still lingers in the form of powerful relics.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Rhaelaeth", detail: "Rhaelaeth, a land where the heavens and earth are said to have once met, leaving behind a legacy of magical wonders.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Lurathar", detail: "Lurathar, a mythical land where ancient magic flows through the veins of the earth, and the forgotten gods still whisper their commands.", status: false, gender: "Mythical", type: "Ancient Clan" },
  { name: "Zorathiel", detail: "Zorathiel, a land where the ancient energies of the cosmos weave together in a tapestry of hidden power and timeless secrets.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Thalorim", detail: "Thalorim, a mystical realm where the very air is infused with arcane power, and its landscapes reflect the shifting tides of magic.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Vepharion", detail: "Vepharion, a continent where the balance of nature and magic is maintained by the hidden forces of the ancient mystics.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Elarindor", detail: "Elarindor, a land of endless twilight where mystical beings weave their spells and the land itself seems alive with ancient wisdom.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Volarion", detail: "Volarion, a forgotten place where ancient ruins hold secrets of the old world and the winds carry whispers of forgotten prophecies.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Nefaroth", detail: "Nefaroth, a mystical land shrouded in mystery, where the ancient mystics once lived in harmony with the land and its hidden powers.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Alarion", detail: "Alarion, a realm of endless wonders, where ancient magics have woven the land into a delicate web of mysticism and secrecy.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Tharalon", detail: "Tharalon, a continent where the mystics once ruled, their powers leaving behind a legacy that still shapes the very fabric of the land.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Myrathal", detail: "Myrathal, a mystical kingdom where time bends and ancient knowledge pulses beneath the earth like an untapped well of power.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Solmorith", detail: "Solmorith, a land bathed in ethereal light where the mysteries of the past are guarded by forgotten forces and magical creatures.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Vaeluthar", detail: "Vaeluthar, a realm where the boundaries between the material world and the mystical realms blur, and the secrets of the cosmos linger in every shadow.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Ysolith", detail: "Ysolith, a place where ancient energies swirl in the wind, and the land pulses with the rhythm of the forgotten gods.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Elyrion", detail: "Elyrion, a land untouched by time, where the old ways are kept alive by the mystical inhabitants who speak only in ancient tongues.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Naelith", detail: "Naelith, a mystical continent where the moonlight reflects the ancient knowledge held within its deep forests and vast oceans.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Falthor", detail: "Falthor, a land veiled in mist and mystery, where the arcane forces of the past still shape the lives of those who dare to venture.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Venimor", detail: "Venimor, a place where the ancient magic of the mystics is said to flow freely through the land, bringing prosperity to its inhabitants.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Akrihal", detail: "Akrihal, a land where the mystic energies are so strong that they twist reality itself, creating an ever-changing landscape of magic and wonder.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Laerion", detail: "Laerion, a forgotten continent where the ancients once practiced their magical arts, and their legacy still echoes in the winds and waves.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Othirith", detail: "Othirith, a place where the stars shine brighter, and the secrets of the universe are said to be written in the constellations.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Zarvoth", detail: "Zarvoth, a realm where time itself is said to flow in strange ways, and the ancient mystics hold the keys to the fate of the world.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Rhosylis", detail: "Rhosylis, a land where the winds carry the whispers of lost civilizations and the trees stand as silent witnesses to the past.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Iskandor", detail: "Iskandor, a land steeped in mystery where the magics of the ancients still shape the future of the realm, hidden beneath its rolling hills.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Galithor", detail: "Galithor, a place where the ancient magics of the earth pulse with life, and the land is steeped in both legend and truth.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Telirion", detail: "Telirion, a forgotten kingdom where the arcane forces are intertwined with the land, granting it both beauty and danger in equal measure.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Solinar", detail: "Solinar, a mystical land bathed in the light of the stars, where the ancient magic of the mystics lives on in every stone and river.", status: false, gender: "Mythical", type: "Mystic Clan" },
  { name: "Therogoth", detail: "Therogoth, a land forged in the heat of ancient wars, where mighty warriors train beneath towering peaks.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Akrathar", detail: "Akrathar, a realm where the warrior spirit is engraved into the very earth, with every valley and mountain holding the legacy of battles past.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Valkorath", detail: "Valkorath, a continent where warriors live by the sword and honor, with vast battlefields stretching beneath the endless sky.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Kaldunor", detail: "Kaldunor, a land steeped in ancient conflict, where the clang of swords and shields is a constant echo in the air.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Durngor", detail: "Durngor, a place where only the strong survive, and warriors train their bodies and minds to face impossible odds.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Galdorath", detail: "Galdorath, a land of untamed wilds and fierce warriors, where the call of battle is never far from the hearts of its people.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Esharoth", detail: "Esharoth, a place where legends of valor and strength are born, and the scars of past wars are etched in the stone of the land.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Zorathok", detail: "Zorathok, a realm where every warrior’s path is tested by the harsh landscapes and the endless war drums that echo in the distance.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Varkol", detail: "Varkol, a land of endless struggle, where battle is a way of life and strength is the greatest currency.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Borimath", detail: "Borimath, a continent where warlords clash for control of its rugged lands, and only the most skilled survive to lead.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Kaltharok", detail: "Kaltharok, a realm ruled by the strongest of warriors, where combat prowess is valued above all else.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Drenkor", detail: "Drenkor, a place where the blood of past battles stains the ground, and warriors rise to challenge their destiny.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Thorlanth", detail: "Thorlanth, a land of thunderous storms and mighty warriors, where the bravest fight to prove their worth in the battlefield.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Kalaros", detail: "Kalaros, a continent of eternal warfare, where the clash of swords and the roar of battle never cease.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Renothar", detail: "Renothar, a harsh land where only the fiercest warriors can carve out their place, their blades forged in the fires of relentless conflict.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Vexlor", detail: "Vexlor, a place where the warriors’ spirits are tested, and those who fall in battle are honored as legends.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Rethanok", detail: "Rethanok, a continent where the echo of every battle resounds through the mountains, and the land is carved by the warriors who inhabit it.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Gathos", detail: "Gathos, a land where warriors rise and fall, their fates determined by their strength and skill in combat.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Kormak", detail: "Kormak, a place where the warrior’s path is sacred, and only those who embrace the art of war can hope to survive.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Vurnoth", detail: "Vurnoth, a continent where the strongest of warriors shape the land, their might evident in every valley and mountain.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Argaron", detail: "Argaron, a place where bloodlines of great warriors are forged in the heat of battle, and power is won with the sword.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Halvador", detail: "Halvador, a land where the bravest warriors are born, and every clan vies for control of the fierce and unforgiving land.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Mirkar", detail: "Mirkar, a continent where honor and strength are the only measures of success, and only the strongest hold sway over its lands.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Zorathok", detail: "Zorathok, a war-torn land where only the strongest survive, its name synonymous with battle and the harshest of warriors.", status: false, gender: "Mythical", type: "Warrior Clan" },
  { name: "Berathor", detail: "Berathor, a realm where warriors are born from the very earth itself, their strength channeled into every blow they strike.", status: false, gender: "Mythical", type: "Warrior Clan" }
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
      name: "Russian Name Generator",
      pic: "/Russian.webp",
      link: "https://www.nameideagenerator.com/russian-name-generator",
  },
  {
      name: "Greek Name Generator",
      pic: "/greek.webp",
      link: "https://www.nameideagenerator.com/greek-name-generator",
  },
  {
      name: "Viking Name Generator",
      pic: "/vikings.jpg",
      link: "https://www.nameideagenerator.com/viking-name-generator",
  },
  {
      name: "French Name Generator",
      pic: "/french-name-generator.avif",
      link: "https://www.nameideagenerator.com/french-name-generator",
  },
  ];
  
  const ContinentNameGenerator = () => {
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
  
const bgImage = "/continent-name-generator.webp"
const context = "Continent Name Generator with Meaning "
const Q1 = "How are continent names generated?"
const A1 = "The generator combines language patterns, themes, and the selected continent type (Realistic, Fantasy, Mythical) to create unique names. You can also choose from different categories (e.g., Geographical, Cultural, Legendary) to fine-tune the results."

const Q2 = "Can I create names for both realistic and fantastical settings?"
const A2 = "Yes! The tool is designed to cater to both realistic and fantastical worlds. Whether you’re building an alternate Earth-like world or a magical realm, the generator will provide fitting names for your setting."

const Q3 = "Are the names generated instantly?"
const A3 = "Yes, the Continent Name Generator provides instant results. There’s no waiting, so you can quickly explore a variety of names and meanings that fit your world-building needs."

const Q4 = "Can I add cultural or thematic elements to the names?"
const A4 = "Absolutely! By selecting specific categories like Cultural, Geographical, or Legendary, you can ensure that the generated names align with the cultural or thematic elements of your world."

const Q5 = "Are the names provided meaningful?"
const A5 = "Yes! Each name comes with its own meaning or backstory, giving you more context for your world-building. This feature adds depth and authenticity, ensuring the names are not just random but relevant to your world’s story."
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
      <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Cultural and Historical Names</a>
    </li>
    <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 19l7-7-7-7"></path>
    </svg>
    <li className="flex items-center">
      <a href="/continent-name-generator" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Continent Name Generator</a>
    </li>
  </ol>
</nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Continent Name Generator With Meaning Tool
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Continent Type</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Realistic">Realistic</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mythical">Mythical</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Clan of Continent Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Ancient Clan">Ancient</option>
              <option value="Mystic Clan">Mystic</option>
              <option value="Warrior Clan">Warrior</option>
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
            What Is a Continent Name?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Continent names are the titles used to describe large land masses on a world map, whether real or imaginary. 
            These names often carry deep meanings tied to geography, culture, or history.
            In fantasy and fiction, continent names set the tone for the story and define the world’s personality. 
            A well-chosen name adds depth and helps readers connect with the setting.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            The Importance of Continent Names in World-Building
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Continent names do more than label vast landmasses; they shape the essence of your world and deeply influence the story. Here's why they matter:
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Setting the Tone: </b>
            The name sets the atmosphere for your world. A name like Eldarion hints at magic and fantasy, while Nordhaven evokes cold, rugged landscapes.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Establishing Scale: </b>
            Continent names provide a sense of grandeur and help anchor your audience within the world, making it feel expansive and real.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Revealing Culture and History: </b>
            The name can suggest historical events, cultural roots, or even the mythology of the land, enriching your world with layers of meaning.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Creating Emotional Connections: </b>
            Iconic continent names make the world memorable and establish a deeper connection with your audience. 
            Think of names like Middle-Earth or Westeros—they evoke strong emotions tied to their stories.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Enhancing Uniqueness: </b>
            A unique name sets your world apart, creating a distinctive identity that remains memorable.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Driving Imagination: </b>
            A compelling name sparks curiosity and inspires your audience to explore the mysteries and stories that lie within the land.
            </p>
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pt-[10px]">
            Types of Continent Names You Can Generate
            </h2>
            <hr />  
            <br />
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pt-[10px]">
            Realistic Continent Names
            </h3>
            <br />  
            <p className="text-left text-[#343a40]">
            Realistic names reflect the natural features or historical significance of a region. These names work well in alternate Earth-like settings.
            <br />
            Examples include names that feel grounded in geography or mimic real-world naming patterns. They suit creators looking for authenticity.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pt-[10px]">
            Fantasy Continent Names
            </h3>
            <br />  
            <p className="text-left text-[#343a40]">
            Fantasy names evoke magic, mystery, and wonder. These are perfect for high-fantasy settings and games.
            <br />
            Expect dramatic and otherworldly names that stir imagination. They inspire a sense of adventure in any story or game.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pt-[10px]">
            Mythical Continent Names
            </h3>
            <br />  
            <p className="text-left text-[#343a40]">
            Mythical names draw from legends, folklore, and ancient tales. They feel timeless and often carry symbolic meanings.
            <br />
            Use these names to create settings tied to gods, heroes, or long-forgotten civilizations. They fit epic sagas and mythical campaigns.
            </p>
            <h2 className="text-center text-[36px] font-medium text-[#343a40] py-[30px]">
            Why Use Our Continent Name Generator?
            </h2>
            <hr />  
            <br />
            <p className="text-left text-[#343a40]">
            Here’s why this tool stands out. It delivers personalized names tailored to your world-building needs. 
            Whether you need realistic, fantasy, or mythical options, it has you covered.
            You can also explore names with meaningful backstories. This helps in crafting unique and memorable worlds. The results are instant, so there’s no waiting.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Continent Name Generator
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Our Continent Name Generator is user-friendly and efficient, generating unique names in just a few clicks. Here’s how to get started:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose the Name <b>Type</b> (Realistic, Fantasy, Mythical)
              </h3>
              <p>
              Start by selecting the style that matches your world. Whether it’s grounded realism or imaginative fantasy, pick what suits your needs.
              Each type ensures you get names fitting your creative vision. This step sets the foundation for your results.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a <b>Clan</b> (Ancient, Mystic, Warrior)
              </h3>
              <p>
              Next, add a layer of depth by choosing a clan. Clans help define the identity of your continent.
              They bring a cultural or thematic edge to your names. This makes them more distinctive and relevant.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b>Generate</b> 
              </h3>
              <p>
              Click the generate button and watch as names appear instantly. Each name comes with its own meaning or story.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Explore the Name’s Meaning and History
              </h3>
              <p>
              Review the names and their meanings to find the perfect match. Each name tells a story, adding depth to your creation.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="continent-name-generators.jpeg"
              alt="Continent Name Generator With Meaning"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="earth-continents-.jpg"
              alt="Continent Name Generator With Meaning"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/desktop-wallpaper-world-map-1920x1080.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Continent Name Generator
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
          <b>Features of the Continent Name Generator</b>
          </h2>
          <p className="text-[#343a40]">
          Our Continent Name Generator is packed with features designed to help you create unique, meaningful names for your world. Here’s what you can expect:
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold">
            Customizable Name Types
            </h3>
            <p className="text-[#343a40]">
            Choose from three distinct styles—Realistic, Fantasy, or Mythical—to generate continent names that perfectly fit your world’s tone and setting.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            Clan Selection for Added Depth
            </h3>
            <p className="text-[#343a40]">
            Enhance your continent names by selecting a Clan type (e.g., Ancient, Mystic, Warrior). 
            This adds cultural or thematic elements, making the names more personalized and fitting for your world.          
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            Instant Results with Meaning
            </h3>
            <p className="text-[#343a40]">
            Generate names instantly, each accompanied by a backstory or meaning. 
            This feature allows you to dive straight into your world-building with names that feel alive and authentic.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            Meaningful and Memorable Names
            </h3>
            <p className="text-[#343a40]">
            Every generated name comes with a story or cultural significance, making each one meaningful and connected to the world you are building.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            Creative Flexibility
            </h3>
            <p className="text-[#343a40]">
            Whether you’re crafting a realistic, historical world or an epic fantasy realm, the generator offers versatile options to suit any style of world-building.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            User-Friendly Interface
            </h3>
            <p className="text-[#343a40]">
            With a clean and intuitive design, the tool is easy to use, making it accessible for writers, game creators, and world-builders of all skill levels.
            </p>
          </div>
          <h2 className="sm:text-[32px] py-[20px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Continent Naming Conventions and Inspiration</b>
          </h2>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            Real-World Continent Naming Conventions
            </h3>
            <p className="text-[#343a40]">
            Real-world continents often get names based on historical events or geographic features. They may also reflect the culture or language of the people naming them.
            This approach ensures the names feel familiar and authentic. It works best for alternate history or modern settings.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            Fantasy and Mythical Naming Inspiration
            </h3>
            <p className="text-[#343a40]">
            Fantasy and mythical names come from imagination and folklore. They rely on unique word structures or themes to sound otherworldly.
            Look to myths, legends, and ancient languages for ideas. These sources inspire names full of mystery and intrigue.
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
            Continent Types and Clan Options
            </h2>
            <p className="text-[#343a40]">
            Our Continent Name Generator offers a variety of continent types and clan options to help you tailor your world-building needs. 
            Choose from these categories to create the perfect names for your world:
            </p>
           
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Continent Types
            </h3>
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
           <b>Realistic: </b>Names that reflect the natural features or historical significance of a region. 
           These names are perfect for alternate Earth-like settings or grounded worlds that feel authentic and familiar. Examples: Aurania, Nordhaven, Westoria.
            </p> 
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Fantasy: </b>These names are inspired by magic, mystery, and otherworldly elements. 
            Ideal for high-fantasy settings, they stir the imagination and evoke a sense of adventure. Examples: Eldarion, Zephyra, Draemora.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Mythical: </b>Rooted in legends, folklore, and ancient tales, mythical names often carry symbolic meanings. 
            These names work well for epic sagas or worlds tied to gods, heroes, or lost civilizations. Examples: Erythraea, Nivlora, Solarnis.
            </p>
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            Clan Options
            </h3>
            <br />  
            <hr />
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Ancient: </b>Names inspired by ancient civilizations or forgotten empires. 
            These names suggest a deep, historical significance and often carry a sense of wisdom and mystery.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Mystic: </b>Perfect for magical or otherworldly lands. These names are imbued with mystery and a sense of wonder, ideal for mystical or enchanted settings.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <b>Warrior: </b>Strong, bold names that evoke a sense of power and might. These names are suited for lands with a warrior culture or a history of conflict.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Continent Names in History and Fiction
          </h2><br />
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Legendary Real-Life Continent Names
              </h3>
              <p>
              <ul>
              <li><b>- Legendary Real-Life Continent Names </b>(A vast, frozen land at the southernmost part of Earth, symbolizing mystery and exploration)</li><br />
              <li><b>- Eurasia </b> (The combined landmass of Europe and Asia, representing the vast interconnectedness of continents)</li><br />
              <li><b>- Africa </b> (A continent rich in natural resources and cultural heritage, playing a central role in world history)</li><br />
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Iconic Fictional Continent Names
              </h3>
              <p>
              <ul>
              <li><b>- Middle-Earth </b>(The legendary land from The Lord of the Rings, filled with diverse cultures and mythological beings)</li><br />
              <li><b>- Westeros </b> (The central continent of Game of Thrones, known for its political intrigue and war-torn landscapes)</li><br />
              <li><b>- Pandora </b> (The lush, exotic world from Avatar, symbolizing harmony with nature and otherworldly beauty)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="world-map-world-map.jpg"
              alt="Continent Name Generator With Meaning"
              className="w-[360px] my-[20px] h-[460px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <br />
          <hr />
          <br /><br />
          <h2 className="sm:text-[32px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Unique Features of Our Continent Name Generator</b>
          </h2>
          <p className="text-[#343a40]">
          Our Continent Name Generator is designed with a range of powerful features to make naming your world-building projects both easy and inspiring. Here’s what sets it apart:
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Personalized Results
            </h3>
            <p>
            You can customize your experience by selecting the continent type (Realistic, Fantasy, Mythical) 
            and clan options (Ancient, Mystic, Warrior). This ensures the generated names align perfectly with your world’s theme and needs.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Meaningful Backstories
            </h3>
            <p>
            Each name generated comes with a backstory or cultural significance. 
            This adds depth and authenticity to your world, helping you create more immersive and meaningful settings.         
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Instant Name Generation
            </h3>
            <p>
            The tool works instantly, providing you with creative and unique names without any delays. 
            This makes it perfect for writers, game developers, and world-builders who need quick solutions.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Flexible and Creative Solutions
            </h3>
            <p>
            Whether you’re building a grounded, historical world or a fantastical realm, our generator offers versatile, fitting names that enhance your world-building process.
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

export default ContinentNameGenerator;

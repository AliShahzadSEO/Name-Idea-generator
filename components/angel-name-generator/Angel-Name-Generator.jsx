"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
  { name: "Gabriel", detail: "Archangel known as the messenger of God.", status: false, gender: "male", type: "archangel" },
  { name: "Michael", detail: "Archangel and leader of the heavenly armies.", status: false, gender: "male", type: "archangel" },
  { name: "Raphael", detail: "Archangel associated with healing.", status: false, gender: "male", type: "archangel" },
  { name: "Uriel", detail: "Archangel of wisdom and enlightenment.", status: false, gender: "male", type: "archangel" },
  { name: "Jophiel", detail: "Archangel associated with wisdom.", status: false, gender: "male", type: "archangel" },
  { name: "Zadkiel", detail: "Archangel associated with mercy.", status: false, gender: "male", type: "archangel" },
  { name: "Selaphiel", detail: "Archangel associated with prayer.", status: false, gender: "male", type: "archangel" },
  { name: "Raguel", detail: "Archangel associated with harmony.", status: false, gender: "male", type: "archangel" },
  { name: "Remiel", detail: "Archangel associated with divine visions.", status: false, gender: "male", type: "archangel" },
  { name: "Cassiel", detail: "Archangel associated with solitude.", status: false, gender: "male", type: "archangel" },
  { name: "Barachiel", detail: "Archangel associated with blessings.", status: false, gender: "male", type: "archangel" },
  { name: "Haniel", detail: "Archangel associated with joy.", status: false, gender: "male", type: "archangel" },
  { name: "Samael", detail: "Archangel associated with divine justice.", status: false, gender: "male", type: "archangel" },
  { name: "Azrael", detail: "Archangel associated with transitions.", status: false, gender: "male", type: "archangel" },
  { name: "Jeremiel", detail: "Archangel associated with visions.", status: false, gender: "male", type: "archangel" },
  { name: "Jehudiel", detail: "Archangel associated with work and reward.", status: false, gender: "male", type: "archangel" },
  { name: "Phanuel", detail: "Archangel associated with repentance.", status: false, gender: "male", type: "archangel" },
  { name: "Raziel", detail: "Archangel associated with mysteries.", status: false, gender: "male", type: "archangel" },
  { name: "Metatron", detail: "Archangel associated with divine records.", status: false, gender: "male", type: "archangel" },
  { name: "Ramiel", detail: "Archangel associated with thunder and revelation.", status: false, gender: "male", type: "archangel" },
  { name: "Sariel", detail: "Archangel associated with guidance and purity.", status: false, gender: "male", type: "archangel" },
  { name: "Ithuriel", detail: "Archangel known for discovering evil.", status: false, gender: "male", type: "archangel" },
  { name: "Ariel", detail: "Archangel associated with nature and elements.", status: false, gender: "male", type: "archangel" },
  { name: "Camael", detail: "Archangel associated with strength.", status: false, gender: "male", type: "archangel" },
  { name: "Nathanael", detail: "Archangel associated with divine gifts.", status: false, gender: "male", type: "archangel" },
  { name: "Aniel", detail: "Archangel associated with virtue and courage.", status: false, gender: "male", type: "archangel" },
  { name: "Sandalphon", detail: "Archangel associated with music and prayers.", status: false, gender: "male", type: "archangel" },
  { name: "Kamael", detail: "Archangel associated with divine war.", status: false, gender: "male", type: "archangel" },
  { name: "Zaphkiel", detail: "Archangel associated with contemplation.", status: false, gender: "male", type: "archangel" },
  { name: "Oriphiel", detail: "Archangel associated with divine judgment.", status: false, gender: "male", type: "archangel" },

  { name: "Gabrielle", detail: "Female archangel known as the divine messenger.", status: false, gender: "female", type: "archangel" },
  { name: "Michaela", detail: "Female archangel and warrior of light.", status: false, gender: "female", type: "archangel" },
  { name: "Raphaela", detail: "Female archangel associated with healing and renewal.", status: false, gender: "female", type: "archangel" },
  { name: "Uriela", detail: "Female archangel of wisdom and clarity.", status: false, gender: "female", type: "archangel" },
  { name: "Jophiela", detail: "Female archangel of beauty and insight.", status: false, gender: "female", type: "archangel" },
  { name: "Zadkiela", detail: "Female archangel of compassion and mercy.", status: false, gender: "female", type: "archangel" },
  { name: "Selaphiela", detail: "Female archangel of sacred prayer.", status: false, gender: "female", type: "archangel" },
  { name: "Raguela", detail: "Female archangel of peace and harmony.", status: false, gender: "female", type: "archangel" },
  { name: "Remiela", detail: "Female archangel of divine visions.", status: false, gender: "female", type: "archangel" },
  { name: "Cassiela", detail: "Female archangel of patience and reflection.", status: false, gender: "female", type: "archangel" },
  { name: "Barachiela", detail: "Female archangel of blessings and hope.", status: false, gender: "female", type: "archangel" },
  { name: "Haniela", detail: "Female archangel of joy and grace.", status: false, gender: "female", type: "archangel" },
  { name: "Samaela", detail: "Female archangel of divine justice.", status: false, gender: "female", type: "archangel" },
  { name: "Azraela", detail: "Female archangel of spiritual transition.", status: false, gender: "female", type: "archangel" },
  { name: "Jeremiela", detail: "Female archangel of divine dreams.", status: false, gender: "female", type: "archangel" },
  { name: "Phanuela", detail: "Female archangel of repentance and forgiveness.", status: false, gender: "female", type: "archangel" },
  { name: "Raziela", detail: "Female archangel of hidden knowledge.", status: false, gender: "female", type: "archangel" },
  { name: "Metatrona", detail: "Female archangel and divine scribe.", status: false, gender: "female", type: "archangel" },
  { name: "Ramiela", detail: "Female archangel of thunder and glory.", status: false, gender: "female", type: "archangel" },
  { name: "Sariela", detail: "Female archangel of purity and grace.", status: false, gender: "female", type: "archangel" },
  { name: "Ithuriela", detail: "Female archangel of discernment.", status: false, gender: "female", type: "archangel" },
  { name: "Ariela", detail: "Female archangel of nature’s power.", status: false, gender: "female", type: "archangel" },
  { name: "Camaela", detail: "Female archangel of divine strength.", status: false, gender: "female", type: "archangel" },
  { name: "Nathanaela", detail: "Female archangel of gifted flame.", status: false, gender: "female", type: "archangel" },
  { name: "Aniela", detail: "Female archangel of courage and virtue.", status: false, gender: "female", type: "archangel" },
  { name: "Sandalphona", detail: "Female archangel of sacred harmony.", status: false, gender: "female", type: "archangel" },
  { name: "Kamaela", detail: "Female archangel of divine warfare.", status: false, gender: "female", type: "archangel" },
  { name: "Zaphkiela", detail: "Female archangel of heavenly contemplation.", status: false, gender: "female", type: "archangel" },
  { name: "Oriphiela", detail: "Female archangel of celestial order.", status: false, gender: "female", type: "archangel" },
  { name: "Azazel", detail: "Fallen angel associated with pride.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Lucifer", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Samael", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Abaddon", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Asmodeus", detail: "Fallen angel associated with temptation.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Belial", detail: "Fallen angel associated with rebellion.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Leviathan", detail: "Fallen angel associated with destruction.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Beelzebub", detail: "Fallen angel associated with pride.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Mammon", detail: "Fallen angel associated with temptation.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Amon", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Armaros", detail: "Fallen angel associated with forbidden knowledge.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Penemue", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Baraqel", detail: "Fallen angel associated with pride.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Kokabiel", detail: "Fallen angel associated with destruction.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Shamsiel", detail: "Fallen angel associated with temptation.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Gadreel", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Tamiel", detail: "Fallen angel associated with pride.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Sariel", detail: "Fallen angel associated with rebellion.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Dumah", detail: "Fallen angel associated with destruction.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Agares", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Vassago", detail: "Fallen angel associated with pride.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Marbas", detail: "Fallen angel associated with rebellion.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Andras", detail: "Fallen angel associated with destruction.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Phenex", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Furcas", detail: "Fallen angel associated with pride.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Valefor", detail: "Fallen angel associated with rebellion.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Foras", detail: "Fallen angel associated with temptation.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Vine", detail: "Fallen angel associated with forbidden knowledge.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Orobas", detail: "Fallen angel associated with deception.", status: false, gender: "male", type: "fallen_angel" },
  { name: "Zepar", detail: "Fallen angel associated with manipulation.", status: false, gender: "male", type: "fallen_angel" },

  { name: "Azazela", detail: "Fallen angeless associated with chaos.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Lucifira", detail: "Fallen angeless associated with vanity.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Samaetha", detail: "Fallen angeless associated with false prophecy.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Abaddina", detail: "Fallen angeless associated with destruction.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Asmodeth", detail: "Fallen angeless associated with seduction.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Beliala", detail: "Fallen angeless associated with rebellion.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Levia", detail: "Fallen angeless associated with envy.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Beelzabeth", detail: "Fallen angeless associated with gluttony.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Mammina", detail: "Fallen angeless associated with greed.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Amona", detail: "Fallen angeless associated with vengeance.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Armariel", detail: "Fallen angeless associated with forbidden arts.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Penemira", detail: "Fallen angeless associated with lies.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Baraquela", detail: "Fallen angeless associated with confusion.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Kokabina", detail: "Fallen angeless associated with astrology.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Shamsiara", detail: "Fallen angeless associated with misguidance.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Gadrielle", detail: "Fallen angeless associated with sorrow.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Tamiala", detail: "Fallen angeless associated with illusion.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Saritha", detail: "Fallen angeless associated with torment.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Dumaela", detail: "Fallen angeless associated with silence and death.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Agaretha", detail: "Fallen angeless associated with territory and division.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Vassaria", detail: "Fallen angeless associated with distortion.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Marbela", detail: "Fallen angeless associated with cunning.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Andrella", detail: "Fallen angeless associated with hate.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Pheona", detail: "Fallen angeless associated with seductive charm.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Furcira", detail: "Fallen angeless associated with confusion.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Valefira", detail: "Fallen angeless associated with traps and theft.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Forana", detail: "Fallen angeless associated with obscure knowledge.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Vinetta", detail: "Fallen angeless associated with betrayal.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Orobella", detail: "Fallen angeless associated with false visions.", status: false, gender: "female", type: "fallen_angel" },
  { name: "Zepara", detail: "Fallen angeless associated with lust and distraction.", status: false, gender: "female", type: "fallen_angel" },
    { name: "Arakiel", detail: "Watcher angel who observed and taught signs.", status: false, gender: "male", type: "watcher" },
  { name: "Armaros", detail: "Watcher angel who observed and taught stars.", status: false, gender: "male", type: "watcher" },
  { name: "Azazel", detail: "Watcher angel who observed and taught sorcery.", status: false, gender: "male", type: "watcher" },
  { name: "Baraqel", detail: "Watcher angel who observed and taught signs.", status: false, gender: "male", type: "watcher" },
  { name: "Chazaqiel", detail: "Watcher angel who observed and taught knowledge.", status: false, gender: "male", type: "watcher" },
  { name: "Ezequeel", detail: "Watcher angel who observed and taught knowledge.", status: false, gender: "male", type: "watcher" },
  { name: "Gadreel", detail: "Watcher angel who observed and taught stars.", status: false, gender: "male", type: "watcher" },
  { name: "Kokabiel", detail: "Watcher angel who observed and taught omens.", status: false, gender: "male", type: "watcher" },
  { name: "Penemue", detail: "Watcher angel who observed and taught enchantments.", status: false, gender: "male", type: "watcher" },
  { name: "Ramiel", detail: "Watcher angel who observed and taught knowledge.", status: false, gender: "male", type: "watcher" },
  { name: "Sariel", detail: "Watcher angel who observed and taught sorcery.", status: false, gender: "male", type: "watcher" },
  { name: "Shamsiel", detail: "Watcher angel who observed and taught signs.", status: false, gender: "male", type: "watcher" },
  { name: "Tamiel", detail: "Watcher angel who observed and taught omens.", status: false, gender: "male", type: "watcher" },
  { name: "Turiel", detail: "Watcher angel who observed and taught stars.", status: false, gender: "male", type: "watcher" },
  { name: "Zaqiel", detail: "Watcher angel who observed and taught enchantments.", status: false, gender: "male", type: "watcher" },
  { name: "Arakia", detail: "Female watcher angel associated with beauty.", status: false, gender: "female", type: "watcher" },
  { name: "Azazira", detail: "Female watcher angel associated with earth magic.", status: false, gender: "female", type: "watcher" },
  { name: "Baraetha", detail: "Female watcher angel associated with omens.", status: false, gender: "female", type: "watcher" },
  { name: "Chazaiel", detail: "Female watcher angel associated with healing herbs.", status: false, gender: "female", type: "watcher" },
  { name: "Penemina", detail: "Female watcher angel associated with mysteries.", status: false, gender: "female", type: "watcher" },
  { name: "Gadriara", detail: "Female watcher angel associated with divination.", status: false, gender: "female", type: "watcher" },
  { name: "Tametha", detail: "Female watcher angel associated with signs.", status: false, gender: "female", type: "watcher" },
  { name: "Shamsira", detail: "Female watcher angel associated with omens.", status: false, gender: "female", type: "watcher" },
  { name: "Turina", detail: "Female watcher angel associated with enchantments.", status: false, gender: "female", type: "watcher" },
  { name: "Zaqara", detail: "Female watcher angel associated with healing herbs.", status: false, gender: "female", type: "watcher" },
  { name: "Armariel", detail: "Female watcher angel associated with mysteries.", status: false, gender: "female", type: "watcher" },
  { name: "Ezequela", detail: "Female watcher angel associated with earth magic.", status: false, gender: "female", type: "watcher" },
  { name: "Ramira", detail: "Female watcher angel associated with sacred visions.", status: false, gender: "female", type: "watcher" },
  { name: "Kokabina", detail: "Female watcher angel associated with star lore.", status: false, gender: "female", type: "watcher" },
  { name: "Saritha", detail: "Female watcher angel associated with cosmic insight.", status: false, gender: "female", type: "watcher" },
  { name: "Gadraela", detail: "Female watcher angel associated with forbidden knowledge.", status: false, gender: "female", type: "watcher" },
  { name: "Og", detail: "Nephilim giant known for ancient rule.", status: false, gender: "male", type: "nephilim" },
  { name: "Anak", detail: "Nephilim giant known for terrorizing lands.", status: false, gender: "male", type: "nephilim" },
  { name: "Arba", detail: "Nephilim giant known for ancient rule.", status: false, gender: "male", type: "nephilim" },
  { name: "Ahiman", detail: "Nephilim giant known for warfare.", status: false, gender: "male", type: "nephilim" },
  { name: "Sishai", detail: "Nephilim giant known for great strength.", status: false, gender: "male", type: "nephilim" },
  { name: "Talmai", detail: "Nephilim giant known for warfare.", status: false, gender: "male", type: "nephilim" },
  { name: "Rapha", detail: "Nephilim giant known for ancient rule.", status: false, gender: "male", type: "nephilim" },
  { name: "Zamzummim", detail: "Nephilim giant known for terrorizing lands.", status: false, gender: "male", type: "nephilim" },
  { name: "Emim", detail: "Nephilim giant known for mythic stature.", status: false, gender: "male", type: "nephilim" },
  { name: "Goliath", detail: "Nephilim giant known for defiance.", status: false, gender: "male", type: "nephilim" },
  { name: "Ezek", detail: "Nephilim giant known for warfare.", status: false, gender: "male", type: "nephilim" },
  { name: "Dagon", detail: "Nephilim giant known for ancient rule.", status: false, gender: "male", type: "nephilim" },
  { name: "Nimrod", detail: "Nephilim giant known for great strength.", status: false, gender: "male", type: "nephilim" },
  { name: "Azukiel", detail: "Nephilim giant known for mystic stature.", status: false, gender: "male", type: "nephilim" },
  { name: "Thamiel", detail: "Nephilim giant known for battle fury.", status: false, gender: "male", type: "nephilim" },
  { name: "Tarak", detail: "Nephilim giant known for giant bloodline.", status: false, gender: "male", type: "nephilim" },
  { name: "Erum", detail: "Nephilim giant known for wild command.", status: false, gender: "male", type: "nephilim" },
  { name: "Zaphon", detail: "Nephilim giant known for strength of ten men.", status: false, gender: "male", type: "nephilim" },
  { name: "Mogath", detail: "Nephilim giant known for ruling ancient lands.", status: false, gender: "male", type: "nephilim" },
  { name: "Baruk", detail: "Nephilim giant known for legendary duels.", status: false, gender: "male", type: "nephilim" },
  { name: "Jalon", detail: "Nephilim giant known for great strength.", status: false, gender: "male", type: "nephilim" },
  { name: "Kesed", detail: "Nephilim giant known for giant bloodline.", status: false, gender: "male", type: "nephilim" },
  { name: "Dorel", detail: "Nephilim giant known for wild command.", status: false, gender: "male", type: "nephilim" },
  { name: "Gidron", detail: "Nephilim giant known for mythic stature.", status: false, gender: "male", type: "nephilim" },
  { name: "Orenai", detail: "Nephilim giant known for ruling ancient lands.", status: false, gender: "male", type: "nephilim" },
  { name: "Hadram", detail: "Nephilim giant known for battle fury.", status: false, gender: "male", type: "nephilim" },
  { name: "Lekem", detail: "Nephilim giant known for strength of ten men.", status: false, gender: "male", type: "nephilim" },
  { name: "Zidon", detail: "Nephilim giant known for legendary duels.", status: false, gender: "male", type: "nephilim" },
  { name: "Korah", detail: "Nephilim giant known for ancient rule.", status: false, gender: "male", type: "nephilim" },
  { name: "Zuriel", detail: "Nephilim giant known for wild command.", status: false, gender: "male", type: "nephilim" },

  { name: "Ogra", detail: "Nephilim woman of immense height.", status: false, gender: "female", type: "nephilim" },
  { name: "Anakira", detail: "Nephilim woman of mystic bloodline.", status: false, gender: "female", type: "nephilim" },
  { name: "Arbaeth", detail: "Nephilim woman of great sorrow.", status: false, gender: "female", type: "nephilim" },
  { name: "Ahimanina", detail: "Nephilim woman of unmatched speed.", status: false, gender: "female", type: "nephilim" },
  { name: "Sishaella", detail: "Nephilim woman of great sorrow.", status: false, gender: "female", type: "nephilim" },
  { name: "Talmaia", detail: "Nephilim woman of battle fury.", status: false, gender: "female", type: "nephilim" },
  { name: "Raphina", detail: "Nephilim woman of mystic bloodline.", status: false, gender: "female", type: "nephilim" },
  { name: "Zamzeth", detail: "Nephilim woman of unmatched speed.", status: false, gender: "female", type: "nephilim" },
  { name: "Emimina", detail: "Nephilim woman of great sorrow.", status: false, gender: "female", type: "nephilim" },
  { name: "Goliatha", detail: "Nephilim woman of defiant power.", status: false, gender: "female", type: "nephilim" },
  { name: "Ezekira", detail: "Nephilim woman of ancient fury.", status: false, gender: "female", type: "nephilim" },
  { name: "Dagonia", detail: "Nephilim woman of mystic bloodline.", status: false, gender: "female", type: "nephilim" },
  { name: "Nimroda", detail: "Nephilim woman of immense height.", status: false, gender: "female", type: "nephilim" },
  { name: "Azukina", detail: "Nephilim woman of towering will.", status: false, gender: "female", type: "nephilim" },
  { name: "Thamaria", detail: "Nephilim woman of battle glory.", status: false, gender: "female", type: "nephilim" },
  { name: "Taraka", detail: "Nephilim woman of deep voice and strength.", status: false, gender: "female", type: "nephilim" },
  { name: "Eruma", detail: "Nephilim woman of stealth and vision.", status: false, gender: "female", type: "nephilim" },
  { name: "Zaphona", detail: "Nephilim woman of pride and resistance.", status: false, gender: "female", type: "nephilim" },
  { name: "Mogatha", detail: "Nephilim woman of towering spirit.", status: false, gender: "female", type: "nephilim" },
  { name: "Baruka", detail: "Nephilim woman of brute force.", status: false, gender: "female", type: "nephilim" },
  { name: "Jalona", detail: "Nephilim woman of ancient knowledge.", status: false, gender: "female", type: "nephilim" },
  { name: "Keseda", detail: "Nephilim woman of warrior blood.", status: false, gender: "female", type: "nephilim" },
  { name: "Dorelia", detail: "Nephilim woman of earth and fury.", status: false, gender: "female", type: "nephilim" },
  { name: "Gidrona", detail: "Nephilim woman of mountainous size.", status: false, gender: "female", type: "nephilim" },
  { name: "Orenaia", detail: "Nephilim woman of ancient lineage.", status: false, gender: "female", type: "nephilim" },
  { name: "Hadramina", detail: "Nephilim woman of heroic defiance.", status: false, gender: "female", type: "nephilim" },
  { name: "Lekema", detail: "Nephilim woman of wide reach.", status: false, gender: "female", type: "nephilim" },
  { name: "Zidona", detail: "Nephilim woman of mystic lineage.", status: false, gender: "female", type: "nephilim" },
  { name: "Koretta", detail: "Nephilim woman of stubborn rage.", status: false, gender: "female", type: "nephilim" },
  { name: "Zurielle", detail: "Nephilim woman of regal might.", status: false, gender: "female", type: "nephilim" },
  { name: "Sariel", detail: "Seraphim guardian of purity.", status: false, gender: "male", type: "seraphim" },
  { name: "Uriel", detail: "Seraphim guardian of holy law.", status: false, gender: "male", type: "seraphim" },
  { name: "Hadriel", detail: "Seraphim guardian of holy law.", status: false, gender: "male", type: "seraphim" },
  { name: "Kemuel", detail: "Seraphim guardian of celestial order.", status: false, gender: "male", type: "seraphim" },
  { name: "Raziel", detail: "Seraphim guardian of creation.", status: false, gender: "male", type: "seraphim" },
  { name: "Fanuel", detail: "Seraphim guardian of celestial order.", status: false, gender: "male", type: "seraphim" },
  { name: "Zerachiel", detail: "Seraphim guardian of purity.", status: false, gender: "male", type: "seraphim" },
  { name: "Jehoel", detail: "Seraphim guardian of divine fire.", status: false, gender: "male", type: "seraphim" },
  { name: "Jophiel", detail: "Seraphim guardian of creation.", status: false, gender: "male", type: "seraphim" },
  { name: "Arel", detail: "Seraphim guardian of eternal flame.", status: false, gender: "male", type: "seraphim" },
  { name: "Ananiel", detail: "Seraphim guardian of divine fire.", status: false, gender: "male", type: "seraphim" },
  { name: "Oriphiel", detail: "Seraphim guardian of creation.", status: false, gender: "male", type: "seraphim" },
  { name: "Barachiel", detail: "Seraphim guardian of holy law.", status: false, gender: "male", type: "seraphim" },
  { name: "Nathanael", detail: "Seraphim guardian of purity.", status: false, gender: "male", type: "seraphim" },
  { name: "Sabriel", detail: "Seraphim guardian of celestial order.", status: false, gender: "male", type: "seraphim" },
  { name: "Tzaphkiel", detail: "Seraphim guardian of purity.", status: false, gender: "male", type: "seraphim" },
  { name: "Suriel", detail: "Seraphim guardian of divine fire.", status: false, gender: "male", type: "seraphim" },
  { name: "Remiel", detail: "Seraphim guardian of creation.", status: false, gender: "male", type: "seraphim" },
  { name: "Yehudiel", detail: "Seraphim guardian of holy law.", status: false, gender: "male", type: "seraphim" },
  { name: "Zaphkiel", detail: "Seraphim guardian of eternal flame.", status: false, gender: "male", type: "seraphim" },
  { name: "Eleadiel", detail: "Seraphim guardian of divine fire.", status: false, gender: "male", type: "seraphim" },
  { name: "Menadel", detail: "Seraphim guardian of celestial order.", status: false, gender: "male", type: "seraphim" },
  { name: "Hariel", detail: "Seraphim guardian of purity.", status: false, gender: "male", type: "seraphim" },
  { name: "Verchiel", detail: "Seraphim guardian of eternal flame.", status: false, gender: "male", type: "seraphim" },
  { name: "Omniel", detail: "Seraphim guardian of creation.", status: false, gender: "male", type: "seraphim" },
  { name: "Yeshamiel", detail: "Seraphim guardian of holy law.", status: false, gender: "male", type: "seraphim" },
  { name: "Sachiel", detail: "Seraphim guardian of purity.", status: false, gender: "male", type: "seraphim" },
  { name: "Lahashiel", detail: "Seraphim guardian of divine fire.", status: false, gender: "male", type: "seraphim" },
  { name: "Imriel", detail: "Seraphim guardian of celestial order.", status: false, gender: "male", type: "seraphim" },
  { name: "Arariel", detail: "Seraphim guardian of eternal flame.", status: false, gender: "male", type: "seraphim" },

  { name: "Sarielia", detail: "Seraphim of sacred light.", status: false, gender: "female", type: "seraphim" },
  { name: "Urieliah", detail: "Seraphim of divine radiance.", status: false, gender: "female", type: "seraphim" },
  { name: "Hadrielle", detail: "Seraphim of judgment fire.", status: false, gender: "female", type: "seraphim" },
  { name: "Kemuira", detail: "Seraphim of eternal praise.", status: false, gender: "female", type: "seraphim" },
  { name: "Razinetha", detail: "Seraphim of pure breath.", status: false, gender: "female", type: "seraphim" },
  { name: "Fanuina", detail: "Seraphim of divine radiance.", status: false, gender: "female", type: "seraphim" },
  { name: "Zerachaya", detail: "Seraphim of sacred light.", status: false, gender: "female", type: "seraphim" },
  { name: "Jehoelia", detail: "Seraphim of eternal praise.", status: false, gender: "female", type: "seraphim" },
  { name: "Jophielia", detail: "Seraphim of divine radiance.", status: false, gender: "female", type: "seraphim" },
  { name: "Arella", detail: "Seraphim of holy wisdom.", status: false, gender: "female", type: "seraphim" },
  { name: "Ananiella", detail: "Seraphim of judgment fire.", status: false, gender: "female", type: "seraphim" },
  { name: "Oriphira", detail: "Seraphim of sacred light.", status: false, gender: "female", type: "seraphim" },
  { name: "Barachina", detail: "Seraphim of eternal praise.", status: false, gender: "female", type: "seraphim" },
  { name: "Nathayeth", detail: "Seraphim of divine radiance.", status: false, gender: "female", type: "seraphim" },
  { name: "Sabriaya", detail: "Seraphim of judgment fire.", status: false, gender: "female", type: "seraphim" },
  { name: "Tzaphkira", detail: "Seraphim of sacred light.", status: false, gender: "female", type: "seraphim" },
  { name: "Surina", detail: "Seraphim of pure breath.", status: false, gender: "female", type: "seraphim" },
  { name: "Remiella", detail: "Seraphim of divine radiance.", status: false, gender: "female", type: "seraphim" },
  { name: "Yehudia", detail: "Seraphim of eternal praise.", status: false, gender: "female", type: "seraphim" },
  { name: "Zaphkira", detail: "Seraphim of holy wisdom.", status: false, gender: "female", type: "seraphim" },
  { name: "Eleadiya", detail: "Seraphim of sacred light.", status: false, gender: "female", type: "seraphim" },
  { name: "Menadella", detail: "Seraphim of judgment fire.", status: false, gender: "female", type: "seraphim" },
  { name: "Harinetha", detail: "Seraphim of divine radiance.", status: false, gender: "female", type: "seraphim" },
  { name: "Verchaya", detail: "Seraphim of pure breath.", status: false, gender: "female", type: "seraphim" },
  { name: "Omnielle", detail: "Seraphim of sacred light.", status: false, gender: "female", type: "seraphim" },
  { name: "Yeshamira", detail: "Seraphim of judgment fire.", status: false, gender: "female", type: "seraphim" },
  { name: "Sachiella", detail: "Seraphim of divine radiance.", status: false, gender: "female", type: "seraphim" },
  { name: "Lahashina", detail: "Seraphim of sacred light.", status: false, gender: "female", type: "seraphim" },
  { name: "Imriaya", detail: "Seraphim of holy wisdom.", status: false, gender: "female", type: "seraphim" },
  { name: "Araritha", detail: "Seraphim of eternal praise.", status: false, gender: "female", type: "seraphim" },

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
        name: "Song Name Generator",
        pic: "/pop.jpg",
        link: "https://www.nameideagenerator.com/song-name-generator",
    },
    {
        name: "WoW Name Generator",
        pic: "/wow.jpg",
        link: "https://www.nameideagenerator.com/wow-name-generator",
    },
    {
        name: "Horse Name Generator",
        pic: "horse.webp",
        link: "https://www.nameideagenerator.com/horse-name-generator",
    },
];

const AngleNameGenerator = () => {
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

    const bgImage = "/angel.jpg"
    const context = " Angel Name Generator"

    const Q1 = "What does the angel name generator do?"

    const A1 = 'It gives you powerful, graceful, and meaningful names that fit fantasy or divine themes.'
    
    const Q2 = "Can I use these names in my stories or games?"
    
    const A2 = 'Yes, all generated names are free to use in personal and commercial projects.'
    
    const Q3 = "Are the names biblically accurate?"
    
    const A3 = "Some take inspiration from traditional texts, but most are fantasy-styled and unique."
    
    const Q4 = "Is this tool just for writers?"
    
    const A4 = "No. Gamers, parents, artists, and worldbuilders all use it."
    
    const Q5 = "Can I generate as many names as I want?"
    
    const A5 = "Yes. Keep clicking until you find your perfect divine match."

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
                        {/* Breadcrumbs */}
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
        <a href="/angel-name-generator" className="hover:underline text-[#343a40]">Angel Name Generator</a>
      </li>
    </ol>
  </nav>

                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                          Random Angel Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Angel Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="archangel">Archangel Angels</option>
                            <option value="fallen_angel">Fallen Angels</option>
                            <option value="watcher">Watcher</option>
                            <option value="nephilim">Nephilim</option>
                            <option value="nephilim">Nephilim</option>

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
                          Tap Into Your Divine Side with Just One Click
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        You don’t need wings to sound divine. You just need the right name. Our angel name generator online 
                        helps you find names that shine with grace, power, 
                        In case you’re naming a fantasy character, writing a divine warrior into your story, 
                        or searching for a heavenly baby name idea, our tool has you covered.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        You should try it if you want something that sounds unique, biblical, or mythical. 
                        The names feel like they came from a choir of stars. Some glow with purity. Some carry strength. Each one fits right into a celestial setting.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                      How to Use Our Angel Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    You don’t need a divine revelation to use this. Just follow three simple steps:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 1: Visit the Tool
                            </h3>
                            <p>
                             Go to the angel name generator section on our site. It’s easy to find in our fantasy names category.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 2: Set Your Preferences
                            </h3>
                            <p>
                              Pick your preferred gender or name vibe. Want a gentle-sounding healer? Or a fierce avenging angel? It adjusts based on what you need.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 3: Generate and Choose
                            </h3>
                            <p>
                             Click the generate button. Scroll through the results and select the name that speaks to your soul.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 4: Review Names and Their Meanings
                            </h3>
                            <p>
                             Names will be displayed on your screen. Hover over each to see details like meaning, origin, 
                             and the spiritual significance associated with the name.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="angel1.jpg"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            className="w-[300px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="angel2.avif"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            className="w-[300px] h-[300px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                    Related to Angel Name Generator
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
                    Why You Should Use Our Angel Name Creator Tool?
                    </h2>
                    <p class="sm:text-[16px] text-[18px] font-semibold">
                    You might be wondering why this tool matters. The answer is simple.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold">
                                 Fast, Free, and Full of Ideas
                                </h3>
                                <p>
                                You don’t need hours to brainstorm. You get a divine list of angelic name ideas for fantasy characters instantly. 
                                According to a 2025 content creator survey, over 60% of writers said they waste too much time trying to name characters. We can solve that.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                 Names That Fit Your World
                                </h3>
                                <p>
                                You should know that our generator creates names that match fantasy lore, spiritual texts, and modern writing needs. 
                                Names like "Seraphiel" or "Ariettael" sound fitting for both heavenly stories and roleplay games.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Smooth Interface
                                </h3>
                                <p>
                                You won’t face any tech struggle. It works for writers, gamers, parents, or anyone just curious about celestial names. 
                                Tired of lags, slow downs, and just slow processors? Our tool guarantees instant results.                     
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Professional Quality
                                </h3>
                                <p>
                                Deliver names of high quality that add authenticity and allure to your work. Whether for literature, gaming, or film, 
                                our Angel Name Generator ensures that the names you create resonate with your audience. 
                                Achieve a professional standard that elevates your character and projects.              
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="jejus.webp"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            class="w-[300px] my-[30px] h-[300px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="angel4.webp"
                            alt="Angel Name Generator | Random Fallen Angel Name Generator With Meaning"
                            class="w-[300px] h-[300px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>



<section class="bg-white py-8 px-4">
  <div class="w-[80%] mx-auto my-[30px]">
    <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">What Makes Angelic Names So Special?</h2>
    <p class="text-gray-700 mb-3">
      It’s important to know that most angel names carry deep meaning. Many come from Hebrew or Latin. You often see endings like <span class="italic">-el</span>, which means “of God.”
    </p>
    <p class="text-gray-700 mb-3">
      Names like <span class="font-medium">Raphael</span> (meaning “God heals”) or <span class="font-medium">Zadkiel</span> (“God is my righteousness”) offer instant identity to characters.
    </p>
    <p class="text-gray-700">
      Writers use these names to bring symbolism into their fantasy worlds. A strong name can define a character’s entire purpose.
    </p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="w-[80%] mx-auto my-[30px]">
    <h2 class="text-3xl font-bold text-gray-700 mb-4 text-center">How to Choose the Right Name?</h2>
    <p class="text-gray-700 text-base mb-4 text-center max-w-2xl mx-auto">
      You might want a name that fits a noble archangel or a soft guardian spirit. That’s where the style matters.
    </p>
    <p class="text-gray-700 text-base mb-4 text-center max-w-2xl mx-auto">
      Some names feel light and airy. Others feel ancient and mighty. Consider the tone of your story or role—the right name gives emotional weight before your character even speaks.
    </p>

    <div class="mt-6 bg-white rounded-xl shadow-md p-6">
      <h3 class="text-xl font-semibold text-gray-700 mb-4">You can use this angel name generator for:</h3>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Naming divine warriors in fantasy games
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Creating celestial beings in DnD
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Finding spiritual character names for novels
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Picking heavenly names for stories or worldbuilding
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2 mt-1">✔️</span> Building a character name list for baby name ideas
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="bg-white py-10 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">List of Some Unique Angel Names with Meaning</h2>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold text-pink-600 mb-4">👼 Female Angel Names</h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Seraphinael</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Flame of God’s Grace”</p>
          <p class="text-sm text-gray-700">Inspired by the Seraphim, the highest order of angels, blended with elegance.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Lumireth</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Bearer of Divine Light”</p>
          <p class="text-sm text-gray-700">Symbolizes an angel who spreads hope and radiance across realms.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Caeliena</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Heaven’s Song”</p>
          <p class="text-sm text-gray-700">A melodic name for an angel associated with harmony and beauty.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Ezriella</h4>
          <p class="italic text-sm text-pink-700 mb-1">“God’s Helper in Healing”</p>
          <p class="text-sm text-gray-700">Represents a nurturing and protective guardian angel.</p>
        </div>

        <div class="bg-pink-50 border border-pink-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-pink-800">Tzaphirael</h4>
          <p class="italic text-sm text-pink-700 mb-1">“Messenger of Hidden Wisdom”</p>
          <p class="text-sm text-gray-700">Ideal for a mystical or secretive angel who guides through dreams.</p>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">😇 Male Angel Names</h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Thaliel</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Shield of God”</p>
          <p class="text-sm text-gray-700">Perfect for a warrior angel who protects the divine realm.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Oraniel</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Light of Judgment”</p>
          <p class="text-sm text-gray-700">Represents clarity, truth, and divine justice.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Zephurion</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Winds of Heaven”</p>
          <p class="text-sm text-gray-700">Inspired by heavenly movement and swiftness—ideal for a fast, agile angel.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Malachor</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Angel of the Burning Word”</p>
          <p class="text-sm text-gray-700">A powerful name for a messenger who delivers truth with force.</p>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-blue-800">Aurevian</h4>
          <p class="italic text-sm text-blue-700 mb-1">“Golden Spirit”</p>
          <p class="text-sm text-gray-700">Carries the essence of purity, glory, and immortality.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-gradient-to-r from-red-50 to-pink-100 py-20 px-4">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-2xl sm:text-3xl font-bold text-red-700 mb-4">👿 Pair a Demon with Your Angel</h2>
    <p class="text-gray-800 text-base sm:text-lg mb-6">
      You might want a name that leans into the other side. For that, try our <span class="font-semibold text-red-600">Demon Name Generator</span>. 
      It’s perfect if you’re building a good-vs-evil fantasy world.
    </p>
    <a href="https://www.nameideagenerator.com/demon-name-generator" class="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-full transition-all duration-300">
     Demon Name Generator
    </a>
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
            <Footer  />
        </motion.div>
    );
};

export default AngleNameGenerator;

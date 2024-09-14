"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Bjorn Ironhand", detail: "Name meaning 'bear with iron hands,' symbolizing strength and resilience.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Ragnar Stormbringer", detail: "Name associated with 'bringing storms,' symbolizing power and might.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Erik Bloodaxe", detail: "Name meaning 'ruler with a bloody axe,' symbolizing leadership and ferocity.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Thorvald Frostbane", detail: "Name associated with 'banishing frost,' symbolizing resilience against cold and adversity.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Olaf Ravenshield", detail: "Name meaning 'descendant of ravens,' symbolizing wisdom and protection.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Sigurd Thunderfist", detail: "Name associated with 'thunderous fists,' symbolizing immense power and impact.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Leif Stoneheart", detail: "Name meaning 'stone-hearted,' symbolizing steadfastness and determination.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Hakon Wolfclaw", detail: "Name associated with 'wolf's claw,' symbolizing ferocity and strength.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Gudmund Firestrike", detail: "Name meaning 'strike with fire,' symbolizing passion and aggression.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Jarl Grimr", detail: "Name meaning 'grim ruler,' symbolizing a stern and commanding presence.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Einar Frostborn", detail: "Name associated with 'born of frost,' symbolizing endurance and coolness under pressure.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Harald Thunderstorm", detail: "Name meaning 'storm of thunder,' symbolizing overwhelming force and chaos.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Svein Bearclaw", detail: "Name associated with 'bear's claw,' symbolizing strength and courage.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Alaric Wolfbane", detail: "Name meaning 'bane of wolves,' symbolizing prowess in battle and leadership.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Magnus Ironclad", detail: "Name meaning 'ironclad,' symbolizing unbeatable strength and resilience.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Kjetil Stormbreaker", detail: "Name associated with 'breaking storms,' symbolizing the ability to overcome great challenges.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Stig Ironwolf", detail: "Name meaning 'iron wolf,' symbolizing toughness and predatory skills.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Asmund Darkblade", detail: "Name associated with 'dark blade,' symbolizing a mysterious and formidable warrior.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Viggo Steelhand", detail: "Name meaning 'steel hand,' symbolizing strength and endurance in combat.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Ulfar Frostfang", detail: "Name associated with 'frosty fangs,' symbolizing ferocity and resilience in harsh conditions.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Haldor Ironheart", detail: "Name meaning 'iron heart,' symbolizing unwavering courage and strength.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Tore Froststrike", detail: "Name associated with 'frost strike,' symbolizing a fierce and chilling attack.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Vikingar Stormrider", detail: "Name meaning 'storm rider,' symbolizing dominance over turbulent forces.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Bjarne Bloodmoon", detail: "Name associated with 'blood moon,' symbolizing a fierce and rare warrior.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Jorgun Thundershield", detail: "Name meaning 'thunder shield,' symbolizing a strong defender against great forces.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Gunnar Ironfoot", detail: "Name associated with 'iron foot,' symbolizing a steadfast and unyielding warrior.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Eirik Stormwatcher", detail: "Name meaning 'storm watcher,' symbolizing vigilance and readiness in the face of danger.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Rurik Darkstorm", detail: "Name associated with 'dark storm,' symbolizing an ominous and powerful force.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Vagn Ravensbane", detail: "Name meaning 'bane of ravens,' symbolizing a powerful and intimidating presence.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Gorm Ironfist", detail: "Name associated with 'iron fist,' symbolizing unyielding strength and combat prowess.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Sven Thunderclaw", detail: "Name meaning 'thunder claw,' symbolizing a fierce and powerful attack.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Rune Shadowfax", detail: "Name associated with 'shadow steed,' symbolizing agility and stealth in combat.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Haldor Fireblade", detail: "Name meaning 'fire blade,' symbolizing a fiery and aggressive fighting style.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Baldur Frosthammer", detail: "Name associated with 'frost hammer,' symbolizing powerful and chilling blows.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Jorund Ironstrike", detail: "Name meaning 'iron strike,' symbolizing a forceful and determined attacker.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Odin Stormcall", detail: "Name associated with 'calling storms,' symbolizing command over powerful forces.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Knut Ironraven", detail: "Name meaning 'iron raven,' symbolizing wisdom and unyielding strength.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Egil Wolfbreaker", detail: "Name associated with 'breaking wolves,' symbolizing dominance over fierce adversaries.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Freyr Stormaxe", detail: "Name meaning 'storm axe,' symbolizing overwhelming power and strength in battle.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Hjorr Thunderbane", detail: "Name associated with 'bane of thunder,' symbolizing resilience against formidable forces.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Jorik Frostfang", detail: "Name meaning 'frosty fangs,' symbolizing a fierce and cold-blooded fighter.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Rolf Stonebreaker", detail: "Name associated with 'breaking stones,' symbolizing immense strength and impact.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Gunnar Thunderbolt", detail: "Name meaning 'thunderbolt,' symbolizing sudden and powerful strikes.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Tormod Ironstar", detail: "Name associated with 'iron star,' symbolizing a shining and resilient warrior.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Gundar Frostshard", detail: "Name meaning 'frost shard,' symbolizing a sharp and cold presence in battle.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Valli Bloodstorm", detail: "Name associated with 'storm of blood,' symbolizing fierce and chaotic energy.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Hvid Ironblade", detail: "Name meaning 'iron blade,' symbolizing a strong and sharp weapon in battle.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Svenja Thunderwolf", detail: "Name associated with 'thunder wolf,' symbolizing a powerful and wild warrior.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Alfheim Frostcloak", detail: "Name meaning 'frost cloak,' symbolizing a protective and chilling presence.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Leif Blackthorn", detail: "Name associated with 'black thorn,' symbolizing a sharp and formidable opponent.", status: false, gender: "male", type: "viking_warrior_name" },
      { name: "Astrid Fireheart", detail: "Name meaning 'fire heart,' symbolizing passion and strength.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Sigrid Frostveil", detail: "Name associated with 'frost veil,' symbolizing mystery and cold resilience.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Brynhild Stormbride", detail: "Name meaning 'storm bride,' symbolizing a fierce and powerful presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Freya Ironrose", detail: "Name associated with 'iron rose,' symbolizing beauty and strength.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Gunnhild Ravenwing", detail: "Name meaning 'raven's wing,' symbolizing freedom and foresight.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Helga Stormsong", detail: "Name associated with 'storm song,' symbolizing a powerful and commanding voice.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Eira Snowfall", detail: "Name meaning 'snowfall,' symbolizing purity and quiet strength.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Ingrid Nightshade", detail: "Name associated with 'nightshade,' symbolizing a dark and mysterious presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Solveig Ironflower", detail: "Name meaning 'iron flower,' symbolizing resilience and beauty in harsh conditions.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Hilda Frostqueen", detail: "Name associated with 'frost queen,' symbolizing regal strength and cold beauty.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Runa Thunderspark", detail: "Name meaning 'thunder spark,' symbolizing a bright and energetic presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Liv Bloodmoon", detail: "Name associated with 'blood moon,' symbolizing a rare and intense warrior.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Kari Frostwind", detail: "Name meaning 'frost wind,' symbolizing a cold and unstoppable force.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Gerd Stormstar", detail: "Name associated with 'storm star,' symbolizing a prominent and powerful presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Alva Ravenshadow", detail: "Name meaning 'raven's shadow,' symbolizing stealth and wisdom.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Sunniva Iceheart", detail: "Name associated with 'ice heart,' symbolizing cold and determined strength.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Helmi Thunderglow", detail: "Name meaning 'thunder glow,' symbolizing a bright and powerful energy.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Thyra Ironleaf", detail: "Name associated with 'iron leaf,' symbolizing strength and resilience in nature.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Nanna Frostbringer", detail: "Name meaning 'bringer of frost,' symbolizing a powerful and chilling presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Astrid Darkveil", detail: "Name associated with 'dark veil,' symbolizing mystery and strength.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Sif Frostblade", detail: "Name meaning 'frost blade,' symbolizing a sharp and cold combatant.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Yrsa Stormflare", detail: "Name associated with 'storm flare,' symbolizing a bright and powerful burst of energy.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Kirsten Bloodrose", detail: "Name meaning 'blood rose,' symbolizing beauty and fierce resolve.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Asta Ironfang", detail: "Name associated with 'iron fang,' symbolizing sharp and powerful attacks.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Eydis Snowblade", detail: "Name meaning 'snow blade,' symbolizing a cold and sharp presence in battle.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Luna Stormveil", detail: "Name associated with 'storm veil,' symbolizing a mysterious and powerful aura.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Freydis Ravensong", detail: "Name meaning 'raven song,' symbolizing a powerful and resonant presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Sigrun Frostflare", detail: "Name associated with 'frost flare,' symbolizing a sharp and cold energy.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Thora Ironwill", detail: "Name meaning 'iron will,' symbolizing unyielding determination and strength.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Ylva Snowrider", detail: "Name associated with 'snow rider,' symbolizing agility and dominance in cold environments.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Kari Stormbane", detail: "Name meaning 'storm bane,' symbolizing resistance and strength against chaos.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Vera Frostshard", detail: "Name associated with 'frost shard,' symbolizing a sharp and cold presence in battle.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Gunnvor Ironclaw", detail: "Name meaning 'iron claw,' symbolizing a strong and formidable grip.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Dagmar Thundersong", detail: "Name associated with 'thunder song,' symbolizing a powerful and resonant voice.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Tove Frostfang", detail: "Name meaning 'frost fang,' symbolizing a fierce and chilling presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Ragnhild Stormshroud", detail: "Name associated with 'storm shroud,' symbolizing a powerful and protective presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Frida Snowstrike", detail: "Name meaning 'snow strike,' symbolizing a sharp and cold attack.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Thyra Ravenshade", detail: "Name associated with 'raven shade,' symbolizing stealth and wisdom.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Hilda Thunderveil", detail: "Name meaning 'thunder veil,' symbolizing a powerful and mysterious presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Eira Stormdancer", detail: "Name associated with 'storm dancer,' symbolizing agility and grace in chaotic situations.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Vigdis Frostsong", detail: "Name meaning 'frost song,' symbolizing a cold and melodious presence.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Bodil Iceheart", detail: "Name associated with 'ice heart,' symbolizing cold determination and strength.", status: false, gender: "female", type: "viking_warrior_name" },
      { name: "Odin Allfather", detail: "Name meaning 'all-father,' symbolizing supreme authority and wisdom.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Thor Thunderer", detail: "Name associated with 'thunder,' symbolizing immense power and strength.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Loki Trickster", detail: "Name meaning 'trickster,' symbolizing cunning and mischief.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Baldur Bright", detail: "Name meaning 'bright,' symbolizing light and purity.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Tyr Warbringer", detail: "Name meaning 'warbringer,' symbolizing battle and conflict.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Freyr Sunlord", detail: "Name associated with 'sun,' symbolizing warmth and prosperity.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Hodr Darkseeker", detail: "Name meaning 'dark seeker,' symbolizing a quest for hidden truths.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Vili Creator", detail: "Name associated with 'creator,' symbolizing innovation and creation.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Vei Protector", detail: "Name meaning 'protector,' symbolizing guardianship and defense.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Heimdall Watcher", detail: "Name associated with 'watcher,' symbolizing vigilance and alertness.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Forseti Judge", detail: "Name meaning 'judge,' symbolizing justice and fairness.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Bragi Skald", detail: "Name associated with 'skald,' symbolizing poetic and musical talent.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Njord Sea King", detail: "Name meaning 'sea king,' symbolizing maritime authority and power.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Fenrir Wolfbane", detail: "Name associated with 'wolfbane,' symbolizing fearlessness and ferocity.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Jormungand Worldserpent", detail: "Name meaning 'world serpent,' symbolizing vast power and danger.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Surtur Firelord", detail: "Name associated with 'fire lord,' symbolizing fiery destruction and dominance.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Skadi Snowqueen", detail: "Name meaning 'snow queen,' symbolizing cold beauty and strength.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Hella Ruler", detail: "Name associated with 'ruler,' symbolizing authority over death and the underworld.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Ymir Frostgiant", detail: "Name meaning 'frost giant,' symbolizing ancient and primordial power.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Buri Ancestor", detail: "Name associated with 'ancestor,' symbolizing the origin and heritage of the gods.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Vidar Avenger", detail: "Name meaning 'avenger,' symbolizing retribution and justice.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Mimir Sage", detail: "Name associated with 'sage,' symbolizing wisdom and knowledge.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Nanna Wife", detail: "Name meaning 'wife,' symbolizing love and companionship.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Ragnarok Ender", detail: "Name associated with 'ender,' symbolizing the end of the world and ultimate destruction.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Kvasir Wise", detail: "Name meaning 'wise,' symbolizing knowledge and enlightenment.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Hogni Brave", detail: "Name associated with 'brave,' symbolizing courage and heroism.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Eir Healer", detail: "Name meaning 'healer,' symbolizing medical skill and care.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Gullinbursti Boar", detail: "Name associated with 'boar,' symbolizing strength and ferocity.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Ratatoskr Squirrel", detail: "Name meaning 'squirrel,' symbolizing communication and agility.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Idunn Keeper", detail: "Name associated with 'keeper,' symbolizing guardianship and preservation.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Sigyn Loyal", detail: "Name meaning 'loyal,' symbolizing faithfulness and devotion.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Ullr Hunter", detail: "Name associated with 'hunter,' symbolizing skill and prowess in the hunt.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Höðr Shadow", detail: "Name meaning 'shadow,' symbolizing darkness and mystery.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Mundilfari Timekeeper", detail: "Name associated with 'timekeeper,' symbolizing control over time and cycles.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Gerd Earthmother", detail: "Name meaning 'earthmother,' symbolizing fertility and nurturing.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Hugin Thought", detail: "Name associated with 'thought,' symbolizing wisdom and contemplation.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Munin Memory", detail: "Name meaning 'memory,' symbolizing recollection and wisdom.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Sleipnir Eightlegs", detail: "Name associated with 'eightlegs,' symbolizing extraordinary speed and strength.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Yggdrasil Worldtree", detail: "Name meaning 'worldtree,' symbolizing the axis of the cosmos and life.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Aegir Sea Giant", detail: "Name associated with 'sea giant,' symbolizing oceanic power and strength.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Sif Harvest", detail: "Name meaning 'harvest,' symbolizing fertility and agriculture.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Jörmungandr Sea Serpent", detail: "Name meaning 'sea serpent,' symbolizing immense power and danger in the ocean.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Sleipnir Horse", detail: "Name associated with 'horse,' symbolizing strength and swiftness.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Freyja Love", detail: "Name meaning 'love,' symbolizing beauty and affection.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Nótt Night", detail: "Name meaning 'night,' symbolizing darkness and mystery.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Dagr Day", detail: "Name meaning 'day,' symbolizing light and the passage of time.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Jörmunrek", detail: "Name associated with strength and power.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Höðr Shadowbane", detail: "Name meaning 'shadowbane,' symbolizing the defeat of darkness.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Þórr Thundermaster", detail: "Name meaning 'thundermaster,' symbolizing mastery over thunder and storms.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Loki Stormweaver", detail: "Name meaning 'stormweaver,' symbolizing control over chaos and storms.", status: false, gender: "male", type: "norse_mythology_name" },
      { name: "Frigg Queen", detail: "Name meaning 'queen,' symbolizing nobility and leadership.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Sif Harvest", detail: "Name meaning 'harvest,' symbolizing fertility and agriculture.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Skadi Huntress", detail: "Name meaning 'huntress,' symbolizing skill in hunting and independence.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Freyja Love", detail: "Name meaning 'love,' symbolizing beauty and affection.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Idunn Keeper", detail: "Name meaning 'keeper,' symbolizing guardianship and preservation.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Eir Healer", detail: "Name meaning 'healer,' symbolizing medical skill and care.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Brynhild Valkyrie", detail: "Name meaning 'valkyrie,' symbolizing a warrior maid who chooses those who may die and those who may live.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Hela Ruler", detail: "Name meaning 'ruler,' symbolizing authority over death and the underworld.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Nanna Wife", detail: "Name meaning 'wife,' symbolizing love and companionship.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Gefjon Plowgirl", detail: "Name meaning 'plowgirl,' symbolizing agricultural fertility and labor.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Ran Sea Queen", detail: "Name meaning 'sea queen,' symbolizing control over the sea and its dangers.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Sól Sun", detail: "Name meaning 'sun,' symbolizing light and the solar power.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Máni Moon", detail: "Name meaning 'moon,' symbolizing the lunar cycles and night.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Gerd Earthmother", detail: "Name meaning 'earthmother,' symbolizing fertility and nurturing.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Sigyn Loyal", detail: "Name meaning 'loyal,' symbolizing faithfulness and devotion.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Valkyrie Chosen", detail: "Name meaning 'chosen,' symbolizing selection of heroes for Valhalla.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Rindr Mother", detail: "Name meaning 'mother,' symbolizing nurturing and protection.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Jörmunrek Earth", detail: "Name associated with strength and power related to the earth.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Jötnar Giantess", detail: "Name meaning 'giantess,' symbolizing vast size and strength.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Skuld Fate", detail: "Name meaning 'fate,' symbolizing destiny and future.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Nótt Night", detail: "Name meaning 'night,' symbolizing darkness and mystery.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Dagr Day", detail: "Name meaning 'day,' symbolizing light and the passage of time.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Sól Sunbeam", detail: "Name meaning 'sunbeam,' symbolizing light and warmth.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Fjorgyn Earth", detail: "Name associated with 'earth,' symbolizing fertility and strength.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Eir Healing", detail: "Name meaning 'healing,' symbolizing recovery and care.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Frigga Sky", detail: "Name meaning 'sky,' symbolizing vastness and serenity.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Sif Storm", detail: "Name meaning 'storm,' symbolizing power and tumultuous energy.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Höðr Shadow", detail: "Name meaning 'shadow,' symbolizing darkness and mystery.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Freya Moonlight", detail: "Name meaning 'moonlight,' symbolizing beauty and the gentle light of the moon.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Hela Dark", detail: "Name meaning 'dark,' symbolizing the underworld and mystery.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Eir Stone", detail: "Name meaning 'stone,' symbolizing strength and stability.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Rindr Rebirth", detail: "Name meaning 'rebirth,' symbolizing renewal and transformation.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Hildr Valkyrie", detail: "Name meaning 'valkyrie,' symbolizing warrior maidens who choose the slain.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Hela Nightshade", detail: "Name meaning 'nightshade,' symbolizing darkness and death.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Gerd Frost", detail: "Name meaning 'frost,' symbolizing cold and endurance.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Nanna Sun", detail: "Name meaning 'sun,' symbolizing light and warmth.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Sigrún Valkyrie", detail: "Name meaning 'valkyrie,' symbolizing a warrior maiden who selects heroes for Valhalla.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Brynhild Brave", detail: "Name meaning 'brave,' symbolizing valor and courage.", status: false, gender: "female", type: "norse_mythology_name" },
      { name: "Thrain Ironforge", detail: "Name meaning 'ironforge,' symbolizing strength and craftsmanship.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Brynjar Frosthelm", detail: "Name meaning 'frosthelm,' symbolizing protection and cold resilience.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Haldor Stonefist", detail: "Name meaning 'stonefist,' symbolizing unyielding strength and durability.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Ragnar Thunderforge", detail: "Name meaning 'thunderforge,' symbolizing power and forging might.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Eirik Stormfang", detail: "Name meaning 'stormfang,' symbolizing ferocity and control over storms.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Hakon Darkshield", detail: "Name meaning 'darkshield,' symbolizing protection against darkness.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Freyr Frostclaw", detail: "Name meaning 'frostclaw,' symbolizing icy strength and prowess.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Sigvard Ironbane", detail: "Name meaning 'ironbane,' symbolizing the destruction of iron and strength.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Gunnar Stormrider", detail: "Name meaning 'stormrider,' symbolizing mastery over storms.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Viggo Flameheart", detail: "Name meaning 'flameheart,' symbolizing fiery passion and bravery.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Jarek Thundershield", detail: "Name meaning 'thundershield,' symbolizing protection and power of thunder.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Leif Frostburn", detail: "Name meaning 'frostburn,' symbolizing a blend of cold and fierce energy.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Einar Darkflame", detail: "Name meaning 'darkflame,' symbolizing a powerful and mysterious fire.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Rolf Ironstone", detail: "Name meaning 'ironstone,' symbolizing resilience and steadfastness.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Alaric Stormsword", detail: "Name meaning 'stormsword,' symbolizing mastery and control over storms in battle.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Haldor Thunderaxe", detail: "Name meaning 'thunderaxe,' symbolizing a powerful weapon and control over thunder.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Tormod Ironclaw", detail: "Name meaning 'ironclaw,' symbolizing strength and ferocity in combat.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Gustav Frosthelm", detail: "Name meaning 'frosthelm,' symbolizing cold protection and resilience.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Sven Thunderfist", detail: "Name meaning 'thunderfist,' symbolizing powerful strikes and control over storms.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Baldur Ironshard", detail: "Name meaning 'ironshard,' symbolizing unyielding strength and determination.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Kjetil Stormstrike", detail: "Name meaning 'stormstrike,' symbolizing powerful strikes and command over storms.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Jarl Froststorm", detail: "Name meaning 'froststorm,' symbolizing a powerful mix of cold and tempest.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Eirik Stonebreaker", detail: "Name meaning 'stonebreaker,' symbolizing strength and ability to overcome obstacles.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Hrothgar Darkblade", detail: "Name meaning 'darkblade,' symbolizing a fearsome and mysterious sword.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Odin Firestorm", detail: "Name meaning 'firestorm,' symbolizing overwhelming power and destruction.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Thorgrim Frosthammer", detail: "Name meaning 'frosthammer,' symbolizing power and control over frost and battle.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Haldor Thunderbane", detail: "Name meaning 'thunderbane,' symbolizing the defeat of thunder and storms.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Vagn Ironstorm", detail: "Name meaning 'ironstorm,' symbolizing a powerful and destructive force.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Rune Thunderfist", detail: "Name meaning 'thunderfist,' symbolizing strong, thunderous strikes.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Ragnar Ironshield", detail: "Name meaning 'ironshield,' symbolizing robust protection and strength.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Gunnar Frostclaw", detail: "Name meaning 'frostclaw,' symbolizing icy power and ferocity.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Leif Stormheart", detail: "Name meaning 'stormheart,' symbolizing bravery and resilience in the face of storms.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Jorund Darkstorm", detail: "Name meaning 'darkstorm,' symbolizing a fierce and ominous tempest.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Brynjar Ironfang", detail: "Name meaning 'ironfang,' symbolizing sharpness and strength.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Sigurd Thunderstrike", detail: "Name meaning 'thunderstrike,' symbolizing powerful, lightning-like strikes.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Ulfar Froststrike", detail: "Name meaning 'froststrike,' symbolizing icy attacks and endurance.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Kari Ironstorm", detail: "Name meaning 'ironstorm,' symbolizing a powerful, destructive force.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Sven Darkshadow", detail: "Name meaning 'darkshadow,' symbolizing mystery and stealth.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Tore Frostbane", detail: "Name meaning 'frostbane,' symbolizing the defeat of frost and cold.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Hrolf Stormrage", detail: "Name meaning 'stormrage,' symbolizing fury and mastery over storms.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Gorm Ironblade", detail: "Name meaning 'ironblade,' symbolizing a strong and unyielding weapon.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Ragnar Stoneheart", detail: "Name meaning 'stoneheart,' symbolizing unbreakable resolve and strength.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Einar Thunderforge", detail: "Name meaning 'thunderforge,' symbolizing strength and forging power.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Tormod Frostbane", detail: "Name meaning 'frostbane,' symbolizing the defeat of icy forces.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Haldor Ironfist", detail: "Name meaning 'ironfist,' symbolizing strength and unyielding power.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Viggo Stormrider", detail: "Name meaning 'stormrider,' symbolizing mastery over storms and challenges.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Bjorn Darkstorm", detail: "Name meaning 'darkstorm,' symbolizing power and darkness combined.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Gunnar Frostshield", detail: "Name meaning 'frostshield,' symbolizing protection against cold and ice.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Baldur Ironstrike", detail: "Name meaning 'ironstrike,' symbolizing powerful and unyielding strikes.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Thorvald Stormclaw", detail: "Name meaning 'stormclaw,' symbolizing fierce and powerful storm control.", status: false, gender: "male", type: "norse_fantasy_name" },
      { name: "Sigrun Frostwind", detail: "Name meaning 'frostwind,' symbolizing a cold and powerful wind.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Astrid Iceveil", detail: "Name meaning 'iceveil,' symbolizing a mysterious and cold cover.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Helga Stormfire", detail: "Name meaning 'stormfire,' symbolizing fiery energy and storm power.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Brynhildr Darkrose", detail: "Name meaning 'darkrose,' symbolizing beauty amidst darkness.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Eira Frostveil", detail: "Name meaning 'frostveil,' symbolizing a cold and protective cover.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Gunnhild Ironleaf", detail: "Name meaning 'ironleaf,' symbolizing strength and resilience.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Nanna Snowheart", detail: "Name meaning 'snowheart,' symbolizing a cold yet warm heart.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Runa Stormblade", detail: "Name meaning 'stormblade,' symbolizing a fierce and powerful weapon.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Kari Firestorm", detail: "Name meaning 'firestorm,' symbolizing fiery fury and intensity.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Hilda Iceclaw", detail: "Name meaning 'iceclaw,' symbolizing icy strength and sharpness.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Valkyrie Thunderglow", detail: "Name meaning 'thunderglow,' symbolizing the radiant power of thunder.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Gerd Frostshadow", detail: "Name meaning 'frostshadow,' symbolizing the dark and cold aspect of frost.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Sif Stormweaver", detail: "Name meaning 'stormweaver,' symbolizing mastery over storms.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Yrsa Iceborn", detail: "Name meaning 'iceborn,' symbolizing a strong connection to ice and cold.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Frigg Snowstorm", detail: "Name meaning 'snowstorm,' symbolizing a powerful and chaotic force of snow.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Solveig Ironrose", detail: "Name meaning 'ironrose,' symbolizing strength and beauty.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Freyja Frostfire", detail: "Name meaning 'frostfire,' symbolizing the combination of cold and fiery elements.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Helga Stormveil", detail: "Name meaning 'stormveil,' symbolizing a protective cover of storms.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Eira Icewind", detail: "Name meaning 'icewind,' symbolizing a cold and powerful breeze.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Valkyrie Frostfang", detail: "Name meaning 'frostfang,' symbolizing fierce and cold strength.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Ingrid Snowflake", detail: "Name meaning 'snowflake,' symbolizing delicate beauty and cold.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Asta Ironstar", detail: "Name meaning 'ironstar,' symbolizing strength and brilliance.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Nina Darkwind", detail: "Name meaning 'darkwind,' symbolizing mystery and power.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Thyra Frostsong", detail: "Name meaning 'frostsong,' symbolizing the harmony and cold beauty of frost.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Hilda Snowshadow", detail: "Name meaning 'snowshadow,' symbolizing the hidden aspects of snow.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Sunniva Iceheart", detail: "Name meaning 'iceheart,' symbolizing strength and cold-heartedness.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Gerd Thundershade", detail: "Name meaning 'thundershade,' symbolizing the darkness and power of thunder.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Brynhildr Stormveil", detail: "Name meaning 'stormveil,' symbolizing a protective cover against storms.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Eydis Frostwind", detail: "Name meaning 'frostwind,' symbolizing a cold and powerful breeze.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Vera Iceveil", detail: "Name meaning 'iceveil,' symbolizing a cold and mysterious cover.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Astrid Snowblade", detail: "Name meaning 'snowblade,' symbolizing a sharp and cold edge.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Luna Ironleaf", detail: "Name meaning 'ironleaf,' symbolizing strength and resilience with a touch of nature.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Freyja Icecloak", detail: "Name meaning 'icecloak,' symbolizing a cold and protective cover.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Nanna Stormlight", detail: "Name meaning 'stormlight,' symbolizing illumination amidst the storm.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Sif Darkstorm", detail: "Name meaning 'darkstorm,' symbolizing a powerful and mysterious storm.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Gunnhild Frostveil", detail: "Name meaning 'frostveil,' symbolizing a cold and protective cover.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Eira Snowshadow", detail: "Name meaning 'snowshadow,' symbolizing the hidden aspects of snow.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Yrsa Firestorm", detail: "Name meaning 'firestorm,' symbolizing fierce and fiery energy.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Hilda Stormcloak", detail: "Name meaning 'stormcloak,' symbolizing protection amidst storms.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Sigrun Snowveil", detail: "Name meaning 'snowveil,' symbolizing a cold and protective cover.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Runa Icewind", detail: "Name meaning 'icewind,' symbolizing a cold and powerful breeze.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Solveig Thundershade", detail: "Name meaning 'thundershade,' symbolizing the darkness and power of thunder.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Gerd Stormrider", detail: "Name meaning 'stormrider,' symbolizing mastery over storms.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Valkyrie Iceheart", detail: "Name meaning 'iceheart,' symbolizing cold-hearted strength.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Nina Frostshade", detail: "Name meaning 'frostshade,' symbolizing the hidden aspects of frost.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Brynhild Stormsong", detail: "Name meaning 'stormsong,' symbolizing a powerful and harmonious storm.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Thyra Iceveil", detail: "Name meaning 'iceveil,' symbolizing a cold and mysterious cover.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Hilda Frostshade", detail: "Name meaning 'frostshade,' symbolizing the hidden aspects of frost.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Freyja Darkveil", detail: "Name meaning 'darkveil,' symbolizing mystery and beauty.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Yrsa Snowcloak", detail: "Name meaning 'snowcloak,' symbolizing a protective cover against snow.", status: false, gender: "female", type: "norse_fantasy_name" },
      { name: "Bjorn Runescar", detail: "Name meaning 'runescar,' symbolizing a powerful mark of runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Eirik Runeforge", detail: "Name meaning 'runeforge,' symbolizing the crafting and creation of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Hakon Runeclaw", detail: "Name meaning 'runeclaw,' symbolizing the fierce and sharp power of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Thorvald Runestrike", detail: "Name meaning 'runestrike,' symbolizing a powerful blow infused with runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Ragnar Runeheart", detail: "Name meaning 'runeheart,' symbolizing the core strength and bravery of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Gunnar Runeveil", detail: "Name meaning 'runeveil,' symbolizing the hidden power and mystery of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Leif Runestone", detail: "Name meaning 'runestone,' symbolizing the enduring and ancient power of runic stones.", status: false, gender: "male", type: "runic_name" },
      { name: "Haldor Runeshadow", detail: "Name meaning 'runeshadow,' symbolizing the enigmatic and dark aspects of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Sigurd Runeaxe", detail: "Name meaning 'runeaxe,' symbolizing a weapon forged with runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Viggo Runesworn", detail: "Name meaning 'runesworn,' symbolizing a deep commitment to the power of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Jarl Runeblade", detail: "Name meaning 'runeblade,' symbolizing a sharp and powerful runic weapon.", status: false, gender: "male", type: "runic_name" },
      { name: "Odin Runesong", detail: "Name meaning 'runesong,' symbolizing the harmony and rhythm of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Rolf Runehammer", detail: "Name meaning 'runehammer,' symbolizing a heavy and powerful weapon imbued with runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Sven Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of strength and power from runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Baldur Runesword", detail: "Name meaning 'runesword,' symbolizing a weapon with runic enchantments.", status: false, gender: "male", type: "runic_name" },
      { name: "Kjetil Runebreaker", detail: "Name meaning 'runebreaker,' symbolizing the power to shatter runic defenses.", status: false, gender: "male", type: "runic_name" },
      { name: "Ragnar Runeclad", detail: "Name meaning 'runeclad,' symbolizing being protected by runic armor.", status: false, gender: "male", type: "runic_name" },
      { name: "Einar Runesmith", detail: "Name meaning 'runesmith,' symbolizing the craftsmanship and creation of runic artifacts.", status: false, gender: "male", type: "runic_name" },
      { name: "Thrain Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic power and mystery.", status: false, gender: "male", type: "runic_name" },
      { name: "Vagn Runeforge", detail: "Name meaning 'runeforge,' symbolizing the process of crafting runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Hrothgar Runeshield", detail: "Name meaning 'runeshield,' symbolizing protection and defense through runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Rune Darkrune", detail: "Name meaning 'darkrune,' symbolizing mysterious and shadowy runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Brynjar Runeclaw", detail: "Name meaning 'runeclaw,' symbolizing fierce strength and runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Jorund Runeheart", detail: "Name meaning 'runeheart,' symbolizing the core strength and bravery of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Sigvard Runestone", detail: "Name meaning 'runestone,' symbolizing the ancient and enduring power of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Harald Runestrike", detail: "Name meaning 'runestrike,' symbolizing a powerful runic strike.", status: false, gender: "male", type: "runic_name" },
      { name: "Ragnar Runewolf", detail: "Name meaning 'runewolf,' symbolizing a fierce and untamed runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Eirik Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Gunnar Runeshadow", detail: "Name meaning 'runeshadow,' symbolizing the dark and mysterious aspects of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Haldor Runesmith", detail: "Name meaning 'runesmith,' symbolizing the craft and creation of runic artifacts.", status: false, gender: "male", type: "runic_name" },
      { name: "Viggo Runeblade", detail: "Name meaning 'runeblade,' symbolizing a sharp and powerful runic weapon.", status: false, gender: "male", type: "runic_name" },
      { name: "Leif Runeclad", detail: "Name meaning 'runeclad,' symbolizing protection and strength through runic armor.", status: false, gender: "male", type: "runic_name" },
      { name: "Hakon Runeforge", detail: "Name meaning 'runeforge,' symbolizing the creation and crafting of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Thorvald Runeshadow", detail: "Name meaning 'runeshadow,' symbolizing the enigmatic and dark side of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Rolf Runeaxe", detail: "Name meaning 'runeaxe,' symbolizing a powerful weapon imbued with runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Sigurd Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic power and mystery.", status: false, gender: "male", type: "runic_name" },
      { name: "Baldur Runebreaker", detail: "Name meaning 'runebreaker,' symbolizing the power to break through runic defenses.", status: false, gender: "male", type: "runic_name" },
      { name: "Einar Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Jarl Runeforge", detail: "Name meaning 'runeforge,' symbolizing the craft and creation of runic artifacts.", status: false, gender: "male", type: "runic_name" },
      { name: "Gunnar Runeheart", detail: "Name meaning 'runeheart,' symbolizing the core strength and bravery of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Ragnar Runesong", detail: "Name meaning 'runesong,' symbolizing the harmonious and rhythmic power of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Vagn Runeclaw", detail: "Name meaning 'runeclaw,' symbolizing fierce and sharp runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Haldor Runeblade", detail: "Name meaning 'runeblade,' symbolizing a weapon with powerful runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Harald Runeveil", detail: "Name meaning 'runeveil,' symbolizing the hidden aspects of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Thrain Runeshield", detail: "Name meaning 'runeshield,' symbolizing protection through runic strength.", status: false, gender: "male", type: "runic_name" },
      { name: "Brynjar Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Jorund Runeheart", detail: "Name meaning 'runeheart,' symbolizing the core strength and bravery of runic power.", status: false, gender: "male", type: "runic_name" },
      { name: "Sigvard Runestone", detail: "Name meaning 'runestone,' symbolizing the enduring and ancient power of runes.", status: false, gender: "male", type: "runic_name" },
      { name: "Eirik Runeclad", detail: "Name meaning 'runeclad,' symbolizing protection through runic armor.", status: false, gender: "male", type: "runic_name" },
      { name: "Leif Runesmith", detail: "Name meaning 'runesmith,' symbolizing the craft and creation of runic artifacts.", status: false, gender: "male", type: "runic_name" },
      { name: "Astrid Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic strength and mystery.", status: false, gender: "female", type: "runic_name" },
    { name: "Sigrun Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Helga Runeheart", detail: "Name meaning 'runeheart,' symbolizing the core strength and bravery of runes.", status: false, gender: "female", type: "runic_name" },
    { name: "Brynhild Runeclaw", detail: "Name meaning 'runeclaw,' symbolizing fierce and sharp runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Eira Runesong", detail: "Name meaning 'runesong,' symbolizing harmony and rhythm through runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Gunnhild Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Nanna Runeclad", detail: "Name meaning 'runeclad,' symbolizing protection through runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Runa Runestone", detail: "Name meaning 'runestone,' symbolizing ancient and enduring runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Kari Runesworn", detail: "Name meaning 'runesworn,' symbolizing deep commitment to runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Hilda Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Freyja Runeshade", detail: "Name meaning 'runeshade,' symbolizing the mysterious and shadowy aspects of runes.", status: false, gender: "female", type: "runic_name" },
    { name: "Gerd Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden strength through runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Sif Runesong", detail: "Name meaning 'runesong,' symbolizing harmony and rhythm in runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Yrsa Runewind", detail: "Name meaning 'runewind,' symbolizing a powerful and cold breeze of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Frigg Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic strength and power.", status: false, gender: "female", type: "runic_name" },
    { name: "Solveig Runeheart", detail: "Name meaning 'runeheart,' symbolizing core strength and bravery in runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Freyja Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden strength and mystery in runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Helga Runesmith", detail: "Name meaning 'runesmith,' symbolizing the craft and creation of runic artifacts.", status: false, gender: "female", type: "runic_name" },
    { name: "Eira Runeclaw", detail: "Name meaning 'runeclaw,' symbolizing fierce and sharp runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Valkyrie Runeshadow", detail: "Name meaning 'runeshadow,' symbolizing the dark and mysterious aspects of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Ingrid Runeblade", detail: "Name meaning 'runeblade,' symbolizing a sharp and powerful runic weapon.", status: false, gender: "female", type: "runic_name" },
    { name: "Asta Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden strength through runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Nina Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Thyra Runeforge", detail: "Name meaning 'runeforge,' symbolizing the creation and crafting of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Hilda Runesworn", detail: "Name meaning 'runesworn,' symbolizing a deep commitment to runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Sunniva Runeheart", detail: "Name meaning 'runeheart,' symbolizing core strength and bravery through runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Gerd Runestone", detail: "Name meaning 'runestone,' symbolizing ancient and enduring runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Brynhild Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden strength and mystery.", status: false, gender: "female", type: "runic_name" },
    { name: "Eydis Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic strength and power.", status: false, gender: "female", type: "runic_name" },
    { name: "Vera Runewind", detail: "Name meaning 'runewind,' symbolizing a cold and powerful breeze of runic energy.", status: false, gender: "female", type: "runic_name" },
    { name: "Astrid Runeclaw", detail: "Name meaning 'runeclaw,' symbolizing fierce and sharp runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Luna Runeshade", detail: "Name meaning 'runeshade,' symbolizing the mysterious and shadowy aspects of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Freyja Runesmith", detail: "Name meaning 'runesmith,' symbolizing the craft and creation of runic artifacts.", status: false, gender: "female", type: "runic_name" },
    { name: "Nanna Runesong", detail: "Name meaning 'runesong,' symbolizing the harmony and rhythm of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Sif Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic strength and power.", status: false, gender: "female", type: "runic_name" },
    { name: "Gunnhild Runeheart", detail: "Name meaning 'runeheart,' symbolizing core strength and bravery in runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Eira Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Yrsa Runeshadow", detail: "Name meaning 'runeshadow,' symbolizing the dark and mysterious aspects of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Hilda Runeforge", detail: "Name meaning 'runeforge,' symbolizing the creation and crafting of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Sigrun Runesong", detail: "Name meaning 'runesong,' symbolizing harmony and rhythm through runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Runa Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden runic strength and mystery.", status: false, gender: "female", type: "runic_name" },
    { name: "Solveig Runeblade", detail: "Name meaning 'runeblade,' symbolizing a sharp and powerful runic weapon.", status: false, gender: "female", type: "runic_name" },
    { name: "Gerd Runeclad", detail: "Name meaning 'runeclad,' symbolizing protection through runic strength.", status: false, gender: "female", type: "runic_name" },
    { name: "Valkyrie Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden strength and mystery.", status: false, gender: "female", type: "runic_name" },
    { name: "Nina Runeheart", detail: "Name meaning 'runeheart,' symbolizing core strength and bravery in runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Brynhild Runescar", detail: "Name meaning 'runescar,' symbolizing a mark of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Thyra Runeshade", detail: "Name meaning 'runeshade,' symbolizing the mysterious and shadowy aspects of runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Hilda Runeveil", detail: "Name meaning 'runeveil,' symbolizing hidden strength through runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Freyja Runesworn", detail: "Name meaning 'runesworn,' symbolizing deep commitment to runic power.", status: false, gender: "female", type: "runic_name" },
    { name: "Yrsa Runeclaw", detail: "Name meaning 'runeclaw,' symbolizing fierce and sharp runic power.", status: false, gender: "female", type: "runic_name" }
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
const NorseNameGenerator = () => {
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

    const bgImage = "/Norse.jpg"
    const context = " Norse Name Generator"

    const Q1 = "What is a Norse Name Generator?"

    const A1 = 'A Norse Name Generator is an online tool that creates authentic Norse names inspired by history and mythology. It offers names rooted in ancient traditions.'
    
    const Q2 = "Are the names generated unique?"
    
    const A2 = 'Yes, the names generated are unique and crafted specifically for each use. The tool combines various elements of Norse language and culture to produce distinct names every time. Each name is designed to stand out while staying true to Norse traditions.'
    
    const Q3 = "Can I use the names for commercial purposes?"
    
    const A3 = "Yes, you can use the generated names for any commercial or non-commercial projects, including books, games, and other creative endeavors."
    
    const Q4 = "Is my data secure?"
    
    const A4 = "Yes, your data is secure. Our tool operates with strict privacy protocols to ensure that your information is protected. We do not store or share any personal data you provide while using the tool."
    
    const Q5 = "Do I need to create an account to use the generator?"
    
    const A5 = "No, you can use the basic features of the generator without creating an account. However, creating an account allows you to save your favorite names for future reference."

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
                            Random Norse Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Norse</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="viking_warrior_name">Viking Warrior</option>
                            <option value="norse_mythology_name">Norse Mythology</option>
                            <option value="norse_fantasy_name">Norse Fantasy</option>
                            <option value="runic_name">Runic</option>

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
                        Explore our Norse Name Generator, where you can access names inspired by Norse mythology and history. 
                        We have created our tool with precision to support various creative projects, whether you are writing a story set in the Viking Age or developing characters for a role-playing game.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Our generator is designed to provide authentic Norse names that reflect the rich cultural and historical context of the Norse people. 
                        By using our tool, you can easily find names that align with the themes and settings of your project, enhancing its authenticity.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Norse names carry significant historical and mythological weight, representing warriors, gods, and heroes from ancient sagas. 
                        Whether you need a name that conveys strength, wisdom, or mysticism, our tool offers a range of options tailored to fit your creative needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Norse Name Generator
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Our Norse Name Generator is easy and intuitive. Follow these steps to generate unique Norse names for your characters:
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
                            Select the gender for the Norse name, aligning with traditional Norse naming conventions.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2 - Select the Type
                            </h3>
                            <p>
                            Choose the type of Norse name you are interested in, such as historical, mythological, or inspired by Viking lore.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3 - Click on Generate
                            </h3>
                            <p>
                            Click the <b> "Generate"</b> button to produce a list of Norse names that match your criteria.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4 - Review Names and Their Meanings
                            </h3>
                            <p>
                            The names will be displayed on your screen. Hover over each name to get more details like its meaning, origin, and any historical or mythological significance.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="Norse1.webp"
                            alt="norse name generator"
                            className="w-[250px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="Norse2.jpg"
                            alt="norse name generator"
                            className="w-[260px] h-[300px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/norse name generator.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Norse Name Generator
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
                    Why Use Our Norse Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    We have kept our user's satisfaction our topmost priority. Use our Norse Name Generator without any hassle to create names rooted in Norse mythology. 
                    Scroll down to examine the tool's key features and discover how it addresses your project requirements. 
                    </p>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Explore the features to see how our generator can enhance your creative process.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Authenticity and Cultural Relevance
                                </h3>
                                <p>
                                The Norse Name Generator produces names derived from historical and mythological sources. 
                                This feature guarantees that users receive names with accurate historical and cultural significance. 
                                This makes it an invaluable resource for projects that demand precise cultural representation.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Inspiration for Storytelling
                                </h3>
                                <p>
                                The generated names serve as a foundation for character development. Our tool aids in constructing narratives that are both compelling and culturally resonant. 
                                Users can rely on the tool to provide names that evoke specific imagery and emotions. 
                                This functionality supports the creation of detailed, immersive worlds within any creative framework.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Versatility and Adaptability
                                </h3>
                                <p>
                                Our Norse Name Generator tool is engineered to generate names suitable for various applications, from literary works and video games to visual arts. 
                                The adaptable nature of the generated names ensures they can be seamlessly integrated into different creative contexts. 
                                Users benefit from a tool that meets diverse creative needs. This versatility enhances the tool’s utility across multiple domains.                    
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Time-Saving Efficiency
                                </h3>
                                <p>
                                The tool is designed to deliver results quickly, reducing the time spent on the naming process. 
                                Users can generate multiple names with a single command, streamlining the workflow and allowing for efficient project management. 
                                This feature is particularly beneficial for creators working under tight deadlines, as it minimizes the effort required to find suitable names.                        
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Enhanced Creativity
                                </h3>
                                <p>
                                By offering a wide array of name options, the tool stimulates creative thinking and opens up new possibilities for character and plot development. 
                                The names generated can inspire additional storylines, character traits, and world-building elements. 
                                This feature is essential for users looking to expand their creative output with minimal effort.                           
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Ease of Use
                                </h3>
                                <p>
                                The Norse Name Generator is designed with a user-friendly interface that simplifies the name-generation process. 
                                Users can quickly access the tool and generate names without needing to adjust complex settings. 
                                This straightforward approach allows for immediate application in various creative tasks. 
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="norse4.jpg"
                            alt="norse name generator with meaning"
                            class="w-[320px] my-[30px] h-[450px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="norse5.jpg"
                            alt="norse name generator with meaning"
                            class="w-[320px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
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

export default PrivacyPolicy;

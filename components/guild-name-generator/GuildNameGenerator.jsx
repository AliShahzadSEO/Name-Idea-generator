"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
  { name: "Ironclad Brotherhood", detail: "A clan built on strength and resilience, united like iron in the face of adversity.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Stormbreaker Tribe", detail: "A fierce tribe known for their ability to conquer any storm, both literal and metaphorical.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Darkfang Clan", detail: "A clan whose members are feared for their deadly fangs, moving in the shadows like hunters.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Thunderstrike Clan", detail: "A powerful clan that strikes like thunder, leaving destruction in their wake.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Bloodaxe Brotherhood", detail: "A brotherhood bonded by blood and battle, wielding their axes with unmatched ferocity.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Wolfhowl Tribe", detail: "A tribe that howls as one, channeling the strength and unity of wolves in every battle.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Stormwrought Clan", detail: "A clan forged in the heart of storms, their members unshaken by chaos or turmoil.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Fireclaw Brotherhood", detail: "A brotherhood whose claws are as fiery as their hearts, burning through any obstacle in their path.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Blackthorn Tribe", detail: "A tribe whose members are as sharp and dangerous as the blackthorn bush they are named after.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Valiant Heart Clan", detail: "A clan whose hearts are as valiant as their courage, never backing down from a challenge.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Ravenshadow Clan", detail: "A clan that thrives in darkness, with the stealth and cunning of ravens.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Dragonsteel Brotherhood", detail: "A brotherhood of unbreakable warriors, their strength like the steel of dragons.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Nightclaw Clan", detail: "A clan that strikes in the night with the stealth and precision of a clawed predator.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Grimstone Tribe", detail: "A tribe marked by their rugged survival instincts and hardened hearts, like stone.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Steelfang Brotherhood", detail: "A brotherhood whose members possess the strength of steel and the bite of fangs.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Wolfspine Clan", detail: "A clan known for their spine-tingling determination and loyalty, like the spine of a wolf.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Thunderfury Tribe", detail: "A tribe driven by the fury of thunder, capable of shaking the very ground they walk on.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Ashenclaw Brotherhood", detail: "A brotherhood born from the ashes of the past, their claws sharp and unyielding.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Darkthorn Clan", detail: "A clan that thrives in the shadows, with the piercing strength of thorns.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Emberstone Brotherhood", detail: "A brotherhood with the fiery power of embers, resilient and burning bright.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Ironfang Tribe", detail: "A tribe whose fangs are as strong as iron, unbreakable and unforgiving.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Thunderwolf Clan", detail: "A clan that harnesses the strength of both thunder and wolves, a force to be reckoned with.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Bloodstorm Brotherhood", detail: "A brotherhood forged in blood and storm, they leave chaos in their wake.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Frostfang Clan", detail: "A clan whose members' fangs are as cold and sharp as the frost that covers the earth.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Firebrand Tribe", detail: "A tribe that carries the fire of rebellion, fierce and unyielding.", status: false, gender: "Male", type: "Clan Guild" },
  { name: "Emberstorm Clan", detail: "A clan born from the fire and storm, strong and unstoppable in the face of adversity.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Ironrose Tribe", detail: "A tribe where the beauty of the rose meets the strength of iron, unbreakable and graceful.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Darkthorn Clan", detail: "A clan known for its deadly thorns, lurking in the shadows, waiting to strike.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Wolfshade Clan", detail: "A clan as elusive and powerful as wolves, moving with shadowy grace.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Blackwater Tribe", detail: "A tribe that thrives in the dark, murky waters, where danger lurks beneath the surface.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Frostbloom Clan", detail: "A clan whose beauty is as cold and rare as a blooming flower in the frost.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Stormbloom Tribe", detail: "A tribe that blooms in the storm, their power as fierce and unstoppable as the weather.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Fireheart Clan", detail: "A clan whose heart burns with the fierceness of flames, unyielding and passionate.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Ravenshade Clan", detail: "A clan that thrives in the shadows, their secrets hidden like ravens in the night.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Shadowleaf Tribe", detail: "A tribe whose members blend into the shadows, their presence as silent as the wind.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Flameweaver Clan", detail: "A clan that weaves the flames of power into their destiny, masters of fire and control.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Thunderbloom Clan", detail: "A clan that blooms with the fury of thunder, leaving a mark that echoes across the lands.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Ironthorn Tribe", detail: "A tribe that is as strong as iron and as sharp as the thorn of a wild rose.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Moonfire Clan", detail: "A clan whose power radiates like the fire of the moon, calming yet destructive.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Stormfury Clan", detail: "A clan filled with the fury of storms, leaving nothing standing in their wake.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Bloodbloom Tribe", detail: "A tribe with members as fierce as the bloom of a red flower in the blood of battle.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Silverclaw Clan", detail: "A clan that strikes with the precision and grace of silver claws, deadly and swift.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Ashenmoon Tribe", detail: "A tribe with an ethereal power, like the ashes of a moonlit fire, soft but ever-present.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Nightbloom Clan", detail: "A clan whose beauty is only revealed in the dark, like a flower that blooms under the moonlight.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Wildshade Clan", detail: "A clan that hides in the wilds, using the shade of the forest to protect and attack.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Emberthorn Tribe", detail: "A tribe whose thorns are as hot as embers, burning through any who dare to challenge them.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Darkbloom Clan", detail: "A clan where darkness and beauty intertwine, with a power that blooms like midnight flowers.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Frostsong Clan", detail: "A clan whose song is as cold and sharp as the winter winds, cutting through the silence.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Crimsonthorn Tribe", detail: "A tribe whose thorns are stained with the blood of their enemies, leaving a lasting scar.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Wolfsong Clan", detail: "A clan whose song is like the howl of wolves in the night, fierce and unyielding.", status: false, gender: "Female", type: "Clan Guild" },
  { name: "Moonshroud Clan", detail: "A clan shrouded in mystery and moonlight, with secrets hidden deep within.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Bloodthorn Tribe", detail: "A tribe whose thorns are as deadly as their hearts, fierce and unstoppable.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Stormwolf Clan", detail: "A clan born from the storm, with the spirit of wolves running wild through their veins.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Nightfire Clan", detail: "A clan whose fire burns brightest in the night, igniting their passion in the dark.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Thunderflame Tribe", detail: "A tribe whose power strikes with the force of thunder and the heat of flames.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Ashenclaw Clan", detail: "A clan whose claws are as sharp as ash, burning through anything that stands in their way.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Ironleaf Tribe", detail: "A tribe where iron meets nature, strong and unyielding in the face of any challenge.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Darkroot Clan", detail: "A clan whose roots run deep into the darkness, their power hidden in the shadows.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Emberfang Tribe", detail: "A tribe whose fangs are as hot as embers, leaving their mark on anything they touch.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Frostshadow Clan", detail: "A clan that moves like the frost, silent and deadly, leaving shadows in their wake.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Ravencall Clan", detail: "A clan that calls to the ravens, their cries signaling the coming of dark times.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Moonstone Tribe", detail: "A tribe as radiant and mysterious as the moonstone, casting their light in the darkness.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Blackstorm Clan", detail: "A clan that rises from the storm, their power as fierce and relentless as the black clouds.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Thunderstrike Tribe", detail: "A tribe whose strikes are as loud and powerful as thunder, leaving their mark on all they meet.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Wolfshade Clan", detail: "A clan that moves like wolves in the shadows, hunting their prey with silent precision.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Bloodclaw Tribe", detail: "A tribe whose claws are as red as blood, striking fear into anyone who crosses their path.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Ironthorn Clan", detail: "A clan whose thorns are made of iron, sharp and strong, leaving lasting scars.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Stormbloom Tribe", detail: "A tribe whose power blooms like a storm, fierce and beautiful in its destruction.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Nightshade Clan", detail: "A clan as deadly and mysterious as nightshade, their presence felt before seen.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Shadowfang Tribe", detail: "A tribe whose fangs are as sharp as shadows, lurking in the darkness to strike when least expected.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Emberthorn Clan", detail: "A clan whose thorns burn with the intensity of embers, never fading, always sharp.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Frostfang Tribe", detail: "A tribe whose fangs are as cold as ice, biting deep with a deadly chill.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Ironbloom Clan", detail: "A clan where iron and beauty bloom together, strong and ever-growing in their power.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Stormstrike Tribe", detail: "A tribe whose strikes are as powerful as the storm, leaving a path of destruction in their wake.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Darkflame Clan", detail: "A clan whose flames burn with darkness, igniting their power in the depths of the night.", status: false, gender: "Bisexual", type: "Clan Guild" },
  { name: "Blackstorm Squad", detail: "A squad known for their fierce and unyielding strength, emerging from the darkness like a storm.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Nightstrike Battalion", detail: "A battalion that strikes in the shadows, swift and deadly, with no mercy.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Ironfist Unit", detail: "An elite unit known for their unstoppable force and ironclad resolve.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Stormrider Force", detail: "A force that rides the storm, unstoppable and fierce, leaving destruction in their wake.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Firebeard Crew", detail: "A crew that burns with intensity, led by a fiery passion and determination.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Shadowclaw Taskforce", detail: "A taskforce whose stealth and precision are unmatched, striking from the shadows like claws.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Thunderfury Team", detail: "A team that brings the fury of thunder, striking fast and hard with unmatched power.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Deathbringers Squad", detail: "A squad known for their grim determination, bringing death and destruction wherever they go.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Ironwrought Battalion", detail: "A battalion forged in iron, with an indomitable will and unbreakable strength.", status: false, gender: "Male", type: "Team Guild" },
  { name: "The Ironguard", detail: "A legendary guard whose strength and resolve are as solid as iron, protecting all that is precious.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Valiant Vanguards", detail: "Vanguards of unmatched courage, leading the charge into battle with strength and honor.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Darkhammer Taskforce", detail: "A taskforce that wields the power of the dark hammer, crushing foes with unstoppable might.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Steelraven Crew", detail: "A crew whose precision and stealth rival that of a raven, their steel hearts cold and deadly.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Bloodhounds Team", detail: "A team known for their relentless pursuit, never resting until their prey is found.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Grimblade Battalion", detail: "A battalion with blades that are sharp as grim fate, cutting through enemies with precision and fear.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Froststrike Unit", detail: "An elite unit that strikes with the cold precision of frost, leaving enemies frozen in fear.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Stormguard Crew", detail: "A crew that stands firm against the storm, guarding all that needs protection with unyielding strength.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Ironheart Strikeforce", detail: "A strikeforce with hearts forged from iron, brave and unbreakable in the face of any challenge.", status: false, gender: "Male", type: "Team Guild" },
  { name: "The Vengeful Strike Team", detail: "A strike team driven by vengeance, relentless and swift in their quest for retribution.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Ashen Fury Battalion", detail: "A battalion fueled by the fury of ashes, rising from the remnants of battle to seek new conquests.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Emberstorm Unit", detail: "A unit as fierce as an emberstorm, their power unstoppable and always burning brightly.", status: false, gender: "Male", type: "Team Guild" },
  { name: "The Ironclaw Squad", detail: "A squad with claws as sharp as iron, never letting go until their target is crushed.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Stormhunter Taskforce", detail: "A taskforce whose hunters track and capture even the most elusive of storms.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Thunderborn Battalion", detail: "A battalion born from the thunder itself, their power is unmatched and their resolve, unwavering.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Crimsonstrike Crew", detail: "A crew whose strikes are as deadly as crimson blood, leaving no survivors in their wake.", status: false, gender: "Male", type: "Team Guild" },
  { name: "Nightstrike Squad", detail: "A squad that strikes from the shadows, swift and deadly, with precision and stealth.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Emberblade Crew", detail: "A crew known for their fiery resolve, wielding blades as hot as the ember they are forged from.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Stormwrought Taskforce", detail: "A taskforce shaped by the storm, resilient and fierce, always ready for any challenge.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Shadowmoon Team", detail: "A team that operates in the dark, blending with the shadows to strike under the light of the moon.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Ironclad Battalion", detail: "A battalion as tough as iron, their strength unmatched and their resolve unbreakable.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Thunderflare Taskforce", detail: "A taskforce that strikes like thunder, fierce and explosive, with the force of a lightning bolt.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Bloodfang Squad", detail: "A squad known for their ferocity, their fangs sharp and deadly like the beasts they resemble.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Frostbite Crew", detail: "A crew that freezes their enemies in their tracks, with a cold and biting determination.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Stormwatch Battalion", detail: "A battalion that stands vigilant against the storm, always prepared and watching for danger.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Crimsonfang Team", detail: "A team that strikes with the crimson fury of a fang, leaving destruction in their wake.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Ironheart Unit", detail: "An elite unit with hearts forged from iron, steadfast and unyielding in battle.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Ravenshadow Strikeforce", detail: "A strikeforce that moves in the shadows, as silent and deadly as the raven they are named after.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Moonfire Taskforce", detail: "A taskforce that strikes with the power of the moon and the intensity of fire, unstoppable and fierce.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Embermist Squad", detail: "A squad shrouded in mist and fire, their strikes as unpredictable as the embers they unleash.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Thunderstrike Crew", detail: "A crew that strikes with the power of thunder, their attacks as loud and devastating as a storm.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Darkthorn Battalion", detail: "A battalion with the sharpness and strength of a thorn, cutting down any who stand in their way.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Vengeful Wind Team", detail: "A team driven by vengeance, swift and unstoppable, like the winds they harness.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Shadowstrike Crew", detail: "A crew that strikes from the shadows, their moves quick and deadly, with no time for hesitation.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Wildheart Battalion", detail: "A battalion driven by wild courage, fierce and untamed, always charging forward into battle.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Blackthorn Strikeforce", detail: "A strikeforce as sharp and dangerous as the blackthorn, ready to pierce through any opposition.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Ironwood Taskforce", detail: "A taskforce as strong and durable as ironwood, unyielding in their pursuit of victory.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Stormfire Crew", detail: "A crew that combines the fury of a storm with the intensity of fire, unstoppable and powerful.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Frostclaw Strike Team", detail: "A strike team that attacks with the cold precision of frost and the sharpness of claws.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Bloodhowl Squad", detail: "A squad that howls with the fury of bloodlust, relentless and fierce in battle.", status: false, gender: "Female", type: "Team Guild" },
  { name: "Nightshade Taskforce", detail: "A taskforce that strikes under the cover of night, with the stealth and danger of the nightshade plant.", status: false, gender: "Female", type: "Team Guild" }, 
  { name: "Shadowstrike Crew", detail: "A crew that strikes from the shadows, quick and lethal, with precision and stealth.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Emberclaw Team", detail: "A team that combines the fierce power of fire with the deadly precision of claws.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Ironfang Battalion", detail: "A battalion with the strength of iron and the sharpness of fangs, unyielding in battle.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Stormfire Strikeforce", detail: "A strikeforce that moves with the fury of a storm and the heat of fire, unstoppable and fierce.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Bloodhowl Crew", detail: "A crew that howls with bloodlust, fierce and relentless, like the beasts they are inspired by.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Nightshade Taskforce", detail: "A taskforce that moves in the darkness, swift and silent like the nightshade plant.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Darkstorm Squad", detail: "A squad that brings the chaos of a dark storm, fierce and unpredictable.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Thunderthorn Unit", detail: "A unit that strikes with the power of thunder and the sharpness of a thorn, quick and deadly.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Ironheart Crew", detail: "A crew with hearts forged from iron, their resolve unbreakable and their strength unmatched.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Stormblade Taskforce", detail: "A taskforce that cuts through the chaos of battle with blades as sharp as a storm's edge.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Emberstrike Team", detail: "A team that strikes with the burning intensity of ember, fierce and unrelenting.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Blackthorn Legion", detail: "A legion that fights with the strength of blackthorn, sharp and unforgiving in every battle.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Firefury Crew", detail: "A crew that strikes with the fury of fire, relentless and unstoppable, igniting everything in their path.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Ironclad Squad", detail: "A squad with unbreakable resolve and unmatched strength, like iron forged in the heat of battle.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Bloodbloom Battalion", detail: "A battalion that blooms with the intensity of blood, fierce and ready to fight for victory.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Stormhunter Team", detail: "A team that hunts with the ferocity of a storm, swift and relentless in pursuit of their enemies.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Frostfang Crew", detail: "A crew that strikes with the cold precision of frost and the sharpness of fangs, unrelenting and deadly.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Valiant Heart Unit", detail: "An elite unit with hearts full of courage, they charge into battle with unwavering valor.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Moonfire Squad", detail: "A squad that strikes with the brilliance of the moon and the intensity of fire, fierce and unstoppable.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Nightfang Team", detail: "A team that moves in the dark, with the speed and sharpness of a fang, swift and deadly.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Emberbloom Taskforce", detail: "A taskforce that blooms with fiery intensity, igniting the battlefield with their explosive force.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Froststrike Crew", detail: "A crew that strikes with the chilling precision of frost, their attacks cold and deadly.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Thunderclaw Team", detail: "A team with the ferocity of thunder and the sharpness of claws, striking with unrelenting force.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Grimfang Strikeforce", detail: "A strikeforce that moves with the grim determination of a fang, swift and lethal.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Darkbloom Battalion", detail: "A battalion that blooms in darkness, fierce and ready to strike at any moment.", status: false, gender: "Bisexual", type: "Team Guild" },
  { name: "Brotherhood of Iron", detail: "A brotherhood bound by iron, their strength unyielding and their unity unbreakable.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Crimson Legion", detail: "A legion that fights with the fierce intensity of crimson flames, unstoppable in their mission.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Dark Alliance", detail: "An alliance formed in the shadows, united by a common goal and a thirst for power.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Shadow Vanguard", detail: "A vanguard that strikes from the shadows, swift and lethal in their pursuit of victory.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "Legion of Thunder", detail: "A legion with the power and fury of thunder, devastating and relentless on the battlefield.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Bloodstone Collective", detail: "A collective formed from the power of bloodstone, uniting those with a shared thirst for conquest.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Emberwatch", detail: "A faction that watches over the embers of war, their vigilance and strength unmatched.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Frostclaw Empire", detail: "An empire built on the cold strength of frost and the deadly precision of claws.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Iron Brotherhood", detail: "A brotherhood forged from iron, bound by loyalty and unyielding in the face of adversity.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Firestorm Dominion", detail: "A dominion ruled by the chaos of firestorms, their strength overwhelming and their rule unchallenged.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Steel Order", detail: "An order of warriors as strong as steel, disciplined and unyielding in battle.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Black Legion", detail: "A legion draped in the darkness of night, their movements swift and deadly, their presence fearsome.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Thunderwolves", detail: "A pack of fierce warriors with the power of thunder and the strength of wolves, unstoppable together.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Darkfang Dominion", detail: "A dominion ruled by darkfangs, their strength and cunning unmatched in the world of warfare.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Stormfury Collective", detail: "A collective driven by the fury of storms, their actions unpredictable and devastating.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Ashenborn", detail: "A faction born from the ashes, rising from defeat to bring about a reign of power.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Valiant Empire", detail: "An empire built on the valiant hearts of its warriors, noble and strong in the face of all odds.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Ironclad Faction", detail: "A faction with the strength and resilience of iron, their forces unbreakable and their resolve unwavering.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Nightforge", detail: "A faction forged in the night, their strength hidden in shadows and their power in secrecy.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Stormwind Dominion", detail: "A dominion ruled by the wind and the storm, swift and untamed in their conquests.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Fireclaw Clan", detail: "A clan with the deadly combination of fire and claws, fierce and unstoppable in their pursuit of dominance.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Blackthorn Faction", detail: "A faction with the strength of blackthorn, their resolve sharp and their power unyielding.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Vengeful Horde", detail: "A horde driven by vengeance, their rage and power unmatched on the battlefield.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Stormbringers", detail: "A faction that brings the storm with them, fierce and unstoppable in their conquest of all they desire.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Crimson Tide", detail: "A tide of crimson fury, sweeping over the battlefield, leaving nothing but destruction in their wake.", status: false, gender: "Male", type: "Faction Guild" },
  { name: "The Darkveil Collective", detail: "A collective bound by the darkness, united in secrecy and power.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Ironheart Dominion", detail: "A dominion forged in the fires of iron, their hearts unyielding and their resolve strong.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Moonstone Order", detail: "An order that follows the path of the moon, their power drawn from the celestial light.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Stormforge Faction", detail: "A faction shaped by the storm, their power fierce and their ambitions untamed.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Fireblossom Collective", detail: "A collective of fiery hearts, their power blossoming like flames in the dark.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Shadowfang Dominion", detail: "A dominion ruled by shadow and fang, swift and deadly in all their endeavors.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Ravenshadow Faction", detail: "A faction draped in shadow, their movements swift and their strike decisive.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Ashen Clan", detail: "A clan born from the ashes, rising from destruction to bring forth new power.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Emberwatch Order", detail: "An order that watches over the embers, ensuring the flames of power never fade.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Blackmoon Dominion", detail: "A dominion forged under the black moon, where secrets thrive in darkness.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Frostbloom Faction", detail: "A faction whose beauty is as cold as frost, their power as fragile as a blooming flower.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Thunderfire Collective", detail: "A collective with the fury of thunder and the heat of fire, unstoppable in their pursuit of dominance.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Crimsonthorn Dominion", detail: "A dominion ruled by the sharpness of crimson thorns, their power as deadly as it is beautiful.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Vengeful Sisters", detail: "A faction united by vengeance, their power fueled by the need for retribution.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Stormclaw Faction", detail: "A faction driven by the fury of storms and the deadly power of claws.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Bloodmoon Collective", detail: "A collective that rises with the blood-red moon, their power linked to the cycle of life and death.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Ironbloom Dominion", detail: "A dominion that flourishes with the strength of iron and the beauty of blooming flowers.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Shadowclaw Order", detail: "An order driven by the darkness and the sharpness of claws, quick and deadly in every action.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Nightmist Faction", detail: "A faction that thrives in the mist of night, their power hidden in the shadows.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Ironflower Collective", detail: "A collective forged in the strength of iron, blooming with the beauty of wildflowers.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Emberbloom Dominion", detail: "A dominion that blooms like embers, their power growing ever brighter as they rise.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Stormwhisper Faction", detail: "A faction that whispers like the storm, their actions unpredictable and unstoppable.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Darkspire Collective", detail: "A collective built on the strength of dark spires, their power rising like towers of shadow.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Frostshroud Faction", detail: "A faction that cloaks itself in the frost, their movements cold and precise.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Bloodthorn Dominion", detail: "A dominion ruled by the sharpness of bloodthorns, their power rooted in strength and vengeance.", status: false, gender: "Female", type: "Faction Guild" },
  { name: "The Moonfire Collective", detail: "A collective that harnesses the power of the moon and the fire within, combining celestial beauty with fierce strength.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Nightclaw Dominion", detail: "A dominion ruled by the shadow and the deadly claws of the night, their power swift and unyielding.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Shadowfang Order", detail: "An order shrouded in shadow, their claws as sharp as their resolve, they strike from the darkness.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Stormborn Faction", detail: "A faction born from the storm, their power as unpredictable and fierce as the tempest itself.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Fireclaw Dominion", detail: "A dominion whose power lies in the fire and claws, burning through all that stands in their way.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Emberveil Collective", detail: "A collective that thrives in the veil of embers, their power smoldering and ready to ignite.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Blackthorn Empire", detail: "An empire ruled by the sharpness of black thorns, their strength as unyielding as the thorns themselves.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Ironheart Clan", detail: "A clan forged with iron hearts, their resolve strong and unbreakable in the face of adversity.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Nightwatch Faction", detail: "A faction that watches over the night, their vigilance unmatched as they guard the shadows.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Bloodthorn Empire", detail: "An empire built upon the sharpness of bloodthorns, their power drawn from the strength of their ancestors.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Frostmoon Collective", detail: "A collective born under the frost and moonlight, their power as cold as it is ethereal.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Thunderfury Order", detail: "An order driven by the fury of thunder, their strength is as loud as it is destructive.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Crimsonstone Dominion", detail: "A dominion founded upon crimson stones, their power rooted in the blood of their enemies.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Stormfire Empire", detail: "An empire where storm and fire combine, their destructive force unmatched in the world.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Valiant Faction", detail: "A faction forged in valor, their courage and strength making them a force to be reckoned with.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Darkfang Collective", detail: "A collective united by the darkness and sharp fangs, their power hidden in the shadows.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Ironstorm Dominion", detail: "A dominion forged in the heart of the storm, their iron will unshakable in any battle.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Bloodborn Faction", detail: "A faction with power born from blood, their legacy is marked by the strength of their ancestors.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Ravenstone Collective", detail: "A collective where darkness meets strength, their power as unyielding as the raven's shadow.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Emberclaw Empire", detail: "An empire built with the heat of ember and the sharpness of claws, they strike fear into all.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Moonthorn Order", detail: "An order that blends the serenity of the moon with the sharpness of thorns, their power subtle yet deadly.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Blackfire Faction", detail: "A faction born from the depths of black fire, their destructive power burns through all.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Shadowfell Dominion", detail: "A dominion ruled by shadow and the will of darkness, their power emerges from the void.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Frostclaw Empire", detail: "An empire that combines the cold of frost with the ferocity of claws, they rule with icy strength.", status: false, gender: "Bisexual", type: "Faction Guild" },
  { name: "The Stormshadow Collective", detail: "A collective where the storm meets the shadow, their power fierce and swift.", status: false, gender: "Bisexual", type: "Faction Guild" },
]

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
    name: "Drow Name Generator",
    pic: "/drowname.webp",
    link: "https://www.nameideagenerator.com/drow-name-generator",
},
{
    name: "Wizard Name Generator",
    pic: "/wizards-wizard-name-ideas.webp",
    link: "https://www.nameideagenerator.com/wizard-name-generator",
},
];

const GuildNameGenerator = () => {
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
  
const bgImage = "/guild-name-generator.jpg"
const context = "Guild Name Generator with Meaning Tool"
const Q1 = "How does the Guild Name Generator work?"
const A1 = "The Guild Name Generator uses advanced algorithms to generate unique names based on your selected preferences, such as gender, category (clan, team, or faction), and theme. Simply input your choices, and the tool will instantly provide creative and meaningful name suggestions."

const Q2 = "Can I Customize Guild Names By Gender and Category?"
const A2 = "Yes, the generator allows you to customize names by selecting gender (male, female, bisexual) and category (clan, team, or faction). You can also choose themes to ensure the names fit your guild’s identity."

const Q3 = "Is the Guild Name Generator free to use?"
const A3 = "Yes, the Guild Name Generator is completely free! You can generate and save as many names as you like without any charges."

const Q4 = "Are the generated guild names meaningful?"
const A4 = "Absolutely! Each generated name comes with a meaningful backstory that adds personality and depth to the name. This ensures your guild name not only sounds great but also carries significance."

const Q5 = "Can I use the Guild Name Generator for different types of groups?"
const A5 = "Yes, the generator is versatile and can be used to create names for a variety of group types, including clans, teams, and factions. Whether you're forming a competitive team or an epic faction, the tool provides tailored options for every need."
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
        <a href="/guild-name-generator" className="hover:underline text-[#343a40]">Guild Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Guild Name Generator With Meaning
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
              <option value="female">bisexual</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Guild Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Clan Guild">Clan</option>
              <option value="Team Guild">Team</option>
              <option value="Faction Guild">Faction</option>
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
        <div className="w-[80%] mx-auto ">
          <div className="py-[40px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            What is a Guild Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Here's what makes the Guild Name Generator an essential tool for gamers and creators. It allows you to craft unique names that represent the identity and spirit of your guild. 
            Whether you’re organizing an adventurers’ team or forming a legendary faction, this tool delivers endless name ideas tailored to your preferences.
            <br />
            You must understand the power of a great guild name. 
            It inspires camaraderie among members and sets the tone for your group’s personality. This generator ensures your guild name is memorable and impactful.
            </p>
            
          </div>
        </div>
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use the Guild Name Generator?
            </h2>
            <hr />
            <br />
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Quick and Easy Name Generation
            </h3>
            <p className="text-left mt-[10px]  py-[10px] text-[#343a40]">
            It is difficult to brainstorm the perfect guild name under pressure. 
            The Guild Name Generator simplifies the process by offering instant suggestions based on your preferences. 
            You can focus more on your guild’s purpose and less on naming challenges.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Customizable Options for Every Need
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            You must have a name that reflects your guild’s unique identity. 
            The generator lets you select gender, category, and theme to create personalized names. 
            This flexibility ensures every name resonates with your vision.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Perfect for Gamers and Creators
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            It provides tailored solutions for players forming teams in MMORPGs, writers developing fantasy worlds, or D&D enthusiasts crafting campaigns. 
            The tool is versatile and suitable for any creative purpose.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Save Time and Effort
            </h3>
            <p className="text-left mt-[10px] text-[#343a40]">
            Crafting the right name can take hours, but this tool delivers results in seconds. You will save time while still ensuring your guild’s name stands out.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use Our Guild Name Generator Tool
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Let’s show you how to use our online Guild name generator to follow some simple steps.
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Select Guild Gender<b>  (Male, Female, Bisexual) </b>
              </h3>
              <p>
              It all starts with choosing the gender that best represents your guild. Options include male, female, and bisexual guild names, giving you the flexibility to match your vision.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Guild Category <b>(Clan, Team, or Faction)</b>
              </h3>
              <p>
              You must decide whether your guild belongs to a clan, team, or faction. Each category provides unique inspiration and character for your guild.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b> for Unique Names
              </h3>
              <p>
              Once your preferences are set, the tool generates names instantly. Scroll through the suggestions and pick a name that resonates most with your guild’s purpose.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Review Names and Their Meanings
              </h3>
              <p>
              The names will be displayed on your screen. Hover over each name to get more details like its meaning, origin, and the mythology behind it, aiding in your selection process.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="male-guild-name-generator.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="female-guild-name-generator.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/world-of-warcraft-banner-2.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Guild Name Generator
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
          <b> Unique Features of the Guild Name Generator </b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Customizable by Gender
            </h3>
            <p>
            You can select guild names tailored to male, female, or bisexual groups. 
            Each option reflects unique characteristics and ensures the name aligns with your guild's identity.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Tailored to Guild Type
            </h3>
            <p>
            The tool provides options for clans, teams, and factions, making it versatile for various group types. 
            Whether you need a fierce clan name or a heroic team identity, this generator has you covered.            
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Names with Meaning and Depth
            </h3>
            <p>
            Each name comes with a creative and meaningful backstory. This feature adds personality and relevance to your guild name, making it stand out in storytelling or gaming contexts.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Quick and Reliable Suggestions
            </h3>
            <p>
            You will receive instant name suggestions that meet your specific requirements. The generator saves time while delivering high-quality, memorable results.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Guild Name Categories and Ideas</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
            By Gender
            </h3>
            <p> <b>Male Guild Names: </b>
            It’s easy to find bold and powerful names like Shadow Reavers, Crimson Guardians, or Iron Knights.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Female Guild Names: </b>
            Beautiful and fierce names such as Valkyrie Syndicate, Moonlit Sisters, or Thornweavers reflect strength and elegance.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Bisexual Guild Names: </b>
            Inclusive and versatile names like Mystic Alliance, Eternal Syndicate, or Dawnseekers suit diverse groups.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
            By Category
            </h3>
            <p> <b>Clan Names: </b>
            It is essential to choose names that unite members, such as Dragonblood Clan, Wolfborn Clan, or Iron Oath.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Team Names: </b>
            Dynamic options like Phoenix Squad, Arcane Blades, or Stormbreakers make your team stand out.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Faction Names: </b>
            Strong, unified names like Voidwalkers, The Silver Accord, or Obsidian Pact are perfect for factions.
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
            Why Guild Names Matter
            </h2>
            <hr />
            <br />
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            The Foundation of Your Guild’s Identity
            </h3>
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            A guild name is more than just a title—it represents the essence of your group. 
            Whether you're creating a team for an online game, a faction for a tabletop RPG, or a creative collective, your guild name will set the tone for everything you stand for.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Fostering Unity and Camaraderie
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            A strong, meaningful guild name brings members together. 
            It creates a sense of belonging and helps forge bonds that strengthen teamwork. 
            When your guild name carries significance, it inspires everyone to embody the values it represents.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Standing Out in a Crowded World
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            A unique and memorable guild name helps your group stand out. 
            In competitive online games or creative communities, a powerful name will make your guild more recognizable, 
            attracting new members and ensuring your group leaves a lasting impression.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Building a Legacy
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            A great guild name goes beyond the present moment—it creates a legacy. 
            It’s a symbol of your guild’s journey, values, and history, carrying weight that lasts beyond individual campaigns or gaming sessions.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            The First Step Toward an Unforgettable Identity
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Choosing the right guild name is crucial to defining who you are and what you represent. 
            Our Guild Name Generator is designed to help you find that perfect name quickly, ensuring you start your guild’s journey with an unforgettable identity.
            </p>
            <br />
            <hr />
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[60vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Guild Name Ideas by Gender and Category
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Male Drow Names
              </h3>
              <p>
              <b>Clan Names</b>
              <ul>
              <li><b>- Iron Wolf Clan</b>(Represents strength, resilience, and unity like a pack of wolves)</li>
              <li><b>- Dragonblood Brotherhood</b> (Symbolizes mythical courage and powerful heritage)</li>
              <li><b>- Thunderblade Clan</b> (Evokes the might of thunder and sharpness of a blade)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Team Names</b>
              <ul>
              <li><b>- Steel Vanguard</b>(Signifies an unbreakable front line of warriors)</li>
              <li><b>- Shadow Crusaders</b> (Reflects stealth and a relentless pursuit of justice)</li>
              <li><b>- Flameborn Squad</b> (Represents fiery passion and unstoppable determination)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Faction Names</b>
              <ul>
              <li><b>- Obsidian Order</b>(Suggests a dark, mysterious, and elite faction)</li>
              <li><b>- Crimson Reapers</b> (Conveys a sense of danger and ruthless efficiency)</li>
              <li><b>- Voidwalkers Alliance</b> (Implies mastery over the unknown and the void)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="guild-wars-2-charr-fiery-art-v9dv6jnc7ru3vciw.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[320px] my-[20px] h-[350px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <br />
      <hr /> 
      <div className="w-[80%] mx-auto text-[#343a40] my-[40px] h-[60vh]">
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Female Guild Names
              </h3>
              <p>
              <b>Clan Names</b>
              <ul>
              <li><b>- Moonlit Sisters</b>(Represents elegance, mystery, and unity under the moon)</li>
              <li><b>- Thornweaver Clan</b> (Reflects beauty entwined with fierce protection)</li>
              <li><b>- Sapphire Vipers</b> (Evokes a sense of grace with a deadly edge)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Team Names</b>
              <ul>
              <li><b>- Valkyrie Blades</b>(Represents warrior women of myth with unyielding strength)</li>
              <li><b>- Phoenix Queens</b> (Symbolizes rebirth, resilience, and leadership)</li>
              <li><b>- Starbound Warriors</b> (Reflects aspirations to reach greatness among the stars)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Faction Names</b>
              <ul>
              <li><b>- Mystic Covenant</b>(Suggests a secretive and magical alliance)</li>
              <li><b>- Silver Arbiters</b> (Implies justice and wisdom wrapped in nobility)</li>
              <li><b>- Twilight Shadows</b> (Represents a balance between light and darkness)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="HD-wallpaper-eye-of-the-north-games-female-bear-video-games-guild-wars-warrior-mountains-weapon-armour.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[320px] my-[20px] h-[350px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
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
          transition={{ duration: 0.5, delay:  0.25 }}
          className="flex items-center flex-col gap-6"
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

export default GuildNameGenerator;

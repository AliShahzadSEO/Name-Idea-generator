"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
  { name: "Captain Blackbeard", detail: "A legendary pirate known for his fearsome appearance and ruthless tactics.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Bartholomew Graves", detail: "A pirate notorious for his grim demeanor and deadly skills.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Redbeard McHale", detail: "Famous for his fiery red beard and notorious raids along the coast.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "William 'Stormy' Smith", detail: "A pirate whose name was feared due to his control of the seas during storms.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Henry 'Sea Wolf' Carver", detail: "A ruthless pirate captain, feared by all who sailed the high seas.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Elias Crow", detail: "Known for his cunning and his loyalty to no one but himself.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "James 'Ironclad' Drake", detail: "A pirate with a reputation for invincibility, his ships were known to be impregnable.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Benjamin 'Dagger' Reed", detail: "A feared pirate with a quick hand and an even quicker blade.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Edward 'Cutthroat' Jennings", detail: "A pirate with a savage reputation, known for his brutal attacks.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Thomas 'Old Salt' Gunn", detail: "A seasoned pirate who has sailed the seas for decades, known for his old-school ways.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Samuel Blackwater", detail: "A pirate whose name strikes fear into anyone who dares sail near the coast.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Oliver 'Shark' Thorne", detail: "A pirate feared for his ruthless attacks and his predatory nature.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "George 'Sea Devil' Thornfield", detail: "A pirate with a reputation for striking fear into the hearts of sailors.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Jack 'Sea King' Roberts", detail: "A pirate captain known for his dominance of the seas and his leadership skills.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Francis 'The Marauder' Avery", detail: "A pirate known for his violent raids and plundering of merchant ships.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "William 'Wicked' Shaw", detail: "A pirate feared for his cunning and evil deeds on the high seas.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Nathaniel 'Barbossa' Flint", detail: "A pirate whose name is associated with legendary battles and treasure hunts.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Joshua 'Razor' Holt", detail: "A pirate who is as deadly as the blade he wields, known for his speed and precision.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Peter 'Whiskers' Drake", detail: "A pirate known for his distinctive facial hair and merciless ways.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Hugh 'Bonecrusher' McCoy", detail: "A fearsome pirate known for his brutal tactics and terrifying presence.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Richard 'Bloody' Pike", detail: "A pirate whose bloody battles left a trail of fear in his wake.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Edward 'Nightmare' Callahan", detail: "A pirate whose fearsome reputation was enough to haunt the nightmares of many.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Gregory 'Iron Fist' Harrow", detail: "A pirate with a reputation for strength and unyielding toughness.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Charles 'Sharkbait' Masters", detail: "A pirate with a reputation for outsmarting his enemies and escaping tight situations.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Bernard 'Grim' Stark", detail: "A pirate captain known for his grim demeanor and ruthless ways.", status: false, gender: "Male", type: "Traditional Pirate" },
  { name: "Anne 'The Viper' Bonny", detail: "A notorious female pirate, known for her deadly strikes and ruthless nature.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Grace 'Black Widow' Reed", detail: "A feared pirate with a reputation for outwitting and eliminating her enemies.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Mary 'Red Sky' O’Malley", detail: "A pirate who became a legend after her ship sailed through storms and skies of blood-red hue.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Charlotte 'Iron Heart' West", detail: "Known for her unyielding courage and tactical genius, feared by pirates and naval forces alike.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Isabella 'Stormbreaker' Phelps", detail: "A pirate captain whose battles were as fierce as the storms she sailed through.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Evelyn 'Raven' Green", detail: "A mysterious pirate known for her stealth and ability to disappear without a trace.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Sarah 'Siren' Avery", detail: "A pirate with a voice that could lure sailors to their doom, making her both feared and admired.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Beatrice 'Sea Serpent' Moreau", detail: "Known for her deadly reputation and swift attacks that struck like the mythical sea serpent.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Catherine 'Silver' Drake", detail: "A pirate with a reputation for her agility and her signature silver-plated cutlass.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Eliza 'Cutlass' Ward", detail: "Feared for her skill with a cutlass and her willingness to fight to the death.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Abigail 'Wildwind' Hunt", detail: "A pirate known for her swift, unpredictable raids, like a wind that could not be contained.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Margaret 'Darkwave' Rivers", detail: "Her name struck fear into the hearts of sailors, known for her ruthless ways and dominance on the water.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Elizabeth 'Wraith' Blake", detail: "A ghostly pirate who struck fear with her stealth and ghostly presence.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Sophie 'Sea Ghost' Black", detail: "Known for her eerie silence and deadly raids, she was a pirate who haunted the seas.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Frances 'Bloodsail' Crosby", detail: "A pirate feared for her blood-red sails and her merciless raids on unsuspecting ships.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Clara 'The Phantom' Stroud", detail: "A pirate who seemed to vanish into thin air, leaving only her legend behind.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Caroline 'Tempest' Blackwood", detail: "A fierce pirate known for her fiery temper and the storms that seemed to follow her.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Violet 'Shadow' Harrison", detail: "A pirate who moved like a shadow, always lurking and waiting for the perfect moment to strike.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Maria 'Nightstorm' Byrd", detail: "A pirate feared for her ability to strike under the cover of night, bringing destruction with every storm.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Emily 'Pirate Queen' Brooks", detail: "A legendary pirate queen whose rule was as feared as it was respected.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Hannah 'Bloodmoon' Graves", detail: "A pirate whose raids under the blood-red moon became the stuff of legend.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Annabelle 'Whirlpool' Masters", detail: "A pirate known for her ability to create chaos, much like a powerful whirlpool swallowing ships whole.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Victoria 'Black Fang' York", detail: "Feared for her ferocity and cunning, with a reputation for her deadly attacks on her enemies.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Charlotte 'Whipstorm' Graves", detail: "Known for her skill with a whip and her ability to create a storm of chaos on her enemies.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Josephine 'The Flame' Fox", detail: "A fiery pirate whose passion for adventure and combat made her a legendary figure on the seas.", status: false, gender: "Female", type: "Traditional Pirate" },
  { name: "Morgan 'Ironclad' Grey", detail: "A pirate known for their indestructible will and relentless pursuit of treasure.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Quinn 'Shark' Steele", detail: "A feared pirate with a ruthless reputation, known for their shark-like instincts.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Rowan 'Blackheart' Riddle", detail: "A pirate with a dark past and a heart as cold as the sea, striking fear into enemies.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Finley 'Whisper' Crow", detail: "A stealthy pirate who strikes silently, leaving only whispers of their presence.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Parker 'Dagger' Storm", detail: "A pirate known for their quick strikes and deadly accuracy, like a dagger in a storm.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Sloane 'Grim' Vance", detail: "A pirate whose reputation for death and destruction follows them wherever they go.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Blake 'Stormrage' Hunt", detail: "A fierce pirate whose rage is as uncontrollable as a raging storm.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Cassidy 'Cutthroat' Rivers", detail: "Known for their ruthless nature, cutting down anyone who stands in their way.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Riley 'Bloodshot' Vixen", detail: "A pirate with eyes as wild as the ocean, known for their deadly sharpshooting skills.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Jordan 'Silverthorn' Red", detail: "A pirate whose reputation is as sharp as a thorn and as valuable as silver.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Avery 'Wraith' Ashford", detail: "A ghostly figure on the seas, feared for their ability to strike without being seen.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Hunter 'Raven' Oak", detail: "A pirate whose sharp instincts are as keen as a raven's, always hunting for their next prey.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Riley 'Darkwave' Swan", detail: "Known for creating chaos on the seas like a dark wave, always unpredictable and dangerous.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Drew 'Nightshade' Bennett", detail: "A pirate whose presence is as poisonous as the nightshade plant, deadly to all who cross them.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Jaden 'Bones' Knight", detail: "A pirate feared for their ruthlessness, known to leave a trail of bones in their wake.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Logan 'Ironfist' Redd", detail: "A pirate with an iron will and an unbreakable grip on power, feared by all who oppose them.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Sawyer 'Skullcrusher' Black", detail: "A brutal pirate known for crushing enemies' skulls and taking no prisoners.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Skyler 'Razorwind' Byrd", detail: "A pirate who moves with the speed and sharpness of a razor, cutting through anything in their path.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Ash 'Sea Phantom' Vaughn", detail: "A ghostly presence on the sea, with a reputation for appearing and disappearing without a trace.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Avery 'Stormbringer' Hawk", detail: "A pirate who brings storms with them, feared for their ability to summon chaos on the seas.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Emerson 'Hellfire' Finch", detail: "A pirate whose temper is as fiery as hell itself, wreaking destruction wherever they go.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Morgan 'Tempest' Stone", detail: "A pirate whose wrath is as fierce and unrelenting as a tempest, devastating everything in its path.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Cameron 'Sea Ghost' Ash", detail: "A pirate who haunts the seas like a ghost, feared for their ability to strike from the shadows.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Taylor 'Bloodspike' Reed", detail: "A pirate known for their deadly, blood-spike attacks, leaving only carnage behind.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Phoenix 'Whirlwind' Hunter", detail: "A pirate whose fury is like a whirlwind, devastating everything in its path.", status: false, gender: "Unisex", type: "Traditional Pirate" },
  { name: "Ragnar 'Bloodsail' Thorpe", detail: "A feared pirate whose bloodstained sails strike terror into all who see them.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Victor 'The Vicious' Dread", detail: "A pirate known for their viciousness and cruelty, leaving a legacy of dread wherever they go.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Blackbeard 'The Terror' Howell", detail: "A legendary pirate whose very name invokes terror on the seas.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Jack 'Doom Bringer' McCray", detail: "A pirate who brings doom to all who cross their path, leaving nothing but destruction in their wake.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Edward 'Vile' Thorn", detail: "A pirate feared for their vile nature, notorious for committing unspeakable acts.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Marcus 'Iron Fang' Mortar", detail: "A pirate with an iron will and an even fiercer bite, feared for their relentless pursuit of power.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Roland 'Nightkiller' Darkwater", detail: "A pirate who strikes under the cover of night, known for their deadly, silent attacks.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Solomon 'Bloodshot' Black", detail: "A pirate whose eyes are as cold and deadly as their bloodshot gaze.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Hector 'Sea Reaper' Hawk", detail: "A pirate with a reputation for reaping souls at sea, their name feared by all.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Elijah 'The Savage' Cross", detail: "A pirate known for their savage ways, leaving nothing but carnage in their wake.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Alistair 'Stormrider' Fury", detail: "A pirate whose fury is like a storm, destroying everything in their path.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Dante 'The Butcher' Crow", detail: "A pirate known for their brutal and violent tactics, feared as a butcher of the seas.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Zane 'Ironclaw' Kincaid", detail: "A pirate whose iron grip on power and sharp claws of destruction make them a terrifying force.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Victor 'Skullcrusher' Caldwell", detail: "A pirate whose strength and brutality are unmatched, capable of crushing skulls without mercy.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Griff 'Vampire' Steed", detail: "A pirate whose hunger for power is insatiable, known as the Vampire of the seas.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Julian 'Hellstorm' Thorpe", detail: "A pirate whose wrath is like a storm from hell, wreaking havoc wherever they go.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Raoul 'Bloodhound' Reid", detail: "A pirate with a relentless pursuit of their prey, like a bloodhound tracking down its quarry.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Jacob 'Shadowblade' Grim", detail: "A pirate who strikes from the shadows, their blade a deadly weapon in the darkness.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Reuben 'The Demon' Thorne", detail: "A pirate known for their demonic brutality, instilling fear and terror in all who meet them.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Simon 'Wolfbane' Crow", detail: "A pirate whose name strikes fear like a wolf's bane, feared for their vicious attacks.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Jasper 'Hellfire' McGuire", detail: "A pirate whose fiery temper and fiery attacks make them a force to be reckoned with.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Bart 'The Beast' Graves", detail: "A pirate known for their beastly strength and ferocious nature, striking fear in all who face them.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Griffin 'Warhawk' Smith", detail: "A pirate with the ferocity of a hawk in battle, known for their warlike nature.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Gideon 'The Beast' Fane", detail: "A pirate feared for their monstrous power and deadly presence on the seas.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Amos 'Ironjaw' Steele", detail: "A pirate whose ironclad jaw strikes fear into enemies, a symbol of their strength and resilience.", status: false, gender: "Male", type: "Fearsome Pirate" },
  { name: "Scarlett 'Witchbane' Black", detail: "A pirate feared for her ability to bring down witches, known as Witchbane on the seas.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Madeline 'Bloodthirst' Duvall", detail: "A pirate who hungers for blood, known for her insatiable thirst for vengeance.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Amelia 'Stormbreaker' Vale", detail: "A pirate capable of breaking through any storm, known for her fearless nature on the high seas.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Isabella 'Death’s Embrace' Wren", detail: "A pirate whose name invokes death, known for her lethal attacks and merciless ways.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Eleanor 'Vampire' Graves", detail: "A pirate known for her bloodthirsty nature, feared for her ability to strike from the shadows like a vampire.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Annabelle 'Ruthless' Cross", detail: "A pirate whose ruthlessness is legendary, feared for her cold and calculating nature.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Victoria 'Darkheart' Knight", detail: "A pirate with a heart as dark as the depths of the ocean, feared for her unyielding cruelty.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Vivienne 'Sea Demon' Blood", detail: "A pirate known as the Sea Demon, feared for her savage nature and brutal attacks.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Lillith 'Iron Maiden' Thorne", detail: "A pirate known for her deadly nature and iron will, feared as the Iron Maiden on the seas.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Selene 'Hell's Fury' Drake", detail: "A pirate whose fury rivals the fires of hell, feared for her vengeful spirit.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Eveline 'The Deathsinger' Frost", detail: "A pirate with a haunting voice that foretells death, feared for her ability to sing the end of her enemies.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Natasha 'The Fearsome' Reid", detail: "A pirate feared across the seas for her ferocity and ruthless nature in battle.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Clara 'Venom' Graves", detail: "A pirate with a venomous personality, known for her deadly strikes and poisonous nature.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Rosalie 'Thunderstrike' Hunt", detail: "A pirate known for her lightning-fast strikes and fearsome presence, like a thunderstorm in the sea.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Beatrice 'Blight' Thorn", detail: "A pirate who spreads blight and decay, feared for her devastating attacks that leave destruction in their wake.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Verena 'Nightstalker' Dread", detail: "A pirate who strikes from the shadows, known for her silent and deadly attacks.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Lenore 'The Destroyer' Oak", detail: "A pirate whose name symbolizes destruction, feared for her ability to lay waste to all in her path.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Maria 'Crimson' Thornfield", detail: "A pirate with a trail of crimson blood in her wake, feared for her ruthless attacks and bloodied reputation.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Vivienne 'Doombringer' Hale", detail: "A pirate whose very name brings doom to her enemies, feared for her apocalyptic presence.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Giselle 'Shadowfang' Frost", detail: "A pirate whose shadowy presence and fanged strikes make her a terrifying figure in battle.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Alexandra 'The Widowmaker' West", detail: "A pirate known for her deadly precision and ability to leave her enemies' families in mourning.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Samantha 'Bloodwind' Ash", detail: "A pirate with the ability to summon the winds of bloodshed, feared for her violent and unpredictable nature.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Laura 'Witch Queen' Sharp", detail: "A pirate known as the Witch Queen of the seas, feared for her sorcery and her ability to curse her enemies.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Serena 'Nightmare' Finn", detail: "A pirate whose terrifying presence haunts the nightmares of all who cross her path.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Blanche 'Storm Witch' Crow", detail: "A pirate known for her mastery over storms, feared as the Storm Witch who controls the sea's fury.", status: false, gender: "Female", type: "Fearsome Pirate" },
  { name: "Hunter 'Black Fang' Reed", detail: "A pirate known for his savage nature, feared for his deadly fangs.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Storm 'The Demon' Dray", detail: "A pirate feared for his demon-like power, capable of bringing chaos and destruction.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Phoenix 'Firebrand' Ashcroft", detail: "A pirate who rises from the ashes, bringing fire and fury wherever they go.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Sky 'Ironfist' Stone", detail: "A pirate known for their unyielding strength, feared for their iron grip in battle.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Raven 'Nightmare' Fox", detail: "A pirate whose presence is a nightmare to enemies, feared for their dark and eerie tactics.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Morgan 'Vengeful' Wolf", detail: "A pirate who seeks vengeance, feared for their merciless nature and wolf-like instincts.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Griffin 'Skullcrusher' Frost", detail: "A pirate known for their immense strength, capable of crushing skulls with ease.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Ember 'Hellstorm' Huxley", detail: "A pirate who brings hellfire with them, feared for their ability to summon storms of destruction.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Rowan 'Vile' Blaze", detail: "A pirate whose very name brings terror, known for their vile and corrupt nature.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Avery 'The Berserker' Black", detail: "A pirate feared for their berserker rage, capable of overwhelming any foe with savage strength.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Phoenix 'Bloodclaw' Ashford", detail: "A pirate whose claws leave blood in their wake, feared for their relentless attacks.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Aiden 'Darklord' Fierce", detail: "A pirate whose dark powers instill fear, known as the Darklord of the seas.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Riley 'Nightfury' Rayne", detail: "A pirate who unleashes fury in the night, feared for their ability to strike under the cover of darkness.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Drew 'Soulhunter' West", detail: "A pirate whose soul-hunting abilities make them feared by those who cross their path.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Riley 'Deathstrike' Thorn", detail: "A pirate known for their deadly strikes, feared for their precision and lethal attacks.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Cameron 'Shadowreaper' Lee", detail: "A pirate who strikes from the shadows, known for their ability to reap souls in darkness.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Drew 'Graveborn' Wolf", detail: "A pirate whose presence is like the grave, feared for their ability to rise from death itself.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Addison 'Doombringer' Grey", detail: "A pirate who brings doom to all who encounter them, feared for their destructive power.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Logan 'Stormwolf' Blaze", detail: "A pirate known for their fierce and wild nature, feared for their storm-like fury in battle.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Peyton 'The Wraith' Cross", detail: "A pirate whose ghostly presence haunts their enemies, feared for their ability to strike with no warning.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Jordan 'Nightstrike' Vance", detail: "A pirate whose strikes come with the darkness, feared for their ability to ambush under the cover of night.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Taylor 'Scorched' Finn", detail: "A pirate who scorches their enemies with brutal attacks, leaving nothing but ashes in their wake.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Blake 'Deadshot' Knight", detail: "A pirate known for their unmatched accuracy, feared for their ability to strike down enemies with one shot.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Blair 'Bloodspike' Drake", detail: "A pirate whose spikes are soaked in blood, feared for their vicious and brutal attacks.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Mason 'Shadowfury' Crow", detail: "A pirate known for their shadowy and furious nature, feared for their ability to attack with deadly force.", status: false, gender: "Unisex", type: "Fearsome Pirate" },
  { name: "Thorne 'Dragon Slayer' Emberstone", detail: "A legendary pirate known for slaying dragons, feared for his fire-wielding abilities.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Orion 'Stormbringer' Steele", detail: "A pirate who commands the storms, feared for his ability to summon lightning and thunder.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Draven 'Firestorm' Black", detail: "A pirate known for bringing firestorms to the seas, feared for his fiery nature.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Kaelen 'Nightshade' Moon", detail: "A pirate who moves in the shadows, feared for his dark and mysterious nature.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Zephyr 'Windrider' Thorn", detail: "A pirate who controls the winds, feared for his ability to sail the skies as well as the seas.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Finnian 'Thunderfury' Drake", detail: "A pirate whose fury is as powerful as thunder, feared for his ruthless nature in battle.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Torin 'Shadowfang' Nightshade", detail: "A pirate feared for his ability to strike like a shadow, his fangs dripping with venom.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Eryx 'Firebrand' Wulf", detail: "A pirate known for his fiery temper and brutal attacks, feared for his unrelenting passion.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Dorian 'Blazeheart' Frost", detail: "A pirate with a heart of blaze, feared for his fiery spirit and ability to destroy all in his path.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Corbin 'Dark Knight' Sea", detail: "A pirate whose presence is like the darkness of night, feared for his relentless pursuit of justice.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Fenix 'Stormrider' Goldleaf", detail: "A pirate known for riding the storms, feared for his ability to control the sea and sky.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Jaxon 'Iron Wing' Darkwater", detail: "A pirate whose wings are as strong as iron, feared for his power to soar across the seas.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Thalion 'Stormwatcher' Ember", detail: "A pirate who watches over the storms, feared for his ability to predict and control their fury.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Zarek 'The Vengeful' Emberclaw", detail: "A pirate whose vengeance burns like an ember, feared for his wrath against his enemies.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Ashlan 'Silverwing' Farron", detail: "A pirate with silver wings, feared for his swiftness and unyielding grace.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Zander 'Soulfire' Blackwing", detail: "A pirate who ignites his soul with fire, feared for his burning passion and devastating power.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Kael 'Moonshadow' Vortex", detail: "A pirate who moves like a shadow, feared for his ability to disappear into the moonlight.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Ryn 'Wraithsong' Ash", detail: "A pirate whose haunting wraithsong fills the air, feared for his ability to summon the undead.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Kieran 'Dragonblood' Gale", detail: "A pirate with the blood of dragons, feared for his powerful dragon-wielding abilities.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Raith 'Soulflame' Drake", detail: "A pirate who wields the flames of souls, feared for his ability to burn his enemies to ash.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Cedric 'Frostborn' Blackstone", detail: "A pirate whose soul is born from frost, feared for his cold and calculating nature.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Rorek 'Silverclaw' Frost", detail: "A pirate with silver claws, feared for his deadly touch and ferocity in battle.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Lior 'Windborn' Kharon", detail: "A pirate born of the wind, feared for his speed and ability to command the forces of nature.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Alaric 'Nightshroud' Grim", detail: "A pirate whose presence is cloaked in darkness, feared for his ability to strike from the shadows.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Orin 'Darkfire' Fury", detail: "A pirate whose fire burns with darkness, feared for his uncontrollable fury in battle.", status: false, gender: "Male", type: "Fantasy Pirate" },
  { name: "Seraphina 'Starfire' Nightshade", detail: "A pirate whose fiery soul lights up the stars, feared for her celestial power.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Elara 'Moonstorm' Darkmoon", detail: "A pirate who controls storms under the moonlight, feared for her command of the elements.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Lyra 'Stormmistress' Ravenclaw", detail: "A pirate whose mastery of storms makes her a force of nature, feared across the seas.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Isolde 'Shadowthorn' Blackwood", detail: "A pirate who strikes from the shadows, feared for her deadly precision.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Talia 'Firewhisper' Ash", detail: "A pirate who whispers fire into existence, feared for her subtle but destructive attacks.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Nyssa 'Stormrider' Winterfall", detail: "A pirate who rides the fiercest storms, feared for her unmatched sailing skills.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Aria 'Dawnbringer' Frost", detail: "A pirate who brings light to the darkest seas, revered and feared for her radiant power.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Selene 'Nightmare' Blackfang", detail: "A pirate whose presence haunts her enemies' dreams, feared for her dark aura.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Elira 'Moonshroud' Storm", detail: "A pirate who cloaks herself in moonlight, feared for her ethereal and elusive nature.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Freya 'Silvermist' Thornfield", detail: "A pirate whose silver mist confuses enemies, feared for her stealth and cunning.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Zephyra 'Darkraven' Gale", detail: "A pirate who commands dark ravens, feared for her ominous presence.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Morgana 'Dragonheart' Vail", detail: "A pirate with the courage of a dragon, feared for her fiery and fearless leadership.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Evangeline 'Blackflame' Shadewood", detail: "A pirate whose flames burn black, feared for her unmatched ferocity.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Amara 'Sea Serpent' Vortex", detail: "A pirate who moves like a sea serpent, feared for her serpentine agility.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Kiera 'Frostfang' Nightwind", detail: "A pirate with icy fangs, feared for her cold and calculating strikes.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Celeste 'Stormrider' Blackwater", detail: "A pirate who masters the storms, feared for her relentless pursuit of power.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Alina 'Witchfire' Sable", detail: "A pirate who conjures fire with a spell, feared for her mystical abilities.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Elysia 'Shadowfire' Moon", detail: "A pirate whose fire emerges from shadows, feared for her duality of light and dark.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Seraphine 'Ghostblade' Blackstone", detail: "A pirate whose blade strikes like a ghost, feared for her untouchable combat style.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Kaela 'Witchstorm' Ashwood", detail: "A pirate who summons storms through witchcraft, feared for her arcane powers.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Fianna 'Sorrowstorm' Shade", detail: "A pirate whose storms bring sorrow, feared for her devastating attacks.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Evora 'Nightfury' Crow", detail: "A pirate whose fury is unleashed in the night, feared for her relentless rage.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Isolde 'Vampire’s Kiss' Ember", detail: "A pirate whose kiss is as deadly as a vampire’s, feared for her seductive and lethal charm.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Ivana 'Skullmistress' Bloodmoon", detail: "A pirate who rules over the skulls of her enemies, feared for her dominance.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Raena 'Firefang' Drake", detail: "A pirate whose fangs burn like fire, feared for her devastating strikes.", status: false, gender: "Female", type: "Fantasy Pirate" },
  { name: "Valen 'The Bloodstorm' Silvermoon", detail: "A pirate who commands storms of blood, feared for their relentless fury.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Kiran 'Ironstar' Black", detail: "A pirate with a heart as strong as iron and a star's brilliance, feared for their unbreakable resolve.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Sorin 'Moonstrider' Ember", detail: "A pirate who strides through moonlit seas, feared for their ethereal grace.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Quinn 'Stormstrike' Ashford", detail: "A pirate whose strikes are as fierce as the storms, feared across the seas.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Rowan 'Bloodmoon' Storm", detail: "A pirate who rises with the blood-red moon, feared for their chilling presence.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Ash 'Frostfang' Wildwind", detail: "A pirate whose icy fangs cut through foes, feared for their cold and calculated ferocity.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Nyx 'Shadowburn' Steele", detail: "A pirate who wields burning shadows, feared for their dark and fiery vengeance.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Tarian 'Ghostrider' Black", detail: "A pirate who rides like a ghost in the night, feared for their silent yet deadly approach.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Griffin 'Darkblaze' Nightwind", detail: "A pirate whose dark flames engulf their enemies, feared for their fiery wrath.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Phoenix 'Skyfire' Vengeance", detail: "A pirate who summons fire from the skies, feared for their divine retribution.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Riven 'The Silverflame' Ashen", detail: "A pirate with a flame as bright as silver, feared for their radiant destruction.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Zephyra 'Witchwind' Blackthorn", detail: "A pirate who controls the witch's wind, feared for their supernatural prowess.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Rowan 'Stormseeker' Ash", detail: "A pirate who chases storms for their power, feared for their insatiable ambition.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Avery 'Stormborn' Thorne", detail: "A pirate born from the heart of a storm, feared for their untamed spirit.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Blair 'Shadowfire' West", detail: "A pirate whose flames are hidden in shadows, feared for their stealthy destruction.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Orion 'Nightclaw' Drake", detail: "A pirate whose claws strike in the dead of night, feared for their ruthless precision.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Cass 'Stormreaver' Vile", detail: "A pirate who reaves through storms, feared for their unmatched daring.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Kaelen 'Soulshard' Frost", detail: "A pirate whose soul fragments like ice, feared for their chilling detachment.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Kaelen 'Firestorm' Dread", detail: "A pirate who unleashes fiery storms, feared for their devastating wrath.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Raven 'Mooncrash' Walker", detail: "A pirate who moves under crashing moons, feared for their otherworldly might.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Cameron 'Starshard' Ashford", detail: "A pirate who wields the shards of stars, feared for their cosmic reach.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Quinn 'Nightfiend' Gale", detail: "A pirate who strikes terror in the night, feared for their unrelenting pursuit.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Morgan 'Ghostblaze' Gale", detail: "A pirate whose flames are ghostly yet fierce, feared for their spectral wrath.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Jordan 'Darkstorm' Ashcroft", detail: "A pirate who sails with dark storms, feared for their ominous aura.", status: false, gender: "Unisex", type: "Fantasy Pirate" },
  { name: "Rowan 'Venomstrike' Frost", detail: "A pirate whose strikes are as venomous as they are swift, feared for their lethal attacks.", status: false, gender: "Unisex", type: "Fantasy Pirate" },  
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
      name: "Saiyan Name Generator",
      pic: "/saiyan3.jpg",
      link: "https://www.nameideagenerator.com/saiyan-name-generator",
  },
  {
      name: "Robot Name Generator",
      pic: "/robot.jpg",
      link: "https://www.nameideagenerator.com/robot-name-generator",
  },
  ];
  
  const PirateNameGenerator = () => {
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
  
const bgImage = "/pirate-name-generator.avif"
const context = "Pirate Name Generator with Meaning"
const Q1 = "What is the Pirate Name Generator?"
const A1 = "he Pirate Name Generator is a tool that helps you create unique and creative pirate names. Whether you're looking for a traditional pirate, a fearsome captain, or a fantasy pirate, this tool generates a wide range of names based on different styles and categories."

const Q2 = "How do I use the Pirate Name Generator?"
const A2 = "Simply choose the gender (male, female, or unisex) and select your preferred category (Traditional, Fearsome, Fantasy). Click “Generate” to receive a unique pirate name with a rich backstory. You can keep generating until you find the perfect name!"

const Q3 = "Can I customize the pirate name I generate?"
const A3 = "Yes! You can choose the name style that fits your character best—whether it's bold and intimidating, loyal and brave, or mystical and magical. The generator will provide a variety of options to match your preferences."

const Q4 = "What types of pirate names can I generate?"
const A4 = "You can generate names in several categories: Traditional pirate names, Fearsome pirate names, and Fantasy pirate names. Each category offers unique names with different tones, from classic sea legends to names inspired by mythical creatures and magical powers."

const Q5 = "How can I use the pirate names I generate?"
const A5 = "The names you generate can be used for a variety of purposes—RPG characters, stories, games, costumes, or just for fun. Whether you’re creating a new pirate adventure or dressing up for a themed event, the Pirate Name Generator provides names that fit any pirate persona."
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
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/korean-name-generator" className="hover:underline text-[#343a40]">Pirate Name Generator with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Pirate Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender of Pirate Name</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="UniSex">UniSex</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Category of Pirate Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Traditional Pirate">Traditional</option>
              <option value="Fearsome Pirate">Fearsome</option>
              <option value="Fantasy Pirate">Fantasy</option>
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
            What is a Pirate Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            The Pirate Name Generator creates unique pirate-themed names that capture the spirit of adventure, danger, and mystery on the high seas. 
            Whether you need a name for a pirate character, an RPG game, or just for fun, this tool provides a fast and creative way to find the perfect name
            </p>
            <h2 className="text-left text-[28px] font-medium text-[#343a40] pb-[]">
            Why Use the Pirate Name Generator?
            </h2>
            <p className="text-left py-[10px] text-[#343a40]">
            Choosing the right pirate name can be tricky, but this tool makes it easy. 
            It allows you to customize the name based on your preferences. You can select from various genders and categories, ensuring the name matches your vision.
            </p>
            <h3 className="text-left text-[24px] font-medium text-[#343a40] pb-[]">
            Gender Options (Male, Female, Unisex)
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Want a male, female, or unisex pirate name? This generator has all the options to suit your needs. Pick the gender that best fits the character you’re creating.
            </p>
            <p className="text-left text-[18px] font-medium text-[#343a40] pb-[]">
       <b>     Categories to Choose From <br /></b>
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            <ul>
                <li><b>Traditional Pirate Names</b> – These names are perfect for fans of classic pirate legends. They reflect the old-school spirit of pirates, complete with daring adventures and rebellious personalities.</li>
                <li><b>Fearsome Pirate Names</b> – Want to strike fear into the hearts of your enemies? Fearsome names bring boldness and power, perfect for a pirate captain or ruthless crew member.</li>
                <li><b>Fantasy Pirate Names </b> – These names are designed for pirates in magical or fantasy worlds. They bring an element of mysticism, creating characters with extraordinary abilities and stories.</li>
              </ul>
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use Our Pirate Name Generator Tool
          </h2>
          <p>
          Using the Pirate Name Generator is simple and engaging. Follow these easy steps to find the perfect name with meaningful insights:
          </p>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose a Pirate Gender <b> (Male, Female, UniSex)</b>:
              </h3>
              <p>
              Start by selecting the gender of your pirate. 
              Whether you’re looking for a bold male pirate, a fierce female pirate, or a unisex name that works for any pirate persona, 
              this step helps tailor the names to your preferences.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select Pirate Type/Category<b> (Traditional, Fearsome, Fantasy)</b>:
              </h3>
              <p>
              Next, pick a pirate type or category that matches your character's personality. Choose from:
              <ul>
                <li>- <b>Traditional Pirate names</b> –  Classic and timeless names that capture the golden age of piracy.</li>
                <li>- <b>Fearsome Pirate Names</b> – Bold and intimidating names that evoke strength and terror.</li>
                <li>- <b>Fantasy Pirate Names</b> – Imaginative names with a magical or mythical flair, perfect for fantasy settings.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: <b> Generate </b>Names Instantly
              </h3>
              <p>
              Once you've made your selections, 
              click the <b>“Generate” </b>button. The tool will quickly create a list of pirate names based on your choices, ensuring you get unique and fitting options.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Select a Name You Like
              </h3>
              <p>
              Browse the generated names and pick the one you like best. 
              Each name will come with a meaning or backstory, giving your pirate a deeper, more authentic identity.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="pirate-names.jpg"
              alt="Korean Name Generator with Meaning"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="anna-ribakova-pirat2.jpg"
              alt="Korean Name Generator with Meaning"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/165e05e1-37c6-46c8-9c9d-a652905da050.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Pirates Name Generator
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
          <b> Unique Features of the Pirate Name Generator</b>
          </h2>
          <p>
          This tool is crafted to offer more than just names. It blends cultural authenticity with modern flexibility, ensuring each result is meaningful and versatile.
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Meaningful Names with Pirate Backstories
            </h3>
            <p>
            Each generated name carries a rich pirate legend or backstory, making your pirate feel authentic. 
            These names aren't just random—they reflect the bold and adventurous spirit of pirates, adding depth to your character.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Customizable Name Styles
            </h3>
            <p>
            The generator allows you to select from a variety of pirate personas. 
            Whether you're looking for a fearless captain, a mysterious swashbuckler, or a cunning first mate, the tool tailors the name to match your chosen style.      
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant, Creative Results
            </h3>
            <p>
            Forget hours of brainstorming! The Pirate Name Generator provides quick, creative, and unique results. 
            You'll always have fresh, engaging names for any pirate-themed project in just a few seconds.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Versatile Applications
            </h3>
            <p>
            Perfect for any pirate-related endeavor—whether it's for RPG characters, stories, costumes, or just a fun game. 
            This generator is adaptable for all your pirate-themed needs, making it the ultimate tool for creators.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Limitless Possibilities
            </h3>
            <p>
            Explore endless combinations of names with a variety of styles, categories, and backstories. 
            With the Pirate Name Generator, you can create unique and exciting names every time, ensuring your pirate is one-of-a-kind.
            </p>
            <h2 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Why It Stands Out
            </h2>
            <p>
            Our Pirate Name Generator is designed to provide you with unique, customizable, and instantly generated names that match your specific needs. Here’s what makes it stand out:
            <ul>
                <li>- <b>Customizable Options</b> –  Tailor the name to your specific pirate persona by selecting gender and category. Whether you’re looking for a traditional pirate, a fierce name, or something fantasy-inspired, the tool adjusts to meet your preferences.</li>
                <li>- <b>Instant Results</b> – No more endless brainstorming. The generator provides you with a list of creative and fitting names in seconds, giving you fresh options every time.</li>
                <li>- <b>Engaging and Fun</b> – It’s not just about generating names—each name comes with a meaning or backstory, making it more engaging and bringing your pirate character to life.</li>
                <li>- <b>Versatile Use</b> – Whether for RPGs, stories, costumes, or just a fun game with friends, this generator is perfect for any pirate-themed project. You’ll always find the right name for your swashbuckling adventures</li>
                <li>- <b>Limitless Possibilities</b> – With endless combinations of names, you’re sure to discover the perfect pirate name every time you use the tool.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          List of Pirate Name Types by Gender and Category
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Male Pirate Names
              </h3>
              <p  className="text-[#343a40] ">
          <b>Traditional Pirate Names</b>    
              <ul>
              <li>- <b>Blackbeard Bill</b> –  Named after the infamous Blackbeard, this name evokes a pirate who is both feared and respected on the high seas</li>
                <li>- <b>Captain Flint</b> – A strong and rugged name, inspired by the notorious Captain Flint from Treasure Island. Flint was a cunning and ruthless pirate.</li>
                <li>- <b>Redbeard O'Riley</b> – A name for a pirate with fiery determination, known for his fiery red beard and fierce temper.</li>
                <li>- <b>Bartholomew "Blackheart" Graves</b> – A name suggesting a pirate with a dark, villainous heart, feared by both his crew and enemies alike</li>
                <li>- <b>Henry "The Viper" Shaw</b> – A sharp, deadly pirate, whose cunning and quick strikes made him a feared presence on the seas.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
            <b>  Fearsome Pirate Names</b>
              <ul>
              <li>- <b>Bloodthirsty Jake</b> –  A pirate known for his brutal and merciless nature, always thirsting for battle and blood</li>
                <li>- <b>Stormbringer Tom</b> – A name that evokes the image of a pirate who controls the fury of the sea and storms, a master of both the elements and combat.</li>
                <li>- <b>Ironhook McGraw</b> –  A fearsome pirate who replaces a lost hand with an iron hook, striking terror into all who face him.</li>
                <li>- <b>"Deathwave" Dave</b> – A pirate whose presence marks the arrival of doom, like a deadly wave crashing over the shores</li>
                <li>- <b>Dread Captain Hawk</b> – A pirate captain known for his sharp eyes and ruthless tactics, his very name brings fear to his enemies</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
            <b>  Fantasy Pirate Names</b>
              <ul>
              <li>- <b>Thorne "Stormcaller" Drake</b> – A pirate who commands the storms, his name evokes a powerful figure who harnesses nature's wrath to sail the seas</li>
                <li>- <b>Captain Arcanum</b> – A name tied to the mystical and arcane arts, suggesting a pirate with magical powers and knowledge</li>
                <li>- <b>Zephyr "Silverwind" Wren</b> – A swift and elusive pirate, moving as quickly as the wind and as sharp as silver</li>
                <li>- <b>Krakenbane Croft</b> – A name tied to legends of the deep, implying a pirate who fights and conquers sea monsters like the Kraken</li>
                <li>- <b>Ragnar "Soulfire" Darkwater</b> –A name of dark power, invoking the image of a pirate whose soul burns with fire and whose enemies are doomed to fall before him</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Female Pirate Names 
              </h3>
              <p>
            <b>Traditional Pirate Names</b>
              <ul>
              <li>- <b>Anne "The Raven" Bonny</b> – A classic pirate name, linked to the notorious Anne Bonny. Her nickname, "The Raven," evokes mystery and sharp wit.</li>
                <li>- <b>Grace "Seawolf" Ward</b> – A fierce and independent pirate, known for her strength and ability to conquer the wildest seas</li>
                <li>- <b>Isabella "The Sea Siren" Drake </b> – A pirate whose charm and beauty are as dangerous as her cunning, luring sailors into her grasp</li>
                <li>- <b>Bonnie "Ironfist" Blackwell</b> –  A pirate who commands respect with her unyielding strength and iron will</li>
                <li>- <b>Eleanor "Stormwatcher" Flint</b> – A pirate known for her ability to read the skies and predict storms, ensuring her crew is always ready</li>
              </ul>
              </p>
              <p>
            <b>  Fearsome Pirate Names</b>
              <ul>
              <li>- <b>Viper Queen Cassandra</b> – A pirate queen with a venomous bite, known for her strategic mind and ruthless approach to piracy.</li>
                <li>- <b>Scarlet "Fireblade" Morgan</b> – A fiery and fierce pirate, wielding a blade that burns with the fury of a thousand battles.</li>
                <li>- <b>Jezebel "The Butcher" Thorn</b> – A ruthless pirate known for her brutal approach to combat, earning the nickname "The Butcher."</li>
                <li>- <b>Ravenna "Bloodstorm" Graves</b> – A pirate who brings destruction in her wake, with storms of blood and fury wherever she goes</li>
                <li>- <b>Stormy "Ironclad" Caine</b> – A pirate with a heart as hard as iron, enduring any storm and always emerging victorious</li>
              </ul>
              </p>

              <p>
            <b>  Fantasy Pirate Names</b>
              <ul>
              <li>- <b>Elara "Moonshadow" Blackwater</b> –  A mysterious pirate who moves through the night like a shadow, her power connected to the moon’s phases</li>
                <li>- <b>Nyx "Witchfire" Wilder</b> – A pirate with magical abilities, controlling fire and shadow, with a deep connection to the witching arts</li>
                <li>- <b>Seraphina "The Starfire"</b> – A pirate whose beauty and fiery spirit shine as brightly as the stars, bringing light to even the darkest seas</li>
                <li>- <b>Krakenbane Croft</b> – A pirate with a dark past, her very presence bringing an aura of fear and mystery to the seas</li>
                <li>- <b>Captain Drusilla "Dreadveil"</b> – A pirate who conquers the ocean’s most dangerous creatures, her name feared by all who sail the deep waters</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Unisex Pirate Names
              </h3>
              <p>
            <b>  Traditional Pirate Names</b>
              <ul>
              <li>- <b>Captain Cinder</b> – A pirate with a heart of fire, leaving behind a trail of ashes and destruction</li>
                <li>- <b>Silverhawk</b> – A name tied to speed and sharp vision, a pirate who strikes quickly and silently</li>
                <li>- <b>Stormrider</b> – A pirate who rides the storm, never afraid of nature’s fury, always seeking adventure</li>
                <li>- <b>Blackwater</b> – A name symbolizing a pirate who thrives in the darkest of waters, where others fear to tread</li>
                <li>- <b>Fleetfoot</b> – A swift pirate known for their agility and ability to outrun any foe</li>
              </ul>
              </p>
              <p>
            <b>  Fearsome Pirate Names</b>
              <ul>
              <li>- <b>Thunderstrike</b> – A pirate who strikes as fast and forcefully as a lightning bolt, leaving chaos in their wake</li>
                <li>- <b>Ironjaw</b> – A pirate with a powerful, unyielding will, able to withstand any attack and keep on fighting</li>
                <li>- <b>Bloodfang</b> – A pirate who strikes with the ferocity of a wild animal, seeking bloodshed in every battle</li>
                <li>- <b>Nightshade</b> – A mysterious pirate who moves in the shadows, her very name whispered in fear</li>
                <li>- <b>Darkstorm</b> – A pirate who is as dangerous as a storm at sea, bringing destruction wherever they go</li>
              </ul>
              </p>

              <p>
            <b>  Fantasy Pirate Names</b>
              <ul>
              <li>- <b>Shadowfire</b> – A name that blends darkness and flame, representing a pirate with both stealth and fiery power</li>
                <li>- <b>Arcturus</b> – A name tied to the stars, a navigator who sails by the stars and possesses a deep understanding of the cosmos</li>
                <li>- <b>Starwind</b> – A pirate who moves as freely as the wind, guided by the stars, impossible to catch or defeat</li>
                <li>- <b>Embercloak</b> – A pirate wrapped in mystery and flame, his cloak as fiery as his soul</li>
                <li>- <b>Frostbane</b> – A pirate who thrives in the coldest of waters, able to survive and conquer even the harshest frozen seas</li>
              </ul>
              </p>
            </div>
          </div>
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

export default PirateNameGenerator;

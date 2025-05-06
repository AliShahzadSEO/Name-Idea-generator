"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
  { name: "Eldoria", detail: "A name of great power.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Lunareth", detail: "A name that echoes the moon.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Aetheralys", detail: "Ethereal and mystical.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Sylvion", detail: "Connected to the forest.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Drakonia", detail: "Evoking the power of dragons.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Faeloria", detail: "A land of enchantment.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Umbrathis", detail: "Shadowy and mysterious.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Mytharis", detail: "A mythical essence.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Solarith", detail: "Bright and radiant.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Vyrthanel", detail: "A name of ancient wisdom.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Illumis", detail: "Glowing with brilliance.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Arcanthera", detail: "Magical and profound.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Zephyrossa", detail: "Soft and breezy.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Nyxathorn", detail: "Dark and enigmatic.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Celestara", detail: "Celestial and bright.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Everathis", detail: "Endless and enduring.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Seraluna", detail: "Serene and lunar.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Shadowvale", detail: "A valley of shadows.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Enchantara", detail: "Enchanting and magical.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Morathil", detail: "A name shrouded in mystery.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Lytherial", detail: "Elegant and ethereal.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Thalassara", detail: "Of the sea and serenity.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Etherealis", detail: "Otherworldly and graceful.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Starlithon", detail: "Shining like the stars.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Lorynthia", detail: "A land of dreams.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Dreamara", detail: "Full of dreams and wonder.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Phantasel", detail: "Phantom-like and magical.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Gildrathis", detail: "Glittering with gold.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Starwhisper", detail: "A quiet starry name.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Ebonysong", detail: "Dark and melodious.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Obsidellion", detail: "As strong as obsidian.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Crystarion", detail: "Crystal-clear and luminous.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Auroria", detail: "Golden and radiant.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Hallowspire", detail: "A sacred spire.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Wyrmsthrone", detail: "A throne for dragons.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Verdantheos", detail: "Verdant and full of life.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Eldrovia", detail: "Elderly and wise.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Moonhallow", detail: "Sacred and lunar.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Arcantheos", detail: "Arcane and mighty.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Fynralis", detail: "Mystical and ancient.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Elvarith", detail: "Elven and mystical.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Glowhallow", detail: "Glowing and sacred.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Thyrasyn", detail: "Strong and noble.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Everwhisper", detail: "Soft and enduring.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Duskvalen", detail: "Twilight and peaceful.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Sunwreath", detail: "Radiant and warm.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Frosthaven", detail: "Icy and secure.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Starfallon", detail: "Falling like stars.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Emberisle", detail: "Fiery and isolated.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Nethercrest", detail: "Dark and otherworldly.", status: false, gender: "Fantasy", type: "Mythical" },
{ name: "Mythrendell", detail: "A legendary medieval kingdom.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Valdrathia", detail: "A land of chivalrous knights.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Dravenhold", detail: "A fortress of dark tales.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Ironspire", detail: "A stronghold of ancient power.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Fyrdrathen", detail: "A fiery realm of bravery.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Moonshire", detail: "A peaceful and mystical village.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Gildmere", detail: "A town known for its riches.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Starhaven", detail: "A sanctuary under the stars.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Highspire", detail: "A tower of great prominence.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Everreach", detail: "A kingdom of endless horizons.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Gryphonrock", detail: "A fortress with mythical creatures.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Ashvalen", detail: "A forest of hidden treasures.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Crystalhold", detail: "A stronghold made of crystals.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Umbracastle", detail: "A dark and mysterious castle.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Suncrest", detail: "A castle under the rising sun.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Wyrmspire", detail: "A tower of dragon lore.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Frosthelm", detail: "A fortress of ice and resilience.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Thornmarch", detail: "A wild land of brambles.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Everlake", detail: "A lake of eternal serenity.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Glowspire", detail: "A tower of magical light.", status: false, gender: "Medieval Names", type: "Mythical" },
{ name: "Aetherion", detail: "A futuristic realm of innovation.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Skychronis", detail: "A city that touches the heavens.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Luminaris", detail: "A place of eternal light.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Starlithium", detail: "A mineral-rich galactic haven.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Etheralium", detail: "A dimension of pure energy.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Voidrealm", detail: "A space of infinite possibilities.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Arcanova", detail: "A nexus of arcane power.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Solaris Prime", detail: "A star system's central hub.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Xenovaris", detail: "A planet of alien wonders.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Zentarion", detail: "A megacity of futuristic marvels.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Quantumreach", detail: "A hub of technological advancements.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Chronovale", detail: "A valley of time manipulation.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Stellarion", detail: "A region of celestial wonders.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Gravitasphere", detail: "A zone of gravity control.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Starborne Nexus", detail: "A connection of cosmic paths.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Duskhedron", detail: "A prism of futuristic brilliance.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Nova Haven", detail: "A shelter in a star cluster.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Etherialith", detail: "A shard of cosmic energy.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Astralight", detail: "A beacon in deep space.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Cryovale", detail: "A valley of frozen mystery.", status: false, gender: "Futuristic Names", type: "Mythical" },
{ name: "Photonhelm", detail: "A citadel of light technology.", status: false, gender: "Futuristic Names", type: "Mythical" },
  { name: "Ironhold", detail: "A stronghold built on iron and stone.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Stormwatch", detail: "A fortress that watches over the stormy seas.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Bloodspire", detail: "A dark tower built from the bones of enemies.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Daggerfall", detail: "A city where danger lurks in every corner.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Raventhrone", detail: "A throne forged from the feathers of ravens.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Crimsonreach", detail: "A kingdom bathed in blood-red light.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Frostbane", detail: "A kingdom cursed by eternal frost.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Ashfortress", detail: "A stronghold built from the ashes of fallen empires.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Darkspire", detail: "A dark tower that pierces the heavens.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Emberstone", detail: "A city of glowing embers and firelight.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Titanhold", detail: "A fortress as solid as the earth itself.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Shadowhelm", detail: "A kingdom ruled by shadow and secrecy.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Wraithmarch", detail: "A desolate kingdom haunted by wraiths.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Steelhaven", detail: "A kingdom surrounded by walls of steel.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Blackthorn Keep", detail: "A fortress in the heart of a thorny wilderness.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Thunderhall", detail: "A hall where the thunder always roars.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Obsidian Fortress", detail: "A fortress built from the blackest stone.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Dragonspire", detail: "A spire forged by dragons in times of old.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Grimfort", detail: "A fortress built to withstand any assault.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Ravenrock", detail: "A rock where ravens roost, watching over the kingdom.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Ironclad Keep", detail: "A keep protected by the strongest iron armor.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Blazeward", detail: "A kingdom constantly threatened by fire and flame.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Dreadhaven", detail: "A haven for those who live in the shadow of fear.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Thornvale", detail: "A valley filled with thorns and danger.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Shadowforge", detail: "A forge that creates weapons of shadow and night.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Deathreach", detail: "A kingdom at the edge of death and despair.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Nightbane Keep", detail: "A keep built to banish the night itself.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Frostspire", detail: "A spire encased in eternal frost.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Warstone", detail: "A stone where warriors gather to train for battle.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Crimsonkeep", detail: "A keep bathed in a perpetual crimson hue.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Skullcliff", detail: "A cliff that overlooks a sea of skulls.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Ironspire", detail: "A spire forged in the heart of the earth.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Stoneward", detail: "A ward made of unyielding stone.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Emberfort", detail: "A fortress where embers glow in the cold night.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Frostvale", detail: "A vale where the cold never ends.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Grimhelm", detail: "A helmet forged in the fires of battle.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Bloodclaw Keep", detail: "A keep with claws stained in blood.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Thunderhold", detail: "A hold struck by thunder at all times.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Nightthorn", detail: "A kingdom plagued by thorns that appear in the night.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Steelspire", detail: "A spire made from the hardest steel.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Flamecliff", detail: "A cliff where the fire never dies.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Dragonmarch", detail: "A march led by dragons themselves.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Obsidianhall", detail: "A hall crafted from the darkest obsidian.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Daggerhold", detail: "A hold where daggers are forged in secrecy.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Wyrmbane", detail: "A kingdom where wyrms are hunted and slain.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Stormcliff", detail: "A cliff that faces the storm with unyielding might.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Voidward", detail: "A ward facing the very edge of the void.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Bladehelm", detail: "A helm forged from the sharpest blades.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Brightstone", detail: "A kingdom with gleaming stones of light.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Warwatch", detail: "A kingdom always ready for war.", status: false, gender: "Medieval Names", type: "Power Kingdom Name" },
  { name: "Neonspire", detail: "A city of bright neon lights and advanced technology.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Synthropolis", detail: "A metropolis dominated by synthetic lifeforms and AI.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Cybercore", detail: "A central hub for all cybernetic advancements.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Stellaris", detail: "A kingdom in the stars, advanced and ever-expanding.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Quantumreach", detail: "A city that pushes the boundaries of quantum technology.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Solaria", detail: "A bright kingdom harnessing the power of the sun.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Xenotopia", detail: "A futuristic society where humans and aliens coexist.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Megaforge", detail: "A massive industrial city built for limitless production.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Skyhold", detail: "A floating kingdom above the clouds, powered by airships.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Aetheris", detail: "A kingdom built in the ether, between the physical and digital realms.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Neurocity", detail: "A city where the minds of citizens are connected via neural networks.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Terraform", detail: "A kingdom built on a terraformed planet, thriving with life.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Circuiton", detail: "A city powered by circuits and artificial intelligence.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Cosmoda", detail: "A vast kingdom that spans across multiple galaxies.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Auranet", detail: "A networked kingdom where all beings are connected through advanced tech.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Luminara", detail: "A radiant kingdom where technology and light reign supreme.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Electropolis", detail: "A city powered entirely by electricity and advanced machines.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Chronos", detail: "A kingdom where time travel and manipulation are possible.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Infinitum", detail: "A kingdom that exists in an endless loop of progress and innovation.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Cerebrum", detail: "A city of intellectual prowess, fueled by AI and neural interfaces.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Nexopolis", detail: "A kingdom at the nexus of all intergalactic connections.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Andromeda", detail: "A futuristic kingdom beyond the Milky Way, filled with alien cultures.", status: false, gender: "Futuristic Names", type: "Power Kingdom Name" },
  { name: "Eldoria", detail: "A magical kingdom filled with mystical creatures and ancient secrets.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Moonshadow", detail: "A kingdom under the moon's perpetual glow, filled with enchantments.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Avaloria", detail: "A kingdom surrounded by enchanted forests and hidden within mist.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Starfall", detail: "A kingdom built upon the fallen stars, shimmering with celestial magic.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Frosthaven", detail: "A kingdom surrounded by eternal ice and ruled by ice sorcerers.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Drakoria", detail: "A kingdom where dragons rule and their power shapes the land.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Wyrmspire", detail: "A towering kingdom inhabited by dragons and their ancient followers.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Elvandar", detail: "A serene kingdom ruled by elves, filled with ancient magic.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Sylphoria", detail: "A floating kingdom filled with air spirits and flying creatures.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Glimmerstone", detail: "A kingdom known for its glowing stones and powerful sorcery.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Thornhold", detail: "A kingdom hidden deep within a forest of thorns, protected by fierce warriors.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Celestia", detail: "A kingdom among the stars, where celestial beings dwell.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Ironwood", detail: "A kingdom built within the heart of an enchanted forest, ruled by druids.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Solstice", detail: "A kingdom where the sun never sets, filled with light and warmth.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Ebonreach", detail: "A kingdom where darkness and shadow reign supreme.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Aetherwood", detail: "A kingdom hidden in the clouds, ruled by spirits of the wind.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Runewood", detail: "A mystical kingdom steeped in the power of ancient runes.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Emberdawn", detail: "A kingdom born from the ashes of a great fire, filled with fiery creatures.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Windspire", detail: "A kingdom ruled by wind mages and air elementals.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Feyloria", detail: "A kingdom ruled by the fey, filled with whimsical magic and strange creatures.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Drakmor", detail: "A kingdom where dragons and mortals coexist, sharing their power and knowledge.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Lunarith", detail: "A kingdom ruled by moon magic and nocturnal creatures.", status: false, gender: "Fantasy Names", type: "Power Kingdom Name" },
  { name: "Ardentrose Keep", detail: "A kingdom defined by its passionate spirit, with rose-colored towers and enchanted halls.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Moonlith Vale", detail: "A serene vale where the moonlight reflects off crystal-clear waters, a place of tranquil beauty.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Silvermoon Palace", detail: "A grand palace bathed in silver moonlight, where wisdom and elegance are cherished.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Emeraldspire", detail: "A towering spire made of gleaming emeralds, reaching for the heavens in a symbol of eternal beauty.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Valedew", detail: "A lush, fertile valley where the air is always fresh, and flowers bloom throughout the year.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Opalwind Keep", detail: "A fortress built on the windswept cliffs, with opal walls shimmering in the sunlight.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Everlore Hall", detail: "A hall where ancient stories and magical secrets are passed down through generations.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Winterleaf", detail: "A kingdom where winter lasts year-round, with snow-covered leaves that never fall.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Duskwind Palace", detail: "A majestic palace located at the edge of twilight, with winds that carry the scent of distant lands.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Radiantbloom", detail: "A kingdom where flowers bloom with radiant light, filling the land with beauty and serenity.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Elvenholt", detail: "A quiet haven deep in the forests, where the elves live in harmony with nature.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Celesthenia", detail: "A celestial kingdom, where stars shine brightly and the sky is always clear.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Starlight Keep", detail: "A keep built atop a mountain, illuminated by the glow of stars that never fade.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Sapphirewood", detail: "A forest kingdom, with trees that shimmer with sapphire-like leaves, creating a magical atmosphere.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Mooncrest Palace", detail: "A palace perched on a hill, where the moon always casts its glow, making the surroundings serene.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Rosewind Keep", detail: "A keep surrounded by fields of roses, with the wind carrying their fragrance through the land.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Faerynspire", detail: "A magical tower where faeries gather, filled with wonder and enchantment.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Silverglade", detail: "A peaceful glade filled with silver-leaved trees, bathed in soft light.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Etherealthorn", detail: "A mystical kingdom where thorned vines grow ethereally, creating an enchanted atmosphere.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Bronzebloom", detail: "A kingdom where flowers made of bronze bloom, adding a touch of elegance and mystery.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Lunehaven", detail: "A haven where the moon always shines bright, guiding travelers and offering protection.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Faeryglow", detail: "A kingdom where faeries glow with a soft, radiant light, spreading peace and tranquility.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Luminary Hall", detail: "A hall filled with the light of wisdom and knowledge, where sages and scholars gather.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Faeveil", detail: "A kingdom hidden in a veil of mist, where faeries and magical creatures dwell in secrecy.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Starcrest Keep", detail: "A keep built on a mountain peak, where starlight guides the way to wisdom and fortune.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Thaloria", detail: "A kingdom of eternal beauty, where the sun always sets in shades of purple and gold.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Whitestone Keep", detail: "A stronghold made from pure white stone, standing tall and radiant against the dark skies.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Amethystridge", detail: "A ridge overlooking a vast valley, where amethyst-like stones gleam under the sun.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Twilightfall", detail: "A kingdom where dusk and dawn merge, creating a permanent twilight atmosphere.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Glimmervale", detail: "A vale where everything sparkles with a glimmer of magic, offering a peaceful refuge.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Sunfrost", detail: "A kingdom where the sun’s warmth battles the chill of frost, creating a unique and magical land.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Ivycastle", detail: "A castle overgrown with ivy, symbolizing nature’s dominance over man-made structures.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Dreamwood Keep", detail: "A kingdom built in a mystical forest, where dreams and reality blend together.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Celestia Grove", detail: "A sacred grove where celestial beings walk among the trees, guiding those who seek wisdom.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Evernight Keep", detail: "A keep that is always bathed in twilight, where secrets and mysteries abound.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Mystwood", detail: "A dense, magical forest where every tree hides a secret, and the air is filled with enchantment.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Starleaf Hall", detail: "A hall surrounded by trees with leaves that shimmer like stars, creating a celestial ambiance.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Roselore", detail: "A kingdom where roses are the central symbol of life, each bloom telling its own story.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Moonfall Keep", detail: "A keep situated where the moon’s glow is always at its brightest, symbolizing purity and wisdom.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Sunfire Palace", detail: "A palace built in the heart of a desert, where the sun’s heat and fire offer protection and power.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Gildedmoon", detail: "A kingdom where the moon is always bathed in gold, providing its people with protection and prosperity.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Seawind Keep", detail: "A keep built along the coast, where the sea winds blow through and offer constant refreshment.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Stormlore", detail: "A kingdom built by the sea, where storms bring both destruction and renewal.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Crystalhollow", detail: "A hollow deep in the earth, where crystals grow and radiate with magical energy.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Starbloom Hall", detail: "A hall where the stars above shine brightly, casting their light upon the kingdom below.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Cloudspire", detail: "A tower reaching into the sky, built from the softest clouds and surrounded by peace.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Faeloria", detail: "A mystical land of magic and faeries, where the air shimmers with enchantment.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Suncrest Keep", detail: "A keep where the sun never sets, always offering light and protection to its people.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Featherstone", detail: "A stone fortress with feathers strewn throughout, symbolizing freedom and strength.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Ivorybloom", detail: "A kingdom where the ivory flowers bloom eternally, giving the land an aura of peace and prosperity.", status: false, gender: "Fantasy", type: "Elegant Kingdom Name" },
  { name: "Luminara Sovereignty", detail: "A realm of shining power, where light reigns supreme in futuristic elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Astravelle", detail: "A kingdom floating among the stars, built on cosmic elegance and advanced technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Solstice Prime", detail: "A prime kingdom where solar energy fuels its futuristic advancements.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Valtoria Nexus", detail: "A central hub for the galaxy, a nexus of power and futuristic grace.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Nebula Isle", detail: "A floating island surrounded by nebula clouds, symbolizing elegance and cosmic beauty.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Velvetstar", detail: "A kingdom where the stars shine with the elegance of velvet, a tranquil yet powerful realm.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Celestium Enclave", detail: "An enclave in the celestial realm, known for its cosmic elegance and futuristic architecture.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Lumisolar", detail: "A kingdom of solar-powered cities, bathed in light and advanced technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Starlithium", detail: "A luminous kingdom powered by rare starlithium crystals, glowing with elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Cybeluxe", detail: "A high-tech city of luxury, blending cybernetics and elegance in a futuristic setting.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Galactic Hall", detail: "A hall of grandeur in the galaxy, where elegance and power converge.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Empyreal Tower", detail: "A towering beacon of futuristic elegance, reaching toward the stars.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Ethereal City", detail: "A city suspended in time and space, known for its ethereal beauty and futuristic design.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Solavion Keep", detail: "A futuristic keep shining with solar energy and technological sophistication.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Luxuria Citadel", detail: "A citadel of luxury and power, where elegance meets futuristic advancements.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Marisol Nexus", detail: "A nexus of knowledge and technology, brimming with elegance and innovation.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Serenovia", detail: "A peaceful kingdom known for its serene elegance and futuristic culture.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Aetherlux", detail: "A kingdom of light and luxury, where advanced technology and elegance converge.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Luminara Arcadia", detail: "An arcadia of light, radiating with advanced energy and peaceful elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Starveil Sovereign", detail: "A sovereign kingdom hidden behind the stars, a symbol of elegance and power.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Equinox Hall", detail: "A hall of balance and elegance, where futuristic wisdom and beauty unite.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Solara Peak", detail: "A peak of solar brilliance, where elegance and futuristic power rise together.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Ravellion", detail: "A futuristic kingdom where luxury and technology intertwine to create elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Nebulon Manor", detail: "A manor set amidst the nebula, a place of futuristic elegance and cosmic beauty.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Celestoria", detail: "A kingdom of celestial beauty, where the elegance of the stars blends with advanced technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Aurelium", detail: "A golden kingdom of luxury and futuristic advancements, glowing with elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Solonova", detail: "A kingdom powered by solar energy and advanced technology, shining brightly in elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Stardawn Keep", detail: "A keep at the dawn of the stars, where elegance meets the vastness of the cosmos.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Veloria Station", detail: "A futuristic space station known for its elegance and advanced technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Astralspire", detail: "A spire reaching toward the stars, symbolizing elegance and cosmic power.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Oriona Keep", detail: "A keep of futuristic beauty, built in the heart of the stars, radiating elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Elysium Nexus", detail: "A nexus of divine elegance and futuristic advancements, where peace reigns.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Aetherlune", detail: "A kingdom of light and shadow, where futuristic technology meets ethereal elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Helionspire", detail: "A spire of solar power and elegance, reaching high into the stars.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Galaxion Keep", detail: "A kingdom on the edge of the galaxy, known for its cosmic elegance and futuristic technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Opalstar Citadel", detail: "A citadel made of opal, glowing with elegance and advanced technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Neuronova", detail: "A futuristic kingdom known for its advanced neural technologies and elegant design.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Velorien Ascendancy", detail: "An ascendant kingdom reaching for the stars, where elegance and futuristic technology unite.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Zenithar", detail: "A kingdom at the zenith of technological advancement and elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Vexillon Keep", detail: "A keep known for its cutting-edge technology and futuristic elegance.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Xylonis Palace", detail: "A palace made of advanced materials, shining with elegance and futuristic allure.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Celestiala Core", detail: "The core of celestial power and futuristic elegance, where technology meets beauty.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Ameloria", detail: "A kingdom of timeless elegance, powered by advanced futuristic technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Nebulessa Hall", detail: "A hall set amidst the nebula, where elegance and cosmic power converge.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Luminaris Sovereign", detail: "A sovereign kingdom of light and elegance, fueled by futuristic technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Starlight Vale", detail: "A vale of starlight, bathed in elegance and powered by advanced technology.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Quantumlore", detail: "A realm of quantum energy and futuristic elegance, blending science and beauty.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Exalon", detail: "A kingdom built on the edge of a black hole, where futuristic elegance defies gravity.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Novalys", detail: "A kingdom radiating with new energy and futuristic elegance, always evolving.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Aetherivus", detail: "A kingdom where ethereal power and futuristic elegance intertwine to form a majestic realm.", status: false, gender: "Futuristic Name", type: "Elegant Kingdom Name" },
  { name: "Velorian Keep", detail: "A majestic kingdom with golden gates.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Starling Hall", detail: "A serene hall where the stars seem to shine brighter.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Silvermere", detail: "A kingdom beside the shining silver lake.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Luminara Castle", detail: "A radiant castle bathed in eternal light.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Whitehaven", detail: "A peaceful haven of pure white stone.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Queen's Reach", detail: "A kingdom that stretches across the land of royalty.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Dawnspire", detail: "A towering spire where the sun always rises.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Wintercrest", detail: "A frosty kingdom where winter never ends.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Celestine Hold", detail: "A celestial hold with connections to the heavens.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Gildedhall", detail: "A golden hall of unparalleled elegance.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Rosewood Castle", detail: "A majestic castle surrounded by rose gardens.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Faeryn Vale", detail: "A lush vale, home to magical creatures.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Ivorycrest", detail: "A pristine kingdom with ivory-white towers.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Evermore Hall", detail: "A hall that echoes with the wisdom of time.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Crystalhaven", detail: "A peaceful haven filled with sparkling crystal formations.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Moonrose Keep", detail: "A keep where the moonlight reflects on the rose-covered walls.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Thornhill Manor", detail: "A manor surrounded by thorny hills, rich in history.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Goldendale", detail: "A golden city known for its wealth and elegance.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Silverveil", detail: "A kingdom shrouded in a veil of silver mist.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Dreamspire", detail: "A spire that touches the dreams of all who visit.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Sunshroud Castle", detail: "A castle wrapped in golden sunlight, ever-warm.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Radiantkeep", detail: "A keep that shines with radiant glory.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Glimmerhold", detail: "A stronghold that glitters with mysterious light.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Pearlcliff", detail: "A cliffside kingdom where pearls are as common as stones.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Halcyon Keep", detail: "A peaceful and tranquil keep, untouched by time.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Amethyst Vale", detail: "A mystical vale rich with the violet glow of amethyst.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Everglow Palace", detail: "A glowing palace that lights up the kingdom day and night.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Whisperwind Hall", detail: "A hall where whispers of the past can still be heard.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Solsticekeep", detail: "A keep that celebrates the changing seasons.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Mistycrest", detail: "A crest that rises above the mist of the distant valley.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Crystalbloom Castle", detail: "A castle adorned with the blooms of enchanted crystals.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Thaloria", detail: "A kingdom where the heart of nature and magic meet.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Duskwind Manor", detail: "A manor where the winds of dusk always blow.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Mistbrook Keep", detail: "A keep near the misty shores of a quiet brook.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Ivoryvale", detail: "A peaceful vale surrounded by ivory-tipped mountains.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Seraphim Hall", detail: "A hall where angelic beings gather in grace.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Twilightcrest", detail: "A crest where the twilight sky stretches endlessly.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Faircrest", detail: "A fair and peaceful crest with golden fields.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Jewelton", detail: "A city glittering with the wealth of countless jewels.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Valestrana", detail: "A land of beauty and power, with rolling hills and valleys.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Opalspire", detail: "A tower made from opal, glowing with inner light.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Whiteoak", detail: "A kingdom ruled by wisdom, where the white oak trees grow.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Mistglade Keep", detail: "A keep in the heart of a mist-filled glade.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Celestiala", detail: "A celestial city where the stars align in harmony.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Rosevale", detail: "A beautiful valley filled with blooming roses.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Goldenhall", detail: "A hall made entirely of golden stone, reflecting the sunlight.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Astralore", detail: "A kingdom tied to the stars, where magic is in the air.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Glimmerveil", detail: "A veil of glimmering lights covers this mystical city.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Moonstone Keep", detail: "A keep that glows in the moonlight, standing proud.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" },
  { name: "Emberlace Castle", detail: "A castle that flickers with the light of ever-burning embers.", status: false, gender: "Medieval Name", type: "Elegant Kingdom Name" }
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
      name: "Orc Name Generator",
      pic: "/orc-name-generator.jpg",
      link: "https://www.nameideagenerator.com/Orc-name-generator",
  },
  {
      name: "Viking Name Generator",
      pic: "/vikings.jpg",
      link: "https://www.nameideagenerator.com/viking-name-generator",
  },
  {
      name: "Drow Name Generator",
      pic: "/drowname.webp",
      link: "https://www.nameideagenerator.com/drow-name-generator",
  },
  {
      name: "Wood Elf Name Generator",
      pic: "/Wood_Elf.webp",
      link: "https://www.nameideagenerator.com/wood-elf-name-generator",
  },
  ];
  
  const KingdomNameGenerator = () => {
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
  
const bgImage = "/kingdom-name-generator.jpeg"
const context = "Kingdom Name Generator with Meaning – Find the Perfect Kingdom Name"
const Q1 = "What Does a Kingdom Name Generator Do?"
const A1 = "A Kingdom Name Generator creates unique and meaningful names for fantasy realms, perfect for stories, games, or world-building projects."
const Q2 = "Is the Kingdom Name Generator Free to Use?"
const A2 = "Absolutely! Our generator is free for everyone and designed to be user-friendly."
const Q3 = "Can I Personalize the Kingdom Names?"
const A3 = "Yes, you can customize names by choosing kingdom types like medieval, futuristic, or mythical, and selecting styles such as powerful or elegant."
const Q4 = "Who Benefits from Using a Kingdom Name Generator?"
const A4 = "Writers, gamers, and creative world-builders use this tool to enhance novels, RPG campaigns, video games, or tabletop adventures."
const Q5 = "What Kinds of Names Can I Generate?"
const A5 = "You can create ancient, magical, or sci-fi-inspired kingdom names, each with a unique meaning to enrich your fantasy world."
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
        <a href="/kingdom-name-generator" className="hover:underline text-[#343a40]">Kingdom Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Kingdom Name Generator With Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Kingdom Names Type</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Medieval Names">Medieval</option>
              <option value="Futuristic Names">Futuristic</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Kingdom Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Mythical">Mythical Kingdom</option>
              <option value="Power Kingdom Name">Powerful Kingdom</option>
              <option value="Elegant Kingdom Name">Elegant Kingdom</option>
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
            What Is a Kingdom Name?
            </h2>
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            A kingdom name reflects the heart and soul of a realm. It conveys power, mystery, or elegance, shaping how others perceive the land and its rulers. 
            Whether it’s a majestic kingdom on high mountains or a mystical underwater realm, the name sets the tone for the story, culture, and legacy tied to the land.
            </p>
            <hr />
            <br />
           
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Origins of Kingdom Names in Fantasy Lore
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Fantasy lore often draws inspiration from ancient cultures, mythology, and literature. Names like Westeros or Narnia echo the grandeur of past empires and mythical realms. 
            These names capture the imagination by borrowing elements from languages, historical events, or folklore, creating a sense of authenticity in a fictional setting. 
            For example, Westeros draws on medieval European influences, while Narnia incorporates religious and mythical undertones.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Characteristics of Memorable Kingdom Names
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            A memorable kingdom name often includes rich symbolism, cultural hints, or expressions of power. It should be unique, easy to pronounce, and evoke emotions tied to the 
            kingdom’s story. For instance, a name like Eldoria might suggest a magical kingdom full of wisdom and enchantment, while Ironhold implies a fortified, battle-ready realm.
            </p>
            <br />


            <h2 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            How to Craft a Unique Kingdom Name
            </h2>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Crafting a unique kingdom name involves blending imagination with purposeful elements. Think about:
            <br /> <br />
            <ul>
              <li><b>- Cultural Influences </b>(Incorporate elements inspired by real-world languages or historical civilizations)</li>
              <li><b>- Nature and Geography </b> (Reflect the terrain or climate, such as Frosthaven for an icy realm or Sunglade for a sunlit paradise)</li>
              <li><b>- Symbolism </b> (Use meaningful words or syllables that align with the kingdom’s values, history, or rulers)</li>
            </ul>
            </p>
            <br />
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Role of Kingdom Names in World-Building
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            A kingdom name serves as more than just a label; it’s a vital tool in world-building. A well-thought-out name enhances the immersion of a story, giving readers or players a sense of place and history. 
            For example, Avaloria might suggest an ancient kingdom rich in lore, while Dreadmoor evokes danger and mystery.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Kingdom Name Generator
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Generating a unique kingdom name is easy. Follow these simple steps for a name that perfectly fits your fantasy world.
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose the Kingdom Type <b> (Fantasy, Medieval, Futuristic, etc.)</b>
              </h3>
              <p>
              Start by selecting the type of kingdom you want. Whether it’s a mystical realm or a high-tech empire, the type sets the tone.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select a Name Style <b>(Mythical, Powerful, or Elegant)</b>
              </h3>
              <p>
              Pick a style that matches the kingdom’s personality. Mythical names evoke magic, while powerful names suggest strength and dominance.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b>for Unique Kingdom Names
              </h3>
              <p>
              Click the <b> “Generate” </b>button and watch as unique names appear. Each one is designed to inspire and captivate.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Review the List and Choose Your Favorite
              </h3>
              <p>
              Browse through the generated names. Look at their meanings and select the one that best fits your vision.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="kingdom-name-generator-1.webp"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="fantasy-kingdom.webp"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/Asian-Empire.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Kingdom Name Generator
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
          <b> Features of Our Kingdom Name Generator</b>
          </h2>
          <p>
          Our Kingdom Name Generator is designed to help you create the perfect name for your fictional realm quickly and easily. 
          With powerful features and an intuitive interface, it’s the ultimate tool for writers, gamers, and world-builders alike.
            </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Customizable Name Options for Different Settings
            </h3>
            <p>
            Tailor your kingdom names to fit any setting, whether it's a novel, role-playing game (RPG), or tabletop RPG. 
            Choose from themes inspired by nature, history, mythology, or fantasy to generate names that reflect your kingdom’s environment, culture, and purpose. 
            Whether you're building a medieval kingdom, a futuristic empire, or a magical realm, our generator has you covered.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Generation of Unique Names with Meanings
            </h3>
            <p>
            Get names instantly with a single click  with our Kingdom Name Generator. Each name comes with its own backstory or meaning, enriching the narrative of your kingdom. 
            When you hover over a name, the meaning will appear, adding depth and context to the generated names. 
            This ensures that each name is not only unique but also carries significance, whether you're designing a powerful realm or a mystical land.        
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Perfect for Writers, Gamers, and World-Builders
            </h3>
            <p>
            Whether you're a writer working on your next fantasy novel, a gamer designing a kingdom for your RPG, or a world-builder looking to create immersive settings, 
            our Kingdom Name Generator is the perfect tool. Find the right name that fits the vibe of your world, from epic and grand to mysterious and dark. 
            Ideal for storytellers, game developers, and creative minds, this tool will help you craft authentic names that resonate with your audience.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Unique and Original Name Combinations
            </h3>
            <p>
            The generator combines different words, traits, and themes to ensure originality. Every name is crafted to feel fresh and distinctive, avoiding overused or generic names. 
            By pulling from a wide range of elements, the tool guarantees that each name will reflect your cat’s personality and backstory, giving it a truly one-of-a-kind feel.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Types of Kingdom Names
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Our Kingdom Name Generator allows you to explore a wide range of kingdom names suited for different themes and settings. 
          Whether you’re creating a historical empire, a mystical land, or a futuristic society, you’ll find the perfect name for your realm.
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Ancient Kingdom Names – Strong and Timeless
              </h3>
              <p>
              Ancient kingdom names embody strength, legacy, and historical significance. Names like Eldoria or Thalor evoke the grandeur of ancient civilizations and royal lineages. 
              These names carry a sense of timelessness and honor, ideal for empires with rich traditions and legendary histories. 
              Whether you're building a medieval world or an ancient empire, these names give your kingdom a majestic and enduring presence.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Mythical Kingdom Names – Magical and Enchanting
              </h3>
              <p>
              Mythical kingdom names create an aura of magic and fantasy. Names such as Mysthaven or Avaloria conjure images of enchanted lands, filled with mystical creatures 
              and ancient sorcery. These names are perfect for realms steeped in legends, magical forces, or ethereal beauty. 
              If your kingdom has a fantastical, dream-like quality, these names will evoke the wonder and allure of a magical world.
              </p>
              
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Futuristic Kingdom Names – Advanced and Innovative
              </h3>
              <p>
              Futuristic kingdom names have a modern, sci-fi feel. Names like Neoark or Cyberon evoke a sense of technological advancement, innovation, and progress. 
              These names are perfect for creating a high-tech, dystopian, or utopian world. 
              Whether you're designing a future empire, a tech-driven society, or a space-faring civilization, these names will help your kingdom stand out in a futuristic setting.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="kingdom-name-generator.webp"
              alt="Kingdom Name Generator With Meaning"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="doug-hyun-ancient-temple.jpg"
              alt="Kingdom Name Generator With Meaning"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[100vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Where to Use the Kingdom Name Generator
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Discover creative ways to use the Kingdom Name Generator for various projects and activities.
          </p>
          <br />
        <hr />
          <br />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Fantasy Novels and Short Stories
              </h3>
              <p>
              Add depth to your stories with a unique kingdom name. 
              A well-crafted name can set the tone for your novel’s world, making it more immersive and memorable for readers.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Video Games and Role-Playing Games (RPGs)
              </h3>
              <p>
              Whether designing a video game or creating an RPG campaign, a distinctive kingdom name enhances gameplay. 
              Players will appreciate the added detail and realism in their immersive experience.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Creative Writing Projects and World-Building
              </h3>
              <p>
              Bring originality to your creative writing projects. 
              Use the generator to invent names for kingdoms in your world-building endeavors, giving your universe a unique and coherent feel.
              </p>
            </div> 
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Naming Kingdoms for Online Communities or Forums
              </h3>
              <p>
              Online communities and forums often need imaginative names for groups or clans. 
              The Kingdom Name Generator provides names that inspire camaraderie and creativity.
              </p>
            </div> 
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Educational and Classroom Activities
              </h3>
              <p>
              Teachers and students can use the generator for fun classroom projects. 
              It’s perfect for creative writing assignments or as part of history lessons focused on medieval or fantasy themes.
              </p>
            </div> 
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="Fallen-kingdom.jpg"
              alt="Kingdom Name Generator With Meaning"
              className="w-[380px] my-[20px] h-[360px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
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
          <b> Famous Kingdom Names from Fantasy Lore</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Connection to Nature and Traits 
            </h3>
            <p>
            Delve into the world of fantasy with famous kingdom names that have captivated fans across literature, movies, and video games. 
            These iconic names have not only inspired countless creators but also set benchmarks for memorable world-building in fiction.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Legendary Kingdoms in Fantasy Stories
            </h3>
            <p>
            Fantasy literature is rich with legendary kingdoms that spark imagination and awe. For instance, Westeros from Game of Thrones portrays 
            a vast realm filled with political intrigue, rich history, and diverse cultures. Similarly, Narnia from The Chronicles of Narnia invites readers 
            into a magical world of talking animals and epic battles between good and evil. These names resonate because they evoke grandeur, adventure, and 
            the essence of their respective stories. Writers and creators often draw from such iconic examples to craft realms that are equally captivating and meaningful.          
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Iconic Kingdoms from Video Games
            </h3>
            <p>
            Video games offer another treasure trove of unforgettable kingdom names. Hyrule from The Legend of Zelda is a shining example, representing a timeless land of 
            adventure, courage, and legend. Similarly, Tamriel from The Elder Scrolls series stands out for its intricate lore and diverse provinces, making it a favorite 
            among gamers. These names not only define the game's world but also shape the player's journey, adding depth to the overall experience. Aspiring game designers
             can take inspiration from such iconic examples to create immersive settings.
            </p>
          </div>

          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Influential Kingdoms in Movies and TV Series
            </h3>
            <p>
            Movies and TV series have also introduced kingdoms that left lasting impressions on audiences. 
            Asgard from the Marvel Cinematic Universe combines Norse mythology with modern storytelling, depicting a celestial kingdom of gods. 
            Meanwhile, Erebor, the dwarven kingdom from The Hobbit, is renowned for its wealth, resilience, and grandeur. 
            Such names contribute to the larger-than-life settings of their stories, making them memorable for viewers.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            How These Names Influence World-Building
            </h3>
            <p>
            Famous kingdom names often become synonymous with their stories. They shape perceptions of the realm’s culture, history, and values. 
            Whether it’s the mystique of Camelot, the mystery of Atlantis, or the peril of Mordor, these names become integral to the identity of the world they represent. 
            Aspiring creators can learn from these examples by focusing on meaningful names that resonate with their narrative themes.
            </p>
          </div>

          <div className="py-[10px] flex flex-col gap-2">
            <h2 className="sm:text-[20px] text-[22px] sm:font-normal font-semibold">
            Why Use Our Kingdom Name Generator?
            </h2>
            <p>
            Discover why our tool is the best choice for creating unique kingdom names.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[16px] text-[22px] sm:font-normal font-semibold">
            - Easy to Use and Free for Everyone
            </h3>
            <p>
            Anyone can use this tool for free. It’s quick, intuitive, and requires no special skills.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[16px] text-[22px] sm:font-normal font-semibold">
            -  Unique, Creative, and Meaningful Names
            </h3>
            <p>
            Each name is crafted with creativity and comes with an insightful meaning to enhance your project.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[16px] text-[22px] sm:font-normal font-semibold">
            - Trusted by Writers, Gamers, and Fantasy Enthusiasts
            </h3>
            <p>
            Our generator is trusted by writers, gamers, and creators worldwide for its reliable results.
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

export default KingdomNameGenerator;

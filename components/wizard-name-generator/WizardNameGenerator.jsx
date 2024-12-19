"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Pyronus Blazeheart", detail: "A fiery wizard who controls the inferno.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Inferna Scorchbane", detail: "A wizard with the power to extinguish raging fires.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Flamirus Firefang", detail: "A powerful fire mage with a beastly spirit.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Scorcher Ardentflame", detail: "A sorcerer whose flames never fade.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Emberon Ashbringer", detail: "A wizard who commands the ashes of the fallen fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Vulcanus Wildfire", detail: "A fierce wizard who commands the untamed blaze.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Flarion Emberstorm", detail: "A wizard who conjures storms of burning embers.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Incendia Magmavise", detail: "A sorceress who sees through the molten heart of fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Volcanus Firekeeper", detail: "A protector of sacred fire, sworn to control its power.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Cindor Flameheart", detail: "A wizard whose heart burns with the fury of flames.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Blazeon Pyromancer", detail: "A wizard who wields the art of fire magic.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Ignis Firewielder", detail: "A master of flame, capable of summoning fire at will.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Flamara Flamewhisper", detail: "A fiery mage who speaks to the flames and hears their secrets.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Infernos Firestorm", detail: "A wizard who summons raging storms of fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Magmus Flamebinder", detail: "A sorcerer who binds the flames to his will.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Solvanta Emberstrike", detail: "A wizard with the power to strike with embers of destruction.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Aetheros Firesurge", detail: "A wizard who channels the very essence of fire into bursts of energy.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Pyros Firebrand", detail: "A rebellious fire mage with an unquenchable passion for flame.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Blazara Cinderglow", detail: "A mage whose glow reflects the remnants of smoldering fires.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Searing Emberflare", detail: "A fiery wizard who controls the searing intensity of flames.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Emberis Flamecaller", detail: "A wizard who calls upon the flames to do their bidding.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Blazewind Pyroclasm", detail: "A fiery mage who summons explosive pyroclastic blasts.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Vulcara Blazeveil", detail: "A fiery sorceress who wraps herself in a veil of flame.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Flamora Ashwind", detail: "A wizard who can control the winds of smoldering ash.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Scorchma Fireblaze", detail: "A mage whose every step leaves a trail of fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Emberis Pyroforge", detail: "A blacksmith wizard who forges powerful weapons with fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Solara Flamewhirl", detail: "A wizard whose magic creates whirlwinds of fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Cindara Emberstorm", detail: "A sorceress who can summon a tempest of embers and flame.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Ignara Fireflash", detail: "A fiery mage whose magic flashes like a bolt of flame.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Scaldor Flamevortex", detail: "A wizard whose powers create vortexes of scalding heat.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Emberis Blazingfury", detail: "A fiery mage who channels the wrath of blazing fury.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Ignifera Firestorm", detail: "A wizard who commands the violent fury of firestorms.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Fyrna Emberflare", detail: "A sorceress with the ability to summon fiery flares at will.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Cindell Pyroshade", detail: "A wizard who shrouds himself in shadows of fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Infernox Firebringer", detail: "A powerful wizard who can summon fire from the depths of the earth.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Emberana Flamewhisper", detail: "A wizard whose whispers can ignite the fiercest flames.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Flarion Firebender", detail: "A wizard who can bend and manipulate fire with ease.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Cindus Flamecaller", detail: "A fire mage who calls upon the flames to obey his will.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Emberon Cinderfury", detail: "A wizard whose fury burns as hot as the fiercest fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Scaldros Firewhirl", detail: "A wizard whose presence creates a spinning whirlwind of fire.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Blazemaster Scorchwind", detail: "A master of fire magic, capable of summoning fiery winds.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Emberis Blazewind", detail: "A sorceress whose magic brings forth powerful winds of flame.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Flamora Cindervault", detail: "A wizard who seals the power of fire in a magical vault.", status: false, gender: "Fire", type: "Powerful Wizard" },
    { name: "Frostos Iceveil", detail: "A wizard whose magic wraps the world in a veil of frost.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Glaciar Snowspike", detail: "A master of ice magic, controlling the sharpest of snowspikes.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Wintersun Cryoblade", detail: "A wizard whose blade freezes anything it touches.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Cindris Iceforge", detail: "A wizard who forges magical items from pure ice.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Nivara Frostbite", detail: "A mage whose touch freezes all in its path.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Glacius Icewhisper", detail: "A wizard who speaks to the winds of winter.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Borealis Snowweaver", detail: "A weaver of the northern lights and snowstorms.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Frostwyn Shiverclaw", detail: "A wizard whose claws can freeze the strongest foes.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Iciclea Glacialbane", detail: "A sorceress who banishes the heat of the world with her icicles.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Cryon Icebreaker", detail: "A wizard who breaks through the hardest of ice barriers.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Gelidia Frostbinder", detail: "A mage who binds the coldest forces to her will.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Glacius Frostwhisperer", detail: "A whisperer who calls forth the chilling winds of the north.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Icaris Glacialshroud", detail: "A wizard who hides in a shroud of icy mist.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Hailmar Frostbringer", detail: "A wizard who brings the hailstorms with his every step.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Nivalon Icewarden", detail: "A guardian who keeps the eternal ice from breaking its bounds.", status: false, gender: "Ice", type: "Powerful Wizard" },
    { name: "Icephira Frostcaller", detail: "A sorceress who calls upon the deep chill of winter.", status: false, gender: "Ice", type: "Powerful Wizard" },
        { name: "Frostfang Snowstrike", detail: "A wizard whose strikes leave trails of frost wherever they land.", status: false, gender: "Ice", type: "Powerful Wizard" },
        { name: "Noctar Shadowflame", detail: "A dark wizard whose power is fueled by shadows and flames.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Vantheon Blackshadow", detail: "A master of the shadows, who thrives in darkness and stealth.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Tenebris Duskstrike", detail: "A wizard who strikes with the fury of the dusk, drawing power from the twilight.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Nyxaris Nightbane", detail: "A dark mage whose magic revolves around banishing the light of the night.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Mortus Darkbane", detail: "A dark wizard with the ability to banish evil from the realm using his powers.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Luriona Shadowsoul", detail: "A mage with a soul entwined with the shadows, casting powerful curses.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Gloomar Nightweaver", detail: "A dark sorcerer who weaves the gloom of night into powerful spells.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Duskara Shadewind", detail: "A master of shadow manipulation, controlling the winds of dusk.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Obscuro Darkfang", detail: "A dark wizard whose fangs are as sharp as his magical strikes.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Nekron Shadowmancer", detail: "A master of necromancy and shadows, controlling the forces of the dead.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Nyctis Darkwhisper", detail: "A wizard whose whispers in the dark can drive enemies to madness.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Umbra Shadowflame", detail: "A sorcerer who wields the power of shadow and flame in tandem.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Umberis Darkstalker", detail: "A dark wizard who stalks the shadows, hunting down his enemies.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Morvath Nightshade", detail: "A wizard who uses nightshade and poisonous magic to defeat his foes.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Solvar Darkclaw", detail: "A dark wizard whose claws are as sharp as the night he controls.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Shadowis Nightwhisper", detail: "A dark sorcerer whose whispers in the night strike fear into all.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Valsora Darksurge", detail: "A wizard whose dark surge of magic can overpower even the strongest foes.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Obsidian Nocturnus", detail: "A master of obsidian magic, summoning shadows from the deepest darkness.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Noxar Shadewalk", detail: "A dark wizard who can walk through the shadows, unseen and unheard.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Morrigan Darkblade", detail: "A sorceress who wields a blade forged from the essence of darkness.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Lurkus Shadowsurge", detail: "A dark wizard who channels the surge of shadows to gain power.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Noctaria Darkweaver", detail: "A master weaver of dark magic, manipulating the night to her will.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Dreadron Blackthorn", detail: "A fearsome wizard whose thorny magic strikes at the heart of his enemies.", status: false, gender: "Dark", type: "Powerful Wizard" },
{ name: "Solis Radiantflare", detail: "A wizard who channels the radiant power of the sun to heal and protect.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Luminara Dawnstrike", detail: "A sorceress who harnesses the power of dawn to strike down darkness.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Althara Lightbringer", detail: "A beacon of light, guiding others with the power of illumination.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Solvaris Sunblaze", detail: "A wizard who summons the fiery rays of the sun to smite foes.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Radiis Luminary", detail: "A luminous being who brings light and hope to all who encounter them.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Serenar Sunflame", detail: "A mage whose magic burns like the calm sun, purging all evil.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Celestia Dawnwhisper", detail: "A wizard who whispers the first rays of dawn to heal and protect.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Solon Radiancekeeper", detail: "The keeper of radiant magic, a protector of the light.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Luxaris Daybreaker", detail: "A sorcerer who uses the power of the sun to break through the darkness.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Azelith Luminflare", detail: "A wizard whose magic flares with radiant light to vanquish the wicked.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Helion Dawnweaver", detail: "A master weaver of the dawn, crafting spells that dispel the night.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Solvantis Radiantveil", detail: "A protector who cloaks themselves in the veil of radiant light.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Lioris Daylightbane", detail: "A light wizard who banishes the forces of darkness with their radiant magic.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Helios Shiningflare", detail: "A master of shining light magic, summoning the brilliance of the sun.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Astraeus Sunrays", detail: "A powerful sorcerer who commands the sun's rays to strike down enemies.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Luminis Sunstrike", detail: "A wizard who strikes with the power of the sun, overwhelming their foes.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Elarion Daywhisper", detail: "A light mage who communicates with the whispers of the dawn.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Solara Radianceflame", detail: "A sorceress whose magic burns with the radiant fire of the sun.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Lumira Dayweaver", detail: "A wizard who weaves the fabric of daylight to create powerful spells.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Radiantor Luminousflame", detail: "A powerful mage whose flames burn with the light of the heavens.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Celestara Lightveil", detail: "A master of light magic, whose veil of radiance protects all who stand beneath it.", status: false, gender: "Light", type: "Powerful Wizard" },
{ name: "Pyrosan Emberwhisper", detail: "A fire wizard known for controlling blazing embers to whisper destruction.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Solfyr Flameweaver", detail: "A wizard who weaves flames into fiery attacks with unmatched skill.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Ignara Blazeheart", detail: "A fierce fire wizard with a heart that burns with unyielding passion.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Eryndor Firewisp", detail: "A cunning wizard who uses fire wisps to outwit their enemies.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Azariel Ashbringer", detail: "A fire wizard whose flames reduce everything to ashes.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Flariona Magmavise", detail: "A wizard adept at summoning magma to trap and destroy foes.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Incendris Emberstorm", detail: "A fire wizard capable of summoning storms of blazing embers.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Ashara Flamebinder", detail: "A wizard who binds their enemies with chains of fire.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Pyrion Blazewhisper", detail: "A sorcerer who whispers to the flames to awaken their fury.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Magmair Firestalker", detail: "A fiery predator who stalks enemies with a blazing trail.", status: false, gender: "Fire", type: "Mystical Wizard" },
{ name: "Glacian Snowflame", detail: "A frosty wizard who can manipulate both snow and fire for devastating effects.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Cryon Snowveil", detail: "A master of veils of snow, concealing themselves in icy mist.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Frigon Frostwhisper", detail: "A sorcerer whose whispers can chill the air and freeze hearts.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Hailyn Froststrike", detail: "A wizard who strikes with the sharpness of frost and hail.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Glacius Iceborn", detail: "A wizard born of ice, capable of crafting intricate frost spells.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Borealis Frostmancer", detail: "A mage who controls the northern lights to cast frost magic.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Nivaria Coldstorm", detail: "A frost wizard who summons storms of icy winds to freeze foes.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Crythus Frostfury", detail: "A wizard whose fury manifests as icy storms and snow squalls.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Gelithar Winterwind", detail: "A mage who harnesses the power of the cold winter winds.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Frostis Iceclaw", detail: "A wizard with sharp, frosty claws that can tear through anything.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Glacian Snowflame", detail: "A frosty wizard who can manipulate both snow and fire for devastating effects.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Cryon Snowveil", detail: "A master of veils of snow, concealing themselves in icy mist.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Frigon Frostwhisper", detail: "A sorcerer whose whispers can chill the air and freeze hearts.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Hailyn Froststrike", detail: "A wizard who strikes with the sharpness of frost and hail.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Glacius Iceborn", detail: "A wizard born of ice, capable of crafting intricate frost spells.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Borealis Frostmancer", detail: "A mage who controls the northern lights to cast frost magic.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Nivaria Coldstorm", detail: "A frost wizard who summons storms of icy winds to freeze foes.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Crythus Frostfury", detail: "A wizard whose fury manifests as icy storms and snow squalls.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Gelithar Winterwind", detail: "A mage who harnesses the power of the cold winter winds.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Frostis Iceclaw", detail: "A wizard with sharp, frosty claws that can tear through anything.", status: false, gender: "Ice", type: "Mystical Wizard" },
{ name: "Nyctis Darkshadow", detail: "A dark wizard who thrives in the absence of light.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Noctar Shadowbane", detail: "A shadow mage who banishes light with his dark power.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Valthor Dreadflame", detail: "A wizard who combines darkness and flame into a deadly mix.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Obsidar Nightwhisper", detail: "A master of dark whispers, spreading fear through shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Morvath Blackstorm", detail: "A dark mage who summons storms of blackened skies and chaos.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Umbraeth Darkmancer", detail: "A shadow caster who controls the deepest and darkest magics.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Gloomar Nightshade", detail: "A wizard whose connection to the nightshade plant empowers his magic.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Nyxira Shadowveil", detail: "A sorceress who veils herself in shadows to strike from the dark.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Mortor Darkbringer", detail: "A wizard who brings darkness to the brightest realms.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Tenebros Nightwraith", detail: "A dark mage whose spectral form haunts the night.", status: false, gender: "Dark", type: "Mystical Wizard" },
{ name: "Luminara Dawnstrike", detail: "A wizard who channels the first rays of dawn to strike with power.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Solvira Sunflare", detail: "A sorceress who wields the flares of the sun to blind her enemies.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Aurion Lightflare", detail: "A radiant wizard whose brilliance can outshine even the stars.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Radiara Dawnmancer", detail: "A master of dawn magic, crafting spells of light and warmth.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Celestium Luminwind", detail: "A wizard who commands the celestial winds of light.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Solara Lightweaver", detail: "A mage who weaves light into protective and offensive spells.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Lysandra Solstorm", detail: "A sorceress who summons storms of radiant sunlight.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Elarion Sunwhisper", detail: "A wizard who whispers the secrets of the sun into his magic.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Helior Dawnwhisper", detail: "A mage who channels the whispers of dawn to heal and protect.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Solathis Dayclaw", detail: "A wizard who strikes with the precision of sunlight through a claw.", status: false, gender: "Light", type: "Mystical Wizard" },
{ name: "Pyraen Cindergloom", detail: "A cursed wizard wielding flames of eternal gloom.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Ignarion Ashcurse", detail: "A fiery sorcerer known for leaving ash in their wake.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Scornar Flamebane", detail: "A wizard cursed to banish flames yet bound to their power.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Vulkarin Burnshadow", detail: "A master of shadows born from fire's wrath.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Blazara Curseweaver", detail: "A flame-weaving wizard whose curses burn eternally.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Emberis Darkflame", detail: "A cursed flame user with an aura of eternal dusk.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Flarith Firecurse", detail: "A wizard whose fiery magic is a blessing and a curse.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Magmora Pyroblight", detail: "A pyro wizard capable of summoning volcanic blights.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Solgar Flamebane", detail: "A flame-bane wizard shrouded in mystical fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Cindris Infernalshade", detail: "A sorcerer cloaked in the inferno's shadow.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Ignisash Ashwraith", detail: "A wraith-like wizard controlling deadly ashes.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Flamosis Burnedveil", detail: "A veil-bearer wizard whose presence scorches.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrosian Cursedfire", detail: "A cursed wielder of ancient and uncontrollable flames.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Scorchedra Flamewhisper", detail: "A whispering sorcerer whose flames speak curses.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Blazaron Cinderbane", detail: "A bane to cinders and fire, steeped in dark magic.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Magmos Cursefire", detail: "A wizard cursed to carry the eternal fire of sorrow.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Emberoth Pyroshade", detail: "A cursed mage wrapped in pyrotic shadows.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Flarion Burnwraith", detail: "A burning wraith who casts fiery doom.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Scorcharon Ashclaw", detail: "An ash-bearing sorcerer whose claws bring ruin.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrosis Flamefury", detail: "A wizard fueled by fury and fiery chaos.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Cindarion Scorchedveil", detail: "A veiled sorcerer scorched by their own curse.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Magmara Cursewhisper", detail: "A flame sorcerer whose whispers curse and scorch.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Ignarion Burnmancer", detail: "A spell caster specializing in burning curses.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Flaris Cinderflame", detail: "A cursed wizard wielding fiery cinders as weapons.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Solveron Firecurse", detail: "A legendary flame master bound to cursed fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrakar Infernoweaver", detail: "A weaver of infernal spells and fiery magic.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Magmorus Cursedflame", detail: "A cursed flame wielder born from volcanic fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Embermar Pyrocursed", detail: "A pyro-cursed wizard with eternal embers.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Scorchian Firecursed", detail: "A master of cursed fire with scalding magic.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrosana Curseflame", detail: "A wizard commanding cursed flames with elegance.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Blazorus Ashwhisperer", detail: "A flame-touched wizard whispering ashbound curses.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Flarion Firefiend", detail: "A fiendish mage driven by cursed fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Magmira Cursedstorm", detail: "A storm-casting sorcerer cursed by fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Blazora Scorchedgloom", detail: "A gloomy mage scorched by eternal fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Ignaris Curseflame", detail: "A flame mage whose curses burn endlessly.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrosis Burnstrike", detail: "A wizard striking with flames of ruin.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Scornar Flamewhisper", detail: "A whispering sorcerer of cursed flames.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Cindrin Fireweaver", detail: "A wizard weaving fire with cursed precision.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Magmarios Curseflame", detail: "A mage of volcanic flames and cursed fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Emberis Blazebane", detail: "A fire wizard wielding cursed embers.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Flaron Cursefire", detail: "A cursed mage with flames of torment.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrakos Ashstorm", detail: "A wizard conjuring cursed ash storms.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Blazarion Firebinder", detail: "A mage binding flames into cursed spells.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Magmoria Curseweaver", detail: "A weaver of cursed volcanic fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Flarin Firewhisperer", detail: "A whisperer of curses and fiery magic.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrosin Scorchedbane", detail: "A mage cursed to bear the burden of fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Emberis Flamefury", detail: "A flame wielder driven by cursed fury.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Ignarith Cursedflame", detail: "A wizard wielding flames of eternal torment.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Pyrosar Curseflare", detail: "A mage with cursed flares of devastating fire.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Solgaris Ashblight", detail: "A sorcerer bound to cursed ash and blight.", status: false, gender: "Fire", type: "Cursed Wizard" },
  { name: "Glaciar Frostweaver", detail: "A wizard weaving frost to trap enemies in icy prisons.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryonax Shardspirit", detail: "A shard-covered sorcerer wielding freezing winds.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frystal Frostshade", detail: "A shadowy mage who freezes foes silently.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Borean Icewraith", detail: "An icebound spirit casting winter’s wrath.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icetrix Coldcurse", detail: "A cursed wizard whose ice magic drains vitality.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Avalar Frostclaw", detail: "A clawed mage bringing icy doom to enemies.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Gelidus Snowbringer", detail: "A bringer of snowfall and wintery despair.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryonis Glaciate", detail: "A sorcerer freezing landscapes with immense power.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frosmere Icetide", detail: "A tidecaster who controls icy currents.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Snowveil Frostbinder", detail: "A mage binding frost into intricate spells.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Glacior Coldflame", detail: "A mage who wields the rare cold fire.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryomir Chillshade", detail: "A shade-like sorcerer freezing all in their path.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icelith Shardstorm", detail: "A shardstorm-wielding wizard spreading icy destruction.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frostarion Winterveil", detail: "A veiled sorcerer of endless winter.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Gelanar Icecurse", detail: "A cursed frost wielder trapping enemies in despair.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Blizzar Frostbite", detail: "A mage whose touch chills to the bone.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Chyros Icestorm", detail: "A storm-wielding sorcerer casting icy destruction.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Snowlar Frostgloom", detail: "A gloomy wizard shrouded in frost's embrace.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryonix Wintershade", detail: "A shadow-bound mage freezing foes with ease.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icari Frostbane", detail: "A bane of frost controlling icy winds.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Borealis Chillspirit", detail: "A ghostly wizard mastering freezing magics.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Froskar Coldweaver", detail: "An ice mage weaving complex frosty curses.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icetralis Shardkeeper", detail: "A guardian of ancient icy shards.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryalith Frostflayer", detail: "A frost-laden mage flaying enemies with cold.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Glacimar Frostveil", detail: "A veiled mage spreading a chill in their wake.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryonis Shiverblade", detail: "A blade-wielding mage with frozen steel.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icarius Chillbane", detail: "A frost-cloaked mage carrying icy bane.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frostyr Shardmancer", detail: "A shard-controlling wizard freezing time.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Crytress Icebind", detail: "A sorceress binding ice into powerful enchantments.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Snowrax Winterflame", detail: "A unique mage casting frosted flames.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Gelanthor Frostshard", detail: "A frost shard wielder forging icy weapons.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Blizzara Icegloom", detail: "A shadow-bound mage of icy doom.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frigara Coldspike", detail: "A spike-forging mage piercing enemies with frost.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryolyn Glacisoul", detail: "A soul-bound mage tied to eternal ice.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frosmar Chillshade", detail: "A shade-like wizard spreading icy whispers.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icandra Freezeveil", detail: "A mage cloaked in icy mystery.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Avalis Frostcaller", detail: "A caller of icy winds and blizzards.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Crythar Frostwraith", detail: "A wraith-like wizard spreading wintery dread.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icetor Chillspine", detail: "A spinecaster projecting frosty spikes.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frosveil Icegaze", detail: "A frost-gazing mage chilling with their stare.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Glacion Frostbane", detail: "A bane of winter commanding ice.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryon Frostwhisper", detail: "A whispering sorcerer casting frostbound spells.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icros Glacialstorm", detail: "A stormcaster with a gift for icy chaos.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Frostarion Chillveil", detail: "A veiled mage chilling the hearts of their enemies.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Snowlith Frostcurse", detail: "A frost-cursed mage carrying eternal snow.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Avalra Coldmist", detail: "A mist-wielding frost wizard cloaked in ice.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Cryomir Frostshade", detail: "A shade-wielder casting cold spells of ruin.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Icyrion Chillblade", detail: "A blade-wielding frost mage with icy elegance.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Gelroth Frostveil", detail: "A veil-bearing frost mage cloaked in snow.", status: false, gender: "Ice", type: "Mystical Wizard" },
  { name: "Umbros Duskweaver", detail: "A weaver of shadows, crafting spells from darkness.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Nyctar Shadowblade", detail: "A blade-wielding sorcerer cloaked in eternal night.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Morbane Soulwhisper", detail: "A whispering wizard commanding the spirits of the void.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Abylar Nightbringer", detail: "A bringer of darkness, casting the world into gloom.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Noctaros Gloomshade", detail: "A shade-bound sorcerer spreading despair.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Tenebris Darkflame", detail: "A master of dark flames consuming the light.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Ecliptor Shadowveil", detail: "A veiled mage blending into the darkest shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Voidar Nullcaller", detail: "A caller of the void, commanding nothingness itself.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Duskar Obsidianwraith", detail: "A wraith-like sorcerer cloaked in obsidian shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Mortalus Shadebinder", detail: "A binder of shades, enslaving darkness to their will.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Necroth Dreadspire", detail: "A dread mage raising spires of shadow.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Umbryss Nightclaw", detail: "A clawed mage tearing the light apart.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Nyxxar Gloombane", detail: "A bane of light, spreading endless gloom.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Obscurix Voidshade", detail: "A mage hiding in the void, unseen by mortal eyes.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Abyssar Shadowthorn", detail: "A thorned mage piercing enemies with dark magic.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Noctris Soulshard", detail: "A shard-wielder capturing souls in dark crystals.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Gloomar Nightwisp", detail: "A wisp-like wizard dissolving into pure darkness.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Erebus Darkspire", detail: "A spire-raising sorcerer commanding shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Shadriel Voidbringer", detail: "A bringer of voids, consuming light and hope.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Mortane Umbrafang", detail: "A fang-wielding mage drawing power from the void.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Noctum Gloomfang", detail: "A fang-cloaked wizard spreading despair.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Ebonis Shadowgrasp", detail: "A grasping mage holding onto darkness.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Tenebrix Nightshade", detail: "A shade-wielder drawing strength from darkness.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Necroxis Gloomspire", detail: "A spire-wielding wizard haunting with shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Duskar Voidflame", detail: "A flame-bearer spreading dark fire.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Nyxar Shadowbind", detail: "A mage binding shadows into servitude.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Umbralith Voidspike", detail: "A spike-throwing sorcerer of the abyss.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Mortalis Nightcurse", detail: "A cursed sorcerer wielding unholy spells.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Necros Voidbane", detail: "A bane of light, commanding endless voids.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Abythorn Shadowrift", detail: "A rift-caller opening gateways to the abyss.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Obsidara Gloomsoul", detail: "A soul-binder wielding shadowy death.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Voidar Nightcaster", detail: "A caster of night, spreading infinite darkness.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Dusklorn Darkshade", detail: "A mage cloaked in dusky shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Necrolis Umbraflame", detail: "A flame-forging mage burning hope away.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Tenebros Nightveil", detail: "A veiled mage commanding eternal night.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Noctilith Shadecaller", detail: "A caller of shades, bending shadows to their will.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Umbryth Voidwhisper", detail: "A whisperer of voids, spreading silent despair.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Necroth Shadebane", detail: "A bane of hope, crushing spirits with shadow.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Gloomar Nightkeeper", detail: "A keeper of dark secrets, hidden in shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Duskar Gloomveil", detail: "A veiled mage haunting dreams with shadows.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Umbryss Voidthorn", detail: "A thorn-wielder forging spikes from darkness.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Abyssar Soulbinder", detail: "A binder of souls, casting eternal torment.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Ecliptor Shadowlash", detail: "A lash-wielding wizard breaking light into void.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Voidara Gloomfang", detail: "A fang-bearer spreading the poison of despair.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Noctros Duskbringer", detail: "A bringer of dusk, commanding endless night.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Mortarith Nightflame", detail: "A flame-wielder burning hope to ashes.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Gloombar Voidfang", detail: "A fang-bearing wizard draining life with darkness.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Ebonis Shadowrift", detail: "A rift-wielder summoning shadows at will.", status: false, gender: "Dark", type: "Mystical Wizard" },
  { name: "Solathis Dayclaw", detail: "A wizard who strikes with the precision of sunlight through a claw.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Lumira Radianceheart", detail: "A radiant mage whose heart glows with pure light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Elyar Sunforge", detail: "A forger of spells infused with the power of the sun.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Aetherion Dawnflare", detail: "A bringer of dawn, casting flares of illuminating magic.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Calion Brightweave", detail: "A weaver of spells that shine like woven starlight.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Seraphis Glowmantle", detail: "A mantled wizard cloaked in angelic glow.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Illumaris Goldspire", detail: "A spire-crafting mage drawing power from golden rays.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Aurion Starborn", detail: "A mage born of the stars, wielding cosmic light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Helian Lightrender", detail: "A caster who rends darkness with beams of light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Phoenith Solarshade", detail: "A wizard balancing solar power with shadow's edge.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Dawnara Glowspire", detail: "A spire-forging mage lighting the way.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Lunithia Skyspark", detail: "A spark-wielding mage commanding celestial power.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Auralyn Brightshield", detail: "A defender conjuring shields of pure light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Celestus Lightwhisper", detail: "A whisperer of light, spreading soft radiance.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Zerith Sunbringer", detail: "A mage summoning the might of the blazing sun.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Illumiel Dayflame", detail: "A flame-casting wizard fueled by the day's essence.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Luminous Goldveil", detail: "A veiled sorcerer channeling beams of golden light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Radiar Sunblade", detail: "A sword-wielding mage of blinding brilliance.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Heliara Glowtide", detail: "A tide-weaver spreading ripples of celestial light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Celistra Brightcaster", detail: "A caster of spells glowing with divine energy.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Lunaris Dawnspike", detail: "A spike-forging mage commanding the morning's light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Aethera Radiantfall", detail: "A mage whose spells fall like radiant rain.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Solyr Brightsong", detail: "A singer of spells echoing with celestial harmony.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Elios Dawnweaver", detail: "A weaver of dawn, crafting spells of renewal.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Heliaris Sunspirit", detail: "A spirit-bound wizard channeling solar power.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Aurialis Glowspark", detail: "A spark-wielder igniting the sky with brilliance.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Zelior Lightforge", detail: "A forge-master molding light into weapons.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Solynth Starflare", detail: "A mage unleashing flares of astral brilliance.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Lunaria Shimmerwave", detail: "A wave-weaver spreading shimmering radiance.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Illaria Radianceblade", detail: "A blade-wielding mage glowing with heavenly light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Dawnith Starbloom", detail: "A bloom-wielding wizard conjuring celestial flowers.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Auralis Lightspire", detail: "A spire-builder crafting towers of illumination.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Phoebar Glowshard", detail: "A shard-wielder channeling solar brilliance.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Solian Brightdancer", detail: "A dancer of light weaving radiant magic.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Helion Sunflame", detail: "A flame-wielding mage igniting shadows with sunlight.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Zerilia Goldspark", detail: "A spark-wielding sorcerer crafting spells of gold.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Celion Radianceflow", detail: "A flow-weaving mage spreading tides of light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Aetheris Glowfang", detail: "A fang-wielding mage radiating celestial energy.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Heliar Brightpulse", detail: "A pulse-caster radiating waves of light.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Lunithia Shimmerwind", detail: "A wind-weaving wizard spreading celestial breezes.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Solara Dawnspire", detail: "A spire-forging sorceress glowing with renewal.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Elyrion Sunlash", detail: "A lash-wielding mage striking with solar force.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Illumara Starwave", detail: "A wave-caster spreading celestial harmony.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Aurion Radiantwhisper", detail: "A whisperer of divine radiance.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Phoenith Glowforge", detail: "A forge-master blending light into weapons.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Zerith Starveil", detail: "A veiled mage whose spells sparkle with starlight.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Celestara Daycaller", detail: "A caller of sunlight, banishing the night.", status: false, gender: "Light", type: "Mystical Wizard" },
  { name: "Illumaris Brightfang", detail: "A fang-forging mage striking with glowing power.", status: false, gender: "Light", type: "Mystical Wizard" }
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
      name: "Half Elf Name Generator",
      pic: "/half-demon.webp",
      link: "https://www.nameideagenerator.com/half-elf-name-generator",
  },
  {
      name: "Wood Elf Name Generator",
      pic: "/Wood_Elf.webp",
      link: "https://www.nameideagenerator.com/wood-elf-name-generator",
  },
  ];
  
  const WizardNameGenerator = () => {
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
  
const bgImage = "/wizards-wizard-name-ideas.webp"
const context = "Wizard Name Generator With Meaning"
const Q1 = "Can I use the Warrior Cat Name Generator for other types of feline characters?"
const A1 = "Absolutely! The names generated by the tool are unique and can be used freely for any creative project, including fantasy novels, role-playing games (RPGs), character design, cosplay, and more."

const Q2 = "Are the names generated by this tool completely unique?"
const A2 = "Yes, the names are designed to be one-of-a-kind. Each generated name is inspired by its Wizard Type and Name Style, making it tailored to the specific theme and lore of your wizard character."

const Q3 = "Can I customize the name-generation process further?"
const A3 = "Currently, the tool allows you to select the Wizard Type and Name Style, but we are continually working on enhancing the customization options. In the future, we may include additional features such as detailed personality traits or more diverse name styles."

const Q4 = "Is there a limit to how many names I can generate?"
const A4 = "No, there is no limit! You can generate as many wizard names as you need for your project. Simply click 'Generate' to get a new set of names every time."

const Q5 = "Can I save the names I generate?"
const A5 = "Yes! You can easily copy or save the names you like and use them for your project, game, or story."
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
        <a href="/wizard-name-generator" className="hover:underline text-[#343a40]">Wizard Name Generator Tool with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Wizard Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Wizard Name</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Fire">Fire</option>
              <option value="Ice">Ice</option>
              <option value="Dark">Dark</option>
              <option value="Light">Light</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Style of Wizard Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Powerful Wizard">Powerful Wizard</option>
              <option value="Mystical Wizard">Mystical Wizard</option>
              <option value="Cursed Wizard">Cursed Wizard</option>
              <option value="Radiant Wizard">Radiant Wizard</option>
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
            What is the Wizard Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            The Wizard Name Generator is an online tool designed to help you create unique and meaningful names for wizard characters. Whether you're writing a fantasy novel, 
            developing a role-playing game (RPG), 
            or creating a wizard character for any other creative project, this tool provides a quick and easy way to generate wizard names that are rich in lore and magic.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            Unlike random name generators, our tool offers names with specific meanings tied to the wizard's magical abilities and personality, making each 
            name feel authentic and fitting for the wizard’s character. With customizable name styles and a simple, step-by-step process, 
            the Wizard Name Generator ensures that you find the perfect name for your wizard—one that captures their essence and enhances their story.
            </p>
            
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use the Wizard Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Our Wizard Name Generator creates unique names with meaningful backstories, reflecting your wizard's essence. Instead of random names, each one is paired with a relevant meaning.
           You can choose from various wizard types like fire, ice, dark, and light, 
          offering flexibility to find the perfect name for your character. It's a quick, easy, and fun way to generate names that enhance your wizard's personality and story.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use Our Wizard Name Generator Tool
          </h2>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Choose a Wizard Type <b>(Fire, Ice, Dark, and Light)</b>:
              </h3>
              <p>
              Start by selecting the magical realm your wizard belongs to. 
              Whether they come from fiery volcanoes, icy mountains, or enchanted forests, this step defines the foundation of your wizard's power.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Select a Name Style <b>(Powerful, Mystical, Cursed, Radiant ):</b>
              </h3>
              <p>
              Next, pick a name style that matches your wizard’s traits. 
              Is your wizard mysterious and dark, or bright and powerful? Choose the right style to reflect their personality and role.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b>for Unique wizard Names
              </h3>
              <p>
              Hit the <b> "Generate"</b> button and instantly discover a list of unique wizard names along with their meanings. 
              Each name is designed to fit the type and style you selected, ensuring your wizard stands out.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Select a Name You Like. It Will Show Its Meaning
              </h3>
              <p>
              Browse through the list and pick a name that stands out. Each name comes with a meaning, adding depth to your character’s story and role in the clan.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="wizard-name-generator.jpg"
              alt="Wizard Name Generator Tool"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="Geas-5e-DD.png"
              alt="Wizard Name Generator Tool"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/wizard-names.jpeg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Wizard Name Generator
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
          <b> Unique Features of the Wizard Name Generator</b>
          </h2>
          <p>
          Our Wizard Name Generator is designed to help you create distinct, meaningful, and captivating wizard names. Here are the key features that make it stand out:
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Meaningful Names with Deep Lore
            </h3>
            <p>
            Our tool doesn’t just generate names—it provides meanings behind each name. Each name is carefully crafted to align with the character traits and magical qualities of the wizard. 
            From fiery infernos to icy winds, you can find a name that holds significance and tells a story.
            <ul><br />
              <li>- Names like <b>Ignis Blazeheart </b>carry the power of fire.</li>
              <li>- Names like <b>Frostreign Glacius</b> embody the icy majesty of winter.</li>
            </ul>
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Customizable Name Styles
            </h3>
            <p>
           <b> Select a Name Style</b> based on the attributes you want your wizard to have. 
            Whether you're looking for a name that evokes strength, mystery, or purity, our tool offers different styles to match any wizard’s role:  
            <ul><br />
              <li>- <b>Fiery and Powerful</b> for those wielding the fire element</li>
              <li>- <b>Cold and Majestic</b> for those ruling over ice</li>
              <li>- <b>Mysterious and Dark</b> for those with shadowy powers</li>
              <li>- <b>Radiant and Celestial</b> for those drawing from the light</li>
            </ul>               
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant, Unique, and Creative Results
            </h3>
            <p>
            With just a few clicks, our tool provides <b>instant results </b>tailored to your preferences. You can generate multiple names at once, giving you plenty of creative options. 
            Whether you're writing a novel, playing an RPG, or working on a project, you'll always have a fresh, original name ready to use.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Versatile Applications
            </h3>
            <p>
            Our tool isn’t just for fantasy writers. It works for anyone creating magical characters for a variety of purposes, including:
            <ul><br />
              <li>- Fantasy novels, short stories, or comics</li>
              <li>- Role-playing games (RPGs), D&D campaigns, or video games</li>
              <li>- Cosplay events, costume designing, and other creative projects</li>
            </ul>  
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Powerful Name Generator with Limitless Possibilities
            </h3>
            <p>
            Whether you need one name or dozens, our wizard name generator is designed to provide an endless array of options. 
            Every name is generated with a unique combination of meanings, styles, and magical traits. You'll never run out of inspiration when crafting your wizard characters.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          List of Wizard Names
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Here’s a list of wizard names categorized by different Wizard Types and Name Styles:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Fire Wizard Names
              </h3>
              <p>
              <ul>
              <li><b>- Ignis Blazeheart </b><br />(Ignis means "fire" in Latin, and Blazeheart signifies a heart burning with intense passion and power. 
              This name reflects a wizard with fiery determination and a fierce spirit.)</li><br />
              <li><b>- Pyros Flameborn </b><br />(Pyros means "fire" in Greek, and Flameborn suggests a wizard born from fire itself. 
              It represents someone with a deep connection to fire magic and an affinity for destruction.)</li><br />
              <li><b>- Cindar Emberwind</b><br />(Cindar comes from "cinder," meaning the remains of fire, while Emberwind evokes the drifting ashes of a flame. 
              This name signifies a wizard who harnesses the smoldering power of fire)</li><br />
              <li><b>- Vulcan Ashbringer</b><br />(Named after the Roman god of fire and craftsmanship, Vulcan, combined with Ashbringer, 
              symbolizing one who commands the aftermath of a powerful blaze. This name suits a wizard who controls destructive flames.)</li><br />
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Ice Wizard Names
              </h3>
              <p>
              <ul>
              <li><b>- Frostreign Glacius </b><br />(Frostreign suggests the rule or reign over frost, and Glacius refers to ice. This name is for a wizard who wields the cold with absolute control, 
              commanding winter and ice.)</li><br />

              <li><b>- Arctis Snowborn</b><br />(Arctis comes from "Arctic," referring to the cold northern regions, and Snowborn signifies being born of snow. 
              A wizard with this name has a deep, innate connection to ice and snow.)</li><br />

              <li><b>- Thalra Frostwhisper</b><br />(Thalra is a name inspired by the cold winds of the north, and Frostwhisper suggests the soft, 
              chilling whisper of winter winds. This name reflects a wizard who uses subtle and chilling magic.)</li><br />

              <li><b>- Glacius Winterlight</b><br />(Glacius is derived from ice, while Winterlight evokes the serene and mystical 
              glow of a snowy landscape. This wizard wields the calm, unyielding power of winter.)</li><br />
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Dark Wizard Names
              </h3>
              <p>
              <ul>
              <li><b>- Umbra Nightshade </b><br />(Umbra means "shadow" or "darkness," and Nightshade is a poisonous plant, symbolizing danger and death. 
              This name suits a wizard who commands shadows and dark magic.)</li><br />

              <li><b>- Morven Shadowcloak</b><br />(Morven suggests darkness, and Shadowcloak symbolizes a wizard who wraps themselves in the cloak of night, moving unseen. 
              This name reflects a master of stealth and dark arts.)</li><br />

              <li><b>- Nihil Duskbringer</b><br />(Nihil comes from "nihilism," meaning nothingness, and Duskbringer suggests one who brings the fall of night. 
              This name fits a wizard who thrives in darkness and brings about the end of light.)</li><br />

              <li><b>- Valthor Darkveil</b><br />(Valthor is a name that evokes strength in darkness, while Darkveil refers to a magical veil that shrouds and protects from light. 
              This wizard commands the powers of concealment and the unknown.)</li><br />
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Light Wizard Names
              </h3>
              <p>
              <ul>
              <li><b>- Solarius Dawnlight </b><br />(Solarius is derived from "sol," meaning sun, and Dawnlight represents the first light of day. 
              This name fits a wizard who commands the brilliance of the sun and the power of new beginnings.)</li><br />

              <li><b>- Lumina Starbringer</b><br />(Lumina is derived from "lumen," meaning light, and Starbringer refers to one who brings the light of the stars. 
              This name reflects a wizard who channels celestial energy.)</li><br />

              <li><b>- Aetheria Sunflare</b><br />( Aetheria comes from "aether," meaning the pure essence of the heavens, and Sunflare symbolizes 
              the explosive power of sunlight. This wizard radiates strength and purity.)</li><br />

              <li><b>- Seraphis Celestialglow</b><br />(Seraphis is derived from the term "seraphim," the highest order of angels, and Celestialglow evokes the radiant light of the heavens. 
              This name suits a wizard who draws power from the divine and the celestial realms.)</li><br />
            </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[90vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          What Makes a Wizard Name Unique?
          </h2>
          <p>
          A <b> wizard’s name</b> is more than just a label; it holds significance that reflects the wizard's magical abilities, background, and personality. 
          The uniqueness of a wizard name comes from its <b>connection to the character's essence</b> and the world they inhabit. Here’s what makes a wizard name truly stand out:
          </p>
          <br />
        <hr />
          <br />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Meaningful Backstory
              </h3>
              <p>
              A unique wizard name carries a <b>deep meaning </b>that resonates with the wizard’s powers or role. Each name reflects the wizard’s journey, magical nature, or the forces they control. 
              For instance, names like <b>Valthor Stormbinder </b>could suggest a wizard with control over storms, while <b>Selena Starwhisper </b>might reflect a celestial connection.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Magical Resonance
              </h3>
              <p>
              Wizard names often <b>sound magical</b>. They have an otherworldly quality, combining ancient or mystical syllables that evoke power, mystery, and wisdom. 
              These names may incorporate elements related to <b>nature, magic, or the cosmos,</b> making them feel as if they belong to a world beyond our own.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Reflecting Magical Abilities
              </h3>
              <p>
              A wizard's name should reflect their <b>magical abilities</b> or the kingdom from which they hail. Whether your wizard controls fire, ice, darkness, or 
              light, their name should align with their powers. 
              A <b> fire wizard might</b> have a name like Ignar Blazeheart, while an <b>ice wizard</b> might go by <b>Frostwyn Coldbloom</b>. These names connect their abilities to their identity.
              </p>
            </div>  
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="wizard-name-generator.webp"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[380px] my-[20px] h-[360px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
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

export default WizardNameGenerator;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
  { name: "Zhar’tok Ironstrike", detail: "Zhar’tok’s strikes land with the force of iron, unrelenting in battle.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Vel’khar Bladewind", detail: "Vel’khar moves like the wind, cutting down enemies with his blade.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Gra’thor Doomfang", detail: "Gra’thor’s fangs bring doom to his enemies, a fearsome warrior.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Khar’zan Steelbane", detail: "Khar’zan’s blade is known for breaking steel and crushing defenses.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Vok’tar Shardpierce", detail: "Vok’tar pierces through armor with the precision of a shard.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Rhok’nar Battlestorm", detail: "Rhok’nar is a storm on the battlefield, leaving chaos in his wake.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Zar’kar Bloodspike", detail: "Zar’kar’s spike-like weapons are drenched in the blood of his foes.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Thar’mok Warlance", detail: "Thar’mok’s lance strikes true, a weapon of a true warrior.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Kra’tal Riftclaw", detail: "Kra’tal’s claws tear rifts through his enemies’ defenses.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Vol’rak Bladecaller", detail: "Vol’rak calls his blade to strike with deadly precision.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Drek’zor Flamepierce", detail: "Drek’zor’s weapon burns as it pierces through his enemies.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Gar’tok Shadowmaul", detail: "Gar’tok strikes from the shadows, wielding his maul with deadly force.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Jhor’val Stormcleave", detail: "Jhor’val cleaves through his enemies like a raging storm.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Zor’tan Warfang", detail: "Zor’tan’s fangs are feared across the battlefield, a true warrior’s bite.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Drak’thal Ironhowl", detail: "Drak’thal’s howls strike fear into his enemies, his blade as strong as iron.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Kren’zar Riftpierce", detail: "Kren’zar’s blade pierces through rifts, unstoppable in battle.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Vath’kar Steelblaze", detail: "Vath’kar wields a blade of blazing steel, cutting down his enemies.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Jhok’nir Voidfang", detail: "Jhok’nir’s fangs seem to devour the void, leaving no trace of his enemies.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Zhal’rok Crimsonstrike", detail: "Zhal’rok’s strikes are crimson with the blood of his foes, swift and deadly.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Thar’nar Starblade", detail: "Thar’nar’s blade shines like a star, guiding him to victory.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Khor’zan Embermaul", detail: "Khor’zan’s maul burns with embers, a devastating force on the battlefield.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Vol’gar Duskspear", detail: "Vol’gar’s spear strikes with the swiftness of dusk, silent and lethal.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Dra’thol Fireclaw", detail: "Dra’thol’s claws burn with fire, searing through his enemies.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Rahk’zor Skullrend", detail: "Rahk’zor’s strikes rend skulls with terrifying precision.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Val’thok Bladehowl", detail: "Val’thok’s blade howls as it strikes, echoing fear across the battlefield.", status: false, gender: "Male", type: "Warrior Githyanki" },
  { name: "Zhara’tal Bladewhisper", detail: "Zhara’tal’s blade moves silently, striking fear into the hearts of her enemies.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Vel’kira Doomspire", detail: "Vel’kira stands tall like a spire of doom, bringing destruction to the battlefield.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Gra’vani Riftshard", detail: "Gra’vani’s weapon cuts through reality like a shard from the rift.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Khar’nira Stormcleave", detail: "Khar’nira cleaves through her foes with the fury of a raging storm.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Vok’rina Flameveil", detail: "Vok’rina hides behind a veil of flames, striking with devastating precision.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Thar’kira Shadowlance", detail: "Thar’kira’s lance emerges from the shadows, swift and deadly.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Zar’vena Wraithclaw", detail: "Zar’vena’s claws move like a wraith, unseen until it’s too late.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Kren’shara Emberblade", detail: "Kren’shara wields a blade that burns like embers, scorching all in her path.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Rhok’vani Voidfang", detail: "Rhok’vani’s fangs devour the void, leaving nothing behind.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Drek’nira Skullspear", detail: "Drek’nira’s spear strikes skulls with unmatched ferocity.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Vol’kira Crimsonspike", detail: "Vol’kira’s spikes drip with crimson blood, a symbol of her countless victories.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Jhor’lana Ironveil", detail: "Jhor’lana’s armor is as impenetrable as iron, shielding her in battle.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Drak’thira Dusklance", detail: "Drak’thira’s lance moves like dusk, silent and swift, ending battles before they begin.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Zor’nara Starclaw", detail: "Zor’nara’s claws shine like stars, sharp and radiant.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Zhal’rina Riftstrike", detail: "Zhal’rina strikes with the force of a rift, unstoppable and precise.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Rahk’nira Warhowl", detail: "Rahk’nira’s howl echoes across the battlefield, rallying allies and striking fear into foes.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Val’nara Bloodspire", detail: "Val’nara rises like a spire of blood, unstoppable in her conquest.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Khor’lana Steelshade", detail: "Khor’lana moves in the shade of steel, a master of stealth and strength.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Thar’rina Firefang", detail: "Thar’rina’s fangs burn with fire, leaving destruction in her wake.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Dra’nira Shadowmaul", detail: "Dra’nira wields her maul with the strength of shadows, crushing her foes.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Kra’vana Emberstrike", detail: "Kra’vana’s strikes leave embers behind, a trail of fiery destruction.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Vath’lana Stormpierce", detail: "Vath’lana pierces through storms and enemies alike with deadly precision.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Vol’kara Voidhowl", detail: "Vol’kara’s howl seems to echo from the void, chilling her enemies to the bone.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Jhok’rina Nightlance", detail: "Jhok’rina’s lance is a weapon of the night, striking unseen and unfaltering.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Kren’thira Warshadow", detail: "Kren’thira is a shadow on the battlefield, striking with precision and might.", status: false, gender: "Female", type: "Warrior Githyanki" },
  { name: "Zhar’ven Riftfang", detail: "Zhar’ven’s fang tears through rifts, leaving destruction in its wake.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Vel’mor Bladehowl", detail: "Vel’mor’s blade howls as it strikes, a terrifying sound for any foe.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Gra’thar Stormspike", detail: "Gra’thar’s spike crackles with the fury of a storm, devastating all in its path.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Khar’zen Flameclaw", detail: "Khar’zen’s claws burn with an unquenchable flame, a weapon of pure devastation.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Vok’ral Voidpierce", detail: "Vok’ral pierces through the void, striking from the shadows with deadly force.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Thar’zen Crimsonlance", detail: "Thar’zen’s lance is stained with the crimson of countless battles.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Zar’mar Starhowl", detail: "Zar’mar’s howl echoes across the stars, rallying allies and striking fear into enemies.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Kren’zor Shadowfang", detail: "Kren’zor’s fang strikes from the shadows, swift and silent.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Rhok’thar Warcleave", detail: "Rhok’thar cleaves through the battlefield, a warrior unmatched in power.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Drek’mar Embermaul", detail: "Drek’mar’s maul burns with embers, striking with fiery ferocity.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Vol’thar Skullstrike", detail: "Vol’thar’s strike shatters skulls with the force of a tempest.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Jhor’zen Riftveil", detail: "Jhor’zen veils themselves in the power of rifts, appearing and disappearing at will.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Drak’mir Ironwhisper", detail: "Drak’mir’s whispers are as sharp and unyielding as iron.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Zor’mok Steelspike", detail: "Zor’mok’s steel spike is both a weapon and a symbol of unbreakable will.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Zhal’mar Bloodclaw", detail: "Zhal’mar’s claws drip with blood, a testament to their skill in battle.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Rahk’ven Wraithpierce", detail: "Rahk’ven’s piercing strikes are like a wraith’s touch—lethal and unavoidable.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Val’kar Fireblade", detail: "Val’kar’s blade burns with an unrelenting fire, consuming all in its path.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Khor’mok Dusklance", detail: "Khor’mok’s lance moves like dusk, shrouding their enemies in darkness.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Thar’mir Nightstrike", detail: "Thar’mir strikes in the dead of night, their enemies falling before they even see them.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Dra’mor Starspike", detail: "Dra’mor’s spike glimmers like a star, delivering celestial fury.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Kra’thar Warshade", detail: "Kra’thar is a shadow on the battlefield, striking with unparalleled precision.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Vath’mok Flamehowl", detail: "Vath’mok’s howl is accompanied by flames, a deadly symphony of destruction.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Vol’thar Voidrend", detail: "Vol’thar rends the void itself, tearing apart all who stand against them.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Jhok’mir Shadowpierce", detail: "Jhok’mir pierces through shadows, striking with unseen force.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Kren’mar Ironfang", detail: "Kren’mar’s fang is as strong and sharp as iron, a symbol of their indomitable spirit.", status: false, gender: "Unisex", type: "Warrior Githyanki" },
  { name: "Zhor’tan Spellpierce", detail: "Zhor’tan’s magic pierces through reality, unraveling spells and foes alike.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Vel’ran Voidseer", detail: "Vel’ran gazes into the void, uncovering secrets and wielding them as weapons.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Gra’mok Shadowweaver", detail: "Gra’mok weaves shadows into forms of deadly precision.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Khar’thol Mindwhisper", detail: "Khar’thol’s whispers penetrate minds, bending them to his will.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Vok’nir Etherealclaw", detail: "Vok’nir’s claws shimmer with ethereal energy, tearing through both spirit and flesh.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Thar’mor Starcaller", detail: "Thar’mor summons the power of stars, channeling celestial might into every strike.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Zar’jin Mysticfang", detail: "Zar’jin’s fangs drip with mystic energy, a danger to even the most magical foes.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Kren’val Riftwhisper", detail: "Kren’val’s voice echoes through rifts, calling forth unseen horrors.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Rhok’lor Spellblade", detail: "Rhok’lor wields a blade infused with spells, cutting through magic and matter alike.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Drek’zan Astralsinger", detail: "Drek’zan sings the songs of the astral plane, enchanting allies and unnerving foes.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Vol’gar Dreamspire", detail: "Vol’gar’s magic spirals into the dreams of his enemies, turning them into nightmares.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Jhor’tal Etherstrike", detail: "Jhor’tal’s strikes shimmer with etheric power, bypassing even the strongest defenses.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Drak’kor Voidshade", detail: "Drak’kor moves like a shade through the void, his presence barely detectable.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Zor’mal Runehowl", detail: "Zor’mal’s howl resonates with runic energy, shaking the foundations of reality.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Zhal’gar Mindflame", detail: "Zhal’gar ignites the minds of his enemies, leaving them in disarray and pain.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Rahk’nar Duskmender", detail: "Rahk’nar’s magic mends the dusk, drawing power from the waning light.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Val’rath Riftshard", detail: "Val’rath’s shards of rift energy strike with deadly precision.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Khor’mok Seerclaw", detail: "Khor’mok’s claws guide him with visions of the future, ensuring every strike lands true.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Thar’nor Wraithfang", detail: "Thar’nor’s fangs are imbued with wraith-like energy, haunting his prey.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Dra’mal Spellclaw", detail: "Dra’mal’s claws tear through magical barriers with ease, unraveling enchantments.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Kra’vin Voidburn", detail: "Kra’vin channels the void’s fire, leaving a trail of scorched magic behind.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Vath’zor Astralwhisper", detail: "Vath’zor’s whispers echo through the astral plane, drawing its power to him.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Vol’rak Dreamfang", detail: "Vol’rak’s fangs hold the power to turn dreams into lethal realities.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Jhok’mor Runeveil", detail: "Jhok’mor hides behind a veil of runes, striking with unmatched precision.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Kren’mal Shadowseer", detail: "Kren’mal sees through the shadows, turning darkness into his ally.", status: false, gender: "Male", type: "Mystical Githyanki" },
  { name: "Zhara’nira Etherblaze", detail: "Zhara’nira’s power burns brightly, a beacon of magic that scorches her enemies.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Vel’kara Spellmender", detail: "Vel’kara’s magic mends both wounds and spells, restoring strength to allies.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Gra’rina Mindwhisper", detail: "Gra’rina whispers to the minds of her foes, leading them into confusion and despair.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Khar’lana Astralseer", detail: "Khar’lana’s eyes pierce the astral plane, uncovering hidden truths and threats.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Vok’thira Voidspike", detail: "Vok’thira conjures spikes of void energy, tearing through her enemies with ease.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Thar’vana Runeveil", detail: "Thar’vana’s veil of runes shields her from harm, deflecting even the strongest blows.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Zar’mira Dreamflame", detail: "Zar’mira summons flames from the dreamscape, turning her enemies’ nightmares into reality.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Kren’nira Starweaver", detail: "Kren’nira weaves the light of stars into intricate patterns of destruction.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Rhok’rina Duskmender", detail: "Rhok’rina draws power from the twilight, mending what others consider broken.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Drek’lana Spellhowl", detail: "Drek’lana’s howl carries the force of a thousand spells, shaking the fabric of reality.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Vol’vana Riftflame", detail: "Vol’vana’s flames emerge from the rift, consuming all in their path.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Jhor’vana Mysticwhisper", detail: "Jhor’vana whispers mystical secrets to her allies, empowering them with ancient knowledge.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Drak’rina Etherealshade", detail: "Drak’rina’s ethereal form moves unseen, striking from the shadows.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Zor’mira Astralstrike", detail: "Zor’mira strikes with astral energy, her blows resonating through dimensions.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Zhal’nara Wraithburn", detail: "Zhal’nara’s burning wraith-like aura leaves devastation in its wake.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Rahk’nira Seershadow", detail: "Rahk’nira sees into the shadows, wielding their secrets against her foes.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Val’nira Dreamshade", detail: "Val’nira channels the dreamscape, her presence a haunting shade in the minds of her enemies.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Khor’nara Etherlance", detail: "Khor’nara’s lance is imbued with etheric energy, piercing all defenses.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Thar’vana Shadowwhisper", detail: "Thar’vana’s whispers call shadows to her side, creating a protective shroud.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Dra’vana Mindfang", detail: "Dra’vana’s fangs sink into the minds of her prey, leaving them defenseless.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Kra’rina Starstrike", detail: "Kra’rina’s strikes are infused with the power of falling stars, overwhelming her enemies.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Vath’lana Spellseer", detail: "Vath’lana foresees her enemies’ spells, countering them with devastating precision.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Vol’rina Voidflame", detail: "Vol’rina’s flames are born from the void, consuming all in their path.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Jhok’nara Riftshade", detail: "Jhok’nara emerges from the rift, her shade-like form a terrifying sight.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Kren’nara Starclaw", detail: "Kren’nara’s claws shine with starlight, slashing through darkness and enemies alike.", status: false, gender: "Female", type: "Mystical Githyanki" },
  { name: "Zhar’mal Astralhowl", detail: "Zhar’mal’s howl echoes through the astral plane, striking fear into enemies.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Vel’mir Voidshade", detail: "Vel’mir walks unseen in the void, striking from the shadows.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Gra’lor Mysticwhisper", detail: "Gra’lor’s whispers carry mystical secrets, empowering allies and confusing foes.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Khar’mok Runeveil", detail: "Khar’mok’s veil of runes shields against all forms of attack.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Vok’lan Etherblade", detail: "Vok’lan wields a blade infused with etheric energy, cutting through dimensions.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Thar’mor Spellflame", detail: "Thar’mor conjures flames from the spell weave, burning enemies to ashes.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Zar’mar Mindsear", detail: "Zar’mar sears the minds of opponents with powerful psychic energy.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Kren’mok Riftfang", detail: "Kren’mok’s fangs tear through the rift, striking with devastating precision.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Rhok’mar Dreamstrike", detail: "Rhok’mar’s strikes are guided by visions from the dreamscape.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Drek’mir Voidwhisper", detail: "Drek’mir’s voice carries the power of the void, resonating with destructive energy.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Vol’mor Starshadow", detail: "Vol’mor moves like a shadow among the stars, elusive and deadly.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Jhor’mal Astralsinger", detail: "Jhor’mal’s songs draw energy from the astral plane, weaving powerful enchantments.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Drak’lan Etherealhowl", detail: "Drak’lan’s howl resonates through the ether, shaking the resolve of foes.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Zor’mok Runeweaver", detail: "Zor’mok weaves intricate runes of power, binding enemies and enhancing allies.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Zhal’mor Mindveil", detail: "Zhal’mor’s veil shrouds the mind, making it impossible to predict their actions.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Rahk’mal Dreamspike", detail: "Rahk’mal’s spikes of energy draw power from the dreams of the cosmos.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Val’mir Riftblaze", detail: "Val’mir commands flames from the rift, engulfing enemies in fire.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Khor’mor Etherfang", detail: "Khor’mor’s fangs glow with etheric energy, tearing through defenses.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Thar’mar Shadowseer", detail: "Thar’mar gazes into the shadows, uncovering secrets hidden to all.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Dra’mal Starwhisper", detail: "Dra’mal whispers to the stars, calling down their power to aid in battle.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Kra’mor Mysticfang", detail: "Kra’mor’s fangs are imbued with mystical energy, striking with supernatural force.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Vath’mar Runeclaw", detail: "Vath’mar carves runes into their claws, enhancing their destructive potential.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Vol’mor Astralburn", detail: "Vol’mor’s attacks leave an astral burn, lingering long after the strike.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Jhok’mor Spellstrike", detail: "Jhok’mor strikes with the precision of a spell, hitting exactly where it hurts most.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Kren’mal Voidcall", detail: "Kren’mal calls upon the void, summoning its power to devastate their enemies.", status: false, gender: "Unisex", type: "Mystical Githyanki" },
  { name: "Zhor’tar Starblade", detail: "Zhor’tar wields a blade forged from the very essence of starlight.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Vel’zor Astralstrike", detail: "Vel’zor strikes with precision, channeling the power of the astral plane.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Gra’rak Voidburn", detail: "Gra’rak’s attacks leave a burning void in their wake.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Khar’mor Etherpierce", detail: "Khar’mor’s pierce shatters the ether, tearing through enemy defenses.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Vok’lan Riftclaw", detail: "Vok’lan’s claws rip through dimensional rifts, striking with otherworldly power.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Thar’mir Starmender", detail: "Thar’mir heals wounds using energy drawn from the stars themselves.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Zar’jin Shadowseer", detail: "Zar’jin peers into the shadows of the astral plane, uncovering hidden truths.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Kren’thal Dreamcaller", detail: "Kren’thal summons the power of dreams to bolster allies and weaken foes.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Rhok’val Etherealspike", detail: "Rhok’val’s spike glimmers with ethereal light, striking with deadly accuracy.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Drek’nar Astralhowl", detail: "Drek’nar’s howl reverberates through the astral plane, shaking enemy resolve.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Vol’mar Starflame", detail: "Vol’mar channels starfire into his attacks, leaving trails of light in his wake.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Jhor’kor Voidcaller", detail: "Jhor’kor commands the void to do his bidding, overwhelming opponents.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Drak’mar Etherstrike", detail: "Drak’mar’s strikes are infused with the raw energy of the ether.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Zor’nar Riftpierce", detail: "Zor’nar’s piercing attacks exploit the weak points between dimensions.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Zhal’mor Starfang", detail: "Zhal’mor’s fangs shine like the stars, leaving cosmic scars on his enemies.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Rahk’mor Voidflame", detail: "Rahk’mor’s flames consume all, fueled by the energy of the void.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Val’mok Astralhowl", detail: "Val’mok’s howl draws on the power of the astral plane to empower his allies.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Khor’mal Dreamfang", detail: "Khor’mal’s fangs carry the dreams of the astral plane, striking with psychic force.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Thar’mor Riftstrike", detail: "Thar’mor’s strike opens rifts in the battlefield, disorienting his enemies.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Dra’mor Voidweaver", detail: "Dra’mor weaves the void into intricate patterns, creating traps and attacks.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Kra’mor Starshadow", detail: "Kra’mor hides in the shadow of stars, striking from unseen angles.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Vath’mok Astralblade", detail: "Vath’mok’s blade hums with astral energy, cleaving through any barrier.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Vol’mir Riftflame", detail: "Vol’mir’s flames emerge from the rift, searing everything in their path.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Jhok’mar Etherstrike", detail: "Jhok’mar’s strikes leave a trail of etheric destruction.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Kren’mir Dreamclaw", detail: "Kren’mir’s claws carry the power of dreams, weaving nightmares into his strikes.", status: false, gender: "Male", type: "Astral Githyanki" },
  { name: "Zhara’nira Starwhisper", detail: "Zhara’nira speaks in whispers of starlight, guiding allies with cosmic wisdom.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Vel’lara Voidflame", detail: "Vel’lara’s flames are born of the void, consuming everything in their path.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Gra’rina Riftfang", detail: "Gra’rina’s fangs tear through rifts, leaving trails of astral energy.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Khar’lana Astralblade", detail: "Khar’lana wields a blade charged with the energy of distant stars.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Vok’rina Dreamspike", detail: "Vok’rina’s attacks channel dream energy, striking with surreal precision.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Thar’nira Starmender", detail: "Thar’nira heals wounds with light borrowed from the heavens.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Zar’lana Etherstrike", detail: "Zar’lana’s strikes are infused with raw etheric force.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Kren’rina Shadowwhisper", detail: "Kren’rina manipulates astral shadows to outwit her foes.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Rhok’nira Riftshade", detail: "Rhok’nira hides in the shades of rifts, striking from unseen realms.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Drek’lana Astralhowl", detail: "Drek’lana’s howl echoes through the astral plane, striking fear into enemies.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Vol’nira Starveil", detail: "Vol’nira cloaks herself in a veil of starlight, becoming nearly invisible.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Jhor’nara Etherblaze", detail: "Jhor’nara’s blaze burns with the fury of the ether.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Drak’rina Riftshadow", detail: "Drak’rina navigates rift shadows, striking from the most unexpected angles.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Zor’nira Dreampierce", detail: "Zor’nira’s piercing attacks draw energy from the dreams of her enemies.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Zhal’nara Voidfang", detail: "Zhal’nara’s fangs shimmer with void energy, devastating her opponents.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Rahk’nira Starmender", detail: "Rahk’nira calls upon the stars to mend her allies’ wounds.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Val’nira Astralflame", detail: "Val’nira’s flames dance with astral energy, illuminating the battlefield.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Khor’nara Etherburn", detail: "Khor’nara’s attacks leave trails of etheric burns.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Thar’nara Riftspike", detail: "Thar’nara’s spikes pierce the veil of rifts, delivering devastating blows.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Dra’nara Starflame", detail: "Dra’nara’s flames glow with the light of countless stars.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Kra’rina Shadowstrike", detail: "Kra’rina blends into the shadows, launching precise strikes.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Vath’nira Dreamfang", detail: "Vath’nira’s fangs carry the haunting energy of dreams.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Vol’nira Etherveil", detail: "Vol’nira shrouds herself in an ethereal veil, evading enemy attacks.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Jhok’nira Riftcall", detail: "Jhok’nira summons rift energy to disrupt her foes.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Kren’nara Astralclaw", detail: "Kren’nara’s claws shine with astral light, slashing through enemy defenses.", status: false, gender: "Female", type: "Astral Githyanki" },
  { name: "Zhor’mar Riftwhisper", detail: "Zhor’mar’s whispers echo through rifts, unraveling the secrets of the astral plane.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Vel’mal Starfang", detail: "Vel’mal’s fangs shimmer with celestial energy, tearing through enemies with precision.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Gra’mor Etherstrike", detail: "Gra’mor strikes with the force of condensed ether, shattering defenses.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Khar’mir Voidblaze", detail: "Khar’mir channels flames born of the void, incinerating all obstacles.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Vok’mal Astralhowl", detail: "Vok’mal’s howl resonates through the astral plane, empowering allies.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Thar’mar Dreamveil", detail: "Thar’mar cloaks themselves in a veil of dream energy, becoming elusive.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Zar’mal Starstrike", detail: "Zar’mal’s strikes are as precise and powerful as a falling star.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Kren’mar Riftflame", detail: "Kren’mar summons flames from rifts to engulf their foes.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Rhok’mor Etherfang", detail: "Rhok’mor’s fangs channel etheric energy, delivering lethal strikes.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Drek’mar Astralwhisper", detail: "Drek’mar’s voice carries whispers of astral knowledge, unnerving their enemies.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Vol’mar Shadowpierce", detail: "Vol’mar pierces the shadows with unparalleled precision.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Jhor’mal Riftblade", detail: "Jhor’mal’s blade slices through the fabric of the astral plane.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Drak’mor Voidseer", detail: "Drak’mor gazes into the void, predicting the moves of their foes.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Zor’mar Dreamfang", detail: "Zor’mar’s fangs shimmer with dream energy, ensnaring their enemies.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Zhal’mor Ethershadow", detail: "Zhal’mor moves like a shadow, wielding the power of pure ether.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Rahk’mor Starweaver", detail: "Rahk’mor weaves starlight into powerful spells and weapons.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Val’mar Astralshade", detail: "Val’mar’s shade glides through the astral plane, hidden from view.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Khor’mar Riftfang", detail: "Khor’mar’s fangs tear through rifts, leaving trails of astral energy.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Thar’mal Voidclaw", detail: "Thar’mal’s claws rend through void barriers with ease.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Dra’mor Etherveil", detail: "Dra’mor wraps themselves in a veil of ether, shielding from attacks.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Kra’mar Starshadow", detail: "Kra’mar emerges from the shadows of stars to strike down their enemies.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Vath’mor Riftstrike", detail: "Vath’mor strikes with precision from the heart of astral rifts.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Vol’mor Astralclaw", detail: "Vol’mor’s claws shine with astral light, slashing through enemies.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Jhok’mor Dreamwhisper", detail: "Jhok’mor’s whispers inspire visions of the astral realms.", status: false, gender: "Unisex", type: "Astral Githyanki" },
  { name: "Kren’mor Starflame", detail: "Kren’mor’s flames burn with the intensity of a distant star.", status: false, gender: "Unisex", type: "Astral Githyanki" },
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
    name: "Warrior Cat Name Generator",
    pic: "/cat.jpg",
    link: "https://www.nameideagenerator.com/warrior-cat-name-generator",
},
{
    name: "Tabaxi Name Generator",
    pic: "/tabaxi.jpeg",
    link: "https://www.nameideagenerator.com/tabaxi-name-generator",
},
{
    name: "Vampire Name Generator",
    pic: "/vampire-name-generator.jpg",
    link: "https://www.nameideagenerator.com/vampire-name-generator",
},
{
    name: "Druid Name Generator",
    pic: "/druid-name-generator.jpg",
    link: "https://www.nameideagenerator.com/druid-name-generator",
},
];

const GithyankiNameGenerator = () => {
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
  
const bgImage = "/githyanki-name-generator.jpg"
const context = "Githyanki Name Generator for Dungeons & Dragons with Meaning"
const Q1 = "What are Githyanki?"
const A1 = "Githyanki are astral-dwelling warriors in Dungeons & Dragons. Known for their fierce independence and combat prowess, they are an ancient race with a strong martial tradition and a deep connection to the Astral Plane."

const Q2 = "Where Do Githyanki Live?"
const A2 = "The Astral Plane serves as their home, shaping much of their culture and identity. This plane of existence allows them to travel across dimensions, making it central to their way of life and their connection to the cosmos."

const Q3 = "Why Are Githyanki Names Special?"
const A3 = "Githyanki names carry cultural significance and are deeply rooted in D&D lore. These names often reflect their warrior spirit, astral origins, and connection to ancient traditions. They convey power, mysticism, and a sense of belonging to a race of formidable beings."

const Q4 = "Can I Use Githyanki Names for Other D&D Campaigns?"
const A4 = "Absolutely! Githyanki names are versatile and can be used for any campaign or character needing a strong, otherworldly name. Whether for NPCs or player characters, these names add a unique depth to any storyline."

const Q5 = "How Are Githyanki Names Generated in the Tool?"
const A5 = "Our Githyanki Name Generator uses established lore and naming conventions to provide authentic, fitting names. You can choose from different categories and genders to find the perfect name for your character, ensuring it aligns with the rich history of the Githyanki race."
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
      <a href="/githyanki-name-generator" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Githyanki Name Generator</a>
    </li>
  </ol>
</nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Githyanki Name Generator With Meaning Tool
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
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Githyanki Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Astral Githyanki">Astral</option>
              <option value="Mystical Githyanki">Mystical</option>
              <option value="Warrior Githyanki">Warrior</option>
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
            What is the Githyanki Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            It is a tool designed to provide players and creators with names that align with Githyanki culture. 
            Whether you're crafting a character for a campaign or writing a fantasy story, this tool delivers authentic results.
            <br />
            Githyanki names are steeped in lore, reflecting the fierce and mysterious nature of these characters. 
            The generator ensures that each name captures the essence of this iconic race.
            </p>
            
          </div>
        </div>
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use Our Githyanki Name Generator?
            </h2>
            <hr />
            <br />
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Save Time and Effort in Name Creation
            </h3>
            <p className="text-left mt-[10px]  py-[10px] text-[#343a40]">
            You must focus on creating your campaign instead of worrying about character names. This tool provides instant results, saving hours of brainstorming.
            Every name is ready to use, helping you avoid tedious research. You can bring your Githyanki characters to life without any hassle.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Generate Authentic Githyanki Names
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            It is vital for Githyanki names to align with Dungeons & Dragons lore. This generator ensures that every name reflects the culture and traditions of this iconic race.
            Unique and lore-friendly names make your characters stand out and fit perfectly into your world-building.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Enhance Your Dungeons & Dragons Campaigns
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            It is essential to make your characters memorable. This tool ensures that names resonate with the lore and enhance immersion.
            A well-crafted name strengthens storytelling, bringing your campaign to the next level. Players and Dungeon Masters alike will appreciate the added depth.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Enhance Your Dungeons & Dragons Campaigns
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            You must consider the needs of both players and DMs when naming characters. This generator provides names for heroes, villains, and NPCs alike.
            Whether you need a protagonist or a minor character, the tool delivers names that fit seamlessly into your story.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Githyanki Name Generator Tool
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose a Githyanki Gender <b>  (Male, Female, Unisex) </b>
              </h3>
              <p>
              Start by selecting Male, Female, or Unisex names. This ensures a tailored experience for your character needs.    
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select a Name Category <b>(Warrior, Mystical, or Astral)</b>
              </h3>
              <p>
              Here's how to customize further: pick from categories like Warrior, Mystical, or Astral names.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b> for Unique Names
              </h3>
              <p>
              Clicking the<b> “Generate” </b>button provides unique names instantly. Explore and choose a name that fits perfectly.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Pick Your Perfect Name
              </h3>
              <p>
              Review the generated names and select the one that best fits your character’s backstory and traits.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="dnd-character-githyanki-male-warrior.jpg"
              alt="githyanki Name Generator"
              className="w-[300px] my-[20px] h-[330px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="female-githyanki-name-generator.png"
              alt="githyanki Name Generator"
              className="w-[300px] h-[330px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/123404768-1721036564.webp")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Githyanki Name Generator
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
          <b>Features of the Githyanki Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold">
          <b>Simple and User-Friendly Interface</b>
            </h3>
            <p>
            It offers an easy-to-use design that anyone can navigate. The straightforward layout ensures you find the perfect name without confusion.
            Quick access to the generator makes the process enjoyable for both beginners and experienced players.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Instant Name Generation</b> 
            </h3>
            <p>
            You must have results without unnecessary delays. This tool generates names instantly, letting you focus on your creative projects.
            Every click provides a fresh, unique name, making it perfect for on-the-spot inspiration.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Customizable Categories for Every Character Type</b>   
          </h3>
            <p>
            It is easy to customize names based on your character's role. Choose from categories like Warrior, Mystical, or Astral to match your campaign needs.
            These categories ensure that each name fits seamlessly into D&D lore, adding depth and meaning to your characters.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Designed for Creative Versatility</b>   
            </h3>
            <p>
            You must have a tool that adapts to various projects. This generator works for campaigns, stories, roleplay, and more.
            Names created through this tool bring authenticity and immersion to any setting.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Githyanki Names by Gender Options</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
           <b>By Gender</b>
            </h3>
            <p> 
             <b>Male Githyanki Names: </b>
             It is important for male characters to have names that evoke power and authority. Our tool generates names that suit warriors, leaders, and heroic figures seamlessly.
             These names align with the bold and commanding traits associated with male Githyanki, making them perfect for your campaigns.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Female Githyanki Names: </b>
            You must choose names that reflect elegance and strength for female characters. Our tool ensures every name balances mystical elements with fierce traits.
            These names are ideal for creating spellcasters, warriors, or enigmatic characters with depth and individuality.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Unisex Githyanki Names: </b>
            Versatility is essential when creating names for unique roles. Our tool provides unisex names that work for any character type, offering flexibility and creativity.
            These names help bring diversity to your campaign, fitting seamlessly into any storyline.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
          <b>By Category</b>
            </h3>
            <p> <b>Warrior Githyanki Names: </b>
            It is clear that battle-hardened characters need strong and brave names. Our tool focuses on generating names that embody courage and determination.
            These names fit perfectly for warriors, champions, and fearless leaders in your campaign.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Mystical Githyanki Names: </b>
            Magic and astral traditions inspire this category of names. You must have the perfect name for spellcasters, sages, and mysterious characters.
            Our tool ensures these names highlight the mystical essence of Githyanki lore.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Astral Githyanki Names: </b>
            Names in this category emphasize the strong connection to the Astral Plane. Celestial origins and cosmic themes define this type.
            Our tool offers names that immerse your characters in the mystical and otherworldly aspects of D&D campaigns.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[20px] ">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
        <b>  List of D&D Githyanki Names Types by Gender and Category</b>
          </h2>
          <p>
          Here's a curated list of names to inspire your next campaign. 
          These names resonate deeply with Githyanki culture and can fit seamlessly into your stories, adding authenticity and depth to your characters.
          </p>
        </div>
        <hr />
        <div className="py-[10px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Male Githyanki Names
              </h3>
              <p><b>Warrior Githyanki Names</b>
              <ul>
              <li><b>- Zarath:</b> "Stormbringer" (Symbolizing power and ferocity, ideal for a warrior or battle leader)</li>
              <li><b>- Vralik:</b> "Fury of the Void" (A name embodying rage and relentless aggression, perfect for a fierce Githyanki warrior)</li>
              <li><b>- K'razzh:</b> "Blade of Shadows" (Reflecting stealth and precision, suitable for an assassin or shadow fighter)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Mystical Githyanki Names</b>
              <ul>
              <li><b>- Zhrial:</b> "Keeper of Secrets" (Perfect for a wise Githyanki sage or mystical figure)</li>
              <li><b>- Shyrin:</b> "Dreamweaver" (A name conveying the ability to manipulate dreams or minds, ideal for a telepath or sorcerer)</li>
              <li><b>- Vathar:</b> "Whisper of the Void" (A name that suggests a deep connection to arcane and psychic forces)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Astral Githyanki Names</b>
              <ul>
              <li><b>- Vorthran: </b>"Slayer" (Signifying a warrior’s strength and relentless nature in battle)</li>
              <li><b>- K'rassh </b>"Blood Hunter" (A fearsome name reflecting a deadly, relentless warrior)</li>
              <li><b>- M'aiq the Mighty</b>"The Mighty" (A name exuding strength and dominance, often associated with legendary figures)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="male=githzerai-psionic-punch.jpg"
              alt="githzerai Name Generator"
              className="w-[320px] my-[10px] h-[350px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[40px] ">
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Female Githyanki Names
              </h3>
              <p>
              <b>Warrior Githyanki Names</b>
              <ul>
              <li><b>- Sarrah </b>"Shield of the Fallen" (A name that symbolizes resilience and strength in battle, perfect for a leader or protector)</li>
              <li><b>- Varaith </b>"Raven's Claw" (A name reflecting fierce tenacity and quick strikes, ideal for a cunning warrior)</li>
              <li><b>- Kyrana </b>"Blaze of the Void" (A powerful and commanding name, fitting for a warrior with a strong will)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Mystical Githyanki Names</b>
              <ul>
              <li><b>- Esorra </b>"Whisper of the Stars" (Filled with mysticism, ideal for a spellcaster with cosmic ties)</li>
              <li><b>- Ithrala </b>"Weaver of Fate" (A name suggesting control over destiny, perfect for a seer or sorceress)</li>
              <li><b>- Zhanira </b> "Moonlit Veil" (A graceful yet mysterious name, perfect for a sorceress or mystic)</li>
            </ul>
              </p>
            </div> <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Astral Githyanki Names</b>
              <ul>
              <li><b>- Dhelith </b>"Daughter of the Cosmos" (A name evoking a deep connection to the astral realm, ideal for an explorer of the stars)</li>
              <li><b>- Rynara </b>"Starborn" (Symbolizing celestial origins, perfect for a character with otherworldly powers)</li>
              <li><b>- Thalira </b> "Light of the Void" (A name that emphasizes the celestial beauty and power found in the darkness of space)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="female-githyanki-name-generator.jpg"
              alt="githyanki Name Generator"
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

export default GithyankiNameGenerator;

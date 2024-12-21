"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "J’zargo Moonclaw", detail: "J’zargo’s name reflects the strength of a moonlit predator, silent yet fierce with claws of shadow.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Kharjo Duskfang", detail: "Kharjo carries the essence of twilight, with fangs that strike in the quiet moments of dusk.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Dar’zir Shadowrunner", detail: "Dar’zir is swift and silent, running through the shadows with unmatched agility.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ma’rak Silverpelt", detail: "Ma’rak’s silver pelt glimmers like the moonlight, signifying wisdom and grace.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ra’zah Nightflame", detail: "Ra’zah wields the power of a flame that burns in the dark, fierce and illuminating.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Za’mir Starwhisper", detail: "Za’mir’s voice carries the whispers of the stars, mysterious and enchanting.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "J’andar Emberstrike", detail: "J’andar strikes like an ember, small but fierce, igniting everything he touches.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ri’kar Frostfang", detail: "Ri’kar’s fangs are as cold as frost, biting with precision and leaving a chilling mark.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ja’zir Ashpelt", detail: "Ja’zir’s ash-colored pelt hides him in the shadows, a stealthy and cunning warrior.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ka’len Firetail", detail: "Ka’len’s tail flickers like fire, vibrant and full of life, a symbol of his fiery spirit.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ma’tok Windstalker", detail: "Ma’tok stalks his prey like the wind, silent and unseen, moving with perfect precision.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Dro’zir Skystep", detail: "Dro’zir steps lightly as though walking on the sky, a master of agility and grace.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ja’rid Shadowveil", detail: "Ja’rid’s presence is cloaked in a veil of shadows, enigmatic and formidable.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ra’kar Blazemane", detail: "Ra’kar’s mane blazes like fire, a striking figure of strength and passion.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ji’dar Starshadow", detail: "Ji’dar moves under the shadow of the stars, swift and elusive, guided by celestial power.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Va’zir Thunderfang", detail: "Va’zir’s fangs strike like thunder, powerful and terrifying in battle.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ka’mar Dusksinger", detail: "Ka’mar sings the songs of dusk, his voice both haunting and beautiful, echoing through the twilight.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ma’rith Moonhowl", detail: "Ma’rith howls under the moon, a sound that chills his enemies and inspires his allies.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ro’jir Nightblade", detail: "Ro’jir’s blade is swift and deadly, striking under the cover of night with precision.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Do’ran Emberclaw", detail: "Do’ran’s claws burn like embers, tearing through his foes with fiery fury.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ra’tan Frostshade", detail: "Ra’tan blends into the frost and shadows, a ghostly figure that’s impossible to track.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ji’shar Windrunner", detail: "Ji’shar runs with the wind, untouchable and free, a master of speed and freedom.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ka’rith Dawnshadow", detail: "Ka’rith moves with the grace of dawn’s shadow, blending seamlessly with the light and dark.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ja’nar Sunfang", detail: "Ja’nar’s fangs glow like the sun, radiating power and unmatched ferocity.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ri’skar Shadowtail", detail: "Ri’skar’s tail sweeps through the shadows, a deadly and silent presence in the dark.", status: false, gender: "Male", type: "Fantasy Khajiit" },
  { name: "Ja’ani Moonwhisper", detail: "Ja’ani’s voice carries the gentle whispers of the moon, soothing and mysterious.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ma’zani Duskfire", detail: "Ma’zani burns brightly like fire in the dusk, a beacon of strength and determination.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "S’rina Embermoon", detail: "S’rina glows softly like embers under the moonlight, her presence both fierce and calming.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Kha’jari Nightfrost", detail: "Kha’jari’s touch is as cold and deadly as frost in the night, a force to be reckoned with.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ri’vani Starveil", detail: "Ri’vani moves under a veil of starlight, graceful and enigmatic.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Dro’zani Shadowmane", detail: "Dro’zani’s shadowy mane blends with the darkness, making her presence ghostly and powerful.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Va’ri Frosttail", detail: "Va’ri’s tail shimmers with frost, a sign of her icy elegance and strength.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ka’zani Skysong", detail: "Ka’zani’s voice is as harmonious as the songs of the sky, inspiring all who hear her.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ra’jari Fireblossom", detail: "Ra’jari’s fiery spirit blooms like a flower, full of energy and life.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ja’sani Whisperfang", detail: "Ja’sani strikes like a whispering fang, silent yet deadly.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ma’rani Stormpelt", detail: "Ma’rani’s pelt is as wild and untamed as a storm, embodying her fierce nature.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Za’vani Emberveil", detail: "Za’vani hides behind an ember-lit veil, both mesmerizing and intimidating.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ji’rina Windshadow", detail: "Ji’rina moves like a shadow in the wind, swift and elusive.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Sa’mira Moonstalker", detail: "Sa’mira stalks her prey under the moon’s gaze, silent and precise.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ka’nira Dawnpelt", detail: "Ka’nira’s pelt glows like the first light of dawn, radiant and full of life.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Va’na Frostsong", detail: "Va’na’s song carries the chill of frost, both beautiful and haunting.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ro’zani Duskmane", detail: "Ro’zani’s dusky mane gives her an aura of mystery and power.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "S’vara Nightshadow", detail: "S’vara blends with the night’s shadows, a master of stealth and grace.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ji’rith Thunderwhisper", detail: "Ji’rith’s voice carries the power of thunder, striking fear into her enemies.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Kha’jari Skystorm", detail: "Kha’jari moves like a storm across the sky, unstoppable and awe-inspiring.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ja’mira Starfire", detail: "Ja’mira’s spirit burns with the fire of the stars, bright and everlasting.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ri’shara Emberwind", detail: "Ri’shara’s presence flows like ember-filled wind, warm and captivating.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Va’zinra Darkveil", detail: "Va’zinra hides behind a veil of darkness, her intentions mysterious and unpredictable.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ka’zana Sunblaze", detail: "Ka’zana radiates like a blazing sun, her energy fierce and unyielding.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ma’li Frostfang", detail: "Ma’li’s fangs are as sharp and cold as frost, a true predator.", status: false, gender: "Female", type: "Fantasy Khajiit" },
  { name: "Ka’rith Moonshadow", detail: "Ka’rith moves like a shadow under the moonlight, mysterious and elusive.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "J’akar Nightflame", detail: "J’akar burns brightly like a flame in the depths of the night, fierce and bold.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ri’nar Frostblaze", detail: "Ri’nar’s essence combines the icy chill of frost with the heat of blazing fire.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ja’ro Duskpelt", detail: "Ja’ro’s pelt blends seamlessly with the colors of dusk, embodying calm and stealth.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Dro’kar Whisperfang", detail: "Dro’kar’s fangs strike as silently as a whisper, swift and deadly.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Va’rith Sunshade", detail: "Va’rith carries the balance of the sun’s warmth and the shade’s coolness.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ma’kar Starclaw", detail: "Ma’kar’s claws glimmer with the light of distant stars, sharp and celestial.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ji’zar Thunderstrike", detail: "Ji’zar’s presence strikes like thunder, powerful and commanding.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ka’jin Frostshadow", detail: "Ka’jin walks within frost and shadow, a harbinger of cold elegance.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Za’rith Emberveil", detail: "Za’rith is cloaked in a veil of embers, glowing with quiet intensity.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ra’mar Stormrunner", detail: "Ra’mar dashes through storms, swift and unstoppable.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ja’mir Nightveil", detail: "Ja’mir thrives in the night, veiled in shadows and secrets.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ri’sar Moonfang", detail: "Ri’sar’s fangs gleam under the moon, a silent hunter of the night.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Va’zir Emberwhisper", detail: "Va’zir’s whispers carry the warmth of embers and the secrets of fire.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Dro’jir Firetail", detail: "Dro’jir’s tail blazes like fire, a testament to their fiery spirit.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ka’shar Froststep", detail: "Ka’shar steps leave behind a trail of frost, cool and calculated.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "J’aran Starhowl", detail: "J’aran howls at the stars, a soul tied to the celestial.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ma’zhar Skystalker", detail: "Ma’zhar moves through the skies, always stalking their prey with precision.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ro’zan Duskfire", detail: "Ro’zan glows with the fire of dusk, burning with passion and strength.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Va’sar Windwhisper", detail: "Va’sar’s whispers travel with the wind, bringing calm and clarity.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ja’nar Nightmane", detail: "Ja’nar’s mane shimmers in the night, a beacon of elegance and mystery.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ka’vir Emberclaw", detail: "Ka’vir’s claws glow with the ember of battle, fierce and determined.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ra’jin Frostsong", detail: "Ra’jin sings of frost, their voice as cold and enchanting as winter.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "J’iara Moonstrike", detail: "J’iara strikes under the moonlight, swift and precise as a falling star.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Dro’vath Shadowtail", detail: "Dro’vath’s tail disappears into shadows, a master of stealth and silence.", status: false, gender: "Unisex", type: "Fantasy Khajiit" },
  { name: "Ma’rash Quickclaw", detail: "Ma’rash’s claws move swiftly, earning him the title of Quickclaw.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ja’dar Silentpelt", detail: "Ja’dar moves silently through the night, his pelt blending with the shadows.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ri’zor Duskfang", detail: "Ri’zor’s fangs gleam at dusk, a hunter of unparalleled skill.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Dro’ji Quickstep", detail: "Dro’ji’s steps are quick and light, perfect for evading enemies.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ka’rash Firemane", detail: "Ka’rash’s fiery mane burns bright, a beacon of strength and courage.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ja’zir Shadowstripe", detail: "Ja’zir’s stripes blend with the shadows, making him a master of stealth.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ra’mir Starfang", detail: "Ra’mir’s fangs shine like stars, reflecting his celestial heritage.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Va’jir Ashrunner", detail: "Va’jir sprints through ashen lands, leaving no trace behind.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ma’tan Frosttail", detail: "Ma’tan’s tail carries the chill of frost, striking fear into his foes.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ji’shar Skystorm", detail: "Ji’shar commands the skies like a storm, fierce and relentless.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Kha’nar Sunclaw", detail: "Kha’nar’s claws are blessed by the sun, radiating warmth and power.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ja’len Whisperpelt", detail: "Ja’len’s pelt whispers secrets of the wind, a true enigma.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ri’kar Firestalker", detail: "Ri’kar stalks his prey through fire and ash, unyielding and fierce.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Va’rith Emberpaw", detail: "Va’rith’s paws glow like embers, carrying warmth and danger.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ka’raj Froststrike", detail: "Ka’raj strikes with the precision of frost, freezing his enemies in their tracks.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ma’zan Shadowtail", detail: "Ma’zan’s tail blends with the shadows, a symbol of his stealth.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Dro’rak Moonstalker", detail: "Dro’rak stalks his prey under the moonlight, silent and deadly.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "J’irol Emberfang", detail: "J’irol’s fangs glow with embers, a sign of his fiery spirit.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ka’lan Skystep", detail: "Ka’lan steps as lightly as the clouds in the sky, a master of agility.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ji’dor Starwhisker", detail: "Ji’dor’s whiskers catch the light of the stars, guiding him through the dark.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ri’tar Nightshade", detail: "Ri’tar thrives in the cover of night, his presence as subtle as shade.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Va’ron Blazemane", detail: "Va’ron’s mane blazes with fiery determination, unmatched in battle.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ka’rak Froststorm", detail: "Ka’rak brings the fury of frost and storms, a true force of nature.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ma’jin Starstripe", detail: "Ma’jin’s stripes shimmer like stars, a reflection of his cosmic essence.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Dro’kan Firewhisper", detail: "Dro’kan’s whispers carry the heat of fire, igniting courage and fear alike.", status: false, gender: "Male", type: "Traditional Khajiit" },
  { name: "Ja’kara Silentpurr", detail: "Ja’kara moves with silent grace, her purr a soothing melody.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ma’zira Moonstep", detail: "Ma’zira steps lightly under the moon, her presence serene and calm.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ri’vira Firepaw", detail: "Ri’vira’s paws carry the heat of fire, a true force in the wild.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Dro’zara Skystorm", detail: "Dro’zara moves with the power of a storm, her agility unmatched.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ka’nari Duskstripe", detail: "Ka’nari’s stripes blend with the dusk, making her a master of camouflage.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Sa’rina Emberstripe", detail: "Sa’rina’s stripes glow like embers, illuminating her path.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ji’kara Frostshade", detail: "Ji’kara’s fur carries the chill of frost, a harbinger of winter.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Va’shara Sunpelt", detail: "Va’shara’s pelt glows under the sun, radiating warmth and vitality.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ro’zara Whisperpaw", detail: "Ro’zara’s paws whisper across the ground, leaving no trace.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ma’jira Starshadow", detail: "Ma’jira moves in the shadows of stars, her steps ethereal and quiet.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "S’rina Quickclaw", detail: "S’rina’s claws strike with unparalleled speed and precision.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ka’zira Emberstripe", detail: "Ka’zira’s ember-like stripes shimmer in the firelight.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ji’rana Silentpaw", detail: "Ji’rana’s paws tread silently, a true hunter in the night.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ja’mira Moonpelt", detail: "Ja’mira’s pelt glows softly under the moonlight, a beacon in the dark.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ri’zani Frostmane", detail: "Ri’zani’s frosted mane shines with icy brilliance.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Dro’shara Nightfang", detail: "Dro’shara’s fangs glimmer under the night sky, sharp and fearsome.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ka’lara Ashstep", detail: "Ka’lara steps through ash and flame with elegance and resilience.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Sa’nari Emberstripe", detail: "Sa’nari’s ember-like stripes are a mark of her fiery nature.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Va’nira Whispermane", detail: "Va’nira’s mane flows softly, carrying whispers of ancient tales.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ka’jari Quickstripe", detail: "Ka’jari’s stripes move swiftly, a blur in the heat of battle.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ma’nira Stormtail", detail: "Ma’nira’s tail flicks with the fury of a storm, commanding attention.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ri’shara Moonstripe", detail: "Ri’shara’s stripes shine under the moon, guiding her through the night.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Va’kara Duskclaw", detail: "Va’kara’s claws gleam at dusk, a true warrior of the twilight.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ka’rina Firestep", detail: "Ka’rina’s steps carry the warmth of fire, igniting courage in her allies.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ji’sari Frostpelt", detail: "Ji’sari’s frosted pelt glimmers, a reflection of her icy determination.", status: false, gender: "Female", type: "Traditional Khajiit" },
  { name: "Ji’rak Frostshadow", detail: "Ji’rak moves like a shadow through frost-covered lands, blending seamlessly with the cold.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ri’nar Silentstripe", detail: "Ri’nar’s stripes are as quiet as the night, making them a master of stealth.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Va’zan Whisperfang", detail: "Va’zan’s fangs strike with the subtlety of a whisper, deadly and precise.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ka’jir Moonmane", detail: "Ka’jir’s mane glows softly under the moonlight, a sight of quiet beauty.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ja’rok Embertail", detail: "Ja’rok’s tail carries the fiery glow of embers, a symbol of strength.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Dro’kar Frostclaw", detail: "Dro’kar’s claws are as sharp as frostbite, leaving a chilling mark.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Va’rish Starstripe", detail: "Va’rish’s stripes shimmer like stars, illuminating their path.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ka’zhan Quickpelt", detail: "Ka’zhan’s pelt moves like the wind, quick and elusive.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ji’kar Silentfang", detail: "Ji’kar’s fangs strike silently, a true predator of the shadows.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ro’ran Duskstep", detail: "Ro’ran steps gracefully through the dusk, blending effortlessly into twilight.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ja’rish Nightstripe", detail: "Ja’rish’s stripes are bold in the night, a symbol of power and presence.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ri’tor Emberpaw", detail: "Ri’tor’s paws glow with the warmth of embers, leaving fiery tracks.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Dro’zar Whisperstorm", detail: "Dro’zar moves with the force of a storm and the silence of a whisper.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ka’nar Frostwhisker", detail: "Ka’nar’s whiskers glisten with frost, a testament to their icy resolve.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Va’mar Emberstripe", detail: "Va’mar’s stripes carry the glow of embers, reflecting their fiery spirit.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ma’nar Starwhisker", detail: "Ma’nar’s whiskers catch the light of stars, a guide in the dark.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ji’shar Nightfang", detail: "Ji’shar’s fangs gleam in the night, sharp and menacing.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ja’mar Sunstep", detail: "Ja’mar’s steps are light and bright like the rays of the sun.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Dro’rak Whisperclaw", detail: "Dro’rak’s claws strike with the subtlety of a whisper and the precision of a master.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ro’jin Quickshade", detail: "Ro’jin moves quickly through the shadows, an expert at evasion.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ma’zor Moonstripe", detail: "Ma’zor’s stripes glow softly under the moon, a sign of their mystic nature.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ri’tor Ashclaw", detail: "Ri’tor’s claws carry the marks of ash, hardened by battles.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ka’lan Froststep", detail: "Ka’lan’s steps are as cold as frost, leaving an icy trail.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Ja’nar Starstripe", detail: "Ja’nar’s stripes shimmer with the light of distant stars, mesmerizing to all.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Va’rash Quickfang", detail: "Va’rash’s fangs are swift and deadly, an asset in any fight.", status: false, gender: "Unisex", type: "Traditional Khajiit" },
  { name: "Dro’vash Darkpelt", detail: "Dro’vash’s pelt is as dark as the void, a perfect camouflage in the shadows.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ja’zor Bloodfang", detail: "Ja’zor’s fangs drip with the blood of his enemies, a fearsome warrior.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ri’skar Shadowfire", detail: "Ri’skar wields flames that burn as dark as shadows, striking terror into foes.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ma’tok Ironclaw", detail: "Ma’tok’s claws are as unyielding as iron, capable of shredding armor.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ka’rash Dreadfang", detail: "Ka’rash’s fangs are feared across the lands, a symbol of death.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Va’ran Nightflame", detail: "Va’ran’s flames glow in the night, a deadly beacon of his wrath.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ji’rok Stormstrike", detail: "Ji’rok strikes with the fury of a storm, leaving destruction in his wake.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ma’zor Emberhowl", detail: "Ma’zor’s howl carries the heat of embers, igniting fear in the hearts of his enemies.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ra’jhar Firestorm", detail: "Ra’jhar summons storms of fire to obliterate all who oppose him.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ka’zin Thunderfang", detail: "Ka’zin’s fangs strike like thunder, swift and unstoppable.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Dro’zar Blackflame", detail: "Dro’zar wields black flames that consume everything in their path.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Va’ron Ashclaw", detail: "Va’ron’s claws leave trails of ash, a testament to his fiery wrath.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ri’tok Froststorm", detail: "Ri’tok commands storms as cold as frost, freezing enemies in their tracks.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ja’rith Shadowwhisper", detail: "Ja’rith’s whispers carry the weight of shadows, sowing fear and confusion.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ka’mar Ironstorm", detail: "Ka’mar charges into battle like an iron storm, unstoppable and fierce.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ji’ral Emberveil", detail: "Ji’ral shrouds himself in a veil of embers, hiding his deadly strikes.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ma’tar Thunderfang", detail: "Ma’tar’s fangs roar with the power of thunder, striking fear into his enemies.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Va’rash Bloodshadow", detail: "Va’rash blends shadows with the scent of blood, a predator at heart.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Dro’nar Darkstep", detail: "Dro’nar’s steps are silent and dark, stalking his prey with unmatched precision.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ri’zor Nightclaw", detail: "Ri’zor’s claws are deadliest in the night, tearing through foes without mercy.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ma’zir Flamehowl", detail: "Ma’zir’s howl echoes with the roar of flames, terrifying all who hear it.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ra’kan Moonstrike", detail: "Ra’kan strikes under the moonlight, swift and deadly as a blade.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ji’ron Ashpelt", detail: "Ji’ron’s pelt is marked with ash, a symbol of battles fought and won.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ka’jhar Frostwhisper", detail: "Ka’jhar whispers with the chill of frost, freezing enemies in fear.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ja’roz Emberblade", detail: "Ja’roz wields an ember blade that burns through armor and flesh alike.", status: false, gender: "Male", type: "Fearsome Khajiit" },
  { name: "Ma’rika Darkhowl", detail: "Ma’rika’s howl echoes through the darkness, striking fear into her foes.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ka’rina Shadowstorm", detail: "Ka’rina is as fierce and unpredictable as a storm, cloaked in shadows.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ja’lara Bloodclaw", detail: "Ja’lara’s claws are soaked in the blood of her enemies, a predator without mercy.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ri’vani Emberpelt", detail: "Ri’vani’s pelt glows with the heat of embers, a deadly force to be reckoned with.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Sa’nira Ironfang", detail: "Sa’nira’s fangs are forged from iron, capable of tearing through any armor.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Dro’zara Thunderclaw", detail: "Dro’zara’s claws strike like thunder, shaking the earth beneath her enemies.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Va’shara Blackfang", detail: "Va’shara’s fangs are as black as night, ready to tear through anything in her path.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ka’mira Bloodstorm", detail: "Ka’mira’s fury is like a bloodstorm, overwhelming anyone who dares stand against her.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ji’rani Frostfire", detail: "Ji’rani’s fire burns as cold as frost, a dangerous paradox to any who face her.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ma’nara Darkveil", detail: "Ma’nara’s dark veil hides her deadly nature, making her a silent and lethal threat.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ri’vara Moonclaw", detail: "Ri’vara’s claws gleam in the moonlight, striking silently and swiftly.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Va’rani Firefang", detail: "Va’rani’s fangs burn with the heat of flames, consuming all who challenge her.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ji’lara Ashstrike", detail: "Ji’lara’s strikes are like ash, leaving nothing but destruction in her wake.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ja’kira Embermane", detail: "Ja’kira’s mane burns like embers, a fiery lioness in a battle of flames.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ka’nara Bloodflame", detail: "Ka’nara’s flames are fueled by blood, a fire that scorches her enemies with vengeance.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Sa’vara Nightstorm", detail: "Sa’vara’s storms rage through the night, leaving only chaos and fear.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ma’jari Flamehowl", detail: "Ma’jari’s howl is as fiery as her spirit, a call to arms for the bold and the brave.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Va’kara Thunderveil", detail: "Va’kara’s veil is charged with the fury of thunder, a storm waiting to explode.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ro’shara Frostshadow", detail: "Ro’shara moves in silence, her frost shadow freezing all who dare approach.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Dro’rana Ashfang", detail: "Dro’rana’s fangs are forged from ash, a symbol of the death she leaves behind.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ji’mira Emberclaw", detail: "Ji’mira’s claws burn with the intensity of embers, a fiery presence on the battlefield.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ka’zara Bloodtail", detail: "Ka’zara’s tail swings with a deadly precision, striking like a whip of blood.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ma’rana Stormshadow", detail: "Ma’rana’s shadow moves like a storm, swift and unpredictable in the chaos of battle.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ja’vira Blackfang", detail: "Ja’vira’s fangs are as dark as night, feared across the land for their lethal bite.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Va’nira Frostflame", detail: "Va’nira’s flames freeze her enemies in place, a deadly paradox that brings destruction.", status: false, gender: "Female", type: "Fearsome Khajiit" },
  { name: "Ji’dar Darkshadow", detail: "Ji’dar moves in the darkness, his shadow as deadly as his claws.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ri’mar Bloodfang", detail: "Ri’mar’s fangs are stained with the blood of his foes, a relentless hunter.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Dro’zar Ironclaw", detail: "Dro’zar’s claws are as strong as iron, capable of crushing any foe.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ka’lan Flamewhisper", detail: "Ka’lan’s whispers are like the crackling of flames, fiery and destructive.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ja’vash Shadowfang", detail: "Ja’vash strikes from the shadows, his fangs swift and fatal.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ma’zor Nightclaw", detail: "Ma’zor’s claws are as dark as the night, silent and deadly in the dark.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Va’tok Blackfire", detail: "Va’tok’s fire is black as coal, consuming all who come near.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ro’zar Thunderfang", detail: "Ro’zar’s fangs strike with the force of thunder, leaving destruction in their wake.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ji’zor Froststorm", detail: "Ji’zor’s storms freeze everything they touch, bringing death with every breath.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ka’mar Bloodveil", detail: "Ka’mar’s veil of blood conceals his deadly intentions, a shadow in the night.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Va’nar Darkflame", detail: "Va’nar’s flames are dark, burning with a cold and deadly intensity.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ja’nar Emberstorm", detail: "Ja’nar’s storms are filled with ember, burning everything in its path.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ma’rith Ironstrike", detail: "Ma’rith strikes with the force of iron, his blows unmatched in power.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ri’zhar Ashfang", detail: "Ri’zhar’s fangs are made of ash, sharp and unforgiving.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ka’zir Thunderfire", detail: "Ka’zir combines the fury of thunder and fire, devastating all in his wake.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ji’rith Frostwhisper", detail: "Ji’rith’s whispers are cold as ice, freezing his enemies where they stand.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Va’rash Shadowpelt", detail: "Va’rash’s pelt blends into the shadows, making him nearly invisible in the dark.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Dro’mar Bloodstep", detail: "Dro’mar’s steps leave a trail of blood, marking the path of his deadly hunt.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ma’vok Nightstrike", detail: "Ma’vok strikes in the night, his presence felt only after it’s too late.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ka’vash Embershadow", detail: "Ka’vash is a shadow lit by embers, a silent terror stalking in the dark.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ro’jin Flamehowl", detail: "Ro’jin’s howl is like a flame, terrifying and fierce as it echoes through the night.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Va’tan Ironfang", detail: "Va’tan’s fangs are forged from iron, unbreakable and deadly in battle.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ja’rok Thunderflame", detail: "Ja’rok’s flames are as loud and powerful as thunder, striking with explosive force.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Dro’nir Ashclaw", detail: "Dro’nir’s claws are made of ash, sharp as death and leaving nothing behind but destruction.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
  { name: "Ji’shar Blackfang", detail: "Ji’shar’s fangs are as black as night, feared for their deadly precision.", status: false, gender: "Unisex", type: "Fearsome Khajiit" },
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

const KhajiitNameGenerator = () => {
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
  
const bgImage = "/Khajiit-name-genrator.jpg"
const context = "Khajiit Name Generator with Meaning Tool"
const Q1 = "What is the Khajiit Name Generator?"
const A1 = "The Khajiit Name Generator is an online tool designed to generate unique, meaningful names for Khajiit characters. It offers names inspired by Elder Scrolls lore, categorized by gender, name type, and meaning, perfect for roleplaying storytelling, and character creation."

const Q2 = "How does the Khajiit Name Generator work?"
const A2 = "Simply choose the gender and name type (traditional, fantasy, fearsome), and click 'Generate.' The tool will instantly provide you with a list of names along with their meanings, giving you creative and authentic options for your Khajiit character."

const Q3 = "Can I customize the names based on specific criteria??"
const A3 = "Yes, the tool allows customization. You can select the character's gender (male, female, or unisex) and choose from different name categories, such as traditional, fantasy, or fearsome. This ensures that you get names that match your character’s personality and story."

const Q4 = "Are the generated names tied to Khajiit culture?"
const A4 = "Absolutely! Each name generated is inspired by the rich Khajiit culture and lore in the Elder Scrolls universe. The names reflect the traditions, spiritual beliefs, and mystical elements of Khajiit society, ensuring authenticity in your character creation."

const Q5 = "Can I use the generated names for projects outside of Elder Scrolls?"
const A5 = "Yes! While the names are inspired by Elder Scrolls, they are versatile and can be used for various creative projects, including writing, roleplaying, gaming, or any other fantasy or adventure-themed projects. The names work perfectly for any Khajiit-inspired character."
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
        <a href="/khajiit-name-generator" className="hover:underline text-[#343a40]">Khajiit Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Khajiit Name Generator With Meaning Tool
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
            <p className="text-center text-[#343a40]">Types of Khajiit Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Fantasy Khajiit">Fantasy</option>
              <option value="Traditional Khajiit">Traditional</option>
              <option value="Fearsome">Fearsome</option>
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
            What is the Khajiit Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            The Khajiit Name Generator is an online tool designed to help you create authentic Khajiit names. 
            Every name reflects the deep connection Khajiit has with their culture, history, and the moons that govern their lives. 
            Whether you're working on a character for a roleplaying game, crafting a fictional story, or exploring the Elder Scrolls universe, 
            this tool helps you find the perfect Khajiit name effortlessly.
            <br />
            It is simple to use and offers both traditional and modern Khajiit names. 
            Our Khajiit Name Generator tool combines aspects of Elder Scrolls lore with unique name types that fit any Khajiit character, whether male, female, or unisex.
            </p>
            
          </div>
        </div>
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use Our Khajiit Name Generator?
            </h2>
            <hr />
            <br />
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Save Time and Effort in Name Creation
            </h3>
            <p className="text-left mt-[10px]  py-[10px] text-[#343a40]">
            You must appreciate the convenience of instantly generating Khajiit names without spending hours brainstorming. 
            Our tool streamlines the process, allowing you to create authentic and fitting names in just a few clicks. 
            This saves valuable time, making your creative process faster and more efficient.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Discover Creative and Relevant Khajiit Names
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            The Khajiit Name Generator helps you find unique and fitting names inspired by the rich lore of the Elder Scrolls universe. 
            You’ll have access to names that are not only meaningful but also culturally relevant, ensuring your character feels grounded in the world of Khajiit.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Make Your Khajiit Characters Stand Out
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            Crafting a memorable character starts with a great name. Our tool helps you select names that reflect the depth and personality of your Khajiit character. 
            Whether you want something traditional, fearsome, or fantasy-inspired, you'll be able to create a name that truly stands out in any game or story.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Khajiit Name Generator Tool
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose a Khajiit Gender <b>  (Male, Female, Unisex) </b>
              </h3>
              <p>
              Select the gender of your Khajiit character—male, female, or unisex—to get the most relevant name suggestions.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select a Khajiit Name Type <b>(Fantasy, Traditional, Fearsome)</b>
              </h3>
              <p>
              Choose a name type such as traditional, fantasy, or fearsome to match your character’s personality and story.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b> for Unique Names
              </h3>
              <p>
              It is time to let the tool work its magic. Click the <b> "Generate"</b> button to receive a list of unique and meaningful Khajiit names instantly.
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
              src="male-Khajiit-name-genrator.jpg"
              alt="Anime Name Generator with Meaning | Unique Anime Names for Characters"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="female-Khajiit-name-genrator.webp"
              alt="Anime Name Generator with Meaning | Unique Anime Names for Characters"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/The-Elder-Scrolls-Legends-Moons-of-Elsweyr-1400.avif")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Khajiit Name Generator
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
          <b>Features of the Khajiit Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold">
          <b>Instant Name Generation</b>
            </h3>
            <p>
            Our Khajiit Name Generator tool provides you with instant results, offering a wide range of Khajiit names based on your chosen preferences. 
            With just a click, you can generate unique names quickly, saving you time in your creative process.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Meaningful Names Inspired by Elder Scrolls Lore</b> 
            </h3>
            <p>
            Every name generated carries significance, deeply inspired by the rich history of Khajiit culture in the Elder Scrolls universe. 
            The names are not only creative but also reflect the mystical and spiritual elements associated with Khajiit, giving your character depth and authenticity.         
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Customizable Name Categories</b>   
          </h3>
            <p>
            Tailor your search by choosing from various name categories, including gender (male, female, unisex) and name type (traditional, fantasy, fearsome). 
            This flexibility allows you to fine-tune your results and generate the most suitable name for your character's story.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Versatile for Various Projects</b>   
            </h3>
            <p>
            Whether you're designing a character for a video game, writing a story, or roleplaying, the Khajiit Name Generator adapts to a variety of creative needs. 
            It’s perfect for generating names that fit any setting, from epic fantasy tales to immersive Elder Scrolls gameplay.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Easy-to-Use Interface</b>   
            </h3>
            <p>
            The generator is designed to be user-friendly, requiring just a few simple steps to create the perfect name. 
            The interface is intuitive, ensuring that both beginners and seasoned creators can easily navigate through the tool without any hassle.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Authentic Khajiit Names</b>   
            </h3>
            <p>
            The names produced are true to Khajiit culture, drawing inspiration from the Elder Scrolls’ deep lore. 
            This authenticity ensures that your character's name feels genuinely tied to the world of Khajiit, providing an immersive experience for fans and creators alike.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Khajiit Gender and Category Options</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
           <b>By Gender</b>
            </h3>
            <p> 
             <b>Male Khajiit Names:</b>
             You must explore strong and honorable male Khajiit names like Ra’zirr (Swift Hunter), J'zaro (Moonlight) or M'aiq (The Fool). 
             These names convey strength and agility, perfect for Khajiit warriors or clever traders.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Female Khajiit Names: </b>
            Graceful and powerful, female Khajiit names such as S'randarr (Goddess of Mercy), T'rana (Moon Shadow), or Ki’zarah (Star of the Desert) highlight beauty, wisdom, and resilience. 
            These names capture the essence of Khajiit femininity, ideal for leaders or mystics.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Unisex Khajiit Names: </b>
            Unisex names like R'zarh (Night Prowler), Kh'aih (Desert Wanderer), and Ma'rand (Great Spirit) offer flexibility, 
            allowing you to create versatile Khajiit characters that could be either male or female, with equal strength and grace.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
          <b>By Category</b>
            </h3>
            <p> <b>Traditional Khajiit Names: </b>
            Immerse yourself in the rich history of Khajiit culture with names like Ja’zarh (Blessed One), S'rassa (Protector of the Moon), or K'hari (Beloved). 
            These names are deeply connected to Khajiit customs and the mystical powers of their world.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Fantasy Khajiit Names: </b>
            Dive into a realm of wonder with names like Z'harr (Storm Bringer), S'rinara (Moonlit Path), or Ri'zarh (Healer of Souls). 
            These names evoke magical themes and are perfect for Khajiit characters involved in epic adventures or enchanted quests.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Fearsome Khajiit Names: </b>
            Strong and commanding names such as Daro'Vashi (Terror of the Desert), R’zirri (Slayer), and M'aiq the Mighty reflect the Khajiit’s warrior spirit. 
            Ideal for fierce combatants or leaders, these names make a bold statement in any story.
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
            Why Our Khajiit Name Generator Stands Out
            </h2>
            <hr />
            <br />
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Authentic Khajiit Culture
            </h3>
            <p className="text-left py-[5px] text-[#343a40]">
            Our Khajiit Name Generator is deeply rooted in the lore of the Elder Scrolls universe. 
            Each name is carefully crafted to reflect the rich traditions, beliefs, and customs of the Khajiit people, ensuring that every name feels genuine and true to their culture.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Instant and Creative Results
            </h3>
            <br />  
            <p className="text-left py-[5px] text-[#343a40]">
            The tool delivers quick results, providing you with a variety of unique and meaningful Khajiit names in seconds. 
            No need to spend hours brainstorming—just click and receive instant names that match your character’s identity.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Customizable for Every Need
            </h3>
            <br />  
            <p className="text-left py-[5px] text-[#343a40]">
            The generator offers multiple options for tailoring your name search. Choose by gender, name type, and even meaning to generate the most relevant names for your character. 
            Whether you're creating a strong male warrior, a mystical female healer, or a versatile unisex character, this tool fits all your needs.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            User-Friendly and Easy to Use
            </h3>
            <br />  
            <p className="text-left py-[5px] text-[#343a40]">
            Designed for ease of use, our generator requires just a few simple steps. 
            Its intuitive interface ensures you can quickly navigate the tool and generate names without any hassle, regardless of your experience level.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Perfect for Multiple Creative Projects
            </h3>
            <br />  
            <p className="text-left py-[5px] text-[#343a40]">
            Whether you're designing a character for an Elder Scrolls game, a novel, or any other creative work, the Khajiit Name Generator fits a wide range of projects. 
            Its versatility makes it a go-to tool for both casual creators and dedicated fans.
            </p>
            <br />
            <hr />
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[60vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          List of Khajiit Name Types by Gender and Category with Meaning
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Male Khajiit Names
              </h3>
              <p><b>Traditional Names</b>
              <ul>
              <li><b>- Ra'zirr:</b>"Swift Hunter" (Symbolizing agility and connection to the wild, ideal for a warrior or scout)</li>
              <li><b>- J'zaro:</b> "Moonlight" (A name filled with mystery, reflecting the mystical nature of Khajiit)</li>
              <li><b>- M'aiq:</b>  "The Fool" (A clever and playful name, often given to tricksters or wise jesters)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Fantasy Names</b>
              <ul>
              <li><b>- Z'harr:</b> "Storm Bringer" (Conveying power and energy, perfect for a bold, adventurous Khajiit)</li>
              <li><b>- Ri'zarh:</b> "Healer of Souls" (A name representing wisdom and spiritual healing)</li>
              <li><b>- Daro'Vashi:</b> "Terror of the Desert" (Evoking fearlessness, this name suits a fierce, battle-hardened Khajiit)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Fearsome Names</b>
              <ul>
              <li><b>- R'zirri </b>"Slayer" (Signifying a warrior’s strength and relentless nature in battle)</li>
              <li><b>- K'rassh </b>"Blood Hunter" (A fearsome name reflecting a deadly, relentless warrior)</li>
              <li><b>- M'aiq the Mighty</b>"The Mighty" (A name exuding strength and dominance, often associated with legendary figures)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="HD-wallpaper-khajiit-alenaekaterinburg-frumusete-luminos-cat-fantasy-green-skyrim-lynx-pisica.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[320px] my-[20px] h-[350px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="w-[80%] mx-auto text-[#343a40] my-[40px] h-[60vh]">
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Female Khajiit Names
              </h3>
              <p>
              <b>Traditional Names</b>
              <ul>
              <li><b>- S'randarr </b>"Goddess of Mercy" (Representing compassion and divine protection)</li>
              <li><b>- T'rana </b>"Moon Shadow" (A graceful name reflecting the quiet, mystical essence of the moons)</li>
              <li><b>- Ki’zarah </b>Star of the Desert" (Symbolizing beauty, strength, and resilience)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Fantasy Names</b>
              <ul>
              <li><b>- S'rinara </b>"Moonlit Path" (Evoking a sense of mystery and grace, perfect for magical or mystical characters)</li>
              <li><b>- Z'lira </b>"Silent Whisper" (A name full of elegance and secrecy, ideal for a stealthy or spiritual Khajiit)</li>
              <li><b>- M'rasha </b> "Daughter of the Sands" (A name inspired by Khajiit’s deep connection to the desert)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="female-name-generator.png"
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

export default KhajiitNameGenerator;

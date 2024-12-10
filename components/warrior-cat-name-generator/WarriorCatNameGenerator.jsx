"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Stormstar", detail: "A fierce leader known for unwavering courage and strength in battles.", status: false, type: "Male", theme: "Leader" },
    { name: "Shadowclaw", detail: "A cunning leader who moves stealthily and strikes with precision.", status: false, type: "Male", theme: "Leader" },
    { name: "Thunderstrike", detail: "An authoritative leader who commands with the force of a thunderstorm.", status: false, type: "Male", theme: "Leader" },
    { name: "Frostheart", detail: "A calm and collected leader, known for his cold yet just decisions.", status: false, type: "Male", theme: "Leader" },
    { name: "Bravestorm", detail: "A fearless leader who charges headfirst into battle, inspiring bravery.", status: false, type: "Male", theme: "Leader" },
    { name: "Emberfang", detail: "A passionate leader with a fiery determination to protect his people.", status: false, type: "Male", theme: "Leader" },
    { name: "Silverstar", detail: "A wise and noble leader whose brilliance guides others like a shining star.", status: false, type: "Male", theme: "Leader" },
    { name: "Ironclaw", detail: "A steadfast leader with an iron will and unbreakable resolve.", status: false, type: "Male", theme: "Leader" },
    { name: "Goldenstorm", detail: "A charismatic leader who shines brightly in the midst of adversity.", status: false, type: "Male", theme: "Leader" },
    { name: "Darkmoon", detail: "A mysterious leader who thrives in darkness but seeks justice.", status: false, type: "Male", theme: "Leader" },
    { name: "Flamepelt", detail: "A fiery leader with unyielding determination.", status: false, type: "Male", theme: "Leader" },
    { name: "Nightscar", detail: "A battle-hardened leader with a dark past.", status: false, type: "Male", theme: "Leader" },
    { name: "Hawktalon", detail: "A swift and sharp-minded leader.", status: false, type: "Male", theme: "Leader" },
    { name: "Windstar", detail: "A leader who moves with the speed of the wind.", status: false, type: "Male", theme: "Leader" },
    { name: "Stonefang", detail: "A resilient leader with unshakeable strength.", status: false, type: "Male", theme: "Leader" },
    { name: "Steelclaw", detail: "A leader with unwavering strength and precision.", status: false, type: "Male", theme: "Leader" },
    { name: "Ashstar", detail: "A leader who rises from adversity like a phoenix.", status: false, type: "Male", theme: "Leader" },
    { name: "Firefang", detail: "A fierce leader who burns with passion and intensity.", status: false, type: "Male", theme: "Leader" },
    { name: "Coldstrike", detail: "A strategic leader whose mind is as sharp as ice.", status: false, type: "Male", theme: "Leader" },
    { name: "Oakenshadow", detail: "A wise leader rooted in tradition and strength.", status: false, type: "Male", theme: "Leader" },
    { name: "Sunstorm", detail: "A radiant leader who spreads warmth and light.", status: false, type: "Male", theme: "Leader" },
    { name: "Ravenpelt", detail: "A leader with a mysterious aura and sharp intellect.", status: false, type: "Male", theme: "Leader" },
    { name: "Blazetail", detail: "A fiery leader who leaves a trail of light in his wake.", status: false, type: "Male", theme: "Leader" },
    { name: "Earthstar", detail: "A grounded leader with an unshakable presence.", status: false, type: "Male", theme: "Leader" },
    { name: "Ironfang", detail: "A leader known for his unmatched resilience and courage.", status: false, type: "Male", theme: "Leader" },
    { name: "Silentstorm", detail: "A quiet yet powerful leader, moving like a silent tempest.", status: false, type: "Male", theme: "Leader" },
    { name: "Thundertail", detail: "A leader whose presence is as commanding as thunder.", status: false, type: "Male", theme: "Leader" },
    { name: "Froststrike", detail: "A cold and calculating leader, precise in every move.", status: false, type: "Male", theme: "Leader" },
    { name: "Bloodfang", detail: "A fierce and relentless leader known for his ferocity.", status: false, type: "Male", theme: "Leader" },
    { name: "Shadowstorm", detail: "A leader cloaked in mystery, wielding the power of shadows.", status: false, type: "Male", theme: "Leader" },
    { name: "Wildclaw", detail: "An untamed leader with a fierce, natural instinct.", status: false, type: "Male", theme: "Leader" },
    { name: "Goldenstrike", detail: "A bold leader known for swift, decisive actions.", status: false, type: "Male", theme: "Leader" },
    { name: "Icefang", detail: "A cool-headed leader with a sharp, unforgiving nature.", status: false, type: "Male", theme: "Leader" },
    { name: "Ashstorm", detail: "A leader who rises from the ashes, fierce and unyielding.", status: false, type: "Male", theme: "Leader" },
    { name: "Bravetail", detail: "A courageous leader with an indomitable spirit.", status: false, type: "Male", theme: "Leader" },
    { name: "Stoneclaw", detail: "A leader as strong as stone, unyielding and steady.", status: false, type: "Male", theme: "Leader" },
    { name: "Frostmoon", detail: "A serene yet powerful leader, embodying the calm of winter.", status: false, type: "Male", theme: "Leader" },
    { name: "Darkstorm", detail: "A brooding leader with a commanding presence.", status: false, type: "Male", theme: "Leader" },
    { name: "Steelstrike", detail: "A hard and precise leader, unyielding like steel.", status: false, type: "Male", theme: "Leader" },
    { name: "Emberclaw", detail: "A fiery leader who fights with relentless passion.", status: false, type: "Male", theme: "Leader" },
    { name: "Nightstorm", detail: "A dark and imposing leader with unmatched resolve.", status: false, type: "Male", theme: "Leader" },
    { name: "Swiftclaw", detail: "A nimble and fast-thinking leader, always ahead of his foes.", status: false, type: "Male", theme: "Leader" },
    { name: "Strongpelt", detail: "A robust and resilient leader, enduring through all trials.", status: false, type: "Male", theme: "Leader" },
    { name: "Stormpelt", detail: "A leader as turbulent as a storm but equally protective.", status: false, type: "Male", theme: "Leader" },
    { name: "Ironstrike", detail: "A steadfast leader, striking with the precision of a smith.", status: false, type: "Male", theme: "Leader" },
    { name: "Duskclaw", detail: "A twilight-born leader who thrives in the shadows.", status: false, type: "Male", theme: "Leader" },
    { name: "Firestorm", detail: "A blazing leader who incites passion and fear alike.", status: false, type: "Male", theme: "Leader" },
    { name: "Cloudstrike", detail: "A quick-thinking leader who moves like a lightning bolt.", status: false, type: "Male", theme: "Leader" },
    { name: "Blazetail", detail: "A leader with a fiery spirit, leaving an unforgettable mark.", status: false, type: "Male", theme: "Leader" },
    { name: "Earthfang", detail: "A grounded leader whose strength is drawn from the earth itself.", status: false, type: "Male", theme: "Leader" }, 
    { name: "Moonstar", detail: "A graceful leader whose wisdom is as enduring as the moon's glow.", status: false, type: "Female", theme: "Leader" },
    { name: "Silverfang", detail: "A fierce leader with a striking presence and a sharp intellect.", status: false, type: "Female", theme: "Leader" },
    { name: "Fireblaze", detail: "A dynamic leader with a fiery spirit that ignites courage in her followers.", status: false, type: "Female", theme: "Leader" },
    { name: "Frostheart", detail: "A composed leader whose icy demeanor conceals a warm heart.", status: false, type: "Female", theme: "Leader" },
    { name: "Emberstorm", detail: "A determined leader who burns with an unstoppable drive for justice.", status: false, type: "Female", theme: "Leader" },
    { name: "Dawnstrike", detail: "A vigilant leader who brings light and hope like the break of dawn.", status: false, type: "Female", theme: "Leader" },
    { name: "Sunshadow", detail: "A balanced leader who walks between light and darkness with wisdom.", status: false, type: "Female", theme: "Leader" },
    { name: "Brightmoon", detail: "A luminous leader whose kindness and clarity brighten every path.", status: false, type: "Female", theme: "Leader" },
    { name: "Willowstar", detail: "A gentle yet strong leader, like the willow that bends but never breaks.", status: false, type: "Female", theme: "Leader" },
    { name: "Lightstorm", detail: "A radiant leader who brings a storm of light to dispel darkness.", status: false, type: "Female", theme: "Leader" },
    { name: "Goldenheart", detail: "A compassionate leader with a heart of gold.", status: false, type: "Female", theme: "Leader" },
    { name: "Swiftshadow", detail: "A quick-witted leader who can navigate any challenge.", status: false, type: "Female", theme: "Leader" },
    { name: "Starfire", detail: "A brilliant leader who lights up the darkest paths.", status: false, type: "Female", theme: "Leader" },
    { name: "Featherstorm", detail: "A fierce yet graceful leader, like a storm with a soft touch.", status: false, type: "Female", theme: "Leader" },
    { name: "Nightshade", detail: "A leader with an air of mystery and silent power.", status: false, type: "Female", theme: "Leader" },
    { name: "Rainstar", detail: "A calm and nurturing leader who brings life to barren lands.", status: false, type: "Female", theme: "Leader" },
    { name: "Petalstorm", detail: "A leader with a gentle touch but fierce resolve.", status: false, type: "Female", theme: "Leader" },
    { name: "Thunderheart", detail: "A bold and passionate leader with a thunderous presence.", status: false, type: "Female", theme: "Leader" },
    { name: "Skyshadow", detail: "A visionary leader who gazes into the horizon for answers.", status: false, type: "Female", theme: "Leader" },
    { name: "Iceheart", detail: "A leader with a cool exterior but fierce loyalty.", status: false, type: "Female", theme: "Leader" },
    { name: "Breezeclaw", detail: "A swift and agile leader, quick in both thought and action.", status: false, type: "Female", theme: "Leader" },
    { name: "Rosefang", detail: "A beautiful yet deadly leader with a sharp mind.", status: false, type: "Female", theme: "Leader" },
    { name: "Crystalmoon", detail: "A leader with clarity and brilliance like a rare gem.", status: false, type: "Female", theme: "Leader" },
    { name: "Softstorm", detail: "A gentle leader who can summon fierce strength when needed.", status: false, type: "Female", theme: "Leader" },
    { name: "Shadowheart", detail: "A leader who guards secrets but leads with courage.", status: false, type: "Female", theme: "Leader" },
    { name: "Birchstar", detail: "A wise leader with deep roots in tradition and wisdom.", status: false, type: "Female", theme: "Leader" },
    { name: "Morningstorm", detail: "A leader as refreshing and powerful as the dawn's first light.", status: false, type: "Female", theme: "Leader" },
    { name: "Snowheart", detail: "A compassionate leader with a heart as pure as snow.", status: false, type: "Female", theme: "Leader" },
    { name: "Quickclaw", detail: "A fast and agile leader, swift in decision and action.", status: false, type: "Female", theme: "Leader" },
    { name: "Flameheart", detail: "A passionate and warm-hearted leader with fiery resolve.", status: false, type: "Female", theme: "Leader" },
    { name: "Silentstar", detail: "A quiet yet strong leader, whose actions speak louder than words.", status: false, type: "Female", theme: "Leader" },
    { name: "Lightrain", detail: "A gentle leader who brings peace and growth like a soft rain.", status: false, type: "Female", theme: "Leader" },
    { name: "Silvermist", detail: "A graceful leader who moves with an ethereal presence.", status: false, type: "Female", theme: "Leader" },
    { name: "Thunderstorm", detail: "A fierce leader who commands with the force of a raging storm.", status: false, type: "Female", theme: "Leader" },
    { name: "Icetail", detail: "A calm and calculating leader with a cool demeanor.", status: false, type: "Female", theme: "Leader" },
    { name: "Stoneheart", detail: "A strong leader with an unbreakable resolve and steadfast loyalty.", status: false, type: "Female", theme: "Leader" },
    { name: "Whisperstar", detail: "A soft-spoken leader whose influence resonates deeply.", status: false, type: "Female", theme: "Leader" },
    { name: "Blossomstorm", detail: "A leader who brings beauty and fierce strength in equal measure.", status: false, type: "Female", theme: "Leader" },
    { name: "Duskmoon", detail: "A serene and wise leader with the calm of nightfall.", status: false, type: "Female", theme: "Leader" },
    { name: "Ravenstorm", detail: "A dark and powerful leader with unmatched cunning.", status: false, type: "Female", theme: "Leader" },
    { name: "Starshadow", detail: "A mystical leader who moves with grace and wisdom.", status: false, type: "Female", theme: "Leader" },
    { name: "Ivyfang", detail: "A tenacious leader with a natural knack for strategy.", status: false, type: "Female", theme: "Leader" },
    { name: "Leafstar", detail: "A nurturing leader rooted in compassion and growth.", status: false, type: "Female", theme: "Leader" },
    { name: "Dawnstorm", detail: "A radiant leader who brings the promise of a new day.", status: false, type: "Female", theme: "Leader" },
    { name: "Snowblaze", detail: "A unique leader whose icy exterior hides a blazing passion.", status: false, type: "Female", theme: "Leader" },
    { name: "Windfang", detail: "A swift and free-spirited leader, always ahead of the curve.", status: false, type: "Female", theme: "Leader" },
    { name: "Blazetail", detail: "A determined leader who leaves a trail of inspiration.", status: false, type: "Female", theme: "Leader" },
    { name: "Amberstorm", detail: "A warm and fierce leader with unrelenting determination.", status: false, type: "Female", theme: "Leader" },
    { name: "Oceanheart", detail: "A leader with a deep and vast compassion for all.", status: false, type: "Female", theme: "Leader" },
    { name: "Willowstorm", detail: "A flexible but strong leader, weathering every challenge.", status: false, type: "Female", theme: "Leader" }, 
    { name: "Thornclaw", detail: "A fierce warrior with sharp instincts and an unyielding spirit.", status: false, type: "Male", theme: "Warrior" },
      { name: "Stormstrike", detail: "A powerful warrior known for his swift and devastating attacks.", status: false, type: "Male", theme: "Warrior" },
      { name: "Ashfur", detail: "A seasoned warrior with a rugged appearance and burning determination.", status: false, type: "Male", theme: "Warrior" },
      { name: "Hawkeye", detail: "A vigilant warrior with unmatched precision and focus.", status: false, type: "Male", theme: "Warrior" },
      { name: "Frostbite", detail: "A cold and calculating warrior who strikes with icy precision.", status: false, type: "Male", theme: "Warrior" },
      { name: "Flamepelt", detail: "A fiery warrior whose courage burns like an unquenchable flame.", status: false, type: "Male", theme: "Warrior" },
      { name: "Oakleaf", detail: "A grounded and dependable warrior with deep-rooted strength.", status: false, type: "Male", theme: "Warrior" },
      { name: "Nightfang", detail: "A stealthy and cunning warrior who thrives in darkness.", status: false, type: "Male", theme: "Warrior" },
      { name: "Lionheart", detail: "A bold and noble warrior with the heart of a lion.", status: false, type: "Male", theme: "Warrior" },
      { name: "Ravenclaw", detail: "A dark and mysterious warrior with razor-sharp instincts.", status: false, type: "Male", theme: "Warrior" },
      { name: "Shadowpelt", detail: "A warrior who moves like a shadow, unseen and silent.", status: false, type: "Male", theme: "Warrior" },
      { name: "Bramblefur", detail: "A rugged warrior who fights with the resilience of a bramble bush.", status: false, type: "Male", theme: "Warrior" },
      { name: "Icefang", detail: "A cold and fierce warrior with a bite as deadly as ice.", status: false, type: "Male", theme: "Warrior" },
      { name: "Cloudfoot", detail: "A nimble warrior who moves with the grace of drifting clouds.", status: false, type: "Male", theme: "Warrior" },
      { name: "Thunderstrike", detail: "A warrior whose attacks are as sudden and powerful as thunder.", status: false, type: "Male", theme: "Warrior" },
      { name: "Boulderclaw", detail: "A sturdy and immovable warrior, as solid as a boulder.", status: false, type: "Male", theme: "Warrior" },
      { name: "Wolfstrike", detail: "A fierce and loyal warrior who fights with the cunning of a wolf.", status: false, type: "Male", theme: "Warrior" },
      { name: "Stoneheart", detail: "A resolute warrior with unwavering loyalty and strength.", status: false, type: "Male", theme: "Warrior" },
      { name: "Ironfang", detail: "A relentless warrior with an unbreakable will and iron resolve.", status: false, type: "Male", theme: "Warrior" },
      { name: "Emberclaw", detail: "A fiery warrior who strikes with the heat of smoldering embers.", status: false, type: "Male", theme: "Warrior" },
      { name: "Blazetail", detail: "A swift and fierce warrior, leaving a trail of fire in his wake.", status: false, type: "Male", theme: "Warrior" },
      { name: "Fireclaw", detail: "A warrior who wields fire with unyielding fury and power.", status: false, type: "Male", theme: "Warrior" },
      { name: "Windfur", detail: "A swift and agile warrior, as free and wild as the wind.", status: false, type: "Male", theme: "Warrior" },
      { name: "Stormclaw", detail: "A warrior as fierce and uncontrollable as a storm.", status: false, type: "Male", theme: "Warrior" },
      { name: "Quickstrike", detail: "A fast and lethal warrior, striking before his enemies can react.", status: false, type: "Male", theme: "Warrior" },
      { name: "Eaglepelt", detail: "A noble warrior with the vision and courage of an eagle.", status: false, type: "Male", theme: "Warrior" },
      { name: "Bloodclaw", detail: "A fierce and ruthless warrior, leaving no mercy in battle.", status: false, type: "Male", theme: "Warrior" },
      { name: "Tigerpelt", detail: "A powerful warrior with the strength and agility of a tiger.", status: false, type: "Male", theme: "Warrior" },
      { name: "Sunclaw", detail: "A radiant warrior whose strength is as fierce as the sun.", status: false, type: "Male", theme: "Warrior" },
      { name: "Flamefur", detail: "A fiery warrior whose fury burns like an unquenchable flame.", status: false, type: "Male", theme: "Warrior" },
      { name: "Stormpelt", detail: "A warrior with the power and rage of a thunderstorm.", status: false, type: "Male", theme: "Warrior" },
      { name: "Frostfang", detail: "A cold and calculating warrior whose bite is as sharp as frost.", status: false, type: "Male", theme: "Warrior" },
      { name: "Lightningstrike", detail: "A swift warrior who strikes as suddenly as a bolt of lightning.", status: false, type: "Male", theme: "Warrior" },
      { name: "Oakenshadow", detail: "A strong and silent warrior, as sturdy as an ancient oak.", status: false, type: "Male", theme: "Warrior" },
      { name: "Silentfang", detail: "A stealthy warrior who attacks without a sound.", status: false, type: "Male", theme: "Warrior" },
      { name: "Ashstorm", detail: "A destructive warrior who leaves a trail of ashes in his path.", status: false, type: "Male", theme: "Warrior" },
      { name: "Bravetail", detail: "A courageous warrior who never retreats from battle.", status: false, type: "Male", theme: "Warrior" },
      { name: "Goldenpelt", detail: "A proud and regal warrior whose pelt shines like gold.", status: false, type: "Male", theme: "Warrior" },
      { name: "Shadowfur", detail: "A dark and mysterious warrior who blends into the shadows.", status: false, type: "Male", theme: "Warrior" },
      { name: "Stonefang", detail: "An unyielding warrior with the hardness of stone.", status: false, type: "Male", theme: "Warrior" },
      { name: "Emberfang", detail: "A fierce warrior whose rage smolders like burning embers.", status: false, type: "Male", theme: "Warrior" },
      { name: "Steelclaw", detail: "A warrior with claws as hard and unbreakable as steel.", status: false, type: "Male", theme: "Warrior" },
      { name: "Thunderfang", detail: "A warrior whose bite echoes like a thunderclap.", status: false, type: "Male", theme: "Warrior" },
      { name: "Nightshadow", detail: "A stealthy warrior who thrives in the darkness of night.", status: false, type: "Male", theme: "Warrior" },
      { name: "Ravenstrike", detail: "A swift and deadly warrior who strikes with precision.", status: false, type: "Male", theme: "Warrior" },
      { name: "Cloudpelt", detail: "A light-footed warrior who moves as softly as a cloud.", status: false, type: "Male", theme: "Warrior" },
      { name: "Duskstrike", detail: "A warrior who strikes swiftly in the fading light of dusk.", status: false, type: "Male", theme: "Warrior" },
      { name: "Hawkpelt", detail: "A warrior with sharp eyes and swift reflexes, like a hawk.", status: false, type: "Male", theme: "Warrior" },
      { name: "Ironclaw", detail: "A formidable warrior with claws of iron strength.", status: false, type: "Male", theme: "Warrior" },
      { name: "Wolfheart", detail: "A loyal and fearless warrior who fights with the spirit of a wolf.", status: false, type: "Male", theme: "Warrior" },
      { name: "Brightflame", detail: "A radiant warrior whose courage shines brightly in battle.", status: false, type: "Female", theme: "Warrior" },
      { name: "Silverstorm", detail: "A graceful yet powerful warrior who strikes like lightning.", status: false, type: "Female", theme: "Warrior" },
      { name: "Featherfur", detail: "A soft yet fierce warrior with unmatched agility.", status: false, type: "Female", theme: "Warrior" },
      { name: "Willowheart", detail: "A compassionate and strong warrior with unwavering loyalty.", status: false, type: "Female", theme: "Warrior" },
      { name: "Fireblaze", detail: "A blazing warrior whose spirit burns with passion and power.", status: false, type: "Female", theme: "Warrior" },
      { name: "Frostbreeze", detail: "A calm and collected warrior who moves with icy grace.", status: false, type: "Female", theme: "Warrior" },
      { name: "Skyshadow", detail: "A mysterious warrior who moves like the wind and clouds.", status: false, type: "Female", theme: "Warrior" },
      { name: "Sunstream", detail: "A warm and vibrant warrior who radiates positivity.", status: false, type: "Female", theme: "Warrior" },
      { name: "Rainpelt", detail: "A gentle yet resilient warrior, as enduring as the rain.", status: false, type: "Female", theme: "Warrior" },
      { name: "Petalclaw", detail: "A delicate yet deadly warrior, like a rose with thorns.", status: false, type: "Female", theme: "Warrior" },
      { name: "Goldenfeather", detail: "A radiant and graceful warrior, swift as a golden bird.", status: false, type: "Female", theme: "Warrior" },
      { name: "Crystalstorm", detail: "A warrior whose beauty is as dazzling as her strength.", status: false, type: "Female", theme: "Warrior" },
      { name: "Duskshadow", detail: "A silent and mysterious warrior who thrives in twilight.", status: false, type: "Female", theme: "Warrior" },
      { name: "Thunderblaze", detail: "A fierce warrior with a blazing fury like a storm.", status: false, type: "Female", theme: "Warrior" },
      { name: "Silentwhisper", detail: "A quiet and stealthy warrior who moves unseen.", status: false, type: "Female", theme: "Warrior" },
      { name: "Swiftstorm", detail: "A fast and fierce warrior, as quick as the wind.", status: false, type: "Female", theme: "Warrior" },
      { name: "Brightpetal", detail: "A cheerful warrior whose presence lights up the battlefield.", status: false, type: "Female", theme: "Warrior" },
      { name: "Emberheart", detail: "A passionate warrior with a warm, burning spirit.", status: false, type: "Female", theme: "Warrior" },
      { name: "Softshadow", detail: "A gentle warrior who moves with silent grace.", status: false, type: "Female", theme: "Warrior" },
      { name: "Rosefang", detail: "A fierce warrior with beauty as deadly as her bite.", status: false, type: "Female", theme: "Warrior" },
      { name: "Snowbreeze", detail: "A calm and serene warrior who fights with icy precision.", status: false, type: "Female", theme: "Warrior" },
      { name: "Leafwhisper", detail: "A gentle and wise warrior who listens to nature’s call.", status: false, type: "Female", theme: "Warrior" },
      { name: "Nightpetal", detail: "A delicate yet fierce warrior, blossoming under the moon.", status: false, type: "Female", theme: "Warrior" },
      { name: "Starfeather", detail: "A mystical warrior with a touch of celestial grace.", status: false, type: "Female", theme: "Warrior" },
      { name: "Lightwhisper", detail: "A soft-spoken yet powerful warrior who brings hope.", status: false, type: "Female", theme: "Warrior" },
      { name: "Blossomshadow", detail: "A graceful yet fierce warrior, as beautiful as a blossom.", status: false, type: "Female", theme: "Warrior" },
      { name: "Moonblaze", detail: "A radiant warrior whose light shines like the moon.", status: false, type: "Female", theme: "Warrior" },
      { name: "Brightwhisper", detail: "A gentle warrior who speaks softly but strikes fiercely.", status: false, type: "Female", theme: "Warrior" },
      { name: "Silentfeather", detail: "A stealthy warrior who moves like a feather in the wind.", status: false, type: "Female", theme: "Warrior" },
      { name: "Starfur", detail: "A mystical warrior whose fur shimmers like the stars.", status: false, type: "Female", theme: "Warrior" },
      { name: "Duskblaze", detail: "A fiery warrior whose light blazes in the twilight.", status: false, type: "Female", theme: "Warrior" },
      { name: "Softstorm", detail: "A gentle warrior who moves with the force of a storm.", status: false, type: "Female", theme: "Warrior" },
      { name: "Skyheart", detail: "A warrior with a heart as boundless as the sky.", status: false, type: "Female", theme: "Warrior" },
      { name: "Rosefeather", detail: "A delicate warrior whose beauty is matched by her strength.", status: false, type: "Female", theme: "Warrior" },
      { name: "Frostshadow", detail: "A calm and cool warrior who strikes from the shadows.", status: false, type: "Female", theme: "Warrior" },
      { name: "Crystalpelt", detail: "A dazzling warrior whose pelt sparkles like crystal.", status: false, type: "Female", theme: "Warrior" },
      { name: "Willowstream", detail: "A graceful and flowing warrior, like a willow by the stream.", status: false, type: "Female", theme: "Warrior" },
      { name: "Sunshadow", detail: "A warrior who balances the warmth of the sun and the cool of shadows.", status: false, type: "Female", theme: "Warrior" },
      { name: "Oceanblaze", detail: "A warrior whose spirit is as deep and fierce as the ocean.", status: false, type: "Female", theme: "Warrior" },
      { name: "Brightstorm", detail: "A radiant and energetic warrior who brings light to battle.", status: false, type: "Female", theme: "Warrior" },
      { name: "Fernshadow", detail: "A quiet and observant warrior who blends into the forest.", status: false, type: "Female", theme: "Warrior" },
      { name: "Shadowbreeze", detail: "A swift and stealthy warrior who moves with the wind.", status: false, type: "Female", theme: "Warrior" },
      { name: "Lightstream", detail: "A luminous warrior whose presence is calming and powerful.", status: false, type: "Female", theme: "Warrior" },
      { name: "Moonshadow", detail: "A mysterious warrior who thrives in the light of the moon.", status: false, type: "Female", theme: "Warrior" },
      { name: "Swiftfeather", detail: "A quick and agile warrior, as light as a feather.", status: false, type: "Female", theme: "Warrior" },
      { name: "Goldenstorm", detail: "A fierce warrior whose spirit shines like gold.", status: false, type: "Female", theme: "Warrior" },
      { name: "Rainshadow", detail: "A gentle yet strong warrior, as refreshing as the rain.", status: false, type: "Female", theme: "Warrior" },
      { name: "Dawnwhisper", detail: "A soft-spoken warrior whose presence heralds a new day.", status: false, type: "Female", theme: "Warrior" },
      { name: "Emberbreeze", detail: "A warm and gentle warrior, like embers carried by the breeze.", status: false, type: "Female", theme: "Warrior" },
      { name: "Ivyshadow", detail: "A resilient warrior who clings to her goals like ivy.", status: false, type: "Female", theme: "Warrior" }, 
      { name: "Sagewhisker", detail: "A wise healer with knowledge as deep as ancient sage.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Willowshade", detail: "A gentle healer who brings comfort like the shade of a willow.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Brambleheart", detail: "A compassionate healer with a heart as strong as brambles.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Oakwhisper", detail: "A steady and calming healer, like the whisper of an oak tree.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Rainshadow", detail: "A serene healer who thrives under the softest rain.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Featherwhisper", detail: "A healer with a gentle touch, as soft as a feather.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Frostwhisker", detail: "A cool-headed healer who brings clarity like frost in winter.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Softheart", detail: "A kind and nurturing healer with a heart full of warmth.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Thunderleaf", detail: "A powerful healer whose strength is like rolling thunder.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Stonewhisper", detail: "A calm and steadfast healer, as solid as a stone.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Ashwhisker", detail: "A wise healer who remains steady even in the face of ashes.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Cloudleaf", detail: "A light-hearted healer with the softness of a drifting cloud.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Brightshadow", detail: "A healer who balances light and darkness with ease.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Lightwhisper", detail: "A radiant healer who brings hope with every word.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Emberleaf", detail: "A healer whose care burns gently like embers in the night.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Goldenwhisker", detail: "A luminous healer with the warmth of the sun.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Birchwhisper", detail: "A gentle healer who bends but never breaks, like a birch.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Duskheart", detail: "A healer who finds peace and purpose in the twilight.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Crystalwhisper", detail: "A healer whose wisdom sparkles like crystal.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Silentfeather", detail: "A quiet but wise healer with a touch as soft as a feather.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Swiftwhisper", detail: "A quick and nimble healer who moves like the wind.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Morningleaf", detail: "A healer who brings the freshness of dawn to every soul.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Softshadow", detail: "A healer who moves gently, like a shadow at dusk.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Firewhisker", detail: "A fiery healer who brings warmth and light to the darkest times.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Sunwhisper", detail: "A healer who radiates warmth and comfort like the sun's rays.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Crystalheart", detail: "A healer with a pure and unwavering spirit, like crystal.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Silentheart", detail: "A quiet and thoughtful healer, offering peace and solace.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Flamewhisker", detail: "A fiery healer with a warm and protective presence.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Blazeleaf", detail: "A healer who brings burning determination and courage.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Moonwhisker", detail: "A calm healer who glows softly, like the light of the moon.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Starwhisper", detail: "A healer with wisdom as vast as the stars.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Silverwhisker", detail: "A gentle healer whose touch is as bright as silver light.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Windwhisper", detail: "A swift and nimble healer who moves like the wind.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Roseleaf", detail: "A healer with the softness of rose petals and the strength of its thorns.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Frostheart", detail: "A healer with a cool demeanor, bringing clarity and calm.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Ivywhisker", detail: "A resilient healer who clings to hope like ivy to stone.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Leafwhisker", detail: "A gentle healer who nurtures life like new leaves in spring.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Ravenheart", detail: "A wise and mysterious healer with a dark but kind heart.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Brightleaf", detail: "A healer who brings light and hope like the first green of spring.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Skywhisker", detail: "A healer with a spirit as open and free as the sky.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Oceanwhisper", detail: "A healer whose calm presence is as deep and steady as the ocean.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Snowwhisker", detail: "A healer who brings cool tranquility, like falling snow.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Petalheart", detail: "A soft-hearted healer who brings gentle care like petals.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Rainheart", detail: "A healer who soothes like the sound of gentle rain.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Crystalheart", detail: "A healer whose soul is as clear and pure as crystal.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Birchwhisker", detail: "A healer with the resilience and grace of a birch tree.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Featherheart", detail: "A soft and nurturing healer with a touch as light as feathers.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Thunderwhisker", detail: "A powerful healer who carries the strength of a thunderstorm.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Blossomheart", detail: "A healer who brings life and joy like blossoms in spring.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Morningheart", detail: "A healer who radiates the fresh hope of morning's first light.", status: false, type: "Male", theme: "Medicine Cat" },
      { name: "Rosefeather", detail: "A healer with the grace and beauty of a rose in bloom.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Willowwhisper", detail: "A healer who offers soothing comfort like a willow's shade.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Moonwhisker", detail: "A healer who glows with the quiet light of the moon.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Frostpetal", detail: "A healer whose touch is cool and refreshing, like frost.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Petalwhisper", detail: "A healer with a voice as soft as petals falling.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Featherstorm", detail: "A fierce yet gentle healer who brings balance to chaos.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Silentwhisper", detail: "A healer who works quietly, offering peace and solace.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Rainpetal", detail: "A healer who is as soothing and gentle as a soft rain.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Skyheart", detail: "A healer with a heart as open and vast as the sky.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Leafpetal", detail: "A healer as gentle and nurturing as new leaves in spring.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Oceanbreeze", detail: "A healer who brings calm like the ocean's breeze.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Brightshadow", detail: "A healer who brings hope even in the darkest moments.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Morningwhisper", detail: "A healer whose presence is as fresh and hopeful as morning dew.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Swiftheart", detail: "A quick and attentive healer who responds with care.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Thunderfeather", detail: "A healer whose strength is hidden behind a gentle touch.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Duskpetal", detail: "A healer who offers peace as the day fades into night.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Emberheart", detail: "A healer who nurtures warmth and healing like glowing embers.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Goldenpetal", detail: "A healer who shines with kindness and warmth like gold.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Firewhisper", detail: "A healer who brings both warmth and light through gentle care.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Silverfeather", detail: "A healer as graceful and luminous as silver moonlight.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Breezeheart", detail: "A healer who moves like a soft breeze, bringing comfort.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Ivyfeather", detail: "A healer who clings to life with resilience and strength.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Starwhisper", detail: "A healer who carries the quiet wisdom of the stars.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Snowpetal", detail: "A healer whose touch is soft and cool, like falling snow.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Dawnpetal", detail: "A healer who brings new beginnings like the dawn’s first light.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Rosewhisper", detail: "A healer with a soft voice that soothes like a blooming rose.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Thunderpetal", detail: "A healer with a delicate exterior but fierce strength within.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Skyfeather", detail: "A healer as light and graceful as the wind across the sky.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Softpetal", detail: "A gentle healer whose touch is as soft as petals.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Frostfeather", detail: "A healer with a cool touch that soothes and heals.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Brightheart", detail: "A radiant healer whose warmth and kindness shine through.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Starfeather", detail: "A healer whose wisdom sparkles like starlight.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Dawnpetal", detail: "A healer who brings renewal and hope like the dawn.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Snowheart", detail: "A healer with a heart as pure and gentle as fresh snow.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Sunfeather", detail: "A healer who brings warmth and light, like the sun's rays.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Crystalpetal", detail: "A healer whose beauty and grace sparkle like crystal.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Willowfeather", detail: "A healer with grace and calm like the flowing branches of a willow.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Emberpetal", detail: "A healer who carries warmth and life like glowing embers.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Ravenheart", detail: "A mysterious healer with a heart full of quiet wisdom.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Ivyheart", detail: "A healer with resilience and steadfast dedication.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Rainwhisper", detail: "A healer who brings calm, like the soft sound of rain.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Blazepetal", detail: "A fierce healer whose spirit burns brightly.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Quickwhisper", detail: "A healer who moves swiftly and efficiently.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Morningheart", detail: "A healer who brings the freshness and hope of a new day.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Rosewhisper", detail: "A healer with a voice soft and soothing like rose petals.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Silverfeather", detail: "A healer with a soft glow and a soothing touch.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Oceanbreeze", detail: "A healer who brings calm and serenity like the ocean breeze.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Lightfeather", detail: "A healer with a gentle touch and a radiant presence.", status: false, type: "Female", theme: "Medicine Cat" },
      { name: "Duskpetal", detail: "A healer who offers peace and comfort as night falls.", status: false, type: "Female", theme: "Medicine Cat" },
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
  
  const WarriorCatNameGenerator = () => {
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
  
const bgImage = "/cat.jpg"
const context = "Warrior Cat Name Generator with Meaning – Find Your Perfect Warrior Cat Name"
const Q1 = "Can I use the Warrior Cat Name Generator for other types of feline characters?"
const A1 = "Yes, the Warrior Cat Name Generator is versatile and can be used for any feline character in fantasy settings. Whether you're creating a mystical guardian, a rogue hunter, or a noble clan leader, the generator can produce unique and fitting names for any cat character in your story or game."
const Q2 = "How does the Warrior Cat Name Generator ensure that the names are unique?"
const A2 = "The generator uses a large database of creative and diverse name combinations to ensure originality. By blending various themes, traits, and elements, it guarantees that each generated name is fresh and unique, avoiding duplicates or overused names"
const Q3 = "Can I customize the names based on my character's personality or clan?"
const A3 = "Absolutely! The generator allows you to tailor the names to reflect specific traits, such as bravery, wisdom, or cunning, as well as the character’s role in their clan. Whether your character belongs to a fierce warrior clan or a wise healer group, the tool can create names that align with their personality and clan."
const Q4 = "Can I Customize Names Based on Personality or Clan?"
const A4 = "Absolutely! You can tailor the names by focusing on traits like bravery, wisdom, or cunning. Whether the character belongs to a fierce warrior clan or a peaceful healer group, the generator can create names that align perfectly with their role."
const Q5 = "Is the Warrior Cat Name Generator Free to Use?"
const A5 = "Yes, the Warrior Cat Name Generator is completely free to use with no hidden fees or sign-ups required. You can generate as many names as you need, whenever you want, without any cost. It’s simple, easy, and accessible for anyone."
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
        <a href="/warrior-cat-name-generator" className="hover:underline text-[#343a40]">Warrior Cat Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Warrior Cat Name Generator With Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Warrior Cat Gender</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Warrior Cat Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Leader">Leader Cat</option>
              <option value="Warrior">Warrior Cat</option>
              <option value="Medicine Cat">Mythical Cat</option>
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
            What Are Warrior Cats?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Warrior Cats are fierce, loyal, and wise feline characters from the popular book series. 
            These cats live in clans and follow a strict code of honor. Each cat has a name that reflects their personality, role, or unique traits.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Origins of Warrior Cats in Fantasy
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            The Warrior Cats series, written by Erin Hunter, started in 2003. 
            It introduces readers to a world where wild cats form clans. Their names often symbolize nature, strength, and bravery.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Characteristics of Warrior Cat Names
            </h3>
            <br />  
            <p className="text-left py-[10px] text-[#343a40]">
            Names often combine two elements like "Fire" and "Heart" to create unique identities. 
            Leaders have powerful names, while healers have soothing, wise ones. These names often reflect personality, skills, or appearance.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Warrior Cat Name Generator
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Our Warrior Cat Name Generator is user-friendly and efficient, generating unique names in just a few clicks. Here’s how to get started:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Select the Gender of the Cat <b> (Male, Female)</b>
              </h3>
              <p>
              Choose whether your cat is male or female. This helps tailor the name to match the cat’s personality and role. 
              Male names often sound bold, while female names are elegant or fierce.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select Cat Type <b> (Leader, Warrior, Medicine Cat, etc.)</b>
              </h3>
              <p>
              Pick the role your cat will play in the clan. A leader needs a strong name, while a medicine cat’s name reflects wisdom. 
              Choose from roles like leader, warrior, apprentice, or healer.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b>for Unique Warrior Cat Names
              </h3>
              <p>
              Click the<b> “Generate” </b>button to see a list of names. Each name is crafted to match the selected gender and role, ensuring uniqueness and creativity.
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
              src="warrior-cats-dark-cat1.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="warrior-cat-dark3.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/warrior-cat-name-generator.webp")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Warrior Cat Name Generator
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
          <b> Features of Our Warrior Cat Name Generator </b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Customizable Name Inspirations (Nature, Animals, etc.)
            </h3>
            <p>
            Mix and match themes like forest elements, fierce traits, or celestial bodies. 
            Whether you prefer earthy names inspired by trees and rivers, or more mystical names based on stars and moons, you can create the perfect name for any warrior cat. 
            Imagine combining "Ash" with "Claw" or "Moon" with "Fire" for endless creative possibilities.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Generation for Quick Results
            </h3>
            <p>
            Get names instantly with a single click. No long waits or complex steps—just fast, creative results that keep your inspiration flowing. 
            Whether you're on a tight deadline or need a quick idea, this tool delivers instantly, helping you focus on the rest of your creative process without delay.         
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Name Suggestions for Books, Games, and Role-Playing
            </h3>
            <p>
            Perfect for fantasy novels, online games, or tabletop RPGs. Whether you're designing a character for a Warrior Cats-inspired story or 
            developing a feline hero in your game, this tool provides endless possibilities. 
            It’s versatile enough for writers, game developers, and role-players to find the perfect name for their next adventure.
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
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            User-Friendly Interface for Effortless Creativity
            </h3>
            <p>
            Our tool is designed to be simple and easy to use. 
            With a clean layout and intuitive controls, you can generate the perfect name in seconds, even if you're new to name generators. 
            The easy-to-navigate interface makes it quick to explore different options and find the ideal name without any hassle or confusion.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Male & Female Warrior Cat Names
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Discover well-known names from the Warrior Cats universe. These names capture the essence of bravery, leadership, and wisdom. Use them as inspiration for your own characters.
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              List of Male Warrior Cat Names
              </h3>
              <p>
              <ul>
              <li><b>- Firestar </b>(Represents courage and leadership)</li><br />
              <li><b>- Brambleclaw </b> (Symbolizes strength and loyalty)</li><br />
              <li><b>- Tigerclaw </b> (Known for fierce ambition)</li><br />
              <li><b>- Jayfeather</b> (Reflects wisdom and insight)</li><br />
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              List of Female Warrior Cat Names
              </h3>
              <p>
              <ul>
              <li><b>- Bluestar </b>(Signifies wisdom and nobility)</li><br />
              <li><b>- Sandstorm </b> (Represents strength and resilience)</li><br />
              <li><b>- Leafpool </b> (Known for kindness and healing)</li><br />
              <li><b>- Squirrelflight</b> (Symbolizes courage and determination)</li><br />
              <li><b>- Ivypool </b> (Reflects cunning and bravery)</li><br />
            </ul>
              </p>
              <p className="sm:text-[16px] text-[16px] text-center">
              These names highlight the unique roles and traits of each cat, offering inspiration for your own creations.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="cat-name-generator.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="powerful-warrior-cats.webp"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[80vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Why Use Our Warrior Cat Name Generator?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Discover why this tool is perfect for your next creative project:
          </p>
          <br />
        <hr />
          <br />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Ideal for Writers, Gamers, and Fans of Warrior Cats
              </h3>
              <p>
              Generate names that fit stories, games, or role-play scenarios effortlessly. Whether you're a writer working on your next fantasy novel, 
              a gamer crafting a feline character, or a fan creating your own Warrior Cats-inspired role-playing game, 
              our generator offers the perfect names to bring your cats to life.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Unique and Creative Names with Meaning
              </h3>
              <p>
              Every name comes with a meaning, adding depth and originality to your characters. 
              From names inspired by natural elements like "Leafshade" to those reflecting personal traits such as "Stormpaw," each name has a backstory, 
              ensuring your warrior cat feels fully fleshed out and integral to your story.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Free, Secure, and Easy-to-Use Tool
              </h3>
              <p>
              Use the tool for free without any risk. Generate names quickly and safely. Our generator is completely free to use, 
              with no hidden fees, sign-ups, or personal information required. It’s simple to navigate, 
              making it easy for anyone—whether a first-time user or seasoned creative—to generate the perfect name in seconds, all while keeping your data safe.
              </p>
            </div>  
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="warroir-cat-generator2.jpg"
              alt="Drow Name Generator With Meaning | Dungeons & Dragons Name Generator"
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
          <b> What Makes a Warrior Cat Name Unique?</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Connection to Nature and Traits 
            </h3>
            <p>
            A Warrior Cat name often draws inspiration from elements of nature, such as trees, weather, or animals, symbolizing the cat’s strength, role, or personality. 
            Names like “Thunderclaw” or “Dewpaw” reflect the cat’s environment and characteristics, creating a strong, meaningful identity.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Role and Purpose Within the Clan 
            </h3>
            <p>
            The name a cat receives usually ties into their role in the clan, whether they’re a mighty warrior, a wise medicine cat, or a stealthy hunter. 
            For instance, “Shadowleaf” might indicate a quiet, observant personality, 
            while “Brightfire” may point to a courageous and powerful fighter, directly linking the name to the cat’s purpose.          
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Prefix and Suffix Combinations
            </h3>
            <p>
            Warrior Cat names typically use a combination of a prefix (often a descriptive word) and a suffix (which signifies the cat’s age or role). 
            These combinations ensure each name is unique, reflecting the individual cat’s journey and personal traits, such as <b>“Stonefoot” </b>or <b>“Silverstripe.”</b>
            </p>
          </div>

          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Cultural and Clan Significance
            </h3>
            <p>
            A Warrior Cat’s name carries cultural weight within their clan. It’s more than just an identity—it’s a part of the cat’s legacy. 
            Names are often tied to important events or symbolism, like “Firestar,” which signifies both a cat’s fiery nature and their leadership potential.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Meaning and Legacy
            </h3>
            <p>
            Each name has significance and often reflects the cat’s legacy within the clan. Whether a cat has a name reflecting their bravery, wisdom, or connection to the earth, 
            these names carry meaning beyond just the words themselves. They tell a story, embodying the cat’s essence and impact on the world.
            </p>
          </div>

          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[20px] text-[18px] sm:font-normal font-semibold">
            Effortless Inspiration at Your Fingertips
            </h3>
            <p>
            No more struggling for the right name—our generator is here to spark inspiration whenever you need it. 
            With countless combinations, you’re sure to find a name that fits your vision perfectly.
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

export default WarriorCatNameGenerator;

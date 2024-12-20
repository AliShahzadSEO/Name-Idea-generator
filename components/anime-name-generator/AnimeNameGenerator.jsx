"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Kazuto Drakenshade", detail: "A skilled warrior with the blood of dragons, Kazuto commands the shadows of the draconic world.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Ryuujin Valemont", detail: "A noble from the ancient house of dragons, wielding both fire and ice with unmatched skill.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Haruto Aetherstorm", detail: "Master of elemental storms, Haruto channels the fierce power of the skies into his combat.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Kaito Nightwind", detail: "A quiet and mysterious figure, Kaito can control the winds of the night to his advantage.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Renji Moonblade", detail: "With a blade infused with the essence of the moon, Renji's fighting style is as graceful as it is deadly.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Hiroshi Starfire", detail: "A warrior with the heart of a star, Hiroshi’s fiery spirit lights up the battlefield.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Takeshi Thunderstrike", detail: "A powerful fighter who strikes like a thunderbolt, leaving devastation in his wake.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Seiji Darkflame", detail: "Master of dark magic and flame, Seiji’s powers scorch the earth and incinerate his enemies.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Taiki Frozengale", detail: "A cold-hearted warrior, Taiki controls both the chill of ice and the fury of a gale.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Ichiro Stormbringer", detail: "A wielder of elemental power, Ichiro commands storms with the flick of his hand.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Akira Ironfang", detail: "With the strength of iron and the ferocity of a wolf, Akira’s weapons are as unbreakable as his will.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Shiro Frostshadow", detail: "A master of ice and stealth, Shiro blends into the shadows and strikes with a chilling precision.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Yuuto Fireheart", detail: "Fueled by the fiery passion within him, Yuuto burns with a power that can’t be quenched.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Tetsuya Dragonflare", detail: "The embodiment of dragon fire, Tetsuya fights with the fury and strength of a dragon.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Haru Shadowveil", detail: "A shadowy figure who strikes from the darkness, Haru’s movements are like whispers in the night.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Keisuke Earthshatter", detail: "A warrior whose power can shake the very earth beneath his feet, Keisuke controls the forces of nature.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Yuki Frostbane", detail: "With the ability to freeze anything in his path, Yuki’s cold powers are feared by all who cross him.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Masato Skyblade", detail: "A master swordsman with a blade forged from the skies, Masato strikes with the precision of a falling star.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Raiden Lightstorm", detail: "A warrior who commands both lightning and storms, Raiden’s attacks are fast and unpredictable.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Satoru Darkstorm", detail: "Master of both darkness and storms, Satoru brings devastation with every strike he makes.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Kenzou Emberstrike", detail: "With the power of embers and fire, Kenzou strikes with an intensity that can ignite the battlefield.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Ryota Blackthorn", detail: "A fierce warrior whose thorn-like weapon can pierce through the toughest defenses.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Shinra Darkwind", detail: "A master of dark winds, Shinra’s power blows through enemies like a violent storm.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Naoki Thunderblaze", detail: "A fighter who combines the destructive force of thunder with the ferocity of fire.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Ren Shadowclaw", detail: "A mysterious figure with the power to manipulate shadows and strike with the precision of claws.", status: false, gender: "Male", type: "Fantasy Anime" },
    { name: "Aiko Starfire", detail: "A fiery warrior with the power to summon the stars, Aiko’s strength burns with an unyielding light.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Sakura Frostblaze", detail: "A perfect balance of ice and fire, Sakura’s power can freeze or scorch anything in her path.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Yumi Shadowflame", detail: "A mysterious figure who commands both darkness and fire, Yumi’s attacks leave a trail of destruction.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Emi Darkmoon", detail: "A shadowy warrior whose power stems from the dark moon, Emi can blend into the shadows and strike swiftly.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Hana Stormdancer", detail: "With the grace of a dancer and the fury of a storm, Hana controls the winds and rain with a mere flick of her wrist.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Mei Silverthorn", detail: "A deadly archer with silver-tipped arrows, Mei strikes with precision and speed.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Ayumi Skyfire", detail: "A powerful sorceress whose fiery magic rivals the sun itself, Ayumi controls the skies with her flames.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Natsuki Emberglow", detail: "With a heart as warm as the embers she controls, Natsuki’s fire can illuminate even the darkest places.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Miko Darkwind", detail: "A sorceress of wind and shadows, Miko commands the dark winds to sweep away her foes.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Kiyomi Frostveil", detail: "A master of ice magic, Kiyomi uses the cold to shield and protect, her frost freezing anything in her path.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Kanna Firelily", detail: "With the spirit of a fire lily, Kanna’s power burns with beauty and passion, scorching everything she touches.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Haruka Thunderstrike", detail: "A fierce warrior whose strikes are as powerful as thunder, Haruka brings devastation with every blow.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Akemi Nightflame", detail: "A master of both flame and darkness, Akemi’s fiery power is tempered by the cold shadows of the night.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Reika Stormshade", detail: "A warrior who commands both the power of storms and shadows, Reika strikes from the darkness with unrelenting force.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Keiko Moonshadow", detail: "A graceful sorceress with the power of the moon, Keiko blends into the shadows and wields the power of lunar magic.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Rika Emberstorm", detail: "With a fiery spirit, Rika summons both the heat of embers and the fury of storms to devastate her enemies.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Nami Skyflame", detail: "A fiery warrior who wields the power of the sky and flame, Nami’s attacks are as fierce as a storm.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Yuki Frostwhisper", detail: "A master of ice magic, Yuki’s voice can freeze even the most defiant of hearts, her frosty presence chilling the air.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Miyu Lightbreeze", detail: "With a gentle breeze and a heart of light, Miyu’s magic brings both calm and clarity to any situation.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Chika Earthsong", detail: "A druid who can communicate with the earth, Chika’s magic resonates with the songs of nature, summoning the power of the earth.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Saki Ironthorn", detail: "With unyielding strength, Saki’s magic embodies the solid power of iron, her thorns cutting through any opposition.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Sayuri Blazeheart", detail: "A passionate warrior whose heart burns as brightly as the fiercest flame, Sayuri’s attacks are fueled by her inner fire.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Tomoyo Darkgale", detail: "A master of dark winds, Tomoyo controls the forces of nature with the power of a gale, tearing through her enemies.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Aimi Dragonrider", detail: "A legendary warrior who rides upon the back of a mighty dragon, Aimi’s bond with her beast is unbreakable.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Fumiko Froststrike", detail: "A fierce fighter who strikes with the cold precision of ice, Fumiko’s attacks freeze her enemies in their tracks.", status: false, gender: "Female", type: "Fantasy Anime" },
    { name: "Riku Nightshade", detail: "A mysterious figure whose power is as elusive as the night, Riku controls shadows with ease.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Kaito Stormborn", detail: "A warrior born from the storm, Kaito commands the power of thunder and lightning, unstoppable and fierce.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Sora Dragonheart", detail: "With a heart as strong as a dragon’s, Sora summons the power of ancient dragons to defend the skies.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Yuki Frostflare", detail: "A master of both ice and fire, Yuki’s power can freeze or scorch anything in its path.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Rei Shadowstorm", detail: "A shadowy figure with the ability to conjure storms, Rei is as unpredictable as the winds.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Haru Blazewind", detail: "A warrior with the power of both fire and wind, Haru strikes like a blazing tempest.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Kai Firemoon", detail: "With the power of both fire and the moon, Kai’s magic burns bright and cold in equal measure.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Nao Darkstar", detail: "A sorcerer of the dark arts, Nao’s power comes from the stars and the void between them.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Kiyoshi Thunderflame", detail: "With the force of both thunder and flame, Kiyoshi’s strikes bring destruction with the roar of a storm.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Rin Emberfall", detail: "A fiery soul with the power to summon both embers and falling fire, Rin can ignite the world around them.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Taiki Stormshadow", detail: "A master of the storm’s fury and the darkness of shadows, Taiki strikes fear into the hearts of their enemies.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Asahi Darkflare", detail: "With the power to wield both darkness and flame, Asahi’s attacks burn with shadowed fire.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Kaze Ironwhisper", detail: "A master of both wind and steel, Kaze’s silent presence is like the whisper of iron carried on the wind.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Tsubasa Nightflame", detail: "With the power of night and fire, Tsubasa burns through the darkness, lighting the way with their flames.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Kyo Firestorm", detail: "A warrior who commands the destructive force of fire and storm, Kyo’s attacks are as intense as a blaze.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Yuna Thunderblaze", detail: "With the power of both thunder and fire, Yuna strikes with the fury of a blazing storm.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Akira Dragonwind", detail: "A warrior who commands the winds and the power of dragons, Akira’s strength is unmatched in the skies.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Yuuto Shadowflare", detail: "A sorcerer of both shadow and flame, Yuuto strikes with a flare of fire and darkness combined.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Saki Frostfang", detail: "A fierce warrior whose cold power is as sharp as a fang, Saki’s strikes freeze everything they touch.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Aoi Firewhisper", detail: "A sorcerer whose flames whisper in the wind, Aoi controls fire with quiet grace and deadly intent.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Hikaru Moonstrike", detail: "With the power of the moon and the force of a strike, Hikaru’s attacks are swift and precise.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Naoki Emberveil", detail: "A master of both fire and shadow, Naoki’s presence is like a veil of ember, burning quietly but deadly.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Haruto Skyblade", detail: "With a blade forged in the skies, Haruto strikes with the force of a storm, cutting through anything in their way.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Tetsu Darkfrost", detail: "A warrior of both darkness and ice, Tetsu’s attacks freeze and shadow all in their path.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Ryo Stormstrike", detail: "A master of storms and powerful strikes, Ryo’s power is like a thunderous fury unleashed upon their enemies.", status: false, gender: "Unisex", type: "Fantasy Anime" },
  { name: "Ryo Kurogami", detail: "A fierce warrior whose blade is as dark as his soul, Ryo strikes down all who oppose him.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Satoshi Viperstrike", detail: "With the deadly precision of a viper, Satoshi's strikes are swift and lethal.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Takumi Blazeheart", detail: "A fighter with a heart of fire, Takumi channels his passion into devastating, fiery strikes.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Kaito Ironfist", detail: "With fists as hard as iron, Kaito can crush his enemies with a single blow.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Ryuu Katana", detail: "A skilled swordsman whose katana cuts through anything in its path, Ryuu is a master of the blade.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Tetsuo Stormrage", detail: "Tetsuo’s rage fuels the storm, making him an unstoppable force in battle.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Keito Shadowstrike", detail: "A master of stealth and shadow, Keito’s strikes are swift and silent, leaving no trace.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Isamu Fangblade", detail: "With the sharpness of a fang and the precision of a blade, Isamu is a deadly force in combat.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Haruto Wildfire", detail: "Haruto’s power is like wildfire, spreading uncontrollably and consuming everything in its path.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Kazuki Thunderfist", detail: "A warrior whose fists are as powerful as thunder, Kazuki strikes with the fury of a storm.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Hiroshi Blackhawk", detail: "With the precision and strength of a hawk, Hiroshi strikes down his enemies from above.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Jiro Dragonfire", detail: "A fighter who channels the power of dragons, Jiro's flames scorch everything they touch.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Daiki Ironstorm", detail: "Daiki combines the unyielding strength of iron with the destructive force of a storm.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Kenzou Nightblaze", detail: "A warrior whose flames burn brightest in the darkness, Kenzou fights with the fire of the night.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Renji Bladefury", detail: "With the fury of a blade in his hand, Renji strikes down all who dare oppose him.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Yuji Thunderstorm", detail: "Yuji’s power is like a thunderstorm, wild, unpredictable, and unstoppable.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Shun Darkblade", detail: "A master of the dark blade, Shun’s strikes are swift and leave a trail of destruction.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Haruki Stormstrike", detail: "With the power of a storm at his back, Haruki’s strikes are as powerful and swift as thunder.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Akira Wolfstrike", detail: "Akira strikes like a wolf on the hunt, deadly and precise with each move.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Yuto Vortexblade", detail: "A master of wind and blade, Yuto can create vortexes with his strikes, tearing through enemies.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Kaoru Thunderclash", detail: "With the intensity of thunder, Kaoru’s power crashes down upon his enemies with devastating force.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Shin Katanaheart", detail: "Shin’s katana is an extension of his heart, each strike a reflection of his inner strength and resolve.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Kenji Blazeclaw", detail: "Kenji’s claws are infused with the fury of fire, allowing him to tear through his enemies like a wildfire.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Takuya Shadowblade", detail: "A master of shadow and steel, Takuya strikes from the darkness, swift and unseen.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Taiki Fireclash", detail: "With the power of fire and the force of a clash, Taiki’s attacks leave nothing but destruction in their wake.", status: false, gender: "Male", type: "Action Anime" },
  { name: "Saki Thunderstrike", detail: "A fierce fighter whose strength rivals a thunderstorm, Saki strikes with unrelenting power.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Aiko Bladeheart", detail: "A warrior whose heart beats with the rhythm of the blade, Aiko’s strikes are swift and precise.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Kimi Wildfire", detail: "Kimi’s power is like wildfire, uncontrollable and destructive, burning everything in her path.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Sakura Shadowstorm", detail: "A fighter who can summon storms from the shadows, Sakura is a force to be reckoned with.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Mei Feralclaw", detail: "With the instincts of a wild beast, Mei’s claws are sharp and deadly in battle.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Natsuki Flamefury", detail: "Natsuki’s fury is fueled by fire, unleashing fiery wrath upon anyone who crosses her.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Haruka Ironfist", detail: "With fists as strong as iron, Haruka can shatter anything in her path with one punch.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Reika Darkshadow", detail: "Reika strikes from the shadows, her every move a deadly whisper in the night.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Miku Stormblaze", detail: "A warrior whose flames burn as fiercely as a storm, Miku is a force of nature in combat.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Ayaka Viperstrike", detail: "With the precision and speed of a viper, Ayaka’s strikes are deadly and swift.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Yui Flamefury", detail: "Yui’s fury is like an uncontrollable flame, burning everything it touches with intense heat.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Yumi Blackthorn", detail: "Yumi’s blade is as dark as her soul, cutting through her enemies with a swift and merciless strike.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Nami Nightstrike", detail: "Nami strikes from the darkness, her attacks swift and silent, leaving no trace of her presence.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Fumiko Steelstorm", detail: "With the strength of steel and the fury of a storm, Fumiko is a relentless force in battle.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Emiko Fireclash", detail: "Emiko’s attacks collide like fire and steel, creating explosions of power wherever she strikes.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Chika Thunderfang", detail: "With the power of thunder and the ferocity of a fang, Chika is a formidable warrior.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Hana Darkstrike", detail: "Hana’s strikes are as dark and unforgiving as the night, swift and merciless.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Akemi Stormfang", detail: "Akemi combines the fury of a storm with the deadly precision of a fang, making her an unstoppable force.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Haru Windblade", detail: "A swift and agile fighter, Haru’s blades cut through the air like the wind, leaving no room for escape.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Rika Ironheart", detail: "With a heart as strong as iron, Rika’s resolve is unshakeable in the face of battle.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Sayuri Flameblade", detail: "Sayuri wields a blade that burns like fire, her strikes leaving a trail of flames in their wake.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Keiko Thunderstrike", detail: "Keiko’s strikes are as loud and powerful as thunder, shaking the ground beneath her enemies.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Miyu Darkfire", detail: "Miyu’s power is the fire of the abyss, dark and destructive, leaving nothing behind but ashes.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Tomoyo Shadowfury", detail: "With the fury of a storm and the stealth of a shadow, Tomoyo strikes with devastating precision.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Kyoko Blazeheart", detail: "Kyoko fights with the burning passion of a flame, her heart and soul ignited by the fires of battle.", status: false, gender: "Female", type: "Action Anime" },
  { name: "Riku Blazeheart", detail: "Riku’s heart burns with the fury of a thousand flames, his strikes as fierce as fire itself.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Kaito Shadowstorm", detail: "Kaito moves like a shadow in a storm, his attacks swift and unpredictable.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Sora Thunderstrike", detail: "With the power of a thunderstorm, Sora strikes with electrifying force, shaking the ground beneath them.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Rei Darkflame", detail: "Rei’s flames burn dark and fierce, consuming everything in their path with a sinister power.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Nao Wildfire", detail: "Nao’s power spreads like wildfire, uncontrollable and destructive, overwhelming any foe.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Kyo Stormstrike", detail: "Kyo strikes like a storm, powerful and relentless, leaving destruction in his wake.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Tsubasa Fireclash", detail: "Tsubasa’s fiery strikes clash with the force of a volcano, burning through all in their path.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Haruto Ironstrike", detail: "With strength like iron, Haruto’s strikes crush all obstacles in his way, leaving nothing but devastation.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Yuki Blackthorn", detail: "Yuki’s dark power cuts through the air like a sharp thorn, silent but deadly.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Yuuto Nightblade", detail: "Yuuto’s blade strikes from the shadows, swift and deadly, with the darkness as his ally.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Aoi Darkfire", detail: "Aoi wields dark flames, their power as unpredictable and destructive as the night.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Ryo Blazeclaw", detail: "Ryo’s claws burn like fire, tearing through anything in their path with fierce strength.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Kai Stormfury", detail: "Kai’s fury is like a storm, powerful and uncontrollable, destroying everything in its path.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Taiki Ironheart", detail: "Taiki’s heart is as strong as iron, making them unbreakable in the heat of battle.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Hikaru Thunderclash", detail: "Hikaru strikes with the power of thunder, causing the heavens themselves to tremble with each blow.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Asahi Flamefury", detail: "Asahi’s fury is fueled by flames, unleashing a fiery wrath upon their enemies.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Kiyoshi Darkstorm", detail: "Kiyoshi summons storms from the dark, their fury unmatched by any natural force.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Tetsu Viperstrike", detail: "Tetsu’s strikes are swift and precise, like the bite of a viper, lethal and deadly.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Akira Windblade", detail: "Akira’s blade cuts through the air like a powerful wind, unstoppable and sharp.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Kazuya Nightstrike", detail: "Kazuya strikes from the darkness, his attacks swift and silent, leaving no trace behind.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Yuki Thunderfist", detail: "Yuki’s fists strike with the power of thunder, each blow resonating with immense force.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Saki Firestrike", detail: "Saki’s strikes ignite with fiery power, her fists and feet burning through all resistance.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Shun Shadowfury", detail: "Shun’s fury is hidden in the shadows, his attacks swift and deadly, like a phantom in the night.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Naoki Stormheart", detail: "Naoki’s heart beats with the fury of a storm, their strength unmatched in the face of battle.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Kaito Nightblaze", detail: "Kaito’s flames burn with the darkness of night, blending fire and shadow into an unstoppable force.", status: false, gender: "Unisex", type: "Action Anime" },
  { name: "Haruto Skyheart", detail: "Haruto’s love is as vast as the sky, endless and free, always reaching for the stars.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Yuuto Nightlove", detail: "Yuuto’s love is deep as the night, filled with mystery and passion, embracing all who seek it.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Kaito Dreamer", detail: "Kaito lives in the world of dreams, where love is pure and eternal, a connection of souls.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Renji Moonkiss", detail: "Renji’s kiss is like the moonlight, soft, serene, and full of longing under the night sky.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Hiroshi Everflame", detail: "Hiroshi’s love burns like an everlasting flame, passionate and unwavering through time.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Kazuto Heartstring", detail: "Kazuto’s heart sings with love, each note resonating with the deepest emotions of affection.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Tetsuya Soulfire", detail: "Tetsuya’s love is a fire that burns from the soul, fierce and pure, illuminating everything in its path.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Seiji Trueflame", detail: "Seiji’s love is the flame of truth, burning brightly in the face of doubt and always guiding the way.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Takumi Blossomheart", detail: "Takumi’s love blossoms like a flower, gentle and pure, opening its petals to embrace another’s heart.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Shinra Heartsong", detail: "Shinra’s heart sings a song of love, a melody that echoes across time and space, reaching deep into the soul.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Ryu Stormlight", detail: "Ryu’s love is like a storm, powerful and passionate, yet gentle enough to light up the darkest night.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Satoru Pureheart", detail: "Satoru’s heart is pure and full of love, unwavering in its devotion and kindness.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Ryota Sunlight", detail: "Ryota’s love is as warm and radiant as sunlight, brightening the world and nurturing those he holds dear.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Ren Crimsonlove", detail: "Ren’s love is deep and passionate like crimson, full of intensity and warmth, never fading away.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Raiden Starflame", detail: "Raiden’s love burns like the stars, constant and enduring, lighting up the dark corners of the universe.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Kenzou Moonlight", detail: "Kenzou’s love is as soft and illuminating as the moonlight, calm yet deeply profound in its reach.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Daiki Heartflame", detail: "Daiki’s love burns like a flame in his heart, lighting the way for his most cherished relationships.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Ryuu Dreamblade", detail: "Ryuu’s love is sharp like a blade, cutting through the confusion and leading the heart to clarity and devotion.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Yuji Soulstone", detail: "Yuji’s love is like a precious stone, strong and eternal, with a depth that speaks to the soul.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Taiki Everstorm", detail: "Taiki’s love is a storm, unpredictable but ever-present, sweeping through hearts with intensity.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Kaito Heartwhisper", detail: "Kaito’s love whispers gently to the heart, soothing and tender, like a secret shared between two souls.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Shin Moonshadow", detail: "Shin’s love moves silently in the moonshadow, subtle but strong, a bond unbroken in the night.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Tetsu Dreamstrike", detail: "Tetsu’s love strikes like a dream, a soft, elusive force that captures the heart and never lets go.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Akira Lightheart", detail: "Akira’s heart glows with the warmth of love, shining brightly for those who need it the most.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Yuki Lovewind", detail: "Yuki’s love flows like the wind, gentle and constant, always present but never overbearing.", status: false, gender: "Male", type: "Romantic Anime" },
  { name: "Aiko Starbloom", detail: "Aiko’s love blossoms like a star, shining brightly in the night, radiating warmth and light.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Sakura Heartblossom", detail: "Sakura’s love is like the blossoming of a flower, tender and pure, unfolding one petal at a time.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Yumi Lightkiss", detail: "Yumi’s kiss is soft and sweet, a moment of light that fills the heart with warmth and joy.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Emi Dreamer", detail: "Emi’s heart dreams of love, a world full of tenderness and hope, where every wish is possible.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Hana Heartflame", detail: "Hana’s love burns with the passion of a flame, unyielding and bright, forever igniting the heart.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Mei Crimsonblossom", detail: "Mei’s love blossoms with intensity, like a crimson flower in full bloom, rich with emotion.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Akemi Purelove", detail: "Akemi’s love is pure and true, a bond unbreakable, reflecting her sincere heart and spirit.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Ayumi Dreamlight", detail: "Ayumi’s love is like a soft, glowing light, guiding the heart through the dreamlike world of affection.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Keiko Heartstone", detail: "Keiko’s heart is as strong as stone, yet it is soft in its love, unwavering and steady through all trials.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Natsuki Starlove", detail: "Natsuki’s love is as vast and endless as the stars, shining brightly even in the darkest of nights.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Miko Everkiss", detail: "Miko’s kiss is eternal, a promise of forever, filled with the sweetness of everlasting affection.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Chika Moonstone", detail: "Chika’s love is as serene and enchanting as the moonstone, soft yet powerful, a reflection of the heart’s quiet beauty.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Haruka Soulflame", detail: "Haruka’s love burns like the fire of the soul, passionate and fierce, yet deeply nurturing.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Rika Trueblossom", detail: "Rika’s love is true and pure, a blossom of the heart that grows stronger with each passing moment.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Nami Heartstrike", detail: "Nami’s love strikes with the force of a wave, powerful and overwhelming, sweeping everything in its path.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Fumiko Dreamwhisper", detail: "Fumiko’s love is a whisper in the dreamscape, soft and gentle, caressing the heart with a sense of peace.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Sayuri Moonshadow", detail: "Sayuri’s love is quiet and deep like the moon’s shadow, subtle but always present, guiding through the dark.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Yuki Softkiss", detail: "Yuki’s kiss is gentle and soft, a sweet touch that lingers, filling the heart with warmth and affection.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Reika Heartsong", detail: "Reika’s love is a song, sweet and harmonious, resonating deeply within the heart of all who hear it.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Kyoko Sunflame", detail: "Kyoko’s love shines as brightly as the sun, radiating warmth, energy, and endless devotion.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Aimi Starrydream", detail: "Aimi’s love is like a starry dream, sparkling with infinite possibilities and dreams waiting to come true.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Rika Nightbloom", detail: "Rika’s love blooms quietly in the night, mysterious and beautiful, flourishing in the moon’s light.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Sakura Everblossom", detail: "Sakura’s love is ever-blooming, always fresh and full of life, spreading joy wherever it touches.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Mei Trueheart", detail: "Mei’s love is true and steadfast, an unwavering force of loyalty and passion.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Hana Heartstone", detail: "Hana’s heart is as solid as stone, but filled with love that nurtures and protects all who are close.", status: false, gender: "Female", type: "Romantic Anime" },
  { name: "Sora Heartbloom", detail: "Sora’s love blooms like a heart in full bloom, filled with the beauty of affection and hope.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Riku Moonlight", detail: "Riku’s love shines as bright as moonlight, soft yet powerful, lighting up even the darkest moments.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Kai Everflame", detail: "Kai’s love burns forever, like an eternal flame, bright and unyielding through all time.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Kaito Dreamkiss", detail: "Kaito’s kiss is like a dream, soft, tender, and full of love, lingering in the heart long after.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Rei Heartwhisper", detail: "Rei’s love speaks softly, like a whisper, carrying with it a message of deep and everlasting affection.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Yuuto Lightheart", detail: "Yuuto’s heart glows with a gentle light, radiating warmth and kindness, spreading love wherever it goes.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Asahi Purebloom", detail: "Asahi’s love is pure and radiant, like a flower blooming under the sun, full of life and beauty.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Tetsu Starlove", detail: "Tetsu’s love is as vast and timeless as the stars, constant and bright, lighting the way through any darkness.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Haruto Moonstone", detail: "Haruto’s love is as mysterious and calming as the moonstone, glowing softly in the night.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Aoi Soulkiss", detail: "Aoi’s kiss touches the soul, a deep connection that binds hearts together with a single, soft touch.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Kiyoshi Crimsonflame", detail: "Kiyoshi’s love burns with the intensity of a crimson flame, fierce and passionate, never wavering.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Tsubasa Heartwind", detail: "Tsubasa’s love is like the wind, sweeping through the heart with ease, gentle yet undeniable.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Hikaru Dreamflame", detail: "Hikaru’s love burns like a flame of dreams, igniting the heart with hope and passion.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Kaze Lightstorm", detail: "Kaze’s love is a storm of light, powerful yet soothing, sweeping through the soul with warmth and joy.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Yuki Truebloom", detail: "Yuki’s love blossoms with truth, growing deeply rooted in trust and deep affection.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Taiki Soulblossom", detail: "Taiki’s love blooms from the soul, pure and eternal, blossoming with every beat of the heart.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Akira Heartsong", detail: "Akira’s love is a song of the heart, sweet and beautiful, resonating with every note of affection.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Naoki Moonwhisper", detail: "Naoki’s love is a quiet whisper, like the moon’s glow, subtle yet illuminating in its gentle power.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Shin Trueheart", detail: "Shin’s love is true and pure, a heart unbreakable and full of sincere affection.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Ryo Everblossom", detail: "Ryo’s love blossoms forever, like a flower that never fades, always fresh and full of promise.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Kyo Loveflame", detail: "Kyo’s love burns with the warmth of a flame, ever-lasting and powerful, consuming everything in its path.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Yuna Dreamstrike", detail: "Yuna’s love strikes with the force of a dream, leaving an unforgettable impression on the heart.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Saki Heartshadow", detail: "Saki’s love is as mysterious as a shadow, deep and captivating, never quite fully seen but always felt.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Kaito Softwind", detail: "Kaito’s love is a soft breeze, caressing the heart with gentle affection and bringing peace to the soul.", status: false, gender: "Unisex", type: "Romantic Anime" },
  { name: "Haru Starflame", detail: "Haru’s love burns like a star, radiant and brilliant, lighting up the darkest skies with its warmth.", status: false, gender: "Unisex", type: "Romantic Anime" }
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

const AnimeNameGenerator = () => {
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
  
const bgImage = "/anime-name-generator.jpg"
const context = "Anime Name Generator with Meaning Tool"
const Q1 = "What is an Anime Name Generator?"
const A1 = "It is an online tool that creates unique and meaningful names inspired by anime culture. The names are designed to reflect themes, traits, and aesthetics commonly found in anime characters"

const Q2 = "How does the Anime Name Generator work?"
const A2 = "The tool uses your selected preferences, such as gender and category, to instantly generate a list of anime-inspired names. Each name is tailored to align with the style or theme you choose."

const Q3 = "Can I customize the type of names generated?"
const A3 = "Yes, the generator allows you to customize names based on gender (male, female, unisex) and category (traditional, fantasy, romantic, action, etc.). This makes it easy to find a name that suits your character or project."

const Q4 = "Are the generated names meaningful?"
const A4 = "Every name comes with a meaning, often rooted in Japanese language or culture. The names are carefully curated to reflect traits or symbolism that fit anime storytelling."

const Q5 = "Who can use this Anime Name Generator?"
const A5 = "It is perfect for anime fans, creators, writers, and anyone looking to name characters, avatars, or projects. Whether you’re creating a manga, game, or personal story, this tool makes the process simple and fun."
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
        <a href="/anime-name-generator" className="hover:underline text-[#343a40]">Anime Name Generator</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Anime Name Generator With Meaning Tool
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
            <p className="text-center text-[#343a40]">Types of Anime Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Fantasy Anime">Fantasy</option>
              <option value="Action Anime">Action</option>
              <option value="Romantic Anime">Romantic</option>
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
            What is an Anime Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            It is a one-stop tool for finding unique and meaningful anime-inspired names. 
            Designed for anime fans, this generator offers a wide selection of names that capture the spirit of your favorite characters, genres, or storylines. 
            Whether you’re looking to name a character for a project or just exploring for fun, this tool has you covered.
            <br />
            Here's what makes this tool special: every name comes with context and meaning, giving you a deeper connection to the anime culture. 
            The thoughtfully crafted names are perfect for personal use or creative endeavors.
            </p>
            
          </div>
        </div>
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use Our Anime Name Generator?
            </h2>
            <hr />
            <br />
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Save Time and Effort in Name Creation
            </h3>
            <p className="text-left mt-[10px]  py-[10px] text-[#343a40]">
            It is the go-to solution for anime creators and fans who want meaningful names without spending hours brainstorming. 
            This tool offers instant results, eliminating the need for tedious searching. 
            You must try it to experience a faster, more efficient way to find names that match your creative vision.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Discover Creative and Relevant Names
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            Unique anime names bring characters to life by aligning with themes, personalities, and storylines. This generator ensures every name feels relevant and purposeful.
            It is the perfect way to avoid generic options and add depth to your anime projects.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Make Your Characters Stand Out
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            A well-crafted name sets your character apart in any story or project. This tool provides names that resonate with anime aesthetics and cultural significance.
            You can explore a variety of names that make your characters memorable and unique.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use Our Anime Name Generator Tool
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose an Anime Gender <b>  (Male, Female, Unisex) </b>
              </h3>
              <p>
              It all starts by selecting the gender of your desired anime name. This step ensures that the generated names match the tone and personality you want to convey.
              You must decide if you need a strong male lead, a graceful female name, or a neutral unisex name for flexibility.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select an Anime Type <b>(Fantasy, Action, Romantic)</b>
              </h3>
              <p>
              Choosing the right category helps narrow down names that suit specific themes. 
              Anime names reflect genres, and selecting the right type ensures your choice matches the character’s story.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b> for Unique Names
              </h3>
              <p>
              It is time to let the tool work its magic. The generator instantly provides a curated list of names based on your preferences.
              Results appear in seconds, giving you a variety of meaningful options to explore.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Pick Your Perfect Anime Name
              </h3>
              <p>
              Selecting the right name becomes easy when you see all the creative possibilities. Each name feels unique and personalized.
              Your perfect anime name is just a click away. Once chosen, you can save or use it for your project immediately.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="male-anime-name-generator.jpg"
              alt="Anime Name Generator with Meaning | Unique Anime Names for Characters"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="female-anime-name-generator.jpg"
              alt="Anime Name Generator with Meaning | Unique Anime Names for Characters"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/bc04ec590a087dcc093f37c631b5d6ea.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Anime Name Generator
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
          <b>Unique Features of the Anime Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold">
          <b>  Meaningful Names Inspired by Anime Culture</b>
            </h3>
            <p>
            Every name tells a story, capturing the essence of anime's rich cultural heritage. The names reflect emotions, mythology, and character arcs.
            You must choose this tool for names that feel deeply connected to anime traditions and storytelling.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>   Customizable Name Categories and Styles</b> 
            </h3>
            <p>
            Customization allows you to tailor names to your creative needs. Whether you prefer fantasy or modern styles, the options are endless.
            It is easy to find names that align with your vision, ensuring they feel personal and unique.          
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b> Instant and Creative Results</b>   
          </h3>
            <p>
            You must enjoy how quickly this tool delivers high-quality results. No waiting, no complications—just instant access to names that spark creativity.
            Each name is designed to resonate with anime fans, ensuring an authentic experience.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Versatile for Multiple Applications</b>   
            </h3>
            <p>
            It becomes your go-to tool for naming characters, projects, or even gaming avatars. Its flexibility makes it perfect for various creative endeavors.
            You can rely on it to inspire ideas and bring your characters to life.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Anime Gender and Category Options</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
           <b> By Gender</b>
            </h3>
            <p> 
             <b>Male Anime Names:</b>
             You must explore strong and heroic male names. 
             Options like Akira (Bright), Hiroshi (Generous), and Tatsuya (Dragon) convey boldness and courage. These names are perfect for powerful and inspiring characters.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Female Anime Names: </b>
            Elegant and meaningful, these names reflect grace and beauty. 
            Choices such as Sakura (Cherry Blossom), Yuki (Snow), and Aiko (Beloved) capture the charm of classic anime characters.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Unisex Anime Names: </b>
            Versatile and inclusive, unisex names like Haru (Spring), Ren (Lotus), and Kaoru (Fragrance) suit characters with unique or fluid identities. These names offer flexibility and creativity.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
          <b>  By Category</b>
            </h3>
            <p> <b>Fantasy Anime Names: </b>
            You must embrace the magic of fantasy names like Kaito (Ocean), Miyuki (Beautiful Snow), or Daichi (Great Earth). These names evoke wonder and adventurous themes.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Action-Oriented Anime Names: </b>
            Bold and energetic names like Tatsuya (Dragon), Haruto (Sunlight), and Rin (Dignified) bring intensity and dynamism to action-packed characters.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Romantic Anime Names: </b>
            Charming and emotional names such as Sayuri (Small Lily), Hikari (Light), and Aiko (Beloved) add a touch of elegance and warmth to romantic storylines.
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
            Why Our Anime Name Generator Stands Out
            </h2>
            <hr />
            <br />
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Meaningful Anime Names
            </h3>
            <p className="text-left py-[5px] text-[#343a40]">
            Every name offers depth and context, reflecting the character’s role and personality. It feels like stepping into the world of anime.
            You must experience the value of names rooted in cultural significance and creativity.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Easy-to-Use and Customizable Features
            </h3>
            <br />  
            <p className="text-left py-[5px] text-[#343a40]">
            The tool simplifies the process of name generation. Customization options make it easy for users to explore diverse possibilities.
            It is perfect for anime fans who want names that align with their preferences without any hassle.
            </p>
            <h3 className="text-left text-[26px] font-medium text-[#343a40] pb-[]">
            Tailored for Anime Fans and Creators
            </h3>
            <br />  
            <p className="text-left py-[5px] text-[#343a40]">
            Creators and fans alike can use this tool to enhance their projects. The names reflect the passion and creativity that define anime culture.
            It becomes an essential resource for bringing your characters to life with authentic names.
            </p>
           
            <br />
            <hr />
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[60vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          List of Anime Name Types by Gender and Category
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Male Anime Names
              </h3>
              <p><b>Fantasy Names</b>
              <ul>
              <li><b>- Ryuto </b>(Dragon, Symbolizes power and wisdom)</li>
              <li><b>- Kenshiro </b> (Strong and courageous, with an aura of ancient battle prowess)</li>
              <li><b>- Daichi </b> (Great Earth, representing strength, stability, and authority)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Action Names</b>
              <ul>
              <li><b>- Tatsuya </b>(Dragon, reflecting determination and unyielding strength)</li>
              <li><b>- Raiden </b> (Thunder and lightning, symbolizing power and speed)</li>
              <li><b>- Ryo </b> (Good, man, symbolizing heroism and leadership in action)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Romantic Names</b>
              <ul>
              <li><b>- Haruto </b>(Sunlight, representing hope, warmth, and love)</li>
              <li><b>- Souta </b> (Peaceful, calm, symbolizing romantic tranquility)</li>
              <li><b>- Yuna </b> (Gentle, kind, embodying pure and affectionate love)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="anime-boy-aesthetic.avif"
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
              Female Anime Names
              </h3>
              <p>
              <b>Fantasy Names</b>
              <ul>
              <li><b>- Amaya </b>(Night rain, symbolizing serenity and mystery)</li>
              <li><b>- Kiyomi </b> (Pure beauty, representing elegance and purity)</li>
              <li><b>- Rei </b> (Soul, reflecting grace and spiritual depth)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Action Names</b>
              <ul>
              <li><b>- Aiko </b>(Beloved, reflecting a warrior’s heart with gentle strength)</li>
              <li><b>- Mikasa </b> (Strong, capable, representing independence and fierce loyalty)</li>
              <li><b>- Rika </b> (Truth, symbolizing strength with a sense of responsibility)</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Romantic Names</b>
              <ul>
              <li><b>- Sakura </b>(Cherry blossom, symbolizing delicate beauty and love)</li>
              <li><b>- Yuki </b> (Snow, representing purity and serene affection)</li>
              <li><b>- Hana </b> (Flower, symbolizing feminine beauty and grace in romance)</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="anime-girl-umbrella-anime.jpg"
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

export default AnimeNameGenerator;

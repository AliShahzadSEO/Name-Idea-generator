"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Alden Oakleaf", detail: "A druid with a deep connection to the ancient oak, known for his wisdom and ability to commune with nature.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Caelan Greenbark", detail: "A druid whose affinity with the green forests and trees allows him to speak to the heart of the woods.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Thorne Ashwood", detail: "A druid whose bond with ash trees enables him to create powerful natural magic and commands the winds of the forest.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Eamon Mossheart", detail: "A druid whose heart beats in rhythm with the moss and forests, known for his wisdom in earth-based magic.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Brannoc Stonebranch", detail: "A druid who channels the power of stone and wood, respected for his strength and connection to the earth.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Fintan Ironwood", detail: "A druid with an affinity for the strength of ironwood, known for his durability and protective nature.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Finnian Windwhisper", detail: "A druid who listens to the whispers of the wind and the secrets carried by the breeze, known for his connection to air and flight.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Oisin Thundershade", detail: "A druid whose presence is marked by the sound of thunder and the shade of powerful storms, feared and revered for his elemental mastery.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Cormac Fernroot", detail: "A druid whose roots are entwined with the ferns and the forest floor, adept at healing and drawing strength from the earth.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Leif Sunshadow", detail: "A druid who thrives under the warmth of the sun, yet is shrouded in the mystery of shadow, balancing light and dark.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Conall Wildbloom", detail: "A druid who nurtures wild plants and flowers, known for his ability to heal and bring life back to the land.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Daegan Riversong", detail: "A druid with a deep affinity for water and rivers, able to speak to the flow of the waters and the creatures within.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Aidan Driftwood", detail: "A druid connected to the driftwood of the rivers, representing the cycle of life, death, and rebirth in nature.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Teague Thornhill", detail: "A druid whose connection to thorny bushes and hills gives him a sharp sense of survival and protection.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Soren Briarstone", detail: "A druid who blends his powers with the harshness of briar and stone, known for his resilience and protection of the wilds.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Rian Fernfrost", detail: "A druid whose powers are drawn from the frost that blankets ferns in winter, known for his ability to endure and heal in harsh climates.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Lorcan Stormleaf", detail: "A druid whose presence brings both storms and growth, known for his dual nature in controlling both the winds and plant life.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Seanan Wildbranch", detail: "A druid who is one with the wild branches of trees, a protector of forests and an expert in the magic of growth and nature.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Baird Greenbloom", detail: "A druid whose connection to blooming green fields allows him to bring nature back to life and heal the land.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Ronan Dawnbreeze", detail: "A druid who commands the winds at dawn, bringing fresh life and hope with each new day.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Ciaran Oakheart", detail: "A druid whose heart beats with the strength of an oak, deeply connected to the trees and the earth’s natural power.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Niall Bramblebrook", detail: "A druid who thrives in bramble-filled forests and serene brooks, known for his skills in healing and nature-based magic.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Eoghan Silverthorn", detail: "A druid whose affinity for silverthorn plants gives him power to protect and heal, feared for his ability to defend the wilds.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Ailbhe Cedarleaf", detail: "A druid who draws his strength from cedar trees, revered for his wisdom and longevity, and his deep bond with the forest.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Finlay Stonebloom", detail: "A druid who balances the hard stone and the delicate bloom of flowers, known for his peaceful yet formidable nature.", status: false, gender: "Male", type: "Traditional Druid" },
    { name: "Maeve Windbloom", detail: "A druid whose connection to the wind brings new life and understanding, known for her grace and foresight.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Aislinn Fernshade", detail: "A druid who thrives in the shadows of ferns, using her deep connection to nature to bring healing and balance.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Orla Sunfern", detail: "A druid whose powers are tied to the sun and the vitality of ferns, bringing light and life to the earth.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Isolde Thistlebranch", detail: "A druid connected to thistles and branches, known for her resilience and protective nature over the wilds.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Brigid Mistwood", detail: "A druid whose affinity with mist and wood allows her to command the fogs and protect the sacred forests.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Rhiannon Thornbloom", detail: "A druid whose strength lies in her control over thorns and blooms, bringing both protection and growth.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Eira Moonbreeze", detail: "A druid whose magic is linked to the moon and the soft winds that accompany it, known for her serene power.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Sinead Silverfern", detail: "A druid who nurtures the silvery ferns of the wild, revered for her wisdom and deep understanding of nature.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Enid Stormroot", detail: "A druid whose roots are grounded in the power of storms, wielding both the forces of nature and the calm that follows.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Niamh Greenstone", detail: "A druid whose touch turns stones green, revered for her ability to heal and rejuvenate the land.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Ciarra Sunbranch", detail: "A druid whose powers are aligned with the sun and its influence on the trees, known for bringing warmth and growth.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Aoife Wildwood", detail: "A druid with a deep connection to the untamed wilderness, channeling her powers through the wilds to protect nature.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Fionnuala Leafwhisper", detail: "A druid who can hear the whispers of leaves, using her magic to communicate with the trees and protect the forest.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Morwenna Dawnroot", detail: "A druid whose power emerges with the dawn, linked to the roots of the earth and the renewal of life.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Saoirse Briarbloom", detail: "A druid who flourishes in the brambles and blooms of the wild, a guardian of the land’s untamed beauty.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Alayna Mossbreeze", detail: "A druid whose connection to the moss-covered earth and the winds that blow through it gives her power over growth and change.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Clodagh Pinebloom", detail: "A druid who nurtures both pines and flowers, balancing the harshness of the pine with the gentleness of blooms.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Evanna Snowthorn", detail: "A druid whose affinity for snow and thorns brings her an icy grace, using the cold to protect and preserve nature.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Taryn Fernwind", detail: "A druid whose powers are rooted in the fern-covered forests and the winds that flow through them, known for her swift movements.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Aisling Stormbloom", detail: "A druid whose magic aligns with both the fury of storms and the delicate blooming of flowers, using both forces to heal and protect.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Emer Greenleaf", detail: "A druid whose connection to green leaves and growing things allows her to bring life back to barren lands.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Nessa Thundershade", detail: "A druid whose magic harnesses the power of thunder and the shade of ancient trees, bringing balance to the storm.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Lorna Sunroot", detail: "A druid whose magic is centered around the roots of plants and the power of sunlight, known for her radiant energy.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Arwen Windflower", detail: "A druid whose bond with the wind and flowers allows her to use both to communicate with nature and heal the land.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Branna Frostbloom", detail: "A druid whose powers are tied to the frost and the delicate blooms of winter, known for her ability to survive harsh conditions.", status: false, gender: "Female", type: "Traditional Druid" },
    { name: "Rowan Thistlebloom", detail: "A druid whose powers are entwined with thistles and blooms, bringing both protection and growth to the land.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Sage Oakstone", detail: "A druid whose deep wisdom connects to the ancient oaks and stones, using their strength and endurance to guide the way.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Briar Windwhisper", detail: "A druid whose bond with the briars and winds allows them to carry secrets and speak with the forces of nature.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Ashen Dawnroot", detail: "A druid whose magic draws from the roots of the earth and the first light of dawn, bringing new beginnings and healing.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Fallon Fernbrook", detail: "A druid whose connection to ferns and streams brings balance and tranquility to the wilds they protect.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Quinn Greenleaf", detail: "A druid whose affinity with green leaves and plant life connects them to nature’s power of renewal.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Dakota Silverbranch", detail: "A druid with a deep connection to silver branches, using them to communicate with the spirits of nature and protect the land.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Sky Briarwood", detail: "A druid whose bond with the sky and briar-covered woods allows them to navigate the winds of change.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Ember Oakshadow", detail: "A druid whose connection to oaks and the fire within their hearts enables them to bring warmth and growth even in the coldest of winters.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Morgan Mistflower", detail: "A druid who flourishes in the misty meadows, their magic helping the earth bloom with life and protect its wild spaces.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Robin Wildwind", detail: "A druid whose affinity with the winds and the untamed nature of the wild makes them a protector of freedom and movement.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Sorrell Frostwood", detail: "A druid whose powers are tied to the frost and the quiet woods, using their wisdom to calm the harshest winters.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Jaden Stonebranch", detail: "A druid whose strength is rooted in stone and branches, using their powers to create a solid foundation for the natural world.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Phoenix Willowstone", detail: "A druid whose magical abilities come from the rebirth of fire and the willows, combining resilience and renewal.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "River Sunleaf", detail: "A druid whose connection to rivers and sunlight nourishes the land, bringing warmth and flow to the natural world.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Aspen Bramblethorn", detail: "A druid whose affinity with aspens and brambles allows them to protect the wilds with both strength and growth.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Rowan Thundershade", detail: "A druid who draws power from the storms and the shade of the trees, combining the forces of thunder with the quiet power of the forest.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Avery Nightbloom", detail: "A druid whose affinity with the darkness and the night blooms gives them the ability to heal and grow under the cover of night.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Indigo Cedarbranch", detail: "A druid whose bond with the cedars and the deep indigo skies allows them to navigate the wilds and protect sacred spaces.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Taylor Mosswind", detail: "A druid whose powers are rooted in moss-covered lands and the winds that bring change, always growing and evolving with nature.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Sage Fernstone", detail: "A druid who draws wisdom from both the ferns and stones of the earth, known for their deep connection to nature’s secrets.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Skylar Dawnbreeze", detail: "A druid whose magic is linked to the dawn breeze, bringing new hope and calm with each morning.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Emberthorn Stormroot", detail: "A druid whose powers draw from the fierce storms and deep roots of nature, using both to bring balance and strength.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Orion Greenbranch", detail: "A druid whose connection to the green branches and the stars gives them insight into the cosmic order of nature.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Avery Snowleaf", detail: "A druid whose magic is linked to the snow and the leaves of winter, known for their ability to protect and preserve nature through the cold.", status: false, gender: "Unisex", type: "Traditional Druid" },
  { name: "Ailbhe Moonshade", detail: "A druid whose connection to the moon and the shades of night grants them the ability to see hidden truths.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Caelen Starlight", detail: "A druid whose magic is drawn from the stars, illuminating the path of those who seek guidance in the darkness.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Alaric Dreambloom", detail: "A druid who connects to the dream world and blooms in the light of mystical visions.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Eamon Starfall", detail: "A druid whose bond with the stars and celestial events allows them to harness cosmic power.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Finnian Dawnstar", detail: "A druid whose connection to the dawn and the stars allows them to bring light and hope to the darkest times.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Darian Cloudshadow", detail: "A druid who commands the power of the clouds and the shadows they cast, blending the light and dark into a mystical dance.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Galen Moonroot", detail: "A druid whose powers are rooted in the moon and the earth, drawing strength from both to protect the wilds.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Aldric Nightbreeze", detail: "A druid whose magic flows with the winds of the night, carrying whispers from ancient realms.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Torin Sunshadow", detail: "A druid whose ability to manipulate both the sun and shadows allows them to bring balance between light and dark.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Rowan Dreamleaf", detail: "A druid whose dreams are imbued with the power of nature, helping the world bloom with vibrant energy.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Theron Winddancer", detail: "A druid whose connection to the winds allows them to dance with the breezes and control the elements around them.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Lucian Shadowthorn", detail: "A druid whose mastery of shadow and thorn empowers them to protect and conceal the natural world’s secrets.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Elowen Mistheart", detail: "A druid whose heart is intertwined with the mist, bringing wisdom and clarity through fog and uncertainty.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Caspian Skywhisper", detail: "A druid whose ability to hear the whispers of the sky allows them to communicate with the heavens.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Orion Shadowbloom", detail: "A druid whose ability to bloom in the shadows brings both life and mystery to the natural world.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Soren Stormsong", detail: "A druid whose connection to storms and music creates powerful, enchanting harmonies with nature.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Keiran Starwhisper", detail: "A druid whose whispers are carried on the starlight, using celestial guidance to protect the world’s balance.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Daegan Nightwood", detail: "A druid whose magic is rooted in the deep, mysterious forests of the night, safeguarding their secrets from prying eyes.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Solan Stormshadow", detail: "A druid whose powers are tied to both storms and the shadows, manipulating both to protect the natural world.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Ciaran Dreamwind", detail: "A druid whose connection to dreams and the wind allows them to guide others through visions of the future.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Lorian Skybranch", detail: "A druid whose powers stem from the branches of trees that reach toward the sky, connecting the earth and the heavens.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Muirgen Frostbreeze", detail: "A druid whose connection to the cold winds and frosty landscapes allows them to protect the earth’s frozen beauty.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Thaddeus Moonbranch", detail: "A druid whose strength is tied to the moon and the growth of branches, allowing them to draw power from both the night and nature.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Finlay Stormwhisper", detail: "A druid whose whispers carry with the storm, channeling its power to bring change and transformation.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Ronan Nightdawn", detail: "A druid whose power comes from the transition between night and dawn, bringing balance and renewal to the world.", status: false, gender: "Male", type: "Mystical Druid" },
  { name: "Selene Moonwhisper", detail: "A druid whose connection to the moon and the whispers of nature guides them through the mysteries of the night.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Morrigan Starroot", detail: "A druid whose powers are rooted in the stars and their ancient energy, drawing strength from celestial forces.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Arwen Dreambloom", detail: "A druid whose dreams are intertwined with the growth of magical blooms, nurturing both nature and spirit.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Thalia Cloudshadow", detail: "A druid who draws power from the ever-changing clouds and the shadows they cast upon the earth.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Seraphina Nightshade", detail: "A druid whose affinity with the night and its shadows allows them to see what others cannot.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Alina Moonbreeze", detail: "A druid who carries the gentle breeze of the moon with them, offering peace and guidance in times of darkness.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Isolde Frostdream", detail: "A druid whose magic is tied to the cold beauty of frost and the dreams that bloom in the silence of winter.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Rhiannon Starflower", detail: "A druid who nurtures the stars and flowers, bringing their beauty to the world in balance with the seasons.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Elara Nightwind", detail: "A druid whose magic flows like the wind in the night, carrying secrets and whispers from faraway lands.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Evangeline Mistdancer", detail: "A druid who dances with the mist, weaving spells that protect the delicate balance of nature.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Eira Dreamroot", detail: "A druid whose connection to the roots of trees and the world of dreams lets them guide the paths of life.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Althea Stormbloom", detail: "A druid who controls the storm's power and channels it to bring life and vibrancy to the natural world.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Liora Nightsong", detail: "A druid whose songs echo through the night, harmonizing with the creatures and forces of the dark.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Astrid Frostmoon", detail: "A druid whose connection to the moon and the frost allows them to see the future and shape the winters ahead.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Emmeline Stormbranch", detail: "A druid whose magic blends the power of storms with the solid roots of ancient trees, grounding energy in the world.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Aradia Starfall", detail: "A druid whose essence falls with the stars, helping others find their way through the celestial forces.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Selina Windshadow", detail: "A druid whose powers are rooted in the wind and the shadows it creates, guarding nature's secrets in the breeze.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Orla Moonflower", detail: "A druid who draws magic from the moon and the blooming flowers that grow under its light.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Camellia Mistwood", detail: "A druid whose connection to the mist and the forest grants them the ability to weave spells of protection and guidance.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Solara Dreamwhisper", detail: "A druid whose whisper is carried on the sun’s rays, offering dreams of growth and prosperity to the world.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Lyra Starlight", detail: "A druid whose connection to the stars and their radiant energy lights the way for all who seek the truth.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Naida Moonshadow", detail: "A druid whose magic flows with the shadows of the moon, guiding lost travelers in the darkest of nights.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Isla Frostbranch", detail: "A druid whose powers are tied to the cold branches of trees and the frost that covers them in winter’s embrace.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Fionnuala Starstone", detail: "A druid whose heart is intertwined with the stars, guiding others with the wisdom and power that comes from the heavens.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Elowen Nightbloom", detail: "A druid who nurtures the rare flowers that bloom only under the light of the moon and the shadow of the night.", status: false, gender: "Female", type: "Mystical Druid" },
  { name: "Phoenix Dreamwind", detail: "A druid whose connection to the winds and dreams allows them to see into the future and shape it.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Rowan Frostwhisper", detail: "A druid whose whispers are carried by the frosty winds, calling forth the secrets hidden in the winter.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Ashen Starlight", detail: "A druid who draws power from the stars, their light illuminating the path to wisdom and truth.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Sage Moonsong", detail: "A druid whose song is woven from the light of the moon, guiding those lost in darkness.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "River Nightshade", detail: "A druid whose magic flows like a river through the night, bringing balance and mystery to the world.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Briar Dreambranch", detail: "A druid whose connection to the branches of ancient trees allows them to bridge the world of dreams with the real one.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Quinn Starroot", detail: "A druid whose roots grow deep into the stars, drawing strength and power from the celestial forces above.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Sky Shadowstone", detail: "A druid who commands the shadows in the sky, casting their magic over the earth like a veil.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Indigo Mistwhisper", detail: "A druid whose whispers are carried on the mist, allowing them to shape the world with their subtle magic.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Ember Nightbloom", detail: "A druid whose fire blooms in the night, bringing light and warmth to the coldest of places.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Ember Frostmoon", detail: "A druid whose magic is a balance of fire and ice, weaving together warmth and cold under the light of the moon.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Rowan Moonstone", detail: "A druid whose connection to the moonstone allows them to tap into the power of the moon, guiding the world with its light.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Orion Windroot", detail: "A druid whose roots are anchored in the winds, drawing strength from the ever-changing forces of the air.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Dakota Starbloom", detail: "A druid whose blooms grow under the light of the stars, their magic shining brightly against the darkness.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Riley Frostbranch", detail: "A druid whose branches are frosted with magic, allowing them to grow in the coldest environments.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Taylor Dreamleaf", detail: "A druid whose leaves are woven from dreams, growing in the realm between sleep and waking.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Jaden Nightdawn", detail: "A druid whose powers balance between night and dawn, bringing peace at the break of day.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Morgan Stormbranch", detail: "A druid whose branches grow strong through storms, harnessing their power to shape the world.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Emery Moonwhisper", detail: "A druid whose whispers are carried on the moonlight, guiding others with their subtle influence.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Avery Shadowroot", detail: "A druid whose roots grow deep into the shadows, drawing magic from the unseen forces of the earth.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Ash Dreambloom", detail: "A druid whose blooms are cultivated from the essence of dreams, flourishing in the space between reality and fantasy.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Blair Starbreeze", detail: "A druid whose magic flows like a breeze through the stars, carrying their magic across the universe.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Lark Moonthorn", detail: "A druid whose thorns bloom under the moonlight, creating a connection between the night and the natural world.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Remy Nightwhisper", detail: "A druid whose whispers drift through the night, guiding others to find their path through darkness.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Casey Dreamshadow", detail: "A druid whose shadows are woven from dreams, moving through the unseen realms to shape the world around them.", status: false, gender: "Unisex", type: "Mystical Druid" },
  { name: "Forrest Oakheart", detail: "A druid whose heart is as strong as the oak, deeply rooted in the ancient woods and nature.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Linden Riverstone", detail: "A druid whose spirit flows like the river, grounded like stone, and connected to the heart of nature.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Rowan Briarwood", detail: "A druid whose power stems from the wild, thorny woods, resilient and ever-growing like the briar.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Ash Wilderwood", detail: "A druid whose connection to the wild woods gives them strength to thrive in nature's untamed heart.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Cedar Bramblethorn", detail: "A druid whose power comes from the dense thickets and the ancient cedar trees, protecting nature's secrets.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Silas Stonebark", detail: "A druid whose spirit is as tough as bark, yet as steady and enduring as the stone beneath the forest floor.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Reed Mosswood", detail: "A druid whose soul is intertwined with the quiet, moss-covered woods and the soft whispers of reeds.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Sage Oakroot", detail: "A druid whose wisdom runs deep, connected to the roots of the oak, knowing the ancient ways of nature.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Quill Fernstone", detail: "A druid whose connection to nature is as delicate as a fern and as strong as stone, crafting magic from both.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Willow Thornroot", detail: "A druid whose roots spread deep like a willow, their power hidden beneath the surface, ready to strike like thorns.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Birch Windbloom", detail: "A druid whose magic flows through the air like the wind, blooming with the grace of birch trees in spring.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Alder Mossbranch", detail: "A druid whose branches are covered with moss, a symbol of renewal and life blossoming in nature's rich embrace.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Heath Greenstone", detail: "A druid whose connection to the green earth is as steadfast as stone, bringing balance to the wilds they protect.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Bastian Leafroot", detail: "A druid whose strength lies in the ancient power of the trees, rooted deeply in nature and intertwined with leaves.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Thorne Briarstone", detail: "A druid who grows through hardship, with thorns and stones shaping their path in the wildest of places.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Clay Nightwood", detail: "A druid whose connection to the night and the earthy woods shapes their power, drawing strength from the soil beneath.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Flint Mossheart", detail: "A druid whose heart burns as strong as flint, but whose spirit is nurtured by the softness of moss.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Gale Fernbranch", detail: "A druid whose connection to the wild winds and the fern branches gives them the power of swift change.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Rune Leafwhisper", detail: "A druid whose whispers call upon the ancient runes written in the leaves, holding the magic of the natural world.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Jasper Sunroot", detail: "A druid whose roots draw power from the sun, their spirit glowing as brightly as the summer day.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Reed Stormbloom", detail: "A druid whose power blooms in the face of storms, drawing strength from the raw forces of nature.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Linden Oakleaf", detail: "A druid whose connection to the oak tree is as deep as the linden’s strength, their leaf an emblem of resilience.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Rowan Fernroot", detail: "A druid whose roots reach deep into the earth, drawing power from the mighty fern to grow strong and wise.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Heath Thistlewood", detail: "A druid whose spirit grows amidst the thistles, thriving in harsh conditions with a heart as strong as wood.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Alder Cloudstone", detail: "A druid whose strength comes from the ancient stones and the shifting clouds, constantly evolving and adapting to nature.", status: false, gender: "Male", type: "Nature-Inspired Druid" },
  { name: "Willow Briarstone", detail: "A druid whose spirit is deeply rooted in the willow tree and the resilient briar, strong yet graceful.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Briar Greenleaf", detail: "A druid who thrives in the wild, with a heart full of the resilience of the briar and the growth of green leaves.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Hazel Moonstone", detail: "A druid whose connection to the hazel tree and the moon’s power brings balance to the natural world.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Ivy Shadowroot", detail: "A druid whose power grows in the shadows, like ivy wrapping around the roots of the earth.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Fern Sunbloom", detail: "A druid whose spirit blossoms like a fern in the sunlight, bringing growth and renewal wherever they go.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Daisy Leafwhisper", detail: "A druid whose whispers are like the soft rustling of leaves, gentle and full of wisdom from nature’s quiet corners.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Hazel Stormwood", detail: "A druid whose connection to the mighty storm and the grounding presence of the hazel tree makes them both fierce and wise.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Marigold Fernshadow", detail: "A druid whose essence is a combination of bright marigolds and the deep shadows where ferns thrive.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Laurel Wildbloom", detail: "A druid whose heart blooms like laurel in the wild, thriving in the untamed beauty of nature.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Lila Greenthorn", detail: "A druid whose power is a balance of softness and strength, like the greenthorn growing in nature’s heart.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Ivy Bramblebloom", detail: "A druid whose soul is intertwined with the ivy, blooming amidst the brambles and thorns of the wild.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Clover Sunroot", detail: "A druid whose roots grow deep in the sunlight, flourishing like clover in the earth’s warm embrace.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Sage Thornflower", detail: "A druid whose wisdom blooms in the form of thornflowers, a mix of beauty and strength in the harshest environments.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Dahlia Moonbreeze", detail: "A druid whose spirit dances in the breeze like a dahlia, bringing peace and calm under the moon’s glow.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Fernwind Wildstone", detail: "A druid whose power comes from the winds that carry the ferns’ whispers and the strength of wild stone.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Poppy Stormleaf", detail: "A druid whose heart is as wild as a poppy, able to withstand the fiercest storms and bloom with renewed strength.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Amber Greenbloom", detail: "A druid whose spirit is warm and golden, growing like amber amidst the green beauty of the earth.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Dahlia Rootflower", detail: "A druid whose deep roots in nature allow them to bloom like a dahlia, no matter where they are planted.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Aster Thornwhisper", detail: "A druid whose voice is as soft as a whisper among the thorns, guiding those who hear to the beauty hidden in the wild.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Jasmine Moonleaf", detail: "A druid whose connection to the moon and the jasmine flower brings peace and a subtle, powerful presence.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Holly Sunshadow", detail: "A druid whose power radiates from the sun, yet their heart is as deep as the shadows beneath the holly tree.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Tansy Wildwood", detail: "A druid whose spirit roams free in the wildwoods, like the vibrant, untamed tansy flower.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Lily Greenstone", detail: "A druid whose heart blooms as gracefully as a lily and whose strength is as enduring as green stone.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Rowan Windbloom", detail: "A druid whose soul is as balanced as the rowan tree, able to weather the winds and bloom with grace.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "Violet Thistlethorn", detail: "A druid whose beauty is like the violet, yet whose spirit is as resilient as thistle and thorn.", status: false, gender: "Female", type: "Nature-Inspired Druid" },
  { name: "River Thornleaf", detail: "A druid whose spirit flows like a river, with the strength and resilience of thorn-leaves.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Sage Mosswind", detail: "A druid whose wisdom swirls like the moss carried by the wind, grounding yet free.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Ash Willowstone", detail: "A druid whose connection to the ash tree and the steady foundation of stone provides balance in nature.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Linden Nightbreeze", detail: "A druid whose spirit is as calm and refreshing as the night breeze passing through a linden tree.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Rowan Fernheart", detail: "A druid whose heart beats in rhythm with the rowan tree, blooming like a fern in the wild.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Quinn Greenstone", detail: "A druid whose essence is as enduring as greenstone, standing strong in nature’s embrace.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Storm Mossbranch", detail: "A druid whose power is like a storm blowing through the moss-covered branches, fierce and resilient.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Ember Wildwood", detail: "A druid whose spirit burns brightly like an ember in the untamed wildwood, powerful yet free.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Briar Sunshadow", detail: "A druid whose presence is as bold as briar, balanced by the warmth of the sun and the coolness of shadow.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Sky Leafwhisper", detail: "A druid whose whispers flow like the wind through the leaves, their presence as vast as the sky.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Sage Greenbranch", detail: "A druid whose wisdom is rooted in the earth, growing strong like a green branch.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Ashen Moonstone", detail: "A druid whose connection to the ashes and the moonstone brings both rebirth and illumination.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Cedar Windbloom", detail: "A druid whose spirit thrives like the cedar tree, standing tall as the winds blow around it, blooming with strength.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Blaze Sunroot", detail: "A druid whose presence is as intense as a blaze, rooted deeply in the sun’s energy.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Wilder Thornstone", detail: "A druid whose power lies in the wild, as untamed as thorns, as strong as stone.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Phoenix Greenbreeze", detail: "A druid whose soul rises like a phoenix in the green breeze, reborn with each gust of wind.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Quill Wildbranch", detail: "A druid whose heart is as wild as a branch, their words sharp like the quill of nature.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Storm Thistlewood", detail: "A druid whose presence is as fierce as a storm, and as resilient as the thistle in the woods.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Fern Stonebreeze", detail: "A druid whose spirit is as flexible as fern and as solid as stone, carried by the breeze.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Sage Stormroot", detail: "A druid whose wisdom is rooted deeply in the earth, while their power rides the storm.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Aspen Greenleaf", detail: "A druid whose presence is both serene and dynamic, like the aspen tree in the greenest of leaves.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Lark Fernwind", detail: "A druid whose spirit is as free as a lark, flowing through the winds like a fern in the breeze.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Finch Thornbloom", detail: "A druid whose heart is as delicate as a finch, yet strong enough to bloom amidst the thorns.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "Rowan Wildstone", detail: "A druid whose essence is as wild and enduring as the rowan tree, standing tall like stone in the wild.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" },
  { name: "River Moonshadow", detail: "A druid whose soul flows like a river, blending with the moonlight and shadow, a presence both calm and mysterious.", status: false, gender: "Unisex", type: "Nature-Inspired Druid" }
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
      name: "Demon Name Generator",
      pic: "/demonpic.jpg",
      link: "https://www.nameideagenerator.com/demon-name-generator",
  },
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
      name: "Orc Name Generator",
      pic: "/orc-name-generator.jpg",
      link: "https://www.nameideagenerator.com/orc-name-generator",
  },
  ];
  
  const DruidNameGenerator = () => {
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
  
const bgImage = "/druid-name-generator.jpg"
const context = "Druid Name Generator with Meaning"
const Q1 = "What is a cool druid name? "
const A1 = "A cool druid name could be something nature-inspired like Sylvaer, Thornroot, or Mosswhisper."

const Q2 = "How to pick a druid name?"
const A2 = "Choose a name that reflects nature, animals, or elements. Consider combining plant names, nature terms, or mystical-sounding words."

const Q3 = "What is Merlin's name in druid?"
const A3 = "In druidic lore, Merlin is sometimes depicted as a powerful figure associated with nature magic, but his name doesn't directly translate to a druid-specific term."

const Q4 = "Is it druid or druid?"
const A4 = "The correct spelling is 'druid'—referring to the ancient Celtic priests, not 'druid' with any alternative spelling."

const Q5 = "What are some examples of druid names?"
const A5 = "Examples include Faelan, Eldrin, Branwen, or Aeris, all with nature or celestial connections."
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
        <a href="/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fanstasy and Mythical Creatures Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/druid-name-generator" className="hover:underline text-[#343a40]">Druid Name Generator with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Druid Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender of Druid Name</p>
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
            <p className="text-center text-[#343a40]">Category of Druid Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Traditional Druid">Traditional</option>
              <option value="Mystical Druid">Mystical</option>
              <option value="Nature-Inspired Druid">Nature-Inspired</option>
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
            What Is a Druid Name?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            Druid names are more than just labels; they hold ancient charm and spiritual significance. 
            These names often connect to nature, magic, and lore, making them ideal for characters tied to mystical worlds.
            The tradition of druid names is rooted in history and mythology. Names often reflect traits like wisdom, strength, or a bond with the natural world. 
            Choosing the right druid name adds personality and depth to your character.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            The Origins of Druid Names
              </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            It is fascinating to explore the deep roots of druid names in ancient history. These names often trace back to Celtic cultures and carry the spirit of their sacred traditions. 
            Druids were seen as wise and mystical, and their names reflected their roles as leaders and keepers of natural wisdom.
            Celtic languages heavily influenced druid names, with many derived from words related to nature, magic, and the divine. 
            Names tied to elements like the moon, forests, or ancient deities continue to resonate in modern fantasy.
            </p>
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use Our Druid Name Generator?
            </h2>
            <p className="text-left py-[10px] text-[#343a40]">
            You must experience a tool designed to provide names with purpose and elegance. This generator offers carefully curated names that fit any fantasy or RPG setting.
            </p>
            <hr />
            <br />
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Curated for Every Need
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Our Druid Name Generator offers personalized results based on gender and name type. 
            Whether you’re looking for a traditional, mystical, or nature-inspired name, the generator tailors your options to your exact preferences. 
            Each name comes with a deep meaning, helping you connect with your character on a more personal level.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Designed for Creativity
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Our Druid Name Generator offers personalized results based on gender and name type. 
            Whether you’re looking for a traditional, mystical, or nature-inspired name, the generator tailors your options to your exact preferences. 
            Each name comes with a deep meaning, helping you connect with your character on a more personal level.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Rich Meaning Behind Every Name
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Every name is accompanied by a rich backstory or meaning, often linked to ancient lore, nature, or druidic traditions. 
            This feature allows you to enhance your character's story, connecting their name with the world they inhabit.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Efficient and Fast
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Get instant results without any hassle. The generator quickly provides four unique options, 
            letting you explore and decide on the best fit in no time. This efficiency saves you time while maintaining creativity.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Perfect for Writers, Gamers, and Creators
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Whether you're writing a novel, designing a game, or creating a role-playing character, our generator is built to serve all creative needs. 
            It helps you craft characters with names that feel as real and rich as their personalities.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Endless Customization Options
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Customize your experience by selecting different categories and filtering by gender, style, or even specific name types. 
            This flexibility ensures that you find exactly what you’re looking for, every time.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Seamless Integration into Your Projects
            </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            The names generated are designed to fit into a variety of fantasy and storytelling settings. 
            They easily integrate into your existing world-building, adding a professional touch to your character development.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Druid Name Generator
          </h2>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Select Gender <b>(Male, Female, Unisex)</b>:
              </h3>
              <p>
              Choose between male, female, or unisex to ensure the results align with your preferences. This step personalizes the names based on your needs.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Type<b> (Traditional, Mystical, or Nature-Inspired)</b>:
              </h3>
              <p>
              Explore various categories such as Traditional, Mystical, or Nature-Inspired. Each type offers unique styles that suit different druidic personalities or themes.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: <b>Generate</b> Names Instantly
              </h3>
              <p>
              With one click, get four unique name suggestions every time. The generator ensures quick and efficient results, saving you time.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Explore Name Meanings
              </h3>
              <p>
              Each name comes with a detailed meaning, connecting it to druidic lore, nature, or mystical traditions. Understanding the significance helps you choose a name with depth.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="female-druid-name-generator.png"
              alt="Druid Name Generator with Meaning Tool"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="male-druid-name-generator.webp"
              alt="Druid Name Generator with Meaning Tool"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/druid_.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Druid Name Generator
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
          <b>Unique Features of Our Druid Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Names with Rich Meanings
            </h3>
            <p>
            Every name comes with deep meanings tied to druidic and fantasy lore. 
            These meanings add depth and context, helping you connect your character to the mystical and natural themes of druids.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Customizable Options
            </h3>
            <p>
            The tool offers customizable features to refine your search. Choose gender, name type, or 
            specific filters to create results that fit your character’s personality or story perfectly.      
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Diverse Categories
            </h3>
            <p>
            Explore categories like Traditional, Mystical, or Nature-Inspired. 
            Whether your druid is a heroic leader, a wise healer, or a mysterious wanderer, there’s a category to match every theme.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Name Generation
            </h3>
            <p>
            The generator delivers results instantly, making it fast and efficient. In just seconds, you’ll get four unique names, saving you time while ensuring creativity.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Perfect for Fantasy Lovers
            </h3>
            <p>
            Writers, gamers, and creators will find this tool invaluable. It’s designed to provide inspiring names that elevate your stories, games, or role-playing adventures.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          <b>Categories of Druid Names You Can Generate</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Druid Names by Type
              </h3>
              <p>
              <ul>
                <li>- <b>Traditional Druid Names </b> – These names are inspired by historical druids and ancient Celtic lore. They are timeless and carry an aura of wisdom and power.</li>
                <li>- <b>Mystical Druid Names </b> – Mystical names add an ethereal and magical quality to your character. These names are perfect for druids steeped in fantasy and enchantment.</li>
                <li>- <b>Nature-Inspired Druid Names </b> – These names evoke images of forests, rivers, and the natural world. They emphasize the druid’s connection to their environment.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Druid Names by Gender
              </h3>
              <p>
              <ul>
                <li>- <b>Male Druid Names</b> – Strong and noble names that exude wisdom and leadership. Perfect for druids who protect their sacred groves.</li>
                <li>- <b>Female Druid Names</b> – Elegant and enchanting names that highlight grace and mystery. They are ideal for druids who weave magic through nature.</li>
                <li>- <b>Unisex Druid Names </b> – Flexible and versatile names that suit any druid character. These names work well for characters breaking traditional roles.</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
        <b> Druid Names by Gender and Type</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Male Druid Names
              </h3>
              <p>
             <span className="sm:text-[20px] text-[18px] font-semibold"> Traditional Names</span>
              <ul>
                <li>- <b>Eldric </b> – Wise protector of the forest.</li>
                <li>- <b>Thalion </b> – Steadfast guardian of nature.</li>
                <li>- <b>Fenror </b> – A mythical name symbolizing strength in the wild.</li>
              </ul>
              </p>
              <p>
             <span className="sm:text-[20px] text-[18px] font-semibold"> Mystical Names</span>
              <ul>
                <li>- <b>Kaelorn </b> – Keeper of ancient druidic secrets.</li>
                <li>- <b>Sylorin </b> – Mystic of the sacred groves.</li>
                <li>- <b>Morvak </b> – One who channels the power of the earth.</li>
              </ul>
              </p>
              <p>
             <span className="sm:text-[20px] text-[18px] font-semibold"> Nature-Inspired Names</span>
              <ul>
                <li>- <b>Ashwild </b> – Embodiment of untamed forests.</li>
                <li>- <b>Bramblethorn </b> – Protector of thickets and vines.</li>
                <li>- <b>Stormroot </b> – A druid tied to the power of storms.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Female Druid Names
              </h3>
              <p>
             <span className="sm:text-[20px] text-[18px] font-semibold"> Traditional Names</span>
              <ul>
                <li>- <b>Elowen </b> – A name meaning "elm tree" in Cornish.</li>
                <li>- <b>Myrrina </b> – An ancient name tied to wisdom and grace.</li>
                <li>- <b>Brynna </b> – A timeless name meaning "hill" or "natural beauty."</li>
              </ul>
              </p>
              <p>
             <span className="sm:text-[20px] text-[18px] font-semibold"> Mystical Names</span>
              <ul>
                <li>- <b>Auralyn</b> – A luminous spirit of the sacred woods.</li>
                <li>- <b>Seraphin</b> – A mystical guide linked to celestial energy.</li>
                <li>- <b>Nythera</b> – A druid harnessing the power of moonlight.</li>
              </ul>
              </p>
              <p>
             <span className="sm:text-[20px] text-[18px] font-semibold"> Nature-Inspired Names</span>
              <ul>
                <li>- <b>Willowshade</b> – A serene guardian of the forest.</li>
                <li>- <b>Fernwyn</b> – A name tied to lush greenery and wild meadows.</li>
                <li>- <b>Starbloom</b> – Symbolizing the connection between earth and sky.</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[85%] mx-auto text-[#343a40] my-[50px] h-[80vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
        <b>  Druid Name Inspiration</b>
          </h2>
        <hr />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Nature and the Wild
              </h3>
              <p>
              Druids draw their power from the natural world, making nature a rich source of inspiration. 
              Names like Willow, Rowan, and Ashwild evoke forests, plants, and the wilderness. Others, such as Stormroot or Rainwood, reflect weather and natural forces.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Mythology and Folklore
              </h3>
              <p>
              Ancient myths and legends offer timeless inspiration for druidic names. 
              Names like Sylorin or Nythera reflect mystical energy, while Thalion and Elowen connect to heroic and wise figures from Celtic or Norse mythology.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Celestial Themes
              </h3>
              <p>
              Druids often connect with the stars, moon, and sun. 
              Celestial-inspired names like Auralyn, Solarin, and Starbloom add a sense of magic and mystery. These names work well for characters tied to cosmic forces.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Ancient Languages
              </h3>
              <p>
              Many druidic names take inspiration from ancient languages like Gaelic, Norse, or Old English. 
              Names like Fenror and Brynna carry historical weight, grounding them in druidic tradition.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="2446812.jpeg"
              alt="Druid Name Generator with Meaning Tool"
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

export default DruidNameGenerator;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Alistair Brightblade", detail: "Alistair’s blade shines with the pure light of righteousness, cutting down darkness.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Joran Lightheart", detail: "Joran’s heart is as radiant as the light he wields, ever compassionate and just.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Gideon Flamewarden", detail: "Gideon guards the flame of justice, keeping the light of hope alive for all.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Thaddeus Dawnbringer", detail: "Thaddeus heralds the dawn, bringing hope to the hopeless and light to the lost.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Caelan Shieldbearer", detail: "Caelan stands firm, protecting the innocent with his unyielding shield.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Eamon Starshield", detail: "Eamon’s shield reflects the light of the stars, guiding and protecting all in his care.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Valorin Stormhammer", detail: "Valorin wields a hammer as mighty as a storm, delivering justice with every strike.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Lucius Sunstrike", detail: "Lucius strikes with the power of the sun, banishing darkness wherever it lurks.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Sebastian Virtueblade", detail: "Sebastian’s blade is as pure as his heart, fighting for justice and virtue in all things.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Roderick Pureheart", detail: "Roderick’s heart is as pure as the light he follows, always striving to do what is right.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Galen Truefire", detail: "Galen’s fire burns with truth, a flame that can never be extinguished.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Darian Hopebringer", detail: "Darian brings hope to the hopeless, his faith shining bright in the darkest times.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Brynden Ironshield", detail: "Brynden’s shield is as strong as iron, protecting his allies with unwavering resolve.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Emory Lightbringer", detail: "Emory brings light to the darkest places, his presence a beacon of hope and guidance.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Asher Valorheart", detail: "Asher’s heart beats with valor, ever ready to defend the helpless and uphold justice.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Alden Sunflare", detail: "Alden’s actions are as bright and powerful as the flare of the sun, bringing warmth and justice.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Tobias Radiance", detail: "Tobias radiates with divine light, casting out evil with each step he takes.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Tristian Emberguard", detail: "Tristian guards the embers of hope, ensuring that they never die, even in the darkest times.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Falkor Justiceblade", detail: "Falkor’s blade is the embodiment of justice, swift and unyielding in the face of evil.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Leander Brightsword", detail: "Leander’s sword shines brightly, cutting through corruption with its righteous edge.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Magnus Truthseeker", detail: "Magnus seeks the truth in all things, and his sword delivers justice to those who lie and deceive.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Finnian Holyflame", detail: "Finnian wields the holy flame, burning away evil and leaving only light in its wake.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Theron Lightbringer", detail: "Theron brings the light of the divine wherever he goes, inspiring courage and hope in all who see him.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Lucian Nobleheart", detail: "Lucian’s noble heart guides him in all things, leading with honor and compassion.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Cedric Virtuouswing", detail: "Cedric’s wings are as virtuous as his soul, soaring high in pursuit of justice and righteousness.", status: false, gender: "Male", type: "Virtuous Paladin" },
    { name: "Seraphina Dawnblade", detail: "Seraphina wields the Dawnblade, a sword that shines with the light of righteousness.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Eveline Pureheart", detail: "Eveline's heart is pure and unwavering, guided by justice and compassion in all things.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Liora Starfire", detail: "Liora’s fire burns bright like the stars, leading the way through darkness and despair.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Amara Virtueshield", detail: "Amara stands firm with her shield of virtue, protecting the innocent from all harm.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Elowen Lightbloom", detail: "Elowen brings light and hope to those in need, her spirit blooming like a flower in spring.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Astrid Sunstrike", detail: "Astrid strikes with the force of the sun, her justice burning away darkness wherever it hides.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Verena Flamebringer", detail: "Verena brings the flame of justice wherever she goes, lighting the path for the oppressed.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Aeliana Trueheart", detail: "Aeliana’s heart is true and steadfast, guided by a moral compass that never falters.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Felicity Radiantshield", detail: "Felicity carries a radiant shield, deflecting evil and reflecting the light of righteousness.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Elira Flameblade", detail: "Elira’s blade is imbued with the power of flame, striking down foes with the fury of justice.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Seris Virtuebringer", detail: "Seris brings virtue to the world, spreading justice and goodness wherever she treads.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Isolde Holyheart", detail: "Isolde’s heart is filled with the divine light of righteousness, forever seeking to do good.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Sariah Justiceblade", detail: "Sariah wields a blade of justice, always ready to strike down evil with righteousness.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Lysandra Brightflare", detail: "Lysandra’s light flares bright like the sun, banishing evil with every step she takes.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Theodora Lightwarden", detail: "Theodora guards the light of justice, ensuring that it never fades in the face of darkness.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Vivienne Dawnshield", detail: "Vivienne wields a shield of dawn, protecting her allies with the light of the rising sun.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Calista Emberlight", detail: "Calista’s light burns like an ember, bringing warmth and hope to those in need.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Giselle Hopebringer", detail: "Giselle brings hope to the hopeless, her presence a beacon of faith and courage.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Aurelia Holyblade", detail: "Aurelia’s blade is holy, imbued with the power to banish evil and protect the innocent.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Emeline Trueflare", detail: "Emeline’s flare of light represents her true nature, pure and unwavering in her pursuit of justice.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Selene Starshard", detail: "Selene’s shard of the star shines with divine guidance, leading her to strike down evil wherever it lurks.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Althea Virtuousheart", detail: "Althea’s heart is filled with virtue, leading her to make choices based on kindness and justice.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Arianne Lighteye", detail: "Arianne sees the world through the eyes of light, always seeking to reveal truth and righteousness.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Evelina Valorblade", detail: "Evelina’s blade carries the power of valor, a true weapon for protecting the innocent.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Galatea Holyflame", detail: "Galatea’s holy flame burns bright, illuminating the path to justice and righteousness for all to follow.", status: false, gender: "Female", type: "Virtuous Paladin" },
  { name: "Rowan Radiance", detail: "Rowan radiates a light that guides the lost, their presence a beacon of hope and truth.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Sage Brightshield", detail: "Sage holds a shield that shines with the light of righteousness, protecting the innocent from harm.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Darian Virtuefire", detail: "Darian wields the fire of virtue, burning away corruption and bringing justice to the wicked.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Alastor Pureblade", detail: "Alastor’s blade is pure, a symbol of their unwavering commitment to truth and honor.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Valorin Hopeflare", detail: "Valorin’s flare of hope inspires all around them, lighting the way in the darkest of times.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Calix Dawnheart", detail: "Calix’s heart shines like the dawn, a source of light and courage for those around them.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Solace Lightspike", detail: "Solace’s strike pierces the darkness, bringing the light of justice to every corner of the world.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Emory Lightstrike", detail: "Emory strikes with the power of light, their weapon glowing with the force of righteousness.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Lysander Trueblade", detail: "Lysander’s blade is true, guided by their unshakeable commitment to honor and justice.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Solara Flamebringer", detail: "Solara brings the flame of hope wherever they go, lighting the path for the oppressed.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Thorne Trueheart", detail: "Thorne’s heart is true, forever guided by their unwavering sense of justice and compassion.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Avalon Starshield", detail: "Avalon’s shield glows with the brilliance of the stars, offering protection and guidance to all they meet.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Neria Lightbringer", detail: "Neria brings the light wherever they go, their presence a source of peace and protection for all.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Ashlin Radiantblade", detail: "Ashlin’s blade shines with a radiant glow, cutting through darkness with the power of righteousness.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Tristian Virtuousguard", detail: "Tristian stands as a steadfast guardian of virtue, their protection unyielding and their resolve strong.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Fenn Lightbearer", detail: "Fenn carries the light of justice, illuminating the path to truth and righteousness for all.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Selwyn Hopekeeper", detail: "Selwyn is the keeper of hope, their presence a reminder that no matter the darkness, light will always return.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Briar Emberlight", detail: "Briar’s ember burns with an eternal light, guiding others to safety with warmth and resolve.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Elysia Dawnflare", detail: "Elysia’s flare burns bright like the dawn, heralding a new day of hope and redemption.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Kyrian Truthseeker", detail: "Kyrian seeks the truth in all things, guided by a moral compass that never wavers.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Valeria Holyheart", detail: "Valeria’s heart is holy, and their every action reflects their commitment to purity and justice.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Arlen Brightblaze", detail: "Arlen’s blaze is bright, their resolve unbreakable as they bring light to even the darkest places.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Tarian Truefire", detail: "Tarian’s fire burns true, a beacon of hope and courage for those who follow in their wake.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Thalindra Lighteye", detail: "Thalindra’s eyes are filled with the light of truth, always seeing the path of righteousness.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Zephyr Flamewarden", detail: "Zephyr stands as the warden of the flame, their protection never faltering in the face of darkness.", status: false, gender: "Unisex", type: "Virtuous Paladin" },
  { name: "Aurelius Holystrike", detail: "Aurelius strikes with the power of the holy, delivering righteous judgment with each blow.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Gideon Sunblade", detail: "Gideon’s blade burns with the radiance of the sun, a symbol of purity and divine justice.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Benedict Lightbringer", detail: "Benedict brings the light to all, guiding those lost in darkness back to the path of righteousness.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Magnus Lightwarden", detail: "Magnus stands as a steadfast warden of the light, protecting the innocent with unwavering dedication.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Lucian Virtueheart", detail: "Lucian’s heart is full of virtue, always standing for what is right and just in the face of darkness.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Thaddeus Sacredflame", detail: "Thaddeus carries the sacred flame of justice, his sword blazing with divine fury.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Sebastian Sunflare", detail: "Sebastian’s presence shines like the sun, a beacon of hope for those in need of guidance.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Julius Purityshield", detail: "Julius carries a shield of purity, defending against the darkness with divine protection.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Samuel Celestialstrike", detail: "Samuel strikes with the power of the celestial, delivering judgment from the heavens themselves.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Raphael Dawnflame", detail: "Raphael’s flame burns bright like the dawn, heralding a new day of light and hope.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Elian Soulguard", detail: "Elian guards the souls of the faithful, protecting them from the forces of darkness and corruption.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Alaric Brightflame", detail: "Alaric’s bright flame cuts through the darkness, burning with divine purity and strength.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Darian Sacredfire", detail: "Darian’s sacred fire is a force of divine judgment, cleansing the world of corruption and evil.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Victor Sunshield", detail: "Victor’s shield glows with the power of the sun, deflecting evil with radiant force.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Adrian Lightrune", detail: "Adrian’s runes are carved with light, each one representing a divine oath to protect and serve.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Phelan Holyblade", detail: "Phelan’s blade shines with holy power, smiting evil and protecting the righteous.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Galen Starbringer", detail: "Galen brings the light of the stars, guiding others with his divine wisdom and courage.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Silas Trueflame", detail: "Silas’ flame is true, burning with purity and truth, standing against all forms of darkness.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Eamon Holyheart", detail: "Eamon’s heart is filled with divine love and compassion, always fighting for the good of others.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Bartholomew Radiantflame", detail: "Bartholomew’s flame radiates with divine power, illuminating the path of justice and righteousness.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Emory Starstrike", detail: "Emory strikes like a star, their every move burning with divine power and purpose.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Finnian Brightrune", detail: "Finnian’s runes glow bright, infused with divine magic to protect the innocent and smite the wicked.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Tobias Celestialblade", detail: "Tobias’ blade is infused with celestial power, cutting through evil with divine wrath.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Dorian Sacredshield", detail: "Dorian’s shield is a sacred defense, guarding the innocent with the power of divine protection.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Aldric Purifier", detail: "Aldric purifies the world with his actions, cleansing corruption and protecting the divine order.", status: false, gender: "Male", type: "Holy Paladin" },
  { name: "Seraphina Lightkeeper", detail: "Seraphina keeps the light alive, guiding the righteous with unwavering devotion.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Liora Radiantheart", detail: "Liora’s heart is radiant, filled with divine light that guides her every step.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Eveline Celestialfire", detail: "Eveline’s fire burns with celestial power, cleansing evil and bringing divine warmth.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Isolde Holystrike", detail: "Isolde’s strikes are imbued with the power of the holy, bringing swift justice to all.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Amara Dawnshield", detail: "Amara’s shield shines with the first light of dawn, protecting the weak from all harm.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Felicity Lightblaze", detail: "Felicity’s blaze is fueled by divine light, banishing darkness wherever it goes.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Elowen Trueblade", detail: "Elowen’s blade is true, guided by justice and the unwavering light of virtue.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Giselle Radiantbringer", detail: "Giselle brings radiant light with every step, illuminating the way for the lost and the hopeless.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Astrid Sunblade", detail: "Astrid’s blade gleams with the power of the sun, a beacon of hope in the darkest of times.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Verena Holyfire", detail: "Verena’s fire is holy and purifying, burning away corruption and darkness in her path.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Aurelia Starbringer", detail: "Aurelia brings the light of the stars, a divine spark of hope in the eternal night.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Calista Pureheart", detail: "Calista’s heart is pure, her every action driven by love and devotion to the divine.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Lyra Flameguardian", detail: "Lyra is the guardian of the divine flame, protecting it from the forces of darkness.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Celestia Hopeflame", detail: "Celestia carries the hopeflame, a blazing light that inspires and uplifts all those around her.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Giselle Celestialblade", detail: "Giselle’s blade is infused with celestial power, cutting down evil with divine grace.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Vivienne Sacredshield", detail: "Vivienne’s shield is sacred, offering protection and peace to those in need.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Theodora Holyflame", detail: "Theodora wields the holy flame, casting away darkness and shining as a beacon of hope.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Sariah Lightflame", detail: "Sariah’s flame burns with divine power, radiating light and warmth to all those around her.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Elira Radianceblade", detail: "Elira’s blade shines with radiant energy, delivering justice to those who threaten peace.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Aeliana Dawnflare", detail: "Aeliana is the flare of dawn, casting light upon the dark and protecting the innocent.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Selene Lightblaze", detail: "Selene’s blaze is fueled by divine light, an eternal fire that drives back evil.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Galatea Puritystrike", detail: "Galatea’s strikes are as pure as her heart, delivering divine justice wherever she goes.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Lysandra Virtuousflame", detail: "Lysandra’s flame burns with virtue, lighting the way for all those seeking redemption.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Althea Lightguardian", detail: "Althea guards the light, standing firm against the forces of darkness to protect the innocent.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Amira Soulblade", detail: "Amira’s blade is forged with the essence of souls, cutting down evil and protecting the sacred.", status: false, gender: "Female", type: "Holy Paladin" },
  { name: "Zephyr Sacredlight", detail: "Zephyr radiates sacred light, bringing clarity and protection to those around them.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Sage Trueflame", detail: "Sage’s flame burns with truth, a beacon of righteousness in the darkest places.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Rowan Celestialstrike", detail: "Rowan’s strikes carry the weight of the heavens, delivering divine justice wherever they go.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Ashlin Radianceflare", detail: "Ashlin’s flare burns with radiant power, illuminating the world with divine light.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Darian Sunblade", detail: "Darian’s blade gleams with the light of the sun, cutting through darkness with divine precision.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Tarian Starheart", detail: "Tarian’s heart burns with the light of the stars, a constant source of hope and guidance.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Valen Radiantflame", detail: "Valen wields the radiant flame, burning away evil and darkness with every strike.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Fenn Lightseeker", detail: "Fenn is a seeker of light, always searching for ways to bring light to the darkest corners of the world.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Emory Sunbringer", detail: "Emory brings the warmth of the sun, spreading light and hope wherever they go.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Kyrian Holystrike", detail: "Kyrian strikes with the power of the holy, smiting darkness with their sacred might.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Solara Dawnflame", detail: "Solara’s flame is born at dawn, bringing new hope and light to the world with each rise of the sun.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Briar Lightkeeper", detail: "Briar keeps the light safe, guarding it from darkness and ensuring its eternal presence.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Thorne Celestialheart", detail: "Thorne’s heart is filled with celestial light, guiding them to protect the innocent and vanquish evil.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Avalon Puritystrike", detail: "Avalon strikes with the purity of their soul, bringing justice with every blow.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Elyas Trueheart", detail: "Elyas’s heart is true, filled with unwavering loyalty to the light and all that is good.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Aster Radiantguard", detail: "Aster guards the light with radiance, ensuring its protection against all forces of darkness.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Solace Sunflare", detail: "Solace’s flare burns with the intensity of the sun, casting away shadows and offering comfort to those in need.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Theron Holyfire", detail: "Theron wields holy fire, cleansing the world of corruption and bringing peace to the troubled.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Galen Lightflame", detail: "Galen’s flame is pure and bright, lighting the way for all who seek guidance and protection.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Neria Sacredshield", detail: "Neria’s shield is sacred, standing firm against all forces that threaten the light and the innocent.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Arlen Holyblaze", detail: "Arlen’s blaze is holy, a force of light that burns away the darkness and purifies the world.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Niven Celestialflame", detail: "Niven’s flame is celestial, burning with the power of the heavens and bringing divine protection.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Rowan Trueheart", detail: "Rowan’s heart is true, driven by justice, love, and the unyielding light of the divine.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Briar Starbringer", detail: "Briar brings the light of the stars, guiding the way for those who have lost their path.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Kyros Dawnfire", detail: "Kyros’s fire is born at dawn, a new beginning each day, fighting for justice and the light.", status: false, gender: "Unisex", type: "Holy Paladin" },
  { name: "Thorne Nightstrike", detail: "Thorne strikes from the shadows, his every move shrouded in darkness and fear.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Eirik Blackflame", detail: "Eirik’s flame burns as black as night, leaving destruction in its wake.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Dorian Darkblade", detail: "Dorian wields a blade forged in darkness, his strikes feared by all who cross him.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Jarek Deathsworn", detail: "Jarek is sworn to death, a harbinger of doom and despair on the battlefield.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Ulric Bloodrune", detail: "Ulric’s rune-etched blade thirsts for blood, his fury unstoppable once unleashed.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Kaldor Stormbringer", detail: "Kaldor calls the storms, summoning lightning and thunder to wreak havoc on his enemies.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Roland Doomstrike", detail: "Roland’s strikes carry the weight of doom, an omen of death for all who oppose him.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Torak Darkblade", detail: "Torak’s blade is forged from the darkest of steel, its edge leaving a trail of destruction.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Roderick Bloodshield", detail: "Roderick shields himself with the blood of his enemies, his defense as terrifying as his attack.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Malin Firestorm", detail: "Malin unleashes a storm of fire, turning the battlefield into a blazing inferno.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Vikor Nightflame", detail: "Vikor’s flame burns in the darkness, illuminating only destruction and fear in its wake.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Jarvis Skullbane", detail: "Jarvis crushes skulls with his mighty blows, a fearsome warrior known for his brutality.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Thaddeus Blackguard", detail: "Thaddeus is the embodiment of darkness and protection, his guard as fierce as the night.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Barak Nightblaze", detail: "Barak’s blazes ignite the night, turning it into a terrifying force of destruction.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Thorin Dreadstrike", detail: "Thorin strikes with dread, his very presence enough to send enemies fleeing in terror.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Zarek Stormflame", detail: "Zarek blends storm and flame, his attacks as unpredictable and deadly as nature itself.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Helric Doomflame", detail: "Helric wields doom and flame, his power as terrifying as the wrath of the gods.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Draken Firestrike", detail: "Draken strikes with fire, his blows scorching everything in their path.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Valderan Bloodfang", detail: "Valderan’s bloodlust is legendary, his fang-like strikes feared by all who oppose him.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Avenar Warbringer", detail: "Avenar brings war to the battlefield, leading his allies to victory with an iron fist.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Magnus Dreadblade", detail: "Magnus’s dreadblade strikes terror into the hearts of his enemies, leaving them in fear of his power.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Rurik Shadowstrike", detail: "Rurik strikes from the shadows, his enemies never knowing where the next blow will come from.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Alaric Doomshield", detail: "Alaric’s shield carries the weight of doom, protecting him and destroying all who dare challenge him.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Varek Darkstorm", detail: "Varek conjures storms from the darkness, his enemies caught in the chaos of his fury.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Ragnar Nightblade", detail: "Ragnar wields a blade born of night, its strikes as silent as death itself.", status: false, gender: "Male", type: "Fearsome Paladin" },
  { name: "Morgana Dreadflame", detail: "Morgana’s flames burn with dread, consuming all in their path with a fiery wrath.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Selene Shadowbane", detail: "Selene’s light banishes shadows, wielding a blade that cuts through darkness with ease.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Varya Nightstrike", detail: "Varya strikes under the cover of night, her attacks swift and deadly.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Eris Darkshadow", detail: "Eris commands the shadows, her presence a foreboding force in the darkest corners.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Lyra Bloodfire", detail: "Lyra’s fire is fueled by blood, a burning fury that turns the battlefield into an inferno.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Isolde Doomblaze", detail: "Isolde’s blaze heralds doom, an unstoppable force of fire that leaves nothing in its wake.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Sable Blackblade", detail: "Sable’s blade is forged from the deepest shadows, a weapon that strikes with deadly precision.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Zarina Deathbringer", detail: "Zarina is a bringer of death, her very presence an omen of destruction and despair.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Vesta Nightfang", detail: "Vesta’s fangs glisten in the night, her attacks swift and deadly, like a predator on the hunt.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Kaela Shadowflame", detail: "Kaela wields the power of shadow and flame, a fearsome force that burns and vanquishes all.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Sira Bloodstorm", detail: "Sira’s blood fuels a storm of violence, her strikes as fierce as the tempest she commands.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Moria Nightfang", detail: "Moria’s fangs gleam in the dark, her lethal strikes a terrifying force of nature.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Azura Doomstrike", detail: "Azura’s strikes carry doom with them, each blow bringing the battlefield closer to destruction.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Thalira Darkwing", detail: "Thalira’s wings are as dark as midnight, her presence a terrifying force of night and terror.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Valina Blackheart", detail: "Valina’s heart beats with darkness, her soul unyielding as she strikes with deadly force.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Drusilla Nightshard", detail: "Drusilla’s strikes cut through the night like a shard of ice, her attacks as cold and deadly as death itself.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Irina Blackflare", detail: "Irina’s flare of black fire burns with a deadly intensity, her enemies falling before her wrath.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Felicity Bloodshade", detail: "Felicity’s blade is dipped in blood, its strikes leaving shadows of death in their wake.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Kalina Dreadfang", detail: "Kalina’s fangs are forged in dread, her strikes bringing terror to all who face her.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Seris Shadowflame", detail: "Seris commands both shadow and flame, her attacks terrifyingly destructive and swift.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Evora Doomshadow", detail: "Evora’s shadow heralds doom, her every move bringing an aura of finality and destruction.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Korrina Blackblade", detail: "Korrina’s black blade strikes with the force of darkness itself, a lethal weapon in her skilled hands.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Elira Darkstorm", detail: "Elira’s storm is as dark as her soul, her wrath a deadly force that brings chaos to the battlefield.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Rhiannon Deathstrike", detail: "Rhiannon’s strikes are final, a deadly force that leaves no room for mercy.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Adira Nightshield", detail: "Adira’s shield is as dark as the night, her protection a terrifying defense against any foe.", status: false, gender: "Female", type: "Fearsome Paladin" },
  { name: "Zephyr Darkflame", detail: "Zephyr’s flame is as dark as the abyss, a force of destruction and chaos.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Ashlin Dreadstrike", detail: "Ashlin’s strikes carry dread with them, leaving terror in their wake as they cut through the air.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Rowan Nightshade", detail: "Rowan’s presence is as deadly as a shadowed night, their strikes swift and silent.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Kieran Bloodstrike", detail: "Kieran’s strikes are powered by blood, each blow a sacrifice to the cause of battle.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Solara Doomblade", detail: "Solara’s blade is forged in doom, its edge cutting through hope and light alike.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Arlen Darkfang", detail: "Arlen’s fangs are dark as night, striking with the precision and ferocity of a predator.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Thorne Shadowfire", detail: "Thorne’s fire is as dark as shadows, an inferno that burns with sinister intent.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Rowan Stormblade", detail: "Rowan’s blade cuts through the storm, their strikes as swift and unpredictable as lightning.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Emory Blackflame", detail: "Emory’s flame is the color of midnight, scorching all who dare oppose them.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Aleron Nightguard", detail: "Aleron guards the night, their defense as unwavering and impenetrable as the darkness itself.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Tarian Doomstrike", detail: "Tarian strikes with doom, their every blow bringing devastation to the enemy’s ranks.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Kyros Nightflame", detail: "Kyros’ flame burns as dark as the night, consuming everything in its path.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Briar Shadowstrike", detail: "Briar strikes from the shadows, their movements as silent and deadly as a viper.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Sylas Darkheart", detail: "Sylas’ heart beats with darkness, their soul unyielding in the face of adversity.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Fallon Deathblade", detail: "Fallon’s blade brings death, its edge sharp enough to cleave through both flesh and soul.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Orion Bloodshade", detail: "Orion’s shadow is drenched in blood, their attacks as brutal as they are efficient.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Ryker Dreadflare", detail: "Ryker’s flare burns with dread, an inferno that consumes everything in its path.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Kaelen Shadowshield", detail: "Kaelen’s shield is as dark as the night, their protection as impenetrable as the deepest shadows.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Fenn Deathbringer", detail: "Fenn brings death with every step, their presence an omen of destruction and finality.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Solace Darkflame", detail: "Solace’s flame is dark and consuming, a deadly force that seeks only destruction.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Zarek Doomfang", detail: "Zarek’s fangs bite deep, their strikes imbued with the force of doom and despair.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Vesper Bloodbane", detail: "Vesper’s bane is blood, their attacks ripping through enemies with relentless fury.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Briar Dreadstrike", detail: "Briar’s strikes are filled with dread, each blow an omen of terror and destruction.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Eldric Darkwing", detail: "Eldric’s wings are dark as night, their shadow sweeping over the battlefield like a storm.", status: false, gender: "Unisex", type: "Fearsome Paladin" },
  { name: "Theron Nightbringer", detail: "Theron brings the night with them, their strikes swift and deadly under the cover of darkness.", status: false, gender: "Unisex", type: "Fearsome Paladin" },

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
    name: "WoW Name Generator",
    pic: "/wow.jpg",
    link: "https://www.nameideagenerator.com/wow-name-generator",
},
{
    name: "saiyan Name Generator",
    pic: "/saiyan3.jpg",
    link: "https://www.nameideagenerator.com/saiyan-name-generator",
},
{
    name: "Pirate Name Generator",
    pic: "/pirate-name-generator.avif",
    link: "https://www.nameideagenerator.com/pirate-name-generator",
},
{
    name: "Druid Name Generator",
    pic: "/druid-name-generator.jpg",
    link: "https://www.nameideagenerator.com/druid-name-generator",
},
];

const PaladinNameGenerator = () => {
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
  
const bgImage = "/paladin-name-generator.jpg"
const context = "Paladin Name Generator for Dungeons & Dragons with Meaning"
const Q1 = "How does the Paladin Name Generator work?"
const A1 = "The Paladin Name Generator creates four unique names with meanings based on your selected gender and category. Simply choose your desired options, and the tool will instantly generate names that fit your character's story."

const Q2 = "Can I generate Paladin names for any gender?"
const A2 = "Yes, the generator offers male, female, and unisex name options. You can choose the gender that best fits your Paladin character."

const Q3 = "What categories of Paladin names can I choose from?"
const A3 = "You can select from categories like Virtuous, Fearsome, or Holy. Each category tailors the names to fit different aspects of a Paladin's character, whether they are a noble protector, a powerful warrior, or a divine figure."

const Q4 = "How many names can I generate at once?"
const A4 = "The Paladin Name Generator provides four name options at a time. This allows you to choose the name that best fits your character or campaign."

const Q5 = "Are the names generated customizable?"
const A5 = "While the names are based on your selected gender and category, each name comes with a unique meaning and backstory, offering inspiration for further customization. You can adapt the name to better fit your character's personality and journey."
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
      <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Fictional and Sci-Fi Names</a>
    </li>
    <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 19l7-7-7-7"></path>
    </svg>
    <li className="flex items-center">
      <a href="/paladin-name-generator" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Paladin Name Generator</a>
    </li>
  </ol>
</nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Paladin Name Generator with Meaning Tool
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
            <p className="text-center text-[#343a40]">Types of Paladin Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Virtuous Paladin">Virtuous</option>
              <option value="Holy Paladin">Holy</option>
              <option value="Fearsome Paladin">Fearsome</option>
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
            What Is a Paladin Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            A Paladin Name Generator creates names for Paladins, legendary characters with holy powers. 
            Paladins are known for their strength, righteousness, and divine missions. Our tool ensures you get names that reflect these qualities.
            <br />
            The generator also adds meaning to each name. Each name has a backstory that enhances your character's identity. 
            You won’t just get random names; you’ll discover ones that resonate with your Paladin's purpose.
            </p>
            
          </div>
        </div>
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use the Paladin Name Generator?
            </h2>
            <hr />
            <br />
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Create Names with Depth
            </h3>
            <p className="text-left mt-[10px]  py-[10px] text-[#343a40]">
            This tool offers more than just random name generation. It helps you craft paladin names that resonate with meaning and purpose. 
            Each name reflects qualities like holy power, bravery, and honor, 
            capturing the essence of what it means to be a paladin. These names align with the paladin’s journey and their role in your story.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Instant Results Based on Your Preferences
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            Our generator doesn’t keep you waiting. You’ll receive instant name suggestions that fit your desired style and theme. 
            Whether you prefer traditional, classic names or those inspired by high fantasy, the tool adapts to meet your specific needs.
            </p>
            <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
            Customize for Your Paladin’s Story
            </h3>
            <p className="text-left mt-[10px] py-[10px] text-[#343a40]">
            Each paladin has a unique story. Whether your character is a noble knight, a rogue crusader, or a holy champion, you can fine-tune the name generation process. 
            You can select from different categories—holy, virtuous, or fearsome—to find a name that suits their backstory and role perfectly.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use Our Paladin Name Generator Tool
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose a Paladin Gender <b>  (Male, Female, Unisex) </b>
              </h3>
              <p>
              Select from Male, Female, or Unisex. This option allows you to tailor the names to fit the gender of the Paladin you're creating.    
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Select a Name Category <b>(Virtuous, Holy, or Fearsome)</b>
              </h3>
              <p>
              Choose a name type that matches your Paladin's role in the story. Options include:
              <ul>
              <li><b>- Virtuous:</b> Ideal for a noble and righteous Paladin</li>
              <li><b>- Holy:</b> Perfect for a divine figure, a defender of good</li>
              <li><b>- Fearsome:</b> Great for a battle-hardened, intimidating warrior</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b> for Unique Names
              </h3>
              <p>
              Once you've selected the <b>Gender</b> and category, hit the Generate button. 
              The tool will instantly provide you with four unique Paladin names, each with a meaningful backstory.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Pick Your Perfect Name
              </h3>
              <p>
              Look through the list of generated names. Each name will come with a short description or meaning. 
              Select the one that best fits your Paladin’s personality, backstory, and role in your campaign or story.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="knight-armor-sword.jpg"
              alt="Paladin Name Generator with Meaning"
              className="w-[300px] my-[20px] h-[330px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="desktop-wallpaper-legolas-thumbnail.jpg"
              alt="Paladin Name Generator with Meaning"
              className="w-[300px] h-[330px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/digital-art-artwork-video-games-women.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Paladin Name Generator
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
          <b>Unique Features of the Paladin Name Generator</b>
          </h2>
          <p className="text-[#343a40]">
          The Paladin Name Generator stands out for its meaningful names. Each name isn’t just random; it has a backstory that fits the Paladin’s divine nature.
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold">
          <b>Meaningful Paladin Names with Backstories</b>
            </h3>
            <p>
            Our Paladin Name tool generates names with rich histories. Every Paladin name comes with a backstory that aligns with their heroic and divine traits. 
            This feature ensures your Paladin’s name feels grounded and powerful.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Customizable Name Categories for Paladins</b> 
            </h3>
            <p>
            You can customize the names according to your preferences. Choose from categories like Virtuous, Fearsome, or Holy to suit the character you’re building. 
            This flexibility allows you to tailor the name to your specific needs.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Gender-Specific Paladin Names</b>   
          </h3>
            <p>
            The generator provides gender-specific names, ensuring that your Paladin’s name fits the character’s gender and role. 
            Whether you need a strong male, female, or unisex name, we’ve got you covered.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Versatility in Name Generation</b>   
            </h3>
            <p>
            Whether you're crafting a brave Paladin or a more fearsome character, the generator gives you options. 
            It offers names that reflect different traits like honor, strength, and divine power, providing versatility for any creative project.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-semibold ">
            <b>Instant Paladin Name Results</b>   
            </h3>
            <p>
            Need a name quickly? Our tool generates four unique names in seconds. You won’t have to waste time brainstorming; just choose a gender and category, and get instant results.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Paladin Names by Gender & Categories Options</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
           <b>By Gender</b>
            </h3>
            <p> 
             <b>Male Paladin Names: </b>
             Male Paladins require names that embody strength, courage, and honor. Our tool generates names that reflect these heroic traits, 
             making them perfect for warriors, leaders, or defenders of justice. 
             These names are designed to inspire valor and authority, capturing the essence of a male Paladin's role in your story or campaign
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Female Paladin Names: </b>
            Female Paladins need names that combine grace and strength. Our tool ensures every name conveys both elegance and power,
             ideal for characters who are not only fierce in battle but also embody the virtues of compassion, justice, and honor. 
            These names work perfectly for protectors, crusaders, and divine figures.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Unisex Githyanki Names: </b>
            Unisex names offer flexibility and creativity, allowing for a broader range of characters. These names are well-suited for Paladins of any gender, 
            giving you the freedom to create a wide variety of personalities. 
            Whether you're crafting a heroic, battle-ready warrior or a gentle, yet powerful protector, our tool provides the right name for every Paladin.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[20px] sm:font-normal font-bold">
          <b>Paladin Names by Category</b>
            </h3>
            <p> <b>Virtuous Paladin Names: </b>
            Virtuous names evoke the nobility and righteousness that define the essence of a Paladin. 
            These names are perfect for characters dedicated to upholding justice, protecting the innocent, and fighting for the greater good. 
            Our tool generates names that reflect the Paladin's devotion to virtue and the holy cause they serve.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Holy Paladin Names: </b>
            Holy names are for Paladins with divine power, chosen by gods to carry out their will. These names symbolize purity, devotion, and unwavering faith. 
            Our tool ensures that every Holy Paladin name fits a character who is connected to celestial forces, wielding divine power to banish evil and protect the light.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p> <b>Fearsome Paladin Names: </b>
            Fearsome Paladins are known for their strength and unyielding will to protect. 
            These names carry a sense of power and intimidation, perfect for warriors who are not only skilled in battle but also instill fear in their enemies. 
            Our tool provides names that emphasize courage, might, and a relentless drive to defeat evil.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[20px] ">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
        <b>List of Paladin Names by Gender and Category</b>
          </h2>
          <p>
          Here's a curated list of names to inspire your next campaign. 
          These names resonate deeply with Paladin culture and can fit seamlessly into your stories, adding authenticity and depth to your characters.
          </p>
        </div>
        <hr />
        <div className="py-[10px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[70%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Male Paladin Names
              </h3>
              <p><b>Virtuous Paladin Names</b>
              <ul>
              <li><b>- Valorcrest:</b>  A name symbolizing bravery and honor, ideal for a noble and just Paladin</li>
              <li><b>- Aelric the Brave:</b> A name representing courage in battle, perfect for a heroic and righteous leader</li>
              <li><b>- Thalion Lightbringer:</b> A name reflecting a Paladin who carries the light of justice wherever he goes</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Fearsome Paladin Names</b>
              <ul>
              <li><b>- Baldric Ironheart:</b> A name representing unwavering strength and loyalty, ideal for a fierce protector</li>
              <li><b>- Grimvald the Valiant:</b> A name symbolizing unyielding determination, suitable for a Paladin who never backs down</li>
              <li><b>- Karnath the Mighty:</b> A name evoking power and dominance in battle, perfect for a fearsome warrior</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
                <b>Holy Paladin Names</b>
              <ul>
              <li><b>- Eldric Lightbearer: </b>Signifying a Paladin chosen to uphold divine law and spread light in dark times</li>
              <li><b>- Thalor Sunshield: </b>A name symbolizing divine protection and the power to guard against evil</li>
              <li><b>- Auron the Pure: </b>A name reflecting purity and righteousness, perfect for a Paladin dedicated to the forces of good</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="thumb-1920-376667.jpg"
              alt="Paladin Name Generator with Meaning"
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
              Female Paladin Names
              </h3>
              <p>
              <b>Virtuous Paladin Names</b>
              <ul>
              <li><b>- Seraphina the Lightbringer: </b>A name reflecting divine purity and a Paladin chosen to bring light to the world</li>
              <li><b>- Elowen the Pure: </b>A name symbolizing innocence and holiness, ideal for a protector of the innocent</li>
              <li><b>- Valera Dawnshard: </b>A name that represents the first light of day, perfect for a Paladin who fights for justice</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Fearsome Paladin Names</b>
              <ul>
              <li><b>- Isolde the Valiant: </b>A name meaning brave, ideal for a fierce warrior who fights for honor</li>
              <li><b>- Liora Flamekeeper: </b>A name evoking the eternal fire of justice and righteousness, perfect for a strong-willed Paladin</li>
              <li><b>- Kaelen Bloodhunter: </b>A name signifying a Paladin who is relentless in battle and always seeks vengeance for the weak</li>
            </ul>
              </p>
            </div> <div className="py-[10px] flex flex-col gap-2">
              <p>
              <b>Holy Paladin Names</b>
              <ul>
              <li><b>- Maelis Dawnshard: </b>A name that evokes divine power, perfect for a Paladin chosen to banish darkness</li>
              <li><b>- Celestia Starborn: </b>A name reflecting a connection to the stars and divine powers, ideal for a celestial Paladin</li>
              <li><b>- Althea the Blessed: </b>A name symbolizing divine favor and purity, ideal for a Paladin who serves the gods directly</li>
            </ul>
              </p>
            </div>
          </div>
          <div className="sm:w-[50%] relative ">
            <img
              src="paladins-champions-of-the-realm-maeve-paladins-women-knife-wallpaper-preview.jpg"
              alt="Paladin Name Generator with Meaning"
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
          <a href="https://www.nameideagenerator.com/contact-us">
  <button className="bg-white text-black text-[20px] px-[20px] py-[16px] rounded-[10px] font-semibold">
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

export default PaladinNameGenerator;

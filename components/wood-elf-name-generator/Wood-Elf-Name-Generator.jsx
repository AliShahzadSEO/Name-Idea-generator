"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Thalion Leafblade", detail: "Brave and sharp as a blade.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Elrohir Oakshield", detail: "Sturdy and protective like an oak.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Caelum Greenbark", detail: "Firm and connected to nature.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Faelan Mossheart", detail: "Soft-hearted yet resilient.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Ithildin Thornroot", detail: "Strong and grounded.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Aldor Fernshadow", detail: "Mystical and elusive.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Galen Willowbranch", detail: "Graceful and wise.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Riven Briarclaw", detail: "Fierce and formidable.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Sylvar Windwhisper", detail: "Silent and swift.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Eldrin Duskleaf", detail: "Mysterious and enigmatic.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Thalion Greenbark", detail: "Strong and nature-bound.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Elrohir Mossheart", detail: "Compassionate and nurturing.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Caelum Leafblade", detail: "Agile and sharp.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Faelan Thornroot", detail: "Deeply rooted and protective.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Ithildin Oakshield", detail: "Stalwart and protective.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Aldor Windwhisper", detail: "Swift and elusive.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Galen Briarclaw", detail: "Tough and relentless.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Riven Fernshadow", detail: "Quiet and mysterious.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Sylvar Willowbranch", detail: "Wise and agile.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Eldrin Duskleaf", detail: "Enigmatic and wise.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Thalion Mossheart", detail: "Compassionate and firm.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Elrohir Briarclaw", detail: "Relentless and fierce.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Caelum Oakshield", detail: "Stalwart and protective.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Faelan Windwhisper", detail: "Quick and silent.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Ithildin Greenbark", detail: "Connected and strong.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Aldor Leafblade", detail: "Sharp and decisive.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Galen Duskleaf", detail: "Wise and enigmatic.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Riven Thornroot", detail: "Grounded and resilient.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Sylvar Fernshadow", detail: "Mysterious and silent.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Eldrin Willowbranch", detail: "Graceful and wise.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Thalion Oakshield", detail: "Strong and protective.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Elrohir Thornroot", detail: "Resilient and grounded.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Caelum Fernshadow", detail: "Mysterious and connected.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Faelan Greenbark", detail: "Firm and nurturing.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Ithildin Briarclaw", detail: "Tough and relentless.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Aldor Duskleaf", detail: "Enigmatic and wise.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Galen Leafblade", detail: "Sharp and wise.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Riven Mossheart", detail: "Compassionate and connected.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Sylvar Thornroot", detail: "Strong and grounded.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Eldrin Windwhisper", detail: "Silent and swift.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Thalion Willowbranch", detail: "Graceful and wise.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Elrohir Fernshadow", detail: "Mysterious and connected.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Caelum Briarclaw", detail: "Fierce and relentless.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Faelan Leafblade", detail: "Sharp and compassionate.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Ithildin Windwhisper", detail: "Quick and silent.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Aldor Greenbark", detail: "Strong and connected.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Galen Mossheart", detail: "Compassionate and nurturing.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Riven Oakshield", detail: "Protective and sturdy.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Sylvar Duskleaf", detail: "Mysterious and wise.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Eldrin Thornroot", detail: "Strong and grounded.", status: false, gender: "male", type: "forest_guardian" },
      { name: "Elysia Moonshadow", detail: "Mystical and ethereal.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lirael Fernbloom", detail: "Flourishing and graceful.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Aerin Willowshade", detail: "Gentle and nurturing.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Thalia Leafsong", detail: "Melodic and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Seraphina Greenveil", detail: "Serene and protective.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elowen Mossdancer", detail: "Graceful and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Caelia Thornwhisper", detail: "Mysterious and strong.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Nymeria Wildbloom", detail: "Untamed and flourishing.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lira Greenleaf", detail: "Vibrant and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Faelara Duskwind", detail: "Silent and swift.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elysia Willowshade", detail: "Gentle and nurturing.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lirael Greenveil", detail: "Serene and protective.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Aerin Thornwhisper", detail: "Strong and mysterious.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Thalia Wildbloom", detail: "Untamed and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Seraphina Fernbloom", detail: "Flourishing and graceful.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elowen Leafsong", detail: "Melodic and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Caelia Duskwind", detail: "Silent and swift.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Nymeria Greenleaf", detail: "Vibrant and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lira Mossdancer", detail: "Graceful and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Faelara Fernbloom", detail: "Flourishing and graceful.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elysia Thornwhisper", detail: "Mysterious and strong.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lirael Wildbloom", detail: "Untamed and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Aerin Leafsong", detail: "Melodic and nurturing.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Thalia Duskwind", detail: "Silent and swift.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Seraphina Mossdancer", detail: "Graceful and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elowen Greenveil", detail: "Serene and protective.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Caelia Wildbloom", detail: "Untamed and flourishing.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Nymeria Leafsong", detail: "Melodic and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lira Duskwind", detail: "Silent and swift.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Faelara Thornwhisper", detail: "Mysterious and strong.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elysia Greenleaf", detail: "Vibrant and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lirael Mossdancer", detail: "Graceful and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Aerin Greenveil", detail: "Serene and nurturing.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Thalia Fernbloom", detail: "Flourishing and graceful.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Seraphina Wildbloom", detail: "Untamed and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elowen Thornwhisper", detail: "Mysterious and strong.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Caelia Fernbloom", detail: "Flourishing and graceful.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Nymeria Greenleaf", detail: "Vibrant and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lira Leafsong", detail: "Melodic and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Faelara Duskwind", detail: "Silent and swift.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elysia Mossdancer", detail: "Graceful and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lirael Greenleaf", detail: "Vibrant and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Aerin Fernbloom", detail: "Flourishing and graceful.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Thalia Thornwhisper", detail: "Mysterious and strong.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Seraphina Duskwind", detail: "Silent and swift.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Elowen Wildbloom", detail: "Untamed and flourishing.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Caelia Leafsong", detail: "Melodic and lively.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Nymeria Mossdancer", detail: "Graceful and connected.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Lira Thornwhisper", detail: "Mysterious and strong.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Faelara Greenveil", detail: "Serene and protective.", status: false, gender: "female", type: "forest_guardian" },
      { name: "Rowan Oakenshield", detail: "Strong and protective.", status: false, gender: "male", type: "nature_warden" },
      { name: "Eryndor Greenwatch", detail: "Vigilant and wise.", status: false, gender: "male", type: "nature_warden" },
      { name: "Thrandor Wildheart", detail: "Fierce and untamed.", status: false, gender: "male", type: "nature_warden" },
      { name: "Lorien Fernshadow", detail: "Stealthy and calm.", status: false, gender: "male", type: "nature_warden" },
      { name: "Varian Leafwalker", detail: "Graceful and grounded.", status: false, gender: "male", type: "nature_warden" },
      { name: "Fenrir Mossguard", detail: "Loyal and steadfast.", status: false, gender: "male", type: "nature_warden" },
      { name: "Silas Woodward", detail: "Skilled and patient.", status: false, gender: "male", type: "nature_warden" },
      { name: "Elros Thornwhisper", detail: "Mysterious and sharp.", status: false, gender: "male", type: "nature_warden" },
      { name: "Alaric Barkshade", detail: "Resilient and sturdy.", status: false, gender: "male", type: "nature_warden" },
      { name: "Arannis Sunleaf", detail: "Bright and inspiring.", status: false, gender: "male", type: "nature_warden" },
      { name: "Rowan Fernshadow", detail: "Stealthy and calm.", status: false, gender: "male", type: "nature_warden" },
      { name: "Eryndor Wildheart", detail: "Fierce and untamed.", status: false, gender: "male", type: "nature_warden" },
      { name: "Thrandor Greenwatch", detail: "Vigilant and wise.", status: false, gender: "male", type: "nature_warden" },
      { name: "Lorien Oakenshield", detail: "Strong and protective.", status: false, gender: "male", type: "nature_warden" },
      { name: "Varian Thornwhisper", detail: "Mysterious and sharp.", status: false, gender: "male", type: "nature_warden" },
      { name: "Fenrir Leafwalker", detail: "Graceful and grounded.", status: false, gender: "male", type: "nature_warden" },
      { name: "Silas Mossguard", detail: "Loyal and steadfast.", status: false, gender: "male", type: "nature_warden" },
      { name: "Elros Sunleaf", detail: "Bright and inspiring.", status: false, gender: "male", type: "nature_warden" },
      { name: "Alaric Woodward", detail: "Skilled and patient.", status: false, gender: "male", type: "nature_warden" },
      { name: "Arannis Barkshade", detail: "Resilient and sturdy.", status: false, gender: "male", type: "nature_warden" },
      { name: "Rowan Mossguard", detail: "Loyal and steadfast.", status: false, gender: "male", type: "nature_warden" },
      { name: "Eryndor Leafwalker", detail: "Graceful and grounded.", status: false, gender: "male", type: "nature_warden" },
      { name: "Thrandor Thornwhisper", detail: "Mysterious and sharp.", status: false, gender: "male", type: "nature_warden" },
      { name: "Lorien Woodward", detail: "Skilled and patient.", status: false, gender: "male", type: "nature_warden" },
      { name: "Varian Greenwatch", detail: "Vigilant and wise.", status: false, gender: "male", type: "nature_warden" },
      { name: "Fenrir Sunleaf", detail: "Bright and inspiring.", status: false, gender: "male", type: "nature_warden" },
      { name: "Silas Oakenshield", detail: "Strong and protective.", status: false, gender: "male", type: "nature_warden" },
      { name: "Elros Fernshadow", detail: "Stealthy and calm.", status: false, gender: "male", type: "nature_warden" },
      { name: "Alaric Wildheart", detail: "Fierce and untamed.", status: false, gender: "male", type: "nature_warden" },
      { name: "Arannis Greenwatch", detail: "Vigilant and wise.", status: false, gender: "male", type: "nature_warden" },
      { name: "Rowan Woodward", detail: "Skilled and patient.", status: false, gender: "male", type: "nature_warden" },
      { name: "Eryndor Sunleaf", detail: "Bright and inspiring.", status: false, gender: "male", type: "nature_warden" },
      { name: "Thrandor Fernshadow", detail: "Stealthy and calm.", status: false, gender: "male", type: "nature_warden" },
      { name: "Lorien Mossguard", detail: "Loyal and steadfast.", status: false, gender: "male", type: "nature_warden" },
      { name: "Varian Wildheart", detail: "Fierce and untamed.", status: false, gender: "male", type: "nature_warden" },
      { name: "Fenrir Oakenshield", detail: "Strong and protective.", status: false, gender: "male", type: "nature_warden" },
      { name: "Silas Leafwalker", detail: "Graceful and grounded.", status: false, gender: "male", type: "nature_warden" },
      { name: "Elros Barkshade", detail: "Resilient and sturdy.", status: false, gender: "male", type: "nature_warden" },
      { name: "Alaric Thornwhisper", detail: "Mysterious and sharp.", status: false, gender: "male", type: "nature_warden" },
      { name: "Arannis Wildheart", detail: "Fierce and untamed.", status: false, gender: "male", type: "nature_warden" },
      { name: "Rowan Leafwalker", detail: "Graceful and grounded.", status: false, gender: "male", type: "nature_warden" },
      { name: "Eryndor Barkshade", detail: "Resilient and sturdy.", status: false, gender: "male", type: "nature_warden" },
      { name: "Thrandor Sunleaf", detail: "Bright and inspiring.", status: false, gender: "male", type: "nature_warden" },
      { name: "Lorien Thornwhisper", detail: "Mysterious and sharp.", status: false, gender: "male", type: "nature_warden" },
      { name: "Varian Woodward", detail: "Skilled and patient.", status: false, gender: "male", type: "nature_warden" },
      { name: "Fenrir Fernshadow", detail: "Stealthy and calm.", status: false, gender: "male", type: "nature_warden" },
      { name: "Silas Wildheart", detail: "Fierce and untamed.", status: false, gender: "male", type: "nature_warden" },
      { name: "Elros Greenwatch", detail: "Vigilant and wise.", status: false, gender: "male", type: "nature_warden" },
      { name: "Alaric Mossguard", detail: "Loyal and steadfast.", status: false, gender: "male", type: "nature_warden" },
      { name: "Arannis Oakenshield", detail: "Strong and protective.", status: false, gender: "male", type: "nature_warden" },
      { name: "Aria Leafwhisper", detail: "Soft-spoken and gentle.", status: false, gender: "female", type: "nature_warden" },
      { name: "Sylvana Mossbloom", detail: "Vibrant and nurturing.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elara Greenbriar", detail: "Steady and resourceful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Thalia Wildroot", detail: "Untamed and free.", status: false, gender: "female", type: "nature_warden" },
      { name: "Linnea Oakenshade", detail: "Strong and protective.", status: false, gender: "female", type: "nature_warden" },
      { name: "Mira Thornveil", detail: "Mysterious and sharp.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elowen Willowbloom", detail: "Graceful and beautiful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Niamh Forestheart", detail: "Brave and courageous.", status: false, gender: "female", type: "nature_warden" },
      { name: "Selene Greenfrost", detail: "Cool and composed.", status: false, gender: "female", type: "nature_warden" },
      { name: "Eirlys Sunbloom", detail: "Radiant and joyful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Aria Wildroot", detail: "Untamed and free.", status: false, gender: "female", type: "nature_warden" },
      { name: "Sylvana Greenbriar", detail: "Steady and resourceful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elara Thornveil", detail: "Mysterious and sharp.", status: false, gender: "female", type: "nature_warden" },
      { name: "Thalia Mossbloom", detail: "Vibrant and nurturing.", status: false, gender: "female", type: "nature_warden" },
      { name: "Linnea Greenfrost", detail: "Cool and composed.", status: false, gender: "female", type: "nature_warden" },
      { name: "Mira Leafwhisper", detail: "Soft-spoken and gentle.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elowen Oakenshade", detail: "Strong and protective.", status: false, gender: "female", type: "nature_warden" },
      { name: "Niamh Willowbloom", detail: "Graceful and beautiful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Selene Sunbloom", detail: "Radiant and joyful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Eirlys Forestheart", detail: "Brave and courageous.", status: false, gender: "female", type: "nature_warden" },
      { name: "Aria Greenbriar", detail: "Steady and resourceful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Sylvana Leafwhisper", detail: "Soft-spoken and gentle.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elara Sunbloom", detail: "Radiant and joyful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Thalia Thornveil", detail: "Mysterious and sharp.", status: false, gender: "female", type: "nature_warden" },
      { name: "Linnea Wildroot", detail: "Untamed and free.", status: false, gender: "female", type: "nature_warden" },
      { name: "Mira Oakenshade", detail: "Strong and protective.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elowen Mossbloom", detail: "Vibrant and nurturing.", status: false, gender: "female", type: "nature_warden" },
      { name: "Niamh Greenfrost", detail: "Cool and composed.", status: false, gender: "female", type: "nature_warden" },
      { name: "Selene Forestheart", detail: "Brave and courageous.", status: false, gender: "female", type: "nature_warden" },
      { name: "Eirlys Willowbloom", detail: "Graceful and beautiful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Aria Thornveil", detail: "Mysterious and sharp.", status: false, gender: "female", type: "nature_warden" },
      { name: "Sylvana Sunbloom", detail: "Radiant and joyful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elara Wildroot", detail: "Untamed and free.", status: false, gender: "female", type: "nature_warden" },
      { name: "Thalia Leafwhisper", detail: "Soft-spoken and gentle.", status: false, gender: "female", type: "nature_warden" },
      { name: "Linnea Willowbloom", detail: "Graceful and beautiful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Mira Greenfrost", detail: "Cool and composed.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elowen Forestheart", detail: "Brave and courageous.", status: false, gender: "female", type: "nature_warden" },
      { name: "Niamh Mossbloom", detail: "Vibrant and nurturing.", status: false, gender: "female", type: "nature_warden" },
      { name: "Selene Oakenshade", detail: "Strong and protective.", status: false, gender: "female", type: "nature_warden" },
      { name: "Eirlys Greenbriar", detail: "Steady and resourceful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Aria Willowbloom", detail: "Graceful and beautiful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Sylvana Forestheart", detail: "Brave and courageous.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elara Oakenshade", detail: "Strong and protective.", status: false, gender: "female", type: "nature_warden" },
      { name: "Thalia Greenbriar", detail: "Steady and resourceful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Linnea Thornveil", detail: "Mysterious and sharp.", status: false, gender: "female", type: "nature_warden" },
      { name: "Mira Mossbloom", detail: "Vibrant and nurturing.", status: false, gender: "female", type: "nature_warden" },
      { name: "Elowen Greenfrost", detail: "Cool and composed.", status: false, gender: "female", type: "nature_warden" },
      { name: "Niamh Leafwhisper", detail: "Soft-spoken and gentle.", status: false, gender: "female", type: "nature_warden" },
      { name: "Selene Wildroot", detail: "Untamed and free.", status: false, gender: "female", type: "nature_warden" },
      { name: "Eirlys Sunbloom", detail: "Radiant and joyful.", status: false, gender: "female", type: "nature_warden" },
      { name: "Thalor Shadowstalker", detail: "Silent and deadly.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Arannis Greenarrow", detail: "Sharp and precise.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elandor Mossstride", detail: "Stealthy and swift.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Fenwick Leafrunner", detail: "Quick and agile.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Sylas Barkshade", detail: "Tough and resilient.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Kaelin Thornstrike", detail: "Sharp and fierce.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Rhovanion Swiftwind", detail: "Light and fast.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elendir Moonshadow", detail: "Mysterious and elusive.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Galadir Nightbloom", detail: "Dark and dangerous.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Aelor Windwhisper", detail: "Quiet and discreet.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Thalor Mossstride", detail: "Stealthy and swift.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Arannis Shadowstalker", detail: "Silent and deadly.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elandor Greenarrow", detail: "Sharp and precise.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Fenwick Barkshade", detail: "Tough and resilient.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Sylas Leafrunner", detail: "Quick and agile.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Kaelin Moonshadow", detail: "Mysterious and elusive.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Rhovanion Thornstrike", detail: "Sharp and fierce.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elendir Windwhisper", detail: "Quiet and discreet.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Galadir Leafrunner", detail: "Quick and agile.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Aelor Nightbloom", detail: "Dark and dangerous.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Thalor Thornstrike", detail: "Sharp and fierce.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Arannis Leafrunner", detail: "Quick and agile.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elandor Shadowstalker", detail: "Silent and deadly.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Fenwick Nightbloom", detail: "Dark and dangerous.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Sylas Greenarrow", detail: "Sharp and precise.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Kaelin Barkshade", detail: "Tough and resilient.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Rhovanion Shadowstalker", detail: "Silent and deadly.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elendir Swiftwind", detail: "Light and fast.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Galadir Mossstride", detail: "Stealthy and swift.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Aelor Leafrunner", detail: "Quick and agile.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Thalor Nightbloom", detail: "Dark and dangerous.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Arannis Windwhisper", detail: "Quiet and discreet.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elandor Barkshade", detail: "Tough and resilient.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Fenwick Thornstrike", detail: "Sharp and fierce.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Sylas Swiftwind", detail: "Light and fast.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Kaelin Greenarrow", detail: "Sharp and precise.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Rhovanion Barkshade", detail: "Tough and resilient.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elendir Mossstride", detail: "Stealthy and swift.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Galadir Shadowstalker", detail: "Silent and deadly.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Aelor Greenarrow", detail: "Sharp and precise.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Thalor Swiftwind", detail: "Light and fast.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Arannis Barkshade", detail: "Tough and resilient.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elandor Leafrunner", detail: "Quick and agile.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Fenwick Greenarrow", detail: "Sharp and precise.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Sylas Nightbloom", detail: "Dark and dangerous.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Kaelin Windwhisper", detail: "Quiet and discreet.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Rhovanion Mossstride", detail: "Stealthy and swift.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Elendir Thornstrike", detail: "Sharp and fierce.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Galadir Swiftwind", detail: "Light and fast.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Aelor Leafrunner", detail: "Quick and agile.", status: false, gender: "male", type: "sylvan_ranger" },
      { name: "Lyriana Swiftwind", detail: "Graceful and fast.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Seraphina Greenbloom", detail: "Nurturing and strong.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aria Thornshade", detail: "Sharp and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elowen Mossleaf", detail: "Stealthy and quiet.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Nerys Moonwhisper", detail: "Mysterious and wise.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aelira Nightbloom", detail: "Dark and beautiful.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Thalia Leafdancer", detail: "Light and agile.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Caelia Windrider", detail: "Free and swift.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Sylva Mossveil", detail: "Hidden and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elyndra Fernshade", detail: "Soft and resilient.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Lyriana Nightbloom", detail: "Dark and beautiful.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Seraphina Swiftwind", detail: "Graceful and fast.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aria Moonwhisper", detail: "Mysterious and wise.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elowen Leafdancer", detail: "Light and agile.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Nerys Mossveil", detail: "Hidden and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aelira Thornshade", detail: "Sharp and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Thalia Greenbloom", detail: "Nurturing and strong.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Caelia Moonwhisper", detail: "Mysterious and wise.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Sylva Fernshade", detail: "Soft and resilient.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elyndra Windrider", detail: "Free and swift.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Lyriana Thornshade", detail: "Sharp and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Seraphina Windrider", detail: "Free and swift.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aria Swiftwind", detail: "Graceful and fast.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elowen Greenbloom", detail: "Nurturing and strong.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Nerys Leafdancer", detail: "Light and agile.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aelira Mossveil", detail: "Hidden and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Thalia Moonwhisper", detail: "Mysterious and wise.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Caelia Fernshade", detail: "Soft and resilient.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Sylva Greenbloom", detail: "Nurturing and strong.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elyndra Nightbloom", detail: "Dark and beautiful.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Lyriana Leafdancer", detail: "Light and agile.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Seraphina Mossveil", detail: "Hidden and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aria Fernshade", detail: "Soft and resilient.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elowen Windrider", detail: "Free and swift.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Nerys Greenbloom", detail: "Nurturing and strong.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aelira Leafdancer", detail: "Light and agile.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Thalia Swiftwind", detail: "Graceful and fast.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Caelia Thornshade", detail: "Sharp and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Sylva Nightbloom", detail: "Dark and beautiful.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elyndra Mossveil", detail: "Hidden and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Lyriana Greenbloom", detail: "Nurturing and strong.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Seraphina Moonwhisper", detail: "Mysterious and wise.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aria Nightbloom", detail: "Dark and beautiful.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elowen Thornshade", detail: "Sharp and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Nerys Swiftwind", detail: "Graceful and fast.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Aelira Fernshade", detail: "Soft and resilient.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Thalia Mossveil", detail: "Hidden and protective.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Caelia Greenbloom", detail: "Nurturing and strong.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Sylva Windrider", detail: "Free and swift.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Elyndra Leafdancer", detail: "Light and agile.", status: false, gender: "female", type: "sylvan_ranger" },
      { name: "Riven Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldor Stormbranch", detail: "Strong and enduring.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Faelan Nightwood", detail: "Stealthy and observant.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Thalon Moonthorn", detail: "Sharp and tactical.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Galen Darkbark", detail: "Resilient and grounded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Sylas Ironleaf", detail: "Tough and dependable.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Aelor Windbriar", detail: "Swift and free-spirited.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Loric Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldric Mossbranch", detail: "Wise and steady.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Elandor Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Riven Darkbark", detail: "Resilient and grounded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldor Windbriar", detail: "Swift and free-spirited.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Faelan Moonthorn", detail: "Sharp and tactical.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Thalon Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Galen Stormbranch", detail: "Strong and enduring.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Sylas Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Aelor Mossbranch", detail: "Wise and steady.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Loric Nightwood", detail: "Stealthy and observant.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldric Ironleaf", detail: "Tough and dependable.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Elandor Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Riven Moonthorn", detail: "Sharp and tactical.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldor Nightwood", detail: "Stealthy and observant.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Faelan Ironleaf", detail: "Tough and dependable.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Thalon Darkbark", detail: "Resilient and grounded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Galen Mossbranch", detail: "Wise and steady.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Sylas Stormbranch", detail: "Strong and enduring.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Aelor Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Loric Moonthorn", detail: "Sharp and tactical.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldric Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Elandor Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Riven Stormbranch", detail: "Strong and enduring.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldor Mossbranch", detail: "Wise and steady.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Faelan Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Thalon Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Galen Ironleaf", detail: "Tough and dependable.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Sylas Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Aelor Darkbark", detail: "Resilient and grounded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Loric Nightwood", detail: "Stealthy and observant.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldric Windbriar", detail: "Swift and free-spirited.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Elandor Moonthorn", detail: "Sharp and tactical.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Riven Ironleaf", detail: "Tough and dependable.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldor Darkbark", detail: "Resilient and grounded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Faelan Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Thalon Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Galen Nightwood", detail: "Stealthy and observant.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Sylas Mossbranch", detail: "Wise and steady.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Aelor Stormbranch", detail: "Strong and enduring.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Loric Windbriar", detail: "Swift and free-spirited.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Eldric Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Elandor Ironleaf", detail: "Tough and dependable.", status: false, gender: "male", type: "twilight_grove" },
      { name: "Lirael Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Aria Stormbranch", detail: "Strong and enduring.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Thalia Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Elowen Darkbark", detail: "Resilient and grounded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Seraphina Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Mira Mossbranch", detail: "Wise and steady.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Linnea Ironleaf", detail: "Tough and dependable.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Caelia Moonthorn", detail: "Sharp and tactical.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Sylva Windbriar", detail: "Swift and free-spirited.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Eirlys Nightwood", detail: "Stealthy and observant.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Lirael Darkbark", detail: "Resilient and grounded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Aria Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Thalia Mossbranch", detail: "Wise and steady.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Elowen Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Seraphina Nightwood", detail: "Stealthy and observant.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Mira Stormbranch", detail: "Strong and enduring.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Linnea Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Caelia Ironleaf", detail: "Tough and dependable.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Sylva Moonthorn", detail: "Sharp and tactical.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Eirlys Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Lirael Ironleaf", detail: "Tough and dependable.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Aria Nightwood", detail: "Stealthy and observant.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Thalia Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Elowen Stormbranch", detail: "Strong and enduring.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Seraphina Mossbranch", detail: "Wise and steady.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Mira Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Linnea Moonthorn", detail: "Sharp and tactical.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Caelia Darkbark", detail: "Resilient and grounded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Sylva Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Eirlys Stormbranch", detail: "Strong and enduring.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Lirael Wildshade", detail: "Unpredictable and fierce.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Aria Moonthorn", detail: "Sharp and tactical.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Thalia Ironleaf", detail: "Tough and dependable.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Elowen Nightveil", detail: "Mysterious and shrouded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Seraphina Darkbark", detail: "Resilient and grounded.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Mira Windbriar", detail: "Swift and free-spirited.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Linnea Shadowglen", detail: "Mysterious and elusive.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Caelia Stormbranch", detail: "Strong and enduring.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Sylva Nightwood", detail: "Stealthy and observant.", status: false, gender: "female", type: "twilight_grove" },
      { name: "Eirlys Mossbranch", detail: "Wise and steady.", status: false, gender: "female", type: "twilight_grove" }
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
        name: "Song Name Generator",
        pic: "/pop.jpg",
        link: "https://www.nameideagenerator.com/song-name-generator",
    },
    {
        name: "WoW (World of Warcraft) Name Generator",
        pic: "/wow.jpg",
        link: "https://www.nameideagenerator.com/wow-name-generator",
    },
    {
        name: "Horse Name Generator",
        pic: "horse.webp",
        link: "https://www.nameideagenerator.com/horse-name-generator",
    },
];

const WoodElfNameGenerator = () => {
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

    const bgImage = "/Wood_Elf.webp"
    const context = " Wood Elf Name Generator"

    const Q1 = "Can I choose between male and female names?"

    const A1 = 'Yes, you can select gender-specific options. Or keep it neutral for more flexibility.'
    
    const Q2 = "Is the generator free to use?"
    
    const A2 = 'Yes, completely free. No sign-ups, no catches, no quests required.'
    
    const Q3 = "Can I use these names in games and stories?"
    
    const A3 = "Absolutely! These names are yours to use in any personal or creative project."
    
    const Q4 = "What if I don’t like any of the names?"
    
    const A4 = "Click again! Each refresh brings a new batch. You’ll find one that clicks with your character."
    
    const Q5 = "Can I bookmark or save names?"
    
    const A5 = "Yes, just copy and paste your favorites to a note or doc. You can build your own elf name shortlist."

    return (
        <motion.div
            initial={{ opacity: 0, x: 1200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#f8f9fa] "
        >
            <HeroSection bgImage={bgImage} context={context} />
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
        <a href="/categories/fantasy-and-mythical-creatures" className="hover:underline text-[#343a40]">Fantasy and Mythical Creatures Name</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/wood-elf-name-generator" className="hover:underline text-[#343a40]">Wood Elf Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Wood Elf Name Generator With Meaning
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
                        </select>
                    </div>
                    <div className="py-[10px] flex flex-col gap-2">
                        <p className="text-center text-[#343a40]">Types of Wood Elf Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="forest_guardian">Forest Guardian</option>
                            <option value="nature_warden">Nature Warden</option>
                            <option value="sylvan_ranger">Sylvan Ranger</option>
                            <option value="twilight_grove">Twilight Grove</option>

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
                          Get the Right Name for Your Wood Elf Character
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                       Are you looking for a Wood Elf name that sounds like it belongs in an ancient forest? You’re in the right place. 
                       Our Wood Elf Name Generator helps you skip the guesswork and get straight to the perfect name. 
                       Building a new DnD character or writing your next fantasy novel? This tool delivers elven name ideas fast.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        You don’t need to spend hours flipping through fantasy name lists. You click. You get names. Simple. 
                        Each name feels like it came from deep woods and moonlit glades. Think elegance, nature, and a bit of quiet danger. 
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        So what’s your character’s vibe? Mystic archer, wandering healer, or just the elf who knows the best forest shortcuts? 
                        This generator has names that fit all of it.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                   How Does our Generator Work?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    You don’t need to answer quizzes or fill out forms. This tool runs fast and gives instant results.
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            STEP 1: Pick the Gender
                            </h3>
                            <p>
                            Decide the gender of your character. Male? Female? Gender neutral? You’ll get names that fit all. 
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            STEP 2: Select the Type
                            </h3>
                            <p>
                            Decide the tone of your character. Noble? Wild? Peaceful? You’ll get names that fit all styles.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            STEP 3: One Click Does It All
                            </h3>
                            <p>
                            Click once. Scroll. Enjoy the flood of elven creativity. 
                            You’ll see names that sound like they’ve been whispered by ancient oaks. Hover over the names to see their meaning. 
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            STEP 4: Make It Yours
                            </h3>
                            <p>
                            Use the name directly, or mash up different ones. Add your twist. The tool gives the base, and you take it from there.
                            </p>
                            <p>
                            Want something more balanced between human and elf? The Half-Elf Name Generator is built exactly for that.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="Wood_Elf.jpg"
                            alt="Wood Elf Name Generator | Random Wood Elf Name Generator With Meaning"
                            className="w-[340px] my-[10px] h-[340px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="Wood_Elf1.jpg"
                            alt="Wood Elf Name Generator | Random Wood Elf Name Generator With Meaning"
                            className="w-[340px] h-[340px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/generatorbg.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Wood Elf Name Generator
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

            <div class="w-[80%] mx-auto text-[#343a40] my-[30px]">
                <div class="text-center mb-[10px]">
                    <h2 class="sm:text-[36px] text-[22px] font-semibold mb-4">
                    Why Use Our Wood Elf Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Our Wood Elf Name Generator is a powerful tool designed to enhance your creative projects. Here’s why our tool stands out:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold">
                                Instant Results
                                </h3>
                                <p>
                                You won’t really need to brainstorm ideas for hours. Simply click once. Get names instantly. That’s it.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Fantasy Ready
                                </h3>
                                <p>
                                Each name feels pulled straight from a fantasy novel. Use them in DnD campaigns, writing projects, or online games.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Avoid Repetition
                                </h3>
                                <p>
                                Tired of every elf being named “Elrond-something”? This tool gives you unique Wood Elf names that stand out.                           
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Custom Feel
                                </h3>
                                <p>
                               Names are crafted using elven-sounding roots and nature-based inspiration. You’ll get names that feel real, not random.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Fresh Every Time
                                </h3>
                                <p>
                               Every click gives new options. You won’t see the same name twice. There is plenty of variety.                             
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="Wood_Elf2.png"
                            alt="Half-Elf"
                            class="w-[300px] my-[50px] h-[300px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Wood_Elf3.webp"
                            alt="Tiefling Image 2"
                            class="w-[300px] h-[300px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>

<section class="px-4 py-12 text-center bg-white ">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl font-semibold mb-6">What Are Wood Elves?</h2>
    <p class="text-gray-800 mb-4">
      Wood Elves are deeply tied to nature. Unlike High Elves who love libraries and politics, Wood Elves live in hidden forests, guard ancient groves, and know which mushrooms are edible.
    </p>
    <p class="text-gray-800 mb-4">
      They tend to keep to themselves, and prefer peace over conflict. But when danger knocks, Wood Elves don’t back down. They fight with skill, speed, and a deep connection to the land.
    </p>
    <p class="text-gray-800 mb-8">
      You can think of them as the introverts of the elf world. Calm, graceful, and probably judging your loud city ways.
    </p>

    <h2 class="text-2xl font-semibold mb-4">Where Do Wood Elves Appear?</h2>
    <p class="text-gray-800 mb-4">
      Wood Elves show up in just about every fantasy world you can name. Dungeons &amp; Dragons, Elder Scrolls—they’re the woodland guardians, rangers, and quiet scouts.
    </p>
    <p class="text-gray-800 mb-8">
      They also make great RPG and MMO characters. Their background gives you instant depth. Tragic past optional but highly recommended.
    </p>

    <p class="text-gray-800">
      Are you looking for other elven styles? You might enjoy our <a href="https://www.nameideagenerator.com/half-elf-name-generator">Half-Elf Name Generator</a> too.
    </p>
  </div>
</section>
<section class="px-4 py-12 text-center">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Why Does the Right Name Matter?</h2>
    <p class="text-gray-800 mb-4">
      You shouldn’t settle for a name that sounds like a breakfast cereal. A good Wood Elf name gives your character depth, style, and presence. It helps others understand their story before they even speak.
    </p>
    <p class="text-gray-800">
      Most players struggle to invent names that feel magical and grounded at the same time. That’s where a tool like this saves the day. It delivers names with personality, so you don’t waste time second-guessing.
    </p>
  </div>
</section>









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
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex items-center flex-col gap-6">
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
            <Footer  />
        </motion.div>
    );
};

export default WoodElfNameGenerator;

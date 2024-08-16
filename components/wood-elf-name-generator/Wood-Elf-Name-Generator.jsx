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
        name: "Tabaxi Name Generator",
        pic: "/demonpic.jpg",
        link: "",
    },
    {
        name: "Tiefling Name Generator",
        pic: "/demonpic.jpg",
        link: "",
    },
    {
        name: "Goblin Name Generator",
        pic: "/demonpic.jpg",
        link: "",
    },
    {
        name: "ORC Name Generator",
        pic: "/demonpic.jpg",
        link: "",
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

    const Q1 = "How do I use the Wood Elf Name Generator?"

    const A1 = 'Using our Wood Elf Name Generator is simple. Click the "Generate Names" button to produce a list of 10 random names. If you want more options, just click the button again. Select and save the names you like in the "Saved Names" section for future use.'
    
    const Q2 = "How many names can I generate at once?"
    
    const A2 = 'You can generate up to four names at a time with each click of the "Generate Names" button. If you need more names, click the button again to create a new set.'
    
    const Q3 = "Are the names generated unique and relevant?"
    
    const A3 = "Absolutely. Our generator produces names specifically designed to fit the wood elf theme. Each name is crafted to be unique and align with the mystical and nature-inspired characteristics of wood elves."
    
    const Q4 = "Is there a cost to use the Wood Elf Name Generator?"
    
    const A4 = "No, the Wood Elf Name Generator is completely free to use. You can generate, save, and manage names without any financial commitment or subscription fees."
    
    const Q5 = "Can I use the names generated for different purposes?"
    
    const A5 = "Yes, the names can be used for various applications, including fantasy writing, role-playing games, world-building, or any other creative project involving wood elves. The versatility of the names makes them suitable for a wide range of uses."

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
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Wood Elf Name Generator
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
                        <p className="text-center text-[#343a40]">Types of Wood Elf</p>
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
                            About Us
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        We’ve designed our Wood Elf Name Generator to help you find the perfect names for your fantasy projects. Whether you're crafting a character for a story, designing an RPG, 
                        or exploring the mystical world of wood elves, our tool offers unique and captivating names at your fingertips.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Our generator is built with a user-friendly interface, making it easy to generate names with just a click. 
                        We’ve included a large repository of names, ensuring you get plenty of variations that fit perfectly within the nature-inspired realm of Wood Elves.  
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Our Wood Elf Name Generator is perfect for writers, players, or fans of fantasy. 
                        It ensures that your Wood Elf characters have names as incredible and captivating as the characters themselves. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Wood Elf Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    The use of this Wood Elf Name Generator is easy and straightforward. Follow these simple steps to find the perfect name for your wood elf:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            STEP 1: Generate Names
                            </h3>
                            <p>
                            Click the <b> "Generate Names" </b> button to create a list of random wood elf names. If the names don’t fit your needs, click the button again to generate a new set.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            STEP 2: Save Names
                            </h3>
                            <p>
                            Click on any name you like to save it. The saved names will appear in the "Saved Names" section. 
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                            STEP 3: Get Your Required Name
                            </p>
                            <p>
                            Review the names you saved from previous attempts. You can remove any names you don’t want and rerun the generator if you’re not satisfied with the options.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="Wood_Elf.jpg"
                            alt=""
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="Wood_Elf1.jpg"
                            alt=""
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
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
                    Related to Wood-Elf-Name-Generator
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
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Enhanced Functionality
                                </h3>
                                <p>
                                Our Wood Elf Name Generator is designed to offer a seamless gaming experience. With its efficient functionality, you can generate a diverse set of names quickly and effortlessly. 
                                The tool ensures that every name aligns with the mystical and nature-inspired attributes of wood elves, making it a reliable choice for all your fantasy needs.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Intuitive Interface
                                </h3>
                                <p>
                                We have crafted an easy-to-navigate interface that simplifies the name-generation process. 
                                The straightforward design ensures that even users unfamiliar with similar tools can effortlessly create and save names. 
                                Our user-friendly approach allows you to focus on your creative projects without getting bogged down by complex procedures.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Reliable Results
                                </h3>
                                <p>
                                Expect consistent and high-quality results every time you use our generator. 
                                The names produced are curated to fit perfectly within the fantasy realm of wood elves, ensuring that each name is both unique and relevant. 
                                This reliability helps maintain the thematic integrity of your work, whether for writing, gaming, or other creative endeavors.                           
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Free Access
                                </h3>
                                <p>
                                Enjoy full access to our Wood Elf Name Generator without any costs. 
                                The tool is available online for free, allowing you to generate and save names without any financial commitment. 
                                This accessibility ensures that you can use the tool as often as needed, without worrying about subscription fees or usage limits.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Creative Flexibility
                                </h3>
                                <p>
                                Our Wood Elf Name Generator is versatile, catering to various uses such as fantasy writing, role-playing games, and world-building. 
                                The names generated can be used in different contexts, from adding depth to a story to enhancing characters in games. 
                                This flexibility makes it a valuable tool for anyone involved in creative projects involving wood elves.                             
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Comprehensive Name Options
                                </h3>
                                <p>
                                Our Wood Elf Name Generator provides a wide array of name choices, ensuring you find the perfect fit for your needs. 
                                Each name is crafted to reflect the ethereal and natural qualities associated with wood elves. 
                                Its extensive range helps you select a name that truly enhances the essence of your wood elf characters.                         
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="Wood_Elf2.png"
                            alt="Half-Elf"
                            class="w-[350px] my-[30px] h-[430px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Wood_Elf3.webp"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
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

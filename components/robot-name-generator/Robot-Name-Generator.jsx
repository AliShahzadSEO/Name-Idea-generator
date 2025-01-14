"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Rextron Alpha", detail: "A powerful and advanced bot, known for its superior strength and intelligence.", status: false, gender: "male", type: "techno_bot" },
    { name: "Zorvex 9000", detail: "A highly efficient and durable model with cutting-edge technology.", status: false, gender: "male", type: "techno_bot" },
    { name: "Optimus Byte", detail: "A leader bot with unmatched processing power and strategic capabilities.", status: false, gender: "male", type: "techno_bot" },
    { name: "Xerox Prime", detail: "A top-tier bot known for its precision and replication abilities.", status: false, gender: "male", type: "techno_bot" },
    { name: "Vortex X1", detail: "A dynamic bot designed for rapid action and high-speed operations.", status: false, gender: "male", type: "techno_bot" },
    { name: "Neon Core", detail: "A bot with a glowing, energy-efficient core, optimized for endurance.", status: false, gender: "male", type: "techno_bot" },
    { name: "Cyrex Pulse", detail: "A bot with a fast, pulsating energy drive, known for quick responses.", status: false, gender: "male", type: "techno_bot" },
    { name: "Dronix 5X", detail: "A versatile bot with multi-functional drone capabilities.", status: false, gender: "male", type: "techno_bot" },
    { name: "Quantum R4", detail: "A bot with quantum computing capabilities, excelling in complex problem-solving.", status: false, gender: "male", type: "techno_bot" },
    { name: "Maxtron V2", detail: "An upgraded bot model with enhanced power and durability.", status: false, gender: "male", type: "techno_bot" },
    { name: "Zephyr Gear", detail: "A bot with advanced mechanical systems, known for smooth and efficient movements.", status: false, gender: "male", type: "techno_bot" },
    { name: "Krypton M4", detail: "A bot constructed from super-strong materials, designed for heavy-duty tasks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Circuitron Z", detail: "A bot with complex circuitry, optimized for high-performance tasks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Nexus Spark", detail: "A bot with a powerful energy source, known for its bright and intense sparks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Axiom 7", detail: "A bot with a strong ethical core, making decisions based on logic and morality.", status: false, gender: "male", type: "techno_bot" },
    { name: "Voltax Q", detail: "A bot with high-voltage capabilities, known for its electric prowess.", status: false, gender: "male", type: "techno_bot" },
    { name: "Phoenix Byte", detail: "A resilient bot that can recover quickly from damage, symbolizing rebirth.", status: false, gender: "male", type: "techno_bot" },
    { name: "Quantum X5", detail: "A bot with advanced quantum processors, excelling in computational tasks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Raptor Max", detail: "A fast and agile bot, known for its predatory instincts and speed.", status: false, gender: "male", type: "techno_bot" },
    { name: "Stellar Z3", detail: "A bot designed for space exploration, with advanced navigation systems.", status: false, gender: "male", type: "techno_bot" },
    { name: "Nova Drive", detail: "A bot with powerful propulsion systems, capable of incredible speed.", status: false, gender: "male", type: "techno_bot" },
    { name: "Techno Prime", detail: "A leader bot with unmatched technological advancements and strategic planning.", status: false, gender: "male", type: "techno_bot" },
    { name: "Dynamo X", detail: "A bot with a dynamic energy source, known for its relentless power.", status: false, gender: "male", type: "techno_bot" },
    { name: "Orion 8", detail: "A bot with stellar navigation capabilities, ideal for space missions.", status: false, gender: "male", type: "techno_bot" },
    { name: "Stratos Zero", detail: "A bot with advanced atmospheric sensors, designed for high-altitude operations.", status: false, gender: "male", type: "techno_bot" },
    { name: "Cybertron 7", detail: "A bot with superior cyber capabilities, excelling in digital environments.", status: false, gender: "male", type: "techno_bot" },
    { name: "Vortex Nova", detail: "A bot with a powerful energy vortex, known for its intense rotational power.", status: false, gender: "male", type: "techno_bot" },
    { name: "Byte Pulse", detail: "A bot with high-speed data processing capabilities, ideal for quick tasks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Titan Gear", detail: "A bot with enormous strength and durable construction, ideal for heavy lifting.", status: false, gender: "male", type: "techno_bot" },
    { name: "Fusion Max", detail: "A bot with advanced fusion technology, combining different energy sources for maximum power.", status: false, gender: "male", type: "techno_bot" },
    { name: "Zion X", detail: "A bot with a unique design, known for its superior structural integrity.", status: false, gender: "male", type: "techno_bot" },
    { name: "Rexon Zero", detail: "A bot with zero-point energy technology, making it highly efficient.", status: false, gender: "male", type: "techno_bot" },
    { name: "Electro R2", detail: "A bot with advanced electrical systems, known for its high voltage output.", status: false, gender: "male", type: "techno_bot" },
    { name: "Astra Core", detail: "A bot with a stellar core, providing immense power and endurance.", status: false, gender: "male", type: "techno_bot" },
    { name: "Delta Q", detail: "A bot with advanced quantum mechanics, ideal for solving complex problems.", status: false, gender: "male", type: "techno_bot" },
    { name: "Sparx V1", detail: "A bot with a bright, sparking energy source, known for quick bursts of power.", status: false, gender: "male", type: "techno_bot" },
    { name: "Neutron 5000", detail: "A bot with neutron-based energy, known for its immense power output.", status: false, gender: "male", type: "techno_bot" },
    { name: "Ionix 4", detail: "A bot with ion-based propulsion, providing high-speed mobility.", status: false, gender: "male", type: "techno_bot" },
    { name: "Robo Pulse", detail: "A bot with synchronized robotic systems, ideal for precision tasks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Turbo X", detail: "A bot with turbocharged systems, known for its rapid performance.", status: false, gender: "male", type: "techno_bot" },
    { name: "Vortex Omega", detail: "A bot with a powerful energy vortex, capable of generating intense force.", status: false, gender: "male", type: "techno_bot" },
    { name: "Optix 6", detail: "A bot with advanced optical systems, ideal for surveillance and analysis.", status: false, gender: "male", type: "techno_bot" },
    { name: "Alpha Drive", detail: "A bot with a leading-edge drive system, known for its superior control.", status: false, gender: "male", type: "techno_bot" },
    { name: "Maximus 8", detail: "A bot with maximum power output, designed for heavy-duty tasks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Xeno Byte", detail: "A bot with alien technology, known for its advanced capabilities.", status: false, gender: "male", type: "techno_bot" },
    { name: "Nova Raptor", detail: "A bot with predatory instincts and rapid speed, ideal for fast missions.", status: false, gender: "male", type: "techno_bot" },
    { name: "Voltix 2", detail: "A bot with high-voltage systems, known for its powerful electric charge.", status: false, gender: "male", type: "techno_bot" },
    { name: "Axiom Pulse", detail: "A bot with a strong core and pulsating energy, designed for precision tasks.", status: false, gender: "male", type: "techno_bot" },
    { name: "Cyberon Z", detail: "A bot with advanced cyber capabilities, excelling in digital environments.", status: false, gender: "male", type: "techno_bot" },
    { name: "Zenith R7", detail: "A bot at the peak of technological advancement, known for its high performance.", status: false, gender: "male", type: "techno_bot" },
    { name: "Electra Nova", detail: "A powerful female bot with a glowing core and advanced energy systems.", status: false, gender: "female", type: "techno_bot" },
    { name: "Lyra Byte", detail: "A sleek and fast female bot known for her quick processing capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Vega Circuit", detail: "A highly efficient female bot with advanced circuitry.", status: false, gender: "female", type: "techno_bot" },
    { name: "Astra Pulse", detail: "A dynamic female bot with a pulsating energy core.", status: false, gender: "female", type: "techno_bot" },
    { name: "Zenith Prime", detail: "A top-tier female bot known for her superior design and capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Rexa 9000", detail: "An advanced female bot model with high efficiency and durability.", status: false, gender: "female", type: "techno_bot" },
    { name: "Orion Q", detail: "A female bot with stellar navigation systems, ideal for space missions.", status: false, gender: "female", type: "techno_bot" },
    { name: "Nexia 5X", detail: "A versatile female bot with multi-functional capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Luna Spark", detail: "A female bot with a bright energy source, known for her intense sparks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Quantum X1", detail: "A female bot with quantum computing abilities, excelling in complex tasks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Sienna Core", detail: "A female bot with a strong and efficient core, optimized for endurance.", status: false, gender: "female", type: "techno_bot" },
    { name: "Zara Max", detail: "An upgraded female bot with enhanced power and capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Aurora Z3", detail: "A female bot designed for space exploration, with advanced navigation.", status: false, gender: "female", type: "techno_bot" },
    { name: "Vortex Byte", detail: "A female bot with high-speed data processing, ideal for quick tasks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Diva X", detail: "A stylish and powerful female bot, known for her exceptional design.", status: false, gender: "female", type: "techno_bot" },
    { name: "Eclipse 7", detail: "A female bot with advanced stealth systems, designed for covert missions.", status: false, gender: "female", type: "techno_bot" },
    { name: "Cyra Pulse", detail: "A female bot with a pulsating energy drive, known for quick responses.", status: false, gender: "female", type: "techno_bot" },
    { name: "Juno Byte", detail: "A female bot with fast processing capabilities, ideal for data tasks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Phoenix Gear", detail: "A resilient female bot with advanced mechanics, capable of rapid recovery.", status: false, gender: "female", type: "techno_bot" },
    { name: "Neon Nova", detail: "A glowing female bot with a powerful energy core, designed for endurance.", status: false, gender: "female", type: "techno_bot" },
    { name: "Xenon Q", detail: "A female bot with high-efficiency systems, known for her advanced capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Aria Drive", detail: "A female bot with a smooth and efficient drive system, optimized for control.", status: false, gender: "female", type: "techno_bot" },
    { name: "Stellar R2", detail: "A female bot designed for space missions, with stellar navigation capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Tess V4", detail: "A versatile female bot with multi-functional capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Zara Raptor", detail: "A fast and agile female bot, known for her predatory instincts.", status: false, gender: "female", type: "techno_bot" },
    { name: "Nova Spark", detail: "A female bot with a powerful energy source, known for bright and intense sparks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Optima X", detail: "A top-tier female bot with unmatched efficiency and capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Delta V2", detail: "An upgraded female bot with enhanced capabilities and efficiency.", status: false, gender: "female", type: "techno_bot" },
    { name: "Fusion Byte", detail: "A female bot with advanced fusion technology, combining different energy sources.", status: false, gender: "female", type: "techno_bot" },
    { name: "Electra 5X", detail: "A powerful female bot with advanced electrical systems.", status: false, gender: "female", type: "techno_bot" },
    { name: "Vega Pulse", detail: "A female bot with a pulsating energy core, optimized for speed.", status: false, gender: "female", type: "techno_bot" },
    { name: "Liora Max", detail: "An enhanced female bot model with superior power output.", status: false, gender: "female", type: "techno_bot" },
    { name: "Astrid Core", detail: "A female bot with a strong core, designed for endurance and power.", status: false, gender: "female", type: "techno_bot" },
    { name: "Lyra Gear", detail: "A female bot with advanced mechanical systems, known for smooth operation.", status: false, gender: "female", type: "techno_bot" },
    { name: "Astra Nova", detail: "A female bot designed for exploration, with advanced navigation systems.", status: false, gender: "female", type: "techno_bot" },
    { name: "Eira Prime", detail: "A top-tier female bot with superior technology and capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Sparx R7", detail: "A female bot with a bright and sparking energy source, optimized for quick tasks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Nova Pulse", detail: "A female bot with a pulsating core, designed for rapid performance.", status: false, gender: "female", type: "techno_bot" },
    { name: "Evelyn Z", detail: "A sophisticated female bot with advanced systems, known for high efficiency.", status: false, gender: "female", type: "techno_bot" },
    { name: "Kara Byte", detail: "A fast and efficient female bot, ideal for data processing tasks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Vega Max", detail: "An enhanced female bot model with superior capabilities.", status: false, gender: "female", type: "techno_bot" },
    { name: "Electra 6", detail: "A powerful female bot with advanced electrical systems, designed for high output.", status: false, gender: "female", type: "techno_bot" },
    { name: "Juno Spark", detail: "A female bot with a bright and intense energy source, optimized for quick tasks.", status: false, gender: "female", type: "techno_bot" },
    { name: "Luna R2", detail: "A female bot with stellar navigation capabilities, ideal for space missions.", status: false, gender: "female", type: "techno_bot" },
    { name: "Lyra Drive", detail: "A female bot with a smooth and efficient drive system, optimized for control.", status: false, gender: "female", type: "techno_bot" },
    { name: "Rexa Circuit", detail: "An advanced female bot with highly efficient circuitry.", status: false, gender: "female", type: "techno_bot" },
    { name: "Alpha Nexus", detail: "A male android with advanced connectivity and high-level processing power.", status: false, gender: "male", type: "android" },
    { name: "Maximus 8", detail: "A robust male android designed for heavy-duty tasks with unmatched strength.", status: false, gender: "male", type: "android" },
    { name: "Cyberon V4", detail: "A highly advanced male android with top-tier cybernetic systems.", status: false, gender: "male", type: "android" },
    { name: "Rexon Zero", detail: "A male android known for its precision and zero-error operations.", status: false, gender: "male", type: "android" },
    { name: "Neutron X1", detail: "A male android with a powerful core, optimized for energy efficiency.", status: false, gender: "male", type: "android" },
    { name: "Titanium 5X", detail: "A male android built with a titanium frame, ensuring durability and resilience.", status: false, gender: "male", type: "android" },
    { name: "Vortex R2", detail: "A male android with a rapid processing unit, ideal for complex calculations.", status: false, gender: "male", type: "android" },
    { name: "Orion Core", detail: "A male android with stellar navigation capabilities and a strong core.", status: false, gender: "male", type: "android" },
    { name: "Byte Ranger", detail: "A male android known for its ability to handle vast amounts of data swiftly.", status: false, gender: "male", type: "android" },
    { name: "Quantum Z", detail: "A male android with quantum-level processing power, ideal for solving complex problems.", status: false, gender: "male", type: "android" },
    { name: "Zenith Nova", detail: "A male android at the pinnacle of technological advancement, known for superior performance.", status: false, gender: "male", type: "android" },
    { name: "Dynamo Q", detail: "A male android with immense power, capable of handling high-energy tasks.", status: false, gender: "male", type: "android" },
    { name: "Circuitron X", detail: "A male android with highly efficient circuitry, optimized for rapid data transmission.", status: false, gender: "male", type: "android" },
    { name: "Optimus Pulse", detail: "A male android with advanced energy systems, designed for consistent performance.", status: false, gender: "male", type: "android" },
    { name: "Raptor V2", detail: "A male android with enhanced agility and speed, designed for quick maneuvers.", status: false, gender: "male", type: "android" },
    { name: "Axiom X5", detail: "A male android with an unshakable core and a strong sense of logic.", status: false, gender: "male", type: "android" },
    { name: "Stratos Zero", detail: "A male android designed for high-altitude missions with zero tolerance for error.", status: false, gender: "male", type: "android" },
    { name: "Voltix Prime", detail: "A male android with prime energy efficiency, designed for long-lasting operations.", status: false, gender: "male", type: "android" },
    { name: "Neon Drive", detail: "A male android with a neon-powered drive system, optimized for high speed.", status: false, gender: "male", type: "android" },
    { name: "Krypton X", detail: "A male android with an extremely strong outer shell, made from krypton alloy.", status: false, gender: "male", type: "android" },
    { name: "Xerox Byte", detail: "A male android with advanced copying and data replication abilities.", status: false, gender: "male", type: "android" },
    { name: "Maxtron Gear", detail: "A male android with powerful gears, optimized for heavy mechanical tasks.", status: false, gender: "male", type: "android" },
    { name: "Cyrex Nova", detail: "A male android with cybernetic enhancements, known for high performance.", status: false, gender: "male", type: "android" },
    { name: "Zion Pulse", detail: "A male android with a powerful pulsating core, designed for continuous energy flow.", status: false, gender: "male", type: "android" },
    { name: "Electro X", detail: "A male android with advanced electrical systems, optimized for energy control.", status: false, gender: "male", type: "android" },
    { name: "Nexus Zero", detail: "A male android with zero-error connectivity, designed for seamless integration.", status: false, gender: "male", type: "android" },
    { name: "Robo Titan", detail: "A male android built with titanic strength and unmatched durability.", status: false, gender: "male", type: "android" },
    { name: "Quantum X5", detail: "A male android with quantum processing capabilities, ideal for high-complexity tasks.", status: false, gender: "male", type: "android" },
    { name: "Horizon 8", detail: "A male android with advanced sensors, designed for horizon-wide surveillance.", status: false, gender: "male", type: "android" },
    { name: "Phoenix R4", detail: "A male android known for its regenerative abilities, capable of rising from any damage.", status: false, gender: "male", type: "android" },
    { name: "Fusion Nova", detail: "A male android with advanced fusion technology, combining multiple energy sources.", status: false, gender: "male", type: "android" },
    { name: "Zenon Max", detail: "A male android with a powerful core, designed for maximum output.", status: false, gender: "male", type: "android" },
    { name: "Voltax X", detail: "A male android with a high-voltage energy system, optimized for powerful tasks.", status: false, gender: "male", type: "android" },
    { name: "Nexus Prime", detail: "A male android with top-tier connectivity and prime processing power.", status: false, gender: "male", type: "android" },
    { name: "Orion Byte", detail: "A male android with stellar data processing abilities, ideal for space missions.", status: false, gender: "male", type: "android" },
    { name: "Titan Pulse", detail: "A male android with a strong and steady pulse, designed for durability.", status: false, gender: "male", type: "android" },
    { name: "Vortex X7", detail: "A male android with rapid processing capabilities, ideal for high-speed tasks.", status: false, gender: "male", type: "android" },
    { name: "Jupiter Drive", detail: "A male android with immense power, designed for large-scale operations.", status: false, gender: "male", type: "android" },
    { name: "Neutron 7", detail: "A male android with a stable core, optimized for energy conservation.", status: false, gender: "male", type: "android" },
    { name: "Electro Gear", detail: "A male android with advanced mechanical systems, designed for precision.", status: false, gender: "male", type: "android" },
    { name: "Zenith R2", detail: "A male android at the peak of technology, known for high performance.", status: false, gender: "male", type: "android" },
    { name: "Byte Raptor", detail: "A male android with fast data processing and agile movements.", status: false, gender: "male", type: "android" },
    { name: "Astra Pulse", detail: "A male android with a stellar pulse system, ideal for space exploration.", status: false, gender: "male", type: "android" },
    { name: "Rexon Titan", detail: "A male android with titanic strength, built for heavy-duty tasks.", status: false, gender: "male", type: "android" },
    { name: "Dynamo Nova", detail: "A male android with a dynamic power source, optimized for high-energy tasks.", status: false, gender: "male", type: "android" },
    { name: "Optix X", detail: "A male android with advanced optics, designed for high-precision tasks.", status: false, gender: "male", type: "android" },
    { name: "Quantum Gear", detail: "A male android with quantum-level mechanics, ideal for complex operations.", status: false, gender: "male", type: "android" },
    { name: "Xeno Pulse", detail: "A male android with an alien-designed pulse system, optimized for efficiency.", status: false, gender: "male", type: "android" },
    { name: "Axiom R7", detail: "A male android with unbreakable logic and a strong core.", status: false, gender: "male", type: "android" },
    { name: "Neon Titan", detail: "A male android with a neon-powered system, designed for endurance and strength.", status: false, gender: "male", type: "android" },
    { name: "Aurora X", detail: "A female android with radiant energy systems, designed for optimal performance.", status: false, gender: "female", type: "android" },
    { name: "Lyra Prime", detail: "A female android with prime processing capabilities, known for high efficiency.", status: false, gender: "female", type: "android" },
    { name: "Vega Circuit", detail: "A female android with advanced circuitry, optimized for data processing.", status: false, gender: "female", type: "android" },
    { name: "Electra Nova", detail: "A female android with electrifying energy systems, known for rapid responses.", status: false, gender: "female", type: "android" },
    { name: "Nova Pulse", detail: "A female android with a pulsating core, designed for continuous energy flow.", status: false, gender: "female", type: "android" },
    { name: "Luna Byte", detail: "A female android with lunar-enhanced data processing abilities.", status: false, gender: "female", type: "android" },
    { name: "Cyra 7", detail: "A female android with seven layers of advanced security, ensuring data integrity.", status: false, gender: "female", type: "android" },
    { name: "Juno Core", detail: "A female android with a strong and stable core, optimized for multitasking.", status: false, gender: "female", type: "android" },
    { name: "Zara X1", detail: "A female android with advanced X1 processing unit, designed for speed.", status: false, gender: "female", type: "android" },
    { name: "Aria Nexus", detail: "A female android with advanced connectivity systems, known for seamless integration.", status: false, gender: "female", type: "android" },
    { name: "Vega Spark", detail: "A female android with a spark of energy, ideal for rapid activation.", status: false, gender: "female", type: "android" },
    { name: "Sienna Pulse", detail: "A female android with a steady pulse, optimized for consistent energy flow.", status: false, gender: "female", type: "android" },
    { name: "Electra 5X", detail: "A female android with a fivefold increase in electrical efficiency.", status: false, gender: "female", type: "android" },
    { name: "Liora Max", detail: "A female android with maximum capacity, designed for heavy-duty tasks.", status: false, gender: "female", type: "android" },
    { name: "Eira Drive", detail: "A female android with a cold, efficient drive system, optimized for endurance.", status: false, gender: "female", type: "android" },
    { name: "Diva Byte", detail: "A female android with a stylish design, optimized for high-level data processing.", status: false, gender: "female", type: "android" },
    { name: "Nova Gear", detail: "A female android with advanced gear systems, designed for seamless operation.", status: false, gender: "female", type: "android" },
    { name: "Astra R4", detail: "A female android with R4 technology, optimized for rapid responses.", status: false, gender: "female", type: "android" },
    { name: "Zenith Nova", detail: "A female android at the pinnacle of technology, known for top-tier performance.", status: false, gender: "female", type: "android" },
    { name: "Lyra Pulse", detail: "A female android with a rhythmic pulse, designed for consistent energy flow.", status: false, gender: "female", type: "android" },
    { name: "Nexia X", detail: "A female android with next-gen technology, designed for high efficiency.", status: false, gender: "female", type: "android" },
    { name: "Orion Byte", detail: "A female android with stellar data processing capabilities.", status: false, gender: "female", type: "android" },
    { name: "Aria Circuit", detail: "A female android with advanced circuitry, optimized for rapid data transmission.", status: false, gender: "female", type: "android" },
    { name: "Luna Nova", detail: "A female android with lunar-powered systems, designed for optimal performance.", status: false, gender: "female", type: "android" },
    { name: "Sparx 8", detail: "A female android with eightfold spark capabilities, ideal for quick activations.", status: false, gender: "female", type: "android" },
    { name: "Evelyn Pulse", detail: "A female android with a steady pulse, optimized for consistent performance.", status: false, gender: "female", type: "android" },
    { name: "Kara Core", detail: "A female android with a strong and stable core, ideal for multitasking.", status: false, gender: "female", type: "android" },
    { name: "Zara Max", detail: "A female android with maximum processing capabilities, ideal for complex tasks.", status: false, gender: "female", type: "android" },
    { name: "Juno Spark", detail: "A female android with rapid spark capabilities, optimized for quick activation.", status: false, gender: "female", type: "android" },
    { name: "Aurora Drive", detail: "A female android with radiant energy systems, designed for high efficiency.", status: false, gender: "female", type: "android" },
    { name: "Electra Gear", detail: "A female android with advanced gear systems, optimized for seamless operation.", status: false, gender: "female", type: "android" },
    { name: "Cyra Byte", detail: "A female android with advanced data processing abilities, ideal for high-speed tasks.", status: false, gender: "female", type: "android" },
    { name: "Liora Nova", detail: "A female android with stellar performance, optimized for long-lasting operations.", status: false, gender: "female", type: "android" },
    { name: "Nina Prime", detail: "A female android with prime processing power, ideal for high-complexity tasks.", status: false, gender: "female", type: "android" },
    { name: "Zenith Pulse", detail: "A female android at the peak of technology, optimized for continuous performance.", status: false, gender: "female", type: "android" },
    { name: "Sienna X", detail: "A female android with next-gen systems, designed for high efficiency.", status: false, gender: "female", type: "android" },
    { name: "Nova Byte", detail: "A female android with stellar data processing capabilities, ideal for space exploration.", status: false, gender: "female", type: "android" },
    { name: "Lyra Circuit", detail: "A female android with advanced circuitry, optimized for high-speed data transmission.", status: false, gender: "female", type: "android" },
    { name: "Aria Pulse", detail: "A female android with a rhythmic pulse, designed for consistent energy flow.", status: false, gender: "female", type: "android" },
    { name: "Eira Max", detail: "A female android with maximum processing power, designed for complex operations.", status: false, gender: "female", type: "android" },
    { name: "Electra Drive", detail: "A female android with advanced drive systems, optimized for seamless operation.", status: false, gender: "female", type: "android" },
    { name: "Zara Pulse", detail: "A female android with a powerful pulse, optimized for consistent energy flow.", status: false, gender: "female", type: "android" },
    { name: "Diva X1", detail: "A female android with advanced X1 technology, designed for rapid activation.", status: false, gender: "female", type: "android" },
    { name: "Kara Nova", detail: "A female android with stellar performance, optimized for high-efficiency tasks.", status: false, gender: "female", type: "android" },
    { name: "Vega Byte", detail: "A female android with advanced data processing capabilities, ideal for high-speed tasks.", status: false, gender: "female", type: "android" },
    { name: "Aurora Gear", detail: "A female android with advanced mechanical systems, optimized for precision.", status: false, gender: "female", type: "android" },
    { name: "Luna Pulse", detail: "A female android with lunar-powered systems, optimized for consistent performance.", status: false, gender: "female", type: "android" },
    { name: "Sparx Drive", detail: "A female android with rapid drive systems, ideal for quick activations.", status: false, gender: "female", type: "android" },
    { name: "Evelyn Byte", detail: "A female android with advanced data processing capabilities, designed for high-speed tasks.", status: false, gender: "female", type: "android" },
    { name: "Juno Core", detail: "A female android with a strong and stable core, optimized for multitasking.", status: false, gender: "female", type: "android" },
    { name: "Cogsworth Steel", detail: "A male clockwork automaton with a robust steel framework and intricate cog mechanisms.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Victor Brassgear", detail: "A male clockwork automaton with durable brass gears and a powerful drive system.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Augustus Rivet", detail: "A male clockwork automaton designed with precision rivets and a sturdy frame.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Ignatius Gearson", detail: "A male clockwork automaton with intricate gearwork and advanced steam mechanisms.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Quincy Steamheart", detail: "A male clockwork automaton with a powerful steam engine and a heart of brass.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Barnaby Ironclad", detail: "A male clockwork automaton with an iron-clad exterior and robust internal mechanisms.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Theodore Brassbolt", detail: "A male clockwork automaton with a system of brass bolts and intricate cogwork.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Felix Cogwheel", detail: "A male clockwork automaton featuring large cogwheels and advanced engineering.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Montgomery Brassclad", detail: "A male clockwork automaton with a brass-clad exterior and powerful internal springs.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Horatio Steelforge", detail: "A male clockwork automaton forged from steel with a focus on durability and strength.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Alistair Brassfist", detail: "A male clockwork automaton with brass fists and a strong, reliable build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Sebastian Ironflare", detail: "A male clockwork automaton with iron components and a fiery, dynamic design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Lucius Gearbolt", detail: "A male clockwork automaton with a sophisticated gear system and strong bolt fastenings.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Gideon Steamgrip", detail: "A male clockwork automaton with a steam-powered grip and precise mechanical movement.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Tobias Rivetflare", detail: "A male clockwork automaton with rivetflare design and intricate internal mechanisms.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Oswald Brassflare", detail: "A male clockwork automaton with a distinctive brassflare mechanism and robust construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Everett Steamclad", detail: "A male clockwork automaton with a steam-powered system and durable cladding.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Cornelius Gearflare", detail: "A male clockwork automaton featuring gearflare technology and a solid build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Clarence Rivetson", detail: "A male clockwork automaton designed with rivetson elements and sturdy construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Reginald Cogflare", detail: "A male clockwork automaton with a cogflare system and a durable design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Lysander Ironbolt", detail: "A male clockwork automaton with an ironbolt design and rugged construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Edgar Brassforge", detail: "A male clockwork automaton with brassforge components and a robust framework.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Percival Steamclad", detail: "A male clockwork automaton featuring steamclad armor and advanced mechanisms.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Bartholomew Gearstone", detail: "A male clockwork automaton with a gearstone system and solid design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Elias Brassflare", detail: "A male clockwork automaton with a brassflare design and intricate workings.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Silas Ironfist", detail: "A male clockwork automaton with ironfist features and a durable build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Ambrose Cogson", detail: "A male clockwork automaton with cogson technology and a solid construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Leopold Steamflare", detail: "A male clockwork automaton with steamflare components and intricate design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Orville Gearflare", detail: "A male clockwork automaton with gearflare technology and a robust build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Whitlock Rivetclad", detail: "A male clockwork automaton with rivetclad elements and durable construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Mortimer Brassbolt", detail: "A male clockwork automaton with brassbolt features and solid design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Archibald Ironflare", detail: "A male clockwork automaton with ironflare technology and rugged construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Thaddeus Steamclad", detail: "A male clockwork automaton with steamclad elements and advanced engineering.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Hamilton Gearson", detail: "A male clockwork automaton with gearson components and durable design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Roderick Brassflare", detail: "A male clockwork automaton with brassflare features and a solid build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Cedric Rivetflare", detail: "A male clockwork automaton with rivetflare elements and a durable framework.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Ignatius Cogflare", detail: "A male clockwork automaton with cogflare technology and intricate design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Basil Ironfist", detail: "A male clockwork automaton with ironfist components and rugged build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Wallace Brassflare", detail: "A male clockwork automaton with brassflare features and a solid design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Phineas Steamstone", detail: "A male clockwork automaton with steamstone elements and advanced engineering.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Nigel Gearbolt", detail: "A male clockwork automaton with gearbolt technology and robust design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Cyrus Rivetflare", detail: "A male clockwork automaton with rivetflare components and durable build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Algernon Brassflare", detail: "A male clockwork automaton with brassflare features and solid construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Harrison Ironbolt", detail: "A male clockwork automaton with ironbolt design and rugged framework.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Ephraim Gearflare", detail: "A male clockwork automaton with gearflare components and durable design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Fitzwilliam Rivetclad", detail: "A male clockwork automaton with rivetclad technology and solid build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Rupert Steamflare", detail: "A male clockwork automaton with steamflare components and advanced design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Winslow Brassflare", detail: "A male clockwork automaton with brassflare features and rugged construction.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Benedict Cogflare", detail: "A male clockwork automaton with cogflare technology and durable build.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Dorian Ironflare", detail: "A male clockwork automaton with ironflare components and robust design.", status: false, gender: "male", type: "clockwork_automaton" },
    { name: "Cordelia Brassflare", detail: "A female clockwork automaton with brassflare features and elegant design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Evangeline Steamflare", detail: "A female clockwork automaton with steamflare components and refined engineering.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Beatrice Gearflare", detail: "A female clockwork automaton with gearflare technology and a graceful build.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Isadora Ironclad", detail: "A female clockwork automaton with an ironclad exterior and detailed mechanisms.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Clementine Brassfist", detail: "A female clockwork automaton with brassfist components and sturdy construction.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Rosalind Cogflare", detail: "A female clockwork automaton with cogflare features and delicate engineering.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Adelaide Steamflare", detail: "A female clockwork automaton with steamflare elements and advanced mechanisms.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Genevieve Gearflare", detail: "A female clockwork automaton with gearflare technology and a graceful design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Emmeline Ironstone", detail: "A female clockwork automaton with ironstone components and durable build.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Lavinia Brassflare", detail: "A female clockwork automaton with brassflare features and elegant design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Gwendolyn Steamflare", detail: "A female clockwork automaton with steamflare components and intricate design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Priscilla Gearflare", detail: "A female clockwork automaton with gearflare technology and delicate mechanisms.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Florence Rivetflare", detail: "A female clockwork automaton with rivetflare elements and refined construction.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Josephine Brassflare", detail: "A female clockwork automaton with brassflare features and sturdy design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Henrietta Steamclad", detail: "A female clockwork automaton with steamclad components and advanced engineering.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Victoria Ironflare", detail: "A female clockwork automaton with ironflare elements and durable construction.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Imogen Gearflare", detail: "A female clockwork automaton with gearflare technology and elegant design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Lucille Brassflare", detail: "A female clockwork automaton with brassflare components and graceful build.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Eleanor Steamflare", detail: "A female clockwork automaton with steamflare technology and intricate design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Arabella Gearflare", detail: "A female clockwork automaton with gearflare features and a robust build.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Matilda Brassflare", detail: "A female clockwork automaton with brassflare components and a refined design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Winifred Steamflare", detail: "A female clockwork automaton with steamflare technology and advanced mechanisms.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Anastasia Ironflare", detail: "A female clockwork automaton with ironflare components and a sturdy design.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Penelope Brassflare", detail: "A female clockwork automaton with brassflare features and a graceful build.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Amelia Gearflare", detail: "A female clockwork automaton with gearflare technology and delicate mechanisms.", status: false, gender: "female", type: "clockwork_automaton" },
    { name: "Data Hawk", detail: "A male cybernetic drone equipped with advanced data analysis capabilities.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Skybyte", detail: "A male cybernetic drone designed for high-altitude surveillance with byte-level precision.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Ravenbot", detail: "A male cybernetic drone with the agility and stealth of a raven, optimized for reconnaissance.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Cyberwing", detail: "A male cybernetic drone with high-speed wing technology for swift aerial maneuvers.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Dronewing", detail: "A male cybernetic drone featuring advanced wing design for enhanced flight capabilities.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Skyranger", detail: "A male cybernetic drone designed for long-range sky patrols and high-altitude scouting.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Spybyte", detail: "A male cybernetic drone specializing in covert operations with byte-level data interception.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Opticdrone", detail: "A male cybernetic drone with advanced optical sensors for precise visual data collection.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Skyrecon", detail: "A male cybernetic drone optimized for sky reconnaissance and data gathering.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Cloudsweep", detail: "A male cybernetic drone designed for sweeping cloud cover and atmospheric analysis.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Falconbyte", detail: "A male cybernetic drone combining the speed of a falcon with advanced data processing capabilities.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Skywatch", detail: "A male cybernetic drone with comprehensive surveillance systems for sky monitoring.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Cyberhawk", detail: "A male cybernetic drone with hawk-like vision and advanced cybernetic enhancements.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Reconbot", detail: "A male cybernetic drone built for reconnaissance with cutting-edge sensor technology.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Stealthbyte", detail: "A male cybernetic drone designed for stealth operations with byte-level data handling.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Opticbird", detail: "A male cybernetic drone equipped with bird-like optical sensors for enhanced vision.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Datawing", detail: "A male cybernetic drone with wing technology optimized for data collection and flight stability.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Skybot", detail: "A male cybernetic drone designed for versatile sky operations and data analysis.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Cloudhawk", detail: "A male cybernetic drone with cloud-clearing capabilities and hawk-like precision.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Spyhawk", detail: "A male cybernetic drone combining stealth and hawk-like vision for covert missions.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Dronehawk", detail: "A male cybernetic drone designed for high-speed aerial maneuvers with hawk-like agility.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Skyspy", detail: "A male cybernetic drone specialized in sky-based espionage and data collection.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Reconbyte", detail: "A male cybernetic drone optimized for reconnaissance with byte-level precision.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Cyberbyte", detail: "A male cybernetic drone designed for advanced data handling and byte-level operations.", status: false, gender: "male", type: "cybernetic_drone" },
    { name: "Skyshadow", detail: "A female cybernetic drone with shadow-like stealth capabilities and aerial agility.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Ravenbyte", detail: "A female cybernetic drone with raven-like stealth and advanced byte-level data processing.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Falconbyte", detail: "A female cybernetic drone combining falcon-like speed with sophisticated byte-level technology.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Skyshade", detail: "A female cybernetic drone designed for sky-based operations with a shading capability for stealth.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Cloudstrike", detail: "A female cybernetic drone optimized for striking through cloud cover with precision.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Spyflight", detail: "A female cybernetic drone specializing in high-altitude surveillance and flight-based espionage.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Skyflare", detail: "A female cybernetic drone with flare technology for enhanced visibility and stealth operations.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Stealthwing", detail: "A female cybernetic drone with wing technology optimized for stealth and aerial maneuvers.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Falconwing", detail: "A female cybernetic drone designed with advanced wing technology and falcon-like speed.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Cloudbyte", detail: "A female cybernetic drone combining cloud-clearing features with advanced byte-level data handling.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Reconqueen", detail: "A female cybernetic drone optimized for reconnaissance with queen-level precision and control.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Skyhawk", detail: "A female cybernetic drone with hawk-like vision and sky-based operational capabilities.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Opticflare", detail: "A female cybernetic drone with advanced optical sensors and flare technology for enhanced vision.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Skyqueen", detail: "A female cybernetic drone designed for high-altitude dominance and queen-like control.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Datahawk", detail: "A female cybernetic drone with advanced data collection capabilities and hawk-like precision.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Falconqueen", detail: "A female cybernetic drone combining falcon-like speed with queen-level efficiency.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Skydrone", detail: "A female cybernetic drone designed for sky-based operations with advanced drone technology.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Skybolt", detail: "A female cybernetic drone with bolt technology for swift and powerful aerial maneuvers.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Stealthqueen", detail: "A female cybernetic drone specializing in stealth operations with queen-like strategic control.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Cloudhawk", detail: "A female cybernetic drone with cloud-clearing and hawk-like surveillance capabilities.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Skywing", detail: "A female cybernetic drone with advanced wing technology for graceful flight and aerial maneuvers.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Ravenbot", detail: "A female cybernetic drone with raven-like stealth and precision, optimized for reconnaissance.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Stealthbyte", detail: "A female cybernetic drone designed for stealth operations with advanced byte-level technology.", status: false, gender: "female", type: "cybernetic_drone" },
    { name: "Cloudflare", detail: "A female cybernetic drone combining cloud-clearing features with advanced flare technology.", status: false, gender: "female", type: "cybernetic_drone" }
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
const FictionalAndSciFi = [
   {
    name: "Alien Name Generator",
    pic: "/alien.webp",
    link: "https://www.nameideagenerator.com/alien-name-generator",
  },
  {
    name: "Island Name Generator",
    pic: "/island1.jpg",
    link: "https://www.nameideagenerator.com/island-name-generator",
  },
  {
    name: "Song Name Generator",
    pic: "/pop.jpg",
    link: "https://www.nameideagenerator.com/song-name-generator",
  },
  {
    name: "Angel Name Generator",
    pic: "/angel.jpg",
    link: "https://www.nameideagenerator.com/angel-name-generator",
  },
    ];

const RobotNameGenerator = () => {
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

    const bgImage = "/robot.jpg"
    const context = " Robot Name Generator"

    const Q1 = "What is a Robot Name Generator?"

    const A1 = 'Our Robot Name Generator is an online tool designed to generate unique and futuristic names for robots in various creative projects.'
    
    const Q2 = "Is it free to use?"
    
    const A2 = 'Yes, our Robot Name Generator is free to use for all users. So use it unlimited without any fear of paying a single penny.'
    
    const Q3 = "Can I use the names generated commercially?"
    
    const A3 = "Yes, you can use the names generated by our generator for commercial purposes, including books, games, and other creative projects."
    
    const Q4 = "Do I need to create an account to use the generator?"
    
    const A4 = "You can use the basic features of our generator without creating an account. However, creating an account allows you to save and manage your favorite names for future reference."
    
    const Q5 = "Is my data secure?"
    
    const A5 = "We prioritize the security and privacy of your data. Our platform employs robust security measures to protect your information."

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
        <a href="/categories/fictional-and-scifi" className="hover:underline text-[#343a40]">Fictional and Sci-Fi</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/robot-name-generator" className="hover:underline text-[#343a40]">Robot Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Robot Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Robot</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="techno_bot">Techno-Bots</option>
                            <option value="android">Android-Bot</option>
                            <option value="clockwork_automaton">Clockwork-Bot</option>
                            <option value="cybernetic_drone">Cybernetic Drone</option>

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
                        Our Robot Name Generator is an advanced tool designed to explore a range of futuristic naming possibilities for your mechanical creations. Whether you are a writer developing a sci-fi narrative, 
                        a game developer designing androids, or simply exploring the realm of robotics, our tool helps you find the perfect names for your robotic characters.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        With our generator, you can create distinctive names that reflect the unique traits and functions of your robots. 
                        From humanoid assistants to industrial machines, our tool generates names that enhance the personality and purpose of your mechanical beings.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                        Robots embody the essence of technology and innovation, and their names play a crucial role in defining their roles and identities in your projects. 
                        Our Robot Name Generator uses sophisticated algorithms to produce names inspired by futuristic concepts, technological terms, and creative combinations, ensuring that each name resonates with the essence of robotics.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Robot Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    Our Robot Name Generator is straightforward. Follow these steps to discover the perfect names for your robots:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 1: Specify Function
                            </h3>
                            <p>
                            Choose a primary function for the robot, such as domestic, industrial, or exploratory, to influence the style of names generated.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                            Step 2: Select the Type
                            </h3>
                            <p>
                            Decide on the type of robot name you want, such as futuristic, functional, or whimsical.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 3: Click on Generate
                            </h3>
                            <p>
                            Hit the <b> "Generate"</b> button to create a list of robot names based on your preferences.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold ">
                            Step 4: Review Names and Their Descriptions
                            </h3>
                            <p>
                            Names will appear on your screen. Hover over each to see details about the name's intended function, design inspiration, and potential uses.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="robot1.jpg"
                            alt="Robot Name Generator | Random Robot Name Generator With Meaning"
                            className="w-[250px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="robot2.jpg"
                            alt="Robot Name Generator | Random Robot Name Generator With Meaning"
                            className="w-[260px] h-[300px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/robot.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Robot Name Generator
                </p>
                <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
                    {FictionalAndSciFi.map((item, index) => (
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
                    Why Use Our Robot Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    By offering a broad range of names, our generator ensures that you have the perfect fit for any robot related concept. 
                    This is what is an invaluable resource for all your creative needs. Scroll down to see the more exclusive features that make it a top choice for you.
                    </p>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Explore the features to see how our generator can enhance your creative process.
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Enhance the Creativity
                                </h3>
                                <p>
                                Our Robot Name Generator helps you create names that capture the essence of these unique creatures. 
                                This tool offers a wide range of options to elevate your project. 
                                Not only this, it also ensures your results are flawless. Use it confidently to enhance your fantasy world or characters.
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Simplify Your Process
                                </h3>
                                <p>
                                Naming your robots can be intricate, but our generator makes it easy for you. 
                                With just one click, you'll get a list of robot names that perfectly align with your robot’s lore and characteristics. 
                                This efficiency lets you focus on other creative elements, making your workflow smoother and more productive.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Adaptable Naming Options
                                </h3>
                                <p>
                                Our generator provides adaptable naming solutions for various creative projects. If you're writing a fantasy novel, 
                                designing a role-playing game, or developing characters, you'll find names that seamlessly integrate with your creative vision with this quick and online Robot names generator tool.                
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Time-Saving Efficiency
                                </h3>
                                <p>
                                The tool is designed to deliver results quickly, reducing the time spent on the naming process. 
                                Users can generate multiple names with a single command, streamlining the workflow and allowing for efficient project management. 
                                This feature is particularly beneficial for creators working under tight deadlines, as it minimizes the effort required to find suitable names.                        
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Strengthen Your World-Building
                                </h3>
                                <p>
                                Names are crucial in defining your story's world. Our robot Name Generator offers names that reflect the robot culture and lore supporting detailed world-building. 
                                Use it to create a rich and believable fantasy environment. Our Robot Name Generator provides names that reflect robot culture so give it a try to enjoy its charm.                         
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                High-Quality Naming for Professionals
                                </h3>
                                <p>
                                If you're a writer, game developer, or designer, our Robot Name Generator delivers professional-grade names. 
                                These names are crafted to blend seamlessly into your projects. 
                                Also, it helps you show your dedication to authenticity and detail. Now use our Robot name generator to create names hassle-free.
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="robot3.jpg"
                            alt="Robot Name Generator | Random Robot Name Generator With Meaning"
                            class="w-[320px] my-[30px] h-[450px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="robot4.jpg"
                            alt="Robot Name Generator | Random Robot Name Generator With Meaning"
                            class="w-[320px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
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

export default RobotNameGenerator;

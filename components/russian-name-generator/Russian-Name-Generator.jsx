"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Ivan", detail: "Traditional and strong.", status: false, gender: "male", type: "traditional" },
    { name: "Dmitry", detail: "Loyal and brave.", status: false, gender: "male", type: "traditional" },
    { name: "Sergey", detail: "Protector and steadfast.", status: false, gender: "male", type: "traditional" },
    { name: "Nikolai", detail: "Victory of the people.", status: false, gender: "male", type: "traditional" },
    { name: "Alexei", detail: "Defender of mankind.", status: false, gender: "male", type: "traditional" },
    { name: "Vladimir", detail: "Ruler of the world.", status: false, gender: "male", type: "traditional" },
    { name: "Mikhail", detail: "Like God.", status: false, gender: "male", type: "traditional" },
    { name: "Boris", detail: "Fighter and warrior.", status: false, gender: "male", type: "traditional" },
    { name: "Andrei", detail: "Manly and strong.", status: false, gender: "male", type: "traditional" },
    { name: "Viktor", detail: "Victorious and strong.", status: false, gender: "male", type: "traditional" },
    { name: "Konstantin", detail: "Steadfast and constant.", status: false, gender: "male", type: "traditional" },
    { name: "Yuri", detail: "Farmer and Earth worker.", status: false, gender: "male", type: "traditional" },
    { name: "Pavel", detail: "Small and humble.", status: false, gender: "male", type: "traditional" },
    { name: "Igor", detail: "Warrior of peace.", status: false, gender: "male", type: "traditional" },
    { name: "Roman", detail: "Citizen of Rome.", status: false, gender: "male", type: "traditional" },
    { name: "Anatoly", detail: "From the East.", status: false, gender: "male", type: "traditional" },
    { name: "Fyodor", detail: "Gift of God.", status: false, gender: "male", type: "traditional" },
    { name: "Oleg", detail: "Holy and blessed.", status: false, gender: "male", type: "traditional" },
    { name: "Leonid", detail: "Lion-like and brave.", status: false, gender: "male", type: "traditional" },
    { name: "Vasily", detail: "King and ruler.", status: false, gender: "male", type: "traditional" },
    { name: "Georgy", detail: "Farmer and Earth worker.", status: false, gender: "male", type: "traditional" },
    { name: "Grigory", detail: "Watchful and vigilant.", status: false, gender: "male", type: "traditional" },
    { name: "Yaroslav", detail: "Fierce and glorious.", status: false, gender: "male", type: "traditional" },
    { name: "Maxim", detail: "The greatest.", status: false, gender: "male", type: "traditional" },
    { name: "Nikita", detail: "Victorious and strong.", status: false, gender: "male", type: "traditional" },
    { name: "Aleksandr", detail: "Defender of mankind.", status: false, gender: "male", type: "traditional" },
    { name: "Stanislav", detail: "Glorious and famous.", status: false, gender: "male", type: "traditional" },
    { name: "Ilya", detail: "My God is Yahweh.", status: false, gender: "male", type: "traditional" },
    { name: "Kirill", detail: "Lordly and noble.", status: false, gender: "male", type: "traditional" },
    { name: "Arkady", detail: "From Arcadia.", status: false, gender: "male", type: "traditional" },
    { name: "Valery", detail: "Strong and healthy.", status: false, gender: "male", type: "traditional" },
    { name: "Stepan", detail: "Crown and wreath.", status: false, gender: "male", type: "traditional" },
    { name: "Gennady", detail: "Noble and generous.", status: false, gender: "male", type: "traditional" },
    { name: "Lev", detail: "Lion and brave.", status: false, gender: "male", type: "traditional" },
    { name: "Vyacheslav", detail: "Famous and glorious.", status: false, gender: "male", type: "traditional" },
    { name: "Timofey", detail: "Honoring God.", status: false, gender: "male", type: "traditional" },
    { name: "Semyon", detail: "God has heard.", status: false, gender: "male", type: "traditional" },
    { name: "Rodion", detail: "Heroic and brave.", status: false, gender: "male", type: "traditional" },
    { name: "Yevgeny", detail: "Noble and well-born.", status: false, gender: "male", type: "traditional" },
    { name: "Zakhar", detail: "God has remembered.", status: false, gender: "male", type: "traditional" },
    { name: "Denis", detail: "Follower of Dionysus.", status: false, gender: "male", type: "traditional" },
    { name: "Artem", detail: "Safe and unharmed.", status: false, gender: "male", type: "traditional" },
    { name: "Petya", detail: "Rock and stone.", status: false, gender: "male", type: "traditional" },
    { name: "Vitaly", detail: "Full of life.", status: false, gender: "male", type: "traditional" },
    { name: "Yegor", detail: "Farmer and Earth worker.", status: false, gender: "male", type: "traditional" },
    { name: "Vladislav", detail: "Ruler of glory.", status: false, gender: "male", type: "traditional" },
    { name: "Filipp", detail: "Lover of horses.", status: false, gender: "male", type: "traditional" },
    { name: "Matvey", detail: "Gift of God.", status: false, gender: "male", type: "traditional" },
    { name: "Vasiliy", detail: "King and ruler.", status: false, gender: "male", type: "traditional" },
    { name: "Anastasia", detail: "Resurrection and rebirth.", status: false, gender: "female", type: "traditional" },
    { name: "Maria", detail: "Beloved and wished-for child.", status: false, gender: "female", type: "traditional" },
    { name: "Olga", detail: "Holy and blessed.", status: false, gender: "female", type: "traditional" },
    { name: "Natalia", detail: "Born on Christmas Day.", status: false, gender: "female", type: "traditional" },
    { name: "Tatiana", detail: "Fairy queen.", status: false, gender: "female", type: "traditional" },
    { name: "Svetlana", detail: "Light and pure.", status: false, gender: "female", type: "traditional" },
    { name: "Irina", detail: "Peace and harmony.", status: false, gender: "female", type: "traditional" },
    { name: "Elena", detail: "Shining light.", status: false, gender: "female", type: "traditional" },
    { name: "Ekaterina", detail: "Pure and clear.", status: false, gender: "female", type: "traditional" },
    { name: "Galina", detail: "Calm and serene.", status: false, gender: "female", type: "traditional" },
    { name: "Vera", detail: "Faith and truth.", status: false, gender: "female", type: "traditional" },
    { name: "Alina", detail: "Bright and beautiful.", status: false, gender: "female", type: "traditional" },
    { name: "Marina", detail: "Of the sea.", status: false, gender: "female", type: "traditional" },
    { name: "Polina", detail: "Little and humble.", status: false, gender: "female", type: "traditional" },
    { name: "Daria", detail: "Kingly and wealthy.", status: false, gender: "female", type: "traditional" },
    { name: "Lidia", detail: "Woman from Lydia.", status: false, gender: "female", type: "traditional" },
    { name: "Yelena", detail: "Shining light.", status: false, gender: "female", type: "traditional" },
    { name: "Valentina", detail: "Strong and healthy.", status: false, gender: "female", type: "traditional" },
    { name: "Ludmila", detail: "People's favor.", status: false, gender: "female", type: "traditional" },
    { name: "Inna", detail: "Strong water.", status: false, gender: "female", type: "traditional" },
    { name: "Raisa", detail: "Easy-going and carefree.", status: false, gender: "female", type: "traditional" },
    { name: "Zinaida", detail: "Born of Zeus.", status: false, gender: "female", type: "traditional" },
    { name: "Alla", detail: "Defender and protector.", status: false, gender: "female", type: "traditional" },
    { name: "Ksenia", detail: "Hospitable and kind.", status: false, gender: "female", type: "traditional" },
    { name: "Nadezhda", detail: "Hope and expectation.", status: false, gender: "female", type: "traditional" },
    { name: "Nina", detail: "Grace and favor.", status: false, gender: "female", type: "traditional" },
    { name: "Sofya", detail: "Wisdom and knowledge.", status: false, gender: "female", type: "traditional" },
    { name: "Larisa", detail: "Cheerful and joyful.", status: false, gender: "female", type: "traditional" },
    { name: "Yulia", detail: "Youthful and soft-haired.", status: false, gender: "female", type: "traditional" },
    { name: "Viktoria", detail: "Victory and triumph.", status: false, gender: "female", type: "traditional" },
    { name: "Tamara", detail: "Palm tree and oasis.", status: false, gender: "female", type: "traditional" },
    { name: "Evgenia", detail: "Noble and well-born.", status: false, gender: "female", type: "traditional" },
    { name: "Zoya", detail: "Life and vitality.", status: false, gender: "female", type: "traditional" },
    { name: "Oksana", detail: "Praise and glory.", status: false, gender: "female", type: "traditional" },
    { name: "Lyudmila", detail: "People's favor.", status: false, gender: "female", type: "traditional" },
    { name: "Nika", detail: "Victory and triumph.", status: false, gender: "female", type: "traditional" },
    { name: "Galina", detail: "Calm and serene.", status: false, gender: "female", type: "traditional" },
    { name: "Yana", detail: "God is gracious.", status: false, gender: "female", type: "traditional" },
    { name: "Valeria", detail: "Strong and healthy.", status: false, gender: "female", type: "traditional" },
    { name: "Svetlana", detail: "Light and pure.", status: false, gender: "female", type: "traditional" },
    { name: "Elizaveta", detail: "God is my oath.", status: false, gender: "female", type: "traditional" },
    { name: "Yevgeniya", detail: "Noble and well-born.", status: false, gender: "female", type: "traditional" },
    { name: "Irma", detail: "Universal and whole.", status: false, gender: "female", type: "traditional" },
    { name: "Taisia", detail: "Bond and knot.", status: false, gender: "female", type: "traditional" },
    { name: "Margarita", detail: "Pearl and precious.", status: false, gender: "female", type: "traditional" },
    { name: "Albina", detail: "White and fair.", status: false, gender: "female", type: "traditional" },
    { name: "Kira", detail: "Leader of the people.", status: false, gender: "female", type: "traditional" },
    { name: "Veronika", detail: "Victory and true image.", status: false, gender: "female", type: "traditional" },
    { name: "Aleksandra", detail: "Defender of mankind.", status: false, gender: "female", type: "traditional" },
    { name: "Liliya", detail: "Lily and purity.", status: false, gender: "female", type: "traditional" },
    { name: "Artyom", detail: "Modern and popular.", status: false, gender: "male", type: "modern" },
    { name: "Maxim", detail: "Greatest and foremost.", status: false, gender: "male", type: "modern" },
    { name: "Nikita", detail: "Victorious and strong.", status: false, gender: "male", type: "modern" },
    { name: "Roman", detail: "Citizen of Rome.", status: false, gender: "male", type: "modern" },
    { name: "Timofey", detail: "Honoring God.", status: false, gender: "male", type: "modern" },
    { name: "Vladislav", detail: "Ruler of glory.", status: false, gender: "male", type: "modern" },
    { name: "Yegor", detail: "Farmer and Earth worker.", status: false, gender: "male", type: "modern" },
    { name: "Ilya", detail: "My God is Yahweh.", status: false, gender: "male", type: "modern" },
    { name: "Semyon", detail: "God has heard.", status: false, gender: "male", type: "modern" },
    { name: "Kirill", detail: "Lordly and noble.", status: false, gender: "male", type: "modern" },
    { name: "Egor", detail: "Farmer and Earth worker.", status: false, gender: "male", type: "modern" },
    { name: "Bogdan", detail: "Gift of God.", status: false, gender: "male", type: "modern" },
    { name: "Matvey", detail: "Gift of God.", status: false, gender: "male", type: "modern" },
    { name: "Rostislav", detail: "Glorious and famous.", status: false, gender: "male", type: "modern" },
    { name: "Oleg", detail: "Holy and blessed.", status: false, gender: "male", type: "modern" },
    { name: "Danil", detail: "God is my judge.", status: false, gender: "male", type: "modern" },
    { name: "Anatoliy", detail: "From the East.", status: false, gender: "male", type: "modern" },
    { name: "Valentin", detail: "Strong and healthy.", status: false, gender: "male", type: "modern" },
    { name: "Zakhar", detail: "God has remembered.", status: false, gender: "male", type: "modern" },
    { name: "Daniil", detail: "God is my judge.", status: false, gender: "male", type: "modern" },
    { name: "Gleb", detail: "Heir and descendant.", status: false, gender: "male", type: "modern" },
    { name: "Yaroslav", detail: "Fierce and glorious.", status: false, gender: "male", type: "modern" },
    { name: "Stepan", detail: "Crown and wreath.", status: false, gender: "male", type: "modern" },
    { name: "Miron", detail: "Peace and tranquility.", status: false, gender: "male", type: "modern" },
    { name: "Rodion", detail: "Heroic and brave.", status: false, gender: "male", type: "modern" },
    { name: "Artur", detail: "Noble and courageous.", status: false, gender: "male", type: "modern" },
    { name: "Ruslan", detail: "Lion and strong.", status: false, gender: "male", type: "modern" },
    { name: "Savva", detail: "Wise and insightful.", status: false, gender: "male", type: "modern" },
    { name: "Timur", detail: "Iron and strength.", status: false, gender: "male", type: "modern" },
    { name: "Denis", detail: "Follower of Dionysus.", status: false, gender: "male", type: "modern" },
    { name: "Mark", detail: "Warlike and strong.", status: false, gender: "male", type: "modern" },
    { name: "Fedor", detail: "Gift of God.", status: false, gender: "male", type: "modern" },
    { name: "Boris", detail: "Fighter and warrior.", status: false, gender: "male", type: "modern" },
    { name: "Konstantin", detail: "Steadfast and constant.", status: false, gender: "male", type: "modern" },
    { name: "Yan", detail: "Gift of God.", status: false, gender: "male", type: "modern" },
    { name: "Eduard", detail: "Guardian and protector.", status: false, gender: "male", type: "modern" },
    { name: "Igor", detail: "Warrior of peace.", status: false, gender: "male", type: "modern" },
    { name: "Vadim", detail: "Judge and ruler.", status: false, gender: "male", type: "modern" },
    { name: "Georgy", detail: "Farmer and Earth worker.", status: false, gender: "male", type: "modern" },
    { name: "Leonid", detail: "Lion-like and brave.", status: false, gender: "male", type: "modern" },
    { name: "Aleksandr", detail: "Defender of mankind.", status: false, gender: "male", type: "modern" },
    { name: "Pavel", detail: "Small and humble.", status: false, gender: "male", type: "modern" },
    { name: "Sergei", detail: "Protector and defender.", status: false, gender: "male", type: "modern" },
    { name: "Viktor", detail: "Victorious and strong.", status: false, gender: "male", type: "modern" },
    { name: "Anatoliy", detail: "From the East.", status: false, gender: "male", type: "modern" },
    { name: "Valentin", detail: "Strong and healthy.", status: false, gender: "male", type: "modern" },
    { name: "Vladislav", detail: "Ruler of glory.", status: false, gender: "male", type: "modern" },
    { name: "Rostislav", detail: "Glorious and famous.", status: false, gender: "male", type: "modern" },
    { name: "Stanislav", detail: "Glorious and famous.", status: false, gender: "male", type: "modern" },
    { name: "Filipp", detail: "Lover of horses.", status: false, gender: "male", type: "modern" },
    { name: "Alina", detail: "Bright and beautiful.", status: false, gender: "female", type: "modern" },
    { name: "Polina", detail: "Little and humble.", status: false, gender: "female", type: "modern" },
    { name: "Anastasia", detail: "Resurrection and rebirth.", status: false, gender: "female", type: "modern" },
    { name: "Ekaterina", detail: "Pure and clear.", status: false, gender: "female", type: "modern" },
    { name: "Sofia", detail: "Wisdom and knowledge.", status: false, gender: "female", type: "modern" },
    { name: "Daria", detail: "Kingly and wealthy.", status: false, gender: "female", type: "modern" },
    { name: "Veronika", detail: "Victory and true image.", status: false, gender: "female", type: "modern" },
    { name: "Ksenia", detail: "Hospitable and kind.", status: false, gender: "female", type: "modern" },
    { name: "Elizaveta", detail: "God is my oath.", status: false, gender: "female", type: "modern" },
    { name: "Margarita", detail: "Pearl and precious.", status: false, gender: "female", type: "modern" },
    { name: "Taisia", detail: "Bond and knot.", status: false, gender: "female", type: "modern" },
    { name: "Valeria", detail: "Strong and healthy.", status: false, gender: "female", type: "modern" },
    { name: "Viktoria", detail: "Victory and triumph.", status: false, gender: "female", type: "modern" },
    { name: "Kseniya", detail: "Hospitable and kind.", status: false, gender: "female", type: "modern" },
    { name: "Angelina", detail: "Messenger and angel.", status: false, gender: "female", type: "modern" },
    { name: "Arina", detail: "Peaceful and calm.", status: false, gender: "female", type: "modern" },
    { name: "Kira", detail: "Leader of the people.", status: false, gender: "female", type: "modern" },
    { name: "Mila", detail: "Gracious and dear.", status: false, gender: "female", type: "modern" },
    { name: "Anastasiya", detail: "Resurrection and rebirth.", status: false, gender: "female", type: "modern" },
    { name: "Karina", detail: "Beloved and dear.", status: false, gender: "female", type: "modern" },
    { name: "Varvara", detail: "Stranger and foreigner.", status: false, gender: "female", type: "modern" },
    { name: "Alyona", detail: "Light and bright.", status: false, gender: "female", type: "modern" },
    { name: "Diana", detail: "Divine and heavenly.", status: false, gender: "female", type: "modern" },
    { name: "Elina", detail: "Bright and shining.", status: false, gender: "female", type: "modern" },
    { name: "Vasilisa", detail: "Royal and majestic.", status: false, gender: "female", type: "modern" },
    { name: "Nina", detail: "Grace and favor.", status: false, gender: "female", type: "modern" },
    { name: "Zoya", detail: "Life and vitality.", status: false, gender: "female", type: "modern" },
    { name: "Evelina", detail: "Desired and longed-for.", status: false, gender: "female", type: "modern" },
    { name: "Marina", detail: "Of the sea and calm.", status: false, gender: "female", type: "modern" },
    { name: "Yulia", detail: "Youthful and soft-haired.", status: false, gender: "female", type: "modern" },
    { name: "Tatiana", detail: "Fairy queen and protector.", status: false, gender: "female", type: "modern" },
    { name: "Natalia", detail: "Born on the Nativity.", status: false, gender: "female", type: "modern" },
    { name: "Milana", detail: "Gracious and pleasant.", status: false, gender: "female", type: "modern" },
    { name: "Kristina", detail: "Follower of Christ.", status: false, gender: "female", type: "modern" },
    { name: "Evgeniya", detail: "Noble and well-born.", status: false, gender: "female", type: "modern" },
    { name: "Liana", detail: "To twine and bind.", status: false, gender: "female", type: "modern" },
    { name: "Galina", detail: "Calm and serene.", status: false, gender: "female", type: "modern" },
    { name: "Vladislava", detail: "Glorious ruler.", status: false, gender: "female", type: "modern" },
    { name: "Olesya", detail: "Companion and helper.", status: false, gender: "female", type: "modern" },
    { name: "Sabina", detail: "Sabine woman and wise.", status: false, gender: "female", type: "modern" },
    { name: "Tamara", detail: "Palm tree and oasis.", status: false, gender: "female", type: "modern" },
    { name: "Lyudmila", detail: "People's favor.", status: false, gender: "female", type: "modern" },
    { name: "Zhanna", detail: "God is gracious.", status: false, gender: "female", type: "modern" },
    { name: "Irina", detail: "Peaceful and serene.", status: false, gender: "female", type: "modern" },
    { name: "Valentina", detail: "Strong and healthy.", status: false, gender: "female", type: "modern" },
    { name: "Angelina", detail: "Messenger and angel.", status: false, gender: "female", type: "modern" },
    { name: "Alexandra", detail: "Defender of mankind.", status: false, gender: "female", type: "modern" },
    { name: "Galina", detail: "Calm and serene.", status: false, gender: "female", type: "modern" },
    { name: "Ksusha", detail: "Beloved and dear.", status: false, gender: "female", type: "modern" },
    { name: "Liza", detail: "Consecrated to God.", status: false, gender: "female", type: "modern" },
    { name: "Rurik", detail: "Founder of the Rurik dynasty.", status: false, gender: "male", type: "historical" },
    { name: "Vladimir", detail: "Ruler of peace.", status: false, gender: "male", type: "historical" },
    { name: "Ivan", detail: "God is gracious.", status: false, gender: "male", type: "historical" },
    { name: "Pyotr", detail: "Rock and stone.", status: false, gender: "male", type: "historical" },
    { name: "Dmitry", detail: "Follower of Demeter.", status: false, gender: "male", type: "historical" },
    { name: "Mikhail", detail: "Who is like God?", status: false, gender: "male", type: "historical" },
    { name: "Fyodor", detail: "Gift of God.", status: false, gender: "male", type: "historical" },
    { name: "Alexander", detail: "Defender of mankind.", status: false, gender: "male", type: "historical" },
    { name: "Boris", detail: "Fighter and warrior.", status: false, gender: "male", type: "historical" },
    { name: "Andrey", detail: "Manly and brave.", status: false, gender: "male", type: "historical" },
    { name: "Igor", detail: "Warrior of peace.", status: false, gender: "male", type: "historical" },
    { name: "Yaroslav", detail: "Fierce and glorious.", status: false, gender: "male", type: "historical" },
    { name: "Lev", detail: "Lion and strong.", status: false, gender: "male", type: "historical" },
    { name: "Konstantin", detail: "Steadfast and constant.", status: false, gender: "male", type: "historical" },
    { name: "Vasily", detail: "Royal and majestic.", status: false, gender: "male", type: "historical" },
    { name: "Gleb", detail: "Heir and descendant.", status: false, gender: "male", type: "historical" },
    { name: "Svyatoslav", detail: "Holy glory.", status: false, gender: "male", type: "historical" },
    { name: "Vsevolod", detail: "Ruler of all.", status: false, gender: "male", type: "historical" },
    { name: "Oleg", detail: "Holy and blessed.", status: false, gender: "male", type: "historical" },
    { name: "Aleksey", detail: "Defender and protector.", status: false, gender: "male", type: "historical" },
    { name: "Nikifor", detail: "Bringer of victory.", status: false, gender: "male", type: "historical" },
    { name: "Matvey", detail: "Gift of God.", status: false, gender: "male", type: "historical" },
    { name: "Grigory", detail: "Watchful and vigilant.", status: false, gender: "male", type: "historical" },
    { name: "Arkady", detail: "From Arcadia.", status: false, gender: "male", type: "historical" },
    { name: "Zakhar", detail: "God has remembered.", status: false, gender: "male", type: "historical" },
    { name: "Anatoliy", detail: "From the East.", status: false, gender: "male", type: "historical" },
    { name: "Rodion", detail: "Heroic and brave.", status: false, gender: "male", type: "historical" },
    { name: "Vadim", detail: "Judge and ruler.", status: false, gender: "male", type: "historical" },
    { name: "Evgeniy", detail: "Noble and well-born.", status: false, gender: "male", type: "historical" },
    { name: "Pimen", detail: "Pious and humble.", status: false, gender: "male", type: "historical" },
    { name: "Nestor", detail: "Returning home.", status: false, gender: "male", type: "historical" },
    { name: "Gavriil", detail: "God is my strength.", status: false, gender: "male", type: "historical" },
    { name: "Ilya", detail: "My God is Yahweh.", status: false, gender: "male", type: "historical" },
    { name: "Bogdan", detail: "Gift of God.", status: false, gender: "male", type: "historical" },
    { name: "Tikhon", detail: "Peaceful and calm.", status: false, gender: "male", type: "historical" },
    { name: "Mstislav", detail: "Vengeance and glory.", status: false, gender: "male", type: "historical" },
    { name: "Roman", detail: "Citizen of Rome.", status: false, gender: "male", type: "historical" },
    { name: "Venedikt", detail: "Blessed and holy.", status: false, gender: "male", type: "historical" },
    { name: "Stanislav", detail: "Glorious and famous.", status: false, gender: "male", type: "historical" },
    { name: "Timofey", detail: "Honoring God.", status: false, gender: "male", type: "historical" },
    { name: "Filipp", detail: "Lover of horses.", status: false, gender: "male", type: "historical" },
    { name: "Yegor", detail: "Farmer and Earth worker.", status: false, gender: "male", type: "historical" },
    { name: "Artemy", detail: "Safe and unhurt.", status: false, gender: "male", type: "historical" },
    { name: "Anfisa", detail: "Blooming and flourishing.", status: false, gender: "male", type: "historical" },
    { name: "Lev", detail: "Lion and strong.", status: false, gender: "male", type: "historical" },
    { name: "Miron", detail: "Peace and tranquility.", status: false, gender: "male", type: "historical" },
    { name: "Yefim", detail: "God will heal.", status: false, gender: "male", type: "historical" },
    { name: "Platon", detail: "Broad and wide.", status: false, gender: "male", type: "historical" },
    { name: "Ignat", detail: "Fiery and passionate.", status: false, gender: "male", type: "historical" },
    { name: "Ippolit", detail: "Freeing horses.", status: false, gender: "male", type: "historical" },
    { name: "Olga", detail: "Holy and blessed.", status: false, gender: "female", type: "historical" },
    { name: "Yekaterina", detail: "Pure and clear.", status: false, gender: "female", type: "historical" },
    { name: "Maria", detail: "Sea of bitterness.", status: false, gender: "female", type: "historical" },
    { name: "Anastasia", detail: "Resurrection and rebirth.", status: false, gender: "female", type: "historical" },
    { name: "Nadezhda", detail: "Hope and faith.", status: false, gender: "female", type: "historical" },
    { name: "Sophia", detail: "Wisdom and knowledge.", status: false, gender: "female", type: "historical" },
    { name: "Tatyana", detail: "Fairy queen and protector.", status: false, gender: "female", type: "historical" },
    { name: "Varvara", detail: "Stranger and foreigner.", status: false, gender: "female", type: "historical" },
    { name: "Vasilisa", detail: "Royal and majestic.", status: false, gender: "female", type: "historical" },
    { name: "Ludmila", detail: "People's favor.", status: false, gender: "female", type: "historical" },
    { name: "Agafya", detail: "Good and pure.", status: false, gender: "female", type: "historical" },
    { name: "Pelageya", detail: "Of the sea.", status: false, gender: "female", type: "historical" },
    { name: "Feodosia", detail: "Gift of God.", status: false, gender: "female", type: "historical" },
    { name: "Kseniya", detail: "Hospitable and kind.", status: false, gender: "female", type: "historical" },
    { name: "Raisa", detail: "Easy-going and gentle.", status: false, gender: "female", type: "historical" },
    { name: "Evdokia", detail: "Pleasure and delight.", status: false, gender: "female", type: "historical" },
    { name: "Elena", detail: "Bright and shining light.", status: false, gender: "female", type: "historical" },
    { name: "Domna", detail: "Mistress and lady.", status: false, gender: "female", type: "historical" },
    { name: "Alexandra", detail: "Defender of mankind.", status: false, gender: "female", type: "historical" },
    { name: "Feodora", detail: "Gift of God.", status: false, gender: "female", type: "historical" },
    { name: "Glafira", detail: "Charming and graceful.", status: false, gender: "female", type: "historical" },
    { name: "Militsa", detail: "Gentle and kind.", status: false, gender: "female", type: "historical" },
    { name: "Yevpraksia", detail: "Virtuous and noble.", status: false, gender: "female", type: "historical" },
    { name: "Yuliana", detail: "Youthful and downy.", status: false, gender: "female", type: "historical" },
    { name: "Agnessa", detail: "Pure and chaste.", status: false, gender: "female", type: "historical" },
    { name: "Mavra", detail: "Dark and mysterious.", status: false, gender: "female", type: "historical" },
    { name: "Marta", detail: "Lady and mistress.", status: false, gender: "female", type: "historical" },
    { name: "Veronika", detail: "Bringer of victory.", status: false, gender: "female", type: "historical" },
    { name: "Zinovia", detail: "Life and vitality.", status: false, gender: "female", type: "historical" },
    { name: "Inna", detail: "Peaceful and calm.", status: false, gender: "female", type: "historical" },
    { name: "Zoya", detail: "Life and vitality.", status: false, gender: "female", type: "historical" },
    { name: "Stefania", detail: "Crown and honor.", status: false, gender: "female", type: "historical" },
    { name: "Anfisa", detail: "Blooming and flourishing.", status: false, gender: "female", type: "historical" },
    { name: "Antonina", detail: "Priceless and precious.", status: false, gender: "female", type: "historical" },
    { name: "Fevronia", detail: "Radiant and fair.", status: false, gender: "female", type: "historical" },
    { name: "Serafima", detail: "Fiery and ardent.", status: false, gender: "female", type: "historical" },
    { name: "Margarita", detail: "Pearl and daisy.", status: false, gender: "female", type: "historical" },
    { name: "Elizaveta", detail: "Consecrated to God.", status: false, gender: "female", type: "historical" },
    { name: "Marina", detail: "Of the sea and calm.", status: false, gender: "female", type: "historical" },
    { name: "Feodosia", detail: "Gift of God.", status: false, gender: "female", type: "historical" },
    { name: "Evgenia", detail: "Noble and well-born.", status: false, gender: "female", type: "historical" },
    { name: "Natalia", detail: "Born on the Nativity.", status: false, gender: "female", type: "historical" },
    { name: "Praskovia", detail: "Old and traditional.", status: false, gender: "female", type: "historical" },
    { name: "Claudia", detail: "Lame and weak.", status: false, gender: "female", type: "historical" },
    { name: "Svetlana", detail: "Light and radiance.", status: false, gender: "female", type: "historical" },
    { name: "Aglaia", detail: "Bright and shining.", status: false, gender: "female", type: "historical" },
    { name: "Anisia", detail: "Friendly and warm.", status: false, gender: "female", type: "historical" },
    { name: "Lidiya", detail: "Woman from Lydia.", status: false, gender: "female", type: "historical" },
    { name: "Perun", detail: "God of thunder and lightning.", status: false, gender: "male", type: "slavic" },
    { name: "Veles", detail: "God of earth, waters, and the underworld.", status: false, gender: "male", type: "slavic" },
    { name: "Svarog", detail: "God of fire and forging.", status: false, gender: "male", type: "slavic" },
    { name: "Rod", detail: "God of fate and creation.", status: false, gender: "male", type: "slavic" },
    { name: "Dažbog", detail: "God of the sun and prosperity.", status: false, gender: "male", type: "slavic" },
    { name: "Triglav", detail: "God of the three-headed mountain.", status: false, gender: "male", type: "slavic" },
    { name: "Jarilo", detail: "God of fertility and spring.", status: false, gender: "male", type: "slavic" },
    { name: "Viy", detail: "God of darkness and death.", status: false, gender: "male", type: "slavic" },
    { name: "Lada", detail: "Goddess of beauty and fertility.", status: false, gender: "male", type: "slavic" },
    { name: "Yarilo", detail: "God of fertility and rebirth.", status: false, gender: "male", type: "slavic" },
    { name: "Radegast", detail: "God of hospitality and war.", status: false, gender: "male", type: "slavic" },
    { name: "Chur", detail: "God of forests and wild animals.", status: false, gender: "male", type: "slavic" },
    { name: "Stribog", detail: "God of the winds and sky.", status: false, gender: "male", type: "slavic" },
    { name: "Domovoy", detail: "Household spirit and protector.", status: false, gender: "male", type: "slavic" },
    { name: "Morozko", detail: "Spirit of winter and frost.", status: false, gender: "male", type: "slavic" },
    { name: "Koshchei", detail: "Immortal sorcerer and antagonist.", status: false, gender: "male", type: "slavic" },
    { name: "Volos", detail: "God of cattle and commerce.", status: false, gender: "male", type: "slavic" },
    { name: "Svarozhich", detail: "Son of Svarog and god of fire.", status: false, gender: "male", type: "slavic" },
    { name: "Kupalo", detail: "God of summer solstice and fertility.", status: false, gender: "male", type: "slavic" },
    { name: "Zmey", detail: "Dragon and serpent-like creature.", status: false, gender: "male", type: "slavic" },
    { name: "Koschei", detail: "Immortal sorcerer and antagonist.", status: false, gender: "male", type: "slavic" },
    { name: "Bannik", detail: "Spirit of the bathhouse.", status: false, gender: "male", type: "slavic" },
    { name: "Leshy", detail: "Forest spirit and guardian.", status: false, gender: "male", type: "slavic" },
    { name: "Volkhv", detail: "Wise man and pagan priest.", status: false, gender: "male", type: "slavic" },
    { name: "Zorya", detail: "Goddess of the dawn and dusk.", status: false, gender: "male", type: "slavic" },
    { name: "Dazhbog", detail: "God of the sun and prosperity.", status: false, gender: "male", type: "slavic" },
    { name: "Yarovit", detail: "God of fertility and harvest.", status: false, gender: "male", type: "slavic" },
    { name: "Simargl", detail: "Guardian of seeds and fertility.", status: false, gender: "male", type: "slavic" },
    { name: "Strzyga", detail: "Vampire-like creature and witch.", status: false, gender: "male", type: "slavic" },
    { name: "Sudzhenitsa", detail: "Spirit of the night and dream.", status: false, gender: "male", type: "slavic" },
    { name: "Dola", detail: "Spirit of the forest and nature.", status: false, gender: "male", type: "slavic" },
    { name: "Ovinik", detail: "Spirit of the barn and livestock.", status: false, gender: "male", type: "slavic" },
    { name: "Polunoch", detail: "Spirit of midnight and darkness.", status: false, gender: "male", type: "slavic" },
    { name: "Rusalka", detail: "Water spirit and siren.", status: false, gender: "male", type: "slavic" },
    { name: "Vodyanoy", detail: "Water spirit and river guardian.", status: false, gender: "male", type: "slavic" },
    { name: "Kikimora", detail: "Household spirit and mischief-maker.", status: false, gender: "male", type: "slavic" },
    { name: "Alkonost", detail: "Mythical bird with a beautiful voice.", status: false, gender: "male", type: "slavic" },
    { name: "Sirin", detail: "Bird-like creature with a beautiful song.", status: false, gender: "male", type: "slavic" },
    { name: "Gamayun", detail: "Mythical bird with prophetic abilities.", status: false, gender: "male", type: "slavic" },
    { name: "Bogdan", detail: "Gift of God.", status: false, gender: "male", type: "slavic" },
    { name: "Zmey Gorynych", detail: "Three-headed dragon.", status: false, gender: "male", type: "slavic" },
    { name: "Yarovit", detail: "God of fertility and harvest.", status: false, gender: "male", type: "slavic" },
    { name: "Belobog", detail: "God of light and goodness.", status: false, gender: "male", type: "slavic" },
    { name: "Chernobog", detail: "God of darkness and evil.", status: false, gender: "male", type: "slavic" },
    { name: "Vseslav", detail: "All-glorious and renowned.", status: false, gender: "male", type: "slavic" },
    { name: "Zmey Tugarin", detail: "Dragon antagonist in Slavic folklore.", status: false, gender: "male", type: "slavic" },
    { name: "Zmey Gorynych", detail: "Three-headed dragon.", status: false, gender: "male", type: "slavic" },
    { name: "Mavka", detail: "Forest nymph and spirit.", status: false, gender: "male", type: "slavic" },
    { name: "Zvezda", detail: "Star and celestial body.", status: false, gender: "male", type: "slavic" },
    { name: "Lada", detail: "Goddess of beauty and fertility.", status: false, gender: "female", type: "slavic" },
    { name: "Mara", detail: "Goddess of death and chaos.", status: false, gender: "female", type: "slavic" },
    { name: "Mokosh", detail: "Goddess of fertility and women.", status: false, gender: "female", type: "slavic" },
    { name: "Zorya", detail: "Goddess of the dawn and dusk.", status: false, gender: "female", type: "slavic" },
    { name: "Morana", detail: "Goddess of winter and death.", status: false, gender: "female", type: "slavic" },
    { name: "Vesna", detail: "Goddess of spring and renewal.", status: false, gender: "female", type: "slavic" },
    { name: "Rusalka", detail: "Water spirit and siren.", status: false, gender: "female", type: "slavic" },
    { name: "Marzanna", detail: "Goddess of winter and death.", status: false, gender: "female", type: "slavic" },
    { name: "Snegurochka", detail: "Snow maiden and winter spirit.", status: false, gender: "female", type: "slavic" },
    { name: "Morena", detail: "Goddess of death and winter.", status: false, gender: "female", type: "slavic" },
    { name: "Alkonost", detail: "Mythical bird with a beautiful voice.", status: false, gender: "female", type: "slavic" },
    { name: "Sirin", detail: "Bird-like creature with a beautiful song.", status: false, gender: "female", type: "slavic" },
    { name: "Gamayun", detail: "Mythical bird with prophetic abilities.", status: false, gender: "female", type: "slavic" },
    { name: "Dola", detail: "Spirit of the forest and nature.", status: false, gender: "female", type: "slavic" },
    { name: "Sudzhenitsa", detail: "Spirit of the night and dream.", status: false, gender: "female", type: "slavic" },
    { name: "Bereginya", detail: "Protective spirit of the home.", status: false, gender: "female", type: "slavic" },
    { name: "Boginya", detail: "Goddess and protector.", status: false, gender: "female", type: "slavic" },
    { name: "Dodola", detail: "Goddess of rain and fertility.", status: false, gender: "female", type: "slavic" },
    { name: "Navka", detail: "Spirit of death and afterlife.", status: false, gender: "female", type: "slavic" },
    { name: "Kostroma", detail: "Goddess of the harvest and fertility.", status: false, gender: "female", type: "slavic" },
    { name: "Kikimora", detail: "Household spirit and mischief-maker.", status: false, gender: "female", type: "slavic" },
    { name: "Yaga", detail: "Forest witch and guardian.", status: false, gender: "female", type: "slavic" },
    { name: "Ovinnik", detail: "Spirit of the barn and livestock.", status: false, gender: "female", type: "slavic" },
    { name: "Polunoch", detail: "Spirit of midnight and darkness.", status: false, gender: "female", type: "slavic" },
    { name: "Doyna", detail: "Spirit of song and music.", status: false, gender: "female", type: "slavic" },
    { name: "Zvezda", detail: "Star and celestial body.", status: false, gender: "female", type: "slavic" },
    { name: "Yanka", detail: "Graceful and gentle.", status: false, gender: "female", type: "slavic" },
    { name: "Bannik", detail: "Spirit of the bathhouse.", status: false, gender: "female", type: "slavic" },
    { name: "Leshenka", detail: "Forest spirit and guardian.", status: false, gender: "female", type: "slavic" },
    { name: "Marzanna", detail: "Goddess of winter and death.", status: false, gender: "female", type: "slavic" },
    { name: "Nastasya", detail: "Resurrection and rebirth.", status: false, gender: "female", type: "slavic" },
    { name: "Zmeyana", detail: "Dragon-like and fierce.", status: false, gender: "female", type: "slavic" },
    { name: "Valera", detail: "Strong and brave.", status: false, gender: "female", type: "slavic" },
    { name: "Lelya", detail: "Gentle and kind.", status: false, gender: "female", type: "slavic" },
    { name: "Jarilka", detail: "Goddess of fertility and harvest.", status: false, gender: "female", type: "slavic" },
    { name: "Yarila", detail: "God of fertility and spring.", status: false, gender: "female", type: "slavic" },
    { name: "Zmeyka", detail: "Dragon-like and powerful.", status: false, gender: "female", type: "slavic" },
    { name: "Devana", detail: "Goddess of the hunt and wild.", status: false, gender: "female", type: "slavic" },
    { name: "Lyuba", detail: "Love and compassion.", status: false, gender: "female", type: "slavic" },
    { name: "Krasota", detail: "Beauty and grace.", status: false, gender: "female", type: "slavic" },
    { name: "Malusha", detail: "Gentle and kind.", status: false, gender: "female", type: "slavic" },
    { name: "Malina", detail: "Raspberry and sweetness.", status: false, gender: "female", type: "slavic" },
    { name: "Yasna", detail: "Bright and clear.", status: false, gender: "female", type: "slavic" },
    { name: "Bogumila", detail: "God's grace and favor.", status: false, gender: "female", type: "slavic" },
    { name: "Arina", detail: "Peaceful and serene.", status: false, gender: "female", type: "slavic" },
    { name: "Rada", detail: "Joyful and content.", status: false, gender: "female", type: "slavic" },
    { name: "Mlada", detail: "Youthful and vibrant.", status: false, gender: "female", type: "slavic" },
    { name: "Triglavka", detail: "Goddess of the three-headed mountain.", status: false, gender: "female", type: "slavic" },
    { name: "Dazhbogova", detail: "Daughter of Dazhbog and goddess of prosperity.", status: false, gender: "female", type: "slavic" },
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
const Category2 = [
    {
        name: "Viking Name Generator",
        pic: "/vikings.jpg",
        link: "https://www.nameideagenerator.com/viking-name-generator",
    },
    {
        name: "Russian Name Generator",
        pic: "/Russian.webp",
        link: "https://www.nameideagenerator.com/russian-name-generator",
    },
    {
        name: "Norse Name Generator",
        pic: "/Norse.jpg",
        link: "https://www.nameideagenerator.com/norse-name-generator",
    },
    {
        name: "Greek Name Generator",
        pic: "greek.webp",
        link: "https://www.nameideagenerator.com/greek-name-generator",
    },
    ];

const RussianNameGenerator = () => {
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

    const bgImage = "/Russian.webp"
    const context = "Russian Name Generator"
    const Q1 = "What is a Russian Name Generator?"
    const A1 = "A Russian Name Generator is a free online tool for generating authentic Russian names. It applies algorithms in combining real Russian naming contents, like first names and surnames, to come up with a unique and culturally appropriate name."
    const Q2 = "How does the Russian Name Generator work?"
    const A2 = "The generator works by randomly selecting from a database of Russian first names and surnames. It then combines these elements to create new, realistic Russian names. Users can specify gender or other preferences to tailor the generated names."
    const Q3 = "Are the names generated culturally accurate?"
    const A3 = "Yes, the generator uses a database of authentic Russian names to ensure that the generated names are culturally accurate and appropriate. It aims to provide names that reflect the linguistic and cultural norms of Russian naming conventions."
    const Q4 = "Can I use the names generated commercially or in my projects?"
    const A4 = "Yes, the names generated with the Russian Name Generator are used for a wide array of different applications ranging from commercial projects to writing and gaming. Sure, one must always be aware of the culture that is occurring and be sensitive to derived names."
    const Q5 = "Is the Russian Name Generator free to use?"
    const A5 = "Yes, our Russian Name Generators offer name generation for free. You can generate a lot of names within seconds without any cost."


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
                            Random Russian Name Generator With Meaning
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
                        <p className="text-center text-[#343a40]">Types of Russian Name</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="traditional">Traditional</option>
                            <option value="Modern">Modern</option>
                            <option value="Historical">Historical</option>
                            <option value="Slavic">Slavic</option>

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
                            Our soviet name generator tool enables you to generate authentic Russian names effortlessly. This tool simplifies the process of finding the perfect Russian name for a character and a project or personal use.
                            Just a few seconds the generator provides you with a list of culturally rich names.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                            This online russian name generator fantasy tool makes choosing your perfect name easier. You can use this tool for various purposes, including naming characters, creating usernames, or even for fun.
                            Our russian name generator male tool saves your time and ensures meaningful, pertinent names, not by flipping through tons of papers.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                            We have designed and developed our russian surname generator with robust security features to keep user data safe and secure. It uses encryption technology to protect sensitive
                            information such as user names, passwords, and saved lists. Everything will remain safe.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    How to Use the Russian Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                        To use our Russian Male & Female Name Generator effectively, follow these steps:
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                                Step 1: Access the Tool
                            </h3>
                            <p>
                                Open Our Russia Name Generator tool on your browser.
                                This will bring up the interface where you can start customizing your name search.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[28px] text-[20px] font-semibold">
                                Step 2: Set Your Preferences
                            </h3>
                            <p>
                                Enter your preferences for the Russian names, such as gender.
                                You can choose options that will open on your screen to give the tool your requirements.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <p className="sm:text-[28px] text-[20px] font-semibold ">
                                Step 3: Generate Names
                            </p>
                            <p>
                            Click the "Generate" button. The tool will produce a list of Russian names based on your preferences. Choose the one that suits your needs.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[47%] relative ">
                        <img
                            src="russian2.webp"
                            alt=""
                            className="w-[240px] my-[10px] h-[300px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="russian4.jpeg"
                            alt=""
                            className="w-[270px] h-[320px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div className="relative py-[100px]">
    <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        style={{
            backgroundImage: 'url("/Russian.webp")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }}
    ></div>
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white relative z-10">
                    Related to Russian Name Generator
                </p>
                <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
                    {Category2.map((item, index) => (
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
                    What Makes Our Russian Name Generator Female the Top Choice?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    The Russian Name Gene is a convenient way to find the perfect name quickly and accurately. It makes the process easier, saves time, and adds cultural authenticity to the names you choose. 
                    <br /> <br />
                    There are several compelling reasons to use our russian surnames generator tool, including for the following:

                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                                Diverse Name Generation
                                </h3>
                                <p>
                                Our Russian Name Generator provides a vast array of name options, ensuring you find the perfect match for your character, project, or any creative endeavor. 
                                Whether you're seeking traditional or unique names, the generator offers a wide selection tailored to your needs.

                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Quick and Easy Use
                                </h3>
                                <p>
                                Designed with a user-friendly interface, our russian nickname generator tool allows you to generate names effortlessly. 
                                With just a few clicks, you can explore numerous options without any hassle, making the process efficient and enjoyable.
                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Creative Inspiration
                                </h3>
                                <p>
                                The generator sparks creativity by providing a variety of name styles and themes. 
                                It helps you explore different naming possibilities, fueling your imagination for writing, gaming, or other creative projects.                               
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Versatile Applications
                                </h3>
                                <p>
                                Whether you need a name for a story character, a gaming avatar, or a personal project, our russian name maker tool caters to various use cases. 
                                Its flexibility ensures that you can find a name suitable for any purpose.                               
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                No Registration Required
                                </h3>
                                <p>
                                You can use our tool immediately without needing to sign up or provide personal information. 
                                This convenience allows you to start generating names right away. Now save your time and effort with our online Russian names generator tool.                              
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                                Free Access
                                </h3>
                                <p>
                                Enjoy the full functionality of our tool at no cost. We have launched this tool, which is free to use for users without any fees. 
                                Now, you can generate as many names as you need without any charges, making it an accessible resource for everyone.                              
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="russian1.webp"
                            alt="Tiefling Image 1"
                            class="w-[350px] my-[30px] h-[430px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="russian3.jpg"
                            alt="Tiefling Image 2"
                            class="w-[350px] h-[450px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className=" py-[30px]  mx-auto">
                    <section class="w-[80%] mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Applications of the Russian Name Generator</h2>
                        <p class="text-gray-600 mb-4">
                        My name in Russian Generator is a versatile tool that streamlines the process of finding the perfect name. Here are some key applications:
                        </p>
                        <div class="py-[10px] flex flex-col gap-2">
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Character Naming
                            </h3>
                            <p class="text-gray-600 mb-4">
                            Ideal for writers, game developers, and creators, this tool helps you find authentic Russian names
                             for characters, adding cultural depth and accuracy to your stories, games, or other creative projects.
                            </p>
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Username Creation
                            </h3>
                            <p class="text-gray-600 mb-4">
                            Whether for social media, forums, or online gaming, our tool makes it easy to create unique, 
                            culturally rich usernames that help you stand out with a name that reflects your interests or heritage.
                            </p>
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Personal Use
                            </h3>
                            <p class="text-gray-600 mb-4">
                            Whether you're looking to create a pseudonym, explore your cultural roots, or simply find a name that resonates with you, 
                            this tool offers the perfect solution for adding a personal touch to your projects or online presence.
                            </p>
                            <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Research and Learning
                            </h3>
                            <p class="text-gray-600 mb-4">
                            For researchers, students, and educators, the Russian Name Generator provides accurate and culturally appropriate names for academic projects,
                             papers, or studies, ensuring the authenticity and depth of your work.</p>
                        </div>
                    </section>
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

export default RussianNameGenerator;

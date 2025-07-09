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
  const Q1 = "Are the names based on real Russian language and culture?"
  const A1 = "Yes! The names are rooted in authentic Russian naming conventions, which include historical and cultural significance."
  const Q2 = "Do the generated names include meanings?"
  const A2 = "Yes! Hover over each name to see its meaning, origin, and cultural context, and help you choose the one that fits best."
  const Q3 = "How many names can I generate?"
  const A3 = "You can generate as many names as you need. No limits! Keep clicking to find the perfect name for your character."
  const Q4 = "Can I use the Russian Name Generator for modern characters?"
  const A4 = "Yes! The tool offers both traditional and modern Russian names, so you can choose names that fit any time period or setting."
  const Q5 = "Should I pick a name before or after building the backstory?"
  const A5 = "You can do either. Some players pick the name first for inspiration. Others build a backstory and then use the generator to match it. Try both ways."


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
                  <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40]">Cultural and Historical Name</a>
                </li>
                <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 19l7-7-7-7"></path>
                </svg>
                <li className="flex items-center">
                  <a href="/russian-name-generator" className="hover:underline text-[#343a40]">Russian Name Generator</a>
                </li>
              </ol>
            </nav>
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
              Finding the Perfect Russian Name Just Got Easier
            </h2>
            <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
              You don’t need to guess what sounds Russian enough. You need names that feel real. Names that fit a Slavic world,
              a cold war spy, or a folk hero in a fantasy forest. Russian names carry weight. They tell stories. You just need the right tool to unlock them.
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
            How to Use Our Russian Name Generator?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
            To use our Russian Male & Female Name Generator effectively, follow these steps:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
                Step 1: Pick the Gender
              </h3>
              <p>
                Start by selecting the gender of your character. Russian names differ based on gender, and this step helps ensure the name matches cultural norms.
                Choose male, female, or unisex options to get the most accurate results.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
                Step 2: Select a Name Type
              </h3>
              <p>
                After choosing gender, pick the style of name you want. Do you need something historical and traditional?
                Or maybe something modern and unique? Or hopping towards a Salvic name?  The generator offers different styles like noble,
                common, or modern, which allow you to tailor the names to your character's background.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                Step 3: Click ‘Generate’
              </h3>
              <p>
                Hit the “Generate” button to instantly receive a list of name suggestions.
                Each click brings a new batch of names, so you can quickly explore different options that suit your character.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                Step 4: Hover to View Name Meanings
              </h3>
              <p>
                Curious about the meaning behind a name? Hover over any name to view its meaning, origin, or cultural context.
                This will help you pick a name with the right story or significance.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[24px] text-[20px] font-semibold ">
                Adjust and Try Again
              </h3>
              <p>
                Not satisfied with the first set of names? Change the style, gender, or any other setting to refine your results.
                The more specific you get with your preferences, the more targeted and relevant the names will be.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="russian2.webp"
              alt="Russian Name Generator | Random Russian Name Generator With Meaning"
              className="w-[300px] h-[370px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
            />
            <img
              src="russian4.jpeg"
              alt="Russian Name Generator | Random Russian Name Generator With Meaning"
              className="w-[300px] h-[370px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/russian name generator bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
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

      <section className="py-16 px-4 bg-white text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Use Our Russian Name Tool?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Works instantly to generate names without delay",
              "Provides accurate Russian name structures based on tradition",
              "Includes both traditional and modern styles to fit your needs",
              "Shows name meanings with one hover to add depth",
              "Ensures cultural accuracy for a realistic feel",
              "Offers unlimited name ideas with every click",
              "Customizable filters for more specific results",
              "Helps build unique, memorable characters quickly",
              "Perfect for writers, role-players, and game developers",
              "Saves time by cutting out hours of research",
              "Great for creating authentic Russian names for any project",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
              >
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg">
              You can also browse more options in our{" "}
              <a
                href="categories/cultural-and-historical"
                className="text-blue-600 font-medium"
              >
                Cultural and Historical Name Generators hub
              </a>.
            </p>
          </div>
        </div>
      </section>

      <div class="w-[90%] max-w-7xl mx-auto my-16 text-[#343a40]">
        <div class="text-center mb-8">
          <h2 class="text-[26px] sm:text-[36px] font-bold mb-4">
            Where Do Russian Names Come From?
          </h2>
          <p class="text-[16px] sm:text-[18px] leading-relaxed font-medium mx-auto">
            Russian names follow a specific structure made up of a first name, a patronymic, and a surname. The patronymic comes from the father’s first name. For example, a man named Ivan whose father is Nikolai would be called <span class="font-semibold">Ivan Nikolaevich</span>.
          </p>
        </div>

        <div class="space-y-5 text-[16px] leading-relaxed">
          <p>
            Russian surnames also reflect gender — <span class="font-semibold">“Ivanov” becomes “Ivanova”</span> for a woman. These naming conventions give Russian names a unique cultural depth, tracing back to <span class="italic">centuries-old Slavic traditions</span> that often reflect family history, region, or social status.
          </p>
          <p>
            Many well-known names like <span class="font-semibold">“Dmitri,” “Anastasia,” or “Yelena”</span> carry religious or historical meaning. Some originate from Orthodox saints, while others are rooted in old pagan traditions.
          </p>
          <p>
            When you choose a Russian name, you’re not just picking random syllables — <span class="font-semibold">you’re choosing a name with legacy, symbolism, and story</span>.
          </p>
        </div>
      </div>

      <div class="w-[90%] max-w-7xl mx-auto my-16 text-[#343a40]">
        <div class="text-center mb-8">
          <h2 class="text-[26px] sm:text-[36px] font-bold mb-4">
            Why Do Russian Names Matter in Storytelling?
          </h2>
          <p class="text-[16px] sm:text-[18px] leading-relaxed font-medium mx-auto">
            Russian names aren’t just culturally rich — they instantly evoke strong emotions and vivid impressions, making them a powerful tool for writers, gamers, and storytellers.
          </p>
        </div>

        <div class="space-y-5 text-[16px] leading-relaxed">
          <p>
            When you hear names like <span class="font-semibold">"Dmitri"</span> or <span class="font-semibold">"Anastasia"</span>, they feel loaded with mystery, nobility, or strength. These names set a mood before the character even speaks.
          </p>
          <p>
            Whether you're writing a novel, creating a game avatar, or role-playing, using an authentic Russian name gives your character identity, background, and depth.
          </p>
          <p>
            It’s not just about sounding cool — it’s about giving your character roots. Names like <span class="font-semibold">"Ivan"</span> or <span class="font-semibold">"Tatiana"</span> carry heritage, making your story more immersive and believable.
          </p>
        </div>
      </div>

      <div class="w-[90%] max-w-7xl mx-auto text-[#343a40] my-16">
        <div class="text-center mb-10">
          <h2 class="text-[26px] sm:text-[36px] font-bold mb-4">
            Famous Russian Names in History and Pop Culture
          </h2>

        </div>

        <div class="flex flex-col lg:flex-row gap-10">
          <div class="lg:w-[60%] w-full space-y-8">
            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Leo Tolstoy</h3>
              <p class="text-[16px] leading-relaxed">
                Iconic Russian author known for War and Peace. His name carries intellectual weight and literary legacy.
              </p>
            </div>

            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Catherine the Great</h3>
              <p class="text-[16px] leading-relaxed">
                Powerful Russian empress who shaped history. Her name suggests leadership and strength.
              </p>
            </div>

            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Rasputin</h3>
              <p class="text-[16px] leading-relaxed">
                The mysterious confidant of the Romanovs. His name evokes intrigue and mysticism.
              </p>
            </div>

            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Anastasia Romanov</h3>
              <p class="text-[16px] leading-relaxed">
                The tragic Russian princess. A name tied to royalty and mystery.
              </p>
            </div>

            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Boris (James Bond)</h3>
              <p class="text-[16px] leading-relaxed">
                Instantly recognizable villain from GoldenEye. His name brings a classic action-packed vibe.
              </p>
            </div>

            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Ivan the Terrible</h3>
              <p class="text-[16px] leading-relaxed">
                The notorious Tsar of Russia. His name symbolizes ruthless power and a dramatic reign.
              </p>
            </div>
            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Alexei Romanov</h3>
              <p class="text-[16px] leading-relaxed">
                The youngest son of the Romanovs. His name reflects innocence and tragedy.
              </p>
            </div>
            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Mikhail Gorbachev</h3>
              <p class="text-[16px] leading-relaxed">
                The last leader of the Soviet Union. His name is linked to history-changing reforms and global politics.
              </p>
            </div>
            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Yekaterina Ivanovna</h3>
              <p class="text-[16px] leading-relaxed">
                A classic, elegant Russian name. It conveys grace and tradition, perfect for a noble character.
              </p>
            </div>
            <div>
              <h3 class="text-[22px] sm:text-[26px] font-semibold mb-1">Sergey</h3>
              <p class="text-[16px] leading-relaxed">
                A common Russian male name. Known for its association with historical figures and artists, it’s versatile and timeless.
              </p>
            </div>
            <p class="text-[16px] leading-relaxed">
              These names add immediate historical or cultural context to your characters, if you’re writing fiction or creating a role-playing persona.
            </p>
          </div>


          <div class="lg:w-[40%] w-full relative flex flex-col items-center lg:items-start gap-6">
            <img
              src="russian1.webp"
              alt="Russian Name Illustration 1"
              class="w-[100%] sm:w-[350px] h-auto rounded-2xl shadow-md"
            />
            <img
              src="russian3.jpg"
              alt="Russian Name Illustration 2"
              class="w-[100%] sm:w-[350px] h-auto rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      <div class="w-[100%] bg-white my-26">
        <div class="w-[90%] max-w-7xl py-[30px] mx-auto text-[#343a40]">
          <div class="text-center mb-10">
            <h2 class="text-[26px] sm:text-[36px] font-bold mb-4">
              Why You Would Need to Generate Russian Names?
            </h2>
            <p class="text-[16px] sm:text-[18px] font-medium mx-auto leading-relaxed">
              Whether you're writing a novel, creating a game, or role-playing, using a Russian name generator offers multiple advantages that go beyond just picking a name.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 gap-8 text-[16px] leading-relaxed">

            <div>
              <h3 class="text-[20px] font-semibold mb-2">Authenticity and Cultural Depth</h3>
              <p>
                A well-chosen Russian name instantly ties your character to a rich cultural background, making them feel authentic and grounded in Russian history.
              </p>
            </div>

            <div>
              <h3 class="text-[20px] font-semibold mb-2">Quick and Easy Name Selection</h3>
              <p>
                Forget endless searching! Generating Russian names with a tool gives you fast, accurate results without wasting time.
              </p>
            </div>

            <div>
              <h3 class="text-[20px] font-semibold mb-2">Reflect Your Character’s Heritage</h3>
              <p>
                Russian names can reflect the character’s family, background, or even their destiny. It helps you build a more complex, relatable character from the start.
              </p>
            </div>

            <div>
              <h3 class="text-[20px] font-semibold mb-2">Historical and Fantasy Settings</h3>
              <p>
                Writing a historical novel or a fantasy world inspired by Russia? Russian names fit perfectly to enhance the setting and tone.
              </p>
            </div>

            <div>
              <h3 class="text-[20px] font-semibold mb-2">Create Memorable Characters</h3>
              <p>
                A strong Russian name sticks in the reader's or player's mind, adding depth and making your character unforgettable.
              </p>
            </div>

            <div>
              <h3 class="text-[20px] font-semibold mb-2">Cultural Accuracy in Storytelling</h3>
              <p>
                Correct use of Russian names shows your attention to detail, helping avoid clichés and staying true to Russian traditions.
              </p>
            </div>
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
            <a href="https://www.nameideagenerator.com/contact-us" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black text-[20px] px-[40px] py-[8px] rounded-[10px] font-semibold">
                Request
              </button>
            </a>
          </div>
        </motion.div>
      </div>
      <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5} />
      <Footer />
    </motion.div>
  );
};

export default RussianNameGenerator;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Joon", detail: "A common Korean male name meaning 'handsome', symbolizing elegance and strength.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Minho", detail: "A popular Korean male name meaning 'bright', symbolizing clarity and wisdom.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Kyung", detail: "A male name meaning 'respectful', symbolizing reverence and dignity.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Jiho", detail: "Meaning 'wisdom' and 'strength', symbolizing intelligence and resilience.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Jiwon", detail: "A name meaning 'beautiful and bright', symbolizing grace and purity.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Seok", detail: "A male name meaning 'stone', symbolizing strength and durability.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Jaewon", detail: "Meaning 'great and warm', symbolizing generosity and kindness.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Seung", detail: "A name meaning 'victory', symbolizing triumph and success.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Han", detail: "A name meaning 'great' or 'vast', symbolizing power and influence.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Jinwoo", detail: "A name meaning 'handsome' and 'outstanding', symbolizing beauty and excellence.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Doo", detail: "A name meaning 'way' or 'path', symbolizing direction and purpose.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Taeyang", detail: "A name meaning 'sun', symbolizing brightness and energy.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Woojin", detail: "A name meaning 'help' and 'precious', symbolizing assistance and value.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Yoon", detail: "A name meaning 'blessing' or 'grace', symbolizing favor and good fortune.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Myung", detail: "A name meaning 'bright', symbolizing light and clarity.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Jae", detail: "A name meaning 'talent' or 'wealth', symbolizing ability and prosperity.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Soo", detail: "A name meaning 'excellence', symbolizing achievement and brilliance.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Taek", detail: "A name meaning 'strong' or 'great', symbolizing power and courage.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Ho", detail: "A name meaning 'lake' or 'ocean', symbolizing vastness and depth.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Hae", detail: "A name meaning 'sea' or 'ocean', symbolizing vastness and strength.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Hyun", detail: "A name meaning 'virtuous' or 'wise', symbolizing wisdom and integrity.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Kwang", detail: "A name meaning 'bright', symbolizing light and hope.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Eun", detail: "A name meaning 'grace' or 'kindness', symbolizing warmth and goodness.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Il", detail: "A name meaning 'one', symbolizing unity and simplicity.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Jiwook", detail: "A name meaning 'brilliant' or 'wise', symbolizing intelligence and clarity.", status: false, gender: "Male", type: "Traditional Korean" },
    { name: "Sora", detail: "A female name meaning 'sky', symbolizing freedom and vastness.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Jiwon", detail: "A name meaning 'beautiful and bright', symbolizing grace and purity.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Haeyoung", detail: "A name meaning 'graceful' and 'beautiful', symbolizing elegance and charm.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Yujin", detail: "A name meaning 'precious' and 'gentle', symbolizing value and kindness.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Seojin", detail: "A name meaning 'wise' and 'precious', symbolizing wisdom and beauty.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Jiyeon", detail: "A name meaning 'goodness' or 'kindness', symbolizing virtue and warmth.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Haeun", detail: "A name meaning 'grace' and 'sun', symbolizing kindness and brightness.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Minji", detail: "A name meaning 'bright' or 'intelligent', symbolizing brilliance and knowledge.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Jieun", detail: "A name meaning 'precious' and 'gracious', symbolizing worth and kindness.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Nari", detail: "A name meaning 'lily', symbolizing purity and beauty.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Sunmi", detail: "A name meaning 'goodness' and 'brightness', symbolizing light and positivity.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Yun", detail: "A name meaning 'to shine' or 'to be bright', symbolizing radiance and vitality.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Hana", detail: "A name meaning 'flower', symbolizing beauty and femininity.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Seojin", detail: "A name meaning 'wise' and 'precious', symbolizing wisdom and beauty.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Gyuri", detail: "A name meaning 'gem' or 'jewel', symbolizing elegance and worth.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Minseon", detail: "A name meaning 'gentle' and 'beautiful', symbolizing grace and elegance.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Bomi", detail: "A name meaning 'spring', symbolizing renewal and growth.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Jiwon", detail: "A name meaning 'beautiful and bright', symbolizing grace and purity.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Nayoung", detail: "A name meaning 'precious' and 'young', symbolizing youth and value.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Hyo", detail: "A name meaning 'filial piety', symbolizing respect and loyalty.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Geum", detail: "A name meaning 'gold', symbolizing wealth and strength.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Yuna", detail: "A name meaning 'graceful', symbolizing elegance and charm.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Hye", detail: "A name meaning 'brightness' or 'virtue', symbolizing positivity and wisdom.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Sooah", detail: "A name meaning 'beautiful' and 'refined', symbolizing grace and sophistication.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Jimin", detail: "A name meaning 'truth' or 'truthful', symbolizing honesty and sincerity.", status: false, gender: "Female", type: "Traditional Korean" },
    { name: "Jiwon", detail: "Meaning beautiful and bright, symbolizing grace and purity.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Seung", detail: "Meaning victory, symbolizing triumph and success.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Tae", detail: "Meaning great or powerful, symbolizing strength and courage.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Jiho", detail: "Meaning wisdom and strength, symbolizing intelligence and resilience.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Minseok", detail: "Meaning precious and bright, symbolizing value and light.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Kyung", detail: "Meaning respectful, symbolizing reverence and dignity.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Yoon", detail: "Meaning blessing or grace, symbolizing favor and good fortune.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Nari", detail: "Meaning lily, symbolizing purity and beauty.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Jiwook", detail: "Meaning brilliant and wise, symbolizing intelligence and clarity.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Soo", detail: "Meaning excellence, symbolizing achievement and brilliance.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Hae", detail: "Meaning sea or ocean, symbolizing vastness and strength.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Jiyeon", detail: "Meaning goodness or kindness, symbolizing virtue and warmth.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Jae", detail: "Meaning talent or wealth, symbolizing ability and prosperity.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Hyun", detail: "Meaning virtuous or wise, symbolizing wisdom and integrity.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Kwan", detail: "Meaning great or mighty, symbolizing power and influence.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Myung", detail: "Meaning bright, symbolizing light and clarity.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Yujin", detail: "Meaning precious and gentle, symbolizing value and kindness.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Seojin", detail: "Meaning wise and precious, symbolizing wisdom and beauty.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Sun", detail: "Meaning brightness, symbolizing light and energy.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Taejin", detail: "Meaning great and strong, symbolizing power and resilience.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Eun", detail: "Meaning grace or kindness, symbolizing warmth and goodness.", status: false, gender: "Unisex", type: "Traditional Korean" },
    { name: "Hyunbin", detail: "Meaning virtuous and powerful, symbolizing strength and respect.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Jihoon", detail: "Meaning wisdom and peace, symbolizing knowledge and calmness.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Kyungsoo", detail: "Meaning respectful and calm, symbolizing honor and serenity.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Seungho", detail: "Meaning victory and grand, symbolizing success and greatness.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Jaejin", detail: "Meaning talent and precious, symbolizing skill and value.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Minseok", detail: "Meaning precious and bright, symbolizing value and light.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Woojin", detail: "Meaning powerful and wise, symbolizing strength and intelligence.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Jimin", detail: "Meaning bright and gentle, symbolizing light and kindness.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Jiwoo", detail: "Meaning wisdom and beauty, symbolizing intelligence and charm.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Taeyang", detail: "Meaning sun, symbolizing light and energy.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Seungjae", detail: "Meaning victory and talent, symbolizing success and skill.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Myungsoo", detail: "Meaning bright and noble, symbolizing clarity and honor.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Kian", detail: "Meaning grace of God, symbolizing kindness and divine favor.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Changmin", detail: "Meaning strong and firm, symbolizing power and resilience.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Woo", detail: "Meaning greatness and honor, symbolizing respect and prominence.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Taeyoung", detail: "Meaning great and powerful, symbolizing strength and leadership.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Kyungmin", detail: "Meaning respectful and bright, symbolizing honor and light.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Jin", detail: "Meaning truth and wisdom, symbolizing clarity and integrity.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Soo", detail: "Meaning excellence, symbolizing achievement and brilliance.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Hyun", detail: "Meaning virtuous and wise, symbolizing wisdom and integrity.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Dohan", detail: "Meaning virtuous and kind, symbolizing goodness and generosity.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Seokjin", detail: "Meaning wise and bright, symbolizing intelligence and clarity.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Jaeho", detail: "Meaning talent and honor, symbolizing ability and respect.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Juwon", detail: "Meaning bright and wise, symbolizing light and knowledge.", status: false, gender: "Male", type: "Modern Korean" },
  { name: "Seohyun", detail: "Meaning graceful and virtuous, symbolizing elegance and integrity.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Eunji", detail: "Meaning kindness and virtue, symbolizing goodness and grace.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Nari", detail: "Meaning lily, symbolizing purity and beauty.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Jiwook", detail: "Meaning brilliant and wise, symbolizing intelligence and clarity.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Minji", detail: "Meaning precious and bright, symbolizing value and light.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Hyojin", detail: "Meaning wise and virtuous, symbolizing wisdom and goodness.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Bomi", detail: "Meaning spring, symbolizing freshness and renewal.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Somin", detail: "Meaning talented and wise, symbolizing skill and intelligence.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Minseon", detail: "Meaning precious and bright, symbolizing value and light.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Jiyeon", detail: "Meaning goodness and kindness, symbolizing virtue and warmth.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Haeun", detail: "Meaning graceful, symbolizing elegance and beauty.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Yuna", detail: "Meaning grace, symbolizing beauty and favor.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Gyuri", detail: "Meaning beautiful and noble, symbolizing grace and honor.", status: false, gender: "unisex", type: "Modern Korean" },
  { name: "Sunmi", detail: "Meaning bright and beautiful, symbolizing light and elegance.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Haeyoung", detail: "Meaning graceful and eternal, symbolizing beauty and longevity.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Yujin", detail: "Meaning precious and gentle, symbolizing value and kindness.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Nayoung", detail: "Meaning graceful and young, symbolizing freshness and elegance.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Seojin", detail: "Meaning wise and precious, symbolizing wisdom and beauty.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Hyo", detail: "Meaning bright and intelligent, symbolizing wisdom and clarity.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Geum", detail: "Meaning gold, symbolizing wealth and prosperity.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Hana", detail: "Meaning flower, symbolizing beauty and growth.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Soojung", detail: "Meaning pure and bright, symbolizing innocence and light.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Yujin", detail: "Meaning precious and gentle, symbolizing value and kindness.", status: false, gender: "Female", type: "Modern Korean" },
  { name: "Kyung", detail: "Meaning respectful and calm, symbolizing honor and serenity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Jiho", detail: "Meaning wisdom and peace, symbolizing knowledge and calmness.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Hae", detail: "Meaning sea or ocean, symbolizing vastness and strength.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Jiwon", detail: "Meaning beautiful and bright, symbolizing grace and purity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Seojin", detail: "Meaning wise and precious, symbolizing wisdom and beauty.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Taeyang", detail: "Meaning sun, symbolizing light and energy.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Hyun", detail: "Meaning virtuous and wise, symbolizing wisdom and integrity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Taeyoung", detail: "Meaning great and powerful, symbolizing strength and leadership.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Jiwook", detail: "Meaning brilliant and wise, symbolizing intelligence and clarity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Seung", detail: "Meaning victory, symbolizing success and achievement.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Yoon", detail: "Meaning light, symbolizing brightness and guidance.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Minseok", detail: "Meaning precious and bright, symbolizing value and light.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Sooah", detail: "Meaning excellence, symbolizing achievement and brilliance.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Hyunjin", detail: "Meaning wise and bright, symbolizing intelligence and clarity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Woojin", detail: "Meaning powerful and wise, symbolizing strength and intelligence.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Jiwon", detail: "Meaning beautiful and bright, symbolizing grace and purity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Jae", detail: "Meaning talent, symbolizing skill and ability.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Myung", detail: "Meaning bright and noble, symbolizing clarity and honor.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Eun", detail: "Meaning kindness, symbolizing goodness and warmth.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Geum", detail: "Meaning gold, symbolizing wealth and prosperity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Jimin", detail: "Meaning bright and gentle, symbolizing light and kindness.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Yujin", detail: "Meaning precious and gentle, symbolizing value and kindness.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Nari", detail: "Meaning lily, symbolizing purity and beauty.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Seungmin", detail: "Meaning victory and talent, symbolizing success and skill.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Jiwon", detail: "Meaning beautiful and bright, symbolizing grace and purity.", status: false, gender: "Unisex", type: "Modern Korean" },
  { name: "Aerin", detail: "Meaning shining and bright, symbolizing radiance and beauty.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Taejin", detail: "Meaning great and valuable, symbolizing strength and wealth.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Mino", detail: "Meaning bright and wise, symbolizing intelligence and brilliance.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Jiyu", detail: "Meaning wisdom and grace, symbolizing intelligence and beauty.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Haru", detail: "Meaning spring or sunlight, symbolizing renewal and warmth.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Haegun", detail: "Meaning strong and powerful, symbolizing resilience and vitality.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Haejoon", detail: "Meaning bright and shining, symbolizing hope and clarity.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Jaehyun", detail: "Meaning bright and radiant, symbolizing light and happiness.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Seokyu", detail: "Meaning stone and noble, symbolizing endurance and strength.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Kyungbok", detail: "Meaning virtuous and precious, symbolizing nobility and honor.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Zhan", detail: "Meaning wisdom and knowledge, symbolizing enlightenment and understanding.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Yumin", detail: "Meaning beauty and grace, symbolizing elegance and serenity.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Jiwook", detail: "Meaning hope and brightness, symbolizing a future filled with possibilities.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Kyumin", detail: "Meaning precious and wise, symbolizing insight and greatness.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Seunghoon", detail: "Meaning victorious and noble, symbolizing triumph and honor.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Haruto", detail: "Meaning sunlight and warmth, symbolizing positivity and energy.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Soobin", detail: "Meaning peace and quiet, symbolizing serenity and calmness.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Junseok", detail: "Meaning excellence and strength, symbolizing achievement and resilience.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Gyeong", detail: "Meaning respectful and noble, symbolizing dignity and honor.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Dohan", detail: "Meaning great and generous, symbolizing kindness and strength.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Jaewon", detail: "Meaning bright and wise, symbolizing brilliance and intelligence.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Ryu", detail: "Meaning dragon, symbolizing power and courage.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Jaeji", detail: "Meaning joyful and energetic, symbolizing enthusiasm and vitality.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Seokjin", detail: "Meaning stone and jewel, symbolizing enduring strength and preciousness.", status: false, gender: "Male", type: "Unique Korean" },
  { name: "Taeyoon", detail: "Meaning great and shining, symbolizing brilliance and glory.", status: false, gender: "Male", type: "Unique Korean" },
  
  { name: "Nari", detail: "Meaning lily, symbolizing purity and beauty.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Hyejin", detail: "Meaning wisdom and purity, symbolizing clarity and virtue.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Hyojeong", detail: "Meaning bright and virtuous, symbolizing integrity and brightness.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Haewon", detail: "Meaning graceful and bright, symbolizing elegance and strength.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Sumin", detail: "Meaning gentle and delicate, symbolizing kindness and grace.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Seulgi", detail: "Meaning wise and courageous, symbolizing bravery and intelligence.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Yumei", detail: "Meaning beautiful and elegant, symbolizing grace and poise.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Gyuri", detail: "Meaning strength and beauty, symbolizing power and elegance.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Haeun", detail: "Meaning sunshine, symbolizing warmth and positivity.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Jiwon", detail: "Meaning wisdom and grace, symbolizing elegance and insight.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Miso", detail: "Meaning smile, symbolizing joy and happiness.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Arin", detail: "Meaning light and happiness, symbolizing warmth and positivity.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Jihye", detail: "Meaning wisdom and grace, symbolizing clarity and intelligence.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Seojeong", detail: "Meaning bright and graceful, symbolizing wisdom and beauty.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Yujin", detail: "Meaning precious and beautiful, symbolizing charm and elegance.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Seori", detail: "Meaning gentle and graceful, symbolizing poise and kindness.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Rina", detail: "Meaning joyful and graceful, symbolizing happiness and elegance.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Sujin", detail: "Meaning precious and valuable, symbolizing importance and grace.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Nayeon", detail: "Meaning graceful and beautiful, symbolizing purity and strength.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Eunji", detail: "Meaning kindness and brightness, symbolizing compassion and light.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Jiwook", detail: "Meaning hope and brightness, symbolizing a future filled with possibilities.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Yuna", detail: "Meaning light and hope, symbolizing brightness and joy.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Soyeon", detail: "Meaning bright and wise, symbolizing intelligence and clarity.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Eri", detail: "Meaning blessed and beautiful, symbolizing purity and grace.", status: false, gender: "Female", type: "Unique Korean" },
  { name: "Sunhwa", detail: "Meaning bright and beautiful, symbolizing light and elegance.", status: false, gender: "Female", type: "Unique Korean" },
  
  { name: "Jihwan", detail: "Meaning wisdom and courage, symbolizing insight and strength.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Seungjin", detail: "Meaning victorious and wise, symbolizing achievement and brilliance.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Minji", detail: "Meaning beautiful and intelligent, symbolizing elegance and wisdom.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Yura", detail: "Meaning gentle and wise, symbolizing kindness and strength.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Kyungjin", detail: "Meaning noble and wise, symbolizing clarity and strength.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Jiwon", detail: "Meaning wisdom and grace, symbolizing elegance and insight.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Taeho", detail: "Meaning great and strong, symbolizing power and endurance.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Soohyun", detail: "Meaning wise and strong, symbolizing clarity and resilience.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Yujin", detail: "Meaning precious and beautiful, symbolizing charm and elegance.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Nari", detail: "Meaning lily, symbolizing purity and beauty.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Minseok", detail: "Meaning bright and valuable, symbolizing strength and brilliance.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Hyo", detail: "Meaning wise and beautiful, symbolizing intelligence and grace.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Sunwoo", detail: "Meaning bright and shining, symbolizing hope and light.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Jiwook", detail: "Meaning hope and brightness, symbolizing a future filled with possibilities.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Soojin", detail: "Meaning precious and valuable, symbolizing importance and grace.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Kyungwoo", detail: "Meaning noble and wise, symbolizing clarity and strength.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Jimin", detail: "Meaning wisdom and beauty, symbolizing brilliance and elegance.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Doyoon", detail: "Meaning wise and brave, symbolizing courage and intelligence.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Taejin", detail: "Meaning great and valuable, symbolizing strength and wealth.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Seungjae", detail: "Meaning victorious and wise, symbolizing achievement and brilliance.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Heejin", detail: "Meaning bright and precious, symbolizing light and value.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Nayeon", detail: "Meaning graceful and beautiful, symbolizing purity and strength.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Haeyoung", detail: "Meaning beautiful and bright, symbolizing elegance and hope.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Jiwoo", detail: "Meaning wisdom and joy, symbolizing intelligence and happiness.", status: false, gender: "Unisex", type: "Unique Korean" },
  { name: "Seungmin", detail: "Meaning victorious and bright, symbolizing triumph and joy.", status: false, gender: "Unisex", type: "Unique Korean" }
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
      name: "Kingdom Name Generator",
      pic: "/kingdom-name-generator.jpeg",
      link: "https://www.nameideagenerator.com/kingdom-name-generator",
  },
  {
      name: "Greek Name Generator",
      pic: "/greek.webp",
      link: "https://www.nameideagenerator.com/greek-name-generator",
  },
  {
      name: "Chinese Name Generator",
      pic: "/chinese-name-generator.jpg",
      link: "https://www.nameideagenerator.com/chinese-name-generator",
  },
  {
      name: "Medieval Name Generator",
      pic: "/dark-fantasy-character-Medieval-Names.avif",
      link: "https://www.nameideagenerator.com/medieval-name-generator",
  },
  ];
  
  const KoreanNameGenerator = () => {
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
  
const bgImage = "/korean.webp"
const context = "Korean Name Generator with Meaning"
const Q1 = "How does the Korean Name Generator work?"
const A1 = "The tool generates names based on your chosen preferences, such as gender (male, female, or unisex) and style (traditional, modern, or unique). Each name includes its meaning for added context."

const Q2 = "Can I use these names for any purpose?"
const A2 = "Yes, the names are versatile. You can use them for story characters, online profiles, gaming personas, or even as inspiration for a baby name."

const Q3 = "Are the names culturally authentic?"
const A3 = "Absolutely. The generator ensures that each name respects Korean naming conventions and includes both traditional and modern options."

const Q4 = "Can I explore the meanings behind the names?"
const A4 = "Yes, each name comes with a detailed meaning. This helps you understand the significance and choose a name that resonates with your purpose."

const Q5 = "Is this tool free to use?"
const A5 = "Yes, the Korean Name Generator is free and easy to use, offering instant results without any hidden charges."
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
        <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40]">Cultural and Historical Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/korean-name-generator" className="hover:underline text-[#343a40]">Korean Name Generator with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Korean Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender of Korean Name</p>
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
            <p className="text-center text-[#343a40]">Category of Korean Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Traditional Korean">Traditional</option>
              <option value="Modern Korean">Modern </option>
              <option value="Unique Korean">Unique </option>
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
            What Is a Korean Name?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            A Korean name isn’t just a label; it’s a part of identity. Most Korean names consist of two syllables, each with a unique meaning. 
            These names reflect heritage, values, and aspirations. 
            Traditional Korean names often draw from Hanja characters, which are Korean characters adapted for Korean use. 
            Each character conveys a specific idea or virtue. Modern Korean names, on the other hand, might break away from Hanja while still keeping cultural significance.
            <br />
            Whether a Korean male name or a Korean female name, each one has a purpose. The process of choosing these names often involves family traditions and personal meaning.
            </p>
            <h3 className="sm:text-[20px] text-[16px] font-semibold">
            The Cultural Significance of Korean Names
              </h3>
            <p className="text-left py-[10px] text-[#343a40]">
            Names in Korea hold deep cultural significance. They represent family lineage, personal identity, and even societal expectations. For centuries, naming ceremonies have been a crucial part of Korean culture.
            <br />
            Each syllable in a Korean name is deliberate. The first syllable might represent family heritage, while the second conveys individuality or hope. For instance, names like Seo-jun or Ji-woo beautifully balance these aspects.
            <br />
            Korean naming culture reflects respect for tradition while embracing modern trends. It is this blend that makes Korean names so timeless and meaningful.
            </p>
            
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Choose a Korean Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            It’s hard to find the right name on your own. A Korean name generator saves you time and provides culturally accurate results.
            You don’t just get random names. You get names that align with traditional and modern Korean naming practices. 
            This tool helps you find a name that fits your needs, whether it’s for a story character, an online persona, or even a baby.
            This generator also offers creative inspiration. With so many options, you can explore names that are rare, trendy, or deeply symbolic.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Korean Name Generator
          </h2>
          <p>
          Using the Korean Name Generator is simple and engaging. Follow these easy steps to find the perfect name with meaningful insights:
          </p>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 1: Choose the Gender <b> (Male, Female, UniSex)</b>:
              </h3>
              <p>
              Start by selecting the gender. This helps the tool focus on names that fit your specific need. 
              Whether you want a strong male name like Min-jun, a graceful female name like Ji-woo, or a flexible unisex name like Jae-min, this step sets the foundation.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Category<b> (Traditional, Modern, Unique)</b>:
              </h3>
              <p>
              Select a style that suits your purpose.
              <ul>
                <li>- <b>Traditional Korean names</b> – reflect deep-rooted cultural heritage, often derived from Hanja characters.</li>
                <li>- <b>Modern Korean names</b> – have a fresh and trendy appeal, blending tradition with creativity.</li>
                <li>- <b>Unique Korean names </b> – are rare and imaginative, perfect for standing out.</li>
              </ul>
              <br />
              This step ensures the generated names align with the tone and context you’re looking for.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: <b> Generate </b>Names Instantly
              </h3>
              <p>
              Click the <b>“Generate” </b>button. Instantly, you’ll receive a curated list of Korean names tailored to your selections. 
              Each name is accompanied by its meaning, providing depth and understanding.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Explore Name Meanings
              </h3>
              <p>
              Delve into the meanings of the names. Learn what each syllable represents and how it contributes to the overall essence. 
              Whether it symbolizes strength, beauty, or intelligence, this step helps you connect with the names on a deeper level.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="korean-name-generator.avif"
              alt="Korean Name Generator with Meaning"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="korean-male-names-generator.png"
              alt="Korean Name Generator with Meaning"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/Random-korean-name-generator.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Korean Name Generator
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
          <b> Unique Features of Our Korean Name Generator</b>
          </h2>
          <p>
          This tool is crafted to offer more than just names. It blends cultural authenticity with modern flexibility, ensuring each result is meaningful and versatile.
          </p>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Cultural Authenticity
            </h3>
            <p>
            Every name reflects Korea’s rich traditions and values. 
            Whether it’s a traditional name inspired by Hanja characters or a modern name with a trendy vibe, you’ll find options that stay true to Korean heritage.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant Name Generation
            </h3>
            <p>
            No need to spend hours searching. This tool delivers a list of well-thought-out names in seconds, making it perfect for those on tight deadlines or looking for quick inspiration.       
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Tailored Options for Every Need
            </h3>
            <p>
            You can select from male, female, or unisex names. 
            This customization ensures the generated names align with your specific requirements, whether for a character, a username, or a baby.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Perfect for Multiple Purposes
            </h3>
            <p>
            The tool caters to a wide audience, including:
            <ul>
                <li>- Writers creating authentic Korean characters.</li>
                <li>- Gamers seeking a cool and unique name.</li>
                <li>- Parents looking for a culturally significant name for their child.</li>
                <li>- Anyone in need of a creative and meaningful name for personal or professional use..</li>
              </ul>
            </p>
            <h2 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Why It Stands Out
            </h2>
            <p>
            Unlike other tools that offer generic results, this generator provides a mix of accuracy and variety. 
            It’s designed for users who value both the meaning and the style of a name. Whether you're searching for a deeply symbolic 
            name or one that simply feels modern and fresh, this tool delivers.
            <br />
            Discover the perfect name effortlessly, and trust a generator that respects the depth and beauty of Korean culture.

            </p>
            <br />
            <h2 className="sm:text-[26px] text-[28px]">
            The Role of Korean Names in Personal and Professional Identity
          </h2>
          <p>
          A name shapes identity. Korean names do this beautifully by blending tradition with individuality. They help people stand out, whether in personal life or professional settings.
          <br />
          In storytelling or gaming, Korean names add authenticity and depth. For real-life use, they make a lasting impression, showing thoughtfulness in their selection.
          <br />
          These names also foster connections. They convey respect for Korean culture and heritage, making them meaningful in global contexts.

          </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Categories of Korean Names You Can Generate
          </h2>
          <p>
          This tool makes it simple to explore various categories of Korean names:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Traditional Korean Names
              </h3>
              <p>
              <ul>
                <li>- Perfect for those who appreciate deep cultural roots.</li>
                <li>- Examples include names like Soo-jin (<b>precious treasure</b>) and Hyun-woo (<b>virtuous protector</b>).</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Modern Korean Names
              </h3>
              <p>
              <ul>
                <li>- Great for a fresh and trendy vibe</li>
                <li>- Names like Eun-ji (<b>kindness and wisdom</b>) and Joon-ho (<b>talented and bright</b>) stand out.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Unique Korean Names 
              </h3>
              <p>
              <ul>
                <li>- Ideal for those seeking something rare and special.</li>
                <li>- Options like Ha-eun (<b>great and gracious</b>) and Ji-won (<b>ambitious and willful</b>) offer distinct appeal.</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Types of Names by Gender
          </h2>
          <p>
          Gender-specific options make finding the perfect name even easier:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Male Korean Names
              </h3>
              <p>
              <ul>
                <li>- Strong and meaningful, these names exude character.</li>
                <li>- Examples include Min-jun (<b>intelligent and handsome</b>) and Seo-jun (<b>auspicious and talented</b>).</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Female Korean Names
              </h3>
              <p>
              <ul>
                <li>- Graceful and elegant, these names radiate charm.</li>
                <li>- Examples include Ji-woo (<b>wisdom and rain</b>) and Ha-young (<b>eternal beauty</b>).</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Unisex Korean Names
              </h3>
              <p>
              <ul>
                <li>- Flexible and versatile, suitable for anyone.</li>
                <li>- Examples include Jae-min (<b>talented and clever</b>) and Yu-jin (<b>precious and genuine</b>).</li>
              </ul>
              </p>
            </div>
            <p>
            These categories ensure inclusivity and provide meaningful options for every preference. 
            Whether you’re seeking tradition, modernity, or individuality, this tool has you covered.
              </p>
              <br />
          </div>
        </div>
      </div>
      </div>
      <div className="w-[85%] mx-auto text-[#343a40] my-[50px] h-[80vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Famous Korean Names in History and Culture
          </h2>
          <p>
          Here are some iconic Korean names that have left a lasting impact on history and modern culture:
          </p>
        <hr />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Historical Figures
              </h3>
              <p>
                <ul>
                <li>- <b>King Sejong</b> – Creator of the Korean alphabet, Hangul, and a revered leader.</li>
                <li>- <b>Yi Sun-shin</b> – Naval commander known for his victories during the Imjin War.</li>
                <li>- <b>Queen Seondeok </b> – The first reigning queen of Korea, celebrated for her wisdom.</li>
                <li>- <b>Kim Gu</b> – Influential leader of the Korean independence movement.</li>
                <li>- <b>Jang Yeong-sil</b> – Inventor and scientist during the Joseon dynasty.</li>
              </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Modern Cultural Icons
              </h3>
              <p>
              <ul>
                <li>- <b>Kim Soo-hyun </b> – Acclaimed actor known for roles in hit dramas like My Love from the Star.</li>
                <li>- <b>IU (Lee Ji-eun):</b>– Beloved singer and actress with a global fanbase</li>
                <li>- <b>BTS (Bangtan Sonyeondan)</b> – Members like Kim Nam-joon (RM) and Min Yoon-gi (Suga) are worldwide sensations.</li>
                <li>- <b>Song Hye-kyo</b> – Renowned actress recognized for her roles in dramas like Descendants of the Sun.</li>
                <li>- <b>Park Seo-joon</b> – Popular actor known for his charm and versatility in acting.</li>
              </ul>
              </p>
            </div>
            
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="group-name-generator-1.png"
              alt="Korean Name Generator with Meaning"
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

export default KoreanNameGenerator;

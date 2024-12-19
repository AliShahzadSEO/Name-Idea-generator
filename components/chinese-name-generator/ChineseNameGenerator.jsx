"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Hoshin Tenzin", detail: "A revered Buddhist wizard who channels spiritual energy for enlightenment.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Ryujo Kenzo", detail: "A calm and wise wizard of the Buddhist tradition, known for his peaceful aura.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Rinzen Akinori", detail: "A contemplative wizard with profound insight into the nature of reality.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Kenzai Jiro", detail: "A wizard who practices the way of the Zen, bringing balance to the world.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Tenzaku Shunsui", detail: "A wizard whose meditative practices bring clarity and serenity to all who encounter him.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Daiki Yasunori", detail: "A Buddhist wizard with a gentle yet powerful spiritual presence.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Shoji Makoto", detail: "A wise and revered wizard who follows the path of truth and balance.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Kozen Goro", detail: "A highly disciplined wizard, known for his mastery of meditative rituals.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Iwao Kyoshi", detail: "A steadfast and tranquil wizard who walks the path of enlightenment.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Seijiro Hoshinori", detail: "A contemplative wizard who spends his days seeking the deeper meaning of existence.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Ritsujo Meiji", detail: "A serene and wise wizard, known for his mastery in Buddhist teachings.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Keiji Myoshi", detail: "A quiet and introspective wizard who finds strength in his silence.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Kyojin Yuuto", detail: "A powerful and calm wizard, with a deep understanding of the Buddhist way of life.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Hisako Hyojin", detail: "A spiritual and mysterious wizard, who carries the wisdom of the ages.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Taigen Shoji", detail: "A peaceful and meditative wizard who follows the path of inner tranquility.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Daisaku Renji", detail: "A disciplined wizard who values mindfulness and wisdom above all.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Shunyo Isamu", detail: "A serene wizard who embraces the Buddhist ideals of compassion and non-attachment.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Enzo Haruto", detail: "A wise Buddhist wizard known for his dedication to helping others find peace.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Koshi Noboru", detail: "A wizard who has devoted his life to the study of Buddhist philosophy and practice.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Seiji Hiroshi", detail: "A calm and wise wizard whose presence brings a sense of peace to all around him.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Ryozen Shiori", detail: "A revered Buddhist wizard, known for his deep understanding of spiritual matters.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Genzai Kenji", detail: "A peaceful wizard who strives to live in accordance with the teachings of Buddha.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Kunitomo Tetsu", detail: "A disciplined and meditative wizard who seeks enlightenment in all things.", status: false, gender: "Traditional", type: "Buddhist Wizard" },
    { name: "Shinzo Kaito", detail: "A modern wizard blending traditional teachings with new approaches to spiritual practice.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Ryuko Sora", detail: "A young and dynamic wizard who brings a modern perspective to ancient Buddhist wisdom.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Haruto Tetsuya", detail: "A modern wizard who bridges the gap between modern science and spiritual enlightenment.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Aiko Rina", detail: "A modern wizard who embodies the virtues of compassion and mindfulness in the digital age.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Taiko Kenji", detail: "A contemporary Buddhist wizard, known for his balanced approach to life.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Keiko Kosei", detail: "A modern wizard who seeks to spread peace and mindfulness through her work.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Yoshiko Shinta", detail: "A modern-day wizard who channels spiritual energy in unique and innovative ways.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Rinza Hiroshi", detail: "A skilled modern wizard who utilizes Buddhist teachings in daily life to maintain balance.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Kaito Keisuke", detail: "A young and determined wizard focused on applying Buddhist wisdom to today's challenges.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Yuki Akira", detail: "A modern wizard who brings light and clarity to complex spiritual concepts.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Naoki Kyoko", detail: "A calm and gentle wizard, modern in approach yet traditional in wisdom.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Makiko Zenji", detail: "A progressive wizard who embraces Buddhist teachings in the pursuit of peace and balance.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Rei Shun", detail: "A modern wizard who focuses on mental clarity and inner peace through Buddhist practice.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Haruki Shinji", detail: "A spiritual wizard with a modern twist, offering guidance for the present-day seeker.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Kiyomi Makoto", detail: "A modern-day wizard who uses mindfulness and meditation to achieve spiritual awakening.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Takara Zenji", detail: "A modern Buddhist wizard, known for his progressive and open-minded approach.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Harumi Tetsu", detail: "A contemporary wizard who blends Zen meditation with modern-day practices.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Kaoru Yuji", detail: "A wise and modern wizard who emphasizes mindfulness and compassion in everything he does.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Keisuke Hikaru", detail: "A contemporary wizard who brings fresh insights to the ancient wisdom of Buddhism.", status: false, gender: "Modern", type: "Buddhist Wizard" },
    { name: "Hoshin Tenzo", detail: "An ancient Buddhist wizard known for his deep connection to the spiritual realm.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Jirokai Ryuzen", detail: "A legendary ancient wizard who practiced Buddhism to transcend the physical world.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Satoro Kiyoshi", detail: "An ancient wizard whose understanding of Buddhist teachings shaped many generations.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Shosho Daizen", detail: "An esteemed ancient wizard whose meditative practices were legendary.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Kenzo Ryuji", detail: "A respected Buddhist wizard known for his ability to manifest enlightenment.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Kairen Dojo", detail: "An ancient monk whose wisdom was sought by emperors and commoners alike.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Ryujiro Genshi", detail: "A prominent ancient wizard famous for his spiritual guidance and teachings.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Kensho Iwao", detail: "A revered Buddhist wizard who meditated for years in silence, achieving inner peace.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Tenzu Hoshiki", detail: "A master of Buddhist rituals, known for his influence on spiritual practices.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Shojii Hoku", detail: "An ancient wizard whose knowledge of the universe was considered divine.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Ryozo Taiga", detail: "A mystical wizard whose teachings on karma became legendary.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Keiro Genkai", detail: "An ancient wizard known for his profound meditation practices and spiritual healing.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Genshin Ryota", detail: "An ancient sage whose wisdom influenced the path of many Buddhist followers.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Daizen Zenkei", detail: "A zen master and wizard who imparted great spiritual wisdom to his disciples.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Hoshiji Fumyo", detail: "A Buddhist wizard known for his contemplative practices and spiritual strength.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Taisho Kyoshi", detail: "An ancient wizard whose teachings of enlightenment still resonate today.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Shunin Gozu", detail: "A revered ancient wizard who taught the art of inner peace and meditation.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Kyozoku Taiko", detail: "An ancient wizard known for his powerful wisdom and leadership in Buddhist communities.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Koshi Genshin", detail: "A wise ancient Buddhist wizard whose thoughts influenced a generation.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Zenkaiken Tetsu", detail: "A revered ancient wizard whose practice of Zen Buddhism shaped his magical abilities.", status: false, gender: "Ancient", type: "Buddhist Wizard" },
    { name: "Shenlong Qiang", detail: "A revered Taoist wizard known for his mastery over the elements.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Zhenfu Wuzhi", detail: "An ancient Taoist wizard renowned for his ability to manipulate spiritual energy.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Jianbo Fuhao", detail: "A Taoist wizard famous for his intricate knowledge of Taoist scriptures and spells.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Laoren Xin", detail: "An old Taoist master who has transcended the physical realm through meditation.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Baijun Junjie", detail: "A Taoist wizard who spent years in isolation, seeking enlightenment through inner alchemy.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Xunlong Shuxiang", detail: "A master Taoist wizard who commands the power of the winds and nature.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Shenzhi Yueming", detail: "A Taoist wizard with vast knowledge of astrology and celestial magic.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Lianhua Xianshi", detail: "A Taoist immortal known for his peaceful nature and wisdom.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Zhenlu Fei", detail: "A Taoist wizard whose power comes from the spirits of the mountains.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Chongxing Jun", detail: "A Taoist sage whose teachings on immortality were passed down through generations.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Xianhua Ziqian", detail: "A Taoist wizard whose abilities stem from his deep connection with nature.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Yangwen Yuqi", detail: "A Taoist master known for his control over life energy and healing practices.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Yaojing Shuyi", detail: "A Taoist wizard renowned for his ability to command the spirits and elements.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Lingzhu Baoyu", detail: "A Taoist wizard who possesses the power of foresight and divination.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Chunjian Shenhua", detail: "A Taoist sage known for his abilities to harmonize with the energy of the earth.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Fuqiu Shunming", detail: "A Taoist wizard whose deep understanding of Taoist philosophy allows him to control time.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Liulian Yuting", detail: "A Taoist wizard known for his purity of spirit and powerful healing techniques.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Wujian Sheng", detail: "A Taoist wizard whose mastery of the sword is coupled with spiritual power.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Xianglong Zhihao", detail: "A Taoist master who can summon dragons to do his bidding.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Weijin Wuxin", detail: "A Taoist wizard with unmatched control over the five elements.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Lingxi Qiushu", detail: "A Taoist wizard whose knowledge of herbs and potions is unparalleled.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Tianyi Jinsan", detail: "A Taoist sage whose meditation practices allowed him to connect with the heavens.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Fuzhou Qun", detail: "A Taoist master who specializes in transforming spiritual energy into physical strength.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Yangzi Shuchang", detail: "A Taoist wizard who uses the energy of the sun to heal and protect.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Mingzhen Jingren", detail: "A Taoist master who is revered for his teachings on inner peace and balance.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Lingyun Taozi", detail: "A Taoist wizard with extraordinary control over clouds and storms.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Wenhui Fuliang", detail: "A Taoist wizard known for his wisdom in controlling spiritual flows.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Xuanqi Jiahao", detail: "A Taoist wizard with the power to see and interact with spirits.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Zhizhou Kewei", detail: "A Taoist sage whose abilities include divination and communicating with ancestors.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Jinzhi Feng", detail: "A Taoist wizard whose magical powers come from the wind and sky.", status: false, gender: "Traditional", type: "Taoist Wizard" },
    { name: "Liwei Jinfeng", detail: "A modern Taoist wizard who combines ancient practices with new-age philosophies.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Baolin Yihong", detail: "A modern Taoist wizard who uses his spiritual understanding to guide others.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Xiuqin Wei", detail: "A Taoist wizard who uses a mix of meditation and technology to enhance his spiritual practices.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Zhenhua Tianlin", detail: "A modern Taoist wizard whose spiritual practices focus on balancing energies in the modern world.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Shenli Zhaojin", detail: "A Taoist wizard skilled in using modern healing methods along with traditional Taoist wisdom.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Zhihao Junyi", detail: "A modern Taoist wizard who integrates philosophy with personal growth and development.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Shengtian Qian", detail: "A Taoist wizard known for his expertise in both spiritual and material wealth.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Jingwen Ruqi", detail: "A modern Taoist wizard who blends Taoist rituals with modern lifestyle and practices.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Haili Xiaoyu", detail: "A Taoist wizard focused on creating harmony between ancient traditions and modern spirituality.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Qiangsheng Xinlin", detail: "A Taoist wizard known for his study and application of Taoist teachings in modern medicine.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Lixian Zhenjun", detail: "A Taoist wizard whose practices include mindfulness, meditation, and energy balancing.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Zhenxin Long", detail: "A modern Taoist wizard who is dedicated to helping others achieve spiritual peace and stability.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Yangshi Ruicheng", detail: "A Taoist wizard with a focus on cultivating personal energy and improving well-being.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Xianxi Sifan", detail: "A Taoist wizard who practices the ancient art of healing through spiritual energy.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Tianzhi Fulin", detail: "A modern Taoist wizard known for his teachings on spiritual and material balance.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Meilin Shunan", detail: "A Taoist wizard focused on energy healing and spiritual development.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Xinyi Ruyu", detail: "A Taoist wizard with deep knowledge of Taoist teachings and its impact on personal growth.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Zhiyuan Lijian", detail: "A modern Taoist wizard whose teachings inspire spiritual awakening and enlightenment.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Zhenxi Shuye", detail: "A Taoist wizard whose practice of Taoist teachings empowers others to embrace their true selves.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Yanjun Yunxi", detail: "A modern Taoist wizard who uses energy healing to restore balance and peace to those in need.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Fuyang Meijing", detail: "A Taoist wizard with deep knowledge of Taoist alchemy, helping to restore harmony and peace.", status: false, gender: "Modern", type: "Taoist Wizard" },
    { name: "Fuzi Tianlong", detail: "An ancient Taoist wizard known for his mastery over the elements and divine wisdom.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Zhenren Yunlong", detail: "An ancient Taoist wizard whose teachings helped shape Taoist spiritual practices.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Shijian Fuxi", detail: "A Taoist sage from ancient times, known for his deep understanding of life and death.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Jinghao Zhenxian", detail: "An ancient Taoist wizard renowned for his ability to communicate with spirits.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Fuxian Lingshi", detail: "A powerful ancient Taoist wizard who mastered the art of immortality and divine alchemy.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Yaojing Baishen", detail: "An ancient Taoist wizard revered for his mastery over the celestial energies and divine wisdom.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Zhenyu Qingtian", detail: "A legendary Taoist wizard of the ancient world, known for his insights into the flow of cosmic forces.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Longxian Zhiyan", detail: "A great Taoist sage whose powers over the wind and storms were said to be unparalleled.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Baiyun Zhenhua", detail: "A Taoist wizard from ancient times who could harness the power of the mountains and clouds.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Linghu Xianqi", detail: "An ancient Taoist wizard who became one with the spiritual realm, communicating with deities.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Zhenyi Tianjia", detail: "A Taoist master from antiquity known for his deep knowledge of alchemy and the immortality arts.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Xuanguang Wusheng", detail: "An ancient Taoist wizard who transcended mortality, becoming an immortal sage.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Tianxuan Shunyi", detail: "An ancient Taoist wizard known for his profound understanding of the heavenly order and divine pathways.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Lianyun Changming", detail: "A Taoist wizard from the ancient world who was said to have mastered the essence of life and death.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Baoshan Zhenjie", detail: "An ancient Taoist master renowned for his teachings on the spiritual journey to immortality.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Huanglong Xianyuan", detail: "A Taoist sage from ancient times whose connection with the Dragon spirit granted him immense power.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Jingling Zhaoxian", detail: "A Taoist wizard known for his ability to draw on the power of the five elements to shape reality.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Mingzhu Xianhua", detail: "A Taoist sage revered for his wisdom in understanding the balance between the physical and spiritual worlds.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Zhongming Feixian", detail: "An ancient Taoist wizard who could summon and control celestial beings through his incantations.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Xuancheng Yuhan", detail: "A Taoist master from the ancient era who could manipulate time and space through the power of Tao.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Feilong Zhiwen", detail: "An ancient Taoist wizard known for his power to manipulate the energies of the dragons and phoenixes.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Yisheng Guantian", detail: "A Taoist sage from the ancient times who could transcend the mortal plane and travel through realms.", status: false, gender: "Ancient", type: "Taoist Wizard" },
    { name: "Gaiyan Junko", detail: "A traditional wizard known for his deep connection to the elements.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Ryoshi Tadao", detail: "A powerful wizard whose abilities extend over both spiritual and earthly realms.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Kaito Hiroshi", detail: "A respected wizard known for his balanced approach to magic and wisdom.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Zenji Shuro", detail: "A wizard with a profound understanding of ancient and modern magical systems.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Moriko Renji", detail: "A mysterious wizard who thrives in both dark and light magic.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Takura Yasuo", detail: "An enigmatic wizard with unmatched mastery of the neutral forces.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Fuyuki Kiyoshi", detail: "A sage-like wizard known for his patience and neutrality in magical practices.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Ryutaro Shiro", detail: "A neutral wizard who can switch between different magical forces at will.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Yasuto Hisaki", detail: "A wizard whose focus lies in maintaining balance between conflicting magical energies.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Hoshiko Kenzo", detail: "A neutral wizard renowned for his wisdom and harmonious magic.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Jinzo Ryuji", detail: "A wizard with mastery over mystical artifacts and neutral magic.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Torin Jiro", detail: "A wizard who uses both light and shadow to maintain neutrality in magical conflicts.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Ryoko Minori", detail: "A balanced wizard who draws strength from both mystical and natural forces.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Kaizen Jiro", detail: "A wizard who strives for enlightenment through neutrality and balance.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Hiroshi Tetsuo", detail: "A wise wizard who uses both ancient and modern methods to achieve magical balance.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Akihiro Ryoji", detail: "A wizard known for his unbiased approach to magic and universal wisdom.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Kaori Naoto", detail: "A neutral wizard who has found peace by integrating all types of magic.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Ryozen Goro", detail: "A master wizard whose neutrality allows him to understand both sides of magical conflicts.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Keiko Tetsu", detail: "A calm wizard who seeks balance through the neutral path of magic.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Tatsuo Shoji", detail: "A powerful wizard known for his even-handed judgment in magical affairs.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Haruko Kaito", detail: "A neutral wizard who maintains a calm demeanor amidst magical chaos.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Minori Shunji", detail: "A wizard with great control over both light and shadow, keeping the magical world in balance.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Kiyoto Ritsuo", detail: "A wizard who carefully navigates between good and evil forces to maintain harmony.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Taichi Satoru", detail: "A neutral wizard known for his philosophical approach to magical practice.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Ryutaro Daisuke", detail: "A wizard of ancient wisdom who remains neutral in the face of magical conflict.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Shigeko Yasuo", detail: "A wizard known for his ability to use magic in ways that bring balance and harmony.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Kiyonori Takahiro", detail: "A neutral wizard revered for his mastery in controlling conflicting magical forces.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Kyoshi Renji", detail: "A master of both light and shadow magic, he is a true neutral wizard.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Takaomi Taro", detail: "A wizard who has honed his powers to maintain balance in the magical realm.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Haruka Koji", detail: "A wizard who has the rare ability to stay neutral during magical conflicts.", status: false, gender: "Traditional", type: "Neutral Wizard" },
    { name: "Takumi Kaito", detail: "A modern wizard whose neutrality is unmatched, able to blend multiple magical disciplines.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Aya Takara", detail: "A contemporary wizard known for her ability to harness neutral magic in creative ways.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Renzo Kaito", detail: "A modern wizard whose strength lies in his ability to adapt to different magical practices.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Yuichi Hiro", detail: "A neutral wizard who uses a unique blend of modern and traditional magic.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Shiro Kai", detail: "A wizard who effortlessly combines old and new magical practices to remain neutral.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Azumi Makoto", detail: "A powerful modern wizard who knows how to manipulate both light and dark energies.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Taro Keiko", detail: "A neutral wizard focused on preserving the balance of magic in the modern world.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Hikaru Ryuji", detail: "A wizard who believes in the power of neutrality to solve modern magical conflicts.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Sayuri Daiki", detail: "A neutral wizard who uses modern magic to maintain balance in the world.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Yuto Kaoru", detail: "A wizard whose neutral approach to magic has made him a master of multiple disciplines.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Akira Shoji", detail: "A modern wizard whose mastery over all elements allows him to remain neutral in conflicts.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Sora Hoshin", detail: "A neutral wizard with incredible control over both dark and light forces.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Kazumi Tatsu", detail: "A modern wizard who combines knowledge of traditional and contemporary magic.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Makiko Haruto", detail: "A wizard with a deep understanding of both ancient and modern magical systems.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Daiki Akio", detail: "A modern wizard skilled in utilizing the neutral energies in today's magical world.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Rina Yuto", detail: "A neutral wizard known for her calm demeanor and her ability to maintain harmony.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Kyoji Hiroshi", detail: "A powerful modern wizard who uses his abilities to achieve balance between the forces of magic.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Sayaka Kenzo", detail: "A wizard with a profound understanding of the interplay between different magical forces.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Nanami Ren", detail: "A contemporary wizard with the unique ability to understand both light and dark magics.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Yuina Akihiro", detail: "A neutral wizard focused on learning the balance between opposing magical forces.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Jiro Ryuu", detail: "A wizard whose neutrality is reflected in his approach to magic, using both good and bad forces.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Keiko Yoshi", detail: "A modern wizard who blends ancient and contemporary practices to maintain magical balance.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Kaori Riko", detail: "A modern wizard known for her ability to manipulate both light and dark magic.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Yuji Taka", detail: "A wizard known for his deep understanding of how different magical energies can coexist.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Michiko Ryo", detail: "A modern wizard who uses both ancient and modern spells to stay neutral in magic.", status: false, gender: "Modern", type: "Neutral Wizard" },
    { name: "Daizen Ryuji", detail: "An ancient wizard who wields forgotten spells of immense power.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Ryutaru Taishi", detail: "A wizard from the ancient world, his magic flows from the deepest origins of the arcane.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Kyoshi Fumio", detail: "A wise wizard who has seen the rise and fall of empires, his knowledge vast as the cosmos.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Hiroki Satoru", detail: "An ancient wizard whose power transcends time, drawing from ancient rituals.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Akihiro Ryozen", detail: "A master of forgotten incantations, his wisdom is a key to the ancient mysteries.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Kazuo Takahiro", detail: "A wizard who has studied the magical laws of nature since the ancient times.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Daiki Yusuke", detail: "An ancient wizard who bends the laws of magic, tapping into the primordial energies of the world.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Takeshi Taiko", detail: "A powerful wizard whose spells echo with the power of ages long past.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Ryutaro Hiroki", detail: "A wizard who manipulates the forces of nature through ancient, forgotten magic.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Satoro Minoru", detail: "A wizard who once governed over the natural forces, now a shadow of ancient power.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Kenzo Shunji", detail: "A master of magical forms, his power is a direct link to the forgotten past.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Hikaru Takeshi", detail: "A wizard whose ancient teachings have shaped the magical practices of today.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Kazuyoshi Hiroshi", detail: "A wizard of old who has seen the world change and adapted his powers accordingly.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Shinji Tetsu", detail: "A timeless wizard who draws from a deep well of ancient wisdom and arcane energy.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Kaemon Hatsu", detail: "An ancient wizard who holds the secrets of the old world, his knowledge vast and arcane.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Toshiro Keiji", detail: "A wizard whose ancient wisdom is revered by those who seek knowledge from the ages.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Riku Shun", detail: "A wizard with mastery over the fundamental forces, his power comes from the ancient roots of magic.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Takashi Haruto", detail: "A wizard who draws his strength from the ancient magic that binds the world together.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Eiji Renji", detail: "A wizard whose name is etched into the fabric of time, his legacy is that of ancient power.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Ryoji Tetsuya", detail: "An ancient wizard with an uncanny ability to manipulate the fabric of space and time.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Hiko Kiyoshi", detail: "A wizard whose knowledge of the arcane comes from a forgotten age of magical power.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Fumihiro Tatsuo", detail: "A wizard whose ancient incantations can alter the course of history itself.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Reiji Ryoma", detail: "A wizard who can peer into the past, his magic rooted in the deepest ancient secrets.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Daisuke Kiyoshi", detail: "A powerful ancient wizard whose abilities are connected to the most ancient forces of magic.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Kaito Shunsui", detail: "An ancient wizard whose mastery of the elements allows him to reshape the world.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Yusuke Taiko", detail: "A timeless wizard whose magic has endured the passage of countless ages.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Takao Satoru", detail: "A wizard whose power derives from the ancient forces of nature, manipulating time and space.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Kenzaki Ryo", detail: "An ancient wizard with an enigmatic presence, feared for his knowledge of forbidden magics.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Satoru Akihiko", detail: "A wizard who hails from the forgotten past, his power unrivaled by even the greatest mages of today.", status: false, gender: "Ancient", type: "Neutral Wizard" },
    { name: "Rikuo Haruka", detail: "An ancient wizard whose spells ripple through time and space, shaping the very fabric of reality.", status: false, gender: "Ancient", type: "Neutral Wizard" }
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
      name: "Russian Name Generator",
      pic: "/Russian.webp",
      link: "https://www.nameideagenerator.com/russian-name-generator",
  },
  {
      name: "Greek Name Generator",
      pic: "/greek.webp",
      link: "https://www.nameideagenerator.com/greek-name-generator",
  },
  {
      name: "Norse Name Generator",
      pic: "/Norse.jpg",
      link: "https://www.nameideagenerator.com/norse-name-generator",
  },
  {
      name: "Viking Name Generator",
      pic: "/vikings.jpg",
      link: "https://www.nameideagenerator.com/viking-name-generator",
  },
  ];
  
  const ChineseNameGenerator = () => {
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
  
const bgImage = "/chinese-name-generator.jpg"
const context = "Chinese Name Generator With Meanings"
const Q1 = "How does the Chinese Name Generator work?"
const A1 = "Our Chinese Name Generator provides a unique Chinese name based on the type (traditional, modern, or ancient) and religion options (Buddhist, Taoist, or neutral). Simply select your preferences, and the tool will generate four names, each with its meaning."

const Q2 = "Can I customize the Chinese name generated?"
const A2 = "Yes, our tool allows you to customize the names by selecting specific types, such as traditional, modern, or ancient, and by choosing a religion or keeping it neutral. This flexibility ensures the name matches your exact preferences."

const Q3 = "What types of Chinese names can I generate?"
const A3 = "You can generate traditional, modern, or ancient Chinese names. Each type reflects different cultural, historical, and social influences, giving you a variety of options to choose from."

const Q4 = "Are the Chinese names generated meaningful?"
const A4 = "Absolutely! Each name generated by our tool comes with an explanation of its meaning, offering a deeper connection to Chinese culture and symbolism."

const Q5 = "Can I use the Chinese Name Generator for character creation?"
const A5 = "Yes, the Chinese Name Generator is perfect for character creation in stories, games, or any creative project. Whether you’re building a fictional character or looking for a unique baby name, our tool helps you find the perfect fit."
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
        <a href="/chinese-name-generator" className="hover:underline text-[#343a40]">Chinese Name Generator Tool with Meaning</a>
      </li>
    </ol>
  </nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Chinese Name Generator Tool with Meaning
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Chinese Name</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Traditional">Traditional</option>
              <option value="Modern">Modern </option>
              <option value="Ancient">Ancient </option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Religious of Chinese Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Buddhist Wizard">Buddhist </option>
              <option value="Taoist Wizard">Taoist </option>
              <option value="Neutral">Neutral </option>
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
            What is the Chinese Name Generator?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            The <b>Chinese Name Generator </b>is an online tool designed to provide authentic Chinese names. 
            It generates names based on specific types, religions, and styles. You can explore endless combinations for creative or personal projects.
            </p>
            <p className="text-left py-[10px] text-[#343a40]">
            This tool ensures that every name is meaningful and culturally appropriate. 
            From Buddhist names to Taoist names, it offers a wide range of options. Each name reflects Chinese traditions and philosophies..
            </p>
            
          </div>
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Why Use Our Chinese Name Generator Tool?
            </h2>
            <hr />
            <br />
            <p className="text-left mt-[30px] py-[10px] text-[#343a40]">
            You must try this tool to access thousands of unique Chinese names. The Chinese Name Generator gives meaningful names suitable for storytelling, baby names, or creative projects. <br />
            Finding names with deep cultural roots can be challenging. This tool simplifies the process. It also provides names with meanings to help you choose one that matches your requirements.
            </p>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use Our Chinese Name Generator?
          </h2>
        </div>
        <br />
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Choose a Name Type <b> (Traditional, Modern, Ancient)</b>:
              </h3>
              <p>
              Start by selecting the style of the name. Traditional names reflect deep cultural heritage. 
              Modern names combine contemporary trends with Chinese identity, while ancient names connect to historical significance.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Pick a Religious or Neutral Option <b> (Buddhist, Taoist, Neutral)</b>:
              </h3>
              <p>
              Next, decide if you want the name to reflect a religious influence. 
              Buddhist names often signify peace and wisdom. Taoist names represent balance and harmony. Neutral options provide versatile choices
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b> “Generate” </b>for Unique Chinese Names:
              </h3>
              <p>
              Hit the <b> “Generate” </b>button to instantly discover four unique Chinese names. Each name includes its meaning, ensuring relevance to the selected type and style.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Review and Select the Name You Like:
              </h3>
              <p>
              Browse the generated names and find one that resonates with your preferences. Each name’s meaning adds depth and value, making the selection process simple and meaningful.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="japanese-name-generator.jpg"
              alt="Chinese Name Generator Tool"
              className="w-[300px] my-[20px] h-[300px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="chinese-name.webp"
              alt="Chinese Name Generator Tool"
              className="w-[300px] h-[300px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/v2-iyi3q-y758v.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Chinese Name Generator
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
          <b> Unique Features of the Chinese Name Generator</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
            Meaningful Names with Cultural Context:
            </h3>
            <p>
            Every name generated comes with a detailed explanation, offering insight into its cultural significance. 
            This ensures that you understand the depth and history behind each name.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Customizable Name Styles
            </h3>
            <p>
            Choose from a variety of name types, including traditional, modern, and ancient. 
            You can also select religious categories like Buddhist, Taoist, or neutral names to fit your specific preferences.            
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            Instant and Diverse Results:
            </h3>
            <p>
            Generate four unique names at once, each with its own meaning. This feature provides quick, diverse options to help you find the perfect name in no time.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
            User-Friendly Interface:
            </h3>
            <p>
            The tool is designed to be simple and intuitive. You can easily navigate through the steps and generate names with just a few clicks, making the process fast and hassle-free.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white">
      <div className="w-[80%]  mx-auto text-[#343a40] my-[50px]">
        <div> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center">
          Types of Chinese Names You Can Generate
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Traditional Chinese Names:
              </h3>
              <p>
              These names reflect cultural heritage and values. 
              They carry deep meanings tied to family history and ancient traditions. Perfect for those seeking authentic and meaningful names.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Modern Chinese Names:
              </h3>
              <p>
              Contemporary names designed for today’s world. 
              They combine traditional elements with modern appeal. Ideal for creative projects or individuals looking for fresh and stylish names.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Ancient Chinese Names:
              </h3>
              <p>
              Names inspired by historical figures and legends. 
              They evoke a sense of timelessness and connect with China’s rich history. Great for storytelling or characters rooted in the past.
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
          Religious Chinese Name Options
          </h2>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[100%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Buddhist Chinese Names:
              </h3>
              <p>
              These names symbolize peace, wisdom, and enlightenment. They are perfect for representing spiritual beliefs or calm personalities.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Taoist Chinese Names:
              </h3>
              <p>
              Focused on harmony and balance, these names draw from the philosophy of yin and yang. They are ideal for those who appreciate nature and spiritual connections.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[24px] text-[20px] font-semibold">
              Neutral Chinese Names:
              </h3>
              <p>
              Names without specific religious ties. They are versatile and suitable for a variety of uses. Great for those seeking simple yet meaningful options.
              </p>
            </div>
            <p>
            Our <b> Chinese Name Generator</b> makes exploring these categories effortless. You can quickly generate names with meanings that match your preferences. 
            The tool saves time and ensures you find culturally appropriate and creative names in just a few clicks.
              </p>
          </div>
        </div>
      </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px] h-[120vh]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          What Makes a Chinese Name Unique?
          </h2>
          <p>
          Chinese names often carry cultural and historical significance. Each name reflects harmony and balance, making it unique and meaningful.
          These names also convey personal values or traits. They often tell a story or represent a deeper connection with traditions and philosophies
          </p>
          <br />
        <hr />
          <br />
        </div>
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[60%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Cultural and Historical Significance
              </h3>
              <p>
              Chinese names often reflect virtues, nature, and family heritage, with deep connections to history and tradition.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Meaningful Characters
              </h3>
              <p>
              Each character in a Chinese name holds a specific meaning, contributing to the overall symbolism of the name.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Structure of Chinese Names
              </h3>
              <p>
              Typically, Chinese names consist of a one-character surname followed by a two-character given name, emphasizing both family heritage and individuality.
              </p>
            </div>  
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Phonetic Harmony
              </h3>
              <p>
              Names are chosen for their sound as well as meaning, with harmonious tones believed to bring good fortune.    
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Influence of Religion and Philosophy
              </h3>
              <p>
              Buddhist, Taoist, and Confucian philosophies often influence name selection, incorporating qualities like peace, strength, and wisdom.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Astrological Considerations
              </h3>
              <p>
              In some cases, Chinese names are influenced by astrology to balance the Five Elements and align with the individual’s destiny.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="v2-iyi5f-tnbe8.jpg"
              alt="Chinese Name Generator Tool"
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

export default ChineseNameGenerator;

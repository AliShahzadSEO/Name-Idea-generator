"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumbs from "../breadcrumb/page";
import { usePathname } from "next/navigation";

const HeroSection = ({ context, bgImage }) => {
  const pathname = usePathname();
  const [firstarrow, setFirstArrow] = useState(false);
  const [SecondArrow, setSecondArrow] = useState(false);
  const [ThirdArrow, setThirdArrow] = useState(false);
  const [FourthArrow, setFourthArrow] = useState(false);
  const [open, setOpen] = useState(false);

  const islogorNot = pathname !== "/blog";
  const isBlogPage = pathname.startsWith("/blog/");

  return (
    <div
      className="min-h-screen relative bg-overlay overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-screen-xl w-full px-4 mx-auto justify-between items-center py-[20px]">
        <Link href="/">
          <img src="/Logo.png" alt="Logo" className="w-20 h-20" />
        </Link>
        <div className="flex flex-wrap gap-4">
          {/* Dropdowns */}
          {[
            {
              title: "Fantasy and Mythical Creatures",
              link: "/categories/fantasy-and-mythical-creatures",
              show: firstarrow,
              setShow: setFirstArrow,
              dropdown: [
                ["Demon Name Generator", "/demon-name-generator"],
                ["Tiefling Name Generator", "/tiefling-name-generator"],
                ["Dragonborn Name Generator", "/dragonborn-name-generator"],
                ["Orc Name Generator", "/orc-name-generator"],
              ],
              width: "w-[100%]",
            },
            {
              title: "Cultural and Historical",
              link: "/categories/cultural-and-historical",
              show: SecondArrow,
              setShow: setSecondArrow,
              dropdown: [
                ["Viking Name Generator", "/viking-name-generator"],
                ["Russian Name Generator", "/russian-name-generator"],
                ["Greek Name Generator", "/greek-name-generator"],
                ["Norse Name Generator", "/norse-name-generator"],
              ],
              width: "w-[120%]",
            },
            {
              title: "Fictional and Sci-Fi",
              link: "/categories/fictional-and-scifi",
              show: ThirdArrow,
              setShow: setThirdArrow,
              dropdown: [
                ["Alien Name Generator", "/alien-name-generator"],
                ["Robot Name Generator", "/robot-name-generator"],
                ["Saiyan Name Generator", "/saiyan-name-generator"],
                ["Demon Name Generator", "/demon-name-generator"],
              ],
              width: "w-[140%]",
            },
            {
              title: "Miscellaneous Themes",
              link: "#",
              show: FourthArrow,
              setShow: setFourthArrow,
              dropdown: [
                ["Island Name Generator", "/island-name-generator"],
                ["Song Name Generator", "/song-name-generator"],
                ["Angel Name Generator", "/angel-name-generator"],
                ["Horse Name Generator", "/horse-name-generator"],
              ],
              width: "w-[110%]",
            },
          ].map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => menu.setShow(true)}
              onMouseLeave={() => menu.setShow(false)}
            >
              <div className="flex items-center hover:text-[#007bff] text-white gap-1 cursor-pointer">
                <Link href={menu.link}>
                  <p className="font-medium text-[13px] whitespace-normal break-words">
                    {menu.title}
                  </p>
                </Link>
                {menu.show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </div>
              <ul
                className={`absolute text-center top-[140%] flex flex-col gap-4 pt-5 py-2 px-2 text-[14px] bg-slate-100 rounded-md ${menu.width} transition-all duration-300 ${
                  menu.show ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {menu.dropdown.map(([name, href], i) => (
                  <Link href={href} key={i}>
                    <li className="hover:text-[#007bff] text-sm">{name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}

          {/* Blog + Contact */}
          <Link href="/blog" className="flex items-center">
            <p className="hover:text-[#007bff] text-white font-medium text-[13px] cursor-pointer">
              Blog
            </p>
          </Link>
          <Link href="/contact-us" className="flex items-center">
            <p className="hover:text-[#007bff] text-white font-medium text-[13px] cursor-pointer">
              Contact Us
            </p>
          </Link>
        </div>
      </div>

      {/* Mobile & Tablet Navbar */}
      <div className="md:hidden w-[90%] mx-auto flex justify-between items-center py-[20px]">
        <div className="flex items-center gap-2">
          <img src="/Logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <RxHamburgerMenu
          onClick={() => setOpen(true)}
          className="text-white text-[26px] cursor-pointer"
        />
      </div>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 1200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute top-0 w-full h-screen flex justify-end z-[1000]"
          style={{ backgroundColor: "rgb(0,0,0,0.3)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-[70%] h-full bg-white px-5 py-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-[24px] text-[#007bff]">NIG</p>
              <IoClose
                className="text-[24px] cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-4 mt-8 font-semibold">
              <Link
                href="/categories/fantasy-and-mythical-creatures"
                onClick={() => setOpen(false)}
              >
                <p>Fantasy and Mythical Creatures</p>
              </Link>
              <Link
                href="/categories/cultural-and-historical"
                onClick={() => setOpen(false)}
              >
                <p>Cultural and Historical</p>
              </Link>
              <Link
                href="/categories/fictional-and-scifi"
                onClick={() => setOpen(false)}
              >
                <p>Fictional and Sci-Fi</p>
              </Link>
              <Link href="/blog" onClick={() => setOpen(false)}>
                <p>Blog</p>
              </Link>
              <Link href="/contact-us" onClick={() => setOpen(false)}>
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Breadcrumbs */}
      <Breadcrumbs className="text-white px-4 pt-4" />

      {/* Hero Text */}
      <div className="text-center w-[80%] mx-auto flex flex-col gap-4 items-center justify-center h-[80vh]">
        <h1 className="sm:text-[28px] text-[24px] text-white font-bold tracking-[4px]">
          {context}
        </h1>
        {islogorNot && !isBlogPage && (
          <p className="text-white sm:text-[18px] text-[16px]">
            The ultimate platform for writers, gamers, and creators looking to
            infuse authenticity and flair into their character development.
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumbs from "../breadcrumb/page";
import { usePathname } from "next/navigation";

const HeroSection = ({ context, bgImage, blogcontent }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [firstarrow, setFirstArrow] = useState(false);
  const [SecondArrow, setSecondArrow] = useState(false);
  const [ThirdArrow, setThirdArrow] = useState(false);
  const [FourthArrow, setFourthArrow] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const islogorNot = pathname != "/blog";
  const isBlogPage = pathname.startsWith("/blog/");
  const isBlogCatery = pathname.startsWith("/blog/category/");

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run only once on component mount
  useEffect(() => {
    // Finding();
    // ScrollUpFunction();
  }, []);

  return (
    <div
  className="min-h-screen relative bg-overlay"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "scroll", // fallback for mobile devices
  }}
>

      <div className="border-b border-solid ">
        {width > 768 ? (
          <>
            <div className="w-[90%] mx-auto flex justify-between items-center py-[20px]">
              <div>
                <Link href="/">
                  <img
                    src="/Logo.png"
                    alt="Name idea generator Logo"
                    className="w-20 h-20"
                  />
                </Link>
              </div>
              <div className="flex gap-4">
                <div
                  className="relative"
                  onMouseEnter={() => setFirstArrow(true)}
                  onMouseLeave={() => setFirstArrow(false)}
                >
                  <div className="flex items-center hover:text-[#007bff] text-white gap-[2px] cursor-pointer relative">
                    <Link
                      href="/categories/fantasy-and-mythical-creatures"
                      className=""
                    >
                      <p className="font-medium text-[13px]">
                        Fantasy and Mythical Creatures
                      </p>
                    </Link>
                    {firstarrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </div>
                  <ul
                    className={`absolute text-center top-[140%] flex flex-col gap-4 pt-[20px] py-[10px] text-[14px] bg-slate-100 rounded-md w-[100%] transition-all duration-300 ${
                      firstarrow ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <Link href="/demon-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Demon Name Generator
                      </li>
                    </Link>
                    <Link href="/tiefling-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Tiefling Name Generator
                      </li>
                    </Link>
                    <Link href="/dragonborn-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Dragonborn Name Generator
                      </li>
                    </Link>
                    <Link href="/orc-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Orc Name Generator
                      </li>
                    </Link>
                  </ul>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setSecondArrow(true)}
                  onMouseLeave={() => setSecondArrow(false)}
                >
                  <div className="flex items-center hover:text-[#007bff] text-white gap-[2px] cursor-pointer relative">
                    <Link
                      href="/categories/cultural-and-historical"
                      className=""
                    >
                      <p className="font-medium text-[13px] ">
                        Cultural and Historical
                      </p>
                    </Link>
                    {SecondArrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </div>
                  <ul
                    className={`absolute text-center top-[140%] flex flex-col gap-4 pt-[20px] py-[10px] px-2 text-[14px] bg-slate-100 rounded-md w-[120%] transition-all duration-300 ${
                      SecondArrow
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <Link href="/viking-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Viking Name Generator
                      </li>
                    </Link>
                    <Link href="/russian-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Russian Name Generator
                      </li>
                    </Link>
                    <Link href="/greek-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Greek Name Generator
                      </li>
                    </Link>
                    <Link href="/norse-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Norse Name Generator
                      </li>
                    </Link>
                  </ul>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setThirdArrow(true)}
                  onMouseLeave={() => setThirdArrow(false)}
                >
                  <div className="flex items-center hover:text-[#007bff] text-white gap-[2px] cursor-pointer relative">
                    <Link href="/categories/fictional-and-scifi" className="">
                      <p className="font-medium text-[13px] ">
                        Fictional and Sci-Fi
                      </p>
                    </Link>
                    {ThirdArrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </div>
                  <ul
                    className={`absolute text-center top-[140%] flex flex-col gap-4 pt-[20px] py-[10px] px-2 text-[14px] bg-slate-100 rounded-md w-[140%] transition-all duration-300 ${
                      ThirdArrow ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <Link href="/alien-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Alien Name Generator
                      </li>
                    </Link>
                    <Link href="/robot-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Robot Name Generator
                      </li>
                    </Link>
                    <Link href="/saiyan-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Saiyan Name Generator
                      </li>
                    </Link>
                    <Link href="/demon-name-generator">
                      <li className="hover:text-[#007bff] text-sm">
                        Demon Name Generator
                      </li>
                    </Link>
                  </ul>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setFourthArrow(true)}
                  onMouseLeave={() => setFourthArrow(false)}
                >
                  <div className="flex items-center hover:text-[#007bff] text-white gap-[2px] cursor-pointer relative">
                    <Link href="#" className="">
                      <p className="font-medium text-[13px] ">
                        Miscellaneous Themes
                      </p>
                    </Link>
                    {FourthArrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </div>
                  <ul
                    className={`absolute text-center top-[140%] flex flex-col gap-4 pt-[20px] py-[10px] text-[14px] bg-slate-100 rounded-md w-[110%] transition-all duration-300 ${
                      FourthArrow
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <Link href="/island-name-generator">
                      <li className="hover:text-[#007bff]">
                        Island Name Generator
                      </li>
                    </Link>
                    <Link href="/song-name-generator">
                      <li className="hover:text-[#007bff]">
                        Song Name Generator
                      </li>
                    </Link>
                    <Link href="/angel-name-generator">
                      <li className="hover:text-[#007bff]">
                        Angel Name Generator
                      </li>
                    </Link>
                    <Link href="/horse-name-generator">
                      <li className="hover:text-[#007bff]">
                        Horse Name Generator
                      </li>
                    </Link>
                  </ul>
                </div>

                <Link href={"/blog"} className="flex items-center">
                  <p className="hover:text-[#007bff] text-white font-medium text-[13px] cursor-pointer">
                    Blog
                  </p>
                </Link>

                <div className="flex items-center">
                <Link href={"/contact-us"} className="flex items-center">
                  <p className="hover:text-[#007bff] text-white font-medium text-[13px] cursor-pointer">
                   Contact Us
                  </p>
                </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-[90%] mx-auto flex justify-between items-center py-[20px]">
            <div>
              <p className="font-bold text-[20px] text-[#007bff]">
                Name Idea Generator
              </p>
            </div>
            <div>
              <RxHamburgerMenu onClick={() => setOpen(true)} />
            </div>
          </div>
        )}
        {/* {open&&<Drawer setOpen={setOpen}/>} */}
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 1200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 w-[100%] h-[100vh] flex justify-end z-[1000]"
            style={{ backgroundColor: "rgb(0,0,0,0.3)" }}
            onClick={() => setOpen(false)}
          >
            <div
              className="w-[60%] h-[100vh] bg-white px-[20px] p-[20px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <p className="font-bold text-[24px] text-[#007bff]">NIG</p>
                <div>
                  <IoClose
                    className="text-[24px] "
                    onClick={() => setOpen(false)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px] font-semibold">
                <Link
                  href={"/categories/fantasy-and-mythical-creatures"}
                  onClick={() => setOpen(false)}
                >
                  <p>Fantasy and Mythical Creatures</p>
                </Link>
                <Link
                  href={"/categories/cultural-and-historical"}
                  onClick={() => setOpen(false)}
                >
                  <p>Cultural and Historical</p>
                </Link>
                <Link
                  href={"/categories/fictional-and-scifi"}
                  onClick={() => setOpen(false)}
                >
                  <p>Fictional and Sci-Fi</p>
                </Link>
                <Link href={"/blog"}>Blog</Link>
                <p>Contact us</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Breadcrumbs className={"text-white px-4 pt-4"} />
      <div className="text-center w-[80%] mx-auto flex flex-col gap-4 items-center justify-center h-[80vh]">
        <h1 className="sm:text-[28px] text-[24px] text-white font-bold tracking-[4px]">
          {context}
        </h1>
        {islogorNot && !isBlogPage && (
          <p className="text-white sm:text-[18px] text-[16px]">
            The ultimate platform for writers, gamers, and creators looking to
            infuse authenticity and flair into their character development.
          </p>
        )}
        {/* {isBlogPage && !isBlogCatery&& <Link
       href={`/blog/category/${blogcontent}`}
      ><p className="text-white text-[20px]">Category: {blogcontent}</p>
      </Link>
      } */}
      </div>
    


   
    </div>
  );
};

export default HeroSection;

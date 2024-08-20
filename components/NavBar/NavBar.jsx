"use client";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [firstarrow, setFirstArrow] = useState(false);
  const [SecondArrow, setSecondArrow] = useState(false);
  const [ThirdArrow, setThirdArrow] = useState(false);
  const [FourthArrow, setFourthArrow] = useState(false);
  const [open, setOpen] = useState(false);
  

  return (
    <div className="border-b border-solid ">
      {width > 768 ? (
       <div className="w-[90%] mx-auto flex justify-between items-center py-[20px]">
       <div>
         <p className="font-bold text-[28px] text-[#007bff]">
           Name Idea Generator
         </p>
       </div>
       <div className="flex gap-4">
         <div
           className="relative"
           onMouseEnter={() => setFirstArrow(true)}
           onMouseLeave={() => setFirstArrow(false)}
         >
           <div className="flex items-center hover:text-[#007bff] gap-[2px] cursor-pointer relative">
           <a href="https://www.nameideagenerator.com/categories/fantasy-and-mythicalcreatures">  <p className="font-medium text-[14px] hover:border-b hover:border-solid">
               Fantasy and Mythical Creatures
             </p>
             </a>
             {firstarrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
           </div>
           <ul
             className={`absolute text-center top-[100%] flex flex-col gap-4 pt-[20px] py-[10px] text-[14px] bg-white w-[100%] transition-all duration-300 ${
               firstarrow ? "opacity-100 visible" : "opacity-0 invisible"
             }`}
           >
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/demon-name-generator"> Demon Name <br /> Generator </a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/tiefling-name-generator">Tiefling Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/dragonborn-name-generator">Dragonborn Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/orc-name-generator">Orc Name <br /> Generator</a></li>
           </ul>
         </div>
         <div
           className="relative"
           onMouseEnter={() => setSecondArrow(true)}
           onMouseLeave={() => setSecondArrow(false)}
         >
           <div className="flex items-center hover:text-[#007bff] gap-[2px] cursor-pointer relative">
            <a href="https://www.nameideagenerator.com/categories/cultural-and-historical"> <p className="font-medium text-[14px] hover:border-b hover:border-solid">
               Cultural and Historical
             </p></a>
             {SecondArrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
           </div>
           <ul
             className={`absolute text-center top-[100%] flex flex-col gap-4 pt-[20px] py-[10px] text-[14px] bg-white w-[100%] transition-all duration-300 ${
               SecondArrow ? "opacity-100 visible" : "opacity-0 invisible"
             }`}
           >
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/viking-name-generator">Viking Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/russian-name-generator">Russian Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/greek-name-generator">Greek Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/norse-name-generator">Norse Name <br /> Generator</a></li>
           </ul>
         </div>
         <div
           className="relative"
           onMouseEnter={() => setThirdArrow(true)}
           onMouseLeave={() => setThirdArrow(false)}
         >
           <div className="flex items-center hover:text-[#007bff] gap-[2px] cursor-pointer relative">
          <a href="https://www.nameideagenerator.com/categories/fictional-and-scifi"> <p className="font-medium text-[14px] hover:border-b hover:border-solid">
               Fictional and Sci-Fi
             </p></a>  
             {ThirdArrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
           </div>
           <ul
             className={`absolute text-center top-[100%] flex flex-col gap-4 pt-[20px] py-[10px] text-[14px] bg-white w-[100%] transition-all duration-300 ${
               ThirdArrow ? "opacity-100 visible" : "opacity-0 invisible"
             }`}
           >
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/alien-name-generator">Alien Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/island-name-generator">Robot Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/saiyan-name-generator">Saiyan Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/angel-name-generator">Angel Name <br /> Generator</a></li>
           </ul>
         </div>
         <div
           className="relative"
           onMouseEnter={() => setFourthArrow(true)}
           onMouseLeave={() => setFourthArrow(false)}
         >
           <div className="flex items-center hover:text-[#007bff] gap-[2px] cursor-pointer relative">
             <p className="font-medium text-[14px] hover:border-b hover:border-solid">
               Miscellaneous Themes
             </p>
             {FourthArrow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
           </div>
           <ul
             className={`absolute text-center top-[100%] flex flex-col gap-4 pt-[20px] py-[10px] text-[14px] bg-white w-[100%] transition-all duration-300 ${
               FourthArrow ? "opacity-100 visible" : "opacity-0 invisible"
             }`}
           >
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/island-name-generator">Island Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/song-name-generator">Song Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/angel-name-generator">Angel Name <br /> Generator</a></li>
             <li className="hover:text-[#007bff]"><a href="https://www.nameideagenerator.com/horse-name-generator">Horse Name <br /> Generator</a></li>
           </ul>
         </div>
         <div className="flex items-center">
           <p className="hover:text-[#007bff] font-medium text-[14px] cursor-pointer">
             Contact us
           </p>
         </div>
       </div>
     </div>
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
                href={"/categories/fantasy-and-mythicalcreatures"}
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
              <p>Contact us</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;

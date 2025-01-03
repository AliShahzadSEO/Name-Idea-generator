import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] border-t border-solid bg-black py-[40px] bg-overlay2"
    style={{
      backgroundImage: `url("/demonpic.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}>
      <div className="w-[90%] mx-auto flex sm:flex-row flex-col sm:justify-between gap-8">
        {/* First section */}
        <div className="sm:w-[25%]">
          <div>
          <Link href="/">
                  <img
                    src="/Logo.png"
                    alt="Name idea generator Logo"
                    className="w-14 h-14"
                  />
                </Link>
          </div>
          <div className="py-[10px]">
            <p className="font-semibold text-[14px] text-white">
            The ultimate platform for writers, gamers, and creators looking to infuse authenticity and flair into their character development.
            </p>
            <div className="flex gap-2 py-[20px]">
            
                <Link href="https://www.nameideagenerator.com/">
          <p className="text-[26px] font-bold text-white">Name Idea Generator</p>
                  </Link>
              
            </div>
            {/* <div className=" flex gap-2">
              <input type="checkbox" />
              <span>
                By checking this box, you are agreeing with the privacy policy.
              </span>
            </div> */}
          </div>
        </div>
        {/* Second section */}
        <div className="sm:w-[25%]">
          <div>
            <p className="text-[26px] font-bold text-white">Support</p>
          </div>
          <div className="py-[10px]">
            <p className="font-semibold text-[14px] text-white">
              Enjoying my work and free to use content? You can support me with
              donations. Thank you!
            </p>
            <br />
          <a href="mailto:nameideag@gmail.com" className="font-semibold text-[14px] text-white">nameideag@gmail.com</a>
            <div className="flex  py-[16px]">
            <a href="https://donate.stripe.com/5kAg352Vd6cW5zyfYY" target="_blank" rel="noopener noreferrer">
  <button className="bg-red-500 text-white p-[8px] rounded-[10px] text-[14px]">
    DONATE
  </button>
</a>

            </div>
          </div>
        </div>
        {/* Third section */}
        <div className="sm:w-[25%]">
        <div>
            <p className="text-[26px] font-bold text-white">Categories</p>
          </div>
          <div className="py-[10px] flex flex-col gap-2 text-[14px] font-semibold text-white">
          <Link href={"/categories/fantasy-and-mythical-creatures"}>
            <p>Fantasy and Mythical</p>
          </Link>
          <Link href={"/categories/cultural-and-historical"}>
            <p className="cursor-pointer">Cultural and Historical</p>
          </Link>
          <Link href={"/categories/fictional-and-scifi"}>
            <p className="cursor-pointer">Fictional and Sci-Fi</p>
          </Link>

          </div>

        </div>
        <div className="sm:w-[25%]">
        <p className="text-[26px] font-bold text-white">Quick Links</p>
          
          <div className="py-[10px] flex flex-col gap-2 text-[14px] font-semibold text-white">
          <Link href={"/about-us"}>
            <p>About Us</p>
          </Link>
          <Link href={"/privacy-policy"}>
            <p className="cursor-pointer">Privacy Policy</p>
          </Link>
          <Link href={"/contact-us"}>
            <p className="cursor-pointer">Contact Us</p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

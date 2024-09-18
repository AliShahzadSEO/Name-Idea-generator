"use client"
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";

 const context = "Name Idea Generator's About Us"

const AboutUs = () => {

    return (
        <motion.div
            initial={{ opacity: 0, x: 1200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#f8f9fa] "
        >
            <HeroSection  context={context} />
           



            <div className="w-[80%] mx-auto text-[#343a40] h-[70vh]">
    <div>
        <br /> <br />
        <h2 className="sm:text-[36px] text-[28px] text-center">
            About Us
        </h2>
    </div>
    <div className="py-[20px] flex sm:flex-row flex-col gap-4 ">
        <div className="sm:w-[100%] flex items-center justify-center ">
            <div className="py-[10px] flex flex-col gap-4">
                <p>
                    We are passionate about helping creators, writers, and gamers find the perfect names for their characters and projects. At Name Idea Generator, we offer an easy-to-use platform that generates unique names across various themes, whether you're crafting a story, building a game, or just exploring new ideas.
                    <br /><br />
                    Our goal is to provide a tool that fuels creativity. Names play a crucial role in character and world-building, and our generator is designed to help you find names that fit your vision. From fantasy creatures to cultural and historical names, our generator delivers fresh ideas with every click.
                    <br /><br />
                    We believe in simplicity and creativity. Our platform is free, accessible, and secure, making it easy for you to focus on your project. Explore endless possibilities and take your creations to the next level with Name Idea Generator!
                </p>
                <div className="text-center">
                    <a href="https://nameideagenerator.com" className="inline-block px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                        Generate Now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>




            <Footer />
        </motion.div>
    );
};

export default AboutUs;

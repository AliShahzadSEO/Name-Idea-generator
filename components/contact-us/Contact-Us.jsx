"use client";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";

const bgImage = "NIG-contact-us.jpg";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#f8f9fa] text-[#343a40]"
    >
      <HeroSection bgImage={bgImage} />

      {/* Contact Section */}
      <div className="w-[80%] mx-auto py-12">
        <h1 className="sm:text-[36px] text-[28px] text-center font-bold">
          Contact Us
        </h1>

        <div className="flex flex-col sm:flex-row gap-8 mt-8">
          {/* Left Section - Contact Info */}
          <div className="sm:w-1/2">
            <p className="text-lg leading-relaxed">
              Have a question or need help? We're here to assist you! Whether
              you're looking for the perfect name for your character, project,
              or game, Name Idea Generator is your go-to resource. Reach out to
              us anytime.
            </p>

            <div className="mt-6">
              <p className="text-lg font-semibold">Email:</p>
              <a
                href="mailto:nameideag@gmail.com"
                className="text-blue-500 hover:underline"
              >
                nameideag@gmail.com
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form (Dark Theme) */}
          <div className="sm:w-1/2 bg-[#343a40] shadow-lg rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold text-center">Send us a Message</h2>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-[#6c757d] bg-[#495057] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-[#6c757d] bg-[#495057] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-[#6c757d] bg-[#495057] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#17A2B8] text-white py-3 rounded-lg hover:bg-[#206a75] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section (Dark Theme for Contrast) */}
      <div className="bg-[#343a40] text-white text-center py-12">
        <h2 className="text-3xl font-semibold">Find the Perfect Name Today!</h2>
        <p className="text-lg mt-3 text-[#adb5bd]">
          Explore thousands of unique and creative name ideas.
        </p>
        <a
          href="https://www.nameideagenerator.com/"
          className="inline-block mt-5 px-6 py-3 bg-[#17A2B8] text-white rounded-lg hover:bg-[#206a75] transition duration-300"
        >
          Generate Now
        </a>
      </div>

      <Footer />
    </motion.div>
  );
};

export default ContactUs;

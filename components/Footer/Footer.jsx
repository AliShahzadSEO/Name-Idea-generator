import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 bg-[#1f1f1f] py-12">
      <div className="w-[90%] mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 text-white">
        
        {/* First Section - Name Idea Generator */}
        <div className="sm:w-[25%]">
          <Link href="/">
            <p className="text-2xl font-bold hover:text-gray-400 cursor-pointer">
              Name Idea Generator
            </p>
          </Link>
          <p className="text-sm mt-3 text-gray-400">
            Helping writers, gamers, and creators discover the perfect names
            with creativity and authenticity.
          </p>
          <div className="mt-4">
            <a
              href="https://donate.stripe.com/test_5kA00Tgr72x41DW5kk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition duration-300"
            >
              DONATE
            </a>
          </div>
        </div>

        {/* Second Section - Support */}
        <div className="sm:w-[25%]">
          <p className="text-2xl font-bold">Support</p>
          <p className="text-sm mt-3 text-gray-400">
            Enjoying the platform? Support free content and development with a
            donation.
          </p>
          <a
            href="mailto:nameideag@gmail.com"
            className="text-sm text-blue-400 mt-3 block hover:underline"
          >
            nameideag@gmail.com
          </a>
          <div className="mt-4">
            <Link href="/contact-us">
              <p className="text-sm font-semibold text-gray-300 hover:text-blue-400 cursor-pointer">
                Get in Touch
              </p>
            </Link>
          </div>
        </div>

        {/* Third Section - Categories */}
        <div className="sm:w-[25%]">
          <p className="text-2xl font-bold">Categories</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/categories/fantasy-and-mythical-creatures">
              <p className="hover:text-white cursor-pointer">
                Fantasy and Mythical
              </p>
            </Link>
            <Link href="/categories/cultural-and-historical">
              <p className="hover:text-white cursor-pointer">
                Cultural and Historical
              </p>
            </Link>
            <Link href="/categories/fictional-and-scifi">
              <p className="hover:text-white cursor-pointer">
                Fictional and Sci-Fi
              </p>
            </Link>
          </div>
        </div>

        {/* Fourth Section - Quick Links */}
        <div className="sm:w-[25%]">
          <p className="text-2xl font-bold">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/about-us">
              <p className="hover:text-white cursor-pointer">About Us</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            </Link>
            <Link href="/contact-us">
              <p className="hover:text-white cursor-pointer">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-500 mt-10">
        <p>&copy; {new Date().getFullYear()} Name Idea Generator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

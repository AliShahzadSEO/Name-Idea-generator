"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import emailjs from "emailjs-com";

const context = "Name Idea Generator's Contact Us";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Send the email using EmailJS
    emailjs
  .send(
    "service_f8mxa0q", // Replace with your service ID
    "template_g9ypdhk", // Replace with your template ID
    {
      from_name: formData.name,      // Form field: Name
      from_email: formData.email,    // Form field: Email
      message: formData.message, // Form field: Message
      to_email: "nameideag@gmail.com"  // Explicitly specify the recipient's email address
    },
    "FbCm8UfJ1mQKFnt8q" // Replace with your user ID
  )
  .then(
    (response) => {
      setIsLoading(false);
      setStatus("Message sent successfully!");
      setFormData({ from_name: "", From_email: "", message: "" });
    },
    (error) => {
      setIsLoading(false);
      setStatus("Failed to send message. Please try again.");
      console.error("EmailJS error:", error); // Log the error details
    }
  );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#f8f9fa]"
    >
      <HeroSection context={context} />

      <div className="w-full md:w-[80%] mx-auto text-[#343a40] py-10">
        <div>
          <br /> <br />
          <h2 className="sm:text-[36px] text-[28px] text-center font-semibold">
            Contact Us
          </h2>
        </div>

        <div className="mt-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-3 w-full md:w-[80%] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 w-full md:w-[80%] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-3 w-full md:w-[80%] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            {status && (
              <div
                className={`mt-4 text-center ${
                  status.includes("success") ? "text-green-500" : "text-red-500"
                }`}
              >
                {status}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default ContactUs;

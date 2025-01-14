"use client"
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";

 const context = "Name Idea Generator's Privacy Policy"

const PrivacyPolicy = () => {

    return (
        <motion.div
            initial={{ opacity: 0, x: 1200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#f8f9fa] "
        >
            <HeroSection  context={context} />

            <div className="w-[80%] mx-auto text-[#343a40] ">
                <div>
                    <br />
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    Privacy Policy
                    </h2>
                    <p className="sm:text-[16px] text-[16px] ">
                    We respect your privacy and protect your data. This policy explains how we collect, use, and safeguard information when 
                    you use our <a href="https://www.nameideagenerator.com/"> Name Generator tools </a> on our site.
                    </p>
                    <br />
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[80%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold">
                            Information We Collect
                            </h2>
                            <p>
                            We gather limited information to improve our services. This may include:
                            <li>Email addresses you provide when contacting us.</li>
                            <li>Data related to your interaction with the site, such as page visits or name generator activity.</li>
                            We do not collect sensitive personal data.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold">
                            How We Use Your Information
                            </h2>
                            <p>
                            We use your information to:
                            <li>Respond to your inquiries.</li>
                            <li>Improve the features and functionality of our tools.</li>
                            <li>Analyze site usage to enhance user experience.</li>
                            We will not sell or share your information with third parties.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Cookies
                            </h2>
                            <p>
                            We use cookies to provide a smooth experience. Cookies help us remember your preferences and track site performance. You can disable cookies through your browser settings if you prefer.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Data Security
                            </h2>
                            <p>
                            We take security seriously. Your information is protected with industry-standard security measures to prevent unauthorized access.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Third-Party Links
                            </h2>
                            <p>
                            Our site may link to other websites. We are not responsible for their content or privacy practices. Please review their policies before sharing information.
                            </p>
                        </div>

                        <div className="py-[10px] flex flex-col gap-4">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Changes to This Policy
                            </h2>
                            <p>
                            We may update this policy. Changes will be posted on this page, so you can stay informed about how we handle your data.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Contact Us
                            </h2>
                            <p>
                            If you have any questions, please contact us at <a href="mailto:nameideag@gmail.com">nameideag@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center">
                    <a href="https://www.nameideagenerator.com/" className="inline-block px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                        Generate Now
                    </a>
                </div>
                <br />
            </div>


            <Footer />
        </motion.div>
    );
};

export default PrivacyPolicy;

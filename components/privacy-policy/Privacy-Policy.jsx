"use client"
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";

 const context = "Privacy Policy"

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
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                    Information We Collect
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    We collect your email address when you voluntarily provide it through our contact form. We also collect anonymous usage data to improve our platform.
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[50%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold">
                            How We Use Your Information
                            </h2>
                            <p>
                            We use your email to respond to your inquiries. 
                            We may also send updates related to our services. We do not sell or share your email with third parties.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold">
                            Data Security
                            </h2>
                            <p>
                            We take strong measures to protect your data. We use encryption and secure servers to safeguard your information.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Cookies
                            </h2>
                            <p>
                            We use cookies to enhance your experience. Cookies help us understand how you use our site. You can disable cookies through your browser settings.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Third-Party Links
                            </h2>
                            <p>
                            Our <a href="nameideagenerator.com"> Name Idea Generator</a> website may contain links to other sites. We are not responsible for the privacy practices of these sites.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Your Rights
                            </h2>
                            <p>
                            You can request access to your information. You can also ask us to delete your data at any time.
                            </p>
                        </div>

                        <div className="py-[10px] flex flex-col gap-4">
                            <h2 className="sm:text-[28px] text-[20px] font-semibold ">
                            Changes to This Policy
                            </h2>
                            <p>
                            We may update this policy from time to time. We will notify you of any significant changes.
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
            </div>


            <Footer />
        </motion.div>
    );
};

export default PrivacyPolicy;

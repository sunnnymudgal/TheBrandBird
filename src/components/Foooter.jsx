import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";
import Contact from "./Contact";

function Foooter() {
  const [showContact, setShowContact] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: false }}
    >
      {showContact && <Contact onClose={() => setShowContact(false)} />}

      <footer className="w-full mt-32">
        <div
          className="relative mx-6 md:mx-20 mb-12 
        bg-linear-to-br from-blue-50 via-white to-blue-100
        border border-blue-100
        rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent opacity-40"></div>

          <div className="relative flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col gap-5 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-semibold bg-linear-to-r from-[#116ec0] to-[#b0b0d6] bg-clip-text text-transparent">
                Ready to Build Your Brand?
              </h2>

              <p className="text-gray-600 text-lg md:text-xl">
                Let's create something amazing together.
              </p>

              <div
                onClick={() => setShowContact(true)}
                className="group flex cursor-pointer text-lg items-center justify-center gap-2 w-fit text-[#155015]  px-3 py-3 mt-1 rounded-xl font-[josefin] font-light overflow-hidden"
              >
                <div className="relative h-8 overflow-hidden">
                  <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-7">
                    <span>Get In Touch</span>
                    <span>Get In Touch</span>
                  </div>
                </div>

                <div className="transition-transform duration-500 group-hover:translate-x-1 text-2xl">
                  <CiLocationArrow1 />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-2xl md:text-3xl font-semibold text-gray-900">
                THEBRANDBIRD
              </div>

              <div className="flex gap-6 text-2xl text-gray-700">
                <FaInstagram className="hover:text-blue-500 cursor-pointer transition duration-300" />

                <FaXTwitter className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </div>

              <p className="text-gray-500 text-sm max-w-sm">
                A creative design studio building modern brands and digital
                experiences.
              </p>
            </div>
          </div>

          <div className="relative border-t border-emerald-100 mt-12 pt-6 text-gray-500 text-sm flex flex-col md:flex-row justify-between gap-3">
            <span>© 2026 TheBrandBird</span>
            <span>जय भारत 🇮🇳</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default Foooter;

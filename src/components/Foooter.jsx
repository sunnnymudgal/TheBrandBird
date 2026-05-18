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
     
    >
      {showContact && <Contact onClose={() => setShowContact(false)} />}

      <footer className="w-full px-4 md:px-8 pb-10 bg-[#ffffff]">
        <div
          className="
          relative
          max-w-7xl
          mx-auto
          overflow-hidden
          rounded-[40px]
          border border-white/20
          bg-gradient-to-br from-[#b8c2ef] via-[#c6d1ff] to-[#dfe7ff]
          shadow-[0_20px_80px_rgba(0,0,0,0.15)]
          backdrop-blur-2xl
          p-8 md:p-16
        "
        >
          {/* BLUR CIRCLES */}
          <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] rounded-full bg-white/20 blur-[100px]" />

          <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] rounded-full bg-[#8f9ad6]/30 blur-[120px]" />

          {/* NOISE OVERLAY */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* CONTENT */}
          <div className="relative flex flex-col lg:flex-row justify-between gap-16">
            {/* LEFT */}
            <div className="max-w-2xl">
              <p className="uppercase tracking-[6px] text-sm text-[#111827]/50 mb-5">
                LET&apos;S BUILD SOMETHING
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] text-[#111827]">
                Ready To
                <br />
                Elevate Your
                <br />
                Brand?
              </h2>

              <p className="mt-8 text-lg md:text-xl leading-relaxed text-[#374151] max-w-xl">
                Creating premium digital experiences with modern design,
                immersive visuals, and meaningful interactions.
              </p>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowContact(true)}
                className="
                  group
                  mt-10
                  flex
                  items-center
                  gap-3
                  px-8
                  py-5
                  rounded-full
                  bg-[#111827]
                  text-white
                  text-lg
                  shadow-xl
                  hover:shadow-[0_10px_50px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-500
                "
              >
                <span>Get In Touch</span>

                <div className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <CiLocationArrow1 className="text-2xl" />
                </div>
              </motion.button>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-[#111827]">
                  THEBRANDBIRD
                </h1>

                <p className="mt-4 max-w-sm text-[#374151] leading-relaxed">
                  A creative portfolio focused on premium UI experiences,
                  modern branding, and futuristic digital products.
                </p>
              </div>

              {/* SOCIALS */}
              <div className="flex items-center gap-5">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-white/30
                    backdrop-blur-xl
                    border border-white/20
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-[#111827]
                    cursor-pointer
                    hover:bg-white/50
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram />
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-white/30
                    backdrop-blur-xl
                    border border-white/20
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-[#111827]
                    cursor-pointer
                    hover:bg-white/50
                    transition-all
                    duration-300
                  "
                >
                  <FaXTwitter />
                </motion.div>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="relative mt-16 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#374151]">
            <span>© 2026 THEBRANDBIRD</span>

            <span className="tracking-[3px]">
              DESIGNED WITH VISION • जय भारत 🇮🇳
            </span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default Foooter;
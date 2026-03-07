import React from "react";
import Nav from "./Nav";
import Foooter from "./Foooter";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutCard({ head, foot }) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-2xl bg-[#E8E8E8] hover:bg-[#dcdcdc] transition duration-300 min-h-60">
      <div className="text-sm font-light tracking-wide text-gray-600">
        {head}
      </div>

      <div className="text-lg md:text-xl lg:text-2xl font-medium leading-snug">
        {foot}
      </div>
    </div>
  );
}

function Services({ text }) {
  return (
    <div
      className="relative bg-[#3a3d3b] overflow-hidden cursor-pointer
      font-[monoserrat] font-extrabold text-lg sm:text-xl md:text-2xl
      group flex items-center py-8 sm:py-10"
    >
      <div className="absolute inset-0 w-0 bg-amber-400 transition-all duration-800 ease-out group-hover:w-full"></div>

      <span className="relative px-5 tracking-widest text-amber-100 group-hover:text-[#363535] transition-transform duration-500 group-hover:translate-x-3">
        {text}
      </span>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="sticky top-0 z-30 bg-white">
        <Nav />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="px-5 sm:px-8 md:px-12 lg:px-20"
      >
        <div className="font-[josefin] mt-12 md:mt-20 tracking-widest">
          ABOUT
        </div>

        <div className="w-full md:w-9/12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-7 md:my-14 leading-tight">

  <span className="bg-linear-to-r from-red-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
    We are
  </span>

  <span className="bg-linear-to-r from-red-900 via-red-600 to-orange-700 bg-clip-text text-transparent">
    {" "}TheBrandBird
  </span>

  <span className="bg-linear-to-r from-red-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
    {" "}— an independent
  </span>

  <span className="bg-linear-to-r from-red-900 via-red-600 to-orange-700 bg-clip-text text-transparent">
    {" "}design studio
  </span>

  <span className="bg-linear-to-r from-red-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
    {" "}crafting bold brands
  </span>

  <span className="bg-linear-to-r from-red-900 via-red-600 to-orange-700 bg-clip-text text-transparent">
    {" "}through creativity
  </span>

  <span className="bg-linear-to-r from-red-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
    {" "}, strategy
  </span>

  <span className="bg-linear-to-r from-red-900 via-red-600 to-orange-700 bg-clip-text text-transparent">
    {" "}and innovation.
  </span>

</div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 px-5 sm:px-10 mt-16 md:mt-32">
        <div className="flex flex-col justify-between p-6">
          <div className="text-lg font-light tracking-wide text-gray-600">
            Want to work with us?
          </div>

          <div className="text-lg md:text-xl font-medium leading-snug mt-4">
            Ready to take the next step? Whether you're just exploring ideas or
            you're ready to get started, schedule an intro call to discuss your
            project in detail.
          </div>
          <a
            href="https://calendar.app.google/qGVE3ewuUWmhy9cC7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3 w-fit px-6 py-3 rounded-xl
            bg-linear-to-r from-[#67c0ba] via-[#95d8c5] to-[#356575]
            text-white font-semibold shadow-lg hover:scale-95
            transition-all duration-300 cursor-pointer mt-6"
            >
              <span className="tracking-wide">Book a Call</span>

              <motion.div
                animate={{ rotate: [0, -20, 20, -15, 15, 0] }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
              >
                <FaPhone className="text-white text-lg" />
              </motion.div>
            </motion.div>
          </a>
        </div>

        <AboutCard
          head="OUR VISION"
          foot="Create Meaningful Impact And Compelling Experiences With Our Clients."
        />

        <AboutCard
          head="OUR MISSION"
          foot="Craft Digital Solutions That Blend Tech And Design Empowering Brands To Succeed."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-5 sm:px-10">
        <AboutCard
          head="OUR VALUES"
          foot="We believe in creativity, innovation and collaboration to deliver powerful solutions."
        />

        <AboutCard
          head="OUR APPROACH"
          foot="Every project is driven by strategy, design thinking and attention to detail."
        />
      </div>

      <div className="my-24 md:my-36">
        <div className="px-5 sm:px-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[majormono] font-bold">
          All the Services You Need <br />
          —Under One Roof
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-2xl mt-14">
          <div>
            <Services text="01 Website Design and Development" />
            <Services text="02 Crafting Unique Branding Identities" />
            <Services text="03 Creating Seamless Motion Design" />
            <Services text="04 Designing Social Media Feeds" />
          </div>

          <div>
            <Services text="05 Photography" />
            <Services text="06 Videography" />
            <Services text="07 Company Profile" />
            <Services text="08 Enhancing Digital Experience" />
          </div>
        </div>
      </div>

      <Foooter />
    </div>
  );
}

export default AboutPage;
